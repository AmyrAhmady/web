"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[19825],{24702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/GetPlayerDistanceFromPoint","title":"GetPlayerDistanceFromPoint","description":"Calculate the distance between a player and a map coordinate.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerDistanceFromPoint.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerDistanceFromPoint","permalink":"/zh-cn/docs/scripting/functions/GetPlayerDistanceFromPoint","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerDistanceFromPoint.md","tags":[{"inline":true,"label":"player","permalink":"/zh-cn/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerDistanceFromPoint","sidebar_label":"GetPlayerDistanceFromPoint","description":"Calculate the distance between a player and a map coordinate.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerDialogID","permalink":"/zh-cn/docs/scripting/functions/GetPlayerDialogID"},"next":{"title":"GetPlayerDrunkLevel","permalink":"/zh-cn/docs/scripting/functions/GetPlayerDrunkLevel"}}');var r=n(74848),a=n(28453);const s={title:"GetPlayerDistanceFromPoint",sidebar_label:"GetPlayerDistanceFromPoint",description:"Calculate the distance between a player and a map coordinate.",tags:["player"]},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Calculate the distance between a player and a map coordinate."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to calculate the distance from."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":x"]}),(0,r.jsx)(t.td,{children:"The X map coordinate."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":y"]}),(0,r.jsx)(t.td,{children:"The Y map coordinate."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":z"]}),(0,r.jsx)(t.td,{children:"The Z map coordinate."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"The distance between the player and the point as a float."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"/* when the player types '/vend' into the chat box, they'll see this.*/\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, \"/vend\", true) == 0)\n    {\n        new\n            Float:distance = GetPlayerDistanceFromPoint(playerid, 237.9, 115.6, 1010.2),\n            string[64];\n\n        format(string, sizeof(string), \"You're %0.2f meters away from the vending machine.\", distance);\n        SendClientMessage(playerid, 0xA9C4E4FF, string);\n        return 1;\n    }\n    return 0;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"IsPlayerInRangeOfPoint",children:"IsPlayerInRangeOfPoint"}),": Check whether a player is in range of a point."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetVehicleDistanceFromPoint",children:"GetVehicleDistanceFromPoint"}),": Get the distance between a vehicle and a point."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerPos",children:"GetPlayerPos"}),": Get a player's position."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var i=n(96540);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);