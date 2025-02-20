"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[9329],{28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var r=a(96540);const l={},t=r.createContext(l);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(t.Provider,{value:n},e.children)}},43012:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/CreateExplosionForPlayer","title":"CreateExplosionForPlayer","description":"Tek bir oyuncunun g\xf6rd\xfc\u011f\xfc patlama olu\u015fturma.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/functions/CreateExplosionForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreateExplosionForPlayer","permalink":"/tr/docs/scripting/functions/CreateExplosionForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/CreateExplosionForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"}],"version":"current","frontMatter":{"title":"CreateExplosionForPlayer","sidebar_label":"CreateExplosionForPlayer","description":"Tek bir oyuncunun g\xf6rd\xfc\u011f\xfc patlama olu\u015fturma.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"CreateExplosion","permalink":"/tr/docs/scripting/functions/CreateExplosion"},"next":{"title":"CreateMenu","permalink":"/tr/docs/scripting/functions/CreateMenu"}}');var l=a(74848),t=a(28453);const i={title:"CreateExplosionForPlayer",sidebar_label:"CreateExplosionForPlayer",description:"Tek bir oyuncunun g\xf6rd\xfc\u011f\xfc patlama olu\u015fturma.",tags:["player"]},o=void 0,s={},c=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015f\u0131nca Verece\u011fi Sonu\xe7lar",id:"\xe7al\u0131\u015f\u0131nca-verece\u011fi-sonu\xe7lar",level:2},{value:"\xd6rnekler",id:"\xf6rnekler",level:2},{value:"Notlar",id:"notlar",level:2},{value:"Ba\u011flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011flant\u0131l\u0131-fonksiyonlar",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,l.jsx)(n.p,{children:"Tek bir oyuncunun g\xf6rd\xfc\u011f\xfc patlama olu\u015fturma. Bu, patlamalar\u0131 di\u011fer oyunculardan izole etmek veya yaln\u0131zca belirli sanal d\xfcnyalarda g\xf6r\xfcnmelerini sa\u011flamak i\xe7in kullan\u0131labilir."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parametre"}),(0,l.jsx)(n.th,{children:"A\xe7\u0131klama"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"Patlamay\u0131 g\xf6recek oyuncu ID'si."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":X"]}),(0,l.jsx)(n.td,{children:"Patlaman\u0131n olu\u015faca\u011f\u0131 X koordinat\u0131."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":Y"]}),(0,l.jsx)(n.td,{children:"Patlaman\u0131n olu\u015faca\u011f\u0131 Y koordinat\u0131."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":Z"]}),(0,l.jsx)(n.td,{children:"Patlaman\u0131n olu\u015faca\u011f\u0131 Z koordinat\u0131."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"type"}),(0,l.jsx)(n.td,{children:"Olu\u015facak patlaman\u0131n t\xfcr\xfc."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["Float",":Radius"]}),(0,l.jsx)(n.td,{children:"Olu\u015facak patlaman\u0131n yar\u0131\xe7ap\u0131."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\xe7al\u0131\u015f\u0131nca-verece\u011fi-sonu\xe7lar",children:"\xc7al\u0131\u015f\u0131nca Verece\u011fi Sonu\xe7lar"}),"\n",(0,l.jsx)(n.p,{children:"Fonksiyon, oyuncu ID'si, patlama t\xfcr\xfc veya patlaman\u0131n yar\u0131\xe7ap\u0131 ge\xe7ersiz olsa bile her zaman 1 olarak d\xf6nd\xfcr\xfcl\xfcr."}),"\n",(0,l.jsx)(n.h2,{id:"\xf6rnekler",children:"\xd6rnekler"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'if (strcmp(cmdtext, "/burnme", true) == 0)\n{\n    new Float: playerPos[3];\n    GetPlayerPos(playerid, playerPos[0], playerPos[1], playerPos[2]);\n    CreateExplosionForPlayer(playerid, playerPos[0], playerPos[1], playerPos[2], 1, 10.0);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"notlar",children:"Notlar"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"Bir oyuncu maksimum 10 tane patlama g\xf6rebilir."})}),"\n",(0,l.jsx)(n.h2,{id:"ba\u011flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"CreateExplosion",children:"CreateExplosion"}),": Patlama olu\u015fturma."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);