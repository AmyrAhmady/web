"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[96303],{28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var n=r(96540);const a={},i=n.createContext(a);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(i.Provider,{value:t},e.children)}},93665:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/GetPlayerCameraTargetObject","title":"GetPlayerCameraTargetObject","description":"Allows you to retrieve the ID of the object the player is looking at.","source":"@site/docs/scripting/functions/GetPlayerCameraTargetObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerCameraTargetObject","permalink":"/id/docs/scripting/functions/GetPlayerCameraTargetObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerCameraTargetObject.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"},{"inline":true,"label":"camera","permalink":"/id/docs/tags/camera"}],"version":"current","frontMatter":{"title":"GetPlayerCameraTargetObject","sidebar_label":"GetPlayerCameraTargetObject","description":"Allows you to retrieve the ID of the object the player is looking at.","tags":["player","camera"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerCameraTargetActor","permalink":"/id/docs/scripting/functions/GetPlayerCameraTargetActor"},"next":{"title":"GetPlayerCameraTargetPlayer","permalink":"/id/docs/scripting/functions/GetPlayerCameraTargetPlayer"}}');var a=r(74848),i=r(28453);const l={title:"GetPlayerCameraTargetObject",sidebar_label:"GetPlayerCameraTargetObject",description:"Allows you to retrieve the ID of the object the player is looking at.",tags:["player","camera"]},o=void 0,s={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{version:"SA-MP 0.3.7"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Allows you to retrieve the ID of the object the player is looking at."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player to check"})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"The ID of the object playerid is looking at. If INVALID_OBJECT_ID (65535) is returned, playerid isn't looking at any object."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'new globalObjectID;\n\npublic OnGameModeInit()\n{\n    globalObjectID = CreateObject(1337, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/check", true))\n    {\n        new objectid = GetPlayerCameraTargetObject(playerid);\n        if (objectid == globalObjectID)\n        {\n            SendClientMessage(playerid, -1, "You\'re looking at your object.");\n        }\n        else if (objectid == INVALID_OBJECT_ID) // INVALID_OBJECT_ID = 65535\n        {\n            SendClientMessage(playerid, -1, "You\'re not looking at any object.");\n        }\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["This function is disabled by default to save bandwidth. Use ",(0,a.jsx)(t.a,{href:"EnablePlayerCameraTarget",children:"EnablePlayerCameraTarget"})," to enable it for each player."]})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetplayerCameraTargetVehicle",children:"GetPlayerCameraTargetVehicle"}),": Get the ID of the vehicle a player is looking at."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetplayerCameraTargetPlayer",children:"GetPlayerCameraTargetPlayer"}),": Get the ID of the player a player is looking at."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerCameraFrontVector",children:"GetPlayerCameraFrontVector"}),": Get the player's camera front vector"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);