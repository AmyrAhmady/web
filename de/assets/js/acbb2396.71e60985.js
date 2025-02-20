"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[98599],{5250:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"scripting/functions/floatadd","title":"floatadd","description":"Adds two floats together.","source":"@site/docs/scripting/functions/floatadd.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/floatadd","permalink":"/de/docs/scripting/functions/floatadd","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/floatadd.md","tags":[{"inline":true,"label":"math","permalink":"/de/docs/tags/math"},{"inline":true,"label":"floating-point","permalink":"/de/docs/tags/floating-point"}],"version":"current","frontMatter":{"title":"floatadd","sidebar_label":"floatadd","description":"Adds two floats together.","tags":["math","floating-point"]},"sidebar":"docsSidebar","previous":{"title":"floatabs","permalink":"/de/docs/scripting/functions/floatabs"},"next":{"title":"floatcmp","permalink":"/de/docs/scripting/functions/floatcmp"}}');var s=n(74848),i=n(28453);const r={title:"floatadd",sidebar_label:"floatadd",description:"Adds two floats together.",tags:["math","floating-point"]},l=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(t){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...t.components},{LowercaseNote:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"Adds two floats together. This function is redundant as the standard operator (+) does the same thing."}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Name"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:["Float",":Number1"]}),(0,s.jsx)(e.td,{children:"First float."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:["Float",":Number2"]}),(0,s.jsx)(e.td,{children:"Second float."})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(e.p,{children:"The sum of the two given floats."}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new Float:Number1 = 2, Float:Number2 = 3; // Declares two floats, Number1 (2) and Number2 (3)\n    new Float:Sum;\n    Sum = floatadd(Number1, Number2); // Saves the Sum(=2+3 = 5) of Number1 and Number2 in the float "Sum"\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"Floatsub",children:"Floatsub"}),": Subtracts two floats."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"Floatmul",children:"Floatmul"}),": Multiplies two floats."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"Floatdiv",children:"Floatdiv"}),": Divides a float by another."]}),"\n"]})]})}function u(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(c,{...t})}):c(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>l});var o=n(96540);const s={},i=o.createContext(s);function r(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);