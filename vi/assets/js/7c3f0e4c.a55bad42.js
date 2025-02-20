"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[40064],{2761:(e,i,c)=>{c.r(i),c.d(i,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"scripting/functions/GetVehicleOccupiedTick","title":"GetVehicleOccupiedTick","description":"Get the occupied tick of a vehicle.","source":"@site/docs/scripting/functions/GetVehicleOccupiedTick.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleOccupiedTick","permalink":"/vi/docs/scripting/functions/GetVehicleOccupiedTick","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetVehicleOccupiedTick.md","tags":[{"inline":true,"label":"vehicle","permalink":"/vi/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleOccupiedTick","sidebar_label":"GetVehicleOccupiedTick","description":"Get the occupied tick of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleNumberPlate","permalink":"/vi/docs/scripting/functions/GetVehicleNumberPlate"},"next":{"title":"GetVehiclePaintjob","permalink":"/vi/docs/scripting/functions/GetVehiclePaintjob"}}');var n=c(74848),l=c(28453);const r={title:"GetVehicleOccupiedTick",sidebar_label:"GetVehicleOccupiedTick",description:"Get the occupied tick of a vehicle.",tags:["vehicle"]},s=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{VersionWarn:c}=i;return c||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(i.p,{children:"Get the occupied tick of a vehicle."}),"\n",(0,n.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Name"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"vehicleid"}),(0,n.jsx)(i.td,{children:"The ID of the vehicle."})]})})]}),"\n",(0,n.jsx)(i.h2,{id:"return-values",children:"Return Values"}),"\n",(0,n.jsx)(i.p,{children:"Returns occupied tick in milliseconds."}),"\n",(0,n.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);\n\n    new occupiedTick = GetVehicleOccupiedTick(vehicleid);\n    printf("Vehicle ID %d occupied tick: %d ms", vehicleid, occupiedTick);\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"SetVehicleOccupiedTick",children:"SetVehicleOccupiedTick"}),": Set the occupied tick of a vehicle."]}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,i,c)=>{c.d(i,{R:()=>r,x:()=>s});var t=c(96540);const n={},l=t.createContext(n);function r(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);