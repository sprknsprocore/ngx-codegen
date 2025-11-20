import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ge}from"./index-Dz3UJJSw.js";import{c as re}from"./index-Dp3B9jqt.js";import{c as he}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const be=re("relative inline-flex items-center justify-center rounded-md overflow-hidden bg-bg-surface border transition-colors",{variants:{size:{sm:"w-12 h-12",md:"w-16 h-16",lg:"w-24 h-24",xl:"w-32 h-32"},state:{default:"border-border-default",selected:"border-border-focus ring-2 ring-border-focus",error:"border-state-danger",disabled:"opacity-50 pointer-events-none"},shape:{square:"rounded-md",circle:"rounded-full"}},defaultVariants:{size:"md",state:"default",shape:"square"}}),fe=re("absolute flex items-center justify-center rounded-full border-2 border-bg-canvas",{variants:{position:{"top-right":"top-0 right-0 -translate-y-1/4 translate-x-1/4","bottom-right":"bottom-0 right-0 translate-y-1/4 translate-x-1/4"},tone:{brand:"bg-bg-brand text-fg-onbrand",success:"bg-state-success text-fg-onbrand",danger:"bg-state-danger text-fg-onbrand",neutral:"bg-fg-muted text-fg-onbrand"},size:{sm:"w-5 h-5 text-xs",md:"w-6 h-6 text-sm"}},defaultVariants:{position:"top-right",tone:"brand",size:"md"}}),a=ge.forwardRef(function({className:oe,size:b,state:ie,shape:ce,src:f,alt:x,icon:F,badge:j,badgePosition:de,badgeTone:me,label:I,...pe},ue){return e.jsxs("div",{className:"inline-flex flex-col items-center gap-2",children:[e.jsxs("div",{ref:ue,className:he(be({size:b,state:ie,shape:ce}),oe),...pe,children:[f?e.jsx("img",{src:f,alt:x||"",className:"w-full h-full object-cover"}):F?e.jsx("div",{className:"flex items-center justify-center text-fg-muted",children:F}):e.jsx("div",{className:"flex items-center justify-center text-fg-muted text-xs",children:x||"No preview"}),j&&e.jsx("div",{className:fe({position:de,tone:me,size:b==="sm"?"sm":"md"}),children:j})]}),I&&e.jsx("span",{className:"text-sm text-fg-default text-center max-w-full truncate",children:I})]})});try{a.displayName="Thumbnail",a.__docgenInfo={description:"",displayName:"Thumbnail",props:{src:{defaultValue:null,description:"Image src URL",name:"src",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"Alt text for image",name:"alt",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Icon element to display instead of image",name:"icon",required:!1,type:{name:"ReactNode"}},badge:{defaultValue:null,description:"Badge content (icon or text)",name:"badge",required:!1,type:{name:"ReactNode"}},badgePosition:{defaultValue:null,description:"Badge position",name:"badgePosition",required:!1,type:{name:'"top-right" | "bottom-right" | null'}},badgeTone:{defaultValue:null,description:"Badge tone",name:"badgeTone",required:!1,type:{name:'"neutral" | "brand" | "success" | "danger" | null'}},label:{defaultValue:null,description:"Label text below thumbnail",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | "xl" | null'}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:'"default" | "disabled" | "error" | "selected" | null'}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:'"circle" | "square" | null'}}}}}catch{}const Se={title:"Components/Thumbnail",component:a,parameters:{layout:"centered"},tags:["autodocs"]},s=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:[e.jsx("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e.jsx("polyline",{points:"13 2 13 9 20 9"})]}),ne=()=>e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:e.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})}),h=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"3 8 6 11 13 4"})}),t={args:{src:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop",alt:"Construction site",label:"Filename"}},r={args:{src:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop",alt:"Construction site",label:"Filename",state:"selected",badge:e.jsx(h,{}),badgeTone:"brand"}},n={args:{icon:e.jsx(s,{}),label:"Filename"}},l={args:{icon:e.jsx(s,{}),label:"Filename",state:"selected",badge:e.jsx(h,{}),badgeTone:"brand"}},o={args:{icon:e.jsx(ne,{}),label:"Filename"}},i={args:{icon:e.jsx(s,{}),label:"Filename",state:"error"}},c={args:{icon:e.jsx(s,{}),label:"Filename",state:"disabled"}},d={args:{icon:e.jsx(s,{}),label:"Filename",size:"sm"}},m={args:{src:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop",alt:"Construction site",label:"Filename",size:"lg"}},p={args:{src:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop",alt:"Construction site",label:"Filename",size:"xl"}},u={args:{src:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop",alt:"Construction site",label:"Filename",shape:"circle"}},g={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-6",children:[e.jsx(a,{src:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop",alt:"Image",label:"Filename"}),e.jsx(a,{src:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop",alt:"Image",label:"Label",state:"selected",badge:e.jsx(h,{})}),e.jsx(a,{icon:e.jsx(s,{}),label:"Filename"}),e.jsx(a,{icon:e.jsx(ne,{}),label:"Filename"}),e.jsx(a,{icon:e.jsx(s,{}),label:"Filename",state:"selected",badge:e.jsx(h,{})}),e.jsx(a,{icon:e.jsx(s,{}),label:"Filename",state:"error"}),e.jsx(a,{icon:e.jsx(s,{}),label:"Filename",state:"disabled"})]})};var w,S,y;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop",
    alt: "Construction site",
    label: "Filename"
  }
}`,...(y=(S=t.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var v,z,C;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop",
    alt: "Construction site",
    label: "Filename",
    state: "selected",
    badge: <CheckIcon />,
    badgeTone: "brand"
  }
}`,...(C=(z=r.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var T,V,N;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    icon: <FileIcon />,
    label: "Filename"
  }
}`,...(N=(V=n.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var q,W,_;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    icon: <FileIcon />,
    label: "Filename",
    state: "selected",
    badge: <CheckIcon />,
    badgeTone: "brand"
  }
}`,...(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var k,L,E;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    icon: <FolderIcon />,
    label: "Filename"
  }
}`,...(E=(L=o.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var B,R,A;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    icon: <FileIcon />,
    label: "Filename",
    state: "error"
  }
}`,...(A=(R=i.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var D,H,M;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    icon: <FileIcon />,
    label: "Filename",
    state: "disabled"
  }
}`,...(M=(H=c.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var P,O,U;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    icon: <FileIcon />,
    label: "Filename",
    size: "sm"
  }
}`,...(U=(O=d.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var G,J,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop",
    alt: "Construction site",
    label: "Filename",
    size: "lg"
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop",
    alt: "Construction site",
    label: "Filename",
    size: "xl"
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop",
    alt: "Construction site",
    label: "Filename",
    shape: "circle"
  }
}`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,se,te;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-6">
            <Thumbnail src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop" alt="Image" label="Filename" />
            <Thumbnail src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop" alt="Image" label="Label" state="selected" badge={<CheckIcon />} />
            <Thumbnail icon={<FileIcon />} label="Filename" />
            <Thumbnail icon={<FolderIcon />} label="Filename" />
            <Thumbnail icon={<FileIcon />} label="Filename" state="selected" badge={<CheckIcon />} />
            <Thumbnail icon={<FileIcon />} label="Filename" state="error" />
            <Thumbnail icon={<FileIcon />} label="Filename" state="disabled" />
        </div>
}`,...(te=(se=g.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};const ye=["WithImage","WithImageSelected","WithFileIcon","WithFileIconSelected","WithFolderIcon","ErrorState","DisabledState","SmallSize","LargeSize","ExtraLargeSize","CircleShape","AllVariants"];export{g as AllVariants,u as CircleShape,c as DisabledState,i as ErrorState,p as ExtraLargeSize,m as LargeSize,d as SmallSize,n as WithFileIcon,l as WithFileIconSelected,o as WithFolderIcon,t as WithImage,r as WithImageSelected,ye as __namedExportsOrder,Se as default};
