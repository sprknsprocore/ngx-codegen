import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-Dz3UJJSw.js";import{c}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const j=u.forwardRef(function({className:o,item:t,selected:a,onItemClick:i,onDelete:d,onDownload:r,...n},l){return e.jsxs("div",{ref:l,className:c("flex items-center gap-3 px-4 py-3 border-b border-border-default transition-colors",a&&"bg-bg-secondary",t.error&&"bg-bg-error border-border-error",!a&&!t.error&&"hover:bg-bg-surface",o),...n,children:[t.icon&&e.jsx("span",{className:c("shrink-0",t.error?"text-state-danger":"text-fg-secondary"),children:t.icon}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("button",{type:"button",onClick:()=>i==null?void 0:i(t.id),className:c("text-body font-medium text-left truncate w-full hover:underline",t.error?"text-state-danger":"text-fg-default"),children:t.name}),(t.size||t.date)&&e.jsx("p",{className:"text-small text-fg-secondary truncate",children:[t.size,t.date].filter(Boolean).join(" • ")})]}),e.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[r&&e.jsx("button",{type:"button",onClick:()=>r(t.id),className:"p-2 text-fg-secondary hover:text-fg-default hover:bg-bg-surface rounded-sm transition-colors","aria-label":"Download",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})})}),d&&e.jsx("button",{type:"button",onClick:()=>d(t.id),className:"p-2 text-fg-secondary hover:text-state-danger hover:bg-bg-surface rounded-sm transition-colors","aria-label":"Delete",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})})})]})]})}),p=u.forwardRef(function({className:o,items:t,selectedId:a,onItemClick:i,onDelete:d,onDownload:r,emptyState:n,...l},b){return t.length===0&&n?e.jsx("div",{ref:b,className:c("flex items-center justify-center p-8",o),...l,children:n}):e.jsx("div",{ref:b,className:c("border border-border-default rounded-sm overflow-hidden bg-bg-canvas",o),...l,children:t.map(y=>e.jsx(j,{item:y,selected:y.id===a,onItemClick:i,onDelete:d,onDownload:r},y.id))})});try{j.displayName="FileListItemComponent",j.__docgenInfo={description:"",displayName:"FileListItemComponent",props:{item:{defaultValue:null,description:"File item data",name:"item",required:!0,type:{name:"FileListItem"}},selected:{defaultValue:null,description:"Whether the item is selected",name:"selected",required:!1,type:{name:"boolean"}},onItemClick:{defaultValue:null,description:"Click handler",name:"onItemClick",required:!1,type:{name:"((id: string) => void)"}},onDelete:{defaultValue:null,description:"Delete handler",name:"onDelete",required:!1,type:{name:"((id: string) => void)"}},onDownload:{defaultValue:null,description:"Download handler",name:"onDownload",required:!1,type:{name:"((id: string) => void)"}}}}}catch{}try{p.displayName="FileList",p.__docgenInfo={description:"",displayName:"FileList",props:{items:{defaultValue:null,description:"Array of file items",name:"items",required:!0,type:{name:"FileListItem[]"}},selectedId:{defaultValue:null,description:"Selected item ID",name:"selectedId",required:!1,type:{name:"string"}},onItemClick:{defaultValue:null,description:"Click handler for items",name:"onItemClick",required:!1,type:{name:"((id: string) => void)"}},onDelete:{defaultValue:null,description:"Delete handler for items",name:"onDelete",required:!1,type:{name:"((id: string) => void)"}},onDownload:{defaultValue:null,description:"Download handler for items",name:"onDownload",required:!1,type:{name:"((id: string) => void)"}},emptyState:{defaultValue:null,description:"Empty state content",name:"emptyState",required:!1,type:{name:"ReactNode"}}}}}catch{}const K={title:"Components/FileList",component:p,parameters:{layout:"padded"},tags:["autodocs"]},m=()=>e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"})}),E=()=>e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"})}),U=()=>e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"})}),I=[{id:"1",name:"Project Proposal.pdf",size:"2.3 MB",date:"Dec 15, 2024",icon:e.jsx(E,{})},{id:"2",name:"Budget 2025.xlsx",size:"1.1 MB",date:"Dec 14, 2024",icon:e.jsx(m,{})},{id:"3",name:"Meeting Notes.docx",size:"845 KB",date:"Dec 13, 2024",icon:e.jsx(m,{})},{id:"4",name:"Team Photo.jpg",size:"3.2 MB",date:"Dec 12, 2024",icon:e.jsx(U,{})},{id:"5",name:"Corrupted File.zip",size:"Unknown",date:"Dec 10, 2024",icon:e.jsx(m,{}),error:!0}],h={args:{items:I}},f={render:()=>{const[s,o]=u.useState("2");return e.jsx(p,{items:I,selectedId:s,onItemClick:o})}},g={render:()=>{const[s,o]=u.useState(I),[t,a]=u.useState(),i=r=>{o(s.filter(n=>n.id!==r)),t===r&&a(void 0)},d=r=>{const n=s.find(l=>l.id===r);console.log("Downloading:",n==null?void 0:n.name)};return e.jsx(p,{items:s,selectedId:t,onItemClick:a,onDelete:i,onDownload:d})}},x={args:{items:[],emptyState:e.jsxs("div",{className:"text-center",children:[e.jsx(m,{}),e.jsxs("div",{className:"mt-3",children:[e.jsx("p",{className:"text-h3 text-fg-default mb-1",children:"No files"}),e.jsx("p",{className:"text-body text-fg-secondary",children:"Upload files to get started"})]})]})}},v={args:{items:[{id:"1",name:"Valid File.pdf",size:"1.2 MB",date:"Today",icon:e.jsx(E,{})},{id:"2",name:"Corrupted File.zip",size:"Unknown",date:"Yesterday",icon:e.jsx(m,{}),error:!0},{id:"3",name:"Failed Upload.jpg",size:"0 KB",date:"2 days ago",icon:e.jsx(U,{}),error:!0}]}};var D,w,z;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: mockFiles
  }
}`,...(z=(w=h.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var F,N,V;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [selectedId, setSelectedId] = useState<string | undefined>("2");
    return <FileList items={mockFiles} selectedId={selectedId} onItemClick={setSelectedId} />;
  }
}`,...(V=(N=f.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var S,C,H;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState(mockFiles);
    const [selectedId, setSelectedId] = useState<string | undefined>();
    const handleDelete = (id: string) => {
      setItems(items.filter(item => item.id !== id));
      if (selectedId === id) {
        setSelectedId(undefined);
      }
    };
    const handleDownload = (id: string) => {
      const item = items.find(item => item.id === id);
      console.log("Downloading:", item?.name);
    };
    return <FileList items={items} selectedId={selectedId} onItemClick={setSelectedId} onDelete={handleDelete} onDownload={handleDownload} />;
  }
}`,...(H=(C=g.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var k,_,M;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: [],
    emptyState: <div className="text-center">
                <FileIcon />
                <div className="mt-3">
                    <p className="text-h3 text-fg-default mb-1">No files</p>
                    <p className="text-body text-fg-secondary">
                        Upload files to get started
                    </p>
                </div>
            </div>
  }
}`,...(M=(_=x.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var B,L,q;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      name: "Valid File.pdf",
      size: "1.2 MB",
      date: "Today",
      icon: <PdfIcon />
    }, {
      id: "2",
      name: "Corrupted File.zip",
      size: "Unknown",
      date: "Yesterday",
      icon: <FileIcon />,
      error: true
    }, {
      id: "3",
      name: "Failed Upload.jpg",
      size: "0 KB",
      date: "2 days ago",
      icon: <ImageIcon />,
      error: true
    }]
  }
}`,...(q=(L=v.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};const T=["Default","WithSelection","WithActions","Empty","WithErrors"];export{h as Default,x as Empty,g as WithActions,v as WithErrors,f as WithSelection,T as __namedExportsOrder,K as default};
