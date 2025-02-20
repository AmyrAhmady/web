"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[30736],{28453:(e,i,l)=>{l.d(i,{R:()=>r,x:()=>s});var a=l(96540);const n={},t=a.createContext(n);function r(e){const i=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(t.Provider,{value:i},e.children)}},54972:(e,i,l)=>{l.r(i),l.d(i,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"scripting/functions/HasPlayerObjectCameraCollision","title":"HasPlayerObjectCameraCollision","description":"Checks if a player-object has camera collision enabled. (SetPlayerObjectNoCameraCollision)","source":"@site/docs/scripting/functions/HasPlayerObjectCameraCollision.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/HasPlayerObjectCameraCollision","permalink":"/fil/docs/scripting/functions/HasPlayerObjectCameraCollision","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/HasPlayerObjectCameraCollision.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"},{"inline":true,"label":"object","permalink":"/fil/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/fil/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"HasPlayerObjectCameraCollision","sidebar_label":"HasPlayerObjectCameraCollision","description":"Checks if a player-object has camera collision enabled. (SetPlayerObjectNoCameraCollision)","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"HasObjectCameraCollision","permalink":"/fil/docs/scripting/functions/HasObjectCameraCollision"},"next":{"title":"HasVehicleBeenOccupied","permalink":"/fil/docs/scripting/functions/HasVehicleBeenOccupied"}}');var n=l(74848),t=l(28453);const r={title:"HasPlayerObjectCameraCollision",sidebar_label:"HasPlayerObjectCameraCollision",description:"Checks if a player-object has camera collision enabled. (SetPlayerObjectNoCameraCollision)",tags:["player","object","playerobject"]},s=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{VersionWarn:l}=i;return l||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(i.p,{children:["Checks if a player-object has camera collision enabled. (",(0,n.jsx)(i.a,{href:"SetPlayerObjectNoCameraCollision",children:"SetPlayerObjectNoCameraCollision"}),")"]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Name"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"playerid"}),(0,n.jsx)(i.td,{children:"The ID of the player."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"objectid"}),(0,n.jsx)(i.td,{children:"The ID of the object to check."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"true"})," - Player-object camera collision is enable."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"false"})," - Player-object camera collision is disable."]}),"\n",(0,n.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:'if (HasPlayerObjectCameraCollision(playerid, playerobjectid))\n{\n    printf("Player: %d  Object: %d  Camera collision: enable", playerid, playerobjectid);\n}\nelse\n{\n    printf("Player: %d  Object: %d  Camera collision: disable", playerid, playerobjectid);\n}\n'})}),"\n",(0,n.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"SetPlayerObjectNoCameraCollision",children:"SetPlayerObjectNoCameraCollision"}),": Disable collisions between players' cameras and the specified object."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"HasObjectCameraCollision",children:"HasObjectCameraCollision"}),": Checks if an object has camera collision enabled."]}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);