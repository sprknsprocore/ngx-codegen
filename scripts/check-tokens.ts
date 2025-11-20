/**
 * Verifies that generated token artifacts are up-to-date with design/tokens/*.json by
 * recomputing the checksum and comparing to packages/tokens/src/.tokens-hash.
 */
import * as fs from "fs";
import * as path from "path";
import * as crypto from "crypto";

const repoRoot = path.resolve(__dirname, "..");
const root = path.resolve(repoRoot, "..");
const designDir = path.join(root, "design", "tokens");
const outHashFile = path.join(root, "packages", "tokens", "src", ".tokens-hash");

function hashDesignTokensPayload(payload: unknown): string {
	const json = JSON.stringify(payload);
	return crypto.createHash("sha256").update(json).digest("hex");
}

function readAllTokenJson(): Record<string, unknown> {
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
	const merged: Record<string, unknown> = {};
	for (const file of files) {
		const json = JSON.parse(fs.readFileSync(file, "utf8")) as Record<string, unknown>;
		for (const [k, v] of Object.entries(json)) {
			if (v && typeof v === "object") {
				merged[k] = { ...(merged[k] as any), ...(v as any) };
			} else {
				merged[k] = v;
			}
		}
	}
	return merged;
}

function main() {
	const payload = readAllTokenJson();
	const checksum = hashDesignTokensPayload(payload);
	if (!fs.existsSync(outHashFile)) {
		console.error(`Token hash file missing: ${outHashFile}`);
		process.exit(1);
	}
	const prev = fs.readFileSync(outHashFile, "utf8").trim();
	if (prev !== checksum) {
		console.error("Token artifacts are stale. Run `npm run build:tokens`.");
		console.error(`expected: ${prev}`);
		console.error(`actual:   ${checksum}`);
		process.exit(1);
	}
}

main();


