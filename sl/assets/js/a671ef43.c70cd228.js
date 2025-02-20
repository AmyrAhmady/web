"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[80576],{10167:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"scripting/functions/fcreatedir","title":"fcreatedir","description":"Create a directory.","source":"@site/docs/scripting/functions/fcreatedir.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/fcreatedir","permalink":"/sl/docs/scripting/functions/fcreatedir","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/fcreatedir.md","tags":[{"inline":true,"label":"file management","permalink":"/sl/docs/tags/file-management"}],"version":"current","frontMatter":{"title":"fcreatedir","sidebar_label":"fcreatedir","description":"Create a directory.","tags":["file management"]},"sidebar":"docsSidebar","previous":{"title":"fcopy","permalink":"/sl/docs/scripting/functions/fcopy"},"next":{"title":"fexist","permalink":"/sl/docs/scripting/functions/fexist"}}');var t=i(74848),s=i(28453);const l={title:"fcreatedir",sidebar_label:"fcreatedir",description:"Create a directory.",tags:["file management"]},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{LowercaseNote:i,VersionWarn:n}=r;return i||h("LowercaseNote",!0),n||h("VersionWarn",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,t.jsx)(i,{}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:"Create a directory."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"const dirname[]"}),(0,t.jsx)(r.td,{children:"The name of the directory to create, optionally including a full path."})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"true"})," on success, ",(0,t.jsx)(r.strong,{children:"false"})," on failure."]}),"\n",(0,t.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:'if (fcreatedir("logs"))\n{\n    // Success\n    printf("The directory \\"logs\\" created successfully.");\n}\nelse\n{\n    // Error\n    print("Failed to create the directory \\"logs\\"");\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["To delete the directory again, use ",(0,t.jsx)(r.a,{href:"fremove",children:"fremove"}),". The directory must be empty before it can be removed."]})}),"\n",(0,t.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"fopen",children:"fopen"}),": Open a file."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"fclose",children:"fclose"}),": Close a file."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"ftemp",children:"ftemp"}),": Create a temporary file stream."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"fremove",children:"fremove"}),": Remove a file."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"fwrite",children:"fwrite"}),": Write to a file."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"fputchar",children:"fputchar"}),": Put a character in a file."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"fgetchar",children:"fgetchar"}),": Get a character from a file."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"fblockwrite",children:"fblockwrite"}),": Write blocks of data into a file."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"fblockread",children:"fblockread"}),": Read blocks of data from a file."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"fseek",children:"fseek"}),": Jump to a specific character in a file."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"flength",children:"flength"}),": Get the file length."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"fexist",children:"fexist"}),": Check, if a file exists."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"fmatch",children:"fmatch"}),": Check, if patterns with a file name matches."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"ftell",children:"ftell"}),": Get the current position in the file."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"fflush",children:"fflush"}),": Flush a file to disk (ensure all writes are complete)."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"fstat",children:"fstat"}),": Return the size and the timestamp of a file."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"frename",children:"frename"}),": Rename a file."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"fcopy",children:"fcopy"}),": Copy a file."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"filecrc",children:"filecrc"}),": Return the 32-bit CRC value of a file."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"diskfree",children:"diskfree"}),": Returns the free disk space."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"fattrib",children:"fattrib"}),": Set the file attributes."]}),"\n"]})]})}function f(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function h(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,r,i)=>{i.d(r,{R:()=>l,x:()=>c});var n=i(96540);const t={},s=n.createContext(t);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);