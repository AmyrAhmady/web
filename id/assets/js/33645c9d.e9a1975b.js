"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[98664],{11989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"scripting/functions/strequal","title":"strequal","description":"Compares two strings to see if they are the same.","source":"@site/docs/scripting/functions/strequal.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/strequal","permalink":"/id/docs/scripting/functions/strequal","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/strequal.md","tags":[{"inline":true,"label":"string","permalink":"/id/docs/tags/string"}],"version":"current","frontMatter":{"title":"strequal","sidebar_label":"strequal","description":"Compares two strings to see if they are the same.","tags":["string"]},"sidebar":"docsSidebar","previous":{"title":"strdel","permalink":"/id/docs/scripting/functions/strdel"},"next":{"title":"strfind","permalink":"/id/docs/scripting/functions/strfind"}}');var r=n(74848),i=n(28453);const o={title:"strequal",sidebar_label:"strequal",description:"Compares two strings to see if they are the same.",tags:["string"]},l=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{LowercaseNote:n,VersionWarn:s}=t;return n||p("LowercaseNote",!0),s||p("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(n,{}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Compares two strings to see if they are the same."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"const string1[]"}),(0,r.jsx)(t.td,{children:"The first string to compare."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"const string2[]"}),(0,r.jsx)(t.td,{children:"The second string to compare."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["bool",":ignorecase"," ",(0,r.jsx)(t.em,{children:"(optional)"})]}),(0,r.jsxs)(t.td,{children:["When set to ",(0,r.jsx)(t.strong,{children:"true"}),", the case doesn't matter - HeLLo is the same as Hello. When ",(0,r.jsx)(t.strong,{children:"false"}),", they're not the same."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["length ",(0,r.jsx)(t.em,{children:"(optional)"})]}),(0,r.jsx)(t.td,{children:'When this length is set, the first x chars will be compared - doing "Hello" and "Hell No" with a length of 4 will say it\'s the same string.'})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"true"})," if the strings match each other on given length, ",(0,r.jsx)(t.strong,{children:"false"})," otherwise."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'new string1[] = "Hello World";\nnew string2[] = "Hello World";\n\n// Check if the strings are the same\nif (strequal(string1, string2))\n{\n    print("Strings are equal.");\n}\nelse\n{\n    print("Strings are not equal.");\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["This is a conveniece function that depends on ",(0,r.jsx)(t.a,{href:"strcmp",children:"strcmp"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"strcmp",children:"strcmp"}),": Search for a string in another string."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);