"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[17518],{28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(96540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}},46020:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/TextDrawCreate","title":"TextDrawCreate","description":"Creates a textdraw.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/TextDrawCreate.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawCreate","permalink":"/th/docs/scripting/functions/TextDrawCreate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/TextDrawCreate.md","tags":[{"inline":true,"label":"textdraw","permalink":"/th/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawCreate","sidebar_label":"TextDrawCreate","description":"Creates a textdraw.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawColour","permalink":"/th/docs/scripting/functions/TextDrawColour"},"next":{"title":"TextDrawDestroy","permalink":"/th/docs/scripting/functions/TextDrawDestroy"}}');var i=r(74848),s=r(28453);const a={title:"TextDrawCreate",sidebar_label:"TextDrawCreate",description:"Creates a textdraw.",tags:["textdraw"]},o=void 0,c={},d=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",del:"del",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,i.jsx)(t.p,{children:"Creates a textdraw. Textdraws are, as the name implies, text (mainly - there can be boxes, sprites and model previews (skins/vehicles/weapons/objects too) that is drawn on a player's screens. See this page for extensive information about textdraws."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":x"]}),(0,i.jsx)(t.td,{children:"The X (left/right) coordinate to create the textdraw at."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":y"]}),(0,i.jsx)(t.td,{children:"The Y (up/down) coordinate to create the textdraw at."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"text[]"}),(0,i.jsx)(t.td,{children:"The text that will appear in the textdraw."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,i.jsx)(t.p,{children:"The ID of the created textdraw. Textdraw IDs start at 0."}),"\n",(0,i.jsx)(t.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'// This variable is used to store the id of the textdraw\n// so that we can use it throught the script\nnew Text:welcomeText;\n\npublic OnGameModeInit()\n{\n    // This line is used to create the textdraw.\n    // Note: This creates a textdraw without any formatting.\n    welcomeText = TextDrawCreate(240.0,580.0,"Welcome to my SA-MP server");\n    return 1;\n}\n\npublic OnPlayerConnect(playerid)\n{\n    //This is used to show the player the textdraw when they connect.\n    TextDrawShowForPlayer(playerid,welcomeText);\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:'The x,y coordinate is the top left coordinate for the text draw area based on a 640x480 "canvas" (irrespective of screen resolution). If you plan on using TextDrawAlignment with alignment 3 (right), the x,y coordinate is the top right coordinate for the text draw. This function merely CREATES the textdraw, you must use TextDrawShowForPlayer or TextDrawShowForAll to show it. It is recommended to use WHOLE numbers instead of decimal positions when creating textdraws to ensure resolution friendly design.'})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["Keyboard key mapping codes (such as ",(0,i.jsx)(t.del,{children:"k~~VEHICLE_ENTER_EXIT"})," don't work beyond 255th character."]})}),"\n",(0,i.jsx)(t.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/TextDrawDestroy",children:"TextDrawDestroy"}),": Destroy a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/TextDrawColor",children:"TextDrawColor"}),": Set the color of the text in a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/TextDrawBoxColor",children:"TextDrawBoxColor"}),": Set the color of the box in a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/TextDrawBackgroundColor",children:"TextDrawBackgroundColor"}),": Set the background color of a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/TextDrawAlignment",children:"TextDrawAlignment"}),": Set the alignment of a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/TextDrawFont",children:"TextDrawFont"}),": Set the font of a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/TextDrawLetterSize",children:"TextDrawLetterSize"}),": Set the letter size of the text in a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/TextDrawTextSize",children:"TextDrawTextSize"}),": Set the size of a textdraw box."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/TextDrawSetOutline",children:"TextDrawSetOutline"}),": Choose whether the text has an outline."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/TextDrawSetShadow",children:"TextDrawSetShadow"}),": Toggle shadows on a textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/TextDrawSetProportional",children:"TextDrawSetProportional"}),": Scale the text spacing in a textdraw to a proportional ratio."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/TextDrawUseBox",children:"TextDrawUseBox"}),": Toggle if the textdraw has a box or not."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/TextDrawSetString",children:"TextDrawSetString"}),": Set the text in an existing textdraw."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": Show a textdraw for a certain player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": Hide a textdraw for a certain player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/TextDrawShowForAll",children:"TextDrawShowForAll"}),": Show a textdraw for all players."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/TextDrawHideForAll",children:"TextDrawHideForAll"}),": Hide a textdraw for all players."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);