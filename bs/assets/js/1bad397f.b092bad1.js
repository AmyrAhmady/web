"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[17078],{25740:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"scripting/functions/GetPlayerCameraTargetActor","title":"GetPlayerCameraTargetActor","description":"Allows you to retrieve the ID of the actor the player is looking at (in any).","source":"@site/docs/scripting/functions/GetPlayerCameraTargetActor.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerCameraTargetActor","permalink":"/bs/docs/scripting/functions/GetPlayerCameraTargetActor","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerCameraTargetActor.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"},{"inline":true,"label":"camera","permalink":"/bs/docs/tags/camera"},{"inline":true,"label":"actor","permalink":"/bs/docs/tags/actor"}],"version":"current","frontMatter":{"title":"GetPlayerCameraTargetActor","sidebar_label":"GetPlayerCameraTargetActor","description":"Allows you to retrieve the ID of the actor the player is looking at (in any).","tags":["player","camera","actor"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerCameraPos","permalink":"/bs/docs/scripting/functions/GetPlayerCameraPos"},"next":{"title":"GetPlayerCameraTargetObject","permalink":"/bs/docs/scripting/functions/GetPlayerCameraTargetObject"}}');var n=r(74848),i=r(28453);const o={title:"GetPlayerCameraTargetActor",sidebar_label:"GetPlayerCameraTargetActor",description:"Allows you to retrieve the ID of the actor the player is looking at (in any).",tags:["player","camera","actor"]},l=void 0,s={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{version:"SA-MP 0.3.7"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Allows you to retrieve the ID of the actor the player is looking at (in any)."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player to get the target actor of."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"The ID of the actor the player is looking at."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"new bool:ActorHandsup[MAX_ACTORS];\n\npublic OnPlayerConnect(playerid)\n{\n    EnablePlayerCameraTarget(playerid, true);\n    return 1;\n}\n\npublic OnPlayerUpdate(playerid)\n{\n    // Find out what actor (if any) the player is LOOKING at\n    new playerTargetActor = GetPlayerCameraTargetActor(playerid);\n\n    // If they ARE looking at ANY actor\n    if (playerTargetActor\xa0!= INVALID_ACTOR_ID)\n    {\n        // Store the player's weapon so we can check if they are armed\n        new playerWeapon = GetPlayerWeapon(playerid);\n\n        // Get the player's keys so we can check if they are aiming\n        new KEY:keys, updown, leftright;\n        GetPlayerKeys(playerid, keys, updown, leftright);\n\n        // If the actor hasn't put its hands up yet, AND the player is ARMED\n        if (!ActorHandsup[playerTargetActor] && playerWeapon >= 22 && playerWeapon <= 42 && keys & KEY_AIM)\n        {\n            // Apply 'hands up' animation\n            ApplyActorAnimation(playerTargetActor, \"SHOP\", \"SHP_HandsUp_Scr\",4.1,0,0,0,1,0);\n\n            // Set 'ActorHandsup' to true, so the animation won't keep being reapplied\n            ActorHandsup[playerTargetActor] = true;\n        }\n    }\n    return 1;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"This function only tells you which actor (if any) the player is looking at. To find out if they are aiming at them, you need to use GetPlayerTargetActor."})}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["This function is disabled by default to save bandwidth. Use ",(0,n.jsx)(t.a,{href:"EnablePlayerCameraTarget",children:"EnablePlayerCameraTarget"})," to enable it for each player."]})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerTargetActor",children:"GetPlayerTargetActor"}),": Gets id of an actor which is aimed by certain player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerCameratargetPlayer",children:"GetPlayerCameraTargetPlayer"}),": Get the ID of the player a player is looking at."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerCameraTargetVehicle",children:"GetPlayerCameraTargetVehicle"}),": Get the ID of the vehicle a player is looking at."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerCameraTargetObject",children:"GetPlayerCameraTargetObject"}),": Get the ID of the object a player is looking at."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerCaemraFrontVector",children:"GetPlayerCameraFrontVector"}),": Get the player's camera front vector"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var a=r(96540);const n={},i=a.createContext(n);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);