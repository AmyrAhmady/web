"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[24698],{22591:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>s});const r=JSON.parse('{"id":"scripting/functions/AttachCameraToObject","title":"AttachCameraToObject","description":"Bu fonksiyonu, bir oyuncuya kamera yerle\u015ftirmek i\xe7in kullanabilirsiniz.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/functions/AttachCameraToObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AttachCameraToObject","permalink":"/tr/docs/scripting/functions/AttachCameraToObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AttachCameraToObject.md","tags":[],"version":"current","frontMatter":{"title":"AttachCameraToObject","sidebar_label":"AttachCameraToObject","description":"Bu fonksiyonu, bir oyuncuya kamera yerle\u015ftirmek i\xe7in kullanabilirsiniz.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"Attach3DTextLabelToVehicle","permalink":"/tr/docs/scripting/functions/Attach3DTextLabelToVehicle"},"next":{"title":"AttachCameraToPlayerObject","permalink":"/tr/docs/scripting/functions/AttachCameraToPlayerObject"}}');var i=t(74848),a=t(28453);const l={title:"AttachCameraToObject",sidebar_label:"AttachCameraToObject",description:"Bu fonksiyonu, bir oyuncuya kamera yerle\u015ftirmek i\xe7in kullanabilirsiniz.",tags:[]},c=void 0,o={},s=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"Verece\u011fi Geri D\xf6n\xfc\u015f (Return) De\u011ferleri",id:"verece\u011fi-geri-d\xf6n\xfc\u015f-return-de\u011ferleri",level:2},{value:"\xd6rnekler",id:"\xf6rnekler",level:2},{value:"Notlar",id:"notlar",level:2},{value:"Ba\u011flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011flant\u0131l\u0131-fonksiyonlar",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,i.jsx)(n.p,{children:"Bu fonksiyonu, bir oyuncuya kamera yerle\u015ftirmek i\xe7in kullanabilirsiniz."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u0130sim"}),(0,i.jsx)(n.th,{children:"A\xe7\u0131klama"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"Kamera yerle\u015ftirilecek oyuncu numaras\u0131."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objectid"}),(0,i.jsx)(n.td,{children:"Yerle\u015ftirmek istenilen objenin numaras\u0131."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"verece\u011fi-geri-d\xf6n\xfc\u015f-return-de\u011ferleri",children:"Verece\u011fi Geri D\xf6n\xfc\u015f (Return) De\u011ferleri"}),"\n",(0,i.jsx)(n.p,{children:"Bu fonksiyon, herhangi bir return d\xf6nd\xfcrmez."}),"\n",(0,i.jsx)(n.h2,{id:"\xf6rnekler",children:"\xd6rnekler"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/attach", false))\n    {\n        new objectId = CreateObject(1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);\n        AttachCameraToObject(playerid, objectId);\n        SendClientMessage(playerid, 0xFFFFFFAA, "Kamera oyuncuya yerle\u015ftirildi.");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notlar",children:"Notlar"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Oyuncuya kamera yerle\u015ftirmeden \xf6nce, objeyi yaratman gerekir."})}),"\n",(0,i.jsx)(n.h2,{id:"ba\u011flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"AttachCameraToPlayerObject",children:"AttachCameraToPlayerObject"}),": Kameray\u0131 bir oyuncunun objesine yerle\u015ftirir."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var r=t(96540);const i={},a=r.createContext(i);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);