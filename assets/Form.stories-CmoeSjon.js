import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as R}from"./index-Dz3UJJSw.js";import{c as k}from"./index-Dp3B9jqt.js";import{c as A}from"./clsx-B-dksMZM.js";import{F as l}from"./FormField-Cqy7vkAR.js";import{I as n}from"./Input-80mIrHdw.js";import{S as b}from"./Select-uuqwQvgn.js";import{T as D}from"./TextArea-Y3i28lFF.js";import{B as a}from"./Button-CZgY2kMk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Stack-BazOErot.js";import"./InputBase-Bz2wEZFE.js";const W=k("w-full",{variants:{layout:{"1-column":"grid grid-cols-1 gap-4","2-columns":"grid grid-cols-1 md:grid-cols-2 gap-4","3-columns":"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4","4-columns":"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",stack:"flex flex-col gap-4"}},defaultVariants:{layout:"1-column"}}),o=R.forwardRef(function({className:F,layout:t,children:s,...x},j){return e.jsx("form",{ref:j,className:A(W({layout:t}),F),...x,children:s})}),h=R.forwardRef(function({className:F,title:t,description:s,children:x,...j},U){return e.jsxs("div",{ref:U,className:A("w-full",F),...j,children:[(t||s)&&e.jsxs("div",{className:"mb-4",children:[t&&e.jsx("h3",{className:"text-h3 text-fg-default mb-1",children:t}),s&&e.jsx("p",{className:"text-body text-fg-secondary",children:s})]}),x]})});try{o.displayName="Form",o.__docgenInfo={description:"",displayName:"Form",props:{layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:'"1-column" | "2-columns" | "3-columns" | "4-columns" | "stack" | null'}}}}}catch{}try{h.displayName="FormSection",h.__docgenInfo={description:"",displayName:"FormSection",props:{title:{defaultValue:null,description:"Section title",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Section description",name:"description",required:!1,type:{name:"string"}}}}}catch{}const le={title:"Components/Form",component:o,parameters:{layout:"padded"},tags:["autodocs"]},i={args:{layout:"1-column"},render:r=>e.jsxs(o,{...r,children:[e.jsx(l,{label:"First Name",required:!0,children:e.jsx(n,{placeholder:"Enter first name"})}),e.jsx(l,{label:"Last Name",required:!0,children:e.jsx(n,{placeholder:"Enter last name"})}),e.jsx(l,{label:"Email",validationState:"none",children:e.jsx(n,{type:"email",placeholder:"Enter email"})}),e.jsx(l,{label:"Phone",children:e.jsx(n,{type:"tel",placeholder:"Enter phone number"})}),e.jsxs("div",{className:"flex gap-3 justify-end",children:[e.jsx(a,{emphasis:"secondary",children:"Cancel"}),e.jsx(a,{type:"submit",children:"Submit"})]})]})},d={args:{layout:"2-columns"},render:r=>e.jsxs(o,{...r,children:[e.jsx(l,{label:"First Name",required:!0,children:e.jsx(n,{placeholder:"Enter first name"})}),e.jsx(l,{label:"Last Name",required:!0,children:e.jsx(n,{placeholder:"Enter last name"})}),e.jsx(l,{label:"Email",children:e.jsx(n,{type:"email",placeholder:"Enter email"})}),e.jsx(l,{label:"Phone",children:e.jsx(n,{type:"tel",placeholder:"Enter phone number"})}),e.jsx(l,{label:"Company",children:e.jsx(n,{placeholder:"Enter company name"})}),e.jsx(l,{label:"Job Title",children:e.jsx(n,{placeholder:"Enter job title"})}),e.jsxs("div",{className:"col-span-full flex gap-3 justify-end",children:[e.jsx(a,{emphasis:"secondary",children:"Cancel"}),e.jsx(a,{type:"submit",children:"Submit"})]})]})},m={args:{layout:"3-columns"},render:r=>e.jsxs(o,{...r,children:[e.jsx(l,{label:"First Name",required:!0,children:e.jsx(n,{placeholder:"Enter first name"})}),e.jsx(l,{label:"Middle Name",children:e.jsx(n,{placeholder:"Enter middle name"})}),e.jsx(l,{label:"Last Name",required:!0,children:e.jsx(n,{placeholder:"Enter last name"})}),e.jsx(l,{label:"Email",children:e.jsx(n,{type:"email",placeholder:"Enter email"})}),e.jsx(l,{label:"Phone",children:e.jsx(n,{type:"tel",placeholder:"Enter phone number"})}),e.jsx(l,{label:"Role",children:e.jsxs(b,{children:[e.jsx("option",{children:"Select role"}),e.jsx("option",{children:"Admin"}),e.jsx("option",{children:"User"})]})}),e.jsxs("div",{className:"col-span-full flex gap-3 justify-end",children:[e.jsx(a,{emphasis:"secondary",children:"Cancel"}),e.jsx(a,{type:"submit",children:"Submit"})]})]})},c={args:{layout:"4-columns"},render:r=>e.jsxs(o,{...r,children:[e.jsx(l,{label:"First Name",children:e.jsx(n,{placeholder:"First name"})}),e.jsx(l,{label:"Middle Name",children:e.jsx(n,{placeholder:"Middle name"})}),e.jsx(l,{label:"Last Name",children:e.jsx(n,{placeholder:"Last name"})}),e.jsx(l,{label:"Suffix",children:e.jsx(n,{placeholder:"Suffix"})}),e.jsx(l,{label:"Email",children:e.jsx(n,{type:"email",placeholder:"Email"})}),e.jsx(l,{label:"Phone",children:e.jsx(n,{type:"tel",placeholder:"Phone"})}),e.jsx(l,{label:"Department",children:e.jsxs(b,{children:[e.jsx("option",{children:"Select department"}),e.jsx("option",{children:"Engineering"}),e.jsx("option",{children:"Design"}),e.jsx("option",{children:"Sales"})]})}),e.jsx(l,{label:"Role",children:e.jsxs(b,{children:[e.jsx("option",{children:"Select role"}),e.jsx("option",{children:"Manager"}),e.jsx("option",{children:"Employee"})]})}),e.jsxs("div",{className:"col-span-full flex gap-3 justify-end",children:[e.jsx(a,{emphasis:"secondary",children:"Cancel"}),e.jsx(a,{type:"submit",children:"Submit"})]})]})},p={args:{layout:"2-columns"},render:r=>e.jsxs(o,{...r,children:[e.jsx(h,{title:"Personal Information",description:"Enter your personal details",className:"col-span-full",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx(l,{label:"First Name",required:!0,children:e.jsx(n,{placeholder:"Enter first name"})}),e.jsx(l,{label:"Last Name",required:!0,children:e.jsx(n,{placeholder:"Enter last name"})})]})}),e.jsx(h,{title:"Contact Information",description:"How can we reach you?",className:"col-span-full",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsx(l,{label:"Email",required:!0,children:e.jsx(n,{type:"email",placeholder:"Enter email"})}),e.jsx(l,{label:"Phone",children:e.jsx(n,{type:"tel",placeholder:"Enter phone number"})})]})}),e.jsx(l,{label:"Additional Notes",className:"col-span-full",children:e.jsx(D,{placeholder:"Enter any additional information",rows:4})}),e.jsxs("div",{className:"col-span-full flex gap-3 justify-end",children:[e.jsx(a,{emphasis:"secondary",children:"Cancel"}),e.jsx(a,{type:"submit",children:"Submit"})]})]})},u={args:{layout:"1-column"},render:r=>e.jsxs(o,{...r,children:[e.jsx(l,{label:"Username",required:!0,validationState:"invalid",helperText:"Username is already taken",children:e.jsx(n,{defaultValue:"johndoe"})}),e.jsx(l,{label:"Email",required:!0,validationState:"valid",helperText:"Email is available",children:e.jsx(n,{type:"email",defaultValue:"john.doe@example.com"})}),e.jsx(l,{label:"Password",required:!0,helperText:"Must be at least 8 characters",children:e.jsx(n,{type:"password"})}),e.jsxs("div",{className:"flex gap-3 justify-end",children:[e.jsx(a,{emphasis:"secondary",children:"Cancel"}),e.jsx(a,{type:"submit",children:"Submit"})]})]})};var y,f,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    layout: "1-column"
  },
  render: args => <Form {...args}>
            <FormField label="First Name" required>
                <Input placeholder="Enter first name" />
            </FormField>
            <FormField label="Last Name" required>
                <Input placeholder="Enter last name" />
            </FormField>
            <FormField label="Email" validationState="none">
                <Input type="email" placeholder="Enter email" />
            </FormField>
            <FormField label="Phone">
                <Input type="tel" placeholder="Enter phone number" />
            </FormField>
            <div className="flex gap-3 justify-end">
                <Button emphasis="secondary">Cancel</Button>
                <Button type="submit">Submit</Button>
            </div>
        </Form>
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var E,N,S;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    layout: "2-columns"
  },
  render: args => <Form {...args}>
            <FormField label="First Name" required>
                <Input placeholder="Enter first name" />
            </FormField>
            <FormField label="Last Name" required>
                <Input placeholder="Enter last name" />
            </FormField>
            <FormField label="Email">
                <Input type="email" placeholder="Enter email" />
            </FormField>
            <FormField label="Phone">
                <Input type="tel" placeholder="Enter phone number" />
            </FormField>
            <FormField label="Company">
                <Input placeholder="Enter company name" />
            </FormField>
            <FormField label="Job Title">
                <Input placeholder="Enter job title" />
            </FormField>
            <div className="col-span-full flex gap-3 justify-end">
                <Button emphasis="secondary">Cancel</Button>
                <Button type="submit">Submit</Button>
            </div>
        </Form>
}`,...(S=(N=d.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var v,I,q;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    layout: "3-columns"
  },
  render: args => <Form {...args}>
            <FormField label="First Name" required>
                <Input placeholder="Enter first name" />
            </FormField>
            <FormField label="Middle Name">
                <Input placeholder="Enter middle name" />
            </FormField>
            <FormField label="Last Name" required>
                <Input placeholder="Enter last name" />
            </FormField>
            <FormField label="Email">
                <Input type="email" placeholder="Enter email" />
            </FormField>
            <FormField label="Phone">
                <Input type="tel" placeholder="Enter phone number" />
            </FormField>
            <FormField label="Role">
                <Select>
                    <option>Select role</option>
                    <option>Admin</option>
                    <option>User</option>
                </Select>
            </FormField>
            <div className="col-span-full flex gap-3 justify-end">
                <Button emphasis="secondary">Cancel</Button>
                <Button type="submit">Submit</Button>
            </div>
        </Form>
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var B,C,_;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    layout: "4-columns"
  },
  render: args => <Form {...args}>
            <FormField label="First Name">
                <Input placeholder="First name" />
            </FormField>
            <FormField label="Middle Name">
                <Input placeholder="Middle name" />
            </FormField>
            <FormField label="Last Name">
                <Input placeholder="Last name" />
            </FormField>
            <FormField label="Suffix">
                <Input placeholder="Suffix" />
            </FormField>
            <FormField label="Email">
                <Input type="email" placeholder="Email" />
            </FormField>
            <FormField label="Phone">
                <Input type="tel" placeholder="Phone" />
            </FormField>
            <FormField label="Department">
                <Select>
                    <option>Select department</option>
                    <option>Engineering</option>
                    <option>Design</option>
                    <option>Sales</option>
                </Select>
            </FormField>
            <FormField label="Role">
                <Select>
                    <option>Select role</option>
                    <option>Manager</option>
                    <option>Employee</option>
                </Select>
            </FormField>
            <div className="col-span-full flex gap-3 justify-end">
                <Button emphasis="secondary">Cancel</Button>
                <Button type="submit">Submit</Button>
            </div>
        </Form>
}`,...(_=(C=c.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var w,P,T;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    layout: "2-columns"
  },
  render: args => <Form {...args}>
            <FormSection title="Personal Information" description="Enter your personal details" className="col-span-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField label="First Name" required>
                        <Input placeholder="Enter first name" />
                    </FormField>
                    <FormField label="Last Name" required>
                        <Input placeholder="Enter last name" />
                    </FormField>
                </div>
            </FormSection>

            <FormSection title="Contact Information" description="How can we reach you?" className="col-span-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField label="Email" required>
                        <Input type="email" placeholder="Enter email" />
                    </FormField>
                    <FormField label="Phone">
                        <Input type="tel" placeholder="Enter phone number" />
                    </FormField>
                </div>
            </FormSection>

            <FormField label="Additional Notes" className="col-span-full">
                <TextArea placeholder="Enter any additional information" rows={4} />
            </FormField>

            <div className="col-span-full flex gap-3 justify-end">
                <Button emphasis="secondary">Cancel</Button>
                <Button type="submit">Submit</Button>
            </div>
        </Form>
}`,...(T=(P=p.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var L,M,V;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    layout: "1-column"
  },
  render: args => <Form {...args}>
            <FormField label="Username" required validationState="invalid" helperText="Username is already taken">
                <Input defaultValue="johndoe" />
            </FormField>
            <FormField label="Email" required validationState="valid" helperText="Email is available">
                <Input type="email" defaultValue="john.doe@example.com" />
            </FormField>
            <FormField label="Password" required helperText="Must be at least 8 characters">
                <Input type="password" />
            </FormField>
            <div className="flex gap-3 justify-end">
                <Button emphasis="secondary">Cancel</Button>
                <Button type="submit">Submit</Button>
            </div>
        </Form>
}`,...(V=(M=u.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const ne=["OneColumn","TwoColumns","ThreeColumns","FourColumns","WithSections","WithValidation"];export{c as FourColumns,i as OneColumn,m as ThreeColumns,d as TwoColumns,p as WithSections,u as WithValidation,ne as __namedExportsOrder,le as default};
