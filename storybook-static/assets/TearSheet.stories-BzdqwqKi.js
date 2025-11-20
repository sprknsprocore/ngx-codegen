import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-Dz3UJJSw.js";import{c as S}from"./clsx-B-dksMZM.js";import{r as H}from"./index-CYANIyVc.js";import{B as s}from"./Button-CZgY2kMk.js";import{I as h}from"./Input-80mIrHdw.js";import{T as J}from"./TextArea-Y3i28lFF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-fUCaa9pg.js";import"./index-Dp3B9jqt.js";import"./InputBase-Bz2wEZFE.js";const r=o.forwardRef(function({className:t,open:a,onClose:l,title:x,size:_="md",showCloseButton:f=!0,actions:b,children:q,...W},R){const[P,D]=o.useState(!1);o.useEffect(()=>{D(!0)},[]),o.useEffect(()=>(a?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[a]);const Y=g=>{g.target===g.currentTarget&&(l==null||l())},$={sm:"max-w-sm",md:"max-w-2xl",lg:"max-w-4xl",xl:"max-w-6xl"};if(!P)return null;const G=e.jsxs(e.Fragment,{children:[e.jsx("div",{className:S("fixed inset-0 bg-scrim-medium transition-opacity z-40",a?"opacity-100":"opacity-0 pointer-events-none"),onClick:Y,"aria-hidden":"true"}),e.jsxs("div",{ref:R,role:"dialog","aria-modal":"true",className:S("fixed top-0 right-0 bottom-0 bg-bg-canvas shadow-4 transition-transform duration-300 z-50","flex flex-col w-full",$[_],a?"translate-x-0":"translate-x-full",t),...W,children:[(x||b||f)&&e.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-border-default shrink-0",children:[e.jsx("div",{className:"flex items-center gap-4 flex-1 min-w-0",children:x&&e.jsx("h2",{className:"text-lg font-semibold text-fg-default truncate",children:x})}),e.jsxs("div",{className:"flex items-center gap-2",children:[b,f&&e.jsx("button",{type:"button",onClick:l,className:"p-2 rounded-sm text-fg-secondary hover:text-fg-default hover:bg-bg-surface transition-colors","aria-label":"Close",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto px-6 py-4",children:q})]})]});return H.createPortal(G,document.body)});try{r.displayName="TearSheet",r.__docgenInfo={description:"",displayName:"TearSheet",props:{open:{defaultValue:null,description:"Whether the tear sheet is open",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback when close is requested",name:"onClose",required:!1,type:{name:"(() => void)"}},title:{defaultValue:null,description:"Title of the tear sheet",name:"title",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},showCloseButton:{defaultValue:{value:"true"},description:"Show close button",name:"showCloseButton",required:!1,type:{name:"boolean"}},actions:{defaultValue:null,description:"Actions to display in the header",name:"actions",required:!1,type:{name:"ReactNode"}}}}}catch{}const oe={title:"Components/TearSheet",component:r,argTypes:{size:{control:"select",options:["sm","md","lg","xl"]},open:{control:"boolean"},showCloseButton:{control:"boolean"}}},i={render:n=>{const[t,a]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>a(!0),children:"Open TearSheet"}),e.jsx(r,{...n,open:t,onClose:()=>a(!1),children:e.jsx("div",{className:"space-y-4",children:e.jsx("p",{className:"text-fg-default",children:"This is the content of the tear sheet. You can place any content here."})})})]})},args:{title:"Item Name",size:"md",showCloseButton:!0}},c={render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>t(!0),children:"Open TearSheet"}),e.jsx(r,{open:n,onClose:()=>t(!1),title:"Item Name",children:e.jsx("div",{className:"space-y-4",children:e.jsx("p",{className:"text-fg-default",children:"Replace Me by Manual Setup (add Form, Table, or Empty State)"})})})]})}},d={render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>t(!0),children:"Open TearSheet with Actions"}),e.jsx(r,{open:n,onClose:()=>t(!1),title:"Item Name",actions:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{size:"sm",emphasis:"secondary",children:"Verb"}),e.jsx(s,{size:"sm",children:"Verb"})]}),children:e.jsx("div",{className:"space-y-4",children:e.jsx("p",{className:"text-fg-default",children:"This tear sheet has action buttons in the header."})})})]})}},p={render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>t(!0),children:"Open Form TearSheet"}),e.jsx(r,{open:n,onClose:()=>t(!1),title:"Admin Child Page Title",actions:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{size:"sm",emphasis:"secondary",onClick:()=>t(!1),children:"Cancel"}),e.jsx(s,{size:"sm",children:"Save"})]}),children:e.jsxs("form",{className:"space-y-6",children:[e.jsx(h,{label:"Input Label",placeholder:"Enter text...",required:!0}),e.jsx(h,{label:"Input Label",placeholder:"Enter text..."}),e.jsx(J,{label:"Textarea Label",placeholder:"Enter description...",rows:4}),e.jsx(h,{label:"Input Label",placeholder:"Enter text..."})]})})]})}},m={render:()=>{const[n,t]=o.useState(!1),[a,l]=o.useState("tab1");return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>t(!0),children:"Open Tabbed TearSheet"}),e.jsx(r,{open:n,onClose:()=>t(!1),title:"Item Name",actions:e.jsx(s,{size:"sm",children:"Verb"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-1 border-b border-border-default -mx-6 px-6",children:[e.jsx("button",{className:clsx("px-4 py-2 text-sm font-medium border-b-2 transition-colors",a==="tab1"?"border-bg-brand text-fg-brand":"border-transparent text-fg-secondary hover:text-fg-default"),onClick:()=>l("tab1"),children:"Tab 1"}),e.jsx("button",{className:clsx("px-4 py-2 text-sm font-medium border-b-2 transition-colors",a==="tab2"?"border-bg-brand text-fg-brand":"border-transparent text-fg-secondary hover:text-fg-default"),onClick:()=>l("tab2"),children:"Tab 2"}),e.jsx("button",{className:clsx("px-4 py-2 text-sm font-medium border-b-2 transition-colors",a==="tab3"?"border-bg-brand text-fg-brand":"border-transparent text-fg-secondary hover:text-fg-default"),onClick:()=>l("tab3"),children:"Tab 3"})]}),a==="tab1"&&e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 1"})}),a==="tab2"&&e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 2"})}),a==="tab3"&&e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 3"})})]})})]})}},u={render:()=>{const[n,t]=o.useState(null);return e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{onClick:()=>t("sm"),children:"Small"}),e.jsx(s,{onClick:()=>t("md"),children:"Medium"}),e.jsx(s,{onClick:()=>t("lg"),children:"Large"}),e.jsx(s,{onClick:()=>t("xl"),children:"Extra Large"}),e.jsx(r,{open:n==="sm",onClose:()=>t(null),title:"Small TearSheet",size:"sm",children:e.jsx("p",{className:"text-fg-default",children:"Small size tear sheet content"})}),e.jsx(r,{open:n==="md",onClose:()=>t(null),title:"Medium TearSheet",size:"md",children:e.jsx("p",{className:"text-fg-default",children:"Medium size tear sheet content"})}),e.jsx(r,{open:n==="lg",onClose:()=>t(null),title:"Large TearSheet",size:"lg",children:e.jsx("p",{className:"text-fg-default",children:"Large size tear sheet content"})}),e.jsx(r,{open:n==="xl",onClose:()=>t(null),title:"Extra Large TearSheet",size:"xl",children:e.jsx("p",{className:"text-fg-default",children:"Extra large size tear sheet content"})})]})}};var T,v,j;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open TearSheet</Button>
        <TearSheet {...args} open={open} onClose={() => setOpen(false)}>
          <div className="space-y-4">
            <p className="text-fg-default">
              This is the content of the tear sheet. You can place any content here.
            </p>
          </div>
        </TearSheet>
      </>;
  },
  args: {
    title: "Item Name",
    size: "md",
    showCloseButton: true
  }
}`,...(j=(v=i.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var y,N,C;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open TearSheet</Button>
        <TearSheet open={open} onClose={() => setOpen(false)} title="Item Name">
          <div className="space-y-4">
            <p className="text-fg-default">
              Replace Me by Manual Setup (add Form, Table, or Empty State)
            </p>
          </div>
        </TearSheet>
      </>;
  }
}`,...(C=(N=c.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var z,O,k;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open TearSheet with Actions</Button>
        <TearSheet open={open} onClose={() => setOpen(false)} title="Item Name" actions={<div className="flex gap-2">
              <Button size="sm" emphasis="secondary">
                Verb
              </Button>
              <Button size="sm">
                Verb
              </Button>
            </div>}>
          <div className="space-y-4">
            <p className="text-fg-default">
              This tear sheet has action buttons in the header.
            </p>
          </div>
        </TearSheet>
      </>;
  }
}`,...(k=(O=d.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var B,w,E;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Form TearSheet</Button>
        <TearSheet open={open} onClose={() => setOpen(false)} title="Admin Child Page Title" actions={<div className="flex gap-2">
              <Button size="sm" emphasis="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button size="sm">
                Save
              </Button>
            </div>}>
          <form className="space-y-6">
            <Input label="Input Label" placeholder="Enter text..." required />
            <Input label="Input Label" placeholder="Enter text..." />
            <TextArea label="Textarea Label" placeholder="Enter description..." rows={4} />
            <Input label="Input Label" placeholder="Enter text..." />
          </form>
        </TearSheet>
      </>;
  }
}`,...(E=(w=p.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var I,L,A;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("tab1");
    return <>
        <Button onClick={() => setOpen(true)}>Open Tabbed TearSheet</Button>
        <TearSheet open={open} onClose={() => setOpen(false)} title="Item Name" actions={<Button size="sm">Verb</Button>}>
          <div className="space-y-4">
            {/* Simple tab implementation */}
            <div className="flex gap-1 border-b border-border-default -mx-6 px-6">
              <button className={clsx("px-4 py-2 text-sm font-medium border-b-2 transition-colors", activeTab === "tab1" ? "border-bg-brand text-fg-brand" : "border-transparent text-fg-secondary hover:text-fg-default")} onClick={() => setActiveTab("tab1")}>
                Tab 1
              </button>
              <button className={clsx("px-4 py-2 text-sm font-medium border-b-2 transition-colors", activeTab === "tab2" ? "border-bg-brand text-fg-brand" : "border-transparent text-fg-secondary hover:text-fg-default")} onClick={() => setActiveTab("tab2")}>
                Tab 2
              </button>
              <button className={clsx("px-4 py-2 text-sm font-medium border-b-2 transition-colors", activeTab === "tab3" ? "border-bg-brand text-fg-brand" : "border-transparent text-fg-secondary hover:text-fg-default")} onClick={() => setActiveTab("tab3")}>
                Tab 3
              </button>
            </div>
            
            {activeTab === "tab1" && <div className="py-4">
                <p className="text-fg-default">Content for Tab 1</p>
              </div>}
            {activeTab === "tab2" && <div className="py-4">
                <p className="text-fg-default">Content for Tab 2</p>
              </div>}
            {activeTab === "tab3" && <div className="py-4">
                <p className="text-fg-default">Content for Tab 3</p>
              </div>}
          </div>
        </TearSheet>
      </>;
  }
}`,...(A=(L=m.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var F,M,V;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [openSize, setOpenSize] = useState<string | null>(null);
    return <div className="flex gap-2">
        <Button onClick={() => setOpenSize("sm")}>Small</Button>
        <Button onClick={() => setOpenSize("md")}>Medium</Button>
        <Button onClick={() => setOpenSize("lg")}>Large</Button>
        <Button onClick={() => setOpenSize("xl")}>Extra Large</Button>
        
        <TearSheet open={openSize === "sm"} onClose={() => setOpenSize(null)} title="Small TearSheet" size="sm">
          <p className="text-fg-default">Small size tear sheet content</p>
        </TearSheet>
        
        <TearSheet open={openSize === "md"} onClose={() => setOpenSize(null)} title="Medium TearSheet" size="md">
          <p className="text-fg-default">Medium size tear sheet content</p>
        </TearSheet>
        
        <TearSheet open={openSize === "lg"} onClose={() => setOpenSize(null)} title="Large TearSheet" size="lg">
          <p className="text-fg-default">Large size tear sheet content</p>
        </TearSheet>
        
        <TearSheet open={openSize === "xl"} onClose={() => setOpenSize(null)} title="Extra Large TearSheet" size="xl">
          <p className="text-fg-default">Extra large size tear sheet content</p>
        </TearSheet>
      </div>;
  }
}`,...(V=(M=u.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const le=["Playground","Default","WithActions","WithForm","WithTabs","Sizes"];export{c as Default,i as Playground,u as Sizes,d as WithActions,p as WithForm,m as WithTabs,le as __namedExportsOrder,oe as default};
