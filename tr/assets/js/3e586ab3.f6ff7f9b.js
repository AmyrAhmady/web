"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[78074],{27519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"scripting/functions/SendCommand","title":"SendCommand","description":"This will force the NPC to write a desired command, and this way, getting the effects it would produce.","source":"@site/docs/scripting/functions/SendCommand.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SendCommand","permalink":"/tr/docs/scripting/functions/SendCommand","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SendCommand.md","tags":[],"version":"current","frontMatter":{"title":"SendCommand","sidebar_label":"SendCommand","description":"This will force the NPC to write a desired command, and this way, getting the effects it would produce.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SendClientMessagef","permalink":"/tr/docs/scripting/functions/SendClientMessagef"},"next":{"title":"SendDeathMessage","permalink":"/tr/docs/scripting/functions/SendDeathMessage"}}');var s=n(74848),d=n(28453);const r={title:"SendCommand",sidebar_label:"SendCommand",description:"This will force the NPC to write a desired command, and this way, getting the effects it would produce.",tags:[]},o=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"This will force the NPC to write a desired command, and this way, getting the effects it would produce."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"commandtext[]"}),(0,s.jsx)(t.td,{children:"The command text to be sent by the NPC."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'public OnPlayerText(playerid, text[])\n{\n    if (strfind(text, "stupid bot") != -1)\n    {\n        new string[80], name[MAX_PLAYER_NAME];\n        GetPlayerName(playerid, name, sizeof(name));\n        SendCommand("/kill");\n        format(string, sizeof(string), "Hey %s! You are so mean, you make me so sad!", name);\n        SendChat(string);\n    }\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"../functions/SendChat",children:"SendChat"}),": Sends a text as the NPC."]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},d=i.createContext(s);function r(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);