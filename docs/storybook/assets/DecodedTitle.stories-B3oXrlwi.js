import{j as e,a as h,b as f,R as H}from"./iframe-CaydQ_kE.js";import{D as i}from"./DecodedTitle-DuAZQg4v.js";import{u as y,B as l}from"./Box-DhaEmPq3.js";import"./preload-helper-CaSPg7mi.js";import"./Typography-CmUh-s7f.js";const ne={title:"Molecules/DecodedTitle",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{line1:{control:"text",description:"First line of the title"},line2:{control:"text",description:"Second line of the title (optional)"},color:{control:"color",description:"Primary color for the title text"},isDark:{control:"boolean",description:"Whether dark mode is enabled"},line1Delay:{control:{type:"number",min:0,max:2e3,step:100},description:"Delay before line1 decode starts (ms)"},line2Delay:{control:{type:"number",min:0,max:3e3,step:100},description:"Delay before line2 decode starts (ms)"},duration:{control:{type:"number",min:500,max:5e3,step:100},description:"Duration of each line decode animation (ms)"},showCursor:{control:"boolean",description:"Show cursor during decode"}}},c=({line1:t="AUTONOMOUS",line2:r="INTELLIGENCE",line1Delay:o=500,line2Delay:n=1200,duration:s=1500,showCursor:T=!0})=>{const a=y().palette.mode,S=h(a),$=f(a),q=a==="dark";return e.jsx(l,{sx:{p:8,backgroundColor:S.background.default,minWidth:600,display:"flex",justifyContent:"center"},children:e.jsx(i,{line1:t,line2:r,color:S.text.accent,glowEffect:$.text,isDark:q,line1Delay:o,line2Delay:n,duration:s,showCursor:T})})},d={args:{line1:"AUTONOMOUS",line2:"INTELLIGENCE",line1Delay:500,line2Delay:1200,duration:1500,showCursor:!0},render:t=>e.jsx(c,{line1:t.line1,line2:t.line2,line1Delay:t.line1Delay,line2Delay:t.line2Delay,duration:t.duration,showCursor:t.showCursor})},m={name:"Single Line",render:()=>{const r=y().palette.mode,o=h(r),n=f(r),s=r==="dark";return e.jsx(l,{sx:{p:8,backgroundColor:o.background.default,minWidth:500},children:e.jsx(i,{line1:"INITIALIZING",color:o.text.accent,glowEffect:n.text,isDark:s})})}},u={name:"Fast Decode (500ms)",render:()=>e.jsx(c,{line1:"FAST",line2:"DECODE",line1Delay:200,line2Delay:500,duration:500})},p={name:"Slow Decode (3000ms)",render:()=>e.jsx(c,{line1:"SLOW",line2:"DECODE",line1Delay:500,line2Delay:2500,duration:3e3})},D={name:"Without Cursor",render:()=>e.jsx(c,{line1:"NO CURSOR",line2:"MODE",showCursor:!1})},x={name:"Long Text",render:()=>e.jsx(c,{line1:"QUANTUM COMPUTING",line2:"NEURAL NETWORK",duration:2e3})},J=()=>{const r=y().palette.mode,o=h(r),n=f(r),s=r==="dark";return e.jsx(l,{sx:{p:8,backgroundColor:o.background.default,minWidth:400},children:e.jsx(i,{line1:"COMPACT",line2:"TITLE",color:o.text.accent,glowEffect:n.text,isDark:s,fontSize:{xs:"1.5rem",sm:"2rem",md:"2.5rem"}})})},g={name:"Custom Font Size",render:()=>e.jsx(J,{})},V=()=>{const r=y().palette.mode,o=h(r),n=f(r),s=r==="dark",[T,E]=H.useState(0);return e.jsxs(l,{sx:{p:8,backgroundColor:o.background.default,textAlign:"center"},children:[e.jsx(i,{line1:"CLICK BUTTON",line2:"TO REPLAY",color:o.text.accent,glowEffect:n.text,isDark:s},T),e.jsx(l,{component:"button",onClick:()=>E(a=>a+1),sx:{mt:4,px:4,py:1.5,backgroundColor:"transparent",border:`1px solid ${o.text.accent}`,color:o.text.accent,cursor:"pointer",letterSpacing:"0.1em",fontSize:"0.875rem",transition:"all 0.2s","&:hover":{backgroundColor:o.text.accent,color:o.background.default}},children:"REPLAY ANIMATION"})]})},C={name:"Replay Animation",render:()=>e.jsx(V,{})};var O,k,N;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    line1: 'AUTONOMOUS',
    line2: 'INTELLIGENCE',
    line1Delay: 500,
    line2Delay: 1200,
    duration: 1500,
    showCursor: true
  },
  render: args => <TitleDemo line1={args.line1} line2={args.line2} line1Delay={args.line1Delay} line2Delay={args.line2Delay} duration={args.duration} showCursor={args.showCursor} />
}`,...(N=(k=d.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var w,b,L;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Single Line',
  render: () => {
    const theme = useTheme();
    const mode = theme.palette.mode as ThemeMode;
    const themeColors = getThemeColors(mode);
    const glowEffects = getGlowEffects(mode);
    const isDark = mode === 'dark';
    return <Box sx={{
      p: 8,
      backgroundColor: themeColors.background.default,
      minWidth: 500
    }}>
        <DecodedTitle line1="INITIALIZING" color={themeColors.text.accent} glowEffect={glowEffects.text} isDark={isDark} />
      </Box>;
  }
}`,...(L=(b=m.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var I,A,j;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Fast Decode (500ms)',
  render: () => <TitleDemo line1="FAST" line2="DECODE" line1Delay={200} line2Delay={500} duration={500} />
}`,...(j=(A=u.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var R,U,F;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Slow Decode (3000ms)',
  render: () => <TitleDemo line1="SLOW" line2="DECODE" line1Delay={500} line2Delay={2500} duration={3000} />
}`,...(F=(U=p.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var M,W,G;D.parameters={...D.parameters,docs:{...(M=D.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Without Cursor',
  render: () => <TitleDemo line1="NO CURSOR" line2="MODE" showCursor={false} />
}`,...(G=(W=D.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var P,z,B;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Long Text',
  render: () => <TitleDemo line1="QUANTUM COMPUTING" line2="NEURAL NETWORK" duration={2000} />
}`,...(B=(z=x.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var K,Q,Y;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Custom Font Size',
  render: () => <CustomFontDemo />
}`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,_,v;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Replay Animation',
  render: () => <ReplayDemo />
}`,...(v=(_=C.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const se=["Playground","SingleLine","FastDecode","SlowDecode","NoCursor","LongText","CustomFontSize","ReplayAnimation"];export{g as CustomFontSize,u as FastDecode,x as LongText,D as NoCursor,d as Playground,C as ReplayAnimation,m as SingleLine,p as SlowDecode,se as __namedExportsOrder,ne as default};
