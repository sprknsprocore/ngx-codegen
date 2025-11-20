import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-Dz3UJJSw.js";import{c as f}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const r=s.forwardRef(function({className:t,label:p,helperText:v,validationState:m="none",required:F,placeholder:q="Placeholder",options:b=[],groups:h=[],value:u=[],onChange:i,disabled:d,maxSelections:R,message:_,...we},Ve){const[Oe,H]=s.useState(!1),[G,Ce]=s.useState(""),W=s.useRef(null),Le=s.useRef(null),g=m==="invalid",x=m==="valid",k=h.length>0;s.useEffect(()=>{const l=n=>{W.current&&!W.current.contains(n.target)&&H(!1)};return document.addEventListener("mousedown",l),()=>document.removeEventListener("mousedown",l)},[]);const Me=l=>{d||i==null||i(u.filter(n=>n!==l))},Pe=l=>{if(!d)if(u.includes(l))i==null||i(u.filter(n=>n!==l));else{if(R&&u.length>=R)return;i==null||i([...u,l])}},I=l=>G?l.filter(n=>n.label.toLowerCase().includes(G.toLowerCase())):l,Fe=l=>{if(k)for(const n of h){const c=n.options.find(E=>E.value===l);if(c)return c}else return b.find(n=>n.value===l)},D=l=>{const n=u.includes(l.value);return e.jsx("button",{type:"button",onClick:()=>Pe(l.value),disabled:l.disabled,className:f("w-full px-3 py-2 text-left text-sm transition-colors","hover:bg-bg-surface focus:outline-none focus:bg-bg-surface","disabled:text-fg-disabled disabled:cursor-not-allowed",n&&"bg-bg-secondary"),children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:n,onChange:()=>{},className:"w-4 h-4 rounded border-border-default"}),l.avatar&&e.jsx("div",{className:"w-8 h-8 rounded-full bg-bg-tertiary flex items-center justify-center text-fg-default text-xs font-semibold flex-shrink-0",children:l.avatar}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-fg-default",children:l.label}),l.subtitle&&e.jsx("div",{className:"text-xs text-fg-secondary mt-0.5",children:l.subtitle})]})]})},l.value)},qe=k?h.flatMap(l=>l.options):b;return e.jsxs("div",{ref:Ve,className:f("w-full",t),...we,children:[p&&e.jsxs("label",{className:"block text-sm font-medium text-fg-default mb-1.5",children:[p,F&&e.jsx("span",{className:"text-fg-error ml-0.5",children:"*"})]}),e.jsxs("div",{ref:W,className:"relative",children:[e.jsx("div",{className:f("min-h-10 px-3 py-2 bg-bg-canvas border rounded transition-colors","focus-within:outline-none focus-within:ring-2 focus-within:ring-border-focus focus-within:border-border-focus","disabled:bg-bg-tertiary disabled:cursor-not-allowed",g&&"border-border-error focus-within:ring-border-error focus-within:border-border-error",x&&"border-border-success focus-within:ring-border-success focus-within:border-border-success",!g&&!x&&"border-border-default hover:border-border-hover"),children:e.jsxs("div",{className:"flex flex-wrap gap-1",children:[u.map(l=>{const n=Fe(l);return n?e.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-1 bg-bg-tertiary text-fg-brand text-sm rounded",children:[n.label,e.jsx("button",{type:"button",onClick:()=>Me(l),disabled:d,className:"hover:text-fg-brand-hover transition-colors","aria-label":`Remove ${n.label}`,children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e.jsx("path",{d:"M3 3L9 9M3 9L9 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]},l):null}),e.jsx("input",{ref:Le,type:"text",placeholder:u.length===0?q:"",value:G,onChange:l=>Ce(l.target.value),onFocus:()=>H(!0),disabled:d,className:"flex-1 min-w-[120px] bg-transparent outline-none placeholder:text-fg-disabled disabled:cursor-not-allowed"})]})}),Oe&&!d&&e.jsxs("div",{className:"absolute z-50 w-full mt-1 bg-bg-canvas border border-border-default rounded-lg shadow-2 overflow-hidden",children:[_&&e.jsx("div",{className:"px-3 py-2 text-sm text-fg-secondary bg-bg-surface border-b border-border-default",children:_}),e.jsx("div",{className:"max-h-80 overflow-y-auto",children:k?h.map((l,n)=>{const c=I(l.options);return c.length===0?null:e.jsxs("div",{children:[l.title&&e.jsxs("div",{className:"px-3 py-2 text-xs font-semibold text-fg-secondary bg-bg-surface flex items-center justify-between",children:[e.jsx("span",{children:l.title}),l.badge&&e.jsx("span",{className:"px-2 py-0.5 text-xs bg-bg-tertiary text-fg-brand rounded",children:l.badge})]}),e.jsx("div",{className:"py-1",children:c.map(E=>D(E))})]},n)}):e.jsx("div",{className:"py-1",children:I(qe).map(l=>D(l))})})]})]}),v&&e.jsx("div",{className:f("mt-1.5 text-sm",g&&"text-fg-error",x&&"text-fg-success",!g&&!x&&"text-fg-secondary"),children:v})]})});try{r.displayName="MultiSelect",r.__docgenInfo={description:"",displayName:"MultiSelect",props:{label:{defaultValue:null,description:"Input label",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text or error message",name:"helperText",required:!1,type:{name:"string"}},validationState:{defaultValue:{value:"none"},description:"Validation state",name:"validationState",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"invalid"'},{value:'"valid"'}]}},required:{defaultValue:null,description:"Whether the label is required (shows asterisk)",name:"required",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Placeholder"},description:"Placeholder text",name:"placeholder",required:!1,type:{name:"string"}},options:{defaultValue:{value:"[]"},description:"Available options",name:"options",required:!1,type:{name:"MultiSelectOption[]"}},groups:{defaultValue:{value:"[]"},description:"Grouped options",name:"groups",required:!1,type:{name:"MultiSelectGroup[]"}},value:{defaultValue:{value:"[]"},description:"Selected values",name:"value",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"Change handler",name:"onChange",required:!1,type:{name:"((value: string[]) => void)"}},disabled:{defaultValue:null,description:"Whether the component is disabled",name:"disabled",required:!1,type:{name:"boolean"}},maxSelections:{defaultValue:null,description:"Maximum number of selections",name:"maxSelections",required:!1,type:{name:"number"}},message:{defaultValue:null,description:"Message to display in dropdown",name:"message",required:!1,type:{name:"string"}}}}}catch{}const _e={title:"Components/MultiSelect",component:r,tags:["autodocs"],argTypes:{validationState:{control:"select",options:["none","invalid","valid"]}}},o=[{label:"Option",value:"option1"},{label:"Option",value:"option2"},{label:"Option",value:"option3"},{label:"Option",value:"option4"},{label:"Option",value:"option5"},{label:"Option",value:"option6"},{label:"Option",value:"option7"},{label:"Option",value:"option8"},{label:"Option",value:"option9"},{label:"Option",value:"option10"}],Ge=[{label:"Full Name",value:"user1",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"user2",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"user3",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"user4",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"user5",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"user6",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"user7",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"user8",avatar:"TT",subtitle:"Title, Company"}],S={render:()=>{const[a,t]=s.useState([]);return e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Label",placeholder:"Placeholder",options:o,value:a,onChange:t})})}},T={render:()=>{const[a,t]=s.useState(["option1","option2"]);return e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Label",placeholder:"Placeholder",options:o,value:a,onChange:t})})}},N={render:()=>{const[a,t]=s.useState(["option1","option2","option3","option4"]);return e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Label",placeholder:"Placeholder",options:o,value:a,onChange:t})})}},y={render:()=>{const[a,t]=s.useState(["user1","user2"]);return e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Label",placeholder:"Placeholder",options:Ge,value:a,onChange:t,message:"Message"})})}},j={render:()=>{const[a,t]=s.useState(["g1-opt1","g2-opt2"]);return e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Label",placeholder:"Placeholder",groups:[{title:"Grouped Title 1",badge:"Value",options:[{label:"Option",value:"g1-opt1"},{label:"Option",value:"g1-opt2"},{label:"Option",value:"g1-opt3"}]},{title:"Grouped Title 2",badge:"Value",options:[{label:"Option",value:"g2-opt1"},{label:"Option",value:"g2-opt2"},{label:"Option",value:"g2-opt3"}]}],value:a,onChange:t})})}},w={render:()=>{const[a,t]=s.useState(["g1-user1","g2-user2"]);return e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Label",placeholder:"Placeholder",groups:[{title:"Grouped Title 1",options:[{label:"Full Name",value:"g1-user1",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"g1-user2",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"g1-user3",avatar:"TT",subtitle:"Title, Company"}]},{title:"Grouped Title 2",options:[{label:"Full Name",value:"g2-user1",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"g2-user2",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"g2-user3",avatar:"TT",subtitle:"Title, Company"},{label:"Full Name",value:"g2-user4",avatar:"TT",subtitle:"Title, Company"}]}],value:a,onChange:t,message:"Message"})})}},V={render:()=>{const[a,t]=s.useState(["option1","option2","option3","option4"]);return e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Label",placeholder:"Placeholder",options:o,value:a,onChange:t,validationState:"invalid",helperText:"Error Message/Helper Text"})})}},O={render:()=>{const[a,t]=s.useState(["option1","option2"]);return e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Label",placeholder:"Placeholder",options:o,value:a,onChange:t,validationState:"valid",helperText:"Success message"})})}},C={render:()=>{const[a]=s.useState(["option1","option2"]);return e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Label",placeholder:"Placeholder",options:o,value:a,disabled:!0})})}},L={render:()=>{const[a,t]=s.useState([]);return e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Label",placeholder:"Placeholder",options:o,value:a,onChange:t,required:!0})})}},M={render:()=>{const[a,t]=s.useState(["option1","option2"]);return e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Label (max 3 selections)",placeholder:"Placeholder",options:o,value:a,onChange:t,maxSelections:3,helperText:`${a.length}/3 selections`})})}},P={render:()=>{const[a,t]=s.useState([]),[p,v]=s.useState(["option1","option2"]),[m,F]=s.useState(["option1","option2","option3","option4"]),[q,b]=s.useState(["option1"]);return e.jsxs("div",{className:"flex flex-col gap-6 p-6",children:[e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Label",placeholder:"Placeholder",options:o,value:a,onChange:t})}),e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Label",placeholder:"Placeholder",options:o,value:p,onChange:v,helperText:"Helper text"})}),e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Label",placeholder:"Placeholder",options:o,value:m,onChange:F,validationState:"invalid",helperText:"Error Message/Helper Text"})}),e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Label",placeholder:"Placeholder",options:o,value:q,onChange:b,validationState:"valid",helperText:"Success message"})}),e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Label",placeholder:"Placeholder",options:o,value:["option1","option2"],disabled:!0})})]})}};var U,A,$;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div className="w-80">
                <MultiSelect label="Label" placeholder="Placeholder" options={simpleOptions} value={value} onChange={setValue} />
            </div>;
  }
}`,...($=(A=S.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var Q,z,B;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(["option1", "option2"]);
    return <div className="w-80">
                <MultiSelect label="Label" placeholder="Placeholder" options={simpleOptions} value={value} onChange={setValue} />
            </div>;
  }
}`,...(B=(z=T.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var J,K,X;N.parameters={...N.parameters,docs:{...(J=N.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(["option1", "option2", "option3", "option4"]);
    return <div className="w-80">
                <MultiSelect label="Label" placeholder="Placeholder" options={simpleOptions} value={value} onChange={setValue} />
            </div>;
  }
}`,...(X=(K=N.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,Z,ee;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(["user1", "user2"]);
    return <div className="w-80">
                <MultiSelect label="Label" placeholder="Placeholder" options={userOptions} value={value} onChange={setValue} message="Message" />
            </div>;
  }
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var le,ae,te;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(["g1-opt1", "g2-opt2"]);
    return <div className="w-80">
                <MultiSelect label="Label" placeholder="Placeholder" groups={[{
        title: "Grouped Title 1",
        badge: "Value",
        options: [{
          label: "Option",
          value: "g1-opt1"
        }, {
          label: "Option",
          value: "g1-opt2"
        }, {
          label: "Option",
          value: "g1-opt3"
        }]
      }, {
        title: "Grouped Title 2",
        badge: "Value",
        options: [{
          label: "Option",
          value: "g2-opt1"
        }, {
          label: "Option",
          value: "g2-opt2"
        }, {
          label: "Option",
          value: "g2-opt3"
        }]
      }]} value={value} onChange={setValue} />
            </div>;
  }
}`,...(te=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,ne,re;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(["g1-user1", "g2-user2"]);
    return <div className="w-80">
                <MultiSelect label="Label" placeholder="Placeholder" groups={[{
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
        }]
      }]} value={value} onChange={setValue} message="Message" />
            </div>;
  }
}`,...(re=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,ie,ue;V.parameters={...V.parameters,docs:{...(oe=V.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(["option1", "option2", "option3", "option4"]);
    return <div className="w-80">
                <MultiSelect label="Label" placeholder="Placeholder" options={simpleOptions} value={value} onChange={setValue} validationState="invalid" helperText="Error Message/Helper Text" />
            </div>;
  }
}`,...(ue=(ie=V.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var de,ce,pe;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(["option1", "option2"]);
    return <div className="w-80">
                <MultiSelect label="Label" placeholder="Placeholder" options={simpleOptions} value={value} onChange={setValue} validationState="valid" helperText="Success message" />
            </div>;
  }
}`,...(pe=(ce=O.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ve,me,be;C.parameters={...C.parameters,docs:{...(ve=C.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => {
    const [value] = useState<string[]>(["option1", "option2"]);
    return <div className="w-80">
                <MultiSelect label="Label" placeholder="Placeholder" options={simpleOptions} value={value} disabled />
            </div>;
  }
}`,...(be=(me=C.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var he,ge,xe;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div className="w-80">
                <MultiSelect label="Label" placeholder="Placeholder" options={simpleOptions} value={value} onChange={setValue} required />
            </div>;
  }
}`,...(xe=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var fe,Se,Te;M.parameters={...M.parameters,docs:{...(fe=M.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(["option1", "option2"]);
    return <div className="w-80">
                <MultiSelect label="Label (max 3 selections)" placeholder="Placeholder" options={simpleOptions} value={value} onChange={setValue} maxSelections={3} helperText={\`\${value.length}/3 selections\`} />
            </div>;
  }
}`,...(Te=(Se=M.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};var Ne,ye,je;P.parameters={...P.parameters,docs:{...(Ne=P.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<string[]>([]);
    const [value2, setValue2] = useState<string[]>(["option1", "option2"]);
    const [value3, setValue3] = useState<string[]>(["option1", "option2", "option3", "option4"]);
    const [value4, setValue4] = useState<string[]>(["option1"]);
    return <div className="flex flex-col gap-6 p-6">
                <div className="w-80">
                    <MultiSelect label="Label" placeholder="Placeholder" options={simpleOptions} value={value1} onChange={setValue1} />
                </div>
                <div className="w-80">
                    <MultiSelect label="Label" placeholder="Placeholder" options={simpleOptions} value={value2} onChange={setValue2} helperText="Helper text" />
                </div>
                <div className="w-80">
                    <MultiSelect label="Label" placeholder="Placeholder" options={simpleOptions} value={value3} onChange={setValue3} validationState="invalid" helperText="Error Message/Helper Text" />
                </div>
                <div className="w-80">
                    <MultiSelect label="Label" placeholder="Placeholder" options={simpleOptions} value={value4} onChange={setValue4} validationState="valid" helperText="Success message" />
                </div>
                <div className="w-80">
                    <MultiSelect label="Label" placeholder="Placeholder" options={simpleOptions} value={["option1", "option2"]} disabled />
                </div>
            </div>;
  }
}`,...(je=(ye=P.parameters)==null?void 0:ye.docs)==null?void 0:je.source}}};const He=["Default","WithValues","WithManyValues","WithUserOptions","Grouped","GroupedWithUsers","Invalid","Valid","Disabled","Required","WithMaxSelections","AllStates"];export{P as AllStates,S as Default,C as Disabled,j as Grouped,w as GroupedWithUsers,V as Invalid,L as Required,O as Valid,N as WithManyValues,M as WithMaxSelections,y as WithUserOptions,T as WithValues,He as __namedExportsOrder,_e as default};
