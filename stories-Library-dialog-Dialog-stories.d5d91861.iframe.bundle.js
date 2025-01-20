/*! For license information please see stories-Library-dialog-Dialog-stories.d5d91861.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_danskernesdigitalebibliotek_dpl_design_system=self.webpackChunk_danskernesdigitalebibliotek_dpl_design_system||[]).push([[4206],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.A)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen):void 0}}},"./src/stories/Library/dialog/Dialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Dialog_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const dialog_DialogContent=function DialogContent(){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h2",{children:"Dialog Content"}),(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia officia odio temporibus libero a labore sint omnis, autem quibusdam fugit quae, eveniet incidunt vero illo facere aperiam voluptates in. Repellendus!"})]})};var Dialog=__webpack_require__("./src/stories/Library/dialog/Dialog.tsx"),useDialog=__webpack_require__("./src/stories/Library/dialog/useDialog.tsx"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js");const opening_hours_editor_OpeningHoursForm=function OpeningHoursForm(){var openingHoursCategories=[{title:"Åbent",color:"blue"},{title:"Selvbetjening",color:"yellow"},{title:"Med betjening",color:"green"},{title:"Telefontid",color:"grey"},{title:"Borgerservice",color:"orange"},{title:"Børneetagen",color:"lightblue"},{title:"Makerlab",color:"purple"}],_React$useState=react.useState(openingHoursCategories[0]),_React$useState2=(0,slicedToArray.A)(_React$useState,2),category=_React$useState2[0],setCategory=_React$useState2[1],_React$useState3=react.useState("08:00"),_React$useState4=(0,slicedToArray.A)(_React$useState3,2),startTime=_React$useState4[0],setStartTime=_React$useState4[1],_React$useState5=react.useState("16:00"),_React$useState6=(0,slicedToArray.A)(_React$useState5,2),endTime=_React$useState6[0],setEndTime=_React$useState6[1];return(0,jsx_runtime.jsxs)("form",{className:"opening-hours-editor-form",children:[(0,jsx_runtime.jsx)("label",{htmlFor:"event-form-title",className:"opening-hours-editor-form__label",children:"Title:"}),(0,jsx_runtime.jsx)("select",{className:"opening-hours-editor-form__select",id:"event-form-title",value:null==category?void 0:category.title,onChange:function onChange(e){setCategory(openingHoursCategories.find((function(item){return item.title===e.target.value}))||openingHoursCategories[0])},children:openingHoursCategories.map((function(categoryItem){return(0,jsx_runtime.jsx)("option",{value:categoryItem.title,children:categoryItem.title},categoryItem.title)}))}),(0,jsx_runtime.jsx)("label",{htmlFor:"event-form-start-time",className:"opening-hours-editor-form__label",children:"Start Time:"}),(0,jsx_runtime.jsx)("input",{className:"opening-hours-editor-form__time-input",id:"event-form-start-time",type:"time",value:startTime,onChange:function onChange(e){return setStartTime(e.target.value)}}),(0,jsx_runtime.jsx)("label",{htmlFor:"event-form-end-time",className:"opening-hours-editor-form__label",children:"End Time:"}),(0,jsx_runtime.jsx)("input",{className:"opening-hours-editor-form__time-input",id:"event-form-end-time",type:"time",value:endTime,onChange:function onChange(e){return setEndTime(e.target.value)},min:startTime,max:"00:00"}),(0,jsx_runtime.jsx)("button",{className:"opening-hours-editor-form__submit",type:"submit",children:"Submit"})]})};const dialog_DialogPlayGround=function DialogPlayGround(){var _useDialog=(0,useDialog.A)(),dialogContent=_useDialog.dialogContent,openDialogWithContent=_useDialog.openDialogWithContent,closeDialog=_useDialog.closeDialog,dialogRef=_useDialog.dialogRef;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("button",{className:"btn-primary btn-outline btn-medium",onClick:function onClick(){openDialogWithContent((0,jsx_runtime.jsx)(dialog_DialogContent,{}))},children:"Open Dialog 1"}),(0,jsx_runtime.jsx)("button",{className:"btn-primary btn-outline btn-medium",onClick:function onClick(){openDialogWithContent((0,jsx_runtime.jsx)(opening_hours_editor_OpeningHoursForm,{}))},children:"Open Dialog 2 (OpeningHoursForm)"}),(0,jsx_runtime.jsx)(Dialog.A,{closeDialog,ref:dialogRef,children:dialogContent})]})},Dialog_stories={title:"Library / Dialog",component:dialog_DialogPlayGround};var Default=function Template(){return(0,jsx_runtime.jsx)(dialog_DialogPlayGround,{})}.bind({});const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <DialogPlayGround />",...Default.parameters?.docs?.source}}}},"./src/stories/Library/dialog/Dialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Dialog=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref,ref){var children=_ref.children,closeDialog=_ref.closeDialog,isSidebar=_ref.isSidebar;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("dialog",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__.A)("dialog",isSidebar&&"dialog--sidebar"),ref,onClick:function onClick(_ref2){_ref2.currentTarget===_ref2.target&&closeDialog()},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{type:"button",onClick:closeDialog,className:"dialog__close-button","aria-label":"Close dialog",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:"/icons/basic/icon-cross.svg",alt:""})}),children]})}));const __WEBPACK_DEFAULT_EXPORT__=Dialog;try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{closeDialog:{defaultValue:null,description:"",name:"closeDialog",required:!0,type:{name:"() => void"}},isSidebar:{defaultValue:null,description:"",name:"isSidebar",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/dialog/Dialog.tsx#Dialog"]={docgenInfo:Dialog.__docgenInfo,name:"Dialog",path:"src/stories/Library/dialog/Dialog.tsx#Dialog"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Library/dialog/useDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_dpl_design_system_dpl_design_system_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useDialog=function useDialog(){var onClose=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).onClose,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),_useState2=(0,_home_runner_work_dpl_design_system_dpl_design_system_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.A)(_useState,2),dialogContent=_useState2[0],setDialogContent=_useState2[1],dialogRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return{dialogContent,dialogRef,openDialogWithContent:function openDialogWithContent(content){var _dialogRef$current;setDialogContent(content),null===(_dialogRef$current=dialogRef.current)||void 0===_dialogRef$current||_dialogRef$current.showModal()},closeDialog:function closeDialog(){dialogRef.current&&(onClose&&onClose(),dialogRef.current.close())}}};const __WEBPACK_DEFAULT_EXPORT__=useDialog;try{useDialog.displayName="useDialog",useDialog.__docgenInfo={description:"",displayName:"useDialog",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/dialog/useDialog.tsx#useDialog"]={docgenInfo:useDialog.__docgenInfo,name:"useDialog",path:"src/stories/Library/dialog/useDialog.tsx#useDialog"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{$:()=>clsx,A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);