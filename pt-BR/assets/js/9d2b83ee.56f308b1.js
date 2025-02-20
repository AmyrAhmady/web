"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[97413],{13570:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>i});const a=JSON.parse('{"id":"scripting/callbacks/OnPlayerRequestDownload","title":"OnPlayerRequestDownload","description":"Esta callback \xe9 chamada quando um jogador solicita o download de modelos personalizados.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerRequestDownload.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerRequestDownload","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerRequestDownload","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerRequestDownload.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerRequestDownload","sidebar_label":"OnPlayerRequestDownload","description":"Esta callback \xe9 chamada quando um jogador solicita o download de modelos personalizados.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerRequestClass","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerRequestClass"},"next":{"title":"OnPlayerRequestSpawn","permalink":"/pt-BR/docs/scripting/callbacks/OnPlayerRequestSpawn"}}');var l=o(74848),s=o(28453);const r={title:"OnPlayerRequestDownload",sidebar_label:"OnPlayerRequestDownload",description:"Esta callback \xe9 chamada quando um jogador solicita o download de modelos personalizados.",tags:["player"]},d=void 0,t={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retornos",id:"retornos",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarnPT:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnPT",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{name:"callback",version:"SA-MP 0.3.DL R1"}),"\n",(0,l.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,l.jsx)(n.p,{children:"Esta callback \xe9 chamada quando um jogador solicita o download de modelos personalizados."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Nome"}),(0,l.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"O ID do jogador que solicitou o download de um modelo."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"type"}),(0,l.jsx)(n.td,{children:"O tipo de solicita\xe7\xe3o (veja abaixo)."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"crc"}),(0,l.jsx)(n.td,{children:"O CRC de soma de verifica\xe7\xe3o dos modelos."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"retornos",children:"Retornos"}),"\n",(0,l.jsx)(n.p,{children:"0 - Nega o download do modelo"}),"\n",(0,l.jsx)(n.p,{children:"1 - Aceita o download requisitado"}),"\n",(0,l.jsx)(n.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'#define DOWNLOAD_REQUEST_EMPTY        (0)\n#define DOWNLOAD_REQUEST_MODEL_FILE   (1)\n#define DOWNLOAD_REQUEST_TEXTURE_FILE (2)\nnew baseurl[] = "https://files.sa-mp.com/server";\n\npublic OnPlayerRequestDownload(playerid, type, crc)\n{\n    new fullurl[256+1];\n    new dlfilename[64+1];\n    new foundfilename=0;\n\n    if (!IsPlayerConnected(playerid)) return 0;\n\n    if (type == DOWNLOAD_REQUEST_TEXTURE_FILE) {\n        foundfilename = FindTextureFileNameFromCRC(crc,dlfilename,64);\n    }\n    else if (type == DOWNLOAD_REQUEST_MODEL_FILE) {\n        foundfilename = FindModelFileNameFromCRC(crc,dlfilename,64);\n    }\n\n    if (foundfilename) {\n        format(fullurl,256,"%s/%s",baseurl,dlfilename);\n        RedirectDownload(playerid,fullurl);\n    }\n\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerFinishedDownloading",children:"OnPlayerFinishedDownloading"}),": Chamada quando um jogador termina de baixar os modelos personalizados."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>d});var a=o(96540);const l={},s=a.createContext(l);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);