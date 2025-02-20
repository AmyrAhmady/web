"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[46227],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const r={},c=i.createContext(r);function s(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:n},e.children)}},33083:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"scripting/functions/BeginObjectEditing","title":"BeginObjectEditing","description":"Allows a player to edit an object (position and rotation) using their mouse on a GUI (Graphical User Interface).","source":"@site/docs/scripting/functions/BeginObjectEditing.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/BeginObjectEditing","permalink":"/ru/docs/scripting/functions/BeginObjectEditing","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/BeginObjectEditing.md","tags":[{"inline":true,"label":"player","permalink":"/ru/docs/tags/player"},{"inline":true,"label":"object","permalink":"/ru/docs/tags/object"}],"version":"current","frontMatter":{"title":"BeginObjectEditing","sidebar_label":"BeginObjectEditing","description":"Allows a player to edit an object (position and rotation) using their mouse on a GUI (Graphical User Interface).","tags":["player","object"]},"sidebar":"docsSidebar","previous":{"title":"BanEx","permalink":"/ru/docs/scripting/functions/BanEx"},"next":{"title":"BeginObjectSelecting","permalink":"/ru/docs/scripting/functions/BeginObjectSelecting"}}');var r=t(74848),c=t(28453);const s={title:"BeginObjectEditing",sidebar_label:"BeginObjectEditing",description:"Allows a player to edit an object (position and rotation) using their mouse on a GUI (Graphical User Interface).",tags:["player","object"]},o=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Allows a player to edit an object (position and rotation) using their mouse on a GUI (Graphical User Interface)."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player that should edit the object."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectid"}),(0,r.jsx)(n.td,{children:"The ID of the object to be edited by the player."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"true"})," - The function executed successfully. Success is reported when a non-existent object is specified, but nothing will happen."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"false"})," - The function failed to execute. The player is not connected."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new objectid;\n\npublic OnGameModeInit()\n{\n    objectid = CreateObject(1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/oedit", true))\n    {\n        BeginObjectEditing(playerid, objectid);\n        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You can now edit the object!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"You can move the camera while editing by pressing and holding the spacebar (or W in vehicle) and moving your mouse."})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"MoveObject",children:"MoveObject"}),": Move an object."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"BeginPlayerObjectEditing",children:"BeginPlayerObjectEditing"}),": Edit an object."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"EditAttachedObject",children:"EditAttachedObject"}),": Edit an attached object."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"BeginObjectSelecting",children:"BeginObjectSelecting"}),": Select an object."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"EndObjectEditing",children:"EndObjectEditing"}),": Cancel the edition of an object."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);