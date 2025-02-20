"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[68374],{17252:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var t=i(40897),s=i(74848),o=i(28453);const a={slug:"scripting-api",title:"open.mp API design",authors:"y_less"},l=void 0,r={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Tags",id:"tags",level:3},{value:"Naming",id:"naming",level:3},{value:"Constants",id:"constants",level:3},{value:"Per-Player Functions",id:"per-player-functions",level:3},{value:"IDs",id:"ids",level:3},{value:"Compatibility",id:"compatibility",level:2},{value:"Building",id:"building",level:2},{value:"Example",id:"example",level:3},{value:"Conversion",id:"conversion",level:3},{value:"Warnings",id:"warnings",level:3},{value:"<code>#define OPENMP_QUIET</code>",id:"define-openmp_quiet",level:3},{value:"<code>#define OPENMP_COMPAT</code>",id:"define-openmp_compat",level:3},{value:"No define",id:"no-define",level:3},{value:"New API",id:"new-api",level:2},{value:"Tags",id:"tags-1",level:3},{value:"Naming",id:"naming-1",level:3},{value:"Constants",id:"constants-1",level:3},{value:"<code>0</code>",id:"0",level:4},{value:"<code>-1</code>",id:"-1",level:4},{value:"Per-Player Functions",id:"per-player-functions-1",level:3},{value:"IDs",id:"ids-1",level:3},{value:"Smarter functions.",id:"smarter-functions",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["A key focus of open.mp is maintaining ",(0,s.jsx)(n.strong,{children:"backward compatibility"}),"\u2014your existing SA",":MP"," scripts will continue to work as-is. However, open.mp also introduces improvements to fix inconsistencies and make scripting more intuitive and powerful."]}),"\n",(0,s.jsxs)(n.p,{children:["Here's a look at some common SA",":MP"," issues we're addressing and how open.mp enhances the experience."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"The content of the following post is out of date and has no reference to the current state of open.mp. The post is published here for archival purposes."})}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"Firstly, a VERY important clarification - existing scripts will still work as-is. We have worked very hard on backwards compatibility and bear it in mind for every decision. There are many improvements we'd like to make that we simply can't for this reason, and other code that is greatly complicated by this compatibility requirement."}),"\n",(0,s.jsxs)(n.p,{children:["That said, there are improvements that can be made all over the place. Let's look at some examples of the inconsistencies in SA",":MP"," scripting:"]}),"\n",(0,s.jsx)(n.h3,{id:"tags",children:"Tags"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Menu:CreateMenu"})," - Tagged."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DB:db_open"})," - Tagged."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CreateVehicle"})," - Untagged."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CreateActor"})," - Untagged."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"#define SELECT_OBJECT_GLOBAL_OBJECT 1\n#define SELECT_OBJECT_PLAYER_OBJECT 2\n\nforward OnPlayerSelectObject(playerid, type, objectid, modelid, Float:fX, Float:fY, Float:fZ);\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"type"})," is untagged, as are ALL SA",":MP"," defined constants; unlike pawn default constants:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"native File:fopen(const name[], filemode:mode = io_readwrite);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"naming",children:"Naming"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SetVehiclePos"}),' - "Vehicle" in the middle of the function name.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"TextDrawTextSize"}),' - "TextDraw" at the start.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"db_open"}),' - "db" at the start and lower-case.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fread"}),' - "file" at the start, and shortened.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"asin"})," - A SA",":MP"," added function without camel/pascal case."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Consistency:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'GetVehicleZAngle - "Z-Angle"'}),"\n",(0,s.jsx)(n.li,{children:'GetVehicleRotationQuat - "Rotation"'}),"\n",(0,s.jsx)(n.li,{children:'SetPlayerFacingAngle - "Facing Angle"'}),"\n",(0,s.jsx)(n.li,{children:'SetObjectRot - "Rot"'}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["And despite all this, most libraries have now settled on the ",(0,s.jsx)(n.code,{children:"Module_Method"})," naming convention."]}),"\n",(0,s.jsx)(n.h3,{id:"constants",children:"Constants"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"65535"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Value for invalid players, actors, TDs and a few other things. It is also the value for invalid vehicles, but ",(0,s.jsx)(n.code,{children:"0"})," is ALSO an invalid vehicle ID sometimes returned."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"0"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Value for invalid files, sometimes vehicles (as well as ",(0,s.jsx)(n.code,{children:"65535"}),"). Also the value for missing many things such as action states and weapons."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"255"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Value for invalid teams and menus."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"-1"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Value for invalid gang zones and weapon states."}),"\n",(0,s.jsxs)(n.p,{children:["Additionally many libraries use ",(0,s.jsx)(n.code,{children:"0x80000000"})," and ",(0,s.jsx)(n.code,{children:"-1"})," for invalid states because they are far less likely to eventually be a valid ID. 65535 is quite a large number, but a big server can easily have more objects than that."]}),"\n",(0,s.jsx)(n.h3,{id:"per-player-functions",children:"Per-Player Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CreateObject"})," and ",(0,s.jsx)(n.code,{children:"CreatePlayerObject"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Has global and per-player versions."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"SetPlayerMapIcon"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Has no global version."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"SetGravity"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"No per-player version, despite being possibly one of the most requested per-player functions, and added almost instantly by YSF and other plugins."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"CreateVehicle"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"No per-player version, despite also being repeatedly requested. But also not added by any (public) plugin, not even the streamer plugin."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SendClientMessage"})," and ",(0,s.jsx)(n.code,{children:"SendClientMessageToAll"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Has global and per-player versions, but the per-player version is the default unlike most other functions."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GangZoneShowForPlayer"})," and ",(0,s.jsx)(n.code,{children:"GangZoneShowForAll"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Menus, Gang Zones, and Text Draws are the only default SA",":MP"," functions where you can specify exactly which players can see them. All others are either everyone or just one person. Of course, libraries and plugins have since vasly expanded on this model and most good ones now allow very fine-grained control over which subsets of players (groups) can use any given entity."]}),"\n",(0,s.jsx)(n.h3,{id:"ids",children:"IDs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CreateObject"})," and ",(0,s.jsx)(n.code,{children:"CreatePlayerObject"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The IDs pool for these functions are shared. If a global object has ID ",(0,s.jsx)(n.code,{children:"4"})," no player object can ever have ID ",(0,s.jsx)(n.code,{children:"4"}),", but multiple players could have different objects all with ID ",(0,s.jsx)(n.code,{children:"5"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Create3DTextLabel"})," and ",(0,s.jsx)(n.code,{children:"CreatePlayer3DTextLabel"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ID pool is split - the first ",(0,s.jsx)(n.code,{children:"1024"})," IDs are globals, the second ",(0,s.jsx)(n.code,{children:"1024"})," are per-player. Each player can have up to ",(0,s.jsx)(n.code,{children:"2048"})," 3D texts, but only ",(0,s.jsx)(n.code,{children:"1024"})," of each type despite the fact that it makes no difference client-side."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"SetPlayerMapIcon"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"IDs are manually specified, up to a limit of 32. For a while this limit was not checked client- side, leading to a potential ACE exploit."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ShowPlayerDialog"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"IDs are manually specified, with no limit at all. The IDs are also totally pointless since a player can only ever see one dialog at once."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"SetTimer"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"IDs wrap around, with no checking that an existing timer has the same ID. You would have to start over 4,000,000,000 timers at some point to encounter this issue, but it could happen - they don't even have to all remain running."}),"\n",(0,s.jsx)(n.p,{children:"And of course some people rely on IDs being allocated in very specific orders, then wonder why their whole mode breaks when they for example add or remove a single vehicle."}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(n.p,{children:["So, again, we must make it very clear that all existing ",(0,s.jsxs)(n.em,{children:['"SA',":MP",' code"']})," will work. What does that mean exactly? Any code that is:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Written in pawn."}),"\n",(0,s.jsxs)(n.li,{children:["Uses the original SA",":MP"," API without plugins."]}),"\n",(0,s.jsx)(n.li,{children:"Is recompiled with our includes."}),"\n",(0,s.jsx)(n.li,{children:"Already uses the community compiler."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Will work."}),"\n",(0,s.jsx)(n.p,{children:"However:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If you use a plugin to write in a language other than pawn, that plugin will probably need to be ported first. So your code won't work immediately."}),"\n",(0,s.jsx)(n.li,{children:"If you use other plugins such as the streamer, YSF, audio, etc; they may already work, may need porting, or may be entirely superfluous because their functionality has been integrated in to the core server. So your code may work."}),"\n",(0,s.jsxs)(n.li,{children:["If you only have the .AMX of your mode not the original source, why? Anyway, while all SA",":MP"," functions exist, some have been redone or replaced by pawn code or macros and you MUST recompile. So if you can't, your code won't work at all."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"building",children:"Building"}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["Let's look at an insanely simple SA",":MP"," mode to begin with."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#include <a_samp>\n\nmain() {}\n\npublic OnGameModeInit()\n{\n    SetGameModeText("Example Script");\n    AddPlayerClass(0, 0.0, 0.0, 4.0, 0.0, 0, 0, 0, 0, 0, 0);\n    return 1;\n}\n\npublic OnPlayerSpawn(playerid)\n{\n    SetPlayerCheckpoint(playerid, 20.0, 20.0, 4.0, 2.0);\n    return 1;\n}\n\npublic OnPlayerEnterCheckpoint(playerid)\n{\n    SendClientMessage(playerid, 0xFF0000AA, "You won!");\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"You spawn. You go to the checkpoint. You win."}),"\n",(0,s.jsx)(n.h3,{id:"conversion",children:"Conversion"}),"\n",(0,s.jsx)(n.p,{children:"To build this for open.mp, we need to change just the first include and add one define."}),"\n",(0,s.jsx)(n.p,{children:"This:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"#include <a_samp>\n\nmain() {}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Becomes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"#define OPENMP_COMPAT\n#include <openmp\\openmp>\n\nmain() {}\n"})}),"\n",(0,s.jsx)(n.p,{children:"The first error you might get is:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"open.mp scripts require the community compiler from: git.io/pawn-compiler"})}),"\n",(0,s.jsxs)(n.p,{children:["If you get this, go to ",(0,s.jsx)(n.a,{href:"https://git.io/pawn-compiler",children:"https://git.io/pawn-compiler"})," and download compiler version 3.10.10 or later. For the release we would like a pawno-equivalent tool with this compiler integrated already, but haven't done that yet. I STRONGLY suggest trying to compile your mode with this compiler first as it re-enabled const correctness warnings so you're likely to have a load of new warnings straight away (this is NOT a problem with the compiler, these are problems in your code that always existed, but were previously ignored). You will also probably want to replace your includes with these ones:"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/pawn-lang/pawn-stdlib",children:"https://github.com/pawn-lang/pawn-stdlib"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://github.com/pawn-lang/samp-stdlib",children:"https://github.com/pawn-lang/samp-stdlib"})]}),"\n",(0,s.jsx)(n.p,{children:"That's a good thing to do even if you don't use open.mp, as they fix a load of tag and const issues in the original includes."}),"\n",(0,s.jsx)(n.h3,{id:"warnings",children:"Warnings"}),"\n",(0,s.jsxs)(n.p,{children:["If you don't get any warnings using the new compiler with the new version of ",(0,s.jsx)(n.code,{children:"a_samp"}),", you will now see a load of new warnings along the lines of:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'warning 234: function is deprecated (symbol "AddPlayerClass") Use "Class_Add" instead.'})}),"\n",(0,s.jsx)(n.p,{children:"You have three options - and they're all supported:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ignore the warnings:"})," The code will still work."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Suppress the warnings:"})," Change ",(0,s.jsx)(n.code,{children:"OPENMP_COMPAT"})," to ",(0,s.jsx)(n.code,{children:"OPENMP_QUIET"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"#define OPENMP_QUIET\n#include <openmp\\openmp>\n\nmain() {}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Fix the warnings:"})," Some functions have changed names for consistency with each other; some functions have changed parameters because the old ones evolved and didn't fully expose the capabilities of open.mp. There's no simple way to convert every function yet, but you can leave the warnings on while slowly converting code - the old functions will continue to work perfectly well."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"There are three stages to conversion:"}),"\n",(0,s.jsx)(n.h3,{id:"define-openmp_quiet",children:(0,s.jsx)(n.code,{children:"#define OPENMP_QUIET"})}),"\n",(0,s.jsx)(n.p,{children:"Using this define allows your mode to compile with no new warnings from deprecated functions. But you shouldn't stick to this define, and the implicit conversions will only work for pawn code. You can convert code in this mode, as the new API will also work, but you can't use the compiler to see where problems remain."}),"\n",(0,s.jsx)(n.h3,{id:"define-openmp_compat",children:(0,s.jsx)(n.code,{children:"#define OPENMP_COMPAT"})}),"\n",(0,s.jsx)(n.p,{children:"This is the second stage. Once you want to start taking advantage of all the improved features of open.mp like fine-grained per-player entity controls and removed limits you need to start using the new versions of the functions. The new functions are always available, but you might not know everywhere that needs converting. This will give warnings for the old functions, but they will still work, allowing you to convert parts of your mode one at a time."}),"\n",(0,s.jsx)(n.h3,{id:"no-define",children:"No define"}),"\n",(0,s.jsx)(n.p,{children:"Once you think you've finished converting your code, you remove the defines:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"#include <openmp\\openmp>\n\nmain() {}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now you get errors instead of warnings for any old code still in use."}),"\n",(0,s.jsx)(n.h2,{id:"new-api",children:"New API"}),"\n",(0,s.jsx)(n.p,{children:"So now we've seen what the problems were with the old API, and how to find where you need to apply the new API, we should actually look at said new API in terms of the previously identified issues:"}),"\n",(0,s.jsx)(n.h3,{id:"tags-1",children:"Tags"}),"\n",(0,s.jsx)(n.p,{children:"Functions now use tags almost everywhere. We have tried to find a balance between too many tag warnings and not enough useful information, but warnings are there for a reason and can help find problems you may have missed. For example passing a vehicle as a parameter to an object function, or giving someone a weapon that doesn't exist:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"// No warnings for this code, despite it being clearly wrong.\nnew object = CreateObject(various, parameters, here);\nPutPlayerInVehicle(playerid, object);\n\n// Same here - there's no weapon 20, despite it being amongst valid weapon IDs.\nGivePlayerWeapon(playerid, 20, 200);\n"})}),"\n",(0,s.jsx)(n.p,{children:"It would be much better if all pieces of clearly wrong code could give warnings. This is the power of a type-safe language, and while pawn isn't fully type-safe, we can get close with tags. Those examples become:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'// warning 213: tag mismatch: expected tag "Vehicle", but found "Object"\nnew Object:object = Object@Create(various, parameters, here);\nPlayer_PutInVehicle(playerid, object);\n\n// warning 213: tag mismatch: expected tag "WeaponType", but found but found none ("_")\nGivePlayerWeapon(playerid, 20, 200);\n\n// This doesn\'t give a warning:\nGivePlayerWeapon(playerid, WEAPON_COLT45, 200);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"naming-1",children:"Naming"}),"\n",(0,s.jsxs)(n.p,{children:["Most new functions use a refinement of the naming scheme already adopted by many libraries and plugins - ",(0,s.jsx)(n.code,{children:"Module_VerbNoun"}),". Some don't, when they are a one-off that doesn't fit in to any larger module, but for the most part you can possibly guess the name of a function you need. No more wondering if it was \"Rot\" or \"Rotation\" for this type of element, there's no abbreviations unless the function name is otherwise too long (32+ characters, the compiler won't accept them). Want to change the model of an object? ",(0,s.jsx)(n.code,{children:"Object_SetModel"}),". Want to show text to a player? ",(0,s.jsx)(n.code,{children:"Text_Show"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["There are a limited set of verbs - ",(0,s.jsx)(n.code,{children:"Get"}),", ",(0,s.jsx)(n.code,{children:"Set"}),", ",(0,s.jsx)(n.code,{children:"Create"}),", ",(0,s.jsx)(n.code,{children:"Destroy"}),", ",(0,s.jsx)(n.code,{children:"Add"}),", ",(0,s.jsx)(n.code,{children:"Remove"}),", ",(0,s.jsx)(n.code,{children:"Show"}),", ",(0,s.jsx)(n.code,{children:"Hide"}),", ",(0,s.jsx)(n.code,{children:"Run"}),", ",(0,s.jsx)(n.code,{children:"Move"}),", ",(0,s.jsx)(n.code,{children:"Stop"}),", and ",(0,s.jsx)(n.code,{children:"Count"}),". More may be added and may show up in special situations, but generally if one of these fits, it's probably that one. By far the most common are ",(0,s.jsx)(n.code,{children:"Get"})," and ",(0,s.jsx)(n.code,{children:"Set"}),", which unlike in SA",":MP"," now always come in pairs - if you can set any parameter you can get it as well later. They are also the verbs that most commonly come with a noun - you need to specify what to get or set - ",(0,s.jsx)(n.code,{children:"Health"}),", ",(0,s.jsx)(n.code,{children:"Position"}),", ",(0,s.jsx)(n.code,{children:"Model"}),", ",(0,s.jsx)(n.code,{children:"Width"}),", etc."]}),"\n",(0,s.jsx)(n.p,{children:"Some examples:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"native bool:Menu_SetDisabled(Menu:menuid, bool:disabled);\nnative bool:Menu_GetDisabled(Menu:menuid);\n\nnative bool:Text_SetAlignment(Text:text, alignment);\nnative Text_GetAlignment(Text:text);\n\nnative bool:Object_Move(Object:objectid, Float:posX, Float:posY, Float:posZ, Float:speed, Float:rotX = FLOAT_NAN, Float:rotY = FLOAT_NAN, Float:rotZ = FLOAT_NAN);\n\nnative DBResult_CountRows(DBResult:dbresult);\n\nnative Player_Spawn(Player:playerid);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that the module and tag names always match - ",(0,s.jsx)(n.code,{children:"Vehicle"}),", ",(0,s.jsx)(n.code,{children:"DB"}),", ",(0,s.jsx)(n.code,{children:"Player"})," etc. ",(0,s.jsx)(n.a,{href:"https://github.com/pawn-lang/compiler/issues/234",children:"There are reasons besides consistency for this"})," - it gives a more OO -like interface, and is easier to remember. However, you might have noticed in an earlier example the function ",(0,s.jsx)(n.code,{children:"Object@Create"}),", not ",(0,s.jsx)(n.code,{children:"Object_Create"}),". The reason for this is what is in the first parameter."]}),"\n",(0,s.jsxs)(n.p,{children:["In all seven of the examples immediately above the first parameter is the entity (object, vehicle, player, etc) being operated on. You want to get the position of a specific entity. You want to move a specific entity. You want to get the remaining time of a specific entity. This again maps to the OO-like API - ",(0,s.jsx)(n.code,{children:"Player_Spawn(playerid)"})," can be thought of as ",(0,s.jsx)(n.code,{children:"player.Spawn()"}),". PAWN can't do that, but that doesn't mean other languages plugging in to this API can't. In C++ terms - ",(0,s.jsx)(n.code,{children:"_"})," is ",(0,s.jsx)(n.code,{children:"."})," or ",(0,s.jsx)(n.code,{children:"->"})," and always needs a valid ID given as the first parameter. However, the function ",(0,s.jsx)(n.code,{children:"Dialog_IsValid(Dialog:id)"})," by definition may not have a valid ID as the first parameter (or what's the point of it",(0,s.jsx)(n.sup,{children:(0,s.jsx)(n.a,{href:"#user-content-fn-1-1f30c3",id:"user-content-fnref-1-1f30c3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"?), and ",(0,s.jsx)(n.code,{children:"Icon_Create(image, Float:x, Float:y, Float:z)"})," doesn't even take an ID at all. These thus become ",(0,s.jsx)(n.code,{children:"@"})," instead - ",(0,s.jsx)(n.code,{children:"::"})," in C++ syntax. They might not take an ID at all, and absolutely don't need a valid one (@Destroy` also comes under this group of functions, as destroying an entity is an operation logically external to an entity, not an operation on the entity)."]}),"\n",(0,s.jsx)(n.h3,{id:"constants-1",children:"Constants"}),"\n",(0,s.jsxs)(n.p,{children:["To start with, instead of ",(0,s.jsx)(n.code,{children:"#define"})," for everything we use ",(0,s.jsx)(n.code,{children:"const"})," and ",(0,s.jsx)(n.code,{children:"enum"})," as much as possible, except where we expect things to be overridden (",(0,s.jsx)(n.code,{children:"MAX_PLAYERS"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"enum ObjectMaterialTextAlignment\n{\n    MATERIAL_TEXT_ALIGN_LEFT,\n    MATERIAL_TEXT_ALIGN_CENTRE,\n    MATERIAL_TEXT_ALIGN_RIGHT,\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Object_SetMaterialText"})," will now only accept one of those three values, and nothing else."]}),"\n",(0,s.jsxs)(n.p,{children:["What about invalid IDs? We have made those consistent as well. All entities now use the same invalid value, well outside the range of possibly valid values - open.mp has removed almost all limits, so making a value like ",(0,s.jsx)(n.code,{children:"65536"})," invalid just won't work. What is this new invalid value? We haven't decided... There are two main contenders both with pros and cons, and the decision isn't as easy as it might at first appear. But fortunately it doesn't make a big difference to the internal work as we can switch almost instantly."]}),"\n",(0,s.jsx)(n.p,{children:"The two choices are explained below, and we'd appreciate some feedback on this if possible:"}),"\n",(0,s.jsx)(n.h4,{id:"0",children:(0,s.jsx)(n.code,{children:"0"})}),"\n",(0,s.jsxs)(n.p,{children:["Using ",(0,s.jsx)(n.code,{children:"0"})," as an invalid value has a few advantages:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"it isn't an invalid index, so when returned and not correctly checked your code won't crash. It might not work perfectly, but it will keep doing something at least."}),"\n",(0,s.jsx)(n.li,{children:"It is very easy to check, and intent becomes obvious with it:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'new Object:object = Object@Create(various, parameters, here);\nif (object)\n{\n    Object_SetMaterialText(object, "Hello");\n}\nelse\n{\n    printf("Couldn\'t create the object.");\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A newly declared variable is by default an invalid value:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new Dialog:d;\n"})}),"\n",(0,s.jsx)(n.p,{children:"One of the most common bugs people get is their code only working for player 0, because they forgot to intialise a variable. If there's no player/object/vehicle 0, the code won't apply to anyone - it is better to have no player promoted to admin than the wrong player."}),"\n",(0,s.jsx)(n.h4,{id:"-1",children:(0,s.jsx)(n.code,{children:"-1"})}),"\n",(0,s.jsxs)(n.p,{children:["Using ",(0,s.jsx)(n.code,{children:"-1"})," as an invalid value has a few advantages:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["It IS an invalid index. Not being one was listed as an advantage for ",(0,s.jsx)(n.code,{children:"0"})," because your code will often keep going instead of crashing, but with crashdetect that can be a good thing - there's a bug in your code and the crash will tell you exactly where it is, sometimes to the exact source code line. Which is better, silently continuing, or ending loudly?"]}),"\n",(0,s.jsxs)(n.li,{children:["People are used to ",(0,s.jsx)(n.code,{children:"0"})," as a valid value most of the time. Programmers start counting at ",(0,s.jsx)(n.code,{children:"0"}),", so it should be valid and something outside the realm of positive integers should be invalid."]}),"\n",(0,s.jsxs)(n.li,{children:["In unsigned maths it is the largest possible integer - ",(0,s.jsx)(n.code,{children:"0xFFFFFFFF"}),", ",(0,s.jsx)(n.code,{children:"4294967295"}),". This means the internal hard limit for any entity type is the highest it can possibly be - ",(0,s.jsx)(n.code,{children:"4,294,967,295"})," items before running out of IDs (and memory)."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"per-player-functions-1",children:"Per-Player Functions"}),"\n",(0,s.jsxs)(n.p,{children:["In short, these are no more. Every ",(0,s.jsx)(n.code,{children:"ForPlayer"}),", ",(0,s.jsx)(n.code,{children:"ForAll"}),", ",(0,s.jsx)(n.code,{children:"CreatePlayerX"})," etc. function has been replaced by one simple function - ",(0,s.jsx)(n.code,{children:"X_Display"})," (where ",(0,s.jsx)(n.code,{children:"X"})," is any entity), and ",(0,s.jsx)(n.code,{children:"X_Has"})," for checking:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"Object_Display(objectid, playerid, true); // Show it.\nObject_Display(objectid, playerid, false); // Hide it.\n\nText_Display(textid, true); // Show it to everyone.\n\nif (Zone_Has(zoneid, playerid))\n{\n    // The player is ALLOWED to see the gang zone.\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["YSI used ",(0,s.jsx)(n.code,{children:"X_SetPlayer"}),", but showing things to players is the most fundamental thing to do, so it deserves its own verb. Some libraries use ",(0,s.jsx)(n.code,{children:"X_Show"})," and ",(0,s.jsx)(n.code,{children:"X_Hide"}),", but that's two functions which just leads to excess code when checking which to do:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"if (var) Checkpoint_Show(cpid, playerid);\nelse Checkpoint_Hide(cpid, playerid);\n"})}),"\n",(0,s.jsx)(n.p,{children:"vs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"Checkpoint_Display(cpid, playerid, var);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that just calling ",(0,s.jsx)(n.code,{children:"X_Display"})," might not actually show the item. An object on the far side of the world still won't be visible. A checkpoint in a different virtual world won't be visible even if it is right next to you. For world entities this just says that the player is allowed to see it, not that they are currently able to. Conversely, for HUD elements such as menus and dialogs this does show them instantly, and may hide others when only one is allowed."]}),"\n",(0,s.jsx)(n.h3,{id:"ids-1",children:"IDs"}),"\n",(0,s.jsx)(n.p,{children:"With the removal of per-player pools, and unification of invalid IDs, this is no longer an issue."}),"\n",(0,s.jsx)(n.h2,{id:"smarter-functions",children:"Smarter functions."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"X_Display"})," functions shown above can take two parameters - entity and display state, to enable every player to see them; or alternatively three parameters - entity, player, and display state. There are other functions that are smart about their parameters as well. One set of examples is the various rotation functions. As mentioned in the introduction, there are at least four different ways to get and set rotations on for different entities. Now there's one - ",(0,s.jsx)(n.code,{children:"X_SetRotation"})," and ",(0,s.jsx)(n.code,{children:"X_GetRotation"}),". For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"// Just get `z`.\nz = Player_GetRotation(playerid);\n\n// Get x, y, and z Euler angles.\nObject_GetRotation(objectid, x, y, z);\n\n// Get w, x, y, and z quaternion angles.\nVehicle_GetRotation(vehicleid, w, x, y, z);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Which is used for which entity? All of them:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"// Just get `z`.\nz = Object_GetRotation(objectid);\n\n// Get x, y, and z Euler angles.\nObject_GetRotation(objectid, x, y, z);\n\n// Get w, x, y, and z quaternion angles.\nObject_GetRotation(objectid, w, x, y, z);\n"})}),"\n",(0,s.jsx)(n.p,{children:"The parameter and return meanings are determined by the number of parameters given. Also for Set:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"// Just set `z`.\nVehicle_SetRotation(vehicleid, z);\n\n// Set x, y, and z Euler angles.\nVehicle_SetRotation(vehicleid, x, y, z);\n\n// Set w, x, y, and z quaternion angles.\nVehicle_SetRotation(vehicleid, w, x, y, z);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(n.p,{children:["We have tried very hard to make an API that's easy to use, easy to learn, but also backwards- compatibile. A lot of the success of SA",":MP"," comes from it's ease of use, and we want to keep that, but are also aware that there are power users as well who want to get far more out of their code. Striking this balance is always hard, especially when the ones who comment the most are the most experienced - the ones who know the language inside and out and want to push it further. This creates a system that self-selects for advanced features at the expense of beginners. We don't want this, but we do still want to hear your thoughts. Which language and API features do you like, which do you not? What functions would help you get the most out of your code? Do you think the new design is simple, or too complicated? Are you fine with the haphazard names of the current functions? They serve their purpose, so why change them? Would you as a beginner have appreciated anything being done differently?"]}),"\n",(0,s.jsx)(n.p,{children:"Please share any feedback you might have here in the burgershot topic below. We'd love to hear from you:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://forum.open.mp/showthread.php?tid=1036",children:"https://forum.open.mp/showthread.php?tid=1036"})}),"\n","\n",(0,s.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{id:"user-content-fn-1-1f30c3",children:["\n",(0,s.jsx)(n.p,{children:"Interesting side note. Thanks to the way we've abstracted the scripting API code, Dialog_IsValid is implemented as:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"SCRIPT_API(Dialog_IsValid, bool(Dialog_s)) { return true; }\n"})}),"\n",(0,s.jsxs)(n.p,{children:["That's literally it. No actual implementation needed because for the function to be called the entity lookup must have succeeded, and thus we can return true instantly. ",(0,s.jsx)(n.a,{href:"#user-content-fnref-1-1f30c3","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(96540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}},40897:e=>{e.exports=JSON.parse('{"permalink":"/pt-BR/blog/scripting-api","editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/blog/blog/2020-04-14-scripting-api.md","source":"@site/blog/2020-04-14-scripting-api.md","title":"open.mp API design","description":"A key focus of open.mp is maintaining backward compatibility\u2014your existing SA:MP scripts will continue to work as-is. However, open.mp also introduces improvements to fix inconsistencies and make scripting more intuitive and powerful.","date":"2020-04-14T00:00:00.000Z","tags":[],"readingTime":16.885,"hasTruncateMarker":true,"authors":[{"name":"Y_Less","key":"y_less","page":null}],"frontMatter":{"slug":"scripting-api","title":"open.mp API design","authors":"y_less"},"unlisted":false,"prevItem":{"title":"Live Podcast","permalink":"/pt-BR/blog/interview"},"nextItem":{"title":"Testing in open.mp","permalink":"/pt-BR/blog/debugging"}}')}}]);