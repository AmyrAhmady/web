"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[73946],{647:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/SetPlayerWorldBounds","title":"SetPlayerWorldBounds","description":"Postavite granice svijeta igra\u010du.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerWorldBounds.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerWorldBounds","permalink":"/bs/docs/scripting/functions/SetPlayerWorldBounds","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerWorldBounds.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerWorldBounds","sidebar_label":"SetPlayerWorldBounds","description":"Postavite granice svijeta igra\u010du.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerWeather","permalink":"/bs/docs/scripting/functions/SetPlayerWeather"},"next":{"title":"SetSVarFloat","permalink":"/bs/docs/scripting/functions/SetSVarFloat"}}');var t=i(74848),a=i(28453);const s={title:"SetPlayerWorldBounds",sidebar_label:"SetPlayerWorldBounds",description:"Postavite granice svijeta igra\u010du.",tags:["player"]},d=void 0,l={},o=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(n.p,{children:"Postavite granice svijeta igra\u010du. Igra\u010di ne mogu i\u0107i izvan granica (bi\u0107e gurnuti nazad)."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Ime"}),(0,t.jsx)(n.th,{children:"Deskripcija"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"ID igra\u010da za postaviti granice svijeta."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Float",":x_max"]}),(0,t.jsx)(n.td,{children:"Maksimalna X kordinata gdje igra\u010d mo\u017ee i\u0107i."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Float",":x_min"]}),(0,t.jsx)(n.td,{children:"Maksimalna X kordinata gdje igra\u010d mo\u017ee i\u0107i."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Float",":y_max"]}),(0,t.jsx)(n.td,{children:"Minimalna Y kordinata gdje igra\u010d mo\u017ee i\u0107i."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["Float",":y_min"]}),(0,t.jsx)(n.td,{children:"Minimalna Y kordinata gdje igra\u010d mo\u017ee i\u0107i."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,t.jsx)(n.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    SetPlayerWorldBounds(playerid, 20.0, 0.0, 20.0, 0.0);\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"               (Sjever)\n                 ymax\n             |----------|\n             |          |\n(Zapad) xmin |          | xmax (Istok)\n             |          |\n             |----------|\n                 ymin\n                 (Jug)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Svjetske granice igra\u010da mogu se resetirati postavljanjem na 20000.0000, -20000.0000, 20000.0000, -20000.0000. To su zadane vrijednosti."})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Ova funkcija ne radi u enterijerima!"})}),"\n",(0,t.jsx)(n.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"GangZoneCreate",children:"GangZoneCreate"}),": Kreiraj gangzonu."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var r=i(96540);const t={},a=r.createContext(t);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);