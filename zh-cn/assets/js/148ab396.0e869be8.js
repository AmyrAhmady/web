"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[27669],{28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>a});var t=n(96540);const l={},i=t.createContext(l);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:s},e.children)}},82129:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"scripting/functions/AddPlayerClass","title":"AddPlayerClass","description":"Adds a class to class selection.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/AddPlayerClass.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddPlayerClass","permalink":"/zh-cn/docs/scripting/functions/AddPlayerClass","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AddPlayerClass.md","tags":[{"inline":true,"label":"player","permalink":"/zh-cn/docs/tags/player"},{"inline":true,"label":"class","permalink":"/zh-cn/docs/tags/class"}],"version":"current","frontMatter":{"title":"AddPlayerClass","sidebar_label":"AddPlayerClass","description":"Adds a class to class selection.","tags":["player","class"]},"sidebar":"docsSidebar","previous":{"title":"AddMenuItem","permalink":"/zh-cn/docs/scripting/functions/AddMenuItem"},"next":{"title":"AddPlayerClassEx","permalink":"/zh-cn/docs/scripting/functions/AddPlayerClassEx"}}');var l=n(74848),i=n(28453);const r={title:"AddPlayerClass",sidebar_label:"AddPlayerClass",description:"Adds a class to class selection.",tags:["player","class"]},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(s.p,{children:"Adds a class to class selection. Classes are used so players may spawn with a skin of their choice."}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Name"}),(0,l.jsx)(s.th,{children:"Description"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"skin"}),(0,l.jsxs)(s.td,{children:["The ",(0,l.jsx)(s.a,{href:"../resources/skins",children:"skin"})," which the player will spawn with."]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsxs)(s.td,{children:["Float",":spawnX"]}),(0,l.jsx)(s.td,{children:"The X coordinate of the spawnpoint of this class."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsxs)(s.td,{children:["Float",":spawnY"]}),(0,l.jsx)(s.td,{children:"The Y coordinate of the spawnpoint of this class."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsxs)(s.td,{children:["Float",":spawnZ"]}),(0,l.jsx)(s.td,{children:"The Z coordinate of the spawnpoint of this class."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsxs)(s.td,{children:["Float",":angle"]}),(0,l.jsx)(s.td,{children:"The direction in which the player should face after spawning."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsxs)(s.td,{children:["WEAPON",":weapon1"]}),(0,l.jsx)(s.td,{children:"The first spawn-weapon for the player."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"ammo1"}),(0,l.jsx)(s.td,{children:"The amount of ammunition for the primary spawn weapon."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsxs)(s.td,{children:["WEAPON",":weapon2"]}),(0,l.jsx)(s.td,{children:"The second spawn-weapon for the player."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"ammo2"}),(0,l.jsx)(s.td,{children:"The amount of ammunition for the second spawn weapon."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsxs)(s.td,{children:["WEAPON",":weapon3"]}),(0,l.jsx)(s.td,{children:"The third spawn-weapon for the player."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"ammo3"}),(0,l.jsx)(s.td,{children:"The amount of ammunition for the third spawn weapon."})]})]})]}),"\n",(0,l.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(s.p,{children:"The ID of the class which was just added."}),"\n",(0,l.jsx)(s.p,{children:"319 if the class limit (320) was reached. The highest possible class ID is 319."}),"\n",(0,l.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Players can spawn with either the CJ skin (0) or The Truth skin (1).\n    AddPlayerClass(0, 1958.33, 1343.12, 15.36, 269.15, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_BRASSKNUCKLE, 1); // CJ\n    AddPlayerClass(1, 1958.33, 1343.12, 15.36, 269.15, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_BRASSKNUCKLE, 1); // The Truth\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(s.admonition,{type:"tip",children:(0,l.jsx)(s.p,{children:"The maximum class ID is 319 (starting from 0, so a total of 320 classes). When this limit is reached, any more classes that are added will replace ID 319."})}),"\n",(0,l.jsx)(s.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"AddPlayerClassEx",children:"AddPlayerClassEx"}),": Add a class with a default team."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"GetAvailableClasses",children:"GetAvailableClasses"}),": Get the number of classes defined."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"EditPlayerClass",children:"EditPlayerClass"}),": Edit a class data."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"SetSpawnInfo",children:"SetSpawnInfo"}),": Set the spawn setting for a player."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"SetPlayerSkin",children:"SetPlayerSkin"}),": Set a player's skin."]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"../resources/skins",children:"Skin IDs"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"../resources/weaponids",children:"Weapon IDs"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}}}]);