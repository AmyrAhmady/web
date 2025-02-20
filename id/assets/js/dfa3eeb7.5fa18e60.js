"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[81706],{28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>s});var t=a(96540);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}},82517:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>o,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"scripting/callbacks/OnPlayerText","title":"OnPlayerText","description":"Callback ini akan terpanggil ketika pemain mengirimkan pesan chat.","source":"@site/i18n/id/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerText.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerText","permalink":"/id/docs/scripting/callbacks/OnPlayerText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerText.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerText","sidebar_label":"OnPlayerText","description":"Callback ini akan terpanggil ketika pemain mengirimkan pesan chat.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerTakeDamage","permalink":"/id/docs/scripting/callbacks/OnPlayerTakeDamage"},"next":{"title":"OnPlayerUpdate","permalink":"/id/docs/scripting/callbacks/OnPlayerUpdate"}}');var i=a(74848),r=a(28453);const l={title:"OnPlayerText",sidebar_label:"OnPlayerText",description:"Callback ini akan terpanggil ketika pemain mengirimkan pesan chat.",tags:["player"]},s=void 0,c={},d=[{value:"Deskripsi",id:"deskripsi",level:2},{value:"Returns",id:"returns",level:2},{value:"Contoh",id:"contoh",level:2},{value:"Catatan",id:"catatan",level:2},{value:"Fungsi Terkait",id:"fungsi-terkait",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"deskripsi",children:"Deskripsi"}),"\n",(0,i.jsx)(n.p,{children:"Callback ini akan terpanggil ketika pemain mengirimkan pesan chat."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Nama"}),(0,i.jsx)(n.th,{children:"Deskripsi"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"ID dari pemain yang mengetik teks nya."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"text[]"}),(0,i.jsx)(n.td,{children:"Teks yang pemain ketikkan."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"Ini akan selalu terpanggil pertama di filterscripts jadi mengembalikan nilai 1 akan melarang filterscript lain untuk melihatnya."}),"\n",(0,i.jsx)(n.h2,{id:"contoh",children:"Contoh"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerText(playerid, text[])\n{\n    new pText[144];\n    format(pText, sizeof (pText), "(%d) %s", playerid, text);\n    SendPlayerMessageToAll(playerid, pText);\n    return 0; // Mengabaikan teks default dan mengirimkan teks kustom\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"catatan",children:"Catatan"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Callback ini akan terpanggil juga oleh NPC."})}),"\n",(0,i.jsx)(n.h2,{id:"fungsi-terkait",children:"Fungsi Terkait"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/SendPlayerMessageToPlayer.md",children:"SendPlayerMessageToPlayer"}),": Memaksa pemain mengirimkan text untuk satu pemain saja."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/SendPlayerMessageToAll.md",children:"SendPlayerMessageToAll"}),": Memaksa pemain mengirimkan pesan untuk semua pemain."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);