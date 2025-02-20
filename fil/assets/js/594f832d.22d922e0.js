"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[40778],{28453:(n,e,a)=>{a.d(e,{R:()=>d,x:()=>r});var t=a(96540);const i={},s=t.createContext(i);function d(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),t.createElement(s.Provider,{value:e},n.children)}},83440:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"scripting/functions/AddMenuItem","title":"AddMenuItem","description":"Magdagdag ng item sa isang tinutukoy na menu.","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/functions/AddMenuItem.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddMenuItem","permalink":"/fil/docs/scripting/functions/AddMenuItem","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AddMenuItem.md","tags":[{"inline":true,"label":"menu","permalink":"/fil/docs/tags/menu"}],"version":"current","frontMatter":{"title":"AddMenuItem","sidebar_label":"AddMenuItem","description":"Magdagdag ng item sa isang tinutukoy na menu.","tags":["menu"]},"sidebar":"docsSidebar","previous":{"title":"AddCharModel","permalink":"/fil/docs/scripting/functions/AddCharModel"},"next":{"title":"AddPlayerClass","permalink":"/fil/docs/scripting/functions/AddPlayerClass"}}');var i=a(74848),s=a(28453);const d={title:"AddMenuItem",sidebar_label:"AddMenuItem",description:"Magdagdag ng item sa isang tinutukoy na menu.",tags:["menu"]},r=void 0,l={},u=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(n){const e={a:"a",admonition:"admonition",code:"code",del:"del",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"Adds an item to a specified menu."}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Name"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"menuid"}),(0,i.jsx)(e.td,{children:"Ang menu id upang magdagdag ng item."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"column"}),(0,i.jsx)(e.td,{children:"Ang column kung saan idaragdag ang item."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"title[]"}),(0,i.jsx)(e.td,{children:"Ang pamagat para sa bagong item sa menu."})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(e.p,{children:"Ang index ng row kung saan idinagdag ang item na ito."}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'new Menu:gExampleMenu;\n\npublic OnGameModeInit()\n{\n    gExampleMenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);\n    AddMenuItem(gExampleMenu, 0, "item 1");\n    AddMenuItem(gExampleMenu, 0, "item 2");\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["Nag-crash kapag naipasa ang isang di-wastong ID ng menu. Maaari ka lang magkaroon ng 12 item sa bawat menu (ang ika-13 ay mapupunta sa kanang bahagi ng header ng pangalan ng column (kulay), ika-14 at mas mataas na hindi ipinapakita). Maaari ka lamang gumamit ng 2 column (0 at 1). Maaari ka lamang magdagdag ng 8 color code sa bawat isang item (",(0,i.jsx)(e.del,{children:"r"}),", ",(0,i.jsx)(e.del,{children:"g"})," atbp.). Ang maximum na haba ng item sa menu ay 31 simbolo."]})}),"\n",(0,i.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"CreateMenu",children:"CreateMenu"}),": Gumawa ng menu."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"SetMenuColumnHeader",children:"SetMenuColumnHeader"}),": Itakda ang header para sa isa sa mga column sa isang menu."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"DestroyMenu",children:"DestroyMenu"}),": Sirain ang menu."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"../callbacks/OnPlayerSelectedMenuRow",children:"OnPlayerSelectedMenuRow"}),": Tinatawag kapag ang manlalaro ay pumili ng isang row sa menu."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"../callbacks/OnPlayerExitedMenu",children:"OnPlayerExitedMenu"}),": Tinatawag kapag umalis ang manlalaro sa menu."]}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}}}]);