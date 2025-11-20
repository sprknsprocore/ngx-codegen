# New Components Added from Figma

This document summarizes the components built from the Figma Web Library designs.

## Components Built

### 1. **Checkbox** (`Checkbox.tsx`)
A fully-featured checkbox component with:
- Standard, indeterminate, checked, and disabled states
- Label and description text support
- Validation states (error, success)
- Two size variants (sm, md)
- Accessible and keyboard navigable

**Key Features:**
- Native checkbox behavior with custom styling
- Support for controlled/uncontrolled usage
- Proper indeterminate state handling via ref

### 2. **ContactItem** (`ContactItem.tsx`)
A contact list item component for displaying user/contact information:
- Avatar with initials or image
- Name and subtitle (title, company)
- Interactive and non-interactive modes
- Selected, disabled, and link variants
- Three size variants (sm, md, lg)

**Key Features:**
- Automatic initials generation from name
- Can be used as button or static display
- Proper avatar fallback handling

### 3. **Calendar** (`Calendar.tsx`)
A full-featured calendar/date picker component:
- Three selection modes: single, range, multiple
- Month/year navigation with dropdowns
- Min/max date constraints
- Disabled dates support (array or function)
- Multi-month display (1 or 2 months)
- Week starts on Sunday

**Key Features:**
- Complete date range visualization
- Visual feedback for range start/end/in-between dates
- Today indicator
- Fully keyboard accessible

### 4. **DateSelect** (`DateSelect.tsx`)
A date input field with calendar dropdown:
- Text input with formatted date (MM / DD / YYYY)
- Calendar picker popup
- Clear button when value is set
- Label and helper text support
- Validation states (error, success)
- Min/max date constraints

**Key Features:**
- Parses user-typed dates automatically
- Opens calendar on focus
- Closes on selection
- Click-outside detection

### 5. **DateRange** (`DateRange.tsx`)
A date range selector with dual inputs:
- Two date inputs (start and end)
- Dual-month calendar display
- Optional preset ranges (last 7/30 days, this/last month)
- Range badge display
- Clear functionality
- Validation states

**Key Features:**
- Visual range indicator badge
- Preset quick selections
- Smart range completion logic
- Side-by-side inputs for clarity

### 6. **DropdownFlyout** (`DropdownFlyout.tsx`)
A cascading/nested dropdown menu system:
- Unlimited nesting depth
- Hover-to-open submenus
- Automatic positioning to prevent viewport overflow
- Custom trigger support
- Disabled options
- Icon support

**Key Features:**
- Submenu positioning (right by default, left if overflow)
- Mouse enter/leave interactions
- Click-outside to close
- Recursive submenu rendering

## Design System Compliance

All components follow the project's strict design system rules:

✅ **Token Usage**: All colors use semantic tokens (e.g., `bg-bg-brand`, `text-fg-default`)
✅ **No Hardcoded Colors**: No hex colors, RGB, or HSL functions
✅ **No Arbitrary Values**: No `[...]` arbitrary Tailwind values
✅ **Consistent Spacing**: Uses theme spacing scale
✅ **Typography**: Uses semantic text classes
✅ **Border Radius**: Uses theme radius tokens
✅ **Shadows**: Uses theme shadow tokens

## Component Patterns

All components follow established patterns:

1. **TypeScript**: Full type safety with exported prop interfaces
2. **forwardRef**: All components use React.forwardRef for ref forwarding
3. **Storybook**: Complete Storybook stories with multiple variants
4. **Accessibility**: Proper ARIA labels and keyboard navigation
5. **Class Variance Authority**: Used for variant styling where appropriate
6. **Controlled/Uncontrolled**: Support both usage patterns
7. **clsx**: Used for conditional className composition

## File Structure

```
packages/ui/src/components/
├── Calendar.tsx
├── Calendar.stories.tsx
├── Checkbox.tsx
├── Checkbox.stories.tsx
├── ContactItem.tsx
├── ContactItem.stories.tsx
├── DateRange.tsx
├── DateRange.stories.tsx
├── DateSelect.tsx
├── DateSelect.stories.tsx
├── DropdownFlyout.tsx
├── DropdownFlyout.stories.tsx
└── index.ts (updated with new exports)
```

## Integration

All components are exported from `@ssot/ui`:

```typescript
import {
  Calendar,
  Checkbox,
  ContactItem,
  DateRange,
  DateSelect,
  DropdownFlyout,
} from "@ssot/ui";
```

## Storybook

All components have comprehensive Storybook stories demonstrating:
- Default states
- All variants
- Interactive examples
- Edge cases
- Real-world usage examples

Run Storybook to view all components:
```bash
npm run storybook
```

## Testing Recommendations

For each component, consider adding tests for:
1. Rendering with default props
2. All variant combinations
3. Controlled vs uncontrolled behavior
4. Keyboard interactions
5. Accessibility (ARIA attributes)
6. Edge cases (empty states, overflow, etc.)

## Future Enhancements

Potential improvements:
1. **Calendar**: Add keyboard navigation between dates
2. **DateSelect/DateRange**: Add locale support for date formatting
3. **DropdownFlyout**: Add keyboard navigation through menu items
4. **Checkbox**: Add CheckboxGroup component for managing multiple checkboxes
5. **ContactItem**: Add badge/status indicator support

## Figma Reference

These components were built from the following Figma designs:
- Checkbox: https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/Web-Library?node-id=24566-365
- Contact Item: https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/Web-Library?node-id=25310-79
- Date Select: https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/Web-Library?node-id=39836-2095
- Date Range: https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/Web-Library?node-id=43298-1436
- Calendar Menu: https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/Web-Library?node-id=42521-413
- Dropdown Flyout: https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/Web-Library?node-id=41219-449860

