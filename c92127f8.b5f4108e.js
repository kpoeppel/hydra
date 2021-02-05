(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{223:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var i=n(3),a=n(8),r=(n(0),n(268)),o={id:"contributing",title:"Contributing",sidebar_label:"Contributing"},l={unversionedId:"development/contributing",id:"version-0.11/development/contributing",isDocsHomePage:!1,title:"Contributing",description:"This guide assumes you have forked and checked-out the repository.",source:"@site/versioned_docs/version-0.11/development/contributing.md",slug:"/development/contributing",permalink:"/docs/0.11/development/contributing",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/development/contributing.md",version:"0.11",lastUpdatedBy:"Shagun Sodhani",lastUpdatedAt:1612488887,sidebar_label:"Contributing",sidebar:"version-0.11/docs",previous:{title:"Ray example",permalink:"/docs/0.11/advanced/ray_example"},next:{title:"Release process",permalink:"/docs/0.11/development/release"}},s=[{value:"Environment setup",id:"environment-setup",children:[]},{value:"Nox",id:"nox",children:[]},{value:"Code style guide",id:"code-style-guide",children:[]},{value:"Testing",id:"testing",children:[{value:"With pytest",id:"with-pytest",children:[]},{value:"With nox",id:"with-nox",children:[]}]},{value:"NEWS Entries",id:"news-entries",children:[{value:"Contents of a NEWS entry",id:"contents-of-a-news-entry",children:[]}]}],c={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This guide assumes you have forked and checked-out the repository.\nIt is recommended that you install Hydra in a virtual environment like conda or virtualenv."),Object(r.b)("h3",{id:"environment-setup"},"Environment setup"),Object(r.b)("p",null,"Install ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.conda.io/en/latest/miniconda.html"}),"Miniconda")," and create an empty Conda environment with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"conda create -n hydra38 python=3.8 -y\n")),Object(r.b)("div",{class:"alert alert--info",role:"alert"},Object(r.b)("strong",null,"NOTE"),": The core Hydra framework supports Python 3.6 or newer. You may need to create additional environments for different Python versions if CI detect issues on supported version of Python."),Object(r.b)("br",null),Object(r.b)("p",null,"Activate the environment:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"conda activate hydra38\n")),Object(r.b)("p",null,"From the source tree, install Hydra in development mode with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'pip install -e ".[dev]" -e .\n')),Object(r.b)("h2",{id:"nox"},"Nox"),Object(r.b)("p",null,"Hydra is using a test automation tool called ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/theacodes/nox"}),"nox")," to manage tests, linting, code coverage etc.\n",Object(r.b)("inlineCode",{parentName:"p"},"nox")," will run all the configured sessions. You can see the full list of nox sessions with ",Object(r.b)("inlineCode",{parentName:"p"},"nox -l")," and run specific sessions\nwith ",Object(r.b)("inlineCode",{parentName:"p"},"nox -s NAME")," (you may need to quote the session name in some cases)"),Object(r.b)("h2",{id:"code-style-guide"},"Code style guide"),Object(r.b)("p",null,"The code need to pass verification by the following tools:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"black .")," : Automatic code formatting for Python"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"flake8")," : PEP8 compliance checker for Python, this includes copyright header verification"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"isort .")," : Ensure imports are sorted properly"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mypy --strict .")," : Ensures code passes strict type checking")),Object(r.b)("p",null,"The easiest way to run all the required verifications is with ",Object(r.b)("inlineCode",{parentName:"p"},"nox -s lint"),"."),Object(r.b)("p",null,"It is also recommended that you install pre-commit hooks (use ",Object(r.b)("inlineCode",{parentName:"p"},"pre-commit install"),"), this will ensure that those tests\nare ran just before you commit your code."),Object(r.b)("p",null,"Any pull request that does not pass the linting will fail the automated testing."),Object(r.b)("h2",{id:"testing"},"Testing"),Object(r.b)("h3",{id:"with-pytest"},"With pytest"),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"pytest")," at the repository root to run all the Hydra core tests.\nTo run the tests of individual plugins, use ",Object(r.b)("inlineCode",{parentName:"p"},"pytest plugins/NAME"),"."),Object(r.b)("div",{class:"alert alert--info",role:"alert"},Object(r.b)("strong",null,"NOTE"),": Some plugins supports fewer versions of Python than the Hydra core."),Object(r.b)("h3",{id:"with-nox"},"With nox"),Object(r.b)("p",null,"See ",Object(r.b)("inlineCode",{parentName:"p"},"nox -l"),". a few examples:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"nox -s test_core")," will test Hydra core on all supported Python versions"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'nox -s "test_core-3.6(pip install)"')," : Test on Python 3.6 with ",Object(r.b)("inlineCode",{parentName:"li"},"pip install")," as installation method"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'nox -s "test_plugins-3.8(pip install -e)"')," : Test plugins on Python 3.8 with ",Object(r.b)("inlineCode",{parentName:"li"},"pip install -e")," as installation method  ")),Object(r.b)("h2",{id:"news-entries"},"NEWS Entries"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"NEWS.md")," file is managed using ",Object(r.b)("inlineCode",{parentName:"p"},"towncrier")," and all non trivial changes\nmust be accompanied by a news entry."),Object(r.b)("p",null,"To add an entry to the news file, first you need to have created an issue\ndescribing the change you want to make. A Pull Request itself ",Object(r.b)("em",{parentName:"p"},"may")," function as\nsuch, but it is preferred to have a dedicated issue (for example, in case the\nPR ends up rejected due to code quality reasons)."),Object(r.b)("p",null,"Once you have an issue or pull request, you take the number and you create a\nfile inside of the ",Object(r.b)("inlineCode",{parentName:"p"},"news/")," directory named after that issue number with one of the following extensions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"removal")," : Removal or deprecation of a feature"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"feature")," : New feature"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bugfix")," : Bug fix"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"plugin")," : New plugin, or an update to an existing plugin"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"config")," : Changes or addition to the configuration structure of Hydra"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"docs")," : Major addition or updates to documentation")),Object(r.b)("p",null,"If your issue or PR number is ",Object(r.b)("inlineCode",{parentName:"p"},"1234")," and this change is fixing a bug, then you would\ncreate a file ",Object(r.b)("inlineCode",{parentName:"p"},"news/1234.bugfix"),". PRs can span multiple categories by creating\nmultiple files (for instance, if you added a feature and deprecated/removed the\nold feature at the same time, you would create ",Object(r.b)("inlineCode",{parentName:"p"},"news/NNNN.feature")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"news/NNNN.removal"),"). Likewise if a PR touches multiple issues/PRs you may\ncreate a file for each of them with the exact same contents and Towncrier will\ndeduplicate them."),Object(r.b)("h3",{id:"contents-of-a-news-entry"},"Contents of a NEWS entry"),Object(r.b)("p",null,"The contents of this file is markdown formatted text that will be used\nas the content of the news file entry. You do not need to reference the issue\nor PR numbers here as towncrier will automatically add a reference to all of\nthe affected issues when rendering the news file."),Object(r.b)("p",null,"In order to maintain a consistent style in the ",Object(r.b)("inlineCode",{parentName:"p"},"NEWS.md"),' file, it is\npreferred to keep the news entry to the point, in sentence case, shorter than\n80 characters and in an imperative tone -- an entry should complete the sentence\n"This change will ...". In rare cases, where one line is not enough, use a\nsummary line in an imperative tone followed by a blank line separating it\nfrom a description of the feature/change in one or more paragraphs, each wrapped\nat 80 characters. Remember that a news entry is meant for end users and should\nonly contain details relevant to an end user.'))}d.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=i,m=u["".concat(o,".").concat(b)]||u[b]||p[b]||r;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);