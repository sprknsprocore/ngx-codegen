import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-Dz3UJJSw.js";import{c as x}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const r=t.forwardRef(function({className:n,value:a=0,min:l=0,max:o=100,step:m=1,onChange:c,showTicks:p=!1,tickInterval:Q,showLabel:U=!1,customLabels:u,showMinMax:y=!0,disabled:M,...X},Y){const[h,j]=t.useState(a),Z=t.useRef(null);t.useEffect(()=>{j(a)},[a]);const ee=i=>{const d=Number(i.target.value);j(d),c==null||c(d)},k=(h-l)/(o-l)*100,N=Q||m,ae=p?Array.from({length:Math.floor((o-l)/N)+1},(i,d)=>l+d*N):[];return e.jsxs("div",{className:x("w-full",n),children:[e.jsxs("div",{className:"relative px-1",children:[e.jsx("div",{ref:Z,className:"relative h-1 bg-bg-tertiary rounded-full",children:e.jsx("div",{className:"absolute h-full bg-bg-brand rounded-full",style:{width:`${k}%`}})}),p&&e.jsx("div",{className:"absolute inset-x-1 top-0 h-1 flex justify-between items-center pointer-events-none",children:ae.map(i=>e.jsx("div",{className:x("w-0.5 h-2 rounded-full",i<=h?"bg-bg-brand":"bg-border-default")},i))}),e.jsx("input",{ref:Y,type:"range",min:l,max:o,step:m,value:h,onChange:ee,disabled:M,className:x("absolute inset-0 w-full opacity-0 cursor-pointer disabled:cursor-not-allowed","appearance-none"),style:{WebkitAppearance:"none",MozAppearance:"none"},...X}),e.jsx("div",{className:x("absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-bg-brand bg-bg-canvas shadow-2 pointer-events-none transition-transform",M?"opacity-50":"hover:scale-110"),style:{left:`calc(${k}% - 8px)`},children:U&&e.jsx("div",{className:"absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-bg-reversed text-fg-reversed text-sm rounded whitespace-nowrap",children:h})})]}),(y||u)&&e.jsxs("div",{className:"relative mt-2 px-1",children:[e.jsxs("div",{className:"flex justify-between text-sm text-fg-secondary",children:[y&&e.jsx("span",{children:(u==null?void 0:u[l])??l}),y&&e.jsx("span",{children:(u==null?void 0:u[o])??o})]}),u&&e.jsx("div",{className:"relative h-4",children:Object.entries(u).map(([i,d])=>{const se=(Number(i)-l)/(o-l)*100;return e.jsx("span",{className:"absolute text-sm text-fg-secondary -translate-x-1/2",style:{left:`${se}%`},children:d},i)})})]})]})});try{r.displayName="Slider",r.__docgenInfo={description:"",displayName:"Slider",props:{value:{defaultValue:{value:"0"},description:"Current value of the slider",name:"value",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"Minimum value",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Maximum value",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"Step increment",name:"step",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"Callback when value changes",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},showTicks:{defaultValue:{value:"false"},description:"Show tick marks",name:"showTicks",required:!1,type:{name:"boolean"}},tickInterval:{defaultValue:null,description:"Tick interval (defaults to step)",name:"tickInterval",required:!1,type:{name:"number"}},showLabel:{defaultValue:{value:"false"},description:"Show value label above handle",name:"showLabel",required:!1,type:{name:"boolean"}},customLabels:{defaultValue:null,description:"Custom labels for specific values",name:"customLabels",required:!1,type:{name:"Record<number, string>"}},showMinMax:{defaultValue:{value:"true"},description:"Show min/max labels",name:"showMinMax",required:!1,type:{name:"boolean"}}}}}catch{}const oe={title:"Components/Slider",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{value:{control:{type:"number"},description:"Current value of the slider"},min:{control:{type:"number"},description:"Minimum value"},max:{control:{type:"number"},description:"Maximum value"},step:{control:{type:"number"},description:"Step increment"},showTicks:{control:{type:"boolean"},description:"Show tick marks"},showLabel:{control:{type:"boolean"},description:"Show value label above handle"},showMinMax:{control:{type:"boolean"},description:"Show min/max labels"},disabled:{control:{type:"boolean"},description:"Disabled state"}}},v={render:s=>{const[n,a]=t.useState(50);return e.jsx(r,{...s,value:n,onChange:a})},args:{min:0,max:100,step:1,showMinMax:!0}},f={render:s=>{const[n,a]=t.useState(50);return e.jsx(r,{...s,value:n,onChange:a})},args:{min:0,max:100,step:10,showTicks:!0,showMinMax:!0}},g={render:s=>{const[n,a]=t.useState(50);return e.jsx(r,{...s,value:n,onChange:a})},args:{min:0,max:100,step:1,showLabel:!0,showMinMax:!0}},b={render:s=>{const[n,a]=t.useState(3);return e.jsx("div",{className:"space-y-8",children:e.jsx(r,{...s,value:n,onChange:a,min:0,max:6,step:1,showTicks:!0,customLabels:{0:"Mon",1:"Tue",2:"Wed",3:"Thu",4:"Fri",5:"Sat",6:"Sun"}})})},args:{}},S={render:s=>{const[n,a]=t.useState(2);return e.jsx(r,{...s,value:n,onChange:a})},args:{min:0,max:5,step:1,showTicks:!0,showMinMax:!0}},w={render:s=>{const[n,a]=t.useState(60);return e.jsx(r,{...s,value:n,onChange:a})},args:{min:0,max:100,step:1,disabled:!0,showMinMax:!0}},V={render:()=>{const[s,n]=t.useState(50),[a,l]=t.useState(50),[o,m]=t.useState(60),[c,p]=t.useState(3);return e.jsxs("div",{className:"space-y-8 max-w-md",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-3",children:"Basic Slider"}),e.jsx(r,{value:s,onChange:n,min:0,max:100,step:1,showMinMax:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-3",children:"With Ticks"}),e.jsx(r,{value:a,onChange:l,min:0,max:100,step:10,showTicks:!0,showMinMax:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-3",children:"With Label"}),e.jsx(r,{value:o,onChange:m,min:0,max:100,step:1,showLabel:!0,showMinMax:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-3",children:"Days of Week"}),e.jsx(r,{value:c,onChange:p,min:0,max:6,step:1,showTicks:!0,customLabels:{0:"Mon",1:"Tue",2:"Wed",3:"Thu",4:"Fri",5:"Sat",6:"Sun"}})]})]})}};var C,T,W;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(50);
    return <Slider {...args} value={value} onChange={setValue} />;
  },
  args: {
    min: 0,
    max: 100,
    step: 1,
    showMinMax: true
  }
}`,...(W=(T=v.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var _,q,D;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(50);
    return <Slider {...args} value={value} onChange={setValue} />;
  },
  args: {
    min: 0,
    max: 100,
    step: 10,
    showTicks: true,
    showMinMax: true
  }
}`,...(D=(q=f.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var L,R,A;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(50);
    return <Slider {...args} value={value} onChange={setValue} />;
  },
  args: {
    min: 0,
    max: 100,
    step: 1,
    showLabel: true,
    showMinMax: true
  }
}`,...(A=(R=g.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var E,F,I;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(3);
    return <div className="space-y-8">
                <Slider {...args} value={value} onChange={setValue} min={0} max={6} step={1} showTicks customLabels={{
        0: "Mon",
        1: "Tue",
        2: "Wed",
        3: "Thu",
        4: "Fri",
        5: "Sat",
        6: "Sun"
      }} />
            </div>;
  },
  args: {}
}`,...(I=(F=b.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var $,B,O;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(2);
    return <Slider {...args} value={value} onChange={setValue} />;
  },
  args: {
    min: 0,
    max: 5,
    step: 1,
    showTicks: true,
    showMinMax: true
  }
}`,...(O=(B=S.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var z,G,H;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(60);
    return <Slider {...args} value={value} onChange={setValue} />;
  },
  args: {
    min: 0,
    max: 100,
    step: 1,
    disabled: true,
    showMinMax: true
  }
}`,...(H=(G=w.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,P;V.parameters={...V.parameters,docs:{...(J=V.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState(50);
    const [value2, setValue2] = useState(50);
    const [value3, setValue3] = useState(60);
    const [value4, setValue4] = useState(3);
    return <div className="space-y-8 max-w-md">
                <div>
                    <p className="text-sm font-medium text-fg-default mb-3">Basic Slider</p>
                    <Slider value={value1} onChange={setValue1} min={0} max={100} step={1} showMinMax />
                </div>

                <div>
                    <p className="text-sm font-medium text-fg-default mb-3">With Ticks</p>
                    <Slider value={value2} onChange={setValue2} min={0} max={100} step={10} showTicks showMinMax />
                </div>

                <div>
                    <p className="text-sm font-medium text-fg-default mb-3">With Label</p>
                    <Slider value={value3} onChange={setValue3} min={0} max={100} step={1} showLabel showMinMax />
                </div>

                <div>
                    <p className="text-sm font-medium text-fg-default mb-3">Days of Week</p>
                    <Slider value={value4} onChange={setValue4} min={0} max={6} step={1} showTicks customLabels={{
          0: "Mon",
          1: "Tue",
          2: "Wed",
          3: "Thu",
          4: "Fri",
          5: "Sat",
          6: "Sun"
        }} />
                </div>
            </div>;
  }
}`,...(P=(K=V.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};const ie=["Default","WithTicks","WithLabel","WithCustomLabels","SmallRange","Disabled","AllVariants"];export{V as AllVariants,v as Default,w as Disabled,S as SmallRange,b as WithCustomLabels,g as WithLabel,f as WithTicks,ie as __namedExportsOrder,oe as default};
