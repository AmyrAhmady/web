"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[55865],{28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>s});var a=t(96540);const l={},n=a.createContext(l);function i(e){const r=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(n.Provider,{value:r},e.children)}},90911:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>x});const a=JSON.parse('{"id":"scripting/functions/PlayerTextDrawIsProportional","title":"PlayerTextDrawIsProportional","description":"Checks if a player-textdraw is proportional.","source":"@site/docs/scripting/functions/PlayerTextDrawIsProportional.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawIsProportional","permalink":"/bs/docs/scripting/functions/PlayerTextDrawIsProportional","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/PlayerTextDrawIsProportional.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/bs/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/bs/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"PlayerTextDrawIsProportional","sidebar_label":"PlayerTextDrawIsProportional","description":"Checks if a player-textdraw is proportional.","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawIsBox","permalink":"/bs/docs/scripting/functions/PlayerTextDrawIsBox"},"next":{"title":"PlayerTextDrawIsSelectable","permalink":"/bs/docs/scripting/functions/PlayerTextDrawIsSelectable"}}');var l=t(74848),n=t(28453);const i={title:"PlayerTextDrawIsProportional",sidebar_label:"PlayerTextDrawIsProportional",description:"Checks if a player-textdraw is proportional.",tags:["player","textdraw","playertextdraw"]},s=void 0,o={},x=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{VersionWarn:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(r.p,{children:"Checks if a player-textdraw is proportional."}),"\n",(0,l.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"Name"}),(0,l.jsx)(r.th,{children:"Description"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"playerid"}),(0,l.jsx)(r.td,{children:"The ID of the player."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["PlayerText",":textid"]}),(0,l.jsx)(r.td,{children:"The ID of the player-textdraw to check."})]})]})]}),"\n",(0,l.jsx)(r.h2,{id:"return-values",children:"Return Values"}),"\n",(0,l.jsxs)(r.p,{children:["Returns ",(0,l.jsx)(r.strong,{children:"true"})," if the player-textdraw is proportional, otherwise ",(0,l.jsx)(r.strong,{children:"false"}),"."]}),"\n",(0,l.jsx)(r.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-c",children:'new PlayerText:welcomeText[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");\n    PlayerTextDrawSetProportional(playerid, welcomeText[playerid], true);\n    PlayerTextDrawShow(playerid, welcomeText[playerid]);\n\n    if (PlayerTextDrawIsProportional(playerid, welcomeText[playerid]))\n    {\n        // Player-Textdraw is proportional\n    }\n    else\n    {\n        // Player-Textdraw is not proportional\n    }\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawCreate",children:"PlayerTextDrawCreate"}),": Create a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawDestroy",children:"PlayerTextDrawDestroy"}),": Destroy a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetProportional",children:"PlayerTextDrawSetProportional"}),": Scale the text spacing in a player-textdraw to a proportional ratio."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawColor",children:"PlayerTextDrawColor"}),": Set the color of the text in a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawBoxColor",children:"PlayerTextDrawBoxColor"}),": Set the color of a player-textdraw's box."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawBackgroundColor",children:"PlayerTextDrawBackgroundColor"}),": Set the background color of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawAlignment",children:"PlayerTextDrawAlignment"}),": Set the alignment of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": Set the font of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawLetterSize",children:"PlayerTextDrawLetterSize"}),": Set the letter size of the text in a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawTextSize",children:"PlayerTextDrawTextSize"}),": Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable)."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetOutline",children:"PlayerTextDrawSetOutline"}),": Toggle the outline on a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetShadow",children:"PlayerTextDrawSetShadow"}),": Set the shadow on a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawUseBox",children:"PlayerTextDrawUseBox"}),": Toggle the box on a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetString",children:"PlayerTextDrawSetString"}),": Set the text of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawShow",children:"PlayerTextDrawShow"}),": Show a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawHide",children:"PlayerTextDrawHide"}),": Hide a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"IsPlayerTextDrawVisible",children:"IsPlayerTextDrawVisible"}),": Checks if a player-textdraw is shown for the player."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"IsValidPlayerTextDraw",children:"IsValidPlayerTextDraw"}),": Checks if a player-textdraw is valid."]}),"\n"]})]})}function c(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);