"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[62346],{28453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>c});var n=s(96540);const l={},t=n.createContext(l);function i(e){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(t.Provider,{value:a},e.children)}},66891:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"scripting/callbacks/OnVehicleDamageStatusUpdate","title":"OnVehicleDamageStatusUpdate","description":"Para algunas funciones \xfatiles para trabajar con valores de da\xf1os del veh\xedculo, vea aqu\xed.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleDamageStatusUpdate.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleDamageStatusUpdate","permalink":"/es/docs/scripting/callbacks/OnVehicleDamageStatusUpdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnVehicleDamageStatusUpdate.md","tags":[{"inline":true,"label":"vehicle","permalink":"/es/docs/tags/vehicle"}],"version":"current","frontMatter":{"t\xedtulo":"OnVehicleDamageStatusUpdate","descripci\xf3n":"Este callback se llama cuando un elemento de veh\xedculo como las puertas, llantas, paneles, o luces cambiar su estado de da\xf1o.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnUnoccupiedVehicleUpdate","permalink":"/es/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate"},"next":{"title":"OnVehicleDeath","permalink":"/es/docs/scripting/callbacks/OnVehicleDeath"}}');var l=s(74848),t=s(28453);const i={"t\xedtulo":"OnVehicleDamageStatusUpdate","descripci\xf3n":"Este callback se llama cuando un elemento de veh\xedculo como las puertas, llantas, paneles, o luces cambiar su estado de da\xf1o.",tags:["vehicle"]},c=void 0,d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Devoluciones",id:"devoluciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Funciones Relacionadas",id:"funciones-relacionadas",level:2}];function r(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.admonition,{type:"tip",children:(0,l.jsxs)(a.p,{children:["Para algunas funciones \xfatiles para trabajar con valores de da\xf1os del veh\xedculo, vea ",(0,l.jsx)(a.a,{href:"../resources/damagestatus",children:"aqu\xed"}),"."]})}),"\n",(0,l.jsx)(a.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsx)(a.p,{children:"Este callback se llama cuando un elemento de veh\xedculo como las puertas, llantas, paneles, o luces cambiar su estado de da\xf1o."}),"\n",(0,l.jsxs)(a.table,{children:[(0,l.jsx)(a.thead,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.th,{children:"Nombre"}),(0,l.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(a.tbody,{children:[(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"vehicleid"}),(0,l.jsx)(a.td,{children:"El ID del veh\xedculo que cambi\xf3 su estado de da\xf1o."})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"playerid"}),(0,l.jsx)(a.td,{children:"El ID del jugador que sincroniz\xf3 el cambio en el estado de da\xf1o (qui\xe9n hizo reparar o da\xf1ar el auto)."})]})]})]}),"\n",(0,l.jsx)(a.h2,{id:"devoluciones",children:"Devoluciones"}),"\n",(0,l.jsx)(a.p,{children:"1 - Prevendr\xe1 a otros filterscripts de recibir este callback."}),"\n",(0,l.jsx)(a.p,{children:"0 - Indica que este callback ser\xe1 pasado al siguiente filterscript."}),"\n",(0,l.jsx)(a.p,{children:"Siempre se llama primero en filterscripts."}),"\n",(0,l.jsx)(a.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-c",children:"public OnVehicleDamageStatusUpdate(vehicleid, playerid)\n{\n    // Obtiene el estado de da\xf1o de todos los componentes del veh\xedculo\n    new panels, doors, lights, tires;\n    GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);\n\n    // Establece las ruedas a 0, lo que significa que ninguna est\xe1 pinchada\n    tires = 0;\n\n    // Actualiza el da\xf1o del veh\xedculo sin las ruedas pinchadas\n    UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires);\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(a.h2,{id:"notas",children:"Notas"}),"\n",(0,l.jsx)(a.admonition,{type:"tip",children:(0,l.jsx)(a.p,{children:"Esto no incluye cambios en la salud del veh\xedculo."})}),"\n",(0,l.jsx)(a.h2,{id:"funciones-relacionadas",children:"Funciones Relacionadas"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.a,{href:"../functions/GetVehicleDamageStatus",children:"GetVehicleDamageStatus"}),": Obtiene el estado de da\xf1o de cada parte individualmente."]}),"\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.a,{href:"../functions/UpdateVehicleDamageStatus",children:"UpdateVehicleDamageStatus"}),": Actualiza el da\xf1o del veh\xedculo."]}),"\n"]})]})}function u(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}}}]);