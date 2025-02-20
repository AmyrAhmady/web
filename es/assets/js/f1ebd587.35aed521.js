"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[43139],{28453:(e,n,c)=>{c.d(n,{R:()=>t,x:()=>r});var a=c(96540);const i={},l=a.createContext(i);function t(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(l.Provider,{value:n},e.children)}},80024:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"scripting/callbacks/OnPlayerLeaveCheckpoint","title":"OnPlayerLeaveCheckpoint","description":"Descripci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerLeaveCheckpoint.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerLeaveCheckpoint","permalink":"/es/docs/scripting/callbacks/OnPlayerLeaveCheckpoint","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerLeaveCheckpoint.md","tags":[{"inline":true,"label":"player","permalink":"/es/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/es/docs/tags/checkpoint"}],"version":"current","frontMatter":{"t\xedtulo":"OnPlayerLeaveCheckpoint","descripci\xf3n":"Este callback se llama cuando un jugador sale del checkpoint establecido a \xe9l por SetPlayerCheckpoint.","tags":["player","checkpoint"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerKeyStateChange","permalink":"/es/docs/scripting/callbacks/OnPlayerKeyStateChange"},"next":{"title":"OnPlayerLeaveGangZone","permalink":"/es/docs/scripting/callbacks/OnPlayerLeaveGangZone"}}');var i=c(74848),l=c(28453);const t={"t\xedtulo":"OnPlayerLeaveCheckpoint","descripci\xf3n":"Este callback se llama cuando un jugador sale del checkpoint establecido a \xe9l por SetPlayerCheckpoint.",tags:["player","checkpoint"]},r=void 0,s={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Devoluciones",id:"devoluciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Funciones Relacionadas",id:"funciones-relacionadas",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{TipNPCCallbacksES:c}=n;return c||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacksES",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsx)(n.p,{children:"Este callback se llama cuando un jugador sale del checkpoint establecido a \xe9l por SetPlayerCheckpoint. S\xf3lo se puede establecer un checkpoint al mismo tiempo al jugador."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Nombre"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"El ID del jugador que sali\xf3 de su checkpoint."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"devoluciones",children:"Devoluciones"}),"\n",(0,i.jsx)(n.p,{children:"Siempre se llama primero en filterscripts."}),"\n",(0,i.jsx)(n.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerLeaveCheckpoint(playerid)\n{\n    printf("El jugador %i sali\xf3 de un checkpoint!", playerid);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notas",children:"Notas"}),"\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"funciones-relacionadas",children:"Funciones Relacionadas"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/SetPlayerCheckpoint",children:"SetPlayerCheckpoint"}),": Crear un checkpoint a un jugador."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/DisablePlayerCheckpoint",children:"DisablePlayerCheckpoint"}),": Deshabilitar el checkpoint actual de un jugador."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/IsPlayerInCheckpoint",children:"IsPlayerInCheckpoint"}),": Comprobar si el jugador est\xe1 en un checkpoint."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/SetPlayerRaceCheckpoint",children:"SetPlayerRaceCheckpoint"}),": Crear un checkpoint de carreras a un jugador."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/DisablePlayerRaceCheckpoint",children:"DisablePlayerRaceCheckpoint"}),": Deshabilitar el checkpoint de carreras actual del jugador."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/IsPlayerInRaceCheckpoint",children:"IsPlayerInRaceCheckpoint"}),": Comprobar si el jugador est\xe1 en un checkpoint de carreras."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);