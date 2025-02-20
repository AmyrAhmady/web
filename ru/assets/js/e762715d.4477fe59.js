"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[5904],{28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}},28916:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"scripting/functions/floatsin","title":"floatsin","description":"Get the sine from a given angle.","source":"@site/docs/scripting/functions/floatsin.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/floatsin","permalink":"/ru/docs/scripting/functions/floatsin","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/floatsin.md","tags":[{"inline":true,"label":"math","permalink":"/ru/docs/tags/math"},{"inline":true,"label":"floating-point","permalink":"/ru/docs/tags/floating-point"}],"version":"current","frontMatter":{"title":"floatsin","sidebar_label":"floatsin","description":"Get the sine from a given angle.","tags":["math","floating-point"]},"sidebar":"docsSidebar","previous":{"title":"floatround","permalink":"/ru/docs/scripting/functions/floatround"},"next":{"title":"floatsqroot","permalink":"/ru/docs/scripting/functions/floatsqroot"}}');var i=t(74848),r=t(28453);const o={title:"floatsin",sidebar_label:"floatsin",description:"Get the sine from a given angle.",tags:["math","floating-point"]},l=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Get the sine from a given angle. The input angle may be in radians, degrees or grades."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":value"]}),(0,i.jsx)(n.td,{children:"The angle from which to get the sine."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["anglemode",":mode"]}),(0,i.jsxs)(n.td,{children:["The ",(0,i.jsx)(n.a,{href:"../resources/anglemodes",children:"angle mode"})," to use, depending on the value entered. (default: radian)"]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"The sine of the value entered."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"GetPosInFrontOfPlayer(playerid, Float:distance, &Float:x, &Float:y, &Float:z)\n{\n    if (GetPlayerPos(playerid, x, y, z)) // this functions returns 0 if the player is not connected\n    {\n        new Float:z_angle;\n        GetPlayerFacingAngle(playerid, z_angle);\n\n        x += distance * floatsin(-z_angle, degrees); // angles in GTA go counter-clockwise, so we need to reverse the retrieved angle\n        y += distance * floatcos(-z_angle, degrees);\n\n        return 1; // return 1 on success, the actual coordinates are returned by reference\n    }\n    return 0; // return 0 if the player isn't connected\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["GTA/SA-MP use degrees for angles in most circumstances, for example ",(0,i.jsx)(n.a,{href:"GetPlayerFacingAngle",children:"GetPlayerFacingAngle"}),". Therefore, it is most likely you'll want to use the 'degrees' angle mode, not radians. Also note that angles in GTA are counterclockwise; 270\xb0 is East and 90\xb0 is West. South is still 180\xb0 and North still 0\xb0/360\xb0."]})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"floattan",children:"floattan"}),": Get the tangent from a specific angle."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"floatcos",children:"floatcos"}),": Get the cosine from a specific angle."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../resources/anglemodes",children:"Angle Modes"}),": SI unit constants for measuring angles."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);