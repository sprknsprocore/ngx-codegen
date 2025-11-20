import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-Dz3UJJSw.js";import{c as j}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const n=r.forwardRef(function({className:s,options:a,value:u,onChange:d,size:S="md",fullWidth:V=!1,disabled:i=!1,...Y},Z){const ee=(l,te)=>{i||te||d==null||d(l)},ae={sm:"h-8 px-3 text-sm",md:"h-9 px-4 text-md",lg:"h-10 px-5 text-lg"},C=a.findIndex(l=>l.value===u);return e.jsxs("div",{ref:Z,role:"radiogroup",className:j("relative inline-flex items-center bg-bg-surface border border-border-default rounded-md p-0.5",V&&"w-full",i&&"opacity-50 pointer-events-none",s),...Y,children:[C!==-1&&e.jsx("div",{className:"absolute bg-bg-canvas border border-border-default rounded shadow-1 transition-all duration-200 ease-out",style:{left:`calc(${C/a.length*100}% + 2px)`,width:`calc(${100/a.length}% - 4px)`,top:"2px",bottom:"2px"}}),a.map(l=>e.jsx("button",{type:"button",role:"radio","aria-checked":l.value===u,disabled:i||l.disabled,onClick:()=>ee(l.value,l.disabled),className:j("relative z-10 flex-1 inline-flex items-center justify-center rounded transition-colors font-medium",ae[S],l.value===u?"text-fg-default":"text-fg-secondary hover:text-fg-default",(i||l.disabled)&&"cursor-not-allowed",!i&&!l.disabled&&"cursor-pointer",V&&"flex-1"),children:l.label},l.value))]})});try{n.displayName="SegmentedControl",n.__docgenInfo={description:"",displayName:"SegmentedControl",props:{options:{defaultValue:null,description:"Options to display",name:"options",required:!0,type:{name:"SegmentedControlOption[]"}},value:{defaultValue:null,description:"Selected value",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback when selection changes",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},fullWidth:{defaultValue:{value:"false"},description:"Full width",name:"fullWidth",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const ue={title:"Components/SegmentedControl",component:n,parameters:{layout:"padded"},tags:["autodocs"]},se=[{value:"1",label:"Label"},{value:"2",label:"Label"}],o=[{value:"1",label:"Label"},{value:"2",label:"Label"},{value:"3",label:"Label"}],X=[{value:"list",label:"List"},{value:"grid",label:"Grid"},{value:"kanban",label:"Kanban"},{value:"calendar",label:"Calendar"}],m={render:t=>{const[s,a]=r.useState("1");return e.jsx(n,{...t,value:s,onChange:a})},args:{options:o}},c={render:t=>{const[s,a]=r.useState("1");return e.jsx(n,{...t,value:s,onChange:a})},args:{options:se}},p={render:t=>{const[s,a]=r.useState("2");return e.jsx(n,{...t,value:s,onChange:a})},args:{options:o}},g={render:t=>{const[s,a]=r.useState("list");return e.jsx(n,{...t,value:s,onChange:a})},args:{options:X}},v={render:t=>{const[s,a]=r.useState("1");return e.jsx(n,{...t,value:s,onChange:a})},args:{options:o,fullWidth:!0}},f={render:t=>{const[s,a]=r.useState("2");return e.jsx(n,{...t,value:s,onChange:a})},args:{options:o,disabled:!0}},x={render:t=>{const[s,a]=r.useState("1");return e.jsx(n,{...t,value:s,onChange:a})},args:{options:[{value:"1",label:"Label"},{value:"2",label:"Label",disabled:!0},{value:"3",label:"Label"}]}},h={render:()=>{const[t,s]=r.useState("1"),[a,u]=r.useState("2"),[d,S]=r.useState("3");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"Small"}),e.jsx(n,{options:o,value:t,onChange:s,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"Medium (Default)"}),e.jsx(n,{options:o,value:a,onChange:u,size:"md"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"Large"}),e.jsx(n,{options:o,value:d,onChange:S,size:"lg"})]})]})}},b={render:()=>{const[t,s]=r.useState("1"),[a,u]=r.useState("list");return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"View Toggle (3 options)"}),e.jsx(n,{options:o,value:t,onChange:s})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"View Mode (4 options)"}),e.jsx(n,{options:X,value:a,onChange:u})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"Full Width"}),e.jsx(n,{options:o,value:t,onChange:s,fullWidth:!0})]})]})}};var O,y,N;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("1");
    return <SegmentedControl {...args} value={value} onChange={setValue} />;
  },
  args: {
    options: threeOptions
  }
}`,...(N=(y=m.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var L,w,z;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("1");
    return <SegmentedControl {...args} value={value} onChange={setValue} />;
  },
  args: {
    options: twoOptions
  }
}`,...(z=(w=c.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var W,M,_;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("2");
    return <SegmentedControl {...args} value={value} onChange={setValue} />;
  },
  args: {
    options: threeOptions
  }
}`,...(_=(M=p.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var D,F,q;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("list");
    return <SegmentedControl {...args} value={value} onChange={setValue} />;
  },
  args: {
    options: fourOptions
  }
}`,...(q=(F=g.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var T,k,E;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("1");
    return <SegmentedControl {...args} value={value} onChange={setValue} />;
  },
  args: {
    options: threeOptions,
    fullWidth: true
  }
}`,...(E=(k=v.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var I,A,R;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("2");
    return <SegmentedControl {...args} value={value} onChange={setValue} />;
  },
  args: {
    options: threeOptions,
    disabled: true
  }
}`,...(R=(A=f.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var $,G,K;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("1");
    return <SegmentedControl {...args} value={value} onChange={setValue} />;
  },
  args: {
    options: [{
      value: "1",
      label: "Label"
    }, {
      value: "2",
      label: "Label",
      disabled: true
    }, {
      value: "3",
      label: "Label"
    }]
  }
}`,...(K=(G=x.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var B,H,J;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [valueSmall, setValueSmall] = useState("1");
    const [valueMedium, setValueMedium] = useState("2");
    const [valueLarge, setValueLarge] = useState("3");
    return <div className="space-y-4">
                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">Small</p>
                    <SegmentedControl options={threeOptions} value={valueSmall} onChange={setValueSmall} size="sm" />
                </div>
                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">Medium (Default)</p>
                    <SegmentedControl options={threeOptions} value={valueMedium} onChange={setValueMedium} size="md" />
                </div>
                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">Large</p>
                    <SegmentedControl options={threeOptions} value={valueLarge} onChange={setValueLarge} size="lg" />
                </div>
            </div>;
  }
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var P,Q,U;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState("1");
    const [value2, setValue2] = useState("list");
    return <div className="space-y-6">
                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">View Toggle (3 options)</p>
                    <SegmentedControl options={threeOptions} value={value1} onChange={setValue1} />
                </div>

                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">View Mode (4 options)</p>
                    <SegmentedControl options={fourOptions} value={value2} onChange={setValue2} />
                </div>

                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">Full Width</p>
                    <SegmentedControl options={threeOptions} value={value1} onChange={setValue1} fullWidth />
                </div>
            </div>;
  }
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const de=["Default","TwoOptions","ThreeOptions","FourOptions","FullWidth","Disabled","WithDisabledOption","Sizes","AllVariants"];export{b as AllVariants,m as Default,f as Disabled,g as FourOptions,v as FullWidth,h as Sizes,p as ThreeOptions,c as TwoOptions,x as WithDisabledOption,de as __namedExportsOrder,ue as default};
