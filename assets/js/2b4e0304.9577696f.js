"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[6769],{72091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"advance/advance","title":"\u8fdb\u9636\u6559\u7a0b","description":"\u8fd9\u4e00\u90e8\u5206\u5e76\u4e0d\u9002\u5408\u65b0\u624b\u9605\u8bfb\uff0c\u4e3b\u8981\u662f\u7ed9\u6709\u4e00\u5b9a\u5f00\u670d\u7ecf\u9a8c\u6216\u8bfb\u5b8c\u4e86\u672c\u6587\u6863\u7684\u5176\u4ed6\u5185\u5bb9\u7684\u4eba\u3002","source":"@site/docs-java/advance/advance.md","sourceDirName":"advance","slug":"/advance","permalink":"/Java/advance","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-java/advance/advance.md","tags":[],"version":"current","lastUpdatedBy":"\u9a7f\u7ad9","lastUpdatedAt":1727693356000,"sidebarPosition":6,"frontMatter":{"title":"\u8fdb\u9636\u6559\u7a0b","slug":"/advance","sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"\u6ce8\u610f\u4e8b\u9879","permalink":"/Java/process/cross-server/precautions"},"next":{"title":"Linux \u5f00\u670d","permalink":"/Java/advance/Linux"}}');var s=n(86070),a=n(51582),c=n(53285);const i={title:"\u8fdb\u9636\u6559\u7a0b",slug:"/advance",sidebar_position:6},o="\u8fdb\u9636\u6559\u7a0b",l={},u=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"\u8fdb\u9636\u6559\u7a0b",children:"\u8fdb\u9636\u6559\u7a0b"})}),"\n",(0,s.jsx)(t.p,{children:"\u8fd9\u4e00\u90e8\u5206\u5e76\u4e0d\u9002\u5408\u65b0\u624b\u9605\u8bfb\uff0c\u4e3b\u8981\u662f\u7ed9\u6709\u4e00\u5b9a\u5f00\u670d\u7ecf\u9a8c\u6216\u8bfb\u5b8c\u4e86\u672c\u6587\u6863\u7684\u5176\u4ed6\u5185\u5bb9\u7684\u4eba\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u53ef\u4ee5\u5c06\u672c\u7ae0\u89c6\u4e3a\u662f\u5bf9\u4e4b\u524d\u7684\u8865\u5145\u90e8\u5206\uff0c\u5982\u679c\u4f60\u80fd\u5b8c\u5168\u7406\u89e3\u8fd9\u4e00\u90e8\u5206\u7684\u5185\u5bb9\uff0c\u90a3\u4e48\u606d\u559c\u4f60\uff0c\u5df2\u7ecf\u5b8c\u5168\u6446\u8131\u4e86\u7b28\u86cb\u7684\u79f0\u53f7\uff01"}),"\n","\n",(0,s.jsx)(c.A,{})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},53285:(e,t,n)=>{n.d(t,{A:()=>v});n(30758);var r=n(13526),s=n(58613),a=n(34795),c=n(10734),i=n(50857),o=n(27994),l=n(92120);const u={cardContainer:"cardContainer_QFuR",cardTitle:"cardTitle_NKz5",cardDescription:"cardDescription_veAg"};var d=n(86070);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(a.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:s,description:a}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),a&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:a,children:a})]})}function h(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,o.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,s.$S)();return(0,d.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(g,{...e});const a=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:a.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}},10734:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(30758),s=n(55731);const a=["zero","one","two","few","many","other"];function c(e){return a.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function l(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),a=n.pluralForms.indexOf(s);return r[Math.min(a,r.length-1)]}(n,t,e)}}},51582:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(30758);const s={},a=r.createContext(s);function c(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);