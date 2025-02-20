"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[25496],{7084:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"scripting/callbacks/OnPlayerText","title":"OnPlayerText","description":"Descripci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerText.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerText","permalink":"/es/docs/scripting/callbacks/OnPlayerText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerText.md","tags":[{"inline":true,"label":"player","permalink":"/es/docs/tags/player"}],"version":"current","frontMatter":{"t\xedtulo":"OnPlayerText","descripci\xf3n":"Se llama cuando un jugador env\xeda un mensaje en el chat.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerTakeDamage","permalink":"/es/docs/scripting/callbacks/OnPlayerTakeDamage"},"next":{"title":"OnPlayerUpdate","permalink":"/es/docs/scripting/callbacks/OnPlayerUpdate"}}');var r=a(74848),s=a(28453);const t={"t\xedtulo":"OnPlayerText","descripci\xf3n":"Se llama cuando un jugador env\xeda un mensaje en el chat.",tags:["player"]},i=void 0,c={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Devoluciones",id:"devoluciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Funciones Relacionadas",id:"funciones-relacionadas",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{TipNPCCallbacksES:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacksES",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"Se llama cuando un jugador env\xeda un mensaje en el chat."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nombre"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"El ID del jugador que escribi\xf3 el texto."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"text[]"}),(0,r.jsx)(n.td,{children:"El texto que escribi\xf3 el jugador."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"devoluciones",children:"Devoluciones"}),"\n",(0,r.jsx)(n.p,{children:"1 - Prevendr\xe1 a otros filterscripts de recibir este callback."}),"\n",(0,r.jsx)(n.p,{children:"0 - Indica que este callback ser\xe1 pasado al siguiente filterscript."}),"\n",(0,r.jsx)(n.p,{children:"Siempre se llama primero en filterscripts."}),"\n",(0,r.jsx)(n.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerText(playerid, text[])\n{\n    new pText[144];\n    format(pText, sizeof (pText), "(%d) %s", playerid, text);\n    SendPlayerMessageToAll(playerid, pText);\n    return 0; // ignora el texto predeterminado y env\xeda el personalizado\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"notas",children:"Notas"}),"\n",(0,r.jsx)(a,{}),"\n",(0,r.jsx)(n.h2,{id:"funciones-relacionadas",children:"Funciones Relacionadas"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/SendPlayerMessageToPlayer",children:"SendPlayerMessageToPlayer"}),": Obliga a un jugador a enviar mensajes de texto para un jugador."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/SendPlayerMessageToAll",children:"SendPlayerMessageToAll"}),": Obliga a un jugador a enviar texto para todos los jugadores."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>i});var l=a(96540);const r={},s=l.createContext(r);function t(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);