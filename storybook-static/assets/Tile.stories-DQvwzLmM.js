import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as be}from"./index-Dz3UJJSw.js";import{c as le}from"./index-Dp3B9jqt.js";import{c as he}from"./clsx-B-dksMZM.js";import{B as Se}from"./Badge-KMd5Lm1W.js";import{B as h}from"./Button-BIc0yRBS.js";import"./_commonjsHelpers-CqkleIqs.js";const fe=le("flex rounded-lg border bg-bg-canvas overflow-hidden transition-shadow hover:shadow-2",{variants:{orientation:{vertical:"flex-col",horizontal:"flex-row"},size:{sm:"",md:"",lg:""}},defaultVariants:{orientation:"vertical",size:"md"}}),Te=le("flex-shrink-0 bg-bg-surface overflow-hidden",{variants:{orientation:{vertical:"w-full",horizontal:"w-32"},size:{sm:"h-24",md:"h-32",lg:"h-48"}},compoundVariants:[{orientation:"horizontal",size:"sm",class:"w-24 h-24"},{orientation:"horizontal",size:"md",class:"w-32 h-32"},{orientation:"horizontal",size:"lg",class:"w-48 h-48"}],defaultVariants:{orientation:"vertical",size:"md"}}),t=be.forwardRef(function({className:de,orientation:x,size:A,imageSrc:v,imageAlt:me,title:ue,subheading:w,description:N,contentBlocks:S,badges:f,actions:C,...ge},pe){return e.jsxs("div",{ref:pe,className:he(fe({orientation:x,size:A}),de),...ge,children:[v&&e.jsx("div",{className:Te({orientation:x,size:A}),children:e.jsx("img",{src:v,alt:me||"",className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"flex-1 flex flex-col gap-3 p-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[w&&e.jsx("div",{className:"text-sm text-fg-muted font-medium",children:w}),e.jsx("div",{className:"text-lg font-semibold text-fg-default",children:ue})]}),N&&e.jsx("div",{className:"text-sm text-fg-default",children:N}),S&&S.length>0&&e.jsx("div",{className:"flex flex-col gap-2",children:S.map((n,T)=>e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsx("div",{className:"text-xs text-fg-muted uppercase tracking-wide",children:n.label}),e.jsx("div",{className:"text-sm text-fg-default font-medium",children:n.value})]},T))}),f&&f.length>0&&e.jsx("div",{className:"flex flex-wrap gap-2",children:f.map((n,T)=>e.jsx(Se,{size:"sm",tone:n.tone||"neutral",children:n.label},T))}),C&&e.jsx("div",{className:"flex gap-2 mt-auto pt-2",children:C})]})]})});try{t.displayName="Tile",t.__docgenInfo={description:"",displayName:"Tile",props:{imageSrc:{defaultValue:null,description:"Image source URL",name:"imageSrc",required:!1,type:{name:"string"}},imageAlt:{defaultValue:null,description:"Image alt text",name:"imageAlt",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Tile heading",name:"title",required:!0,type:{name:"ReactNode"}},subheading:{defaultValue:null,description:"Subheading text",name:"subheading",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Description text",name:"description",required:!1,type:{name:"ReactNode"}},contentBlocks:{defaultValue:null,description:"Content block items (label-value pairs)",name:"contentBlocks",required:!1,type:{name:"{ label: string; value: ReactNode; }[]"}},badges:{defaultValue:null,description:"Status badges",name:"badges",required:!1,type:{name:'{ label: string; tone?: "neutral" | "brand" | "success" | "warn" | "danger"; }[]'}},actions:{defaultValue:null,description:"Action buttons or elements",name:"actions",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | null'}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:'"horizontal" | "vertical" | null'}}}}}catch{}const je={title:"Components/Tile",component:t,parameters:{layout:"padded"},tags:["autodocs"]},a="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",i={args:{title:"Section Name",subheading:"Subheading",imageSrc:a,imageAlt:"Construction site"}},s={args:{title:"Section Name",subheading:"Subheading",description:"Description without a label.",imageSrc:a,imageAlt:"Construction site"}},o={args:{title:"Section Name",subheading:"Subheading",description:"Description without a label.",imageSrc:a,imageAlt:"Construction site",contentBlocks:[{label:"Label",value:"Content block item with a label and value."}]}},r={args:{title:"Section Name",subheading:"Subheading",description:"Description without a label.",imageSrc:a,imageAlt:"Construction site",contentBlocks:[{label:"Label",value:"Content block item with a label and value."}],badges:[{label:"STATUS",tone:"brand"},{label:"STATUS",tone:"success"}]}},l={args:{title:"Section Name",subheading:"Subheading",description:"Description without a label.",imageSrc:a,imageAlt:"Construction site",badges:[{label:"STATUS",tone:"brand"},{label:"STATUS",tone:"success"}],actions:e.jsxs(e.Fragment,{children:[e.jsx(h,{size:"sm",emphasis:"tertiary",children:"Tertiary"}),e.jsx(h,{size:"sm",emphasis:"secondary",children:"Secondary"})]})}},c={args:{title:"Section Name",subheading:"Subheading",description:"Description without a label.",imageSrc:a,imageAlt:"Construction site",orientation:"horizontal",badges:[{label:"STATUS",tone:"brand"},{label:"STATUS",tone:"success"}]}},d={args:{title:"Section Name",subheading:"Subheading",description:"Description without a label.",imageSrc:a,imageAlt:"Construction site",size:"sm"}},m={args:{title:"Section Name",subheading:"Subheading",description:"Description without a label.",imageSrc:a,imageAlt:"Construction site",size:"lg",contentBlocks:[{label:"Label",value:"Content block item with a label and value."}],badges:[{label:"STATUS",tone:"brand"},{label:"STATUS",tone:"success"}]}},u={args:{title:"Section Name",subheading:"Subheading",description:"Description without a label.",contentBlocks:[{label:"Label",value:"Content block item with a label and value."}],badges:[{label:"STATUS",tone:"brand"}]}},g={args:{title:"Section Name",imageSrc:a,imageAlt:"Construction site"}},p={args:{title:"Project Overview",subheading:"Construction Project",description:"A comprehensive construction project including site preparation, foundation work, and structural development.",imageSrc:a,imageAlt:"Construction site",contentBlocks:[{label:"Location",value:"San Francisco, CA"},{label:"Budget",value:"$2.5M"},{label:"Timeline",value:"12 months"}],badges:[{label:"ACTIVE",tone:"success"},{label:"ON TRACK",tone:"brand"}],actions:e.jsxs(e.Fragment,{children:[e.jsx(h,{size:"sm",emphasis:"tertiary",children:"View Details"}),e.jsx(h,{size:"sm",emphasis:"primary",children:"Edit"})]})}},b={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[e.jsx(t,{title:"Section Name",subheading:"Subheading",description:"Description without a label.",imageSrc:a,imageAlt:"Construction site",badges:[{label:"STATUS",tone:"brand"}]}),e.jsx(t,{title:"Section Name",subheading:"Subheading",description:"Description without a label.",imageSrc:a,imageAlt:"Construction site",badges:[{label:"STATUS",tone:"success"}]}),e.jsx(t,{title:"Section Name",subheading:"Subheading",description:"Description without a label.",imageSrc:a,imageAlt:"Construction site",badges:[{label:"STATUS",tone:"warn"}]})]})};var z,j,y;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: "Section Name",
    subheading: "Subheading",
    imageSrc: sampleImage,
    imageAlt: "Construction site"
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var D,B,U;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: "Section Name",
    subheading: "Subheading",
    description: "Description without a label.",
    imageSrc: sampleImage,
    imageAlt: "Construction site"
  }
}`,...(U=(B=s.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var k,I,V;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: "Section Name",
    subheading: "Subheading",
    description: "Description without a label.",
    imageSrc: sampleImage,
    imageAlt: "Construction site",
    contentBlocks: [{
      label: "Label",
      value: "Content block item with a label and value."
    }]
  }
}`,...(V=(I=o.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var L,q,R;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: "Section Name",
    subheading: "Subheading",
    description: "Description without a label.",
    imageSrc: sampleImage,
    imageAlt: "Construction site",
    contentBlocks: [{
      label: "Label",
      value: "Content block item with a label and value."
    }],
    badges: [{
      label: "STATUS",
      tone: "brand"
    }, {
      label: "STATUS",
      tone: "success"
    }]
  }
}`,...(R=(q=r.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var _,E,W;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: "Section Name",
    subheading: "Subheading",
    description: "Description without a label.",
    imageSrc: sampleImage,
    imageAlt: "Construction site",
    badges: [{
      label: "STATUS",
      tone: "brand"
    }, {
      label: "STATUS",
      tone: "success"
    }],
    actions: <>
                <Button size="sm" emphasis="tertiary">
                    Tertiary
                </Button>
                <Button size="sm" emphasis="secondary">
                    Secondary
                </Button>
            </>
  }
}`,...(W=(E=l.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var O,F,M;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: "Section Name",
    subheading: "Subheading",
    description: "Description without a label.",
    imageSrc: sampleImage,
    imageAlt: "Construction site",
    orientation: "horizontal",
    badges: [{
      label: "STATUS",
      tone: "brand"
    }, {
      label: "STATUS",
      tone: "success"
    }]
  }
}`,...(M=(F=c.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var P,G,H;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: "Section Name",
    subheading: "Subheading",
    description: "Description without a label.",
    imageSrc: sampleImage,
    imageAlt: "Construction site",
    size: "sm"
  }
}`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,$,J;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: "Section Name",
    subheading: "Subheading",
    description: "Description without a label.",
    imageSrc: sampleImage,
    imageAlt: "Construction site",
    size: "lg",
    contentBlocks: [{
      label: "Label",
      value: "Content block item with a label and value."
    }],
    badges: [{
      label: "STATUS",
      tone: "brand"
    }, {
      label: "STATUS",
      tone: "success"
    }]
  }
}`,...(J=($=m.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var Q,X,Y;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    title: "Section Name",
    subheading: "Subheading",
    description: "Description without a label.",
    contentBlocks: [{
      label: "Label",
      value: "Content block item with a label and value."
    }],
    badges: [{
      label: "STATUS",
      tone: "brand"
    }]
  }
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    title: "Section Name",
    imageSrc: sampleImage,
    imageAlt: "Construction site"
  }
}`,...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,ie;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    title: "Project Overview",
    subheading: "Construction Project",
    description: "A comprehensive construction project including site preparation, foundation work, and structural development.",
    imageSrc: sampleImage,
    imageAlt: "Construction site",
    contentBlocks: [{
      label: "Location",
      value: "San Francisco, CA"
    }, {
      label: "Budget",
      value: "$2.5M"
    }, {
      label: "Timeline",
      value: "12 months"
    }],
    badges: [{
      label: "ACTIVE",
      tone: "success"
    }, {
      label: "ON TRACK",
      tone: "brand"
    }],
    actions: <>
                <Button size="sm" emphasis="tertiary">
                    View Details
                </Button>
                <Button size="sm" emphasis="primary">
                    Edit
                </Button>
            </>
  }
}`,...(ie=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var se,oe,re;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Tile title="Section Name" subheading="Subheading" description="Description without a label." imageSrc={sampleImage} imageAlt="Construction site" badges={[{
      label: "STATUS",
      tone: "brand"
    }]} />
            <Tile title="Section Name" subheading="Subheading" description="Description without a label." imageSrc={sampleImage} imageAlt="Construction site" badges={[{
      label: "STATUS",
      tone: "success"
    }]} />
            <Tile title="Section Name" subheading="Subheading" description="Description without a label." imageSrc={sampleImage} imageAlt="Construction site" badges={[{
      label: "STATUS",
      tone: "warn"
    }]} />
        </div>
}`,...(re=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};const ye=["Default","WithDescription","WithContentBlocks","WithBadges","WithActions","HorizontalOrientation","SmallSize","LargeSize","NoImage","MinimalContent","CompleteExample","GridLayout"];export{p as CompleteExample,i as Default,b as GridLayout,c as HorizontalOrientation,m as LargeSize,g as MinimalContent,u as NoImage,d as SmallSize,l as WithActions,r as WithBadges,o as WithContentBlocks,s as WithDescription,ye as __namedExportsOrder,je as default};
