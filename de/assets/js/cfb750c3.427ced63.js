"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[23024],{28453:(e,n,c)=>{c.d(n,{R:()=>r,x:()=>l});var a=c(96540);const i={},t=a.createContext(i);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(t.Provider,{value:n},e.children)}},86830:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>s});const a=JSON.parse('{"id":"scripting/callbacks/OnRecordingPlaybackEnd","title":"OnRecordingPlaybackEnd","description":"This callback is called when a recorded file being reproduced with StartRecordingPlayback has reached to its end.","source":"@site/docs/scripting/callbacks/OnRecordingPlaybackEnd.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnRecordingPlaybackEnd","permalink":"/de/docs/scripting/callbacks/OnRecordingPlaybackEnd","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnRecordingPlaybackEnd.md","tags":[],"version":"current","frontMatter":{"title":"OnRecordingPlaybackEnd","sidebar_label":"OnRecordingPlaybackEnd","description":"This callback is called when a recorded file being reproduced with StartRecordingPlayback has reached to its end.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnRconLoginAttempt","permalink":"/de/docs/scripting/callbacks/OnRconLoginAttempt"},"next":{"title":"OnScriptLoadPlayer","permalink":"/de/docs/scripting/callbacks/OnScriptLoadPlayer"}}');var i=c(74848),t=c(28453);const r={title:"OnRecordingPlaybackEnd",sidebar_label:"OnRecordingPlaybackEnd",description:"This callback is called when a recorded file being reproduced with StartRecordingPlayback has reached to its end.",tags:[]},l=void 0,d={},s=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["This callback is called when a .rec file, being played with ",(0,i.jsx)(n.a,{href:"../functions/StartRecordingPlayback",children:"StartRecordingPlayback"}),", has reached its end."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnRecordingPlaybackEnd()\n{\n    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); // This will play the recording again once it has reached its end.\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/StartRecordingPlayback",children:"StartRecordingPlayback"}),": Starts reproducing an already recorded .rec file."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/StopRecordingPlayback",children:"StopRecordingPlayback"}),": Stops reproducing a .rec file."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}}}]);