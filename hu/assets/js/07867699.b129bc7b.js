"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[56855],{10831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"scripting/functions/SetPlayerVirtualWorld","title":"SetPlayerVirtualWorld","description":"Set the virtual world of a player.","source":"@site/docs/scripting/functions/SetPlayerVirtualWorld.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerVirtualWorld","permalink":"/hu/docs/scripting/functions/SetPlayerVirtualWorld","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerVirtualWorld.md","tags":[{"inline":true,"label":"player","permalink":"/hu/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerVirtualWorld","sidebar_label":"SetPlayerVirtualWorld","description":"Set the virtual world of a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerVelocity","permalink":"/hu/docs/scripting/functions/SetPlayerVelocity"},"next":{"title":"SetPlayerWantedLevel","permalink":"/hu/docs/scripting/functions/SetPlayerWantedLevel"}}');var n=r(74848),i=r(28453);const s={title:"SetPlayerVirtualWorld",sidebar_label:"SetPlayerVirtualWorld",description:"Set the virtual world of a player.",tags:["player"]},a=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Set the virtual world of a player. They can only see other players or vehicles that are in that same world."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player you want to set the virtual world of."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"virtualWorld"}),(0,n.jsx)(t.td,{children:"The virtual world ID to put the player in."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means the player is not connected."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/world3", true) == 0)\n    {\n        SetPlayerVirtualWorld(playerid, 3);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"The default virtual world is 0."})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerVirtualWorld",children:"GetPlayerVirtualWorld"}),": Check what virtual world a player is in."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetVehicleVirtualWorld",children:"SetVehicleVirtualWorld"}),": Set the virtual world of a vehicle."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var l=r(96540);const n={},i=l.createContext(n);function s(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);