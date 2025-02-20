"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[77776],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const l={},a=r.createContext(l);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:n},e.children)}},34968:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/callbacks/OnPlayerCommandText","title":"OnPlayerCommandText","description":"\u041e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u0443\u043d\u0435\u0441\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0443 \u043f\u0440\u043e\u0437\u043e\u0440 \u0437\u0430 \u045b\u0430\u0441\u043a\u0430\u045a\u0435 \u043d\u0430 \u043a\u043b\u0438\u0458\u0435\u043d\u0442\u0443.","source":"@site/i18n/sr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerCommandText.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerCommandText","permalink":"/sr/docs/scripting/callbacks/OnPlayerCommandText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerCommandText.md","tags":[{"inline":true,"label":"player","permalink":"/sr/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerCommandText","sidebar_label":"OnPlayerCommandText","description":"\u041e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u0443\u043d\u0435\u0441\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0443 \u043f\u0440\u043e\u0437\u043e\u0440 \u0437\u0430 \u045b\u0430\u0441\u043a\u0430\u045a\u0435 \u043d\u0430 \u043a\u043b\u0438\u0458\u0435\u043d\u0442\u0443.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerClickTextDraw","permalink":"/sr/docs/scripting/callbacks/OnPlayerClickTextDraw"},"next":{"title":"OnPlayerConnect","permalink":"/sr/docs/scripting/callbacks/OnPlayerConnect"}}');var l=t(74848),a=t(28453);const s={title:"OnPlayerCommandText",sidebar_label:"OnPlayerCommandText",description:"\u041e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u0443\u043d\u0435\u0441\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0443 \u043f\u0440\u043e\u0437\u043e\u0440 \u0437\u0430 \u045b\u0430\u0441\u043a\u0430\u045a\u0435 \u043d\u0430 \u043a\u043b\u0438\u0458\u0435\u043d\u0442\u0443.",tags:["player"]},i=void 0,c={},d=[{value:"\u041e\u043f\u0438\u0441",id:"\u043e\u043f\u0438\u0441",level:2},{value:"\u0412\u0440\u0430\u045b\u0430",id:"\u0432\u0440\u0430\u045b\u0430",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"\u043f\u0440\u0438\u043c\u0435\u0440",level:2},{value:"\u0411\u0435\u043b\u0435\u0448\u043a\u0435",id:"\u0431\u0435\u043b\u0435\u0448\u043a\u0435",level:2},{value:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",level:2},{value:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{TipNPCCallbacksSR:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacksSR",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u043e\u043f\u0438\u0441",children:"\u041e\u043f\u0438\u0441"}),"\n",(0,l.jsx)(n.p,{children:"\u041e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u0443\u043d\u0435\u0441\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0443 \u043f\u0440\u043e\u0437\u043e\u0440 \u0437\u0430 \u045b\u0430\u0441\u043a\u0430\u045a\u0435 \u043d\u0430 \u043a\u043b\u0438\u0458\u0435\u043d\u0442\u0443. Commands are anything that start with a forward slash, e.g. /help."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u0418\u043c\u0435"}),(0,l.jsx)(n.th,{children:"\u041e\u043f\u0438\u0441"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"ID \u0438\u0433\u0440\u0430\u0447\u0430 \u043a\u043e\u0458\u0438 \u0458\u0435 \u0443\u043d\u0435\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u0443."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"cmdtext[]"}),(0,l.jsx)(n.td,{children:"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u043a\u043e\u0458\u0430 \u0458\u0435 \u0443\u043d\u0435\u0442\u0430 (\u0443\u043a\u0459\u0443\u0447\u0443\u0458\u0443\u045b\u0438 \u043a\u043e\u0441\u0443 \u0446\u0440\u0442\u0443)."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u0432\u0440\u0430\u045b\u0430",children:"\u0412\u0440\u0430\u045b\u0430"}),"\n",(0,l.jsx)(n.p,{children:"\u0423\u0432\u0435\u043a \u0441\u0435 \u043f\u0440\u0432\u043e \u043f\u043e\u0437\u0438\u0432\u0430 \u0443 \u0444\u0438\u043b\u0442\u0435\u0440\u0441\u043a\u0440\u0438\u043f\u0442\u0438\u043c\u0430, \u0442\u0430\u043a\u043e \u0434\u0430 \u0432\u0440\u0430\u045b\u0430\u045a\u0435 1 \u0431\u043b\u043e\u043a\u0438\u0440\u0430 \u0434\u0440\u0443\u0433\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u0435 \u043e\u0434 \u043f\u0440\u0438\u043c\u0430\u045a\u0430 \u043e\u0432\u043e\u0433 \u043f\u043e\u0437\u0438\u0432\u0430."}),"\n",(0,l.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440",children:"\u041f\u0440\u0438\u043c\u0435\u0440"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/help", true))\n    {\n        SendClientMessage(playerid, -1, "SERVER: This is the /help command!");\n        return 1;\n        // \u0412\u0440\u0430\u045b\u0430\u045a\u0435 1 \u043e\u0431\u0430\u0432\u0435\u0448\u0442\u0430\u0432\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u0430 \u0458\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043e\u0431\u0440\u0430\u0452\u0435\u043d\u0430. \n        // OnPlayerCommandText \u043d\u0435\u045b\u0435 \u0431\u0438\u0442\u0438 \u043f\u043e\u0437\u0432\u0430\u043d\u0430 \u0443 \u0434\u0440\u0443\u0433\u0438\u043c \u0441\u043a\u0440\u0438\u043f\u0442\u0430\u043c\u0430.\n    }\n    return 0;\n    // \u0412\u0440\u0430\u045b\u0430\u045a\u0435 0 \u043e\u0431\u0430\u0432\u0435\u0448\u0442\u0430\u0432\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0438\u0458\u0435 \u043e\u0431\u0440\u0430\u0452\u0435\u043d\u0430 \u043e\u0434 \u0441\u0442\u0440\u0430\u043d\u0435 \u043e\u0432\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u0435. \n    // OnPlayerCommandText \u045b\u0435 \u0431\u0438\u0442\u0438 \u043f\u043e\u0437\u0432\u0430\u043d\u0430 \u0443 \u0434\u0440\u0443\u0433\u0438\u043c \u0441\u043a\u0440\u0438\u043f\u0442\u0430\u043c\u0430 \u0441\u0432\u0435 \u0434\u043e\u043a \u0458\u0435\u0434\u043d\u0430 \u043d\u0435 \u0432\u0440\u0430\u0442\u0438 1. \n    // \u0410\u043a\u043e \u043d\u0438\u0458\u0435\u0434\u043d\u0430 \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u043d\u0435 \u0432\u0440\u0430\u0442\u0438 1, \u043f\u043e\u0440\u0443\u043a\u0430 \'SERVER: Unknown Command\' \u0431\u0438\u045b\u0435 \u043f\u0440\u0438\u043a\u0430\u0437\u0430\u043d\u0430 \u0438\u0433\u0440\u0430\u0447\u0443.\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u0431\u0435\u043b\u0435\u0448\u043a\u0435",children:"\u0411\u0435\u043b\u0435\u0448\u043a\u0435"}),"\n",(0,l.jsx)(t,{}),"\n",(0,l.jsx)(n.h2,{id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",children:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435"}),"\n",(0,l.jsx)(n.p,{children:"\u0421\u043b\u0435\u0434\u0435\u045b\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435 \u043c\u043e\u0433\u0443 \u0431\u0438\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u043d\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043d\u0430 \u0458\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438 \u043d\u0430\u0447\u0438\u043d \u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0441\u0430 \u043e\u0432\u0438\u043c \u043f\u043e\u0437\u0438\u0432\u043e\u043c."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerText",children:"OnPlayerText"}),": \u041e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043f\u043e\u0448\u0430\u0459\u0435 \u043f\u043e\u0440\u0443\u043a\u0443 \u0443 \u045b\u0430\u0441\u043a\u0430\u045a\u0443."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnRconCommand",children:"OnRconCommand"}),': \u041e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u043e\u0448\u0430\u0459\u0435 \u043f\u0440\u0435\u043a\u043e \u0441\u0435\u0440\u0432\u0435\u0440 \u043a\u043e\u043d\u0437\u043e\u043b\u0435, \u0443\u0434\u0430\u0459\u0435\u043d\u043e\u0433 RCON-\u0430 \u0438\u043b\u0438 \u043f\u0443\u0442\u0435\u043c \u0443\u043d\u0443\u0442\u0440\u0430\u0448\u045a\u0435 "/rcon command".']}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",children:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435"}),"\n",(0,l.jsx)(n.p,{children:"\u0421\u043b\u0435\u0434\u0435\u045b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435 \u043c\u043e\u0433\u0443 \u0431\u0438\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u043d\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043d\u0430 \u0458\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438 \u043d\u0430\u0447\u0438\u043d \u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0441\u0430 \u043e\u0432\u0438\u043c \u043f\u043e\u0437\u0438\u0432\u043e\u043c."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/SendRconCommand",children:"SendRconCommand"}),": \u0428\u0430\u0459\u0435 RCON \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u043f\u0440\u0435\u043a\u043e \u0441\u043a\u0440\u0438\u043f\u0442\u0435."]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}}}]);