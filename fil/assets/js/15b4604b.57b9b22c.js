"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[2399],{28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>s});var n=r(96540);const o={},i=n.createContext(o);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(i.Provider,{value:t},e.children)}},69455:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"scripting/functions/GetPlayerObjectRot","title":"GetPlayerObjectRot","description":"Use this function to get the object\'s current rotation.","source":"@site/docs/scripting/functions/GetPlayerObjectRot.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerObjectRot","permalink":"/fil/docs/scripting/functions/GetPlayerObjectRot","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerObjectRot.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerObjectRot","sidebar_label":"GetPlayerObjectRot","description":"Use this function to get the object\'s current rotation.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerObjectPos","permalink":"/fil/docs/scripting/functions/GetPlayerObjectPos"},"next":{"title":"GetPlayerObjectSyncRotation","permalink":"/fil/docs/scripting/functions/GetPlayerObjectSyncRotation"}}');var o=r(74848),i=r(28453);const c={title:"GetPlayerObjectRot",sidebar_label:"GetPlayerObjectRot",description:"Use this function to get the object's current rotation.",tags:["player"]},s=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function j(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"Use this function to get the object's current rotation. The rotation is saved by reference in three rotationX/rotationY/rotationZ variables."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"playerid"}),(0,o.jsx)(t.td,{children:"The player you associated this object to."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"objectid"}),(0,o.jsx)(t.td,{children:"The objectid of the object you want to get the rotation from."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["&Float",":rotationX"]}),(0,o.jsx)(t.td,{children:"The variable to store the X rotation, passed by reference."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["&Float",":rotationY"]}),(0,o.jsx)(t.td,{children:"The variable to store the Y rotation, passed by reference."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["&Float",":rotationZ"]}),(0,o.jsx)(t.td,{children:"The variable to store the Z rotation, passed by reference."})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(t.p,{children:"The object's rotation is stored in the specified variables."}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:"new gPlayerObject[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);\n\n    new Float:rotationX, Float:rotationY, Float:rotationZ;\n    GetPlayerObjectRot(playerid, objectid, rotationX, rotationY, rotationZ);\n    // rotationX = 0.0\n    // rotationY = 0.0\n    // rotationZ = 96.0\n    return 1;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"CreatePlayerObject",children:"CreatePlayerObject"}),": Create an object for only one player."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"DestroyPlayerObject",children:"DestroyPlayerObject"}),": Destroy a player object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"IsValidPlayerObject",children:"IsValidPlayerObject"}),": Checks if a certain player object is vaild."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": Move a player object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"StopPlayerObject",children:"StopPlayerObject"}),": Stop a player object from moving."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": Set the position of a player object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Set the rotation of a player object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": Locate a player object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"AttachPlayerObjectToPlayer",children:"AttachPlayerObjectToPlayer"}),": Attach a player object to a player."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"IsValidObject",children:"IsValidObject"}),": Checks if a certain object is vaild."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Move an object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"StopObject",children:"StopObject"}),": Stop an object from moving."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"SetObjectPos",children:"SetObjectPos"}),": Set the position of an object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"SetObjectRot",children:"SetObjectRot"}),": Set the rotation of an object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GetObjectPos",children:"GetObjectPos"}),": Locate an object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GetObjectRot",children:"GetObjectRot"}),": Check the rotation of an object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"AttachObjectToPlayer",children:"AttachObjectToPlayer"}),": Attach an object to a player."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(j,{...e})}):j(e)}}}]);