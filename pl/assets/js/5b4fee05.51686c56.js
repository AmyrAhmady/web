"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[67639],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}},42849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"scripting/functions/strfind","title":"strfind","description":"Search for a sub string in a string.","source":"@site/docs/scripting/functions/strfind.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/strfind","permalink":"/pl/docs/scripting/functions/strfind","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/strfind.md","tags":[{"inline":true,"label":"string","permalink":"/pl/docs/tags/string"}],"version":"current","frontMatter":{"title":"strfind","sidebar_label":"strfind","description":"Search for a sub string in a string.","tags":["string"]},"sidebar":"docsSidebar","previous":{"title":"strequal","permalink":"/pl/docs/scripting/functions/strequal"},"next":{"title":"strfloat","permalink":"/pl/docs/scripting/functions/strfloat"}}');var r=n(74848),i=n(28453);const o={title:"strfind",sidebar_label:"strfind",description:"Search for a sub string in a string.",tags:["string"]},c=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Search for a sub string in a string."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"const string[]"}),(0,r.jsx)(t.td,{children:"The string you want to search in (haystack)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"const sub[]"}),(0,r.jsx)(t.td,{children:"The string you want to search for (needle)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["bool",":ignorecase"," ",(0,r.jsx)(t.em,{children:"(optional)"})]}),(0,r.jsx)(t.td,{children:"When set to true, the case doesn't matter - HeLLo is the same as Hello. When false, they're not the same."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Position ",(0,r.jsx)(t.em,{children:"(optional)"})]}),(0,r.jsx)(t.td,{children:"The offset to start searching from."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"The number of characters before the sub string (the sub string's start position) or -1 if it's not found."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'if (strfind("Are you in here?", "you", true)\xa0!= -1) // Returns 4, because the start of \'you\' (y) is at index 4 in the string\n{\n    SendClientMessageToAll(0xFFFFFFFF, "I found you!");\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strcmp",children:"strcmp"}),": Compare two strings to check if they are the same."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strdel",children:"strdel"}),": Delete part of a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strins",children:"strins"}),": Insert text into a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strlen",children:"strlen"}),": Get the length of a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strmid",children:"strmid"}),": Extract part of a string into another string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strpack",children:"strpack"}),": Pack a string into a destination string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strval",children:"strval"}),": Convert a string into an integer."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strcat",children:"strcat"}),": Concatenate two strings into a destination reference."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);