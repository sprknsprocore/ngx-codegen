# Week 1 Implementation Plan: Quick Wins

## 🎯 Goal
Establish your Storybook as the source of truth and enable your small team to build quality components fast.

---

## Day 1: Storybook Enhancement

### Task 1.1: Install Figma Plugin for Storybook

```bash
npm install --save-dev storybook-addon-designs
```

**Configure `.storybook/main.ts`:**

```typescript
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../packages/ui/src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    'storybook-addon-designs', // NEW
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

export default config;
```

### Task 1.2: Link Components to Figma

Update your component stories to include Figma links:

```typescript
// Example: Button.stories.tsx
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?node-id=123:456',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;
```

### Task 1.3: Add Component Status Badges

Create `.storybook/preview.tsx`:

```typescript
import type { Preview } from '@storybook/react';
import '../styles/storybook.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  tags: ['autodocs'],
};

// Add custom tags for component status
export const tags = {
  complete: {
    badge: { text: '✅ Complete', bg: '#10B981' },
  },
  'in-progress': {
    badge: { text: '🚧 In Progress', bg: '#F59E0B' },
  },
  'needs-design': {
    badge: { text: '🎨 Needs Design', bg: '#DC2626' },
  },
};

export default preview;
```

**Usage in stories:**

```typescript
export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs', 'complete'], // Adds badge
} satisfies Meta<typeof Button>;
```

---

## Day 2: Token Documentation

### Task 2.1: Add Token Comments to JSON

Enhance `design/tokens/example.tokens.json` with categories and usage notes:

```json
{
  "color": {
    // ========================================
    // FOREGROUND (TEXT) COLORS
    // Usage: text-fg-{name}
    // ========================================
    "fg.default": "#0F172A",         // Primary text on light backgrounds
    "fg.secondary": "#64748B",       // Secondary/supporting text
    "fg.muted": "#94A3B8",           // Muted/tertiary text
    "fg.disabled": "#CBD5E1",        // Disabled state text
    "fg.reversed": "#FFFFFF",        // Text on dark backgrounds
    "fg.brand": "#2563EB",           // Brand color text (links, etc)
    "fg.brand-hover": "#1D4ED8",     // Brand text hover state
    "fg.onbrand": "#FFFFFF",         // Text on brand backgrounds

    // ========================================
    // BACKGROUND COLORS
    // Usage: bg-bg-{name}
    // ========================================
    "bg.canvas": "#FFFFFF",          // Page background (base layer)
    "bg.surface": "#F8FAFC",         // Elevated surface (cards, panels)
    "bg.secondary": "#F1F5F9",       // Secondary surface
    "bg.tertiary": "#E2E8F0",        // Tertiary surface (selected states)
    "bg.reversed": "#1E293B",        // Dark background
    "bg.brand": "#2563EB",           // Brand color background
    "bg.brand-hover": "#1D4ED8",     // Brand background hover
    "bg.brand-secondary": "#1E40AF", // Secondary brand background

    // ========================================
    // BORDER COLORS
    // Usage: border-border-{name}
    // ========================================
    "border.default": "#E2E8F0",     // Standard borders
    "border.hover": "#CBD5E1",       // Hover state borders
    "border.focus": "#2563EB",       // Focus state borders (accessibility)
    "border.error": "#DC2626",       // Error state borders

    // ========================================
    // STATE COLORS
    // Usage: bg-state-{name}, text-state-{name}
    // Reference: Foundation Library (Figma)
    // ========================================
    "state.success": "#10B981",      // Success states (green)
    "state.danger": "#DC2626",       // Error/danger states (red)
    "state.warn": "#F59E0B",         // Warning states (orange)
    "state.info": "#2563EB",         // Info states (blue)
    "bg.error": "#FEF2F2",           // Error background (light red)

    // ========================================
    // OVERLAY/SCRIM COLORS
    // Usage: bg-scrim-{name}
    // For modals, drawers, overlays
    // ========================================
    "scrim.light": "#00000040",      // 25% opacity black
    "scrim.medium": "#00000080",     // 50% opacity black
    "scrim.dark": "#000000BF"        // 75% opacity black
  }
}
```

### Task 2.2: Create Token Reference Page

Create `packages/ui/src/TokenReference.tsx`:

```typescript
/**
 * Token Reference Component
 * 
 * This component documents all available tokens with visual examples.
 * Display in Storybook for easy reference.
 */
import React from 'react';
import { tokens } from '@packages/tokens';

export const TokenReference = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Design Token Reference</h1>
      
      {/* Quick Reference */}
      <section className="mb-12 p-6 bg-bg-surface rounded-lg border border-border-default">
        <h2 className="text-2xl font-semibold mb-4">Quick Reference</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Figma Design System Files</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.figma.com/design/CIHfqQZS9xPyV4jYojfKgI/%F0%9F%9B%A0Foundation-Library?m=auto"
                  className="text-fg-brand hover:text-fg-brand-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🛠 Foundation Library →
                </a>
                <br />
                <span className="text-fg-secondary">Colors, Typography, Spacing</span>
              </li>
              <li>
                <a 
                  href="https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?m=auto"
                  className="text-fg-brand hover:text-fg-brand-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🖥 Web Library →
                </a>
                <br />
                <span className="text-fg-secondary">Core web components</span>
              </li>
              <li>
                <a 
                  href="https://www.figma.com/design/JrWb1OqtipkInevxd0oO6n/%E2%97%BB%EF%B8%8F-Data-Table-Library?m=auto"
                  className="text-fg-brand hover:text-fg-brand-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ◻️ Data Table Library →
                </a>
                <br />
                <span className="text-fg-secondary">Complex data components</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Official References</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://stories.core.procore.com/"
                  className="text-fg-brand hover:text-fg-brand-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Procore Storybook →
                </a>
              </li>
              <li className="text-fg-secondary">
                Internal docs: /docs/QUICK_START_GUIDE.md
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Color Tokens */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Color Tokens</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(tokens.color).map(([name, value]) => (
            <div 
              key={name}
              className="flex items-center gap-4 p-4 rounded-md border border-border-default hover:bg-bg-surface transition-colors"
            >
              <div 
                className="w-16 h-16 rounded-md border-2 border-border-default shadow-sm flex-shrink-0"
                style={{ backgroundColor: String(value) }}
              />
              <div className="flex-1">
                <div className="font-mono text-sm font-semibold">{name}</div>
                <div className="font-mono text-xs text-fg-secondary">{String(value)}</div>
                <div className="mt-1 text-xs text-fg-muted">
                  className: <code>bg-{name.replace(/\./g, '-')}</code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other token sections... */}
    </div>
  );
};
```

### Task 2.3: Add Token Reference Story

Create `packages/ui/src/TokenReference.stories.tsx`:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { TokenReference } from './TokenReference';

const meta = {
  title: 'Design System/Token Reference',
  component: TokenReference,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/CIHfqQZS9xPyV4jYojfKgI/%F0%9F%9B%A0Foundation-Library?m=auto',
    },
  },
} satisfies Meta<typeof TokenReference>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
```

---

## Day 3: Component Templates & Scripts

### Task 3.1: Create Component Template

Create `scripts/templates/component.tsx.template`:

```typescript
import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

/**
 * {{COMPONENT_NAME}}
 * 
 * @see Figma: {{FIGMA_URL}}
 * @see Storybook: {{STORYBOOK_URL}}
 */

const {{COMPONENT_NAME_LOWER}} = cva(
  "/* Base styles - use semantic tokens only */",
  {
    variants: {
      // Define variants based on Figma
    },
    defaultVariants: {
      // Set defaults
    },
  }
);

export interface {{COMPONENT_NAME}}Props
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof {{COMPONENT_NAME_LOWER}}> {
  /**
   * Component description from Figma
   */
  children?: React.ReactNode;
}

/**
 * {{COMPONENT_NAME}} component
 * 
 * @example
 * ```tsx
 * <{{COMPONENT_NAME}}>
 *   Content
 * </{{COMPONENT_NAME}}>
 * ```
 */
export const {{COMPONENT_NAME}} = forwardRef<HTMLDivElement, {{COMPONENT_NAME}}Props>(
  function {{COMPONENT_NAME}}({ className, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={clsx({{COMPONENT_NAME_LOWER}}(props), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
```

### Task 3.2: Create Story Template

Create `scripts/templates/component.stories.tsx.template`:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { {{COMPONENT_NAME}} } from './{{COMPONENT_NAME}}';

const meta = {
  title: 'Components/{{COMPONENT_NAME}}',
  component: {{COMPONENT_NAME}},
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: '{{FIGMA_URL}}',
    },
    docs: {
      description: {
        component: '{{DESCRIPTION}}',
      },
    },
  },
  tags: ['autodocs', 'in-progress'], // Change to 'complete' when done
  argTypes: {
    // Define controls based on variants
  },
} satisfies Meta<typeof {{COMPONENT_NAME}}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '{{COMPONENT_NAME}}',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {/* Show all variants */}
    </div>
  ),
};
```

### Task 3.3: Update Component Generator Script

Enhance `scripts/sync-figma-component.ts` to use templates and prompt for Figma URL:

```typescript
// Add interactive prompts
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

// In main():
const figmaUrl = await prompt('Figma URL (from Web/Foundation/Data Table Library): ');
const description = await prompt('Component description: ');

// Use templates with replacements
const templatePath = path.join(__dirname, 'templates', 'component.tsx.template');
let template = fs.readFileSync(templatePath, 'utf8');
template = template.replace(/\{\{COMPONENT_NAME\}\}/g, componentName);
template = template.replace(/\{\{COMPONENT_NAME_LOWER\}\}/g, componentName.toLowerCase());
template = template.replace(/\{\{FIGMA_URL\}\}/g, figmaUrl);
template = template.replace(/\{\{DESCRIPTION\}\}/g, description);
```

---

## Day 4: Governance & Guidelines

### Task 4.1: Create Component Checklist

Create `.github/PULL_REQUEST_TEMPLATE/new_component.md`:

```markdown
## New Component: [Component Name]

### Design Review
- [ ] Linked to Figma design
- [ ] Design approved by design team
- [ ] All variants documented

### Implementation
- [ ] Uses semantic tokens exclusively (no hardcoded colors)
- [ ] TypeScript types complete
- [ ] Accessibility tested (keyboard nav, screen reader)
- [ ] Responsive (mobile, tablet, desktop)
- [ ] All states implemented (hover, focus, active, disabled)

### Documentation
- [ ] Storybook stories created
- [ ] All variants showcased
- [ ] Usage examples included
- [ ] Props documented

### Quality
- [ ] `npm run check:tokens` passes
- [ ] `npm run lint` passes
- [ ] `npm run typecheck` passes
- [ ] Visual review in Storybook complete

### Figma References
- **Design**: [Link to Figma]
- **Library**: [ ] Web Library [ ] Foundation [ ] Data Table

### Screenshots
<!-- Add before/after screenshots or Storybook screenshots -->
```

### Task 4.2: Create Contribution Guidelines

Create `docs/CONTRIBUTING.md`:

```markdown
# Contributing to the Design System

## Quick Start

1. **Find or create a Figma design**
   - Check [Web Library](https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?m=auto)
   - Or [Foundation Library](https://www.figma.com/design/CIHfqQZS9xPyV4jYojfKgI/%F0%9F%9B%A0Foundation-Library?m=auto)
   - Or [Data Table Library](https://www.figma.com/design/JrWb1OqtipkInevxd0oO6n/%E2%97%BB%EF%B8%8F-Data-Table-Library?m=auto)

2. **Generate component scaffold**
   ```bash
   npm run sync:figma-component YourComponent
   ```

3. **Implement the component**
   - Use semantic tokens only
   - Follow existing patterns
   - See [Quick Start Guide](./QUICK_START_GUIDE.md)

4. **Create stories**
   - Showcase all variants
   - Add Figma link
   - Include usage examples

5. **Submit PR**
   - Use the component checklist
   - Request design review
   - Wait for approval

## Token Guidelines

### ✅ Always Use Semantic Tokens

```tsx
// Good
className="bg-bg-canvas text-fg-default"
className="border-border-default hover:border-border-hover"

// Bad
className="bg-white text-gray-900"
className="border-gray-200 hover:border-gray-300"
```

### 📖 Token Categories

| Category | Figma Source | Usage |
|----------|-------------|--------|
| Colors | Foundation Library | Text, backgrounds, borders |
| Spacing | Foundation Library | Padding, margins, gaps |
| Typography | Foundation Library | Font sizes, weights, families |
| Components | Web Library | Complex components (buttons, inputs) |
| Data | Data Table Library | Tables, grids, data display |

## Review Process

1. **Self-Review**: Check all items in PR template
2. **Automated Checks**: CI must pass (tokens, lint, types)
3. **Code Review**: At least 1 approval required
4. **Design Review**: Designer approves visual implementation
5. **Merge**: Squash and merge to main

## Questions?

- Check [Quick Start Guide](./QUICK_START_GUIDE.md)
- Check [Design System Workflow](./DESIGN_SYSTEM_WORKFLOW.md)
- Ask in #design-system Slack channel
```

---

## Day 5: Testing & Validation

### Task 5.1: Add Visual Regression Test Setup (Optional but Recommended)

Install Chromatic:

```bash
npm install --save-dev chromatic
```

Add script to `package.json`:

```json
{
  "scripts": {
    "chromatic": "chromatic --project-token=YOUR_TOKEN"
  }
}
```

### Task 5.2: Create CI Workflow

Create `.github/workflows/design-system-ci.yml`:

```yaml
name: Design System CI

on:
  pull_request:
    paths:
      - 'packages/ui/**'
      - 'packages/tokens/**'
      - 'design/tokens/**'

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build tokens
        run: npm run build:tokens
      
      - name: Check token violations
        run: npm run check:tokens
      
      - name: Lint
        run: npm run lint
      
      - name: Type check
        run: npm run typecheck
      
      - name: Build Storybook
        run: npm run build-storybook
      
      # Optional: Visual regression
      # - name: Run Chromatic
      #   run: npm run chromatic
      #   env:
      #     CHROMATIC_PROJECT_TOKEN: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
```

### Task 5.3: Update README

Update root `README.md`:

```markdown
# Design System

Production-ready React components built with Tailwind CSS and semantic design tokens.

## 🎨 Design References

- [🛠 Foundation Library](https://www.figma.com/design/CIHfqQZS9xPyV4jYojfKgI/%F0%9F%9B%A0Foundation-Library?m=auto) - Colors, typography, spacing
- [🖥 Web Library](https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?m=auto) - Core web components  
- [◻️ Data Table Library](https://www.figma.com/design/JrWb1OqtipkInevxd0oO6n/%E2%97%BB%EF%B8%8F-Data-Table-Library?m=auto) - Complex data components
- [Procore Storybook](https://stories.core.procore.com/) - Official component library

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Build tokens
npm run build:tokens

# Start Storybook
npm run storybook

# Create new component
npm run sync:figma-component YourComponent
```

## 📚 Documentation

- [Quick Start Guide](./docs/QUICK_START_GUIDE.md) - Get started fast
- [Contributing Guide](./docs/CONTRIBUTING.md) - How to contribute
- [Design System Workflow](./docs/DESIGN_SYSTEM_WORKFLOW.md) - Full workflow
- [Week 1 Implementation](./docs/WEEK_1_IMPLEMENTATION.md) - Implementation plan

## ✅ Component Status

| Component | Status | Figma Link |
|-----------|--------|------------|
| Button | ✅ Complete | [View](https://www.figma.com/...) |
| Modal | ✅ Complete | [View](https://www.figma.com/...) |
| Table | 🚧 In Progress | [View](https://www.figma.com/...) |
| ... | | |

View all components in [Storybook](http://localhost:6006).

## 🛠 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run storybook` | Start Storybook dev server |
| `npm run build:tokens` | Build token system from JSON |
| `npm run check:tokens` | Validate token usage in components |
| `npm run sync:figma-component` | Generate component from template |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript compiler |
| `npm run ci` | Run all CI checks |
```

---

## ✅ Week 1 Deliverables

By end of week 1, you'll have:

1. ✅ **Enhanced Storybook**
   - Figma plugin installed
   - Components linked to designs
   - Status badges for tracking

2. ✅ **Comprehensive Token Documentation**
   - Enhanced tokens.json with categories
   - Token reference page in Storybook
   - Clear usage guidelines

3. ✅ **Component Templates**
   - Automated scaffolding
   - Consistent structure
   - Enforced best practices

4. ✅ **Team Guidelines**
   - PR templates
   - Contribution guide
   - Review process

5. ✅ **CI/CD Pipeline**
   - Automated validation
   - Token checking
   - Quality gates

---

## 📊 Success Metrics

Track these to measure progress:

- **Component Coverage**: X / Y components have Figma links
- **Token Compliance**: 100% (already achieved!)
- **Documentation**: All components have stories
- **Team Velocity**: Time to ship new component
- **Quality**: # of bugs related to styling

---

## 🎯 Next Steps

After Week 1:
- Roll out to your small team (2-3 people)
- Gather feedback on workflow
- Iterate on documentation
- Plan Phase 2 (scaling to more contributors)

See [Design System Workflow](./DESIGN_SYSTEM_WORKFLOW.md) for Phase 2-4 roadmap.

