"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[3474],{51043:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=t(86070),r=t(11100);const s={title:"YAML",slug:"/Sundry/YAML",sidebar_position:4},l="\u6982\u89c8",c={id:"advance/YAML/YAML",title:"YAML",description:"\u4ec0\u4e48\u662f YAML?",source:"@site/docs-java/advance/YAML/YAML.md",sourceDirName:"advance/YAML",slug:"/Sundry/YAML",permalink:"/NitWikit/Java/Sundry/YAML",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/advance/YAML/YAML.md",tags:[],version:"current",lastUpdatedBy:"postyizhan",lastUpdatedAt:172769472e4,sidebarPosition:4,frontMatter:{title:"YAML",slug:"/Sundry/YAML",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Folia",permalink:"/NitWikit/Java/advance/folia"},next:{title:"\u57fa\u7840",permalink:"/NitWikit/Java/advance/YAML/foundation"}},o={},a=[{value:"\u4ec0\u4e48\u662f YAML?",id:"\u4ec0\u4e48\u662f-yaml",level:2},{value:"\u6982\u8981 TL;DR",id:"\u6982\u8981-tldr",level:2}];function d(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"\u6982\u89c8",children:"\u6982\u89c8"})}),"\n",(0,i.jsx)(e.h2,{id:"\u4ec0\u4e48\u662f-yaml",children:"\u4ec0\u4e48\u662f YAML?"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:'YAML \u662f "YAML Ain\'t a Markup Language"(YAML \u4e0d\u662f\u4e00\u79cd\u6807\u8bb0\u8bed\u8a00)\u7684\u9012\u5f52\u7f29\u5199\u3002\u5728\u5f00\u53d1\u7684\u8fd9\u79cd\u8bed\u8a00\u65f6\uff0cYAML \u7684\u610f\u601d\u5176\u5b9e\u662f\uff1a"Yet Another Markup Language"(\u4ecd\u662f\u4e00\u79cd\u6807\u8bb0\u8bed\u8a00)\u3002'}),"\n",(0,i.jsx)(e.p,{children:"YAML \u7684\u8bed\u6cd5\u548c\u5176\u4ed6\u9ad8\u7ea7\u8bed\u8a00\u7c7b\u4f3c\uff0c\u5e76\u4e14\u53ef\u4ee5\u7b80\u5355\u8868\u8fbe\u6e05\u5355\u3001\u6563\u5217\u8868\u3001\u6807\u91cf\u7b49\u6570\u636e\u5f62\u6001\u3002\u5b83\u4f7f\u7528\u7a7a\u767d\u7b26\u53f7\u7f29\u8fdb\u548c\u5927\u91cf\u4f9d\u8d56\u5916\u89c2\u7684\u7279\u8272\uff0c\u7279\u522b\u9002\u5408\u7528\u6765\u8868\u8fbe\u6216\u7f16\u8f91\u6570\u636e\u7ed3\u6784\u3001\u5404\u79cd\u914d\u7f6e\u6587\u4ef6\u3001\u8c03\u8bd5\u5185\u5bb9\u3001\u6587\u4ef6\u5927\u7eb2(\u4f8b\u5982\uff1a\u8bb8\u591a\u7535\u5b50\u90ae\u4ef6\u6807\u9898\u683c\u5f0f\u548c YAML \u975e\u5e38\u63a5\u8fd1)\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["YAML \u7684\u914d\u7f6e\u6587\u4ef6\u540e\u7f00\u4e3a ",(0,i.jsx)(e.em,{children:".yml"})," \u6216\u8005 ",(0,i.jsx)(e.em,{children:".yaml"})," \uff0c\u5982\uff1a",(0,i.jsx)(e.code,{children:"config.yml"})," \u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Minecraft \u670d\u52a1\u5668\u7528\u5230\u7684 YAML \u8bed\u6cd5\u90fd\u662f\u975e\u5e38\u975e\u5e38\u57fa\u7840\u7684\uff0c\u53ea\u8981\u4e86\u89e3\u4e00\u4e0b\u5c31\u53ef\u4ee5\u3002(\u751a\u81f3\u770b\u770b\u914d\u7f6e\u6587\u4ef6\u5c31\u660e\u767d\u4e86)"}),"\n",(0,i.jsx)(e.h2,{id:"\u6982\u8981-tldr",children:"\u6982\u8981 TL;DR"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5927\u5c0f\u5199\u654f\u611f"}),"\n",(0,i.jsx)(e.li,{children:"\u4f7f\u7528\u7f29\u8fdb\u8868\u793a\u5c42\u7ea7\u5173\u7cfb"}),"\n",(0,i.jsxs)(e.li,{children:["\u7f29\u8fdb\u4e0d\u5141\u8bb8\u4f7f\u7528 ",(0,i.jsx)(e.strong,{children:"TAB"})," \uff0c\u53ea\u5141\u8bb8",(0,i.jsx)(e.strong,{children:"\u7a7a\u683c"})]}),"\n",(0,i.jsx)(e.li,{children:"\u7f29\u8fdb\u7684\u7a7a\u683c\u6570\u4e0d\u91cd\u8981\uff0c\u53ea\u8981\u76f8\u540c\u5c42\u7ea7\u7684\u5143\u7d20\u5de6\u5bf9\u9f50\u5373\u53ef"}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"#"})," \u8868\u793a\u6ce8\u91ca"]}),"\n",(0,i.jsx)(e.li,{children:"\u5192\u53f7\u540e\u9762\u6709\u7a7a\u683c"}),"\n",(0,i.jsx)(e.li,{children:"\u5b57\u7b26\u4e32\u8981\u52a0\u5355\u5f15\u53f7\u6216\u53cc\u5f15\u53f7"}),"\n"]}),"\n",(0,i.jsxs)(e.admonition,{type:"info",children:[(0,i.jsx)(e.p,{children:"\u5728\u4e0d\u6d89\u53ca\u8f6c\u4e49\u5b57\u7b26 (\u5f62\u5982 \\n\uff0c \\r) \u65f6\uff0c\u5355\u53cc\u5f15\u53f7\u7b49\u4ef7\u3002"}),(0,i.jsx)(e.p,{children:"\u5728\u90e8\u5206\u7279\u6b8a\u60c5\u51b5\uff0c\u5b57\u7b26\u4e32\u4e0d\u9700\u8981\u52a0\u5f15\u53f7\uff0c\u4ecd\u7136\u5efa\u8bae\u4f7f\u7528\u5f15\u53f7\u6765\u51cf\u5c0f\u6b67\u4e49\u3002"})]}),"\n",(0,i.jsxs)(e.admonition,{type:"info",children:[(0,i.jsxs)(e.p,{children:["\u6709\u53ef\u80fd\u4f60\u7684\u6587\u672c\u7f16\u8f91\u5668\u7528\u7684\u7f29\u8fdb\u4e0d\u662f",(0,i.jsx)(e.strong,{children:"\u7a7a\u683c"}),"\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u63d2\u4ef6\u62a5\u9519\u3002"]}),(0,i.jsx)(e.p,{children:"\u81ea\u5df1\u5728\u6587\u672c\u7f16\u8f91\u5668\u627e\u627e\u6216\u8005\u6d4f\u89c8\u5668\u641c\u4e0b\u600e\u4e48\u6539\u3002"})]}),"\n",(0,i.jsx)(e.h1,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://www.runoob.com/w3cnote/yaml-intro.html",children:"https://www.runoob.com/w3cnote/yaml-intro.html"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://www.cnblogs.com/AcAc-t/p/yaml_anchor_refer.html",children:"https://www.cnblogs.com/AcAc-t/p/yaml_anchor_refer.html"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://curder.github.io/yaml-study/guide/quote.html",children:"https://curder.github.io/yaml-study/guide/quote.html"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://zhuanlan.zhihu.com/p/145173920",children:"https://zhuanlan.zhihu.com/p/145173920"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://zhuanlan.zhihu.com/p/616843858",children:"https://zhuanlan.zhihu.com/p/616843858"})})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},11100:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var i=t(30758);const r={},s=i.createContext(r);function l(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);