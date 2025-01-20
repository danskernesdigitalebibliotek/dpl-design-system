try{
(()=>{var bo=Object.defineProperty;var xo=(o,e)=>{for(var t in e)bo(o,t,{get:e[t],enumerable:!0})};var g={NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."};var le={};xo(le,{Children:()=>wo,Component:()=>Ee,Fragment:()=>$,Profiler:()=>So,PureComponent:()=>Eo,StrictMode:()=>Ao,Suspense:()=>Ae,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>Co,cloneElement:()=>Mo,createContext:()=>ko,createElement:()=>To,createFactory:()=>Po,createRef:()=>No,default:()=>_o,forwardRef:()=>Ro,isValidElement:()=>Oo,lazy:()=>Ce,memo:()=>Bo,startTransition:()=>Lo,unstable_act:()=>Ho,useCallback:()=>k,useContext:()=>Io,useDebugValue:()=>Fo,useDeferredValue:()=>zo,useEffect:()=>N,useId:()=>Uo,useImperativeHandle:()=>Do,useInsertionEffect:()=>jo,useLayoutEffect:()=>Vo,useMemo:()=>V,useReducer:()=>Yo,useRef:()=>Wo,useState:()=>T,useSyncExternalStore:()=>Go,useTransition:()=>Zo,version:()=>qo});var _o=__REACT__,{Children:wo,Component:Ee,Fragment:$,Profiler:So,PureComponent:Eo,StrictMode:Ao,Suspense:Ae,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Co,cloneElement:Mo,createContext:ko,createElement:To,createFactory:Po,createRef:No,forwardRef:Ro,isValidElement:Oo,lazy:Ce,memo:Bo,startTransition:Lo,unstable_act:Ho,useCallback:k,useContext:Io,useDebugValue:Fo,useDeferredValue:zo,useEffect:N,useId:Uo,useImperativeHandle:Do,useInsertionEffect:jo,useLayoutEffect:Vo,useMemo:V,useReducer:Yo,useRef:Wo,useState:T,useSyncExternalStore:Go,useTransition:Zo,version:qo}=__REACT__;var Kr=__STORYBOOK_THEMING__,{CacheProvider:Jr,ClassNames:Qr,Global:ei,ThemeProvider:ti,background:oi,color:ri,convert:ii,create:si,createCache:ni,createGlobal:ai,createReset:li,css:P,darken:ci,ensure:di,ignoreSsrWarning:hi,isPropValid:pi,jsx:p,keyframes:ui,lighten:fi,styled:gi,themes:mi,typography:vi,useTheme:yi,withTheme:bi}=__STORYBOOK_THEMING__;var Si=__STORYBOOK_COMPONENTS__,{A:Ei,ActionBar:Ai,AddonPanel:it,Badge:Ci,Bar:Mi,Blockquote:ki,Button:Ti,ClipboardCode:Pi,Code:Ni,DL:Ri,Div:Oi,DocumentWrapper:Bi,EmptyTabContent:Li,ErrorFormatter:Hi,FlexBar:st,Form:Ii,H1:Fi,H2:zi,H3:Ui,H4:Di,H5:ji,H6:Vi,HR:Yi,IconButton:ce,IconButtonSkeleton:Wi,Icons:de,Img:Gi,LI:Zi,Link:K,ListItem:qi,Loader:Xi,Modal:Ki,OL:Ji,P:Qi,Placeholder:I,Pre:es,ProgressSpinner:ts,ResetWrapper:os,ScrollArea:rs,Separator:nt,Spaced:is,Span:ss,StorybookIcon:ns,StorybookLogo:as,Symbols:ls,SyntaxHighlighter:cs,TT:ds,TabBar:hs,TabButton:ps,TabWrapper:us,Table:fs,Tabs:at,TabsState:gs,TooltipLinkList:ms,TooltipMessage:vs,TooltipNote:ys,UL:bs,WithTooltip:xs,WithTooltipPure:$s,Zoom:_s,codeCommon:ws,components:Ss,createCopyToClipboardFunction:Es,getStoryHref:As,icons:Cs,interleaveSeparators:Ms,nameSpaceClassNames:ks,resetComponents:Ts,withReset:Ps}=__STORYBOOK_COMPONENTS__;var he=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Me=Symbol(),lt=new WeakMap,J=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Me)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(he&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=lt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&lt.set(t,e))}return e}toString(){return this.cssText}},ct=o=>new J(typeof o=="string"?o:o+"",void 0,Me),S=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((r,i,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new J(t,o,Me)},ke=(o,e)=>{he?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let r=document.createElement("style"),i=window.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,o.appendChild(r)})},pe=he?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return ct(t)})(o):o;var Te,dt=window.trustedTypes,Xo=dt?dt.emptyScript:"",ht=window.reactiveElementPolyfillSupport,Ne={toAttribute(o,e){switch(e){case Boolean:o=o?Xo:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},pt=(o,e)=>e!==o&&(e==e||o==o),Pe={attribute:!0,type:String,converter:Ne,reflect:!1,hasChanged:pt},B=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,r)=>{let i=this._$Ep(r,t);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,t=Pe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){let s=this[e];this[t]=i,this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Pe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of r)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)t.unshift(pe(i))}else e!==void 0&&t.push(pe(e));return t}static _$Ep(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ke(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=Pe){var i,s;let n=this.constructor._$Ep(e,r);if(n!==void 0&&r.reflect===!0){let d=((s=(i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&s!==void 0?s:Ne.toAttribute)(t,r.type);this._$El=e,d==null?this.removeAttribute(n):this.setAttribute(n,d),this._$El=null}}_$AK(e,t){var r,i;let s=this.constructor,n=s._$Ev.get(e);if(n!==void 0&&this._$El!==n){let d=s.getPropertyOptions(n),a=d.converter,c=(i=(r=a?.fromAttribute)!==null&&r!==void 0?r:typeof a=="function"?a:null)!==null&&i!==void 0?i:Ne.fromAttribute;this._$El=n,this[n]=c(t,d.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||pt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};B.finalized=!0,B.elementProperties=new Map,B.elementStyles=[],B.shadowRootOptions={mode:"open"},ht?.({ReactiveElement:B}),((Te=globalThis.reactiveElementVersions)!==null&&Te!==void 0?Te:globalThis.reactiveElementVersions=[]).push("1.3.3");var Re,W=globalThis.trustedTypes,ut=W?W.createPolicy("lit-html",{createHTML:o=>o}):void 0,F=`lit$${(Math.random()+"").slice(9)}$`,xt="?"+F,Ko=`<${xt}>`,G=document,ee=(o="")=>G.createComment(o),te=o=>o===null||typeof o!="object"&&typeof o!="function",$t=Array.isArray,Jo=o=>{var e;return $t(o)||typeof((e=o)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,gt=/>/g,D=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,mt=/'/g,vt=/"/g,_t=/^(?:script|style|textarea|title)$/i,wt=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),b=wt(1),E=wt(2),L=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),yt=new WeakMap,St=(o,e,t)=>{var r,i;let s=(r=t?.renderBefore)!==null&&r!==void 0?r:e,n=s._$litPart$;if(n===void 0){let d=(i=t?.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=n=new re(e.insertBefore(ee(),d),d,void 0,t??{})}return n._$AI(o),n},Y=G.createTreeWalker(G,129,null,!1),Qo=(o,e)=>{let t=o.length-1,r=[],i,s=e===2?"<svg>":"",n=Q;for(let a=0;a<t;a++){let c=o[a],l,h,u=-1,f=0;for(;f<c.length&&(n.lastIndex=f,h=n.exec(c),h!==null);)f=n.lastIndex,n===Q?h[1]==="!--"?n=ft:h[1]!==void 0?n=gt:h[2]!==void 0?(_t.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=D):h[3]!==void 0&&(n=D):n===D?h[0]===">"?(n=i??Q,u=-1):h[1]===void 0?u=-2:(u=n.lastIndex-h[2].length,l=h[1],n=h[3]===void 0?D:h[3]==='"'?vt:mt):n===vt||n===mt?n=D:n===ft||n===gt?n=Q:(n=D,i=void 0);let y=n===D&&o[a+1].startsWith("/>")?" ":"";s+=n===Q?c+Ko:u>=0?(r.push(l),c.slice(0,u)+"$lit$"+c.slice(u)+F+y):c+F+(u===-2?(r.push(void 0),a):y)}let d=s+(o[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ut!==void 0?ut.createHTML(d):d,r]},oe=class o{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let s=0,n=0,d=e.length-1,a=this.parts,[c,l]=Qo(e,t);if(this.el=o.createElement(c,r),Y.currentNode=this.el.content,t===2){let h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(i=Y.nextNode())!==null&&a.length<d;){if(i.nodeType===1){if(i.hasAttributes()){let h=[];for(let u of i.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(F)){let f=l[n++];if(h.push(u),f!==void 0){let y=i.getAttribute(f.toLowerCase()+"$lit$").split(F),x=/([.?@])?(.*)/.exec(f);a.push({type:1,index:s,name:x[2],strings:y,ctor:x[1]==="."?Be:x[1]==="?"?Le:x[1]==="@"?He:q})}else a.push({type:6,index:s})}for(let u of h)i.removeAttribute(u)}if(_t.test(i.tagName)){let h=i.textContent.split(F),u=h.length-1;if(u>0){i.textContent=W?W.emptyScript:"";for(let f=0;f<u;f++)i.append(h[f],ee()),Y.nextNode(),a.push({type:2,index:++s});i.append(h[u],ee())}}}else if(i.nodeType===8)if(i.data===xt)a.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(F,h+1))!==-1;)a.push({type:7,index:s}),h+=F.length-1}s++}}static createElement(e,t){let r=G.createElement("template");return r.innerHTML=e,r}};function Z(o,e,t=o,r){var i,s,n,d;if(e===L)return e;let a=r!==void 0?(i=t._$Cl)===null||i===void 0?void 0:i[r]:t._$Cu,c=te(e)?void 0:e._$litDirective$;return a?.constructor!==c&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),c===void 0?a=void 0:(a=new c(o),a._$AT(o,t,r)),r!==void 0?((n=(d=t)._$Cl)!==null&&n!==void 0?n:d._$Cl=[])[r]=a:t._$Cu=a),a!==void 0&&(e=Z(o,a._$AS(o,e.values),a,r)),e}var Oe=class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;let{el:{content:r},parts:i}=this._$AD,s=((t=e?.creationScope)!==null&&t!==void 0?t:G).importNode(r,!0);Y.currentNode=s;let n=Y.nextNode(),d=0,a=0,c=i[0];for(;c!==void 0;){if(d===c.index){let l;c.type===2?l=new re(n,n.nextSibling,this,e):c.type===1?l=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(l=new Ie(n,this,e)),this.v.push(l),c=i[++a]}d!==c?.index&&(n=Y.nextNode(),d++)}return s}m(e){let t=0;for(let r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},re=class o{constructor(e,t,r,i){var s;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cg=(s=i?.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),te(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==L&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Jo(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==_&&te(this._$AH)?this._$AA.nextSibling.data=e:this.k(G.createTextNode(e)),this._$AH=e}T(e){var t;let{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=oe.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.m(r);else{let n=new Oe(s,this),d=n.p(this.options);n.m(r),this.k(d),this._$AH=n}}_$AC(e){let t=yt.get(e.strings);return t===void 0&&yt.set(e.strings,t=new oe(e)),t}S(e){$t(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let s of e)i===t.length?t.push(r=new o(this.M(ee()),this.M(ee()),this,this.options)):r=t[i],r._$AI(s),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},q=class{constructor(e,t,r,i,s){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=_}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){let s=this.strings,n=!1;if(s===void 0)e=Z(this,e,t,0),n=!te(e)||e!==this._$AH&&e!==L,n&&(this._$AH=e);else{let d=e,a,c;for(e=s[0],a=0;a<s.length-1;a++)c=Z(this,d[r+a],t,a),c===L&&(c=this._$AH[a]),n||(n=!te(c)||c!==this._$AH[a]),c===_?e=_:e!==_&&(e+=(c??"")+s[a+1]),this._$AH[a]=c}n&&!i&&this.C(e)}C(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Be=class extends q{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===_?void 0:e}},er=W?W.emptyScript:"",Le=class extends q{constructor(){super(...arguments),this.type=4}C(e){e&&e!==_?this.element.setAttribute(this.name,er):this.element.removeAttribute(this.name)}},He=class extends q{constructor(e,t,r,i,s){super(e,t,r,i,s),this.type=5}_$AI(e,t=this){var r;if((e=(r=Z(this,e,t,0))!==null&&r!==void 0?r:_)===L)return;let i=this._$AH,s=e===_&&i!==_||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==_&&(i===_||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Ie=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}};var bt=window.litHtmlPolyfillSupport;bt?.(oe,re),((Re=globalThis.litHtmlVersions)!==null&&Re!==void 0?Re:globalThis.litHtmlVersions=[]).push("2.2.6");var Fe,ze;var R=class extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=St(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return L}};R.finalized=!0,R._$litElement$=!0,(Fe=globalThis.litElementHydrateSupport)===null||Fe===void 0||Fe.call(globalThis,{LitElement:R});var Et=globalThis.litElementPolyfillSupport;Et?.({LitElement:R});((ze=globalThis.litElementVersions)!==null&&ze!==void 0?ze:globalThis.litElementVersions=[]).push("3.2.1");var tr=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}};function w(o){return(e,t)=>t!==void 0?((r,i,s)=>{i.constructor.createProperty(s,r)})(o,e,t):tr(o,e)}var Ue,Xn=((Ue=window.HTMLSlotElement)===null||Ue===void 0?void 0:Ue.prototype.assignedElements)!=null?(o,e)=>o.assignedElements(e):(o,e)=>o.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);var H=({title:o,children:e})=>b`
  <div class="error-background">
    <div class="error-container">
      <span class="error-title"
        ><span class="error-badge">Error</span>${o}</span
      >
      <span class="error-description">${e}</span>
    </div>
  </div>
`,At=S`
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
`;var Ct={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Mt=o=>(...e)=>({_$litDirective$:o,values:e}),ue=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var j=Mt(class extends ue{constructor(o){var e;if(super(o),o.type!==Ct.ATTRIBUTE||o.name!=="style"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let r=o[t];return r==null?e:e+`${t=t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[e]){let{style:t}=o.element;if(this.ct===void 0){this.ct=new Set;for(let r in e)this.ct.add(r);return this.render(e)}this.ct.forEach(r=>{e[r]==null&&(this.ct.delete(r),r.includes("-")?t.removeProperty(r):t[r]="")});for(let r in e){let i=e[r];i!=null&&(this.ct.add(r),r.includes("-")?t.setProperty(r,i):t[r]=i)}return L}});function kt(o){return{top:o.y,right:o.x+o.width,bottom:o.y+o.height,left:o.x}}function Pt(o,e){let t=kt(o),r=kt(e),i=!(t.top>r.bottom||t.bottom<r.top),s=!(t.left>r.right||t.right<r.left);if(s&&i){let l={x:(Math.max(t.left,r.left)+Math.min(t.right,r.right))/2,y:(Math.max(t.top,r.top)+Math.min(t.bottom,r.bottom))/2};return[{points:[{x:t.left,y:l.y},{x:r.left,y:l.y}]},{points:[{x:t.right,y:l.y},{x:r.right,y:l.y}]},{points:[{y:t.top,x:l.x},{y:r.top,x:l.x}]},{points:[{y:t.bottom,x:l.x},{y:r.bottom,x:l.x}]}]}let n=t.left>r.right,d=t.top>r.bottom,a={x:o.x+o.width/2,y:o.y+o.height/2};return[s?null:{points:[{x:n?t.left:t.right,y:a.y},{x:n?r.right:r.left,y:a.y}],bisector:i?void 0:[{x:n?r.right:r.left,y:a.y},{x:n?r.right:r.left,y:d?r.bottom:r.top}]},i?null:{points:[{y:d?t.top:t.bottom,x:a.x},{y:d?r.bottom:r.top,x:a.x}],bisector:s?void 0:[{y:d?r.bottom:r.top,x:a.x},{y:d?r.bottom:r.top,x:n?r.right:r.left}]}].filter(l=>!!l)}function se(o){return Math.round(o*100)/100}function fe(o,e){return[...Tt(o),...Tt(e)]}function Tt(o){return o?o instanceof Array?o:[o]:[]}var or=function(o,e,t,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var d=o.length-1;d>=0;d--)(n=o[d])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},Nt=o=>{class e extends o{constructor(...r){super(...r),this.selectedNode=null}updated(r){super.updated(r),r.has("selectedNode")&&this.dispatchEvent(new CustomEvent("nodeselect",{detail:{selectedNode:this.selectedNode}}))}}return or([w({attribute:!1})],e.prototype,"selectedNode",void 0),e};function ge(o){return o.touches.length===0||o.touches.length>2}function rr(o,e){return Math.sqrt(Math.pow(o.x-e.x,2)+Math.pow(o.y-e.y,2))}var Rt=o=>class extends o{constructor(...t){super(...t),this.previousTouches=null,this.addEventListener("touchstart",r=>{ge(r)||(r.preventDefault(),this.previousTouches=r.touches)}),this.addEventListener("touchend",r=>{ge(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchcancel",r=>{ge(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchmove",r=>{if(ge(r))return;let i=Array.from(this.previousTouches||[]),s=Array.from(r.touches);if(this.previousTouches=r.touches,!(s.length!==i.length||!s.every(n=>i.some(d=>d.identifier===n.identifier)))){if(s.length===1){this.onTouchPan({x:s[0].pageX-i[0].pageX,y:s[0].pageY-i[0].pageY});return}this.onTouchPinch(rr({x:s[0].pageX,y:s[0].pageY},{x:i[0].pageX,y:i[0].pageY}))}})}get isTouching(){return!!(this.previousTouches&&this.previousTouches.length>0)}onTouchPan(t){}onTouchPinch(t){}};var ne=function(o,e,t,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var d=o.length-1;d>=0;d--)(n=o[d])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},O=function(o,e){if(!e.has(o))throw new TypeError("attempted to get private field on non-instance");return e.get(o)},Ot=function(o,e,t){if(!e.has(o))throw new TypeError("attempted to set private field on non-instance");return e.set(o,t),t},Bt=o=>{var e,t,r,i,s;class n extends Rt(o){constructor(...a){super(...a),this.panX=0,this.panY=0,this.scale=1,this.zoomSpeed=500,this.panSpeed=500,e.set(this,!1),t.set(this,(l,h)=>{this.panX+=l/this.scale/window.devicePixelRatio,this.panY+=h/this.scale/window.devicePixelRatio}),r.set(this,l=>{l.code==="Space"&&!O(this,e)&&(Ot(this,e,!0),document.body.style.cursor="grab")}),i.set(this,l=>{l.code==="Space"&&O(this,e)&&(Ot(this,e,!1),document.body.style.cursor="auto")}),s.set(this,()=>{document.addEventListener("keyup",O(this,i)),document.addEventListener("keydown",O(this,r))}),this.addEventListener("wheel",l=>{if(this.isMovable)if(l.preventDefault(),l.ctrlKey){let{deltaY:h}=l;l.deltaMode===1&&(h*=15);let u=this.scale;this.scale*=1-h/((1e3-this.zoomSpeed)*.5);let f=l.offsetX-this.offsetWidth/2,y=l.offsetY-this.offsetHeight/2;this.panX+=f/this.scale-f/u,this.panY+=y/this.scale-y/u}else{let h=this.panSpeed*.002;this.panX-=l.deltaX*h/this.scale,this.panY-=l.deltaY*h/this.scale}},{passive:!1});let c=1;this.addEventListener("gesturestart",l=>{l.preventDefault(),c=this.scale}),this.addEventListener("gesturechange",l=>{let h=l;h.preventDefault(),this.scale=c*h.scale}),this.addEventListener("pointermove",l=>{l.buttons&4&&(l.preventDefault(),O(this,t).call(this,l.movementX,l.movementY))}),O(this,s).call(this),this.onmousedown=()=>{O(this,e)&&(document.body.style.cursor="grabbing",this.onmousemove=({movementX:l,movementY:h})=>{O(this,t).call(this,l,h)},this.onmouseup=()=>{document.body.style.cursor="grab",this.onmousemove=null,this.onmouseup=null})}}get isMovable(){return!0}get canvasTransform(){return[`scale(${this.scale})`,`translate(${this.panX}px, ${this.panY}px)`]}disconnectedCallback(){document.removeEventListener("keyup",O(this,i)),document.removeEventListener("keydown",O(this,r)),super.disconnectedCallback()}updated(a){super.updated(a),a.has("scale")&&this.dispatchEvent(new CustomEvent("scalechange",{detail:{scale:this.scale}})),(a.has("panX")||a.has("panY"))&&this.dispatchEvent(new CustomEvent("positionchange",{detail:{x:this.panX,y:this.panY}}))}onTouchPan(a){this.panX+=a.x/this.scale,this.panY+=a.y/this.scale}onTouchPinch(a){this.scale*=1-a/1e3}}return e=new WeakMap,t=new WeakMap,r=new WeakMap,i=new WeakMap,s=new WeakMap,ne([w({attribute:!1})],n.prototype,"panX",void 0),ne([w({attribute:!1})],n.prototype,"panY",void 0),ne([w({attribute:!1})],n.prototype,"scale",void 0),ne([w({type:Number,attribute:"zoom-speed"})],n.prototype,"zoomSpeed",void 0),ne([w({type:Number,attribute:"pan-speed"})],n.prototype,"panSpeed",void 0),n};var ir=({guide:o,reverseScale:e})=>{let t=Math.abs(o.points[0].x-o.points[1].x),r=Math.abs(o.points[0].y-o.points[1].y);return t===0&&r===0?null:E`
    <line
      class="distance-line"
      x1=${o.points[0].x}
      y1=${o.points[0].y}
      x2=${o.points[1].x}
      y2=${o.points[1].y}
    />

    ${o.bisector&&E`
        <line
          class="distance-line"
          x1=${o.bisector[0].x}
          y1=${o.bisector[0].y}
          x2=${o.bisector[1].x}
          y2=${o.bisector[1].y}
          style=${j({strokeDasharray:`${4*e}`})}
          shape-rendering="geometricPrecision"
          fill="none"
        />
      `}
  `},sr=({guide:o,reverseScale:e,fontSize:t})=>{let r=Math.abs(o.points[0].x-o.points[1].x),i=Math.abs(o.points[0].y-o.points[1].y);if(r===0&&i===0)return null;let s=se(Math.max(r,i)).toString(10),n=s.length*t*.5,d=t*.25,a=t*.25,c=t*.5,l=r>i?(o.points[0].x+o.points[1].x)/2-n/2:o.points[0].x,h=r>i?o.points[0].y:(o.points[0].y+o.points[1].y)/2-t/2,u=[`scale(${e})`,r>i?`translate(0, ${d+a})`:`translate(${d+c}, 0)`].join(" "),f=l+n/2,y=h+t/2,x=r>i?`${f} ${h}`:`${l} ${y}`;return E`
    <g class="distance-tooltip">
      <rect
        x=${l-c}
        y=${h-a}
        rx="2"
        width=${n+c*2}
        height=${t+a*2}
        transform=${u}
        transform-origin=${x}
        stroke="none"
      />

      <text
        x=${f}
        y=${h+t-a/2}
        text-anchor="middle"
        transform=${u}
        transform-origin=${x}
        stroke="none"
        fill="white"
        style="font-size: ${t}px"
      >
        ${s}
      </text>
    </g>
  `},Lt=new Map,Ht=({node:o,distanceTo:e,reverseScale:t,fontSize:r})=>{let i=o.id+`
`+e.id,s=Lt.get(i);return s||(s=Pt(o.absoluteBoundingBox,e.absoluteBoundingBox),Lt.set(i,s)),[...s.map(n=>ir({guide:n,reverseScale:t})),...s.map(n=>sr({guide:n,reverseScale:t,fontSize:r}))]},It=S`
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
`;var Ft=({onClick:o=()=>{}})=>E`
  <svg @click=${o} title="close icon" width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path d="M1 19L19 1M19 19L1 1" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,je=({onClick:o=()=>{}})=>E`
  <svg @click=${o} title="copy icon" width="14" height="14" viewBox="0 0 30 30" fill="none">
  <path d="M21 25.5C21 24.9477 20.5523 24.5 20 24.5C19.4477 24.5 19 24.9477 19 25.5H21ZM13 2H25V0H13V2ZM28 5V21H30V5H28ZM25 24H13V26H25V24ZM10 21V5H8V21H10ZM13 24C11.3431 24 10 22.6569 10 21H8C8 23.7614 10.2386 26 13 26V24ZM28 21C28 22.6569 26.6569 24 25 24V26C27.7614 26 30 23.7614 30 21H28ZM25 2C26.6569 2 28 3.34315 28 5H30C30 2.23858 27.7614 0 25 0V2ZM13 0C10.2386 0 8 2.23858 8 5H10C10 3.34315 11.3431 2 13 2V0ZM16.5 28H5V30H16.5V28ZM2 25V10H0V25H2ZM5 28C3.34315 28 2 26.6569 2 25H0C0 27.7614 2.23858 30 5 30V28ZM5 7H8V5H5V7ZM2 10C2 8.34315 3.34315 7 5 7V5C2.23858 5 0 7.23858 0 10H2ZM16.5 30C18.9853 30 21 27.9853 21 25.5H19C19 26.8807 17.8807 28 16.5 28V30Z" fill="#B3B3B3"/>
</svg>
`,zt=()=>E`
  <svg title="horizontal padding" width="14" height="14" viewBox="0 0 29 28" fill="none">
    <rect x="7" y="8" width="14" height="14" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M27 1V28" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 0V28" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,Ut=()=>E`
  <svg title="vertical padding" width="14" height="14" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="21" width="14" height="14" transform="rotate(-90 8 21)" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 1L28 0.999999" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M0 27L28 27" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,Dt=()=>E`
  <svg title="figma logo" width="11" height="16" viewBox="0 0 12 17" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.5 1.5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm-5 2c0 1.043.533 1.963 1.341 2.5C1.033 6.537.5 7.457.5 8.5c0 1.043.533 1.963 1.341 2.5C1.033 11.537.5 12.457.5 13.5c0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3V10.736c.53.475 1.232.764 2 .764 1.657 0 3-1.343 3-3 0-1.043-.533-1.963-1.341-2.5.808-.537 1.341-1.457 1.341-2.5 0-1.657-1.343-3-3-3h-5c-1.657 0-3 1.343-3 3zm1 5c0-1.105.895-2 2-2h2v4h-2c-1.105 0-2-.895-2-2zm0 5c0-1.105.895-2 2-2h2v2c0 1.105-.895 2-2 2-1.105 0-2-.895-2-2zm7-3c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2 1.105 0 2 .895 2 2 0 1.105-.895 2-2 2zm0-5h-2v-4h2c1.105 0 2 .895 2 2 0 1.105-.895 2-2 2z"
      fill-rule="evenodd"
      fill-opacity="1"
      fill="#000"
      stroke="none"
    ></path>
  </svg>
`;var X=o=>o.a===0?"transparent":o.a<1?`rgba(${jt(o).join(", ")}, ${o.a.toFixed(2)})`:lr(o),ar=o=>new Ve(o).cssColor,Ve=class{constructor(e){this.gradientHandles={start:e.gradientHandlePositions[0],end:e.gradientHandlePositions[1]},this.colors=e.gradientStops,this.colorObjects=this.createColorObjects(this.colors),this.angle=this.calculateAngle(this.gradientHandles.start,this.gradientHandles.end)}get cssGradientArray(){return this.colorObjects.map((e,t)=>{let r=this.floatToPercent(this.colors[t].position);return e+" "+r})}get cssColor(){let e=this.cssGradientArray;return e.unshift(this.angle+"deg"),`linear-gradient(${e.join(", ")})`}createColorObjects(e){return e.map(({color:t})=>X(t))}floatToPercent(e){return(e*=100).toFixed(0)+"%"}calculateAngle(e,t){let r=Math.atan(this.calculateGradient(e,t));return parseInt(this.radToDeg(r).toFixed(1))}calculateGradient(e,t){return(t.y-e.y)/(t.x-e.x)*-1}radToDeg(e){return 180*e/Math.PI}},me=class{constructor(e){var t,r,i;if(this.hasPadding=!1,this.height=`${Math.trunc(e.absoluteBoundingBox.height)}px`,this.width=`${Math.trunc(e.absoluteBoundingBox.width)}px`,(e.horizontalPadding||e.verticalPadding)&&(this.hasPadding=!0,this.horizontalPadding=`${e.horizontalPadding}px`,this.verticalPadding=`${e.verticalPadding}px`),e.style&&(this.fontFamily=e.style.fontFamily,this.fontPostScriptName=(t=e.style.fontPostScriptName)===null||t===void 0?void 0:t.replace("-"," "),this.fontWeight=e.style.fontWeight,this.fontSize=`${Math.ceil(e.style.fontSize)}px`,this.lineHeight=`${Math.trunc(e.style.lineHeightPx)}px`),e.rectangleCornerRadii&&(this.borderRadius=e.rectangleCornerRadii.filter(n=>n===e.cornerRadius).length<4?`${e.rectangleCornerRadii.join("px ")}px`:`${e.cornerRadius}px`),e.backgroundColor||e.backgroundColor){let n=e.backgroundColor||((r=e.background)===null||r===void 0?void 0:r[0].color);this.background=X(n)}let s=(i=e.fills)===null||i===void 0?void 0:i[0];if(s&&s.visible!==!1&&(e.type==="TEXT"?this.color=X(s.color):s.type.includes("GRADIENT")?this.backgroundImage=ar(s):s.type==="SOLID"&&(this.background=X(s.color))),e.strokes&&e.strokes.length>0&&(this.borderColor=X(e.strokes[0].color),this.border=`${e.strokeWeight}px solid ${this.borderColor}`),e.effects&&e.effects.length>0){let{offset:n,radius:d,color:a}=e.effects[0];this.boxShadowColor=X(a),this.boxShadow=`${n?.x||0}px ${n?.y||0}px 0 ${d} ${this.boxShadowColor}`}}getStyles(){return[this.height&&{property:"height",value:this.height},this.width&&{property:"width",value:this.width},this.fontFamily&&{property:"font-family",value:this.fontFamily},this.fontSize&&{property:"font-size",value:this.fontSize},this.fontWeight&&{property:"font-weight",value:this.fontWeight},this.lineHeight&&{property:"line-height",value:this.lineHeight},this.borderRadius&&{property:"border-radius",value:this.borderRadius},this.backgroundImage&&{property:"background-image",value:this.backgroundImage},this.boxShadow&&{property:"box-shadow",value:this.boxShadow,color:this.boxShadowColor},this.border&&{property:"border",value:this.border,color:this.borderColor},this.background&&{property:"background",value:this.background,color:this.background},this.color&&{property:"color",value:this.color,color:this.color}].filter(Boolean)}getStyleSheet(){return this.getStyles().map(Ye).join(`
`)}},jt=o=>[Math.trunc(255*o.r),Math.trunc(255*o.g),Math.trunc(255*o.b)],lr=o=>{let[e,t,r]=jt(o);return"#"+((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)},Ye=({property:o,value:e})=>`${o}: ${e};`;var cr=function(o,e,t,r){function i(s){return s instanceof t?s:new t(function(n){n(s)})}return new(t||(t=Promise))(function(s,n){function d(l){try{c(r.next(l))}catch(h){n(h)}}function a(l){try{c(r.throw(l))}catch(h){n(h)}}function c(l){l.done?s(l.value):i(l.value).then(d,a)}c((r=r.apply(o,e||[])).next())})},We=o=>cr(void 0,void 0,void 0,function*(){yield navigator.clipboard.writeText(o)}),Vt=({node:o,onClose:e})=>{if(!o)return null;let t=new me(o),r=i=>i.stopPropagation();return b`
    <div
      class="inspector-view"
      @click=${r}
      @wheel=${r}
      @keydown=${r}
      @keyup=${r}
      @pointermove=${r}
    >
      <div class="inspector-section selectable-content">
        <div class="title-section">
          <h4>${o.name}</h4>
          ${Ft({onClick:e})}
        </div>
        <div class="properties-overview">
          <div class="title-section">
            <p class="inspector-property">
              <span>W: </span>${t.width}
            </p>
            <p class="inspector-property" style="margin-left: 16px;">
              <span>H: </span>${t.height}
            </p>
          </div>
          ${t.fontPostScriptName?b`<p class="inspector-property">
                <span>Font:</span>
                ${t.fontPostScriptName}
              </p>`:null}
        </div>
      </div>
      ${t.hasPadding?b`<div class="inspector-section">
            <h4>Layout</h4>
            ${t.horizontalPadding&&b`<p class="inspector-property">
              ${zt()} ${t.horizontalPadding}
            </p>`}
            ${t.verticalPadding&&b`<p class="inspector-property">
              ${Ut()} ${t.verticalPadding}
            </p>`}
          </div>`:null}
      ${o.characters?b`<div class="inspector-section">
            <div class="title-section">
              <h4>Content</h4>
              ${je({onClick:()=>We(o.characters)})}
            </div>
            <p class="node-content code-section selectable-content">
              ${o.characters}
            </p>
          </div>`:null}
      ${dr(t)}
    </div>
  `},dr=o=>{let e=()=>We(o.getStyleSheet()),t=o.getStyles();return b`<div class="inspector-section">
    <div class="title-section style-section">
      <h4>CSS</h4>
      ${je({onClick:e})}
    </div>
    <div class="code-section selectable-content">
      ${t.map(hr)}
    </div>
  </div>`},hr=o=>{let{property:e,value:t,color:r}=o,i=null;switch(e){case"background":case"fill":case"border":case"box-shadow":case"color":i=b`<span
        class="color-preview"
        style="background-color: ${r}"
      ></span>`;break;case"background-image":i=b`<span
        class="color-preview"
        style="background-image: ${t}"
      ></span>`;break}return b`<div class="css-property" @click=${()=>We(Ye(o))}>
    <span>${e}:</span>${i}<span class="css-value">${t}</span>;</span>
  </div>`},Yt=S`
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
`;var Ge=({node:o,selected:e=!1,computedThickness:t,onClick:r})=>{let{x:i,y:s,width:n,height:d}=o.absoluteBoundingBox,a="cornerRadius"in o&&o.cornerRadius?{topLeft:o.cornerRadius,topRight:o.cornerRadius,bottomRight:o.cornerRadius,bottomLeft:o.cornerRadius}:"rectangleCornerRadii"in o&&o.rectangleCornerRadii?{topLeft:o.rectangleCornerRadii[0],topRight:o.rectangleCornerRadii[1],bottomRight:o.rectangleCornerRadii[2],bottomLeft:o.rectangleCornerRadii[3]}:{topLeft:0,topRight:0,bottomRight:0,bottomLeft:0},c=t/2,l=(y,x)=>`M${y},${x}`,h=(y,x)=>`L${y},${x}`,u=(y,x,A)=>`A${y},${y} 0 0 1 ${x},${A}`,f=[l(a.topLeft+c,c),h(n-a.topRight,c),u(a.topRight-c,n-c,a.topRight),h(n-c,d-a.bottomRight),u(a.bottomRight-c,n-a.bottomRight,d-c),h(a.bottomLeft,d-c),u(a.bottomLeft-c,c,d-a.bottomLeft),h(c,a.topLeft),u(a.topLeft-c,a.topLeft,c),"Z"].join(" ");return E`
    <path
      class="guide"
      d=${f}
      shape-rendering="geometricPrecision"
      fill="none"
      transform="translate(${i}, ${s})"
      ?data-selected=${e}
      @click=${r}
    />
  `},Wt=({nodeSize:{x:o,y:e,width:t,height:r},offsetX:i,offsetY:s,reverseScale:n})=>{let d={top:`${s+e+r}px`,left:`${i+o+t/2}px`,transform:`translateX(-50%) scale(${n}) translateY(0.25em)`};return b`
    <div class="tooltip" style="${j(d)}">
      ${se(t)} x ${se(r)}
    </div>
  `},Gt=S`
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
`;var fr=[{gte:31536e6,divisor:31536e6,unit:"year"},{gte:2592e6,divisor:2592e6,unit:"month"},{gte:6048e5,divisor:6048e5,unit:"week"},{gte:864e5,divisor:864e5,unit:"day"},{gte:36e5,divisor:36e5,unit:"hour"},{gte:6e4,divisor:6e4,unit:"minute"},{gte:3e4,divisor:1e3,unit:"seconds"},{gte:0,divisor:1,text:"just now"}],Zt=o=>(typeof o=="object"?o:new Date(o)).getTime(),qt=(o,e=Date.now(),t=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}))=>{let i=Zt(e)-Zt(o),s=Math.abs(i);for(let n of fr)if(s>=n.gte){let d=Math.round(Math.abs(i)/n.divisor),a=i<0,c=n.unit;return c?t.format(a?d:-d,c):n.text}};var Xt=S`
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
`,Kt=o=>{if(!o||!o.link||o.link===void 0||o.link==="undefined")return null;let{link:e,timestamp:t,fileName:r}=o;return b`<a
    class="figma-footer"
    target="_blank"
    rel="noopener"
    title="Open in Figma"
    href="${e}"
  >
    <span class="figma-footer--icon"> ${Dt()} </span>
    <span class="figma-footer--title"> ${r} </span>
    <span
      title="Last time edited: ${new Date(t).toUTCString()}"
      class="figma-footer--timestamp"
    >
      Edited ${qt(t)}
    </span>
  </a>`};var Jt=function(o,e,t,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var d=o.length-1;d>=0;d--)(n=o[d])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},M=function(o,e){if(!e.has(o))throw new TypeError("attempted to get private field on non-instance");return e.get(o)},Ze=function(o,e,t){if(!e.has(o))throw new TypeError("attempted to set private field on non-instance");return e.set(o,t),t},ye=o=>{var e,t,r,i,s;class n extends Nt(Bt(o)){constructor(...a){super(...a),this.zoomMargin=50,this.link="",e.set(this,void 0),t.set(this,void 0),r.set(this,void 0),i.set(this,c=>l=>{l.preventDefault(),l.stopPropagation(),this.selectedNode=c}),s.set(this,c=>{var l,h;return(h=(l=M(this,r))===null||l===void 0?void 0:l.find(u=>u.id===c))!==null&&h!==void 0?h:null})}static get styles(){let a=super.styles;return fe(a,[S`
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
        `,Gt,At,It,Yt,Xt])}get __images(){return{}}deselectNode(){this.selectedNode=null}get error(){return!M(this,e)||!M(this,r)?H({title:"Error",children:"Please call `__updateTree/1` method with a valid parameter."}):null}render(){if(this.error)return this.error instanceof Error?H({title:this.error.name||"Error",children:this.error.message}):typeof this.error=="string"?H({title:"Error",children:this.error}):this.error;let a=M(this,e),c=1/this.scale,l=`calc(var(--guide-thickness) * ${c})`,h=parseFloat(getComputedStyle(this).getPropertyValue("--guide-thickness")),u=parseFloat(getComputedStyle(this).getPropertyValue("--guide-tooltip-font-size"));return b`
        <div class="spec-canvas-wrapper" @click=${this.deselectNode}>
          <div
            class="canvas"
            style="
          width: ${a.width}px;
          height: ${a.height}px;

          transform: translate(-50%, -50%) ${this.canvasTransform.join(" ")}
        "
          >
            ${Object.entries(this.__images).map(([f,y])=>{var x;let A=M(this,s).call(this,f);if(!A||!("absoluteBoundingBox"in A)||!(!((x=M(this,t))===null||x===void 0)&&x[A.id]))return null;let C=M(this,t)[A.id];return b`
                <img class="rendered-image" src="${y}"
                style=${j({top:`${A.absoluteBoundingBox.y-a.y}px`,left:`${A.absoluteBoundingBox.x-a.x}px`,marginTop:`${-C.top}px`,marginLeft:`${-C.left}px`,width:A.absoluteBoundingBox.width+C.left+C.right+"px",height:A.absoluteBoundingBox.height+C.top+C.bottom+"px"})}"
                " />
              `})}
            ${this.selectedNode&&Wt({nodeSize:this.selectedNode.absoluteBoundingBox,offsetX:-a.x,offsetY:-a.y,reverseScale:c})}
            ${E`
            <svg
              class="guides"
              viewBox="0 0 5 5"
              width="5"
              height="5"
              style=${j({left:`${-a.x}px`,top:`${-a.y}px`,strokeWidth:l})}
            >
              ${this.selectedNode&&Ge({node:this.selectedNode,selected:!0,computedThickness:h*c})}

              ${M(this,r).map(f=>{var y;return f.id===((y=this.selectedNode)===null||y===void 0?void 0:y.id)?null:E`
                  <g>
                    ${Ge({node:f,computedThickness:h*c,onClick:M(this,i).call(this,f)})}
                    ${this.selectedNode&&Ht({node:f,distanceTo:this.selectedNode,reverseScale:c,fontSize:u})}
                  </g>
                `})}
            </svg>
          `}
          </div>
          ${Vt({node:this.selectedNode,onClose:this.deselectNode})}
          ${Kt(this.getMetadata())}
        </div>
      `}getMetadata(){}connectedCallback(){super.connectedCallback(),this.resetZoom()}updated(a){super.updated(a)}__updateTree(a){if(!(a.type==="CANVAS"||a.type==="FRAME"||a.type==="COMPONENT"||a.type==="COMPONENT_SET"))throw new Error("Cannot update node tree: Top level node MUST be one of CANVAS, FRAME, COMPONENT, or COMPONENT_SET");Ze(this,e,a.type==="CANVAS"?mr(a):a.absoluteBoundingBox),Ze(this,r,ve(a)),this.requestUpdate()}__updateEffectMargins(){if(!this.__images)return;let a=Object.keys(this.__images).map(M(this,s)).filter(c=>!!c);Ze(this,t,a.reduce((c,l)=>"absoluteBoundingBox"in l?Object.assign(Object.assign({},c),{[l.id]:vr(l,ve(l))}):c,{})),this.requestUpdate()}resetZoom(){if(M(this,e)){let{width:a,height:c}=M(this,e),{width:l,height:h}=this.getBoundingClientRect(),u=l/(a+this.zoomMargin*2),f=h/(c+this.zoomMargin*2);this.scale=Math.min(u,f,1)}}}return e=new WeakMap,t=new WeakMap,r=new WeakMap,i=new WeakMap,s=new WeakMap,Jt([w({type:Number,attribute:"zoom-margin"})],n.prototype,"zoomMargin",void 0),Jt([w({type:String,attribute:"link"})],n.prototype,"link",void 0),n};function mr(o){let e=[],t=[],r=[],i=[];for(let d of o.children){if(d.type!=="FRAME"&&d.type!=="COMPONENT")continue;let{x:a,y:c,width:l,height:h}=d.absoluteBoundingBox;e.push(a),t.push(a+l),r.push(c),i.push(c+h)}let s=Math.min(...e),n=Math.min(...r);return{x:s,y:n,width:Math.abs(Math.max(...t)-s),height:Math.abs(Math.min(...i)-n)}}function vr(o,e){let t=e.map(i=>{if(!("effects"in i))return{top:i.absoluteBoundingBox.y,right:i.absoluteBoundingBox.x+i.absoluteBoundingBox.width,bottom:i.absoluteBoundingBox.y+i.absoluteBoundingBox.height,left:i.absoluteBoundingBox.x};let s=i.effects.filter(a=>a.visible&&a.type==="LAYER_BLUR").map(a=>a.radius),n=i.effects.filter(a=>a.visible&&a.type==="DROP_SHADOW"&&!!a.offset).map(a=>({left:a.radius-a.offset.x,top:a.radius-a.offset.y,right:a.radius+a.offset.x,bottom:a.radius+a.offset.y})),d={top:Math.max(0,...s,...n.map(a=>a.top)),right:Math.max(0,...s,...n.map(a=>a.right)),bottom:Math.max(0,...s,...n.map(a=>a.bottom)),left:Math.max(0,...s,...n.map(a=>a.left))};return{top:i.absoluteBoundingBox.y-d.top,right:i.absoluteBoundingBox.x+i.absoluteBoundingBox.width+d.right,bottom:i.absoluteBoundingBox.y+i.absoluteBoundingBox.height+d.bottom,left:i.absoluteBoundingBox.x-d.left}}),r={top:Math.min(...t.map(i=>i.top)),right:Math.max(...t.map(i=>i.right)),bottom:Math.max(...t.map(i=>i.bottom)),left:Math.min(...t.map(i=>i.left))};return{top:o.absoluteBoundingBox.y-r.top,right:r.right-o.absoluteBoundingBox.x-o.absoluteBoundingBox.width,bottom:r.bottom-o.absoluteBoundingBox.y-o.absoluteBoundingBox.height,left:o.absoluteBoundingBox.x-r.left}}function ve(o,e=0){return"absoluteBoundingBox"in o?!("children"in o)||o.children.length===0?[Object.assign(Object.assign({},o),{depth:e})]:[Object.assign(Object.assign({},o),{depth:e}),...o.children.map(t=>ve(t,e+1)).flat()]:o.children.map(t=>ve(t,e+1)).flat()}var Qt=function(o,e,t,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var d=o.length-1;d>=0;d--)(n=o[d])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},z=class extends ye(R){constructor(){super(...arguments),this.nodes=null,this.renderedImage=null}get isMovable(){return!!(this.nodes&&this.renderedImage&&this.documentNode)}get documentNode(){if(!this.nodes)return null;let e=Object.values(this.nodes.nodes)[0];return!e||!("absoluteBoundingBox"in e.document)?null:e.document}get __images(){return!this.documentNode||!this.renderedImage?{}:{[this.documentNode.id]:this.renderedImage}}get error(){if(!this.nodes||!this.renderedImage)return H({title:"Parameter error",children:b`<span>
          Both <code>nodes</code> and <code>rendered-image</code> are required.
        </span>`});if(!this.documentNode)return H({title:"Parameter Error",children:b`
          <span> Document node is empty or does not have size. </span>
        `});if(super.error)return super.error}getMetadata(){return{fileName:this.nodes.name,timestamp:this.nodes.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(this.__updateTree(this.documentNode),this.__updateEffectMargins(),this.resetZoom())}updated(e){if(super.updated(e),e.has("nodes")){if(!this.documentNode)return;this.__updateTree(this.documentNode),this.resetZoom()}e.has("renderedImage")&&this.__updateEffectMargins()}};Qt([w({type:Object})],z.prototype,"nodes",void 0);Qt([w({type:String,attribute:"rendered-image"})],z.prototype,"renderedImage",void 0);var eo=function(o,e,t,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,r);else for(var d=o.length-1;d>=0;d--)(n=o[d])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},qe=function(o,e){if(!e.has(o))throw new TypeError("attempted to get private field on non-instance");return e.get(o)},be,Xe,U=class extends ye(R){constructor(){super(...arguments),this.documentNode=null,this.renderedImages=null,this.selectedPage=null,be.set(this,()=>{var e;if(!this.documentNode){this.selectedPage=null;return}this.selectedPage=(e=this.documentNode.document.children.filter(t=>t.type==="CANVAS")[0])!==null&&e!==void 0?e:null}),Xe.set(this,e=>{var t,r;let i=e.currentTarget;this.selectedPage=(r=(t=this.documentNode)===null||t===void 0?void 0:t.document.children.find(s=>s.id===i.value))!==null&&r!==void 0?r:null,this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom(),this.__updateEffectMargins(),this.panX=0,this.panY=0)})}get isMovable(){return!!(this.renderedImages&&this.documentNode)}get __images(){return this.renderedImages||{}}get error(){if(!this.documentNode||!this.renderedImages)return H({title:"Parameter error",children:b`<span>
          Both <code>document-node</code> and <code>rendered-images</code> are
          required.
        </span>`});if(super.error)return super.error}static get styles(){return fe(super.styles,[S`
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
        <select @change=${qe(this,Xe)}>
          ${(e=this.documentNode)===null||e===void 0?void 0:e.document.children.map(t=>b`<option value=${t.id}>${t.name}</option>`)}
        </select>
      </div>

      <div class="view">${super.render()}</div>
    `}getMetadata(){return{fileName:this.documentNode.name,timestamp:this.documentNode.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(qe(this,be).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom()))}updated(e){super.updated(e),e.has("documentNode")&&(qe(this,be).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom())),e.has("renderedImages")&&this.__updateEffectMargins()}};be=new WeakMap,Xe=new WeakMap;eo([w({type:Object,attribute:"document-node"})],U.prototype,"documentNode",void 0);eo([w({type:Object,attribute:"rendered-images"})],U.prototype,"renderedImages",void 0);customElements.get("figspec-file-viewer")||customElements.define("figspec-file-viewer",U);customElements.get("figspec-frame-viewer")||customElements.define("figspec-frame-viewer",z);var yr=new Set(["children","localName","ref","style","className"]),to=new WeakMap,br=(o,e,t,r,i)=>{let s=i?.[e];s!==void 0?t!==r&&((n,d,a)=>{let c=to.get(n);c===void 0&&to.set(n,c=new Map);let l=c.get(d);a!==void 0?l===void 0?(c.set(d,l={handleEvent:a}),n.addEventListener(d,l)):l.handleEvent=a:l!==void 0&&(c.delete(d),n.removeEventListener(d,l))})(o,s,t):o[e]=t},xe=(o,e,t,r,i)=>{let s=o.Component,n=o.createElement,d=new Set(Object.keys(r??{}));for(let l in t.prototype)l in HTMLElement.prototype||(yr.has(l)?console.warn(`${e} contains property ${l} which is a React reserved property. It will be used by React and not set on the element.`):d.add(l));class a extends s{constructor(){super(...arguments),this.o=null}t(h){if(this.o!==null)for(let u in this.i)br(this.o,u,this.props[u],h?h[u]:void 0,r)}componentDidMount(){this.t()}componentDidUpdate(h){this.t(h)}render(){let h=this.props._$Gl;this.h!==void 0&&this.u===h||(this.h=f=>{this.o===null&&(this.o=f),h!==null&&((y,x)=>{typeof y=="function"?y(x):y.current=x})(h,f),this.u=h});let u={ref:this.h};this.i={};for(let[f,y]of Object.entries(this.props))f!=="__forwardedRef"&&(d.has(f)?this.i[f]=y:u[f==="className"?"class":f]=y);return n(e,u)}}a.displayName=i??t.name;let c=o.forwardRef((l,h)=>n(a,{...l,_$Gl:h},l?.children));return c.displayName=a.displayName,c};var oo=xe(le,"figspec-frame-viewer",z,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"}),ro=xe(le,"figspec-file-viewer",U,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"});var Lc=__STORYBOOK_API__,{ActiveTabs:Hc,Consumer:Ic,ManagerContext:Fc,Provider:zc,RequestResponseError:Uc,addons:$e,combineParameters:Dc,controlOrMetaKey:jc,controlOrMetaSymbol:Vc,eventMatchesShortcut:Yc,eventToShortcut:Wc,experimental_requestResponse:Gc,isMacLike:Zc,isShortcutTaken:qc,keyToSymbol:Xc,merge:Kc,mockChannel:Jc,optionOrAltSymbol:Qc,shortcutMatchesShortcut:ed,shortcutToHumanString:td,types:Ke,useAddonState:od,useArgTypes:rd,useArgs:id,useChannel:sd,useGlobalTypes:nd,useGlobals:ad,useParameter:Je,useSharedState:ld,useStoryPrepared:cd,useStorybookApi:dd,useStorybookState:io}=__STORYBOOK_API__;var xr=Object.defineProperty,ot=(o,e)=>()=>(o&&(e=o(o=0)),e),$r=(o,e)=>{for(var t in e)xr(o,t,{get:e[t],enumerable:!0})},Se,so,no,ao,rt=ot(()=>{Se=({config:o,defer:e=!1})=>{let[t,r]=T(e?void 0:o.url),[i,s]=T(!1);return N(()=>{if(!e)return;let n=requestAnimationFrame(()=>{r(o.url)});return()=>cancelAnimationFrame(n)},[e,o.url]),N(()=>{s(!1)},[t]),p("div",{css:so},!i&&p(I,{css:no},"Loading..."),p("iframe",{css:ao,src:t,allowFullScreen:o.allowFullscreen,onLoad:()=>s(!0)}))},so=P`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`,no=P`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`,ao=P`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`}),et,lo,uo,fo=ot(()=>{rt(),et=/https:\/\/[\w.-]+\.?figma.com\/([\w-]+)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/,lo=o=>et.test(o),uo=({config:o})=>{let e=V(()=>lo(o.url)?{url:`https://www.figma.com/embed?embed_host=${o.embedHost||location.hostname}&url=${o.url}`,allowFullscreen:o.allowFullscreen}:(console.warn(`[storybook-addon-designs] The URL you specified is not valid Figma URL.
The addon fallbacks to normal iframe mode.For more detail, please check <https://www.figma.com/developers/embed>.`),o),[o.url,o.allowFullscreen,o.embedHost]);return p(Se,{defer:!0,config:e})}}),go={};$r(go,{Figspec:()=>tt,default:()=>vo});function _e(o){return o.status!==200?Promise.reject(o.statusText):o.json()}function _r(o){if(o.accessToken)return o.accessToken;try{return g.STORYBOOK_FIGMA_ACCESS_TOKEN??null}catch{return null}}function mo(o){return"absoluteBoundingBox"in o?[o]:!o.children||o.children.length===0?[]:o.children.map(mo).reduce((e,t)=>e.concat(t),[])}var Qe,tt,vo,wr=ot(()=>{fo(),Qe=P`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,tt=({config:o})=>{let[e,t]=T({state:"loading"}),r=async i=>{t({state:"loading"});try{let s=o.url.match(et);if(!s)throw new Error(o.url+" is not a valid Figma URL.");let[,,n]=s,d=new URL(o.url).searchParams.get("node-id"),a=_r(o);if(!a)throw new Error("Personal Access Token is required.");let c={"X-FIGMA-TOKEN":a},l=new URL(`https://api.figma.com/v1/files/${n}`),h=new URL(`https://api.figma.com/v1/images/${n}`);if(h.searchParams.set("format","svg"),!d){let y=await fetch(l.href,{headers:c,signal:i}).then(C=>_e(C)),x=mo(y.document);h.searchParams.set("ids",x.map(C=>C.id).join(","));let A=await fetch(h.href,{headers:c,signal:i}).then(C=>_e(C));t({state:"fetched",value:{type:"file",props:{documentNode:y,renderedImages:A.images,link:o.url}}});return}l.pathname+="/nodes",l.searchParams.set("ids",d),h.searchParams.set("ids",d);let[u,f]=await Promise.all([fetch(l.href,{headers:c,signal:i}).then(y=>_e(y)),fetch(h.href,{headers:c,signal:i}).then(y=>_e(y))]);t({state:"fetched",value:{type:"frame",props:{nodes:u,renderedImage:Object.values(f.images)[0],link:o.url}}})}catch(s){if(s instanceof DOMException&&s.code===DOMException.ABORT_ERR)return;console.error(s),t({state:"failed",error:s instanceof Error?s.message:String(s)})}};switch(N(()=>{let i=!1,s=()=>{i=!0},n=new AbortController;return r(n.signal).then(s,s),()=>{i||n.abort()}},[o.url]),e.state){case"loading":return p(I,null,p($,null,"Loading Figma file..."));case"failed":return p(I,null,p($,null,"Failed to load Figma file"),p($,null,e.error));case"fetched":return e.value.type==="file"?p(ro,{css:Qe,...e.value.props}):p(oo,{css:Qe,...e.value.props})}},vo=tt}),yo="STORYBOOK_ADDON_DESIGNS",co=yo+"/panel",we="design",ho=class extends Ee{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(o){return{hasError:!0,error:o}}componentDidCatch(o,e){console.group("An error occurred during rendering Addon panel of storybook-addon-designs"),console.log("--- Error ---"),console.error(o),console.log("--- React Component Stack ---"),console.error(e.componentStack),console.groupEnd()}render(){return this.state.hasError?p(I,null,p($,null,"Failed to render addon UI"),p($,null,p("p",null,"Sorry, this addon has crashed due to the below error has thrown during rendering the addon UI."),p("pre",null,String(this.state.error)),p("p",null,"See console log for more details. To clear the error state, please reload the page."," ",p(K,{href:"https://github.com/storybookjs/addon-designs/issues/new?assignees=&labels=category%3A+bug&template=bug_report.yml",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"Bug report")))):this.props.children}};fo();rt();var Sr=(o,e)=>{let[t,r]=T([0,0]),[i,s]=T(!1),n=k(u=>{u.button===0&&(r([u.screenX,u.screenY]),s(!0))},[s,r]),d=k(u=>{let f=u.touches[0];r([f.screenX,f.screenY]),s(!0)},[s,r]),a=k(u=>{i&&r(f=>(o([u[0]-f[0],u[1]-f[1]]),u))},[r,i,...e]),c=k(u=>{let{screenX:f,screenY:y}=u;a([f,y])},[a]),l=k(u=>{let{screenX:f,screenY:y}=u.touches[0];a([f,y])},[r,i,...e]),h=k(()=>{r([0,0]),s(!1)},[s,r]);return{onMouseDown:n,onMouseMove:c,onMouseUp:h,onMouseLeave:h,onTouchStart:d,onTouchMove:l,onTouchCancel:h,onTouchEnd:h}},Er=({children:o,className:e,style:t,defaultValue:r,value:i,onChange:s})=>{let[n,d]=T([0,0]);N(()=>{d(r||i||[0,0])},[r]);let a=Sr(l=>{s&&s(l),d(h=>[h[0]+l[0],h[1]+l[1]])},[d,s]),c=V(()=>{let l=i||n;return{transform:`translate(${l[0]}px, ${l[1]}px)`}},[i,n]);return p("div",{css:Ar,className:e,style:t,...a},p("div",{css:Cr,style:c},o))},Ar=P`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`,Cr=P`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,Mr=({onZoomIn:o,onZoomOut:e,onReset:t})=>p($,null,p(ce,{onClick:o},p(de,{icon:"zoom"})),p(ce,{onClick:e},p(de,{icon:"zoomout"})),p(ce,{onClick:t},p(de,{icon:"zoomreset"}))),kr=(o,e)=>{let[t,r]=T(1);N(()=>{r(o)},e);let i=k(()=>{r(d=>d+.1)},[r]),s=k(()=>{r(d=>Math.max(d-.1,.1))},[r]),n=k(()=>{r(1)},[r]);return{scale:t,zoomIn:i,zoomOut:s,resetZoom:n}},Tr=({config:o})=>{let e=kr(o.scale||1,[o.scale]),t=V(()=>({transform:`scale(${e.scale})`}),[e.scale]);return p("div",{css:Pr},p(st,{border:!0},p($,{key:"left"},p("p",null,p("b",null,"Image")),p(nt,null),p(Mr,{onReset:e.resetZoom,onZoomIn:e.zoomIn,onZoomOut:e.zoomOut}))),p(Er,{css:Nr,defaultValue:o.offset},p("img",{css:Rr,src:o.url,style:t})))},Pr=P`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,Nr=P`
  flex-grow: 1;
`,Rr=P`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`,Or=({config:o})=>p("div",{css:Br},p(K,{cancel:!1,href:o.url,target:o.target??"_blank",rel:o.rel??"noopener",withArrow:o.showArrow??!0},o.label||o.url)),Br=P`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;rt();var Lr=o=>{if(o.protocol!=="https:")return{valid:!1,error:p($,null,"Expected HTTPS link, received ",p("code",null,o.protocol),".")};if(o.hostname!=="www.sketch.com")return{valid:!1,error:p($,null,"Expected a hostname ",p("code",null,"www.sketch.com"),", received"," ",p("code",null,o.hostname))};let e=p($,null,"Expected pathname ",p("code",null,"/s/<string>/a/<string>"),", received"," ",p("code",null,o.pathname),"."),t=o.pathname.split("/").slice(1);if(t.length<4)return{valid:!1,error:e};if(t[0]==="embed")return{valid:!0,data:{url:o.href,offscreen:!1}};let[r,i,s,n]=t;return r!=="s"||!i||s!=="a"||!n?{valid:!1,error:e}:{valid:!0,data:{url:`https://www.sketch.com/embed/s/${i}/a/${n}`,offscreen:!1}}},Hr=({config:o})=>{let e=V(()=>{let t=Lr(new URL(o.url));return t.valid?{...t,data:{...o,...t.data}}:t},[o]);return e.valid?p(Se,{defer:!0,config:e.data}):p(I,null,p($,null,"Invalid Sketch URL"),p($,null,e.error))},Ir=({tabs:o,deps:e=[]})=>{let[t,r]=T(o[0].id);return N(()=>{r(o[0].id)},e),p(at,{absolute:!0,selected:t,actions:{onSelect:r}},o.map(i=>p("div",{key:i.id,id:i.id,title:i.name},i.offscreen||t===i.id?i.content:null)))},Fr=Ce(()=>Promise.resolve().then(()=>(wr(),go))),zr=({config:o})=>{if(!o||"length"in o&&o.length===0)return p(I,null,p($,null,"No designs found"),p($,null,"Learn how to"," ",p(K,{href:"https://github.com/storybookjs/addon-designs#3-add-it-to-story",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"display design preview for the story")));let e=[...o instanceof Array?o:[o]].map(t=>{let r={id:JSON.stringify(t),name:t.name||t.type?.toUpperCase()||"ERROR",offscreen:t.offscreen??!0};switch(t.type){case"iframe":return{...r,content:p(Se,{config:t})};case"figma":return{...r,content:p(uo,{config:t}),offscreen:!1};case"sketch":return{...r,content:p(Hr,{config:t})};case"figspec":case"experimental-figspec":return t.type==="experimental-figspec"&&console.warn("[storybook-addon-designs] `experimental-figspec` is deprecated. We will remove it in v7.0. Please replace it to `figspec` type."),{...r,content:p(Ae,{fallback:"Preparing Figspec viewer..."},p(Fr,{config:t})),offscreen:!1};case"image":return{...r,content:p(Tr,{config:t})};case"link":return{...r,content:p(Or,{config:t})}}return{...r,content:p(I,null,p($,null,"Invalid config type"),p($,null,"Config type you set is not supported. Please choose one from"," ",p(K,{href:"https://github.com/storybookjs/addon-designs/blob/master/packages/storybook-addon-designs/src/config.ts",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"available config types")))}});return e.length===1?p("div",null,e[0].content):p(Ir,{tabs:e,deps:[o]})},po=({active:o})=>{let e=io(),t=Je(we),[r,i]=T(o);return N(()=>{i(o)},[t]),N(()=>{o&&i(!0)},[o]),r?p(zr,{key:e.storyId,config:t}):null},ae="Design";function Ur(o){$e.register(yo,e=>{let t=function(){let r=Je(we);return r?Array.isArray(r)?r.length>0?`${ae} (${r.length})`:ae:(r.name||ae)+" (1)":ae};o==="tab"?$e.add(co,{title:ae,render({active:r}){return r?p(ho,null,p(po,{active:!0})):p("noscript",null)},type:Ke.TAB,paramKey:we}):$e.add(co,{type:Ke.PANEL,title:t,paramKey:we,render({active:r}){return p(it,{active:!!r},p(ho,null,p(po,{active:!!r})))}})})}Ur("panel");})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
