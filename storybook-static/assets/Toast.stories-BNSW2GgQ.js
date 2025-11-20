import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as Z}from"./index-Dz3UJJSw.js";import{c as z}from"./index-Dp3B9jqt.js";import{c as F}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const G=z("flex items-start gap-3 rounded-sm px-4 py-3 text-fg-onbrand shadow-lg min-w-80 max-w-md",{variants:{variant:{success:"bg-state-success",error:"bg-state-danger",info:"bg-state-info",warning:"bg-state-warn"}},defaultVariants:{variant:"info"}}),J=()=>s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"shrink-0 mt-0.5",children:s.jsx("path",{d:"M16.25 5.625L7.5 14.375L3.75 10.625",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),K=()=>s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"shrink-0 mt-0.5",children:[s.jsx("circle",{cx:"10",cy:"10",r:"7.5",stroke:"currentColor",strokeWidth:"2"}),s.jsx("path",{d:"M10 6.25V10.625",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),s.jsx("circle",{cx:"10",cy:"13.125",r:"0.625",fill:"currentColor"})]}),P=()=>s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"shrink-0 mt-0.5",children:[s.jsx("circle",{cx:"10",cy:"10",r:"7.5",stroke:"currentColor",strokeWidth:"2"}),s.jsx("path",{d:"M10 9.375V13.75",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),s.jsx("circle",{cx:"10",cy:"6.875",r:"0.625",fill:"currentColor"})]}),Q=()=>s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"shrink-0 mt-0.5",children:[s.jsx("path",{d:"M10 3.75L17.5 16.25H2.5L10 3.75Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M10 8.75V11.25",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),s.jsx("circle",{cx:"10",cy:"13.75",r:"0.625",fill:"currentColor"})]}),U=()=>s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M12 4L4 12M4 4L12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),e=Z.forwardRef(function({className:q,variant:m="info",message:R,onClose:A,dismissible:D=!0,...O},X){const H=m?{success:s.jsx(J,{}),error:s.jsx(K,{}),info:s.jsx(P,{}),warning:s.jsx(Q,{})}[m]:null;return s.jsxs("div",{ref:X,className:F(G({variant:m}),q),role:"alert",...O,children:[H,s.jsx("div",{className:"flex-1 text-sm leading-5",children:R}),D&&s.jsx("button",{type:"button",onClick:A,className:"shrink-0 p-0.5 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded","aria-label":"Close notification",children:s.jsx(U,{})})]})});try{e.displayName="Toast",e.__docgenInfo={description:"",displayName:"Toast",props:{message:{defaultValue:null,description:"The message to display",name:"message",required:!0,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"Optional callback when close button is clicked",name:"onClose",required:!1,type:{name:"(() => void)"}},dismissible:{defaultValue:{value:"true"},description:"Whether to show the close button",name:"dismissible",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"info"},description:"",name:"variant",required:!1,type:{name:'"success" | "error" | "info" | "warning" | null'}}}}}catch{}const os={title:"Components/Toast",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["success","error","info","warning"]},dismissible:{control:"boolean"}}},a={args:{variant:"success",message:"The [item] was successfully created."}},r={args:{variant:"error",message:"Sorry, the [item] couldn't be created. Try again."}},o={args:{variant:"info",message:"This is an informational message."}},t={args:{variant:"warning",message:"This is a warning message."}},n={args:{variant:"success",message:"This is a longer message that demonstrates how the toast handles multiple lines of text. The toast should expand to accommodate the content while maintaining proper spacing and readability."}},i={args:{variant:"info",message:"This toast cannot be dismissed.",dismissible:!1}},c={render:()=>s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsx(e,{variant:"success",message:"The [item] was successfully created."}),s.jsx(e,{variant:"error",message:"Sorry, the [item] couldn't be created. Try again."}),s.jsx(e,{variant:"info",message:"This is an informational message."}),s.jsx(e,{variant:"warning",message:"This is a warning message."})]})},l={args:{variant:"success",message:"Click the X to dismiss (check console)",onClose:()=>console.log("Toast dismissed!")}};var d,g,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "success",
    message: "The [item] was successfully created."
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var p,h,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "error",
    message: "Sorry, the [item] couldn't be created. Try again."
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,w,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "info",
    message: "This is an informational message."
  }
}`,...(v=(w=o.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var k,b,T;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    message: "This is a warning message."
  }
}`,...(T=(b=t.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var j,y,C;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "success",
    message: "This is a longer message that demonstrates how the toast handles multiple lines of text. The toast should expand to accommodate the content while maintaining proper spacing and readability."
  }
}`,...(C=(y=n.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var L,S,N;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "info",
    message: "This toast cannot be dismissed.",
    dismissible: false
  }
}`,...(N=(S=i.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var W,M,V;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <Toast variant="success" message="The [item] was successfully created." />
            <Toast variant="error" message="Sorry, the [item] couldn't be created. Try again." />
            <Toast variant="info" message="This is an informational message." />
            <Toast variant="warning" message="This is a warning message." />
        </div>
}`,...(V=(M=c.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var _,I,E;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "success",
    message: "Click the X to dismiss (check console)",
    onClose: () => console.log("Toast dismissed!")
  }
}`,...(E=(I=l.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const ts=["Success","Error","Info","Warning","LongMessage","NotDismissible","AllVariants","WithCallback"];export{c as AllVariants,r as Error,o as Info,n as LongMessage,i as NotDismissible,a as Success,t as Warning,l as WithCallback,ts as __namedExportsOrder,os as default};
