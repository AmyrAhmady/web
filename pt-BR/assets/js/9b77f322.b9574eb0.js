"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[12561],{28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>t});var r=a(96540);const l={},o=r.createContext(l);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(o.Provider,{value:n},e.children)}},34472:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"scripting/callbacks/OnPlayerEnterPlayerGangZone","title":"OnPlayerEnterPlayerGangZone","description":"Este callback \xe9 chamado quando um jogador entra em uma player gangzone.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerEnterPlayerGangZone.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEnterPlayerGangZone","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerEnterPlayerGangZone","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerEnterPlayerGangZone.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/pt-BR/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"OnPlayerEnterPlayerGangZone","sidebar_label":"OnPlayerEnterPlayerGangZone","description":"Este callback \xe9 chamado quando um jogador entra em uma player gangzone.","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEnterGangZone","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerEnterGangZone"},"next":{"title":"OnPlayerEnterRaceCheckpoint","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint"}}');var l=a(74848),o=a(28453);const s={title:"OnPlayerEnterPlayerGangZone",sidebar_label:"OnPlayerEnterPlayerGangZone",description:"Este callback \xe9 chamado quando um jogador entra em uma player gangzone.",tags:["player","gangzone"]},t=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retornos",id:"retornos",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Callbacks Relacionados",id:"callbacks-relacionados",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{VersionWarn:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{name:"callback",version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,l.jsx)(n.p,{children:"Este callback \xe9 chamado quando um jogador entra em uma player gangzone."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Nome"}),(0,l.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"O ID do jogador que entrou na player gangzone."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"zoneid"}),(0,l.jsx)(n.td,{children:"O ID da player gangzone em que o jogador entrou."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"retornos",children:"Retornos"}),"\n",(0,l.jsx)(n.p,{children:"Ele \xe9 sempre chamado primeiro no modo de jogo."}),"\n",(0,l.jsx)(n.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerEnterPlayerGangZone(playerid, zoneid)\n{\n    new string[128];\n    format(string, sizeof(string), "Voc\xea est\xe1 entrando na player gangzone %i", zoneid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"callbacks-relacionados",children:"Callbacks Relacionados"}),"\n",(0,l.jsx)(n.p,{children:"Os seguintes callbacks podem ser \xfateis, pois est\xe3o relacionados a este callback de alguma forma."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerLeavePlayerGangZone",children:"OnPlayerLeavePlayerGangZone"}),": Este callback \xe9 chamado quando um jogador sai de uma player gangzone."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,l.jsx)(n.p,{children:"As seguintes fun\xe7\xf5es podem ser \xfateis, pois est\xe3o relacionadas a este callback de alguma forma:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/CreatePlayerGangZone",children:"CreatePlayerGangZone"}),": Cria uma player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/PlayerGangZoneDestroy",children:"PlayerGangZoneDestroy"}),": Destroi uma player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/UsePlayerGangZoneCheck",children:"UsePlayerGangZoneCheck"}),": Ativa o callback quando um jogador entra nesta zona."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);