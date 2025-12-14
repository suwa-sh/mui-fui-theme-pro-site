import{j as a}from"./iframe-FHSiR_72.js";import{C as F}from"./CodeEditor-BbVbH27w.js";import{u as _}from"./Box-BRjIJ7f6.js";import"./preload-helper-CaSPg7mi.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";const{fn:L}=__STORYBOOK_MODULE_TEST__,r=e=>{const H=_().palette.mode;return a.jsx(F,{...e,themeMode:H})},D={title:"Molecules/CodeEditor",component:F,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{language:{control:"select",options:["yaml","json","markdown","plain"],description:"The language for syntax highlighting"},themeMode:{table:{disable:!0}},readOnly:{control:"boolean",description:"If true, the editor is read-only"},height:{control:"text",description:"Height of the editor"},minHeight:{control:"text",description:"Minimum height of the editor"},placeholder:{control:"text",description:"Placeholder text when empty"}},args:{onChange:L()}},P=`# Narration Configuration
narrations:
  - page: 1
    text: "Welcome to the presentation"
    voice: "alloy"
  - page: 2
    text: "Let's dive into the details"
    voice: "echo"
  - page: 3
    text: "Thank you for watching"
    voice: "nova"

settings:
  speed: 1.0
  format: mp3
`,W=`{
  "name": "FUI Theme",
  "version": "0.1.0",
  "description": "Futuristic User Interface theme",
  "features": [
    "Dark mode",
    "Light mode",
    "Glow effects",
    "Sharp edges"
  ],
  "config": {
    "accentColor": "#FFB300",
    "fontFamily": "JetBrains Mono"
  }
}`,I=`# FUI Theme

**Futuristic User Interface Theme** for modern applications.

## Features

- Sharp edges (no border-radius)
- Glow effects in dark mode
- Stage colors for workflow visualization

## Installation

\`\`\`bash
pnpm add @suwa-sh/fui-theme
\`\`\`

## Usage

\`\`\`tsx
import { createFuiTheme } from '@suwa-sh/fui-theme';
\`\`\`
`,n={args:{value:P,language:"yaml",height:"400px",placeholder:"Enter YAML content..."},render:e=>a.jsx(r,{...e})},t={name:"JSON Editor",args:{value:W,language:"json",height:"350px",placeholder:"Enter JSON content..."},render:e=>a.jsx(r,{...e})},o={name:"Markdown Editor",args:{value:I,language:"markdown",height:"450px",placeholder:"Enter Markdown content..."},render:e=>a.jsx(r,{...e})},s={name:"Plain Text",args:{value:`This is plain text without syntax highlighting.
Multiple lines are supported.

You can type anything here.`,language:"plain",height:"200px"},render:e=>a.jsx(r,{...e})},i={name:"Read Only",args:{value:P,language:"yaml",readOnly:!0,height:"300px"},render:e=>a.jsx(r,{...e})},l={name:"Empty with Placeholder",args:{value:"",language:"yaml",height:"200px",placeholder:"Enter your YAML configuration here..."},render:e=>a.jsx(r,{...e})},d={name:"Custom Height",args:{value:W,language:"json",height:"600px",minHeight:"400px"},render:e=>a.jsx(r,{...e})};var g,m,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: sampleYaml,
    language: 'yaml',
    height: '400px',
    placeholder: 'Enter YAML content...'
  },
  render: args => <CodeEditorWithTheme {...args} />
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'JSON Editor',
  args: {
    value: sampleJson,
    language: 'json',
    height: '350px',
    placeholder: 'Enter JSON content...'
  },
  render: args => <CodeEditorWithTheme {...args} />
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,y,E;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Markdown Editor',
  args: {
    value: sampleMarkdown,
    language: 'markdown',
    height: '450px',
    placeholder: 'Enter Markdown content...'
  },
  render: args => <CodeEditorWithTheme {...args} />
}`,...(E=(y=o.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var f,T,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Plain Text',
  args: {
    value: 'This is plain text without syntax highlighting.\\nMultiple lines are supported.\\n\\nYou can type anything here.',
    language: 'plain',
    height: '200px'
  },
  render: args => <CodeEditorWithTheme {...args} />
}`,...(w=(T=s.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var v,M,C;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Read Only',
  args: {
    value: sampleYaml,
    language: 'yaml',
    readOnly: true,
    height: '300px'
  },
  render: args => <CodeEditorWithTheme {...args} />
}`,...(C=(M=i.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var O,S,j;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Empty with Placeholder',
  args: {
    value: '',
    language: 'yaml',
    height: '200px',
    placeholder: 'Enter your YAML configuration here...'
  },
  render: args => <CodeEditorWithTheme {...args} />
}`,...(j=(S=l.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var k,J,Y;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Custom Height',
  args: {
    value: sampleJson,
    language: 'json',
    height: '600px',
    minHeight: '400px'
  },
  render: args => <CodeEditorWithTheme {...args} />
}`,...(Y=(J=d.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};const G=["Playground","JsonEditor","MarkdownEditor","PlainText","ReadOnly","Empty","CustomHeight"];export{d as CustomHeight,l as Empty,t as JsonEditor,o as MarkdownEditor,s as PlainText,n as Playground,i as ReadOnly,G as __namedExportsOrder,D as default};
