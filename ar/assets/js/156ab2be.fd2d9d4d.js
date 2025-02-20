"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[93281],{28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var a=r(96540);const t={},i=a.createContext(t);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(i.Provider,{value:n},e.children)}},94715:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"scripting/functions/GivePlayerWeapon","title":"GivePlayerWeapon","description":"Give a player a weapon with a specified amount of ammo.","source":"@site/docs/scripting/functions/GivePlayerWeapon.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GivePlayerWeapon","permalink":"/ar/docs/scripting/functions/GivePlayerWeapon","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GivePlayerWeapon.md","tags":[{"inline":true,"label":"player","permalink":"/ar/docs/tags/player"}],"version":"current","frontMatter":{"title":"GivePlayerWeapon","sidebar_label":"GivePlayerWeapon","description":"Give a player a weapon with a specified amount of ammo.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GivePlayerMoney","permalink":"/ar/docs/scripting/functions/GivePlayerMoney"},"next":{"title":"HTTP","permalink":"/ar/docs/scripting/functions/HTTP"}}');var t=r(74848),i=r(28453);const s={title:"GivePlayerWeapon",sidebar_label:"GivePlayerWeapon",description:"Give a player a weapon with a specified amount of ammo.",tags:["player"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Give a player a weapon with a specified amount of ammo."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"The ID of the player to give a weapon to."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["WEAPON",":weaponid"]}),(0,t.jsxs)(n.td,{children:["The ",(0,t.jsx)(n.a,{href:"../resources/weaponids",children:"ID of the weapon"})," to give to the player."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ammo"}),(0,t.jsx)(n.td,{children:"The amount of ammo to give to the player."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1"})," - The function was executed successfully."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"0"})," - The function failed to execute. This means the player is not connected."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"GivePlayerWeapon(playerid, WEAPON_SAWEDOFF, 64); // Give playerid a sawn-off shotgun with 64 ammo\n"})}),"\n",(0,t.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"SetPlayerArmedWeapon",children:"SetPlayerArmedWeapon"}),": Set a player's armed weapon."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"GetPlayerWeapon",children:"GetPlayerWeapon"}),": Check what weapon a player is currently holding."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"ResetPlayerWeapons",children:"ResetPlayerWeapons"}),": Removes all weapons from a player."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"RemovePlayerWeapon",children:"RemovePlayerWeapon"}),": Remove a specified weapon from a player."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../resources/weaponids",children:"Weapon IDs"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);