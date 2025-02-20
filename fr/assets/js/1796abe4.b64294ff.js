"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[7680],{28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(96540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}},46964:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/functions/AddPlayerClassEx","title":"AddPlayerClassEx","description":"Cette fonction est exactement la m\xeame que la fonction AddPlayerClass, avec l\'ajout d\'un param\xe8tre d\'\xe9quipe.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting/functions/AddPlayerClassEx.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddPlayerClassEx","permalink":"/fr/docs/scripting/functions/AddPlayerClassEx","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AddPlayerClassEx.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"}],"version":"current","frontMatter":{"title":"AddPlayerClassEx","sidebar_label":"AddPlayerClassEx","description":"Cette fonction est exactement la m\xeame que la fonction AddPlayerClass, avec l\'ajout d\'un param\xe8tre d\'\xe9quipe.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"AddPlayerClass","permalink":"/fr/docs/scripting/functions/AddPlayerClass"},"next":{"title":"AddServerRule","permalink":"/fr/docs/scripting/functions/AddServerRule"}}');var r=s(74848),a=s(28453);const i={title:"AddPlayerClassEx",sidebar_label:"AddPlayerClassEx",description:"Cette fonction est exactement la m\xeame que la fonction AddPlayerClass, avec l'ajout d'un param\xe8tre d'\xe9quipe.",tags:["player"]},l=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Retour",id:"retour",level:2},{value:"Exemples",id:"exemples",level:2},{value:"Remarques",id:"remarques",level:2},{value:"Fonctions associ\xe9es",id:"fonctions-associ\xe9es",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Cette fonction est exactement la m\xeame que la fonction AddPlayerClass, avec l'ajout d'un param\xe8tre d'\xe9quipe."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nom"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"teamid"}),(0,r.jsx)(n.td,{children:"L'\xe9quipe dans laquelle vous voulez que le joueur apparaisse."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modelid"}),(0,r.jsx)(n.td,{children:"Le skin avec lequel le joueur appara\xeetra."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":spawn_x"]}),(0,r.jsx)(n.td,{children:"La coordonn\xe9e X de la position d'apparition de la classe."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":spawn_y"]}),(0,r.jsx)(n.td,{children:"La coordonn\xe9e Y de la position d'apparition de la classe."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":spawn_z"]}),(0,r.jsx)(n.td,{children:"La coordonn\xe9e Z de la position d'apparition de la classe."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":z_angle"]}),(0,r.jsx)(n.td,{children:"La direction dans laquelle le joueur fera face apr\xe8s le frai."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"weapon1"}),(0,r.jsx)(n.td,{children:"La premi\xe8re arme d'apparition pour le joueur."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"weapon1_ammo"}),(0,r.jsx)(n.td,{children:"La quantit\xe9 de munitions pour la premi\xe8re arme d'apparition."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"weapon2"}),(0,r.jsx)(n.td,{children:"La deuxi\xe8me arme d'apparition pour le joueur."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"weapon2_ammo"}),(0,r.jsx)(n.td,{children:"La quantit\xe9 de munitions pour la deuxi\xe8me arme d'apparition."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"weapon3"}),(0,r.jsx)(n.td,{children:"La troisi\xe8me arme d'apparition pour le joueur."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"weapon3_ammo"}),(0,r.jsx)(n.td,{children:"La quantit\xe9 de munitions pour la troisi\xe8me arme d'apparition."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"retour",children:"Retour"}),"\n",(0,r.jsx)(n.p,{children:"L'ID de la classe qui vient d'\xeatre ajout\xe9e."}),"\n",(0,r.jsx)(n.p,{children:"319 si la limite de classe (320) a \xe9t\xe9 atteinte. L'ID de classe le plus \xe9lev\xe9 possible est 319."}),"\n",(0,r.jsx)(n.h2,{id:"exemples",children:"Exemples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n     // Les joueurs peuvent appara\xeetre soit\xa0:\n     // CJ Skin (ID 0) dans l'\xe9quipe 1.\n     // \"The Truth\" skin (ID 1) dans l'\xe9quipe 2.\n     AddPlayerClassEx(1, 0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // CJ\n     AddPlayerClassEx(2, 1, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // The Truth\n     return 1;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"remarques",children:"Remarques"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"L'ID de classe maximum est de 319 (\xe0 partir de 0, donc un total de 320 classes). Lorsque cette limite est atteinte, toute autre classe ajout\xe9e remplacera l'ID 319."})}),"\n",(0,r.jsx)(n.h2,{id:"fonctions-associ\xe9es",children:"Fonctions associ\xe9es"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"AddPlayerClass",children:"AddPlayerClass"}),"\xa0: ajoutez une classe."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetSpawnInfo",children:"SetSpawnInfo"}),"\xa0: d\xe9finissez le param\xe8tre d'apparition d'un joueur."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetPlayerTeam",children:"SetPlayerTeam"}),"\xa0: d\xe9finissez l'\xe9quipe d'un joueur."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetPlayerSkin",children:"SetPlayerSkin"})," : D\xe9finissez le skin d'un joueur."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);