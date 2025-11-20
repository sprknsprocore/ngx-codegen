import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-Dz3UJJSw.js";import{c as ae}from"./index-Dp3B9jqt.js";import{c as O}from"./clsx-B-dksMZM.js";import{B as s}from"./Button-CZgY2kMk.js";import{I as p}from"./Input-80mIrHdw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./InputBase-Bz2wEZFE.js";const ue=ae("fixed bg-bg-canvas border-border-default flex flex-col z-40 transition-transform duration-300",{variants:{position:{left:"top-0 left-0 h-full border-r",right:"top-0 right-0 h-full border-l",top:"top-0 left-0 w-full border-b",bottom:"bottom-0 left-0 w-full border-t"},size:{sm:"",md:"",lg:"",xl:"",full:""},shadow:{none:"",1:"shadow-1",2:"shadow-2",3:"shadow-3",4:"shadow-4"}},compoundVariants:[{position:"left",size:"sm",class:"w-panel-sm"},{position:"left",size:"md",class:"w-panel-md"},{position:"left",size:"lg",class:"w-panel-lg"},{position:"left",size:"xl",class:"w-panel-xl"},{position:"left",size:"full",class:"w-full"},{position:"right",size:"sm",class:"w-panel-sm"},{position:"right",size:"md",class:"w-panel-md"},{position:"right",size:"lg",class:"w-panel-lg"},{position:"right",size:"xl",class:"w-panel-xl"},{position:"right",size:"full",class:"w-full"},{position:"top",size:"sm",class:"h-panel-sm"},{position:"top",size:"md",class:"h-panel-md"},{position:"top",size:"lg",class:"h-panel-lg"},{position:"top",size:"xl",class:"h-panel-xl"},{position:"top",size:"full",class:"h-full"},{position:"bottom",size:"sm",class:"h-panel-sm"},{position:"bottom",size:"md",class:"h-panel-md"},{position:"bottom",size:"lg",class:"h-panel-lg"},{position:"bottom",size:"xl",class:"h-panel-xl"},{position:"bottom",size:"full",class:"h-full"}],defaultVariants:{position:"right",size:"md",shadow:"3"}}),me=ae("fixed inset-0 bg-scrim-light transition-opacity duration-300",{variants:{visible:{true:"opacity-100",false:"opacity-0 pointer-events-none"}},defaultVariants:{visible:!1}}),r=l.forwardRef(function({className:n,position:a,size:o,shadow:m,open:c=!1,onClose:d,title:f,children:oe,showBackdrop:v=!1,closeOnBackdropClick:se=!0,showCloseButton:B=!0,footer:N,...re},ie){l.useEffect(()=>{if(c&&v)return document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}},[c,v]),l.useEffect(()=>{if(!c)return;const L=pe=>{pe.key==="Escape"&&(d==null||d())};return document.addEventListener("keydown",L),()=>document.removeEventListener("keydown",L)},[c,d]);const ce=()=>{if(c)return"translate-x-0 translate-y-0";switch(a){case"left":return"-translate-x-full";case"right":return"translate-x-full";case"top":return"-translate-y-full";case"bottom":return"translate-y-full";default:return"translate-x-full"}},de=()=>{se&&(d==null||d())};return e.jsxs(e.Fragment,{children:[v&&e.jsx("div",{className:me({visible:c}),onClick:de,style:{zIndex:39}}),e.jsxs("div",{ref:ie,className:O(ue({position:a,size:o,shadow:m}),ce(),n),...re,children:[(f||B)&&e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border-default flex-shrink-0",children:[e.jsx("h2",{className:"text-lg font-semibold text-fg-default",children:f}),B&&e.jsx(s,{size:"sm",emphasis:"tertiary",onClick:d,"aria-label":"Close panel",children:e.jsx("svg",{className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsx("div",{className:"flex-1 overflow-y-auto",children:oe}),N&&e.jsx("div",{className:"px-4 py-3 border-t border-border-default flex-shrink-0",children:N})]})]})}),i=l.forwardRef(function({className:n,...a},o){return e.jsx("div",{ref:o,className:O("p-4",n),...a})}),u=l.forwardRef(function({className:n,title:a,children:o,...m},c){return e.jsxs("div",{ref:c,className:O("space-y-3",n),...m,children:[a&&e.jsx("h3",{className:"text-sm font-semibold text-fg-default",children:a}),o]})});try{r.displayName="Panel",r.__docgenInfo={description:"",displayName:"Panel",props:{open:{defaultValue:{value:"false"},description:"Whether the panel is open",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback when panel should close",name:"onClose",required:!1,type:{name:"(() => void)"}},title:{defaultValue:null,description:"Panel title",name:"title",required:!1,type:{name:"ReactNode"}},showBackdrop:{defaultValue:{value:"false"},description:"Whether to show backdrop/overlay",name:"showBackdrop",required:!1,type:{name:"boolean"}},closeOnBackdropClick:{defaultValue:{value:"true"},description:"Whether backdrop should close panel on click",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}},showCloseButton:{defaultValue:{value:"true"},description:"Whether to show close button",name:"showCloseButton",required:!1,type:{name:"boolean"}},footer:{defaultValue:null,description:"Footer content (typically actions)",name:"footer",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | "xl" | "full" | null'}},shadow:{defaultValue:null,description:"",name:"shadow",required:!1,type:{name:'"none" | "1" | "2" | "3" | "4" | null'}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'"left" | "right" | "top" | "bottom" | null'}}}}}catch{}try{i.displayName="PanelContent",i.__docgenInfo={description:"PanelContent - Convenience component for panel content with padding",displayName:"PanelContent",props:{}}}catch{}try{u.displayName="PanelSection",u.__docgenInfo={description:"PanelSection - Convenience component for sections within panel content",displayName:"PanelSection",props:{}}}catch{}const w=l.forwardRef(function({docked:n=!1,onDockChange:a,title:o,showCloseButton:m=!0,...c},d){const f=o&&e.jsxs("div",{className:"flex items-center gap-2 w-full",children:[e.jsx("span",{className:"flex-1",children:o}),e.jsx("button",{type:"button",onClick:()=>a==null?void 0:a(!n),className:"p-1 hover:bg-bg-surface rounded transition-colors","aria-label":n?"Undock panel":"Dock panel",title:n?"Undock panel":"Dock panel",children:n?e.jsxs("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}):e.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"})})})]});return e.jsx(r,{ref:d,title:f,showBackdrop:!1,showCloseButton:m,...c})});try{w.displayName="DockPanel",w.__docgenInfo={description:`DockPanel - A panel that can be docked to the side of the page
Typically used for tool panels, property inspectors, etc.
Does not have a backdrop overlay.`,displayName:"DockPanel",props:{docked:{defaultValue:{value:"false"},description:"Whether the panel is docked (pinned)",name:"docked",required:!1,type:{name:"boolean"}},onDockChange:{defaultValue:null,description:"Callback when dock state changes",name:"onDockChange",required:!1,type:{name:"((docked: boolean) => void)"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | "xl" | "full" | null'}},shadow:{defaultValue:null,description:"",name:"shadow",required:!1,type:{name:'"none" | "1" | "2" | "3" | "4" | null'}},title:{defaultValue:null,description:"Panel title",name:"title",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"Footer content (typically actions)",name:"footer",required:!1,type:{name:"ReactNode"}},open:{defaultValue:null,description:"Whether the panel is open",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback when panel should close",name:"onClose",required:!1,type:{name:"(() => void)"}},showCloseButton:{defaultValue:{value:"true"},description:"Whether to show close button",name:"showCloseButton",required:!1,type:{name:"boolean"}},closeOnBackdropClick:{defaultValue:null,description:"Whether backdrop should close panel on click",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'"left" | "right" | "top" | "bottom" | null'}}}}}catch{}const S=l.forwardRef(function({closeOnBackdropClick:n=!0,...a},o){return e.jsx(r,{ref:o,showBackdrop:!0,closeOnBackdropClick:n,...a})});try{S.displayName="PagePanel",S.__docgenInfo={description:`PagePanel - A modal-like panel that overlays the entire page
Typically used for forms, detailed views, settings, etc.
Always has a backdrop overlay.`,displayName:"PagePanel",props:{closeOnBackdropClick:{defaultValue:{value:"true"},description:"Whether backdrop should close panel on click (default: true for page panels)",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | "xl" | "full" | null'}},shadow:{defaultValue:null,description:"",name:"shadow",required:!1,type:{name:'"none" | "1" | "2" | "3" | "4" | null'}},title:{defaultValue:null,description:"Panel title",name:"title",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"Footer content (typically actions)",name:"footer",required:!1,type:{name:"ReactNode"}},open:{defaultValue:null,description:"Whether the panel is open",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback when panel should close",name:"onClose",required:!1,type:{name:"(() => void)"}},showCloseButton:{defaultValue:null,description:"Whether to show close button",name:"showCloseButton",required:!1,type:{name:"boolean"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'"left" | "right" | "top" | "bottom" | null'}}}}}catch{}const ye={title:"Components/Panel",component:r,tags:["autodocs"],argTypes:{position:{control:"select",options:["left","right","top","bottom"]},size:{control:"select",options:["sm","md","lg","xl","full"]},shadow:{control:"select",options:["none","1","2","3","4"]},open:{control:"boolean"},showBackdrop:{control:"boolean"},closeOnBackdropClick:{control:"boolean"},showCloseButton:{control:"boolean"}}},h={render:()=>{const[t,n]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(s,{onClick:()=>n(!0),children:"Open Panel"}),e.jsx(r,{open:t,onClose:()=>n(!1),title:"Panel Title",children:e.jsx(i,{children:e.jsx("p",{className:"text-sm text-fg-default",children:"This is a basic panel with some content."})})})]})}},x={render:()=>{const[t,n]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(s,{onClick:()=>n(!0),children:"Open Panel with Backdrop"}),e.jsx(r,{open:t,onClose:()=>n(!1),title:"Panel with Backdrop",showBackdrop:!0,children:e.jsx(i,{children:e.jsx("p",{className:"text-sm text-fg-default",children:"This panel has a backdrop overlay. Click outside to close."})})})]})}},P={render:()=>{const[t,n]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(s,{onClick:()=>n(!0),children:"Open Panel with Footer"}),e.jsx(r,{open:t,onClose:()=>n(!1),title:"Panel with Actions",showBackdrop:!0,footer:e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx(s,{emphasis:"secondary",onClick:()=>n(!1),children:"Cancel"}),e.jsx(s,{onClick:()=>n(!1),children:"Save"})]}),children:e.jsxs(i,{children:[e.jsxs(u,{title:"Section 1",children:[e.jsx(p,{label:"Field 1",placeholder:"Enter value"}),e.jsx(p,{label:"Field 2",placeholder:"Enter value"})]}),e.jsxs(u,{title:"Section 2",children:[e.jsx(p,{label:"Field 3",placeholder:"Enter value"}),e.jsx(p,{label:"Field 4",placeholder:"Enter value"})]})]})})]})}},g={render:()=>{const[t,n]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(s,{onClick:()=>n(!0),children:"Open Left Panel"}),e.jsx(r,{open:t,onClose:()=>n(!1),title:"Left Panel",position:"left",children:e.jsx(i,{children:e.jsx("p",{className:"text-sm text-fg-default",children:"Panel slides in from the left."})})})]})}},k={render:()=>{const[t,n]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(s,{onClick:()=>n(!0),children:"Open Right Panel"}),e.jsx(r,{open:t,onClose:()=>n(!1),title:"Right Panel",position:"right",children:e.jsx(i,{children:e.jsx("p",{className:"text-sm text-fg-default",children:"Panel slides in from the right."})})})]})}},C={render:()=>{const[t,n]=l.useState(!1),[a,o]=l.useState(!1),[m,c]=l.useState(!1),[d,f]=l.useState(!1);return e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{onClick:()=>n(!0),children:"Small"}),e.jsx(s,{onClick:()=>o(!0),children:"Medium"}),e.jsx(s,{onClick:()=>c(!0),children:"Large"}),e.jsx(s,{onClick:()=>f(!0),children:"XLarge"}),e.jsx(r,{open:t,onClose:()=>n(!1),title:"Small Panel",size:"sm",children:e.jsx(i,{children:e.jsx("p",{className:"text-sm",children:"Small panel (256px)"})})}),e.jsx(r,{open:a,onClose:()=>o(!1),title:"Medium Panel",size:"md",children:e.jsx(i,{children:e.jsx("p",{className:"text-sm",children:"Medium panel (320px)"})})}),e.jsx(r,{open:m,onClose:()=>c(!1),title:"Large Panel",size:"lg",children:e.jsx(i,{children:e.jsx("p",{className:"text-sm",children:"Large panel (384px)"})})}),e.jsx(r,{open:d,onClose:()=>f(!1),title:"XLarge Panel",size:"xl",children:e.jsx(i,{children:e.jsx("p",{className:"text-sm",children:"XLarge panel (480px)"})})})]})}},j={name:"Dock Panel",render:()=>{const[t,n]=l.useState(!1),[a,o]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(s,{onClick:()=>n(!0),children:"Open Dock Panel"}),e.jsx(w,{open:t,onClose:()=>n(!1),title:"Dock Panel",docked:a,onDockChange:o,children:e.jsx(i,{children:e.jsxs(u,{title:"Properties",children:[e.jsx(p,{label:"Name",placeholder:"Enter name"}),e.jsx(p,{label:"Value",placeholder:"Enter value"}),e.jsx("div",{className:"text-sm text-fg-secondary mt-4",children:a?"Panel is docked":"Panel is floating"})]})})})]})}},y={name:"Page Panel",render:()=>{const[t,n]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(s,{onClick:()=>n(!0),children:"Open Page Panel"}),e.jsx(S,{open:t,onClose:()=>n(!1),title:"Page Level Panel",footer:e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx(s,{emphasis:"secondary",onClick:()=>n(!1),children:"Cancel"}),e.jsx(s,{onClick:()=>n(!1),children:"Save"})]}),children:e.jsxs(i,{children:[e.jsxs(u,{title:"User Information",children:[e.jsx(p,{label:"First Name",placeholder:"John"}),e.jsx(p,{label:"Last Name",placeholder:"Doe"}),e.jsx(p,{label:"Email",type:"email",placeholder:"john@example.com"})]}),e.jsxs(u,{title:"Preferences",children:[e.jsx(p,{label:"Language",placeholder:"English"}),e.jsx(p,{label:"Timezone",placeholder:"UTC"})]})]})})]})}},b={render:()=>{const[t,n]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(s,{onClick:()=>n(!0),children:"Open Panel with Long Content"}),e.jsx(r,{open:t,onClose:()=>n(!1),title:"Long Content",showBackdrop:!0,children:e.jsx(i,{children:Array.from({length:20}).map((a,o)=>e.jsx(u,{title:`Section ${o+1}`,children:e.jsx("p",{className:"text-sm text-fg-default",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})},o))})})]})}};var z,_,V;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
                <Button onClick={() => setOpen(true)}>Open Panel</Button>
                <Panel open={open} onClose={() => setOpen(false)} title="Panel Title">
                    <PanelContent>
                        <p className="text-sm text-fg-default">
                            This is a basic panel with some content.
                        </p>
                    </PanelContent>
                </Panel>
            </div>;
  }
}`,...(V=(_=h.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var q,D,E;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
                <Button onClick={() => setOpen(true)}>Open Panel with Backdrop</Button>
                <Panel open={open} onClose={() => setOpen(false)} title="Panel with Backdrop" showBackdrop>
                    <PanelContent>
                        <p className="text-sm text-fg-default">
                            This panel has a backdrop overlay. Click outside to close.
                        </p>
                    </PanelContent>
                </Panel>
            </div>;
  }
}`,...(E=(D=x.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var I,M,W;P.parameters={...P.parameters,docs:{...(I=P.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
                <Button onClick={() => setOpen(true)}>Open Panel with Footer</Button>
                <Panel open={open} onClose={() => setOpen(false)} title="Panel with Actions" showBackdrop footer={<div className="flex gap-2 justify-end">
                            <Button emphasis="secondary" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button onClick={() => setOpen(false)}>Save</Button>
                        </div>}>
                    <PanelContent>
                        <PanelSection title="Section 1">
                            <Input label="Field 1" placeholder="Enter value" />
                            <Input label="Field 2" placeholder="Enter value" />
                        </PanelSection>
                        <PanelSection title="Section 2">
                            <Input label="Field 3" placeholder="Enter value" />
                            <Input label="Field 4" placeholder="Enter value" />
                        </PanelSection>
                    </PanelContent>
                </Panel>
            </div>;
  }
}`,...(W=(M=P.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var F,R,T;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
                <Button onClick={() => setOpen(true)}>Open Left Panel</Button>
                <Panel open={open} onClose={() => setOpen(false)} title="Left Panel" position="left">
                    <PanelContent>
                        <p className="text-sm text-fg-default">Panel slides in from the left.</p>
                    </PanelContent>
                </Panel>
            </div>;
  }
}`,...(T=(R=g.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var X,A,U;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
                <Button onClick={() => setOpen(true)}>Open Right Panel</Button>
                <Panel open={open} onClose={() => setOpen(false)} title="Right Panel" position="right">
                    <PanelContent>
                        <p className="text-sm text-fg-default">Panel slides in from the right.</p>
                    </PanelContent>
                </Panel>
            </div>;
  }
}`,...(U=(A=k.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var J,$,G;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [openSm, setOpenSm] = useState(false);
    const [openMd, setOpenMd] = useState(false);
    const [openLg, setOpenLg] = useState(false);
    const [openXl, setOpenXl] = useState(false);
    return <div className="flex gap-2">
                <Button onClick={() => setOpenSm(true)}>Small</Button>
                <Button onClick={() => setOpenMd(true)}>Medium</Button>
                <Button onClick={() => setOpenLg(true)}>Large</Button>
                <Button onClick={() => setOpenXl(true)}>XLarge</Button>

                <Panel open={openSm} onClose={() => setOpenSm(false)} title="Small Panel" size="sm">
                    <PanelContent>
                        <p className="text-sm">Small panel (256px)</p>
                    </PanelContent>
                </Panel>
                <Panel open={openMd} onClose={() => setOpenMd(false)} title="Medium Panel" size="md">
                    <PanelContent>
                        <p className="text-sm">Medium panel (320px)</p>
                    </PanelContent>
                </Panel>
                <Panel open={openLg} onClose={() => setOpenLg(false)} title="Large Panel" size="lg">
                    <PanelContent>
                        <p className="text-sm">Large panel (384px)</p>
                    </PanelContent>
                </Panel>
                <Panel open={openXl} onClose={() => setOpenXl(false)} title="XLarge Panel" size="xl">
                    <PanelContent>
                        <p className="text-sm">XLarge panel (480px)</p>
                    </PanelContent>
                </Panel>
            </div>;
  }
}`,...(G=($=C.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var H,K,Q;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Dock Panel",
  render: () => {
    const [open, setOpen] = useState(false);
    const [docked, setDocked] = useState(false);
    return <div>
                <Button onClick={() => setOpen(true)}>Open Dock Panel</Button>
                <DockPanel open={open} onClose={() => setOpen(false)} title="Dock Panel" docked={docked} onDockChange={setDocked}>
                    <PanelContent>
                        <PanelSection title="Properties">
                            <Input label="Name" placeholder="Enter name" />
                            <Input label="Value" placeholder="Enter value" />
                            <div className="text-sm text-fg-secondary mt-4">
                                {docked ? "Panel is docked" : "Panel is floating"}
                            </div>
                        </PanelSection>
                    </PanelContent>
                </DockPanel>
            </div>;
  }
}`,...(Q=(K=j.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Page Panel",
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
                <Button onClick={() => setOpen(true)}>Open Page Panel</Button>
                <PagePanel open={open} onClose={() => setOpen(false)} title="Page Level Panel" footer={<div className="flex gap-2 justify-end">
                            <Button emphasis="secondary" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button onClick={() => setOpen(false)}>Save</Button>
                        </div>}>
                    <PanelContent>
                        <PanelSection title="User Information">
                            <Input label="First Name" placeholder="John" />
                            <Input label="Last Name" placeholder="Doe" />
                            <Input label="Email" type="email" placeholder="john@example.com" />
                        </PanelSection>
                        <PanelSection title="Preferences">
                            <Input label="Language" placeholder="English" />
                            <Input label="Timezone" placeholder="UTC" />
                        </PanelSection>
                    </PanelContent>
                </PagePanel>
            </div>;
  }
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,le;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
                <Button onClick={() => setOpen(true)}>Open Panel with Long Content</Button>
                <Panel open={open} onClose={() => setOpen(false)} title="Long Content" showBackdrop>
                    <PanelContent>
                        {Array.from({
            length: 20
          }).map((_, i) => <PanelSection key={i} title={\`Section \${i + 1}\`}>
                                <p className="text-sm text-fg-default">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </PanelSection>)}
                    </PanelContent>
                </Panel>
            </div>;
  }
}`,...(le=(te=b.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};const be=["Default","WithBackdrop","WithFooter","LeftPosition","RightPosition","Sizes","DockPanelStory","PagePanelStory","LongContent"];export{h as Default,j as DockPanelStory,g as LeftPosition,b as LongContent,y as PagePanelStory,k as RightPosition,C as Sizes,x as WithBackdrop,P as WithFooter,be as __namedExportsOrder,ye as default};
