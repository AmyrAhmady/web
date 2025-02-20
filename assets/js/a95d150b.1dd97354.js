"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[49242],{28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>s});var a=t(96540);const l={},n=a.createContext(l);function i(e){const r=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(n.Provider,{value:r},e.children)}},73861:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>x});const a=JSON.parse('{"id":"scripting/functions/CreatePlayerTextDraw","title":"CreatePlayerTextDraw","description":"Creates a textdraw for a single player.","source":"@site/docs/scripting/functions/CreatePlayerTextDraw.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreatePlayerTextDraw","permalink":"/docs/scripting/functions/CreatePlayerTextDraw","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/CreatePlayerTextDraw.md","tags":[{"inline":true,"label":"player","permalink":"/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"CreatePlayerTextDraw","sidebar_label":"CreatePlayerTextDraw","description":"Creates a textdraw for a single player.","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"CreatePlayerPickup","permalink":"/docs/scripting/functions/CreatePlayerPickup"},"next":{"title":"CreateVehicle","permalink":"/docs/scripting/functions/CreateVehicle"}}');var l=t(74848),n=t(28453);const i={title:"CreatePlayerTextDraw",sidebar_label:"CreatePlayerTextDraw",description:"Creates a textdraw for a single player.",tags:["player","textdraw","playertextdraw"]},s=void 0,o={},x=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",del:"del",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(r.p,{children:"Creates a textdraw for a single player. This can be used as a way around the global text-draw limit."}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"Name"}),(0,l.jsx)(r.th,{children:"Description"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"playerid"}),(0,l.jsx)(r.td,{children:"The ID of the player to create the textdraw for"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["Float",":x"]}),(0,l.jsx)(r.td,{children:"X-Coordinate"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsxs)(r.td,{children:["Float",":y"]}),(0,l.jsx)(r.td,{children:"Y-Coordinate"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"const format[]"}),(0,l.jsx)(r.td,{children:"The text in the textdraw."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"OPEN_MP_TAGS:..."}),(0,l.jsx)(r.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,l.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(r.p,{children:"The ID of the created textdraw"}),"\n",(0,l.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-c",children:'// This variable is used to store the id of the textdraw\n// so that we can use it throught the script\nnew PlayerText:welcomeText[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    // First, create the textdraw\n    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");\n\n    // Now show it\n    PlayerTextDrawShow(playerid, welcomeText[playerid]);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(r.admonition,{type:"tip",children:(0,l.jsx)(r.p,{children:"Player-textdraws are automatically destroyed when a player disconnects."})}),"\n",(0,l.jsx)(r.admonition,{type:"warning",children:(0,l.jsxs)(r.p,{children:["Keyboard key mapping codes (such as ",(0,l.jsx)(r.del,{children:"k~~VEHICLE_ENTER_EXIT"}),") Doesn't work beyond 255th character."]})}),"\n",(0,l.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawDestroy",children:"PlayerTextDrawDestroy"}),": Destroy a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawColor",children:"PlayerTextDrawColor"}),": Set the color of the text in a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawBoxColor",children:"PlayerTextDrawBoxColor"}),": Set the color of a player-textdraw's box."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawBackgroundColor",children:"PlayerTextDrawBackgroundColor"}),": Set the background color of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawAlignment",children:"PlayerTextDrawAlignment"}),": Set the alignment of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": Set the font of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawLetterSize",children:"PlayerTextDrawLetterSize"}),": Set the letter size of the text in a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawTextSize",children:"PlayerTextDrawTextSize"}),": Set the size of a player-textdraw box (or clickable area for PlayerTextDrawSetSelectable)."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetOutline",children:"PlayerTextDrawSetOutline"}),": Toggle the outline on a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetShadow",children:"PlayerTextDrawSetShadow"}),": Set the shadow on a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetProportional",children:"PlayerTextDrawSetProportional"}),": Scale the text spacing in a player-textdraw to a proportional ratio."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawUseBox",children:"PlayerTextDrawUseBox"}),": Toggle the box on a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetString",children:"PlayerTextDrawSetString"}),": Set the text of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawShow",children:"PlayerTextDrawShow"}),": Show a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawHide",children:"PlayerTextDrawHide"}),": Hide a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"IsPlayerTextDrawVisible",children:"IsPlayerTextDrawVisible"}),": Checks if a player-textdraw is shown for the player."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"IsValidPlayerTextDraw",children:"IsValidPlayerTextDraw"}),": Checks if a player-textdraw is valid."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawBackgroundColour",children:"PlayerTextDrawBackgroundColour"}),": Adjust the background colour of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawBoxColour",children:"PlayerTextDrawBoxColour"}),": Sets the colour of a textdraw's box (PlayerTextDrawUseBox )."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawColour",children:"PlayerTextDrawColour"}),": Sets the text colour of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawGetAlignment",children:"PlayerTextDrawGetAlignment"}),": Gets the text alignment of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawGetBackgroundColour",children:"PlayerTextDrawGetBackgroundColour"}),": Gets the background colour of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawGetBoxColour",children:"PlayerTextDrawGetBoxColour"}),": Gets the box colour of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawGetColour",children:"PlayerTextDrawGetColour"}),": Gets the text colour of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawGetFont",children:"PlayerTextDrawGetFont"}),": Gets the text font of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawGetLetterSize",children:"PlayerTextDrawGetLetterSize"}),": Gets the width and height of the letters."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawGetOutline",children:"PlayerTextDrawGetOutline"}),": Get the outline size on a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawGetPos",children:"PlayerTextDrawGetPos"}),": Gets the position of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawGetPreviewModel",children:"PlayerTextDrawGetPreviewModel"}),": Gets the preview model of a 3D preview player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawGetPreviewRot",children:"PlayerTextDrawGetPreviewRot"}),": Gets the rotation and zoom of a 3D model preview player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawGetPreviewVehicleColours",children:"PlayerTextDrawGetPreviewVehicleColours"}),": Gets the preview vehicle colors of a 3D preview player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawGetShadow",children:"PlayerTextDrawGetShadow"}),": Get the shadow size on a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawGetString",children:"PlayerTextDrawGetString"}),": Gets the text of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawGetTextSize",children:"PlayerTextDrawGetTextSize"}),": Gets the X axis and Y axis of the player-textdraw text size."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawIsBox",children:"PlayerTextDrawIsBox"}),": Checks if a player-textdraw is box."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawIsProportional",children:"PlayerTextDrawIsProportional"}),": Checks if a player-textdraw is proportional."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawIsSelectable",children:"PlayerTextDrawIsSelectable"}),": Checks if a player-textdraw is selectable."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetPos",children:"PlayerTextDrawSetPos"}),": Sets the position of a player-textdraw."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"PlayerTextDrawSetPreviewVehicleColours",children:"PlayerTextDrawSetPreviewVehicleColours"}),": Set the color of a vehicle in a player-textdraw model preview (if a vehicle is shown)."]}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"../resources/textdrawsprites",children:"TextDraw Sprites"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);