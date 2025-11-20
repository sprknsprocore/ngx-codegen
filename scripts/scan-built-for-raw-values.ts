/**
 * Scans the repository for raw color literals and Tailwind arbitrary values.
 * Intended to run in CI as a fast safeguard in addition to ESLint.
 */
import * as fs from "fs";
import * as path from "path";

const repoRoot = path.resolve(__dirname, "..");
const root = path.resolve(repoRoot, "..");

function listFiles(start: string, exts: RegExp, acc: string[] = []): string[] {
	if (!fs.existsSync(start)) return acc;
	const entries = fs.readdirSync(start, { withFileTypes: true });
	for (const e of entries) {
		if (e.name.startsWith(".")) continue;
		const p = path.join(start, e.name);
		if (e.isDirectory()) listFiles(p, exts, acc);
		else if (exts.test(e.name)) acc.push(p);
	}
	return acc;
}

function main() {
	const files = listFiles(root, /\.(tsx?|jsx?)$/);
	const arbitraryRe = /\[[^\]]+\]/g;
	const hexColorRe = /#[0-9A-Fa-f]{3,6}\b/g;
	const rgbHslRe = /\brgb(a)?\(|\bhsl(a)?\(/g;
	let violations = 0;
	for (const file of files) {
		const content = fs.readFileSync(file, "utf8");
		if (arbitraryRe.test(content) || hexColorRe.test(content) || rgbHslRe.test(content)) {
			violations++;
			process.stdout.write(`raw-values: ${path.relative(root, file)}\n`);
		}
	}
	if (violations > 0) {
		console.error(`Found ${violations} files containing raw values or arbitrary Tailwind values.`);
		process.exit(1);
	}
}

main();


