"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[48151],{28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var a=t(96540);const n={},l=a.createContext(n);function i(e){const r=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(l.Provider,{value:r},e.children)}},63553:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"scripting/functions/GetPlayerCameraTargetPlayer","title":"GetPlayerCameraTargetPlayer","description":"Allows you to retrieve the ID of the player the playerid is looking at.","source":"@site/docs/scripting/functions/GetPlayerCameraTargetPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerCameraTargetPlayer","permalink":"/fr/docs/scripting/functions/GetPlayerCameraTargetPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerCameraTargetPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"},{"inline":true,"label":"camera","permalink":"/fr/docs/tags/camera"}],"version":"current","frontMatter":{"title":"GetPlayerCameraTargetPlayer","sidebar_label":"GetPlayerCameraTargetPlayer","description":"Allows you to retrieve the ID of the player the playerid is looking at.","tags":["player","camera"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerCameraTargetObject","permalink":"/fr/docs/scripting/functions/GetPlayerCameraTargetObject"},"next":{"title":"GetPlayerCameraTargetPlayerObject","permalink":"/fr/docs/scripting/functions/GetPlayerCameraTargetPlayerObject"}}');var n=t(74848),l=t(28453);const i={title:"GetPlayerCameraTargetPlayer",sidebar_label:"GetPlayerCameraTargetPlayer",description:"Allows you to retrieve the ID of the player the playerid is looking at.",tags:["player","camera"]},o=void 0,s={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{VersionWarn:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{version:"SA-MP 0.3.7"}),"\n",(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(r.p,{children:"Allows you to retrieve the ID of the player the playerid is looking at."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"playerid"}),(0,n.jsx)(r.td,{children:"The ID of the player to check"})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:"The ID of the player the playerid is looking at"}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:'new playerTarget = GetPlayerCameraTargetPlayer(playerid);\n\nif (IsPlayerAdmin(playerTarget))\n{\n    GameTextForPlayer(playerid, "Looking at an admin", 3000, 3);\n}\n'})}),"\n",(0,n.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(r.admonition,{type:"warning",children:(0,n.jsx)(r.p,{children:"Do not confuse this function with GetPlayerTargetPlayer. GetPlayerTargetPlayer returns the ID of the player playerid is aming at (with a weapon). GetPlayerCameraTargetPlayer returns the ID of the player playerid is looking at (reference point is the center of the screen)."})}),"\n",(0,n.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"GetPlayerCameraTargetActor",children:"GetPlayerCameraTargetActor"}),": Get the ID of the actor (if any) a player is looking at."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"GetPlayerCameraTargetVehicle",children:"GetPlayerCameraTargetVehicle"}),": Get the ID of the vehicle a player is looking at."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"GetplayerCameraTargetObject",children:"GetPlayerCameraTargetObject"}),": Get the ID of the object a player is looking at."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"GetPlayercameraFrontVector",children:"GetPlayerCameraFrontVector"}),": Get the player's camera front vector"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);