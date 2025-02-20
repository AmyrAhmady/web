"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[83463],{25612:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"scripting/functions/ShowPlayerDialog","title":"ShowPlayerDialog","description":"Shows the player a synchronous (only one at a time) dialog box.","source":"@site/docs/scripting/functions/ShowPlayerDialog.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ShowPlayerDialog","permalink":"/docs/scripting/functions/ShowPlayerDialog","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/ShowPlayerDialog.md","tags":[{"inline":true,"label":"player","permalink":"/docs/tags/player"},{"inline":true,"label":"dialog","permalink":"/docs/tags/dialog"}],"version":"current","frontMatter":{"title":"ShowPlayerDialog","sidebar_label":"ShowPlayerDialog","description":"Shows the player a synchronous (only one at a time) dialog box.","tags":["player","dialog"]},"sidebar":"docsSidebar","previous":{"title":"ShowPickupForPlayer","permalink":"/docs/scripting/functions/ShowPickupForPlayer"},"next":{"title":"ShowPlayerMarkers","permalink":"/docs/scripting/functions/ShowPlayerMarkers"}}');var o=t(74848),i=t(28453);const s={title:"ShowPlayerDialog",sidebar_label:"ShowPlayerDialog",description:"Shows the player a synchronous (only one at a time) dialog box.",tags:["player","dialog"]},r=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"Shows the player a synchronous (only one at a time) dialog box."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"playerid"}),(0,o.jsx)(n.td,{children:"The ID of the player to show the dialog to."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"dialogid"}),(0,o.jsx)(n.td,{children:"An ID to assign this dialog to, so responses can be processed. Max dialogid is 32767. Using negative values will close any open dialog."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:["DIALOG_STYLE",":style"]}),(0,o.jsxs)(n.td,{children:["The ",(0,o.jsx)(n.a,{href:"../resources/dialogstyles",children:"style"})," of the dialog."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"const title[]"}),(0,o.jsx)(n.td,{children:"The title at the top of the dialog. The length of the caption can not exceed more than 64 characters before it starts to cut off."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"const body[]"}),(0,o.jsx)(n.td,{children:"The text to display in the main dialog. Use \\n to start a new line and \\t to tabulate."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"const button1[]"}),(0,o.jsx)(n.td,{children:"The text on the left button."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"const button2[]"}),(0,o.jsx)(n.td,{children:'The text on the right button. Leave it blank ( "" ) to hide it.'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"OPEN_MP_TAGS:..."}),(0,o.jsx)(n.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"false"})," - The function failed to execute. This means the player is not connected."]}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:'// Define the dialog IDs either with an enum:\nenum\n{\n    DIALOG_NULL,\n    DIALOG_LOGIN,\n    DIALOG_WELCOME,\n    DIALOG_WEAPONS\n}\n\n// Alternatively, using macros:\n#define DIALOG_NULL 0\n#define DIALOG_LOGIN 1\n#define DIALOG_WELCOME 2\n#define DIALOG_WEAPONS 3\n\n// Enums are recommended, as you don\'t have to keep track of used IDs. However, enums use memory to store the defines, whereas defines are processed in the \'pre-processor\' (compiling) stage.\n\n// Example for DIALOG_STYLE_MSGBOX:\nShowPlayerDialog(playerid, DIALOG_WELCOME, DIALOG_STYLE_MSGBOX, "Notice", "You are connected to the server", "Close", "");\n\n// Example for DIALOG_STYLE_INPUT:\nShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Enter your password below:", "Login", "Cancel");\n\n// Example for DIALOG_STYLE_LIST:\nShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons", "AK47\\nM4\\nSniper Rifle", "Option 1", "Option 2");\n\n// Example for DIALOG_STYLE_PASSWORD:\nShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_PASSWORD, "Login", "Enter your password below:", "Login", "Cancel");\n\n// Example for DIALOG_STYLE_TABLIST:\nShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST, "Buy Weapon", "Deagle\\t$5000\\t100\\nSawnoff\\t$5000\\t100\\nPistol\\t$1000\\t50", "Select", "Cancel");\n\n// Example for DIALOG_STYLE_TABLIST_HEADERS:\nShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST_HEADERS, "Buy Weapon", "Weapon\\tPrice\\tAmmo\\nDeagle\\t$5000\\t100\\nSawnoff\\t$5000\\t100\\nPistol\\t$1000\\t50", "Select", "Cancel");\n'})}),"\n",(0,o.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"It is recommended to use enumerations (see above) or definitions (#define) to determine which IDs dialogs have, to avoid confusion in the future. You should never use literal numbers for IDs - it gets confusing."})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Use color embedding for multiple colors in the text."}),"\n",(0,o.jsxs)(n.li,{children:["Using ",(0,o.jsx)(n.strong,{children:"-1"})," as dialogid closes all dialogs currently shown on the client's screen or you can use ",(0,o.jsx)(n.a,{href:"HidePlayerDialog",children:"HidePlayerDialog"})," function."]}),"\n"]})}),"\n",(0,o.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GetPlayerDialogID",children:"GetPlayerDialogID"}),": Get the ID of the dialog currently show to the player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GetPlayerDialogData",children:"GetPlayerDialogData"}),": Get the data of the dialog currently show to the player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"HidePlayerDialog",children:"HidePlayerDialog"}),": Hides the dialog currently show to the player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": Show a textdraw for a certain player."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"../callbacks/OnDialogResponse",children:"OnDialogResponse"}),": Called when a player responds to a dialog."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../resources/dialogstyles",children:"Dialog Style"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../resources/escapecodes",children:"Escape Codes"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var l=t(96540);const o={},i=l.createContext(o);function s(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);