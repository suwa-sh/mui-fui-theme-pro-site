import{j as e,a as P}from"./iframe-FHSiR_72.js";import{D as c}from"./DiagonalDivider-BGpJkSeS.js";import{u as _,B as x}from"./Box-BRjIJ7f6.js";import{T as M}from"./Typography-rO9oMCrF.js";import"./preload-helper-CaSPg7mi.js";const K={title:"Molecules/DiagonalDivider",component:c,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{direction:{control:"radio",options:["down-right","down-left"],description:"Direction of the diagonal"},height:{control:{type:"number",min:40,max:160,step:10},description:"Height of the divider in pixels"}}},s=({backgroundColor:o,textColor:n,title:t,height:a=200})=>e.jsx(x,{sx:{height:a,backgroundColor:o,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(M,{variant:"h4",sx:{color:n,letterSpacing:"0.1em",fontWeight:500},children:t})}),d=({direction:o="down-right",height:n=80})=>{const a=_().palette.mode,r=P(a),i=a==="dark",D=r.background.default,C=i?r.background.elevated:r.background.paper;return e.jsxs(x,{sx:{minHeight:"100vh"},children:[e.jsx(s,{backgroundColor:D,textColor:r.text.primary,title:"SECTION 1"}),e.jsx(c,{currentSectionColor:D,nextSectionColor:C,direction:o,height:n}),e.jsx(s,{backgroundColor:C,textColor:r.text.primary,title:"SECTION 2"})]})},l={args:{direction:"down-right",height:80},render:o=>e.jsx(d,{direction:o.direction,height:o.height})},m={name:"Direction: Down Right",render:()=>e.jsx(d,{direction:"down-right"})},g={name:"Direction: Down Left",render:()=>e.jsx(d,{direction:"down-left"})},W=()=>{const n=_().palette.mode,t=P(n),a=n==="dark",r=t.background.default,i=a?t.background.elevated:t.background.paper;return e.jsxs(x,{sx:{minHeight:"100vh"},children:[e.jsx(s,{backgroundColor:r,textColor:t.text.primary,title:"SECTION 1",height:150}),e.jsx(c,{currentSectionColor:r,nextSectionColor:i,direction:"down-right"}),e.jsx(s,{backgroundColor:i,textColor:t.text.primary,title:"SECTION 2",height:150}),e.jsx(c,{currentSectionColor:i,nextSectionColor:r,direction:"down-left"}),e.jsx(s,{backgroundColor:r,textColor:t.text.primary,title:"SECTION 3",height:150}),e.jsx(c,{currentSectionColor:r,nextSectionColor:i,direction:"down-right"}),e.jsx(s,{backgroundColor:i,textColor:t.text.primary,title:"SECTION 4",height:150})]})},h={name:"Alternating Sections",render:()=>e.jsx(W,{})},p={name:"Tall Divider (120px)",render:()=>e.jsx(d,{direction:"down-right",height:120})},u={name:"Short Divider (40px)",render:()=>e.jsx(d,{direction:"down-right",height:40})};var S,v,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    direction: 'down-right',
    height: 80
  },
  render: args => <DividerDemo direction={args.direction} height={args.height} />
}`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var f,j,k;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Direction: Down Right',
  render: () => <DividerDemo direction="down-right" />
}`,...(k=(j=m.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var y,T,b;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Direction: Down Left',
  render: () => <DividerDemo direction="down-left" />
}`,...(b=(T=g.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var E,I,O;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Alternating Sections',
  render: () => <AlternatingDemo />
}`,...(O=(I=h.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var A,B,N;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Tall Divider (120px)',
  render: () => <DividerDemo direction="down-right" height={120} />
}`,...(N=(B=p.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var R,L,H;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Short Divider (40px)',
  render: () => <DividerDemo direction="down-right" height={40} />
}`,...(H=(L=u.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};const Q=["Playground","DownRight","DownLeft","Alternating","TallDivider","ShortDivider"];export{h as Alternating,g as DownLeft,m as DownRight,l as Playground,u as ShortDivider,p as TallDivider,Q as __namedExportsOrder,K as default};
