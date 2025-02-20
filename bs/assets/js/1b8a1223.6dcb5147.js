"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[74467],{28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var i=s(96540);const n={},r=i.createContext(n);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(r.Provider,{value:t},e.children)}},33355:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>j,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scripting/functions/NetStats_MessagesRecvPerSecond","title":"NetStats_MessagesRecvPerSecond","description":"Dobija broj poruka koje je igra\u010d primio u posljednjoj sekundi.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/NetStats_MessagesRecvPerSecond.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/NetStats_MessagesRecvPerSecond","permalink":"/bs/docs/scripting/functions/NetStats_MessagesRecvPerSecond","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/NetStats_MessagesRecvPerSecond.md","tags":[],"version":"current","frontMatter":{"title":"NetStats_MessagesRecvPerSecond","sidebar_label":"NetStats_MessagesRecvPerSecond","description":"Dobija broj poruka koje je igra\u010d primio u posljednjoj sekundi.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"NetStats_MessagesReceived","permalink":"/bs/docs/scripting/functions/NetStats_MessagesReceived"},"next":{"title":"NetStats_MessagesSent","permalink":"/bs/docs/scripting/functions/NetStats_MessagesSent"}}');var n=s(74848),r=s(28453);const a={title:"NetStats_MessagesRecvPerSecond",sidebar_label:"NetStats_MessagesRecvPerSecond",description:"Dobija broj poruka koje je igra\u010d primio u posljednjoj sekundi.",tags:[]},o=void 0,c={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,n.jsx)(t.p,{children:"Dobija broj poruka koje je igra\u010d primio u posljednjoj sekundi."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Ime"}),(0,n.jsx)(t.th,{children:"Deskripcija"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"ID igra\u010da za dobiti podatke."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"Broj poruka koje je igra\u010d primio u posljednjoj sekundi."}),"\n",(0,n.jsx)(t.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid,cmdtext[])\n{\n    if (!strcmp(cmdtext, "/msgpersec"))\n    {\n        new szString[144];\n        format(szString, sizeof(szString), "Primio si %i network poruka u posljednoj sekundi.", NetStats_MessagesRecvPerSecond(playerid));\n        SendClientMessage(playerid, -1, szString);\n    }\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerNetworkStats",children:"GetPlayerNetworkStats"}),": Dobija mre\u017ene statistike igra\u010da i pohranjuje ih u string."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetNetworkStats",children:"GetNetworkStats"}),": Dobija mre\u017ene statistike servera i sprema ih u string."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"NetStats_GetConnectedTime",children:"NetStats_GetConnectedTime"}),": Dobij vrijeme za kojeg je igra\u010d povezan na server."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"NetStats_MessagesReceived",children:"NetStats_MessagesReceived"}),": Dohvatite broj mre\u017enih poruka koje je server primio od igra\u010da."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"NetStats_BytesReceived",children:"NetStats_BytesReceived"}),": Dohvatite koli\u010dinu informacija (u bajtovima) koju je poslu\u017eitelj primio od igra\u010da."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"NetStats_MessagesSent",children:"NetStats_MessagesSent"}),": Dohvatite broj mre\u017enih poruka koje je server poslao igra\u010du."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"NetStats_BytesSent",children:"NetStats_BytesSent"}),": Dohvatite koli\u010dinu informacija (u bajtovima) koje je poslu\u017eitelj poslao ure\u0111aju za reprodukciju."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"NetStats_PacketLossPercent",children:"NetStats_PacketLossPercent"}),": Dobijte packet loss procenat igra\u010da."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"NetStats_ConnectionStatus",children:"NetStats_ConnectionStatus"}),": Dohvatite status veze igra\u010da."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"NetStats_GetIpPort",children:"NetStats_GetIpPort"}),": Nabavite IP adresu i port igra\u010da."]}),"\n"]})]})}function j(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);