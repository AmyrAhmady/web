"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[35971],{28453:(e,l,t)=>{t.d(l,{R:()=>s,x:()=>a});var n=t(96540);const i={},r=n.createContext(i);function s(e){const l=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function a(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:l},e.children)}},52731:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/SetPlayerSkillLevel","title":"SetPlayerSkillLevel","description":"Set the skill level of a certain weapon type for a player.","source":"@site/docs/scripting/functions/SetPlayerSkillLevel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerSkillLevel","permalink":"/ar/docs/scripting/functions/SetPlayerSkillLevel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerSkillLevel.md","tags":[{"inline":true,"label":"player","permalink":"/ar/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerSkillLevel","sidebar_label":"SetPlayerSkillLevel","description":"Set the skill level of a certain weapon type for a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerShopName","permalink":"/ar/docs/scripting/functions/SetPlayerShopName"},"next":{"title":"SetPlayerSkin","permalink":"/ar/docs/scripting/functions/SetPlayerSkin"}}');var i=t(74848),r=t(28453);const s={title:"SetPlayerSkillLevel",sidebar_label:"SetPlayerSkillLevel",description:"Set the skill level of a certain weapon type for a player.",tags:["player"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Information",id:"related-information",level:2}];function d(e){const l={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(l.p,{children:"Set the skill level of a certain weapon type for a player."}),"\n",(0,i.jsxs)(l.table,{children:[(0,i.jsx)(l.thead,{children:(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.th,{children:"Name"}),(0,i.jsx)(l.th,{children:"Description"})]})}),(0,i.jsxs)(l.tbody,{children:[(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"playerid"}),(0,i.jsx)(l.td,{children:"The ID of the player to set the weapon skill of."})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsxs)(l.td,{children:["WEAPONSKILL",":skill"]}),(0,i.jsxs)(l.td,{children:["The ",(0,i.jsx)(l.a,{href:"../resources/weaponskills",children:"weapon"})," to set the skill of."]})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"level"}),(0,i.jsx)(l.td,{children:"The skill level to set for that weapon, ranging from 0 to 999. A level out of range will max it out."})]})]})]}),"\n",(0,i.jsx)(l.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(l.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(l.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    // Make the player use single-handed sawn-off shotguns.\n    SetPlayerSkillLevel(playerid, WEAPONSKILL_SAWNOFF_SHOTGUN, 1);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(l.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(l.admonition,{type:"warning",children:(0,i.jsxs)(l.p,{children:["The skill parameter is NOT the weapon ID, it is the skill type. Click ",(0,i.jsx)(l.a,{href:"../resources/weaponskills",children:"here"})," for a list of skill types."]})}),"\n",(0,i.jsx)(l.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"GetPlayerSkillLevel",children:"GetPlayerSkillLevel"}),": Get the player skill level of a certain weapon type."]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"SetPlayerArmedWeapon",children:"SetPlayerArmedWeapon"}),": Set a player's armed weapon."]}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"GivePlayerWeapon",children:"GivePlayerWeapon"}),": Give a player a weapon."]}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"related-information",children:"Related Information"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"../resources/weaponskills#skill-levels",children:"Weapon Skills"}),": List of weapon skills that are used to set player's skill level."]}),"\n"]})]})}function p(e={}){const{wrapper:l}={...(0,r.R)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);