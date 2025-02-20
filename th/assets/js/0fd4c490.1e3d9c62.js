"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[82207],{25863:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"scripting/functions/SetSpawnInfo","title":"SetSpawnInfo","description":"This function can be used to change the spawn information of a specific player.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/SetSpawnInfo.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetSpawnInfo","permalink":"/th/docs/scripting/functions/SetSpawnInfo","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetSpawnInfo.md","tags":[],"version":"current","frontMatter":{"title":"SetSpawnInfo","sidebar_label":"SetSpawnInfo","description":"This function can be used to change the spawn information of a specific player.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SetServerRuleFlags","permalink":"/th/docs/scripting/functions/SetServerRuleFlags"},"next":{"title":"SetTeamCount","permalink":"/th/docs/scripting/functions/SetTeamCount"}}');var i=t(74848),r=t(28453);const a={title:"SetSpawnInfo",sidebar_label:"SetSpawnInfo",description:"This function can be used to change the spawn information of a specific player.",tags:[]},o=void 0,l={},c=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,i.jsx)(n.p,{children:"This function can be used to change the spawn information of a specific player. It allows you to automatically set someone's spawn weapons, their team, skin and spawn position, normally used in case of minigames or automatic-spawn systems. This function is more crash-safe then using SetPlayerSkin in OnPlayerSpawn and/or OnPlayerRequestClass, even though this has been fixed in 0.2."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The PlayerID of who you want to set the spawn information."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"team"}),(0,i.jsx)(n.td,{children:"The Team-ID of the chosen player."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"skin"}),(0,i.jsx)(n.td,{children:"The skin which the player will spawn with."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":X"]}),(0,i.jsx)(n.td,{children:"The X-coordinate of the player's spawn position."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":Y"]}),(0,i.jsx)(n.td,{children:"The Y-coordinate of the player's spawn position."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":Z"]}),(0,i.jsx)(n.td,{children:"The Z-coordinate of the player's spawn position."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":rotation"]}),(0,i.jsx)(n.td,{children:"The direction in which the player needs to be facing after spawning."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"weapon1"}),(0,i.jsx)(n.td,{children:"The first spawn-weapon for the player."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"weapon1_ammo"}),(0,i.jsx)(n.td,{children:"The amount of ammunition for the primary spawnweapon."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"weapon2"}),(0,i.jsx)(n.td,{children:"The second spawn-weapon for the player."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"weapon2_ammo"}),(0,i.jsx)(n.td,{children:"The amount of ammunition for the second spawnweapon."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"weapon3"}),(0,i.jsx)(n.td,{children:"The third spawn-weapon for the player."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"weapon3_ammo"}),(0,i.jsx)(n.td,{children:"The amount of ammunition for the third spawnweapon."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,i.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(n.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"public OnPlayerRequestClass(playerid, classid)\n{\n    // This simple example demonstrates how to spawn every player automatically with\n    // CJ's skin, which is number 0. The player will spawn in Las Venturas, with\n    // 36 Sawnoff-Shotgun rounds and 150 Tec9 rounds.\n    SetSpawnInfo( playerid, 0, 0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0 );\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"SetPlayerSkin: Set a player's skin."}),"\n",(0,i.jsx)(n.li,{children:"SetPlayerTeam: Set a player's team."}),"\n",(0,i.jsx)(n.li,{children:"SpawnPlayer: Force a player to spawn."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);