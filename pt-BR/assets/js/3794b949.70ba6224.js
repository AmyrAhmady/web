"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[884],{16706:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"scripting/callbacks/OnRconLoginAttempt","title":"OnRconLoginAttempt","description":"Essa callback \xe9 executada quando algum jogador tenta login na RCON; seja ele bem sucedido ou n\xe3o.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnRconLoginAttempt.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnRconLoginAttempt","permalink":"/pt-BR/docs/scripting/callbacks/OnRconLoginAttempt","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnRconLoginAttempt.md","tags":[],"version":"current","frontMatter":{"title":"OnRconLoginAttempt","sidebar_label":"OnRconLoginAttempt","description":"Essa callback \xe9 executada quando algum jogador tenta login na RCON; seja ele bem sucedido ou n\xe3o.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnRconCommand","permalink":"/pt-BR/docs/scripting/callbacks/OnRconCommand"},"next":{"title":"OnRecordingPlaybackEnd","permalink":"/pt-BR/docs/scripting/callbacks/OnRecordingPlaybackEnd"}}');var t=o(74848),s=o(28453);const i={title:"OnRconLoginAttempt",sidebar_label:"OnRconLoginAttempt",description:"Essa callback \xe9 executada quando algum jogador tenta login na RCON; seja ele bem sucedido ou n\xe3o.",tags:[]},c=void 0,r={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retornos",id:"retornos",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(n.p,{children:"Essa callback \xe9 executada quando algum jogador tenta login na RCON; seja ele bem sucedido ou n\xe3o."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Nome"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ip[]"}),(0,t.jsx)(n.td,{children:"IP do jogador que tentou fazer login na RCON."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"password[]"}),(0,t.jsx)(n.td,{children:"A senha utilizada no login."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"success"}),(0,t.jsx)(n.td,{children:"0 caso a senha esteja incorreta, 1 caso esteja correta."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"retornos",children:"Retornos"}),"\n",(0,t.jsx)(n.p,{children:"Sempre executada primeiro nos filterscripts."}),"\n",(0,t.jsx)(n.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnRconLoginAttempt(ip[], password[], success)\n{\n    if (!success) //Caso a senha esteja incorreta\n    {\n        printf("FAILED RCON LOGIN BY IP %s USING PASSWORD %s",ip, password);\n        new pip[16];\n        for(new i = GetPlayerPoolSize(); i\xa0!= -1; --i) //Faz um loop por todos os jogadores.\n        {\n            GetPlayerIp(i, pip, sizeof(pip));\n            if (!strcmp(ip, pip, true)) //Caso o IP do jogador seja o mesmo que falhou ao realizar o login.\n            {\n                SendClientMessage(i, 0xFFFFFFFF, "Senha Incorreta! Grande abra\xe7o par\xe7a!"); //Envia uma mensagem de despedida :)\n                Kick(i); //Kicka o jogador.\n            }\n        }\n    }\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"notas",children:"Notas"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Essa callback \xe9 executada somente quando o comando /rcon login \xe9 utilizado in-game. \xc9 executada somente quando o jogador n\xe3o est\xe1 logado na RCON. Quando o jogador j\xe1 est\xe1 logado na RCON a callback OnRconCommand \xe9 executada ao inv\xe9s dessa."})}),"\n",(0,t.jsx)(n.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/IsPlayerAdmin",children:"IsPlayerAdmin"}),": Verifica se o jogador est\xe1 logado na RCON."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/SendRconCommand",children:"SendRconCommand"}),": Envia um comando RCON pelo script."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var a=o(96540);const t={},s=a.createContext(t);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);