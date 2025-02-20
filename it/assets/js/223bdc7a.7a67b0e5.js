"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[57223],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var i=t(96540);const a={},s=i.createContext(a);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(s.Provider,{value:n},e.children)}},97715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/callbacks/OnGameModeInit","title":"OnGameModeInit","description":"This callback is triggered when the gamemode starts.","source":"@site/docs/scripting/callbacks/OnGameModeInit.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnGameModeInit","permalink":"/it/docs/scripting/callbacks/OnGameModeInit","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnGameModeInit.md","tags":[],"version":"current","frontMatter":{"title":"OnGameModeInit","sidebar_label":"OnGameModeInit","description":"This callback is triggered when the gamemode starts.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnGameModeExit","permalink":"/it/docs/scripting/callbacks/OnGameModeExit"},"next":{"title":"OnIncomingConnection","permalink":"/it/docs/scripting/callbacks/OnIncomingConnection"}}');var a=t(74848),s=t(28453);const l={title:"OnGameModeInit",sidebar_label:"OnGameModeInit",description:"This callback is triggered when the gamemode starts.",tags:[]},c=void 0,r={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This callback is triggered when the gamemode starts."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    print("Gamemode started!");\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"This function can also be used in a filterscript to detect if the gamemode changes with RCON commands like changemode or gmx, as changing the gamemode does not reload a filterscript."})}),"\n",(0,a.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnGameModeExit",children:"OnGameModeExit"}),": This callback is called when a gamemode ends."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnFilterScriptInit",children:"OnFilterScriptInit"}),": This callback is called when a filterscript is loaded."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnFilterScriptExit",children:"OnFilterSciptExit"}),": This callback is called when a filterscript is unloaded."]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);