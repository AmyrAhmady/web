"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[14845],{28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(96540);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}},77481:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>f,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"scripting/functions/fopen","title":"fopen","description":"Open a file (to read from or write to).","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/fopen.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/fopen","permalink":"/th/docs/scripting/functions/fopen","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/fopen.md","tags":[],"version":"current","frontMatter":{"title":"fopen","sidebar_label":"fopen","description":"Open a file (to read from or write to).","tags":[]},"sidebar":"docsSidebar","previous":{"title":"fmatch","permalink":"/th/docs/scripting/functions/fmatch"},"next":{"title":"format","permalink":"/th/docs/scripting/functions/format"}}');var r=i(74848),l=i(28453);const s={title:"fopen",sidebar_label:"fopen",description:"Open a file (to read from or write to).",tags:[]},o=void 0,f={},a=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"This function starts with lowercase letter."})}),"\n",(0,r.jsx)(n.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,r.jsx)(n.p,{children:"Open a file (to read from or write to)."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"name[]"}),(0,r.jsx)(n.td,{children:"The path to the file to open (if just a filename is specified, it will open the file with the name specified in the 'scriptfiles' folder)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mode"}),(0,r.jsx)(n.td,{children:"The mode to open the file with (default: io_readwrite)."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,r.jsx)(n.p,{children:"Returns the file handle. This handle is used for reading and writing. 0 if failed to open file."}),"\n",(0,r.jsx)(n.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'// Open "file.txt" in "read only" mode\nnew File:handle = fopen("file.txt", io_read),\n\n    // Initialize "buf"\n    buf[128];\n\n// Check, if the file is opened\nif (handle)\n{\n    // Success\n\n    // Read the whole file\n    while(fread(handle, buf)) print(buf);\n\n    // Close the file\n    fclose(handle);\n}\nelse\n{\n    // Error\n    print("The file \\"file.txt\\" does not exists, or can\'t be opened.");\n}\n// Open "file.txt" in "write only" mode\nnew File:handle = fopen("file.txt", io_write);\n\n// Check, if file is open\nif (handle)\n{\n    // Success\n\n    // Write "I just wrote here!" into this file\n    fwrite(handle, "I just wrote here!");\n\n    // Close the file\n    fclose(handle);\n}\nelse\n{\n    // Error\n    print("Failed to open file \\"file.txt\\".");\n}\n// Open "file.txt" in "read and write" mode\nnew File:handle = fopen("file.txt"),\n\n    // Initialize "buf"\n    buf[128];\n\n// Check, if file is open\nif (handle)\n{\n    // Success\n\n    // Read the whole file\n    while(fread(handle, buf)) print(buf);\n\n    // Set the file pointer to the first byte\n    fseek(handle, _, seek_begin);\n\n    // Write "I just wrote here!" into this file\n    fwrite(handle, "I just wrote here!");\n\n    // Close the file\n    fclose(handle);\n}\nelse\n{\n    // Error\n    print("The file \\"file.txt\\" does not exists, or can\'t be opened.");\n}\n// Open "file.txt" in "append only" mode\nnew File:handle = fopen("file.txt", io_append);\n\n// Check, if file is open\nif (handle)\n{\n    // Success\n\n    // Append "This is a text.\\r\\n"\n    fwrite(handle, "This is a test.\\r\\n");\n\n    // Close the file\n    fclose(handle);\n}\nelse\n{\n    // Error\n    print("Failed to open file \\"file.txt\\".");\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"io_read      Reads from the file.\nio_write     Write in the file, or create the file if it does not exist. Erases all existing contents.\nio_readwrite Reads the file or creates it if it doesn't already exist.\nio_append    Appends (adds) to file, write-only. If the file does not exist, it is created.\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"If you use io_read and the file doesn't exist, it will return a NULL reference. Using invalid references on file functions will crash your server!"})}),"\n",(0,r.jsx)(n.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/fopen",children:"fopen"}),": Open a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/fclose",children:"fclose"}),": Close a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/ftemp",children:"ftemp"}),": Create a temporary file stream."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/fremove",children:"fremove"}),": Remove a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/fwrite",children:"fwrite"}),": Write to a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/fread",children:"fread"}),": Read a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/fputchar",children:"fputchar"}),": Put a character in a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/fgetchar",children:"fgetchar"}),": Get a character from a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/fblockwrite",children:"fblockwrite"}),": Write blocks of data into a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/fblockread",children:"fblockread"}),": Read blocks of data from a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/fseek",children:"fseek"}),": Jump to a specific character in a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/flength",children:"flength"}),": Get the file length."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/fexist",children:"fexist"}),": Check, if a file exists."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/fmatch",children:"fmatch"}),": Check, if patterns with a file name matches."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);