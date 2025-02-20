"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[54289],{28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var i=t(96540);const l={},s=i.createContext(l);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(s.Provider,{value:n},e.children)}},96662:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scripting/functions/SetVehicleZAngle","title":"SetVehicleZAngle","description":"Set the Z rotation (yaw) of a vehicle.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/SetVehicleZAngle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehicleZAngle","permalink":"/zh-cn/docs/scripting/functions/SetVehicleZAngle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetVehicleZAngle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/zh-cn/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"SetVehicleZAngle","sidebar_label":"SetVehicleZAngle","description":"Set the Z rotation (yaw) of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleVirtualWorld","permalink":"/zh-cn/docs/scripting/functions/SetVehicleVirtualWorld"},"next":{"title":"SetWeather","permalink":"/zh-cn/docs/scripting/functions/SetWeather"}}');var l=t(74848),s=t(28453);const c={title:"SetVehicleZAngle",sidebar_label:"SetVehicleZAngle",description:"Set the Z rotation (yaw) of a vehicle.",tags:["vehicle"]},r=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Set the Z rotation (yaw) of a vehicle."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vehicleid"}),(0,l.jsx)(n.td,{children:"The ID of the vehicle to set the rotation of."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":angle"]}),(0,l.jsx)(n.td,{children:"The Z angle to set."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"false"})," - The function failed to execute. The vehicle specified does not exist."]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/flip", true) == 0)\n    {\n        new\n            vehicleid,\n            Float:angle;\n        \n        vehicleid = GetPlayerVehicleID(playerid);\n        GetVehicleZAngle(vehicleid, angle);\n        SetVehicleZAngle(vehicleid, angle);\n        \n        SendClientMessage(playerid, 0xFFFFFFFF, "Your vehicle has been flipped.");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"A vehicle's X and Y (pitch and roll) rotation will be reset when this function is used."}),"\n",(0,l.jsx)(n.li,{children:"The X and Y rotations can not be set."}),"\n",(0,l.jsx)(n.li,{children:"This function does not work on unoccupied vehicles (It is believed to be a GTA limitation)."}),"\n"]})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetVehicleZAngle",children:"GetVehicleZAngle"}),": Check the current angle of a vehicle."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"SetVehiclePos",children:"SetVehiclePos"}),": Set the position of a vehicle."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}}}]);