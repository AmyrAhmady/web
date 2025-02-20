"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[74500],{6346:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>n,toc:()=>s});const n=JSON.parse('{"id":"scripting/functions/TextDrawSetPreviewModel","title":"TextDrawSetPreviewModel","description":"Set the model for a textdraw model preview.","source":"@site/docs/scripting/functions/TextDrawSetPreviewModel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawSetPreviewModel","permalink":"/ar/docs/scripting/functions/TextDrawSetPreviewModel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/TextDrawSetPreviewModel.md","tags":[{"inline":true,"label":"textdraw","permalink":"/ar/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawSetPreviewModel","sidebar_label":"TextDrawSetPreviewModel","description":"Set the model for a textdraw model preview.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawSetPos","permalink":"/ar/docs/scripting/functions/TextDrawSetPos"},"next":{"title":"TextDrawSetPreviewRot","permalink":"/ar/docs/scripting/functions/TextDrawSetPreviewRot"}}');var i=r(74848),l=r(28453);const a={title:"TextDrawSetPreviewModel",sidebar_label:"TextDrawSetPreviewModel",description:"Set the model for a textdraw model preview.",tags:["textdraw"]},d=void 0,o={},s=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Set the model for a textdraw model preview."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Text",":textid"]}),(0,i.jsx)(t.td,{children:"The textdraw id that will display the 3D preview."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"model"}),(0,i.jsxs)(t.td,{children:["The GTA SA or SA",":MP"," model ID to display."]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");\n    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);\n    TextDrawUseBox(gMyTextdraw, true);\n    TextDrawBoxColor(gMyTextdraw, 0x000000FF);\n    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);\n\n    TextDrawSetPreviewModel(gMyTextdraw, 411); // Display model 411 (Infernus)\n    // TextDrawSetPreviewModel(gMyTextdraw, 1); // Display model 1 (CJ Skin)\n    // TextDrawSetPreviewModel(gMyTextdraw, 18646); // Display model 18646 (Police light object)\n\n    // You still have to use TextDrawShowForAll/TextDrawShowForPlayer to make the textdraw visible.\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Use ",(0,i.jsx)(t.a,{href:"TextDrawBackgroundColor",children:"TextDrawBackgroundColor"})," to set the background color behind the model."]})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["The textdraw MUST use the font type ",(0,i.jsx)(t.code,{children:"TEXT_DRAW_FONT_MODEL_PREVIEW"})," in order for this function to have effect."]})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawGetPreviewModel",children:"TextDrawGetPreviewModel"}),": Gets the preview model of a 3D preview textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawSetPreviewRot",children:"TextDrawSetPreviewRot"}),": Set rotation of a 3D textdraw preview."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawSetPreviewVehCol",children:"TextDrawSetPreviewVehCol"}),": Set the colours of a vehicle in a 3D textdraw preview."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawFont",children:"TextDrawFont"}),": Set the font of a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"PlayerTextDrawSetPreviewModel",children:"PlayerTextDrawSetPreviewModel"}),": Set model ID of a 3D player textdraw preview."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../callbacks/OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"}),": Called when a player clicks on a textdraw."]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>d});var n=r(96540);const i={},l=n.createContext(i);function a(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);