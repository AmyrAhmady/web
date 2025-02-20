"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[23490],{13224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"scripting/functions/floatsub","title":"floatsub","description":"Subtracts one float from another one.","source":"@site/docs/scripting/functions/floatsub.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/floatsub","permalink":"/de/docs/scripting/functions/floatsub","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/floatsub.md","tags":[{"inline":true,"label":"math","permalink":"/de/docs/tags/math"},{"inline":true,"label":"floating-point","permalink":"/de/docs/tags/floating-point"}],"version":"current","frontMatter":{"title":"floatsub","sidebar_label":"floatsub","description":"Subtracts one float from another one.","tags":["math","floating-point"]},"sidebar":"docsSidebar","previous":{"title":"floatstr","permalink":"/de/docs/scripting/functions/floatstr"},"next":{"title":"floattan","permalink":"/de/docs/scripting/functions/floattan"}}');var s=n(74848),r=n(28453);const i={title:"floatsub",sidebar_label:"floatsub",description:"Subtracts one float from another one.",tags:["math","floating-point"]},l=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Subtracts one float from another one. Note that this function has no real use, as one can simply use the standard operator (-) instead."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":oper1"]}),(0,s.jsx)(t.td,{children:"First Float."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":oper2"]}),(0,s.jsx)(t.td,{children:"Second Float (gets subtracted from the first float)"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"The difference of the two given floats."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new Float:Number1 = 5, Float:Number2 = 2; // Declares two floats, Number1 (5) and Number2 (2)\n    new Float:Difference;\n    Difference = floatsub(Number1, Number2); // Saves the Difference(5-2 = 3) of Number1 and Number2 in the float "Difference"\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"Floatadd",children:"Floatadd"}),": Adds two floats."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"Floatmul",children:"Floatmul"}),": Multiplies two floats."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"floatdiv",children:"floatdiv"}),": Divides a float by another."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var o=n(96540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);