"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[69007],{27743:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/functions/SendClientMessage","title":"SendClientMessage","description":"This function sends a message to a specific player with a chosen color in the chat.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/SendClientMessage.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SendClientMessage","permalink":"/zh-cn/docs/scripting/functions/SendClientMessage","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SendClientMessage.md","tags":[],"version":"current","frontMatter":{"title":"SendClientMessage","sidebar_label":"SendClientMessage","description":"This function sends a message to a specific player with a chosen color in the chat.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SendClientCheck","permalink":"/zh-cn/docs/scripting/functions/SendClientCheck"},"next":{"title":"SendClientMessageToAll","permalink":"/zh-cn/docs/scripting/functions/SendClientMessageToAll"}}');var i=s(74848),l=s(28453);const r={title:"SendClientMessage",sidebar_label:"SendClientMessage",description:"This function sends a message to a specific player with a chosen color in the chat.",tags:[]},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This function sends a message to a specific player with a chosen color in the chat. The whole line in the chatbox will be in the set color unless color embedding is used."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to display the message to."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"color"}),(0,i.jsx)(n.td,{children:"The color of the message (0xRRGGBBAA Hex format)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"const format[]"}),(0,i.jsx)(n.td,{children:"The text that will be displayed (max 144 characters)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"OPEN_MP_TAGS:..."}),(0,i.jsx)(n.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"true"})," - The function was executed successfully. Success is reported when the string is over 144 characters, but the message won't be sent."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"false"})," - The function failed to execute. The player is not connected."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'#define COLOR_RED 0xFF0000FF\n\npublic OnPlayerConnect(playerid)\n{\n    SendClientMessage(playerid, COLOR_RED, "This text is red");\n    SendClientMessage(playerid, 0x00FF00FF, "This text is green.");\n    SendClientMessage(playerid, -1, "This text is white.");\n    return 1;\n}\n\npublic OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    if (killerid != INVALID_PLAYER_ID)\n    {\n        new name[MAX_PLAYER_NAME];\n        GetPlayerName(killerid, name, sizeof(name));\n\n        SendClientMessage(playerid, COLOR_RED, "%s killed you.", name);\n    }\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can use color embedding for multiple colors in the message."}),"\n",(0,i.jsx)(n.li,{children:"Using '-1' as the color will make the text white (for the simple reason that -1, when represented in hexadecimal notation, is 0xFFFFFFFF)."}),"\n"]})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If a message is longer than 144 characters, it will not be sent. Truncation can be used to prevent this. Displaying a message on multiple lines will also solve this issue."}),"\n",(0,i.jsx)(n.li,{children:"Avoid using the percent sign (or format specifiers) in the actual message text without properly escaping it (like %%). It will result in crashes otherwise."}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SendClientMessageToAll",children:"SendClientMessageToAll"}),": Send a message to all players."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SendPlayerMessageToPlayer",children:"SendPlayerMessageToPlayer"}),": Force a player to send text for one player."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SendPlayerMessageToAll",children:"SendPlayerMessageToAll"}),": Force a player to send text for all players."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(96540);const i={},l=t.createContext(i);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);