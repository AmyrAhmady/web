"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[30573],{4410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"scripting/functions/SpawnPlayer","title":"SpawnPlayer","description":"(Re)Spawns a player.","source":"@site/docs/scripting/functions/SpawnPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SpawnPlayer","permalink":"/vi/docs/scripting/functions/SpawnPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SpawnPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/vi/docs/tags/player"}],"version":"current","frontMatter":{"title":"SpawnPlayer","sidebar_label":"SpawnPlayer","description":"(Re)Spawns a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"ShowVehicle","permalink":"/vi/docs/scripting/functions/ShowVehicle"},"next":{"title":"StartRecordingPlayback","permalink":"/vi/docs/scripting/functions/StartRecordingPlayback"}}');var l=t(74848),r=t(28453);const a={title:"SpawnPlayer",sidebar_label:"SpawnPlayer",description:"(Re)Spawns a player.",tags:["player"]},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"(Re)Spawns a player."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player to spawn."})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"false"})," - The function failed to execute. This means the player is not connected."]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/spawn", true) == 0)\n    {\n        SpawnPlayer(playerid);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsxs)(n.admonition,{type:"warning",children:[(0,l.jsx)(n.p,{children:"Known Bug(s):"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Kills the player if they are in a vehicle and then they spawn with a bottle in their hand. (Fixed in open.mp)"}),"\n"]})]}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsPlayerSpawned",children:"IsPlayerSpawned"}),": Checks if a player is spawned."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"SetSpawnInfo",children:"SetSpawnInfo"}),": Set the spawn setting for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"AddPlayerClass",children:"AddPlayerClass"}),": Add a class."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../callbacks/OnPlayerSpawn",children:"OnPlayerSpawn"}),": Called when a player spawns."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(96540);const l={},r=s.createContext(l);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);