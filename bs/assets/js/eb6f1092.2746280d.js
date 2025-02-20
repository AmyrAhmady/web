"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[6020],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}},93454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/IsPlayerCameraTargetEnabled","title":"IsPlayerCameraTargetEnabled","description":"Check if the player camera target is enabled.","source":"@site/docs/scripting/functions/IsPlayerCameraTargetEnabled.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerCameraTargetEnabled","permalink":"/bs/docs/scripting/functions/IsPlayerCameraTargetEnabled","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsPlayerCameraTargetEnabled.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"IsPlayerCameraTargetEnabled","sidebar_label":"IsPlayerCameraTargetEnabled","description":"Check if the player camera target is enabled.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerAttachedObjectSlotUsed","permalink":"/bs/docs/scripting/functions/IsPlayerAttachedObjectSlotUsed"},"next":{"title":"IsPlayerCheckpointActive","permalink":"/bs/docs/scripting/functions/IsPlayerCheckpointActive"}}');var a=n(74848),s=n(28453);const i={title:"IsPlayerCameraTargetEnabled",sidebar_label:"IsPlayerCameraTargetEnabled",description:"Check if the player camera target is enabled.",tags:["player"]},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Check if the player camera target is enabled."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player"})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"true"})," - Enable."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"false"})," - Disable."]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    if (IsPlayerCameraTargetEnabled(playerid))\n    {\n        // do something\n    }\n\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"EnablePlayerCameraTarget",children:"EnablePlayerCameraTarget"}),": Toggle camera targeting functions for a player."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);