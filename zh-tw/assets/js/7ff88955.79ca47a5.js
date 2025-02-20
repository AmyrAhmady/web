"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[94177],{28453:(e,t,l)=>{l.d(t,{R:()=>a,x:()=>i});var n=l(96540);const c={},r=n.createContext(c);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),n.createElement(r.Provider,{value:t},e.children)}},99862:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"scripting/callbacks/OnPlayerObjectMoved","title":"OnPlayerObjectMoved","description":"This callback is called when a player object is moved after MovePlayerObject (when it stops moving).","source":"@site/docs/scripting/callbacks/OnPlayerObjectMoved.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerObjectMoved","permalink":"/zh-tw/docs/scripting/callbacks/OnPlayerObjectMoved","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerObjectMoved.md","tags":[{"inline":true,"label":"player","permalink":"/zh-tw/docs/tags/player"},{"inline":true,"label":"object","permalink":"/zh-tw/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/zh-tw/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"OnPlayerObjectMoved","sidebar_label":"OnPlayerObjectMoved","description":"This callback is called when a player object is moved after MovePlayerObject (when it stops moving).","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerLeaveRaceCheckpoint","permalink":"/zh-tw/docs/scripting/callbacks/OnPlayerLeaveRaceCheckpoint"},"next":{"title":"OnPlayerPickUpPickup","permalink":"/zh-tw/docs/scripting/callbacks/OnPlayerPickUpPickup"}}');var c=l(74848),r=l(28453);const a={title:"OnPlayerObjectMoved",sidebar_label:"OnPlayerObjectMoved",description:"This callback is called when a player object is moved after MovePlayerObject (when it stops moving).",tags:["player","object","playerobject"]},i=void 0,s={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{TipNPCCallbacks:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(t.p,{children:["This callback is called when a player object is moved after ",(0,c.jsx)(t.a,{href:"../functions/MovePlayerObject",children:"MovePlayerObject"})," (when it stops moving)."]}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"playerid"}),(0,c.jsx)(t.td,{children:"The playerid the object is assigned to"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"objectid"}),(0,c.jsx)(t.td,{children:"The ID of the player object that was moved"})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(t.p,{children:"It is always called first in filterscripts."}),"\n",(0,c.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:'public OnPlayerObjectMoved(playerid, objectid)\n{\n    printf("Player object moved: objectid: %d playerid: %d", objectid, playerid);\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,c.jsx)(l,{}),"\n",(0,c.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,c.jsx)(t.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"OnObjectMoved",children:"OnObjectMoved"}),": This callback is called when an object stops moving."]}),"\n"]}),"\n",(0,c.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsx)(t.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"../functions/MovePlayerObject",children:"MovePlayerObject"}),": Move a player object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"../functions/IsPlayerObjectMoving",children:"IsPlayerObjectMoving"}),": Check if the player object is moving."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"../functions/StopPlayerObject",children:"StopPlayerObject"}),": Stop a player object from moving."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"../functions/CreatePlayerObject",children:"CreatePlayerObject"}),": Create an object for only one player."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"../functions/DestroyPlayerObject",children:"DestroyPlayerObject"}),": Destroy a player object."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}}}]);