"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[42351],{28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(96540);const i={},l=n.createContext(i);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(l.Provider,{value:t},e.children)}},85919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/GetPlayerVirtualWorld","title":"GetPlayerVirtualWorld","description":"Retrieves the current virtual world the player is in.","source":"@site/docs/scripting/functions/GetPlayerVirtualWorld.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerVirtualWorld","permalink":"/pl/docs/scripting/functions/GetPlayerVirtualWorld","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerVirtualWorld.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerVirtualWorld","sidebar_label":"GetPlayerVirtualWorld","description":"Retrieves the current virtual world the player is in.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerVersion","permalink":"/pl/docs/scripting/functions/GetPlayerVersion"},"next":{"title":"GetPlayerWantedLevel","permalink":"/pl/docs/scripting/functions/GetPlayerWantedLevel"}}');var i=r(74848),l=r(28453);const s={title:"GetPlayerVirtualWorld",sidebar_label:"GetPlayerVirtualWorld",description:"Retrieves the current virtual world the player is in.",tags:["player"]},a=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Retrieves the current virtual world the player is in."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player to get the virtual world of."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"The ID of the virtual world the player is currently in."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/world", true))\n    {\n        new string[32];\n        format(string, sizeof(string), "Your virtual world: %i", GetPlayerVirtualWorld(playerid));\n        SendClientMessage(playerid, 0xFFFFFFFF, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Virtual worlds are not the same as interiors."})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerVirtualWorld",children:"SetPlayerVirtualWorld"}),": Set the virtual world of a player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetVehicleVirtualWorld",children:"GetVehicleVirtualWorld"}),": Check what virtual world a vehicle is in."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerInterior",children:"GetPlayerInterior"}),": Get the current interior of a player."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);