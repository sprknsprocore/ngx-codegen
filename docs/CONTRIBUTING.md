# Contributing to the Design System

Thank you for contributing! This guide will help you add high-quality components that match our design standards.

---

## 🚀 Quick Start

```bash
# 1. Ensure you have the latest
git pull origin main
npm install

# 2. Create a new branch
git checkout -b feat/add-your-component

# 3. Generate component scaffold
npm run sync:figma-component YourComponent

# 4. Implement the component
# Edit: packages/ui/src/components/YourComponent.tsx

# 5. Test in Storybook
npm run storybook

# 6. Validate
npm run check:tokens
npm run lint
npm run typecheck

# 7. Commit and push
git add .
git commit -m "feat: add YourComponent"
git push origin feat/add-your-component

# 8. Create PR with component checklist
```

---

## 📋 Before You Start

### ✅ Prerequisites Checklist

- [ ] **Design exists in Figma**
  - [ ] Located in [Web Library](https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?m=auto), [Foundation Library](https://www.figma.com/design/CIHfqQZS9xPyV4jYojfKgI/%F0%9F%9B%A0Foundation-Library?m=auto), or [Data Table Library](https://www.figma.com/design/JrWb1OqtipkInevxd0oO6n/%E2%97%BB%EF%B8%8F-Data-Table-Library?m=auto)
  - [ ] All variants and states defined
  - [ ] Design approved by design team

- [ ] **Component is needed**
  - [ ] Will be used by 3+ teams/projects
  - [ ] Cannot be composed from existing primitives
  - [ ] Aligns with [Procore Storybook](https://stories.core.procore.com/)

- [ ] **You have time to maintain it**
  - [ ] Can respond to bug reports
  - [ ] Can implement updates if needed

---

## 🎨 Design-First Workflow

### Step 1: Find the Figma Design

Check which library contains your component:

- **[🛠 Foundation Library](https://www.figma.com/design/CIHfqQZS9xPyV4jYojfKgI/%F0%9F%9B%A0Foundation-Library?m=auto)** - Colors, typography, spacing, basic elements
- **[🖥 Web Library](https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?m=auto)** - Standard web components
- **[◻️ Data Table Library](https://www.figma.com/design/JrWb1OqtipkInevxd0oO6n/%E2%97%BB%EF%B8%8F-Data-Table-Library?m=auto)** - Complex data components

### Step 2: Extract Component Details

Use Figma's Inspect panel to note:
- All variants (size, state, emphasis)
- Colors used (map to semantic tokens)
- Spacing values (map to space tokens)
- Typography (map to font tokens)
- Border radius (map to radius tokens)
- Shadows (map to shadow tokens)

### Step 3: Map to Tokens

**Don't copy colors directly!** Map to semantic tokens:

| Figma Color | Semantic Token | Tailwind Class |
|-------------|----------------|----------------|
| Gray 900 | `fg.default` | `text-fg-default` |
| Blue 500 | `bg.brand` | `bg-bg-brand` |
| White | `bg.canvas` | `bg-bg-canvas` |
| Gray 200 | `border.default` | `border-border-default` |

See [Quick Start Guide](./QUICK_START_GUIDE.md) for complete token reference.

---

## 💻 Implementation Guide

### Component Structure

```tsx
import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

// 1. Define variants with CVA
const componentName = cva(
  // Base styles (always applied)
  "base-class another-class",
  {
    // Variants
    variants: {
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-md",
        lg: "h-12 px-6 text-lg",
      },
      variant: {
        primary: "bg-bg-brand text-fg-onbrand",
        secondary: "bg-bg-surface text-fg-default",
      },
    },
    // Defaults
    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  }
);

// 2. Define TypeScript interface
export interface ComponentNameProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentName> {
  /** Prop description */
  someProp?: string;
}

// 3. Implement with forwardRef
export const ComponentName = forwardRef<HTMLDivElement, ComponentNameProps>(
  function ComponentName({ className, size, variant, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={clsx(componentName({ size, variant }), className)}
        {...rest}
      />
    );
  }
);
```

### Token Usage Rules

#### ✅ DO: Use Semantic Tokens

```tsx
// Colors
className="bg-bg-canvas text-fg-default border-border-default"
className="bg-bg-brand text-fg-onbrand hover:bg-bg-brand-hover"
className="bg-state-success text-fg-onbrand"

// Spacing
className="p-4 gap-2 mb-6"

// Typography
className="text-sm font-semibold"

// Borders
className="rounded-md border-2"

// Shadows
className="shadow-md"
```

#### ❌ DON'T: Use Raw Values

```tsx
// Bad - Hardcoded colors
className="bg-white text-gray-900 border-gray-200"
className="bg-blue-500 text-white hover:bg-blue-600"

// Bad - Arbitrary values
className="bg-[#FFFFFF] text-[rgb(15,23,42)]"
className="p-[13px] rounded-[7px]"
```

---

## 📖 Documentation Requirements

### Storybook Stories

Every component needs comprehensive stories:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from './YourComponent';

const meta = {
  title: 'Components/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/...', // REQUIRED
    },
    docs: {
      description: {
        component: 'Clear description of what this component does.',
      },
    },
  },
  tags: ['autodocs', 'in-progress'], // Change to 'complete' when done
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Visual style variant',
    },
  },
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. Default story
export const Default: Story = {
  args: {
    children: 'Default state',
  },
};

// 2. Show all variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <YourComponent variant="primary">Primary</YourComponent>
      <YourComponent variant="secondary">Secondary</YourComponent>
      <YourComponent variant="tertiary">Tertiary</YourComponent>
    </div>
  ),
};

// 3. Show all sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <YourComponent size="sm">Small</YourComponent>
      <YourComponent size="md">Medium</YourComponent>
      <YourComponent size="lg">Large</YourComponent>
    </div>
  ),
};

// 4. Show all states
export const States: Story = {
  render: () => (
    <div className="flex gap-4">
      <YourComponent>Normal</YourComponent>
      <YourComponent disabled>Disabled</YourComponent>
      <YourComponent loading>Loading</YourComponent>
    </div>
  ),
};
```

### Accessibility Requirements

All components must:
- Support keyboard navigation (Tab, Enter, Space, Arrow keys)
- Have proper ARIA attributes
- Work with screen readers
- Meet WCAG 2.1 AA standards

```tsx
// Example: Accessible button
<button
  ref={ref}
  type="button"
  disabled={disabled}
  aria-disabled={disabled}
  aria-label={ariaLabel}
  aria-describedby={ariaDescribedBy}
  className={/* ... */}
>
  {children}
</button>
```

---

## ✅ Pull Request Checklist

Use this checklist in your PR description:

```markdown
## Component: [ComponentName]

### Design Review
- [ ] Linked to Figma design: [URL]
- [ ] Design approved by design team
- [ ] All variants documented in Figma
- [ ] Matches [Procore Storybook](https://stories.core.procore.com/)

### Implementation
- [ ] Uses semantic tokens exclusively (`npm run check:tokens` passes)
- [ ] TypeScript types complete (no `any`)
- [ ] Accessibility tested
  - [ ] Keyboard navigation works
  - [ ] Screen reader tested
  - [ ] ARIA attributes correct
- [ ] Responsive (mobile, tablet, desktop)
- [ ] All states implemented (hover, focus, active, disabled)
- [ ] forwardRef implemented for ref forwarding

### Documentation
- [ ] Storybook stories created
- [ ] Default story
- [ ] All variants showcased
- [ ] All sizes showcased
- [ ] All states showcased
- [ ] Usage examples included
- [ ] Props documented with JSDoc
- [ ] Figma link in story parameters

### Code Quality
- [ ] `npm run lint` passes
- [ ] `npm run typecheck` passes
- [ ] `npm run check:tokens` passes
- [ ] No console errors in Storybook
- [ ] Follows existing code patterns

### Testing
- [ ] Visual review in Storybook complete
- [ ] Tested in light/dark modes (if applicable)
- [ ] Tested with different content lengths
- [ ] Tested edge cases (empty, overflow, etc.)

### Figma Reference
- **Library**: [ ] Foundation [ ] Web [ ] Data Table
- **Design URL**: [Figma Link]
- **Designer**: @username

### Screenshots
<!-- Add screenshots from Storybook showing all variants -->

---

## Review Checklist (for Reviewers)

When reviewing a component PR:

### Visual Review
- [ ] Matches Figma design
- [ ] Spacing/padding correct
- [ ] Typography correct
- [ ] Colors from semantic tokens
- [ ] Borders and shadows correct

### Code Review
- [ ] No hardcoded colors/spacing
- [ ] TypeScript types complete
- [ ] Follows CVA patterns
- [ ] No unnecessary complexity
- [ ] Performance considerations

### Documentation Review
- [ ] Stories demonstrate all variants
- [ ] Props are documented
- [ ] Figma link works
- [ ] Usage examples clear

### Accessibility Review
- [ ] Keyboard nav works
- [ ] ARIA attributes present
- [ ] Color contrast sufficient
- [ ] Focus states visible
```

---

## 🚨 Common Mistakes to Avoid

### 1. Hardcoding Colors

```tsx
// ❌ Bad
<div className="bg-white text-gray-900" />

// ✅ Good
<div className="bg-bg-canvas text-fg-default" />
```

### 2. Not Using forwardRef

```tsx
// ❌ Bad - can't forward refs
export const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

// ✅ Good - supports refs
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ children, ...props }, ref) {
    return <button ref={ref} {...props}>{children}</button>;
  }
);
```

### 3. Missing TypeScript Types

```tsx
// ❌ Bad
export const Button = ({ children, variant, size, ...props }: any) => { ... }

// ✅ Good
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(...);
```

### 4. Not Linking to Figma

```tsx
// ❌ Bad - no Figma reference
export default {
  title: 'Components/Button',
  component: Button,
};

// ✅ Good - includes Figma link
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/...',
    },
  },
};
```

### 5. Incomplete Accessibility

```tsx
// ❌ Bad - missing accessibility
<button onClick={onClick}>
  <Icon />
</button>

// ✅ Good - accessible
<button
  onClick={onClick}
  aria-label="Close modal"
  aria-pressed={isPressed}
>
  <Icon aria-hidden="true" />
</button>
```

---

## 🎓 Learning Resources

### Internal Docs
- [Quick Start Guide](./QUICK_START_GUIDE.md) - Token usage, patterns
- [Design System Workflow](./DESIGN_SYSTEM_WORKFLOW.md) - Complete workflow
- [Scaling Playbook](./SCALING_PLAYBOOK.md) - Long-term vision

### External Resources
- [Storybook Docs](https://storybook.js.org/docs) - Documentation
- [CVA Docs](https://cva.style/docs) - Variant management
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility classes
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Accessibility
- [React forwardRef](https://react.dev/reference/react/forwardRef) - Ref forwarding

---

## 💬 Getting Help

### Before Asking
1. Check [Quick Start Guide](./QUICK_START_GUIDE.md)
2. Search existing issues and PRs
3. Review similar components for patterns

### Where to Ask
- **GitHub Discussions** - General questions, proposals
- **Slack #design-system** - Quick questions, coordination
- **PR Comments** - Specific implementation questions
- **Office Hours** - [Schedule TBD]

---

## 🎉 Recognition

Contributors will be:
- Listed in CHANGELOG
- Credited in component docs
- Recognized in team meetings
- Added to contributors list

Thank you for making our design system better! 🙏

---

**Questions?** Open a GitHub Discussion or ask in #design-system on Slack.

