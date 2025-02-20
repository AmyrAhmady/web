"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[42919],{11185:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>j,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"scripting/functions/GetSVarFloat","title":"GetSVarFloat","description":"Dobija float vrijednost server varijable.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/GetSVarFloat.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetSVarFloat","permalink":"/bs/docs/scripting/functions/GetSVarFloat","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetSVarFloat.md","tags":[],"version":"current","frontMatter":{"title":"GetSVarFloat","sidebar_label":"GetSVarFloat","description":"Dobija float vrijednost server varijable.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GetRunningTimers","permalink":"/bs/docs/scripting/functions/GetRunningTimers"},"next":{"title":"GetSVarInt","permalink":"/bs/docs/scripting/functions/GetSVarInt"}}');var n=i(74848),a=i(28453);const s={title:"GetSVarFloat",sidebar_label:"GetSVarFloat",description:"Dobija float vrijednost server varijable.",tags:[]},l=void 0,o={},c=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.admonition,{type:"warning",children:(0,n.jsx)(r.p,{children:"Ova funkcija je dodana u SA-MP 0.3.7 R2 i ne radi u ni\u017eim verzijama!"})}),"\n",(0,n.jsx)(r.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,n.jsx)(r.p,{children:"Dobija float vrijednost server varijable."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Ime"}),(0,n.jsx)(r.th,{children:"Deskripcija"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"varname"}),(0,n.jsx)(r.td,{children:"Ime server varijable (osjetljivo na mala i velika slova). Dodijeljeno u SetSVarFloat."})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:"Float vrijednost navedene varijable poslu\u017eitelja. I dalje \u0107e vra\u0107ati 0 ako varijabla nije postavljena."}),"\n",(0,n.jsx)(r.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:'// postavi "Version"\nSetSVarFloat("Version", 0.37);\n// ispisati \u0107e verziju koju server ima\nprintf("Version: %f", GetSVarFloat("Version"));\n'})}),"\n",(0,n.jsx)(r.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"SetSVarInt",children:"SetSVarInt"}),": Postavite cijeli broj za varijablu servera."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"GetSVarInt",children:"GetSVarInt"}),": Dobij cjelobrojnu vrijednost server varijable."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"SetSVarString",children:"SetSVarString"}),": Postavite string za server varijablu."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"GetSVarString",children:"GetSVarString"}),": Dobij prethodno postavljeni string iz server varijable."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"SetSVarFloat",children:"SetSVarFloat"}),": Postavi float za server varijablu."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"DeleteSVar",children:"DeleteSVar"}),": Obri\u0161i server varijablu."]}),"\n"]})]})}function j(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>s,x:()=>l});var t=i(96540);const n={},a=t.createContext(n);function s(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);