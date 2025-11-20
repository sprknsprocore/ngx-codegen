import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-Dz3UJJSw.js";import{c as m}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const l=n.forwardRef(function({className:r,size:a="md",clearable:t=!0,onClear:d,loading:c=!1,validationState:o="none",value:i,disabled:u,...Q},T){const V=i!==void 0&&i!=="",U=o==="invalid",X=o==="valid",Y=()=>{d==null||d()},Z={sm:"h-8 pl-9 pr-3 text-sm",md:"h-9 pl-10 pr-3.5 text-md",lg:"h-10 pl-11 pr-4 text-lg"},$={sm:"w-4 h-4 left-3",md:"w-4 h-4 left-3.5",lg:"w-5 h-5 left-4"},b={sm:"right-2 w-5 h-5",md:"right-2.5 w-5 h-5",lg:"right-3 w-6 h-6"};return e.jsxs("div",{className:m("relative w-full",r),children:[e.jsx("div",{className:m("absolute top-1/2 -translate-y-1/2 pointer-events-none text-fg-muted",$[a]),children:e.jsxs("svg",{className:"w-full h-full",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.35-4.35"})]})}),e.jsx("input",{ref:T,type:"search",value:i,disabled:u,className:m("w-full rounded-md border bg-bg-canvas text-fg-default placeholder:text-fg-muted outline-none transition-colors","border-border-default","focus:ring-2 focus:ring-border-focus focus:border-border-focus",u&&"opacity-50 pointer-events-none",U&&"border-state-danger focus:ring-state-danger focus:border-state-danger",X&&"border-state-success focus:ring-state-success focus:border-state-success",t&&V&&"pr-10",Z[a]),...Q}),t&&V&&!c&&e.jsx("button",{type:"button",onClick:Y,disabled:u,className:m("absolute top-1/2 -translate-y-1/2 p-1 hover:bg-bg-surface rounded transition-colors text-fg-muted hover:text-fg-default",b[a],u&&"opacity-50 pointer-events-none"),"aria-label":"Clear search",children:e.jsx("svg",{className:"w-full h-full",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),c&&e.jsx("div",{className:m("absolute top-1/2 -translate-y-1/2 text-fg-muted pointer-events-none",b[a]),children:e.jsxs("svg",{className:"w-full h-full animate-spin",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})]})});try{l.displayName="Search",l.__docgenInfo={description:"",displayName:"Search",props:{size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},clearable:{defaultValue:{value:"true"},description:"Show clear button when there's a value",name:"clearable",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"Callback when clear button is clicked",name:"onClear",required:!1,type:{name:"(() => void)"}},loading:{defaultValue:{value:"false"},description:"Loading state",name:"loading",required:!1,type:{name:"boolean"}},validationState:{defaultValue:{value:"none"},description:"Validation state",name:"validationState",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"invalid"'},{value:'"valid"'}]}}}}}catch{}const se={title:"Components/Search",component:l,parameters:{layout:"padded"},tags:["autodocs"]},h={render:s=>{const[r,a]=n.useState("");return e.jsx(l,{...s,value:r,onChange:t=>a(t.target.value),onClear:()=>a("")})},args:{placeholder:"Search"}},v={render:s=>{const[r,a]=n.useState("Search query");return e.jsx(l,{...s,value:r,onChange:t=>a(t.target.value),onClear:()=>a("")})},args:{placeholder:"Search"}},g={render:s=>{const[r,a]=n.useState("Loading...");return e.jsx(l,{...s,value:r,onChange:t=>a(t.target.value),onClear:()=>a("")})},args:{placeholder:"Search",loading:!0}},p={render:s=>{const[r,a]=n.useState("");return e.jsx(l,{...s,value:r,onChange:t=>a(t.target.value),onClear:()=>a("")})},args:{placeholder:"Search",disabled:!0}},f={render:s=>{const[r,a]=n.useState("Invalid query");return e.jsx(l,{...s,value:r,onChange:t=>a(t.target.value),onClear:()=>a("")})},args:{placeholder:"Search",validationState:"invalid"}},S={render:s=>{const[r,a]=n.useState("Cannot clear");return e.jsx(l,{...s,value:r,onChange:t=>a(t.target.value),onClear:()=>a("")})},args:{placeholder:"Search",clearable:!1}},x={render:()=>{const[s,r]=n.useState(""),[a,t]=n.useState(""),[d,c]=n.useState("");return e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"Small"}),e.jsx(l,{placeholder:"Search",size:"sm",value:s,onChange:o=>r(o.target.value),onClear:()=>r("")})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"Medium (Default)"}),e.jsx(l,{placeholder:"Search",size:"md",value:a,onChange:o=>t(o.target.value),onClear:()=>t("")})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"Large"}),e.jsx(l,{placeholder:"Search",size:"lg",value:d,onChange:o=>c(o.target.value),onClear:()=>c("")})]})]})}},C={render:()=>{const[s,r]=n.useState(""),[a,t]=n.useState("Active search"),[d,c]=n.useState("Searching..."),[o,i]=n.useState("");return e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"Empty"}),e.jsx(l,{placeholder:"Search",value:s,onChange:u=>r(u.target.value),onClear:()=>r("")})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"With Value"}),e.jsx(l,{placeholder:"Search",value:a,onChange:u=>t(u.target.value),onClear:()=>t("")})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"Loading"}),e.jsx(l,{placeholder:"Search",value:d,onChange:u=>c(u.target.value),onClear:()=>c(""),loading:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"Disabled"}),e.jsx(l,{placeholder:"Search",value:o,onChange:u=>i(u.target.value),onClear:()=>i(""),disabled:!0})]})]})}};var j,N,y;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    return <Search {...args} value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue("")} />;
  },
  args: {
    placeholder: "Search"
  }
}`,...(y=(N=h.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var w,L,z;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("Search query");
    return <Search {...args} value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue("")} />;
  },
  args: {
    placeholder: "Search"
  }
}`,...(z=(L=v.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var M,k,_;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("Loading...");
    return <Search {...args} value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue("")} />;
  },
  args: {
    placeholder: "Search",
    loading: true
  }
}`,...(_=(k=g.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var q,W,D;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    return <Search {...args} value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue("")} />;
  },
  args: {
    placeholder: "Search",
    disabled: true
  }
}`,...(D=(W=p.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var E,A,B;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("Invalid query");
    return <Search {...args} value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue("")} />;
  },
  args: {
    placeholder: "Search",
    validationState: "invalid"
  }
}`,...(B=(A=f.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var I,R,H;S.parameters={...S.parameters,docs:{...(I=S.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("Cannot clear");
    return <Search {...args} value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue("")} />;
  },
  args: {
    placeholder: "Search",
    clearable: false
  }
}`,...(H=(R=S.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var O,F,G;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [valueSmall, setValueSmall] = useState("");
    const [valueMedium, setValueMedium] = useState("");
    const [valueLarge, setValueLarge] = useState("");
    return <div className="space-y-4 max-w-md">
                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">Small</p>
                    <Search placeholder="Search" size="sm" value={valueSmall} onChange={e => setValueSmall(e.target.value)} onClear={() => setValueSmall("")} />
                </div>
                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">Medium (Default)</p>
                    <Search placeholder="Search" size="md" value={valueMedium} onChange={e => setValueMedium(e.target.value)} onClear={() => setValueMedium("")} />
                </div>
                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">Large</p>
                    <Search placeholder="Search" size="lg" value={valueLarge} onChange={e => setValueLarge(e.target.value)} onClear={() => setValueLarge("")} />
                </div>
            </div>;
  }
}`,...(G=(F=x.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,P;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("Active search");
    const [value3, setValue3] = useState("Searching...");
    const [value4, setValue4] = useState("");
    return <div className="space-y-4 max-w-md">
                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">Empty</p>
                    <Search placeholder="Search" value={value1} onChange={e => setValue1(e.target.value)} onClear={() => setValue1("")} />
                </div>

                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">With Value</p>
                    <Search placeholder="Search" value={value2} onChange={e => setValue2(e.target.value)} onClear={() => setValue2("")} />
                </div>

                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">Loading</p>
                    <Search placeholder="Search" value={value3} onChange={e => setValue3(e.target.value)} onClear={() => setValue3("")} loading />
                </div>

                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">Disabled</p>
                    <Search placeholder="Search" value={value4} onChange={e => setValue4(e.target.value)} onClear={() => setValue4("")} disabled />
                </div>
            </div>;
  }
}`,...(P=(K=C.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};const le=["Default","WithValue","Loading","Disabled","WithError","NotClearable","Sizes","AllVariants"];export{C as AllVariants,h as Default,p as Disabled,g as Loading,S as NotClearable,x as Sizes,f as WithError,v as WithValue,le as __namedExportsOrder,se as default};
