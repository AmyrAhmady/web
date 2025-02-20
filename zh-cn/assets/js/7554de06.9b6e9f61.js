"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[13487],{28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>s});var t=i(96540);const l={},r=t.createContext(l);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(r.Provider,{value:n},e.children)}},66618:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"tutorials/cooldowns","title":"Cooldowns","description":"A tutorial for writing cooldowns for limiting user actions using tick counts and avoiding the use of timers.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorials/cooldowns.md","sourceDirName":"tutorials","slug":"/tutorials/cooldowns","permalink":"/zh-cn/docs/tutorials/cooldowns","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/tutorials/cooldowns.md","tags":[],"version":"current","frontMatter":{"title":"Cooldowns","sidebar_label":"Cooldowns","description":"A tutorial for writing cooldowns for limiting user actions using tick counts and avoiding the use of timers."},"sidebar":"docsSidebar","previous":{"title":"Color Fix","permalink":"/zh-cn/docs/tutorials/colorfix"},"next":{"title":"\u670d\u52a1\u5668\u53d8\u91cf\u7cfb\u7edf","permalink":"/zh-cn/docs/tutorials/servervariablesystem"}}');var l=i(74848),r=i(28453);const c={title:"Cooldowns",sidebar_label:"Cooldowns",description:"A tutorial for writing cooldowns for limiting user actions using tick counts and avoiding the use of timers."},s=void 0,a={},o=[{value:"\u4f7f\u7528\u8ba1\u65f6\u5668",id:"\u4f7f\u7528\u8ba1\u65f6\u5668",level:2},{value:"\u4f7f\u7528 <code>GetTickCount()</code> \u548c <code>gettime()</code>",id:"\u4f7f\u7528-gettickcount-\u548c-gettime",level:2},{value:"\u51b7\u5374\u65f6\u95f4",id:"\u51b7\u5374\u65f6\u95f4",level:3},{value:"\u79d2\u8868",id:"\u79d2\u8868",level:3},{value:"\u4ee3\u7801\u89e3\u6790",id:"\u4ee3\u7801\u89e3\u6790",level:4},{value:"\u603b\u7ed3\u4e0e\u8bf4\u660e",id:"\u603b\u7ed3\u4e0e\u8bf4\u660e",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u672c\u6559\u7a0b\u6db5\u76d6\u4e86\u52a8\u4f5c\u6e38\u620f\u4e2d\u5e38\u7528\u7684\u4e00\u79cd\u6e38\u620f\u673a\u5236\uff1a\u51b7\u5374\u65f6\u95f4\u3002\u51b7\u5374\u65f6\u95f4\u662f\u4e00\u79cd\u9650\u5236\u73a9\u5bb6\u6267\u884c\u67d0\u4e9b\u64cd\u4f5c\u9891\u7387\u7684\u5de5\u5177\u3002\u8fd9\u53ef\u80fd\u5305\u62ec\u4f7f\u7528\u67d0\u79cd\u6280\u80fd\uff08\u4f8b\u5982\u6cbb\u7597\uff09\u6216\u53d1\u9001\u804a\u5929\u6d88\u606f\u3002\u5b83\u5141\u8bb8\u4f60\u964d\u4f4e\u73a9\u5bb6\u6267\u884c\u67d0\u4e9b\u64cd\u4f5c\u7684\u9891\u7387\uff0c\u65e2\u53ef\u4ee5\u7528\u4e8e\u6e38\u620f\u5e73\u8861\uff0c\u4e5f\u53ef\u4ee5\u9632\u6b62\u9ad8\u9891\u7387\u7684\u6cdb\u6ee5\u64cd\u4f5c."}),"\n",(0,l.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u6211\u5c06\u5c55\u793a\u4e00\u79cd_\u4e0d\u826f_\u7684\u529e\u6cd5\uff0c\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"SetTimer"})," \u66f4\u65b0\u72b6\u6001\u7684\u5b9e\u73b0\u51b7\u5374\u65f6\u95f4."]}),"\n",(0,l.jsx)(n.h2,{id:"\u4f7f\u7528\u8ba1\u65f6\u5668",children:"\u4f7f\u7528\u8ba1\u65f6\u5668"}),"\n",(0,l.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u5047\u8bbe\u4f60\u6709\u4e00\u4e2a\u7279\u5b9a\u7684\u52a8\u4f5c\u53ea\u80fd\u6bcf\u9694\u51e0\u79d2\u6267\u884c\u4e00\u6b21\uff0c\u6211\u770b\u5230\u5f88\u591a\u4eba\uff08\u5305\u62ecSouthclaws\u591a\u5e74\u524d\u4e5f\u662f\u5982\u6b64\uff09\u4f1a\u8fd9\u6837\u505a:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'static bool:IsPlayerAllowedToDoThing[MAX_PLAYERS];\n\nOnPlayerInteractWithServer(playerid)\n/* \u8fd9\u53ef\u4ee5\u662f\u73a9\u5bb6\u8fdb\u884c\u7684\u4efb\u4f55\u8f93\u5165\u4e8b\u4ef6\uff0c\u4f8b\u5982:\n *  \u8f93\u5165\u547d\u4ee4\n *  \u62fe\u53d6\u7269\u54c1\n *  \u8fdb\u5165\u68c0\u67e5\u70b9\n *  \u6309\u4e0b\u6309\u94ae\n *  \u8fdb\u5165\u67d0\u4e2a\u533a\u57df\n *  \u4f7f\u7528\u5bf9\u8bdd\u6846\n */\n{\n    // \u4ec5\u5f53\u73a9\u5bb6\u88ab\u5141\u8bb8\u65f6\u624d\u6267\u884c\n    if (IsPlayerAllowedToDoThing[playerid])\n    {\n        // \u6267\u884c\u73a9\u5bb6\u8bf7\u6c42\u7684\u64cd\u4f5c\n        DoTheThingThePlayerRequested();\n\n        // \u7981\u6b62\u73a9\u5bb6\u518d\u6b21\u6267\u884c\u64cd\u4f5c\n        IsPlayerAllowedToDoThing[playerid] = false;\n\n        // 10\u79d2\u540e\u5141\u8bb8\u73a9\u5bb6\u518d\u6b21\u6267\u884c\u64cd\u4f5c\n        SetTimerEx("AllowPlayer", 10000, false, "d", playerid);\n\n        return 1;\n    }\n    else\n    {\n        SendClientMessage(playerid, -1, "\u4f60\u8fd8\u4e0d\u80fd\u6267\u884c\u8be5\u64cd\u4f5c!");\n\n        return 0;\n    }\n}\n\n// \u73a9\u5bb6\u6267\u884c\u64cd\u4f5c10\u79d2\u540e\u8c03\u7528\npublic AllowPlayer(playerid)\n{\n    IsPlayerAllowedToDoThing[playerid] = true;\n    SendClientMessage(playerid, -1, "\u4f60\u53ef\u4ee5\u518d\u6b21\u6267\u884c\u64cd\u4f5c\u4e86! :D");\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u6837\u505a\u6548\u679c\u4e0d\u9519\uff0c\u73a9\u5bb6\u5728\u4f7f\u7528\u64cd\u4f5c\u540e10\u79d2\u5185\u65e0\u6cd5\u518d\u6b21\u6267\u884c\u8be5\u64cd\u4f5c."}),"\n",(0,l.jsx)(n.p,{children:"\u518d\u4e3e\u4e00\u4e2a\u4f8b\u5b50\uff0c\u8fd9\u662f\u4e00\u4e2a\u6d4b\u91cf\u73a9\u5bb6\u5b8c\u6210\u4e00\u4e2a\u7b80\u5355\u7684\u70b9\u5230\u70b9\u6bd4\u8d5b\u6240\u9700\u65f6\u95f4\u7684\u79d2\u8868:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'static\n    StopWatchTimerID[MAX_PLAYERS],\n    StopWatchTotalTime[MAX_PLAYERS];\n\nStartPlayerRace(playerid)\n{\n    // \u6bcf\u79d2\u8c03\u7528\u4e00\u6b21\u51fd\u6570\n    StopWatchTimerID[playerid] = SetTimerEx("StopWatch", 1000, true, "d", playerid);\n}\n\npublic StopWatch(playerid)\n{\n    // \u589e\u52a0\u79d2\u8ba1\u6570\u5668\n    StopWatchTotalTime[playerid]++;\n}\n\nOnPlayerFinishRace(playerid)\n{\n    new str[128];\n\n    format(str, 128, "\u4f60\u7528\u4e86 %d \u79d2\u5b8c\u6210\u6bd4\u8d5b", StopWatchTotalTime[playerid]);\n    SendClientMessage(playerid, -1, str);\n\n    KillTimer(StopWatchTimerID[playerid]);\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u4e24\u4e2a\u4f8b\u5b50\u5f88\u5e38\u89c1\uff0c\u800c\u4e14\u5b83\u4eec\u7684\u6548\u679c\u53ef\u80fd\u4f1a\u4e0d\u9519\u3002\u7136\u800c\uff0c\u6709\u4e00\u79cd\u66f4\u597d\u7684\u65b9\u6cd5\u6765\u5b9e\u73b0\u8fd9\u4e9b\u529f\u80fd\uff0c\u5b83\u66f4\u7cbe\u786e\uff0c\u751a\u81f3\u53ef\u4ee5\u7cbe\u786e\u5230\u6beb\u79d2!"}),"\n",(0,l.jsxs)(n.h2,{id:"\u4f7f\u7528-gettickcount-\u548c-gettime",children:["\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"GetTickCount()"})," \u548c ",(0,l.jsx)(n.code,{children:"gettime()"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"GetTickCount()"})," \u662f\u4e00\u4e2a\u8fd4\u56de\u670d\u52a1\u5668\u8fdb\u7a0b\u542f\u52a8\u540e\u7ecf\u8fc7\u7684\u6beb\u79d2\u6570\u7684\u51fd\u6570. ",(0,l.jsx)(n.code,{children:"gettime()"})," \u8fd4\u56de\u81ea1970\u5e741\u67081\u65e5\u4ee5\u6765\u7684\u79d2\u6570\uff0c\u4e5f\u5c31\u662f\u6240\u8c13\u7684Unix\u65f6\u95f4\u6233."]}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u4f60\u5728\u4e24\u4e2a\u4e0d\u540c\u7684\u65f6\u95f4\u8c03\u7528\u8fd9\u4e9b\u51fd\u6570\uff0c\u5e76\u5c06\u7b2c\u4e8c\u4e2a\u65f6\u95f4\u51cf\u53bb\u7b2c\u4e00\u4e2a\u65f6\u95f4\uff0c\u4f60\u5c31\u53ef\u4ee5\u5f97\u5230\u8fd9\u4e24\u4e2a\u4e8b\u4ef6\u4e4b\u95f4\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5206\u522b\u4ee5\u6beb\u79d2\u6216\u79d2\u4e3a\u5355\u4f4d\uff01\u8bf7\u770b\u8fd9\u4e2a\u4f8b\u5b50:"}),"\n",(0,l.jsx)(n.h3,{id:"\u51b7\u5374\u65f6\u95f4",children:"\u51b7\u5374\u65f6\u95f4"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'static PlayerAllowedTick[MAX_PLAYERS];\n\nOnPlayerInteractWithServer(playerid)\n{\n   if (GetTickCount() - PlayerAllowedTick[playerid] > 10000)\n   // \u4ec5\u5f53\u5f53\u524d\u7684Tick\u4e0e\u4e0a\u4e00\u6b21\u7684Tick\u5dee\u503c\u5927\u4e8e10000\u65f6\u624d\u53ef\u4ee5\u6267\u884c\u64cd\u4f5c.\n   // \u6362\u53e5\u8bdd\u8bf4\uff0c\u53ea\u6709\u5f53\u4e24\u6b21\u64cd\u4f5c\u4e4b\u95f4\u7684\u95f4\u9694\u8d85\u8fc710\u79d2\u65f6\u624d\u4f1a\u6267\u884c.\n   {\n       DoTheThingThePlayerRequested();\n       PlayerAllowedTick[playerid] = GetTickCount(); // \u7528\u6700\u65b0\u65f6\u95f4\u66f4\u65b0Tick\u8ba1\u6570.\n\n       return 1;\n   }\n   else\n   {\n       SendClientMessage(playerid, -1, "\u4f60\u8fd8\u4e0d\u80fd\u6267\u884c\u8be5\u64cd\u4f5c!");\n\n       return 0;\n   }\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u6216\u8005\uff0c\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"gettime()"})," \u7684\u7248\u672c:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'static PlayerAllowedSeconds[MAX_PLAYERS];\n\nOnPlayerInteractWithServer(playerid)\n{\n   if (gettime() - PlayerAllowedSeconds[playerid] > 10)\n   // \u4ec5\u5f53\u5f53\u524d\u79d2\u6570\u4e0e\u4e0a\u6b21\u79d2\u6570\u5dee\u503c\u5927\u4e8e10\u65f6\u6267\u884c\u64cd\u4f5c.\n   // \u6362\u53e5\u8bdd\u8bf4\uff0c\u53ea\u6709\u5f53\u4e24\u6b21\u64cd\u4f5c\u4e4b\u95f4\u7684\u95f4\u9694\u8d85\u8fc710\u79d2\u65f6\u624d\u4f1a\u6267\u884c.\n   {\n       DoTheThingThePlayerRequested();\n       PlayerAllowedSeconds[playerid] = gettime(); // \u7528\u6700\u65b0\u65f6\u95f4\u66f4\u65b0\u79d2\u6570.\n\n       return 1;\n   }\n   else\n   {\n       SendClientMessage(playerid, -1, "\u4f60\u8fd8\u4e0d\u80fd\u6267\u884c\u8be5\u64cd\u4f5c!");\n\n       return 0;\n   }\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u91cc\u7684\u4ee3\u7801\u5c11\u4e86\u5f88\u591a\uff0c\u4e0d\u9700\u8981\u516c\u5171\u51fd\u6570\u6216\u8ba1\u65f6\u5668\u3002\u5982\u679c\u4f60\u613f\u610f\uff0c\u8fd8\u53ef\u4ee5\u5c06\u5269\u4f59\u51b7\u5374\u65f6\u95f4\u4e00\u5e76\u63d0\u793a\u7ed9\u73a9\u5bb6:"}),"\n",(0,l.jsx)(n.p,{children:"(\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u6211\u4f7f\u7528\u4e86 SendFormatMessage, \u5728 open.mp \u4e2d SendClientMessage \u81ea\u5e26 Format \u529f\u80fd)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'SendFormatMessage(\n    playerid,\n    -1,\n    "\u4f60\u8fd8\u4e0d\u80fd\u6267\u884c\u8be5\u64cd\u4f5c\uff01\u4f60\u53ef\u4ee5\u5728 %d \u6beb\u79d2\u540e\u518d\u6b21\u6267\u884c",\n    10000 - (GetTickCount() - PlayerAllowedTick[playerid])\n);\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u57fa\u7840\u7684\u4f8b\u5b50\uff0c\u6700\u597d\u5c06\u8be5\u6beb\u79d2\u503c\u8f6c\u6362\u4e3a ",(0,l.jsx)(n.code,{children:"\u5206\u949f:\u79d2.\u6beb\u79d2"})," \u683c\u5f0f\u7684\u5b57\u7b26\u4e32\uff0c\u6211\u4f1a\u5728\u6700\u540e\u8d34\u51fa\u8fd9\u6bb5\u4ee3\u7801."]}),"\n",(0,l.jsx)(n.h3,{id:"\u79d2\u8868",children:"\u79d2\u8868"}),"\n",(0,l.jsx)(n.p,{children:"\u5e0c\u671b\u4f60\u5df2\u7ecf\u770b\u51fa\u4f7f\u7528\u6b64\u65b9\u6cd5\u83b7\u53d6\u4e8b\u4ef6\u4e4b\u95f4\u7684\u95f4\u9694\u6709\u591a\u5f3a\u5927\uff0c\u8ba9\u6211\u4eec\u6765\u770b\u53e6\u4e00\u4e2a\u4f8b\u5b50"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'static Stopwatch[MAX_PLAYERS];\n\nStartPlayerRace(playerid)\n{\n    Stopwatch[playerid] = GetTickCount();\n}\n\nOnPlayerFinishRace(playerid)\n{\n    new\n        interval,\n        str[128];\n\n    interval = GetTickCount() - Stopwatch[playerid];\n\n    format(str, 128, "\u4f60\u7528\u4e86 %d \u6beb\u79d2\u5b8c\u6210\u6bd4\u8d5b", interval);\n    SendClientMessage(playerid, -1, str);\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5f53\u73a9\u5bb6\u5f00\u59cb\u6bd4\u8d5b\u65f6\uff0c\u5c06\u5f53\u524d\u7684Tick\u8ba1\u6570\u4fdd\u5b58\u5230\u73a9\u5bb6\u53d8\u91cf\u4e2d\u3002\u5f53\u4ed6\u5b8c\u6210\u6bd4\u8d5b\u65f6\uff0c\u5f53\u524d\u7684Tick\uff08\u5b8c\u6210\u65f6\u7684Tick\uff09\u51cf\u53bb\u521d\u59cbTick\uff08\u8f83\u5c0f\u7684\u503c\uff09\uff0c\u4ece\u800c\u5f97\u51fa\u6bd4\u8d5b\u5f00\u59cb\u548c\u7ed3\u675f\u4e4b\u95f4\u7684\u6beb\u79d2\u6570."}),"\n",(0,l.jsx)(n.h4,{id:"\u4ee3\u7801\u89e3\u6790",children:"\u4ee3\u7801\u89e3\u6790"}),"\n",(0,l.jsx)(n.p,{children:"\u73b0\u5728\u8ba9\u6211\u4eec\u5bf9\u4ee3\u7801\u8fdb\u884c\u4e00\u4e9b\u89e3\u6790."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"new Stopwatch[MAX_PLAYERS];\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528\u5b83\u6765\u4fdd\u5b58Tick\u8ba1\u6570\uff0c\u5e76\u5728\u53e6\u4e00\u4e2a\u65f6\u95f4\u70b9\uff08\u5373\u5728\u7a0d\u540e\u4f1a\u4f7f\u7528\u5230\u7684\u53e6\u4e00\u4e2a\u51fd\u6570\u4e2d\uff09\u68c0\u7d22\u8be5\u503c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"StartPlayerRace(playerid)\n{\n    Stopwatch[playerid] = GetTickCount();\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u662f\u73a9\u5bb6\u5f00\u59cb\u6bd4\u8d5b\u7684\u65f6\u95f4\uff0c\u8bb0\u5f55\u5f53\u524d\u7684Tick\u8ba1\u6570\u3002\u5982\u679c\u6b64\u65f6\u662f\u5728\u670d\u52a1\u5668\u542f\u52a8\u540e1\u5206\u949f\uff0c\u53d8\u91cf\u7684\u503c\u5c06\u662f60,000\uff0c\u56e0\u4e3a\u8fd9\u662f60\u79d2\uff0c\u6bcf\u79d2\u6709\u4e00\u5343\u6beb\u79d2."}),"\n",(0,l.jsx)(n.p,{children:"\u597d\u4e86\uff0c\u73b0\u5728\u6211\u4eec\u5c06\u8be5\u73a9\u5bb6\u7684\u53d8\u91cf\u8bbe\u7f6e\u4e3a60,000\uff0c\u4ed6\u57281\u520640\u79d2\u540e\u5b8c\u6210\u6bd4\u8d5b:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'OnPlayerFinishRace(playerid)\n{\n    new\n        interval,\n        str[128];\n\n    interval = GetTickCount() - Stopwatch[playerid];\n\n    format(str, 128, "\u4f60\u7528\u4e86 %d \u6beb\u79d2\u5b8c\u6210\u6bd4\u8d5b", interval);\n    SendClientMessage(playerid, -1, str);\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u91cc\u5c31\u662f\u95f4\u9694\u7684\u8ba1\u7b97\u90e8\u5206\uff0c\u5b9e\u9645\u4e0a\u53ea\u662f\u4e24\u4e2a\u503c\u76f8\u51cf!"}),"\n",(0,l.jsx)(n.p,{children:"GetTickCount() \u8fd4\u56de\u5f53\u524d\u7684Tick\u8ba1\u6570\uff0c\u56e0\u6b64\u5b83\u4f1a\u6bd4\u521d\u59cbTick\u8ba1\u6570\u5927\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u4ece\u5f53\u524dTick\u8ba1\u6570\u4e2d\u51cf\u53bb\u521d\u59cbTick\u8ba1\u6570\uff0c\u4ee5\u83b7\u53d6\u4e24\u4e2a\u65f6\u95f4\u70b9\u4e4b\u95f4\u7684\u95f4\u9694."}),"\n",(0,l.jsx)(n.p,{children:"\u6240\u4ee5\uff0c\u6b63\u5982\u6211\u4eec\u6240\u8bf4\uff0c\u73a9\u5bb6\u57281\u520640\u79d2\u540e\uff08\u5373: 100\u79d2/100,000\u6beb\u79d2\uff09\u5b8c\u6210\u6bd4\u8d5b\uff0cGetTickCount \u5c06\u8fd4\u56de160,000\u3002\u5c06\u521d\u59cb\u503c\uff08\u537360,000\uff09\u4ece\u65b0\u503c\uff08\u5373160,000\uff09\u4e2d\u51cf\u53bb\uff0c\u4f60\u4f1a\u5f97\u5230100,000\u6beb\u79d2\uff0c\u4e5f\u5c31\u662f1\u520640\u79d2\uff0c\u8fd9\u662f\u73a9\u5bb6\u5b8c\u6210\u6bd4\u8d5b\u6240\u82b1\u7684\u65f6\u95f4!"}),"\n",(0,l.jsx)(n.h2,{id:"\u603b\u7ed3\u4e0e\u8bf4\u660e",children:"\u603b\u7ed3\u4e0e\u8bf4\u660e"}),"\n",(0,l.jsx)(n.p,{children:"\u6240\u4ee5\uff01\u6211\u4eec\u5b66\u5230\u4e86:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"GetTickCount \u8fd4\u56de\u81ea\u670d\u52a1\u5668\u6240\u5728\u7684\u8ba1\u7b97\u673a\u7cfb\u7edf\u542f\u52a8\u4ee5\u6765\u7684\u6beb\u79d2\u6570."}),"\n",(0,l.jsx)(n.li,{children:"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5728\u4e24\u4e2a\u65f6\u95f4\u95f4\u9694\u7684\u5730\u65b9\u8c03\u7528\u6b64\u51fd\u6570\u4ece\u800c\u5229\u7528\u8fd9\u4e00\u70b9, \u9996\u5148\u5c06\u7b2c\u4e00\u4e2a\u65f6\u95f4\u4fdd\u5b58\u5230\u4e00\u4e2a\u53d8\u91cf\u4e2d\uff0c\u901a\u8fc7\u6bd4\u8f83\u8fd9\u4e24\u4e2a\u503c\uff0c\u53ef\u4ee5\u5f97\u5230\u4e24\u4e2a\u4e8b\u4ef6\u4e4b\u95f4\u7684\u6beb\u79d2\u95f4\u9694."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u6700\u540e\uff0c\u4f60\u4e0d\u60f3\u8ba9\u73a9\u5bb6\u770b\u5230\u6beb\u79d2\u5355\u4f4d\u7684\u65f6\u95f4\u503c\uff01\u5982\u679c\u4ed6\u4eec\u82b1\u4e00\u4e2a\u5c0f\u65f6\u5b8c\u6210\u6bd4\u8d5b\u600e\u4e48\u529e?"}),"\n",(0,l.jsx)(n.p,{children:"\u6700\u597d\u4f7f\u7528\u4e00\u4e2a\u51fd\u6570\u5c06\u6beb\u79d2\u8f6c\u6362\u4e3a\u53ef\u8bfb\u7684\u683c\u5f0f\u3002\u4f8b\u5982\uff0c\u524d\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u73a9\u5bb6\u7528\u4e86100,000\u6beb\u79d2\u5b8c\u6210\u6bd4\u8d5b\uff0c\u5982\u679c\u4f60\u544a\u8bc9\u73a9\u5bb6\u4ed6\u7528\u4e86\u8fd9\u4e48\u4e45\uff0c\u4ed6\u4eec\u9700\u8981\u82b1\u66f4\u591a\u65f6\u95f4\u53bb\u7406\u89e3\u8fd9100,000\u6beb\u79d2\u5728\u53ef\u8bfb\u65f6\u95f4\u4e2d\u610f\u5473\u7740\u4ec0\u4e48."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://github.com/ScavengeSurvive/timeutil",children:"\u8fd9\u4e2a\u5305"})," \u5305\u542b\u4e86\u4e00\u4e2a\u5c06\u6beb\u79d2\u683c\u5f0f\u5316\u4e3a\u5b57\u7b26\u4e32\u7684\u51fd\u6570."]}),"\n",(0,l.jsxs)(n.p,{children:["\u5e0c\u671b\u8fd9\u5bf9\u4f60\u6709\u6240\u5e2e\u52a9\uff01\u6211\u5199\u8fd9\u7bc7\u6559\u7a0b\u662f\u56e0\u4e3a\u6700\u8fd1\u5e2e\u52a9\u4e86\u4e00\u4e9b\u4e0d\u61c2\u5982\u4f55\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"GetTickCount()"})," \u6216 ",(0,l.jsx)(n.code,{children:"gettime()"})," \u4f5c\u4e3a\u8ba1\u65f6\u5668\u6216\u83b7\u53d6\u65f6\u95f4\u95f4\u9694\u7b49\u529f\u80fd\u7684\u4eba."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);