import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-Dz3UJJSw.js";import{c as We}from"./index-Dp3B9jqt.js";import{c as O}from"./clsx-B-dksMZM.js";import{S as T}from"./Stack-BazOErot.js";import{B as Ne}from"./Button-CZgY2kMk.js";import"./_commonjsHelpers-CqkleIqs.js";const Ae=We("border-2 border-dashed rounded-sm transition-all cursor-pointer",{variants:{state:{idle:"border-border-default bg-bg-surface hover:border-border-hover hover:bg-bg-secondary",active:"border-border-focus bg-bg-tertiary",error:"border-border-error bg-bg-error",disabled:"border-border-default bg-bg-tertiary cursor-not-allowed opacity-50"},size:{sm:"p-6",md:"p-8",lg:"p-12"}},defaultVariants:{state:"idle",size:"md"}}),o=t.forwardRef(function({className:a,state:n,size:l,onDrop:u,accept:c,multiple:f=!0,maxSize:h,disabled:p,icon:E,heading:Se="Drop files here",description:Ce="or click to browse",helperText:Z,error:ze,trigger:Ve,...ke},Ue){const _=t.useRef(null),[we,B]=t.useState(!1),[Be,q]=t.useState(),g=ze||Be,qe=p?"disabled":g?"error":we?"active":n||"idle",M=t.useCallback(r=>{const y=[],x=[];return r.forEach(i=>{if(h&&i.size>h){x.push(`${i.name} exceeds maximum size of ${(h/1024/1024).toFixed(1)} MB`);return}if(c){const Pe=c.split(",").map(m=>m.trim()),Oe=`.${i.name.split(".").pop()}`;if(!Pe.some(m=>{if(m.startsWith("."))return Oe===m;if(m.endsWith("/*")){const Te=m.split("/")[0];return i.type.startsWith(`${Te}/`)}return i.type===m})){x.push(`${i.name} is not an accepted file type`);return}}y.push(i)}),{valid:y,errors:x}},[c,h]),b=t.useCallback(r=>{if(!r||r.length===0)return;const y=Array.from(r),{valid:x,errors:i}=M(y);if(i.length>0){q(i[0]),setTimeout(()=>q(void 0),5e3);return}q(void 0),u==null||u(x)},[u,M]),Ie=t.useCallback(r=>{r.preventDefault(),r.stopPropagation(),B(!0)},[]),Ee=t.useCallback(r=>{r.preventDefault(),r.stopPropagation(),r.currentTarget===r.target&&B(!1)},[]),Ze=t.useCallback(r=>{r.preventDefault(),r.stopPropagation()},[]),_e=t.useCallback(r=>{r.preventDefault(),r.stopPropagation(),B(!1),!p&&b(r.dataTransfer.files)},[p,b]),P=t.useCallback(()=>{var r;p||(r=_.current)==null||r.click()},[p]),Me=t.useCallback(r=>{b(r.target.files),r.target.value=""},[b]);return e.jsxs("div",{ref:Ue,className:O(Ae({state:qe,size:l}),a),onDragEnter:Ie,onDragLeave:Ee,onDragOver:Ze,onDrop:_e,onClick:P,role:"button",tabIndex:p?-1:0,onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&!p&&(r.preventDefault(),P())},"aria-disabled":p,...ke,children:[e.jsx("input",{ref:_,type:"file",accept:c,multiple:f,onChange:Me,disabled:p,className:"sr-only","aria-hidden":"true"}),e.jsxs(T,{gap:"3",className:"items-center text-center",children:[E&&e.jsx("div",{className:O("text-fg-secondary",g&&"text-state-danger"),children:E}),e.jsxs(T,{gap:"1",children:[e.jsx("p",{className:"text-h3 text-fg-default",children:Se}),e.jsx("p",{className:"text-body text-fg-secondary",children:Ce}),Z&&!g&&e.jsx("p",{className:"text-small text-fg-muted",children:Z}),g&&e.jsx("p",{className:"text-small text-state-danger",children:g})]}),Ve]})]})}),I=t.forwardRef(function({label:a="Choose file or drag here",...n},l){return e.jsx(o,{ref:l,size:"sm",heading:a,description:"",icon:e.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})}),...n})});try{o.displayName="DropZone",o.__docgenInfo={description:"",displayName:"DropZone",props:{onDrop:{defaultValue:null,description:"Callback when files are dropped or selected",name:"onDrop",required:!1,type:{name:"((files: File[]) => void)"}},accept:{defaultValue:null,description:'Accepted file types (e.g., "image/*", ".pdf")',name:"accept",required:!1,type:{name:"string"}},multiple:{defaultValue:{value:"true"},description:"Whether multiple files can be uploaded",name:"multiple",required:!1,type:{name:"boolean"}},maxSize:{defaultValue:null,description:"Maximum file size in bytes",name:"maxSize",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"Whether the dropzone is disabled",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Custom icon",name:"icon",required:!1,type:{name:"ReactNode"}},heading:{defaultValue:{value:"Drop files here"},description:"Main heading text",name:"heading",required:!1,type:{name:"string"}},description:{defaultValue:{value:"or click to browse"},description:"Description text",name:"description",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Additional helper text",name:"helperText",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Error message",name:"error",required:!1,type:{name:"string"}},trigger:{defaultValue:null,description:"Custom trigger button",name:"trigger",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | null'}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:'"disabled" | "error" | "active" | "idle" | null'}}}}}catch{}try{I.displayName="DropZoneCompact",I.__docgenInfo={description:"",displayName:"DropZoneCompact",props:{label:{defaultValue:{value:"Choose file or drag here"},description:"Custom label",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | null'}},disabled:{defaultValue:null,description:"Whether the dropzone is disabled",name:"disabled",required:!1,type:{name:"boolean"}},onDrop:{defaultValue:null,description:"Callback when files are dropped or selected",name:"onDrop",required:!1,type:{name:"((files: File[]) => void)"}},accept:{defaultValue:null,description:'Accepted file types (e.g., "image/*", ".pdf")',name:"accept",required:!1,type:{name:"string"}},multiple:{defaultValue:{value:"true"},description:"Whether multiple files can be uploaded",name:"multiple",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Error message",name:"error",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Additional helper text",name:"helperText",required:!1,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:'"disabled" | "error" | "active" | "idle" | null'}},maxSize:{defaultValue:null,description:"Maximum file size in bytes",name:"maxSize",required:!1,type:{name:"number"}},trigger:{defaultValue:null,description:"Custom trigger button",name:"trigger",required:!1,type:{name:"ReactNode"}}}}}catch{}const Qe={title:"Components/DropZone",component:o,parameters:{layout:"padded"},tags:["autodocs"]},d=()=>e.jsx("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})}),v={args:{icon:e.jsx(d,{})},render:s=>{const[a,n]=t.useState([]);return e.jsxs("div",{children:[e.jsx(o,{...s,onDrop:n}),a.length>0&&e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"text-body-semibold mb-2",children:"Uploaded files:"}),e.jsx("ul",{className:"text-body text-fg-secondary",children:a.map((l,u)=>e.jsxs("li",{children:[l.name," (",(l.size/1024).toFixed(1)," KB)"]},u))})]})]})}},D={args:{icon:e.jsx(d,{}),heading:"Upload your documents",description:"Drag and drop or click to select files",helperText:"Supported formats: PDF, DOC, DOCX (max 10 MB)"},render:s=>{const[a,n]=t.useState([]);return e.jsx(o,{...s,onDrop:n})}},j={args:{icon:e.jsx(d,{}),trigger:e.jsx(Ne,{children:"Choose Files"})},render:s=>{const[a,n]=t.useState([]);return e.jsx(o,{...s,onDrop:n})}},F={args:{icon:e.jsx("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"})}),heading:"Upload images",description:"PNG, JPG, GIF up to 5MB",accept:"image/*",maxSize:5*1024*1024},render:s=>{const[a,n]=t.useState([]);return e.jsx(o,{...s,onDrop:n})}},N={args:{icon:e.jsx(d,{}),multiple:!1,heading:"Upload a file",description:"Only one file allowed"},render:s=>{const[a,n]=t.useState(null);return e.jsxs("div",{children:[e.jsx(o,{...s,onDrop:l=>n(l[0]||null)}),a&&e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"text-body-semibold mb-2",children:"Uploaded file:"}),e.jsxs("p",{className:"text-body text-fg-secondary",children:[a.name," (",(a.size/1024).toFixed(1)," KB)"]})]})]})}},S={args:{icon:e.jsx(d,{}),error:"Upload failed. Please try again."}},C={args:{icon:e.jsx(d,{}),disabled:!0}},z={args:{size:"sm",icon:e.jsx(d,{})},render:s=>{const[a,n]=t.useState([]);return e.jsx(o,{...s,onDrop:n})}},V={args:{size:"lg",icon:e.jsx(d,{}),heading:"Upload your files",description:"Drag and drop files here",helperText:"or click to browse from your computer"},render:s=>{const[a,n]=t.useState([]);return e.jsx(o,{...s,onDrop:n})}},k={render:()=>{const[s,a]=t.useState([]);return e.jsxs("div",{children:[e.jsx(I,{onDrop:a}),s.length>0&&e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"text-body-semibold mb-2",children:"Uploaded files:"}),e.jsx("ul",{className:"text-body text-fg-secondary",children:s.map((n,l)=>e.jsx("li",{children:n.name},l))})]})]})}},U={render:()=>{const[s,a]=t.useState([]),[n,l]=t.useState(),u=c=>{l(void 0),a(f=>[...f,...c])};return e.jsxs("div",{children:[e.jsx(o,{icon:e.jsx(d,{}),onDrop:u,accept:".pdf,.doc,.docx",maxSize:10*1024*1024,error:n,helperText:"PDF, DOC, DOCX only (max 10 MB)"}),s.length>0&&e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"text-body-semibold mb-2",children:"Uploaded files:"}),e.jsx("ul",{className:"text-body text-fg-secondary",children:s.map((c,f)=>e.jsxs("li",{children:[c.name," (",(c.size/1024).toFixed(1)," KB)"]},f))})]})]})}},w={render:()=>{const[s,a]=t.useState([]);return e.jsxs("form",{className:"max-w-2xl",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-body-semibold text-fg-default mb-2",children:"Project Name"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-border-default rounded-sm",placeholder:"Enter project name"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-body-semibold text-fg-default mb-2",children:"Attachments"}),e.jsx(o,{size:"sm",icon:e.jsx(d,{}),onDrop:a}),s.length>0&&e.jsx("div",{className:"mt-2",children:e.jsxs("p",{className:"text-small text-fg-secondary",children:[s.length," file(s) selected"]})})]}),e.jsx(Ne,{type:"submit",children:"Submit"})]})}};var W,A,R;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    icon: <UploadIcon />
  },
  render: args => {
    const [files, setFiles] = useState<File[]>([]);
    return <div>
                <DropZone {...args} onDrop={setFiles} />
                {files.length > 0 && <div className="mt-4">
                        <p className="text-body-semibold mb-2">Uploaded files:</p>
                        <ul className="text-body text-fg-secondary">
                            {files.map((file, i) => <li key={i}>
                                    {file.name} ({(file.size / 1024).toFixed(1)} KB)
                                </li>)}
                        </ul>
                    </div>}
            </div>;
  }
}`,...(R=(A=v.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var K,G,H;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    icon: <UploadIcon />,
    heading: "Upload your documents",
    description: "Drag and drop or click to select files",
    helperText: "Supported formats: PDF, DOC, DOCX (max 10 MB)"
  },
  render: args => {
    const [files, setFiles] = useState<File[]>([]);
    return <DropZone {...args} onDrop={setFiles} />;
  }
}`,...(H=(G=D.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var L,$,X;j.parameters={...j.parameters,docs:{...(L=j.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    icon: <UploadIcon />,
    trigger: <Button>Choose Files</Button>
  },
  render: args => {
    const [files, setFiles] = useState<File[]>([]);
    return <DropZone {...args} onDrop={setFiles} />;
  }
}`,...(X=($=j.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};var J,Q,Y;F.parameters={...F.parameters,docs:{...(J=F.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
            </svg>,
    heading: "Upload images",
    description: "PNG, JPG, GIF up to 5MB",
    accept: "image/*",
    maxSize: 5 * 1024 * 1024
  },
  render: args => {
    const [files, setFiles] = useState<File[]>([]);
    return <DropZone {...args} onDrop={setFiles} />;
  }
}`,...(Y=(Q=F.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var ee,re,se;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    icon: <UploadIcon />,
    multiple: false,
    heading: "Upload a file",
    description: "Only one file allowed"
  },
  render: args => {
    const [file, setFile] = useState<File | null>(null);
    return <div>
                <DropZone {...args} onDrop={files => setFile(files[0] || null)} />
                {file && <div className="mt-4">
                        <p className="text-body-semibold mb-2">Uploaded file:</p>
                        <p className="text-body text-fg-secondary">
                            {file.name} ({(file.size / 1024).toFixed(1)} KB)
                        </p>
                    </div>}
            </div>;
  }
}`,...(se=(re=N.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,ae,ne;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    icon: <UploadIcon />,
    error: "Upload failed. Please try again."
  }
}`,...(ne=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var oe,le,ie;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    icon: <UploadIcon />,
    disabled: true
  }
}`,...(ie=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var de,ce,pe;z.parameters={...z.parameters,docs:{...(de=z.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    size: "sm",
    icon: <UploadIcon />
  },
  render: args => {
    const [files, setFiles] = useState<File[]>([]);
    return <DropZone {...args} onDrop={setFiles} />;
  }
}`,...(pe=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,me,fe;V.parameters={...V.parameters,docs:{...(ue=V.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    size: "lg",
    icon: <UploadIcon />,
    heading: "Upload your files",
    description: "Drag and drop files here",
    helperText: "or click to browse from your computer"
  },
  render: args => {
    const [files, setFiles] = useState<File[]>([]);
    return <DropZone {...args} onDrop={setFiles} />;
  }
}`,...(fe=(me=V.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ge,xe,he;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = useState<File[]>([]);
    return <div>
                <DropZoneCompact onDrop={setFiles} />
                {files.length > 0 && <div className="mt-4">
                        <p className="text-body-semibold mb-2">Uploaded files:</p>
                        <ul className="text-body text-fg-secondary">
                            {files.map((file, i) => <li key={i}>{file.name}</li>)}
                        </ul>
                    </div>}
            </div>;
  }
}`,...(he=(xe=k.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var be,ye,ve;U.parameters={...U.parameters,docs:{...(be=U.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = useState<File[]>([]);
    const [error, setError] = useState<string | undefined>();
    const handleDrop = (newFiles: File[]) => {
      setError(undefined);
      setFiles(prev => [...prev, ...newFiles]);
    };
    return <div>
                <DropZone icon={<UploadIcon />} onDrop={handleDrop} accept=".pdf,.doc,.docx" maxSize={10 * 1024 * 1024} error={error} helperText="PDF, DOC, DOCX only (max 10 MB)" />
                {files.length > 0 && <div className="mt-4">
                        <p className="text-body-semibold mb-2">Uploaded files:</p>
                        <ul className="text-body text-fg-secondary">
                            {files.map((file, i) => <li key={i}>
                                    {file.name} ({(file.size / 1024).toFixed(1)} KB)
                                </li>)}
                        </ul>
                    </div>}
            </div>;
  }
}`,...(ve=(ye=U.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var De,je,Fe;w.parameters={...w.parameters,docs:{...(De=w.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => {
    const [files, setFiles] = useState<File[]>([]);
    return <form className="max-w-2xl">
                <div className="mb-4">
                    <label className="block text-body-semibold text-fg-default mb-2">
                        Project Name
                    </label>
                    <input type="text" className="w-full px-3 py-2 border border-border-default rounded-sm" placeholder="Enter project name" />
                </div>
                <div className="mb-4">
                    <label className="block text-body-semibold text-fg-default mb-2">
                        Attachments
                    </label>
                    <DropZone size="sm" icon={<UploadIcon />} onDrop={setFiles} />
                    {files.length > 0 && <div className="mt-2">
                            <p className="text-small text-fg-secondary">
                                {files.length} file(s) selected
                            </p>
                        </div>}
                </div>
                <Button type="submit">Submit</Button>
            </form>;
  }
}`,...(Fe=(je=w.parameters)==null?void 0:je.docs)==null?void 0:Fe.source}}};const Ye=["Default","WithCustomText","WithButton","ImageOnly","SingleFile","WithError","Disabled","Small","Large","CompactVariant","WithValidation","InForm"];export{k as CompactVariant,v as Default,C as Disabled,F as ImageOnly,w as InForm,V as Large,N as SingleFile,z as Small,j as WithButton,D as WithCustomText,S as WithError,U as WithValidation,Ye as __namedExportsOrder,Qe as default};
