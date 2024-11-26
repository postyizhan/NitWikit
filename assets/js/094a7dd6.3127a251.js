"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["6568"],{92397:function(e,n,r){r.r(n),r.d(n,{metadata:()=>l,contentTitle:()=>o,default:()=>p,assets:()=>c,toc:()=>u,frontMatter:()=>d});var l=JSON.parse('{"id":"process/maintenance/optimize/jvm/jvm","title":"JVM \u4F18\u5316","description":"\u8FD9\u7BC7\u6587\u7AE0\u53EF\u4EE5\u8BF4\u662F\u6574\u4E2A\u7B28\u86CB\u6587\u6863\u4E2D\u7F16\u5199\u5386\u65F6\u6700\u4E45\u7684()\uFF0C\u4E3A\u4E86\u786E\u4FDD\u6B63\u786E\u6027\uFF0C\u6211\u4EEC\u5728Windows\u548CLinux \u4E0A\u8FDB\u884C\u4E86\u5927\u91CF\u6027\u80FD\u6D4B\u8BD5\uFF0C\u7ED3\u679C\u53EF\u4EE5\u8BF4\u662F\u5341\u5206\u51FA\u4EBA\u610F\u6599","source":"@site/docs-java/process/maintenance/optimize/jvm/jvm.md","sourceDirName":"process/maintenance/optimize/jvm","slug":"/optimize/jvm","permalink":"/Java/optimize/jvm","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/maintenance/optimize/jvm/jvm.md","tags":[],"version":"current","lastUpdatedBy":"lilingfengdev","lastUpdatedAt":1732237030000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"JVM \u4F18\u5316","slug":"/optimize/jvm"},"sidebar":"tutorialSidebar","previous":{"title":"\u4F18\u5316","permalink":"/Java/optimize"},"next":{"title":"\u901A\u7528\u4F18\u5316\u53C2\u6570","permalink":"/Java/optimize/jvm/common"}}'),i=r("52676"),a=r("79938"),t=r("6206"),s=r("34076");let d={sidebar_position:1,title:"JVM \u4F18\u5316",slug:"/optimize/jvm"},o="JVM \u4F18\u5316",c={},u=[{value:"Java \u9009\u62E9",id:"java-\u9009\u62E9",level:2},{value:"\u4E0B\u8F7D",id:"\u4E0B\u8F7D",level:3},{value:"\u5783\u573E\u56DE\u6536\u5668",id:"\u5783\u573E\u56DE\u6536\u5668",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"jvm-\u4F18\u5316",children:"JVM \u4F18\u5316"})}),"\n",(0,i.jsx)(n.p,{children:"\u8FD9\u7BC7\u6587\u7AE0\u53EF\u4EE5\u8BF4\u662F\u6574\u4E2A\u7B28\u86CB\u6587\u6863\u4E2D\u7F16\u5199\u5386\u65F6\u6700\u4E45\u7684()\uFF0C\u4E3A\u4E86\u786E\u4FDD\u6B63\u786E\u6027\uFF0C\u6211\u4EEC\u5728Windows\u548CLinux \u4E0A\u8FDB\u884C\u4E86\u5927\u91CF\u6027\u80FD\u6D4B\u8BD5\uFF0C\u7ED3\u679C\u53EF\u4EE5\u8BF4\u662F\u5341\u5206\u51FA\u4EBA\u610F\u6599"}),"\n",(0,i.jsxs)(n.p,{children:["\u8FD9\u573A\u6D4B\u8BD5\u7684\u7EC6\u8282\u548C\u65E5\u5FD7\uFF0C\u62A5\u544A\uFF0CSpark\uFF0CGCLog\u7B49\u53EF\u4EE5\u5728",(0,i.jsx)(n.a,{href:"https://github.com/lilingfengdev/Test-Java",children:"Test - Java"}),"\u627E\u5230"]}),"\n",(0,i.jsx)(n.h2,{id:"java-\u9009\u62E9",children:"Java \u9009\u62E9"}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart TD\n    A[\u9009\u62E9] \n    A --\x3e Java8\n    A --\x3e Java11\n    A --\x3e Java21\n    Java8 --\x3e Dragonwell\n    Java11 --\x3e Dragonwell\n    Java21 --\x3e Windows\n    Windows --\x3e \u5185\u5B58\u5145\u8DB3\n    \u5185\u5B58\u5145\u8DB3 --\x3e C[GraalVM Enterprise Edition]\n    Windows --\x3e \u5185\u5B58\u4E0D\u8DB3\n    \u5185\u5B58\u4E0D\u8DB3 --\x3e OpenJ9\n    Java21 --\x3e Linux\n    Linux --\x3e \u5185\u5B58\u4E0D\u8DB3\n    Linux --\x3e D[\u5185\u5B58\u5145\u8DB3]\n    D --\x3e \u597D\u7684\u517C\u5BB9\u6027\n    \u597D\u7684\u517C\u5BB9\u6027 --\x3e|\u9700\u8981| C\n    \u597D\u7684\u517C\u5BB9\u6027 --\x3e|\u4E0D\u9700\u8981| E[Azul Zing]"}),"\n",(0,i.jsxs)(n.admonition,{title:"Zulu\u7684\u6027\u80FD",type:"tip",children:[(0,i.jsxs)(n.p,{children:["\u6839\u636E\u5B98\u65B9\u5BF9 Zulu \u7684\u5B9A\u4F4D\uFF0CZulu \u7684\u91CD\u70B9\u662F",(0,i.jsx)(n.strong,{children:"\u5B89\u5168\u6027\u548C\u7A33\u5B9A\u6027"}),"\uFF0C\u800C\u975E\u6027\u80FD"]}),(0,i.jsxs)(n.p,{children:["\u5927\u90E8\u5206\u4EBA\u5BF9",(0,i.jsx)(n.code,{children:"Zulu \u6027\u80FD\u597D"}),"\u8FD9\u4E00\u9519\u8BEF\u770B\u6CD5\u4E3B\u8981\u662F\u6765\u6E90\u4E8E\u540C\u4E00\u516C\u53F8 Azul \u65D7\u4E0B\u7684\u53E6\u4E00\u6B3E\u4EA7\u54C1 Zing"]}),(0,i.jsx)(n.p,{children:"\u8BE5\u4EA7\u54C1(Zing)\u7684\u4E3B\u8981\u4FA7\u91CD\u70B9\u662F\u6027\u80FD\uFF0C\u4F46\u662F\uFF0C\u5982\u679C\u4F60\u4E0D\u60F3\u6298\u817E\uFF0C\u60F3\u62E5\u6709\u4E00\u4E2A\u8D85\u9AD8\u7A33\u5B9A\u6027\u7684\u73AF\u5883\uFF0CZulu \u4ECD\u7136\u662F\u4F60\u7684\u6700\u4F73\u9009\u62E9"})]}),"\n",(0,i.jsxs)(n.admonition,{title:"\u517C\u5BB9\u6027",type:"tip",children:[(0,i.jsx)(n.p,{children:"\u6839\u636E\u6211\u4EEC\u7684\u6D4B\u8BD5,GraalVM,Dragonwell,Zulu \u76EE\u524D\u90FD\u6CA1\u6709\u88AB\u62A5\u544A\u8FC7\u4E0D\u517C\u5BB9"}),(0,i.jsx)(n.p,{children:"Zing \u4E0E LuckPerms \u4EE5\u53CA\u4E00\u4E9B\u7279\u6B8A\u63D2\u4EF6\u4F1A\u6709\u4E00\u70B9\u4E0D\u517C\u5BB9"}),(0,i.jsx)(n.p,{children:"OpenJ9 \u867D\u7136\u5185\u5B58\u5360\u7528\u5F88\u4F4E\uFF0C\u4F46\u662F\u6027\u80FD\u5F88\u5DEE\uFF0C\u5E76\u4E14\u4E0E\u5F88\u591A\u63D2\u4EF6\u6709\u4E0D\u517C\u5BB9(\u6BD4\u5982 Spark)"}),(0,i.jsx)(n.p,{children:"GraalVM \u5728 22.3.0 \u4FEE\u590D\u4E86\u6240\u6709\u5DF2\u77E5\u7684 Minecraft \u9519\u8BEF"})]}),"\n",(0,i.jsx)(n.h3,{id:"\u4E0B\u8F7D",children:"\u4E0B\u8F7D"}),"\n","\n",(0,i.jsxs)(t.Z,{queryString:"jvm-download",children:[(0,i.jsxs)(s.Z,{value:"dragonwell",label:"Dragonwell",children:[(0,i.jsx)(n.p,{children:"Dragonwell \u5206\u4E3A  Standard Edition \u548C Extended Edition\uFF0C\u63A8\u8350\u4E0B\u8F7D Extended Edition"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://dragonwell-jdk.io/",children:"\u5B98\u7F51"})," \u4E0B\u8F7D\u533A\u57DF\u9009\u62E9",(0,i.jsx)(n.code,{children:"China Mainland"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/dragonwell-project/dragonwell8/releases",children:"Dragonwell 8 \u9884\u89C8"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/dragonwell-project/dragonwell11/releases",children:"Dragonwell 11 \u9884\u89C8"})}),"\n"]})]}),(0,i.jsxs)(s.Z,{value:"graalvm",label:"GraalVM",children:[(0,i.jsx)(n.p,{children:"GraalVM \u5206\u4E3A Community Edition(CE) \u548C Enterprise Edition(EE)\uFF0C\u9664\u975E\u4F60\u670D\u52A1\u5668\u5927\u5230\u4F1A\u88AB Oracle \u627E\u4E0A\u95E8\uFF0C\u4E0D\u7136\u8BF7\u9009\u62E9 Enterprise Edition"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.graalvm.org/downloads/",children:"\u4E0B\u8F7D EE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/graalvm/graalvm-ce-builds/releases/",children:"\u4E0B\u8F7D CE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://d.injdk.cn/download/graalvm",children:"\u4E0B\u8F7D\u955C\u50CF"})}),"\n"]}),(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Oracle \u5B98\u7F51\u540C\u6837\u63D0\u4F9B GraalVM,\u4F46\u662F\u4E0A\u9762\u7684 GraalVM EE \u5305\u542B\u4E86\u4F01\u4E1A\u7248\u5957\u4EF6,\u8FD9\u4E9BMC\u6839\u672C\u7528\u4E0D\u5230,\u53EA\u9700\u8981\u4F01\u4E1A\u7248\u7F16\u8BD1\u5668\u5C31\u53EF\u4EE5\u4E86"})})]}),(0,i.jsxs)(s.Z,{value:"zing",label:"Azul Zing",children:[(0,i.jsx)(n.p,{children:"Azul Zing \u4E0D\u80FD\u76F4\u63A5\u88AB\u4E0B\u8F7D\uFF0C\u9700\u8981\u586B\u5199\u8BD5\u7528\u7533\u8BF7\u8868\uFF0C\u4F46\u6211\u4EEC\u901A\u8FC7\u795E\u79D8\u624B\u6BB5\u641E\u5230\u4E86\u5B89\u88C5\u5305"}),(0,i.jsx)(n.p,{children:"JDK 21:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://cdn.azul.com/zing-zvm/ZVM24.10.0.0/zing24.10.0.0-4-jdk21.0.4.0.101-linux.x86_64.rpm",children:"RPM"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://cdn.azul.com/zing-zvm/ZVM24.10.0.0/zing24.10.0.0-4-jdk21.0.4.0.101-linux_x64.tar.gz",children:"TAR.GZ"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://cdn.azul.com/zing-zvm/ZVM24.10.0.0/zing24.10.0.0-4-jdk21.0.4.0.101-linux_amd64.deb",children:"DEB"})}),"\n"]}),(0,i.jsx)(n.p,{children:"JDK 17:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://cdn.azul.com/zing-zvm/ZVM24.10.0.0/zing24.10.0.0-4-jdk17.0.12.0.101-linux.x86_64.rpm",children:"RPM"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://cdn.azul.com/zing-zvm/ZVM24.10.0.0/zing24.10.0.0-4-jdk17.0.12.0.101-linux_x64.tar.gz",children:"TAR.GZ"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://cdn.azul.com/zing-zvm/ZVM24.10.0.0/zing24.10.0.0-4-jdk17.0.12.0.101-linux_amd64.deb",children:"DEB"})}),"\n"]}),(0,i.jsx)(n.p,{children:"JDK 8:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://cdn.azul.com/zing-zvm/ZVM24.10.0.0/zing24.10.0.0-4-jdk8.0.431-linux.x86_64.rpm",children:"RPM"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://cdn.azul.com/zing-zvm/ZVM24.10.0.0/zing24.10.0.0-4-jdk8.0.431-linux_x64.tar.gz",children:"TAR.GZ"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://cdn.azul.com/zing-zvm/ZVM24.10.0.0/zing24.10.0.0-4-jdk8.0.431-linux_amd64.deb",children:"DEB"})}),"\n"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.azul.com/downloads/#prime",children:"\u5B98\u7F51"})})]}),(0,i.jsxs)(s.Z,{value:"zulu",label:"Azul Zulu",children:[(0,i.jsx)(n.p,{children:"Azul Zulu \u652F\u6301 Java 8 \u4EE5\u4E0A\uFF0CJava 7 \u548C 6 \u9700\u8981\u6210\u4E3A\u5BA2\u6237\u624D\u80FD\u4E0B\u8F7D"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.azul.com/downloads/?package=jdk&show-old-builds=true#zulu",children:"\u5B98\u7F51"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://d.injdk.cn/download/zulu",children:"\u4E0B\u8F7D\u955C\u50CF"})}),"\n"]})]}),(0,i.jsxs)(s.Z,{value:"openj9",label:"OpenJ9",children:[(0,i.jsxs)(n.p,{children:["OpenJ9 \u6709\u8BA4\u8BC1\u7248\u548C\u975E\u8BA4\u8BC1\u7248\uFF0C\u4E3B\u8981\u662F\u56E0\u4E3A\u548C OpenJ9 \u7684\u5173\u7CFB\u548C\u64CD\u4F5C\u7CFB\u7EDF\u7684\u5173\u7CFB\u800C\u4F7F\u7528\u4E0D\u540C\u7684\u8BB8\u53EF\u8BC1\u7F62\u4E86\uFF0C\u672C\u8D28\u4EE3\u7801\u662F\u4E00\u6837\u7684\uFF0C\u76F4\u63A5\u4E0B",(0,i.jsx)(n.code,{children:"IBM Semeru Runtime Open Edition"}),"\u5C31\u884C"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.ibm.com/languages/java/semeru-runtimes/downloads/",children:"\u5B98\u7F51"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://d.injdk.cn/download/ibm",children:"\u4E0B\u8F7D\u955C\u50CF"})}),"\n"]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u5783\u573E\u56DE\u6536\u5668",children:"\u5783\u573E\u56DE\u6536\u5668"}),"\n",(0,i.jsx)(n.p,{children:"\u7ECF\u8FC7\u6211\u4EEC\u7684\u591A\u6B21\u6D4B\u8BD5\uFF0CG1GC\u548CZGC \u6700\u9002\u5408MC\u670D\u52A1\u5668(\u8FD8\u6709\u4E00\u4E2A Zing C4)"}),"\n",(0,i.jsx)(n.p,{children:"\u9009\u62E9\uFF01"}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart TD\n    A[\u9009\u62E9] \n    A --\x3e B[\u673A\u5668\u914D\u7F6E\u8DB3\u591F\uFF0C\u8D77\u6B654h8g\uFF0C\u63A8\u83508h8g]\n    A --\x3e \u673A\u5668\u914D\u7F6E\u4E0D\u8FBE\u6807\n    B --\x3e C[Java 21+\uFF0C\u6216Dragonwell 11]\n    B --\x3e \u5176\u4ED6\n    C --\x3e ZGC\n    \u5176\u4ED6 --\x3e G1\n    \u673A\u5668\u914D\u7F6E\u4E0D\u8FBE\u6807 --\x3e G1"}),"\n",(0,i.jsx)(n.p,{children:"ZGC \u7684\u65E0\u505C\u987F\u53EF\u4EE5\u7ED9\u73A9\u5BB6\u5E26\u6765\u66F4\u597D\u7684\u4F53\u9A8C\uFF0C\u5E76\u4E14\u66F4\u5145\u5206\u7684\u5229\u7528\u591A\u6838\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"\u867D\u7136ZGC\u5728\u9AD8\u7248\u672C\u4E0A Java \u8868\u73B0\u826F\u597D\uFF0C\u4F46\u662F\u67D0\u4E9B Java \u4E0A\u4F1A\u9020\u6210\u53CD\u6548\u679C\uFF08\u5982 GraalVM\uFF09\uFF0C\u53C2\u89C1\u5404\u4E2A Java \u7684\u5177\u4F53\u914D\u7F6E\u4ECB\u7ECD\u3002"})}),"\n",(0,i.jsx)(n.p,{children:"\u5BF9\u4E8E GC \u7EC6\u8282\u6027\u7684\u4F18\u5316\u8BF7\u9605\u8BFB\u6BCF\u4E2AJava\u7684\u4F18\u5316\u6307\u5357"})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},34076:function(e,n,r){r.d(n,{Z:()=>t});var l=r("52676");r("75271");var i=r("54461");let a="tabItem_TBo_";function t(e){let{children:n,hidden:r,className:t}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a,t),hidden:r,children:n})}},6206:function(e,n,r){r.d(n,{Z:()=>z});var l=r("52676"),i=r("75271"),a=r("54461"),t=r("13351"),s=r("3225"),d=r("30213"),o=r("68912"),c=r("4601"),u=r("90550");function h(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var m=r("59157");let j="tabList_Catn",x="tabItem_mfQ4";function v(e){let{className:n,block:r,selectedValue:i,selectValue:s,tabValues:d}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),u=e=>{let n=e.currentTarget,r=d[o.indexOf(n)].value;r!==i&&(c(n),s(r))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{let r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1]}}n?.focus()};return(0,l.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:d.map(e=>{let{value:n,label:r,attributes:t}=e;return(0,l.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>o.push(e),onKeyDown:h,onClick:u,...t,className:(0,a.Z)("tabs__item",x,t?.className,{"tabs__item--active":i===n}),children:r??n},n)})})}function f(e){let{lazy:n,children:r,selectedValue:t}=e,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===t);return e?(0,i.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,l.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t}))})}function g(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:l}=e,a=function(e){let{values:n,children:r}=e;return(0,i.useMemo)(()=>{let e=n??h(r).map(e=>{let{props:{value:n,label:r,attributes:l,default:i}}=e;return{value:n,label:r,attributes:l,default:i}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[t,m]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let l=r.find(e=>e.default)??r[0];if(!l)throw Error("Unexpected error: 0 tabValues");return l.value})({defaultValue:n,tabValues:a})),[j,x]=function(e){let{queryString:n=!1,groupId:r}=e,l=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r}),t=(0,o._X)(a);return[t,(0,i.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(l.location.search);n.set(a,e),l.replace({...l.location,search:n.toString()})},[a,l])]}({queryString:r,groupId:l}),[v,f]=function(e){var n;let{groupId:r}=e;let l=(n=r)?`docusaurus.tab.${n}`:null,[a,t]=(0,u.Nk)(l);return[a,(0,i.useCallback)(e=>{if(!!l)t.set(e)},[l,t])]}({groupId:l}),g=(()=>{let e=j??v;return p({value:e,tabValues:a})?e:null})();return(0,d.Z)(()=>{g&&m(g)},[g]),{selectedValue:t,selectValue:(0,i.useCallback)(e=>{if(!p({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);m(e),x(e),f(e)},[x,f,a]),tabValues:a}}(e);return(0,l.jsxs)("div",{className:(0,a.Z)("tabs-container",j),children:[(0,l.jsx)(v,{...n,...e}),(0,l.jsx)(f,{...n,...e})]})}function z(e){let n=(0,m.Z)();return(0,l.jsx)(g,{...e,children:h(e.children)},String(n))}},79938:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return t}});var l=r(75271);let i={},a=l.createContext(i);function t(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);