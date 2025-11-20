import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-Dz3UJJSw.js";import{c as m}from"./clsx-B-dksMZM.js";import{P as ze}from"./Pill-DOcXdQ9q.js";import{B as A}from"./Button-CZgY2kMk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Dp3B9jqt.js";const n=t.forwardRef(function({className:l,label:u,placeholder:v="Select values",value:r=[],options:p=[],onChange:o,helperText:T,validationState:_="none",required:je,disabled:C,searchable:Ne=!0,size:Ve="md",maxVisiblePills:h,showActions:ye=!0,...Oe},Ce){const[d,P]=t.useState(!1),[k,D]=t.useState(""),L=t.useRef(null),Pe=t.useRef(null),M=_==="invalid",q=_==="valid",z=p.filter(s=>r.includes(s.value)),R=h?z.slice(0,h):z,E=h?Math.max(0,z.length-h):0,B=k?p.filter(s=>s.label.toLowerCase().includes(k.toLowerCase())):p;t.useEffect(()=>{const s=c=>{L.current&&!L.current.contains(c.target)&&(P(!1),D(""))};if(d)return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[d]);const ke=s=>{const c=r.includes(s)?r.filter(W=>W!==s):[...r,s];o==null||o(c)},Le=s=>{const c=r.filter(W=>W!==s);o==null||o(c)},F=()=>{o==null||o([])},Me=()=>{o==null||o(p.filter(s=>!s.disabled).map(s=>s.value))},qe={sm:"min-h-8 px-2 py-1 text-sm",md:"min-h-9 px-3 py-1.5 text-md",lg:"min-h-10 px-4 py-2 text-lg"};return e.jsxs("div",{ref:L,className:m("relative w-full",l),...Oe,children:[u&&e.jsxs("label",{className:"block text-sm font-medium text-fg-default mb-1.5",children:[u,je&&e.jsx("span",{className:"text-state-danger ml-0.5",children:"*"})]}),e.jsxs("div",{ref:Ce,role:"button",tabIndex:C?-1:0,"aria-expanded":d,onClick:()=>!C&&P(!d),className:m("w-full rounded-md border bg-bg-canvas text-fg-default cursor-pointer transition-colors","flex flex-wrap items-center gap-1.5",qe[Ve],"border-border-default","focus:outline-none focus:ring-2 focus:ring-blue-50 focus:border-blue-50",C&&"opacity-50 pointer-events-none cursor-not-allowed",M&&"border-state-danger focus:ring-state-danger focus:border-state-danger",q&&"border-state-success focus:ring-state-success focus:border-state-success",d&&"ring-2 ring-blue-50 border-blue-50"),children:[R.length>0?e.jsxs(e.Fragment,{children:[R.map(s=>e.jsx(ze,{size:"sm",tone:s.tone||"blue",removable:!0,onRemove:c=>{c.stopPropagation(),Le(s.value)},children:s.label},s.value)),E>0&&e.jsxs("span",{className:"text-sm text-fg-secondary font-semibold",children:["+",E]})]}):e.jsx("span",{className:"text-fg-secondary",children:v}),e.jsxs("div",{className:"ml-auto flex items-center gap-1",children:[r.length>0&&e.jsx("button",{type:"button",onClick:s=>{s.stopPropagation(),F()},className:"p-0.5 hover:bg-bg-surface rounded transition-colors","aria-label":"Clear all",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("svg",{className:m("w-4 h-4 transition-transform flex-shrink-0",d&&"rotate-180"),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]}),d&&e.jsxs("div",{className:"absolute z-50 w-full mt-1 bg-bg-canvas border border-border-default rounded-md shadow-2 max-h-80 overflow-hidden flex flex-col",children:[Ne&&e.jsx("div",{className:"p-2 border-b border-border-default flex-shrink-0",children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{ref:Pe,type:"text",value:k,onChange:s=>D(s.target.value),placeholder:"Search",className:"w-full h-8 px-3 pr-8 text-sm border border-border-default rounded-md bg-bg-canvas focus:outline-none focus:ring-2 focus:ring-blue-50",autoFocus:!0}),e.jsx("svg",{className:"absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-fg-secondary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})}),e.jsx("div",{className:"overflow-y-auto flex-1",role:"listbox",children:B.length>0?B.map(s=>{const c=r.includes(s.value);return e.jsxs("div",{role:"option","aria-selected":c,onClick:()=>!s.disabled&&ke(s.value),className:m("px-3 py-2 cursor-pointer transition-colors flex items-center gap-2","hover:bg-bg-surface",s.disabled&&"opacity-50 cursor-not-allowed"),children:[e.jsx("div",{className:m("w-4 h-4 rounded border flex items-center justify-center flex-shrink-0",c?"bg-bg-brand border-bg-brand":"bg-bg-canvas border-border-default"),children:c&&e.jsx("svg",{className:"w-3 h-3 text-fg-onbrand",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M5 13l4 4L19 7"})})}),e.jsx("span",{className:"text-sm text-fg-default",children:s.label})]},s.value)}):e.jsx("div",{className:"px-3 py-2 text-sm text-fg-secondary",children:"No results found"})}),ye&&e.jsxs("div",{className:"p-2 border-t border-border-default flex justify-end gap-2 flex-shrink-0",children:[e.jsx(A,{size:"sm",emphasis:"secondary",onClick:F,children:"Clear"}),e.jsx(A,{size:"sm",emphasis:"secondary",onClick:Me,children:"Select All"}),e.jsx(A,{size:"sm",onClick:()=>P(!1),children:"Done"})]})]}),T&&e.jsx("div",{className:m("mt-1.5 text-sm",M&&"text-state-danger",q&&"text-state-success",!M&&!q&&"text-fg-secondary"),children:T})]})});try{n.displayName="PillSelect",n.__docgenInfo={description:"",displayName:"PillSelect",props:{label:{defaultValue:null,description:"Label for the select",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"Select values"},description:"Placeholder text",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:{value:"[]"},description:"Selected values",name:"value",required:!1,type:{name:"string[]"}},options:{defaultValue:{value:"[]"},description:"Options",name:"options",required:!1,type:{name:"PillSelectOption[]"}},onChange:{defaultValue:null,description:"Callback when selection changes",name:"onChange",required:!1,type:{name:"((value: string[]) => void)"}},helperText:{defaultValue:null,description:"Helper text or error message",name:"helperText",required:!1,type:{name:"string"}},validationState:{defaultValue:{value:"none"},description:"Validation state",name:"validationState",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"invalid"'},{value:'"valid"'}]}},required:{defaultValue:null,description:"Whether the field is required",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},searchable:{defaultValue:{value:"true"},description:"Whether to show search",name:"searchable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},maxVisiblePills:{defaultValue:null,description:'Maximum number of pills to show before "+N" indicator',name:"maxVisiblePills",required:!1,type:{name:"number"}},showActions:{defaultValue:{value:"true"},description:"Show action buttons in dropdown",name:"showActions",required:!1,type:{name:"boolean"}}}}}catch{}const Be={title:"Components/PillSelect",component:n,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},validationState:{control:"select",options:["none","invalid","valid"]},disabled:{control:"boolean"},searchable:{control:"boolean"},showActions:{control:"boolean"}}},i=[{value:"1",label:"Option 1",tone:"blue"},{value:"2",label:"Option 2",tone:"green"},{value:"3",label:"Option 3",tone:"orange"},{value:"4",label:"Option 4",tone:"red"},{value:"5",label:"Option 5",tone:"yellow"},{value:"6",label:"Option 6",tone:"cyan"},{value:"7",label:"Option 7",tone:"magenta"},{value:"8",label:"Option 8",tone:"purple"}],b={render:()=>{const[a,l]=t.useState([]);return e.jsx("div",{className:"w-96",children:e.jsx(n,{label:"Select Options",placeholder:"Choose multiple options",value:a,onChange:l,options:i})})}},x={render:()=>{const[a,l]=t.useState(["1","3","5"]);return e.jsx("div",{className:"w-96",children:e.jsx(n,{label:"Selected Values",value:a,onChange:l,options:i})})}},f={render:()=>{const[a,l]=t.useState([]);return e.jsx("div",{className:"w-96",children:e.jsx(n,{label:"Select Options",placeholder:"Choose options",value:a,onChange:l,options:i,helperText:"Select one or more options from the list"})})}},g={render:()=>{const[a,l]=t.useState([]);return e.jsx("div",{className:"w-96",children:e.jsx(n,{label:"Required Field",placeholder:"Select at least one option",value:a,onChange:l,options:i,validationState:"invalid",helperText:"Please select at least one option",required:!0})})}},S={render:()=>{const[a,l]=t.useState(["1","2"]);return e.jsx("div",{className:"w-96",children:e.jsx(n,{label:"Valid Selection",value:a,onChange:l,options:i,validationState:"valid",helperText:"Your selection looks good!"})})}},w={render:()=>e.jsx("div",{className:"w-96",children:e.jsx(n,{label:"Disabled",value:["1","2"],options:i,disabled:!0})})},j={render:()=>{const[a,l]=t.useState(["1","2","3","4","5"]);return e.jsx("div",{className:"w-96",children:e.jsx(n,{label:"Max 3 Visible Pills",value:a,onChange:l,options:i,maxVisiblePills:3,helperText:"Only 3 pills shown, rest are indicated with +N"})})}},N={render:()=>{const[a,l]=t.useState([]);return e.jsx("div",{className:"w-96",children:e.jsx(n,{label:"No Search",value:a,onChange:l,options:i,searchable:!1})})}},V={render:()=>{const[a,l]=t.useState([]);return e.jsx("div",{className:"w-96",children:e.jsx(n,{label:"No Action Buttons",value:a,onChange:l,options:i,showActions:!1})})}},y={render:()=>{const[a,l]=t.useState(["1"]),[u,v]=t.useState(["2"]),[r,p]=t.useState(["3"]);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"w-96",children:e.jsx(n,{label:"Small",size:"sm",value:a,onChange:l,options:i})}),e.jsx("div",{className:"w-96",children:e.jsx(n,{label:"Medium (Default)",size:"md",value:u,onChange:v,options:i})}),e.jsx("div",{className:"w-96",children:e.jsx(n,{label:"Large",size:"lg",value:r,onChange:p,options:i})})]})}},O={render:()=>{const[a,l]=t.useState([]),u=Array.from({length:50},(v,r)=>({value:`${r+1}`,label:`Option ${r+1}`,tone:["blue","green","orange","red","yellow","cyan","magenta","purple"][r%8]}));return e.jsx("div",{className:"w-96",children:e.jsx(n,{label:"Many Options with Search",placeholder:"Search through 50 options",value:a,onChange:l,options:u})})}};var $,H,I;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div className="w-96">
                <PillSelect label="Select Options" placeholder="Choose multiple options" value={value} onChange={setValue} options={sampleOptions} />
            </div>;
  }
}`,...(I=(H=b.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var Q,Y,G;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(["1", "3", "5"]);
    return <div className="w-96">
                <PillSelect label="Selected Values" value={value} onChange={setValue} options={sampleOptions} />
            </div>;
  }
}`,...(G=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var J,K,U;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div className="w-96">
                <PillSelect label="Select Options" placeholder="Choose options" value={value} onChange={setValue} options={sampleOptions} helperText="Select one or more options from the list" />
            </div>;
  }
}`,...(U=(K=f.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var X,Z,ee;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div className="w-96">
                <PillSelect label="Required Field" placeholder="Select at least one option" value={value} onChange={setValue} options={sampleOptions} validationState="invalid" helperText="Please select at least one option" required />
            </div>;
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,ae,le;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(["1", "2"]);
    return <div className="w-96">
                <PillSelect label="Valid Selection" value={value} onChange={setValue} options={sampleOptions} validationState="valid" helperText="Your selection looks good!" />
            </div>;
  }
}`,...(le=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var te,ne,re;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    return <div className="w-96">
                <PillSelect label="Disabled" value={["1", "2"]} options={sampleOptions} disabled />
            </div>;
  }
}`,...(re=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,ie,ce;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(["1", "2", "3", "4", "5"]);
    return <div className="w-96">
                <PillSelect label="Max 3 Visible Pills" value={value} onChange={setValue} options={sampleOptions} maxVisiblePills={3} helperText="Only 3 pills shown, rest are indicated with +N" />
            </div>;
  }
}`,...(ce=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,ue,pe;N.parameters={...N.parameters,docs:{...(de=N.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div className="w-96">
                <PillSelect label="No Search" value={value} onChange={setValue} options={sampleOptions} searchable={false} />
            </div>;
  }
}`,...(pe=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,ve,he;V.parameters={...V.parameters,docs:{...(me=V.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div className="w-96">
                <PillSelect label="No Action Buttons" value={value} onChange={setValue} options={sampleOptions} showActions={false} />
            </div>;
  }
}`,...(he=(ve=V.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var be,xe,fe;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const [valueSm, setValueSm] = useState<string[]>(["1"]);
    const [valueMd, setValueMd] = useState<string[]>(["2"]);
    const [valueLg, setValueLg] = useState<string[]>(["3"]);
    return <div className="flex flex-col gap-4">
                <div className="w-96">
                    <PillSelect label="Small" size="sm" value={valueSm} onChange={setValueSm} options={sampleOptions} />
                </div>
                <div className="w-96">
                    <PillSelect label="Medium (Default)" size="md" value={valueMd} onChange={setValueMd} options={sampleOptions} />
                </div>
                <div className="w-96">
                    <PillSelect label="Large" size="lg" value={valueLg} onChange={setValueLg} options={sampleOptions} />
                </div>
            </div>;
  }
}`,...(fe=(xe=y.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var ge,Se,we;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    const manyOptions = Array.from({
      length: 50
    }, (_, i) => ({
      value: \`\${i + 1}\`,
      label: \`Option \${i + 1}\`,
      tone: (["blue", "green", "orange", "red", "yellow", "cyan", "magenta", "purple"] as const)[i % 8]
    }));
    return <div className="w-96">
                <PillSelect label="Many Options with Search" placeholder="Search through 50 options" value={value} onChange={setValue} options={manyOptions} />
            </div>;
  }
}`,...(we=(Se=O.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};const Fe=["Default","WithSelectedValues","WithHelperText","WithError","WithSuccess","Disabled","MaxVisiblePills","WithoutSearch","WithoutActions","Sizes","ManyOptions"];export{b as Default,w as Disabled,O as ManyOptions,j as MaxVisiblePills,y as Sizes,g as WithError,f as WithHelperText,x as WithSelectedValues,S as WithSuccess,V as WithoutActions,N as WithoutSearch,Fe as __namedExportsOrder,Be as default};
