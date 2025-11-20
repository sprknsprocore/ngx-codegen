# Scaling Playbook: 5 → 200 Person Design Org

## 🎯 Overview

This document outlines how to scale your design system from a small team (5 people) to an enterprise-level organization (200+ people) while maintaining quality and velocity.

---

## 📊 Scaling Stages

### Stage 1: Foundation Team (1-5 people) ✅ YOU ARE HERE

**Characteristics:**
- Everyone knows each other
- Informal communication works
- Manual processes acceptable
- Focus: Build core components

**Challenges:**
- Limited resources
- Need to move fast
- Quality vs. speed tradeoff

**Solutions:**
- Strong templates and automation
- Clear documentation
- Token-first approach (already implemented!)
- Comprehensive Storybook

**Metrics:**
- Component count: 40-50
- Contributors: 2-3
- Contribution frequency: Weekly
- Review time: Same day

---

### Stage 2: Small Team (5-15 people) → NEXT QUARTER

**Characteristics:**
- Multiple contributors
- Some specialized roles (design, dev, PM)
- Async communication needed
- Multiple projects using the system

**New Challenges:**
- Conflicting priorities
- Version management
- Breaking changes
- Coordination overhead

**Solutions:**

#### 1. Governance Model

**Create: `docs/GOVERNANCE.md`**

```markdown
# Design System Governance

## Roles & Responsibilities

### Core Team (2-3 people)
- Maintain design system
- Review all PRs
- Make architectural decisions
- Manage roadmap

### Contributors (5-10 people)
- Submit component improvements
- Report bugs
- Suggest new components
- Follow contribution guidelines

### Consumers (Everyone else)
- Use design system
- Provide feedback
- Request features
- Report issues

## Decision Making

### Component Additions
1. User proposes in GitHub Discussions
2. Design team reviews Figma design
3. Core team approves/denies
4. If approved, contributor implements

### Breaking Changes
1. RFC (Request for Comment) required
2. 2-week comment period
3. Migration guide required
4. Deprecation warnings before removal

### Token Updates
1. Foundation Library (Figma) is source of truth
2. Monthly sync to tokens.json
3. Announce changes in #design-system
4. Version bump (MAJOR if breaking)
```

#### 2. Versioning Strategy

**Adopt Semantic Versioning:**

```json
// package.json
{
  "name": "@yourcompany/design-system",
  "version": "1.2.3",
  // MAJOR.MINOR.PATCH
  // 1 = breaking changes
  // 2 = new features
  // 3 = bug fixes
}
```

**Release Process:**

```bash
# Minor release (new components, features)
npm version minor
git tag v1.3.0
npm publish

# Patch release (bug fixes)
npm version patch
git tag v1.3.1
npm publish
```

#### 3. Component Ownership

**Create: `CODEOWNERS` file**

```
# Design System Core
/packages/tokens/          @design-system-core
/packages/ui/primitives/   @design-system-core
/packages/ui/components/   @design-system-core @design-team

# Documentation
/docs/                     @design-system-core
/.storybook/              @design-system-core

# Specific components (optional)
/packages/ui/src/components/Button* @jane-doe
/packages/ui/src/components/Table*  @john-smith
```

**Metrics:**
- Component count: 60-80
- Active contributors: 5-8
- Contribution frequency: Daily
- Review time: < 24 hours
- Adoption: 70% of projects

---

### Stage 3: Medium Team (15-50 people) → 6-12 MONTHS

**Characteristics:**
- Multiple squads/teams
- Distributed across time zones
- Different product lines
- Dedicated design systems team (3-5 people)

**New Challenges:**
- Communication across teams
- Conflicting requirements
- Multi-brand needs
- Technical debt accumulation

**Solutions:**

#### 1. Multi-Brand Architecture

**Implement Theme System:**

```typescript
// packages/tokens/src/brands/procore-core.tokens.json
{
  "brand": "procore-core",
  "color": {
    "bg.brand": "#2563EB",  // Procore blue
    // ...
  }
}

// packages/tokens/src/brands/procore-analytics.tokens.json
{
  "brand": "procore-analytics",
  "extends": "procore-core",
  "color": {
    "bg.brand": "#7C3AED",  // Purple for analytics
    // Only overrides, inherits rest
  }
}
```

**Usage:**

```tsx
// App level - set theme
import { setTheme } from '@packages/tokens';

setTheme('procore-analytics');

// Components work the same!
<Button variant="primary"> {/* Uses analytics brand color */}
```

#### 2. Advanced Tooling

**VSCode Extension for Token Autocomplete:**

```typescript
// packages/vscode-extension/
{
  "name": "design-system-tokens",
  "contributes": {
    "snippets": [
      {
        "language": "typescriptreact",
        "path": "./snippets.json"
      }
    ]
  }
}

// snippets.json
{
  "Token Foreground": {
    "prefix": "token-fg",
    "body": ["text-fg-${1|default,secondary,muted,brand|}"],
    "description": "Foreground token autocomplete"
  }
}
```

**CLI for Component Generation:**

```bash
# Interactive CLI
npx @yourcompany/ds create-component

? Component name: ProductCard
? Which Figma library? Web Library
? Figma URL: https://...
? Description: Displays product information

✓ Generated ProductCard.tsx
✓ Generated ProductCard.stories.tsx  
✓ Updated index.ts
✓ Run 'npm run storybook' to view
```

#### 3. Design System Site (Public Docs)

**Deploy Storybook publicly:**

```yaml
# .github/workflows/deploy-storybook.yml
name: Deploy Storybook

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build Storybook
        run: npm run build-storybook
      - name: Deploy to Vercel
        run: vercel --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

**Add analytics:**

```typescript
// .storybook/preview.ts
import { addons } from '@storybook/preview-api';

// Track component usage
addons.getChannel().on('storyRendered', (story) => {
  analytics.track('Component Viewed', {
    component: story.component,
    story: story.name,
    user: getUserId(),
  });
});
```

**Metrics:**
- Component count: 100-120
- Active contributors: 15-20
- Brands/themes: 2-3
- Adoption: 85% of projects
- Page views (Storybook): 1000+/week

---

### Stage 4: Large Team (50-100 people) → 12-24 MONTHS

**Characteristics:**
- Multiple business units
- International teams
- Dedicated design systems team (5-10 people)
- Design system as a product

**New Challenges:**
- Organizational buy-in
- Competing priorities
- Legacy system migration
- Performance at scale

**Solutions:**

#### 1. Design System as a Service

**Create Dedicated Team Structure:**

```
Design Systems Team (8 people)
├── Head of Design Systems (1)
├── Design Lead (1)
│   └── Component Designers (2)
├── Engineering Lead (1)
│   ├── Frontend Engineers (2)
│   └── Tooling Engineer (1)
└── Documentation Manager (1)
```

**OKRs (Objectives & Key Results):**

```markdown
## Q1 2024 OKRs

**Objective**: Increase adoption across all products

Key Results:
- KR1: 95% of active projects use design system (currently 85%)
- KR2: Reduce average component implementation time from 3 days to 1 day
- KR3: Ship 15 new components based on user requests
- KR4: Achieve 90% satisfaction score in quarterly survey

**Objective**: Improve developer experience

Key Results:
- KR1: Reduce time-to-first-component from 30min to 5min
- KR2: 100% of components have migration guides
- KR3: < 2 hour average PR review time
- KR4: Ship VSCode extension with 500+ installs
```

#### 2. Migration Tooling

**Create Codemods for Breaking Changes:**

```bash
# packages/codemods/
npm run codemod migrate-button-v2

# Transforms:
<Button emphasis="primary" />
# to:
<Button variant="primary" />
```

**Implementation:**

```typescript
// Using jscodeshift
import { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Find all Button components
  root
    .findJSXElements('Button')
    .forEach(path => {
      // Rename emphasis -> variant
      j(path)
        .find(j.JSXAttribute, { name: { name: 'emphasis' } })
        .forEach(attr => {
          attr.node.name.name = 'variant';
        });
    });

  return root.toSource();
};

export default transform;
```

#### 3. Health Dashboard

**Track Design System Health:**

```typescript
// packages/metrics/src/dashboard.tsx
export const HealthDashboard = () => {
  return (
    <Dashboard>
      <Metric
        title="Adoption Rate"
        value="92%"
        target="95%"
        trend="up"
      />
      <Metric
        title="Component Usage"
        value="85/100"
        subtitle="components used in production"
      />
      <Metric
        title="Token Compliance"
        value="100%"
        status="success"
      />
      <Metric
        title="Avg PR Review Time"
        value="1.5 hours"
        target="< 2 hours"
      />
      
      <Chart title="Component Usage Over Time">
        {/* Show adoption trends */}
      </Chart>
      
      <Table title="Top Used Components">
        {/* Button: 1,234 uses */}
        {/* Input: 892 uses */}
      </Table>
    </Dashboard>
  );
};
```

**Metrics:**
- Component count: 150-200
- Active contributors: 30-40
- Dedicated team: 8-10
- Adoption: 90%+ of projects
- NPM downloads: 10,000+/month

---

### Stage 5: Enterprise (100-200+ people) → 24+ MONTHS

**Characteristics:**
- Global organization
- Multiple product lines
- Design systems team (10-15 people)
- Design system is critical infrastructure

**New Challenges:**
- Global consistency
- Localization/i18n
- Accessibility compliance
- Legacy system deprecation

**Solutions:**

#### 1. Federated Model

**Allow teams to extend while maintaining core:**

```
Design System
├── Core (Maintained by central team)
│   ├── Primitives (Stack, Text, etc)
│   ├── Tokens
│   └── Basic Components (Button, Input)
├── Extended (Team owned, central reviewed)
│   ├── Analytics Components (@analytics team)
│   ├── Construction Components (@construction team)
│   └── Finance Components (@finance team)
└── Experimental (Innovation, not production ready)
    └── AI Components
```

**Package Structure:**

```json
{
  "dependencies": {
    "@procore/design-system-core": "^3.0.0",
    "@procore/design-system-analytics": "^2.1.0"
  }
}
```

#### 2. Accessibility Compliance

**Automated WCAG 2.1 AA Testing:**

```typescript
// packages/ui/src/components/Button.test.tsx
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Button>Click me</Button>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  
  it('should support keyboard navigation', () => {
    // Test Tab, Enter, Space
  });
  
  it('should have proper ARIA attributes', () => {
    // Test aria-label, aria-disabled, etc
  });
});
```

**Compliance Dashboard:**

```markdown
## Accessibility Compliance Report

| Component | WCAG 2.1 AA | Keyboard Nav | Screen Reader | Status |
|-----------|-------------|--------------|---------------|--------|
| Button | ✅ | ✅ | ✅ | Pass |
| Modal | ✅ | ✅ | ⚠️ | Warning |
| Table | ⚠️ | ✅ | ✅ | Warning |

Overall Compliance: 96%
```

#### 3. Performance Monitoring

**Bundle Size Tracking:**

```javascript
// bundlesize.config.js
module.exports = {
  files: [
    {
      path: './dist/index.js',
      maxSize: '50 KB',
      compression: 'gzip',
    },
    {
      path: './dist/tokens.js',
      maxSize: '10 KB',
    },
  ],
};
```

**Runtime Performance:**

```typescript
// Track component render performance
import { measure } from '@procore/performance';

export const Button = measure('Button', ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
});

// Sends metrics to analytics
// - Average render time
// - 95th percentile
// - Instances per page
```

**Metrics:**
- Component count: 200+
- Active contributors: 50-60
- Dedicated team: 10-15
- Adoption: 95%+ of projects
- NPM downloads: 50,000+/month
- Accessibility: 100% WCAG 2.1 AA compliant

---

## 🚦 Decision Framework

At each stage, use this framework to make decisions:

### When to Add a New Component

```
START
  ↓
Is there a Figma design? → NO → Create design first
  ↓ YES
Does it exist in Procore Storybook? → YES → Use that pattern
  ↓ NO
Will it be used by 3+ teams? → NO → Consider team-specific solution
  ↓ YES
Can it be composed from primitives? → YES → Provide composition example
  ↓ NO
Does it have complex logic? → YES → Make sure it's truly reusable
  ↓ NO
ADD TO DESIGN SYSTEM ✅
```

### When to Make a Breaking Change

```
START
  ↓
Is it a critical bug fix? → YES → Ship immediately
  ↓ NO
Can we deprecate gracefully? → YES → Deprecate, ship in next MAJOR
  ↓ NO
Will it affect > 50% of users? → YES → Needs RFC + migration guide
  ↓ NO
Is there a workaround? → YES → Document workaround, plan for next MAJOR
  ↓ NO
Schedule for next MAJOR release
```

---

## 📈 Success Metrics by Stage

| Metric | Stage 1 | Stage 2 | Stage 3 | Stage 4 | Stage 5 |
|--------|---------|---------|---------|---------|---------|
| **Team Size** | 1-5 | 5-15 | 15-50 | 50-100 | 100-200+ |
| **Components** | 40-50 | 60-80 | 100-120 | 150-200 | 200+ |
| **Contributors** | 2-3 | 5-8 | 15-20 | 30-40 | 50-60 |
| **Adoption Rate** | 60% | 70% | 85% | 90% | 95%+ |
| **PR Review Time** | Same day | < 24h | < 4h | < 2h | < 1h |
| **Documentation** | Basic | Good | Excellent | Comprehensive | Best-in-class |
| **Automation** | Some | Moderate | High | Very High | Complete |
| **Team** | Part-time | 1-2 people | 3-5 people | 8-10 people | 10-15 people |

---

## 🎯 Your Current Position

**Stage 1: Foundation Team (1-5 people)** ← YOU ARE HERE

### Immediate Actions (This Week):
- ✅ Follow [Week 1 Implementation Plan](./WEEK_1_IMPLEMENTATION.md)
- ✅ Link Figma designs to components
- ✅ Create comprehensive documentation
- ✅ Set up quality gates (CI/CD)

### Next Quarter Goals:
- Expand to 5-8 regular contributors
- Reach 70% adoption across projects
- Establish governance model
- Implement versioning strategy

### 12-Month Vision:
- 15+ active contributors
- 85% adoption
- Multiple brands supported
- Dedicated 2-3 person team

---

## 📚 Resources

### For Each Stage:

**Stage 1-2:**
- [Component API Guidelines](https://component.guide/)
- [Design Tokens Format](https://design-tokens.github.io/community-group/)

**Stage 3-4:**
- [Design System Handbook](https://www.designsystemsbook.com/)
- [Nathan Curtis: Scaling Design Systems](https://medium.com/eightshapes-llc)

**Stage 4-5:**
- [Design Systems at Scale](https://designsystems.com/)
- [Enterprise Design Systems](https://www.patterns.dev/)

---

## 💡 Pro Tips

### 1. Don't Skip Stages
Each stage builds on the previous. Rushing to "enterprise" patterns too early adds unnecessary complexity.

### 2. Invest in Automation Early
Manual processes don't scale. Automate:
- Token generation
- Component scaffolding
- Testing
- Deployment
- Metrics collection

### 3. Listen to Your Users
Regular surveys, office hours, and feedback loops keep you aligned with user needs.

### 4. Celebrate Wins
- Component milestones (50th, 100th component)
- Adoption milestones (50%, 75%, 90%)
- Team milestones (1st contributor, 10th contributor)

### 5. Plan for Failure
Components will be deprecated. Breaking changes will happen. Have clear processes for handling these.

---

## 🆘 Red Flags (When Something's Wrong)

- **Adoption decreasing** → Something's broken or harder to use
- **PR review time increasing** → Need more reviewers or clearer guidelines
- **Duplicate components appearing** → Communication gap
- **Token violations increasing** → Enforcement not working
- **Contributions dropping** → Process too heavy or unclear

---

## ✅ You're Ready to Scale!

Follow this playbook as you grow from 5 → 200 people. At each stage:

1. Reassess your current needs
2. Implement the relevant solutions
3. Measure success metrics
4. Adjust and iterate

Questions? Review:
- [Week 1 Implementation](./WEEK_1_IMPLEMENTATION.md) - Your immediate next steps
- [Design System Workflow](./DESIGN_SYSTEM_WORKFLOW.md) - Complete workflow
- [Quick Start Guide](./QUICK_START_GUIDE.md) - Daily development

**Good luck scaling your design system! 🚀**

