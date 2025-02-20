"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[84500],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(96540);const o={},r=s.createContext(o);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:t},e.children)}},61376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"scripting/functions/SetPlayerAmmo","title":"SetPlayerAmmo","description":"Set the ammo of a player\'s weapon.","source":"@site/docs/scripting/functions/SetPlayerAmmo.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerAmmo","permalink":"/es/docs/scripting/functions/SetPlayerAmmo","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerAmmo.md","tags":[{"inline":true,"label":"player","permalink":"/es/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerAmmo","sidebar_label":"SetPlayerAmmo","description":"Set the ammo of a player\'s weapon.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerAdmin","permalink":"/es/docs/scripting/functions/SetPlayerAdmin"},"next":{"title":"SetPlayerArmedWeapon","permalink":"/es/docs/scripting/functions/SetPlayerArmedWeapon"}}');var o=n(74848),r=n(28453);const a={title:"SetPlayerAmmo",sidebar_label:"SetPlayerAmmo",description:"Set the ammo of a player's weapon.",tags:["player"]},i=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"Set the ammo of a player's weapon."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"playerid"}),(0,o.jsx)(t.td,{children:"The ID of the player to set the weapon ammo of."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["WEAPON",":weaponid"]}),(0,o.jsx)(t.td,{children:"The ID of the weapon to set the ammo of. (not the weaponslot as in samp include)"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"ammo"}),(0,o.jsx)(t.td,{children:"The amount of ammo to set."})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"1"})," - The function was executed successfully. Success is also returned when the weapon slot specified is invalid (not 0-12)."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"0"})," - The function failed to execute. The player isn't connected."]}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:"SetPlayerAmmo(playerid, WEAPON_SHOTGUN, 100); // Set ammo of Shotgun to 100 bullets\n"})}),"\n",(0,o.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"The param 'weaponslot' is a typo in the sa-mp include. You must use the weapon ID and not the weapon slot of the weapon you would like to set the ammo of."})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["Set the ammo to 0 to remove a weapon from a player's inventory. Note that the weapon will still show up in ",(0,o.jsx)(t.a,{href:"GetPlayerWeaponData",children:"GetPlayerWeaponData"}),", albeit with 0 ammo."]})}),"\n",(0,o.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GetPlayerAmmo",children:"GetPlayerAmmo"}),": Check how much ammo a player has in the specified slot."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GivePlayerWeapon",children:"GivePlayerWeapon"}),": Give a player a weapon."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"SetPlayerArmedWeapon",children:"SetPlayerArmedWeapon"}),": Set a player's armed weapon."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);