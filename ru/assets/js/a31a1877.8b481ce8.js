"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[43652],{28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>c});var t=n(96540);const s={},r=t.createContext(s);function l(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:i},e.children)}},90462:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/functions/IsPlayerUsingOfficialClient","title":"IsPlayerUsingOfficialClient","description":"Check if the player is using the official SA-MP client.","source":"@site/docs/scripting/functions/IsPlayerUsingOfficialClient.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerUsingOfficialClient","permalink":"/ru/docs/scripting/functions/IsPlayerUsingOfficialClient","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsPlayerUsingOfficialClient.md","tags":[{"inline":true,"label":"player","permalink":"/ru/docs/tags/player"}],"version":"current","frontMatter":{"title":"IsPlayerUsingOfficialClient","sidebar_label":"IsPlayerUsingOfficialClient","description":"Check if the player is using the official SA-MP client.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerTextDrawVisible","permalink":"/ru/docs/scripting/functions/IsPlayerTextDrawVisible"},"next":{"title":"IsPlayerUsingOmp","permalink":"/ru/docs/scripting/functions/IsPlayerUsingOmp"}}');var s=n(74848),r=n(28453);const l={title:"IsPlayerUsingOfficialClient",sidebar_label:"IsPlayerUsingOfficialClient",description:"Check if the player is using the official SA-MP client.",tags:["player"]},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{VersionWarn:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(i.p,{children:"Check if the player is using the official SA-MP client."}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Name"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"playerid"}),(0,s.jsx)(i.td,{children:"The ID of the player to check."})]})})]}),"\n",(0,s.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:"Returns 1 if the player is using the official client, otherwise 0."}),"\n",(0,s.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    if (IsPlayerUsingOfficialClient(playerid) == 0)\n    {\n        SendClientMessage(playerid, 0xFF0000FF, "[KICK]: You doesn\'t seem to be using the official sa-mp client!");\n        Kick(playerid);\n    }\n\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"IsPlayerUsingOmp",children:"IsPlayerUsingOmp"}),": Check if the player is using the open.mp launcher."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"SendClientCheck",children:"SendClientCheck"}),": Perform a memory check on the client."]}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);