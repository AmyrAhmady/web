"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[99809],{28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var a=t(96540);const c={},s=a.createContext(c);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),a.createElement(s.Provider,{value:n},e.children)}},63141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"scripting/callbacks/OnNPCSpawn","title":"OnNPCSpawn","description":"This callback is called when a NPC spawned.","source":"@site/docs/scripting/callbacks/OnNPCSpawn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnNPCSpawn","permalink":"/ru/docs/scripting/callbacks/OnNPCSpawn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnNPCSpawn.md","tags":[{"inline":true,"label":"npc","permalink":"/ru/docs/tags/npc"}],"version":"current","frontMatter":{"title":"OnNPCSpawn","sidebar_label":"OnNPCSpawn","description":"This callback is called when a NPC spawned.","tags":["npc"]},"sidebar":"docsSidebar","previous":{"title":"OnNPCModeInit.","permalink":"/ru/docs/scripting/callbacks/OnNPCModeInit"},"next":{"title":"OnObjectMoved","permalink":"/ru/docs/scripting/callbacks/OnObjectMoved"}}');var c=t(74848),s=t(28453);const i={title:"OnNPCSpawn",sidebar_label:"OnNPCSpawn",description:"This callback is called when a NPC spawned.",tags:["npc"]},l=void 0,r={},p=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function o(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(n.p,{children:"This callback is called when a NPC spawned."}),"\n",(0,c.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:'public OnNPCSpawn()\n{\n    print("NPC spawned");\n    SendChat("Hello World. I\'m a bot.");\n    return 1;\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}}}]);