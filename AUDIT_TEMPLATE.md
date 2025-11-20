# Component Audit Template

## Component: [Name]

**Audit Date:** [Date]  
**Auditor:** AI Assistant  
**Procore Reference:** https://stories.core.procore.com/?path=/docs/[component]  
**Figma Reference:** [Link if available]

---

## 1. Visual Fidelity ✅ ⚠️ ❌

### Colors
- [ ] Background colors match reference
- [ ] Text colors match reference
- [ ] Border colors match reference
- [ ] State colors (hover, focus, active, disabled) match

**Issues:**
- 

### Spacing & Layout
- [ ] Padding matches reference
- [ ] Margins match reference
- [ ] Gap/spacing between elements correct
- [ ] Component dimensions match

**Issues:**
- 

### Typography
- [ ] Font family correct (Inter)
- [ ] Font sizes match
- [ ] Font weights match
- [ ] Line heights match
- [ ] Letter spacing match

**Issues:**
- 

### Visual Details
- [ ] Border radius matches
- [ ] Shadows match
- [ ] Icons correct size/color
- [ ] Animations/transitions present

**Issues:**
- 

---

## 2. Token Usage ✅ ⚠️ ❌

### Code Scan Results
- [ ] No hex color values found
- [ ] No rgb()/hsl() functions found
- [ ] No arbitrary Tailwind values ([...])
- [ ] All colors from semantic-tokens.ts
- [ ] All spacing uses theme tokens
- [ ] All shadows use theme tokens

**Violations Found:**
```
[List any violations with line numbers]
```

---

## 3. Accessibility ✅ ⚠️ ❌

### ARIA Attributes
- [ ] Proper role attributes
- [ ] aria-label where needed
- [ ] aria-describedby for helpers
- [ ] aria-invalid for errors
- [ ] aria-disabled for disabled state

**Issues:**
- 

### Keyboard Navigation
- [ ] Tab navigation works
- [ ] Enter/Space triggers actions
- [ ] Escape closes (if applicable)
- [ ] Arrow keys work (if applicable)
- [ ] Focus trap (if modal/dialog)

**Issues:**
- 

### Focus Management
- [ ] Focus indicator visible
- [ ] Focus order logical
- [ ] Focus restored after actions

**Issues:**
- 

### Color Contrast
- [ ] Text meets WCAG AA (4.5:1)
- [ ] Interactive elements meet AA (3:1)
- [ ] States have sufficient contrast

**Issues:**
- 

### Screen Reader Support
- [ ] Announces state changes
- [ ] Labels are clear
- [ ] Error messages announced

**Issues:**
- 

---

## 4. Props API ✅ ⚠️ ❌

### Comparison with Procore
- [ ] Props match Procore API
- [ ] Variant names match
- [ ] Size options match
- [ ] Event handlers match

**Differences:**
- 

### TypeScript Types
- [ ] All props typed
- [ ] Types exported
- [ ] Union types for variants
- [ ] Ref forwarding typed

**Issues:**
- 

### Defaults
- [ ] Sensible defaults set
- [ ] Defaults match Procore

**Issues:**
- 

---

## 5. Documentation ✅ ⚠️ ❌

### Storybook Stories
- [ ] Default story exists
- [ ] All variants covered
- [ ] All sizes shown
- [ ] All states shown (disabled, error, etc.)
- [ ] Interactive examples
- [ ] Controls working

**Missing:**
- 

### Props Documentation
- [ ] JSDoc comments on props
- [ ] Usage examples in stories
- [ ] Edge cases documented

**Missing:**
- 

---

## 6. Tests ✅ ⚠️ ❌

- [ ] Unit test file exists
- [ ] Renders without crashing
- [ ] Props are respected
- [ ] User interactions tested
- [ ] Accessibility tested

**Coverage:**
- Test file: ❌ Does not exist
- Coverage: 0%

---

## Overall Assessment

**Severity:** 🔴 Critical | 🟡 High | 🟠 Medium | 🟢 Low

**Summary:**
[Brief summary of findings]

**Critical Issues:**
1. 

**Recommended Actions:**
1. 
2. 
3. 

---

## Scoring

| Category | Score | Weight | Weighted Score |
|----------|-------|--------|----------------|
| Visual Fidelity | ?/10 | 25% | ? |
| Token Usage | ?/10 | 20% | ? |
| Accessibility | ?/10 | 25% | ? |
| Props API | ?/10 | 10% | ? |
| Documentation | ?/10 | 10% | ? |
| Tests | ?/10 | 10% | ? |
| **TOTAL** | | | **/100** |

**Grade:** A/B/C/D/F

