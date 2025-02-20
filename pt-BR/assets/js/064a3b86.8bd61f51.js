"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[93705],{26440:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>s});const t=JSON.parse('{"id":"scripting/callbacks/OnPlayerEnterCheckpoint","title":"OnPlayerEnterCheckpoint","description":"Esta callback \xe9 chamada quando um jogador entre em um checkpoint colocado para aquele jogador.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerEnterCheckpoint.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEnterCheckpoint","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerEnterCheckpoint","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerEnterCheckpoint.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/pt-BR/docs/tags/checkpoint"}],"version":"current","frontMatter":{"title":"OnPlayerEnterCheckpoint","sidebar_label":"OnPlayerEnterCheckpoint","description":"Esta callback \xe9 chamada quando um jogador entre em um checkpoint colocado para aquele jogador.","tags":["player","checkpoint"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEditObject","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerEditObject"},"next":{"title":"OnPlayerEnterGangZone","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerEnterGangZone"}}');var r=a(74848),c=a(28453);const o={title:"OnPlayerEnterCheckpoint",sidebar_label:"OnPlayerEnterCheckpoint",description:"Esta callback \xe9 chamada quando um jogador entre em um checkpoint colocado para aquele jogador.",tags:["player","checkpoint"]},i=void 0,l={},s=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components},{TipNPCCallbacksPT:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacksPT",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(n.p,{children:"Esta callback \xe9 chamada quando um jogador entre em um checkpoint colocado para aquele jogador."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nome"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"O jogador que entrou no checkpoint."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"retorno",children:"Retorno"}),"\n",(0,r.jsx)(n.p,{children:"Sempre \xe9 chamada primeiro em filterscripts."}),"\n",(0,r.jsx)(n.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"//Neste exemplo o checkpoint \xe9 criado para o jogador quando spawna,\n//o qual cria um ve\xedculo e desativa o checkpoint.\npublic OnPlayerSpawn(playerid)\n{\n    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);\n    return 1;\n}\n\npublic OnPlayerEnterCheckpoint(playerid)\n{\n    CreateVehicle(520, 1982.6150, -221.0145, -0.2432, 82.2873, -1, -1, 60000);\n    DisablePlayerCheckpoint(playerid);\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"notas",children:"Notas"}),"\n",(0,r.jsx)(a,{}),"\n",(0,r.jsx)(n.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/SetPlayerCheckpoint.md",children:"SetPlayerCheckpoint"}),": Cria o checkpoint para um jogador."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/DisablePlayerCheckpoint.md",children:"DisablePlayerCheckpoint"}),": Desativa o atual checkpoint do jogador."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/IsPlayerInRaceCheckpoint.md",children:"IsPlayerInCheckpoint"}),": Verifica se o jogador est\xe1 em checkpoint."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/SetPlayerRaceCheckpoint.md",children:"SetPlayerRaceCheckpoint"}),": Cria um checkpoint de corrida."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/DisablePlayerRaceCheckpoint.md",children:"DisablePlayerRaceCheckpoint"}),": Desativa o atual checkpoint de corrida do jogador."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/IsPlayerInRaceCheckpoint.md",children:"IsPlayerInRaceCheckpoint"}),": Verifica se o jogador est\xe1 em um checkpoint de corrida."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var t=a(96540);const r={},c=t.createContext(r);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);