"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[57104],{14088:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"scripting/functions/DisablePlayerRaceCheckpoint","title":"DisablePlayerRaceCheckpoint","description":"Onemogu\u0107ite inicijalizirane race checkpointe za odre\u0111enog igra\u010da, jer u svakom trenutku mo\u017eete imati samo jednu.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/DisablePlayerRaceCheckpoint.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DisablePlayerRaceCheckpoint","permalink":"/bs/docs/scripting/functions/DisablePlayerRaceCheckpoint","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/DisablePlayerRaceCheckpoint.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/bs/docs/tags/checkpoint"},{"inline":true,"label":"racecheckpoint","permalink":"/bs/docs/tags/racecheckpoint"}],"version":"current","frontMatter":{"title":"DisablePlayerRaceCheckpoint","sidebar_label":"DisablePlayerRaceCheckpoint","description":"Onemogu\u0107ite inicijalizirane race checkpointe za odre\u0111enog igra\u010da, jer u svakom trenutku mo\u017eete imati samo jednu.","tags":["player","checkpoint","racecheckpoint"]},"sidebar":"docsSidebar","previous":{"title":"DisablePlayerCheckpoint","permalink":"/bs/docs/scripting/functions/DisablePlayerCheckpoint"},"next":{"title":"DisableRemoteVehicleCollisions","permalink":"/bs/docs/scripting/functions/DisableRemoteVehicleCollisions"}}');var r=n(74848),c=n(28453);const t={title:"DisablePlayerRaceCheckpoint",sidebar_label:"DisablePlayerRaceCheckpoint",description:"Onemogu\u0107ite inicijalizirane race checkpointe za odre\u0111enog igra\u010da, jer u svakom trenutku mo\u017eete imati samo jednu.",tags:["player","checkpoint","racecheckpoint"]},s=void 0,l={},o=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function h(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,r.jsx)(i.p,{children:"Onemogu\u0107ite inicijalizirane race checkpointe za odre\u0111enog igra\u010da, jer u svakom trenutku mo\u017eete imati samo jednu."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Ime"}),(0,r.jsx)(i.th,{children:"Deskripcija"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"playerid"}),(0,r.jsx)(i.td,{children:"Igra\u010d za kojeg se vr\u0161i onemogu\u0107avanje trenutnog checkpointa."})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,r.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:"public OnPlayerLeaveRaceCheckpoint(playerid)\n{\n    DisablePlayerRaceCheckpoint(playerid);\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetPlayerCheckpoint",children:"SetPlayerCheckpoint"}),": Kreiraj checkpoint za igra\u010da."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"DisablePlayerCheckpoint",children:"DisablePlayerCheckpoint"}),": Onemogu\u0107i igra\u010dev trenutni checkpoint."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"IsPlayerInCheckpoint",children:"IsPlayerInCheckpoint"}),": Provjeri da li je igra\u010d u checkpointu."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetPlayerRaceCheckpoint",children:"SetPlayerRaceCheckpoint"}),": Kreiraj race checkpoint za igra\u010da."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"IsPlayerInRaceCheckpoint",children:"IsPlayerInRaceCheckpoint"}),": Provjeri da li je igra\u010d u race checkpointu."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"../callbacks/OnPlayerEnterCheckpoint",children:"OnPlayerEnterCheckpoint"}),": Pozvano kada igra\u010d u\u0111e u checkpoint."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"../callbacks/OnPlayerLeaveCheckpoint",children:"OnPlayerLeaveCheckpoint"}),": Pozvano kada igra\u010d napusti checkpoint."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"../callbacks/OnPlayerEnterRaceCheckpoint",children:"OnPlayerEnterRaceCheckpoint"}),": Pozvano kada igra\u010d u\u0111e u race checkpoint."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"../callbacks/OnPlayerLeaveRaceCheckpoint",children:"OnPlayerLeaveRaceCheckpoint"}),": Pozvano kada igra\u010d napusti race checkpoint."]}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>s});var a=n(96540);const r={},c=a.createContext(r);function t(e){const i=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(c.Provider,{value:i},e.children)}}}]);