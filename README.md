# NGX Design System 🎨

> A production-ready, token-based design system with 140+ React components, built with Tailwind CSS and integrated with Figma.

[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](http://localhost:6006)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)

---

## ✨ Features

- 🎨 **140+ Production-Ready Components** - Buttons, forms, navigation, data tables, and more
- 🎯 **Token-First Architecture** - All styling uses semantic design tokens
- 🔗 **Figma Integration** - Direct links from Storybook to Figma designs
- 📦 **Monorepo Structure** - Organized packages for tokens, UI, icons, and docs
- 🛡️ **Type-Safe** - Full TypeScript support with comprehensive types
- ♿ **Accessible** - ARIA compliant with keyboard navigation
- 🎭 **Storybook** - Interactive component playground and documentation
- 🚫 **No Magic Values** - Enforced token usage, no arbitrary colors or spacing

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Build design tokens
npm run build:tokens

# Start Storybook
npm run storybook
# → Opens at http://localhost:6006

# Create new component
npm run sync:figma-component YourComponent
```

---

## 📚 Documentation

- **[Quick Start Guide](./docs/QUICK_START_GUIDE.md)** - Get started in 5 minutes
- **[Week 1 Implementation](./docs/WEEK_1_IMPLEMENTATION.md)** - Step-by-step implementation plan
- **[Day 1 Complete](./docs/DAY_1_COMPLETE.md)** - Figma integration setup (✅ DONE)
- **[Figma + Storybook Guide](./docs/FIGMA_STORYBOOK_GUIDE.md)** - How to link designs
- **[Contributing Guide](./docs/CONTRIBUTING.md)** - How to contribute
- **[Design System Workflow](./docs/DESIGN_SYSTEM_WORKFLOW.md)** - Full development workflow

---

## 🎨 Figma Design Libraries

Our components are based on these Figma libraries:

| Library | Purpose | Link |
|---------|---------|------|
| 🛠 **Foundation Library** | Colors, typography, spacing, primitives | [View](https://www.figma.com/design/CIHfqQZS9xPyV4jYojfKgI/%F0%9F%9B%A0Foundation-Library?m=auto) |
| 🖥 **Web Library** | Buttons, forms, cards, navigation, standard UI | [View](https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?m=auto) |
| ◻️ **Data Table Library** | Tables, grids, complex data components | [View](https://www.figma.com/design/JrWb1OqtipkInevxd0oO6n/%E2%97%BB%EF%B8%8F-Data-Table-Library?m=auto) |

---

## 📦 Project Structure

```
NGX-CodeGen/
├── packages/
│   ├── tokens/          # Design tokens (colors, spacing, typography)
│   ├── ui/              # React components (140+ components)
│   ├── icons/           # Icon system
│   └── docs/            # Documentation site
├── scripts/             # Build and automation scripts
├── .storybook/          # Storybook configuration
├── docs/                # Markdown documentation
└── tailwind.config.ts   # Tailwind configuration with tokens
```

---

## 🎯 Component Status

| Component | Status | Figma Link |
|-----------|--------|------------|
| Button | ✅ Complete | [View](https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?m=auto) |
| Card | ✅ Complete | [View](https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?m=auto) |
| Calendar | ✅ Complete | [View](https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?m=auto) |
| Text | ✅ Complete | [View](https://www.figma.com/design/CIHfqQZS9xPyV4jYojfKgI/%F0%9F%9B%A0Foundation-Library?m=auto) |
| ... | 🚧 In Progress | ... |

*View all components in [Storybook](http://localhost:6006)*

---

## 🛠 Available Scripts

```bash
# Development
npm run storybook              # Start Storybook dev server
npm run build-storybook        # Build Storybook for production

# Tokens
npm run build:tokens           # Build token system from JSON
npm run check:tokens           # Validate token usage in components

# Component Generation
npm run sync:figma-component   # Generate component from template
npm run scaffold-component     # Scaffold new component

# Quality
npm run lint                   # Run ESLint
npm run typecheck              # Run TypeScript compiler
npm run ci                     # Run all CI checks
```

---

## 🎨 Token System

All components use semantic design tokens - no magic values allowed!

### Example Usage

```tsx
// ✅ Good - Uses semantic tokens
<div className="bg-bg-canvas text-fg-default border-border-default">
  <Text size="md" weight="semibold" tone="brand">
    Hello World
  </Text>
</div>

// ❌ Bad - Hardcoded values (blocked by linter)
<div className="bg-white text-gray-900 border-gray-200">
  <span style={{ color: '#2563eb' }}>Hello World</span>
</div>
```

### Token Categories

- **Colors**: `fg.*`, `bg.*`, `border.*`, `state.*`
- **Spacing**: `space.*` (0, 1, 2, 3, 4, 5, 6, 8, 10, 12)
- **Typography**: `size.*`, `weight.*`, `lineHeight.*`
- **Radius**: `radius.*` (none, sm, md, lg, xl, full)
- **Shadow**: `shadow.*` (sm, md, lg)

---

## 🔗 Figma + Storybook Integration

Every component in Storybook can link directly to its Figma design:

1. Open any component in Storybook
2. Click the **"Figma"** tab in the addons panel
3. View embedded design or click "Open in Figma"

### Adding Figma Links

```typescript
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://figma.com/...',
    },
  },
  tags: ['autodocs', 'complete'],
} satisfies Meta<typeof Button>;
```

---

## 🏗️ Component Development Workflow

1. **Find/Create Figma Design**
   - Check the appropriate Figma library
   - Ensure all variants are documented

2. **Generate Component**
   ```bash
   npm run sync:figma-component ComponentName
   ```

3. **Implement Component**
   - Use semantic tokens only
   - Follow existing patterns
   - Compose from primitives

4. **Create Stories**
   - Showcase all variants
   - Add Figma link
   - Include usage examples

5. **Quality Check**
   ```bash
   npm run check:tokens  # Verify token usage
   npm run lint          # Check code quality
   npm run typecheck     # Verify types
   ```

6. **Submit PR**
   - Use component checklist
   - Request design review
   - Update status tag

---

## ✅ Week 1 Progress

- [x] **Day 1: Storybook Enhancement** ✅
  - Custom Figma addon for Storybook v8
  - Component status badge system
  - Figma links added to key components
  - Comprehensive documentation

- [ ] **Day 2: Token Documentation** (Next)
  - Enhanced token JSON with categories
  - Token reference component
  - Visual token documentation

- [ ] **Day 3: Component Templates**
- [ ] **Day 4: Governance & Guidelines**
- [ ] **Day 5: Testing & Validation**

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./docs/CONTRIBUTING.md) for details.

### Quick Contribution Checklist

- [ ] Linked to Figma design
- [ ] Uses semantic tokens exclusively
- [ ] TypeScript types complete
- [ ] Accessibility tested
- [ ] Storybook stories created
- [ ] All variants showcased
- [ ] Documentation added

---

## 📝 License

MIT License - feel free to use this design system for your projects!

---

## 🙏 Acknowledgments

Built with inspiration from:
- [Procore Design System](https://stories.core.procore.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [CVA (Class Variance Authority)](https://cva.style/)

---

## 🔗 Links

- **Storybook**: http://localhost:6006
- **Figma Foundation Library**: [View](https://www.figma.com/design/CIHfqQZS9xPyV4jYojfKgI/%F0%9F%9B%A0Foundation-Library?m=auto)
- **Figma Web Library**: [View](https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?m=auto)
- **Figma Data Table Library**: [View](https://www.figma.com/design/JrWb1OqtipkInevxd0oO6n/%E2%97%BB%EF%B8%8F-Data-Table-Library?m=auto)

---

**Built with ❤️ using React, TypeScript, Tailwind CSS, and Figma**

