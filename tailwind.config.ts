import type { Config } from "tailwindcss";
import { themeExtensions } from "@ssot/tokens";
import enforceTheme from "./tailwind.plugins/enforce-theme";
import preflightCssVars from "./tailwind.plugins/preflight-css-vars";

const config: Config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./packages/**/*.{js,ts,jsx,tsx,mdx}",
		"./apps/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			...themeExtensions,
			fontFamily: {
				sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
				mono: ["var(--font-mono)", "ui-monospace"],
			},
			keyframes: {
				indeterminate: {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(400%)" },
				},
				stripe: {
					"0%": { backgroundPosition: "0 0" },
					"100%": { backgroundPosition: "40px 0" },
				},
			},
			animation: {
				indeterminate: "indeterminate 1.5s ease-in-out infinite",
				stripe: "stripe 1s linear infinite",
			},
		},
	},
	plugins: [
		// Token preflight: expose CSS variables for color tokens and default font families
		preflightCssVars(),
		// Enforcement: block arbitrary values and raw colors
		enforceTheme(),
	],
};

export default config;


