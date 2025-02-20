"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[26690],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}},50687:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"scripting/functions/strcmp","title":"strcmp","description":"Compares two strings to see if they are the same.","source":"@site/docs/scripting/functions/strcmp.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/strcmp","permalink":"/sr/docs/scripting/functions/strcmp","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/strcmp.md","tags":[{"inline":true,"label":"string","permalink":"/sr/docs/tags/string"}],"version":"current","frontMatter":{"title":"strcmp","sidebar_label":"strcmp","description":"Compares two strings to see if they are the same.","tags":["string"]},"sidebar":"docsSidebar","previous":{"title":"strcat","permalink":"/sr/docs/scripting/functions/strcat"},"next":{"title":"strcopy","permalink":"/sr/docs/scripting/functions/strcopy"}}');var r=t(74848),i=t(28453);const l={title:"strcmp",sidebar_label:"strcmp",description:"Compares two strings to see if they are the same.",tags:["string"]},c=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Tutorials",id:"tutorials",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Compares two strings to see if they are the same."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"const string1[]"}),(0,r.jsx)(n.td,{children:"The first string to compare."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"const string2[]"}),(0,r.jsx)(n.td,{children:"The second string to compare."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["bool",":ignorecase"," ",(0,r.jsx)(n.em,{children:"(optional)"})]}),(0,r.jsxs)(n.td,{children:["When set to ",(0,r.jsx)(n.strong,{children:"true"}),", the case doesn't matter - HeLLo is the same as Hello. When ",(0,r.jsx)(n.strong,{children:"false"}),", they're not the same."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["length ",(0,r.jsx)(n.em,{children:"(optional)"})]}),(0,r.jsx)(n.td,{children:'When this length is set, the first x chars will be compared - doing "Hello" and "Hell No" with a length of 4 will say it\'s the same string.'})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"0"})," if strings match each other on given length."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"1"})," or ",(0,r.jsx)(n.strong,{children:"-1"})," if some character do not match: ",(0,r.jsx)(n.code,{children:"string1[i] - string2[i]"})," ('",(0,r.jsx)(n.code,{children:"i"}),"' represents character index starting from 0)"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"difference in number of characters"})," if one string matches only part of another string."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new string1[] = "Hello World";\nnew string2[] = "Hello World";\n\n// Check if the strings are the same\nif (!strcmp(string1, string2))\n\nnew string3[] = "Hell";\n\n// Check if the first 4 characters match\nif (!strcmp(string2, string3, false, 4))\n\n// Check for null strings with isnull()\nif (!strcmp(string1, string2) &&\xa0!isnull(string1) &&\xa0!isnull(string2))\n\n// Definition for isnull():\n#if\xa0!defined isnull\n    #define isnull(%1) ((!(%1[0])) || (((%1[0]) == \'\\1\') && (!(%1[1]))))\n#endif\n'})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["This function returns ",(0,r.jsx)(n.strong,{children:"0"})," if either string is empty. Check for null strings with ",(0,r.jsx)(n.code,{children:"isnull()"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If you compare strings from a text file, you should take in to account the 'carriage return' and 'new line' special characters (",(0,r.jsx)(n.code,{children:"\\r"})," ",(0,r.jsx)(n.code,{children:"\\n"}),"), as they are included, when using ",(0,r.jsx)(n.a,{href:"fread",children:"fread"}),"."]}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"strfind",children:"strfind"}),": Search for a string in another string."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"strequal",children:"strequal"}),": Compares two strings to see if they are the same."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"strdel",children:"strdel"}),": Delete part of a string."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"strins",children:"strins"}),": Insert text into a string."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"strlen",children:"strlen"}),": Get the length of a string."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"strmid",children:"strmid"}),": Extract part of a string into another string."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"strpack",children:"strpack"}),": Pack a string into a destination string."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"strval",children:"strval"}),": Convert a string into an integer."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"strcat",children:"strcat"}),": Concatenate two strings into a destination reference."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"tutorials",children:"Tutorials"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../tutorials/stringmanipulation",children:"String Manipulation"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);