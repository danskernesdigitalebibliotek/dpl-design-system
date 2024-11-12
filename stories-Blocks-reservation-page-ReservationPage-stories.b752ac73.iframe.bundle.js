"use strict";(self.webpackChunk_danskernesdigitalebibliotek_dpl_design_system=self.webpackChunk_danskernesdigitalebibliotek_dpl_design_system||[]).push([[2236],{"./src/stories/Blocks/reservation-page/ReservationPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoPhysicalReservations:()=>NoPhysicalReservations,NoReadyForPickup:()=>NoReadyForPickup,NoReservationsAtAll:()=>NoReservationsAtAll,SkeletonVersion:()=>SkeletonVersion,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReservationPage_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),ResultPager=__webpack_require__("./src/stories/Library/card-list-page/ResultPager.tsx"),PauseReservation=__webpack_require__("./src/stories/Library/pause-reservation/PauseReservation.tsx"),ReservationListEmptyState=__webpack_require__("./src/stories/Blocks/reservation-page/ReservationListEmptyState.tsx"),ReservationListItem=__webpack_require__("./src/stories/Blocks/reservation-page/ReservationListItem.tsx"),ReservationListItemSkeleton=__webpack_require__("./src/stories/Blocks/reservation-page/ReservationListItemSkeleton.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ReservationPageSkeleton=function ReservationPageSkeleton(){return(0,jsx_runtime.jsxs)("section",{className:"reservation-list-page ssc",children:[(0,jsx_runtime.jsx)("div",{className:"ssc-head-line w-60 mx-32 my-48"}),(0,jsx_runtime.jsx)("div",{className:"ssc-square w-90 ml-32 my-32"}),(0,jsx_runtime.jsx)("div",{className:"ssc-head-line w-10 mx-32 mt-48"}),(0,jsx_runtime.jsx)(ReservationListItemSkeleton.A,{}),(0,jsx_runtime.jsx)(ReservationListItemSkeleton.A,{}),(0,jsx_runtime.jsx)("div",{className:"ssc-head-line w-10 mx-32 mt-80"}),(0,jsx_runtime.jsx)(ReservationListItemSkeleton.A,{}),(0,jsx_runtime.jsx)(ReservationListItemSkeleton.A,{}),(0,jsx_runtime.jsx)("div",{className:"ssc-head-line w-10 mx-32 mt-80"}),(0,jsx_runtime.jsx)(ReservationListItemSkeleton.A,{}),(0,jsx_runtime.jsx)(ReservationListItemSkeleton.A,{})]})};const reservation_page_ReservationPageSkeleton=ReservationPageSkeleton;try{ReservationPageSkeleton.displayName="ReservationPageSkeleton",ReservationPageSkeleton.__docgenInfo={description:"",displayName:"ReservationPageSkeleton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Blocks/reservation-page/ReservationPageSkeleton.tsx#ReservationPageSkeleton"]={docgenInfo:ReservationPageSkeleton.__docgenInfo,name:"ReservationPageSkeleton",path:"src/stories/Blocks/reservation-page/ReservationPageSkeleton.tsx#ReservationPageSkeleton"})}catch(__react_docgen_typescript_loader_error){}var ReservationPage=function ReservationPage(_ref){var headline=_ref.headline,readyForPickup=_ref.readyForPickup,physicalReservations=_ref.physicalReservations,digitalReservations=_ref.digitalReservations;return _ref.skeletonVersion?(0,jsx_runtime.jsx)(reservation_page_ReservationPageSkeleton,{}):readyForPickup||physicalReservations||digitalReservations?(0,jsx_runtime.jsxs)("div",{className:"reservation-list-page",children:[(0,jsx_runtime.jsx)("h1",{className:"text-header-h1 m-32",children:headline}),(0,jsx_runtime.jsx)(PauseReservation.H,{isPausedtext:"Reservations are paused",pauseText:"Pause your reservations",classNames:"m-32"}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:"dpl-list-buttons m-32",children:(0,jsx_runtime.jsxs)("h2",{"data-cy":"reservation-list-header",className:"dpl-list-buttons__header",children:["Ready for pickup",(0,jsx_runtime.jsx)("div",{className:"dpl-list-buttons__power",children:readyForPickup})]})}),!!readyForPickup&&(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("ul",{className:"list-reservation-container",children:(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(ReservationListItem.A,{amount:readyForPickup})})}),(0,jsx_runtime.jsx)(ResultPager.A,{currentResults:readyForPickup,totalResults:readyForPickup})]}),!readyForPickup&&(0,jsx_runtime.jsx)(ReservationListEmptyState.A,{text:"At the moment you have 0 reservations ready for pickup"})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:"dpl-list-buttons m-32",children:(0,jsx_runtime.jsxs)("h2",{"data-cy":"reservation-list-header",className:"dpl-list-buttons__header",children:["Physical reservations",(0,jsx_runtime.jsx)("div",{className:"dpl-list-buttons__power",children:physicalReservations})]})}),!!physicalReservations&&(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("ul",{className:"list-reservation-container",children:(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(ReservationListItem.A,{amount:physicalReservations})})}),(0,jsx_runtime.jsx)(ResultPager.A,{currentResults:physicalReservations,totalResults:physicalReservations})]}),!physicalReservations&&(0,jsx_runtime.jsx)(ReservationListEmptyState.A,{text:"At the moment you have 0 physical reservations"})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:"dpl-list-buttons m-32",children:(0,jsx_runtime.jsxs)("h2",{"data-cy":"reservation-list-header",className:"dpl-list-buttons__header",children:["Digital reservations",(0,jsx_runtime.jsx)("div",{className:"dpl-list-buttons__power",children:digitalReservations})]})}),!!digitalReservations&&(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("ul",{className:"list-reservation-container",children:(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(ReservationListItem.A,{amount:digitalReservations})})}),(0,jsx_runtime.jsx)(ResultPager.A,{currentResults:digitalReservations,totalResults:digitalReservations+1})]}),!digitalReservations&&(0,jsx_runtime.jsx)(ReservationListEmptyState.A,{text:"At the moment you have 0 digital reservations"})]})]}):(0,jsx_runtime.jsxs)("div",{className:"reservation-list-page",children:[(0,jsx_runtime.jsx)("h1",{className:"text-header-h1 m-32",children:headline}),(0,jsx_runtime.jsx)(ReservationListEmptyState.A,{text:"At the moment you have 0 reservations",classsNames:"mt-64"})]})};const reservation_page_ReservationPage=ReservationPage;try{ReservationPage.displayName="ReservationPage",ReservationPage.__docgenInfo={description:"",displayName:"ReservationPage",props:{headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},readyForPickup:{defaultValue:null,description:"",name:"readyForPickup",required:!0,type:{name:"number"}},physicalReservations:{defaultValue:null,description:"",name:"physicalReservations",required:!0,type:{name:"number"}},digitalReservations:{defaultValue:null,description:"",name:"digitalReservations",required:!0,type:{name:"number"}},skeletonVersion:{defaultValue:null,description:"",name:"skeletonVersion",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Blocks/reservation-page/ReservationPage.tsx#ReservationPage"]={docgenInfo:ReservationPage.__docgenInfo,name:"ReservationPage",path:"src/stories/Blocks/reservation-page/ReservationPage.tsx#ReservationPage"})}catch(__react_docgen_typescript_loader_error){}const ReservationPage_stories={title:"Blocks / Reservation / Reservation Page",component:reservation_page_ReservationPage,argTypes:{headline:{name:"Headline",control:{type:"text"}},readyForPickup:{name:"Ready for pickup amount",control:{type:"number"}},physicalReservations:{name:"Physical reservations amount",control:{type:"number"}},digitalReservations:{name:"Digital reservations amount",control:{type:"number"}},skeletonVersion:{name:"Is skeleton version?",control:{type:"boolean"}}},args:{headline:"Your reservations",readyForPickup:2,physicalReservations:2,digitalReservations:2,skeletonVersion:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=8513%3A85811&mode=design&t=nde0qiy8WvxnX8im-1"}}};var Template=function Template(args){return(0,jsx_runtime.jsx)(reservation_page_ReservationPage,(0,objectSpread2.A)({},args))},Default=Template.bind({}),NoReadyForPickup=Template.bind({});NoReadyForPickup.args={readyForPickup:0};var NoPhysicalReservations=Template.bind({});NoPhysicalReservations.args={physicalReservations:0};var NoReservationsAtAll=Template.bind({});NoReservationsAtAll.args={readyForPickup:0,physicalReservations:0,digitalReservations:0};var SkeletonVersion=Template.bind({});SkeletonVersion.args={skeletonVersion:!0};const __namedExportsOrder=["Default","NoReadyForPickup","NoPhysicalReservations","NoReservationsAtAll","SkeletonVersion"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: ReservationPageProps) => <ReservationPage {...args} />",...Default.parameters?.docs?.source}}},NoReadyForPickup.parameters={...NoReadyForPickup.parameters,docs:{...NoReadyForPickup.parameters?.docs,source:{originalSource:"(args: ReservationPageProps) => <ReservationPage {...args} />",...NoReadyForPickup.parameters?.docs?.source}}},NoPhysicalReservations.parameters={...NoPhysicalReservations.parameters,docs:{...NoPhysicalReservations.parameters?.docs,source:{originalSource:"(args: ReservationPageProps) => <ReservationPage {...args} />",...NoPhysicalReservations.parameters?.docs?.source}}},NoReservationsAtAll.parameters={...NoReservationsAtAll.parameters,docs:{...NoReservationsAtAll.parameters?.docs,source:{originalSource:"(args: ReservationPageProps) => <ReservationPage {...args} />",...NoReservationsAtAll.parameters?.docs?.source}}},SkeletonVersion.parameters={...SkeletonVersion.parameters,docs:{...SkeletonVersion.parameters?.docs,source:{originalSource:"(args: ReservationPageProps) => <ReservationPage {...args} />",...SkeletonVersion.parameters?.docs?.source}}}},"./src/stories/Library/pause-reservation/PauseReservation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>PauseReservation});var _path,react=__webpack_require__("./node_modules/react/index.js"),_excluded=["title","titleId"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgReservations(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=_objectWithoutProperties(_ref,_excluded);return react.createElement("svg",_extends({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_path||(_path=react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 2.59388C4.11357 2.59388 4.22673 2.60493 4.33789 2.62681L4.50295 2.66771L9.92681 4.29519C9.95805 4.30456 9.99066 4.30769 10.0228 4.30457L10.0705 4.2952L15.4972 2.6675C16.423 2.38983 17.3986 2.9152 17.6762 3.84096C17.7088 3.94969 17.7308 4.06122 17.7417 4.17394L17.75 4.34372L17.7507 6.93169C20.2787 8.27599 22 10.9369 22 13.9998C22 18.418 18.4183 21.9998 14 21.9998C10.5387 21.9998 7.59085 19.8016 6.47622 16.7251L3.49741 15.8319C2.80641 15.6247 2.31864 15.0173 2.25668 14.3089L2.25 14.1556V4.34388C2.25 3.37738 3.0335 2.59388 4 2.59388ZM14 7.49977C10.4101 7.49977 7.5 10.4099 7.5 13.9998C7.5 17.5896 10.4101 20.4998 14 20.4998C17.5899 20.4998 20.5 17.5896 20.5 13.9998C20.5 10.4099 17.5899 7.49977 14 7.49977ZM15.985 4.09412L15.9282 4.10426L10.5014 5.73196C10.2281 5.81395 9.93968 5.8276 9.66132 5.77292L9.49571 5.73191L4.07185 4.10442C4.04854 4.09743 4.02434 4.09388 4 4.09388C3.88165 4.09388 3.78251 4.17611 3.7566 4.28655L3.75 4.34388V14.1556C3.75 14.2439 3.79636 14.3239 3.86905 14.3686L3.9282 14.3951L6.06647 15.0358C6.02262 14.6967 6 14.3509 6 13.9998C6 9.58149 9.58172 5.99977 14 5.99977C14.7814 5.99977 15.5365 6.11178 16.2504 6.32063L16.25 4.34372C16.25 4.3194 16.2464 4.2952 16.2395 4.2719C16.2055 4.15854 16.0982 4.08721 15.985 4.09412ZM14 10.2498C14.3797 10.2498 14.6935 10.5319 14.7432 10.898L14.75 10.9998V13.2493L18 13.2498C18.4142 13.2498 18.75 13.5856 18.75 13.9998C18.75 14.3795 18.4678 14.6933 18.1018 14.7429L18 14.7498H14C13.5858 14.7498 13.25 14.414 13.25 13.9998V10.9998C13.25 10.5856 13.5858 10.2498 14 10.2498Z",fill:"black"})))}var ForwardRef=react.forwardRef(SvgReservations);__webpack_require__.p;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),PauseReservation=function PauseReservation(_ref){var isChecked=_ref.isChecked,pauseText=_ref.pauseText,isPausedtext=_ref.isPausedtext,dates=_ref.dates,classNames=_ref.classNames;return(0,jsx_runtime.jsxs)("div",{className:"dpl-pause-reservation-component ".concat(classNames),children:[(0,jsx_runtime.jsx)("div",{className:"dpl-pause-reservation-component__pagefold"}),(0,jsx_runtime.jsxs)("div",{className:"dpl-pause-reservation-component__flex",children:[(0,jsx_runtime.jsx)("div",{className:"dpl-pause-reservation-component__flex__reservation-icon",children:(0,jsx_runtime.jsx)(ForwardRef,{})}),(0,jsx_runtime.jsx)("div",{className:"dpl-pause-reservation-component__flex__text",children:isChecked?isPausedtext:pauseText}),isChecked&&dates&&(0,jsx_runtime.jsx)("span",{"aria-label":"Reservationer er sat på pause i følgende periode",className:"dpl-pause-reservation-component__flex__badge",children:dates}),(0,jsx_runtime.jsx)("div",{className:"dpl-pause-reservation-component__flex__button",children:(0,jsx_runtime.jsx)("button",{type:"button",className:"btn-primary btn-filled btn-small",children:"Settings"})})]})]})};try{PauseReservation.displayName="PauseReservation",PauseReservation.__docgenInfo={description:"",displayName:"PauseReservation",props:{isChecked:{defaultValue:null,description:"",name:"isChecked",required:!1,type:{name:"boolean | undefined"}},isPausedtext:{defaultValue:null,description:"",name:"isPausedtext",required:!0,type:{name:"string"}},pauseText:{defaultValue:null,description:"",name:"pauseText",required:!0,type:{name:"string"}},dates:{defaultValue:null,description:"",name:"dates",required:!1,type:{name:"string | undefined"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Library/pause-reservation/PauseReservation.tsx#PauseReservation"]={docgenInfo:PauseReservation.__docgenInfo,name:"PauseReservation",path:"src/stories/Library/pause-reservation/PauseReservation.tsx#PauseReservation"})}catch(__react_docgen_typescript_loader_error){}}}]);