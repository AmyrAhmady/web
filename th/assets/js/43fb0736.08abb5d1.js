"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[93732],{27042:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>h,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"tutorials/QueryMechanism","title":"SA:MP Query Mechanism","description":"Introduction","source":"@site/docs/tutorials/QueryMechanism.md","sourceDirName":"tutorials","slug":"/tutorials/QueryMechanism","permalink":"/th/docs/tutorials/QueryMechanism","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/tutorials/QueryMechanism.md","tags":[],"version":"current","frontMatter":{"title":"SA:MP Query Mechanism","sidebar_label":"SA:MP Query Mechanism"},"sidebar":"docsSidebar","previous":{"title":"Port Forwarding","permalink":"/th/docs/tutorials/PortForwarding"},"next":{"title":"Color Fix","permalink":"/th/docs/tutorials/colorfix"}}');var n=r(74848),d=r(28453);const i={title:"SA:MP Query Mechanism",sidebar_label:"SA:MP Query Mechanism"},l=void 0,h={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Queries",id:"queries",level:2},{value:"Serialized Data",id:"serialized-data",level:2},{value:"OPCODE",id:"opcode",level:2},{value:"Response",id:"response",level:2},{value:"Response Tables for <code>i</code>, <code>r</code>, <code>c</code>, <code>d</code>, <code>p</code>",id:"response-tables-for-i-r-c-d-p",level:3},{value:"Response Type <code>i</code>",id:"response-type-i",level:4},{value:"Response Type <code>r</code>",id:"response-type-r",level:4},{value:"Response Type <code>c</code>",id:"response-type-c",level:4},{value:"Response Type <code>d</code>",id:"response-type-d",level:4},{value:"Response Type <code>p</code>",id:"response-type-p",level:4},{value:"Example Code in C",id:"example-code-in-c",level:2}];function o(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(s.p,{children:["The SA",":MP"," Query Mechanism is nothing more than the mechanism for transmitting server statistics and information, such as name, ping, language, online players, etc..."]}),"\n",(0,n.jsx)(s.p,{children:"In this article I will document how this mechanism works, as well as teach you how to use it without needing the original client."}),"\n",(0,n.jsx)(s.h2,{id:"queries",children:"Queries"}),"\n",(0,n.jsx)(s.p,{children:"Queries are pure UDP packets sent to the server address containing serialized data."}),"\n",(0,n.jsxs)(s.p,{children:['You may ask yourself: "But how does the server interpret query packets differently than those from the RakNet protocol?", and the answer is simple: in the low RakNet socket layer, packets that contain 53 41 4D 50 or translated into characters "SAMP" at the beginning, are treated in a different way. ',(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"https://github.com/openmultiplayer/RakNet/blob/master/Source/SocketLayer.cpp#L371",children:"View Code"})})]}),"\n",(0,n.jsx)(s.h2,{id:"serialized-data",children:"Serialized Data"}),"\n",(0,n.jsxs)(s.p,{children:["The data transmitted in the packet is: ",(0,n.jsx)(s.strong,{children:'"SAMP"'})," + ",(0,n.jsx)(s.strong,{children:"IP octets"})," + ",(0,n.jsx)(s.strong,{children:"first port byte*"})," + ",(0,n.jsx)(s.strong,{children:"second port byte"})," + ",(0,n.jsx)(s.strong,{children:"OPCODE"})]}),"\n",(0,n.jsxs)(s.p,{children:["If you have doubts about why to extract and what IP octets and port bytes are, see: ",(0,n.jsx)(s.a,{href:"http://penta2.ufrgs.br/trouble/ts_ip.htm",children:"Link"}),"."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"Byte size"}),(0,n.jsx)(s.th,{style:{textAlign:"center"},children:"Name"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"4"}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:'"SAMP"'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"4"}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"IP Octets"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"1"}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"Port & 0xFF"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"1"}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"Port >> 8 & 0xFF"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"1"}),(0,n.jsx)(s.td,{style:{textAlign:"center"},children:"OPCODE"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/Louzindev/sampquery-c/blob/master/src/packet.c",children:"Example in C"})}),"\n",(0,n.jsx)(s.h2,{id:"opcode",children:"OPCODE"}),"\n",(0,n.jsx)(s.p,{children:"OPCODE's are package identifiers, and each one represents a different request."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:'OPCODE "i" or 0x69:'})," This stands for information. This gets the amount of players in the server, the map name, and all the stuff like that. It's really useful for describing your server without changing anything."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:'OPCODE "r" or 0x72:'})," This stands for rules. 'Rules' when it comes to SA",":MP"," includes the instagib, the gravity, weather, the website URL, and so on"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:'OPCODE "c" or 0x63:'})," It stands for client list, this sends back to the server the players' name, and then the players' score. Just imagine it as a basic overview of all the players."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:'OPCODE "d" or 0x64:'})," This stands for detailed player information. With this, you can get everything from the ping to the player, the player ID (useful for admin scripts), the score again, and also the username."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:'OPCODE "x" or 0x78:'})," This is an RCON command, and it's completely different from all of the other packets."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:'OPCODE "p" or 0x70:'})," Four psuedo-random characters are sent to the server, and the same characters are returned. You can use the time between sending and receiving to work out the servers' ping/latency."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"response",children:"Response"}),"\n",(0,n.jsx)(s.p,{children:"As stated above, each OPCODE returns information."}),"\n",(0,n.jsx)(s.p,{children:"the response consists of the same first 11 bytes sent, what we call the Header, then the definitive response."}),"\n",(0,n.jsxs)(s.h3,{id:"response-tables-for-i-r-c-d-p",children:["Response Tables for ",(0,n.jsx)(s.code,{children:"i"}),", ",(0,n.jsx)(s.code,{children:"r"}),", ",(0,n.jsx)(s.code,{children:"c"}),", ",(0,n.jsx)(s.code,{children:"d"}),", ",(0,n.jsx)(s.code,{children:"p"})]}),"\n",(0,n.jsxs)(s.h4,{id:"response-type-i",children:["Response Type ",(0,n.jsx)(s.code,{children:"i"})]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Byte"}),(0,n.jsx)(s.th,{children:"Key"}),(0,n.jsx)(s.th,{children:"Byte Width"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"11"}),(0,n.jsx)(s.td,{children:"Password"}),(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"Either 0 or 1, depending on whether the password is set"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"12-13"}),(0,n.jsx)(s.td,{children:"Players"}),(0,n.jsx)(s.td,{children:"2"}),(0,n.jsx)(s.td,{children:"Current number of players online"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"14-15"}),(0,n.jsx)(s.td,{children:"MaxPlayers"}),(0,n.jsx)(s.td,{children:"2"}),(0,n.jsx)(s.td,{children:"Maximum number of players allowed on the server"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"16-19"}),(0,n.jsx)(s.td,{children:"(strlen)"}),(0,n.jsx)(s.td,{children:"4"}),(0,n.jsx)(s.td,{children:"Length of the server\u2019s hostname"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"20 + strlen"}),(0,n.jsx)(s.td,{children:"Hostname"}),(0,n.jsx)(s.td,{children:"(strlen)"}),(0,n.jsx)(s.td,{children:"Hostname of the server"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"21-24"}),(0,n.jsx)(s.td,{children:"(strlen)"}),(0,n.jsx)(s.td,{children:"4"}),(0,n.jsx)(s.td,{children:"Length of the server\u2019s gamemode"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"25 + strlen"}),(0,n.jsx)(s.td,{children:"Gamemode"}),(0,n.jsx)(s.td,{children:"(strlen)"}),(0,n.jsx)(s.td,{children:"Gamemode of the server"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"26-29"}),(0,n.jsx)(s.td,{children:"(strlen)"}),(0,n.jsx)(s.td,{children:"4"}),(0,n.jsx)(s.td,{children:"Length of the server\u2019s language"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"30 + strlen"}),(0,n.jsx)(s.td,{children:"Language"}),(0,n.jsx)(s.td,{children:"(strlen)"}),(0,n.jsx)(s.td,{children:"Language of the server"})]})]})]}),"\n",(0,n.jsxs)(s.h4,{id:"response-type-r",children:["Response Type ",(0,n.jsx)(s.code,{children:"r"})]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Byte"}),(0,n.jsx)(s.th,{children:"Key"}),(0,n.jsx)(s.th,{children:"Byte Width"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"11-12"}),(0,n.jsx)(s.td,{children:"RuleCount"}),(0,n.jsx)(s.td,{children:"2"}),(0,n.jsx)(s.td,{children:"Number of rules provided by the server"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"13"}),(0,n.jsx)(s.td,{children:"(strlen)"}),(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"Length of the rule name"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"14 + strlen"}),(0,n.jsx)(s.td,{children:"Rulename"}),(0,n.jsx)(s.td,{children:"(strlen)"}),(0,n.jsx)(s.td,{children:"Name of the rule"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"15"}),(0,n.jsx)(s.td,{children:"(strlen)"}),(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"Length of the rule value"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"16 + strlen"}),(0,n.jsx)(s.td,{children:"RuleValue"}),(0,n.jsx)(s.td,{children:"(strlen)"}),(0,n.jsx)(s.td,{children:"Value of the rule"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.em,{children:["(Repeat from Byte 13 for each rule, as many times as ",(0,n.jsx)(s.code,{children:"RuleCount"}),")"]})}),"\n",(0,n.jsxs)(s.h4,{id:"response-type-c",children:["Response Type ",(0,n.jsx)(s.code,{children:"c"})]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Byte"}),(0,n.jsx)(s.th,{children:"Key"}),(0,n.jsx)(s.th,{children:"Byte Width"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"11-12"}),(0,n.jsx)(s.td,{children:"PlayerCount"}),(0,n.jsx)(s.td,{children:"2"}),(0,n.jsx)(s.td,{children:"Number of players provided by the server"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"13"}),(0,n.jsx)(s.td,{children:"(strlen)"}),(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"Length of the player\u2019s nickname"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"14 + strlen"}),(0,n.jsx)(s.td,{children:"PlayerNick"}),(0,n.jsx)(s.td,{children:"(strlen)"}),(0,n.jsx)(s.td,{children:"Player\u2019s nickname"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"15-18"}),(0,n.jsx)(s.td,{children:"Score"}),(0,n.jsx)(s.td,{children:"4"}),(0,n.jsx)(s.td,{children:"Player\u2019s score"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.em,{children:["(Repeat from Byte 13 for each player, as many times as ",(0,n.jsx)(s.code,{children:"PlayerCount"}),")"]})}),"\n",(0,n.jsxs)(s.h4,{id:"response-type-d",children:["Response Type ",(0,n.jsx)(s.code,{children:"d"})]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Byte"}),(0,n.jsx)(s.th,{children:"Key"}),(0,n.jsx)(s.th,{children:"Byte Width"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"11-12"}),(0,n.jsx)(s.td,{children:"PlayerCount"}),(0,n.jsx)(s.td,{children:"2"}),(0,n.jsx)(s.td,{children:"Number of players provided by the server"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"13"}),(0,n.jsx)(s.td,{children:"PlayerID"}),(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"Player\u2019s ID (values 0-255)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"14"}),(0,n.jsx)(s.td,{children:"(strlen)"}),(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"Length of the player\u2019s nickname"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"15 + strlen"}),(0,n.jsx)(s.td,{children:"PlayerNick"}),(0,n.jsx)(s.td,{children:"(strlen)"}),(0,n.jsx)(s.td,{children:"Player\u2019s nickname"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"16-19"}),(0,n.jsx)(s.td,{children:"Score"}),(0,n.jsx)(s.td,{children:"4"}),(0,n.jsx)(s.td,{children:"Player\u2019s score"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"20-23"}),(0,n.jsx)(s.td,{children:"Ping"}),(0,n.jsx)(s.td,{children:"4"}),(0,n.jsx)(s.td,{children:"Player\u2019s ping to the server"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.em,{children:["(Repeat from Byte 13 for each player, as many times as ",(0,n.jsx)(s.code,{children:"PlayerCount"}),")"]})}),"\n",(0,n.jsxs)(s.h4,{id:"response-type-p",children:["Response Type ",(0,n.jsx)(s.code,{children:"p"})]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Byte"}),(0,n.jsx)(s.th,{children:"Key"}),(0,n.jsx)(s.th,{children:"Byte Width"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"11"}),(0,n.jsx)(s.td,{children:"number 1"}),(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"First number of the pseudo-random sequence sent by the client"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"12"}),(0,n.jsx)(s.td,{children:"number 2"}),(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"Second number of the pseudo-random sequence"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"13"}),(0,n.jsx)(s.td,{children:"number 3"}),(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"Third number of the pseudo-random sequence"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"14"}),(0,n.jsx)(s.td,{children:"number 4"}),(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"Fourth number of the pseudo-random sequence"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"example-code-in-c",children:"Example Code in C"}),"\n",(0,n.jsxs)(s.p,{children:["A while ago I made a small lib in C, which allows you to perform queries, you can use it as an example. ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"https://github.com/Louzindev/sampquery-c",children:"See Repository"})})]})]})}function a(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>l});var t=r(96540);const n={},d=t.createContext(n);function i(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);