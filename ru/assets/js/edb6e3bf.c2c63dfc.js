"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[94976],{28453:(e,r,i)=>{i.d(r,{R:()=>a,x:()=>s});var t=i(96540);const n={},l=t.createContext(n);function a(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(l.Provider,{value:r},e.children)}},70504:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"scripting/functions/DestroyPlayerPickup","title":"DestroyPlayerPickup","description":"Destroys a player-pickup created with CreatePlayerPickup.","source":"@site/docs/scripting/functions/DestroyPlayerPickup.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DestroyPlayerPickup","permalink":"/ru/docs/scripting/functions/DestroyPlayerPickup","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/DestroyPlayerPickup.md","tags":[{"inline":true,"label":"player","permalink":"/ru/docs/tags/player"},{"inline":true,"label":"pickup","permalink":"/ru/docs/tags/pickup"},{"inline":true,"label":"playerpickup","permalink":"/ru/docs/tags/playerpickup"}],"version":"current","frontMatter":{"title":"DestroyPlayerPickup","sidebar_label":"DestroyPlayerPickup","description":"Destroys a player-pickup created with CreatePlayerPickup.","tags":["player","pickup","playerpickup"]},"sidebar":"docsSidebar","previous":{"title":"DestroyPlayerObject","permalink":"/ru/docs/scripting/functions/DestroyPlayerObject"},"next":{"title":"DestroyVehicle","permalink":"/ru/docs/scripting/functions/DestroyVehicle"}}');var n=i(74848),l=i(28453);const a={title:"DestroyPlayerPickup",sidebar_label:"DestroyPlayerPickup",description:"Destroys a player-pickup created with CreatePlayerPickup.",tags:["player","pickup","playerpickup"]},s=void 0,c={},p=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{VersionWarn:i}=r;return i||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["Destroys a player-pickup created with ",(0,n.jsx)(r.a,{href:"CreatePlayerPickup",children:"CreatePlayerPickup"}),"."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"playerid"}),(0,n.jsx)(r.td,{children:"The ID of the player."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pickupid"}),(0,n.jsx)(r.td,{children:"The ID of the player-pickup to destroy (returned by CreatePlayerPickup)."})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:"This function does not return any specific values."}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:"new PlayerPickupArmour[MAX_PLAYERS]; // Create a variable to store the player-pickup ID in\n\npublic OnPlayerConnect(playerid)\n{\n    PlayerPickupArmour[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);\n    // Create an armour pickup and store the ID in 'PlayerPickupArmour[playerid]'\n    return 1;\n}\n\n// Some time later...\nDestroyPlayerPickup(playerid, PlayerPickupArmour[playerid]);\n"})}),"\n",(0,n.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"CreatePlayerPickup",children:"CreatePlayerPickup"}),": Creates a pickup which will be visible to only one player."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"IsValidPlayerPickup",children:"IsValidPlayerPickup"}),": Checks if a player-pickup is valid."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"../callbacks/OnPlayerPickUpPlayerPickup",children:"OnPlayerPickUpPlayerPickup"}),": Called when a player picks up a player-pickup."]}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}}}]);