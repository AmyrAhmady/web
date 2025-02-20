"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[26190],{28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>l});var c=i(96540);const n={},s=c.createContext(n);function r(e){const t=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),c.createElement(s.Provider,{value:t},e.children)}},39622:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});const c=JSON.parse('{"id":"scripting/functions/IsValidPlayerObject","title":"IsValidPlayerObject","description":"Checks if the given object ID is valid for the given player.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/IsValidPlayerObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsValidPlayerObject","permalink":"/th/docs/scripting/functions/IsValidPlayerObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsValidPlayerObject.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"IsValidPlayerObject","sidebar_label":"IsValidPlayerObject","description":"Checks if the given object ID is valid for the given player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"IsValidPlayerGangZone","permalink":"/th/docs/scripting/functions/IsValidPlayerGangZone"},"next":{"title":"IsValidPlayerPickup","permalink":"/th/docs/scripting/functions/IsValidPlayerPickup"}}');var n=i(74848),s=i(28453);const r={title:"IsValidPlayerObject",sidebar_label:"IsValidPlayerObject",description:"Checks if the given object ID is valid for the given player.",tags:["player"]},l=void 0,o={},a=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,n.jsx)(t.p,{children:"Checks if the given object ID is valid for the given player."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player whose player-object to validate."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"objectid"}),(0,n.jsx)(t.td,{children:"The ID of the object to validate."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,n.jsx)(t.p,{children:"1 if the object exists, 0 if not."}),"\n",(0,n.jsx)(t.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"// Check if an object is valid (exists) before we delete it\nif (IsValidPlayerObject(playerid, objectid))\n{\n\tDestroyPlayerObject(playerid, objectid);\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/CreatePlayerObject",children:"CreatePlayerObject"}),": Create an object for only one player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/DestroyPlayerObject",children:"DestroyPlayerObject"}),": Destroy a player object."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/MovePlayerObject",children:"MovePlayerObject"}),": Move a player object."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/StopPlayerObject",children:"StopPlayerObject"}),": Stop a player object from moving."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": Set the position of a player object."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Set the rotation of a player object."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": Locate a player object."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": Check the rotation of a player object."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/AttachPlayerObjectToPlayer",children:"AttachPlayerObjectToPlayer"}),": Attach a player object to a player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/IsValidObject",children:"IsValidObject"}),": Checks if a certain object is vaild."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/MoveObject",children:"MoveObject"}),": Move an object."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/StopObject",children:"StopObject"}),": Stop an object from moving."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/SetObjectPos",children:"SetObjectPos"}),": Set the position of an object."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/SetObjectRot",children:"SetObjectRot"}),": Set the rotation of an object."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/GetObjectPos",children:"GetObjectPos"}),": Locate an object."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/GetObjectRot",children:"GetObjectRot"}),": Check the rotation of an object."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/AttachObjectToPlayer",children:"AttachObjectToPlayer"}),": Attach an object to a player."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);