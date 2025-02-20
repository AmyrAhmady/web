"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[53674],{28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>c});var t=n(96540);const r={},s=t.createContext(r);function l(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:i},e.children)}},63314:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>f});const t=JSON.parse('{"id":"scripting/functions/filecrc","title":"filecrc","description":"Return the 32-bit CRC value of a file.","source":"@site/docs/scripting/functions/filecrc.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/filecrc","permalink":"/ar/docs/scripting/functions/filecrc","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/filecrc.md","tags":[{"inline":true,"label":"file management","permalink":"/ar/docs/tags/file-management"}],"version":"current","frontMatter":{"title":"filecrc","sidebar_label":"filecrc","description":"Return the 32-bit CRC value of a file.","tags":["file management"]},"sidebar":"docsSidebar","previous":{"title":"fgetchar","permalink":"/ar/docs/scripting/functions/fgetchar"},"next":{"title":"flength","permalink":"/ar/docs/scripting/functions/flength"}}');var r=n(74848),s=n(28453);const l={title:"filecrc",sidebar_label:"filecrc",description:"Return the 32-bit CRC value of a file.",tags:["file management"]},c=void 0,a={},f=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{LowercaseNote:n,VersionWarn:t}=i;return n||d("LowercaseNote",!0),t||d("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(n,{}),"\n",(0,r.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(i.p,{children:"Return the 32-bit CRC value of a file."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"const filename[]"}),(0,r.jsx)(i.td,{children:"The name of the file."})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(i.p,{children:["The 32-bit CRC value of the file, or ",(0,r.jsx)(i.strong,{children:"0"})," if the file cannot be opened."]}),"\n",(0,r.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'new crc = filecrc("file.txt");\n\nif (crc)\n{\n    // Success\n    printf("CRC value = %d", crc);\n}\nelse\n{\n    // Error\n    print("The file \\"file.txt\\" does not exists, or can\'t be opened.");\n}\n'})}),"\n",(0,r.jsx)(i.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"The CRC value is a useful measure to check whether the contents of a file has changed during transmission or whether it has been edited (provided that the CRC value of the original file was saved)."}),"\n",(0,r.jsx)(i.li,{children:'The CRC value returned by this function is the same as the one used in ZIP archives (PKZip, WinZip) and the "SFV" utilities and file formats.'}),"\n"]})}),"\n",(0,r.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fopen",children:"fopen"}),": Open a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fclose",children:"fclose"}),": Close a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"ftemp",children:"ftemp"}),": Create a temporary file stream."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fremove",children:"fremove"}),": Remove a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fwrite",children:"fwrite"}),": Write to a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fputchar",children:"fputchar"}),": Put a character in a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fgetchar",children:"fgetchar"}),": Get a character from a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fblockwrite",children:"fblockwrite"}),": Write blocks of data into a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fblockread",children:"fblockread"}),": Read blocks of data from a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fseek",children:"fseek"}),": Jump to a specific character in a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"flength",children:"flength"}),": Get the file length."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fexist",children:"fexist"}),": Check, if a file exists."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fmatch",children:"fmatch"}),": Check, if patterns with a file name matches."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"ftell",children:"ftell"}),": Get the current position in the file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fflush",children:"fflush"}),": Flush a file to disk (ensure all writes are complete)."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fstat",children:"fstat"}),": Return the size and the timestamp of a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"frename",children:"frename"}),": Rename a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fcopy",children:"fcopy"}),": Copy a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"diskfree",children:"diskfree"}),": Returns the free disk space."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fattrib",children:"fattrib"}),": Set the file attributes."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fcreatedir",children:"fcreatedir"}),": Create a directory."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function d(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);