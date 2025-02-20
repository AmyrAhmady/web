"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[99217],{11581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"scripting/functions/listenport","title":"listenport","description":"Sets up the port number to listen at.","source":"@site/docs/scripting/functions/listenport.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/listenport","permalink":"/it/docs/scripting/functions/listenport","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/listenport.md","tags":[{"inline":true,"label":"datagram","permalink":"/it/docs/tags/datagram"}],"version":"current","frontMatter":{"title":"listenport","sidebar_label":"listenport","description":"Sets up the port number to listen at.","tags":["datagram"]},"sidebar":"docsSidebar","previous":{"title":"ispacked","permalink":"/it/docs/scripting/functions/ispacked"},"next":{"title":"max","permalink":"/it/docs/scripting/functions/max"}}');var i=n(74848),r=n(28453);const o={title:"listenport",sidebar_label:"listenport",description:"Sets up the port number to listen at.",tags:["datagram"]},l=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["This function is deprecated, Use ",(0,i.jsx)(t.a,{href:"HTTP",children:"HTTP"})," or ",(0,i.jsx)(t.a,{href:"https://github.com/Southclaws/pawn-requests",children:"pawn-requests"})," plugin."]})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Sets up the port number to listen at."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"port"}),(0,i.jsx)(t.td,{children:"The number of the port to listen at.  This must be a value between 1 and 65535, but you should probably avoid to use any of the reserved port numbers."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,i.jsxs)(t.p,{children:["This function always returns ",(0,i.jsx)(t.strong,{children:"0"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["You must call this function ",(0,i.jsx)(t.strong,{children:"before"})," receiving the first packet. In other words, you should set up a port in main."]}),"\n",(0,i.jsxs)(t.li,{children:["If no port number has been explicitily chosen, the module will listen at port ",(0,i.jsx)(t.strong,{children:"9930"}),"."]}),"\n"]})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"@receivestring",children:"@receivestring"}),": A packed was received."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"sendstring",children:"sendstring"}),": Sends a packet containing a string."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);