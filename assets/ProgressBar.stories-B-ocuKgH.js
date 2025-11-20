import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-Dz3UJJSw.js";import{c as b}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const a=l.forwardRef(function({className:n,value:t=0,max:s=100,size:ae="md",variant:se="default",showLabel:re=!1,label:te,indeterminate:i=!1,striped:j=!1,animated:ne=!1,...le},ie){const w=i?100:Math.min(100,Math.max(0,t/s*100)),de=te||`${Math.round(w)}%`,me={sm:"h-1",md:"h-2",lg:"h-3"},ue={default:"bg-bg-brand",success:"bg-state-success",warning:"bg-state-warn",danger:"bg-state-danger"};return e.jsxs("div",{ref:ie,className:b("w-full",n),...le,children:[re&&e.jsx("div",{className:"flex justify-between items-center mb-1.5",children:e.jsx("span",{className:"text-sm font-medium text-fg-default",children:de})}),e.jsx("div",{role:"progressbar","aria-valuemin":0,"aria-valuemax":s,"aria-valuenow":i?void 0:t,className:b("w-full bg-bg-tertiary rounded-full overflow-hidden",me[ae]),children:e.jsx("div",{className:b("h-full rounded-full transition-all duration-300 ease-out",ue[se],i&&"animate-indeterminate origin-left",j&&"bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:20px_100%]",ne&&j&&"animate-stripe"),style:{width:i?"30%":`${w}%`}})})]})});try{a.displayName="ProgressBar",a.__docgenInfo={description:"",displayName:"ProgressBar",props:{value:{defaultValue:{value:"0"},description:"Progress value (0-100)",name:"value",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Maximum value (defaults to 100)",name:"max",required:!1,type:{name:"number"}},size:{defaultValue:{value:"md"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"default"},description:"Color variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'}]}},showLabel:{defaultValue:{value:"false"},description:"Show label with percentage",name:"showLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Custom label text",name:"label",required:!1,type:{name:"string"}},indeterminate:{defaultValue:{value:"false"},description:"Indeterminate/loading state",name:"indeterminate",required:!1,type:{name:"boolean"}},striped:{defaultValue:{value:"false"},description:"Striped pattern",name:"striped",required:!1,type:{name:"boolean"}},animated:{defaultValue:{value:"false"},description:"Animate stripes",name:"animated",required:!1,type:{name:"boolean"}}}}}catch{}const fe={title:"Components/ProgressBar",component:a,parameters:{layout:"padded"},tags:["autodocs"]},d={args:{value:33}},m={args:{value:65,showLabel:!0}},u={args:{value:75,showLabel:!0,label:"Loading... 75%"}},o={args:{indeterminate:!0,showLabel:!0,label:"Loading..."}},c={args:{value:60,striped:!0}},v={args:{value:60,striped:!0,animated:!0}},p={render:()=>e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"Small"}),e.jsx(a,{value:33,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"Medium (Default)"}),e.jsx(a,{value:50,size:"md"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"Large"}),e.jsx(a,{value:75,size:"lg"})]})]})},f={render:()=>e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"Default"}),e.jsx(a,{value:40,variant:"default",showLabel:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"Success"}),e.jsx(a,{value:100,variant:"success",showLabel:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"Warning"}),e.jsx(a,{value:60,variant:"warning",showLabel:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"Danger"}),e.jsx(a,{value:25,variant:"danger",showLabel:!0})]})]})},x={render:()=>{const[r,n]=l.useState(0);return l.useEffect(()=>{const t=setInterval(()=>{n(s=>s>=100?0:s+1)},50);return()=>clearInterval(t)},[]),e.jsx("div",{className:"space-y-4 max-w-md",children:e.jsx(a,{value:r,showLabel:!0})})}},g={render:()=>e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"0% - Not started"}),e.jsx(a,{value:0,showLabel:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"25% - In progress"}),e.jsx(a,{value:25,showLabel:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"50% - Half way"}),e.jsx(a,{value:50,showLabel:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"75% - Almost there"}),e.jsx(a,{value:75,showLabel:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-fg-default mb-2",children:"100% - Complete"}),e.jsx(a,{value:100,showLabel:!0,variant:"success"})]})]})},h={render:()=>{const[r,n]=l.useState(0);return l.useEffect(()=>{const t=setInterval(()=>{n(s=>s>=100?0:s+2)},100);return()=>clearInterval(t)},[]),e.jsxs("div",{className:"space-y-8 max-w-md",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-h3 font-semibold mb-4",children:"Default"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{value:r,showLabel:!0}),e.jsx(a,{value:r,size:"lg",showLabel:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-h3 font-semibold mb-4",children:"Loading State"}),e.jsx(a,{indeterminate:!0,showLabel:!0,label:"Loading...",striped:!0,animated:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-h3 font-semibold mb-4",children:"Variants"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{value:75,variant:"default"}),e.jsx(a,{value:75,variant:"success"}),e.jsx(a,{value:75,variant:"warning"}),e.jsx(a,{value:75,variant:"danger"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-h3 font-semibold mb-4",children:"Striped & Animated"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{value:60,striped:!0}),e.jsx(a,{value:60,striped:!0,animated:!0})]})]})]})}};var N,L,y;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 33
  }
}`,...(y=(L=d.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var P,S,B;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: 65,
    showLabel: true
  }
}`,...(B=(S=m.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var V,z,I;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    value: 75,
    showLabel: true,
    label: "Loading... 75%"
  }
}`,...(I=(z=u.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var D,A,_;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    showLabel: true,
    label: "Loading..."
  }
}`,...(_=(A=o.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var q,C,E;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    value: 60,
    striped: true
  }
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var M,W,H;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    value: 60,
    striped: true,
    animated: true
  }
}`,...(H=(W=v.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var R,$,O;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    return <div className="space-y-6 max-w-md">
                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">Small</p>
                    <ProgressBar value={33} size="sm" />
                </div>
                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">Medium (Default)</p>
                    <ProgressBar value={50} size="md" />
                </div>
                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">Large</p>
                    <ProgressBar value={75} size="lg" />
                </div>
            </div>;
  }
}`,...(O=($=p.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var k,F,G;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    return <div className="space-y-6 max-w-md">
                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">Default</p>
                    <ProgressBar value={40} variant="default" showLabel />
                </div>
                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">Success</p>
                    <ProgressBar value={100} variant="success" showLabel />
                </div>
                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">Warning</p>
                    <ProgressBar value={60} variant="warning" showLabel />
                </div>
                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">Danger</p>
                    <ProgressBar value={25} variant="danger" showLabel />
                </div>
            </div>;
  }
}`,...(G=(F=f.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 0;
          return prev + 1;
        });
      }, 50);
      return () => clearInterval(timer);
    }, []);
    return <div className="space-y-4 max-w-md">
                <ProgressBar value={progress} showLabel />
            </div>;
  }
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var T,U,X;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    return <div className="space-y-6 max-w-md">
                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">0% - Not started</p>
                    <ProgressBar value={0} showLabel />
                </div>
                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">25% - In progress</p>
                    <ProgressBar value={25} showLabel />
                </div>
                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">50% - Half way</p>
                    <ProgressBar value={50} showLabel />
                </div>
                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">75% - Almost there</p>
                    <ProgressBar value={75} showLabel />
                </div>
                <div>
                    <p className="text-sm font-medium text-fg-default mb-2">100% - Complete</p>
                    <ProgressBar value={100} showLabel variant="success" />
                </div>
            </div>;
  }
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 0;
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(timer);
    }, []);
    return <div className="space-y-8 max-w-md">
                <div>
                    <h3 className="text-h3 font-semibold mb-4">Default</h3>
                    <div className="space-y-4">
                        <ProgressBar value={progress} showLabel />
                        <ProgressBar value={progress} size="lg" showLabel />
                    </div>
                </div>

                <div>
                    <h3 className="text-h3 font-semibold mb-4">Loading State</h3>
                    <ProgressBar indeterminate showLabel label="Loading..." striped animated />
                </div>

                <div>
                    <h3 className="text-h3 font-semibold mb-4">Variants</h3>
                    <div className="space-y-3">
                        <ProgressBar value={75} variant="default" />
                        <ProgressBar value={75} variant="success" />
                        <ProgressBar value={75} variant="warning" />
                        <ProgressBar value={75} variant="danger" />
                    </div>
                </div>

                <div>
                    <h3 className="text-h3 font-semibold mb-4">Striped & Animated</h3>
                    <div className="space-y-3">
                        <ProgressBar value={60} striped />
                        <ProgressBar value={60} striped animated />
                    </div>
                </div>
            </div>;
  }
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const xe=["Default","WithLabel","CustomLabel","Indeterminate","Striped","AnimatedStripes","Sizes","Variants","Animated","DifferentStates","AllVariants"];export{h as AllVariants,x as Animated,v as AnimatedStripes,u as CustomLabel,d as Default,g as DifferentStates,o as Indeterminate,p as Sizes,c as Striped,f as Variants,m as WithLabel,xe as __namedExportsOrder,fe as default};
