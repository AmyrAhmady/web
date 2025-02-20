"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[13901],{28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var s=i(96540);const a={},t=s.createContext(a);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(t.Provider,{value:n},e.children)}},98046:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"scripting/functions/UsePlayerPedAnims","title":"UsePlayerPedAnims","description":"Uses standard player walking animation (animation of the CJ skin) instead of custom animations for every skin (e.g. skating for skater skins).","source":"@site/docs/scripting/functions/UsePlayerPedAnims.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/UsePlayerPedAnims","permalink":"/fa/docs/scripting/functions/UsePlayerPedAnims","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/UsePlayerPedAnims.md","tags":[{"inline":true,"label":"player","permalink":"/fa/docs/tags/player"}],"version":"current","frontMatter":{"title":"UsePlayerPedAnims","sidebar_label":"UsePlayerPedAnims","description":"Uses standard player walking animation (animation of the CJ skin) instead of custom animations for every skin (e.g. skating for skater skins).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"UsePlayerGangZoneCheck","permalink":"/fa/docs/scripting/functions/UsePlayerGangZoneCheck"},"next":{"title":"VectorSize","permalink":"/fa/docs/scripting/functions/VectorSize"}}');var a=i(74848),t=i(28453);const r={title:"UsePlayerPedAnims",sidebar_label:"UsePlayerPedAnims",description:"Uses standard player walking animation (animation of the CJ skin) instead of custom animations for every skin (e.g. skating for skater skins).",tags:["player"]},o=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Uses standard player walking animation (animation of the CJ skin) instead of custom animations for every skin (e.g. skating for skater skins)."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    UsePlayerPedAnims();\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["Only works when placed under ",(0,a.jsx)(n.a,{href:"../callbacks/OnGameModeInit",children:"OnGameModeInit"}),"."]}),(0,a.jsx)(n.p,{children:"Not using this function causes two-handed weapons (not dual-handed - a single weapon that is held by both hands) to be held in only one hand."})]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["You can also enable standard player walking animation via ",(0,a.jsx)(n.a,{href:"../../server/config.json",children:"config.json"})]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'"use_player_ped_anims": true,\n'})})]}),"\n",(0,a.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"ApplyAnimation",children:"ApplyAnimation"}),": Apply an animation to a player."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"ClearAnimations",children:"ClearAnimations"}),": Clear any animations a player is performing."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);