import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-Dz3UJJSw.js";import{c}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const a=o.forwardRef(function({className:ee,label:f,description:k,validationState:v="none",indeterminate:r=!1,disabled:t,size:ae="md",...w},re){const s=v==="error",C=v==="success",n=o.useRef(null);o.useImperativeHandle(re,()=>n.current),o.useEffect(()=>{n.current&&(n.current.indeterminate=r)},[r]);const te=ae==="sm"?"w-4 h-4":"w-5 h-5";return e.jsxs("label",{className:c("inline-flex items-start gap-2",t?"cursor-not-allowed opacity-50":"cursor-pointer",ee),children:[e.jsx("div",{className:"relative flex items-center",children:e.jsx("input",{ref:n,type:"checkbox",disabled:t,className:c(te,"rounded border-2 bg-bg-canvas text-bg-brand transition-colors","focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2","checked:bg-bg-brand checked:border-bg-brand","disabled:cursor-not-allowed disabled:opacity-50",s&&"border-state-danger focus:ring-state-danger",C&&"border-state-success focus:ring-state-success",!s&&!C&&"border-border-default","appearance-none","cursor-pointer"),style:{backgroundImage:w.checked||r?`url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E${r?"%3Cpath d='M4 8h8' stroke='white' stroke-width='2' stroke-linecap='round'/%3E":"%3Cpath d='M13 4L6 11L3 8' stroke='white' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E"}%3C/svg%3E")`:"none",backgroundSize:"100% 100%",backgroundPosition:"center",backgroundRepeat:"no-repeat"},...w})}),(f||k)&&e.jsxs("div",{className:"flex-1 min-w-0 pt-0.5",children:[f&&e.jsx("div",{className:c("text-sm font-medium",s?"text-state-danger":"text-fg-default",t&&"text-fg-disabled"),children:f}),k&&e.jsx("div",{className:c("text-sm mt-0.5",s?"text-state-danger":"text-fg-secondary",t&&"text-fg-disabled"),children:k})]})]})});try{a.displayName="Checkbox",a.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"Checkbox label",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Helper or description text",name:"description",required:!1,type:{name:"string"}},validationState:{defaultValue:{value:"none"},description:"Visual state of checkbox",name:"validationState",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"none"'},{value:'"error"'}]}},indeterminate:{defaultValue:{value:"false"},description:"Indeterminate state (partially checked)",name:"indeterminate",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}}}}}catch{}const ie={title:"Components/Checkbox",component:a,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{label:"Checkbox label"}},l={args:{label:"Accept terms and conditions",description:"I agree to the terms and conditions and privacy policy"}},d={args:{label:"Checked checkbox",checked:!0}},u={args:{label:"Indeterminate checkbox",indeterminate:!0}},p={args:{label:"Disabled checkbox",disabled:!0}},m={args:{label:"Disabled checked",disabled:!0,checked:!0}},b={args:{label:"Error state",description:"This field is required",validationState:"error"}},h={args:{label:"Success state",description:"Verified successfully",validationState:"success"}},g={args:{label:"Small checkbox",size:"sm"}},x={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Option 1",description:"Complete sentence written as a command without punctuation"}),e.jsx(a,{label:"Option 2",description:"Complete sentence written as a command without punctuation"}),e.jsx(a,{label:"Option 3",description:"Complete sentence written as a command without punctuation",checked:!0}),e.jsx(a,{label:"Option 4",description:"Complete sentence written as a command without punctuation"})]})};var S,y,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Checkbox label"
  }
}`,...(j=(y=i.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var E,D,I;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Accept terms and conditions",
    description: "I agree to the terms and conditions and privacy policy"
  }
}`,...(I=(D=l.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var N,_,O;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: "Checked checkbox",
    checked: true
  }
}`,...(O=(_=d.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var V,q,z;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: "Indeterminate checkbox",
    indeterminate: true
  }
}`,...(z=(q=u.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var R,A,G;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: "Disabled checkbox",
    disabled: true
  }
}`,...(G=(A=p.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var H,L,M;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: "Disabled checked",
    disabled: true,
    checked: true
  }
}`,...(M=(L=m.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var T,W,B;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Error state",
    description: "This field is required",
    validationState: "error"
  }
}`,...(B=(W=b.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var P,$,F;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: "Success state",
    description: "Verified successfully",
    validationState: "success"
  }
}`,...(F=($=h.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: "Small checkbox",
    size: "sm"
  }
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
            <Checkbox label="Option 1" description="Complete sentence written as a command without punctuation" />
            <Checkbox label="Option 2" description="Complete sentence written as a command without punctuation" />
            <Checkbox label="Option 3" description="Complete sentence written as a command without punctuation" checked />
            <Checkbox label="Option 4" description="Complete sentence written as a command without punctuation" />
        </div>
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const le=["Default","WithDescription","Checked","Indeterminate","Disabled","DisabledChecked","Error","Success","Small","Group"];export{d as Checked,i as Default,p as Disabled,m as DisabledChecked,b as Error,x as Group,u as Indeterminate,g as Small,h as Success,l as WithDescription,le as __namedExportsOrder,ie as default};
