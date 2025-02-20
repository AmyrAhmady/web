"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[30321],{28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(96540);const c={},l=i.createContext(c);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(l.Provider,{value:t},e.children)}},43698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>j,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/BeginObjectSelecting","title":"BeginObjectSelecting","description":"Display the cursor and allow the player to select an object.","source":"@site/docs/scripting/functions/BeginObjectSelecting.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/BeginObjectSelecting","permalink":"/docs/scripting/functions/BeginObjectSelecting","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/BeginObjectSelecting.md","tags":[{"inline":true,"label":"object","permalink":"/docs/tags/object"}],"version":"current","frontMatter":{"title":"BeginObjectSelecting","sidebar_label":"BeginObjectSelecting","description":"Display the cursor and allow the player to select an object.","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"BeginObjectEditing","permalink":"/docs/scripting/functions/BeginObjectEditing"},"next":{"title":"BeginPlayerObjectEditing","permalink":"/docs/scripting/functions/BeginPlayerObjectEditing"}}');var c=n(74848),l=n(28453);const r={title:"BeginObjectSelecting",sidebar_label:"BeginObjectSelecting",description:"Display the cursor and allow the player to select an object.",tags:["object"]},s=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(t.p,{children:"Display the cursor and allow the player to select an object. OnPlayerSelectObject is called when the player selects an object."}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsx)(t.tbody,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"playerid"}),(0,c.jsx)(t.td,{children:"The ID of the player that should be able to select the object"})]})})]}),"\n",(0,c.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,c.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/select", true))\n    {\n        BeginObjectSelecting(playerid);\n        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Please select the object you\'d like to edit!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Move an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"BeginObjectEditing",children:"BeginObjectEditing"}),": Edit an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"BeginPlayerObjectEditing",children:"BeginPlayerObjectEditing"}),": Edit an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"EditAttachedObject",children:"EditAttachedObject"}),": Edit an attached object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"EndObjectEditing",children:"EndObjectEditing"}),": Cancel the edition of an object."]}),"\n"]}),"\n",(0,c.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"../callbacks/OnPlayerSelectObject",children:"OnPlayerSelectObject"}),": Called when a player selected an object."]}),"\n"]})]})}function j(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}}}]);