"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[33514],{8035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>j,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/IsObjectMaterialSlotUsed","title":"IsObjectMaterialSlotUsed","description":"Checks if a slot of object material is used.","source":"@site/docs/scripting/functions/IsObjectMaterialSlotUsed.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsObjectMaterialSlotUsed","permalink":"/th/docs/scripting/functions/IsObjectMaterialSlotUsed","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsObjectMaterialSlotUsed.md","tags":[{"inline":true,"label":"object","permalink":"/th/docs/tags/object"}],"version":"current","frontMatter":{"title":"IsObjectMaterialSlotUsed","sidebar_label":"IsObjectMaterialSlotUsed","description":"Checks if a slot of object material is used.","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"IsObjectHiddenForPlayer","permalink":"/th/docs/scripting/functions/IsObjectHiddenForPlayer"},"next":{"title":"IsObjectMoving","permalink":"/th/docs/scripting/functions/IsObjectMoving"}}');var s=n(74848),r=n(28453);const c={title:"IsObjectMaterialSlotUsed",sidebar_label:"IsObjectMaterialSlotUsed",description:"Checks if a slot of object material is used.",tags:["object"]},l=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Checks if a slot of object material is used."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"objectid"}),(0,s.jsx)(t.td,{children:"The ID of the object."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"materialIndex"}),(0,s.jsx)(t.td,{children:"The material index on the object. (0 to 15)"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"The function returns the type of material slot usage."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"0"})," - None"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"1"})," - Material"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"2"})," - Text"]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'new objectid = CreateObject(19371, 978.71143, -925.25708, 42.63720,   0.00000, 0.00000, 2.00000);\nSetObjectMaterial(objectid, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);\n\nnew type = IsObjectMaterialSlotUsed(objectid, 0);\n// type = 1\n'})}),"\n",(0,s.jsx)(t.p,{children:"Another example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'new objectid = CreateObject(19174, 986.42767, -983.14850, 40.95220,   0.00000, 0.00000, 186.00000);\nSetObjectMaterialText(objectid, "OPEN.MP", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 38, true, 0xFF0000FF, 0x00000000, OBJECT_MATERIAL_TEXT_ALIGN_LEFT);\n\nnew type = IsObjectMaterialSlotUsed(objectid, 0);\n// type = 2\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetObjectMaterial",children:"SetObjectMaterial"}),": Replace the texture of an object with the texture from another model in the game."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetObjectMaterialText",children:"SetObjectMaterialText"}),": Replace the texture of an object with text."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetObjectMaterial",children:"GetObjectMaterial"}),": Get the material data from an index of the object."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetObjectMaterialText",children:"GetObjectMaterialText"}),": Get the material text data from an index of the object."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"IsPlayerObjectMaterialSlotUsed",children:"IsPlayerObjectMaterialSlotUsed"}),": Checks if a slot of player-object material is used."]}),"\n"]})]})}function j(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>l});var i=n(96540);const s={},r=i.createContext(s);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);