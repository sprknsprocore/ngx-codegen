/**
 * Scaffolds a new token-first component in packages/ui/src/components/<Name>
 * Usage: ts-node scripts/scaffold-component.ts Button
 */
import * as fs from "fs";
import * as path from "path";

const name = process.argv[2];
if (!name) {
  console.error("Component name is required. Example: ts-node scripts/scaffold-component.ts PillFilter");
  process.exit(1);
}

const pascal = name.replace(/(^\\w|[-_](\\w))/g, (_, a, b) => (b || a).toUpperCase()).replace(/[-_]/g, "");
const dir = path.join(__dirname, "..", "packages", "ui", "src", "components", pascal);

fs.mkdirSync(dir, { recursive: true });

const indexTs = `export * from "./${pascal}";\n`;
const componentTsx = `import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const recipe = cva("", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg"
    },
    variant: {
      solid: "bg-bg-brand text-fg-onbrand",
      soft: "bg-bg-surface text-fg-default",
      outline: "border border-border-default text-fg-default"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "soft"
  }
});

export interface ${pascal}Props extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof recipe> {}

export const ${pascal} = forwardRef<HTMLDivElement, ${pascal}Props>(function ${pascal}(
  { className, size, variant, ...rest },
  ref
) {
  return <div ref={ref} className={clsx("rounded-md", recipe({ size, variant }), className)} {...rest} />;
});
`;
const storyTsx = `import type { Meta, StoryObj } from "@storybook/react";
import { ${pascal} } from "./${pascal}";

const meta: Meta<typeof ${pascal}> = {
  title: "Components/${pascal}",
  component: ${pascal},
  argTypes: {
    size: { control: "select", options: ["sm","md","lg"] },
    variant: { control: "select", options: ["solid","soft","outline"] }
  }
};
export default meta;
type Story = StoryObj<typeof ${pascal}>;

export const Playground: Story = {
  args: {
    children: "${pascal}",
    size: "md",
    variant: "soft"
  }
};
`;
const testTsx = `import { describe, it, expect } from "vitest";

describe("${pascal}", () => {
  it("renders", () => {
    expect(true).toBe(true);
  });
});
`;
const readme = `# ${pascal}

- Token-first component scaffolded via script.
- Variants: size (sm, md, lg), variant (solid, soft, outline)
- Extend using primitives and tokens only. No magic values.
`;

fs.writeFileSync(path.join(dir, "index.ts"), indexTs, "utf8");
fs.writeFileSync(path.join(dir, `${pascal}.tsx`), componentTsx, "utf8");
fs.writeFileSync(path.join(dir, `${pascal}.stories.tsx`), storyTsx, "utf8");
fs.writeFileSync(path.join(dir, `${pascal}.test.ts`), testTsx, "utf8");
fs.writeFileSync(path.join(dir, `README.md`), readme, "utf8");

console.log(`Scaffolded component at ${dir}`);


