"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[93288],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var a=n(96540);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}},99227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"scripting/functions/GetPlayerWeaponState","title":"GetPlayerWeaponState","description":"Check the state of a player\'s weapon.","source":"@site/docs/scripting/functions/GetPlayerWeaponState.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerWeaponState","permalink":"/pl/docs/scripting/functions/GetPlayerWeaponState","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerWeaponState.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerWeaponState","sidebar_label":"GetPlayerWeaponState","description":"Check the state of a player\'s weapon.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerWeaponData","permalink":"/pl/docs/scripting/functions/GetPlayerWeaponData"},"next":{"title":"GetPlayerWeather","permalink":"/pl/docs/scripting/functions/GetPlayerWeather"}}');var r=n(74848),s=n(28453);const i={title:"GetPlayerWeaponState",sidebar_label:"GetPlayerWeaponState",description:"Check the state of a player's weapon.",tags:["player"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Check the state of a player's weapon."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to obtain the weapon state of."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"../resources/weaponstates",children:"state of the player's weapon"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"0"})," if player specified does not exist."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/wstate", true))\n    {\n        new WEAPONSTATE:state = GetPlayerWeaponState(playerid);\n\n        static weaponStates[4][64] = \n        {\n            "Current weapon has no ammo remaining",\n            "Current weapon has a single bullet left",\n            "Current weapon has more than one bullet left",\n            "Reloading current weapon"\n        };\n\n        new string[144];\n        format(string, sizeof(string), "Your weapon state: %s", weaponStates[state]);\n        SendClientMessage(playerid, -1, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GivePlayerWeapon",children:"GivePlayerWeapon"}),": Give a player a weapon."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"../resources/weaponstates",children:"Weapon States"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);