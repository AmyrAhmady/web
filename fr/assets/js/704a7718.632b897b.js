"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[6794],{28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const s={},l=r.createContext(s);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:n},e.children)}},50265:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/IsPlayerNPC","title":"IsPlayerNPC","description":"Check if a player is an actual player or an NPC.","source":"@site/docs/scripting/functions/IsPlayerNPC.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerNPC","permalink":"/fr/docs/scripting/functions/IsPlayerNPC","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsPlayerNPC.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"},{"inline":true,"label":"npc","permalink":"/fr/docs/tags/npc"}],"version":"current","frontMatter":{"title":"IsPlayerNPC","sidebar_label":"IsPlayerNPC","description":"Check if a player is an actual player or an NPC.","tags":["player","npc"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerInVehicle","permalink":"/fr/docs/scripting/functions/IsPlayerInVehicle"},"next":{"title":"IsPlayerObjectMaterialSlotUsed","permalink":"/fr/docs/scripting/functions/IsPlayerObjectMaterialSlotUsed"}}');var s=t(74848),l=t(28453);const i={title:"IsPlayerNPC",sidebar_label:"IsPlayerNPC",description:"Check if a player is an actual player or an NPC.",tags:["player","npc"]},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Check if a player is an actual player or an NPC."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"The ID of the player to check."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"true"})," - The player is an NPC."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"false"})," - The player is not an NPC."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    if (IsPlayerNPC(playerid))\n    {\n        SendClientMessageToAll(-1, "An NPC connected!");\n        return 1;\n    }\n\n    // The other code here won\'t be executed unless its a player\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"ConnectNPC",children:"ConnectNPC"}),": Connect an NPC."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"IsPlayerAdmin",children:"IsPlayerAdmin"}),": Checks if a player is logged into RCON."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);