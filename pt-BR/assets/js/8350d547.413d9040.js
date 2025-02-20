"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[81889],{28453:(e,i,c)=>{c.d(i,{R:()=>t,x:()=>l});var n=c(96540);const a={},r=n.createContext(a);function t(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),n.createElement(r.Provider,{value:i},e.children)}},44438:(e,i,c)=>{c.r(i),c.d(i,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"scripting/callbacks/OnPlayerPickUpPickup","title":"OnPlayerPickUpPickup","description":"Esta callback \xe9 chamada quando um jogador coleta um pickup criado com CreatePickup.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerPickUpPickup.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerPickUpPickup","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerPickUpPickup","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerPickUpPickup.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerPickUpPickup","sidebar_label":"OnPlayerPickUpPickup","description":"Esta callback \xe9 chamada quando um jogador coleta um pickup criado com CreatePickup.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerObjectMoved","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerObjectMoved"},"next":{"title":"OnPlayerPickUpPlayerPickup","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerPickUpPlayerPickup"}}');var a=c(74848),r=c(28453);const t={title:"OnPlayerPickUpPickup",sidebar_label:"OnPlayerPickUpPickup",description:"Esta callback \xe9 chamada quando um jogador coleta um pickup criado com CreatePickup.",tags:["player"]},l=void 0,s={},p=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function o(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsx)(i.p,{children:"Esta callback \xe9 chamada quando um jogador coleta um pickup criado com CreatePickup."}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"Nome"}),(0,a.jsx)(i.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"playerid"}),(0,a.jsx)(i.td,{children:"O ID do jogador que coletou o pickup."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"pickupid"}),(0,a.jsx)(i.td,{children:"O ID do pickup retornado atrav\xe9s do CreatePickup."})]})]})]}),"\n",(0,a.jsx)(i.h2,{id:"retorno",children:"Retorno"}),"\n",(0,a.jsx)(i.p,{children:"Sempre \xe9 chamado primeiro na gamemode."}),"\n",(0,a.jsx)(i.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-c",children:"new pickup_Dinheiro;\nnew pickup_Vida;\n\npublic OnGameModeInit()\n{\n    pickup_Dinheiro = CreatePickup(1274, 2, 0.0, 0.0, 9.0);\n    pickup_Vida = CreatePickup(1240, 2, 0.0, 0.0, 9.0);\n    return 1;\n}\n\npublic OnPlayerPickUpPickup(playerid, pickupid)\n{\n    if (pickupid == pickup_Dinheiro)\n    {\n        GivePlayerMoney(playerid, 1000);\n    }\n    else if (pickupid == pickup_Vida)\n    {\n        SetPlayerHealth(playerid, 100.0);\n    }\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(i.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"../functions/CreatePickup",children:"CreatePickup"}),": Cria um Pickup."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"../functions/DestroyPickup",children:"DestroyPickup"}),": Destr\xf3i um Pickup."]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}}}]);