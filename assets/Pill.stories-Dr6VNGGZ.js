import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as l}from"./Pill-DOcXdQ9q.js";import{r as h}from"./index-Dz3UJJSw.js";import{c as ae}from"./clsx-B-dksMZM.js";import"./index-Dp3B9jqt.js";import"./_commonjsHelpers-CqkleIqs.js";const n=h.forwardRef(function({className:X,gap:Z="2",wrap:ee=!0,children:le,maxVisible:r,...ne},re){const v=h.Children.toArray(le),oe=r?v.slice(0,r):v,P=r?v.length-r:0;return e.jsxs("div",{ref:re,className:ae("inline-flex items-center",ee&&"flex-wrap",`gap-${Z}`,X),...ne,children:[oe,P>0&&e.jsxs("span",{className:"text-sm text-fg-secondary font-semibold",children:["+",P]})]})});try{n.displayName="Pills",n.__docgenInfo={description:"",displayName:"Pills",props:{gap:{defaultValue:{value:"2"},description:"Gap between pills (spacing token key)",name:"gap",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"0"'},{value:'"5"'},{value:'"6"'},{value:'"8"'},{value:'"10"'},{value:'"12"'},{value:'"0.5"'},{value:'"1.5"'},{value:'"2.5"'}]}},wrap:{defaultValue:{value:"true"},description:"Whether pills should wrap to next line",name:"wrap",required:!1,type:{name:"boolean"}},maxVisible:{defaultValue:null,description:"Maximum number of pills to display before showing overflow",name:"maxVisible",required:!1,type:{name:"number"}}}}}catch{}const me={title:"Components/Pill",component:l,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md"]},variant:{control:"select",options:["solid","outline"]},tone:{control:"select",options:["neutral","blue","green","orange","red","yellow","cyan","magenta","purple"]},disabled:{control:"boolean"},removable:{control:"boolean"}}},o={args:{children:"Value",tone:"blue",variant:"solid",size:"md"}},a={args:{children:"Value",tone:"blue",variant:"solid",size:"md",icon:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",children:e.jsx("circle",{cx:"6",cy:"6",r:"2"})})}},i={args:{children:"Value",tone:"blue",variant:"solid",size:"md",removable:!0,onRemove:()=>console.log("Remove clicked")}},t={args:{children:"Value",tone:"neutral",variant:"solid",size:"md",disabled:!0}},s={render:()=>e.jsxs(n,{gap:"2",children:[e.jsx(l,{tone:"neutral",children:"Neutral"}),e.jsx(l,{tone:"blue",children:"Blue"}),e.jsx(l,{tone:"green",children:"Green"}),e.jsx(l,{tone:"orange",children:"Orange"}),e.jsx(l,{tone:"red",children:"Red"}),e.jsx(l,{tone:"yellow",children:"Yellow"}),e.jsx(l,{tone:"cyan",children:"Cyan"}),e.jsx(l,{tone:"magenta",children:"Magenta"}),e.jsx(l,{tone:"purple",children:"Purple"})]})},c={render:()=>e.jsxs(n,{gap:"2",children:[e.jsx(l,{tone:"neutral",variant:"outline",children:"Neutral"}),e.jsx(l,{tone:"blue",variant:"outline",children:"Blue"}),e.jsx(l,{tone:"green",variant:"outline",children:"Green"}),e.jsx(l,{tone:"orange",variant:"outline",children:"Orange"}),e.jsx(l,{tone:"red",variant:"outline",children:"Red"}),e.jsx(l,{tone:"yellow",variant:"outline",children:"Yellow"}),e.jsx(l,{tone:"cyan",variant:"outline",children:"Cyan"}),e.jsx(l,{tone:"magenta",variant:"outline",children:"Magenta"}),e.jsx(l,{tone:"purple",variant:"outline",children:"Purple"})]})},d={render:()=>e.jsxs(n,{gap:"2",children:[e.jsx(l,{tone:"blue",removable:!0,onRemove:()=>console.log("Remove blue"),children:"Blue"}),e.jsx(l,{tone:"green",removable:!0,onRemove:()=>console.log("Remove green"),children:"Green"}),e.jsx(l,{tone:"orange",removable:!0,onRemove:()=>console.log("Remove orange"),children:"Orange"}),e.jsx(l,{tone:"red",removable:!0,onRemove:()=>console.log("Remove red"),children:"Red"})]})},u={render:()=>e.jsxs(n,{gap:"2",children:[e.jsx(l,{tone:"blue",variant:"solid",children:"Solid"}),e.jsx(l,{tone:"blue",variant:"outline",children:"Outline"}),e.jsx(l,{tone:"green",variant:"solid",removable:!0,children:"Removable"}),e.jsx(l,{tone:"neutral",variant:"outline",disabled:!0,children:"Disabled"})]})},m={render:()=>e.jsxs(n,{gap:"2",children:[e.jsx(l,{tone:"blue",icon:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",children:e.jsx("circle",{cx:"6",cy:"6",r:"2"})}),children:"Pilot"}),e.jsx(l,{tone:"magenta",icon:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",children:e.jsx("circle",{cx:"6",cy:"6",r:"2"})}),children:"Beta"})]})},p={render:()=>e.jsxs(n,{gap:"2",children:[e.jsx(l,{tone:"blue",size:"sm",children:"Small"}),e.jsx(l,{tone:"blue",size:"md",children:"Medium"})]})},g={render:()=>e.jsxs(n,{gap:"2",maxVisible:5,children:[e.jsx(l,{tone:"blue",children:"Value 1"}),e.jsx(l,{tone:"green",children:"Value 2"}),e.jsx(l,{tone:"orange",children:"Value 3"}),e.jsx(l,{tone:"red",children:"Value 4"}),e.jsx(l,{tone:"yellow",children:"Value 5"}),e.jsx(l,{tone:"cyan",children:"Value 6"}),e.jsx(l,{tone:"magenta",children:"Value 7"}),e.jsx(l,{tone:"purple",children:"Value 8"})]})};var x,b,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Value",
    tone: "blue",
    variant: "solid",
    size: "md"
  }
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var y,R,w;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Value",
    tone: "blue",
    variant: "solid",
    size: "md",
    icon: <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <circle cx="6" cy="6" r="2" />
            </svg>
  }
}`,...(w=(R=a.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var f,V,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Value",
    tone: "blue",
    variant: "solid",
    size: "md",
    removable: true,
    onRemove: () => console.log("Remove clicked")
  }
}`,...(C=(V=i.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var S,z,B;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: "Value",
    tone: "neutral",
    variant: "solid",
    size: "md",
    disabled: true
  }
}`,...(B=(z=t.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var O,_,M;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Pills gap="2">
            <Pill tone="neutral">Neutral</Pill>
            <Pill tone="blue">Blue</Pill>
            <Pill tone="green">Green</Pill>
            <Pill tone="orange">Orange</Pill>
            <Pill tone="red">Red</Pill>
            <Pill tone="yellow">Yellow</Pill>
            <Pill tone="cyan">Cyan</Pill>
            <Pill tone="magenta">Magenta</Pill>
            <Pill tone="purple">Purple</Pill>
        </Pills>
}`,...(M=(_=s.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var N,G,A;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Pills gap="2">
            <Pill tone="neutral" variant="outline">Neutral</Pill>
            <Pill tone="blue" variant="outline">Blue</Pill>
            <Pill tone="green" variant="outline">Green</Pill>
            <Pill tone="orange" variant="outline">Orange</Pill>
            <Pill tone="red" variant="outline">Red</Pill>
            <Pill tone="yellow" variant="outline">Yellow</Pill>
            <Pill tone="cyan" variant="outline">Cyan</Pill>
            <Pill tone="magenta" variant="outline">Magenta</Pill>
            <Pill tone="purple" variant="outline">Purple</Pill>
        </Pills>
}`,...(A=(G=c.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var D,E,I;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Pills gap="2">
            <Pill tone="blue" removable onRemove={() => console.log("Remove blue")}>
                Blue
            </Pill>
            <Pill tone="green" removable onRemove={() => console.log("Remove green")}>
                Green
            </Pill>
            <Pill tone="orange" removable onRemove={() => console.log("Remove orange")}>
                Orange
            </Pill>
            <Pill tone="red" removable onRemove={() => console.log("Remove red")}>
                Red
            </Pill>
        </Pills>
}`,...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var W,k,Y;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Pills gap="2">
            <Pill tone="blue" variant="solid">
                Solid
            </Pill>
            <Pill tone="blue" variant="outline">
                Outline
            </Pill>
            <Pill tone="green" variant="solid" removable>
                Removable
            </Pill>
            <Pill tone="neutral" variant="outline" disabled>
                Disabled
            </Pill>
        </Pills>
}`,...(Y=(k=u.parameters)==null?void 0:k.docs)==null?void 0:Y.source}}};var q,T,$;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Pills gap="2">
            <Pill tone="blue" icon={<svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        <circle cx="6" cy="6" r="2" />
                    </svg>}>
                Pilot
            </Pill>
            <Pill tone="magenta" icon={<svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        <circle cx="6" cy="6" r="2" />
                    </svg>}>
                Beta
            </Pill>
        </Pills>
}`,...($=(T=m.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var F,H,J;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Pills gap="2">
            <Pill tone="blue" size="sm">
                Small
            </Pill>
            <Pill tone="blue" size="md">
                Medium
            </Pill>
        </Pills>
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,L,Q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Pills gap="2" maxVisible={5}>
            <Pill tone="blue">Value 1</Pill>
            <Pill tone="green">Value 2</Pill>
            <Pill tone="orange">Value 3</Pill>
            <Pill tone="red">Value 4</Pill>
            <Pill tone="yellow">Value 5</Pill>
            <Pill tone="cyan">Value 6</Pill>
            <Pill tone="magenta">Value 7</Pill>
            <Pill tone="purple">Value 8</Pill>
        </Pills>
}`,...(Q=(L=g.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};const pe=["Default","WithIcon","Removable","Disabled","AllColors","AllColorsOutline","RemovablePills","MixedVariants","WithIcons","Sizes","OverflowExample"];export{s as AllColors,c as AllColorsOutline,o as Default,t as Disabled,u as MixedVariants,g as OverflowExample,i as Removable,d as RemovablePills,p as Sizes,a as WithIcon,m as WithIcons,pe as __namedExportsOrder,me as default};
