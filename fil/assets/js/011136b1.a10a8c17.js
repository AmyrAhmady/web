"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[69468],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var o=n(96540);const s={},c=o.createContext(s);function i(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(c.Provider,{value:t},e.children)}},67957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"scripting/functions/SetObjectMoveSpeed","title":"SetObjectMoveSpeed","description":"Set the move speed of an object.","source":"@site/docs/scripting/functions/SetObjectMoveSpeed.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetObjectMoveSpeed","permalink":"/fil/docs/scripting/functions/SetObjectMoveSpeed","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetObjectMoveSpeed.md","tags":[{"inline":true,"label":"object","permalink":"/fil/docs/tags/object"}],"version":"current","frontMatter":{"title":"SetObjectMoveSpeed","sidebar_label":"SetObjectMoveSpeed","description":"Set the move speed of an object.","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"SetObjectMaterialText","permalink":"/fil/docs/scripting/functions/SetObjectMaterialText"},"next":{"title":"SetObjectNoCameraCol","permalink":"/fil/docs/scripting/functions/SetObjectNoCameraCol"}}');var s=n(74848),c=n(28453);const i={title:"SetObjectMoveSpeed",sidebar_label:"SetObjectMoveSpeed",description:"Set the move speed of an object.",tags:["object"]},r=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Set the move speed of an object."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"objectid"}),(0,s.jsx)(t.td,{children:"The ID of the object to set the move speed of."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":speed"]}),(0,s.jsx)(t.td,{children:"The speed at which to move the object (units per second)."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"false"})," - The function failed to execute. The object specified does not exist."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);\nMoveObject(objectid, 1003.3915, -643.3342, 114.5122,  0.8);\n\nSetObjectMoveSpeed(objectid, 1.5);\n// Move speed changed from 0.8 to 1.5\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Move an object to a new position with a set speed."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetObjectMoveSpeed",children:"GetObjectMoveSpeed"}),": Get the move speed of an object."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetPlayerObjectMoveSpeed",children:"SetPlayerObjectMoveSpeed"}),": Set the move speed of a player-object."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);