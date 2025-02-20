"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[99136],{28453:(e,t,l)=>{l.d(t,{R:()=>s,x:()=>i});var a=l(96540);const n={},r=a.createContext(n);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(r.Provider,{value:t},e.children)}},74631:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"scripting/functions/Attach3DTextLabelToPlayer","title":"Attach3DTextLabelToPlayer","description":"Attach a 3D text label to a player.","source":"@site/docs/scripting/functions/Attach3DTextLabelToPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Attach3DTextLabelToPlayer","permalink":"/sl/docs/scripting/functions/Attach3DTextLabelToPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/Attach3DTextLabelToPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/sl/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Attach3DTextLabelToPlayer","sidebar_label":"Attach3DTextLabelToPlayer","description":"Attach a 3D text label to a player.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"ArePlayerWeaponsAllowed","permalink":"/sl/docs/scripting/functions/ArePlayerWeaponsAllowed"},"next":{"title":"Attach3DTextLabelToVehicle","permalink":"/sl/docs/scripting/functions/Attach3DTextLabelToVehicle"}}');var n=l(74848),r=l(28453);const s={title:"Attach3DTextLabelToPlayer",sidebar_label:"Attach3DTextLabelToPlayer",description:"Attach a 3D text label to a player.",tags:["player","3dtextlabel"]},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Attach a 3D text label to a player."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,n.jsx)(t.td,{children:"The ID of the 3D text label to attach. Returned by Create3DTextLabel."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player to attach the label to."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":offsetX"]}),(0,n.jsx)(t.td,{children:"The X offset from the player."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":offsetY"]}),(0,n.jsx)(t.td,{children:"The Y offset from the player."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":offsetZ"]}),(0,n.jsx)(t.td,{children:"The Z offset from the player."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means the player and/or label do not exist."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    new Text3D:textLabel = Create3DTextLabel("Hello, I am new here!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);\n    Attach3DTextLabelToPlayer(textLabel, playerid, 0.0, 0.0, 0.7);\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Create3DTextLabel",children:"Create3DTextLabel"}),": Create a 3D text label."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Delete3DTextLabel",children:"Delete3DTextLabel"}),": Delete a 3D text label."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Get3DTextLabelAttachedData",children:"Get3DTextLabelAttachedData"}),": Gets the 3D text label attached data."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Attach3DTextLabelToVehicle",children:"Attach3DTextLabelToVehicle"}),": Attach a 3D text label to a vehicle."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Update3DTextLabelText",children:"Update3DTextLabelText"}),": Change the text of a 3D text label."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"CreatePlayer3DTextLabel",children:"CreatePlayer3DTextLabel"}),": Create A 3D text label for one player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"DeletePlayer3DTextLabel",children:"DeletePlayer3DTextLabel"}),": Delete a player's 3D text label."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"UpdatePlayer3DTextLabelText",children:"UpdatePlayer3DTextLabelText"}),": Change the text of a player's 3D text label."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}}}]);