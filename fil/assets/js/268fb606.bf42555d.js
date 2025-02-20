"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[63639],{28453:(a,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var e=t(96540);const l={},i=e.createContext(l);function s(a){const n=e.useContext(i);return e.useMemo((function(){return"function"==typeof a?a(n):{...n,...a}}),[n,a])}function o(a){let n;return n=a.disableParentContext?"function"==typeof a.components?a.components(l):a.components||l:s(a.components),e.createElement(i.Provider,{value:n},a.children)}},47670:(a,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>e,toc:()=>d});const e=JSON.parse('{"id":"scripting/functions/floatadd","title":"floatadd","description":"Nagdaragdag ng dalawang float nang magkasama.","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/functions/floatadd.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/floatadd","permalink":"/fil/docs/scripting/functions/floatadd","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/floatadd.md","tags":[{"inline":true,"label":"math","permalink":"/fil/docs/tags/math"},{"inline":true,"label":"floating-point","permalink":"/fil/docs/tags/floating-point"}],"version":"current","frontMatter":{"title":"floatadd","sidebar_label":"floatadd","description":"Nagdaragdag ng dalawang float nang magkasama.","tags":["math","floating-point"]},"sidebar":"docsSidebar","previous":{"title":"floatabs","permalink":"/fil/docs/scripting/functions/floatabs"},"next":{"title":"floatcmp","permalink":"/fil/docs/scripting/functions/floatcmp"}}');var l=t(74848),i=t(28453);const s={title:"floatadd",sidebar_label:"floatadd",description:"Nagdaragdag ng dalawang float nang magkasama.",tags:["math","floating-point"]},o=void 0,r={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(a){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...a.components},{LowercaseNote:t}=n;return t||function(a,n){throw new Error("Expected "+(n?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t,{}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Nagdaragdag ng dalawang float nang magkasama. Ang function na ito ay kalabisan dahil ang karaniwang operator (+) ay gumagawa ng parehong bagay."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":Number1"]}),(0,l.jsx)(n.td,{children:"Unang float."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":Number2"]}),(0,l.jsx)(n.td,{children:"Pangalawang float."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"Ang kabuuan ng dalawang binigay na float."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new Float:Number1 = 2, Float:Number2 = 3; //Nagdedeklara ng dalawang float, Number1 (2) at Number2 (3)\n    new Float:Sum;\n    Sum = floatadd(Number1, Number2);       //Sine-save ang Sum(=2+3 = 5) ng Number1 at Number2 sa float na "Sum"\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"Floatsub",children:"Floatsub"}),": Nag su-subtract ng dalawang floats."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"Floatmul",children:"Floatmul"}),": Nag mu-multiply ng dalawang floats."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"Floatdiv",children:"Floatdiv"}),": Nag di-dive ng isang float sa isa pa."]}),"\n"]})]})}function u(a={}){const{wrapper:n}={...(0,i.R)(),...a.components};return n?(0,l.jsx)(n,{...a,children:(0,l.jsx)(c,{...a})}):c(a)}}}]);