"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[31602],{28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>a});var n=r(96540);const s={},i=n.createContext(s);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}},57539:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/SetPlayerArmour","title":"SetPlayerArmour","description":"Set a player\'s armor level.","source":"@site/docs/scripting/functions/SetPlayerArmour.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerArmour","permalink":"/es/docs/scripting/functions/SetPlayerArmour","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerArmour.md","tags":[{"inline":true,"label":"player","permalink":"/es/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerArmour","sidebar_label":"SetPlayerArmour","description":"Set a player\'s armor level.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerArmedWeapon","permalink":"/es/docs/scripting/functions/SetPlayerArmedWeapon"},"next":{"title":"SetPlayerAttachedObject","permalink":"/es/docs/scripting/functions/SetPlayerAttachedObject"}}');var s=r(74848),i=r(28453);const l={title:"SetPlayerArmour",sidebar_label:"SetPlayerArmour",description:"Set a player's armor level.",tags:["player"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Set a player's armor level."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"playerid"}),(0,s.jsx)(t.td,{children:"The ID of the player to set the armour of."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":armour"]}),(0,s.jsx)(t.td,{children:"The amount of armour to set, as a percentage (float). Values larger than 100 are valid, but won't be displayed in the HUD's armour bar."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"1"})," - The function was executed successfully."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"0"})," - The function failed to execute. This means the player specified does not exist."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    // Give players full armour (100%) when they spawn.\n    SetPlayerArmour(playerid, 100.0);\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"The function's name is armour, not armor (Americanized). This is inconsistent with the rest of SA-MP, so remember that."})}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"Armour is obtained rounded to integers: set 50.15, but get 50.0"})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayerArmour",children:"GetPlayerArmour"}),": Find out how much armour a player has."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetPlayerHealth",children:"SetPlayerHealth"}),": Set a player's health."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayerHealth",children:"GetPlayerHealth"}),": Find out how much health a player has."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);