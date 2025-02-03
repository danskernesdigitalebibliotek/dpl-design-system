try{
(()=>{var si=Object.defineProperty;var ni=(e,t)=>{for(var r in t)si(e,r,{get:t[r],enumerable:!0})};var j={NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."};var ce={};ni(ce,{Children:()=>di,Component:()=>Oe,Fragment:()=>w,Profiler:()=>ci,PureComponent:()=>hi,StrictMode:()=>ui,Suspense:()=>Le,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>pi,cloneElement:()=>gi,createContext:()=>fi,createElement:()=>vi,createFactory:()=>mi,createRef:()=>yi,default:()=>li,forwardRef:()=>bi,isValidElement:()=>$i,lazy:()=>He,memo:()=>wi,startTransition:()=>xi,unstable_act:()=>_i,useCallback:()=>k,useContext:()=>Si,useDebugValue:()=>Ei,useDeferredValue:()=>ki,useEffect:()=>M,useId:()=>Ai,useImperativeHandle:()=>Ci,useInsertionEffect:()=>Ti,useLayoutEffect:()=>Mi,useMemo:()=>W,useReducer:()=>Pi,useRef:()=>Bi,useState:()=>A,useSyncExternalStore:()=>Ni,useTransition:()=>Ri,version:()=>Oi});var li=__REACT__,{Children:di,Component:Oe,Fragment:w,Profiler:ci,PureComponent:hi,StrictMode:ui,Suspense:Le,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:pi,cloneElement:gi,createContext:fi,createElement:vi,createFactory:mi,createRef:yi,forwardRef:bi,isValidElement:$i,lazy:He,memo:wi,startTransition:xi,unstable_act:_i,useCallback:k,useContext:Si,useDebugValue:Ei,useDeferredValue:ki,useEffect:M,useId:Ai,useImperativeHandle:Ci,useInsertionEffect:Ti,useLayoutEffect:Mi,useMemo:W,useReducer:Pi,useRef:Bi,useState:A,useSyncExternalStore:Ni,useTransition:Ri,version:Oi}=__REACT__;var Fo=__STORYBOOK_THEMING__,{CacheProvider:Wo,ClassNames:Yo,Global:Zo,ThemeProvider:Xo,background:Ko,color:Go,convert:qo,create:Jo,createCache:Qo,createGlobal:es,createReset:ts,css:C,darken:rs,ensure:is,ignoreSsrWarning:os,isPropValid:ss,jsx:u,keyframes:ns,lighten:as,styled:ls,themes:ds,typography:cs,useTheme:hs,withTheme:us}=__STORYBOOK_THEMING__;var ms=__STORYBOOK_COMPONENTS__,{A:ys,ActionBar:bs,AddonPanel:Ct,Badge:$s,Bar:ws,Blockquote:xs,Button:_s,ClipboardCode:Ss,Code:Es,DL:ks,Div:As,DocumentWrapper:Cs,EmptyTabContent:Ts,ErrorFormatter:Ms,FlexBar:Tt,Form:Ps,H1:Bs,H2:Ns,H3:Rs,H4:Os,H5:Ls,H6:Hs,HR:zs,IconButton:he,IconButtonSkeleton:js,Icons:ue,Img:Is,LI:Us,Link:ee,ListItem:Ds,Loader:Vs,Modal:Fs,OL:Ws,P:Ys,Placeholder:N,Pre:Zs,ProgressSpinner:Xs,ResetWrapper:Ks,ScrollArea:Gs,Separator:Mt,Spaced:qs,Span:Js,StorybookIcon:Qs,StorybookLogo:en,Symbols:tn,SyntaxHighlighter:rn,TT:on,TabBar:sn,TabButton:nn,TabWrapper:an,Table:ln,Tabs:Pt,TabsState:dn,TooltipLinkList:cn,TooltipMessage:hn,TooltipNote:un,UL:pn,WithTooltip:gn,WithTooltipPure:fn,Zoom:vn,codeCommon:mn,components:yn,createCopyToClipboardFunction:bn,getStoryHref:$n,icons:wn,interleaveSeparators:xn,nameSpaceClassNames:_n,resetComponents:Sn,withReset:En}=__STORYBOOK_COMPONENTS__;var Mn=__STORYBOOK_API__,{ActiveTabs:Pn,Consumer:Bn,ManagerContext:Nn,Provider:Rn,RequestResponseError:On,addons:pe,combineParameters:Ln,controlOrMetaKey:Hn,controlOrMetaSymbol:zn,eventMatchesShortcut:jn,eventToShortcut:In,experimental_requestResponse:Un,isMacLike:Dn,isShortcutTaken:Vn,keyToSymbol:Fn,merge:Wn,mockChannel:Yn,optionOrAltSymbol:Zn,shortcutMatchesShortcut:Xn,shortcutToHumanString:Kn,types:ze,useAddonState:Gn,useArgTypes:qn,useArgs:Jn,useChannel:Qn,useGlobalTypes:ea,useGlobals:ta,useParameter:je,useSharedState:ra,useStoryPrepared:ia,useStorybookApi:oa,useStorybookState:Bt}=__STORYBOOK_API__;var Li=Object.defineProperty,v=(e,t)=>()=>(e&&(t=e(e=0)),t),Hi=(e,t)=>{for(var r in t)Li(e,r,{get:t[r],enumerable:!0})},Be,Nt,Rt,Ot,St=v(()=>{Be=({config:e,defer:t=!1})=>{let[r,i]=A(t?void 0:e.url),[o,s]=A(!1);return M(()=>{if(!t)return;let a=requestAnimationFrame(()=>{i(e.url)});return()=>cancelAnimationFrame(a)},[t,e.url]),M(()=>{s(!1)},[r]),u("div",{css:Nt},!o&&u(N,{css:Rt},"Loading..."),u("iframe",{css:Ot,src:r,allowFullScreen:e.allowFullscreen,onLoad:()=>s(!0)}))},Nt=C`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`,Rt=C`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`,Ot=C`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`}),ft,Lt,vr,mr=v(()=>{St(),ft=/https:\/\/[\w.-]+\.?figma.com\/([\w-]+)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/,Lt=e=>ft.test(e),vr=({config:e})=>{let t=W(()=>Lt(e.url)?{url:`https://www.figma.com/embed?embed_host=${e.embedHost||location.hostname}&url=${e.url}`,allowFullscreen:e.allowFullscreen}:(console.warn(`[storybook-addon-designs] The URL you specified is not valid Figma URL.
The addon fallbacks to normal iframe mode.For more detail, please check <https://www.figma.com/developers/embed>.`),e),[e.url,e.allowFullscreen,e.embedHost]);return u(Be,{defer:!0,config:t})}}),te,ge,fe,Ie,Ue,Ht,z,yr,vt,zt=v(()=>{te=window,ge=te.ShadowRoot&&(te.ShadyCSS===void 0||te.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fe=Symbol(),Ie=new WeakMap,Ue=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ge&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=Ie.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ie.set(t,e))}return e}toString(){return this.cssText}},Ht=e=>new Ue(typeof e=="string"?e:e+"",void 0,fe),z=(e,...t)=>{let r=e.length===1?e[0]:t.reduce((i,o,s)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new Ue(r,e,fe)},yr=(e,t)=>{ge?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{let i=document.createElement("style"),o=te.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=r.cssText,e.appendChild(i)})},vt=ge?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(let i of t.cssRules)r+=i.cssText;return Ht(r)})(e):e}),De,re,Ve,jt,It,ve,Fe,me,ye,D,mt=v(()=>{zt(),zt(),re=window,Ve=re.trustedTypes,jt=Ve?Ve.emptyScript:"",It=re.reactiveElementPolyfillSupport,ve={toAttribute(e,t){switch(t){case Boolean:e=e?jt:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Fe=(e,t)=>t!==e&&(t==t||e==e),me={attribute:!0,type:String,converter:ve,reflect:!1,hasChanged:Fe},ye="finalized",D=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,r)=>{let i=this._$Ep(r,t);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,t=me){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){let o=this[e];this[t]=i,this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||me}static finalize(){if(this.hasOwnProperty(ye))return!1;this[ye]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of r)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)t.unshift(vt(i))}else e!==void 0&&t.push(vt(e));return t}static _$Ep(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return yr(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=me){var i;let o=this.constructor._$Ep(e,r);if(o!==void 0&&r.reflect===!0){let s=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:ve).toAttribute(t,r.type);this._$El=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(e,t){var r;let i=this.constructor,o=i._$Ev.get(e);if(o!==void 0&&this._$El!==o){let s=i.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?s.converter:ve;this._$El=o,this[o]=a.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Fe)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(r)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}},D[ye]=!0,D.elementProperties=new Map,D.elementStyles=[],D.shadowRootOptions={mode:"open"},It?.({ReactiveElement:D}),((De=re.reactiveElementVersions)!==null&&De!==void 0?De:re.reactiveElementVersions=[]).push("1.6.3")});function Ut(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return yt!==void 0?yt.createHTML(t):t}function K(e,t,r=e,i){var o,s,a,l;if(t===H)return t;let n=i!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[i]:r._$Cl,c=G(t)?void 0:t._$litDirective$;return n?.constructor!==c&&((s=n?._$AO)===null||s===void 0||s.call(n,!1),c===void 0?n=void 0:(n=new c(e),n._$AT(e,r,i)),i!==void 0?((a=(l=r)._$Co)!==null&&a!==void 0?a:l._$Co=[])[i]=n:r._$Cl=n),n!==void 0&&(t=K(e,n._$AS(e,t.values),n,i)),t}var We,ie,I,yt,be,P,Ye,Dt,R,Y,G,Ze,Vt,$e,Z,Xe,Ke,O,Ge,qe,Je,Qe,b,S,H,$,et,L,Ft,we,Wt,xe,oe,Yt,Zt,Xt,Kt,Gt,qt,br,Me=v(()=>{ie=window,I=ie.trustedTypes,yt=I?I.createPolicy("lit-html",{createHTML:e=>e}):void 0,be="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,Ye="?"+P,Dt=`<${Ye}>`,R=document,Y=()=>R.createComment(""),G=e=>e===null||typeof e!="object"&&typeof e!="function",Ze=Array.isArray,Vt=e=>Ze(e)||typeof e?.[Symbol.iterator]=="function",$e=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xe=/-->/g,Ke=/>/g,O=RegExp(`>|${$e}(?:([^\\s"'>=/]+)(${$e}*=${$e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ge=/'/g,qe=/"/g,Je=/^(?:script|style|textarea|title)$/i,Qe=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),b=Qe(1),S=Qe(2),H=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),et=new WeakMap,L=R.createTreeWalker(R,129,null,!1),Ft=(e,t)=>{let r=e.length-1,i=[],o,s=t===2?"<svg>":"",a=Z;for(let l=0;l<r;l++){let n=e[l],c,d,h=-1,p=0;for(;p<n.length&&(a.lastIndex=p,d=a.exec(n),d!==null);)p=a.lastIndex,a===Z?d[1]==="!--"?a=Xe:d[1]!==void 0?a=Ke:d[2]!==void 0?(Je.test(d[2])&&(o=RegExp("</"+d[2],"g")),a=O):d[3]!==void 0&&(a=O):a===O?d[0]===">"?(a=o??Z,h=-1):d[1]===void 0?h=-2:(h=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?O:d[3]==='"'?qe:Ge):a===qe||a===Ge?a=O:a===Xe||a===Ke?a=Z:(a=O,o=void 0);let g=a===O&&e[l+1].startsWith("/>")?" ":"";s+=a===Z?n+Dt:h>=0?(i.push(c),n.slice(0,h)+be+n.slice(h)+P+g):n+P+(h===-2?(i.push(void 0),l):g)}return[Ut(e,s+(e[r]||"<?>")+(t===2?"</svg>":"")),i]},we=class $r{constructor({strings:t,_$litType$:r},i){let o;this.parts=[];let s=0,a=0,l=t.length-1,n=this.parts,[c,d]=Ft(t,r);if(this.el=$r.createElement(c,i),L.currentNode=this.el.content,r===2){let h=this.el.content,p=h.firstChild;p.remove(),h.append(...p.childNodes)}for(;(o=L.nextNode())!==null&&n.length<l;){if(o.nodeType===1){if(o.hasAttributes()){let h=[];for(let p of o.getAttributeNames())if(p.endsWith(be)||p.startsWith(P)){let g=d[a++];if(h.push(p),g!==void 0){let f=o.getAttribute(g.toLowerCase()+be).split(P),m=/([.?@])?(.*)/.exec(g);n.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?Yt:m[1]==="?"?Xt:m[1]==="@"?Kt:oe})}else n.push({type:6,index:s})}for(let p of h)o.removeAttribute(p)}if(Je.test(o.tagName)){let h=o.textContent.split(P),p=h.length-1;if(p>0){o.textContent=I?I.emptyScript:"";for(let g=0;g<p;g++)o.append(h[g],Y()),L.nextNode(),n.push({type:2,index:++s});o.append(h[p],Y())}}}else if(o.nodeType===8)if(o.data===Ye)n.push({type:2,index:s});else{let h=-1;for(;(h=o.data.indexOf(P,h+1))!==-1;)n.push({type:7,index:s}),h+=P.length-1}s++}}static createElement(t,r){let i=R.createElement("template");return i.innerHTML=t,i}},Wt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:r},parts:i}=this._$AD,o=((t=e?.creationScope)!==null&&t!==void 0?t:R).importNode(r,!0);L.currentNode=o;let s=L.nextNode(),a=0,l=0,n=i[0];for(;n!==void 0;){if(a===n.index){let c;n.type===2?c=new xe(s,s.nextSibling,this,e):n.type===1?c=new n.ctor(s,n.name,n.strings,this,e):n.type===6&&(c=new Gt(s,this,e)),this._$AV.push(c),n=i[++l]}a!==n?.index&&(s=L.nextNode(),a++)}return L.currentNode=R,o}v(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},xe=class wr{constructor(t,r,i,o){var s;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=o,this._$Cp=(s=o?.isConnected)===null||s===void 0||s}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode,r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=K(this,t,r),G(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==H&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Vt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==$&&G(this._$AH)?this._$AA.nextSibling.data=t:this.$(R.createTextNode(t)),this._$AH=t}g(t){var r;let{values:i,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=we.createElement(Ut(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.v(i);else{let a=new Wt(s,this),l=a.u(this.options);a.v(i),this.$(l),this._$AH=a}}_$AC(t){let r=et.get(t.strings);return r===void 0&&et.set(t.strings,r=new we(t)),r}T(t){Ze(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,i,o=0;for(let s of t)o===r.length?r.push(i=new wr(this.k(Y()),this.k(Y()),this,this.options)):i=r[o],i._$AI(s),o++;o<r.length&&(this._$AR(i&&i._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,r);t&&t!==this._$AB;){let o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}},oe=class{constructor(e,t,r,i,o){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){let o=this.strings,s=!1;if(o===void 0)e=K(this,e,t,0),s=!G(e)||e!==this._$AH&&e!==H,s&&(this._$AH=e);else{let a=e,l,n;for(e=o[0],l=0;l<o.length-1;l++)n=K(this,a[r+l],t,l),n===H&&(n=this._$AH[l]),s||(s=!G(n)||n!==this._$AH[l]),n===$?e=$:e!==$&&(e+=(n??"")+o[l+1]),this._$AH[l]=n}s&&!i&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Yt=class extends oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}},Zt=I?I.emptyScript:"",Xt=class extends oe{constructor(){super(...arguments),this.type=4}j(e){e&&e!==$?this.element.setAttribute(this.name,Zt):this.element.removeAttribute(this.name)}},Kt=class extends oe{constructor(e,t,r,i,o){super(e,t,r,i,o),this.type=5}_$AI(e,t=this){var r;if((e=(r=K(this,e,t,0))!==null&&r!==void 0?r:$)===H)return;let i=this._$AH,o=e===$&&i!==$||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==$&&(i===$||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Gt=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}},qt=ie.litHtmlPolyfillSupport,qt?.(we,xe),((We=ie.litHtmlVersions)!==null&&We!==void 0?We:ie.litHtmlVersions=[]).push("2.8.0"),br=(e,t,r)=>{var i,o;let s=(i=r?.renderBefore)!==null&&i!==void 0?i:t,a=s._$litPart$;if(a===void 0){let l=(o=r?.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=a=new xe(t.insertBefore(Y(),l),l,void 0,r??{})}return a._$AI(e),a}}),tt,rt,V,Jt,zi=v(()=>{mt(),mt(),Me(),Me(),V=class extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=br(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return H}},V.finalized=!0,V._$litElement$=!0,(tt=globalThis.litElementHydrateSupport)===null||tt===void 0||tt.call(globalThis,{LitElement:V}),Jt=globalThis.litElementPolyfillSupport,Jt?.({LitElement:V}),((rt=globalThis.litElementVersions)!==null&&rt!==void 0?rt:globalThis.litElementVersions=[]).push("3.3.3")}),ji=v(()=>{}),B=v(()=>{mt(),Me(),zi(),ji()}),Ii=v(()=>{});function E(e){return(t,r)=>r!==void 0?_r(e,t,r):xr(e,t)}var xr,_r,Sr=v(()=>{xr=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},_r=(e,t,r)=>{t.constructor.createProperty(r,e)}}),Ui=v(()=>{Sr()}),q=v(()=>{}),Di=v(()=>{q()}),Vi=v(()=>{q()}),Fi=v(()=>{q()}),Wi=v(()=>{q()}),it,Er=v(()=>{q(),((it=window.HTMLSlotElement)===null||it===void 0?void 0:it.prototype.assignedElements)!=null}),Yi=v(()=>{q(),Er()}),de=v(()=>{Ii(),Sr(),Ui(),Di(),Vi(),Fi(),Wi(),Er(),Yi()}),F,kr,Et=v(()=>{B(),F=({title:e,children:t})=>b`
  <div class="error-background">
    <div class="error-container">
      <span class="error-title"
        ><span class="error-badge">Error</span>${e}</span
      >
      <span class="error-description">${t}</span>
    </div>
  </div>
`,kr=z`
  .error-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: var(--error-bg);
    color: var(--error-fg);
  }

  .error-container {
    max-width: 800px;
    margin: auto;
    padding: 1em;
  }

  .error-badge {
    display: inline-block;
    font-size: 0.8em;
    padding: 0.2em 0.5em;
    margin-inline-end: 0.5em;

    background: var(--error-color);
    border-radius: 2px;
    color: var(--error-bg);
    text-transform: uppercase;
  }

  .error-title {
    display: block;
    font-size: 1.2em;

    font-weight: bold;
    text-transform: capitalize;
  }

  .error-description {
    display: block;
    margin-block-start: 1em;
  }
`}),Ar,Cr,Tr,Zi=v(()=>{Ar={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Cr=e=>(...t)=>({_$litDirective$:e,values:t}),Tr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}}),ot,Qt,le,Xi=v(()=>{Me(),Zi(),ot="important",Qt=" !"+ot,le=Cr(class extends Tr{constructor(e){var t;if(super(e),e.type!==Ar.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{let i=e[r];return i==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){let{style:r}=e.element;if(this.ht===void 0){this.ht=new Set;for(let i in t)this.ht.add(i);return this.render(t)}this.ht.forEach(i=>{t[i]==null&&(this.ht.delete(i),i.includes("-")?r.removeProperty(i):r[i]="")});for(let i in t){let o=t[i];if(o!=null){this.ht.add(i);let s=typeof o=="string"&&o.endsWith(Qt);i.includes("-")||s?r.setProperty(i,s?o.slice(0,-11):o,s?ot:""):r[i]=o}}return H}})}),kt=v(()=>{Xi()});function er(e){return{top:e.y,right:e.x+e.width,bottom:e.y+e.height,left:e.x}}function Ki(e,t){let r=er(e),i=er(t),o=!(r.top>i.bottom||r.bottom<i.top),s=!(r.left>i.right||r.right<i.left);if(s&&o){let c={x:(Math.max(r.left,i.left)+Math.min(r.right,i.right))/2,y:(Math.max(r.top,i.top)+Math.min(r.bottom,i.bottom))/2};return[{points:[{x:r.left,y:c.y},{x:i.left,y:c.y}]},{points:[{x:r.right,y:c.y},{x:i.right,y:c.y}]},{points:[{y:r.top,x:c.x},{y:i.top,x:c.x}]},{points:[{y:r.bottom,x:c.x},{y:i.bottom,x:c.x}]}]}let a=r.left>i.right,l=r.top>i.bottom,n={x:e.x+e.width/2,y:e.y+e.height/2};return[s?null:{points:[{x:a?r.left:r.right,y:n.y},{x:a?i.right:i.left,y:n.y}],bisector:o?void 0:[{x:a?i.right:i.left,y:n.y},{x:a?i.right:i.left,y:l?i.bottom:i.top}]},o?null:{points:[{y:l?r.top:r.bottom,x:n.x},{y:l?i.bottom:i.top,x:n.x}],bisector:s?void 0:[{y:l?i.bottom:i.top,x:n.x},{y:l?i.bottom:i.top,x:a?i.right:i.left}]}].filter(c=>!!c)}function bt(e){return Math.round(e*100)/100}function Mr(e,t){return[...tr(e),...tr(t)]}function tr(e){return e?e instanceof Array?e:[e]:[]}var Ne=v(()=>{}),rr,Pr,Gi=v(()=>{de(),rr=function(e,t,r,i){var o=arguments.length,s=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(s=(o<3?a(s):o>3?a(t,r,s):a(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},Pr=e=>{class t extends e{constructor(...i){super(...i),this.selectedNode=null}updated(i){super.updated(i),i.has("selectedNode")&&this.dispatchEvent(new CustomEvent("nodeselect",{detail:{selectedNode:this.selectedNode}}))}}return rr([E({attribute:!1})],t.prototype,"selectedNode",void 0),t}});function _e(e){return e.touches.length===0||e.touches.length>2}function qi(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}var Br,Ji=v(()=>{Br=e=>class extends e{constructor(...t){super(...t),this.previousTouches=null,this.addEventListener("touchstart",r=>{_e(r)||(r.preventDefault(),this.previousTouches=r.touches)}),this.addEventListener("touchend",r=>{_e(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchcancel",r=>{_e(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchmove",r=>{if(_e(r))return;let i=Array.from(this.previousTouches||[]),o=Array.from(r.touches);if(this.previousTouches=r.touches,!(o.length!==i.length||!o.every(s=>i.some(a=>a.identifier===s.identifier)))){if(o.length===1){this.onTouchPan({x:o[0].pageX-i[0].pageX,y:o[0].pageY-i[0].pageY});return}this.onTouchPinch(qi({x:o[0].pageX,y:o[0].pageY},{x:i[0].pageX,y:i[0].pageY}))}})}get isTouching(){return!!(this.previousTouches&&this.previousTouches.length>0)}onTouchPan(t){}onTouchPinch(t){}}}),X,T,st,Nr,Qi=v(()=>{de(),Ji(),X=function(e,t,r,i){var o=arguments.length,s=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(s=(o<3?a(s):o>3?a(t,r,s):a(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},T=function(e,t,r,i){if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?i:r==="a"?i.call(e):i?i.value:t.get(e)},st=function(e,t,r,i,o){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?o.call(e,r):o?o.value=r:t.set(e,r),r},Nr=e=>{var t,r,i,o,s;class a extends Br(e){constructor(...n){super(...n),this.panX=0,this.panY=0,this.scale=1,this.zoomSpeed=500,this.panSpeed=500,t.set(this,!1),r.set(this,(d,h)=>{this.panX+=d/this.scale/window.devicePixelRatio,this.panY+=h/this.scale/window.devicePixelRatio}),i.set(this,d=>{d.code==="Space"&&!T(this,t,"f")&&(st(this,t,!0,"f"),document.body.style.cursor="grab")}),o.set(this,d=>{d.code==="Space"&&T(this,t,"f")&&(st(this,t,!1,"f"),document.body.style.cursor="auto")}),s.set(this,()=>{document.addEventListener("keyup",T(this,o,"f")),document.addEventListener("keydown",T(this,i,"f"))}),this.addEventListener("wheel",d=>{if(this.isMovable)if(d.preventDefault(),d.ctrlKey){let{deltaY:h}=d;d.deltaMode===1&&(h*=15);let p=this.scale;this.scale*=1-h/((1e3-this.zoomSpeed)*.5);let g=d.offsetX-this.offsetWidth/2,f=d.offsetY-this.offsetHeight/2;this.panX+=g/this.scale-g/p,this.panY+=f/this.scale-f/p}else{let h=this.panSpeed*.002;this.panX-=d.deltaX*h/this.scale,this.panY-=d.deltaY*h/this.scale}},{passive:!1});let c=1;this.addEventListener("gesturestart",d=>{d.preventDefault(),c=this.scale}),this.addEventListener("gesturechange",d=>{let h=d;h.preventDefault(),this.scale=c*h.scale}),this.addEventListener("pointermove",d=>{d.buttons&4&&(d.preventDefault(),T(this,r,"f").call(this,d.movementX,d.movementY))}),T(this,s,"f").call(this),this.onmousedown=()=>{T(this,t,"f")&&(document.body.style.cursor="grabbing",this.onmousemove=({movementX:d,movementY:h})=>{T(this,r,"f").call(this,d,h)},this.onmouseup=()=>{document.body.style.cursor="grab",this.onmousemove=null,this.onmouseup=null})}}get isMovable(){return!0}get canvasTransform(){return[`scale(${this.scale})`,`translate(${this.panX}px, ${this.panY}px)`]}disconnectedCallback(){document.removeEventListener("keyup",T(this,o,"f")),document.removeEventListener("keydown",T(this,i,"f")),super.disconnectedCallback()}updated(n){super.updated(n),n.has("scale")&&this.dispatchEvent(new CustomEvent("scalechange",{detail:{scale:this.scale}})),(n.has("panX")||n.has("panY"))&&this.dispatchEvent(new CustomEvent("positionchange",{detail:{x:this.panX,y:this.panY}}))}onTouchPan(n){this.panX+=n.x/this.scale,this.panY+=n.y/this.scale}onTouchPinch(n){this.scale*=1-n/1e3}}return t=new WeakMap,r=new WeakMap,i=new WeakMap,o=new WeakMap,s=new WeakMap,X([E({attribute:!1})],a.prototype,"panX",void 0),X([E({attribute:!1})],a.prototype,"panY",void 0),X([E({attribute:!1})],a.prototype,"scale",void 0),X([E({type:Number,attribute:"zoom-speed"})],a.prototype,"zoomSpeed",void 0),X([E({type:Number,attribute:"pan-speed"})],a.prototype,"panSpeed",void 0),a}}),ir,or,nt,Rr,Or,eo=v(()=>{B(),kt(),Ne(),ir=({guide:e,reverseScale:t})=>{let r=Math.abs(e.points[0].x-e.points[1].x),i=Math.abs(e.points[0].y-e.points[1].y);return r===0&&i===0?null:S`
    <line
      class="distance-line"
      x1=${e.points[0].x}
      y1=${e.points[0].y}
      x2=${e.points[1].x}
      y2=${e.points[1].y}
    />

    ${e.bisector&&S`
        <line
          class="distance-line"
          x1=${e.bisector[0].x}
          y1=${e.bisector[0].y}
          x2=${e.bisector[1].x}
          y2=${e.bisector[1].y}
          style=${le({strokeDasharray:`${4*t}`})}
          shape-rendering="geometricPrecision"
          fill="none"
        />
      `}
  `},or=({guide:e,reverseScale:t,fontSize:r})=>{let i=Math.abs(e.points[0].x-e.points[1].x),o=Math.abs(e.points[0].y-e.points[1].y);if(i===0&&o===0)return null;let s=bt(Math.max(i,o)).toString(10),a=s.length*r*.5,l=r*.25,n=r*.25,c=r*.5,d=i>o?(e.points[0].x+e.points[1].x)/2-a/2:e.points[0].x,h=i>o?e.points[0].y:(e.points[0].y+e.points[1].y)/2-r/2,p=[`scale(${t})`,i>o?`translate(0, ${l+n})`:`translate(${l+c}, 0)`].join(" "),g=d+a/2,f=h+r/2,m=i>o?`${g} ${h}`:`${d} ${f}`;return S`
    <g class="distance-tooltip">
      <rect
        x=${d-c}
        y=${h-n}
        rx="2"
        width=${a+c*2}
        height=${r+n*2}
        transform=${p}
        transform-origin=${m}
        stroke="none"
      />

      <text
        x=${g}
        y=${h+r-n/2}
        text-anchor="middle"
        transform=${p}
        transform-origin=${m}
        stroke="none"
        fill="white"
        style="font-size: ${r}px"
      >
        ${s}
      </text>
    </g>
  `},nt=new Map,Rr=({node:e,distanceTo:t,reverseScale:r,fontSize:i})=>{let o=e.id+`
`+t.id,s=nt.get(o);return s||(s=Ki(e.absoluteBoundingBox,t.absoluteBoundingBox),nt.set(o,s)),[...s.map(a=>ir({guide:a,reverseScale:r})),...s.map(a=>or({guide:a,reverseScale:r,fontSize:i}))]},Or=z`
  .distance-line {
    shape-rendering: geometricPrecision;
    fill: none;
    opacity: 0;
  }

  .distance-tooltip {
    opacity: 0;
  }

  .guide:hover ~ .distance-line,
  .guide:hover ~ .distance-tooltip {
    opacity: 1;
  }
`}),Lr,$t,Hr,zr,jr,Ir=v(()=>{B(),Lr=({onClick:e=()=>{}})=>S`
  <svg @click=${e} title="close icon" width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path d="M1 19L19 1M19 19L1 1" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,$t=({onClick:e=()=>{}})=>S`
  <svg @click=${e} title="copy icon" width="14" height="14" viewBox="0 0 30 30" fill="none">
  <path d="M21 25.5C21 24.9477 20.5523 24.5 20 24.5C19.4477 24.5 19 24.9477 19 25.5H21ZM13 2H25V0H13V2ZM28 5V21H30V5H28ZM25 24H13V26H25V24ZM10 21V5H8V21H10ZM13 24C11.3431 24 10 22.6569 10 21H8C8 23.7614 10.2386 26 13 26V24ZM28 21C28 22.6569 26.6569 24 25 24V26C27.7614 26 30 23.7614 30 21H28ZM25 2C26.6569 2 28 3.34315 28 5H30C30 2.23858 27.7614 0 25 0V2ZM13 0C10.2386 0 8 2.23858 8 5H10C10 3.34315 11.3431 2 13 2V0ZM16.5 28H5V30H16.5V28ZM2 25V10H0V25H2ZM5 28C3.34315 28 2 26.6569 2 25H0C0 27.7614 2.23858 30 5 30V28ZM5 7H8V5H5V7ZM2 10C2 8.34315 3.34315 7 5 7V5C2.23858 5 0 7.23858 0 10H2ZM16.5 30C18.9853 30 21 27.9853 21 25.5H19C19 26.8807 17.8807 28 16.5 28V30Z" fill="#B3B3B3"/>
</svg>
`,Hr=()=>S`
  <svg title="horizontal padding" width="14" height="14" viewBox="0 0 29 28" fill="none">
    <rect x="7" y="8" width="14" height="14" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M27 1V28" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 0V28" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,zr=()=>S`
  <svg title="vertical padding" width="14" height="14" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="21" width="14" height="14" transform="rotate(-90 8 21)" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 1L28 0.999999" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M0 27L28 27" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,jr=()=>S`
  <svg title="figma logo" width="11" height="16" viewBox="0 0 12 17" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.5 1.5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm-5 2c0 1.043.533 1.963 1.341 2.5C1.033 6.537.5 7.457.5 8.5c0 1.043.533 1.963 1.341 2.5C1.033 11.537.5 12.457.5 13.5c0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3V10.736c.53.475 1.232.764 2 .764 1.657 0 3-1.343 3-3 0-1.043-.533-1.963-1.341-2.5.808-.537 1.341-1.457 1.341-2.5 0-1.657-1.343-3-3-3h-5c-1.657 0-3 1.343-3 3zm1 5c0-1.105.895-2 2-2h2v4h-2c-1.105 0-2-.895-2-2zm0 5c0-1.105.895-2 2-2h2v2c0 1.105-.895 2-2 2-1.105 0-2-.895-2-2zm7-3c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2 1.105 0 2 .895 2 2 0 1.105-.895 2-2 2zm0-5h-2v-4h2c1.105 0 2 .895 2 2 0 1.105-.895 2-2 2z"
      fill-rule="evenodd"
      fill-opacity="1"
      fill="#000"
      stroke="none"
    ></path>
  </svg>
`}),U,sr,nr,Ur,at,ar,wt,to=v(()=>{U=e=>e.a===0?"transparent":e.a<1?`rgba(${at(e).join(", ")}, ${e.a.toFixed(2)})`:ar(e),sr=e=>new nr(e).cssColor,nr=class{constructor(e){this.gradientHandles={start:e.gradientHandlePositions[0],end:e.gradientHandlePositions[1]},this.colors=e.gradientStops,this.colorObjects=this.createColorObjects(this.colors),this.angle=this.calculateAngle(this.gradientHandles.start,this.gradientHandles.end)}get cssGradientArray(){return this.colorObjects.map((e,t)=>{let r=this.floatToPercent(this.colors[t].position);return e+" "+r})}get cssColor(){let e=this.cssGradientArray;return e.unshift(this.angle+"deg"),`linear-gradient(${e.join(", ")})`}createColorObjects(e){return e.map(({color:t})=>U(t))}floatToPercent(e){return(e*=100).toFixed(0)+"%"}calculateAngle(e,t){let r=Math.atan(this.calculateGradient(e,t));return parseInt(this.radToDeg(r).toFixed(1))}calculateGradient(e,t){return(t.y-e.y)/(t.x-e.x)*-1}radToDeg(e){return 180*e/Math.PI}},Ur=class{constructor(e){var t,r,i;if(this.hasPadding=!1,this.height=`${Math.trunc(e.absoluteBoundingBox.height)}px`,this.width=`${Math.trunc(e.absoluteBoundingBox.width)}px`,(e.horizontalPadding||e.verticalPadding)&&(this.hasPadding=!0,this.horizontalPadding=`${e.horizontalPadding}px`,this.verticalPadding=`${e.verticalPadding}px`),e.style&&(this.fontFamily=e.style.fontFamily,this.fontPostScriptName=(t=e.style.fontPostScriptName)===null||t===void 0?void 0:t.replace("-"," "),this.fontWeight=e.style.fontWeight,this.fontSize=`${Math.ceil(e.style.fontSize)}px`,this.lineHeight=`${Math.trunc(e.style.lineHeightPx)}px`),e.rectangleCornerRadii&&(this.borderRadius=e.rectangleCornerRadii.filter(s=>s===e.cornerRadius).length<4?`${e.rectangleCornerRadii.join("px ")}px`:`${e.cornerRadius}px`),e.backgroundColor||e.backgroundColor){let s=e.backgroundColor||((r=e.background)===null||r===void 0?void 0:r[0].color);this.background=U(s)}let o=(i=e.fills)===null||i===void 0?void 0:i[0];if(o&&o.visible!==!1&&(e.type==="TEXT"?this.color=U(o.color):o.type.includes("GRADIENT")?this.backgroundImage=sr(o):o.type==="SOLID"&&(this.background=U(o.color))),e.strokes&&e.strokes.length>0&&(this.borderColor=U(e.strokes[0].color),this.border=`${e.strokeWeight}px solid ${this.borderColor}`),e.effects&&e.effects.length>0){let{offset:s,radius:a,color:l}=e.effects[0];this.boxShadowColor=U(l),this.boxShadow=`${s?.x||0}px ${s?.y||0}px 0 ${a} ${this.boxShadowColor}`}}getStyles(){return[this.height&&{property:"height",value:this.height},this.width&&{property:"width",value:this.width},this.fontFamily&&{property:"font-family",value:this.fontFamily},this.fontSize&&{property:"font-size",value:this.fontSize},this.fontWeight&&{property:"font-weight",value:this.fontWeight},this.lineHeight&&{property:"line-height",value:this.lineHeight},this.borderRadius&&{property:"border-radius",value:this.borderRadius},this.backgroundImage&&{property:"background-image",value:this.backgroundImage},this.boxShadow&&{property:"box-shadow",value:this.boxShadow,color:this.boxShadowColor},this.border&&{property:"border",value:this.border,color:this.borderColor},this.background&&{property:"background",value:this.background,color:this.background},this.color&&{property:"color",value:this.color,color:this.color}].filter(Boolean)}getStyleSheet(){return this.getStyles().map(wt).join(`
`)}},at=e=>[Math.trunc(255*e.r),Math.trunc(255*e.g),Math.trunc(255*e.b)],ar=e=>{let[t,r,i]=at(e);return"#"+((1<<24)+(t<<16)+(r<<8)+i).toString(16).slice(1)},wt=({property:e,value:t})=>`${e}: ${t};`}),lr,Se,Dr,dr,cr,Vr,ro=v(()=>{B(),Ir(),to(),lr=function(e,t,r,i){function o(s){return s instanceof r?s:new r(function(a){a(s)})}return new(r||(r=Promise))(function(s,a){function l(d){try{c(i.next(d))}catch(h){a(h)}}function n(d){try{c(i.throw(d))}catch(h){a(h)}}function c(d){d.done?s(d.value):o(d.value).then(l,n)}c((i=i.apply(e,t||[])).next())})},Se=e=>lr(void 0,void 0,void 0,function*(){yield navigator.clipboard.writeText(e)}),Dr=({node:e,onClose:t})=>{if(!e)return null;let r=new Ur(e),i=o=>o.stopPropagation();return b`
    <div
      class="inspector-view"
      @click=${i}
      @wheel=${i}
      @keydown=${i}
      @keyup=${i}
      @pointermove=${i}
    >
      <div class="inspector-section selectable-content">
        <div class="title-section">
          <h4>${e.name}</h4>
          ${Lr({onClick:t})}
        </div>
        <div class="properties-overview">
          <div class="title-section">
            <p class="inspector-property">
              <span>W: </span>${r.width}
            </p>
            <p class="inspector-property" style="margin-left: 16px;">
              <span>H: </span>${r.height}
            </p>
          </div>
          ${r.fontPostScriptName?b`<p class="inspector-property">
                <span>Font:</span>
                ${r.fontPostScriptName}
              </p>`:null}
        </div>
      </div>
      ${r.hasPadding?b`<div class="inspector-section">
            <h4>Layout</h4>
            ${r.horizontalPadding&&b`<p class="inspector-property">
              ${Hr()} ${r.horizontalPadding}
            </p>`}
            ${r.verticalPadding&&b`<p class="inspector-property">
              ${zr()} ${r.verticalPadding}
            </p>`}
          </div>`:null}
      ${e.characters?b`<div class="inspector-section">
            <div class="title-section">
              <h4>Content</h4>
              ${$t({onClick:()=>Se(e.characters)})}
            </div>
            <p class="node-content code-section selectable-content">
              ${e.characters}
            </p>
          </div>`:null}
      ${dr(r)}
    </div>
  `},dr=e=>{let t=()=>Se(e.getStyleSheet()),r=e.getStyles();return b`<div class="inspector-section">
    <div class="title-section style-section">
      <h4>CSS</h4>
      ${$t({onClick:t})}
    </div>
    <div class="code-section selectable-content">
      ${r.map(cr)}
    </div>
  </div>`},cr=e=>{let{property:t,value:r,color:i}=e,o=null;switch(t){case"background":case"fill":case"border":case"box-shadow":case"color":o=b`<span
        class="color-preview"
        style="background-color: ${i}"
      ></span>`;break;case"background-image":o=b`<span
        class="color-preview"
        style="background-image: ${r}"
      ></span>`;break}return b`<div class="css-property" @click=${()=>Se(wt(e))}>
    <span>${t}:</span>${o}<span class="css-value">${r}</span>;</span>
  </div>`},Vr=z`
  .inspector-view {
    height: 100%;
    width: 300px;
    position: absolute;
    right: 0;
    background: white;
    border-left: 1px solid #ccc;
    overflow-y: auto;
    z-index: calc(var(--z-index) + 2);
  }

  .inspector-view h4 {
    font-size: 16px;
    margin: 0;
  }

  .style-section {
    margin-bottom: 12px;
  }

  .title-section {
    display: flex;
    align-items: center;
  }

  .code-section {
    padding: 8px;
    background: #f3f3f3;
    font-family: monospace;
  }

  .title-section svg {
    cursor: pointer;
    margin-left: auto;
  }

  .inspector-section {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .properties-overview {
    font-family: monospace;
    color: #518785;
  }

  .properties-overview p span {
    color: #121212;
  }

  .inspector-property {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .inspector-property span {
    color: #b3b3b3;
    margin-right: 4px;
  }

  .inspector-property svg {
    margin-right: 8px;
  }

  .css-property {
    margin: 8px;
    transition: background-color ease-in-out 100ms;
  }

  .css-property:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }

  .css-value {
    color: #518785;
    margin-left: 4px;
  }

  .color-preview {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    margin-left: 4px;
    vertical-align: middle;
  }

  .selectable-content {
    cursor: text;
    user-select: text;
  }
`}),xt,Fr,Wr,io=v(()=>{B(),kt(),Ne(),xt=({node:e,selected:t=!1,computedThickness:r,onClick:i})=>{let{x:o,y:s,width:a,height:l}=e.absoluteBoundingBox,n="cornerRadius"in e&&e.cornerRadius?{topLeft:e.cornerRadius,topRight:e.cornerRadius,bottomRight:e.cornerRadius,bottomLeft:e.cornerRadius}:"rectangleCornerRadii"in e&&e.rectangleCornerRadii?{topLeft:e.rectangleCornerRadii[0],topRight:e.rectangleCornerRadii[1],bottomRight:e.rectangleCornerRadii[2],bottomLeft:e.rectangleCornerRadii[3]}:{topLeft:0,topRight:0,bottomRight:0,bottomLeft:0},c=r/2,d=(f,m)=>`M${f},${m}`,h=(f,m)=>`L${f},${m}`,p=(f,m,x)=>`A${f},${f} 0 0 1 ${m},${x}`,g=[d(n.topLeft+c,c),h(a-n.topRight,c),p(n.topRight-c,a-c,n.topRight),h(a-c,l-n.bottomRight),p(n.bottomRight-c,a-n.bottomRight,l-c),h(n.bottomLeft,l-c),p(n.bottomLeft-c,c,l-n.bottomLeft),h(c,n.topLeft),p(n.topLeft-c,n.topLeft,c),"Z"].join(" ");return S`
    <path
      class="guide"
      d=${g}
      shape-rendering="geometricPrecision"
      fill="none"
      transform="translate(${o}, ${s})"
      ?data-selected=${t}
      @click=${i}
    />
  `},Fr=({nodeSize:{x:e,y:t,width:r,height:i},offsetX:o,offsetY:s,reverseScale:a})=>{let l={top:`${s+t+i}px`,left:`${o+e+r/2}px`,transform:`translateX(-50%) scale(${a}) translateY(0.25em)`};return b`
    <div class="tooltip" style="${le(l)}">
      ${bt(r)} x ${bt(i)}
    </div>
  `},Wr=z`
  .guide {
    /*
     * SVGs cannot be pixel perfect, especially floating values.
     * Since many platform renders them visually incorrectly (probably they
     * are following the spec), it's safe to set overflow to visible.
     * Cropped borders are hard to visible and ugly.
     */
    overflow: visible;

    pointer-events: all;

    opacity: 0;
  }
  .guide:hover {
    opacity: 1;
  }
  .guide[data-selected] {
    opacity: 1;
    stroke: var(--guide-selected-color);
  }

  .tooltip {
    position: absolute;
    padding: 0.25em 0.5em;
    font-size: var(--guide-tooltip-font-size);

    color: var(--guide-selected-tooltip-fg);
    background-color: var(--guide-selected-tooltip-bg);
    border-radius: 2px;
    pointer-events: none;
    z-index: calc(var(--z-index) + 1);

    transform-origin: top center;
  }
`}),hr,lt,Yr,oo=v(()=>{hr=[{gte:31536e6,divisor:31536e6,unit:"year"},{gte:2592e6,divisor:2592e6,unit:"month"},{gte:6048e5,divisor:6048e5,unit:"week"},{gte:864e5,divisor:864e5,unit:"day"},{gte:36e5,divisor:36e5,unit:"hour"},{gte:6e4,divisor:6e4,unit:"minute"},{gte:3e4,divisor:1e3,unit:"seconds"},{gte:0,divisor:1,text:"just now"}],lt=e=>(typeof e=="object"?e:new Date(e)).getTime(),Yr=(e,t=Date.now(),r=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}))=>{let i=lt(t)-lt(e),o=Math.abs(i);for(let s of hr)if(o>=s.gte){let a=Math.round(Math.abs(i)/s.divisor),l=i<0,n=s.unit;return n?r.format(l?a:-a,n):s.text}}}),Zr,Xr,so=v(()=>{B(),Ir(),oo(),Zr=z`
  .figma-footer {
    flex: 0;
    z-index: calc(var(--z-index) + 1);
    border-top: 1px solid #ccc;
    min-height: 48px;
    padding: 0 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color: #fff;
    overflow-x: auto;
    cursor: pointer;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
  }

  .figma-footer--icon {
    margin-right: 12px;
  }

  .figma-footer--title {
    font-weight: 600;
    margin-right: 4px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .figma-footer--timestamp {
    white-space: nowrap;
    overflow: hidden;
  }
`,Xr=e=>{if(!e||!e.link||e.link===void 0||e.link==="undefined")return null;let{link:t,timestamp:r,fileName:i}=e;return b`<a
    class="figma-footer"
    target="_blank"
    rel="noopener"
    title="Open in Figma"
    href="${t}"
  >
    <span class="figma-footer--icon"> ${jr()} </span>
    <span class="figma-footer--title"> ${i} </span>
    <span
      title="Last time edited: ${new Date(r).toUTCString()}"
      class="figma-footer--timestamp"
    >
      Edited ${Yr(r)}
    </span>
  </a>`}});function no(e){let t=[],r=[],i=[],o=[];for(let l of e.children){if(l.type!=="FRAME"&&l.type!=="COMPONENT")continue;let{x:n,y:c,width:d,height:h}=l.absoluteBoundingBox;t.push(n),r.push(n+d),i.push(c),o.push(c+h)}let s=Math.min(...t),a=Math.min(...i);return{x:s,y:a,width:Math.abs(Math.max(...r)-s),height:Math.abs(Math.min(...o)-a)}}function ao(e,t){let r=t.map(o=>{if(!("effects"in o))return{top:o.absoluteBoundingBox.y,right:o.absoluteBoundingBox.x+o.absoluteBoundingBox.width,bottom:o.absoluteBoundingBox.y+o.absoluteBoundingBox.height,left:o.absoluteBoundingBox.x};let s=o.effects.filter(n=>n.visible&&n.type==="LAYER_BLUR").map(n=>n.radius),a=o.effects.filter(n=>n.visible&&n.type==="DROP_SHADOW"&&!!n.offset).map(n=>({left:n.radius-n.offset.x,top:n.radius-n.offset.y,right:n.radius+n.offset.x,bottom:n.radius+n.offset.y})),l={top:Math.max(0,...s,...a.map(n=>n.top)),right:Math.max(0,...s,...a.map(n=>n.right)),bottom:Math.max(0,...s,...a.map(n=>n.bottom)),left:Math.max(0,...s,...a.map(n=>n.left))};return{top:o.absoluteBoundingBox.y-l.top,right:o.absoluteBoundingBox.x+o.absoluteBoundingBox.width+l.right,bottom:o.absoluteBoundingBox.y+o.absoluteBoundingBox.height+l.bottom,left:o.absoluteBoundingBox.x-l.left}}),i={top:Math.min(...r.map(o=>o.top)),right:Math.max(...r.map(o=>o.right)),bottom:Math.max(...r.map(o=>o.bottom)),left:Math.min(...r.map(o=>o.left))};return{top:e.absoluteBoundingBox.y-i.top,right:i.right-e.absoluteBoundingBox.x-e.absoluteBoundingBox.width,bottom:i.bottom-e.absoluteBoundingBox.y-e.absoluteBoundingBox.height,left:e.absoluteBoundingBox.x-i.left}}function Pe(e,t=0){return"absoluteBoundingBox"in e?!("children"in e)||e.children.length===0?[Object.assign(Object.assign({},e),{depth:t})]:[Object.assign(Object.assign({},e),{depth:t}),...e.children.map(r=>Pe(r,t+1)).flat()]:e.children.map(r=>Pe(r,t+1)).flat()}var dt,_,Ee,At,Kr=v(()=>{B(),de(),kt(),Ne(),Gi(),Qi(),eo(),ro(),Et(),io(),so(),dt=function(e,t,r,i){var o=arguments.length,s=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(s=(o<3?a(s):o>3?a(t,r,s):a(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},_=function(e,t,r,i){if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?i:r==="a"?i.call(e):i?i.value:t.get(e)},Ee=function(e,t,r,i,o){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?o.call(e,r):o?o.value=r:t.set(e,r),r},At=e=>{var t,r,i,o,s;class a extends Pr(Nr(e)){constructor(...n){super(...n),this.zoomMargin=50,this.link="",t.set(this,void 0),r.set(this,void 0),i.set(this,void 0),o.set(this,c=>d=>{d.preventDefault(),d.stopPropagation(),this.selectedNode=c}),s.set(this,c=>{var d,h;return(h=(d=_(this,i,"f"))===null||d===void 0?void 0:d.find(p=>p.id===c))!==null&&h!==void 0?h:null})}static get styles(){let n=super.styles;return Mr(n,[z`
          :host {
            --default-error-bg: #fff;
            --default-error-fg: #333;

            --bg: var(--figspec-viewer-bg, #e5e5e5);
            --z-index: var(--figspec-viewer-z-index, 0);
            --error-bg: var(--figspec-viewer-error-bg, var(--default-error-bg));
            --error-fg: var(--figspec-viewer-error-fg, var(--default-error-fg));
            --error-color: var(--figspec-viewer-error-color, tomato);

            --guide-thickness: var(--figspec-viewer-guide-thickness, 1.5px);
            --guide-color: var(--figspec-viewer-guide-color, tomato);
            --guide-selected-color: var(
              --figspec-viewer-guide-selected-color,
              dodgerblue
            );
            --guide-tooltip-fg: var(--figspec-viewer-guide-tooltip-fg, white);
            --guide-selected-tooltip-fg: var(
              --figspec-viewer-guide-selected-tooltip-fg,
              white
            );
            --guide-tooltip-bg: var(
              --figspec-viewer-guide-tooltip-bg,
              var(--guide-color)
            );
            --guide-selected-tooltip-bg: var(
              --figspec-viewer-guide-selected-tooltip-bg,
              var(--guide-selected-color)
            );
            --guide-tooltip-font-size: var(
              --figspec-viewer-guide-tooltip-font-size,
              12px
            );

            position: relative;
            display: block;

            background-color: var(--bg);
            user-select: none;
            overflow: hidden;
            z-index: var(--z-index);
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --default-error-bg: #222;
              --default-error-fg: #fff;
            }
          }

          .spec-canvas-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column-reverse;
          }

          .canvas {
            position: absolute;
            top: 50%;
            left: 50%;
            flex: 1;
          }

          .rendered-image {
            position: absolute;
            top: 0;
            left: 0;
          }

          .guides {
            position: absolute;

            overflow: visible;
            stroke: var(--guide-color);
            fill: var(--guide-color);
            pointer-events: none;
            z-index: calc(var(--z-index) + 2);
          }
        `,Wr,kr,Or,Vr,Zr])}get __images(){return{}}deselectNode(){this.selectedNode=null}get error(){return!_(this,t,"f")||!_(this,i,"f")?F({title:"Error",children:"Please call `__updateTree/1` method with a valid parameter."}):null}render(){if(this.error)return this.error instanceof Error?F({title:this.error.name||"Error",children:this.error.message}):typeof this.error=="string"?F({title:"Error",children:this.error}):this.error;let n=_(this,t,"f"),c=1/this.scale,d=`calc(var(--guide-thickness) * ${c})`,h=parseFloat(getComputedStyle(this).getPropertyValue("--guide-thickness")),p=parseFloat(getComputedStyle(this).getPropertyValue("--guide-tooltip-font-size"));return b`
        <div class="spec-canvas-wrapper" @click=${this.deselectNode}>
          <div
            class="canvas"
            style="
          width: ${n.width}px;
          height: ${n.height}px;

          transform: translate(-50%, -50%) ${this.canvasTransform.join(" ")}
        "
          >
            ${Object.entries(this.__images).map(([g,f])=>{var m;let x=_(this,s,"f").call(this,g);if(!x||!("absoluteBoundingBox"in x)||!(!((m=_(this,r,"f"))===null||m===void 0)&&m[x.id]))return null;let y=_(this,r,"f")[x.id];return b`
                <img
                  class="rendered-image"
                  src="${f}"
                  style=${le({top:`${x.absoluteBoundingBox.y-n.y}px`,left:`${x.absoluteBoundingBox.x-n.x}px`,marginTop:`${-y.top}px`,marginLeft:`${-y.left}px`,width:x.absoluteBoundingBox.width+y.left+y.right+"px",height:x.absoluteBoundingBox.height+y.top+y.bottom+"px"})}
                />
              `})}
            ${this.selectedNode&&Fr({nodeSize:this.selectedNode.absoluteBoundingBox,offsetX:-n.x,offsetY:-n.y,reverseScale:c})}
            ${S`
            <svg
              class="guides"
              viewBox="0 0 ${n.width} ${n.height}"
              width=${n.width}
              height=${n.height}
              style=${le({left:`${-n.x}px`,top:`${-n.y}px`,strokeWidth:d})}
            >
              ${this.selectedNode&&xt({node:this.selectedNode,selected:!0,computedThickness:h*c})}

              ${_(this,i,"f").map(g=>{var f;return g.id===((f=this.selectedNode)===null||f===void 0?void 0:f.id)?null:S`
                  <g>
                    ${xt({node:g,computedThickness:h*c,onClick:_(this,o,"f").call(this,g)})}
                    ${this.selectedNode&&Rr({node:g,distanceTo:this.selectedNode,reverseScale:c,fontSize:p})}
                  </g>
                `})}
            </svg>
          `}
          </div>
          ${Dr({node:this.selectedNode,onClose:this.deselectNode})}
          ${Xr(this.getMetadata())}
        </div>
      `}getMetadata(){}connectedCallback(){super.connectedCallback(),this.resetZoom()}updated(n){super.updated(n)}__updateTree(n){if(!(n.type==="CANVAS"||n.type==="FRAME"||n.type==="COMPONENT"||n.type==="COMPONENT_SET"))throw new Error("Cannot update node tree: Top level node MUST be one of CANVAS, FRAME, COMPONENT, or COMPONENT_SET");Ee(this,t,n.type==="CANVAS"?no(n):n.absoluteBoundingBox,"f"),Ee(this,i,Pe(n),"f"),this.requestUpdate()}__updateEffectMargins(){if(!this.__images)return;let n=Object.keys(this.__images).map(_(this,s,"f")).filter(c=>!!c);Ee(this,r,n.reduce((c,d)=>"absoluteBoundingBox"in d?Object.assign(Object.assign({},c),{[d.id]:ao(d,Pe(d))}):c,{}),"f"),this.requestUpdate()}resetZoom(){if(_(this,t,"f")){let{width:n,height:c}=_(this,t,"f"),{width:d,height:h}=this.getBoundingClientRect(),p=d/(n+this.zoomMargin*2),g=h/(c+this.zoomMargin*2);this.scale=Math.min(p,g,1)}}}return t=new WeakMap,r=new WeakMap,i=new WeakMap,o=new WeakMap,s=new WeakMap,dt([E({type:Number,attribute:"zoom-margin"})],a.prototype,"zoomMargin",void 0),dt([E({type:String,attribute:"link"})],a.prototype,"link",void 0),a}}),ct,ne,lo=v(()=>{B(),de(),Et(),Kr(),ct=function(e,t,r,i){var o=arguments.length,s=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(s=(o<3?a(s):o>3?a(t,r,s):a(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},ne=class extends At(V){constructor(){super(...arguments),this.nodes=null,this.renderedImage=null}get isMovable(){return!!(this.nodes&&this.renderedImage&&this.documentNode)}get documentNode(){if(!this.nodes)return null;let e=Object.values(this.nodes.nodes)[0];return!e||!("absoluteBoundingBox"in e.document)?null:e.document}get __images(){return!this.documentNode||!this.renderedImage?{}:{[this.documentNode.id]:this.renderedImage}}get error(){if(!this.nodes||!this.renderedImage)return F({title:"Parameter error",children:b`<span>
          Both <code>nodes</code> and <code>rendered-image</code> are required.
        </span>`});if(!this.documentNode)return F({title:"Parameter Error",children:b`
          <span> Document node is empty or does not have size. </span>
        `});if(super.error)return super.error}getMetadata(){return{fileName:this.nodes.name,timestamp:this.nodes.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(this.__updateTree(this.documentNode),this.__updateEffectMargins(),this.resetZoom())}updated(e){if(super.updated(e),e.has("nodes")){if(!this.documentNode)return;this.__updateTree(this.documentNode),this.resetZoom()}e.has("renderedImage")&&this.__updateEffectMargins()}},ct([E({type:Object})],ne.prototype,"nodes",void 0),ct([E({type:String,attribute:"rendered-image"})],ne.prototype,"renderedImage",void 0)}),ht,ke,Ae,ut,ae,co=v(()=>{B(),de(),Et(),Kr(),Ne(),ht=function(e,t,r,i){var o=arguments.length,s=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(s=(o<3?a(s):o>3?a(t,r,s):a(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},ke=function(e,t,r,i){if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?i:r==="a"?i.call(e):i?i.value:t.get(e)},ae=class extends At(V){constructor(){super(...arguments),this.documentNode=null,this.renderedImages=null,this.selectedPage=null,Ae.set(this,()=>{var e;if(!this.documentNode){this.selectedPage=null;return}this.selectedPage=(e=this.documentNode.document.children.filter(t=>t.type==="CANVAS")[0])!==null&&e!==void 0?e:null}),ut.set(this,e=>{var t,r;let i=e.currentTarget;this.selectedPage=(r=(t=this.documentNode)===null||t===void 0?void 0:t.document.children.find(o=>o.id===i.value))!==null&&r!==void 0?r:null,this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom(),this.__updateEffectMargins(),this.panX=0,this.panY=0)})}get isMovable(){return!!(this.renderedImages&&this.documentNode)}get __images(){return this.renderedImages||{}}get error(){if(!this.documentNode||!this.renderedImages)return F({title:"Parameter error",children:b`<span>
          Both <code>document-node</code> and <code>rendered-images</code> are
          required.
        </span>`});if(super.error)return super.error}static get styles(){return Mr(super.styles,[z`
        :host {
          --figspec-control-bg-default: #fcfcfc;
          --figspec-control-fg-default: #333;

          --control-bg: var(
            --figspec-control-bg,
            var(--figspec-control-bg-default)
          );
          --control-fg: var(
            --figspec-control-bg,
            var(--figspec-control-fg-default)
          );
          --control-shadow: var(
            --figspec-control-shadow,
            0 2px 4px rgba(0, 0, 0, 0.3)
          );
          --padding: var(--figspec-control-padding, 8px 16px);

          display: flex;
          flex-direction: column;
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --figspec-control-bg-default: #222;
            --figspec-control-fg-default: #fff;
          }
        }

        .controls {
          flex-shrink: 0;
          padding: var(--padding);

          background-color: var(--control-bg);
          box-shadow: var(--control-shadow);
          color: var(--control-fg);
          z-index: 1;
        }

        .view {
          position: relative;
          flex-grow: 1;
          flex-shrink: 1;
        }
      `])}render(){var e;return b`
      <div class="controls">
        <select @change=${ke(this,ut,"f")}>
          ${(e=this.documentNode)===null||e===void 0?void 0:e.document.children.map(t=>b`<option value=${t.id}>${t.name}</option>`)}
        </select>
      </div>

      <div class="view">${super.render()}</div>
    `}getMetadata(){return{fileName:this.documentNode.name,timestamp:this.documentNode.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(ke(this,Ae,"f").call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom()))}updated(e){super.updated(e),e.has("documentNode")&&(ke(this,Ae,"f").call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom())),e.has("renderedImages")&&this.__updateEffectMargins()}},Ae=new WeakMap,ut=new WeakMap,ht([E({type:Object,attribute:"document-node"})],ae.prototype,"documentNode",void 0),ht([E({type:Object,attribute:"rendered-images"})],ae.prototype,"renderedImages",void 0)}),ho=v(()=>{lo(),co(),customElements.get("figspec-file-viewer")||customElements.define("figspec-file-viewer",ae),customElements.get("figspec-frame-viewer")||customElements.define("figspec-frame-viewer",ne)});function ur(e=window.React,t,r,i,o){let s,a,l;if(t===void 0){let g=e;({tagName:a,elementClass:l,events:i,displayName:o}=g),s=g.react}else s=e,l=r,a=t;let n=s.Component,c=s.createElement,d=new Set(Object.keys(i??{}));class h extends n{constructor(){super(...arguments),this.o=null}t(f){if(this.o!==null)for(let m in this.i)qr(this.o,m,this.props[m],f?f[m]:void 0,i)}componentDidMount(){var f;this.t(),(f=this.o)===null||f===void 0||f.removeAttribute("defer-hydration")}componentDidUpdate(f){this.t(f)}render(){let{_$Gl:f,...m}=this.props;this.h!==f&&(this.u=y=>{f!==null&&Jr(f,y),this.o=y,this.h=f}),this.i={};let x={ref:this.u};for(let[y,Re]of Object.entries(m))Gr.has(y)?x[y==="className"?"class":y]=Re:d.has(y)||y in l.prototype?this.i[y]=Re:x[y]=Re;return x.suppressHydrationWarning=!0,c(a,x)}}h.displayName=o??l.name;let p=s.forwardRef((g,f)=>c(h,{...g,_$Gl:f},g?.children));return p.displayName=h.displayName,p}var Gr,pt,qr,Jr,uo=v(()=>{Gr=new Set(["children","localName","ref","style","className"]),pt=new WeakMap,qr=(e,t,r,i,o)=>{let s=o?.[t];s===void 0||r===i?r==null&&t in HTMLElement.prototype?e.removeAttribute(t):e[t]=r:((a,l,n)=>{let c=pt.get(a);c===void 0&&pt.set(a,c=new Map);let d=c.get(l);n!==void 0?d===void 0?(c.set(l,d={handleEvent:n}),a.addEventListener(l,d)):d.handleEvent=n:d!==void 0&&(c.delete(l),a.removeEventListener(l,d))})(e,s,r)},Jr=(e,t)=>{typeof e=="function"?e(t):e.current=t}}),po=v(()=>{uo()}),Qr,ei,go=v(()=>{ho(),po(),Qr=ur(ce,"figspec-frame-viewer",ne,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"}),ei=ur(ce,"figspec-file-viewer",ae,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"})}),ti={};Hi(ti,{Figspec:()=>_t,default:()=>ii});function Ce(e){return e.status!==200?Promise.reject(e.statusText):e.json()}function fo(e){if(e.accessToken)return e.accessToken;try{return j.STORYBOOK_FIGMA_ACCESS_TOKEN??null}catch{return null}}function ri(e){return"absoluteBoundingBox"in e?[e]:!e.children||e.children.length===0?[]:e.children.map(ri).reduce((t,r)=>t.concat(r),[])}var gt,_t,ii,vo=v(()=>{go(),mr(),gt=C`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,_t=({config:e})=>{let[t,r]=A({state:"loading"}),i=async o=>{r({state:"loading"});try{let s=e.url.match(ft);if(!s)throw new Error(e.url+" is not a valid Figma URL.");let[,,a]=s,l=new URL(e.url).searchParams.get("node-id"),n=fo(e);if(!n)throw new Error("Personal Access Token is required.");let c={"X-FIGMA-TOKEN":n},d=new URL(`https://api.figma.com/v1/files/${a}`),h=new URL(`https://api.figma.com/v1/images/${a}`);if(h.searchParams.set("format","svg"),!l){let f=await fetch(d.href,{headers:c,signal:o}).then(y=>Ce(y)),m=ri(f.document);h.searchParams.set("ids",m.map(y=>y.id).join(","));let x=await fetch(h.href,{headers:c,signal:o}).then(y=>Ce(y));r({state:"fetched",value:{type:"file",props:{documentNode:f,renderedImages:x.images,link:e.url}}});return}d.pathname+="/nodes",d.searchParams.set("ids",l),h.searchParams.set("ids",l);let[p,g]=await Promise.all([fetch(d.href,{headers:c,signal:o}).then(f=>Ce(f)),fetch(h.href,{headers:c,signal:o}).then(f=>Ce(f))]);r({state:"fetched",value:{type:"frame",props:{nodes:p,renderedImage:Object.values(g.images)[0],link:e.url}}})}catch(s){if(s instanceof DOMException&&s.code===DOMException.ABORT_ERR)return;console.error(s),r({state:"failed",error:s instanceof Error?s.message:String(s)})}};switch(M(()=>{let o=!1,s=()=>{o=!0},a=new AbortController;return i(a.signal).then(s,s),()=>{o||a.abort()}},[e.url]),t.state){case"loading":return u(N,null,u(w,null,"Loading Figma file..."));case"failed":return u(N,null,u(w,null,"Failed to load Figma file"),u(w,null,t.error));case"fetched":return t.value.type==="file"?u(ei,{css:gt,...t.value.props}):u(Qr,{css:gt,...t.value.props})}},ii=_t}),oi="STORYBOOK_ADDON_DESIGNS",pr=oi+"/panel",Te="design",gr=class extends Oe{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.group("An error occurred during rendering Addon panel of storybook-addon-designs"),console.log("--- Error ---"),console.error(e),console.log("--- React Component Stack ---"),console.error(t.componentStack),console.groupEnd()}render(){return this.state.hasError?u(N,null,u(w,null,"Failed to render addon UI"),u(w,null,u("p",null,"Sorry, this addon has crashed due to the below error has thrown during rendering the addon UI."),u("pre",null,String(this.state.error)),u("p",null,"See console log for more details. To clear the error state, please reload the page."," ",u(ee,{href:"https://github.com/storybookjs/addon-designs/issues/new?assignees=&labels=category%3A+bug&template=bug_report.yml",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"Bug report")))):this.props.children}};mr();St();var mo=(e,t)=>{let[r,i]=A([0,0]),[o,s]=A(!1),a=k(p=>{p.button===0&&(i([p.screenX,p.screenY]),s(!0))},[s,i]),l=k(p=>{let g=p.touches[0];i([g.screenX,g.screenY]),s(!0)},[s,i]),n=k(p=>{o&&i(g=>(e([p[0]-g[0],p[1]-g[1]]),p))},[i,o,...t]),c=k(p=>{let{screenX:g,screenY:f}=p;n([g,f])},[n]),d=k(p=>{let{screenX:g,screenY:f}=p.touches[0];n([g,f])},[i,o,...t]),h=k(()=>{i([0,0]),s(!1)},[s,i]);return{onMouseDown:a,onMouseMove:c,onMouseUp:h,onMouseLeave:h,onTouchStart:l,onTouchMove:d,onTouchCancel:h,onTouchEnd:h}},yo=({children:e,className:t,style:r,defaultValue:i,value:o,onChange:s})=>{let[a,l]=A([0,0]);M(()=>{l(i||o||[0,0])},[i]);let n=mo(d=>{s&&s(d),l(h=>[h[0]+d[0],h[1]+d[1]])},[l,s]),c=W(()=>{let d=o||a;return{transform:`translate(${d[0]}px, ${d[1]}px)`}},[o,a]);return u("div",{css:bo,className:t,style:r,...n},u("div",{css:$o,style:c},e))},bo=C`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`,$o=C`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,wo=({onZoomIn:e,onZoomOut:t,onReset:r})=>u(w,null,u(he,{onClick:e},u(ue,{icon:"zoom"})),u(he,{onClick:t},u(ue,{icon:"zoomout"})),u(he,{onClick:r},u(ue,{icon:"zoomreset"}))),xo=(e,t)=>{let[r,i]=A(1);M(()=>{i(e)},t);let o=k(()=>{i(l=>l+.1)},[i]),s=k(()=>{i(l=>Math.max(l-.1,.1))},[i]),a=k(()=>{i(1)},[i]);return{scale:r,zoomIn:o,zoomOut:s,resetZoom:a}},_o=({config:e})=>{let t=xo(e.scale||1,[e.scale]),r=W(()=>({transform:`scale(${t.scale})`}),[t.scale]);return u("div",{css:So},u(Tt,{border:!0},u(w,{key:"left"},u("p",null,u("b",null,"Image")),u(Mt,null),u(wo,{onReset:t.resetZoom,onZoomIn:t.zoomIn,onZoomOut:t.zoomOut}))),u(yo,{css:Eo,defaultValue:e.offset},u("img",{css:ko,src:e.url,style:r})))},So=C`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,Eo=C`
  flex-grow: 1;
`,ko=C`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`,Ao=({config:e})=>u("div",{css:Co},u(ee,{cancel:!1,href:e.url,target:e.target??"_blank",rel:e.rel??"noopener",withArrow:e.showArrow??!0},e.label||e.url)),Co=C`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;St();var To=e=>{if(e.protocol!=="https:")return{valid:!1,error:u(w,null,"Expected HTTPS link, received ",u("code",null,e.protocol),".")};if(e.hostname!=="www.sketch.com")return{valid:!1,error:u(w,null,"Expected a hostname ",u("code",null,"www.sketch.com"),", received"," ",u("code",null,e.hostname))};let t=u(w,null,"Expected pathname ",u("code",null,"/s/<string>/a/<string>"),", received"," ",u("code",null,e.pathname),"."),r=e.pathname.split("/").slice(1);if(r.length<4)return{valid:!1,error:t};if(r[0]==="embed")return{valid:!0,data:{url:e.href,offscreen:!1}};let[i,o,s,a]=r;return i!=="s"||!o||s!=="a"||!a?{valid:!1,error:t}:{valid:!0,data:{url:`https://www.sketch.com/embed/s/${o}/a/${a}`,offscreen:!1}}},Mo=({config:e})=>{let t=W(()=>{let r=To(new URL(e.url));return r.valid?{...r,data:{...e,...r.data}}:r},[e]);return t.valid?u(Be,{defer:!0,config:t.data}):u(N,null,u(w,null,"Invalid Sketch URL"),u(w,null,t.error))},Po=({tabs:e,deps:t=[]})=>{let[r,i]=A(e[0].id);return M(()=>{i(e[0].id)},t),u(Pt,{absolute:!0,selected:r,actions:{onSelect:i}},e.map(o=>u("div",{key:o.id,id:o.id,title:o.name},o.offscreen||r===o.id?o.content:null)))},Bo=He(()=>Promise.resolve().then(()=>(vo(),ti))),No=({config:e})=>{if(!e||"length"in e&&e.length===0)return u(N,null,u(w,null,"No designs found"),u(w,null,"Learn how to"," ",u(ee,{href:"https://github.com/storybookjs/addon-designs#3-add-it-to-story",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"display design preview for the story")));let t=[...e instanceof Array?e:[e]].map(r=>{let i={id:JSON.stringify(r),name:r.name||r.type?.toUpperCase()||"ERROR",offscreen:r.offscreen??!0};switch(r.type){case"iframe":return{...i,content:u(Be,{config:r})};case"figma":return{...i,content:u(vr,{config:r}),offscreen:!1};case"sketch":return{...i,content:u(Mo,{config:r})};case"figspec":case"experimental-figspec":return r.type==="experimental-figspec"&&console.warn("[storybook-addon-designs] `experimental-figspec` is deprecated. We will remove it in v7.0. Please replace it to `figspec` type."),{...i,content:u(Le,{fallback:"Preparing Figspec viewer..."},u(Bo,{config:r})),offscreen:!1};case"image":return{...i,content:u(_o,{config:r})};case"link":return{...i,content:u(Ao,{config:r})}}return{...i,content:u(N,null,u(w,null,"Invalid config type"),u(w,null,"Config type you set is not supported. Please choose one from"," ",u(ee,{href:"https://github.com/storybookjs/addon-designs/blob/master/packages/storybook-addon-designs/src/config.ts",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"available config types")))}});return t.length===1?u("div",null,t[0].content):u(Po,{tabs:t,deps:[e]})},fr=({active:e})=>{let t=Bt(),r=je(Te),[i,o]=A(e);return M(()=>{o(e)},[r]),M(()=>{e&&o(!0)},[e]),i?u(No,{key:t.storyId,config:r}):null},se="Design";function Ro(e){pe.register(oi,t=>{let r=function(){let i=je(Te);return i?Array.isArray(i)?i.length>0?`${se} (${i.length})`:se:(i.name||se)+" (1)":se};e==="tab"?pe.add(pr,{title:se,render({active:i}){return i?u(gr,null,u(fr,{active:!0})):u("noscript",null)},type:ze.TAB,paramKey:Te}):pe.add(pr,{type:ze.PANEL,title:r,paramKey:Te,render({active:i}){return u(Ct,{active:!!i},u(gr,null,u(fr,{active:!!i})))}})})}Ro("panel");})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
