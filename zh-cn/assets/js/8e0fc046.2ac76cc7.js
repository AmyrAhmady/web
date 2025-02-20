"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[98679],{28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}},47429:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"scripting/functions/max","title":"max","description":"Return the highest of two numbers.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/max.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/max","permalink":"/zh-cn/docs/scripting/functions/max","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/max.md","tags":[{"inline":true,"label":"core","permalink":"/zh-cn/docs/tags/core"}],"version":"current","frontMatter":{"title":"max","sidebar_label":"max","description":"Return the highest of two numbers.","tags":["core"]},"sidebar":"docsSidebar","previous":{"title":"listenport","permalink":"/zh-cn/docs/scripting/functions/listenport"},"next":{"title":"memcpy","permalink":"/zh-cn/docs/scripting/functions/memcpy"}}');var s=t(74848),i=t(28453);const c={title:"max",sidebar_label:"max",description:"Return the highest of two numbers.",tags:["core"]},o=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Function used to compare the values."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value1"}),(0,s.jsx)(n.td,{children:"Value 1 (a) to compare."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value2"}),(0,s.jsx)(n.td,{children:"Value 2 (b) to compare."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:["The higher value of ",(0,s.jsx)(n.code,{children:"value1"})," and ",(0,s.jsx)(n.code,{children:"value2"})]}),"\n",(0,s.jsxs)(n.p,{children:["If both are equivalent, ",(0,s.jsx)(n.code,{children:"value1"})," is returned."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new a, b, result;\n\n    a = 5;\n    b = 10;\n    result = max(a, b);\n\n    printf("max(%d, %d) = %d", a, b, result);\n    // Since b is bigger than a so result will be 10.\n    \n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"min",children:"min"}),": Compare and get the minimum value."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);