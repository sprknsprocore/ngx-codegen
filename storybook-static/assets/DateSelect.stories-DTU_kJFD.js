import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-Dz3UJJSw.js";import{c as q}from"./clsx-B-dksMZM.js";import{C as xe}from"./Calendar-Bf3Kcyzj.js";import"./_commonjsHelpers-CqkleIqs.js";const o=r.forwardRef(function({className:a,value:s,onChange:l,placeholder:V="mm / dd / yyyy",label:C,helperText:M,validationState:le="none",required:oe=!1,disabled:i=!1,format:ge="MM/DD/YYYY",minDate:de,maxDate:ue,disabledDates:ie,...ce},me){const[p,D]=r.useState(!1),[k,m]=r.useState(""),j=r.useRef(null),f=le==="error";r.useEffect(()=>{m(s?W(s):"")},[s]);const W=n=>{const d=String(n.getMonth()+1).padStart(2,"0"),u=String(n.getDate()).padStart(2,"0"),c=n.getFullYear();return`${d} / ${u} / ${c}`},pe=n=>{const d=n.replace(/[\s/]/g,"");if(d.length!==8)return null;const u=parseInt(d.substring(0,2),10),c=parseInt(d.substring(2,4),10),E=parseInt(d.substring(4,8),10);return isNaN(u)||isNaN(c)||isNaN(E)||u<1||u>12||c<1||c>31?null:new Date(E,u-1,c)},De=n=>{const d=n.target.value;m(d);const u=pe(d);u&&!isNaN(u.getTime())&&(l==null||l(u))},fe=()=>{k&&s&&m(W(s))},he=n=>{n instanceof Date&&(l==null||l(n),D(!1))},ve=n=>{n.stopPropagation(),l==null||l(void 0),m("")};return r.useEffect(()=>{const n=d=>{j.current&&!j.current.contains(d.target)&&D(!1)};return p&&document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[p]),e.jsxs("div",{ref:me,className:q("w-full",a),...ce,children:[C&&e.jsxs("label",{className:"block text-sm font-medium text-fg-default mb-1.5",children:[C,oe&&e.jsx("span",{className:"text-state-danger ml-0.5",children:"*"})]}),e.jsxs("div",{ref:j,className:"relative",children:[e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",value:k,onChange:De,onBlur:fe,onFocus:()=>!i&&D(!0),placeholder:V,disabled:i,className:q("w-full h-9 pl-3.5 pr-20 text-md rounded-md border bg-bg-canvas text-fg-default placeholder:text-fg-muted outline-none transition-colors","focus:ring-2 focus:ring-border-focus focus:border-border-focus",f&&"border-state-danger focus:ring-state-danger focus:border-state-danger",!f&&"border-border-default",i&&"opacity-50 pointer-events-none")}),e.jsxs("div",{className:"absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-1",children:[s&&!i&&e.jsx("button",{type:"button",onClick:ve,className:"p-1.5 hover:bg-bg-surface rounded transition-colors","aria-label":"Clear date",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",className:"text-fg-secondary",children:e.jsx("path",{d:"M12 4L4 12M4 4L12 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}),e.jsx("button",{type:"button",onClick:()=>!i&&D(!p),disabled:i,className:"p-1.5 hover:bg-bg-surface rounded transition-colors","aria-label":"Open calendar",children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",className:"text-fg-secondary",children:[e.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M2 6H14",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M5 2V4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M11 2V4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})]})]}),p&&!i&&e.jsx("div",{className:"absolute z-50 mt-2",children:e.jsx(xe,{mode:"single",selected:s,onSelect:he,defaultMonth:s||new Date,minDate:de,maxDate:ue,disabled:ie})})]}),M&&e.jsx("div",{className:q("mt-1.5 text-sm",f&&"text-state-danger",!f&&"text-fg-muted"),children:M})]})});try{o.displayName="DateSelect",o.__docgenInfo={description:"",displayName:"DateSelect",props:{value:{defaultValue:null,description:"Selected date",name:"value",required:!1,type:{name:"Date"}},onChange:{defaultValue:null,description:"Callback when date changes",name:"onChange",required:!1,type:{name:"((date: Date) => void)"}},placeholder:{defaultValue:{value:"mm / dd / yyyy"},description:"Placeholder text",name:"placeholder",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Input label",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text or error message",name:"helperText",required:!1,type:{name:"string"}},validationState:{defaultValue:{value:"none"},description:"Validation state",name:"validationState",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"none"'},{value:'"error"'}]}},required:{defaultValue:{value:"false"},description:"Whether the field is required",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Whether the field is disabled",name:"disabled",required:!1,type:{name:"boolean"}},format:{defaultValue:{value:"MM/DD/YYYY"},description:"Date format string",name:"format",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:"Minimum selectable date",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Maximum selectable date",name:"maxDate",required:!1,type:{name:"Date"}},disabledDates:{defaultValue:null,description:"Disabled dates",name:"disabledDates",required:!1,type:{name:"Date[] | ((date: Date) => boolean)"}}}}}catch{}const Ve={title:"Components/DateSelect",component:o,parameters:{layout:"centered"},tags:["autodocs"]},h={render:()=>{const[t,a]=r.useState();return e.jsx("div",{className:"w-80",children:e.jsx(o,{value:t,onChange:a})})}},v={render:()=>{const[t,a]=r.useState();return e.jsx("div",{className:"w-80",children:e.jsx(o,{value:t,onChange:a,label:"Select Date"})})}},x={render:()=>{const[t,a]=r.useState();return e.jsx("div",{className:"w-80",children:e.jsx(o,{value:t,onChange:a,label:"Delivery Date",helperText:"Choose your preferred delivery date"})})}},g={render:()=>{const[t,a]=r.useState();return e.jsx("div",{className:"w-80",children:e.jsx(o,{value:t,onChange:a,label:"Birth Date",required:!0})})}},b={render:()=>{const[t,a]=r.useState();return e.jsx("div",{className:"w-80",children:e.jsx(o,{value:t,onChange:a,label:"Start Date",helperText:"This field is required",validationState:"error"})})}},S={render:()=>{const[t]=r.useState(new Date);return e.jsx("div",{className:"w-80",children:e.jsx(o,{value:t,label:"Disabled Field",disabled:!0})})}},y={render:()=>{const[t,a]=r.useState(new Date(2024,6,21));return e.jsx("div",{className:"w-80",children:e.jsx(o,{value:t,onChange:a,label:"Appointment Date"})})}},w={render:()=>{const[t,a]=r.useState(),s=new Date,l=new Date(s.getFullYear(),s.getMonth(),1),V=new Date(s.getFullYear(),s.getMonth()+2,0);return e.jsx("div",{className:"w-80",children:e.jsx(o,{value:t,onChange:a,label:"Available Dates",helperText:"Only current and next 2 months available",minDate:l,maxDate:V})})}},N={render:()=>{const[t,a]=r.useState(),[s,l]=r.useState();return e.jsxs("div",{className:"w-96 space-y-4",children:[e.jsx(o,{value:t,onChange:a,label:"Start Date",required:!0}),e.jsx(o,{value:s,onChange:l,label:"End Date",required:!0})]})}};var Y,T,I;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | undefined>();
    return <div className="w-80">
                <DateSelect value={value} onChange={setValue} />
            </div>;
  }
}`,...(I=(T=h.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var F,_,L;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | undefined>();
    return <div className="w-80">
                <DateSelect value={value} onChange={setValue} label="Select Date" />
            </div>;
  }
}`,...(L=(_=v.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var O,B,R;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | undefined>();
    return <div className="w-80">
                <DateSelect value={value} onChange={setValue} label="Delivery Date" helperText="Choose your preferred delivery date" />
            </div>;
  }
}`,...(R=(B=x.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var A,H,$;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | undefined>();
    return <div className="w-80">
                <DateSelect value={value} onChange={setValue} label="Birth Date" required />
            </div>;
  }
}`,...($=(H=g.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var P,z,G;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | undefined>();
    return <div className="w-80">
                <DateSelect value={value} onChange={setValue} label="Start Date" helperText="This field is required" validationState="error" />
            </div>;
  }
}`,...(G=(z=b.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,Q;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [value] = useState<Date>(new Date());
    return <div className="w-80">
                <DateSelect value={value} label="Disabled Field" disabled />
            </div>;
  }
}`,...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Z;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date>(new Date(2024, 6, 21));
    return <div className="w-80">
                <DateSelect value={value} onChange={setValue} label="Appointment Date" />
            </div>;
  }
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ae;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | undefined>();
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0);
    return <div className="w-80">
                <DateSelect value={value} onChange={setValue} label="Available Dates" helperText="Only current and next 2 months available" minDate={minDate} maxDate={maxDate} />
            </div>;
  }
}`,...(ae=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,se,ne;N.parameters={...N.parameters,docs:{...(re=N.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>();
    return <div className="w-96 space-y-4">
                <DateSelect value={startDate} onChange={setStartDate} label="Start Date" required />
                <DateSelect value={endDate} onChange={setEndDate} label="End Date" required />
            </div>;
  }
}`,...(ne=(se=N.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};const je=["Default","WithLabel","WithHelperText","Required","WithError","Disabled","WithValue","WithMinMaxDate","InForm"];export{h as Default,S as Disabled,N as InForm,g as Required,b as WithError,x as WithHelperText,v as WithLabel,w as WithMinMaxDate,y as WithValue,je as __namedExportsOrder,Ve as default};
