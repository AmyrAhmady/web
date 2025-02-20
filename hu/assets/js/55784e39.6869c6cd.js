"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[25369],{26123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"scripting/functions/strcopy","title":"strcopy","description":"Copies a string into the destination string.","source":"@site/docs/scripting/functions/strcopy.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/strcopy","permalink":"/hu/docs/scripting/functions/strcopy","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/strcopy.md","tags":[{"inline":true,"label":"string","permalink":"/hu/docs/tags/string"}],"version":"current","frontMatter":{"title":"strcopy","sidebar_label":"strcopy","description":"Copies a string into the destination string.","tags":["string"]},"sidebar":"docsSidebar","previous":{"title":"strcmp","permalink":"/hu/docs/scripting/functions/strcmp"},"next":{"title":"strdel","permalink":"/hu/docs/scripting/functions/strdel"}}');var i=n(74848),r=n(28453);const o={title:"strcopy",sidebar_label:"strcopy",description:"Copies a string into the destination string.",tags:["string"]},c=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{LowercaseNote:n,VersionWarn:s}=t;return n||h("LowercaseNote",!0),s||h("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(n,{}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Copies a string into the destination string."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"dest[]"}),(0,i.jsx)(t.td,{children:"The string to copy the source string into."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"const source[]"}),(0,i.jsx)(t.td,{children:"The source string."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxlength = sizeof (dest)"}),(0,i.jsxs)(t.td,{children:["The maximum length of the destination. ",(0,i.jsx)(t.em,{children:"(optional)"})]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"The length of the new destination string."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new playerName[MAX_PLAYER_NAME];\nGetPlayerName(playerid, playerName, MAX_PLAYER_NAME);\n\nnew string[64];\nstrcopy(string, playerName); // Copies playerName into string\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"strcat",children:"strcat"}),": Concatenate two strings into a destination reference."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);