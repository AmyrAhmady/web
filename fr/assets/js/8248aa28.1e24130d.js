"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[20253],{28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}},44358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/SetPlayerName","title":"SetPlayerName","description":"Sets the name of a player.","source":"@site/docs/scripting/functions/SetPlayerName.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerName","permalink":"/fr/docs/scripting/functions/SetPlayerName","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerName.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerName","sidebar_label":"SetPlayerName","description":"Sets the name of a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerMarkerForPlayer","permalink":"/fr/docs/scripting/functions/SetPlayerMarkerForPlayer"},"next":{"title":"SetPlayerObjectMaterial","permalink":"/fr/docs/scripting/functions/SetPlayerObjectMaterial"}}');var a=t(74848),s=t(28453);const i={title:"SetPlayerName",sidebar_label:"SetPlayerName",description:"Sets the name of a player.",tags:["player"]},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Sets the name of a player."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"playerid"}),(0,a.jsx)(n.td,{children:"The ID of the player to set the name of."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"const name[]"}),(0,a.jsx)(n.td,{children:"The name to set. Must be 1-24 characters long and only contain valid characters (0-9, a-z, A-Z, [], (), $ @ . _ and = only)."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"1"})," The name was changed successfully"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"0"})," The player is not connected or the name is already in use"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"-1"})," The name can not be changed (it's less than 3 symbols, too long or has invalid characters)"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'// Command simply sets the player\'s name to to "Superman" if possible, with no error checking or messages.\nif (strcmp(cmdtext, "/superman", true) == 0)\n{\n    SetPlayerName(playerid, "Superman");\n    return 1;\n}\n\n// Command sets the players name to "Superman" if possible, informs the player of\n// any errors using a "switch" statement.\nif (strcmp(cmdtext, "/superman", true) == 0)\n{\n    switch (SetPlayerName(playerid, "Superman"))\n    {\n        case -1:\n        {\n            SendClientMessage(playerid, 0xFF0000FF, "The name has invalid characters or it\'s out of length.");\n        }\n        case 0:\n        {\n            SendClientMessage(playerid, 0xFF0000FF, "Unable to change your name, someone else is known as \'Superman\' already.");\n        }\n        case 1:\n        {\n            SendClientMessage(playerid, 0x00FF00FF, "You are now known as \'Superman\'");\n        }\n    }\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'Changing the players\' name to the same name but with different character cases (e.g. "John" to "JOHN") will not work.'}),"\n",(0,a.jsxs)(n.li,{children:["If used in ",(0,a.jsx)(n.a,{href:"../callbacks/OnPlayerConnect",children:"OnPlayerConnect"}),", the new name will not be shown for the connecting player."]}),"\n",(0,a.jsx)(n.li,{children:"Passing a null string as the new name will crash the server. (Fixed in open.mp)"}),"\n",(0,a.jsx)(n.li,{children:"Player names can be up to 24 characters when using this function, but when joining the server from the SA-MP server browser, players' names must be no more than 20 and less than 3 characters (the server will deny entry). This allows for 4 characters extra when using SetPlayerName."}),"\n"]})}),"\n",(0,a.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GetPlayerName",children:"GetPlayerName"}),": Get a player's name."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"IsValidNickName",children:"IsValidNickName"}),": Checks if a nick name is valid."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"AllowNickNameCharacter",children:"AllowNickNameCharacter"}),": Allows a character to be used in the nick name."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);