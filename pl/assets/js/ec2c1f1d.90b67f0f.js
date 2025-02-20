"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[18092],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const a={},l=i.createContext(a);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(l.Provider,{value:n},e.children)}},74800:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"scripting/callbacks/OnRconCommand","title":"OnRconCommand","description":"This callback is called when a command is sent through the server console, RCON, or via the in-game \\"/rcon command\\".","source":"@site/docs/scripting/callbacks/OnRconCommand.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnRconCommand","permalink":"/pl/docs/scripting/callbacks/OnRconCommand","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnRconCommand.md","tags":[{"inline":true,"label":"rcon","permalink":"/pl/docs/tags/rcon"},{"inline":true,"label":"administration","permalink":"/pl/docs/tags/administration"}],"version":"current","frontMatter":{"title":"OnRconCommand","sidebar_label":"OnRconCommand","description":"This callback is called when a command is sent through the server console, RCON, or via the in-game \\"/rcon command\\".","tags":["rcon","administration"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerWeaponShot","permalink":"/pl/docs/scripting/callbacks/OnPlayerWeaponShot"},"next":{"title":"OnRconLoginAttempt","permalink":"/pl/docs/scripting/callbacks/OnRconLoginAttempt"}}');var a=t(74848),l=t(28453);const s={title:"OnRconCommand",sidebar_label:"OnRconCommand",description:'This callback is called when a command is sent through the server console, RCON, or via the in-game "/rcon command".',tags:["rcon","administration"]},o=void 0,c={},r=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:'This callback is called when a command is sent through the server console, RCON (Remote Console), or via the in-game "/rcon command".'}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"cmd[]"}),(0,a.jsx)(n.td,{children:"A string containing the command that was typed, along with any passed parameters."})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"It is always called first in filterscripts so returning 1 on it blocks the main script from processing it."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'public OnRconCommand(cmd[])\n{\n    printf("[RCON]: You typed \'/rcon %s\'!", cmd);\n    return 0;\n}\n\npublic OnRconCommand(cmd[])\n{\n    if (!strcmp(cmd, "hello", true))\n    {\n        SendClientMessageToAll(0xFFFFFFAA, "Hello World!");\n        print("You said hello to the world."); // This will appear to the player who typed the rcon command in the chat in white\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsxs)(n.admonition,{type:"warning",children:[(0,a.jsx)(n.p,{children:"The /rcon prefix is not included in the cmd parameter when a player types a command. If you use the print function here, it will send a message to both the player who typed the command in-game and the server log."}),(0,a.jsx)(n.p,{children:"This callback is not called if the player is not logged in as an RCON admin. When a player uses /rcon login to log in, this callback will not be called, instead, OnRconLoginAttempt is called. Once logged in as an RCON admin, any subsequent commands will trigger this callback."})]}),"\n",(0,a.jsxs)(n.admonition,{type:"warning",children:[(0,a.jsx)(n.p,{children:"In SA-MP, you need to include this callback in a loaded filterscript for it to work."}),(0,a.jsx)(n.p,{children:"However, this issue was fixed in open.mp."})]}),"\n",(0,a.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnRconLoginAttempt",children:"OnRconLoginAttempt"}),": This callback is called when an attempt to login to RCON is made."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/IsPlayerAdmin",children:"IsPlayerAdmin"}),": Checks if a player is logged into RCON."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/SetPlayerAdmin",children:"SetPlayerAdmin"}),": Sets the player as an RCON admin."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);