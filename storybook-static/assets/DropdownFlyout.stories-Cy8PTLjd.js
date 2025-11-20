import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-Dz3UJJSw.js";import{c as k}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const ae=({option:e,onSelect:g,menuWidth:r,depth:m})=>{const[o,s]=t.useState(!1),[h,v]=t.useState({top:0,left:0}),i=t.useRef(null),O=t.useRef(null);t.useEffect(()=>{var n;if(o&&i.current){const c=i.current.getBoundingClientRect(),x=window.innerHeight,p=window.innerWidth;let u=c.top,b=c.right;const f=((n=O.current)==null?void 0:n.offsetHeight)||300;u+f>x&&(u=Math.max(0,x-f-20)),b+r>p&&(b=c.left-r),v({top:u,left:b})}},[o,r]);const F=()=>{var n;e.children&&e.children.length>0?s(!o):((n=e.onClick)==null||n.call(e),g(e.value))},d=e.children&&e.children.length>0;return l.jsxs(l.Fragment,{children:[l.jsxs("button",{ref:i,type:"button",onClick:F,onMouseEnter:()=>d&&s(!0),onMouseLeave:()=>d&&s(!1),disabled:e.disabled,className:k("w-full px-3 py-2 text-left text-sm transition-colors flex items-center justify-between gap-2","hover:bg-bg-surface focus:outline-none focus:bg-bg-surface","disabled:text-fg-disabled disabled:cursor-not-allowed disabled:hover:bg-transparent",!e.disabled&&"text-fg-default"),children:[l.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-0",children:[e.icon&&l.jsx("span",{className:"flex-shrink-0",children:e.icon}),l.jsx("span",{className:"truncate",children:e.label})]}),d&&l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",className:"flex-shrink-0 text-fg-secondary",children:l.jsx("path",{d:"M6 4L10 8L6 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),d&&o&&l.jsx("div",{ref:O,className:"fixed z-50",style:{top:`${h.top}px`,left:`${h.left}px`,width:`${r}px`},onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:l.jsx("div",{className:"bg-bg-canvas border border-border-default rounded-lg shadow-2 overflow-hidden py-1",children:e.children.map(n=>l.jsx(ae,{option:n,onSelect:g,menuWidth:r,depth:m+1},n.value))})})]})},E=t.forwardRef(function({className:g,options:r,trigger:m,onSelect:o,menuWidth:s=200,align:h="start",open:v,onOpenChange:i,...O},F){const[d,n]=t.useState(!1),c=t.useRef(null),x=t.useRef(null),p=v!==void 0?v:d,u=a=>{v===void 0&&n(a),i==null||i(a)},b=a=>{o==null||o(a),u(!1)},f=()=>{u(!p)};t.useEffect(()=>{const a=oe=>{c.current&&!c.current.contains(oe.target)&&u(!1)};return p&&document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[p]);const te=l.jsx("button",{ref:x,type:"button",onClick:f,className:"p-2 hover:bg-bg-surface rounded transition-colors","aria-label":"Open menu",children:l.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",className:"text-fg-default",children:[l.jsx("circle",{cx:"10",cy:"4",r:"1.5",fill:"currentColor"}),l.jsx("circle",{cx:"10",cy:"10",r:"1.5",fill:"currentColor"}),l.jsx("circle",{cx:"10",cy:"16",r:"1.5",fill:"currentColor"})]})});return l.jsx("div",{ref:F,className:k("relative inline-block",g),...O,children:l.jsxs("div",{ref:c,children:[m?l.jsx("div",{onClick:f,children:m}):te,p&&l.jsx("div",{className:k("absolute z-40 mt-2 top-full",h==="start"?"left-0":"right-0"),style:{width:`${s}px`},children:l.jsx("div",{className:"bg-bg-canvas border border-border-default rounded-lg shadow-2 overflow-hidden py-1",children:r.map(a=>l.jsx(ae,{option:a,onSelect:b,menuWidth:s,depth:0},a.value))})})]})})});try{E.displayName="DropdownFlyout",E.__docgenInfo={description:"",displayName:"DropdownFlyout",props:{options:{defaultValue:null,description:"Menu options (can be nested)",name:"options",required:!0,type:{name:"DropdownFlyoutOption[]"}},trigger:{defaultValue:null,description:"Trigger element (button, etc.)",name:"trigger",required:!1,type:{name:"ReactNode"}},onSelect:{defaultValue:null,description:"Callback when an option is selected",name:"onSelect",required:!1,type:{name:"((value: string) => void)"}},menuWidth:{defaultValue:{value:"200"},description:"Width of each menu level",name:"menuWidth",required:!1,type:{name:"number"}},align:{defaultValue:{value:"start"},description:"Alignment of the first menu relative to trigger",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'}]}},open:{defaultValue:null,description:"Whether menu is open (controlled)",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback when open state changes",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}}}}}catch{}const pe={title:"Components/DropdownFlyout",component:E,parameters:{layout:"centered"},tags:["autodocs"]},se=[{label:"Option",value:"1"},{label:"Option",value:"2"},{label:"Option",value:"3"}],M=[{label:"Option",value:"1",children:[{label:"Option",value:"1-1"},{label:"Option",value:"1-2"},{label:"Option",value:"1-3"}]},{label:"Option",value:"2",children:[{label:"Option",value:"2-1"},{label:"Option",value:"2-2"},{label:"Option",value:"2-3"}]},{label:"Option",value:"3",children:[{label:"Option",value:"3-1"},{label:"Option",value:"3-2"},{label:"Option",value:"3-3"}]}],re=[{label:"Option",value:"1",children:[{label:"Option",value:"1-1",children:[{label:"Option",value:"1-1-1"},{label:"Option",value:"1-1-2"},{label:"Option",value:"1-1-3"},{label:"Option",value:"1-1-4"}]},{label:"Option",value:"1-2",children:[{label:"Option",value:"1-2-1"},{label:"Option",value:"1-2-2"},{label:"Option",value:"1-2-3"}]},{label:"Option",value:"1-3"}]},{label:"Option",value:"2",children:[{label:"Option",value:"2-1"},{label:"Option",value:"2-2"}]},{label:"Option",value:"3"}],S={args:{options:se,onSelect:e=>console.log("Selected:",e)}},w={args:{options:M,onSelect:e=>console.log("Selected:",e)}},y={args:{options:re,onSelect:e=>console.log("Selected:",e)}},N={args:{options:M,trigger:l.jsx("button",{className:"px-4 py-2 bg-bg-brand text-fg-onbrand rounded-md hover:opacity-95 transition-colors",children:"Open Menu"}),onSelect:e=>console.log("Selected:",e)}},j={args:{options:M,align:"end",onSelect:e=>console.log("Selected:",e)}},C={args:{options:[{label:"Documents and Files",value:"docs",children:[{label:"Recent Documents",value:"docs-recent"},{label:"Shared with Me",value:"docs-shared"},{label:"Archived Files",value:"docs-archived"}]},{label:"Settings and Preferences",value:"settings",children:[{label:"Account Settings",value:"settings-account"},{label:"Privacy Controls",value:"settings-privacy"},{label:"Notification Preferences",value:"settings-notifications"}]}],menuWidth:280,onSelect:e=>console.log("Selected:",e)}},D={args:{options:[{label:"Option 1",value:"1"},{label:"Option 2 (Disabled)",value:"2",disabled:!0},{label:"Option 3",value:"3",children:[{label:"Sub Option 1",value:"3-1"},{label:"Sub Option 2 (Disabled)",value:"3-2",disabled:!0},{label:"Sub Option 3",value:"3-3"}]}],onSelect:e=>console.log("Selected:",e)}},R={args:{options:[{label:"File",value:"file",children:[{label:"New Document",value:"file-new-doc"},{label:"New Folder",value:"file-new-folder"},{label:"Open Recent",value:"file-recent",children:[{label:"Project A.docx",value:"file-recent-1"},{label:"Report.pdf",value:"file-recent-2"},{label:"Notes.txt",value:"file-recent-3"}]},{label:"Save",value:"file-save"},{label:"Save As...",value:"file-save-as"}]},{label:"Edit",value:"edit",children:[{label:"Undo",value:"edit-undo"},{label:"Redo",value:"edit-redo"},{label:"Cut",value:"edit-cut"},{label:"Copy",value:"edit-copy"},{label:"Paste",value:"edit-paste"}]},{label:"View",value:"view",children:[{label:"Zoom In",value:"view-zoom-in"},{label:"Zoom Out",value:"view-zoom-out"},{label:"Full Screen",value:"view-fullscreen"}]}],onSelect:e=>alert(`Selected: ${e}`)}};var W,A,P;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    options: simpleOptions,
    onSelect: value => console.log("Selected:", value)
  }
}`,...(P=(A=S.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var _,V,L;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    options: nestedOptions,
    onSelect: value => console.log("Selected:", value)
  }
}`,...(L=(V=w.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var q,z,I;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    options: deeplyNestedOptions,
    onSelect: value => console.log("Selected:", value)
  }
}`,...(I=(z=y.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var $,T,H;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    options: nestedOptions,
    trigger: <button className="px-4 py-2 bg-bg-brand text-fg-onbrand rounded-md hover:opacity-95 transition-colors">
                Open Menu
            </button>,
    onSelect: value => console.log("Selected:", value)
  }
}`,...(H=(T=N.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var Z,B,U;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    options: nestedOptions,
    align: "end",
    onSelect: value => console.log("Selected:", value)
  }
}`,...(U=(B=j.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var G,J,K;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Documents and Files",
      value: "docs",
      children: [{
        label: "Recent Documents",
        value: "docs-recent"
      }, {
        label: "Shared with Me",
        value: "docs-shared"
      }, {
        label: "Archived Files",
        value: "docs-archived"
      }]
    }, {
      label: "Settings and Preferences",
      value: "settings",
      children: [{
        label: "Account Settings",
        value: "settings-account"
      }, {
        label: "Privacy Controls",
        value: "settings-privacy"
      }, {
        label: "Notification Preferences",
        value: "settings-notifications"
      }]
    }],
    menuWidth: 280,
    onSelect: value => console.log("Selected:", value)
  }
}`,...(K=(J=C.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Option 1",
      value: "1"
    }, {
      label: "Option 2 (Disabled)",
      value: "2",
      disabled: true
    }, {
      label: "Option 3",
      value: "3",
      children: [{
        label: "Sub Option 1",
        value: "3-1"
      }, {
        label: "Sub Option 2 (Disabled)",
        value: "3-2",
        disabled: true
      }, {
        label: "Sub Option 3",
        value: "3-3"
      }]
    }],
    onSelect: value => console.log("Selected:", value)
  }
}`,...(Y=(X=D.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,le,ne;R.parameters={...R.parameters,docs:{...(ee=R.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "File",
      value: "file",
      children: [{
        label: "New Document",
        value: "file-new-doc"
      }, {
        label: "New Folder",
        value: "file-new-folder"
      }, {
        label: "Open Recent",
        value: "file-recent",
        children: [{
          label: "Project A.docx",
          value: "file-recent-1"
        }, {
          label: "Report.pdf",
          value: "file-recent-2"
        }, {
          label: "Notes.txt",
          value: "file-recent-3"
        }]
      }, {
        label: "Save",
        value: "file-save"
      }, {
        label: "Save As...",
        value: "file-save-as"
      }]
    }, {
      label: "Edit",
      value: "edit",
      children: [{
        label: "Undo",
        value: "edit-undo"
      }, {
        label: "Redo",
        value: "edit-redo"
      }, {
        label: "Cut",
        value: "edit-cut"
      }, {
        label: "Copy",
        value: "edit-copy"
      }, {
        label: "Paste",
        value: "edit-paste"
      }]
    }, {
      label: "View",
      value: "view",
      children: [{
        label: "Zoom In",
        value: "view-zoom-in"
      }, {
        label: "Zoom Out",
        value: "view-zoom-out"
      }, {
        label: "Full Screen",
        value: "view-fullscreen"
      }]
    }],
    onSelect: value => alert(\`Selected: \${value}\`)
  }
}`,...(ne=(le=R.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};const ve=["Default","Nested","DeeplyNested","WithCustomTrigger","AlignEnd","WideMenu","WithDisabledOptions","RealWorldExample"];export{j as AlignEnd,y as DeeplyNested,S as Default,w as Nested,R as RealWorldExample,C as WideMenu,N as WithCustomTrigger,D as WithDisabledOptions,ve as __namedExportsOrder,pe as default};
