import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as i}from"./TextArea-Y3i28lFF.js";import"./index-Dz3UJJSw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";const G={title:"Components/TextArea",component:i,argTypes:{size:{control:"select",options:["sm","md","lg"]},validationState:{control:"select",options:["none","invalid","valid"]},disabled:{control:"boolean"},required:{control:"boolean"}}},a={args:{label:"Label",placeholder:"Enter text...",size:"md",validationState:"none"}},r={args:{label:"Label",placeholder:"Enter [Label]"}},l={args:{label:"Label",placeholder:"Enter [Label]",helperText:"This is helper text to provide additional context"}},s={args:{label:"Label",placeholder:"Enter [Label]",required:!0}},o={args:{label:"Label",placeholder:"Enter [Label]",validationState:"invalid",helperText:"Error Message/Helper Text"}},t={args:{label:"Label",placeholder:"Enter [Label]",disabled:!0}},n={args:{label:"Label",placeholder:"Enter [Label]",autoFocus:!0}},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(i,{size:"sm",label:"Small",placeholder:"Enter [Label]"}),e.jsx(i,{size:"md",label:"Medium (Default)",placeholder:"Enter [Label]"}),e.jsx(i,{size:"lg",label:"Large",placeholder:"Enter [Label]"})]})},d={args:{placeholder:"Enter [Label]"}};var p,b,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "Enter text...",
    size: "md",
    validationState: "none"
  }
}`,...(m=(b=a.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var u,L,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "Enter [Label]"
  }
}`,...(g=(L=r.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var h,x,E;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "Enter [Label]",
    helperText: "This is helper text to provide additional context"
  }
}`,...(E=(x=l.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var S,T,v;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "Enter [Label]",
    required: true
  }
}`,...(v=(T=s.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var z,f,j;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "Enter [Label]",
    validationState: "invalid",
    helperText: "Error Message/Helper Text"
  }
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var W,q,A;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "Enter [Label]",
    disabled: true
  }
}`,...(A=(q=t.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var D,F,H;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "Enter [Label]",
    autoFocus: true
  }
}`,...(H=(F=n.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var M,N,y;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <TextArea size="sm" label="Small" placeholder="Enter [Label]" />
      <TextArea size="md" label="Medium (Default)" placeholder="Enter [Label]" />
      <TextArea size="lg" label="Large" placeholder="Enter [Label]" />
    </div>
}`,...(y=(N=c.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var R,P,_;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter [Label]"
  }
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const I=["Playground","WithLabel","WithHelperText","Required","WithError","Disabled","Focused","Sizes","NoLabel"];export{t as Disabled,n as Focused,d as NoLabel,a as Playground,s as Required,c as Sizes,o as WithError,l as WithHelperText,r as WithLabel,I as __namedExportsOrder,G as default};
