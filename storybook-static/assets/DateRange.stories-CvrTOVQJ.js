import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-Dz3UJJSw.js";import{c as x}from"./clsx-B-dksMZM.js";import{C as Pe}from"./Calendar-Bf3Kcyzj.js";import"./_commonjsHelpers-CqkleIqs.js";const u=o.forwardRef(function({className:d,value:t,onChange:s,placeholderStart:R="mm / dd / yyyy",placeholderEnd:me="mm / dd / yyyy",label:M,helperText:C,validationState:fe="none",required:pe=!1,disabled:i=!1,minDate:ge,maxDate:he,disabledDates:xe,showPresets:be=!1,...De},ve){const[P,p]=o.useState(!1),[I,g]=o.useState(""),[k,h]=o.useState(""),[qe,W]=o.useState("start"),q=o.useRef(null),c=fe==="error";o.useEffect(()=>{t!=null&&t.from?g(m(t.from)):g(""),t!=null&&t.to?h(m(t.to)):h("")},[t]);const m=a=>{const r=String(a.getMonth()+1).padStart(2,"0"),l=String(a.getDate()).padStart(2,"0"),f=a.getFullYear();return`${r} / ${l} / ${f}`},E=a=>{const r=a.replace(/[\s/]/g,"");if(r.length!==8)return null;const l=parseInt(r.substring(0,2),10),f=parseInt(r.substring(2,4),10),B=parseInt(r.substring(4,8),10);return isNaN(l)||isNaN(f)||isNaN(B)||l<1||l>12||f<1||f>31?null:new Date(B,l-1,f)},ye=a=>{const r=a.target.value;g(r);const l=E(r);l&&!isNaN(l.getTime())&&(s==null||s({from:l,to:t==null?void 0:t.to}))},we=a=>{const r=a.target.value;h(r);const l=E(r);l&&!isNaN(l.getTime())&&(t!=null&&t.from)&&(s==null||s({from:t.from,to:l}))},Ve=()=>{I&&(t!=null&&t.from)&&g(m(t.from))},je=()=>{k&&(t!=null&&t.to)&&h(m(t.to))},Ne=a=>{a&&typeof a=="object"&&"from"in a&&(s==null||s(a.to?a:void 0),a.to&&p(!1))},L=a=>{a.stopPropagation(),s==null||s(void 0),g(""),h("")},Se=a=>{s==null||s(a.getValue()),p(!1)},Re=[{label:"Last 7 days",getValue:()=>{const a=new Date,r=new Date(a);return r.setDate(r.getDate()-7),{from:r,to:a}}},{label:"Last 30 days",getValue:()=>{const a=new Date,r=new Date(a);return r.setDate(r.getDate()-30),{from:r,to:a}}},{label:"This month",getValue:()=>{const a=new Date,r=new Date(a.getFullYear(),a.getMonth(),1),l=new Date(a.getFullYear(),a.getMonth()+1,0);return{from:r,to:l}}},{label:"Last month",getValue:()=>{const a=new Date,r=new Date(a.getFullYear(),a.getMonth()-1,1),l=new Date(a.getFullYear(),a.getMonth(),0);return{from:r,to:l}}}];o.useEffect(()=>{const a=r=>{q.current&&!q.current.contains(r.target)&&p(!1)};return P&&document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[P]);const F=t!=null&&t.from&&(t!=null&&t.to)?`${m(t.from)} - ${m(t.to)}`:"";return e.jsxs("div",{ref:ve,className:x("w-full",d),...De,children:[M&&e.jsxs("label",{className:"block text-sm font-medium text-fg-default mb-1.5",children:[M,pe&&e.jsx("span",{className:"text-state-danger ml-0.5",children:"*"})]}),e.jsxs("div",{ref:q,className:"relative",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"relative flex-1",children:e.jsx("input",{type:"text",value:I,onChange:ye,onBlur:Ve,onFocus:()=>{i||(W("start"),p(!0))},placeholder:R,disabled:i,className:x("w-full h-9 px-3.5 text-md rounded-md border bg-bg-canvas text-fg-default placeholder:text-fg-muted outline-none transition-colors","focus:ring-2 focus:ring-border-focus focus:border-border-focus",c&&"border-state-danger focus:ring-state-danger focus:border-state-danger",!c&&"border-border-default",i&&"opacity-50 pointer-events-none")})}),e.jsx("div",{className:"relative flex-1",children:e.jsx("input",{type:"text",value:k,onChange:we,onBlur:je,onFocus:()=>{i||(W("end"),p(!0))},placeholder:me,disabled:i,className:x("w-full h-9 px-3.5 text-md rounded-md border bg-bg-canvas text-fg-default placeholder:text-fg-muted outline-none transition-colors","focus:ring-2 focus:ring-border-focus focus:border-border-focus",c&&"border-state-danger focus:ring-state-danger focus:border-state-danger",!c&&"border-border-default",i&&"opacity-50 pointer-events-none")})}),t&&!i&&e.jsx("button",{type:"button",onClick:L,className:"px-3 h-9 hover:bg-bg-surface rounded transition-colors flex items-center","aria-label":"Clear dates",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",className:"text-fg-secondary",children:e.jsx("path",{d:"M12 4L4 12M4 4L12 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]}),P&&!i&&e.jsx("div",{className:"absolute z-50 mt-2",children:e.jsxs("div",{className:"flex gap-4",children:[be&&e.jsxs("div",{className:"bg-bg-canvas border border-border-default rounded-lg shadow-2 p-2 w-48",children:[e.jsx("div",{className:"text-xs font-semibold text-fg-secondary px-2 py-1.5",children:"Presets"}),e.jsx("div",{className:"space-y-1",children:Re.map(a=>e.jsx("button",{type:"button",onClick:()=>Se(a),className:"w-full px-2 py-1.5 text-sm text-left hover:bg-bg-surface rounded transition-colors text-fg-default",children:a.label},a.label))})]}),e.jsx(Pe,{mode:"range",selected:t,onSelect:Ne,defaultMonth:(t==null?void 0:t.from)||new Date,minDate:ge,maxDate:he,disabled:xe,numberOfMonths:2})]})}),F&&e.jsx("div",{className:"mt-2",children:e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 bg-bg-brand text-fg-onbrand text-sm rounded-full",children:[e.jsxs("span",{children:["Created: ",F]}),!i&&e.jsx("button",{type:"button",onClick:L,className:"hover:bg-bg-brand-secondary rounded-full p-0.5 transition-colors","aria-label":"Clear range",children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",className:"text-fg-onbrand",children:e.jsx("path",{d:"M12 4L4 12M4 4L12 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})})]}),C&&e.jsx("div",{className:x("mt-1.5 text-sm",c&&"text-state-danger",!c&&"text-fg-muted"),children:C})]})});try{u.displayName="DateRange",u.__docgenInfo={description:"",displayName:"DateRange",props:{value:{defaultValue:null,description:"Selected date range",name:"value",required:!1,type:{name:"DateRangeValue"}},onChange:{defaultValue:null,description:"Callback when date range changes",name:"onChange",required:!1,type:{name:"((range: DateRangeValue) => void)"}},placeholderStart:{defaultValue:{value:"mm / dd / yyyy"},description:"Placeholder text for start date",name:"placeholderStart",required:!1,type:{name:"string"}},placeholderEnd:{defaultValue:{value:"mm / dd / yyyy"},description:"Placeholder text for end date",name:"placeholderEnd",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Input label",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text or error message",name:"helperText",required:!1,type:{name:"string"}},validationState:{defaultValue:{value:"none"},description:"Validation state",name:"validationState",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"none"'},{value:'"error"'}]}},required:{defaultValue:{value:"false"},description:"Whether the field is required",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Whether the field is disabled",name:"disabled",required:!1,type:{name:"boolean"}},minDate:{defaultValue:null,description:"Minimum selectable date",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Maximum selectable date",name:"maxDate",required:!1,type:{name:"Date"}},disabledDates:{defaultValue:null,description:"Disabled dates",name:"disabledDates",required:!1,type:{name:"Date[] | ((date: Date) => boolean)"}},showPresets:{defaultValue:{value:"false"},description:"Show preset ranges",name:"showPresets",required:!1,type:{name:"boolean"}}}}}catch{}const Ee={title:"Components/DateRange",component:u,parameters:{layout:"centered"},tags:["autodocs"]},b={render:()=>{const[n,d]=o.useState();return e.jsx("div",{className:"w-full",children:e.jsx(u,{value:n,onChange:d})})}},D={render:()=>{const[n,d]=o.useState();return e.jsx("div",{className:"w-full",children:e.jsx(u,{value:n,onChange:d,label:"Date Range"})})}},v={render:()=>{const[n,d]=o.useState({from:new Date(2024,3,2),to:new Date(2024,3,21)});return e.jsx("div",{className:"w-full",children:e.jsx(u,{value:n,onChange:d,label:"Project Timeline"})})}},y={render:()=>{const[n,d]=o.useState();return e.jsx("div",{className:"w-full",children:e.jsx(u,{value:n,onChange:d,label:"Report Period",showPresets:!0})})}},w={render:()=>{const[n,d]=o.useState();return e.jsx("div",{className:"w-full",children:e.jsx(u,{value:n,onChange:d,label:"Booking Dates",required:!0})})}},V={render:()=>{const[n,d]=o.useState();return e.jsx("div",{className:"w-full",children:e.jsx(u,{value:n,onChange:d,label:"Contract Period",helperText:"Both start and end dates are required",validationState:"error"})})}},j={render:()=>{const[n]=o.useState({from:new Date(2024,3,2),to:new Date(2024,3,21)});return e.jsx("div",{className:"w-full",children:e.jsx(u,{value:n,label:"Locked Period",disabled:!0})})}},N={render:()=>{const[n,d]=o.useState(),t=new Date,s=t,R=new Date(t.getFullYear(),t.getMonth()+3,0);return e.jsx("div",{className:"w-full",children:e.jsx(u,{value:n,onChange:d,label:"Available Period",helperText:"Only next 3 months available",minDate:s,maxDate:R})})}},S={render:()=>{const[n,d]=o.useState(),[t,s]=o.useState();return e.jsxs("div",{className:"w-full space-y-4",children:[e.jsx(u,{value:n,onChange:d,label:"Project Duration",required:!0,showPresets:!0}),e.jsx(u,{value:t,onChange:s,label:"Delivery Window",required:!0})]})}};var T,_,O;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<DateRangeValue | undefined>();
    return <div className="w-full">
                <DateRange value={value} onChange={setValue} />
            </div>;
  }
}`,...(O=(_=b.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var Y,$,A;D.parameters={...D.parameters,docs:{...(Y=D.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<DateRangeValue | undefined>();
    return <div className="w-full">
                <DateRange value={value} onChange={setValue} label="Date Range" />
            </div>;
  }
}`,...(A=($=D.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var z,H,G;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<DateRangeValue>({
      from: new Date(2024, 3, 2),
      to: new Date(2024, 3, 21)
    });
    return <div className="w-full">
                <DateRange value={value} onChange={setValue} label="Project Timeline" />
            </div>;
  }
}`,...(G=(H=v.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<DateRangeValue | undefined>();
    return <div className="w-full">
                <DateRange value={value} onChange={setValue} label="Report Period" showPresets />
            </div>;
  }
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Z;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<DateRangeValue | undefined>();
    return <div className="w-full">
                <DateRange value={value} onChange={setValue} label="Booking Dates" required />
            </div>;
  }
}`,...(Z=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ae;V.parameters={...V.parameters,docs:{...(ee=V.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<DateRangeValue | undefined>();
    return <div className="w-full">
                <DateRange value={value} onChange={setValue} label="Contract Period" helperText="Both start and end dates are required" validationState="error" />
            </div>;
  }
}`,...(ae=(te=V.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,ne,se;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [value] = useState<DateRangeValue>({
      from: new Date(2024, 3, 2),
      to: new Date(2024, 3, 21)
    });
    return <div className="w-full">
                <DateRange value={value} label="Locked Period" disabled />
            </div>;
  }
}`,...(se=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var le,oe,de;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<DateRangeValue | undefined>();
    const today = new Date();
    const minDate = today;
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, 0);
    return <div className="w-full">
                <DateRange value={value} onChange={setValue} label="Available Period" helperText="Only next 3 months available" minDate={minDate} maxDate={maxDate} />
            </div>;
  }
}`,...(de=(oe=N.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ue,ie,ce;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [projectRange, setProjectRange] = useState<DateRangeValue | undefined>();
    const [deliveryRange, setDeliveryRange] = useState<DateRangeValue | undefined>();
    return <div className="w-full space-y-4">
                <DateRange value={projectRange} onChange={setProjectRange} label="Project Duration" required showPresets />
                <DateRange value={deliveryRange} onChange={setDeliveryRange} label="Delivery Window" required />
            </div>;
  }
}`,...(ce=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const Le=["Default","WithLabel","WithValue","WithPresets","Required","WithError","Disabled","WithMinMaxDate","InForm"];export{b as Default,j as Disabled,S as InForm,w as Required,V as WithError,D as WithLabel,N as WithMinMaxDate,y as WithPresets,v as WithValue,Le as __namedExportsOrder,Ee as default};
