"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[68477],{28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var s=n(96540);const i={},r=s.createContext(i);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}},42442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"scripting/functions/SendChat","title":"SendChat","description":"This will send a player text by the bot, just like using SendPlayerMessageToAll, but this function is to be used inside the NPC scripts.","source":"@site/docs/scripting/functions/SendChat.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SendChat","permalink":"/sl/docs/scripting/functions/SendChat","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SendChat.md","tags":[],"version":"current","frontMatter":{"title":"SendChat","sidebar_label":"SendChat","description":"This will send a player text by the bot, just like using SendPlayerMessageToAll, but this function is to be used inside the NPC scripts.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SelectTextDraw","permalink":"/sl/docs/scripting/functions/SelectTextDraw"},"next":{"title":"SendClientCheck","permalink":"/sl/docs/scripting/functions/SendClientCheck"}}');var i=n(74848),r=n(28453);const l={title:"SendChat",sidebar_label:"SendChat",description:"This will send a player text by the bot, just like using SendPlayerMessageToAll, but this function is to be used inside the NPC scripts.",tags:[]},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["This will send a player text by the bot, just like using ",(0,i.jsx)(t.a,{href:"../functions/SendPlayerMessageToAll",children:"SendPlayerMessageToAll"}),", but this function is to be used inside the NPC scripts."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"msg[]"}),(0,i.jsx)(t.td,{children:"The text to be sent by the NPC."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerDeath(playerid)\n{\n    new string[80], name[MAX_PLAYER_NAME];\n    GetPlayerName(playerid, name, sizeof(name));\n    format(string, sizeof(string), "Oh no %s! I didn\'t want you to die that way!", name);\n    SendChat(string);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../functions/SendCommand",children:"SendCommand"}),": Sends a command as the NPC."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}}}]);