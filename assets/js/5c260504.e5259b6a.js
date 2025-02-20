"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[32158],{21058:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"scripting/functions/DisablePlayerRaceCheckpoint","title":"DisablePlayerRaceCheckpoint","description":"Disable any initialized race checkpoints for a specific player, since you can only have one at any given time.","source":"@site/docs/scripting/functions/DisablePlayerRaceCheckpoint.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DisablePlayerRaceCheckpoint","permalink":"/docs/scripting/functions/DisablePlayerRaceCheckpoint","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/DisablePlayerRaceCheckpoint.md","tags":[{"inline":true,"label":"player","permalink":"/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/docs/tags/checkpoint"},{"inline":true,"label":"racecheckpoint","permalink":"/docs/tags/racecheckpoint"}],"version":"current","frontMatter":{"title":"DisablePlayerRaceCheckpoint","sidebar_label":"DisablePlayerRaceCheckpoint","description":"Disable any initialized race checkpoints for a specific player, since you can only have one at any given time.","tags":["player","checkpoint","racecheckpoint"]},"sidebar":"docsSidebar","previous":{"title":"DisablePlayerCheckpoint","permalink":"/docs/scripting/functions/DisablePlayerCheckpoint"},"next":{"title":"DisableRemoteVehicleCollisions","permalink":"/docs/scripting/functions/DisableRemoteVehicleCollisions"}}');var c=i(74848),l=i(28453);const t={title:"DisablePlayerRaceCheckpoint",sidebar_label:"DisablePlayerRaceCheckpoint",description:"Disable any initialized race checkpoints for a specific player, since you can only have one at any given time.",tags:["player","checkpoint","racecheckpoint"]},r=void 0,s={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(n.p,{children:"Disable any initialized race checkpoints for a specific player, since you can only have one at any given time."}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Name"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"playerid"}),(0,c.jsx)(n.td,{children:"The player to disable the current checkpoint for."})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,c.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:"public OnPlayerLeaveRaceCheckpoint(playerid)\n{\n    DisablePlayerRaceCheckpoint(playerid);\n    return 1;\n}\n"})}),"\n",(0,c.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"SetPlayerCheckpoint",children:"SetPlayerCheckpoint"}),": Create a checkpoint for a player."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"DisablePlayerCheckpoint",children:"DisablePlayerCheckpoint"}),": Disable the player's current checkpoint."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"IsPlayerInCheckpoint",children:"IsPlayerInCheckpoint"}),": Check if a player is in a checkpoint."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"SetPlayerRaceCheckpoint",children:"SetPlayerRaceCheckpoint"}),": Create a race checkpoint for a player."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"IsPlayerInRaceCheckpoint",children:"IsPlayerInRaceCheckpoint"}),": Check if a player is in a race checkpoint."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"IsPlayerRaceCheckpointActive",children:"IsPlayerRaceCheckpointActive"}),": Check if the player currently has a race checkpoint visible."]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"../callbacks/OnPlayerEnterCheckpoint",children:"OnPlayerEnterCheckpoint"}),": Called when a player enters a checkpoint."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"../callbacks/OnPlayerLeaveCheckpoint",children:"OnPlayerLeaveCheckpoint"}),": Called when a player leaves a checkpoint."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"../callbacks/OnPlayerEnterRaceCheckpoint",children:"OnPlayerEnterRaceCheckpoint"}),": Called when a player enters a race checkpoint."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"../callbacks/OnPlayerLeaveRaceCheckpoint",children:"OnPlayerLeaveRaceCheckpoint"}),": Called when a player leaves a race checkpoint."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>r});var a=i(96540);const c={},l=a.createContext(c);function t(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);