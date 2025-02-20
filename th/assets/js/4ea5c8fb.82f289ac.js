"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[14425],{28453:(e,t,c)=>{c.d(t,{R:()=>s,x:()=>o});var n=c(96540);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}},90220:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"scripting/functions/AttachPlayerObjectToPlayer","title":"AttachPlayerObjectToPlayer","description":"The same as AttachObjectToPlayer but for objects which were created for player.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/AttachPlayerObjectToPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AttachPlayerObjectToPlayer","permalink":"/th/docs/scripting/functions/AttachPlayerObjectToPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AttachPlayerObjectToPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"AttachPlayerObjectToPlayer","sidebar_label":"AttachPlayerObjectToPlayer","description":"The same as AttachObjectToPlayer but for objects which were created for player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"AttachPlayerObjectToObject","permalink":"/th/docs/scripting/functions/AttachPlayerObjectToObject"},"next":{"title":"AttachPlayerObjectToVehicle","permalink":"/th/docs/scripting/functions/AttachPlayerObjectToVehicle"}}');var r=c(74848),i=c(28453);const s={title:"AttachPlayerObjectToPlayer",sidebar_label:"AttachPlayerObjectToPlayer",description:"The same as AttachObjectToPlayer but for objects which were created for player.",tags:["player"]},o=void 0,a={},l=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,r.jsx)(t.p,{children:"The same as AttachObjectToPlayer but for objects which were created for player."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"objectplayer"}),(0,r.jsx)(t.td,{children:"The id of the player which is linked with the object."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"objectid"}),(0,r.jsx)(t.td,{children:"The objectid you want to attach to the player."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attachid"}),(0,r.jsx)(t.td,{children:"The id of the player you want to attach to the object."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":OffsetX"]}),(0,r.jsx)(t.td,{children:"The distance between the player and the object in the X direction."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":OffsetY"]}),(0,r.jsx)(t.td,{children:"The distance between the player and the object in the Y direction."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":OffsetZ"]}),(0,r.jsx)(t.td,{children:"The distance between the player and the object in the Z direction."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":RotX"]}),(0,r.jsx)(t.td,{children:"The X rotation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":RotY"]}),(0,r.jsx)(t.td,{children:"The Y rotation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":RotZ"]}),(0,r.jsx)(t.td,{children:"The Z rotation."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,r.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,r.jsx)(t.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"AttachPlayerObjectToPlayer(objectplayer, objectid, attachplayer, 1.5, 0.5, 0, 0, 1.5, 2 );\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"This function was removed in SA-MP 0.3."})}),"\n",(0,r.jsx)(t.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/CreateObject",children:"CreatePlayerObject"}),": Create an object for only one player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/DestroyObject",children:"DestroyPlayerObject"}),": Destroy a player object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/IsValidObject",children:"IsValidPlayerObject"}),": Checks if a certain player object is vaild."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/MoveObject",children:"MovePlayerObject"}),": Move a player object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/StopObject",children:"StopPlayerObject"}),": Stop a player object from moving."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Set the rotation of a player object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": Locate a player object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": Set the position of a player object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": Check the rotation of a player object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/SetPlayerAttachedObject",children:"SetPlayerAttachedObject"}),": Attach an object to a player"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/RemovePlayerAttachedObject",children:"RemovePlayerAttachedObject"}),": Remove an attached object from a player"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/IsPlayerAttachedObjectSlotUsed",children:"IsPlayerAttachedObjectSlotUsed"}),": Check whether an object is attached to a player in a specified index"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/IsValidObject",children:"IsValidObject"}),": Checks if a certain object is vaild."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/MoveObject",children:"MoveObject"}),": Move a object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/StopObject",children:"StopObject"}),": Stop an object from moving."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/SetObjectPos",children:"SetObjectPos"}),": Set the position of an object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/SetObjectRot",children:"SetObjectRot"}),": Set the rotation of an object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/GetObjectPos",children:"GetObjectPos"}),": Locate an object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/GetObjectRot",children:"GetObjectRot"}),": Check the rotation of an object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/th/docs/scripting/functions/AttachObjectToPlayer",children:"AttachObjectToPlayer"}),": Attach an object to a player."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);