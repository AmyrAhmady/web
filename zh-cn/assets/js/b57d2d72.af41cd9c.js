"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[75044],{28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var r=n(96540);const i={},s=r.createContext(i);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:t},e.children)}},85579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"scripting/functions/SetObjectMaterial","title":"SetObjectMaterial","description":"Replace the texture of an object with the texture from another model in the game.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/SetObjectMaterial.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetObjectMaterial","permalink":"/zh-cn/docs/scripting/functions/SetObjectMaterial","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetObjectMaterial.md","tags":[{"inline":true,"label":"object","permalink":"/zh-cn/docs/tags/object"}],"version":"current","frontMatter":{"title":"SetObjectMaterial","sidebar_label":"SetObjectMaterial","description":"Replace the texture of an object with the texture from another model in the game.","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"SetNameTagDrawDistance","permalink":"/zh-cn/docs/scripting/functions/SetNameTagDrawDistance"},"next":{"title":"SetObjectMaterialText","permalink":"/zh-cn/docs/scripting/functions/SetObjectMaterialText"}}');var i=n(74848),s=n(28453);const c={title:"SetObjectMaterial",sidebar_label:"SetObjectMaterial",description:"Replace the texture of an object with the texture from another model in the game.",tags:["object"]},a=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Advanaced Map Editors",id:"advanaced-map-editors",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Replace the texture of an object with the texture from another model in the game."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"The ID of the object to change the texture of"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"materialIndex"}),(0,i.jsx)(t.td,{children:"The material index on the object to change (0 to 15)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"modelid"}),(0,i.jsx)(t.td,{children:"The modelid on which the replacement texture is located. Use 0 for alpha. Use -1 to change the material color without altering the texture."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"const textureLibrary[]"}),(0,i.jsx)(t.td,{children:'The name of the txd file which contains the replacement texture (use "none" if not required)'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"const textureName[]"}),(0,i.jsx)(t.td,{children:'The name of the texture to use as the replacement (use "none" if not required)'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"materialColour"}),(0,i.jsx)(t.td,{children:"The object color to set, as an integer or hex in ARGB color format. Using 0 keeps the existing material color."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"false"})," - The function failed to execute."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid,cmdtext[])\n{\n    if (!strcmp(cmdtext, "/mycommand", true))\n    {\n        new\n            Float:x, Float:y, Float:z,\n            myObject;\n\n        GetPlayerPos(playerid, x, y, z);\n        myObject = CreateObject(19371, x, y, z+0.5, 0.0, 0.0, 0.0, 300.0);\n        SetObjectMaterial(myObject, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);\n        // Replaces the texture of our object with the texture of object 19341\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Vertex lighting of the object will disappear if material color is changed."})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"You MUST use ARGB color format, not RGBA like used in client messages etc."})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerObjectMaterial",children:"SetPlayerObjectMaterial"}),": Replace the texture of a player object with the texture from another model in the game."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetObjectMaterialText",children:"SetObjectMaterialText"}),": Replace the texture of an object with text."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"advanaced-map-editors",children:"Advanaced Map Editors"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/Pottus/Texture-Studio",children:"Texture Studio"})," by Pottus"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/NexiusTailer/Ultimate-Creator",children:"Ultimate Creator"})," by Nexius"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/fusez/Map-Editor-V3",children:"Fusez's Map Editor"})," by RedFusion"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);