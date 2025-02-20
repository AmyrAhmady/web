"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[46781],{28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>r});var i=n(96540);const o={},l=i.createContext(o);function s(t){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),i.createElement(l.Provider,{value:e},t.children)}},93776:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"scripting/functions/floatmul","title":"floatmul","description":"Multiplies two floats with each other.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/floatmul.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/floatmul","permalink":"/th/docs/scripting/functions/floatmul","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/floatmul.md","tags":[],"version":"current","frontMatter":{"title":"floatmul","sidebar_label":"floatmul","description":"Multiplies two floats with each other.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"floatlog","permalink":"/th/docs/scripting/functions/floatlog"},"next":{"title":"floatpower","permalink":"/th/docs/scripting/functions/floatpower"}}');var o=n(74848),l=n(28453);const s={title:"floatmul",sidebar_label:"floatmul",description:"Multiplies two floats with each other.",tags:[]},r=void 0,a={},c=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function d(t){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.admonition,{type:"warning",children:(0,o.jsx)(e.p,{children:"This function starts with lowercase letter."})}),"\n",(0,o.jsx)(e.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,o.jsx)(e.p,{children:"Multiplies two floats with each other."}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Name"}),(0,o.jsx)(e.th,{children:"Description"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"oper1"}),(0,o.jsx)(e.td,{children:"First Float."})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"oper2"}),(0,o.jsx)(e.td,{children:"Second Float, the first one gets multiplied with."})]})]})]}),"\n",(0,o.jsx)(e.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,o.jsx)(e.p,{children:"The product of the two given floats"}),"\n",(0,o.jsx)(e.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new Float:Number1 = 2.3, Float:Number2 = 3.5; //Declares two floats, Number1 (2.3) and Number2 (3.5)\n    new Float:Product;\n    Product = floatmul(Number1, Number2);       //Saves the product(=2.3*3.5 = 8.05) of Number1 and Number2 in the float "Product"\n    return 1;\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsx)(e.p,{children:"This function is rather redundant, for it is no different than the conventional multiplication operator (*)."})}),"\n",(0,o.jsx)(e.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"../functions/Floatadd",children:"Floatadd"}),": Adds two floats."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"../functions/Floatsub",children:"Floatsub"}),": Subtracts two floats."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"../functions/Floatdiv",children:"Floatdiv"}),": Divides a float by another."]}),"\n"]})]})}function u(t={}){const{wrapper:e}={...(0,l.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}}}]);