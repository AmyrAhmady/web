"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[51126],{28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var s=n(96540);const i={},o=s.createContext(i);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:t},e.children)}},59581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"scripting/functions/SetObjectsDefaultCameraCollision","title":"SetObjectsDefaultCameraCollision","description":"Allows camera collisions with newly created objects to be disabled by default.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/SetObjectsDefaultCameraCollision.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetObjectsDefaultCameraCollision","permalink":"/zh-cn/docs/scripting/functions/SetObjectsDefaultCameraCollision","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetObjectsDefaultCameraCollision.md","tags":[{"inline":true,"label":"object","permalink":"/zh-cn/docs/tags/object"},{"inline":true,"label":"camera","permalink":"/zh-cn/docs/tags/camera"}],"version":"current","frontMatter":{"title":"SetObjectsDefaultCameraCollision","sidebar_label":"SetObjectsDefaultCameraCollision","description":"Allows camera collisions with newly created objects to be disabled by default.","tags":["object","camera"]},"sidebar":"docsSidebar","previous":{"title":"SetObjectsDefaultCameraCol","permalink":"/zh-cn/docs/scripting/functions/SetObjectsDefaultCameraCol"},"next":{"title":"SetPVarFloat","permalink":"/zh-cn/docs/scripting/functions/SetPVarFloat"}}');var i=n(74848),o=n(28453);const l={title:"SetObjectsDefaultCameraCollision",sidebar_label:"SetObjectsDefaultCameraCollision",description:"Allows camera collisions with newly created objects to be disabled by default.",tags:["object","camera"]},a=void 0,c={},r=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Allows camera collisions with newly created objects to be disabled by default."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["bool",":disable"]}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"true"})," to disable camera collisions for newly created objects and ",(0,i.jsx)(t.code,{children:"false"})," to enable them (enabled by default)."]})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"Note"}),"\n",(0,i.jsx)(t.p,{children:"This function only affects the camera collision of objects created AFTER its use - it does not toggle existing objects' camera collisions."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Disable camera collision\n    SetObjectsDefaultCameraCollision(true);\n\n    // Create mapped objects\n    CreateObject(...);\n    CreateObject(...);\n    CreateObject(...);\n    CreateObject(...);\n\n    // The above objects will NOT have camera collisions\n\n    // Re-enable camera collisions\n    SetObjectsDefaultCameraCollision(false);\n\n    // Create mapped objects\n    CreateObject(...);\n    CreateObject(...);\n    CreateObject(...);\n    CreateObject(...);\n\n    // The above objects WILL have camera collision\n\n    // BUT, the first set will still NOT have camera collisions\n\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"This function only affects the camera collision of objects created AFTER its use - it does not toggle existing objects' camera collisions."})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"This function ONLY works outside the normal SA map boundaries (past 3000 units)."})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetObjectNoCameraCollision",children:"SetObjectNoCameraCollision"}),": Disables collisions between camera and object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerObjectNoCameraCollision",children:"SetPlayerObjectNoCameraCollision"}),": Disables collisions between camera and player object."]}),"\n"]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);