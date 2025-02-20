"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[60424],{28453:(e,t,l)=>{l.d(t,{R:()=>s,x:()=>i});var r=l(96540);const a={},n=r.createContext(a);function s(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(n.Provider,{value:t},e.children)}},30159:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>x,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/CreatePlayer3DTextLabel","title":"CreatePlayer3DTextLabel","description":"Creates a 3D Text Label only for a specific player.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/CreatePlayer3DTextLabel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreatePlayer3DTextLabel","permalink":"/zh-cn/docs/scripting/functions/CreatePlayer3DTextLabel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/CreatePlayer3DTextLabel.md","tags":[{"inline":true,"label":"player","permalink":"/zh-cn/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/zh-cn/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"CreatePlayer3DTextLabel","sidebar_label":"CreatePlayer3DTextLabel","description":"Creates a 3D Text Label only for a specific player.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"CreatePickup","permalink":"/zh-cn/docs/scripting/functions/CreatePickup"},"next":{"title":"CreatePlayerGangZone","permalink":"/zh-cn/docs/scripting/functions/CreatePlayerGangZone"}}');var a=l(74848),n=l(28453);const s={title:"CreatePlayer3DTextLabel",sidebar_label:"CreatePlayer3DTextLabel",description:"Creates a 3D Text Label only for a specific player.",tags:["player","3dtextlabel"]},i=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Creates a 3D Text Label only for a specific player"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The player which should see the newly created 3DText Label."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"const text[]"}),(0,a.jsx)(t.td,{children:"The text to display."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"colour"}),(0,a.jsx)(t.td,{children:"The text color"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":x"]}),(0,a.jsx)(t.td,{children:"X Coordinate (or offset if attached)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":y"]}),(0,a.jsx)(t.td,{children:"Y Coordinate (or offset if attached)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":z"]}),(0,a.jsx)(t.td,{children:"Z Coordinate (or offset if attached)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":drawDistance"]}),(0,a.jsx)(t.td,{children:"The distance where you are able to see the 3D Text Label"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"attachedplayer"}),(0,a.jsx)(t.td,{children:"The player you want to attach the 3D Text Label to. (None: INVALID_PLAYER_ID)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"attachedvehicle"}),(0,a.jsx)(t.td,{children:"The vehicle you want to attach the 3D Text Label to. (None: INVALID_VEHICLE_ID)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["bool",":testLOS"]}),(0,a.jsx)(t.td,{children:"0/1 Test the line-of-sight so this text can't be seen through walls"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"OPEN_MP_TAGS:..."}),(0,a.jsx)(t.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(t.p,{children:["The ID of the newly created Player 3D Text Label, or ",(0,a.jsx)(t.code,{children:"INVALID_3DTEXT_ID"})," if the Player 3D Text Label limit (",(0,a.jsx)(t.code,{children:"MAX_3DTEXT_PLAYER"}),") was reached."]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/playerlabel", true))\n    {\n        new\n            PlayerText3D:playerTextId,\n            name[MAX_PLAYER_NAME],\n            Float:x, Float:y, Float:z,\n            string[64];\n\n        GetPlayerName(playerid, name, sizeof(name));\n        GetPlayerPos(playerid, x, y, z);\n\n        format(string, sizeof(string), "Hello %s!\\nI\'m at your position", name);\n        playerTextId = CreatePlayer3DTextLabel(playerid, string, 0x008080FF, x, y, z, 40.0);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"drawDistance seems to be a lot smaller when spectating."})}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"If text[] is empty, the server/clients next to the text might crash! (Fixed in open.mp)"})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"DeletePlayer3DTextLabel",children:"DeletePlayer3DTextLabel"}),": Delete a player's 3D text label."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"IsValidPlayer3DTextLabel",children:"IsValidPlayer3DTextLabel"}),": Checks if a player's 3D text label is valid."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"UpdatePlayer3DTextLabelText",children:"UpdatePlayer3DTextLabelText"}),": Change the text of a player's 3D text label."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayer3DTextLabelText",children:"GetPlayer3DTextLabelText"}),": Gets the player's 3D text label text."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayer3DTextLabelColour",children:"GetPlayer3DTextLabelColour"}),": Gets the player's 3D text label colour."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayer3DTextLabelPos",children:"GetPlayer3DTextLabelPos"}),": Gets the player's 3D text label position."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayer3DTextLabelDrawDistance",children:"GetPlayer3DTextLabelDrawDistance"}),": Gets the player's 3D text label draw distance."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayer3DTextLabelDrawDistance",children:"SetPlayer3DTextLabelDrawDistance"}),": Sets the player's 3D text label draw distance."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayer3DTextLabelVirtualWorld",children:"GetPlayer3DTextLabelVirtualWorld"}),": Gets the player's 3D text label virtual world id."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayer3DTextLabelVirtualWorld",children:"SetPlayer3DTextLabelVirtualWorld"}),": Sets the player's 3D text label virtual world id."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayer3DTextLabelLOS",children:"GetPlayer3DTextLabelLOS"}),": Gets the player's 3D text label line-of-sight."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayer3DTextLabelLOS",children:"SetPlayer3DTextLabelLOS"}),": Sets the player's 3D text label line-of-sight."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"Create3DTextLabel",children:"Create3DTextLabel"}),": Create a global 3D text label."]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}}}]);