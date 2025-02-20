"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[5381],{28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(96540);const o={},a=n.createContext(o);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:t},e.children)}},68954:e=>{e.exports=JSON.parse('{"permalink":"/tr/blog/turfs-formerly-gangzones-module","editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/blog/blog/2019-10-19-turfs-formerly-gangzones-module.md","source":"@site/blog/2019-10-19-turfs-formerly-gangzones-module.md","title":"Turfs (formerly gangzones) module","description":"Hello! I have just finished our Turf implementation into the server and I thought of posting a overview of this module and to show we haven\'t quit or anything!","date":"2019-10-19T00:00:00.000Z","tags":[],"readingTime":1.36,"hasTruncateMarker":true,"authors":[{"name":"J0sh","key":"j0sh","page":null}],"frontMatter":{"slug":"turfs-formerly-gangzones-module","title":"Turfs (formerly gangzones) module","authors":"j0sh"},"unlisted":false,"prevItem":{"title":"Vehicle Sync","permalink":"/tr/blog/vehicle-sync"},"nextItem":{"title":"Timers module","permalink":"/tr/blog/timers"}}')},97609:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>u});var n=r(68954),o=r(74848),a=r(28453);const s={slug:"turfs-formerly-gangzones-module",title:"Turfs (formerly gangzones) module",authors:"j0sh"},l=void 0,i={authorsImageUrls:[void 0]},u=[];function f(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Hello! I have just finished our Turf implementation into the server and I thought of posting a overview of this module and to show we haven't quit or anything!"}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"The content of the following post is out of date and has no reference to the current state of open.mp. The post is published here for archival purposes."})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:"// Creates a Turf. A playerid can be passed in order to make it a player turf.\nnative Turf:Turf_Create(Float:minx, Float:miny, Float:maxx, Float:maxy, Player:owner = INVALID_PLAYER_ID);\n\n// Destroys a turf.\nnative Turf_Destroy(Turf:turf);\n\n// Shows a Turf to a player or players.\n// Will send to all players if playerid = INVALID_PLAYER_ID.\nnative Turf_Show(Turf:turf, colour, Player:playerid = INVALID_PLAYER_ID);\n\n// Hides a Turf from a player or players.\n// Will send to all players if playerid = INVALID_PLAYER_ID.\nnative Turf_Hide(Turf:turf, Player:playerid = INVALID_PLAYER_ID);\n\n// Flashes a Turf for a player or players.\n// Will send to all players if  playerid = INVALID_PLAYER_ID.\nnative Turf_Flash(Turf:turf, colour, Player:playerid = INVALID_PLAYER_ID);\n\n// Stops a Turf from flashing for player(s).\n// Will send to all players if playerid = INVALID_PLAYER_ID.\nnative Turf_StopFlashing(Turf:turf, Player:playerid = INVALID_PLAYER_ID);\n"})}),"\n",(0,o.jsx)(t.p,{children:"This is obviously different from the traditional API, but not to worry, there will be wrappers in place for this kind of stuff to make sure a normal script can be recompiled with no issues and without edits."}),"\n",(0,o.jsx)(t.p,{children:"Another important fact that you may want to know is that every turf is in the same pool and there's a maximum of 4,294,967,295 turfs to be created from the script. However, the client can only handle 1024 turfs at one time."})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}}}]);