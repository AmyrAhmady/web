"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[58616],{9068:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"scripting/callbacks/OnPlayerUpdate","title":"OnPlayerUpdate","description":"Essa callback \xe9 executada quando o cliente/player faz o update do seu status para o servidor.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerUpdate.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerUpdate","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerUpdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerUpdate.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerUpdate","sidebar_label":"OnPlayerUpdate","description":"Essa callback \xe9 executada quando o cliente/player faz o update do seu status para o servidor.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerText","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerText"},"next":{"title":"OnPlayerWeaponShot","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerWeaponShot"}}');var t=n(74848),r=n(28453);const s={title:"OnPlayerUpdate",sidebar_label:"OnPlayerUpdate",description:"Essa callback \xe9 executada quando o cliente/player faz o update do seu status para o servidor.",tags:["player"]},i=void 0,l={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retornos",id:"retornos",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Notas",id:"notas",level:2}];function p(e){const a={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{TipNPCCallbacksPT:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacksPT",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(a.p,{children:"Essa callback \xe9 executada quando o cliente/player faz o update do seu status para o servidor. \xc9 geralmente utilizada para criar callbacks customizadas para o cliente, das quais n\xe3o s\xe3o ativas no lado do servidor, tais como vida, colete, ou at\xe9 mesmo troca de armas."}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Nome"}),(0,t.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsx)(a.tbody,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"playerid"}),(0,t.jsx)(a.td,{children:"ID do jogador que est\xe1 enviando o pacote."})]})})]}),"\n",(0,t.jsx)(a.h2,{id:"retornos",children:"Retornos"}),"\n",(0,t.jsx)(a.p,{children:"0 - Update do jogador n\xe3o ser\xe1 replicado para os outros."}),"\n",(0,t.jsx)(a.p,{children:"1 - Indica que o update do jogador deve ser processado e eviado para os outros jogadores."}),"\n",(0,t.jsx)(a.p,{children:"\xc9 sempre executada primeiro nos filterscripts."}),"\n",(0,t.jsx)(a.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-c",children:'public OnPlayerUpdate(playerid)\n{\n    new iCurWeap = GetPlayerWeapon(playerid); // Retorna a arma atual do jogador\n    if (iCurWeap\xa0!= GetPVarInt(playerid, "iCurrentWeapon")) // Caso o mesmo tenha trocado de arma ap\xf3s o \xfaltimo update\n    {\n        // Vamos chamar a callback OnPlayerChangeWeapon\n        OnPlayerChangeWeapon(playerid, GetPVarInt(playerid, "iCurrentWeapon"), iCurWeap);\n        SetPVarInt(playerid, "iCurrentWeapon", iCurWeap);//Atualiza a v\xe1riavel da arma\n    }\n    return 1; // Envia o update para os outros jogadores.\n}\n\nstock OnPlayerChangeWeapon(playerid, oldweapon, newweapon)\n{\n    new     s[128],\n        oWeapon[24],\n        nWeapon[24];\n\n    GetWeaponName(oldweapon, oWeapon, sizeof(oWeapon));\n    GetWeaponName(newweapon, nWeapon, sizeof(nWeapon));\n\n    format(s, sizeof(s), "Voc\xea trocou sua arma de %s para %s!", oWeapon, nWeapon);\n\n    SendClientMessage(playerid, 0xFFFFFFFF, s);\n}\npublic OnPlayerUpdate(playerid)\n{\n    new Float:fHealth;\n\n    GetPlayerHealth(playerid, fHealth);\n\n    if (fHealth\xa0!= GetPVarFloat(playerid, "faPlayerHealth"))\n    {\n        // A vida do jogador mudou desde o \xfaltimo update -> server, ent\xe3o obviamente foi atualizada.\n        // Vamos fazer uma checagem mais profunda para ver se o mesmo esta ganhando ou perdendo vida, anti-health cheat?\xa0;)\n\n        if (fHealth > GetPVarFloat(playerid, "faPlayerHealth"))\n        {\n            /* Ele ganhou vida! Xitando? Escreva seu pr\xf3prio script para saber como o player esta ganhando vida... */\n        }\n        else\n        {\n            /* Ele perdeu vida! */\n        }\n\n        SetPVarFloat(playerid, "faPlayerHealth", fHealth);\n    }\n}\n'})}),"\n",(0,t.jsx)(a.h2,{id:"notas",children:"Notas"}),"\n",(0,t.jsx)(n,{}),"\n",(0,t.jsx)(a.admonition,{type:"warning",children:(0,t.jsx)(a.p,{children:"Essa callback \xe9 executada, aproximadamente, 30 vezes por segundo, por jogador; Use a mesma somente caso saiba o que est\xe1 fazendo (ou talvez seja mais importante saber para que ela N\xc3O DEVE SER USADA). A frequ\xeancia que essa callback \xe9 executada varia dependendo da situa\xe7\xe3o e do que o player est\xe1 fazendo. Dirigir ou participar de um tiroteio vai fazer com que os updates aumentem drasticamente, diferente se o jogador estiver parado..."})})]})}function c(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>i});var o=n(96540);const t={},r=o.createContext(t);function s(e){const a=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:a},e.children)}}}]);