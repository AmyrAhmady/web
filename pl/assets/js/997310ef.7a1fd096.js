"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[13001],{1406:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/GetPlayerArmour","title":"GetPlayerArmour","description":"This function stores the armour of a player into a variable.","source":"@site/docs/scripting/functions/GetPlayerArmour.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerArmour","permalink":"/pl/docs/scripting/functions/GetPlayerArmour","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerArmour.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerArmour","sidebar_label":"GetPlayerArmour","description":"This function stores the armour of a player into a variable.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerAnimationIndex","permalink":"/pl/docs/scripting/functions/GetPlayerAnimationIndex"},"next":{"title":"GetPlayerAttachedObject","permalink":"/pl/docs/scripting/functions/GetPlayerAttachedObject"}}');var i=r(74848),s=r(28453);const a={title:"GetPlayerArmour",sidebar_label:"GetPlayerArmour",description:"This function stores the armour of a player into a variable.",tags:["player"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"This function stores the armour of a player into a variable."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player that you want to get the armour of."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&Float",":armour"]}),(0,i.jsx)(t.td,{children:"The float to to store the armour in, passed by reference."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"1"})," - success"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"0"})," - failure (i.e. player not connected)."]}),"\n",(0,i.jsx)(t.p,{children:"The player's armour is stored in the specified variable."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/myarmour", true))\n    {\n\t\tnew string[40];\n\n\t\tnew Float:armour;\n\t\tGetPlayerArmour(playerid, armour);\n\n\t\tformat(string, sizeof(string), "SERVER: Your armour is %.2f percent", armour);\n\t\tSendClientMessage(playerid, 0xFFFFFFAA, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"Even though the armour can be set to near infinite values on the server side, the individual clients will only report values up to 255. Anything higher will wrap around; 256 becomes 0, 257 becomes 1, etc. Armour is obtained rounded to integers: set 50.15, but get 50.0"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerArmour",children:"SetPlayerArmour"}),": Set the armour of a player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerHealth",children:"GetPlayerHealth"}),": Find out how much health a player has."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetVehicleHealth",children:"GetVehicleHealth"}),": Check the health of a vehicle."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>l});var n=r(96540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);