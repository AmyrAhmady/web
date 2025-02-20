"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[4634],{28453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>i});var t=a(96540);const l={},r=t.createContext(l);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(r.Provider,{value:n},e.children)}},77782:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>x,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/callbacks/OnPlayerClickTextDraw","title":"OnPlayerClickTextDraw","description":"Descripci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerClickTextDraw.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerClickTextDraw","permalink":"/es/docs/scripting/callbacks/OnPlayerClickTextDraw","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerClickTextDraw.md","tags":[{"inline":true,"label":"player","permalink":"/es/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/es/docs/tags/textdraw"}],"version":"current","frontMatter":{"t\xedtulo":"OnPlayerClickTextDraw","descripci\xf3n":"Este callback se llama cuando un jugador clickea en un textdraw o cancela el modo de selecci\xf3n con la tecla ESC.","tags":["player","textdraw"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerClickPlayerTextDraw","permalink":"/es/docs/scripting/callbacks/OnPlayerClickPlayerTextDraw"},"next":{"title":"OnPlayerCommandText","permalink":"/es/docs/scripting/callbacks/OnPlayerCommandText"}}');var l=a(74848),r=a(28453);const c={"t\xedtulo":"OnPlayerClickTextDraw","descripci\xf3n":"Este callback se llama cuando un jugador clickea en un textdraw o cancela el modo de selecci\xf3n con la tecla ESC.",tags:["player","textdraw"]},i=void 0,s={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Devoluciones",id:"devoluciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Funciones Relacionadas",id:"funciones-relacionadas",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsx)(n.p,{children:"Este callback se llama cuando un jugador clickea en un textdraw o cancela el modo de selecci\xf3n con la tecla ESC."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player that clicked on the textdraw."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"clickedid"}),(0,l.jsx)(n.td,{children:"The ID of the clicked textdraw. INVALID_TEXT_DRAW if selection was cancelled."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"devoluciones",children:"Devoluciones"}),"\n",(0,l.jsx)(n.p,{children:"1 - Prevendr\xe1 a otros filterscripts de recibir este callback."}),"\n",(0,l.jsx)(n.p,{children:"0 - Indica que este callback ser\xe1 pasado al siguiente filterscript."}),"\n",(0,l.jsx)(n.p,{children:"Siempre se llama primero en filterscripts."}),"\n",(0,l.jsx)(n.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'new Text:gTextDraw;\n\npublic OnGameModeInit()\n{\n    gTextDraw = TextDrawCreate(10.000000, 141.000000, "MyTextDraw");\n    TextDrawTextSize(gTextDraw,60.000000, 20.000000);\n    TextDrawAlignment(gTextDraw,0);\n    TextDrawBackgroundColor(gTextDraw,0x000000ff);\n    TextDrawFont(gTextDraw,1);\n    TextDrawLetterSize(gTextDraw,0.250000, 1.000000);\n    TextDrawColor(gTextDraw,0xffffffff);\n    TextDrawSetProportional(gTextDraw,1);\n    TextDrawSetShadow(gTextDraw,1);\n    TextDrawSetSelectable(gTextDraw, 1);\n    return 1;\n}\n\npublic OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)\n{\n    if (newkeys == KEY_SUBMISSION)\n    {\n        TextDrawShowForPlayer(playerid, gTextDraw);\n        SelectTextDraw(playerid, 0xFF4040AA);\n    }\n    return 1;\n}\n\npublic OnPlayerClickTextDraw(playerid, Text:clickedid)\n{\n    if (clickedid == gTextDraw)\n    {\n         SendClientMessage(playerid, 0xFFFFFFAA, "Clickeaste en un textdraw.");\n         CancelSelectTextDraw(playerid);\n         return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"notas",children:"Notas"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"El area clickeable est\xe1 definida por TextDrawTextSize. Los par\xe1metors X y Y pasados a esta funci\xf3n no deben ser cero o negativos. No uses CancelSelectTextDraw incondicionalmente dentro de este callback. Esto resultar\xe1 en un loop infinito."})}),"\n",(0,l.jsx)(n.h2,{id:"funciones-relacionadas",children:"Funciones Relacionadas"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerClickPlayerTextDraw",children:"OnPlayerClickPlayerTextDraw"}),": Se llama cuando un jugador clickea en un player-textdraw."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerClickPlayer",children:"OnPlayerClickPlayer"}),": Se llama cuando un jugador clickea en otro."]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);