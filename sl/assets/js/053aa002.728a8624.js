"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[57579],{28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>c});var n=i(96540);const r={},s=n.createContext(r);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:t},e.children)}},90999:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"scripting/functions/GetVehicleLastDriver","title":"GetVehicleLastDriver","description":"Get the last driver of a vehicle.","source":"@site/docs/scripting/functions/GetVehicleLastDriver.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleLastDriver","permalink":"/sl/docs/scripting/functions/GetVehicleLastDriver","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetVehicleLastDriver.md","tags":[{"inline":true,"label":"vehicle","permalink":"/sl/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleLastDriver","sidebar_label":"GetVehicleLastDriver","description":"Get the last driver of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleLandingGearState","permalink":"/sl/docs/scripting/functions/GetVehicleLandingGearState"},"next":{"title":"GetVehicleMatrix","permalink":"/sl/docs/scripting/functions/GetVehicleMatrix"}}');var r=i(74848),s=i(28453);const l={title:"GetVehicleLastDriver",sidebar_label:"GetVehicleLastDriver",description:"Get the last driver of a vehicle.",tags:["vehicle"]},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Get the last driver of a vehicle."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vehicleid"}),(0,r.jsx)(t.td,{children:"The ID of the vehicle."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,r.jsx)(t.p,{children:"Returns the last driver ID (player ID)."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"INVALID_PLAYER_ID"})," - The vehicle has no last driver."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'new g_Vehicle;\n\npublic OnGameModeInit()\n{\n    g_Vehicle = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);\n}\n\npublic OnGameModeExit()\n{\n    new lastDriver = GetVehicleLastDriver(g_Vehicle);\n    if (lastDriver != INVALID_PLAYER_ID)\n    {\n        printf("Vehicle ID %d last driver: %d", g_Vehicle, lastDriver);\n    }\n    else\n    {\n        printf("Vehicle ID %d has no last driver.", g_Vehicle);\n    }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetVehicleDriver",children:"GetVehicleDriver"}),": Get the playerid of the person driving the vehicle."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);