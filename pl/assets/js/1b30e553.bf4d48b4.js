"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[86993],{465:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"scripting/callbacks/OnPlayerText","title":"OnPlayerText","description":"This callback is called when a player sends a chat message.","source":"@site/docs/scripting/callbacks/OnPlayerText.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerText","permalink":"/pl/docs/scripting/callbacks/OnPlayerText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerText.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerText","sidebar_label":"OnPlayerText","description":"This callback is called when a player sends a chat message.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerTakeDamage","permalink":"/pl/docs/scripting/callbacks/OnPlayerTakeDamage"},"next":{"title":"OnPlayerUpdate","permalink":"/pl/docs/scripting/callbacks/OnPlayerUpdate"}}');var a=t(74848),s=t(28453);const r={title:"OnPlayerText",sidebar_label:"OnPlayerText",description:"This callback is called when a player sends a chat message.",tags:["player"]},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{TipNPCCallbacks:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This callback is called when a player sends a message in chat."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"playerid"}),(0,a.jsx)(n.td,{children:"The ID of the player who sent the message."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"text[]"}),(0,a.jsx)(n.td,{children:"The content of the message that the player sent."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"It is always called first in filterscripts so returning 0 on it blocks other scripts from processing it."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'public OnPlayerText(playerid, text[])\n{\n    new string[144];\n    format(string, sizeof (string), "(%d) %s", playerid, text);\n    SendPlayerMessageToAll(playerid, string);\n\n    // Returning 0 ignores the default message format and sends the custom one instead.\n    // Returning 1 will result in the message being duplicated, as the default message will also be sent.\n    return 0;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(t,{}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"By default, this callback sends a message containing the content of the message, the player's name, and their ID. Returning 0 will ignore this default behaviour, as demonstrated in the code example above."})}),"\n",(0,a.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnPlayerCommandText",children:"OnPlayerCommandText"}),": Called when a player types a command."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/SendPlayerMessageToPlayer",children:"SendPlayerMessageToPlayer"}),": Force a player to send text for one player."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/SendPlayerMessageToAll",children:"SendPlayerMessageToAll"}),": Force a player to send text for all players."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/ToggleChatTextReplacement",children:"ToggleChatTextReplacement"}),": Toggles the chat input filter."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var l=t(96540);const a={},s=l.createContext(a);function r(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);