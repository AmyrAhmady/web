"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[24686],{7851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"scripting/functions/SetVehicleAngularVelocity","title":"SetVehicleAngularVelocity","description":"Sets the angular X, Y and Z velocity of a vehicle.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/SetVehicleAngularVelocity.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehicleAngularVelocity","permalink":"/zh-cn/docs/scripting/functions/SetVehicleAngularVelocity","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetVehicleAngularVelocity.md","tags":[{"inline":true,"label":"vehicle","permalink":"/zh-cn/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"SetVehicleAngularVelocity","sidebar_label":"SetVehicleAngularVelocity","description":"Sets the angular X, Y and Z velocity of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"SetTimerEx","permalink":"/zh-cn/docs/scripting/functions/SetTimerEx"},"next":{"title":"SetVehicleBeenOccupied","permalink":"/zh-cn/docs/scripting/functions/SetVehicleBeenOccupied"}}');var c=n(74848),l=n(28453);const s={title:"SetVehicleAngularVelocity",sidebar_label:"SetVehicleAngularVelocity",description:"Sets the angular X, Y and Z velocity of a vehicle.",tags:["vehicle"]},r=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.admonition,{type:"info",children:(0,c.jsxs)(t.p,{children:["This function is in ",(0,c.jsx)(t.em,{children:"world"})," space not ",(0,c.jsx)(t.em,{children:"local"})," space. If you want to make local space angular velocity adjustments, you must apply a rotation matrix based on the ",(0,c.jsx)(t.a,{href:"GetVehicleRotationQuat",children:"vehicle rotation quat"}),"."]})}),"\n",(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(t.p,{children:"Sets the angular X, Y and Z velocity of a vehicle"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"vehicleid"}),(0,c.jsx)(t.td,{children:"The ID of the vehicle to set the velocity of."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["Float",":x"]}),(0,c.jsx)(t.td,{children:"The amount of velocity in the angular X direction."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["Float",":y"]}),(0,c.jsx)(t.td,{children:"The amount of velocity in the angular Y direction."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["Float",":z"]}),(0,c.jsx)(t.td,{children:"The amount of velocity in the angular Z direction."})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"false"})," - The function failed to execute. The vehicle does not exist."]}),"\n",(0,c.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp("/spin", cmdtext))\n    {\n        if (IsPlayerInAnyVehicle(playerid))\n        {\n            SetVehicleAngularVelocity(GetPlayerVehicleID(playerid), 0.0, 0.0, 2.0);\n        }\n        return 1;\n    }\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,c.jsx)(t.admonition,{type:"warning",children:(0,c.jsx)(t.p,{children:"This function has no effect on unoccupied vehicles and does not affect trains."})}),"\n",(0,c.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SetVehicleVelocity",children:"SetVehicleVelocity"}),": Set a vehicle's velocity."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"GetVehicleVelocity",children:"GetVehicleVelocity"}),": Get a vehicle's velocity."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(96540);const c={},l=i.createContext(c);function s(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);