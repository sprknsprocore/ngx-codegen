# Day 3 Complete: Component Templates & Scripts ✅

**Date Completed**: November 20, 2025  
**Status**: All tasks completed successfully

---

## Summary

Successfully created reusable component templates and enhanced the component generator script with interactive prompts. New components can now be scaffolded in seconds with consistent structure, proper token usage, and Figma integration built-in.

---

## Tasks Completed

### ✅ Task 3.1: Component Template

**File Created**: `scripts/templates/component.tsx.template`

**Features**:
- Complete TypeScript component structure
- CVA (Class Variance Authority) setup
- Forwardable ref support
- Semantic token usage enforced
- JSDoc comments with Figma and Storybook links
- Example variant patterns
- TypeScript types with proper generics
- Display name for better debugging

**Template Placeholders**:
- `{{COMPONENT_NAME}}` - PascalCase component name
- `{{COMPONENT_NAME_LOWER}}` - lowercase component name
- `{{COMPONENT_NAME_KEBAB}}` - kebab-case component name
- `{{DESCRIPTION}}` - Component description
- `{{FIGMA_URL}}` - Figma design URL

---

### ✅ Task 3.2: Story Template

**File Created**: `scripts/templates/component.stories.tsx.template`

**Features**:
- Complete Storybook story structure
- Figma design integration
- Status tags (`in-progress` by default)
- Multiple story variants included:
  - `Default` - Basic story
  - `AllVariants` - Showcase all variants
  - `CustomExample` - Custom styling example
- ArgTypes setup with comments
- TypeScript types
- Comprehensive docs integration

---

### ✅ Task 3.3: Enhanced Component Generator

**File Modified**: `scripts/sync-figma-component.ts`

**New Features**:

1. **Interactive Prompts**:
   - Asks for Figma URL with library suggestions
   - Prompts for component description
   - Can be skipped with `--no-prompts` flag

2. **Template-Based Generation**:
   - Reads from template files
   - Replaces placeholders dynamically
   - Consistent output every time

3. **Better UX**:
   - Formatted console output with boxes
   - Color-coded messages
   - Clear next steps
   - Usage examples
   - Error handling

4. **Alphabetical Exports**:
   - Automatically sorts exports in `index.ts`
   - Maintains clean file organization

---

## How to Use

### Basic Usage

```bash
npm run sync:figma-component ComponentName
```

**Interactive mode** - will prompt for:
- Figma URL (with library suggestions)
- Component description

### Skip Prompts

```bash
npm run sync:figma-component ComponentName -- --no-prompts
```

Uses default values for description and skips Figma URL.

### Validate Existing Component

```bash
npm run sync:figma-component ComponentName -- --validate-only
```

Checks if component exists and provides validation checklist.

---

## Example Workflow

### Creating a New Badge Component

```bash
$ npm run sync:figma-component Badge

🚀 Component Generator

Component: Badge
Location: packages/ui/src/components/

📝 Component Information
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 Figma Libraries:
   🛠 Foundation: https://figma.com/design/CIHfqQZS9xPyV4jYojfKgI/
   🖥 Web Library: https://figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/
   ◻️  Data Table: https://figma.com/design/JrWb1OqtipkInevxd0oO6n/

Figma URL (or press Enter to skip): https://figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/?node-id=123-456
Description (default: "Badge component"): Status indicator badge

📦 Generating files...

✅ Created: packages/ui/src/components/Badge.tsx
✅ Created: packages/ui/src/components/Badge.stories.tsx
✅ Updated: packages/ui/src/components/index.ts

✨ Component scaffold created successfully!
```

### What Gets Generated

**Badge.tsx**:
```tsx
import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

/**
 * Badge
 * 
 * Status indicator badge
 * 
 * @see Figma: https://figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/?node-id=123-456
 * @see Storybook: http://localhost:6006/?path=/story/components-badge
 */

const badgeVariants = cva(
  /* Base styles - use semantic tokens only */
  "",
  {
    variants: {
      // Define variants based on Figma
    },
    defaultVariants: {
      // Set defaults
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * Status indicator badge
   */
  children?: React.ReactNode;
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  function Badge({ className, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={clsx(badgeVariants(props), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";
```

**Badge.stories.tsx**:
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/?node-id=123-456',
    },
    docs: {
      description: {
        component: 'Status indicator badge',
      },
    },
  },
  tags: ['autodocs', 'in-progress'],
  argTypes: {
    // Define controls based on variants
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Badge>Variant 1</Badge>
      <Badge>Variant 2</Badge>
    </div>
  ),
};

export const CustomExample: Story = {
  args: {
    children: 'Custom Badge',
    className: 'custom-class',
  },
};
```

---

## Files Created/Modified

### Created
- `scripts/templates/component.tsx.template` - Component template
- `scripts/templates/component.stories.tsx.template` - Story template
- `docs/DAY_3_COMPLETE.md` - This file

### Modified
- `scripts/sync-figma-component.ts` - Enhanced with templates and prompts
- `packages/ui/src/components/index.ts` - Cleanup (removed test export)

---

## Technical Details

### Template System

**How it Works**:
1. Script reads template file
2. Replaces all `{{PLACEHOLDER}}` values
3. Writes generated file to components directory
4. Updates exports automatically

**Placeholder Transformations**:
```typescript
// Input: "FeatureCard"
{{COMPONENT_NAME}}        → "FeatureCard"
{{COMPONENT_NAME_LOWER}}  → "featurecard"
{{COMPONENT_NAME_KEBAB}}  → "feature-card"
{{DESCRIPTION}}           → User-provided description
{{FIGMA_URL}}             → User-provided URL or default
```

### Interactive Prompts

Uses Node.js `readline` interface:
```typescript
function prompt(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}
```

### Alphabetical Exports

Maintains sorted exports in `index.ts`:
```typescript
const exportLines = lines.filter(line => line.startsWith('export * from'));
exportLines.push(newExport);
exportLines.sort(); // Alphabetical order
```

---

## Benefits

### For Developers

✅ **Fast Scaffolding**: Create new components in seconds  
✅ **Consistent Structure**: Every component follows the same pattern  
✅ **Token Enforcement**: Templates use semantic tokens by default  
✅ **Figma Integration**: Built-in Figma links  
✅ **No Manual Work**: Exports, imports, and structure automated  

### For the Team

✅ **Standardization**: All components built the same way  
✅ **Onboarding**: New developers see best practices in templates  
✅ **Quality**: Enforced patterns prevent common mistakes  
✅ **Speed**: Faster component development  
✅ **Documentation**: Auto-generated structure with JSDoc  

---

## Validation

### Test Component Generation

```bash
npm run sync:figma-component TestComponent -- --no-prompts
```

**Result**: ✅ Success
- Component file created correctly
- Story file created correctly
- Exports updated alphabetically
- All placeholders replaced
- Files cleaned up successfully

### Lint Test

```bash
npm run lint
```

**Result**: ✅ Pass
- No linting errors
- TypeScript types correct
- Template files valid

---

## Usage Guidelines

### When to Use

Use the component generator when:
- Creating a new component from Figma
- Starting a new feature
- Building a new UI element
- Scaffolding a complex component

### When NOT to Use

Don't use for:
- One-off utility components
- Internal helper components
- Extremely simple wrappers
- Temporary test components

### Best Practices

1. **Always provide Figma URL** when available
2. **Write descriptive descriptions** for better documentation
3. **Implement immediately** - don't let scaffolds sit empty
4. **Update status tags** in stories when complete
5. **Use semantic tokens** as enforced by templates

---

## Next Steps

### Immediate Actions (Optional)

1. **Create a Real Component**:
   ```bash
   npm run sync:figma-component StatusBadge
   ```
   - Provide real Figma URL
   - Implement the component
   - Test in Storybook

2. **Document Team Process**:
   - Add to onboarding docs
   - Create video walkthrough
   - Update contributing guide

### Day 4 Preview

Tomorrow's tasks focus on **Governance & Guidelines**:
- Create component checklist for PRs
- Write contribution guidelines
- Set up review process
- Document quality gates
- Create PR templates

---

## Command Reference

```bash
# Create new component (interactive)
npm run sync:figma-component ComponentName

# Create with no prompts (uses defaults)
npm run sync:figma-component ComponentName -- --no-prompts

# Validate existing component
npm run sync:figma-component ComponentName -- --validate-only

# Get help
npm run sync:figma-component
```

---

## Week 1 Progress

```
✅ Day 1: Storybook Enhancement        (Complete)
✅ Day 2: Token Documentation           (Complete)
✅ Day 3: Component Templates & Scripts (Complete) ← YOU ARE HERE
⏭️  Day 4: Governance & Guidelines      (Next)
⏭️  Day 5: Testing & Validation         (Upcoming)
```

**Progress**: 60% complete (3/5 days)

---

## Template Examples

### Minimal Component

```tsx
// Generated from template
import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const simpleButtonVariants = cva(
  "bg-bg-brand text-fg-onbrand rounded-md px-4 py-2",
  {
    variants: {
      size: {
        sm: "text-sm px-3 py-1",
        md: "text-md px-4 py-2",
        lg: "text-lg px-5 py-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface SimpleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof simpleButtonVariants> {
  children?: React.ReactNode;
}

export const SimpleButton = forwardRef<HTMLButtonElement, SimpleButtonProps>(
  function SimpleButton({ className, children, size, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={clsx(simpleButtonVariants({ size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
```

---

## Success Metrics

- ✅ Templates created and tested
- ✅ Component generator enhanced
- ✅ Interactive prompts working
- ✅ Alphabetical exports maintained
- ✅ Zero linting errors
- ✅ Documentation complete
- ✅ Team-ready for usage

---

**🎉 Day 3 Complete! Ready for Day 4: Governance & Guidelines**

