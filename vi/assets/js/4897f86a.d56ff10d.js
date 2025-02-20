"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[44358],{28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}},84681:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"scripting/functions/getproperty","title":"getproperty","description":"Get a specific property from the memory, the string is returned as a packed string!","source":"@site/docs/scripting/functions/getproperty.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/getproperty","permalink":"/vi/docs/scripting/functions/getproperty","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/getproperty.md","tags":[{"inline":true,"label":"core","permalink":"/vi/docs/tags/core"},{"inline":true,"label":"property","permalink":"/vi/docs/tags/property"}],"version":"current","frontMatter":{"title":"getproperty","sidebar_label":"getproperty","description":"Get a specific property from the memory, the string is returned as a packed string!","tags":["core","property"]},"sidebar":"docsSidebar","previous":{"title":"getdate","permalink":"/vi/docs/scripting/functions/getdate"},"next":{"title":"getpubvar","permalink":"/vi/docs/scripting/functions/getpubvar"}}');var s=r(74848),i=r(28453);const o={title:"getproperty",sidebar_label:"getproperty",description:"Get a specific property from the memory, the string is returned as a packed string!",tags:["core","property"]},c=void 0,p={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{LowercaseNote:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Get a specific property from the memory, the string is returned as a packed string!"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsxs)(t.td,{children:["The virtual machine to use, you should keep this zero. ",(0,s.jsx)(t.em,{children:"(optional=0)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name[]"}),(0,s.jsx)(t.td,{children:'The property\'s name, you should keep this "".'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"value"}),(0,s.jsxs)(t.td,{children:["The property's unique ID, Use the hash-function to calculate it from a string. ",(0,s.jsx)(t.em,{children:"(optional=cellmin)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"string[]"}),(0,s.jsx)(t.td,{children:"The variable to store the result in, passed by reference."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"The value of a property when the name is passed in; fills in the string argument when the value is passed in. If the property does not exist, this function returns zero."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'new value[16];\n\ngetproperty(0, "", 123984334, value);\n\nstrunpack(value, value, sizeof(value));\n\nprint(value);\n'})}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"It is recommended to use the PVars/SVars or GVar plugin instead of these natives for being very slow."})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"setproperty",children:"setproperty"}),": Set a property."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"deleteproperty",children:"deleteproperty"}),": Delete a property."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"existproperty",children:"existproperty"}),": Check if a property exists."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);