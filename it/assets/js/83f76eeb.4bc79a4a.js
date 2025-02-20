"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[46227],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const c={},r=i.createContext(c);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(r.Provider,{value:t},e.children)}},33083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"scripting/functions/BeginObjectEditing","title":"BeginObjectEditing","description":"Allows a player to edit an object (position and rotation) using their mouse on a GUI (Graphical User Interface).","source":"@site/docs/scripting/functions/BeginObjectEditing.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/BeginObjectEditing","permalink":"/it/docs/scripting/functions/BeginObjectEditing","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/BeginObjectEditing.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"},{"inline":true,"label":"object","permalink":"/it/docs/tags/object"}],"version":"current","frontMatter":{"title":"BeginObjectEditing","sidebar_label":"BeginObjectEditing","description":"Allows a player to edit an object (position and rotation) using their mouse on a GUI (Graphical User Interface).","tags":["player","object"]},"sidebar":"docsSidebar","previous":{"title":"BanEx","permalink":"/it/docs/scripting/functions/BanEx"},"next":{"title":"BeginObjectSelecting","permalink":"/it/docs/scripting/functions/BeginObjectSelecting"}}');var c=n(74848),r=n(28453);const s={title:"BeginObjectEditing",sidebar_label:"BeginObjectEditing",description:"Allows a player to edit an object (position and rotation) using their mouse on a GUI (Graphical User Interface).",tags:["player","object"]},o=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(t.p,{children:"Allows a player to edit an object (position and rotation) using their mouse on a GUI (Graphical User Interface)."}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"playerid"}),(0,c.jsx)(t.td,{children:"The ID of the player that should edit the object."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"objectid"}),(0,c.jsx)(t.td,{children:"The ID of the object to be edited by the player."})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"true"})," - The function executed successfully. Success is reported when a non-existent object is specified, but nothing will happen."]}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"false"})," - The function failed to execute. The player is not connected."]}),"\n",(0,c.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:'new objectid;\n\npublic OnGameModeInit()\n{\n    objectid = CreateObject(1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/oedit", true))\n    {\n        BeginObjectEditing(playerid, objectid);\n        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You can now edit the object!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,c.jsx)(t.admonition,{type:"tip",children:(0,c.jsx)(t.p,{children:"You can move the camera while editing by pressing and holding the spacebar (or W in vehicle) and moving your mouse."})}),"\n",(0,c.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Move an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"BeginPlayerObjectEditing",children:"BeginPlayerObjectEditing"}),": Edit an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"EditAttachedObject",children:"EditAttachedObject"}),": Edit an attached object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"BeginObjectSelecting",children:"BeginObjectSelecting"}),": Select an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"EndObjectEditing",children:"EndObjectEditing"}),": Cancel the edition of an object."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}}}]);