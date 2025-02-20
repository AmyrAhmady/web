"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[44493],{9536:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/GetCustomModelPath","title":"GetCustomModelPath","description":"Get a custom model path.","source":"@site/docs/scripting/functions/GetCustomModelPath.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetCustomModelPath","permalink":"/fil/docs/scripting/functions/GetCustomModelPath","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetCustomModelPath.md","tags":[{"inline":true,"label":"custom model","permalink":"/fil/docs/tags/custom-model"},{"inline":true,"label":"custom skin","permalink":"/fil/docs/tags/custom-skin"},{"inline":true,"label":"simple model","permalink":"/fil/docs/tags/simple-model"}],"version":"current","frontMatter":{"title":"GetCustomModelPath","sidebar_label":"GetCustomModelPath","description":"Get a custom model path.","tags":["custom model","custom skin","simple model"]},"sidebar":"docsSidebar","previous":{"title":"GetConsoleVarAsString","permalink":"/fil/docs/scripting/functions/GetConsoleVarAsString"},"next":{"title":"GetDefaultPlayerColour","permalink":"/fil/docs/scripting/functions/GetDefaultPlayerColour"}}');var o=s(74848),d=s(28453);const i={title:"GetCustomModelPath",sidebar_label:"GetCustomModelPath",description:"Get a custom model path.",tags:["custom model","custom skin","simple model"]},l=void 0,r={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components},{VersionWarn:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{version:"omp v1.1.0.2612"}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"Get a custom model path."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"modelid"}),(0,o.jsx)(t.td,{children:"The custom model id to get path from."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"dffPath[]"}),(0,o.jsx)(t.td,{children:"An array in which to store the dffPath in, passed by reference."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"dffSize"}),(0,o.jsx)(t.td,{children:"The length of the dffPath that should be stored."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"txdPath[]"}),(0,o.jsx)(t.td,{children:"An array in which to store the txdPath in, passed by reference."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"txdSize"}),(0,o.jsx)(t.td,{children:"The length of the txdPath that should be stored."})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:'new\n    modelid = -2000,\n    dffPath[64],\n    txdPath[64];\n\nGetCustomModelPath(modelid, dffPath, sizeof(dffPath), txdPath, sizeof(txdPath));\n\nprintf("[Custom model id %d path]\\n\\\n    dff: %s\\n\\\n    txd: %s", \n    modelid, dffPath, txdPath);\n'})}),"\n",(0,o.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"AddSimpleModel",children:"AddSimpleModel"}),": Adds a new custom simple object model."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"AddSimpleModelTimed",children:"AddSimpleModelTimed"}),": Adds a new custom simple object model."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"IsValidCustomModel",children:"IsValidCustomModel"}),": Checks if a custom model ID is valid."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var n=s(96540);const o={},d=n.createContext(o);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);