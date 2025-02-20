"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[92815],{28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>c});var n=s(96540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}},48443:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"scripting/resources/connectionstatus","title":"Connection status","description":"Connection status used by NetStats_ConnectionStatus.","source":"@site/docs/scripting/resources/connectionstatus.md","sourceDirName":"scripting/resources","slug":"/scripting/resources/connectionstatus","permalink":"/fa/docs/scripting/resources/connectionstatus","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/resources/connectionstatus.md","tags":[],"version":"current","frontMatter":{"title":"Connection status","sidebar_label":"Connection status","description":"Connection status used by NetStats_ConnectionStatus."},"sidebar":"docsSidebar","previous":{"title":"Color List","permalink":"/fa/docs/scripting/resources/colorslist"},"next":{"title":"Constants","permalink":"/fa/docs/scripting/resources/constants"}}');var i=s(74848),r=s(28453);const o={title:"Connection status",sidebar_label:"Connection status",description:"Connection status used by NetStats_ConnectionStatus."},c=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Often used",id:"often-used",level:2}];function l(e){const t={a:"a",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["This page contains the connection statuses used by ",(0,i.jsx)(t.a,{href:"../functions/NetStats_ConnectionStatus",children:"NetStats_ConnectionStatus"}),". These constants are used internally by RakNet (the networking library SA-MP uses)."]}),"\n",(0,i.jsx)(t.h2,{id:"often-used",children:"Often used"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"ID"}),(0,i.jsx)(t.th,{children:"State"}),(0,i.jsx)(t.th,{children:"Meaning"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0"}),(0,i.jsxs)(t.td,{children:["CONNECTION_STATUS_NO_ACTION ",(0,i.jsx)(t.strong,{children:"/"})," CONNSTAT_NO_ACTION"]}),(0,i.jsx)(t.td,{children:'Whenever a packet has to be sent to the client, it will be processed by a separate thread. As this thread is sending a packet, it is possible for the server to say... receive a disconnection packet, which may get processed in the meantime. This would result in data racing (and thus the behavior is undefined). To solve this problem, the connection state will change to CONNECTION_STATUS_NO_ACTION, and any changes to the player ID will not occur until the update thread has given the main thread the "green light". Now, as a server developer, this connection state is not really relevant to you, so you probably won\'t ever need it.'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1"}),(0,i.jsxs)(t.td,{children:["CONNECTION_STATUS_DISCONNECT_ASAP ",(0,i.jsx)(t.strong,{children:"/"})," CONNSTAT_DISCONNECT_ASAP"]}),(0,i.jsxs)(t.td,{children:['The client is to be disconnected as soon as possible. It is possible for NetStats_ConnectionStatus to return this value during the disconnect process, specifically when a player is not yet "truely" disconnected, yet ',(0,i.jsx)(t.a,{href:"../callbacks/OnPlayerDisconnect",children:"OnPlayerDisconnect"})," may have fired already for this player."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2"}),(0,i.jsxs)(t.td,{children:["CONNECTION_STATUS_DISCONNECT_ASAP_SILENTLY ",(0,i.jsx)(t.strong,{children:"/"})," CONNSTAT_DISCONNECT_ASAP_SILNT"]}),(0,i.jsx)(t.td,{children:"The client is to be disconnected as soon as possible, but without sending the ID_DISCONNECTION_NOTIFICATION packet to the client. SA-MP sends this in several cases (however SA-MP itself most likely doesn't, RakNet definitely does), for example when the server password is entered incorrectly."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3"}),(0,i.jsxs)(t.td,{children:["CONNECTION_STATUS_DISCONNECT_ON_NO_ACK ",(0,i.jsx)(t.strong,{children:"/"})," CONNSTAT_DISCONNECT_ON_NO_ACK"]}),(0,i.jsx)(t.td,{children:"Unknown."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4"}),(0,i.jsxs)(t.td,{children:["CONNECTION_STATUS_REQUESTED_CONNECTION ",(0,i.jsx)(t.strong,{children:"/"})," CONNSTAT_REQUESTED_CONNECTION"]}),(0,i.jsx)(t.td,{children:"The client has requested a connection with the server."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"5"}),(0,i.jsxs)(t.td,{children:["CONNECTION_STATUS_HANDLING_CONNECTION_REQUEST ",(0,i.jsx)(t.strong,{children:"/"})," CONNSTAT_HANDLING_CONN_REQ"]}),(0,i.jsx)(t.td,{children:"The server is currently handling the connection request."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"6"}),(0,i.jsxs)(t.td,{children:["CONNECTION_STATUS_UNVERIFIED_SENDER ",(0,i.jsx)(t.strong,{children:"/"})," CONNSTAT_UNVERIFIED_SENDER"]}),(0,i.jsxs)(t.td,{children:["Initially, incoming connection requests appear to use UNVERIFIED_SENDER. While the client-server connection is in this state, only ID_CONNECTION_REQUEST packets are read. The server will automatically close the connection and add the client IP to a temporary blacklist if anything else is sent. Whether or not it is possible for ",(0,i.jsx)(t.a,{href:"../functions/NetStats_ConnectionStatus",children:"NetStats_ConnectionStatus"})," to return this status is doubtful."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"7"}),(0,i.jsxs)(t.td,{children:["CONNECTION_STATUS_SET_ENCRYPTION_ON_MULTIPLE_16_BYTE_PACKET ",(0,i.jsx)(t.strong,{children:"/"})," CONNSTAT_SET_ENCRYPTION"]}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Unknown."}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"8"}),(0,i.jsxs)(t.td,{children:["CONNECTION_STATUS_CONNECTED ",(0,i.jsx)(t.strong,{children:"/"})," CONNSTAT_CONNECTED"]}),(0,i.jsx)(t.td,{children:"The client is connected to the server."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);