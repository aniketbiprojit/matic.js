(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[858],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2361:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],c={sidebar_position:6},l="Withdraw ERC721",p={unversionedId:"api/ERC721/withdrawNFT",id:"api/ERC721/withdrawNFT",isDocsHomePage:!1,title:"Withdraw ERC721",description:"`js",source:"@site/docs/api/ERC721/withdrawNFT.md",sourceDirName:"api/ERC721",slug:"/api/ERC721/withdrawNFT",permalink:"/matic.js/docs/api/ERC721/withdrawNFT",editUrl:"https://github.com/maticnetwork/matic.js/edit/master/docs/docs/api/ERC721/withdrawNFT.md",version:"current",lastUpdatedBy:"Aman",lastUpdatedAt:1625523537,formattedLastUpdatedAt:"7/5/2021",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Start Withdraw For NFT",permalink:"/matic.js/docs/api/ERC721/startWithdrawForNFT"},next:{title:"Transfer ERC721",permalink:"/matic.js/docs/api/ERC721/transferERC721Tokens"}},s=[],u={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"withdraw-erc721"},"Withdraw ERC721"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"matic.withdrawNFT(txId, options);\n")),(0,i.kt)("p",null,"Withdraw tokens on mainchain using ",(0,i.kt)("inlineCode",{parentName:"p"},"txId")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"startWithdraw")," method after header has been submitted to mainchain."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"txId")," must be valid tx hash"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," see ",(0,i.kt)("a",{parentName:"li",href:"#approveERC20TokensForDeposit"},"more infomation here"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"encodeAbi")," must be boolean value. For Byte code of transaction, use ",(0,i.kt)("inlineCode",{parentName:"li"},"encodeAbi: true"))))),(0,i.kt)("p",null,"This returns ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," object, which will be fulfilled when transaction gets confirmed (when receipt is generated)."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'matic.withdrawNFT("0xabcd...789", {\n  from: "0xABc578455...",\n});\n')),(0,i.kt)("hr",null))}d.isMDXComponent=!0}}]);