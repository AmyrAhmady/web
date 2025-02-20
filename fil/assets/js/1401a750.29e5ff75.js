"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[27562],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}},45704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"scripting/functions/GetPlayerRotationQuat","title":"GetPlayerRotationQuat","description":"Returns a player\'s rotation on all axes as a quaternion.","source":"@site/docs/scripting/functions/GetPlayerRotationQuat.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerRotationQuat","permalink":"/fil/docs/scripting/functions/GetPlayerRotationQuat","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerRotationQuat.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerRotationQuat","sidebar_label":"GetPlayerRotationQuat","description":"Returns a player\'s rotation on all axes as a quaternion.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerRawIp","permalink":"/fil/docs/scripting/functions/GetPlayerRawIp"},"next":{"title":"GetPlayerScore","permalink":"/fil/docs/scripting/functions/GetPlayerScore"}}');var r=n(74848),a=n(28453);const s={title:"GetPlayerRotationQuat",sidebar_label:"GetPlayerRotationQuat",description:"Returns a player's rotation on all axes as a quaternion.",tags:["player"]},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Returns a player's rotation on all axes as a quaternion."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to get the rotation of."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":w"]}),(0,r.jsx)(t.td,{children:"A float variable in which to store the first quaternion angle, passed by reference."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":x"]}),(0,r.jsx)(t.td,{children:"A float variable in which to store the second quaternion angle, passed by reference."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":y"]}),(0,r.jsx)(t.td,{children:"A float variable in which to store the third quaternion angle, passed by reference."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":z"]}),(0,r.jsx)(t.td,{children:"A float variable in which to store the fourth quaternion angle, passed by reference."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means the player specified does not exist."]}),"\n",(0,r.jsx)(t.p,{children:"The player's rotation is stored in the specified variables."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"new \n    Float:w,\n    Float:x,\n    Float:y,\n    Float:z;\n\nGetPlayerRotationQuat(playerid, w, x, y, z);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"There is no 'set' variation of this function; you can not SET a player's rotation ( apart from the facing angle (Z rotation) )."})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetPlayerFacingAngle",children:"SetPlayerFacingAngle"}),": Set a player's facing angle (Z rotation)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerFacingAngle",children:"GetPlayerFacingAngle"}),": Check where a player is facing."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetVehicleRotationQuat",children:"GetVehicleRotationQuat"}),": Get the quaternion rotation of a vehicle."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);