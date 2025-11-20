import{j as e}from"./jsx-runtime-D_zvdyIk.js";const t={color:{"fg.default":"#0F172A","fg.secondary":"#475569","fg.muted":"#64748B","fg.disabled":"#94A3B8","fg.onbrand":"#FFFFFF","fg.reversed":"#FFFFFF","fg.brand":"#2563EB","fg.brand-hover":"#1D4ED8","fg.success":"#16A34A","fg.error":"#DC2626","fg.warning":"#D97706","bg.canvas":"#FFFFFF","bg.surface":"#F8FAFC","bg.secondary":"#F1F5F9","bg.tertiary":"#E2E8F0","bg.brand":"#2563EB","bg.brand-hover":"#1D4ED8","bg.success":"#F0FDF4","bg.error":"#FEF2F2","bg.warning":"#FFFBEB","bg.reversed":"#0F172A","bg.scrim-light":"rgba(15, 23, 42, 0.25)","bg.scrim-medium":"rgba(15, 23, 42, 0.50)","bg.scrim-dark":"rgba(15, 23, 42, 0.75)","border.default":"#CBD5E1","border.hover":"#94A3B8","border.focus":"#2563EB","border.error":"#DC2626","border.success":"#16A34A","state.success":"#16A34A","state.warn":"#D97706","state.danger":"#DC2626","state.info":"#2563EB","state.selected":"#EFF6FF"},space:{0:"0px",1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",8:"32px",10:"40px",12:"48px","0.5":"2px","1.5":"6px","2.5":"10px"},radius:{none:"0px",sm:"4px",md:"8px",lg:"12px",xl:"16px",full:"9999px"},shadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)"},typography:{fontFamily:{sans:"Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, 'Courier New'"},size:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem"},weight:{regular:"400",medium:"500",semibold:"600",bold:"700"}}},i=()=>e.jsxs("div",{className:"p-8 max-w-7xl mx-auto bg-bg-canvas",children:[e.jsxs("header",{className:"mb-12",children:[e.jsx("h1",{className:"text-4xl font-bold text-fg-default mb-4",children:"Design Token Reference"}),e.jsx("p",{className:"text-lg text-fg-secondary",children:"Complete visual documentation of all available design tokens in the system."})]}),e.jsxs("section",{className:"mb-12 p-6 bg-bg-surface rounded-lg border border-border-default",children:[e.jsx("h2",{className:"text-2xl font-semibold text-fg-default mb-4",children:"Quick Reference"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-fg-default mb-3",children:"📚 Figma Design System Files"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{children:[e.jsx("a",{href:"https://www.figma.com/design/CIHfqQZS9xPyV4jYojfKgI/%F0%9F%9B%A0Foundation-Library?m=auto",className:"text-fg-brand hover:text-fg-brand-hover underline",target:"_blank",rel:"noopener noreferrer",children:"🛠 Foundation Library →"}),e.jsx("br",{}),e.jsx("span",{className:"text-fg-secondary",children:"Colors, Typography, Spacing"})]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?m=auto",className:"text-fg-brand hover:text-fg-brand-hover underline",target:"_blank",rel:"noopener noreferrer",children:"🖥 Web Library →"}),e.jsx("br",{}),e.jsx("span",{className:"text-fg-secondary",children:"Core web components"})]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://www.figma.com/design/JrWb1OqtipkInevxd0oO6n/%E2%97%BB%EF%B8%8F-Data-Table-Library?m=auto",className:"text-fg-brand hover:text-fg-brand-hover underline",target:"_blank",rel:"noopener noreferrer",children:"◻️ Data Table Library →"}),e.jsx("br",{}),e.jsx("span",{className:"text-fg-secondary",children:"Complex data components"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-fg-default mb-3",children:"📖 Usage Guidelines"}),e.jsxs("ul",{className:"space-y-2 text-sm text-fg-secondary",children:[e.jsxs("li",{children:["✅ Always use semantic tokens (e.g., ",e.jsx("code",{className:"bg-bg-tertiary px-1 py-0.5 rounded text-fg-default",children:"bg-bg-canvas"}),")"]}),e.jsxs("li",{children:["❌ Never use arbitrary values (e.g., ",e.jsx("code",{className:"bg-bg-tertiary px-1 py-0.5 rounded text-fg-default line-through",children:"bg-[#ffffff]"}),")"]}),e.jsx("li",{children:"🎨 Reference this page when implementing designs"}),e.jsx("li",{children:"🔗 Link Storybook stories to Figma designs"})]})]})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-semibold text-fg-default mb-6",children:"Color Tokens"}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-fg-default mb-4",children:"Foreground (Text) Colors"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:Object.entries(t.color).filter(([s])=>s.startsWith("fg.")).map(([s,r])=>e.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-md border border-border-default bg-bg-canvas hover:bg-bg-surface transition-colors",children:[e.jsx("div",{className:"w-16 h-16 rounded-md border-2 border-border-default shadow-sm flex-shrink-0 flex items-center justify-center text-2xl",style:{backgroundColor:"#FFFFFF",color:String(r)},children:"Aa"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"font-mono text-sm font-semibold text-fg-default truncate",children:s}),e.jsx("div",{className:"font-mono text-xs text-fg-secondary truncate",children:String(r)}),e.jsx("div",{className:"mt-1 text-xs text-fg-muted",children:e.jsxs("code",{className:"bg-bg-tertiary px-1 py-0.5 rounded",children:["text-",s.replace(/\./g,"-")]})})]})]},s))})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-fg-default mb-4",children:"Background Colors"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:Object.entries(t.color).filter(([s])=>s.startsWith("bg.")).map(([s,r])=>e.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-md border border-border-default bg-bg-canvas hover:bg-bg-surface transition-colors",children:[e.jsx("div",{className:"w-16 h-16 rounded-md border-2 border-border-default shadow-sm flex-shrink-0",style:{backgroundColor:String(r)}}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"font-mono text-sm font-semibold text-fg-default truncate",children:s}),e.jsx("div",{className:"font-mono text-xs text-fg-secondary truncate",children:String(r)}),e.jsx("div",{className:"mt-1 text-xs text-fg-muted",children:e.jsxs("code",{className:"bg-bg-tertiary px-1 py-0.5 rounded",children:["bg-",s.replace(/\./g,"-")]})})]})]},s))})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-fg-default mb-4",children:"Border Colors"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:Object.entries(t.color).filter(([s])=>s.startsWith("border.")).map(([s,r])=>e.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-md border border-border-default bg-bg-canvas hover:bg-bg-surface transition-colors",children:[e.jsx("div",{className:"w-16 h-16 rounded-md flex-shrink-0 border-4",style:{borderColor:String(r)}}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"font-mono text-sm font-semibold text-fg-default truncate",children:s}),e.jsx("div",{className:"font-mono text-xs text-fg-secondary truncate",children:String(r)}),e.jsx("div",{className:"mt-1 text-xs text-fg-muted",children:e.jsxs("code",{className:"bg-bg-tertiary px-1 py-0.5 rounded",children:["border-",s.replace(/\./g,"-")]})})]})]},s))})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-fg-default mb-4",children:"State Colors"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:Object.entries(t.color).filter(([s])=>s.startsWith("state.")).map(([s,r])=>e.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-md border border-border-default bg-bg-canvas hover:bg-bg-surface transition-colors",children:[e.jsx("div",{className:"w-16 h-16 rounded-md border-2 border-border-default shadow-sm flex-shrink-0",style:{backgroundColor:String(r)}}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"font-mono text-sm font-semibold text-fg-default truncate",children:s}),e.jsx("div",{className:"font-mono text-xs text-fg-secondary truncate",children:String(r)}),e.jsx("div",{className:"mt-1 text-xs text-fg-muted",children:e.jsxs("code",{className:"bg-bg-tertiary px-1 py-0.5 rounded",children:["bg-",s.replace(/\./g,"-")]})})]})]},s))})]})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-semibold text-fg-default mb-6",children:"Spacing Scale"}),e.jsx("p",{className:"text-fg-secondary mb-6",children:"4px base unit. Use for padding, margin, gap, and other spacing needs."}),e.jsx("div",{className:"grid grid-cols-1 gap-3",children:Object.entries(t.space).map(([s,r])=>e.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-md border border-border-default bg-bg-canvas hover:bg-bg-surface transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[e.jsxs("div",{className:"w-32",children:[e.jsxs("div",{className:"font-mono text-sm font-semibold text-fg-default",children:["space.",s]}),e.jsx("div",{className:"font-mono text-xs text-fg-secondary",children:String(r)})]}),e.jsx("div",{className:"h-8 bg-bg-brand rounded",style:{width:String(r)}})]}),e.jsxs("div",{className:"text-xs text-fg-muted",children:[e.jsxs("code",{className:"bg-bg-tertiary px-2 py-1 rounded",children:["p-",s]})," ",e.jsxs("code",{className:"bg-bg-tertiary px-2 py-1 rounded",children:["m-",s]})," ",e.jsxs("code",{className:"bg-bg-tertiary px-2 py-1 rounded",children:["gap-",s]})]})]},s))})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-semibold text-fg-default mb-6",children:"Border Radius"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:Object.entries(t.radius).map(([s,r])=>e.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-md border border-border-default bg-bg-canvas hover:bg-bg-surface transition-colors",children:[e.jsx("div",{className:"w-16 h-16 bg-bg-brand border-2 border-border-default flex-shrink-0",style:{borderRadius:String(r)}}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"font-mono text-sm font-semibold text-fg-default truncate",children:["radius.",s]}),e.jsx("div",{className:"font-mono text-xs text-fg-secondary truncate",children:String(r)}),e.jsx("div",{className:"mt-1 text-xs text-fg-muted",children:e.jsxs("code",{className:"bg-bg-tertiary px-1 py-0.5 rounded",children:["rounded-",s]})})]})]},s))})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-semibold text-fg-default mb-6",children:"Shadows"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Object.entries(t.shadow).map(([s,r])=>e.jsxs("div",{className:"p-4 rounded-md border border-border-default bg-bg-canvas hover:bg-bg-surface transition-colors",children:[e.jsx("div",{className:"w-full h-24 bg-bg-canvas rounded-md mb-4",style:{boxShadow:String(r)}}),e.jsxs("div",{className:"font-mono text-sm font-semibold text-fg-default",children:["shadow.",s]}),e.jsx("div",{className:"font-mono text-xs text-fg-secondary mt-1 break-all",children:String(r)}),e.jsx("div",{className:"mt-2 text-xs text-fg-muted",children:e.jsxs("code",{className:"bg-bg-tertiary px-1 py-0.5 rounded",children:["shadow-",s]})})]},s))})]}),e.jsxs("section",{className:"mb-12",children:[e.jsx("h2",{className:"text-3xl font-semibold text-fg-default mb-6",children:"Typography"}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-fg-default mb-4",children:"Font Sizes"}),e.jsx("div",{className:"space-y-3",children:Object.entries(t.typography.size).map(([s,r])=>e.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-md border border-border-default bg-bg-canvas hover:bg-bg-surface transition-colors",children:[e.jsx("div",{className:"flex-1",children:e.jsx("span",{className:"text-fg-default font-sans",style:{fontSize:String(r)},children:"The quick brown fox jumps over the lazy dog"})}),e.jsxs("div",{className:"text-right",children:[e.jsxs("div",{className:"font-mono text-sm font-semibold text-fg-default",children:["size.",s]}),e.jsx("div",{className:"font-mono text-xs text-fg-secondary",children:String(r)}),e.jsx("div",{className:"mt-1 text-xs text-fg-muted",children:e.jsxs("code",{className:"bg-bg-tertiary px-1 py-0.5 rounded",children:["text-",s]})})]})]},s))})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-fg-default mb-4",children:"Font Weights"}),e.jsx("div",{className:"space-y-3",children:Object.entries(t.typography.weight).map(([s,r])=>e.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-md border border-border-default bg-bg-canvas hover:bg-bg-surface transition-colors",children:[e.jsx("div",{className:"flex-1",children:e.jsx("span",{className:"text-fg-default text-lg",style:{fontWeight:String(r)},children:"The quick brown fox jumps over the lazy dog"})}),e.jsxs("div",{className:"text-right",children:[e.jsxs("div",{className:"font-mono text-sm font-semibold text-fg-default",children:["weight.",s]}),e.jsx("div",{className:"font-mono text-xs text-fg-secondary",children:String(r)}),e.jsx("div",{className:"mt-1 text-xs text-fg-muted",children:e.jsxs("code",{className:"bg-bg-tertiary px-1 py-0.5 rounded",children:["font-",s]})})]})]},s))})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-fg-default mb-4",children:"Font Families"}),e.jsx("div",{className:"space-y-3",children:Object.entries(t.typography.fontFamily).map(([s,r])=>e.jsxs("div",{className:"flex flex-col gap-2 p-4 rounded-md border border-border-default bg-bg-canvas hover:bg-bg-surface transition-colors",children:[e.jsx("div",{className:"text-fg-default text-lg",style:{fontFamily:String(r)},children:"The quick brown fox jumps over the lazy dog 0123456789"}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"font-mono text-sm font-semibold text-fg-default",children:["fontFamily.",s]}),e.jsx("div",{className:"font-mono text-xs text-fg-secondary mt-1 max-w-md truncate",children:String(r)})]}),e.jsx("div",{className:"text-xs text-fg-muted",children:e.jsxs("code",{className:"bg-bg-tertiary px-1 py-0.5 rounded",children:["font-",s]})})]})]},s))})]})]}),e.jsxs("section",{className:"mb-12 p-6 bg-bg-surface rounded-lg border border-border-default",children:[e.jsx("h2",{className:"text-2xl font-semibold text-fg-default mb-4",children:"Usage Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-fg-default mb-2",children:"✅ Good - Using Tokens"}),e.jsx("pre",{className:"bg-bg-canvas p-4 rounded-md border border-border-default overflow-x-auto",children:e.jsx("code",{className:"text-sm text-fg-default",children:`<div className="bg-bg-canvas text-fg-default border border-border-default rounded-lg p-4">
  <h2 className="text-xl font-semibold text-fg-default mb-2">
    Card Title
  </h2>
  <p className="text-fg-secondary">
    Card description text
  </p>
</div>`})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-fg-error mb-2",children:"❌ Bad - Arbitrary Values"}),e.jsx("pre",{className:"bg-bg-canvas p-4 rounded-md border border-border-error overflow-x-auto",children:e.jsx("code",{className:"text-sm text-fg-default line-through",children:`<div className="bg-white text-gray-900 border border-gray-200 rounded-lg p-4">
  <h2 className="text-xl font-semibold text-black mb-2">
    Card Title
  </h2>
  <p className="text-gray-600">
    Card description text
  </p>
</div>`})})]})]})]})]});try{i.displayName="TokenReference",i.__docgenInfo={description:"",displayName:"TokenReference",props:{}}}catch{}const B={title:"Design System/Token Reference",component:i,parameters:{layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/design/CIHfqQZS9xPyV4jYojfKgI/%F0%9F%9B%A0Foundation-Library?m=auto"},docs:{description:{component:`
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
        `}}},tags:["autodocs","complete"]},a={},d={parameters:{docs:{description:{story:"\n### Color Token Categories\n\n**Foreground Colors** (`fg.*`)\n- Used for text and icons\n- Examples: `text-fg-default`, `text-fg-secondary`, `text-fg-brand`\n\n**Background Colors** (`bg.*`)\n- Used for surfaces and containers\n- Examples: `bg-bg-canvas`, `bg-bg-surface`, `bg-bg-brand`\n\n**Border Colors** (`border.*`)\n- Used for borders and dividers\n- Examples: `border-border-default`, `border-border-focus`\n\n**State Colors** (`state.*`)\n- Semantic colors for success, warning, error, info\n- Examples: `bg-state-success`, `text-state-danger`\n        "}}}},o={parameters:{docs:{description:{story:`
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
        `}}}},n={parameters:{docs:{description:{story:`
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
        `}}}};var l,c,x,g,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(c=a.parameters)==null?void 0:c.docs)==null?void 0:x.source},description:{story:`Complete visual reference of all design tokens.

This page shows every available token with:
- Visual preview
- Token name
- Value (hex, px, rem, etc.)
- Tailwind class names
- Usage examples`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.description}}};var b,p,f,h,u;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n### Color Token Categories\n\n**Foreground Colors** (\\`fg.*\\`)\n- Used for text and icons\n- Examples: \\`text-fg-default\\`, \\`text-fg-secondary\\`, \\`text-fg-brand\\`\n\n**Background Colors** (\\`bg.*\\`)\n- Used for surfaces and containers\n- Examples: \\`bg-bg-canvas\\`, \\`bg-bg-surface\\`, \\`bg-bg-brand\\`\n\n**Border Colors** (\\`border.*\\`)\n- Used for borders and dividers\n- Examples: \\`border-border-default\\`, \\`border-border-focus\\`\n\n**State Colors** (\\`state.*\\`)\n- Semantic colors for success, warning, error, info\n- Examples: \\`bg-state-success\\`, \\`text-state-danger\\`\n        `\n      }\n    }\n  }\n}",...(f=(p=d.parameters)==null?void 0:p.docs)==null?void 0:f.source},description:{story:`Color tokens include foreground (text), background, border, and state colors.
All colors are semantic and should be used based on their purpose, not their appearance.`,...(u=(h=d.parameters)==null?void 0:h.docs)==null?void 0:u.description}}};var j,y,N,v,F;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
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
- \\\`p-4\\\` = padding: 16px
- \\\`m-6\\\` = margin: 24px
- \\\`gap-2\\\` = gap: 8px
        \`
      }
    }
  }
}`,...(N=(y=o.parameters)==null?void 0:y.docs)==null?void 0:N.source},description:{story:`Spacing tokens provide consistent spacing throughout the application.
Based on a 4px unit scale.`,...(F=(v=o.parameters)==null?void 0:v.docs)==null?void 0:F.description}}};var w,S,k,C,T;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
### Typography System

**Font Sizes**
- Range from xs (12px) to 2xl (24px)
- Base size is md (16px)
- Use semantic sizes: \\\`text-xs\\\`, \\\`text-sm\\\`, \\\`text-md\\\`, etc.

**Font Weights**
- regular (400): Body text
- medium (500): Emphasized text, UI labels
- semibold (600): Subheadings
- bold (700): Headings

**Font Families**
- sans: Inter, system-ui (default for all UI)
- mono: ui-monospace (code and technical text)
        \`
      }
    }
  }
}`,...(k=(S=n.parameters)==null?void 0:S.docs)==null?void 0:k.source},description:{story:"Typography tokens define font sizes, weights, and families used throughout the system.",...(T=(C=n.parameters)==null?void 0:C.docs)==null?void 0:T.description}}};const U=["Default","Colors","Spacing","Typography"];export{d as Colors,a as Default,o as Spacing,n as Typography,U as __namedExportsOrder,B as default};
