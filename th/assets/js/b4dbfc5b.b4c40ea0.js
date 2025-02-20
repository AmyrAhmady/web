"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[96395],{28453:(t,n,e)=>{e.d(n,{R:()=>c,x:()=>o});var s=e(96540);const i={},r=s.createContext(i);function c(t){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function o(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:c(t.components),s.createElement(r.Provider,{value:n},t.children)}},39089:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"scripting/functions/memcpy","title":"memcpy","description":"Copy bytes from one location to another.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/memcpy.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/memcpy","permalink":"/th/docs/scripting/functions/memcpy","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/memcpy.md","tags":[],"version":"current","frontMatter":{"title":"memcpy","sidebar_label":"memcpy","description":"Copy bytes from one location to another.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"max","permalink":"/th/docs/scripting/functions/max"},"next":{"title":"min","permalink":"/th/docs/scripting/functions/min"}}');var i=e(74848),r=e(28453);const c={title:"memcpy",sidebar_label:"memcpy",description:"Copy bytes from one location to another.",tags:[]},o=void 0,d={},a=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function l(t){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"This function starts with lowercase letter."})}),"\n",(0,i.jsx)(n.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,i.jsx)(n.p,{children:"Copy bytes from one location to another."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dest[]"}),(0,i.jsx)(n.td,{children:"An array into which the bytes from source are copied in."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"const source[]"}),(0,i.jsx)(n.td,{children:"The source array."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"index"}),(0,i.jsx)(n.td,{children:"The start index in bytes in the destination array where the data should be copied to."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"numbytes"}),(0,i.jsx)(n.td,{children:"The number of bytes (not cells) to copy."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxlength=sizeof dest"}),(0,i.jsx)(n.td,{children:"The maximum number of cells that fit in the destination buffer."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,i.jsx)(n.p,{children:"True on success, false on failure."}),"\n",(0,i.jsx)(n.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'//Concatenate two strings with memcpy\nnew destination[64] = "This is ";\nnew source[] = "a string in a 32 Bit Array";\nmemcpy(destination, source, strlen(destination) * 4, sizeof source * 4, sizeof destination);\nprint(destination);\n//Output: This is a string in a 32 Bit Array\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/th/docs/scripting/functions/strcmp",children:"strcmp"}),": Compare two strings to see if they are the same."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/th/docs/scripting/functions/strfind",children:"strfind"}),": Search for a substring in a string."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/th/docs/scripting/functions/strdel",children:"strdel"}),": Delete part/all of a string."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/th/docs/scripting/functions/strins",children:"strins"}),": Put a string into another string."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/th/docs/scripting/functions/strlen",children:"strlen"}),": Check the length of a string."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/th/docs/scripting/functions/strmid",children:"strmid"}),": Extract characters from a string."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/th/docs/scripting/functions/strpack",children:"strpack"}),": Pack a string into a destination."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/th/docs/scripting/functions/strval",children:"strval"}),": Find the value of a string."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/th/docs/scripting/functions/strcat",children:"strcat"}),": Concatenate two strings."]}),"\n"]})]})}function h(t={}){const{wrapper:n}={...(0,r.R)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(l,{...t})}):l(t)}}}]);