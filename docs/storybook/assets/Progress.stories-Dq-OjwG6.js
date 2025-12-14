import{j as s}from"./iframe-FHSiR_72.js";import{P as I}from"./Progress-C8zbAsIU.js";import{u as w}from"./Box-BRjIJ7f6.js";import"./preload-helper-CaSPg7mi.js";import"./createSvgIcon-CkzV9ic2.js";import"./Typography-rO9oMCrF.js";import"./ListItemText-CnexoWqV.js";import"./useSlot-CAHo_dUM.js";import"./ButtonBase-CXFIVKx4.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./CircularProgress-DklbKsZo.js";const t=e=>{const O=w().palette.mode;return s.jsx(I,{...e,themeMode:O})},J={title:"Molecules/Progress",component:I,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{themeMode:{table:{disable:!0}},total:{control:"number",description:"Total number of items"},completed:{control:"number",description:"Number of completed items"}}},F=[{id:1,label:"Step 1: Initialize",status:"success"},{id:2,label:"Step 2: Process Data",status:"success"},{id:3,label:"Step 3: Validate",status:"processing"},{id:4,label:"Step 4: Save Results",status:"pending"},{id:5,label:"Step 5: Cleanup",status:"pending"}],a={args:{items:F,total:5,completed:2},render:e=>s.jsx(t,{...e})},n={name:"All Status States",args:{items:[{id:1,label:"Completed Task",status:"success"},{id:2,label:"Processing Task",status:"processing"},{id:3,label:"Pending Task",status:"pending"},{id:4,label:"Failed Task",status:"error",error:"Connection timeout after 30s"}],total:4,completed:1},render:e=>s.jsx(t,{...e})},o={name:"Empty State",args:{items:[],total:0,completed:0},render:e=>s.jsx(t,{...e})},l={name:"All Complete",args:{items:[{id:1,label:"Task 1",status:"success"},{id:2,label:"Task 2",status:"success"},{id:3,label:"Task 3",status:"success"}],total:3,completed:3},render:e=>s.jsx(t,{...e})},i={name:"With Links",args:{items:[{id:1,label:"Document 1",status:"success",link:{url:"https://example.com/doc1",label:"Open Document"}},{id:2,label:"Document 2",status:"success",link:{url:"https://example.com/doc2",label:"View in Drive"}},{id:3,label:"Document 3",status:"processing"}],total:3,completed:2},render:e=>s.jsx(t,{...e})},c={name:"Long List (Scrollable)",args:{items:Array.from({length:15},(e,r)=>({id:r+1,label:`Page ${r+1}: ${["Introduction","Overview","Details","Analysis","Summary"][r%5]}`,status:r<8?"success":r===8?"processing":"pending"})),total:15,completed:8},render:e=>s.jsx(t,{...e})},m={name:"With Errors",args:{items:[{id:1,label:"Step 1",status:"success"},{id:2,label:"Step 2",status:"error",error:"Failed to connect to server"},{id:3,label:"Step 3",status:"error",error:"Invalid response format"},{id:4,label:"Step 4",status:"pending"}],total:4,completed:1},render:e=>s.jsx(t,{...e})};var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    total: 5,
    completed: 2
  },
  render: args => <ProgressWithTheme {...args} />
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,b,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'All Status States',
  args: {
    items: [{
      id: 1,
      label: 'Completed Task',
      status: 'success'
    }, {
      id: 2,
      label: 'Processing Task',
      status: 'processing'
    }, {
      id: 3,
      label: 'Pending Task',
      status: 'pending'
    }, {
      id: 4,
      label: 'Failed Task',
      status: 'error',
      error: 'Connection timeout after 30s'
    }],
    total: 4,
    completed: 1
  },
  render: args => <ProgressWithTheme {...args} />
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var S,T,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Empty State',
  args: {
    items: [],
    total: 0,
    completed: 0
  },
  render: args => <ProgressWithTheme {...args} />
}`,...(k=(T=o.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var P,x,W;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'All Complete',
  args: {
    items: [{
      id: 1,
      label: 'Task 1',
      status: 'success'
    }, {
      id: 2,
      label: 'Task 2',
      status: 'success'
    }, {
      id: 3,
      label: 'Task 3',
      status: 'success'
    }],
    total: 3,
    completed: 3
  },
  render: args => <ProgressWithTheme {...args} />
}`,...(W=(x=l.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};var y,D,f;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'With Links',
  args: {
    items: [{
      id: 1,
      label: 'Document 1',
      status: 'success',
      link: {
        url: 'https://example.com/doc1',
        label: 'Open Document'
      }
    }, {
      id: 2,
      label: 'Document 2',
      status: 'success',
      link: {
        url: 'https://example.com/doc2',
        label: 'View in Drive'
      }
    }, {
      id: 3,
      label: 'Document 3',
      status: 'processing'
    }],
    total: 3,
    completed: 2
  },
  render: args => <ProgressWithTheme {...args} />
}`,...(f=(D=i.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var L,v,j;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Long List (Scrollable)',
  args: {
    items: Array.from({
      length: 15
    }, (_, i) => ({
      id: i + 1,
      label: \`Page \${i + 1}: \${['Introduction', 'Overview', 'Details', 'Analysis', 'Summary'][i % 5]}\`,
      status: i < 8 ? 'success' : i === 8 ? 'processing' : 'pending'
    })) as ProgressItem[],
    total: 15,
    completed: 8
  },
  render: args => <ProgressWithTheme {...args} />
}`,...(j=(v=c.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var A,E,C;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'With Errors',
  args: {
    items: [{
      id: 1,
      label: 'Step 1',
      status: 'success'
    }, {
      id: 2,
      label: 'Step 2',
      status: 'error',
      error: 'Failed to connect to server'
    }, {
      id: 3,
      label: 'Step 3',
      status: 'error',
      error: 'Invalid response format'
    }, {
      id: 4,
      label: 'Step 4',
      status: 'pending'
    }],
    total: 4,
    completed: 1
  },
  render: args => <ProgressWithTheme {...args} />
}`,...(C=(E=m.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const K=["Playground","AllStates","Empty","Complete","WithLinks","LongList","WithErrors"];export{n as AllStates,l as Complete,o as Empty,c as LongList,a as Playground,m as WithErrors,i as WithLinks,K as __namedExportsOrder,J as default};
