"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[99583],{2819:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/TogglePlayerControllable","title":"TogglePlayerControllable","description":"Toggles whether a player can control their character or not.","source":"@site/docs/scripting/functions/TogglePlayerControllable.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TogglePlayerControllable","permalink":"/id/docs/scripting/functions/TogglePlayerControllable","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/TogglePlayerControllable.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"}],"version":"current","frontMatter":{"title":"TogglePlayerControllable","sidebar_label":"TogglePlayerControllable","description":"Toggles whether a player can control their character or not.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"TogglePlayerClock","permalink":"/id/docs/scripting/functions/TogglePlayerClock"},"next":{"title":"TogglePlayerGhostMode","permalink":"/id/docs/scripting/functions/TogglePlayerGhostMode"}}');var n=l(74848),o=l(28453);const s={title:"TogglePlayerControllable",sidebar_label:"TogglePlayerControllable",description:"Toggles whether a player can control their character or not.",tags:["player"]},a=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Toggles whether a player can control their character or not. The player will also be unable to move their camera."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player to toggle the controllability of"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["bool",":controllable"]}),(0,n.jsx)(t.td,{children:"'false' to make them uncontrollable, 'true' to make them controllable."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"false"})," - The function failed to execute. The player specified does not exist."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n     // Freezes a player when they types /freezeme\n     if (strcmp(cmdtext, "/freezeme", true) == 0)\n     {\n          TogglePlayerControllable(playerid, false);\n          return 1;\n     }\n     // Unfreezes a player when they types /unfreezeme\n     if (strcmp(cmdtext, "/unfreezeme", true) == 0)\n     {\n          TogglePlayerControllable(playerid, true);\n          return 1;\n     }\n     return 0;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"IsPlayerControllable",children:"IsPlayerControllable"}),": Check if the player is controllable."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>s,x:()=>a});var r=l(96540);const n={},o=r.createContext(n);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);