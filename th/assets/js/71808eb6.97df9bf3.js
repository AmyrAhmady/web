"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[74698],{21560:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"scripting/callbacks/OnPlayerCommandText","title":"OnPlayerCommandText","description":"This callback is called when a player enters a command into the client chat window.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerCommandText.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerCommandText","permalink":"/th/docs/scripting/callbacks/OnPlayerCommandText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerCommandText.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerCommandText","sidebar_label":"OnPlayerCommandText","description":"This callback is called when a player enters a command into the client chat window.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerClickTextDraw","permalink":"/th/docs/scripting/callbacks/OnPlayerClickTextDraw"},"next":{"title":"OnPlayerConnect","permalink":"/th/docs/scripting/callbacks/OnPlayerConnect"}}');var r=t(74848),l=t(28453);const i={title:"OnPlayerCommandText",sidebar_label:"OnPlayerCommandText",description:"This callback is called when a player enters a command into the client chat window.",tags:["player"]},s=void 0,c={},d=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,r.jsx)(n.p,{children:"This callback is called when a player enters a command into the client chat window. Commands are anything that start with a forward slash, e.g. /help."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player that entered a command."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cmdtext[]"}),(0,r.jsx)(n.td,{children:"The command that was entered (including the forward slash)."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,r.jsx)(n.p,{children:"It is always called first in filterscripts so returning 1 there blocks other scripts from seeing it."}),"\n",(0,r.jsx)(n.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, \"/help\", true))\n    {\n        SendClientMessage(playerid, -1, \"SERVER: This is the /help command!\");\n        return 1;\n        // Returning 1 informs the server that the command has been processed.\n        // OnPlayerCommandText won't be called in other scripts.\n    }\n    return 0;\n    // Returning 0 informs the server that the command hasn't been processed by this script.\n    // OnPlayerCommandText will be called in other scripts until one returns 1.\n    // If no scripts return 1, the 'SERVER: Unknown Command' message will be shown to the player.\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"NPC \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e23\u0e35\u0e22\u0e01 Callback \u0e19\u0e35\u0e49\u0e44\u0e14\u0e49"})}),"\n",(0,r.jsx)(n.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/th/docs/scripting/functions/SendRconCommand",children:"SendRconCommand"}),": Sends an RCON command via the script."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(96540);const r={},l=a.createContext(r);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);