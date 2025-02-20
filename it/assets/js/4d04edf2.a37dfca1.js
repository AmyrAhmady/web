"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[59928],{28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var a=r(96540);const n={},l=a.createContext(n);function i(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(l.Provider,{value:t},e.children)}},39963:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>x,frontMatter:()=>i,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"scripting/functions/PlayerTextDrawSetString","title":"PlayerTextDrawSetString","description":"Change the text of a player-textdraw.","source":"@site/docs/scripting/functions/PlayerTextDrawSetString.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawSetString","permalink":"/it/docs/scripting/functions/PlayerTextDrawSetString","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/PlayerTextDrawSetString.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/it/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/it/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"PlayerTextDrawSetString","sidebar_label":"PlayerTextDrawSetString","description":"Change the text of a player-textdraw.","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawSetShadow","permalink":"/it/docs/scripting/functions/PlayerTextDrawSetShadow"},"next":{"title":"PlayerTextDrawShow","permalink":"/it/docs/scripting/functions/PlayerTextDrawShow"}}');var n=r(74848),l=r(28453);const i={title:"PlayerTextDrawSetString",sidebar_label:"PlayerTextDrawSetString",description:"Change the text of a player-textdraw.",tags:["player","textdraw","playertextdraw"]},s=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Change the text of a player-textdraw."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player who's textdraw string to set"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["PlayerText",":textid"]}),(0,n.jsx)(t.td,{children:"The ID of the textdraw to change"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"const format[]"}),(0,n.jsx)(t.td,{children:"The new string for the TextDraw"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OPEN_MP_TAGS:..."}),(0,n.jsx)(t.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'new PlayerText:pVehicleHealthTD[MAX_PLAYERS];\nnew pVehicleHealthTimer[MAX_PLAYERS];\n\npublic OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)\n{\n    if (newstate == PLAYER_STATE_DRIVER) // Entered a vehicle as driver\n    {\n        pVehicleHealthTD[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, " ");\n        PlayerTextDrawShow(playerid, pVehicleHealthTD[playerid]);\n\n        // Set a timer to update the textdraw every second\n        pVehicleHealthTimer[playerid] = SetTimerEx("UpdateVehicleHealthTextDraw", 1000, true, "i", playerid);\n    }\n    if (oldstate == PLAYER_STATE_DRIVER)\n    {\n        KillTimer(pVehicleHealthTimer[playerid]);\n        PlayerTextDrawDestroy(playerid, pVehicleHealthTD[playerid]);\n    }\n    return 1;\n}\n\nforward UpdateVehicleHealthTextDraw(playerid);\npublic UpdateVehicleHealthTextDraw(playerid)\n{\n    new \n        string[32],\n        vehicleid = GetPlayerVehicleID(playerid),\n        Float:health;\n\n    GetVehicleHealth(vehicleid, health);\n\n    format(string, sizeof(string), "Vehicle Health: %.0f", health);\n    PlayerTextDrawSetString(playerid, pVehicleHealthTD[playerid], string); // <<< Update the text to show the vehicle health\n\n    // PRO TIP: You don\'t need `format` in open.mp\n    PlayerTextDrawSetString(playerid, pVehicleHealthTD[playerid], "Vehicle Health: %.0f", health);\n    return 1;\n}\n\n/*\nNOTE: This example is purely for demonstration purposes, it is not guaranteed to work in-game. It is merely to show the usage of the PlayerTextDrawSetString function.\n*/\n'})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"You don't have to show the TextDraw again in order to apply the changes."})}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["There are limits to the length of textdraw strings! See ",(0,n.jsx)(t.a,{href:"../resources/limits",children:"Limits"})," for more info."]})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"CreatePlayerTextDraw",children:"CreatePlayerTextDraw"}),": Create a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawDestroy",children:"PlayerTextDrawDestroy"}),": Destroy a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawGetString",children:"PlayerTextDrawGetString"}),": Gets the text of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawColor",children:"PlayerTextDrawColor"}),": Set the color of the text in a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawBoxColor",children:"PlayerTextDrawBoxColor"}),": Set the color of a player-textdraw's box."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawBackgroundColor",children:"PlayerTextDrawBackgroundColor"}),": Set the background color of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawAlignment",children:"PlayerTextDrawAlignment"}),": Set the alignment of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": Set the font of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawLetterSize",children:"PlayerTextDrawLetterSize"}),": Set the letter size of the text in a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawTextSize",children:"PlayerTextDrawTextSize"}),": Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawSetOutline",children:"PlayerTextDrawSetOutline"}),": Toggle the outline on a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawSetShadow",children:"PlayerTextDrawSetShadow"}),": Set the shadow on a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawSetProportional",children:"PlayerTextDrawSetProportional"}),": Scale the text spacing in a player-textdraw to a proportional ratio."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawUseBox",children:"PlayerTextDrawUseBox"}),": Toggle the box on a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawShow",children:"PlayerTextDrawShow"}),": Show a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawHide",children:"PlayerTextDrawHide"}),": Hide a player-textdraw."]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);