"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[39746],{28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}},75628:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scripting/functions/SetVehicleSpawnInfo","title":"SetVehicleSpawnInfo","description":"Adjusts vehicle model, spawn location, colours, respawn delay and interior.","source":"@site/docs/scripting/functions/SetVehicleSpawnInfo.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehicleSpawnInfo","permalink":"/de/docs/scripting/functions/SetVehicleSpawnInfo","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetVehicleSpawnInfo.md","tags":[{"inline":true,"label":"vehicle","permalink":"/de/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"SetVehicleSpawnInfo","sidebar_label":"SetVehicleSpawnInfo","description":"Adjusts vehicle model, spawn location, colours, respawn delay and interior.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleRespawnTick","permalink":"/de/docs/scripting/functions/SetVehicleRespawnTick"},"next":{"title":"SetVehicleToRespawn","permalink":"/de/docs/scripting/functions/SetVehicleToRespawn"}}');var s=t(74848),r=t(28453);const c={title:"SetVehicleSpawnInfo",sidebar_label:"SetVehicleSpawnInfo",description:"Adjusts vehicle model, spawn location, colours, respawn delay and interior.",tags:["vehicle"]},l=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Adjusts vehicle model, spawn location, colours, respawn delay and interior."}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vehicleid"}),(0,s.jsx)(n.td,{children:"The ID of the vehicle."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"modelid"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"../resources/vehicleid",children:"Vehicle model"})," id to set."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Float",":spawnX"]}),(0,s.jsx)(n.td,{children:"The X coordinate to set."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Float",":spawnY"]}),(0,s.jsx)(n.td,{children:"The Y coordinate to set."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Float",":spawnZ"]}),(0,s.jsx)(n.td,{children:"The Z coordinate to set."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Float",":angle"]}),(0,s.jsx)(n.td,{children:"The angle to set."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"colour1"}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.a,{href:"../resources/vehiclecolorid",children:"vehicle colour"})," 1 to set."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"colour2"}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.a,{href:"../resources/vehiclecolorid",children:"vehicle colour"})," 2 to set."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"respawnDelay = -2"}),(0,s.jsx)(n.td,{children:"The vehicle respawn delay to set."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"interior = -2"}),(0,s.jsx)(n.td,{children:"The interior id to set."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);\n\n    SetVehicleSpawnInfo(vehicleid, 522, 2096.0417, -1314.1062, 24.0078, 0.0000, 1, 7);\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GetVehicleSpawnInfo",children:"GetVehicleSpawnInfo"}),": Gets the vehicle spawn location and colours."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);