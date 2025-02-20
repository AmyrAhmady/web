"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[78043],{28453:(e,t,l)=>{l.d(t,{R:()=>s,x:()=>a});var n=l(96540);const i={},r=n.createContext(i);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}},41954:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/GetPlayerSkillLevel","title":"GetPlayerSkillLevel","description":"Get the player skill level of a certain weapon type.","source":"@site/docs/scripting/functions/GetPlayerSkillLevel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerSkillLevel","permalink":"/zh-tw/docs/scripting/functions/GetPlayerSkillLevel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerSkillLevel.md","tags":[{"inline":true,"label":"player","permalink":"/zh-tw/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerSkillLevel","sidebar_label":"GetPlayerSkillLevel","description":"Get the player skill level of a certain weapon type.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerSirenState","permalink":"/zh-tw/docs/scripting/functions/GetPlayerSirenState"},"next":{"title":"GetPlayerSkin","permalink":"/zh-tw/docs/scripting/functions/GetPlayerSkin"}}');var i=l(74848),r=l(28453);const s={title:"GetPlayerSkillLevel",sidebar_label:"GetPlayerSkillLevel",description:"Get the player skill level of a certain weapon type.",tags:["player"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{VersionWarn:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Get the player skill level of a certain weapon type."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["WEAPONSKILL",":skill"]}),(0,i.jsxs)(t.td,{children:["The ",(0,i.jsx)(t.a,{href:"../resources/weaponskills",children:"weapon"})," to get the skill of."]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"0 - failure (invalid weapon skill)."}),"\n",(0,i.jsx)(t.p,{children:"Otherwise, it returns the skill level of the weapon type."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/skill", true))\n    {\n        new string[64];\n        \n        new skill = GetPlayerSkillLevel(playerid, WEAPONSKILL_PISTOL);\n\n        format(string, sizeof(string), "Your pistol skill level is %d", skill);\n        SendClientMessage(playerid, 0xFFFF00FF, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["The skill parameter is NOT the weapon ID, it is the skill type. Click ",(0,i.jsx)(t.a,{href:"../resources/weaponskills",children:"here"})," for a list of skill types."]})}),"\n",(0,i.jsx)(t.h1,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerSkillLevel",children:"SetPlayerSkillLevel"}),": Set the skill level of a certain weapon type for a player."]}),"\n"]}),"\n",(0,i.jsx)(t.h1,{id:"related-information",children:"Related Information"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../resources/weaponskills",children:"Weapon Skills"}),": List of weapon skills that are used to set player's skill level."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);