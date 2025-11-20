import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-Dz3UJJSw.js";import{c as s}from"./clsx-B-dksMZM.js";import{B as a}from"./Button-CZgY2kMk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Dp3B9jqt.js";const N=v.forwardRef(function({className:x,breadcrumbs:l,heading:o,tabs:i,actions:b,...n},T){return e.jsx("div",{ref:T,className:s("border-b border-border-default bg-bg-canvas",x),...n,children:e.jsxs("div",{className:"px-6 py-4",children:[l&&l.length>0&&e.jsx("nav",{className:"flex items-center gap-2 mb-3 text-sm text-fg-secondary",children:l.map((t,j)=>{const y=j===l.length-1;return e.jsxs(v.Fragment,{children:[t.href||t.onClick?e.jsx("a",{href:t.href,onClick:t.onClick,className:s("hover:text-fg-default transition-colors",y&&"text-fg-default font-semibold"),children:t.label}):e.jsx("span",{className:s(y&&"text-fg-default font-semibold"),children:t.label}),!y&&e.jsx("span",{className:"text-fg-disabled",children:"›"})]},j)})}),e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h1",{className:"text-2xl font-bold text-fg-default",children:o}),b&&e.jsx("div",{className:"flex items-center gap-2",children:b})]}),i&&e.jsx("div",{className:"mt-4",children:i})]})})}),r=v.forwardRef(function({className:x,tabs:l,moreTab:o,...i},b){return e.jsxs("div",{ref:b,className:s("flex items-center gap-1",x),...i,children:[l.map((n,T)=>{const t=n.href?"a":"button";return e.jsx(t,{href:n.href,onClick:n.onClick,className:s("px-4 py-2 text-sm font-medium transition-colors border-b-2",n.active?"border-orange-50 text-fg-default":"border-transparent text-fg-secondary hover:text-fg-default hover:border-gray-85"),children:n.label},T)}),o&&e.jsx("div",{className:"ml-1",children:o})]})});try{N.displayName="PageHeader",N.__docgenInfo={description:"",displayName:"PageHeader",props:{breadcrumbs:{defaultValue:null,description:"Breadcrumb navigation items",name:"breadcrumbs",required:!1,type:{name:"BreadcrumbItem[]"}},heading:{defaultValue:null,description:"Heading text",name:"heading",required:!0,type:{name:"string"}},tabs:{defaultValue:null,description:"Tabs component or tabs configuration",name:"tabs",required:!1,type:{name:"ReactNode"}},actions:{defaultValue:null,description:"Action buttons (rendered on the right)",name:"actions",required:!1,type:{name:"ReactNode"}}}}}catch{}try{r.displayName="PageHeaderTabs",r.__docgenInfo={description:"",displayName:"PageHeaderTabs",props:{tabs:{defaultValue:null,description:"Array of tab objects",name:"tabs",required:!0,type:{name:"{ label: string; active?: boolean | undefined; onClick?: (() => void) | undefined; href?: string | undefined; }[]"}},moreTab:{defaultValue:null,description:'Additional tabs in a "More" dropdown',name:"moreTab",required:!1,type:{name:"ReactNode"}}}}}catch{}const Y={title:"Components/PageHeader",component:N,tags:["autodocs"],parameters:{layout:"fullscreen"}},d={args:{heading:"Heading",breadcrumbs:[{label:"Tool Name",href:"#"},{label:"Child Page Title",href:"#"},{label:"Active Child Page Title"}]}},c={args:{heading:"Heading",breadcrumbs:[{label:"Tool Name",href:"#"},{label:"Child Page Title",href:"#"},{label:"Active Child Page Title"}],tabs:e.jsx(r,{tabs:[{label:"Tab 1",active:!0},{label:"Tab 2"},{label:"Tab 3"},{label:"Tab 4"},{label:"Tab 5"},{label:"Tab 6"}],moreTab:e.jsx("button",{className:"px-3 py-2 text-sm font-medium text-fg-secondary hover:text-fg-default",children:"More ▾"})})}},m={args:{heading:"Heading",breadcrumbs:[{label:"Tool Name",href:"#"},{label:"Child Page Title",href:"#"},{label:"Active Child Page Title"}],tabs:e.jsx(r,{tabs:[{label:"Tab 1",active:!0},{label:"Tab 2"},{label:"Tab 3"},{label:"Tab 4"},{label:"Tab 5"},{label:"Tab 6"}],moreTab:e.jsx("button",{className:"px-3 py-2 text-sm font-medium text-fg-secondary hover:text-fg-default",children:"More ▾"})}),actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{emphasis:"secondary",children:"Verb"}),e.jsx(a,{emphasis:"primary",children:"Verb"}),e.jsx("button",{className:"px-2 py-2 text-fg-secondary hover:text-fg-default",children:"⋮"})]})}},u={args:{heading:"Heading",breadcrumbs:[{label:"Tool Name",href:"#"},{label:"Child Page Title",href:"#"},{label:"Active Child Page Title"}],tabs:e.jsx(r,{tabs:[{label:"Tab 1",active:!0},{label:"Tab 2"},{label:"Tab 3"},{label:"Tab 4"},{label:"Tab 5"},{label:"Tab 6"}],moreTab:e.jsx("button",{className:"px-3 py-2 text-sm font-medium text-fg-secondary hover:text-fg-default",children:"More ▾"})}),actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{emphasis:"primary",children:"Verb"}),e.jsx(a,{emphasis:"secondary",children:"Verb"}),e.jsx(a,{emphasis:"secondary",children:"Verb"}),e.jsx("button",{className:"px-2 py-2 text-fg-secondary hover:text-fg-default",children:"⋮"})]})}},g={args:{heading:"Heading",breadcrumbs:[{label:"Tool Name",href:"#"},{label:"Child Page Title",href:"#"},{label:"Active Child Page Title"}],tabs:e.jsx(r,{tabs:[{label:"Tab 1",active:!0},{label:"Tab 2"},{label:"Tab 3"},{label:"Tab 4"},{label:"Tab 5"},{label:"Tab 6"}],moreTab:e.jsx("button",{className:"px-3 py-2 text-sm font-medium text-fg-secondary hover:text-fg-default",children:"More ▾"})}),actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{emphasis:"primary",children:"Verb"}),e.jsx(a,{emphasis:"secondary",children:"Verb"}),e.jsx(a,{emphasis:"secondary",children:"Verb"}),e.jsx("button",{className:"flex items-center gap-2 px-3 py-2 text-sm text-fg-default hover:bg-bg-surface rounded",children:e.jsx("span",{children:"Toggle"})})]})}},h={args:{heading:"Heading",tabs:e.jsx(r,{tabs:[{label:"Tab 1",active:!0},{label:"Tab 2"},{label:"Tab 3"}]}),actions:e.jsx(a,{emphasis:"primary",children:"Verb"})}},p={args:{heading:"Heading",breadcrumbs:[{label:"Tool Name",href:"#"},{label:"Child Page Title",href:"#"},{label:"Active Child Page Title"}],actions:e.jsx(a,{emphasis:"primary",children:"Verb"})}};var P,C,H;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    heading: "Heading",
    breadcrumbs: [{
      label: "Tool Name",
      href: "#"
    }, {
      label: "Child Page Title",
      href: "#"
    }, {
      label: "Active Child Page Title"
    }]
  }
}`,...(H=(C=d.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var B,V,A;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    heading: "Heading",
    breadcrumbs: [{
      label: "Tool Name",
      href: "#"
    }, {
      label: "Child Page Title",
      href: "#"
    }, {
      label: "Active Child Page Title"
    }],
    tabs: <PageHeaderTabs tabs={[{
      label: "Tab 1",
      active: true
    }, {
      label: "Tab 2"
    }, {
      label: "Tab 3"
    }, {
      label: "Tab 4"
    }, {
      label: "Tab 5"
    }, {
      label: "Tab 6"
    }]} moreTab={<button className="px-3 py-2 text-sm font-medium text-fg-secondary hover:text-fg-default">
                        More ▾
                    </button>} />
  }
}`,...(A=(V=c.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var _,M,W;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    heading: "Heading",
    breadcrumbs: [{
      label: "Tool Name",
      href: "#"
    }, {
      label: "Child Page Title",
      href: "#"
    }, {
      label: "Active Child Page Title"
    }],
    tabs: <PageHeaderTabs tabs={[{
      label: "Tab 1",
      active: true
    }, {
      label: "Tab 2"
    }, {
      label: "Tab 3"
    }, {
      label: "Tab 4"
    }, {
      label: "Tab 5"
    }, {
      label: "Tab 6"
    }]} moreTab={<button className="px-3 py-2 text-sm font-medium text-fg-secondary hover:text-fg-default">
                        More ▾
                    </button>} />,
    actions: <>
                <Button emphasis="secondary">Verb</Button>
                <Button emphasis="primary">Verb</Button>
                <button className="px-2 py-2 text-fg-secondary hover:text-fg-default">⋮</button>
            </>
  }
}`,...(W=(M=m.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var S,k,q;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    heading: "Heading",
    breadcrumbs: [{
      label: "Tool Name",
      href: "#"
    }, {
      label: "Child Page Title",
      href: "#"
    }, {
      label: "Active Child Page Title"
    }],
    tabs: <PageHeaderTabs tabs={[{
      label: "Tab 1",
      active: true
    }, {
      label: "Tab 2"
    }, {
      label: "Tab 3"
    }, {
      label: "Tab 4"
    }, {
      label: "Tab 5"
    }, {
      label: "Tab 6"
    }]} moreTab={<button className="px-3 py-2 text-sm font-medium text-fg-secondary hover:text-fg-default">
                        More ▾
                    </button>} />,
    actions: <>
                <Button emphasis="primary">Verb</Button>
                <Button emphasis="secondary">Verb</Button>
                <Button emphasis="secondary">Verb</Button>
                <button className="px-2 py-2 text-fg-secondary hover:text-fg-default">⋮</button>
            </>
  }
}`,...(q=(k=u.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var R,w,F;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    heading: "Heading",
    breadcrumbs: [{
      label: "Tool Name",
      href: "#"
    }, {
      label: "Child Page Title",
      href: "#"
    }, {
      label: "Active Child Page Title"
    }],
    tabs: <PageHeaderTabs tabs={[{
      label: "Tab 1",
      active: true
    }, {
      label: "Tab 2"
    }, {
      label: "Tab 3"
    }, {
      label: "Tab 4"
    }, {
      label: "Tab 5"
    }, {
      label: "Tab 6"
    }]} moreTab={<button className="px-3 py-2 text-sm font-medium text-fg-secondary hover:text-fg-default">
                        More ▾
                    </button>} />,
    actions: <>
                <Button emphasis="primary">Verb</Button>
                <Button emphasis="secondary">Verb</Button>
                <Button emphasis="secondary">Verb</Button>
                <button className="flex items-center gap-2 px-3 py-2 text-sm text-fg-default hover:bg-bg-surface rounded">
                    <span>Toggle</span>
                </button>
            </>
  }
}`,...(F=(w=g.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var E,I,D;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    heading: "Heading",
    tabs: <PageHeaderTabs tabs={[{
      label: "Tab 1",
      active: true
    }, {
      label: "Tab 2"
    }, {
      label: "Tab 3"
    }]} />,
    actions: <Button emphasis="primary">Verb</Button>
  }
}`,...(D=(I=h.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var L,O,z;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    heading: "Heading",
    breadcrumbs: [{
      label: "Tool Name",
      href: "#"
    }, {
      label: "Child Page Title",
      href: "#"
    }, {
      label: "Active Child Page Title"
    }],
    actions: <Button emphasis="primary">Verb</Button>
  }
}`,...(z=(O=p.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const Z=["Default","WithTabs","WithActions","WithMultipleActions","WithToggle","NoBreadcrumbs","NoTabs"];export{d as Default,h as NoBreadcrumbs,p as NoTabs,m as WithActions,u as WithMultipleActions,c as WithTabs,g as WithToggle,Z as __namedExportsOrder,Y as default};
