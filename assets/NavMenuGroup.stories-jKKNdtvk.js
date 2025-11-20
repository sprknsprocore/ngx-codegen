import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{N as M}from"./NavMenuGroup-Bu_ev2MZ.js";import{N as n}from"./NavMenuItem-DXYEH4KC.js";import"./index-Dz3UJJSw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./index-Dp3B9jqt.js";const y={title:"Navigation/NavMenuGroup",component:M,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#232729"}]}},tags:["autodocs"],decorators:[N=>e.jsx("div",{className:"w-64 p-4",children:e.jsx(N,{})})]},a=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M8 2L2 7h2v6h3V9h2v4h3V7h2L8 2z"})}),o={args:{label:"Favorites",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{icon:e.jsx(a,{}),children:"Home"}),e.jsx(n,{icon:e.jsx(a,{}),children:"Dashboard"}),e.jsx(n,{icon:e.jsx(a,{}),children:"Projects"})]})}},r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{icon:e.jsx(a,{}),children:"Home"}),e.jsx(n,{icon:e.jsx(a,{}),children:"Dashboard"})]})}},s={args:{label:"Company Tools",collapsible:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{icon:e.jsx(a,{}),children:"Directory"}),e.jsx(n,{icon:e.jsx(a,{}),children:"Admin"}),e.jsx(n,{icon:e.jsx(a,{}),children:"Reports"})]})}},c={args:{label:"Advanced Features",collapsible:!0,defaultCollapsed:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{icon:e.jsx(a,{}),children:"Analytics"}),e.jsx(n,{icon:e.jsx(a,{}),children:"Integrations"})]})}};var t,l,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Favorites",
    children: <>
                <NavMenuItem icon={<HomeIcon />}>Home</NavMenuItem>
                <NavMenuItem icon={<HomeIcon />}>Dashboard</NavMenuItem>
                <NavMenuItem icon={<HomeIcon />}>Projects</NavMenuItem>
            </>
  }
}`,...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <>
                <NavMenuItem icon={<HomeIcon />}>Home</NavMenuItem>
                <NavMenuItem icon={<HomeIcon />}>Dashboard</NavMenuItem>
            </>
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,h,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Company Tools",
    collapsible: true,
    children: <>
                <NavMenuItem icon={<HomeIcon />}>Directory</NavMenuItem>
                <NavMenuItem icon={<HomeIcon />}>Admin</NavMenuItem>
                <NavMenuItem icon={<HomeIcon />}>Reports</NavMenuItem>
            </>
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var I,x,j;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "Advanced Features",
    collapsible: true,
    defaultCollapsed: true,
    children: <>
                <NavMenuItem icon={<HomeIcon />}>Analytics</NavMenuItem>
                <NavMenuItem icon={<HomeIcon />}>Integrations</NavMenuItem>
            </>
  }
}`,...(j=(x=c.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const A=["Default","NoLabel","Collapsible","CollapsibleDefaultCollapsed"];export{s as Collapsible,c as CollapsibleDefaultCollapsed,o as Default,r as NoLabel,A as __namedExportsOrder,y as default};
