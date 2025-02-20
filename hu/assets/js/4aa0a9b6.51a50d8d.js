"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[79247],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var i=t(96540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}},73401:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"scripting/functions/SetMenuColumnHeader","title":"SetMenuColumnHeader","description":"Sets the caption of a column in a menu.","source":"@site/docs/scripting/functions/SetMenuColumnHeader.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetMenuColumnHeader","permalink":"/hu/docs/scripting/functions/SetMenuColumnHeader","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetMenuColumnHeader.md","tags":[{"inline":true,"label":"menu","permalink":"/hu/docs/tags/menu"}],"version":"current","frontMatter":{"title":"SetMenuColumnHeader","sidebar_label":"SetMenuColumnHeader","description":"Sets the caption of a column in a menu.","tags":["menu"]},"sidebar":"docsSidebar","previous":{"title":"SetGravity","permalink":"/hu/docs/scripting/functions/SetGravity"},"next":{"title":"SetModeRestartTime","permalink":"/hu/docs/scripting/functions/SetModeRestartTime"}}');var s=t(74848),r=t(28453);const l={title:"SetMenuColumnHeader",sidebar_label:"SetMenuColumnHeader",description:"Sets the caption of a column in a menu.",tags:["menu"]},d=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Sets the caption of a column in a menu."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Menu",":menuid"]}),(0,s.jsx)(n.td,{children:"ID of the menu to change."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"column"}),(0,s.jsx)(n.td,{children:"The column (0 or 1) to set the header of."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"const text[]"}),(0,s.jsx)(n.td,{children:"The caption text for the column."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OPEN_MP_TAGS:..."}),(0,s.jsx)(n.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'new Menu:gTestMenu;\n\n// There are two rows in this menu\ngTestMenu = CreateMenu("Menu Header", 2, 200.0, 100.0, 150.0, 150.0);\nSetMenuColumnHeader(gTestMenu, 0, "Row 1");\nSetMenuColumnHeader(gTestMenu, 1, "Row 2");\n\n// Add menu items to it.\nAddMenuItem(gTestMenu, 0, "Row1 Item1");\nAddMenuItem(gTestMenu, 1, "Row2 Item1");\n'})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Crashes when passed an invalid menu ID."})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Note that you can add only 12 items with ",(0,s.jsx)(n.a,{href:"AddMenuItem",children:"AddMenuItem"}),". The 13th object of a menu would replace the header of the column which is correctly set with this function."]})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"AddMenuItem",children:"AddMenuItem"}),": Add an item to a menu."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"CreateMenu",children:"CreateMenu"}),": Create a menu."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../callbacks/OnPlayerSelectedMenuRow",children:"OnPlayerSelectedMenuRow"}),": Called when a player selected a row in a menu."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);