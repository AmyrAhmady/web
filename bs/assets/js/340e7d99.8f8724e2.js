"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[73072],{28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var t=i(96540);const r={},o=t.createContext(r);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(o.Provider,{value:n},e.children)}},85138:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"scripting/functions/floatmul","title":"floatmul","description":"Mno\u017ei dva floata jedni s drugima.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/floatmul.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/floatmul","permalink":"/bs/docs/scripting/functions/floatmul","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/floatmul.md","tags":[],"version":"current","frontMatter":{"title":"floatmul","sidebar_label":"floatmul","description":"Mno\u017ei dva floata jedni s drugima.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"floatlog","permalink":"/bs/docs/scripting/functions/floatlog"},"next":{"title":"floatpower","permalink":"/bs/docs/scripting/functions/floatpower"}}');var r=i(74848),o=i(28453);const l={title:"floatmul",sidebar_label:"floatmul",description:"Mno\u017ei dva floata jedni s drugima.",tags:[]},a=void 0,s={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Ova funkcija zapo\u010dinje malim slovom."})}),"\n",(0,r.jsx)(n.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,r.jsx)(n.p,{children:"Mno\u017ei dva floata jedni s drugima."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Ime"}),(0,r.jsx)(n.th,{children:"Deskripcija"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"oper1"}),(0,r.jsx)(n.td,{children:"Prvi Float."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"oper2"}),(0,r.jsx)(n.td,{children:"Drugi Float, s kojim se prvi mno\u017ei."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"Proizvod dva data plovka"}),"\n",(0,r.jsx)(n.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new Float:Number1 = 2.3, Float:Number2 = 3.5; //Deklarira dva floata, Number1 (2.3) i Number2 (3.5)\n    new Float:Product;\n    Product = floatmul(Number1, Number2);       //Sprema proizvod (= 2,3 * 3,5 = 8,05) broja1 i broja2 u plovak "Proizvod"\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Ova je funkcija prili\u010dno suvi\u0161na, jer se ne razlikuje od konvencionalnog operatora mno\u017eenja (*)."})}),"\n",(0,r.jsx)(n.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"Floatadd",children:"Floatadd"}),": Dodaje dva plovka."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"Floatsub",children:"Floatsub"}),": Oduzima dva floata."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"Floatdiv",children:"Floatdiv"}),": Dijeli float sa drugim."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);