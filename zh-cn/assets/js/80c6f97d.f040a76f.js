"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[77122],{5621:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>c});const d=JSON.parse('{"id":"scripting/resources/gametextstyles","title":"GameText Styles","description":"GameText Styles used in textdraws and gametext.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/resources/gametextstyles.md","sourceDirName":"scripting/resources","slug":"/scripting/resources/gametextstyles","permalink":"/zh-cn/docs/scripting/resources/gametextstyles","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/resources/gametextstyles.md","tags":[],"version":"current","frontMatter":{"title":"GameText Styles","sidebar_label":"GameText Styles","description":"GameText Styles used in textdraws and gametext."},"sidebar":"docsSidebar","previous":{"title":"Floatround Modes","permalink":"/zh-cn/docs/scripting/resources/floatroundmodes"},"next":{"title":"Glossary","permalink":"/zh-cn/docs/scripting/resources/glossary"}}');var n=t(74848),r=t(28453);const l={title:"GameText Styles",sidebar_label:"GameText Styles",description:"GameText Styles used in textdraws and gametext."},i=void 0,h={},c=[{value:"Text Colors",id:"text-colors",level:2},{value:"Special Text Letters",id:"special-text-letters",level:2},{value:"Text Styles",id:"text-styles",level:2},{value:"Text Styles added by fixes.inc",id:"text-styles-added-by-fixesinc",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["This page covers everything you need to know about gametext styles, and how they can be used in textdraws and in text rendered for a (single) player.\nMainly used by ",(0,n.jsx)(s.a,{href:"../functions/GameTextForPlayer",children:"GameText"})," and ",(0,n.jsx)(s.a,{href:"../functions/GameTextForAll",children:"GameTextForAll"}),"."]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"text-colors",children:"Text Colors"}),"\n",(0,n.jsx)(s.p,{children:"It is possible to draw certain parts of your text in different colors. To do this, you simply need to use the colour slugs listed below, and encapsulate the part of your text which you want to draw in a specific color (e.g. ~y~I'm drawn in yellow!~y~)."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Code"}),(0,n.jsx)(s.th,{children:"Colour"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"N/A"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/-.png",alt:""})}),(0,n.jsx)(s.td,{children:"Default colour, has no code."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~h~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/h.png",alt:""})}),(0,n.jsx)(s.td,{children:"Lighter version of the default colour."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~h~~h~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/hh.png",alt:""})}),(0,n.jsx)(s.td,{children:"Lighter version of the default colour."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~r~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/r.png",alt:""})}),(0,n.jsx)(s.td,{children:"Has five levels of lightening."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~r~~h~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/rh.png",alt:""})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~r~~h~~h~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/rhh.png",alt:""})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~r~~h~~h~~h~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/rhhh.png",alt:""})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~r~~h~~h~~h~~h~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/rhhhh.png",alt:""})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~r~~h~~h~~h~~h~~h~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/rhhhhh.png",alt:""})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~g~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/g.png",alt:""})}),(0,n.jsx)(s.td,{children:"Has four levels of lightening."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~g~~h~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/gh.png",alt:""})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~g~~h~~h~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/ghh.png",alt:""})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~g~~h~~h~~h~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/ghhh.png",alt:""})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~g~~h~~h~~h~~h~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/ghhhh.png",alt:""})}),(0,n.jsxs)(s.td,{children:["Same as ",(0,n.jsx)(s.code,{children:"~y~~h~~h~"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~b~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/b.png",alt:""})}),(0,n.jsx)(s.td,{children:"Has three levels of lightening."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~b~~h~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/bh.png",alt:""})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~b~~h~~h~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/bhh.png",alt:""})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~b~~h~~h~~h~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/bhhh.png",alt:""})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~p~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/p.png",alt:""})}),(0,n.jsx)(s.td,{children:"Has two levels of lightening."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~p~~h~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/ph.png",alt:""})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~p~~h~~h~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/phh.png",alt:""})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~y~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/y.png",alt:""})}),(0,n.jsx)(s.td,{children:"Has two levels of lightening."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~y~~h~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/yh.png",alt:""})}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~y~~h~~h~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/yhh.png",alt:""})}),(0,n.jsxs)(s.td,{children:["Same as ",(0,n.jsx)(s.code,{children:"~g~~h~~h~~h~~h~"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~l~"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/l.png",alt:""})}),(0,n.jsx)(s.td,{children:'Lower case "L".  Can\'t be lightened.'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~w~ (or ~s~)"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/w.png",alt:""})}),(0,n.jsx)(s.td,{children:"Has one level of lightening."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~w~~h~ (or ~s~~h~)"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/wh.png",alt:""})}),(0,n.jsx)(s.td,{children:"All colours become this when lightened too much."})]})]})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"special-text-letters",children:"Special Text Letters"}),"\n",(0,n.jsx)(s.p,{children:"Unlike text colors, these slugs do not require encapsulation. They can be used as-is."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Code"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~n~"})}),(0,n.jsx)(s.td,{children:"New line"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~h~"})}),(0,n.jsxs)(s.td,{children:["Turn selected colours lighter.  Text can appear between the main colour and the lightening, for example ",(0,n.jsx)(s.code,{children:"~r~Hello ~h~world"}),' will make "Hello" red and "world" slightly lighter red.']})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~u~"})}),(0,n.jsx)(s.td,{children:"Up arrow (gray)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~d~"})}),(0,n.jsx)(s.td,{children:"Down arrow (gray)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~<~"})}),(0,n.jsx)(s.td,{children:"Left arrow (gray)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~>~"})}),(0,n.jsx)(s.td,{children:"Right arrow (gray)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~]~"})}),(0,n.jsxs)(s.td,{children:["Displays a ",(0,n.jsx)(s.code,{children:"*"})," symbol (Only in text styles 3, 4 and 5)"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"~k~"})}),(0,n.jsxs)(s.td,{children:["Keyboard key mapping (e.g. ",(0,n.jsx)(s.code,{children:"~k~~VEHICLE_TURRETLEFT~"})," and ",(0,n.jsx)(s.code,{children:"~k~~PED_FIREWEAPON~"}),"). Look ",(0,n.jsx)(s.a,{href:"../resources/keys",children:"here"})," for a list of keys."]})]})]})]}),"\n",(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsxs)(s.p,{children:["Be careful, using too many text colors or special characters in one gametext may crash every player the gametext is shown to. Additionally, avoid using an uneven usage of the ",(0,n.jsx)(s.code,{children:"~"})," character. Example: ",(0,n.jsx)(s.code,{children:"~~r~Hello, ~g~how are ~y~you?"})]})}),"\n",(0,n.jsx)(s.h2,{id:"text-styles",children:"Text Styles"}),"\n",(0,n.jsx)(s.p,{children:"You can use the following text styles in game texts."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Style"}),(0,n.jsx)(s.th,{children:"Preview"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Style 0"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/style0.png",alt:""})}),(0,n.jsx)(s.td,{children:"Appears for 9 seconds regardless of time setting. Hides textdraws and any other gametext on screen (fixed in fixes.inc)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Style 1"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/style1.png",alt:""})}),(0,n.jsx)(s.td,{children:"Fades out after 8 seconds, regardless of time set. If you have a time setting longer than that, it will re-appear after fading out and repeat until the time ends (fixed in fixes.inc)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Style 2"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/style2.png",alt:""})}),(0,n.jsx)(s.td,{children:"N/A"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Style 3"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/style3.png",alt:""})}),(0,n.jsx)(s.td,{children:"N/A"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Style 4"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/style4.png",alt:""})}),(0,n.jsx)(s.td,{children:"N/A"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Style 5"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/style5.png",alt:""})}),(0,n.jsx)(s.td,{children:"Displays for 3 seconds, regardless of what time you set. Will refuse to be shown if it is 'spammed' (fixed in fixes.inc)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Style 6"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/style6.png",alt:""})}),(0,n.jsx)(s.td,{children:"N/A"})]})]})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.h2,{id:"text-styles-added-by-fixesinc",children:["Text Styles added by ",(0,n.jsx)(s.a,{href:"https://github.com/pawn-lang/sa-mp-fixes",children:"fixes.inc"})]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Style"}),(0,n.jsx)(s.th,{children:"Preview"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Style 7"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/style7.png",alt:""})}),(0,n.jsx)(s.td,{children:"Based on SA vehicle names."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Style 8"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/style8.png",alt:""})}),(0,n.jsx)(s.td,{children:"Based on SA location names."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Style 9"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/style9.png",alt:""})}),(0,n.jsx)(s.td,{children:"Based on SA radio station names (once selected)."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Style 10"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/style10.png",alt:""})}),(0,n.jsx)(s.td,{children:"Based on SA radio station names (while switching)."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Style 11"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/style11.png",alt:""})}),(0,n.jsx)(s.td,{children:"Based on SA positive money."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Style 12"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/style12.png",alt:""})}),(0,n.jsx)(s.td,{children:"Based on SA negative money."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Style 13"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/style13.png",alt:""})}),(0,n.jsx)(s.td,{children:"Based on SA stunt bonuses."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Style 14"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/style14.png",alt:""})}),(0,n.jsx)(s.td,{children:"Based on SA in-game clock."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Style 15"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.img,{src:"https://assets.open.mp/assets/images/gameTextStyles/style15.png",alt:""})}),(0,n.jsx)(s.td,{children:"Based on SA notification popup."})]})]})]})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>i});var d=t(96540);const n={},r=d.createContext(n);function l(e){const s=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),d.createElement(r.Provider,{value:s},e.children)}}}]);