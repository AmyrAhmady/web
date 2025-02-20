"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[57378],{28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var n=s(96540);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}},70613:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/GetNetworkStats","title":"GetNetworkStats","description":"Obt\xe9m as estat\xedsticas da rede do servidor e as armazena em uma string.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/functions/GetNetworkStats.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetNetworkStats","permalink":"/pt-BR/docs/scripting/functions/GetNetworkStats","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetNetworkStats.md","tags":[],"version":"current","frontMatter":{"title":"GetNetworkStats","sidebar_label":"GetNetworkStats","description":"Obt\xe9m as estat\xedsticas da rede do servidor e as armazena em uma string.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GetMyPos","permalink":"/pt-BR/docs/scripting/functions/GetMyPos"},"next":{"title":"GetObjectAttachedData","permalink":"/pt-BR/docs/scripting/functions/GetObjectAttachedData"}}');var r=s(74848),a=s(28453);const i={title:"GetNetworkStats",sidebar_label:"GetNetworkStats",description:"Obt\xe9m as estat\xedsticas da rede do servidor e as armazena em uma string.",tags:[]},o=void 0,c={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(t.p,{children:"Obt\xe9m as estat\xedsticas da rede do servidor e as armazena em uma string."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Nome"}),(0,r.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"retstr[]"}),(0,r.jsx)(t.td,{children:"A string para armazenar as estat\xedsticas da rede, passado por refer\xeancia."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"retstr_size"}),(0,r.jsx)(t.td,{children:"O comprimento da string a ser armazenada."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"retorno",children:"Retorno"}),"\n",(0,r.jsx)(t.p,{children:"Esta fun\xe7\xe3o sempre retorna 1."}),"\n",(0,r.jsx)(t.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid,cmdtext[])\n{\n    if (!strcmp(cmdtext, "/netstats"))\n    {\n        new stats[400+1];\n        GetNetworkStats(stats, sizeof(stats)); // Obt\xe9m  as estat\xedsticas da rede do servidor.\n        ShowPlayerDialog(playerid, 0, DIALOG_STYLE_MSGBOX, "Server Network Stats", stats, "Close", "");\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Server Ticks: 200\nMessages in Send buffer: 0\nMessages sent: 142\nBytes sent: 8203\nAcks sent: 11\nAcks in send buffer: 0\nMessages waiting for ack: 0\nMessages resent: 0\nBytes resent: 0\nPacketloss: 0.0%\nMessages received: 54\nBytes received: 2204\nAcks received: 0\nDuplicate acks received: 0\nInst. KBits per second: 28.8\nKBits per second sent: 10.0\nKBits per second received: 2.7\n"})}),"\n",(0,r.jsx)(t.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerNetworkStats",children:"GetPlayerNetworkStats"}),": Obt\xe9m as estat\xedsticas de rede de um jogador e as salva em uma string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_GetConnectedTime",children:"NetStats_GetConnectedTime"}),": Obt\xe9m o tempo que um jogador es Get the time that a player has been connected for."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_MessagesReceived",children:"NetStats_MessagesReceived"}),": Get the number of network messages the server has received from the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_BytesReceived",children:"NetStats_BytesReceived"}),": Get the amount of information (in bytes) that the server has received from the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_MessagesSent",children:"NetStats_MessagesSent"}),": Get the number of network messages the server has sent to the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_BytesSent",children:"NetStats_BytesSent"}),": Get the amount of information (in bytes) that the server has sent to the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_MessagesRecvPerSecond",children:"NetStats_MessagesRecvPerSecond"}),": Get the number of network messages the server has received from the player in the last second."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_PacketLossPercent",children:"NetStats_PacketLossPercent"}),": Obt\xe9m a percentagem de perda de pacotes (packet loss) de um jogador."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_ConnectionStatus",children:"NetStats_ConnectionStatus"}),": Obt\xe9m o status de conex\xe3o de um jogador."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_GetIpPort",children:"NetStats_GetIpPort"}),": Obt\xe9m o IP e porta de um jogador."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);