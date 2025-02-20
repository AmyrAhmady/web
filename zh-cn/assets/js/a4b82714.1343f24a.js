"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[44072],{28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>a});var n=r(96540);const i={},s=n.createContext(i);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:t},e.children)}},61202:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/TextDrawSetPreviewVehCol","title":"TextDrawSetPreviewVehCol","description":"If a vehicle model is used in a 3D preview textdraw, this sets the two colour values for that vehicle.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/TextDrawSetPreviewVehCol.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawSetPreviewVehCol","permalink":"/zh-cn/docs/scripting/functions/TextDrawSetPreviewVehCol","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/TextDrawSetPreviewVehCol.md","tags":[{"inline":true,"label":"textdraw","permalink":"/zh-cn/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawSetPreviewVehCol","sidebar_label":"TextDrawSetPreviewVehCol","description":"If a vehicle model is used in a 3D preview textdraw, this sets the two colour values for that vehicle.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawSetPreviewRot","permalink":"/zh-cn/docs/scripting/functions/TextDrawSetPreviewRot"},"next":{"title":"TextDrawSetPreviewVehicleColours","permalink":"/zh-cn/docs/scripting/functions/TextDrawSetPreviewVehicleColours"}}');var i=r(74848),s=r(28453);const l={title:"TextDrawSetPreviewVehCol",sidebar_label:"TextDrawSetPreviewVehCol",description:"If a vehicle model is used in a 3D preview textdraw, this sets the two colour values for that vehicle.",tags:["textdraw"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"If a vehicle model is used in a 3D preview textdraw, this sets the two colour values for that vehicle."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Text",":textid"]}),(0,i.jsx)(t.td,{children:"The textdraw id that is set to display a 3D vehicle model preview."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"colour1"}),(0,i.jsx)(t.td,{children:"The primary Color ID to set the vehicle to."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"colour2"}),(0,i.jsx)(t.td,{children:"The secondary Color ID to set the vehicle to."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");\n    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);\n    TextDrawUseBox(gMyTextdraw, true);\n    TextDrawBoxColor(gMyTextdraw, 0x000000FF);\n    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);\n    TextDrawSetPreviewModel(gMyTextdraw, 411); // Display model 411 (Infernus)\n    TextDrawSetPreviewVehCol(gMyTextdraw, 6, 6); // Set the Infernus to have colour 6 (Yellow)\n\n    // You still have to use TextDrawShowForAll/TextDrawShowForPlayer to make the textdraw visible.\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["The textdraw MUST use the font type ",(0,i.jsx)(t.code,{children:"TEXT_DRAW_FONT_MODEL_PREVIEW"})," in order for this function to have effect."]})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawSetPreviewModel",children:"TextDrawSetPreviewModel"}),": Set the 3D preview model of a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawSetPreviewRot",children:"TextDrawSetPreviewRot"}),": Set rotation of a 3D textdraw preview."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawFont",children:"TextDrawFont"}),": Set the font of a textdraw."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../callbacks/OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"}),": Called when a player clicks on a textdraw."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);