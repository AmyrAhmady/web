"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[30901],{10326:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"scripting/functions/strfind","title":"strfind","description":"Search for a sub string in a string.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/strfind.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/strfind","permalink":"/th/docs/scripting/functions/strfind","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/strfind.md","tags":[],"version":"current","frontMatter":{"title":"strfind","sidebar_label":"strfind","description":"Search for a sub string in a string.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"strequal","permalink":"/th/docs/scripting/functions/strequal"},"next":{"title":"strfloat","permalink":"/th/docs/scripting/functions/strfloat"}}');var r=e(74848),i=e(28453);const o={title:"strfind",sidebar_label:"strfind",description:"Search for a sub string in a string.",tags:[]},c=void 0,a={},d=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function l(t){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"This function starts with lowercase letter."})}),"\n",(0,r.jsx)(n.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,r.jsx)(n.p,{children:"Search for a sub string in a string."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"const string[]"}),(0,r.jsx)(n.td,{children:"The string you want to search in (haystack)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"const sub[]"}),(0,r.jsx)(n.td,{children:"The string you want to search for (needle)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ignorecase (optional)"}),(0,r.jsx)(n.td,{children:"When set to true, the case doesn't matter - HeLLo is the same as Hello. When false, they're not the same."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Position (optional)"}),(0,r.jsx)(n.td,{children:"The offset to start searching from."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,r.jsx)(n.p,{children:"The number of characters before the sub string (the sub string's start position) or -1 if it's not found."}),"\n",(0,r.jsx)(n.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'if (strfind("Are you in here?", "you", true)\xa0!= -1) //returns 4, because the start of \'you\' (y) is at index 4 in the string\n{\n    SendClientMessageToAll(0xFFFFFFFF, "I found you!");\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"strcmp: Compare two strings to check if they are the same."}),"\n",(0,r.jsx)(n.li,{children:"strtok: Get the next 'token' (word/parameter) in a string."}),"\n",(0,r.jsx)(n.li,{children:"strdel: Delete part of a string."}),"\n",(0,r.jsx)(n.li,{children:"strins: Insert text into a string."}),"\n",(0,r.jsx)(n.li,{children:"strlen: Get the length of a string."}),"\n",(0,r.jsx)(n.li,{children:"strmid: Extract part of a string into another string."}),"\n",(0,r.jsx)(n.li,{children:"strpack: Pack a string into a destination string."}),"\n",(0,r.jsx)(n.li,{children:"strval: Convert a string into an integer."}),"\n",(0,r.jsx)(n.li,{children:"strcat: Concatenate two strings into a destination reference."}),"\n"]})]})}function h(t={}){const{wrapper:n}={...(0,i.R)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(l,{...t})}):l(t)}},28453:(t,n,e)=>{e.d(n,{R:()=>o,x:()=>c});var s=e(96540);const r={},i=s.createContext(r);function o(t){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),s.createElement(i.Provider,{value:n},t.children)}}}]);