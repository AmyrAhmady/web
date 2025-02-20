"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[33843],{5128:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"scripting/functions/SetVehicleOccupiedTick","title":"SetVehicleOccupiedTick","description":"Set the occupied tick of a vehicle.","source":"@site/docs/scripting/functions/SetVehicleOccupiedTick.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehicleOccupiedTick","permalink":"/fr/docs/scripting/functions/SetVehicleOccupiedTick","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetVehicleOccupiedTick.md","tags":[{"inline":true,"label":"vehicle","permalink":"/fr/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"SetVehicleOccupiedTick","sidebar_label":"SetVehicleOccupiedTick","description":"Set the occupied tick of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleNumberPlate","permalink":"/fr/docs/scripting/functions/SetVehicleNumberPlate"},"next":{"title":"SetVehicleParamsCarDoors","permalink":"/fr/docs/scripting/functions/SetVehicleParamsCarDoors"}}');var n=t(74848),r=t(28453);const s={title:"SetVehicleOccupiedTick",sidebar_label:"SetVehicleOccupiedTick",description:"Set the occupied tick of a vehicle.",tags:["vehicle"]},l=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{VersionWarn:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsx)(i.p,{children:"This function has not yet been implemented."})}),"\n",(0,n.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(i.p,{children:"Set the occupied tick of a vehicle."}),"\n",(0,n.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Name"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"vehicleid"}),(0,n.jsx)(i.td,{children:"The ID of the vehicle."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"ticks"}),(0,n.jsx)(i.td,{children:"The ticks to set."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"return-values",children:"Return Values"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"true"})," - Function executed successfully."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"false"})," - Function failed to execute."]}),"\n",(0,n.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);\n\n    SetVehicleOccupiedTick(vehicleid, 300);\n    return 1;\n}\n"})}),"\n",(0,n.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"GetVehicleOccupiedTick",children:"GetVehicleOccupiedTick"}),": Get the occupied tick of a vehicle."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>l});var c=t(96540);const n={},r=c.createContext(n);function s(e){const i=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),c.createElement(r.Provider,{value:i},e.children)}}}]);