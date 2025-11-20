import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-Dz3UJJSw.js";import{c as _}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const A=h.forwardRef(function({className:d,separator:t="›",children:s,...i},l){const a=h.Children.toArray(s);return e.jsx("nav",{ref:l,"aria-label":"Breadcrumb",className:_("flex items-center",d),...i,children:e.jsx("ol",{className:"flex items-center gap-2 text-sm",children:a.map((u,f)=>{const y=f===a.length-1;return e.jsxs("li",{className:"flex items-center gap-2",children:[u,!y&&e.jsx("span",{className:"text-fg-secondary","aria-hidden":"true",children:t})]},f)})})})}),S=h.forwardRef(function({className:d,active:t,icon:s,children:i,...l},a){const u=t?"span":"a";return e.jsxs(u,{ref:t?void 0:a,className:_("flex items-center gap-1.5 text-sm",t?"text-fg-default font-semibold":"text-fg-secondary hover:text-fg-default cursor-pointer",d),"aria-current":t?"page":void 0,...t?{}:l,children:[s&&e.jsx("span",{className:"inline-flex items-center",children:s}),i]})}),r=Object.assign(A,{Item:S});try{r.displayName="Breadcrumbs",r.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{separator:{defaultValue:{value:"›"},description:"",name:"separator",required:!1,type:{name:"ReactNode"}}}}}catch{}const D={title:"Components/Breadcrumbs",component:r,parameters:{layout:"padded"},tags:["autodocs"]},p=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M8 2L2 7h2v6h3V9h2v4h3V7h2L8 2z"})}),c={render:()=>e.jsxs(r,{children:[e.jsx(r.Item,{href:"#",icon:e.jsx(p,{}),children:"Home"}),e.jsx(r.Item,{href:"#",children:"Child Page Title"}),e.jsx(r.Item,{active:!0,children:"Active Child Page Title"})]})},m={render:()=>e.jsxs(r,{children:[e.jsx(r.Item,{href:"#",children:"Tool Name"}),e.jsx(r.Item,{href:"#",children:"Child Page Title"}),e.jsx(r.Item,{active:!0,children:"Active Child Page Title"})]})},n={render:()=>e.jsxs(r,{children:[e.jsx(r.Item,{href:"#",icon:e.jsx(p,{}),children:"Home"}),e.jsx(r.Item,{href:"#",children:"Level 1"}),e.jsx(r.Item,{href:"#",children:"Level 2"}),e.jsx(r.Item,{href:"#",children:"Level 3"}),e.jsx(r.Item,{active:!0,children:"Current Page"})]})},o={render:()=>e.jsxs(r,{separator:"/",children:[e.jsx(r.Item,{href:"#",icon:e.jsx(p,{}),children:"Home"}),e.jsx(r.Item,{href:"#",children:"Projects"}),e.jsx(r.Item,{active:!0,children:"Project Name"})]})};var b,x,B;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Breadcrumbs>
            <Breadcrumbs.Item href="#" icon={<HomeIcon />}>
                Home
            </Breadcrumbs.Item>
            <Breadcrumbs.Item href="#">Child Page Title</Breadcrumbs.Item>
            <Breadcrumbs.Item active>Active Child Page Title</Breadcrumbs.Item>
        </Breadcrumbs>
}`,...(B=(x=c.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var j,g,v;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Breadcrumbs>
            <Breadcrumbs.Item href="#">Tool Name</Breadcrumbs.Item>
            <Breadcrumbs.Item href="#">Child Page Title</Breadcrumbs.Item>
            <Breadcrumbs.Item active>Active Child Page Title</Breadcrumbs.Item>
        </Breadcrumbs>
}`,...(v=(g=m.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var C,P,N;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Breadcrumbs>
            <Breadcrumbs.Item href="#" icon={<HomeIcon />}>
                Home
            </Breadcrumbs.Item>
            <Breadcrumbs.Item href="#">Level 1</Breadcrumbs.Item>
            <Breadcrumbs.Item href="#">Level 2</Breadcrumbs.Item>
            <Breadcrumbs.Item href="#">Level 3</Breadcrumbs.Item>
            <Breadcrumbs.Item active>Current Page</Breadcrumbs.Item>
        </Breadcrumbs>
}`,...(N=(P=n.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var T,L,H;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Breadcrumbs separator="/">
            <Breadcrumbs.Item href="#" icon={<HomeIcon />}>
                Home
            </Breadcrumbs.Item>
            <Breadcrumbs.Item href="#">Projects</Breadcrumbs.Item>
            <Breadcrumbs.Item active>Project Name</Breadcrumbs.Item>
        </Breadcrumbs>
}`,...(H=(L=o.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};const O=["Default","WithToolName","LongPath","CustomSeparator"];export{o as CustomSeparator,c as Default,n as LongPath,m as WithToolName,O as __namedExportsOrder,D as default};
