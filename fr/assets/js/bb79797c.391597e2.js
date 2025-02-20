"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[78477],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const c={},r=i.createContext(c);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(r.Provider,{value:n},e.children)}},59491:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/IsPlayerRaceCheckpointActive","title":"IsPlayerRaceCheckpointActive","description":"Check if the player currently has a race checkpoint visible.","source":"@site/docs/scripting/functions/IsPlayerRaceCheckpointActive.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerRaceCheckpointActive","permalink":"/fr/docs/scripting/functions/IsPlayerRaceCheckpointActive","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsPlayerRaceCheckpointActive.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/fr/docs/tags/checkpoint"},{"inline":true,"label":"racecheckpoint","permalink":"/fr/docs/tags/racecheckpoint"}],"version":"current","frontMatter":{"title":"IsPlayerRaceCheckpointActive","sidebar_label":"IsPlayerRaceCheckpointActive","description":"Check if the player currently has a race checkpoint visible.","tags":["player","checkpoint","racecheckpoint"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerPickupStreamedIn","permalink":"/fr/docs/scripting/functions/IsPlayerPickupStreamedIn"},"next":{"title":"IsPlayerSpawned","permalink":"/fr/docs/scripting/functions/IsPlayerSpawned"}}');var c=t(74848),r=t(28453);const s={title:"IsPlayerRaceCheckpointActive",sidebar_label:"IsPlayerRaceCheckpointActive",description:"Check if the player currently has a race checkpoint visible.",tags:["player","checkpoint","racecheckpoint"]},a=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,c.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(n.p,{children:"Check if the player currently has a race checkpoint visible."}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Name"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"playerid"}),(0,c.jsx)(n.td,{children:"The ID of the player to check."})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"return-values",children:"Return Values"}),"\n",(0,c.jsxs)(n.p,{children:["Returns ",(0,c.jsx)(n.strong,{children:"false"})," if there is no race checkpoint currently shown, otherwise returns ",(0,c.jsx)(n.strong,{children:"true"})]}),"\n",(0,c.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    if (IsPlayerRaceCheckpointActive(playerid))\n    {\n        // Do something\n    }\n}\n"})}),"\n",(0,c.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"SetPlayerRaceCheckpoint",children:"SetPlayerRaceCheckpoint"}),": Create a race checkpoint for a player."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"IsPlayerInRaceCheckpoint",children:"IsPlayerInRaceCheckpoint"}),": Check if a player is in a race checkpoint."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"IsPlayerCheckpointActive",children:"IsPlayerCheckpointActive"}),": Check if the player currently has a checkpoint visible."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}}}]);