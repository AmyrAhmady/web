"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[5112],{2444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/GetMyFacingAngle","title":"GetMyFacingAngle","description":"Get the current facing angle of the NPC.","source":"@site/docs/scripting/functions/GetMyFacingAngle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetMyFacingAngle","permalink":"/tr/docs/scripting/functions/GetMyFacingAngle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetMyFacingAngle.md","tags":[],"version":"current","frontMatter":{"title":"GetMyFacingAngle","sidebar_label":"GetMyFacingAngle","description":"Get the current facing angle of the NPC.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GetModeRestartTime","permalink":"/tr/docs/scripting/functions/GetModeRestartTime"},"next":{"title":"GetMyPos","permalink":"/tr/docs/scripting/functions/GetMyPos"}}');var s=t(74848),r=t(28453);const c={title:"GetMyFacingAngle",sidebar_label:"GetMyFacingAngle",description:"Get the current facing angle of the NPC.",tags:[]},l=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Get the current facing angle of the NPC."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["&Float",":Angle"]}),(0,s.jsx)(n.td,{children:"A float to save the angle in, passed by reference."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"The facing angle is stored in the specified variable."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnPlayerText(playerid, text[])\n{\nnew Float:Angle;\nGetMyFacingAngle(Angle);\nprintf("I am currently facing %f!", Angle);\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../functions/SetMyFacingAngle",children:"SetMyFacingAngle"}),": Set the NPC's facing angle."]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);