"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[44384],{6321:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"scripting/language/Style","title":"Ghid de aranjare Pawn","description":"A short guide on the generally accepted naming conventions and other aspects of Pawn source code to aid easier communication of intent and streamline debugging and sharing of code.","source":"@site/i18n/ro/docusaurus-plugin-content-docs/current/scripting/language/Style.md","sourceDirName":"scripting/language","slug":"/scripting/language/Style","permalink":"/ro/docs/scripting/language/Style","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/language/Style.md","tags":[],"version":"current","frontMatter":{"title":"Ghid de aranjare Pawn","sidebar_label":"Ghid de aranjare Pawn","description":"A short guide on the generally accepted naming conventions and other aspects of Pawn source code to aid easier communication of intent and streamline debugging and sharing of code."},"sidebar":"docsSidebar","previous":{"title":"Keywords: Statements","permalink":"/ro/docs/scripting/language/Statements"},"next":{"title":"Scripting: Taguri","permalink":"/ro/docs/scripting/language/Tags"}}');var c=i(74848),r=i(28453);const l={title:"Ghid de aranjare Pawn",sidebar_label:"Ghid de aranjare Pawn",description:"A short guide on the generally accepted naming conventions and other aspects of Pawn source code to aid easier communication of intent and streamline debugging and sharing of code."},s=void 0,t={},d=[{value:"Terminologie",id:"terminologie",level:2},{value:"Declarari",id:"declarari",level:3},{value:"Declara\u021bie compus\u0103",id:"declara\u021bie-compus\u0103",level:3},{value:"Expresie",id:"expresie",level:3},{value:"Instruc\u021biuni",id:"instruc\u021biuni",level:2},{value:"Acoladele",id:"acoladele",level:3},{value:"Comutatoare",id:"comutatoare",level:3},{value:"Declara\u021bii compuse (blocuri)",id:"declara\u021bii-compuse-blocuri",level:3},{value:"Denumirea",id:"denumirea",level:3},{value:"Func\u021bii",id:"func\u021bii",level:4},{value:"Variabile globale",id:"variabile-globale",level:4},{value:"Variabile locale",id:"variabile-locale",level:4},{value:"Enumeratori",id:"enumeratori",level:4},{value:"Macro \u0219i defini\u021bii pre-procesor",id:"macro-\u0219i-defini\u021bii-pre-procesor",level:4},{value:"Documenta\u021bie",id:"documenta\u021bie",level:3}];function o(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"Acest document este un scurt ghid privind conven\u021biile de denumire general acceptate \u0219i alte aspecte ale codului surs\u0103 Pawn pentru a facilita comunicarea inten\u021biei \u0219i a simplifica depanarea \u0219i partajarea codului."}),"\n",(0,c.jsx)(n.p,{children:"Vezi si:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://github.com/Southclaws/sampctl/wiki/Modern-Pawn",children:"Modern Pawn"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://github.com/Southclaws/sampctl/wiki/Packages",children:"Pawn Package"})}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"terminologie",children:"Terminologie"}),"\n",(0,c.jsx)(n.h3,{id:"declarari",children:"Declarari"}),"\n",(0,c.jsx)(n.p,{children:"O declara\u021bie este o bucat\u0103 de cod care spune imperativ programului gazd\u0103 s\u0103 fac\u0103 ceva. O declara\u021bie este o bucat\u0103 de cod valid\u0103 care d\u0103 rezultate."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:"a = b + c;\n"})}),"\n",(0,c.jsx)(n.p,{children:"Aceasta este o declara\u021bie compus\u0103 dintr-o variabil\u0103 c\u0103reia i se atribuie rezultatul unei [#Expression]."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:"SetPlayerColor(playerid, 0xFF4700FF);\n"})}),"\n",(0,c.jsx)(n.p,{children:"Aceasta este o declara\u021bie care spune programului s\u0103 apeleze o func\u021bie cu c\xe2teva argumente."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:"x + 8\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Aceasta ",(0,c.jsx)(n.em,{children:"nu"})," este o declara\u021bie, deoarece rezultatul nu este folosit nic\u0103ieri, acesta este doar un [#Expression]."]}),"\n",(0,c.jsx)(n.h3,{id:"declara\u021bie-compus\u0103",children:"Declara\u021bie compus\u0103"}),"\n",(0,c.jsx)(n.p,{children:"O declara\u021bie compus\u0103 este o colec\u021bie de declara\u021bii \xeenconjurate de paranteze."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:'{\n    new message[] = "hi!";\n    print(message);\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"Aceasta este o afirma\u021bie compus\u0103 compus\u0103 din dou\u0103 afirma\u021bii."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:'if (a == b)\n{\n    print("hello!");\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["Aceasta este o declara\u021bie compus\u0103 cu o condi\u021bie ",(0,c.jsx)(n.code,{children:"if"}),", aceasta este denumit\u0103 de obicei ",(0,c.jsx)(n.code,{children:"o instruc\u021biune if"}),"."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:"return Function1(), Function2(), Function3();\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Aceasta ",(0,c.jsx)(n.em,{children:"nu"})," este o afirma\u021bie compus\u0103, este un lan\u021b de afirma\u021bii separate prin virgule. Aceast\u0103 form\u0103 de declara\u021bii \xeenl\u0103n\u021buite este considerat\u0103 o practic\u0103 proast\u0103."]}),"\n",(0,c.jsx)(n.h3,{id:"expresie",children:"Expresie"}),"\n",(0,c.jsx)(n.p,{children:"O expresie este o bucat\u0103 de sintax\u0103 care produce o valoare, nu este o declara\u021bie valid\u0103 dec\xe2t dac\u0103 valoarea ob\u021binut\u0103 este utilizat\u0103 \xeentr-un fel."}),"\n",(0,c.jsx)(n.p,{children:"Expresiile sunt adesea compuse pentru a forma enun\u021buri."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:"a + b\n"})}),"\n",(0,c.jsx)(n.p,{children:"Aceasta este o expresie simpl\u0103 de ad\u0103ugare care ia dou\u0103 valori \u0219i le aplic\u0103 operatorul de ad\u0103ugare."}),"\n",(0,c.jsx)(n.h2,{id:"instruc\u021biuni",children:"Instruc\u021biuni"}),"\n",(0,c.jsx)(n.h3,{id:"acoladele",children:"Acoladele"}),"\n",(0,c.jsx)(n.p,{children:"Acoladele Allman sunt preferate:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-pawn",children:"function()\n{\n    //\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"Cu toate acestea, dac\u0103 nu pute\u021bi scutura memoria muscular\u0103, acoladele K&R sunt valabile \u0219i pe pawno:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-pawn",children:"function() {\n    //\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"comutatoare",children:"Comutatoare"}),"\n",(0,c.jsxs)(n.p,{children:["Comutatoarele trebuie s\u0103 utilizeze dou\u0103 niveluri de indentare, unul pentru blocul ",(0,c.jsx)(n.code,{children:"switch"})," \u0219i altul pentru fiecare instruc\u021biune ",(0,c.jsx)(n.code,{children:"case"})," sau instruc\u021biune compus\u0103."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-pawn",children:"switch (variable)\n{\n    case 0:\n        return 0;\n    case 1:\n        return 1;\n    case 2:\n        return 2;\n    default:\n        return -1;\n}\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-pawn",children:"switch (variable)\n{\n    case 0:\n    {\n        // code...\n        return 0;\n    }\n    case 1:\n    {\n        // code...\n        return 1;\n    }\n    case 2:\n    {\n        // code...\n        return 2;\n    }\n    default:\n    {\n        // code...\n        return -1;\n    }\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"declara\u021bii-compuse-blocuri",children:"Declara\u021bii compuse (blocuri)"}),"\n",(0,c.jsx)(n.p,{children:"Blocurile trebuie s\u0103 utilizeze \xeentotdeauna paranteze, chiar dac\u0103 exist\u0103 doar o singur\u0103 linie de cod \xeentr-un bloc. Acest lucru se aplic\u0103 tuturor nivelurilor, inclusiv func\u021biilor."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-pawn",children:"func()\n{\n    singleLineExpr();\n}\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-pawn",children:"func()\n{\n    if ()\n    {\n        singleLineExpr();\n    }\n}\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-pawn",children:"func()\n{\n    if ()\n    {\n        singleLineExpr();\n    }\n    else if ()\n    {\n        //\n    }\n    else\n    {\n        //\n    }\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"denumirea",children:"Denumirea"}),"\n",(0,c.jsx)(n.h4,{id:"func\u021bii",children:"Func\u021bii"}),"\n",(0,c.jsxs)(n.p,{children:["Func\u021biile trebuie denumite cu ",(0,c.jsx)(n.code,{children:"PascalCase"}),"."]}),"\n",(0,c.jsx)(n.h4,{id:"variabile-globale",children:"Variabile globale"}),"\n",(0,c.jsxs)(n.p,{children:["Variabilele globale trebuie s\u0103 utilizeze \xeentotdeauna PascalCase cu prefixul ",(0,c.jsx)(n.code,{children:"g"}),", deci ",(0,c.jsx)(n.code,{children:"gVariableName"})," \u0219i, \xeen general, trebuie s\u0103 fie \xeentotdeauna ",(0,c.jsx)(n.code,{children:"static"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["Globele constante trebuie s\u0103 utilizeze ",(0,c.jsx)(n.code,{children:"SCREAMING_SNAKE_CASE"}),"."]}),"\n",(0,c.jsx)(n.h4,{id:"variabile-locale",children:"Variabile locale"}),"\n",(0,c.jsxs)(n.p,{children:["Variabilele locale trebuie s\u0103 utilizeze \xeentotdeauna ",(0,c.jsx)(n.code,{children:"camelCase"})," \u0219i nu trebuie s\u0103 utilizeze niciodat\u0103 nume de litere, cu excep\u021bia:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"i"}),",",(0,c.jsx)(n.code,{children:"j"}),", ",(0,c.jsx)(n.code,{children:"k"}),", etc \xeen buclele ",(0,c.jsx)(n.code,{children:"for"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"x"}),",",(0,c.jsx)(n.code,{children:"y"}),", ",(0,c.jsx)(n.code,{children:"z"}),", etc \xeen contexte matematice"]}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"enumeratori",children:"Enumeratori"}),"\n",(0,c.jsxs)(n.p,{children:["Enumeratorii, dac\u0103 sunt numi\u021bi, trebuie s\u0103 fie prefixa\u021bi cu ",(0,c.jsx)(n.code,{children:"E_"})," \u0219i s\u0103 utilizeze ",(0,c.jsx)(n.code,{children:"SCREAMING_SNAKE_CASE"}),". Singura excep\u021bie este atunci c\xe2nd se evit\u0103 avertismentul ",(0,c.jsx)(n.code,{children:"Indisponibilitate a etichetei"}),", caz \xeen care se poate utiliza un prefix ",(0,c.jsx)(n.code,{children:"e_"}),". ",(0,c.jsx)(n.code,{children:"SCREAMING_SNAKE_CASE"})," trebuie s\u0103 fie folosit \xeen continuare chiar \u0219i cu prefixul minuscul ",(0,c.jsx)(n.code,{children:"e_"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["C\xe2mpurile Enumerator trebuie s\u0103 fie, de asemenea, ",(0,c.jsx)(n.code,{children:"SCREAMING_SNAKE_CASE"})," \u0219i s\u0103 utilizeze numele Enumeratorului ca prefix."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-pawn",children:"static enum E_PLAYER {\n    E_PLAYER_CASH,\n    Float:E_PLAYER_HEALTH,\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"To avoid index tag warnings in some cases:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-pawn",children:"static enum e_PLAYER {\n    e_PLAYER_CASH,\n    Float:e_PLAYER_HEALTH,\n}\n"})}),"\n",(0,c.jsx)(n.h4,{id:"macro-\u0219i-defini\u021bii-pre-procesor",children:"Macro \u0219i defini\u021bii pre-procesor"}),"\n",(0,c.jsxs)(n.p,{children:["Macrocomenzile trebuie s\u0103 utilizeze \xeentotdeauna ",(0,c.jsx)(n.code,{children:"SCREAMING_SNAKE_CASE"}),", indiferent de utilizarea lor."]}),"\n",(0,c.jsxs)(n.p,{children:["Defini\u021biile pre-procesorului (defini\u021bii constante) trebuie s\u0103 utilizeze, de asemenea, ",(0,c.jsx)(n.code,{children:"SCREAMING_SNAKE_CASE"}),"."]}),"\n",(0,c.jsx)(n.p,{children:"Acest lucru ajut\u0103 la diferen\u021bierea \xeentre variabile \u0219i constante, precum \u0219i func\u021bii \u0219i macrocomenzi."}),"\n",(0,c.jsx)(n.p,{children:"\xcen general, este recomandat s\u0103 evita\u021bi inventarea de noi elemente sintactice pentru a preveni confuzia \xeentre noii veni\u021bi cu privire la ce cuvinte fac parte din limbaj \u0219i care cuvinte provin din biblioteci."}),"\n",(0,c.jsx)(n.p,{children:"Cu toate acestea, unele biblioteci mai vechi fac acest lucru \u0219i nu se pot schimba din cauza compatibilit\u0103\u021bii \xeenapoi."}),"\n",(0,c.jsx)(n.h3,{id:"documenta\u021bie",children:"Documenta\u021bie"}),"\n",(0,c.jsxs)(n.p,{children:["Documenta\u021bi \xeentotdeauna func\u021biile exportate cu un comentariu de linie simplu \xeen formatul ",(0,c.jsx)(n.code,{children:"// FunctionName face X, Y \u0219i Z \u0219i returneaz\u0103 A"})," unde primul cuv\xe2nt este numele func\u021biei \xeen sine urmat de o scurt\u0103 descriere a ceea ce face. Nu este nevoie s\u0103 pierde\u021bi timpul descriind fiecare parametru individual. De exemplu:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-pawn",children:"// LoadPlayerAccount is called to initiate the account load process. This\n// function will trigger HTTP calls to get player data, it will display dialogs\n// to the player and eventually, once the process has completed, the event\n// `OnPlayerLogin` is emitted on success. On failure, the player is kicked.\nstock Error:LoadPlayerAccount(playerid)\n{\n    // code...\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Fiecare pachet ar trebui s\u0103 aib\u0103 un ",(0,c.jsx)(n.code,{children:"README.md"})," \u0219i, dac\u0103 este necesar, fiecare modul ar trebui s\u0103 aib\u0103 un comentariu pe prima linie care s\u0103 descrie ce ofer\u0103 acel modul."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>s});var a=i(96540);const c={},r=a.createContext(c);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);