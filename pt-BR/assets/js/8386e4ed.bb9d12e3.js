"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[31882],{28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>r});var a=i(96540);const n={},s=a.createContext(n);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(s.Provider,{value:t},e.children)}},71929:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"scripting/functions/LimitGlobalChatRadius","title":"LimitGlobalChatRadius","description":"Set a radius limitation for the chat.","source":"@site/docs/scripting/functions/LimitGlobalChatRadius.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/LimitGlobalChatRadius","permalink":"/pt-BR/docs/scripting/functions/LimitGlobalChatRadius","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/LimitGlobalChatRadius.md","tags":[],"version":"current","frontMatter":{"title":"LimitGlobalChatRadius","sidebar_label":"LimitGlobalChatRadius","description":"Set a radius limitation for the chat.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"KillTimer","permalink":"/pt-BR/docs/scripting/functions/KillTimer"},"next":{"title":"LimitPlayerMarkerRadius","permalink":"/pt-BR/docs/scripting/functions/LimitPlayerMarkerRadius"}}');var n=i(74848),s=i(28453);const l={title:"LimitGlobalChatRadius",sidebar_label:"LimitGlobalChatRadius",description:"Set a radius limitation for the chat.",tags:[]},r=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Set a radius limitation for the chat. Only players at a certain distance from the player will see their message in the chat. Also changes the distance at which a player can see other players on the map at the same distance."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":chatRadius"]}),(0,n.jsx)(t.td,{children:"The range in which players will be able to see chat."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    LimitGlobalChatRadius(200.0);\n    return 1;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetNameTagDrawDistance",children:"SetNameTagDrawDistance"}),": Set the distance from where people can see other player's nametags."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SendPlayerMessageToPlayer",children:"SendPlayerMessageToPlayer"}),": Force a player to send text for one player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SendPlayerMessageToAll",children:"SendPlayerMessageToAll"}),": Force a player to send text for all players."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../callbacks/OnPlayerText",children:"OnPlayerText"}),": Called when a player sends a message via the chat."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}}}]);