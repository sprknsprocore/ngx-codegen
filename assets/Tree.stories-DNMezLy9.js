import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-Dz3UJJSw.js";import{c as D}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const U=({isExpanded:a})=>e.jsx("svg",{className:D("w-4 h-4 transition-transform text-fg-default shrink-0",a&&"rotate-90"),viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 4L10 8L6 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),X=()=>e.jsx("svg",{className:"w-4 h-4 text-fg-secondary shrink-0",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M2 4.5C2 3.67157 2.67157 3 3.5 3H5.87868C6.21071 3 6.52892 3.13229 6.76256 3.36594L7.48744 4.09081C7.72108 4.32446 8.03929 4.45675 8.37132 4.45675H12.5C13.3284 4.45675 14 5.12832 14 5.95675V11.5C14 12.3284 13.3284 13 12.5 13H3.5C2.67157 13 2 12.3284 2 11.5V4.5Z",stroke:"currentColor",strokeWidth:"1.5"})}),Y=()=>e.jsxs("svg",{className:"w-4 h-4 text-fg-secondary shrink-0",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M9 2H4C3.44772 2 3 2.44772 3 3V13C3 13.5523 3.44772 14 4 14H12C12.5523 14 13 13.5523 13 13V6L9 2Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9 2V6H13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),E=t.forwardRef(function a({node:d,level:s=0,selectedId:n,expandedIds:b=new Set,onToggle:l,onSelect:o},j){const i=d.children&&d.children.length>0,c=b.has(d.id),w=n===d.id,C=p=>{p.stopPropagation(),i&&l&&l(d.id)},x=()=>{!d.disabled&&o&&o(d.id)},f=s*20;return e.jsxs("div",{ref:j,children:[e.jsxs("div",{className:D("flex items-center h-7 px-2 text-sm cursor-pointer hover:bg-bg-surface rounded-sm transition-colors",w&&"bg-bg-tertiary text-fg-brand hover:bg-bg-secondary",d.disabled&&"opacity-50 cursor-not-allowed"),style:{paddingLeft:`${f+8}px`},onClick:x,children:[i?e.jsx("button",{type:"button",onClick:C,className:"p-0 mr-1 hover:bg-bg-secondary rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus","aria-label":c?"Collapse":"Expand","aria-expanded":c,children:e.jsx(U,{isExpanded:c})}):e.jsx("span",{className:"w-4 mr-1"}),e.jsx("span",{className:"mr-2",children:d.icon?d.icon:i?e.jsx(X,{}):e.jsx(Y,{})}),e.jsx("span",{className:"truncate",children:d.label})]}),i&&c&&e.jsx("div",{children:d.children.map(p=>e.jsx(a,{node:p,level:s+1,selectedId:n,expandedIds:b,onToggle:l,onSelect:o},p.id))})]})}),r=t.forwardRef(function({data:d,selectedId:s,onSelect:n,defaultExpandedIds:b=[],expandedIds:l,onExpandedChange:o,className:j,...i},c){const[w,C]=t.useState(new Set(b)),x=l!==void 0,f=x?new Set(l):w,p=u=>{const m=new Set(f);m.has(u)?m.delete(u):m.add(u),x&&o?o(Array.from(m)):C(m)};return e.jsx("div",{ref:c,className:D("py-1 text-fg-default",j),role:"tree",...i,children:d.map(u=>e.jsx(E,{node:u,selectedId:s,expandedIds:f,onToggle:p,onSelect:n},u.id))})});try{E.displayName="TreeNode",E.__docgenInfo={description:"",displayName:"TreeNode",props:{node:{defaultValue:null,description:"",name:"node",required:!0,type:{name:"TreeNodeData"}},level:{defaultValue:{value:"0"},description:"",name:"level",required:!1,type:{name:"number"}},selectedId:{defaultValue:null,description:"",name:"selectedId",required:!1,type:{name:"string"}},expandedIds:{defaultValue:{value:"new Set()"},description:"",name:"expandedIds",required:!1,type:{name:"Set<string>"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"((id: string) => void)"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((id: string) => void)"}}}}}catch{}try{r.displayName="Tree",r.__docgenInfo={description:"",displayName:"Tree",props:{data:{defaultValue:null,description:"The tree data structure",name:"data",required:!0,type:{name:"TreeNodeData[]"}},selectedId:{defaultValue:null,description:"Currently selected node ID",name:"selectedId",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"Callback when a node is selected",name:"onSelect",required:!1,type:{name:"((id: string) => void)"}},defaultExpandedIds:{defaultValue:{value:"[]"},description:"Initially expanded node IDs",name:"defaultExpandedIds",required:!1,type:{name:"string[]"}},expandedIds:{defaultValue:{value:"new Set()"},description:"Controlled expanded node IDs",name:"expandedIds",required:!1,type:{name:"string[]"}},onExpandedChange:{defaultValue:null,description:"Callback when a node is expanded/collapsed",name:"onExpandedChange",required:!1,type:{name:"((expandedIds: string[]) => void)"}}}}}catch{}const se={title:"Components/Tree",component:r,tags:["autodocs"]},L=[{id:"1",label:"Label",children:[{id:"1-1",label:"Label"},{id:"1-2",label:"Label"}]},{id:"2",label:"Label",children:[{id:"2-1",label:"Label",children:[{id:"2-1-1",label:"Label"},{id:"2-1-2",label:"Label"}]}]},{id:"3",label:"Label"},{id:"4",label:"Label",disabled:!0}],ee=[{id:"root",label:"src",children:[{id:"components",label:"components",children:[{id:"button-tsx",label:"Button.tsx"},{id:"input-tsx",label:"Input.tsx"},{id:"tree-tsx",label:"Tree.tsx"}]},{id:"utils",label:"utils",children:[{id:"helpers-ts",label:"helpers.ts"},{id:"constants-ts",label:"constants.ts"}]},{id:"index-ts",label:"index.ts"}]},{id:"public",label:"public",children:[{id:"favicon-ico",label:"favicon.ico"}]},{id:"package-json",label:"package.json"}],h={args:{data:L,defaultExpandedIds:["1","2"]}},g={render:()=>{const[a,d]=t.useState();return e.jsx("div",{className:"w-80 border border-border-default rounded-md p-2",children:e.jsx(r,{data:ee,defaultExpandedIds:["root","components"],selectedId:a,onSelect:d})})}},v={render:()=>{const[a,d]=t.useState("1-1");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"w-80 border border-border-default rounded-md p-2",children:e.jsx(r,{data:L,defaultExpandedIds:["1","2","2-1"],selectedId:a,onSelect:d})}),e.jsxs("p",{className:"text-sm text-fg-secondary",children:["Selected ID: ",a||"None"]})]})}},I={render:()=>{const[a,d]=t.useState(["1"]),[s,n]=t.useState();return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"w-80 border border-border-default rounded-md p-2",children:e.jsx(r,{data:L,expandedIds:a,onExpandedChange:d,selectedId:s,onSelect:n})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>d(["1","2","2-1"]),className:"px-3 py-1 text-sm bg-bg-brand text-white rounded-sm",children:"Expand All"}),e.jsx("button",{onClick:()=>d([]),className:"px-3 py-1 text-sm bg-bg-surface border border-border-default rounded-sm",children:"Collapse All"})]})]})}},N={render:()=>{const a=[{id:"1",label:"Level 1",children:[{id:"1-1",label:"Level 2",children:[{id:"1-1-1",label:"Level 3",children:[{id:"1-1-1-1",label:"Level 4",children:[{id:"1-1-1-1-1",label:"Level 5"}]}]}]}]}];return e.jsx("div",{className:"w-96 border border-border-default rounded-md p-2",children:e.jsx(r,{data:a,defaultExpandedIds:["1","1-1","1-1-1","1-1-1-1"]})})}},S={render:()=>{const a=[{id:"1",label:"Available Item"},{id:"2",label:"Disabled Item",disabled:!0},{id:"3",label:"Folder",children:[{id:"3-1",label:"Available Child"},{id:"3-2",label:"Disabled Child",disabled:!0}]}];return e.jsx("div",{className:"w-80 border border-border-default rounded-md p-2",children:e.jsx(r,{data:a,defaultExpandedIds:["3"]})})}},y={render:()=>e.jsxs("div",{className:"w-80 border border-border-default rounded-md p-2",children:[e.jsx(r,{data:[]}),e.jsx("p",{className:"text-sm text-fg-secondary text-center py-4",children:"No items"})]})};var k,T,_;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    defaultExpandedIds: ["1", "2"]
  }
}`,...(_=(T=h.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var V,q,W;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [selectedId, setSelectedId] = React.useState<string>();
    return <div className="w-80 border border-border-default rounded-md p-2">
                <Tree data={fileSystemData} defaultExpandedIds={["root", "components"]} selectedId={selectedId} onSelect={setSelectedId} />
            </div>;
  }
}`,...(W=(q=g.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var A,R,F;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [selectedId, setSelectedId] = React.useState<string>("1-1");
    return <div className="flex flex-col gap-4">
                <div className="w-80 border border-border-default rounded-md p-2">
                    <Tree data={sampleData} defaultExpandedIds={["1", "2", "2-1"]} selectedId={selectedId} onSelect={setSelectedId} />
                </div>
                <p className="text-sm text-fg-secondary">Selected ID: {selectedId || "None"}</p>
            </div>;
  }
}`,...(F=(R=v.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var H,B,M;I.parameters={...I.parameters,docs:{...(H=I.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [expandedIds, setExpandedIds] = React.useState<string[]>(["1"]);
    const [selectedId, setSelectedId] = React.useState<string>();
    return <div className="flex flex-col gap-4">
                <div className="w-80 border border-border-default rounded-md p-2">
                    <Tree data={sampleData} expandedIds={expandedIds} onExpandedChange={setExpandedIds} selectedId={selectedId} onSelect={setSelectedId} />
                </div>
                <div className="flex gap-2">
                    <button onClick={() => setExpandedIds(["1", "2", "2-1"])} className="px-3 py-1 text-sm bg-bg-brand text-white rounded-sm">
                        Expand All
                    </button>
                    <button onClick={() => setExpandedIds([])} className="px-3 py-1 text-sm bg-bg-surface border border-border-default rounded-sm">
                        Collapse All
                    </button>
                </div>
            </div>;
  }
}`,...(M=(B=I.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var Z,O,P;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const deepData: TreeNodeData[] = [{
      id: "1",
      label: "Level 1",
      children: [{
        id: "1-1",
        label: "Level 2",
        children: [{
          id: "1-1-1",
          label: "Level 3",
          children: [{
            id: "1-1-1-1",
            label: "Level 4",
            children: [{
              id: "1-1-1-1-1",
              label: "Level 5"
            }]
          }]
        }]
      }]
    }];
    return <div className="w-96 border border-border-default rounded-md p-2">
                <Tree data={deepData} defaultExpandedIds={["1", "1-1", "1-1-1", "1-1-1-1"]} />
            </div>;
  }
}`,...(P=(O=N.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var $,z,G;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const dataWithDisabled: TreeNodeData[] = [{
      id: "1",
      label: "Available Item"
    }, {
      id: "2",
      label: "Disabled Item",
      disabled: true
    }, {
      id: "3",
      label: "Folder",
      children: [{
        id: "3-1",
        label: "Available Child"
      }, {
        id: "3-2",
        label: "Disabled Child",
        disabled: true
      }]
    }];
    return <div className="w-80 border border-border-default rounded-md p-2">
                <Tree data={dataWithDisabled} defaultExpandedIds={["3"]} />
            </div>;
  }
}`,...(G=(z=S.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="w-80 border border-border-default rounded-md p-2">
            <Tree data={[]} />
            <p className="text-sm text-fg-secondary text-center py-4">No items</p>
        </div>
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ne=["Default","FileSystem","WithSelection","ControlledExpansion","DeeplyNested","WithDisabledNodes","Empty"];export{I as ControlledExpansion,N as DeeplyNested,h as Default,y as Empty,g as FileSystem,S as WithDisabledNodes,v as WithSelection,ne as __namedExportsOrder,se as default};
