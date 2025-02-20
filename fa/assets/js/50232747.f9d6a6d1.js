"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[3731],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(96540);const r={},c=i.createContext(r);function s(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:n},e.children)}},90277:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/IsPlayerCheckpointActive","title":"IsPlayerCheckpointActive","description":"Check if the player currently has a checkpoint visible.","source":"@site/docs/scripting/functions/IsPlayerCheckpointActive.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerCheckpointActive","permalink":"/fa/docs/scripting/functions/IsPlayerCheckpointActive","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsPlayerCheckpointActive.md","tags":[{"inline":true,"label":"player","permalink":"/fa/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/fa/docs/tags/checkpoint"}],"version":"current","frontMatter":{"title":"IsPlayerCheckpointActive","sidebar_label":"IsPlayerCheckpointActive","description":"Check if the player currently has a checkpoint visible.","tags":["player","checkpoint"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerCameraTargetEnabled","permalink":"/fa/docs/scripting/functions/IsPlayerCameraTargetEnabled"},"next":{"title":"IsPlayerConnected","permalink":"/fa/docs/scripting/functions/IsPlayerConnected"}}');var r=t(74848),c=t(28453);const s={title:"IsPlayerCheckpointActive",sidebar_label:"IsPlayerCheckpointActive",description:"Check if the player currently has a checkpoint visible.",tags:["player","checkpoint"]},l=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Check if the player currently has a checkpoint visible."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player to check."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"return-values",children:"Return Values"}),"\n",(0,r.jsxs)(n.p,{children:["Returns ",(0,r.jsx)(n.strong,{children:"false"})," if there is no checkpoint currently shown, otherwise returns ",(0,r.jsx)(n.strong,{children:"true"})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    if (IsPlayerCheckpointActive(playerid))\n    {\n        // Do something\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetPlayerCheckpoint",children:"SetPlayerCheckpoint"}),": Create a checkpoint for a player."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"IsPlayerInCheckpoint",children:"IsPlayerInCheckpoint"}),": Check if a player is in a checkpoint."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"IsPlayerRaceCheckpointActive",children:"IsPlayerRaceCheckpointActive"}),": Check if the player currently has a race checkpoint visible."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);