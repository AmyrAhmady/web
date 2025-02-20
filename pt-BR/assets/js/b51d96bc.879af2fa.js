"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[26567],{28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}},62617:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"scripting/functions/DisableInteriorEnterExits","title":"DisableInteriorEnterExits","description":"Disable all the interior entrances and exits in the game (the yellow arrows at doors).","source":"@site/docs/scripting/functions/DisableInteriorEnterExits.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DisableInteriorEnterExits","permalink":"/pt-BR/docs/scripting/functions/DisableInteriorEnterExits","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/DisableInteriorEnterExits.md","tags":[{"inline":true,"label":"interior","permalink":"/pt-BR/docs/tags/interior"}],"version":"current","frontMatter":{"title":"DisableInteriorEnterExits","sidebar_label":"DisableInteriorEnterExits","description":"Disable all the interior entrances and exits in the game (the yellow arrows at doors).","tags":["interior"]},"sidebar":"docsSidebar","previous":{"title":"DetachTrailerFromVehicle","permalink":"/pt-BR/docs/scripting/functions/DetachTrailerFromVehicle"},"next":{"title":"DisableMenu","permalink":"/pt-BR/docs/scripting/functions/DisableMenu"}}');var r=t(74848),s=t(28453);const o={title:"DisableInteriorEnterExits",sidebar_label:"DisableInteriorEnterExits",description:"Disable all the interior entrances and exits in the game (the yellow arrows at doors).",tags:["interior"]},a=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Disable all the interior entrances and exits in the game (the yellow arrows at doors)."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    DisableInteriorEnterExits();\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsxs)(n.p,{children:["This function will only work if it has been used BEFORE a player connects (it is recommended to use it in ",(0,r.jsx)(n.a,{href:"../callbacks/OnGameModeInit",children:"OnGameModeInit"}),"). It will not remove a connected player's markers."]}),(0,r.jsx)(n.p,{children:"If the gamemode is changed after this function has been used, and the new gamemode doesn't disable markers, the markers will NOT reappear for already-connected players (but will for newly connected players)."})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["You can also disable interior entrance markers via ",(0,r.jsx)(n.a,{href:"../../server/config.json",children:"config.json"})]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"use_entry_exit_markers": false,\n'})})]}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"AllowInteriorWeapons",children:"AllowInteriorWeapons"}),": Determine if weapons can be used in interiors."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);