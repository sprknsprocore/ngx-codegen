# Design System Workflow: Figma → Tokens → Components → Storybook

## Problem Statement

Current challenges:
- Local Storybook doesn't match [stories.core.procore.com](https://stories.core.procore.com/)
- Manual token management in `design/tokens/example.tokens.json`
- No automated sync between Figma designs and implementation
- Component quality varies from official Procore design system

## Proposed Solution: Figma-First Workflow

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│ SOURCE OF TRUTH: Figma Design System                            │
│ - Component designs, states, variants                           │
│ - Design tokens (colors, spacing, typography, shadows)          │
│ - Documentation and usage guidelines                            │
└──────────────────┬──────────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 1: Extract Design Tokens from Figma                        │
│ Tool: scripts/sync-figma-tokens.ts (NEW)                        │
│ - Uses Figma MCP to extract variables                           │
│ - Generates design/tokens/figma-extracted.tokens.json           │
│ - Auto-updates semantic tokens                                  │
└──────────────────┬──────────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 2: Build Token System                                      │
│ Tool: scripts/build-tokens.ts (EXISTING)                        │
│ Output:                                                          │
│ - packages/tokens/src/semantic-tokens.ts                        │
│ - packages/tokens/src/tailwind-theme.ts                         │
│ - packages/tokens/src/css-vars.ts                               │
└──────────────────┬──────────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 3: Generate Component Code from Figma                      │
│ Tool: scripts/sync-figma-component.ts (NEW)                     │
│ - Extract component metadata from Figma                         │
│ - Generate component scaffold with semantic tokens              │
│ - Create Storybook stories matching official structure          │
└──────────────────┬──────────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────────────┐
│ STEP 4: Storybook Documentation                                 │
│ - Stories mirror stories.core.procore.com structure             │
│ - Auto-generated prop tables from TypeScript                    │
│ - Usage examples with best practices                            │
│ - Design token reference panel                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Implementation Plan

### Phase 1: Figma Token Extraction (High Priority)

**Create: `scripts/sync-figma-tokens.ts`**

This script will:
1. Use Figma MCP to access the Procore design system file
2. Extract all design variables (colors, spacing, typography, etc.)
3. Generate `design/tokens/figma-extracted.tokens.json`
4. Run the existing build-tokens script

**Benefits:**
- Single source of truth (Figma)
- Automatic updates when design tokens change
- Eliminates manual token maintenance
- Ensures 100% alignment with official design system

### Phase 2: Component Sync from Figma (Medium Priority)

**Create: `scripts/sync-figma-component.ts [ComponentName]`**

This script will:
1. Fetch component design from Figma using `mcp_Figma_get_design_context`
2. Fetch component metadata using `mcp_Figma_get_metadata`
3. Check for existing Code Connect mapping via `mcp_Figma_get_code_connect_map`
4. Generate component scaffold if new, or validate if existing
5. Create/update Storybook story matching official structure

**Usage Example:**
```bash
npm run sync:figma-component Button
npm run sync:figma-component Modal
```

### Phase 3: Enhanced Storybook Configuration (Medium Priority)

**Improvements:**
1. **Token Documentation Addon**: Display all semantic tokens in Storybook
2. **Design Token Switcher**: Toggle between light/dark themes
3. **Figma Plugin Integration**: Deep-link stories to Figma designs
4. **Component Status Badges**: Implementation status (Complete, In Progress, Needs Review)
5. **Usage Guidelines**: Import documentation from Figma descriptions

### Phase 4: Visual Regression Testing (Low Priority)

**Tools:**
- Chromatic or Percy for visual diffs
- Compare against screenshots from stories.core.procore.com
- Automated alerts when components drift from designs

---

## Immediate Actions You Can Take

### Action 1: Set Up Figma Token Extraction

I'll create the `sync-figma-tokens.ts` script that:
- Connects to your Figma file via MCP
- Extracts all design variables
- Generates a properly structured tokens.json
- Runs the build process

### Action 2: Create Component Templates

Standardized component scaffolding that:
- Uses semantic tokens exclusively (enforced via ESLint)
- Follows CVA (class-variance-authority) patterns
- Includes comprehensive TypeScript types
- Auto-generates Storybook stories

### Action 3: Enhance Storybook

Configure Storybook to:
- Mirror the structure of stories.core.procore.com
- Show token references for each component
- Include usage guidelines and accessibility notes
- Deep-link to Figma designs

---

## Recommended Workflow (Daily Development)

### For New Components:

```bash
# 1. Extract latest tokens from Figma
npm run sync:figma-tokens

# 2. Generate component scaffold from Figma design
npm run sync:figma-component ButtonGroup

# 3. Implement component logic (the generated code provides structure)
# Edit: packages/ui/src/components/ButtonGroup.tsx

# 4. Verify token compliance
npm run check:tokens

# 5. Review in Storybook
npm run storybook
```

### For Existing Components:

```bash
# 1. Sync latest tokens
npm run sync:figma-tokens

# 2. Validate component against Figma
npm run validate:component Button

# 3. Fix any token violations
npm run check:tokens

# 4. Visual regression test
npm run test:visual
```

---

## Your Figma Design System Files

Your design system is split across three Figma files:

1. **[🖥 Web Library](https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?m=auto)** - Core web components
2. **[🛠 Foundation Library](https://www.figma.com/design/CIHfqQZS9xPyV4jYojfKgI/%F0%9F%9B%A0Foundation-Library?m=auto)** - Design foundations (colors, typography, spacing)
3. **[◻️ Data Table Library](https://www.figma.com/design/JrWb1OqtipkInevxd0oO6n/%E2%97%BB%EF%B8%8F-Data-Table-Library?m=auto)** - Complex data components

## Current State Assessment

- **Source of Truth (Code)**: This Storybook + tokens.json
- **Source of Truth (Design)**: Figma files (latest designs)
- **Gap**: Figma tokens not well utilized yet
- **Team Scale**: Small team → 200 person design org
- **Priority**: Quick implementation, scalable foundation

---

## Recommended Approach: Token-First Hybrid ⭐

Based on your needs, here's the **pragmatic path forward**:

### Phase 0: Foundation (✅ COMPLETE)
- [x] 42 components fixed with semantic tokens
- [x] 100+ token violations eliminated
- [x] Base token system in place
- [x] Comprehensive audit complete

### Phase 1: Quick Wins (Week 1-2) 🎯

**Goal**: Establish Storybook as your source of truth, scale-ready

1. **Enhance tokens.json** ✅ (You already have this!)
   - Expand based on [Foundation Library](https://www.figma.com/design/CIHfqQZS9xPyV4jYojfKgI/%F0%9F%9B%A0Foundation-Library?m=auto)
   - Document token usage in comments
   - Create token categories (primitive → semantic → component)

2. **Storybook Configuration**
   - Add Figma plugin for deep-linking
   - Install token browser addon
   - Create component status badges (Complete, In Progress, Needs Design)
   - Mirror stories.core.procore.com structure

3. **Component Templates**
   - Create scaffolding scripts (already built!)
   - Standardize CVA patterns
   - Enforce token usage via ESLint

4. **Documentation**
   - Link each component to its Figma design
   - Add usage guidelines
   - Include accessibility notes

**Deliverables**: Developers can build new components quickly, quality is consistent

### Phase 2: Scale the Team (Week 3-4) 👥

**Goal**: Enable 5-10 contributors without chaos

1. **Governance Model**
   - Define component ownership
   - Create contribution guidelines
   - Set up PR review process
   - Token update workflow

2. **Automation**
   - GitHub Actions for token validation
   - Automated visual regression tests
   - Component library versioning
   - Changelog generation

3. **Design-Dev Handoff**
   - Standardized Figma inspection workflow
   - Component checklist
   - Design QA process

**Deliverables**: Small team can contribute safely

### Phase 3: Figma Integration (Month 2) 🔗

**Goal**: Bidirectional sync between Figma and code

1. **Figma Code Connect**
   - Map components to code
   - Enable design-to-code lookups
   - Track component coverage

2. **Token Extraction** (Optional)
   - Automate token sync from Figma variables
   - Only when Figma tokens are mature

3. **Design System Site**
   - Public Storybook deployment
   - Token documentation
   - Usage analytics

**Deliverables**: Design and code stay in sync automatically

### Phase 4: Enterprise Scale (Month 3+) 🚀

**Goal**: Support 200 person design org

1. **Multi-Brand Support**
   - Theme system for different products
   - Token overrides per brand
   - Shared primitives

2. **Advanced Tooling**
   - VSCode extension for token autocomplete
   - CLI for component generation
   - Migration codemods

3. **Metrics & Analytics**
   - Component adoption tracking
   - Token usage analytics
   - Design system health dashboard

**Deliverables**: Self-service design system, scales infinitely

