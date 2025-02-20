"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[62869],{28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var r=i(96540);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}},58018:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/fread","title":"fread","description":"Read a single line from a file.","source":"@site/docs/scripting/functions/fread.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/fread","permalink":"/ar/docs/scripting/functions/fread","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/fread.md","tags":[{"inline":true,"label":"file management","permalink":"/ar/docs/tags/file-management"}],"version":"current","frontMatter":{"title":"fread","sidebar_label":"fread","description":"Read a single line from a file.","tags":["file management"]},"sidebar":"docsSidebar","previous":{"title":"fputchar","permalink":"/ar/docs/scripting/functions/fputchar"},"next":{"title":"fremove","permalink":"/ar/docs/scripting/functions/fremove"}}');var t=i(74848),s=i(28453);const l={title:"fread",sidebar_label:"fread",description:"Read a single line from a file.",tags:["file management"]},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{LowercaseNote:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Read a single line from a file."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["File",":handle"]}),(0,t.jsx)(n.td,{children:"The handle of the file to read from (returned by fopen)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"string[]"}),(0,t.jsx)(n.td,{children:"A string array to store the read text in, passed by reference."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"size = sizeof (string)"}),(0,t.jsx)(n.td,{children:"The number of bytes to read."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["bool",":pack"]}),(0,t.jsx)(n.td,{children:"Should the string be packed? (default: false)."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"The length of string (the read text) as an integer."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'// Open "file.txt" in "read only" mode\nnew File:handle = fopen("file.txt", io_read);\n\n// Initialize "buf"\nnew buf[128];\n\n// Check, if the file is opened\nif (handle)\n{\n    // Success\n\n    // Read the whole file\n    while(fread(handle, buf))\n    {\n        print(buf);\n    }\n\n    // Close the file\n    fclose(handle);\n}\nelse\n{\n    // Error\n    print("The file \\"file.txt\\" does not exists, or can\'t be opened.");\n}\n'})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'// Open "file.txt" in "read and write" mode\nnew File:handle = fopen("file.txt");\n\n// Initialize "buf"\nnew buf[128];\n\n// Check, if file is open\nif (handle)\n{\n    // Success\n\n    // Read the whole file\n    while(fread(handle, buf))\n    {\n        print(buf);\n    }\n\n    // Set the file pointer to the first byte\n    fseek(handle, _, seek_begin);\n\n    // Write "I just wrote here!" into this file\n    fwrite(handle, "I just wrote here!");\n\n    // Close the file\n    fclose(handle);\n}\nelse\n{\n    // Error\n    print("The file \\"file.txt\\" does not exists, or can\'t be opened.");\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Using an invalid handle will crash your server! Get a valid handle by using ",(0,t.jsx)(n.a,{href:"fopen",children:"fopen"})," or ",(0,t.jsx)(n.a,{href:"ftemp",children:"ftemp"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fopen",children:"fopen"}),": Open a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fclose",children:"fclose"}),": Close a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"ftemp",children:"ftemp"}),": Create a temporary file stream."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fremove",children:"fremove"}),": Remove a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fwrite",children:"fwrite"}),": Write to a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fputchar",children:"fputchar"}),": Put a character in a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fgetchar",children:"fgetchar"}),": Get a character from a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fblockwrite",children:"fblockwrite"}),": Write blocks of data into a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fblockread",children:"fblockread"}),": Read blocks of data from a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fseek",children:"fseek"}),": Jump to a specific character in a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"flength",children:"flength"}),": Get the file length."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fexist",children:"fexist"}),": Check, if a file exists."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fmatch",children:"fmatch"}),": Check, if patterns with a file name matches."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"ftell",children:"ftell"}),": Get the current position in the file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fflush",children:"fflush"}),": Flush a file to disk (ensure all writes are complete)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fstat",children:"fstat"}),": Return the size and the timestamp of a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"frename",children:"frename"}),": Rename a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fcopy",children:"fcopy"}),": Copy a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"filecrc",children:"filecrc"}),": Return the 32-bit CRC value of a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"diskfree",children:"diskfree"}),": Returns the free disk space."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fattrib",children:"fattrib"}),": Set the file attributes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fcreatedir",children:"fcreatedir"}),": Create a directory."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}}}]);