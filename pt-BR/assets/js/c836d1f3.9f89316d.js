"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[57669],{28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>r});var a=n(96540);const l={},t=a.createContext(l);function o(e){const i=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),a.createElement(t.Provider,{value:i},e.children)}},82902:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>s});const a=JSON.parse('{"id":"scripting/callbacks/OnPlayerExitVehicle","title":"OnPlayerExitVehicle","description":"Esta callback \xe9 chamada quando um jogador sai do ve\xedculo.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerExitVehicle.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerExitVehicle","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerExitVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerExitVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/pt-BR/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnPlayerExitVehicle","sidebar_label":"OnPlayerExitVehicle","description":"Esta callback \xe9 chamada quando um jogador sai do ve\xedculo.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEnterVehicle","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerEnterVehicle"},"next":{"title":"OnPlayerExitedMenu","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerExitedMenu"}}');var l=n(74848),t=n(28453);const o={title:"OnPlayerExitVehicle",sidebar_label:"OnPlayerExitVehicle",description:"Esta callback \xe9 chamada quando um jogador sai do ve\xedculo.",tags:["player","vehicle"]},r=void 0,c={},s=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,l.jsx)(i.p,{children:"Esta callback \xe9 chamada quando um jogador sai do ve\xedculo."}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Nome"}),(0,l.jsx)(i.th,{children:"Descri\xe7\xe3o"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"playerid"}),(0,l.jsx)(i.td,{children:"O ID do jogador que esta saindo do ve\xedculo."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"vehicleid"}),(0,l.jsx)(i.td,{children:"O ID do ve\xedculo que o jogador est\xe1 saindo."})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"retorno",children:"Retorno"}),"\n",(0,l.jsx)(i.p,{children:"Sempre \xe9 chamada primeiro em filterscripts."}),"\n",(0,l.jsx)(i.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-c",children:'public OnPlayerExitVehicle(playerid, vehicleid)\n{\n    new string[35];\n    format(string, sizeof(string), "INFO: Voc\xea est\xe1 saindo do ve\xedculo %i", vehicleid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(i.h2,{id:"notas",children:"Notas"}),"\n",(0,l.jsx)(i.admonition,{type:"warning",children:(0,l.jsx)(i.p,{children:"N\xe3o \xe9 chamada quando o jogador cai de uma bicicleta ou \xe9 removido do ve\xedculo por outros meios como o uso do SetPlayerPos. Voc\xea deve usar OnPlayerStateChange e checar se o antigo estado \xe9 PLAYER_STATE_DRIVER ou PLAYER_STATE_PASSENGER e se o novo estado \xe9 PLAYER_STATE_ONFOOT."})}),"\n",(0,l.jsx)(i.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"/pt-BR/docs/scripting/functions/RemovePlayerFromVehicle",children:"RemovePlayerFromVehicle"}),": Tira o jogador do ve\xedculo."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"/pt-BR/docs/scripting/functions/GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": Verifica que assento o jogador est\xe1."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);