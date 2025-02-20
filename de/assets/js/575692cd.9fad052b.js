"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[78922],{28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}},52347:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"scripting/functions/IsPlayerAdmin","title":"IsPlayerAdmin","description":"Check if a player is logged in as an RCON admin.","source":"@site/docs/scripting/functions/IsPlayerAdmin.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerAdmin","permalink":"/de/docs/scripting/functions/IsPlayerAdmin","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsPlayerAdmin.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"},{"inline":true,"label":"rcon","permalink":"/de/docs/tags/rcon"},{"inline":true,"label":"administration","permalink":"/de/docs/tags/administration"}],"version":"current","frontMatter":{"title":"IsPlayerAdmin","sidebar_label":"IsPlayerAdmin","description":"Check if a player is logged in as an RCON admin.","tags":["player","rcon","administration"]},"sidebar":"docsSidebar","previous":{"title":"IsPickupStreamedIn","permalink":"/de/docs/scripting/functions/IsPickupStreamedIn"},"next":{"title":"IsPlayerAttachedObjectSlotUsed","permalink":"/de/docs/scripting/functions/IsPlayerAttachedObjectSlotUsed"}}');var s=i(74848),r=i(28453);const a={title:"IsPlayerAdmin",sidebar_label:"IsPlayerAdmin",description:"Check if a player is logged in as an RCON admin.",tags:["player","rcon","administration"]},l=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Check if a player is logged in as an RCON admin."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"The ID of the player to check."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"true"})," - Player is an RCON admin."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"false"})," - Player is NOT an RCON admin."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnPlayerSpawn(playerid)\n{\n    if (IsPlayerAdmin(playerid))\n    {\n        SendClientMessageToAll(0xDEEE20FF, "An admin spawned.");\n    }\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"SetPlayerAdmin",children:"SetPlayerAdmin"}),": Sets the player as an RCON admin."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"SendRconCommand",children:"SendRconCommand"}),": Sends an RCON command via the script."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../callbacks/OnRconLoginAttempt",children:"OnRconLoginAttempt"}),": Called when an attempt to login to RCON is made."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}}}]);