import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-Dz3UJJSw.js";import{c as ue}from"./index-Dp3B9jqt.js";import{c as B}from"./clsx-B-dksMZM.js";import{B as c}from"./Button-BIc0yRBS.js";import"./_commonjsHelpers-CqkleIqs.js";const Pe=ue("absolute bg-bg-canvas rounded-md border border-border-default z-50",{variants:{shadow:{1:"shadow-1",2:"shadow-2",3:"shadow-3",4:"shadow-4"},size:{sm:"min-w-48 max-w-64",md:"min-w-64 max-w-80",lg:"min-w-80 max-w-96",auto:""}},defaultVariants:{shadow:"2",size:"md"}}),Ce=ue("absolute w-3 h-3 bg-bg-canvas border transform rotate-45",{variants:{placement:{top:"bottom-[-6px] left-1/2 -translate-x-1/2 border-b border-r border-border-default",bottom:"top-[-6px] left-1/2 -translate-x-1/2 border-t border-l border-border-default",left:"right-[-6px] top-1/2 -translate-y-1/2 border-r border-t border-border-default",right:"left-[-6px] top-1/2 -translate-y-1/2 border-l border-b border-border-default"}},defaultVariants:{placement:"bottom"}}),a=n.forwardRef(function({className:o,shadow:s,size:l,open:d,onClose:T,trigger:fe,content:he,placement:R="bottom",showArrow:ve=!0,offset:m=8,...ge},x){const[A,F]=n.useState(!1),u=n.useRef(null),f=n.useRef(null),h=d!==void 0?d:A,xe=()=>{d===void 0&&F(!A)};n.useEffect(()=>{if(!h)return;const r=i=>{u.current&&!u.current.contains(i.target)&&f.current&&!f.current.contains(i.target)&&(d===void 0?F(!1):T&&T())};return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[h,d,T]);const[H,je]=n.useState({top:0,left:0});return n.useEffect(()=>{if(!h||!u.current||!f.current)return;const r=u.current.getBoundingClientRect(),i=f.current.getBoundingClientRect();let v=0,g=0;switch(R){case"top":v=r.top-i.height-m,g=r.left+r.width/2-i.width/2;break;case"bottom":v=r.bottom+m,g=r.left+r.width/2-i.width/2;break;case"left":v=r.top+r.height/2-i.height/2,g=r.left-i.width-m;break;case"right":v=r.top+r.height/2-i.height/2,g=r.right+m;break}je({top:v,left:g})},[h,R,m]),e.jsxs("div",{className:"relative inline-block",children:[e.jsx("div",{ref:u,onClick:xe,children:fe}),h&&e.jsxs("div",{ref:r=>{f.current=r,typeof x=="function"?x(r):x&&(x.current=r)},className:B(Pe({shadow:s,size:l}),o),style:{top:`${H.top}px`,left:`${H.left}px`,position:"fixed"},...ge,children:[ve&&e.jsx("div",{className:Ce({placement:R})}),he]})]})}),p=n.forwardRef(function({className:o,...s},l){return e.jsx("div",{ref:l,className:B("p-4",o),...s})}),_=n.forwardRef(function({className:o,...s},l){return e.jsx("div",{ref:l,className:B("px-4 py-3 border-b border-border-default font-semibold text-fg-default",o),...s})}),z=n.forwardRef(function({className:o,...s},l){return e.jsx("div",{ref:l,className:B("px-4 py-3 border-t border-border-default",o),...s})});try{a.displayName="Popover",a.__docgenInfo={description:"",displayName:"Popover",props:{open:{defaultValue:null,description:"Whether the popover is open",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback when popover should close",name:"onClose",required:!1,type:{name:"(() => void)"}},trigger:{defaultValue:null,description:"The trigger element",name:"trigger",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"The content to display in the popover",name:"content",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:{value:"bottom"},description:"Placement of the popover relative to the trigger",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},showArrow:{defaultValue:{value:"true"},description:"Whether to show an arrow pointing to the trigger",name:"showArrow",required:!1,type:{name:"boolean"}},offset:{defaultValue:{value:"8"},description:"Offset from the trigger in pixels",name:"offset",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | "auto" | null'}},shadow:{defaultValue:null,description:"",name:"shadow",required:!1,type:{name:'"1" | "2" | "3" | "4" | null'}}}}}catch{}try{p.displayName="PopoverContent",p.__docgenInfo={description:"PopoverContent - Convenience component for styling popover content",displayName:"PopoverContent",props:{}}}catch{}try{_.displayName="PopoverHeader",_.__docgenInfo={description:"PopoverHeader - Convenience component for popover headers",displayName:"PopoverHeader",props:{}}}catch{}try{z.displayName="PopoverFooter",z.__docgenInfo={description:"PopoverFooter - Convenience component for popover footers",displayName:"PopoverFooter",props:{}}}catch{}const ke={title:"Components/Popover",component:a,tags:["autodocs"],argTypes:{placement:{control:"select",options:["top","bottom","left","right"]},shadow:{control:"select",options:["1","2","3","4"]},size:{control:"select",options:["sm","md","lg","auto"]},showArrow:{control:"boolean"}}},j={render:()=>{const[t,o]=n.useState(!1);return e.jsx("div",{className:"flex items-center justify-center h-96",children:e.jsx(a,{open:t,onClose:()=>o(!1),trigger:e.jsx(c,{onClick:()=>o(!t),children:"Toggle Popover"}),content:e.jsx(p,{children:e.jsx("p",{className:"text-sm",children:"This is a simple popover with some content."})})})})}},P={render:()=>{const[t,o]=n.useState(!1);return e.jsx("div",{className:"flex items-center justify-center h-96",children:e.jsx(a,{open:t,onClose:()=>o(!1),trigger:e.jsx(c,{onClick:()=>o(!t),children:"Open Popover"}),content:e.jsxs(e.Fragment,{children:[e.jsx(_,{children:"Popover Title"}),e.jsxs(p,{children:[e.jsx("p",{className:"text-sm text-fg-default mb-2",children:"This popover has a header section with a title."}),e.jsx("p",{className:"text-sm text-fg-secondary",children:"You can add any content here."})]})]})})})}},C={render:()=>{const[t,o]=n.useState(!1);return e.jsx("div",{className:"flex items-center justify-center h-96",children:e.jsx(a,{open:t,onClose:()=>o(!1),trigger:e.jsx(c,{onClick:()=>o(!t),children:"Open Popover"}),content:e.jsxs(e.Fragment,{children:[e.jsx(_,{children:"Confirmation"}),e.jsx(p,{children:e.jsx("p",{className:"text-sm text-fg-default",children:"Are you sure you want to proceed with this action?"})}),e.jsx(z,{children:e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx(c,{size:"sm",emphasis:"secondary",onClick:()=>o(!1),children:"Cancel"}),e.jsx(c,{size:"sm",onClick:()=>o(!1),children:"Confirm"})]})})]})})})}},y={render:()=>{const[t,o]=n.useState(!1);return e.jsx("div",{className:"flex items-center justify-center h-96",children:e.jsx(a,{open:t,onClose:()=>o(!1),placement:"top",trigger:e.jsx(c,{onClick:()=>o(!t),children:"Top Placement"}),content:e.jsx(p,{children:e.jsx("p",{className:"text-sm",children:"Popover appears above the trigger."})})})})}},w={render:()=>{const[t,o]=n.useState(!1);return e.jsx("div",{className:"flex items-center justify-center h-96",children:e.jsx(a,{open:t,onClose:()=>o(!1),placement:"bottom",trigger:e.jsx(c,{onClick:()=>o(!t),children:"Bottom Placement"}),content:e.jsx(p,{children:e.jsx("p",{className:"text-sm",children:"Popover appears below the trigger."})})})})}},b={render:()=>{const[t,o]=n.useState(!1);return e.jsx("div",{className:"flex items-center justify-center h-96",children:e.jsx(a,{open:t,onClose:()=>o(!1),placement:"left",trigger:e.jsx(c,{onClick:()=>o(!t),children:"Left Placement"}),content:e.jsx(p,{children:e.jsx("p",{className:"text-sm",children:"Popover appears to the left of the trigger."})})})})}},N={render:()=>{const[t,o]=n.useState(!1);return e.jsx("div",{className:"flex items-center justify-center h-96",children:e.jsx(a,{open:t,onClose:()=>o(!1),placement:"right",trigger:e.jsx(c,{onClick:()=>o(!t),children:"Right Placement"}),content:e.jsx(p,{children:e.jsx("p",{className:"text-sm",children:"Popover appears to the right of the trigger."})})})})}},O={render:()=>{const[t,o]=n.useState(!1);return e.jsx("div",{className:"flex items-center justify-center h-96",children:e.jsx(a,{open:t,onClose:()=>o(!1),showArrow:!1,trigger:e.jsx(c,{onClick:()=>o(!t),children:"No Arrow"}),content:e.jsx(p,{children:e.jsx("p",{className:"text-sm",children:"This popover has no arrow."})})})})}},S={render:()=>e.jsx("div",{className:"flex gap-4 items-center justify-center h-96",children:["sm","md","lg"].map(t=>{const[o,s]=n.useState(!1);return e.jsx(a,{open:o,onClose:()=>s(!1),size:t,trigger:e.jsxs(c,{onClick:()=>s(!o),children:["Size: ",t]}),content:e.jsx(p,{children:e.jsxs("p",{className:"text-sm",children:["This is a ",t," popover."]})})},t)})})},k={render:()=>e.jsx("div",{className:"flex gap-4 items-center justify-center h-96",children:["1","2","3","4"].map(t=>{const[o,s]=n.useState(!1);return e.jsx(a,{open:o,onClose:()=>s(!1),shadow:t,trigger:e.jsxs(c,{onClick:()=>s(!o),children:["Shadow: ",t]}),content:e.jsx(p,{children:e.jsxs("p",{className:"text-sm",children:["Shadow level ",t]})})},t)})})};var V,q,W;j.parameters={...j.parameters,docs:{...(V=j.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="flex items-center justify-center h-96">
                <Popover open={open} onClose={() => setOpen(false)} trigger={<Button onClick={() => setOpen(!open)}>Toggle Popover</Button>} content={<PopoverContent>
                            <p className="text-sm">This is a simple popover with some content.</p>
                        </PopoverContent>} />
            </div>;
  }
}`,...(W=(q=j.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var E,L,I;P.parameters={...P.parameters,docs:{...(E=P.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="flex items-center justify-center h-96">
                <Popover open={open} onClose={() => setOpen(false)} trigger={<Button onClick={() => setOpen(!open)}>Open Popover</Button>} content={<>
                            <PopoverHeader>Popover Title</PopoverHeader>
                            <PopoverContent>
                                <p className="text-sm text-fg-default mb-2">
                                    This popover has a header section with a title.
                                </p>
                                <p className="text-sm text-fg-secondary">
                                    You can add any content here.
                                </p>
                            </PopoverContent>
                        </>} />
            </div>;
  }
}`,...(I=(L=P.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var D,Y,$;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="flex items-center justify-center h-96">
                <Popover open={open} onClose={() => setOpen(false)} trigger={<Button onClick={() => setOpen(!open)}>Open Popover</Button>} content={<>
                            <PopoverHeader>Confirmation</PopoverHeader>
                            <PopoverContent>
                                <p className="text-sm text-fg-default">
                                    Are you sure you want to proceed with this action?
                                </p>
                            </PopoverContent>
                            <PopoverFooter>
                                <div className="flex gap-2 justify-end">
                                    <Button size="sm" emphasis="secondary" onClick={() => setOpen(false)}>
                                        Cancel
                                    </Button>
                                    <Button size="sm" onClick={() => setOpen(false)}>
                                        Confirm
                                    </Button>
                                </div>
                            </PopoverFooter>
                        </>} />
            </div>;
  }
}`,...($=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var G,J,K;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="flex items-center justify-center h-96">
                <Popover open={open} onClose={() => setOpen(false)} placement="top" trigger={<Button onClick={() => setOpen(!open)}>Top Placement</Button>} content={<PopoverContent>
                            <p className="text-sm">Popover appears above the trigger.</p>
                        </PopoverContent>} />
            </div>;
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,U;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="flex items-center justify-center h-96">
                <Popover open={open} onClose={() => setOpen(false)} placement="bottom" trigger={<Button onClick={() => setOpen(!open)}>Bottom Placement</Button>} content={<PopoverContent>
                            <p className="text-sm">Popover appears below the trigger.</p>
                        </PopoverContent>} />
            </div>;
  }
}`,...(U=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,ee;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="flex items-center justify-center h-96">
                <Popover open={open} onClose={() => setOpen(false)} placement="left" trigger={<Button onClick={() => setOpen(!open)}>Left Placement</Button>} content={<PopoverContent>
                            <p className="text-sm">Popover appears to the left of the trigger.</p>
                        </PopoverContent>} />
            </div>;
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,oe,ne;N.parameters={...N.parameters,docs:{...(te=N.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="flex items-center justify-center h-96">
                <Popover open={open} onClose={() => setOpen(false)} placement="right" trigger={<Button onClick={() => setOpen(!open)}>Right Placement</Button>} content={<PopoverContent>
                            <p className="text-sm">Popover appears to the right of the trigger.</p>
                        </PopoverContent>} />
            </div>;
  }
}`,...(ne=(oe=N.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var re,se,ae;O.parameters={...O.parameters,docs:{...(re=O.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="flex items-center justify-center h-96">
                <Popover open={open} onClose={() => setOpen(false)} showArrow={false} trigger={<Button onClick={() => setOpen(!open)}>No Arrow</Button>} content={<PopoverContent>
                            <p className="text-sm">This popover has no arrow.</p>
                        </PopoverContent>} />
            </div>;
  }
}`,...(ae=(se=O.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ce,pe,ie;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center justify-center h-96">
            {(["sm", "md", "lg"] as const).map(size => {
      const [open, setOpen] = useState(false);
      return <Popover key={size} open={open} onClose={() => setOpen(false)} size={size} trigger={<Button onClick={() => setOpen(!open)}>
                                Size: {size}
                            </Button>} content={<PopoverContent>
                                <p className="text-sm">This is a {size} popover.</p>
                            </PopoverContent>} />;
    })}
        </div>
}`,...(ie=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:ie.source}}};var le,de,me;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center justify-center h-96">
            {(["1", "2", "3", "4"] as const).map(shadow => {
      const [open, setOpen] = useState(false);
      return <Popover key={shadow} open={open} onClose={() => setOpen(false)} shadow={shadow} trigger={<Button onClick={() => setOpen(!open)}>
                                Shadow: {shadow}
                            </Button>} content={<PopoverContent>
                                <p className="text-sm">Shadow level {shadow}</p>
                            </PopoverContent>} />;
    })}
        </div>
}`,...(me=(de=k.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const _e=["Default","WithHeader","WithFooter","PlacementTop","PlacementBottom","PlacementLeft","PlacementRight","WithoutArrow","Sizes","CustomShadow"];export{k as CustomShadow,j as Default,w as PlacementBottom,b as PlacementLeft,N as PlacementRight,y as PlacementTop,S as Sizes,C as WithFooter,P as WithHeader,O as WithoutArrow,_e as __namedExportsOrder,ke as default};
