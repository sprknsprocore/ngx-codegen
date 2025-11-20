import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-Dz3UJJSw.js";import{c as s}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const a=b.forwardRef(function({className:m,label:w,size:G="md",checked:k,defaultChecked:S,onChange:h,disabled:p,id:H,...J},K){const Q=b.useId(),f=H||Q,X=Y=>{h==null||h(Y.target.checked)},g={sm:{track:"w-8 h-4",thumb:"w-3 h-3",translate:"translate-x-4"},md:{track:"w-10 h-5",thumb:"w-4 h-4",translate:"translate-x-5"},lg:{track:"w-12 h-6",thumb:"w-5 h-5",translate:"translate-x-6"}}[G];return e.jsxs("div",{className:s("inline-flex items-center gap-3",m),children:[e.jsxs("label",{htmlFor:f,className:s("relative inline-block flex-shrink-0 rounded-full transition-colors cursor-pointer",g.track,p&&"opacity-50 cursor-not-allowed",k||S?"bg-bg-brand":"bg-bg-tertiary"),children:[e.jsx("input",{ref:K,id:f,type:"checkbox",className:"sr-only peer",checked:k,defaultChecked:S,onChange:X,disabled:p,...J}),e.jsx("span",{className:s("absolute left-0.5 top-1/2 -translate-y-1/2 rounded-full bg-bg-canvas transition-transform","peer-checked:"+g.translate,g.thumb)})]}),w&&e.jsx("label",{htmlFor:f,className:s("text-sm text-fg-default cursor-pointer select-none",p&&"opacity-50 cursor-not-allowed"),children:w})]})});try{a.displayName="Switch",a.__docgenInfo={description:"",displayName:"Switch",props:{label:{defaultValue:null,description:"Label text",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},checked:{defaultValue:null,description:"Whether the switch is checked",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"Default checked state",name:"defaultChecked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"On change handler",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}}}}}catch{}const se={title:"Components/Switch",component:a,argTypes:{size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},checked:{control:"boolean"}}},r={args:{label:"Noun (OR) Sentence written as a command without punctuation",size:"md"}},n={args:{label:"Noun (OR) Sentence written as a command without punctuation",defaultChecked:!0}},c={args:{label:"Noun (OR) Sentence written as a command without punctuation",defaultChecked:!1}},l={args:{label:"Noun (OR) Sentence written as a command without punctuation",disabled:!0,defaultChecked:!1}},o={args:{label:"Noun (OR) Sentence written as a command without punctuation",disabled:!0,defaultChecked:!0}},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{size:"sm",label:"Small Switch",defaultChecked:!0}),e.jsx(a,{size:"md",label:"Medium Switch (Default)",defaultChecked:!0}),e.jsx(a,{size:"lg",label:"Large Switch",defaultChecked:!0})]})},i={args:{defaultChecked:!0}},u={render:()=>{const[t,m]=b.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{label:"Controlled switch",checked:t,onChange:m}),e.jsxs("p",{className:"text-sm text-fg-secondary",children:["Switch is ",t?"ON":"OFF"]})]})}};var x,C,N;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Noun (OR) Sentence written as a command without punctuation",
    size: "md"
  }
}`,...(N=(C=r.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var y,v,z;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Noun (OR) Sentence written as a command without punctuation",
    defaultChecked: true
  }
}`,...(z=(v=n.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var O,j,R;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: "Noun (OR) Sentence written as a command without punctuation",
    defaultChecked: false
  }
}`,...(R=(j=c.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var _,D,F;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "Noun (OR) Sentence written as a command without punctuation",
    disabled: true,
    defaultChecked: false
  }
}`,...(F=(D=l.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var q,L,V;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Noun (OR) Sentence written as a command without punctuation",
    disabled: true,
    defaultChecked: true
  }
}`,...(V=(L=o.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var M,E,I;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Switch size="sm" label="Small Switch" defaultChecked />
      <Switch size="md" label="Medium Switch (Default)" defaultChecked />
      <Switch size="lg" label="Large Switch" defaultChecked />
    </div>
}`,...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var W,P,U;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(U=(P=i.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var T,A,B;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div className="flex flex-col gap-4">
        <Switch label="Controlled switch" checked={checked} onChange={setChecked} />
        <p className="text-sm text-fg-secondary">
          Switch is {checked ? "ON" : "OFF"}
        </p>
      </div>;
  }
}`,...(B=(A=u.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const re=["Playground","Checked","Unchecked","Disabled","DisabledChecked","Sizes","WithoutLabel","Controlled"];export{n as Checked,u as Controlled,l as Disabled,o as DisabledChecked,r as Playground,d as Sizes,c as Unchecked,i as WithoutLabel,re as __namedExportsOrder,se as default};
