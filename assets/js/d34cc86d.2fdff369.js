"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[62548],{28453:(e,l,n)=>{n.d(l,{R:()=>t,x:()=>o});var s=n(96540);const r={},a=s.createContext(r);function t(e){const l=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function o(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(a.Provider,{value:l},e.children)}},65526:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"scripting/callbacks/OnPlayerRequestDownload","title":"OnPlayerRequestDownload","description":"This callback is called when a player request for custom model downloads.","source":"@site/docs/scripting/callbacks/OnPlayerRequestDownload.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerRequestDownload","permalink":"/docs/scripting/callbacks/OnPlayerRequestDownload","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerRequestDownload.md","tags":[{"inline":true,"label":"player","permalink":"/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerRequestDownload","sidebar_label":"OnPlayerRequestDownload","description":"This callback is called when a player request for custom model downloads.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerRequestClass","permalink":"/docs/scripting/callbacks/OnPlayerRequestClass"},"next":{"title":"OnPlayerRequestSpawn","permalink":"/docs/scripting/callbacks/OnPlayerRequestSpawn"}}');var r=n(74848),a=n(28453);const t={title:"OnPlayerRequestDownload",sidebar_label:"OnPlayerRequestDownload",description:"This callback is called when a player request for custom model downloads.",tags:["player"]},o=void 0,i={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function c(e){const l={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{VersionWarn:n}=l;return n||function(e,l){throw new Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{name:"callback",version:"SA-MP 0.3.DL R1"}),"\n",(0,r.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(l.p,{children:"This callback is called when a player request for custom model downloads."}),"\n",(0,r.jsxs)(l.table,{children:[(0,r.jsx)(l.thead,{children:(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.th,{children:"Name"}),(0,r.jsx)(l.th,{children:"Description"})]})}),(0,r.jsxs)(l.tbody,{children:[(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"playerid"}),(0,r.jsx)(l.td,{children:"The ID of the player that request custom model download."})]}),(0,r.jsxs)(l.tr,{children:[(0,r.jsxs)(l.td,{children:["DOWNLOAD_REQUEST",":type"]}),(0,r.jsxs)(l.td,{children:["The ",(0,r.jsx)(l.a,{href:"../resources/download-requests",children:"type"})," of the request."]})]}),(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"crc"}),(0,r.jsx)(l.td,{children:"The CRC checksum of custom model file."})]})]})]}),"\n",(0,r.jsx)(l.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(l.p,{children:"0 - Deny the download request"}),"\n",(0,r.jsx)(l.p,{children:"1 - Accept the download request"}),"\n",(0,r.jsx)(l.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-c",children:'#define DOWNLOAD_REQUEST_EMPTY        (DOWNLOAD_REQUEST:0)\n#define DOWNLOAD_REQUEST_MODEL_FILE   (DOWNLOAD_REQUEST:1)\n#define DOWNLOAD_REQUEST_TEXTURE_FILE (DOWNLOAD_REQUEST:2)\n\nnew baseUrl[] = "https://assets.open.mp";\n\npublic OnPlayerRequestDownload(playerid, DOWNLOAD_REQUEST:type, crc)\n{\n    if (!IsPlayerConnected(playerid))\n    {\n        return 0;\n    }\n\n    new fullUrl[256 + 1];\n    new dlFileName[64 + 1];\n    new foundFileName = 0;\n\n    if (type == DOWNLOAD_REQUEST_TEXTURE_FILE)\n    {\n        foundFileName = FindTextureFileNameFromCRC(crc, dlFileName, 64);\n    }\n    else if (type == DOWNLOAD_REQUEST_MODEL_FILE)\n    {\n        foundFileName = FindModelFileNameFromCRC(crc, dlFileName, 64);\n    }\n\n    if (foundFileName)\n    {\n        format(fullUrl, sizeof(fullUrl), "%s/%s", baseUrl, dlFileName);\n        RedirectDownload(playerid, fullUrl);\n    }\n\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(l.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,r.jsx)(l.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.a,{href:"OnPlayerFinishedDownloading",children:"OnPlayerFinishedDownloading"}),": This callback is called when a player finishes downloading custom models."]}),"\n"]}),"\n",(0,r.jsx)(l.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.a,{href:"../resources/download-requests",children:"Download Request Types"})}),"\n"]})]})}function u(e={}){const{wrapper:l}={...(0,a.R)(),...e.components};return l?(0,r.jsx)(l,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);