"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[62016],{19940:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"scripting/callbacks/OnDialogResponse","title":"OnDialogResponse","description":"Acest callback este apelat atunci c\xe2nd un juc\u0103tor r\u0103spunde unui dialog afi\u0219at prin ShowPlayerDialog, dup\u0103 ap\u0103sarea unui buton, ap\u0103sarea de ENTER/ESC sau dublu-click pe un element al unei liste (dac\u0103 s-a folosit un dialog de tip list\u0103).","source":"@site/i18n/ro/docusaurus-plugin-content-docs/current/scripting/callbacks/OnDialogResponse.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnDialogResponse","permalink":"/ro/docs/scripting/callbacks/OnDialogResponse","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnDialogResponse.md","tags":[],"version":"current","frontMatter":{"title":"OnDialogResponse","sidebar_label":"OnDialogResponse","description":"Acest callback este apelat atunci c\xe2nd un juc\u0103tor r\u0103spunde unui dialog afi\u0219at prin ShowPlayerDialog, dup\u0103 ap\u0103sarea unui buton, ap\u0103sarea de ENTER/ESC sau dublu-click pe un element al unei liste (dac\u0103 s-a folosit un dialog de tip list\u0103).","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnClientMessage","permalink":"/ro/docs/scripting/callbacks/OnClientMessage"},"next":{"title":"OnEnterExitModShop","permalink":"/ro/docs/scripting/callbacks/OnEnterExitModShop"}}');var t=i(74848),l=i(28453);const r={title:"OnDialogResponse",sidebar_label:"OnDialogResponse",description:"Acest callback este apelat atunci c\xe2nd un juc\u0103tor r\u0103spunde unui dialog afi\u0219at prin ShowPlayerDialog, dup\u0103 ap\u0103sarea unui buton, ap\u0103sarea de ENTER/ESC sau dublu-click pe un element al unei liste (dac\u0103 s-a folosit un dialog de tip list\u0103).",tags:[]},s=void 0,o={},d=[{value:"Descriere",id:"descriere",level:2},{value:"Return\u0103ri",id:"return\u0103ri",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Note",id:"note",level:2},{value:"Func\u021bii asociate",id:"func\u021bii-asociate",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"descriere",children:"Descriere"}),"\n",(0,t.jsx)(n.p,{children:"Acest callback este apelat c\xe2nd un juc\u0103tor r\u0103spunde unui dialog afi\u0219at prin ShowPlayerDialog, dup\u0103 ap\u0103sarea unui buton, ap\u0103sarea de ENTER/ESC sau dublu-click pe un element al unei liste (dac\u0103 s-a folosit un dialog de tip list\u0103)."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Nume"}),(0,t.jsx)(n.th,{children:"Descriere"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"ID-ul juc\u0103torului care a r\u0103spuns dialogului."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dialogid"}),(0,t.jsx)(n.td,{children:"ID-ul dialogului c\u0103ruia juc\u0103torul i-a r\u0103spuns, atribuit \xeen ShowPlayerDialog."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"response"}),(0,t.jsx)(n.td,{children:"1 pentru butonul din st\xe2nga, 0 pentru butonul din dreapta (dac\u0103 numai un buton este afi\u0219at atunci mereu 1)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"listitem"}),(0,t.jsx)(n.td,{children:"ID-ul elementului din list\u0103 selectat (\xeencepe de la 0) (doar dac\u0103 s-a folosit un dialog de tip list\u0103, altfel va fi mereu -1)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"inputtext[]"}),(0,t.jsx)(n.td,{children:"Textul inserat de c\u0103tre juc\u0103tor \xeen c\u0103su\u021ba de intrare, sau textul elementului din list\u0103 selectat."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"return\u0103ri",children:"Return\u0103ri"}),"\n",(0,t.jsx)(n.p,{children:"Mereu este apelat primul \xeen filterscript-uri deci returneaz\u0103 1 \u0219i blocheaz\u0103 alte filterscript-uri din a vedea r\u0103spunsul."}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'// Definim ID-ul dialogului pentru a putea prelucra r\u0103spunsurile\n#define DIALOG_RULES 1\n\n// \xcen ceva comand\u0103\nShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "Regulile server-ului", "- F\u0103r\u0103 coduri\\n- F\u0103r\u0103 spam\\n- Respecta\u021bi Adminii\\n\\nE\u0219ti de acord cu aces te reguli?", "Da", "Nu");\n\npublic OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])\n{\n    if (dialogid == DIALOG_RULES)\n    {\n        if (response) // Dac\u0103 au ap\u0103sat pe \'Da\' sau au ap\u0103sat ENTER\n        {\n            SendClientMessage(playerid, COLOR_GREEN, "Mul\u021bumim pentru c\u0103 ai acceptat regulile!");\n        }\n        else // Au ap\u0103sat ESC sau \'Nu\'\n        {\n            Kick(playerid);\n        }\n        return 1; // Am folosit un dialog, deci return\u0103m 1. La fel ca OnPlayerCommandText.\n    }\n\n    return 0; // TREBUIE s\u0103 returnezi 0 aici! La fel ca OnPlayerCommandText.\n}\n#define DIALOG_LOGIN 2\n\n// \xcen ceva comand\u0103\nShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Introdu parola:", "Login", "Cancel");\n\npublic OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])\n{\n    if (dialogid == DIALOG_LOGIN)\n    {\n        if (!response) // Dac\u0103 au ap\u0103sat pe butonul de \'Cancel\' sau ESC\n        {\n            Kick(playerid);\n        }\n        else // Dac\u0103 au ap\u0103sat ENTER sau pe butonul de \'Login\'\n        {\n            if (CheckPassword(playerid, inputtext))\n            {\n                SendClientMessage(playerid, COLOR_RED, "Ai fost autentificat cu success!");\n            }\n            else\n            {\n                SendClientMessage(playerid, COLOR_RED, "LOGIN FAILED.");\n\n                // Arat\u0103 din nou dialogul de login\n                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Introdu parola:", "Login", "Cancel");\n            }\n        }\n        return 1; // Am folosit un dialog, deci return\u0103m 1. La fel ca OnPlayerCommandText.\n    }\n\n    return 0; // TREBUIE s\u0103 returnezi 0 aici! La fel ca OnPlayerCommandText.\n}\n#define DIALOG_WEAPONS 3\n\n// \xcen ceva comand\u0103\nShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons", "Desert Eagle\\nAK-47\\nCombat Shotgun", "Select", "Close");\n\npublic OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])\n{\n    if (dialogid == DIALOG_WEAPONS)\n    {\n        if (response) // Dac\u0103 au ap\u0103sat pe butonul de \'Select\' or sau au dat dublu-click pe o arm\u0103\n        {\n            // Give them the weapon\n            switch(listitem)\n            {\n                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // Le d\u0103m desert eagle\n                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Le d\u0103m un AK-47\n                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // Le d\u0103m un Combat Shotgun\n            }\n        }\n        return 1; // Am folosit un dialog, deci return\u0103m 1. La fel ca OnPlayerCommandText.\n    }\n\n    return 0; // TREBUIE s\u0103 returnezi 0 aici! La fel ca OnPlayerCommandText.\n}\n#define DIALOG_WEAPONS 3\n\n// \xcen ceva comand\u0103\nShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons",\n"Weapon\\tAmmo\\tPrice\\n\\\nM4\\t120\\t500\\n\\\nMP5\\t90\\t350\\n\\\nAK-47\\t120\\t400",\n"Select", "Close");\n\npublic OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])\n{\n    if (dialogid == DIALOG_WEAPONS)\n    {\n        if (response) // Dac\u0103 au ap\u0103sat pe butonul de \'Select\' or sau au dat dublu-click pe o arm\u0103\n        {\n            // Give them the weapon\n            switch(listitem)\n            {\n                case 0: GivePlayerWeapon(playerid, WEAPON_M4, 120); // Give them an M4\n                case 1: GivePlayerWeapon(playerid, WEAPON_MP5, 90); // Give them an MP5\n                case 2: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // Give them an AK-47\n            }\n        }\n        return 1; // We handled a dialog, so return 1. Just like OnPlayerCommandText.\n    }\n\n    return 0; // You MUST return 0 here! Just like OnPlayerCommandText.\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Parametrii pot con\u021bine diferite valori, pe baza stilului dialogului (",(0,t.jsx)(n.a,{href:"../resources/dialogstyles.md",children:"click pentru mai multe exemple"}),")."]})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Ar fi frumos s\u0103 folose\u0219ti switch prin dialogids, dac\u0103 ai o gr\u0103mad\u0103."})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:'Un dialog al unui juc\u0103tor nu se ascunde c\xe2nd gamemode-ul se restarteaz\u0103, cauz\xe2nd serverul s\u0103 printeze "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn\'t match last sent dialog ID" dac\u0103 un juc\u0103tor a r\u0103spuns acestui dialog dup\u0103 restart.'})}),"\n",(0,t.jsx)(n.h2,{id:"func\u021bii-asociate",children:"Func\u021bii asociate"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/ro/docs/scripting/functions/ShowPlayerDialog",children:"ShowPlayerDialog"}),": Afi\u0219eaz\u0103 un dialog unui juc\u0103tor."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var a=i(96540);const t={},l=a.createContext(t);function r(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);