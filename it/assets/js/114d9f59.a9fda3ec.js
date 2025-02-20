"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[46154],{28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var i=n(96540);const s={},l=i.createContext(s);function c(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(l.Provider,{value:t},e.children)}},47865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/GetVehicleRespawnDelay","title":"GetVehicleRespawnDelay","description":"Get the respawn delay of a vehicle.","source":"@site/docs/scripting/functions/GetVehicleRespawnDelay.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleRespawnDelay","permalink":"/it/docs/scripting/functions/GetVehicleRespawnDelay","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetVehicleRespawnDelay.md","tags":[{"inline":true,"label":"vehicle","permalink":"/it/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleRespawnDelay","sidebar_label":"GetVehicleRespawnDelay","description":"Get the respawn delay of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehiclePos","permalink":"/it/docs/scripting/functions/GetVehiclePos"},"next":{"title":"GetVehicleRespawnTick","permalink":"/it/docs/scripting/functions/GetVehicleRespawnTick"}}');var s=n(74848),l=n(28453);const c={title:"GetVehicleRespawnDelay",sidebar_label:"GetVehicleRespawnDelay",description:"Get the respawn delay of a vehicle.",tags:["vehicle"]},r=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Get the respawn delay of a vehicle."}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vehicleid"}),(0,s.jsx)(t.td,{children:"The ID of the vehicle."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);\n\n    new respawnDelay = GetVehicleRespawnDelay(vehicleid);\n    // respawnDelay = 60\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetVehicleRespawnDelay",children:"SetVehicleRespawnDelay"}),": Set the respawn delay of a vehicle."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);