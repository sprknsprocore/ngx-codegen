import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-Dz3UJJSw.js";import{c as B}from"./clsx-B-dksMZM.js";import{B as n}from"./Button-CZgY2kMk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Dp3B9jqt.js";const i=o.forwardRef(function({className:a,items:C=[],groups:u=[],showSearch:j=!1,searchPlaceholder:be="Search",footer:F,message:V,selectionMode:d="none",selectedValues:p=[],onSelectionChange:N,width:k=280,...ve},fe){const[O,xe]=o.useState(""),ye=s=>{if(d==="none")return;let t;d==="single"?t=[s]:p.includes(s)?t=p.filter(l=>l!==s):t=[...p,s],N==null||N(t)},W=s=>O?s.filter(t=>t.label.toLowerCase().includes(O.toLowerCase())):s,L=s=>{const t=p.includes(s.value),l=d==="multiple",M=d==="single";return e.jsx("button",{onClick:()=>{var E;(E=s.onClick)==null||E.call(s),ye(s.value)},disabled:s.disabled,className:B("w-full px-3 py-2 text-left text-sm transition-colors","hover:bg-bg-surface focus:outline-none focus:bg-bg-surface","disabled:text-fg-disabled disabled:cursor-not-allowed",t&&"bg-bg-secondary",s.disabled&&"hover:bg-transparent"),children:e.jsxs("div",{className:"flex items-center gap-2",children:[l&&e.jsx("input",{type:"checkbox",checked:t,onChange:()=>{},className:"w-4 h-4 rounded border-border-default"}),M&&e.jsx("input",{type:"radio",checked:t,onChange:()=>{},className:"w-4 h-4 border-border-default"}),s.avatar&&e.jsx("div",{className:"w-8 h-8 rounded-full bg-bg-tertiary flex items-center justify-center text-fg-default text-xs font-semibold flex-shrink-0",children:s.avatar}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[s.icon&&e.jsx("span",{className:"flex-shrink-0",children:s.icon}),e.jsx("span",{className:B("text-fg-default",s.disabled&&"text-fg-disabled"),children:s.label})]}),s.subtitle&&e.jsx("div",{className:"text-xs text-fg-secondary mt-0.5",children:s.subtitle})]})]})},s.value)},z=u.length>0,Te=z?[]:C;return e.jsxs("div",{ref:fe,className:B("bg-bg-canvas border border-border-default rounded-lg shadow-2 overflow-hidden",a),style:{width:typeof k=="number"?`${k}px`:k},...ve,children:[j&&e.jsx("div",{className:"p-2 border-b border-border-default",children:e.jsxs("div",{className:"relative",children:[e.jsxs("svg",{className:"absolute left-2 top-1/2 -translate-y-1/2 text-fg-secondary",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("circle",{cx:"7",cy:"7",r:"5",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M11 11L14 14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("input",{type:"text",placeholder:be,value:O,onChange:s=>xe(s.target.value),className:"w-full h-8 pl-8 pr-3 text-sm bg-bg-canvas border border-border-default rounded focus:outline-none focus:ring-2 focus:ring-border-focus focus:border-border-focus"})]})}),V&&e.jsx("div",{className:"px-3 py-2 text-sm text-fg-secondary bg-bg-surface border-b border-border-default",children:V}),e.jsx("div",{className:"max-h-80 overflow-y-auto",children:z?u.map((s,t)=>{const l=W(s.options);return l.length===0?null:e.jsxs("div",{children:[s.title&&e.jsxs("div",{className:"px-3 py-2 text-xs font-semibold text-fg-secondary bg-bg-surface flex items-center justify-between",children:[e.jsx("span",{children:s.title}),s.badge&&e.jsx("span",{className:"px-2 py-0.5 text-xs bg-bg-tertiary text-fg-brand rounded",children:s.badge})]}),e.jsx("div",{className:"py-1",children:l.map(M=>L(M))})]},t)}):e.jsx("div",{className:"py-1",children:W(Te).map(s=>L(s))})}),F&&e.jsx("div",{className:"flex items-center justify-between gap-2 px-3 py-2 border-t border-border-default bg-bg-surface",children:F})]})});try{i.displayName="Menu",i.__docgenInfo={description:"",displayName:"Menu",props:{items:{defaultValue:{value:"[]"},description:"Menu items - can be flat array or grouped",name:"items",required:!1,type:{name:"MenuOption[]"}},groups:{defaultValue:{value:"[]"},description:"Grouped menu items",name:"groups",required:!1,type:{name:"MenuGroup[]"}},showSearch:{defaultValue:{value:"false"},description:"Whether to show search input",name:"showSearch",required:!1,type:{name:"boolean"}},searchPlaceholder:{defaultValue:{value:"Search"},description:"Search placeholder",name:"searchPlaceholder",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"Footer content (typically action buttons)",name:"footer",required:!1,type:{name:"ReactNode"}},message:{defaultValue:null,description:"Message to display (e.g., status or helper text)",name:"message",required:!1,type:{name:"string"}},selectionMode:{defaultValue:{value:"none"},description:"Selection mode",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"multiple"'},{value:'"single"'}]}},selectedValues:{defaultValue:{value:"[]"},description:"Selected values (for single or multiple selection)",name:"selectedValues",required:!1,type:{name:"string[]"}},onSelectionChange:{defaultValue:null,description:"Selection change handler",name:"onSelectionChange",required:!1,type:{name:"((values: string[]) => void)"}},width:{defaultValue:{value:"280"},description:"Width of the menu",name:"width",required:!1,type:{name:"string | number"}}}}}catch{}const Be={title:"Components/Menu",component:i,tags:["autodocs"],argTypes:{selectionMode:{control:"select",options:["none","single","multiple"]},showSearch:{control:"boolean"}}},c=[{label:"Option",value:"option1"},{label:"Option",value:"option2"},{label:"Option",value:"option3"},{label:"Option",value:"option4"},{label:"Option",value:"option5"},{label:"Option",value:"option6"},{label:"Option",value:"option7"},{label:"Option",value:"option8"}],Se=[{label:"Option",value:"option1",icon:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("circle",{cx:"8",cy:"8",r:"7",stroke:"currentColor",strokeWidth:"1.5"})})},{label:"Option",value:"option2",icon:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("circle",{cx:"8",cy:"8",r:"7",stroke:"currentColor",strokeWidth:"1.5"})})},{label:"Option",value:"option3",icon:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("circle",{cx:"8",cy:"8",r:"7",stroke:"currentColor",strokeWidth:"1.5"})})}],we=[{label:"Full Name",value:"user1",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"user2",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"user3",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"user4",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"user5",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"user6",avatar:"TT",subtitle:"Title, Company"}],m={args:{items:c}},h={args:{items:c,showSearch:!0,message:"Message"}},g={args:{items:Se,showSearch:!0,message:"Message"}},b={args:{items:we,showSearch:!0,message:"Message"}},v={args:{items:c,showSearch:!0,message:"Message",footer:e.jsxs(e.Fragment,{children:[e.jsx(n,{emphasis:"secondary",size:"sm",children:"Verb"}),e.jsx(n,{emphasis:"primary",size:"sm",children:"Verb"})]})}},f={args:{showSearch:!0,groups:[{title:"Grouped Title 1",badge:"Value",options:[{label:"Option",value:"g1-option1"},{label:"Option",value:"g1-option2"},{label:"Option",value:"g1-option3"}]},{title:"Grouped Title 2",badge:"Value",options:[{label:"Option",value:"g2-option1"},{label:"Option",value:"g2-option2"},{label:"Option",value:"g2-option3"}]}]}},x={args:{showSearch:!0,groups:[{title:"Grouped Title 1",options:[{label:"Full Name",value:"g1-user1",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"g1-user2",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"g1-user3",avatar:"TT",subtitle:"Title, Company"}]},{title:"Grouped Title 2",options:[{label:"Full Name",value:"g2-user1",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"g2-user2",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"g2-user3",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"g2-user4",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"g2-user5",avatar:"TT",subtitle:"Title, Company"}]}],footer:e.jsxs(e.Fragment,{children:[e.jsx(n,{emphasis:"secondary",size:"sm",children:"Verb"}),e.jsx(n,{emphasis:"primary",size:"sm",children:"Verb"})]})}},y={render:()=>{const[r,a]=o.useState([]);return e.jsx(i,{items:c,showSearch:!0,selectionMode:"multiple",selectedValues:r,onSelectionChange:a,message:"Message",footer:e.jsxs(e.Fragment,{children:[e.jsx(n,{emphasis:"secondary",size:"sm",onClick:()=>a([]),children:"Clear"}),e.jsx(n,{emphasis:"primary",size:"sm",children:"Select all"})]})})}},T={render:()=>{const[r,a]=o.useState([]);return e.jsx(i,{items:c,showSearch:!0,selectionMode:"single",selectedValues:r,onSelectionChange:a,message:"Message"})}},S={render:()=>{const[r,a]=o.useState(null),[C,u]=o.useState([]);return e.jsxs("div",{className:"relative",children:[e.jsx(n,{onClick:j=>a(j.currentTarget),children:"Open Menu"}),r&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-10",onClick:()=>a(null)}),e.jsx("div",{className:"absolute z-20 mt-2",style:{top:r.getBoundingClientRect().bottom+window.scrollY,left:r.getBoundingClientRect().left},children:e.jsx(i,{items:c,showSearch:!0,selectionMode:"multiple",selectedValues:C,onSelectionChange:u,footer:e.jsxs(e.Fragment,{children:[e.jsx(n,{emphasis:"secondary",size:"sm",onClick:()=>a(null),children:"Cancel"}),e.jsx(n,{emphasis:"primary",size:"sm",onClick:()=>a(null),children:"Apply"})]})})})]})]})}},w={args:{showSearch:!0,message:"Tier 1 › Tier 2 › Tier 3 ›",items:[{label:"Option",value:"option1",icon:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M6 4L10 8L6 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})},{label:"Option",value:"option2",icon:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M6 4L10 8L6 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})},{label:"Option",value:"option3",icon:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M6 4L10 8L6 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}],footer:e.jsx(n,{emphasis:"primary",size:"sm",className:"w-full",children:"Verb"})}};var G,q,R;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    items: simpleOptions
  }
}`,...(R=(q=m.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var _,A,I;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: simpleOptions,
    showSearch: true,
    message: "Message"
  }
}`,...(I=(A=h.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var U,D,P;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    items: optionsWithIcons,
    showSearch: true,
    message: "Message"
  }
}`,...(P=(D=g.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var Q,Y,H;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    items: userOptions,
    showSearch: true,
    message: "Message"
  }
}`,...(H=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};var $,J,K;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    items: simpleOptions,
    showSearch: true,
    message: "Message",
    footer: <>
                <Button emphasis="secondary" size="sm">
                    Verb
                </Button>
                <Button emphasis="primary" size="sm">
                    Verb
                </Button>
            </>
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Z,ee;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    showSearch: true,
    groups: [{
      title: "Grouped Title 1",
      badge: "Value",
      options: [{
        label: "Option",
        value: "g1-option1"
      }, {
        label: "Option",
        value: "g1-option2"
      }, {
        label: "Option",
        value: "g1-option3"
      }]
    }, {
      title: "Grouped Title 2",
      badge: "Value",
      options: [{
        label: "Option",
        value: "g2-option1"
      }, {
        label: "Option",
        value: "g2-option2"
      }, {
        label: "Option",
        value: "g2-option3"
      }]
    }]
  }
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,te,ae;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    showSearch: true,
    groups: [{
      title: "Grouped Title 1",
      options: [{
        label: "Full Name",
        value: "g1-user1",
        avatar: "TT",
        subtitle: "Title, Company"
      }, {
        label: "Full Name",
        value: "g1-user2",
        avatar: "TT",
        subtitle: "Title, Company"
      }, {
        label: "Full Name",
        value: "g1-user3",
        avatar: "TT",
        subtitle: "Title, Company"
      }]
    }, {
      title: "Grouped Title 2",
      options: [{
        label: "Full Name",
        value: "g2-user1",
        avatar: "TT",
        subtitle: "Title, Company"
      }, {
        label: "Full Name",
        value: "g2-user2",
        avatar: "TT",
        subtitle: "Title, Company"
      }, {
        label: "Full Name",
        value: "g2-user3",
        avatar: "TT",
        subtitle: "Title, Company"
      }, {
        label: "Full Name",
        value: "g2-user4",
        avatar: "TT",
        subtitle: "Title, Company"
      }, {
        label: "Full Name",
        value: "g2-user5",
        avatar: "TT",
        subtitle: "Title, Company"
      }]
    }],
    footer: <>
                <Button emphasis="secondary" size="sm">
                    Verb
                </Button>
                <Button emphasis="primary" size="sm">
                    Verb
                </Button>
            </>
  }
}`,...(ae=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,re,le;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return <Menu items={simpleOptions} showSearch={true} selectionMode="multiple" selectedValues={selected} onSelectionChange={setSelected} message="Message" footer={<>
                        <Button emphasis="secondary" size="sm" onClick={() => setSelected([])}>
                            Clear
                        </Button>
                        <Button emphasis="primary" size="sm">
                            Select all
                        </Button>
                    </>} />;
  }
}`,...(le=(re=y.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var oe,ie,ce;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return <Menu items={simpleOptions} showSearch={true} selectionMode="single" selectedValues={selected} onSelectionChange={setSelected} message="Message" />;
  }
}`,...(ce=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,de,pe;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [selected, setSelected] = useState<string[]>([]);
    return <div className="relative">
                <Button onClick={e => setAnchorEl(e.currentTarget)}>Open Menu</Button>
                {anchorEl && <>
                        <div className="fixed inset-0 z-10" onClick={() => setAnchorEl(null)} />
                        <div className="absolute z-20 mt-2" style={{
          top: anchorEl.getBoundingClientRect().bottom + window.scrollY,
          left: anchorEl.getBoundingClientRect().left
        }}>
                            <Menu items={simpleOptions} showSearch={true} selectionMode="multiple" selectedValues={selected} onSelectionChange={setSelected} footer={<>
                                        <Button emphasis="secondary" size="sm" onClick={() => setAnchorEl(null)}>
                                            Cancel
                                        </Button>
                                        <Button emphasis="primary" size="sm" onClick={() => setAnchorEl(null)}>
                                            Apply
                                        </Button>
                                    </>} />
                        </div>
                    </>}
            </div>;
  }
}`,...(pe=(de=S.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,he,ge;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    showSearch: true,
    message: "Tier 1 › Tier 2 › Tier 3 ›",
    items: [{
      label: "Option",
      value: "option1",
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
    }, {
      label: "Option",
      value: "option2",
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
    }, {
      label: "Option",
      value: "option3",
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
    }],
    footer: <Button emphasis="primary" size="sm" className="w-full">
                Verb
            </Button>
  }
}`,...(ge=(he=w.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};const Fe=["Default","WithSearch","WithIcons","WithUsers","WithFooter","Grouped","GroupedWithUsers","WithCheckboxes","WithRadios","Interactive","Breadcrumb"];export{w as Breadcrumb,m as Default,f as Grouped,x as GroupedWithUsers,S as Interactive,y as WithCheckboxes,v as WithFooter,g as WithIcons,T as WithRadios,h as WithSearch,b as WithUsers,Fe as __namedExportsOrder,Be as default};
