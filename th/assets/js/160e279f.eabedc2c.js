"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[45067],{4214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"scripting/functions/GetVehicleZAngle","title":"GetVehicleZAngle","description":"Get the rotation of a vehicle on the Z axis (yaw).","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/GetVehicleZAngle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleZAngle","permalink":"/th/docs/scripting/functions/GetVehicleZAngle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetVehicleZAngle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/th/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleZAngle","sidebar_label":"GetVehicleZAngle","description":"Get the rotation of a vehicle on the Z axis (yaw).","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleVirtualWorld","permalink":"/th/docs/scripting/functions/GetVehicleVirtualWorld"},"next":{"title":"GetVehicles","permalink":"/th/docs/scripting/functions/GetVehicles"}}');var l=n(74848),c=n(28453);const r={title:"GetVehicleZAngle",sidebar_label:"GetVehicleZAngle",description:"Get the rotation of a vehicle on the Z axis (yaw).",tags:["vehicle"]},s=void 0,o={},h=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function a(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,l.jsx)(t.p,{children:"Get the rotation of a vehicle on the Z axis (yaw)."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"vehicleid"}),(0,l.jsx)(t.td,{children:"The ID of the vehicle to get the Z angle of."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["&Float",":z_angle"]}),(0,l.jsx)(t.td,{children:"A float variable in which to store the Z rotation, passed by reference."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,l.jsx)(t.p,{children:"1: The function was executed successfully."}),"\n",(0,l.jsx)(t.p,{children:"0: The function failed to execute. This means the vehicle does not exist."}),"\n",(0,l.jsx)(t.p,{children:"The vehicle's rotation is stored in the specified variable."}),"\n",(0,l.jsx)(t.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n     if (strcmp(cmdtext, "/vehrot", true) == 0)\n     {\n          new currentveh;\n          new Float:z_rot;\n          new message[40];\n\n          currentveh = GetPlayerVehicleID(playerid);\n\n          GetVehicleZAngle(currentveh, z_rot);\n\n          format(message, sizeof(message), "The current vehicle rotation is: %.0f", z_rot);\n\n          SendClientMessage(playerid, 0xFFFFFFFF, message);\n\n          return 1;\n     }\n\n     return 0;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"GetVehicleRotationQuat: Get the quaternion rotation of a vehicle."}),"\n",(0,l.jsx)(t.li,{children:"GetVehicleRotation: Get the rotation of a vehicle on the XYZ axis."}),"\n",(0,l.jsx)(t.li,{children:"SetVehicleZAngle: Set the direction of a vehicle."}),"\n",(0,l.jsx)(t.li,{children:"GetVehiclePos: Get the position of a vehicle."}),"\n",(0,l.jsx)(t.li,{children:"GetPlayerFacingAngle: Check where a player is facing."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(96540);const l={},c=i.createContext(l);function r(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);