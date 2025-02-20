"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[64262],{28453:(e,n,c)=>{c.d(n,{R:()=>i,x:()=>o});var a=c(96540);const r={},t=a.createContext(r);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(t.Provider,{value:n},e.children)}},67633:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>s});const a=JSON.parse('{"id":"scripting/callbacks/OnPlayerEnterRaceCheckpoint","title":"OnPlayerEnterRaceCheckpoint","description":"Esta callback \xe9 chamada quando um jogador entra em um checkpoint de corrida.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerEnterRaceCheckpoint.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEnterRaceCheckpoint","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/pt-BR/docs/tags/checkpoint"},{"inline":true,"label":"racecheckpoint","permalink":"/pt-BR/docs/tags/racecheckpoint"}],"version":"current","frontMatter":{"title":"OnPlayerEnterRaceCheckpoint","sidebar_label":"OnPlayerEnterRaceCheckpoint","description":"Esta callback \xe9 chamada quando um jogador entra em um checkpoint de corrida.","tags":["player","checkpoint","racecheckpoint"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEnterPlayerGangZone","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerEnterPlayerGangZone"},"next":{"title":"OnPlayerEnterVehicle","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerEnterVehicle"}}');var r=c(74848),t=c(28453);const i={title:"OnPlayerEnterRaceCheckpoint",sidebar_label:"OnPlayerEnterRaceCheckpoint",description:"Esta callback \xe9 chamada quando um jogador entra em um checkpoint de corrida.",tags:["player","checkpoint","racecheckpoint"]},o=void 0,l={},s=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{TipNPCCallbacksPT:c}=n;return c||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacksPT",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(n.p,{children:"Esta callback \xe9 chamada quando um jogador entra em um checkpoint de corrida."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nome"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"O ID do jogador que entrou no chekpoint de corrida"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"retorno",children:"Retorno"}),"\n",(0,r.jsx)(n.p,{children:"Sempre \xe9 chamada primeiro em filterscripts."}),"\n",(0,r.jsx)(n.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerEnterRaceCheckpoint(playerid)\n{\n    printf("Jogador %d entrou em um checkpoint de corrida!", playerid);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"notas",children:"Notas"}),"\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/SetPlayerCheckpoint.md",children:"SetPlayerCheckpoint"}),": Cria o checkpoint para um jogador."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/DisablePlayerCheckpoint.md",children:"DisablePlayerCheckpoint"}),": Desativa o atual checkpoint do jogador."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/IsPlayerInRaceCheckpoint.md",children:"IsPlayerInCheckpoint"}),": Verifica se o jogador est\xe1 em checkpoint."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/SetPlayerRaceCheckpoint.md",children:"SetPlayerRaceCheckpoint"}),": Cria um checkpoint de corrida."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/DisablePlayerRaceCheckpoint.md",children:"DisablePlayerRaceCheckpoint"}),": Desativa o atual checkpoint de corrida do jogador."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/IsPlayerInRaceCheckpoint.md",children:"IsPlayerInRaceCheckpoint"}),": Verifica se o jogador est\xe1 em um checkpoint de corrida."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);