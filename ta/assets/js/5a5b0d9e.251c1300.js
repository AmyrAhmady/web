"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[99514],{28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}},40545:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"scripting/functions/floatcos","title":"floatcos","description":"Get the cosine from a given angle.","source":"@site/docs/scripting/functions/floatcos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/floatcos","permalink":"/ta/docs/scripting/functions/floatcos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/floatcos.md","tags":[{"inline":true,"label":"math","permalink":"/ta/docs/tags/math"},{"inline":true,"label":"floating-point","permalink":"/ta/docs/tags/floating-point"}],"version":"current","frontMatter":{"title":"floatcos","sidebar_label":"floatcos","description":"Get the cosine from a given angle.","tags":["math","floating-point"]},"sidebar":"docsSidebar","previous":{"title":"floatcmp","permalink":"/ta/docs/scripting/functions/floatcmp"},"next":{"title":"floatdiv","permalink":"/ta/docs/scripting/functions/floatdiv"}}');var i=t(74848),o=t(28453);const r={title:"floatcos",sidebar_label:"floatcos",description:"Get the cosine from a given angle.",tags:["math","floating-point"]},l=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Get the cosine from a given angle. The input angle may be in radians, degrees or grades."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":value"]}),(0,i.jsx)(n.td,{children:"The angle from which to get the cosine."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["anglemode",":mode"]}),(0,i.jsxs)(n.td,{children:["The ",(0,i.jsx)(n.a,{href:"../resources/anglemodes",children:"angle mode"})," to use, depending on the value entered. (default: radian)"]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"The cosine of the value entered."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    printf("The cosine from 90\xb0 is %.0f", floatcos(90.0, degrees));\n    // Output: 0\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["GTA/SA-MP use degrees for angles in most circumstances, for example ",(0,i.jsx)(n.a,{href:"GetPlayerFacingAngle",children:"GetPlayerFacingAngle"}),". Therefore, it is most likely you'll want to use the 'degrees' angle mode, not radians. Also note that angles in GTA are counterclockwise; 270\xb0 is East and 90\xb0 is West. South is still 180\xb0 and North still 0\xb0/360\xb0."]})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"floatsin",children:"floatsin"}),": Get the sine from a specific angle."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"floattan",children:"floattan"}),": Get the tangent from a specific angle."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../resources/anglemodes",children:"Angle Modes"}),": SI unit constants for measuring angles."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);