import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-Dz3UJJSw.js";import{c as F}from"./index-Dp3B9jqt.js";import{c as a}from"./clsx-B-dksMZM.js";import{B as d}from"./Button-CZgY2kMk.js";import"./_commonjsHelpers-CqkleIqs.js";const H=F("flex items-start gap-3 p-4 bg-bg-canvas border-l-4 rounded-sm shadow-1",{variants:{variant:{info:"border-l-blue-50",attention:"border-l-yellow-40",error:"border-l-red-50",success:"border-l-green-30"}},defaultVariants:{variant:"info"}}),K=c.forwardRef(function({className:r,variant:t,children:o,onDismiss:i,...Y},q){return n.jsxs("div",{ref:q,role:"alert",className:a(H({variant:t}),r),...Y,children:[n.jsx(O,{variant:t}),n.jsx("div",{className:"flex-1 flex items-start gap-3",children:o})]})});function O({variant:s}){const r={info:"text-state-info",attention:"text-state-warn",error:"text-state-danger",success:"text-state-success"}[s||"info"];return s==="info"?n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",className:a("shrink-0 mt-0.5",r),children:[n.jsx("circle",{cx:"10",cy:"10",r:"9",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),n.jsx("path",{d:"M10 6v4M10 13v1",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}):s==="attention"?n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",className:a("shrink-0 mt-0.5",r),children:[n.jsx("path",{d:"M9.134 2.5a1 1 0 011.732 0l7.5 13A1 1 0 0117.5 17h-15a1 1 0 01-.866-1.5l7.5-13z",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),n.jsx("path",{d:"M10 7v4M10 14v1",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}):s==="error"?n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",className:a("shrink-0 mt-0.5",r),children:[n.jsx("circle",{cx:"10",cy:"10",r:"9",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),n.jsx("path",{d:"M7 7l6 6M13 7l-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}):s==="success"?n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",className:a("shrink-0 mt-0.5",r),children:[n.jsx("circle",{cx:"10",cy:"10",r:"9",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),n.jsx("path",{d:"M6 10l3 3 5-6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}):null}const G=c.forwardRef(function({className:r,children:t,...o},i){return n.jsx("div",{ref:i,className:a("flex-1",r),...o,children:t})}),J=c.forwardRef(function({className:r,children:t,...o},i){return n.jsx("div",{ref:i,className:a("text-sm font-semibold text-fg-default",r),...o,children:t})}),Q=c.forwardRef(function({className:r,children:t,...o},i){return n.jsx("div",{ref:i,className:a("text-sm text-fg-default mt-1",r),...o,children:t})}),X=c.forwardRef(function({className:r,children:t,...o},i){return n.jsx("div",{ref:i,className:a("shrink-0",r),...o,children:t})}),Z=c.forwardRef(function({className:r,...t},o){return n.jsx("button",{ref:o,type:"button","aria-label":"Dismiss",className:a("shrink-0 p-1 -mr-1 text-fg-secondary hover:text-fg-default rounded","focus:outline-none focus:ring-2 focus:ring-border-focus",r),...t,children:n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",children:n.jsx("path",{d:"M4 4l8 8M12 4l-8 8",strokeWidth:"2",strokeLinecap:"round"})})})}),e=Object.assign(K,{Content:G,Title:J,Body:Q,Action:X,Dismiss:Z});try{e.displayName="Banner",e.__docgenInfo={description:"",displayName:"Banner",props:{onDismiss:{defaultValue:null,description:"",name:"onDismiss",required:!1,type:{name:"(() => void)"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"success" | "info" | "attention" | "error" | null'}}}}}catch{}const on={title:"Components/Banner",component:e,parameters:{layout:"padded"},tags:["autodocs"]},l={render:()=>n.jsxs(e,{variant:"info",children:[n.jsxs(e.Content,{children:[n.jsx(e.Title,{children:"Short Summary of What the User Needs to Know"}),n.jsx(e.Body,{children:"Additional information and, optionally, any next steps the user should expect."})]}),n.jsx(e.Action,{children:n.jsx(d,{size:"sm",emphasis:"secondary",children:"Verb"})}),n.jsx(e.Dismiss,{})]})},u={render:()=>n.jsxs(e,{variant:"attention",children:[n.jsxs(e.Content,{children:[n.jsx(e.Title,{children:"Short Summary of What the User Needs to Do"}),n.jsx(e.Body,{children:"Details of the warning. [Solutions and an optional link to the support site]."})]}),n.jsx(e.Action,{children:n.jsx(d,{size:"sm",emphasis:"secondary",children:"Verb"})}),n.jsx(e.Dismiss,{})]})},m={render:()=>n.jsxs(e,{variant:"error",children:[n.jsxs(e.Content,{children:[n.jsx(e.Title,{children:"Short Summary of the Issue"}),n.jsx(e.Body,{children:"[Double-check / Try] [solutions and an optional link to the support site]."})]}),n.jsx(e.Action,{children:n.jsx(d,{size:"sm",emphasis:"secondary",children:"Verb"})}),n.jsx(e.Dismiss,{})]})},h={render:()=>n.jsxs(e,{variant:"success",children:[n.jsxs(e.Content,{children:[n.jsx(e.Title,{children:"Action Completed Successfully"}),n.jsx(e.Body,{children:"Your changes have been saved and are now active."})]}),n.jsx(e.Dismiss,{})]})},B={render:()=>n.jsxs(e,{variant:"attention",children:[n.jsxs(e.Content,{children:[n.jsx(e.Title,{children:"Configure Your Financial Health"}),n.jsx(e.Body,{children:"Soon, we will permanently remove the permissions configurations from this page. To manage permissions going forward, use our new Permissions tool, which you can find in the Company Tools menu."})]}),n.jsx(e.Action,{children:n.jsx(d,{size:"sm",emphasis:"secondary",children:"Configure"})}),n.jsx(e.Dismiss,{})]})},p={render:()=>n.jsxs(e,{variant:"error",children:[n.jsxs(e.Content,{children:[n.jsx(e.Title,{children:"We Couldn't Upload Some of Your Files"}),n.jsx(e.Body,{children:"Sorry, some errors prevented us from uploading your files."})]}),n.jsx(e.Action,{children:n.jsx(d,{size:"sm",emphasis:"secondary",children:"Show Details"})}),n.jsx(e.Dismiss,{})]})},f={render:()=>n.jsxs(e,{variant:"info",children:[n.jsxs(e.Content,{children:[n.jsx(e.Title,{children:"System Maintenance Scheduled"}),n.jsx(e.Body,{children:"We will be performing scheduled maintenance on Sunday from 2:00 AM to 4:00 AM PST."})]}),n.jsx(e.Dismiss,{})]})},x={render:()=>n.jsxs(e,{variant:"attention",children:[n.jsxs(e.Content,{children:[n.jsx(e.Title,{children:"Action Required"}),n.jsx(e.Body,{children:"Please update your payment information to continue using the service."})]}),n.jsx(e.Action,{children:n.jsx(d,{size:"sm",emphasis:"secondary",children:"Update"})})]})};var y,j,g;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Banner variant="info">
            <Banner.Content>
                <Banner.Title>Short Summary of What the User Needs to Know</Banner.Title>
                <Banner.Body>
                    Additional information and, optionally, any next steps the user should expect.
                </Banner.Body>
            </Banner.Content>
            <Banner.Action>
                <Button size="sm" emphasis="secondary">
                    Verb
                </Button>
            </Banner.Action>
            <Banner.Dismiss />
        </Banner>
}`,...(g=(j=l.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var C,v,S;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Banner variant="attention">
            <Banner.Content>
                <Banner.Title>Short Summary of What the User Needs to Do</Banner.Title>
                <Banner.Body>
                    Details of the warning. [Solutions and an optional link to the support site].
                </Banner.Body>
            </Banner.Content>
            <Banner.Action>
                <Button size="sm" emphasis="secondary">
                    Verb
                </Button>
            </Banner.Action>
            <Banner.Dismiss />
        </Banner>
}`,...(S=(v=u.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var w,k,A;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Banner variant="error">
            <Banner.Content>
                <Banner.Title>Short Summary of the Issue</Banner.Title>
                <Banner.Body>
                    [Double-check / Try] [solutions and an optional link to the support site].
                </Banner.Body>
            </Banner.Content>
            <Banner.Action>
                <Button size="sm" emphasis="secondary">
                    Verb
                </Button>
            </Banner.Action>
            <Banner.Dismiss />
        </Banner>
}`,...(A=(k=m.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var T,D,b;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Banner variant="success">
            <Banner.Content>
                <Banner.Title>Action Completed Successfully</Banner.Title>
                <Banner.Body>
                    Your changes have been saved and are now active.
                </Banner.Body>
            </Banner.Content>
            <Banner.Dismiss />
        </Banner>
}`,...(b=(D=h.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var W,N,M;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Banner variant="attention">
            <Banner.Content>
                <Banner.Title>Configure Your Financial Health</Banner.Title>
                <Banner.Body>
                    Soon, we will permanently remove the permissions configurations from this page. To manage
                    permissions going forward, use our new Permissions tool, which you can find in the Company
                    Tools menu.
                </Banner.Body>
            </Banner.Content>
            <Banner.Action>
                <Button size="sm" emphasis="secondary">
                    Configure
                </Button>
            </Banner.Action>
            <Banner.Dismiss />
        </Banner>
}`,...(M=(N=B.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var z,R,_;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Banner variant="error">
            <Banner.Content>
                <Banner.Title>We Couldn't Upload Some of Your Files</Banner.Title>
                <Banner.Body>Sorry, some errors prevented us from uploading your files.</Banner.Body>
            </Banner.Content>
            <Banner.Action>
                <Button size="sm" emphasis="secondary">
                    Show Details
                </Button>
            </Banner.Action>
            <Banner.Dismiss />
        </Banner>
}`,...(_=(R=p.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var V,L,U;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Banner variant="info">
            <Banner.Content>
                <Banner.Title>System Maintenance Scheduled</Banner.Title>
                <Banner.Body>
                    We will be performing scheduled maintenance on Sunday from 2:00 AM to 4:00 AM PST.
                </Banner.Body>
            </Banner.Content>
            <Banner.Dismiss />
        </Banner>
}`,...(U=(L=f.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var E,I,P;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Banner variant="attention">
            <Banner.Content>
                <Banner.Title>Action Required</Banner.Title>
                <Banner.Body>
                    Please update your payment information to continue using the service.
                </Banner.Body>
            </Banner.Content>
            <Banner.Action>
                <Button size="sm" emphasis="secondary">
                    Update
                </Button>
            </Banner.Action>
        </Banner>
}`,...(P=(I=x.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const an=["Info","Attention","Error","Success","WithLongContent","ErrorWithDetails","WithoutAction","WithoutDismiss"];export{u as Attention,m as Error,p as ErrorWithDetails,l as Info,h as Success,B as WithLongContent,f as WithoutAction,x as WithoutDismiss,an as __namedExportsOrder,on as default};
