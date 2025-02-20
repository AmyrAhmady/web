"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[80095],{18394:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"scripting/callbacks/OnPlayerEnterVehicle","title":"OnPlayerEnterVehicle","description":"Descripci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerEnterVehicle.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEnterVehicle","permalink":"/es/docs/scripting/callbacks/OnPlayerEnterVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerEnterVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/es/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/es/docs/tags/vehicle"}],"version":"current","frontMatter":{"t\xedtulo":"OnPlayerEnterVehicle","descripci\xf3n":"Este callback se llama cuando un jugador comienza a entrar a un veh\xedculo, o sea que el jugador a\xfan no estar\xe1 en el veh\xedculo cuando este callback se llame.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEnterRaceCheckpoint","permalink":"/es/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint"},"next":{"title":"OnPlayerExitVehicle","permalink":"/es/docs/scripting/callbacks/OnPlayerExitVehicle"}}');var c=l(74848),r=l(28453);const t={"t\xedtulo":"OnPlayerEnterVehicle","descripci\xf3n":"Este callback se llama cuando un jugador comienza a entrar a un veh\xedculo, o sea que el jugador a\xfan no estar\xe1 en el veh\xedculo cuando este callback se llame.",tags:["player","vehicle"]},s=void 0,i={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Devoluciones",id:"devoluciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Funciones Relacionadas",id:"funciones-relacionadas",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsx)(n.p,{children:"Este callback se llama cuando un jugador comienza a entrar a un veh\xedculo, o sea que el jugador a\xfan no estar\xe1 en el veh\xedculo cuando este callback se llame."}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Nombre"}),(0,c.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"playerid"}),(0,c.jsx)(n.td,{children:"ID del jugador que intenta entrar a un veh\xedculo."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"vehicleid"}),(0,c.jsx)(n.td,{children:"ID del veh\xedculo al que el jugador est\xe1 intentando entrar."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"ispassenger"}),(0,c.jsx)(n.td,{children:"0 si est\xe1 entrando como conductor. 1 si est\xe1 entrando como pasajero."})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"devoluciones",children:"Devoluciones"}),"\n",(0,c.jsx)(n.p,{children:"Siempre se llama primero en filterscripts."}),"\n",(0,c.jsx)(n.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:'public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)\n{\n    new string[128];\n    format(string, sizeof(string), "Est\xe1s entrando al veh\xedculo %i", vehicleid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(n.h2,{id:"notas",children:"Notas"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"Este callback es llamado cuando un jugador COMIENZA a entrar a un veh\xedculo, no cuando este ENTR\xd3 realmente. Vea OnPlayerStateChange. Este callback es igualmente llamado si al jugador se le niega la entrada (ej. el auto est\xe1 cerrado o lleno)."})}),"\n",(0,c.jsx)(n.h2,{id:"funciones-relacionadas",children:"Funciones Relacionadas"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"../functions/PutPlayerInVehicle",children:"PutPlayerInVehicle"}),": Pone a un jugador adentro de un veh\xedculo."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"../functions/GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": Comprueba en qu\xe9 asiento est\xe1 un jugador."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>s});var a=l(96540);const c={},r=a.createContext(c);function t(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);