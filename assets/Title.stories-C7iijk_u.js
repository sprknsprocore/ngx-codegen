import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as xe}from"./index-Dz3UJJSw.js";import{c as fe}from"./index-Dp3B9jqt.js";import{c as ze}from"./clsx-B-dksMZM.js";import{B as H}from"./Badge-B9P-HQj8.js";import"./_commonjsHelpers-CqkleIqs.js";const Te=fe("flex items-center gap-2 font-semibold text-fg-default",{variants:{size:{h1:"text-2xl",h2:"text-xl",h3:"text-lg",h4:"text-md",h5:"text-sm",h6:"text-xs"},tone:{default:"text-fg-default",muted:"text-fg-muted",brand:"text-bg-brand"}},defaultVariants:{size:"h2",tone:"default"}}),a=xe.forwardRef(function({className:ce,size:le,tone:he,as:ge="h2",icon:f,badge:z,children:me,...ue},pe){const He=ge;return e.jsxs(He,{ref:pe,className:ze(Te({size:le,tone:he}),ce),...ue,children:[f&&e.jsx("span",{className:"flex-shrink-0",children:f}),e.jsx("span",{className:"flex-1",children:me}),z&&e.jsx("span",{className:"flex-shrink-0",children:z})]})});try{a.displayName="Title",a.__docgenInfo={description:"",displayName:"Title",props:{as:{defaultValue:{value:"h2"},description:"HTML heading level (affects semantic element, not styling)",name:"as",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},icon:{defaultValue:null,description:"Icon to display before the title",name:"icon",required:!1,type:{name:"ReactNode"}},badge:{defaultValue:null,description:"Badge or content to display after the title",name:"badge",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null'}},tone:{defaultValue:null,description:"",name:"tone",required:!1,type:{name:'"default" | "brand" | "muted" | null'}}}}}catch{}const ye={title:"Components/Title",component:a,parameters:{layout:"padded"},tags:["autodocs"]},x=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})}),je=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),s={args:{children:"Heading"}},n={args:{children:"Heading",icon:e.jsx(x,{})}},r={args:{children:"Heading",badge:e.jsx(H,{size:"sm",tone:"brand",children:"New"})}},i={args:{children:"Heading",icon:e.jsx(je,{}),badge:e.jsx(H,{size:"sm",tone:"success",children:"12"})}},t={args:{children:"Heading",size:"h1",as:"h1"}},d={args:{children:"Heading",size:"h2",as:"h2"}},o={args:{children:"Heading",size:"h3",as:"h3"}},c={args:{children:"Heading",size:"h4",as:"h4"}},l={args:{children:"Heading",size:"h5",as:"h5"}},h={args:{children:"Heading",size:"h6",as:"h6"}},g={args:{children:"Heading",tone:"brand",icon:e.jsx(x,{})}},m={args:{children:"Heading",tone:"muted"}},u={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{size:"h1",as:"h1",children:"H1 Heading"}),e.jsx(a,{size:"h2",as:"h2",children:"H2 Heading"}),e.jsx(a,{size:"h3",as:"h3",children:"H3 Heading"}),e.jsx(a,{size:"h4",as:"h4",children:"H4 Heading"}),e.jsx(a,{size:"h5",as:"h5",children:"H5 Heading"}),e.jsx(a,{size:"h6",as:"h6",children:"H6 Heading"})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(a,{children:"Default Heading"}),e.jsx(a,{icon:e.jsx(x,{}),children:"Heading with Icon"}),e.jsx(a,{badge:e.jsx(H,{size:"sm",tone:"brand",children:"Badge"}),children:"Heading with Badge"}),e.jsx(a,{icon:e.jsx(x,{}),badge:e.jsx(H,{size:"sm",tone:"success",children:"12"}),children:"Complete Heading"}),e.jsx(a,{tone:"brand",children:"Brand Tone"}),e.jsx(a,{tone:"muted",children:"Muted Tone"})]})};var T,j,S;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: "Heading"
  }
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,b,v;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: "Heading",
    icon: <StarIcon />
  }
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var I,N,y;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: "Heading",
    badge: <Badge size="sm" tone="brand">New</Badge>
  }
}`,...(y=(N=r.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var w,_,M;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: "Heading",
    icon: <EditIcon />,
    badge: <Badge size="sm" tone="success">12</Badge>
  }
}`,...(M=(_=i.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var V,W,A;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: "Heading",
    size: "h1",
    as: "h1"
  }
}`,...(A=(W=t.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var C,L,q;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: "Heading",
    size: "h2",
    as: "h2"
  }
}`,...(q=(L=d.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var E,k,D;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: "Heading",
    size: "h3",
    as: "h3"
  }
}`,...(D=(k=o.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var R,O,F;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: "Heading",
    size: "h4",
    as: "h4"
  }
}`,...(F=(O=c.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var G,J,K;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: "Heading",
    size: "h5",
    as: "h5"
  }
}`,...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,Q,U;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: "Heading",
    size: "h6",
    as: "h6"
  }
}`,...(U=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    children: "Heading",
    tone: "brand",
    icon: <StarIcon />
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: "Heading",
    tone: "muted"
  }
}`,...(ae=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,ne,re;u.parameters={...u.parameters,docs:{...(se=u.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <Title size="h1" as="h1">H1 Heading</Title>
            <Title size="h2" as="h2">H2 Heading</Title>
            <Title size="h3" as="h3">H3 Heading</Title>
            <Title size="h4" as="h4">H4 Heading</Title>
            <Title size="h5" as="h5">H5 Heading</Title>
            <Title size="h6" as="h6">H6 Heading</Title>
        </div>
}`,...(re=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ie,te,de;p.parameters={...p.parameters,docs:{...(ie=p.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
            <Title>Default Heading</Title>
            <Title icon={<StarIcon />}>Heading with Icon</Title>
            <Title badge={<Badge size="sm" tone="brand">Badge</Badge>}>Heading with Badge</Title>
            <Title icon={<StarIcon />} badge={<Badge size="sm" tone="success">12</Badge>}>
                Complete Heading
            </Title>
            <Title tone="brand">Brand Tone</Title>
            <Title tone="muted">Muted Tone</Title>
        </div>
}`,...(de=(te=p.parameters)==null?void 0:te.docs)==null?void 0:de.source}}};const we=["Default","WithIcon","WithBadge","WithIconAndBadge","H1Size","H2Size","H3Size","H4Size","H5Size","H6Size","BrandTone","MutedTone","AllSizes","AllVariants"];export{u as AllSizes,p as AllVariants,g as BrandTone,s as Default,t as H1Size,d as H2Size,o as H3Size,c as H4Size,l as H5Size,h as H6Size,m as MutedTone,r as WithBadge,n as WithIcon,i as WithIconAndBadge,we as __namedExportsOrder,ye as default};
