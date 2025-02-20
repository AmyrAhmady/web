"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[76784],{28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(96540);const a={},t=i.createContext(a);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(t.Provider,{value:n},e.children)}},73779:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scripting/callbacks/OnClientMessage","title":"OnClientMessage","description":"Ovaj callback se poziva kada god NPC vidi ClientMessage.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/callbacks/OnClientMessage.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnClientMessage","permalink":"/bs/docs/scripting/callbacks/OnClientMessage","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnClientMessage.md","tags":[],"version":"current","frontMatter":{"title":"OnClientMessage","sidebar_label":"OnClientMessage","description":"Ovaj callback se poziva kada god NPC vidi ClientMessage.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnClientCheckResponse","permalink":"/bs/docs/scripting/callbacks/OnClientCheckResponse"},"next":{"title":"OnDialogResponse","permalink":"/bs/docs/scripting/callbacks/OnDialogResponse"}}');var a=s(74848),t=s(28453);const r={title:"OnClientMessage",sidebar_label:"OnClientMessage",description:"Ovaj callback se poziva kada god NPC vidi ClientMessage.",tags:[]},l=void 0,c={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function o(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,a.jsxs)(n.p,{children:["Ovaj callback se poziva kada god NPC vidi ClientMessage (poruku poslanu od game-klijenta). Ovo \u0107e biti svaki put kada ",(0,a.jsx)(n.code,{children:"SendClientMessageToAll"})," funkcija bude pozvana i svaki put kada funkcija ",(0,a.jsx)(n.code,{children:"SendClientMessage"})," bude slala prema NPC-u. Ovaj callback se ne\u0107e pozvati kada neko ka\u017ee ne\u0161to. Za verziju ovoga sa tekstom igra\u010da pogledaj funkciju NPC",":OnPlayerText","."]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Ime"}),(0,a.jsx)(n.th,{children:"Deskripcija"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"color"}),(0,a.jsx)(n.td,{children:"Boja ClientMessage poruke."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"text[]"}),(0,a.jsx)(n.td,{children:"Prava poruka."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"Ovaj callback ne obra\u0111uje povratne vrijednosti (returnove)."}),"\n",(0,a.jsx)(n.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'public OnClientMessage(color, text[])\n{\n    if (strfind(text,"Bank Balance: $0")\xa0!= -1)\n    {\n        SendClientMessage(playerid, -1, "Ja sam siromasan :(");\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}}}]);