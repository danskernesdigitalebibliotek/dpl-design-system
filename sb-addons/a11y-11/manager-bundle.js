try{
(()=>{var r=__REACT__,{Children:_o,Component:To,Fragment:U,Profiler:yo,PureComponent:se,StrictMode:bo,Suspense:Oo,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Co,cloneElement:G,createContext:ue,createElement:E,createFactory:vo,createRef:de,forwardRef:Ao,isValidElement:me,lazy:xo,memo:No,startTransition:ko,unstable_act:Lo,useCallback:x,useContext:pe,useDebugValue:Do,useDeferredValue:wo,useEffect:H,useId:Po,useImperativeHandle:Ho,useInsertionEffect:Bo,useLayoutEffect:ge,useMemo:F,useReducer:Mo,useRef:W,useState:k,useSyncExternalStore:Uo,useTransition:Go,version:Fo}=__REACT__;var jo=__STORYBOOK_COMPONENTS__,{A:zo,ActionBar:K,AddonPanel:Vo,Badge:Q,Bar:Ko,Blockquote:Qo,Button:qo,ClipboardCode:Xo,Code:Zo,DL:Jo,Div:er,DocumentWrapper:tr,EmptyTabContent:Ee,ErrorFormatter:nr,FlexBar:or,Form:rr,H1:ar,H2:ir,H3:lr,H4:cr,H5:sr,H6:ur,HR:dr,IconButton:he,IconButtonSkeleton:mr,Icons:pr,Img:gr,LI:Er,Link:hr,ListItem:Ir,Loader:fr,Modal:Sr,OL:Rr,P:_r,Placeholder:Tr,Pre:yr,ProgressSpinner:br,ResetWrapper:Or,ScrollArea:Ie,Separator:Cr,Spaced:fe,Span:vr,StorybookIcon:Ar,StorybookLogo:xr,Symbols:Nr,SyntaxHighlighter:kr,TT:Lr,TabBar:Dr,TabButton:wr,TabWrapper:Pr,Table:Hr,Tabs:Br,TabsState:Mr,TooltipLinkList:Se,TooltipMessage:Ur,TooltipNote:Gr,UL:Fr,WithTooltip:Re,WithTooltipPure:Wr,Zoom:$r,codeCommon:Yr,components:jr,createCopyToClipboardFunction:zr,getStoryHref:Vr,icons:Kr,interleaveSeparators:Qr,nameSpaceClassNames:qr,resetComponents:Xr,withReset:Zr}=__STORYBOOK_COMPONENTS__;var oa=__STORYBOOK_API__,{ActiveTabs:ra,Consumer:aa,ManagerContext:ia,Provider:la,RequestResponseError:ca,addons:$,combineParameters:sa,controlOrMetaKey:ua,controlOrMetaSymbol:da,eventMatchesShortcut:ma,eventToShortcut:pa,experimental_MockUniversalStore:ga,experimental_UniversalStore:Ea,experimental_requestResponse:ha,experimental_useUniversalStore:Ia,isMacLike:fa,isShortcutTaken:Sa,keyToSymbol:Ra,merge:_a,mockChannel:Ta,optionOrAltSymbol:ya,shortcutMatchesShortcut:ba,shortcutToHumanString:Oa,types:q,useAddonState:X,useArgTypes:Ca,useArgs:va,useChannel:Z,useGlobalTypes:Aa,useGlobals:xa,useParameter:_e,useSharedState:Na,useStoryPrepared:ka,useStorybookApi:J,useStorybookState:Te}=__STORYBOOK_API__;var Ha=__STORYBOOK_THEMING__,{CacheProvider:Ba,ClassNames:Ma,Global:ye,ThemeProvider:Ua,background:Ga,color:Fa,convert:Y,create:Wa,createCache:$a,createGlobal:Ya,createReset:ja,css:za,darken:Va,ensure:Ka,ignoreSsrWarning:Qa,isPropValid:qa,jsx:Xa,keyframes:Za,lighten:Ja,styled:c,themes:j,typography:ei,useTheme:ti,withTheme:ni}=__STORYBOOK_THEMING__;var li=__STORYBOOK_ICONS__,{AccessibilityAltIcon:ci,AccessibilityIcon:be,AddIcon:si,AdminIcon:ui,AlertAltIcon:di,AlertIcon:mi,AlignLeftIcon:pi,AlignRightIcon:gi,AppleIcon:Ei,ArrowBottomLeftIcon:hi,ArrowBottomRightIcon:Ii,ArrowDownIcon:fi,ArrowLeftIcon:Si,ArrowRightIcon:Ri,ArrowSolidDownIcon:_i,ArrowSolidLeftIcon:Ti,ArrowSolidRightIcon:yi,ArrowSolidUpIcon:bi,ArrowTopLeftIcon:Oi,ArrowTopRightIcon:Ci,ArrowUpIcon:vi,AzureDevOpsIcon:Ai,BackIcon:xi,BasketIcon:Ni,BatchAcceptIcon:ki,BatchDenyIcon:Li,BeakerIcon:Di,BellIcon:wi,BitbucketIcon:Pi,BoldIcon:Hi,BookIcon:Bi,BookmarkHollowIcon:Mi,BookmarkIcon:Ui,BottomBarIcon:Gi,BottomBarToggleIcon:Fi,BoxIcon:Wi,BranchIcon:$i,BrowserIcon:Yi,ButtonIcon:ji,CPUIcon:zi,CalendarIcon:Vi,CameraIcon:Ki,CategoryIcon:Qi,CertificateIcon:qi,ChangedIcon:Xi,ChatIcon:Zi,CheckIcon:Oe,ChevronDownIcon:Ji,ChevronLeftIcon:el,ChevronRightIcon:tl,ChevronSmallDownIcon:Ce,ChevronSmallLeftIcon:nl,ChevronSmallRightIcon:ol,ChevronSmallUpIcon:rl,ChevronUpIcon:al,ChromaticIcon:il,ChromeIcon:ll,CircleHollowIcon:cl,CircleIcon:sl,ClearIcon:ul,CloseAltIcon:dl,CloseIcon:ml,CloudHollowIcon:pl,CloudIcon:gl,CogIcon:El,CollapseIcon:hl,CommandIcon:Il,CommentAddIcon:fl,CommentIcon:Sl,CommentsIcon:Rl,CommitIcon:_l,CompassIcon:Tl,ComponentDrivenIcon:yl,ComponentIcon:bl,ContrastIcon:Ol,ControlsIcon:Cl,CopyIcon:vl,CreditIcon:Al,CrossIcon:xl,DashboardIcon:Nl,DatabaseIcon:kl,DeleteIcon:Ll,DiamondIcon:Dl,DirectionIcon:wl,DiscordIcon:Pl,DocChartIcon:Hl,DocListIcon:Bl,DocumentIcon:Ml,DownloadIcon:Ul,DragIcon:Gl,EditIcon:Fl,EllipsisIcon:Wl,EmailIcon:$l,ExpandAltIcon:Yl,ExpandIcon:jl,EyeCloseIcon:zl,EyeIcon:Vl,FaceHappyIcon:Kl,FaceNeutralIcon:Ql,FaceSadIcon:ql,FacebookIcon:Xl,FailedIcon:Zl,FastForwardIcon:Jl,FigmaIcon:ec,FilterIcon:tc,FlagIcon:nc,FolderIcon:oc,FormIcon:rc,GDriveIcon:ac,GithubIcon:ic,GitlabIcon:lc,GlobeIcon:cc,GoogleIcon:sc,GraphBarIcon:uc,GraphLineIcon:dc,GraphqlIcon:mc,GridAltIcon:pc,GridIcon:gc,GrowIcon:Ec,HeartHollowIcon:hc,HeartIcon:Ic,HomeIcon:fc,HourglassIcon:Sc,InfoIcon:Rc,ItalicIcon:_c,JumpToIcon:Tc,KeyIcon:yc,LightningIcon:bc,LightningOffIcon:Oc,LinkBrokenIcon:Cc,LinkIcon:vc,LinkedinIcon:Ac,LinuxIcon:xc,ListOrderedIcon:Nc,ListUnorderedIcon:kc,LocationIcon:Lc,LockIcon:Dc,MarkdownIcon:wc,MarkupIcon:Pc,MediumIcon:Hc,MemoryIcon:Bc,MenuIcon:Mc,MergeIcon:Uc,MirrorIcon:Gc,MobileIcon:Fc,MoonIcon:Wc,NutIcon:$c,OutboxIcon:Yc,OutlineIcon:jc,PaintBrushIcon:zc,PaperClipIcon:Vc,ParagraphIcon:Kc,PassedIcon:Qc,PhoneIcon:qc,PhotoDragIcon:Xc,PhotoIcon:Zc,PinAltIcon:Jc,PinIcon:es,PlayAllHollowIcon:ts,PlayBackIcon:ns,PlayHollowIcon:os,PlayIcon:rs,PlayNextIcon:as,PlusIcon:is,PointerDefaultIcon:ls,PointerHandIcon:cs,PowerIcon:ss,PrintIcon:us,ProceedIcon:ds,ProfileIcon:ms,PullRequestIcon:ps,QuestionIcon:gs,RSSIcon:Es,RedirectIcon:hs,ReduxIcon:Is,RefreshIcon:fs,ReplyIcon:Ss,RepoIcon:Rs,RequestChangeIcon:_s,RewindIcon:Ts,RulerIcon:ys,SaveIcon:bs,SearchIcon:Os,ShareAltIcon:Cs,ShareIcon:vs,ShieldIcon:As,SideBySideIcon:xs,SidebarAltIcon:Ns,SidebarAltToggleIcon:ks,SidebarIcon:Ls,SidebarToggleIcon:Ds,SpeakerIcon:ws,StackedIcon:Ps,StarHollowIcon:Hs,StarIcon:Bs,StatusFailIcon:Ms,StatusPassIcon:Us,StatusWarnIcon:Gs,StickerIcon:Fs,StopAltHollowIcon:Ws,StopAltIcon:$s,StopIcon:Ys,StorybookIcon:js,StructureIcon:zs,SubtractIcon:Vs,SunIcon:Ks,SupportIcon:Qs,SwitchAltIcon:qs,SyncIcon:ve,TabletIcon:Xs,ThumbsUpIcon:Zs,TimeIcon:Js,TimerIcon:eu,TransferIcon:tu,TrashIcon:nu,TwitterIcon:ou,TypeIcon:ru,UbuntuIcon:au,UndoIcon:iu,UnfoldIcon:lu,UnlockIcon:cu,UnpinIcon:su,UploadIcon:uu,UserAddIcon:du,UserAltIcon:mu,UserIcon:pu,UsersIcon:gu,VSCodeIcon:Eu,VerifiedIcon:hu,VideoIcon:Iu,WandIcon:fu,WatchIcon:Su,WindowsIcon:Ru,WrenchIcon:_u,XIcon:Tu,YoutubeIcon:yu,ZoomIcon:bu,ZoomOutIcon:Ou,ZoomResetIcon:Cu,iconList:vu}=__STORYBOOK_ICONS__;var Lu=__STORYBOOK_CORE_EVENTS__,{ARGTYPES_INFO_REQUEST:Du,ARGTYPES_INFO_RESPONSE:wu,CHANNEL_CREATED:Pu,CHANNEL_WS_DISCONNECT:Hu,CONFIG_ERROR:Bu,CREATE_NEW_STORYFILE_REQUEST:Mu,CREATE_NEW_STORYFILE_RESPONSE:Uu,CURRENT_STORY_WAS_SET:Gu,DOCS_PREPARED:Fu,DOCS_RENDERED:Wu,FILE_COMPONENT_SEARCH_REQUEST:$u,FILE_COMPONENT_SEARCH_RESPONSE:Yu,FORCE_REMOUNT:ju,FORCE_RE_RENDER:zu,GLOBALS_UPDATED:Vu,NAVIGATE_URL:Ku,PLAY_FUNCTION_THREW_EXCEPTION:Qu,PRELOAD_ENTRIES:qu,PREVIEW_BUILDER_PROGRESS:Xu,PREVIEW_KEYDOWN:Zu,REGISTER_SUBSCRIPTION:Ju,REQUEST_WHATS_NEW_DATA:ed,RESET_STORY_ARGS:td,RESULT_WHATS_NEW_DATA:nd,SAVE_STORY_REQUEST:od,SAVE_STORY_RESPONSE:rd,SELECT_STORY:ad,SET_CONFIG:id,SET_CURRENT_STORY:ld,SET_FILTER:cd,SET_GLOBALS:sd,SET_INDEX:ud,SET_STORIES:dd,SET_WHATS_NEW_CACHE:md,SHARED_STATE_CHANGED:pd,SHARED_STATE_SET:gd,STORIES_COLLAPSE_ALL:Ed,STORIES_EXPAND_ALL:hd,STORY_ARGS_UPDATED:Id,STORY_CHANGED:Ae,STORY_ERRORED:fd,STORY_FINISHED:Sd,STORY_INDEX_INVALIDATED:Rd,STORY_MISSING:_d,STORY_PREPARED:Td,STORY_RENDERED:xe,STORY_RENDER_PHASE_CHANGED:yd,STORY_SPECIFIED:bd,STORY_THREW_EXCEPTION:Od,STORY_UNCHANGED:Cd,TELEMETRY_ERROR:vd,TESTING_MODULE_CANCEL_TEST_RUN_REQUEST:Ad,TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE:xd,TESTING_MODULE_CRASH_REPORT:Nd,TESTING_MODULE_PROGRESS_REPORT:kd,TESTING_MODULE_RUN_ALL_REQUEST:Ld,TESTING_MODULE_RUN_REQUEST:Dd,TOGGLE_WHATS_NEW_NOTIFICATIONS:wd,UNHANDLED_ERRORS_WHILE_PLAYING:Pd,UPDATE_GLOBALS:Hd,UPDATE_QUERY_PARAMS:Bd,UPDATE_STORY_ARGS:Md}=__STORYBOOK_CORE_EVENTS__;var Ne="storybook/highlight",ke=`${Ne}/add`,Kd=`${Ne}/reset`;var Jd=__REACT_DOM__,{__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:em,createPortal:tm,createRoot:nm,findDOMNode:Le,flushSync:om,hydrate:rm,hydrateRoot:am,render:im,unmountComponentAtNode:lm,unstable_batchedUpdates:cm,unstable_renderSubtreeIntoContainer:sm,version:um}=__REACT_DOM__;var N="storybook/a11y",De=`${N}/panel`,nt="a11y",ot=`${N}/result`,rt=`${N}/request`,at=`${N}/running`,it=`${N}/error`,lt=`${N}/manual`,M={RESULT:ot,REQUEST:rt,RUNNING:at,ERROR:it,MANUAL:lt},ct=[Y(j.light).color.negative,Y(j.light).color.positive,Y(j.light).color.warning],$e=ue({results:{passes:[],incomplete:[],violations:[]},setResults:()=>{},highlighted:[],toggleHighlight:()=>{},clearHighlights:()=>{},tab:0,setTab:()=>{}}),we={passes:[],incomplete:[],violations:[]},st=({active:e,...n})=>{let[o,t]=X(N,we),[a,u]=k(0),[s,i]=k([]),m=J(),p=m.getCurrentStoryData(),d=x((S,h)=>{i(R=>h?[...R,...S]:R.filter(y=>!S.includes(y)))},[]),g=S=>{T(M.REQUEST,S,m.getParameters(S,"a11y"))},l=x(()=>i([]),[]),f=x(S=>{l(),u(S)},[]),_=x(()=>{u(0),t(we)},[]),T=Z({[xe]:g,[Ae]:_});return H(()=>{T(ke,{elements:s,color:ct[a]})},[s,a]),H(()=>{e&&p?.type==="story"?g(p.id):l()},[e,l,T,p]),e?E($e.Provider,{value:{results:o,setResults:t,highlighted:s,toggleHighlight:d,clearHighlights:l,tab:a,setTab:f},...n}):null},ae=()=>pe($e),ut=c.input(({disabled:e})=>({cursor:e?"not-allowed":"pointer"}));function Pe(e,n){let o=e.filter(t=>n.includes(t.target[0])).length;return o===0?1:o===e.length?0:2}var dt=({toggleId:e,elementsToHighlight:n=[]})=>{let{toggleHighlight:o,highlighted:t}=ae(),a=r.useRef(null),[u,s]=r.useState(Pe(n,t));r.useEffect(()=>{let m=Pe(n,t);a.current&&(a.current.indeterminate=m===2),s(m)},[n,t]);let i=r.useCallback(()=>{o(n.map(m=>m.target[0]),u!==0)},[n,u,o]);return r.createElement(ut,{ref:a,id:e,type:"checkbox","aria-label":"Highlight result",disabled:!n.length,onChange:i,checked:u===0})},ie=dt,ne=function(e,n){return ne=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(o[a]=t[a])},ne(e,n)};function mt(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");ne(e,n);function o(){this.constructor=e}e.prototype=n===null?Object.create(n):(o.prototype=n.prototype,new o)}var oe=function(){return oe=Object.assign||function(e){for(var n,o=1,t=arguments.length;o<t;o++){n=arguments[o];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},oe.apply(this,arguments)};function pt(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]]);return o}var z=typeof globalThis<"u"?globalThis:typeof window<"u"||typeof window<"u"?window:typeof self<"u"?self:{};function gt(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var le=gt,Et=typeof z=="object"&&z&&z.Object===Object&&z,ht=Et,It=ht,ft=typeof self=="object"&&self&&self.Object===Object&&self,St=It||ft||Function("return this")(),Ye=St,Rt=Ye,_t=function(){return Rt.Date.now()},Tt=_t,yt=/\s/;function bt(e){for(var n=e.length;n--&&yt.test(e.charAt(n)););return n}var Ot=bt,Ct=Ot,vt=/^\s+/;function At(e){return e&&e.slice(0,Ct(e)+1).replace(vt,"")}var xt=At,Nt=Ye,kt=Nt.Symbol,je=kt,He=je,ze=Object.prototype,Lt=ze.hasOwnProperty,Dt=ze.toString,B=He?He.toStringTag:void 0;function wt(e){var n=Lt.call(e,B),o=e[B];try{e[B]=void 0;var t=!0}catch{}var a=Dt.call(e);return t&&(n?e[B]=o:delete e[B]),a}var Pt=wt,Ht=Object.prototype,Bt=Ht.toString;function Mt(e){return Bt.call(e)}var Ut=Mt,Be=je,Gt=Pt,Ft=Ut,Wt="[object Null]",$t="[object Undefined]",Me=Be?Be.toStringTag:void 0;function Yt(e){return e==null?e===void 0?$t:Wt:Me&&Me in Object(e)?Gt(e):Ft(e)}var jt=Yt;function zt(e){return e!=null&&typeof e=="object"}var Vt=zt,Kt=jt,Qt=Vt,qt="[object Symbol]";function Xt(e){return typeof e=="symbol"||Qt(e)&&Kt(e)==qt}var Zt=Xt,Jt=xt,Ue=le,en=Zt,Ge=NaN,tn=/^[-+]0x[0-9a-f]+$/i,nn=/^0b[01]+$/i,on=/^0o[0-7]+$/i,rn=parseInt;function an(e){if(typeof e=="number")return e;if(en(e))return Ge;if(Ue(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=Ue(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Jt(e);var o=nn.test(e);return o||on.test(e)?rn(e.slice(2),o?2:8):tn.test(e)?Ge:+e}var ln=an,cn=le,ee=Tt,Fe=ln,sn="Expected a function",un=Math.max,dn=Math.min;function mn(e,n,o){var t,a,u,s,i,m,p=0,d=!1,g=!1,l=!0;if(typeof e!="function")throw new TypeError(sn);n=Fe(n)||0,cn(o)&&(d=!!o.leading,g="maxWait"in o,u=g?un(Fe(o.maxWait)||0,n):u,l="trailing"in o?!!o.trailing:l);function f(I){var b=t,O=a;return t=a=void 0,p=I,s=e.apply(O,b),s}function _(I){return p=I,i=setTimeout(h,n),d?f(I):s}function T(I){var b=I-m,O=I-p,P=n-b;return g?dn(P,u-O):P}function S(I){var b=I-m,O=I-p;return m===void 0||b>=n||b<0||g&&O>=u}function h(){var I=ee();if(S(I))return R(I);i=setTimeout(h,T(I))}function R(I){return i=void 0,l&&t?f(I):(t=a=void 0,s)}function y(){i!==void 0&&clearTimeout(i),p=0,t=m=a=i=void 0}function w(){return i===void 0?s:R(ee())}function D(){var I=ee(),b=S(I);if(t=arguments,a=this,m=I,b){if(i===void 0)return _(m);if(g)return clearTimeout(i),i=setTimeout(h,n),f(m)}return i===void 0&&(i=setTimeout(h,n)),s}return D.cancel=y,D.flush=w,D}var Ve=mn,pn=Ve,gn=le,En="Expected a function";function hn(e,n,o){var t=!0,a=!0;if(typeof e!="function")throw new TypeError(En);return gn(o)&&(t="leading"in o?!!o.leading:t,a="trailing"in o?!!o.trailing:a),pn(e,n,{leading:t,maxWait:n,trailing:a})}var In=hn,Ke=function(e,n,o,t){switch(n){case"debounce":return Ve(e,o,t);case"throttle":return In(e,o,t);default:return e}},re=function(e){return typeof e=="function"},L=function(){return typeof window>"u"},We=function(e){return e instanceof Element||e instanceof HTMLDocument},Qe=function(e,n,o,t){return function(a){var u=a.width,s=a.height;n(function(i){return i.width===u&&i.height===s||i.width===u&&!t||i.height===s&&!o?i:(e&&re(e)&&e(u,s),{width:u,height:s})})}};(function(e){mt(n,e);function n(o){var t=e.call(this,o)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var p=t.props,d=p.targetRef,g=p.observerOptions;if(!L()){d&&d.current&&(t.targetRef.current=d.current);var l=t.getElement();l&&(t.observableElement&&t.observableElement===l||(t.observableElement=l,t.resizeObserver.observe(l,g)))}},t.getElement=function(){var p=t.props,d=p.querySelector,g=p.targetDomEl;if(L())return null;if(d)return document.querySelector(d);if(g&&We(g))return g;if(t.targetRef&&We(t.targetRef.current))return t.targetRef.current;var l=Le(t);if(!l)return null;var f=t.getRenderType();switch(f){case"renderProp":return l;case"childFunction":return l;case"child":return l;case"childArray":return l;default:return l.parentElement}},t.createResizeHandler=function(p){var d=t.props,g=d.handleWidth,l=g===void 0?!0:g,f=d.handleHeight,_=f===void 0?!0:f,T=d.onResize;if(!(!l&&!_)){var S=Qe(T,t.setState.bind(t),l,_);p.forEach(function(h){var R=h&&h.contentRect||{},y=R.width,w=R.height,D=!t.skipOnMount&&!L();D&&S({width:y,height:w}),t.skipOnMount=!1})}},t.getRenderType=function(){var p=t.props,d=p.render,g=p.children;return re(d)?"renderProp":re(g)?"childFunction":me(g)?"child":Array.isArray(g)?"childArray":"parent"};var a=o.skipOnMount,u=o.refreshMode,s=o.refreshRate,i=s===void 0?1e3:s,m=o.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=a,t.targetRef=de(),t.observableElement=null,L()||(t.resizeHandler=Ke(t.createResizeHandler,u,i,m),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}return n.prototype.componentDidMount=function(){this.attachObserver()},n.prototype.componentDidUpdate=function(){this.attachObserver()},n.prototype.componentWillUnmount=function(){L()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},n.prototype.render=function(){var o=this.props,t=o.render,a=o.children,u=o.nodeType,s=u===void 0?"div":u,i=this.state,m=i.width,p=i.height,d={width:m,height:p,targetRef:this.targetRef},g=this.getRenderType(),l;switch(g){case"renderProp":return t&&t(d);case"childFunction":return l=a,l(d);case"child":if(l=a,l.type&&typeof l.type=="string"){d.targetRef;var f=pt(d,["targetRef"]);return G(l,f)}return G(l,d);case"childArray":return l=a,l.map(function(_){return!!_&&G(_,d)});default:return E(s,null)}},n})(se);var fn=L()?H:ge;function qe(e){e===void 0&&(e={});var n=e.skipOnMount,o=n===void 0?!1:n,t=e.refreshMode,a=e.refreshRate,u=a===void 0?1e3:a,s=e.refreshOptions,i=e.handleWidth,m=i===void 0?!0:i,p=e.handleHeight,d=p===void 0?!0:p,g=e.targetRef,l=e.observerOptions,f=e.onResize,_=W(o),T=W(null),S=g??T,h=W(),R=k({width:void 0,height:void 0}),y=R[0],w=R[1];return fn(function(){if(!L()){var D=Qe(f,w,m,d),I=function(O){!m&&!d||O.forEach(function(P){var ce=P&&P.contentRect||{},Ze=ce.width,Je=ce.height,et=!_.current&&!L();et&&D({width:Ze,height:Je}),_.current=!1})};h.current=Ke(I,t,u,s);var b=new window.ResizeObserver(h.current);return S.current&&b.observe(S.current,l),function(){b.disconnect();var O=h.current;O&&O.cancel&&O.cancel()}}},[t,u,s,m,d,f,l,S.current]),oe({ref:S},y)}var Sn=c.div({display:"flex",flexDirection:"column",paddingBottom:4,paddingRight:4,paddingTop:4,fontWeight:400}),Rn=c.div(({elementWidth:e})=>({flexDirection:e>407?"row":"inherit",marginBottom:e>407?6:12,display:e>407?"flex":"block"})),_n=c(Q)({padding:"2px 8px",marginBottom:3,minWidth:65,maxWidth:"fit-content",width:"100%",textAlign:"center"}),Tn=c.div({paddingLeft:6,paddingRight:23}),yn=e=>e.charAt(0).toUpperCase().concat(e.slice(1)),bn=({rule:e})=>{let{ref:n,width:o}=qe({refreshMode:"debounce",handleHeight:!1,handleWidth:!0}),t=null;switch(e.impact){case"critical":t="critical";break;case"serious":t="negative";break;case"moderate":t="warning";break;case"minor":t="neutral";break}return r.createElement(Rn,{ref:n,elementWidth:o||0},r.createElement(_n,{status:t},yn(e.impact)),r.createElement(Tn,null,e.message))},On=({rules:e})=>r.createElement(Sn,null,e.map((n,o)=>r.createElement(bn,{rule:n,key:o}))),Cn=c.li({fontWeight:600}),vn=c.span(({theme:e})=>({borderBottom:`1px solid ${e.appBorderColor}`,width:"100%",display:"flex",paddingBottom:6,marginBottom:6,justifyContent:"space-between"})),An=c.span({fontWeight:"normal",alignSelf:"center",paddingRight:15,input:{margin:0,display:"block"}}),xn=({element:e,type:n})=>{let{any:o,all:t,none:a}=e,u=[...o,...t,...a],s=`${n}-${e.target[0]}`;return r.createElement(Cn,null,r.createElement(vn,null,e.target[0],r.createElement(An,null,r.createElement(ie,{toggleId:s,elementsToHighlight:[e]}))),r.createElement(On,{rules:u}))},Nn=({elements:e,type:n})=>r.createElement("ol",null,e.map((o,t)=>r.createElement(xn,{element:o,key:t,type:n}))),kn=c.div({padding:12,marginBottom:10}),Ln=c.p({margin:"0 0 12px"}),Dn=c.a({marginTop:12,textDecoration:"underline",color:"inherit",display:"block"}),wn=({item:e})=>r.createElement(kn,null,r.createElement(Ln,null,e.description),r.createElement(Dn,{href:e.helpUrl,target:"_blank"},"More info...")),Pn=c.div({display:"flex",flexWrap:"wrap",margin:"12px 0"}),Hn=c.div(({theme:e})=>({margin:"0 6px",padding:5,border:`1px solid ${e.appBorderColor}`,borderRadius:e.appBorderRadius})),Bn=({tags:e})=>r.createElement(Pn,null,e.map(n=>r.createElement(Hn,{key:n},n))),Mn=c.div(({theme:e})=>({display:"flex",width:"100%",borderBottom:`1px solid ${e.appBorderColor}`,"&:hover":{background:e.background.hoverable}})),Un=c(Ce)({marginRight:10,transition:"transform 0.1s ease-in-out",verticalAlign:"inherit"}),Gn=c.div(({theme:e})=>({padding:e.layoutMargin,paddingLeft:e.layoutMargin-3,lineHeight:"20px",background:"none",color:"inherit",textAlign:"left",cursor:"pointer",borderLeft:"3px solid transparent",width:"100%","&:focus":{outline:"0 none",borderLeft:`3px solid ${e.color.secondary}`}})),Fn=c.span({fontWeight:"normal",float:"right",marginRight:15,alignSelf:"center",input:{margin:0,display:"block"}}),Wn=e=>{let[n,o]=k(!1),{item:t,type:a}=e,u=`${a}-${t.id}`;return r.createElement(U,null,r.createElement(Mn,null,r.createElement(Gn,{onClick:()=>o(!n),role:"button"},r.createElement(Un,{style:{transform:`rotate(${n?0:-90}deg)`}}),t.help),r.createElement(Fn,null,r.createElement(ie,{toggleId:u,elementsToHighlight:t.nodes}))),n?r.createElement(U,null,r.createElement(wn,{item:t,key:"info"}),r.createElement(Nn,{elements:t.nodes,type:a,key:"elements"}),r.createElement(Bn,{tags:t.tags,key:"tags"})):null)},te=({items:e,empty:n,type:o})=>r.createElement(U,null,e&&e.length?e.map(t=>r.createElement(Wn,{item:t,key:`${o}:${t.id}`,type:o})):r.createElement(Ee,{title:n})),$n=c.div({width:"100%",position:"relative",minHeight:"100%"}),Yn=c.label(({theme:e})=>({cursor:"pointer",userSelect:"none",color:e.color.dark})),jn=c.div(({elementWidth:e,theme:n})=>({cursor:"pointer",fontSize:13,lineHeight:"20px",padding:e>450?"10px 15px 10px 0":"10px 0px 10px 15px",height:"40px",border:"none",marginTop:e>450?-40:0,float:e>450?"right":"left",display:"flex",alignItems:"center",width:e>450?"auto":"100%",borderBottom:e>450?"none":`1px solid ${n.appBorderColor}`,input:{marginLeft:10,marginRight:0,marginTop:-1,marginBottom:0}})),zn=c.button(({theme:e})=>({textDecoration:"none",padding:"10px 15px",cursor:"pointer",fontWeight:e.typography.weight.bold,fontSize:e.typography.size.s2-1,lineHeight:1,height:40,border:"none",borderTop:"3px solid transparent",borderBottom:"3px solid transparent",background:"transparent","&:focus":{outline:"0 none",borderBottom:`3px solid ${e.color.secondary}`}}),({active:e,theme:n})=>e?{opacity:1,borderBottom:`3px solid ${n.color.secondary}`}:{}),Vn=c.div({}),Kn=c.div(({theme:e})=>({boxShadow:`${e.appBorderColor} 0 -1px 0 0 inset`,background:e.background.app,display:"flex",justifyContent:"space-between",whiteSpace:"nowrap"}));function Qn(e){return e.reduce((n,o)=>n.concat(o.nodes),[])}var qn=({tabs:e})=>{let{ref:n,width:o}=qe({refreshMode:"debounce",handleHeight:!1,handleWidth:!0}),{tab:t,setTab:a}=ae(),u=x(i=>{a(parseInt(i.currentTarget.getAttribute("data-index")||"",10))},[a]),s=`${e[t].type}-global-checkbox`;return E($n,{ref:n},E(Kn,null,E(Vn,null,e.map((i,m)=>E(zn,{key:m,"data-index":m,active:t===m,onClick:u},i.label)))),e[t].items.length>0?E(jn,{elementWidth:o||0},E(Yn,{htmlFor:s},"Highlight results"),E(ie,{toggleId:s,elementsToHighlight:Qn(e[t].items)})):null,e[t].panel)},Xn=c(ve)({marginRight:4}),Zn=c(Xn)(({theme:e})=>({animation:`${e.animation.rotate360} 1s linear infinite;`})),Jn=c.span(({theme:e})=>({color:e.color.positiveText})),eo=c.span(({theme:e})=>({color:e.color.negativeText})),to=c.span(({theme:e})=>({color:e.color.warningText})),V=c.span({display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}),no=()=>{let{manual:e}=_e("a11y",{manual:!1}),[n,o]=k(e?"manual":"initial"),[t,a]=r.useState(void 0),{setResults:u,results:s}=ae(),{storyId:i}=Te(),m=J();r.useEffect(()=>{o(e?"manual":"initial")},[e]);let p=h=>{o("ran"),u(h),setTimeout(()=>{n==="ran"&&o("ready")},900)},d=x(()=>{o("running")},[]),g=x(h=>{o("error"),a(h)},[]),l=Z({[M.RUNNING]:d,[M.RESULT]:p,[M.ERROR]:g}),f=x(()=>{o("running"),l(M.MANUAL,i,m.getParameters(i,"a11y"))},[i]),_=F(()=>[{title:"Run test",onClick:f}],[f]),T=F(()=>[{title:n==="ready"?"Rerun tests":r.createElement(r.Fragment,null,r.createElement(Oe,null)," Tests completed"),onClick:f}],[n,f]),S=F(()=>{let{passes:h,incomplete:R,violations:y}=s;return[{label:r.createElement(eo,null,y.length," Violations"),panel:r.createElement(te,{items:y,type:0,empty:"No accessibility violations found."}),items:y,type:0},{label:r.createElement(Jn,null,h.length," Passes"),panel:r.createElement(te,{items:h,type:1,empty:"No accessibility checks passed."}),items:h,type:1},{label:r.createElement(to,null,R.length," Incomplete"),panel:r.createElement(te,{items:R,type:2,empty:"No accessibility checks incomplete."}),items:R,type:2}]},[s]);return r.createElement(r.Fragment,null,n==="initial"&&r.createElement(V,null,"Initializing..."),n==="manual"&&r.createElement(r.Fragment,null,r.createElement(V,null,"Manually run the accessibility scan."),r.createElement(K,{key:"actionbar",actionItems:_})),n==="running"&&r.createElement(V,null,r.createElement(Zn,{size:12})," Please wait while the accessibility scan is running ..."),(n==="ready"||n==="ran")&&r.createElement(r.Fragment,null,r.createElement(Ie,{vertical:!0,horizontal:!0},r.createElement(qn,{key:"tabs",tabs:S})),r.createElement(K,{key:"actionbar",actionItems:T})),n==="error"&&r.createElement(V,null,"The accessibility scan encountered an error.",r.createElement("br",null),typeof t=="string"?t:JSON.stringify(t)))},oo=e=>E("svg",{...e},E("defs",null,E("filter",{id:"protanopia"},E("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0"})),E("filter",{id:"protanomaly"},E("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.817, 0.183, 0, 0, 0 0.333, 0.667, 0, 0, 0 0, 0.125, 0.875, 0, 0 0, 0, 0, 1, 0"})),E("filter",{id:"deuteranopia"},E("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0"})),E("filter",{id:"deuteranomaly"},E("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.8, 0.2, 0, 0, 0 0.258, 0.742, 0, 0, 0 0, 0.142, 0.858, 0, 0 0, 0, 0, 1, 0"})),E("filter",{id:"tritanopia"},E("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.95, 0.05,  0, 0, 0 0,  0.433, 0.567, 0, 0 0,  0.475, 0.525, 0, 0 0,  0, 0, 1, 0"})),E("filter",{id:"tritanomaly"},E("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.967, 0.033, 0, 0, 0 0, 0.733, 0.267, 0, 0 0, 0.183, 0.817, 0, 0 0, 0, 0, 1, 0"})),E("filter",{id:"achromatopsia"},E("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0, 0, 0, 1, 0"})))),ro="storybook-preview-iframe",ao=[{name:"blurred vision",percentage:22.9},{name:"deuteranomaly",percentage:2.7},{name:"deuteranopia",percentage:.56},{name:"protanomaly",percentage:.66},{name:"protanopia",percentage:.59},{name:"tritanomaly",percentage:.01},{name:"tritanopia",percentage:.016},{name:"achromatopsia",percentage:1e-4},{name:"grayscale"}],Xe=e=>e?e==="blurred vision"?"blur(2px)":e==="grayscale"?"grayscale(100%)":`url('#${e}')`:"none",io=c.div(()=>({"&, & svg":{position:"absolute",width:0,height:0}})),lo=c.span({background:"linear-gradient(to right, #F44336, #FF9800, #FFEB3B, #8BC34A, #2196F3, #9C27B0)",borderRadius:"1rem",display:"block",height:"1rem",width:"1rem"},({filter:e})=>({filter:Xe(e)}),({theme:e})=>({boxShadow:`${e.appBorderColor} 0 0 0 1px inset`})),co=c.span({display:"flex",flexDirection:"column"}),so=c.span({textTransform:"capitalize"}),uo=c.span(({theme:e})=>({fontSize:11,color:e.textMutedColor})),mo=(e,n)=>[...e!==null?[{id:"reset",title:"Reset color filter",onClick:()=>{n(null)},right:void 0,active:!1}]:[],...ao.map(o=>{let t=o.percentage!==void 0?`${o.percentage}% of users`:void 0;return{id:o.name,title:r.createElement(co,null,r.createElement(so,null,o.name),t&&r.createElement(uo,null,t)),onClick:()=>{n(o)},right:r.createElement(lo,{filter:o.name}),active:e===o}})],po=()=>{let[e,n]=k(null);return r.createElement(r.Fragment,null,e&&r.createElement(ye,{styles:{[`#${ro}`]:{filter:Xe(e.name)}}}),r.createElement(Re,{placement:"top",tooltip:({onHide:o})=>{let t=mo(e,a=>{n(a),o()});return r.createElement(Se,{links:t})},closeOnOutsideClick:!0,onDoubleClick:()=>n(null)},r.createElement(he,{key:"filter",active:!!e,title:"Vision simulator"},r.createElement(be,null))),r.createElement(io,null,r.createElement(oo,null)))},go=()=>{let[e]=X(N),n=e?.violations?.length||0,o=e?.incomplete?.length||0,t=n+o;return r.createElement("div",null,r.createElement(fe,{col:1},r.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"Accessibility"),t===0?"":r.createElement(Q,{status:"neutral"},t)))};$.register(N,e=>{$.add(De,{title:"",type:q.TOOL,match:({viewMode:n,tabId:o})=>n==="story"&&!o,render:()=>r.createElement(po,null)}),$.add(De,{title:go,type:q.PANEL,render:({active:n=!0})=>r.createElement(st,{active:n},r.createElement(no,null)),paramKey:nt})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
