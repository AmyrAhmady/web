"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[4052],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}},70974:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"scripting/functions/DestroyMenu","title":"DestroyMenu","description":"Destroys the specified menu.","source":"@site/docs/scripting/functions/DestroyMenu.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DestroyMenu","permalink":"/ta/docs/scripting/functions/DestroyMenu","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/DestroyMenu.md","tags":[{"inline":true,"label":"menu","permalink":"/ta/docs/tags/menu"}],"version":"current","frontMatter":{"title":"DestroyMenu","sidebar_label":"DestroyMenu","description":"Destroys the specified menu.","tags":["menu"]},"sidebar":"docsSidebar","previous":{"title":"DestroyActor","permalink":"/ta/docs/scripting/functions/DestroyActor"},"next":{"title":"DestroyObject","permalink":"/ta/docs/scripting/functions/DestroyObject"}}');var r=t(74848),i=t(28453);const l={title:"DestroyMenu",sidebar_label:"DestroyMenu",description:"Destroys the specified menu.",tags:["menu"]},c=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Destroys the specified menu."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Menu",":menuid"]}),(0,r.jsx)(n.td,{children:"The menu ID to destroy"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"true"})," if the destroying was successful, otherwise ",(0,r.jsx)(n.strong,{children:"false"})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new Menu:exampleMenu;\nexampleMenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);\n\n// Later ...\nDestroyMenu(exampleMenu);\n'})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"CreateMenu",children:"CreateMenu"}),": Create a menu."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetMenuColumnHeader",children:"SetMenuColumnHeader"}),": Set the header for one of the columns in a menu."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"AddMenuItem",children:"AddMenuItem"}),": Add an item to a menu."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../callbacks/OnPlayerSelectedMenuRow",children:"OnPlayerSelectedMenuRow"}),": Called when a player selected a row in a menu."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../callbacks/OnPlayerExitedMenu",children:"OnPlayerExitedMenu"}),": Called when a player exits a menu."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}}}]);