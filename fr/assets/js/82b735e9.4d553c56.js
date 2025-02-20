"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[5722],{28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var l=i(96540);const t={},c=l.createContext(t);function s(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(c.Provider,{value:n},e.children)}},70465:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"scripting/callbacks/OnVehicleMod","title":"OnVehicleMod","description":"Cette callback est appel\xe9e lorsqu\'un v\xe9hicule est modifi\xe9.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleMod.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleMod","permalink":"/fr/docs/scripting/callbacks/OnVehicleMod","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnVehicleMod.md","tags":[{"inline":true,"label":"vehicle","permalink":"/fr/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleMod","sidebar_label":"OnVehicleMod","description":"Cette callback est appel\xe9e lorsqu\'un v\xe9hicule est modifi\xe9.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleDeath","permalink":"/fr/docs/scripting/callbacks/OnVehicleDeath"},"next":{"title":"OnVehiclePaintjob","permalink":"/fr/docs/scripting/callbacks/OnVehiclePaintjob"}}');var t=i(74848),c=i(28453);const s={title:"OnVehicleMod",sidebar_label:"OnVehicleMod",description:"Cette callback est appel\xe9e lorsqu'un v\xe9hicule est modifi\xe9.",tags:["vehicle"]},r=void 0,d={},o=[{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Valeur de retour",id:"valeur-de-retour",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Astuces",id:"astuces",level:2},{value:"Fonctions connexes",id:"fonctions-connexes",level:2},{value:"Callbacks connexes",id:"callbacks-connexes",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,t.jsx)(n.p,{children:"Cette callback est appel\xe9e lorsqu'un v\xe9hicule est modifi\xe9."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Nom"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"int"})," playerid"]}),(0,t.jsx)(n.td,{children:"L'ID du conducteur du v\xe9hicule."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"int"})," vehicleid"]}),(0,t.jsx)(n.td,{children:"L'ID du v\xe9hicule modifi\xe9."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"int"})," componentid"]}),(0,t.jsx)(n.td,{children:"L'ID de la partie de la voiture qui a \xe9t\xe9 ajout\xe9e/modifi\xe9e."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"valeur-de-retour",children:"Valeur de retour"}),"\n",(0,t.jsxs)(n.p,{children:["Retournez ",(0,t.jsx)(n.strong,{children:"0"})," pour emp\xeacher la modification d'\xeatre visible pour les autres joueurs."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnVehicleMod(playerid, vehicleid, componentid)\n{\n    printf("Le v\xe9hicule %d a \xe9t\xe9 modifi\xe9 par le joueur ID %d. L\'ID de la partie de la voiture modifi\xe9e est %d",vehicleid,playerid,componentid);\n    if(GetPlayerInterior(playerid) == 0)\n    {\n        BanEx(playerid, "Hack Tuning"); // Anti-tuning hacks script \n        //Test\xe9 et approuv\xe9 sur les serveurs o\xf9 il est impossible de modifier un v\xe9hicule hors d\'un transfender/wheel arch angel\n    }\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"astuces",children:"Astuces"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Cette callback ne sera pas appel\xe9e avec ",(0,t.jsx)(n.a,{href:"../functions/AddVehicleComponent",children:"AddVehicleComponent"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"fonctions-connexes",children:"Fonctions connexes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/AddVehicleComponent",children:"AddVehicleComponent"}),": Ajoute un composant sur un v\xe9hicule."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"callbacks-connexes",children:"Callbacks connexes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnEnterExitModShop",children:"OnEnterExitModShop"}),": Appel\xe9e lorsqu'un joueur dans un v\xe9hicule entre ou sort d'un garage de modification."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnVehiclePaintjob",children:"OnVehiclePaintjob"}),": Appel\xe9e lorsque la peinture d'un v\xe9hicule est chang\xe9e."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnVehicleRespray",children:"OnVehicleRespray"}),": Appel\xe9e lorsqu'un v\xe9hicule est repeint."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}}}]);