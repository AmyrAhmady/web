"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[38458],{12724:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"scripting/functions/IsPlayerSpawned","title":"IsPlayerSpawned","description":"Checks if a player is spawned.","source":"@site/docs/scripting/functions/IsPlayerSpawned.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerSpawned","permalink":"/ta/docs/scripting/functions/IsPlayerSpawned","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsPlayerSpawned.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"}],"version":"current","frontMatter":{"title":"IsPlayerSpawned","sidebar_label":"IsPlayerSpawned","description":"Checks if a player is spawned.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerRaceCheckpointActive","permalink":"/ta/docs/scripting/functions/IsPlayerRaceCheckpointActive"},"next":{"title":"IsPlayerStreamedIn","permalink":"/ta/docs/scripting/functions/IsPlayerStreamedIn"}}');var r=t(74848),i=t(28453);const a={title:"IsPlayerSpawned",sidebar_label:"IsPlayerSpawned",description:"Checks if a player is spawned.",tags:["player"]},l=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Checks if a player is spawned."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player to check."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"true"})," - The player is spawned."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"false"})," - The player is not spawned."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerText(playerid, text[])\n{\n    if (!IsPlayerSpawned(playerid))\n    {\n        SendClientMessage(playerid, COLOR_RED, "ERROR: You must be spawned to send messages.");\n        return 0;\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SpawnPlayer",children:"SpawnPlayer"}),": (Re)Spawns a player."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(96540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);