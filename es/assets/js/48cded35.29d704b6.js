"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[8353],{28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>l});var n=r(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}},33009:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"scripting/functions/GetPlayerScore","title":"GetPlayerScore","description":"This function returns a player\'s score as it was set using SetPlayerScore.","source":"@site/docs/scripting/functions/GetPlayerScore.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerScore","permalink":"/es/docs/scripting/functions/GetPlayerScore","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerScore.md","tags":[{"inline":true,"label":"player","permalink":"/es/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerScore","sidebar_label":"GetPlayerScore","description":"This function returns a player\'s score as it was set using SetPlayerScore.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerRotationQuat","permalink":"/es/docs/scripting/functions/GetPlayerRotationQuat"},"next":{"title":"GetPlayerSirenState","permalink":"/es/docs/scripting/functions/GetPlayerSirenState"}}');var s=r(74848),i=r(28453);const a={title:"GetPlayerScore",sidebar_label:"GetPlayerScore",description:"This function returns a player's score as it was set using SetPlayerScore.",tags:["player"]},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"This function returns a player's score as it was set using SetPlayerScore"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"playerid"}),(0,s.jsx)(t.td,{children:"The player to get the score of."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"The player's score."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid,text[])\n{\n    if (!strcmp(cmdtext, "/score", true))\n    {\n        new string[32];\n        format(string, sizeof(string), "Your score: %i", GetPlayerScore(playerid));\n        SendClientMessage(playerid, COLOR_ORANGE, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetPlayerScore",children:"SetPlayerScore"}),": Set the score of a player."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayerPing",children:"GetPlayerPing"}),": Get the ping of a player."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);