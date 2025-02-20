"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[19142],{28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(96540);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}},80080:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"scripting/functions/GetWeaponName","title":"GetWeaponName","description":"Get the name of a weapon.","source":"@site/docs/scripting/functions/GetWeaponName.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetWeaponName","permalink":"/sr/docs/scripting/functions/GetWeaponName","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetWeaponName.md","tags":[],"version":"current","frontMatter":{"title":"GetWeaponName","sidebar_label":"GetWeaponName","description":"Get the name of a weapon.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GetVehicles","permalink":"/sr/docs/scripting/functions/GetVehicles"},"next":{"title":"GetWeaponSlot","permalink":"/sr/docs/scripting/functions/GetWeaponSlot"}}');var i=t(74848),s=t(28453);const r={title:"GetWeaponName",sidebar_label:"GetWeaponName",description:"Get the name of a weapon.",tags:[]},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Get the name of a weapon."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["WEAPON",":weaponid"]}),(0,i.jsx)(n.td,{children:"The ID of the weapon to get the name of."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"weapon[]"}),(0,i.jsx)(n.td,{children:"An array to store the weapon's name in, passed by reference."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"len = sizeof (weapon)"}),(0,i.jsx)(n.td,{children:"The maximum length of the weapon name to store. Should be sizeof(name)."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"false"})," - The function failed to execute. The weapon specified does not exist."]}),"\n",(0,i.jsx)(n.p,{children:"The weapon's name is stored in the specified array."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    // Variable declarations, with killerName having the default value of "World".\n    new\n        weaponName[32],\n        string[64],\n        playerName[MAX_PLAYER_NAME],\n        killerName[MAX_PLAYER_NAME] = "World";\n\n    // Get the weapon/ reason and player name\n    GetWeaponName(reason, weaponName, sizeof(weaponName));\n    GetPlayerName(playerid, playerName, sizeof(playerName));\n\n    // Check if the player was killed by another player or was it because of environment\n    if (killerid != INVALID_PLAYER_ID)\n    {\n        // We empty the killerName string by setting the first index to EOS (End of String)\n        killerName[0] = EOS;\n        // Get the killer\'s name\n        GetPlayerName(killerid, killerName, sizeof(killerName));\n    }\n\n    // Send a message to the public chat that the X has caused death of Y with Z as the reason\n    format(string, sizeof(string), "%s (%i) has wasted %s (%i) using a %s.", killerName, killerid, playerName, playerid, weaponName);\n    SendClientMessageToAll(0xFFFFFFAA, string);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPlayerWeapon",children:"GetPlayerWeapon"}),": Check what weapon a player is currently holding."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"AllowInteriorWeapons",children:"AllowInteriorWeapons"}),": Determine if weapons can be used in interiors."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GivePlayerWeapon",children:"GivePlayerWeapon"}),": Give a player a weapon."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);