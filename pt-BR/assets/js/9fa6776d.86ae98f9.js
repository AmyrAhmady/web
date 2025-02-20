"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[59407],{4855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"scripting/functions/DB_GetLegacyDBResult","title":"DB_GetLegacyDBResult","description":"Gets the memory handle for a SQLite database result set that was allocated with `DB_ExecuteQuery`.","source":"@site/docs/scripting/functions/DB_GetLegacyDBResult.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DB_GetLegacyDBResult","permalink":"/pt-BR/docs/scripting/functions/DB_GetLegacyDBResult","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/DB_GetLegacyDBResult.md","tags":[{"inline":true,"label":"sqlite","permalink":"/pt-BR/docs/tags/sqlite"}],"version":"current","frontMatter":{"title":"DB_GetLegacyDBResult","sidebar_label":"DB_GetLegacyDBResult","description":"Gets the memory handle for a SQLite database result set that was allocated with `DB_ExecuteQuery`.","keywords":["sqlite"],"tags":["sqlite"]},"sidebar":"docsSidebar","previous":{"title":"DB_GetFieldStringByName","permalink":"/pt-BR/docs/scripting/functions/DB_GetFieldStringByName"},"next":{"title":"DB_GetMemHandle","permalink":"/pt-BR/docs/scripting/functions/DB_GetMemHandle"}}');var i=n(74848),a=n(28453);const r={title:"DB_GetLegacyDBResult",sidebar_label:"DB_GetLegacyDBResult",description:"Gets the memory handle for a SQLite database result set that was allocated with `DB_ExecuteQuery`.",keywords:["sqlite"],tags:["sqlite"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The function gets the memory handle for a SQLite database result set that was allocated with ",(0,i.jsx)(t.a,{href:"DB_ExecuteQuery",children:"DB_ExecuteQuery"}),"."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["DBResult",":result"]}),(0,i.jsxs)(t.td,{children:["The index of the query (returned by ",(0,i.jsx)(t.a,{href:"DB_ExecuteQuery",children:"DB_ExecuteQuery"}),")."]})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"Returns the memory handle of the database result set handle."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'static DB:gDBConnectionHandle;\n\n// ...\n\npublic OnGameModeInit()\n{\n    // ...\n\n    // Create a connection to a database\n    gDBConnectionHandle = DB_Open("example.db");\n\n    // If connection to the database exists\n    if (gDBConnectionHandle)\n    {\n        // Successfully created a connection to the database\n        new DBResult:result_set = DB_ExecuteQuery("SELECT * FROM `examples`");\n        print("Successfully created a connection to database \\"example.db\\".");\n        if (result_set)\n        {\n            printf("Database connection memory handle: 0x%x", DB_GetLegacyDBResult(result_set));\n            DB_FreeResultSet(result_set);\n        }\n    }\n    else\n    {\n        // Failed to create a connection to the database\n        print("Failed to open a connection to database \\"example.db\\".");\n    }\n\n    // ...\n\n    return 1;\n}\n\npublic OnGameModeExit()\n{\n    // Close the connection to the database if connection is open\n    if (DB_Close(gDBConnectionHandle))\n    {\n        // Extra cleanup\n        gDBConnectionHandle = DB:0;\n    }\n\n    // ...\n\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["Using an invalid handle other than zero will crash your server! Get a valid database connection handle by using ",(0,i.jsx)(t.a,{href:"DB_ExecuteQuery",children:"DB_ExecuteQuery"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DB_Open",children:"DB_Open"}),": Open a connection to an SQLite database"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DB_Close",children:"DB_Close"}),": Close the connection to an SQLite database"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DB_ExecuteQuery",children:"DB_ExecuteQuery"}),": Query an SQLite database"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DB_FreeResultSet",children:"DB_FreeResultSet"}),": Free result memory from a DB_ExecuteQuery"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DB_GetRowCount",children:"DB_GetRowCount"}),": Get the number of rows in a result"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DB_SelectNextRow",children:"DB_SelectNextRow"}),": Move to the next row"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DB_GetFieldCount",children:"DB_GetFieldCount"}),": Get the number of fields in a result"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DB_GetFieldName",children:"DB_GetFieldName"}),": Returns the name of a field at a particular index"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DB_GetFieldString",children:"DB_GetFieldString"}),": Get content of field with specified ID from current result row"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DB_GetFieldStringByName",children:"DB_GetFieldStringByName"}),": Get content of field with specified name from current result row"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DB_GetFieldInt",children:"DB_GetFieldInt"}),": Get content of field as an integer with specified ID from current result row"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DB_GetFieldIntByName",children:"DB_GetFieldIntByName"}),": Get content of field as an integer with specified name from current result row"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DB_GetFieldFloat",children:"DB_GetFieldFloat"}),": Get content of field as a float with specified ID from current result row"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DB_GetFieldFloatByName",children:"DB_GetFieldFloatByName"}),": Get content of field as a float with specified name from current result row"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DB_GetMemHandle",children:"DB_GetMemHandle"}),": Get memory handle for an SQLite database that was opened with db_open."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DB_GetLegacyDBResult",children:"DB_GetLegacyDBResult"}),": Get memory handle for an SQLite query that was executed with DB_ExecuteQuery."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DB_GetDatabaseConnectionCount",children:"DB_GetDatabaseConnectionCount"}),": The function gets the number of open database connections for debugging purposes."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DB_GetDatabaseResultSetCount",children:"DB_GetDatabaseResultSetCount"}),": The function gets the number of open database results."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(96540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);