"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[54055],{6922:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"scripting/functions/GetPVarString","title":"GetPVarString","description":"Gets a player variable as a string.","source":"@site/docs/scripting/functions/GetPVarString.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPVarString","permalink":"/fa/docs/scripting/functions/GetPVarString","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPVarString.md","tags":[{"inline":true,"label":"player variable","permalink":"/fa/docs/tags/player-variable"},{"inline":true,"label":"pvar","permalink":"/fa/docs/tags/pvar"}],"version":"current","frontMatter":{"title":"GetPVarString","sidebar_label":"GetPVarString","description":"Gets a player variable as a string.","tags":["player variable","pvar"]},"sidebar":"docsSidebar","previous":{"title":"GetPVarNameAtIndex","permalink":"/fa/docs/scripting/functions/GetPVarNameAtIndex"},"next":{"title":"GetPVarType","permalink":"/fa/docs/scripting/functions/GetPVarType"}}');var a=r(74848),i=r(28453);const l={title:"GetPVarString",sidebar_label:"GetPVarString",description:"Gets a player variable as a string.",tags:["player variable","pvar"]},s=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Gets a player variable as a string."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player whose player variable to get."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"const pvar[]"}),(0,a.jsxs)(t.td,{children:["The name of the player variable, set by ",(0,a.jsx)(t.a,{href:"SetPVarString",children:"SetPVarString"}),"."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"output[]"}),(0,a.jsx)(t.td,{children:"The array in which to store the string value in, passed by reference."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"len = sizeof (output)"}),(0,a.jsx)(t.td,{children:"The maximum length of the returned string."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"The length of the string."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'public OnPlayerConnect(playerid,reason)\n{\n    new playerName[MAX_PLAYER_NAME];\n    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);\n    SetPVarString(playerid, "PlayerName", playerName);\n    return 1;\n}\n\npublic OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    new playerName[MAX_PLAYER_NAME];\n    GetPVarString(playerid, "PlayerName", playerName, sizeof(playerName));\n\n    printf("%s died.", playerName);\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["If length of string is zero (value not set), ",(0,a.jsx)(t.code,{children:"output"})," text will not be updated or set to anything and will remain with old data, neccesying that you clear the variable to blank value if ",(0,a.jsx)(t.a,{href:"GetPVarString",children:"GetPVarString"})," returns 0 if that behavior is undesired."]})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPVarString",children:"SetPVarString"}),": Set a string for a player variable."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPVarInt",children:"SetPVarInt"}),": Set an integer for a player variable."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPVarInt",children:"GetPVarInt"}),": Get the previously set integer from a player variable."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPVarFloat",children:"SetPVarFloat"}),": Set a float for a player variable."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPVarFloat",children:"GetPVarFloat"}),": Get the previously set float from a player variable."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"DeletePVar",children:"DeletePVar"}),": Delete a player variable."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>s});var n=r(96540);const a={},i=n.createContext(a);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);