"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[55426],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(96540);const c={},s=r.createContext(c);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),r.createElement(s.Provider,{value:t},e.children)}},61200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/GetPlayerAttachedObject","title":"GetPlayerAttachedObject","description":"Gets the player attachment object data by index.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerAttachedObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerAttachedObject","permalink":"/zh-cn/docs/scripting/functions/GetPlayerAttachedObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerAttachedObject.md","tags":[{"inline":true,"label":"player","permalink":"/zh-cn/docs/tags/player"},{"inline":true,"label":"object","permalink":"/zh-cn/docs/tags/object"},{"inline":true,"label":"attachment","permalink":"/zh-cn/docs/tags/attachment"}],"version":"current","frontMatter":{"title":"GetPlayerAttachedObject","sidebar_label":"GetPlayerAttachedObject","description":"Gets the player attachment object data by index.","tags":["player","object","attachment"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerArmour","permalink":"/zh-cn/docs/scripting/functions/GetPlayerArmour"},"next":{"title":"GetPlayerBuildingsRemoved","permalink":"/zh-cn/docs/scripting/functions/GetPlayerBuildingsRemoved"}}');var c=n(74848),s=n(28453);const a={title:"GetPlayerAttachedObject",sidebar_label:"GetPlayerAttachedObject",description:"Gets the player attachment object data by index.",tags:["player","object","attachment"]},l=void 0,i={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(t.p,{children:"Gets the player attachment object data by index."}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"playerid"}),(0,c.jsx)(t.td,{children:"The ID of the player whose data to get."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"index"}),(0,c.jsx)(t.td,{children:"The index (slot) to the object (0-9)."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"&modelid"}),(0,c.jsx)(t.td,{children:"Attached object model."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"&bone"}),(0,c.jsx)(t.td,{children:"Attached object bone."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["&Float",":offsetX"]}),(0,c.jsx)(t.td,{children:"X axis offset of the object."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["&Float",":offsetY"]}),(0,c.jsx)(t.td,{children:"Y axis offset of the object."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["&Float",":offsetZ"]}),(0,c.jsx)(t.td,{children:"Z axis offset of the object."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["&Float",":rotationX"]}),(0,c.jsx)(t.td,{children:"X axis rotation of the object."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["&Float",":rotationY"]}),(0,c.jsx)(t.td,{children:"Y axis rotation of the object."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["&Float",":rotationZ"]}),(0,c.jsx)(t.td,{children:"Z axis rotation of the object."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["&Float",":scaleX"]}),(0,c.jsx)(t.td,{children:"X axis scale of the object."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["&Float",":scaleY"]}),(0,c.jsx)(t.td,{children:"Y axis scale of the object."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["&Float",":scaleZ"]}),(0,c.jsx)(t.td,{children:"Z axis scale of the object."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"&materialColour1"}),(0,c.jsx)(t.td,{children:"Material colour 1 of the object."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"&materialColour2"}),(0,c.jsx)(t.td,{children:"Material colour 2 of the object."})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(t.p,{children:"Always returns true."}),"\n",(0,c.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:"new \n\tmodelid, \n\tbone, \n\tFloat:offsetX, Float:offsetY, Float:offsetZ, \n\tFloat:rotationX, Float:rotationY, Float:rotationZ, \n\tFloat:scaleX, Float:scaleY, Float:scaleZ, \n\tmaterialColour1, materialColour2;\n\n// Get the attached data of index 3\nGetPlayerAttachedObject(playerid, 3, modelid, bone, offsetX, offsetY, offsetZ, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ, materialColour1, materialColour2);\n"})}),"\n",(0,c.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SetPlayerAttachedObject",children:"SetPlayerAttachedObject"}),": Attach an object to a player"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"RemovePlayerAttachedObject",children:"RemovePlayerAttachedObject"}),": Remove an attached object from a player"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"IsPlayerAttachedObjectSlotUsed",children:"IsPlayerAttachedObjectSlotUsed"}),": Check whether an object is attached to a player in a specified index"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"EditAttachedObject",children:"EditAttachedObject"}),": Edit an attached object."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}}}]);