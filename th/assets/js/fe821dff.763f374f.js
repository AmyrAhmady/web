"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[47389],{26246:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"scripting/functions/numargs","title":"numargs","description":"Get the number of arguments passed to a function.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/numargs.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/numargs","permalink":"/th/docs/scripting/functions/numargs","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/numargs.md","tags":[],"version":"current","frontMatter":{"title":"numargs","sidebar_label":"numargs","description":"Get the number of arguments passed to a function.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"min","permalink":"/th/docs/scripting/functions/min"},"next":{"title":"numpubvars","permalink":"/th/docs/scripting/functions/numpubvars"}}');var r=t(74848),i=t(28453);const a={title:"numargs",sidebar_label:"numargs",description:"Get the number of arguments passed to a function.",tags:[]},c=void 0,o={},u=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function l(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.admonition,{type:"warning",children:(0,r.jsx)(e.p,{children:"This function starts with lowercase letter."})}),"\n",(0,r.jsx)(e.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,r.jsx)(e.p,{children:"Get the number of arguments passed to a function."}),"\n",(0,r.jsx)(e.table,{children:(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Name"}),(0,r.jsx)(e.th,{children:"Description"})]})})}),"\n",(0,r.jsx)(e.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'SomeFunction(...)\n{\n    printf("numargs(): %i", numargs());\n}\n\npublic OnFilterScriptInit()\n{\n    SomeFunction(1, 2, 3);\n}\n\n// Output: "numargs(): 3"\n// Because 3 parameters (1, 2, 3) were passed.\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"/th/docs/scripting/functions/getarg",children:"getarg"}),": Retrieve an argument from a variable argument list."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"/th/docs/scripting/functions/setarg",children:"setarg"}),": Set an argument."]}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function a(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);