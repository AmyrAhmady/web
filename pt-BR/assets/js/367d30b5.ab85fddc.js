"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[14919],{8825:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>s});const i=JSON.parse('{"id":"scripting/callbacks/OnPlayerLeaveCheckpoint","title":"OnPlayerLeaveCheckpoint","description":"Esta callback \xe9 chamada quando um jogador sai de um checkpoint definido para eles por SetPlayerCheckpoint.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerLeaveCheckpoint.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerLeaveCheckpoint","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerLeaveCheckpoint","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerLeaveCheckpoint.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/pt-BR/docs/tags/checkpoint"}],"version":"current","frontMatter":{"title":"OnPlayerLeaveCheckpoint","sidebar_label":"OnPlayerLeaveCheckpoint","description":"Esta callback \xe9 chamada quando um jogador sai de um checkpoint definido para eles por SetPlayerCheckpoint.","tags":["player","checkpoint"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerKeyStateChange","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerKeyStateChange"},"next":{"title":"OnPlayerLeaveGangZone","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerLeaveGangZone"}}');var t=a(74848),c=a(28453);const r={title:"OnPlayerLeaveCheckpoint",sidebar_label:"OnPlayerLeaveCheckpoint",description:"Esta callback \xe9 chamada quando um jogador sai de um checkpoint definido para eles por SetPlayerCheckpoint.",tags:["player","checkpoint"]},o=void 0,l={},s=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components},{TipNPCCallbacksPT:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacksPT",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(n.p,{children:"Esta callback \xe9 chamada quando um jogador sai de um checkpoint definido para eles por SetPlayerCheckpoint. Apenas um checkpoint pode ser definido por vez."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Nome"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"O ID do jogador que saiu do respectivo checkpoint."})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"retorno",children:"Retorno"}),"\n",(0,t.jsx)(n.p,{children:"Sempre \xe9 chamada primeiro em Filterscripts.."}),"\n",(0,t.jsx)(n.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnPlayerLeaveCheckpoint(playerid)\n{\n    printf("Jogador %i saiu do checkpoint!", playerid);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"notas",children:"Notas"}),"\n",(0,t.jsx)(a,{}),"\n",(0,t.jsx)(n.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/SetPlayerCheckpoint",children:"SetPlayerCheckpoint"}),": Cria o checkpoint para um jogador."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/DisablePlayerCheckpoint",children:"DisablePlayerCheckpoint"}),": Desativa o atual checkpoint de um jogador."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/IsPlayerInCheckpoint",children:"IsPlayerInCheckpoint"}),": Verifica se o jogador est\xe1 em um checkpoint."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/SetPlayerRaceCheckpoint",children:"SetPlayerRaceCheckpoint"}),": Cria um checkpoint de corrida para o jogador."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/DisablePlayerRaceCheckpoint",children:"DisablePlayerRaceCheckpoint"}),": Desativa o atual checkpoint de corrida para o jogador."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/IsPlayerInRaceCheckpoint",children:"IsPlayerInRaceCheckpoint"}),": Verifica se o jogador est\xe1 em um checkpoint de corrida."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>o});var i=a(96540);const t={},c=i.createContext(t);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);