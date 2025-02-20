"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[84879],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(96540);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}},49325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"scripting/functions/SetTeamCount","title":"SetTeamCount","description":"This function is used to change the amount of teams used in the gamemode.","source":"@site/docs/scripting/functions/SetTeamCount.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetTeamCount","permalink":"/sl/docs/scripting/functions/SetTeamCount","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetTeamCount.md","tags":[],"version":"current","frontMatter":{"title":"SetTeamCount","sidebar_label":"SetTeamCount","description":"This function is used to change the amount of teams used in the gamemode.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SetSpawnInfo","permalink":"/sl/docs/scripting/functions/SetSpawnInfo"},"next":{"title":"SetTimer","permalink":"/sl/docs/scripting/functions/SetTimer"}}');var i=n(74848),o=n(28453);const a={title:"SetTeamCount",sidebar_label:"SetTeamCount",description:"This function is used to change the amount of teams used in the gamemode.",tags:[]},r=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"This function is used to change the amount of teams used in the gamemode. It has no obvious way of being used, but can help to indicate the number of teams used for better (more effective) internal handling. This function should only be used in the OnGameModeInit callback. Important: You can pass 2 billion here if you like, this function has no effect at all."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"count"}),(0,i.jsx)(t.td,{children:"Number of teams the gamemode knows."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"public OnGameModeInit( )\n{\n    // We use 18 teams in this use Team-Deathmatch mode, define it;\n    SetTeamCount(18);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerTeam",children:"GetPlayerTeam"}),": Check what team a player is on."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerTeam",children:"SetPlayerTeam"}),": Set a player's team."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);