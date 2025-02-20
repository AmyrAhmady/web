"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[94839],{28453:(e,i,t)=>{t.d(i,{R:()=>l,x:()=>c});var n=t(96540);const s={},r=n.createContext(s);function l(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:i},e.children)}},29172:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>f,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"scripting/functions/fexist","title":"fexist","description":"Checks if a specific file exists in the scriptfiles directory.","source":"@site/docs/scripting/functions/fexist.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/fexist","permalink":"/pl/docs/scripting/functions/fexist","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/fexist.md","tags":[{"inline":true,"label":"file management","permalink":"/pl/docs/tags/file-management"}],"version":"current","frontMatter":{"title":"fexist","sidebar_label":"fexist","description":"Checks if a specific file exists in the scriptfiles directory.","tags":["file management"]},"sidebar":"docsSidebar","previous":{"title":"fcreatedir","permalink":"/pl/docs/scripting/functions/fcreatedir"},"next":{"title":"fflush","permalink":"/pl/docs/scripting/functions/fflush"}}');var s=t(74848),r=t(28453);const l={title:"fexist",sidebar_label:"fexist",description:"Checks if a specific file exists in the scriptfiles directory.",tags:["file management"]},c=void 0,f={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{LowercaseNote:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{}),"\n",(0,s.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(i.p,{children:"Checks if a specific file exists in the scriptfiles directory."}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Name"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"const filename[]"}),(0,s.jsx)(i.td,{children:"The name of the file."})]})})]}),"\n",(0,s.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:"The number of files that match the pattern."}),"\n",(0,s.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-c",children:'// Check, if "file.txt" exists\nif (fexist("file.txt"))\n{\n    // Success\n\n    // Print the success\n    print("\\"file.txt\\" exists.");\n}\nelse\n{\n    // Error\n    print("\\"file.txt\\" does not exist.");\n}\n'})}),"\n",(0,s.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"fopen",children:"fopen"}),": Open a file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"fclose",children:"fclose"}),": Close a file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"ftemp",children:"ftemp"}),": Create a temporary file stream."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"fremove",children:"fremove"}),": Remove a file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"fwrite",children:"fwrite"}),": Write to a file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"fread",children:"fread"}),": Read a file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"fputchar",children:"fputchar"}),": Put a character in a file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"fgetchar",children:"fgetchar"}),": Get a character from a file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"fblockwrite",children:"fblockwrite"}),": Write blocks of data into a file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"fblockread",children:"fblockread"}),": Read blocks of data from a file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"fseek",children:"fseek"}),": Jump to a specific character in a file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"flength",children:"flength"}),": Get the file length."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"fmatch",children:"fmatch"}),": Check, if patterns with a file name matches."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"ftell",children:"ftell"}),": Get the current position in the file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"fflush",children:"fflush"}),": Flush a file to disk (ensure all writes are complete)."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"fstat",children:"fstat"}),": Return the size and the timestamp of a file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"frename",children:"frename"}),": Rename a file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"fcopy",children:"fcopy"}),": Copy a file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"filecrc",children:"filecrc"}),": Return the 32-bit CRC value of a file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"diskfree",children:"diskfree"}),": Returns the free disk space."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"fattrib",children:"fattrib"}),": Set the file attributes."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"fcreatedir",children:"fcreatedir"}),": Create a directory."]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);