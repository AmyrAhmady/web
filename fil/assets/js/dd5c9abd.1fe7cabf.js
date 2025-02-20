"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[17551],{28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var a=r(96540);const n={},s=a.createContext(n);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:t},e.children)}},92470:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"scripting/functions/GetPlayerCameraAspectRatio","title":"GetPlayerCameraAspectRatio","description":"Retrieves the aspect ratio of a player\'s camera.","source":"@site/docs/scripting/functions/GetPlayerCameraAspectRatio.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerCameraAspectRatio","permalink":"/fil/docs/scripting/functions/GetPlayerCameraAspectRatio","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerCameraAspectRatio.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"},{"inline":true,"label":"camera","permalink":"/fil/docs/tags/camera"}],"version":"current","frontMatter":{"title":"GetPlayerCameraAspectRatio","sidebar_label":"GetPlayerCameraAspectRatio","description":"Retrieves the aspect ratio of a player\'s camera.","tags":["player","camera"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerBuildingsRemoved","permalink":"/fil/docs/scripting/functions/GetPlayerBuildingsRemoved"},"next":{"title":"GetPlayerCameraFrontVector","permalink":"/fil/docs/scripting/functions/GetPlayerCameraFrontVector"}}');var n=r(74848),s=r(28453);const i={title:"GetPlayerCameraAspectRatio",sidebar_label:"GetPlayerCameraAspectRatio",description:"Retrieves the aspect ratio of a player's camera.",tags:["player","camera"]},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Retrieves the aspect ratio of a player's camera."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player to get the camera aspect ratio of."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"The aspect ratio of the player's camera, as a float."}),"\n",(0,n.jsx)(t.p,{children:"The aspect ratio can be one of three values: 4:3 (1.3333334, Float:0x3FAAAAAB) when widescreen is turned off, 5:4 (1.2470589, Float:0x3F9F9FA0) when letterbox mode is turned on, and 16:9 (1.7764707, Float:0x3FE36364) when widescreen is turned on regardless of the letterbox mode."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'new string[128];\nformat(string, sizeof(string), "Your aspect ratio: %f", GetPlayerCameraAspectRatio(playerid));\nSendClientMessage(playerid, -1, string);\n'})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"The return value of this function represents the value of the \"widescreen\" option in the game's display settings, not the actual aspect ratio of the player's display."})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerCameraZoom",children:"GetPlayerCameraZoom"}),": Get the zoom level of a player's camera."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerCameraPos",children:"GetPlayerCameraPos"}),": Find out where the player's camera is."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerCameraFrontVector",children:"GetPlayerCameraFrontVector"}),": Get the player's camera front vector"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);