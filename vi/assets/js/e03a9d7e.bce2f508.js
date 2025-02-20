"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[19995],{28453:(n,e,l)=>{l.d(e,{R:()=>c,x:()=>t});var i=l(96540);const a={},s=i.createContext(a);function c(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:c(n.components),i.createElement(s.Provider,{value:e},n.children)}},47986:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>r,contentTitle:()=>t,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"scripting/callbacks/OnPlayerRequestClass","title":"OnPlayerRequestClass","description":"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i thay \u0111\u1ed5i l\u1edbp trong ch\u1ecdn l\u1edbp (v\xe0 khi ch\u1ecdn l\u1edbp xu\u1ea5t hi\u1ec7n l\u1ea7n \u0111\u1ea7u).","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerRequestClass.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerRequestClass","permalink":"/vi/docs/scripting/callbacks/OnPlayerRequestClass","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerRequestClass.md","tags":[{"inline":true,"label":"player","permalink":"/vi/docs/tags/player"},{"inline":true,"label":"class","permalink":"/vi/docs/tags/class"}],"version":"current","frontMatter":{"title":"OnPlayerRequestClass","sidebar_label":"OnPlayerRequestClass","description":"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i thay \u0111\u1ed5i l\u1edbp trong ch\u1ecdn l\u1edbp (v\xe0 khi ch\u1ecdn l\u1edbp xu\u1ea5t hi\u1ec7n l\u1ea7n \u0111\u1ea7u).","tags":["player","class"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerPickupStreamOut","permalink":"/vi/docs/scripting/callbacks/OnPlayerPickupStreamOut"},"next":{"title":"OnPlayerRequestDownload","permalink":"/vi/docs/scripting/callbacks/OnPlayerRequestDownload"}}');var a=l(74848),s=l(28453);const c={title:"OnPlayerRequestClass",sidebar_label:"OnPlayerRequestClass",description:"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i thay \u0111\u1ed5i l\u1edbp trong ch\u1ecdn l\u1edbp (v\xe0 khi ch\u1ecdn l\u1edbp xu\u1ea5t hi\u1ec7n l\u1ea7n \u0111\u1ea7u).",tags:["player","class"]},t=void 0,r={},h=[{value:"M\xf4 T\u1ea3",id:"m\xf4-t\u1ea3",level:2},{value:"Tr\u1ea3 V\u1ec1",id:"tr\u1ea3-v\u1ec1",level:2},{value:"V\xed D\u1ee5",id:"v\xed-d\u1ee5",level:2},{value:"Ghi Ch\xfa",id:"ghi-ch\xfa",level:2},{value:"Callbacks Li\xean Quan",id:"callbacks-li\xean-quan",level:2},{value:"H\xe0m Li\xean Quan",id:"h\xe0m-li\xean-quan",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"m\xf4-t\u1ea3",children:"M\xf4 T\u1ea3"}),"\n",(0,a.jsx)(e.p,{children:"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i thay \u0111\u1ed5i l\u1edbp trong ch\u1ecdn l\u1edbp (v\xe0 khi ch\u1ecdn l\u1edbp xu\u1ea5t hi\u1ec7n l\u1ea7n \u0111\u1ea7u)."}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"T\xean"}),(0,a.jsx)(e.th,{children:"M\xf4 T\u1ea3"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"playerid"}),(0,a.jsx)(e.td,{children:"ID c\u1ee7a ng\u01b0\u1eddi ch\u01a1i \u0111\xe3 thay \u0111\u1ed5i l\u1edbp."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"classid"}),(0,a.jsxs)(e.td,{children:["ID c\u1ee7a l\u1edbp hi\u1ec7n t\u1ea1i \u0111ang \u0111\u01b0\u1ee3c xem (tr\u1ea3 v\u1ec1 b\u1edfi ",(0,a.jsx)(e.a,{href:"../functions/AddPlayerClass",children:"AddPlayerClass"}),")."]})]})]})]}),"\n",(0,a.jsx)(e.h2,{id:"tr\u1ea3-v\u1ec1",children:"Tr\u1ea3 V\u1ec1"}),"\n",(0,a.jsx)(e.p,{children:"Callback n\xe0y lu\xf4n \u0111\u01b0\u1ee3c g\u1ecdi \u0111\u1ea7u ti\xean trong filterscripts."}),"\n",(0,a.jsx)(e.h2,{id:"v\xed-d\u1ee5",children:"V\xed D\u1ee5"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-c",children:'public OnPlayerRequestClass(playerid, classid)\n{\n    if (classid == 3 && !IsPlayerAdmin(playerid))\n    {\n        SendClientMessage(playerid, COLOR_RED, "L\u1edbp n\xe0y ch\u1ec9 d\xe0nh cho qu\u1ea3n tr\u1ecb vi\xean!");\n        return 0;\n    }\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"ghi-ch\xfa",children:"Ghi Ch\xfa"}),"\n",(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsx)(e.p,{children:"Callback n\xe0y c\u0169ng \u0111\u01b0\u1ee3c g\u1ecdi khi ng\u01b0\u1eddi ch\u01a1i nh\u1ea5n F4."})}),"\n",(0,a.jsx)(e.h2,{id:"callbacks-li\xean-quan",children:"Callbacks Li\xean Quan"}),"\n",(0,a.jsx)(e.p,{children:"C\xe1c callback sau c\xf3 th\u1ec3 h\u1eefu \xedch, v\xec ch\xfang li\xean quan \u0111\u1ebfn callback n\xe0y theo c\xe1ch n\xe0y hay c\xe1ch kh\xe1c:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"OnPlayerRequestSpawn",children:"OnPlayerRequestSpawn"}),": Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i c\u1ed1 g\u1eafng spawn th\xf4ng qua ch\u1ecdn l\u1edbp."]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"h\xe0m-li\xean-quan",children:"H\xe0m Li\xean Quan"}),"\n",(0,a.jsx)(e.p,{children:"C\xe1c h\xe0m sau c\xf3 th\u1ec3 h\u1eefu \xedch, v\xec ch\xfang li\xean quan \u0111\u1ebfn callback n\xe0y theo c\xe1ch n\xe0y hay c\xe1ch kh\xe1c:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"../functions/AddPlayerClass",children:"AddPlayerClass"}),": Th\xeam m\u1ed9t l\u1edbp cho ng\u01b0\u1eddi ch\u01a1i."]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}}}]);