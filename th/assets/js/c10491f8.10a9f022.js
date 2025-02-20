"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[8419],{28453:(n,t,e)=>{e.d(t,{R:()=>s,x:()=>o});var i=e(96540);const c={},l=i.createContext(c);function s(n){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function o(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),i.createElement(l.Provider,{value:t},n.children)}},64810:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"scripting/functions/CallLocalFunction","title":"CallLocalFunction","description":"Calls a public function from the script in which it is used.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/CallLocalFunction.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CallLocalFunction","permalink":"/th/docs/scripting/functions/CallLocalFunction","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/CallLocalFunction.md","tags":[],"version":"current","frontMatter":{"title":"CallLocalFunction","sidebar_label":"CallLocalFunction","description":"Calls a public function from the script in which it is used.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"BlockIpAddress","permalink":"/th/docs/scripting/functions/BlockIpAddress"},"next":{"title":"CallRemoteFunction","permalink":"/th/docs/scripting/functions/CallRemoteFunction"}}');var c=e(74848),l=e(28453);const s={title:"CallLocalFunction",sidebar_label:"CallLocalFunction",description:"Calls a public function from the script in which it is used.",tags:[]},o=void 0,r={},a=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function d(n){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,c.jsx)(t.p,{children:"Calls a public function from the script in which it is used."}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"function[]"}),(0,c.jsx)(t.td,{children:"Public function's name."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"format[]"}),(0,c.jsx)(t.td,{children:"Tag/format of each variable"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"\\ {Float, _}:..."}),(0,c.jsx)(t.td,{children:"'Indefinite' number of arguments of any tag"})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,c.jsx)(t.p,{children:"If the function exists, returns the same as the called function. If the function does not exist, returns 0."}),"\n",(0,c.jsx)(t.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:'forward publicFunc(number, Float:flt, const string[]);\npublic publicFunc(number, Float:flt, const string[])\n{\n    printf("Received integer %i, float %f, string %s", number, flt, string);\n    return 1;\n}\n\nCallLocalFunction("publicFunc", "ifs", 420, 68.999999999, "Hello world");\n'})}),"\n",(0,c.jsx)(t.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,c.jsx)(t.admonition,{type:"warning",children:(0,c.jsx)(t.p,{children:"CallLocalFunction crashes the server if it's passing an empty string."})}),"\n",(0,c.jsx)(t.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"/th/docs/scripting/functions/CallRemoteFunction",children:"CallRemoteFunction"}),": Call a function in any loaded script."]}),"\n"]})]})}function u(n={}){const{wrapper:t}={...(0,l.R)(),...n.components};return t?(0,c.jsx)(t,{...n,children:(0,c.jsx)(d,{...n})}):d(n)}}}]);