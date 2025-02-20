"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[97082],{28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>r});var o=n(96540);const i={},l=o.createContext(i);function s(t){const e=o.useContext(l);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),o.createElement(l.Provider,{value:e},t.children)}},31486:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"scripting/functions/floatmul","title":"floatmul","description":"Multiplies two floats with each other.","source":"@site/docs/scripting/functions/floatmul.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/floatmul","permalink":"/zh-tw/docs/scripting/functions/floatmul","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/floatmul.md","tags":[{"inline":true,"label":"math","permalink":"/zh-tw/docs/tags/math"},{"inline":true,"label":"floating-point","permalink":"/zh-tw/docs/tags/floating-point"}],"version":"current","frontMatter":{"title":"floatmul","sidebar_label":"floatmul","description":"Multiplies two floats with each other.","tags":["math","floating-point"]},"sidebar":"docsSidebar","previous":{"title":"floatlog","permalink":"/zh-tw/docs/scripting/functions/floatlog"},"next":{"title":"floatpower","permalink":"/zh-tw/docs/scripting/functions/floatpower"}}');var i=n(74848),l=n(28453);const s={title:"floatmul",sidebar_label:"floatmul",description:"Multiplies two floats with each other.",tags:["math","floating-point"]},r=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(t){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...t.components},{LowercaseNote:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{}),"\n",(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"Multiplies two floats with each other."}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Name"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsxs)(e.td,{children:["Float",":oper1"]}),(0,i.jsx)(e.td,{children:"First Float."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsxs)(e.td,{children:["Float",":oper2"]}),(0,i.jsx)(e.td,{children:"Second Float, the first one gets multiplied with."})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(e.p,{children:"The product of the two given floats"}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new Float:Number1 = 2.3, Float:Number2 = 3.5; // Declares two floats, Number1 (2.3) and Number2 (3.5)\n    new Float:Product;\n    Product = floatmul(Number1, Number2); // Saves the product(=2.3*3.5 = 8.05) of Number1 and Number2 in the float "Product"\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"This function is rather redundant, for it is no different than the conventional multiplication operator (*)."})}),"\n",(0,i.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"Floatadd",children:"Floatadd"}),": Adds two floats."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"Floatsub",children:"Floatsub"}),": Subtracts two floats."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"Floatdiv",children:"Floatdiv"}),": Divides a float by another."]}),"\n"]})]})}function u(t={}){const{wrapper:e}={...(0,l.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}}}]);