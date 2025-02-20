"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[26281],{28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>d});var l=a(96540);const n={},r=l.createContext(n);function i(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),l.createElement(r.Provider,{value:t},e.children)}},94718:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>s});const l=JSON.parse('{"id":"scripting/functions/GetPlayer3DTextLabelAttached","title":"GetPlayer3DTextLabelAttached","description":"Gets the player\'s 3D text label attached data.","source":"@site/docs/scripting/functions/GetPlayer3DTextLabelAttached.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayer3DTextLabelAttached","permalink":"/tr/docs/scripting/functions/GetPlayer3DTextLabelAttached","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayer3DTextLabelAttached.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/tr/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"GetPlayer3DTextLabelAttached","sidebar_label":"GetPlayer3DTextLabelAttached","description":"Gets the player\'s 3D text label attached data.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"GetPickupVirtualWorld","permalink":"/tr/docs/scripting/functions/GetPickupVirtualWorld"},"next":{"title":"GetPlayer3DTextLabelAttachedData","permalink":"/tr/docs/scripting/functions/GetPlayer3DTextLabelAttachedData"}}');var n=a(74848),r=a(28453);const i={title:"GetPlayer3DTextLabelAttached",sidebar_label:"GetPlayer3DTextLabelAttached",description:"Gets the player's 3D text label attached data.",tags:["player","3dtextlabel"]},d=void 0,c={},s=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["This function is deprecated. Please see ",(0,n.jsx)(t.a,{href:"GetPlayer3DTextLabelAttachedData",children:"GetPlayer3DTextLabelAttachedData"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Gets the player's 3D text label attached data."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["PlayerText3D",":textid"]}),(0,n.jsx)(t.td,{children:"The ID of the player's 3D text label to get the attached data of."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"&parentPlayerid"}),(0,n.jsx)(t.td,{children:"A variable into which to store the parentPlayerid, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"&parentVehicleid"}),(0,n.jsx)(t.td,{children:"A variable into which to store the parentVehicleid, passed by reference."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:"An example for parentPlayerid:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"new PlayerText3D:playerTextId;\nnew Float:X, Float:Y, Float:Z;\nnew attachedplayer = 37; // Attach to player id 37\n\nnew parentPlayerid;\nnew parentVehicleid;\n\nGetPlayerPos(playerid, X, Y, Z);\nplayerTextId = CreatePlayer3DTextLabel(playerid, \"Hello\\nI'm at your position\", 0x008080FF, X, Y, Z, 40.0, attachedplayer, INVALID_VEHICLE_ID);\n\nGetPlayer3DTextLabelAttached(playerid, playerTextId, parentPlayerid, parentVehicleid);\n// The `parentPlayerid` will be '37'\n"})}),"\n",(0,n.jsx)(t.p,{children:"An example for parentVehicleid:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"new PlayerText3D:gVehicle3dText[MAX_VEHICLES];\nnew gVehicleId;\n\nnew parentPlayerid;\nnew parentVehicleid;\n\ngVehicleId = CreateVehicle(510, 0.0, 0.0, 15.0, 5, 0, 120);\ngVehicle3dText[gVehicleId] = CreatePlayer3DTextLabel(playerid, \"Example Text\", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, INVALID_PLAYER_ID, gVehicleId);\n\nGetPlayer3DTextLabelAttached(playerid, gVehicle3dText[gVehicleId], parentPlayerid, parentVehicleid);\n// The `parentVehicleid` will be the value of 'gVehicleId'\n"})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["This function is just short name of ",(0,n.jsx)(t.a,{href:"GetPlayer3DTextLabelAttachedData",children:"GetPlayer3DTextLabelAttachedData"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Get3DTextLabelAttachedData",children:"Get3DTextLabelAttachedData"}),": Gets the 3D text label attached data."]}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);