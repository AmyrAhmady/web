"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[55939],{1336:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"scripting/callbacks/OnRecordingPlaybackEnd","title":"OnRecordingPlaybackEnd","description":"Acest callback este apelat atunci c\xe2nd un fi\u0219ier \xeenregistrat care este reprodus cu NPCStartRecordingPlayback a ajuns la final.","source":"@site/i18n/ro/docusaurus-plugin-content-docs/current/scripting/callbacks/OnRecordingPlaybackEnd.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnRecordingPlaybackEnd","permalink":"/ro/docs/scripting/callbacks/OnRecordingPlaybackEnd","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnRecordingPlaybackEnd.md","tags":[],"version":"current","frontMatter":{"title":"OnRecordingPlaybackEnd","sidebar_label":"OnRecordingPlaybackEnd","description":"Acest callback este apelat atunci c\xe2nd un fi\u0219ier \xeenregistrat care este reprodus cu NPCStartRecordingPlayback a ajuns la final.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnRconLoginAttempt","permalink":"/ro/docs/scripting/callbacks/OnRconLoginAttempt"},"next":{"title":"OnScriptLoadPlayer","permalink":"/ro/docs/scripting/callbacks/OnScriptLoadPlayer"}}');var t=c(74848),r=c(28453);const i={title:"OnRecordingPlaybackEnd",sidebar_label:"OnRecordingPlaybackEnd",description:"Acest callback este apelat atunci c\xe2nd un fi\u0219ier \xeenregistrat care este reprodus cu NPCStartRecordingPlayback a ajuns la final.",tags:[]},s=void 0,l={},o=[{value:"Descriere",id:"descriere",level:2},{value:"Exemple",id:"exemple",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"descriere",children:"Descriere"}),"\n",(0,t.jsx)(n.p,{children:"Acest callback este apelat atunci c\xe2nd un fi\u0219ier \xeenregistrat care este reprodus cu NPCStartRecordingPlayback a ajuns la final."}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnRecordingPlaybackEnd()\n{\n    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); //Acest lucru ar porni din nou fi\u0219ierul \xeenregistrat odat\u0103 ce se termin\u0103 reproducerea.\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>i,x:()=>s});var a=c(96540);const t={},r=a.createContext(t);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);