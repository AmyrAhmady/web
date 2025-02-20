"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[70663],{136:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"scripting/functions/SetPlayerSkin","title":"SetPlayerSkin","description":"Set the skin of a player.","source":"@site/docs/scripting/functions/SetPlayerSkin.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerSkin","permalink":"/sr/docs/scripting/functions/SetPlayerSkin","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerSkin.md","tags":[{"inline":true,"label":"player","permalink":"/sr/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerSkin","sidebar_label":"SetPlayerSkin","description":"Set the skin of a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerSkillLevel","permalink":"/sr/docs/scripting/functions/SetPlayerSkillLevel"},"next":{"title":"SetPlayerSpecialAction","permalink":"/sr/docs/scripting/functions/SetPlayerSpecialAction"}}');var r=i(74848),s=i(28453);const l={title:"SetPlayerSkin",sidebar_label:"SetPlayerSkin",description:"Set the skin of a player.",tags:["player"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Set the skin of a player. A player's skin is their character model."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player to set the skin of."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"skinid"}),(0,r.jsxs)(n.td,{children:["The ",(0,r.jsx)(n.a,{href:"../resources/skins",children:"skin"})," the player should use."]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"false"})," - The function failed to execute. This means the player specified does not exist."]}),"\n",(0,r.jsx)(n.p,{children:"Note that 'success' is reported even when skin ID is invalid (not 0-311, or 74), but the skin will be set to ID 0 (CJ)."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/fireman", true) == 0)\n    {\n        // Set the player\'s skin to ID 277, which is a fireman.\n        SetPlayerSkin(playerid, 277);\n        return 1;\n    }\n    return 0;\n}\n\nSetPlayerSkinFix(playerid, skinid)\n{\n    if (!IsPlayerConnected(playerid))\n    {\n        return 0;\n    }\n\n    // If the skinid is invalid, less than 0 or more than 311 or is equal to 74 (invalid skin), then do nothing\n    if (0 > skinid > 311 || skinid == 74)\n    {\n        return 0;\n    }\n\n    new\n        Float:tmpPos[4],\n        vehicleid = GetPlayerVehicleID(playerid),\n        seatid = GetPlayerVehicleSeat(playerid);\n\n    GetPlayerPos(playerid, tmpPos[0], tmpPos[1], tmpPos[2]);\n    GetPlayerFacingAngle(playerid, tmpPos[3]);\n\n    if (GetPlayerSpecialAction(playerid) == SPECIAL_ACTION_DUCK)\n    {\n        SetPlayerPos(playerid, tmpPos[0], tmpPos[1], tmpPos[2]);\n        SetPlayerFacingAngle(playerid, tmpPos[3]);\n        TogglePlayerControllable(playerid, true); // preventing any freeze - optional\n        return SetPlayerSkin(playerid, skinid);\n    }\n    else if (IsPlayerInAnyVehicle(playerid))\n    {\n        new\n            tmp;\n\n        RemovePlayerFromVehicle(playerid);\n        SetPlayerPos(playerid, tmpPos[0], tmpPos[1], tmpPos[2]);\n        SetPlayerFacingAngle(playerid, tmpPos[3]);\n        TogglePlayerControllable(playerid, true); // preventing any freeze - important! because of doing animations of exiting vehicle\n        tmp = SetPlayerSkin(playerid, skinid);\n        PutPlayerInVehicle(playerid, vehicleid, (seatid == 128)\xa0? 0\xa0: seatid);\n        return tmp;\n    }\n    else\n    {\n        return SetPlayerSkin(playerid, skinid);\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:"Known Bug(s):"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If a player's skin is set when they are crouching, in a vehicle, or performing certain animations, they will become frozen or otherwise glitched. This can be fixed by using ",(0,r.jsx)(n.a,{href:"TogglePlayerControllable",children:"TogglePlayerControllable"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Players can be detected as being crouched through ",(0,r.jsx)(n.a,{href:"GetPlayerSpecialAction",children:"GetPlayerSpecialAction"})," (SPECIAL_ACTION_DUCK)."]}),"\n",(0,r.jsx)(n.li,{children:"Other players around the player may crash if he is in a vehicle or if he is entering/leaving a vehicle."}),"\n",(0,r.jsx)(n.li,{children:"Setting a player's skin when he is dead may crash players around him."}),"\n",(0,r.jsx)(n.li,{children:"Breaks sitting on bikes."}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerSkin",children:"GetPlayerSkin"}),": Get a player's current skin."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetSpawnInfo",children:"SetSpawnInfo"}),": Set the spawn setting for a player."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../resources/skins",children:"Skin IDs"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var t=i(96540);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);