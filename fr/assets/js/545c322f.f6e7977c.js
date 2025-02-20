"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[47855],{28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var n=r(96540);const a={},i=n.createContext(a);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}},95370:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/TextDrawSetPreviewRot","title":"TextDrawSetPreviewRot","description":"Sets the rotation and zoom of a 3D model preview textdraw.","source":"@site/docs/scripting/functions/TextDrawSetPreviewRot.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawSetPreviewRot","permalink":"/fr/docs/scripting/functions/TextDrawSetPreviewRot","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/TextDrawSetPreviewRot.md","tags":[{"inline":true,"label":"textdraw","permalink":"/fr/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawSetPreviewRot","sidebar_label":"TextDrawSetPreviewRot","description":"Sets the rotation and zoom of a 3D model preview textdraw.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawSetPreviewModel","permalink":"/fr/docs/scripting/functions/TextDrawSetPreviewModel"},"next":{"title":"TextDrawSetPreviewVehCol","permalink":"/fr/docs/scripting/functions/TextDrawSetPreviewVehCol"}}');var a=r(74848),i=r(28453);const o={title:"TextDrawSetPreviewRot",sidebar_label:"TextDrawSetPreviewRot",description:"Sets the rotation and zoom of a 3D model preview textdraw.",tags:["textdraw"]},l=void 0,s={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Sets the rotation and zoom of a 3D model preview textdraw."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Text",":textid"]}),(0,a.jsx)(t.td,{children:"The ID of the textdraw to change."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":rotationX"]}),(0,a.jsx)(t.td,{children:"The X rotation value."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":rotationY"]}),(0,a.jsx)(t.td,{children:"The Y rotation value."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":rotationZ"]}),(0,a.jsx)(t.td,{children:"The Z rotation value."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":zoom"]}),(0,a.jsx)(t.td,{children:"The zoom value, default value 1.0, smaller values make the camera closer and larger values make the camera further away."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");\n    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);\n    TextDrawUseBox(gMyTextdraw, true);\n    TextDrawBoxColor(gMyTextdraw, 0x000000FF);\n    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);\n    TextDrawSetPreviewModel(gMyTextdraw, 411);\n    TextDrawSetPreviewRot(gMyTextdraw, -10.0, 0.0, -20.0, 1.0);\n    \n    // You still have to use TextDrawShowForAll/TextDrawShowForPlayer to make the textdraw visible.\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["The textdraw MUST use the font type ",(0,a.jsx)(t.code,{children:"TEXT_DRAW_FONT_MODEL_PREVIEW"})," and already have a model set in order for this function to have effect."]})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawGetPreviewRot",children:"TextDrawGetPreviewRot"}),": Gets the rotation and zoom of a 3D model preview textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"PlayerTextDrawSetPreviewRot",children:"PlayerTextDrawSetPreviewRot"}),": Set rotation of a 3D player textdraw preview."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetPreviewModel",children:"TextDrawSetPreviewModel"}),": Set the 3D preview model of a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetPreviewVehCol",children:"TextDrawSetPreviewVehCol"}),": Set the colours of a vehicle in a 3D textdraw preview."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawFont",children:"TextDrawFont"}),": Set the font of a textdraw."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"../callbacks/OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"}),": Called when a player clicks on a textdraw."]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);