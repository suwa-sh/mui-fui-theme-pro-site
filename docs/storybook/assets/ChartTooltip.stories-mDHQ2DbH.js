import{j as e,g as t}from"./iframe-FHSiR_72.js";import{C as a}from"./ChartTooltip-B21NHVLi.js";import{u as s,B as n}from"./Box-BRjIJ7f6.js";import"./preload-helper-CaSPg7mi.js";import"./Typography-rO9oMCrF.js";const w={title:"Atoms/ChartTooltip",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{active:{control:"boolean"},unit:{control:"text"},label:{control:"text"}}},N=()=>{const o=s(),r=t(o.palette.mode);return e.jsx(n,{sx:{p:2,backgroundColor:"background.default"},children:e.jsx(a,{active:!0,payload:[{value:85,name:"CPU Usage",color:r.stage2}],label:"12:00",unit:"%"})})},l={render:()=>e.jsx(N,{})},R=()=>{const o=s(),r=t(o.palette.mode);return e.jsx(n,{sx:{p:2,backgroundColor:"background.default"},children:e.jsx(a,{active:!0,payload:[{value:85,name:"CPU",color:r.stage2},{value:72,name:"Memory",color:r.stage3},{value:45,name:"Disk",color:r.stage1}],label:"12:00",unit:"%"})})},c={render:()=>e.jsx(R,{})},W=()=>{const o=s(),r=t(o.palette.mode),P=(p,I)=>I==="Transfer"?`${p.toFixed(1)} MB/s`:`${p} ops/s`;return e.jsx(n,{sx:{p:2,backgroundColor:"background.default"},children:e.jsx(a,{active:!0,payload:[{value:1024,name:"Read",color:r.stage1},{value:512,name:"Write",color:r.stage4},{value:256.5,name:"Transfer",color:r.stage2}],label:"SSD-01",formatter:P})})},i={render:()=>e.jsx(W,{})},A=()=>{const o=s(),r=t(o.palette.mode);return e.jsx(n,{sx:{p:2,backgroundColor:"background.default"},children:e.jsx(a,{active:!0,payload:[{value:95,name:"Progress",color:r.stage1}],unit:"%"})})},u={render:()=>e.jsx(A,{})},d={args:{active:!1,payload:[{value:50,name:"Test",color:"#00ff00"}],label:"Test Label"}},E=()=>{const o=s(),r=t(o.palette.mode);return e.jsxs(n,{sx:{display:"flex",gap:2,p:2,backgroundColor:"background.default"},children:[e.jsx(a,{active:!0,payload:[{value:1.5,name:"Latency",color:r.stage3}],label:"API Response",unit:"ms"}),e.jsx(a,{active:!0,payload:[{value:2048,name:"Memory",color:r.stage2}],label:"Node-01",unit:" MB"}),e.jsx(a,{active:!0,payload:[{value:99.9,name:"Uptime",color:r.stage1}],label:"Service",unit:"%"})]})},m={render:()=>e.jsx(E,{})};var g,x,b;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <SingleSeriesTooltip />
}`,...(b=(x=l.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var v,f,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <MultipleSeriesTooltip />
}`,...(S=(f=c.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var j,C,T;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <FormattedTooltip />
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var h,y,k;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <NoLabelTooltip />
}`,...(k=(y=u.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var M,U,L;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    active: false,
    payload: [{
      value: 50,
      name: 'Test',
      color: '#00ff00'
    }],
    label: 'Test Label'
  }
}`,...(L=(U=d.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var F,B,D;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <DifferentUnits />
}`,...(D=(B=m.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const z=["SingleSeries","MultipleSeries","CustomFormatter","WithoutLabel","Inactive","VariousUnits"];export{i as CustomFormatter,d as Inactive,c as MultipleSeries,l as SingleSeries,m as VariousUnits,u as WithoutLabel,z as __namedExportsOrder,w as default};
