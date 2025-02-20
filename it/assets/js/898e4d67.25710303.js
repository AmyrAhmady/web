"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[9274],{28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>s});var n=a(96540);const r={},c=n.createContext(r);function i(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(c.Provider,{value:t},e.children)}},61403:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/GetPlayerObjectAttachedData","title":"GetPlayerObjectAttachedData","description":"Get the attachment data of a player-object.","source":"@site/docs/scripting/functions/GetPlayerObjectAttachedData.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerObjectAttachedData","permalink":"/it/docs/scripting/functions/GetPlayerObjectAttachedData","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerObjectAttachedData.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"},{"inline":true,"label":"object","permalink":"/it/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/it/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"GetPlayerObjectAttachedData","sidebar_label":"GetPlayerObjectAttachedData","description":"Get the attachment data of a player-object.","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerNetworkStats","permalink":"/it/docs/scripting/functions/GetPlayerNetworkStats"},"next":{"title":"GetPlayerObjectAttachedOffset","permalink":"/it/docs/scripting/functions/GetPlayerObjectAttachedOffset"}}');var r=a(74848),c=a(28453);const i={title:"GetPlayerObjectAttachedData",sidebar_label:"GetPlayerObjectAttachedData",description:"Get the attachment data of a player-object.",tags:["player","object","playerobject"]},s=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components},{VersionWarn:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Get the attachment data of a player-object."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"objectid"}),(0,r.jsx)(t.td,{children:"The ID of the player-object to get the attachment data of"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"&parentVehicle"}),(0,r.jsx)(t.td,{children:"A variable in which to store the parentVehicle ID, passed by reference."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"&parentObject"}),(0,r.jsx)(t.td,{children:"A variable in which to store the parentObject ID, passed by reference."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"&parentPlayer"}),(0,r.jsx)(t.td,{children:"A variable in which to store the parentPlayer ID, passed by reference."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"false"})," - The function failed to execute. The object specified does not exist."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"new \n    parentVehicle,\n    parentObject,\n    parentPlayer;\n\nGetPlayerObjectAttachedData(playerid, playerobjectid, parentVehicle, parentObject, parentPlayer);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerObjectAttachedOffset",children:"GetPlayerObjectAttachedOffset"}),": Get the attachment offset and rotation of a player-object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetObjectAttachedData",children:"GetObjectAttachedData"}),": Get the attachment data of a player-object."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}}}]);