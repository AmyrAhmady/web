"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[67361],{28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>a});var i=t(96540);const c={},l=i.createContext(c);function r(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),i.createElement(l.Provider,{value:e},n.children)}},87608:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"scripting/callbacks/OnPlayerText","title":"OnPlayerText","description":"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i g\u1eedi tin nh\u1eafn tr\xf2 chuy\u1ec7n.","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerText.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerText","permalink":"/vi/docs/scripting/callbacks/OnPlayerText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerText.md","tags":[{"inline":true,"label":"player","permalink":"/vi/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerText","sidebar_label":"OnPlayerText","description":"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i g\u1eedi tin nh\u1eafn tr\xf2 chuy\u1ec7n.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerTakeDamage","permalink":"/vi/docs/scripting/callbacks/OnPlayerTakeDamage"},"next":{"title":"OnPlayerUpdate","permalink":"/vi/docs/scripting/callbacks/OnPlayerUpdate"}}');var c=t(74848),l=t(28453);const r={title:"OnPlayerText",sidebar_label:"OnPlayerText",description:"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i g\u1eedi tin nh\u1eafn tr\xf2 chuy\u1ec7n.",tags:["player"]},a=void 0,s={},h=[{value:"M\xf4 t\u1ea3",id:"m\xf4-t\u1ea3",level:2},{value:"Gi\xe1 tr\u1ecb tr\u1ea3 v\u1ec1",id:"gi\xe1-tr\u1ecb-tr\u1ea3-v\u1ec1",level:2},{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2},{value:"Ghi ch\xfa",id:"ghi-ch\xfa",level:2},{value:"C\xe1c Callbacks li\xean quan",id:"c\xe1c-callbacks-li\xean-quan",level:2},{value:"C\xe1c H\xe0m li\xean quan",id:"c\xe1c-h\xe0m-li\xean-quan",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...n.components},{TipNPCCallbacks:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"m\xf4-t\u1ea3",children:"M\xf4 t\u1ea3"}),"\n",(0,c.jsx)(e.p,{children:"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i g\u1eedi tin nh\u1eafn tr\xf2 chuy\u1ec7n."}),"\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"T\xean"}),(0,c.jsx)(e.th,{children:"M\xf4 t\u1ea3"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"playerid"}),(0,c.jsx)(e.td,{children:"ID c\u1ee7a ng\u01b0\u1eddi ch\u01a1i \u0111\xe3 g\xf5 v\u0103n b\u1ea3n."})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"text[]"}),(0,c.jsx)(e.td,{children:"V\u0103n b\u1ea3n m\xe0 ng\u01b0\u1eddi ch\u01a1i \u0111\xe3 g\xf5."})]})]})]}),"\n",(0,c.jsx)(e.h2,{id:"gi\xe1-tr\u1ecb-tr\u1ea3-v\u1ec1",children:"Gi\xe1 tr\u1ecb tr\u1ea3 v\u1ec1"}),"\n",(0,c.jsx)(e.p,{children:"N\xf3 lu\xf4n \u0111\u01b0\u1ee3c g\u1ecdi \u0111\u1ea7u ti\xean trong filterscripts n\xean tr\u1ea3 v\u1ec1 0 s\u1ebd ch\u1eb7n c\xe1c script kh\xe1c kh\xf4ng th\u1ea5y \u0111\u01b0\u1ee3c n\xf3."}),"\n",(0,c.jsx)(e.h2,{id:"v\xed-d\u1ee5",children:"V\xed d\u1ee5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-c",children:'public OnPlayerText(playerid, text[])\n{\n    new string[144];\n    format(string, sizeof (string), "(%d) %s", playerid, text);\n    SendPlayerMessageToAll(playerid, string);\n    return 0; // b\u1ecf qua v\u0103n b\u1ea3n m\u1eb7c \u0111\u1ecbnh v\xe0 g\u1eedi v\u0103n b\u1ea3n t\xf9y ch\u1ec9nh\n}\n'})}),"\n",(0,c.jsx)(e.h2,{id:"ghi-ch\xfa",children:"Ghi ch\xfa"}),"\n",(0,c.jsx)(t,{}),"\n",(0,c.jsx)(e.h2,{id:"c\xe1c-callbacks-li\xean-quan",children:"C\xe1c Callbacks li\xean quan"}),"\n",(0,c.jsx)(e.p,{children:"C\xe1c callback sau c\xf3 th\u1ec3 h\u1eefu \xedch, v\xec ch\xfang li\xean quan \u0111\u1ebfn callback n\xe0y theo m\u1ed9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"OnPlayerCommandText",children:"OnPlayerCommandText"}),": \u0110\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i g\xf5 m\u1ed9t l\u1ec7nh."]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"c\xe1c-h\xe0m-li\xean-quan",children:"C\xe1c H\xe0m li\xean quan"}),"\n",(0,c.jsx)(e.p,{children:"C\xe1c h\xe0m sau c\xf3 th\u1ec3 h\u1eefu \xedch, v\xec ch\xfang li\xean quan \u0111\u1ebfn callback n\xe0y theo m\u1ed9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"../functions/SendPlayerMessageToPlayer",children:"SendPlayerMessageToPlayer"}),": Bu\u1ed9c m\u1ed9t ng\u01b0\u1eddi ch\u01a1i g\u1eedi v\u0103n b\u1ea3n cho m\u1ed9t ng\u01b0\u1eddi ch\u01a1i."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"../functions/SendPlayerMessageToAll",children:"SendPlayerMessageToAll"}),": Bu\u1ed9c m\u1ed9t ng\u01b0\u1eddi ch\u01a1i g\u1eedi v\u0103n b\u1ea3n cho t\u1ea5t c\u1ea3 ng\u01b0\u1eddi ch\u01a1i."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"../functions/ToggleChatTextReplacement",children:"ToggleChatTextReplacement"}),": B\u1eadt/t\u1eaft b\u1ed9 l\u1ecdc \u0111\u1ea7u v\xe0o tr\xf2 chuy\u1ec7n."]}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(d,{...n})}):d(n)}}}]);