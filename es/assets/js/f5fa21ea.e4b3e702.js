"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[82154],{28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var c=i(96540);const l={},s=c.createContext(l);function t(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),c.createElement(s.Provider,{value:n},e.children)}},53949:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"scripting/callbacks/OnVehicleMod","title":"OnVehicleMod","description":"Descripci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleMod.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleMod","permalink":"/es/docs/scripting/callbacks/OnVehicleMod","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnVehicleMod.md","tags":[{"inline":true,"label":"vehicle","permalink":"/es/docs/tags/vehicle"}],"version":"current","frontMatter":{"t\xedtulo":"OnVehicleMod","descripci\xf3n":"Este callback se llama cuando un veh\xedculo es tuneado.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleDeath","permalink":"/es/docs/scripting/callbacks/OnVehicleDeath"},"next":{"title":"OnVehiclePaintjob","permalink":"/es/docs/scripting/callbacks/OnVehiclePaintjob"}}');var l=i(74848),s=i(28453);const t={"t\xedtulo":"OnVehicleMod","descripci\xf3n":"Este callback se llama cuando un veh\xedculo es tuneado.",tags:["vehicle"]},a=void 0,o={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Devoluciones",id:"devoluciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Funciones Relacionadas",id:"funciones-relacionadas",level:2}];function r(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsx)(n.p,{children:"Este callback se llama cuando un veh\xedculo es tuneado."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Nombre"}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"El ID del conductor del veh\xedculo."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vehicleid"}),(0,l.jsx)(n.td,{children:"El ID del veh\xedculo que es tuneado."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"componentid"}),(0,l.jsx)(n.td,{children:"El ID del componente a\xf1adido al veh\xedculo."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"devoluciones",children:"Devoluciones"}),"\n",(0,l.jsx)(n.p,{children:"1 - Prevendr\xe1 a otros filterscripts de recibir este callback."}),"\n",(0,l.jsx)(n.p,{children:"0 - Indica que este callback ser\xe1 pasado al siguiente filterscript."}),"\n",(0,l.jsx)(n.p,{children:"Siempre se llama primero en filterscripts."}),"\n",(0,l.jsx)(n.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnVehicleMod(playerid, vehicleid, componentid)\n{\n    printf("El veh\xedculo %d fue modificado por ID %d con el id de componente %d",vehicleid, playerid,componentid);\n    if (GetPlayerInterior(playerid) == 0)\n    {\n        BanEx(playerid, "Hack de tuning"); // script Anti-tuning hacks\n        return 0; // Previene la mala modificaci\xf3n de ser sincronizada a otros jugadores.\n        //Probado y funciona incluso en servidores que te permiten modificar tu veh\xedculo mediante comandos, men\xfas, di\xe1logos, etc.\n    }\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"notas",children:"Notas"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"Este callback NO se llama por AddVehicleComponent."})}),"\n",(0,l.jsx)(n.h2,{id:"funciones-relacionadas",children:"Funciones Relacionadas"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/AddVehicleComponent",children:"AddVehicleComponent"}),": A\xf1adir un componente a un veh\xedculo."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnEnterExitModShop",children:"OnEnterExitModShop"}),": Se llama cuando un jugador entra o sale de un taller de modificaci\xf3n."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnVehiclePaintjob",children:"OnVehiclePaintjob"}),": Se llama cuando la capa de pintura de un auto cambia."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnVehicleRespray",children:"OnVehicleRespray"}),": Se llama cuando un veh\xedculo es repintado."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}}}]);