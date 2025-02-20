"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[40309],{28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>l});var t=r(96540);const n={},i=t.createContext(n);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(i.Provider,{value:s},e.children)}},92374:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>h,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"server/server.cfg","title":"server.cfg","description":"Server configuration file.","source":"@site/docs/server/server.cfg.md","sourceDirName":"server","slug":"/server/server.cfg","permalink":"/sl/docs/server/server.cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/server/server.cfg.md","tags":[],"version":"current","frontMatter":{"title":"server.cfg","sidebar_label":"server.cfg","description":"Server configuration file."},"sidebar":"docsSidebar","previous":{"title":"open.mp functions","permalink":"/sl/docs/server/omp-functions"},"next":{"title":"Client Commands","permalink":"/sl/docs/client/ClientCommands"}}');var n=r(74848),i=r(28453);const d={title:"server.cfg",sidebar_label:"server.cfg",description:"Server configuration file."},l=void 0,h={},o=[{value:"Description",id:"description",level:2},{value:"Console",id:"console",level:2},{value:"Scripts",id:"scripts",level:2},{value:"Server browser",id:"server-browser",level:2},{value:"Networking",id:"networking",level:2},{value:"Logging",id:"logging",level:2},{value:"Client",id:"client",level:2},{value:"NPCs",id:"npcs",level:2},{value:"Lag compensation",id:"lag-compensation",level:2},{value:"Custom models",id:"custom-models",level:2},{value:"Others",id:"others",level:2},{value:"Notes",id:"notes",level:2}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"server.cfg"})," is a server configuration file which allows you to change all kinds of settings of your sa-mp server."]}),"\n",(0,n.jsx)(s.li,{children:"This file is necessary for every server and has to be located in the server directory next to the server application (samp-server.exe)."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"console",children:"Console"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Setting"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default value"}),(0,n.jsx)(s.th,{children:"Read-only"}),(0,n.jsx)(s.th,{children:"Rule"}),(0,n.jsx)(s.th,{children:"Effect"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"echo"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Executing Server Config..."}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"What samp-server.exe prints in the server console when executing server.cfg. There is no need to change this at all as you'll be the only one who sees the console."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"rcon_password"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"changeme"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"The password used to administrate the server and use the remote console (rcon). You must make sure to change this to something hard to crack so that others cannot take control of your server. Your server will NOT start if changeme is the RCON password!"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"rcon"}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsxs)(s.td,{children:["Toggles if the ",(0,n.jsx)(s.a,{href:"RemoteConsole",children:"Remote Console"})," feature should be used. Set to 1 to enable or 0 to disable."]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"scripts",children:"Scripts"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Setting"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default value"}),(0,n.jsx)(s.th,{children:"Read-only"}),(0,n.jsx)(s.th,{children:"Rule"}),(0,n.jsx)(s.th,{children:"Effect"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"gamemode(n) (N) (t)"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"gamemode0 grandlarc 1"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"The .amx file in the gamemodes folder, the server should use to run as a gamemode. (n) is the gamemode number, (N) is the gamemode name without the .amx extension, and (t) is the amount of times the gamemode should be played before switching to the next gamemode."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"filterscripts (N)"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:'The .amx file in the filterscripts folder, the server should use to run as a filterscript. (N) is the filterscript name without the .amx extension. Filterscripts are scripts that run in the background of your gamemode. They are there to add extras to the server without editing the gamemode. It is very useful if you want to carry a specific property to more than one gamemode. If you have multiple filterscripts you want to load, put them all in a row separated by "space", e.g. filterscripts script1 script2.'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"plugins (N)"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:'The .dll or .so file in the plugins folder, the server should use to run as a plugin. On Windows (N) is the plugin name without the .dll extension. However, on Linux the .so extension is needed! Plugins are scripts which are designed to enhance gamemodes and filterscripts. If you have multiple plugins you want to load, put them all in a row separated by "space", e.g. plugins plugin1 plugin2.'})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"server-browser",children:"Server browser"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Setting"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default value"}),(0,n.jsx)(s.th,{children:"Read-only"}),(0,n.jsx)(s.th,{children:"Rule"}),(0,n.jsx)(s.th,{children:"Effect"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"announce"}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"Toggles if the server should be announced to SA-MP masterlist. Set to 1 to enable or 0 to disable."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"query"}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"Toggles if the server information should be displayed in the server browser. Set to 1 to enable or 0 to disable. Players can still join a server that has disabled querying, but the server browser will not display any information."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"hostname"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"SA-MP Server"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"The name that will be shown in the server browser and when the player connects to the server."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"language"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsxs)(s.td,{children:["The language that appears in the server browser. Players can use this to filter servers by language in the server browser.",(0,n.jsx)("br",{})," ",(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"NOTE:"})," This server var was added in 0.3.7 and will have no effect in previous versions."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mapname"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"San Andreas"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"The mapname that appears in the server browser. This can be anything, e.g. My Stunt Map."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"gamemodetext"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"Unknown"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsxs)(s.td,{children:["The mode that will be shown in the server browser. Using ",(0,n.jsx)(s.a,{href:"../scripting/functions/SetGameModeText",children:"SetGameModeText"})," has the same effect and overrides the value used in server.cfg. If you have multiple gamemodes that require different gamemode texts, use that function."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"weather"}),(0,n.jsx)(s.td,{children:"string*"}),(0,n.jsx)(s.td,{children:"10"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsxs)(s.td,{children:["The global weather that the server uses and will be shown in the server browser. Using this setting in the server.cfg file will crash the server application on startup. Use ",(0,n.jsx)(s.a,{href:"../scripting/functions/SetWeather",children:"SetWeather"})," instead to change this setting."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"worldtime"}),(0,n.jsx)(s.td,{children:"string*"}),(0,n.jsx)(s.td,{children:"12:00"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsxs)(s.td,{children:["The global time that the server uses and will be shown in the server browser. Using this setting in the server.cfg file has no effect. Use ",(0,n.jsx)(s.a,{href:"../scripting/functions/SetWorldTime",children:"SetWorldTime"})," instead to change this setting."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"gravity"}),(0,n.jsx)(s.td,{children:"string*"}),(0,n.jsx)(s.td,{children:"0.008"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsxs)(s.td,{children:["The global gravity that the server uses. Using this setting in the server.cfg file will crash the server application on startup. Use ",(0,n.jsx)(s.a,{href:"../scripting/functions/SetGravity",children:"SetGravity"})," instead to change this setting."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"weburl"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"http://www.open.mp",children:"www.open.mp"})}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"The website people can visit to gain more information about the server."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"version"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"The SA-MP version that the server uses and will be shown in the server browser. Using this setting in the server.cfg file has no effect."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"maxplayers"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"50"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"The maximum amount of players your server can hold. By changing this number you can alter how many players can enter the server. The maximum is 1000 and the minimum is 1."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"password"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"The password used to lock the server. When using this, only players that know this password will be able to join the server."})]})]})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"[*] Some settings are a different type than you might think."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"networking",children:"Networking"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Setting"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default value"}),(0,n.jsx)(s.th,{children:"Read-only"}),(0,n.jsx)(s.th,{children:"Rule"}),(0,n.jsx)(s.th,{children:"Effect"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"sleep"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"5"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:'The time in milliseconds the main sa-mp and raknet networking thread will "sleep" idly during each sync cycle. Higher values decreases server processing, but reduces sync quality. Lower values increases server processing, but improves sync quality. It is not advisable to change this value unless your player count is very high and you have server fps stability issues.'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lanmode"}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"Deprecated variable, has no effect."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"bind"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"The IP address the server should use. The server will be forced to use this IP address instead of automatically choosing a free IP address. This IP address must match one assigned to a network card on the server. This is useful for running multiple servers on the same port on the same box."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"port"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"8192 (7777 is also commonly used)"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsxs)(s.td,{children:["The port the server should use. You will need to ",(0,n.jsx)(s.a,{href:"http://www.portforward.com/",children:"Port Forward"})," in order for players to join your server from outside your LAN."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"conncookies"}),(0,n.jsx)(s.td,{children:"int*"}),(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsxs)(s.td,{children:["Toggles the 0.3.7 connection cookie system. Set to 1 to enable or 0 to disable.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"NOTE:"})," This server var was added in 0.3.7 R2 and will have no effect in previous versions."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cookielogging"}),(0,n.jsx)(s.td,{children:"int*"}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsxs)(s.td,{children:["Toggles logging of connection cookies requested by newly connecting players. Set to 1 to enable or 0 to disable.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"NOTE:"})," This server var was added in 0.3.7 R2 and will have no effect in previous versions."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"connseedtime"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"300000"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsxs)(s.td,{children:["The time in milliseconds the connection cookie seed value updates.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"NOTE:"})," This server var was added in 0.3.7 and will have no effect in previous versions."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"minconnectiontime"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"The time in milliseconds the server will wait before accepting another incoming connection. It is not recommended that you use this variable unless your server is under a connection flood attack."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"messageslimit"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"500"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"The maximum number of messages a user can send per second."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"messageholelimit"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"3000"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"A network level setting to deal with DoS attacks."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ackslimit"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"3000"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"playertimeout"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"10000"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"The time in miliseconds after which a player will timeout when not sending any data to the server."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"mtu"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"576"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Maximum_transmission_unit",children:"See here"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"NOTE:"})," This server var was added in 0.3.8 and will have no effect in previous versions."]})]})]})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"[*] Some settings are a different type than you might think."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"logging",children:"Logging"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Setting"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default value"}),(0,n.jsx)(s.th,{children:"Read-only"}),(0,n.jsx)(s.th,{children:"Rule"}),(0,n.jsx)(s.th,{children:"Effect"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"output"}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"Toggles if log messages (e.g. print/printf from scripts or logprintf from plugins) should be duplicated in the server console. Set to 1 to enable or 0 to disable. This option has effect only on Linux servers."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"timestamp"}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"Toggles if a timestamp should be printed with every console message. Set to 1 to enable or 0 to disable."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"logtimeformat"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"[%H:%M:%S]"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsxs)(s.td,{children:["The timestamp format that should be used. The format is based on the ",(0,n.jsx)(s.a,{href:"http://cplusplus.com/reference/clibrary/ctime/strftime/",children:"strftime"})," format from C/C++. Here are some examples:",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"[%H:%M:%S]"})," This displays only the time, and is the default format for all previous SA-MP server versions.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"[%d/%m/%Y %H:%M:%S]"})," This would display the date in dd/mm/yyyy format followed by the time in hour:minute",":second"," format."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"logqueries"}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"Toggles if all queries sent to the server by players should be logged. Set to 1 to enable or 0 to disable. It is considerably useful during a DDoS attack."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"chatlogging"}),(0,n.jsx)(s.td,{children:"int*"}),(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"Toggles if player chat should be shown in the server console. Useful to stop the log from becoming bloated, or if you have another scripted chat logging solution. Set to 1 to enable or 0 to disable."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"db_logging"}),(0,n.jsx)(s.td,{children:"int*"}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsxs)(s.td,{children:["Logs sqlite db_* function errors in the server console.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"NOTE:"})," This server var was added in 0.3.7 R2 and will have no effect in previous versions."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"db_log_queries"}),(0,n.jsx)(s.td,{children:"int*"}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsxs)(s.td,{children:["Logs all sqlite db_query calls, including the query string.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"NOTE:"})," This server var was added in 0.3.7 R2 and will have no effect in previous versions."]})]})]})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"[*] Some settings are a different type than you might think."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"client",children:"Client"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Setting"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default value"}),(0,n.jsx)(s.th,{children:"Read-only"}),(0,n.jsx)(s.th,{children:"Rule"}),(0,n.jsx)(s.th,{children:"Effect"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"onfoot_rate*"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"30"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"The time in milliseconds a client should update the server with new data while on foot."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"incar_rate"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"30"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"The time in milliseconds a client should update the server with new data while in a vehicle."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"weapon_rate"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"30"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"The time in milliseconds a client should update the server with new data while firing a weapon."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"stream_distance*"}),(0,n.jsx)(s.td,{children:"float"}),(0,n.jsx)(s.td,{children:"200.0"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsxs)(s.td,{children:["The distance on the X,Y plane players will stream in server entities. The maximum is ",(0,n.jsx)(s.strong,{children:"400.0"})," and the minimum is ",(0,n.jsx)(s.strong,{children:"50.0"}),". Higher values makes players see server entities at a greater distance, but requires more client processing and potentially more bandwidth."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"stream_rate*"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"1000"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsxs)(s.td,{children:["The time in milliseconds before the streaming in of server entities is retested for each player. The maximum is ",(0,n.jsx)(s.strong,{children:"5000"})," and the minimum is ",(0,n.jsx)(s.strong,{children:"500"}),". Lower values increases server processing as it has to recheck streaming conditions more frequently for each player."]})]})]})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"[*] Lower values of onfoot_rate, incar_rate and weapon_rate increases sync performance, but uses more bandwidth."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"npcs",children:"NPCs"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Setting"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default value"}),(0,n.jsx)(s.th,{children:"Read-only"}),(0,n.jsx)(s.th,{children:"Rule"}),(0,n.jsx)(s.th,{children:"Effect"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"maxnpc"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"The maximum amount of NPCs your server can hold. By changing this number you can alter how many of the player slots can be used by NPCs."})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"lag-compensation",children:"Lag compensation"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Setting"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default value"}),(0,n.jsx)(s.th,{children:"Read-only"}),(0,n.jsx)(s.th,{children:"Rule"}),(0,n.jsx)(s.th,{children:"Effect"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lagcompmode"}),(0,n.jsx)(s.td,{children:"int"}),(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsxs)(s.td,{children:["0: Fully disable lag compensation.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"1: Fully enable lag compensation.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"2: Enable position-only lag compensation. This means player rotation won't be lag compensated for."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"lagcomp"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"On"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsxs)(s.td,{children:["Probably set automatically to ",(0,n.jsx)(s.strong,{children:"On"})," or ",(0,n.jsx)(s.strong,{children:"Off"})," depending on the ",(0,n.jsx)(s.strong,{children:"lagcompmode"})," setting."]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"custom-models",children:"Custom models"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Setting"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default value"}),(0,n.jsx)(s.th,{children:"Read-only"}),(0,n.jsx)(s.th,{children:"Rule"}),(0,n.jsx)(s.th,{children:"Effect"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"useartwork"}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsxs)(s.td,{children:["Toggles if the server uses custom models from the models folder. Set to 1 to enable or 0 to disable.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"NOTE:"})," This server var was added in 0.3.8 and will have no effect in previous versions."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"artwork"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsxs)(s.td,{children:["Probably set automatically to ",(0,n.jsx)(s.strong,{children:"No"})," or ",(0,n.jsx)(s.strong,{children:"Yes"})," depending on the ",(0,n.jsx)(s.strong,{children:"useartwork"})," setting.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"NOTE:"})," This server var was added in 0.3.8 and will have no effect in previous versions."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"artpath"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{children:"models"}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsxs)(s.td,{children:["The path where the custom models are located.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"NOTE:"})," This server var was added in 0.3.8 and will have no effect in previous versions."]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"others",children:"Others"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Setting"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default value"}),(0,n.jsx)(s.th,{children:"Read-only"}),(0,n.jsx)(s.th,{children:"Rule"}),(0,n.jsx)(s.th,{children:"Effect"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"myriad"}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:'Unused. It probably enabled some compatibility with an old GTA San Andreas mod called "Myriad Islands" years ago, probably earlier than year 2008.'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"nosign"}),(0,n.jsx)(s.td,{children:"string"}),(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"Unused."})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:['Values marked as "Read-only" (as shown by ',(0,n.jsx)(s.code,{children:"/rcon varlist"}),") can not be changed during runtime. All other values can be (temporarily) changed by passing them to SendRconCommand."]}),"\n",(0,n.jsxs)(s.li,{children:['Values marked as "Rule" (as shown by ',(0,n.jsx)(s.code,{children:"/rcon varlist"}),") are displayed in the server browser in the Rules section."]}),"\n",(0,n.jsx)(s.li,{children:'Scripts do not have to be in the gamemodes or filterscripts folders. The information in server.cfg is a path, and can therefore use "..".'}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);