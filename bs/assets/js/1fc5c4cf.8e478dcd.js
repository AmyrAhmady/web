"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[78624],{12266:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>j,frontMatter:()=>l,metadata:()=>a,toc:()=>t});const a=JSON.parse('{"id":"scripting/callbacks/OnVehicleRespray","title":"OnVehicleRespray","description":"Ovaj callback je pozvan kada igra\u010d napusti mod shop, bilo da boja jeste ili nije promijenjena.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleRespray.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleRespray","permalink":"/bs/docs/scripting/callbacks/OnVehicleRespray","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnVehicleRespray.md","tags":[{"inline":true,"label":"vehicle","permalink":"/bs/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleRespray","sidebar_label":"OnVehicleRespray","description":"Ovaj callback je pozvan kada igra\u010d napusti mod shop, bilo da boja jeste ili nije promijenjena.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehiclePaintjob","permalink":"/bs/docs/scripting/callbacks/OnVehiclePaintjob"},"next":{"title":"OnVehicleSirenStateChange","permalink":"/bs/docs/scripting/callbacks/OnVehicleSirenStateChange"}}');var r=n(74848),s=n(28453);const l={title:"OnVehicleRespray",sidebar_label:"OnVehicleRespray",description:"Ovaj callback je pozvan kada igra\u010d napusti mod shop, bilo da boja jeste ili nije promijenjena.",tags:["vehicle"]},o=void 0,c={},t=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,r.jsx)(i.p,{children:"Ovaj callback je pozvan kada igra\u010d napusti mod shop (respray mod shop), bilo da boja jeste ili nije promijenjena. Pripazi, ime je dvosmisleno, Pay 'n' Spray shopovine pozivaju ovaj callback."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Ime"}),(0,r.jsx)(i.th,{children:"Deskripcija"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"playerid"}),(0,r.jsx)(i.td,{children:"ID igra\u010da koji vozi vozilo."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"vehicleid"}),(0,r.jsx)(i.td,{children:"ID vozila koje je respray-ovano."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"color1"}),(0,r.jsx)(i.td,{children:"Primarna boja vozila koja je promijenjena."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"color2"}),(0,r.jsx)(i.td,{children:"Sekundarna boja vozila koja je promijenjena."})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:"Uvijek je pozvan prvo u gamemodeu tako da \u0107e return-ovanje 0 ovdje blokirati ostale skripte da ga vide."}),"\n",(0,r.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'public OnVehicleRespray(playerid, vehicleid, color1, color2)\n{\n    new string[48];\n    format(string, sizeof(string), "You resprayed vehicle %d to colors %d and %d!", vehicleid, color1, color2);\n    SendClientMessage(playerid, COLOR_GREEN, string);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,r.jsxs)(i.admonition,{type:"tip",children:[(0,r.jsxs)(i.p,{children:["Ovaj callback nije pozvan od strane ",(0,r.jsx)(i.code,{children:"ChangeVehicleColor"}),". Zavaravaju\u0107i, ovaj callback nije pozvan za pay 'n' spray (samo modshopovi)."]}),(0,r.jsxs)(i.p,{children:["Rje\u0161enje ovdje: ",(0,r.jsx)(i.a,{href:"http://pastebin.com/G81da7N1",children:"http://pastebin.com/G81da7N1"})]})]}),"\n",(0,r.jsx)(i.admonition,{type:"warning",children:(0,r.jsx)(i.p,{children:"Poznati bug(ovi): pregled komponente unutar mod shopa mo\u017ee pozvati ovaj callback."})}),"\n",(0,r.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/bs/docs/scripting/functions/ChangeVehicleColor",children:"ChangeVehicleColor"}),": Postavi boju vozila."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/bs/docs/scripting/functions/ChangeVehiclePaintjob",children:"ChangeVehiclePaintjob"}),": Promijeni paintjob vozila."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/bs/docs/scripting/callbacks/OnVehiclePaintjob",children:"OnVehiclePaintjob"}),": Pozvano kada se paintjob vozila promijeni."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/bs/docs/scripting/callbacks/OnVehicleMod",children:"OnVehicleMod"}),": Pozvano kada se vozilo modira/uredi."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/bs/docs/scripting/callbacks/OnEnterExitModShop",children:"OnEnterExitModShop"}),": Pozvano kada vozilo u\u0111e ili iza\u0111e u/iz mod shopa."]}),"\n"]})]})}function j(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>o});var a=n(96540);const r={},s=a.createContext(r);function l(e){const i=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:i},e.children)}}}]);