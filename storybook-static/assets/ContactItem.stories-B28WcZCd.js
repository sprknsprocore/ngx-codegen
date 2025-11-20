import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ie}from"./index-Dz3UJJSw.js";import{c as r}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const a=ie.forwardRef(function({className:X,name:g,subtitle:y,initials:Y,avatarUrl:f,interactive:C=!1,selected:Z=!1,disabled:t=!1,size:$="md",asLink:ee=!1,onClick:ae,...te},ne){const n={sm:{avatar:"w-6 h-6 text-xs",text:"text-xs",gap:"gap-2"},md:{avatar:"w-8 h-8 text-sm",text:"text-sm",gap:"gap-2.5"},lg:{avatar:"w-10 h-10 text-base",text:"text-base",gap:"gap-3"}}[$],re=Y||g.split(" ").map(le=>le[0]).filter(Boolean).slice(0,2).join("").toUpperCase(),se=C&&!t?"button":"div";return e.jsxs(se,{ref:ne,onClick:t?void 0:ae,disabled:t,className:r("flex items-center w-full",n.gap,C&&!t&&"cursor-pointer hover:bg-bg-surface transition-colors",C&&"py-2 px-3 rounded-md text-left",Z&&"bg-bg-secondary",t&&"opacity-50 cursor-not-allowed",X),...te,children:[e.jsx("div",{className:r(n.avatar,"rounded-full flex-shrink-0 flex items-center justify-center font-semibold",f?"bg-bg-tertiary":"bg-fg-muted text-fg-onbrand"),children:f?e.jsx("img",{src:f,alt:g,className:"w-full h-full rounded-full object-cover"}):e.jsx("span",{children:re})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:r(n.text,"font-medium truncate",ee?"text-fg-brand hover:underline":"text-fg-default",t&&"text-fg-disabled"),children:g}),y&&e.jsx("div",{className:r(n.text,"text-fg-secondary truncate mt-0.5",t&&"text-fg-disabled"),children:y})]})]})});try{a.displayName="ContactItem",a.__docgenInfo={description:"",displayName:"ContactItem",props:{name:{defaultValue:null,description:"Contact full name",name:"name",required:!0,type:{name:"string"}},subtitle:{defaultValue:null,description:"Contact title or company",name:"subtitle",required:!1,type:{name:"string"}},initials:{defaultValue:null,description:"Avatar initials (1-2 characters)",name:"initials",required:!1,type:{name:"string"}},avatarUrl:{defaultValue:null,description:"Avatar image URL",name:"avatarUrl",required:!1,type:{name:"string"}},interactive:{defaultValue:{value:"false"},description:"Whether the item is interactive (clickable)",name:"interactive",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Whether the item is selected",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Whether the item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},asLink:{defaultValue:{value:"false"},description:"Link variant - displays name as a link",name:"asLink",required:!1,type:{name:"boolean"}}}}}catch{}const pe={title:"Components/ContactItem",component:a,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{name:"Full Name",subtitle:"Title, Company"}},l={args:{name:"Full Name",subtitle:"Title, Company",initials:"FN"}},i={args:{name:"Full Name",subtitle:"Title, Company",asLink:!0}},m={args:{name:"Full Name",subtitle:"Title, Company",interactive:!0,onClick:()=>alert("Clicked!")}},o={args:{name:"Full Name",subtitle:"Title, Company",interactive:!0,selected:!0}},u={args:{name:"Full Name",subtitle:"Title, Company",disabled:!0}},c={args:{name:"Full Name",subtitle:"Title, Company",size:"sm"}},d={args:{name:"Full Name",subtitle:"Title, Company",size:"lg"}},p={render:()=>e.jsxs("div",{className:"w-80 border border-border-default rounded-lg overflow-hidden bg-bg-canvas",children:[e.jsx(a,{name:"Full Name",subtitle:"Title, Company",interactive:!0}),e.jsx(a,{name:"Full Name",subtitle:"Title, Company",interactive:!0,asLink:!0}),e.jsx(a,{name:"Full Name",subtitle:"Title, Company",interactive:!0,selected:!0}),e.jsx(a,{name:"Full Name",subtitle:"Title, Company",interactive:!0}),e.jsx(a,{name:"Full Name",subtitle:"Title, Company",interactive:!0,disabled:!0})]})},b={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4 p-4 border border-border-default rounded-lg bg-bg-canvas",children:[e.jsx(a,{name:"Full Name",subtitle:"Title, Company"}),e.jsx(a,{name:"Full Name",subtitle:"Title, Company"}),e.jsx(a,{name:"Full Name",subtitle:"Title, Company"}),e.jsx(a,{name:"Full Name",subtitle:"Title, Company"}),e.jsx(a,{name:"Full Name",subtitle:"Title, Company"}),e.jsx(a,{name:"Full Name",subtitle:"Title, Company"})]})};var v,N,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: "Full Name",
    subtitle: "Title, Company"
  }
}`,...(x=(N=s.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var F,T,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    name: "Full Name",
    subtitle: "Title, Company",
    initials: "FN"
  }
}`,...(h=(T=l.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var j,I,k;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: "Full Name",
    subtitle: "Title, Company",
    asLink: true
  }
}`,...(k=(I=i.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var S,L,w;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: "Full Name",
    subtitle: "Title, Company",
    interactive: true,
    onClick: () => alert("Clicked!")
  }
}`,...(w=(L=m.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var z,_,q;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    name: "Full Name",
    subtitle: "Title, Company",
    interactive: true,
    selected: true
  }
}`,...(q=(_=o.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var V,W,A;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    name: "Full Name",
    subtitle: "Title, Company",
    disabled: true
  }
}`,...(A=(W=u.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var D,E,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: "Full Name",
    subtitle: "Title, Company",
    size: "sm"
  }
}`,...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var G,M,U;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    name: "Full Name",
    subtitle: "Title, Company",
    size: "lg"
  }
}`,...(U=(M=d.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var B,O,H;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="w-80 border border-border-default rounded-lg overflow-hidden bg-bg-canvas">
            <ContactItem name="Full Name" subtitle="Title, Company" interactive />
            <ContactItem name="Full Name" subtitle="Title, Company" interactive asLink />
            <ContactItem name="Full Name" subtitle="Title, Company" interactive selected />
            <ContactItem name="Full Name" subtitle="Title, Company" interactive />
            <ContactItem name="Full Name" subtitle="Title, Company" interactive disabled />
        </div>
}`,...(H=(O=p.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var J,K,P;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4 p-4 border border-border-default rounded-lg bg-bg-canvas">
            <ContactItem name="Full Name" subtitle="Title, Company" />
            <ContactItem name="Full Name" subtitle="Title, Company" />
            <ContactItem name="Full Name" subtitle="Title, Company" />
            <ContactItem name="Full Name" subtitle="Title, Company" />
            <ContactItem name="Full Name" subtitle="Title, Company" />
            <ContactItem name="Full Name" subtitle="Title, Company" />
        </div>
}`,...(P=(K=b.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};const be=["Default","WithInitials","AsLink","Interactive","Selected","Disabled","Small","Large","List","Grid"];export{i as AsLink,s as Default,u as Disabled,b as Grid,m as Interactive,d as Large,p as List,o as Selected,c as Small,l as WithInitials,be as __namedExportsOrder,pe as default};
