"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[49764],{28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var a=i(96540);const t={},s=a.createContext(t);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(s.Provider,{value:n},e.children)}},57930:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"scripting/functions/SendClientMessage","title":"SendClientMessage","description":"Ova funkcija \u0161alje poruku navedenom igra\u010du sa odabranom bojom u chatu.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/SendClientMessage.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SendClientMessage","permalink":"/bs/docs/scripting/functions/SendClientMessage","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SendClientMessage.md","tags":[],"version":"current","frontMatter":{"title":"SendClientMessage","sidebar_label":"SendClientMessage","description":"Ova funkcija \u0161alje poruku navedenom igra\u010du sa odabranom bojom u chatu.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SendClientCheck","permalink":"/bs/docs/scripting/functions/SendClientCheck"},"next":{"title":"SendClientMessageToAll","permalink":"/bs/docs/scripting/functions/SendClientMessageToAll"}}');var t=i(74848),s=i(28453);const r={title:"SendClientMessage",sidebar_label:"SendClientMessage",description:"Ova funkcija \u0161alje poruku navedenom igra\u010du sa odabranom bojom u chatu.",tags:[]},o=void 0,l={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(n.p,{children:"Ova funkcija \u0161alje poruku navedenom igra\u010du sa odabranom bojom u chatu. Cijela linija u chatboxu \u0107e biti u postavljenoj boji sve dok se ne koristi ugra\u0111ivanje boja u tekstu."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Ime"}),(0,t.jsx)(n.th,{children:"Deskripcija"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"ID igra\u010da za prikazati poruku."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"color"}),(0,t.jsx)(n.td,{children:"Boja poruke (0xRRGGBBAA Hex format)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"const message[]"}),(0,t.jsx)(n.td,{children:"Tekst za prikazati (max 144 karaktera)."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena. Uspje\u0161no je prijavljeno i kada je string ve\u0107i od 144 karaktera, ali poruka ne\u0107e biti poslana."}),"\n",(0,t.jsx)(n.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Igra\u010d nije konektovan."}),"\n",(0,t.jsx)(n.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#define COLOR_RED 0xFF0000FF\n\npublic OnPlayerConnect(playerid)\n{\n    SendClientMessage(playerid, COLOR_RED, "Ovaj tekst je crven");\n    SendClientMessage(playerid, 0x00FF00FF, "Ovaj tekst je zelen.");\n    SendClientMessage(playerid, -1, "Ovaj tekst je bijel.");\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Ugradnju boja mo\u017eete koristiti za vi\u0161e boja u poruci. Kori\u0161tenje '-1' kao boje u\u010dinit \u0107e tekst bijelim (iz jednostavnog razloga \u0161to je -1, kada je predstavljen u heksadecimalnom zapisu, 0xFFFFFFFF)."})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Ako je poruka du\u017ea od 144 znaka, ne\u0107e se poslati. Skra\u0107ivanje se mo\u017ee koristiti da se to sprije\u010di. Prikazivanje poruke u vi\u0161e redaka tako\u0111er \u0107e rije\u0161iti ovaj problem. Izbjegavajte upotrebu znaka postotka (ili specifikatora formata) u stvarnom tekstu poruke, a da ga pravilno ne izbjegnete (poput %%). U suprotnom \u0107e rezultirati padovima."})}),"\n",(0,t.jsx)(n.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"SendClientMessageToAll",children:"SendClientMessageToAll"}),": Po\u0161alji poruku svim igra\u010dima."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"SendPlayerMessageToPlayer",children:"SendPlayerMessageToPlayer"}),": Prisilite igra\u010da da po\u0161alje tekst za jednog igra\u010da."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"SendPlayerMessageToAll",children:"SendPlayerMessageToAll"}),": Prisilite igra\u010da da po\u0161alje tekst za sve igra\u010de."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);