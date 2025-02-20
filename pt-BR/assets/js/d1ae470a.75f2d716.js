"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[55474],{28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var s=t(96540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}},52850:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"scripting/functions/strunpack","title":"strunpack","description":"This function can be used to unpack a string.","source":"@site/docs/scripting/functions/strunpack.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/strunpack","permalink":"/pt-BR/docs/scripting/functions/strunpack","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/strunpack.md","tags":[{"inline":true,"label":"string","permalink":"/pt-BR/docs/tags/string"}],"version":"current","frontMatter":{"title":"strunpack","sidebar_label":"strunpack","description":"This function can be used to unpack a string.","tags":["string"]},"sidebar":"docsSidebar","previous":{"title":"strpack","permalink":"/pt-BR/docs/scripting/functions/strpack"},"next":{"title":"strval","permalink":"/pt-BR/docs/scripting/functions/strval"}}');var r=t(74848),i=t(28453);const c={title:"strunpack",sidebar_label:"strunpack",description:"This function can be used to unpack a string.",tags:["string"]},a=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"This function can be used to unpack a string."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dest[]"}),(0,r.jsx)(n.td,{children:"The destination string to save the unpacked string in, passed by reference."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"const source[]"}),(0,r.jsx)(n.td,{children:"The source, original packed string."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxlength = sizeof (string)"}),(0,r.jsx)(n.td,{children:"The maximum size to insert."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"The number of characters packed."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new string[17];\nnew pstring[17 char] =\xa0!"Hi, how are you?";\nstrunpack(string, pstring);\n'})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"ispacked",children:"ispacked"}),": Check if the given string is packed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"strpack",children:"strpack"}),": This function can be used to pack a string."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"strcmp",children:"strcmp"}),": Compare two strings to check if they are the same."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"strfind",children:"strfind"}),": Search for a string in another string."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"strins",children:"strins"}),": Insert text into a string."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"strlen",children:"strlen"}),": Get the length of a string."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"strmid",children:"strmid"}),": Extract part of a string into another string."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"strpack",children:"strpack"}),": Pack a string into a destination string."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"strval",children:"strval"}),": Convert a string into an integer."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"strcat",children:"strcat"}),": Concatenate two strings into a destination reference."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"strdel",children:"strdel"}),": Delete part of a string."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);