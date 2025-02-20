"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[28893],{28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var s=n(96540);const t={},l=s.createContext(t);function i(e){const r=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:r},e.children)}},42433:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"scripting/functions/GetServerRuleFlags","title":"GetServerRuleFlags","description":"Gets the flags of a server rule.","source":"@site/docs/scripting/functions/GetServerRuleFlags.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetServerRuleFlags","permalink":"/ro/docs/scripting/functions/GetServerRuleFlags","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetServerRuleFlags.md","tags":[{"inline":true,"label":"rule","permalink":"/ro/docs/tags/rule"}],"version":"current","frontMatter":{"title":"GetServerRuleFlags","sidebar_label":"GetServerRuleFlags","description":"Gets the flags of a server rule.","tags":["rule"]},"sidebar":"docsSidebar","previous":{"title":"GetSVarsUpperIndex","permalink":"/ro/docs/scripting/functions/GetSVarsUpperIndex"},"next":{"title":"GetServerTickRate","permalink":"/ro/docs/scripting/functions/GetServerTickRate"}}');var t=n(74848),l=n(28453);const i={title:"GetServerRuleFlags",sidebar_label:"GetServerRuleFlags",description:"Gets the flags of a server rule.",tags:["rule"]},o=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components},{VersionWarn:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsx)(r.p,{children:"This function has not yet been implemented."})}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:"Gets the flags of a server rule."}),"\n",(0,t.jsx)(r.h2,{id:"return-values",children:"Return Values"}),"\n",(0,t.jsx)(r.p,{children:"Returns the server rule flags."}),"\n",(0,t.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    AddServerRule("discord", "discord.gg/samp");\n    SetServerRuleFlags("discord", 1);\n\n    new E_SERVER_RULE_FLAGS:flags = GetServerRuleFlags("discord");\n    printf("Flags: %d", _:flags); // Flags: 1\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"AddServerRule",children:"AddServerRule"}),": Add a server rule."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"RemoveServerRule",children:"RemoveServerRule"}),": Remove the server rule."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"IsValidServerRule",children:"IsValidServerRule"}),": Checks if the given server rule is valid."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"SetServerRuleFlags",children:"SetServerRuleFlags"}),": Sets the flags of a server rule."]}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);