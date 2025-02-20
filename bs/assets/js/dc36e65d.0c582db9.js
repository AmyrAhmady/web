"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[59441],{28453:(e,r,i)=>{i.d(r,{R:()=>s,x:()=>l});var n=i(96540);const t={},a=n.createContext(t);function s(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(a.Provider,{value:r},e.children)}},40717:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>j,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/GetPVarString","title":"GetPVarString","description":"Dobija igra\u010devu varijablu kao string.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/GetPVarString.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPVarString","permalink":"/bs/docs/scripting/functions/GetPVarString","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPVarString.md","tags":[{"inline":true,"label":"pvar","permalink":"/bs/docs/tags/pvar"}],"version":"current","frontMatter":{"title":"GetPVarString","sidebar_label":"GetPVarString","description":"Dobija igra\u010devu varijablu kao string.","tags":["pvar"]},"sidebar":"docsSidebar","previous":{"title":"GetPVarNameAtIndex","permalink":"/bs/docs/scripting/functions/GetPVarNameAtIndex"},"next":{"title":"GetPVarType","permalink":"/bs/docs/scripting/functions/GetPVarType"}}');var t=i(74848),a=i(28453);const s={title:"GetPVarString",sidebar_label:"GetPVarString",description:"Dobija igra\u010devu varijablu kao string.",tags:["pvar"]},l=void 0,o={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(r.p,{children:"Dobija igra\u010devu varijablu kao string."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Ime"}),(0,t.jsx)(r.th,{children:"Deskripcija"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"playerid"}),(0,t.jsx)(r.td,{children:"ID igra\u010da za dobiti igra\u010devu varijablu."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"varname"}),(0,t.jsx)(r.td,{children:"Ime igra\u010deve varijable, postavljeno od SetPVarString."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"&string_return"}),(0,t.jsx)(r.td,{children:"Niz za pohraniti string vrijednost, proslije\u0111eno referencom."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"len"}),(0,t.jsx)(r.td,{children:"Maksimalna du\u017eina returnovanog/vra\u0107enog stringa."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:"Du\u017eina stringa."}),"\n",(0,t.jsx)(r.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:'public OnPlayerConnect(playerid,reason)\n{\n    new playerName[MAX_PLAYER_NAME+1];\n    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);\n    SetPVarString(playerid, "PlayerName", playerName);\n    return 1;\n}\n\npublic OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    new playerName[MAX_PLAYER_NAME+1];\n    GetPVarString(playerid, "PlayerName", playerName, sizeof(playerName));\n\n    printf("%s je umro.", playerName);\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsx)(r.p,{children:"Ako je du\u017eina niza jednaka nuli (vrijednost nije postavljena), tekst string_return ne\u0107e se a\u017eurirati ili postaviti na bilo \u0161to i ostat \u0107e sa starim podacima, nu\u017eno obrisati varijablu na praznu vrijednost ako GetPVarString vrati 0 ako to pona\u0161anje nije po\u017eeljno."})}),"\n",(0,t.jsx)(r.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"SetPVarString",children:"SetPVarString"}),": Postavi string za igra\u010devu varijablu."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"SetPVarInt",children:"SetPVarInt"}),": Postavi cijeli broj za igra\u010devu varijablu."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"GetPVarInt",children:"GetPVarInt"}),": Dobij prethodno postavljeni cijeli broj iz igra\u010deve varijable."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"SetPVarFloat",children:"SetPVarFloat"}),": Postavi float za igra\u010devu varijablu."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"GetPVarFloat",children:"GetPVarFloat"}),": Dobij prethodno postavljeni float iz igra\u010deve varijable."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"DeletePVar",children:"DeletePVar"}),": Ukloni igra\u010devu varijablu."]}),"\n"]})]})}function j(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);