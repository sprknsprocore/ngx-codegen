import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Q}from"./index-Dz3UJJSw.js";import{c as M}from"./clsx-B-dksMZM.js";import{N as r}from"./NavLogo-CPJmbWIf.js";import{C as x}from"./CompanyLogo-CXap8qVQ.js";import{P as j}from"./ProjectPicker-kZTUG-Js.js";import{A as k}from"./AppSelector-yjYhpO1a.js";import{N as n}from"./NavSearch-C3LRrlGl.js";import{N as a}from"./NavIconButton-BGKyFsa2.js";import{N as t}from"./NavAvatar-DK_peeQc.js";import{N as h}from"./NavMenuItem-DXYEH4KC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Dp3B9jqt.js";const v=Q.forwardRef(function({className:J,logo:c,onLogoClick:G,companyLogo:f,projectPicker:N,appSelector:b,search:y,leftItems:C,rightItems:I,showMobileMenu:U=!1,onMobileMenuClick:E,isMobile:o=!1,...K},O){return e.jsxs("nav",{ref:O,className:M("w-full h-14 bg-bg-reversed flex items-center px-4 gap-3 shadow-md",J),...K,children:[U&&e.jsx("button",{type:"button",onClick:E,className:"flex items-center justify-center w-10 h-10 rounded-md text-fg-reversed hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-border-focus lg:hidden","aria-label":"Open menu",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M4 6h16M4 12h16M4 18h16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),c&&e.jsx("div",{className:"flex items-center shrink-0",children:typeof c=="string"?e.jsx("button",{type:"button",onClick:G,className:"p-2 rounded-md hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-border-focus",children:e.jsx("img",{src:c,alt:"Logo",className:"h-3.5 w-auto"})}):c}),f&&!o&&e.jsx("div",{className:"flex items-center shrink-0",children:f}),N&&!o&&e.jsx("div",{className:"flex items-center shrink-0",children:N}),C&&!o&&e.jsx("div",{className:"flex items-center gap-1 flex-1 min-w-0",children:C}),y&&e.jsx("div",{className:M("flex items-center",o?"flex-1":"max-w-md"),children:y}),!o&&e.jsx("div",{className:"flex-1"}),b&&!o&&e.jsx("div",{className:"flex items-center shrink-0",children:b}),I&&e.jsx("div",{className:"flex items-center gap-2 shrink-0",children:I})]})});try{v.displayName="GlobalNav",v.__docgenInfo={description:"",displayName:"GlobalNav",props:{logo:{defaultValue:null,description:"Logo component or image URL",name:"logo",required:!1,type:{name:"ReactNode"}},onLogoClick:{defaultValue:null,description:"Callback when logo is clicked",name:"onLogoClick",required:!1,type:{name:"(() => void)"}},companyLogo:{defaultValue:null,description:"Company logo or name",name:"companyLogo",required:!1,type:{name:"ReactNode"}},projectPicker:{defaultValue:null,description:"Project picker component",name:"projectPicker",required:!1,type:{name:"ReactNode"}},appSelector:{defaultValue:null,description:"App selector component",name:"appSelector",required:!1,type:{name:"ReactNode"}},search:{defaultValue:null,description:"Search component",name:"search",required:!1,type:{name:"ReactNode"}},leftItems:{defaultValue:null,description:"Left-side navigation items (menu items)",name:"leftItems",required:!1,type:{name:"ReactNode"}},rightItems:{defaultValue:null,description:"Right-side action items (icons, avatar, etc.)",name:"rightItems",required:!1,type:{name:"ReactNode"}},showMobileMenu:{defaultValue:{value:"false"},description:"Whether to show mobile menu button",name:"showMobileMenu",required:!1,type:{name:"boolean"}},onMobileMenuClick:{defaultValue:null,description:"Callback when mobile menu button is clicked",name:"onMobileMenuClick",required:!1,type:{name:"(() => void)"}},isMobile:{defaultValue:{value:"false"},description:"Whether the navigation is in mobile mode",name:"isMobile",required:!1,type:{name:"boolean"}}}}}catch{}const me={title:"Navigation/GlobalNav",component:v,parameters:{layout:"fullscreen"},tags:["autodocs"]},p=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[e.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M10 14v.5M10 6.5v4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),T=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:e.jsx("path",{d:"M10 4a4 4 0 00-4 4v3l-2 2h12l-2-2V8a4 4 0 00-4-4zm0 12a2 2 0 01-2-2h4a2 2 0 01-2 2z",stroke:"currentColor",strokeWidth:"1.5",fill:"none"})}),X=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:e.jsx("path",{d:"M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H8l-5 3v-3a2 2 0 01-2-2V5z",stroke:"currentColor",strokeWidth:"1.5",fill:"none"})}),g=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M8 2L2 7h2v6h3V9h2v4h3V7h2L8 2z"})}),s={args:{logo:e.jsx(r,{onClick:()=>console.log("Logo clicked")}),companyLogo:e.jsx(x,{companyName:"Vertigo Construction",onClick:()=>console.log("Company clicked")}),projectPicker:e.jsx(j,{selectedProject:{id:"1",name:"Seattle Corridor Railway",companyName:"Vertigo Construction"},onClick:()=>console.log("Project picker clicked")}),search:e.jsx(n,{variant:"dark",shortcutHint:"Ctrl + K",onSearch:u=>console.log("Search:",u)}),appSelector:e.jsx(k,{selectedApp:"Project Management",onClick:()=>console.log("App selector clicked")}),rightItems:e.jsxs(e.Fragment,{children:[e.jsx(a,{icon:e.jsx(p,{}),label:"Help",variant:"dark"}),e.jsx(a,{icon:e.jsx(T,{}),label:"Notifications",badge:3,variant:"dark"}),e.jsx(a,{icon:e.jsx(X,{}),label:"Messages",variant:"dark"}),e.jsx(t,{name:"John Doe",onClick:()=>console.log("Avatar clicked")})]})}},l={args:{logo:e.jsx(r,{}),companyLogo:e.jsx(x,{companyName:"Acme Corp"}),projectPicker:e.jsx(j,{selectedProject:null}),leftItems:e.jsxs("div",{className:"flex gap-1",children:[e.jsx(h,{icon:e.jsx(g,{}),selected:!0,children:"Home"}),e.jsx(h,{icon:e.jsx(g,{}),children:"Directory"}),e.jsx(h,{icon:e.jsx(g,{}),badge:5,children:"RFIs"})]}),search:e.jsx(n,{variant:"dark"}),appSelector:e.jsx(k,{selectedApp:"Quality & Safety"}),rightItems:e.jsxs(e.Fragment,{children:[e.jsx(a,{icon:e.jsx(p,{}),label:"Help",variant:"dark"}),e.jsx(t,{name:"Jane Smith",src:"https://i.pravatar.cc/150?img=5"})]})}},i={args:{logo:e.jsx(r,{}),search:e.jsx(n,{variant:"dark"}),rightItems:e.jsxs(e.Fragment,{children:[e.jsx(a,{icon:e.jsx(p,{}),label:"Help",variant:"dark"}),e.jsx(t,{name:"User"})]})}},m={args:{isMobile:!0,showMobileMenu:!0,logo:e.jsx(r,{}),search:e.jsx(n,{variant:"dark",placeholder:"Search..."}),rightItems:e.jsx(t,{name:"JD",size:"sm"}),onMobileMenuClick:()=>console.log("Mobile menu clicked")}},d={args:{logo:e.jsx(r,{}),companyLogo:e.jsx(x,{companyName:"Vertigo Construction"}),projectPicker:e.jsx(j,{selectedProject:null}),search:e.jsx(n,{variant:"dark"}),appSelector:e.jsx(k,{selectedApp:null}),rightItems:e.jsxs(e.Fragment,{children:[e.jsx(a,{icon:e.jsx(p,{}),label:"Help",variant:"dark"}),e.jsx(t,{name:"New User"})]})}};var S,w,L;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    logo: <NavLogo onClick={() => console.log("Logo clicked")} />,
    companyLogo: <CompanyLogo companyName="Vertigo Construction" onClick={() => console.log("Company clicked")} />,
    projectPicker: <ProjectPicker selectedProject={{
      id: "1",
      name: "Seattle Corridor Railway",
      companyName: "Vertigo Construction"
    }} onClick={() => console.log("Project picker clicked")} />,
    search: <NavSearch variant="dark" shortcutHint="Ctrl + K" onSearch={v => console.log("Search:", v)} />,
    appSelector: <AppSelector selectedApp="Project Management" onClick={() => console.log("App selector clicked")} />,
    rightItems: <>
                <NavIconButton icon={<HelpIcon />} label="Help" variant="dark" />
                <NavIconButton icon={<BellIcon />} label="Notifications" badge={3} variant="dark" />
                <NavIconButton icon={<ChatIcon />} label="Messages" variant="dark" />
                <NavAvatar name="John Doe" onClick={() => console.log("Avatar clicked")} />
            </>
  }
}`,...(L=(w=s.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var P,A,H;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    logo: <NavLogo />,
    companyLogo: <CompanyLogo companyName="Acme Corp" />,
    projectPicker: <ProjectPicker selectedProject={null} />,
    leftItems: <div className="flex gap-1">
                <NavMenuItem icon={<HomeIcon />} selected>
                    Home
                </NavMenuItem>
                <NavMenuItem icon={<HomeIcon />}>Directory</NavMenuItem>
                <NavMenuItem icon={<HomeIcon />} badge={5}>
                    RFIs
                </NavMenuItem>
            </div>,
    search: <NavSearch variant="dark" />,
    appSelector: <AppSelector selectedApp="Quality & Safety" />,
    rightItems: <>
                <NavIconButton icon={<HelpIcon />} label="Help" variant="dark" />
                <NavAvatar name="Jane Smith" src="https://i.pravatar.cc/150?img=5" />
            </>
  }
}`,...(H=(A=l.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var V,R,B;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    logo: <NavLogo />,
    search: <NavSearch variant="dark" />,
    rightItems: <>
                <NavIconButton icon={<HelpIcon />} label="Help" variant="dark" />
                <NavAvatar name="User" />
            </>
  }
}`,...(B=(R=i.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var q,_,W;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    isMobile: true,
    showMobileMenu: true,
    logo: <NavLogo />,
    search: <NavSearch variant="dark" placeholder="Search..." />,
    rightItems: <NavAvatar name="JD" size="sm" />,
    onMobileMenuClick: () => console.log("Mobile menu clicked")
  }
}`,...(W=(_=m.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var D,z,F;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    logo: <NavLogo />,
    companyLogo: <CompanyLogo companyName="Vertigo Construction" />,
    projectPicker: <ProjectPicker selectedProject={null} />,
    search: <NavSearch variant="dark" />,
    appSelector: <AppSelector selectedApp={null} />,
    rightItems: <>
                <NavIconButton icon={<HelpIcon />} label="Help" variant="dark" />
                <NavAvatar name="New User" />
            </>
  }
}`,...(F=(z=d.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};const de=["Complete","WithMenuItems","MinimalDesktop","Mobile","NoProject"];export{s as Complete,i as MinimalDesktop,m as Mobile,d as NoProject,l as WithMenuItems,de as __namedExportsOrder,me as default};
