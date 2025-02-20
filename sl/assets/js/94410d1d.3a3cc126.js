"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[7778],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}},86861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tutorials/MenuGuide","title":"Menu Guide","description":"A short tutorial that explains how to use the menu system of the game. This menu system is different to SA-MP dialogs and better reflects the traditional UI of the original game.","source":"@site/docs/tutorials/MenuGuide.md","sourceDirName":"tutorials","slug":"/tutorials/MenuGuide","permalink":"/sl/docs/tutorials/MenuGuide","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/tutorials/MenuGuide.md","tags":[],"version":"current","frontMatter":{"title":"Menu Guide","sidebar_label":"Menu Guide"},"sidebar":"docsSidebar","previous":{"title":"Binary","permalink":"/sl/docs/tutorials/Binary"},"next":{"title":"Pickup Guide","permalink":"/sl/docs/tutorials/PickupGuide"}}');var r=n(74848),i=n(28453);const o={title:"Menu Guide",sidebar_label:"Menu Guide"},l=void 0,a={},d=[{value:"Menus in SA-MP",id:"menus-in-sa-mp",level:2},{value:"First menu steps",id:"first-menu-steps",level:2},{value:"Add some menu items",id:"add-some-menu-items",level:2},{value:"Creating the effects for the items",id:"creating-the-effects-for-the-items",level:2},{value:"Last steps",id:"last-steps",level:2},{value:"Last words",id:"last-words",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"A short tutorial that explains how to use the menu system of the game. This menu system is different to SA-MP dialogs and better reflects the traditional UI of the original game."}),"\n",(0,r.jsx)(t.h2,{id:"menus-in-sa-mp",children:"Menus in SA-MP"}),"\n",(0,r.jsx)(t.p,{children:"Menus look very complicated and difficult to script for the most players, although it isn't. Here I will show you how to create a simple menu. At the end we will have created a teleport menu."}),"\n",(0,r.jsx)(t.h2,{id:"first-menu-steps",children:"First menu steps"}),"\n",(0,r.jsxs)(t.p,{children:["First we have to create a menu. The prefix before is ",(0,r.jsx)(t.code,{children:"Menu:"})," this makes the variable the correct ",(0,r.jsx)(t.a,{href:"../scripting/language/Tags",children:"tag"}),". There are different types for different uses such as ",(0,r.jsx)(t.code,{children:"Float:"})," ",(0,r.jsx)(t.code,{children:"bool:"})," ",(0,r.jsx)(t.code,{children:"Text3D:"})," etc. Write the following code near the top of your script:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-pawn",children:"new Menu:teleportmenu;\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Okay, we created the variable to store the menu. Now we have to create the menu and assign the variable we created to the menu. Type this into ",(0,r.jsx)(t.code,{children:"OnGameModeInit"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-pawn",children:'teleportmenu = CreateMenu("Teleportmenu", 2, 200.0, 100.0, 150.0, 150.0);\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Now a bit of an explanation about the ",(0,r.jsx)(t.a,{href:"../scripting/functions/CreateMenu",children:"CreateMenu"})," arguments."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Specifies"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"title"}),(0,r.jsx)(t.td,{children:"The heading of the menu"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"columns"}),(0,r.jsx)(t.td,{children:"The number here defines how much columns are used (2 is maximum)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":x"]}),(0,r.jsx)(t.td,{children:"The heigth position of the menu on screen (left to right)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":y"]}),(0,r.jsx)(t.td,{children:"The width position of the menu on screen (up and down)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":col1width"]}),(0,r.jsx)(t.td,{children:"The width of the first column"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":col2width"]}),(0,r.jsx)(t.td,{children:"The width of the second column"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"add-some-menu-items",children:"Add some menu items"}),"\n",(0,r.jsxs)(t.p,{children:["Ok, now we've got the Menu, but we need some items, under which you can choose in the menu. You add them underneath the ",(0,r.jsx)(t.code,{children:"CreateMenu"})," that we made earlier."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-pawn",children:'AddMenuItem(teleportmenu, 0, "LS");\nAddMenuItem(teleportmenu, 0, "LS");\nAddMenuItem(teleportmenu, 0, "SF");\nAddMenuItem(teleportmenu, 0, "SF");\nAddMenuItem(teleportmenu, 0, "LV");\nAddMenuItem(teleportmenu, 0, "LV");\n\xa0\nAddMenuItem(teleportmenu, 1, "Grove Street");\nAddMenuItem(teleportmenu, 1, "Starfish Tower");\nAddMenuItem(teleportmenu, 1, "Wheel Arch Angels");\nAddMenuItem(teleportmenu, 1, "Jizzys");\nAddMenuItem(teleportmenu, 1, "4 Dragons");\nAddMenuItem(teleportmenu, 1, "Come-a-Lot");\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The explanation for ",(0,r.jsx)(t.a,{href:"../scripting/functions/AddMenuItem",children:"AddMenuItem"}),":"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"menuid"}),(0,r.jsx)(t.th,{children:"The menuid of the menu where the item shall be displayed"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"column"}),(0,r.jsx)(t.td,{children:"The column in which the item shall be shown"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"text"}),(0,r.jsx)(t.td,{children:"The text of the item"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"creating-the-effects-for-the-items",children:"Creating the effects for the items"}),"\n",(0,r.jsxs)(t.p,{children:["Okay, now that we have created a full menu with items what should happen when you choose an item? In our example we want to make a teleportmenu, so we should get teleported to the position we choose. When a player selects an item on a menu the script calls the callback ",(0,r.jsx)(t.a,{href:"../scripting/callbacks/OnPlayerSelectedMenuRow",children:"OnPlayerSelectedMenuRow"}),". The best way to do it is to do it with a switch, this is like several if statements to check if a variable is worth certain values. But first we only want these effects for the menu we want so we need to create a variable that holds what menu the player is looking at, this is done with ",(0,r.jsx)(t.code,{children:"GetPlayerMenu"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-pawn",children:"new Menu:CurrentMenu = GetPlayerMenu(playerid);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Now, when somebody selects something on the menu, their menuid will be saved in ",(0,r.jsx)(t.code,{children:"CurrentMenu"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Now we have to check that the menu they selected on is the menu we want:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-pawn",children:"public OnPlayerSelectedMenuRow(playerid, row)\n{\n    new Menu:CurrentMenu = GetPlayerMenu(playerid);\n    if (CurrentMenu == teleportmenu)\n    {\n        //stuff\n    }\n    return 1;\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Now in between these brackets is where the ",(0,r.jsx)(t.code,{children:"switch"})," is, this checks what item the player selected or ",(0,r.jsx)(t.code,{children:"row"})," this can be done with ",(0,r.jsx)(t.code,{children:"if"})," statements checking what ",(0,r.jsx)(t.code,{children:"row"})," it is, but the ",(0,r.jsx)(t.code,{children:"switch"})," is a much simpler way of writing it."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-pawn",children:'if(CurrentMenu == teleportmenu)\n{\n    switch(row)\n    {\n        case 0: //Grove Street\n        {\n            SetPlayerPos(playerid, 2493.9133, -1682.3986, 13.3382);\n            SetPlayerInterior(playerid, 0);\n            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to Grove Street");\n        }\n        case 1: //Starfish Tower\n        {\n            SetPlayerPos(playerid, 1541.2833, -1362.4741, 329.6457);\n            SetPlayerInterior(playerid, 0);\n            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to the top of Starfish Tower");\n        }\n        case 2: //Wheel Arch Angels\n        {\n            SetPlayerPos(playerid, -2705.5503, 206.1621, 4.1797);\n            SetPlayerInterior(playerid, 0);\n            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to the Wheel Arch Angels tuning-shop");\n        }\n        case 3: //Jizzys\n        {\n            SetPlayerPos(playerid, -2617.5156, 1390.6353, 7.1105);\n            SetPlayerInterior(playerid, 0);\n            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to Jizzy\'s Nightclub!");\n        }\n        case 4: //4Dragons\n        {\n            SetPlayerPos(playerid, 2028.5538, 1008.3543, 10.8203);\n            SetPlayerInterior(playerid, 0);\n            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to the Four Dragons Casino");\n        }\n        case 5: //Come-a-Lot\n        {\n            SetPlayerPos(playerid, 2169.1838, 1122.5426, 12.6107);\n            SetPlayerInterior(playerid, 0);\n            SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to the Come-a-Lot casino!");\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"last-steps",children:"Last steps"}),"\n",(0,r.jsxs)(t.p,{children:["Now we need a command to show the menu. This is the easiest step. Just a comparison with ",(0,r.jsx)(t.code,{children:"strcmp"})," and a ",(0,r.jsx)(t.code,{children:"ShowMenuForPlayer"}),". This is done in ",(0,r.jsx)(t.code,{children:"OnPlayerCommandText"}),". Or, if you have a command processor already, use that instead to call ",(0,r.jsx)(t.code,{children:"ShowMenuForPlayer"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-pawn",children:'if(strcmp(cmdtext, "/teleport", true) == 0)\n{\n    ShowMenuForPlayer(teleportmenu,playerid);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Really easy, wasn't it?"}),"\n",(0,r.jsx)(t.h2,{id:"last-words",children:"Last words"}),"\n",(0,r.jsx)(t.p,{children:"Okay, after you read this AND understood it, try your own menu. As you could see, it isn't that difficult, but will impress the players on your server all the more. And you can script really cool effects with this. It's also very cool for general stores or supermarkets for the things you can buy. Then you can subtract some money as effect and the price is shown in another column in the menu. But now, work on your own."}),"\n",(0,r.jsxs)(t.p,{children:["You can also add ",(0,r.jsx)(t.a,{href:"../scripting/functions/TogglePlayerControllable",children:"TogglePlayerControllable"})," with ",(0,r.jsx)(t.code,{children:"false"})," after ",(0,r.jsx)(t.code,{children:"ShowPlayerMenu"})," and ",(0,r.jsx)(t.a,{href:"../scripting/functions/TogglePlayerControllable",children:"TogglePlayerControllable"})," with ",(0,r.jsx)(t.code,{children:"true"})," at end of ",(0,r.jsx)(t.code,{children:"OnPlayerSelectedMenuRow"})," so that player may not move while they are browsing menus."]}),"\n",(0,r.jsx)(t.p,{children:"I hope you learned something from this tutorial. If you have any questions, ask in the forums/discord."})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);