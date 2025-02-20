"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[84631],{28453:(e,t,a)=>{a.d(t,{R:()=>c,x:()=>i});var r=a(96540);const n={},l=r.createContext(n);function c(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(l.Provider,{value:t},e.children)}},67834:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>o,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/callbacks/OnPlayerClickTextDraw","title":"OnPlayerClickTextDraw","description":"Acest callback este apelat atunci c\xe2nd un juc\u0103tor face clic pe un textdraw sau anuleaz\u0103 modul de selectare cu tasta ESC.","source":"@site/i18n/ro/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerClickTextDraw.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerClickTextDraw","permalink":"/ro/docs/scripting/callbacks/OnPlayerClickTextDraw","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerClickTextDraw.md","tags":[{"inline":true,"label":"player","permalink":"/ro/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/ro/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"OnPlayerClickTextDraw","sidebar_label":"OnPlayerClickTextDraw","description":"Acest callback este apelat atunci c\xe2nd un juc\u0103tor face clic pe un textdraw sau anuleaz\u0103 modul de selectare cu tasta ESC.","tags":["player","textdraw"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerClickPlayerTextDraw","permalink":"/ro/docs/scripting/callbacks/OnPlayerClickPlayerTextDraw"},"next":{"title":"OnPlayerCommandText","permalink":"/ro/docs/scripting/callbacks/OnPlayerCommandText"}}');var n=a(74848),l=a(28453);const c={title:"OnPlayerClickTextDraw",sidebar_label:"OnPlayerClickTextDraw",description:"Acest callback este apelat atunci c\xe2nd un juc\u0103tor face clic pe un textdraw sau anuleaz\u0103 modul de selectare cu tasta ESC.",tags:["player","textdraw"]},i=void 0,s={},d=[{value:"Descriere",id:"descriere",level:2},{value:"Return\u0103ri",id:"return\u0103ri",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Note",id:"note",level:2},{value:"Func\u021bii similare",id:"func\u021bii-similare",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"descriere",children:"Descriere"}),"\n",(0,n.jsx)(t.p,{children:"Acest callback este apelat atunci c\xe2nd un juc\u0103tor face clic pe un textdraw sau anuleaz\u0103 modul de selectare cu tasta ESC."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Nume"}),(0,n.jsx)(t.th,{children:"Descriere"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"ID-ul juc\u0103torului care a f\u0103cut clic pe textdraw."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"clickedid"}),(0,n.jsx)(t.td,{children:"ID-ul textdraw-ului care a fost apasat. INVALID_TEXT_DRAW dac\u0103 selec\u021bia a fost anulat\u0103."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"return\u0103ri",children:"Return\u0103ri"}),"\n",(0,n.jsx)(t.p,{children:"Este \xeentotdeauna numit primul \xeen filterscripts, a\u0219a c\u0103 returnarea 1 acolo blocheaz\u0103 \u0219i alte scripturi s\u0103-l vad\u0103."}),"\n",(0,n.jsx)(t.h2,{id:"exemple",children:"Exemple"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'new Text:gTextDraw;\n\npublic OnGameModeInit()\n{\n    gTextDraw = TextDrawCreate(10.000000, 141.000000, "TextDraw-ul Meu");\n    TextDrawTextSize(gTextDraw,60.000000, 20.000000);\n    TextDrawAlignment(gTextDraw,0);\n    TextDrawBackgroundColor(gTextDraw,0x000000ff);\n    TextDrawFont(gTextDraw,1);\n    TextDrawLetterSize(gTextDraw,0.250000, 1.000000);\n    TextDrawColor(gTextDraw,0xffffffff);\n    TextDrawSetProportional(gTextDraw,1);\n    TextDrawSetShadow(gTextDraw,1);\n    TextDrawSetSelectable(gTextDraw, 1);\n    return 1;\n}\n\npublic OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)\n{\n    if (newkeys == KEY_SUBMISSION)\n    {\n        TextDrawShowForPlayer(playerid, gTextDraw);\n        SelectTextDraw(playerid, 0xFF4040AA);\n    }\n    return 1;\n}\n\npublic OnPlayerClickTextDraw(playerid, Text:clickedid)\n{\n    if (clickedid == gTextDraw)\n    {\n         SendClientMessage(playerid, 0xFFFFFFAA, "A\u021bi f\u0103cut clic pe un textdraw.");\n         CancelSelectTextDraw(playerid);\n         return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"note",children:"Note"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Zona pe care se poate face clic este definit\u0103 de TextDrawTextSize. Parametrii x \u0219i y trecu\u021bi acelei func\u021bie nu trebuie s\u0103 fie zero sau negativi. Nu utiliza\u021bi CancelSelectTextDraw necondi\u021bionat \xeen acest callback. Aceasta are ca rezultat o bucl\u0103 infinit\u0103."})}),"\n",(0,n.jsx)(t.h2,{id:"func\u021bii-similare",children:"Func\u021bii similare"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"OnPlayerClickPlayerTextDraw",children:"OnPlayerClickPlayerTextDraw"}),": Apelat atunci c\xe2nd un juc\u0103tor d\u0103 clic pe un textdraw de juc\u0103tor."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"OnPlayerClickPlayer",children:"OnPlayerClickPlayer"}),": Apelat c\xe2nd un juc\u0103tor face clic pe altul."]}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}}}]);