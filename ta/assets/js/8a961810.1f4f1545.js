"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[94271],{1705:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"scripting/functions/DisableRemoteVehicleCollisions","title":"DisableRemoteVehicleCollisions","description":"Disables collisions between occupied vehicles for a player.","source":"@site/docs/scripting/functions/DisableRemoteVehicleCollisions.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DisableRemoteVehicleCollisions","permalink":"/ta/docs/scripting/functions/DisableRemoteVehicleCollisions","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/DisableRemoteVehicleCollisions.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ta/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"DisableRemoteVehicleCollisions","sidebar_label":"DisableRemoteVehicleCollisions","description":"Disables collisions between occupied vehicles for a player.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"DisablePlayerRaceCheckpoint","permalink":"/ta/docs/scripting/functions/DisablePlayerRaceCheckpoint"},"next":{"title":"EditAttachedObject","permalink":"/ta/docs/scripting/functions/EditAttachedObject"}}');var l=s(74848),t=s(28453);const o={title:"DisableRemoteVehicleCollisions",sidebar_label:"DisableRemoteVehicleCollisions",description:"Disables collisions between occupied vehicles for a player.",tags:["vehicle"]},r=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const i={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components},{VersionWarn:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s,{version:"SA-MP 0.3.7"}),"\n",(0,l.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(i.p,{children:"Disables collisions between occupied vehicles for a player."}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Name"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"playerid"}),(0,l.jsx)(i.td,{children:"The ID of the player for whom you want to disable collisions."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["bool",":disable"]}),(0,l.jsx)(i.td,{children:"'true' to disable collisions, 'false' to enable collisions."})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.strong,{children:"false"})," - The function failed to execute. The player specified does not exist."]}),"\n",(0,l.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-c",children:'new bool:gPlayerVehicleCollision[MAX_PLAYERS];\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/collision", true))\n    {\n        new string[64];\n\n        format(string, sizeof(string), "Vehicle collision for you is now \'%s\'", (gPlayerVehicleCollision[playerid]\xa0== false)\xa0? ("Disabled")\xa0: ("Enabled"));\n        SendClientMessage(playerid, 0xFFFFFFFF, string);\n\n        gPlayerVehicleCollision[playerid] = !gPlayerVehicleCollision[playerid];\n\n        DisableRemoteVehicleCollisions(playerid, gPlayerVehicleCollision[playerid]);\n        return 1;\n    }\n    return 0;\n}\n'})})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>o,x:()=>r});var n=s(96540);const l={},t=n.createContext(l);function o(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);