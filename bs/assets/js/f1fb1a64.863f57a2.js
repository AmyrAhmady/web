"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[99436],{28453:(i,e,t)=>{t.d(e,{R:()=>o,x:()=>s});var a=t(96540);const r={},n=a.createContext(r);function o(i){const e=a.useContext(n);return a.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function s(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(r):i.components||r:o(i.components),a.createElement(n.Provider,{value:e},i.children)}},67354:(i,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"scripting/functions/CreatePickup","title":"CreatePickup","description":"Ova funkcija radi u potpunosti isto kao i AddStaticPickup, osim \u0161to returna (vra\u0107a) ID pickupa koji se mo\u017ee upotrijebiti za njegovo uni\u0161tavanje nakon \u010dega se mo\u017ee pratiti pomo\u0107u OnPlayerPickUpPickup.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/CreatePickup.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreatePickup","permalink":"/bs/docs/scripting/functions/CreatePickup","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/CreatePickup.md","tags":[],"version":"current","frontMatter":{"title":"CreatePickup","sidebar_label":"CreatePickup","description":"Ova funkcija radi u potpunosti isto kao i AddStaticPickup, osim \u0161to returna (vra\u0107a) ID pickupa koji se mo\u017ee upotrijebiti za njegovo uni\u0161tavanje nakon \u010dega se mo\u017ee pratiti pomo\u0107u OnPlayerPickUpPickup.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"CreateObject","permalink":"/bs/docs/scripting/functions/CreateObject"},"next":{"title":"CreatePlayer3DTextLabel","permalink":"/bs/docs/scripting/functions/CreatePlayer3DTextLabel"}}');var r=t(74848),n=t(28453);const o={title:"CreatePickup",sidebar_label:"CreatePickup",description:"Ova funkcija radi u potpunosti isto kao i AddStaticPickup, osim \u0161to returna (vra\u0107a) ID pickupa koji se mo\u017ee upotrijebiti za njegovo uni\u0161tavanje nakon \u010dega se mo\u017ee pratiti pomo\u0107u OnPlayerPickUpPickup.",tags:[]},s=void 0,c={},p=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function u(i){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...i.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,r.jsx)(e.p,{children:"Ova funkcija radi u potpunosti isto kao i AddStaticPickup, osim \u0161to returna (vra\u0107a) ID pickupa koji se mo\u017ee upotrijebiti za njegovo uni\u0161tavanje nakon \u010dega se mo\u017ee pratiti pomo\u0107u OnPlayerPickUpPickup."}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Ime"}),(0,r.jsx)(e.th,{children:"Deskripcija"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"../resources/pickupids",children:"model"})}),(0,r.jsx)(e.td,{children:"Model pickupa."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"../resources/pickuptypes",children:"type"})}),(0,r.jsx)(e.td,{children:"Tip pickupa. Odre\u0111uje kako \u0107e pickup reagovati."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["Float",":X"]}),(0,r.jsx)(e.td,{children:"X kordinata za kreirati pickup."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["Float",":Y"]}),(0,r.jsx)(e.td,{children:"Y kordinata za kreirati pickup."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["Float",":Z"]}),(0,r.jsx)(e.td,{children:"Z kordinata za kreirati pickup."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"virtualworld"}),(0,r.jsx)(e.td,{children:"ID virtualnog svijeta pickupa. Koristi -1 da bi se pickup prikazao u svim svjetovima."})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(e.p,{children:"ID kreiranog pickupa, -1 ukoliko do\u0111e do gre\u0161ke (pickup max limit)."}),"\n",(0,r.jsx)(e.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new pickup; // kreiramo varijablu u koju \u0107emo sa\u010duvati ID pickupa\n\npublic OnGameModeInit()\n{\n    pickup = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);\n    // Kreiramo armor pickup i \u010duvamo ga u 'pickup' varijablu\n    return 1;\n}\n\n// Kasnije..\nDestroyPickup(pickup); // Primjer kori\u0161tenja Pickup ID-a\npickup = 0; // varijablu pickupa treba resetirati kako bi se izbjegli budu\u0107i problemi\n"})}),"\n",(0,r.jsx)(e.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsx)(e.p,{children:'Jedina vrsta pickupa koja se mo\u017ee pokupiti iz vozila je 14 (osim posebnih pickupa poput bribe-a). Pickupi su prikazani i mogu ih pokupiti svi igra\u010di. Mogu\u0107e je da ako se DestroyPickup () koristi kada se podi\u017ee, vi\u0161e od jednog igra\u010da mo\u017ee pokupiti pickup zbog zaostajanja. To se mo\u017ee zaobi\u0107i kori\u0161tenjem varijabli. Odre\u0111ene vrste pickupa dolaze s "automatskim odgovorima", na primjer, upotreba modela M4 u pickupa automatski \u0107e dati igra\u010du oru\u017eje i malo streljiva. Za potpuno skriptirane pickupe treba koristiti tip 1.'})}),"\n",(0,r.jsx)(e.admonition,{type:"warning",children:(0,r.jsx)(e.p,{children:"Poznati Bug(ovi): Pickupi koji imaju X ili Y ni\u017ei od -4096,0 ili ve\u0107i od 4096,0 ne\u0107e se pojaviti niti \u0107e pokrenuti OnPlayerPickUpPickup."})}),"\n",(0,r.jsx)(e.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"AddStaticPickup",children:"AddStaticPickup"}),": Dodaj stati\u010dni pickup."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"DestroyPickup",children:"DestroyPickup"}),": Uni\u0161ti pickup."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"../callbacks/OnPlayerPickUpPickup",children:"OnPlayerPickUpPickup"}),": Pozvano kada igra\u010d pokupi pickup."]}),"\n"]})]})}function d(i={}){const{wrapper:e}={...(0,n.R)(),...i.components};return e?(0,r.jsx)(e,{...i,children:(0,r.jsx)(u,{...i})}):u(i)}}}]);