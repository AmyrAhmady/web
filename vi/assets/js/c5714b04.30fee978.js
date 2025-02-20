"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[42533],{28453:(n,i,c)=>{c.d(i,{R:()=>a,x:()=>r});var t=c(96540);const e={},l=t.createContext(e);function a(n){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function r(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:a(n.components),t.createElement(l.Provider,{value:i},n.children)}},60344:(n,i,c)=>{c.r(i),c.d(i,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/callbacks/OnRconCommand","title":"OnRconCommand","description":"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t l\u1ec7nh \u0111\u01b0\u1ee3c g\u1eedi qua b\u1ea3ng \u0111i\u1ec1u khi\u1ec3n m\xe1y ch\u1ee7, RCON t\u1eeb xa, ho\u1eb7c th\xf4ng qua l\u1ec7nh \\"/rcon\\" trong tr\xf2 ch\u01a1i.","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/scripting/callbacks/OnRconCommand.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnRconCommand","permalink":"/vi/docs/scripting/callbacks/OnRconCommand","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnRconCommand.md","tags":[{"inline":true,"label":"rcon","permalink":"/vi/docs/tags/rcon"},{"inline":true,"label":"administration","permalink":"/vi/docs/tags/administration"}],"version":"current","frontMatter":{"title":"OnRconCommand","description":"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t l\u1ec7nh \u0111\u01b0\u1ee3c g\u1eedi qua b\u1ea3ng \u0111i\u1ec1u khi\u1ec3n m\xe1y ch\u1ee7, RCON t\u1eeb xa, ho\u1eb7c th\xf4ng qua l\u1ec7nh \\"/rcon\\" trong tr\xf2 ch\u01a1i.","tags":["rcon","administration"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerWeaponShot","permalink":"/vi/docs/scripting/callbacks/OnPlayerWeaponShot"},"next":{"title":"OnRconLoginAttempt","permalink":"/vi/docs/scripting/callbacks/OnRconLoginAttempt"}}');var e=c(74848),l=c(28453);const a={title:"OnRconCommand",description:'Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t l\u1ec7nh \u0111\u01b0\u1ee3c g\u1eedi qua b\u1ea3ng \u0111i\u1ec1u khi\u1ec3n m\xe1y ch\u1ee7, RCON t\u1eeb xa, ho\u1eb7c th\xf4ng qua l\u1ec7nh "/rcon" trong tr\xf2 ch\u01a1i.',tags:["rcon","administration"]},r=void 0,h={},o=[{value:"M\xf4 t\u1ea3",id:"m\xf4-t\u1ea3",level:2},{value:"Gi\xe1 tr\u1ecb tr\u1ea3 v\u1ec1",id:"gi\xe1-tr\u1ecb-tr\u1ea3-v\u1ec1",level:2},{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2},{value:"Ghi ch\xfa",id:"ghi-ch\xfa",level:2},{value:"Callbacks li\xean quan",id:"callbacks-li\xean-quan",level:2},{value:"C\xe1c h\xe0m li\xean quan",id:"c\xe1c-h\xe0m-li\xean-quan",level:2}];function s(n){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.h2,{id:"m\xf4-t\u1ea3",children:"M\xf4 t\u1ea3"}),"\n",(0,e.jsx)(i.p,{children:'Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t l\u1ec7nh \u0111\u01b0\u1ee3c g\u1eedi qua b\u1ea3ng \u0111i\u1ec1u khi\u1ec3n m\xe1y ch\u1ee7, RCON t\u1eeb xa, ho\u1eb7c th\xf4ng qua l\u1ec7nh "/rcon" trong tr\xf2 ch\u01a1i.'}),"\n",(0,e.jsxs)(i.table,{children:[(0,e.jsx)(i.thead,{children:(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.th,{children:"T\xean"}),(0,e.jsx)(i.th,{children:"M\xf4 t\u1ea3"})]})}),(0,e.jsx)(i.tbody,{children:(0,e.jsxs)(i.tr,{children:[(0,e.jsx)(i.td,{children:"cmd[]"}),(0,e.jsx)(i.td,{children:"M\u1ed9t chu\u1ed7i ch\u1ee9a l\u1ec7nh \u0111\xe3 nh\u1eadp, c\u0169ng nh\u01b0 b\u1ea5t k\u1ef3 tham s\u1ed1 n\xe0o \u0111\u01b0\u1ee3c truy\u1ec1n \u0111i."})]})})]}),"\n",(0,e.jsx)(i.h2,{id:"gi\xe1-tr\u1ecb-tr\u1ea3-v\u1ec1",children:"Gi\xe1 tr\u1ecb tr\u1ea3 v\u1ec1"}),"\n",(0,e.jsx)(i.p,{children:"N\xf3 lu\xf4n \u0111\u01b0\u1ee3c g\u1ecdi \u0111\u1ea7u ti\xean trong filterscripts, v\xec v\u1eady vi\u1ec7c tr\u1ea3 v\u1ec1 1 s\u1ebd ch\u1eb7n gamemode kh\u1ecfi vi\u1ec7c nh\xecn th\u1ea5y n\xf3."}),"\n",(0,e.jsx)(i.h2,{id:"v\xed-d\u1ee5",children:"V\xed d\u1ee5"}),"\n",(0,e.jsx)(i.pre,{children:(0,e.jsx)(i.code,{className:"language-c",children:'public OnRconCommand(cmd[])\n{\n    // L\u01b0u l\u1ea1i t\u1ea5t c\u1ea3 c\xe1c l\u1ec7nh RCON v\xe0o log file\n    log("RCON command executed: %s", cmd);\n    return 0;\n}\n\npublic OnRconCommand(cmd[])\n{\n    if (!strcmp(cmd, "broadcast", true))\n    {\n        // G\u1eedi th\xf4ng \u0111i\u1ec7p t\u1edbi t\u1ea5t c\u1ea3 ng\u01b0\u1eddi ch\u01a1i\n        SendClientMessageToAll(0xFF00FF00, "This is a broadcast message from RCON!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,e.jsx)(i.h2,{id:"ghi-ch\xfa",children:"Ghi ch\xfa"}),"\n",(0,e.jsx)(i.admonition,{type:"tip",children:(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:['"/rcon " kh\xf4ng \u0111\u01b0\u1ee3c bao g\u1ed3m trong "cmd" khi ng\u01b0\u1eddi ch\u01a1i g\xf5 l\u1ec7nh. N\u1ebfu b\u1ea1n s\u1eed d\u1ee5ng h\xe0m "print" \u1edf \u0111\xe2y, n\xf3 s\u1ebd g\u1eedi th\xf4ng \u0111i\u1ec7p t\u1edbi ng\u01b0\u1eddi ch\u01a1i \u0111\xe3 g\xf5 l\u1ec7nh trong tr\xf2 ch\u01a1i c\u0169ng nh\u01b0 ghi v\xe0o log. Callback n\xe0y kh\xf4ng \u0111\u01b0\u1ee3c g\u1ecdi khi ng\u01b0\u1eddi ch\u01a1i ch\u01b0a \u0111\u0103ng nh\u1eadp v\u1edbi t\u01b0 c\xe1ch l\xe0 qu\u1ea3n tr\u1ecb vi\xean RCON. Khi ng\u01b0\u1eddi ch\u01a1i ch\u01b0a \u0111\u0103ng nh\u1eadp v\u1edbi t\u01b0 c\xe1ch l\xe0 qu\u1ea3n tr\u1ecb vi\xean RCON v\xe0 s\u1eed d\u1ee5ng /rcon login, callback n\xe0y s\u1ebd kh\xf4ng \u0111\u01b0\u1ee3c g\u1ecdi v\xe0 thay v\xe0o \u0111\xf3, ',(0,e.jsx)(i.code,{children:"OnRconLoginAttempt"})," s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi. Tuy nhi\xean, khi ng\u01b0\u1eddi ch\u01a1i \u0111\xe3 \u0111\u0103ng nh\u1eadp v\u1edbi t\u01b0 c\xe1ch l\xe0 qu\u1ea3n tr\u1ecb vi\xean RCON, vi\u1ec7c s\u1eed d\u1ee5ng l\u1ec7nh n\xe0y s\u1ebd g\u1ecdi callback n\xe0y."]}),"\n"]})}),"\n",(0,e.jsxs)(i.admonition,{type:"warning",children:[(0,e.jsx)(i.p,{children:"Trong SA-MP, b\u1ea1n c\u1ea7n ph\u1ea3i bao g\u1ed3m callback n\xe0y trong m\u1ed9t filterscript \u0111\xe3 \u0111\u01b0\u1ee3c t\u1ea3i \u0111\u1ec3 n\xf3 ho\u1ea1t \u0111\u1ed9ng trong gamemode!"}),(0,e.jsx)(i.p,{children:"Nh\u01b0ng \u0111i\u1ec1u n\xe0y \u0111\xe3 \u0111\u01b0\u1ee3c s\u1eeda trong open.mp."})]}),"\n",(0,e.jsx)(i.h2,{id:"callbacks-li\xean-quan",children:"Callbacks li\xean quan"}),"\n",(0,e.jsx)(i.p,{children:"C\xe1c callback sau c\xf3 th\u1ec3 h\u1eefu \xedch, v\xec ch\xfang li\xean quan \u0111\u1ebfn callback n\xe0y theo m\u1ed9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.a,{href:"OnRconLoginAttempt",children:"OnRconLoginAttempt"}),": Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi c\xf3 m\u1ed9t c\u1ed1 g\u1eafng \u0111\u0103ng nh\u1eadp v\xe0o RCON."]}),"\n"]}),"\n",(0,e.jsx)(i.h2,{id:"c\xe1c-h\xe0m-li\xean-quan",children:"C\xe1c h\xe0m li\xean quan"}),"\n",(0,e.jsx)(i.p,{children:"C\xe1c h\xe0m sau c\xf3 th\u1ec3 h\u1eefu \xedch, v\xec ch\xfang li\xean quan \u0111\u1ebfn callback n\xe0y theo m\u1ed9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,e.jsxs)(i.ul,{children:["\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.a,{href:"../functions/IsPlayerAdmin",children:"IsPlayerAdmin"}),": Ki\u1ec3m tra xem m\u1ed9t ng\u01b0\u1eddi ch\u01a1i c\xf3 \u0111ang \u0111\u0103ng nh\u1eadp v\xe0o RCON kh\xf4ng."]}),"\n",(0,e.jsxs)(i.li,{children:[(0,e.jsx)(i.a,{href:"../functions/SetPlayerAdmin",children:"SetPlayerAdmin"}),": \u0110\u1eb7t ng\u01b0\u1eddi ch\u01a1i l\xe0m qu\u1ea3n tr\u1ecb vi\xean RCON."]}),"\n"]})]})}function d(n={}){const{wrapper:i}={...(0,l.R)(),...n.components};return i?(0,e.jsx)(i,{...n,children:(0,e.jsx)(s,{...n})}):s(n)}}}]);