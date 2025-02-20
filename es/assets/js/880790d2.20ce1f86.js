"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[61989],{18265:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var s=t(60966),i=t(74848),o=t(28453);const r={slug:"release-candidate-1",title:"Release Candidate 1",authors:"y_less"},l=void 0,a={authorsImageUrls:[void 0]},h=[{value:"Pawn",id:"pawn",level:2},{value:"SDK",id:"sdk",level:2},{value:"Features",id:"features",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Links",id:"links",level:2}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"It's finally here! \ud83c\udf89 After years of development, rewrites, and challenges, we're excited to introduce Release Candidate 1 (RC1) of the open.mp server. This marks a major step towards our official 1.0 release, bringing significant updates, features, and improvements."}),"\n",(0,i.jsx)(n.p,{children:"It's here!"}),"\n",(0,i.jsx)(n.p,{children:"It's finally here!"}),"\n",(0,i.jsx)(n.p,{children:"After four years, two rewrites, arguments and drama, and countless other hurdles; it is finally here!"}),"\n",(0,i.jsx)(n.p,{children:"Release Candidate 1 (RC1) of the open.mp server."}),"\n",(0,i.jsxs)(n.p,{children:["This, hopefully, represents the final version of the code for our 1.0 release, and if everything goes smoothly with this version we will be able to finally ",(0,i.jsx)(n.strong,{children:"open"})," the so-called ",(0,i.jsx)(n.strong,{children:"open"}),".mp in just a few days from now."]}),"\n",(0,i.jsxs)(n.p,{children:["Before I get in to the meat of the release I want to first sincerely thank every member of the open.mp team for helping the mod get this far. It has not been easy, mostly because of how invested everyone truly was - we all wanted what was best for the mod, for the community, for SA",":MP",", for our servers, and for our players; we wouldn't have embarked on this journey if that wasn't the case. Unfortunately strong differing opinions on what is ",(0,i.jsx)(n.strong,{children:"best"})," sometimes causes friction. But we're here now. So to all, a huge thank you:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Amir"}),"\n",(0,i.jsx)(n.li,{children:"Cheaterman"}),"\n",(0,i.jsx)(n.li,{children:"Freaksken"}),"\n",(0,i.jsx)(n.li,{children:"Graber"}),"\n",(0,i.jsx)(n.li,{children:"Hual"}),"\n",(0,i.jsx)(n.li,{children:"Josh"}),"\n",(0,i.jsx)(n.li,{children:"JustMichael"}),"\n",(0,i.jsx)(n.li,{children:"kseny"}),"\n",(0,i.jsx)(n.li,{children:"Nexius"}),"\n",(0,i.jsx)(n.li,{children:"pkfin"}),"\n",(0,i.jsx)(n.li,{children:"Potassium"}),"\n",(0,i.jsx)(n.li,{children:"Southclaws"}),"\n",(0,i.jsx)(n.li,{children:"TommyB"}),"\n",(0,i.jsx)(n.li,{children:"Y_Less"}),"\n",(0,i.jsx)(n.li,{children:"Zeex"}),"\n",(0,i.jsx)(n.li,{children:"And probably more..."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Anyway, now the bit you actually care about..."}),"\n",(0,i.jsx)(n.p,{children:"Now we're out of beta, we're (if all goes well this week) releasing on time. So along with the server itself, which you've seen a dozen times before, we have some new goodies for you:"}),"\n",(0,i.jsx)(n.h2,{id:"pawn",children:"Pawn"}),"\n",(0,i.jsxs)(n.p,{children:["The download has the official includes, no more patching the old SA",":MP"," includes with ",(0,i.jsx)(n.code,{children:"omp.inc"}),", now we're doing it properly! It also has a new compiler. Ever wonder when 3.10.11 was coming? Well wait no longer (if you built it yourself, you could think of this one as 3.10.12)! With this combination you'll probably get loads of new warnings, but worry not - we have a tool for that as well, to automatically upgrade a load of code, adding well-defined symbol names, ",(0,i.jsx)(n.code,{children:"const"}),", and more in all the right places. Maybe you already noticed this, you've been using it for months, but the virtual machine (the bit inside the server) has been updated as well! Oh, and all those string natives you know and love, like ",(0,i.jsx)(n.code,{children:"SendClientMessage"})," and ",(0,i.jsx)(n.code,{children:"AddMenuItem"}),"? They all format now. All of them",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-1-2f6cc8",id:"user-content-fnref-1-2f6cc8","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"A full list of what's available:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Symbol length limit increased to 64, no more ",(0,i.jsx)(n.code,{children:"OnPlyrDoTheTing"})," to try and fit your names in. Leading to..."]}),"\n",(0,i.jsxs)(n.li,{children:["Multiple natives decompressed - is ",(0,i.jsx)(n.code,{children:"Col"})," short for ",(0,i.jsx)(n.code,{children:"Colour"})," or ",(0,i.jsx)(n.code,{children:"Collision"}),"? Now you know!"]}),"\n",(0,i.jsx)(n.li,{children:"Tags. Tags everywhere. See the included documentation."}),"\n",(0,i.jsx)(n.li,{children:"The official includes are finally const-correct. No more complaining that some people might not have them."}),"\n",(0,i.jsxs)(n.li,{children:["Compiler version updated: ",(0,i.jsx)(n.code,{children:"__nameof"}),", ",(0,i.jsx)(n.code,{children:"__addressof"}),", fixes, and too many more things to go in to here."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"switch"})," is way faster."]}),"\n",(0,i.jsx)(n.li,{children:"More warnings for previously undetected issues. The more problems the compiler can find, the fewer you need to."}),"\n",(0,i.jsxs)(n.li,{children:["An ",(0,i.jsx)(n.em,{children:"upgrader"})," tool to add tags and ",(0,i.jsx)(n.code,{children:"const"})," to user-code and fix several new warnings."]}),"\n",(0,i.jsx)(n.li,{children:"More consistent naming. Every native has been closely examined and compared to ensure the maximum level of similarity and intuitiveness in naming."}),"\n",(0,i.jsxs)(n.li,{children:["Added ",(0,i.jsx)(n.code,{children:"{Float, _}:..."})," everywhere. What does this mean? It means no more ",(0,i.jsx)(n.code,{children:"format()"}),(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-2-2f6cc8",id:"user-content-fnref-2-2f6cc8","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})," - think y_va but natively."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-O2"}),", the highest pawn optimisation level, works when using the new compiler and VM. Some includes may need to be updated, but some already have. To help with that..."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"__optimisation"})," macro was added so code can configure itself when compiled with -O2."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Documentation on the updated includes:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/openmultiplayer/omp-stdlib",children:"https://github.com/openmultiplayer/omp-stdlib"})]}),"\n",(0,i.jsxs)(n.p,{children:["Documentation on the new compiler:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/openmultiplayer/compiler/",children:"https://github.com/openmultiplayer/compiler/"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/pawn-lang/compiler/",children:"https://github.com/pawn-lang/compiler/"})]}),"\n",(0,i.jsxs)(n.p,{children:["Documentation on qawno:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/openmultiplayer/qawno/",children:"https://github.com/openmultiplayer/qawno/"})]}),"\n",(0,i.jsxs)(n.p,{children:["Documentation on the upgrader tool:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/openmultiplayer/upgrade",children:"https://github.com/openmultiplayer/upgrade"})]}),"\n",(0,i.jsx)(n.h2,{id:"sdk",children:"SDK"}),"\n",(0,i.jsxs)(n.p,{children:["Pawn is the long-standing, and still official, way to write modes for your server. It isn't going away, but for those of you who want more control we are finally releasing the full SDK (the ",(0,i.jsx)(n.em,{children:"S"}),"oftware ",(0,i.jsx)(n.em,{children:"D"}),"evelopment ",(0,i.jsx)(n.em,{children:"K"}),"it). This is a C++ interface to the server, the same one used by all the components that make up the core open.mp code. Anything they can do you can do too (compared to plugins, which were only designed to provide functions to pawn, not write modes)."]}),"\n",(0,i.jsx)(n.p,{children:"We have some documentation under way, it takes time unfortunately. But in the meantime have several example components for those of you who want to get straight stuck in. These are all templates you can build upon, and go from basically nothing to a fully working component with most common features:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/openmultiplayer/empty-template",children:"https://github.com/openmultiplayer/empty-template"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/openmultiplayer/basic-template",children:"https://github.com/openmultiplayer/basic-template"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/openmultiplayer/pawn-template",children:"https://github.com/openmultiplayer/pawn-template"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/openmultiplayer/full-template",children:"https://github.com/openmultiplayer/full-template"})]}),"\n",(0,i.jsx)(n.p,{children:"A few terms to get you started, so you can start to understand what it is that you're reading:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Component"})," - A logical individual piece of the server, like objects or pickups. Ones you don't need don't need to be loaded."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Extension"})," - Code that extends another bit of code. You can write component extensions, but the most common ones are player extensions, which define some structure of data to be associated with a player in addition to all their normal data like health and weapons."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"UID"})," - ",(0,i.jsx)(n.em,{children:"U"}),"nique ",(0,i.jsx)(n.em,{children:"ID"}),"entifier, a number that represents your component, and your component alone. This ia always required and can be got here: ",(0,i.jsx)(n.a,{href:"http://open.mp/uid",children:"http://open.mp/uid"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Entity"})," - A thing, usually a thing a player can interact with, and which you might have a lot of. Objects are entities, but other players are also entities, even commands in a processor could be called entities."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Pool"})," - Something that holds entities. When you have a lot you need to be able to access them by name or ID in some way, this is what a pool does."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Interface"})," - Components use an abstract base class as an interface. This declares which methods a component has, but doesn't contain the code for the methods. Interfaces are passed around so that components can communicate with each other, but implementations are kept private."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"SDK"})," - The collection of all the interfaces defined by the core server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"ABI"})," - An ",(0,i.jsx)(n.em,{children:"A"}),"pplication ",(0,i.jsx)(n.em,{children:"B"}),"inary ",(0,i.jsx)(n.em,{children:"I"}),"nterface is the way compiled code talks to other compiled code. The interfaces exported by the SDK are ",(0,i.jsx)(n.em,{children:"ABI stable"}),", which means that using two components compiled at different times will still work together."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"pawn-natives"})," - The library on which all native declarations are built. Useing a wrapper called ",(0,i.jsx)(n.em,{children:"SCRIPT_API"})," around this library: ",(0,i.jsx)(n.a,{href:"https://github.com/openmultiplayer/pawn-natives",children:"https://github.com/openmultiplayer/pawn-natives"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Event"})," - Something that happens externally. Things like players connecting and typing commands are events. Any component can define events and tell other components when those events happen."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Handler"})," - A component that wants to know when an event happens."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you have questions, the best place is probably the brand new (revived) forums:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://forum.open.mp/",children:"https://forum.open.mp/"})]}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsx)(n.p,{children:"Beside all the new features announced for pawn, there are several new (and newly announced) features in the server:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Per-player gang zones, as were in YSF."}),"\n",(0,i.jsx)(n.li,{children:"Per-player pickups, also as in YSF."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AttachPlayerObjectToPlayer"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Better PawnPlus support."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:":memory:"}),", and other special names support in SQLite."]}),"\n",(0,i.jsx)(n.li,{children:"SQLite open flags."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"exclude"})," config option to not load certain components."]}),"\n",(0,i.jsx)(n.li,{children:"Show config parse errors, don't just silently fail."}),"\n",(0,i.jsx)(n.li,{children:"SDK major version check, just in case we ever make major server changes (hopefully we won't)."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,i.jsx)(n.p,{children:"There were a few new bugs introduced in beta 11, and a few minor ones left over from before. The ones fixed include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"funcidx"})," already registered warning."]}),"\n",(0,i.jsx)(n.li,{children:"GDK plugins (streamer etc) missing natives."}),"\n",(0,i.jsx)(n.li,{children:"Random crash on GMX."}),"\n",(0,i.jsx)(n.li,{children:"GDK callbacks sometimes not called."}),"\n",(0,i.jsx)(n.li,{children:"No logging when requested in SQLite component."}),"\n",(0,i.jsx)(n.li,{children:"Some settings not reset on GMX."}),"\n",(0,i.jsx)(n.li,{children:"NPCs were connecting when there were a lot done at once."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".so"})," was still needed in Linux legacy plugin names."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(n.p,{children:["Firstly, of course, is the new server version:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/openmultiplayer/open.mp/releases",children:"https://github.com/openmultiplayer/open.mp/releases"})]}),"\n",(0,i.jsxs)(n.p,{children:["Secondly, the forums are back up. Head there for all your questions:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://forum.open.mp/",children:"https://forum.open.mp/"})]}),"\n",(0,i.jsxs)(n.p,{children:["Or if you prefer:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://vk.com/open_mp",children:"https://vk.com/open_mp"})]}),"\n",(0,i.jsx)(n.p,{children:"Next, despite it being offered a few times, we have explicitly resisted any money up to this point; because we didn't feel it was right until we had proven ourselves with a release. With this post, that time is now, so if anyone wants to help support us (all donations will go towards infrastructure and future client dev work), it would be most appreciated:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.patreon.com/open_mp",children:"https://www.patreon.com/open_mp"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://opencollective.com/openmultiplayer",children:"https://opencollective.com/openmultiplayer"})]}),"\n",(0,i.jsx)(n.p,{children:"And of course everything is still in active development, so please do check all the links above regularly to see what's new that we have."}),"\n","\n",(0,i.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{id:"user-content-fn-1-2f6cc8",children:["\n",(0,i.jsxs)(n.p,{children:["Almost all of them. ",(0,i.jsx)(n.a,{href:"#user-content-fnref-1-2f6cc8","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{id:"user-content-fn-2-2f6cc8",children:["\n",(0,i.jsxs)(n.p,{children:["Almost no more ",(0,i.jsx)(n.code,{children:"format()"}),". ",(0,i.jsx)(n.a,{href:"#user-content-fnref-2-2f6cc8","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}},60966:e=>{e.exports=JSON.parse('{"permalink":"/es/blog/release-candidate-1","editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/blog/blog/2023-01-05-release-candidate-1.md","source":"@site/blog/2023-01-05-release-candidate-1.md","title":"Release Candidate 1","description":"It\'s finally here! \ud83c\udf89 After years of development, rewrites, and challenges, we\'re excited to introduce Release Candidate 1 (RC1) of the open.mp server. This marks a major step towards our official 1.0 release, bringing significant updates, features, and improvements.","date":"2023-01-05T00:00:00.000Z","tags":[],"readingTime":7.305,"hasTruncateMarker":true,"authors":[{"name":"Y_Less","key":"y_less","page":null}],"frontMatter":{"slug":"release-candidate-1","title":"Release Candidate 1","authors":"y_less"},"unlisted":false,"prevItem":{"title":"Porting to open.mp","permalink":"/es/blog/porting"},"nextItem":{"title":"SA-MP 0.3DL compatibility plus other added features and bug fixes - SERVER BETA RELEASE 9","permalink":"/es/blog/server-beta-9"}}')}}]);