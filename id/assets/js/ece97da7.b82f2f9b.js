"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[5040],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(96540);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}},45225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"scripting/functions/EditObject","title":"EditObject","description":"Memungkinkan Player untuk mengedit object (posisi dan rotasi) menggunakan mouse mereka pada GUI (Graphical User Interface).","source":"@site/i18n/id/docusaurus-plugin-content-docs/current/scripting/functions/EditObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/EditObject","permalink":"/id/docs/scripting/functions/EditObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/EditObject.md","tags":[],"version":"current","frontMatter":{"title":"EditObject","sidebar_label":"EditObject","description":"Memungkinkan Player untuk mengedit object (posisi dan rotasi) menggunakan mouse mereka pada GUI (Graphical User Interface).","tags":[]},"sidebar":"docsSidebar","previous":{"title":"EditAttachedObject","permalink":"/id/docs/scripting/functions/EditAttachedObject"},"next":{"title":"EditPlayerClass","permalink":"/id/docs/scripting/functions/EditPlayerClass"}}');var a=n(74848),r=n(28453);const s={title:"EditObject",sidebar_label:"EditObject",description:"Memungkinkan Player untuk mengedit object (posisi dan rotasi) menggunakan mouse mereka pada GUI (Graphical User Interface).",tags:[]},c=void 0,d={},l=[{value:"Deskripsi",id:"deskripsi",level:2},{value:"Returns",id:"returns",level:2},{value:"Contoh",id:"contoh",level:2},{value:"Catatan",id:"catatan",level:2},{value:"Fungsi Terkait",id:"fungsi-terkait",level:2}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"deskripsi",children:"Deskripsi"}),"\n",(0,a.jsx)(t.p,{children:"Memungkinkan Player untuk mengedit object (posisi dan rotasi) menggunakan mouse mereka pada GUI (Graphical User Interface)."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"ID Player yang mengedit Object."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"objectid"}),(0,a.jsx)(t.td,{children:"ID Object yang di edit oleh Player."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"1: Function berhasil dijalankan. Sukses akan di laporkan ketika Object tidak di tentukan, Tetapi tidak akan terjadi apa-apa."}),"\n",(0,a.jsx)(t.p,{children:"0: Function gagal di jalankan. Karena pemain tidak terhubung."}),"\n",(0,a.jsx)(t.h2,{id:"contoh",children:"Contoh"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'new object;\npublic OnGameModeInit()\n{\n    object = CreateObject(1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/oedit", true))\n    {\n        EditObject(playerid, object);\n        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Sekarang anda bisa mengedit Object!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"catatan",children:"Catatan"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"Anda dapat menggerakkan kamera saat mengedit dengan menekan dan menahan spasi (atau W di kendaraan) dan menggerakkan mouse Anda."})}),"\n",(0,a.jsx)(t.h2,{id:"fungsi-terkait",children:"Fungsi Terkait"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Membuat suatu Object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Menghapus suatu Object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Memindahkan suatu Object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"EditPlayerObject",children:"EditPlayerObject"}),": Mengedit suatu Object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"EditAttachedObject",children:"EditAttachedObject"}),": Mengedit suatu Attached Object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SelectObject",children:"SelectObject"}),": Memilih suatu Object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"CancelEdit",children:"CancelEdit"}),": Membatalkan mengedit suatu Object."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}}}]);