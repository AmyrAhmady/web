"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[33723],{28453:(e,i,r)=>{r.d(i,{R:()=>s,x:()=>c});var t=r(96540);const l={},n=t.createContext(l);function s(e){const i=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(n.Provider,{value:i},e.children)}},44753:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"scripting/functions/SetPlayerPickupPos","title":"SetPlayerPickupPos","description":"Sets the position of a player-pickup.","source":"@site/docs/scripting/functions/SetPlayerPickupPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerPickupPos","permalink":"/hu/docs/scripting/functions/SetPlayerPickupPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerPickupPos.md","tags":[{"inline":true,"label":"player","permalink":"/hu/docs/tags/player"},{"inline":true,"label":"pickup","permalink":"/hu/docs/tags/pickup"},{"inline":true,"label":"playerpickup","permalink":"/hu/docs/tags/playerpickup"}],"version":"current","frontMatter":{"title":"SetPlayerPickupPos","sidebar_label":"SetPlayerPickupPos","description":"Sets the position of a player-pickup.","tags":["player","pickup","playerpickup"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerPickupModel","permalink":"/hu/docs/scripting/functions/SetPlayerPickupModel"},"next":{"title":"SetPlayerPickupType","permalink":"/hu/docs/scripting/functions/SetPlayerPickupType"}}');var l=r(74848),n=r(28453);const s={title:"SetPlayerPickupPos",sidebar_label:"SetPlayerPickupPos",description:"Sets the position of a player-pickup.",tags:["player","pickup","playerpickup"]},c=void 0,a={},p=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{VersionWarn:r}=i;return r||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(i.p,{children:"Sets the position of a player-pickup."}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Name"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"playerid"}),(0,l.jsx)(i.td,{children:"The ID of the player."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"pickupid"}),(0,l.jsx)(i.td,{children:"The ID of the player-pickup."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["Float",":x"]}),(0,l.jsx)(i.td,{children:"The x coordinate to set the pickup at."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["Float",":y"]}),(0,l.jsx)(i.td,{children:"The y coordinate to set the pickup at."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["Float",":z"]}),(0,l.jsx)(i.td,{children:"The z coordinate to set the pickup at."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["bool",":update"," = true"]}),(0,l.jsx)(i.td,{children:"Update pickup for player. (true/false)"})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(i.p,{children:["This function always returns ",(0,l.jsx)(i.strong,{children:"true"}),"."]}),"\n",(0,l.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-c",children:"new PlayerPickup[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);\n    \n    SetPlayerPickupPos(playerid, PlayerPickup[playerid], 1958.5488, 1344.9137, 15.3613);\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"CreatePlayerPickup",children:"CreatePlayerPickup"}),": Creates a pickup which will be visible to only one player."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"DestroyPlayerPickup",children:"DestroyPlayerPickup"}),": Destroy a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"IsValidPlayerPickup",children:"IsValidPlayerPickup"}),": Checks if a player-pickup is valid."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"IsPlayerPickupStreamedIn",children:"IsPlayerPickupStreamedIn"}),": Checks if a player-pickup is streamed in for the player."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"GetPlayerPickupPos",children:"GetPlayerPickupPos"}),": Gets the coordinates of a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"SetPlayerPickupModel",children:"SetPlayerPickupModel"}),": Sets the model of a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"GetPlayerPickupModel",children:"GetPlayerPickupModel"}),": Gets the model ID of a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"SetPlayerPickupType",children:"SetPlayerPickupType"}),": Sets the type of a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"GetPlayerPickupType",children:"GetPlayerPickupType"}),": Gets the type of a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"SetPlayerPickupVirtualWorld",children:"SetPlayerPickupVirtualWorld"}),": Sets the virtual world ID of a player-pickup."]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"GetPlayerPickupVirtualWorld",children:"GetPlayerPickupVirtualWorld"}),": Gets the virtual world ID of a player-pickup."]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}}}]);