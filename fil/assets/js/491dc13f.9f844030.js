"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[5262],{26126:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/functions/HideMenuForPlayer","title":"HideMenuForPlayer","description":"Hides a menu for a player.","source":"@site/docs/scripting/functions/HideMenuForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/HideMenuForPlayer","permalink":"/fil/docs/scripting/functions/HideMenuForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/HideMenuForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"},{"inline":true,"label":"menu","permalink":"/fil/docs/tags/menu"}],"version":"current","frontMatter":{"title":"HideMenuForPlayer","sidebar_label":"HideMenuForPlayer","description":"Hides a menu for a player.","tags":["player","menu"]},"sidebar":"docsSidebar","previous":{"title":"HideGameTextForPlayer","permalink":"/fil/docs/scripting/functions/HideGameTextForPlayer"},"next":{"title":"HideObjectForPlayer","permalink":"/fil/docs/scripting/functions/HideObjectForPlayer"}}');var i=r(74848),l=r(28453);const s={title:"HideMenuForPlayer",sidebar_label:"HideMenuForPlayer",description:"Hides a menu for a player.",tags:["player","menu"]},a=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Hides a menu for a player."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Menu",":menuid"]}),(0,i.jsxs)(n.td,{children:["The ID of the menu to hide. Returned by CreateMenu and passed to ",(0,i.jsx)(n.a,{href:"../callbacks/OnPlayerSelectedMenuRow",children:"OnPlayerSelectedMenuRow"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player that the menu will be hidden for."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"false"})," - The function failed to execute."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/menuhide", true) == 0)\n    {\n        new Menu:myMenu = GetPlayerMenu(playerid);\n        HideMenuForPlayer(myMenu, playerid);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Crashes the both server and player if an invalid menu ID given. (Fixed in open.mp)"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["This function has always taken a menu ID parameter, but in SA",":MP"," this ID was not used. So whatever value was given the player's current menu would be closed, even if they weren't looking at the one you said to close."]}),(0,i.jsx)(n.p,{children:"Old code may have looked like:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'gShopMenu = CreateMenu("text", 2, 100.0, 30.0, 7.0);\n\nHideMenuForPlayer(gShopMenu, playerid);\n'})}),(0,i.jsx)(n.p,{children:"That would always close the player's current menu, regardless of which one they were actually looking at. Now you will need to remember which one they are looking at, or just get it:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'gShopMenu = CreateMenu("text", 2, 100.0, 30.0, 7.0);\n\nHideMenuForPlayer(GetPlayerMenu(playerid), playerid);\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"CreateMenu",children:"CreateMenu"}),": Create a menu."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"AddMenuItem",children:"AddMenuItem"}),": Adds an item to a specified menu."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SetMenuColumnHeader",children:"SetMenuColumnHeader"}),": Set the header for one of the columns in a menu."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"ShowMenuForPlayer",children:"ShowMenuForPlayer"}),": Show a menu for a player."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(96540);const i={},l=t.createContext(i);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);