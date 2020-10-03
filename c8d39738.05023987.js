(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),o=(n(0),n(236)),s={id:"config_files",title:"Config files example",sidebar_label:"Config files example"},c={unversionedId:"patterns/instantiate_objects/config_files",id:"patterns/instantiate_objects/config_files",isDocsHomePage:!1,title:"Config files example",description:"Example applications",source:"@site/docs/patterns/instantiate_objects/config_files.md",slug:"/patterns/instantiate_objects/config_files",permalink:"/docs/next/patterns/instantiate_objects/config_files",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/patterns/instantiate_objects/config_files.md",version:"current",lastUpdatedBy:"Shagun Sodhani",lastUpdatedAt:1601685368,sidebar_label:"Config files example",sidebar:"docs",previous:{title:"Instantiating objects with Hydra",permalink:"/docs/next/patterns/instantiate_objects/overview"},next:{title:"Structured Configs example",permalink:"/docs/next/patterns/instantiate_objects/structured_config"}},i=[],l={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/examples/instantiate"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20applications-informational",alt:"Example applications"})))),Object(o.b)("p",null,"This example demonstrates the use of config files to instantiated objects."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'class DBConnection:\n    def connect(self):\n        ...\n\nclass MySQLConnection(DBConnection):\n    def __init__(self, host: str, user: str, password: str) -> None:\n        self.host = host\n        self.user = user\n        self.password = password\n\n    def connect(self) -> None:\n        print(f"MySQL connecting to {self.host}")\n\n\nclass PostgreSQLConnection(DBConnection):\n    def __init__(self, host: str, user: str, password: str, database: str) -> None:\n        self.host = host\n        self.user = user\n        self.password = password\n        self.database = database\n\n    def connect(self) -> None:\n        print(f"PostgreSQL connecting to {self.host}")\n')),Object(o.b)("p",null,"To support this, we can have a parallel config structure:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"conf/\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 mysql.yaml\n    \u2514\u2500\u2500 postgresql.yaml\n")),Object(o.b)("p",null,"Config files:"),Object(o.b)("div",{className:"row"},Object(o.b)("div",{className:"col col--6"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'}),"# @package _group_\n_target_: my_app.MySQLConnection\nhost: localhost\nuser: root\npassword: 1234\n\n"))),Object(o.b)("div",{className:"col col--6"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/postgresql.yaml"',title:'"db/postgresql.yaml"'}),"# @package _group_\n_target_: my_app.PostgreSQLConnection\nhost: localhost\nuser: root\npassword: 1234\ndatabase: tutorial\n")))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"defaults:\n  - db: mysql\n")),Object(o.b)("p",null,"With this, you can instantiate the object from the configuration with a single line of code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg):\n    connection = hydra.utils.instantiate(cfg.db)\n    connection.connect()\n')))}p.isMDXComponent=!0},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(n),u=a,m=f["".concat(s,".").concat(u)]||f[u]||b[u]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);