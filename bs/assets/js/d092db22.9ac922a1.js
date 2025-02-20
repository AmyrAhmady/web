"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[99880],{28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>a});var r=n(96540);const t={},s=r.createContext(t);function l(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:i},e.children)}},29140:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/IsValidVehicle","title":"IsValidVehicle","description":"Provjerava da li je vozilo kreirano.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/IsValidVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsValidVehicle","permalink":"/bs/docs/scripting/functions/IsValidVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsValidVehicle.md","tags":[],"version":"current","frontMatter":{"title":"IsValidVehicle","sidebar_label":"IsValidVehicle","description":"Provjerava da li je vozilo kreirano.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"IsValidTimer","permalink":"/bs/docs/scripting/functions/IsValidTimer"},"next":{"title":"IsVehicleDead","permalink":"/bs/docs/scripting/functions/IsVehicleDead"}}');var t=n(74848),s=n(28453);const l={title:"IsValidVehicle",sidebar_label:"IsValidVehicle",description:"Provjerava da li je vozilo kreirano.",tags:[]},a=void 0,o={},c=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Primjer upotrebe",id:"primjer-upotrebe",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["Ova funkcija nije prisutna u starim bibliotekama/library-ima pakiranim sa SA-MP serverom, me\u0111utim ",(0,t.jsx)(i.a,{href:"https://github.com/pawn-lang/samp-stdlib",children:"najnovije verzije odr\u017eavanih biblioteka/library-a"})," sadr\u017ee ovu i druge deklaracije koje su ranije nedostajale ."]})}),"\n",(0,t.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(i.p,{children:"Provjerava da li je vozilo kreirano."}),"\n",(0,t.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Ime"}),(0,t.jsx)(i.th,{children:"Deskripcija"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"vehicleid"}),(0,t.jsx)(i.td,{children:"Vozilo za provjeriti postojanje."})]})})]}),"\n",(0,t.jsx)(i.h2,{id:"return-values",children:"Return Values"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"true"})," ako vozilo postoji, uostalom ",(0,t.jsx)(i.strong,{children:"false"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"primjer-upotrebe",children:"Primjer upotrebe"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:'#if !defined IsValidVehicle\n    native IsValidVehicle(vehicleid);\n#endif\n\n// Count vehicles\npublic OnPlayerCommandText(playerid,cmdtext[])\n{\n    if (!strcmp(cmdtext,"/countvehicles",true))\n    {\n        new\n            count,\n            msg[60];\n\n        for(new i; i < MAX_VEHICLES; i++)\n        {\n            if (IsValidVehicle(i)) count++;\n        }\n\n        format(msg, sizeof(msg), "* Nalazi se %d valjano stvorenih vozila na ovom serveru.", count);\n        SendClientMessage(playerid, 0x33CCCCFF, msg);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPlayerVehicleID",children:"GetPlayerVehicleID"}),": Dobij ID vozila u kojem je igra\u010d trenutno."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetVehicleModel",children:"GetVehicleModel"}),": Dobij ID modela vozila."]}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);