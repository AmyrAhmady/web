"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[66839],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var a=t(96540);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}},72896:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"scripting/functions/SetSVarFloat","title":"SetSVarFloat","description":"Magtakda ng server variable na float.","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/functions/SetSVarFloat.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetSVarFloat","permalink":"/fil/docs/scripting/functions/SetSVarFloat","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetSVarFloat.md","tags":[],"version":"current","frontMatter":{"title":"SetSVarFloat","sidebar_label":"SetSVarFloat","description":"Magtakda ng server variable na float.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerWorldBounds","permalink":"/fil/docs/scripting/functions/SetPlayerWorldBounds"},"next":{"title":"SetSVarInt","permalink":"/fil/docs/scripting/functions/SetSVarInt"}}');var r=t(74848),i=t(28453);const s={title:"SetSVarFloat",sidebar_label:"SetSVarFloat",description:"Magtakda ng server variable na float.",tags:[]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{version:"SA-MP 0.3.7 R2"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Magtakda ng server variable na float."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"varname[]"}),(0,r.jsx)(n.td,{children:"Ang pangalan ng server variable."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"float_value"}),(0,r.jsx)(n.td,{children:"Ang float na itatakda."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"1: Matagumpay na naisakatuparan ang function."}),"\n",(0,r.jsx)(n.p,{children:"0: Nabigo ang function na isagawa. Ang variable na pangalan ay null o higit sa 40 character."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'// itakda ang "Version"\nSetSVarFloat("Version", 0.37);\n// magpi-print ng version na mayroon ang server\nprintf("Version: %f", GetSVarFloat("Version"));\n'})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetSVarInt",children:"SetSVarInt"}),": Magtakda ng integer para sa server variable."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetSVarInt",children:"GetSVarInt"}),": Kumuha ng player server bilang integer."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetSVarString",children:"SetSVarString"}),": Magtakda ng string para sa server variable."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetSVarString",children:"GetSVarString"}),": Kunin ang dating itinakda na string mula sa isang server variable."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetSVarFloat",children:"GetSVarFloat"}),": Kunin ang dating itinakda na float mula sa isang server variable."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DeleteSVar",children:"DeleteSVar"}),": Magtanggal ng server variable."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);