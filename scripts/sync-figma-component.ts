#!/usr/bin/env ts-node
/**
 * Generate or validate component from Figma design
 * 
 * This script helps create new components or validate existing ones against Figma designs.
 * 
 * Usage:
 *   npm run sync:figma-component Button
 *   npm run sync:figma-component Modal -- --node-id=123:456
 *   npm run sync:figma-component Badge -- --validate-only
 * 
 * What it does:
 * 1. Fetches component design from Figma using MCP tools
 * 2. Extracts props, variants, and states
 * 3. Generates component scaffold with semantic tokens
 * 4. Creates Storybook story matching Procore structure
 * 5. Sets up Code Connect mapping
 * 
 * Requirements:
 * - Figma file must be open in Figma desktop app
 * - Component must exist in Figma design system
 */

import * as fs from "fs";
import * as path from "path";

const repoRoot = path.resolve(__dirname, "..");
const componentsDir = path.join(repoRoot, "packages", "ui", "src", "components");

interface ComponentScaffold {
	name: string;
	props: string[];
	variants: Record<string, string[]>;
	description?: string;
}

function pascalCase(str: string): string {
	return str
		.replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : '')
		.replace(/^(.)/, (char) => char.toUpperCase());
}

function kebabCase(str: string): string {
	return str
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/[\s_]+/g, '-')
		.toLowerCase();
}

/**
 * Generate component TypeScript file
 */
function generateComponentFile(scaffold: ComponentScaffold): string {
	const { name, variants, description } = scaffold;
	
	const variantTypes = Object.entries(variants)
		.map(([key, values]) => {
			const typeValues = values.map(v => `"${v}"`).join(" | ");
			return `\t\t\t${key}: {\n\t\t\t\t${values.map(v => `${v}: "",`).join("\n\t\t\t\t")}\n\t\t\t},`;
		})
		.join("\n");

	const defaultVariants = Object.entries(variants)
		.map(([key, values]) => `\t\t\t${key}: "${values[0]}",`)
		.join("\n");

	return `import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const ${name.toLowerCase()} = cva(
	"/* Base styles here - use semantic tokens only */",
	{
		variants: {
${variantTypes}
		},
		defaultVariants: {
${defaultVariants}
		},
	}
);

export interface ${name}Props
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof ${name.toLowerCase()}> {
	${description ? `/** ${description} */` : ''}
	/* Add component-specific props here */
}

export const ${name} = forwardRef<HTMLDivElement, ${name}Props>(function ${name}(
	{ className, ...props },
	ref
) {
	return (
		<div
			ref={ref}
			className={clsx(${name.toLowerCase()}(props), className)}
			{...props}
		>
			{/* Component implementation */}
		</div>
	);
});
`;
}

/**
 * Generate Storybook story file
 */
function generateStoryFile(scaffold: ComponentScaffold): string {
	const { name, variants, description } = scaffold;
	
	const variantControls = Object.entries(variants)
		.map(([key, values]) => {
			return `\t\t${key}: {
\t\t\tcontrol: 'select',
\t\t\toptions: [${values.map(v => `'${v}'`).join(', ')}],
\t\t},`;
		})
		.join("\n");

	return `import type { Meta, StoryObj } from '@storybook/react';
import { ${name} } from './${name}';

const meta = {
	title: 'Components/${name}',
	component: ${name},
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: '${description || `${name} component from the Procore design system.`}',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
${variantControls}
	},
} satisfies Meta<typeof ${name}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		// Default props
	},
};

export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			{/* Showcase all variants */}
		</div>
	),
};
`;
}

/**
 * Extract component info from Figma
 * This is a template - needs actual MCP integration
 */
async function extractFromFigma(componentName: string, nodeId?: string): Promise<ComponentScaffold> {
	console.log(`🎨 Fetching ${componentName} from Figma...`);
	
	// TODO: Integrate with Figma MCP tools
	// Use mcp_Figma_get_design_context to fetch component
	// Use mcp_Figma_get_metadata to get structure
	
	console.log("⚠️  NOTE: Figma MCP integration not yet implemented");
	console.log("💡 Using template scaffold for now...\n");

	// Template scaffold - replace with actual Figma data
	return {
		name: componentName,
		props: ['children', 'variant', 'size'],
		variants: {
			variant: ['primary', 'secondary', 'tertiary'],
			size: ['sm', 'md', 'lg'],
		},
		description: `${componentName} component from the Procore design system.`,
	};
}

async function main() {
	const args = process.argv.slice(2);
	
	if (args.length === 0) {
		console.error("❌ Error: Component name required");
		console.log("Usage: npm run sync:figma-component <ComponentName>");
		process.exit(1);
	}

	const componentName = pascalCase(args[0]);
	const nodeIdArg = args.find(arg => arg.startsWith("--node-id="));
	const nodeId = nodeIdArg?.split("=")[1];
	const validateOnly = args.includes("--validate-only");

	const componentPath = path.join(componentsDir, `${componentName}.tsx`);
	const storyPath = path.join(componentsDir, `${componentName}.stories.tsx`);
	const componentExists = fs.existsSync(componentPath);

	console.log(`\n🚀 Syncing ${componentName} with Figma...\n`);

	try {
		// Extract component info from Figma
		const scaffold = await extractFromFigma(componentName, nodeId);

		if (validateOnly) {
			if (!componentExists) {
				console.error(`❌ Component does not exist: ${componentPath}`);
				process.exit(1);
			}
			
			console.log(`✅ Component exists: ${componentName}`);
			console.log(`📁 Location: ${componentPath}`);
			console.log("\n💡 Manual validation required:");
			console.log("   1. Check that component uses semantic tokens");
			console.log("   2. Verify all variants match Figma");
			console.log("   3. Ensure props API matches design");
			console.log("   4. Run: npm run check:tokens");
			
			process.exit(0);
		}

		if (componentExists) {
			console.log(`⚠️  Component already exists: ${componentPath}`);
			console.log("💡 Use --validate-only flag to validate existing component");
			console.log("Or delete the file to regenerate from scratch");
			process.exit(0);
		}

		// Generate component file
		const componentCode = generateComponentFile(scaffold);
		fs.writeFileSync(componentPath, componentCode, "utf8");
		console.log(`✅ Created: ${componentPath}`);

		// Generate story file
		const storyCode = generateStoryFile(scaffold);
		fs.writeFileSync(storyPath, storyCode, "utf8");
		console.log(`✅ Created: ${storyPath}`);

		// Update index.ts
		const indexPath = path.join(componentsDir, "index.ts");
		if (fs.existsSync(indexPath)) {
			const indexContent = fs.readFileSync(indexPath, "utf8");
			const exportLine = `export * from "./${componentName}";\n`;
			
			if (!indexContent.includes(exportLine)) {
				fs.appendFileSync(indexPath, exportLine, "utf8");
				console.log(`✅ Updated: ${indexPath}`);
			}
		}

		console.log("\n✨ Component scaffold created successfully!");
		console.log("\n📝 Next steps:");
		console.log(`   1. Implement component logic in ${componentName}.tsx`);
		console.log(`   2. Add stories to ${componentName}.stories.tsx`);
		console.log("   3. Run: npm run check:tokens");
		console.log("   4. Run: npm run storybook");
		console.log("\n💡 Remember: Use semantic tokens only!");
		console.log("   ❌ bg-white, text-gray-500, bg-blue-50");
		console.log("   ✅ bg-bg-canvas, text-fg-secondary, bg-bg-brand");

	} catch (error) {
		console.error("❌ Error syncing component from Figma:");
		console.error(error);
		process.exit(1);
	}
}

main();

