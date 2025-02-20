"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[38031],{28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var r=s(96540);const i={},d=r.createContext(i);function l(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(d.Provider,{value:n},e.children)}},87406:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"server/ControllingServer","title":"Controlling a Server","description":"Useful commands for controlling a server.","source":"@site/docs/server/ControllingServer.md","sourceDirName":"server","slug":"/server/ControllingServer","permalink":"/bs/docs/server/ControllingServer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/server/ControllingServer.md","tags":[],"version":"current","frontMatter":{"title":"Controlling a Server","sidebar_label":"Controlling a Server","description":"Useful commands for controlling a server."},"sidebar":"docsSidebar","previous":{"title":"Common Server Issues","permalink":"/bs/docs/server/CommonServerIssues"},"next":{"title":"Installation","permalink":"/bs/docs/server/Installation"}}');var i=s(74848),d=s(28453);const l={title:"Controlling a Server",sidebar_label:"Controlling a Server",description:"Useful commands for controlling a server."},c=void 0,a={},o=[{value:"Changing Gamemode",id:"changing-gamemode",level:2},{value:"Running a custom/downloaded gamemode",id:"running-a-customdownloaded-gamemode",level:3},{value:"Using Filterscripts",id:"using-filterscripts",level:3},{value:"Passwording your server",id:"passwording-your-server",level:2},{value:"Using RCON",id:"using-rcon",level:2},{value:"Logging In",id:"logging-in",level:3},{value:"Adding Bans",id:"adding-bans",level:3},{value:"samp.ban",id:"sampban",level:5},{value:"Ban() function",id:"ban-function",level:5},{value:"RCON ban command",id:"rcon-ban-command",level:5},{value:"banip",id:"banip",level:5},{value:"Removing Bans",id:"removing-bans",level:3},{value:"samp.ban",id:"sampban-1",level:4},{value:"unbanip",id:"unbanip",level:4},{value:"reloadbans",id:"reloadbans",level:4},{value:"RCON Commands",id:"rcon-commands",level:3},{value:"Related Callbacks and Functions",id:"related-callbacks-and-functions",level:3},{value:"Callbacks",id:"callbacks",level:4},{value:"Functions",id:"functions",level:4}];function t(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"changing-gamemode",children:"Changing Gamemode"}),"\n",(0,i.jsx)(n.h3,{id:"running-a-customdownloaded-gamemode",children:"Running a custom/downloaded gamemode"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open the directory you installed the server to (eg: /Rockstar Games/GTA San Andreas/server)"}),"\n",(0,i.jsx)(n.li,{children:"Take the downloaded/compiled .amx file and place it in the gamemodes folder where you installed the server"}),"\n",(0,i.jsx)(n.li,{children:"Use RCON to change the mode."}),"\n",(0,i.jsx)(n.li,{children:"Alternatively you can add the new mode to a rotation."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"using-filterscripts",children:"Using Filterscripts"}),"\n",(0,i.jsx)(n.p,{children:"The same as running a custom gamemode, except:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Place the .amx in a folder called ",(0,i.jsx)(n.code,{children:"filterscripts"})]}),"\n",(0,i.jsxs)(n.li,{children:["Add the following to server.cfg: ",(0,i.jsx)(n.code,{children:"filterscripts <scriptname>"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"passwording-your-server",children:"Passwording your server"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you want to add a password so only your friends can join, add this to ",(0,i.jsx)(n.a,{href:"server.cfg",children:"server.cfg"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"password whatever\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This will make your server password-protected with the password set as 'whatever' - change it to whatever you want."}),"\n",(0,i.jsxs)(n.li,{children:["You can also change the password while ingame by using ",(0,i.jsx)(n.code,{children:"/rcon password newpasswordhere"})]}),"\n",(0,i.jsxs)(n.li,{children:["You can remove the password by using ",(0,i.jsx)(n.code,{children:"/rcon password 0"}),", or by restarting the server."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"using-rcon",children:"Using RCON"}),"\n",(0,i.jsx)(n.h3,{id:"logging-in",children:"Logging In"}),"\n",(0,i.jsxs)(n.p,{children:["You can log in either while ingame by typing ",(0,i.jsx)(n.code,{children:"/rcon login password"})," or out of game by using the RCON mode in the ",(0,i.jsx)(n.a,{href:"RemoteConsole",children:"Remote Console"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The password is the same as what you set it as in ",(0,i.jsx)(n.a,{href:"server.cfg",children:"server.cfg"})]}),"\n",(0,i.jsx)(n.h3,{id:"adding-bans",children:"Adding Bans"}),"\n",(0,i.jsx)(n.h5,{id:"sampban",children:"samp.ban"}),"\n",(0,i.jsx)(n.p,{children:"samp.ban is the file used for storing bans, including the following information about the ban:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"IP"}),"\n",(0,i.jsx)(n.li,{children:"Date"}),"\n",(0,i.jsx)(n.li,{children:"Time"}),"\n",(0,i.jsxs)(n.li,{children:["Name (Name of person or a reason, see ",(0,i.jsx)(n.a,{href:"../../functions/BanEx",children:"BanEx"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Type of ban"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To add a ban, simply add a line like so:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"IP_HERE [28/05/09 | 13:37:00] PLAYER - BAN REASON\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Where ",(0,i.jsx)(n.code,{children:"IP_HERE"})," is, is where you put the IP you would like to ban."]}),"\n",(0,i.jsx)(n.h5,{id:"ban-function",children:"Ban() function"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"../scripting/functions/Ban",children:"Ban"})," function can be used to ban a player from a script. The ",(0,i.jsx)(n.a,{href:"../scripting/functions/BanEx",children:"BanEx"})," function will add an optional reason like so:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"13.37.13.37 [28/05/09 | 13:37:00] Cheater - INGAME BAN\n"})}),"\n",(0,i.jsx)(n.h5,{id:"rcon-ban-command",children:"RCON ban command"}),"\n",(0,i.jsx)(n.p,{children:'The RCON ban command, executed by typing /rcon ban in-game or typing "ban" in the console, is used to ban a specific player that is on your server, to ban an IP see the next section.'}),"\n",(0,i.jsx)(n.p,{children:"Simply type:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# Ingame:\n/rcon ban PLAYERID\n\n# Console:\nban PLAYERID\n"})}),"\n",(0,i.jsx)(n.h5,{id:"banip",children:"banip"}),"\n",(0,i.jsx)(n.p,{children:'The RCON banip command, executed by typing /rcon banip in-game or typing "banip" in the console, is used to ban a specific IP address, to ban a player on your server by ID, see the previous section. Will accept wildcards for rangebans.'}),"\n",(0,i.jsx)(n.p,{children:"Simply type:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# Ingame:\n/rcon banip IP\n\n# Console:\nbanip IP\n"})}),"\n",(0,i.jsx)(n.h3,{id:"removing-bans",children:"Removing Bans"}),"\n",(0,i.jsx)(n.p,{children:"Once somebody is banned, there are two ways to unban them."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Remove from samp.ban"}),"\n",(0,i.jsxs)(n.li,{children:["The RCON ",(0,i.jsx)(n.code,{children:"unbanip"})," command"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"sampban-1",children:"samp.ban"}),"\n",(0,i.jsx)(n.p,{children:"samp.ban can be found in your sa-mp server directory, it contains lines with the following information about each ban:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"IP"}),"\n",(0,i.jsx)(n.li,{children:"Date"}),"\n",(0,i.jsx)(n.li,{children:"Time"}),"\n",(0,i.jsxs)(n.li,{children:["Name (Name of person or a reason (see ",(0,i.jsx)(n.a,{href:"../scripting/functions/BanEx",children:"BanEx"}),"))"]}),"\n",(0,i.jsx)(n.li,{children:"Type of ban (INGAME, IP BAN etc,)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"127.8.57.32 [13/06/09 | 69:69:69] NONE - IP BAN\n13.37.13.37 [28/05/09 | 13:37:00] Kyeman - INGAME BAN\n"})}),"\n",(0,i.jsx)(n.p,{children:"To unban them, simply remove the line, then execute the RCON reloadbans command to make the server re-read samp.ban."}),"\n",(0,i.jsx)(n.h4,{id:"unbanip",children:"unbanip"}),"\n",(0,i.jsxs)(n.p,{children:["The RCON unbanip command can be used in-game or from the server console (black box). To unban an ip, simply type ",(0,i.jsx)(n.code,{children:"/rcon unbanip IP_HERE"})," in-game or ",(0,i.jsx)(n.code,{children:"unbanip IP_HERE"})," in the console."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"13.37.13.37 [28/05/09 | 13:37:00] Kyeman - INGAME BAN\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# Ingame:\n/rcon unbanip 13.37.13.37\n\n# Console\nunbanip 13.37.13.37\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To unban them, simply use the ",(0,i.jsx)(n.code,{children:"unbanip"})," command, then execute the RCON ",(0,i.jsx)(n.code,{children:"reloadbans"})," command to make the server re-read samp.ban."]}),"\n",(0,i.jsx)(n.h4,{id:"reloadbans",children:"reloadbans"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"samp.ban"})," is a file that holds the information for the IP's that are currently banned from the server. This file is read when the server is started, so if you unban an IP/person you MUST type the RCON ",(0,i.jsx)(n.code,{children:"reloadbans"})," command to make the server read ",(0,i.jsx)(n.code,{children:"samp.ban"})," again and allow them to join the server."]}),"\n",(0,i.jsx)(n.h3,{id:"rcon-commands",children:"RCON Commands"}),"\n",(0,i.jsxs)(n.p,{children:["Type cmdlist for commands (or, varlist for variables) making use of the RCON in-game (",(0,i.jsx)(n.code,{children:"/rcon cmdlist"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"These are the functions that you as admin can use:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Command"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon cmdlist"})}),(0,i.jsx)(n.td,{children:"Shows a list with commands."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon varlist"})}),(0,i.jsx)(n.td,{children:"Shows a list with the current variables."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon exit"})}),(0,i.jsx)(n.td,{children:"Closes the server."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon echo [text]"})}),(0,i.jsxs)(n.td,{children:["Shows the ",(0,i.jsx)(n.code,{children:"[text]"})," in the console of the server (NOT the client-console in-game)."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon hostname [name]"})}),(0,i.jsxs)(n.td,{children:["change the hostname text (",(0,i.jsx)(n.em,{children:"example: /rcon hostname my server"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon gamemodetext [name]"})}),(0,i.jsxs)(n.td,{children:["change the gamemode text (",(0,i.jsx)(n.em,{children:"example: /rcon gamemodetext my gamemode"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon mapname [name]"})}),(0,i.jsxs)(n.td,{children:["change the map name text (",(0,i.jsx)(n.em,{children:"example: /rcon mapname San Andreas"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon exec [filename]"})}),(0,i.jsxs)(n.td,{children:["Executes the file which contains server cfg (",(0,i.jsx)(n.em,{children:"example: /rcon exec blah.cfg"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon kick [ID]"})}),(0,i.jsxs)(n.td,{children:["Kick the player with the given ID (",(0,i.jsx)(n.em,{children:"example: /rcon kick 2"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon ban [ID]"})}),(0,i.jsxs)(n.td,{children:["Ban the player with the given ID (",(0,i.jsx)(n.em,{children:"example: /rcon ban 2"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon changemode [mode]"})}),(0,i.jsxs)(n.td,{children:["This command will change the current gamemode to the given one (",(0,i.jsx)(n.em,{children:"example: if you want to play sftdm: /rcon changemode sftdm"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon gmx"})}),(0,i.jsxs)(n.td,{children:["Will load the next gamemode in ",(0,i.jsx)(n.a,{href:"server.cfg",children:"server.cfg"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon reloadbans"})}),(0,i.jsxs)(n.td,{children:["Reloads the ",(0,i.jsx)(n.code,{children:"samp.ban"})," file where the banned IP addresses are stored. Should be used after unbanning and IP address."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon reloadlog"})}),(0,i.jsxs)(n.td,{children:["Reloads the ",(0,i.jsx)(n.code,{children:"server_log.txt"}),". Useful for automatic log rotation. Can be triggered by sending the ",(0,i.jsx)(n.code,{children:"SIGUSR1"})," signal to the server (Linux server only)."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon say"})}),(0,i.jsxs)(n.td,{children:["shows a message to the players in the client-console (example: ",(0,i.jsx)(n.code,{children:"/rcon say hello"})," will show as ",(0,i.jsx)(n.code,{children:"Admin: hello"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon players"})}),(0,i.jsx)(n.td,{children:"Shows the players that are in the server (with their name, IP & ping)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon banip [IP]"})}),(0,i.jsxs)(n.td,{children:["Ban the given IP (",(0,i.jsx)(n.em,{children:"example: /rcon banip 127.0.0.1"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon unbanip [IP]"})}),(0,i.jsxs)(n.td,{children:["Unban the given IP (",(0,i.jsx)(n.em,{children:"example: /rcon unbanip 127.0.0.1"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon gravity"})}),(0,i.jsxs)(n.td,{children:["Changes the gravity (",(0,i.jsx)(n.em,{children:"example: /rcon gravity 0.008"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon weather [ID]"})}),(0,i.jsxs)(n.td,{children:["Changes the weather (",(0,i.jsx)(n.em,{children:"example: /rcon weather 1"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon loadfs"})}),(0,i.jsxs)(n.td,{children:["Loads the given filterscript (",(0,i.jsx)(n.em,{children:"example: /rcon loadfs adminfs"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon weburl [server url]"})}),(0,i.jsx)(n.td,{children:"Changes the server URL in the masterlists/SA-MP client"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon unloadfs"})}),(0,i.jsxs)(n.td,{children:["Unload the given filterscript (",(0,i.jsx)(n.em,{children:"example: /rcon unloadfs adminfs"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon reloadfs"})}),(0,i.jsxs)(n.td,{children:["Reloads the given filterscript (",(0,i.jsx)(n.em,{children:"example: /rcon reloadfs adminfs"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon rcon\\_password [PASSWORD]"})}),(0,i.jsx)(n.td,{children:"Change the rcon's password"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon password [password]"})}),(0,i.jsx)(n.td,{children:"Sets/resets the server password"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon messageslimit [count]"})}),(0,i.jsx)(n.td,{children:"Change the number of messages per second a client sends to the server. (default 500)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon ackslimit [count]"})}),(0,i.jsx)(n.td,{children:"Change the limit of acks (default 3000)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon messageholelimit [count]"})}),(0,i.jsx)(n.td,{children:"Change the limit of message holes (default 3000)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon playertimeout [limit m/s]"})}),(0,i.jsx)(n.td,{children:"Change the time in milliseconds until a player timeouts when not sending any packets. (default 1000)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/rcon language [language]"})}),(0,i.jsxs)(n.td,{children:["Change the server language (",(0,i.jsx)(n.em,{children:"example: /rcon language English"}),"). Shown in server browser."]})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"The above four limits/counts are just made to avoid several tools which can attack any SA-MP server by freezing it or crashing. So, simply, just set them according to your server. The default values are default, if you see any wrong kicks, just increase the values as soon as possible so that the innocent players won't get kicked by it."}),"\n",(0,i.jsx)(n.h3,{id:"related-callbacks-and-functions",children:"Related Callbacks and Functions"}),"\n",(0,i.jsx)(n.p,{children:"The following callbacks and functions might be useful, as they're related to this article in one way or another."}),"\n",(0,i.jsx)(n.h4,{id:"callbacks",children:"Callbacks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../scripting/callbacks/OnRconLoginAttempt",children:"OnRconLoginAttempt"}),": Called when an attempt to login to RCON is made."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"functions",children:"Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"../scripting/functions/IsPlayerAdmin",children:"IsPlayerAdmin"}),": Checks if a player is logged into RCON."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"../scripting/functions/SendRconCommand",children:"SendRconCommand"}),": Sends an RCON command via the script."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}}}]);