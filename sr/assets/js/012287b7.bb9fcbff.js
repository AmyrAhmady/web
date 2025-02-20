"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[20384],{28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>l});var i=t(96540);const c={},r=i.createContext(c);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:o(n.components),i.createElement(r.Provider,{value:e},n.children)}},53484:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scripting/callbacks/OnRconCommand","title":"OnRconCommand","description":"\u041e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u043e\u0448\u0430\u0459\u0435 \u043f\u0440\u0435\u043a\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0441\u043a\u0435 \u043a\u043e\u043d\u0437\u043e\u043b\u0435, \u0443\u0434\u0430\u0459\u0435\u043d\u043e\u0433 RCON-\u0430 \u0438\u043b\u0438 \u043f\u0440\u0435\u043a\u043e \u0443\u043d\u0443\u0442\u0440\u0430\u0448\u045a\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \\"/rcon command\\".","source":"@site/i18n/sr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnRconCommand.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnRconCommand","permalink":"/sr/docs/scripting/callbacks/OnRconCommand","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnRconCommand.md","tags":[{"inline":true,"label":"rcon","permalink":"/sr/docs/tags/rcon"},{"inline":true,"label":"administration","permalink":"/sr/docs/tags/administration"}],"version":"current","frontMatter":{"title":"OnRconCommand","sidebar_label":"OnRconCommand","description":"\u041e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u043e\u0448\u0430\u0459\u0435 \u043f\u0440\u0435\u043a\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0441\u043a\u0435 \u043a\u043e\u043d\u0437\u043e\u043b\u0435, \u0443\u0434\u0430\u0459\u0435\u043d\u043e\u0433 RCON-\u0430 \u0438\u043b\u0438 \u043f\u0440\u0435\u043a\u043e \u0443\u043d\u0443\u0442\u0440\u0430\u0448\u045a\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \\"/rcon command\\".","tags":["rcon","administration"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerWeaponShot","permalink":"/sr/docs/scripting/callbacks/OnPlayerWeaponShot"},"next":{"title":"OnRconLoginAttempt","permalink":"/sr/docs/scripting/callbacks/OnRconLoginAttempt"}}');var c=t(74848),r=t(28453);const o={title:"OnRconCommand",sidebar_label:"OnRconCommand",description:'\u041e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u043e\u0448\u0430\u0459\u0435 \u043f\u0440\u0435\u043a\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0441\u043a\u0435 \u043a\u043e\u043d\u0437\u043e\u043b\u0435, \u0443\u0434\u0430\u0459\u0435\u043d\u043e\u0433 RCON-\u0430 \u0438\u043b\u0438 \u043f\u0440\u0435\u043a\u043e \u0443\u043d\u0443\u0442\u0440\u0430\u0448\u045a\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 "/rcon command".',tags:["rcon","administration"]},l=void 0,s={},d=[{value:"\u041e\u043f\u0438\u0441",id:"\u043e\u043f\u0438\u0441",level:2},{value:"\u0412\u0440\u0430\u045b\u0430",id:"\u0432\u0440\u0430\u045b\u0430",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"\u043f\u0440\u0438\u043c\u0435\u0440",level:2},{value:"\u0411\u0435\u043b\u0435\u0448\u043a\u0435",id:"\u0431\u0435\u043b\u0435\u0448\u043a\u0435",level:2},{value:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",level:2},{value:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",level:2}];function a(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u043e\u043f\u0438\u0441",children:"\u041e\u043f\u0438\u0441"}),"\n",(0,c.jsx)(e.p,{children:'\u041e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u043e\u0448\u0430\u0459\u0435 \u043f\u0440\u0435\u043a\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0441\u043a\u0435 \u043a\u043e\u043d\u0437\u043e\u043b\u0435, \u0443\u0434\u0430\u0459\u0435\u043d\u043e\u0433 RCON-\u0430 \u0438\u043b\u0438 \u043f\u0440\u0435\u043a\u043e \u0443\u043d\u0443\u0442\u0440\u0430\u0448\u045a\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 "/rcon command".'}),"\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"\u0418\u043c\u0435"}),(0,c.jsx)(e.th,{children:"\u041e\u043f\u0438\u0441"})]})}),(0,c.jsx)(e.tbody,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"cmd[]"}),(0,c.jsx)(e.td,{children:"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u043a\u043e\u0458\u0430 \u0458\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0430, \u043a\u0430\u043e \u0438 \u0441\u0432\u0438 \u043f\u0440\u043e\u0441\u043b\u0435\u0452\u0435\u043d\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438."})]})})]}),"\n",(0,c.jsx)(e.h2,{id:"\u0432\u0440\u0430\u045b\u0430",children:"\u0412\u0440\u0430\u045b\u0430"}),"\n",(0,c.jsx)(e.p,{children:"\u0423\u0432\u0435\u043a \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043f\u0440\u0432\u0438 \u0443 \u0444\u0438\u043b\u0442\u0435\u0440\u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0438\u043c\u0430, \u0442\u0430\u043a\u043e \u0434\u0430 \u0432\u0440\u0430\u045b\u0430\u045a\u0435 1 \u0431\u043b\u043e\u043a\u0438\u0440\u0430 \u0432\u0438\u0434\u0459\u0438\u0432\u043e\u0441\u0442 \u0443 \u0433\u043b\u0430\u0432\u043d\u043e\u043c \u0441\u043a\u0440\u0438\u043f\u0442\u0443."}),"\n",(0,c.jsx)(e.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440",children:"\u041f\u0440\u0438\u043c\u0435\u0440"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-c",children:'public OnRconCommand(cmd[])\n{\n    printf("[RCON]: You typed \'/rcon %s\'!", cmd);\n    return 0;\n}\n\npublic OnRconCommand(cmd[])\n{\n    if (!strcmp(cmd, "hello", true))\n    {\n        SendClientMessageToAll(0xFFFFFFAA, "Hello World!");\n        print("You said hello to the world."); // \u041e\u0432\u043e \u045b\u0435 \u0441\u0435 \u043f\u0440\u0438\u043a\u0430\u0437\u0430\u0442\u0438 \u0438\u0433\u0440\u0430\u0447\u0443 \u043a\u043e\u0458\u0438 \u0458\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u043e RCON \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0443 \u0431\u0435\u043b\u043e\u0458 \u0431\u043e\u0458\u0438\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,c.jsx)(e.h2,{id:"\u0431\u0435\u043b\u0435\u0448\u043a\u0435",children:"\u0411\u0435\u043b\u0435\u0448\u043a\u0435"}),"\n",(0,c.jsx)(e.admonition,{type:"tip",children:(0,c.jsx)(e.p,{children:'"/rcon " \u043d\u0438\u0458\u0435 \u0443\u043a\u0459\u0443\u0447\u0435\u043d\u043e \u0443 "cmd" \u043a\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043d\u0430\u043f\u0438\u0448\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443. \u0410\u043a\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0438\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0443 "print" \u043e\u0432\u0434\u0435, \u043f\u043e\u0441\u043b\u0430\u045b\u0435 \u043f\u043e\u0440\u0443\u043a\u0443 \u0438\u0433\u0440\u0430\u0447\u0443 \u043a\u043e\u0458\u0438 \u0458\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0443 \u0438\u0433\u0440\u0438, \u043a\u0430\u043e \u0438 \u0443 \u043b\u043e\u0433. \u041e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043d\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043d\u0438\u0458\u0435 \u043f\u0440\u0438\u0458\u0430\u0432\u0459\u0435\u043d \u043a\u0430\u043e RCON \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440. \u041a\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043d\u0438\u0458\u0435 \u043f\u0440\u0438\u0458\u0430\u0432\u0459\u0435\u043d \u043a\u0430\u043e RCON \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0438 /rcon login, \u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043d\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u0438 \u0443\u043c\u0435\u0441\u0442\u043e \u0442\u043e\u0433\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 OnRconLoginAttempt. \u041c\u0435\u0452\u0443\u0442\u0438\u043c, \u043a\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u0431\u0443\u0434\u0435 \u043f\u0440\u0438\u0458\u0430\u0432\u0459\u0435\u043d \u043a\u0430\u043e RCON \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440, \u0443\u043f\u043e\u0442\u0440\u0435\u0431\u0430 \u043e\u0432\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \u045b\u0435 \u043f\u043e\u0437\u0432\u0430\u0442\u0438 \u043e\u0432\u0443 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0443.'})}),"\n",(0,c.jsxs)(e.admonition,{type:"warning",children:[(0,c.jsx)(e.p,{children:"\u0423 SA-MP-\u0443 \u045b\u0435\u0442\u0435 \u043c\u043e\u0440\u0430\u0442\u0438 \u0434\u0430 \u0443\u043a\u0459\u0443\u0447\u0438\u0442\u0435 \u043e\u0432\u0443 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0443 \u0443 \u0443\u0447\u0438\u0442\u0430\u043d\u043e\u0458 \u0444\u0438\u043b\u0442\u0435\u0440\u0441\u043a\u0440\u0438\u043f\u0442\u0438 \u0434\u0430 \u0431\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0441\u0430\u043b\u0430 \u0443 \u0433\u043b\u0430\u0432\u043d\u043e\u0458 \u0441\u043a\u0440\u0438\u043f\u0442\u0438!"}),(0,c.jsx)(e.p,{children:"\u0410\u043b\u0438 \u0458\u0435 \u0438\u0441\u043f\u0440\u0430\u0432\u0459\u0435\u043d\u043e \u0443 open.mp"})]}),"\n",(0,c.jsx)(e.h2,{id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",children:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435"}),"\n",(0,c.jsx)(e.p,{children:"\u0421\u043b\u0435\u0434\u0435\u045b\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435 \u043c\u043e\u0433\u0443 \u0431\u0438\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u043d\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043d\u0430 \u0458\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438 \u043d\u0430\u0447\u0438\u043d \u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0441\u0430 \u043e\u0432\u0438\u043c \u043f\u043e\u0437\u0438\u0432\u043e\u043c."}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"OnRconLoginAttempt",children:"OnRconLoginAttempt"}),": \u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u0438 \u043f\u043e\u043a\u0443\u0448\u0430\u0458 \u043f\u0440\u0438\u0458\u0430\u0432\u0435 \u043d\u0430 RCON."]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",children:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435"}),"\n",(0,c.jsx)(e.p,{children:"\u0421\u043b\u0435\u0434\u0435\u045b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435 \u043c\u043e\u0433\u0443 \u0431\u0438\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u043d\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043d\u0430 \u0458\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438 \u043d\u0430\u0447\u0438\u043d \u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0441\u0430 \u043e\u0432\u0438\u043c \u043f\u043e\u0437\u0438\u0432\u043e\u043c."}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"../functions/IsPlayerAdmin",children:"IsPlayerAdmin"}),": \u041f\u0440\u043e\u0432\u0435\u0440\u0430\u0432\u0430 \u0434\u0430 \u043b\u0438 \u0458\u0435 \u0438\u0433\u0440\u0430\u0447 \u0443\u043b\u043e\u0433\u043e\u0432\u0430\u043d \u043d\u0430 RCON."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"../functions/SetPlayerAdmin",children:"SetPlayerAdmin"}),": \u041f\u043e\u0441\u0442\u0430\u0432\u0459\u0430 \u0438\u0433\u0440\u0430\u0447\u0430 \u043a\u0430\u043e RCON \u0430\u0434\u043c\u0438\u043d\u0430."]}),"\n"]})]})}function m(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(a,{...n})}):a(n)}}}]);