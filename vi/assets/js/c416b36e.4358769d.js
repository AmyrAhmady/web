"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[83641],{28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>o});var r=n(96540);const l={},i=r.createContext(l);function t(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(i.Provider,{value:s},e.children)}},99541:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/resources/colorslist","title":"Color List","description":"Colors are everywhere in SA-MP - vehicles, player names and blips, textdraws, gametext, chat, 3D texts and dialogs (as color embedding)! Below you can find information about these different things.","source":"@site/docs/scripting/resources/colorslist.md","sourceDirName":"scripting/resources","slug":"/scripting/resources/colorslist","permalink":"/vi/docs/scripting/resources/colorslist","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/resources/colorslist.md","tags":[],"version":"current","frontMatter":{"title":"Color List","sidebar_label":"Color List","description":"Colors are everywhere in SA-MP - vehicles, player names and blips, textdraws, gametext, chat, 3D texts and dialogs (as color embedding)! Below you can find information about these different things."},"sidebar":"docsSidebar","previous":{"title":"Click Sources","permalink":"/vi/docs/scripting/resources/clicksources"},"next":{"title":"Connection status","permalink":"/vi/docs/scripting/resources/connectionstatus"}}');var l=n(74848),i=n(28453);const t={title:"Color List",sidebar_label:"Color List",description:"Colors are everywhere in SA-MP - vehicles, player names and blips, textdraws, gametext, chat, 3D texts and dialogs (as color embedding)! Below you can find information about these different things."},o=void 0,a={},c=[{value:"Chat text and player color",id:"chat-text-and-player-color",level:2},{value:"Alpha values (transparency)",id:"alpha-values-transparency",level:3},{value:"Doing math",id:"doing-math",level:3},{value:"Convert string to value with pawn",id:"convert-string-to-value-with-pawn",level:3},{value:"Color embedding",id:"color-embedding",level:3},{value:"Example",id:"example",level:4},{value:"Another example",id:"another-example",level:4},{value:"Using GetPlayerColor",id:"using-getplayercolor",level:4},{value:"Color Pickers",id:"color-pickers",level:3},{value:"GameText",id:"gametext",level:2},{value:"Example",id:"example-1",level:3}];function h(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",del:"del",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h2,{id:"chat-text-and-player-color",children:"Chat text and player color"}),"\n",(0,l.jsx)(s.p,{children:"Colors in SA-MP are generally represented in hexadecimal notation (though integers can be used also). A chattext or player color looks like this: 0xRRGGBBAA."}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.em,{children:"RR"})," is the red part of the color, ",(0,l.jsx)(s.em,{children:"GG"})," the green and ",(0,l.jsx)(s.em,{children:"BB"})," the blue. ",(0,l.jsx)(s.em,{children:"AA"})," is the alpha value. If FF is used there, the color will display without transparency and if 00 is used, it will be invisible."]}),"\n",(0,l.jsxs)(s.p,{children:["For the Hex code for these colors, go to the ",(0,l.jsx)(s.a,{href:"hexcolors",children:"Hex colors"})," page."]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"alpha-values-transparency",children:"Alpha values (transparency)"}),"\n",(0,l.jsx)(s.p,{children:"The following images display the effect of transparency values used with a white quare under the player marker and left to the saving floppy icon. Increments of 0x11 (decimal 17) are used for demonstration, but of course you can use any value."}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:"https://assets.open.mp/assets/images/colorList/transparency/trans_matrix.png",alt:"Image.png"})}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"doing-math",children:"Doing math"}),"\n",(0,l.jsx)(s.p,{children:"Since colors are just numbers it is possible to calculate with them, although it may not always make sense. For example, it is possible to adjust the player's radar marker visibility (see above) while keeping their current color the same, regardless of what is is."}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-c",children:"SetPlayerMarkerVisibility(playerid, alpha = 0xFF)\n{\n    new oldcolor, newcolor;\n\n    alpha = clamp(alpha, 0x00, 0xFF); // if an out-of-range value is supplied we'll fix it here first\n    oldcolor = GetPlayerColor(playerid); // get their color - Note: SetPlayerColor must have been used beforehand\n\n    newcolor = (oldcolor & ~0xFF) | alpha; // first we strip of all alpha data (& ~0xFF) and then we replace it with our desired value (| alpha)\n    return SetPlayerColor(playerid, newcolor); // returns 1 if it succeeded, 0 otherwise\n}\n"})}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"convert-string-to-value-with-pawn",children:"Convert string to value with pawn"}),"\n",(0,l.jsx)(s.p,{children:'Since the colors are just numbers you have to convert them sometimes from an input string "RRGGBBAA" to its number. This can be done using sscanf or the following function:'}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-c",children:"stock HexToInt(string[])\n{\n    if (!string[0])\n    {\n        return 0;\n    }\n\n    new\n        cur = 1,\n        res = 0;\n\n    for (new i = strlen(string); i > 0; i--)\n    {\n        res += cur * (string[i - 1] - ((string[i - 1] < 58) ? (48) : (55)));\n        cur = cur * 16;\n    }\n    return res;\n}\n"})}),"\n",(0,l.jsxs)(s.p,{children:['Use HexToInt("RRGGBBAA") and you\'ll get a usable number as result for ',(0,l.jsx)(s.a,{href:"../functions/SetPlayerColor",children:"SetPlayerColor"}),"."]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"color-embedding",children:"Color embedding"}),"\n",(0,l.jsxs)(s.p,{children:["It is possible to use colors within text in ",(0,l.jsx)(s.a,{href:"../functions/SendClientMessage%22",children:"client messages"}),", ",(0,l.jsx)(s.a,{href:"../functions/ShowPlayerDialog",children:"dialogs"}),", ",(0,l.jsx)(s.a,{href:"../functions/Create3DTextLabel",children:"3D text labels"}),", ",(0,l.jsx)(s.a,{href:"../functions/SetObjectMaterialText",children:"object material texts"})," and ",(0,l.jsx)(s.a,{href:"../functions/SetVehicleNumberPlate%22",children:"vehicle numberplates"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["It is very similar to ",(0,l.jsx)(s.a,{href:"../resources/gametextstyles",children:"gametext colors"}),", but allows any color to be used."]}),"\n",(0,l.jsx)(s.admonition,{type:"caution",children:(0,l.jsxs)(s.p,{children:["This type of color embedding does not work in textdraws. See ",(0,l.jsx)(s.a,{href:"../resources/gametextstyles",children:"GameTextStyle"}),"."]})}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-c",children:"{FFFFFF}Hello this is {00FF00}green {FFFFFF}and this is {FF0000}red\n"})}),"\n",(0,l.jsx)(s.p,{children:"Hello this is green and this is red"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:"https://assets.open.mp/assets/images/colorList/Example1.png",alt:"Image.png"})}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h4,{id:"another-example",children:"Another example"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.img,{src:"https://assets.open.mp/assets/images/colorList/Cembed.png",alt:"Image.png"}),(0,l.jsx)(s.br,{}),"\n","The code for the above chat line looks like this:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-c",children:'SendClientMessage(playerid, COLOR_WHITE, "Welcome to {00FF00}M{FFFFFF}a{FF0000}r{FFFFFF}c{00FF00}o{FFFFFF}\'{FF0000}s {FFFFFF}B{00FF00}i{FFFFFF}s{FF0000}t{FFFFFF}r{00FF00}o{FFFFFF}!");\n'})}),"\n",(0,l.jsx)(s.p,{children:"You can define colors to use like so:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-c",children:'#define COLOR_RED_EMBED "{FF0000}"\n\nSendClientMessage(playerid, -1, "This is white and "COLOR_RED_EMBED"this is red.");\n'})}),"\n",(0,l.jsx)(s.p,{children:"Or"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-c",children:'#define COLOR_RED_EMBED "FF0000"\n\nSendClientMessage(playerid, -1, "This is white and {"COLOR_RED_EMBED"}this is red.");\n'})}),"\n",(0,l.jsx)(s.p,{children:"The second example would be better as is it clearer that embedding is used."}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h4,{id:"using-getplayercolor",children:"Using GetPlayerColor"}),"\n",(0,l.jsx)(s.p,{children:"To use a player's color as an embedded color, you must first remove the alpha value. To do this, perform a logical right shift."}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-c",children:'new msg[128];\nformat(msg, sizeof(msg), "{ffffff}This is white and {%06x}this is the player\'s color!", GetPlayerColor(playerid) >>> 8);\nSendClientMessage(playerid, 0xffffffff, msg);\n'})}),"\n",(0,l.jsxs)(s.p,{children:["The %x is the placeholder for hexadecimal values, the 6 ensures that the output string will always be six characters long and the 0 will pad it with zeros if it's not. Note that ",(0,l.jsx)(s.a,{href:"../resources/GetPlayerColor",children:"GetPlayerColor"})," only works properly if ",(0,l.jsx)(s.a,{href:"../resources/SetPlayerColor",children:"SetPlayerColor"})," has been used beforehand."]}),"\n",(0,l.jsx)(s.p,{children:"The colors used in color embedding are not like normal hex colors in Pawn. There is no '0x' prefix and no alpha value (last 2 digits)."}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"color-pickers",children:"Color Pickers"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"http://www.gtavision.com/index.php?section=downloads&site=download&id=1974",children:"SA-MP Colorpicker v1.1.0"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"http://www.december.com/html/spec/color.html",children:"December.com"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"http://psyclops.com/tools/rgb",children:"RGB Picker"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"https://kuler.adobe.com/create/color-wheel/",children:"Adobe Kuler"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"http://colorschemedesigner.com/",children:"Color Scheme Designer"})}),"\n"]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h2,{id:"gametext",children:"GameText"}),"\n",(0,l.jsx)(s.p,{children:"For GameText colors you can use special tags to set the following text to a specific color."}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-c",children:"~r~    red\n~g~    green\n~b~    blue\n~w~    white\n~y~    yellow\n~p~    purple\n~l~    black\n~h~    lighter color\n"})}),"\n",(0,l.jsx)(s.p,{children:"Game text colour tags can be used to form different colours easily. The below colours are not exactly the same colour as above tags."}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-c",children:"~y~                yellow\n~r~~h~             light red\n~r~~h~~h~          red pink\n~r~~h~~h~~h~       dark pink\n~r~~h~~h~~h~~h~    light red pink\n~r~~h~~h~~h~~h~~h~ pink\n~g~~h~             light green\n~g~~h~~h~          more light green\n~g~~h~~h~~h~       sea green\n~g~~h~~h~~h~~h~    offwhite\n~b~~h~             blue\n~b~~h~~h~          purplish blue\n~b~~h~~h~~h~       light blue\n~y~~h~~h~          offwhite\n~p~~h~             medium pink\n"})}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"example-1",children:"Example"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-c",children:"~w~Hello this is ~b~blue ~w~and this is ~r~red\n"})}),"\n",(0,l.jsxs)(s.p,{children:["[",(0,l.jsx)(s.img,{src:"https://assets.open.mp/assets/images/colorList/Blueandred.png",alt:"Image.png"})]}),"\n",(0,l.jsxs)(s.p,{children:["Now these colors are pretty dark. You can make them brighter by using ",(0,l.jsx)(s.strong,{children:(0,l.jsx)(s.del,{children:"h"})})," after the color code:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-c",children:"~w~Hello this is ~b~~h~blue ~w~and this is ~r~~h~red\n"})}),"\n",(0,l.jsxs)(s.p,{children:["[",(0,l.jsx)(s.img,{src:"https://assets.open.mp/assets/images/colorList/Blueandred2.png",alt:"Image.png"})]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}}}]);