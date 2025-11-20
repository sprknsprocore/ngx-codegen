import { cssVars, tokens } from "@ssot/tokens";

// Tailwind accepts plugin functions directly; no need for tailwindcss/plugin wrapper.
export default function preflightCssVars() {
	return function ({ addBase }: { addBase: (base: Record<string, any>) => void }) {
		const rootVars: Record<string, string> = { ...cssVars };
		// Provide font families as CSS variables for use in theme.fontFamily
		if (tokens.typography?.fontFamily) {
			if (tokens.typography.fontFamily.sans) {
				rootVars["--font-sans"] = tokens.typography.fontFamily.sans;
			}
			if (tokens.typography.fontFamily.mono) {
				rootVars["--font-mono"] = tokens.typography.fontFamily.mono;
			}
		}
		addBase({
			":root": rootVars,
		});
	};
}


