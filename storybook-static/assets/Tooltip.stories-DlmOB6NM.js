import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-Dz3UJJSw.js";import{c as U}from"./index-Dp3B9jqt.js";import{c as T}from"./clsx-B-dksMZM.js";import{B as n}from"./Button-CZgY2kMk.js";import"./_commonjsHelpers-CqkleIqs.js";const Z=U("absolute z-50 bg-bg-reversed text-fg-reversed text-xs px-3 py-2 rounded-sm shadow-md whitespace-nowrap pointer-events-none",{variants:{placement:{top:"bottom-full left-1/2 -translate-x-1/2 mb-2",bottom:"top-full left-1/2 -translate-x-1/2 mt-2",left:"right-full top-1/2 -translate-y-1/2 mr-2",right:"left-full top-1/2 -translate-y-1/2 ml-2"}},defaultVariants:{placement:"top"}}),ee=U("absolute w-2 h-2 bg-bg-reversed rotate-45",{variants:{placement:{top:"top-full left-1/2 -translate-x-1/2 -mt-1",bottom:"bottom-full left-1/2 -translate-x-1/2 -mb-1",left:"left-full top-1/2 -translate-y-1/2 -ml-1",right:"right-full top-1/2 -translate-y-1/2 -mr-1"}},defaultVariants:{placement:"top"}}),t=r.forwardRef(function({content:s,children:g,placement:i="top",delay:v=200,showArrow:w=!0,className:y},b){const[j,N]=r.useState(!1),a=r.useRef(),Y=r.useRef(null),H=()=>{a.current=setTimeout(()=>{N(!0)},v)},B=()=>{a.current&&clearTimeout(a.current),N(!1)};return r.useEffect(()=>()=>{a.current&&clearTimeout(a.current)},[]),e.jsxs("div",{ref:Y,className:"relative inline-block",onMouseEnter:H,onMouseLeave:B,onFocus:H,onBlur:B,children:[g,j&&s&&e.jsxs("div",{ref:b,className:T(Z({placement:i}),y),role:"tooltip",children:[s,w&&e.jsx("div",{className:ee({placement:i})})]})]})}),te=({size:l="md"})=>{const s={sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"};return e.jsxs("svg",{className:T(s[l],"text-fg-secondary"),viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"10",cy:"10",r:"7.5",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M8 8a2 2 0 114 0c0 .89-.5 1.5-1.5 2-.5.25-.5.5-.5 1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("circle",{cx:"10",cy:"14",r:"0.5",fill:"currentColor"})]})},o=r.forwardRef(function({content:s,size:g="md",placement:i="top",delay:v,showArrow:w,className:y,iconClassName:b},j){return e.jsx(t,{ref:j,content:s,placement:i,delay:v,showArrow:w,className:y,children:e.jsx("button",{type:"button",className:T("inline-flex items-center justify-center rounded-full hover:bg-bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus p-0.5",b),"aria-label":"Help",children:e.jsx(te,{size:g})})})});try{t.displayName="Tooltip",t.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"The content to display in the tooltip",name:"content",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"The element that triggers the tooltip",name:"children",required:!0,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},delay:{defaultValue:{value:"200"},description:"Delay before showing tooltip (ms)",name:"delay",required:!1,type:{name:"number"}},showArrow:{defaultValue:{value:"true"},description:"Whether to show an arrow",name:"showArrow",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional className for the tooltip",name:"className",required:!1,type:{name:"string"}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:'"left" | "right" | "top" | "bottom" | null'}}}}}catch{}try{o.displayName="TooltipHelp",o.__docgenInfo={description:"",displayName:"TooltipHelp",props:{size:{defaultValue:{value:"md"},description:"Size of the help icon",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},iconClassName:{defaultValue:null,description:"Additional className for the icon container",name:"iconClassName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional className for the tooltip",name:"className",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"The content to display in the tooltip",name:"content",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:'"left" | "right" | "top" | "bottom" | null'}},showArrow:{defaultValue:{value:"true"},description:"Whether to show an arrow",name:"showArrow",required:!1,type:{name:"boolean"}},delay:{defaultValue:{value:"200"},description:"Delay before showing tooltip (ms)",name:"delay",required:!1,type:{name:"number"}}}}}catch{}const ie={title:"Components/Tooltip",component:t,tags:["autodocs"],argTypes:{placement:{control:"select",options:["top","bottom","left","right"]},delay:{control:"number"},showArrow:{control:"boolean"}}},c={args:{content:"Concise sentence written in sentence case.",children:e.jsx(n,{children:"Hover me"}),placement:"top"}},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-32 items-center justify-center p-20",children:[e.jsx(t,{content:"Concise sentence written in sentence case.",placement:"top",children:e.jsx(n,{children:"Top"})}),e.jsxs("div",{className:"flex gap-32 items-center",children:[e.jsx(t,{content:"Concise sentence written in sentence case.",placement:"left",children:e.jsx(n,{children:"Left"})}),e.jsx(t,{content:"Concise sentence written in sentence case.",placement:"right",children:e.jsx(n,{children:"Right"})})]}),e.jsx(t,{content:"Concise sentence written in sentence case.",placement:"bottom",children:e.jsx(n,{children:"Bottom"})})]})},m={args:{content:"Concise sentence written in sentence case.",children:e.jsx(n,{children:"Hover me"}),placement:"top",showArrow:!1}},d={args:{content:"This tooltip appears after a longer delay.",children:e.jsx(n,{children:"Hover me (500ms delay)"}),placement:"top",delay:500}},u={render:()=>e.jsx(t,{content:"This is a longer tooltip message that demonstrates how the component handles more text content.",placement:"top",children:e.jsx(n,{children:"Hover for long tooltip"})})},h={render:()=>e.jsxs("div",{className:"flex gap-8 items-center p-8",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("label",{htmlFor:"input1",className:"text-sm font-medium",children:"Field Label"}),e.jsx(o,{content:"This is helpful information about this field.",placement:"top",size:"sm"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("label",{htmlFor:"input2",className:"text-sm font-medium",children:"Another Field"}),e.jsx(o,{content:"More helpful information here.",placement:"right",size:"md"})]})]})},f={render:()=>e.jsxs("div",{className:"flex gap-6 items-center p-8",children:[e.jsx(o,{content:"Small help icon",size:"sm"}),e.jsx(o,{content:"Medium help icon",size:"md"}),e.jsx(o,{content:"Large help icon",size:"lg"})]})},x={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 p-8",children:[e.jsxs("p",{className:"text-sm",children:["This is some text with"," ",e.jsx(t,{content:"Additional information",placement:"top",children:e.jsx("span",{className:"underline decoration-dotted cursor-help",children:"a tooltip"})})," ","inline."]}),e.jsxs("p",{className:"text-sm",children:["Hover over"," ",e.jsx(t,{content:"Another helpful note",placement:"bottom",children:e.jsx("span",{className:"font-semibold cursor-help",children:"this text"})})," ","for more info."]})]})};var C,A,_;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    content: "Concise sentence written in sentence case.",
    children: <Button>Hover me</Button>,
    placement: "top"
  }
}`,...(_=(A=c.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var z,V,S;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-32 items-center justify-center p-20">
            <Tooltip content="Concise sentence written in sentence case." placement="top">
                <Button>Top</Button>
            </Tooltip>
            <div className="flex gap-32 items-center">
                <Tooltip content="Concise sentence written in sentence case." placement="left">
                    <Button>Left</Button>
                </Tooltip>
                <Tooltip content="Concise sentence written in sentence case." placement="right">
                    <Button>Right</Button>
                </Tooltip>
            </div>
            <Tooltip content="Concise sentence written in sentence case." placement="bottom">
                <Button>Bottom</Button>
            </Tooltip>
        </div>
}`,...(S=(V=p.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var R,q,L;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    content: "Concise sentence written in sentence case.",
    children: <Button>Hover me</Button>,
    placement: "top",
    showArrow: false
  }
}`,...(L=(q=m.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var E,M,F;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    content: "This tooltip appears after a longer delay.",
    children: <Button>Hover me (500ms delay)</Button>,
    placement: "top",
    delay: 500
  }
}`,...(F=(M=d.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var k,I,W;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Tooltip content="This is a longer tooltip message that demonstrates how the component handles more text content." placement="top">
            <Button>Hover for long tooltip</Button>
        </Tooltip>
}`,...(W=(I=u.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var D,O,P;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 items-center p-8">
            <div className="flex items-center gap-2">
                <label htmlFor="input1" className="text-sm font-medium">
                    Field Label
                </label>
                <TooltipHelp content="This is helpful information about this field." placement="top" size="sm" />
            </div>
            <div className="flex items-center gap-2">
                <label htmlFor="input2" className="text-sm font-medium">
                    Another Field
                </label>
                <TooltipHelp content="More helpful information here." placement="right" size="md" />
            </div>
        </div>
}`,...(P=(O=h.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var J,X,$;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6 items-center p-8">
            <TooltipHelp content="Small help icon" size="sm" />
            <TooltipHelp content="Medium help icon" size="md" />
            <TooltipHelp content="Large help icon" size="lg" />
        </div>
}`,...($=(X=f.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var G,K,Q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 p-8">
            <p className="text-sm">
                This is some text with{" "}
                <Tooltip content="Additional information" placement="top">
                    <span className="underline decoration-dotted cursor-help">a tooltip</span>
                </Tooltip>{" "}
                inline.
            </p>
            <p className="text-sm">
                Hover over{" "}
                <Tooltip content="Another helpful note" placement="bottom">
                    <span className="font-semibold cursor-help">this text</span>
                </Tooltip>{" "}
                for more info.
            </p>
        </div>
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ce=["Default","Placements","WithoutArrow","WithDelay","LongContent","HelpIcon","HelpIconSizes","OnTextElements"];export{c as Default,h as HelpIcon,f as HelpIconSizes,u as LongContent,x as OnTextElements,p as Placements,d as WithDelay,m as WithoutArrow,ce as __namedExportsOrder,ie as default};
