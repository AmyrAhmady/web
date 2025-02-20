"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[25206],{12855:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"scripting/callbacks/OnClientMessage","title":"OnClientMessage","description":"This callback gets called whenever the NPC sees a ClientMessage.","source":"@site/docs/scripting/callbacks/OnClientMessage.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnClientMessage","permalink":"/it/docs/scripting/callbacks/OnClientMessage","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnClientMessage.md","tags":[],"version":"current","frontMatter":{"title":"OnClientMessage","sidebar_label":"OnClientMessage","description":"This callback gets called whenever the NPC sees a ClientMessage.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnClientCheckResponse","permalink":"/it/docs/scripting/callbacks/OnClientCheckResponse"},"next":{"title":"OnDialogResponse","permalink":"/it/docs/scripting/callbacks/OnDialogResponse"}}');var l=n(74848),a=n(28453);const i={title:"OnClientMessage",sidebar_label:"OnClientMessage",description:"This callback gets called whenever the NPC sees a ClientMessage.",tags:[]},c=void 0,r={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(s.p,{children:["This callback gets called whenever the NPC sees a ClientMessage. This will be everytime a ",(0,l.jsx)(s.a,{href:"../functions/SendClientMessageToAll",children:"SendClientMessageToAll"})," function is used and everytime a ",(0,l.jsx)(s.a,{href:"../functions/SendClientMessage",children:"SendClientMessage"})," function is sent towards the NPC. This callback won't be called when someone says something. For a version of this with player text, see ",(0,l.jsxs)(s.a,{href:"OnPlayerText",children:["NPC",":OnPlayerText"]}),"."]}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Name"}),(0,l.jsx)(s.th,{children:"Description"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"color"}),(0,l.jsx)(s.td,{children:"The color the ClientMessage is."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"text[]"}),(0,l.jsx)(s.td,{children:"The actual message."})]})]})]}),"\n",(0,l.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(s.p,{children:"This callback does not handle returns."}),"\n",(0,l.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-c",children:'public OnClientMessage(color, text[])\n{\n    if (strfind(text,"Bank Balance: $0") != -1)\n    {\n        SendClientMessage(playerid, -1, "I am poor :(");\n    }\n}\n'})}),"\n",(0,l.jsx)(s.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsx)(s.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"OnPlayerText",children:"OnPlayerText"}),": This callback is called everytime anyone says anything in the chat. This includes any player, any other NPC, or the same NPC himself."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var t=n(96540);const l={},a=t.createContext(l);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);