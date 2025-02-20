"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[21859],{28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var t=i(96540);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}},90095:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/functions/fseek","title":"fseek","description":"Change the current position in the file.","source":"@site/docs/scripting/functions/fseek.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/fseek","permalink":"/sl/docs/scripting/functions/fseek","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/fseek.md","tags":[{"inline":true,"label":"file management","permalink":"/sl/docs/tags/file-management"}],"version":"current","frontMatter":{"title":"fseek","sidebar_label":"fseek","description":"Change the current position in the file.","tags":["file management"]},"sidebar":"docsSidebar","previous":{"title":"frename","permalink":"/sl/docs/scripting/functions/frename"},"next":{"title":"fstat","permalink":"/sl/docs/scripting/functions/fstat"}}');var s=i(74848),r=i(28453);const l={title:"fseek",sidebar_label:"fseek",description:"Change the current position in the file.",tags:["file management"]},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{LowercaseNote:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Change the current position in the file. You can either seek forward or backward through the file."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["File",":handle"]}),(0,s.jsx)(n.td,{children:"The file handle to use. Returned by fopen."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"position"}),(0,s.jsx)(n.td,{children:"The new position in the file, relative to the parameter whence (see below)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsxs)(n.a,{href:"../resources/file-seek-whence",children:["seek_whence",":whence"]})}),(0,s.jsx)(n.td,{children:"The starting position to which parameter position relates."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"The new position; relative to the start of the file."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'// Open "file.txt" in "read only" mode\nnew File:handle = fopen("file.txt", io_read);\n\n// If "file.txt" is open\nif (handle)\n{\n    // Success\n\n    // Jump to the 1st byte of "file.txt", and print its position\n    printf("Begin of file position: %d", fseek(handle, 0, seek_start));\n\n    // Jump to the last byte of "file.txt", and print its position\n    printf("End of file position: %d", fseek(handle, 0, seek_end));\n\n    // Jump to the same byte of "file.txt", and print its position\n    printf("Currrent file position: %d", fseek(handle, 0, seek_current));\n\n    // Close "file.txt"\n    fclose(handle);\n}\nelse\n{\n    // Error\n    print("Failed to open \\"file.txt\\".");\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Using an invalid handle will crash your server! Get a valid handle by using ",(0,s.jsx)(n.a,{href:"fopen",children:"fopen"})," or ",(0,s.jsx)(n.a,{href:"ftemp",children:"ftemp"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"fopen",children:"fopen"}),": Open a file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"fclose",children:"fclose"}),": Close a file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"ftemp",children:"ftemp"}),": Create a temporary file stream."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"fremove",children:"fremove"}),": Remove a file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"fwrite",children:"fwrite"}),": Write to a file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"fread",children:"fread"}),": Read a file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"fputchar",children:"fputchar"}),": Put a character in a file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"fgetchar",children:"fgetchar"}),": Get a character from a file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"fblockwrite",children:"fblockwrite"}),": Write blocks of data into a file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"fblockread",children:"fblockread"}),": Read blocks of data from a file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"flength",children:"flength"}),": Get the file length."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"fexist",children:"fexist"}),": Check, if a file exists."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"fmatch",children:"fmatch"}),": Check, if patterns with a file name matches."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"ftell",children:"ftell"}),": Get the current position in the file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"fflush",children:"fflush"}),": Flush a file to disk (ensure all writes are complete)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"fstat",children:"fstat"}),": Return the size and the timestamp of a file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"frename",children:"frename"}),": Rename a file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"fcopy",children:"fcopy"}),": Copy a file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"filecrc",children:"filecrc"}),": Return the 32-bit CRC value of a file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"diskfree",children:"diskfree"}),": Returns the free disk space."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"fattrib",children:"fattrib"}),": Set the file attributes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"fcreatedir",children:"fcreatedir"}),": Create a directory."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../resources/file-seek-whence",children:"File Seek Whence"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);