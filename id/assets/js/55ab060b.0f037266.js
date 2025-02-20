"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[17452],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}},77750:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"scripting/functions/DisableMenu","title":"DisableMenu","description":"Disable a menu.","source":"@site/docs/scripting/functions/DisableMenu.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DisableMenu","permalink":"/id/docs/scripting/functions/DisableMenu","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/DisableMenu.md","tags":[{"inline":true,"label":"menu","permalink":"/id/docs/tags/menu"}],"version":"current","frontMatter":{"title":"DisableMenu","sidebar_label":"DisableMenu","description":"Disable a menu.","tags":["menu"]},"sidebar":"docsSidebar","previous":{"title":"DisableInteriorEnterExits","permalink":"/id/docs/scripting/functions/DisableInteriorEnterExits"},"next":{"title":"DisableMenuRow","permalink":"/id/docs/scripting/functions/DisableMenuRow"}}');var s=t(74848),r=t(28453);const a={title:"DisableMenu",sidebar_label:"DisableMenu",description:"Disable a menu.",tags:["menu"]},l=void 0,d={},u=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Disable a menu."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Menu",":menuid"]}),(0,s.jsx)(n.td,{children:"The ID of the menu to disable."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'new WeaponMenu;\n\npublic OnGameModeInit()\n{\n    WeaponMenu = CreateMenu("Weapons", 1, 50.0, 180.0, 200.0, 200.0);\n    AddMenuItem(WeaponMenu, 0, "Rocket Launcher");\n    AddMenuItem(WeaponMenu, 0, "Flamethrower");\n    AddMenuItem(WeaponMenu, 0, "Minigun");\n    AddMenuItem(WeaponMenu, 0, "Grenades");\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/disableguns", true))\n    {\n        DisableMenu(WeaponMenu); //Disable the weapon menu\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Crashes when passed an invalid menu ID."})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"CreateMenu",children:"CreateMenu"}),": Create a menu."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DestroyMenu",children:"DestroyMenu"}),": Destroy a menu."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"AddMenuItem",children:"AddMenuItem"}),": Add an item to a menu."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"IsMenuDisabled",children:"IsMenuDisabled"}),": Check if a menu is disabled."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}}}]);