"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[30407],{13744:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/SetVehicleParamsForPlayer","title":"SetVehicleParamsForPlayer","description":"Set the parameters of a vehicle for a player.","source":"@site/docs/scripting/functions/SetVehicleParamsForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehicleParamsForPlayer","permalink":"/pt-BR/docs/scripting/functions/SetVehicleParamsForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetVehicleParamsForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/pt-BR/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"SetVehicleParamsForPlayer","sidebar_label":"SetVehicleParamsForPlayer","description":"Set the parameters of a vehicle for a player.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleParamsEx","permalink":"/pt-BR/docs/scripting/functions/SetVehicleParamsEx"},"next":{"title":"SetVehicleParamsSirenState","permalink":"/pt-BR/docs/scripting/functions/SetVehicleParamsSirenState"}}');var t=r(74848),l=r(28453);const a={title:"SetVehicleParamsForPlayer",sidebar_label:"SetVehicleParamsForPlayer",description:"Set the parameters of a vehicle for a player.",tags:["player","vehicle"]},o=void 0,s={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(i.p,{children:"Set the parameters of a vehicle for a player."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"vehicle"}),(0,t.jsx)(i.td,{children:"The ID of the vehicle to set the parameters of."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"playerid"}),(0,t.jsx)(i.td,{children:"The ID of the player to set the vehicle's parameters for."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:["bool",":objective"]}),(0,t.jsx)(i.td,{children:"'false' to disable the objective or 'true' to show it. This is a bobbing yellow arrow above the vehicle."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:["bool",":doorslocked"]}),(0,t.jsx)(i.td,{children:"'false' to unlock the doors or 'true' to lock them."})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"false"})," - The function failed to execute. The player and/or vehicle specified do not exist."]}),"\n",(0,t.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:'// sometime earlier:\nSetVehicleParamsForPlayer(iPlayerVehicle, iPlayerID, true, false);\n\n// sometime later when you want the vehicle to respawn:\nnew\n    bool:iEngine, bool:iLights, bool:iAlarm,\n    bool:iDoors, bool:iBonnet, bool:iBoot,\n    bool:iObjective;\n\nGetVehicleParamsEx(iPlayerVehicle, iEngine, iLights, iAlarm, iDoors, iBonnet, iBoot, iObjective);\nSetVehicleParamsEx(iPlayerVehicle, iEngine, iLights, iAlarm, iDoors, iBonnet, iBoot, false);\n\n// Locks own car for all players, except the player who used the command.\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/lock", true))\n    {\n        if (!IsPlayerInAnyVehicle(playerid))\n        {\n            return SendClientMessage(playerid,0xFFFFFFAA,"You have to be inside a vehicle.");\n        }\n\n        for (new i = 0; i < MAX_PLAYERS; i++)\n        {\n            if (i == playerid)\n            {\n                continue;\n            }\n            SetVehicleParamsForPlayer(GetPlayerVehicleID(playerid), i, false, true);\n        }\n        return 1;\n    }\n    return 0;\n}\n\n// Will show vehicle markers for players streaming in for 0.3a+\nnew bool:iVehicleObjective[MAX_VEHICLES][2];\n\npublic OnGameModeInit() //Or another callback\n{\n    new temp = AddStaticVehicleEx(400, 0.0, 0.0, 5.0, 0.0, 0, 0, -1); //ID 1\n    iVehicleObjective[temp][0] = true; //Marker\n    iVehicleObjective[temp][1] = false; //Door Lock\n    return 1;\n}\n\nstock SetVehicleParamsForPlayerEx(vehicleid, playerid, bool:objective, bool:doorslocked)\n{\n    SetVehicleParamsForPlayer(vehicleid, playerid, objective, doorslocked);\n    iVehicleObjective[vehicleid][0] = objective;\n    iVehicleObjective[vehicleid][1] = doorslocked;\n}\n\npublic OnVehicleStreamIn(vehicleid, forplayerid)\n{\n    SetVehicleParamsForPlayer(vehicleid, forplayerid, iVehicleObjective[vehicleid][0], iVehicleObjective[vehicleid][1]);\n}\n\n//Top\nnew myMarkedCar;\n\npublic OnGameModeInit() //Or another callback\n{\n    myMarkedCar = AddStaticVehicleEx(400, 0.0, 0.0, 5.0, 0.0, 0, 0, -1); // For example: Black Landstalker near Blueberry Acres\n    return 1;\n}\n\n//Whatever your want\npublic OnVehicleStreamIn(vehicleid, forplayerid)\n{\n    if (vehicleid == myMarkedCar)\n    {\n        SetVehicleParamsForPlayer(myMarkedCar, forplayerid, true, false); // marker can be visible only if the vehicle streamed for player\n    }\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsx)(i.p,{children:"Vehicles must be respawned for the 'objective' to be removed."})}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsxs)(i.p,{children:["You will have to reapply this function when ",(0,t.jsx)(i.a,{href:"../callbacks/OnVehicleStreamIn",children:"OnVehicleStreamIn"})," is called."]})}),"\n",(0,t.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetVehicleParamsEx",children:"SetVehicleParamsEx"}),": Sets a vehicle's params for all players."]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>a,x:()=>o});var n=r(96540);const t={},l=n.createContext(t);function a(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);