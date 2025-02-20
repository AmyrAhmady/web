"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[63937],{6095:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"scripting/functions/GetVehicleSpawnInfo","title":"GetVehicleSpawnInfo","description":"Gets the vehicle spawn location and colours.","source":"@site/docs/scripting/functions/GetVehicleSpawnInfo.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleSpawnInfo","permalink":"/hu/docs/scripting/functions/GetVehicleSpawnInfo","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetVehicleSpawnInfo.md","tags":[{"inline":true,"label":"vehicle","permalink":"/hu/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleSpawnInfo","sidebar_label":"GetVehicleSpawnInfo","description":"Gets the vehicle spawn location and colours.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleSirenState","permalink":"/hu/docs/scripting/functions/GetVehicleSirenState"},"next":{"title":"GetVehicleTower","permalink":"/hu/docs/scripting/functions/GetVehicleTower"}}');var s=t(74848),r=t(28453);const o={title:"GetVehicleSpawnInfo",sidebar_label:"GetVehicleSpawnInfo",description:"Gets the vehicle spawn location and colours.",tags:["vehicle"]},c=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Gets the vehicle spawn location and colours."}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vehicleid"}),(0,s.jsx)(n.td,{children:"The ID of the vehicle."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["&Float",":spawnX"]}),(0,s.jsx)(n.td,{children:"A float variable in which to store the spawnX coordinate, passed by reference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["&Float",":spawnY"]}),(0,s.jsx)(n.td,{children:"A float variable in which to store the spawnY coordinate, passed by reference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["&Float",":spawnZ"]}),(0,s.jsx)(n.td,{children:"A float variable in which to store the spawnZ coordinate, passed by reference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["&Float",":angle"]}),(0,s.jsx)(n.td,{children:"A float variable in which to store the angle coordinate, passed by reference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"&colour1"}),(0,s.jsx)(n.td,{children:"A variable in which to store the colour1 value, passed by reference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"&colour2"}),(0,s.jsx)(n.td,{children:"A variable in which to store the colour2 value, passed by reference."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);\n\n    new \n        Float:spawnX,\n        Float:spawnY,\n        Float:spawnZ,\n        Float:angle,\n        colour1,\n        colour2;\n\n    GetVehicleSpawnInfo(vehicleid, spawnX, spawnY, spawnZ, angle, colour1, colour2);\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"SetVehicleSpawnInfo",children:"SetVehicleSpawnInfo"}),": Adjusts vehicle model, spawn location, colours, respawn delay and interior."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);