"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[34557],{11171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scripting/functions/GetAnimationName","title":"GetAnimationName","description":"Get the animation library/name for the index.","source":"@site/docs/scripting/functions/GetAnimationName.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetAnimationName","permalink":"/ro/docs/scripting/functions/GetAnimationName","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetAnimationName.md","tags":[],"version":"current","frontMatter":{"title":"GetAnimationName","sidebar_label":"GetAnimationName","description":"Get the animation library/name for the index.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GetActors","permalink":"/ro/docs/scripting/functions/GetActors"},"next":{"title":"GetAvailableClasses","permalink":"/ro/docs/scripting/functions/GetAvailableClasses"}}');var a=t(74848),r=t(28453);const s={title:"GetAnimationName",sidebar_label:"GetAnimationName",description:"Get the animation library/name for the index.",tags:[]},o=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Get the animation library/name for the index."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"index"}),(0,a.jsx)(n.td,{children:"The animation index, returned by GetPlayerAnimationIndex."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"animationLibrary[]"}),(0,a.jsx)(n.td,{children:"String variable that stores the animation library."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"len1 = sizeof (animationLibrary)"}),(0,a.jsx)(n.td,{children:"Size of the string that stores the animation library."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"animationName[]"}),(0,a.jsx)(n.td,{children:"String variable that stores the animation name."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"len2 = sizeof (animationName)"}),(0,a.jsx)(n.td,{children:"Size of the string that stores the animation name."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"1 on success, 0 on failure."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'public OnPlayerUpdate(playerid)\n{\n    if (GetPlayerAnimationIndex(playerid))\n    {\n        new\n            animLib[32],\n            animName[32],\n            msgText[128];\n\n        GetAnimationName(GetPlayerAnimationIndex(playerid), animLib, sizeof animLib, animName, sizeof animName);\n        format(msgText, sizeof msgText, "Running anim: %s %s", animLib, animName);\n        SendClientMessage(playerid, 0xFFFFFFFF, msgText);\n    }\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"GetPlayerAnimationIndex",children:"GetPlayerAnimationIndex"}),": Returns the index of any running applied animations"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);