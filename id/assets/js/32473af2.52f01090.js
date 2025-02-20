"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[68483],{28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>s});var n=t(96540);const a={},l=n.createContext(a);function i(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(l.Provider,{value:r},e.children)}},99785:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/EnablePlayerCameraTarget","title":"EnablePlayerCameraTarget","description":"Toggle camera targeting functions for a player.","source":"@site/docs/scripting/functions/EnablePlayerCameraTarget.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/EnablePlayerCameraTarget","permalink":"/id/docs/scripting/functions/EnablePlayerCameraTarget","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/EnablePlayerCameraTarget.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"}],"version":"current","frontMatter":{"title":"EnablePlayerCameraTarget","sidebar_label":"EnablePlayerCameraTarget","description":"Toggle camera targeting functions for a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"EnableAllAnimations","permalink":"/id/docs/scripting/functions/EnableAllAnimations"},"next":{"title":"EnableStuntBonusForAll","permalink":"/id/docs/scripting/functions/EnableStuntBonusForAll"}}');var a=t(74848),l=t(28453);const i={title:"EnablePlayerCameraTarget",sidebar_label:"EnablePlayerCameraTarget",description:"Toggle camera targeting functions for a player.",tags:["player"]},s=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{VersionWarn:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{version:"SA-MP 0.3.7"}),"\n",(0,a.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(r.p,{children:"Toggle camera targeting functions for a player. Disabled by default to save bandwidth."}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Name"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"playerid"}),(0,a.jsx)(r.td,{children:"The ID of the player to toggle camera targeting functions for."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsxs)(r.td,{children:["bool",":enable"]}),(0,a.jsx)(r.td,{children:"'true' to enable camera targeting functions and 'false' to disable them."})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"false"})," - The function failed to execute. The player is not connected."]}),"\n",(0,a.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-c",children:"public OnPlayerConnect(playerid)\n{\n     EnablePlayerCameraTarget(playerid, true);\n     return 1;\n}\n"})}),"\n",(0,a.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"IsPlayerCameraTargetEnabled",children:"IsPlayerCameraTargetEnabled"}),": Check if the player camera target is enabled."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"GetPlayerCameraTargetVehicle",children:"GetPlayerCameraTargetVehicle"}),": Get the ID of the vehicle a player is looking at."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"GetPlayerCameraTargetPlayer",children:"GetPlayerCameraTargetPlayer"}),": Get the ID of the player a player is looking at."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"GetPlayerCameraFrontVector",children:"GetPlayerCameraFrontVector"}),": Get the player's camera front vector"]}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);