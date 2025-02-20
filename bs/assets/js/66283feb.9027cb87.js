"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[20147],{28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>s});var r=i(96540);const t={},a=r.createContext(t);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(a.Provider,{value:n},e.children)}},63190:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/IsPlayerInCheckpoint","title":"IsPlayerInCheckpoint","description":"Provjerite je li igra\u010d trenutno u checkpointu/markeru, ovo bi se moglo koristiti, na primjer, za svojstva ili teleport ta\u010dke.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/IsPlayerInCheckpoint.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerInCheckpoint","permalink":"/bs/docs/scripting/functions/IsPlayerInCheckpoint","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsPlayerInCheckpoint.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/bs/docs/tags/checkpoint"}],"version":"current","frontMatter":{"title":"IsPlayerInCheckpoint","sidebar_label":"IsPlayerInCheckpoint","description":"Provjerite je li igra\u010d trenutno u checkpointu/markeru, ovo bi se moglo koristiti, na primjer, za svojstva ili teleport ta\u010dke.","tags":["player","checkpoint"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerInAnyVehicle","permalink":"/bs/docs/scripting/functions/IsPlayerInAnyVehicle"},"next":{"title":"IsPlayerInDriveByMode","permalink":"/bs/docs/scripting/functions/IsPlayerInDriveByMode"}}');var t=i(74848),a=i(28453);const c={title:"IsPlayerInCheckpoint",sidebar_label:"IsPlayerInCheckpoint",description:"Provjerite je li igra\u010d trenutno u checkpointu/markeru, ovo bi se moglo koristiti, na primjer, za svojstva ili teleport ta\u010dke.",tags:["player","checkpoint"]},s=void 0,l={},o=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(n.p,{children:"Provjerite je li igra\u010d trenutno u checkpointu/markeru, ovo bi se moglo koristiti, na primjer, za svojstva ili teleport ta\u010dke."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Ime"}),(0,t.jsx)(n.th,{children:"Deskripcija"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"Igra\u010d za kojeg \u017eelite znati status."})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"false/la\u017eno ako igra\u010d nije u checkpointu/markeru, uostalom true/ta\u010dno"}),"\n",(0,t.jsx)(n.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"if (IsPlayerInCheckpoint(playerid))\n{\n    SetPlayerHealth(playerid, 100.0);\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"SetPlayerCheckpoint",children:"SetPlayerCheckpoint"}),": Kreiraj checkpoint za igra\u010da."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"DisablePlayerCheckpoint",children:"DisablePlayerCheckpoint"}),": Onemogu\u0107i igra\u010dev trenutni checkpoint."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"SetPlayerRaceCheckpoint",children:"SetPlayerRaceCheckpoint"}),": Kreiraj race checkpoint za igra\u010da."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"DisablePlayerRaceCheckpoint",children:"DisablePlayerRaceCheckpoint"}),": Onemogu\u0107i igra\u010dev trenutni race checkpoint."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"IsPlayerInRaceCheckpoint",children:"IsPlayerInRaceCheckpoint"}),": Provjeri da li je igra\u010d u race checkpointu."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../callbacks/OnPlayerEnterCheckpoint",children:"OnPlayerEnterCheckpoint"}),": Pozvano kada igra\u010d u\u0111e u checkpoint."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../callbacks/OnPlayerLeaveCheckpoint",children:"OnPlayerLeaveCheckpoint"}),": Pozvano kada igra\u010d napusti checkpoint."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../callbacks/OnPlayerEnterRaceCheckpoint",children:"OnPlayerEnterRaceCheckpoint"}),": Pozvano kada igra\u010d u\u0111e u race checkpoint."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../callbacks/OnPlayerLeaveRaceCheckpoint",children:"OnPlayerLeaveRaceCheckpoint"}),": Pozvano kada igra\u010d napusti race checkpoint."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);