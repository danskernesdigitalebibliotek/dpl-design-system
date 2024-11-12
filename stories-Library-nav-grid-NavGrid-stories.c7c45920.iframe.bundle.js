/*! For license information please see stories-Library-nav-grid-NavGrid-stories.c7c45920.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_danskernesdigitalebibliotek_dpl_design_system=self.webpackChunk_danskernesdigitalebibliotek_dpl_design_system||[]).push([[3977],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"./src/stories/Library/nav-grid/NavGrid.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Many:()=>Many,NoSubtitles:()=>NoSubtitles,One:()=>One,Tree:()=>Tree,__namedExportsOrder:()=>__namedExportsOrder,default:()=>NavGrid_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),NavGrid=function NavGrid(_ref){var items=_ref.items,title=_ref.title,showSubtitles=_ref.showSubtitles;(0,react.useEffect)((function(){__webpack_require__("./src/stories/Library/nav-grid/init-nav-grid.js")}),[]);var hasMany=items.length>6;return(0,jsx_runtime.jsxs)("div",{className:(0,clsx.A)("nav-grid",showSubtitles?"nav-grid--expanded":"nav-grid--simple",hasMany&&"nav-grid--has-many",hasMany&&"nav-grid--folded"),children:[(0,jsx_runtime.jsx)("div",{className:"nav-grid__header",children:title&&(0,jsx_runtime.jsx)("h2",{className:"nav-grid__title",children:title})}),(0,jsx_runtime.jsx)("ul",{className:"nav-grid__items",children:items.map((function(item){return(0,jsx_runtime.jsx)("li",{className:"nav-grid__item",children:item})}))}),hasMany&&(0,jsx_runtime.jsx)("button",{className:"nav-grid__controller btn-primary btn-outline btn-medium",children:"Vis alle"})]})};const nav_grid_NavGrid=NavGrid;try{NavGrid.displayName="NavGrid",NavGrid.__docgenInfo={description:"",displayName:"NavGrid",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},showSubtitles:{defaultValue:null,description:"",name:"showSubtitles",required:!1,type:{name:"boolean | undefined"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ReactNode[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/nav-grid/NavGrid.tsx#NavGrid"]={docgenInfo:NavGrid.__docgenInfo,name:"NavGrid",path:"src/stories/Library/nav-grid/NavGrid.tsx#NavGrid"})}catch(__react_docgen_typescript_loader_error){}var NavTeaser=__webpack_require__("./src/stories/Library/nav-teaser/NavTeaser.tsx"),teaser=(0,jsx_runtime.jsx)(NavTeaser.A,{title:"Læseklub for børn",subtitle:"Savner du nogen at dele dine læseoplevelser med? Trænger du til ny inspiration fra andre på din egen alder?"});const NavGrid_stories={title:"Library / Nav grid ('Navigationskomponent')",component:nav_grid_NavGrid,argTypes:{title:{control:"text"},showSubtitles:{control:"boolean"},items:{control:!1}},args:{title:"Nyheder",showSubtitles:!0,items:[teaser]},parameters:{design:{type:"figma",url:"https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=434-6449&mode=design&t=BnLo07eCsytFa8Ik-4"}}};var Template=function Template(args){return(0,jsx_runtime.jsx)(nav_grid_NavGrid,(0,objectSpread2.A)({},args))},One=Template.bind({}),Tree=Template.bind({});Tree.args={items:[teaser,teaser,teaser]};var Many=Template.bind({});Many.args={items:[teaser,teaser,teaser,teaser,teaser,teaser,teaser,teaser,teaser,teaser,teaser,teaser,teaser,teaser,teaser]};var NoSubtitles=Template.bind({});NoSubtitles.args={showSubtitles:!1,items:[teaser,teaser,teaser]};const __namedExportsOrder=["One","Tree","Many","NoSubtitles"]},"./src/stories/Library/nav-grid/init-nav-grid.js":()=>{window.addEventListener("load",(function(){document.querySelectorAll(".nav-grid--has-many:not(.is-initialized)").forEach((function(grid){var _Array$from$find;grid.classList.add("is-initialized");var button=grid.querySelector(".nav-grid__controller");if(button){var firstHiddenLink=null===(_Array$from$find=Array.from(grid.querySelectorAll(".nav-grid__item")).find((function(item){return"none"===window.getComputedStyle(item).display})))||void 0===_Array$from$find?void 0:_Array$from$find.querySelector("a");button.addEventListener("click",(function(){grid.classList.remove("nav-grid--folded"),firstHiddenLink&&firstHiddenLink.focus()}))}}))}))},"./src/stories/Library/nav-teaser/NavTeaser.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>nav_teaser_NavTeaser});var _path,react=__webpack_require__("./node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgIconArrowUiNav(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=_objectWithoutProperties(_ref,_excluded);return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:33,height:8,viewBox:"0 0 33 8",fill:"black",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{d:"M32.287 4.35356C32.4823 4.15829 32.4823 3.84171 32.287 3.64645L29.105 0.464469C28.9098 0.269206 28.5932 0.269206 28.3979 0.464469C28.2027 0.659731 28.2027 0.976313 28.3979 1.17158L31.2264 4L28.3979 6.82843C28.2027 7.02369 28.2027 7.34027 28.3979 7.53554C28.5932 7.7308 28.9098 7.7308 29.105 7.53554L32.287 4.35356ZM-4.37114e-08 4.5L31.9335 4.5L31.9335 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"})))}var ForwardRef=react.forwardRef(SvgIconArrowUiNav);__webpack_require__.p;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),NavTeaser=function NavTeaser(_ref){var title=_ref.title,subtitle=_ref.subtitle;return(0,jsx_runtime.jsx)("article",{className:"nav-teaser",children:(0,jsx_runtime.jsxs)("a",{href:"#",children:[(0,jsx_runtime.jsx)("h3",{className:"nav-teaser__title",children:title}),subtitle?(0,jsx_runtime.jsx)("p",{className:"nav-teaser__subtitle",children:subtitle}):"",(0,jsx_runtime.jsx)(ForwardRef,{})]})})};const nav_teaser_NavTeaser=NavTeaser;try{NavTeaser.displayName="NavTeaser",NavTeaser.__docgenInfo={description:"",displayName:"NavTeaser",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/nav-teaser/NavTeaser.tsx#NavTeaser"]={docgenInfo:NavTeaser.__docgenInfo,name:"NavTeaser",path:"src/stories/Library/nav-teaser/NavTeaser.tsx#NavTeaser"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{$:()=>clsx,A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);