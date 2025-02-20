"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[56934],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const l={},i=r.createContext(l);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(i.Provider,{value:t},e.children)}},81771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/functions/HideGameTextForAll","title":"HideGameTextForAll","description":"Stop showing a gametext style for all players.","source":"@site/docs/scripting/functions/HideGameTextForAll.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/HideGameTextForAll","permalink":"/docs/scripting/functions/HideGameTextForAll","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/HideGameTextForAll.md","tags":[{"inline":true,"label":"player","permalink":"/docs/tags/player"},{"inline":true,"label":"gametext","permalink":"/docs/tags/gametext"}],"version":"current","frontMatter":{"title":"HideGameTextForAll","sidebar_label":"HideGameTextForAll","description":"Stop showing a gametext style for all players.","tags":["player","gametext"]},"sidebar":"docsSidebar","previous":{"title":"HasVehicleBeenOccupied","permalink":"/docs/scripting/functions/HasVehicleBeenOccupied"},"next":{"title":"HideGameTextForPlayer","permalink":"/docs/scripting/functions/HideGameTextForPlayer"}}');var l=n(74848),i=n(28453);const s={title:"HideGameTextForAll",sidebar_label:"HideGameTextForAll",description:"Stop showing a gametext style for all players.",tags:["player","gametext"]},a=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Stop showing a gametext style for all players."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"style"}),(0,l.jsxs)(t.td,{children:["The ",(0,l.jsx)(t.a,{href:"../resources/gametextstyles",children:"style"})," of text to hide."]})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:"This function does not return any specific value."}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/hidegametext3", true))\n    {\n        if (!IsPlayerAdmin(playerid))\n        {\n            return 1;\n        }\n\n        HideGameTextForAll(3);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"HideGameTextForPlayer",children:"HideGameTextForPlayer"}),": Stop showing a gametext style to a player."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GameTextForPlayer",children:"GameTextForPlayer"}),": Display gametext to a player."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GameTextForAll",children:"GameTextForAll"}),": Display gametext to all players."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": Hide a textdraw for all players."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}}}]);