"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[45239],{23308:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/callbacks/OnRconLoginAttempt","title":"OnRconLoginAttempt","description":"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u043d\u0435\u043a\u043e \u043f\u043e\u043a\u0443\u0448\u0430 \u0434\u0430 \u0441\u0435 \u043f\u0440\u0438\u0458\u0430\u0432\u0438 \u043d\u0430 RCON \u0443 \u0438\u0433\u0440\u0438; \u0431\u0438\u043b\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u043b\u0438 \u043d\u0435.","source":"@site/i18n/sr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnRconLoginAttempt.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnRconLoginAttempt","permalink":"/sr/docs/scripting/callbacks/OnRconLoginAttempt","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnRconLoginAttempt.md","tags":[{"inline":true,"label":"rcon","permalink":"/sr/docs/tags/rcon"},{"inline":true,"label":"administration","permalink":"/sr/docs/tags/administration"}],"version":"current","frontMatter":{"title":"OnRconLoginAttempt","sidebar_label":"OnRconLoginAttempt","description":"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u043d\u0435\u043a\u043e \u043f\u043e\u043a\u0443\u0448\u0430 \u0434\u0430 \u0441\u0435 \u043f\u0440\u0438\u0458\u0430\u0432\u0438 \u043d\u0430 RCON \u0443 \u0438\u0433\u0440\u0438; \u0431\u0438\u043b\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u043b\u0438 \u043d\u0435.","tags":["rcon","administration"]},"sidebar":"docsSidebar","previous":{"title":"OnRconCommand","permalink":"/sr/docs/scripting/callbacks/OnRconCommand"},"next":{"title":"OnRecordingPlaybackEnd","permalink":"/sr/docs/scripting/callbacks/OnRecordingPlaybackEnd"}}');var s=i(74848),r=i(28453);const c={title:"OnRconLoginAttempt",sidebar_label:"OnRconLoginAttempt",description:"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u043d\u0435\u043a\u043e \u043f\u043e\u043a\u0443\u0448\u0430 \u0434\u0430 \u0441\u0435 \u043f\u0440\u0438\u0458\u0430\u0432\u0438 \u043d\u0430 RCON \u0443 \u0438\u0433\u0440\u0438; \u0431\u0438\u043b\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u043b\u0438 \u043d\u0435.",tags:["rcon","administration"]},d=void 0,l={},o=[{value:"\u041e\u043f\u0438\u0441",id:"\u043e\u043f\u0438\u0441",level:2},{value:"\u0412\u0440\u0430\u045b\u0430",id:"\u0432\u0440\u0430\u045b\u0430",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"\u043f\u0440\u0438\u043c\u0435\u0440",level:2},{value:"\u0411\u0435\u043b\u0435\u0448\u043a\u0435",id:"\u0431\u0435\u043b\u0435\u0448\u043a\u0435",level:2},{value:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",level:2},{value:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",level:2}];function a(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u043e\u043f\u0438\u0441",children:"\u041e\u043f\u0438\u0441"}),"\n",(0,s.jsx)(e.p,{children:"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u043d\u0435\u043a\u043e \u043f\u043e\u043a\u0443\u0448\u0430 \u0434\u0430 \u0441\u0435 \u043f\u0440\u0438\u0458\u0430\u0432\u0438 \u043d\u0430 RCON \u0443 \u0438\u0433\u0440\u0438; \u0431\u0438\u043b\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u043b\u0438 \u043d\u0435."}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u0418\u043c\u0435"}),(0,s.jsx)(e.th,{children:"\u041e\u043f\u0438\u0441"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"ip[]"}),(0,s.jsx)(e.td,{children:"IP \u0430\u0434\u0440\u0435\u0441\u0430 \u0438\u0433\u0440\u0430\u0447\u0430 \u043a\u043e\u0458\u0438 \u0458\u0435 \u043f\u043e\u043a\u0443\u0448\u0430\u043e \u0434\u0430 \u0441\u0435 \u043f\u0440\u0438\u0458\u0430\u0432\u0438 \u043d\u0430 RCON."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"password[]"}),(0,s.jsx)(e.td,{children:"\u041b\u043e\u0437\u0438\u043d\u043a\u0430 \u043a\u043e\u0440\u0438\u0448\u045b\u0435\u043d\u0430 \u0437\u0430 \u043f\u0440\u0438\u0458\u0430\u0432\u0443."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"success"}),(0,s.jsx)(e.td,{children:"0 \u0430\u043a\u043e \u0458\u0435 \u043b\u043e\u0437\u0438\u043d\u043a\u0430 \u0431\u0438\u043b\u0430 \u043d\u0435\u0442\u0430\u0447\u043d\u0430 \u0438\u043b\u0438 1 \u0430\u043a\u043e \u0458\u0435 \u0431\u0438\u043b\u0430 \u0442\u0430\u0447\u043d\u0430."})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u0432\u0440\u0430\u045b\u0430",children:"\u0412\u0440\u0430\u045b\u0430"}),"\n",(0,s.jsx)(e.p,{children:"\u0423\u0432\u0435\u043a \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043f\u0440\u0432\u0430 \u0443 \u0444\u0438\u043b\u0442\u0435\u0440 \u0441\u043a\u0440\u0438\u043f\u0442\u0438."}),"\n",(0,s.jsx)(e.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440",children:"\u041f\u0440\u0438\u043c\u0435\u0440"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'public OnRconLoginAttempt(ip[], password[], success)\n{\n    if (!success) // \u0410\u043a\u043e \u0458\u0435 \u043b\u043e\u0437\u0438\u043d\u043a\u0430 \u0431\u0438\u043b\u0430 \u043d\u0435\u0442\u0430\u0447\u043d\u0430\n    {\n        printf("FAILED RCON LOGIN BY IP %s USING PASSWORD %s", ip, password);\n        \n        new ipAddress[16];\n        \n        for (new i = 0; i\xa0< MAX_PLAYERS; i++) // \u041f\u0440\u043e\u0452\u0438\u0442\u0435 \u043a\u0440\u043e\u0437 \u0441\u0432\u0435 \u0438\u0433\u0440\u0430\u0447\u0435\n        {\n            if (!IsPlayerConnected(i))\n            {\n                continue;\n            }\n\n            GetPlayerIp(i, ipAddress, sizeof(ipAddress));\n            \n            if (!strcmp(ip, ipAddress, true)) // \u0410\u043a\u043e \u0458\u0435 IP \u0430\u0434\u0440\u0435\u0441\u0430 \u0438\u0433\u0440\u0430\u0447\u0430 \u0442\u0430 IP \u0430\u0434\u0440\u0435\u0441\u0430 \u043a\u043e\u0458\u0430 \u0458\u0435 \u043d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u043e\u043a\u0443\u0448\u0430\u043b\u0430 \u0434\u0430 \u0441\u0435 \u043f\u0440\u0438\u0458\u0430\u0432\u0438\n            {\n                SendClientMessage(i, 0xFFFFFFFF, "Wrong Password. Bye!"); //\u041f\u043e\u0448\u0430\u0459\u0438\u0442\u0435 \u043f\u043e\u0440\u0443\u043a\u0443\n                Kick(i); // \u041e\u043d\u0438 \u0441\u0443 \u0441\u0430\u0434\u0430 \u0438\u0437\u0431\u0430\u0447\u0435\u043d\u0438.\n                break;\n            }\n        }\n    }\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u0431\u0435\u043b\u0435\u0448\u043a\u0435",children:"\u0411\u0435\u043b\u0435\u0448\u043a\u0435"}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u0441\u0430\u043c\u043e \u043a\u0430\u0434\u0430 \u0441\u0435 \u043a\u043e\u0440\u0438\u0441\u0442\u0438 /rcon login \u0443 \u0438\u0433\u0440\u0438. \u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u0441\u0430\u043c\u043e \u043a\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u0458\u043e\u0448 \u043d\u0438\u0458\u0435 \u043f\u0440\u0438\u0458\u0430\u0432\u0459\u0435\u043d. \u041a\u0430\u0434\u0430 \u0458\u0435 \u0438\u0433\u0440\u0430\u0447 \u043f\u0440\u0438\u0458\u0430\u0432\u0459\u0435\u043d, \u0443\u043c\u0435\u0441\u0442\u043e \u0442\u043e\u0433\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 ",(0,s.jsx)(e.a,{href:"OnRconCommand",children:"OnRconCommand"}),"."]})}),"\n",(0,s.jsx)(e.h2,{id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",children:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435"}),"\n",(0,s.jsx)(e.p,{children:"\u0421\u043b\u0435\u0434\u0435\u045b\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435 \u043c\u043e\u0433\u0443 \u0431\u0438\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u043d\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043d\u0430 \u043d\u0435\u043a\u0438 \u043d\u0430\u0447\u0438\u043d \u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0441\u0430 \u043e\u0432\u043e\u043c \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u043e\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u043e\u043c."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"OnRconCommand",children:"OnRconCommand"}),": \u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u043f\u043e\u0448\u0430\u0459\u0435 RCON \u043a\u043e\u043c\u0430\u043d\u0434\u0430."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",children:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435"}),"\n",(0,s.jsx)(e.p,{children:"\u0421\u043b\u0435\u0434\u0435\u045b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435 \u043c\u043e\u0433\u0443 \u0431\u0438\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u043d\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043d\u0430 \u043d\u0435\u043a\u0438 \u043d\u0430\u0447\u0438\u043d \u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0441\u0430 \u043e\u0432\u043e\u043c \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u043e\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u043e\u043c."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"../functions/IsPlayerAdmin",children:"IsPlayerAdmin"}),": \u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u0435 \u0434\u0430 \u043b\u0438 \u0458\u0435 \u0438\u0433\u0440\u0430\u0447 \u043f\u0440\u0438\u0458\u0430\u0432\u0459\u0435\u043d \u043d\u0430 RCON."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"../functions/SetPlayerAdmin",children:"SetPlayerAdmin"}),": \u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u0438\u0433\u0440\u0430\u0447\u0430 \u043a\u0430\u043e RCON \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"../functions/SendRconCommand",children:"SendRconCommand"}),": \u041f\u043e\u0448\u0430\u0459\u0438\u0442\u0435 RCON \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u043f\u0440\u0435\u043a\u043e \u0441\u043a\u0440\u0438\u043f\u0442\u0435."]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>d});var t=i(96540);const s={},r=t.createContext(s);function c(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);