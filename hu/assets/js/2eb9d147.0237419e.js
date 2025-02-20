"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[65985],{2056:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"scripting/functions/GetSpawnInfo","title":"GetSpawnInfo","description":"Return the current spawn data for a player, where they will spawn next.","source":"@site/docs/scripting/functions/GetSpawnInfo.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetSpawnInfo","permalink":"/hu/docs/scripting/functions/GetSpawnInfo","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetSpawnInfo.md","tags":[{"inline":true,"label":"player","permalink":"/hu/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetSpawnInfo","sidebar_label":"GetSpawnInfo","description":"Return the current spawn data for a player, where they will spawn next.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetServerVarAsString","permalink":"/hu/docs/scripting/functions/GetServerVarAsString"},"next":{"title":"GetTickCount","permalink":"/hu/docs/scripting/functions/GetTickCount"}}');var s=t(74848),a=t(28453);const i={title:"GetSpawnInfo",sidebar_label:"GetSpawnInfo",description:"Return the current spawn data for a player, where they will spawn next.",tags:["player"]},o=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Return the current spawn data for a player, where they will spawn next."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"The ID of the player you want to get spawn information from."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"&team"}),(0,s.jsx)(n.td,{children:"A variable into which to store the team ID, passed by reference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"&skin"}),(0,s.jsx)(n.td,{children:"A variable into which to store the skin ID, passed by reference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["&Float",":spawnX"]}),(0,s.jsx)(n.td,{children:"A Float variable into which to store the X-coordinate, passed by reference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["&Float",":spawnY"]}),(0,s.jsx)(n.td,{children:"A Float variable into which to store the Y-coordinate, passed by reference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["&Float",":spawnZ"]}),(0,s.jsx)(n.td,{children:"A Float variable into which to store the Z-coordinate, passed by reference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["&Float",":angle"]}),(0,s.jsx)(n.td,{children:"A Float variable into which to store the Facing angle, passed by reference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["&WEAPON",":weapon1"]}),(0,s.jsx)(n.td,{children:"A variable into which to store the weapon1, passed by reference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"&ammo1"}),(0,s.jsx)(n.td,{children:"A variable into which to store the ammo1, passed by reference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["&WEAPON",":weapon2"]}),(0,s.jsx)(n.td,{children:"A variable into which to store the weapon2, passed by reference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"&ammo2"}),(0,s.jsx)(n.td,{children:"A variable into which to store the ammo2, passed by reference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["&WEAPON",":weapon3"]}),(0,s.jsx)(n.td,{children:"A variable into which to store the weapon3, passed by reference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"&ammo3"}),(0,s.jsx)(n.td,{children:"A variable into which to store the ammo3, passed by reference."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"false"})," - The function failed to execute. The specified player is not connected."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"public OnPlayerRequestClass(playerid, classid)\n{\n    SetSpawnInfo(playerid, NO_TEAM, 293, 1139.4786, -1761.3989, 13.5844, 0.0000, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_FIST, 0);\n\n    new \n        team,\n        skin,\n        Float:spawnX,\n        Float:spawnY,\n        Float:spawnZ,\n        Float:angle,\n        WEAPON:weapon1,\n        ammo1,\n        WEAPON:weapon2,\n        ammo2,\n        WEAPON:weapon3,\n        ammo3;\n    \n    GetSpawnInfo(playerid, team, skin, spawnX, spawnY, spawnZ, angle, weapon1, ammo1, weapon2, ammo2, weapon3, ammo3);\n    // team = NO_TEAM\n    // skin = 293\n    // spawnX = 1139.4786\n    // spawnY = -1761.3989\n    // spawnZ = 13.5844\n    // angle = 0.0000\n    // weapon1 = WEAPON_SAWEDOFF\n    // ammo1 = 36\n    // weapon2 = WEAPON_UZI\n    // ammo2 = 150\n    // weapon3 = WEAPON_FIST\n    // ammo3 = 0\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"SetSpawnInfo",children:"SetSpawnInfo"}),": This function can be used to change the spawn information of a specific player."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);