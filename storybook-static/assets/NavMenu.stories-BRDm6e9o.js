import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-Dz3UJJSw.js";import{c as _}from"./clsx-B-dksMZM.js";import{N as n}from"./NavMenuItem-DXYEH4KC.js";import{N as v}from"./NavMenuGroup-Bu_ev2MZ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Dp3B9jqt.js";const x=s.forwardRef(function({className:P,children:V,isOpen:o,onClose:a,title:f,width:u=280,showSearch:R=!1,searchPlaceholder:F="Search...",searchValue:L="",onSearchChange:m,...W},q){const h=s.useRef(null);return s.useEffect(()=>{if(!o)return;const t=p=>{h.current&&!h.current.contains(p.target)&&(a==null||a())};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[o,a]),s.useEffect(()=>{if(!o)return;const t=p=>{p.key==="Escape"&&(a==null||a())};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[o,a]),o?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 bg-scrim-light z-40",onClick:a,"aria-hidden":"true"}),e.jsxs("div",{ref:h,className:_("fixed bg-bg-canvas rounded-lg shadow-lg z-50 flex flex-col overflow-hidden",P),style:{width:typeof u=="number"?`${u}px`:u},...W,children:[f&&e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border-default",children:[e.jsx("h3",{className:"text-base font-semibold text-fg-default",children:f}),e.jsx("button",{type:"button",onClick:a,className:"w-6 h-6 flex items-center justify-center rounded hover:bg-bg-surface text-fg-secondary","aria-label":"Close menu",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M4 4l8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]}),R&&e.jsx("div",{className:"px-3 py-2 border-b border-border-default",children:e.jsxs("div",{className:"relative",children:[e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",className:"absolute left-3 top-1/2 -translate-y-1/2 text-fg-muted",children:[e.jsx("circle",{cx:"7",cy:"7",r:"5",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M11 11l3 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("input",{type:"search",value:L,onChange:t=>m==null?void 0:m(t.target.value),placeholder:F,className:"w-full h-9 pl-10 pr-3 rounded-md border border-border-default bg-bg-canvas text-sm text-fg-default placeholder:text-fg-disabled focus:outline-none focus:ring-2 focus:ring-border-focus"})]})}),e.jsx("div",{className:"flex-1 overflow-y-auto py-2",children:V})]})]}):null});try{x.displayName="NavMenu",x.__docgenInfo={description:"",displayName:"NavMenu",props:{isOpen:{defaultValue:null,description:"Whether the menu is currently open",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback when menu should close",name:"onClose",required:!1,type:{name:"(() => void)"}},title:{defaultValue:null,description:"Menu title",name:"title",required:!1,type:{name:"string"}},anchorEl:{defaultValue:null,description:"Anchor element for positioning",name:"anchorEl",required:!1,type:{name:"HTMLElement | null"}},width:{defaultValue:{value:"280"},description:"Menu width",name:"width",required:!1,type:{name:"string | number"}},showSearch:{defaultValue:{value:"false"},description:"Whether to show search bar at top",name:"showSearch",required:!1,type:{name:"boolean"}},searchPlaceholder:{defaultValue:{value:"Search..."},description:"Search placeholder",name:"searchPlaceholder",required:!1,type:{name:"string"}},searchValue:{defaultValue:{value:""},description:"Search value",name:"searchValue",required:!1,type:{name:"string"}},onSearchChange:{defaultValue:null,description:"Search change handler",name:"onSearchChange",required:!1,type:{name:"((value: string) => void)"}}}}}catch{}const C={title:"Navigation/NavMenu",component:x,parameters:{layout:"centered"},tags:["autodocs"]},r=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M8 2L2 7h2v6h3V9h2v4h3V7h2L8 2z"})}),i={args:{isOpen:!0,title:"Navigation Menu",children:e.jsxs("div",{className:"px-2",children:[e.jsx(n,{icon:e.jsx(r,{}),children:"Home"}),e.jsx(n,{icon:e.jsx(r,{}),children:"Dashboard"}),e.jsx(n,{icon:e.jsx(r,{}),children:"Projects"}),e.jsx(n,{icon:e.jsx(r,{}),children:"Reports"})]})}},c={args:{isOpen:!0,title:"Projects",showSearch:!0,searchPlaceholder:"Search projects...",children:e.jsxs("div",{className:"px-2",children:[e.jsx(n,{icon:e.jsx(r,{}),children:"Seattle Railway"}),e.jsx(n,{icon:e.jsx(r,{}),children:"Downtown Tower"}),e.jsx(n,{icon:e.jsx(r,{}),children:"Riverside Development"})]})}},l={args:{isOpen:!0,title:"All Tools",showSearch:!0,children:e.jsxs("div",{className:"px-2 space-y-4",children:[e.jsxs(v,{label:"Favorites",children:[e.jsx(n,{icon:e.jsx(r,{}),isFavorite:!0,children:"Home"}),e.jsx(n,{icon:e.jsx(r,{}),isFavorite:!0,children:"Daily Log"})]}),e.jsxs(v,{label:"Project Tools",children:[e.jsx(n,{icon:e.jsx(r,{}),children:"Schedule"}),e.jsx(n,{icon:e.jsx(r,{}),children:"Drawings"}),e.jsx(n,{icon:e.jsx(r,{}),badge:5,children:"RFIs"})]}),e.jsxs(v,{label:"Company Tools",children:[e.jsx(n,{icon:e.jsx(r,{}),children:"Directory"}),e.jsx(n,{icon:e.jsx(r,{}),children:"Admin"})]})]})}},d={args:{isOpen:!0,title:"App Selector",width:400,children:e.jsxs("div",{className:"px-2 grid grid-cols-2 gap-2",children:[e.jsx(n,{icon:e.jsx(r,{}),children:"Project Management"}),e.jsx(n,{icon:e.jsx(r,{}),children:"Quality & Safety"}),e.jsx(n,{icon:e.jsx(r,{}),children:"Field Productivity"}),e.jsx(n,{icon:e.jsx(r,{}),children:"Design Coordination"})]})}};var j,N,g;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "Navigation Menu",
    children: <div className="px-2">
                <NavMenuItem icon={<HomeIcon />}>Home</NavMenuItem>
                <NavMenuItem icon={<HomeIcon />}>Dashboard</NavMenuItem>
                <NavMenuItem icon={<HomeIcon />}>Projects</NavMenuItem>
                <NavMenuItem icon={<HomeIcon />}>Reports</NavMenuItem>
            </div>
  }
}`,...(g=(N=i.parameters)==null?void 0:N.docs)==null?void 0:g.source}}};var M,I,y;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "Projects",
    showSearch: true,
    searchPlaceholder: "Search projects...",
    children: <div className="px-2">
                <NavMenuItem icon={<HomeIcon />}>Seattle Railway</NavMenuItem>
                <NavMenuItem icon={<HomeIcon />}>Downtown Tower</NavMenuItem>
                <NavMenuItem icon={<HomeIcon />}>Riverside Development</NavMenuItem>
            </div>
  }
}`,...(y=(I=c.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var b,w,S;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "All Tools",
    showSearch: true,
    children: <div className="px-2 space-y-4">
                <NavMenuGroup label="Favorites">
                    <NavMenuItem icon={<HomeIcon />} isFavorite>
                        Home
                    </NavMenuItem>
                    <NavMenuItem icon={<HomeIcon />} isFavorite>
                        Daily Log
                    </NavMenuItem>
                </NavMenuGroup>
                <NavMenuGroup label="Project Tools">
                    <NavMenuItem icon={<HomeIcon />}>Schedule</NavMenuItem>
                    <NavMenuItem icon={<HomeIcon />}>Drawings</NavMenuItem>
                    <NavMenuItem icon={<HomeIcon />} badge={5}>
                        RFIs
                    </NavMenuItem>
                </NavMenuGroup>
                <NavMenuGroup label="Company Tools">
                    <NavMenuItem icon={<HomeIcon />}>Directory</NavMenuItem>
                    <NavMenuItem icon={<HomeIcon />}>Admin</NavMenuItem>
                </NavMenuGroup>
            </div>
  }
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var H,k,D;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "App Selector",
    width: 400,
    children: <div className="px-2 grid grid-cols-2 gap-2">
                <NavMenuItem icon={<HomeIcon />}>Project Management</NavMenuItem>
                <NavMenuItem icon={<HomeIcon />}>Quality & Safety</NavMenuItem>
                <NavMenuItem icon={<HomeIcon />}>Field Productivity</NavMenuItem>
                <NavMenuItem icon={<HomeIcon />}>Design Coordination</NavMenuItem>
            </div>
  }
}`,...(D=(k=d.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const $=["BasicMenu","WithSearch","WithGroups","WideMenu"];export{i as BasicMenu,d as WideMenu,l as WithGroups,c as WithSearch,$ as __namedExportsOrder,C as default};
