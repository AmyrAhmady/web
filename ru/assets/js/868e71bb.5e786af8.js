"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[72324],{28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(96540);const l={},i=t.createContext(l);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}},56335:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/functions/ForceClassSelection","title":"ForceClassSelection","description":"Forces a player to go back to class selection.","source":"@site/docs/scripting/functions/ForceClassSelection.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ForceClassSelection","permalink":"/ru/docs/scripting/functions/ForceClassSelection","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/ForceClassSelection.md","tags":[{"inline":true,"label":"class","permalink":"/ru/docs/tags/class"}],"version":"current","frontMatter":{"title":"ForceClassSelection","sidebar_label":"ForceClassSelection","description":"Forces a player to go back to class selection.","tags":["class"]},"sidebar":"docsSidebar","previous":{"title":"FindTextureFileNameFromCRC","permalink":"/ru/docs/scripting/functions/FindTextureFileNameFromCRC"},"next":{"title":"GameModeExit","permalink":"/ru/docs/scripting/functions/GameModeExit"}}');var l=s(74848),i=s(28453);const r={title:"ForceClassSelection",sidebar_label:"ForceClassSelection",description:"Forces a player to go back to class selection.",tags:["class"]},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Forces a player to go back to class selection."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The player to send back to class selection."})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/class", true))\n    {\n        ForceClassSelection(playerid);\n        TogglePlayerSpectating(playerid, true);\n        TogglePlayerSpectating(playerid, false);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.p,{children:["This function does not perform a state change to ",(0,l.jsx)(n.code,{children:"PLAYER_STATE_WASTED"})," when combined with TogglePlayerSpectating (see example above), as is listed here."]})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"AddPlayerClass",children:"AddPlayerClass"}),": Add a class."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"SetPlayerSkin",children:"SetPlayerSkin"}),": Set a player's skin."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetPlayerSkin",children:"GetPlayerSkin"}),": Get a player's current skin."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../callbacks/OnPlayerRequestClass",children:"OnPlayerRequestClass"}),": Called when a player changes class at class selection."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);