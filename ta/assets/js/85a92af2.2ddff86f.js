"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[89447],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var o=t(96540);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}},52813:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"scripting/functions/GetWeaponSlot","title":"GetWeaponSlot","description":"Gets the slot of one weapon.","source":"@site/docs/scripting/functions/GetWeaponSlot.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetWeaponSlot","permalink":"/ta/docs/scripting/functions/GetWeaponSlot","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetWeaponSlot.md","tags":[{"inline":true,"label":"weapon","permalink":"/ta/docs/tags/weapon"}],"version":"current","frontMatter":{"title":"GetWeaponSlot","sidebar_label":"GetWeaponSlot","description":"Gets the slot of one weapon.","tags":["weapon"]},"sidebar":"docsSidebar","previous":{"title":"GetWeaponName","permalink":"/ta/docs/scripting/functions/GetWeaponName"},"next":{"title":"GetWeather","permalink":"/ta/docs/scripting/functions/GetWeather"}}');var s=t(74848),r=t(28453);const a={title:"GetWeaponSlot",sidebar_label:"GetWeaponSlot",description:"Gets the slot of one weapon.",tags:["weapon"]},l=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("versionWarn",{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Gets the slot of one weapon."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["WEAPON",":weaponid"]}),(0,s.jsx)(n.td,{children:"The ID of the weapon to get the slot of."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:["The number of the ",(0,s.jsx)(n.a,{href:"../resources/weaponslots",children:"weapon slot"})," (0 - 12)"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/weaponslot", true) == 0)\n    {\n        new WEAPON:weaponid = GetPlayerWeapon(playerid); // will store the id of the weapon the player is currently holding\n        new WEAPON_SLOT:slot = GetWeaponSlot(weaponid); // will store the id of the weapon slot\n        SendClientMessage(playerid, -1, "Your weapon is occupying the slot %d.", slot); // sends a formatted message to the player\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GetPlayerWeapon",children:"GetPlayerWeapon"}),": Gets the ID of the weapon a player is currently holding."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GetPlayerWeaponData",children:"GetPlayerWeaponData"}),": Get the weapon and ammo in a specific player's weapon slot (e.g. the weapon in the 'SMG' slot)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GetPlayerAmmo",children:"GetPlayerAmmo"}),": Gets the amount of ammo in a player's current weapon."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"SetPlayerArmedWeapon",children:"SetPlayerArmedWeapon"}),": Sets which weapon (that a player already has) the player is holding."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"ResetPlayerWeapons",children:"ResetPlayerWeapon"}),": Removes all weapons from a player."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"RemovePlayerWeapon",children:"RemovePlayerWeapon"}),": Remove a specified weapon from a player."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../resources/weaponslots",children:"Weapon Slots"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);