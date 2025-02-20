"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[78698],{28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var a=n(96540);const l={},t=a.createContext(l);function i(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(t.Provider,{value:s},e.children)}},50746:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"scripting/callbacks/OnPlayerRequestSpawn","title":"OnPlayerRequestSpawn","description":"This callback is called when a player attempts to spawn via class selection either by pressing SHIFT or clicking the \'Spawn\' button.","source":"@site/docs/scripting/callbacks/OnPlayerRequestSpawn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerRequestSpawn","permalink":"/hu/docs/scripting/callbacks/OnPlayerRequestSpawn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerRequestSpawn.md","tags":[{"inline":true,"label":"player","permalink":"/hu/docs/tags/player"},{"inline":true,"label":"class","permalink":"/hu/docs/tags/class"}],"version":"current","frontMatter":{"title":"OnPlayerRequestSpawn","sidebar_label":"OnPlayerRequestSpawn","description":"This callback is called when a player attempts to spawn via class selection either by pressing SHIFT or clicking the \'Spawn\' button.","tags":["player","class"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerRequestDownload","permalink":"/hu/docs/scripting/callbacks/OnPlayerRequestDownload"},"next":{"title":"OnPlayerSelectObject","permalink":"/hu/docs/scripting/callbacks/OnPlayerSelectObject"}}');var l=n(74848),t=n(28453);const i={title:"OnPlayerRequestSpawn",sidebar_label:"OnPlayerRequestSpawn",description:"This callback is called when a player attempts to spawn via class selection either by pressing SHIFT or clicking the 'Spawn' button.",tags:["player","class"]},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function p(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{TipNPCCallbacks:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(s.p,{children:"This callback is called when a player attempts to spawn via class selection either by pressing SHIFT or clicking the 'Spawn' button."}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Name"}),(0,l.jsx)(s.th,{children:"Description"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"playerid"}),(0,l.jsx)(s.td,{children:"The ID of the player that requested to spawn."})]})})]}),"\n",(0,l.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(s.p,{children:"It is always called first in filterscripts so returning 0 there also blocks other scripts from processing it."}),"\n",(0,l.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-c",children:'public OnPlayerRequestSpawn(playerid)\n{\n    if (!IsPlayerAdmin(playerid))\n    {\n        SendClientMessage(playerid, -1, "You may not spawn.");\n        return 0;\n    }\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(n,{}),"\n",(0,l.jsx)(s.admonition,{type:"tip",children:(0,l.jsx)(s.p,{children:"To prevent players from spawning with certain classes, the last viewed class must be saved in a variable in OnPlayerRequestClass."})}),"\n",(0,l.jsx)(s.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsx)(s.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"OnPlayerSpawn",children:"OnPlayerSpawn"}),": This callback is called when a player spawns."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"OnPlayerRequestClass",children:"OnPlayerRequestClass"}),": This callback is called when a player changes class at class selection."]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}}}]);