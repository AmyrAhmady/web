"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[30822],{14865:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"scripting/callbacks/OnRconCommand","title":"OnRconCommand","description":"This callback is called when a command is sent through the server console, remote RCON, or via the in-game \\"/rcon command\\".","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/callbacks/OnRconCommand.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnRconCommand","permalink":"/th/docs/scripting/callbacks/OnRconCommand","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnRconCommand.md","tags":[],"version":"current","frontMatter":{"title":"OnRconCommand","sidebar_label":"OnRconCommand","description":"This callback is called when a command is sent through the server console, remote RCON, or via the in-game \\"/rcon command\\".","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerWeaponShot","permalink":"/th/docs/scripting/callbacks/OnPlayerWeaponShot"},"next":{"title":"OnRconLoginAttempt","permalink":"/th/docs/scripting/callbacks/OnRconLoginAttempt"}}');var o=t(74848),a=t(28453);const l={title:"OnRconCommand",sidebar_label:"OnRconCommand",description:'This callback is called when a command is sent through the server console, remote RCON, or via the in-game "/rcon command".',tags:[]},c=void 0,s={},r=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,o.jsx)(e.p,{children:'This callback is called when a command is sent through the server console, remote RCON, or via the in-game "/rcon command".'}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Name"}),(0,o.jsx)(e.th,{children:"Description"})]})}),(0,o.jsx)(e.tbody,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"cmd[]"}),(0,o.jsx)(e.td,{children:"A string containing the command that was typed, as well as any passed parameters."})]})})]}),"\n",(0,o.jsx)(e.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,o.jsx)(e.p,{children:"It is always called first in filterscripts so returning 1 there blocks gamemode from seeing it."}),"\n",(0,o.jsx)(e.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-c",children:'public OnRconCommand(cmd[])\n{\n    printf("[RCON]: You typed \'/rcon %s\'!", cmd);\n    return 0;\n}\npublic OnRconCommand(cmd[])\n{\n    if (!strcmp(cmd, "hello", true))\n    {\n        SendClientMessageToAll(0xFFFFFFAA, "Hello World!");\n        print("You said hello to the world."); // This will appear to the player who typed the rcon command in the chat in white\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsx)(e.p,{children:'"/rcon " is not included in "cmd" when a player types a command. If you use the "print" function here, it will send a message to the player who typed the command in-game as well as the log. This callback is not called when the player is not logged in as RCON admin. When the player is not logged in as RCON admin and uses /rcon login, this callback will not be called and OnRconLoginAttempt is called instead. However, when the player is logged in as RCON admin, the use of this command will call this callback.'})}),"\n",(0,o.jsx)(e.admonition,{type:"warning",children:(0,o.jsx)(e.p,{children:"You will need to include this callback in a loaded filterscript for it to work in the gamemode!"})}),"\n",(0,o.jsx)(e.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"/th/docs/scripting/functions/IsPlayerAdmin",children:"IsPlayerAdmin"}),": Checks if a player is logged into RCON."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"/th/docs/scripting/callbacks/OnRconLoginAttempt",children:"OnRconLoginAttempt"}),": Called when an attempt to login to RCON is made."]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>c});var i=t(96540);const o={},a=i.createContext(o);function l(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);