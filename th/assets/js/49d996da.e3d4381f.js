"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[1519],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var i=t(96540);const r={},c=i.createContext(r);function l(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(c.Provider,{value:n},e.children)}},44949:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/SetPlayerCheckpoint","title":"SetPlayerCheckpoint","description":"Sets a checkpoint (red cylinder) for a player.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerCheckpoint.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerCheckpoint","permalink":"/th/docs/scripting/functions/SetPlayerCheckpoint","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerCheckpoint.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/th/docs/tags/checkpoint"}],"version":"current","frontMatter":{"title":"SetPlayerCheckpoint","sidebar_label":"SetPlayerCheckpoint","description":"Sets a checkpoint (red cylinder) for a player.","tags":["player","checkpoint"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerChatBubble","permalink":"/th/docs/scripting/functions/SetPlayerChatBubble"},"next":{"title":"SetPlayerColor","permalink":"/th/docs/scripting/functions/SetPlayerColor"}}');var r=t(74848),c=t(28453);const l={title:"SetPlayerCheckpoint",sidebar_label:"SetPlayerCheckpoint",description:"Sets a checkpoint (red cylinder) for a player.",tags:["player","checkpoint"]},a=void 0,s={},o=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,r.jsx)(n.p,{children:"Sets a checkpoint (red cylinder) for a player. Also shows a red blip on the radar. When players enter a checkpoint, OnPlayerEnterCheckpoint is called and actions can be performed."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player for whom to set a checkpoint."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":x"]}),(0,r.jsx)(n.td,{children:"The X coordinate to set the checkpoint at."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":y"]}),(0,r.jsx)(n.td,{children:"The Y coordinate to set the checkpoint at."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":z"]}),(0,r.jsx)(n.td,{children:"The Z coordinate to set the checkpoint at."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":size"]}),(0,r.jsx)(n.td,{children:"The size of the checkpoint."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,r.jsx)(n.p,{children:"1: The function executed successfully."}),"\n",(0,r.jsx)(n.p,{children:"0: The function failed to execute. This means the player specified does not exist."}),"\n",(0,r.jsx)(n.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"// In this example the player's checkpoint will be set when they spawn.\n// On entering the checkpoint they will receive $1000 and the checkpoint will be disabled.\n\nnew bool:onCheck[MAX_PLAYERS];\n\npublic OnPlayerSpawn(playerid)\n{\n    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);\n    onCheck[playerid] = true;\n    return 1;\n}\n\npublic OnPlayerEnterCheckpoint(playerid)\n{\n    if (onCheck[playerid]) // if it's true\n    {\n        GivePlayerMoney(playerid, 1000);\n        DisablePlayerCheckpoint(playerid);\n        onCheck[playerid] = false;\n    }\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Checkpoints are asynchronous, meaning only one can be shown at a time. To 'stream' checkpoints (only show them when players are close enough), use a checkpoint streamer."})}),"\n",(0,r.jsx)(n.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"DisablePlayerCheckpoint: Disable the player's current checkpoint."}),"\n",(0,r.jsx)(n.li,{children:"IsPlayerInCheckpoint: Check if a player is in a checkpoint."}),"\n",(0,r.jsx)(n.li,{children:"SetPlayerRaceCheckpoint: Create a race checkpoint for a player."}),"\n",(0,r.jsx)(n.li,{children:"DisablePlayerRaceCheckpoint: Disable the player's current race checkpoint."}),"\n",(0,r.jsx)(n.li,{children:"IsPlayerInRaceCheckpoint: Check if a player is in a race checkpoint."}),"\n",(0,r.jsx)(n.li,{children:"OnPlayerEnterCheckpoint: Called when a player enters a checkpoint."}),"\n",(0,r.jsx)(n.li,{children:"OnPlayerLeaveCheckpoint: Called when a player leaves a checkpoint."}),"\n",(0,r.jsx)(n.li,{children:"OnPlayerEnterRaceCheckpoint: Called when a player enters a race checkpoint."}),"\n",(0,r.jsx)(n.li,{children:"OnPlayerLeaveRaceCheckpoint: Called when a player leaves a race checkpoint."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);