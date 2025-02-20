"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[6684],{28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var s=t(96540);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}},67041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"scripting/functions/SendClientMessagef","title":"SendClientMessagef","description":"This function sends a formatted message to a specific player with a chosen color in the chat.","source":"@site/docs/scripting/functions/SendClientMessagef.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SendClientMessagef","permalink":"/bs/docs/scripting/functions/SendClientMessagef","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SendClientMessagef.md","tags":[],"version":"current","frontMatter":{"title":"SendClientMessagef","sidebar_label":"SendClientMessagef","description":"This function sends a formatted message to a specific player with a chosen color in the chat.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SendClientMessageToAllf","permalink":"/bs/docs/scripting/functions/SendClientMessageToAllf"},"next":{"title":"SendCommand","permalink":"/bs/docs/scripting/functions/SendCommand"}}');var i=t(74848),r=t(28453);const d={title:"SendClientMessagef",sidebar_label:"SendClientMessagef",description:"This function sends a formatted message to a specific player with a chosen color in the chat.",tags:[]},c=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Format Specifiers",id:"format-specifiers",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"open.mp beta build 6"}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.p,{children:"This function was deprecated."}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"SendClientMessage",children:"SendClientMessage"})," function now is built-in with format!"]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This function sends a formatted message to a specific player with a chosen color in the chat. The whole line in the chatbox will be in the set color unless color embedding is used."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to display the message to."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"color"}),(0,i.jsx)(n.td,{children:"The color of the message (0xRRGGBBAA Hex format)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"const message[]"}),(0,i.jsx)(n.td,{children:"The text that will be displayed (max 144 characters)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"{Float, _}:..."}),(0,i.jsx)(n.td,{children:"Indefinite number of arguments of any tag"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"1: The function was executed successfully. Success is reported when the string is over 144 characters, but the message won't be sent."}),"\n",(0,i.jsx)(n.p,{children:"0: The function failed to execute. The player is not connected."}),"\n",(0,i.jsx)(n.h2,{id:"format-specifiers",children:"Format Specifiers"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Specifier"}),(0,i.jsx)(n.th,{children:"Meaning"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"%i"}),(0,i.jsx)(n.td,{children:"Unsigned Integer"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"%d"}),(0,i.jsx)(n.td,{children:"Signed Integer"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"%s"}),(0,i.jsx)(n.td,{children:"String"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"%f"}),(0,i.jsx)(n.td,{children:"Floating-point number"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"%c"}),(0,i.jsx)(n.td,{children:"ASCII character"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"%x"}),(0,i.jsx)(n.td,{children:"Hexadecimal number"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"%b"}),(0,i.jsx)(n.td,{children:"Binary number"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"%%"}),(0,i.jsx)(n.td,{children:"Literal '%'"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"%q"}),(0,i.jsx)(n.td,{children:"Escape a text for SQLite. (Added in 0.3.7 R2)"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'#define COLOR_RED 0xFF0000FF\n\npublic OnPlayerConnect(playerid)\n{\n    new number = 5;\n    SendClientMessagef(playerid, -1, "The variable above is %i", number);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"You can use color embedding for multiple colors in the message. Using '-1' as the color will make the text white (for the simple reason that -1, when represented in hexadecimal notation, is 0xFFFFFFFF)."})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"If a message is longer than 144 characters, it will not be sent. Truncation can be used to prevent this. Displaying a message on multiple lines will also solve this issue."})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}}}]);