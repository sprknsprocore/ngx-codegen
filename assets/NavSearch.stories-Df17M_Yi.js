import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{N as k}from"./NavSearch-C3LRrlGl.js";import"./index-Dz3UJJSw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";const C={title:"Navigation/NavSearch",component:k,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#232729"},{name:"light",value:"#FFFFFF"}]}},tags:["autodocs"],decorators:[a=>s.jsx("div",{className:"w-96",children:s.jsx(a,{})})]},r={args:{variant:"dark",onSearch:a=>console.log("Search:",a)}},e={args:{variant:"light",onSearch:a=>console.log("Search:",a)},parameters:{backgrounds:{default:"light"}}},o={args:{variant:"dark",shortcutHint:"Ctrl + K",onSearch:a=>console.log("Search:",a)}},t={args:{variant:"dark",placeholder:"Search projects, tasks, and more...",onSearch:a=>console.log("Search:",a)}};var n,c,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: "dark",
    onSearch: value => console.log("Search:", value)
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var i,d,h;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "light",
    onSearch: value => console.log("Search:", value)
  },
  parameters: {
    backgrounds: {
      default: "light"
    }
  }
}`,...(h=(d=e.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var u,m,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "dark",
    shortcutHint: "Ctrl + K",
    onSearch: value => console.log("Search:", value)
  }
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,S,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "dark",
    placeholder: "Search projects, tasks, and more...",
    onSearch: value => console.log("Search:", value)
  }
}`,...(v=(S=t.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const H=["DarkVariant","LightVariant","WithShortcutHint","WithCustomPlaceholder"];export{r as DarkVariant,e as LightVariant,t as WithCustomPlaceholder,o as WithShortcutHint,H as __namedExportsOrder,C as default};
