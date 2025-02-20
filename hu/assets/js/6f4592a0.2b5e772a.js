"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[6576],{28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var s=n(96540);const r={},i=s.createContext(r);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:t},e.children)}},97685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"scripting/functions/strpack","title":"strpack","description":"Pack a string.","source":"@site/docs/scripting/functions/strpack.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/strpack","permalink":"/hu/docs/scripting/functions/strpack","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/strpack.md","tags":[{"inline":true,"label":"string","permalink":"/hu/docs/tags/string"}],"version":"current","frontMatter":{"title":"strpack","sidebar_label":"strpack","description":"Pack a string.","tags":["string"]},"sidebar":"docsSidebar","previous":{"title":"strmid","permalink":"/hu/docs/scripting/functions/strmid"},"next":{"title":"strunpack","permalink":"/hu/docs/scripting/functions/strunpack"}}');var r=n(74848),i=n(28453);const c={title:"strpack",sidebar_label:"strpack",description:"Pack a string.",tags:["string"]},a=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Pack a string. Packed strings use 75% less memory."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"dest[]"}),(0,r.jsx)(t.td,{children:"The destination string to save the packed string in, passed by reference."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"const source[]"}),(0,r.jsx)(t.td,{children:"The source, original string."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxlength = sizeof (string)"}),(0,r.jsx)(t.td,{children:"The maximum size to insert."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"The number of characters packed."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'new string[32 char];\nstrpack(string, "Hi, how are you?");\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strcmp",children:"strcmp"}),": Compare two strings to check if they are the same."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strfind",children:"strfind"}),": Search for a string in another string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strins",children:"strins"}),": Insert text into a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strlen",children:"strlen"}),": Get the length of a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strmid",children:"strmid"}),": Extract part of a string into another string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strval",children:"strval"}),": Convert a string into an integer."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strcat",children:"strcat"}),": Concatenate two strings into a destination reference."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strdel",children:"strdel"}),": Delete part of a string."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);