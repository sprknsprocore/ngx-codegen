# Quick Start Guide: Design System Best Practices

## 🎯 Goal: Match Procore Design System Quality

This guide helps you create components that match [stories.core.procore.com](https://stories.core.procore.com/) quality.

---

## 📋 Before You Start

### ✅ Checklist for New Components

- [ ] Design exists in Figma
- [ ] Design tokens defined (colors, spacing, etc.)
- [ ] Component API reviewed
- [ ] Accessibility requirements understood
- [ ] Similar components reviewed for patterns

---

## 🚀 Quick Commands

### Working with Tokens

```bash
# Sync tokens from Figma (recommended for new projects)
npm run sync:figma-tokens

# Build token system from JSON
npm run build:tokens

# Check for token violations
npm run check:tokens
```

### Creating Components

```bash
# Generate component scaffold from Figma
npm run sync:figma-component Button

# Validate existing component against Figma
npm run sync:figma-component Button -- --validate-only
```

### Development

```bash
# Start Storybook
npm run storybook

# Run linter
npm run lint

# Type check
npm run typecheck

# Full CI check
npm run ci
```

---

## 🎨 Token Usage Rules

### ✅ DO: Use Semantic Tokens

```tsx
// Good: Semantic tokens that adapt to themes
className="bg-bg-canvas text-fg-default border-border-default"
className="bg-bg-brand text-fg-onbrand hover:bg-bg-brand-hover"
className="bg-state-success text-fg-onbrand"
```

### ❌ DON'T: Use Primitive Colors

```tsx
// Bad: Hardcoded colors that don't adapt
className="bg-white text-gray-900 border-gray-200"
className="bg-blue-500 text-white hover:bg-blue-600"
className="bg-green-500 text-white"
```

---

## 📚 Common Token Patterns

### Foreground (Text) Colors

```tsx
text-fg-default       // Primary text
text-fg-secondary     // Secondary text
text-fg-muted         // Muted/disabled text
text-fg-reversed      // Text on dark backgrounds
text-fg-brand         // Brand color text
text-fg-onbrand       // Text on brand backgrounds (usually white)
```

### Background Colors

```tsx
bg-bg-canvas          // Page background (usually white)
bg-bg-surface         // Elevated surface
bg-bg-secondary       // Secondary surface
bg-bg-tertiary        // Tertiary surface
bg-bg-reversed        // Dark background
bg-bg-brand           // Brand color background
```

### Border Colors

```tsx
border-border-default  // Standard border
border-border-hover    // Hover state border
border-border-focus    // Focus state border
border-border-error    // Error state border
```

### State Colors

```tsx
bg-state-success text-fg-onbrand    // Success states
bg-state-danger text-fg-onbrand     // Error/danger states
bg-state-warn text-fg-onbrand       // Warning states
bg-state-info text-fg-onbrand       // Info states
```

### Scrim/Overlay

```tsx
bg-scrim-light     // Light overlay (25% opacity)
bg-scrim-medium    // Medium overlay (50% opacity)
bg-scrim-dark      // Dark overlay (75% opacity)
```

---

## 🏗️ Component Structure Template

### Using CVA (Class Variance Authority)

```tsx
import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

// 1. Define variants using CVA
const button = cva(
	"inline-flex items-center justify-center rounded-md transition-colors",
	{
		variants: {
			variant: {
				primary: "bg-bg-brand text-fg-onbrand hover:bg-bg-brand-hover",
				secondary: "bg-bg-surface text-fg-default hover:bg-bg-secondary",
				tertiary: "bg-transparent text-fg-brand hover:bg-bg-surface",
			},
			size: {
				sm: "h-8 px-3 text-sm",
				md: "h-10 px-4 text-md",
				lg: "h-12 px-6 text-lg",
			},
			disabled: {
				true: "opacity-50 cursor-not-allowed",
				false: "",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
			disabled: false,
		},
	}
);

// 2. Define TypeScript interface
export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof button> {
	/** Button content */
	children?: React.ReactNode;
	/** Loading state */
	loading?: boolean;
}

// 3. Implement component with forwardRef
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	function Button({ className, variant, size, disabled, loading, children, ...rest }, ref) {
		return (
			<button
				ref={ref}
				className={clsx(button({ variant, size, disabled }), className)}
				disabled={disabled || loading}
				{...rest}
			>
				{loading ? <Spinner /> : children}
			</button>
		);
	}
);
```

---

## 📖 Storybook Best Practices

### Story Structure

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'Primary button component for user actions.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'tertiary'],
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
	args: {
		children: 'Button',
		variant: 'primary',
		size: 'md',
	},
};

// Show all variants
export const AllVariants: Story = {
	render: () => (
		<div className="flex gap-4">
			<Button variant="primary">Primary</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="tertiary">Tertiary</Button>
		</div>
	),
};

// Show all sizes
export const AllSizes: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Button size="sm">Small</Button>
			<Button size="md">Medium</Button>
			<Button size="lg">Large</Button>
		</div>
	),
};

// Show states
export const States: Story = {
	render: () => (
		<div className="flex gap-4">
			<Button>Normal</Button>
			<Button disabled>Disabled</Button>
			<Button loading>Loading</Button>
		</div>
	),
};
```

---

## 🔍 Quality Checklist

### Before Submitting a Component

- [ ] **Tokens**: All colors use semantic tokens (run `npm run check:tokens`)
- [ ] **TypeScript**: All props typed, no `any` types
- [ ] **Accessibility**: ARIA labels, keyboard navigation works
- [ ] **Storybook**: All variants documented
- [ ] **Responsive**: Works on mobile, tablet, desktop
- [ ] **States**: Hover, focus, active, disabled states defined
- [ ] **Performance**: No unnecessary re-renders
- [ ] **Tests**: Unit tests written (if applicable)

### Visual Quality

- [ ] **Spacing**: Uses spacing tokens (space-1 through space-20)
- [ ] **Typography**: Uses font tokens (size, weight, lineHeight)
- [ ] **Borders**: Uses radius tokens (sm, md, lg, xl, full)
- [ ] **Shadows**: Uses shadow tokens (sm, md, lg, xl, 2xl)
- [ ] **Consistency**: Matches Figma design pixel-perfect

---

## 🎓 Learning Resources

### Internal Documentation

- [Design System Workflow](./DESIGN_SYSTEM_WORKFLOW.md) - Full workflow guide
- [Component Mapping Guide](./mapping/COMPONENT_MAPPING_GUIDE.md) - Figma → Code
- [Token Reference](../packages/tokens/src/semantic-tokens.ts) - All available tokens

### External Resources

- [Procore Storybook](https://stories.core.procore.com/) - Official component library
- [CVA Documentation](https://cva.style/docs) - Class Variance Authority
- [Tailwind CSS](https://tailwindcss.com/) - Utility classes

---

## 💡 Tips & Tricks

### 1. Copy Token Names from Storybook

Run Storybook and view the "Design Tokens" panel to browse and copy token names.

### 2. Use TypeScript for Safety

Let TypeScript catch token violations:

```tsx
import type { ColorTokenKey } from '@packages/tokens';

const validToken: ColorTokenKey = 'fg.default'; // ✅
const invalidToken: ColorTokenKey = 'gray-500'; // ❌ Type error
```

### 3. Create Reusable Primitives

Build primitives in `packages/ui/src/primitives/` for common patterns:

```tsx
// primitives/Stack.tsx
export const Stack = ({ gap = "4", children }) => (
	<div className={`flex flex-col gap-${gap}`}>{children}</div>
);
```

### 4. Use Compound Variants for Complex Logic

```tsx
const button = cva("base-styles", {
	variants: { /* ... */ },
	compoundVariants: [
		{
			variant: "primary",
			disabled: true,
			class: "bg-bg-tertiary", // Special case for disabled primary
		},
	],
});
```

### 5. Keep Stories Simple

Each story should demonstrate ONE thing clearly. Don't combine too many features in a single story.

---

## 🆘 Common Issues

### Issue: "Token not found" error

**Solution**: Run `npm run build:tokens` to regenerate token definitions.

### Issue: Component doesn't match Figma

**Solution**: 
1. Check if tokens were updated recently
2. Run `npm run sync:figma-tokens`
3. Compare spacing, colors, and typography carefully

### Issue: Storybook shows old version

**Solution**: Clear cache and restart:
```bash
rm -rf node_modules/.cache
npm run storybook
```

### Issue: TypeScript errors in stories

**Solution**: Ensure you're using `satisfies Meta<typeof Component>`:
```tsx
const meta = { /* ... */ } satisfies Meta<typeof Button>;
```

---

## 🎉 You're Ready!

Start building components that match Procore quality:

```bash
npm run sync:figma-component YourComponent
npm run storybook
```

Questions? Check the [Design System Workflow](./DESIGN_SYSTEM_WORKFLOW.md) for detailed guidance.

