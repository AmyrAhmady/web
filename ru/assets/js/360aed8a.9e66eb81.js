"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[16699],{26348:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"scripting/functions/IsPlayerInVehicle","title":"IsPlayerInVehicle","description":"Checks if a player is in a specific vehicle.","source":"@site/docs/scripting/functions/IsPlayerInVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerInVehicle","permalink":"/ru/docs/scripting/functions/IsPlayerInVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsPlayerInVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/ru/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/ru/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"IsPlayerInVehicle","sidebar_label":"IsPlayerInVehicle","description":"Checks if a player is in a specific vehicle.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerInRangeOfPoint","permalink":"/ru/docs/scripting/functions/IsPlayerInRangeOfPoint"},"next":{"title":"IsPlayerNPC","permalink":"/ru/docs/scripting/functions/IsPlayerNPC"}}');var r=i(74848),l=i(28453);const s={title:"IsPlayerInVehicle",sidebar_label:"IsPlayerInVehicle",description:"Checks if a player is in a specific vehicle.",tags:["player","vehicle"]},c=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Checks if a player is in a specific vehicle."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"ID of the player."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vehicleid"}),(0,r.jsx)(n.td,{children:"ID of the vehicle. Note: NOT the modelid!"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"true"})," - Player IS in the vehicle."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"false"})," - Player is NOT in the vehicle."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new gSpecialCar;\n\npublic OnGameModeInit()\n{\n    gSpecialCar = AddStaticVehicle(411, 0.0, 0.0, 5.0, 0.0, -1, -1);\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/gSpecialCar", true) == 0)\n    {\n        if (IsPlayerInVehicle(playerid, gSpecialCar))\n        {\n            SendClientMessage(playerid, -1, "You\'re in the special car!");\n        }\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"IsPlayerInAnyVehicle",children:"IsPlayerInAnyVehicle"}),": Check if a player is in any vehicle."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": Check what seat a player is in."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var t=i(96540);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);