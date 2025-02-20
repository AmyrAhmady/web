"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[32735],{28453:(e,r,i)=>{i.d(r,{R:()=>a,x:()=>s});var l=i(96540);const t={},n=l.createContext(t);function a(e){const r=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),l.createElement(n.Provider,{value:r},e.children)}},35315:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});const l=JSON.parse('{"id":"scripting/functions/CreatePlayerPickup","title":"CreatePlayerPickup","description":"Creates a pickup which will be visible to only one player.","source":"@site/docs/scripting/functions/CreatePlayerPickup.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreatePlayerPickup","permalink":"/ta/docs/scripting/functions/CreatePlayerPickup","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/CreatePlayerPickup.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"},{"inline":true,"label":"pickup","permalink":"/ta/docs/tags/pickup"},{"inline":true,"label":"playerpickup","permalink":"/ta/docs/tags/playerpickup"}],"version":"current","frontMatter":{"title":"CreatePlayerPickup","sidebar_label":"CreatePlayerPickup","description":"Creates a pickup which will be visible to only one player.","tags":["player","pickup","playerpickup"]},"sidebar":"docsSidebar","previous":{"title":"CreatePlayerObject","permalink":"/ta/docs/scripting/functions/CreatePlayerObject"},"next":{"title":"CreatePlayerTextDraw","permalink":"/ta/docs/scripting/functions/CreatePlayerTextDraw"}}');var t=i(74848),n=i(28453);const a={title:"CreatePlayerPickup",sidebar_label:"CreatePlayerPickup",description:"Creates a pickup which will be visible to only one player.",tags:["player","pickup","playerpickup"]},s=void 0,c={},p=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function o(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{VersionWarn:i}=r;return i||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{version:"omp v1.1.0.2612"}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:"Creates a pickup which will be visible to only one player."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"playerid"}),(0,t.jsx)(r.td,{children:"The ID of the player to create the pickup for."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../resources/pickupids",children:"model"})}),(0,t.jsx)(r.td,{children:"The model of the pickup."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"../resources/pickuptypes",children:"type"})}),(0,t.jsx)(r.td,{children:"The pickup type. Determines how the pickup responds when picked up."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["Float",":x"]}),(0,t.jsx)(r.td,{children:"The X coordinate to create the pickup at."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["Float",":y"]}),(0,t.jsx)(r.td,{children:"The Y coordinate to create the pickup at."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["Float",":z"]}),(0,t.jsx)(r.td,{children:"The Z coordinate to create the pickup at."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"virtualWorld"}),(0,t.jsx)(r.td,{children:"The virtual world ID of the pickup. Use -1 to make the pickup show in all worlds."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:["The ID of the created player-pickup, ",(0,t.jsx)(r.strong,{children:"-1"})," on failure (pickup max limit)."]}),"\n",(0,t.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:"new PlayerPickupArmour[MAX_PLAYERS]; // Create a variable to store the player-pickup ID in\n\npublic OnPlayerConnect(playerid)\n{\n    PlayerPickupArmour[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);\n    // Create an armour pickup and store the ID in 'PlayerPickupArmour[playerid]'\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"The only type of pickup that can be picked up from inside a vehicle is 14 (except for special pickups such as bribes)."}),"\n",(0,t.jsx)(r.li,{children:"Pickups are shown to, and can be picked up by all players."}),"\n",(0,t.jsx)(r.li,{children:"It is possible that if DestroyPlayerPickup() is used when a pickup is picked up, more than one player can pick up the pickup, due to lag. This can be circumvented through the use of variables."}),"\n",(0,t.jsx)(r.li,{children:"Certain pickup types come with 'automatic responses', for example using an M4 model in the pickup will automatically give the player the weapon and some ammo."}),"\n",(0,t.jsx)(r.li,{children:"For fully scripted pickups, type 1 should be used."}),"\n"]})}),"\n",(0,t.jsxs)(r.admonition,{type:"warning",children:[(0,t.jsx)(r.p,{children:"Known Bug(s):"}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Pickups that have a X or Y lower than -4096.0 or bigger than 4096.0 won't show up and won't trigger OnPlayerPickUpPlayerPickup either."}),"\n"]})]}),"\n",(0,t.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"CreatePlayerPickup",children:"CreatePlayerPickup"}),": Creates a pickup which will be visible to only one player."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"DestroyPlayerPickup",children:"DestroyPlayerPickup"}),": Destroy a player-pickup."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"IsValidPlayerPickup",children:"IsValidPlayerPickup"}),": Checks if a player-pickup is valid."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"IsPlayerPickupStreamedIn",children:"IsPlayerPickupStreamedIn"}),": Checks if a player-pickup is streamed in for the player."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"SetPlayerPickupPos",children:"SetPlayerPickupPos"}),": Sets the position of a player-pickup."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"GetPlayerPickupPos",children:"GetPlayerPickupPos"}),": Gets the coordinates of a player-pickup."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"SetPlayerPickupModel",children:"SetPlayerPickupModel"}),": Sets the model of a player-pickup."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"GetPlayerPickupModel",children:"GetPlayerPickupModel"}),": Gets the model ID of a player-pickup."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"SetPlayerPickupType",children:"SetPlayerPickupType"}),": Sets the type of a player-pickup."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"GetPlayerPickupType",children:"GetPlayerPickupType"}),": Gets the type of a player-pickup."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"SetPlayerPickupVirtualWorld",children:"SetPlayerPickupVirtualWorld"}),": Sets the virtual world ID of a player-pickup."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"GetPlayerPickupVirtualWorld",children:"GetPlayerPickupVirtualWorld"}),": Gets the virtual world ID of a player-pickup."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,t.jsx)(r.p,{children:"The following callbacks might be useful, as they're related to this function."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"../callbacks/OnPlayerPickUpPlayerPickup",children:"OnPlayerPickUpPlayerPickup"}),": Called when a player picks up a player-pickup."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"../callbacks/OnPlayerPickupStreamIn",children:"OnPlayerPickupStreamIn"}),": Called when a player-pickup enters the visual range of the player."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"../callbacks/OnPlayerPickupStreamOut",children:"OnPlayerPickupStreamOut"}),": Called when a player-pickup leaves the visual range of the player."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"../resources/pickupids",children:"Pickup IDs"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"../resources/pickuptypes",children:"Pickup Types"})}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}}}]);