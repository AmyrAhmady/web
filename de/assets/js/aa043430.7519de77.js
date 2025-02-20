"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[67093],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var r=t(96540);const a={},i=r.createContext(a);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}},53052:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/AllowNickNameCharacter","title":"AllowNickNameCharacter","description":"Allows a character to be used in the nick name.","source":"@site/docs/scripting/functions/AllowNickNameCharacter.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AllowNickNameCharacter","permalink":"/de/docs/scripting/functions/AllowNickNameCharacter","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AllowNickNameCharacter.md","tags":[],"version":"current","frontMatter":{"title":"AllowNickNameCharacter","sidebar_label":"AllowNickNameCharacter","description":"Allows a character to be used in the nick name.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"AllowInteriorWeapons","permalink":"/de/docs/scripting/functions/AllowInteriorWeapons"},"next":{"title":"AllowPlayerTeleport","permalink":"/de/docs/scripting/functions/AllowPlayerTeleport"}}');var a=t(74848),i=t(28453);const l={title:"AllowNickNameCharacter",sidebar_label:"AllowNickNameCharacter",description:"Allows a character to be used in the nick name.",tags:[]},c=void 0,s={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Allows a character to be used in the nick name."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"character"}),(0,a.jsx)(n.td,{children:"The character to allow or disallow."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["bool",":allow"]}),(0,a.jsx)(n.td,{children:"true-Allow, false-Disallow"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    AllowNickNameCharacter('*', true); // Allow char *\n    AllowNickNameCharacter('[', false); // Disallow char [\n    AllowNickNameCharacter(']', false); // Disallow char ]\n\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"IsNickNameCharacterAllowed",children:"IsNickNameCharacterAllowed"}),": Checks if a character is allowed in nickname."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"IsValidNickName",children:"IsValidNickName"}),": Checks if a nick name is valid."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"SetPlayerName",children:"SetPlayerName"}),": Sets the name of a player."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GetPlayerName",children:"GetPlayerName"}),": Gets the name of a player."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);