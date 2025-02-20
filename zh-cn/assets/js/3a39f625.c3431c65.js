"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[13624],{28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>r});var c=n(96540);const o={},i=c.createContext(o);function s(t){const e=c.useContext(i);return c.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),c.createElement(i.Provider,{value:e},t.children)}},69193:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>l});const c=JSON.parse('{"id":"scripting/functions/GetObjectSyncRotation","title":"GetObjectSyncRotation","description":"Get the sync rotation of an object.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/GetObjectSyncRotation.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetObjectSyncRotation","permalink":"/zh-cn/docs/scripting/functions/GetObjectSyncRotation","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetObjectSyncRotation.md","tags":[{"inline":true,"label":"object","permalink":"/zh-cn/docs/tags/object"}],"version":"current","frontMatter":{"title":"GetObjectSyncRotation","sidebar_label":"GetObjectSyncRotation","description":"Get the sync rotation of an object.","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"GetObjectRot","permalink":"/zh-cn/docs/scripting/functions/GetObjectRot"},"next":{"title":"GetObjectType","permalink":"/zh-cn/docs/scripting/functions/GetObjectType"}}');var o=n(74848),i=n(28453);const s={title:"GetObjectSyncRotation",sidebar_label:"GetObjectSyncRotation",description:"Get the sync rotation of an object.",tags:["object"]},r=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(t){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...t.components},{VersionWarn:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,o.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(e.p,{children:"Get the sync rotation of an object."}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Name"}),(0,o.jsx)(e.th,{children:"Description"})]})}),(0,o.jsx)(e.tbody,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"objectid"}),(0,o.jsx)(e.td,{children:"The ID of the object."})]})})]}),"\n",(0,o.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(e.p,{children:["Returns the sync rotation of the object as boolean (",(0,o.jsx)(e.code,{children:"true"}),"/",(0,o.jsx)(e.code,{children:"false"}),")."]}),"\n",(0,o.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-c",children:"new objectid = CreateObject(...);\nnew parentid = CreateObject(...);\nAttachObjectToObject(objectid, parentid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, false);\n\nnew bool:syncRotation = GetObjectSyncRotation(objectid);\n// syncRotation = false\n"})}),"\n",(0,o.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"AttachObjectToObject",children:"AttachObjectToObject"}),": Attach object to other object."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"GetPlayerObjectSyncRotation",children:"GetPlayerObjectSyncRotation"}),": Get the sync rotation of a player-object."]}),"\n"]})]})}function j(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}}}]);