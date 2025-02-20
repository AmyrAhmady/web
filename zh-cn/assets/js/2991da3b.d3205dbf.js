"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[81468],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const s={},l=r.createContext(s);function i(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:t},e.children)}},84986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/GameTextForPlayer","title":"GameTextForPlayer","description":"Shows \'game text\' (on-screen text) for a certain length of time for a specific player.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/GameTextForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GameTextForPlayer","permalink":"/zh-cn/docs/scripting/functions/GameTextForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GameTextForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/zh-cn/docs/tags/player"},{"inline":true,"label":"gametext","permalink":"/zh-cn/docs/tags/gametext"}],"version":"current","frontMatter":{"title":"GameTextForPlayer","sidebar_label":"GameTextForPlayer","description":"Shows \'game text\' (on-screen text) for a certain length of time for a specific player.","tags":["player","gametext"]},"sidebar":"docsSidebar","previous":{"title":"GameTextForAll","permalink":"/zh-cn/docs/scripting/functions/GameTextForAll"},"next":{"title":"GangZoneCreate","permalink":"/zh-cn/docs/scripting/functions/GangZoneCreate"}}');var s=n(74848),l=n(28453);const i={title:"GameTextForPlayer",sidebar_label:"GameTextForPlayer",description:"Shows 'game text' (on-screen text) for a certain length of time for a specific player.",tags:["player","gametext"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",del:"del",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Shows 'game text' (on-screen text) for a certain length of time for a specific player."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"playerid"}),(0,s.jsx)(t.td,{children:"The ID of the player to show the gametext for."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"const format[]"}),(0,s.jsx)(t.td,{children:"The text to be displayed."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"time"}),(0,s.jsx)(t.td,{children:"The duration of the text being shown in milliseconds."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"style"}),(0,s.jsxs)(t.td,{children:["The ",(0,s.jsx)(t.a,{href:"../resources/gametextstyles",children:"style"})," of text to be displayed."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OPEN_MP_TAGS:..."}),(0,s.jsx)(t.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"true"})," - The function executed successfully. Success is reported when the style and/or time is invalid. Nothing will happen though (no text displayed). May also cause game crashes."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means either the string is null or the player is not connected."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    GameTextForPlayer(playerid, "Wasted", 5000, 2);\n\n    if (killerid != INVALID_PLAYER_ID)\n    {\n        new name[MAX_PLAYER_NAME];\n        GetPlayerName(playerid, name, sizeof(name));\n\n        GameTextForPlayer(killerid, "~w~You killed ~r~%s", 3000, 3, name);\n    }\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsxs)(t.p,{children:["Do note that the players may crash because of odd number of tilde (~) symbols used in the game text. Using color codes (e.g. ",(0,s.jsx)(t.del,{children:"r"}),") beyond the 255th character may crash the client."]}),(0,s.jsxs)(t.p,{children:["Also, a blank space at end of the string may result in faliure. For example: ",(0,s.jsx)(t.code,{children:'"Headshot "'})," results in failure. Instead it should be ",(0,s.jsx)(t.code,{children:'"Headshot"'})," or ",(0,s.jsx)(t.code,{children:'"Headshot_"'}),"."]})]}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"HideGameTextForPlayer",children:"HideGameTextForPlayer"}),": Stop showing a gametext style to a player."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GameTextForAll",children:"GameTextForAll"}),": Display gametext to all players."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"HideGameTextForAll",children:"HideGameTextForAll"}),": Stop showing a gametext style for all players."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetGameText",children:"GetGameText"}),": Gets all the information on the given game text style."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"HasGameText",children:"HasGameText"}),": Does the player currently have text in the given gametext style displayed?"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": Show a textdraw for all players."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../resources/gametextstyles",children:"GameText Styles"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);