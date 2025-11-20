import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-Dz3UJJSw.js";import{c as q}from"./index-Dp3B9jqt.js";import{c as E}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const M=q("underline underline-offset-2 decoration-1 transition-colors focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2",{variants:{size:{sm:"text-sm",md:"text-md",lg:"text-lg"},tone:{default:"text-fg-brand hover:text-fg-brand-hover",secondary:"text-fg-secondary hover:text-fg-default",reversed:"text-fg-reversed hover:opacity-80"},disabled:{true:"text-fg-disabled cursor-not-allowed pointer-events-none no-underline",false:""}},defaultVariants:{size:"md",tone:"default",disabled:!1}}),n=V.forwardRef(function({className:D,size:T,tone:R,disabled:d,...w},I){return e.jsx("a",{ref:I,className:E(M({size:T,tone:R,disabled:d}),D),"aria-disabled":d?"true":void 0,tabIndex:d?-1:void 0,...w})});try{n.displayName="Link",n.__docgenInfo={description:"",displayName:"Link",props:{disabled:{defaultValue:null,description:"Whether the link is disabled",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | null'}},tone:{defaultValue:null,description:"",name:"tone",required:!1,type:{name:'"default" | "secondary" | "reversed" | null'}}}}}catch{}const F={title:"Components/Link",component:n,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},tone:{control:"select",options:["default","secondary","reversed"]},disabled:{control:"boolean"}}},r={args:{children:"Link title",href:"#"}},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(n,{href:"#",size:"sm",children:"Small link"}),e.jsx(n,{href:"#",size:"md",children:"Medium link (default)"}),e.jsx(n,{href:"#",size:"lg",children:"Large link"})]})},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(n,{href:"#",tone:"default",children:"Default (brand) link"}),e.jsx(n,{href:"#",tone:"secondary",children:"Secondary link"}),e.jsx("div",{className:"bg-gray-15 p-4 rounded",children:e.jsx(n,{href:"#",tone:"reversed",children:"Reversed link (on dark background)"})})]})},t={args:{children:"Disabled link",href:"#",disabled:!0}},a={render:()=>e.jsxs("p",{className:"text-md text-fg-default",children:["This is a paragraph with an"," ",e.jsx(n,{href:"#",size:"md",children:"inline link"})," ","in the middle of it."]})},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(n,{href:"#",children:"Link title"}),e.jsx(n,{href:"#",children:"Link title"}),e.jsx(n,{href:"#",children:"Link title"}),e.jsx(n,{href:"#",children:"Link title"}),e.jsx(n,{href:"#",children:"Link title"}),e.jsx(n,{href:"#",children:"Link title"}),e.jsx(n,{href:"#",children:"Link title"}),e.jsx(n,{href:"#",children:"Link title"}),e.jsx(n,{href:"#",children:"Link title"}),e.jsx(n,{href:"#",children:"Link title"})]})};var o,c,f;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "Link title",
    href: "#"
  }
}`,...(f=(c=r.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var k,h,m;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <Link href="#" size="sm">
                Small link
            </Link>
            <Link href="#" size="md">
                Medium link (default)
            </Link>
            <Link href="#" size="lg">
                Large link
            </Link>
        </div>
}`,...(m=(h=i.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var u,p,L;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
            <Link href="#" tone="default">
                Default (brand) link
            </Link>
            <Link href="#" tone="secondary">
                Secondary link
            </Link>
            <div className="bg-gray-15 p-4 rounded">
                <Link href="#" tone="reversed">
                    Reversed link (on dark background)
                </Link>
            </div>
        </div>
}`,...(L=(p=s.parameters)==null?void 0:p.docs)==null?void 0:L.source}}};var x,g,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Disabled link",
    href: "#",
    disabled: true
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var j,b,y;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <p className="text-md text-fg-default">
            This is a paragraph with an{" "}
            <Link href="#" size="md">
                inline link
            </Link>{" "}
            in the middle of it.
        </p>
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var z,N,S;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
            <Link href="#">Link title</Link>
            <Link href="#">Link title</Link>
            <Link href="#">Link title</Link>
            <Link href="#">Link title</Link>
            <Link href="#">Link title</Link>
            <Link href="#">Link title</Link>
            <Link href="#">Link title</Link>
            <Link href="#">Link title</Link>
            <Link href="#">Link title</Link>
            <Link href="#">Link title</Link>
        </div>
}`,...(S=(N=l.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const G=["Default","Sizes","Tones","Disabled","InText","LinkList"];export{r as Default,t as Disabled,a as InText,l as LinkList,i as Sizes,s as Tones,G as __namedExportsOrder,F as default};
