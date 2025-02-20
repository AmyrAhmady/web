"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[55674],{9250:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"scripting/functions/Kick","title":"Kick","description":"Izbacuje igra\u010da sa servera. Morati \u0107e napustiti igru i ponovno se konektovati ako \u017eele da nastave igrati.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/Kick.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Kick","permalink":"/bs/docs/scripting/functions/Kick","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/Kick.md","tags":[{"inline":true,"label":"administration","permalink":"/bs/docs/tags/administration"}],"version":"current","frontMatter":{"title":"Kick","sidebar_label":"Kick","description":"Izbacuje igra\u010da sa servera. Morati \u0107e napustiti igru i ponovno se konektovati ako \u017eele da nastave igrati.","tags":["administration"]},"sidebar":"docsSidebar","previous":{"title":"IsVehicleStreamedIn","permalink":"/bs/docs/scripting/functions/IsVehicleStreamedIn"},"next":{"title":"KillTimer","permalink":"/bs/docs/scripting/functions/KillTimer"}}');var r=n(74848),t=n(28453);const s={title:"Kick",sidebar_label:"Kick",description:"Izbacuje igra\u010da sa servera. Morati \u0107e napustiti igru i ponovno se konektovati ako \u017eele da nastave igrati.",tags:["administration"]},o=void 0,c={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,r.jsx)(i.p,{children:"Izbacuje igra\u010da sa servera. Morati \u0107e napustiti igru i ponovno se konektovati ako \u017eele da nastave igrati."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Ime"}),(0,r.jsx)(i.th,{children:"Deskripcija"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"playerid"}),(0,r.jsx)(i.td,{children:"ID igra\u010da za izbaciti."})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:"Ova funkcija uvijek returna (vra\u0107a) 1, bilo da funckija ne uspije da se izvr\u0161i (navedeni igra\u010d ne postoji)."}),"\n",(0,r.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,r.jsx)(i.admonition,{type:"warning",children:(0,r.jsx)(i.p,{children:"Bilo koja radnja poduzeta neposredno prije Kicka() (poput slanja poruke pomo\u0107u SendClientMessage) ne\u0107e do\u0107i do igra\u010da. Za odgodu udarca mora se koristiti tajmer."})}),"\n",(0,r.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'// Da bi se prikazala poruka (npr. Razlog) za ure\u0111aj prije nego \u0161to se veza prekine\n// morate koristiti tajmer za stvaranje ka\u0161njenja. Ovo ka\u0161njenje treba biti samo nekoliko milisekundi,\n// ali ovaj primjer koristi punu sekundu samo da bi bio na sigurnoj strani.\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/kickme", true) == 0)\n    {\n        // Izbacite igra\u010da koji je izvr\u0161io ovu naredbu.\n\n        // Prvo im po\u0161aljite poruku\n        SendClientMessage(playerid, 0xFF0000FF, "You have been kicked!");\n\n        // Zapravo ih izbacite sekundu kasnije na tajmeru.\n        SetTimerEx("DelayedKick", 1000, false, "i", playerid);\n        return 1;\n    }\n    return 0;\n}\n\nforward DelayedKick(playerid);\npublic DelayedKick(playerid)\n{\n    Kick(playerid);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"Ban",children:"Ban"}),": Banuj igra\u010da sa servera."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"BanEx",children:"BanEx"}),": Banuj igra\u010da sa servera uz prilago\u0111enu poruku."]}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>o});var a=n(96540);const r={},t=a.createContext(r);function s(e){const i=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(t.Provider,{value:i},e.children)}}}]);