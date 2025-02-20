"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[4131],{28453:(a,n,e)=>{e.d(n,{R:()=>o,x:()=>l});var i=e(96540);const t={},d=i.createContext(t);function o(a){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof a?a(n):{...n,...a}}),[n,a])}function l(a){let n;return n=a.disableParentContext?"function"==typeof a.components?a.components(t):a.components||t:o(a.components),i.createElement(d.Provider,{value:n},a.children)}},71992:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});const i=JSON.parse('{"id":"scripting/functions/AddSimpleModelTimed","title":"AddSimpleModelTimed","description":"Nagdaragdag ng bagong custom na simpleng object model para sa pag-download.","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/functions/AddSimpleModelTimed.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddSimpleModelTimed","permalink":"/fil/docs/scripting/functions/AddSimpleModelTimed","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AddSimpleModelTimed.md","tags":[],"version":"current","frontMatter":{"title":"AddSimpleModelTimed","sidebar_label":"AddSimpleModelTimed","description":"Nagdaragdag ng bagong custom na simpleng object model para sa pag-download.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"AddSimpleModel","permalink":"/fil/docs/scripting/functions/AddSimpleModel"},"next":{"title":"AddStaticPickup","permalink":"/fil/docs/scripting/functions/AddStaticPickup"}}');var t=e(74848),d=e(28453);const o={title:"AddSimpleModelTimed",sidebar_label:"AddSimpleModelTimed",description:"Nagdaragdag ng bagong custom na simpleng object model para sa pag-download.",tags:[]},l=void 0,r={},s=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function g(a){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...a.components},{VersionWarn:e}=n;return e||function(a,n){throw new Error("Expected "+(n?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e,{version:"SA-MP 0.3.DL R1"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Nagdaragdag ng bagong custom na simpleng object model para sa pag-download. Ang mga file ng modelo ay maiimbak sa Documents\\GTA San Andreas User Files\\SAMP\\cache ng player sa ilalim ng Server IP at Port folder sa isang CRC-form file name."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"virtualworld"}),(0,t.jsx)(n.td,{children:"Ang virtual world ID para gawing available ang modelo sa. Gamitin ang -1 para sa lahat ng mundo."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"baseid"}),(0,t.jsx)(n.td,{children:"Ang batayang object model ID na gagamitin (orihinal na object na gagamitin kapag nabigo ang pag-download)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"newid"}),(0,t.jsx)(n.td,{children:"Ang bagong object model ID ay mula -1000 hanggang -30000 (29000 slots) na gagamitin sa ibang pagkakataon kasama ang CreateObject o CreatePlayerObject."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dffname"}),(0,t.jsx)(n.td,{children:"Pangalan ng .dff model collision file na matatagpuan sa folder ng server ng mga modelo bilang default (setting ng artpath)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"txdname"}),(0,t.jsx)(n.td,{children:"Pangalan ng .txd model texture file na matatagpuan sa folder ng server ng mga modelo bilang default (setting ng artpath)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timeon"}),(0,t.jsx)(n.td,{children:"Ang oras ng laro sa mundo (oras) ang bagay na ito ay lilitaw"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timeoff"}),(0,t.jsx)(n.td,{children:"Ang oras ng laro sa mundo (oras) ang bagay na ito ay mawawala"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"1: Matagumpay na naisakatuparan ang function."}),"\n",(0,t.jsx)(n.p,{children:"0: Nabigo ang function na isagawa."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    AddSimpleModelTimed(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd", 9, 18); // Nagre-render lang ang pader na ito mula 9:00 am hanggang 6:00 pm\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"ang useartwork ay dapat munang paganahin sa mga setting ng server upang ito ay gumana Kapag ang virtualworld ay nakatakda, ang mga modelo ay mada-download kapag ang player ay pumasok sa partikular na mundo"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Kasalukuyang walang mga paghihigpit sa kung kailan mo maaaring tawagan ang function na ito, ngunit magkaroon ng kamalayan na kung hindi mo sila tatawagan sa loob ng OnFilterScriptInit/OnGameModeInit, magkakaroon ka ng panganib na ang ilang mga manlalaro, na nasa server na, ay maaaring hindi na-download ang mga modelo."})}),"\n",(0,t.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../callbacks/OnPlayerFinishedDownloading",children:"OnPlayerFinishedDownloading"}),": Tinatawag kapag natapos na ng player ang pag-download ng mga custom na modelo."]}),"\n"]})]})}function c(a={}){const{wrapper:n}={...(0,d.R)(),...a.components};return n?(0,t.jsx)(n,{...a,children:(0,t.jsx)(g,{...a})}):g(a)}}}]);