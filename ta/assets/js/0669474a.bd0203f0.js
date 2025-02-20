"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[65160],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}},29685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"scripting/functions/HasGameText","title":"HasGameText","description":"Does the player currently have text in the given gametext style displayed?","source":"@site/docs/scripting/functions/HasGameText.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/HasGameText","permalink":"/ta/docs/scripting/functions/HasGameText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/HasGameText.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"}],"version":"current","frontMatter":{"title":"HasGameText","sidebar_label":"HasGameText","description":"Does the player currently have text in the given gametext style displayed?","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"HTTP","permalink":"/ta/docs/scripting/functions/HTTP"},"next":{"title":"HasObjectCameraCollision","permalink":"/ta/docs/scripting/functions/HasObjectCameraCollision"}}');var r=n(74848),i=n(28453);const a={title:"HasGameText",sidebar_label:"HasGameText",description:"Does the player currently have text in the given gametext style displayed?",tags:["player"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Does the player currently have text in the given gametext style displayed?"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to check the gametext for."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"style"}),(0,r.jsxs)(t.td,{children:["The ",(0,r.jsx)(t.a,{href:"../resources/gametextstyles",children:"style"})," of text to check."]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:["This function returns ",(0,r.jsx)(t.strong,{children:"true"})," if the player has gametext, or ",(0,r.jsx)(t.strong,{children:"false"})," if it is not."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    GameTextForPlayer(playerid, "Welcome to the server!", 5000, 3);\n\n    if (HasGameText(playerid, 3))\n    {\n        // Do something\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GameTextForPlayer",children:"GameTextForPlayer"}),": Display gametext to a player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"HideGameTextForPlayer",children:"HideGameTextForPlayer"}),": Stop showing a gametext style to a player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GameTextForAll",children:"GameTextForAll"}),": Display gametext to all players."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"HideGameTextForAll",children:"HideGameTextForAll"}),": Stop showing a gametext style for all players."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetGameText",children:"GetGameText"}),": Gets all the information on the given game text style."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);