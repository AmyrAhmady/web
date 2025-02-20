"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[32120],{28453:(e,s,a)=>{a.d(s,{R:()=>i,x:()=>t});var n=a(96540);const d={},r=n.createContext(d);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(r.Provider,{value:s},e.children)}},33790:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"scripting/functions/AddPlayerClassEx","title":"AddPlayerClassEx","description":"Esta fun\xe7\xe3o \xe9 exatamente igual \xe0 fun\xe7\xe3o AddPlayerClass, com a adi\xe7\xe3o de um par\xe2metro de equipe.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/functions/AddPlayerClassEx.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddPlayerClassEx","permalink":"/pt-BR/docs/scripting/functions/AddPlayerClassEx","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AddPlayerClassEx.md","tags":[],"version":"current","frontMatter":{"title":"AddPlayerClassEx","sidebar_label":"AddPlayerClassEx","description":"Esta fun\xe7\xe3o \xe9 exatamente igual \xe0 fun\xe7\xe3o AddPlayerClass, com a adi\xe7\xe3o de um par\xe2metro de equipe.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"AddPlayerClass","permalink":"/pt-BR/docs/scripting/functions/AddPlayerClass"},"next":{"title":"AddServerRule","permalink":"/pt-BR/docs/scripting/functions/AddServerRule"}}');var d=a(74848),r=a(28453);const i={title:"AddPlayerClassEx",sidebar_label:"AddPlayerClassEx",description:"Esta fun\xe7\xe3o \xe9 exatamente igual \xe0 fun\xe7\xe3o AddPlayerClass, com a adi\xe7\xe3o de um par\xe2metro de equipe.",tags:[]},t=void 0,o={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsx)(s.p,{children:"Esta fun\xe7\xe3o \xe9 exatamente igual \xe0 fun\xe7\xe3o AddPlayerClass, com a adi\xe7\xe3o de um par\xe2metro de equipe."}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Nome"}),(0,d.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"teamid"}),(0,d.jsx)(s.td,{children:"A equipe em que o jogador dever\xe1 dar spawn."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"modelid"}),(0,d.jsx)(s.td,{children:"A skin com a qual o jogador ir\xe1 dar spawn."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Float: spawn_x"}),(0,d.jsx)(s.td,{children:"A coordenada X do ponto de spawn desta classe."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Float: spawn_y"}),(0,d.jsx)(s.td,{children:"A coordenada Y do ponto de spawn desta classe."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Float: spawn_z"}),(0,d.jsx)(s.td,{children:"A coordenada Z do ponto de desova desta classe."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Float: z_angle"}),(0,d.jsx)(s.td,{children:"O \xe2ngulo Z que o jogador dever\xe1 ser voltado ap\xf3s o spawn."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"weapon1"}),(0,d.jsx)(s.td,{children:"A primeira arma com que o jogador ir\xe1 dar spawn."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"weapon1_ammo"}),(0,d.jsx)(s.td,{children:"A quantidade de muni\xe7\xe3o para a arma prim\xe1ria."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"weapon2"}),(0,d.jsx)(s.td,{children:"A segunda arma com que o jogador ir\xe1 dar spawn."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"weapon2_ammo"}),(0,d.jsx)(s.td,{children:"A quantidade de muni\xe7\xe3o para a arma secund\xe1ria."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"weapon3"}),(0,d.jsx)(s.td,{children:"A terceira arma com que o jogador ir\xe1 dar spawn."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"weapon3_ammo"}),(0,d.jsx)(s.td,{children:"A quantidade de muni\xe7\xe3o para a arma terci\xe1ria."})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"retorno",children:"Retorno"}),"\n",(0,d.jsx)(s.p,{children:"O ID da classe que acabou de ser adicionada."}),"\n",(0,d.jsx)(s.p,{children:"319 se o limite da classe (320) foi atingido. O maior ID de classe poss\xedvel \xe9 319."}),"\n",(0,d.jsx)(s.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Os jogadores podem dar spawn com:\n    // Personagem do CJ (ID 0) no time 1.\n    // Personagem do The Truth (ID 1) no time 2.\n    AddPlayerClassEx(1, 0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // CJ\n    AddPlayerClassEx(2, 1, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // The Truth\n    return 1;\n}\n"})}),"\n",(0,d.jsx)(s.h2,{id:"notas",children:"Notas"}),"\n",(0,d.jsx)(s.admonition,{type:"tip",children:(0,d.jsx)(s.p,{children:"A identifica\xe7\xe3o m\xe1xima da classe \xe9 319 (come\xe7ando em 0, portanto, um total de 320 classes). Quando esse limite for atingido, quaisquer outras classes adicionadas substituir\xe3o a ID 319."})}),"\n",(0,d.jsx)(s.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.a,{href:"/pt-BR/docs/scripting/functions/AddPlayerClass",children:"AddPlayerClass"}),": Adiciona uma classe \xe0 sele\xe7\xe3o de classes."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.a,{href:"/pt-BR/docs/scripting/functions/SetSpawnInfo",children:"SetSpawnInfo"}),": Define a configura\xe7\xe3o de spawn para um jogador."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.a,{href:"../functions/SetPlayerTeam.md",children:"SetPlayerTeam"}),": Define o time de um jogador."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.a,{href:"../functions/SetPlayerSkin.md",children:"SetPlayerSkin"}),": Define a skin (personagem) de um jogador."]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}}}]);