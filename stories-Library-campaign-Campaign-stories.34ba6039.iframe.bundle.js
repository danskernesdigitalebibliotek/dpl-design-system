/*! For license information please see stories-Library-campaign-Campaign-stories.34ba6039.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_danskernesdigitalebibliotek_dpl_design_system=self.webpackChunk_danskernesdigitalebibliotek_dpl_design_system||[]).push([[3754],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"./src/stories/Library/campaign/Campaign.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Ellipsis:()=>Ellipsis,Reverse:()=>Reverse,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Campaign_stories,imageOnly:()=>imageOnly,textOnly:()=>textOnly});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),clsx=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/clsx/dist/clsx.mjs")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Campaign=function Campaign(_ref){var reverse=_ref.reverse,ellipsis=_ref.ellipsis,title=_ref.title,imageUrl=_ref.imageUrl,classes={campaign:(0,clsx.A)("campaign",{"campaign--reverse":reverse}),image:(0,clsx.A)("campaign__image",{"campaign__image--full-width":!title}),title:(0,clsx.A)("campaign__title",{"campaign__title--ellipsis":ellipsis})};return(0,jsx_runtime.jsxs)("section",{className:classes.campaign,children:[imageUrl&&(0,jsx_runtime.jsx)("img",{className:classes.image,src:imageUrl,alt:""}),title&&(0,jsx_runtime.jsx)("h4",{className:classes.title,children:title})]})};const campaign_Campaign=Campaign;try{Campaign.displayName="Campaign",Campaign.__docgenInfo={description:"",displayName:"Campaign",props:{reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean | undefined"}},ellipsis:{defaultValue:null,description:"",name:"ellipsis",required:!1,type:{name:"boolean | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/campaign/Campaign.tsx#Campaign"]={docgenInfo:Campaign.__docgenInfo,name:"Campaign",path:"src/stories/Library/campaign/Campaign.tsx#Campaign"})}catch(__react_docgen_typescript_loader_error){}const Campaign_stories={title:"Library / Campaign",component:campaign_Campaign,argTypes:{title:{control:{type:"text"}},imageUrl:{control:{type:"text"}},reverse:{control:{type:"boolean"}},ellipsis:{control:{type:"boolean"}}},args:{title:"10 gode bøger om Venner & Veninder",imageUrl:"https://picsum.photos/id/777/300/200",reverse:!1,ellipsis:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4525%3A14602"}}};var Template=function Template(args){return(0,jsx_runtime.jsx)(campaign_Campaign,(0,objectSpread2.A)({},args))},Default=Template.bind({}),Reverse=Template.bind({});Reverse.args={reverse:!0};var Ellipsis=Template.bind({});Ellipsis.args={title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati temporibus odit omnis voluptatibus sapiente necessitatibus expedita consequuntur illum nobis eaque aspernatur porro incidunt quod illo vel laudantium nisi, vitae mollitia? Similique vero facere rerum repellendus perferendis commodi placeat illum corporis vel, accusantium fugiat sapiente odio doloribus inventore, aperiam quisquam veniam quia. Provident quo corporis incidunt, facilis laudantium expedita magni dolores?",ellipsis:!0};var textOnly=Template.bind({});textOnly.args={imageUrl:""};var imageOnly=Template.bind({});imageOnly.args={title:void 0,imageUrl:"images/campaign_cover.jpg"};const __namedExportsOrder=["Default","Reverse","Ellipsis","textOnly","imageOnly"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: CampaignProps) => <Campaign {...args} />",...Default.parameters?.docs?.source}}},Reverse.parameters={...Reverse.parameters,docs:{...Reverse.parameters?.docs,source:{originalSource:"(args: CampaignProps) => <Campaign {...args} />",...Reverse.parameters?.docs?.source}}},Ellipsis.parameters={...Ellipsis.parameters,docs:{...Ellipsis.parameters?.docs,source:{originalSource:"(args: CampaignProps) => <Campaign {...args} />",...Ellipsis.parameters?.docs?.source}}},textOnly.parameters={...textOnly.parameters,docs:{...textOnly.parameters?.docs,source:{originalSource:"(args: CampaignProps) => <Campaign {...args} />",...textOnly.parameters?.docs?.source}}},imageOnly.parameters={...imageOnly.parameters,docs:{...imageOnly.parameters?.docs,source:{originalSource:"(args: CampaignProps) => <Campaign {...args} />",...imageOnly.parameters?.docs?.source}}}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{$:()=>clsx,A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);