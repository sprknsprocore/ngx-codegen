import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-Dz3UJJSw.js";import{c as y}from"./clsx-B-dksMZM.js";import{B as C}from"./Button-CZgY2kMk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Dp3B9jqt.js";const s=g.forwardRef(function({className:t,page:r,totalPages:o,pageSize:d,totalItems:c,onPageChange:n,showRange:v=!0,showPageSelector:ie=!0,disabled:i=!1,...le},ce){const de=Math.min((r-1)*d+1,c),pe=Math.min(r*d,c),N=r>1,w=r<o,me=()=>{N&&!i&&(n==null||n(r-1))},ue=()=>{w&&!i&&(n==null||n(r+1))},Pe=l=>{const z=parseInt(l.target.value,10);i||n==null||n(z)};return e.jsxs("div",{ref:ce,className:y("inline-flex items-center gap-3 text-sm text-fg-default",i&&"opacity-50 pointer-events-none",t),...le,children:[v&&e.jsx("span",{className:"text-fg-secondary",children:c>0?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"font-medium text-fg-default",children:[de,"-",pe]})," ","of ",c.toLocaleString()]}):"0 items"}),ie&&o>1&&e.jsxs("div",{className:"inline-flex items-center gap-2",children:[e.jsx("label",{htmlFor:"page-select",className:"text-fg-secondary",children:"Page:"}),e.jsx("select",{id:"page-select",value:r,onChange:Pe,disabled:i,className:y("h-8 px-2 pr-8 text-sm rounded-md border border-border-default bg-bg-canvas","focus:outline-none focus:ring-2 focus:ring-blue-50 focus:border-blue-50","cursor-pointer transition-colors"),children:Array.from({length:o},(l,z)=>z+1).map(l=>e.jsx("option",{value:l,children:l},l))})]}),e.jsxs("div",{className:"inline-flex items-center gap-1",children:[e.jsx(C,{size:"sm",emphasis:"secondary",onClick:me,disabled:!N||i,"aria-label":"Previous page",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx(C,{size:"sm",emphasis:"secondary",onClick:ue,disabled:!w||i,"aria-label":"Next page",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})]})});try{s.displayName="Pagination",s.__docgenInfo={description:"",displayName:"Pagination",props:{page:{defaultValue:null,description:"Current page (1-indexed)",name:"page",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"Total number of pages",name:"totalPages",required:!0,type:{name:"number"}},pageSize:{defaultValue:null,description:"Number of items per page",name:"pageSize",required:!0,type:{name:"number"}},totalItems:{defaultValue:null,description:"Total number of items",name:"totalItems",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"Callback when page changes",name:"onPageChange",required:!1,type:{name:"((page: number) => void)"}},showRange:{defaultValue:{value:"true"},description:'Whether to show the item range (e.g., "1-10 of 100")',name:"showRange",required:!1,type:{name:"boolean"}},showPageSelector:{defaultValue:{value:"true"},description:"Whether to show the page dropdown selector",name:"showPageSelector",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const Ie={title:"Components/Pagination",component:s,tags:["autodocs"],argTypes:{showRange:{control:"boolean"},showPageSelector:{control:"boolean"},disabled:{control:"boolean"}}},p={render:()=>{const[a,t]=g.useState(1);return e.jsx(s,{page:a,totalPages:20,pageSize:10,totalItems:200,onPageChange:t})}},m={render:()=>{const[a,t]=g.useState(5);return e.jsx(s,{page:a,totalPages:100,pageSize:50,totalItems:5e3,onPageChange:t})}},u={render:()=>{const[a,t]=g.useState(1);return e.jsx(s,{page:a,totalPages:10,pageSize:25,totalItems:250,onPageChange:t})}},P={render:()=>{const[a,t]=g.useState(10);return e.jsx(s,{page:a,totalPages:10,pageSize:25,totalItems:250,onPageChange:t})}},h={render:()=>{const[a,t]=g.useState(1);return e.jsx(s,{page:a,totalPages:10,pageSize:10,totalItems:100,onPageChange:t,showRange:!1})}},S={render:()=>{const[a,t]=g.useState(1);return e.jsx(s,{page:a,totalPages:10,pageSize:10,totalItems:100,onPageChange:t,showPageSelector:!1})}},f={render:()=>{const[a,t]=g.useState(1);return e.jsx(s,{page:a,totalPages:10,pageSize:10,totalItems:100,onPageChange:t,showRange:!1,showPageSelector:!1})}},x={render:()=>e.jsx(s,{page:1,totalPages:1,pageSize:10,totalItems:5,onPageChange:()=>{}})},b={render:()=>e.jsx(s,{page:1,totalPages:0,pageSize:10,totalItems:0,onPageChange:()=>{}})},j={render:()=>{const[a,t]=g.useState(5);return e.jsx(s,{page:a,totalPages:10,pageSize:10,totalItems:100,onPageChange:t,disabled:!0})}},I={render:()=>{const[a,t]=g.useState(1),r=1e3,o=50,d=Math.ceil(r/o);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-bg-surface rounded-md border border-border-default",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Data Table"}),e.jsxs("p",{className:"text-sm text-fg-secondary mb-4",children:["Showing items ",(a-1)*o+1," to"," ",Math.min(a*o,r)," of ",r]}),e.jsx("div",{className:"grid grid-cols-1 gap-2",children:Array.from({length:Math.min(o,r-(a-1)*o)}).map((c,n)=>{const v=(a-1)*o+n+1;return e.jsxs("div",{className:"p-2 bg-white border border-border-default rounded",children:["Item ",v]},n)})})]}),e.jsx(s,{page:a,totalPages:d,pageSize:o,totalItems:r,onPageChange:t})]})}};var _,k,M;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} totalPages={20} pageSize={10} totalItems={200} onPageChange={setPage} />;
  }
}`,...(M=(k=p.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var D,R,L;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(5);
    return <Pagination page={page} totalPages={100} pageSize={50} totalItems={5000} onPageChange={setPage} />;
  }
}`,...(L=(R=m.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var q,V,W;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} totalPages={10} pageSize={25} totalItems={250} onPageChange={setPage} />;
  }
}`,...(W=(V=u.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var E,T,B;P.parameters={...P.parameters,docs:{...(E=P.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(10);
    return <Pagination page={page} totalPages={10} pageSize={25} totalItems={250} onPageChange={setPage} />;
  }
}`,...(B=(T=P.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var F,A,G;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} totalPages={10} pageSize={10} totalItems={100} onPageChange={setPage} showRange={false} />;
  }
}`,...(G=(A=h.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var O,H,J;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} totalPages={10} pageSize={10} totalItems={100} onPageChange={setPage} showPageSelector={false} />;
  }
}`,...(J=(H=S.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} totalPages={10} pageSize={10} totalItems={100} onPageChange={setPage} showRange={false} showPageSelector={false} />;
  }
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    return <Pagination page={1} totalPages={1} pageSize={10} totalItems={5} onPageChange={() => {}} />;
  }
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    return <Pagination page={1} totalPages={0} pageSize={10} totalItems={0} onPageChange={() => {}} />;
  }
}`,...(ae=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,se,re;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(5);
    return <Pagination page={page} totalPages={10} pageSize={10} totalItems={100} onPageChange={setPage} disabled />;
  }
}`,...(re=(se=j.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ne,oe,ge;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const totalItems = 1000;
    const pageSize = 50;
    const totalPages = Math.ceil(totalItems / pageSize);
    return <div className="space-y-4">
                <div className="p-4 bg-bg-surface rounded-md border border-border-default">
                    <h3 className="text-lg font-semibold mb-2">Data Table</h3>
                    <p className="text-sm text-fg-secondary mb-4">
                        Showing items {(page - 1) * pageSize + 1} to{" "}
                        {Math.min(page * pageSize, totalItems)} of {totalItems}
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                        {Array.from({
            length: Math.min(pageSize, totalItems - (page - 1) * pageSize)
          }).map((_, i) => {
            const itemNumber = (page - 1) * pageSize + i + 1;
            return <div key={i} className="p-2 bg-white border border-border-default rounded">
                                        Item {itemNumber}
                                    </div>;
          })}
                    </div>
                </div>
                <Pagination page={page} totalPages={totalPages} pageSize={pageSize} totalItems={totalItems} onPageChange={setPage} />
            </div>;
  }
}`,...(ge=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ge.source}}};const ve=["Default","LargeDataset","FirstPage","LastPage","WithoutRange","WithoutPageSelector","MinimalControls","SinglePage","EmptyData","Disabled","Interactive"];export{p as Default,j as Disabled,b as EmptyData,u as FirstPage,I as Interactive,m as LargeDataset,P as LastPage,f as MinimalControls,x as SinglePage,S as WithoutPageSelector,h as WithoutRange,ve as __namedExportsOrder,Ie as default};
