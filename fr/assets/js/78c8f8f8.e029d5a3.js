"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[10411],{28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>s});var n=r(96540);const l={},c=n.createContext(l);function a(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),n.createElement(c.Provider,{value:t},e.children)}},45304:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"scripting/callbacks/OnPlayerObjectMoved","title":"OnPlayerObjectMoved","description":"Cette callback est appel\xe9e quand l\'objet d\'un joueur a \xe9t\xe9 d\xe9plac\xe9 apr\xe8s un MovePlayerObject (quand l\'objet s\'arr\xeate de bouger).","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerObjectMoved.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerObjectMoved","permalink":"/fr/docs/scripting/callbacks/OnPlayerObjectMoved","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerObjectMoved.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerObjectMoved","sidebar_label":"OnPlayerObjectMoved","description":"Cette callback est appel\xe9e quand l\'objet d\'un joueur a \xe9t\xe9 d\xe9plac\xe9 apr\xe8s un MovePlayerObject (quand l\'objet s\'arr\xeate de bouger).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerLeaveRaceCheckpoint","permalink":"/fr/docs/scripting/callbacks/OnPlayerLeaveRaceCheckpoint"},"next":{"title":"OnPlayerPickUpPickup","permalink":"/fr/docs/scripting/callbacks/OnPlayerPickUpPickup"}}');var l=r(74848),c=r(28453);const a={title:"OnPlayerObjectMoved",sidebar_label:"OnPlayerObjectMoved",description:"Cette callback est appel\xe9e quand l'objet d'un joueur a \xe9t\xe9 d\xe9plac\xe9 apr\xe8s un MovePlayerObject (quand l'objet s'arr\xeate de bouger).",tags:["player"]},s=void 0,i={},o=[{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Valeur de retour",id:"valeur-de-retour",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Astuces",id:"astuces",level:2},{value:"Fonctions connexes",id:"fonctions-connexes",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,l.jsxs)(t.p,{children:["Cette callback est appel\xe9e quand l'objet d'un joueur a \xe9t\xe9 d\xe9plac\xe9 apr\xe8s un MovePlayerObject ",(0,l.jsx)(t.em,{children:"(quand l'objet s'arr\xeate de bouger)"}),"."]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Nom"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:[(0,l.jsx)(t.code,{children:"int"})," playerid"]}),(0,l.jsx)(t.td,{children:"L'ID du joueur auquel l'objet est assign\xe9"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:[(0,l.jsx)(t.code,{children:"int"})," objectid"]}),(0,l.jsx)(t.td,{children:"L'ID de l'objet du joueur qui a \xe9t\xe9 d\xe9plac\xe9"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"valeur-de-retour",children:"Valeur de retour"}),"\n",(0,l.jsxs)(t.p,{children:["Cette callback ne retourne pas de valeur sp\xe9cifique, mais doit retourner quelque chose. Autrement dit, ",(0,l.jsx)(t.code,{children:"return callback();"})," ne fonctionnera pas car la callback ne retourne rien, mais un return ",(0,l.jsxs)(t.em,{children:["(",(0,l.jsx)(t.code,{children:"return 1;"})," ou ",(0,l.jsx)(t.code,{children:"return 0;"}),")"]})," doit \xeatre effectu\xe9 dans la callback."]}),"\n",(0,l.jsx)(t.h2,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnPlayerObjectMoved(playerid, objectid)\n{\n    printf("Objet d\'un joueur d\xe9plac\xe9 : objectid: %d playerid: %d", objectid, playerid);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"astuces",children:"Astuces"}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsx)(t.p,{children:"Cette callback peut aussi \xeatre utilis\xe9e pour les NPC."})}),"\n",(0,l.jsx)(t.h2,{id:"fonctions-connexes",children:"Fonctions connexes"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"../functions/MovePlayerObject",children:"MovePlayerObject"}),": D\xe9place l'objet d'un joueur."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"../functions/IsPlayerObjectMoving",children:"IsPlayerObjectMoving"}),": V\xe9rfiie si l'objet d'un joueur se d\xe9place."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"../functions/StopPlayerObject",children:"StopPlayerObject"}),": Arr\xeate le mouvement de l'objet d'un joueur."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"../functions/CreatePlayerObject",children:"CreatePlayerObject"}),": Cr\xe9er un objet seulement pour un joueur."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"../functions/DestroyPlayerObject",children:"DestroyPlayerObject"}),": D\xe9truit l'objet d'un joueur."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);