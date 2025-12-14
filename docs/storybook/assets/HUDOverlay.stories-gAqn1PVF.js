import{j as e,a as v}from"./iframe-FHSiR_72.js";import{H as j}from"./HUDOverlay-D6mo_CaK.js";import{u as T,B as m}from"./Box-BRjIJ7f6.js";import{T as h}from"./Typography-rO9oMCrF.js";import"./preload-helper-CaSPg7mi.js";const W={title:"Molecules/HUDOverlay",component:j,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{color:{control:"color",description:"Primary color for the HUD elements"},isDark:{control:"boolean",description:"Whether dark mode is enabled (only renders in dark mode)"},showScanLine:{control:"boolean",description:"Show scan line animation"},showCornerMarkers:{control:"boolean",description:"Show corner markers"},showGrid:{control:"boolean",description:"Show grid overlay"},gridSize:{control:{type:"number",min:20,max:120,step:10},description:"Grid size in pixels"},scanLineDuration:{control:{type:"number",min:2,max:12,step:1},description:"Scan line animation duration in seconds"}}},o=({showScanLine:r=!0,showCornerMarkers:z=!0,showGrid:H=!0,gridSize:b=60,scanLineDuration:U=6})=>{const d=T().palette.mode,n=v(d),l=d==="dark";return e.jsxs(m,{sx:{position:"relative",height:"100vh",backgroundColor:n.background.default,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:[e.jsx(j,{color:n.text.accent,isDark:l,showScanLine:r,showCornerMarkers:z,showGrid:H,gridSize:b,scanLineDuration:U}),e.jsxs(m,{sx:{textAlign:"center",zIndex:5},children:[e.jsx(h,{variant:"h2",sx:{color:n.text.accent,fontWeight:700,letterSpacing:"0.2em",textShadow:l?`0 0 20px ${n.text.accent}`:"none"},children:"HUD OVERLAY"}),e.jsx(h,{variant:"body2",sx:{color:n.text.secondary,mt:2,letterSpacing:"0.1em"},children:"// Scan line, corner markers, and grid overlay"})]})]})},s={args:{showScanLine:!0,showCornerMarkers:!0,showGrid:!0,gridSize:60,scanLineDuration:6},render:r=>e.jsx(o,{showScanLine:r.showScanLine,showCornerMarkers:r.showCornerMarkers,showGrid:r.showGrid,gridSize:r.gridSize,scanLineDuration:r.scanLineDuration})},a={name:"Scan Line Only",render:()=>e.jsx(o,{showScanLine:!0,showCornerMarkers:!1,showGrid:!1})},i={name:"Corner Markers Only",render:()=>e.jsx(o,{showScanLine:!1,showCornerMarkers:!0,showGrid:!1})},t={name:"Grid Only",render:()=>e.jsx(o,{showScanLine:!1,showCornerMarkers:!1,showGrid:!0})},c={name:"Dense Grid",render:()=>e.jsx(o,{showScanLine:!0,showCornerMarkers:!0,showGrid:!0,gridSize:30})};var u,p,w;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    showScanLine: true,
    showCornerMarkers: true,
    showGrid: true,
    gridSize: 60,
    scanLineDuration: 6
  },
  render: args => <HUDDemo showScanLine={args.showScanLine} showCornerMarkers={args.showCornerMarkers} showGrid={args.showGrid} gridSize={args.gridSize} scanLineDuration={args.scanLineDuration} />
}`,...(w=(p=s.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var S,g,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Scan Line Only',
  render: () => <HUDDemo showScanLine={true} showCornerMarkers={false} showGrid={false} />
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,D,L;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Corner Markers Only',
  render: () => <HUDDemo showScanLine={false} showCornerMarkers={true} showGrid={false} />
}`,...(L=(D=i.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var k,f,G;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Grid Only',
  render: () => <HUDDemo showScanLine={false} showCornerMarkers={false} showGrid={true} />
}`,...(G=(f=t.parameters)==null?void 0:f.docs)==null?void 0:G.source}}};var C,M,O;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Dense Grid',
  render: () => <HUDDemo showScanLine={true} showCornerMarkers={true} showGrid={true} gridSize={30} />
}`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const _=["Playground","ScanLineOnly","CornersOnly","GridOnly","DenseGrid"];export{i as CornersOnly,c as DenseGrid,t as GridOnly,s as Playground,a as ScanLineOnly,_ as __namedExportsOrder,W as default};
