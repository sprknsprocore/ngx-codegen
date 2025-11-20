import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-Dz3UJJSw.js";import{c as g}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const l=s.forwardRef(function({className:r,label:o,helperText:c,validationState:d="none",required:i,value:t,onChange:n,currencySymbol:pe="$",locale:ye="en-US",showButtons:M=!0,min:v,max:b,step:$=.01,disabled:p,...ve},be){const h=d==="invalid",x=d==="valid",he=()=>{if(p)return;const u=typeof t=="number"?t:parseFloat(String(t))||0,m=Math.round((u+$)*100)/100;b!==void 0&&m>b||n==null||n(m)},xe=()=>{if(p)return;const u=typeof t=="number"?t:parseFloat(String(t))||0,m=Math.round((u-$)*100)/100;v!==void 0&&m<v||n==null||n(m)},fe=u=>{const f=u.target.value.replace(/[^0-9.-]/g,"");if(f===""||f==="-")n==null||n(f);else{const k=parseFloat(f);isNaN(k)||n==null||n(k)}},ge=s.useMemo(()=>{if(t===""||t===void 0||t===null)return"";const u=typeof t=="number"?t:parseFloat(String(t));return isNaN(u)?"":u.toFixed(2)},[t]);return e.jsxs("div",{className:"w-full",children:[o&&e.jsxs("label",{className:"block text-sm font-medium text-fg-default mb-1.5",children:[o,i&&e.jsx("span",{className:"text-fg-error ml-0.5",children:"*"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("span",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-fg-default pointer-events-none",children:pe}),e.jsx("input",{ref:be,type:"text",inputMode:"decimal",value:ge,onChange:fe,disabled:p,required:i,className:g("w-full h-10 pl-7 pr-3 text-md text-fg-default bg-bg-canvas border rounded","transition-colors placeholder:text-fg-disabled","focus:outline-none focus:ring-2 focus:ring-border-focus focus:border-border-focus","disabled:bg-bg-tertiary disabled:text-fg-disabled disabled:cursor-not-allowed",h&&"border-border-error focus:ring-border-error focus:border-border-error",x&&"border-border-success focus:ring-border-success focus:border-border-success",!h&&!x&&"border-border-default hover:border-border-hover",M&&"pr-10",r),...ve}),M&&e.jsxs("div",{className:"absolute right-1 top-1/2 -translate-y-1/2 flex flex-col",children:[e.jsx("button",{type:"button",onClick:he,disabled:p||b!==void 0&&Number(t)>=b,className:g("w-6 h-4 flex items-center justify-center text-fg-secondary hover:text-fg-default","disabled:text-fg-disabled disabled:cursor-not-allowed","transition-colors"),"aria-label":"Increment",children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e.jsx("path",{d:"M6 3L6 9M3 6L9 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}),e.jsx("button",{type:"button",onClick:xe,disabled:p||v!==void 0&&Number(t)<=v,className:g("w-6 h-4 flex items-center justify-center text-fg-secondary hover:text-fg-default","disabled:text-fg-disabled disabled:cursor-not-allowed","transition-colors"),"aria-label":"Decrement",children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e.jsx("path",{d:"M3 6L9 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})]}),c&&e.jsx("div",{className:g("mt-1.5 text-sm",h&&"text-fg-error",x&&"text-fg-success",!h&&!x&&"text-fg-secondary"),children:c})]})});try{l.displayName="CurrencyInput",l.__docgenInfo={description:"",displayName:"CurrencyInput",props:{label:{defaultValue:null,description:"Input label",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text or error message",name:"helperText",required:!1,type:{name:"string"}},validationState:{defaultValue:{value:"none"},description:"Validation state",name:"validationState",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"invalid"'},{value:'"valid"'}]}},required:{defaultValue:null,description:"Whether the label is required (shows asterisk)",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Current value",name:"value",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"Change handler",name:"onChange",required:!1,type:{name:"((value: string | number) => void)"}},currencySymbol:{defaultValue:{value:"$"},description:"Currency symbol",name:"currencySymbol",required:!1,type:{name:"string"}},locale:{defaultValue:{value:"en-US"},description:"Locale for formatting",name:"locale",required:!1,type:{name:"string"}},showButtons:{defaultValue:{value:"true"},description:"Show increment/decrement buttons",name:"showButtons",required:!1,type:{name:"boolean"}},min:{defaultValue:null,description:"Minimum value",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"Maximum value",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"0.01"},description:"Step increment/decrement",name:"step",required:!1,type:{name:"number"}}}}}catch{}const je={title:"Components/CurrencyInput",component:l,tags:["autodocs"],argTypes:{validationState:{control:"select",options:["none","invalid","valid"]},showButtons:{control:"boolean"},currencySymbol:{control:"text"}}},y={render:()=>{const[a,r]=s.useState(0);return e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"0.00",value:a,onChange:r})})}},S={render:()=>{const[a,r]=s.useState(1234.56);return e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"0.00",value:a,onChange:r})})}},V={render:()=>{const[a,r]=s.useState(1234.56),[o,c]=s.useState(1234.56),[d,i]=s.useState(1234.56);return e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"USD",placeholder:"0.00",value:a,onChange:r,currencySymbol:"$"})}),e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"EUR",placeholder:"0.00",value:o,onChange:c,currencySymbol:"€"})}),e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"GBP",placeholder:"0.00",value:d,onChange:i,currencySymbol:"£"})})]})}},w={render:()=>{const[a,r]=s.useState(50);return e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label (min: $0, max: $100)",placeholder:"0.00",value:a,onChange:r,min:0,max:100,helperText:"Value must be between $0 and $100"})})}},N={render:()=>{const[a,r]=s.useState(0);return e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label (step: $10)",placeholder:"0.00",value:a,onChange:r,step:10,helperText:"Increments by $10"})})}},j={render:()=>{const[a,r]=s.useState(150.5);return e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"0.00",value:a,onChange:r,validationState:"invalid",helperText:"Error Message/Helper Text"})})}},C={render:()=>{const[a,r]=s.useState(42.99);return e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"0.00",value:a,onChange:r,validationState:"valid",helperText:"Success message"})})}},L={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"0.00",value:1234.56,disabled:!0})})},I={render:()=>{const[a,r]=s.useState("");return e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"0.00",value:a,onChange:r,required:!0})})}},T={render:()=>{const[a,r]=s.useState(1234.56);return e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"0.00",value:a,onChange:r,showButtons:!1})})}},q={render:()=>{const[a,r]=s.useState(""),[o,c]=s.useState(1234.56),[d,i]=s.useState(9999.99),[t,n]=s.useState(42.99);return e.jsxs("div",{className:"flex flex-col gap-6 p-6",children:[e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"0.00",value:a,onChange:r})}),e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"0.00",value:o,onChange:c,helperText:"Helper text"})}),e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"0.00",value:d,onChange:i,validationState:"invalid",helperText:"Error Message/Helper Text"})}),e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"0.00",value:t,onChange:n,validationState:"valid",helperText:"Success message"})}),e.jsx("div",{className:"w-64",children:e.jsx(l,{label:"Label",placeholder:"0.00",value:1234.56,disabled:!0})})]})}};var B,D,E;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>(0);
    return <div className="w-64">
                <CurrencyInput label="Label" placeholder="0.00" value={value} onChange={setValue} />
            </div>;
  }
}`,...(E=(D=y.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var _,W,H;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>(1234.56);
    return <div className="w-64">
                <CurrencyInput label="Label" placeholder="0.00" value={value} onChange={setValue} />
            </div>;
  }
}`,...(H=(W=S.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var R,U,F;V.parameters={...V.parameters,docs:{...(R=V.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<number | string>(1234.56);
    const [value2, setValue2] = useState<number | string>(1234.56);
    const [value3, setValue3] = useState<number | string>(1234.56);
    return <div className="flex flex-col gap-6">
                <div className="w-64">
                    <CurrencyInput label="USD" placeholder="0.00" value={value1} onChange={setValue1} currencySymbol="$" />
                </div>
                <div className="w-64">
                    <CurrencyInput label="EUR" placeholder="0.00" value={value2} onChange={setValue2} currencySymbol="€" />
                </div>
                <div className="w-64">
                    <CurrencyInput label="GBP" placeholder="0.00" value={value3} onChange={setValue3} currencySymbol="£" />
                </div>
            </div>;
  }
}`,...(F=(U=V.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var A,G,P;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>(50);
    return <div className="w-64">
                <CurrencyInput label="Label (min: $0, max: $100)" placeholder="0.00" value={value} onChange={setValue} min={0} max={100} helperText="Value must be between $0 and $100" />
            </div>;
  }
}`,...(P=(G=w.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var O,z,J;N.parameters={...N.parameters,docs:{...(O=N.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>(0);
    return <div className="w-64">
                <CurrencyInput label="Label (step: $10)" placeholder="0.00" value={value} onChange={setValue} step={10} helperText="Increments by $10" />
            </div>;
  }
}`,...(J=(z=N.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,Q,X;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>(150.5);
    return <div className="w-64">
                <CurrencyInput label="Label" placeholder="0.00" value={value} onChange={setValue} validationState="invalid" helperText="Error Message/Helper Text" />
            </div>;
  }
}`,...(X=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>(42.99);
    return <div className="w-64">
                <CurrencyInput label="Label" placeholder="0.00" value={value} onChange={setValue} validationState="valid" helperText="Success message" />
            </div>;
  }
}`,...(ee=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,le;L.parameters={...L.parameters,docs:{...(ae=L.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    return <div className="w-64">
                <CurrencyInput label="Label" placeholder="0.00" value={1234.56} disabled />
            </div>;
  }
}`,...(le=(re=L.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var te,se,ne;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>("");
    return <div className="w-64">
                <CurrencyInput label="Label" placeholder="0.00" value={value} onChange={setValue} required />
            </div>;
  }
}`,...(ne=(se=I.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ue,oe,ce;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>(1234.56);
    return <div className="w-64">
                <CurrencyInput label="Label" placeholder="0.00" value={value} onChange={setValue} showButtons={false} />
            </div>;
  }
}`,...(ce=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var de,ie,me;q.parameters={...q.parameters,docs:{...(de=q.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<number | string>("");
    const [value2, setValue2] = useState<number | string>(1234.56);
    const [value3, setValue3] = useState<number | string>(9999.99);
    const [value4, setValue4] = useState<number | string>(42.99);
    return <div className="flex flex-col gap-6 p-6">
                <div className="w-64">
                    <CurrencyInput label="Label" placeholder="0.00" value={value1} onChange={setValue1} />
                </div>
                <div className="w-64">
                    <CurrencyInput label="Label" placeholder="0.00" value={value2} onChange={setValue2} helperText="Helper text" />
                </div>
                <div className="w-64">
                    <CurrencyInput label="Label" placeholder="0.00" value={value3} onChange={setValue3} validationState="invalid" helperText="Error Message/Helper Text" />
                </div>
                <div className="w-64">
                    <CurrencyInput label="Label" placeholder="0.00" value={value4} onChange={setValue4} validationState="valid" helperText="Success message" />
                </div>
                <div className="w-64">
                    <CurrencyInput label="Label" placeholder="0.00" value={1234.56} disabled />
                </div>
            </div>;
  }
}`,...(me=(ie=q.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};const Ce=["Default","WithValue","DifferentCurrency","WithMinMax","CustomStep","Invalid","Valid","Disabled","Required","WithoutButtons","AllStates"];export{q as AllStates,N as CustomStep,y as Default,V as DifferentCurrency,L as Disabled,j as Invalid,I as Required,C as Valid,w as WithMinMax,S as WithValue,T as WithoutButtons,Ce as __namedExportsOrder,je as default};
