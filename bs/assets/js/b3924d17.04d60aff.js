"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[37239],{28453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>s});var a=n(96540);const r={},o=a.createContext(r);function t(e){const i=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(o.Provider,{value:i},e.children)}},72733:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>t,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"scripting/functions/ShowPlayerDialog","title":"ShowPlayerDialog","description":"Prikazuje igra\u010du za sinkroni (samo jedan po jedan) dijalo\u0161ki box.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/ShowPlayerDialog.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ShowPlayerDialog","permalink":"/bs/docs/scripting/functions/ShowPlayerDialog","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/ShowPlayerDialog.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"ShowPlayerDialog","sidebar_label":"ShowPlayerDialog","description":"Prikazuje igra\u010du za sinkroni (samo jedan po jedan) dijalo\u0161ki box.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"ShowPickupForPlayer","permalink":"/bs/docs/scripting/functions/ShowPickupForPlayer"},"next":{"title":"ShowPlayerMarkers","permalink":"/bs/docs/scripting/functions/ShowPlayerMarkers"}}');var r=n(74848),o=n(28453);const t={title:"ShowPlayerDialog",sidebar_label:"ShowPlayerDialog",description:"Prikazuje igra\u010du za sinkroni (samo jedan po jedan) dijalo\u0161ki box.",tags:["player"]},s=void 0,l={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function j(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,r.jsx)(i.p,{children:"Prikazuje igra\u010du za sinkroni (samo jedan po jedan) dijalo\u0161ki box."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Ime"}),(0,r.jsx)(i.th,{children:"Deskripcija"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"playerid"}),(0,r.jsx)(i.td,{children:"ID igra\u010da za prikazati dijalog."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"dialogid"}),(0,r.jsx)(i.td,{children:"ID kojem treba dodijeliti ovaj dijalog, tako da se odgovori mogu obraditi. Maksimalni dialogid je 32767. Upotreba negativnih vrijednosti zatvorit \u0107e svaki otvoreni dijalog."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"style"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.a,{href:"../resources/dialogstyles",children:"Stil"})," dijaloga."]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"caption[]"}),(0,r.jsx)(i.td,{children:"Naslov na vrhu dijaloga. Du\u017eina opisa ne mo\u017ee prema\u0161iti vi\u0161e od 64 znaka prije nego \u0161to se po\u010dne odsje\u0107i."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"info[]"}),(0,r.jsx)(i.td,{children:"Tekst za prikaz u glavnom dijalo\u0161kom okviru. Koristite \\n za zapo\u010dinjanje novog retka i \\t za tabeliranje."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"button1[]"}),(0,r.jsx)(i.td,{children:"Tekst na lijevom dugmetu."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"button2[]"}),(0,r.jsx)(i.td,{children:'Tekst na desnom dugmetu. Ostavite ga praznog ( "" ) da ga sakrijete.'})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena."}),"\n",(0,r.jsx)(i.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Ovo zna\u010di da igra\u010d nije konektovan."}),"\n",(0,r.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'// Definiraj ID-eve dijaloga sa enumom\nenum\n{\n    DIALOG_NULL,\n    DIALOG_LOGIN,\n    DIALOG_WELCOME,\n    DIALOG_WEAPONS\n}\n\n// Alternativno, koristi macros:\n#define DIALOG_NULL 0\n#define DIALOG_LOGIN 1\n#define DIALOG_WELCOME 2\n#define DIALOG_WEAPONS 3\n\n// Enums su preporu\u010dljivi, jer ne morate pratiti kori\u0161tene ID-ove. Me\u0111utim, enumi koriste memoriju za pohranjivanje definicija, dok se definicije obra\u0111uju u fazi \'pretprocesora\' (kompajliranja).\n\n// Primjer za DIALOG_STYLE_MSGBOX:\nShowPlayerDialog(playerid, DIALOG_WELCOME, DIALOG_STYLE_MSGBOX, "Notice", "Konektovan si na server", "Close", "");\n\n// Primjer za DIALOG_STYLE_INPUT:\nShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Unesite svoju lozinku ispod:", "Login", "Cancel");\n\n// Primjer za DIALOG_STYLE_LIST:\nShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Oruzja", "AK47\\nM4\\nSniper Rifle", "Option 1", "Option 2");\n\n// Primjer za DIALOG_STYLE_PASSWORD:\nShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_PASSWORD, "Login", "Unesite svoju lozinku ispod:", "Login", "Cancel");\n\n// Primjer za DIALOG_STYLE_TABLIST:\nShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST, "Kupi oruzje", "Deagle\\t$5000\\t100\\nSawnoff\\t$5000\\t100\\nPistol\\t$1000\\t50", "Select", "Cancel");\n\n// Example for DIALOG_STYLE_TABLIST_HEADERS:\nShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST_HEADERS, "Kupi oruzje", "Weapon\\tPrice\\tAmmo\\nDeagle\\t$5000\\t100\\nSawnoff\\t$5000\\t100\\nPistol\\t$1000\\t50", "Select", "Cancel");\n'})}),"\n",(0,r.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsx)(i.p,{children:"Preporu\u010duje se upotreba enuma (vidi gore) ili definicija (#define) da bi se utvrdilo koji ID dijalozi imaju, kako bi se izbjegla zabuna u budu\u0107nosti. Nikada ne biste trebali koristiti doslovne brojeve za ID-ove - postaje zbunjuju\u0107e."})}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsx)(i.p,{children:"Koristite ugra\u0111ivanje boja za vi\u0161e boja u tekstu. Kori\u0161\u0107enje -1 kao dijalogida zatvara sve dijaloge koji su trenutno prikazani na ekranu klijenta."})}),"\n",(0,r.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": Prika\u017ei textdraw za odre\u0111enog igra\u010da."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"../callbacks/OnDialogResponse",children:"OnDialogResponse"}),": Pozvano kada igra\u010d odgovori na dijalog."]}),"\n"]})]})}function c(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}}}]);