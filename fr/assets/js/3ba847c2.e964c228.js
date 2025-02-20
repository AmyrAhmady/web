"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[26331],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}},53711:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/SetPlayerAdmin","title":"SetPlayerAdmin","description":"Sets the player as an RCON admin.","source":"@site/docs/scripting/functions/SetPlayerAdmin.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerAdmin","permalink":"/fr/docs/scripting/functions/SetPlayerAdmin","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerAdmin.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"},{"inline":true,"label":"rcon","permalink":"/fr/docs/tags/rcon"},{"inline":true,"label":"administration","permalink":"/fr/docs/tags/administration"}],"version":"current","frontMatter":{"title":"SetPlayerAdmin","sidebar_label":"SetPlayerAdmin","description":"Sets the player as an RCON admin.","tags":["player","rcon","administration"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayer3DTextLabelVirtualWorld","permalink":"/fr/docs/scripting/functions/SetPlayer3DTextLabelVirtualWorld"},"next":{"title":"SetPlayerAmmo","permalink":"/fr/docs/scripting/functions/SetPlayerAmmo"}}');var i=t(74848),s=t(28453);const l={title:"SetPlayerAdmin",sidebar_label:"SetPlayerAdmin",description:"Sets the player as an RCON admin.",tags:["player","rcon","administration"]},a=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Sets the player as an RCON admin."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["bool",":admin"]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"true"})," for set as an RCON admin, ",(0,i.jsx)(n.strong,{children:"false"})," for remove from RCON admin."]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/admin", true))\n    {\n        SetPlayerAdmin(playerid, true);\n        SendClientMessage(playerid, -1, "SERVER: You are now RCON admin!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"IsPlayerAdmin",children:"IsPlayerAdmin"}),": Check if a player is logged in as an RCON admin."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"OnRconLoginAttempt",children:"OnRconLoginAttempt"}),": Called when an attempt to login to RCON is made."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);