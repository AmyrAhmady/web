"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[58422],{28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>r});var t=n(96540);const a={},l=t.createContext(a);function c(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(l.Provider,{value:s},e.children)}},90349:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/callbacks/OnClientMessage","title":"OnClientMessage","description":"Esta callback \xe9 chamada toda vez que um NPC ver uma ClientMessage.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnClientMessage.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnClientMessage","permalink":"/pt-BR/docs/scripting/callbacks/OnClientMessage","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnClientMessage.md","tags":[],"version":"current","frontMatter":{"title":"OnClientMessage","sidebar_label":"OnClientMessage","description":"Esta callback \xe9 chamada toda vez que um NPC ver uma ClientMessage.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnClientCheckResponse","permalink":"/pt-BR/docs/scripting/callbacks/OnClientCheckResponse"},"next":{"title":"OnDialogResponse","permalink":"/pt-BR/docs/scripting/callbacks/OnDialogResponse"}}');var a=n(74848),l=n(28453);const c={title:"OnClientMessage",sidebar_label:"OnClientMessage",description:"Esta callback \xe9 chamada toda vez que um NPC ver uma ClientMessage.",tags:[]},r=void 0,i={},o=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retornos",id:"retornos",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function d(e){const s={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(s.p,{children:["Essa callback \xe9 chamada sempre que um NPC ver uma ClientMessage. Isso acontecer\xe1 sempre que uma fun\xe7\xe3o SendClientMessageToAll for usada e sempre que uma fun\xe7\xe3o SendClientMessage \xe9 enviada para um NPC. Esta callback n\xe3o ser\xe1 chamada quando algu\xe9m falar algo. Para este tipo de texto, veja: NPC",":OnPlayerText","."]}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Nome"}),(0,a.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"color"}),(0,a.jsx)(s.td,{children:"A cor que o ClientMessage \xe9."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"text[]"}),(0,a.jsx)(s.td,{children:"A mensagem em s\xed."})]})]})]}),"\n",(0,a.jsx)(s.h2,{id:"retornos",children:"Retornos"}),"\n",(0,a.jsx)(s.p,{children:"Esta callback n\xe3o suporta retornos."}),"\n",(0,a.jsx)(s.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-c",children:'public OnClientMessage(color, text[])\n{\n    if (strfind(text,"Balan\xe7o Banc\xe1rio: $0")\xa0!= -1)\n    {\n        SendClientMessage(playerid, -1, "Eu sou pobre\xa0:(");\n    }\n}\n'})}),"\n",(0,a.jsx)(s.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"})]})}function u(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);