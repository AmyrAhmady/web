"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[68180],{28453:(e,o,d)=>{d.d(o,{R:()=>s,x:()=>t});var n=d(96540);const a={},r=n.createContext(a);function s(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:o},e.children)}},46883:(e,o,d)=>{d.r(o),d.d(o,{assets:()=>i,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"scripting/functions/AddCharModel","title":"AddCharModel","description":"Adiciona um novo modelo de personagem personalizado para download. Os arquivos do modelo s\xe3o armazenados em Documentos\\\\GTA San Andreas User Files\\\\SAMP\\\\cache do jogador sob a pasta IP e Porta do Servidor em um arquivo no formato CRC.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/functions/AddCharModel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddCharModel","permalink":"/pt-BR/docs/scripting/functions/AddCharModel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AddCharModel.md","tags":[],"version":"current","frontMatter":{"title":"AddCharModel","sidebar_label":"AddCharModel","description":"Adiciona um novo modelo de personagem personalizado para download. Os arquivos do modelo s\xe3o armazenados em Documentos\\\\GTA San Andreas User Files\\\\SAMP\\\\cache do jogador sob a pasta IP e Porta do Servidor em um arquivo no formato CRC.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleStreamOut","permalink":"/pt-BR/docs/scripting/callbacks/OnVehicleStreamOut"},"next":{"title":"AddMenuItem","permalink":"/pt-BR/docs/scripting/functions/AddMenuItem"}}');var a=d(74848),r=d(28453);const s={title:"AddCharModel",sidebar_label:"AddCharModel",description:"Adiciona um novo modelo de personagem personalizado para download. Os arquivos do modelo s\xe3o armazenados em DocumentosGTA San Andreas User FilesSAMPcache do jogador sob a pasta IP e Porta do Servidor em um arquivo no formato CRC.",tags:[]},t=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsx)(o.admonition,{type:"warning",children:(0,a.jsx)(o.p,{children:"Esta fun\xe7\xe3o foi implementada no SA-MP 0.3.DL-R1 e n\xe3o funcionar\xe1 em vers\xf5es anteriores."})}),"\n",(0,a.jsx)(o.p,{children:"Adiciona um novo modelo de personagem personalizado para download. Os arquivos do modelo ser\xe3o armazenados em Documentos\\GTA San Andreas User Files\\SAMP\\cache do jogador sob a pasta IP e Porta do Servidor em um arquivo no formato CRC."}),"\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Nome"}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"baseid"}),(0,a.jsx)(o.td,{children:"O ID do modelo da skin original a ser usado como base (personagens originais s\xe3o usados caso o download falhar)."})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"newid"}),(0,a.jsx)(o.td,{children:"O ID do modelo da nova skin. Varia entre 20001 a 30000 (10000 slots) para serem usados posteriormente com SetPlayerSkin."})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"dffname"}),(0,a.jsx)(o.td,{children:"Nome do arquivo de extens\xe3o .dff localizado na pasta do servidor de modelos por padr\xe3o (configura\xe7\xe3o artpath)."})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"txdname"}),(0,a.jsx)(o.td,{children:"Nome do arquivo de textura de extens\xe3o .txd localizado na pasta do servidor de modelos por padr\xe3o (configura\xe7\xe3o artpath)."})]})]})]}),"\n",(0,a.jsx)(o.h2,{id:"retorno",children:"Retorno"}),"\n",(0,a.jsx)(o.p,{children:"1: A fun\xe7\xe3o foi executada com sucesso."}),"\n",(0,a.jsx)(o.p,{children:"0: Falha ao executar a fun\xe7\xe3o."}),"\n",(0,a.jsx)(o.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");\n    AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-c",children:'    AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");\n    AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");\n'})}),"\n",(0,a.jsx)(o.h2,{id:"notas",children:"Notas"}),"\n",(0,a.jsx)(o.admonition,{type:"tip",children:(0,a.jsx)(o.p,{children:'"useartwork" deve ser habilitado primeiro nas configura\xe7\xf5es do servidor para que essa fun\xe7\xe3o funcione.'})}),"\n",(0,a.jsx)(o.admonition,{type:"warning",children:(0,a.jsx)(o.p,{children:"Atualmente n\xe3o h\xe1 restri\xe7\xf5es sobre quando voc\xea pode chamar esta fun\xe7\xe3o, mas esteja ciente de que se voc\xea n\xe3o cham\xe1-los dentro de OnFilterScriptInit ou OnGameModeInit, voc\xea corre o risco de que alguns jogadores, que j\xe1 est\xe3o no servidor, n\xe3o tenham baixado os modelos."})}),"\n",(0,a.jsx)(o.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.a,{href:"../functions/SetPlayerSkin.md",children:"SetPlayerSkin"}),": Define a skin (personagem) de um jogador."]}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);