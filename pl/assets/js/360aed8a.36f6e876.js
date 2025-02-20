"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[16699],{26348:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"scripting/functions/IsPlayerInVehicle","title":"IsPlayerInVehicle","description":"Checks if a player is in a specific vehicle.","source":"@site/docs/scripting/functions/IsPlayerInVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerInVehicle","permalink":"/pl/docs/scripting/functions/IsPlayerInVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsPlayerInVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/pl/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"IsPlayerInVehicle","sidebar_label":"IsPlayerInVehicle","description":"Checks if a player is in a specific vehicle.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerInRangeOfPoint","permalink":"/pl/docs/scripting/functions/IsPlayerInRangeOfPoint"},"next":{"title":"IsPlayerNPC","permalink":"/pl/docs/scripting/functions/IsPlayerNPC"}}');var t=i(74848),s=i(28453);const r={title:"IsPlayerInVehicle",sidebar_label:"IsPlayerInVehicle",description:"Checks if a player is in a specific vehicle.",tags:["player","vehicle"]},c=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Checks if a player is in a specific vehicle."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"ID of the player."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vehicleid"}),(0,t.jsx)(n.td,{children:"ID of the vehicle. Note: NOT the modelid!"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"true"})," - Player IS in the vehicle."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"false"})," - Player is NOT in the vehicle."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'new gSpecialCar;\n\npublic OnGameModeInit()\n{\n    gSpecialCar = AddStaticVehicle(411, 0.0, 0.0, 5.0, 0.0, -1, -1);\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/gSpecialCar", true) == 0)\n    {\n        if (IsPlayerInVehicle(playerid, gSpecialCar))\n        {\n            SendClientMessage(playerid, -1, "You\'re in the special car!");\n        }\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"IsPlayerInAnyVehicle",children:"IsPlayerInAnyVehicle"}),": Check if a player is in any vehicle."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": Check what seat a player is in."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var l=i(96540);const t={},s=l.createContext(t);function r(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);