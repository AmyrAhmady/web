"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[69747],{28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var a=r(96540);const n={},s=a.createContext(n);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:t},e.children)}},44071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>x});const a=JSON.parse('{"id":"scripting/resources/textdraws","title":"Textdraws","description":"As the name implies, a textdraw is text that is drawn on a player\'s screen.","source":"@site/docs/scripting/resources/textdraws.md","sourceDirName":"scripting/resources","slug":"/scripting/resources/textdraws","permalink":"/fa/docs/scripting/resources/textdraws","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/resources/textdraws.md","tags":[],"version":"current","frontMatter":{"title":"Textdraws","sidebar_label":"Textdraws","description":"As the name implies, a textdraw is text that is drawn on a player\'s screen."},"sidebar":"docsSidebar","previous":{"title":"Material Text Alignments","permalink":"/fa/docs/scripting/resources/textalignments"},"next":{"title":"TextDraw Sprites","permalink":"/fa/docs/scripting/resources/textdrawsprites"}}');var n=r(74848),s=r(28453);const i={title:"Textdraws",sidebar_label:"Textdraws",description:"As the name implies, a textdraw is text that is drawn on a player's screen."},l=void 0,o={},x=[{value:"What is a Textdraw?",id:"what-is-a-textdraw",level:2},{value:"Global Textdraws",id:"global-textdraws",level:2},{value:"Player-textdraws",id:"player-textdraws",level:2},{value:"Variable Declaration",id:"variable-declaration",level:2},{value:"Global Textdraw",id:"global-textdraw",level:3},{value:"Per-Player Textdraw",id:"per-player-textdraw",level:3},{value:"Creating the Textdraw",id:"creating-the-textdraw",level:2},{value:"Setting the font",id:"setting-the-font",level:2},{value:"Showing the textdraw",id:"showing-the-textdraw",level:2},{value:"Assorted Tips",id:"assorted-tips",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"what-is-a-textdraw",children:"What is a Textdraw?"}),"\n",(0,n.jsxs)(t.p,{children:["As the name implies, a textdraw is text that is drawn on a player's screen. Unlike ",(0,n.jsx)(t.a,{href:"../functions/SendClientMessage",children:"client messages"})," or ",(0,n.jsx)(t.a,{href:"../functions/GameTextForPlayer",children:"gametext"})," however, textdraws can be shown on a player's screen for an indefinite period of time. Textdraws can be simple text on the screen such as a website address, or complex scripted dynamic textdraws such as progress bars."]}),"\n",(0,n.jsx)(t.p,{children:"This 'textdraw editor' tool can make designing textdraws much easier."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"global-textdraws",children:"Global Textdraws"}),"\n",(0,n.jsxs)(t.p,{children:["Global textdraws can be created, then shown to all players. There is a ",(0,n.jsx)(t.a,{href:"../resources/limits",children:"limit"})," as to how many can be created, though. This means if you have a server with 500 players, creating more than 4 textdraws per-player is not possible. That's where ",(0,n.jsx)(t.strong,{children:"player"}),"-textdraws come in. See further down. Here is a list of all the functions related to ",(0,n.jsx)(t.strong,{children:"global"})," textdraws:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawCreate",children:"TextDrawCreate"}),": Create a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawDestroy",children:"TextDrawDestroy"}),": Destroy a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawColor",children:"TextDrawColor"}),": Set the color of the text in a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawBoxColor",children:"TextDrawBoxColor"}),": Set the color of the box in a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawBackgroundColor",children:"TextDrawBackgroundColor"}),": Set the background color of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawAlignment",children:"TextDrawAlignment"}),": Set the alignment of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawFont",children:"TextDrawFont"}),": Set the font of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawLetterSize",children:"TextDrawLetterSize"}),": Set the letter size of the text in a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawTextSize",children:"TextDrawTextSize"}),": Set the size of a textdraw box."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawSetOutline",children:"TextDrawSetOutline"}),": Choose whether the text has an outline."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawSetShadow",children:"TextDrawSetShadow"}),": Toggle shadows on a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawSetProportional",children:"TextDrawSetProportional"}),": Scale the text spacing in a textdraw to a proportional ratio."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawUseBox",children:"TextDrawUseBox"}),": Toggle if the textdraw has a box or not."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawSetString",children:"TextDrawSetString"}),": Set the text in an existing textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": Show a textdraw for a certain player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": Hide a textdraw for a certain player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawShowForAll",children:"TextDrawShowForAll"}),": Show a textdraw for all players."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawHideForAll",children:"TextDrawHideForAll"}),": Hide a textdraw for all players."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/IsTextDrawVisibleForPlayer",children:"IsTextDrawVisibleForPlayer"}),": Checks if a textdraw is shown for the player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/IsValidTextDraw",children:"IsValidTextDraw"}),": Checks if a textdraw is valid."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawGetAlignment",children:"TextDrawGetAlignment"}),": Gets the text alignment of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawGetBackgroundColour",children:"TextDrawGetBackgroundColour"}),": Gets the background colour of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawGetBoxColour",children:"TextDrawGetBoxColour"}),": Gets the box colour of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawGetColour",children:"TextDrawGetColour"}),": Gets the text colour of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawGetFont",children:"TextDrawGetFont"}),": Gets the text font of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawGetLetterSize",children:"TextDrawGetLetterSize"}),": Gets the width and height of the letters."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawGetOutline",children:"TextDrawGetOutline"}),": Gets the thickness of a textdraw's text's outline."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawGetPos",children:"TextDrawGetPos"}),": Gets the position of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawGetPreviewModel",children:"TextDrawGetPreviewModel"}),": Gets the preview model of a 3D preview textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawGetPreviewRot",children:"TextDrawGetPreviewRot"}),": Gets the rotation and zoom of a 3D model preview textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawGetPreviewVehCol",children:"TextDrawGetPreviewVehCol"}),": Gets the preview vehicle colors of a 3D preview textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawGetPreviewVehicleColours",children:"TextDrawGetPreviewVehicleColours"}),": Gets the preview vehicle colours of a 3D preview textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawGetShadow",children:"TextDrawGetShadow"}),": Gets the size of a textdraw's text's shadow."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawGetString",children:"TextDrawGetString"}),": Gets the text of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawGetTextSize",children:"TextDrawGetTextSize"}),": Gets the X axis and Y axis of the textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawIsBox",children:"TextDrawIsBox"}),": Checks if a textdraw is box."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawIsProportional",children:"TextDrawIsProportional"}),": Checks if a textdraw is proportional."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawIsSelectable",children:"TextDrawIsSelectable"}),": Checks if a textdraw is selectable."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawSetPos",children:"TextDrawSetPos"}),": Sets the position of a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/TextDrawSetStringForPlayer",children:"TextDrawSetStringForPlayer"}),": Changes the text on a textdraw for a specific player."]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"player-textdraws",children:"Player-textdraws"}),"\n",(0,n.jsx)(t.p,{children:"Player-textdraws are only created for one specific player. Up to 256 textdraws can be created PER-PLAYER. That's 128,000 on a server with 500 players. A little more than 2048. Player-textdraws should be used for things that are not 'static'. Do not use them to display a website address for example, but for a vehicle health indicator."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/CreatePlayerTextDraw",children:"CreatePlayerTextDraw"}),": Create a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawDestroy",children:"PlayerTextDrawDestroy"}),": Destroy a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawColor",children:"PlayerTextDrawColor"}),": Set the color of the text in a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawBoxColor",children:"PlayerTextDrawBoxColor"}),": Set the color of a player-textdraw's box."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawBackgroundColor",children:"PlayerTextDrawBackgroundColor"}),": Set the background color of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawAlignment",children:"PlayerTextDrawAlignment"}),": Set the alignment of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": Set the font of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawLetterSize",children:"PlayerTextDrawLetterSize"}),": Set the letter size of the text in a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawTextSize",children:"PlayerTextDrawTextSize"}),": Set the size of a player-textdraw box (or clickable area for ",(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawSetSelectable",children:"PlayerTextDrawSetSelectable"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawSetOutline",children:"PlayerTextDrawSetOutline"}),": Toggle the outline on a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawSetShadow",children:"PlayerTextDrawSetShadow"}),": Set the shadow on a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawSetProportional",children:"PlayerTextDrawSetProportional"}),": Scale the text spacing in a player-textdraw to a proportional ratio."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawUseBox",children:"PlayerTextDrawUseBox"}),": Toggle the box on a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawSetString",children:"PlayerTextDrawSetString"}),": Set the text of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawShow",children:"PlayerTextDrawShow"}),": Show a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawHide",children:"PlayerTextDrawHide"}),": Hide a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/IsPlayerTextDrawVisible",children:"IsPlayerTextDrawVisible"}),": Checks if a player-textdraw is shown for the player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/IsValidPlayerTextDraw",children:"IsValidPlayerTextDraw"}),": Checks if a player-textdraw is valid."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawBackgroundColour",children:"PlayerTextDrawBackgroundColour"}),": Adjust the background colour of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawBoxColour",children:"PlayerTextDrawBoxColour"}),": Sets the colour of a textdraw's box (PlayerTextDrawUseBox )."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawColour",children:"PlayerTextDrawColour"}),": Sets the text colour of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawGetAlignment",children:"PlayerTextDrawGetAlignment"}),": Gets the text alignment of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawGetBackgroundColour",children:"PlayerTextDrawGetBackgroundColour"}),": Gets the background colour of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawGetBoxColour",children:"PlayerTextDrawGetBoxColour"}),": Gets the box colour of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawGetColour",children:"PlayerTextDrawGetColour"}),": Gets the text colour of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawGetFont",children:"PlayerTextDrawGetFont"}),": Gets the text font of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawGetLetterSize",children:"PlayerTextDrawGetLetterSize"}),": Gets the width and height of the letters."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawGetOutline",children:"PlayerTextDrawGetOutline"}),": Get the outline size on a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawGetPos",children:"PlayerTextDrawGetPos"}),": Gets the position of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawGetPreviewModel",children:"PlayerTextDrawGetPreviewModel"}),": Gets the preview model of a 3D preview player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawGetPreviewRot",children:"PlayerTextDrawGetPreviewRot"}),": Gets the rotation and zoom of a 3D model preview player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawGetPreviewVehicleColours",children:"PlayerTextDrawGetPreviewVehicleColours"}),": Gets the preview vehicle colors of a 3D preview player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawGetShadow",children:"PlayerTextDrawGetShadow"}),": Get the shadow size on a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawGetString",children:"PlayerTextDrawGetString"}),": Gets the text of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawGetTextSize",children:"PlayerTextDrawGetTextSize"}),": Gets the X axis and Y axis of the player-textdraw text size."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawIsBox",children:"PlayerTextDrawIsBox"}),": Checks if a player-textdraw is box."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawIsProportional",children:"PlayerTextDrawIsProportional"}),": Checks if a player-textdraw is proportional."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawIsSelectable",children:"PlayerTextDrawIsSelectable"}),": Checks if a player-textdraw is selectable."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawSetPos",children:"PlayerTextDrawSetPos"}),": Sets the position of a player-textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/PlayerTextDrawSetPreviewVehicleColours",children:"PlayerTextDrawSetPreviewVehicleColours"}),": Set the color of a vehicle in a player-textdraw model preview (if a vehicle is shown)."]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"variable-declaration",children:"Variable Declaration"}),"\n",(0,n.jsx)(t.p,{children:"When creating a textdraw, you should always decide if the textdraw you're going to create has to be global (eg. your website address, global annoucement) or if it's going to differ per player (eg. kills, deaths, score)."}),"\n",(0,n.jsx)(t.h3,{id:"global-textdraw",children:"Global Textdraw"}),"\n",(0,n.jsxs)(t.p,{children:["A global textdraw is the easiest to create and requires only one variable. This variable is needed to modify the textdraw and to show it to the players later on. The declaration for such a textdraw needs to be a global variable in most cases. The textdraw variable also needs to be prefixed with the ",(0,n.jsx)(t.em,{children:"Text:"})," tag and should be initialized with the value ",(0,n.jsx)(t.em,{children:"Text:INVALID_TEXT_DRAW"}),". If you omit the initialization, the textdraw may conflict with others as you add more textdraws."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"new Text:gMyText = Text:INVALID_TEXT_DRAW;\n"})}),"\n",(0,n.jsx)(t.h3,{id:"per-player-textdraw",children:"Per-Player Textdraw"}),"\n",(0,n.jsx)(t.p,{children:"A per-player textdraw is exactly the same as a regular 'global' textdraw, but only creates the textdraw for a single player."}),"\n",(0,n.jsx)(t.p,{children:"This is useful for textdraws that are unique to each player, such as a 'stats' bar showing their kills or score."}),"\n",(0,n.jsx)(t.p,{children:"This can be used to avoid going over the global-textdraw limit, as you can create 256 textdraws per player."}),"\n",(0,n.jsx)(t.p,{children:"They are also easier to manage, as they automatically destroy themselves when the player disconnects."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"new PlayerText:gMyPlayerText = PlayerText:INVALID_TEXT_DRAW;\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"IMPORTANT NOTE: An array is still needed for the variable, as the ID of the textdraws may differ from player to player, as other players may have more or less textdraws created than the other."})}),"\n",(0,n.jsxs)(t.p,{children:["The function names only differ slightly, with 'TextDraw' becoming 'PlayerTextDraw', with one exception: ",(0,n.jsx)(t.a,{href:"../functions/CreatePlayerTextDraw",children:"CreatePlayerTextDraw"})," ('TextDrawSetString' becomes 'PlayerTextDrawSetString')."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"creating-the-textdraw",children:"Creating the Textdraw"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://assets.open.mp/assets/images/textdraws/320px-Textdraw_map.png",alt:"Image:320px-Textdraw_map.png"})}),"\n",(0,n.jsxs)(t.p,{children:["Once you've declared a variable/array to store the ID of your textdraw(s) in, you can proceed to create the textdraw itself. For global textdraws that are always created, the code should be placed under ",(0,n.jsx)(t.a,{href:"../callbacks/OnGameModeInit",children:"OnGameModeInit"}),". To create the textdraw, the function ",(0,n.jsx)(t.a,{href:"../functions/TextDrawCreate",children:"TextDrawCreate"})," must be used."]}),"\n",(0,n.jsx)(t.p,{children:"Note that this function merely creates the textdraw, other functions are used to modify it and to show it to the player(s)."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,n.jsxs)(t.p,{children:["TextDrawCreate(Float",":x",", Float",":y",", text[])"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"x"}),(0,n.jsx)(t.td,{children:"X coordinate at which to create the textdraw"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"y"}),(0,n.jsx)(t.td,{children:"Y coordinate at which to create the textdraw"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"text[]"}),(0,n.jsx)(t.td,{children:"The text in the textdraw."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Return Values:"})}),"\n",(0,n.jsx)(t.p,{children:"The ID of the created textdraw"}),"\n",(0,n.jsx)(t.p,{children:"Let's proceed to create the textdraw:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    gMyText = TextDrawCreate(320.0, 240.0, "Hello World!");\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:'We have created a textdraw in the center of the screen that says "Hello World!".'}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"setting-the-font",children:"Setting the font"}),"\n",(0,n.jsx)(t.p,{children:"There are 4 fonts available for textdraw text:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://assets.open.mp/assets/images/textdraws/Textdraw_font_styles.png",alt:"Image:320px-Textdraw_map.png"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"ID"}),(0,n.jsx)(t.th,{children:"Info"}),(0,n.jsx)(t.th,{children:"Tips"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0"}),(0,n.jsxs)(t.td,{children:["The ",(0,n.jsx)(t.em,{children:"San Andreas"})," Font."]}),(0,n.jsx)(t.td,{children:"Use for header or titles, not a whole page."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"Clear font that includes both upper and lower case characters."}),(0,n.jsx)(t.td,{children:"Can be used for a lot of text."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"Clear font, but includes only capital letters."}),(0,n.jsx)(t.td,{children:"Can be used in various instances."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"GTA font"})}),(0,n.jsx)(t.td,{children:"Retains quality when enlarged. Useful for large texts."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["As of SA-MP 0.3d, a new font (id 4) can be set. This is used in combination with the ",(0,n.jsx)(t.a,{href:"../functions/TextDrawCreate",children:"TextDrawCreate"})," and ",(0,n.jsx)(t.a,{href:"../functions/TextDrawTextSize",children:"TextDrawTextSize"})," functions to show a texture 'sprite' on the player's screen. We'll cover this later."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"showing-the-textdraw",children:"Showing the textdraw"}),"\n",(0,n.jsx)(t.p,{children:"For this example, the textdraw has been created globally under OnGameModeInit and will be shown to player when they join the server."}),"\n",(0,n.jsxs)(t.p,{children:["To show a textdraw for a single player, the function ",(0,n.jsx)(t.a,{href:"../functions/TextDrawShowForPlayer",children:"TextDrawShowForPlayer"})," is used."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,n.jsxs)(t.p,{children:["TextDrawShowForPlayer(playerid, Text",":text",")"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player to show the textdraw for"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"text"}),(0,n.jsx)(t.td,{children:"The ID of the textdraw to show"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Return Values:"})}),"\n",(0,n.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,n.jsx)(t.p,{children:"The playerid is passed through OnPlayerConnect, and the text-draw ID is stored in the 'gMyText' variable."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    gMyText = TextDrawCreate(320.0, 320.0, "Hello World!");\n    return 1;\n}\n\npublic OnPlayerConnect(playerid)\n{\n    TextDrawShowForPlayer(playerid, gMyText);\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"assorted-tips",children:"Assorted Tips"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Try to use whole number when specifying positions, this ensures the best compatibility on different resolutions."}),"\n",(0,n.jsx)(t.li,{children:"Fonts appear to look the best with an X to Y ratio of 1 to 4 (e.g. if x = 0.5 then y should be 2)."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);