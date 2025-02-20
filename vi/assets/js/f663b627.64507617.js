"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[29547],{28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var o=n(96540);const i={},s=o.createContext(i);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:t},e.children)}},47706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>b,frontMatter:()=>c,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"scripting/functions/SetObjectNoCameraCol","title":"SetObjectNoCameraCol","description":"Disable collisions between players\' cameras and the specified object.","source":"@site/docs/scripting/functions/SetObjectNoCameraCol.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetObjectNoCameraCol","permalink":"/vi/docs/scripting/functions/SetObjectNoCameraCol","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetObjectNoCameraCol.md","tags":[{"inline":true,"label":"camera","permalink":"/vi/docs/tags/camera"}],"version":"current","frontMatter":{"title":"SetObjectNoCameraCol","sidebar_label":"SetObjectNoCameraCol","description":"Disable collisions between players\' cameras and the specified object.","tags":["camera"]},"sidebar":"docsSidebar","previous":{"title":"SetObjectMoveSpeed","permalink":"/vi/docs/scripting/functions/SetObjectMoveSpeed"},"next":{"title":"SetObjectNoCameraCollision","permalink":"/vi/docs/scripting/functions/SetObjectNoCameraCollision"}}');var i=n(74848),s=n(28453);const c={title:"SetObjectNoCameraCol",sidebar_label:"SetObjectNoCameraCol",description:"Disable collisions between players' cameras and the specified object.",tags:["camera"]},r=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Disable collisions between players' cameras and the specified object."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"The ID of the object to disable camera collisions on."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"1: The function was executed successfully."}),"\n",(0,i.jsx)(t.p,{children:"0: The function failed to execute. The object specified does not exist."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"public OnObjectMoved(objectid)\n{\n    new Float:objX, Float:objY, Float:objZ;\n    GetObjectPos(objectid, objX, objY, objZ);\n    if (objX >= 3000.0 || objY >= 3000.0 || objX <= -3000.0 || objY <= -3000.0)\n    {\n        SetObjectNoCameraCol(objectid);\n    }\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"This only works outside the map boundaries (past -3000/3000 units on the x and/or y axis)."})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerObjectNoCameraCol",children:"SetPlayerObjectNoCameraCol"}),": Disables collisions between camera and player object."]}),"\n"]})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);