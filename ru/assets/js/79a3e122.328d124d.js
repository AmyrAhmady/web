"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[88457],{28453:(e,t,l)=>{l.d(t,{R:()=>i,x:()=>s});var n=l(96540);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}},49762:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>o,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/Create3DTextLabel","title":"Create3DTextLabel","description":"Creates a 3D Text Label at a specific location in the world.","source":"@site/docs/scripting/functions/Create3DTextLabel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Create3DTextLabel","permalink":"/ru/docs/scripting/functions/Create3DTextLabel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/Create3DTextLabel.md","tags":[{"inline":true,"label":"3dtextlabel","permalink":"/ru/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Create3DTextLabel","sidebar_label":"Create3DTextLabel","description":"Creates a 3D Text Label at a specific location in the world.","tags":["3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"CountRunningTimers","permalink":"/ru/docs/scripting/functions/CountRunningTimers"},"next":{"title":"CreateActor","permalink":"/ru/docs/scripting/functions/CreateActor"}}');var r=l(74848),a=l(28453);const i={title:"Create3DTextLabel",sidebar_label:"Create3DTextLabel",description:"Creates a 3D Text Label at a specific location in the world.",tags:["3dtextlabel"]},s=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function x(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Creates a 3D Text Label at a specific location in the world"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"const text[]"}),(0,r.jsx)(t.td,{children:"The initial text string."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"colour"}),(0,r.jsx)(t.td,{children:"The text Color, as an integer or hex in RGBA color format"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":x"]}),(0,r.jsx)(t.td,{children:"X-Coordinate"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":y"]}),(0,r.jsx)(t.td,{children:"Y-Coordinate"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":z"]}),(0,r.jsx)(t.td,{children:"Z-Coordinate"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":drawDistance"]}),(0,r.jsx)(t.td,{children:"The distance from where you are able to see the 3D Text Label"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"virtualWorld"}),(0,r.jsx)(t.td,{children:"The virtual world in which you are able to see the 3D Text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["bool",":testLOS"]}),(0,r.jsx)(t.td,{children:"Test the line-of-sight so this text can't be seen through objects (true/false)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"OPEN_MP_TAGS:..."}),(0,r.jsx)(t.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:["The ID of the newly created 3D Text Label, or ",(0,r.jsx)(t.code,{children:"INVALID_3DTEXT_ID"})," if the 3D Text Label limit (",(0,r.jsx)(t.code,{children:"MAX_3DTEXT_GLOBAL"}),") was reached."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    Create3DTextLabel("I\'m at the coordinates:\\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/mark", true))\n    {\n        new name[MAX_PLAYER_NAME];\n        new Float:x, Float:y, Float:z;\n        new worldid;\n\n        GetPlayerName(playerid, name, sizeof(name));\n        GetPlayerPos(playerid, x, y, z);\n        worldid = GetPlayerVirtualWorld(playerid);\n\n        Create3DTextLabel("%s marked this place", 0xFF0000FF, x, y, z, 15.0, worldid, false, name);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"drawDistance seems to be a lot smaller when spectating."})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Use colour embedding for multiple colours in the text."})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"If text[] is empty, the server/clients next to the text might crash! (Fixed in open.mp)"}),"\n",(0,r.jsx)(t.li,{children:"If the virtualworld is set as -1 the text will not appear."}),"\n"]})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Delete3DTextLabel",children:"Delete3DTextLabel"}),": Delete a 3D text label."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"IsValid3DTextLabel",children:"IsValid3DTextLabel"}),": Checks if a 3D text label is valid."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Is3DTextLabelStreamedIn",children:"Is3DTextLabelStreamedIn"}),": Checks if a 3D text label is streamed in for a player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Attach3DTextLabelToPlayer",children:"Attach3DTextLabelToPlayer"}),": Attach a 3D text label to a player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Attach3DTextLabelToVehicle",children:"Attach3DTextLabelToVehicle"}),": Attach a 3D text label to a vehicle."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Update3DTextLabelText",children:"Update3DTextLabelText"}),": Change the text of a 3D text label."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Get3DTextLabelText",children:"Get3DTextLabelText"}),": Gets the 3D text label text."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Get3DTextLabelColour",children:"Get3DTextLabelColour"}),": Gets the 3D text label colour."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Get3DTextLabelPos",children:"Get3DTextLabelPos"}),": Gets the 3D text label position."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Get3DTextLabelDrawDistance",children:"Get3DTextLabelDrawDistance"}),": Gets the 3D text label draw distance."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Set3DTextLabelDrawDistance",children:"Set3DTextLabelDrawDistance"}),": Sets the 3D text label draw distance."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Get3DTextLabelVirtualWorld",children:"Get3DTextLabelVirtualWorld"}),": Gets the 3D text label virtual world id."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Set3DTextLabelVirtualWorld",children:"Set3DTextLabelVirtualWorld"}),": Sets the 3D text label virtual world id."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Get3DTextLabelLOS",children:"Get3DTextLabelLOS"}),": Gets the 3D text label line-of-sight."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Set3DTextLabelLOS",children:"Set3DTextLabelLOS"}),": Sets the 3D text label line-of-sight."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CreatePlayer3DTextLabel",children:"CreatePlayer3DTextLabel"}),": Create A 3D text label for one player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"DeletePlayer3DTextLabel",children:"DeletePlayer3DTextLabel"}),": Delete a player's 3D text label."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"UpdatePlayer3DTextLabelText",children:"UpdatePlayer3DTextLabelText"}),": Change the text of a player's 3D text label."]}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}}}]);