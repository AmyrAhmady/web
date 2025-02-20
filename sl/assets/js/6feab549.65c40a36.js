"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[9019],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}},37987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"scripting/functions/memcpy","title":"memcpy","description":"Copy bytes from one location to another.","source":"@site/docs/scripting/functions/memcpy.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/memcpy","permalink":"/sl/docs/scripting/functions/memcpy","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/memcpy.md","tags":[{"inline":true,"label":"string","permalink":"/sl/docs/tags/string"}],"version":"current","frontMatter":{"title":"memcpy","sidebar_label":"memcpy","description":"Copy bytes from one location to another.","tags":["string"]},"sidebar":"docsSidebar","previous":{"title":"max","permalink":"/sl/docs/scripting/functions/max"},"next":{"title":"min","permalink":"/sl/docs/scripting/functions/min"}}');var r=n(74848),i=n(28453);const o={title:"memcpy",sidebar_label:"memcpy",description:"Copy bytes from one location to another.",tags:["string"]},c=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Copy bytes from one location to another."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"dest[]"}),(0,r.jsx)(t.td,{children:"An array into which the bytes from source are copied in."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"const source[]"}),(0,r.jsx)(t.td,{children:"The source array."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"index = 0"}),(0,r.jsx)(t.td,{children:"The start index in bytes in the destination array where the data should be copied to."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"numbytes"}),(0,r.jsx)(t.td,{children:"The number of bytes (not cells) to copy."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxlength = sizeof (dest)"}),(0,r.jsx)(t.td,{children:"The maximum number of cells that fit in the destination buffer."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"true"})," on success, ",(0,r.jsx)(t.strong,{children:"false"})," on failure."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'// Concatenate two strings with memcpy\nnew\n\tdestination[64] = "This is ",\n\tsource[] = "a string in a 32 Bit Array";\n\nmemcpy(destination, source, strlen(destination) * 4, sizeof source * 4, sizeof destination);\nprint(destination);\n// Output: This is a string in a 32 Bit Array\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strcmp",children:"strcmp"}),": Compare two strings to see if they are the same."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strfind",children:"strfind"}),": Search for a substring in a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strdel",children:"strdel"}),": Delete part/all of a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strins",children:"strins"}),": Put a string into another string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strlen",children:"strlen"}),": Check the length of a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strmid",children:"strmid"}),": Extract characters from a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strpack",children:"strpack"}),": Pack a string into a destination."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strval",children:"strval"}),": Find the value of a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strcat",children:"strcat"}),": Concatenate two strings."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);