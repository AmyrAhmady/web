"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[72587],{3024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"scripting/functions/db_debug_openresults","title":"db_debug_openresults","description":".","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/db_debug_openresults.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/db_debug_openresults","permalink":"/th/docs/scripting/functions/db_debug_openresults","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/db_debug_openresults.md","tags":[],"version":"current","frontMatter":{"title":"db_debug_openresults","sidebar_label":"db_debug_openresults","description":".","tags":[]},"sidebar":"docsSidebar","previous":{"title":"db_debug_openfiles","permalink":"/th/docs/scripting/functions/db_debug_openfiles"},"next":{"title":"db_field_name","permalink":"/th/docs/scripting/functions/db_field_name"}}');var s=n(74848),r=n(28453);const d={title:"db_debug_openresults",sidebar_label:"db_debug_openresults",description:".",tags:[]},l=void 0,o={},c=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function a(e){const t={admonition:"admonition",h2:"h2",li:"li",p:"p",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"This function starts with lowercase letter."})}),"\n",(0,s.jsx)(t.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,s.jsx)(t.p,{children:"."}),"\n",(0,s.jsx)(t.table,{children:(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})})}),"\n",(0,s.jsx)(t.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"db_open: Open a connection to an SQLite database"}),"\n",(0,s.jsx)(t.li,{children:"db_close: Close the connection to an SQLite database"}),"\n",(0,s.jsx)(t.li,{children:"db_query: Query an SQLite database"}),"\n",(0,s.jsx)(t.li,{children:"db_free_result: Free result memory from a db_query"}),"\n",(0,s.jsx)(t.li,{children:"db_num_rows: Get the number of rows in a result"}),"\n",(0,s.jsx)(t.li,{children:"db_next_row: Move to the next row"}),"\n",(0,s.jsx)(t.li,{children:"db_num_fields: Get the number of fields in a result"}),"\n",(0,s.jsx)(t.li,{children:"db_field_name: Returns the name of a field at a particular index"}),"\n",(0,s.jsx)(t.li,{children:"db_get_field: Get content of field with specified ID from current result row"}),"\n",(0,s.jsx)(t.li,{children:"db_get_field_assoc: Get content of field with specified name from current result row"}),"\n",(0,s.jsx)(t.li,{children:"db_get_field_int: Get content of field as an integer with specified ID from current result row"}),"\n",(0,s.jsx)(t.li,{children:"db_get_field_assoc_int: Get content of field as an integer with specified name from current result row"}),"\n",(0,s.jsx)(t.li,{children:"db_get_field_float: Get content of field as a float with specified ID from current result row"}),"\n",(0,s.jsx)(t.li,{children:"db_get_field_assoc_float: Get content of field as a float with specified name from current result row"}),"\n",(0,s.jsx)(t.li,{children:"db_get_mem_handle: Get memory handle for an SQLite database that was opened with db_open."}),"\n",(0,s.jsx)(t.li,{children:"db_get_result_mem_handle: Get memory handle for an SQLite query that was executed with db_query."}),"\n",(0,s.jsx)(t.li,{children:"db_debug_openfiles"}),"\n",(0,s.jsx)(t.li,{children:"db_debug_openresults"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var i=n(96540);const s={},r=i.createContext(s);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);