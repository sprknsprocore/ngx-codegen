import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-Dz3UJJSw.js";import{c as x}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const l=s.forwardRef(function({className:r,label:i,helperText:m,validationState:p="none",required:b,value:n,onChange:t,min:u,max:d,step:P=1,showButtons:q=!0,disabled:c,...ue},de){const v=p==="invalid",h=p==="valid",ce=()=>{if(c)return;const o=(typeof n=="number"?n:parseFloat(String(n))||0)+P;d!==void 0&&o>d||t==null||t(o)},ie=()=>{if(c)return;const o=(typeof n=="number"?n:parseFloat(String(n))||0)-P;u!==void 0&&o<u||t==null||t(o)},me=T=>{const o=T.target.value;if(o===""||o==="-")t==null||t(o);else{const C=parseFloat(o);isNaN(C)||t==null||t(C)}};return e.jsxs("div",{className:"w-full",children:[i&&e.jsxs("label",{className:"block text-sm font-medium text-fg-default mb-1.5",children:[i,b&&e.jsx("span",{className:"text-fg-error ml-0.5",children:"*"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{ref:de,type:"text",inputMode:"numeric",value:n??"",onChange:me,min:u,max:d,step:P,disabled:c,required:b,className:x("w-full h-10 px-3 text-md text-fg-default bg-bg-canvas border rounded","transition-colors placeholder:text-fg-disabled","focus:outline-none focus:ring-2 focus:ring-border-focus focus:border-border-focus","disabled:bg-bg-tertiary disabled:text-fg-disabled disabled:cursor-not-allowed",v&&"border-border-error focus:ring-border-error focus:border-border-error",h&&"border-border-success focus:ring-border-success focus:border-border-success",!v&&!h&&"border-border-default hover:border-border-hover",q&&"pr-10",r),...ue}),q&&e.jsxs("div",{className:"absolute right-1 top-1/2 -translate-y-1/2 flex flex-col",children:[e.jsx("button",{type:"button",onClick:ce,disabled:c||d!==void 0&&Number(n)>=d,className:x("w-6 h-4 flex items-center justify-center text-fg-secondary hover:text-fg-default","disabled:text-fg-disabled disabled:cursor-not-allowed","transition-colors"),"aria-label":"Increment",children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e.jsx("path",{d:"M6 3L6 9M3 6L9 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}),e.jsx("button",{type:"button",onClick:ie,disabled:c||u!==void 0&&Number(n)<=u,className:x("w-6 h-4 flex items-center justify-center text-fg-secondary hover:text-fg-default","disabled:text-fg-disabled disabled:cursor-not-allowed","transition-colors"),"aria-label":"Decrement",children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e.jsx("path",{d:"M3 6L9 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})]}),m&&e.jsx("div",{className:x("mt-1.5 text-sm",v&&"text-fg-error",h&&"text-fg-success",!v&&!h&&"text-fg-secondary"),children:m})]})});try{l.displayName="NumberInput",l.__docgenInfo={description:"",displayName:"NumberInput",props:{label:{defaultValue:null,description:"Input label",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text or error message",name:"helperText",required:!1,type:{name:"string"}},validationState:{defaultValue:{value:"none"},description:"Validation state",name:"validationState",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"invalid"'},{value:'"valid"'}]}},required:{defaultValue:null,description:"Whether the label is required (shows asterisk)",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Current value",name:"value",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"Change handler",name:"onChange",required:!1,type:{name:"((value: string | number) => void)"}},min:{defaultValue:null,description:"Minimum value",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"Maximum value",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"Step increment/decrement",name:"step",required:!1,type:{name:"number"}},showButtons:{defaultValue:{value:"true"},description:"Show increment/decrement buttons",name:"showButtons",required:!1,type:{name:"boolean"}}}}}catch{}const xe={title:"Components/NumberInput",component:l,tags:["autodocs"],argTypes:{validationState:{control:"select",options:["none","invalid","valid"]},showButtons:{control:"boolean"}}},f={render:()=>{const[a,r]=s.useState(0);return e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"Placeholder",value:a,onChange:r})})}},g={render:()=>{const[a,r]=s.useState(42);return e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"Placeholder",value:a,onChange:r})})}},N={render:()=>{const[a,r]=s.useState(5);return e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label (min: 0, max: 10)",placeholder:"Placeholder",value:a,onChange:r,min:0,max:10,helperText:"Value must be between 0 and 10"})})}},V={render:()=>{const[a,r]=s.useState(0);return e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label (step: 5)",placeholder:"Placeholder",value:a,onChange:r,step:5,helperText:"Increments by 5"})})}},S={render:()=>{const[a,r]=s.useState(150);return e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"Placeholder",value:a,onChange:r,validationState:"invalid",helperText:"Error Message/Helper Text"})})}},w={render:()=>{const[a,r]=s.useState(42);return e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"Placeholder",value:a,onChange:r,validationState:"valid",helperText:"Success message"})})}},j={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"Placeholder",value:42,disabled:!0})})},L={render:()=>{const[a,r]=s.useState("");return e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"Placeholder",value:a,onChange:r,required:!0})})}},y={render:()=>{const[a,r]=s.useState(42);return e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"Placeholder",value:a,onChange:r,showButtons:!1})})}},I={render:()=>{const[a,r]=s.useState(""),[i,m]=s.useState(42),[p,b]=s.useState(150),[n,t]=s.useState(99);return e.jsxs("div",{className:"flex flex-col gap-6 p-6",children:[e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"Placeholder",value:a,onChange:r})}),e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"Placeholder",value:i,onChange:m,helperText:"Helper text"})}),e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"Placeholder",value:p,onChange:b,validationState:"invalid",helperText:"Error Message/Helper Text"})}),e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"Placeholder",value:n,onChange:t,validationState:"valid",helperText:"Success message"})}),e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"Placeholder",value:42,disabled:!0})})]})}};var M,W,k;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>(0);
    return <div className="w-64">
                <NumberInput label="Label" placeholder="Placeholder" value={value} onChange={setValue} />
            </div>;
  }
}`,...(k=(W=f.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var _,B,E;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>(42);
    return <div className="w-64">
                <NumberInput label="Label" placeholder="Placeholder" value={value} onChange={setValue} />
            </div>;
  }
}`,...(E=(B=g.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var H,D,R;N.parameters={...N.parameters,docs:{...(H=N.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>(5);
    return <div className="w-64">
                <NumberInput label="Label (min: 0, max: 10)" placeholder="Placeholder" value={value} onChange={setValue} min={0} max={10} helperText="Value must be between 0 and 10" />
            </div>;
  }
}`,...(R=(D=N.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var F,A,O;V.parameters={...V.parameters,docs:{...(F=V.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>(0);
    return <div className="w-64">
                <NumberInput label="Label (step: 5)" placeholder="Placeholder" value={value} onChange={setValue} step={5} helperText="Increments by 5" />
            </div>;
  }
}`,...(O=(A=V.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var z,G,J;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>(150);
    return <div className="w-64">
                <NumberInput label="Label" placeholder="Placeholder" value={value} onChange={setValue} validationState="invalid" helperText="Error Message/Helper Text" />
            </div>;
  }
}`,...(J=(G=S.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>(42);
    return <div className="w-64">
                <NumberInput label="Label" placeholder="Placeholder" value={value} onChange={setValue} validationState="valid" helperText="Success message" />
            </div>;
  }
}`,...(U=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    return <div className="w-64">
                <NumberInput label="Label" placeholder="Placeholder" value={42} disabled />
            </div>;
  }
}`,...(Z=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;L.parameters={...L.parameters,docs:{...($=L.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>("");
    return <div className="w-64">
                <NumberInput label="Label" placeholder="Placeholder" value={value} onChange={setValue} required />
            </div>;
  }
}`,...(ae=(ee=L.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,le,te;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>(42);
    return <div className="w-64">
                <NumberInput label="Label" placeholder="Placeholder" value={value} onChange={setValue} showButtons={false} />
            </div>;
  }
}`,...(te=(le=y.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var se,ne,oe;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<number | string>("");
    const [value2, setValue2] = useState<number | string>(42);
    const [value3, setValue3] = useState<number | string>(150);
    const [value4, setValue4] = useState<number | string>(99);
    return <div className="flex flex-col gap-6 p-6">
                <div className="w-64">
                    <NumberInput label="Label" placeholder="Placeholder" value={value1} onChange={setValue1} />
                </div>
                <div className="w-64">
                    <NumberInput label="Label" placeholder="Placeholder" value={value2} onChange={setValue2} helperText="Helper text" />
                </div>
                <div className="w-64">
                    <NumberInput label="Label" placeholder="Placeholder" value={value3} onChange={setValue3} validationState="invalid" helperText="Error Message/Helper Text" />
                </div>
                <div className="w-64">
                    <NumberInput label="Label" placeholder="Placeholder" value={value4} onChange={setValue4} validationState="valid" helperText="Success message" />
                </div>
                <div className="w-64">
                    <NumberInput label="Label" placeholder="Placeholder" value={42} disabled />
                </div>
            </div>;
  }
}`,...(oe=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const fe=["Default","WithValue","WithMinMax","WithStep","Invalid","Valid","Disabled","Required","WithoutButtons","AllStates"];export{I as AllStates,f as Default,j as Disabled,S as Invalid,L as Required,w as Valid,N as WithMinMax,V as WithStep,g as WithValue,y as WithoutButtons,fe as __namedExportsOrder,xe as default};
