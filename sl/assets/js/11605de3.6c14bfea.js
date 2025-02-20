"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[63964],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(96540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}},42938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"scripting/functions/GetMaxPlayers","title":"GetMaxPlayers","description":"Returns the maximum number of players that can join the server, as set by the server variable \'maxplayers\' in server.","source":"@site/docs/scripting/functions/GetMaxPlayers.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetMaxPlayers","permalink":"/sl/docs/scripting/functions/GetMaxPlayers","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetMaxPlayers.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetMaxPlayers","sidebar_label":"GetMaxPlayers","description":"Returns the maximum number of players that can join the server, as set by the server variable \'maxplayers\' in server.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetGravity","permalink":"/sl/docs/scripting/functions/GetGravity"},"next":{"title":"GetMenuColumnHeader","permalink":"/sl/docs/scripting/functions/GetMenuColumnHeader"}}');var r=t(74848),i=t(28453);const a={title:"GetMaxPlayers",sidebar_label:"GetMaxPlayers",description:"Returns the maximum number of players that can join the server, as set by the server variable 'maxplayers' in server.",tags:["player"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Returns the maximum number of players that can join the server, as set by the server variable 'max_players' in config.json."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new string[128];\nformat(string, sizeof(string), "There are %i slots on this server!", GetMaxPlayers());\nSendClientMessage(playerid, 0xFFFFFFFF, string);\n'})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This function can not be used in place of MAX_PLAYERS."}),"\n",(0,r.jsx)(n.li,{children:"It can not be used at compile time (e.g. for array sizes)."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"MAX_PLAYERS"})," should always be re-defined to what the 'max_players' var will be, or higher."]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerPoolSize",children:"GetPlayerPoolSize"}),": Gets the highest playerid connected to the server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"IsPlayerConnected",children:"IsPlayerConnected"}),": Check if a player is connected to the server."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);