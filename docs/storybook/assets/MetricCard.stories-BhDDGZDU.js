import{j as e,g as s,R as H}from"./iframe-FHSiR_72.js";import{M as c}from"./Memory-C8V1bv5f.js";import{S as w}from"./Storage-D6CMlU5c.js";import{N as j,C as Y}from"./Cloud-CBHkVSSg.js";import{c as K}from"./createSvgIcon-CkzV9ic2.js";import{S as _}from"./Speed-CNOv7tLx.js";import{M as a}from"./MetricCard-l6rPMpkZ.js";import{u as t,B as i}from"./Box-BRjIJ7f6.js";import{S as l}from"./Stack-C6z6OT6q.js";import{T as f}from"./Typography-rO9oMCrF.js";import"./preload-helper-CaSPg7mi.js";import"./ProgressBar--1ldW56n.js";import"./CardContent-D_WzfwKp.js";import"./Paper-DNwThTV9.js";const q=K([e.jsx("path",{d:"M12 5.99 19.53 19H4.47zM12 2 1 21h22z"},"0"),e.jsx("path",{d:"M13 16h-2v2h2zm0-6h-2v5h2z"},"1")]),ue={title:"Molecules/MetricCard",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`
A metric display card with optional "Silence to Awakening" (静寂からの覚醒) hover effect.

## Awakening Pattern
- **\`awakening={false}\`** (default): Traditional static styling with accent colors
- **\`awakening={true}\`**: Gray borders → amber transition on hover with glow effect
- **\`isAlert={true}\`**: Force awakened state (for alerts, thresholds)

The awakening pattern provides visual feedback when users hover over metric cards,
creating a cohesive dashboard experience.
        `}}},argTypes:{percentage:{control:{type:"range",min:0,max:100,step:1}},awakening:{control:"boolean",description:"Enable awakening behavior (gray → amber on hover)"},isAlert:{control:"boolean",description:"Force awakening state (for alerts)"}}},J=()=>{const o=t(),r=s(o.palette.mode);return e.jsx(a,{icon:e.jsx(c,{sx:{color:r.stage1,fontSize:20}}),label:"CPU USAGE",value:"85%",percentage:85,trend:{direction:"up",value:"+5% from last hour"},color:r.stage1})},d={render:()=>e.jsx(J,{})},L=()=>{const o=t(),r=s(o.palette.mode);return e.jsx(a,{icon:e.jsx(w,{sx:{color:r.stage2,fontSize:20}}),label:"MEMORY",value:"12.4 GB",percentage:62,trend:{direction:"down",value:"-2% from last hour"},color:r.stage2})},p={render:()=>e.jsx(L,{})},Q=()=>{const o=t(),r=s(o.palette.mode);return e.jsx(a,{icon:e.jsx(j,{sx:{color:r.stage3,fontSize:20}}),label:"NETWORK",value:"1.2 Gbps",percentage:75,color:r.stage3})},g={render:()=>e.jsx(Q,{})},V=()=>{const o=t(),r=s(o.palette.mode);return e.jsxs(l,{direction:{xs:"column",sm:"row"},spacing:2,flexWrap:"wrap",useFlexGap:!0,children:[e.jsx(a,{icon:e.jsx(c,{sx:{color:r.stage1,fontSize:20}}),label:"CPU USAGE",value:"85%",percentage:85,trend:{direction:"up",value:"+5% from last hour"},color:r.stage1}),e.jsx(a,{icon:e.jsx(w,{sx:{color:r.stage2,fontSize:20}}),label:"MEMORY",value:"12.4 GB",percentage:62,trend:{direction:"down",value:"-2% from last hour"},color:r.stage2}),e.jsx(a,{icon:e.jsx(j,{sx:{color:r.stage3,fontSize:20}}),label:"NETWORK",value:"1.2 Gbps",percentage:75,trend:{direction:"up",value:"+12% from last hour"},color:r.stage3}),e.jsx(a,{icon:e.jsx(Y,{sx:{color:r.stage4,fontSize:20}}),label:"STORAGE",value:"456 GB",percentage:45,trend:{direction:"up",value:"+1% from last hour"},color:r.stage4})]})},m={render:()=>e.jsx(V,{})},X=()=>{const o=t(),r=s(o.palette.mode);return e.jsxs(i,{sx:{display:"flex",flexDirection:"column",gap:3,p:2},children:[e.jsxs(i,{children:[e.jsxs(f,{variant:"caption",sx:{color:"text.secondary",mb:1,display:"block"},children:["awakening=","{false}"," (default) - Static styling"]}),e.jsxs(l,{direction:{xs:"column",sm:"row"},spacing:2,children:[e.jsx(a,{awakening:!1,icon:e.jsx(c,{sx:{color:r.stage1,fontSize:20}}),label:"CPU USAGE",value:"85%",percentage:85,color:r.stage1}),e.jsx(a,{awakening:!1,icon:e.jsx(w,{sx:{color:r.stage2,fontSize:20}}),label:"MEMORY",value:"12.4 GB",percentage:62,color:r.stage2})]})]}),e.jsxs(i,{children:[e.jsxs(f,{variant:"caption",sx:{color:"text.secondary",mb:1,display:"block"},children:["awakening=","{true}"," - Hover to see gray → amber transition"]}),e.jsxs(l,{direction:{xs:"column",sm:"row"},spacing:2,children:[e.jsx(a,{awakening:!0,icon:e.jsx(c,{sx:{fontSize:20}}),label:"CPU USAGE",value:"85%",percentage:85,color:r.stage1}),e.jsx(a,{awakening:!0,icon:e.jsx(w,{sx:{fontSize:20}}),label:"MEMORY",value:"12.4 GB",percentage:62,color:r.stage1})]})]})]})},u={render:()=>e.jsx(X,{}),parameters:{docs:{description:{story:"Comparison between static (default) and awakening behavior. Hover over the awakening cards to see the effect."}}}},Z=()=>{const o=t(),r=s(o.palette.mode);return e.jsxs(l,{direction:{xs:"column",sm:"row"},spacing:2,flexWrap:"wrap",useFlexGap:!0,children:[e.jsxs(i,{sx:{width:240},children:[e.jsx(f,{variant:"caption",sx:{color:"text.secondary",mb:1,display:"block"},children:"Normal (hover for effect)"}),e.jsx(a,{awakening:!0,icon:e.jsx(c,{sx:{fontSize:20}}),label:"MEMORY USAGE",value:"45%",percentage:45,color:r.stage1})]}),e.jsxs(i,{sx:{width:240},children:[e.jsx(f,{variant:"caption",sx:{color:"text.secondary",mb:1,display:"block"},children:"Alert state (always highlighted)"}),e.jsx(a,{awakening:!0,isAlert:!0,icon:e.jsx(q,{sx:{fontSize:20}}),label:"CPU USAGE",value:"85%",percentage:85,trend:{direction:"up",value:"+15% from last hour"},color:r.stage1})]})]})},x={render:()=>e.jsx(Z,{}),parameters:{docs:{description:{story:"Use `isAlert={true}` to force the awakened state. Useful for alerts or threshold warnings."}}}},$=()=>{const o=t(),r=s(o.palette.mode),F=[{icon:e.jsx(_,{}),label:"CPU",value:"85%",percentage:85,isAlert:!0},{icon:e.jsx(c,{}),label:"MEMORY",value:"12.4 GB",percentage:62,isAlert:!1},{icon:e.jsx(j,{}),label:"NETWORK",value:"1.2 Gbps",percentage:75,isAlert:!1},{icon:e.jsx(Y,{}),label:"STORAGE",value:"456 GB",percentage:45,isAlert:!1}];return e.jsx(l,{direction:{xs:"column",sm:"row"},spacing:2,flexWrap:"wrap",useFlexGap:!0,children:F.map(n=>e.jsx(a,{awakening:!0,isAlert:n.isAlert,icon:H.cloneElement(n.icon,{sx:{fontSize:20}}),label:n.label,value:n.value,percentage:n.percentage,color:r.stage1},n.label))})},h={render:()=>e.jsx($,{}),parameters:{docs:{description:{story:"Multiple MetricCards with awakening enabled. CPU card shows alert state (always highlighted)."}}}};var v,b,k;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <BasicCard />
}`,...(k=(b=d.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var A,S,C;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <DownTrendCard />
}`,...(C=(S=p.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var y,G,M;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <NoTrendCard />
}`,...(M=(G=g.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var E,T,z;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <MultipleCards />
}`,...(z=(T=m.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var U,R,D;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <AwakeningComparisonDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Comparison between static (default) and awakening behavior. Hover over the awakening cards to see the effect.'
      }
    }
  }
}`,...(D=(R=u.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var O,B,N;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <AwakeningAlertDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Use \`isAlert={true}\` to force the awakened state. Useful for alerts or threshold warnings.'
      }
    }
  }
}`,...(N=(B=x.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var P,I,W;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <AwakeningGridDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Multiple MetricCards with awakening enabled. CPU card shows alert state (always highlighted).'
      }
    }
  }
}`,...(W=(I=h.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};const xe=["Default","DownTrend","NoTrend","Grid","AwakeningComparison","AwakeningAlert","AwakeningGrid"];export{x as AwakeningAlert,u as AwakeningComparison,h as AwakeningGrid,d as Default,p as DownTrend,m as Grid,g as NoTrend,xe as __namedExportsOrder,ue as default};
