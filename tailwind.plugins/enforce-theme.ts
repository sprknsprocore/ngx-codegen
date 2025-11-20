import * as fs from "fs";
import * as path from "path";

type ScanOpts = {
	root?: string;
	maxFiles?: number;
};

function listSourceFiles(dir: string, acc: string[] = [], max = 2000): string[] {
	if (!fs.existsSync(dir)) return acc;
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	for (const e of entries) {
		if (acc.length >= max) break;
		if (e.name.startsWith(".")) continue;
		const p = path.join(dir, e.name);
		if (e.isDirectory()) {
			listSourceFiles(p, acc, max);
		} else if (/\.(tsx?|jsx?|mdx)$/.test(e.name)) {
			acc.push(p);
		}
	}
	return acc;
}

function scanForViolations(root: string): { file: string; line: number; match: string }[] {
	const files = [
		...listSourceFiles(path.join(root, "src")),
		...listSourceFiles(path.join(root, "packages")),
		...listSourceFiles(path.join(root, "apps")),
	];
	const results: { file: string; line: number; match: string }[] = [];
	const arbitraryRe = /\[[^\]]+\]/g; // tailwind arbitrary values
	const hexColorRe = /#[0-9A-Fa-f]{3,6}\b/g;
	const rgbHslRe = /\brgb(a)?\(|\bhsl(a)?\(/g;
	for (const file of files) {
		const content = fs.readFileSync(file, "utf8");
		const lines = content.split(/\r?\n/);
		lines.forEach((ln, idx) => {
			const candidates = [arbitraryRe, hexColorRe, rgbHslRe];
			for (const re of candidates) {
				re.lastIndex = 0;
				const m = re.exec(ln);
				if (m) {
					results.push({ file, line: idx + 1, match: m[0] });
				}
			}
		});
	}
	return results;
}

export default function enforceTheme(_opts: ScanOpts = {}) {
	return function () {
		const root = _opts.root ?? path.resolve(__dirname, "..");
		const enforce = process.env.TAILWIND_ENFORCE_STRICT !== "false";
		const fail = process.env.TAILWIND_ENFORCE_FAIL !== "false";
		if (!enforce) return;
		const violations = scanForViolations(root);
		if (violations.length > 0) {
			const header =
				"[enforce-theme] Found disallowed raw values. Use theme tokens via Tailwind or extend the theme.";
			const sample = violations.slice(0, 10).map((v) => ` - ${path.relative(root, v.file)}:${v.line} → "${v.match}"`).join("\n");
			const msg = `${header}\n${sample}\n...and ${Math.max(0, violations.length - 10)} more.`;
			if (fail) {
				throw new Error(msg);
			} else {
				// eslint-disable-next-line no-console
				console.warn(msg);
			}
		}
	};
}


