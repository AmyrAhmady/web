"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[56250],{20737:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/CreateMenu","title":"CreateMenu","description":"Creates a menu.","source":"@site/docs/scripting/functions/CreateMenu.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreateMenu","permalink":"/ro/docs/scripting/functions/CreateMenu","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/CreateMenu.md","tags":[{"inline":true,"label":"menu","permalink":"/ro/docs/tags/menu"}],"version":"current","frontMatter":{"title":"CreateMenu","sidebar_label":"CreateMenu","description":"Creates a menu.","tags":["menu"]},"sidebar":"docsSidebar","previous":{"title":"CreateExplosionForPlayer","permalink":"/ro/docs/scripting/functions/CreateExplosionForPlayer"},"next":{"title":"CreateObject","permalink":"/ro/docs/scripting/functions/CreateObject"}}');var s=t(74848),i=t(28453);const l={title:"CreateMenu",sidebar_label:"CreateMenu",description:"Creates a menu.",tags:["menu"]},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Creates a menu."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"const title[]"}),(0,s.jsx)(n.td,{children:"The title for the new menu."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"columns"}),(0,s.jsx)(n.td,{children:"How many colums shall the new menu have."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Float",":x"]}),(0,s.jsx)(n.td,{children:"The X position of the menu (640x460 canvas - 0 would put the menu at the far left)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Float",":y"]}),(0,s.jsx)(n.td,{children:"The Y position of the menu (640x460 canvas - 0 would put the menu at the far top)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Float",":column1width"]}),(0,s.jsx)(n.td,{children:"The width for the first column."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Float",":column2width"]}),(0,s.jsx)(n.td,{children:"The width for the second column."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OPEN_MP_TAGS:..."}),(0,s.jsx)(n.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:["The ID of the new menu or ",(0,s.jsx)(n.strong,{children:"-1"})," on failure."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'new Menu:exampleMenu;\n\npublic OnGameModeInit()\n{\n    exampleMenu = CreateMenu("Example Menu", 2, 200.0, 100.0, 150.0, 150.0);\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["This function merely CREATES the menu - ",(0,s.jsx)(n.a,{href:"ShowMenuForPlayer",children:"ShowMenuForPlayer"})," must be used to show it."]}),"\n",(0,s.jsx)(n.li,{children:"You can only create and access 2 columns (0 & 1)."}),"\n",(0,s.jsx)(n.li,{children:"If the title's length is equal to or greater than 32 chars the title is truncated to 30 characters."}),"\n"]})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"There is a limit of 12 items per menu, and a limit of 128 menus in total."})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"AddMenuItem",children:"AddMenuItem"}),": Adds an item to a specified menu."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"SetMenuColumnHeader",children:"SetMenuColumnHeader"}),": Set the header for one of the columns in a menu."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DestroyMenu",children:"DestroyMenu"}),": Destroy a menu."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"ShowMenuForPlayer",children:"ShowMenuForPlayer"}),": Show a menu for a player."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"HideMenuForPlayer",children:"HideMenuForPlayer"}),": Hide a menu for a player."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../callbacks/OnPlayerSelectedMenuRow",children:"OnPlayerSelectedMenuRow"}),": Called when a player selected a row in a menu."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../callbacks/OnPlayerExitedMenu",children:"OnPlayerExitedMenu"}),": Called when a player exits a menu."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var r=t(96540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);