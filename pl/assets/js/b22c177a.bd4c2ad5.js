"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[98566],{28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var r=n(96540);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}},39032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/GetPlayerSurfingObjectID","title":"GetPlayerSurfingObjectID","description":"Returns the ID of the object the player is surfing on.","source":"@site/docs/scripting/functions/GetPlayerSurfingObjectID.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerSurfingObjectID","permalink":"/pl/docs/scripting/functions/GetPlayerSurfingObjectID","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerSurfingObjectID.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerSurfingObjectID","sidebar_label":"GetPlayerSurfingObjectID","description":"Returns the ID of the object the player is surfing on.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerState","permalink":"/pl/docs/scripting/functions/GetPlayerState"},"next":{"title":"GetPlayerSurfingOffsets","permalink":"/pl/docs/scripting/functions/GetPlayerSurfingOffsets"}}');var s=n(74848),i=n(28453);const l={title:"GetPlayerSurfingObjectID",sidebar_label:"GetPlayerSurfingObjectID",description:"Returns the ID of the object the player is surfing on.",tags:["player"]},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Returns the ID of the object the player is surfing on."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"playerid"}),(0,s.jsx)(t.td,{children:"The ID of the player surfing the object"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:["The ID of the moving object the player is surfing. If the player isn't surfing a moving object, it will return ",(0,s.jsx)(t.code,{children:"INVALID_OBJECT_ID"})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"/* when the player types 'objectsurfing' in to the chat box, they'll see this.*/\npublic OnPlayerText(playerid, text[])\n{\n    if (strcmp(text, \"objectsurfing\", true) == 0)\n    {\n        new\n            szMessage[30];\n\n        format(szMessage, sizeof(szMessage), \"You're surfing on object #%d.\", GetPlayerSurfingObjectID(playerid));\n        SendClientMessage(playerid, 0xA9C4E4FF, szMessage);\n    }\n    return 0;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayerSurfingPlayerObjectID",children:"GetPlayerSurfingPlayerObjectID"}),": Get the ID of the player-object that the player is surfing on."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayerSurfingVehicleID",children:"GetPlayerSurfingVehicleID"}),": Get the ID of the vehicle that the player is surfing (stuck to the roof of)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayerSurfingOffsets",children:"GetPlayerSurfingOffsets"}),": Gets a player's surfing offsets."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}}}]);