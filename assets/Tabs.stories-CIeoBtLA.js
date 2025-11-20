import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-Dz3UJJSw.js";import{c as m}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const I=i.createContext(null),j=()=>{const n=i.useContext(I);if(!n)throw new Error("Tabs compound components must be used within a Tabs component");return n},T=i.forwardRef(function({className:b,defaultValue:r="",value:l,onValueChange:s,orientation:o="horizontal",children:u,...f},h){const[C,d]=i.useState(l??r),D={activeTab:l??C,setActiveTab:N=>{l===void 0&&d(N),s==null||s(N)},orientation:o};return e.jsx(I.Provider,{value:D,children:e.jsx("div",{ref:h,className:m("w-full",o==="vertical"&&"flex",b),...f,children:u})})}),c=i.forwardRef(function({className:b,children:r,...l},s){const{orientation:o}=j();return e.jsx("div",{ref:s,role:"tablist","aria-orientation":o,className:m("inline-flex gap-0 border-b border-border-default",o==="vertical"&&"flex-col border-b-0 border-r",b),...l,children:r})}),a=i.forwardRef(function({className:b,value:r,children:l,disabled:s,...o},u){const{activeTab:f,setActiveTab:h,orientation:C}=j(),d=f===r;return e.jsx("button",{ref:u,role:"tab",type:"button","aria-selected":d,"aria-controls":`tab-content-${r}`,disabled:s,onClick:()=>h(r),className:m("relative px-4 py-2.5 text-sm font-medium transition-colors whitespace-nowrap","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",d?"text-fg-brand after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-bg-brand":"text-fg-secondary hover:text-fg-default",s&&"opacity-50 cursor-not-allowed pointer-events-none",C==="vertical"&&d&&"after:inset-y-0 after:left-auto after:right-0 after:w-0.5 after:h-auto",b),...o,children:l})}),t=i.forwardRef(function({className:b,value:r,children:l,...s},o){const{activeTab:u}=j();return u===r?e.jsx("div",{ref:o,role:"tabpanel",id:`tab-content-${r}`,"aria-labelledby":`tab-${r}`,className:m("mt-4",b),...s,children:l}):null});try{T.displayName="Tabs",T.__docgenInfo={description:"",displayName:"Tabs",props:{defaultValue:{defaultValue:{value:""},description:"Default active tab value",name:"defaultValue",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Controlled active tab value",name:"value",required:!1,type:{name:"string"}},onValueChange:{defaultValue:null,description:"On value change handler",name:"onValueChange",required:!1,type:{name:"((value: string) => void)"}},orientation:{defaultValue:{value:"horizontal"},description:"Orientation of tabs",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}try{c.displayName="TabsList",c.__docgenInfo={description:"",displayName:"TabsList",props:{}}}catch{}try{a.displayName="TabsTrigger",a.__docgenInfo={description:"",displayName:"TabsTrigger",props:{value:{defaultValue:null,description:"Tab value",name:"value",required:!0,type:{name:"string"}}}}}catch{}try{t.displayName="TabsContent",t.__docgenInfo={description:"",displayName:"TabsContent",props:{value:{defaultValue:null,description:"Tab value",name:"value",required:!0,type:{name:"string"}}}}}catch{}const k={title:"Components/Tabs",component:T,argTypes:{orientation:{control:"select",options:["horizontal","vertical"]}}},g={render:n=>e.jsxs(T,{...n,children:[e.jsxs(c,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"}),e.jsx(a,{value:"tab4",children:"Tab 4"}),e.jsx(a,{value:"tab5",children:"Tab 5"}),e.jsx(a,{value:"tab6",children:"Tab 6"})]}),e.jsx(t,{value:"tab1",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 1"})}),e.jsx(t,{value:"tab2",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 2"})}),e.jsx(t,{value:"tab3",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 3"})}),e.jsx(t,{value:"tab4",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 4"})}),e.jsx(t,{value:"tab5",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 5"})}),e.jsx(t,{value:"tab6",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 6"})})]}),args:{defaultValue:"tab1",orientation:"horizontal"}},p={render:()=>e.jsxs(T,{defaultValue:"tab1",children:[e.jsxs(c,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"}),e.jsx(a,{value:"tab4",children:"Tab 4"}),e.jsx(a,{value:"tab5",children:"Tab 5"}),e.jsx(a,{value:"tab6",children:"Tab 6"})]}),e.jsx(t,{value:"tab1",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 1"})}),e.jsx(t,{value:"tab2",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 2"})}),e.jsx(t,{value:"tab3",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 3"})}),e.jsx(t,{value:"tab4",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 4"})}),e.jsx(t,{value:"tab5",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 5"})}),e.jsx(t,{value:"tab6",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 6"})})]})},x={render:()=>e.jsxs(T,{defaultValue:"tab1",children:[e.jsxs(c,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"}),e.jsx(a,{value:"tab4",children:"Tab 4"}),e.jsx(a,{value:"tab5",children:"Tab 5"}),e.jsx(a,{value:"tab6",children:"Tab 6"}),e.jsx(a,{value:"more",children:"More"})]}),e.jsx(t,{value:"tab1",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 1"})}),e.jsx(t,{value:"tab2",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 2"})}),e.jsx(t,{value:"tab3",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 3"})}),e.jsx(t,{value:"tab4",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 4"})}),e.jsx(t,{value:"tab5",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 5"})}),e.jsx(t,{value:"tab6",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 6"})}),e.jsx(t,{value:"more",children:e.jsx("p",{className:"text-fg-default",children:"More options content"})})]})},v={render:()=>e.jsxs(T,{defaultValue:"tab1",orientation:"vertical",children:[e.jsxs(c,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsxs("div",{className:"flex-1 pl-6",children:[e.jsx(t,{value:"tab1",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 1"})}),e.jsx(t,{value:"tab2",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 2"})}),e.jsx(t,{value:"tab3",children:e.jsx("p",{className:"text-fg-default",children:"Content for Tab 3"})})]})]})};var _,y,V;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        <TabsTrigger value="tab4">Tab 4</TabsTrigger>
        <TabsTrigger value="tab5">Tab 5</TabsTrigger>
        <TabsTrigger value="tab6">Tab 6</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-fg-default">Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-fg-default">Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-fg-default">Content for Tab 3</p>
      </TabsContent>
      <TabsContent value="tab4">
        <p className="text-fg-default">Content for Tab 4</p>
      </TabsContent>
      <TabsContent value="tab5">
        <p className="text-fg-default">Content for Tab 5</p>
      </TabsContent>
      <TabsContent value="tab6">
        <p className="text-fg-default">Content for Tab 6</p>
      </TabsContent>
    </Tabs>,
  args: {
    defaultValue: "tab1",
    orientation: "horizontal"
  }
}`,...(V=(y=g.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var L,w,A;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        <TabsTrigger value="tab4">Tab 4</TabsTrigger>
        <TabsTrigger value="tab5">Tab 5</TabsTrigger>
        <TabsTrigger value="tab6">Tab 6</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-fg-default">Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-fg-default">Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-fg-default">Content for Tab 3</p>
      </TabsContent>
      <TabsContent value="tab4">
        <p className="text-fg-default">Content for Tab 4</p>
      </TabsContent>
      <TabsContent value="tab5">
        <p className="text-fg-default">Content for Tab 5</p>
      </TabsContent>
      <TabsContent value="tab6">
        <p className="text-fg-default">Content for Tab 6</p>
      </TabsContent>
    </Tabs>
}`,...(A=(w=p.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var S,q,z;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        <TabsTrigger value="tab4">Tab 4</TabsTrigger>
        <TabsTrigger value="tab5">Tab 5</TabsTrigger>
        <TabsTrigger value="tab6">Tab 6</TabsTrigger>
        <TabsTrigger value="more">More</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-fg-default">Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-fg-default">Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-fg-default">Content for Tab 3</p>
      </TabsContent>
      <TabsContent value="tab4">
        <p className="text-fg-default">Content for Tab 4</p>
      </TabsContent>
      <TabsContent value="tab5">
        <p className="text-fg-default">Content for Tab 5</p>
      </TabsContent>
      <TabsContent value="tab6">
        <p className="text-fg-default">Content for Tab 6</p>
      </TabsContent>
      <TabsContent value="more">
        <p className="text-fg-default">More options content</p>
      </TabsContent>
    </Tabs>
}`,...(z=(q=x.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var M,R,E;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" orientation="vertical">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <div className="flex-1 pl-6">
        <TabsContent value="tab1">
          <p className="text-fg-default">Content for Tab 1</p>
        </TabsContent>
        <TabsContent value="tab2">
          <p className="text-fg-default">Content for Tab 2</p>
        </TabsContent>
        <TabsContent value="tab3">
          <p className="text-fg-default">Content for Tab 3</p>
        </TabsContent>
      </div>
    </Tabs>
}`,...(E=(R=v.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const F=["Playground","Default","WithMoreButton","Vertical"];export{p as Default,g as Playground,v as Vertical,x as WithMoreButton,F as __namedExportsOrder,k as default};
