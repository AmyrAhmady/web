"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[73789],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var i=n(96540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}},40247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"scripting/functions/StopPlayerHoldingObject","title":"StopPlayerHoldingObject","description":"Removes attached objects.","source":"@site/docs/scripting/functions/StopPlayerHoldingObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/StopPlayerHoldingObject","permalink":"/de/docs/scripting/functions/StopPlayerHoldingObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/StopPlayerHoldingObject.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"}],"version":"current","frontMatter":{"title":"StopPlayerHoldingObject","sidebar_label":"StopPlayerHoldingObject","description":"Removes attached objects.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"StopObject","permalink":"/de/docs/scripting/functions/StopObject"},"next":{"title":"StopPlayerObject","permalink":"/de/docs/scripting/functions/StopPlayerObject"}}');var r=n(74848),o=n(28453);const s={title:"StopPlayerHoldingObject",sidebar_label:"StopPlayerHoldingObject",description:"Removes attached objects.",tags:["player"]},l=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Removes attached objects."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"ID of the player you want to remove the object from."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"1 on success, 0 on failure"}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    if (IsPlayerHoldingObject(playerid))\n    {\n        StopPlayerHoldingObject(playerid);\n    }\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["This function was removed in SA-MP 0.3c. See ",(0,r.jsx)(t.a,{href:"RemovePlayerAttachedObject",children:"RemovePlayerAttachedObject"})]})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetPlayerHoldingObject",children:"SetPlayerHoldingObject"}),": Attaches an object to a bone."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);