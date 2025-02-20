"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[11801],{15956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"scripting/functions/atan2","title":"atan","description":"Get the multi-valued inversed value of a tangent in degrees.","source":"@site/docs/scripting/functions/atan2.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/atan2","permalink":"/fa/docs/scripting/functions/atan2","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/atan2.md","tags":[{"inline":true,"label":"math","permalink":"/fa/docs/tags/math"}],"version":"current","frontMatter":{"title":"atan","sidebar_label":"atan","description":"Get the multi-valued inversed value of a tangent in degrees.","tags":["math"]},"sidebar":"docsSidebar","previous":{"title":"atan","permalink":"/fa/docs/scripting/functions/atan"},"next":{"title":"clamp","permalink":"/fa/docs/scripting/functions/clamp"}}');var a=n(74848),s=n(28453);const r={title:"atan",sidebar_label:"atan",description:"Get the multi-valued inversed value of a tangent in degrees.",tags:["math"]},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"Notice that the y-value is the first parameter and the x-value is the second parameter. This is because the mathematical notation is y/x (i.e. y divided by x) and the convention is to write the operands in the order of the operation that is performed on them."})}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Get the multi-valued inversed value of a tangent in degrees. In trigonometrics, arc tangent is the inverse operation of tangent. To compute the value, the function takes into account the sign of both arguments in order to determine the quadrant."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":y"]}),(0,a.jsx)(t.td,{children:"value representing the proportion of the y-coordinate."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":x"]}),(0,a.jsx)(t.td,{children:"value representing the proportion of the x-coordinate."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"The angle in degrees, in the interval [-180.0,+180.0]."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'//The arc tangent for (x=-10.000000, y=10.000000) is 135.000000 degrees.\n\npublic OnGameModeInit()\n{\n    new Float:x, Float:y, Float:result;\n    x = -10.0;\n    y = 10.0;\n    result = atan2(y, x);\n    printf("The arc tangent for (x=%f, y=%f) is %f degrees.", x, y, result);\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"floatsin",children:"floatsin"}),": Get the sine from a specific angle."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"floatcos",children:"floatcos"}),": Get the cosine from a specific angle."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"floattan",children:"floattan"}),": Get the tangent from a specific angle."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"asin",children:"asin"}),": Get the inversed value of a sine in degrees."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"acos",children:"acos"}),": Get the inversed value of a cosine in degrees."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"atan",children:"atan"}),": Get the inversed value of a tangent in degrees."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);