"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[96387],{8835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/GetPlayerSpecialAction","title":"GetPlayerSpecialAction","description":"Retrieves a player\'s current special action.","source":"@site/docs/scripting/functions/GetPlayerSpecialAction.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerSpecialAction","permalink":"/vi/docs/scripting/functions/GetPlayerSpecialAction","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerSpecialAction.md","tags":[{"inline":true,"label":"player","permalink":"/vi/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerSpecialAction","sidebar_label":"GetPlayerSpecialAction","description":"Retrieves a player\'s current special action.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerSkin","permalink":"/vi/docs/scripting/functions/GetPlayerSkin"},"next":{"title":"GetPlayerSpectateID","permalink":"/vi/docs/scripting/functions/GetPlayerSpectateID"}}');var r=n(74848),l=n(28453);const s={title:"GetPlayerSpecialAction",sidebar_label:"GetPlayerSpecialAction",description:"Retrieves a player's current special action.",tags:["player"]},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Retrieves a player's current special action."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to get the special action of."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:["The special action of the player (see: ",(0,r.jsx)(t.a,{href:"../resources/specialactions",children:"Special Actions"}),")."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"public OnPlayerUpdate(playerid)\n{\n    // Ban players if they have a jetpack\n    if (GetPlayerSpecialAction(playerid) == SPECIAL_ACTION_USEJETPACK)\n    {\n        Ban(playerid);\n    }\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetPlayerSpecialAction",children:"SetPlayerSpecialAction"}),": Set a player's special action."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerState",children:"GetPlayerState"}),": Get a player's current state."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"../resources/specialactions",children:"Special Action IDs"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(96540);const r={},l=i.createContext(r);function s(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);