/*! For license information please see stories-Library-Buttons-button-ui-ButtonUI-stories.d3b4c4bd.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_danskernesdigitalebibliotek_dpl_design_system=self.webpackChunk_danskernesdigitalebibliotek_dpl_design_system||[]).push([[511],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"./src/stories/Library/Buttons/button-ui/ButtonUI.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Hover:()=>Hover,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_dpl_design_system_dpl_design_system_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_ButtonUI__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Library/Buttons/button-ui/ButtonUI.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Library / Buttons / ButtonUI",component:_ButtonUI__WEBPACK_IMPORTED_MODULE_0__.f,argTypes:{content:{control:"object"},ariaLabel:{control:"text"},label:{control:"text"},disabled:{control:"boolean"},collapsible:{control:"boolean"},size:{control:"select"},variant:{control:"select"}},args:{content:{kind:"LABEL",label:"Se hele kalenderen"},ariaLabel:"Calendar button",disabled:!1,collapsible:!1,size:"medium",variant:"outline"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=296%3A5345"},layout:"centered"}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ButtonUI__WEBPACK_IMPORTED_MODULE_0__.f,(0,_home_runner_work_dpl_design_system_dpl_design_system_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.A)({},args))},Default=Template.bind({});Default.args={};var Hover=Template.bind({});Hover.args={};const __namedExportsOrder=["Default","Hover"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: ButtonUIProps) => <ButtonUI {...args} />",...Default.parameters?.docs?.source}}},Hover.parameters={...Hover.parameters,docs:{...Hover.parameters?.docs,source:{originalSource:"(args: ButtonUIProps) => <ButtonUI {...args} />",...Hover.parameters?.docs?.source}}}},"./src/stories/Library/Buttons/button-ui/ButtonUI.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>ButtonUI});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ButtonUI=function ButtonUI(_ref){var content=_ref.content,classes=_ref.classes,children=_ref.children,onClick=_ref.onClick,ariaLabel=_ref.ariaLabel,describe=_ref.describe;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"button","aria-describedby":describe,className:"btn-ui ".concat(classes||""),onClick,"aria-label":ariaLabel,children:function getChild(){return"LABEL"===content.kind?content.label:"ICON"===content.kind?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:content.url,alt:content.alt}):"CHILDREN"===content.kind?children:null}()})};try{ButtonUI.displayName="ButtonUI",ButtonUI.__docgenInfo={description:"",displayName:"ButtonUI",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ContentIcon | ContentLabel | ContentChildren"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string | undefined"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}},describe:{defaultValue:null,description:"",name:"describe",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/Buttons/button-ui/ButtonUI.tsx#ButtonUI"]={docgenInfo:ButtonUI.__docgenInfo,name:"ButtonUI",path:"src/stories/Library/Buttons/button-ui/ButtonUI.tsx#ButtonUI"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);