"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[607],{28453:(e,n,c)=>{c.d(n,{R:()=>i,x:()=>a});var t=c(96540);const l={},s=t.createContext(l);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(s.Provider,{value:n},e.children)}},80830:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/callbacks/OnNPCConnect","title":"OnNPCConnect","description":"This callback is called when a NPC successfully connects to the server.","source":"@site/docs/scripting/callbacks/OnNPCConnect.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnNPCConnect","permalink":"/pl/docs/scripting/callbacks/OnNPCConnect","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnNPCConnect.md","tags":[{"inline":true,"label":"npc","permalink":"/pl/docs/tags/npc"}],"version":"current","frontMatter":{"title":"OnNPCConnect","sidebar_label":"OnNPCConnect","description":"This callback is called when a NPC successfully connects to the server.","tags":["npc"]},"sidebar":"docsSidebar","previous":{"title":"OnIncomingConnection","permalink":"/pl/docs/scripting/callbacks/OnIncomingConnection"},"next":{"title":"OnNPCDisconnect","permalink":"/pl/docs/scripting/callbacks/OnNPCDisconnect"}}');var l=c(74848),s=c(28453);const i={title:"OnNPCConnect",sidebar_label:"OnNPCConnect",description:"This callback is called when a NPC successfully connects to the server.",tags:["npc"]},a=void 0,r={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This callback is called when a NPC successfully connects to the server."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"myplayerid"}),(0,l.jsx)(n.td,{children:"The playerid the NPC has been given"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnNPCConnect(myplayerid)\n{\n    printf("I successfully connected the server with ID %i!", myplayerid);\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnNPCDisconnect",children:"OnNPCDisconnect"}),": This callback is called when the NPC gets disconnected from the server."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerConnect",children:"OnPlayerConnect"}),": This callback is called when a player connects to the server."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerDisconnect",children:"OnPlayerDisconnect"}),": This callback is called when a player leaves the server."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);