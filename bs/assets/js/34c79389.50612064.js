"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[27765],{28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var s=r(96540);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}},96599:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"scripting/functions/RemovePlayerWeapon","title":"RemovePlayerWeapon","description":"Remove a specified weapon from a player.","source":"@site/docs/scripting/functions/RemovePlayerWeapon.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/RemovePlayerWeapon","permalink":"/bs/docs/scripting/functions/RemovePlayerWeapon","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/RemovePlayerWeapon.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"RemovePlayerWeapon","sidebar_label":"RemovePlayerWeapon","description":"Remove a specified weapon from a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"RemovePlayerMapIcon","permalink":"/bs/docs/scripting/functions/RemovePlayerMapIcon"},"next":{"title":"RemoveServerRule","permalink":"/bs/docs/scripting/functions/RemoveServerRule"}}');var t=r(74848),o=r(28453);const a={title:"RemovePlayerWeapon",sidebar_label:"RemovePlayerWeapon",description:"Remove a specified weapon from a player.",tags:["player"]},i=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{VersionWarn:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Remove a specified weapon from a player."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"The ID of the player whose weapon to remove."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["WEAPON",":weaponid"]}),(0,t.jsxs)(n.td,{children:["The ",(0,t.jsx)(n.a,{href:"../resources/weaponids",children:"ID of the weapon"})," to remove."]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"false"})," - The function failed to execute. This means the player is not connected."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"RemovePlayerWeapon(playerid, WEAPON_DEAGLE); // Remove the Desert-Eagle from the player\n"})}),"\n",(0,t.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"GivePlayerWeapon",children:"GivePlayerWeapon"}),": Give a player a weapon."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"ResetPlayerWeapons",children:"ResetPlayerWeapons"}),": Removes all weapons from a player."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"SetPlayerArmedWeapon",children:"SetPlayerArmedWeapon"}),": Set a player's armed weapon."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"GetPlayerWeapon",children:"GetPlayerWeapon"}),": Check what weapon a player is currently holding."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../resources/weaponids",children:"Weapon IDs"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);