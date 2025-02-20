"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[90753],{19949:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"scripting/functions/GetPlayerObjectPos","title":"GetPlayerObjectPos","description":"Get the position of a player object (CreatePlayerObject).","source":"@site/docs/scripting/functions/GetPlayerObjectPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerObjectPos","permalink":"/hu/docs/scripting/functions/GetPlayerObjectPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerObjectPos.md","tags":[{"inline":true,"label":"player","permalink":"/hu/docs/tags/player"},{"inline":true,"label":"object","permalink":"/hu/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/hu/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"GetPlayerObjectPos","sidebar_label":"GetPlayerObjectPos","description":"Get the position of a player object (CreatePlayerObject).","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerObjectMovingTargetRot","permalink":"/hu/docs/scripting/functions/GetPlayerObjectMovingTargetRot"},"next":{"title":"GetPlayerObjectRot","permalink":"/hu/docs/scripting/functions/GetPlayerObjectRot"}}');var c=r(74848),l=r(28453);const s={title:"GetPlayerObjectPos",sidebar_label:"GetPlayerObjectPos",description:"Get the position of a player object (CreatePlayerObject).",tags:["player","object","playerobject"]},i=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function j(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(t.p,{children:["Get the position of a player object (",(0,c.jsx)(t.a,{href:"CreatePlayerObject",children:"CreatePlayerObject"}),")."]}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"playerid"}),(0,c.jsx)(t.td,{children:"The ID of the player whose player object to get the position of."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"objectid"}),(0,c.jsx)(t.td,{children:"The object's id of which you want the current location."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["&Float",":x"]}),(0,c.jsx)(t.td,{children:"A float variable in which to store the X coordinate, passed by reference."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["&Float",":y"]}),(0,c.jsx)(t.td,{children:"A float variable in which to store the Y coordinate, passed by reference."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["&Float",":z"]}),(0,c.jsx)(t.td,{children:"A float variable in which to store the Z coordinate, passed by reference."})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"false"})," - The function failed to execute. The player and/or the object don't exist."]}),"\n",(0,c.jsx)(t.p,{children:"The object's position is stored in the specified variables."}),"\n",(0,c.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:"new gPlayerObject[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);\n\n    new Float:x, Float:y, Float:z;\n    GetPlayerObjectPos(playerid, gPlayerObject[playerid], x, y, z);\n    // x = 2001.195679\n    // y = 1547.113892\n    // z = 14.283400,\n    return 1;\n}\n"})}),"\n",(0,c.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"CreatePlayerObject",children:"CreatePlayerObject"}),": Create an object for only one player."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"DestroyPlayerObject",children:"DestroyPlayerObject"}),": Destroy a player object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"IsValidPlayerObject",children:"IsValidPlayerObject"}),": Checks if a certain player object is vaild."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": Move a player object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"StopPlayerObject",children:"StopPlayerObject"}),": Stop a player object from moving."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": Set the position of a player object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Set the rotation of a player object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": Check the rotation of a player object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"AttachPlayerObjectToPlayer",children:"AttachPlayerObjectToPlayer"}),": Attach a player object to a player."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"IsValidObject",children:"IsValidObject"}),": Checks if a certain object is vaild."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Move an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"StopObject",children:"StopObject"}),": Stop an object from moving."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SetObjectPos",children:"SetObjectPos"}),": Set the position of an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SetObjectRot",children:"SetObjectRot"}),": Set the rotation of an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"GetObjectPos",children:"GetObjectPos"}),": Locate an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"GetObjectRot",children:"GetObjectRot"}),": Check the rotation of an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"AttachObjectToPlayer",children:"AttachObjectToPlayer"}),": Attach an object to a player."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(j,{...e})}):j(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(96540);const c={},l=n.createContext(c);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);