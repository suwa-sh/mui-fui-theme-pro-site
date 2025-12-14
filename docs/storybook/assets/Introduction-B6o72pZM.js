import{j as e}from"./iframe-FHSiR_72.js";import{useMDXComponents as r}from"./index-BS0ysq5D.js";import{M as h}from"./blocks-DU92Z1VV.js";import"./preload-helper-CaSPg7mi.js";import"./index-CO0np7HV.js";import"./index-DLsnSzSC.js";import"./index-10Bd16Ou.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(h,{title:"Docs/Introduction"}),`
`,e.jsx(n.h1,{id:"fui-theme-pro",children:"FUI Theme Pro"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"FUI Theme Pro"})," は、",e.jsx(n.a,{href:"https://suwa-sh.github.io/mui-fui-theme/",rel:"nofollow",children:"mui-fui-theme"})," をベースとした高度なコンポーネントパッケージです。"]}),`
`,e.jsx(n.h2,{id:"概要",children:"概要"}),`
`,e.jsx(n.p,{children:"このパッケージは、ナビゲーション、ダッシュボード、チャートなどの高度なコンポーネントを提供します。"}),`
`,e.jsx(n.h3,{id:"pro版で提供されるコンポーネント",children:"Pro版で提供されるコンポーネント"}),`
`,e.jsx(n.h4,{id:"navigation",children:"Navigation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sidebar"})," - サイドバーナビゲーション"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SidebarLogo"})," - サイドバーロゴ"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"NavMenuGroup"})," - ナビゲーションメニューグループ"]}),`
`]}),`
`,e.jsx(n.h4,{id:"dashboard",children:"Dashboard"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"MetricCard"})," - メトリクスカード"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"FuiTable"})," - データテーブル"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"HeatmapLegend"})," - ヒートマップ凡例"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"HUDOverlay"})," - HUDオーバーレイ"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"VisualPanel"})," - ビジュアルパネル"]}),`
`]}),`
`,e.jsx(n.h4,{id:"charts-recharts-ベース",children:"Charts (recharts ベース)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"FuiAreaChart"})," - エリアチャート"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"FuiBarChart"})," - バーチャート"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"FuiRadarChart"})," - レーダーチャート"]}),`
`]}),`
`,e.jsx(n.h2,{id:"インストール",children:"インストール"}),`
`,e.jsx(n.p,{children:"このパッケージは配布zipからインストールします。"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"packages/fui-theme"})," をプロジェクトにコピー:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`cp -r packages/fui-theme your-project/packages/fui-theme-pro
`})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"package.json"})," に追加:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "dependencies": {
    "@suwa-sh/mui-fui-theme-pro": "file:./packages/fui-theme-pro"
  }
}
`})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{children:"依存パッケージをインストール:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm add @suwa-sh/mui-fui-theme recharts react-simple-maps
pnpm install
`})}),`
`,e.jsx(n.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createFuiTheme } from '@suwa-sh/mui-fui-theme';
import { Sidebar, MetricCard, FuiAreaChart } from '@suwa-sh/mui-fui-theme-pro';

function App() {
  const theme = createFuiTheme('dark');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sidebar items={menuItems} />
      <MetricCard title="Users" value={1234} />
      <FuiAreaChart data={chartData} />
    </ThemeProvider>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"ベースパッケージのドキュメント",children:"ベースパッケージのドキュメント"}),`
`,e.jsx(n.p,{children:"テーマ、カラー、基本コンポーネントについては、OSS版のドキュメントを参照してください："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://suwa-sh.github.io/mui-fui-theme/",rel:"nofollow",children:"mui-fui-theme ドキュメント"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://suwa-sh.github.io/mui-fui-theme/storybook/?path=/docs/docs-introduction--docs",rel:"nofollow",children:"Introduction"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://suwa-sh.github.io/mui-fui-theme/storybook/?path=/docs/docs-design-principles--docs",rel:"nofollow",children:"Design Principles"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://suwa-sh.github.io/mui-fui-theme/storybook/?path=/docs/docs-color-guidelines--docs",rel:"nofollow",children:"Color Guidelines"})}),`
`]}),`
`,e.jsx(n.h2,{id:"次のステップ",children:"次のステップ"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/?path=/docs/molecules-metriccard--docs",children:"Molecules"})," を探索する"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/?path=/docs/organisms-sidebar--docs",children:"Organisms"})," を探索する"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/?path=/docs/pages-dashboard-example--docs",children:"Pages"})," でサンプルを確認する"]}),`
`]})]})}function x(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default};
