"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[36861],{5631:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"scripting/functions/GetPlayerPickupPos","title":"GetPlayerPickupPos","description":"Gets the coordinates of a player-pickup.","source":"@site/docs/scripting/functions/GetPlayerPickupPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerPickupPos","permalink":"/ar/docs/scripting/functions/GetPlayerPickupPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerPickupPos.md","tags":[{"inline":true,"label":"player","permalink":"/ar/docs/tags/player"},{"inline":true,"label":"pickup","permalink":"/ar/docs/tags/pickup"},{"inline":true,"label":"playerpickup","permalink":"/ar/docs/tags/playerpickup"}],"version":"current","frontMatter":{"title":"GetPlayerPickupPos","sidebar_label":"GetPlayerPickupPos","description":"Gets the coordinates of a player-pickup.","tags":["player","pickup","playerpickup"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerPickupModel","permalink":"/ar/docs/scripting/functions/GetPlayerPickupModel"},"next":{"title":"GetPlayerPickupType","permalink":"/ar/docs/scripting/functions/GetPlayerPickupType"}}');var l=i(74848),n=i(28453);const s={title:"GetPlayerPickupPos",sidebar_label:"GetPlayerPickupPos",description:"Gets the coordinates of a player-pickup.",tags:["player","pickup","playerpickup"]},a=void 0,c={},p=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{VersionWarn:i}=r;return i||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(r.p,{children:"Gets the coordinates of a player-pickup."}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"Name"}),(0,l.jsx)(r.th,{children:"Description"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"playerid"}),(0,l.jsx)(r.td,{children:"The ID of the player."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"pickupid"}),(0,l.jsx)(r.td,{children:"The ID of the player-pickup to get the position of."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["&Float",":x"]}),(0,l.jsx)(r.td,{children:"A float variable in which to store the x coordinate, passed by reference."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["&Float",":y"]}),(0,l.jsx)(r.td,{children:"A float variable in which to store the y coordinate, passed by reference."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["&Float",":z"]}),(0,l.jsx)(r.td,{children:"A float variable in which to store the z coordinate, passed by reference."})]})]})]}),"\n",(0,l.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(r.p,{children:"This function does not return a specific value."}),"\n",(0,l.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-c",children:"new PlayerPickup[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1239, 1, 2010.0979, 1222.0642, 10.8206, -1);\n\n    new\n        Float:x,\n        Float:y,\n        Float:z;\n\n    GetPickupPos(g_Pickup, x, y, z);\n    // x = 2010.0979\n    // y = 1222.0642\n    // z = 10.8206\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"CreatePlayerPickup",children:"CreatePlayerPickup"}),": Creates a pickup which will be visible to only one player."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"DestroyPlayerPickup",children:"DestroyPlayerPickup"}),": Destroy a player-pickup."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"IsValidPlayerPickup",children:"IsValidPlayerPickup"}),": Checks if a player-pickup is valid."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"IsPlayerPickupStreamedIn",children:"IsPlayerPickupStreamedIn"}),": Checks if a player-pickup is streamed in for the player."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetPlayerPickupPos",children:"SetPlayerPickupPos"}),": Sets the position of a player-pickup."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetPlayerPickupModel",children:"SetPlayerPickupModel"}),": Sets the model of a player-pickup."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"GetPlayerPickupModel",children:"GetPlayerPickupModel"}),": Gets the model ID of a player-pickup."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetPlayerPickupType",children:"SetPlayerPickupType"}),": Sets the type of a player-pickup."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"GetPlayerPickupType",children:"GetPlayerPickupType"}),": Gets the type of a player-pickup."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetPlayerPickupVirtualWorld",children:"SetPlayerPickupVirtualWorld"}),": Sets the virtual world ID of a player-pickup."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"GetPlayerPickupVirtualWorld",children:"GetPlayerPickupVirtualWorld"}),": Gets the virtual world ID of a player-pickup."]}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>s,x:()=>a});var t=i(96540);const l={},n=t.createContext(l);function s(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);