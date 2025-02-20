"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[91009],{28453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>l});var t=i(96540);const a={},r=t.createContext(a);function s(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),t.createElement(r.Provider,{value:e},n.children)}},64169:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"scripting/functions/Tickcount","title":"tickcount","description":"Bu fonksiyon, sunucunun ba\u015flat\u0131lmas\u0131ndan bu yana ge\xe7en milisaniye say\u0131s\u0131n\u0131 d\xf6nd\xfcrd\xfc\u011f\xfc i\xe7in GetTickCount\'in yerine kullan\u0131labilir.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/functions/Tickcount.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Tickcount","permalink":"/tr/docs/scripting/functions/Tickcount","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/Tickcount.md","tags":[{"inline":true,"label":"time","permalink":"/tr/docs/tags/time"}],"version":"current","frontMatter":{"title":"tickcount","sidebar_label":"tickcount","description":"Bu fonksiyon, sunucunun ba\u015flat\u0131lmas\u0131ndan bu yana ge\xe7en milisaniye say\u0131s\u0131n\u0131 d\xf6nd\xfcrd\xfc\u011f\xfc i\xe7in GetTickCount\'in yerine kullan\u0131labilir.","tags":["time"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawUseBox","permalink":"/tr/docs/scripting/functions/TextDrawUseBox"},"next":{"title":"ToggleChatTextReplacement","permalink":"/tr/docs/scripting/functions/ToggleChatTextReplacement"}}');var a=i(74848),r=i(28453);const s={title:"tickcount",sidebar_label:"tickcount",description:"Bu fonksiyon, sunucunun ba\u015flat\u0131lmas\u0131ndan bu yana ge\xe7en milisaniye say\u0131s\u0131n\u0131 d\xf6nd\xfcrd\xfc\u011f\xfc i\xe7in GetTickCount'in yerine kullan\u0131labilir.",tags:["time"]},l=void 0,o={},c=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015f\u0131nca Verece\u011fi Sonu\xe7lar",id:"\xe7al\u0131\u015f\u0131nca-verece\u011fi-sonu\xe7lar",level:2},{value:"Ba\u011flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011flant\u0131l\u0131-fonksiyonlar",level:2}];function u(n){const e={a:"a",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components},{LowercaseNoteTR:i}=e;return i||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNoteTR",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{}),"\n",(0,a.jsx)(e.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,a.jsx)(e.p,{children:"Bu fonksiyon, sunucunun ba\u015flat\u0131lmas\u0131ndan bu yana ge\xe7en milisaniye say\u0131s\u0131n\u0131 d\xf6nd\xfcrd\xfc\u011f\xfc i\xe7in GetTickCount'in yerine kullan\u0131labilir."}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"\u0130sim"}),(0,a.jsx)(e.th,{children:"A\xe7\u0131klama"})]})}),(0,a.jsx)(e.tbody,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"&granularity=0"}),(0,a.jsx)(e.td,{children:"D\xf6n\xfc\u015fte, bu de\u011fer, dahili sistem zaman\u0131n\u0131n her saniyede ka\xe7 kez i\u015faret edece\u011fini i\xe7erir. Bu de\u011fer dolay\u0131s\u0131yla bu fonksiyonun d\xf6n\xfc\u015f de\u011ferinin do\u011frulu\u011funu belirtir."})]})})]}),"\n",(0,a.jsx)(e.h2,{id:"\xe7al\u0131\u015f\u0131nca-verece\u011fi-sonu\xe7lar",children:"\xc7al\u0131\u015f\u0131nca Verece\u011fi Sonu\xe7lar"}),"\n",(0,a.jsx)(e.p,{children:"Sistemin ba\u015flat\u0131lmas\u0131ndan bu yana ge\xe7en milisaniye say\u0131s\u0131. Bir 32-bit h\xfccre i\xe7in, bu say\u0131m yakla\u015f\u0131k 24 g\xfcn s\xfcrekli \xe7al\u0131\u015fmadan sonra ta\u015far."}),"\n",(0,a.jsx)(e.h2,{id:"ba\u011flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"GetTickCount",children:"GetTickCount"}),": Her milisaniyede artan bir de\u011fer d\xf6nd\xfcr\xfcr."]}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}}}]);