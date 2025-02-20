"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[46547],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(96540);const i={},l=r.createContext(i);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:n},e.children)}},38521:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"scripting/functions/GetPlayerMenu","title":"GetPlayerMenu","description":"Gets the ID of the menu the player is currently viewing (shown by ShowMenuForPlayer).","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerMenu.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerMenu","permalink":"/th/docs/scripting/functions/GetPlayerMenu","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerMenu.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"},{"inline":true,"label":"menu","permalink":"/th/docs/tags/menu"}],"version":"current","frontMatter":{"title":"GetPlayerMenu","sidebar_label":"GetPlayerMenu","description":"Gets the ID of the menu the player is currently viewing (shown by ShowMenuForPlayer).","tags":["player","menu"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerMarkerForPlayer","permalink":"/th/docs/scripting/functions/GetPlayerMarkerForPlayer"},"next":{"title":"GetPlayerMoney","permalink":"/th/docs/scripting/functions/GetPlayerMoney"}}');var i=t(74848),l=t(28453);const s={title:"GetPlayerMenu",sidebar_label:"GetPlayerMenu",description:"Gets the ID of the menu the player is currently viewing (shown by ShowMenuForPlayer).",tags:["player","menu"]},a=void 0,o={},u=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,i.jsx)(n.p,{children:"Gets the ID of the menu the player is currently viewing (shown by ShowMenuForPlayer)."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to get the current menu of."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,i.jsx)(n.p,{children:"The ID of the player's currently shown menu, or INVALID_MENU (255) if no menu shown. Value returned is tagged with Menu:."}),"\n",(0,i.jsx)(n.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new Menu:CurrentMenu = GetPlayerMenu(playerid); // Store the player's current menu in 'CurrentMenu'\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Returns previous menu when none is displayed."})}),"\n",(0,i.jsx)(n.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ShowMenuForPlayer: Show a menu for a player."}),"\n",(0,i.jsx)(n.li,{children:"HideMenuForPlayer: Hide a menu for a player."}),"\n",(0,i.jsx)(n.li,{children:"CreateMenu: Create a menu."}),"\n",(0,i.jsx)(n.li,{children:"DestroyMenu: Destroy a menu."}),"\n",(0,i.jsx)(n.li,{children:"AddMenuItem: Add an item to a menu."}),"\n",(0,i.jsx)(n.li,{children:"OnPlayerSelectedMenuRow: Called when a player selected a row in a menu."}),"\n",(0,i.jsx)(n.li,{children:"OnPlayerExitedMenu: Called when a player exits a menu."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);