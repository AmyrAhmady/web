"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[57280],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var r=t(96540);const i={},o=r.createContext(i);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(o.Provider,{value:n},e.children)}},86820:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/GivePlayerMoney","title":"GivePlayerMoney","description":"Give money to or take money from a player.","source":"@site/docs/scripting/functions/GivePlayerMoney.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GivePlayerMoney","permalink":"/ru/docs/scripting/functions/GivePlayerMoney","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GivePlayerMoney.md","tags":[{"inline":true,"label":"player","permalink":"/ru/docs/tags/player"}],"version":"current","frontMatter":{"title":"GivePlayerMoney","sidebar_label":"GivePlayerMoney","description":"Give money to or take money from a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetWorldTime","permalink":"/ru/docs/scripting/functions/GetWorldTime"},"next":{"title":"GivePlayerWeapon","permalink":"/ru/docs/scripting/functions/GivePlayerWeapon"}}');var i=t(74848),o=t(28453);const l={title:"GivePlayerMoney",sidebar_label:"GivePlayerMoney",description:"Give money to or take money from a player.",tags:["player"]},s=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Give money to or take money from a player."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to give money to or take money from."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"money"}),(0,i.jsx)(n.td,{children:"The amount of money to give the player. Use a minus value to take money."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"1"})," - The function was executed successfully."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"0"})," - The function failed to execute. This means the player is not connected."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    if (killerid != INVALID_PLAYER_ID)\n    {\n       // Award $1000 to the killer\n       GivePlayerMoney(killerid, 1000);\n       SendClientMessage(killerid, -1, "You have been awarded $1000 for the kill.");\n    }\n\n    // Take $500 from the player who died.\n    GivePlayerMoney(playerid, -500);\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"ResetPlayerMoney",children:"ResetPlayerMoney"}),": Set the money of a player to $0."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPlayerMoney",children:"GetPlayerMoney"}),": Check how much money a player has."]}),"\n"]})]})}function y(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);