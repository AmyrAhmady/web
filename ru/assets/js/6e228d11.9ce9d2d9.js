"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[77710],{28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(96540);const l={},a=s.createContext(l);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(a.Provider,{value:n},e.children)}},46059:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"scripting/functions/SendDeathMessageToPlayer","title":"SendDeathMessageToPlayer","description":"Adds a death to the \'killfeed\' on the right-hand side of the screen for a single player.","source":"@site/docs/scripting/functions/SendDeathMessageToPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SendDeathMessageToPlayer","permalink":"/ru/docs/scripting/functions/SendDeathMessageToPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SendDeathMessageToPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/ru/docs/tags/player"}],"version":"current","frontMatter":{"title":"SendDeathMessageToPlayer","sidebar_label":"SendDeathMessageToPlayer","description":"Adds a death to the \'killfeed\' on the right-hand side of the screen for a single player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SendDeathMessage","permalink":"/ru/docs/scripting/functions/SendDeathMessage"},"next":{"title":"SendPlayerMessageToAll","permalink":"/ru/docs/scripting/functions/SendPlayerMessageToAll"}}');var l=t(74848),a=t(28453);const r={title:"SendDeathMessageToPlayer",sidebar_label:"SendDeathMessageToPlayer",description:"Adds a death to the 'killfeed' on the right-hand side of the screen for a single player.",tags:["player"]},i=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Adds a death to the 'killfeed' on the right-hand side of the screen for a single player."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player to send the death message to."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"killer"}),(0,l.jsx)(n.td,{children:"The ID of the killer (can be INVALID_PLAYER_ID)."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"killee"}),(0,l.jsx)(n.td,{children:"The ID of the player that died."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"weapon"}),(0,l.jsx)(n.td,{children:"The reason (not always a weapon) for the victim's death. Special icons can also be used (ICON_CONNECT and ICON_DISCONNECT)."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"false"})," - The function failed to execute."]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    // Sends a death message to "playerid" shows that "killerid" killed "playerid" for "reason"\n    SendDeathMessageToPlayer(playerid, killerid, playerid, reason);\n\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"SendDeathMessage",children:"SendDeathMessage"}),": Add a kill to the death list."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../callbacks/OnPlayerDeath",children:"OnPlayerDeath"}),": Called when a player dies."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}}}]);