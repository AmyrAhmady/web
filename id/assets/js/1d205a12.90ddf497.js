"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[30117],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var l=n(96540);const r={},i=l.createContext(r);function a(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(i.Provider,{value:t},e.children)}},82115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"scripting/functions/SetPlayerHealth","title":"SetPlayerHealth","description":"Set the health of a player.","source":"@site/docs/scripting/functions/SetPlayerHealth.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerHealth","permalink":"/id/docs/scripting/functions/SetPlayerHealth","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerHealth.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerHealth","sidebar_label":"SetPlayerHealth","description":"Set the health of a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerGravity","permalink":"/id/docs/scripting/functions/SetPlayerGravity"},"next":{"title":"SetPlayerHoldingObject","permalink":"/id/docs/scripting/functions/SetPlayerHoldingObject"}}');var r=n(74848),i=n(28453);const a={title:"SetPlayerHealth",sidebar_label:"SetPlayerHealth",description:"Set the health of a player.",tags:["player"]},s=void 0,h={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Set the health of a player."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to set the health of."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":health"]}),(0,r.jsx)(t.td,{children:"The value to set the player's health to. Max health that can be displayed in the HUD is 100, though higher values are valid."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means the player specified does not exist."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp("/heal", cmdtext, true))\n    {\n        // Sets the players health to full\n        SetPlayerHealth(playerid, 100.0);\n        return 1;\n    }\n    if (!strcmp("/kill", cmdtext, true))\n    {\n        // Kills the players\n        SetPlayerHealth(playerid, 0.0);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"If a player's health is set to 0.0 or a minus value, they will die instantly."}),"\n",(0,r.jsx)(t.li,{children:"If a player's health is below 10.0 or above 98303.0, their health bar will flash."}),"\n"]})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Health is obtained rounded to integers: set 50.15, but get 50.0"})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerHealth",children:"GetPlayerHealth"}),": Find out how much health a player has."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerArmour",children:"GetPlayerArmour"}),": Find out how much armour a player has."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetPlayerArmour",children:"SetPlayerArmour"}),": Set the armour of a player."]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);