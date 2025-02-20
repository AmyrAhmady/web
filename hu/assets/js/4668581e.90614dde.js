"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[29018],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}},68713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/SetPVarString","title":"SetPVarString","description":"Saves a string into a player variable.","source":"@site/docs/scripting/functions/SetPVarString.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPVarString","permalink":"/hu/docs/scripting/functions/SetPVarString","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPVarString.md","tags":[{"inline":true,"label":"player variable","permalink":"/hu/docs/tags/player-variable"},{"inline":true,"label":"pvar","permalink":"/hu/docs/tags/pvar"}],"version":"current","frontMatter":{"title":"SetPVarString","sidebar_label":"SetPVarString","description":"Saves a string into a player variable.","tags":["player variable","pvar"]},"sidebar":"docsSidebar","previous":{"title":"SetPVarInt","permalink":"/hu/docs/scripting/functions/SetPVarInt"},"next":{"title":"SetPickupForPlayer","permalink":"/hu/docs/scripting/functions/SetPickupForPlayer"}}');var i=n(74848),a=n(28453);const s={title:"SetPVarString",sidebar_label:"SetPVarString",description:"Saves a string into a player variable.",tags:["player variable","pvar"]},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Saves a string into a player variable."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player whose player variable will be set."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"const pvar[]"}),(0,i.jsx)(t.td,{children:"The name of the player variable."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"const value[]"}),(0,i.jsx)(t.td,{children:"The string you want to save in the player variable."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"OPEN_MP_TAGS:..."}),(0,i.jsx)(t.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    new \n        hours, \n        minutes, \n        seconds, \n        string[46];\n\n    gettime(hours, minutes, seconds); // get the time\n    format(string, sizeof(string), "Connected on %02d:%02d:%02d", hours, minutes, seconds); // create the string with the connect time\n    SetPVarString(playerid, "timeconnected", string); // save the string into a player variable\n\n    // PRO TIP: You don\'t need `format` in open.mp\n    SetPVarString(playerid, "timeconnected", "Connected on %02d:%02d:%02d", hours, minutes, seconds);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Variables aren't reset until after ",(0,i.jsx)(t.a,{href:"../callbacks/OnPlayerDisconnect",children:"OnPlayerDisconnect"})," is called, so the values are still accessible in OnPlayerDisconnect."]})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPVarInt",children:"SetPVarInt"}),": Set an integer for a player variable."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPVarInt",children:"GetPVarInt"}),": Get the previously set integer from a player variable."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPVarString",children:"GetPVarString"}),": Get the previously set string from a player variable."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPVarFloat",children:"SetPVarFloat"}),": Set a float for a player variable."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPVarFloat",children:"GetPVarFloat"}),": Get the previously set float from a player variable."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DeletePVar",children:"DeletePVar"}),": Delete a player variable."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);