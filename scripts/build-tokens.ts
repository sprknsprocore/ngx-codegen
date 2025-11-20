/**
 * Build script: reads design/tokens/*.json and emits:
 * - packages/tokens/src/semantic-tokens.ts (typed)
 * - packages/tokens/src/tailwind-theme.ts (theme extension)
 * - packages/tokens/src/css-vars.ts (root CSS variables map)
 * - packages/tokens/src/.tokens-hash (checksum for check:tokens)
 *
 * Input schema (merged across files):
 * {
 *   "color": { "fg.default": "#0F172A", "bg.canvas": "#FFFFFF", ... },
 *   "space": { "0": "0px", "1": "4px", "2": "8px", "3": "12px", ... },
 *   "radius": { "none": "0px", "sm": "4px", "md": "8px", "lg": "12px", "full": "9999px" },
 *   "shadow": { "sm": "0 1px 2px 0 rgba(0,0,0,0.05)", ... },
 *   "typography": {
 *     "fontFamily": { "sans": "Inter, system-ui, sans-serif" },
 *     "size": { "sm": "0.875rem", "md": "1rem", "lg": "1.125rem" },
 *     "lineHeight": { "sm": "1.25rem", "md": "1.5rem", "lg": "1.75rem" },
 *     "weight": { "regular": "400", "medium": "500", "semibold": "600" }
 *   }
 * }
 */
import * as fs from "fs";
import * as path from "path";
import * as crypto from "crypto";

type Dict<T = unknown> = Record<string, T>;

type TokensInput = {
	color?: Dict<string>;
	space?: Dict<string>;
	radius?: Dict<string>;
	shadow?: Dict<string>;
	typography?: {
		fontFamily?: Dict<string>;
		size?: Dict<string>;
		lineHeight?: Dict<string>;
		weight?: Dict<string>;
	};
};

type SemanticTokens = Required<TokensInput>;

const repoRoot = path.resolve(__dirname, "..");
const root = repoRoot;
const designDir = path.join(root, "design", "tokens");
const outDir = path.join(root, "packages", "tokens", "src");

function ensureDirs() {
	fs.mkdirSync(outDir, { recursive: true });
}

function readAllTokenJson(): TokensInput {
	if (!fs.existsSync(designDir)) {
		throw new Error(`Missing design tokens directory: ${designDir}`);
	}
	const files = fs
		.readdirSync(designDir)
		.filter((f) => f.endsWith(".json"))
		.map((f) => path.join(designDir, f));
	if (files.length === 0) {
		throw new Error(`No token JSON files found in ${designDir}`);
	}
	const merged: TokensInput = {};
	for (const file of files) {
		const json = JSON.parse(fs.readFileSync(file, "utf8")) as TokensInput;
		merged.color = { ...(merged.color ?? {}), ...(json.color ?? {}) };
		merged.space = { ...(merged.space ?? {}), ...(json.space ?? {}) };
		merged.radius = { ...(merged.radius ?? {}), ...(json.radius ?? {}) };
		merged.shadow = { ...(merged.shadow ?? {}), ...(json.shadow ?? {}) };
		merged.typography = {
			fontFamily: {
				...(merged.typography?.fontFamily ?? {}),
				...(json.typography?.fontFamily ?? {}),
			},
			size: { ...(merged.typography?.size ?? {}), ...(json.typography?.size ?? {}) },
			lineHeight: {
				...(merged.typography?.lineHeight ?? {}),
				...(json.typography?.lineHeight ?? {}),
			},
			weight: { ...(merged.typography?.weight ?? {}), ...(json.typography?.weight ?? {}) },
		};
	}
	return merged;
}

function hexToHslTriple(hex: string): string {
	// Accept #RGB, #RRGGBB
	let h = hex.trim().toLowerCase();
	if (!h.startsWith("#")) return hex;
	if (h.length === 4) {
		const r = parseInt(h[1] + h[1], 16);
		const g = parseInt(h[2] + h[2], 16);
		const b = parseInt(h[3] + h[3], 16);
		return rgbToHslTriple(r, g, b);
	}
	if (h.length === 7) {
		const r = parseInt(h.substring(1, 3), 16);
		const g = parseInt(h.substring(3, 5), 16);
		const b = parseInt(h.substring(5, 7), 16);
		return rgbToHslTriple(r, g, b);
	}
	return hex;
}

function rgbToHslTriple(r: number, g: number, b: number): string {
	r /= 255;
	g /= 255;
	b /= 255;
	const max = Math.max(r, g, b),
		min = Math.min(r, g, b);
	let h = 0,
		s = 0,
		l = (max + min) / 2;

	if (max !== min) {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}
	const H = Math.round(h * 360);
	const S = Math.round(s * 100);
	const L = Math.round(l * 100);
	return `${H} ${S}% ${L}%`; // space-separated for hsl(var(--...)/<alpha-value>)
}

function hashDesignTokensPayload(payload: unknown): string {
	const json = JSON.stringify(payload);
	return crypto.createHash("sha256").update(json).digest("hex");
}

function writeFileIfChanged(filepath: string, content: string) {
	if (fs.existsSync(filepath)) {
		const prev = fs.readFileSync(filepath, "utf8");
		if (prev === content) return;
	}
	fs.writeFileSync(filepath, content, "utf8");
}

function camelToKebab(key: string): string {
	return key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}

function dotPathToNestedObject(valueByDotKey: Dict<string>): Record<string, any> {
	const root: Record<string, any> = {};
	for (const [k, v] of Object.entries(valueByDotKey)) {
		const parts = k.split(".");
		let curr = root;
		for (let i = 0; i < parts.length; i++) {
			const part = parts[i];
			if (i === parts.length - 1) {
				curr[part] = v;
			} else {
				curr[part] = curr[part] ?? {};
				curr = curr[part];
			}
		}
	}
	return root;
}

function build() {
	ensureDirs();
	const input = readAllTokenJson();

	// Fill optional sections to Required
	const tokens: SemanticTokens = {
		color: input.color ?? {},
		space: input.space ?? {},
		radius: input.radius ?? {},
		shadow: input.shadow ?? {},
		typography: {
			fontFamily: input.typography?.fontFamily ?? {},
			size: input.typography?.size ?? {},
			lineHeight: input.typography?.lineHeight ?? {},
			weight: input.typography?.weight ?? {},
		},
	};

	const checksum = hashDesignTokensPayload(tokens);
	const banner = `/**\n * AUTO-GENERATED by scripts/build-tokens.ts — DO NOT EDIT\n * Source: design/tokens/*.json\n * Checksum: ${checksum}\n */\n`;

	// Build color CSS var values (HSL triple)
	const colorCssVarTriples: Dict<string> = {};
	for (const [name, value] of Object.entries(tokens.color)) {
		const varName = `--color-${name.replace(/\./g, "-")}`;
		let triple: string;
		if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value)) {
			triple = hexToHslTriple(value);
		} else if (/^hsl\(/i.test(value)) {
			// Accept hsl(h s l / a) or hsl(h,s,l). Normalize to "h s l"
			const nums = value.replace(/hsl\(|\)|%|,/gi, " ").split(/\s+/).filter(Boolean);
			triple = `${nums[0]} ${nums[1]}% ${nums[2]}%`;
		} else {
			// Fallback: keep as-is (allows named colors); alpha handling may not work with hsl(var())
			triple = value;
		}
		colorCssVarTriples[varName] = triple;
	}

	// Tailwind theme extension: colors use hsl(var(--...)/<alpha-value>)
	const nestedColorTheme: Record<string, any> = {};
	for (const [name] of Object.entries(tokens.color)) {
		const dotNested = dotPathToNestedObject({
			[name]: `hsl(var(--color-${name.replace(/\./g, "-")}) / <alpha-value>)`,
		});
		Object.assign(nestedColorTheme, deepMerge(nestedColorTheme, dotNested));
	}

	// Spacing, radius, shadow, typography to Tailwind
	const spacingTheme = { ...tokens.space };
	const radiusTheme = { ...tokens.radius };
	const shadowTheme = { ...tokens.shadow };

	// FontSize: Tailwind expects [fontSize, { lineHeight, letterSpacing }]
	const fontSizeTheme: Record<string, [string, { lineHeight?: string }]> = {};
	for (const [k, size] of Object.entries(tokens.typography.size)) {
		const lh = tokens.typography.lineHeight[k] ?? undefined;
		fontSizeTheme[k] = [String(size), lh ? { lineHeight: String(lh) } : {}];
	}

	const semanticTokensTs = banner + `export const tokens = ${JSON.stringify(tokens, null, 2)} as const;\n\nexport type ColorTokenKey = keyof typeof tokens.color;\nexport type SpaceTokenKey = keyof typeof tokens.space;\nexport type RadiusTokenKey = keyof typeof tokens.radius;\nexport type ShadowTokenKey = keyof typeof tokens.shadow;\nexport type FontSizeTokenKey = keyof typeof tokens.typography.size;\nexport type LineHeightTokenKey = keyof typeof tokens.typography.lineHeight;\nexport type FontWeightTokenKey = keyof typeof tokens.typography.weight;\nexport type FontFamilyTokenKey = keyof typeof tokens.typography.fontFamily;\n`;

	const tailwindThemeTs =
		banner +
		`export const themeExtensions = {\n` +
		`  colors: ${JSON.stringify(nestedColorTheme, null, 2)},\n` +
		`  spacing: ${JSON.stringify(spacingTheme, null, 2)},\n` +
		`  borderRadius: ${JSON.stringify(radiusTheme, null, 2)},\n` +
		`  boxShadow: ${JSON.stringify(shadowTheme, null, 2)},\n` +
		`  fontSize: ${JSON.stringify(fontSizeTheme, null, 2)}\n` +
		`} as const;\n`;

	const cssVarsTs =
		banner +
		`export const cssVars = {\n` +
		Object.entries(colorCssVarTriples)
			.map(([k, v]) => `  "${k}": "${v}"`)
			.join(",\n") +
		`\n} as const;\n`;

	writeFileIfChanged(path.join(outDir, "semantic-tokens.ts"), semanticTokensTs);
	writeFileIfChanged(path.join(outDir, "tailwind-theme.ts"), tailwindThemeTs);
	writeFileIfChanged(path.join(outDir, "css-vars.ts"), cssVarsTs);
	writeFileIfChanged(path.join(outDir, ".tokens-hash"), checksum + "\n");
}

function deepMerge<T extends Record<string, any>>(target: T, source: T): T {
	const out: T = { ...(target as any) };
	for (const [key, value] of Object.entries(source)) {
		if (value && typeof value === "object" && !Array.isArray(value)) {
			out[key] = deepMerge(out[key] ?? ({} as any), value as any) as any;
		} else {
			out[key] = value as any;
		}
	}
	return out;
}

build();


