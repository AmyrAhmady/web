"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[62454],{28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var i=n(96540);const r={},l=i.createContext(r);function c(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(l.Provider,{value:t},e.children)}},45613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/GetVehicleNumberPlate","title":"GetVehicleNumberPlate","description":"Get the number plate of a vehicle.","source":"@site/docs/scripting/functions/GetVehicleNumberPlate.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleNumberPlate","permalink":"/zh-tw/docs/scripting/functions/GetVehicleNumberPlate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetVehicleNumberPlate.md","tags":[{"inline":true,"label":"vehicle","permalink":"/zh-tw/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleNumberPlate","sidebar_label":"GetVehicleNumberPlate","description":"Get the number plate of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleModelsUsed","permalink":"/zh-tw/docs/scripting/functions/GetVehicleModelsUsed"},"next":{"title":"GetVehicleOccupiedTick","permalink":"/zh-tw/docs/scripting/functions/GetVehicleOccupiedTick"}}');var r=n(74848),l=n(28453);const c={title:"GetVehicleNumberPlate",sidebar_label:"GetVehicleNumberPlate",description:"Get the number plate of a vehicle.",tags:["vehicle"]},s=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Get the number plate of a vehicle."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vehicleid"}),(0,r.jsx)(t.td,{children:"The ID of the vehicle."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"plate[]"}),(0,r.jsx)(t.td,{children:"An array into which to store the name, passed by reference."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"len = sizeof (plate)"}),(0,r.jsx)(t.td,{children:"The length of the plate that should be stored."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);\n    SetVehicleNumberPlate(vehicleid, "ABCD 123");\n\n    new numberPlate[16];\n    GetVehicleNumberPlate(vehicleid, numberPlate);\n    // numberPlate = "ABCD 123"\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetVehicleNumberPlate",children:"SetVehicleNumberPlate"}),": Set a vehicle numberplate."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);