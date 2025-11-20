import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as a}from"./FormField-Cqy7vkAR.js";import{I as l}from"./Input-80mIrHdw.js";import"./index-Dz3UJJSw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./Stack-BazOErot.js";import"./InputBase-Bz2wEZFE.js";const w={title:"Components/FormField",component:a,parameters:{layout:"padded"},tags:["autodocs"]},s={args:{label:"Email Address"},render:r=>e.jsx(a,{...r,children:e.jsx(l,{placeholder:"Enter email"})})},d={args:{label:"Email Address",required:!0},render:r=>e.jsx(a,{...r,children:e.jsx(l,{placeholder:"Enter email"})})},i={args:{label:"Email Address",helperText:"We'll never share your email with anyone"},render:r=>e.jsx(a,{...r,children:e.jsx(l,{placeholder:"Enter email"})})},n={args:{label:"Email Address",validationState:"invalid",helperText:"Please enter a valid email address"},render:r=>e.jsx(a,{...r,children:e.jsx(l,{placeholder:"Enter email",defaultValue:"invalid-email"})})},t={args:{label:"Email Address",validationState:"valid",helperText:"Email is available"},render:r=>e.jsx(a,{...r,children:e.jsx(l,{placeholder:"Enter email",defaultValue:"user@example.com"})})};var o,m,p;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Email Address"
  },
  render: args => <FormField {...args}>
            <Input placeholder="Enter email" />
        </FormField>
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,u,h;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    required: true
  },
  render: args => <FormField {...args}>
            <Input placeholder="Enter email" />
        </FormField>
}`,...(h=(u=d.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,F,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    helperText: "We'll never share your email with anyone"
  },
  render: args => <FormField {...args}>
            <Input placeholder="Enter email" />
        </FormField>
}`,...(x=(F=i.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var E,v,b;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    validationState: "invalid",
    helperText: "Please enter a valid email address"
  },
  render: args => <FormField {...args}>
            <Input placeholder="Enter email" defaultValue="invalid-email" />
        </FormField>
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var j,f,A;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    validationState: "valid",
    helperText: "Email is available"
  },
  render: args => <FormField {...args}>
            <Input placeholder="Enter email" defaultValue="user@example.com" />
        </FormField>
}`,...(A=(f=t.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const D=["Default","Required","WithHelperText","Invalid","Valid"];export{s as Default,n as Invalid,d as Required,t as Valid,i as WithHelperText,D as __namedExportsOrder,w as default};
