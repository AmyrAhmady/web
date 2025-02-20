"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[90981],{28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>i});var r=a(96540);const n={},c=r.createContext(n);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(c.Provider,{value:t},e.children)}},48148:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/AttachCameraToPlayerObject","title":"AttachCameraToPlayerObject","description":"Attaches a player\'s camera to a player-object.","source":"@site/docs/scripting/functions/AttachCameraToPlayerObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AttachCameraToPlayerObject","permalink":"/es/docs/scripting/functions/AttachCameraToPlayerObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AttachCameraToPlayerObject.md","tags":[{"inline":true,"label":"player","permalink":"/es/docs/tags/player"},{"inline":true,"label":"camera","permalink":"/es/docs/tags/camera"}],"version":"current","frontMatter":{"title":"AttachCameraToPlayerObject","sidebar_label":"AttachCameraToPlayerObject","description":"Attaches a player\'s camera to a player-object.","tags":["player","camera"]},"sidebar":"docsSidebar","previous":{"title":"AttachCameraToObject","permalink":"/es/docs/scripting/functions/AttachCameraToObject"},"next":{"title":"AttachObjectToObject","permalink":"/es/docs/scripting/functions/AttachObjectToObject"}}');var n=a(74848),c=a(28453);const s={title:"AttachCameraToPlayerObject",sidebar_label:"AttachCameraToPlayerObject",description:"Attaches a player's camera to a player-object.",tags:["player","camera"]},i=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Attaches a player's camera to a player-object. The player is able to move their camera while it is attached to an object. Can be used with MovePlayerObject and AttachPlayerObjectToVehicle."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player which will have their camera attached to a player-object."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerobjectid"}),(0,n.jsx)(t.td,{children:"The ID of the player-object to which the player's camera will be attached."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/attach", false))\n    {\n        new playerobject = CreatePlayerObject(playerid, 1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);\n        AttachCameraToPlayerObject(playerid, playerobject);\n        SendClientMessage(playerid, 0xFFFFFFAA, "Your camera is now attached to an object.");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"The player-object must be created before attempting to attach the player's camera to it."})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"AttachCameraToObject",children:"AttachCameraToObject"}),": Attachs the player's camera on an global object."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetPlayerCameraPos",children:"SetPlayerCameraPos"}),": Set a player's camera position."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetPlayerCameraLookAt",children:"SetPlayerCameraLookAt"}),": Set where a player's camera should face."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);