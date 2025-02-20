"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[34031],{28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var n=t(96540);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}},84217:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"scripting/functions/GetSVarType","title":"GetSVarType","description":"Gets the type (integer, float or string) of a server variable.","source":"@site/docs/scripting/functions/GetSVarType.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetSVarType","permalink":"/tr/docs/scripting/functions/GetSVarType","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetSVarType.md","tags":[{"inline":true,"label":"server variable","permalink":"/tr/docs/tags/server-variable"},{"inline":true,"label":"svar","permalink":"/tr/docs/tags/svar"}],"version":"current","frontMatter":{"title":"GetSVarType","sidebar_label":"GetSVarType","description":"Gets the type (integer, float or string) of a server variable.","tags":["server variable","svar"]},"sidebar":"docsSidebar","previous":{"title":"GetSVarString","permalink":"/tr/docs/scripting/functions/GetSVarString"},"next":{"title":"GetSVarsUpperIndex","permalink":"/tr/docs/scripting/functions/GetSVarsUpperIndex"}}');var s=t(74848),a=t(28453);const i={title:"GetSVarType",sidebar_label:"GetSVarType",description:"Gets the type (integer, float or string) of a server variable.",tags:["server variable","svar"]},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.p,{children:"Gets the type (integer, float or string) of a server variable."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"const svar[]"}),(0,s.jsx)(r.td,{children:"The name of the server variable to get the type of."})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:["Returns the ",(0,s.jsx)(r.a,{href:"../resources/svartypes",children:"type"})," of the SVar."]}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-c",children:'stock PrintSVar(varname[])\n{\n    switch(GetSVarType(varname))\n    {\n        case SERVER_VARTYPE_NONE:\n        {\n            return 0;\n        }\n        case SERVER_VARTYPE_INT:\n        {\n            printf("Integer SVar \'%s\': %i", varname, GetSVarInt(varname));\n        }\n        case SERVER_VARTYPE_FLOAT:\n        {\n            printf("Float SVar \'%s\': %f", varname, GetSVarFloat(varname));\n        }\n        case SERVER_VARTYPE_STRING:\n        {\n            new varstring[256];\n            GetSVarString(varname, varstring);\n\n            printf("String SVar \'%s\': %s", varname, varstring);\n        }\n    }\n    return 1;\n}\n\npublic OnGameModeInit()\n{\n    SetSVarInt("Version", 37);\n\n    PrintSVar("Version"); // Output: "Integer SVar \'Version\': 37"\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"SetSVarInt",children:"SetSVarInt"}),": Set an integer for a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"GetSVarInt",children:"GetSVarInt"}),": Get a player server as an integer."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"SetSVarString",children:"SetSVarString"}),": Set a string for a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"GetSVarString",children:"GetSVarString"}),": Get the previously set string from a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"SetSVarFloat",children:"SetSVarFloat"}),": Set a float for a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"GetSVarFloat",children:"GetSVarFloat"}),": Get the previously set float from a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"DeleteSVar",children:"DeleteSVar"}),": Delete a server variable."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"../resources/svartypes",children:"Server Variable Types"})}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);