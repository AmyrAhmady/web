"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[47914],{28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var t=i(96540);const a={},r=t.createContext(a);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:n},e.children)}},93682:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"scripting/functions/fopen","title":"fopen","description":"Otvorite datoteku (za \u010ditanje ili pisanje).","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/fopen.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/fopen","permalink":"/bs/docs/scripting/functions/fopen","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/fopen.md","tags":[],"version":"current","frontMatter":{"title":"fopen","sidebar_label":"fopen","description":"Otvorite datoteku (za \u010ditanje ili pisanje).","tags":[]},"sidebar":"docsSidebar","previous":{"title":"fmatch","permalink":"/bs/docs/scripting/functions/fmatch"},"next":{"title":"format","permalink":"/bs/docs/scripting/functions/format"}}');var a=i(74848),r=i(28453);const o={title:"fopen",sidebar_label:"fopen",description:"Otvorite datoteku (za \u010ditanje ili pisanje).",tags:[]},s=void 0,l={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function j(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"Ova funkcija zapo\u010dinje malim slovom."})}),"\n",(0,a.jsx)(n.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,a.jsx)(n.p,{children:"Otvorite datoteku (za \u010ditanje ili pisanje)."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Ime"}),(0,a.jsx)(n.th,{children:"Deskripcija"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"name[]"}),(0,a.jsx)(n.td,{children:"Path do datoteke koju treba otvoriti (ako je navedeno samo ime datoteke, otvorit \u0107e datoteku s imenom navedenim u mapi 'scriptfiles')."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"mode"}),(0,a.jsx)(n.td,{children:"Re\u017eim kojim treba otvoriti datoteku (zadano: io_readwrite)."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"Vra\u0107a upravitelj datoteke. Ovaj upravitelj se koristi za \u010ditanje i pisanje. 0 ako nije uspjelo otvoriti datoteku."}),"\n",(0,a.jsx)(n.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'// Otvori "file.txt" u "read only" modu (samo \u010ditanje)\nnew File:handle = fopen("file.txt", io_read),\n\n    // Inicijalizirajte "buf"\n    buf[128];\n\n// Provjerite je li datoteka otvorena\nif (handle)\n{\n    // Uspje\u0161no\n\n    // \u010citajte cijelu datoteku\n    while(fread(handle, buf)) print(buf);\n\n    // Zatvori fajl/datoteku\n    fclose(handle);\n}\nelse\n{\n    // Error\n    print("The file \\"file.txt\\" does not exists, or can\'t be opened.");\n}\n// Otvorite "file.txt" u "write only" na\u010dinu (samo pisanje)\nnew File:handle = fopen("file.txt", io_write);\n\n// Provjeri da li je fajl/datoteka otvoren/a\nif (handle)\n{\n    // Uspje\u0161no\n\n    // Upi\u0161i "I just wrote here!" u ovaj fajl\n    fwrite(handle, "I just wrote here!");\n\n    // Zatvori fajl/datoteku\n    fclose(handle);\n}\nelse\n{\n    // Error\n    print("Nesupje\u0161no otvaranje file \\"file.txt\\".");\n}\n// Otvorite "file.txt" u "read and write" na\u010dinu (\u010ditanje i pisanje)\nnew File:handle = fopen("file.txt"),\n\n    // Inicijalizirajte "buf"\n    buf[128];\n\n// Provjeri da li je fajl/datoteka otvoren/a\nif (handle)\n{\n    // Uspje\u0161no\n\n    // \u010citajte cijelu datoteku\n    while(fread(handle, buf)) print(buf);\n\n    // Postavite pokaziva\u010d datoteke na prvi bajt\n    fseek(handle, _, seek_begin);\n\n    // Upi\u0161i "I just wrote here!" u ovaj fajl\n    fwrite(handle, "I just wrote here!");\n\n    // Zatvori fajl/datoteku\n    fclose(handle);\n}\nelse\n{\n    // Error\n    print("The file \\"file.txt\\" does not exists, or can\'t be opened.");\n}\n// Otvorite "file.txt" u "append only" na\u010dinu (samo dodavanje)\nnew File:handle = fopen("file.txt", io_append);\n\n// Provjeri da li je fajl/datoteka otvoren/a\nif (handle)\n{\n    // Uspje\u0161no\n\n    // Dodati "This is a text.\\r\\n"\n    fwrite(handle, "This is a test.\\r\\n");\n\n    // Zatvori fajl/datoteku\n    fclose(handle);\n}\nelse\n{\n    // Error\n    print("Nesupje\u0161no otvaranje file \\"file.txt\\".");\n}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-p",children:"io_read       \u010cita iz fajla.\nio_write      Upi\u0161ite u datoteku ili kreirajte datoteku ako ona ne postoji. Bri\u0161e sve postoje\u0107e sadr\u017eaje.\nio_readwrite  \u010cita datoteku ili je kreira ako ve\u0107 ne postoji.\nio_append     Dodaje (dodaje) u datoteku, samo za pisanje. Ako datoteka ne postoji, ona se kreira.\n"})}),"\n",(0,a.jsx)(n.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"Ako koristite io_read, a datoteka ne postoji, vratit \u0107e NULL referencu. Kori\u0161tenje neva\u017ee\u0107ih referenci na funkcijama datoteka sru\u0161it \u0107e va\u0161 server!"})}),"\n",(0,a.jsx)(n.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"fopen",children:"fopen"}),": Otvori fajl/datoteku."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"fclose",children:"fclose"}),": Zatvori fajl/datoteku."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"ftemp",children:"ftemp"}),": Stvorite privremeni tok fajlova/datoteka."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"fremove",children:"fremove"}),": Uklonite fajl/datoteku."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"fwrite",children:"fwrite"}),": Pi\u0161i u fajl/datoteku."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"fread",children:"fread"}),": \u010citaj fajl/datoteku."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"fputchar",children:"fputchar"}),": Stavite znak u fajl/datoteku."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"fgetchar",children:"fgetchar"}),": Dobijte znak iz fajla/datoteke."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"fblockwrite",children:"fblockwrite"}),": Zapi\u0161ite blokove podataka u fajl/datoteku."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"fblockread",children:"fblockread"}),": O\u010ditavanje blokova podataka iz fajla/datoteke."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"fseek",children:"fseek"}),": Sko\u010di na odre\u0111eni znak u fajlu/datoteci."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"flength",children:"flength"}),": Nabavite du\u017einu fajla/datoteke."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"fexist",children:"fexist"}),": Provjeri da li datoteka postoji."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"fmatch",children:"fmatch"}),": Provjeri podudaraju li se uzorci s nazivom datoteke."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}}}]);