"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[85500],{6868:e=>{e.exports=JSON.parse('{"permalink":"/ta/blog/server-beta-9","editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/blog/blog/2022-09-08-server-beta-9.md","source":"@site/blog/2022-09-08-server-beta-9.md","title":"SA-MP 0.3DL compatibility plus other added features and bug fixes - SERVER BETA RELEASE 9","description":"We\'ve just released open.mp server beta 9, bringing major improvements, fixes, and the highly anticipated SA:MP 0.3DL support! This update includes new features, better plugin compatibility, and enhanced server configuration options.","date":"2022-09-08T00:00:00.000Z","tags":[],"readingTime":3.28,"hasTruncateMarker":true,"authors":[{"name":"Potassium","key":"potassium","page":null}],"frontMatter":{"slug":"server-beta-9","title":"SA-MP 0.3DL compatibility plus other added features and bug fixes - SERVER BETA RELEASE 9","authors":"potassium"},"unlisted":false,"prevItem":{"title":"Release Candidate 1","permalink":"/ta/blog/release-candidate-1"},"nextItem":{"title":"2022 Update - cross-play and beta testing (Happy New Year \ud83c\udf89)","permalink":"/ta/blog/update-2022"}}')},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}},72268:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var s=i(6868),t=i(74848),r=i(28453);const o={slug:"server-beta-9",title:"SA-MP 0.3DL compatibility plus other added features and bug fixes - SERVER BETA RELEASE 9",authors:"potassium"},l=void 0,a={authorsImageUrls:[void 0]},d=[{value:"Other Changes",id:"other-changes",level:2},{value:"SA DL",id:"sa-dl",level:2},{value:"Notes",id:"notes",level:2},{value:"Official Includes",id:"official-includes",level:2}];function c(e){const n={a:"a",br:"br",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["We've just released open.mp server beta 9, bringing major improvements, fixes, and the highly anticipated SA",":MP"," 0.3DL support! This update includes new features, better plugin compatibility, and enhanced server configuration options."]}),"\n",(0,t.jsxs)(n.p,{children:["Posted in our Discord server announcements channel by kseny (",(0,t.jsx)(n.a,{href:"https://discord.gg/samp",children:"discord.gg/samp"}),")"]}),"\n",(0,t.jsx)(n.p,{children:"Hello everyone"}),"\n",(0,t.jsxs)(n.p,{children:["We have just released open.mp server beta 9, fixing several reported issues and adding several new features. The most notable change being - SA",":MP"," 0.3DL support. You can now run 0.3.7 and 0.3.DL compatible servers from the same binary."]}),"\n",(0,t.jsx)(n.h2,{id:"other-changes",children:"Other Changes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Dynamic tick rate. Specify a target tickrate, rather than a fixed sleep time.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.code,{children:"tickrate"})," console command to set the rate."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sleep"})," can now be a float to accomodate precise tick rates."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"More plugin compatibility - fsutil, Discord connector (only with non static build)"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SetSpawnInfo"})," return fixed."]}),"\n",(0,t.jsx)(n.li,{children:"Fix weather and time not resetting after GMX."}),"\n",(0,t.jsx)(n.li,{children:"Fix various GMX bugs."}),"\n",(0,t.jsx)(n.li,{children:"Fix various console commands."}),"\n",(0,t.jsxs)(n.li,{children:["Fix ",(0,t.jsx)(n.code,{children:"GetPlayerClass"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Fix ",(0,t.jsx)(n.code,{children:"GetVehicleLastDriver"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:"GetVehicles"})," native."]}),"\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:"GetPlayers"})," native."]}),"\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:"GetActors"})," native."]}),"\n",(0,t.jsx)(n.li,{children:"All lagcomp modes are now available through config."}),"\n",(0,t.jsx)(n.li,{children:"Fix trailer sync."}),"\n",(0,t.jsxs)(n.li,{children:["Fix ",(0,t.jsx)(n.code,{children:"GetVehicleLastDriver"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Fix ",(0,t.jsx)(n.code,{children:"GetPlayerRotationQuat"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Fix crash in vehicle component."}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"sa-dl",children:["SA",":MP"," DL"]}),"\n",(0,t.jsx)(n.p,{children:"This is the big news obviously, and comes with a whole host of new settings:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Implemented all DL natives and callbacks (",(0,t.jsx)(n.code,{children:"AddSimpleModel"}),", ",(0,t.jsx)(n.code,{children:"AddSimpleModelTimed"}),", ",(0,t.jsx)(n.code,{children:"GetPlayerCustomSkin"}),", ",(0,t.jsx)(n.code,{children:"OnPlayerFinishedDownloading"}),", ",(0,t.jsx)(n.code,{children:"OnPlayerRequestDownload"}),"):","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"RedirectDownload"})," native and ",(0,t.jsx)(n.code,{children:"OnPlayerRequestDownload"})," callback are now deprecated in favour of CDN config options."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:"artwork.enable"})," (legacy: ",(0,t.jsx)(n.code,{children:"useartwork"}),") config option."]}),"\n",(0,t.jsxs)(n.li,{children:["Add ",(0,t.jsx)(n.code,{children:"artwork.models_path"})," (legacy: ",(0,t.jsx)(n.code,{children:"artpath"}),") config option.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Server can load custom models from ",(0,t.jsx)(n.code,{children:"artconfig.txt"})," file like SA",":MP"," does."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["0.3.7 compatibility is preserved and can be configured by ",(0,t.jsx)(n.code,{children:"network.allow_037_clients"})," config option (true by default)."]}),"\n",(0,t.jsxs)(n.li,{children:["open.mp server comes now with a built in webserver used to serve custom models","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Webserver is using open.mp server bind address and port. Please allow TCP connections on your port in firewall if you plan to use it."}),"\n",(0,t.jsxs)(n.li,{children:["If your public IP address is different than bind address (ex: you're behind a router) you'll need to set it in ",(0,t.jsx)(n.code,{children:"network.public_addr"})," config option."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Due to few changes old config.json files may not work properly. Please use ",(0,t.jsx)(n.code,{children:"./omp-server --default-config"})," to generate a new one"]}),"\n",(0,t.jsx)(n.li,{children:"server.cfg users are not affected."}),"\n",(0,t.jsx)(n.li,{children:"While allowing 0.3.7 connections only 1000 objects can be created"}),"\n",(0,t.jsx)(n.li,{children:"open.mp server now provides two types of Linux builds, standard and static. You are encouraged to use the standard build if possible, it will minimize incompatibilities with various plugins; however, it will require openssl 1.1 installed on your system. If you can't install modern openssl on your system (typically if it's very old), you can use the static build, but some plugins or components might fail to load and crash the server."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"official-includes",children:"Official Includes"}),"\n",(0,t.jsx)(n.p,{children:"Preparing a full release is not just having a working server, but all the other peripherals as well - libraries, tools, documentation, and more. On the pawn side open.mp is a significant upgrade, with many QoL improvements already seen through fixes and new functions, and more to come. A big part of this push is more compiler diagnostics to find code problems ahead of time, mostly through more tags and const-correctness. While the offical versions aren't out yet you can still help in the meantime by testing your code with the following includes and tools:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/pawn-lang/samp-stdlib/tree/consistency-overhaul",children:"https://github.com/pawn-lang/samp-stdlib/tree/consistency-overhaul"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://github.com/pawn-lang/pawn-stdlib/tree/backported-natives",children:"https://github.com/pawn-lang/pawn-stdlib/tree/backported-natives"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://github.com/openmultiplayer/upgrade",children:"https://github.com/openmultiplayer/upgrade"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"https://github.com/pawn-lang/compiler",children:"https://github.com/pawn-lang/compiler"})]}),"\n",(0,t.jsxs)(n.p,{children:["These were originally developed to improve the default SA",":MP"," includes, but never fully released (i.e. never merged to master, despite the PR being accepted). The open.mp includes build on the foundation established here so think of these as a stepping-stone to full open.mp tag and const safety; and important feedback on their direction. See the links above for far more information and documentation on pugrading."]}),"\n",(0,t.jsx)(n.p,{children:"As ever, if you don't want to upgrade old code and includes will still work (at least for the first release)."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);