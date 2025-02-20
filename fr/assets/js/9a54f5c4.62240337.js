"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[78552],{28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>s});var t=r(96540);const l={},i=t.createContext(l);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(i.Provider,{value:n},e.children)}},95175:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>o,frontMatter:()=>a,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"scripting/callbacks/OnPlayerExitedMenu","title":"OnPlayerExitedMenu","description":"Callback appel\xe9e un joueur quitte un menu.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerExitedMenu.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerExitedMenu","permalink":"/fr/docs/scripting/callbacks/OnPlayerExitedMenu","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerExitedMenu.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"},{"inline":true,"label":"menu","permalink":"/fr/docs/tags/menu"}],"version":"current","frontMatter":{"title":"OnPlayerExitedMenu","sidebar_label":"OnPlayerExitedMenu","description":"Callback appel\xe9e un joueur quitte un menu.","tags":["player","menu"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEnterVehicle","permalink":"/fr/docs/scripting/callbacks/OnPlayerExitVehicle"},"next":{"title":"OnPlayerFinishedDownloading","permalink":"/fr/docs/scripting/callbacks/OnPlayerFinishedDownloading"}}');var l=r(74848),i=r(28453);const a={title:"OnPlayerExitedMenu",sidebar_label:"OnPlayerExitedMenu",description:"Callback appel\xe9e un joueur quitte un menu.",tags:["player","menu"]},s=void 0,c={},u=[{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Valeur de retour",id:"valeur-de-retour",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Fonctions connexes",id:"fonctions-connexes",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,l.jsx)(n.p,{children:"Callback appel\xe9e un joueur quitte un menu."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Nom"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:"int"})," playerid"]}),(0,l.jsx)(n.td,{children:"ID du joueur qui quitte le menu"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"valeur-de-retour",children:"Valeur de retour"}),"\n",(0,l.jsxs)(n.p,{children:["Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, ",(0,l.jsx)(n.code,{children:"return callback();"})," ne fonctionnera pas car la callback ne retourne rien, mais un return ",(0,l.jsxs)(n.em,{children:["(",(0,l.jsx)(n.code,{children:"return 1;"})," ou ",(0,l.jsx)(n.code,{children:"return 0;"}),")"]})," doit \xeatre effectu\xe9 dans la callback."]}),"\n",(0,l.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"public OnPlayerExitedMenu(playerid)\n{\n    TogglePlayerControllable(playerid,1); // unfreeze le joueur quand il quitte le menu\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"fonctions-connexes",children:"Fonctions connexes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/CreateMenu",children:"CreateMenu"}),": Cr\xe9er un menu."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/DestroyMenu",children:"DestroyMenu"}),": D\xe9truit un menu."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);