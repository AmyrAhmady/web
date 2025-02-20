"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[96235],{28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var r=i(96540);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}},80849:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/functions/CreateMenu","title":"CreateMenu","description":"Kreiraj meni.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/CreateMenu.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreateMenu","permalink":"/bs/docs/scripting/functions/CreateMenu","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/CreateMenu.md","tags":[{"inline":true,"label":"menu","permalink":"/bs/docs/tags/menu"}],"version":"current","frontMatter":{"title":"CreateMenu","sidebar_label":"CreateMenu","description":"Kreiraj meni.","tags":["menu"]},"sidebar":"docsSidebar","previous":{"title":"CreateExplosionForPlayer","permalink":"/bs/docs/scripting/functions/CreateExplosionForPlayer"},"next":{"title":"CreateObject","permalink":"/bs/docs/scripting/functions/CreateObject"}}');var t=i(74848),s=i(28453);const a={title:"CreateMenu",sidebar_label:"CreateMenu",description:"Kreiraj meni.",tags:["menu"]},l=void 0,o={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(n.p,{children:"Kreiraj meni."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Ime"}),(0,t.jsx)(n.th,{children:"Deskripcija"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"title[]"}),(0,t.jsx)(n.td,{children:"Naslov novog menija."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"columns"}),(0,t.jsx)(n.td,{children:"Koliko kolona \u0107e novi meni imati."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Float",":x"]}),(0,t.jsx)(n.td,{children:"X pozicija menija (640x460 su\u010delje - 0 stavio bi meni krajnje lijevo)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Float",":y"]}),(0,t.jsx)(n.td,{children:"Y pozicija menija (640x460 su\u010delje - 0 stavio bi meni krajnje gore)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Float",":col1width"]}),(0,t.jsx)(n.td,{children:"\u0160irina za prvu kolonu."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Float",":col2width"]}),(0,t.jsx)(n.td,{children:"\u0160irina za drugu kolonu."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"ID novog menija ili -1 ako je gre\u0161ka."}),"\n",(0,t.jsx)(n.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'new Menu:examplemenu;\n\npublic OnGameModeInit()\n{\n    examplemenu = CreateMenu("Tvoj meni", 2, 200.0, 100.0, 150.0, 150.0);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Ova funkcija samo STVARA meni - ShowMenuForPlayer mora se koristiti za prikaz. Mo\u017eete stvoriti i pristupiti samo dvije kolone (0 i 1). Ako je du\u017eina naslova jednaka ili ve\u0107a od 32 znaka, naslov je skra\u0107en na 30 znakova."})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Postoji ograni\u010denje od 12 stavki po meniju i ukupno 128 menija."})}),"\n",(0,t.jsx)(n.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"AddMenuItem",children:"AddMenuItem"}),": Dodaje artikal u odre\u0111eni meni."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"SetMenuColumnHeader",children:"SetMenuColumnHeader"}),": Postavi zaglavlje za jednu kolonu u meniju."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"DestroyMenu",children:"DestroyMenu"}),": Uni\u0161ti meni."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"ShowMenuForPlayer",children:"ShowMenuForPlayer"}),": Prika\u017ei meni za igra\u010da."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"HideMenuForPlayer",children:"HideMenuForPlayer"}),": Sakrij meni za igra\u010da."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../callbacks/OnPlayerSelectedMenuRow",children:"OnPlayerSelectedMenuRow"}),": Pozvano kada igra\u010d odabere red u meniju."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../callbacks/OnPlayerExitedMenu",children:"OnPlayerExitedMenu"}),": Pozvano kada igra\u010d napusti meni."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);