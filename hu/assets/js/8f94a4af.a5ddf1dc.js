"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[63544],{28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var s=i(96540);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}},95044:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"scripting/functions/IsPlayerInAnyVehicle","title":"IsPlayerInAnyVehicle","description":"Check if a player is inside any vehicle (as a driver or passenger).","source":"@site/docs/scripting/functions/IsPlayerInAnyVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerInAnyVehicle","permalink":"/hu/docs/scripting/functions/IsPlayerInAnyVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsPlayerInAnyVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/hu/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/hu/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"IsPlayerInAnyVehicle","sidebar_label":"IsPlayerInAnyVehicle","description":"Check if a player is inside any vehicle (as a driver or passenger).","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerGangZoneVisible","permalink":"/hu/docs/scripting/functions/IsPlayerGangZoneVisible"},"next":{"title":"IsPlayerInCheckpoint","permalink":"/hu/docs/scripting/functions/IsPlayerInCheckpoint"}}');var r=i(74848),t=i(28453);const l={title:"IsPlayerInAnyVehicle",sidebar_label:"IsPlayerInAnyVehicle",description:"Check if a player is inside any vehicle (as a driver or passenger).",tags:["player","vehicle"]},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Check if a player is inside any vehicle (as a driver or passenger)."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player to check."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"true"})," - The player is in a vehicle."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"false"})," - The player is not in a vehicle."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/invehicle", true) == 0)\n    {\n        if (IsPlayerInAnyVehicle(playerid))\n        {\n            SendClientMessage(playerid, 0x00FF00FF, "You\'re in a vehicle.");\n        }\n        else\n        {\n            SendClientMessage(playerid, 0xFF0000FF, "You\'re not in any vehicle.");\n        }\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"IsPlayerInVehicle",children:"IsPlayerInVehicle"}),": Check if a player is in a certain vehicle."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": Check what seat a player is in."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}}}]);