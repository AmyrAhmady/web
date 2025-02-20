"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[36539],{15553:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"scripting/callbacks/OnPlayerConnect","title":"OnPlayerConnect","description":"Esta callback \xe9 chamda quando um jogador conecta no servidor.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerConnect.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerConnect","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerConnect","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerConnect.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerConnect","sidebar_label":"OnPlayerConnect","description":"Esta callback \xe9 chamda quando um jogador conecta no servidor.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerCommandText","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerCommandText"},"next":{"title":"OnPlayerDeath","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerDeath"}}');var a=t(74848),o=t(28453);const c={title:"OnPlayerConnect",sidebar_label:"OnPlayerConnect",description:"Esta callback \xe9 chamda quando um jogador conecta no servidor.",tags:["player"]},s=void 0,l={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{TipNPCCallbacksPT:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacksPT",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsx)(n.p,{children:"Esta callback \xe9 chamda quando um jogador conecta no servidor."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Nome"}),(0,a.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"playerid"}),(0,a.jsx)(n.td,{children:"O ID do jogador que conectou."})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"retorno",children:"Retorno"}),"\n",(0,a.jsx)(n.p,{children:"1 - Ir\xe1 previnir que outro filterscript receba esta callback."}),"\n",(0,a.jsx)(n.p,{children:"0 - Indica que esta callback ser\xe1 passada para o pr\xf3ximo filterscript."}),"\n",(0,a.jsx)(n.p,{children:"Sempre \xe9 chamada primeiro em filterscripts."}),"\n",(0,a.jsx)(n.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    new\n        string[64],\n        playerName[MAX_PLAYER_NAME];\n\n    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);\n    format(string, sizeof string, "%s entrou no servidor!", playerName);\n    SendClientMessageToAll(0xFFFFFFAA, string);\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"notas",children:"Notas"}),"\n",(0,a.jsx)(t,{}),"\n",(0,a.jsx)(n.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var r=t(96540);const a={},o=r.createContext(a);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);