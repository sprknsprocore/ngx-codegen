import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-Dz3UJJSw.js";import{c as h}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const b=i.forwardRef(function({className:s,striped:o,hoverable:n,...d},c){return e.jsx("div",{className:"w-full overflow-auto border border-border-default rounded-sm",children:e.jsx("table",{ref:c,className:h("w-full border-collapse",s),...d})})}),T=i.forwardRef(function({className:s,...o},n){return e.jsx("thead",{ref:n,className:h("bg-bg-secondary border-b border-border-default",s),...o})}),p=i.forwardRef(function({className:s,...o},n){return e.jsx("tbody",{ref:n,className:h("divide-y divide-border-default",s),...o})}),C=i.forwardRef(function({className:s,...o},n){return e.jsx("tfoot",{ref:n,className:h("bg-bg-secondary border-t border-border-default font-medium",s),...o})}),t=i.forwardRef(function({className:s,selected:o,...n},d){return e.jsx("tr",{ref:d,className:h("transition-colors hover:bg-bg-surface",o&&"bg-bg-tertiary",s),...n})}),r=i.forwardRef(function({className:s,sortable:o,sortDirection:n,children:d,...c},y){return e.jsx("th",{ref:y,className:h("px-4 py-3 text-left text-sm font-semibold text-fg-default",o&&"cursor-pointer select-none hover:bg-bg-tertiary",s),...c,children:e.jsxs("div",{className:"flex items-center gap-2",children:[d,o&&e.jsxs("span",{className:"text-fg-secondary text-xs",children:[n==="asc"&&"↑",n==="desc"&&"↓",!n&&"↕"]})]})})}),l=i.forwardRef(function({className:s,...o},n){return e.jsx("td",{ref:n,className:h("px-4 py-3 text-sm text-fg-default",s),...o})});try{b.displayName="Table",b.__docgenInfo={description:"",displayName:"Table",props:{striped:{defaultValue:null,description:"Enable zebra striping for rows",name:"striped",required:!1,type:{name:"boolean"}},hoverable:{defaultValue:null,description:"Enable hover effect on rows",name:"hoverable",required:!1,type:{name:"boolean"}}}}}catch{}try{T.displayName="TableHeader",T.__docgenInfo={description:"",displayName:"TableHeader",props:{}}}catch{}try{p.displayName="TableBody",p.__docgenInfo={description:"",displayName:"TableBody",props:{}}}catch{}try{C.displayName="TableFooter",C.__docgenInfo={description:"",displayName:"TableFooter",props:{}}}catch{}try{t.displayName="TableRow",t.__docgenInfo={description:"",displayName:"TableRow",props:{selected:{defaultValue:null,description:"Whether row is selected",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}try{r.displayName="TableHead",r.__docgenInfo={description:"",displayName:"TableHead",props:{sortable:{defaultValue:null,description:"Enable sorting indicator",name:"sortable",required:!1,type:{name:"boolean"}},sortDirection:{defaultValue:null,description:"Current sort direction",name:"sortDirection",required:!1,type:{name:'"desc" | "asc" | null'}}}}}catch{}try{l.displayName="TableCell",l.__docgenInfo={description:"",displayName:"TableCell",props:{}}}catch{}const O={title:"Components/Table",component:b,argTypes:{striped:{control:"boolean"},hoverable:{control:"boolean"}}},u=[{id:1,value1:"Value",value2:"Value",value3:"Value",value4:"0.00",value5:"Value",value6:"Value"},{id:2,value1:"Value",value2:"Value",value3:"Value",value4:"0.00",value5:"Value",value6:"Value"},{id:3,value1:"Value",value2:"Value",value3:"Value",value4:"0.00",value5:"Value",value6:"Value"},{id:4,value1:"Value",value2:"Value",value3:"Value",value4:"0.00",value5:"Value",value6:"Value"},{id:5,value1:"Value",value2:"Value",value3:"Value",value4:"0.00",value5:"Value",value6:"Value"}],H={render:a=>e.jsxs(b,{...a,children:[e.jsx(T,{children:e.jsxs(t,{children:[e.jsx(r,{children:"Header"}),e.jsx(r,{children:"Header"}),e.jsx(r,{children:"Header"}),e.jsx(r,{children:"Header"}),e.jsx(r,{children:"Header"}),e.jsx(r,{children:"Header"})]})}),e.jsx(p,{children:u.map(s=>e.jsxs(t,{children:[e.jsx(l,{children:s.value1}),e.jsx(l,{children:s.value2}),e.jsx(l,{children:s.value3}),e.jsx(l,{children:s.value4}),e.jsx(l,{children:s.value5}),e.jsx(l,{children:s.value6})]},s.id))})]}),args:{striped:!1,hoverable:!0}},x={render:()=>e.jsxs(b,{children:[e.jsx(T,{children:e.jsxs(t,{children:[e.jsx(r,{children:"Header"}),e.jsx(r,{children:"Header"}),e.jsx(r,{children:"Header"}),e.jsx(r,{children:"Header"}),e.jsx(r,{children:"Header"}),e.jsx(r,{children:"Header"})]})}),e.jsx(p,{children:u.map(a=>e.jsxs(t,{children:[e.jsx(l,{children:a.value1}),e.jsx(l,{children:a.value2}),e.jsx(l,{children:a.value3}),e.jsx(l,{children:a.value4}),e.jsx(l,{children:a.value5}),e.jsx(l,{children:a.value6})]},a.id))})]})},m={render:()=>{const[a,s]=i.useState([]),o=d=>{s(c=>c.includes(d)?c.filter(y=>y!==d):[...c,d])},n=()=>{s(d=>d.length===u.length?[]:u.map(c=>c.id))};return e.jsxs(b,{children:[e.jsx(T,{children:e.jsxs(t,{children:[e.jsx(r,{className:"w-12",children:e.jsx("input",{type:"checkbox",checked:a.length===u.length,onChange:n,className:"cursor-pointer"})}),e.jsx(r,{children:"Header"}),e.jsx(r,{children:"Header"}),e.jsx(r,{children:"Header"}),e.jsx(r,{children:"Header"}),e.jsx(r,{children:"Header"}),e.jsx(r,{children:"Header"})]})}),e.jsx(p,{children:u.map(d=>e.jsxs(t,{selected:a.includes(d.id),children:[e.jsx(l,{children:e.jsx("input",{type:"checkbox",checked:a.includes(d.id),onChange:()=>o(d.id),className:"cursor-pointer"})}),e.jsx(l,{children:d.value1}),e.jsx(l,{children:d.value2}),e.jsx(l,{children:d.value3}),e.jsx(l,{children:d.value4}),e.jsx(l,{children:d.value5}),e.jsx(l,{children:d.value6})]},d.id))})]})}},j={render:()=>{const[a,s]=i.useState(null),o=n=>{s(d=>(d==null?void 0:d.key)===n?d.direction==="asc"?{key:n,direction:"desc"}:null:{key:n,direction:"asc"})};return e.jsxs(b,{children:[e.jsx(T,{children:e.jsxs(t,{children:[e.jsx(r,{sortable:!0,sortDirection:(a==null?void 0:a.key)==="header1"?a.direction:null,onClick:()=>o("header1"),children:"Header"}),e.jsx(r,{sortable:!0,sortDirection:(a==null?void 0:a.key)==="header2"?a.direction:null,onClick:()=>o("header2"),children:"Header"}),e.jsx(r,{sortable:!0,sortDirection:(a==null?void 0:a.key)==="header3"?a.direction:null,onClick:()=>o("header3"),children:"Header"}),e.jsx(r,{children:"Header"}),e.jsx(r,{children:"Header"}),e.jsx(r,{children:"Header"})]})}),e.jsx(p,{children:u.map(n=>e.jsxs(t,{children:[e.jsx(l,{children:n.value1}),e.jsx(l,{children:n.value2}),e.jsx(l,{children:n.value3}),e.jsx(l,{children:n.value4}),e.jsx(l,{children:n.value5}),e.jsx(l,{children:n.value6})]},n.id))})]})}},v={render:()=>e.jsxs(b,{children:[e.jsx(T,{children:e.jsxs(t,{children:[e.jsx(r,{className:"py-2",children:"Header"}),e.jsx(r,{className:"py-2",children:"Header"})]})}),e.jsxs(p,{children:[e.jsxs(t,{children:[e.jsx(l,{className:"py-2",children:"Value"}),e.jsx(l,{className:"py-2",children:"Value"})]}),e.jsxs(t,{children:[e.jsx(l,{className:"py-2",children:"Value"}),e.jsx(l,{className:"py-2",children:"Value"})]})]})]})};var f,g,w;H.parameters={...H.parameters,docs:{...(f=H.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>Header</TableHead>
          <TableHead>Header</TableHead>
          <TableHead>Header</TableHead>
          <TableHead>Header</TableHead>
          <TableHead>Header</TableHead>
          <TableHead>Header</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map(row => <TableRow key={row.id}>
            <TableCell>{row.value1}</TableCell>
            <TableCell>{row.value2}</TableCell>
            <TableCell>{row.value3}</TableCell>
            <TableCell>{row.value4}</TableCell>
            <TableCell>{row.value5}</TableCell>
            <TableCell>{row.value6}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>,
  args: {
    striped: false,
    hoverable: true
  }
}`,...(w=(g=H.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var _,R,N;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Header</TableHead>
          <TableHead>Header</TableHead>
          <TableHead>Header</TableHead>
          <TableHead>Header</TableHead>
          <TableHead>Header</TableHead>
          <TableHead>Header</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map(row => <TableRow key={row.id}>
            <TableCell>{row.value1}</TableCell>
            <TableCell>{row.value2}</TableCell>
            <TableCell>{row.value3}</TableCell>
            <TableCell>{row.value4}</TableCell>
            <TableCell>{row.value5}</TableCell>
            <TableCell>{row.value6}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(N=(R=x.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var V,k,S;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const toggleRow = (id: number) => {
      setSelectedRows(prev => prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]);
    };
    const toggleAll = () => {
      setSelectedRows(prev => prev.length === sampleData.length ? [] : sampleData.map(row => row.id));
    };
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <input type="checkbox" checked={selectedRows.length === sampleData.length} onChange={toggleAll} className="cursor-pointer" />
            </TableHead>
            <TableHead>Header</TableHead>
            <TableHead>Header</TableHead>
            <TableHead>Header</TableHead>
            <TableHead>Header</TableHead>
            <TableHead>Header</TableHead>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map(row => <TableRow key={row.id} selected={selectedRows.includes(row.id)}>
              <TableCell>
                <input type="checkbox" checked={selectedRows.includes(row.id)} onChange={() => toggleRow(row.id)} className="cursor-pointer" />
              </TableCell>
              <TableCell>{row.value1}</TableCell>
              <TableCell>{row.value2}</TableCell>
              <TableCell>{row.value3}</TableCell>
              <TableCell>{row.value4}</TableCell>
              <TableCell>{row.value5}</TableCell>
              <TableCell>{row.value6}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...(S=(k=m.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var D,B,I;j.parameters={...j.parameters,docs:{...(D=j.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    type SortConfig = {
      key: string;
      direction: "asc" | "desc";
    } | null;
    const [sortConfig, setSortConfig] = useState<SortConfig>(null);
    const handleSort = (key: string) => {
      setSortConfig(prev => {
        if (prev?.key === key) {
          return prev.direction === "asc" ? {
            key,
            direction: "desc"
          } : null;
        }
        return {
          key,
          direction: "asc"
        };
      });
    };
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead sortable sortDirection={sortConfig?.key === "header1" ? sortConfig.direction : null} onClick={() => handleSort("header1")}>
              Header
            </TableHead>
            <TableHead sortable sortDirection={sortConfig?.key === "header2" ? sortConfig.direction : null} onClick={() => handleSort("header2")}>
              Header
            </TableHead>
            <TableHead sortable sortDirection={sortConfig?.key === "header3" ? sortConfig.direction : null} onClick={() => handleSort("header3")}>
              Header
            </TableHead>
            <TableHead>Header</TableHead>
            <TableHead>Header</TableHead>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map(row => <TableRow key={row.id}>
              <TableCell>{row.value1}</TableCell>
              <TableCell>{row.value2}</TableCell>
              <TableCell>{row.value3}</TableCell>
              <TableCell>{row.value4}</TableCell>
              <TableCell>{row.value5}</TableCell>
              <TableCell>{row.value6}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...(I=(B=j.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var E,q,W;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="py-2">Header</TableHead>
          <TableHead className="py-2">Header</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="py-2">Value</TableCell>
          <TableCell className="py-2">Value</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-2">Value</TableCell>
          <TableCell className="py-2">Value</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(W=(q=v.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};const G=["Playground","Default","WithCheckboxes","WithSortableHeaders","Compact"];export{v as Compact,x as Default,H as Playground,m as WithCheckboxes,j as WithSortableHeaders,G as __namedExportsOrder,O as default};
