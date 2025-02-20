"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[11482],{28453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>i});var r=l(96540);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}},83985:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/IsPlayerControllable","title":"IsPlayerControllable","description":"Check if the player is controllable.","source":"@site/docs/scripting/functions/IsPlayerControllable.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerControllable","permalink":"/id/docs/scripting/functions/IsPlayerControllable","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsPlayerControllable.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"}],"version":"current","frontMatter":{"title":"IsPlayerControllable","sidebar_label":"IsPlayerControllable","description":"Check if the player is controllable.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerConnected","permalink":"/id/docs/scripting/functions/IsPlayerConnected"},"next":{"title":"IsPlayerCuffed","permalink":"/id/docs/scripting/functions/IsPlayerCuffed"}}');var t=l(74848),o=l(28453);const s={title:"IsPlayerControllable",sidebar_label:"IsPlayerControllable",description:"Check if the player is controllable.",tags:["player"]},i=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{VersionWarn:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l,{version:"omp v1.1.0.2612"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Check if the player is controllable."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"The ID of the player."})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"true"})," - Controllable"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"false"})," - Uncontrollable"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    // Unfreeze the player if it is freezed\n    if (IsPlayerControllable(playerid) == false)\n    {\n        TogglePlayerControllable(playerid, true);\n    }\n\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"TogglePlayerControllable",children:"TogglePlayerControllable"}),": Toggles whether a player can control their character or not. The player will also be unable to move their camera."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);