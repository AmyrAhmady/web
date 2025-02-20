"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[64890],{28453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>l});var o=n(96540);const s={},i=o.createContext(s);function r(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),o.createElement(i.Provider,{value:e},t.children)}},61950:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"scripting/functions/floatsqroot","title":"floatsqroot","description":"Calculates the square root of given value.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/floatsqroot.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/floatsqroot","permalink":"/th/docs/scripting/functions/floatsqroot","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/floatsqroot.md","tags":[],"version":"current","frontMatter":{"title":"floatsqroot","sidebar_label":"floatsqroot","description":"Calculates the square root of given value.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"floatsin","permalink":"/th/docs/scripting/functions/floatsin"},"next":{"title":"floatstr","permalink":"/th/docs/scripting/functions/floatstr"}}');var s=n(74848),i=n(28453);const r={title:"floatsqroot",sidebar_label:"floatsqroot",description:"Calculates the square root of given value.",tags:[]},l=void 0,a={},c=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function d(t){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsx)(e.p,{children:"This function starts with lowercase letter."})}),"\n",(0,s.jsx)(e.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,s.jsx)(e.p,{children:"Calculates the square root of given value."}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Name"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"value"}),(0,s.jsx)(e.td,{children:"The value to calculate the square root of."})]})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,s.jsx)(e.p,{children:"The square root of the input value, as a float."}),"\n",(0,s.jsx)(e.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"floatsqroot(25.0); // Returns 5, because 5x5 = 25\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"This function raises a \u201cdomain\u201d error if the input value is negative. You may use floatabs to get the absolute (positive) value."})}),"\n",(0,s.jsx)(e.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"../functions/floatpower",children:"floatpower"}),": Raises given value to a power of exponent."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"../functions/floatlog",children:"floatlog"}),": Get the logarithm of the float value."]}),"\n"]})]})}function u(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}}}]);