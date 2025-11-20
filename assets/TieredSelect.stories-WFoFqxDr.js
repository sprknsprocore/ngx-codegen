import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-Dz3UJJSw.js";import{c as _}from"./clsx-B-dksMZM.js";import{I as ve}from"./InputBase-Bz2wEZFE.js";import"./_commonjsHelpers-CqkleIqs.js";const u=n.forwardRef(function({options:a,value:c=[],onChange:m,label:V,placeholder:oe="Select...",disabled:L=!1,searchable:ce=!0,className:de},ue){const[W,C]=n.useState(!1),[d,p]=n.useState([]),[O,w]=n.useState(""),me=n.useCallback(()=>{let t=a;for(const r of d){const o=t.find(s=>s.id===r);if(o!=null&&o.children)t=o.children;else return[]}return t},[a,d]),pe=n.useCallback(()=>{const t=[];let r=a;for(const o of d){const s=r.find(T=>T.id===o);s&&(t.push(s),s.children&&(r=s.children))}return t},[a,d]),he=t=>{if(t.children&&t.children.length>0)p([...d,t.id]);else{const r=[...d,t.id];m==null||m(r),C(!1),p([]),w("")}},be=t=>{p(d.slice(0,t))},ge=()=>{p([])},fe=()=>{if(c.length===0)return oe;let t=a;const r=[];for(const o of c){const s=t.find(T=>T.id===o);s&&(r.push(s.label),s.children&&(t=s.children))}return r.join(" > ")},k=me(),I=pe(),D=O?k.filter(t=>t.label.toLowerCase().includes(O.toLowerCase())):k,h=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M6 4l4 4-4 4",stroke:"currentColor",strokeWidth:"2",fill:"none"})}),xe=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"})});return e.jsxs("div",{ref:ue,className:_("relative w-full",de),children:[V&&e.jsx("label",{className:"block text-sm font-medium text-fg-default mb-1.5",children:V}),e.jsxs("button",{type:"button",disabled:L,onClick:()=>C(!W),className:_("w-full h-9 px-3.5 text-md rounded-md border bg-bg-canvas text-fg-default","border-border-default focus:ring-2 focus:ring-border-focus focus:border-border-focus","flex items-center justify-between transition-colors",L&&"opacity-50 pointer-events-none",c.length===0&&"text-fg-muted"),children:[e.jsx("span",{className:"truncate",children:fe()}),e.jsx(h,{})]}),W&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-10",onClick:()=>{C(!1),p([]),w("")}}),e.jsxs("div",{className:"absolute z-20 w-full mt-1 bg-bg-canvas border border-border-default rounded-md shadow-2 overflow-hidden",children:[I.length>0&&e.jsxs("div",{className:"flex items-center gap-1 px-3 py-2 border-b border-border-default bg-bg-surface",children:[e.jsx("button",{type:"button",onClick:ge,className:"p-1 hover:bg-bg-tertiary rounded transition-colors",children:e.jsx(xe,{})}),I.map((t,r)=>e.jsxs(n.Fragment,{children:[e.jsx(h,{}),e.jsx("button",{type:"button",onClick:()=>be(r),className:"text-sm text-fg-default hover:text-bg-brand transition-colors",children:t.label})]},t.id)),e.jsx(h,{}),e.jsx("span",{className:"text-sm text-fg-muted",children:"Active..."})]}),ce&&e.jsx("div",{className:"p-2 border-b border-border-default",children:e.jsx(ve,{size:"sm",placeholder:"Search",value:O,onChange:t=>w(t.target.value)})}),e.jsx("div",{className:"max-h-64 overflow-y-auto",children:D.length===0?e.jsx("div",{className:"px-3 py-6 text-sm text-fg-muted text-center",children:"No results"}):D.map(t=>e.jsxs("button",{type:"button",onClick:()=>he(t),className:"w-full flex items-center justify-between px-3 py-2 text-sm text-fg-default hover:bg-bg-surface transition-colors",children:[e.jsx("span",{children:t.label}),t.children&&t.children.length>0&&e.jsx(h,{})]},t.id))})]})]})]})});try{u.displayName="TieredSelect",u.__docgenInfo={description:"",displayName:"TieredSelect",props:{options:{defaultValue:null,description:"Options tree",name:"options",required:!0,type:{name:"TieredOption[]"}},value:{defaultValue:{value:"[]"},description:"Currently selected option IDs (full path)",name:"value",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"Callback when selection changes",name:"onChange",required:!1,type:{name:"((value: string[]) => void)"}},label:{defaultValue:null,description:"Label for the select",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"Select..."},description:"Placeholder text",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the select is disabled",name:"disabled",required:!1,type:{name:"boolean"}},searchable:{defaultValue:{value:"true"},description:"Whether to show search input",name:"searchable",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom class name",name:"className",required:!1,type:{name:"string"}}}}}catch{}const we={title:"Components/TieredSelect",component:u,parameters:{layout:"padded"},tags:["autodocs"]},i=[{id:"tier1-1",label:"Tier 1",children:[{id:"tier2-1",label:"Tier 2",children:[{id:"tier3-1",label:"Tier 3",children:[{id:"tier4-1",label:"Option"},{id:"tier4-2",label:"Option"}]},{id:"tier3-2",label:"Tier 3",children:[{id:"tier4-3",label:"Option"},{id:"tier4-4",label:"Option"}]}]},{id:"tier2-2",label:"Tier 2",children:[{id:"tier3-3",label:"Tier 3"},{id:"tier3-4",label:"Tier 3"}]}]},{id:"tier1-2",label:"Tier 1",children:[{id:"tier2-3",label:"Tier 2",children:[{id:"tier3-5",label:"Tier 3"},{id:"tier3-6",label:"Tier 3"}]}]},{id:"tier1-3",label:"Tier 1",children:[{id:"tier2-4",label:"Option"},{id:"tier2-5",label:"Option"}]}],b={args:{options:i,placeholder:"Placeholder"}},g={args:{options:i,label:"Label",placeholder:"Placeholder"}},f={args:{options:i,value:["tier1-1","tier2-1","tier3-1","tier4-1"],label:"Label"}},x={args:{options:i,label:"Label",searchable:!0}},v={args:{options:i,label:"Label",searchable:!1}},S={args:{options:i,label:"Label",disabled:!0,value:["tier1-1","tier2-1","tier3-1","tier4-1"]}},j={render:()=>{const[l,a]=n.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(u,{options:i,value:l,onChange:a,label:"Select an option",placeholder:"Choose..."}),e.jsxs("div",{className:"text-sm text-fg-muted",children:["Selected: ",l.length>0?l.join(" > "):"None"]})]})}},y={render:()=>{const[l,a]=n.useState([]),[c,m]=n.useState([]);return e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsx(u,{options:i,value:l,onChange:a,label:"First Selection",placeholder:"Choose..."}),e.jsx(u,{options:i,value:c,onChange:m,label:"Second Selection",placeholder:"Choose..."}),e.jsxs("div",{className:"text-sm text-fg-muted space-y-1",children:[e.jsxs("div",{children:["First: ",l.length>0?l.join(" > "):"None"]}),e.jsxs("div",{children:["Second: ",c.length>0?c.join(" > "):"None"]})]})]})}},Se=[{id:"construction",label:"Construction",children:[{id:"residential",label:"Residential",children:[{id:"single-family",label:"Single Family Homes"},{id:"multi-family",label:"Multi-Family Units"},{id:"townhomes",label:"Townhomes"}]},{id:"commercial",label:"Commercial",children:[{id:"office",label:"Office Buildings"},{id:"retail",label:"Retail Spaces"},{id:"industrial",label:"Industrial Facilities"}]},{id:"infrastructure",label:"Infrastructure",children:[{id:"roads",label:"Roads & Highways"},{id:"bridges",label:"Bridges"},{id:"utilities",label:"Utilities"}]}]},{id:"engineering",label:"Engineering",children:[{id:"structural",label:"Structural Engineering",children:[{id:"analysis",label:"Structural Analysis"},{id:"design",label:"Structural Design"}]},{id:"civil",label:"Civil Engineering",children:[{id:"geotechnical",label:"Geotechnical"},{id:"transportation",label:"Transportation"}]}]},{id:"architecture",label:"Architecture",children:[{id:"conceptual",label:"Conceptual Design"},{id:"detailed",label:"Detailed Design"},{id:"interior",label:"Interior Design"}]}],N={render:()=>{const[l,a]=n.useState([]);return e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(u,{options:Se,value:l,onChange:a,label:"Project Category",placeholder:"Select a category..."}),e.jsxs("div",{className:"p-4 bg-bg-surface rounded-md",children:[e.jsx("div",{className:"text-sm font-medium text-fg-default mb-1",children:"Selected:"}),e.jsx("div",{className:"text-sm text-fg-muted",children:l.length>0?l.join(" → "):"No selection"})]})]})}};var F,P,q;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: "Placeholder"
  }
}`,...(q=(P=b.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var B,E,R;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: "Label",
    placeholder: "Placeholder"
  }
}`,...(R=(E=g.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var M,z,H;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    value: ["tier1-1", "tier2-1", "tier3-1", "tier4-1"],
    label: "Label"
  }
}`,...(H=(z=f.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var A,Q,U;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: "Label",
    searchable: true
  }
}`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: "Label",
    searchable: false
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Y,Z;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: "Label",
    disabled: true,
    value: ["tier1-1", "tier2-1", "tier3-1", "tier4-1"]
  }
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div className="space-y-4">
                <TieredSelect options={sampleOptions} value={value} onChange={setValue} label="Select an option" placeholder="Choose..." />
                <div className="text-sm text-fg-muted">
                    Selected: {value.length > 0 ? value.join(" > ") : "None"}
                </div>
            </div>;
  }
}`,...(te=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var le,ae,re;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<string[]>([]);
    const [value2, setValue2] = useState<string[]>([]);
    return <div className="space-y-6 max-w-md">
                <TieredSelect options={sampleOptions} value={value1} onChange={setValue1} label="First Selection" placeholder="Choose..." />
                <TieredSelect options={sampleOptions} value={value2} onChange={setValue2} label="Second Selection" placeholder="Choose..." />
                <div className="text-sm text-fg-muted space-y-1">
                    <div>First: {value1.length > 0 ? value1.join(" > ") : "None"}</div>
                    <div>Second: {value2.length > 0 ? value2.join(" > ") : "None"}</div>
                </div>
            </div>;
  }
}`,...(re=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,ne,ie;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div className="space-y-4 max-w-md">
                <TieredSelect options={realWorldOptions} value={value} onChange={setValue} label="Project Category" placeholder="Select a category..." />
                <div className="p-4 bg-bg-surface rounded-md">
                    <div className="text-sm font-medium text-fg-default mb-1">Selected:</div>
                    <div className="text-sm text-fg-muted">
                        {value.length > 0 ? value.join(" → ") : "No selection"}
                    </div>
                </div>
            </div>;
  }
}`,...(ie=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};const Te=["Default","WithLabel","WithValue","WithSearch","WithoutSearch","Disabled","Interactive","MultipleSelects","RealWorldExample"];export{b as Default,S as Disabled,j as Interactive,y as MultipleSelects,N as RealWorldExample,g as WithLabel,x as WithSearch,f as WithValue,v as WithoutSearch,Te as __namedExportsOrder,we as default};
