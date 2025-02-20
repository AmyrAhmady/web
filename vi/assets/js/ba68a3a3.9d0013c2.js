"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[58366],{13477:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/callbacks/OnNPCConnect","title":"OnNPCConnect","description":"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t NPC k\u1ebft n\u1ed1i th\xe0nh c\xf4ng v\u1edbi server.","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/scripting/callbacks/OnNPCConnect.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnNPCConnect","permalink":"/vi/docs/scripting/callbacks/OnNPCConnect","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnNPCConnect.md","tags":[{"inline":true,"label":"npc","permalink":"/vi/docs/tags/npc"}],"version":"current","frontMatter":{"title":"OnNPCConnect","sidebar_label":"OnNPCConnect","description":"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t NPC k\u1ebft n\u1ed1i th\xe0nh c\xf4ng v\u1edbi server.","tags":["npc"]},"sidebar":"docsSidebar","previous":{"title":"OnIncomingConnection","permalink":"/vi/docs/scripting/callbacks/OnIncomingConnection"},"next":{"title":"OnNPCDisconnect","permalink":"/vi/docs/scripting/callbacks/OnNPCDisconnect"}}');var i=c(74848),l=c(28453);const r={title:"OnNPCConnect",sidebar_label:"OnNPCConnect",description:"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t NPC k\u1ebft n\u1ed1i th\xe0nh c\xf4ng v\u1edbi server.",tags:["npc"]},s=void 0,a={},o=[{value:"M\xf4 T\u1ea3",id:"m\xf4-t\u1ea3",level:2},{value:"V\xed D\u1ee5",id:"v\xed-d\u1ee5",level:2},{value:"C\xe1c Callback Li\xean Quan",id:"c\xe1c-callback-li\xean-quan",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"m\xf4-t\u1ea3",children:"M\xf4 T\u1ea3"}),"\n",(0,i.jsx)(e.p,{children:"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t NPC k\u1ebft n\u1ed1i th\xe0nh c\xf4ng v\u1edbi server."}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"T\xean"}),(0,i.jsx)(e.th,{children:"M\xf4 T\u1ea3"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"myplayerid"}),(0,i.jsx)(e.td,{children:"ID c\u1ee7a NPC m\xe0 server \u0111\xe3 g\xe1n"})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"v\xed-d\u1ee5",children:"V\xed D\u1ee5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'public OnNPCConnect(myplayerid)\n{\n    printf("NPC k\u1ebft n\u1ed1i th\xe0nh c\xf4ng v\u1edbi server v\u1edbi ID %i!", myplayerid);\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"c\xe1c-callback-li\xean-quan",children:"C\xe1c Callback Li\xean Quan"}),"\n",(0,i.jsx)(e.p,{children:"C\xe1c callback sau \u0111\xe2y c\xf3 th\u1ec3 h\u1eefu \xedch, v\xec ch\xfang li\xean quan \u0111\u1ebfn callback n\xe0y theo m\u1ed9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"OnNPCDisconnect",children:"OnNPCDisconnect"}),": Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi NPC ng\u1eaft k\u1ebft n\u1ed1i kh\u1ecfi server."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"OnPlayerConnect",children:"OnPlayerConnect"}),": Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i k\u1ebft n\u1ed1i v\u1edbi server."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"OnPlayerDisconnect",children:"OnPlayerDisconnect"}),": Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i r\u1eddi kh\u1ecfi server."]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,c)=>{c.d(e,{R:()=>r,x:()=>s});var t=c(96540);const i={},l=t.createContext(i);function r(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);