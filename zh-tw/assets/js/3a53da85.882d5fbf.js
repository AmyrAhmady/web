"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[51703],{28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var s=t(96540);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}},49792:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"scripting/functions/sendstring","title":"sendstring","description":"Sends a packet containing a string. (deprecated function)","source":"@site/docs/scripting/functions/sendstring.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/sendstring","permalink":"/zh-tw/docs/scripting/functions/sendstring","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/sendstring.md","tags":[{"inline":true,"label":"datagram","permalink":"/zh-tw/docs/tags/datagram"}],"version":"current","frontMatter":{"title":"sendstring","sidebar_label":"sendstring","description":"Sends a packet containing a string. (deprecated function)","tags":["datagram"]},"sidebar":"docsSidebar","previous":{"title":"sendpacket","permalink":"/zh-tw/docs/scripting/functions/sendpacket"},"next":{"title":"setarg","permalink":"/zh-tw/docs/scripting/functions/setarg"}}');var i=t(74848),r=t(28453);const c={title:"sendstring",sidebar_label:"sendstring",description:"Sends a packet containing a string. (deprecated function)",tags:["datagram"]},d=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Related Functions",id:"related-functions",level:2}];function l(e){const n={a:"a",admonition:"admonition",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["This function is deprecated, Use ",(0,i.jsx)(n.a,{href:"HTTP",children:"HTTP"})," or ",(0,i.jsx)(n.a,{href:"https://github.com/Southclaws/pawn-requests",children:"pawn-requests"})," plugin."]})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Sends a packet containing a string."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"const message[]"}),(0,i.jsx)(n.td,{children:"The buffer that contains the string to send.  If this is an unpacked string,  it will be UTF-8 encoded before being transferred."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:'const destination[] = ""'}),(0,i.jsxs)(n.td,{children:["The IP address and port number to which the packet must be sent.  If absent or an empty string, this function will broadcast the packet and use the default port number 9930 ",(0,i.jsx)(n.em,{children:'(optional="")'})]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return-values",children:"Return Values"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"1"})," on success, ",(0,i.jsx)(n.strong,{children:"0"})," on failure."]}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"@receivestring",children:"@receivestring"}),": A packed was received."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"sendpacket",children:"sendpacket"}),": Sends a packet."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);