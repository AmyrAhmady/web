"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[27397],{25831:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>j,frontMatter:()=>t,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"scripting/functions/db_num_rows","title":"db_num_rows","description":"Vra\u0107a broj redaka iz db_query.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/db_num_rows.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/db_num_rows","permalink":"/bs/docs/scripting/functions/db_num_rows","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/db_num_rows.md","tags":[],"version":"current","frontMatter":{"title":"db_num_rows","sidebar_label":"db_num_rows","description":"Vra\u0107a broj redaka iz db_query.","keywords":["sqlite"]},"sidebar":"docsSidebar","previous":{"title":"db_num_fields","permalink":"/bs/docs/scripting/functions/db_num_fields"},"next":{"title":"db_open","permalink":"/bs/docs/scripting/functions/db_open"}}');var r=i(74848),d=i(28453);const t={title:"db_num_rows",sidebar_label:"db_num_rows",description:"Vra\u0107a broj redaka iz db_query.",keywords:["sqlite"]},s=void 0,o={},l=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Ova funkcija zapo\u010dinje malim slovom."})}),"\n",(0,r.jsx)(n.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,r.jsx)(n.p,{children:"Vra\u0107a broj redaka iz db_query."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Ime"}),(0,r.jsx)(n.th,{children:"Deskripcija"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["DBResult",":dbresult"]}),(0,r.jsx)(n.td,{children:"Rezultat od db_query"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"Broj redaka u rezultatu."}),"\n",(0,r.jsx)(n.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'// examples.inc\n\n// ...\n\nExamples_ListNames(DB:dbConnectionHandle)\n{\n    // Skup rezultata rezultata baze podataka\n    new DBResult:db_result_set = db_query("SELECT `name` FROM `examples`");\n\n    // Ako je zbir rezultata rezultata baze podataka valjan\n    if (db_result_set)\n    {\n        // Allocate some memory to store results\n        new result[256];\n\n        // Radi operacije\n        do\n        {\n            // Dodajte vrijednost iz polja "primjer" u varijablu povratne vrijednosti\n            db_get_field_assoc(db_result_set, "name", result, sizeof result);\n        }\n\n        // Dok bi se mogao preuzeti sljede\u0107i red\n        while (db_next_row(db_result_set));\n\n        // Oslobodi rezultat\n        db_free_result(db_result_set);\n    }\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'// mode.pwn\n\n// ...\n\n#include <examples>\n\nstatic DB:gDBConnectionHandle;\n\n// ...\n\npublic OnGameModeInit()\n{\n    // ...\n\n    // Kreiramo konekciju za databazu\n    gDBConnectionHandle = db_open("example.db");\n\n    // Ako konekcija za databazu postoji\n    if (gDBConnectionHandle)\n    {\n        // Uspje\u0161no kreirana konekcija do databaze\n        print("Uspje\u0161no stvorena veza s bazom podataka \\"example.db\\".");\n        Examples_ListNames(gDBConnectionHandle);\n    }\n    else\n    {\n        // Neuspje\u0161no kreirana konekcija do databaze\n        print("Otvaranje veze s bazom podataka nije uspjelo \\"example.db\\".");\n    }\n\n    // ...\n\n    return 1;\n}\n\npublic OnGameModeExit()\n{\n    // Zatvori konekciju sa databazom ako je otvorena\n    if (db_close(gDBConnectionHandle))\n    {\n        // Dodatno \u010di\u0161\u0107enje\n        gDBConnectionHandle = DB:0;\n    }\n\n    // ...\n\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Upotreba nevaljanog upravitelja databaze koja nije nula sru\u0161it \u0107e va\u0161 server! Nabavite va\u017ee\u0107i upravitelj databazom pomo\u0107u [db_open] (db_open)."})}),"\n",(0,r.jsx)(n.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_open",children:"db_open"}),": Otvori konekciju do SQLite databaze."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"b_close",children:"db_close"}),": Zatvori konekciju do SQLite databaze."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_query",children:"db_query"}),": Upitajte SQLite bazu podataka."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_free_result",children:"db_free_result"}),": Oslobodite memoriju rezultata iz db_query."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_next_row",children:"db_next_row"}),": Pre\u0111i na sljede\u0107i red."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_num_fields",children:"db_num_fields"}),": Dobij broj polja u rezultatu."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_field_name",children:"db_field_name"}),": Return/vra\u0107a ime polja na posebnom indexu."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_get_field",children:"db_get_field"}),": Preuzmite sadr\u017eaj polja iz db_query."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_get_field_assoc",children:"db_get_field_assoc"}),": Dobij sadr\u017eaj polja kao string s navedenim imenom polja."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_get_field_int",children:"db_get_field_int"}),": Dobijte sadr\u017eaj polja kao cijeli broj iz db_query."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_get_field_assoc_int",children:"db_get_field_assoc_int"}),": Dobijte sadr\u017eaj polja kao cijeli broj s navedenim imenom iz trenutnog reda rezultata."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_get_field_float",children:"db_get_field_float"}),": Dobijte sadr\u017eaj polja kao float broj s navedenim imenom iz trenutnog reda rezultata."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_get_field_assoc_float",children:"db_get_field_assoc_float"}),": Dobij sadr\u017eaj polja kao float broj s navedenim imenom polja."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_get_mem_handle",children:"db_get_mem_handle"}),": Dobij memorijski upravitelj za vezu SQLite databaze koja je otvorena s ",(0,r.jsx)(n.code,{children:"db_open"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_get_result_mem_handle",children:"db_get_result_mem_handle"}),": Dobiva memorijski upravitelj za vezu SQLite databaze koja je dodijeljena sa s ",(0,r.jsx)(n.code,{children:"db_query"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_debug_openfiles",children:"db_debug_openfiles"}),": Dobiva broj otvorenih konekcija/veza databaza u svrhu otklanjanja pogre\u0161aka."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_debug_openresults",children:"db_debug_openresults"}),": Dobiva broj rezultata otvorene databaze."]}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>s});var a=i(96540);const r={},d=a.createContext(r);function t(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);