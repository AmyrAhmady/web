"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[90351],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const a={},l=r.createContext(a);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:t},e.children)}},84333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/callbacks/OnPlayerStreamIn","title":"OnPlayerStreamIn","description":"This callback is called when a player is streamed by some other player\'s client.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerStreamIn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerStreamIn","permalink":"/th/docs/scripting/callbacks/OnPlayerStreamIn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerStreamIn.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerStreamIn","sidebar_label":"OnPlayerStreamIn","description":"This callback is called when a player is streamed by some other player\'s client.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerStateChange","permalink":"/th/docs/scripting/callbacks/OnPlayerStateChange"},"next":{"title":"OnPlayerStreamOut","permalink":"/th/docs/scripting/callbacks/OnPlayerStreamOut"}}');var a=n(74848),l=n(28453);const s={title:"OnPlayerStreamIn",sidebar_label:"OnPlayerStreamIn",description:"This callback is called when a player is streamed by some other player's client.",tags:["player"]},i=void 0,c={},d=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function o(e){const t={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,a.jsx)(t.p,{children:"This callback is called when a player is streamed by some other player's client."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player who has been streamed."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"forplayerid"}),(0,a.jsx)(t.td,{children:"The ID of the player that streamed the other player in."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,a.jsx)(t.p,{children:"\u0e21\u0e31\u0e19\u0e16\u0e39\u0e01\u0e40\u0e23\u0e35\u0e22\u0e01\u0e43\u0e19\u0e1f\u0e34\u0e25\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e2a\u0e21\u0e2d"}),"\n",(0,a.jsx)(t.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'public OnPlayerStreamIn(playerid, forplayerid)\n{\n    new string[40];\n    format(string, sizeof(string), "Player %d is now streamed in for you.", playerid);\n    SendClientMessage(forplayerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"NPC \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e23\u0e35\u0e22\u0e01 Callback \u0e19\u0e35\u0e49\u0e44\u0e14\u0e49"})}),"\n",(0,a.jsx)(t.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}}}]);