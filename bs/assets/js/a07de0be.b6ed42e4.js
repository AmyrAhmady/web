"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[63805],{27241:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/callbacks/OnVehicleStreamIn","title":"OnVehicleStreamIn","description":"Pozvan kada se vozilo pojavi u igra\u010devom klijentu.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleStreamIn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleStreamIn","permalink":"/bs/docs/scripting/callbacks/OnVehicleStreamIn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnVehicleStreamIn.md","tags":[{"inline":true,"label":"vehicle","permalink":"/bs/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleStreamIn","sidebar_label":"OnVehicleStreamIn","description":"Pozvan kada se vozilo pojavi u igra\u010devom klijentu.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleSpawn","permalink":"/bs/docs/scripting/callbacks/OnVehicleSpawn"},"next":{"title":"OnVehicleStreamOut","permalink":"/bs/docs/scripting/callbacks/OnVehicleStreamOut"}}');var r=n(74848),l=n(28453);const a={title:"OnVehicleStreamIn",sidebar_label:"OnVehicleStreamIn",description:"Pozvan kada se vozilo pojavi u igra\u010devom klijentu.",tags:["vehicle"]},s=void 0,c={},o=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){const i={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,r.jsx)(i.p,{children:"Pozvan kada se vozilo pojavi u igra\u010devom klijentu."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Ime"}),(0,r.jsx)(i.th,{children:"Deskripcija"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"vehicleid"}),(0,r.jsx)(i.td,{children:"ID vozila koje se pojavilo u igra\u010devom klijentu."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"forplayerid"}),(0,r.jsx)(i.td,{children:"ID igra\u010da u \u010dijem se klijentu pojavilo vozilo."})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:"Uvijek je pozvan prvo u filterskriptama."}),"\n",(0,r.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'public OnVehicleStreamIn(vehicleid, forplayerid)\n{\n    new string[32];\n    format(string, sizeof(string), "Sada mozes da vidis vozilo %d.", vehicleid);\n    SendClientMessage(forplayerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsx)(i.p,{children:"Ovaj callback pozvat \u0107e i NPC."})}),"\n",(0,r.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"})]})}function p(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>s});var t=n(96540);const r={},l=t.createContext(r);function a(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);