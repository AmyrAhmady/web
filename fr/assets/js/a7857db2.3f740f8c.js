"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[17723],{28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var t=r(96540);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}},97875:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"scripting/callbacks/OnPlayerWeaponShot","title":"OnPlayerWeaponShot","description":"Cette fonction est appel\xe9e lorsqu\'un joueur tire avec une arme \xe0 feu.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerWeaponShot.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerWeaponShot","permalink":"/fr/docs/scripting/callbacks/OnPlayerWeaponShot","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerWeaponShot.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerWeaponShot","sidebar_label":"OnPlayerWeaponShot","description":"Cette fonction est appel\xe9e lorsqu\'un joueur tire avec une arme \xe0 feu.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerUpdate","permalink":"/fr/docs/scripting/callbacks/OnPlayerUpdate"},"next":{"title":"OnRconCommand","permalink":"/fr/docs/scripting/callbacks/OnRconCommand"}}');var s=r(74848),i=r(28453);const l={title:"OnPlayerWeaponShot",sidebar_label:"OnPlayerWeaponShot",description:"Cette fonction est appel\xe9e lorsqu'un joueur tire avec une arme \xe0 feu.",tags:["player"]},c=void 0,o={},a=[{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Valeur de retour",id:"valeur-de-retour",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Astuces",id:"astuces",level:2},{value:"Fonctions connexes",id:"fonctions-connexes",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,s.jsx)(n.p,{children:"Cette fonction est appel\xe9e lorsqu'un joueur tire avec une arme \xe0 feu. Si un conducteur tire depuis son v\xe9hicule, la callback ne sera pas appel\xe9e. En revanche, si un passager tire depuis son v\xe9hicule, la callback sera bel et bien appel\xe9e."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nom"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"int"})," playerid"]}),(0,s.jsx)(n.td,{children:"L'ID du joueur qui tire"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"int"})," WEAPON",":weaponid"]}),(0,s.jsxs)(n.td,{children:["L'ID de l'",(0,s.jsx)(n.a,{href:"../resources/weaponids",children:"arme"})," qui tire"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"int"})," BULLET_HIT_TYPE",":hittype"]}),(0,s.jsxs)(n.td,{children:["Le ",(0,s.jsx)(n.a,{href:"../resources/bullethittypes",children:"type"})," de cible touch\xe9e ",(0,s.jsx)(n.em,{children:"(rien, joueur, v\xe9hicule, ou objet(de joueur))"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"int"})," hitid"]}),(0,s.jsx)(n.td,{children:"L'ID du joueur, v\xe9hicule ou objet touch\xe9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"float"})," Float",":fX"]}),(0,s.jsx)(n.td,{children:"Les coordonn\xe9es X touch\xe9e par le tir"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"float"})," Float",":fY"]}),(0,s.jsx)(n.td,{children:"Les coordonn\xe9es Y touch\xe9e par le tir"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"float"})," Float",":fZ"]}),(0,s.jsx)(n.td,{children:"Les coordonn\xe9es Z touch\xe9e par le tir"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"valeur-de-retour",children:"Valeur de retour"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"0"})," - Emp\xeache le tir de causer des d\xe9g\xe2ts."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"1"})," - Autorise le tir \xe0 causer des d\xe9g\xe2ts."]}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnPlayerWeaponShot(playerid, WEAPON:weaponid, BULLET_HIT_TYPE:hittype, hitid, Float:fX, Float:fY, Float:fZ)\n{\n    new szString[144];\n    \n    format(szString, sizeof(szString), "L\'arme %i vient de faire feu. hittype: %i   hitid: %i   position: %f, %f, %f", weaponid, hittype, hitid, fX, fY, fZ);\n    SendClientMessage(playerid, -1, szString);\n \n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"astuces",children:"Astuces"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"Si la cible est :"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"BULLET_HIT_TYPE_NONE"})," : les variables ",(0,s.jsx)(n.code,{children:"fX"}),", ",(0,s.jsx)(n.code,{children:"fY"})," et ",(0,s.jsx)(n.code,{children:"fZ"})," seront \xe9gales \xe0 des coordonn\xe9es normales ;"]}),"\n",(0,s.jsxs)(n.li,{children:["Autre : Les variables ",(0,s.jsx)(n.code,{children:"fX"}),", ",(0,s.jsx)(n.code,{children:"fY"})," et ",(0,s.jsx)(n.code,{children:"fZ"})," seront g\xe9n\xe9ralement d\xe9cal\xe9s du centre de hitid."]}),"\n"]})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"../functions/GetPlayerLastShotVectors",children:"GetPlayerLastShotVectors"})," peut \xeatre utilis\xe9 dans cette callback pour plus de d\xe9tails sur les vecteurs de la balle."]})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"Bugs connus :"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"N'est pas appel\xe9 si vous avez tir\xe9 dans le v\xe9hicule en tant que conducteur ou si vous regardez derri\xe8re avec la vis\xe9e activ\xe9e (tir en l'air)."}),"\n",(0,s.jsxs)(n.li,{children:["Il est appel\xe9 ",(0,s.jsx)(n.code,{children:"BULLET_HIT_TYPE_VEHICLE"})," avec le ",(0,s.jsx)(n.code,{children:"hitid"})," correct ",(0,s.jsx)(n.em,{children:"(le v\xe9hicule du joueur touch\xe9)"})," si vous tirez sur un joueur qui se trouve dans un v\xe9hicule. Il ne s'appellera pas du tout ",(0,s.jsx)(n.code,{children:"BULLET_HIT_TYPE_PLAYER"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Partiellement corrig\xe9 en 0.3.7 : Si de fausses donn\xe9es d'armes sont envoy\xe9es par un utilisateur malveillant, d'autres clients joueurs peuvent se bloquer ou planter. Pour lutter contre cela, v\xe9rifiez si l'arme signal\xe9e peut r\xe9ellement tirer des balles."}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"fonctions-connexes",children:"Fonctions connexes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../functions/GetPlayerLastShotVectors",children:"GetPlayerLastShotVectors"}),": R\xe9cup\xe8re le vecteur du dernier coup tir\xe9 par un joueur."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);