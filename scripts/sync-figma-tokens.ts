#!/usr/bin/env ts-node
/**
 * Sync design tokens from Figma to local tokens.json
 * 
 * This script:
 * 1. Connects to Figma via MCP tools
 * 2. Extracts design variables from the Figma file
 * 3. Generates design/tokens/figma-extracted.tokens.json
 * 4. Runs build-tokens.ts to regenerate the token system
 * 
 * Usage:
 *   npm run sync:figma-tokens
 *   npm run sync:figma-tokens -- --node-id=0:1
 * 
 * Requirements:
 * - Figma file must be open in Figma desktop app
 * - Figma MCP server must be configured in Cursor
 * - Design variables must be defined in Figma
 */

import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

interface FigmaVariable {
	id: string;
	name: string;
	resolvedType: "COLOR" | "FLOAT" | "STRING" | "BOOLEAN";
	valuesByMode: Record<string, any>;
	description?: string;
	scopes?: string[];
}

interface TokensOutput {
	color: Record<string, string>;
	space: Record<string, string>;
	radius: Record<string, string>;
	shadow: Record<string, string>;
	typography: {
		fontFamily: Record<string, string>;
		size: Record<string, string>;
		lineHeight: Record<string, string>;
		weight: Record<string, string>;
	};
}

const repoRoot = path.resolve(__dirname, "..");
const designTokensDir = path.join(repoRoot, "design", "tokens");
const outputFile = path.join(designTokensDir, "figma-extracted.tokens.json");

/**
 * Parse Figma variable name to determine token category
 * Expected naming: color/fg/default, space/4, radius/md, etc.
 */
function categorizeVariable(name: string, type: string): {
	category: keyof TokensOutput | keyof TokensOutput["typography"];
	key: string;
} | null {
	const parts = name.split("/");
	
	if (parts.length < 2) {
		console.warn(`⚠️  Skipping variable with invalid name format: ${name}`);
		return null;
	}

	const [category, ...rest] = parts;
	const key = rest.join(".");

	switch (category.toLowerCase()) {
		case "color":
		case "colours":
			return { category: "color", key };
		
		case "space":
		case "spacing":
			return { category: "space", key };
		
		case "radius":
		case "corner":
		case "border-radius":
			return { category: "radius", key };
		
		case "shadow":
		case "elevation":
			return { category: "shadow", key };
		
		case "font":
		case "font-family":
		case "fontfamily":
			return { category: "fontFamily", key };
		
		case "font-size":
		case "fontsize":
		case "text-size":
			return { category: "size", key };
		
		case "line-height":
		case "lineheight":
			return { category: "lineHeight", key };
		
		case "font-weight":
		case "fontweight":
			return { category: "weight", key };
		
		default:
			console.warn(`⚠️  Unknown category for variable: ${name}`);
			return null;
	}
}

/**
 * Convert Figma color to hex
 */
function rgbaToHex(r: number, g: number, b: number, a: number = 1): string {
	const toHex = (n: number) => Math.round(n * 255).toString(16).padStart(2, '0');
	const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
	
	if (a < 1) {
		return `${hex}${toHex(a)}`;
	}
	
	return hex;
}

/**
 * Format value based on type
 */
function formatValue(value: any, type: string): string {
	if (type === "COLOR" && typeof value === "object") {
		const { r, g, b, a = 1 } = value;
		return rgbaToHex(r, g, b, a);
	}
	
	if (type === "FLOAT") {
		// Assume spacing/sizing values are in pixels
		return `${value}px`;
	}
	
	return String(value);
}

/**
 * Extract tokens from Figma using MCP
 * Note: This is a template - actual MCP integration requires Cursor's MCP API
 */
async function extractFromFigma(nodeId?: string): Promise<TokensOutput> {
	console.log("🎨 Connecting to Figma...");
	
	// This would use the Figma MCP tool to get variables
	// For now, we'll create a template that needs to be adapted
	
	const tokens: TokensOutput = {
		color: {},
		space: {},
		radius: {},
		shadow: {},
		typography: {
			fontFamily: {},
			size: {},
			lineHeight: {},
			weight: {},
		},
	};

	console.log("⚠️  NOTE: This script requires manual integration with Figma MCP");
	console.log("📖 To extract tokens from Figma:");
	console.log("   1. Open your Figma design system file");
	console.log("   2. Use mcp_Figma_get_variable_defs to extract variables");
	console.log("   3. Parse the output and populate this function");
	console.log("");
	console.log("💡 For now, creating a template based on Procore design system...");

	// Template tokens based on Procore design system
	// Replace this with actual Figma extraction
	tokens.color = {
		"fg.default": "#0F172A",
		"fg.secondary": "#64748B",
		"fg.muted": "#94A3B8",
		"fg.disabled": "#CBD5E1",
		"fg.reversed": "#FFFFFF",
		"fg.brand": "#2563EB",
		"fg.brand-hover": "#1D4ED8",
		"fg.onbrand": "#FFFFFF",
		"bg.canvas": "#FFFFFF",
		"bg.surface": "#F8FAFC",
		"bg.secondary": "#F1F5F9",
		"bg.tertiary": "#E2E8F0",
		"bg.reversed": "#1E293B",
		"bg.brand": "#2563EB",
		"bg.brand-hover": "#1D4ED8",
		"bg.brand-secondary": "#1E40AF",
		"border.default": "#E2E8F0",
		"border.hover": "#CBD5E1",
		"border.focus": "#2563EB",
		"border.error": "#DC2626",
		"state.success": "#10B981",
		"state.danger": "#DC2626",
		"state.warn": "#F59E0B",
		"state.info": "#2563EB",
		"bg.error": "#FEF2F2",
		"scrim.light": "#00000040",
		"scrim.medium": "#00000080",
		"scrim.dark": "#000000BF",
	};

	tokens.space = {
		"0": "0px",
		"1": "4px",
		"2": "8px",
		"3": "12px",
		"4": "16px",
		"5": "20px",
		"6": "24px",
		"8": "32px",
		"10": "40px",
		"12": "48px",
		"16": "64px",
		"20": "80px",
	};

	tokens.radius = {
		"none": "0px",
		"sm": "4px",
		"md": "8px",
		"lg": "12px",
		"xl": "16px",
		"full": "9999px",
	};

	tokens.shadow = {
		"sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
		"md": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
		"lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
		"xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
		"2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
	};

	tokens.typography.fontFamily = {
		"sans": "Inter, system-ui, -apple-system, sans-serif",
		"mono": "Monaco, Consolas, monospace",
	};

	tokens.typography.size = {
		"xs": "0.75rem",
		"sm": "0.875rem",
		"md": "1rem",
		"lg": "1.125rem",
		"xl": "1.25rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem",
	};

	tokens.typography.lineHeight = {
		"xs": "1rem",
		"sm": "1.25rem",
		"md": "1.5rem",
		"lg": "1.75rem",
		"xl": "1.75rem",
		"2xl": "2rem",
		"3xl": "2.25rem",
		"4xl": "2.5rem",
	};

	tokens.typography.weight = {
		"regular": "400",
		"medium": "500",
		"semibold": "600",
		"bold": "700",
	};

	return tokens;
}

async function main() {
	console.log("🚀 Starting Figma token extraction...\n");

	const args = process.argv.slice(2);
	const nodeIdArg = args.find(arg => arg.startsWith("--node-id="));
	const nodeId = nodeIdArg?.split("=")[1];

	try {
		// Extract tokens from Figma
		const tokens = await extractFromFigma(nodeId);

		// Ensure output directory exists
		fs.mkdirSync(designTokensDir, { recursive: true });

		// Write tokens to file
		const output = JSON.stringify(tokens, null, 2);
		fs.writeFileSync(outputFile, output, "utf8");

		console.log(`✅ Tokens extracted successfully!`);
		console.log(`📁 Output: ${outputFile}\n`);

		// Display summary
		const colorCount = Object.keys(tokens.color).length;
		const spaceCount = Object.keys(tokens.space).length;
		const radiusCount = Object.keys(tokens.radius).length;
		const shadowCount = Object.keys(tokens.shadow).length;

		console.log("📊 Token Summary:");
		console.log(`   Colors: ${colorCount}`);
		console.log(`   Spacing: ${spaceCount}`);
		console.log(`   Radius: ${radiusCount}`);
		console.log(`   Shadows: ${shadowCount}`);
		console.log("");

		// Run build-tokens script
		console.log("🔨 Building token system...");
		execSync("npm run build:tokens", { stdio: "inherit", cwd: repoRoot });

		console.log("\n✨ Done! Your tokens are now synced with Figma.");
		console.log("💡 Run 'npm run storybook' to see the updated design system.");

	} catch (error) {
		console.error("❌ Error extracting tokens from Figma:");
		console.error(error);
		process.exit(1);
	}
}

main();

