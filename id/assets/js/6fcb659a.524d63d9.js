"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[3269],{28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var a=r(96540);const l={},n=a.createContext(l);function i(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(n.Provider,{value:t},e.children)}},47612:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>x});const a=JSON.parse('{"id":"scripting/functions/PlayerTextDrawTextSize","title":"PlayerTextDrawTextSize","description":"Change the size of a player-textdraw (box if PlayerTextDrawUseBox is enabled and/or clickable area for use with PlayerTextDrawSetSelectable).","source":"@site/docs/scripting/functions/PlayerTextDrawTextSize.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawTextSize","permalink":"/id/docs/scripting/functions/PlayerTextDrawTextSize","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/PlayerTextDrawTextSize.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/id/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/id/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"PlayerTextDrawTextSize","sidebar_label":"PlayerTextDrawTextSize","description":"Change the size of a player-textdraw (box if PlayerTextDrawUseBox is enabled and/or clickable area for use with PlayerTextDrawSetSelectable).","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawShow","permalink":"/id/docs/scripting/functions/PlayerTextDrawShow"},"next":{"title":"PlayerTextDrawUseBox","permalink":"/id/docs/scripting/functions/PlayerTextDrawUseBox"}}');var l=r(74848),n=r(28453);const i={title:"PlayerTextDrawTextSize",sidebar_label:"PlayerTextDrawTextSize",description:"Change the size of a player-textdraw (box if PlayerTextDrawUseBox is enabled and/or clickable area for use with PlayerTextDrawSetSelectable).",tags:["player","textdraw","playertextdraw"]},s=void 0,o={},x=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(t.p,{children:["Change the size of a player-textdraw (box if ",(0,l.jsx)(t.a,{href:"PlayerTextDrawUseBox",children:"PlayerTextDrawUseBox"})," is enabled and/or clickable area for use with ",(0,l.jsx)(t.a,{href:"PlayerTextDrawSetSelectable",children:"PlayerTextDrawSetSelectable"}),")."]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player whose player-textdraw to set the size of"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["PlayerText",":textid"]}),(0,l.jsx)(t.td,{children:"The ID of the player-textdraw to set the size of."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":width"]}),(0,l.jsx)(t.td,{children:"The size on the X axis (left/right) following the same 640x480 grid as TextDrawCreate."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":height"]}),(0,l.jsx)(t.td,{children:"The size on the Y axis (up/down) following the same 640x480 grid as TextDrawCreate."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'new PlayerText:welcomeText[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server!");\n    PlayerTextDrawTextSize(playerid, welcomeText[playerid], 2.0, 3.6);\n\n    PlayerTextDrawShow(playerid, welcomeText[playerid]);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["The x and y have different meanings with different ",(0,l.jsx)(t.a,{href:"PlayerTextDrawAlignment",children:"PlayerTextDrawAlignment"})," values:","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"1 (left): they are the right-most corner of the box, absolute coordinates."}),"\n",(0,l.jsx)(t.li,{children:"2 (center): they need to inverted (switch the two) and the x value is the overall width of the box."}),"\n",(0,l.jsx)(t.li,{children:"3 (right): the x and y are the coordinates of the left-most corner of the box"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.li,{children:"Using font type 4 (sprite) and 5 (model preview) converts X and Y of this function from corner coordinates to WIDTH and HEIGHT (offsets)."}),"\n",(0,l.jsx)(t.li,{children:"The TextDraw box starts 10.0 units up and 5.0 to the left as the origin (TextDrawCreate coordinate)."}),"\n",(0,l.jsxs)(t.li,{children:["This function defines the clickable area for use with ",(0,l.jsx)(t.a,{href:"PlayerTextDrawSetSelectable",children:"PlayerTextDrawSetSelectable"}),", whether a box is shown or not."]}),"\n"]})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"CreatePlayerTextDraw",children:"CreatePlayerTextDraw"}),": Create a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawDestroy",children:"PlayerTextDrawDestroy"}),": Destroy a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawGetTextSize",children:"PlayerTextDrawGetTextSize"}),": Gets the X axis and Y axis of the player-textdraw text size."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawColor",children:"PlayerTextDrawColor"}),": Set the color of the text in a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawBoxColor",children:"PlayerTextDrawBoxColor"}),": Set the color of a player-textdraw's box."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawBackgroundColor",children:"PlayerTextDrawBackgroundColor"}),": Set the background color of a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawAlignment",children:"PlayerTextDrawAlignment"}),": Set the alignment of a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": Set the font of a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawLetterSize",children:"PlayerTextDrawLetterSize"}),": Set the letter size of the text in a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawSetOutline",children:"PlayerTextDrawSetOutline"}),": Toggle the outline on a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawSetShadow",children:"PlayerTextDrawSetShadow"}),": Set the shadow on a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawSetProportional",children:"PlayerTextDrawSetProportional"}),": Scale the text spacing in a player-textdraw to a proportional ratio."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawUseBox",children:"PlayerTextDrawUseBox"}),": Toggle the box on a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawSetString",children:"PlayerTextDrawSetString"}),": Set the text of a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawShow",children:"PlayerTextDrawShow"}),": Show a player-textdraw."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayerTextDrawHide",children:"PlayerTextDrawHide"}),": Hide a player-textdraw."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);