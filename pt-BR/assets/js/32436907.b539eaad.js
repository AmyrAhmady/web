"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[3143],{28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var i=n(96540);const l={},s=i.createContext(l);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(s.Provider,{value:t},e.children)}},35158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scripting/functions/SetVehicleZAngle","title":"SetVehicleZAngle","description":"Set the Z rotation (yaw) of a vehicle.","source":"@site/docs/scripting/functions/SetVehicleZAngle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehicleZAngle","permalink":"/pt-BR/docs/scripting/functions/SetVehicleZAngle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetVehicleZAngle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/pt-BR/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"SetVehicleZAngle","sidebar_label":"SetVehicleZAngle","description":"Set the Z rotation (yaw) of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleVirtualWorld","permalink":"/pt-BR/docs/scripting/functions/SetVehicleVirtualWorld"},"next":{"title":"SetWeather","permalink":"/pt-BR/docs/scripting/functions/SetWeather"}}');var l=n(74848),s=n(28453);const c={title:"SetVehicleZAngle",sidebar_label:"SetVehicleZAngle",description:"Set the Z rotation (yaw) of a vehicle.",tags:["vehicle"]},r=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Set the Z rotation (yaw) of a vehicle."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"vehicleid"}),(0,l.jsx)(t.td,{children:"The ID of the vehicle to set the rotation of."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":angle"]}),(0,l.jsx)(t.td,{children:"The Z angle to set."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"false"})," - The function failed to execute. The vehicle specified does not exist."]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/flip", true) == 0)\n    {\n        new\n            vehicleid,\n            Float:angle;\n        \n        vehicleid = GetPlayerVehicleID(playerid);\n        GetVehicleZAngle(vehicleid, angle);\n        SetVehicleZAngle(vehicleid, angle);\n        \n        SendClientMessage(playerid, 0xFFFFFFFF, "Your vehicle has been flipped.");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"A vehicle's X and Y (pitch and roll) rotation will be reset when this function is used."}),"\n",(0,l.jsx)(t.li,{children:"The X and Y rotations can not be set."}),"\n",(0,l.jsx)(t.li,{children:"This function does not work on unoccupied vehicles (It is believed to be a GTA limitation)."}),"\n"]})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetVehicleZAngle",children:"GetVehicleZAngle"}),": Check the current angle of a vehicle."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetVehiclePos",children:"SetVehiclePos"}),": Set the position of a vehicle."]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}}}]);