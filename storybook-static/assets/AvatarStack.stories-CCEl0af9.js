import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as Q}from"./index-Dz3UJJSw.js";import{c as U}from"./index-Dp3B9jqt.js";import{c as g}from"./clsx-B-dksMZM.js";import{A as Y}from"./Avatar-DIPbw39d.js";import"./_commonjsHelpers-CqkleIqs.js";const Z=U("inline-flex items-center",{variants:{size:{sm:"h-6",md:"h-8",lg:"h-10",xl:"h-12"}},defaultVariants:{size:"md"}}),y={overlap:"-ml-2",touching:"ml-0",spaced:"ml-2"},e=Q.forwardRef(function({className:$,size:r,avatars:v,max:h=5,spacing:u="overlap",...K},P){const f=v.slice(0,h),S=Math.max(0,v.length-h);return a.jsxs("div",{ref:P,role:"group","aria-label":`${v.length} users`,className:g(Z({size:r}),$),...K,children:[f.map((t,x)=>a.jsx("div",{className:g("relative ring-2 ring-white rounded-full",x>0&&y[u]),style:{zIndex:f.length-x},children:a.jsx(Y,{size:r,src:t.src,name:t.name,initials:t.initials,alt:t.alt})},x)),S>0&&a.jsx("div",{className:g("relative inline-flex items-center justify-center rounded-full bg-fg-muted text-fg-onbrand font-semibold ring-2 ring-bg-canvas",y[u],{"h-6 w-6 text-xs":r==="sm","h-8 w-8 text-sm":r==="md","h-10 w-10 text-base":r==="lg","h-12 w-12 text-lg":r==="xl"}),style:{zIndex:0},children:a.jsxs("span",{children:["+",S]})})]})});try{e.displayName="AvatarStack",e.__docgenInfo={description:"",displayName:"AvatarStack",props:{avatars:{defaultValue:null,description:"Array of avatar data",name:"avatars",required:!0,type:{name:"{ src?: string | undefined; name?: string | undefined; initials?: string | undefined; alt?: string | undefined; }[]"}},max:{defaultValue:{value:"5"},description:'Maximum number of avatars to display before showing "+X"',name:"max",required:!1,type:{name:"number"}},spacing:{defaultValue:{value:"overlap"},description:"Spacing between avatars (negative for overlap)",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"overlap"'},{value:'"touching"'},{value:'"spaced"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | "xl" | null'}}}}}catch{}const ca={title:"Components/AvatarStack",component:e,parameters:{layout:"centered"},tags:["autodocs"]},s=[{src:"https://i.pravatar.cc/150?img=1",name:"John Doe"},{src:"https://i.pravatar.cc/150?img=2",name:"Jane Smith"},{src:"https://i.pravatar.cc/150?img=3",name:"Bob Johnson"},{src:"https://i.pravatar.cc/150?img=4",name:"Alice Williams"},{src:"https://i.pravatar.cc/150?img=5",name:"Charlie Brown"}],H=[...s,{name:"David Lee"},{name:"Emma Davis"},{name:"Frank Miller"},{name:"Grace Wilson"},{name:"Henry Moore"}],n={args:{avatars:s}},c={args:{avatars:H,max:4}},m={args:{avatars:H,max:3}},i={render:()=>a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-fg-secondary mb-2",children:"Small"}),a.jsx(e,{size:"sm",avatars:s,max:4})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-fg-secondary mb-2",children:"Medium"}),a.jsx(e,{size:"md",avatars:s,max:4})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-fg-secondary mb-2",children:"Large"}),a.jsx(e,{size:"lg",avatars:s,max:4})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-fg-secondary mb-2",children:"Extra Large"}),a.jsx(e,{size:"xl",avatars:s,max:4})]})]})},o={render:()=>a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-fg-secondary mb-2",children:"Overlap (default)"}),a.jsx(e,{avatars:s,spacing:"overlap",max:4})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-fg-secondary mb-2",children:"Touching"}),a.jsx(e,{avatars:s,spacing:"touching",max:4})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-fg-secondary mb-2",children:"Spaced"}),a.jsx(e,{avatars:s,spacing:"spaced",max:4})]})]})},l={args:{avatars:[{name:"John Doe"},{name:"Jane Smith"},{name:"Bob Johnson"},{name:"Alice Williams"}]}},p={args:{avatars:[{src:"https://i.pravatar.cc/150?img=1",name:"John Doe"},{name:"Jane Smith"},{src:"https://i.pravatar.cc/150?img=3",name:"Bob Johnson"},{name:"Alice Williams"},{src:"https://i.pravatar.cc/150?img=5",name:"Charlie Brown"}],max:4}},d={args:{avatars:[{src:"https://i.pravatar.cc/150?img=1",name:"John Doe"},{src:"https://i.pravatar.cc/150?img=2",name:"Jane Smith"}]}};var A,j,b;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    avatars: sampleAvatars
  }
}`,...(b=(j=n.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var N,J,w;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    avatars: manyAvatars,
    max: 4
  }
}`,...(w=(J=c.parameters)==null?void 0:J.docs)==null?void 0:w.source}}};var k,z,D;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    avatars: manyAvatars,
    max: 3
  }
}`,...(D=(z=m.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var W,_,M;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
            <div>
                <p className="text-sm text-fg-secondary mb-2">Small</p>
                <AvatarStack size="sm" avatars={sampleAvatars} max={4} />
            </div>
            <div>
                <p className="text-sm text-fg-secondary mb-2">Medium</p>
                <AvatarStack size="md" avatars={sampleAvatars} max={4} />
            </div>
            <div>
                <p className="text-sm text-fg-secondary mb-2">Large</p>
                <AvatarStack size="lg" avatars={sampleAvatars} max={4} />
            </div>
            <div>
                <p className="text-sm text-fg-secondary mb-2">Extra Large</p>
                <AvatarStack size="xl" avatars={sampleAvatars} max={4} />
            </div>
        </div>
}`,...(M=(_=i.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var B,C,L;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
            <div>
                <p className="text-sm text-fg-secondary mb-2">Overlap (default)</p>
                <AvatarStack avatars={sampleAvatars} spacing="overlap" max={4} />
            </div>
            <div>
                <p className="text-sm text-fg-secondary mb-2">Touching</p>
                <AvatarStack avatars={sampleAvatars} spacing="touching" max={4} />
            </div>
            <div>
                <p className="text-sm text-fg-secondary mb-2">Spaced</p>
                <AvatarStack avatars={sampleAvatars} spacing="spaced" max={4} />
            </div>
        </div>
}`,...(L=(C=o.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var O,V,E;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    avatars: [{
      name: "John Doe"
    }, {
      name: "Jane Smith"
    }, {
      name: "Bob Johnson"
    }, {
      name: "Alice Williams"
    }]
  }
}`,...(E=(V=l.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var I,q,F;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    avatars: [{
      src: "https://i.pravatar.cc/150?img=1",
      name: "John Doe"
    }, {
      name: "Jane Smith"
    }, {
      src: "https://i.pravatar.cc/150?img=3",
      name: "Bob Johnson"
    }, {
      name: "Alice Williams"
    }, {
      src: "https://i.pravatar.cc/150?img=5",
      name: "Charlie Brown"
    }],
    max: 4
  }
}`,...(F=(q=p.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var R,T,G;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    avatars: [{
      src: "https://i.pravatar.cc/150?img=1",
      name: "John Doe"
    }, {
      src: "https://i.pravatar.cc/150?img=2",
      name: "Jane Smith"
    }]
  }
}`,...(G=(T=d.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};const ma=["Default","WithOverflow","LargeOverflow","Sizes","SpacingVariants","WithInitials","MixedContent","Few"];export{n as Default,d as Few,m as LargeOverflow,p as MixedContent,i as Sizes,o as SpacingVariants,l as WithInitials,c as WithOverflow,ma as __namedExportsOrder,ca as default};
