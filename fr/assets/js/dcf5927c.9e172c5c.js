"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[60252],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var r=t(96540);const c={},i=r.createContext(c);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),r.createElement(i.Provider,{value:n},e.children)}},59359:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/callbacks/OnVehicleStreamIn","title":"OnVehicleStreamIn","description":"Cette callback est appel\xe9e lorsqu\'un v\xe9hicule est charg\xe9 (devient visible) pour un joueur.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleStreamIn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleStreamIn","permalink":"/fr/docs/scripting/callbacks/OnVehicleStreamIn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnVehicleStreamIn.md","tags":[{"inline":true,"label":"vehicle","permalink":"/fr/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleStreamIn","sidebar_label":"OnVehicleStreamIn","description":"Cette callback est appel\xe9e lorsqu\'un v\xe9hicule est charg\xe9 (devient visible) pour un joueur.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleSpawn","permalink":"/fr/docs/scripting/callbacks/OnVehicleSpawn"},"next":{"title":"OnVehicleStreamOut","permalink":"/fr/docs/scripting/callbacks/OnVehicleStreamOut"}}');var c=t(74848),i=t(28453);const l={title:"OnVehicleStreamIn",sidebar_label:"OnVehicleStreamIn",description:"Cette callback est appel\xe9e lorsqu'un v\xe9hicule est charg\xe9 (devient visible) pour un joueur.",tags:["vehicle"]},s=void 0,a={},o=[{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Valeur de retour",id:"valeur-de-retour",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Astuces",id:"astuces",level:2},{value:"Fonctions connexes",id:"fonctions-connexes",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{TipNPCCallbacks:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,c.jsx)(n.p,{children:"Cette callback est appel\xe9e lorsqu'un v\xe9hicule est charg\xe9 (devient visible) pour un joueur."}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Nom"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:"int"})," vehicleid"]}),(0,c.jsx)(n.td,{children:"L'ID du v\xe9hicule charg\xe9 par le joueur."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:"int"})," forplayerid"]}),(0,c.jsx)(n.td,{children:"L'ID du joueur qui a charg\xe9 le v\xe9hicule."})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"valeur-de-retour",children:"Valeur de retour"}),"\n",(0,c.jsxs)(n.p,{children:["Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, ",(0,c.jsx)(n.code,{children:"return callback();"})," ne fonctionnera pas car la callback ne retourne rien, mais un return ",(0,c.jsxs)(n.em,{children:["(",(0,c.jsx)(n.code,{children:"return 1;"})," ou ",(0,c.jsx)(n.code,{children:"return 0;"}),")"]})," doit \xeatre effectu\xe9 dans la callback."]}),"\n",(0,c.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:'public OnVehicleStreamIn(vehicleid, forplayerid)\n{\n    new string[32];\n    format(string, sizeof(string), "Vous pouvez d\xe9sormais voir le v\xe9hicule ID: %d.", vehicleid);\n    SendClientMessage(forplayerid, 0xFFFFFFFF, string);\n    return 1;\n}\n\n'})}),"\n",(0,c.jsx)(n.h2,{id:"astuces",children:"Astuces"}),"\n",(0,c.jsx)(t,{}),"\n",(0,c.jsx)(n.h2,{id:"fonctions-connexes",children:"Fonctions connexes"})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}}}]);