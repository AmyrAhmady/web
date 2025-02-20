"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[13480],{13266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/EditPlayerObject","title":"EditPlayerObject","description":"Allows players to edit a player-object (position and rotation) with a GUI and their mouse.","source":"@site/docs/scripting/functions/EditPlayerObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/EditPlayerObject","permalink":"/zh-tw/docs/scripting/functions/EditPlayerObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/EditPlayerObject.md","tags":[{"inline":true,"label":"player","permalink":"/zh-tw/docs/tags/player"}],"version":"current","frontMatter":{"title":"EditPlayerObject","sidebar_label":"EditPlayerObject","description":"Allows players to edit a player-object (position and rotation) with a GUI and their mouse.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"EditPlayerClass","permalink":"/zh-tw/docs/scripting/functions/EditPlayerClass"},"next":{"title":"EnableAllAnimations","permalink":"/zh-tw/docs/scripting/functions/EnableAllAnimations"}}');var r=n(74848),l=n(28453);const s={title:"EditPlayerObject",sidebar_label:"EditPlayerObject",description:"Allows players to edit a player-object (position and rotation) with a GUI and their mouse.",tags:["player"]},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Allows players to edit a player-object (position and rotation) with a GUI and their mouse."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player that should edit the object"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"objectid"}),(0,r.jsx)(t.td,{children:"The object to be edited by the player"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"1: The function executed successfully."}),"\n",(0,r.jsx)(t.p,{children:"0: The function failed to execute. Player or object not valid."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'new object[MAX_PLAYERS];\npublic OnPlayerSpawn(playerid)\n{\n    object[playerid] = CreatePlayerObject(playerid, 1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/edit", true))\n    {\n        EditPlayerObject(playerid, object[playerid]);\n        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You now edit your object!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"You can move the camera while editing by pressing and holding the spacebar (or W in vehicle) and moving your mouse."})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Move an object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"EditAttachedObject",children:"EditAttachedObject"}),": Edit an attached object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SelectObject",children:"SelectObject"}),": Select an object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CancelEdit",children:"CancelEdit"}),": Cancel the edition of an object."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(96540);const r={},l=i.createContext(r);function s(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);