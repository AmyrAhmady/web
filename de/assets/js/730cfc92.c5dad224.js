"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[10998],{28453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>s});var t=n(96540);const r={},l=t.createContext(r);function i(e){const a=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:a},e.children)}},96094:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"scripting/callbacks/OnPlayerUpdate","title":"OnPlayerUpdate","description":"This callback is called every time a client/player updates the server with their status.","source":"@site/docs/scripting/callbacks/OnPlayerUpdate.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerUpdate","permalink":"/de/docs/scripting/callbacks/OnPlayerUpdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerUpdate.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerUpdate","sidebar_label":"OnPlayerUpdate","description":"This callback is called every time a client/player updates the server with their status.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerText","permalink":"/de/docs/scripting/callbacks/OnPlayerText"},"next":{"title":"OnPlayerWeaponShot","permalink":"/de/docs/scripting/callbacks/OnPlayerWeaponShot"}}');var r=n(74848),l=n(28453);const i={title:"OnPlayerUpdate",sidebar_label:"OnPlayerUpdate",description:"This callback is called every time a client/player updates the server with their status.",tags:["player"]},s=void 0,o={},p=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2}];function c(e){const a={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components},{TipNPCCallbacks:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(a.p,{children:"This callback is called every time a client/player updates the server with their status. It is often used to create custom callbacks for client updates that aren't actively tracked by the server, such as health or armor updates or players switching weapons."}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Name"}),(0,r.jsx)(a.th,{children:"Description"})]})}),(0,r.jsx)(a.tbody,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"playerid"}),(0,r.jsx)(a.td,{children:"ID of the player sending an update packet."})]})})]}),"\n",(0,r.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(a.p,{children:"0 - Update from this player will not be replicated to other clients."}),"\n",(0,r.jsx)(a.p,{children:"1 - Indicates that this update can be processed normally and sent to other players."}),"\n",(0,r.jsx)(a.p,{children:"It is always called first in filterscripts."}),"\n",(0,r.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Example 1"})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-c",children:'new WEAPON:gPlayerCurrentWeapon[MAX_PLAYERS];\n\npublic OnPlayerUpdate(playerid)\n{\n    new WEAPON:weapon = GetPlayerWeapon(playerid); // Return the player\'s current weapon\n    if (weapon != gPlayerCurrentWeapon[playerid]) // If he changed weapons since the last update\n    {\n        // Lets call a callback named OnPlayerWeaponChange\n        CallLocalFunction("OnPlayerWeaponChange", "iii", playerid, gPlayerCurrentWeapon[playerid], weapon);\n        gPlayerCurrentWeapon[playerid] = weapon; // Update the weapon variable\n    }\n    return 1; // Send this update to other players.\n}\n\nforward OnPlayerWeaponChange(playerid, WEAPON:oldWeapon, WEAPON:newWeapon);\npublic OnPlayerWeaponChange(playerid, WEAPON:oldWeapon, WEAPON:newWeapon)\n{\n    new\n        string[128],\n        oldWeaponName[24],\n        newWeaponName[24];\n\n    GetWeaponName(oldWeapon, oldWeaponName, sizeof(oldWeaponName));\n    GetWeaponName(newWeapon, newWeaponName, sizeof(newWeaponName));\n\n    format(string, sizeof(string), "You changed weapon from %s to %s!", oldWeaponName, newWeaponName);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Example 2"})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-c",children:'public OnPlayerUpdate(playerid)\n{\n    new Float:fHealth;\n    GetPlayerHealth(playerid, fHealth);\n\n    if (fHealth\xa0!= GetPVarFloat(playerid, "faPlayerHealth"))\n    {\n        // Player health has changed since the last update -> server, so obviously thats the thing updated.\n        // Lets do further checks see if he\'s lost or gained health, anti-health cheat?\xa0;)\n\n        if (fHealth > GetPVarFloat(playerid, "faPlayerHealth"))\n        {\n            /* He has gained health! Cheating? Write your own scripts here to figure how a player\n            gained health! */\n        }\n        else\n        {\n            /* He has lost health! */\n        }\n\n        SetPVarFloat(playerid, "faPlayerHealth", fHealth);\n    }\n}\n'})}),"\n",(0,r.jsx)(a.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n,{}),"\n",(0,r.jsx)(a.admonition,{type:"warning",children:(0,r.jsx)(a.p,{children:"This callback is called, on average, 30 times per second, per player; only use it when you know what it's meant for (or more importantly what it's NOT meant for). The frequency with which this callback is called for each player varies, depending on what the player is doing. Driving or shooting will trigger a lot more updates than idling."})})]})}function d(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);