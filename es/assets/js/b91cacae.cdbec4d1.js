"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[5146],{17875:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"scripting/callbacks/OnNPCConnect","title":"OnNPCConnect","description":"Descripci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/scripting/callbacks/OnNPCConnect.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnNPCConnect","permalink":"/es/docs/scripting/callbacks/OnNPCConnect","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnNPCConnect.md","tags":[{"inline":true,"label":"npc","permalink":"/es/docs/tags/npc"}],"version":"current","frontMatter":{"t\xedtulo":"OnNPCConnect","descripci\xf3n":"This callback is called when a NPC successfully connects to the server.","tags":["npc"]},"sidebar":"docsSidebar","previous":{"title":"OnIncomingConnection","permalink":"/es/docs/scripting/callbacks/OnIncomingConnection"},"next":{"title":"OnNPCDisconnect","permalink":"/es/docs/scripting/callbacks/OnNPCDisconnect"}}');var t=c(74848),l=c(28453);const a={"t\xedtulo":"OnNPCConnect","descripci\xf3n":"This callback is called when a NPC successfully connects to the server.",tags:["npc"]},i=void 0,r={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Funciones Relacionadas",id:"funciones-relacionadas",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsx)(n.p,{children:"Este callback se llama cuando un NPC se conecta con \xe9xito al servidor."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Nombre"}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"myplayerid"}),(0,t.jsx)(n.td,{children:"El ID de jugador que se le ha dado al NPC"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnNPCConnect(myplayerid)\n{\n    printf("Me conect\xe9 correctamente al servidor con la ID %i!", myplayerid);\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"funciones-relacionadas",children:"Funciones Relacionadas"}),"\n",(0,t.jsx)(n.p,{children:"Los siguientes callbacks pueden ser \xfatiles, ya que est\xe1n relacionadas con esta devoluci\xf3n de llamada de una forma u otra."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnNPCDisconnect",children:"OnNPCDisconnect"}),": Este callback se llama cuando el NPC se desconecta del servidor."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnPlayerConnect",children:"OnPlayerConnect"}),": Este callback se llama cuando un jugador se conecta al servidor."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnPlayerDisconnect",children:"OnPlayerDisconnect"}),": Este callback se llama cuando un jugador abandona el servidor."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>a,x:()=>i});var s=c(96540);const t={},l=s.createContext(t);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);