import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-Dz3UJJSw.js";import{c}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const n=o.forwardRef(function({className:t,label:a,helperText:i,validationState:d="none",disabled:u,checked:v,id:N,...R},w){const m=d==="invalid",p=d==="valid",s=N||`radio-${Math.random().toString(36).substr(2,9)}`;return e.jsxs("div",{className:c("flex items-start gap-2",t),children:[e.jsxs("div",{className:"relative flex items-center justify-center mt-0.5",children:[e.jsx("input",{ref:w,type:"radio",id:s,checked:v,disabled:u,className:c("peer appearance-none w-4 h-4 border-2 rounded-full cursor-pointer transition-colors","border-border-default bg-bg-canvas","checked:border-bg-brand checked:bg-bg-brand","focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-1",u&&"opacity-50 cursor-not-allowed",m&&"border-state-danger checked:border-state-danger checked:bg-state-danger",p&&"border-state-success checked:border-state-success checked:bg-state-success"),...R}),e.jsx("div",{className:c("absolute w-2 h-2 rounded-full bg-bg-canvas pointer-events-none transition-opacity",v?"opacity-100":"opacity-0")})]}),(a||i)&&e.jsxs("div",{className:"flex-1",children:[a&&e.jsx("label",{htmlFor:s,className:c("block text-sm font-medium text-fg-default cursor-pointer",u&&"opacity-50 cursor-not-allowed"),children:a}),i&&e.jsx("p",{className:c("text-sm mt-0.5",m&&"text-state-danger",p&&"text-state-success",!m&&!p&&"text-fg-muted"),children:i})]})]})}),l=o.forwardRef(function({className:t,name:a,value:i,onChange:d,options:u,validationState:v="none",disabled:N=!1,orientation:R="vertical",...w},m){const p=s=>{d==null||d(s)};return e.jsx("div",{ref:m,role:"radiogroup",className:c("flex",R==="vertical"?"flex-col gap-3":"flex-row flex-wrap gap-4",t),...w,children:u.map(s=>e.jsx(n,{name:a,value:s.value,checked:i===s.value,onChange:()=>p(s.value),label:s.label,helperText:s.helperText,disabled:N||s.disabled,validationState:v},s.value))})});try{n.displayName="Radio",n.__docgenInfo={description:"",displayName:"Radio",props:{label:{defaultValue:null,description:"Label text",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text",name:"helperText",required:!1,type:{name:"string"}},validationState:{defaultValue:{value:"none"},description:"Validation state",name:"validationState",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"invalid"'},{value:'"valid"'}]}}}}}catch{}try{l.displayName="RadioGroup",l.__docgenInfo={description:"",displayName:"RadioGroup",props:{name:{defaultValue:null,description:"Radio group name",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"Selected value",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback when selection changes",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},options:{defaultValue:null,description:"Radio options",name:"options",required:!0,type:{name:"{ value: string; label: string; helperText?: string | undefined; disabled?: boolean | undefined; }[]"}},validationState:{defaultValue:{value:"none"},description:"Validation state",name:"validationState",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"invalid"'},{value:'"valid"'}]}},disabled:{defaultValue:{value:"false"},description:"Disabled state for entire group",name:"disabled",required:!1,type:{name:"boolean"}},orientation:{defaultValue:{value:"vertical"},description:"Orientation",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const te={title:"Components/Radio",component:n,parameters:{layout:"padded"},tags:["autodocs"]},y=[{value:"1",label:"All radio buttons should have a similar sentence or word structure"},{value:"2",label:"All radio buttons should have a similar sentence or word structure"},{value:"3",label:"All radio buttons should have a similar sentence or word structure"}],A=[{value:"option1",label:"Option1"},{value:"option2",label:"Option2"}],h={render:r=>{const[t,a]=o.useState(!1);return e.jsx(n,{...r,checked:t,onChange:i=>a(i.target.checked)})},args:{label:"All radio buttons should have a similar sentence or word structure"}},b={render:r=>{const[t,a]=o.useState("1");return e.jsx(l,{name:"radio-group-1",value:t,onChange:a,options:y})}},g={render:r=>{const[t,a]=o.useState("option1");return e.jsx(l,{name:"radio-group-2",value:t,onChange:a,options:A,orientation:"horizontal"})}},x={render:r=>{const[t,a]=o.useState("");return e.jsxs("div",{children:[e.jsx(l,{name:"radio-group-error",value:t,onChange:a,options:y,validationState:"invalid"}),e.jsx("p",{className:"text-sm text-state-danger mt-2",children:"Please select an option"})]})}},f={render:r=>{const[t,a]=o.useState("2");return e.jsx(l,{name:"radio-group-disabled",value:t,onChange:a,options:y,disabled:!0})}},j={render:r=>{const[t,a]=o.useState("1");return e.jsx(l,{name:"radio-group-disabled-option",value:t,onChange:a,options:[{value:"1",label:"All radio buttons should have a similar sentence or word structure"},{value:"2",label:"All radio buttons should have a similar sentence or word structure",disabled:!0},{value:"3",label:"All radio buttons should have a similar sentence or word structure"}]})}},S={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-3",children:"Unselected"}),e.jsx(n,{label:"All radio buttons should have a similar sentence or word structure"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-3",children:"Selected"}),e.jsx(n,{label:"All radio buttons should have a similar sentence or word structure",checked:!0,readOnly:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-3",children:"Hover (see in Storybook)"}),e.jsx(n,{label:"All radio buttons should have a similar sentence or word structure"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-3",children:"Disabled Unselected"}),e.jsx(n,{label:"All radio buttons should have a similar sentence or word structure",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-3",children:"Disabled Selected"}),e.jsx(n,{label:"All radio buttons should have a similar sentence or word structure",checked:!0,disabled:!0,readOnly:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-3",children:"Error State"}),e.jsx(n,{label:"All radio buttons should have a similar sentence or word structure",validationState:"invalid"})]})]})},V={render:()=>{const[r,t]=o.useState("1"),[a,i]=o.useState("option1"),[d,u]=o.useState("");return e.jsxs("div",{className:"space-y-8 max-w-2xl",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-3",children:"Vertical Layout"}),e.jsx(l,{name:"radio-group-vertical",value:r,onChange:t,options:y})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-3",children:"Horizontal Layout"}),e.jsx(l,{name:"radio-group-horizontal",value:a,onChange:i,options:A,orientation:"horizontal"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-3",children:"Required Field (no selection)"}),e.jsx(l,{name:"radio-group-required",value:d,onChange:u,options:A,validationState:"invalid"}),!d&&e.jsx("p",{className:"text-sm text-state-danger mt-2",children:"Please select an option"})]})]})}};var k,C,O;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <Radio {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />;
  },
  args: {
    label: "All radio buttons should have a similar sentence or word structure"
  }
}`,...(O=(C=h.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var _,G,q;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("1");
    return <RadioGroup name="radio-group-1" value={value} onChange={setValue} options={radioOptions} />;
  }
}`,...(q=(G=b.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var z,D,E;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("option1");
    return <RadioGroup name="radio-group-2" value={value} onChange={setValue} options={shortOptions} orientation="horizontal" />;
  }
}`,...(E=(D=g.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var H,L,P;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    return <div>
                <RadioGroup name="radio-group-error" value={value} onChange={setValue} options={radioOptions} validationState="invalid" />
                <p className="text-sm text-state-danger mt-2">Please select an option</p>
            </div>;
  }
}`,...(P=(L=x.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var U,F,I;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("2");
    return <RadioGroup name="radio-group-disabled" value={value} onChange={setValue} options={radioOptions} disabled />;
  }
}`,...(I=(F=f.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var T,W,M;j.parameters={...j.parameters,docs:{...(T=j.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("1");
    return <RadioGroup name="radio-group-disabled-option" value={value} onChange={setValue} options={[{
      value: "1",
      label: "All radio buttons should have a similar sentence or word structure"
    }, {
      value: "2",
      label: "All radio buttons should have a similar sentence or word structure",
      disabled: true
    }, {
      value: "3",
      label: "All radio buttons should have a similar sentence or word structure"
    }]} />;
  }
}`,...(M=(W=j.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var $,B,J;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    return <div className="space-y-6">
                <div>
                    <p className="text-sm font-medium text-fg-default mb-3">Unselected</p>
                    <Radio label="All radio buttons should have a similar sentence or word structure" />
                </div>

                <div>
                    <p className="text-sm font-medium text-fg-default mb-3">Selected</p>
                    <Radio label="All radio buttons should have a similar sentence or word structure" checked readOnly />
                </div>

                <div>
                    <p className="text-sm font-medium text-fg-default mb-3">Hover (see in Storybook)</p>
                    <Radio label="All radio buttons should have a similar sentence or word structure" />
                </div>

                <div>
                    <p className="text-sm font-medium text-fg-default mb-3">Disabled Unselected</p>
                    <Radio label="All radio buttons should have a similar sentence or word structure" disabled />
                </div>

                <div>
                    <p className="text-sm font-medium text-fg-default mb-3">Disabled Selected</p>
                    <Radio label="All radio buttons should have a similar sentence or word structure" checked disabled readOnly />
                </div>

                <div>
                    <p className="text-sm font-medium text-fg-default mb-3">Error State</p>
                    <Radio label="All radio buttons should have a similar sentence or word structure" validationState="invalid" />
                </div>
            </div>;
  }
}`,...(J=(B=S.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var K,Q,X;V.parameters={...V.parameters,docs:{...(K=V.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState("1");
    const [value2, setValue2] = useState("option1");
    const [value3, setValue3] = useState("");
    return <div className="space-y-8 max-w-2xl">
                <div>
                    <p className="text-sm font-medium text-fg-default mb-3">Vertical Layout</p>
                    <RadioGroup name="radio-group-vertical" value={value1} onChange={setValue1} options={radioOptions} />
                </div>

                <div>
                    <p className="text-sm font-medium text-fg-default mb-3">Horizontal Layout</p>
                    <RadioGroup name="radio-group-horizontal" value={value2} onChange={setValue2} options={shortOptions} orientation="horizontal" />
                </div>

                <div>
                    <p className="text-sm font-medium text-fg-default mb-3">
                        Required Field (no selection)
                    </p>
                    <RadioGroup name="radio-group-required" value={value3} onChange={setValue3} options={shortOptions} validationState="invalid" />
                    {!value3 && <p className="text-sm text-state-danger mt-2">Please select an option</p>}
                </div>
            </div>;
  }
}`,...(X=(Q=V.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const re=["SingleRadio","RadioGroupVertical","RadioGroupHorizontal","WithError","Disabled","DisabledOption","States","AllVariants"];export{V as AllVariants,f as Disabled,j as DisabledOption,g as RadioGroupHorizontal,b as RadioGroupVertical,h as SingleRadio,S as States,x as WithError,re as __namedExportsOrder,te as default};
