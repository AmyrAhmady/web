"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[72242],{28453:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>c});var s=r(96540);const t={},i=s.createContext(t);function l(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(i.Provider,{value:e},n.children)}},88694:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"tutorials/servervariablesystem","title":"\u670d\u52a1\u5668\u53d8\u91cf\u7cfb\u7edf","description":"\u670d\u52a1\u5668\u53d8\u91cf\u7cfb\u7edf\uff08\u7b80\u79f0 SVar\uff09\u662f\u4e00\u79cd\u4ee5\u9ad8\u6548\u52a8\u6001\u65b9\u5f0f\u521b\u5efa\u670d\u52a1\u5668\u53d8\u91cf\u7684\u65b0\u65b9\u6cd5, \u8fd9\u610f\u5473\u7740\u5b83\u4eec\u53ef\u4ee5\u5728\u670d\u52a1\u5668\u7684\u6e38\u620f\u6a21\u5f0f\u548c\u811a\u672c\u4e2d\u540c\u65f6\u4f7f\u7528.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorials/servervariablesystem.md","sourceDirName":"tutorials","slug":"/tutorials/servervariablesystem","permalink":"/zh-cn/docs/tutorials/servervariablesystem","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/tutorials/servervariablesystem.md","tags":[],"version":"current","frontMatter":{"title":"\u670d\u52a1\u5668\u53d8\u91cf\u7cfb\u7edf","sidebar_label":"\u670d\u52a1\u5668\u53d8\u91cf\u7cfb\u7edf","description":"\u670d\u52a1\u5668\u53d8\u91cf\u7cfb\u7edf\uff08\u7b80\u79f0 SVar\uff09\u662f\u4e00\u79cd\u4ee5\u9ad8\u6548\u52a8\u6001\u65b9\u5f0f\u521b\u5efa\u670d\u52a1\u5668\u53d8\u91cf\u7684\u65b0\u65b9\u6cd5, \u8fd9\u610f\u5473\u7740\u5b83\u4eec\u53ef\u4ee5\u5728\u670d\u52a1\u5668\u7684\u6e38\u620f\u6a21\u5f0f\u548c\u811a\u672c\u4e2d\u540c\u65f6\u4f7f\u7528."},"sidebar":"docsSidebar","previous":{"title":"Cooldowns","permalink":"/zh-cn/docs/tutorials/cooldowns"},"next":{"title":"\u5b57\u7b26\u4e32\u64cd\u4f5c","permalink":"/zh-cn/docs/tutorials/stringmanipulation"}}');var t=r(74848),i=r(28453);const l={title:"\u670d\u52a1\u5668\u53d8\u91cf\u7cfb\u7edf",sidebar_label:"\u670d\u52a1\u5668\u53d8\u91cf\u7cfb\u7edf",description:"\u670d\u52a1\u5668\u53d8\u91cf\u7cfb\u7edf\uff08\u7b80\u79f0 SVar\uff09\u662f\u4e00\u79cd\u4ee5\u9ad8\u6548\u52a8\u6001\u65b9\u5f0f\u521b\u5efa\u670d\u52a1\u5668\u53d8\u91cf\u7684\u65b0\u65b9\u6cd5, \u8fd9\u610f\u5473\u7740\u5b83\u4eec\u53ef\u4ee5\u5728\u670d\u52a1\u5668\u7684\u6e38\u620f\u6a21\u5f0f\u548c\u811a\u672c\u4e2d\u540c\u65f6\u4f7f\u7528."},c=void 0,a={},o=[{value:"\u4f18\u70b9",id:"\u4f18\u70b9",level:2},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:2},{value:"\u76f8\u5173\u51fd\u6570",id:"\u76f8\u5173\u51fd\u6570",level:2}];function d(n){const e={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u670d\u52a1\u5668\u53d8\u91cf\u7cfb\u7edf"})," (\u7b80\u79f0 ",(0,t.jsx)(e.strong,{children:"SVar"}),") \u662f\u4e00\u79cd\u9ad8\u6548\u3001\u52a8\u6001\u5730\u521b\u5efa\u5168\u5c40\u670d\u52a1\u5668\u53d8\u91cf\u7684\u65b0\u65b9\u6cd5, \u8fd9\u610f\u5473\u7740\u5b83\u4eec\u53ef\u4ee5\u5728\u670d\u52a1\u5668\u7684\u6e38\u620f\u6a21\u5f0f\u548c\u8fc7\u6ee4\u811a\u672c\u4e2d\u540c\u65f6\u4f7f\u7528."]}),"\n",(0,t.jsxs)(e.p,{children:["\u5b83\u4eec\u4e0e ",(0,t.jsx)(e.a,{href:"%E6%AF%8F%E4%B8%AA%E7%8E%A9%E5%AE%B6%E7%9A%84%E5%8F%98%E9%87%8F%E7%B3%BB%E7%BB%9F",children:"PVars"})," \u7c7b\u4f3c, \u4f46\u4e0d\u4e0e\u73a9\u5bb6 ID \u7ed1\u5b9a."]}),"\n",(0,t.jsx)(e.p,{children:":::\u8b66\u544a"}),"\n",(0,t.jsx)(e.p,{children:"\u8be5\u7cfb\u7edf\u5728 SA-MP 0.3.7 R2-1 \u4e2d\u5f15\u5165\uff0c\u5728\u65e9\u671f\u7248\u672c\u4e2d\u65e0\u6cd5\u8fd0\u884c!"}),"\n",(0,t.jsx)(e.p,{children:":::"}),"\n",(0,t.jsx)(e.p,{children:":::\u63d0\u793a"}),"\n",(0,t.jsx)(e.p,{children:"SVar \u7cfb\u7edf\u4e0e PVars \u7cfb\u7edf\u76f8\u540c\uff0c\u4f46\u6240\u521b\u5efa\u7684\u53d8\u91cf\u662f\u670d\u52a1\u5668\u8303\u56f4\u7684\u53d8\u91cf\uff0c\u4e0d\u4e0e\u4efb\u4f55\u73a9\u5bb6 ID \u5173\u8054\uff0c\u5e76\u4e14\u5728\u6e38\u620f\u6a21\u5f0f\u6539\u53d8\u65f6\u4e5f\u4f1a\u6301\u7eed\u5b58\u5728."}),"\n",(0,t.jsx)(e.p,{children:":::"}),"\n",(0,t.jsx)(e.h2,{id:"\u4f18\u70b9",children:"\u4f18\u70b9"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"SVars \u53ef\u8de8\u6e38\u620f\u6a21\u5f0f\u811a\u672c\u548c\u8fc7\u6ee4\u811a\u672c\u5171\u4eab/\u8bbf\u95ee."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u60a8\u53ef\u4ee5\u8f7b\u677e\u679a\u4e3e\u5e76\u6253\u5370/\u5b58\u50a8 SVar \u5217\u8868\u3002\u8fd9\u4f7f\u8c03\u8bd5\u53d8\u5f97\u66f4\u5bb9\u6613."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5373\u4f7f SVar \u5c1a\u672a\u521b\u5efa\uff0c\u4e5f\u4f1a\u8fd4\u56de\u9ed8\u8ba4\u503c 0."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"SVars \u53ef\u4ee5\u4f7f\u7528\u52a8\u6001\u5206\u914d\u7684\u5185\u5b58\u6765\u4fdd\u5b58\u975e\u5e38\u5927\u7684\u5b57\u7b26\u4e32."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u60a8\u53ef\u4ee5\u5728\u6e38\u620f\u4e2d\u8bbe\u7f6e\u3001\u83b7\u53d6\u548c\u521b\u5efa SVars."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u7f3a\u70b9",children:"\u7f3a\u70b9"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"SVars \u6bd4\u666e\u901a\u53d8\u91cf\u6162\u51e0\u500d. \u4e00\u822c\u6765\u8bf4\uff0c\u7528\u5185\u5b58\u6362\u901f\u5ea6\u6bd4\u7528\u901f\u5ea6\u6362\u5185\u5b58\u66f4\u6709\u5229."}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u76f8\u5173\u51fd\u6570",children:"\u76f8\u5173\u51fd\u6570"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"../scripting/functions/SetSVarInt",children:"SetSVarInt"}),": \u4e3a\u670d\u52a1\u5668\u53d8\u91cf\u8bbe\u7f6e\u4e00\u4e2a\u6574\u6570."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"../scripting/functions/GetSVarInt",children:"GetSVarInt"}),": \u83b7\u53d6\u670d\u52a1\u5668\u53d8\u91cf\u7684\u6574\u6570\u503c."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"../scripting/functions/SetSVarString",children:"SetSVarString"}),": \u4e3a\u670d\u52a1\u5668\u53d8\u91cf\u8bbe\u7f6e\u5b57\u7b26\u4e32."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"../scripting/functions/GetSVarString",children:"GetSVarString"}),": \u83b7\u53d6\u670d\u52a1\u5668\u53d8\u91cf\u7684\u5b57\u7b26\u4e32."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"../scripting/functions/SetSVarFloat",children:"SetSVarFloat"}),": \u4e3a\u670d\u52a1\u5668\u53d8\u91cf\u8bbe\u7f6e\u4e00\u4e2a\u6d6e\u70b9\u6570."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"../scripting/functions/GetSVarFloat",children:"GetSVarFloat"}),": \u83b7\u53d6\u670d\u52a1\u5668\u53d8\u91cf\u7684\u6d6e\u70b9\u6570."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"../scripting/functions/DeleteSVar",children:"DeleteSVar"}),": \u5220\u9664\u4e00\u4e2a\u670d\u52a1\u5668\u53d8\u91cf."]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}}}]);