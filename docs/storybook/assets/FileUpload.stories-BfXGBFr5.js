import{j as t}from"./iframe-FHSiR_72.js";import{F as I}from"./FileUpload-BbA51W9e.js";import{u as G}from"./Box-BRjIJ7f6.js";import"./preload-helper-CaSPg7mi.js";import"./createSvgIcon-CkzV9ic2.js";import"./Typography-rO9oMCrF.js";import"./Paper-DNwThTV9.js";import"./CircularProgress-DklbKsZo.js";import"./ButtonBase-CXFIVKx4.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";const{fn:J}=__STORYBOOK_MODULE_TEST__,r=e=>{const A=G().palette.mode;return t.jsx(I,{...e,themeMode:A})},Z={title:"Molecules/FileUpload",component:I,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{themeMode:{table:{disable:!0}},accept:{control:"text",description:"Accepted file types (MIME type)"},loading:{control:"boolean",description:"Shows loading state"}},args:{onFileSelect:J()},decorators:[e=>t.jsx("div",{style:{width:"500px"},children:t.jsx(e,{})})]},a={args:{accept:".pdf",acceptExtensions:[".pdf"],labels:{title:"Drag & drop your PDF here",buttonText:"Select PDF File",sizeLimit:"Supports PDF files up to 50MB"}},render:e=>t.jsx(r,{...e})},s={name:"Image Upload",args:{accept:"image/*",acceptExtensions:[".jpg",".jpeg",".png",".gif",".webp"],labels:{title:"Drag & drop your image here",buttonText:"Select Image",sizeLimit:"Supports JPG, PNG, GIF, WebP up to 10MB"}},render:e=>t.jsx(r,{...e})},o={name:"Document Upload",args:{accept:".pdf,.doc,.docx,.txt",acceptExtensions:[".pdf",".doc",".docx",".txt"],labels:{title:"Drag & drop your document here",buttonText:"Select Document",sizeLimit:"Supports PDF, DOC, DOCX, TXT up to 25MB"}},render:e=>t.jsx(r,{...e})},n={name:"Loading State",args:{accept:".pdf",loading:!0,labels:{processingText:"Uploading...",processingSubtitle:"Please wait while we process your file"}},render:e=>t.jsx(r,{...e})},C=new File(["mock content"],"presentation.pdf",{type:"application/pdf"});Object.defineProperty(C,"size",{value:2.5*1024*1024});const i={name:"With Selected File",args:{accept:".pdf",selectedFile:C},render:e=>t.jsx(r,{...e})},_=new File(["large content"],"large-document.pdf",{type:"application/pdf"});Object.defineProperty(_,"size",{value:45.8*1024*1024});const p={name:"Large File Selected",args:{accept:".pdf",selectedFile:_},render:e=>t.jsx(r,{...e})},c={name:"Custom Labels (Japanese)",args:{accept:".pdf",labels:{title:"PDFファイルをドラッグ＆ドロップ",subtitle:"または下のボタンをクリック",buttonText:"ファイルを選択",processingText:"処理中...",processingSubtitle:"ファイルをアップロード中です",sizeLimit:"最大50MBまでのPDFファイルに対応"}},render:e=>t.jsx(r,{...e})},l={name:"Any File Type",args:{accept:"*/*",labels:{title:"Drag & drop any file here",buttonText:"Select File",sizeLimit:"All file types supported"}},render:e=>t.jsx(r,{...e})};var d,m,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    accept: '.pdf',
    acceptExtensions: ['.pdf'],
    labels: {
      title: 'Drag & drop your PDF here',
      buttonText: 'Select PDF File',
      sizeLimit: 'Supports PDF files up to 50MB'
    }
  },
  render: args => <FileUploadWithTheme {...args} />
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,F,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Image Upload',
  args: {
    accept: 'image/*',
    acceptExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
    labels: {
      title: 'Drag & drop your image here',
      buttonText: 'Select Image',
      sizeLimit: 'Supports JPG, PNG, GIF, WebP up to 10MB'
    }
  },
  render: args => <FileUploadWithTheme {...args} />
}`,...(x=(F=s.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var b,h,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Document Upload',
  args: {
    accept: '.pdf,.doc,.docx,.txt',
    acceptExtensions: ['.pdf', '.doc', '.docx', '.txt'],
    labels: {
      title: 'Drag & drop your document here',
      buttonText: 'Select Document',
      sizeLimit: 'Supports PDF, DOC, DOCX, TXT up to 25MB'
    }
  },
  render: args => <FileUploadWithTheme {...args} />
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,T,D;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Loading State',
  args: {
    accept: '.pdf',
    loading: true,
    labels: {
      processingText: 'Uploading...',
      processingSubtitle: 'Please wait while we process your file'
    }
  },
  render: args => <FileUploadWithTheme {...args} />
}`,...(D=(T=n.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var y,P,L;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'With Selected File',
  args: {
    accept: '.pdf',
    selectedFile: mockFile
  },
  render: args => <FileUploadWithTheme {...args} />
}`,...(L=(P=i.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var U,j,W;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Large File Selected',
  args: {
    accept: '.pdf',
    selectedFile: largeFile
  },
  render: args => <FileUploadWithTheme {...args} />
}`,...(W=(j=p.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var M,w,z;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Custom Labels (Japanese)',
  args: {
    accept: '.pdf',
    labels: {
      title: 'PDFファイルをドラッグ＆ドロップ',
      subtitle: 'または下のボタンをクリック',
      buttonText: 'ファイルを選択',
      processingText: '処理中...',
      processingSubtitle: 'ファイルをアップロード中です',
      sizeLimit: '最大50MBまでのPDFファイルに対応'
    }
  },
  render: args => <FileUploadWithTheme {...args} />
}`,...(z=(w=c.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var E,O,B;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Any File Type',
  args: {
    accept: '*/*',
    labels: {
      title: 'Drag & drop any file here',
      buttonText: 'Select File',
      sizeLimit: 'All file types supported'
    }
  },
  render: args => <FileUploadWithTheme {...args} />
}`,...(B=(O=l.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};const $=["Playground","ImageUpload","DocumentUpload","Loading","WithSelectedFile","LargeFile","CustomLabels","AnyFile"];export{l as AnyFile,c as CustomLabels,o as DocumentUpload,s as ImageUpload,p as LargeFile,n as Loading,a as Playground,i as WithSelectedFile,$ as __namedExportsOrder,Z as default};
