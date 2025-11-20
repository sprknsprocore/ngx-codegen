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
 * 1. Prompts for Figma URL and description (interactive mode)
 * 2. Uses templates to generate consistent component structure
 * 3. Generates component scaffold with semantic tokens
 * 4. Creates Storybook story with Figma link
 * 5. Adds to component exports
 * 
 * Requirements:
 * - Figma file must be accessible
 * - Component must exist in Figma design system
 */

import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";

const repoRoot = path.resolve(__dirname, "..");
const componentsDir = path.join(repoRoot, "packages", "ui", "src", "components");
const templatesDir = path.join(__dirname, "templates");

interface ComponentScaffold {
	name: string;
	description: string;
	figmaUrl: string;
}

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

/**
 * Prompt user for input
 */
function prompt(question: string): Promise<string> {
	return new Promise((resolve) => {
		rl.question(question, (answer) => {
			resolve(answer.trim());
		});
	});
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
 * Replace template placeholders with actual values
 */
function replaceTemplatePlaceholders(template: string, scaffold: ComponentScaffold): string {
	const componentNameLower = scaffold.name.toLowerCase();
	const componentNameKebab = kebabCase(scaffold.name);
	
	return template
		.replace(/\{\{COMPONENT_NAME\}\}/g, scaffold.name)
		.replace(/\{\{COMPONENT_NAME_LOWER\}\}/g, componentNameLower)
		.replace(/\{\{COMPONENT_NAME_KEBAB\}\}/g, componentNameKebab)
		.replace(/\{\{DESCRIPTION\}\}/g, scaffold.description)
		.replace(/\{\{FIGMA_URL\}\}/g, scaffold.figmaUrl || 'https://figma.com/...');
}

/**
 * Generate component file from template
 */
function generateComponentFile(scaffold: ComponentScaffold): string {
	const templatePath = path.join(templatesDir, "component.tsx.template");
	
	if (!fs.existsSync(templatePath)) {
		throw new Error(`Template not found: ${templatePath}`);
	}
	
	const template = fs.readFileSync(templatePath, "utf8");
	return replaceTemplatePlaceholders(template, scaffold);
}

/**
 * Generate Storybook story file from template
 */
function generateStoryFile(scaffold: ComponentScaffold): string {
	const templatePath = path.join(templatesDir, "component.stories.tsx.template");
	
	if (!fs.existsSync(templatePath)) {
		throw new Error(`Template not found: ${templatePath}`);
	}
	
	const template = fs.readFileSync(templatePath, "utf8");
	return replaceTemplatePlaceholders(template, scaffold);
}

/**
 * Get component info interactively
 */
async function getComponentInfo(componentName: string, skipPrompts: boolean): Promise<ComponentScaffold> {
	if (skipPrompts) {
		return {
			name: componentName,
			description: `${componentName} component from the design system.`,
			figmaUrl: "",
		};
	}

	console.log("\n📝 Component Information");
	console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
	
	console.log("💡 Figma Libraries:");
	console.log("   🛠 Foundation: https://figma.com/design/CIHfqQZS9xPyV4jYojfKgI/");
	console.log("   🖥 Web Library: https://figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/");
	console.log("   ◻️  Data Table: https://figma.com/design/JrWb1OqtipkInevxd0oO6n/\n");
	
	const figmaUrl = await prompt("Figma URL (or press Enter to skip): ");
	const description = await prompt(`Description (default: "${componentName} component"): `);
	
	return {
		name: componentName,
		description: description || `${componentName} component from the design system.`,
		figmaUrl: figmaUrl || "",
	};
}

async function main() {
	const args = process.argv.slice(2);
	
	if (args.length === 0) {
		console.error("❌ Error: Component name required");
		console.log("\nUsage:");
		console.log("  npm run sync:figma-component <ComponentName>");
		console.log("  npm run sync:figma-component <ComponentName> -- --no-prompts");
		console.log("  npm run sync:figma-component <ComponentName> -- --validate-only");
		console.log("\nExamples:");
		console.log("  npm run sync:figma-component Badge");
		console.log("  npm run sync:figma-component FeatureCard");
		process.exit(1);
	}

	const componentName = pascalCase(args[0]);
	const validateOnly = args.includes("--validate-only");
	const noPrompts = args.includes("--no-prompts");

	const componentPath = path.join(componentsDir, `${componentName}.tsx`);
	const storyPath = path.join(componentsDir, `${componentName}.stories.tsx`);
	const componentExists = fs.existsSync(componentPath);

	console.log(`\n🚀 Component Generator\n`);
	console.log(`Component: ${componentName}`);
	console.log(`Location: packages/ui/src/components/\n`);

	try {
		// Validate only mode
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
			
			rl.close();
			process.exit(0);
		}

		// Check if component already exists
		if (componentExists) {
			console.log(`⚠️  Component already exists: ${componentPath}`);
			console.log("\n💡 Options:");
			console.log("   • Use --validate-only flag to validate existing component");
			console.log("   • Delete the file to regenerate from scratch");
			console.log("   • Choose a different component name");
			rl.close();
			process.exit(0);
		}

		// Get component information
		const scaffold = await getComponentInfo(componentName, noPrompts);
		rl.close();

		console.log("\n📦 Generating files...\n");

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
				// Find the right place to insert (alphabetically)
				const lines = indexContent.split('\n');
				const exportLines = lines.filter(line => line.startsWith('export * from'));
				exportLines.push(exportLine);
				exportLines.sort();
				
				const otherLines = lines.filter(line => !line.startsWith('export * from'));
				const newContent = [...exportLines, ...otherLines].join('\n');
				
				fs.writeFileSync(indexPath, newContent, "utf8");
				console.log(`✅ Updated: ${indexPath}`);
			}
		}

		console.log("\n✨ Component scaffold created successfully!");
		console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
		console.log("\n📝 Next steps:");
		console.log(`\n   1. Open ${componentName}.tsx`);
		console.log("      • Implement component logic");
		console.log("      • Add variants to CVA config");
		console.log("      • Use semantic tokens only!");
		console.log(`\n   2. Open ${componentName}.stories.tsx`);
		console.log("      • Add story variants");
		console.log("      • Configure argTypes");
		console.log("      • Update status tag when complete");
		console.log("\n   3. Validate");
		console.log("      • npm run check:tokens");
		console.log("      • npm run lint");
		console.log("      • npm run storybook");
		console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
		console.log("\n💡 Remember: Use semantic tokens only!");
		console.log("   ❌ bg-white, text-gray-500, bg-blue-50");
		console.log("   ✅ bg-bg-canvas, text-fg-secondary, bg-bg-brand");
		console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

	} catch (error) {
		rl.close();
		console.error("\n❌ Error generating component:");
		console.error(error);
		process.exit(1);
	}
}

main();
