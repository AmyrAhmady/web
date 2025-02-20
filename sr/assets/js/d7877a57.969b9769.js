"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[30827],{10286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"scripting/functions/GameTextForAll","title":"GameTextForAll","description":"Shows \'game text\' (on-screen text) for a certain length of time for all players.","source":"@site/docs/scripting/functions/GameTextForAll.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GameTextForAll","permalink":"/sr/docs/scripting/functions/GameTextForAll","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GameTextForAll.md","tags":[{"inline":true,"label":"gametext","permalink":"/sr/docs/tags/gametext"}],"version":"current","frontMatter":{"title":"GameTextForAll","sidebar_label":"GameTextForAll","description":"Shows \'game text\' (on-screen text) for a certain length of time for all players.","tags":["gametext"]},"sidebar":"docsSidebar","previous":{"title":"GameModeExit","permalink":"/sr/docs/scripting/functions/GameModeExit"},"next":{"title":"GameTextForPlayer","permalink":"/sr/docs/scripting/functions/GameTextForPlayer"}}');var r=n(74848),l=n(28453);const a={title:"GameTextForAll",sidebar_label:"GameTextForAll",description:"Shows 'game text' (on-screen text) for a certain length of time for all players.",tags:["gametext"]},i=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",del:"del",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Shows 'game text' (on-screen text) for a certain length of time for all players."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"const format[]"}),(0,r.jsx)(t.td,{children:"The text to be displayed."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"time"}),(0,r.jsx)(t.td,{children:"The duration of the text being shown in milliseconds."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"style"}),(0,r.jsxs)(t.td,{children:["The ",(0,r.jsx)(t.a,{href:"../resources/gametextstyles",children:"style"})," of text to be displayed."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"OPEN_MP_TAGS:..."}),(0,r.jsx)(t.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"This function always returns 1."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    // This example shows a large, white text saying "[playerName] has\n    // passed away" on everyone\'s screen, after a player has died or\n    // has been killed. It shows in text-type 3, for 5 seconds (5000 ms)\n    new name[MAX_PLAYER_NAME];\n    GetPlayerName(playerid, name, sizeof(name));\n\n    // Format the passed-away message properly, and show it to everyone:\n    new string[64];\n    format(string, sizeof(string), "~w~%s has passed away", name);\n    GameTextForAll(string, 5000, 3);\n\n    // PRO TIP: You don\'t need `format` in open.mp\n    GameTextForAll("~w~%s has passed away", 5000, 3, name);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Do note that the players may crash because of odd number of tilde (~) symbols used in the game text. Using color codes (e.g. ",(0,r.jsx)(t.del,{children:"r"}),") beyond the 255th character may crash the client."]})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"HideGameTextForAll",children:"HideGameTextForAll"}),": Stop showing a gametext style for all players."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GameTextForPlayer",children:"GameTextForPlayer"}),": Display gametext to a player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"HideGameTextForPlayer",children:"HideGameTextForPlayer"}),": Stop showing a gametext style to a player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": Show a textdraw for all players."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"../resources/gametextstyles",children:"GameText Styles"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(96540);const r={},l=s.createContext(r);function a(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);