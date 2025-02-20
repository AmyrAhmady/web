"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[84360],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(96540);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}},72403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var a=n(89361),o=n(74848),i=n(28453);const s={slug:"debugging",title:"Testing in open.mp",authors:"y_less"},r=void 0,c={authorsImageUrls:[void 0]},l=[];function h(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Testing in SA",":MP",' has always been challenging, but open.mp introduces new tools to make it easier and more efficient. With an open-source codebase, enhanced debugging tools, and a powerful new "mock" library for simulating player interactions, testing is now more automated and reliable than ever.']}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"The content of the following post is out of date and has no reference to the current state of open.mp. The post is published here for archival purposes."})}),"\n",(0,o.jsxs)(t.p,{children:["Testing in SA",":MP",' is not very easy. For the most part it is just connecting to the server and placing prints everywhere. Libraries such as y_testing make writing unit tests much easier, but only for fairly "pure" code - that is, code that runs on the server without much player interaction. You can test a surprising amount of behaviour like this, but it is still limited and doesn\'t help narrow down issues when they do crop up.']}),"\n",(0,o.jsx)(t.p,{children:"So how does open.mp address this? Well to begin with, the code is open-source, so you have the full range of existing debugging tools such as GDB and Visual Studio available to you for stepping through and inspecting code. We also have plans to add similar tools for pawn scripts themselves."}),"\n",(0,o.jsx)(t.p,{children:'But the biggest addition is the "mock" library. Very simply, this allows you to create fake players that act exactly like real players, but without any connected client. So any actions performed on them by a script can be read and analysed by another script. Let\'s take the most simple example possible for a first demonstration - showing a player a checkpoint, and confirming it was sent. With y_testing you do the action and then have to actually ask the player if it happened, which is slow, not repeatable, and just tedious:'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:'PTEST__ SetPlayerCheckpoint(playerid)\n{\n    SetPlayerCheckpoint(playerid, 0.0, 0.0, 4.0, 5.0);\n    ASK("Do you see a checkpoint in the middle of the world?");\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:'Using a library like "Pawn.RakNet" can remove the question, by automating the checking of outgoing packets, but still requires a connected player so can\'t be automated and repeated:'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:"static\n    gCheckpointPlayer,\n    Float:gX,\n    Float:gY,\n    Float:gZ,\n    Float:gS;\n\nPTEST__ SetPlayerCheckpoint(playerid)\n{\n    SetPlayerCheckpoint(playerid, 0.0, 0.0, 4.0, 5.0);\n    ASSERT(gX == 0.0);\n    ASSERT(gY == 0.0);\n    ASSERT(gZ == 4.0);\n    ASSERT(gS == 5.0);\n    ASSERT(gCheckpointPlayer == playerid);\n}\n\nOPacket:107(playerid, BitStream:bs)\n{\n    gCheckpointPlayer = playerid;\n\n    BS_IgnoreBits(bs, 8);\n    BS_ReadFloat(bs, gX);\n    BS_ReadFloat(bs, gY);\n    BS_ReadFloat(bs, gZ);\n    BS_ReadFloat(bs, gS);\n\n    return 1;\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"With open.mp, we have an API similar to that of Pawn.RakNet, but with fake players. So you create a player, without a game instance, and use that exactly like a normal player:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:'TEST__ SetPlayerCheckpoint()\n{\n    new playerid = Mock_CreatePlayer("Mr Mock");\n\n    // Clear all existing packets, for ease of searching.\n    Mock_PurgeSent(playerid);\n\n    // Show a checkpoint normally.\n    SetPlayerCheckpoint(playerid, 0.0, 0.0, 4.0, 5.0);\n\n    // Check a "SetCheckpoint" packet was seen.\n    new MockPacket:packet = Mock_GetPacket(playerid, "SetCheckpoint");\n    ASSERT(packet);\n    if (!packet) return;\n\n    // Check the packet has 4 components, each 32 bits.\n    ASSERT(MockPacket_Components(packet) == 4);\n    ASSERT(MockPacket_Bits(packet) == 4 * 32);\n\n    // Check the various components.\n    new Float:tmp;\n    ASSERT(MockPacket_ReadFloat(packet, 0, tmp));\n    ASSERT(tmp == 0.0);\n    ASSERT(MockPacket_ReadFloat(packet, 1, tmp));\n    ASSERT(tmp == 0.0);\n    ASSERT(MockPacket_ReadFloat(packet, 2, tmp));\n    ASSERT(tmp == 4.0);\n    ASSERT(MockPacket_ReadFloat(packet, 3, tmp));\n    ASSERT(tmp == 5.0);\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"This code is entirely repeatably testable, self-contained (no global variables and extra callbacks), and simple to expand upon."}),"\n",(0,o.jsxs)(t.p,{children:["But sometimes it isn't quite this simple. If you create an object you can't just check that it was instantly sent to a player, because they might not be anywhere near it and thus the in-built streamer hasn't sent them it yet. To solve this, we first need to go on a slight tangent to explain how basic sync works for things like ",(0,o.jsx)(t.code,{children:"SetPlayerPos"}),". When you set a player's position with ",(0,o.jsx)(t.code,{children:"SetPlayerPos"})," the server does NOT update their position internally and for all other players straight away. Instead a ",(0,o.jsx)(t.code,{children:"SET POSITION"})," command is sent to that one player being moved, they are teleported to the new position, and then report the new position back to the server in their next sync packet. The reason why is basically lag - there may be one or more sync packets still in flight with the old position after setting the new position. So what does this mean for mock players? It means you can't actually set their position, at least not in the normal way. There's no real client, so there's nothing receiving packets (i.e. the set position command), and there's nothing syncing that data back to the server again."]}),"\n",(0,o.jsxs)(t.p,{children:["We can generate any mock sync data for the server from mock players, so that is one way to update their position, but it can be a little cumbersome for just one common operation, so there is ",(0,o.jsx)(t.code,{children:"Mock_SetPlayerPos"})," for exactly this one use-case. But this still isn't quite the whole story, because we need the streamer to run and update with their new position, which happens only periodically (every few milliseconds, depending on the server tick rate). For this we have another mock function - ",(0,o.jsx)(t.code,{children:"Mock_Tick"}),", which jumps the server time forward by a given number of microseconds (NOT milliseconds). This should absolutely not be used on live servers as it can create all sorts of weirdness with timers and other time sensitive code, but can be used to fake time passing in tests. Note that ",(0,o.jsx)(t.code,{children:"Mock_Tick(10000)"})," will not delay for 10ms, it will instead jump time forward by 10 milliseconds instantly."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:'TEST__ SetPlayerCheckpoint()\n{\n    new playerid = Mock_CreatePlayer("Mr Mock");\n\n    // Clear all existing packets, for ease of searching.\n    Mock_PurgeSent(playerid);\n\n    // Create an object.\n    CreateObject(1337, 100.0, 100.0, 4.0);\n\n    // Fake the mock player\'s position updating to the server, near the object.\n    Mock_SetPlayerPos(playerid, 105.0, 105.0, 4.0);\n\n    // Now FAKE pass some time, so the streamer can run (50ms should do).\n    Mock_Tick(50000);\n\n    // Check a "CreateObject" packet was seen.\n    new MockPacket:packet = Mock_GetPacket(playerid, "CreateObject");\n    ASSERT(packet);\n    if (!packet) return;\n\n    // Check the packet has 4 components, each 32 bits.\n    ASSERT(MockPacket_Components(packet) > 5);\n\n    // Check some of the packet components.\n    new int;\n    new Float:tmp;\n    ASSERT(MockPacket_ReadInt32(packet, 1, int));\n    ASSERT(int == 1337);\n    ASSERT(MockPacket_ReadFloat(packet, 2, tmp));\n    ASSERT(tmp == 100.0);\n    ASSERT(MockPacket_ReadFloat(packet, 3, tmp));\n    ASSERT(tmp == 100.0);\n    ASSERT(MockPacket_ReadFloat(packet, 4, tmp));\n    ASSERT(tmp == 4.0);\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["An important note about ",(0,o.jsx)(t.code,{children:"Mock_Tick"}),". If you call it as, say ",(0,o.jsx)(t.code,{children:"Mock_Tick(100000)"})," and have a 1ms timer running, this will instantly trigger the timer to run, but the timer will think it missed its time by a long way (100ms) and will queue itself up again. During the call to ",(0,o.jsx)(t.code,{children:"Mock_Tick"})," the timer will fire once, but after the current test ends the timer will be queued up a further 99 times, one per tick because it thinks it missed 100 invocation times."]}),"\n",(0,o.jsx)(t.p,{children:"Later we'll cover some higher-level debugging techniques so you can read and write fake packets more easily, instead of one component at a time as in that code, but this introduces the basics on which everything else is built. Hopefully it will make developing and testing code easier for everyone (and ensure the server is more stable as well)."}),"\n",(0,o.jsxs)(t.p,{children:["We'll also go much more in to the API design for open.mp tomorrow. It is fully backwards- compatible with SA",":MP",", but that doesn't mean there isn't parallel room for improvement."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},89361:e=>{e.exports=JSON.parse('{"permalink":"/sl/blog/debugging","editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/blog/blog/2020-04-06-debugging.md","source":"@site/blog/2020-04-06-debugging.md","title":"Testing in open.mp","description":"Testing in SA:MP has always been challenging, but open.mp introduces new tools to make it easier and more efficient. With an open-source codebase, enhanced debugging tools, and a powerful new \\"mock\\" library for simulating player interactions, testing is now more automated and reliable than ever.","date":"2020-04-06T00:00:00.000Z","tags":[],"readingTime":5.955,"hasTruncateMarker":true,"authors":[{"name":"Y_Less","key":"y_less","page":null}],"frontMatter":{"slug":"debugging","title":"Testing in open.mp","authors":"y_less"},"unlisted":false,"prevItem":{"title":"open.mp API design","permalink":"/sl/blog/scripting-api"},"nextItem":{"title":"Vehicle Sync","permalink":"/sl/blog/vehicle-sync"}}')}}]);