"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[97555],{28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>l});var t=i(96540);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}},40904:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"scripting/functions/CallLocalFunction","title":"CallLocalFunction","description":"Calls a public function from the script in which it is used.","source":"@site/docs/scripting/functions/CallLocalFunction.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CallLocalFunction","permalink":"/id/docs/scripting/functions/CallLocalFunction","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/CallLocalFunction.md","tags":[{"inline":true,"label":"core","permalink":"/id/docs/tags/core"}],"version":"current","frontMatter":{"title":"CallLocalFunction","sidebar_label":"CallLocalFunction","description":"Calls a public function from the script in which it is used.","tags":["core"]},"sidebar":"docsSidebar","previous":{"title":"BlockIpAddress","permalink":"/id/docs/scripting/functions/BlockIpAddress"},"next":{"title":"CallRemoteFunction","permalink":"/id/docs/scripting/functions/CallRemoteFunction"}}');var s=i(74848),r=i(28453);const c={title:"CallLocalFunction",sidebar_label:"CallLocalFunction",description:"Calls a public function from the script in which it is used.",tags:["core"]},l=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Format Specifiers",id:"format-specifiers",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Calls a public function from the script in which it is used."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"const functionName[]"}),(0,s.jsx)(n.td,{children:"Public function's name."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"const specifiers[]"}),(0,s.jsx)(n.td,{children:"Tag/format of each variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OPEN_MP_TAGS:..."}),(0,s.jsx)(n.td,{children:"'Indefinite' number of arguments of any tag"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"If the function exists, returns the same as the called function."}),"\n",(0,s.jsx)(n.p,{children:"If the function does not exist, returns 0."}),"\n",(0,s.jsx)(n.h2,{id:"format-specifiers",children:"Format Specifiers"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Placeholder"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Meaning"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"a"})}),(0,s.jsxs)(n.td,{children:["Passes an array (the next placeholder should be d or i for the array size, so the function will be aware of it).",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"NOTE"}),": It accepts only one dimension, so a trick like sizeof (array) + sizeof (array) * sizeof (array[]) for the array size would be needed to pass a 2D array."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"c"})}),(0,s.jsx)(n.td,{children:"Passes a single character."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"d"}),",",(0,s.jsx)(n.code,{children:"i"})]}),(0,s.jsx)(n.td,{children:"Passes an integer (whole) number."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"x"})}),(0,s.jsx)(n.td,{children:"Passes a number in hexadecimal notation."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"f"})}),(0,s.jsx)(n.td,{children:"Passes a floating point number."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"s"})}),(0,s.jsx)(n.td,{children:"Passes a string."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'forward publicFunc(number, Float:flt, const string[]);\npublic publicFunc(number, Float:flt, const string[])\n{\n    printf("Received integer %i, float %f, string %s", number, flt, string);\n    return 1;\n}\n\nCallLocalFunction("publicFunc", "ifs", 420, 68.999999999, "Hello world");\n'})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"CallLocalFunction crashes the server if it's passing an empty string. (Fixed in open.mp)"})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"CallRemoteFunction",children:"CallRemoteFunction"}),": Call a function in any loaded script."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);