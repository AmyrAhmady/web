"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[8560],{28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>i});var n=r(96540);const s={},l=n.createContext(s);function a(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(l.Provider,{value:t},e.children)}},79878:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/TextDrawShowForAll","title":"TextDrawShowForAll","description":"Shows a textdraw for all players.","source":"@site/docs/scripting/functions/TextDrawShowForAll.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawShowForAll","permalink":"/sr/docs/scripting/functions/TextDrawShowForAll","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/TextDrawShowForAll.md","tags":[{"inline":true,"label":"textdraw","permalink":"/sr/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawShowForAll","sidebar_label":"TextDrawShowForAll","description":"Shows a textdraw for all players.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawSetStringForPlayer","permalink":"/sr/docs/scripting/functions/TextDrawSetStringForPlayer"},"next":{"title":"TextDrawShowForPlayer","permalink":"/sr/docs/scripting/functions/TextDrawShowForPlayer"}}');var s=r(74848),l=r(28453);const a={title:"TextDrawShowForAll",sidebar_label:"TextDrawShowForAll",description:"Shows a textdraw for all players.",tags:["textdraw"]},i=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Shows a textdraw for all players."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Text",":textid"]}),(0,s.jsxs)(t.td,{children:["The ID of the textdraw to show.",(0,s.jsx)("br",{}),"Returned by ",(0,s.jsx)(t.a,{href:"TextDrawCreate",children:"TextDrawCreate"}),"."]})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means the textdraw specified does not exist."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(240.0, 580.0, "Example Text");\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/showtd", true))\n    {\n        TextDrawShowForAll(gMyTextdraw);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": Show a textdraw for a certain player."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": Hide a textdraw for a certain player."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": Hide a textdraw for all players."]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);