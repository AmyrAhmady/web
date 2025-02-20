"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[10456],{28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}},34172:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"scripting/functions/ispacked","title":"ispacked","description":"Checks if the given string is packed.","source":"@site/docs/scripting/functions/ispacked.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ispacked","permalink":"/ru/docs/scripting/functions/ispacked","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/ispacked.md","tags":[{"inline":true,"label":"string","permalink":"/ru/docs/tags/string"}],"version":"current","frontMatter":{"title":"ispacked","sidebar_label":"ispacked","description":"Checks if the given string is packed.","tags":["string"]},"sidebar":"docsSidebar","previous":{"title":"heapspace","permalink":"/ru/docs/scripting/functions/heapspace"},"next":{"title":"listenport","permalink":"/ru/docs/scripting/functions/listenport"}}');var i=t(74848),r=t(28453);const c={title:"ispacked",sidebar_label:"ispacked",description:"Checks if the given string is packed.",tags:["string"]},o=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Checks if the given string is packed."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"const string[]"}),(0,i.jsx)(n.td,{children:"The string to check."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"1"})," if the string is packed, ",(0,i.jsx)(n.strong,{children:"0"})," if it's unpacked."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'// Create a packed string\nnew string[24 char];\n\nif (ispacked(string))\n{\n   print("The string is packed.");\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"strpack",children:"strpack"}),": Pack a string."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"strunpack",children:"strunpack"}),": This function can be used to unpack a string."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);