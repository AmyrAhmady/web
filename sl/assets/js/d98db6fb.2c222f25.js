"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[81422],{28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(96540);const c={},i=o.createContext(c);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),o.createElement(i.Provider,{value:t},e.children)}},87876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>j,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"scripting/functions/GetObjectModel","title":"GetObjectModel","description":"Get the model ID of an object (CreateObject).","source":"@site/docs/scripting/functions/GetObjectModel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetObjectModel","permalink":"/sl/docs/scripting/functions/GetObjectModel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetObjectModel.md","tags":[{"inline":true,"label":"object","permalink":"/sl/docs/tags/object"}],"version":"current","frontMatter":{"title":"GetObjectModel","sidebar_label":"GetObjectModel","description":"Get the model ID of an object (CreateObject).","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"GetObjectMaterialText","permalink":"/sl/docs/scripting/functions/GetObjectMaterialText"},"next":{"title":"GetObjectMoveSpeed","permalink":"/sl/docs/scripting/functions/GetObjectMoveSpeed"}}');var c=n(74848),i=n(28453);const r={title:"GetObjectModel",sidebar_label:"GetObjectModel",description:"Get the model ID of an object (CreateObject).",tags:["object"]},s=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(t.p,{children:["Get the model ID of an object (",(0,c.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),")."]}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsx)(t.tbody,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"objectid"}),(0,c.jsx)(t.td,{children:"The ID of the object to get the model of"})]})})]}),"\n",(0,c.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(t.p,{children:"The model ID of the object."}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"-1"})," if object does not exist."]}),"\n",(0,c.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new objectid = CreateObject(19609, 666.57239, 1750.79749, 4.95627,   0.00000, 0.00000, -156.00000);\n    \n    new modelid = GetObjectModel(objectid);\n    printf("Object model: %d", modelid); // Output: "Object model: 19609"\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"GetPlayerObjectModel",children:"GetPlayerObjectModel"}),": Get the model ID of a player-object."]}),"\n"]})]})}function j(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}}}]);