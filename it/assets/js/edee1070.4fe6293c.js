"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[78396],{28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>s});var r=t(96540);const o={},a=r.createContext(o);function i(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),r.createElement(a.Provider,{value:e},n.children)}},31014:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/random","title":"random","description":"Get a pseudo-random number.","source":"@site/docs/scripting/functions/random.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/random","permalink":"/it/docs/scripting/functions/random","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/random.md","tags":[{"inline":true,"label":"core","permalink":"/it/docs/tags/core"}],"version":"current","frontMatter":{"title":"random","sidebar_label":"random","description":"Get a pseudo-random number.","tags":["core"]},"sidebar":"docsSidebar","previous":{"title":"printf","permalink":"/it/docs/scripting/functions/printf"},"next":{"title":"sendpacket","permalink":"/it/docs/scripting/functions/sendpacket"}}');var o=t(74848),a=t(28453);const i={title:"random",sidebar_label:"random",description:"Get a pseudo-random number.",tags:["core"]},s=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2}];function l(n){const e={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...n.components},{LowercaseNote:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{}),"\n",(0,o.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(e.p,{children:"Get a pseudo-random number."}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Name"}),(0,o.jsx)(e.th,{children:"Description"})]})}),(0,o.jsx)(e.tbody,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"max"}),(0,o.jsx)(e.td,{children:"The range of values (from 0 to this value minus one) that can be returned."})]})})]}),"\n",(0,o.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(e.p,{children:"A random number ranging from 0 to max-1."}),"\n",(0,o.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-c",children:"new value = random(5);\n\n// 'value' might be 0, 1, 2, 3 or 4. (5 possible values)\nnew Float:RandomSpawn[][4] =\n{\n    // Positions, (X, Y, Z and Facing Angle)\n    {-2796.9854, 1224.8180, 20.5429, 192.0335},\n    {-2454.2170, 503.8759, 30.0790, 267.2932},\n    {-2669.7322, -6.0874, 6.1328, 89.8853}\n};\n\n\npublic OnPlayerSpawn(playerid)\n{\n    new rand = random(sizeof(RandomSpawn));\n\n    // SetPlayerPos to the random spawn data\n    SetPlayerPos(playerid, RandomSpawn[rand][0], RandomSpawn[rand][1], RandomSpawn[rand][2]);\n\n    // SetPlayerFacingAngle to the random facing angle data\n    SetPlayerFacingAngle(playerid, RandomSpawn[rand][3]);\n    return 1;\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"notes",children:"Notes"}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsx)(e.p,{children:"Using a value smaller than 1 gives weird values."})})]})}function p(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}}}]);