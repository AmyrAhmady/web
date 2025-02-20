"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[97037],{23579:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"scripting/functions/SetPlayerArmour","title":"SetPlayerArmour","description":"\u041f\u043e\u0434\u0435\u0448\u0430\u0432\u0430 \u043f\u0430\u043d\u0446\u0438\u0440 \u0438\u0433\u0440\u0430\u0447\u0430.","source":"@site/i18n/sr/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerArmour.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerArmour","permalink":"/sr/docs/scripting/functions/SetPlayerArmour","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerArmour.md","tags":[{"inline":true,"label":"player","permalink":"/sr/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerArmour","sidebar_label":"SetPlayerArmour","description":"\u041f\u043e\u0434\u0435\u0448\u0430\u0432\u0430 \u043f\u0430\u043d\u0446\u0438\u0440 \u0438\u0433\u0440\u0430\u0447\u0430.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerArmedWeapon","permalink":"/sr/docs/scripting/functions/SetPlayerArmedWeapon"},"next":{"title":"SetPlayerAttachedObject","permalink":"/sr/docs/scripting/functions/SetPlayerAttachedObject"}}');var i=n(74848),l=n(28453);const s={title:"SetPlayerArmour",sidebar_label:"SetPlayerArmour",description:"\u041f\u043e\u0434\u0435\u0448\u0430\u0432\u0430 \u043f\u0430\u043d\u0446\u0438\u0440 \u0438\u0433\u0440\u0430\u0447\u0430.",tags:["player"]},a=void 0,c={},d=[{value:"\u041e\u043f\u0438\u0441",id:"\u043e\u043f\u0438\u0441",level:2},{value:"\u0412\u0440\u0430\u045b\u0430",id:"\u0432\u0440\u0430\u045b\u0430",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",level:2},{value:"\u0411\u0435\u043b\u0435\u0448\u043a\u0435",id:"\u0431\u0435\u043b\u0435\u0448\u043a\u0435",level:2},{value:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",level:2}];function o(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"\u043e\u043f\u0438\u0441",children:"\u041e\u043f\u0438\u0441"}),"\n",(0,i.jsx)(r.p,{children:"\u041f\u043e\u0434\u0435\u0448\u0430\u0432\u0430 \u043f\u0430\u043d\u0446\u0438\u0440 \u0438\u0433\u0440\u0430\u0447\u0430."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"\u0418\u043c\u0435"}),(0,i.jsx)(r.th,{children:"\u041e\u043f\u0438\u0441"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"playerid"}),(0,i.jsx)(r.td,{children:"ID \u0438\u0433\u0440\u0430\u0447\u0430 \u043a\u043e\u043c\u0435 \u0441\u0435 \u043f\u043e\u0434\u0435\u0448\u0430\u0432\u0430 \u043f\u0430\u043d\u0446\u0438\u0440"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["Float",":armour"]}),(0,i.jsx)(r.td,{children:"\u041a\u043e\u043b\u0438\u0447\u0438\u043d\u0430 \u043f\u0430\u043d\u0446\u0438\u0440\u0430 \u043a\u043e\u0458\u0430 \u0441\u0435 \u0434\u0430\u0458\u0435, \u0443 \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u0438\u043c\u0430 (float). \u0412\u0440\u0435\u0434\u043d\u043e\u0441\u0442\u0438 \u0432\u0435\u045b\u0435 \u043e\u0434 100 \u043c\u043e\u0433\u0443 \u0434\u0430 \u0441\u0435 \u043f\u043e\u0434\u0435\u0441\u0435, \u0430\u043b\u0438 \u0441\u0435 \u043d\u0435\u045b\u0435 \u043f\u0440\u0438\u043a\u0430\u0437\u0438\u0432\u0430\u0442\u0438 \u0443 HUD-\u0443 \u0438\u0433\u0440\u0430\u0447\u0430."})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"\u0432\u0440\u0430\u045b\u0430",children:"\u0412\u0440\u0430\u045b\u0430"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"1"})," - \u0424\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0458\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u0432\u0440\u0448\u0435\u043d\u0430."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"0"})," - : \u0424\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u043d\u0438\u0458\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u0432\u0440\u0448\u0435\u043d\u0430. \u0422\u043e \u0437\u043d\u0430\u0447\u0438 \u0434\u0430 ID \u0438\u0433\u0440\u0430\u0447\u0430 \u043a\u043e\u0458\u0438 \u0441\u043c\u043e \u0443\u043d\u0435\u043b\u0438 \u043d\u0435 \u043f\u043e\u0441\u0442\u043e\u0458\u0438."]}),"\n",(0,i.jsx)(r.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    // \u0434\u0430\u0458\u0435 \u0438\u0433\u0440\u0430\u0447\u0443 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u0430\u043d \u043f\u0430\u043d\u0446\u0438\u0440 (100%) \u043d\u0430 \u0441\u043f\u0430\u0432\u043d\u0443.\n    SetPlayerArmour(playerid, 100.0);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(r.h2,{id:"\u0431\u0435\u043b\u0435\u0448\u043a\u0435",children:"\u0411\u0435\u043b\u0435\u0448\u043a\u0435"}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsx)(r.p,{children:"\u0418\u043c\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435 \u0458\u0435 armour, \u043d\u0435 armor (\u0410\u043c\u0435\u0440\u0438\u0447\u043a\u0438)."})}),"\n",(0,i.jsx)(r.admonition,{type:"warning",children:(0,i.jsx)(r.p,{children:"\u041f\u0430\u043d\u0446\u0438\u0440 \u0441\u0435 \u0434\u043e\u0431\u0438\u0458\u0430 \u0437\u0430\u043e\u043a\u0440\u0443\u0448\u0435\u043d\u043e \u043d\u0430 integer: \u043f\u043e\u0441\u0442\u0430\u0432\u0438 50.15, \u0430\u043b\u0438 \u0434\u043e\u0431\u0438\u0458\u0435\u0448 50.0"})}),"\n",(0,i.jsx)(r.h2,{id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",children:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"GetPlayerArmour.md",children:"GetPlayerArmour"}),": \u0414\u043e\u0431\u0438\u0458\u0430 \u0441\u0435 \u0432\u0440\u0435\u0434\u043d\u043e\u0441\u0442 \u043f\u0430\u043d\u0446\u0438\u0440\u0430 \u043a\u043e\u0458\u0443 \u0438\u0433\u0440\u0430\u0447 \u0442\u0440\u0435\u043d\u0443\u0442\u043d\u043e \u0438\u043c\u0430."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"SetPlayerHealth.md",children:"SetPlayerHealth"}),": \u041f\u043e\u0434\u0435\u0448\u0430\u0432\u0430 \u0436\u0438\u0432\u043e\u0442\u043d\u0435 \u043f\u043e\u0435\u043d\u0435 \u0438\u0433\u0440\u0430\u0447\u0430."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"GetPlayerHealth.md",children:"GetPlayerHealth"}),": \u0414\u043e\u0431\u0438\u0458\u0430 \u0441\u0435 \u0432\u0440\u0435\u0434\u043d\u043e\u0441\u0442 \u0436\u0438\u0432\u043e\u0442\u043d\u0438\u0445 \u043f\u043e\u0435\u043d\u0430 \u043a\u043e\u0458\u0435 \u0438\u0433\u0440\u0430\u0447 \u0442\u0440\u0435\u043d\u0443\u0442\u043d\u043e \u0438\u043c\u0430."]}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var t=n(96540);const i={},l=t.createContext(i);function s(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);