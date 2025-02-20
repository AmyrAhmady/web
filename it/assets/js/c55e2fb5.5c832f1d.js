"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[13558],{1700:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>n,toc:()=>x});const n=JSON.parse('{"id":"scripting/functions/TextDrawGetOutline","title":"TextDrawGetOutline","description":"Gets the thickness of a textdraw\'s text\'s outline.","source":"@site/docs/scripting/functions/TextDrawGetOutline.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawGetOutline","permalink":"/it/docs/scripting/functions/TextDrawGetOutline","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/TextDrawGetOutline.md","tags":[{"inline":true,"label":"textdraw","permalink":"/it/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawGetOutline","sidebar_label":"TextDrawGetOutline","description":"Gets the thickness of a textdraw\'s text\'s outline.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawGetLetterSize","permalink":"/it/docs/scripting/functions/TextDrawGetLetterSize"},"next":{"title":"TextDrawGetPos","permalink":"/it/docs/scripting/functions/TextDrawGetPos"}}');var i=r(74848),a=r(28453);const s={title:"TextDrawGetOutline",sidebar_label:"TextDrawGetOutline",description:"Gets the thickness of a textdraw's text's outline.",tags:["textdraw"]},l=void 0,o={},x=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Gets the thickness of a textdraw's text's outline."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Text",":textid"]}),(0,i.jsx)(t.td,{children:"The ID of the textdraw to get the outline size of."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"Returns the textdraw outline size."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");\n    TextDrawSetOutline(gMyTextdraw, 1);\n\n    new outline = TextDrawGetOutline(gMyTextdraw);\n    // outline = 1\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawCreate",children:"TextDrawCreate"}),": Create a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawDestroy",children:"TextDrawDestroy"}),": Destroy a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawSetOutline",children:"TextDrawSetOutline"}),": Sets the thickness of a textdraw's text's outline."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawColor",children:"TextDrawColor"}),": Set the color of the text in a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawBoxColor",children:"TextDrawBoxColor"}),": Set the color of the box in a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawBackgroundColor",children:"TextDrawBackgroundColor"}),": Set the background color of a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawAlignment",children:"TextDrawAlignment"}),": Set the alignment of a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawFont",children:"TextDrawFont"}),": Set the font of a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawLetterSize",children:"TextDrawLetterSize"}),": Set the letter size of the text in a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawTextSize",children:"TextDrawTextSize"}),": Set the size of a textdraw box."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawSetShadow",children:"TextDrawSetShadow"}),": Toggle shadows on a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawSetProportional",children:"TextDrawSetProportional"}),": Scale the text spacing in a textdraw to a proportional ratio."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawUseBox",children:"TextDrawUseBox"}),": Toggle if the textdraw has a box or not."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawSetString",children:"TextDrawSetString"}),": Set the text in an existing textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": Show a textdraw for a certain player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": Hide a textdraw for a certain player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": Show a textdraw for all players."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": Hide a textdraw for all players."]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(96540);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);