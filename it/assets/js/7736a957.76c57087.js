"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[85448],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(96540);const c={},r=a.createContext(c);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),a.createElement(r.Provider,{value:t},e.children)}},39498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"scripting/functions/AttachCameraToObject","title":"AttachCameraToObject","description":"You can use this function to attach the player camera to objects.","source":"@site/docs/scripting/functions/AttachCameraToObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AttachCameraToObject","permalink":"/it/docs/scripting/functions/AttachCameraToObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AttachCameraToObject.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"},{"inline":true,"label":"object","permalink":"/it/docs/tags/object"}],"version":"current","frontMatter":{"title":"AttachCameraToObject","sidebar_label":"AttachCameraToObject","description":"You can use this function to attach the player camera to objects.","tags":["player","object"]},"sidebar":"docsSidebar","previous":{"title":"Attach3DTextLabelToVehicle","permalink":"/it/docs/scripting/functions/Attach3DTextLabelToVehicle"},"next":{"title":"AttachCameraToPlayerObject","permalink":"/it/docs/scripting/functions/AttachCameraToPlayerObject"}}');var c=n(74848),r=n(28453);const i={title:"AttachCameraToObject",sidebar_label:"AttachCameraToObject",description:"You can use this function to attach the player camera to objects.",tags:["player","object"]},o=void 0,s={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(t.p,{children:"You can use this function to attach the player camera to objects."}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"playerid"}),(0,c.jsx)(t.td,{children:"The ID of the player which will have your camera attached on object."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"objectid"}),(0,c.jsx)(t.td,{children:"The object id which you want to attach the player camera."})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,c.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/attach", false))\n    {\n        new objectId = CreateObject(1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);\n        AttachCameraToObject(playerid, objectId);\n        SendClientMessage(playerid, 0xFFFFFFAA, "Your camera is attached on object now.");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,c.jsx)(t.admonition,{type:"tip",children:(0,c.jsx)(t.p,{children:"You need to create the object first, before attempting to attach a player camera for that."})}),"\n",(0,c.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"AttachCameraToPlayerObject",children:"AttachCameraToPlayerObject"}),": Attaches the player's camera to a player object."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}}}]);