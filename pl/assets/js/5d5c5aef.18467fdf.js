"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[85579],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const l={},i=r.createContext(l);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(i.Provider,{value:t},e.children)}},69949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/IsPlayerTeleportAllowed","title":"IsPlayerTeleportAllowed","description":"Can this player teleport by right-clicking on the map?","source":"@site/docs/scripting/functions/IsPlayerTeleportAllowed.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerTeleportAllowed","permalink":"/pl/docs/scripting/functions/IsPlayerTeleportAllowed","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsPlayerTeleportAllowed.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"}],"version":"current","frontMatter":{"title":"IsPlayerTeleportAllowed","sidebar_label":"IsPlayerTeleportAllowed","description":"Can this player teleport by right-clicking on the map?","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerStreamedIn","permalink":"/pl/docs/scripting/functions/IsPlayerStreamedIn"},"next":{"title":"IsPlayerTextDrawVisible","permalink":"/pl/docs/scripting/functions/IsPlayerTextDrawVisible"}}');var l=n(74848),i=n(28453);const s={title:"IsPlayerTeleportAllowed",sidebar_label:"IsPlayerTeleportAllowed",description:"Can this player teleport by right-clicking on the map?",tags:["player"]},o=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Can this player teleport by right-clicking on the map?"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player to allow teleport."})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"true"})," - Player is allowed."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"false"})," - Player is not allowed."]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:"public OnPlayerConnect(playerid)\n{\n    AllowPlayerTeleport(playerid, true);\n    return 1;\n}\n\npublic OnPlayerSpawn(playerid)\n{\n    if (IsPlayerTeleportAllowed(playerid))\n    {\n        // Do something\n    }\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"AllowPlayerTeleport",children:"AllowPlayerTeleport"}),": Sets the player as an RCON admin."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);