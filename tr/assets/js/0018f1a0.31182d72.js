"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[53372],{3645:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/functions/GetVehicleDriver","title":"GetVehicleDriver","description":"Get the playerid of the person driving the vehicle.","source":"@site/docs/scripting/functions/GetVehicleDriver.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleDriver","permalink":"/tr/docs/scripting/functions/GetVehicleDriver","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetVehicleDriver.md","tags":[{"inline":true,"label":"vehicle","permalink":"/tr/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleDriver","sidebar_label":"GetVehicleDriver","description":"Get the playerid of the person driving the vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleDistanceFromPoint","permalink":"/tr/docs/scripting/functions/GetVehicleDistanceFromPoint"},"next":{"title":"GetVehicleHealth","permalink":"/tr/docs/scripting/functions/GetVehicleHealth"}}');var n=t(74848),s=t(28453);const l={title:"GetVehicleDriver",sidebar_label:"GetVehicleDriver",description:"Get the playerid of the person driving the vehicle.",tags:["vehicle"]},c=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(i.p,{children:"Get the playerid of the person driving the vehicle."}),"\n",(0,n.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Name"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"vehicleid"}),(0,n.jsx)(i.td,{children:"The ID of the vehicle to get the driver of."})]})})]}),"\n",(0,n.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(i.p,{children:"Returns the driver ID (player ID)."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"INVALID_PLAYER_ID"})," - The vehicle has no driver."]}),"\n",(0,n.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:'public OnPlayerExitVehicle(playerid, vehicleid)\n{\n    new driverid = GetVehicleDriver(vehicleid);\n    if (driverid != INVALID_PLAYER_ID)\n    {\n        SendClientMessage(driverid, -1, "Someone is exiting your vehicle.");\n    }\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"GetVehicleLastDriver",children:"GetVehicleLastDriver"}),": Get the last driver of a vehicle."]}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>l,x:()=>c});var r=t(96540);const n={},s=r.createContext(n);function l(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);