import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-Dz3UJJSw.js";import{c as P}from"./clsx-B-dksMZM.js";import{B as t}from"./Button-CZgY2kMk.js";import{I as j}from"./Input-80mIrHdw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Dp3B9jqt.js";import"./InputBase-Bz2wEZFE.js";const l=o.forwardRef(function({className:n,open:r,onClose:a,title:i,size:C="md",footer:d,showCloseButton:b=!0,closeOnBackdropClick:D=!0,children:U,...Z},$){if(o.useEffect(()=>{if(!r)return;const c=K=>{K.key==="Escape"&&(a==null||a())};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[r,a]),o.useEffect(()=>(r?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[r]),!r)return null;const G=c=>{D&&c.target===c.currentTarget&&(a==null||a())},J={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl",full:"max-w-full mx-4"};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-scrim-medium backdrop-blur-sm",onClick:G,children:e.jsxs("div",{ref:$,className:P("relative w-full bg-bg-canvas rounded-lg shadow-4 flex flex-col","max-h-[90vh]",J[C],n),role:"dialog","aria-modal":"true","aria-labelledby":i?"modal-title":void 0,...Z,children:[(i||b)&&e.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-border-default",children:[i&&e.jsx("h2",{id:"modal-title",className:"text-lg font-semibold text-fg-default",children:i}),b&&e.jsx("button",{type:"button",onClick:a,className:"ml-auto text-fg-secondary hover:text-fg-default transition-colors","aria-label":"Close modal",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:e.jsx("path",{d:"M5 5L15 15M5 15L15 5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]}),e.jsx("div",{className:"flex-1 overflow-y-auto px-6 py-4",children:U}),d&&e.jsx("div",{className:"flex items-center justify-end gap-3 px-6 py-4 border-t border-border-default",children:d})]})})}),y=o.forwardRef(function({className:n,primaryAction:r,secondaryAction:a,children:i,...C},d){return e.jsxs("div",{ref:d,className:P("flex items-center justify-end gap-3",n),...C,children:[i,a,r]})});try{l.displayName="Modal",l.__docgenInfo={description:"",displayName:"Modal",props:{open:{defaultValue:null,description:"Whether the modal is open",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Close handler",name:"onClose",required:!1,type:{name:"(() => void)"}},title:{defaultValue:null,description:"Modal title",name:"title",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Modal size",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}},footer:{defaultValue:null,description:"Footer content (typically action buttons)",name:"footer",required:!1,type:{name:"ReactNode"}},showCloseButton:{defaultValue:{value:"true"},description:"Whether to show the close button",name:"showCloseButton",required:!1,type:{name:"boolean"}},closeOnBackdropClick:{defaultValue:{value:"true"},description:"Whether clicking the backdrop closes the modal",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}}}}}catch{}try{y.displayName="ModalFooter",y.__docgenInfo={description:"",displayName:"ModalFooter",props:{primaryAction:{defaultValue:null,description:"Primary action button",name:"primaryAction",required:!1,type:{name:"ReactNode"}},secondaryAction:{defaultValue:null,description:"Secondary action button(s)",name:"secondaryAction",required:!1,type:{name:"ReactNode"}}}}}catch{}const oe={title:"Components/Modal",component:l,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl","full"]},showCloseButton:{control:"boolean"},closeOnBackdropClick:{control:"boolean"}}},p={render:()=>{const[s,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{open:s,onClose:()=>n(!1),title:"Modal Header Text",children:e.jsx("p",{className:"text-fg-default",children:"This is the modal content area."})})]})}},m={render:()=>{const[s,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{open:s,onClose:()=>n(!1),title:"Modal Header Text",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{emphasis:"secondary",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{emphasis:"primary",onClick:()=>n(!1),children:"Verb"})]}),children:e.jsx("p",{className:"text-fg-default",children:"This is the modal content area with action buttons in the footer."})})]})}},u={render:()=>{const[s,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{open:s,onClose:()=>n(!1),title:"Modal Header Text",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{emphasis:"secondary",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{emphasis:"primary",onClick:()=>n(!1),children:"Save"})]}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(j,{label:"Label",placeholder:"Placeholder"}),e.jsx(j,{label:"Label",placeholder:"Placeholder"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium text-fg-default",children:"Label"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",className:"rounded"}),e.jsx("span",{className:"text-sm",children:"Option 1 Now (16) Complete sentence or two a comment without punctuation"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",className:"rounded"}),e.jsx("span",{className:"text-sm",children:"Option 2 Now (16) Complete sentence or two a comment without punctuation"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",className:"rounded"}),e.jsx("span",{className:"text-sm",children:"Option 3 Now (16) Complete sentence or two a comment without punctuation"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium text-fg-default",children:"Label"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"radio",name:"radio-group"}),e.jsx("span",{className:"text-sm",children:"Option 1 All radio submit should have a simple sentence or two prose"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"radio",name:"radio-group"}),e.jsx("span",{className:"text-sm",children:"Option 2 All radio submit should have a simple sentence or two prose"})]}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"radio",name:"radio-group"}),e.jsx("span",{className:"text-sm",children:"Option 3 All radio submit should have a simple sentence or two prose"})]})]})]})]})})]})}},h={render:()=>{const[s,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{open:s,onClose:()=>n(!1),title:"Short 1-3 word question?",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{emphasis:"secondary",onClick:()=>n(!1),children:"Verb"}),e.jsx(t,{emphasis:"primary",tone:"danger",onClick:()=>n(!1),children:"Verb Verb/Action"})]}),children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"flex-shrink-0 w-10 h-10 rounded-full bg-orange-90 flex items-center justify-center text-orange-50",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),e.jsx("div",{children:e.jsx("p",{className:"text-fg-default",children:"Consequences of this action"})})]})})]})}},f={render:()=>{const[s,n]=o.useState(null);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{onClick:()=>n("sm"),children:"Small"}),e.jsx(t,{onClick:()=>n("md"),children:"Medium"}),e.jsx(t,{onClick:()=>n("lg"),children:"Large"}),e.jsx(t,{onClick:()=>n("xl"),children:"Extra Large"}),e.jsx(t,{onClick:()=>n("full"),children:"Full Width"})]}),s&&e.jsx(l,{open:!!s,onClose:()=>n(null),title:`${s.toUpperCase()} Modal`,size:s,footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{emphasis:"secondary",onClick:()=>n(null),children:"Cancel"}),e.jsx(t,{emphasis:"primary",onClick:()=>n(null),children:"Confirm"})]}),children:e.jsxs("p",{className:"text-fg-default",children:["This is a ",s," sized modal."]})})]})}},x={render:()=>{const[s,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{open:s,onClose:()=>n(!1),title:"Modal Header Text",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{emphasis:"secondary",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{emphasis:"primary",onClick:()=>n(!1),children:"Confirm"})]}),children:e.jsx("div",{className:"space-y-4",children:Array.from({length:20}).map((r,a)=>e.jsxs("p",{className:"text-fg-default",children:["This is paragraph ",a+1,". Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]},a))})})]})}},g={render:()=>{const[s,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{open:s,onClose:()=>n(!1),title:"Modal Header Text",showCloseButton:!1,closeOnBackdropClick:!1,footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{emphasis:"secondary",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{emphasis:"primary",onClick:()=>n(!1),children:"Confirm"})]}),children:e.jsx("p",{className:"text-fg-default",children:"This modal can only be closed using the footer buttons."})})]})}};var k,N,v;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
                <Button onClick={() => setOpen(true)}>Open Modal</Button>
                <Modal open={open} onClose={() => setOpen(false)} title="Modal Header Text">
                    <p className="text-fg-default">This is the modal content area.</p>
                </Modal>
            </>;
  }
}`,...(v=(N=p.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var O,B,M;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
                <Button onClick={() => setOpen(true)}>Open Modal</Button>
                <Modal open={open} onClose={() => setOpen(false)} title="Modal Header Text" footer={<>
                            <Button emphasis="secondary" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button emphasis="primary" onClick={() => setOpen(false)}>
                                Verb
                            </Button>
                        </>}>
                    <p className="text-fg-default">This is the modal content area with action buttons in the footer.</p>
                </Modal>
            </>;
  }
}`,...(M=(B=m.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var w,S,z;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
                <Button onClick={() => setOpen(true)}>Open Modal</Button>
                <Modal open={open} onClose={() => setOpen(false)} title="Modal Header Text" footer={<>
                            <Button emphasis="secondary" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button emphasis="primary" onClick={() => setOpen(false)}>
                                Save
                            </Button>
                        </>}>
                    <div className="space-y-4">
                        <Input label="Label" placeholder="Placeholder" />
                        <Input label="Label" placeholder="Placeholder" />
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-fg-default">Label</label>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="rounded" />
                                    <span className="text-sm">
                                        Option 1 Now (16) Complete sentence or two a comment without punctuation
                                    </span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="rounded" />
                                    <span className="text-sm">
                                        Option 2 Now (16) Complete sentence or two a comment without punctuation
                                    </span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="rounded" />
                                    <span className="text-sm">
                                        Option 3 Now (16) Complete sentence or two a comment without punctuation
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-fg-default">Label</label>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="radio-group" />
                                    <span className="text-sm">Option 1 All radio submit should have a simple sentence or two prose</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="radio-group" />
                                    <span className="text-sm">Option 2 All radio submit should have a simple sentence or two prose</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="radio-group" />
                                    <span className="text-sm">Option 3 All radio submit should have a simple sentence or two prose</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </Modal>
            </>;
  }
}`,...(z=(S=u.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var F,L,T;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
                <Button onClick={() => setOpen(true)}>Open Modal</Button>
                <Modal open={open} onClose={() => setOpen(false)} title="Short 1-3 word question?" footer={<>
                            <Button emphasis="secondary" onClick={() => setOpen(false)}>
                                Verb
                            </Button>
                            <Button emphasis="primary" tone="danger" onClick={() => setOpen(false)}>
                                Verb Verb/Action
                            </Button>
                        </>}>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-90 flex items-center justify-center text-orange-50">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-fg-default">Consequences of this action</p>
                        </div>
                    </div>
                </Modal>
            </>;
  }
}`,...(T=(L=h.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var _,V,W;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [size, setSize] = useState<"sm" | "md" | "lg" | "xl" | "full" | null>(null);
    return <>
                <div className="flex gap-2">
                    <Button onClick={() => setSize("sm")}>Small</Button>
                    <Button onClick={() => setSize("md")}>Medium</Button>
                    <Button onClick={() => setSize("lg")}>Large</Button>
                    <Button onClick={() => setSize("xl")}>Extra Large</Button>
                    <Button onClick={() => setSize("full")}>Full Width</Button>
                </div>
                {size && <Modal open={!!size} onClose={() => setSize(null)} title={\`\${size.toUpperCase()} Modal\`} size={size} footer={<>
                                <Button emphasis="secondary" onClick={() => setSize(null)}>
                                    Cancel
                                </Button>
                                <Button emphasis="primary" onClick={() => setSize(null)}>
                                    Confirm
                                </Button>
                            </>}>
                        <p className="text-fg-default">This is a {size} sized modal.</p>
                    </Modal>}
            </>;
  }
}`,...(W=(V=f.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var q,A,H;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
                <Button onClick={() => setOpen(true)}>Open Modal</Button>
                <Modal open={open} onClose={() => setOpen(false)} title="Modal Header Text" footer={<>
                            <Button emphasis="secondary" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button emphasis="primary" onClick={() => setOpen(false)}>
                                Confirm
                            </Button>
                        </>}>
                    <div className="space-y-4">
                        {Array.from({
            length: 20
          }).map((_, i) => <p key={i} className="text-fg-default">
                                This is paragraph {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>)}
                    </div>
                </Modal>
            </>;
  }
}`,...(H=(A=x.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var E,I,R;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
                <Button onClick={() => setOpen(true)}>Open Modal</Button>
                <Modal open={open} onClose={() => setOpen(false)} title="Modal Header Text" showCloseButton={false} closeOnBackdropClick={false} footer={<>
                            <Button emphasis="secondary" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button emphasis="primary" onClick={() => setOpen(false)}>
                                Confirm
                            </Button>
                        </>}>
                    <p className="text-fg-default">This modal can only be closed using the footer buttons.</p>
                </Modal>
            </>;
  }
}`,...(R=(I=g.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const le=["Default","WithFooter","WithForm","WithWarning","Sizes","LongContent","NoCloseButton"];export{p as Default,x as LongContent,g as NoCloseButton,f as Sizes,m as WithFooter,u as WithForm,h as WithWarning,le as __namedExportsOrder,oe as default};
