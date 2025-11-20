import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as B}from"./index-Dz3UJJSw.js";import{c as D}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const F={operational:{label:"All Systems Operational",color:"text-state-success bg-bg-success",icon:"✓"},loading:{label:"Checking Status...",color:"text-fg-secondary bg-bg-tertiary",icon:"⟳"},critical:{label:"Critical Issue",color:"text-state-danger bg-bg-error",icon:"!"},major:{label:"Major Outage",color:"text-state-danger bg-bg-error",icon:"!"},maintenance:{label:"Scheduled Maintenance",color:"text-state-info bg-state-selected",icon:"⚙"},minor:{label:"Minor Issue",color:"text-state-warn bg-bg-warning",icon:"⚠"}},u=B.forwardRef(function({className:P,status:R,message:T,onClick:m,...z},d){const l=F[R],g=m!==void 0,p=e.jsxs("div",{className:D("flex items-center gap-2 px-2 py-2 rounded-md transition-colors",l.color,g&&"cursor-pointer hover:opacity-80 focus-visible:ring-2 focus-visible:ring-border-focus",P),...z,children:[e.jsx("span",{className:"text-base",children:l.icon}),e.jsx("span",{className:"text-sm font-normal tracking-wide leading-5",children:T||l.label})]});return g?e.jsx("button",{ref:d,type:"button",onClick:m,className:"w-full text-left border-0 bg-transparent p-0",children:p}):e.jsx("div",{ref:d,className:"w-full",children:p})});try{u.displayName="SystemStatus",u.__docgenInfo={description:"",displayName:"SystemStatus",props:{status:{defaultValue:null,description:"Current system status",name:"status",required:!0,type:{name:"enum",value:[{value:'"loading"'},{value:'"operational"'},{value:'"critical"'},{value:'"major"'},{value:'"maintenance"'},{value:'"minor"'}]}},message:{defaultValue:null,description:"Optional status message",name:"message",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Callback when status is clicked",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const Q={title:"Navigation/SystemStatus",component:u,parameters:{layout:"centered"},tags:["autodocs"],decorators:[i=>e.jsx("div",{className:"w-64",children:e.jsx(i,{})})]},a={args:{status:"operational",onClick:()=>console.log("Status clicked")}},s={args:{status:"loading"}},t={args:{status:"critical",onClick:()=>console.log("Status clicked")}},o={args:{status:"major",onClick:()=>console.log("Status clicked")}},r={args:{status:"maintenance",message:"Scheduled maintenance: 2AM - 4AM PST",onClick:()=>console.log("Status clicked")}},n={args:{status:"minor",onClick:()=>console.log("Status clicked")}},c={args:{status:"operational",message:"Everything is running smoothly!"}};var S,b,k;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: "operational",
    onClick: () => console.log("Status clicked")
  }
}`,...(k=(b=a.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var f,x,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    status: "loading"
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var C,v,h;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    status: "critical",
    onClick: () => console.log("Status clicked")
  }
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var j,M,_;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    status: "major",
    onClick: () => console.log("Status clicked")
  }
}`,...(_=(M=o.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var N,w,O;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    status: "maintenance",
    message: "Scheduled maintenance: 2AM - 4AM PST",
    onClick: () => console.log("Status clicked")
  }
}`,...(O=(w=r.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var A,E,q;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    status: "minor",
    onClick: () => console.log("Status clicked")
  }
}`,...(q=(E=n.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var I,V,L;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    status: "operational",
    message: "Everything is running smoothly!"
  }
}`,...(L=(V=c.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};const U=["Operational","Loading","Critical","Major","Maintenance","Minor","CustomMessage"];export{t as Critical,c as CustomMessage,s as Loading,r as Maintenance,o as Major,n as Minor,a as Operational,U as __namedExportsOrder,Q as default};
