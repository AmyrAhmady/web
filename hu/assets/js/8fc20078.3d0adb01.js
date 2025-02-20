"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[92723],{28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>a});var n=i(96540);const r={},s=n.createContext(r);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:t},e.children)}},97188:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"scripting/functions/fattrib","title":"fattrib","description":"Set the file attributes.","source":"@site/docs/scripting/functions/fattrib.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/fattrib","permalink":"/hu/docs/scripting/functions/fattrib","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/fattrib.md","tags":[{"inline":true,"label":"file management","permalink":"/hu/docs/tags/file-management"}],"version":"current","frontMatter":{"title":"fattrib","sidebar_label":"fattrib","description":"Set the file attributes.","tags":["file management"]},"sidebar":"docsSidebar","previous":{"title":"existpubvar","permalink":"/hu/docs/scripting/functions/existpubvar"},"next":{"title":"fblockread","permalink":"/hu/docs/scripting/functions/fblockread"}}');var r=i(74848),s=i(28453);const l={title:"fattrib",sidebar_label:"fattrib",description:"Set the file attributes.",tags:["file management"]},a=void 0,c={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{LowercaseNote:i,VersionWarn:n}=t;return i||d("LowercaseNote",!0),n||d("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(i,{}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Set the file attributes."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"const filename[]"}),(0,r.jsx)(t.td,{children:"The name of the file."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timestamp = 0"}),(0,r.jsx)(t.td,{children:"Time of the last modification of the file. When this parameter is set to zero, the time stamp of the file is not changed."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attrib = 0x0F"}),(0,r.jsx)(t.td,{children:"A bit mask with the new attributes of the file.  When set to 0x0F, the attributes of the file are not changed."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"true"})," on success, ",(0,r.jsx)(t.strong,{children:"false"})," on failure."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'// Change file modification time to \'Thu Mar 07 2024 06:28:15\'\nif (fattrib("file.txt", 1709792895))\n{\n    // Success\n    print("File attributes was set.");\n}\nelse\n{\n    // Error\n    print("The file \\"file.txt\\" does not exists, or can\'t set the attributes.");\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The time is in number of seconds since midnight at 1 January 1970: the start of the UNIX system epoch."}),"\n",(0,r.jsx)(t.li,{children:"The file attributes are a bit mask."}),"\n",(0,r.jsx)(t.li,{children:"The meaning of each bit depends on the underlying file system (e.g. FAT, NTFS, etx2 and others)."}),"\n"]})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fopen",children:"fopen"}),": Open a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fclose",children:"fclose"}),": Close a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"ftemp",children:"ftemp"}),": Create a temporary file stream."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fremove",children:"fremove"}),": Remove a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fwrite",children:"fwrite"}),": Write to a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fputchar",children:"fputchar"}),": Put a character in a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fgetchar",children:"fgetchar"}),": Get a character from a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fblockwrite",children:"fblockwrite"}),": Write blocks of data into a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fblockread",children:"fblockread"}),": Read blocks of data from a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fseek",children:"fseek"}),": Jump to a specific character in a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"flength",children:"flength"}),": Get the file length."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fexist",children:"fexist"}),": Check, if a file exists."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fmatch",children:"fmatch"}),": Check, if patterns with a file name matches."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"ftell",children:"ftell"}),": Get the current position in the file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fflush",children:"fflush"}),": Flush a file to disk (ensure all writes are complete)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fstat",children:"fstat"}),": Return the size and the timestamp of a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"frename",children:"frename"}),": Rename a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fcopy",children:"fcopy"}),": Copy a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"filecrc",children:"filecrc"}),": Return the 32-bit CRC value of a file."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"diskfree",children:"diskfree"}),": Returns the free disk space."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"fcreatedir",children:"fcreatedir"}),": Create a directory."]}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function d(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);