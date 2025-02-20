"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[86168],{21709:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scripting/callbacks/OnObjectMoved","title":"OnObjectMoved","description":"Callback ini akan terpanggil ketika sebuah object berpindah setelah MoveObject (ketika selesai bergerak).","source":"@site/i18n/id/docusaurus-plugin-content-docs/current/scripting/callbacks/OnObjectMoved.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnObjectMoved","permalink":"/id/docs/scripting/callbacks/OnObjectMoved","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnObjectMoved.md","tags":[],"version":"current","frontMatter":{"title":"OnObjectMoved","sidebar_label":"OnObjectMoved","description":"Callback ini akan terpanggil ketika sebuah object berpindah setelah MoveObject (ketika selesai bergerak).","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnNPCSpawn","permalink":"/id/docs/scripting/callbacks/OnNPCSpawn"},"next":{"title":"OnPickupStreamIn","permalink":"/id/docs/scripting/callbacks/OnPickupStreamIn"}}');var a=t(74848),c=t(28453);const r={title:"OnObjectMoved",sidebar_label:"OnObjectMoved",description:"Callback ini akan terpanggil ketika sebuah object berpindah setelah MoveObject (ketika selesai bergerak).",tags:[]},s=void 0,l={},d=[{value:"Deskripsi",id:"deskripsi",level:2},{value:"Returns",id:"returns",level:2},{value:"Contoh",id:"contoh",level:2},{value:"Catatan",id:"catatan",level:2},{value:"Fungsi Terkait",id:"fungsi-terkait",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"deskripsi",children:"Deskripsi"}),"\n",(0,a.jsx)(n.p,{children:"Callback ini akan terpanggil ketika sebuah object berpindah setelah MoveObject (ketika selesai bergerak)."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Nama"}),(0,a.jsx)(n.th,{children:"Deskripsi"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objectid"}),(0,a.jsx)(n.td,{children:"ID dari sebuah object yang dipindahkan"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"Ini akan selalu terpanggil pertama di filterscripts."}),"\n",(0,a.jsx)(n.h2,{id:"contoh",children:"Contoh"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'public OnObjectMoved(objectid)\n{\n    printf("Object %d telah selesai bergerak", objectid);\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"catatan",children:"Catatan"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"SetObjectPos tidak akan bekerja ketika menggunakan callback ini. Untuk memperbaiki, buatlah ulang objectnya."})}),"\n",(0,a.jsx)(n.h2,{id:"fungsi-terkait",children:"Fungsi Terkait"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/id/docs/scripting/functions/MoveObject",children:"MoveObject"}),": Memindahkan Object."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/MovePlayerObject.md",children:"MovePlayerObject"}),": Memindahkan player object."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/IsObjectMoving.md",children:"IsObjectMoving"}),": Mengecek apakah object sedang bergerak."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/StopObject.md",children:"StopObject"}),": Menghentikan object yang bergerak."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/id/docs/scripting/callbacks/OnPlayerObjectMoved",children:"OnPlayerObjectMoved"}),": Terpanggil ketika player object berhenti bergerak."]}),"\n"]})]})}function b(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(96540);const a={},c=i.createContext(a);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);