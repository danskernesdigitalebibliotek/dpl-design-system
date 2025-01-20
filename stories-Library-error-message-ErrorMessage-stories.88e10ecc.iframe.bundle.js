/*! For license information please see stories-Library-error-message-ErrorMessage-stories.88e10ecc.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_danskernesdigitalebibliotek_dpl_design_system=self.webpackChunk_danskernesdigitalebibliotek_dpl_design_system||[]).push([[3179],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"./src/stories/Library/error-message/ErrorMessage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LongError:()=>LongError,ShortError:()=>ShortError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ErrorMessage_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),icon_warning=__webpack_require__("./public/icons/basic/icon-warning.svg"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ErrorMessage=function ErrorMessage(_ref){var message=_ref.message;return(0,jsx_runtime.jsxs)("div",{className:"error-message",children:[(0,jsx_runtime.jsx)(icon_warning.h,{className:"error-message__icon"}),(0,jsx_runtime.jsx)("div",{className:"error-message__description",children:(0,jsx_runtime.jsx)("div",{id:"dpl-react-apps-error-messages",children:message})}),(0,jsx_runtime.jsx)("button",{type:"button","aria-describedby":"describemodal",className:"error-message__btn-close","aria-label":"close modal",children:(0,jsx_runtime.jsx)("img",{src:"icons/collection/CloseLarge.svg",alt:"close error message button"})})]})};try{ErrorMessage.displayName="ErrorMessage",ErrorMessage.__docgenInfo={description:"",displayName:"ErrorMessage",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/error-message/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:ErrorMessage.__docgenInfo,name:"ErrorMessage",path:"src/stories/Library/error-message/ErrorMessage.tsx#ErrorMessage"})}catch(__react_docgen_typescript_loader_error){}const ErrorMessage_stories={title:"Library / Error Message",component:ErrorMessage,argTypes:{},parameters:{}};var Template=function Template(args){return(0,jsx_runtime.jsx)(ErrorMessage,(0,objectSpread2.A)({},args))},ShortError=Template.bind({});ShortError.args={message:"Noget gik galt. Prøv igen senere."};var LongError=Template.bind({});LongError.args={message:"Noget gik galt. Årsagen kunne være consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Prøv igen senere."};const __namedExportsOrder=["ShortError","LongError"];ShortError.parameters={...ShortError.parameters,docs:{...ShortError.parameters?.docs,source:{originalSource:"args => <ErrorMessage {...args} />",...ShortError.parameters?.docs?.source}}},LongError.parameters={...LongError.parameters,docs:{...LongError.parameters?.docs,source:{originalSource:"args => <ErrorMessage {...args} />",...LongError.parameters?.docs?.source}}}},"./public/icons/basic/icon-warning.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>ForwardRef});var _ellipse,_path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgIconWarning(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=_objectWithoutProperties(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_ellipse||(_ellipse=react__WEBPACK_IMPORTED_MODULE_0__.createElement("ellipse",{cx:20,cy:19.9822,rx:20,ry:19.9822,fill:"#D22D43"})),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.0463 24.75C20.4263 24.75 20.7404 24.4678 20.7901 24.1018L20.7969 24V11C20.7969 10.5858 20.4608 10.25 20.0463 10.25C19.6662 10.25 19.3521 10.5322 19.3024 10.8982L19.2956 11V24C19.2956 24.4142 19.6317 24.75 20.0463 24.75ZM20.0463 29.75C20.8754 29.75 21.5476 29.0784 21.5476 28.25C21.5476 27.4216 20.8754 26.75 20.0463 26.75C19.2171 26.75 18.5449 27.4216 18.5449 28.25C18.5449 29.0784 19.2171 29.75 20.0463 29.75Z",fill:"#F6F5F0"})))}var ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgIconWarning);__webpack_require__.p},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);