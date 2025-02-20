"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[3998],{28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var t=n(96540);const i={},a=t.createContext(i);function r(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:s},e.children)}},69431:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"scripting/functions/AddPlayerClassEx","title":"AddPlayerClassEx","description":"This function is exactly the same as the AddPlayerClass function, with the addition of a team parameter.","source":"@site/docs/scripting/functions/AddPlayerClassEx.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddPlayerClassEx","permalink":"/it/docs/scripting/functions/AddPlayerClassEx","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AddPlayerClassEx.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"},{"inline":true,"label":"class","permalink":"/it/docs/tags/class"}],"version":"current","frontMatter":{"title":"AddPlayerClassEx","sidebar_label":"AddPlayerClassEx","description":"This function is exactly the same as the AddPlayerClass function, with the addition of a team parameter.","tags":["player","class"]},"sidebar":"docsSidebar","previous":{"title":"AddPlayerClass","permalink":"/it/docs/scripting/functions/AddPlayerClass"},"next":{"title":"AddServerRule","permalink":"/it/docs/scripting/functions/AddServerRule"}}');var i=n(74848),a=n(28453);const r={title:"AddPlayerClassEx",sidebar_label:"AddPlayerClassEx",description:"This function is exactly the same as the AddPlayerClass function, with the addition of a team parameter.",tags:["player","class"]},l=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(s.p,{children:"This function is exactly the same as the AddPlayerClass function, with the addition of a team parameter."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"team"}),(0,i.jsx)(s.td,{children:"The team you want the player to spawn in."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"skin"}),(0,i.jsxs)(s.td,{children:["The ",(0,i.jsx)(s.a,{href:"../resources/skins",children:"skin"})," which the player will spawn with."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["Float",":spawnX"]}),(0,i.jsx)(s.td,{children:"The X coordinate of the spawnpoint of this class."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["Float",":spawnY"]}),(0,i.jsx)(s.td,{children:"The Y coordinate of the spawnpoint of this class."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["Float",":spawnZ"]}),(0,i.jsx)(s.td,{children:"The Z coordinate of the spawnpoint of this class."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["Float",":angle"]}),(0,i.jsx)(s.td,{children:"The direction in which the player should face after spawning."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["WEAPON",":weapon1"]}),(0,i.jsx)(s.td,{children:"The first spawn-weapon for the player."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ammo1"}),(0,i.jsx)(s.td,{children:"The amount of ammunition for the primary spawn weapon."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["WEAPON",":weapon2"]}),(0,i.jsx)(s.td,{children:"The second spawn-weapon for the player."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ammo2"}),(0,i.jsx)(s.td,{children:"The amount of ammunition for the second spawn weapon."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["WEAPON",":weapon3"]}),(0,i.jsx)(s.td,{children:"The third spawn-weapon for the player."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ammo3"}),(0,i.jsx)(s.td,{children:"The amount of ammunition for the third spawn weapon."})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:"The ID of the class which was just added."}),"\n",(0,i.jsx)(s.p,{children:"319 if the class limit (320) was reached. The highest possible class ID is 319."}),"\n",(0,i.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Players can spawn as either:\n    // CJ Skin (ID 0) in team 1.\n    // The Truth skin (ID 1) in team 2.\n    AddPlayerClassEx(1, 0, 1958.33, 1343.12, 15.36, 269.15, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_FIST, 0); // CJ\n    AddPlayerClassEx(2, 1, 1958.33, 1343.12, 15.36, 269.15, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_FIST, 0); // The Truth\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsx)(s.p,{children:"The maximum class ID is 319 (starting from 0, so a total of 320 classes). When this limit is reached, any more classes that are added will replace ID 319."})}),"\n",(0,i.jsx)(s.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"AddPlayerClass",children:"AddPlayerClass"}),": Add a class."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"GetAvailableClasses",children:"GetAvailableClasses"}),": Get the number of classes defined."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"EditPlayerClass",children:"EditPlayerClass"}),": Edit a class data."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"SetSpawnInfo",children:"SetSpawnInfo"}),": Set the spawn setting for a player."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"SetPlayerTeam",children:"SetPlayerTeam"}),": Set a player's team."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"SetPlayerSkin",children:"SetPlayerSkin"}),": Set a player's skin."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"../resources/skins",children:"Skin IDs"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"../resources/weaponids",children:"Weapon IDs"})}),"\n"]})]})}function o(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);