# Component Quality Fix Plan

**Created:** November 20, 2025  
**Status:** Ready for Execution  
**Based On:** AUDIT_REPORT.md & COMPONENT_AUDIT_DETAILS.md

---

## Executive Summary

**Total Issues Identified:** 185+
- Token Violations: 100+ instances across 35 components
- Missing Tests: 70 components (100%)
- Accessibility: Minor improvements needed
- Documentation: Various gaps

**Effort Required:** 104-145 hours total (2-3 weeks at full time)

**Critical Path:** 28-39 hours (can be completed in 1 week)

---

## Fix Batches

### BATCH 1: Foundation Tokens (2 hours) 🔥 CRITICAL

**Must Do First - Blocks All Other Fixes**

#### Task 1.1: Add Missing Semantic Tokens
**File:** `packages/tokens/src/semantic-tokens.ts`  
**Estimated Time:** 1 hour

Add these tokens to the semantic section:

```typescript
// In color section, add to semantic tokens:

// Hover states
"fg.brand-hover": "#1D5CC9", // blue.45 - for link hovers

// Scrim/Overlay states
"bg.scrim-light": "rgba(35, 39, 41, 0.25)", // gray.15 with 25% opacity
"bg.scrim-medium": "rgba(35, 39, 41, 0.50)", // gray.15 with 50% opacity
"bg.scrim-dark": "rgba(35, 39, 41, 0.75)", // gray.15 with 75% opacity

// Selection/State backgrounds
"bg.state-selected": "#F6F9FE", // blue.98 - for selected table rows
"bg.state-info": "#2066DF", // blue.50 - for info toasts/messages

// Additional consideration (if white/black semantic tokens don't exist):
// Verify these exist or add:
// "bg.canvas": "#FFFFFF" (already exists as bg.canvas)
// "fg.reversed": "#FFFFFF" (already exists)
// "bg.reversed": "#232729" (already exists)
```

#### Task 1.2: Update Tailwind Config
**File:** `tailwind.config.ts`  
**Estimated Time:** 30 minutes

Add arbitrary value replacement:

```typescript
extend: {
  minWidth: {
    'input-min': '120px', // For MultiSelect fix
  },
  // ... existing extensions
}
```

#### Task 1.3: Run Token Build Script
**Command:** `npm run build:tokens`  
**Estimated Time:** 5 minutes

Verify tokens are properly generated and available.

---

### BATCH 2: Critical Component Fixes (12-15 hours) 🔥 CRITICAL

**Priority Order by Impact**

#### Task 2.1: Fix Pill Component ⚡ HIGHEST IMPACT
**File:** `packages/ui/src/components/Pill.tsx`  
**Lines:** 39-125  
**Estimated Time:** 3 hours  
**Difficulty:** High

**Current Issues:**
- 20+ primitive color tokens across all tone variants
- Hardcoded `text-white` and `bg-white`
- Both solid and outline variants affected

**Fix Strategy:**
Replace all compound variants:

```typescript
// OLD - Lines 34-127
compoundVariants: [
  // Solid variants
  { variant: "solid", tone: "neutral", class: "bg-gray-70 text-white" },
  { variant: "solid", tone: "blue", class: "bg-blue-50 text-white" },
  // ... etc
]

// NEW - Use semantic tokens
compoundVariants: [
  // Solid variants
  { variant: "solid", tone: "neutral", class: "bg-fg-muted text-fg-onbrand" },
  { variant: "solid", tone: "blue", class: "bg-bg-brand text-fg-onbrand" },
  { variant: "solid", tone: "green", class: "bg-state-success text-fg-onbrand" },
  { variant: "solid", tone: "red", class: "bg-state-danger text-fg-onbrand" },
  { variant: "solid", tone: "orange", class: "bg-state-warn text-fg-onbrand" },
  { variant: "solid", tone: "yellow", class: "bg-state-warn text-fg-onbrand" },
  // For cyan, magenta, purple - may need new semantic tokens or map to existing
  { variant: "solid", tone: "cyan", class: "bg-state-info text-fg-onbrand" },
  { variant: "solid", tone: "magenta", class: "bg-bg-brand text-fg-onbrand" },
  { variant: "solid", tone: "purple", class: "bg-bg-brand text-fg-onbrand" },
  
  // Outline variants
  { variant: "outline", tone: "neutral", class: "border border-border-default text-fg-default bg-bg-canvas" },
  { variant: "outline", tone: "blue", class: "border border-bg-brand text-fg-brand bg-bg-canvas" },
  { variant: "outline", tone: "green", class: "border border-state-success text-state-success bg-bg-canvas" },
  { variant: "outline", tone: "red", class: "border border-state-danger text-state-danger bg-bg-canvas" },
  { variant: "outline", tone: "orange", class: "border border-state-warn text-state-warn bg-bg-canvas" },
  { variant: "outline", tone: "yellow", class: "border border-state-warn text-state-warn bg-bg-canvas" },
  { variant: "outline", tone: "cyan", class: "border border-state-info text-state-info bg-bg-canvas" },
  { variant: "outline", tone: "magenta", class: "border border-bg-brand text-fg-brand bg-bg-canvas" },
  { variant: "outline", tone: "purple", class: "border border-bg-brand text-fg-brand bg-bg-canvas" },
]
```

Also fix line 16:
```typescript
// OLD
outline: "bg-white",
// NEW
outline: "bg-bg-canvas",
```

**Testing:** Verify all Pill stories still render correctly

---

#### Task 2.2: Fix Toast Component
**File:** `packages/ui/src/components/Toast.tsx`  
**Lines:** 7, 11-14  
**Estimated Time:** 1 hour  
**Difficulty:** Medium

**Changes:**

```typescript
// Line 7 - Update base recipe
const toastRecipe = cva(
  "flex items-start gap-3 rounded-sm px-4 py-3 text-fg-onbrand shadow-4 min-w-80 max-w-md", // Changed text-white
  {
    variants: {
      variant: {
        success: "bg-state-success",     // Was: bg-green-30
        error: "bg-state-danger",        // Was: bg-red-40
        info: "bg-state-info",           // Was: bg-blue-50  
        warning: "bg-state-warn",        // Was: bg-yellow-40
      },
    },
    // ...
  }
);
```

**Testing:** Verify all toast variants in Storybook

---

#### Task 2.3: Fix Tooltip Component
**File:** `packages/ui/src/components/Tooltip.tsx`  
**Lines:** 7, 23, 153  
**Estimated Time:** 1 hour  
**Difficulty:** Medium

**Changes:**

```typescript
// Line 7
const tooltipRecipe = cva(
  "absolute z-50 bg-bg-reversed text-fg-reversed text-xs px-3 py-2 rounded-sm shadow-3 whitespace-nowrap pointer-events-none",
  // ... rest unchanged
);

// Line 23
const arrowRecipe = cva("absolute w-2 h-2 bg-bg-reversed rotate-45", {
  // ... rest unchanged
});

// Line 153
"inline-flex items-center justify-center rounded-full hover:bg-bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus p-0.5",
```

**Testing:** Hover over tooltips, verify styling

---

#### Task 2.4: Fix Switch Component
**File:** `packages/ui/src/components/Switch.tsx`  
**Lines:** 47, 63  
**Estimated Time:** 30 minutes  
**Difficulty:** Easy

**Changes:**

```typescript
// Line 43-48
className={clsx(
  "relative inline-block flex-shrink-0 rounded-full transition-colors cursor-pointer",
  styles.track,
  disabled && "opacity-50 cursor-not-allowed",
  checked || defaultChecked
    ? "bg-bg-brand"
    : "bg-bg-tertiary"  // Changed from bg-gray-60
)}

// Line 63
"absolute left-0.5 top-1/2 -translate-y-1/2 rounded-full bg-bg-canvas transition-transform",  // Changed from bg-white
```

**Testing:** Toggle switch, verify both states

---

#### Task 2.5: Fix Link Component
**File:** `packages/ui/src/components/Link.tsx`  
**Line:** 16  
**Estimated Time:** 30 minutes  
**Difficulty:** Easy

**Changes:**

```typescript
// Line 16
tone: {
  default: "text-fg-brand hover:text-fg-brand-hover",  // Use new token
  secondary: "text-fg-secondary hover:text-fg-default",
  reversed: "text-fg-reversed hover:opacity-80",
},
```

**Testing:** Hover over links, verify color change

---

#### Task 2.6: Fix Navigation Components (6-8 hours)
**Difficulty:** Medium-High

##### 2.6a: NavMenu
**File:** `packages/ui/src/components/navigation/NavMenu.tsx`  
**Time:** 1.5 hours

```typescript
// Line 96
className="fixed inset-0 bg-scrim-medium z-40"  // Was: bg-black bg-opacity-20

// Line 105
"fixed bg-bg-canvas rounded-lg shadow-3 z-50 flex flex-col overflow-hidden",  // Was: bg-white

// Line 147
className="w-full h-9 pl-10 pr-3 rounded-md border border-border-default bg-bg-canvas text-sm text-fg-default placeholder:text-fg-disabled focus:outline-none focus:ring-2 focus:ring-border-focus"
// Was: bg-white, placeholder:text-gray-50
```

##### 2.6b: NavIconButton
**File:** `packages/ui/src/components/navigation/NavIconButton.tsx`  
**Time:** 30 min

```typescript
// Line 56
<span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 flex items-center justify-center bg-state-danger text-fg-onbrand text-xs font-semibold rounded-full">
// Was: bg-orange-50 text-white
```

##### 2.6c: NavMenuItem
**File:** `packages/ui/src/components/navigation/NavMenuItem.tsx`  
**Time:** 30 min

```typescript
// Line 106
<span className="px-2 py-0.5 rounded-full text-xs font-semibold tracking-wider leading-4 bg-state-danger text-fg-onbrand flex items-center">
// Was: bg-orange-50 text-white
```

##### 2.6d: NavSearch
**File:** `packages/ui/src/components/navigation/NavSearch.tsx`  
**Time:** 30 min

```typescript
// Line 79
: "bg-bg-canvas border-border-default text-fg-default placeholder:text-fg-disabled",
// Was: bg-white, text-gray-50
```

##### 2.6e: NavLogo
**File:** `packages/ui/src/components/navigation/NavLogo.tsx`  
**Time:** 15 min

```typescript
// Line 39
<path d="M0 0h106v14H0z" fill="currentColor" className="text-fg-reversed" />
// Was: text-white
```

##### 2.6f: Other Nav Components (2-3 hours)
- GlobalNav.tsx
- AppSelector.tsx
- ProjectPicker.tsx
- NavMenuGroup.tsx
- NavAvatar.tsx
- SystemStatus.tsx
- CompanyLogo.tsx

**Testing:** Test entire navigation system in Storybook

---

### BATCH 3: High Priority Fixes (10-12 hours) 🟡 HIGH

#### Task 3.1: Modal & Overlay Components (4-5 hours)

##### 3.1a: Modal
**File:** `packages/ui/src/components/Modal.tsx`  
**Line:** 81  
**Time:** 45 min

```typescript
className="fixed inset-0 z-50 flex items-center justify-center bg-scrim-medium backdrop-blur-sm"
// Was: bg-black/50
```

##### 3.1b: Popover
**File:** `packages/ui/src/components/Popover.tsx`  
**Lines:** 7, 30  
**Time:** 45 min

```typescript
// Line 7
"absolute bg-bg-canvas rounded-md border border-border-default z-50",
// Was: bg-white

// Line 30
const popoverArrow = cva("absolute w-3 h-3 bg-bg-canvas border transform rotate-45", {
// Was: bg-white
```

##### 3.1c: Panel
**File:** `packages/ui/src/components/Panel.tsx`  
**Lines:** 8, 65  
**Time:** 1 hour

```typescript
// Line 8
"fixed bg-bg-canvas border-border-default flex flex-col z-40 transition-transform duration-300",
// Was: bg-white

// Line 65
"fixed inset-0 bg-scrim-medium transition-opacity duration-300",
// Was: bg-black
```

##### 3.1d: Scrim
**File:** `packages/ui/src/components/Scrim.tsx`  
**Lines:** 72-74  
**Time:** 30 min

```typescript
intensity: {
  light: "bg-scrim-light",    // Was: bg-black/25
  medium: "bg-scrim-medium",  // Was: bg-black/50
  dark: "bg-scrim-dark",      // Was: bg-black/75
}
```

##### 3.1e: TearSheet
**File:** `packages/ui/src/components/TearSheet.tsx`  
**Line:** 63  
**Time:** 30 min

```typescript
"fixed inset-0 bg-scrim-medium transition-opacity z-40",
// Was: bg-black/50
```

---

#### Task 3.2: Table & Data Components (3-4 hours)

##### 3.2a: Table
**File:** `packages/ui/src/components/Table.tsx`  
**Line:** 89  
**Time:** 1 hour

```typescript
className={clsx(
  "transition-colors hover:bg-bg-surface",
  selected && "bg-state-selected",  // Was: bg-blue-98
  className
)}
```

##### 3.2b: Pagination
**File:** `packages/ui/src/components/Pagination.tsx`  
**Lines:** 117-118  
**Time:** 1.5 hours

```typescript
className={clsx(
  "h-8 px-2 pr-8 text-sm rounded-md border border-border-default bg-bg-canvas",  // Was: bg-white
  "focus:outline-none focus:ring-2 focus:ring-border-focus focus:border-border-focus",  // Was: focus:ring-blue-50
  "cursor-pointer transition-colors"
)}
```

##### 3.2c: Menu
**File:** `packages/ui/src/components/Menu.tsx`  
**Lines:** 126, 204  
**Time:** 1 hour

```typescript
// Line 126
<div className="w-8 h-8 rounded-full bg-bg-secondary flex items-center justify-center text-fg-default text-xs font-semibold flex-shrink-0">
// Was: bg-gray-85

// Line 204
<span className="px-2 py-0.5 text-xs bg-bg-brand/10 text-fg-brand rounded">
// Was: bg-blue-90 text-blue-50
// Note: May need to add bg-brand-subtle token if /10 opacity doesn't work
```

---

#### Task 3.3: Avatar Components (2-3 hours)

##### 3.3a: Avatar
**File:** `packages/ui/src/components/Avatar.tsx`  
**Lines:** 16-17  
**Time:** 1 hour

```typescript
variant: {
  image: "",
  initials: "bg-bg-secondary text-fg-default font-semibold",  // Was: bg-gray-60 text-white
  icon: "bg-bg-secondary text-fg-default",  // Was: bg-gray-60 text-white
}
```

##### 3.3b: AvatarStack
**File:** `packages/ui/src/components/AvatarStack.tsx`  
**Line:** 79  
**Time:** 1 hour

```typescript
"relative inline-flex items-center justify-center rounded-full bg-bg-secondary text-fg-default font-semibold ring-2 ring-bg-canvas",
// Was: bg-gray-70 text-white ring-white
```

##### 3.3c: ContactItem
**File:** `packages/ui/src/components/ContactItem.tsx`  
**Line:** 97  
**Time:** 30 min

```typescript
avatarUrl ? "bg-bg-tertiary" : "bg-bg-secondary text-fg-default"
// Was: bg-gray-85 : bg-gray-70 text-white
```

---

#### Task 3.4: Form Components (4-5 hours)

##### 3.4a: DateRange
**File:** `packages/ui/src/components/DateRange.tsx`  
**Lines:** 329, 343  
**Time:** 1.5 hours

```typescript
// Line 329
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-brand text-fg-onbrand text-sm rounded-full">
// Was: bg-blue-50 text-white

// Line 343
className="text-fg-onbrand"
// Was: text-white
```

##### 3.4b: MultiSelect
**File:** `packages/ui/src/components/MultiSelect.tsx`  
**Line:** 219  
**Time:** 30 min

```typescript
className="flex-1 min-w-input-min bg-transparent outline-none placeholder:text-fg-disabled disabled:cursor-not-allowed"
// Was: min-w-[120px]
```

##### 3.4c: PillSelect
**File:** `packages/ui/src/components/PillSelect.tsx`  
**Lines:** 145, 220, 230, 271, 276  
**Time:** 2 hours

Replace all instances:
- `bg-white` → `bg-bg-canvas`
- `text-white` → `text-fg-onbrand`

**Testing:** Test all form components with validation states

---

### BATCH 4: Test Creation (36-46 hours) 🧪 HIGH PRIORITY

#### Phase 4.1: Core Components (16-20 hours)

Create test files for:
1. **Button.test.tsx** (2-3 hours)
   - All size variants
   - All emphasis/tone combinations
   - Disabled state
   - Click handlers
   - Keyboard interaction

2. **Input.test.tsx** (2-3 hours)
   - Label and helper text
   - Validation states (error, success)
   - Required indicator
   - Disabled state
   - User input

3. **Select.test.tsx** (3-4 hours)
   - Open/close dropdown
   - Option selection
   - Keyboard navigation (arrows, enter, escape)
   - Searchable variant
   - Clearable variant
   - Grouped options
   - Disabled state

4. **Checkbox.test.tsx** (2 hours)
   - Checked/unchecked
   - Indeterminate
   - Disabled
   - Label interaction
   - Description text

5. **Radio.test.tsx** (2 hours)
   - RadioGroup component
   - Single selection
   - Disabled options
   - Horizontal/vertical

6. **Switch.test.tsx** (2 hours)
   - On/off states
   - Sizes
   - Disabled
   - Label interaction

**Test Template:**
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  it('renders without crashing', () => {
    render(<ComponentName />);
  });

  it('renders children correctly', () => {
    render(<ComponentName>Test Content</ComponentName>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies className prop', () => {
    const { container } = render(<ComponentName className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('handles disabled state', () => {
    render(<ComponentName disabled />);
    expect(screen.getByRole('...')).toBeDisabled();
  });

  // Component-specific tests...
});
```

#### Phase 4.2: Form Components (12-16 hours)

Test files needed:
- FormField.test.tsx (2 hours)
- TextArea.test.tsx (2 hours)
- NumberInput.test.tsx (2 hours)
- CurrencyInput.test.tsx (2 hours)
- DateSelect.test.tsx (2-3 hours)
- DateRange.test.tsx (3 hours)
- Calendar.test.tsx (3-4 hours)
- MultiSelect.test.tsx (3 hours)
- PillSelect.test.tsx (2-3 hours)

#### Phase 4.3: Complex Components (8-10 hours)

Test files needed:
- Modal.test.tsx (2-3 hours) - Focus trap, ESC, backdrop
- Popover.test.tsx (2 hours) - Positioning, click outside
- Menu.test.tsx (2-3 hours) - Search, selection, groups
- Table.test.tsx (2-3 hours) - Sorting, selection
- Tabs.test.tsx (2 hours) - Tab switching, keyboard nav

---

### BATCH 5: Visual Verification (12-18 hours) 🎨 MEDIUM

#### Task 5.1: Procore Storybook Comparison (8-12 hours)

**Process:**
1. Open Procore Storybook: https://stories.core.procore.com/
2. For each component:
   - Take screenshot of Procore version
   - Take screenshot of our version
   - Document differences in spreadsheet
   - Note: colors, spacing, sizing, states

**Components to Compare (Priority Order):**
1. Core: Button, Input, Select, Checkbox, Radio, Switch
2. Display: Badge, Tag, Pill, Avatar, Card
3. Overlays: Modal, Toast, Popover, Tooltip
4. Navigation: All Nav components
5. Data: Table, Pagination
6. Form: All form components

**Deliverable:** Visual comparison document with fix recommendations

#### Task 5.2: Figma Integration (4-6 hours)

**If Figma files available:**
1. Use MCP Figma tools to extract component specs
2. Compare with implementation
3. Extract exact:
   - Colors (verify token mapping)
   - Spacing values
   - Typography settings
   - Border radius
   - Shadows

**Commands to use:**
```bash
# Get design context for a component
mcp_Figma_get_design_context --nodeId="123:456"

# Get variable definitions
mcp_Figma_get_variable_defs --nodeId="123:456"

# Generate screenshot
mcp_Figma_get_screenshot --nodeId="123:456"
```

---

### BATCH 6: Remaining Components (28-40 hours) 🟢 LOWER PRIORITY

#### Task 6.1: Audit Remaining Components (12-16 hours)

Components not yet fully audited:
- FormField, TextArea, NumberInput, CurrencyInput
- TieredSelect, SegmentedControl, Slider
- FileSelect, DropZone, Search
- PageHeader, PagePanel, DockPanel
- Banner, EmptyState, Breadcrumbs
- ProgressBar, Spinner, Thumbnail, Title
- FileList, DropdownFlyout, Form, TextEditor, Tile, Pills

**For each:**
1. Read component code
2. Scan for token violations
3. Check accessibility
4. Review props API
5. Document findings

#### Task 6.2: Fix Medium Priority Issues (8-12 hours)

Based on audit findings from Task 6.1

#### Task 6.3: Documentation Updates (4-6 hours)

1. Create COMPONENT_GUIDELINES.md
2. Document token usage patterns
3. Create migration guide from Procore
4. Update README with dev instructions
5. Add ADRs for major decisions

#### Task 6.4: Final QA Pass (4-6 hours)

1. Run all tests
2. Check all Storybook stories
3. Verify token compliance
4. Check accessibility with axe
5. Final visual review

---

## Automation & Prevention

### Linting Rules

**Create:** `.eslintrc.cjs` rule

```javascript
module.exports = {
  rules: {
    'no-hardcoded-colors': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Disallow hardcoded color values',
        },
        messages: {
          noHex: 'Hex colors are forbidden. Use semantic tokens from packages/tokens',
          noRgb: 'RGB/HSL functions are forbidden. Use semantic tokens',
          noArbitrary: 'Arbitrary Tailwind values are forbidden. Extend the theme',
        },
      },
      create(context) {
        return {
          Literal(node) {
            const value = node.value;
            if (typeof value === 'string') {
              // Check for hex colors
              if (/#[0-9A-Fa-f]{3,6}/.test(value)) {
                context.report({ node, messageId: 'noHex' });
              }
              // Check for rgb/hsl
              if (/rgb\(|hsl\(/.test(value)) {
                context.report({ node, messageId: 'noRgb' });
              }
              // Check for arbitrary Tailwind in className
              if (/\[[^\]]+\]/.test(value) && node.parent.key?.name === 'className') {
                context.report({ node, messageId: 'noArbitrary' });
              }
            }
          },
        };
      },
    },
  },
};
```

### Pre-commit Hook

**Create:** `.husky/pre-commit`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# Run token violation scan
echo "🔍 Checking for token violations..."
npm run check:tokens

# Run tests
echo "🧪 Running tests..."
npm test

# Run linter
echo "📝 Running linter..."
npm run lint
```

### CI/CD Checks

**Update:** `.github/workflows/ci.yml`

```yaml
name: CI

on: [push, pull_request]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      
      - name: Install dependencies
        run: npm ci
      
      - name: Check token violations
        run: npm run check:tokens
      
      - name: Run linter
        run: npm run lint
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
      
      - name: Check for hardcoded colors
        run: |
          if grep -r "#[0-9A-Fa-f]\{3,6\}" packages/ui/src/components --exclude-dir=*.stories.tsx; then
            echo "❌ Found hardcoded hex colors!"
            exit 1
          fi
```

---

## Success Metrics

### Definition of Done

A component is considered "complete" when:

- ✅ Zero token violations
- ✅ Test coverage > 80%
- ✅ All accessibility checks pass (axe)
- ✅ All Storybook stories render
- ✅ Visual matches Procore (within reason)
- ✅ Props API documented
- ✅ No linter errors

### Progress Tracking

**Week 1:**
- [ ] Batch 1: Foundation tokens complete
- [ ] Batch 2: Critical components fixed (Pill, Toast, Tooltip, Switch, Link)
- [ ] Batch 2: Navigation components fixed

**Week 2:**
- [ ] Batch 3: High priority components fixed
- [ ] Batch 4: 50% test coverage achieved

**Week 3:**
- [ ] Batch 4: 80% test coverage achieved
- [ ] Batch 5: Visual verification complete

**Week 4+:**
- [ ] Batch 6: Remaining components audited and fixed
- [ ] All automation in place
- [ ] Final QA complete

---

## Risk Mitigation

### Potential Risks

1. **Breaking Changes**
   - **Risk:** Token changes might break existing usage
   - **Mitigation:** Create migration guide, test thoroughly, version bump

2. **Visual Regressions**
   - **Risk:** Fixes might change appearance unexpectedly
   - **Mitigation:** Screenshot testing, manual QA, gradual rollout

3. **Scope Creep**
   - **Risk:** Finding more issues during fixes
   - **Mitigation:** Document new issues separately, stick to plan

4. **Time Overrun**
   - **Risk:** Tasks take longer than estimated
   - **Mitigation:** Focus on critical path first, defer lower priority

---

## Communication Plan

### Status Updates

**Daily Standup Format:**
- Yesterday: [Components fixed]
- Today: [Components to fix]
- Blockers: [Any issues]

**Weekly Report:**
- Components fixed: X/70
- Tests added: X/70
- Token violations remaining: X
- Estimated completion: [Date]

### Stakeholder Communication

**After Batch 1-2 (Week 1):**
- "Critical token violations resolved"
- "Core components now compliant"
- "Ready for production use"

**After Batch 3-4 (Week 2-3):**
- "All components compliant"
- "Test coverage at 80%"
- "High confidence in quality"

**After Batch 5-6 (Week 4+):**
- "Visual verification complete"
- "Full component library ready"
- "Automation in place"

---

## Next Actions

### Today
1. ✅ Review and approve this fix plan
2. Add missing semantic tokens (Batch 1)
3. Start with Pill.tsx fix (highest impact)
4. Set up testing infrastructure

### This Week
1. Complete Batch 1 & 2 (Foundation + Critical)
2. Create first test files
3. Document any blockers
4. Daily progress updates

### Questions to Resolve
1. Do we have access to Figma files?
2. What's the testing framework setup? (Jest? Vitest?)
3. Is there a PR approval process?
4. When is target ship date?

