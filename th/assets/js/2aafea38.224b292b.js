"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[84006],{28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(96540);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}},73666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"scripting/functions/SetPlayerObjectMoveSpeed","title":"SetPlayerObjectMoveSpeed","description":"Set the move speed of a player-object.","source":"@site/docs/scripting/functions/SetPlayerObjectMoveSpeed.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerObjectMoveSpeed","permalink":"/th/docs/scripting/functions/SetPlayerObjectMoveSpeed","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerObjectMoveSpeed.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"},{"inline":true,"label":"object","permalink":"/th/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/th/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"SetPlayerObjectMoveSpeed","sidebar_label":"SetPlayerObjectMoveSpeed","description":"Set the move speed of a player-object.","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerObjectMaterialText","permalink":"/th/docs/scripting/functions/SetPlayerObjectMaterialText"},"next":{"title":"SetPlayerObjectNoCameraCol","permalink":"/th/docs/scripting/functions/SetPlayerObjectNoCameraCol"}}');var o=n(74848),s=n(28453);const c={title:"SetPlayerObjectMoveSpeed",sidebar_label:"SetPlayerObjectMoveSpeed",description:"Set the move speed of a player-object.",tags:["player","object","playerobject"]},i=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"Set the move speed of a player-object."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"playerid"}),(0,o.jsx)(t.td,{children:"The ID of the player."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"objectid"}),(0,o.jsx)(t.td,{children:"The ID of the player-object to set the move speed of."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Float",":speed"]}),(0,o.jsx)(t.td,{children:"The speed at which to move the object (units per second)."})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"false"})," - The function failed to execute. The object specified does not exist."]}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:"new playerobjectid = CreatePlayerObject(playerid, 985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);\nMovePlayerObject(playerid, playerobjectid, 1003.3915, -643.3342, 114.5122,  0.8);\n\nSetPlayerObjectMoveSpeed(playerid, playerobjectid, 1.5);\n// Move speed changed from 0.8 to 1.5\n"})}),"\n",(0,o.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": Move a player object to a new position with a set speed."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GetPlayerObjectMoveSpeed",children:"GetPlayerObjectMoveSpeed"}),": Get the move speed of a player-object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"SetObjectMoveSpeed",children:"SetObjectMoveSpeed"}),": Set the move speed of an object."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);