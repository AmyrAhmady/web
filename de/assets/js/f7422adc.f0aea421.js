"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[27608],{28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var i=n(96540);const s={},l=i.createContext(s);function c(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(l.Provider,{value:t},e.children)}},92923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"scripting/functions/GetVehiclePos","title":"GetVehiclePos","description":"Gets the position of a vehicle.","source":"@site/docs/scripting/functions/GetVehiclePos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehiclePos","permalink":"/de/docs/scripting/functions/GetVehiclePos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetVehiclePos.md","tags":[{"inline":true,"label":"vehicle","permalink":"/de/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehiclePos","sidebar_label":"GetVehiclePos","description":"Gets the position of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehiclePoolSize","permalink":"/de/docs/scripting/functions/GetVehiclePoolSize"},"next":{"title":"GetVehicleRespawnDelay","permalink":"/de/docs/scripting/functions/GetVehicleRespawnDelay"}}');var s=n(74848),l=n(28453);const c={title:"GetVehiclePos",sidebar_label:"GetVehiclePos",description:"Gets the position of a vehicle.",tags:["vehicle"]},r=void 0,o={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Gets the position of a vehicle."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vehicleid"}),(0,s.jsx)(t.td,{children:"The ID of the vehicle to get the position of."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":x"]}),(0,s.jsx)(t.td,{children:"A float variable in which to store the X coordinate, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":y"]}),(0,s.jsx)(t.td,{children:"A float variable in which to store the Y coordinate, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":z"]}),(0,s.jsx)(t.td,{children:"A float variable in which to store the Z coordinate, passed by reference."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"false"})," - The function failed to execute. The vehicle specified does not exist."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n     if (strcmp(cmdtext, "/vehpos", true) == 0)\n     {\n          new vehicleid = GetPlayerVehicleID(playerid);\n\n          // if vehicleid is equal to 0\n          if (vehicleid == 0)\n          {\n               return SendClientMessage(playerid, -1, "You are not in any vehicle!");\n          }\n\n          new\n               Float:vehX, Float:vehY, Float:vehZ,\n               string[128];\n\n          GetVehiclePos(vehicleid, vehX, vehY, vehZ);\n          format(string, sizeof(string), "The current vehicle positions are: %f, %f, %f", vehX, vehY, vehZ);\n          SendClientMessage(playerid, 0xFFFFFFFF, string);\n          return 1;\n     }\n\n     return 0;\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetVehicleDistanceFromPoint",children:"GetVehicleDistanceFromPoint"}),": Get the distance between a vehicle and a point."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetVehiclePos",children:"SetVehiclePos"}),": Set the position of a vehicle."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetVehicleZAngle",children:"GetVehicleZAngle"}),": Check the current angle of a vehicle."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetVehicleRotationQuat",children:"GetVehicleRotationQuat"}),": Get the rotation quaternion of a vehicle."]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);