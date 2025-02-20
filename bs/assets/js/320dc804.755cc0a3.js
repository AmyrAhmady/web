"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[27489],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var i=t(96540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}},70122:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"scripting/functions/SetMenuColumnHeader","title":"SetMenuColumnHeader","description":"Postavlja naslov stupca u meniju.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/SetMenuColumnHeader.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetMenuColumnHeader","permalink":"/bs/docs/scripting/functions/SetMenuColumnHeader","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetMenuColumnHeader.md","tags":[{"inline":true,"label":"menu","permalink":"/bs/docs/tags/menu"}],"version":"current","frontMatter":{"title":"SetMenuColumnHeader","sidebar_label":"SetMenuColumnHeader","description":"Postavlja naslov stupca u meniju.","tags":["menu"]},"sidebar":"docsSidebar","previous":{"title":"SetGravity","permalink":"/bs/docs/scripting/functions/SetGravity"},"next":{"title":"SetModeRestartTime","permalink":"/bs/docs/scripting/functions/SetModeRestartTime"}}');var r=t(74848),s=t(28453);const a={title:"SetMenuColumnHeader",sidebar_label:"SetMenuColumnHeader",description:"Postavlja naslov stupca u meniju.",tags:["menu"]},d=void 0,o={},l=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,r.jsx)(n.p,{children:"Postavlja naslov stupca u meniju."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Ime"}),(0,r.jsx)(n.th,{children:"Deskripcija"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menuid"}),(0,r.jsx)(n.td,{children:"ID menija za izmijeniti."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"column"}),(0,r.jsx)(n.td,{children:"Stupac (0 ili 1) za postaviti naslov."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"text[]"}),(0,r.jsx)(n.td,{children:"Tekst opisa za stupac."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,r.jsx)(n.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new Menu: gTestMenu;\n\n// U ovom su meniju dva reda\ngTestMenu = CreateMenu("Menu Header", 2, 200.0, 100.0, 150.0, 150.0);\nSetMenuColumnHeader(gTestMenu, 0, "Row 1");\nSetMenuColumnHeader(gTestMenu, 1, "Row 2");\n\n// Dodajte mu stavke u meniju.\nAddMenuItem(gTestMenu, 0, "Row1 Item1");\nAddMenuItem(gTestMenu, 1, "Row2 Item1");\n'})}),"\n",(0,r.jsx)(n.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Crashuje kada se proslijedi neva\u017ee\u0107i ID menija."})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Imajte na umu da pomo\u0107u AddMenuItem mo\u017eete dodati samo 12 predmeta/stavki. 13. objekt menija zamijenio bi zaglavlje stupca koje je pravilno postavljeno ovom funkcijom."})}),"\n",(0,r.jsx)(n.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"AddMenuItem",children:"AddMenuItem"}),": Dodaj artikal u meni."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"CreateMenu",children:"CreateMenu"}),": Kreiraj meni."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../callbacks/OnPlayerSelectedMenuRow",children:"OnPlayerSelectedMenuRow"}),": Pozvano kada igra\u010d odabere red u meniju."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}}}]);