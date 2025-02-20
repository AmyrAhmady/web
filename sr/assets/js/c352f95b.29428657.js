"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[36782],{28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var t=r(96540);const i={},l=t.createContext(i);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(l.Provider,{value:n},e.children)}},82848:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"scripting/callbacks/OnScriptUnloadPlayer","title":"OnScriptUnloadPlayer","description":"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u0437\u0430 \u0441\u0432\u0430\u043a\u043e\u0433 \u043f\u043e\u0432\u0435\u0437\u0430\u043d\u043e\u0433 \u0438\u0433\u0440\u0430\u0447\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u0438\u0441\u043a\u0459\u0443\u0447\u0438.","source":"@site/i18n/sr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnScriptUnloadPlayer.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnScriptUnloadPlayer","permalink":"/sr/docs/scripting/callbacks/OnScriptUnloadPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnScriptUnloadPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/sr/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnScriptUnloadPlayer","sidebar_label":"OnScriptUnloadPlayer","description":"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u0437\u0430 \u0441\u0432\u0430\u043a\u043e\u0433 \u043f\u043e\u0432\u0435\u0437\u0430\u043d\u043e\u0433 \u0438\u0433\u0440\u0430\u0447\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u0438\u0441\u043a\u0459\u0443\u0447\u0438.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnScriptLoadPlayer","permalink":"/sr/docs/scripting/callbacks/OnScriptLoadPlayer"},"next":{"title":"OnTrailerUpdate","permalink":"/sr/docs/scripting/callbacks/OnTrailerUpdate"}}');var i=r(74848),l=r(28453);const s={title:"OnScriptUnloadPlayer",sidebar_label:"OnScriptUnloadPlayer",description:"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u0437\u0430 \u0441\u0432\u0430\u043a\u043e\u0433 \u043f\u043e\u0432\u0435\u0437\u0430\u043d\u043e\u0433 \u0438\u0433\u0440\u0430\u0447\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u0438\u0441\u043a\u0459\u0443\u0447\u0438.",tags:["player"]},c=void 0,a={},d=[{value:"\u041e\u043f\u0438\u0441",id:"\u043e\u043f\u0438\u0441",level:2},{value:"\u0412\u0440\u0430\u045b\u0430",id:"\u0432\u0440\u0430\u045b\u0430",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"\u043f\u0440\u0438\u043c\u0435\u0440",level:2},{value:"\u0411\u0435\u043b\u0435\u0448\u043a\u0435",id:"\u0431\u0435\u043b\u0435\u0448\u043a\u0435",level:2},{value:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{VersionWarnSR:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnSR",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{name:"\u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430",version:"omp v1.3.1.2748"}),"\n",(0,i.jsx)(n.h2,{id:"\u043e\u043f\u0438\u0441",children:"\u041e\u043f\u0438\u0441"}),"\n",(0,i.jsx)(n.p,{children:"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u0437\u0430 \u0441\u0432\u0430\u043a\u043e\u0433 \u043f\u043e\u0432\u0435\u0437\u0430\u043d\u043e\u0433 \u0438\u0433\u0440\u0430\u0447\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u0438\u0441\u043a\u0459\u0443\u0447\u0438."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u0418\u043c\u0435"}),(0,i.jsx)(n.th,{children:"\u041e\u043f\u0438\u0441"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"ID \u0438\u0433\u0440\u0430\u0447\u0430 \u0437\u0430 \u043a\u043e\u0433\u0430 \u0441\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u0438\u0441\u043a\u0459\u0443\u0447\u0443\u0458\u0435."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["bool",":isEntryScript"]}),(0,i.jsx)(n.td,{children:"\u041e\u0434\u0440\u0435\u0452\u0438\u0432\u0430\u045a\u0435 \u0434\u0430 \u043b\u0438 \u0458\u0435 \u0443\u043b\u0430\u0437\u043d\u0430 \u0441\u043a\u0440\u0438\u043f\u0442\u0430 (\u0433\u043b\u0430\u0432\u043d\u0430 \u0441\u043a\u0440\u0438\u043f\u0442\u0430) \u0438\u043b\u0438 \u0441\u043f\u043e\u0440\u0435\u0434\u043d\u0430 \u0441\u043a\u0440\u0438\u043f\u0442\u0430."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u0432\u0440\u0430\u045b\u0430",children:"\u0412\u0440\u0430\u045b\u0430"}),"\n",(0,i.jsx)(n.p,{children:"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u043d\u0435 \u0432\u0440\u0430\u045b\u0430 \u0431\u0438\u043b\u043e \u0448\u0442\u0430."}),"\n",(0,i.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440",children:"\u041f\u0440\u0438\u043c\u0435\u0440"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnScriptUnloadPlayer(playerid, bool:isEntryScript)\n{\n    printf("Script unloaded for player ID %d (isEntryScript: %s)", playerid, isEntryScript ? "Yes" : "No");\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u0431\u0435\u043b\u0435\u0448\u043a\u0435",children:"\u0411\u0435\u043b\u0435\u0448\u043a\u0435"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 ",(0,i.jsx)(n.strong,{children:"\u0443\u043a\u043b\u043e\u043d\u0438"})," \u0441\u043f\u043e\u0440\u0435\u0434\u043d\u0430 \u0441\u043a\u0440\u0438\u043f\u0442\u0430 (\u0444\u0438\u043b\u0442\u0435\u0440 \u0441\u043a\u0440\u0438\u043f\u0442) \u0443 \u0442\u043e\u043a\u0443 \u0440\u0430\u0434\u0430."]})}),"\n",(0,i.jsx)(n.h2,{id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",children:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435"}),"\n",(0,i.jsx)(n.p,{children:"\u0421\u043b\u0435\u0434\u0435\u045b\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435 \u043c\u043e\u0433\u0443 \u0431\u0438\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u043d\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043d\u0430 \u043d\u0435\u043a\u0438 \u043d\u0430\u0447\u0438\u043d \u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0441\u0430 \u043e\u0432\u043e\u043c \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u043e\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u043e\u043c."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"OnScriptLoadPlayer",children:"OnScriptLoadPlayer"}),": \u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u0437\u0430 \u0441\u0432\u0430\u043a\u043e\u0433 \u043f\u043e\u0432\u0435\u0437\u0430\u043d\u043e\u0433 \u0438\u0433\u0440\u0430\u0447\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u0443\u0447\u0438\u0442\u0430."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"OnPlayerConnect",children:"OnPlayerConnect"}),": \u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u0438\u0433\u0440\u0430\u0447 \u043f\u043e\u0432\u0435\u0437\u0443\u0458\u0435 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"OnPlayerDisconnect",children:"OnPlayerDisconnect"}),": \u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043d\u0430\u043f\u0443\u0441\u0442\u0438 \u0441\u0435\u0440\u0432\u0435\u0440."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}}}]);