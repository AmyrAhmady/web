"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[80122],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(96540);const i={},c=r.createContext(i);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:n},e.children)}},69720:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/IsNickNameCharacterAllowed","title":"IsNickNameCharacterAllowed","description":"Checks if a character is allowed in nickname.","source":"@site/docs/scripting/functions/IsNickNameCharacterAllowed.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsNickNameCharacterAllowed","permalink":"/de/docs/scripting/functions/IsNickNameCharacterAllowed","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsNickNameCharacterAllowed.md","tags":[],"version":"current","frontMatter":{"title":"IsNickNameCharacterAllowed","sidebar_label":"IsNickNameCharacterAllowed","description":"Checks if a character is allowed in nickname.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"IsMenuRowDisabled","permalink":"/de/docs/scripting/functions/IsMenuRowDisabled"},"next":{"title":"IsObjectHiddenForPlayer","permalink":"/de/docs/scripting/functions/IsObjectHiddenForPlayer"}}');var i=t(74848),c=t(28453);const s={title:"IsNickNameCharacterAllowed",sidebar_label:"IsNickNameCharacterAllowed",description:"Checks if a character is allowed in nickname.",tags:[]},a=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Checks if a character is allowed in nickname."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"character"}),(0,i.jsx)(n.td,{children:"The character to check."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:["This function returns ",(0,i.jsx)(n.strong,{children:"true"})," if the character is allowed, or ",(0,i.jsx)(n.strong,{children:"false"})," if it is not."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    AllowNickNameCharacter('*', true); // Allow char *\n\n    if (IsNickNameCharacterAllowed('*'))\n    {\n        print(\"Character * is allowed in nickname.\");\n    }\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"AllowNickNameCharacter",children:"AllowNickNameCharacter"}),": Allows a character to be used in the nick name."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);