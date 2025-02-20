"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[72760],{2601:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"server/LinuxServerInstallation","title":"LinuxServerInstallation","description":"This guide contains a comprehensive guide on installing an open.mp server on Ubuntu or another Debian based Linux.","source":"@site/docs/server/LinuxServerInstallation.md","sourceDirName":"server","slug":"/server/LinuxServerInstallation","permalink":"/docs/server/LinuxServerInstallation","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/server/LinuxServerInstallation.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Lag Compensation","permalink":"/docs/server/LagCompensation"},"next":{"title":"Remote Console (RCON)","permalink":"/docs/server/RemoteConsole"}}');var i=r(74848),o=r(28453);const t={},l=void 0,d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Phase 1: Preparing the Environment",id:"phase-1-preparing-the-environment",level:2},{value:"Phase 2: Installing open.mp Server Files",id:"phase-2-installing-openmp-server-files",level:2},{value:"Phase 3: Configuring and Starting the Server",id:"phase-3-configuring-and-starting-the-server",level:2},{value:"Phase 4: Managing the Server",id:"phase-4-managing-the-server",level:2},{value:"Phase 5: Uploading Your Gamemode and Files",id:"phase-5-uploading-your-gamemode-and-files",level:2},{value:"Help",id:"help",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"This guide contains a comprehensive guide on installing an open.mp server on Ubuntu or another Debian based Linux.\nWhether you're a beginner or just looking to refresh your knowledge, this guide may have something useful for you!"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["If you are using the SA",":MP"," server and didn't convert to open.mp yet, ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://www.open.mp/docs/server/Installation",children:"please stop here and read this guide first."})})]})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If you are using the FCNPC plugin, please stop for now because this plugin does not work for open.mp currently."})}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Before starting, you should have:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A machine running Ubuntu (20.04 or later recommended) or another Debian based Linux;"}),"\n",(0,i.jsx)(n.li,{children:"WinSCP or Filezilla for file transfers;"}),"\n",(0,i.jsx)(n.li,{children:"PuTTY or your hosting SSH solution;"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If you install WinSCP, the installer will prompt you to install PuTTY!\nIt's up to you if you want to install it or not, but you can always download it later!"})}),"\n",(0,i.jsx)(n.h2,{id:"phase-1-preparing-the-environment",children:"Phase 1: Preparing the Environment"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Connecting via SSH:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use PuTTY or your hosting SSH solution to connect to your instance."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Seek online guides or your hosting provider's documentation if you're unsure how to connect to your Linux Instance."})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Updating your Linux Instance:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Before proceeding, let's ensure your system is up to date by running:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo apt update\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo apt upgrade\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Creating a secure service account:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"For security reasons, we should create a dedicated service account without a home directory:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo useradd -M svc-omp-server\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Locking the service sccount:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Let's prevent the service account from being used for login:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo usermod -L svc-omp-server\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Creating a directory for the server files:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"We will use the /opt directory, this is the standard location for third-party applications:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo mkdir /opt/omp-server\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Setting permissions for the directory:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Changing the group of the directory to match the service account:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo chgrp svc-omp-server /opt/omp-server\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Setting the g+s flag so new files inherit the correct group and remove access for others:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo chmod g+s /opt/omp-server\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo chmod o-rwx /opt/omp-server\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(n.h2,{id:"phase-2-installing-openmp-server-files",children:"Phase 2: Installing open.mp Server Files"}),"\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Let's navigate to the server directory:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"We need to move to the /opt/omp-server directory where the server will be stored:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd /opt/omp-server\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Downloading the open.mp server files:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Download the latest release of the open.mp server:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo -u svc-omp-server wget https://github.com/openmultiplayer/open.mp/releases/download/vX.X.X.XXXX/open.mp-linux-x86.tar.gz\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"You should ALWAYS check for the latest release at the open.mp GitHub Releases page!"}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/openmultiplayer/open.mp/releases",children:"https://github.com/openmultiplayer/open.mp/releases"})]})}),"\n",(0,i.jsxs)(n.ol,{start:"9",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Extracting the server files:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Once downloaded, extract the files:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo -u svc-omp-server tar -xzf open.mp-linux-x86.tar.gz\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(n.h2,{id:"phase-3-configuring-and-starting-the-server",children:"Phase 3: Configuring and Starting the Server"}),"\n",(0,i.jsxs)(n.ol,{start:"10",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Installing the required x86 libraries:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Since the server runs as a 32-bit application, you need to enable 32-bit architecture support:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo dpkg --add-architecture i386\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo apt update\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo apt install libc6:i386\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Making the server executable:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Change the permissions so the server can be executed (only required once!):"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd /opt/omp-server/Server/\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo chmod +x omp-server\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Starting the server:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use the following command to start the server in the background:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"nohup ./omp-server &\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The terminal will output a process ID (PID). Write this number down for future reference."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(n.h2,{id:"phase-4-managing-the-server",children:"Phase 4: Managing the Server"}),"\n",(0,i.jsxs)(n.ol,{start:"13",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Stopping the server:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"To stop the server, use the PID from step 12 and run:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo kill <PID>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Finding the Process ID (if forgotten):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If you forget the process ID, run:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"top\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Look for the omp-server process in the list, note the PID, press 'Q' to quit, and then kill the process as shown in step 13."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(n.h2,{id:"phase-5-uploading-your-gamemode-and-files",children:"Phase 5: Uploading Your Gamemode and Files"}),"\n",(0,i.jsxs)(n.ol,{start:"15",children:["\n",(0,i.jsxs)(n.li,{children:["Upload your custom gamemodes and scripts:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use WinSCP or Filezilla to transfer your gamemodes and scripts to the /opt/omp-server directory.\nImportant: Make sure to use .so files for Linux plugins, as .dll files are only supported on Windows."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"help",children:"Help"}),"\n",(0,i.jsxs)(n.p,{children:["If you're still experiencing issues setting up the server, join the official open.mp Discord server: ",(0,i.jsx)(n.a,{href:"https://discord.gg/samp",children:"https://discord.gg/samp"})]}),"\n",(0,i.jsxs)(n.p,{children:["Post your question in the ",(0,i.jsx)(n.a,{href:"https://discord.com/channels/231799104731217931/966398440051445790",children:"#openmp-support"})," channel and mention this guide so we can improve it."]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var s=r(96540);const i={},o=s.createContext(i);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);