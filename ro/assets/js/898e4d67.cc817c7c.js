"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[9274],{28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>i});var r=a(96540);const n={},c=r.createContext(n);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(c.Provider,{value:t},e.children)}},61403:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/GetPlayerObjectAttachedData","title":"GetPlayerObjectAttachedData","description":"Get the attachment data of a player-object.","source":"@site/docs/scripting/functions/GetPlayerObjectAttachedData.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerObjectAttachedData","permalink":"/ro/docs/scripting/functions/GetPlayerObjectAttachedData","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerObjectAttachedData.md","tags":[{"inline":true,"label":"player","permalink":"/ro/docs/tags/player"},{"inline":true,"label":"object","permalink":"/ro/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/ro/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"GetPlayerObjectAttachedData","sidebar_label":"GetPlayerObjectAttachedData","description":"Get the attachment data of a player-object.","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerNetworkStats","permalink":"/ro/docs/scripting/functions/GetPlayerNetworkStats"},"next":{"title":"GetPlayerObjectAttachedOffset","permalink":"/ro/docs/scripting/functions/GetPlayerObjectAttachedOffset"}}');var n=a(74848),c=a(28453);const s={title:"GetPlayerObjectAttachedData",sidebar_label:"GetPlayerObjectAttachedData",description:"Get the attachment data of a player-object.",tags:["player","object","playerobject"]},i=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components},{VersionWarn:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Get the attachment data of a player-object."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"objectid"}),(0,n.jsx)(t.td,{children:"The ID of the player-object to get the attachment data of"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"&parentVehicle"}),(0,n.jsx)(t.td,{children:"A variable in which to store the parentVehicle ID, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"&parentObject"}),(0,n.jsx)(t.td,{children:"A variable in which to store the parentObject ID, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"&parentPlayer"}),(0,n.jsx)(t.td,{children:"A variable in which to store the parentPlayer ID, passed by reference."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"false"})," - The function failed to execute. The object specified does not exist."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"new \n    parentVehicle,\n    parentObject,\n    parentPlayer;\n\nGetPlayerObjectAttachedData(playerid, playerobjectid, parentVehicle, parentObject, parentPlayer);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerObjectAttachedOffset",children:"GetPlayerObjectAttachedOffset"}),": Get the attachment offset and rotation of a player-object."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetObjectAttachedData",children:"GetObjectAttachedData"}),": Get the attachment data of a player-object."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);