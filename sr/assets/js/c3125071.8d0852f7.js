"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[93147],{28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var t=i(96540);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}},40413:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/callbacks/OnEnterExitModShop","title":"OnEnterExitModShop","description":"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u0443\u0452\u0435 \u0438\u043b\u0438 \u043d\u0430\u043f\u0443\u0441\u0442\u0438 \u043c\u043e\u0434 \u0448\u043e\u043f.","source":"@site/i18n/sr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnEnterExitModShop.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnEnterExitModShop","permalink":"/sr/docs/scripting/callbacks/OnEnterExitModShop","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnEnterExitModShop.md","tags":[{"inline":true,"label":"player","permalink":"/sr/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnEnterExitModShop","sidebar_label":"OnEnterExitModShop","description":"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u0443\u0452\u0435 \u0438\u043b\u0438 \u043d\u0430\u043f\u0443\u0441\u0442\u0438 \u043c\u043e\u0434 \u0448\u043e\u043f.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnDialogResponse","permalink":"/sr/docs/scripting/callbacks/OnDialogResponse"},"next":{"title":"OnFilterScriptExit","permalink":"/sr/docs/scripting/callbacks/OnFilterScriptExit"}}');var r=i(74848),l=i(28453);const s={title:"OnEnterExitModShop",sidebar_label:"OnEnterExitModShop",description:"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u0443\u0452\u0435 \u0438\u043b\u0438 \u043d\u0430\u043f\u0443\u0441\u0442\u0438 \u043c\u043e\u0434 \u0448\u043e\u043f.",tags:["player"]},d=void 0,c={},o=[{value:"\u041e\u043f\u0438\u0441",id:"\u043e\u043f\u0438\u0441",level:2},{value:"\u0412\u0440\u0430\u045b\u0430",id:"\u0432\u0440\u0430\u045b\u0430",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",level:2},{value:"\u0411\u0435\u043b\u0435\u0448\u043a\u0435",id:"\u0431\u0435\u043b\u0435\u0448\u043a\u0435",level:2},{value:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",level:2},{value:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u043e\u043f\u0438\u0441",children:"\u041e\u043f\u0438\u0441"}),"\n",(0,r.jsx)(n.p,{children:"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u0443\u0452\u0435 \u0438\u043b\u0438 \u043d\u0430\u043f\u0443\u0441\u0442\u0438 \u043c\u043e\u0434 \u0448\u043e\u043f."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u0418\u041c\u0435"}),(0,r.jsx)(n.th,{children:"\u041e\u043f\u0438\u0441"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"ID \u0438\u0433\u0440\u0430\u0447\u0430 \u043a\u043e\u0458\u0438 \u0458\u0435 \u0443\u0448\u0430\u043e \u0438\u043b\u0438 \u043d\u0430\u043f\u0443\u0441\u0442\u0438\u043e \u043c\u043e\u0434 \u0448\u043e\u043f."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"enterexit"}),(0,r.jsx)(n.td,{children:"\u0418\u043d\u0442\u0435\u0440\u0438\u0458\u0435\u0440\u0441\u043a\u0438 ID \u043c\u043e\u0434 \u0448\u043e\u043f\u0430 \u0443 \u043a\u043e\u0458\u0438 \u0438\u0433\u0440\u0430\u0447 \u0443\u043b\u0430\u0437\u0438 (\u0438\u043b\u0438 0 \u0430\u043a\u043e \u0438\u0437\u043b\u0430\u0437\u0438)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"interiorid"}),(0,r.jsx)(n.td,{children:"1 \u0430\u043a\u043e \u0458\u0435 \u0438\u0433\u0440\u0430\u0447 \u0443\u0448\u0430\u043e \u0438\u043b\u0438 0 \u0430\u043a\u043e \u0458\u0435 \u0438\u0437\u0430\u0448\u0430\u043e."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u0432\u0440\u0430\u045b\u0430",children:"\u0412\u0440\u0430\u045b\u0430"}),"\n",(0,r.jsx)(n.p,{children:"\u0423\u0432\u0435\u043a \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043f\u0440\u0432\u0438 \u0443 \u0444\u0438\u043b\u0442\u0435\u0440 \u0441\u043a\u0440\u0438\u043f\u0442\u0430\u043c\u0430."}),"\n",(0,r.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnEnterExitModShop(playerid, enterexit, interiorid)\n{\n    if (enterexit == 0) // \u0410\u043a\u043e \u0458\u0435 enterexit 0, \u0442\u043e \u0437\u043d\u0430\u0447\u0438 \u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u0438\u0437\u043b\u0430\u0437\u0438\n    {\n        SendClientMessage(playerid, COLOR_WHITE, "Nice car! You have been taxed $100.");\n        GivePlayerMoney(playerid, -100);\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u0431\u0435\u043b\u0435\u0448\u043a\u0435",children:"\u0411\u0435\u043b\u0435\u0448\u043a\u0435"}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:"\u041f\u043e\u0437\u043d\u0430\u0442 bug:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u0418\u0433\u0440\u0430\u0447\u0438\u043c\u0430 \u0441\u0435 \u0434\u0435\u0448\u0430\u0432\u0430 \u0441\u0443\u0434\u0430\u0440 \u043a\u0430\u0434\u0430 \u0443\u0452\u0443 \u0443 \u0438\u0441\u0442\u0438 \u043c\u043e\u0434 \u0448\u043e\u043f."}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",children:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435"}),"\n",(0,r.jsx)(n.p,{children:"\u0421\u043b\u0435\u0434\u0435\u045b\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435 \u043c\u043e\u0433\u0443 \u0431\u0438\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u043d\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043d\u0430 \u043d\u0435\u043a\u0438 \u043d\u0430\u0447\u0438\u043d \u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0441\u0430 \u043e\u0432\u043e\u043c \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u043e\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u043e\u043c."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"OnVehicleMod",children:"OnVehicleMod"}),": \u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u0432\u043e\u0437\u0438\u043b\u043e \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0443\u0458\u0435."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"OnVehicleRespray",children:"OnVehicleRespray"}),": \u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u0438\u0437\u0430\u0452\u0435 \u0438\u0437 \u043c\u043e\u0434 \u0448\u043e\u043f\u0430, \u0447\u0430\u043a \u0438 \u0430\u043a\u043e \u0431\u043e\u0458\u0435 \u043d\u0438\u0441\u0443 \u043f\u0440\u043e\u043c\u0435\u043d\u0459\u0435\u043d\u0435."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"OnVehiclePaintjob",children:"OnVehiclePaintjob"}),": \u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043f\u0440\u0435\u0433\u043b\u0435\u0434\u0430 \u0431\u043e\u0458\u0443 \u0432\u043e\u0437\u0438\u043b\u0430 \u0443\u043d\u0443\u0442\u0430\u0440 \u043c\u043e\u0434 \u0448\u043e\u043f\u0430."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",children:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435"}),"\n",(0,r.jsx)(n.p,{children:"\u0421\u043b\u0435\u0434\u0435\u045b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435 \u043c\u043e\u0433\u0443 \u0431\u0438\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u043d\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043d\u0430 \u043d\u0435\u043a\u0438 \u043d\u0430\u0447\u0438\u043d \u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0441\u0430 \u043e\u0432\u043e\u043c \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u043e\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u043e\u043c"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/IsPlayerInModShop",children:"IsPlayerInModShop"}),": \u041f\u0440\u043e\u0432\u0435\u0440\u0438 \u0434\u0430 \u043b\u0438 \u0458\u0435 \u0438\u0433\u0440\u0430\u0447 \u0443 \u043c\u043e\u0434 \u0448\u043e\u043f\u0443."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/AddVehicleComponent",children:"AddVehicleComponent"}),": \u0414\u043e\u0434\u0430\u0458 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0443 \u0432\u043e\u0437\u0438\u043b\u0443."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);