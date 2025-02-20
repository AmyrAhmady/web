"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[89468],{28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var a=r(96540);const n={},i=a.createContext(n);function l(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(i.Provider,{value:t},e.children)}},86681:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>a,toc:()=>s});const a=JSON.parse('{"id":"scripting/functions/PlayerTextDrawGetPreviewRot","title":"PlayerTextDrawGetPreviewRot","description":"Gets the rotation and zoom of a 3D model preview player-textdraw.","source":"@site/docs/scripting/functions/PlayerTextDrawGetPreviewRot.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawGetPreviewRot","permalink":"/de/docs/scripting/functions/PlayerTextDrawGetPreviewRot","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/PlayerTextDrawGetPreviewRot.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/de/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/de/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"PlayerTextDrawGetPreviewRot","sidebar_label":"PlayerTextDrawGetPreviewRot","description":"Gets the rotation and zoom of a 3D model preview player-textdraw.","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawGetPreviewModel","permalink":"/de/docs/scripting/functions/PlayerTextDrawGetPreviewModel"},"next":{"title":"PlayerTextDrawGetPreviewVehCol","permalink":"/de/docs/scripting/functions/PlayerTextDrawGetPreviewVehCol"}}');var n=r(74848),i=r(28453);const l={title:"PlayerTextDrawGetPreviewRot",sidebar_label:"PlayerTextDrawGetPreviewRot",description:"Gets the rotation and zoom of a 3D model preview player-textdraw.",tags:["player","textdraw","playertextdraw"]},o=void 0,d={},s=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Gets the rotation and zoom of a 3D model preview player-textdraw."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["PlayerText",":textid"]}),(0,n.jsx)(t.td,{children:"The ID of the player-textdraw to get rotation and zoom of."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["&Float",":rotationX"]}),(0,n.jsx)(t.td,{children:"A float variable into which to store rotationX coordinate, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["&Float",":rotationY"]}),(0,n.jsx)(t.td,{children:"A float variable into which to store rotationY coordinate, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["&Float",":rotationZ"]}),(0,n.jsx)(t.td,{children:"A float variable into which to store rotationZ coordinate, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["&Float",":zoom"]}),(0,n.jsx)(t.td,{children:"A float variable into which to store zoom value, passed by reference."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'new PlayerText:gMyTextdraw[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");\n    PlayerTextDrawFont(playerid, gMyTextdraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);\n    PlayerTextDrawUseBox(playerid, gMyTextdraw[playerid], 1);\n    PlayerTextDrawBoxColor(playerid, gMyTextdraw[playerid], 0x000000FF);\n    PlayerTextDrawTextSize(playerid, gMyTextdraw[playerid], 40.0, 40.0);\n    PlayerTextDrawSetPreviewModel(playerid, gMyTextdraw[playerid], 411);\n    PlayerTextDrawSetPreviewRot(playerid, gMyTextdraw[playerid], -10.0, 0.0, -20.0, 1.0);\n    PlayerTextDrawShow(playerid, gMyTextdraw[playerid]);\n\n    new Float:rotationX, Float:rotationY, Float:rotationZ, Float:zoom;\n    PlayerTextDrawGetPreviewRot(playerid, gMyTextdraw[playerid], rotationX, rotationY, rotationZ, zoom);\n    // rotationX = -10.0\n    // rotationY = 0.0\n    // rotationZ = -20.0\n    // zoom = 1.0\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawSetPreviewRot",children:"PlayerTextDrawSetPreviewRot"}),": Set rotation of a 3D player textdraw preview."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawSetPreviewModel",children:"PlayerTextDrawSetPreviewModel"}),": Set the 3D preview model of a player textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawSetPreviewVehCol",children:"PlayerTextDrawSetPreviewVehCol"}),": Set the colours of a vehicle in a 3D player textdraw preview."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../callbacks/OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"}),": Called when a player clicks on a textdraw."]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);