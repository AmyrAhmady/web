"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[70982],{28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(96540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}},92515:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>t,toc:()=>r});const t=JSON.parse('{"id":"scripting/functions/HasObjectCameraCollision","title":"HasObjectCameraCollision","description":"Checks if an object has camera collision enabled. (SetObjectNoCameraCollision)","source":"@site/docs/scripting/functions/HasObjectCameraCollision.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/HasObjectCameraCollision","permalink":"/docs/scripting/functions/HasObjectCameraCollision","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/HasObjectCameraCollision.md","tags":[{"inline":true,"label":"object","permalink":"/docs/tags/object"}],"version":"current","frontMatter":{"title":"HasObjectCameraCollision","sidebar_label":"HasObjectCameraCollision","description":"Checks if an object has camera collision enabled. (SetObjectNoCameraCollision)","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"HasGameText","permalink":"/docs/scripting/functions/HasGameText"},"next":{"title":"HasPlayerObjectCameraCollision","permalink":"/docs/scripting/functions/HasPlayerObjectCameraCollision"}}');var s=i(74848),o=i(28453);const a={title:"HasObjectCameraCollision",sidebar_label:"HasObjectCameraCollision",description:"Checks if an object has camera collision enabled. (SetObjectNoCameraCollision)",tags:["object"]},l=void 0,c={},r=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{VersionWarn:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Checks if an object has camera collision enabled. (",(0,s.jsx)(n.a,{href:"SetObjectNoCameraCollision",children:"SetObjectNoCameraCollision"}),")"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectid"}),(0,s.jsx)(n.td,{children:"The ID of the object to check."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"true"})," - Object camera collision is enable."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"false"})," - Object camera collision is disable."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'if (HasObjectCameraCollision(objectid))\n{\n    printf("Object %d camera collision: enable", objectid);\n}\nelse\n{\n    printf("Object %d camera collision: disable", objectid);\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"SetObjectNoCameraCollision",children:"SetObjectNoCameraCollision"}),": Disable collisions between players' cameras and the specified object."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"HasPlayerObjectCameraCollision",children:"HasPlayerObjectCameraCollision"}),": Checks if a player-object has camera collision enabled."]}),"\n"]})]})}function b(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);