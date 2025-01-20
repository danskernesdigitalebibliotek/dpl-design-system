/*! For license information please see stories-Library-header-sidebar-nav-header-sidebar-nav-stories.2efc7f39.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_danskernesdigitalebibliotek_dpl_design_system=self.webpackChunk_danskernesdigitalebibliotek_dpl_design_system||[]).push([[1186],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"./src/stories/Library/header-sidebar-nav/header-sidebar-nav.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_dpl_design_system_dpl_design_system_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_header_sidebar_nav__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Library/header-sidebar-nav/header-sidebar-nav.tsx"),_header_menu_list_HeaderMenuListData__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/Library/header-menu-list/HeaderMenuListData.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Library / Header Sidebar Nav",component:_header_sidebar_nav__WEBPACK_IMPORTED_MODULE_0__.A,parameters:{design:{type:"figma",url:"https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=1354-8717&mode=design&t=FVZ4DJ3kACnnV4jO-4"}},argTypes:{menuLinks:{table:{category:"Content"},description:"The links of the menu",control:{type:"object"}},menuOpen:{description:"The state of the menu",control:{type:"select",options:["open","closed"]}},isStorybookContext:{name:"Are we in storybook?",control:{type:"boolean"}}},args:{menuLinks:_header_menu_list_HeaderMenuListData__WEBPACK_IMPORTED_MODULE_1__.W,menuOpen:"open",isStorybookContext:!0}};var Default=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_header_sidebar_nav__WEBPACK_IMPORTED_MODULE_0__.A,(0,_home_runner_work_dpl_design_system_dpl_design_system_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.A)({},args))}.bind({});const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: HeaderSidebarNavProps) => <HeaderSidebarNav {...args} />",...Default.parameters?.docs?.source}}}},"./src/stories/Library/header-sidebar-nav/header-sidebar-nav-js.js":()=>{window.addEventListener("load",(function(){var sidebarNavToggle=document.getElementById("header-sidebar-nav__toggle"),backgroundWrapper=document.querySelector(".header-sidebar-nav__background-wrapper"),menu=document.querySelector(".header-sidebar-nav"),closeButton=document.getElementById("js-header-sidebar-nav__close-menu-button"),lastMenuItem=document.querySelector(".header-sidebar-nav  .header__menu-navigation li:last-child a"),menuWrapper=document.querySelector(".header-sidebar-nav__menu-wrapper");function toggleSidebarNav(){var isOpen="open"===menu.getAttribute("data-open");menu&&menu.setAttribute("data-open",isOpen?"closed":"open"),sidebarNavToggle&&sidebarNavToggle.setAttribute("aria-expanded",isOpen?"false":"true"),!isOpen&&closeButton?closeButton.focus():isOpen&&sidebarNavToggle&&sidebarNavToggle.focus()}sidebarNavToggle&&(sidebarNavToggle.addEventListener("click",toggleSidebarNav),sidebarNavToggle.addEventListener("keydown",(function(event){"Enter"!==event.key&&" "!==event.key||(toggleSidebarNav(),event.preventDefault())}))),lastMenuItem&&lastMenuItem.addEventListener("keydown",(function(event){"Tab"!==event.key||event.shiftKey||(event.preventDefault(),closeButton.focus())})),closeButton&&(closeButton.addEventListener("click",toggleSidebarNav),closeButton.addEventListener("keydown",(function(event){"Tab"===event.key&&event.shiftKey&&(event.preventDefault(),lastMenuItem.focus()),"Enter"!==event.key&&" "!==event.key||(toggleSidebarNav(),event.preventDefault())}))),document.addEventListener("keydown",(function(event){"Escape"===event.key&&"open"===menu.getAttribute("data-open")&&toggleSidebarNav()})),menuWrapper&&menuWrapper.addEventListener("click",(function(event){event.target.closest(".header__menu-navigation-item a")&&toggleSidebarNav()})),backgroundWrapper&&backgroundWrapper.addEventListener("click",(function(event){event.target===backgroundWrapper&&toggleSidebarNav()}))}))},"./src/stories/Library/header-menu-list/HeaderMenuList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=function MenuItemList(_ref){var menuItems=_ref.menuItems;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{className:"header__menu-navigation",children:menuItems.map((function(item,index){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"header__menu-navigation-item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:item.href,className:"header__menu-navigation-link text-body-medium-regular hide-linkstyle",children:item.title})},index)}))})};try{HeaderMenuList.displayName="HeaderMenuList",HeaderMenuList.__docgenInfo={description:"",displayName:"HeaderMenuList",props:{menuItems:{defaultValue:null,description:"",name:"menuItems",required:!0,type:{name:"MenuItemsProps[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/header-menu-list/HeaderMenuList.tsx#HeaderMenuList"]={docgenInfo:HeaderMenuList.__docgenInfo,name:"HeaderMenuList",path:"src/stories/Library/header-menu-list/HeaderMenuList.tsx#HeaderMenuList"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Library/header-menu-list/HeaderMenuListData.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>menuItems});var menuItems=[{title:"Det sker",href:"/"},{title:"Biblioteker & åbningstider",href:"/"},{title:"Digitale tilbud",href:"/"},{title:"Litteratur",href:"/"}]},"./src/stories/Library/header-sidebar-nav/header-sidebar-nav.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>header_sidebar_nav});var _path,react=__webpack_require__("./node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgIconCloseLarge(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=_objectWithoutProperties(_ref,_excluded);return react.createElement("svg",_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.44621 2.39705L3.53033 2.46967L12 10.939L20.4697 2.46967C20.7626 2.17678 21.2374 2.17678 21.5303 2.46967C21.7966 2.73594 21.8208 3.1526 21.6029 3.44621L21.5303 3.53033L13.061 12L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2641 21.7966 20.8474 21.8208 20.5538 21.6029L20.4697 21.5303L12 13.061L3.53033 21.5303C3.23744 21.8232 2.76256 21.8232 2.46967 21.5303C2.2034 21.2641 2.1792 20.8474 2.39705 20.5538L2.46967 20.4697L10.939 12L2.46967 3.53033C2.17678 3.23744 2.17678 2.76256 2.46967 2.46967C2.73594 2.2034 3.1526 2.1792 3.44621 2.39705Z",fill:"black"})))}var ForwardRef=react.forwardRef(SvgIconCloseLarge);__webpack_require__.p;var HeaderMenuList=__webpack_require__("./src/stories/Library/header-menu-list/HeaderMenuList.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const header_sidebar_nav=function HeaderSidebarNav(_ref){var menuLinks=_ref.menuLinks,_ref$menuOpen=_ref.menuOpen,menuOpen=void 0===_ref$menuOpen?"closed":_ref$menuOpen,_ref$isStorybookConte=_ref.isStorybookContext,isStorybookContext=void 0!==_ref$isStorybookConte&&_ref$isStorybookConte;return(0,react.useEffect)((function(){__webpack_require__("./src/stories/Library/header-sidebar-nav/header-sidebar-nav-js.js")}),[]),(0,jsx_runtime.jsx)("div",{className:"header-sidebar-nav","data-open":menuOpen,style:isStorybookContext?{display:"block"}:void 0,children:(0,jsx_runtime.jsx)("div",{className:"header-sidebar-nav__background-wrapper",children:(0,jsx_runtime.jsxs)("div",{className:"header-sidebar-nav__menu-wrapper",children:[(0,jsx_runtime.jsx)("div",{className:"header-sidebar-nav__close-menu-button",id:"js-header-sidebar-nav__close-menu-button",tabIndex:0,role:"button","aria-label":"Close menu",children:(0,jsx_runtime.jsx)(ForwardRef,{"aria-hidden":"true"})}),(0,jsx_runtime.jsx)("nav",{"aria-label":"Sidebar site navigation",children:(0,jsx_runtime.jsx)(HeaderMenuList.A,{menuItems:menuLinks})})]})})})};try{headersidebarnav.displayName="headersidebarnav",headersidebarnav.__docgenInfo={description:"",displayName:"headersidebarnav",props:{menuLinks:{defaultValue:null,description:"",name:"menuLinks",required:!0,type:{name:"MenuItemsProps[]"}},menuOpen:{defaultValue:{value:"closed"},description:"",name:"menuOpen",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"open"'},{value:'"closed"'}]}},isStorybookContext:{defaultValue:{value:"false"},description:"",name:"isStorybookContext",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/header-sidebar-nav/header-sidebar-nav.tsx#headersidebarnav"]={docgenInfo:headersidebarnav.__docgenInfo,name:"headersidebarnav",path:"src/stories/Library/header-sidebar-nav/header-sidebar-nav.tsx#headersidebarnav"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);