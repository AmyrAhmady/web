"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[56402],{28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>s});var n=r(96540);const o={},i=n.createContext(o);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}},42411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>x,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/TextDrawGetPreviewRot","title":"TextDrawGetPreviewRot","description":"Gets the rotation and zoom of a 3D model preview textdraw.","source":"@site/docs/scripting/functions/TextDrawGetPreviewRot.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawGetPreviewRot","permalink":"/de/docs/scripting/functions/TextDrawGetPreviewRot","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/TextDrawGetPreviewRot.md","tags":[{"inline":true,"label":"textdraw","permalink":"/de/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawGetPreviewRot","sidebar_label":"TextDrawGetPreviewRot","description":"Gets the rotation and zoom of a 3D model preview textdraw.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawGetPreviewModel","permalink":"/de/docs/scripting/functions/TextDrawGetPreviewModel"},"next":{"title":"TextDrawGetPreviewVehCol","permalink":"/de/docs/scripting/functions/TextDrawGetPreviewVehCol"}}');var o=r(74848),i=r(28453);const a={title:"TextDrawGetPreviewRot",sidebar_label:"TextDrawGetPreviewRot",description:"Gets the rotation and zoom of a 3D model preview textdraw.",tags:["textdraw"]},s=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"Gets the rotation and zoom of a 3D model preview textdraw."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Text",":textid"]}),(0,o.jsx)(t.td,{children:"The ID of the textdraw to get rotation and zoom of."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["&Float",":rotationX"]}),(0,o.jsx)(t.td,{children:"A float variable into which to store rotationX coordinate, passed by reference."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["&Float",":rotationY"]}),(0,o.jsx)(t.td,{children:"A float variable into which to store rotationY coordinate, passed by reference."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["&Float",":rotationZ"]}),(0,o.jsx)(t.td,{children:"A float variable into which to store rotationZ coordinate, passed by reference."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["&Float",":zoom"]}),(0,o.jsx)(t.td,{children:"A float variable into which to store zoom value, passed by reference."})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");\n    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);\n    TextDrawUseBox(gMyTextdraw, true);\n    TextDrawBoxColor(gMyTextdraw, 0x000000FF);\n    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);\n    TextDrawSetPreviewModel(gMyTextdraw, 411);\n    TextDrawSetPreviewRot(gMyTextdraw, -10.0, 0.0, -20.0, 1.0);\n    \n    new Float:rotationX, Float:rotationY, Float:rotationZ, Float:zoom;\n    TextDrawGetPreviewRot(gMyTextdraw, rotationX, rotationY, rotationZ, zoom);\n    // rotationX = -10.0\n    // rotationY = 0.0\n    // rotationZ = -20.0\n    // zoom = 1.0\n    return 1;\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawSetPreviewRot",children:"TextDrawSetPreviewRot"}),": Sets the rotation and zoom of a 3D model preview textdraw."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"PlayerTextDrawSetPreviewRot",children:"PlayerTextDrawSetPreviewRot"}),": Set rotation of a 3D player textdraw preview."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawSetPreviewModel",children:"TextDrawSetPreviewModel"}),": Set the 3D preview model of a textdraw."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawSetPreviewVehCol",children:"TextDrawSetPreviewVehCol"}),": Set the colours of a vehicle in a 3D textdraw preview."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"TextDrawFont",children:"TextDrawFont"}),": Set the font of a textdraw."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"../callbacks/OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"}),": Called when a player clicks on a textdraw."]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);