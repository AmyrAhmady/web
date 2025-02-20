"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[81270],{28453:(e,a,r)=>{r.d(a,{R:()=>t,x:()=>s});var c=r(96540);const n={},o=c.createContext(n);function t(e){const a=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),c.createElement(o.Provider,{value:a},e.children)}},98327:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>l});const c=JSON.parse('{"id":"scripting/callbacks/OnScriptLoadPlayer","title":"OnScriptLoadPlayer","description":"Este callback \xe9 chamado para cada jogador conectado quando um script \xe9 carregado.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnScriptLoadPlayer.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnScriptLoadPlayer","permalink":"/pt-BR/docs/scripting/callbacks/OnScriptLoadPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnScriptLoadPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnScriptLoadPlayer","sidebar_label":"OnScriptLoadPlayer","description":"Este callback \xe9 chamado para cada jogador conectado quando um script \xe9 carregado.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnRecordingPlaybackEnd","permalink":"/pt-BR/docs/scripting/callbacks/OnRecordingPlaybackEnd"},"next":{"title":"OnScriptUnloadPlayer","permalink":"/pt-BR/docs/scripting/callbacks/OnScriptUnloadPlayer"}}');var n=r(74848),o=r(28453);const t={title:"OnScriptLoadPlayer",sidebar_label:"OnScriptLoadPlayer",description:"Este callback \xe9 chamado para cada jogador conectado quando um script \xe9 carregado.",tags:["player"]},s=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retornos",id:"retornos",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Callbacks Relacionados",id:"callbacks-relacionados",level:2}];function d(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{VersionWarn:r}=a;return r||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{name:"callback",version:"omp v1.3.1.2748"}),"\n",(0,n.jsx)(a.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsx)(a.p,{children:"Este callback \xe9 chamado para cada jogador conectado quando um script \xe9 carregado."}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Nome"}),(0,n.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"playerid"}),(0,n.jsx)(a.td,{children:"O ID do jogador para o qual o script foi carregado."})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsxs)(a.td,{children:["bool",":isEntryScript"]}),(0,n.jsx)(a.td,{children:"Determina se \xe9 um script de entrada (script principal) ou um script secund\xe1rio."})]})]})]}),"\n",(0,n.jsx)(a.h2,{id:"retornos",children:"Retornos"}),"\n",(0,n.jsx)(a.p,{children:"Este callback n\xe3o lida com retornos."}),"\n",(0,n.jsx)(a.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-c",children:'public OnScriptLoadPlayer(playerid, bool:isEntryScript)\n{\n    printf("Script carregado para o jogador ID %d (isEntryScript: %s)", playerid, isEntryScript ? "Sim" : "N\xe3o");\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"notas",children:"Notas"}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsxs)(a.p,{children:["Este callback \xe9 chamado quando voc\xea est\xe1 ",(0,n.jsx)(a.strong,{children:"carregando"})," um script secund\xe1rio (filterscript) em tempo de execu\xe7\xe3o."]})}),"\n",(0,n.jsx)(a.h2,{id:"callbacks-relacionados",children:"Callbacks Relacionados"}),"\n",(0,n.jsx)(a.p,{children:"Os seguintes callbacks podem ser \xfateis, pois est\xe3o relacionados a este callback de alguma forma."}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"OnScriptUnloadPlayer",children:"OnScriptUnloadPlayer"}),": Este callback \xe9 chamado para cada jogador conectado quando um script \xe9 descarregado."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"OnPlayerConnect",children:"OnPlayerConnect"}),": Este callback \xe9 chamado quando um jogador se conecta ao servidor."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"OnPlayerDisconnect",children:"OnPlayerDisconnect"}),": Este callback \xe9 chamado quando um jogador sai do servidor."]}),"\n"]})]})}function p(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);