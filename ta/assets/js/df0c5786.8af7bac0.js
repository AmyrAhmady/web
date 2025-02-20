"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[99652],{28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var a=t(96540);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}},64708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"scripting/functions/atan","title":"atan","description":"Get the inversed value of a tangent in degrees.","source":"@site/docs/scripting/functions/atan.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/atan","permalink":"/ta/docs/scripting/functions/atan","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/atan.md","tags":[{"inline":true,"label":"math","permalink":"/ta/docs/tags/math"}],"version":"current","frontMatter":{"title":"atan","sidebar_label":"atan","description":"Get the inversed value of a tangent in degrees.","tags":["math"]},"sidebar":"docsSidebar","previous":{"title":"asin","permalink":"/ta/docs/scripting/functions/asin"},"next":{"title":"atan","permalink":"/ta/docs/scripting/functions/atan2"}}');var i=t(74848),s=t(28453);const r={title:"atan",sidebar_label:"atan",description:"Get the inversed value of a tangent in degrees.",tags:["math"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["Get the inversed value of a tangent in degrees. In trigonometrics, arc tangent is the inverse operation of tangent. Notice that because of the sign ambiguity, the function cannot determine with certainty in which quadrant the angle falls only by its tangent value. See ",(0,i.jsx)(n.a,{href:"atan2",children:"atan2"})," for an alternative that takes a fractional argument instead."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":value"]}),(0,i.jsx)(n.td,{children:"value whose arc tangent is computed."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"The angle in degrees, in the interval [-90.0,+90.0]."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'//The arc tangent of 1.000000 is 45.000000 degrees.\n\npublic OnGameModeInit()\n{\n    new Float:param, Float:result;\n    param = 1.0;\n    result = atan(param);\n    printf("The arc tangent of %f is %f degrees.", param, result);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"floatsin",children:"floatsin"}),": Get the sine from a specific angle."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"floatcos",children:"floatcos"}),": Get the cosine from a specific angle."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"floattan",children:"floattan"}),": Get the tangent from a specific angle."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"asin",children:"asin"}),": Get the inversed value of a sine in degrees."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"acos",children:"acos"}),": Get the inversed value of a cosine in degrees."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"atan2",children:"atan2"}),": Get the multi-valued inversed value of a tangent in degrees."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);