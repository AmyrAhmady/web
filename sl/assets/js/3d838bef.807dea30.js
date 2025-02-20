"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[23550],{28207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"scripting/functions/GetObjectType","title":"GetObjectType","description":"Get the type of an object. (global or player)","source":"@site/docs/scripting/functions/GetObjectType.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetObjectType","permalink":"/sl/docs/scripting/functions/GetObjectType","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetObjectType.md","tags":[{"inline":true,"label":"object","permalink":"/sl/docs/tags/object"}],"version":"current","frontMatter":{"title":"GetObjectType","sidebar_label":"GetObjectType","description":"Get the type of an object. (global or player)","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"GetObjectSyncRotation","permalink":"/sl/docs/scripting/functions/GetObjectSyncRotation"},"next":{"title":"GetPVarFloat","permalink":"/sl/docs/scripting/functions/GetPVarFloat"}}');var c=n(74848),o=n(28453);const i={title:"GetObjectType",sidebar_label:"GetObjectType",description:"Get the type of an object. (global or player)",tags:["object"]},s=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(t.p,{children:"Get the type of an object. (global or player)"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"playerid"}),(0,c.jsx)(t.td,{children:"The ID of the player."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"objectid"}),(0,c.jsx)(t.td,{children:"The ID of the object to get the type of."})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"0"})," - Function failed to execute. The objectid or playerid specified does not exist."]}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"1"})," - Global object."]}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"2"})," - Player object."]}),"\n",(0,c.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:"new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);\n\nnew objectType = GetObjectType(playerid, objectid);\n// objectType = 1\n"})}),"\n",(0,c.jsx)(t.p,{children:"Another example:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:"new playerobjectid = CreatePlayerObject(playerid, 19174, 978.88757, -986.34918, 40.95220,   0.00000, 0.00000, 228.00000);\n\nnew objectType = GetObjectType(playerid, playerobjectid);\n// objectType = 2\n"})}),"\n",(0,c.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"CreatePlayerObject",children:"CreatePlayerObject"}),": Create an object for only one player."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(96540);const c={},o=r.createContext(c);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);