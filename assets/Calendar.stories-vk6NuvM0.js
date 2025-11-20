import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{C as n}from"./Calendar-Bxpu2uPN.js";import{r}from"./index-Dz3UJJSw.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const H={title:"Components/Calendar",component:n,parameters:{layout:"centered",design:{type:"figma",url:"https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?m=auto"}},tags:["autodocs","complete"]},c={args:{}},d={render:()=>{const[e,s]=r.useState();return t.jsxs("div",{children:[t.jsx(n,{mode:"single",selected:e,onSelect:s}),e&&t.jsxs("p",{className:"mt-4 text-sm text-fg-secondary",children:["Selected: ",e.toLocaleDateString()]})]})}},l={render:()=>{const[e,s]=r.useState();return t.jsxs("div",{children:[t.jsx(n,{mode:"range",selected:e,onSelect:s}),e&&t.jsxs("p",{className:"mt-4 text-sm text-fg-secondary",children:["Range: ",e.from.toLocaleDateString(),e.to&&` - ${e.to.toLocaleDateString()}`]})]})}},m={render:()=>{const[e,s]=r.useState([]);return t.jsxs("div",{children:[t.jsx(n,{mode:"multiple",selected:e,onSelect:s}),e.length>0&&t.jsxs("p",{className:"mt-4 text-sm text-fg-secondary",children:["Selected: ",e.map(a=>a.toLocaleDateString()).join(", ")]})]})}},i={render:()=>{const[e,s]=r.useState();return t.jsx(n,{mode:"range",selected:e,onSelect:s,numberOfMonths:2})}},u={render:()=>{const[e,s]=r.useState(),a=o=>o.getDay()===0||o.getDay()===6;return t.jsx(n,{mode:"single",selected:e,onSelect:s,disabled:a})}},S={render:()=>{const[e,s]=r.useState(),a=new Date,o=new Date(a.getFullYear(),a.getMonth(),1),T=new Date(a.getFullYear(),a.getMonth()+2,0);return t.jsx(n,{mode:"single",selected:e,onSelect:s,minDate:o,maxDate:T})}};var g,p,D;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {}
}`,...(D=(p=c.parameters)==null?void 0:p.docs)==null?void 0:D.source}}};var x,f,h;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>();
    return <div>
                <Calendar mode="single" selected={selected} onSelect={setSelected} />
                {selected && <p className="mt-4 text-sm text-fg-secondary">
                        Selected: {selected.toLocaleDateString()}
                    </p>}
            </div>;
  }
}`,...(h=(f=d.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,j,M;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<{
      from: Date;
      to?: Date;
    } | undefined>();
    return <div>
                <Calendar mode="range" selected={selected} onSelect={setSelected as any} />
                {selected && <p className="mt-4 text-sm text-fg-secondary">
                        Range: {selected.from.toLocaleDateString()}
                        {selected.to && \` - \${selected.to.toLocaleDateString()}\`}
                    </p>}
            </div>;
  }
}`,...(M=(j=l.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var b,w,C;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<Date[]>([]);
    return <div>
                <Calendar mode="multiple" selected={selected} onSelect={setSelected as any} />
                {selected.length > 0 && <p className="mt-4 text-sm text-fg-secondary">
                        Selected: {selected.map(d => d.toLocaleDateString()).join(", ")}
                    </p>}
            </div>;
  }
}`,...(C=(w=m.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var L,v,W;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<{
      from: Date;
      to?: Date;
    } | undefined>();
    return <Calendar mode="range" selected={selected} onSelect={setSelected as any} numberOfMonths={2} />;
  }
}`,...(W=(v=i.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var F,N,R;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>();
    const disabledDates = (date: Date) => {
      // Disable weekends
      return date.getDay() === 0 || date.getDay() === 6;
    };
    return <Calendar mode="single" selected={selected} onSelect={setSelected} disabled={disabledDates} />;
  }
}`,...(R=(N=u.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var E,Y,O;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>();
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0);
    return <Calendar mode="single" selected={selected} onSelect={setSelected} minDate={minDate} maxDate={maxDate} />;
  }
}`,...(O=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};const K=["Default","SingleDate","DateRange","MultipleDates","TwoMonths","WithDisabledDates","WithMinMaxDate"];export{l as DateRange,c as Default,m as MultipleDates,d as SingleDate,i as TwoMonths,u as WithDisabledDates,S as WithMinMaxDate,K as __namedExportsOrder,H as default};
