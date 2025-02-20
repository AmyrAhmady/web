"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[85340],{28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(96540);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}},48485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/TextDrawLetterSize","title":"TextDrawLetterSize","description":"Sets the width and height of the letters.","source":"@site/docs/scripting/functions/TextDrawLetterSize.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawLetterSize","permalink":"/de/docs/scripting/functions/TextDrawLetterSize","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/TextDrawLetterSize.md","tags":[{"inline":true,"label":"textdraw","permalink":"/de/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawLetterSize","sidebar_label":"TextDrawLetterSize","description":"Sets the width and height of the letters.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawIsSelectable","permalink":"/de/docs/scripting/functions/TextDrawIsSelectable"},"next":{"title":"TextDrawSetOutline","permalink":"/de/docs/scripting/functions/TextDrawSetOutline"}}');var i=r(74848),a=r(28453);const s={title:"TextDrawLetterSize",sidebar_label:"TextDrawLetterSize",description:"Sets the width and height of the letters.",tags:["textdraw"]},l=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Sets the width and height of the letters."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Text",":textid"]}),(0,i.jsx)(t.td,{children:"The TextDraw to change"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":width"]}),(0,i.jsx)(t.td,{children:"Width of a char."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":height"]}),(0,i.jsx)(t.td,{children:"Height of a char."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(100.0, 33.0,"Example TextDraw");\n    TextDrawLetterSize(gMyTextdraw, 3.2, 5.1);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsx)(t.p,{children:"When using this function purely for the benefit of affecting the TextDraw box, multiply 'Y' by 0.135 to convert to TextDrawTextSize-like measurements."}),(0,i.jsxs)(t.p,{children:["Hint: it is easier and extremely precise to use ",(0,i.jsxs)(t.strong,{children:["LD_SPAC",":white"]})," sprite for box-only textdraws, TextDrawTextSize will have regular offsets."]})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If you want to change the letter size of a textdraw that is already shown, you don't have to recreate it. Simply use ",(0,i.jsx)(t.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),"/",(0,i.jsx)(t.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"})," after modifying the textdraw and the change will be visible."]}),"\n",(0,i.jsx)(t.li,{children:"Fonts appear to look the best with an X to Y ratio of 1 to 4 (e.g. if x is 0.5 then y should be 2)."}),"\n"]})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawCreate",children:"TextDrawCreate"}),": Create a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawDestroy",children:"TextDrawDestroy"}),": Destroy a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawGetLetterSize",children:"TextDrawGetLetterSize"}),": Gets the width and height of the letters."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawColor",children:"TextDrawColor"}),": Set the color of the text in a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawBoxColor",children:"TextDrawBoxColor"}),": Set the color of the box in a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawBackgroundColor",children:"TextDrawBackgroundColor"}),": Set the background color of a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawAlignment",children:"TextDrawAlignment"}),": Set the alignment of a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawFont",children:"TextDrawFont"}),": Set the font of a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawTextSize",children:"TextDrawTextSize"}),": Set the size of a textdraw box."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawSetOutline",children:"TextDrawSetOutline"}),": Choose whether the text has an outline."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawSetShadow",children:"TextDrawSetShadow"}),": Toggle shadows on a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawSetProportional",children:"TextDrawSetProportional"}),": Scale the text spacing in a textdraw to a proportional ratio."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawUseBox",children:"TextDrawUseBox"}),": Toggle if the textdraw has a box or not."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawSetString",children:"TextDrawSetString"}),": Set the text in an existing textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": Show a textdraw for a certain player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": Hide a textdraw for a certain player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": Show a textdraw for all players."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": Hide a textdraw for all players."]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);