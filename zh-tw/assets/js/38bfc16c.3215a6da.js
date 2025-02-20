"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[59967],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var r=t(96540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}},38487:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/GetPlayerMoney","title":"GetPlayerMoney","description":"Retrieves the amount of money a player has.","source":"@site/docs/scripting/functions/GetPlayerMoney.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerMoney","permalink":"/zh-tw/docs/scripting/functions/GetPlayerMoney","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerMoney.md","tags":[{"inline":true,"label":"player","permalink":"/zh-tw/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerMoney","sidebar_label":"GetPlayerMoney","description":"Retrieves the amount of money a player has.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerMenu","permalink":"/zh-tw/docs/scripting/functions/GetPlayerMenu"},"next":{"title":"GetPlayerName","permalink":"/zh-tw/docs/scripting/functions/GetPlayerName"}}');var s=t(74848),i=t(28453);const l={title:"GetPlayerMoney",sidebar_label:"GetPlayerMoney",description:"Retrieves the amount of money a player has.",tags:["player"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Retrieves the amount of money a player has."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"The ID of the player to get the money of."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"The amount of money the player has."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnPlayerSpawn(playerid)\n{\n    new string[32];\n    format(string, sizeof(string), "Your money: $%i", GetPlayerMoney(playerid));\n    SendClientMessage(playerid, 0x00FF00FF, string);\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GivePlayerMoney",children:"GivePlayerMoney"}),": Give a player money."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"ResetPlayerMoney",children:"ResetPlayerMoney"}),": Set the money of a player to $0."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);