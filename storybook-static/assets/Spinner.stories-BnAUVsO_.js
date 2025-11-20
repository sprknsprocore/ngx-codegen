import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-Dz3UJJSw.js";import{c as d}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const s=C.forwardRef(function({className:E,size:V="md",message:o,variant:k="brand",...B},W){const q={sm:"w-4 h-4 border-2",md:"w-8 h-8 border-2",lg:"w-12 h-12 border-3",xl:"w-16 h-16 border-4"},I={brand:"border-blue-50 border-t-transparent",default:"border-gray-60 border-t-transparent",light:"border-gray-85 border-t-transparent"};return e.jsxs("div",{ref:W,className:d("inline-flex flex-col items-center justify-center gap-3",E),...B,children:[e.jsx("div",{className:d("rounded-full animate-spin",q[V],I[k]),role:"status","aria-label":"Loading"}),o&&e.jsx("p",{className:"text-sm text-fg-default",children:o})]})});try{s.displayName="Spinner",s.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},message:{defaultValue:null,description:"Optional message to display below spinner",name:"message",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"brand"},description:"Color variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"brand"'},{value:'"light"'}]}}}}}catch{}const R={title:"Components/Spinner",component:s,argTypes:{size:{control:"select",options:["sm","md","lg","xl"]},variant:{control:"select",options:["brand","default","light"]}}},a={args:{size:"lg",message:"Message",variant:"brand"}},r={args:{size:"lg",message:"Message"}},n={args:{size:"lg"}},t={render:()=>e.jsx("div",{className:"flex flex-col gap-8",children:e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(s,{size:"sm",message:"Small"}),e.jsx(s,{size:"md",message:"Medium"}),e.jsx(s,{size:"lg",message:"Large"}),e.jsx(s,{size:"xl",message:"Extra Large"})]})})},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(s,{variant:"brand",size:"lg",message:"Brand (Blue)"}),e.jsx(s,{variant:"default",size:"lg",message:"Default (Gray)"}),e.jsx("div",{className:"bg-gray-15 p-6 rounded-md",children:e.jsx(s,{variant:"light",size:"lg",message:"Light (for dark backgrounds)"})})]})},l={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{size:"sm"}),e.jsx("span",{className:"text-sm text-fg-default",children:"Loading content..."})]})};var m,c,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: "lg",
    message: "Message",
    variant: "brand"
  }
}`,...(g=(c=a.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var p,u,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: "lg",
    message: "Message"
  }
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,v,z;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...(z=(v=n.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var b,S,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div className="flex items-center gap-8">
        <Spinner size="sm" message="Small" />
        <Spinner size="md" message="Medium" />
        <Spinner size="lg" message="Large" />
        <Spinner size="xl" message="Extra Large" />
      </div>
    </div>
}`,...(h=(S=t.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var j,y,N;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <Spinner variant="brand" size="lg" message="Brand (Blue)" />
      <Spinner variant="default" size="lg" message="Default (Gray)" />
      <div className="bg-gray-15 p-6 rounded-md">
        <Spinner variant="light" size="lg" message="Light (for dark backgrounds)" />
      </div>
    </div>
}`,...(N=(y=i.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var M,_,L;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <span className="text-sm text-fg-default">Loading content...</span>
    </div>
}`,...(L=(_=l.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const T=["Playground","WithMessage","WithoutMessage","Sizes","Variants","InlineSpinners"];export{l as InlineSpinners,a as Playground,t as Sizes,i as Variants,r as WithMessage,n as WithoutMessage,T as __namedExportsOrder,R as default};
