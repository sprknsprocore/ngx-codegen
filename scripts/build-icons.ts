/**
 * Converts design/icons/*.svg into React components under packages/icons/src/generated.
 * Usage: ts-node scripts/build-icons.ts
 */
import * as fs from "fs";
import * as path from "path";

const repoRoot = path.resolve(__dirname, "..");
const root = path.resolve(repoRoot, "..");
const inDir = path.join(root, "design", "icons");
const outDir = path.join(root, "packages", "icons", "src", "generated");
const indexFile = path.join(root, "packages", "icons", "src", "index.ts");

function toComponentName(filename: string): string {
  const base = filename.replace(/\.svg$/i, "");
  return base.replace(/(^\\w|[-_](\\w))/g, (_, a, b) => (b || a).toUpperCase()).replace(/[-_]/g, "");
}

function build() {
  if (!fs.existsSync(inDir)) {
    throw new Error(`Missing icons input dir: ${inDir}`);
  }
  fs.mkdirSync(outDir, { recursive: true });
  const files = fs.readdirSync(inDir).filter((f) => f.endsWith(".svg"));
  const exports: string[] = [];
  for (const f of files) {
    const svg = fs.readFileSync(path.join(inDir, f), "utf8");
    const name = toComponentName(f);
    const outPath = path.join(outDir, `${name}.tsx`);
    const tsx = `import * as React from "react";
import { Icon, type IconProps } from "../Icon";
export function ${name}(props: IconProps) {
  return (
    <Icon {...props}>${svg
      .replace(/<\\/?svg[^>]*>/g, "")
      .replace(/fill="[^"]*"/g, "")
      .replace(/stroke="[^"]*"/g, 'stroke="currentColor"')}</Icon>
  );
}
`;
    fs.writeFileSync(outPath, tsx, "utf8");
    exports.push(`export { ${name} } from "./generated/${name}";`);
  }
  if (exports.length > 0) {
    const prev = fs.readFileSync(indexFile, "utf8");
    const marker = "// Generated SVG icon components will be exported here by the build script.";
    const updated = prev.replace(marker, `${marker}\n${exports.join("\n")}`);
    fs.writeFileSync(indexFile, updated, "utf8");
  }
  console.log(`Built ${exports.length} icons to ${outDir}`);
}

build();


