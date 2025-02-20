"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[62334],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}},80280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"tutorials/PortForwarding","title":"Port Forwarding","description":"Server port forwarding tutorial.","source":"@site/docs/tutorials/PortForwarding.md","sourceDirName":"tutorials","slug":"/tutorials/PortForwarding","permalink":"/hu/docs/tutorials/PortForwarding","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/tutorials/PortForwarding.md","tags":[],"version":"current","frontMatter":{"title":"Port Forwarding","sidebar_label":"Port Forwarding","description":"Server port forwarding tutorial."},"sidebar":"docsSidebar","previous":{"title":"Plugin Development Guide","permalink":"/hu/docs/tutorials/PluginDevelopmentGuide"},"next":{"title":"SA:MP Query Mechanism","permalink":"/hu/docs/tutorials/QueryMechanism"}}');var o=n(74848),i=n(28453);const s={title:"Port Forwarding",sidebar_label:"Port Forwarding",description:"Server port forwarding tutorial."},a=void 0,d={},l=[{value:"The Start",id:"the-start",level:2},{value:"Router Configuration",id:"router-configuration",level:2},{value:"Getting the IP, Continuing",id:"getting-the-ip-continuing",level:2},{value:"The finish",id:"the-finish",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Welcome to the Port Forward tutorial!"})}),"\n",(0,o.jsx)(t.p,{children:"So, you have arrived to the Port Forward tutorial, made by Leopard."}),"\n",(0,o.jsx)(t.p,{children:"All you need is a samp-server or omp-server and a router. If you have not a router, then you don't need to port forward!"}),"\n",(0,o.jsx)(t.h2,{id:"the-start",children:"The Start"}),"\n",(0,o.jsxs)(t.p,{children:["Ok, so here's the start, start off by finding your ",(0,o.jsx)(t.strong,{children:"gateway"}),". Assume that you have vista. Click start, click on the search field, and write ",(0,o.jsx)(t.strong,{children:"cmd"}),". Then a black box appears. Enter the following; ",(0,o.jsx)(t.strong,{children:"ipconfig"}),". Wait for the text to load, then look though it. Keep searching until you find ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"gateway"})}),", and don't close the black box!"]}),"\n",(0,o.jsxs)(t.p,{children:["When you have found it, open your favorite web browser. When it's loaded, head over to the adress bar and type in the ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"gateway"})})," value (example: 192.168.0.1/192.168.1.1). Press enter."]}),"\n",(0,o.jsx)(t.h2,{id:"router-configuration",children:"Router Configuration"}),"\n",(0,o.jsx)(t.p,{children:"Well done, you've made it to the router's configuration page. What we've got left to do is port forward now."}),"\n",(0,o.jsx)(t.p,{children:"So.. there are a category in that page that is named one of the followings;"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Virtual Server"}),"\n",(0,o.jsx)(t.li,{children:"Port Forwarding"}),"\n",(0,o.jsx)(t.li,{children:"Port Control"}),"\n",(0,o.jsx)(t.li,{children:"Application Sharing"}),"\n",(0,o.jsxs)(t.li,{children:["Anything with ",(0,o.jsx)(t.code,{children:"port"})," in its name."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"If you have found it, click on it. Then, click the 'Add new', 'New Port' or some else button that will toggle opening a new port."}),"\n",(0,o.jsx)(t.p,{children:"Enter the following details:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"Port: YOUR_PORT (standard: 7777)\nPort Type: UDP\nEnabled: Yes\n**IP: Continue the 3rd Step**\n"})}),"\n",(0,o.jsx)(t.p,{children:"Now you need to know your computer IP address."}),"\n",(0,o.jsx)(t.h2,{id:"getting-the-ip-continuing",children:"Getting the IP, Continuing"}),"\n",(0,o.jsxs)(t.p,{children:["Now, maximize the black box and look though the text again, until you see ",(0,o.jsx)(t.em,{children:"IPv4"}),". It should be in a format like this: ",(0,o.jsx)(t.strong,{children:"192.168.0.100"}),". Copy it, and there you have it! Continue with the Information in the router's homepage. For example, my ip is 192.168.0.100"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"Port: YOUR_PORT (standard: 7777)\nPort Type: UDP\nEnabled: Yes\nIP: 192.168.0.100\n"})}),"\n",(0,o.jsxs)(t.p,{children:["And press ",(0,o.jsx)(t.strong,{children:"save"}),". Then your done. AND! Don't forget to ",(0,o.jsx)(t.strong,{children:"port forward in Windows Firewall"}),". This is a little tutorial;"]}),"\n",(0,o.jsxs)(t.p,{children:['Go to the start menu, enter "firewall" in the search field and select the "Windows Firewall". Open it and click ',(0,o.jsx)(t.em,{children:"Change preferences"}),". New window pop-up. Click the ",(0,o.jsx)(t.em,{children:"Exceptions"})," tab, click the ",(0,o.jsx)(t.em,{children:"Add port.."})," and then fill in this information;"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"Name: SA-MP Server (name it whatever you want)\nPort Number: YOUR_PORT (standard: 7777)\nProtocol: UDP\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Then your done! Click ok and close it. Launch the server, and see if its working. If it is, go to your SA-MP Client and enter: localhost",":YOUR_PORT","(standard: 7777). If the ping changes, then your server is working fully. Now you just need to go to:"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"http://whatismyip.com",children:"WhatIsMyIP.COM"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"the-finish",children:"The finish"}),"\n",(0,o.jsx)(t.p,{children:"Once there, get the ip that is on your screen. Go again to your SA-MP Client, add that ip to your favorites and add YOUR_PORT (standard: 7777) at the end. If its working,"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"CONGRATULATIONS"}),"! ",(0,o.jsx)(t.em,{children:"You have port-forwarded"}),"!"]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);