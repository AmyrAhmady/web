"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[90485],{28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var r=s(96540);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}},75338:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"server/Installation","title":"Installation","description":"This tutorial is for those who want to transfer their gamemode from SA:MP server to open.mp server.","source":"@site/docs/server/Installation.md","sourceDirName":"server","slug":"/server/Installation","permalink":"/docs/server/Installation","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/server/Installation.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Controlling a Server","permalink":"/docs/server/ControllingServer"},"next":{"title":"Lag Compensation","permalink":"/docs/server/LagCompensation"}}');var i=s(74848),l=s(28453);const t={},o=void 0,d={},a=[{value:"Step 1",id:"step-1",level:2},{value:"Step 2",id:"step-2",level:2},{value:"Step 3",id:"step-3",level:2},{value:"Step 4",id:"step-4",level:2},{value:"Step 5",id:"step-5",level:2},{value:"Step 6",id:"step-6",level:2},{value:"Step 7",id:"step-7",level:2},{value:"Step 8",id:"step-8",level:2},{value:"Step 9",id:"step-9",level:2},{value:"Step 10",id:"step-10",level:2},{value:"Step 11",id:"step-11",level:2},{value:"Compiler errors and warnings",id:"compiler-errors-and-warnings",level:2},{value:"Runtime errors and warnings",id:"runtime-errors-and-warnings",level:2},{value:"Useful documents",id:"useful-documents",level:2},{value:"Help",id:"help",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["This tutorial is for those who want to transfer their gamemode from SA",":MP"," server to open.mp server."]})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If you are using the FCNPC plugin, please stop for now because this plugin does not work for open.mp currently."})}),"\n",(0,i.jsx)(n.h2,{id:"step-1",children:"Step 1"}),"\n",(0,i.jsxs)(n.p,{children:["Download the latest version of open.mp server files from ",(0,i.jsx)(n.a,{href:"https://github.com/openmultiplayer/open.mp/releases/latest",children:"https://github.com/openmultiplayer/open.mp/releases"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(1).png",alt:""})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"open.mp-win-x86.zip"})," ",(0,i.jsx)(n.strong,{children:"Windows"})," Server"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"open.mp-linux-x86.tar.gz"})," ",(0,i.jsx)(n.strong,{children:"Linux"})," Server"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"open.mp-linux-x86-dynssl.tar.gz"})," ",(0,i.jsx)(n.strong,{children:"Linux"})," Server (Dynamic SSL)"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-2",children:"Step 2"}),"\n",(0,i.jsxs)(n.p,{children:["Extract the ",(0,i.jsx)(n.code,{children:".zip"})," or ",(0,i.jsx)(n.code,{children:".tar.gz"})," archive contents on your disk"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(3).png",alt:""})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"components:"})," open.mp components"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"filterscripts:"})," Your server filter script files (side scripts)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"gamemodes:"})," Your server game mode files (main scripts)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"models:"})," Your server custom models (textures .txd .dff)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"plugins:"})," Your server plugin files (legacy plugins)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"qawno:"})," Pawn editor program and your server includes"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"scriptfiles:"})," INI files or other stuff."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"bans.json:"})," Ban list file"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"config.json:"})," Server configuration file"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"omp-server.exe:"})," open.mp server program"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"omp-server.pdb:"})," open.mp server debugging file"]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"step-3",children:"Step 3"}),"\n",(0,i.jsxs)(n.p,{children:["Put your gamemode ",(0,i.jsx)(n.code,{children:".pwn"})," file in the ",(0,i.jsx)(n.strong,{children:"gamemodes"})," folder"]}),"\n",(0,i.jsx)(n.h2,{id:"step-4",children:"Step 4"}),"\n",(0,i.jsxs)(n.p,{children:["Put required includes (e.g. ",(0,i.jsx)(n.code,{children:"sscanf2.inc"}),", ",(0,i.jsx)(n.code,{children:"streamer.inc"}),") in the ",(0,i.jsx)(n.strong,{children:"qawno/include"})," folder"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you are using the YSI-4 includes in your game mode, update to ",(0,i.jsx)(n.a,{href:"https://github.com/pawn-lang/YSI-Includes/releases",children:"YSI-5.x"})]})}),"\n",(0,i.jsx)(n.h2,{id:"step-5",children:"Step 5"}),"\n",(0,i.jsxs)(n.p,{children:["Put required plugins (e.g. ",(0,i.jsx)(n.code,{children:"sscanf.dll"}),", ",(0,i.jsx)(n.code,{children:"streamer.dll"}),") in the ",(0,i.jsx)(n.strong,{children:"plugins"})," folder"]}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.p,{children:"If you use the following plugins in table, you must put a version of the plugin that is compatible with omp!"}),(0,i.jsxs)(n.p,{children:["Put the following plugins in the ",(0,i.jsx)(n.strong,{children:"../components"})," folder, not in the ",(0,i.jsx)(n.strong,{children:"../plugins"})," folder!"]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Plugin"}),(0,i.jsx)(n.th,{children:"OMP"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Pawn.CMD"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/katursis/Pawn.CMD/releases/tag/3.4.0-omp",children:"https://github.com/katursis/Pawn.CMD/releases/tag/3.4.0-omp"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Pawn.RakNet"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/katursis/Pawn.RakNet/releases/tag/1.6.0-omp",children:"https://github.com/katursis/Pawn.RakNet/releases/tag/1.6.0-omp"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sampvoice"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/AmyrAhmady/sampvoice/releases/tag/v3.1.5-omp",children:"https://github.com/AmyrAhmady/sampvoice/releases/tag/v3.1.5-omp"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"discord-connector"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/maddinat0r/samp-discord-connector/releases/tag/v0.3.6-pre",children:"https://github.com/maddinat0r/samp-discord-connector/releases/tag/v0.3.6-pre"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SKY"}),(0,i.jsx)(n.td,{children:"Use Pawn.RakNet instead"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"YSF"}),(0,i.jsx)(n.td,{children:"You don't need YSF because open.mp already declared most of the same natives"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"FCNPC"}),(0,i.jsx)(n.td,{children:"Currently not supported"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"step-6",children:"Step 6"}),"\n",(0,i.jsxs)(n.p,{children:["Open the qawno IDE program located at ",(0,i.jsx)(n.strong,{children:"Server/qawno/qawno.exe"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(5).png",alt:""})}),"\n",(0,i.jsx)(n.h2,{id:"step-7",children:"Step 7"}),"\n",(0,i.jsxs)(n.p,{children:["Press ",(0,i.jsx)(n.strong,{children:"CTRL + O"})," then go to the ",(0,i.jsx)(n.strong,{children:"../gamemodes"})," folder and open your gamemode ",(0,i.jsx)(n.code,{children:".pwn"})," file"]}),"\n",(0,i.jsx)(n.h2,{id:"step-8",children:"Step 8"}),"\n",(0,i.jsx)(n.p,{children:"Find"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"#include <a_samp>\n"})}),"\n",(0,i.jsx)(n.p,{children:"replace with"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"#include <open.mp>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["then press ",(0,i.jsx)(n.strong,{children:"F5"})," to compile."]}),"\n",(0,i.jsx)(n.h2,{id:"step-9",children:"Step 9"}),"\n",(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://www.open.mp/docs/server/config.json",children:"config.json"})})," file with Notepad or other IDEs"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(9).png",alt:""})}),"\n",(0,i.jsx)(n.h2,{id:"step-10",children:"Step 10"}),"\n",(0,i.jsxs)(n.p,{children:["Edit ",(0,i.jsx)(n.strong,{children:"config.json"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(11).png",alt:""})}),"\n",(0,i.jsx)(n.p,{children:"Find"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"main_scripts": [\n    "gungame 1"\n],\n'})}),"\n",(0,i.jsx)(n.p,{children:"replace with"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"main_scripts": [\n    "your_gamemode_amx_file_name 1"\n],\n'})}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(n.p,{children:"Find"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"legacy_plugins": [],\n'})}),"\n",(0,i.jsx)(n.p,{children:"Specify required plugins"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"legacy_plugins": [\n    "crashdetect",\n    "mysql",\n    "sscanf",\n    "streamer",\n    "PawnPlus",\n    "pawn-memory"\n],\n'})}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(n.p,{children:"Find"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"side_scripts": []\n'})}),"\n",(0,i.jsx)(n.p,{children:"Specify your filterscripts"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"side_scripts": [\n    "filterscripts/file_name"\n]\n'})}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(n.p,{children:"Find"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"rcon": {\n    "allow_teleport": false,\n    "enable": false,\n    "password": "changeme1"\n},\n'})}),"\n",(0,i.jsx)(n.p,{children:"Enter strong password for rcon password:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"rcon": {\n    "allow_teleport": false,\n    "enable": false,\n    "password": "151sd80hgse32q1oi0v8dsge166"\n},\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Press ",(0,i.jsx)(n.strong,{children:"CTRL + S"})," to save changes."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["There is a guide on how to convert ",(0,i.jsx)(n.code,{children:"server.cfg"})," to ",(0,i.jsx)(n.code,{children:"config.json"})," at ",(0,i.jsx)(n.a,{href:"https://www.open.mp/docs/server/config.json",children:"https://www.open.mp/docs/server/config.json"})]})}),"\n",(0,i.jsx)(n.h2,{id:"step-11",children:"Step 11"}),"\n",(0,i.jsx)(n.p,{children:"Run the server"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Windows"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.code,{children:"omp-server.exe"})," program"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(10).png",alt:""})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Linux"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./omp-server\n"})}),"\n",(0,i.jsx)(n.h2,{id:"compiler-errors-and-warnings",children:"Compiler errors and warnings"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:'warning 213: tag mismatch: expected tag "?", but found none ("_")'}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"TogglePlayerControllable(playerid, 1);\n// ->\nTogglePlayerControllable(playerid, true);\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"TextDrawFont(textid, 1);\n// ->\nTextDrawFont(textid, TEXT_DRAW_FONT_1);\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"GivePlayerWeapon(playerid, 4, 1);\n// ->\nGivePlayerWeapon(playerid, WEAPON_KNIFE, 1);\n"})}),"\n",(0,i.jsx)(n.p,{children:"But you can ignore it for now:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"#define NO_TAGS\n#include <open.mp>\n\n// If the warning still occurs\n// Use #pragma warning disable 213\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:'warning 234: function is deprecated (symbol "TextDrawColor") Use `TextDrawColour'})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Press ",(0,i.jsx)(n.strong,{children:"CTRL + F"})," in qawno and replace all ",(0,i.jsx)(n.code,{children:"TextDrawColor"})," to ",(0,i.jsx)(n.code,{children:"TextDrawColour"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/adib-yg/openmp-server-installation/refs/heads/main/screenshots/Screenshot%20(7).png",alt:""})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"Or if you prefer you can use the mixed spellings:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"#define MIXED_SPELLINGS\n#include <open.mp>\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:'warning 234: function is deprecated (symbol "GetPlayerPoolSize") This function is fundamentally broken.'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:'warning 234: function is deprecated (symbol "GetVehiclePoolSize") This function is fundamentally broken.'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:'warning 234: function is deprecated (symbol "GetActorPoolSize") This function is fundamentally broken.'})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"GetPlayerPoolSize()"})," with ",(0,i.jsx)(n.code,{children:"MAX_PLAYERS"})]}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"GetVehiclePoolSize()"})," with ",(0,i.jsx)(n.code,{children:"MAX_VEHICLES"})]}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"GetActorPoolSize()"})," with ",(0,i.jsx)(n.code,{children:"MAX_ACTORS"})]}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:'warning 234: function is deprecated (symbol "SHA256_PassHash") Use BCrypt for hashing passwords'})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"https://github.com/Sreyas-Sreelal/samp-bcrypt",children:"samp-bcrypt"})," plugin for hashing passwords. SHA-256 is not secure."]}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:'warning 214: possibly a "const" array argument was intended: "?"'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"warning 239: literal array/string passed to a non-const parameter"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"public MyFunction(string[])\n// ->\npublic MyFunction(const string[])\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"error 025: function heading differs from prototype"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"public OnPlayerDeath(playerid, killerid, reason)\n// ->\npublic OnPlayerDeath(playerid, killerid, WEAPON:reason)\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"public OnPlayerEditAttachedObject(playerid, response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)\n// ->\npublic OnPlayerEditAttachedObject(playerid, EDIT_RESPONSE:response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"There is also an upgrade tool that attempts to find old untagged and const-incorrect code and upgrade it."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/openmultiplayer/upgrade",children:"https://github.com/openmultiplayer/upgrade"})}),(0,i.jsxs)(n.p,{children:["Already included in ",(0,i.jsx)(n.code,{children:"/qawno/upgrader"})," folder."]})]}),"\n",(0,i.jsx)(n.h2,{id:"runtime-errors-and-warnings",children:"Runtime errors and warnings"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[Info] Couldn\'t announce legacy network to open.mp list.\n[Info] [Server Error] Status: 406\n[Info] [Server Error] Message: {"error":"failed to query server: socket read timed out"}\n[Info] This won\'t affect the server\'s behaviour.\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Your server is not accessible from the open.mp website."}),"\n",(0,i.jsx)(n.li,{children:"You are probably running the server locally."}),"\n",(0,i.jsx)(n.li,{children:"The firewall has blocked the connection."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"This warning will not affect the behavior of the server."})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[Warning] Insufficient specifiers given to `format`: "?" < 1\n'})}),"\n",(0,i.jsx)(n.p,{children:"The specifiers are less than the arguments you pass in the format. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:'new string[32];\nnew mp[32] = ".MP";\n\nformat(string, sizeof(string), "OPEN", mp);\n// [Warning] Insufficient specifiers given to `format`: "OPEN" < 1\n\n// Should be:\nformat(string, sizeof(string), "OPEN%s", mp);\n//                                  ^^\n'})}),"\n",(0,i.jsx)(n.h2,{id:"useful-documents",children:"Useful documents"}),"\n",(0,i.jsxs)(n.p,{children:["Check out the new scripting functions and callbacks: ",(0,i.jsx)(n.a,{href:"https://www.open.mp/docs/server/omp-functions",children:"https://www.open.mp/docs/server/omp-functions"})]}),"\n",(0,i.jsxs)(n.p,{children:["If you are completely new to Pawn programming: ",(0,i.jsx)(n.a,{href:"https://github.com/openmultiplayer/omp-stdlib/blob/master/documentation/readme-beginner.md",children:"readme-beginner"})]}),"\n",(0,i.jsxs)(n.p,{children:["If you are an intermediate at Pawn programming: ",(0,i.jsx)(n.a,{href:"https://github.com/openmultiplayer/omp-stdlib/blob/master/documentation/readme-intermediate.md",children:"readme-intermediate"})]}),"\n",(0,i.jsxs)(n.p,{children:["If you are an expert at Pawn programming: ",(0,i.jsx)(n.a,{href:"https://github.com/openmultiplayer/omp-stdlib/blob/master/documentation/readme-expert.md",children:"readme-expert"})]}),"\n",(0,i.jsxs)(n.p,{children:["Blog post: ",(0,i.jsx)(n.a,{href:"https://www.open.mp/blog/porting",children:"Porting to open.mp"})]}),"\n",(0,i.jsx)(n.h2,{id:"help",children:"Help"}),"\n",(0,i.jsxs)(n.p,{children:["If you still have issues running the server, please join the official open.mp Discord server: ",(0,i.jsx)(n.a,{href:"https://discord.gg/samp",children:"https://discord.gg/samp"})]}),"\n",(0,i.jsxs)(n.p,{children:["Ask in ",(0,i.jsx)(n.a,{href:"https://discord.com/channels/231799104731217931/966398440051445790",children:"#openmp-support"})," channel."]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);