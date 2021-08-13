"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6193],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return p}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(t),p=o,v=m["".concat(l,".").concat(p)]||m[p]||u[p]||r;return t?a.createElement(v,i(i({ref:n},s),{},{components:t})):a.createElement(v,i({ref:n},s))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7839:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],c={id:"dbcontext-Interceptor",title:"9.24 \u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668",sidebar_label:"9.24 \u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668"},l=void 0,d={unversionedId:"dbcontext-Interceptor",id:"dbcontext-Interceptor",isDocsHomePage:!1,title:"9.24 \u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668",description:"9.24.1 \u6570\u636e\u5e93\u62e6\u622a\u5668",source:"@site/docs/dbcontext-Interceptor.mdx",sourceDirName:".",slug:"/dbcontext-Interceptor",permalink:"/furion/docs/dbcontext-Interceptor",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/dbcontext-Interceptor.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1614238444,formattedLastUpdatedAt:"2/25/2021",frontMatter:{id:"dbcontext-Interceptor",title:"9.24 \u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668",sidebar_label:"9.24 \u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668"},sidebar:"docs",previous:{title:"9.23 \u5b9e\u4f53/\u5168\u5c40\u67e5\u8be2\u7b5b\u9009\u5668",permalink:"/furion/docs/dbcontext-filter"},next:{title:"9.25. \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668",permalink:"/furion/docs/dbcontext-entitytrigger"}},s=[{value:"9.24.1 \u6570\u636e\u5e93\u62e6\u622a\u5668",id:"9241-\u6570\u636e\u5e93\u62e6\u622a\u5668",children:[]},{value:"9.24.2 \u652f\u6301\u62e6\u622a\u7c7b\u578b",id:"9242-\u652f\u6301\u62e6\u622a\u7c7b\u578b",children:[{value:"9.24.2.1 <code>DbConnectionInterceptor</code>",id:"92421-dbconnectioninterceptor",children:[]},{value:"9.24.2.2 <code>DbCommandInterceptor</code>",id:"92422-dbcommandinterceptor",children:[]},{value:"9.24.2.3 <code>SaveChangesInterceptor</code>",id:"92423-savechangesinterceptor",children:[]},{value:"9.24.2.4 <code>SavedChangesEvent</code> \u62e6\u622a",id:"92424-savedchangesevent-\u62e6\u622a",children:[]}]},{value:"9.24.3 \u6ce8\u518c\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668",id:"9243-\u6ce8\u518c\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668",children:[]},{value:"9.24.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9244-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],u={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"9241-\u6570\u636e\u5e93\u62e6\u622a\u5668"},"9.24.1 \u6570\u636e\u5e93\u62e6\u622a\u5668"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u56db\u79cd\u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668\uff0c\u53ef\u4ee5\u901a\u8fc7\u62e6\u622a\u5668\u52a8\u6001\u4fee\u6539\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\uff0c\u52a8\u6001\u4fee\u6539 sql\uff0c\u52a8\u6001\u66f4\u6539\u53c2\u6570\u7b49\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u652f\u6301\u8fd9\u56db\u79cd\u62e6\u622a\u5668\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DbConnectionInterceptor"),"\uff1a\u6570\u636e\u5e93\u8fde\u63a5\u62e6\u622a\u5668"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DbCommandInterceptor"),"\uff1a\u6570\u636e\u5e93\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"Sql")," \u62e6\u622a\u5668"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SaveChangesInterceptor"),"\uff1a\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u62e6\u622a\u5668"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u4e2d\u91cd\u5199 ",(0,r.kt)("inlineCode",{parentName:"li"},"SavedChangesEvent")," \u76f8\u5173\u4e8b\u4ef6")),(0,r.kt)("h2",{id:"9242-\u652f\u6301\u62e6\u622a\u7c7b\u578b"},"9.24.2 \u652f\u6301\u62e6\u622a\u7c7b\u578b"),(0,r.kt)("h3",{id:"92421-dbconnectioninterceptor"},"9.24.2.1 ",(0,r.kt)("inlineCode",{parentName:"h3"},"DbConnectionInterceptor")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using Microsoft.EntityFrameworkCore.Diagnostics;\nusing System.Data.Common;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nnamespace Furion.DatabaseAccessor.Interceptors\n{\n    public class SqlConnectionInterceptor : DbConnectionInterceptor\n    {\n        // \u6570\u636e\u5e93\u8fde\u63a5\u4e4b\u524d\n        public override InterceptionResult ConnectionOpening(DbConnection connection, ConnectionEventData eventData, InterceptionResult result)\n        {\n            return base.ConnectionOpening(connection, eventData, result);\n        }\n\n        // \u6570\u636e\u5e93\u8fde\u63a5\u4e4b\u524d\uff08\u5f02\u6b65\uff09\n        public override ValueTask<InterceptionResult> ConnectionOpeningAsync(DbConnection connection, ConnectionEventData eventData, InterceptionResult result, CancellationToken cancellationToken = default)\n        {\n            return base.ConnectionOpeningAsync(connection, eventData, result, cancellationToken);\n        }\n\n        // \u6570\u636e\u5e93\u8fde\u63a5\u6210\u529f\n        public override void ConnectionOpened(DbConnection connection, ConnectionEndEventData eventData)\n        {\n            base.ConnectionOpened(connection, eventData);\n        }\n\n        // \u6570\u636e\u5e93\u8fde\u63a5\u6210\u529f\uff08\u5f02\u6b65\uff09\n        public override Task ConnectionOpenedAsync(DbConnection connection, ConnectionEndEventData eventData, CancellationToken cancellationToken = default)\n        {\n            return base.ConnectionOpenedAsync(connection, eventData, cancellationToken);\n        }\n\n        // \u6570\u636e\u5e93\u8fde\u63a5\u5173\u95ed\u4e4b\u524d\n        public override InterceptionResult ConnectionClosing(DbConnection connection, ConnectionEventData eventData, InterceptionResult result)\n        {\n            return base.ConnectionClosing(connection, eventData, result);\n        }\n\n        // \u6570\u636e\u5e93\u8fde\u63a5\u5173\u95ed\u4e4b\u524d\uff08\u5f02\u6b65\uff09\n        public override ValueTask<InterceptionResult> ConnectionClosingAsync(DbConnection connection, ConnectionEventData eventData, InterceptionResult result)\n        {\n            return base.ConnectionClosingAsync(connection, eventData, result);\n        }\n\n        // \u6570\u636e\u5e93\u8fde\u63a5\u5173\u95ed\u6210\u529f\n        public override void ConnectionClosed(DbConnection connection, ConnectionEndEventData eventData)\n        {\n            base.ConnectionClosed(connection, eventData);\n        }\n\n        // \u6570\u636e\u5e93\u8fde\u63a5\u5173\u95ed\u6210\u529f\uff08\u5f02\u6b65\uff09\n        public override Task ConnectionClosedAsync(DbConnection connection, ConnectionEndEventData eventData)\n        {\n            return base.ConnectionClosedAsync(connection, eventData);\n        }\n\n        // \u6570\u636e\u5e93\u8fde\u63a5\u5931\u8d25\n        public override void ConnectionFailed(DbConnection connection, ConnectionErrorEventData eventData)\n        {\n            base.ConnectionFailed(connection, eventData);\n        }\n\n        // \u6570\u636e\u5e93\u8fde\u63a5\u5931\u8d25\uff08\u5f02\u6b65\uff09\n        public override Task ConnectionFailedAsync(DbConnection connection, ConnectionErrorEventData eventData, CancellationToken cancellationToken = default)\n        {\n            return base.ConnectionFailedAsync(connection, eventData, cancellationToken);\n        }\n    }\n}\n")),(0,r.kt)("h3",{id:"92422-dbcommandinterceptor"},"9.24.2.2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"DbCommandInterceptor")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using Microsoft.EntityFrameworkCore.Diagnostics;\nusing System.Data.Common;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nnamespace Furion.DatabaseAccessor\n{\n    internal sealed class SqlCommandProfilerInterceptor : DbCommandInterceptor\n    {\n        // \u521b\u5efa\u547d\u4ee4\u5bf9\u8c61\u4e4b\u524d\n        public override InterceptionResult<DbCommand> CommandCreating(CommandCorrelatedEventData eventData, InterceptionResult<DbCommand> result)\n        {\n            return base.CommandCreating(eventData, result);\n        }\n\n        // \u521b\u5efa\u547d\u4ee4\u5bf9\u8c61\u4e4b\u540e\n        public override DbCommand CommandCreated(CommandEndEventData eventData, DbCommand result)\n        {\n            return base.CommandCreated(eventData, result);\n        }\n\n        // \u521b\u5efa\u547d\u4ee4\u5bf9\u8c61\u5931\u8d25\n        public override void CommandFailed(DbCommand command, CommandErrorEventData eventData)\n        {\n            base.CommandFailed(command, eventData);\n        }\n\n         // \u521b\u5efa\u547d\u4ee4\u5bf9\u8c61\u5931\u8d25\uff08\u5f02\u6b65\uff09\n        public override Task CommandFailedAsync(DbCommand command, CommandErrorEventData eventData, CancellationToken cancellationToken = default)\n        {\n            return base.CommandFailedAsync(command, eventData, cancellationToken);\n        }\n\n        // \u8bfb\u53d6\u6570\u636e\u4e4b\u524d\n        public override InterceptionResult<DbDataReader> ReaderExecuting(DbCommand command, CommandEventData eventData, InterceptionResult<DbDataReader> result)\n        {\n            return base.ReaderExecuting(command, eventData, result);\n        }\n\n        // \u8bfb\u53d6\u6570\u636e\u4e4b\u524d\uff08\u5f02\u6b65\uff09\n        public override ValueTask<InterceptionResult<DbDataReader>> ReaderExecutingAsync(DbCommand command, CommandEventData eventData, InterceptionResult<DbDataReader> result, CancellationToken cancellationToken = default)\n        {\n            return base.ReaderExecutingAsync(command, eventData, result, cancellationToken);\n        }\n\n        // \u8bfb\u53d6\u6570\u636e\u4e4b\u540e\n        public override DbDataReader ReaderExecuted(DbCommand command, CommandExecutedEventData eventData, DbDataReader result)\n        {\n            return base.ReaderExecuted(command, eventData, result);\n        }\n\n        // \u8bfb\u53d6\u6570\u636e\u4e4b\u540e\uff08\u5f02\u6b65\uff09\n        public override ValueTask<DbDataReader> ReaderExecutedAsync(DbCommand command, CommandExecutedEventData eventData, DbDataReader result, CancellationToken cancellationToken = default)\n        {\n            return base.ReaderExecutedAsync(command, eventData, result, cancellationToken);\n        }\n\n        // DataReader \u5bf9\u8c61\u91ca\u653e\u4e4b\u524d\n        public override InterceptionResult DataReaderDisposing(DbCommand command, DataReaderDisposingEventData eventData, InterceptionResult result)\n        {\n            return base.DataReaderDisposing(command, eventData, result);\n        }\n\n        // \u65e0\u67e5\u8be2\u6267\u884c sql \u4e4b\u524d\n        public override InterceptionResult<int> NonQueryExecuting(DbCommand command, CommandEventData eventData, InterceptionResult<int> result)\n        {\n            return base.NonQueryExecuting(command, eventData, result);\n        }\n\n        // \u65e0\u67e5\u8be2\u6267\u884c sql \u4e4b\u524d\uff08\u5f02\u6b65\uff09\n        public override ValueTask<InterceptionResult<int>> NonQueryExecutingAsync(DbCommand command, CommandEventData eventData, InterceptionResult<int> result, CancellationToken cancellationToken = default)\n        {\n            return base.NonQueryExecutingAsync(command, eventData, result, cancellationToken);\n        }\n\n        // \u65e0\u67e5\u8be2\u6267\u884c sql \u4e4b\u540e\n        public override int NonQueryExecuted(DbCommand command, CommandExecutedEventData eventData, int result)\n        {\n            return base.NonQueryExecuted(command, eventData, result);\n        }\n\n        // \u65e0\u67e5\u8be2\u6267\u884c sql \u4e4b\u540e\uff08\u5f02\u6b65\uff09\n        public override ValueTask<int> NonQueryExecutedAsync(DbCommand command, CommandExecutedEventData eventData, int result, CancellationToken cancellationToken = default)\n        {\n            return base.NonQueryExecutedAsync(command, eventData, result, cancellationToken);\n        }\n\n        // \u6267\u884c sql \u8fd4\u56de\u5355\u884c\u5355\u5217\u4e4b\u524d\n        public override InterceptionResult<object> ScalarExecuting(DbCommand command, CommandEventData eventData, InterceptionResult<object> result)\n        {\n            return base.ScalarExecuting(command, eventData, result);\n        }\n\n        // \u6267\u884c sql \u8fd4\u56de\u5355\u884c\u5355\u5217\u4e4b\u524d\uff08\u5f02\u6b65\uff09\n        public override ValueTask<InterceptionResult<object>> ScalarExecutingAsync(DbCommand command, CommandEventData eventData, InterceptionResult<object> result, CancellationToken cancellationToken = default)\n        {\n            return base.ScalarExecutingAsync(command, eventData, result, cancellationToken);\n        }\n\n        // \u6267\u884c sql \u8fd4\u56de\u5355\u884c\u5355\u5217\u4e4b\u540e\n        public override object ScalarExecuted(DbCommand command, CommandExecutedEventData eventData, object result)\n        {\n            return base.ScalarExecuted(command, eventData, result);\n        }\n\n        // \u6267\u884c sql \u8fd4\u56de\u5355\u884c\u5355\u5217\u4e4b\u540e\uff08\u5f02\u6b65\uff09\n        public override ValueTask<object> ScalarExecutedAsync(DbCommand command, CommandExecutedEventData eventData, object result, CancellationToken cancellationToken = default)\n        {\n            return base.ScalarExecutedAsync(command, eventData, result, cancellationToken);\n        }\n    }\n}\n")),(0,r.kt)("h3",{id:"92423-savechangesinterceptor"},"9.24.2.3 ",(0,r.kt)("inlineCode",{parentName:"h3"},"SaveChangesInterceptor")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using Microsoft.EntityFrameworkCore.Diagnostics;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nnamespace Furion.DatabaseAccessor\n{\n    public class DbContextSaveChangesInterceptor : SaveChangesInterceptor\n    {\n        // \u63d0\u4ea4\u5230\u6570\u636e\u5e93\u4e4b\u524d\n        public override InterceptionResult<int> SavingChanges(DbContextEventData eventData, InterceptionResult<int> result)\n        {\n            return base.SavingChanges(eventData, result);\n        }\n\n        // \u63d0\u4ea4\u5230\u6570\u636e\u5e93\u4e4b\u524d\uff08\u5f02\u6b65\uff09\n        public override ValueTask<InterceptionResult<int>> SavingChangesAsync(DbContextEventData eventData, InterceptionResult<int> result, CancellationToken cancellationToken = default)\n        {\n            return base.SavingChangesAsync(eventData, result, cancellationToken);\n        }\n\n        // \u63d0\u4ea4\u5230\u6570\u636e\u5e93\u4e4b\u540e\n        public override int SavedChanges(SaveChangesCompletedEventData eventData, int result)\n        {\n            return base.SavedChanges(eventData, result);\n        }\n\n        // \u63d0\u4ea4\u5230\u6570\u636e\u5e93\u4e4b\u540e\uff08\u5f02\u6b65\uff09\n        public override ValueTask<int> SavedChangesAsync(SaveChangesCompletedEventData eventData, int result, CancellationToken cancellationToken = default)\n        {\n            return base.SavedChangesAsync(eventData, result, cancellationToken);\n        }\n\n        // \u63d0\u4ea4\u6570\u636e\u5e93\u5931\u8d25\n        public override void SaveChangesFailed(DbContextErrorEventData eventData)\n        {\n            base.SaveChangesFailed(eventData);\n        }\n\n        // \u63d0\u4ea4\u6570\u636e\u5e93\u5931\u8d25\uff08\u5f02\u6b65\uff09\n        public override Task SaveChangesFailedAsync(DbContextErrorEventData eventData, CancellationToken cancellationToken = default)\n        {\n            return base.SaveChangesFailedAsync(eventData, cancellationToken);\n        }\n    }\n}\n")),(0,r.kt)("h3",{id:"92424-savedchangesevent-\u62e6\u622a"},"9.24.2.4 ",(0,r.kt)("inlineCode",{parentName:"h3"},"SavedChangesEvent")," \u62e6\u622a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\u4e3a\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"AppDbContext")," \u5b50\u7c7b\u90fd\u63d0\u4f9b\u4e86\u4e09\u4e2a\u53ef\u91cd\u5199\u7684\u65b9\u6cd5\uff0c\u8fd9\u4e09\u4e2a\u65b9\u6cd5\u5206\u522b\u7531\u4e09\u4e2a\u4e8b\u4ef6\u89e6\u53d1\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\u63d0\u4ea4\u66f4\u6539\u4e4b\u524d SavingChanges \u4e8b\u4ef6"),"\uff1a\u89e6\u53d1 ",(0,r.kt)("inlineCode",{parentName:"li"},"void SavingChangesEvent(DbContextEventData eventData, InterceptionResult<int> result)")," \u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\u63d0\u4ea4\u66f4\u6539\u4e4b\u540e SavedChanges \u4e8b\u4ef6"),"\uff1a\u89e6\u53d1 ",(0,r.kt)("inlineCode",{parentName:"li"},"void SavedChangesEvent(SaveChangesCompletedEventData eventData, int result)")," \u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\u63d0\u4ea4\u66f4\u6539\u5931\u8d25 SaveChangesFailed \u4e8b\u4ef6"),"\uff1a\u89e6\u53d1 ",(0,r.kt)("inlineCode",{parentName:"li"},"void SaveChangesFailedEvent(DbContextErrorEventData eventData)")," \u65b9\u6cd5")),(0,r.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e09\u4e2a\u4e8b\u4ef6\u6211\u4eec\u53ef\u4ee5",(0,r.kt)("strong",{parentName:"p"},"\u5728\u6570\u636e\u5e93\u505a\u589e\u3001\u5220\u3001\u6539\u65f6\u5019\u505a\u62e6\u622a\uff0c\u6bd4\u5982\u8bbe\u7f6e\u521b\u5efa\u65f6\u95f4\u3001\u66f4\u65b0\u65f6\u95f4\u6216\u5176\u4ed6\u9ed8\u8ba4\u64cd\u4f5c"),"\u3002"),(0,r.kt)("p",null,"\u5982\u81ea\u52a8\u6dfb\u52a0\u79df\u6237 Id\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"protected override void SavingChangesEvent(DbContextEventData eventData, InterceptionResult<int> result)\n{\n    // \u83b7\u53d6\u5f53\u524d\u4e8b\u4ef6\u5bf9\u5e94\u4e0a\u4e0b\u6587\n    var dbContext = eventData.Context;\n\n    // \u83b7\u53d6\u6240\u6709\u65b0\u589e\u548c\u66f4\u65b0\u7684\u5b9e\u4f53\n    var entities = dbContext.ChangeTracker.Entries()\n                .Where(u => u.State == EntityState.Added || u.State == EntityState.Modified);\n\n    foreach (var entity in entities)\n    {\n        switch (entity.State)\n        {\n            // \u81ea\u52a8\u8bbe\u7f6e\u79df\u6237Id\n            case EntityState.Added:\n                entity.Property(nameof(Entity.TenantId)).CurrentValue = GetTenantId();\n                break;\n            // \u6392\u9664\u79df\u6237Id\n            case EntityState.Modified:\n                entity.Property(nameof(Entity.TenantId)).IsModified = false;\n                break;\n        }\n    }\n}\n")),(0,r.kt)("h2",{id:"9243-\u6ce8\u518c\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668"},"9.24.3 \u6ce8\u518c\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u5668"),(0,r.kt)("p",null,"\u5b9a\u4e49\u597d\u8fc7\u6ee4\u5668\u4e4b\u540e\uff0c\u6211\u4eec\u9700\u8981\u5728\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u4e2d\u6ce8\u518c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"services.AddDbPool<FurionDbContext>(interceptors: new IInterceptor[] {\n    new YourSqlConnectionProfilerInterceptor(),\n    new YourDbContextSaveChangesInterceptor(),\n    new YourSqlCommandProfilerInterceptor()\n});\n")),(0,r.kt)("h2",{id:"9244-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.24.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}m.isMDXComponent=!0}}]);