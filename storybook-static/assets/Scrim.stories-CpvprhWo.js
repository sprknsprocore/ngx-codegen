import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-Dz3UJJSw.js";import{c as X}from"./clsx-B-dksMZM.js";import{B as t}from"./Button-CZgY2kMk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Dp3B9jqt.js";const o=r.forwardRef(function({className:n,open:s=!1,onClose:c,disableBackdropClick:b=!1,disableEscapeKeyDown:i=!1,zIndex:A=1e3,opacity:U="medium",disableBlur:Y=!1,children:Z,...F},G){r.useEffect(()=>{if(!s||i)return;const l=Q=>{Q.key==="Escape"&&(c==null||c())};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[s,i,c]),r.useEffect(()=>{if(!s)return;const l=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=l}},[s]);const H=l=>{l.target===l.currentTarget&&!b&&(c==null||c())},J={light:"bg-scrim-light",medium:"bg-scrim-medium",dark:"bg-scrim-dark"};return s?e.jsx("div",{ref:G,role:"presentation",onClick:H,className:X("fixed inset-0 flex items-center justify-center transition-opacity",J[U],!Y&&"backdrop-blur-sm",n),style:{zIndex:A},...F,children:Z}):null});try{o.displayName="Scrim",o.__docgenInfo={description:"",displayName:"Scrim",props:{open:{defaultValue:{value:"false"},description:"Whether the scrim is visible",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback when scrim is clicked",name:"onClose",required:!1,type:{name:"(() => void)"}},disableBackdropClick:{defaultValue:{value:"false"},description:"Prevent closing when clicking the scrim",name:"disableBackdropClick",required:!1,type:{name:"boolean"}},disableEscapeKeyDown:{defaultValue:{value:"false"},description:"Prevent closing when pressing Escape",name:"disableEscapeKeyDown",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:{value:"1000"},description:"Z-index of the scrim",name:"zIndex",required:!1,type:{name:"number"}},opacity:{defaultValue:{value:"medium"},description:"Opacity level",name:"opacity",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"medium"'},{value:'"dark"'}]}},disableBlur:{defaultValue:{value:"false"},description:"Disable blur effect",name:"disableBlur",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Children to render on top of scrim",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const re={title:"Components/Scrim",component:o,parameters:{layout:"fullscreen"},tags:["autodocs"]},d={render:a=>{const[n,s]=r.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(t,{onClick:()=>s(!0),children:"Open Scrim"}),e.jsx(o,{...a,open:n,onClose:()=>s(!1)})]})},args:{}},m={render:a=>{const[n,s]=r.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(t,{onClick:()=>s(!0),children:"Open Scrim with Content"}),e.jsx(o,{...a,open:n,onClose:()=>s(!1),children:e.jsxs("div",{className:"bg-bg-canvas rounded-lg shadow-4 p-6 max-w-md mx-4",children:[e.jsx("h2",{className:"text-h2 font-semibold mb-4",children:"Modal Content"}),e.jsx("p",{className:"text-fg-secondary mb-6",children:"This content is centered on the scrim. Click outside or press Escape to close."}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx(t,{emphasis:"secondary",onClick:()=>s(!1),children:"Cancel"}),e.jsx(t,{onClick:()=>s(!1),children:"Confirm"})]})]})})]})},args:{}},p={render:a=>{const[n,s]=r.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(t,{onClick:()=>s(!0),children:"Open Light Scrim"}),e.jsx(o,{...a,open:n,onClose:()=>s(!1),opacity:"light"})]})},args:{}},u={render:a=>{const[n,s]=r.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(t,{onClick:()=>s(!0),children:"Open Dark Scrim"}),e.jsx(o,{...a,open:n,onClose:()=>s(!1),opacity:"dark"})]})},args:{}},h={render:a=>{const[n,s]=r.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(t,{onClick:()=>s(!0),children:"Open Scrim without Blur"}),e.jsx(o,{...a,open:n,onClose:()=>s(!1),disableBlur:!0})]})},args:{}},f={render:a=>{const[n,s]=r.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(t,{onClick:()=>s(!0),children:"Open Scrim (No Backdrop Click)"}),e.jsx(o,{...a,open:n,onClose:()=>s(!1),disableBackdropClick:!0,children:e.jsxs("div",{className:"bg-bg-canvas rounded-lg shadow-4 p-6 max-w-md mx-4",children:[e.jsx("h2",{className:"text-h2 font-semibold mb-4",children:"Click outside won't close"}),e.jsx("p",{className:"text-fg-secondary mb-6",children:"You must use the button below to close this modal."}),e.jsx(t,{onClick:()=>s(!1),children:"Close"})]})})]})},args:{}},g={render:a=>{const[n,s]=r.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(t,{onClick:()=>s(!0),children:"Open Scrim (No Escape Key)"}),e.jsx(o,{...a,open:n,onClose:()=>s(!1),disableEscapeKeyDown:!0,children:e.jsxs("div",{className:"bg-bg-canvas rounded-lg shadow-4 p-6 max-w-md mx-4",children:[e.jsx("h2",{className:"text-h2 font-semibold mb-4",children:"Escape key disabled"}),e.jsx("p",{className:"text-fg-secondary mb-6",children:"Press Escape won't close this. Use the button or click outside."}),e.jsx(t,{onClick:()=>s(!1),children:"Close"})]})})]})},args:{}},x={render:()=>{const[a,n]=r.useState(!1),[s,c]=r.useState(!1),[b,i]=r.useState(!1);return e.jsxs("div",{className:"p-8 space-y-4",children:[e.jsx("p",{className:"text-fg-secondary mb-4",children:"Scrims are overlay layers that provide focus and context for modal content."}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{onClick:()=>n(!0),children:"Light Scrim"}),e.jsx(t,{onClick:()=>c(!0),children:"Medium Scrim (Default)"}),e.jsx(t,{onClick:()=>i(!0),children:"Dark Scrim"})]}),e.jsx(o,{open:a,onClose:()=>n(!1),opacity:"light",children:e.jsxs("div",{className:"bg-bg-canvas rounded-lg shadow-4 p-6 max-w-md mx-4",children:[e.jsx("h2",{className:"text-h2 font-semibold mb-2",children:"Light Opacity"}),e.jsx("p",{className:"text-fg-secondary mb-4",children:"Background is slightly dimmed."}),e.jsx(t,{onClick:()=>n(!1),children:"Close"})]})}),e.jsx(o,{open:s,onClose:()=>c(!1),opacity:"medium",children:e.jsxs("div",{className:"bg-bg-canvas rounded-lg shadow-4 p-6 max-w-md mx-4",children:[e.jsx("h2",{className:"text-h2 font-semibold mb-2",children:"Medium Opacity"}),e.jsx("p",{className:"text-fg-secondary mb-4",children:"Standard dimming level."}),e.jsx(t,{onClick:()=>c(!1),children:"Close"})]})}),e.jsx(o,{open:b,onClose:()=>i(!1),opacity:"dark",children:e.jsxs("div",{className:"bg-bg-canvas rounded-lg shadow-4 p-6 max-w-md mx-4",children:[e.jsx("h2",{className:"text-h2 font-semibold mb-2",children:"Dark Opacity"}),e.jsx("p",{className:"text-fg-secondary mb-4",children:"Strong emphasis on modal content."}),e.jsx(t,{onClick:()=>i(!1),children:"Close"})]})})]})}};var k,v,y;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="p-8">
                <Button onClick={() => setOpen(true)}>Open Scrim</Button>
                <Scrim {...args} open={open} onClose={() => setOpen(false)} />
            </div>;
  },
  args: {}
}`,...(y=(v=d.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var C,S,O;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="p-8">
                <Button onClick={() => setOpen(true)}>Open Scrim with Content</Button>
                <Scrim {...args} open={open} onClose={() => setOpen(false)}>
                    <div className="bg-bg-canvas rounded-lg shadow-4 p-6 max-w-md mx-4">
                        <h2 className="text-h2 font-semibold mb-4">Modal Content</h2>
                        <p className="text-fg-secondary mb-6">
                            This content is centered on the scrim. Click outside or press Escape to close.
                        </p>
                        <div className="flex gap-2 justify-end">
                            <Button emphasis="secondary" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button onClick={() => setOpen(false)}>Confirm</Button>
                        </div>
                    </div>
                </Scrim>
            </div>;
  },
  args: {}
}`,...(O=(S=m.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var N,j,B;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="p-8">
                <Button onClick={() => setOpen(true)}>Open Light Scrim</Button>
                <Scrim {...args} open={open} onClose={() => setOpen(false)} opacity="light" />
            </div>;
  },
  args: {}
}`,...(B=(j=p.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var w,D,E;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="p-8">
                <Button onClick={() => setOpen(true)}>Open Dark Scrim</Button>
                <Scrim {...args} open={open} onClose={() => setOpen(false)} opacity="dark" />
            </div>;
  },
  args: {}
}`,...(E=(D=u.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var L,M,V;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="p-8">
                <Button onClick={() => setOpen(true)}>Open Scrim without Blur</Button>
                <Scrim {...args} open={open} onClose={() => setOpen(false)} disableBlur />
            </div>;
  },
  args: {}
}`,...(V=(M=h.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var _,q,K;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="p-8">
                <Button onClick={() => setOpen(true)}>Open Scrim (No Backdrop Click)</Button>
                <Scrim {...args} open={open} onClose={() => setOpen(false)} disableBackdropClick>
                    <div className="bg-bg-canvas rounded-lg shadow-4 p-6 max-w-md mx-4">
                        <h2 className="text-h2 font-semibold mb-4">Click outside won't close</h2>
                        <p className="text-fg-secondary mb-6">
                            You must use the button below to close this modal.
                        </p>
                        <Button onClick={() => setOpen(false)}>Close</Button>
                    </div>
                </Scrim>
            </div>;
  },
  args: {}
}`,...(K=(q=f.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var P,I,R;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div className="p-8">
                <Button onClick={() => setOpen(true)}>Open Scrim (No Escape Key)</Button>
                <Scrim {...args} open={open} onClose={() => setOpen(false)} disableEscapeKeyDown>
                    <div className="bg-bg-canvas rounded-lg shadow-4 p-6 max-w-md mx-4">
                        <h2 className="text-h2 font-semibold mb-4">Escape key disabled</h2>
                        <p className="text-fg-secondary mb-6">
                            Press Escape won't close this. Use the button or click outside.
                        </p>
                        <Button onClick={() => setOpen(false)}>Close</Button>
                    </div>
                </Scrim>
            </div>;
  },
  args: {}
}`,...(R=(I=g.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var T,W,z;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [openLight, setOpenLight] = useState(false);
    const [openMedium, setOpenMedium] = useState(false);
    const [openDark, setOpenDark] = useState(false);
    return <div className="p-8 space-y-4">
                <p className="text-fg-secondary mb-4">
                    Scrims are overlay layers that provide focus and context for modal content.
                </p>

                <div className="space-y-2">
                    <Button onClick={() => setOpenLight(true)}>Light Scrim</Button>
                    <Button onClick={() => setOpenMedium(true)}>Medium Scrim (Default)</Button>
                    <Button onClick={() => setOpenDark(true)}>Dark Scrim</Button>
                </div>

                <Scrim open={openLight} onClose={() => setOpenLight(false)} opacity="light">
                    <div className="bg-bg-canvas rounded-lg shadow-4 p-6 max-w-md mx-4">
                        <h2 className="text-h2 font-semibold mb-2">Light Opacity</h2>
                        <p className="text-fg-secondary mb-4">Background is slightly dimmed.</p>
                        <Button onClick={() => setOpenLight(false)}>Close</Button>
                    </div>
                </Scrim>

                <Scrim open={openMedium} onClose={() => setOpenMedium(false)} opacity="medium">
                    <div className="bg-bg-canvas rounded-lg shadow-4 p-6 max-w-md mx-4">
                        <h2 className="text-h2 font-semibold mb-2">Medium Opacity</h2>
                        <p className="text-fg-secondary mb-4">Standard dimming level.</p>
                        <Button onClick={() => setOpenMedium(false)}>Close</Button>
                    </div>
                </Scrim>

                <Scrim open={openDark} onClose={() => setOpenDark(false)} opacity="dark">
                    <div className="bg-bg-canvas rounded-lg shadow-4 p-6 max-w-md mx-4">
                        <h2 className="text-h2 font-semibold mb-2">Dark Opacity</h2>
                        <p className="text-fg-secondary mb-4">Strong emphasis on modal content.</p>
                        <Button onClick={() => setOpenDark(false)}>Close</Button>
                    </div>
                </Scrim>
            </div>;
  }
}`,...(z=(W=x.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};const oe=["Default","WithContent","LightOpacity","DarkOpacity","NoBlur","NoBackdropClick","NoEscapeKey","AllVariants"];export{x as AllVariants,u as DarkOpacity,d as Default,p as LightOpacity,f as NoBackdropClick,h as NoBlur,g as NoEscapeKey,m as WithContent,oe as __namedExportsOrder,re as default};
