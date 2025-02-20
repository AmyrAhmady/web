"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[38100],{28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var s=r(96540);const i={},t=s.createContext(i);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:n},e.children)}},73857:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"scripting/functions/IsPlayerWidescreenToggled","title":"IsPlayerWidescreenToggled","description":"Checks if a player widescreen is on or off.","source":"@site/docs/scripting/functions/IsPlayerWidescreenToggled.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerWidescreenToggled","permalink":"/ru/docs/scripting/functions/IsPlayerWidescreenToggled","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsPlayerWidescreenToggled.md","tags":[{"inline":true,"label":"player","permalink":"/ru/docs/tags/player"}],"version":"current","frontMatter":{"title":"IsPlayerWidescreenToggled","sidebar_label":"IsPlayerWidescreenToggled","description":"Checks if a player widescreen is on or off.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerUsingOmp","permalink":"/ru/docs/scripting/functions/IsPlayerUsingOmp"},"next":{"title":"IsRepeatingTimer","permalink":"/ru/docs/scripting/functions/IsRepeatingTimer"}}');var i=r(74848),t=r(28453);const l={title:"IsPlayerWidescreenToggled",sidebar_label:"IsPlayerWidescreenToggled",description:"Checks if a player widescreen is on or off.",tags:["player"]},c=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{VersionWarn:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Checks if a player widescreen is on or off."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to check."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"true"})," - The player widescreen is on."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"false"})," - The player widescreen is off."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/widescreencheck", true))\n    {\n        SendClientMessage(playerid, -1, "Wide Screen: %s", IsPlayerWidescreenToggled(playerid) ? "On" : "Off");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"TogglePlayerWidescreen",children:"TogglePlayerWidescreen"}),": Toggle player's widescreen."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}}}]);