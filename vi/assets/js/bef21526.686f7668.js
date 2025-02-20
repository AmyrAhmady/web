"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[32294],{28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var r=n(96540);const a={},i=r.createContext(a);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:t},e.children)}},36710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/GetPVarInt","title":"GetPVarInt","description":"Gets an integer player variable\'s value.","source":"@site/docs/scripting/functions/GetPVarInt.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPVarInt","permalink":"/vi/docs/scripting/functions/GetPVarInt","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPVarInt.md","tags":[{"inline":true,"label":"player variable","permalink":"/vi/docs/tags/player-variable"},{"inline":true,"label":"pvar","permalink":"/vi/docs/tags/pvar"}],"version":"current","frontMatter":{"title":"GetPVarInt","sidebar_label":"GetPVarInt","description":"Gets an integer player variable\'s value.","tags":["player variable","pvar"]},"sidebar":"docsSidebar","previous":{"title":"GetPVarFloat","permalink":"/vi/docs/scripting/functions/GetPVarFloat"},"next":{"title":"GetPVarNameAtIndex","permalink":"/vi/docs/scripting/functions/GetPVarNameAtIndex"}}');var a=n(74848),i=n(28453);const l={title:"GetPVarInt",sidebar_label:"GetPVarInt",description:"Gets an integer player variable's value.",tags:["player variable","pvar"]},s=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Gets an integer player variable's value."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player whose player variable to get."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"const pvar[]"}),(0,a.jsxs)(t.td,{children:["The name of the player variable (case-insensitive).",(0,a.jsx)("br",{}),"Assigned in ",(0,a.jsx)(t.a,{href:"SetPVarInt",children:"SetPVarInt"}),"."]})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"The integer value of the specified player variable."}),"\n",(0,a.jsx)(t.p,{children:"It will still return 0 if the variable is not set, or the player does not exist."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'public OnPlayerSpawn(playerid)\n{\n    SetPVarInt(playerid, "Level", 20);\n    return 1;\n}\n\npublic OnPlayerDisconnect(playerid, reason)\n{\n    printf("Level: %d", GetPVarInt(playerid, "Level")); // get the saved value (\'Level\')\n    // will print \'Level: 20\'\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Variables aren't reset until after ",(0,a.jsx)(t.a,{href:"../callbacks/OnPlayerDisconnect",children:"OnPlayerDisconnect"})," is called, so the values are still accessible in OnPlayerDisconnect."]})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPVarInt",children:"SetPVarInt"}),": Set an integer for a player variable."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPVarString",children:"SetPVarString"}),": Set a string for a player variable."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPVarString",children:"GetPVarString"}),": Get the previously set string from a player variable."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPVarFloat",children:"SetPVarFloat"}),": Set a float for a player variable."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPVarFloat",children:"GetPVarFloat"}),": Get the previously set float from a player variable."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"DeletePVar",children:"DeletePVar"}),": Delete a player variable."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);