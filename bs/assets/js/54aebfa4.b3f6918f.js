"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[63169],{28453:(e,r,i)=>{i.d(r,{R:()=>s,x:()=>l});var n=i(96540);const t={},a=n.createContext(t);function s(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(a.Provider,{value:r},e.children)}},79252:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/GameTextForAll","title":"GameTextForAll","description":"Prikazuje \'game text\' (tekst na ekranu) odre\u0111eno vrijeme za sve igra\u010de.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/GameTextForAll.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GameTextForAll","permalink":"/bs/docs/scripting/functions/GameTextForAll","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GameTextForAll.md","tags":[],"version":"current","frontMatter":{"title":"GameTextForAll","sidebar_label":"GameTextForAll","description":"Prikazuje \'game text\' (tekst na ekranu) odre\u0111eno vrijeme za sve igra\u010de.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GameModeExit","permalink":"/bs/docs/scripting/functions/GameModeExit"},"next":{"title":"GameTextForPlayer","permalink":"/bs/docs/scripting/functions/GameTextForPlayer"}}');var t=i(74848),a=i(28453);const s={title:"GameTextForAll",sidebar_label:"GameTextForAll",description:"Prikazuje 'game text' (tekst na ekranu) odre\u0111eno vrijeme za sve igra\u010de.",tags:[]},l=void 0,o={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",del:"del",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(r.p,{children:"Prikazuje 'game text' (tekst na ekranu) odre\u0111eno vrijeme za sve igra\u010de."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Ime"}),(0,t.jsx)(r.th,{children:"Deskripcija"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"const string[]"}),(0,t.jsx)(r.td,{children:"Tekst za prikazati."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"time"}),(0,t.jsx)(r.td,{children:"Trajanje teksta koji se prikazuje u milisekundama."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"style"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"../resources/gametextstyles",children:"Stil"})," teksta za prikazati."]})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:"Ova funkcija uvijek returna (vra\u0107a) 1."}),"\n",(0,t.jsx)(r.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:'public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    // Ovaj primjer prikazuje veliki, bijeli tekst koji ka\u017ee\n    // "[playerName] je preminuo" na ekranu svih,\n    // nakon \u0161to je igra\u010d umro ili ubijen.\n    // Prikazuje se u obliku teksta 3, na 5 sekundi (5000 ms)\n    new name[ 24 ], string[ 64 ];\n    GetPlayerName( playerid, name, 24 );\n\n    // Pravilno formatirajte preminulu poruku i poka\u017eite je svima:\n    format( string, sizeof(string), "~w~%s je umro", name );\n    GameTextForAll( string, 5000, 3 );\n\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsxs)(r.p,{children:["Imajte na umu da igra\u010di mogu crashati zbog neparnog broja simbola tilde (~) koji se koriste u tekstu igre. Kori\u0161tenje kodova u boji (npr. ",(0,t.jsx)(r.del,{children:"r"}),") izvan 255. znaka mo\u017ee sru\u0161iti client."]})}),"\n",(0,t.jsx)(r.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"GameTextForPlayer",children:"GameTextForPlayer"}),": Prika\u017ei gametext igra\u010du."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"TextDrawShowForAll",children:"TextDrawShowForAll"}),": Prika\u017ei textdraw za sve igra\u010de."]}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);