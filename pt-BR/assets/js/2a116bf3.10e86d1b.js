"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[48863],{21035:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"scripting/functions/setproperty","title":"setproperty","description":"Add a new property or change an existing property.","source":"@site/docs/scripting/functions/setproperty.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/setproperty","permalink":"/pt-BR/docs/scripting/functions/setproperty","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/setproperty.md","tags":[{"inline":true,"label":"core","permalink":"/pt-BR/docs/tags/core"},{"inline":true,"label":"property","permalink":"/pt-BR/docs/tags/property"}],"version":"current","frontMatter":{"title":"setproperty","sidebar_label":"setproperty","description":"Add a new property or change an existing property.","tags":["core","property"]},"sidebar":"docsSidebar","previous":{"title":"setarg","permalink":"/pt-BR/docs/scripting/functions/setarg"},"next":{"title":"setpubvar","permalink":"/pt-BR/docs/scripting/functions/setpubvar"}}');var s=r(74848),i=r(28453);const o={title:"setproperty",sidebar_label:"setproperty",description:"Add a new property or change an existing property.",tags:["core","property"]},p=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{LowercaseNote:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Add a new property or change an existing property."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsxs)(t.td,{children:["The virtual machine to use, you should keep this zero. ",(0,s.jsx)(t.em,{children:"(optional=0)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name[]"}),(0,s.jsx)(t.td,{children:"Used in combination with value when storing integers; don't use this if you want to store a string."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"value"}),(0,s.jsxs)(t.td,{children:["The integer value to store or the property's unique ID if storing a string. Use the hash-function to calculate it from a string. ",(0,s.jsx)(t.em,{children:"(optional=cellmin)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"string[]"}),(0,s.jsx)(t.td,{children:"The value of the property, as a string. Don't use this if you want to store an integer."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'setproperty(.name = "MyInteger", .value = 42);\n\nnew value = getproperty(.name = "MyInteger");\nprintf("Value that was stored is: %d", value);\nsetproperty(0, "", 123984334, ":)");\n\nnew value[4];\ngetproperty(0, "", 123984334, value);\nstrunpack(value, value, sizeof(value)); // we need to unpack the string first\nprint(value);\n\n//should print\xa0:)\nsetproperty(.value = 123984334, .string = ":)");\n\n// The rest is the same as above.\n'})}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"It is recommended to use the PVars/SVars or GVar plugin instead of these natives for being very slow."})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"getproperty",children:"getproperty"}),": Get the value of a property."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"deleteproperty",children:"deleteproperty"}),": Delete a property."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"existproperty",children:"existproperty"}),": Check if a property exists."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>p});var n=r(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);