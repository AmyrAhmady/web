"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[61596],{14554:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"scripting/functions/format","title":"format","description":"Formats a string to include variables and other strings inside it.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/format.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/format","permalink":"/th/docs/scripting/functions/format","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/format.md","tags":[],"version":"current","frontMatter":{"title":"format","sidebar_label":"format","description":"Formats a string to include variables and other strings inside it.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"fopen","permalink":"/th/docs/scripting/functions/fopen"},"next":{"title":"fputchar","permalink":"/th/docs/scripting/functions/fputchar"}}');var s=t(74848),r=t(28453);const o={title:"format",sidebar_label:"format",description:"Formats a string to include variables and other strings inside it.",tags:[]},a=void 0,d={},l=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function c(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsx)(e.p,{children:"This function starts with lowercase letter."})}),"\n",(0,s.jsx)(e.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,s.jsx)(e.p,{children:"Formats a string to include variables and other strings inside it."}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Name"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"output[]"}),(0,s.jsx)(e.td,{children:"The string to output the result to"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"len"}),(0,s.jsx)(e.td,{children:"The maximum length output can contain"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"format[]"}),(0,s.jsx)(e.td,{children:"The format string"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\\ {Float, _}:..."}),(0,s.jsx)(e.td,{children:"Indefinite number of arguments of any tag"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,s.jsx)(e.p,{children:"This function does not return any specific values."}),"\n",(0,s.jsx)(e.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'new result[128];\nnew number = 42;\nformat(result,sizeof(result), "The number is %i.",number);  //-> The number is 42.\nnew string[]= "simple message";\nformat(result,sizeof(result), "This is a %s containing the number %i.", string, number);\n// This is a simple message containing the number 42.\nnew string[64];\nformat(string,sizeof(string),"Your score is: %d",GetPlayerScore(playerid));\nSendClientMessage(playerid,0xFFFFFFAA,string);\nnew hour, minute, second, string[32];\ngettime(hour, minute, second);\n\nformat(string, sizeof(string), "The time is %02d:%02d:%02d.", hour, minute, second); // will output something like 09:45:02\nSendClientMessage(playerid, -1, string);\nnew string[35];\nformat(string,sizeof(string),"43%s of my shirts are black.","%%");\nSendClientMessage(playerid,0xFFFFFAA,string);\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsx)(e.p,{children:"This function doesn't support packed strings."})}),"\n",(0,s.jsx)(e.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"../functions/print",children:"print"}),": Print a basic message to the server logs and console."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"../functions/printf",children:"printf"}),": Print a formatted message into the server logs and console."]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);