"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[54055],{6922:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"scripting/functions/GetPVarString","title":"GetPVarString","description":"Gets a player variable as a string.","source":"@site/docs/scripting/functions/GetPVarString.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPVarString","permalink":"/ru/docs/scripting/functions/GetPVarString","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPVarString.md","tags":[{"inline":true,"label":"player variable","permalink":"/ru/docs/tags/player-variable"},{"inline":true,"label":"pvar","permalink":"/ru/docs/tags/pvar"}],"version":"current","frontMatter":{"title":"GetPVarString","sidebar_label":"GetPVarString","description":"Gets a player variable as a string.","tags":["player variable","pvar"]},"sidebar":"docsSidebar","previous":{"title":"GetPVarNameAtIndex","permalink":"/ru/docs/scripting/functions/GetPVarNameAtIndex"},"next":{"title":"GetPVarType","permalink":"/ru/docs/scripting/functions/GetPVarType"}}');var a=t(74848),i=t(28453);const l={title:"GetPVarString",sidebar_label:"GetPVarString",description:"Gets a player variable as a string.",tags:["player variable","pvar"]},s=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(r.p,{children:"Gets a player variable as a string."}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Name"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"playerid"}),(0,a.jsx)(r.td,{children:"The ID of the player whose player variable to get."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"const pvar[]"}),(0,a.jsxs)(r.td,{children:["The name of the player variable, set by ",(0,a.jsx)(r.a,{href:"SetPVarString",children:"SetPVarString"}),"."]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"output[]"}),(0,a.jsx)(r.td,{children:"The array in which to store the string value in, passed by reference."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"len = sizeof (output)"}),(0,a.jsx)(r.td,{children:"The maximum length of the returned string."})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(r.p,{children:"The length of the string."}),"\n",(0,a.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-c",children:'public OnPlayerConnect(playerid,reason)\n{\n    new playerName[MAX_PLAYER_NAME];\n    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);\n    SetPVarString(playerid, "PlayerName", playerName);\n    return 1;\n}\n\npublic OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    new playerName[MAX_PLAYER_NAME];\n    GetPVarString(playerid, "PlayerName", playerName, sizeof(playerName));\n\n    printf("%s died.", playerName);\n}\n'})}),"\n",(0,a.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["If length of string is zero (value not set), ",(0,a.jsx)(r.code,{children:"output"})," text will not be updated or set to anything and will remain with old data, neccesying that you clear the variable to blank value if ",(0,a.jsx)(r.a,{href:"GetPVarString",children:"GetPVarString"})," returns 0 if that behavior is undesired."]})}),"\n",(0,a.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"SetPVarString",children:"SetPVarString"}),": Set a string for a player variable."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"SetPVarInt",children:"SetPVarInt"}),": Set an integer for a player variable."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"GetPVarInt",children:"GetPVarInt"}),": Get the previously set integer from a player variable."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"SetPVarFloat",children:"SetPVarFloat"}),": Set a float for a player variable."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"GetPVarFloat",children:"GetPVarFloat"}),": Get the previously set float from a player variable."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"DeletePVar",children:"DeletePVar"}),": Delete a player variable."]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>s});var n=t(96540);const a={},i=n.createContext(a);function l(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);