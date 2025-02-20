"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[95751],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}},70386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"scripting/functions/SetObjectsDefaultCameraCol","title":"SetObjectsDefaultCameraCol","description":"Allows camera collisions with newly created objects to be disabled by default.","source":"@site/docs/scripting/functions/SetObjectsDefaultCameraCol.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetObjectsDefaultCameraCol","permalink":"/pt-BR/docs/scripting/functions/SetObjectsDefaultCameraCol","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetObjectsDefaultCameraCol.md","tags":[{"inline":true,"label":"object","permalink":"/pt-BR/docs/tags/object"},{"inline":true,"label":"camera","permalink":"/pt-BR/docs/tags/camera"}],"version":"current","frontMatter":{"title":"SetObjectsDefaultCameraCol","sidebar_label":"SetObjectsDefaultCameraCol","description":"Allows camera collisions with newly created objects to be disabled by default.","tags":["object","camera"]},"sidebar":"docsSidebar","previous":{"title":"SetObjectRot","permalink":"/pt-BR/docs/scripting/functions/SetObjectRot"},"next":{"title":"SetObjectsDefaultCameraCollision","permalink":"/pt-BR/docs/scripting/functions/SetObjectsDefaultCameraCollision"}}');var a=n(74848),i=n(28453);const o={title:"SetObjectsDefaultCameraCol",sidebar_label:"SetObjectsDefaultCameraCol",description:"Allows camera collisions with newly created objects to be disabled by default.",tags:["object","camera"]},l=void 0,c={},r=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Allows camera collisions with newly created objects to be disabled by default."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"disable"}),(0,a.jsx)(t.td,{children:"1 to disable camera collisions for newly created objects and 0 to enable them (enabled by default)."})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"Note"}),"\n",(0,a.jsx)(t.p,{children:"This function only affects the camera collision of objects created AFTER its use - it does not toggle existing objects' camera collisions."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Disable camera collision\n    SetObjectsDefaultCameraCol(1);\n\n    // Create mapped objects\n    CreateObject(...);\n    CreateObject(...);\n    CreateObject(...);\n    CreateObject(...);\n\n    // The above objects will NOT have camera collisions\n\n    // Re-enable camera collisions\n    SetObjectsDefaultCameraCol(0);\n\n    // Create mapped objects\n    CreateObject(...);\n    CreateObject(...);\n    CreateObject(...);\n    CreateObject(...);\n\n    // The above objects WILL have camera collision\n\n    // BUT, the first set will still NOT have camera collisions\n\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"This function only affects the camera collision of objects created AFTER its use - it does not toggle existing objects' camera collisions."})}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"This function ONLY works outside the normal SA map boundaries (past 3000 units)."})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetObjectNoCameraCol",children:"SetObjectNoCameraCol"}),": Disables collisions between camera and object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayerObjectNoCameraCol",children:"SetPlayerObjectNoCameraCol"}),": Disables collisions between camera and player object."]}),"\n"]})]})}function b(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);