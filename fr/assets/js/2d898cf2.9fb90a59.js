"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[21975],{28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var r=s(96540);const t={},l=r.createContext(t);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(l.Provider,{value:n},e.children)}},72415:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"scripting/callbacks/OnPlayerRequestSpawn","title":"OnPlayerRequestSpawn","description":"Appel\xe9e lorsqu\'un joueur clique sur le bouton \\"spawn\\" lors de la s\xe9lection de classe.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerRequestSpawn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerRequestSpawn","permalink":"/fr/docs/scripting/callbacks/OnPlayerRequestSpawn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerRequestSpawn.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerRequestSpawn","sidebar_label":"OnPlayerRequestSpawn","description":"Appel\xe9e lorsqu\'un joueur clique sur le bouton \\"spawn\\" lors de la s\xe9lection de classe.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerRequestDownload","permalink":"/fr/docs/scripting/callbacks/OnPlayerRequestDownload"},"next":{"title":"OnPlayerSelectObject","permalink":"/fr/docs/scripting/callbacks/OnPlayerSelectObject"}}');var t=s(74848),l=s(28453);const a={title:"OnPlayerRequestSpawn",sidebar_label:"OnPlayerRequestSpawn",description:'Appel\xe9e lorsqu\'un joueur clique sur le bouton "spawn" lors de la s\xe9lection de classe.',tags:["player"]},c=void 0,o={},i=[{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Valeur de retour",id:"valeur-de-retour",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Astuces",id:"astuces",level:2},{value:"Fonctions connexes",id:"fonctions-connexes",level:2}];function u(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components},{TipNPCCallbacks:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"param\xe8tres",children:"Param\xe8tres"}),"\n",(0,t.jsx)(n.p,{children:'Appel\xe9e lorsqu\'un joueur clique sur le bouton "spawn" lors de la s\xe9lection de classe.'}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Nom"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"int"})," playerid"]}),(0,t.jsx)(n.td,{children:"ID du joueur qui demande le spawn"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"valeur-de-retour",children:"Valeur de retour"}),"\n",(0,t.jsxs)(n.p,{children:["Retourner ",(0,t.jsx)(n.strong,{children:"0"})," dans cette callback emp\xeachera le joueur d'appara\xeetre."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnPlayerRequestSpawn(playerid)\n{\n    if (!IsPlayerAdmin(playerid))\n    {\n        SendClientMessage(playerid, -1, "Vous ne pouvez pas spawn.");\n        return 0;\n    }\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"astuces",children:"Astuces"}),"\n",(0,t.jsx)(s,{}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Pour \xe9viter que les joueurs spawn avec une certaine classe, la classe derni\xe8rement vue doit \xeatre sauvegard\xe9e dans une variable dans OnPlayerRequestClass."})}),"\n",(0,t.jsx)(n.h2,{id:"fonctions-connexes",children:"Fonctions connexes"})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}}}]);