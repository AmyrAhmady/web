"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[41116],{23224:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"scripting/functions/EnableStuntBonusForPlayer","title":"EnableStuntBonusForPlayer","description":"Toggle stunt bonuses for a player.","source":"@site/docs/scripting/functions/EnableStuntBonusForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/EnableStuntBonusForPlayer","permalink":"/docs/scripting/functions/EnableStuntBonusForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/EnableStuntBonusForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/docs/tags/player"}],"version":"current","frontMatter":{"title":"EnableStuntBonusForPlayer","sidebar_label":"EnableStuntBonusForPlayer","description":"Toggle stunt bonuses for a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"EnableStuntBonusForAll","permalink":"/docs/scripting/functions/EnableStuntBonusForAll"},"next":{"title":"EnableTirePopping","permalink":"/docs/scripting/functions/EnableTirePopping"}}');var r=t(74848),l=t(28453);const o={title:"EnableStuntBonusForPlayer",sidebar_label:"EnableStuntBonusForPlayer",description:"Toggle stunt bonuses for a player.",tags:["player"]},i=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Toggle stunt bonuses for a player. Enabled by default."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player to toggle stunt bonuses for."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["bool",":enable"]}),(0,r.jsx)(n.td,{children:"'true' to enable stunt bonuses and 'false' to disable them."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"false"})," - The function failed to execute. The player is not connected."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"public OnPlayerConnect(playerid)\n{\n    EnableStuntBonusForPlayer(playerid, false); // Disable stunt bonuses when the player connects to the server.\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"EnableStuntBonusForAll",children:"EnableStuntBonusForAll"}),": Toggle stunt bonuses for all players."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(96540);const r={},l=s.createContext(r);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);