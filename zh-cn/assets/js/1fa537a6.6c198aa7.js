"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[54695],{3588:(d,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>j,frontMatter:()=>i,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"server/server.cfg","title":"server.cfg","description":"Server configuration file.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/server/server.cfg.md","sourceDirName":"server","slug":"/server/server.cfg","permalink":"/zh-cn/docs/server/server.cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/server/server.cfg.md","tags":[],"version":"current","frontMatter":{"title":"server.cfg","sidebar_label":"server.cfg","description":"Server configuration file."},"sidebar":"docsSidebar","previous":{"title":"open.mp functions","permalink":"/zh-cn/docs/server/omp-functions"},"next":{"title":"Client Commands","permalink":"/zh-cn/docs/client/ClientCommands"}}');var n=s(74848),t=s(28453);const i={title:"server.cfg",sidebar_label:"server.cfg",description:"Server configuration file."},l=void 0,c={},h=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u63a7\u5236\u53f0",id:"\u63a7\u5236\u53f0",level:2},{value:"\u811a\u672c",id:"\u811a\u672c",level:2},{value:"\u670d\u52a1\u5668\u6d4f\u89c8\u5668",id:"\u670d\u52a1\u5668\u6d4f\u89c8\u5668",level:2},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:2},{value:"\u65e5\u5fd7\u8bb0\u5f55",id:"\u65e5\u5fd7\u8bb0\u5f55",level:2},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:2},{value:"NPCs",id:"npcs",level:2},{value:"\u5ef6\u8fdf\u8865\u507f",id:"\u5ef6\u8fdf\u8865\u507f",level:2},{value:"\u81ea\u5b9a\u4e49\u6a21\u578b",id:"\u81ea\u5b9a\u4e49\u6a21\u578b",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"\u63d0\u793a",id:"\u63d0\u793a",level:2}];function x(d){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...d.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"\u63cf\u8ff0",children:"\u63cf\u8ff0"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"server.cfg"})," \u662f\u4e00\u4e2a\u670d\u52a1\u5668\u914d\u7f6e\u6587\u4ef6\uff0c\u5141\u8bb8\u4f60\u66f4\u6539\u4f60\u7684 SA-MP \u670d\u52a1\u5668\u7684\u5404\u79cd\u8bbe\u7f6e\u3002"]}),"\n",(0,n.jsx)(e.li,{children:"\u8fd9\u4e2a\u6587\u4ef6\u662f\u6bcf\u4e2a\u670d\u52a1\u5668\u5fc5\u9700\u7684\uff0c\u5fc5\u987b\u4f4d\u4e8e\u670d\u52a1\u5668\u76ee\u5f55\u4e2d\uff0c\u653e\u5728\u670d\u52a1\u5668\u5e94\u7528\u7a0b\u5e8f\uff08samp-server.exe\uff09\u65c1\u8fb9\u3002"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"\u63a7\u5236\u53f0",children:"\u63a7\u5236\u53f0"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"\u8bbe\u7f6e"}),(0,n.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(e.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(e.th,{children:"\u53ea\u8bfb"}),(0,n.jsx)(e.th,{children:"\u89c4\u5219"}),(0,n.jsx)(e.th,{children:"\u6548\u679c"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"echo"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32"}),(0,n.jsx)(e.td,{children:"Executing Server Config..."}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsxs)(e.td,{children:["samp-server.exe \u5728\u6267\u884c ",(0,n.jsx)(e.code,{children:"server.cfg"})," \u65f6\u4f1a\u5728\u670d\u52a1\u5668\u63a7\u5236\u53f0\u4e2d\u6253\u5370\u5185\u5bb9\u3002\u4f60\u65e0\u9700\u5bf9\u6b64\u8fdb\u884c\u4efb\u4f55\u66f4\u6539\uff0c\u56e0\u4e3a\u53ea\u6709\u4f60\u80fd\u770b\u5230\u63a7\u5236\u53f0."]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"rcon_password"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32"}),(0,n.jsx)(e.td,{children:"changeme"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u7528\u4e8e\u7ba1\u7406\u670d\u52a1\u5668\u548c\u4f7f\u7528\u8fdc\u7a0b\u63a7\u5236\u53f0\uff08rcon\uff09\u7684\u5bc6\u7801\u3002\u4f60\u5fc5\u987b\u786e\u4fdd\u5c06\u5176\u66f4\u6539\u4e3a\u96be\u4ee5\u7834\u89e3\u7684\u5bc6\u7801\uff0c\u4ee5\u9632\u6b62\u4ed6\u4eba\u63a7\u5236\u4f60\u7684\u670d\u52a1\u5668\u3002\u5982\u679cRCON\u5bc6\u7801\u4ecd\u7136\u662f\u201cchangeme\u201d\uff0c\u4f60\u7684\u670d\u52a1\u5668\u5c06\u65e0\u6cd5\u542f\u52a8!"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"rcon"}),(0,n.jsx)(e.td,{children:"\u5e03\u5c14"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsxs)(e.td,{children:["\u5207\u6362\u662f\u5426\u542f\u7528",(0,n.jsx)(e.a,{href:"RemoteConsole",children:"\u8fdc\u7a0b\u63a7\u5236\u53f0"}),"\u529f\u80fd\u3002\u8bbe\u7f6e\u4e3a1\u542f\u7528\uff0c\u8bbe\u7f6e\u4e3a0\u7981\u7528."]})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"\u811a\u672c",children:"\u811a\u672c"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"\u8bbe\u7f6e"}),(0,n.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(e.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(e.th,{children:"\u53ea\u8bfb"}),(0,n.jsx)(e.th,{children:"\u89c4\u5219"}),(0,n.jsx)(e.th,{children:"\u6548\u679c"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"gamemode(n) (N) (t)"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32"}),(0,n.jsx)(e.td,{children:"gamemode0 grandlarc 1"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u4f4d\u4e8egamemodes\u6587\u4ef6\u5939\u4e2d\u7684.amx\u6587\u4ef6\uff0c\u670d\u52a1\u5668\u5e94\u4f7f\u7528\u8be5\u6587\u4ef6\u4f5c\u4e3a\u6e38\u620f\u6a21\u5f0f\u8fd0\u884c\u3002(n) \u662f\u6e38\u620f\u6a21\u5f0f\u7f16\u53f7\uff0c(N) \u662f\u4e0d\u5e26.amx\u6269\u5c55\u540d\u7684\u6e38\u620f\u6a21\u5f0f\u540d\u79f0\uff0c(t) \u662f\u5728\u5207\u6362\u5230\u4e0b\u4e00\u4e2a\u6e38\u620f\u6a21\u5f0f\u4e4b\u524d\u5e94\u8fd0\u884c\u8be5\u6e38\u620f\u6a21\u5f0f\u7684\u6b21\u6570\u3002"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"filterscripts (N)"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32"}),(0,n.jsx)(e.td,{}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u4f4d\u4e8efilterscripts\u6587\u4ef6\u5939\u4e2d\u7684.amx\u6587\u4ef6\uff0c\u670d\u52a1\u5668\u5e94\u4f7f\u7528\u8be5\u6587\u4ef6\u4f5c\u4e3a\u8fc7\u6ee4\u811a\u672c\u8fd0\u884c\u3002(N) \u662f\u4e0d\u5e26.amx\u6269\u5c55\u540d\u7684\u8fc7\u6ee4\u811a\u672c\u540d\u79f0\u3002\u8fc7\u6ee4\u811a\u672c\u662f\u5728\u6e38\u620f\u6a21\u5f0f\u7684\u540e\u53f0\u8fd0\u884c\u7684\u811a\u672c\uff0c\u7528\u4e8e\u4e3a\u670d\u52a1\u5668\u6dfb\u52a0\u989d\u5916\u529f\u80fd\uff0c\u800c\u65e0\u9700\u7f16\u8f91\u6e38\u620f\u6a21\u5f0f\u3002\u5982\u679c\u60a8\u5e0c\u671b\u5728\u591a\u4e2a\u6e38\u620f\u6a21\u5f0f\u4e4b\u95f4\u643a\u5e26\u7279\u5b9a\u5c5e\u6027\uff0c\u8fd9\u975e\u5e38\u6709\u7528\u3002\u5982\u679c\u60a8\u60f3\u52a0\u8f7d\u591a\u4e2a\u8fc7\u6ee4\u811a\u672c\uff0c\u8bf7\u5c06\u5b83\u4eec\u4f9d\u6b21\u653e\u5728\u4e00\u884c\uff0c\u7528\u7a7a\u683c\u5206\u9694\uff0c\u4f8b\u5982\uff1afilterscripts script1 script2\u3002"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"plugins (N)"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32"}),(0,n.jsx)(e.td,{}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u4f4d\u4e8eplugins\u6587\u4ef6\u5939\u4e2d\u7684.dll\u6216.so\u6587\u4ef6\uff0c\u670d\u52a1\u5668\u5e94\u4f7f\u7528\u8be5\u6587\u4ef6\u4f5c\u4e3a\u63d2\u4ef6\u8fd0\u884c\u3002\u5728Windows\u4e0a\uff0c(N) \u662f\u4e0d\u5e26.dll\u6269\u5c55\u540d\u7684\u63d2\u4ef6\u540d\u79f0\uff1b\u7136\u800c\uff0c\u5728Linux\u4e0a\u9700\u8981\u4f7f\u7528.so\u6269\u5c55\u540d\uff01\u63d2\u4ef6\u662f\u7528\u4e8e\u589e\u5f3a\u6e38\u620f\u6a21\u5f0f\u548c\u8fc7\u6ee4\u811a\u672c\u7684\u811a\u672c\u3002\u5982\u679c\u60a8\u60f3\u52a0\u8f7d\u591a\u4e2a\u63d2\u4ef6\uff0c\u8bf7\u5c06\u5b83\u4eec\u4f9d\u6b21\u653e\u5728\u4e00\u884c\uff0c\u7528\u7a7a\u683c\u5206\u9694\uff0c\u4f8b\u5982\uff1aplugins plugin1 plugin2."})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"\u670d\u52a1\u5668\u6d4f\u89c8\u5668",children:"\u670d\u52a1\u5668\u6d4f\u89c8\u5668"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"\u8bbe\u7f6e"}),(0,n.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(e.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(e.th,{children:"\u53ea\u8bfb"}),(0,n.jsx)(e.th,{children:"\u89c4\u5219"}),(0,n.jsx)(e.th,{children:"\u6548\u679c"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"announce"}),(0,n.jsx)(e.td,{children:"\u5e03\u5c14"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u5207\u6362\u670d\u52a1\u5668\u662f\u5426\u5e94\u8be5\u5728SA-MP\u4e3b\u5217\u8868\u4e2d\u516c\u544a\u3002\u8bbe\u7f6e\u4e3a1\u4ee5\u542f\u7528\uff0c\u8bbe\u7f6e\u4e3a0\u4ee5\u7981\u7528\u3002"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"query"}),(0,n.jsx)(e.td,{children:"\u5e03\u5c14"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u5207\u6362\u670d\u52a1\u5668\u4fe1\u606f\u662f\u5426\u5e94\u663e\u793a\u5728\u670d\u52a1\u5668\u6d4f\u89c8\u5668\u4e2d\u3002\u8bbe\u7f6e\u4e3a1\u4ee5\u542f\u7528\uff0c\u8bbe\u7f6e\u4e3a0\u4ee5\u7981\u7528\u3002\u5373\u4f7f\u7981\u7528\u4e86\u67e5\u8be2\uff0c\u73a9\u5bb6\u4ecd\u7136\u53ef\u4ee5\u52a0\u5165\u670d\u52a1\u5668\uff0c\u4f46\u670d\u52a1\u5668\u6d4f\u89c8\u5668\u5c06\u4e0d\u4f1a\u663e\u793a\u4efb\u4f55\u4fe1\u606f\u3002"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"hostname"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32"}),(0,n.jsx)(e.td,{children:"SA-MP Server"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u5728\u670d\u52a1\u5668\u6d4f\u89c8\u5668\u4e2d\u4ee5\u53ca\u73a9\u5bb6\u8fde\u63a5\u5230\u670d\u52a1\u5668\u65f6\u663e\u793a\u7684\u540d\u79f0\u3002"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"language"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32"}),(0,n.jsx)(e.td,{}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsxs)(e.td,{children:["\u5728\u670d\u52a1\u5668\u6d4f\u89c8\u5668\u4e2d\u663e\u793a\u7684\u8bed\u8a00\u3002\u73a9\u5bb6\u53ef\u4ee5\u4f7f\u7528\u6b64\u9009\u9879\u5728\u670d\u52a1\u5668\u6d4f\u89c8\u5668\u4e2d\u6309\u8bed\u8a00\u8fc7\u6ee4\u670d\u52a1\u5668\u3002",(0,n.jsx)("br",{})," ",(0,n.jsx)("br",{}),(0,n.jsx)(e.strong,{children:"\u6ce8\u610f:"})," \u6b64\u670d\u52a1\u5668\u53d8\u91cf\u57280.3.7\u4e2d\u6dfb\u52a0\uff0c\u5728\u4e4b\u524d\u7684\u7248\u672c\u4e2d\u5c06\u4e0d\u8d77\u4f5c\u7528\u3002"]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"mapname"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32"}),(0,n.jsx)(e.td,{children:"San Andreas"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u5728\u670d\u52a1\u5668\u6d4f\u89c8\u5668\u4e2d\u663e\u793a\u7684\u5730\u56fe\u540d\u79f0\u3002\u6b64\u9879\u53ef\u4ee5\u662f\u4efb\u4f55\u5185\u5bb9\uff0c\u4f8b\u5982\uff1aMy Stunt Map\u3002"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"gamemodetext"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32"}),(0,n.jsx)(e.td,{children:"Unknown"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsxs)(e.td,{children:["\u5728\u670d\u52a1\u5668\u6d4f\u89c8\u5668\u4e2d\u663e\u793a\u7684\u6a21\u5f0f\u3002\u4f7f\u7528 ",(0,n.jsx)(e.a,{href:"../scripting/functions/SetGameModeText",children:"SetGameModeText"})," \u5177\u6709\u76f8\u540c\u6548\u679c\uff0c\u5e76\u8986\u76d6server.cfg\u4e2d\u4f7f\u7528\u7684\u503c\u3002\u5982\u679c\u60a8\u6709\u591a\u4e2a\u9700\u8981\u4e0d\u540c\u6e38\u620f\u6a21\u5f0f\u6587\u672c\u7684\u6e38\u620f\u6a21\u5f0f\uff0c\u8bf7\u4f7f\u7528\u8be5\u51fd\u6570\u3002"]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"weather"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32*"}),(0,n.jsx)(e.td,{children:"10"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsxs)(e.td,{children:["\u670d\u52a1\u5668\u4f7f\u7528\u7684\u5168\u7403\u5929\u6c14\uff0c\u5c06\u663e\u793a\u5728\u670d\u52a1\u5668\u6d4f\u89c8\u5668\u4e2d\u3002\u5728server.cfg\u6587\u4ef6\u4e2d\u4f7f\u7528\u6b64\u8bbe\u7f6e\u4f1a\u5bfc\u81f4\u670d\u52a1\u5668\u5e94\u7528\u7a0b\u5e8f\u5728\u542f\u52a8\u65f6\u5d29\u6e83\u3002\u8bf7\u6539\u7528 ",(0,n.jsx)(e.a,{href:"../scripting/functions/SetWeather",children:"SetWeather"})," \u66f4\u6539\u6b64\u8bbe\u7f6e\u3002"]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"worldtime"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32*"}),(0,n.jsx)(e.td,{children:"12:00"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsxs)(e.td,{children:["\u670d\u52a1\u5668\u4f7f\u7528\u7684\u5168\u7403\u65f6\u95f4\uff0c\u5c06\u663e\u793a\u5728\u670d\u52a1\u5668\u6d4f\u89c8\u5668\u4e2d\u3002\u5728server.cfg\u6587\u4ef6\u4e2d\u4f7f\u7528\u6b64\u8bbe\u7f6e\u65e0\u6548\u3002\u8bf7\u6539\u7528 ",(0,n.jsx)(e.a,{href:"../scripting/functions/SetWorldTime",children:"SetWorldTime"})," \u66f4\u6539\u6b64\u8bbe\u7f6e\u3002"]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"gravity"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32*"}),(0,n.jsx)(e.td,{children:"0.008"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsxs)(e.td,{children:["\u670d\u52a1\u5668\u4f7f\u7528\u7684\u5168\u7403\u91cd\u529b\u3002\u5728server.cfg\u6587\u4ef6\u4e2d\u4f7f\u7528\u6b64\u8bbe\u7f6e\u4f1a\u5bfc\u81f4\u670d\u52a1\u5668\u5e94\u7528\u7a0b\u5e8f\u5728\u542f\u52a8\u65f6\u5d29\u6e83\u3002\u8bf7\u6539\u7528 ",(0,n.jsx)(e.a,{href:"../scripting/functions/SetGravity",children:"SetGravity"})," \u66f4\u6539\u6b64\u8bbe\u7f6e\u3002"]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"weburl"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.a,{href:"http://www.open.mp",children:"www.open.mp"})}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u8bbf\u95ee\u8be5\u7f51\u7ad9\u53ef\u4ee5\u83b7\u53d6\u6709\u5173\u670d\u52a1\u5668\u7684\u66f4\u591a\u4fe1\u606f\u3002"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"version"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32"}),(0,n.jsx)(e.td,{}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u670d\u52a1\u5668\u4f7f\u7528\u7684SA-MP\u7248\u672c\uff0c\u5c06\u663e\u793a\u5728\u670d\u52a1\u5668\u6d4f\u89c8\u5668\u4e2d\u3002\u5728server.cfg\u6587\u4ef6\u4e2d\u4f7f\u7528\u6b64\u8bbe\u7f6e\u65e0\u6548\u3002"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"maxplayers"}),(0,n.jsx)(e.td,{children:"\u6574\u6570"}),(0,n.jsx)(e.td,{children:"50"}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u670d\u52a1\u5668\u53ef\u4ee5\u5bb9\u7eb3\u7684\u6700\u5927\u73a9\u5bb6\u6570\u91cf\u3002\u901a\u8fc7\u66f4\u6539\u6b64\u6570\u5b57\uff0c\u60a8\u53ef\u4ee5\u8c03\u6574\u53ef\u4ee5\u8fdb\u5165\u670d\u52a1\u5668\u7684\u73a9\u5bb6\u6570\u91cf\u3002\u6700\u5927\u503c\u4e3a1000\uff0c\u6700\u5c0f\u503c\u4e3a1\u3002"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"password"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32"}),(0,n.jsx)(e.td,{}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u7528\u4e8e\u9501\u5b9a\u670d\u52a1\u5668\u7684\u5bc6\u7801\u3002\u4f7f\u7528\u6b64\u5bc6\u7801\u65f6\uff0c\u53ea\u6709\u77e5\u9053\u6b64\u5bc6\u7801\u7684\u73a9\u5bb6\u624d\u80fd\u52a0\u5165\u670d\u52a1\u5668\u3002"})]})]})]}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:"[*] \u6709\u4e9b\u8bbe\u7f6e\u4e0e\u4f60\u60f3\u8c61\u7684\u4e0d\u4e00\u6837."}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"\u7f51\u7edc",children:"\u7f51\u7edc"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"\u8bbe\u7f6e"}),(0,n.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(e.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(e.th,{children:"\u53ea\u8bfb"}),(0,n.jsx)(e.th,{children:"\u89c4\u5219"}),(0,n.jsx)(e.th,{children:"\u6548\u679c"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"sleep"}),(0,n.jsx)(e.td,{children:"\u6574\u6570"}),(0,n.jsx)(e.td,{children:"5"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u4e3bSA-MP\u548cRaknet\u7f51\u7edc\u7ebf\u7a0b\u5728\u6bcf\u4e2a\u540c\u6b65\u5468\u671f\u5185\u201c\u95f2\u7f6e\u201d\u4f11\u7720\u7684\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002\u8f83\u9ad8\u7684\u503c\u4f1a\u51cf\u5c11\u670d\u52a1\u5668\u5904\u7406\uff0c\u4f46\u964d\u4f4e\u540c\u6b65\u8d28\u91cf\uff1b\u8f83\u4f4e\u7684\u503c\u4f1a\u589e\u52a0\u670d\u52a1\u5668\u5904\u7406\uff0c\u4f46\u6539\u5584\u540c\u6b65\u8d28\u91cf\u3002\u9664\u975e\u73a9\u5bb6\u6570\u91cf\u975e\u5e38\u591a\u4e14\u5b58\u5728\u670d\u52a1\u5668\u5e27\u7387\u7a33\u5b9a\u6027\u95ee\u9898\uff0c\u5426\u5219\u4e0d\u5efa\u8bae\u66f4\u6539\u6b64\u503c\u3002"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"lanmode"}),(0,n.jsx)(e.td,{children:"\u5e03\u5c14"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u5df2\u5f03\u7528\u7684\u53d8\u91cf\uff0c\u5df2\u65e0\u6548\u3002"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"bind"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32"}),(0,n.jsx)(e.td,{}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u670d\u52a1\u5668\u5e94\u4f7f\u7528\u7684IP\u5730\u5740\u3002\u670d\u52a1\u5668\u5c06\u88ab\u5f3a\u5236\u4f7f\u7528\u6b64IP\u5730\u5740\uff0c\u800c\u4e0d\u662f\u81ea\u52a8\u9009\u62e9\u4e00\u4e2a\u7a7a\u95f2\u7684IP\u5730\u5740\u3002\u6b64IP\u5730\u5740\u5fc5\u987b\u4e0e\u670d\u52a1\u5668\u4e0a\u5206\u914d\u7ed9\u7f51\u7edc\u5361\u7684\u5730\u5740\u5339\u914d\u3002\u8fd9\u5bf9\u4e8e\u5728\u540c\u4e00\u8bbe\u5907\u4e0a\u8fd0\u884c\u591a\u4e2a\u670d\u52a1\u5668\u4f7f\u7528\u76f8\u540c\u7aef\u53e3\u975e\u5e38\u6709\u7528\u3002"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"port"}),(0,n.jsx)(e.td,{children:"\u6574\u6570"}),(0,n.jsx)(e.td,{children:"8192 (7777 is also commonly used)"}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsxs)(e.td,{children:["\u670d\u52a1\u5668\u5e94\u4f7f\u7528\u7684\u7aef\u53e3\u3002\u60a8\u9700\u8981",(0,n.jsx)(e.a,{href:"http://www.portforward.com/",children:"\u7aef\u53e3\u8f6c\u53d1"}),"\u4ee5\u4fbf\u73a9\u5bb6\u80fd\u591f\u4ece\u5c40\u57df\u7f51\u5916\u52a0\u5165\u60a8\u7684\u670d\u52a1\u5668\u3002"]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"conncookies"}),(0,n.jsx)(e.td,{children:"\u6574\u6570*"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsxs)(e.td,{children:["\u5207\u63620.3.7\u8fde\u63a5cookie\u7cfb\u7edf\u3002\u8bbe\u7f6e\u4e3a1\u4ee5\u542f\u7528\uff0c\u8bbe\u7f6e\u4e3a0\u4ee5\u7981\u7528\u3002",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(e.strong,{children:"\u6ce8\u610f:"})," \u6b64\u670d\u52a1\u5668\u53d8\u91cf\u57280.3.7 R2\u4e2d\u6dfb\u52a0\uff0c\u5728\u4e4b\u524d\u7684\u7248\u672c\u4e2d\u5c06\u4e0d\u8d77\u4f5c\u7528\u3002"]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"cookielogging"}),(0,n.jsx)(e.td,{children:"\u6574\u6570*"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsxs)(e.td,{children:["\u5207\u6362\u8bb0\u5f55\u65b0\u8fde\u63a5\u73a9\u5bb6\u8bf7\u6c42\u7684\u8fde\u63a5cookie\u3002\u8bbe\u7f6e\u4e3a1\u4ee5\u542f\u7528\uff0c\u8bbe\u7f6e\u4e3a0\u4ee5\u7981\u7528\u3002",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(e.strong,{children:"\u6ce8\u610f:"})," \u6b64\u670d\u52a1\u5668\u53d8\u91cf\u57280.3.7 R2\u4e2d\u6dfb\u52a0\uff0c\u5728\u4e4b\u524d\u7684\u7248\u672c\u4e2d\u5c06\u4e0d\u8d77\u4f5c\u7528\u3002"]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"connseedtime"}),(0,n.jsx)(e.td,{children:"\u6574\u6570"}),(0,n.jsx)(e.td,{children:"300000"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsxs)(e.td,{children:["\u8fde\u63a5cookie\u79cd\u5b50\u503c\u66f4\u65b0\u7684\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(e.strong,{children:"\u6ce8\u610f:"})," \u6b64\u670d\u52a1\u5668\u53d8\u91cf\u57280.3.7\u4e2d\u6dfb\u52a0\uff0c\u5728\u4e4b\u524d\u7684\u7248\u672c\u4e2d\u5c06\u4e0d\u8d77\u4f5c\u7528\u3002"]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"minconnectiontime"}),(0,n.jsx)(e.td,{children:"\u6574\u6570"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u670d\u52a1\u5668\u5728\u63a5\u53d7\u53e6\u4e00\u4e2a\u4f20\u5165\u8fde\u63a5\u524d\u7b49\u5f85\u7684\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002\u9664\u975e\u60a8\u7684\u670d\u52a1\u5668\u906d\u53d7\u8fde\u63a5\u6d2a\u6c34\u653b\u51fb\uff0c\u5426\u5219\u4e0d\u5efa\u8bae\u4f7f\u7528\u6b64\u53d8\u91cf\u3002"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"messageslimit"}),(0,n.jsx)(e.td,{children:"\u6574\u6570"}),(0,n.jsx)(e.td,{children:"500"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u7528\u6237\u6bcf\u79d2\u6700\u591a\u53ef\u4ee5\u53d1\u9001\u7684\u6d88\u606f\u6570\u91cf\u3002"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"messageholelimit"}),(0,n.jsx)(e.td,{children:"\u6574\u6570"}),(0,n.jsx)(e.td,{children:"3000"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u4e00\u4e2a\u7528\u4e8e\u5904\u7406DoS\u653b\u51fb\u7684\u7f51\u7edc\u7ea7\u8bbe\u7f6e\u3002"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"ackslimit"}),(0,n.jsx)(e.td,{children:"\u6574\u6570"}),(0,n.jsx)(e.td,{children:"3000"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u7f51\u7edc\u5c42\u8bbe\u7f6e\uff0c\u7528\u4e8e\u9650\u5236\u6bcf\u79d2\u53d1\u9001\u7684ACK\u6570\u636e\u5305\u7684\u6570\u91cf\u3002"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"playertimeout"}),(0,n.jsx)(e.td,{children:"\u6574\u6570"}),(0,n.jsx)(e.td,{children:"10000"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u73a9\u5bb6\u5728\u672a\u5411\u670d\u52a1\u5668\u53d1\u9001\u4efb\u4f55\u6570\u636e\u540e\u8d85\u65f6\u7684\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"mtu"}),(0,n.jsx)(e.td,{children:"\u6574\u6570"}),(0,n.jsx)(e.td,{children:"576"}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsxs)(e.td,{children:[(0,n.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Maximum_transmission_unit",children:"\u53c2\u89c1\u6b64\u5904"}),"\u3002",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(e.strong,{children:"\u6ce8\u610f:"})," \u6b64\u670d\u52a1\u5668\u53d8\u91cf\u57280.3.8\u4e2d\u6dfb\u52a0\uff0c\u5728\u4e4b\u524d\u7684\u7248\u672c\u4e2d\u5c06\u4e0d\u8d77\u4f5c\u7528\u3002"]})]})]})]}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:"[*] \u6709\u4e9b\u8bbe\u7f6e\u4e0e\u4f60\u60f3\u8c61\u7684\u4e0d\u4e00\u6837."}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"\u65e5\u5fd7\u8bb0\u5f55",children:"\u65e5\u5fd7\u8bb0\u5f55"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"\u8bbe\u7f6e"}),(0,n.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(e.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(e.th,{children:"\u53ea\u8bfb"}),(0,n.jsx)(e.th,{children:"\u89c4\u5219"}),(0,n.jsx)(e.th,{children:"\u6548\u679c"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"output"}),(0,n.jsx)(e.td,{children:"\u5e03\u5c14"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u63a7\u5236\u662f\u5426\u5728\u670d\u52a1\u5668\u63a7\u5236\u53f0\u4e2d\u91cd\u590d\u65e5\u5fd7\u6d88\u606f\uff08\u4f8b\u5982\u811a\u672c\u4e2d\u7684print/printf\u6216\u63d2\u4ef6\u4e2d\u7684logprintf\uff09\u3002\u8bbe\u7f6e\u4e3a1\u542f\u7528\uff0c0\u7981\u7528\u3002\u6b64\u9009\u9879\u4ec5\u5bf9Linux\u670d\u52a1\u5668\u6709\u6548."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"timestamp"}),(0,n.jsx)(e.td,{children:"\u5e03\u5c14"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u63a7\u5236\u662f\u5426\u5728\u6bcf\u6761\u63a7\u5236\u53f0\u6d88\u606f\u4e2d\u6253\u5370\u65f6\u95f4\u6233\u3002\u8bbe\u7f6e\u4e3a1\u542f\u7528\uff0c0\u7981\u7528."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"logtimeformat"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32"}),(0,n.jsx)(e.td,{children:"[%H:%M:%S]"}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsxs)(e.td,{children:["\u5e94\u4f7f\u7528\u7684\u65f6\u95f4\u6233\u683c\u5f0f\u3002\u683c\u5f0f\u57fa\u4e8eC/C++\u4e2d\u7684",(0,n.jsx)(e.a,{href:"http://cplusplus.com/reference/clibrary/ctime/strftime/",children:"strftime"}),"\u683c\u5f0f\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u793a\u4f8b\uff1a",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(e.strong,{children:"[%H:%M:%S]"})," \u4ec5\u663e\u793a\u65f6\u95f4\uff0c\u8fd9\u662f\u6240\u6709\u4ee5\u524dSA-MP\u670d\u52a1\u5668\u7248\u672c\u7684\u9ed8\u8ba4\u683c\u5f0f\u3002",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(e.strong,{children:"[%d/%m/%Y %H:%M:%S]"})," \u5c06\u663e\u793a\u65e5\u671f\u4e3add/mm/yyyy\u683c\u5f0f\uff0c\u540e\u8ddf[\u5c0f\u65f6:\u5206\u949f:\u79d2]\u683c\u5f0f."]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"logqueries"}),(0,n.jsx)(e.td,{children:"\u5e03\u5c14"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u63a7\u5236\u662f\u5426\u8bb0\u5f55\u73a9\u5bb6\u53d1\u9001\u5230\u670d\u52a1\u5668\u7684\u6240\u6709\u67e5\u8be2\u3002\u8bbe\u7f6e\u4e3a1\u542f\u7528\uff0c0\u7981\u7528\u3002\u5728DDoS\u653b\u51fb\u671f\u95f4\u975e\u5e38\u6709\u7528."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"chatlogging"}),(0,n.jsx)(e.td,{children:"\u6574\u6570*"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u63a7\u5236\u662f\u5426\u5728\u670d\u52a1\u5668\u63a7\u5236\u53f0\u4e2d\u663e\u793a\u73a9\u5bb6\u804a\u5929\u3002\u7528\u4e8e\u9632\u6b62\u65e5\u5fd7\u53d8\u5f97\u81a8\u80c0\uff0c\u6216\u5982\u679c\u4f60\u6709\u5176\u4ed6\u811a\u672c\u804a\u5929\u8bb0\u5f55\u89e3\u51b3\u65b9\u6848\u3002\u8bbe\u7f6e\u4e3a1\u542f\u7528\uff0c0\u7981\u7528."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"db_logging"}),(0,n.jsx)(e.td,{children:"\u6574\u6570*"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsxs)(e.td,{children:["\u5728\u670d\u52a1\u5668\u63a7\u5236\u53f0\u4e2d\u8bb0\u5f55sqlite db_*\u51fd\u6570\u9519\u8bef\u3002",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(e.strong,{children:"\u6ce8\u610f\uff1a"})," \u6b64\u670d\u52a1\u5668\u53d8\u91cf\u57280.3.7 R2\u7248\u672c\u4e2d\u6dfb\u52a0\uff0c\u4e4b\u524d\u7684\u7248\u672c\u65e0\u6548."]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"db_log_queries"}),(0,n.jsx)(e.td,{children:"\u6574\u6570*"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsxs)(e.td,{children:["\u8bb0\u5f55\u6240\u6709sqlite db_query\u8c03\u7528\uff0c\u5305\u62ec\u67e5\u8be2\u5b57\u7b26\u4e32\u3002",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(e.strong,{children:"\u6ce8\u610f\uff1a"})," \u6b64\u670d\u52a1\u5668\u53d8\u91cf\u57280.3.7 R2\u7248\u672c\u4e2d\u6dfb\u52a0\uff0c\u4e4b\u524d\u7684\u7248\u672c\u65e0\u6548."]})]})]})]}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:"[*] \u6709\u4e9b\u8bbe\u7f6e\u4e0e\u4f60\u60f3\u8c61\u7684\u4e0d\u4e00\u6837."}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"\u5ba2\u6237\u7aef",children:"\u5ba2\u6237\u7aef"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"\u8bbe\u7f6e"}),(0,n.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(e.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(e.th,{children:"\u53ea\u8bfb"}),(0,n.jsx)(e.th,{children:"\u89c4\u5219"}),(0,n.jsx)(e.th,{children:"\u6548\u679c"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"onfoot_rate*"}),(0,n.jsx)(e.td,{children:"\u6574\u6570"}),(0,n.jsx)(e.td,{children:"30"}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u5ba2\u6237\u7aef\u5728\u6b65\u884c\u65f6\u6bcf\u9694\u591a\u5c11\u6beb\u79d2\u5411\u670d\u52a1\u5668\u66f4\u65b0\u65b0\u6570\u636e."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"incar_rate"}),(0,n.jsx)(e.td,{children:"\u6574\u6570"}),(0,n.jsx)(e.td,{children:"30"}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u5ba2\u6237\u7aef\u5728\u8f66\u8f86\u4e2d\u6bcf\u9694\u591a\u5c11\u6beb\u79d2\u5411\u670d\u52a1\u5668\u66f4\u65b0\u65b0\u6570\u636e."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"weapon_rate"}),(0,n.jsx)(e.td,{children:"\u6574\u6570"}),(0,n.jsx)(e.td,{children:"30"}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u5ba2\u6237\u7aef\u5728\u5f00\u706b\u65f6\u6bcf\u9694\u591a\u5c11\u6beb\u79d2\u5411\u670d\u52a1\u5668\u66f4\u65b0\u65b0\u6570\u636e."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"stream_distance*"}),(0,n.jsx)(e.td,{children:"float"}),(0,n.jsx)(e.td,{children:"200.0"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsxs)(e.td,{children:["\u73a9\u5bb6\u5728X,Y\u5e73\u9762\u4e0a\u4f1a\u6d41\u5f0f\u4f20\u8f93\u7684\u670d\u52a1\u5668\u5b9e\u4f53\u7684\u8ddd\u79bb\u3002\u6700\u5927\u503c\u4e3a ",(0,n.jsx)(e.strong,{children:"400.0"}),"\uff0c\u6700\u5c0f\u503c\u4e3a ",(0,n.jsx)(e.strong,{children:"50.0"}),"\u3002\u66f4\u9ad8\u7684\u503c\u4f1a\u8ba9\u73a9\u5bb6\u5728\u66f4\u8fdc\u7684\u8ddd\u79bb\u770b\u5230\u670d\u52a1\u5668\u5b9e\u4f53\uff0c\u4f46\u9700\u8981\u66f4\u591a\u7684\u5ba2\u6237\u7aef\u5904\u7406\u548c\u53ef\u80fd\u66f4\u591a\u7684\u5e26\u5bbd."]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"stream_rate*"}),(0,n.jsx)(e.td,{children:"\u6574\u6570"}),(0,n.jsx)(e.td,{children:"1000"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsxs)(e.td,{children:["\u6bcf\u4e2a\u73a9\u5bb6\u91cd\u65b0\u6d4b\u8bd5\u670d\u52a1\u5668\u5b9e\u4f53\u6d41\u5f0f\u4f20\u8f93\u7684\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002\u6700\u5927\u503c\u4e3a ",(0,n.jsx)(e.strong,{children:"5000"}),"\uff0c\u6700\u5c0f\u503c\u4e3a ",(0,n.jsx)(e.strong,{children:"500"}),"\u3002\u8f83\u4f4e\u7684\u503c\u589e\u52a0\u670d\u52a1\u5668\u5904\u7406\uff0c\u56e0\u4e3a\u5b83\u5fc5\u987b\u66f4\u9891\u7e41\u5730\u91cd\u65b0\u68c0\u67e5\u6bcf\u4e2a\u73a9\u5bb6\u7684\u6d41\u5f0f\u4f20\u8f93\u6761\u4ef6."]})]})]})]}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:"[*] \u8f83\u4f4e\u7684 onfoot_rate\u3001incar_rate \u548c weapon_rate \u503c\u63d0\u9ad8\u540c\u6b65\u6027\u80fd\uff0c\u4f46\u4f7f\u7528\u66f4\u591a\u5e26\u5bbd."}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"npcs",children:"NPCs"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"\u8bbe\u7f6e"}),(0,n.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(e.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(e.th,{children:"\u53ea\u8bfb"}),(0,n.jsx)(e.th,{children:"\u89c4\u5219"}),(0,n.jsx)(e.th,{children:"\u6548\u679c"})]})}),(0,n.jsx)(e.tbody,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"maxnpc"}),(0,n.jsx)(e.td,{children:"\u6574\u6570"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u670d\u52a1\u5668\u53ef\u4ee5\u5bb9\u7eb3\u7684\u6700\u5927NPC\u6570\u91cf\u3002\u901a\u8fc7\u66f4\u6539\u6b64\u6570\u5b57\uff0c\u53ef\u4ee5\u8c03\u6574\u6709\u591a\u5c11\u73a9\u5bb6\u63d2\u69fd\u53ef\u4ee5\u7531NPC\u4f7f\u7528."})]})})]}),"\n",(0,n.jsx)(e.h2,{id:"\u5ef6\u8fdf\u8865\u507f",children:"\u5ef6\u8fdf\u8865\u507f"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"\u8bbe\u7f6e"}),(0,n.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(e.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(e.th,{children:"\u53ea\u8bfb"}),(0,n.jsx)(e.th,{children:"\u89c4\u5219"}),(0,n.jsx)(e.th,{children:"\u6548\u679c"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"lagcompmode"}),(0,n.jsx)(e.td,{children:"\u6574\u6570"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsxs)(e.td,{children:["0: \u5b8c\u5168\u7981\u7528\u5ef6\u8fdf\u8865\u507f\u3002",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"1: \u5b8c\u5168\u542f\u7528\u5ef6\u8fdf\u8865\u507f\u3002",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"2: \u542f\u7528\u4ec5\u4f4d\u7f6e\u5ef6\u8fdf\u8865\u507f\u3002\u8fd9\u610f\u5473\u7740\u73a9\u5bb6\u7684\u65cb\u8f6c\u4e0d\u4f1a\u8fdb\u884c\u5ef6\u8fdf\u8865\u507f."]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"lagcomp"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32"}),(0,n.jsx)(e.td,{children:"On"}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsxs)(e.td,{children:["\u6839\u636e ",(0,n.jsx)(e.strong,{children:"lagcompmode"})," \u8bbe\u7f6e\u81ea\u52a8\u8bbe\u7f6e\u4e3a ",(0,n.jsx)(e.strong,{children:"On"})," \u6216 ",(0,n.jsx)(e.strong,{children:"Off"}),"."]})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"\u81ea\u5b9a\u4e49\u6a21\u578b",children:"\u81ea\u5b9a\u4e49\u6a21\u578b"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"\u8bbe\u7f6e"}),(0,n.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(e.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(e.th,{children:"\u53ea\u8bfb"}),(0,n.jsx)(e.th,{children:"\u89c4\u5219"}),(0,n.jsx)(e.th,{children:"\u6548\u679c"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"useartwork"}),(0,n.jsx)(e.td,{children:"\u5e03\u5c14"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsxs)(e.td,{children:["\u63a7\u5236\u670d\u52a1\u5668\u662f\u5426\u4f7f\u7528\u6765\u81ea\u6a21\u578b\u6587\u4ef6\u5939\u7684\u81ea\u5b9a\u4e49\u6a21\u578b\u3002\u8bbe\u7f6e\u4e3a1\u542f\u7528\uff0c0\u7981\u7528\u3002",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(e.strong,{children:"\u6ce8\u610f\uff1a"})," \u6b64\u670d\u52a1\u5668\u53d8\u91cf\u57280.3.8\u7248\u672c\u4e2d\u6dfb\u52a0\uff0c\u4e4b\u524d\u7684\u7248\u672c\u65e0\u6548\u3002"]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"artwork"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsxs)(e.td,{children:["\u6839\u636e ",(0,n.jsx)(e.strong,{children:"useartwork"})," \u8bbe\u7f6e\u81ea\u52a8\u8bbe\u7f6e\u4e3a ",(0,n.jsx)(e.strong,{children:"No"})," \u6216 ",(0,n.jsx)(e.strong,{children:"Yes"}),"\u3002",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(e.strong,{children:"\u6ce8\u610f\uff1a"})," \u6b64\u670d\u52a1\u5668\u53d8\u91cf\u57280.3.8\u7248\u672c\u4e2d\u6dfb\u52a0\uff0c\u4e4b\u524d\u7684\u7248\u672c\u65e0\u6548\u3002"]})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"artpath"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32"}),(0,n.jsx)(e.td,{children:"models"}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsxs)(e.td,{children:["\u81ea\u5b9a\u4e49\u6a21\u578b\u6240\u5728\u7684\u8def\u5f84\u3002",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(e.strong,{children:"\u6ce8\u610f\uff1a"})," \u6b64\u670d\u52a1\u5668\u53d8\u91cf\u57280.3.8\u7248\u672c\u4e2d\u6dfb\u52a0\uff0c\u4e4b\u524d\u7684\u7248\u672c\u65e0\u6548\u3002"]})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"\u5176\u4ed6",children:"\u5176\u4ed6"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"\u8bbe\u7f6e"}),(0,n.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(e.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(e.th,{children:"\u53ea\u8bfb"}),(0,n.jsx)(e.th,{children:"\u89c4\u5219"}),(0,n.jsx)(e.th,{children:"\u6548\u679c"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"myriad"}),(0,n.jsx)(e.td,{children:"\u5e03\u5c14"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u672a\u4f7f\u7528. \u5b83\u53ef\u80fd\u542f\u7528\u4e86\u4e0e\u65e9\u671f\u7684GTA San Andreas\u6a21\u7ec4\u201cMyriad Islands\u201d\u7684\u517c\u5bb9\u6027\uff0c\u5927\u7ea6\u57282008\u5e74\u4e4b\u524d."})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"\u274csign"}),(0,n.jsx)(e.td,{children:"\u5b57\u7b26\u4e32"}),(0,n.jsx)(e.td,{}),(0,n.jsx)(e.td,{children:"\u2705"}),(0,n.jsx)(e.td,{children:"\u274c"}),(0,n.jsx)(e.td,{children:"\u672a\u4f7f\u7528."})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"\u63d0\u793a",children:"\u63d0\u793a"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\u6807\u8bb0\u4e3a\u201c\u53ea\u8bfb\u201d\u7684\u503c\uff08\u5982 ",(0,n.jsx)(e.code,{children:"/rcon varlist"})," \u6240\u793a\uff09\u4e0d\u80fd\u5728\u8fd0\u884c\u65f6\u66f4\u6539\u3002\u6240\u6709\u5176\u4ed6\u503c\u53ef\u4ee5\u901a\u8fc7\u4f20\u9012\u7ed9 SendRconCommand \u6765\u4e34\u65f6\u66f4\u6539\u3002"]}),"\n",(0,n.jsxs)(e.li,{children:["\u6807\u8bb0\u4e3a\u201c\u89c4\u5219\u201d\u7684\u503c\uff08\u5982 ",(0,n.jsx)(e.code,{children:"/rcon varlist"})," \u6240\u793a\uff09\u4f1a\u5728\u670d\u52a1\u5668\u6d4f\u89c8\u5668\u7684\u89c4\u5219\u90e8\u5206\u4e2d\u663e\u793a\u3002"]}),"\n",(0,n.jsx)(e.li,{children:'\u811a\u672c\u4e0d\u662f\u5fc5\u9700\u8981\u653e\u5728 gamemodes \u6216 filterscripts \u6587\u4ef6\u5939\u4e2d\u3002server.cfg \u4e2d\u7684\u4fe1\u606f\u662f\u8def\u5f84\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528 ".."\u3002'}),"\n"]})]})}function j(d={}){const{wrapper:e}={...(0,t.R)(),...d.components};return e?(0,n.jsx)(e,{...d,children:(0,n.jsx)(x,{...d})}):x(d)}},28453:(d,e,s)=>{s.d(e,{R:()=>i,x:()=>l});var r=s(96540);const n={},t=r.createContext(n);function i(d){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof d?d(e):{...e,...d}}),[e,d])}function l(d){let e;return e=d.disableParentContext?"function"==typeof d.components?d.components(n):d.components||n:i(d.components),r.createElement(t.Provider,{value:e},d.children)}}}]);