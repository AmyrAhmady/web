"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[5912],{28453:(e,o,d)=>{d.d(o,{R:()=>r,x:()=>a});var n=d(96540);const s={},i=n.createContext(s);function r(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:o},e.children)}},40651:(e,o,d)=>{d.r(o),d.d(o,{assets:()=>t,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"scripting/functions/AddSimpleModel","title":"AddSimpleModel","description":"Adiciona um novo modelo de objeto simples personalizado para download.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/functions/AddSimpleModel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddSimpleModel","permalink":"/pt-BR/docs/scripting/functions/AddSimpleModel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AddSimpleModel.md","tags":[],"version":"current","frontMatter":{"title":"AddSimpleModel","sidebar_label":"AddSimpleModel","description":"Adiciona um novo modelo de objeto simples personalizado para download.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"AddServerRule","permalink":"/pt-BR/docs/scripting/functions/AddServerRule"},"next":{"title":"AddSimpleModelTimed","permalink":"/pt-BR/docs/scripting/functions/AddSimpleModelTimed"}}');var s=d(74848),i=d(28453);const r={title:"AddSimpleModel",sidebar_label:"AddSimpleModel",description:"Adiciona um novo modelo de objeto simples personalizado para download.",tags:[]},a=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"Esta fun\xe7\xe3o foi implementada no SA-MP 0.3.DL-R1 e n\xe3o funcionar\xe1 em vers\xf5es anteriores."}),"\n",(0,s.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(o.p,{children:"Adiciona um novo modelo de objeto simples personalizado para download. Os arquivos do modelo s\xe3o armazenados em Documentos\\GTA San Andreas User Files\\SAMP\\cache do jogador sob a pasta IP e Porta do Servidor em um arquivo no formato CRC."}),"\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Nome"}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"virtualworld"}),(0,s.jsx)(o.td,{children:"O ID do mundo virtual ao qual pretende colocar o modelo. Use -1 para todos os mundos."})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"baseid"}),(0,s.jsx)(o.td,{children:"O ID do modelo do objeto original a ser usado como base (objeto original \xe9 usado se o download falhar)."})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"newid"}),(0,s.jsx)(o.td,{children:"O ID do modelo do novo objeto. Varia entre -1000 a -30000 (29000 slots) para serem usados posteriormente com CreateObject ou CreatePlayerObject."})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"dffname"}),(0,s.jsx)(o.td,{children:"Nome do arquivo de extens\xe3o .dff localizado na pasta do servidor de modelos por padr\xe3o (configura\xe7\xe3o artpath)."})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"txdname"}),(0,s.jsx)(o.td,{children:"Nome do arquivo de textura de extens\xe3o .txd localizado na pasta do servidor de modelos por padr\xe3o (configura\xe7\xe3o artpath)."})]})]})]}),"\n",(0,s.jsx)(o.h2,{id:"retorno",children:"Retorno"}),"\n",(0,s.jsx)(o.p,{children:"1: A fun\xe7\xe3o foi executada com sucesso."}),"\n",(0,s.jsx)(o.p,{children:"0: Falha ao executar a fun\xe7\xe3o."}),"\n",(0,s.jsx)(o.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-c",children:'AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");\n'})}),"\n",(0,s.jsx)(o.h2,{id:"notas",children:"Notas"}),"\n",(0,s.jsx)(o.admonition,{type:"tip",children:(0,s.jsx)(o.p,{children:'"useartwork" deve ser habilitado primeiro nas configura\xe7\xf5es do servidor para que essa fun\xe7\xe3o funcione.'})}),"\n",(0,s.jsx)(o.admonition,{type:"warning",children:(0,s.jsx)(o.p,{children:"Atualmente n\xe3o h\xe1 restri\xe7\xf5es sobre quando voc\xea pode chamar esta fun\xe7\xe3o, mas esteja ciente de que se voc\xea n\xe3o cham\xe1-los dentro de OnFilterScriptInit ou OnGameModeInit, voc\xea corre o risco de que alguns jogadores, que j\xe1 est\xe3o no servidor, n\xe3o tenham baixado os modelos."})}),"\n",(0,s.jsx)(o.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.a,{href:"/pt-BR/docs/scripting/callbacks/OnPlayerFinishedDownloading",children:"OnPlayerFinishedDownloading"}),": \xc9 chamada quando um jogador termina o download dos modelos personalizados."]}),"\n"]})]})}function p(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);