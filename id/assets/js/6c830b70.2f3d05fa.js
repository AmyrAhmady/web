"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[63538],{21225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"scripting/functions/SetPlayerObjectNoCameraCol","title":"SetPlayerObjectNoCameraCol","description":"Toggles a player object camera collision.","source":"@site/docs/scripting/functions/SetPlayerObjectNoCameraCol.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerObjectNoCameraCol","permalink":"/id/docs/scripting/functions/SetPlayerObjectNoCameraCol","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerObjectNoCameraCol.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerObjectNoCameraCol","sidebar_label":"SetPlayerObjectNoCameraCol","description":"Toggles a player object camera collision.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerObjectMoveSpeed","permalink":"/id/docs/scripting/functions/SetPlayerObjectMoveSpeed"},"next":{"title":"SetPlayerObjectNoCameraCollision","permalink":"/id/docs/scripting/functions/SetPlayerObjectNoCameraCollision"}}');var r=n(74848),i=n(28453);const l={title:"SetPlayerObjectNoCameraCol",sidebar_label:"SetPlayerObjectNoCameraCol",description:"Toggles a player object camera collision.",tags:["player"]},s=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Toggles a player object camera collision."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The playerID the object belongs to."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"objectid"}),(0,r.jsx)(t.td,{children:"The ID of the object you want to toggle."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"1: The function was executed successfully."}),"\n",(0,r.jsx)(t.p,{children:"0: The function failed to execute. The object specified does not exist."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"public OnPlayerObjectMoved(playerid, objectid)\n{\n    new Float:objX, Float:objY, Float:objZ;\n    GetPlayerObjectPos(playerid, objectid, objX, objY, objZ);\n    if (objX >= 3000.0 && objY >= 3000.0)\n    {\n        SetPlayerObjectNoCameraCol(playerid, objectid);\n    }\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"This does not work inside the normal SA map boundaries."})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetObjectNoCameraCol",children:"SetObjectNoCameraCol"}),": Disables collisions between camera and object."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var o=n(96540);const r={},i=o.createContext(r);function l(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);