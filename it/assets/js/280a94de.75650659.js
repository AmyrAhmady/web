"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[49178],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}},71964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/functions/SetGameModeText","title":"SetGameModeText","description":"Set the name of the game mode, which appears in the server browser.","source":"@site/docs/scripting/functions/SetGameModeText.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetGameModeText","permalink":"/it/docs/scripting/functions/SetGameModeText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetGameModeText.md","tags":[],"version":"current","frontMatter":{"title":"SetGameModeText","sidebar_label":"SetGameModeText","description":"Set the name of the game mode, which appears in the server browser.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SetDeathDropAmount","permalink":"/it/docs/scripting/functions/SetDeathDropAmount"},"next":{"title":"SetGravity","permalink":"/it/docs/scripting/functions/SetGravity"}}');var s=n(74848),i=n(28453);const o={title:"SetGameModeText",sidebar_label:"SetGameModeText",description:"Set the name of the game mode, which appears in the server browser.",tags:[]},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Set the name of the game mode, which appears in the server browser."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"format[]"}),(0,s.jsx)(t.td,{children:"The gamemode name to display."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OPEN_MP_TAGS:..."}),(0,s.jsx)(t.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    SetGameModeText("Team Deathmatch");\n    return 1;\n}\n'})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'#define GAME_MODE_VERSION "1.5.0"\n\npublic OnGameModeInit()\n{\n    SetGameModeText("Roleplay v%s", GAME_MODE_VERSION);\n    return 1;\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);