"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[53982],{28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(96540);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}},28458:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>x});const n=JSON.parse('{"id":"scripting/functions/TextDrawTextSize","title":"TextDrawTextSize","description":"Change the size of a textdraw (box if TextDrawUseBox is enabled and/or clickable area for use with TextDrawSetSelectable).","source":"@site/docs/scripting/functions/TextDrawTextSize.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawTextSize","permalink":"/sl/docs/scripting/functions/TextDrawTextSize","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/TextDrawTextSize.md","tags":[{"inline":true,"label":"textdraw","permalink":"/sl/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawTextSize","sidebar_label":"TextDrawTextSize","description":"Change the size of a textdraw (box if TextDrawUseBox is enabled and/or clickable area for use with TextDrawSetSelectable).","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawShowForPlayer","permalink":"/sl/docs/scripting/functions/TextDrawShowForPlayer"},"next":{"title":"TextDrawUseBox","permalink":"/sl/docs/scripting/functions/TextDrawUseBox"}}');var a=r(74848),i=r(28453);const s={title:"TextDrawTextSize",sidebar_label:"TextDrawTextSize",description:"Change the size of a textdraw (box if TextDrawUseBox is enabled and/or clickable area for use with TextDrawSetSelectable).",tags:["textdraw"]},l=void 0,o={},x=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:["Change the size of a textdraw (box if ",(0,a.jsx)(t.a,{href:"TextDrawUseBox",children:"TextDrawUseBox"})," is enabled and/or clickable area for use with ",(0,a.jsx)(t.a,{href:"TextDrawSetSelectable",children:"TextDrawSetSelectable"}),")."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Text",":textid"]}),(0,a.jsx)(t.td,{children:"The TextDraw to set the size of."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":width"]}),(0,a.jsx)(t.td,{children:"The size on the X axis (left/right) following the same 640x480 grid as TextDrawCreate."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":height"]}),(0,a.jsx)(t.td,{children:"The size on the Y axis (up/down) following the same 640x480 grid as TextDrawCreate."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");\n    TextDrawTextSize(gMyTextdraw, 2.0, 3.6);\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The x and y have different meanings with different TextDrawAlignment values: 1 (left): they are the right-most corner of the box, absolute coordinates. 2 (center): they need to inverted (switch the two) and the x value is the overall width of the box. 3 (right): the x and y are the coordinates of the left-most corner of the box"}),"\n",(0,a.jsx)(t.li,{children:"Using font type 4 (sprite) and 5 (model preview) converts X and Y of this function from corner coordinates to WIDTH and HEIGHT (offsets)."}),"\n",(0,a.jsx)(t.li,{children:"The TextDraw box starts 10.0 units up and 5.0 to the left as the origin (TextDrawCreate coordinate)."}),"\n",(0,a.jsx)(t.li,{children:"This function defines the clickable area for use with TextDrawSetSelectable, whether a box is shown or not."}),"\n"]})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["If you want to change the text size of a textdraw that is already shown, you don't have to recreate it. Simply use ",(0,a.jsx)(t.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),"/",(0,a.jsx)(t.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"})," after modifying the textdraw and the change will be visible."]}),"\n"]})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawCreate",children:"TextDrawCreate"}),": Create a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawDestroy",children:"TextDrawDestroy"}),": Destroy a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawGetTextSize",children:"TextDrawGetTextSize"}),": Gets the X axis and Y axis of the textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawColor",children:"TextDrawColor"}),": Set the color of the text in a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawBoxColor",children:"TextDrawBoxColor"}),": Set the color of the box in a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawBackgroundColor",children:"TextDrawBackgroundColor"}),": Set the background color of a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawAlignment",children:"TextDrawAlignment"}),": Set the alignment of a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawFont",children:"TextDrawFont"}),": Set the font of a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawLetterSize",children:"TextDrawLetterSize"}),": Set the letter size of the text in a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetOutline",children:"TextDrawSetOutline"}),": Choose whether the text has an outline."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetShadow",children:"TextDrawSetShadow"}),": Toggle shadows on a textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetProportional",children:"TextDrawSetProportional"}),": Scale the text spacing in a textdraw to a proportional ratio."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawUseBox",children:"TextDrawUseBox"}),": Toggle if the textdraw has a box or not."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawSetString",children:"TextDrawSetString"}),": Set the text in an existing textdraw."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": Show a textdraw for a certain player."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": Hide a textdraw for a certain player."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": Show a textdraw for all players."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": Hide a textdraw for all players."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);