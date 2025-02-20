"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[99666],{28453:(e,n,c)=>{c.d(n,{R:()=>i,x:()=>r});var t=c(96540);const s={},l=t.createContext(s);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:n},e.children)}},62720:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/callbacks/OnNPCDisconnect","title":"OnNPCDisconnect","description":"This callback is called when the NPC gets disconnected from the server.","source":"@site/docs/scripting/callbacks/OnNPCDisconnect.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnNPCDisconnect","permalink":"/it/docs/scripting/callbacks/OnNPCDisconnect","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnNPCDisconnect.md","tags":[{"inline":true,"label":"npc","permalink":"/it/docs/tags/npc"}],"version":"current","frontMatter":{"title":"OnNPCDisconnect","sidebar_label":"OnNPCDisconnect","description":"This callback is called when the NPC gets disconnected from the server.","tags":["npc"]},"sidebar":"docsSidebar","previous":{"title":"OnNPCConnect","permalink":"/it/docs/scripting/callbacks/OnNPCConnect"},"next":{"title":"OnNPCEnterVehicle","permalink":"/it/docs/scripting/callbacks/OnNPCEnterVehicle"}}');var s=c(74848),l=c(28453);const i={title:"OnNPCDisconnect",sidebar_label:"OnNPCDisconnect",description:"This callback is called when the NPC gets disconnected from the server.",tags:["npc"]},r=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This callback is called when the NPC gets disconnected from the server."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"reason[]"}),(0,s.jsx)(n.td,{children:"The reason why the bot has disconnected from the server"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnNPCDisconnect(reason[])\n{\n    printf("Disconnected from the server. %s", reason);\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,s.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"OnNPCConnect",children:"OnNPCConnect"}),": This callback is called when the NPC successfully connects to the server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"OnPlayerDisconnect",children:"OnPlayerDisconnect"}),": This callback is called when a player leaves the server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"OnPlayerConnect",children:"OnPlayerConnect"}),": This callback is called when a player connects to the server."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);