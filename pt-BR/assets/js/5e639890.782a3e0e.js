"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[81592],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}},78972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/GetPlayerCustomSkin","title":"GetPlayerCustomSkin","description":"Returns the class of the players custom skin downloaded from the server.","source":"@site/docs/scripting/functions/GetPlayerCustomSkin.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerCustomSkin","permalink":"/pt-BR/docs/scripting/functions/GetPlayerCustomSkin","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerCustomSkin.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerCustomSkin","sidebar_label":"GetPlayerCustomSkin","description":"Returns the class of the players custom skin downloaded from the server.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerColor","permalink":"/pt-BR/docs/scripting/functions/GetPlayerColor"},"next":{"title":"GetPlayerDialog","permalink":"/pt-BR/docs/scripting/functions/GetPlayerDialog"}}');var s=n(74848),i=n(28453);const o={title:"GetPlayerCustomSkin",sidebar_label:"GetPlayerCustomSkin",description:"Returns the class of the players custom skin downloaded from the server.",tags:["player"]},l=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"SA-MP 0.3.DL R1"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Returns the class of the players custom skin downloaded from the server."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"playerid"}),(0,s.jsx)(t.td,{children:"The player you want to get the skin from"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:["The custom skin id that was specified in ",(0,s.jsx)(t.a,{href:"AddCharModel",children:"AddCharModel"})," newid."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/customskin", true))\n    {\n        new string[32];\n        new customSkin = GetPlayerCustomSkin(playerid);\n\n        format(string, sizeof(string), "Your custom skin id: %d", customSkin);\n        SendClientMessage(playerid, -1, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayerSkin",children:"GetPlayerSkin"}),": Get a player's current skin."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetPlayerSkin",children:"SetPlayerSkin"}),": Set a player's skin."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);