import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-Dz3UJJSw.js";import{c as V}from"./index-Dp3B9jqt.js";import{c as F}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const R=V("rounded-sm transition-all border-2 font-medium",{variants:{size:{sm:"h-6 px-2 text-xs min-w-12",md:"h-8 px-3 text-sm min-w-16",lg:"h-10 px-4 text-md min-w-20"},selected:{true:"bg-bg-tertiary border-bg-brand text-fg-brand hover:bg-bg-secondary",false:"bg-bg-surface border-border-default text-fg-default hover:bg-bg-secondary"},loading:{true:"cursor-wait pointer-events-none",false:""}},defaultVariants:{size:"md",selected:!1,loading:!1}}),s=k.forwardRef(function({className:d,size:A="md",selected:g=!1,loading:i=!1,disabled:m,children:H,...M},O){return e.jsx("button",{ref:O,type:"button",role:"switch","aria-checked":g,disabled:m||i,className:F(R({size:A,selected:g,loading:i}),"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-50 focus-visible:ring-offset-2",m&&"opacity-50 cursor-not-allowed",d),...M,children:i?e.jsx("span",{className:"inline-flex items-center justify-center",children:e.jsxs("svg",{className:"animate-spin h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}):H})});try{s.displayName="Toggle",s.__docgenInfo={description:"",displayName:"Toggle",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}const G={title:"Components/Toggle",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},selected:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"}}},a={args:{children:"Label",size:"md",selected:!1}},r={args:{children:"Label",size:"md",selected:!0}},n={render:()=>e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(s,{size:"sm",children:"Small"}),e.jsx(s,{size:"md",children:"Medium"}),e.jsx(s,{size:"lg",children:"Large"})]})},t={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-sm text-fg-secondary",children:"Not Selected"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(s,{children:"Default"}),e.jsx(s,{className:"hover:bg-gray-90",children:"Hover"}),e.jsx(s,{className:"ring-2 ring-blue-50 ring-offset-2",children:"Focus"}),e.jsx(s,{disabled:!0,children:"Disabled"}),e.jsx(s,{loading:!0,children:"Loading"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"text-sm text-fg-secondary",children:"Selected"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(s,{selected:!0,children:"Default"}),e.jsx(s,{selected:!0,className:"hover:bg-blue-85",children:"Hover"}),e.jsx(s,{selected:!0,className:"ring-2 ring-blue-50 ring-offset-2",children:"Focus"}),e.jsx(s,{selected:!0,disabled:!0,children:"Disabled"}),e.jsx(s,{selected:!0,loading:!0,children:"Loading"})]})]})]})})},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx("span",{className:"text-sm text-fg-secondary w-20",children:"Small"}),e.jsx(s,{size:"sm",children:"Label"}),e.jsx(s,{size:"sm",selected:!0,children:"Label"}),e.jsx(s,{size:"sm",loading:!0,children:"Label"})]}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx("span",{className:"text-sm text-fg-secondary w-20",children:"Medium"}),e.jsx(s,{size:"md",children:"Label"}),e.jsx(s,{size:"md",selected:!0,children:"Label"}),e.jsx(s,{size:"md",loading:!0,children:"Label"})]}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx("span",{className:"text-sm text-fg-secondary w-20",children:"Large"}),e.jsx(s,{size:"lg",children:"Label"}),e.jsx(s,{size:"lg",selected:!0,children:"Label"}),e.jsx(s,{size:"lg",loading:!0,children:"Label"})]})]})},o={render:()=>{const[l,d]=k.useState(!1);return e.jsx(s,{selected:l,onClick:()=>d(!l),children:l?"On":"Off"})}};var x,f,u;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Label",
    size: "md",
    selected: false
  }
}`,...(u=(f=a.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var p,b,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: "Label",
    size: "md",
    selected: true
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,T,N;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center">
            <Toggle size="sm">Small</Toggle>
            <Toggle size="md">Medium</Toggle>
            <Toggle size="lg">Large</Toggle>
        </div>
}`,...(N=(T=n.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var j,z,L;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
            <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                    <span className="text-sm text-fg-secondary">Not Selected</span>
                    <div className="flex flex-col gap-2">
                        <Toggle>Default</Toggle>
                        <Toggle className="hover:bg-gray-90">Hover</Toggle>
                        <Toggle className="ring-2 ring-blue-50 ring-offset-2">Focus</Toggle>
                        <Toggle disabled>Disabled</Toggle>
                        <Toggle loading>Loading</Toggle>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-sm text-fg-secondary">Selected</span>
                    <div className="flex flex-col gap-2">
                        <Toggle selected>Default</Toggle>
                        <Toggle selected className="hover:bg-blue-85">Hover</Toggle>
                        <Toggle selected className="ring-2 ring-blue-50 ring-offset-2">Focus</Toggle>
                        <Toggle selected disabled>Disabled</Toggle>
                        <Toggle selected loading>Loading</Toggle>
                    </div>
                </div>
            </div>
        </div>
}`,...(L=(z=t.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var y,S,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
                <span className="text-sm text-fg-secondary w-20">Small</span>
                <Toggle size="sm">Label</Toggle>
                <Toggle size="sm" selected>Label</Toggle>
                <Toggle size="sm" loading>Label</Toggle>
            </div>
            <div className="flex gap-4 items-center">
                <span className="text-sm text-fg-secondary w-20">Medium</span>
                <Toggle size="md">Label</Toggle>
                <Toggle size="md" selected>Label</Toggle>
                <Toggle size="md" loading>Label</Toggle>
            </div>
            <div className="flex gap-4 items-center">
                <span className="text-sm text-fg-secondary w-20">Large</span>
                <Toggle size="lg">Label</Toggle>
                <Toggle size="lg" selected>Label</Toggle>
                <Toggle size="lg" loading>Label</Toggle>
            </div>
        </div>
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var D,_,C;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState(false);
    return <Toggle selected={selected} onClick={() => setSelected(!selected)}>
                {selected ? "On" : "Off"}
            </Toggle>;
  }
}`,...(C=(_=o.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const J=["Default","Selected","Sizes","States","AllSizesAndStates","Interactive"];export{c as AllSizesAndStates,a as Default,o as Interactive,r as Selected,n as Sizes,t as States,J as __namedExportsOrder,G as default};
