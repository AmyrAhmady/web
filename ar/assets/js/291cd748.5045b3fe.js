"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[36339],{28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var a=t(96540);const l={},c=a.createContext(l);function r(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(c.Provider,{value:n},e.children)}},36260:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"scripting/callbacks/OnPlayerEnterCheckpoint","title":"OnPlayerEnterCheckpoint","description":"This callback is called when a player enters the checkpoint set for that player.","source":"@site/docs/scripting/callbacks/OnPlayerEnterCheckpoint.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEnterCheckpoint","permalink":"/ar/docs/scripting/callbacks/OnPlayerEnterCheckpoint","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerEnterCheckpoint.md","tags":[{"inline":true,"label":"player","permalink":"/ar/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/ar/docs/tags/checkpoint"}],"version":"current","frontMatter":{"title":"OnPlayerEnterCheckpoint","sidebar_label":"OnPlayerEnterCheckpoint","description":"This callback is called when a player enters the checkpoint set for that player.","tags":["player","checkpoint"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEditObject","permalink":"/ar/docs/scripting/callbacks/OnPlayerEditObject"},"next":{"title":"OnPlayerEnterGangZone","permalink":"/ar/docs/scripting/callbacks/OnPlayerEnterGangZone"}}');var l=t(74848),c=t(28453);const r={title:"OnPlayerEnterCheckpoint",sidebar_label:"OnPlayerEnterCheckpoint",description:"This callback is called when a player enters the checkpoint set for that player.",tags:["player","checkpoint"]},i=void 0,s={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components},{TipNPCCallbacks:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This callback is called when a player enters the checkpoint set for that player."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The player who entered the checkpoint."})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"It is always called first in filterscripts."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"//In this example, a checkpoint is created for the player when spawning,\n//which creates a vehicle and disables the checkpoint.\npublic OnPlayerSpawn(playerid)\n{\n    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);\n    return 1;\n}\n\npublic OnPlayerEnterCheckpoint(playerid)\n{\n    CreateVehicle(520, 1982.6150, -221.0145, -0.2432, 82.2873, -1, -1, 60000);\n    DisablePlayerCheckpoint(playerid);\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(t,{}),"\n",(0,l.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerLeaveCheckpoint",children:"OnPlayerLeaveCheckpoint"}),": This callback is called when a player leaves a checkpoint."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerEnterRaceCheckpoint",children:"OnPlayerEnterRaceCheckpoint"}),": This callback is called when a player enters a race checkpoint."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerLeaveRaceCheckpoint",children:"OnPlayerLeaveRaceCheckpoint"}),": This callback is called when a player leaves a race checkpoint."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/SetPlayerCheckpoint",children:"SetPlayerCheckpoint"}),": Create a checkpoint for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/DisablePlayerCheckpoint",children:"DisablePlayerCheckpoint"}),": Disable the player's current checkpoint."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/IsPlayerInRaceCheckpoint",children:"IsPlayerInCheckpoint"}),": Check if a player is in a checkpoint."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/SetPlayerRaceCheckpoint",children:"SetPlayerRaceCheckpoint"}),": Create a race checkpoint for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/DisablePlayerRaceCheckpoint",children:"DisablePlayerRaceCheckpoint"}),": Disable the player's current race checkpoint."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/IsPlayerInRaceCheckpoint",children:"IsPlayerInRaceCheckpoint"}),": Check if a player is in a race checkpoint."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}}}]);