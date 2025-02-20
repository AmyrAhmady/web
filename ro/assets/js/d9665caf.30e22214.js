"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[44767],{794:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"scripting/functions/uuencode","title":"uuencode","description":"Encode a string to an UU-decoded string.","source":"@site/docs/scripting/functions/uuencode.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/uuencode","permalink":"/ro/docs/scripting/functions/uuencode","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/uuencode.md","tags":[{"inline":true,"label":"string","permalink":"/ro/docs/tags/string"},{"inline":true,"label":"encryption","permalink":"/ro/docs/tags/encryption"}],"version":"current","frontMatter":{"title":"uuencode","sidebar_label":"uuencode","description":"Encode a string to an UU-decoded string.","tags":["string","encryption"]},"sidebar":"docsSidebar","previous":{"title":"uudecode","permalink":"/ro/docs/scripting/functions/uudecode"},"next":{"title":"valstr","permalink":"/ro/docs/scripting/functions/valstr"}}');var r=t(74848),i=t(28453);const o={title:"uuencode",sidebar_label:"uuencode",description:"Encode a string to an UU-decoded string.",tags:["string","encryption"]},c=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Encode a string to an UU-decoded string."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dest[]"}),(0,r.jsx)(n.td,{children:"The destination string for the encoded stream."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"const source[]"}),(0,r.jsx)(n.td,{children:"The source, non-encoded string."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numbytes"}),(0,r.jsx)(n.td,{children:"The number of bytes to encode, this should not exceed 45."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxlength = sizeof (dest)"}),(0,r.jsx)(n.td,{children:"The maximum length of the dest[] array."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"uuencode(encodedString, normalString, 45);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"uudecode",children:"uudecode"}),": Decode an UU-encoded string."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"memcpy",children:"memcpy"}),": Copy bytes from one location to another."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);