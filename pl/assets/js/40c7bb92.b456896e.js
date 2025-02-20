"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[11188],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(96540);const l={},r=i.createContext(l);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:t},e.children)}},62126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/GetPlayerVelocity","title":"GetPlayerVelocity","description":"Get the velocity (speed) of a player on the X, Y and Z axes.","source":"@site/docs/scripting/functions/GetPlayerVelocity.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerVelocity","permalink":"/pl/docs/scripting/functions/GetPlayerVelocity","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerVelocity.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerVelocity","sidebar_label":"GetPlayerVelocity","description":"Get the velocity (speed) of a player on the X, Y and Z axes.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerVehicleSeat","permalink":"/pl/docs/scripting/functions/GetPlayerVehicleSeat"},"next":{"title":"GetPlayerVersion","permalink":"/pl/docs/scripting/functions/GetPlayerVersion"}}');var l=n(74848),r=n(28453);const s={title:"GetPlayerVelocity",sidebar_label:"GetPlayerVelocity",description:"Get the velocity (speed) of a player on the X, Y and Z axes.",tags:["player"]},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Get the velocity (speed) of a player on the X, Y and Z axes."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The player to get the speed from."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["&Float",":x"]}),(0,l.jsx)(t.td,{children:"A float variable in which to store the velocity on the X axis, passed by reference."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["&Float",":y"]}),(0,l.jsx)(t.td,{children:"A float variable in which to store the velocity on the Y axis, passed by reference."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["&Float",":z"]}),(0,l.jsx)(t.td,{children:"A float variable in which to store the velocity on the Z axis, passed by reference."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:"The function itself doesn't return a specific value. The X, Y and Z velocities are stored in the specified variables."}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/velocity", true))\n    {\n        new\n            Float:x, Float:y, Float:z,\n            string[128];\n\n        GetPlayerVelocity(playerid, x, y, z);\n        \n        format(string, sizeof(string), "You are going at a velocity of X: %f, Y: %f, Z: %f", x, y, z);\n        SendClientMessage(playerid, 0xFFFFFFFF, string);\n        return 1;\n    }\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetPlayerVelocity",children:"SetPlayerVelocity"}),": Set a player's velocity."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetVehicleVelocity",children:"SetVehicleVelocity"}),": Set a vehicle's velocity."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetVehicleVelocity",children:"GetVehicleVelocity"}),": Get a vehicle's velocity."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);