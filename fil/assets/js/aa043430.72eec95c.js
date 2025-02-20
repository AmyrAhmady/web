"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[67093],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(96540);const i={},l=r.createContext(i);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(l.Provider,{value:n},e.children)}},53052:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/AllowNickNameCharacter","title":"AllowNickNameCharacter","description":"Allows a character to be used in the nick name.","source":"@site/docs/scripting/functions/AllowNickNameCharacter.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AllowNickNameCharacter","permalink":"/fil/docs/scripting/functions/AllowNickNameCharacter","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AllowNickNameCharacter.md","tags":[],"version":"current","frontMatter":{"title":"AllowNickNameCharacter","sidebar_label":"AllowNickNameCharacter","description":"Allows a character to be used in the nick name.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"AllowInteriorWeapons","permalink":"/fil/docs/scripting/functions/AllowInteriorWeapons"},"next":{"title":"AllowPlayerTeleport","permalink":"/fil/docs/scripting/functions/AllowPlayerTeleport"}}');var i=t(74848),l=t(28453);const a={title:"AllowNickNameCharacter",sidebar_label:"AllowNickNameCharacter",description:"Allows a character to be used in the nick name.",tags:[]},c=void 0,s={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Allows a character to be used in the nick name."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"character"}),(0,i.jsx)(n.td,{children:"The character to allow or disallow."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["bool",":allow"]}),(0,i.jsx)(n.td,{children:"true-Allow, false-Disallow"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    AllowNickNameCharacter('*', true); // Allow char *\n    AllowNickNameCharacter('[', false); // Disallow char [\n    AllowNickNameCharacter(']', false); // Disallow char ]\n\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"IsNickNameCharacterAllowed",children:"IsNickNameCharacterAllowed"}),": Checks if a character is allowed in nickname."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"IsValidNickName",children:"IsValidNickName"}),": Checks if a nick name is valid."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SetPlayerName",children:"SetPlayerName"}),": Sets the name of a player."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPlayerName",children:"GetPlayerName"}),": Gets the name of a player."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);