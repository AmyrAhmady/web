"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[60544],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}},49393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/Kick","title":"Kick","description":"Kicks a player from the server. They will have to quit the game and re-connect if they wish to continue playing.","source":"@site/docs/scripting/functions/Kick.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Kick","permalink":"/hu/docs/scripting/functions/Kick","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/Kick.md","tags":[{"inline":true,"label":"player","permalink":"/hu/docs/tags/player"},{"inline":true,"label":"administration","permalink":"/hu/docs/tags/administration"}],"version":"current","frontMatter":{"title":"Kick","sidebar_label":"Kick","description":"Kicks a player from the server. They will have to quit the game and re-connect if they wish to continue playing.","tags":["player","administration"]},"sidebar":"docsSidebar","previous":{"title":"IsVehicleStreamedIn","permalink":"/hu/docs/scripting/functions/IsVehicleStreamedIn"},"next":{"title":"KillTimer","permalink":"/hu/docs/scripting/functions/KillTimer"}}');var s=t(74848),r=t(28453);const a={title:"Kick",sidebar_label:"Kick",description:"Kicks a player from the server. They will have to quit the game and re-connect if they wish to continue playing.",tags:["player","administration"]},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Kicks a player from the server. They will have to quit the game and re-connect if they wish to continue playing."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"The ID of the player to kick."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"This function always returns 1, even if the function failed to execute (player specified doesn't exist)."}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Any action taken directly before Kick() (such as sending a message with ",(0,s.jsx)(n.a,{href:"SendClientMessage",children:"SendClientMessage"}),") will not reach the player. A timer must be used to delay the kick."]})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'// In order to display a message (eg. reason) for the player before the connection is closed\n// you have to use a timer to create a delay. This delay only needs to be a few milliseconds long,\n// but this example uses a full second just to be on the safe side.\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/kickme", true) == 0)\n    {\n        // Kick the player who executed this command.\n\n        // First, send them a message.\n        SendClientMessage(playerid, 0xFF0000FF, "You have been kicked!");\n\n        // Actually kick them a second later on a timer.\n        SetTimerEx("DelayedKick", 1000, false, "i", playerid);\n        return 1;\n    }\n    return 0;\n}\n\nforward DelayedKick(playerid);\npublic DelayedKick(playerid)\n{\n    Kick(playerid);\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"Ban",children:"Ban"}),": Ban a player from playing on the server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"BanEx",children:"BanEx"}),": Ban a player with a custom reason."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);