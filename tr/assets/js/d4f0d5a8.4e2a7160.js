"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[20875],{28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>t});var r=i(96540);const a={},l=r.createContext(a);function d(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(l.Provider,{value:n},e.children)}},38714:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>t,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"scripting/language/Variables","title":"Temel: De\u011fi\u015fkenler","description":"Pawn dilinde de\u011fi\u015fkenlere y\xf6nelik ba\u015flang\u0131\xe7 rehberi","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/language/Variables.md","sourceDirName":"scripting/language","slug":"/scripting/language/Variables","permalink":"/tr/docs/scripting/language/Variables","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/language/Variables.md","tags":[],"version":"current","frontMatter":{"title":"Temel: De\u011fi\u015fkenler","sidebar_label":"Temel: De\u011fi\u015fkenler","description":"Pawn dilinde de\u011fi\u015fkenlere y\xf6nelik ba\u015flang\u0131\xe7 rehberi"},"sidebar":"docsSidebar","previous":{"title":"Scripting: Etiketler (Tags)","permalink":"/tr/docs/scripting/language/Tags"},"next":{"title":"Ara\xe7 par\xe7a yuvalar\u0131","permalink":"/tr/docs/scripting/resources/Componentslots"}}');var a=i(74848),l=i(28453);const d={title:"Temel: De\u011fi\u015fkenler",sidebar_label:"Temel: De\u011fi\u015fkenler",description:"Pawn dilinde de\u011fi\u015fkenlere y\xf6nelik ba\u015flang\u0131\xe7 rehberi"},t=void 0,s={},k=[{value:"De\u011fi\u015fkenler",id:"de\u011fi\u015fkenler",level:2},{value:"De\u011fi\u015fkenleri Bildirme",id:"de\u011fi\u015fkenleri-bildirme",level:3},{value:"Kapsamlar",id:"kapsamlar",level:3},{value:"\u0130simlendirme Kurallar\u0131",id:"i\u0307simlendirme-kurallar\u0131",level:3},{value:"\xd6rnekler:",id:"\xf6rnekler",level:4},{value:"Farkl\u0131 Veri T\xfcrlerini Saklama",id:"farkl\u0131-veri-t\xfcrlerini-saklama",level:3}];function c(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"de\u011fi\u015fkenler",children:"De\u011fi\u015fkenler"}),"\n",(0,a.jsx)(n.p,{children:'Programlamadaki en \xf6nemli kavramlardan biri "de\u011fi\u015fken" kavram\u0131d\u0131r. Programlamada de\u011fi\u015fken, bir \u015feyin ne bak\u0131m\u0131ndan de\u011fi\u015febilece\u011fi kavram\u0131n\u0131 ifade eder. Pawn dilinde bir de\u011fi\u015fken herhangi bir zamanda bir "de\u011fer" ta\u015f\u0131r ve bu de\u011fer -ad\u0131ndan da anla\u015f\u0131laca\u011f\u0131 gibi- "de\u011fi\u015fken" veya "de\u011fi\u015ftirilebilir"dir.'}),"\n",(0,a.jsx)(n.p,{children:'De\u011fi\u015fkenler neden bu kadar \xf6nemlidir? Temelde, de\u011fi\u015fkenler bilgisayar belle\u011finin k\xfc\xe7\xfck birimleridir ve program y\xfcr\xfct\xfcl\xfcrken (\xe7al\u0131\u015ft\u0131r\u0131l\u0131rken) bu birimler farkl\u0131 de\u011ferleri tutabilir veya "hat\u0131rlayabilir". Bu \xf6zellik, programlamada \xe7ok kullan\u0131\u015fl\u0131d\u0131r. \xd6rne\u011fin, bir oyundaki 100 oyuncunun puanlar\u0131n\u0131 takip etmek istiyorsan\u0131z, bilgisayara bu de\u011ferleri depolamay\u0131 (hat\u0131rlamay\u0131) ve g\xfcncellemeyi programlamay\u0131 \xf6\u011fretebilirsiniz. Daha sonra bu de\u011fi\u015fkenlerden elde edilen de\u011ferlere kolayca eri\u015filebilir ve bu de\u011ferlerle ortalama puan\u0131 bulmak veya bir liderlik tablosu olu\u015fturmak gibi ama\xe7lar i\xe7in kullan\u0131labilir.'}),"\n",(0,a.jsx)(n.h3,{id:"de\u011fi\u015fkenleri-bildirme",children:"De\u011fi\u015fkenleri Bildirme"}),"\n",(0,a.jsx)(n.p,{children:"De\u011fi\u015fken bildirimi i\xe7in a\u015fa\u011f\u0131daki s\xf6zdizimi kullan\u0131l\u0131r:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"// 'myVariable' ad\u0131nda bir de\u011fi\u015fken olu\u015fturuyoruz (daha uygun bir ifadeyle 'bildiriyoruz').\n\nnew myVariable;\n\n// Bir de\u011fi\u015fken bildirmek i\xe7in 'new' anahtar kelimesi kullan\u0131l\u0131r\n// Yukar\u0131daki sat\u0131rda 'myVariable' ad\u0131nda bir de\u011fi\u015fken bildiriliyor\n// Bildirimi kapatmak i\xe7in sona noktal\u0131 virg\xfcl konur.\n"})}),"\n",(0,a.jsx)(n.p,{children:"Bildirim s\xf6zdizimi, a\u015fa\u011f\u0131daki \xf6rneklerle daha iyi anla\u015f\u0131labilir:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"new var;\nnew ammo;\nnew score;\nnew vehicles;\nnew topScore;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Yukar\u0131da tan\u0131mlanan her bir de\u011fi\u015fkenin varsay\u0131lan olarak bir de\u011feri vard\u0131r ve bu de\u011fer s\u0131f\u0131rd\u0131r. De\u011ferleri de\u011fi\u015fkenlere ataman\u0131n farkl\u0131 yollar\u0131 vard\u0131r. Bir y\xf6ntem, bir de\u011fi\u015fkene do\u011frudan bir de\u011fer atamakt\u0131r:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"new letters = 25;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Yukar\u0131daki \xf6rnekte, 'letters' ad\u0131nda bir de\u011fi\u015fken bildiriliyor ve de\u011feri 25 olarak atan\u0131yor. Bir de\u011feri do\u011frudan bildirim s\u0131ras\u0131nda ataman\u0131n yan\u0131 s\u0131ra, kodun daha sonraki b\xf6l\xfcmlerinde de yapabilirsiniz:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"new letters;\n\nletters = 25;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"kapsamlar",children:"Kapsamlar"}),"\n",(0,a.jsx)(n.p,{children:"Bir de\u011fi\u015fkenin de\u011ferini de\u011fi\u015ftirmek, de\u011fi\u015fkeni referans ald\u0131\u011f\u0131n\u0131z kodun kapsam\u0131 i\xe7inde m\xfcmk\xfcnd\xfcr. Bir de\u011fi\u015fkenin kapsam\u0131, de\u011fi\u015fkenin bildirildi\u011fi kod blo\u011funa veya konumuna ba\u011fl\u0131d\u0131r. \xd6rne\u011fin, kod bloklar\u0131ndan herhangi birinin d\u0131\u015f\u0131nda, genellikle beti\u011fin ba\u015f\u0131nda bildirilen bir de\u011fi\u015fkenin 'Global' kapsam\u0131 vard\u0131r ve beti\u011fin herhangi bir yerinden eri\u015filebilir:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'#include <a_samp>\n\nnew g_var = 5;\n\npublic OnFilterScriptInit ()\n{\n    g_var = 10;\n\n    printf ("De\u011fer %i", g_var);\n\n    return 1;\n}\n\npublic OnPlayerConnect (playerid)\n{\n    g_var = 100;\n\n    printf ("De\u011fer %i", g_var);\n\n    return 1;\n}\n\n// \xc7\u0131kt\u0131:\n// De\u011fer 10\n// De\u011fer 100\n\n// Not: \u0130kinci \xe7\u0131kt\u0131 sat\u0131r\u0131 yaln\u0131zca bir oyuncu ba\u011fland\u0131\u011f\u0131nda g\xf6sterilir.\n'})}),"\n",(0,a.jsx)(n.p,{children:"'Global' (kapsaml\u0131) de\u011fi\u015fkenler d\u0131\u015f\u0131nda, yaln\u0131zca tan\u0131mland\u0131klar\u0131 kod blo\u011fundan eri\u015filebilen 'yerel' veya '\xf6zel' de\u011fi\u015fkenler de bulunmaktad\u0131r."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"#include <a_samp>\n\npublic OnFilterScriptInit ()\n{\n    new localVar;\n\n    localVar = 5;\n\n    return 1;\n}\n\npublic OnPlayerConnect (playerid)\n{\n    localVar = 10; // Bu sat\u0131r derleme s\u0131ras\u0131nda bir hata verecektir\n\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Yukar\u0131daki kodu derlemeye \xe7al\u0131\u015f\u0131rsan\u0131z, derleyici, bir yerel de\u011fi\u015fkenin tamamen farkl\u0131 bir kod blo\u011funda kullan\u0131lmas\u0131 nedeniyle bir hata g\xf6sterecektir. Not: E\u011fer i\xe7 i\xe7e ge\xe7mi\u015f bir kod blo\u011fu ise de\u011fi\u015fkene oradan eri\u015filebilir."}),"\n",(0,a.jsx)(n.p,{children:"Bir \u015feyi unutmaman\u0131z gereken \xf6nemli bir \u015fey, kapsamlar\u0131n\u0131n i\xe7 i\xe7e girmesi durumunda de\u011fi\u015fkenlere ayn\u0131 isimleri veremezsiniz. \xd6rne\u011fin, zaten genel bir kapsamdaki 'score' ad\u0131nda bir de\u011fi\u015fkeniniz varsa, ayn\u0131 ad\u0131 ta\u015f\u0131yan ba\u015fka bir de\u011fi\u015fkeni genel kapsamda ve yerel bir kapsamda bildirmemelisiniz ve bu ayn\u0131 \u015fekilde ge\xe7erlidir (zaten yerel bir de\u011fi\u015fkeniniz varsa, ayn\u0131 ad\u0131 ta\u015f\u0131yan bir genel de\u011fi\u015fkeni bildirmekten ka\xe7\u0131n\u0131n)."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"#include <a_samp>\n\nnew g_score;\n\npublic OnFilterScriptInit ()\n{\n    new g_score = 5; // Bu sat\u0131r bir hatay\u0131 g\xf6sterecektir.\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"i\u0307simlendirme-kurallar\u0131",children:"\u0130simlendirme Kurallar\u0131"}),"\n",(0,a.jsx)(n.p,{children:"Art\u0131k de\u011fi\u015fkenleri nas\u0131l bildirece\u011finizi bildi\u011finize g\xf6re, de\u011fi\u015fken bildirme i\xe7in isimlendirme kurallar\u0131n\u0131 da bilmelisiniz. \u0130\u015fte de\u011fi\u015fken bildirme i\xe7in isimlendirme kurallar\u0131:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["T\xfcm de\u011fi\u015fken adlar\u0131 bir harfle veya alt \xe7izgi (",(0,a.jsx)(n.code,{children:"_"}),") ile ba\u015flamal\u0131d\u0131r."]}),"\n",(0,a.jsx)(n.li,{children:"\u0130lk harf sonras\u0131nda de\u011fi\u015fken adlar\u0131 harf ve rakam i\xe7erebilir, ancak bo\u015fluk veya \xf6zel karakter i\xe7ermemelidir."}),"\n",(0,a.jsx)(n.li,{children:"De\u011fi\u015fken adlar\u0131 b\xfcy\xfck/k\xfc\xe7\xfck harfe duyarl\u0131d\u0131r, yani b\xfcy\xfck harfler k\xfc\xe7\xfck harflerden farkl\u0131d\u0131r."}),"\n",(0,a.jsx)(n.li,{children:"Bir rezerve kelimeyi (anahtar kelime) bir de\u011fi\u015fken ad\u0131 olarak kullanmak bir hatay\u0131 g\xf6sterir."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"\xf6rnekler",children:"\xd6rnekler:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"new new; // Yanl\u0131\u015f: Bir rezerve kelime kullan\u0131l\u0131yor\nnew _new; // Do\u011fru\n\nnew 10letters; // Yanl\u0131\u015f: Rakamla ba\u015flayan bir isim\nnew letters10; // Do\u011fru\nnew letters_10; // Do\u011fru\n\nnew my name; // Yanl\u0131\u015f: \u0130simde bo\u015fluk var\nnew my_name; // Do\u011fru\n\nnew !nternet; // Yanl\u0131\u015f\nnew Internet; // Do\u011fru\n"})}),"\n",(0,a.jsx)(n.h3,{id:"farkl\u0131-veri-t\xfcrlerini-saklama",children:"Farkl\u0131 Veri T\xfcrlerini Saklama"}),"\n",(0,a.jsx)(n.p,{children:"Bunun ard\u0131ndan, de\u011fi\u015fkenlere hangi t\xfcrde veri saklanabilece\u011fine ve nas\u0131l saklanaca\u011f\u0131na dair baz\u0131 \xf6rnekleri inceleyelim:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"new letter = 'M';\n\n\nnew value = 100;\n\n\nnew decimalValue = 1.0;\n// \xc7al\u0131\u015f\u0131r, ancak bir derleyici uyar\u0131s\u0131 g\xf6sterecektir\n// Uyar\u0131 213: etiket uyumsuzlu\u011fu\n\n\nnew engineOn = true;\n// \xc7al\u0131\u015f\u0131r ve derleyici uyar\u0131 g\xf6stermeyecek, ancak bir Etiket kullan\u0131m\u0131 \xf6nerilir\n\n\nnew sentence = \"Bu bir c\xfcmle\";\n// Hata g\xf6sterecektir.\n// Hata 006: diziye atanmal\u0131\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Bir de\u011fi\u015fken, bir karakteri, tamsay\u0131 de\u011ferini, boolean (true veya false) ve bir ondal\u0131k de\u011feri (ondal\u0131k de\u011fer) tutabilir. Yukar\u0131daki kodun yorumlar\u0131, bir dizeyi bir de\u011fi\u015fkende saklaman\u0131n bir hataya neden oldu\u011funu g\xf6sterir (\xe7\xfcnk\xfc dizeler yaln\u0131zca ",(0,a.jsx)(n.em,{children:"Dizilere"})," atanabilir). Bunun d\u0131\u015f\u0131nda, bir de\u011fi\u015fkene ondal\u0131k bir de\u011fer atamak, bir derleyici uyar\u0131s\u0131na neden olur ve bu uyar\u0131, 'etiketler' eklenerek \xf6nlenir. Do\u011fru etiketler kullan\u0131lmazsa, betik derleme s\u0131ras\u0131nda uyar\u0131lar g\xf6sterecek, ancak yine de \xe7al\u0131\u015ft\u0131r\u0131labilir olacakt\u0131r. Etiketler, de\u011fi\u015fkende depolanacak olan veri t\xfcr\xfc hakk\u0131nda derleyiciyi bilgilendirir, bu da bize program\u0131 bozan bir hata yaparsak hata veya uyar\u0131 \u015feklinde bilgi verir. Etiket \xf6rnekleri:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"new decimalValue = 1.0; // Yanl\u0131\u015f\nnew bool: decimalValue = 1.0 // Yanl\u0131\u015f\nnew Float: decimalValue = 1.0; // Do\u011fru\n\nnew switchOn = 1.0; // Yanl\u0131\u015f\nnew switchOn = true; // Yanl\u0131\u015f, uyar\u0131 g\xf6stermez\nnew bool: switchOn = true; // Do\u011fru\n"})}),"\n",(0,a.jsx)(n.p,{children:"Do\u011fru etiketleri kullanmak, program y\xfcr\xfctme s\u0131ras\u0131nda herhangi bir hata veya hatay\u0131 \xf6nlemek i\xe7in \xf6nemlidir."}),"\n",(0,a.jsx)(n.p,{children:"Pawn, tip olmayan bir dil oldu\u011fu i\xe7in ayn\u0131 de\u011fi\u015fkende farkl\u0131 t\xfcrde verileri saklama olana\u011f\u0131 sa\u011flar, bu baz\u0131 durumlarda faydal\u0131 olabilirken di\u011fer durumlarda sorunlara neden olabilir, ancak de\u011fi\u015fkenlerin b\xf6yle kullan\u0131lmas\u0131 \xf6nerilmez."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'#include <a_samp>\n\npublic OnFilterScriptInit ()\n{\n\n    new var ;\n\n    var = \'a\';\n    printf ("%c", var);\n\n    var = 1;\n    printf ("%d", var);\n\n    var = 1.0;\n    printf ("%f", var);\n\n    var = true;\n    printf ("%d", var); // 0 veya 1 de\u011ferini yazd\u0131r\u0131r\n\n    return 1;\n}\n\n// \xc7\u0131kt\u0131 :\na\n1\n1.000000\n1\n'})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);