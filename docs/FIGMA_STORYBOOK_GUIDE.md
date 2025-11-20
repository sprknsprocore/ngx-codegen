# Figma + Storybook Integration Guide

## Quick Reference

### Add Figma Link to a Story

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from './YourComponent';

const meta = {
  title: 'Components/YourComponent',
  component: YourComponent,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/...',
    },
  },
  tags: ['autodocs', 'complete'], // or 'in-progress' or 'needs-design'
} satisfies Meta<typeof YourComponent>;

export default meta;
```

## Status Tags

| Tag | Badge | When to Use |
|-----|-------|-------------|
| `complete` | ✅ Complete | Component matches Figma design, all variants implemented |
| `in-progress` | 🚧 In Progress | Component partially implemented or being actively worked on |
| `needs-design` | 🎨 Needs Design | No Figma design exists yet or design is incomplete |

## Figma Libraries

### 🛠 Foundation Library
**URL**: https://www.figma.com/design/CIHfqQZS9xPyV4jYojfKgI/%F0%9F%9B%A0Foundation-Library?m=auto

**Use for**:
- Colors and color tokens
- Typography (fonts, sizes, weights)
- Spacing scale
- Border radius
- Shadows
- Basic primitives

**Example Components**:
- Text
- Box
- Stack
- Inline

### 🖥 Web Library
**URL**: https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?m=auto

**Use for**:
- Buttons
- Forms (inputs, selects, checkboxes)
- Cards
- Modals
- Navigation components
- Standard UI components

**Example Components**:
- Button
- Input
- Card
- Modal
- Select
- Calendar

### ◻️ Data Table Library
**URL**: https://www.figma.com/design/JrWb1OqtipkInevxd0oO6n/%E2%97%BB%EF%B8%8F-Data-Table-Library?m=auto

**Use for**:
- Tables
- Data grids
- Complex data visualization
- List views
- Sortable/filterable data

**Example Components**:
- DataTable
- TableHeader
- TableRow
- TableCell
- Pagination

## Workflow

### For Developers

1. **Find the Figma Design**:
   - Ask your designer for the Figma URL
   - Or browse the appropriate library (Foundation, Web, or Data Table)
   - Copy the full URL (including node-id if applicable)

2. **Add to Story**:
   ```typescript
   parameters: {
     design: {
       type: 'figma',
       url: 'YOUR_FIGMA_URL_HERE',
     },
   }
   ```

3. **Set Status Tag**:
   - Start with `in-progress`
   - Change to `complete` when implementation matches design
   - Use `needs-design` if waiting for design

4. **View in Storybook**:
   - Run `npm run storybook`
   - Navigate to your component
   - Click the "Figma" tab in the addons panel
   - See the embedded Figma design alongside your component

5. **Compare & Iterate**:
   - View your component in Storybook
   - Switch to Figma tab to see the design
   - Toggle between tabs to compare
   - Click "Open in Figma" for full Figma editor

### For Designers

1. **Create or Update Figma Design**:
   - Use the appropriate library (Foundation, Web, or Data Table)
   - Follow the design system guidelines
   - Ensure all variants are documented

2. **Share with Developers**:
   - Copy the Figma URL
   - Share via PR comment, Slack, or ticket
   - Include any special notes about interactions or edge cases

3. **Verify Implementation**:
   - Open Storybook (ask dev for link or run locally)
   - Navigate to the component
   - Check the Figma tab shows your design
   - Verify all variants match
   - Leave feedback in PR if adjustments needed

## Tips & Tricks

### Getting a Figma Node URL

1. Open Figma file
2. Select the component frame
3. Right-click → "Copy link"
4. Or use the Share button → "Copy link"
5. The URL should look like: `https://www.figma.com/design/FILE_ID/FILE_NAME?node-id=123-456`

### Multiple Components in One Story

If you have multiple related components, link to the parent frame:

```typescript
parameters: {
  design: {
    type: 'figma',
    url: 'https://figma.com/...?node-id=PARENT_FRAME_ID',
  },
}
```

### Linking to Specific Variants

To link to a specific variant, use the variant's node-id:

```typescript
// Primary button variant
parameters: {
  design: {
    type: 'figma',
    url: 'https://figma.com/...?node-id=123-456', // node-id of primary variant
  },
}
```

### What If Design Doesn't Exist?

Use the `needs-design` tag and create a story anyway:

```typescript
const meta = {
  title: 'Components/NewComponent',
  component: NewComponent,
  tags: ['autodocs', 'needs-design'],
  // No design parameter yet
};
```

This signals to designers that this component needs a design.

## Troubleshooting

### "No Figma design linked" message

**Problem**: The Figma tab shows a message saying no design is linked.

**Solution**:
- Check that you've added the `parameters.design` configuration
- Verify the URL is correct and accessible
- Ensure `type: 'figma'` is set

### Figma iframe not loading

**Problem**: The embedded Figma viewer shows an error.

**Solution**:
- Check that the Figma file is not private
- Ensure the URL is a valid Figma design URL
- Try clicking "Open in Figma" to verify the link works

### Status badge not showing

**Problem**: The status badge doesn't appear in Storybook.

**Solution**:
- Check that you've added the tag to the `tags` array
- Valid tags: `complete`, `in-progress`, `needs-design`
- Tags are case-sensitive
- Restart Storybook if needed

## Examples

### Complete Component

```typescript
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?m=auto',
    },
  },
  tags: ['autodocs', 'complete'],
} satisfies Meta<typeof Button>;
```

### In Progress Component

```typescript
const meta = {
  title: 'Components/NewCard',
  component: NewCard,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?node-id=456-789',
    },
  },
  tags: ['autodocs', 'in-progress'],
} satisfies Meta<typeof NewCard>;
```

### Needs Design

```typescript
const meta = {
  title: 'Components/FeatureCard',
  component: FeatureCard,
  // No design URL yet
  tags: ['autodocs', 'needs-design'],
} satisfies Meta<typeof FeatureCard>;
```

## Benefits

✅ **Side-by-side comparison**: View design and implementation simultaneously  
✅ **Quick access**: Jump to Figma with one click  
✅ **Status tracking**: See which components are complete, in progress, or need design  
✅ **Team alignment**: Designers and developers share the same source of truth  
✅ **Documentation**: Automatic visual documentation of design intent  
✅ **Quality**: Catch design discrepancies early

## Related Documentation

- [Week 1 Implementation Plan](./WEEK_1_IMPLEMENTATION.md)
- [Day 1 Complete Summary](./DAY_1_COMPLETE.md)
- [Quick Start Guide](./QUICK_START_GUIDE.md)
- [Design System Workflow](./DESIGN_SYSTEM_WORKFLOW.md)

---

**Questions?** Check the [Contributing Guide](./CONTRIBUTING.md) or reach out to the design system team.

