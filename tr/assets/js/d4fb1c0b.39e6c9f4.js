"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[91409],{28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>l});var n=t(96540);const r={},c=n.createContext(r);function s(e){const i=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(c.Provider,{value:i},e.children)}},71252:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>p,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"scripting/functions/GetPickupModel","title":"GetPickupModel","description":"Gets the model ID of a pickup.","source":"@site/docs/scripting/functions/GetPickupModel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPickupModel","permalink":"/tr/docs/scripting/functions/GetPickupModel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPickupModel.md","tags":[{"inline":true,"label":"pickup","permalink":"/tr/docs/tags/pickup"}],"version":"current","frontMatter":{"title":"GetPickupModel","sidebar_label":"GetPickupModel","description":"Gets the model ID of a pickup.","tags":["pickup"]},"sidebar":"docsSidebar","previous":{"title":"GetPVarsUpperIndex","permalink":"/tr/docs/scripting/functions/GetPVarsUpperIndex"},"next":{"title":"GetPickupPos","permalink":"/tr/docs/scripting/functions/GetPickupPos"}}');var r=t(74848),c=t(28453);const s={title:"GetPickupModel",sidebar_label:"GetPickupModel",description:"Gets the model ID of a pickup.",tags:["pickup"]},l=void 0,p={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components},{VersionWarn:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(i.p,{children:"Gets the model ID of a pickup."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"pickupid"}),(0,r.jsx)(i.td,{children:"The ID of the pickup to get the model ID of."})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:"Returns the model ID of the pickup."}),"\n",(0,r.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:"new g_Pickup;\n\npublic OnGameModeInit()\n{\n    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);\n\n    new model = GetPickupModel(g_Pickup);\n    // model = 1239\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"CreatePickup",children:"CreatePickup"}),": Create a pickup."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"AddStaticPickup",children:"AddStaticPickup"}),": Add a static pickup."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"DestroyPickup",children:"DestroyPickup"}),": Destroy a pickup."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"IsValidPickup",children:"IsValidPickup"}),": Checks if a pickup is valid."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"IsPickupStreamedIn",children:"IsPickupStreamedIn"}),": Checks if a pickup is streamed in for a specific player."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"IsPickupHiddenForPlayer",children:"IsPickupHiddenForPlayer"}),": Checks if a pickup is hidden for a specific player."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetPickupPos",children:"SetPickupPos"}),": Sets the position of a pickup."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetPickupPos",children:"GetPickupPos"}),": Gets the coordinates of a pickup."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetPickupModel",children:"SetPickupModel"}),": Sets the model of a pickup."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetPickupType",children:"SetPickupType"}),": Sets the type of a pickup."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetPickupType",children:"GetPickupType"}),": Gets the type of a pickup."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetPickupVirtualWorld",children:"SetPickupVirtualWorld"}),": Sets the virtual world ID of a pickup."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetPickupVirtualWorld",children:"GetPickupVirtualWorld"}),": Gets the virtual world ID of a pickup."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"ShowPickupForPlayer",children:"ShowPickupForPlayer"}),": Shows a pickup for a specific player."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"HidePickupForPlayer",children:"HidePickupForPlayer"}),": Hides a pickup for a specific player."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetPickupForPlayer",children:"SetPickupForPlayer"}),": Adjusts the pickup model, type, and position for a specific player."]}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);