"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[58953],{28453:(e,l,n)=>{n.d(l,{R:()=>r,x:()=>s});var i=n(96540);const a={},t=i.createContext(a);function r(e){const l=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function s(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(t.Provider,{value:l},e.children)}},83658:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>c,contentTitle:()=>s,default:()=>o,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scripting/callbacks/OnPlayerDeath","title":"OnPlayerDeath","description":"This callback is called when a player dies, either by suicide or by being killed by another player.","source":"@site/docs/scripting/callbacks/OnPlayerDeath.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerDeath","permalink":"/it/docs/scripting/callbacks/OnPlayerDeath","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerDeath.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerDeath","sidebar_label":"OnPlayerDeath","description":"This callback is called when a player dies, either by suicide or by being killed by another player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerConnect","permalink":"/it/docs/scripting/callbacks/OnPlayerConnect"},"next":{"title":"OnPlayerDisconnect","permalink":"/it/docs/scripting/callbacks/OnPlayerDisconnect"}}');var a=n(74848),t=n(28453);const r={title:"OnPlayerDeath",sidebar_label:"OnPlayerDeath",description:"This callback is called when a player dies, either by suicide or by being killed by another player.",tags:["player"]},s=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function h(e){const l={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(l.p,{children:"This callback is called when a player dies, either by suicide or by being killed by another player."}),"\n",(0,a.jsxs)(l.table,{children:[(0,a.jsx)(l.thead,{children:(0,a.jsxs)(l.tr,{children:[(0,a.jsx)(l.th,{children:"Name"}),(0,a.jsx)(l.th,{children:"Description"})]})}),(0,a.jsxs)(l.tbody,{children:[(0,a.jsxs)(l.tr,{children:[(0,a.jsx)(l.td,{children:"playerid"}),(0,a.jsx)(l.td,{children:"The ID of the player that died."})]}),(0,a.jsxs)(l.tr,{children:[(0,a.jsx)(l.td,{children:"killerid"}),(0,a.jsx)(l.td,{children:"The ID of the player that killed the player who died, or INVALID_PLAYER_ID if there was none."})]}),(0,a.jsxs)(l.tr,{children:[(0,a.jsxs)(l.td,{children:["WEAPON",":reason"]}),(0,a.jsxs)(l.td,{children:["The ID of the reason (",(0,a.jsx)(l.a,{href:"../resources/weaponids",children:"weapon id"}),") for the player's death."]})]})]})]}),"\n",(0,a.jsx)(l.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(l.p,{children:"0 - Will prevent other filterscripts from receiving this callback."}),"\n",(0,a.jsx)(l.p,{children:"1 - Indicates that this callback will be passed to the next filterscript."}),"\n",(0,a.jsx)(l.p,{children:"It is always called first in filterscripts."}),"\n",(0,a.jsx)(l.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-c",children:"new PlayerDeaths[MAX_PLAYERS];\nnew PlayerKills[MAX_PLAYERS];\n\npublic OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    SendDeathMessage(killerid, playerid, reason); // Shows the kill in the killfeed\n\n    // Check that the killerid is valid before doing anything with it\n    if (killerid\xa0!= INVALID_PLAYER_ID)\n    {\n        PlayerKills[killerid] ++;\n    }\n\n    // Outside the check, handle stuff for playerid (it's always valid)\n    PlayerDeaths[playerid] ++;\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(l.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(l.admonition,{type:"tip",children:(0,a.jsxs)(l.p,{children:["The reason will return 37 (flame thrower) from any fire sources (e.g. molotov, 18) The reason will return 51 from any weapon that creates an explosion (e.g. RPG, grenade) You do not need to check whether killerid is valid before using it in ",(0,a.jsx)(l.a,{href:"../functions/SendDeathMessage",children:"SendDeathMessage"}),". INVALID_PLAYER_ID is a valid killerid ID parameter in that function. playerid is the only one who can call the callback. (good to know for anti fake death)"]})}),"\n",(0,a.jsx)(l.admonition,{type:"warning",children:(0,a.jsx)(l.p,{children:"You MUST check whether 'killerid' is valid (not INVALID_PLAYER_ID) before using it in an array (or really anywhere), as it will cause the OnPlayerDeath script to crash (not the entire script). This is because INVALID_PLAYER_ID is defined as 65535, and if an array only has 'MAX_PLAYERS' elements, e.g. 500, you're trying to access an index that is above 499, which is out of bounds."})}),"\n",(0,a.jsx)(l.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsx)(l.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.a,{href:"OnPlayerSpawn",children:"OnPlayerSpawn"}),": This callback is called when a player spawns."]}),"\n"]}),"\n",(0,a.jsx)(l.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsx)(l.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.a,{href:"../functions/SendDeathMessage",children:"SendDeathMessage"}),": Add a kill to the death list."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.a,{href:"../functions/SetPlayerHealth",children:"SetPlayerHealth"}),": Set a player's health."]}),"\n"]}),"\n",(0,a.jsx)(l.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsx)(l.li,{children:(0,a.jsx)(l.a,{href:"../resources/weaponids",children:"Weapon IDs"})}),"\n"]})]})}function o(e={}){const{wrapper:l}={...(0,t.R)(),...e.components};return l?(0,a.jsx)(l,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}}}]);