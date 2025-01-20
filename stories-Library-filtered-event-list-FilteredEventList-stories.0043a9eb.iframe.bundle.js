/*! For license information please see stories-Library-filtered-event-list-FilteredEventList-stories.0043a9eb.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_danskernesdigitalebibliotek_dpl_design_system=self.webpackChunk_danskernesdigitalebibliotek_dpl_design_system||[]).push([[2616],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"./src/stories/Library/filtered-event-list/FilteredEventList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FilteredList:()=>FilteredList,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FilteredEventList_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),ContentListItem=__webpack_require__("./src/stories/Library/content-list-item/ContentListItem.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const filtered_event_list_FilteredEventlist=function PromoteEventsList(_ref){var title=_ref.title,events=_ref.events,buttonText=_ref.buttonText,buttonShowLessText=_ref.buttonShowLessText;return(0,react.useEffect)((function(){__webpack_require__("./src/stories/utils/show-more.js")}),[]),(0,jsx_runtime.jsxs)("div",{className:"filtered-event-list","data-show-more-list-wrapper":!0,children:[(0,jsx_runtime.jsx)("h2",{className:"filtered-event-list__heading",children:title}),(0,jsx_runtime.jsx)("ul",{className:"filtered-event-list__list","data-show-more-list":!0,"data-initial-visible-items":"2","data-hide-list-button-after-expand":"false","data-show-more-list-id":"filtered-event-list",children:events.map((function(event){return(0,jsx_runtime.jsx)("li",{className:"filtered-event-list__list-item","data-show-more-item":!0,children:(0,jsx_runtime.jsx)(ContentListItem.v,(0,objectSpread2.A)({},event))})}))}),(0,jsx_runtime.jsx)("button",{className:"filtered-event-list__button btn-primary btn-outline btn-medium",type:"button","data-show-more-button":!0,"data-show-more-text":buttonText,"data-show-less-text":buttonShowLessText,children:buttonText})]})};try{FilteredEventlist.displayName="FilteredEventlist",FilteredEventlist.__docgenInfo={description:"",displayName:"FilteredEventlist",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},events:{defaultValue:null,description:"",name:"events",required:!0,type:{name:"ContentListItemProps[]"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!0,type:{name:"string"}},buttonShowLessText:{defaultValue:null,description:"",name:"buttonShowLessText",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/filtered-event-list/FilteredEventlist.tsx#FilteredEventlist"]={docgenInfo:FilteredEventlist.__docgenInfo,name:"FilteredEventlist",path:"src/stories/Library/filtered-event-list/FilteredEventlist.tsx#FilteredEventlist"})}catch(__react_docgen_typescript_loader_error){}var ImageCredited=__webpack_require__("./src/stories/Library/image-credited/ImageCredited.tsx"),FilteredListData=[{image:(0,jsx_runtime.jsx)(ImageCredited.A,{src:"https://images.unsplash.com/photo-1549277513-f1b32fe1f8f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}),tagText:"Foredrag",title:"Kunst og kultur i middelalderen",description:"En dybdegåendenalysef kunst og kultur i middelalderen.",location:"Kulturhuset",price:"50 - 100 KR",href:"/",date:"2023-01-10",time:"15:00 - 17:00"},{image:(0,jsx_runtime.jsx)(ImageCredited.A,{src:"https://plus.unsplash.com/premium_photo-1696886122527-e4303b76aa8f?q=80&w=5156&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}),tagText:"arrangement",title:"Fars Legestue",description:"Kom forbi til hygge i Fars Legestue",location:"Hovedbiblioteket",price:"60 KR",href:"/",date:"2023-01-12",time:"18:00 - 20:00"},{image:(0,jsx_runtime.jsx)(ImageCredited.A,{src:"https://images.unsplash.com/photo-1549277513-f1b32fe1f8f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}),tagText:"arrangement",title:"Fars Legestue",description:"Kom forbi til hygge i Fars Legestue",location:"Hovedeblibloteket",price:"60 KR",href:"/",date:"2023-01-13",time:"18:00 - 20:00"},{image:(0,jsx_runtime.jsx)(ImageCredited.A,{src:"https://plus.unsplash.com/premium_photo-1696886122527-e4303b76aa8f?q=80&w=5156&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}),tagText:"arrangement",title:"Fars Legestue",description:"Kom forbi til hygge i Fars Legestue",location:"Hovedeblibloteket",price:"60 KR",href:"/",date:"2023-01-14",time:"18:00 - 20:00"}];const FilteredEventList_stories={title:"Library/ Filtered Event List",component:filtered_event_list_FilteredEventlist,argTypes:{title:{control:"text",description:"Title of the recommendation"},events:{control:"object",description:"List of events to be displayed"},buttonText:{control:"text",description:"Text for the button"},buttonShowLessText:{control:"text",description:"Text for the button"}},args:{title:"Aktiviteter på biblioteket",events:FilteredListData,buttonText:"Se alle",buttonShowLessText:"Se færre"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7567-80202&mode=design&t=eZs7Tgx4a1ebZQiO-4"}}};var FilteredList=function Template(args){return(0,jsx_runtime.jsx)(filtered_event_list_FilteredEventlist,(0,objectSpread2.A)({},args))}.bind({});const __namedExportsOrder=["FilteredList"];FilteredList.parameters={...FilteredList.parameters,docs:{...FilteredList.parameters?.docs,source:{originalSource:"args => <FilteredEventList {...args} />",...FilteredList.parameters?.docs?.source}}}},"./src/stories/Library/Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>ForwardRef});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgIconArrowUiSmallRight(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=_objectWithoutProperties(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:61,height:9,viewBox:"0 0 61 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{className:"arrow__body",d:"M60 4.5H0",stroke:"currentColor"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{className:"arrow__head",d:"M60.3537 4.85355C60.5489 4.65829 60.5489 4.34171 60.3537 4.14645L57.1717 0.96447C56.9764 0.769208 56.6598 0.769208 56.4646 0.96447C56.2693 1.15973 56.2693 1.47631 56.4646 1.67157L59.293 4.5L56.4646 7.32843C56.2693 7.52369 56.2693 7.84027 56.4646 8.03553C56.6598 8.2308 56.9764 8.2308 57.1717 8.03553L60.3537 4.85355ZM60.0001 4H57.0001V5H60.0001V4Z",fill:"currentColor"})))}var ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgIconArrowUiSmallRight);__webpack_require__.p},"./src/stories/utils/show-more.js":()=>{document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[data-show-more-list-wrapper]").forEach((function(listWrapper){var list=listWrapper.querySelector("[data-show-more-list]"),listId=list.getAttribute("data-show-more-list-id"),listElements=list.querySelectorAll("[data-show-more-item]"),amountOfListElements=parseInt(listElements.length,10),listShowMoreButton=listWrapper.querySelector("[data-show-more-button]");if(!(list&&listShowMoreButton&&listElements&&listId)){var missingElements=[];return list||missingElements.push("list"),listShowMoreButton||missingElements.push("listShowMoreButton"),listElements.length||missingElements.push("listElements"),listId||missingElements.push("listId"),void console.debug("show-more.js: Missing required elements: ".concat(missingElements.join(", ")))}list.setAttribute("id","list-id-".concat(listId)),listShowMoreButton.setAttribute("aria-controls","list-id-".concat(listId));var initialVisibleItems=list.getAttribute("data-initial-visible-items")||amountOfListElements;if(initialVisibleItems>=amountOfListElements)listShowMoreButton.classList.add("show-more__hidden");else{listElements.forEach((function(listItem,index){index>initialVisibleItems-1&&listItem.classList.add("show-more__hidden")}));var showMoreText=listShowMoreButton.getAttribute("data-show-more-text"),showLessText=listShowMoreButton.getAttribute("data-show-less-text"),hideListButtonAfterExpand=list.getAttribute("data-hide-list-button-after-expand");listShowMoreButton.addEventListener("click",(function(){listElements.forEach((function(listItem,index){index>initialVisibleItems-1&&listItem.classList.toggle("show-more__hidden")}));var isAriaExpanded="true"===listShowMoreButton.getAttribute("aria-expanded");listShowMoreButton.setAttribute("aria-expanded",!isAriaExpanded),listShowMoreButton.innerText=isAriaExpanded?showMoreText:showLessText,"true"!==hideListButtonAfterExpand||isAriaExpanded||listShowMoreButton.classList.add("show-more__hidden")}))}}))}))},"./src/stories/Library/content-list-item/ContentListItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>ContentListItem});var _Arrows_icon_arrow_ui_icon_arrow_ui_small_right_svg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Library/Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg"),_tag_Tag__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/Library/tag/Tag.tsx"),_media_container_MediaContainer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/Library/media-container/MediaContainer.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ContentListItem=function ContentListItem(_ref){var image=_ref.image,placeholderText=_ref.placeholderText,tagText=_ref.tagText,title=_ref.title,description=_ref.description,date=_ref.date,time=_ref.time,location=_ref.location,price=_ref.price,href=_ref.href;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a",{href,className:"content-list-item arrow__hover--right-small",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"content-list-item__image-container",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_media_container_MediaContainer__WEBPACK_IMPORTED_MODULE_2__.A,{media:image,placeholderText})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"content-list-item__content",children:[tagText&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tag_Tag__WEBPACK_IMPORTED_MODULE_1__.A,{hasBackground:!0,className:"content-list-item__tag",children:tagText}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"content-list-item__date",children:date}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2",{className:"content-list-item__title",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"content-list-item__description",children:description}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"content-list-item__content-bottom-container",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"content-list-item__location",children:location})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"content-list-item__content-right-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("time",{className:"content-list-item__time",dateTime:"2023-03-10T15:00",children:time}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"content-list-item__pricing",children:price})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Arrows_icon_arrow_ui_icon_arrow_ui_small_right_svg__WEBPACK_IMPORTED_MODULE_0__.h,{})]})};try{ContentListItem.displayName="ContentListItem",ContentListItem.__docgenInfo={description:"",displayName:"ContentListItem",props:{eventSeriesId:{defaultValue:null,description:"",name:"eventSeriesId",required:!1,type:{name:"string | undefined"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}},placeholderText:{defaultValue:null,description:"",name:"placeholderText",required:!1,type:{name:"string | undefined"}},tagText:{defaultValue:null,description:"",name:"tagText",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string"}},time:{defaultValue:null,description:"",name:"time",required:!0,type:{name:"string"}},location:{defaultValue:null,description:"",name:"location",required:!0,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},isStacked:{defaultValue:null,description:"",name:"isStacked",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/content-list-item/ContentListItem.tsx#ContentListItem"]={docgenInfo:ContentListItem.__docgenInfo,name:"ContentListItem",path:"src/stories/Library/content-list-item/ContentListItem.tsx#ContentListItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Library/image-credited/ImageCredited.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ImageCredited=function ImageCredited(_ref){var src=_ref.src,_ref$alt=_ref.alt,alt=void 0===_ref$alt?"":_ref$alt,description=_ref.description,year=_ref.year,className=_ref.className;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("figure",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("image-credited",className),children:src?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"image-credited__image",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src,alt})}),(description||year)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figcaption",{className:"image-credited__info",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:description}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:year})]})]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"image-credited__no-image"})})};const __WEBPACK_DEFAULT_EXPORT__=ImageCredited;try{ImageCredited.displayName="ImageCredited",ImageCredited.__docgenInfo={description:"",displayName:"ImageCredited",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:{value:""},description:"",name:"alt",required:!1,type:{name:"string | undefined"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},year:{defaultValue:null,description:"",name:"year",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/image-credited/ImageCredited.tsx#ImageCredited"]={docgenInfo:ImageCredited.__docgenInfo,name:"ImageCredited",path:"src/stories/Library/image-credited/ImageCredited.tsx#ImageCredited"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Library/media-container/MediaContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),MediaContainer=function MediaContainer(_ref){var media=_ref.media,_ref$placeholderText=_ref.placeholderText,placeholderText=void 0===_ref$placeholderText?"":_ref$placeholderText,classes=(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("media-container",{"media-container--placeholder":!media});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)(classes),children:media?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"media-container__media",children:[" ",media," "]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"media-container__placeholder-text",children:placeholderText})})};const __WEBPACK_DEFAULT_EXPORT__=MediaContainer;try{MediaContainer.displayName="MediaContainer",MediaContainer.__docgenInfo={description:"",displayName:"MediaContainer",props:{media:{defaultValue:null,description:"",name:"media",required:!1,type:{name:"ReactNode"}},placeholderText:{defaultValue:{value:""},description:"",name:"placeholderText",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/media-container/MediaContainer.tsx#MediaContainer"]={docgenInfo:MediaContainer.__docgenInfo,name:"MediaContainer",path:"src/stories/Library/media-container/MediaContainer.tsx#MediaContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Library/tag/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>tag_Tag});var _path,clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgIconCross(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=_objectWithoutProperties(_ref,_excluded);return react.createElement("svg",_extends({width:8,height:8,viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.832147 0.102297L0.890665 0.152814L4 3.26191L7.10933 0.152814C7.31309 -0.0509379 7.64343 -0.0509379 7.84719 0.152814C8.03241 0.338043 8.04925 0.627896 7.8977 0.832147L7.84719 0.890665L4.73809 4L7.84719 7.10933C8.05094 7.31309 8.05094 7.64343 7.84719 7.84719C7.66196 8.03241 7.3721 8.04925 7.16785 7.8977L7.10933 7.84719L4 4.73809L0.890665 7.84719C0.686913 8.05094 0.356566 8.05094 0.152814 7.84719C-0.0324151 7.66196 -0.0492539 7.3721 0.102297 7.16785L0.152814 7.10933L3.26191 4L0.152814 0.890665C-0.0509379 0.686913 -0.0509379 0.356566 0.152814 0.152814C0.338043 -0.0324151 0.627896 -0.0492539 0.832147 0.102297Z",fill:"black"})))}var ForwardRef=react.forwardRef(SvgIconCross);__webpack_require__.p;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Tag=function Tag(_ref){var children=_ref.children,_ref$size=_ref.size,size=void 0===_ref$size?"small":_ref$size,_ref$hasBackground=_ref.hasBackground,hasBackground=void 0!==_ref$hasBackground&&_ref$hasBackground,_ref$showCloseIcon=_ref.showCloseIcon,showCloseIcon=void 0!==_ref$showCloseIcon&&_ref$showCloseIcon,className=_ref.className;return(0,jsx_runtime.jsxs)("span",{className:(0,clsx.A)("tag",hasBackground&&"tag--fill","tag--".concat(size),className),children:[children,showCloseIcon&&(0,jsx_runtime.jsx)(ForwardRef,{className:"tag-icon"})]})};const tag_Tag=Tag;try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"large"'}]}},hasBackground:{defaultValue:{value:"false"},description:"",name:"hasBackground",required:!1,type:{name:"boolean | undefined"}},showCloseIcon:{defaultValue:{value:"false"},description:"",name:"showCloseIcon",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/tag/Tag.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"src/stories/Library/tag/Tag.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{$:()=>clsx,A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);