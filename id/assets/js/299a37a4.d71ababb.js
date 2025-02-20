"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[44843],{17042:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>t,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"tutorials/servervariablesystem","title":"Server variable system","description":"Server variable system (disingkat, SVar) adalah cara baru untung membuat server variabel dalam cara mudah membuat method yang efisien, dengan begitu cara ini bisa dipakai di gamemode server dan filterscripts dalam waktu bersamaan.","source":"@site/i18n/id/docusaurus-plugin-content-docs/current/tutorials/servervariablesystem.md","sourceDirName":"tutorials","slug":"/tutorials/servervariablesystem","permalink":"/id/docs/tutorials/servervariablesystem","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/tutorials/servervariablesystem.md","tags":[],"version":"current","frontMatter":{"title":"Server variable system","sidebar_label":"Server variable system","description":"Server variable system (disingkat, SVar) adalah cara baru untung membuat server variabel dalam cara mudah membuat method yang efisien, dengan begitu cara ini bisa dipakai di gamemode server dan filterscripts dalam waktu bersamaan."},"sidebar":"docsSidebar","previous":{"title":"Cooldowns","permalink":"/id/docs/tutorials/cooldowns"},"next":{"title":"String Manipulation","permalink":"/id/docs/tutorials/stringmanipulation"}}');var r=n(74848),s=n(28453);const t={title:"Server variable system",sidebar_label:"Server variable system",description:"Server variable system (disingkat, SVar) adalah cara baru untung membuat server variabel dalam cara mudah membuat method yang efisien, dengan begitu cara ini bisa dipakai di gamemode server dan filterscripts dalam waktu bersamaan."},l=void 0,d={},u=[{value:"Keuntungan",id:"keuntungan",level:2},{value:"Kekurangan",id:"kekurangan",level:2},{value:"Fungsi yang Berelasi",id:"fungsi-yang-berelasi",level:2}];function m(a){const e={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...a.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Server variable system"})," (disingkat, ",(0,r.jsx)(e.strong,{children:"SVar"}),") adalah cara baru untung membuat server variabel dalam cara mudah membuat method yang efisien, dengan begitu cara ini bisa dipakai di gamemode server dan filterscripts dalam waktu bersamaan."]}),"\n",(0,r.jsxs)(e.p,{children:["Sistem ini mirip seperti ",(0,r.jsx)(e.a,{href:"perplayervariablesystem",children:"PVars"}),", tetapi tidak terikat player ID."]}),"\n",(0,r.jsx)(e.admonition,{type:"warning",children:(0,r.jsx)(e.p,{children:"Sistem ini dikenalkan pada SA-MP 0.3.7 R2-1 dan tidak akan bisa berjalan pada versi dibawahnya!"})}),"\n",(0,r.jsx)(e.admonition,{type:"note",children:(0,r.jsx)(e.p,{children:"Sistem SVar ini mirip seperti PVars, tetapi variabel dibuat secara keseluruhan server, tidak terikat pada semua player ID, dan akan tetap sampai gamemode berganti."})}),"\n",(0,r.jsx)(e.h2,{id:"keuntungan",children:"Keuntungan"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"SVars dapat di bagi/akses seluruh skrip gamemode dan filterscripts."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Anda bisa dengan mudahnya menghitung dan menyimpan daftar SVar. Dengan ini memudahkan proses debugging."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Walaupun SVar belum dibuat sama sekali, nilainya akan kembali ke nilai default yaitu 0."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"SVars dapat menampung string yang sangat besar menggunakan memori yang dialokasikan secara dinamis."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Anda dapat Set, Get, dan Create SVars ingame."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"kekurangan",children:"Kekurangan"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"SVars lebih lambat dari variabel regular. Secara umum lebih menguntungkan untuk mengoptimalisasi memori untuk kecepatan, daripada sebaliknya."}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"fungsi-yang-berelasi",children:"Fungsi yang Berelasi"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"../scripting/functions/SetSVarInt",children:"SetSVarInt"}),": mengatur sebuah nilai integer didalam variabel server."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"../scripting/functions/GetSVarInt",children:"GetSVarInt"}),": mengambil nilai pemain yang sedang bermain dala bentuk integer."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"../scripting/functions/SetSVarString",children:"SetSVarString"}),": mengatur sebuah nilai string didalam variabel server."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"../scripting/functions/GetSVarString",children:"GetSVarString"}),": mengambil nilai yang sebelumnya telah diatur stringnya di dalam variabel server."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"../scripting/functions/SetSVarFloat",children:"SetSVarFloat"}),": mengatur sebuah nilai float didalam server variabel."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"../scripting/functions/GetSVarFloat",children:"GetSVarFloat"}),": mengambil nilai yang sebelumnya telah diatur floatnya di dalam variabel server."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"../scripting/functions/DeleteSVar",children:"DeleteSVar"}),": hapus sebuah variabel server."]}),"\n"]})]})}function c(a={}){const{wrapper:e}={...(0,s.R)(),...a.components};return e?(0,r.jsx)(e,{...a,children:(0,r.jsx)(m,{...a})}):m(a)}},28453:(a,e,n)=>{n.d(e,{R:()=>t,x:()=>l});var i=n(96540);const r={},s=i.createContext(r);function t(a){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function l(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(r):a.components||r:t(a.components),i.createElement(s.Provider,{value:e},a.children)}}}]);