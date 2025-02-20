"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[87132],{28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>c});var t=i(96540);const s={},l=t.createContext(s);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(l.Provider,{value:n},e.children)}},45747:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/callbacks/OnGameModeExit","title":"OnGameModeExit","description":"This callback is called when a gamemode ends, either through \'gmx\', the server being shut down, or GameModeExit.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/callbacks/OnGameModeExit.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnGameModeExit","permalink":"/zh-cn/docs/scripting/callbacks/OnGameModeExit","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnGameModeExit.md","tags":[],"version":"current","frontMatter":{"title":"OnGameModeExit","sidebar_label":"OnGameModeExit","description":"This callback is called when a gamemode ends, either through \'gmx\', the server being shut down, or GameModeExit.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnFilterScriptInit","permalink":"/zh-cn/docs/scripting/callbacks/OnFilterScriptInit"},"next":{"title":"OnGameModeInit","permalink":"/zh-cn/docs/scripting/callbacks/OnGameModeInit"}}');var s=i(74848),l=i(28453);const a={title:"OnGameModeExit",sidebar_label:"OnGameModeExit",description:"This callback is called when a gamemode ends, either through 'gmx', the server being shut down, or GameModeExit.",tags:[]},c=void 0,r={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This callback is called when a gamemode ends, either through 'gmx', the server being shut down, or GameModeExit."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnGameModeExit()\n{\n    print("Gamemode ended.");\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"This function can also be used in a filterscript to detect if the gamemode changes with RCON commands like changemode or gmx, as changing the gamemode does not reload a filterscript."})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"When using OnGameModeExit in conjunction with the 'rcon gmx' console command keep in mind there is a potential for client bugs to occur."}),(0,s.jsxs)(n.p,{children:["An example of this is excessive ",(0,s.jsx)(n.a,{href:"RemoveBuildingForPlayer",children:"RemoveBuildingForPlayer"})," calls during ",(0,s.jsx)(n.a,{href:"OnGameModeInit",children:"OnGameModeInit"})," which could result in a client crash. This callback will NOT be called if the server crashes or the process is killed by other means, such as using the Linux kill command or pressing the close-button on the Windows console."]})]}),"\n",(0,s.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,s.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"OnGameModeInit",children:"OnGameModeInit"}),": This callback is called when a gamemode starts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"OnFilterScriptInit",children:"OnFilterScriptInit"}),": This callback is called when a filterscript is loaded."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"OnFilterScriptExit",children:"OnFilterSciptExit"}),": This callback is called when a filterscript is unloaded."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../functions/GameModeExit",children:"GameModeExit"}),": Exit the current gamemode."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);