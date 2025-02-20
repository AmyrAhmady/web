"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[66286],{23120:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scripting/callbacks/OnVehicleSirenStateChange","title":"OnVehicleSirenStateChange","description":"Cette callback est appel\xe9e lorsque l\'\xe9tat de la sir\xe8ne d\'un v\xe9hicule change.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleSirenStateChange.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleSirenStateChange","permalink":"/fr/docs/scripting/callbacks/OnVehicleSirenStateChange","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnVehicleSirenStateChange.md","tags":[{"inline":true,"label":"vehicle","permalink":"/fr/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleSirenStateChange","sidebar_label":"OnVehicleSirenStateChange","description":"Cette callback est appel\xe9e lorsque l\'\xe9tat de la sir\xe8ne d\'un v\xe9hicule change.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleRespray","permalink":"/fr/docs/scripting/callbacks/OnVehicleRespray"},"next":{"title":"OnVehicleSpawn","permalink":"/fr/docs/scripting/callbacks/OnVehicleSpawn"}}');var r=t(74848),l=t(28453);const a={title:"OnVehicleSirenStateChange",sidebar_label:"OnVehicleSirenStateChange",description:"Cette callback est appel\xe9e lorsque l'\xe9tat de la sir\xe8ne d'un v\xe9hicule change.",tags:["vehicle"]},s=void 0,c={},d=[{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Valeur de retour",id:"valeur-de-retour",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Astuces",id:"astuces",level:2},{value:"Fonctions connexes",id:"fonctions-connexes",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{name:"callback",version:"SA-MP 0.3.7"}),"\n",(0,r.jsx)(n.h2,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,r.jsx)(n.p,{children:"Cette callback est appel\xe9e lorsque l'\xe9tat de la sir\xe8ne d'un v\xe9hicule change."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nom"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"int"})," playerid"]}),(0,r.jsx)(n.td,{children:"L'ID du joueur qui a d\xe9clench\xe9 la sir\xe8ne (conducteur)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"int"})," vehicleid"]}),(0,r.jsx)(n.td,{children:"L'ID du v\xe9hicule dont l'\xe9tat de la sir\xe8ne a chang\xe9."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"int"})," newstate"]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"0"})," si la sir\xe8ne a \xe9t\xe9 d\xe9sactiv\xe9e, ",(0,r.jsx)(n.strong,{children:"1"})," si la sir\xe8ne a \xe9t\xe9 activ\xe9e."]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"valeur-de-retour",children:"Valeur de retour"}),"\n",(0,r.jsx)(n.p,{children:"Cette callback ne retourne aucune valeur particuli\xe8re."}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnVehicleSirenStateChange(playerid, vehicleid, newstate)\n{\n    if(newstate) GameTextForPlayer(playerid, "~W~Sirene ~G~on", 1000, 3);\n    GameTextForPlayer(playerid, "~W~Sirene ~r~off", 1000, 3);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"astuces",children:"Astuces"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Cette callback est appel\xe9e seulement lorsque l'\xe9tat de la sir\xe8ne change, PAS quand la sir\xe8ne alternative est utilis\xe9e (maintenir klaxon)."})}),"\n",(0,r.jsx)(n.h2,{id:"fonctions-connexes",children:"Fonctions connexes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/GetVehicleParamsSirenState",children:"GetVehicleParamsSirenState"}),": V\xe9rifie si la sir\xe8ne du v\xe9hicule est ON ou OFF."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(96540);const r={},l=i.createContext(r);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);