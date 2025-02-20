"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[49696],{28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(96540);const i={},l=o.createContext(i);function r(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(l.Provider,{value:t},e.children)}},32866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"scripting/functions/SetPlayerObjectNoCameraCollision","title":"SetPlayerObjectNoCameraCollision","description":"Toggles a player object camera collision.","source":"@site/docs/scripting/functions/SetPlayerObjectNoCameraCollision.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerObjectNoCameraCollision","permalink":"/ta/docs/scripting/functions/SetPlayerObjectNoCameraCollision","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerObjectNoCameraCollision.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerObjectNoCameraCollision","sidebar_label":"SetPlayerObjectNoCameraCollision","description":"Toggles a player object camera collision.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerObjectNoCameraCol","permalink":"/ta/docs/scripting/functions/SetPlayerObjectNoCameraCol"},"next":{"title":"SetPlayerObjectPos","permalink":"/ta/docs/scripting/functions/SetPlayerObjectPos"}}');var i=n(74848),l=n(28453);const r={title:"SetPlayerObjectNoCameraCollision",sidebar_label:"SetPlayerObjectNoCameraCollision",description:"Toggles a player object camera collision.",tags:["player"]},s=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Toggles a player object camera collision."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The playerID the object belongs to."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"The ID of the object you want to toggle."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"false"})," - The function failed to execute. The object specified does not exist."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"public OnPlayerObjectMoved(playerid, objectid)\n{\n    new Float:objX, Float:objY, Float:objZ;\n    GetPlayerObjectPos(playerid, objectid, objX, objY, objZ);\n    if (objX >= 3000.0 && objY >= 3000.0)\n    {\n        SetPlayerObjectNoCameraCollision(playerid, objectid);\n    }\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"This does not work inside the normal SA map boundaries."})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetObjectNoCameraCollision",children:"SetObjectNoCameraCollision"}),": Disables collisions between camera and object."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);