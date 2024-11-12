/*! For license information please see stories-Library-Lists-list-reservation-ListReservationsAndLoans-stories.4ca3f268.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_danskernesdigitalebibliotek_dpl_design_system=self.webpackChunk_danskernesdigitalebibliotek_dpl_design_system||[]).push([[1156],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_objectSpread2});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.A)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen):void 0}}},"./src/stories/Library/Lists/list-reservation/ListReservationsAndLoans.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Item1:()=>Item1,Item2:()=>Item2,Item3:()=>Item3,Item4:()=>Item4,Item5:()=>Item5,Item6:()=>Item6,ItemStacked:()=>ItemStacked,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ListReservationsAndLoans_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),Counter=__webpack_require__("./src/stories/Library/counter/Counter.tsx"),StatusLabel=__webpack_require__("./src/stories/Library/status-label/StatusLabel.tsx"),Cover=__webpack_require__("./src/stories/Library/cover/Cover.tsx"),icon_arrow_ui_small_right=__webpack_require__("./src/stories/Library/Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ListReservationsAndLoans=function ListReservationsAndLoans(props){var cover=props.cover,isStacked=props.isStacked,counter=props.counter,statusLabel=props.statusLabel,statusNotes=props.statusNotes,fee=props.fee;return(0,jsx_runtime.jsx)("div",{className:"list-reservation-container",children:(0,jsx_runtime.jsxs)("div",{className:(0,clsx.A)("list-reservation arrow arrow__hover--right-small",[{"list-reservation--stacked":isStacked}]),children:[(0,jsx_runtime.jsxs)("div",{className:"list-reservation__material",children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Cover.A,{size:"small",animate:!0,src:cover.image})}),(0,jsx_runtime.jsxs)("div",{className:"list-reservation__information",children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(StatusLabel.V,{label:"bog",status:"outline"})}),(0,jsx_runtime.jsxs)("div",{className:"list-reservation__about",children:[(0,jsx_runtime.jsx)("button",{className:"list-reservation__header",children:(0,jsx_runtime.jsx)("span",{className:"list-reservation__header__text",children:cover.title})}),(0,jsx_runtime.jsx)("p",{className:"text-small-caption color-secondary-gray",children:cover.description})]}),(0,jsx_runtime.jsx)("button",{type:"button","aria-label":"note about material",className:(0,clsx.A)("list-reservation__note list-reservation__note--desktop color-secondary-gray",cover.noteAsWarning&&"color-signal-alert"),children:cover.noteLabel})]})]}),(0,jsx_runtime.jsxs)("div",{className:"list-reservation__status",children:[(0,jsx_runtime.jsx)("div",{className:"list-reservation__counter",children:counter&&(0,jsx_runtime.jsx)(Counter.p,{label:counter.label,percentage:counter.percentage,value:counter.value,status:counter.status,isReady:counter.isReady})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("div",{className:"list-reservation__deadline",children:[statusLabel&&(0,jsx_runtime.jsx)(StatusLabel.V,{label:statusLabel.label,status:statusLabel.status}),(0,jsx_runtime.jsx)("p",{className:"text-small-caption",children:statusNotes}),(0,jsx_runtime.jsx)("a",{href:cover.noteUrl,className:(0,clsx.A)("list-reservation__note list-reservation__note--mobile color-secondary-gray",cover.noteAsWarning&&"color-signal-alert"),children:cover.noteLabel})]})}),fee>0?(0,jsx_runtime.jsx)("div",{className:"list-reservation__fee",children:(0,jsx_runtime.jsxs)("p",{className:"text-body-medium-medium",children:["Gebyr ",fee,",-"]})}):null,(0,jsx_runtime.jsx)("button",{type:"button",className:"arrow-button","aria-label":"see reservation",children:(0,jsx_runtime.jsx)(icon_arrow_ui_small_right.h,{})})]})]})})};try{ListReservationsAndLoans.displayName="ListReservationsAndLoans",ListReservationsAndLoans.__docgenInfo={description:"",displayName:"ListReservationsAndLoans",props:{cover:{defaultValue:null,description:"",name:"cover",required:!0,type:{name:"{ type: string; title: string; description: string; image: string; url: string; noteLabel: string; noteUrl: string; noteAsWarning: boolean; }"}},isStacked:{defaultValue:null,description:"",name:"isStacked",required:!0,type:{name:"boolean"}},counter:{defaultValue:null,description:"",name:"counter",required:!0,type:{name:"CounterProps"}},statusLabel:{defaultValue:null,description:"",name:"statusLabel",required:!0,type:{name:"StatusLabelProps"}},statusNotes:{defaultValue:null,description:"",name:"statusNotes",required:!0,type:{name:"string"}},fee:{defaultValue:null,description:"",name:"fee",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/Lists/list-reservation/ListReservationsAndLoans.tsx#ListReservationsAndLoans"]={docgenInfo:ListReservationsAndLoans.__docgenInfo,name:"ListReservationsAndLoans",path:"src/stories/Library/Lists/list-reservation/ListReservationsAndLoans.tsx#ListReservationsAndLoans"})}catch(__react_docgen_typescript_loader_error){}const ListReservationsAndLoans_stories={title:"Library / Lists / ReservationAndLoans",component:ListReservationsAndLoans,argTypes:{},parameters:{design:{type:"figma",url:"https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=1181%3A5923"}}};var Template=function Template(args){return(0,jsx_runtime.jsx)(ListReservationsAndLoans,(0,objectSpread2.A)({},args))},Item1=Template.bind({});Item1.args={cover:{type:"bog",title:"Den utrolige historie om den kæmpestore pære (eller beretningen om, hvordan Jeronimus Bjergstrøm Severin Olsen blev genindsat i sit retmæssige embede som Solbys borgmester til glæde for alle byens indbyggere på nær én)",description:"Af Jakob Martin Strid ",image:"images/book_cover_5.jpg",url:"",noteLabel:"Du pålægges et gebyr, når materialet afleveres",noteUrl:"",noteAsWarning:!0},isStacked:!1,fee:0,counter:{isReady:!1,label:"dage",percentage:100,status:"danger",value:0},statusLabel:{label:"overskredet",status:"danger"},statusNotes:"Afleveres 02.10.2021"};var Item2=Template.bind({});Item2.args={cover:{type:"bog",title:"Audrey Hepburn",description:"Af Isabel Sánchez Vegara, Amaia Arrazola (2018)",image:"images/book_cover_3.jpg",url:"",noteLabel:"Du pålægges et gebyr, når materialet afleveres",noteUrl:"",noteAsWarning:!1},isStacked:!1,fee:0,counter:{isReady:!1,label:"dage",percentage:100,status:"danger",value:0},statusLabel:{label:"overskredet",status:"danger"},statusNotes:"Afleveres 02.10.2021"};var Item3=Template.bind({});Item3.args={cover:{type:"bog",title:"Sauna",description:"Af Anton M. Berg (2020)",image:"images/book_cover_6.jpg",url:"",noteLabel:"",noteUrl:"",noteAsWarning:!1},isStacked:!1,fee:0,counter:{isReady:!1,label:"dage",percentage:75,status:"warning",value:7},statusLabel:{label:"udløber snart",status:"warning"},statusNotes:"Afleveres 02.10.2021"};var Item4=Template.bind({});Item4.args={cover:{type:"bog",title:"De Uadskillige",description:"Af Anton M. Berg (2020)",image:"images/book_cover_1.jpg",url:"",noteLabel:"",noteUrl:"",noteAsWarning:!1},isStacked:!1,fee:0,counter:{isReady:!1,label:"dage",percentage:60,status:"warning",value:9},statusLabel:void 0,statusNotes:"Afleveres 02.10.2021"};var Item5=Template.bind({});Item5.args={cover:{type:"bog",title:"Den lille bog om dansk design - for børn og barnlige sjæle",description:"Af Marie Hugsted (2018)",image:"images/book_cover_2.jpg",url:"",noteLabel:"",noteUrl:"",noteAsWarning:!1},isStacked:!1,fee:0,counter:{isReady:!1,label:"dage",percentage:50,status:"neutral",value:24},statusLabel:void 0,statusNotes:"Afleveres 02.10.2021"};var Item6=Template.bind({});Item6.args={cover:{type:"bog",title:"Døgnkioskmennesket",description:"Af Sayaka Murata (2019)",image:"images/book_cover_2.jpg",url:"",noteLabel:"",noteUrl:"",noteAsWarning:!1},isStacked:!1,fee:0,counter:{isReady:!1,label:"dage",percentage:25,status:"neutral",value:29},statusLabel:void 0,statusNotes:"Afleveres 02.10.2021"};var ItemStacked=Template.bind({});ItemStacked.args={cover:{type:"bog",title:"Audrey Hepburn",description:"Af Isabel Sánchez Vegara, Amaia Arrazola (2018)",image:"images/book_cover_3.jpg",url:"",noteLabel:"+ 3 materialer",noteUrl:"",noteAsWarning:!1},isStacked:!0,fee:20,counter:void 0,statusLabel:{label:"afleveret for sent",status:"danger"},statusNotes:"Afleveres 10.10.2020"};const __namedExportsOrder=["Item1","Item2","Item3","Item4","Item5","Item6","ItemStacked"];Item1.parameters={...Item1.parameters,docs:{...Item1.parameters?.docs,source:{originalSource:"args => <ListReservationsAndLoans {...args} />",...Item1.parameters?.docs?.source}}},Item2.parameters={...Item2.parameters,docs:{...Item2.parameters?.docs,source:{originalSource:"args => <ListReservationsAndLoans {...args} />",...Item2.parameters?.docs?.source}}},Item3.parameters={...Item3.parameters,docs:{...Item3.parameters?.docs,source:{originalSource:"args => <ListReservationsAndLoans {...args} />",...Item3.parameters?.docs?.source}}},Item4.parameters={...Item4.parameters,docs:{...Item4.parameters?.docs,source:{originalSource:"args => <ListReservationsAndLoans {...args} />",...Item4.parameters?.docs?.source}}},Item5.parameters={...Item5.parameters,docs:{...Item5.parameters?.docs,source:{originalSource:"args => <ListReservationsAndLoans {...args} />",...Item5.parameters?.docs?.source}}},Item6.parameters={...Item6.parameters,docs:{...Item6.parameters?.docs,source:{originalSource:"args => <ListReservationsAndLoans {...args} />",...Item6.parameters?.docs?.source}}},ItemStacked.parameters={...ItemStacked.parameters,docs:{...ItemStacked.parameters?.docs,source:{originalSource:"args => <ListReservationsAndLoans {...args} />",...ItemStacked.parameters?.docs?.source}}}},"./public/icons/collection/Check.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>ForwardRef});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgCheck(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=_objectWithoutProperties(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.4489 5.49129C20.7299 5.18693 21.2043 5.16795 21.5087 5.4489C21.7854 5.70431 21.8262 6.11968 21.6203 6.42176L21.5511 6.50871L9.5511 19.5087C9.28844 19.7933 8.85853 19.8273 8.55624 19.6048L8.46967 19.5303L2.46967 13.5303C2.17678 13.2374 2.17678 12.7626 2.46967 12.4697C2.73594 12.2034 3.1526 12.1792 3.44621 12.3971L3.53033 12.4697L8.978 17.917L20.4489 5.49129Z",fill:"black"})))}var ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgCheck);__webpack_require__.p},"./src/stories/Library/Arrows/icon-arrow-ui/icon-arrow-ui-small-right.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>ForwardRef});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgIconArrowUiSmallRight(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=_objectWithoutProperties(_ref,_excluded);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:61,height:9,viewBox:"0 0 61 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{className:"arrow__body",d:"M60 4.5H0",stroke:"currentColor"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{className:"arrow__head",d:"M60.3537 4.85355C60.5489 4.65829 60.5489 4.34171 60.3537 4.14645L57.1717 0.96447C56.9764 0.769208 56.6598 0.769208 56.4646 0.96447C56.2693 1.15973 56.2693 1.47631 56.4646 1.67157L59.293 4.5L56.4646 7.32843C56.2693 7.52369 56.2693 7.84027 56.4646 8.03553C56.6598 8.2308 56.9764 8.2308 57.1717 8.03553L60.3537 4.85355ZM60.0001 4H57.0001V5H60.0001V4Z",fill:"currentColor"})))}var ForwardRef=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SvgIconArrowUiSmallRight);__webpack_require__.p},"./src/stories/Library/counter/Counter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Counter});var _public_icons_collection_Check_svg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./public/icons/collection/Check.svg"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Counter=function Counter(props){var value=props.value,label=props.label,percentage=props.percentage,status=props.status,_props$isReady=props.isReady,isReady=void 0!==_props$isReady&&_props$isReady;var borderProgress="radial-gradient(\n    closest-side,\n    var(--parent-bg-color) calc(100% - 3px),\n    transparent calc(100% - 2px),\n    transparent 0 100%\n  ),\n  conic-gradient(".concat(function getColor(){return"danger"===status?"#d22d43":"warning"===status?"#f7bf42":"info"===status?"#068802":"#484848"}()," ").concat(percentage,"%, #DBDBDB 0)");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{role:"progressbar",style:{background:borderProgress},className:"counter","aria-label":"counter showing time remaining ",children:[isReady?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_public_icons_collection_Check_svg__WEBPACK_IMPORTED_MODULE_0__.h,{className:"counter__icon"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"counter__value",children:value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"counter__label",children:label})]})};try{Counter.displayName="Counter",Counter.__docgenInfo={description:"",displayName:"Counter",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},percentage:{defaultValue:null,description:"",name:"percentage",required:!0,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"info"'},{value:'"danger"'},{value:'"warning"'},{value:'"neutral"'}]}},isReady:{defaultValue:null,description:"",name:"isReady",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/counter/Counter.tsx#Counter"]={docgenInfo:Counter.__docgenInfo,name:"Counter",path:"src/stories/Library/counter/Counter.tsx#Counter"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Library/cover/Cover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>cover_Cover});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CoverImage=function CoverImage(_ref){var src=_ref.src,alt=_ref.alt,animate=_ref.animate,setImageLoaded=_ref.setImageLoaded,shadow=_ref.shadow;return(0,jsx_runtime.jsx)("img",{onError:function handleImgError(e){e.currentTarget.style.display="none"},onLoad:setImageLoaded,className:(0,clsx.A)("cover__img",{"cover__img--animate":animate},{"cover__img--shadow-small":"small"===shadow,"cover__img--shadow-medium":"medium"===shadow}),src,alt:alt||""})};const cover_CoverImage=CoverImage;try{CoverImage.displayName="CoverImage",CoverImage.__docgenInfo={description:"",displayName:"CoverImage",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},animate:{defaultValue:null,description:"",name:"animate",required:!0,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"xsmall"'},{value:'"medium"'},{value:'"xlarge"'}]}},displaySize:{defaultValue:null,description:"",name:"displaySize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"large"'},{value:'"xsmall"'},{value:'"medium"'},{value:'"xlarge"'},{value:'"2xsmall"'}]}},tint:{defaultValue:null,description:"",name:"tint",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"20"'},{value:'"40"'},{value:'"80"'},{value:'"100"'},{value:'"120"'}]}},coverUrl:{defaultValue:null,description:"",name:"coverUrl",required:!1,type:{name:"string | undefined"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string | undefined"}},shadow:{defaultValue:null,description:"",name:"shadow",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'}]}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string | undefined"}},isHiddenFromScreenReaders:{defaultValue:null,description:"",name:"isHiddenFromScreenReaders",required:!1,type:{name:"boolean | undefined"}},setImageLoaded:{defaultValue:null,description:"",name:"setImageLoaded",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/cover/CoverImage.tsx#CoverImage"]={docgenInfo:CoverImage.__docgenInfo,name:"CoverImage",path:"src/stories/Library/cover/CoverImage.tsx#CoverImage"})}catch(__react_docgen_typescript_loader_error){}var helper=__webpack_require__("./src/stories/Library/cover/helper.ts"),Cover=function Cover(_ref){var size=_ref.size,displaySize=_ref.displaySize,animate=_ref.animate,src=_ref.src,tint=_ref.tint,coverUrl=_ref.coverUrl,alt=_ref.alt,shadow=_ref.shadow,_ref$ariaLabel=_ref.ariaLabel,ariaLabel=void 0===_ref$ariaLabel?"Link to the material":_ref$ariaLabel,isHiddenFromScreenReaders=_ref.isHiddenFromScreenReaders,_useState=(0,react.useState)(null),_useState2=(0,slicedToArray.A)(_useState,2),imageLoaded=_useState2[0],_setImageLoaded=_useState2[1],coverDisplaySize=displaySize||size,classes={wrapper:(0,clsx.A)("cover","cover--size-".concat(coverDisplaySize),"cover--aspect-".concat(coverDisplaySize),imageLoaded||helper.KA[tint||"default"])};return coverUrl?(0,jsx_runtime.jsx)("a",{className:classes.wrapper,href:coverUrl,"aria-label":ariaLabel,"aria-labelledby":"cover labelled by",title:"cover title text",tabIndex:isHiddenFromScreenReaders?-1:0,"aria-hidden":isHiddenFromScreenReaders,children:(0,jsx_runtime.jsx)(cover_CoverImage,{setImageLoaded:function setImageLoaded(){return _setImageLoaded(!0)},src,alt,size,animate,tint,shadow})}):(0,jsx_runtime.jsx)("div",{className:classes.wrapper,children:(0,jsx_runtime.jsx)(cover_CoverImage,{setImageLoaded:function setImageLoaded(){return _setImageLoaded(!0)},src,alt,size,animate,tint,shadow})})};const cover_Cover=Cover;try{Cover.displayName="Cover",Cover.__docgenInfo={description:"",displayName:"Cover",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},animate:{defaultValue:null,description:"",name:"animate",required:!0,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"xsmall"'},{value:'"medium"'},{value:'"xlarge"'}]}},displaySize:{defaultValue:null,description:"",name:"displaySize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"large"'},{value:'"xsmall"'},{value:'"medium"'},{value:'"xlarge"'},{value:'"2xsmall"'}]}},tint:{defaultValue:null,description:"",name:"tint",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"20"'},{value:'"40"'},{value:'"80"'},{value:'"100"'},{value:'"120"'}]}},coverUrl:{defaultValue:null,description:"",name:"coverUrl",required:!1,type:{name:"string | undefined"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string | undefined"}},shadow:{defaultValue:null,description:"",name:"shadow",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'}]}},ariaLabel:{defaultValue:{value:"Link to the material"},description:"",name:"ariaLabel",required:!1,type:{name:"string | undefined"}},isHiddenFromScreenReaders:{defaultValue:null,description:"",name:"isHiddenFromScreenReaders",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/cover/Cover.tsx#Cover"]={docgenInfo:Cover.__docgenInfo,name:"Cover",path:"src/stories/Library/cover/Cover.tsx#Cover"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Library/cover/helper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J$:()=>getCoverTint,KA:()=>tintClasses});var tintClasses={default:"bg-identity-tint-120",120:"bg-identity-tint-120",100:"bg-identity-tint-100",80:"bg-identity-tint-80",40:"bg-identity-tint-40",20:"bg-identity-tint-20"},getCoverTint=function getCoverTint(index){var coverTints=["20","40","80","100","120"];return coverTints[index%coverTints.length]}},"./src/stories/Library/status-label/StatusLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>StatusLabel});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),StatusLabel=function StatusLabel(props){var label=props.label,status=props.status,classNames=props.classNames;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"status-label ".concat(function getStatus(){return"danger"===status?"status-label--danger":"warning"===status?"status-label--warning":"info"===status?"status-label--info":"neutral"===status?"status-label--neutral":"outline"===status?"status-label--outline":""}()," ").concat(classNames||""),children:label})};try{StatusLabel.displayName="StatusLabel",StatusLabel.__docgenInfo={description:"",displayName:"StatusLabel",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"info"'},{value:'"danger"'},{value:'"warning"'},{value:'"neutral"'},{value:'"outline"'}]}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/status-label/StatusLabel.tsx#StatusLabel"]={docgenInfo:StatusLabel.__docgenInfo,name:"StatusLabel",path:"src/stories/Library/status-label/StatusLabel.tsx#StatusLabel"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{$:()=>clsx,A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);