"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[5596],{28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>i});var n=r(96540);const c={},l=n.createContext(c);function a(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),n.createElement(l.Provider,{value:t},e.children)}},66299:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"scripting/functions/StopPlayerObject","title":"StopPlayerObject","description":"Stop a moving player-object after MovePlayerObject has been used.","source":"@site/docs/scripting/functions/StopPlayerObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/StopPlayerObject","permalink":"/pl/docs/scripting/functions/StopPlayerObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/StopPlayerObject.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"}],"version":"current","frontMatter":{"title":"StopPlayerObject","sidebar_label":"StopPlayerObject","description":"Stop a moving player-object after MovePlayerObject has been used.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"StopPlayerHoldingObject","permalink":"/pl/docs/scripting/functions/StopPlayerHoldingObject"},"next":{"title":"StopRecordingPlayback","permalink":"/pl/docs/scripting/functions/StopRecordingPlayback"}}');var c=r(74848),l=r(28453);const a={title:"StopPlayerObject",sidebar_label:"StopPlayerObject",description:"Stop a moving player-object after MovePlayerObject has been used.",tags:["player"]},i=void 0,s={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function j(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(t.p,{children:"Stop a moving player-object after MovePlayerObject has been used."}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"playerid"}),(0,c.jsx)(t.td,{children:"The ID of the player whose player-object to stop."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"objectid"}),(0,c.jsx)(t.td,{children:"The ID of the player-object to stop."})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,c.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:'new gPlayerObject[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);\n\n    MovePlayerObject(playerid, gPlayerObject[playerid], 2001.195679, 1547.113892, 10.000000, 2.0);\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/stopobject", true) == 0)\n    {\n        StopPlayerObject(playerid, gPlayerObject[playerid]);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": Move a player object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"CreatePlayerObject",children:"CreatePlayerObject"}),": Create an object for only one player."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"DestroyPlayerObject",children:"DestroyPlayerObject"}),": Destroy a player object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"IsValidPlayerObject",children:"IsValidPlayerObject"}),": Checks if a certain player object is vaild."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"IsPlayerObjectMoving",children:"IsPlayerObjectMoving"}),": Check if the player object is moving."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": Set the position of a player object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Set the rotation of a player object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": Locate a player object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": Check the rotation of a player object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"AttachPlayerObjectToPlayer",children:"AttachPlayerObjectToPlayer"}),": Attach a player object to a player."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"IsValidObject",children:"IsValidObject"}),": Checks if a certain object is vaild."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Move an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"IsObjectMoving",children:"IsObjectMoving"}),": Check if the object is moving."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"StopObject",children:"StopObject"}),": Stop an object from moving."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SetObjectPos",children:"SetObjectPos"}),": Set the position of an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SetObjectRot",children:"SetObjectRot"}),": Set the rotation of an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"GetObjectPos",children:"GetObjectPos"}),": Locate an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"GetObjectRot",children:"GetObjectRot"}),": Check the rotation of an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"AttachObjectToPlayer",children:"AttachObjectToPlayer"}),": Attach an object to a player."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(j,{...e})}):j(e)}}}]);