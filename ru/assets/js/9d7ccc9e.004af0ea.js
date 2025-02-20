"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[24446],{28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>d});var n=t(96540);const i={},r=n.createContext(i);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:s},e.children)}},43516:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/EditPlayerClass","title":"EditPlayerClass","description":"Edit a class data.","source":"@site/docs/scripting/functions/EditPlayerClass.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/EditPlayerClass","permalink":"/ru/docs/scripting/functions/EditPlayerClass","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/EditPlayerClass.md","tags":[{"inline":true,"label":"class","permalink":"/ru/docs/tags/class"}],"version":"current","frontMatter":{"title":"EditPlayerClass","sidebar_label":"EditPlayerClass","description":"Edit a class data.","tags":["class"]},"sidebar":"docsSidebar","previous":{"title":"EditObject","permalink":"/ru/docs/scripting/functions/EditObject"},"next":{"title":"EditPlayerObject","permalink":"/ru/docs/scripting/functions/EditPlayerObject"}}');var i=t(74848),r=t(28453);const l={title:"EditPlayerClass",sidebar_label:"EditPlayerClass",description:"Edit a class data.",tags:["class"]},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function o(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{VersionWarn:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(s.p,{children:"Edit a class data."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"classid"}),(0,i.jsx)(s.td,{children:"The class id to edit."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"team"}),(0,i.jsx)(s.td,{children:"The team you want the player to spawn in."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"skin"}),(0,i.jsxs)(s.td,{children:["The ",(0,i.jsx)(s.a,{href:"../resources/skins",children:"skin"})," which the player will spawn with."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["Float",":spawnX"]}),(0,i.jsx)(s.td,{children:"The X coordinate of the spawnpoint of this class."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["Float",":spawnY"]}),(0,i.jsx)(s.td,{children:"The Y coordinate of the spawnpoint of this class."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["Float",":spawnZ"]}),(0,i.jsx)(s.td,{children:"The Z coordinate of the spawnpoint of this class."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["Float",":angle"]}),(0,i.jsx)(s.td,{children:"The direction in which the player will face after spawning."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["WEAPON",":weapon1"]}),(0,i.jsx)(s.td,{children:"The first spawn-weapon for the player."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ammo1"}),(0,i.jsx)(s.td,{children:"The amount of ammunition for the first spawn weapon."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["WEAPON",":weapon2"]}),(0,i.jsx)(s.td,{children:"The second spawn-weapon for the player."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ammo2"}),(0,i.jsx)(s.td,{children:"The amount of ammunition for the second spawn weapon."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["WEAPON",":weapon3"]}),(0,i.jsx)(s.td,{children:"The third spawn-weapon for the player."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ammo3"}),(0,i.jsx)(s.td,{children:"The amount of ammunition for the third spawn weapon."})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-c",children:"// Edit class id 10\nEditPlayerClass(10, TEAM_NONE, 299, -253.8291, 2602.9312, 62.8527, -90.0000, WEAPON_KNIFE, 1, WEAPON_MP5, 100, WEAPON_COLT45, 20);\n"})}),"\n",(0,i.jsx)(s.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"AddPlayerClass",children:"AddPlayerClass"}),": Adds a class."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"AddPlayerClassEx",children:"AddPlayerClassEx"}),": Add a class with a default team."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"GetAvailableClasses",children:"GetAvailableClasses"}),": Get the number of classes defined."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"../resources/skins",children:"Skin IDs"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"../resources/weaponids",children:"Weapon IDs"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}}}]);