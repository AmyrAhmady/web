"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[68909],{28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>c});var n=a(96540);const l={},i=n.createContext(l);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(i.Provider,{value:t},e.children)}},77310:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/Get3DTextLabelAttachedData","title":"Get3DTextLabelAttachedData","description":"Gets the 3D text label attached data.","source":"@site/docs/scripting/functions/Get3DTextLabelAttachedData.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Get3DTextLabelAttachedData","permalink":"/docs/scripting/functions/Get3DTextLabelAttachedData","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/Get3DTextLabelAttachedData.md","tags":[{"inline":true,"label":"3dtextlabel","permalink":"/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Get3DTextLabelAttachedData","sidebar_label":"Get3DTextLabelAttachedData","description":"Gets the 3D text label attached data.","tags":["3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"GangZoneStopFlashForPlayer","permalink":"/docs/scripting/functions/GangZoneStopFlashForPlayer"},"next":{"title":"Get3DTextLabelColor","permalink":"/docs/scripting/functions/Get3DTextLabelColor"}}');var l=a(74848),i=a(28453);const r={title:"Get3DTextLabelAttachedData",sidebar_label:"Get3DTextLabelAttachedData",description:"Gets the 3D text label attached data.",tags:["3dtextlabel"]},c=void 0,s={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Gets the 3D text label attached data."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,l.jsx)(t.td,{children:"The ID of the 3D text label to get the attached data of."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"&parentPlayerid"}),(0,l.jsx)(t.td,{children:"A variable into which to store the parentPlayerid, passed by reference."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"&parentVehicleid"}),(0,l.jsx)(t.td,{children:"A variable into which to store the parentVehicleid, passed by reference."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(t.p,{children:["An example for ",(0,l.jsx)(t.strong,{children:"parentPlayerid"}),":"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'new Text3D:gMyLabel;\nnew parentPlayerid;\nnew parentVehicleid;\n\ngMyLabel = Create3DTextLabel("Hello, I am new here!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, false);\nAttach3DTextLabelToPlayer(gMyLabel, playerid, 0.0, 0.0, 0.7);\n\nGet3DTextLabelAttachedData(gMyLabel, parentPlayerid, parentVehicleid);\n'})}),"\n",(0,l.jsxs)(t.p,{children:["An example for ",(0,l.jsx)(t.strong,{children:"parentVehicleid"}),":"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:"new Text3D:gVehicle3dText[MAX_VEHICLES];\nnew gVehicleId;\n\nnew parentPlayerid;\nnew parentVehicleid;\n\ngVehicleId = CreateVehicle(510, 0.0, 0.0, 15.0, 5, 0, 120);\ngVehicle3dText[gVehicleId] = Create3DTextLabel(\"Example Text\", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, 0, false);\nAttach3DTextLabelToVehicle(gVehicle3dText[gVehicleId], gVehicleId, 0.0, 0.0, 2.0);\n\nGet3DTextLabelAttachedData(gVehicle3dText[gVehicleId], parentPlayerid, parentVehicleid);\n// The `parentVehicleid` will be the value of 'gVehicleId'\n"})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"Attach3DTextLabelToPlayer",children:"Attach3DTextLabelToPlayer"}),": Attach a 3D text label to a player."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"Attach3DTextLabelToVehicle",children:"Attach3DTextLabelToVehicle"}),": Attaches a 3D Text Label to a specific vehicle."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPlayer3DTextLabelAttachedData",children:"GetPlayer3DTextLabelAttachedData"}),": Gets the player 3D text label attached data."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}}}]);