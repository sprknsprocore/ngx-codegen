import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{S as s}from"./Select-uuqwQvgn.js";import{r as t}from"./index-Dz3UJJSw.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const ee={title:"Components/Select",component:s,parameters:{layout:"padded"},tags:["autodocs"]},n=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"},{value:"5",label:"Option 5"}],J=[{label:"Grouped Title 1",options:[{value:"g1-1",label:"Option 1"},{value:"g1-2",label:"Option 2"},{value:"g1-3",label:"Option 3"}]},{label:"Grouped Title 2",options:[{value:"g2-1",label:"Option 1"},{value:"g2-2",label:"Option 2"},{value:"g2-3",label:"Option 3"}]}],o={render:e=>{const[a,l]=t.useState("");return r.jsx(s,{...e,value:a,onChange:l})},args:{label:"Label",placeholder:"Placeholder",options:n}},u={render:e=>{const[a,l]=t.useState("2");return r.jsx(s,{...e,value:a,onChange:l})},args:{label:"Label",placeholder:"Placeholder",options:n}},c={render:e=>{const[a,l]=t.useState("");return r.jsx(s,{...e,value:a,onChange:l})},args:{label:"Label",placeholder:"Placeholder",options:n,searchable:!0}},p={render:e=>{const[a,l]=t.useState("2");return r.jsx(s,{...e,value:a,onChange:l})},args:{label:"Label",placeholder:"Placeholder",options:n,clearable:!0}},i={render:e=>{const[a,l]=t.useState("");return r.jsx(s,{...e,value:a,onChange:l})},args:{label:"Label",placeholder:"Placeholder",groups:J}},d={render:e=>{const[a,l]=t.useState("");return r.jsx(s,{...e,value:a,onChange:l})},args:{label:"Label",placeholder:"Placeholder",options:n,validationState:"invalid",helperText:"Error Message/Helper Text",required:!0}},h={render:e=>{const[a,l]=t.useState("2");return r.jsx(s,{...e,value:a,onChange:l})},args:{label:"Label",placeholder:"Placeholder",options:n,disabled:!0}},m={render:()=>{const[e,a]=t.useState(""),[l,v]=t.useState(""),[S,b]=t.useState("");return r.jsxs("div",{className:"space-y-4 max-w-md",children:[r.jsx(s,{label:"Small",placeholder:"Placeholder",options:n,size:"sm",value:e,onChange:a}),r.jsx(s,{label:"Medium (Default)",placeholder:"Placeholder",options:n,size:"md",value:l,onChange:v}),r.jsx(s,{label:"Large",placeholder:"Placeholder",options:n,size:"lg",value:S,onChange:b})]})}},g={render:()=>{const[e,a]=t.useState(""),[l,v]=t.useState("2"),[S,b]=t.useState(""),[K,Q]=t.useState("g1-2");return r.jsxs("div",{className:"space-y-6 max-w-md",children:[r.jsx(s,{label:"Basic Select",placeholder:"Select an option",options:n,value:e,onChange:a}),r.jsx(s,{label:"Searchable & Clearable",placeholder:"Search options",options:n,value:l,onChange:v,searchable:!0,clearable:!0}),r.jsx(s,{label:"Required Field",placeholder:"Select an option",options:n,value:S,onChange:b,required:!0,validationState:"invalid",helperText:"This field is required"}),r.jsx(s,{label:"Grouped Options",placeholder:"Select an option",groups:J,value:K,onChange:Q})]})}};var V,C,x;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    return <Select {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "Label",
    placeholder: "Placeholder",
    options: simpleOptions
  }
}`,...(x=(C=o.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var O,L,P;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("2");
    return <Select {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "Label",
    placeholder: "Placeholder",
    options: simpleOptions
  }
}`,...(P=(L=u.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var j,f,M;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    return <Select {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "Label",
    placeholder: "Placeholder",
    options: simpleOptions,
    searchable: true
  }
}`,...(M=(f=c.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var T,q,z;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("2");
    return <Select {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "Label",
    placeholder: "Placeholder",
    options: simpleOptions,
    clearable: true
  }
}`,...(z=(q=p.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var E,D,G;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    return <Select {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "Label",
    placeholder: "Placeholder",
    groups: groupedOptions
  }
}`,...(G=(D=i.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var W,y,w;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    return <Select {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "Label",
    placeholder: "Placeholder",
    options: simpleOptions,
    validationState: "invalid",
    helperText: "Error Message/Helper Text",
    required: true
  }
}`,...(w=(y=d.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var N,R,A;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("2");
    return <Select {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "Label",
    placeholder: "Placeholder",
    options: simpleOptions,
    disabled: true
  }
}`,...(A=(R=h.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var B,F,H;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [valueSmall, setValueSmall] = useState("");
    const [valueMedium, setValueMedium] = useState("");
    const [valueLarge, setValueLarge] = useState("");
    return <div className="space-y-4 max-w-md">
                <Select label="Small" placeholder="Placeholder" options={simpleOptions} size="sm" value={valueSmall} onChange={setValueSmall} />
                <Select label="Medium (Default)" placeholder="Placeholder" options={simpleOptions} size="md" value={valueMedium} onChange={setValueMedium} />
                <Select label="Large" placeholder="Placeholder" options={simpleOptions} size="lg" value={valueLarge} onChange={setValueLarge} />
            </div>;
  }
}`,...(H=(F=m.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var _,k,I;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("2");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("g1-2");
    return <div className="space-y-6 max-w-md">
                <Select label="Basic Select" placeholder="Select an option" options={simpleOptions} value={value1} onChange={setValue1} />

                <Select label="Searchable & Clearable" placeholder="Search options" options={simpleOptions} value={value2} onChange={setValue2} searchable clearable />

                <Select label="Required Field" placeholder="Select an option" options={simpleOptions} value={value3} onChange={setValue3} required validationState="invalid" helperText="This field is required" />

                <Select label="Grouped Options" placeholder="Select an option" groups={groupedOptions} value={value4} onChange={setValue4} />
            </div>;
  }
}`,...(I=(k=g.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const ae=["Default","WithValue","Searchable","Clearable","WithGroups","WithError","Disabled","Sizes","AllVariants"];export{g as AllVariants,p as Clearable,o as Default,h as Disabled,c as Searchable,m as Sizes,d as WithError,i as WithGroups,u as WithValue,ae as __namedExportsOrder,ee as default};
