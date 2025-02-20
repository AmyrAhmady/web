"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[61216],{22574:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"scripting/functions/CreateExplosion","title":"CreateExplosion","description":"Create an explosion at the specified coordinates.","source":"@site/docs/scripting/functions/CreateExplosion.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreateExplosion","permalink":"/ar/docs/scripting/functions/CreateExplosion","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/CreateExplosion.md","tags":[],"version":"current","frontMatter":{"title":"CreateExplosion","sidebar_label":"CreateExplosion","description":"Create an explosion at the specified coordinates.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"CreateActor","permalink":"/ar/docs/scripting/functions/CreateActor"},"next":{"title":"CreateExplosionForPlayer","permalink":"/ar/docs/scripting/functions/CreateExplosionForPlayer"}}');var i=t(74848),o=t(28453);const r={title:"CreateExplosion",sidebar_label:"CreateExplosion",description:"Create an explosion at the specified coordinates.",tags:[]},l=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"See Also",id:"see-also",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Create an explosion at the specified coordinates."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":x"]}),(0,i.jsx)(n.td,{children:"The X coordinate of the explosion."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":y"]}),(0,i.jsx)(n.td,{children:"The Y coordinate of the explosion."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":z"]}),(0,i.jsx)(n.td,{children:"The Z coordinate of the explosion."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsxs)(n.td,{children:["The ",(0,i.jsx)(n.a,{href:"../resources/explosionlist",children:"type"})," of the explosion."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":radius"]}),(0,i.jsx)(n.td,{children:"The radius of the explosion."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"This function always returns 1, even when the explosion type and/or radius values are invalid."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"public OnPlayerEnterCheckpoint(playerid)\n{\n    // Get the player's position\n    new Float:x, Float:y, Float:z;\n    GetPlayerPos(playerid, x, y, z);\n\n    // Create an explosion at the player's position\n    CreateExplosion(x, y, z, 12, 10.0);\n\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"There is a limit as to how many explosions can be seen at once by a player. This is roughly 10."})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"CreateExplosionForPlayer",children:"CreateExplosionForPlayer"}),": Create an explosion which is visible for only a single player."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See Also"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../resources/explosionlist",children:"Explosion Types"}),": A list of all the explosion types."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);