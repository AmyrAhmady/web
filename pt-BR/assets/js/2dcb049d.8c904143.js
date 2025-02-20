"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[42749],{3990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"scripting/functions/GetPlayerObjectMovingTargetRot","title":"GetPlayerObjectMovingTargetRot","description":"Get the move target rotation of a player-object.","source":"@site/docs/scripting/functions/GetPlayerObjectMovingTargetRot.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerObjectMovingTargetRot","permalink":"/pt-BR/docs/scripting/functions/GetPlayerObjectMovingTargetRot","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerObjectMovingTargetRot.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"},{"inline":true,"label":"object","permalink":"/pt-BR/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/pt-BR/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"GetPlayerObjectMovingTargetRot","sidebar_label":"GetPlayerObjectMovingTargetRot","description":"Get the move target rotation of a player-object.","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerObjectMovingTargetPos","permalink":"/pt-BR/docs/scripting/functions/GetPlayerObjectMovingTargetPos"},"next":{"title":"GetPlayerObjectPos","permalink":"/pt-BR/docs/scripting/functions/GetPlayerObjectPos"}}');var o=r(74848),i=r(28453);const a={title:"GetPlayerObjectMovingTargetRot",sidebar_label:"GetPlayerObjectMovingTargetRot",description:"Get the move target rotation of a player-object.",tags:["player","object","playerobject"]},s=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"Get the move target rotation of a player-object."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"playerid"}),(0,o.jsx)(t.td,{children:"The ID of the player."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"objectid"}),(0,o.jsx)(t.td,{children:"The ID of the player-object to get the move target rotation of."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["&Float",":rotationX"]}),(0,o.jsx)(t.td,{children:"A float variable in which to store the rotationX coordinate, passed by reference."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["&Float",":rotationY"]}),(0,o.jsx)(t.td,{children:"A float variable in which to store the rotationY coordinate, passed by reference."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["&Float",":rotationZ"]}),(0,o.jsx)(t.td,{children:"A float variable in which to store the rotationZ coordinate, passed by reference."})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"false"})," - The function failed to execute. The object specified does not exist."]}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:"new playerobjectid = CreatePlayerObject(playerid, 968, 1023.79541, -943.75879, 42.31450,   0.00000, 0.00000, 10.00000);\nMovePlayerObject(playerid, playerobjectid, 1023.79541, -943.75879, 42.31450,  0.8,   0.00000, -90.00000, 10.00000);\n\nnew \n    Float:rotationX,\n    Float:rotationY,\n    Float:rotationZ;\n\nGetPlayerObjectMovingTargetRot(playerid, playerobjectid, rotationX, rotationY, rotationZ);\n// rotationX = 0.00000\n// rotationY = -90.00000\n// rotationZ = 10.00000\n"})}),"\n",(0,o.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GetPlayerObjectMovingTargetPos",children:"GetPlayerObjectMovingTargetPos"}),": Get the move target position of a player-object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GetObjectMovingTargetRot",children:"GetObjectMovingTargetRot"}),": Get the move target rotation of an object."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>s});var n=r(96540);const o={},i=n.createContext(o);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);