"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[29321],{28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const c={},s=i.createContext(c);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(s.Provider,{value:t},e.children)}},80784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"scripting/functions/EditObject","title":"EditObject","description":"Allows a player to edit an object (position and rotation) using their mouse on a GUI (Graphical User Interface).","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/EditObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/EditObject","permalink":"/zh-cn/docs/scripting/functions/EditObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/EditObject.md","tags":[],"version":"current","frontMatter":{"title":"EditObject","sidebar_label":"EditObject","description":"Allows a player to edit an object (position and rotation) using their mouse on a GUI (Graphical User Interface).","tags":[]},"sidebar":"docsSidebar","previous":{"title":"EditAttachedObject","permalink":"/zh-cn/docs/scripting/functions/EditAttachedObject"},"next":{"title":"EditPlayerClass","permalink":"/zh-cn/docs/scripting/functions/EditPlayerClass"}}');var c=n(74848),s=n(28453);const r={title:"EditObject",sidebar_label:"EditObject",description:"Allows a player to edit an object (position and rotation) using their mouse on a GUI (Graphical User Interface).",tags:[]},o=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(t.p,{children:"Allows a player to edit an object (position and rotation) using their mouse on a GUI (Graphical User Interface)."}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"playerid"}),(0,c.jsx)(t.td,{children:"The ID of the player that should edit the object."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"objectid"}),(0,c.jsx)(t.td,{children:"The ID of the object to be edited by the player."})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(t.p,{children:"1: The function executed successfully. Success is reported when a non-existent object is specified, but nothing will happen."}),"\n",(0,c.jsx)(t.p,{children:"0: The function failed to execute. The player is not connected."}),"\n",(0,c.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:'new object;\npublic OnGameModeInit()\n{\n    object = CreateObject(1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/oedit", true))\n    {\n        EditObject(playerid, object);\n        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You can now edit the object!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,c.jsx)(t.admonition,{type:"tip",children:(0,c.jsx)(t.p,{children:"You can move the camera while editing by pressing and holding the spacebar (or W in vehicle) and moving your mouse."})}),"\n",(0,c.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Move an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"EditPlayerObject",children:"EditPlayerObject"}),": Edit an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"EditAttachedObject",children:"EditAttachedObject"}),": Edit an attached object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SelectObject",children:"SelectObject"}),": Select an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"CancelEdit",children:"CancelEdit"}),": Cancel the edition of an object."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}}}]);