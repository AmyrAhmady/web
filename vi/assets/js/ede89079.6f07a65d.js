"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[94556],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var i=t(96540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}},39180:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/CallRemoteFunction","title":"CallRemoteFunction","description":"Calls a public function in any script that is loaded.","source":"@site/docs/scripting/functions/CallRemoteFunction.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CallRemoteFunction","permalink":"/vi/docs/scripting/functions/CallRemoteFunction","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/CallRemoteFunction.md","tags":[{"inline":true,"label":"core","permalink":"/vi/docs/tags/core"}],"version":"current","frontMatter":{"title":"CallRemoteFunction","sidebar_label":"CallRemoteFunction","description":"Calls a public function in any script that is loaded.","tags":["core"]},"sidebar":"docsSidebar","previous":{"title":"CallLocalFunction","permalink":"/vi/docs/scripting/functions/CallLocalFunction"},"next":{"title":"CancelEdit","permalink":"/vi/docs/scripting/functions/CancelEdit"}}');var s=t(74848),r=t(28453);const l={title:"CallRemoteFunction",sidebar_label:"CallRemoteFunction",description:"Calls a public function in any script that is loaded.",tags:["core"]},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Format Specifiers",id:"format-specifiers",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Calls a public function in any script that is loaded."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"const functionName[]"}),(0,s.jsx)(n.td,{children:"Public function's name."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"const specifiers[]"}),(0,s.jsx)(n.td,{children:"Tag/format of each variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OPEN_MP_TAGS:..."}),(0,s.jsx)(n.td,{children:"'Indefinite' number of arguments of any tag"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"The value that the last public function returned."}),"\n",(0,s.jsx)(n.h2,{id:"format-specifiers",children:"Format Specifiers"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Placeholder"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Meaning"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"a"})}),(0,s.jsxs)(n.td,{children:["Passes an array (the next placeholder should be d or i for the array size, so the function will be aware of it).",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"NOTE"}),": It accepts only one dimension, so a trick like sizeof (array) + sizeof (array) * sizeof (array[]) for the array size would be needed to pass a 2D array."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"c"})}),(0,s.jsx)(n.td,{children:"Passes a single character."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"d"}),",",(0,s.jsx)(n.code,{children:"i"})]}),(0,s.jsx)(n.td,{children:"Passes an integer (whole) number."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"x"})}),(0,s.jsx)(n.td,{children:"Passes a number in hexadecimal notation."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"f"})}),(0,s.jsx)(n.td,{children:"Passes a floating point number."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"s"})}),(0,s.jsx)(n.td,{children:"Passes a string."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'forward CallMe(number, const string[]);\npublic CallMe(number, const string[])\n{\n    printf("CallMe called. Int: %i  String: %s.", number, string);\n    return 1;\n}\n\n// Somewhere... in another file perhaps?\nCallRemoteFunction("CallMe", "is", 69, "this is a string");\n'})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"CallRemoteFunction crashes the server if it's passing an empty string. (Fixed in open.mp)"})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"CallLocalFunction",children:"CallLocalFunction"}),": Call a function in the script."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);