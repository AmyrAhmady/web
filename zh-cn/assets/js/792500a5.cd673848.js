"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[62990],{6179:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/GetPlayerWeapon","title":"GetPlayerWeapon","description":"Returns the ID of the weapon a player is currently holding.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerWeapon.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerWeapon","permalink":"/zh-cn/docs/scripting/functions/GetPlayerWeapon","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerWeapon.md","tags":[{"inline":true,"label":"player","permalink":"/zh-cn/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerWeapon","sidebar_label":"GetPlayerWeapon","description":"Returns the ID of the weapon a player is currently holding.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerWantedLevel","permalink":"/zh-cn/docs/scripting/functions/GetPlayerWantedLevel"},"next":{"title":"GetPlayerWeaponData","permalink":"/zh-cn/docs/scripting/functions/GetPlayerWeaponData"}}');var i=t(74848),a=t(28453);const s={title:"GetPlayerWeapon",sidebar_label:"GetPlayerWeapon",description:"Returns the ID of the weapon a player is currently holding.",tags:["player"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Returns the ID of the weapon a player is currently holding."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to get the currently held weapon of."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"The ID of the player's current weapon. Returns -1 if the player specified does not exist."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    // Check if the killerid is not an invalid player (which means is connected).\n    if (killerid != INVALID_PLAYER_ID)\n    {\n        // The WEAPON_MINIGUN constant is pre-defined in the standard library and is equal to 38.\n        if (GetPlayerWeapon(killerid) == WEAPON_MINIGUN)\n        {\n            //Ban if they have a minigun\n            Ban(killerid);\n        }\n    }\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["When the player state is ",(0,i.jsx)(n.code,{children:"PLAYER_STATE_DRIVER"})," or ",(0,i.jsx)(n.code,{children:"PLAYER_STATE_PASSENGER"})," this function returns the weapon held by the player before they entered the vehicle. If a cheat is used to spawn a weapon inside a vehicle, this function will not report it."]})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Sometimes the result can be -1 which is an invalid weapon ID. Circumstances of this are not yet known, but it is best to discard information when returned weapon is -1."})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPlayerWeaponData",children:"GetPlayerWeaponData"}),": Find out information about weapons a player has."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GivePlayerWeapon",children:"GivePlayerWeapon"}),": Give a player a weapon."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"ResetPlayerWeapons",children:"ResetPlayerWeapons"}),": Remove all weapons from a player."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"RemovePlayerWeapon",children:"RemovePlayerWeapon"}),": Remove a specified weapon from a player."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../resources/weaponids",children:"Weapon IDs"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(96540);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);