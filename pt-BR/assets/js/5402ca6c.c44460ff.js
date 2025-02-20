"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[90907],{28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var c=r(96540);const a={},n=c.createContext(a);function l(e){const t=c.useContext(n);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),c.createElement(n.Provider,{value:t},e.children)}},96234:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>o});const c=JSON.parse('{"id":"scripting/functions/AttachPlayerObjectToPlayer","title":"AttachPlayerObjectToPlayer","description":"The same as AttachObjectToPlayer but for objects which were created for player.","source":"@site/docs/scripting/functions/AttachPlayerObjectToPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AttachPlayerObjectToPlayer","permalink":"/pt-BR/docs/scripting/functions/AttachPlayerObjectToPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AttachPlayerObjectToPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"},{"inline":true,"label":"object","permalink":"/pt-BR/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/pt-BR/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"AttachPlayerObjectToPlayer","sidebar_label":"AttachPlayerObjectToPlayer","description":"The same as AttachObjectToPlayer but for objects which were created for player.","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"AttachPlayerObjectToObject","permalink":"/pt-BR/docs/scripting/functions/AttachPlayerObjectToObject"},"next":{"title":"AttachPlayerObjectToVehicle","permalink":"/pt-BR/docs/scripting/functions/AttachPlayerObjectToVehicle"}}');var a=r(74848),n=r(28453);const l={title:"AttachPlayerObjectToPlayer",sidebar_label:"AttachPlayerObjectToPlayer",description:"The same as AttachObjectToPlayer but for objects which were created for player.",tags:["player","object","playerobject"]},i=void 0,s={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:["The same as ",(0,a.jsx)(t.a,{href:"AttachObjectToPlayer",children:"AttachObjectToPlayer"})," but for objects which were created for player."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The id of the player which is linked with the object."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"objectid"}),(0,a.jsx)(t.td,{children:"The objectid you want to attach to the player."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"parentid"}),(0,a.jsx)(t.td,{children:"The id of the player you want to attach to the object."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":offsetX"]}),(0,a.jsx)(t.td,{children:"The distance between the player and the object in the X direction."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":offsetY"]}),(0,a.jsx)(t.td,{children:"The distance between the player and the object in the Y direction."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":offsetZ"]}),(0,a.jsx)(t.td,{children:"The distance between the player and the object in the Z direction."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":rotationX"]}),(0,a.jsx)(t.td,{children:"The X rotation."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":rotationY"]}),(0,a.jsx)(t.td,{children:"The Y rotation."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":rotationZ"]}),(0,a.jsx)(t.td,{children:"The Z rotation."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:"new gPlayerObject[MAX_PLAYERS];\n\npublic OnPlayerSpawn(playerid)\n{\n    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);\n\n    AttachPlayerObjectToPlayer(playerid, gPlayerObject[playerid], other_playerid, 1.5, 0.5, 0.0, 0.0, 1.5, 2.0);\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"This function was removed in SA-MP 0.3."})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"CreatePlayerObject",children:"CreatePlayerObject"}),": Create an object for only one player."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"DestroyPlayerObject",children:"DestroyPlayerObject"}),": Destroy a player object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"IsValidPlayerObject",children:"IsValidPlayerObject"}),": Checks if a certain player object is vaild."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": Move a player object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"StopPlayerObject",children:"StopPlayerObject"}),": Stop a player object from moving."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Set the rotation of a player object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": Locate a player object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": Set the position of a player object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": Check the rotation of a player object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayerAttachedObject",children:"SetPlayerAttachedObject"}),": Attach an object to a player"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"RemovePlayerAttachedObject",children:"RemovePlayerAttachedObject"}),": Remove an attached object from a player"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"IsPlayerAttachedObjectSlotUsed",children:"IsPlayerAttachedObjectSlotUsed"}),": Check whether an object is attached to a player in a specified index"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"IsValidObject",children:"IsValidObject"}),": Checks if a certain object is vaild."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Move a object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"StopObject",children:"StopObject"}),": Stop an object from moving."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetObjectPos",children:"SetObjectPos"}),": Set the position of an object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetObjectRot",children:"SetObjectRot"}),": Set the rotation of an object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetObjectPos",children:"GetObjectPos"}),": Locate an object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetObjectRot",children:"GetObjectRot"}),": Check the rotation of an object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"AttachObjectToPlayer",children:"AttachObjectToPlayer"}),": Attach an object to a player."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}}}]);