# Navigation Components

A comprehensive set of navigation components built from Figma designs, following the design system's token architecture and using Tailwind CSS.

## Components Overview

### Core Components

#### `GlobalNav`
The main navigation bar component that orchestrates all navigation elements.

**Features:**
- Responsive design with mobile/desktop modes
- Flexible slot-based composition
- Dark theme optimized for navigation bars
- Shadow elevation level 3 (for menus and overlays)

**Example:**
```tsx
<GlobalNav
  logo={<NavLogo onClick={() => navigate('/')} />}
  companyLogo={<CompanyLogo companyName="Acme Corp" />}
  projectPicker={<ProjectPicker selectedProject={project} />}
  search={<NavSearch variant="dark" />}
  appSelector={<AppSelector selectedApp="Project Management" />}
  rightItems={
    <>
      <NavIconButton icon={<HelpIcon />} label="Help" />
      <NavAvatar name="John Doe" />
    </>
  }
/>
```

### Atomic Components

#### `NavLogo`
Displays the company/product logo with optional click handling.

**Props:**
- `src`: Logo image URL
- `alt`: Alt text for accessibility
- `onClick`: Click handler (makes logo clickable)

#### `NavMenuItem`
Individual menu item with support for icons, badges, tags, and favorite functionality.

**States:**
- Default
- Selected
- Favorite
- Hover
- Focus

**Features:**
- Icon support
- Badge counts (with 99+ overflow)
- Status tags (Beta, New, Pilot)
- Favorite toggle button
- Keyboard accessible

#### `NavMenuGroup`
Groups related menu items with optional collapsible functionality.

**Props:**
- `label`: Group header text
- `collapsible`: Enable collapse/expand
- `defaultCollapsed`: Initial collapsed state

#### `ProjectPicker`
Dropdown button for project selection.

**Features:**
- Project icon/image display
- Company name and project name
- "Select a Project" placeholder state
- Dark theme styling

#### `AppSelector`
Dropdown button for application selection.

**Features:**
- App name display
- "Select an App" placeholder state
- Compact design for navigation bar

#### `NavAvatar`
User avatar with initials or image.

**Sizes:** `sm` | `md` | `lg`

**Features:**
- Automatic initials generation from name
- Image support with fallback
- Focus state styling
- Hover effects

#### `NavSearch`
Search input with keyboard shortcut hints.

**Variants:** `dark` | `light`

**Features:**
- Search icon
- Clear button (when text present)
- Keyboard shortcut hint display
- Accessible form submission

#### `NavIconButton`
Icon button for actions like Help, Notifications, Messages.

**Features:**
- Badge count support
- Dark/light variants
- Accessible labels
- Hover and focus states

#### `CompanyLogo`
Displays company branding with optional logo image.

**Features:**
- Text or image display
- Click handling
- Dark theme optimized

#### `SystemStatus`
Displays system status with visual indicators.

**Status Types:**
- `operational`: All systems working
- `loading`: Checking status
- `critical`: Critical issue
- `major`: Major outage
- `maintenance`: Scheduled maintenance
- `minor`: Minor issue

#### `NavMenu`
Overlay menu component for dropdowns and popovers.

**Features:**
- Backdrop with click-outside-to-close
- Optional title bar
- Optional search bar
- Customizable width
- Escape key handling
- Shadow elevation level 3

## Design System Compliance

All components follow the established design system rules:

### ✅ Token Usage
- All colors use semantic tokens (e.g., `fg-reversed`, `bg-gray-15`)
- Spacing uses the defined scale (0, 0.5, 1, 1.5, 2, etc.)
- Typography uses predefined styles
- No hardcoded hex colors or arbitrary values

### ✅ Tailwind Classes
- All styling via Tailwind utility classes
- No inline styles (except for dynamic positioning)
- Consistent class naming patterns

### ✅ Component Patterns
- Built with primitives where possible
- CVA (class-variance-authority) for variant management
- Proper TypeScript typing
- Accessible by default (ARIA labels, keyboard support)

### ✅ States & Interactions
- Hover states with `hover:` prefix
- Focus states with `focus-visible:` prefix
- Disabled states with proper opacity
- Smooth transitions

## Component Composition

### Example: Complete Global Navigation

```tsx
import {
  GlobalNav,
  NavLogo,
  CompanyLogo,
  ProjectPicker,
  NavSearch,
  AppSelector,
  NavIconButton,
  NavAvatar,
  NavMenuItem,
  NavMenuGroup,
  NavMenu,
  SystemStatus,
} from "@ssot/ui";

function App() {
  const [isProjectMenuOpen, setProjectMenuOpen] = useState(false);
  const [isAppMenuOpen, setAppMenuOpen] = useState(false);

  return (
    <>
      <GlobalNav
        logo={<NavLogo onClick={() => navigate('/')} />}
        companyLogo={
          <CompanyLogo 
            companyName="Vertigo Construction" 
            onClick={() => setCompanyMenuOpen(true)}
          />
        }
        projectPicker={
          <ProjectPicker
            selectedProject={currentProject}
            onClick={() => setProjectMenuOpen(true)}
          />
        }
        leftItems={
          <div className="flex gap-1">
            <NavMenuItem icon={<HomeIcon />} selected>
              Home
            </NavMenuItem>
            <NavMenuItem icon={<CalendarIcon />}>
              Schedule
            </NavMenuItem>
            <NavMenuItem icon={<FileIcon />} badge={5}>
              RFIs
            </NavMenuItem>
          </div>
        }
        search={
          <NavSearch 
            variant="dark" 
            shortcutHint="Ctrl + K"
            onSearch={handleSearch}
          />
        }
        appSelector={
          <AppSelector 
            selectedApp="Project Management"
            onClick={() => setAppMenuOpen(true)}
          />
        }
        rightItems={
          <>
            <SystemStatus status="operational" />
            <NavIconButton 
              icon={<HelpIcon />} 
              label="Help"
              onClick={() => setHelpMenuOpen(true)}
            />
            <NavIconButton 
              icon={<BellIcon />} 
              label="Notifications"
              badge={3}
              onClick={() => setNotificationsOpen(true)}
            />
            <NavAvatar 
              name="John Doe"
              src={userAvatar}
              onClick={() => setProfileMenuOpen(true)}
            />
          </>
        }
      />

      {/* Project Menu Overlay */}
      <NavMenu
        isOpen={isProjectMenuOpen}
        onClose={() => setProjectMenuOpen(false)}
        title="Select a Project"
        showSearch
        searchPlaceholder="Search projects..."
      >
        <div className="px-2">
          {projects.map(project => (
            <NavMenuItem 
              key={project.id}
              onClick={() => selectProject(project)}
            >
              {project.name}
            </NavMenuItem>
          ))}
        </div>
      </NavMenu>

      {/* App Menu Overlay */}
      <NavMenu
        isOpen={isAppMenuOpen}
        onClose={() => setAppMenuOpen(false)}
        title="Select an App"
        width={400}
      >
        <div className="px-2 grid grid-cols-2 gap-2">
          {apps.map(app => (
            <NavMenuItem 
              key={app.id}
              icon={app.icon}
              onClick={() => selectApp(app)}
            >
              {app.name}
            </NavMenuItem>
          ))}
        </div>
      </NavMenu>
    </>
  );
}
```

## Responsive Behavior

The `GlobalNav` component supports responsive layouts:

```tsx
// Desktop view - full navigation
<GlobalNav
  logo={<NavLogo />}
  companyLogo={<CompanyLogo companyName="Acme" />}
  projectPicker={<ProjectPicker selectedProject={project} />}
  search={<NavSearch variant="dark" />}
  appSelector={<AppSelector selectedApp="PM" />}
  rightItems={<>...</>}
/>

// Mobile view - collapsed with menu button
<GlobalNav
  isMobile
  showMobileMenu
  onMobileMenuClick={() => setMobileMenuOpen(true)}
  logo={<NavLogo />}
  search={<NavSearch variant="dark" />}
  rightItems={<NavAvatar name="JD" size="sm" />}
/>
```

## Accessibility

All components include:

- Proper ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Semantic HTML elements
- Screen reader friendly

## Storybook

All components have comprehensive Storybook stories demonstrating:

- All variants and states
- Interactive examples
- Usage patterns
- Responsive behavior

Run Storybook to explore:
```bash
npm run storybook
```

## Related Figma Designs

- [Global Nav](https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?node-id=29467-47272)
- [Nav Atoms](https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?node-id=29467-47273)
- [App Selector & Project Picker](https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?node-id=34882-247968)

