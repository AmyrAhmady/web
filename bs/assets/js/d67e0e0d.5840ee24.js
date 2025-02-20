"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[74900],{28453:(e,i,r)=>{r.d(i,{R:()=>o,x:()=>a});var n=r(96540);const s={},t=n.createContext(s);function o(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(t.Provider,{value:i},e.children)}},73726:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>j,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/CreateExplosionForPlayer","title":"CreateExplosionForPlayer","description":"Kreira eksploziju koja je vidljiva samo jednom igra\u010du.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/CreateExplosionForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreateExplosionForPlayer","permalink":"/bs/docs/scripting/functions/CreateExplosionForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/CreateExplosionForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"CreateExplosionForPlayer","sidebar_label":"CreateExplosionForPlayer","description":"Kreira eksploziju koja je vidljiva samo jednom igra\u010du.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"CreateExplosion","permalink":"/bs/docs/scripting/functions/CreateExplosion"},"next":{"title":"CreateMenu","permalink":"/bs/docs/scripting/functions/CreateMenu"}}');var s=r(74848),t=r(28453);const o={title:"CreateExplosionForPlayer",sidebar_label:"CreateExplosionForPlayer",description:"Kreira eksploziju koja je vidljiva samo jednom igra\u010du.",tags:["player"]},a=void 0,l={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.admonition,{type:"warning",children:(0,s.jsx)(i.p,{children:"Ova funkcija je dodana u SA-MP 0.3.z R2-2 i ne radi u ni\u017eim verzijama!"})}),"\n",(0,s.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,s.jsx)(i.p,{children:"Kreira eksploziju koja je vidljiva samo jednom igra\u010du. Ovo se mo\u017ee koristiti da izdvojite eksplozije od ostalih igrala ili da ih prika\u017eete samo u odre\u0111enim virtualnim svjetovima."}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Ime"}),(0,s.jsx)(i.th,{children:"Deskripcija"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"playerid"}),(0,s.jsx)(i.td,{children:"ID igra\u010da za kojeg se kreira eksplotija."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["Float",":X"]}),(0,s.jsx)(i.td,{children:"X kordinata eksplozije."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["Float",":Y"]}),(0,s.jsx)(i.td,{children:"Y kordinata eksplozije."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["Float",":Z"]}),(0,s.jsx)(i.td,{children:"Z kordinata eksplozije."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"type"}),(0,s.jsx)(i.td,{children:"Tip eksplozije."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["Float",":Radius"]}),(0,s.jsx)(i.td,{children:"Radijus eksplozije."})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:"Ova funkcija uvijek returna (vra\u0107a) 1, bilo da funkcija ne uspije da se izvr\u0161i (igra\u010d ne postoji, neva\u017ee\u0107i radijus, neva\u017ee\u0107i tip eksplozije)."}),"\n",(0,s.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-c",children:'if (strcmp(cmdtext, "/burnme", true) == 0)\n{\n    new Float: playerPos[3];\n    GetPlayerPos(playerid, playerPos[0], playerPos[1], playerPos[2]);\n    CreateExplosionForPlayer(playerid, playerPos[0], playerPos[1], playerPos[2], 1, 10.0);\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsx)(i.p,{children:"Postoji ograni\u010denje koliko igra\u010d mo\u017ee odjednom vidjeti eksplozije. Ovo je otprilike 10."})}),"\n",(0,s.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"CreateExplosion",children:"CreateExplosion"}),": Kreiraj eksploziju koja je vidljiva svim igra\u010dima."]}),"\n"]})]})}function j(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);