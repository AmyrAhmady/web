"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[78806],{23730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/GetVehicleSirenState","title":"GetVehicleSirenState","description":"Gets the siren state of the vehicle.","source":"@site/docs/scripting/functions/GetVehicleSirenState.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleSirenState","permalink":"/it/docs/scripting/functions/GetVehicleSirenState","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetVehicleSirenState.md","tags":[{"inline":true,"label":"vehicle","permalink":"/it/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleSirenState","sidebar_label":"GetVehicleSirenState","description":"Gets the siren state of the vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleSeats","permalink":"/it/docs/scripting/functions/GetVehicleSeats"},"next":{"title":"GetVehicleSpawnInfo","permalink":"/it/docs/scripting/functions/GetVehicleSpawnInfo"}}');var r=n(74848),s=n(28453);const l={title:"GetVehicleSirenState",sidebar_label:"GetVehicleSirenState",description:"Gets the siren state of the vehicle.",tags:["vehicle"]},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Gets the siren state of the vehicle."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vehicleid"}),(0,r.jsx)(t.td,{children:"The ID of the vehicle."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,r.jsx)(t.p,{children:"Returns the vehicle siren state."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)\n{\n    new bool:sirenState = GetVehicleSirenState(vehicleid);\n\n    SendClientMessage(playerid, 0xFFFF00FF, "Vehicle siren state: %s", sirenState ? "On" : "Off");\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetVehicleParamsSirenState",children:"SetVehicleParamsSirenState"}),": Turn the siren for a vehicle on or off."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"ToggleVehicleSirenEnabled",children:"ToggleVehicleSirenEnabled"}),": Turn the siren for a vehicle on or off."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"IsVehicleSirenEnabled",children:"IsVehicleSirenEnabled"}),": Checks if a vehicle siren is on or off."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerSirenState",children:"GetPlayerSirenState"}),": Gets the siren state of the player's vehicle."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var i=n(96540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);