"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[64654],{20642:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"scripting/functions/IsPlayerUsingOmp","title":"IsPlayerUsingOmp","description":"Check if the player is using the open.mp launcher.","source":"@site/docs/scripting/functions/IsPlayerUsingOmp.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerUsingOmp","permalink":"/pl/docs/scripting/functions/IsPlayerUsingOmp","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsPlayerUsingOmp.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"}],"version":"current","frontMatter":{"title":"IsPlayerUsingOmp","sidebar_label":"IsPlayerUsingOmp","description":"Check if the player is using the open.mp launcher.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerUsingOfficialClient","permalink":"/pl/docs/scripting/functions/IsPlayerUsingOfficialClient"},"next":{"title":"IsPlayerWidescreenToggled","permalink":"/pl/docs/scripting/functions/IsPlayerWidescreenToggled"}}');var t=i(74848),r=i(28453);const l={title:"IsPlayerUsingOmp",sidebar_label:"IsPlayerUsingOmp",description:"Check if the player is using the open.mp launcher.",tags:["player"]},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{VersionWarn:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{version:"omp 1.4.0.2779"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Check if the player is using the open.mp launcher."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"The ID of the player to check."})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"Returns 1 if the player is using the open.mp launcher, otherwise 0."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    // Player is using the open.mp launcher\n    if(IsPlayerUsingOmp(playerid))\n    {\n        SendClientMessage(playerid, -1, "You are using the open.mp launcher.");\n    }\n\n    // Player is not using the open.mp launcher\n    else\n    {\n        SendClientMessage(playerid, 0xFF0000FF, "[KICK]: You don\'t seem to be using the open.mp launcher");\n        Kick(playerid);\n    }\n\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"IsPlayerUsingOfficialClient",children:"IsPlayerUsingOfficialClient"}),": Check if the player is using the official SA-MP client."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"SendClientCheck",children:"SendClientCheck"}),": Perform a memory check on the client."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var s=i(96540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);