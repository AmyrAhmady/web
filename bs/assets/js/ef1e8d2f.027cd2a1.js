"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[73600],{28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>s});var a=t(96540);const i={},n=a.createContext(i);function o(e){const r=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(n.Provider,{value:r},e.children)}},35801:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"scripting/functions/TextDrawCreate","title":"TextDrawCreate","description":"Kreira textdraw.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/TextDrawCreate.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawCreate","permalink":"/bs/docs/scripting/functions/TextDrawCreate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/TextDrawCreate.md","tags":[{"inline":true,"label":"textdraw","permalink":"/bs/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawCreate","sidebar_label":"TextDrawCreate","description":"Kreira textdraw.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawColour","permalink":"/bs/docs/scripting/functions/TextDrawColour"},"next":{"title":"TextDrawDestroy","permalink":"/bs/docs/scripting/functions/TextDrawDestroy"}}');var i=t(74848),n=t(28453);const o={title:"TextDrawCreate",sidebar_label:"TextDrawCreate",description:"Kreira textdraw.",tags:["textdraw"]},s=void 0,l={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function x(e){const r={a:"a",admonition:"admonition",code:"code",del:"del",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,i.jsx)(r.p,{children:"Kreira textdraw. Textdraw-ovi su, kako samo ime implicira, tekst (uglavnom - ovdje tako\u0111er mogu biti boxovi, sprite-ovi i pregledi modela (skinovi/vozila/oru\u017eja/objekti) koji je iscrtan na igra\u010devom zaslonu. Pogledaj ovu stranicu za opse\u017ene informacije o textdraw-ovima."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Ime"}),(0,i.jsx)(r.th,{children:"Deskripcija"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["Float",":x"]}),(0,i.jsx)(r.td,{children:"X (left/right) kordinata to create the textdraw at."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["Float",":y"]}),(0,i.jsx)(r.td,{children:"Y (up/down) kordinata to create the textdraw at."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"text[]"}),(0,i.jsx)(r.td,{children:"The text that will appear in the textdraw."})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:"ID kreiranog textdraw-a. Textdraw IDs start at 0."}),"\n",(0,i.jsx)(r.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:'// ova varijabla je kori\u0161tena za pohraniti ID textdrawa\n// kako bismo ga mogli koristiti kroz skriptu\nnew Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    // Ova linija nam korisit kako bismo kreirali textdraw\n    // Zabilje\u0161ka: Ovo kreira textdraw bez ikakvog formatiranja.\n    gMyTextdraw = TextDrawCreate(240.0,580.0,"Dobrodosli na moj SA-MP server");\n    return 1;\n}\n\npublic OnPlayerConnect(playerid)\n{\n    //Ovo je kori\u0161teno da prika\u017ee textdraw igra\u010du kada se konektuje.\n    TextDrawShowForPlayer(playerid, gMyTextdraw);\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsx)(r.p,{children:'X, Y kordinata je gornja lijeva kordinata za podru\u010dje textdrawa na osnovu 640x448 "platna" (bez obzira na razlu\u010divost zaslona). Ako planirate koristiti TextDrawAlignment s poravnanjem 3 (desno), kordinata x, Y je gornja desna kordinata za crtanje teksta. Ova funkcija samo KREIRA izvla\u010denje teksta, za prikaz morate koristiti TextDrawShowForPlayer ili TextDrawShowForAll. Preporu\u010duje se upotreba CIJELIH brojeva umjesto decimalnih mjesta prilikom kreiranja crte\u017ea teksta kako bi se osigurao dizajn prilago\u0111en rezoluciji.'})}),"\n",(0,i.jsx)(r.admonition,{type:"warning",children:(0,i.jsxs)(r.p,{children:["Kodovi preslikavanja tipki na tipkovnici (kao npr ",(0,i.jsx)(r.del,{children:"k~~VEHICLE_ENTER_EXIT"})," ne rade preko 255-og karaktera."]})}),"\n",(0,i.jsx)(r.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawDestroy",children:"TextDrawDestroy"}),": Uni\u0161ti textdraw."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawColor",children:"TextDrawColor"}),": Postavi boju teksta u textdrawu."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawBoxColor",children:"TextDrawBoxColor"}),": Postavi boju boxa u textdrawu."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawBackgroundColor",children:"TextDrawBackgroundColor"}),": Postavi boju pozadine textdrawa."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawAlignment",children:"TextDrawAlignment"}),": Postavi poravnanje textdrawa."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawFont",children:"TextDrawFont"}),": Postavi font textdrawa."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawLetterSize",children:"TextDrawLetterSize"}),": Postavi veli\u010dinu znakova teksta u textdrawu."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawTextSize",children:"TextDrawTextSize"}),": Postavi veli\u010dinu boxa u textdrawu."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawSetOutline",children:"TextDrawSetOutline"}),": Odlu\u010di da li da tekst ima outline."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawSetShadow",children:"TextDrawSetShadow"}),": Uklju\u010di/isklju\u010di sjene (shadows) na textdrawu."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawSetProportional",children:"TextDrawSetProportional"}),": Razmjestite razmak izme\u0111u teksta u texstdrawu na proporcionalni omjer."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawUseBox",children:"TextDrawUseBox"}),": Uklju\u010dite ili isklju\u010dite da li textdraw koristi box ili ne."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawSetString",children:"TextDrawSetString"}),": Postavi tekst u ve\u0107 postoje\u0107em textdrawu."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": Prika\u017ei textdraw za odre\u0111enog igra\u010da."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": Sakrij textdraw za odre\u0111enog igra\u010da."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": Prika\u017ei textdraw za sve igra\u010de."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": Sakrij textdraw za sve igra\u010de."]}),"\n"]})]})}function c(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}}}]);