"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[93194],{28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var n=t(96540);const s={},l=n.createContext(s);function i(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(l.Provider,{value:r},e.children)}},72860:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/SetServerRuleFlags","title":"SetServerRuleFlags","description":"Sets the flags of a server rule.","source":"@site/docs/scripting/functions/SetServerRuleFlags.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetServerRuleFlags","permalink":"/tr/docs/scripting/functions/SetServerRuleFlags","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetServerRuleFlags.md","tags":[{"inline":true,"label":"rule","permalink":"/tr/docs/tags/rule"}],"version":"current","frontMatter":{"title":"SetServerRuleFlags","sidebar_label":"SetServerRuleFlags","description":"Sets the flags of a server rule.","tags":["rule"]},"sidebar":"docsSidebar","previous":{"title":"SetServerRule","permalink":"/tr/docs/scripting/functions/SetServerRule"},"next":{"title":"SetSpawnInfo","permalink":"/tr/docs/scripting/functions/SetSpawnInfo"}}');var s=t(74848),l=t(28453);const i={title:"SetServerRuleFlags",sidebar_label:"SetServerRuleFlags",description:"Sets the flags of a server rule.",tags:["rule"]},o=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{VersionWarn:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(r.admonition,{type:"warning",children:(0,s.jsx)(r.p,{children:"This function has not yet been implemented."})}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.p,{children:"Sets the flags of a server rule."}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"const rule[]"}),(0,s.jsx)(r.td,{children:"The server rule name."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["E_SERVER_RULE_FLAGS",":flags"]}),(0,s.jsx)(r.td,{children:"The flags to set."})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:["Returns ",(0,s.jsx)(r.strong,{children:"true"})," if the function executed successfully, otherwise ",(0,s.jsx)(r.strong,{children:"false"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    AddServerRule("discord", "discord.gg/samp");\n    SetServerRuleFlags("discord", 1);\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"AddServerRule",children:"AddServerRule"}),": Add a server rule."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"RemoveServerRule",children:"RemoveServerRule"}),": Remove the server rule."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"IsValidServerRule",children:"IsValidServerRule"}),": Checks if the given server rule is valid."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"GetServerRuleFlags",children:"GetServerRuleFlags"}),": Gets the flags of a server rule."]}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);