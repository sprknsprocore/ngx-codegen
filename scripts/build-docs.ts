/**
 * Generates markdown docs from tokens and component variants.
 * Output: packages/docs/INDEX.md, TOKENS.md
 */
import * as fs from "fs";
import * as path from "path";
import { tokens } from "@ssot/tokens";

const docsDir = path.join(__dirname, "..", "packages", "docs");

function writeFileIfChanged(filepath: string, content: string) {
  if (fs.existsSync(filepath)) {
    const prev = fs.readFileSync(filepath, "utf8");
    if (prev === content) return;
  }
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content, "utf8");
}

function table(obj: Record<string, any>, title: string) {
  const rows = Object.entries(obj).map(([k, v]) => `| \`${k}\` | \`${String(v)}\` |`).join("\n");
  return `### ${title}\n\n| Token | Value |\n|---|---|\n${rows}\n`;
}

function build() {
  const indexMd = `# SSOT Docs

This site is generated from the Single Source of Truth tokens.

- See TOKENS.md for token tables.
- Components are built to use these tokens exclusively via Tailwind theme keys.
`;
  const tokensMd = `# Tokens

${table(tokens.color, "Colors")}
${table(tokens.space, "Spacing")}
${table(tokens.radius, "Radii")}
${table(tokens.shadow, "Shadows")}

### Typography

${table(tokens.typography.fontFamily as any, "Font Families")}
${table(tokens.typography.size as any, "Font Sizes")}
${table(tokens.typography.lineHeight as any, "Line Heights")}
${table(tokens.typography.weight as any, "Font Weights")}
`;
  writeFileIfChanged(path.join(docsDir, "INDEX.md"), indexMd);
  writeFileIfChanged(path.join(docsDir, "TOKENS.md"), tokensMd);
  console.log("Docs built at packages/docs");
}

build();


