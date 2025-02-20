"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[65646],{28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>t});var i=a(96540);const c={},r=i.createContext(c);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(r.Provider,{value:n},e.children)}},43339:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"scripting/callbacks/OnPickupStreamOut","title":"OnPickupStreamOut","description":"Este callback \xe9 chamado quando um pickup sai do campo visual de um jogador.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPickupStreamOut.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPickupStreamOut","permalink":"/pt-BR/docs/scripting/callbacks/OnPickupStreamOut","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPickupStreamOut.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPickupStreamOut","sidebar_label":"OnPickupStreamOut","description":"Este callback \xe9 chamado quando um pickup sai do campo visual de um jogador.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPickupStreamIn","permalink":"/pt-BR/docs/scripting/callbacks/OnPickupStreamIn"},"next":{"title":"OnPlayerClickGangZone","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerClickGangZone"}}');var c=a(74848),r=a(28453);const s={title:"OnPickupStreamOut",sidebar_label:"OnPickupStreamOut",description:"Este callback \xe9 chamado quando um pickup sai do campo visual de um jogador.",tags:["player"]},t=void 0,o={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retornos",id:"retornos",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Callbacks Relacionados",id:"callbacks-relacionados",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{VersionWarnPT:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnPT",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{name:"callback",version:"omp v1.1.0.2612"}),"\n",(0,c.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,c.jsx)(n.p,{children:"Este callback \xe9 chamado quando um pickup sai do campo visual de um jogador."}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Nome"}),(0,c.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"pickupid"}),(0,c.jsxs)(n.td,{children:["O ID do pickup, retornado por ",(0,c.jsx)(n.a,{href:"../functions/CreatePickup",children:"CreatePickup"}),"."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"playerid"}),(0,c.jsx)(n.td,{children:"O ID do jogador cujo pickup saiu do campo visual."})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"retornos",children:"Retornos"}),"\n",(0,c.jsx)(n.p,{children:"Este callback \xe9 sempre chamado primeiro no modo de jogo."}),"\n",(0,c.jsx)(n.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:'new g_PickupHealth;\n\npublic OnGameModeInit()\n{\n    g_PickupHealth = CreatePickup(1240, 2, 2009.8474, 1218.0459, 10.8175);\n    return 1;\n}\n\npublic OnPickupStreamOut(pickupid, playerid)\n{\n    if (pickupid == g_PickupHealth)\n    {\n        printf("g_PickupHealth saiu do campo visual do jogador id %d", playerid);\n    }\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(n.h2,{id:"callbacks-relacionados",children:"Callbacks Relacionados"}),"\n",(0,c.jsx)(n.p,{children:"Os seguintes callbacks podem ser \xfateis, pois est\xe3o relacionados a este callback de alguma forma."}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"OnPlayerPickUpPickup",children:"OnPlayerPickUpPickup"}),": Chamado quando um jogador pega um pickup."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"OnPickupStreamIn",children:"OnPickupStreamIn"}),": Chamado quando um pickup entra no campo visual de um jogador."]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,c.jsx)(n.p,{children:"As seguintes fun\xe7\xf5es podem ser \xfateis, pois est\xe3o relacionadas a este callback de alguma forma."}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"../functions/CreatePickup",children:"CreatePickup"}),": Criar um pickup."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"../functions/DestroyPickup",children:"DestroyPickup"}),": Destruir um pickup."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}}}]);