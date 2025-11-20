import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-Dz3UJJSw.js";import{c as P}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const k=d.forwardRef(function({className:a,children:i,"aria-label":t,...l},v){return e.jsx("nav",{ref:v,"aria-label":t||"Anchor navigation",className:P("flex flex-col",a),...l,children:i})}),O=d.forwardRef(function({className:a,active:i,children:t,...l},v){return e.jsx("a",{ref:v,className:P("relative pl-4 py-2 text-sm border-l-4 transition-colors",i?"border-l-fg-default text-fg-default font-semibold bg-bg-surface":"border-l-transparent text-fg-secondary hover:text-fg-default hover:bg-bg-tertiary",a),"aria-current":i?"location":void 0,...l,children:t})}),n=Object.assign(k,{Item:O});try{n.displayName="AnchorNavigation",n.__docgenInfo={description:"",displayName:"AnchorNavigation",props:{"aria-label":{defaultValue:null,description:"Accessibility label for the navigation",name:"aria-label",required:!1,type:{name:"string"}}}}}catch{}const L={title:"Components/AnchorNavigation",component:n,parameters:{layout:"padded"},tags:["autodocs"]},o={render:()=>e.jsxs(n,{children:[e.jsx(n.Item,{href:"#section1",active:!0,children:"Section Name 1"}),e.jsx(n.Item,{href:"#section2",children:"Section Name 2"}),e.jsx(n.Item,{href:"#section3",children:"Section Name 3"}),e.jsx(n.Item,{href:"#section4",children:"Section Name 4"})]})},r={render:function(){const[a,i]=d.useState("section1");return e.jsxs("div",{className:"flex gap-8",children:[e.jsxs(n,{className:"w-48",children:[e.jsx(n.Item,{href:"#section1",active:a==="section1",onClick:t=>{t.preventDefault(),i("section1")},children:"Overview"}),e.jsx(n.Item,{href:"#section2",active:a==="section2",onClick:t=>{t.preventDefault(),i("section2")},children:"Getting Started"}),e.jsx(n.Item,{href:"#section3",active:a==="section3",onClick:t=>{t.preventDefault(),i("section3")},children:"Configuration"}),e.jsx(n.Item,{href:"#section4",active:a==="section4",onClick:t=>{t.preventDefault(),i("section4")},children:"API Reference"}),e.jsx(n.Item,{href:"#section5",active:a==="section5",onClick:t=>{t.preventDefault(),i("section5")},children:"Troubleshooting"})]}),e.jsx("div",{className:"flex-1 text-sm text-fg-secondary",children:"Click on the navigation items to see the active state change."})]})}},c={render:()=>e.jsxs(n,{className:"w-64",children:[e.jsx(n.Item,{href:"#section1",active:!0,children:"Introduction to the Platform"}),e.jsx(n.Item,{href:"#section2",children:"Advanced Configuration Options"}),e.jsx(n.Item,{href:"#section3",children:"User Management and Permissions"}),e.jsx(n.Item,{href:"#section4",children:"Integration with Third-Party Services"})]})},s={render:()=>e.jsxs(n,{children:[e.jsx(n.Item,{href:"#section1",active:!0,children:"Section 1"}),e.jsx(n.Item,{href:"#section2",children:"Section 2"}),e.jsx(n.Item,{href:"#section3",children:"Section 3"}),e.jsx(n.Item,{href:"#section4",children:"Section 4"}),e.jsx(n.Item,{href:"#section5",children:"Section 5"}),e.jsx(n.Item,{href:"#section6",children:"Section 6"}),e.jsx(n.Item,{href:"#section7",children:"Section 7"}),e.jsx(n.Item,{href:"#section8",children:"Section 8"}),e.jsx(n.Item,{href:"#section9",children:"Section 9"}),e.jsx(n.Item,{href:"#section10",children:"Section 10"})]})},h={render:()=>e.jsxs("div",{className:"flex gap-8 h-96",children:[e.jsxs("aside",{className:"w-56 border-r border-border-default p-4 bg-bg-surface",children:[e.jsx("h2",{className:"text-sm font-semibold text-fg-default mb-4",children:"On This Page"}),e.jsxs(n,{children:[e.jsx(n.Item,{href:"#overview",active:!0,children:"Overview"}),e.jsx(n.Item,{href:"#features",children:"Features"}),e.jsx(n.Item,{href:"#installation",children:"Installation"}),e.jsx(n.Item,{href:"#usage",children:"Usage"}),e.jsx(n.Item,{href:"#api",children:"API"}),e.jsx(n.Item,{href:"#examples",children:"Examples"})]})]}),e.jsx("main",{className:"flex-1 p-4",children:e.jsxs("div",{className:"prose max-w-none",children:[e.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Documentation Page"}),e.jsx("p",{className:"text-fg-secondary",children:"This demonstrates how the anchor navigation component can be used in a typical documentation layout with a sidebar."})]})})]})};var g,f,N;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <AnchorNavigation>
            <AnchorNavigation.Item href="#section1" active>
                Section Name 1
            </AnchorNavigation.Item>
            <AnchorNavigation.Item href="#section2">Section Name 2</AnchorNavigation.Item>
            <AnchorNavigation.Item href="#section3">Section Name 3</AnchorNavigation.Item>
            <AnchorNavigation.Item href="#section4">Section Name 4</AnchorNavigation.Item>
        </AnchorNavigation>
}`,...(N=(f=o.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var I,A,x;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: function InteractiveStory() {
    const [active, setActive] = useState("section1");
    return <div className="flex gap-8">
                <AnchorNavigation className="w-48">
                    <AnchorNavigation.Item href="#section1" active={active === "section1"} onClick={e => {
          e.preventDefault();
          setActive("section1");
        }}>
                        Overview
                    </AnchorNavigation.Item>
                    <AnchorNavigation.Item href="#section2" active={active === "section2"} onClick={e => {
          e.preventDefault();
          setActive("section2");
        }}>
                        Getting Started
                    </AnchorNavigation.Item>
                    <AnchorNavigation.Item href="#section3" active={active === "section3"} onClick={e => {
          e.preventDefault();
          setActive("section3");
        }}>
                        Configuration
                    </AnchorNavigation.Item>
                    <AnchorNavigation.Item href="#section4" active={active === "section4"} onClick={e => {
          e.preventDefault();
          setActive("section4");
        }}>
                        API Reference
                    </AnchorNavigation.Item>
                    <AnchorNavigation.Item href="#section5" active={active === "section5"} onClick={e => {
          e.preventDefault();
          setActive("section5");
        }}>
                        Troubleshooting
                    </AnchorNavigation.Item>
                </AnchorNavigation>

                <div className="flex-1 text-sm text-fg-secondary">
                    Click on the navigation items to see the active state change.
                </div>
            </div>;
  }
}`,...(x=(A=r.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var u,p,j;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <AnchorNavigation className="w-64">
            <AnchorNavigation.Item href="#section1" active>
                Introduction to the Platform
            </AnchorNavigation.Item>
            <AnchorNavigation.Item href="#section2">
                Advanced Configuration Options
            </AnchorNavigation.Item>
            <AnchorNavigation.Item href="#section3">
                User Management and Permissions
            </AnchorNavigation.Item>
            <AnchorNavigation.Item href="#section4">
                Integration with Third-Party Services
            </AnchorNavigation.Item>
        </AnchorNavigation>
}`,...(j=(p=c.parameters)==null?void 0:p.docs)==null?void 0:j.source}}};var b,S,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <AnchorNavigation>
            <AnchorNavigation.Item href="#section1" active>
                Section 1
            </AnchorNavigation.Item>
            <AnchorNavigation.Item href="#section2">Section 2</AnchorNavigation.Item>
            <AnchorNavigation.Item href="#section3">Section 3</AnchorNavigation.Item>
            <AnchorNavigation.Item href="#section4">Section 4</AnchorNavigation.Item>
            <AnchorNavigation.Item href="#section5">Section 5</AnchorNavigation.Item>
            <AnchorNavigation.Item href="#section6">Section 6</AnchorNavigation.Item>
            <AnchorNavigation.Item href="#section7">Section 7</AnchorNavigation.Item>
            <AnchorNavigation.Item href="#section8">Section 8</AnchorNavigation.Item>
            <AnchorNavigation.Item href="#section9">Section 9</AnchorNavigation.Item>
            <AnchorNavigation.Item href="#section10">Section 10</AnchorNavigation.Item>
        </AnchorNavigation>
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var w,C,D;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 h-96">
            <aside className="w-56 border-r border-border-default p-4 bg-bg-surface">
                <h2 className="text-sm font-semibold text-fg-default mb-4">On This Page</h2>
                <AnchorNavigation>
                    <AnchorNavigation.Item href="#overview" active>
                        Overview
                    </AnchorNavigation.Item>
                    <AnchorNavigation.Item href="#features">Features</AnchorNavigation.Item>
                    <AnchorNavigation.Item href="#installation">Installation</AnchorNavigation.Item>
                    <AnchorNavigation.Item href="#usage">Usage</AnchorNavigation.Item>
                    <AnchorNavigation.Item href="#api">API</AnchorNavigation.Item>
                    <AnchorNavigation.Item href="#examples">Examples</AnchorNavigation.Item>
                </AnchorNavigation>
            </aside>
            <main className="flex-1 p-4">
                <div className="prose max-w-none">
                    <h1 className="text-2xl font-bold mb-4">Documentation Page</h1>
                    <p className="text-fg-secondary">
                        This demonstrates how the anchor navigation component can be used in a typical
                        documentation layout with a sidebar.
                    </p>
                </div>
            </main>
        </div>
}`,...(D=(C=h.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const M=["Default","Interactive","LongLabels","ManyItems","InSidebar"];export{o as Default,h as InSidebar,r as Interactive,c as LongLabels,s as ManyItems,M as __namedExportsOrder,L as default};
