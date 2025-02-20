"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[71327],{11135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/SetPlayerChatBubble","title":"SetPlayerChatBubble","description":"Creates a chat bubble above a player\'s name tag.","source":"@site/docs/scripting/functions/SetPlayerChatBubble.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerChatBubble","permalink":"/ta/docs/scripting/functions/SetPlayerChatBubble","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerChatBubble.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerChatBubble","sidebar_label":"SetPlayerChatBubble","description":"Creates a chat bubble above a player\'s name tag.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerCameraPos","permalink":"/ta/docs/scripting/functions/SetPlayerCameraPos"},"next":{"title":"SetPlayerCheckpoint","permalink":"/ta/docs/scripting/functions/SetPlayerCheckpoint"}}');var l=n(74848),s=n(28453);const a={title:"SetPlayerChatBubble",sidebar_label:"SetPlayerChatBubble",description:"Creates a chat bubble above a player's name tag.",tags:["player"]},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Creates a chat bubble above a player's name tag."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The player which should have the chat bubble."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"const text[]"}),(0,l.jsx)(t.td,{children:"The text to display."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"colour"}),(0,l.jsx)(t.td,{children:"The text color"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":drawDistance"]}),(0,l.jsx)(t.td,{children:"The distance from where players are able to see the chat bubble."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"expireTime"}),(0,l.jsx)(t.td,{children:"The time in miliseconds the bubble should be displayed for."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"OPEN_MP_TAGS:..."}),(0,l.jsx)(t.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:"public OnPlayerText(playerid, text[])\n{\n    SetPlayerChatBubble(playerid, text, 0xFF0000FF, 100.0, 10000);\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsx)(t.p,{children:"You can't see your own chat bubbles. The same applies to attached 3D text labels."})}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"You can use color embedding for multiple colors in the message."}),"\n",(0,l.jsx)(t.li,{children:"Using '-1' as the color will make the text white (for the simple reason that -1, when represented in hexadecimal notation, is 0xFFFFFFFF)."}),"\n"]})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"Attach3DTextLabelToPlayer",children:"Attach3DTextLabelToPlayer"}),": Attach a 3D text label to a player."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const l={},s=r.createContext(l);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);