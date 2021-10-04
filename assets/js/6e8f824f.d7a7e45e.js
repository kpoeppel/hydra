"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4112],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3867:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={id:"hydra-command-line-flags",title:"Hydra's command line flags"},c=void 0,s={unversionedId:"advanced/hydra-command-line-flags",id:"version-1.1/advanced/hydra-command-line-flags",isDocsHomePage:!1,title:"Hydra's command line flags",description:"Hydra is using the command line for two things:",source:"@site/versioned_docs/version-1.1/advanced/hydra-command-line-flags.md",sourceDirName:"advanced",slug:"/advanced/hydra-command-line-flags",permalink:"/docs/advanced/hydra-command-line-flags",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/advanced/hydra-command-line-flags.md",tags:[],version:"1.1",lastUpdatedBy:"P\xe1draig Brady",lastUpdatedAt:1633388135,formattedLastUpdatedAt:"10/4/2021",frontMatter:{id:"hydra-command-line-flags",title:"Hydra's command line flags"},sidebar:"version-1.1/docs",previous:{title:"Terminology",permalink:"/docs/advanced/terminology"},next:{title:"Basic Override syntax",permalink:"/docs/advanced/override_grammar/basic"}},d=[],p={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hydra is using the command line for two things:"),(0,i.kt)("p",null,"Hydra is using the command line for two things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Controlling Hydra"),(0,i.kt)("li",{parentName:"ul"},"Configuring your application (See ",(0,i.kt)("a",{parentName:"li",href:"/docs/advanced/override_grammar/basic"},"Override Grammar"),")")),(0,i.kt)("p",null,"Arguments prefixed by - or -- control Hydra; the rest are used to configure the application."),(0,i.kt)("p",null,"Information about Hydra:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--hydra-help"),": Shows Hydra specific flags"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--version"),": Show Hydra's version and exit")),(0,i.kt)("p",null,"Information provided by the Hydra app:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--help,-h"),": Shows the application's help. This can be ",(0,i.kt)("a",{parentName:"li",href:"/docs/configure_hydra/app_help"},"customized"),".")),(0,i.kt)("p",null,"Debugging assistance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--cfg,-c"),": Show config instead of running. Takes as parameter one of ",(0,i.kt)("inlineCode",{parentName:"li"},"job"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"hydra")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"all"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--resolve"),": Used in conjunction with the ",(0,i.kt)("inlineCode",{parentName:"li"},"--cfg")," flag; resolve interpolations in the config before printing it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--package,-p"),": Used in conjunction with --cfg to select a specific config package to show."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--info,-i"),": Print Hydra information. This includes installed plugins, Config Search Path, Defaults List, generated config and more.")),(0,i.kt)("p",null,"Running Hydra applications:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--run,-r"),": Run is the default mode and is not normally needed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--multirun,-m"),": Run multiple jobs with the configured launcher and sweeper. See ",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/basic/running_your_app/multi-run"},"Multi-run"),".",(0,i.kt)("br",null),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--config-path,-cp"),": Overrides the ",(0,i.kt)("inlineCode",{parentName:"li"},"config_path")," specified in ",(0,i.kt)("inlineCode",{parentName:"li"},"hydra.main()"),". The ",(0,i.kt)("inlineCode",{parentName:"li"},"config_path")," is relative to the Python file declaring ",(0,i.kt)("inlineCode",{parentName:"li"},"@hydra.main()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--config-name,-cn"),": Overrides the ",(0,i.kt)("inlineCode",{parentName:"li"},"config_name")," specified in ",(0,i.kt)("inlineCode",{parentName:"li"},"hydra.main()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--config-dir,-cd"),": Adds an additional config directory to the ",(0,i.kt)("a",{parentName:"li",href:"/docs/advanced/search_path"},"config search path"),".",(0,i.kt)("br",{parentName:"li"}),"This is useful for installed apps that want to allow their users to provide additional configs.")),(0,i.kt)("p",null,"Misc:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--shell-completion,-sc"),": Install or Uninstall ",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/basic/running_your_app/tab_completion"},"shell tab completion"),".")))}u.isMDXComponent=!0}}]);