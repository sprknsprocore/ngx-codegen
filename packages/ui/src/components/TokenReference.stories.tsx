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
    docs: {
      description: {
        component: `
## Design Token Reference

Complete visual documentation of all design tokens in the system.

### What are Design Tokens?

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system.

### Token Categories

- **Colors**: Foreground (text), background, border, and state colors
- **Spacing**: Consistent spacing scale based on 4px unit
- **Border Radius**: Corner rounding options
- **Shadows**: Elevation and depth
- **Typography**: Font sizes, weights, and families

### Usage

Always use semantic tokens instead of arbitrary values:

\`\`\`tsx
// ✅ Good - Uses tokens
<div className="bg-bg-canvas text-fg-default">

// ❌ Bad - Arbitrary values
<div className="bg-white text-gray-900">
\`\`\`

### Resources

- [Foundation Library (Figma)](https://www.figma.com/design/CIHfqQZS9xPyV4jYojfKgI/%F0%9F%9B%A0Foundation-Library?m=auto)
- [Token Metadata](/design/tokens/token-metadata.json)
- [Quick Start Guide](/docs/QUICK_START_GUIDE.md)
        `,
      },
    },
  },
  tags: ['autodocs', 'complete'],
} satisfies Meta<typeof TokenReference>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Complete visual reference of all design tokens.
 * 
 * This page shows every available token with:
 * - Visual preview
 * - Token name
 * - Value (hex, px, rem, etc.)
 * - Tailwind class names
 * - Usage examples
 */
export const Default: Story = {};

/**
 * Color tokens include foreground (text), background, border, and state colors.
 * All colors are semantic and should be used based on their purpose, not their appearance.
 */
export const Colors: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Color Token Categories

**Foreground Colors** (\`fg.*\`)
- Used for text and icons
- Examples: \`text-fg-default\`, \`text-fg-secondary\`, \`text-fg-brand\`

**Background Colors** (\`bg.*\`)
- Used for surfaces and containers
- Examples: \`bg-bg-canvas\`, \`bg-bg-surface\`, \`bg-bg-brand\`

**Border Colors** (\`border.*\`)
- Used for borders and dividers
- Examples: \`border-border-default\`, \`border-border-focus\`

**State Colors** (\`state.*\`)
- Semantic colors for success, warning, error, info
- Examples: \`bg-state-success\`, \`text-state-danger\`
        `,
      },
    },
  },
};

/**
 * Spacing tokens provide consistent spacing throughout the application.
 * Based on a 4px unit scale.
 */
export const Spacing: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Spacing Scale

The spacing scale is based on a **4px base unit** for consistency.

| Token | Value | Usage |
|-------|-------|-------|
| space.0 | 0px | No space |
| space.1 | 4px | Tight spacing |
| space.2 | 8px | Small spacing |
| space.3 | 12px | Medium spacing |
| space.4 | 16px | Standard spacing |
| space.6 | 24px | Large spacing |
| space.8 | 32px | Section spacing |
| space.12 | 48px | Major section spacing |

### Usage

Use with padding, margin, gap utilities:
- \`p-4\` = padding: 16px
- \`m-6\` = margin: 24px
- \`gap-2\` = gap: 8px
        `,
      },
    },
  },
};

/**
 * Typography tokens define font sizes, weights, and families used throughout the system.
 */
export const Typography: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Typography System

**Font Sizes**
- Range from xs (12px) to 2xl (24px)
- Base size is md (16px)
- Use semantic sizes: \`text-xs\`, \`text-sm\`, \`text-md\`, etc.

**Font Weights**
- regular (400): Body text
- medium (500): Emphasized text, UI labels
- semibold (600): Subheadings
- bold (700): Headings

**Font Families**
- sans: Inter, system-ui (default for all UI)
- mono: ui-monospace (code and technical text)
        `,
      },
    },
  },
};

