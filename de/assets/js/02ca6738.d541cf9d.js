"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[22413],{28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var a=t(96540);const l={},n=a.createContext(l);function i(e){const r=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(n.Provider,{value:r},e.children)}},40160:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"scripting/functions/PlayerTextDrawSetProportional","title":"PlayerTextDrawSetProportional","description":"Appears to scale text spacing to a proportional ratio.","source":"@site/docs/scripting/functions/PlayerTextDrawSetProportional.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawSetProportional","permalink":"/de/docs/scripting/functions/PlayerTextDrawSetProportional","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/PlayerTextDrawSetProportional.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/de/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/de/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"PlayerTextDrawSetProportional","sidebar_label":"PlayerTextDrawSetProportional","description":"Appears to scale text spacing to a proportional ratio.","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawSetPreviewVehicleColours","permalink":"/de/docs/scripting/functions/PlayerTextDrawSetPreviewVehicleColours"},"next":{"title":"PlayerTextDrawSetSelectable","permalink":"/de/docs/scripting/functions/PlayerTextDrawSetSelectable"}}');var l=t(74848),n=t(28453);const i={title:"PlayerTextDrawSetProportional",sidebar_label:"PlayerTextDrawSetProportional",description:"Appears to scale text spacing to a proportional ratio.",tags:["player","textdraw","playertextdraw"]},o=void 0,s={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function x(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(r.p,{children:["Appears to scale text spacing to a proportional ratio. Useful when using ",(0,l.jsx)(r.a,{href:"PlayerTextDrawLetterSize",children:"PlayerTextDrawLetterSize"})," to ensure the text has even character spacing."]}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"Name"}),(0,l.jsx)(r.th,{children:"Description"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"playerid"}),(0,l.jsx)(r.td,{children:"The ID of the player whose player-textdraw to set the proportionality of"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["PlayerText",":textid"]}),(0,l.jsx)(r.td,{children:"The ID of the player-textdraw to set the proportionality of"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["bool",":proportional"]}),(0,l.jsx)(r.td,{children:"'true' to enable proportionality, 'false' to disable."})]})]})]}),"\n",(0,l.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(r.p,{children:"This function does not return any specific values."}),"\n",(0,l.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-c",children:'new PlayerText:welcomeText[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server!");\n    PlayerTextDrawSetProportional(playerid, welcomeText[playerid], true);\n\n    PlayerTextDrawShow(playerid, welcomeText[playerid]);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"CreatePlayerTextDraw",children:"CreatePlayerTextDraw"}),": Create a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawDestroy",children:"PlayerTextDrawDestroy"}),": Destroy a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawIsProportional",children:"PlayerTextDrawIsProportional"}),": Checks if a player-textdraw is proportional."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawColor",children:"PlayerTextDrawColor"}),": Set the color of the text in a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawBoxColor",children:"PlayerTextDrawBoxColor"}),": Set the color of a player-textdraw's box."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawBackgroundColor",children:"PlayerTextDrawBackgroundColor"}),": Set the background color of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawAlignment",children:"PlayerTextDrawAlignment"}),": Set the alignment of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": Set the font of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawLetterSize",children:"PlayerTextDrawLetterSize"}),": Set the letter size of the text in a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawTextSize",children:"PlayerTextDrawTextSize"}),": Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable)."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetOutline",children:"PlayerTextDrawSetOutline"}),": Toggle the outline on a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetShadow",children:"PlayerTextDrawSetShadow"}),": Set the shadow on a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawUseBox",children:"PlayerTextDrawUseBox"}),": Toggle the box on a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetString",children:"PlayerTextDrawSetString"}),": Set the text of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawShow",children:"PlayerTextDrawShow"}),": Show a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawHide",children:"PlayerTextDrawHide"}),": Hide a player-textdraw."]}),"\n"]})]})}function c(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}}}]);