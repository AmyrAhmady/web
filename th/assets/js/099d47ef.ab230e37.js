"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[78907],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var r=t(96540);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}},41590:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/CreateMenu","title":"CreateMenu","description":"Creates a menu.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/CreateMenu.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreateMenu","permalink":"/th/docs/scripting/functions/CreateMenu","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/CreateMenu.md","tags":[{"inline":true,"label":"menu","permalink":"/th/docs/tags/menu"}],"version":"current","frontMatter":{"title":"CreateMenu","sidebar_label":"CreateMenu","description":"Creates a menu.","tags":["menu"]},"sidebar":"docsSidebar","previous":{"title":"CreateExplosionForPlayer","permalink":"/th/docs/scripting/functions/CreateExplosionForPlayer"},"next":{"title":"CreateObject","permalink":"/th/docs/scripting/functions/CreateObject"}}');var i=t(74848),s=t(28453);const l={title:"CreateMenu",sidebar_label:"CreateMenu",description:"Creates a menu.",tags:["menu"]},c=void 0,a={},o=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,i.jsx)(n.p,{children:"Creates a menu."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"title[]"}),(0,i.jsx)(n.td,{children:"The title for the new menu."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"columns"}),(0,i.jsx)(n.td,{children:"How many colums shall the new menu have."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":x"]}),(0,i.jsx)(n.td,{children:"The X position of the menu (640x460 canvas - 0 would put the menu at the far left)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":y"]}),(0,i.jsx)(n.td,{children:"The Y position of the menu (640x460 canvas - 0 would put the menu at the far top)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":col1width"]}),(0,i.jsx)(n.td,{children:"The width for the first column."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":col2width"]}),(0,i.jsx)(n.td,{children:"The width for the second column."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,i.jsx)(n.p,{children:"The ID of the new menu or -1 on failure."}),"\n",(0,i.jsx)(n.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'new Menu:examplemenu;\n\npublic OnGameModeInit()\n{\n    examplemenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"This function merely CREATES the menu - ShowMenuForPlayer must be used to show it. You can only create and access 2 columns (0 & 1). If the title's length is equal to or greater than 32 chars the title is truncated to 30 characters."})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"There is a limit of 12 items per menu, and a limit of 128 menus in total."})}),"\n",(0,i.jsx)(n.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/th/docs/scripting/functions/AddMenuItem",children:"AddMenuItem"}),": Adds an item to a specified menu."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/th/docs/scripting/functions/SetMenuColumnHeader",children:"SetMenuColumnHeader"}),": Set the header for one of the columns in a menu."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/th/docs/scripting/functions/DestroyMenu",children:"DestroyMenu"}),": Destroy a menu."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/th/docs/scripting/functions/ShowMenuForPlayer",children:"ShowMenuForPlayer"}),": Show a menu for a player."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/th/docs/scripting/functions/HideMenuForPlayer",children:"HideMenuForPlayer"}),": Hide a menu for a player."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/th/docs/scripting/callbacks/OnPlayerSelectedMenuRow",children:"OnPlayerSelectedMenuRow"}),": Called when a player selected a row in a menu."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/th/docs/scripting/callbacks/OnPlayerExitedMenu",children:"OnPlayerExitedMenu"}),": Called when a player exits a menu."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);