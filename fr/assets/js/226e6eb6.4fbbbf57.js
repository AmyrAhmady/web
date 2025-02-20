"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[98799],{3561:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"scripting/resources/networkstats","title":"Network Stats","description":"Information seen when holding down F5 when connected to a server.","source":"@site/docs/scripting/resources/networkstats.md","sourceDirName":"scripting/resources","slug":"/scripting/resources/networkstats","permalink":"/fr/docs/scripting/resources/networkstats","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/resources/networkstats.md","tags":[],"version":"current","frontMatter":{"title":"Network Stats","sidebar_label":"Network Stats","description":"Information seen when holding down F5 when connected to a server.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"Material Text Sizes","permalink":"/fr/docs/scripting/resources/materialtextsizes"},"next":{"title":"Object Edition Response Types","permalink":"/fr/docs/scripting/resources/objecteditionresponsetypes"}}');var n=s(74848),d=s(28453);const i={title:"Network Stats",sidebar_label:"Network Stats",description:"Information seen when holding down F5 when connected to a server.",tags:[]},c=void 0,o={},a=[];function l(e){const t={strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Data"}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Download Rate"}),(0,n.jsx)(t.td,{children:"The rate at which data is being downloaded from the server."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Upload Rate"}),(0,n.jsx)(t.td,{children:"The rate at which data is being uploaded to the server."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Vehicles"}),(0,n.jsx)(t.td,{children:"The number of vehicles that are streamed in for the client."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Vehicle Models"}),(0,n.jsx)(t.td,{children:"The number of different vehicle models that are streamed in for the client."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Vehicle Models Loaded"}),(0,n.jsx)(t.td,{children:"The number of (pre-)loaded vehicle models."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RWObjects"}),(0,n.jsx)(t.td,{children:"Number of rendered objects."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"PedSlotsUsed"}),(0,n.jsx)(t.td,{children:"Number of ped slots used (NPCs/players use a 'ped' slot)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ObjectSlotsUsed"}),(0,n.jsx)(t.td,{children:"Object slots used."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OnFoot Send Rate"}),(0,n.jsx)(t.td,{children:"The rate (in MS) at which on-foot data is being synced. Can be set in server.cfg."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Streaming Mem (Memory) Used (Also shows total allowance)"}),(0,n.jsx)(t.td,{children:"The amount of streaming memory being used, and total available."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Messages in Send buffer"}),(0,n.jsx)(t.td,{children:"The number of network messages waiting to be sent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Messages sent"}),(0,n.jsx)(t.td,{children:"The number of network messages sent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Btyes sent"}),(0,n.jsx)(t.td,{children:"The amount of data (in bytes) sent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Acks sent"}),(0,n.jsx)(t.td,{children:"The number of acks sent (acknowledge receipt of a packet)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Acks in send buffer"}),(0,n.jsx)(t.td,{children:"Number of acks waiting to be sent (acknowledge receipt of a packet)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Messages waiting for ack"}),(0,n.jsx)(t.td,{children:"Number of messages that are waiting to be acknowledged as received."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Messages resent"}),(0,n.jsx)(t.td,{children:"Number of messages resent after a lack of acknowledge. Client is trying to reconnect after 109 messages resent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bytes resent"}),(0,n.jsx)(t.td,{children:"The amount of data resent (in bytes)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Packetloss"}),(0,n.jsx)(t.td,{children:"The percentage of packets that were sent but never received by the other end (lost)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Messages received"}),(0,n.jsx)(t.td,{children:"The number of network messages received from the server."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bytes received"}),(0,n.jsx)(t.td,{children:"The amount of data received (in bytes)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Acks received"}),(0,n.jsx)(t.td,{children:"Number of acks received (acknowledge receipt of a packet)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Duplicate acks received"}),(0,n.jsx)(t.td,{children:"Number of duplicate (already received) acks received."})]})]})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>c});var r=s(96540);const n={},d=r.createContext(n);function i(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);