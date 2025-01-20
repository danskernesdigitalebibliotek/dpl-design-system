/*! For license information please see stories-Library-pagefold-Pagefold-stories.44801285.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_danskernesdigitalebibliotek_dpl_design_system=self.webpackChunk_danskernesdigitalebibliotek_dpl_design_system||[]).push([[1418],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"./src/stories/Library/pagefold/Pagefold.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Inherit:()=>Inherit,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_dpl_design_system_dpl_design_system_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Pagefold__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Library/pagefold/Pagefold.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Library / Pagefold",component:_Pagefold__WEBPACK_IMPORTED_MODULE_0__.A,argTypes:{className:{control:{disable:!0}},compProps:{control:{disable:!0}},type:{control:{type:"select"}},isInheriting:{control:{type:"boolean"}},isAContainer:{control:{type:"boolean"}},size:{control:{type:"select"}}},args:{type:void 0,isInheriting:!1,isAContainer:!0,size:"medium"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1354%3A7941"},layout:"centered"}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Pagefold__WEBPACK_IMPORTED_MODULE_0__.A,(0,_home_runner_work_dpl_design_system_dpl_design_system_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)({},args))},Default=Template.bind({});Default.args={isInheriting:!1};var Inherit=Template.bind({});Inherit.args={isInheriting:!0};const __namedExportsOrder=["Default","Inherit"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <PagefoldComp {...args} />",...Default.parameters?.docs?.source}}},Inherit.parameters={...Inherit.parameters,docs:{...Inherit.parameters?.docs,source:{originalSource:"args => <PagefoldComp {...args} />",...Inherit.parameters?.docs?.source}}}},"./src/stories/Library/Buttons/button/helper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{IX:()=>getVariant,JW:()=>getPagefoldClasses,YC:()=>getSize});var _home_runner_work_dpl_design_system_dpl_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),getSize=function getSize(size){return"xlarge"===size?"btn-xlarge":"large"===size?"btn-large":"medium"===size?"btn-medium":"small"===size?"btn-small":"xsmall"===size?"btn-xsmall":""},getVariant=function getVariant(variant){return"filled"===variant?"btn-filled":"outline"===variant?"btn-outline":""},getPagefoldClasses=function getPagefoldClasses(_ref){var isInheriting=_ref.isInheriting,isAContainer=_ref.isAContainer,size=_ref.size,type=_ref.type,className=_ref.className;return{wrapper:(0,clsx__WEBPACK_IMPORTED_MODULE_0__.A)("pagefold-parent--".concat(size),{"internal-pagefold-parent":isAContainer},className),triangle:(0,clsx__WEBPACK_IMPORTED_MODULE_0__.A)("pagefold-triangle--".concat(size),(0,_home_runner_work_dpl_design_system_dpl_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)({},"pagefold-triangle--".concat(type),type),{"pagefold-inherit-parent":isInheriting})}}},"./src/stories/Library/pagefold/Pagefold.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_dpl_design_system_dpl_design_system_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Buttons_button_helper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/Library/Buttons/button/helper.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Pagefold=function Pagefold(props){var isInheriting=props.isInheriting,isAContainer=props.isAContainer,size=props.size,type=props.type,children=props.children,className=props.className,compProps=props.compProps,classes=(0,_Buttons_button_helper__WEBPACK_IMPORTED_MODULE_1__.JW)({isInheriting,isAContainer,size,type,className});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",(0,_home_runner_work_dpl_design_system_dpl_design_system_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)((0,_home_runner_work_dpl_design_system_dpl_design_system_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)({className:classes.wrapper},compProps),{},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classes.triangle}),children]}))};const __WEBPACK_DEFAULT_EXPORT__=Pagefold;try{Pagefold.displayName="Pagefold",Pagefold.__docgenInfo={description:"",displayName:"Pagefold",props:{isInheriting:{defaultValue:null,description:"",name:"isInheriting",required:!0,type:{name:"boolean"}},isAContainer:{defaultValue:null,description:"",name:"isAContainer",required:!0,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"none"'},{value:'"xsmall"'},{value:'"medium"'},{value:'"xlarge"'}]}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"success"'},{value:'"alert"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"available"'},{value:'"unavailable"'},{value:'"selected"'}]}},compProps:{defaultValue:null,description:"",name:"compProps",required:!1,type:{name:'Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> | undefined'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/pagefold/Pagefold.tsx#Pagefold"]={docgenInfo:Pagefold.__docgenInfo,name:"Pagefold",path:"src/stories/Library/pagefold/Pagefold.tsx#Pagefold"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{$:()=>clsx,A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);