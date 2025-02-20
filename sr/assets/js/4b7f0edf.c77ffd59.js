"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[1781],{28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>s});var n=r(96540);const i={},a=n.createContext(i);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(a.Provider,{value:t},e.children)}},98976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>x,frontMatter:()=>l,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"scripting/functions/TextDrawHideForAll","title":"TextDrawHideForAll","description":"Hides a text draw for all players.","source":"@site/docs/scripting/functions/TextDrawHideForAll.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawHideForAll","permalink":"/sr/docs/scripting/functions/TextDrawHideForAll","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/TextDrawHideForAll.md","tags":[{"inline":true,"label":"textdraw","permalink":"/sr/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawHideForAll","sidebar_label":"TextDrawHideForAll","description":"Hides a text draw for all players.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawGetTextSize","permalink":"/sr/docs/scripting/functions/TextDrawGetTextSize"},"next":{"title":"TextDrawHideForPlayer","permalink":"/sr/docs/scripting/functions/TextDrawHideForPlayer"}}');var i=r(74848),a=r(28453);const l={title:"TextDrawHideForAll",sidebar_label:"TextDrawHideForAll",description:"Hides a text draw for all players.",tags:["textdraw"]},s=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Hides a text draw for all players."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Text",":textid"]}),(0,i.jsxs)(t.td,{children:["The ID of the textdraw to hide.",(0,i.jsx)("br",{}),"Returned by ",(0,i.jsx)(t.a,{href:"TextDrawCreate",children:"TextDrawCreate"}),"."]})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(240.0, 580.0, "Example Text");\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/showtd", true))\n    {\n        TextDrawShowForAll(gMyTextdraw);\n        return 1;\n    }\n    if (!strcmp(cmdtext, "/hidetd", true))\n    {\n        TextDrawHideForAll(gMyTextdraw);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": Show a textdraw for a certain player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": Hide a textdraw for a certain player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": Show a textdraw for all players."]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);