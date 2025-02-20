"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[94219],{28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var i=r(96540);const n={},l=i.createContext(n);function s(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(l.Provider,{value:t},e.children)}},66874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scripting/functions/TextDrawSetPreviewVehCol","title":"TextDrawSetPreviewVehCol","description":"If a vehicle model is used in a 3D preview textdraw, this sets the two colour values for that vehicle.","source":"@site/docs/scripting/functions/TextDrawSetPreviewVehCol.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawSetPreviewVehCol","permalink":"/fil/docs/scripting/functions/TextDrawSetPreviewVehCol","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/TextDrawSetPreviewVehCol.md","tags":[{"inline":true,"label":"textdraw","permalink":"/fil/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawSetPreviewVehCol","sidebar_label":"TextDrawSetPreviewVehCol","description":"If a vehicle model is used in a 3D preview textdraw, this sets the two colour values for that vehicle.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawSetPreviewRot","permalink":"/fil/docs/scripting/functions/TextDrawSetPreviewRot"},"next":{"title":"TextDrawSetPreviewVehicleColours","permalink":"/fil/docs/scripting/functions/TextDrawSetPreviewVehicleColours"}}');var n=r(74848),l=r(28453);const s={title:"TextDrawSetPreviewVehCol",sidebar_label:"TextDrawSetPreviewVehCol",description:"If a vehicle model is used in a 3D preview textdraw, this sets the two colour values for that vehicle.",tags:["textdraw"]},a=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"If a vehicle model is used in a 3D preview textdraw, this sets the two colour values for that vehicle."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Text",":textid"]}),(0,n.jsx)(t.td,{children:"The textdraw id that is set to display a 3D vehicle model preview."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"colour1"}),(0,n.jsx)(t.td,{children:"The primary Color ID to set the vehicle to."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"colour2"}),(0,n.jsx)(t.td,{children:"The secondary Color ID to set the vehicle to."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");\n    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);\n    TextDrawUseBox(gMyTextdraw, true);\n    TextDrawBoxColor(gMyTextdraw, 0x000000FF);\n    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);\n    TextDrawSetPreviewModel(gMyTextdraw, 411); // Display model 411 (Infernus)\n    TextDrawSetPreviewVehCol(gMyTextdraw, 6, 6); // Set the Infernus to have colour 6 (Yellow)\n\n    // You still have to use TextDrawShowForAll/TextDrawShowForPlayer to make the textdraw visible.\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["The textdraw MUST use the font type ",(0,n.jsx)(t.code,{children:"TEXT_DRAW_FONT_MODEL_PREVIEW"})," in order for this function to have effect."]})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawSetPreviewModel",children:"TextDrawSetPreviewModel"}),": Set the 3D preview model of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawSetPreviewRot",children:"TextDrawSetPreviewRot"}),": Set rotation of a 3D textdraw preview."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawFont",children:"TextDrawFont"}),": Set the font of a textdraw."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../callbacks/OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"}),": Called when a player clicks on a textdraw."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);