"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[85382],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var a=t(96540);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}},47209:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var a=t(89690),i=t(74848),o=t(28453);const s={slug:"porting",title:"Porting to open.mp",authors:"y_less"},r=void 0,l={authorsImageUrls:[void 0]},d=[{value:"<code>Tags</code>",id:"tags",level:2},{value:"<code>HideMenuForPlayer</code>",id:"hidemenuforplayer",level:2},{value:"<code>SetPlayerAttachedObject</code>",id:"setplayerattachedobject",level:2},{value:"<code>ClearAnimations</code>",id:"clearanimations",level:2},{value:"Death money",id:"death-money",level:2},{value:"<code>OnPlayerConnect</code>",id:"onplayerconnect",level:2},{value:"Game texts",id:"game-texts",level:2},{value:"Pool sizes",id:"pool-sizes",level:2},{value:"Spellings",id:"spellings",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",sup:"sup",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["SA",":MP"," has been stuck in limbo for years, with no updates and plenty of workarounds just to keep things running. open.mp changes that\u2014it's a full rewrite that fixes long-standing issues, improves scripting, and removes old limits while keeping your existing code working. But what does that actually mean for you? Let's break it down."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"The content of the following post is out of date and has mostly no reference to the current state of open.mp. The post is published here for archival purposes."})}),"\n",(0,i.jsxs)(n.p,{children:["It has been clear for a long time that Kalcor was no longer interested in maintaining SA",":MP","; which in itself is fine, but as the only person with official source code access this made him a bottleneck to new updates. Both YSF and fixes.inc were created to fill this void - fix the bugs and inconsistencies in the server without having source code access; the former as a plugin and the latter as an include. Despite some monumental efforts to make these (and other) projects as stable, comprehensive, and easy to use as possible, they naturally started hitting their limits and a new generation of fixes were required. This is where open.mp comes in."]}),"\n",(0,i.jsxs)(n.p,{children:["Founded on the same principles, and taking all the myriad improvements developed over a decade by the community, open.mp is a ground-up rewrite of the original SA",":MP"," server with all the fixes from its direct predecessors, and many more that were either unmanageable or outright impossible. Granted this approach was not without controversy - some servers had developed their own private methods of dealing with SA",":MP","'s quirks independent of the community's efforts, but these are not techniques that every scripter should have to develop for themselves, and this article will help with porting over existing code."]}),"\n",(0,i.jsx)(n.p,{children:"We hope to address the major sticking points, but if there are any we miss, feel free to reach out via discord or github and we'll be happy to ammend the guide."}),"\n",(0,i.jsx)(n.p,{children:"The alternative option is to undo the fixes using a library which is the twin of fixes.inc - breaks.inc:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/pawn-lang/sa-mp-fixes/blob/master/breaks.inc",children:"https://github.com/pawn-lang/sa-mp-fixes/blob/master/breaks.inc"})}),"\n",(0,i.jsx)(n.p,{children:"So feel free to install that to revert to all the old behaviours transparently via hooks."}),"\n",(0,i.jsx)(n.h2,{id:"tags",children:(0,i.jsx)(n.code,{children:"Tags"})}),"\n",(0,i.jsx)(n.p,{children:"The open.mp includes add many new tags to functions, though still trying to strike a balance between much needed upgrades and invasiveness. Due to how wide-spread these changes can be we wrote a tool to automate a lot of it:"}),"\n",(0,i.jsx)(n.h2,{id:"hidemenuforplayer",children:(0,i.jsx)(n.code,{children:"HideMenuForPlayer"})}),"\n",(0,i.jsxs)(n.p,{children:["This function has always taken a menu ID parameter, but in SA",":MP"," this ID was not used. So whatever value was given the player's current menu would be closed, even if they weren't looking at the one you said to close."]}),"\n",(0,i.jsx)(n.p,{children:"Old code may have looked like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'gShopMenu = CreateMenu("text", 2, 100.0, 30.0, 7.0);\n\nHideMenuForPlayer(gShopMenu, playerid);\n'})}),"\n",(0,i.jsx)(n.p,{children:"That would always close the player's current menu, regardless of which one they were actually looking at. Now you will need to remember which one they are looking at, or just get it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'gShopMenu = CreateMenu("text", 2, 100.0, 30.0, 7.0);\n\nHideMenuForPlayer(GetPlayerMenu(playerid), playerid);\n'})}),"\n",(0,i.jsx)(n.h2,{id:"setplayerattachedobject",children:(0,i.jsx)(n.code,{children:"SetPlayerAttachedObject"})}),"\n",(0,i.jsxs)(n.p,{children:["Attached objects in SA",":MP"," would survive a gamemode change, but in open.mp they do not. If you want a player to keep their objects over a mode restart you will have to re-add them in ",(0,i.jsx)(n.code,{children:"OnPlayerConnect"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"enum E_ATTACHMENT_DATA\n{\n    E_ATTACHMENT_DATA_MODEL,\n    E_ATTACHMENT_DATA_BONE,\n    E_ATTACHMENT_DATA_OFFSET_X,\n    E_ATTACHMENT_DATA_OFFSET_Y,\n    E_ATTACHMENT_DATA_OFFSET_Z,\n    E_ATTACHMENT_DATA_ROT_X,\n    E_ATTACHMENT_DATA_ROT_Y,\n    E_ATTACHMENT_DATA_ROT_Z,\n    E_ATTACHMENT_DATA_SCALE_X,\n    E_ATTACHMENT_DATA_SCALE_Y,\n    E_ATTACHMENT_DATA_SCALE_Z,\n    E_ATTACHMENT_DATA_COLOUR_1,\n    E_ATTACHMENT_DATA_COLOUR_2,\n}\n\npublic OnPlayerConnect(playerid)\n{\n    for (new i = 0; i != MAX_OBJECT_ATTACHMENT_SLOTS; ++i)\n    {\n        SetPlayerAttachedObject(\n            playerid,\n            i,\n            gAttachementData[playerid][E_ATTACHMENT_DATA_MODEL],\n            gAttachementData[playerid][E_ATTACHMENT_DATA_BONE],\n            gAttachementData[playerid][E_ATTACHMENT_DATA_OFFSET_X],\n            gAttachementData[playerid][E_ATTACHMENT_DATA_OFFSET_Y],\n            gAttachementData[playerid][E_ATTACHMENT_DATA_OFFSET_Z],\n            gAttachementData[playerid][E_ATTACHMENT_DATA_ROT_X],\n            gAttachementData[playerid][E_ATTACHMENT_DATA_ROT_Y],\n            gAttachementData[playerid][E_ATTACHMENT_DATA_ROT_Z],\n            gAttachementData[playerid][E_ATTACHMENT_DATA_SCALE_X],\n            gAttachementData[playerid][E_ATTACHMENT_DATA_SCALE_Y],\n            gAttachementData[playerid][E_ATTACHMENT_DATA_SCALE_Z],\n            gAttachementData[playerid][E_ATTACHMENT_DATA_COLOUR_1],\n            gAttachementData[playerid][E_ATTACHMENT_DATA_COLOUR_2]\n        );\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"clearanimations",children:(0,i.jsx)(n.code,{children:"ClearAnimations"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ClearAnimations"})," is the dual of ",(0,i.jsx)(n.code,{children:"ApplyAnimation"})," to stop a player performing the action previously requested. However, when used on a player in a vehicle this would also cause the player to be removed from the vehicle. This is a useful function, as it happens instantly, but is not within the purview of the ",(0,i.jsx)(n.code,{children:"ClearAnimations"})," function. To force remove a player from a vehicle instantly use:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"RemovePlayerFromVehicle(playerid, true);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"death-money",children:"Death money"}),"\n",(0,i.jsxs)(n.p,{children:["When a player dies in San Andreas they get $100 deducted from them to cover hospital bills automatically. This feature remains in SA",":MP",", but is removed from open.mp to allow scripts to manage all their own money. Several scripts attempt to fix this already by adding $100 to a player after death, or on spawn. If this is your script simply delete the additional fix, although the code in open.mp does attempt to account for scripts that do this. If your script relied on this feature, simply add the following code to ",(0,i.jsx)(n.code,{children:"OnPlayerDeath"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"GivePlayerMoney(playerid, -100);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"onplayerconnect",children:(0,i.jsx)(n.code,{children:"OnPlayerConnect"})}),"\n",(0,i.jsxs)(n.p,{children:["When a gamemode starts or restarts in SA",":MP"," ",(0,i.jsx)(n.code,{children:"OnPlayerConnect"})," is immediately called for all players already connected to the server, but it isn't when a filterscript starts or restarts. While the latter behaviour more closely matches the name, the former behaviour is extremely widely exploited in scripts, and so was extended to all script types in open.mp to maintain consistency."]}),"\n",(0,i.jsx)(n.p,{children:"Scripts which initialise data for a player no longer need to perform this code in two different locations:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"public OnFilterScriptInit()\n{\n    for (new playerid = 0; playerid != MAX_PLAYERS; ++playerid)\n    {\n        if (IsPlayerConnected(playerid))\n        {\n            InitialisePlayer(playerid);\n        }\n    }\n}\n\npublic OnPlayerConnect(playerid)\n{\n    InitialisePlayer(playerid);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"The loop in OnFilterScriptInit can now be removed:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"public OnPlayerConnect(playerid)\n{\n    InitialisePlayer(playerid);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"If a script exploited this fact to only run code for new players joining the server after the scripts starts, and not for those who were on before, this will no longer work, but is again easilly fixed:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'static bool:gAlreadyHere[MAX_PLAYERS];\n\npublic OnFilterScriptInit()\n{\n    for (new playerid = 0; playerid != MAX_PLAYERS; ++playerid)\n    {\n        gAlreadyHere[playerid] = IsPlayerConnected(playerid);\n    }\n}\n\npublic OnPlayerConnect(playerid)\n{\n    if (gAlreadyHere[playerid])\n    {\n        gAlreadyHere[playerid] = false;\n    }\n    else\n    {\n        SendClientMessage(playerid, COLOUR_WARN, "You\'re late!");\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This may look to simply trade one loop in ",(0,i.jsx)(n.code,{children:"OnFilterScriptInit"})," off for another one, but wanting to exclude current players from some code is a less common use-case than wanting to do something for everyone, so this is overall a net improvement; and as stated before vastly less invasive than not calling ",(0,i.jsx)(n.code,{children:"OnPlayerConnect"})," in gamemodes."]}),"\n",(0,i.jsx)(n.h2,{id:"game-texts",children:"Game texts"}),"\n",(0,i.jsxs)(n.p,{children:["SA",":MP"," has six different game text styles, but several of them are basically unusable. One fades in and out constantly, one disappears after a set time regardless of the time you put, and one never disappears regardless of the time selected. However it turns out that all of these game text styles can be accurately",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-1-44533e",id:"user-content-fnref-1-44533e","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," reproduced using text draws. Thus fixes.inc and subsequently open.mp did so. The appearance of the game texts is the same as before, the advantage being that all styles are usable, with the downside being that they no longer fade in and out."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"FadingGameTextForPlayer(playerid, const format[], time, style)\n{\n    if (style > 6)\n    {\n        // There's no fading version of these styles.\n        GameTextForPlayer(playerid, format, time, style)\n    }\n    else\n    {\n        // Send a raw message via Pawn.RakNet\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"pool-sizes",children:"Pool sizes"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"GetPlayerPoolSize"}),", ",(0,i.jsx)(n.code,{children:"GetActorPoolSize"}),", and ",(0,i.jsx)(n.code,{children:"GetVehiclePoolSize"})," were somewhat pointless when they were first introduced; returning the highest connected ID, which bears no relation to the number of connected players, and long after much better looping methods already existed. Being a bit silly is not in itself a reason to remove the functions, but unfortunately they are also broken and return incorrect data when there are no connected players. There is no way to fix these return values in a way that is both backwards compatible and correct going forward (believe me, we tried). Given these facts, we opted to simply remove the functions. Just use a normal loop or ",(0,i.jsx)(n.code,{children:"foreach"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"foreach (new i : Player)\n{\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Some scripts did crash when this change was introduced, but only when using the following loop form:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"for (new i = 0; i != GetPlayerPoolSize(); ++i)\n{\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Though since the highest value is a real player when there are people online this code is wrong anyway - it misses out a person."}),"\n",(0,i.jsx)(n.h2,{id:"spellings",children:"Spellings"}),"\n",(0,i.jsxs)(n.p,{children:["SA",":MP"," is very inconsistent in its code spellings - some things use English, some things use American:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Bumper"})," - English"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Hood"})," - American"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Armour"})," - English"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Stereo"})," - American"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We have unified these, and settled on English spellings. So for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"TextDrawBoxColor(Text:textid, boxColor);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Is now:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"TextDrawBoxColour(Text:textid, boxColour);\n"})}),"\n",(0,i.jsx)(n.p,{children:"The upgrade tool will take care of most of these automatically."}),"\n","\n",(0,i.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{id:"user-content-fn-1-44533e",children:["\n",(0,i.jsxs)(n.p,{children:["With one notable exception - the new clock game text style. For some unknown reason the colour of the clock is different for different people, which led to a lot of back-and-forth discussion on how best to replicate this style until the discrepancy was found. We had to pick one of the two for consistency. ",(0,i.jsx)(n.a,{href:"#user-content-fnref-1-44533e","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},89690:e=>{e.exports=JSON.parse('{"permalink":"/ro/blog/porting","editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/blog/blog/2024-03-06-porting.md","source":"@site/blog/2024-03-06-porting.md","title":"Porting to open.mp","description":"SA:MP has been stuck in limbo for years, with no updates and plenty of workarounds just to keep things running. open.mp changes that\u2014it\'s a full rewrite that fixes long-standing issues, improves scripting, and removes old limits while keeping your existing code working. But what does that actually mean for you? Let\'s break it down.","date":"2024-03-06T00:00:00.000Z","tags":[],"readingTime":7.315,"hasTruncateMarker":true,"authors":[{"name":"Y_Less","key":"y_less","page":null}],"frontMatter":{"slug":"porting","title":"Porting to open.mp","authors":"y_less"},"unlisted":false,"nextItem":{"title":"Release Candidate 1","permalink":"/ro/blog/release-candidate-1"}}')}}]);