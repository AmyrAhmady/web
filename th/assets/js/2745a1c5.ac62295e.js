"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[16565],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(96540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}},63604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"scripting/functions/GetPlayerGhostMode","title":"GetPlayerGhostMode","description":"Get player\'s ghost mode.","source":"@site/docs/scripting/functions/GetPlayerGhostMode.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerGhostMode","permalink":"/th/docs/scripting/functions/GetPlayerGhostMode","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerGhostMode.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerGhostMode","sidebar_label":"GetPlayerGhostMode","description":"Get player\'s ghost mode.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerFightingStyle","permalink":"/th/docs/scripting/functions/GetPlayerFightingStyle"},"next":{"title":"GetPlayerGravity","permalink":"/th/docs/scripting/functions/GetPlayerGravity"}}');var r=n(74848),o=n(28453);const i={title:"GetPlayerGhostMode",sidebar_label:"GetPlayerGhostMode",description:"Get player's ghost mode.",tags:["player"]},l=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Get player's ghost mode."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to get the ghost mode of."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"true"})," - Ghost mode is enable."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"false"})," - Ghost mode is disable."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'new string[64];\nformat(string, sizeof(string), "Your ghost mode is %s", GetPlayerGhostMode(playerid) == true ? "enable" : "disable");\nSendClientMessage(playerid, -1, string);\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"TogglePlayerGhostMode",children:"TogglePlayerGhostMode"}),": Toggle player's ghost mode."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);