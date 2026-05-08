const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-CNxhrnTr.js","assets/index-CxSSKEbj.js","assets/projectService-aeeEqXDj.js","assets/useProjects-B1yI6uFN.js","assets/LoginPage-D4kHTFRT.js","assets/index-BnHJHI3E.js","assets/RegisterPage-CMX0X5_j.js","assets/AddProjectPage-ChubLNjd.js","assets/BookmarksPage-1nqHbnDd.js","assets/ProjectDetailsPage-C-aY11ND.js"])))=>i.map(i=>d[i]);
var $S=Object.defineProperty;var HS=(t,e,n)=>e in t?$S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var xg=(t,e,n)=>HS(t,typeof e!="symbol"?e+"":e,n);function Bv(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function op(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $v={exports:{}},$c={},Hv={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yl=Symbol.for("react.element"),WS=Symbol.for("react.portal"),qS=Symbol.for("react.fragment"),KS=Symbol.for("react.strict_mode"),GS=Symbol.for("react.profiler"),QS=Symbol.for("react.provider"),YS=Symbol.for("react.context"),JS=Symbol.for("react.forward_ref"),XS=Symbol.for("react.suspense"),ZS=Symbol.for("react.memo"),eR=Symbol.for("react.lazy"),bg=Symbol.iterator;function tR(t){return t===null||typeof t!="object"?null:(t=bg&&t[bg]||t["@@iterator"],typeof t=="function"?t:null)}var Wv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qv=Object.assign,Kv={};function bo(t,e,n){this.props=t,this.context=e,this.refs=Kv,this.updater=n||Wv}bo.prototype.isReactComponent={};bo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gv(){}Gv.prototype=bo.prototype;function ap(t,e,n){this.props=t,this.context=e,this.refs=Kv,this.updater=n||Wv}var lp=ap.prototype=new Gv;lp.constructor=ap;qv(lp,bo.prototype);lp.isPureReactComponent=!0;var Og=Array.isArray,Qv=Object.prototype.hasOwnProperty,up={current:null},Yv={key:!0,ref:!0,__self:!0,__source:!0};function Jv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Qv.call(e,r)&&!Yv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:yl,type:t,key:s,ref:o,props:i,_owner:up.current}}function nR(t,e){return{$$typeof:yl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cp(t){return typeof t=="object"&&t!==null&&t.$$typeof===yl}function rR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lg=/\/+/g;function Wh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rR(""+t.key):e.toString(36)}function Ru(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case yl:case WS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Wh(o,0):r,Og(i)?(n="",t!=null&&(n=t.replace(Lg,"$&/")+"/"),Ru(i,e,n,"",function(c){return c})):i!=null&&(cp(i)&&(i=nR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Lg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Og(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Wh(s,l);o+=Ru(s,e,n,u,i)}else if(u=tR(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Wh(s,l++),o+=Ru(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xl(t,e,n){if(t==null)return t;var r=[],i=0;return Ru(t,r,"","",function(s){return e.call(n,s,i++)}),r}function iR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Bt={current:null},Au={transition:null},sR={ReactCurrentDispatcher:Bt,ReactCurrentBatchConfig:Au,ReactCurrentOwner:up};function Xv(){throw Error("act(...) is not supported in production builds of React.")}me.Children={map:Xl,forEach:function(t,e,n){Xl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xl(t,function(){e++}),e},toArray:function(t){return Xl(t,function(e){return e})||[]},only:function(t){if(!cp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};me.Component=bo;me.Fragment=qS;me.Profiler=GS;me.PureComponent=ap;me.StrictMode=KS;me.Suspense=XS;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sR;me.act=Xv;me.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=qv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=up.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Qv.call(e,u)&&!Yv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:yl,type:t.type,key:i,ref:s,props:r,_owner:o}};me.createContext=function(t){return t={$$typeof:YS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:QS,_context:t},t.Consumer=t};me.createElement=Jv;me.createFactory=function(t){var e=Jv.bind(null,t);return e.type=t,e};me.createRef=function(){return{current:null}};me.forwardRef=function(t){return{$$typeof:JS,render:t}};me.isValidElement=cp;me.lazy=function(t){return{$$typeof:eR,_payload:{_status:-1,_result:t},_init:iR}};me.memo=function(t,e){return{$$typeof:ZS,type:t,compare:e===void 0?null:e}};me.startTransition=function(t){var e=Au.transition;Au.transition={};try{t()}finally{Au.transition=e}};me.unstable_act=Xv;me.useCallback=function(t,e){return Bt.current.useCallback(t,e)};me.useContext=function(t){return Bt.current.useContext(t)};me.useDebugValue=function(){};me.useDeferredValue=function(t){return Bt.current.useDeferredValue(t)};me.useEffect=function(t,e){return Bt.current.useEffect(t,e)};me.useId=function(){return Bt.current.useId()};me.useImperativeHandle=function(t,e,n){return Bt.current.useImperativeHandle(t,e,n)};me.useInsertionEffect=function(t,e){return Bt.current.useInsertionEffect(t,e)};me.useLayoutEffect=function(t,e){return Bt.current.useLayoutEffect(t,e)};me.useMemo=function(t,e){return Bt.current.useMemo(t,e)};me.useReducer=function(t,e,n){return Bt.current.useReducer(t,e,n)};me.useRef=function(t){return Bt.current.useRef(t)};me.useState=function(t){return Bt.current.useState(t)};me.useSyncExternalStore=function(t,e,n){return Bt.current.useSyncExternalStore(t,e,n)};me.useTransition=function(){return Bt.current.useTransition()};me.version="18.3.1";Hv.exports=me;var b=Hv.exports;const oR=op(b),aR=Bv({__proto__:null,default:oR},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lR=b,uR=Symbol.for("react.element"),cR=Symbol.for("react.fragment"),hR=Object.prototype.hasOwnProperty,dR=lR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fR={key:!0,ref:!0,__self:!0,__source:!0};function Zv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)hR.call(e,r)&&!fR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:uR,type:t,key:s,ref:o,props:i,_owner:dR.current}}$c.Fragment=cR;$c.jsx=Zv;$c.jsxs=Zv;$v.exports=$c;var ne=$v.exports,eE={exports:{}},dn={},tE={exports:{}},nE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,ie){var ae=H.length;H.push(ie);e:for(;0<ae;){var Ie=ae-1>>>1,Se=H[Ie];if(0<i(Se,ie))H[Ie]=ie,H[ae]=Se,ae=Ie;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ie=H[0],ae=H.pop();if(ae!==ie){H[0]=ae;e:for(var Ie=0,Se=H.length,Ht=Se>>>1;Ie<Ht;){var mt=2*(Ie+1)-1,it=H[mt],st=mt+1,kt=H[st];if(0>i(it,ae))st<Se&&0>i(kt,it)?(H[Ie]=kt,H[st]=ae,Ie=st):(H[Ie]=it,H[mt]=ae,Ie=mt);else if(st<Se&&0>i(kt,ae))H[Ie]=kt,H[st]=ae,Ie=st;else break e}}return ie}function i(H,ie){var ae=H.sortIndex-ie.sortIndex;return ae!==0?ae:H.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,f=null,m=3,E=!1,A=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(H){for(var ie=n(c);ie!==null;){if(ie.callback===null)r(c);else if(ie.startTime<=H)r(c),ie.sortIndex=ie.expirationTime,e(u,ie);else break;ie=n(c)}}function L(H){if(k=!1,S(H),!A)if(n(u)!==null)A=!0,jn(F);else{var ie=n(c);ie!==null&&zn(L,ie.startTime-H)}}function F(H,ie){A=!1,k&&(k=!1,I(y),y=-1),E=!0;var ae=m;try{for(S(ie),f=n(u);f!==null&&(!(f.expirationTime>ie)||H&&!P());){var Ie=f.callback;if(typeof Ie=="function"){f.callback=null,m=f.priorityLevel;var Se=Ie(f.expirationTime<=ie);ie=t.unstable_now(),typeof Se=="function"?f.callback=Se:f===n(u)&&r(u),S(ie)}else r(u);f=n(u)}if(f!==null)var Ht=!0;else{var mt=n(c);mt!==null&&zn(L,mt.startTime-ie),Ht=!1}return Ht}finally{f=null,m=ae,E=!1}}var $=!1,g=null,y=-1,w=5,T=-1;function P(){return!(t.unstable_now()-T<w)}function N(){if(g!==null){var H=t.unstable_now();T=H;var ie=!0;try{ie=g(!0,H)}finally{ie?R():($=!1,g=null)}}else $=!1}var R;if(typeof v=="function")R=function(){v(N)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,rt=Te.port2;Te.port1.onmessage=N,R=function(){rt.postMessage(null)}}else R=function(){D(N,0)};function jn(H){g=H,$||($=!0,R())}function zn(H,ie){y=D(function(){H(t.unstable_now())},ie)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){A||E||(A=!0,jn(F))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(H){switch(m){case 1:case 2:case 3:var ie=3;break;default:ie=m}var ae=m;m=ie;try{return H()}finally{m=ae}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,ie){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ae=m;m=H;try{return ie()}finally{m=ae}},t.unstable_scheduleCallback=function(H,ie,ae){var Ie=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Ie+ae:Ie):ae=Ie,H){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ae+Se,H={id:d++,callback:ie,priorityLevel:H,startTime:ae,expirationTime:Se,sortIndex:-1},ae>Ie?(H.sortIndex=ae,e(c,H),n(u)===null&&H===n(c)&&(k?(I(y),y=-1):k=!0,zn(L,ae-Ie))):(H.sortIndex=Se,e(u,H),A||E||(A=!0,jn(F))),H},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(H){var ie=m;return function(){var ae=m;m=ie;try{return H.apply(this,arguments)}finally{m=ae}}}})(nE);tE.exports=nE;var pR=tE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mR=b,hn=pR;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rE=new Set,Ba={};function As(t,e){Eo(t,e),Eo(t+"Capture",e)}function Eo(t,e){for(Ba[t]=e,t=0;t<e.length;t++)rE.add(e[t])}var Ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Od=Object.prototype.hasOwnProperty,gR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vg={},Mg={};function yR(t){return Od.call(Mg,t)?!0:Od.call(Vg,t)?!1:gR.test(t)?Mg[t]=!0:(Vg[t]=!0,!1)}function _R(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vR(t,e,n,r){if(e===null||typeof e>"u"||_R(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pt[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pt[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pt[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pt[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pt[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pt[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pt[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pt[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pt[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var hp=/[\-:]([a-z])/g;function dp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hp,dp);Pt[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hp,dp);Pt[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hp,dp);Pt[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pt[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pt[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function fp(t,e,n,r){var i=Pt.hasOwnProperty(e)?Pt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vR(e,n,i,r)&&(n=null),r||i===null?yR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mr=mR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zl=Symbol.for("react.element"),Ks=Symbol.for("react.portal"),Gs=Symbol.for("react.fragment"),pp=Symbol.for("react.strict_mode"),Ld=Symbol.for("react.profiler"),iE=Symbol.for("react.provider"),sE=Symbol.for("react.context"),mp=Symbol.for("react.forward_ref"),Vd=Symbol.for("react.suspense"),Md=Symbol.for("react.suspense_list"),gp=Symbol.for("react.memo"),Xr=Symbol.for("react.lazy"),oE=Symbol.for("react.offscreen"),Ug=Symbol.iterator;function na(t){return t===null||typeof t!="object"?null:(t=Ug&&t[Ug]||t["@@iterator"],typeof t=="function"?t:null)}var $e=Object.assign,qh;function ga(t){if(qh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qh=e&&e[1]||""}return`
`+qh+t}var Kh=!1;function Gh(t,e){if(!t||Kh)return"";Kh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Kh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ga(t):""}function ER(t){switch(t.tag){case 5:return ga(t.type);case 16:return ga("Lazy");case 13:return ga("Suspense");case 19:return ga("SuspenseList");case 0:case 2:case 15:return t=Gh(t.type,!1),t;case 11:return t=Gh(t.type.render,!1),t;case 1:return t=Gh(t.type,!0),t;default:return""}}function Ud(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gs:return"Fragment";case Ks:return"Portal";case Ld:return"Profiler";case pp:return"StrictMode";case Vd:return"Suspense";case Md:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sE:return(t.displayName||"Context")+".Consumer";case iE:return(t._context.displayName||"Context")+".Provider";case mp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gp:return e=t.displayName||null,e!==null?e:Ud(t.type)||"Memo";case Xr:e=t._payload,t=t._init;try{return Ud(t(e))}catch{}}return null}function wR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ud(e);case 8:return e===pp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ti(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function aE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function TR(t){var e=aE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eu(t){t._valueTracker||(t._valueTracker=TR(t))}function lE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=aE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Qu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fd(t,e){var n=e.checked;return $e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ti(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uE(t,e){e=e.checked,e!=null&&fp(t,"checked",e,!1)}function jd(t,e){uE(t,e);var n=Ti(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zd(t,e.type,n):e.hasOwnProperty("defaultValue")&&zd(t,e.type,Ti(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zd(t,e,n){(e!=="number"||Qu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ya=Array.isArray;function so(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ti(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Bd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return $e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(ya(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ti(n)}}function cE(t,e){var n=Ti(e.value),r=Ti(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Bg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $d(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tu,dE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tu=tu||document.createElement("div"),tu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Pa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IR=["Webkit","ms","Moz","O"];Object.keys(Pa).forEach(function(t){IR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Pa[e]=Pa[t]})});function fE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Pa.hasOwnProperty(t)&&Pa[t]?(""+e).trim():e+"px"}function pE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var SR=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hd(t,e){if(e){if(SR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Wd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qd=null;function yp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kd=null,oo=null,ao=null;function $g(t){if(t=El(t)){if(typeof Kd!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Gc(e),Kd(t.stateNode,t.type,e))}}function mE(t){oo?ao?ao.push(t):ao=[t]:oo=t}function gE(){if(oo){var t=oo,e=ao;if(ao=oo=null,$g(t),e)for(t=0;t<e.length;t++)$g(e[t])}}function yE(t,e){return t(e)}function _E(){}var Qh=!1;function vE(t,e,n){if(Qh)return t(e,n);Qh=!0;try{return yE(t,e,n)}finally{Qh=!1,(oo!==null||ao!==null)&&(_E(),gE())}}function Ha(t,e){var n=t.stateNode;if(n===null)return null;var r=Gc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Gd=!1;if(Ar)try{var ra={};Object.defineProperty(ra,"passive",{get:function(){Gd=!0}}),window.addEventListener("test",ra,ra),window.removeEventListener("test",ra,ra)}catch{Gd=!1}function RR(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ca=!1,Yu=null,Ju=!1,Qd=null,AR={onError:function(t){Ca=!0,Yu=t}};function PR(t,e,n,r,i,s,o,l,u){Ca=!1,Yu=null,RR.apply(AR,arguments)}function CR(t,e,n,r,i,s,o,l,u){if(PR.apply(this,arguments),Ca){if(Ca){var c=Yu;Ca=!1,Yu=null}else throw Error(B(198));Ju||(Ju=!0,Qd=c)}}function Ps(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function EE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hg(t){if(Ps(t)!==t)throw Error(B(188))}function kR(t){var e=t.alternate;if(!e){if(e=Ps(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Hg(i),t;if(s===r)return Hg(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function wE(t){return t=kR(t),t!==null?TE(t):null}function TE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=TE(t);if(e!==null)return e;t=t.sibling}return null}var IE=hn.unstable_scheduleCallback,Wg=hn.unstable_cancelCallback,NR=hn.unstable_shouldYield,DR=hn.unstable_requestPaint,Ye=hn.unstable_now,xR=hn.unstable_getCurrentPriorityLevel,_p=hn.unstable_ImmediatePriority,SE=hn.unstable_UserBlockingPriority,Xu=hn.unstable_NormalPriority,bR=hn.unstable_LowPriority,RE=hn.unstable_IdlePriority,Hc=null,Zn=null;function OR(t){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(Hc,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:MR,LR=Math.log,VR=Math.LN2;function MR(t){return t>>>=0,t===0?32:31-(LR(t)/VR|0)|0}var nu=64,ru=4194304;function _a(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=_a(l):(s&=o,s!==0&&(r=_a(s)))}else o=n&~i,o!==0?r=_a(o):s!==0&&(r=_a(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-On(e),i=1<<n,r|=t[n],e&=~i;return r}function UR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function FR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=UR(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Yd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function AE(){var t=nu;return nu<<=1,!(nu&4194240)&&(nu=64),t}function Yh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _l(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function jR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-On(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function vp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-On(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Pe=0;function PE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var CE,Ep,kE,NE,DE,Jd=!1,iu=[],ci=null,hi=null,di=null,Wa=new Map,qa=new Map,ei=[],zR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qg(t,e){switch(t){case"focusin":case"focusout":ci=null;break;case"dragenter":case"dragleave":hi=null;break;case"mouseover":case"mouseout":di=null;break;case"pointerover":case"pointerout":Wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qa.delete(e.pointerId)}}function ia(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=El(e),e!==null&&Ep(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function BR(t,e,n,r,i){switch(e){case"focusin":return ci=ia(ci,t,e,n,r,i),!0;case"dragenter":return hi=ia(hi,t,e,n,r,i),!0;case"mouseover":return di=ia(di,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Wa.set(s,ia(Wa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,qa.set(s,ia(qa.get(s)||null,t,e,n,r,i)),!0}return!1}function xE(t){var e=ns(t.target);if(e!==null){var n=Ps(e);if(n!==null){if(e=n.tag,e===13){if(e=EE(n),e!==null){t.blockedOn=e,DE(t.priority,function(){kE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qd=r,n.target.dispatchEvent(r),qd=null}else return e=El(n),e!==null&&Ep(e),t.blockedOn=n,!1;e.shift()}return!0}function Kg(t,e,n){Pu(t)&&n.delete(e)}function $R(){Jd=!1,ci!==null&&Pu(ci)&&(ci=null),hi!==null&&Pu(hi)&&(hi=null),di!==null&&Pu(di)&&(di=null),Wa.forEach(Kg),qa.forEach(Kg)}function sa(t,e){t.blockedOn===e&&(t.blockedOn=null,Jd||(Jd=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,$R)))}function Ka(t){function e(i){return sa(i,t)}if(0<iu.length){sa(iu[0],t);for(var n=1;n<iu.length;n++){var r=iu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ci!==null&&sa(ci,t),hi!==null&&sa(hi,t),di!==null&&sa(di,t),Wa.forEach(e),qa.forEach(e),n=0;n<ei.length;n++)r=ei[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ei.length&&(n=ei[0],n.blockedOn===null);)xE(n),n.blockedOn===null&&ei.shift()}var lo=Mr.ReactCurrentBatchConfig,ec=!0;function HR(t,e,n,r){var i=Pe,s=lo.transition;lo.transition=null;try{Pe=1,wp(t,e,n,r)}finally{Pe=i,lo.transition=s}}function WR(t,e,n,r){var i=Pe,s=lo.transition;lo.transition=null;try{Pe=4,wp(t,e,n,r)}finally{Pe=i,lo.transition=s}}function wp(t,e,n,r){if(ec){var i=Xd(t,e,n,r);if(i===null)od(t,e,r,tc,n),qg(t,r);else if(BR(i,t,e,n,r))r.stopPropagation();else if(qg(t,r),e&4&&-1<zR.indexOf(t)){for(;i!==null;){var s=El(i);if(s!==null&&CE(s),s=Xd(t,e,n,r),s===null&&od(t,e,r,tc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else od(t,e,r,null,n)}}var tc=null;function Xd(t,e,n,r){if(tc=null,t=yp(r),t=ns(t),t!==null)if(e=Ps(t),e===null)t=null;else if(n=e.tag,n===13){if(t=EE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tc=t,null}function bE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xR()){case _p:return 1;case SE:return 4;case Xu:case bR:return 16;case RE:return 536870912;default:return 16}default:return 16}}var ai=null,Tp=null,Cu=null;function OE(){if(Cu)return Cu;var t,e=Tp,n=e.length,r,i="value"in ai?ai.value:ai.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Cu=i.slice(t,1<r?1-r:void 0)}function ku(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function su(){return!0}function Gg(){return!1}function fn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?su:Gg,this.isPropagationStopped=Gg,this}return $e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=su)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=su)},persist:function(){},isPersistent:su}),e}var Oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ip=fn(Oo),vl=$e({},Oo,{view:0,detail:0}),qR=fn(vl),Jh,Xh,oa,Wc=$e({},vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oa&&(oa&&t.type==="mousemove"?(Jh=t.screenX-oa.screenX,Xh=t.screenY-oa.screenY):Xh=Jh=0,oa=t),Jh)},movementY:function(t){return"movementY"in t?t.movementY:Xh}}),Qg=fn(Wc),KR=$e({},Wc,{dataTransfer:0}),GR=fn(KR),QR=$e({},vl,{relatedTarget:0}),Zh=fn(QR),YR=$e({},Oo,{animationName:0,elapsedTime:0,pseudoElement:0}),JR=fn(YR),XR=$e({},Oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ZR=fn(XR),eA=$e({},Oo,{data:0}),Yg=fn(eA),tA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rA[t])?!!e[t]:!1}function Sp(){return iA}var sA=$e({},vl,{key:function(t){if(t.key){var e=tA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ku(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sp,charCode:function(t){return t.type==="keypress"?ku(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ku(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),oA=fn(sA),aA=$e({},Wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jg=fn(aA),lA=$e({},vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sp}),uA=fn(lA),cA=$e({},Oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),hA=fn(cA),dA=$e({},Wc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fA=fn(dA),pA=[9,13,27,32],Rp=Ar&&"CompositionEvent"in window,ka=null;Ar&&"documentMode"in document&&(ka=document.documentMode);var mA=Ar&&"TextEvent"in window&&!ka,LE=Ar&&(!Rp||ka&&8<ka&&11>=ka),Xg=" ",Zg=!1;function VE(t,e){switch(t){case"keyup":return pA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ME(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qs=!1;function gA(t,e){switch(t){case"compositionend":return ME(e);case"keypress":return e.which!==32?null:(Zg=!0,Xg);case"textInput":return t=e.data,t===Xg&&Zg?null:t;default:return null}}function yA(t,e){if(Qs)return t==="compositionend"||!Rp&&VE(t,e)?(t=OE(),Cu=Tp=ai=null,Qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return LE&&e.locale!=="ko"?null:e.data;default:return null}}var _A={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ey(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_A[t.type]:e==="textarea"}function UE(t,e,n,r){mE(r),e=nc(e,"onChange"),0<e.length&&(n=new Ip("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Na=null,Ga=null;function vA(t){QE(t,0)}function qc(t){var e=Xs(t);if(lE(e))return t}function EA(t,e){if(t==="change")return e}var FE=!1;if(Ar){var ed;if(Ar){var td="oninput"in document;if(!td){var ty=document.createElement("div");ty.setAttribute("oninput","return;"),td=typeof ty.oninput=="function"}ed=td}else ed=!1;FE=ed&&(!document.documentMode||9<document.documentMode)}function ny(){Na&&(Na.detachEvent("onpropertychange",jE),Ga=Na=null)}function jE(t){if(t.propertyName==="value"&&qc(Ga)){var e=[];UE(e,Ga,t,yp(t)),vE(vA,e)}}function wA(t,e,n){t==="focusin"?(ny(),Na=e,Ga=n,Na.attachEvent("onpropertychange",jE)):t==="focusout"&&ny()}function TA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qc(Ga)}function IA(t,e){if(t==="click")return qc(e)}function SA(t,e){if(t==="input"||t==="change")return qc(e)}function RA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:RA;function Qa(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Od.call(e,i)||!Fn(t[i],e[i]))return!1}return!0}function ry(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function iy(t,e){var n=ry(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ry(n)}}function zE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function BE(){for(var t=window,e=Qu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Qu(t.document)}return e}function Ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function AA(t){var e=BE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zE(n.ownerDocument.documentElement,n)){if(r!==null&&Ap(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=iy(n,s);var o=iy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var PA=Ar&&"documentMode"in document&&11>=document.documentMode,Ys=null,Zd=null,Da=null,ef=!1;function sy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ef||Ys==null||Ys!==Qu(r)||(r=Ys,"selectionStart"in r&&Ap(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Da&&Qa(Da,r)||(Da=r,r=nc(Zd,"onSelect"),0<r.length&&(e=new Ip("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ys)))}function ou(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Js={animationend:ou("Animation","AnimationEnd"),animationiteration:ou("Animation","AnimationIteration"),animationstart:ou("Animation","AnimationStart"),transitionend:ou("Transition","TransitionEnd")},nd={},$E={};Ar&&($E=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function Kc(t){if(nd[t])return nd[t];if(!Js[t])return t;var e=Js[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $E)return nd[t]=e[n];return t}var HE=Kc("animationend"),WE=Kc("animationiteration"),qE=Kc("animationstart"),KE=Kc("transitionend"),GE=new Map,oy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xi(t,e){GE.set(t,e),As(e,[t])}for(var rd=0;rd<oy.length;rd++){var id=oy[rd],CA=id.toLowerCase(),kA=id[0].toUpperCase()+id.slice(1);xi(CA,"on"+kA)}xi(HE,"onAnimationEnd");xi(WE,"onAnimationIteration");xi(qE,"onAnimationStart");xi("dblclick","onDoubleClick");xi("focusin","onFocus");xi("focusout","onBlur");xi(KE,"onTransitionEnd");Eo("onMouseEnter",["mouseout","mouseover"]);Eo("onMouseLeave",["mouseout","mouseover"]);Eo("onPointerEnter",["pointerout","pointerover"]);Eo("onPointerLeave",["pointerout","pointerover"]);As("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));As("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));As("onBeforeInput",["compositionend","keypress","textInput","paste"]);As("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));As("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));As("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NA=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function ay(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,CR(r,e,void 0,t),t.currentTarget=null}function QE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;ay(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;ay(i,l,c),s=u}}}if(Ju)throw t=Qd,Ju=!1,Qd=null,t}function Oe(t,e){var n=e[of];n===void 0&&(n=e[of]=new Set);var r=t+"__bubble";n.has(r)||(YE(e,t,2,!1),n.add(r))}function sd(t,e,n){var r=0;e&&(r|=4),YE(n,t,r,e)}var au="_reactListening"+Math.random().toString(36).slice(2);function Ya(t){if(!t[au]){t[au]=!0,rE.forEach(function(n){n!=="selectionchange"&&(NA.has(n)||sd(n,!1,t),sd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[au]||(e[au]=!0,sd("selectionchange",!1,e))}}function YE(t,e,n,r){switch(bE(e)){case 1:var i=HR;break;case 4:i=WR;break;default:i=wp}n=i.bind(null,e,n,t),i=void 0,!Gd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function od(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ns(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}vE(function(){var c=s,d=yp(n),f=[];e:{var m=GE.get(t);if(m!==void 0){var E=Ip,A=t;switch(t){case"keypress":if(ku(n)===0)break e;case"keydown":case"keyup":E=oA;break;case"focusin":A="focus",E=Zh;break;case"focusout":A="blur",E=Zh;break;case"beforeblur":case"afterblur":E=Zh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Qg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=GR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=uA;break;case HE:case WE:case qE:E=JR;break;case KE:E=hA;break;case"scroll":E=qR;break;case"wheel":E=fA;break;case"copy":case"cut":case"paste":E=ZR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Jg}var k=(e&4)!==0,D=!k&&t==="scroll",I=k?m!==null?m+"Capture":null:m;k=[];for(var v=c,S;v!==null;){S=v;var L=S.stateNode;if(S.tag===5&&L!==null&&(S=L,I!==null&&(L=Ha(v,I),L!=null&&k.push(Ja(v,L,S)))),D)break;v=v.return}0<k.length&&(m=new E(m,A,null,n,d),f.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==qd&&(A=n.relatedTarget||n.fromElement)&&(ns(A)||A[Pr]))break e;if((E||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,E?(A=n.relatedTarget||n.toElement,E=c,A=A?ns(A):null,A!==null&&(D=Ps(A),A!==D||A.tag!==5&&A.tag!==6)&&(A=null)):(E=null,A=c),E!==A)){if(k=Qg,L="onMouseLeave",I="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(k=Jg,L="onPointerLeave",I="onPointerEnter",v="pointer"),D=E==null?m:Xs(E),S=A==null?m:Xs(A),m=new k(L,v+"leave",E,n,d),m.target=D,m.relatedTarget=S,L=null,ns(d)===c&&(k=new k(I,v+"enter",A,n,d),k.target=S,k.relatedTarget=D,L=k),D=L,E&&A)t:{for(k=E,I=A,v=0,S=k;S;S=zs(S))v++;for(S=0,L=I;L;L=zs(L))S++;for(;0<v-S;)k=zs(k),v--;for(;0<S-v;)I=zs(I),S--;for(;v--;){if(k===I||I!==null&&k===I.alternate)break t;k=zs(k),I=zs(I)}k=null}else k=null;E!==null&&ly(f,m,E,k,!1),A!==null&&D!==null&&ly(f,D,A,k,!0)}}e:{if(m=c?Xs(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var F=EA;else if(ey(m))if(FE)F=SA;else{F=TA;var $=wA}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=IA);if(F&&(F=F(t,c))){UE(f,F,n,d);break e}$&&$(t,m,c),t==="focusout"&&($=m._wrapperState)&&$.controlled&&m.type==="number"&&zd(m,"number",m.value)}switch($=c?Xs(c):window,t){case"focusin":(ey($)||$.contentEditable==="true")&&(Ys=$,Zd=c,Da=null);break;case"focusout":Da=Zd=Ys=null;break;case"mousedown":ef=!0;break;case"contextmenu":case"mouseup":case"dragend":ef=!1,sy(f,n,d);break;case"selectionchange":if(PA)break;case"keydown":case"keyup":sy(f,n,d)}var g;if(Rp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Qs?VE(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(LE&&n.locale!=="ko"&&(Qs||y!=="onCompositionStart"?y==="onCompositionEnd"&&Qs&&(g=OE()):(ai=d,Tp="value"in ai?ai.value:ai.textContent,Qs=!0)),$=nc(c,y),0<$.length&&(y=new Yg(y,t,null,n,d),f.push({event:y,listeners:$}),g?y.data=g:(g=ME(n),g!==null&&(y.data=g)))),(g=mA?gA(t,n):yA(t,n))&&(c=nc(c,"onBeforeInput"),0<c.length&&(d=new Yg("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=g))}QE(f,e)})}function Ja(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ha(t,n),s!=null&&r.unshift(Ja(t,s,i)),s=Ha(t,e),s!=null&&r.push(Ja(t,s,i))),t=t.return}return r}function zs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ly(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Ha(n,s),u!=null&&o.unshift(Ja(n,u,l))):i||(u=Ha(n,s),u!=null&&o.push(Ja(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var DA=/\r\n?/g,xA=/\u0000|\uFFFD/g;function uy(t){return(typeof t=="string"?t:""+t).replace(DA,`
`).replace(xA,"")}function lu(t,e,n){if(e=uy(e),uy(t)!==e&&n)throw Error(B(425))}function rc(){}var tf=null,nf=null;function rf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sf=typeof setTimeout=="function"?setTimeout:void 0,bA=typeof clearTimeout=="function"?clearTimeout:void 0,cy=typeof Promise=="function"?Promise:void 0,OA=typeof queueMicrotask=="function"?queueMicrotask:typeof cy<"u"?function(t){return cy.resolve(null).then(t).catch(LA)}:sf;function LA(t){setTimeout(function(){throw t})}function ad(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ka(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ka(e)}function fi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Lo=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Lo,Xa="__reactProps$"+Lo,Pr="__reactContainer$"+Lo,of="__reactEvents$"+Lo,VA="__reactListeners$"+Lo,MA="__reactHandles$"+Lo;function ns(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pr]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hy(t);t!==null;){if(n=t[Yn])return n;t=hy(t)}return e}t=n,n=t.parentNode}return null}function El(t){return t=t[Yn]||t[Pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Gc(t){return t[Xa]||null}var af=[],Zs=-1;function bi(t){return{current:t}}function Me(t){0>Zs||(t.current=af[Zs],af[Zs]=null,Zs--)}function Ne(t,e){Zs++,af[Zs]=t.current,t.current=e}var Ii={},Vt=bi(Ii),Zt=bi(!1),ds=Ii;function wo(t,e){var n=t.type.contextTypes;if(!n)return Ii;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function en(t){return t=t.childContextTypes,t!=null}function ic(){Me(Zt),Me(Vt)}function dy(t,e,n){if(Vt.current!==Ii)throw Error(B(168));Ne(Vt,e),Ne(Zt,n)}function JE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,wR(t)||"Unknown",i));return $e({},n,r)}function sc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ii,ds=Vt.current,Ne(Vt,t),Ne(Zt,Zt.current),!0}function fy(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=JE(t,e,ds),r.__reactInternalMemoizedMergedChildContext=t,Me(Zt),Me(Vt),Ne(Vt,t)):Me(Zt),Ne(Zt,n)}var mr=null,Qc=!1,ld=!1;function XE(t){mr===null?mr=[t]:mr.push(t)}function UA(t){Qc=!0,XE(t)}function Oi(){if(!ld&&mr!==null){ld=!0;var t=0,e=Pe;try{var n=mr;for(Pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mr=null,Qc=!1}catch(i){throw mr!==null&&(mr=mr.slice(t+1)),IE(_p,Oi),i}finally{Pe=e,ld=!1}}return null}var eo=[],to=0,oc=null,ac=0,mn=[],gn=0,fs=null,yr=1,_r="";function Ji(t,e){eo[to++]=ac,eo[to++]=oc,oc=t,ac=e}function ZE(t,e,n){mn[gn++]=yr,mn[gn++]=_r,mn[gn++]=fs,fs=t;var r=yr;t=_r;var i=32-On(r)-1;r&=~(1<<i),n+=1;var s=32-On(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yr=1<<32-On(e)+i|n<<i|r,_r=s+t}else yr=1<<s|n<<i|r,_r=t}function Pp(t){t.return!==null&&(Ji(t,1),ZE(t,1,0))}function Cp(t){for(;t===oc;)oc=eo[--to],eo[to]=null,ac=eo[--to],eo[to]=null;for(;t===fs;)fs=mn[--gn],mn[gn]=null,_r=mn[--gn],mn[gn]=null,yr=mn[--gn],mn[gn]=null}var cn=null,an=null,Fe=!1,xn=null;function ew(t,e){var n=_n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function py(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,cn=t,an=fi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,cn=t,an=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fs!==null?{id:yr,overflow:_r}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,cn=t,an=null,!0):!1;default:return!1}}function lf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uf(t){if(Fe){var e=an;if(e){var n=e;if(!py(t,e)){if(lf(t))throw Error(B(418));e=fi(n.nextSibling);var r=cn;e&&py(t,e)?ew(r,n):(t.flags=t.flags&-4097|2,Fe=!1,cn=t)}}else{if(lf(t))throw Error(B(418));t.flags=t.flags&-4097|2,Fe=!1,cn=t}}}function my(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;cn=t}function uu(t){if(t!==cn)return!1;if(!Fe)return my(t),Fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rf(t.type,t.memoizedProps)),e&&(e=an)){if(lf(t))throw tw(),Error(B(418));for(;e;)ew(t,e),e=fi(e.nextSibling)}if(my(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){an=fi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}an=null}}else an=cn?fi(t.stateNode.nextSibling):null;return!0}function tw(){for(var t=an;t;)t=fi(t.nextSibling)}function To(){an=cn=null,Fe=!1}function kp(t){xn===null?xn=[t]:xn.push(t)}var FA=Mr.ReactCurrentBatchConfig;function aa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function cu(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gy(t){var e=t._init;return e(t._payload)}function nw(t){function e(I,v){if(t){var S=I.deletions;S===null?(I.deletions=[v],I.flags|=16):S.push(v)}}function n(I,v){if(!t)return null;for(;v!==null;)e(I,v),v=v.sibling;return null}function r(I,v){for(I=new Map;v!==null;)v.key!==null?I.set(v.key,v):I.set(v.index,v),v=v.sibling;return I}function i(I,v){return I=yi(I,v),I.index=0,I.sibling=null,I}function s(I,v,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<v?(I.flags|=2,v):S):(I.flags|=2,v)):(I.flags|=1048576,v)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,v,S,L){return v===null||v.tag!==6?(v=md(S,I.mode,L),v.return=I,v):(v=i(v,S),v.return=I,v)}function u(I,v,S,L){var F=S.type;return F===Gs?d(I,v,S.props.children,L,S.key):v!==null&&(v.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Xr&&gy(F)===v.type)?(L=i(v,S.props),L.ref=aa(I,v,S),L.return=I,L):(L=Vu(S.type,S.key,S.props,null,I.mode,L),L.ref=aa(I,v,S),L.return=I,L)}function c(I,v,S,L){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=gd(S,I.mode,L),v.return=I,v):(v=i(v,S.children||[]),v.return=I,v)}function d(I,v,S,L,F){return v===null||v.tag!==7?(v=us(S,I.mode,L,F),v.return=I,v):(v=i(v,S),v.return=I,v)}function f(I,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=md(""+v,I.mode,S),v.return=I,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Zl:return S=Vu(v.type,v.key,v.props,null,I.mode,S),S.ref=aa(I,null,v),S.return=I,S;case Ks:return v=gd(v,I.mode,S),v.return=I,v;case Xr:var L=v._init;return f(I,L(v._payload),S)}if(ya(v)||na(v))return v=us(v,I.mode,S,null),v.return=I,v;cu(I,v)}return null}function m(I,v,S,L){var F=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return F!==null?null:l(I,v,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Zl:return S.key===F?u(I,v,S,L):null;case Ks:return S.key===F?c(I,v,S,L):null;case Xr:return F=S._init,m(I,v,F(S._payload),L)}if(ya(S)||na(S))return F!==null?null:d(I,v,S,L,null);cu(I,S)}return null}function E(I,v,S,L,F){if(typeof L=="string"&&L!==""||typeof L=="number")return I=I.get(S)||null,l(v,I,""+L,F);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Zl:return I=I.get(L.key===null?S:L.key)||null,u(v,I,L,F);case Ks:return I=I.get(L.key===null?S:L.key)||null,c(v,I,L,F);case Xr:var $=L._init;return E(I,v,S,$(L._payload),F)}if(ya(L)||na(L))return I=I.get(S)||null,d(v,I,L,F,null);cu(v,L)}return null}function A(I,v,S,L){for(var F=null,$=null,g=v,y=v=0,w=null;g!==null&&y<S.length;y++){g.index>y?(w=g,g=null):w=g.sibling;var T=m(I,g,S[y],L);if(T===null){g===null&&(g=w);break}t&&g&&T.alternate===null&&e(I,g),v=s(T,v,y),$===null?F=T:$.sibling=T,$=T,g=w}if(y===S.length)return n(I,g),Fe&&Ji(I,y),F;if(g===null){for(;y<S.length;y++)g=f(I,S[y],L),g!==null&&(v=s(g,v,y),$===null?F=g:$.sibling=g,$=g);return Fe&&Ji(I,y),F}for(g=r(I,g);y<S.length;y++)w=E(g,I,y,S[y],L),w!==null&&(t&&w.alternate!==null&&g.delete(w.key===null?y:w.key),v=s(w,v,y),$===null?F=w:$.sibling=w,$=w);return t&&g.forEach(function(P){return e(I,P)}),Fe&&Ji(I,y),F}function k(I,v,S,L){var F=na(S);if(typeof F!="function")throw Error(B(150));if(S=F.call(S),S==null)throw Error(B(151));for(var $=F=null,g=v,y=v=0,w=null,T=S.next();g!==null&&!T.done;y++,T=S.next()){g.index>y?(w=g,g=null):w=g.sibling;var P=m(I,g,T.value,L);if(P===null){g===null&&(g=w);break}t&&g&&P.alternate===null&&e(I,g),v=s(P,v,y),$===null?F=P:$.sibling=P,$=P,g=w}if(T.done)return n(I,g),Fe&&Ji(I,y),F;if(g===null){for(;!T.done;y++,T=S.next())T=f(I,T.value,L),T!==null&&(v=s(T,v,y),$===null?F=T:$.sibling=T,$=T);return Fe&&Ji(I,y),F}for(g=r(I,g);!T.done;y++,T=S.next())T=E(g,I,y,T.value,L),T!==null&&(t&&T.alternate!==null&&g.delete(T.key===null?y:T.key),v=s(T,v,y),$===null?F=T:$.sibling=T,$=T);return t&&g.forEach(function(N){return e(I,N)}),Fe&&Ji(I,y),F}function D(I,v,S,L){if(typeof S=="object"&&S!==null&&S.type===Gs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Zl:e:{for(var F=S.key,$=v;$!==null;){if($.key===F){if(F=S.type,F===Gs){if($.tag===7){n(I,$.sibling),v=i($,S.props.children),v.return=I,I=v;break e}}else if($.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Xr&&gy(F)===$.type){n(I,$.sibling),v=i($,S.props),v.ref=aa(I,$,S),v.return=I,I=v;break e}n(I,$);break}else e(I,$);$=$.sibling}S.type===Gs?(v=us(S.props.children,I.mode,L,S.key),v.return=I,I=v):(L=Vu(S.type,S.key,S.props,null,I.mode,L),L.ref=aa(I,v,S),L.return=I,I=L)}return o(I);case Ks:e:{for($=S.key;v!==null;){if(v.key===$)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(I,v.sibling),v=i(v,S.children||[]),v.return=I,I=v;break e}else{n(I,v);break}else e(I,v);v=v.sibling}v=gd(S,I.mode,L),v.return=I,I=v}return o(I);case Xr:return $=S._init,D(I,v,$(S._payload),L)}if(ya(S))return A(I,v,S,L);if(na(S))return k(I,v,S,L);cu(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(I,v.sibling),v=i(v,S),v.return=I,I=v):(n(I,v),v=md(S,I.mode,L),v.return=I,I=v),o(I)):n(I,v)}return D}var Io=nw(!0),rw=nw(!1),lc=bi(null),uc=null,no=null,Np=null;function Dp(){Np=no=uc=null}function xp(t){var e=lc.current;Me(lc),t._currentValue=e}function cf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function uo(t,e){uc=t,Np=no=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Xt=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(Np!==t)if(t={context:t,memoizedValue:e,next:null},no===null){if(uc===null)throw Error(B(308));no=t,uc.dependencies={lanes:0,firstContext:t}}else no=no.next=t;return e}var rs=null;function bp(t){rs===null?rs=[t]:rs.push(t)}function iw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,bp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Cr(t,r)}function Cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zr=!1;function Op(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,we&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Cr(t,n)}return i=r.interleaved,i===null?(e.next=e,bp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Cr(t,n)}function Nu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vp(t,n)}}function yy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cc(t,e,n,r){var i=t.updateQueue;Zr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,E=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,k=l;switch(m=e,E=n,k.tag){case 1:if(A=k.payload,typeof A=="function"){f=A.call(E,f,m);break e}f=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=k.payload,m=typeof A=="function"?A.call(E,f,m):A,m==null)break e;f=$e({},f,m);break e;case 2:Zr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else E={eventTime:E,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=E,u=f):d=d.next=E,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ms|=o,t.lanes=o,t.memoizedState=f}}function _y(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var wl={},er=bi(wl),Za=bi(wl),el=bi(wl);function is(t){if(t===wl)throw Error(B(174));return t}function Lp(t,e){switch(Ne(el,e),Ne(Za,t),Ne(er,wl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$d(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$d(e,t)}Me(er),Ne(er,e)}function So(){Me(er),Me(Za),Me(el)}function ow(t){is(el.current);var e=is(er.current),n=$d(e,t.type);e!==n&&(Ne(Za,t),Ne(er,n))}function Vp(t){Za.current===t&&(Me(er),Me(Za))}var ze=bi(0);function hc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ud=[];function Mp(){for(var t=0;t<ud.length;t++)ud[t]._workInProgressVersionPrimary=null;ud.length=0}var Du=Mr.ReactCurrentDispatcher,cd=Mr.ReactCurrentBatchConfig,ps=0,Be=null,ut=null,vt=null,dc=!1,xa=!1,tl=0,jA=0;function Nt(){throw Error(B(321))}function Up(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function Fp(t,e,n,r,i,s){if(ps=s,Be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Du.current=t===null||t.memoizedState===null?HA:WA,t=n(r,i),xa){s=0;do{if(xa=!1,tl=0,25<=s)throw Error(B(301));s+=1,vt=ut=null,e.updateQueue=null,Du.current=qA,t=n(r,i)}while(xa)}if(Du.current=fc,e=ut!==null&&ut.next!==null,ps=0,vt=ut=Be=null,dc=!1,e)throw Error(B(300));return t}function jp(){var t=tl!==0;return tl=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Be.memoizedState=vt=t:vt=vt.next=t,vt}function wn(){if(ut===null){var t=Be.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var e=vt===null?Be.memoizedState:vt.next;if(e!==null)vt=e,ut=t;else{if(t===null)throw Error(B(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},vt===null?Be.memoizedState=vt=t:vt=vt.next=t}return vt}function nl(t,e){return typeof e=="function"?e(t):e}function hd(t){var e=wn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=ut,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((ps&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,o=r):u=u.next=f,Be.lanes|=d,ms|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Fn(r,e.memoizedState)||(Xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Be.lanes|=s,ms|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function dd(t){var e=wn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Fn(s,e.memoizedState)||(Xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function aw(){}function lw(t,e){var n=Be,r=wn(),i=e(),s=!Fn(r.memoizedState,i);if(s&&(r.memoizedState=i,Xt=!0),r=r.queue,zp(hw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||vt!==null&&vt.memoizedState.tag&1){if(n.flags|=2048,rl(9,cw.bind(null,n,r,i,e),void 0,null),Et===null)throw Error(B(349));ps&30||uw(n,e,i)}return i}function uw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cw(t,e,n,r){e.value=n,e.getSnapshot=r,dw(e)&&fw(t)}function hw(t,e,n){return n(function(){dw(e)&&fw(t)})}function dw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function fw(t){var e=Cr(t,1);e!==null&&Ln(e,t,1,-1)}function vy(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:t},e.queue=t,t=t.dispatch=$A.bind(null,Be,t),[e.memoizedState,t]}function rl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function pw(){return wn().memoizedState}function xu(t,e,n,r){var i=Gn();Be.flags|=t,i.memoizedState=rl(1|e,n,void 0,r===void 0?null:r)}function Yc(t,e,n,r){var i=wn();r=r===void 0?null:r;var s=void 0;if(ut!==null){var o=ut.memoizedState;if(s=o.destroy,r!==null&&Up(r,o.deps)){i.memoizedState=rl(e,n,s,r);return}}Be.flags|=t,i.memoizedState=rl(1|e,n,s,r)}function Ey(t,e){return xu(8390656,8,t,e)}function zp(t,e){return Yc(2048,8,t,e)}function mw(t,e){return Yc(4,2,t,e)}function gw(t,e){return Yc(4,4,t,e)}function yw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _w(t,e,n){return n=n!=null?n.concat([t]):null,Yc(4,4,yw.bind(null,e,t),n)}function Bp(){}function vw(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Up(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ew(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Up(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ww(t,e,n){return ps&21?(Fn(n,e)||(n=AE(),Be.lanes|=n,ms|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Xt=!0),t.memoizedState=n)}function zA(t,e){var n=Pe;Pe=n!==0&&4>n?n:4,t(!0);var r=cd.transition;cd.transition={};try{t(!1),e()}finally{Pe=n,cd.transition=r}}function Tw(){return wn().memoizedState}function BA(t,e,n){var r=gi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Iw(t))Sw(e,n);else if(n=iw(t,e,n,r),n!==null){var i=zt();Ln(n,t,r,i),Rw(n,e,r)}}function $A(t,e,n){var r=gi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Iw(t))Sw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Fn(l,o)){var u=e.interleaved;u===null?(i.next=i,bp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=iw(t,e,i,r),n!==null&&(i=zt(),Ln(n,t,r,i),Rw(n,e,r))}}function Iw(t){var e=t.alternate;return t===Be||e!==null&&e===Be}function Sw(t,e){xa=dc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vp(t,n)}}var fc={readContext:En,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},HA={readContext:En,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:Ey,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xu(4194308,4,yw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xu(4194308,4,t,e)},useInsertionEffect:function(t,e){return xu(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=BA.bind(null,Be,t),[r.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:vy,useDebugValue:Bp,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=vy(!1),e=t[0];return t=zA.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Be,i=Gn();if(Fe){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),Et===null)throw Error(B(349));ps&30||uw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ey(hw.bind(null,r,s,t),[t]),r.flags|=2048,rl(9,cw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Gn(),e=Et.identifierPrefix;if(Fe){var n=_r,r=yr;n=(r&~(1<<32-On(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=tl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},WA={readContext:En,useCallback:vw,useContext:En,useEffect:zp,useImperativeHandle:_w,useInsertionEffect:mw,useLayoutEffect:gw,useMemo:Ew,useReducer:hd,useRef:pw,useState:function(){return hd(nl)},useDebugValue:Bp,useDeferredValue:function(t){var e=wn();return ww(e,ut.memoizedState,t)},useTransition:function(){var t=hd(nl)[0],e=wn().memoizedState;return[t,e]},useMutableSource:aw,useSyncExternalStore:lw,useId:Tw,unstable_isNewReconciler:!1},qA={readContext:En,useCallback:vw,useContext:En,useEffect:zp,useImperativeHandle:_w,useInsertionEffect:mw,useLayoutEffect:gw,useMemo:Ew,useReducer:dd,useRef:pw,useState:function(){return dd(nl)},useDebugValue:Bp,useDeferredValue:function(t){var e=wn();return ut===null?e.memoizedState=t:ww(e,ut.memoizedState,t)},useTransition:function(){var t=dd(nl)[0],e=wn().memoizedState;return[t,e]},useMutableSource:aw,useSyncExternalStore:lw,useId:Tw,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=$e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:$e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jc={isMounted:function(t){return(t=t._reactInternals)?Ps(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=zt(),i=gi(t),s=Tr(r,i);s.payload=e,n!=null&&(s.callback=n),e=pi(t,s,i),e!==null&&(Ln(e,t,i,r),Nu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=zt(),i=gi(t),s=Tr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pi(t,s,i),e!==null&&(Ln(e,t,i,r),Nu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=zt(),r=gi(t),i=Tr(n,r);i.tag=2,e!=null&&(i.callback=e),e=pi(t,i,r),e!==null&&(Ln(e,t,r,n),Nu(e,t,r))}};function wy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qa(n,r)||!Qa(i,s):!0}function Aw(t,e,n){var r=!1,i=Ii,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(i=en(e)?ds:Vt.current,r=e.contextTypes,s=(r=r!=null)?wo(t,i):Ii),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ty(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Jc.enqueueReplaceState(e,e.state,null)}function df(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Op(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=En(s):(s=en(e)?ds:Vt.current,i.context=wo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Jc.enqueueReplaceState(i,i.state,null),cc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ro(t,e){try{var n="",r=e;do n+=ER(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function fd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ff(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var KA=typeof WeakMap=="function"?WeakMap:Map;function Pw(t,e,n){n=Tr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){mc||(mc=!0,If=r),ff(t,e)},n}function Cw(t,e,n){n=Tr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ff(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ff(t,e),typeof r!="function"&&(mi===null?mi=new Set([this]):mi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Iy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new KA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=aP.bind(null,t,e,n),e.then(t,t))}function Sy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ry(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tr(-1,1),e.tag=2,pi(n,e,1))),n.lanes|=1),t)}var GA=Mr.ReactCurrentOwner,Xt=!1;function jt(t,e,n,r){e.child=t===null?rw(e,null,n,r):Io(e,t.child,n,r)}function Ay(t,e,n,r,i){n=n.render;var s=e.ref;return uo(e,i),r=Fp(t,e,n,r,s,i),n=jp(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kr(t,e,i)):(Fe&&n&&Pp(e),e.flags|=1,jt(t,e,r,i),e.child)}function Py(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Yp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,kw(t,e,s,r,i)):(t=Vu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qa,n(o,r)&&t.ref===e.ref)return kr(t,e,i)}return e.flags|=1,t=yi(s,r),t.ref=e.ref,t.return=e,e.child=t}function kw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Qa(s,r)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Xt=!0);else return e.lanes=t.lanes,kr(t,e,i)}return pf(t,e,n,r,i)}function Nw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(io,sn),sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ne(io,sn),sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ne(io,sn),sn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ne(io,sn),sn|=r;return jt(t,e,i,n),e.child}function Dw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pf(t,e,n,r,i){var s=en(n)?ds:Vt.current;return s=wo(e,s),uo(e,i),n=Fp(t,e,n,r,s,i),r=jp(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kr(t,e,i)):(Fe&&r&&Pp(e),e.flags|=1,jt(t,e,n,i),e.child)}function Cy(t,e,n,r,i){if(en(n)){var s=!0;sc(e)}else s=!1;if(uo(e,i),e.stateNode===null)bu(t,e),Aw(e,n,r),df(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=En(c):(c=en(n)?ds:Vt.current,c=wo(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Ty(e,o,r,c),Zr=!1;var m=e.memoizedState;o.state=m,cc(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Zt.current||Zr?(typeof d=="function"&&(hf(e,n,d,r),u=e.memoizedState),(l=Zr||wy(e,n,l,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,sw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:kn(e.type,l),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=En(u):(u=en(n)?ds:Vt.current,u=wo(e,u));var E=n.getDerivedStateFromProps;(d=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||m!==u)&&Ty(e,o,r,u),Zr=!1,m=e.memoizedState,o.state=m,cc(e,r,o,i);var A=e.memoizedState;l!==f||m!==A||Zt.current||Zr?(typeof E=="function"&&(hf(e,n,E,r),A=e.memoizedState),(c=Zr||wy(e,n,c,r,m,A,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return mf(t,e,n,r,s,i)}function mf(t,e,n,r,i,s){Dw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&fy(e,n,!1),kr(t,e,s);r=e.stateNode,GA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Io(e,t.child,null,s),e.child=Io(e,null,l,s)):jt(t,e,l,s),e.memoizedState=r.state,i&&fy(e,n,!0),e.child}function xw(t){var e=t.stateNode;e.pendingContext?dy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dy(t,e.context,!1),Lp(t,e.containerInfo)}function ky(t,e,n,r,i){return To(),kp(i),e.flags|=256,jt(t,e,n,r),e.child}var gf={dehydrated:null,treeContext:null,retryLane:0};function yf(t){return{baseLanes:t,cachePool:null,transitions:null}}function bw(t,e,n){var r=e.pendingProps,i=ze.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ne(ze,i&1),t===null)return uf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=eh(o,r,0,null),t=us(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yf(n),e.memoizedState=gf,t):$p(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return QA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=yi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=yi(l,s):(s=us(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?yf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=gf,r}return s=t.child,t=s.sibling,r=yi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function $p(t,e){return e=eh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hu(t,e,n,r){return r!==null&&kp(r),Io(e,t.child,null,n),t=$p(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function QA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=fd(Error(B(422))),hu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=eh({mode:"visible",children:r.children},i,0,null),s=us(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Io(e,t.child,null,o),e.child.memoizedState=yf(o),e.memoizedState=gf,s);if(!(e.mode&1))return hu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(B(419)),r=fd(s,r,void 0),hu(t,e,o,r)}if(l=(o&t.childLanes)!==0,Xt||l){if(r=Et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Cr(t,i),Ln(r,t,i,-1))}return Qp(),r=fd(Error(B(421))),hu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=lP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,an=fi(i.nextSibling),cn=e,Fe=!0,xn=null,t!==null&&(mn[gn++]=yr,mn[gn++]=_r,mn[gn++]=fs,yr=t.id,_r=t.overflow,fs=e),e=$p(e,r.children),e.flags|=4096,e)}function Ny(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cf(t.return,e,n)}function pd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ow(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(jt(t,e,r.children,n),r=ze.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ny(t,n,e);else if(t.tag===19)Ny(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ne(ze,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&hc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&hc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}pd(e,!0,n,null,s);break;case"together":pd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ms|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=yi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function YA(t,e,n){switch(e.tag){case 3:xw(e),To();break;case 5:ow(e);break;case 1:en(e.type)&&sc(e);break;case 4:Lp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ne(lc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ne(ze,ze.current&1),e.flags|=128,null):n&e.child.childLanes?bw(t,e,n):(Ne(ze,ze.current&1),t=kr(t,e,n),t!==null?t.sibling:null);Ne(ze,ze.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ow(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ne(ze,ze.current),r)break;return null;case 22:case 23:return e.lanes=0,Nw(t,e,n)}return kr(t,e,n)}var Lw,_f,Vw,Mw;Lw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_f=function(){};Vw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,is(er.current);var s=null;switch(n){case"input":i=Fd(t,i),r=Fd(t,r),s=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),s=[];break;case"textarea":i=Bd(t,i),r=Bd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=rc)}Hd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ba.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ba.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Oe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Mw=function(t,e,n,r){n!==r&&(e.flags|=4)};function la(t,e){if(!Fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function JA(t,e,n){var r=e.pendingProps;switch(Cp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return en(e.type)&&ic(),Dt(e),null;case 3:return r=e.stateNode,So(),Me(Zt),Me(Vt),Mp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(uu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xn!==null&&(Af(xn),xn=null))),_f(t,e),Dt(e),null;case 5:Vp(e);var i=is(el.current);if(n=e.type,t!==null&&e.stateNode!=null)Vw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return Dt(e),null}if(t=is(er.current),uu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Yn]=e,r[Xa]=s,t=(e.mode&1)!==0,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(i=0;i<va.length;i++)Oe(va[i],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":Fg(r,s),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Oe("invalid",r);break;case"textarea":zg(r,s),Oe("invalid",r)}Hd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&lu(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&lu(r.textContent,l,t),i=["children",""+l]):Ba.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Oe("scroll",r)}switch(n){case"input":eu(r),jg(r,s,!0);break;case"textarea":eu(r),Bg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=rc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yn]=e,t[Xa]=r,Lw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Wd(n,r),n){case"dialog":Oe("cancel",t),Oe("close",t),i=r;break;case"iframe":case"object":case"embed":Oe("load",t),i=r;break;case"video":case"audio":for(i=0;i<va.length;i++)Oe(va[i],t);i=r;break;case"source":Oe("error",t),i=r;break;case"img":case"image":case"link":Oe("error",t),Oe("load",t),i=r;break;case"details":Oe("toggle",t),i=r;break;case"input":Fg(t,r),i=Fd(t,r),Oe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),Oe("invalid",t);break;case"textarea":zg(t,r),i=Bd(t,r),Oe("invalid",t);break;default:i=r}Hd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?pE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&dE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&$a(t,u):typeof u=="number"&&$a(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ba.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Oe("scroll",t):u!=null&&fp(t,s,u,o))}switch(n){case"input":eu(t),jg(t,r,!1);break;case"textarea":eu(t),Bg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ti(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?so(t,!!r.multiple,s,!1):r.defaultValue!=null&&so(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=rc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Dt(e),null;case 6:if(t&&e.stateNode!=null)Mw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=is(el.current),is(er.current),uu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yn]=e,(s=r.nodeValue!==n)&&(t=cn,t!==null))switch(t.tag){case 3:lu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yn]=e,e.stateNode=r}return Dt(e),null;case 13:if(Me(ze),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Fe&&an!==null&&e.mode&1&&!(e.flags&128))tw(),To(),e.flags|=98560,s=!1;else if(s=uu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[Yn]=e}else To(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Dt(e),s=!1}else xn!==null&&(Af(xn),xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ze.current&1?dt===0&&(dt=3):Qp())),e.updateQueue!==null&&(e.flags|=4),Dt(e),null);case 4:return So(),_f(t,e),t===null&&Ya(e.stateNode.containerInfo),Dt(e),null;case 10:return xp(e.type._context),Dt(e),null;case 17:return en(e.type)&&ic(),Dt(e),null;case 19:if(Me(ze),s=e.memoizedState,s===null)return Dt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)la(s,!1);else{if(dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hc(t),o!==null){for(e.flags|=128,la(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ne(ze,ze.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ye()>Ao&&(e.flags|=128,r=!0,la(s,!1),e.lanes=4194304)}else{if(!r)if(t=hc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),la(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Fe)return Dt(e),null}else 2*Ye()-s.renderingStartTime>Ao&&n!==1073741824&&(e.flags|=128,r=!0,la(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ye(),e.sibling=null,n=ze.current,Ne(ze,r?n&1|2:n&1),e):(Dt(e),null);case 22:case 23:return Gp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?sn&1073741824&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function XA(t,e){switch(Cp(e),e.tag){case 1:return en(e.type)&&ic(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return So(),Me(Zt),Me(Vt),Mp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vp(e),null;case 13:if(Me(ze),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));To()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Me(ze),null;case 4:return So(),null;case 10:return xp(e.type._context),null;case 22:case 23:return Gp(),null;case 24:return null;default:return null}}var du=!1,Ot=!1,ZA=typeof WeakSet=="function"?WeakSet:Set,Q=null;function ro(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){qe(t,e,r)}else n.current=null}function vf(t,e,n){try{n()}catch(r){qe(t,e,r)}}var Dy=!1;function eP(t,e){if(tf=ec,t=BE(),Ap(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var E;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(E=f.firstChild)!==null;)m=f,f=E;for(;;){if(f===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(E=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(nf={focusedElem:t,selectionRange:n},ec=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var k=A.memoizedProps,D=A.memoizedState,I=e.stateNode,v=I.getSnapshotBeforeUpdate(e.elementType===e.type?k:kn(e.type,k),D);I.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(L){qe(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return A=Dy,Dy=!1,A}function ba(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vf(e,n,s)}i=i.next}while(i!==r)}}function Xc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ef(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Uw(t){var e=t.alternate;e!==null&&(t.alternate=null,Uw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[Xa],delete e[of],delete e[VA],delete e[MA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fw(t){return t.tag===5||t.tag===3||t.tag===4}function xy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rc));else if(r!==4&&(t=t.child,t!==null))for(wf(t,e,n),t=t.sibling;t!==null;)wf(t,e,n),t=t.sibling}function Tf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Tf(t,e,n),t=t.sibling;t!==null;)Tf(t,e,n),t=t.sibling}var It=null,Nn=!1;function Qr(t,e,n){for(n=n.child;n!==null;)jw(t,e,n),n=n.sibling}function jw(t,e,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(Hc,n)}catch{}switch(n.tag){case 5:Ot||ro(n,e);case 6:var r=It,i=Nn;It=null,Qr(t,e,n),It=r,Nn=i,It!==null&&(Nn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Nn?(t=It,n=n.stateNode,t.nodeType===8?ad(t.parentNode,n):t.nodeType===1&&ad(t,n),Ka(t)):ad(It,n.stateNode));break;case 4:r=It,i=Nn,It=n.stateNode.containerInfo,Nn=!0,Qr(t,e,n),It=r,Nn=i;break;case 0:case 11:case 14:case 15:if(!Ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vf(n,e,o),i=i.next}while(i!==r)}Qr(t,e,n);break;case 1:if(!Ot&&(ro(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){qe(n,e,l)}Qr(t,e,n);break;case 21:Qr(t,e,n);break;case 22:n.mode&1?(Ot=(r=Ot)||n.memoizedState!==null,Qr(t,e,n),Ot=r):Qr(t,e,n);break;default:Qr(t,e,n)}}function by(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ZA),e.forEach(function(r){var i=uP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:It=l.stateNode,Nn=!1;break e;case 3:It=l.stateNode.containerInfo,Nn=!0;break e;case 4:It=l.stateNode.containerInfo,Nn=!0;break e}l=l.return}if(It===null)throw Error(B(160));jw(s,o,i),It=null,Nn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){qe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zw(e,t),e=e.sibling}function zw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Kn(t),r&4){try{ba(3,t,t.return),Xc(3,t)}catch(k){qe(t,t.return,k)}try{ba(5,t,t.return)}catch(k){qe(t,t.return,k)}}break;case 1:Cn(e,t),Kn(t),r&512&&n!==null&&ro(n,n.return);break;case 5:if(Cn(e,t),Kn(t),r&512&&n!==null&&ro(n,n.return),t.flags&32){var i=t.stateNode;try{$a(i,"")}catch(k){qe(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&uE(i,s),Wd(l,o);var c=Wd(l,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?pE(i,f):d==="dangerouslySetInnerHTML"?dE(i,f):d==="children"?$a(i,f):fp(i,d,f,c)}switch(l){case"input":jd(i,s);break;case"textarea":cE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?so(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?so(i,!!s.multiple,s.defaultValue,!0):so(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xa]=s}catch(k){qe(t,t.return,k)}}break;case 6:if(Cn(e,t),Kn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){qe(t,t.return,k)}}break;case 3:if(Cn(e,t),Kn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ka(e.containerInfo)}catch(k){qe(t,t.return,k)}break;case 4:Cn(e,t),Kn(t);break;case 13:Cn(e,t),Kn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(qp=Ye())),r&4&&by(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(c=Ot)||d,Cn(e,t),Ot=c):Cn(e,t),Kn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Q=t,d=t.child;d!==null;){for(f=Q=d;Q!==null;){switch(m=Q,E=m.child,m.tag){case 0:case 11:case 14:case 15:ba(4,m,m.return);break;case 1:ro(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(k){qe(r,n,k)}}break;case 5:ro(m,m.return);break;case 22:if(m.memoizedState!==null){Ly(f);continue}}E!==null?(E.return=m,Q=E):Ly(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=fE("display",o))}catch(k){qe(t,t.return,k)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(k){qe(t,t.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Cn(e,t),Kn(t),r&4&&by(t);break;case 21:break;default:Cn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Fw(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($a(i,""),r.flags&=-33);var s=xy(t);Tf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=xy(t);wf(t,l,o);break;default:throw Error(B(161))}}catch(u){qe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tP(t,e,n){Q=t,Bw(t)}function Bw(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||du;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ot;l=du;var c=Ot;if(du=o,(Ot=u)&&!c)for(Q=i;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?Vy(i):u!==null?(u.return=o,Q=u):Vy(i);for(;s!==null;)Q=s,Bw(s),s=s.sibling;Q=i,du=l,Ot=c}Oy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):Oy(t)}}function Oy(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Xc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_y(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_y(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ka(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Ot||e.flags&512&&Ef(e)}catch(m){qe(e,e.return,m)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Ly(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Vy(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xc(4,e)}catch(u){qe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){qe(e,i,u)}}var s=e.return;try{Ef(e)}catch(u){qe(e,s,u)}break;case 5:var o=e.return;try{Ef(e)}catch(u){qe(e,o,u)}}}catch(u){qe(e,e.return,u)}if(e===t){Q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Q=l;break}Q=e.return}}var nP=Math.ceil,pc=Mr.ReactCurrentDispatcher,Hp=Mr.ReactCurrentOwner,vn=Mr.ReactCurrentBatchConfig,we=0,Et=null,tt=null,At=0,sn=0,io=bi(0),dt=0,il=null,ms=0,Zc=0,Wp=0,Oa=null,Qt=null,qp=0,Ao=1/0,pr=null,mc=!1,If=null,mi=null,fu=!1,li=null,gc=0,La=0,Sf=null,Ou=-1,Lu=0;function zt(){return we&6?Ye():Ou!==-1?Ou:Ou=Ye()}function gi(t){return t.mode&1?we&2&&At!==0?At&-At:FA.transition!==null?(Lu===0&&(Lu=AE()),Lu):(t=Pe,t!==0||(t=window.event,t=t===void 0?16:bE(t.type)),t):1}function Ln(t,e,n,r){if(50<La)throw La=0,Sf=null,Error(B(185));_l(t,n,r),(!(we&2)||t!==Et)&&(t===Et&&(!(we&2)&&(Zc|=n),dt===4&&ti(t,At)),tn(t,r),n===1&&we===0&&!(e.mode&1)&&(Ao=Ye()+500,Qc&&Oi()))}function tn(t,e){var n=t.callbackNode;FR(t,e);var r=Zu(t,t===Et?At:0);if(r===0)n!==null&&Wg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wg(n),e===1)t.tag===0?UA(My.bind(null,t)):XE(My.bind(null,t)),OA(function(){!(we&6)&&Oi()}),n=null;else{switch(PE(r)){case 1:n=_p;break;case 4:n=SE;break;case 16:n=Xu;break;case 536870912:n=RE;break;default:n=Xu}n=Yw(n,$w.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $w(t,e){if(Ou=-1,Lu=0,we&6)throw Error(B(327));var n=t.callbackNode;if(co()&&t.callbackNode!==n)return null;var r=Zu(t,t===Et?At:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=yc(t,r);else{e=r;var i=we;we|=2;var s=Ww();(Et!==t||At!==e)&&(pr=null,Ao=Ye()+500,ls(t,e));do try{sP();break}catch(l){Hw(t,l)}while(!0);Dp(),pc.current=s,we=i,tt!==null?e=0:(Et=null,At=0,e=dt)}if(e!==0){if(e===2&&(i=Yd(t),i!==0&&(r=i,e=Rf(t,i))),e===1)throw n=il,ls(t,0),ti(t,r),tn(t,Ye()),n;if(e===6)ti(t,r);else{if(i=t.current.alternate,!(r&30)&&!rP(i)&&(e=yc(t,r),e===2&&(s=Yd(t),s!==0&&(r=s,e=Rf(t,s))),e===1))throw n=il,ls(t,0),ti(t,r),tn(t,Ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Xi(t,Qt,pr);break;case 3:if(ti(t,r),(r&130023424)===r&&(e=qp+500-Ye(),10<e)){if(Zu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){zt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=sf(Xi.bind(null,t,Qt,pr),e);break}Xi(t,Qt,pr);break;case 4:if(ti(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-On(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nP(r/1960))-r,10<r){t.timeoutHandle=sf(Xi.bind(null,t,Qt,pr),r);break}Xi(t,Qt,pr);break;case 5:Xi(t,Qt,pr);break;default:throw Error(B(329))}}}return tn(t,Ye()),t.callbackNode===n?$w.bind(null,t):null}function Rf(t,e){var n=Oa;return t.current.memoizedState.isDehydrated&&(ls(t,e).flags|=256),t=yc(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&Af(e)),t}function Af(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function rP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Fn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ti(t,e){for(e&=~Wp,e&=~Zc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),r=1<<n;t[n]=-1,e&=~r}}function My(t){if(we&6)throw Error(B(327));co();var e=Zu(t,0);if(!(e&1))return tn(t,Ye()),null;var n=yc(t,e);if(t.tag!==0&&n===2){var r=Yd(t);r!==0&&(e=r,n=Rf(t,r))}if(n===1)throw n=il,ls(t,0),ti(t,e),tn(t,Ye()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xi(t,Qt,pr),tn(t,Ye()),null}function Kp(t,e){var n=we;we|=1;try{return t(e)}finally{we=n,we===0&&(Ao=Ye()+500,Qc&&Oi())}}function gs(t){li!==null&&li.tag===0&&!(we&6)&&co();var e=we;we|=1;var n=vn.transition,r=Pe;try{if(vn.transition=null,Pe=1,t)return t()}finally{Pe=r,vn.transition=n,we=e,!(we&6)&&Oi()}}function Gp(){sn=io.current,Me(io)}function ls(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,bA(n)),tt!==null)for(n=tt.return;n!==null;){var r=n;switch(Cp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ic();break;case 3:So(),Me(Zt),Me(Vt),Mp();break;case 5:Vp(r);break;case 4:So();break;case 13:Me(ze);break;case 19:Me(ze);break;case 10:xp(r.type._context);break;case 22:case 23:Gp()}n=n.return}if(Et=t,tt=t=yi(t.current,null),At=sn=e,dt=0,il=null,Wp=Zc=ms=0,Qt=Oa=null,rs!==null){for(e=0;e<rs.length;e++)if(n=rs[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}rs=null}return t}function Hw(t,e){do{var n=tt;try{if(Dp(),Du.current=fc,dc){for(var r=Be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}dc=!1}if(ps=0,vt=ut=Be=null,xa=!1,tl=0,Hp.current=null,n===null||n.return===null){dt=1,il=e,tt=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=At,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var E=Sy(o);if(E!==null){E.flags&=-257,Ry(E,o,l,s,e),E.mode&1&&Iy(s,c,e),e=E,u=c;var A=e.updateQueue;if(A===null){var k=new Set;k.add(u),e.updateQueue=k}else A.add(u);break e}else{if(!(e&1)){Iy(s,c,e),Qp();break e}u=Error(B(426))}}else if(Fe&&l.mode&1){var D=Sy(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Ry(D,o,l,s,e),kp(Ro(u,l));break e}}s=u=Ro(u,l),dt!==4&&(dt=2),Oa===null?Oa=[s]:Oa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=Pw(s,u,e);yy(s,I);break e;case 1:l=u;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(mi===null||!mi.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=Cw(s,l,e);yy(s,L);break e}}s=s.return}while(s!==null)}Kw(n)}catch(F){e=F,tt===n&&n!==null&&(tt=n=n.return);continue}break}while(!0)}function Ww(){var t=pc.current;return pc.current=fc,t===null?fc:t}function Qp(){(dt===0||dt===3||dt===2)&&(dt=4),Et===null||!(ms&268435455)&&!(Zc&268435455)||ti(Et,At)}function yc(t,e){var n=we;we|=2;var r=Ww();(Et!==t||At!==e)&&(pr=null,ls(t,e));do try{iP();break}catch(i){Hw(t,i)}while(!0);if(Dp(),we=n,pc.current=r,tt!==null)throw Error(B(261));return Et=null,At=0,dt}function iP(){for(;tt!==null;)qw(tt)}function sP(){for(;tt!==null&&!NR();)qw(tt)}function qw(t){var e=Qw(t.alternate,t,sn);t.memoizedProps=t.pendingProps,e===null?Kw(t):tt=e,Hp.current=null}function Kw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=XA(n,e),n!==null){n.flags&=32767,tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{dt=6,tt=null;return}}else if(n=JA(n,e,sn),n!==null){tt=n;return}if(e=e.sibling,e!==null){tt=e;return}tt=e=t}while(e!==null);dt===0&&(dt=5)}function Xi(t,e,n){var r=Pe,i=vn.transition;try{vn.transition=null,Pe=1,oP(t,e,n,r)}finally{vn.transition=i,Pe=r}return null}function oP(t,e,n,r){do co();while(li!==null);if(we&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(jR(t,s),t===Et&&(tt=Et=null,At=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fu||(fu=!0,Yw(Xu,function(){return co(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vn.transition,vn.transition=null;var o=Pe;Pe=1;var l=we;we|=4,Hp.current=null,eP(t,n),zw(n,t),AA(nf),ec=!!tf,nf=tf=null,t.current=n,tP(n),DR(),we=l,Pe=o,vn.transition=s}else t.current=n;if(fu&&(fu=!1,li=t,gc=i),s=t.pendingLanes,s===0&&(mi=null),OR(n.stateNode),tn(t,Ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(mc)throw mc=!1,t=If,If=null,t;return gc&1&&t.tag!==0&&co(),s=t.pendingLanes,s&1?t===Sf?La++:(La=0,Sf=t):La=0,Oi(),null}function co(){if(li!==null){var t=PE(gc),e=vn.transition,n=Pe;try{if(vn.transition=null,Pe=16>t?16:t,li===null)var r=!1;else{if(t=li,li=null,gc=0,we&6)throw Error(B(331));var i=we;for(we|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(Q=c;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:ba(8,d,s)}var f=d.child;if(f!==null)f.return=d,Q=f;else for(;Q!==null;){d=Q;var m=d.sibling,E=d.return;if(Uw(d),d===c){Q=null;break}if(m!==null){m.return=E,Q=m;break}Q=E}}}var A=s.alternate;if(A!==null){var k=A.child;if(k!==null){A.child=null;do{var D=k.sibling;k.sibling=null,k=D}while(k!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ba(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,Q=I;break e}Q=s.return}}var v=t.current;for(Q=v;Q!==null;){o=Q;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,Q=S;else e:for(o=v;Q!==null;){if(l=Q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xc(9,l)}}catch(F){qe(l,l.return,F)}if(l===o){Q=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,Q=L;break e}Q=l.return}}if(we=i,Oi(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(Hc,t)}catch{}r=!0}return r}finally{Pe=n,vn.transition=e}}return!1}function Uy(t,e,n){e=Ro(n,e),e=Pw(t,e,1),t=pi(t,e,1),e=zt(),t!==null&&(_l(t,1,e),tn(t,e))}function qe(t,e,n){if(t.tag===3)Uy(t,t,n);else for(;e!==null;){if(e.tag===3){Uy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mi===null||!mi.has(r))){t=Ro(n,t),t=Cw(e,t,1),e=pi(e,t,1),t=zt(),e!==null&&(_l(e,1,t),tn(e,t));break}}e=e.return}}function aP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=zt(),t.pingedLanes|=t.suspendedLanes&n,Et===t&&(At&n)===n&&(dt===4||dt===3&&(At&130023424)===At&&500>Ye()-qp?ls(t,0):Wp|=n),tn(t,e)}function Gw(t,e){e===0&&(t.mode&1?(e=ru,ru<<=1,!(ru&130023424)&&(ru=4194304)):e=1);var n=zt();t=Cr(t,e),t!==null&&(_l(t,e,n),tn(t,n))}function lP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Gw(t,n)}function uP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),Gw(t,n)}var Qw;Qw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zt.current)Xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Xt=!1,YA(t,e,n);Xt=!!(t.flags&131072)}else Xt=!1,Fe&&e.flags&1048576&&ZE(e,ac,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bu(t,e),t=e.pendingProps;var i=wo(e,Vt.current);uo(e,n),i=Fp(null,e,r,t,i,n);var s=jp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(r)?(s=!0,sc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Op(e),i.updater=Jc,e.stateNode=i,i._reactInternals=e,df(e,r,t,n),e=mf(null,e,r,!0,s,n)):(e.tag=0,Fe&&s&&Pp(e),jt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=hP(r),t=kn(r,t),i){case 0:e=pf(null,e,r,t,n);break e;case 1:e=Cy(null,e,r,t,n);break e;case 11:e=Ay(null,e,r,t,n);break e;case 14:e=Py(null,e,r,kn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),pf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),Cy(t,e,r,i,n);case 3:e:{if(xw(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,sw(t,e),cc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ro(Error(B(423)),e),e=ky(t,e,r,n,i);break e}else if(r!==i){i=Ro(Error(B(424)),e),e=ky(t,e,r,n,i);break e}else for(an=fi(e.stateNode.containerInfo.firstChild),cn=e,Fe=!0,xn=null,n=rw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(To(),r===i){e=kr(t,e,n);break e}jt(t,e,r,n)}e=e.child}return e;case 5:return ow(e),t===null&&uf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,rf(r,i)?o=null:s!==null&&rf(r,s)&&(e.flags|=32),Dw(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&uf(e),null;case 13:return bw(t,e,n);case 4:return Lp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Io(e,null,r,n):jt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),Ay(t,e,r,i,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ne(lc,r._currentValue),r._currentValue=o,s!==null)if(Fn(s.value,o)){if(s.children===i.children&&!Zt.current){e=kr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Tr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),cf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),cf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,uo(e,n),i=En(i),r=r(i),e.flags|=1,jt(t,e,r,n),e.child;case 14:return r=e.type,i=kn(r,e.pendingProps),i=kn(r.type,i),Py(t,e,r,i,n);case 15:return kw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),bu(t,e),e.tag=1,en(r)?(t=!0,sc(e)):t=!1,uo(e,n),Aw(e,r,i),df(e,r,i,n),mf(null,e,r,!0,t,n);case 19:return Ow(t,e,n);case 22:return Nw(t,e,n)}throw Error(B(156,e.tag))};function Yw(t,e){return IE(t,e)}function cP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,e,n,r){return new cP(t,e,n,r)}function Yp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hP(t){if(typeof t=="function")return Yp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===mp)return 11;if(t===gp)return 14}return 2}function yi(t,e){var n=t.alternate;return n===null?(n=_n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Yp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Gs:return us(n.children,i,s,e);case pp:o=8,i|=8;break;case Ld:return t=_n(12,n,e,i|2),t.elementType=Ld,t.lanes=s,t;case Vd:return t=_n(13,n,e,i),t.elementType=Vd,t.lanes=s,t;case Md:return t=_n(19,n,e,i),t.elementType=Md,t.lanes=s,t;case oE:return eh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case iE:o=10;break e;case sE:o=9;break e;case mp:o=11;break e;case gp:o=14;break e;case Xr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=_n(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function us(t,e,n,r){return t=_n(7,t,r,e),t.lanes=n,t}function eh(t,e,n,r){return t=_n(22,t,r,e),t.elementType=oE,t.lanes=n,t.stateNode={isHidden:!1},t}function md(t,e,n){return t=_n(6,t,null,e),t.lanes=n,t}function gd(t,e,n){return e=_n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yh(0),this.expirationTimes=Yh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jp(t,e,n,r,i,s,o,l,u){return t=new dP(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Op(s),t}function fP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ks,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Jw(t){if(!t)return Ii;t=t._reactInternals;e:{if(Ps(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(en(n))return JE(t,n,e)}return e}function Xw(t,e,n,r,i,s,o,l,u){return t=Jp(n,r,!0,t,i,s,o,l,u),t.context=Jw(null),n=t.current,r=zt(),i=gi(n),s=Tr(r,i),s.callback=e??null,pi(n,s,i),t.current.lanes=i,_l(t,i,r),tn(t,r),t}function th(t,e,n,r){var i=e.current,s=zt(),o=gi(i);return n=Jw(n),e.context===null?e.context=n:e.pendingContext=n,e=Tr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pi(i,e,o),t!==null&&(Ln(t,i,o,s),Nu(t,i,o)),o}function _c(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xp(t,e){Fy(t,e),(t=t.alternate)&&Fy(t,e)}function pP(){return null}var Zw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zp(t){this._internalRoot=t}nh.prototype.render=Zp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));th(t,e,null,null)};nh.prototype.unmount=Zp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gs(function(){th(null,t,null,null)}),e[Pr]=null}};function nh(t){this._internalRoot=t}nh.prototype.unstable_scheduleHydration=function(t){if(t){var e=NE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ei.length&&e!==0&&e<ei[n].priority;n++);ei.splice(n,0,t),n===0&&xE(t)}};function em(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jy(){}function mP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=_c(o);s.call(c)}}var o=Xw(e,r,t,0,null,!1,!1,"",jy);return t._reactRootContainer=o,t[Pr]=o.current,Ya(t.nodeType===8?t.parentNode:t),gs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=_c(u);l.call(c)}}var u=Jp(t,0,!1,null,null,!1,!1,"",jy);return t._reactRootContainer=u,t[Pr]=u.current,Ya(t.nodeType===8?t.parentNode:t),gs(function(){th(e,u,n,r)}),u}function ih(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=_c(o);l.call(u)}}th(e,o,t,i)}else o=mP(n,e,t,i,r);return _c(o)}CE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_a(e.pendingLanes);n!==0&&(vp(e,n|1),tn(e,Ye()),!(we&6)&&(Ao=Ye()+500,Oi()))}break;case 13:gs(function(){var r=Cr(t,1);if(r!==null){var i=zt();Ln(r,t,1,i)}}),Xp(t,1)}};Ep=function(t){if(t.tag===13){var e=Cr(t,134217728);if(e!==null){var n=zt();Ln(e,t,134217728,n)}Xp(t,134217728)}};kE=function(t){if(t.tag===13){var e=gi(t),n=Cr(t,e);if(n!==null){var r=zt();Ln(n,t,e,r)}Xp(t,e)}};NE=function(){return Pe};DE=function(t,e){var n=Pe;try{return Pe=t,e()}finally{Pe=n}};Kd=function(t,e,n){switch(e){case"input":if(jd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Gc(r);if(!i)throw Error(B(90));lE(r),jd(r,i)}}}break;case"textarea":cE(t,n);break;case"select":e=n.value,e!=null&&so(t,!!n.multiple,e,!1)}};yE=Kp;_E=gs;var gP={usingClientEntryPoint:!1,Events:[El,Xs,Gc,mE,gE,Kp]},ua={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yP={bundleType:ua.bundleType,version:ua.version,rendererPackageName:ua.rendererPackageName,rendererConfig:ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wE(t),t===null?null:t.stateNode},findFiberByHostInstance:ua.findFiberByHostInstance||pP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{Hc=pu.inject(yP),Zn=pu}catch{}}dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gP;dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!em(e))throw Error(B(200));return fP(t,e,null,n)};dn.createRoot=function(t,e){if(!em(t))throw Error(B(299));var n=!1,r="",i=Zw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Jp(t,1,!1,null,null,n,!1,r,i),t[Pr]=e.current,Ya(t.nodeType===8?t.parentNode:t),new Zp(e)};dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=wE(e),t=t===null?null:t.stateNode,t};dn.flushSync=function(t){return gs(t)};dn.hydrate=function(t,e,n){if(!rh(e))throw Error(B(200));return ih(null,t,e,!0,n)};dn.hydrateRoot=function(t,e,n){if(!em(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Zw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Xw(e,null,t,1,n??null,i,!1,s,o),t[Pr]=e.current,Ya(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new nh(e)};dn.render=function(t,e,n){if(!rh(e))throw Error(B(200));return ih(null,t,e,!1,n)};dn.unmountComponentAtNode=function(t){if(!rh(t))throw Error(B(40));return t._reactRootContainer?(gs(function(){ih(null,null,t,!1,function(){t._reactRootContainer=null,t[Pr]=null})}),!0):!1};dn.unstable_batchedUpdates=Kp;dn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rh(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return ih(t,e,n,!1,r)};dn.version="18.3.1-next-f1338f8080-20240426";function eT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eT)}catch(t){console.error(t)}}eT(),eE.exports=dn;var tm=eE.exports;const _P=op(tm),vP=Bv({__proto__:null,default:_P},[tm]);var tT,zy=tm;tT=zy.createRoot,zy.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ue(){return Ue=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ue.apply(this,arguments)}var et;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(et||(et={}));const By="popstate";function EP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return sl("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_s(i)}return TP(e,n,null,t)}function de(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ys(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function wP(){return Math.random().toString(36).substr(2,8)}function $y(t,e){return{usr:t.state,key:t.key,idx:e}}function sl(t,e,n,r){return n===void 0&&(n=null),Ue({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Li(e):e,{state:n,key:e&&e.key||r||wP()})}function _s(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Li(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function TP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=et.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Ue({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=et.Pop;let D=d(),I=D==null?null:D-c;c=D,u&&u({action:l,location:k.location,delta:I})}function m(D,I){l=et.Push;let v=sl(k.location,D,I);c=d()+1;let S=$y(v,c),L=k.createHref(v);try{o.pushState(S,"",L)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(L)}s&&u&&u({action:l,location:k.location,delta:1})}function E(D,I){l=et.Replace;let v=sl(k.location,D,I);c=d();let S=$y(v,c),L=k.createHref(v);o.replaceState(S,"",L),s&&u&&u({action:l,location:k.location,delta:0})}function A(D){let I=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof D=="string"?D:_s(D);return v=v.replace(/ $/,"%20"),de(I,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,I)}let k={get action(){return l},get location(){return t(i,o)},listen(D){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(By,f),u=D,()=>{i.removeEventListener(By,f),u=null}},createHref(D){return e(i,D)},createURL:A,encodeLocation(D){let I=A(D);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:m,replace:E,go(D){return o.go(D)}};return k}var Ae;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ae||(Ae={}));const IP=new Set(["lazy","caseSensitive","path","id","index","children"]);function SP(t){return t.index===!0}function vc(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],l=typeof i.id=="string"?i.id:o.join("-");if(de(i.index!==!0||!i.children,"Cannot specify children on an index route"),de(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),SP(i)){let u=Ue({},i,e(i),{id:l});return r[l]=u,u}else{let u=Ue({},i,e(i),{id:l,children:void 0});return r[l]=u,i.children&&(u.children=vc(i.children,e,o,r)),u}})}function es(t,e,n){return n===void 0&&(n="/"),Mu(t,e,n,!1)}function Mu(t,e,n,r){let i=typeof e=="string"?Li(e):e,s=Nr(i.pathname||"/",n);if(s==null)return null;let o=nT(t);AP(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=MP(s);l=LP(o[u],c,r)}return l}function RP(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function nT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(de(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ir([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(de(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),nT(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:bP(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of rT(s.path))i(s,o,u)}),e}function rT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=rT(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function AP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:OP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const PP=/^:[\w-]+$/,CP=3,kP=2,NP=1,DP=10,xP=-2,Hy=t=>t==="*";function bP(t,e){let n=t.split("/"),r=n.length;return n.some(Hy)&&(r+=xP),e&&(r+=kP),n.filter(i=>!Hy(i)).reduce((i,s)=>i+(PP.test(s)?CP:s===""?NP:DP),r)}function OP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function LP(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Ec({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=Ec({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Ir([s,f.pathname]),pathnameBase:zP(Ir([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Ir([s,f.pathnameBase]))}return o}function Ec(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=VP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:E}=d;if(m==="*"){let k=l[f]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const A=l[f];return E&&!A?c[m]=void 0:c[m]=(A||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function VP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ys(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function MP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ys(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Nr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const UP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,FP=t=>UP.test(t);function jP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Li(t):t,s;if(n)if(FP(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),ys(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Wy(n.substring(1),"/"):s=Wy(n,e)}else s=e;return{pathname:s,search:BP(r),hash:$P(i)}}function Wy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function yd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function iT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function sh(t,e){let n=iT(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function oh(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Li(t):(i=Ue({},t),de(!i.pathname||!i.pathname.includes("?"),yd("?","pathname","search",i)),de(!i.pathname||!i.pathname.includes("#"),yd("#","pathname","hash",i)),de(!i.search||!i.search.includes("#"),yd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?e[f]:"/"}let u=jP(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Ir=t=>t.join("/").replace(/\/\/+/g,"/"),zP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),BP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,$P=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class wc{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Po(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const sT=["post","put","patch","delete"],HP=new Set(sT),WP=["get",...sT],qP=new Set(WP),KP=new Set([301,302,303,307,308]),GP=new Set([307,308]),_d={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},QP={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ca={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},nm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,YP=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),oT="remix-router-transitions";function JP(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;de(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let C=t.detectErrorBoundary;i=x=>({hasErrorBoundary:C(x)})}else i=YP;let s={},o=vc(t.routes,i,void 0,s),l,u=t.basename||"/",c=t.dataStrategy||tC,d=t.patchRoutesOnNavigation,f=Ue({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),m=null,E=new Set,A=null,k=null,D=null,I=t.hydrationData!=null,v=es(o,t.history.location,u),S=!1,L=null;if(v==null&&!d){let C=Kt(404,{pathname:t.history.location.pathname}),{matches:x,route:V}=n_(o);v=x,L={[V.id]:C}}v&&!t.hydrationData&&Us(v,o,t.history.location.pathname).active&&(v=null);let F;if(v)if(v.some(C=>C.route.lazy))F=!1;else if(!v.some(C=>C.route.loader))F=!0;else if(f.v7_partialHydration){let C=t.hydrationData?t.hydrationData.loaderData:null,x=t.hydrationData?t.hydrationData.errors:null;if(x){let V=v.findIndex(z=>x[z.route.id]!==void 0);F=v.slice(0,V+1).every(z=>!Cf(z.route,C,x))}else F=v.every(V=>!Cf(V.route,C,x))}else F=t.hydrationData!=null;else if(F=!1,v=[],f.v7_partialHydration){let C=Us(null,o,t.history.location.pathname);C.active&&C.matches&&(S=!0,v=C.matches)}let $,g={historyAction:t.history.action,location:t.history.location,matches:v,initialized:F,navigation:_d,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||L,fetchers:new Map,blockers:new Map},y=et.Pop,w=!1,T,P=!1,N=new Map,R=null,Te=!1,rt=!1,jn=[],zn=new Set,H=new Map,ie=0,ae=-1,Ie=new Map,Se=new Set,Ht=new Map,mt=new Map,it=new Set,st=new Map,kt=new Map,Fr;function Vl(){if(m=t.history.listen(C=>{let{action:x,location:V,delta:z}=C;if(Fr){Fr(),Fr=void 0;return}ys(kt.size===0||z!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let W=jr({currentLocation:g.location,nextLocation:V,historyAction:x});if(W&&z!=null){let ee=new Promise(te=>{Fr=te});t.history.go(z*-1),Hi(W,{state:"blocked",location:V,proceed(){Hi(W,{state:"proceeding",proceed:void 0,reset:void 0,location:V}),ee.then(()=>t.history.go(z))},reset(){let te=new Map(g.blockers);te.set(W,ca),gt({blockers:te})}});return}return In(x,V)}),n){mC(e,N);let C=()=>gC(e,N);e.addEventListener("pagehide",C),R=()=>e.removeEventListener("pagehide",C)}return g.initialized||In(et.Pop,g.location,{initialHydration:!0}),$}function xh(){m&&m(),R&&R(),E.clear(),T&&T.abort(),g.fetchers.forEach((C,x)=>Bi(x)),g.blockers.forEach((C,x)=>$i(x))}function bh(C){return E.add(C),()=>E.delete(C)}function gt(C,x){x===void 0&&(x={}),g=Ue({},g,C);let V=[],z=[];f.v7_fetcherPersist&&g.fetchers.forEach((W,ee)=>{W.state==="idle"&&(it.has(ee)?z.push(ee):V.push(ee))}),it.forEach(W=>{!g.fetchers.has(W)&&!H.has(W)&&z.push(W)}),[...E].forEach(W=>W(g,{deletedFetchers:z,viewTransitionOpts:x.viewTransitionOpts,flushSync:x.flushSync===!0})),f.v7_fetcherPersist?(V.forEach(W=>g.fetchers.delete(W)),z.forEach(W=>Bi(W))):z.forEach(W=>it.delete(W))}function Bn(C,x,V){var z,W;let{flushSync:ee}=V===void 0?{}:V,te=g.actionData!=null&&g.navigation.formMethod!=null&&Dn(g.navigation.formMethod)&&g.navigation.state==="loading"&&((z=C.state)==null?void 0:z._isRedirect)!==!0,Y;x.actionData?Object.keys(x.actionData).length>0?Y=x.actionData:Y=null:te?Y=g.actionData:Y=null;let J=x.loaderData?e_(g.loaderData,x.loaderData,x.matches||[],x.errors):g.loaderData,G=g.blockers;G.size>0&&(G=new Map(G),G.forEach((ge,Xe)=>G.set(Xe,ca)));let Z=w===!0||g.navigation.formMethod!=null&&Dn(g.navigation.formMethod)&&((W=C.state)==null?void 0:W._isRedirect)!==!0;l&&(o=l,l=void 0),Te||y===et.Pop||(y===et.Push?t.history.push(C,C.state):y===et.Replace&&t.history.replace(C,C.state));let ue;if(y===et.Pop){let ge=N.get(g.location.pathname);ge&&ge.has(C.pathname)?ue={currentLocation:g.location,nextLocation:C}:N.has(C.pathname)&&(ue={currentLocation:C,nextLocation:g.location})}else if(P){let ge=N.get(g.location.pathname);ge?ge.add(C.pathname):(ge=new Set([C.pathname]),N.set(g.location.pathname,ge)),ue={currentLocation:g.location,nextLocation:C}}gt(Ue({},x,{actionData:Y,loaderData:J,historyAction:y,location:C,initialized:!0,navigation:_d,revalidation:"idle",restoreScrollPosition:$l(C,x.matches||g.matches),preventScrollReset:Z,blockers:G}),{viewTransitionOpts:ue,flushSync:ee===!0}),y=et.Pop,w=!1,P=!1,Te=!1,rt=!1,jn=[]}async function Ho(C,x){if(typeof C=="number"){t.history.go(C);return}let V=Pf(g.location,g.matches,u,f.v7_prependBasename,C,f.v7_relativeSplatPath,x==null?void 0:x.fromRouteId,x==null?void 0:x.relative),{path:z,submission:W,error:ee}=qy(f.v7_normalizeFormMethod,!1,V,x),te=g.location,Y=sl(g.location,z,x&&x.state);Y=Ue({},Y,t.history.encodeLocation(Y));let J=x&&x.replace!=null?x.replace:void 0,G=et.Push;J===!0?G=et.Replace:J===!1||W!=null&&Dn(W.formMethod)&&W.formAction===g.location.pathname+g.location.search&&(G=et.Replace);let Z=x&&"preventScrollReset"in x?x.preventScrollReset===!0:void 0,ue=(x&&x.flushSync)===!0,ge=jr({currentLocation:te,nextLocation:Y,historyAction:G});if(ge){Hi(ge,{state:"blocked",location:Y,proceed(){Hi(ge,{state:"proceeding",proceed:void 0,reset:void 0,location:Y}),Ho(C,x)},reset(){let Xe=new Map(g.blockers);Xe.set(ge,ca),gt({blockers:Xe})}});return}return await In(G,Y,{submission:W,pendingError:ee,preventScrollReset:Z,replace:x&&x.replace,enableViewTransition:x&&x.viewTransition,flushSync:ue})}function Oh(){if(Os(),gt({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){In(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}In(y||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation,enableViewTransition:P===!0})}}async function In(C,x,V){T&&T.abort(),T=null,y=C,Te=(V&&V.startUninterruptedRevalidation)===!0,Wi(g.location,g.matches),w=(V&&V.preventScrollReset)===!0,P=(V&&V.enableViewTransition)===!0;let z=l||o,W=V&&V.overrideNavigation,ee=V!=null&&V.initialHydration&&g.matches&&g.matches.length>0&&!S?g.matches:es(z,x,u),te=(V&&V.flushSync)===!0;if(ee&&g.initialized&&!rt&&aC(g.location,x)&&!(V&&V.submission&&Dn(V.submission.formMethod))){Bn(x,{matches:ee},{flushSync:te});return}let Y=Us(ee,z,x.pathname);if(Y.active&&Y.matches&&(ee=Y.matches),!ee){let{error:Ce,notFoundMatches:ye,route:De}=Ms(x.pathname);Bn(x,{matches:ye,loaderData:{},errors:{[De.id]:Ce}},{flushSync:te});return}T=new AbortController;let J=Bs(t.history,x,T.signal,V&&V.submission),G;if(V&&V.pendingError)G=[ts(ee).route.id,{type:Ae.error,error:V.pendingError}];else if(V&&V.submission&&Dn(V.submission.formMethod)){let Ce=await Wo(J,x,V.submission,ee,Y.active,{replace:V.replace,flushSync:te});if(Ce.shortCircuited)return;if(Ce.pendingActionResult){let[ye,De]=Ce.pendingActionResult;if(on(De)&&Po(De.error)&&De.error.status===404){T=null,Bn(x,{matches:Ce.matches,loaderData:{},errors:{[ye]:De.error}});return}}ee=Ce.matches||ee,G=Ce.pendingActionResult,W=vd(x,V.submission),te=!1,Y.active=!1,J=Bs(t.history,J.url,J.signal)}let{shortCircuited:Z,matches:ue,loaderData:ge,errors:Xe}=await Ml(J,x,ee,Y.active,W,V&&V.submission,V&&V.fetcherSubmission,V&&V.replace,V&&V.initialHydration===!0,te,G);Z||(T=null,Bn(x,Ue({matches:ue||ee},t_(G),{loaderData:ge,errors:Xe})))}async function Wo(C,x,V,z,W,ee){ee===void 0&&(ee={}),Os();let te=fC(x,V);if(gt({navigation:te},{flushSync:ee.flushSync===!0}),W){let G=await An(z,x.pathname,C.signal);if(G.type==="aborted")return{shortCircuited:!0};if(G.type==="error"){let Z=ts(G.partialMatches).route.id;return{matches:G.partialMatches,pendingActionResult:[Z,{type:Ae.error,error:G.error}]}}else if(G.matches)z=G.matches;else{let{notFoundMatches:Z,error:ue,route:ge}=Ms(x.pathname);return{matches:Z,pendingActionResult:[ge.id,{type:Ae.error,error:ue}]}}}let Y,J=Ea(z,x);if(!J.route.action&&!J.route.lazy)Y={type:Ae.error,error:Kt(405,{method:C.method,pathname:x.pathname,routeId:J.route.id})};else if(Y=(await Sn("action",g,C,[J],z,null))[J.route.id],C.signal.aborted)return{shortCircuited:!0};if(ss(Y)){let G;return ee&&ee.replace!=null?G=ee.replace:G=Jy(Y.response.headers.get("Location"),new URL(C.url),u,t.history)===g.location.pathname+g.location.search,await hr(C,Y,!0,{submission:V,replace:G}),{shortCircuited:!0}}if(ui(Y))throw Kt(400,{type:"defer-action"});if(on(Y)){let G=ts(z,J.route.id);return(ee&&ee.replace)!==!0&&(y=et.Push),{matches:z,pendingActionResult:[G.route.id,Y]}}return{matches:z,pendingActionResult:[J.route.id,Y]}}async function Ml(C,x,V,z,W,ee,te,Y,J,G,Z){let ue=W||vd(x,ee),ge=ee||te||i_(ue),Xe=!Te&&(!f.v7_partialHydration||!J);if(z){if(Xe){let xe=ot(Z);gt(Ue({navigation:ue},xe!==void 0?{actionData:xe}:{}),{flushSync:G})}let _e=await An(V,x.pathname,C.signal);if(_e.type==="aborted")return{shortCircuited:!0};if(_e.type==="error"){let xe=ts(_e.partialMatches).route.id;return{matches:_e.partialMatches,loaderData:{},errors:{[xe]:_e.error}}}else if(_e.matches)V=_e.matches;else{let{error:xe,notFoundMatches:dr,route:Hr}=Ms(x.pathname);return{matches:dr,loaderData:{},errors:{[Hr.id]:xe}}}}let Ce=l||o,[ye,De]=Gy(t.history,g,V,ge,x,f.v7_partialHydration&&J===!0,f.v7_skipActionErrorRevalidation,rt,jn,zn,it,Ht,Se,Ce,u,Z);if(at(_e=>!(V&&V.some(xe=>xe.route.id===_e))||ye&&ye.some(xe=>xe.route.id===_e)),ae=++ie,ye.length===0&&De.length===0){let _e=Vs();return Bn(x,Ue({matches:V,loaderData:{},errors:Z&&on(Z[1])?{[Z[0]]:Z[1].error}:null},t_(Z),_e?{fetchers:new Map(g.fetchers)}:{}),{flushSync:G}),{shortCircuited:!0}}if(Xe){let _e={};if(!z){_e.navigation=ue;let xe=ot(Z);xe!==void 0&&(_e.actionData=xe)}De.length>0&&(_e.fetchers=wt(De)),gt(_e,{flushSync:G})}De.forEach(_e=>{Wt(_e.key),_e.controller&&H.set(_e.key,_e.controller)});let Hn=()=>De.forEach(_e=>Wt(_e.key));T&&T.signal.addEventListener("abort",Hn);let{loaderResults:Pn,fetcherResults:Tt}=await qo(g,V,ye,De,C);if(C.signal.aborted)return{shortCircuited:!0};T&&T.signal.removeEventListener("abort",Hn),De.forEach(_e=>H.delete(_e.key));let qt=mu(Pn);if(qt)return await hr(C,qt.result,!0,{replace:Y}),{shortCircuited:!0};if(qt=mu(Tt),qt)return Se.add(qt.key),await hr(C,qt.result,!0,{replace:Y}),{shortCircuited:!0};let{loaderData:Ko,errors:Br}=Zy(g,V,Pn,Z,De,Tt,st);st.forEach((_e,xe)=>{_e.subscribe(dr=>{(dr||_e.done)&&st.delete(xe)})}),f.v7_partialHydration&&J&&g.errors&&(Br=Ue({},g.errors,Br));let Wn=Vs(),qi=$n(ae),$r=Wn||qi||De.length>0;return Ue({matches:V,loaderData:Ko,errors:Br},$r?{fetchers:new Map(g.fetchers)}:{})}function ot(C){if(C&&!on(C[1]))return{[C[0]]:C[1].data};if(g.actionData)return Object.keys(g.actionData).length===0?null:g.actionData}function wt(C){return C.forEach(x=>{let V=g.fetchers.get(x.key),z=ha(void 0,V?V.data:void 0);g.fetchers.set(x.key,z)}),new Map(g.fetchers)}function bs(C,x,V,z){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Wt(C);let W=(z&&z.flushSync)===!0,ee=l||o,te=Pf(g.location,g.matches,u,f.v7_prependBasename,V,f.v7_relativeSplatPath,x,z==null?void 0:z.relative),Y=es(ee,te,u),J=Us(Y,ee,te);if(J.active&&J.matches&&(Y=J.matches),!Y){Rn(C,x,Kt(404,{pathname:te}),{flushSync:W});return}let{path:G,submission:Z,error:ue}=qy(f.v7_normalizeFormMethod,!0,te,z);if(ue){Rn(C,x,ue,{flushSync:W});return}let ge=Ea(Y,G),Xe=(z&&z.preventScrollReset)===!0;if(Z&&Dn(Z.formMethod)){Lh(C,x,G,ge,Y,J.active,W,Xe,Z);return}Ht.set(C,{routeId:x,path:G}),Ul(C,x,G,ge,Y,J.active,W,Xe,Z)}async function Lh(C,x,V,z,W,ee,te,Y,J){Os(),Ht.delete(C);function G(He){if(!He.route.action&&!He.route.lazy){let Ut=Kt(405,{method:J.formMethod,pathname:V,routeId:x});return Rn(C,x,Ut,{flushSync:te}),!0}return!1}if(!ee&&G(z))return;let Z=g.fetchers.get(C);pn(C,pC(J,Z),{flushSync:te});let ue=new AbortController,ge=Bs(t.history,V,ue.signal,J);if(ee){let He=await An(W,new URL(ge.url).pathname,ge.signal,C);if(He.type==="aborted")return;if(He.type==="error"){Rn(C,x,He.error,{flushSync:te});return}else if(He.matches){if(W=He.matches,z=Ea(W,V),G(z))return}else{Rn(C,x,Kt(404,{pathname:V}),{flushSync:te});return}}H.set(C,ue);let Xe=ie,ye=(await Sn("action",g,ge,[z],W,C))[z.route.id];if(ge.signal.aborted){H.get(C)===ue&&H.delete(C);return}if(f.v7_fetcherPersist&&it.has(C)){if(ss(ye)||on(ye)){pn(C,Jr(void 0));return}}else{if(ss(ye))if(H.delete(C),ae>Xe){pn(C,Jr(void 0));return}else return Se.add(C),pn(C,ha(J)),hr(ge,ye,!1,{fetcherSubmission:J,preventScrollReset:Y});if(on(ye)){Rn(C,x,ye.error);return}}if(ui(ye))throw Kt(400,{type:"defer-action"});let De=g.navigation.location||g.location,Hn=Bs(t.history,De,ue.signal),Pn=l||o,Tt=g.navigation.state!=="idle"?es(Pn,g.navigation.location,u):g.matches;de(Tt,"Didn't find any matches after fetcher action");let qt=++ie;Ie.set(C,qt);let Ko=ha(J,ye.data);g.fetchers.set(C,Ko);let[Br,Wn]=Gy(t.history,g,Tt,J,De,!1,f.v7_skipActionErrorRevalidation,rt,jn,zn,it,Ht,Se,Pn,u,[z.route.id,ye]);Wn.filter(He=>He.key!==C).forEach(He=>{let Ut=He.key,nn=g.fetchers.get(Ut),Ki=ha(void 0,nn?nn.data:void 0);g.fetchers.set(Ut,Ki),Wt(Ut),He.controller&&H.set(Ut,He.controller)}),gt({fetchers:new Map(g.fetchers)});let qi=()=>Wn.forEach(He=>Wt(He.key));ue.signal.addEventListener("abort",qi);let{loaderResults:$r,fetcherResults:_e}=await qo(g,Tt,Br,Wn,Hn);if(ue.signal.aborted)return;ue.signal.removeEventListener("abort",qi),Ie.delete(C),H.delete(C),Wn.forEach(He=>H.delete(He.key));let xe=mu($r);if(xe)return hr(Hn,xe.result,!1,{preventScrollReset:Y});if(xe=mu(_e),xe)return Se.add(xe.key),hr(Hn,xe.result,!1,{preventScrollReset:Y});let{loaderData:dr,errors:Hr}=Zy(g,Tt,$r,void 0,Wn,_e,st);if(g.fetchers.has(C)){let He=Jr(ye.data);g.fetchers.set(C,He)}$n(qt),g.navigation.state==="loading"&&qt>ae?(de(y,"Expected pending action"),T&&T.abort(),Bn(g.navigation.location,{matches:Tt,loaderData:dr,errors:Hr,fetchers:new Map(g.fetchers)})):(gt({errors:Hr,loaderData:e_(g.loaderData,dr,Tt,Hr),fetchers:new Map(g.fetchers)}),rt=!1)}async function Ul(C,x,V,z,W,ee,te,Y,J){let G=g.fetchers.get(C);pn(C,ha(J,G?G.data:void 0),{flushSync:te});let Z=new AbortController,ue=Bs(t.history,V,Z.signal);if(ee){let ye=await An(W,new URL(ue.url).pathname,ue.signal,C);if(ye.type==="aborted")return;if(ye.type==="error"){Rn(C,x,ye.error,{flushSync:te});return}else if(ye.matches)W=ye.matches,z=Ea(W,V);else{Rn(C,x,Kt(404,{pathname:V}),{flushSync:te});return}}H.set(C,Z);let ge=ie,Ce=(await Sn("loader",g,ue,[z],W,C))[z.route.id];if(ui(Ce)&&(Ce=await rm(Ce,ue.signal,!0)||Ce),H.get(C)===Z&&H.delete(C),!ue.signal.aborted){if(it.has(C)){pn(C,Jr(void 0));return}if(ss(Ce))if(ae>ge){pn(C,Jr(void 0));return}else{Se.add(C),await hr(ue,Ce,!1,{preventScrollReset:Y});return}if(on(Ce)){Rn(C,x,Ce.error);return}de(!ui(Ce),"Unhandled fetcher deferred data"),pn(C,Jr(Ce.data))}}async function hr(C,x,V,z){let{submission:W,fetcherSubmission:ee,preventScrollReset:te,replace:Y}=z===void 0?{}:z;x.response.headers.has("X-Remix-Revalidate")&&(rt=!0);let J=x.response.headers.get("Location");de(J,"Expected a Location header on the redirect Response"),J=Jy(J,new URL(C.url),u,t.history);let G=sl(g.location,J,{_isRedirect:!0});if(n){let ye=!1;if(x.response.headers.has("X-Remix-Reload-Document"))ye=!0;else if(nm.test(J)){const De=t.history.createURL(J);ye=De.origin!==e.location.origin||Nr(De.pathname,u)==null}if(ye){Y?e.location.replace(J):e.location.assign(J);return}}T=null;let Z=Y===!0||x.response.headers.has("X-Remix-Replace")?et.Replace:et.Push,{formMethod:ue,formAction:ge,formEncType:Xe}=g.navigation;!W&&!ee&&ue&&ge&&Xe&&(W=i_(g.navigation));let Ce=W||ee;if(GP.has(x.response.status)&&Ce&&Dn(Ce.formMethod))await In(Z,G,{submission:Ue({},Ce,{formAction:J}),preventScrollReset:te||w,enableViewTransition:V?P:void 0});else{let ye=vd(G,W);await In(Z,G,{overrideNavigation:ye,fetcherSubmission:ee,preventScrollReset:te||w,enableViewTransition:V?P:void 0})}}async function Sn(C,x,V,z,W,ee){let te,Y={};try{te=await nC(c,C,x,V,z,W,ee,s,i)}catch(J){return z.forEach(G=>{Y[G.route.id]={type:Ae.error,error:J}}),Y}for(let[J,G]of Object.entries(te))if(lC(G)){let Z=G.result;Y[J]={type:Ae.redirect,response:sC(Z,V,J,W,u,f.v7_relativeSplatPath)}}else Y[J]=await iC(G);return Y}async function qo(C,x,V,z,W){let ee=C.matches,te=Sn("loader",C,W,V,x,null),Y=Promise.all(z.map(async Z=>{if(Z.matches&&Z.match&&Z.controller){let ge=(await Sn("loader",C,Bs(t.history,Z.path,Z.controller.signal),[Z.match],Z.matches,Z.key))[Z.match.route.id];return{[Z.key]:ge}}else return Promise.resolve({[Z.key]:{type:Ae.error,error:Kt(404,{pathname:Z.path})}})})),J=await te,G=(await Y).reduce((Z,ue)=>Object.assign(Z,ue),{});return await Promise.all([hC(x,J,W.signal,ee,C.loaderData),dC(x,G,z)]),{loaderResults:J,fetcherResults:G}}function Os(){rt=!0,jn.push(...at()),Ht.forEach((C,x)=>{H.has(x)&&zn.add(x),Wt(x)})}function pn(C,x,V){V===void 0&&(V={}),g.fetchers.set(C,x),gt({fetchers:new Map(g.fetchers)},{flushSync:(V&&V.flushSync)===!0})}function Rn(C,x,V,z){z===void 0&&(z={});let W=ts(g.matches,x);Bi(C),gt({errors:{[W.route.id]:V},fetchers:new Map(g.fetchers)},{flushSync:(z&&z.flushSync)===!0})}function Fl(C){return mt.set(C,(mt.get(C)||0)+1),it.has(C)&&it.delete(C),g.fetchers.get(C)||QP}function Bi(C){let x=g.fetchers.get(C);H.has(C)&&!(x&&x.state==="loading"&&Ie.has(C))&&Wt(C),Ht.delete(C),Ie.delete(C),Se.delete(C),f.v7_fetcherPersist&&it.delete(C),zn.delete(C),g.fetchers.delete(C)}function jl(C){let x=(mt.get(C)||0)-1;x<=0?(mt.delete(C),it.add(C),f.v7_fetcherPersist||Bi(C)):mt.set(C,x),gt({fetchers:new Map(g.fetchers)})}function Wt(C){let x=H.get(C);x&&(x.abort(),H.delete(C))}function Ls(C){for(let x of C){let V=Fl(x),z=Jr(V.data);g.fetchers.set(x,z)}}function Vs(){let C=[],x=!1;for(let V of Se){let z=g.fetchers.get(V);de(z,"Expected fetcher: "+V),z.state==="loading"&&(Se.delete(V),C.push(V),x=!0)}return Ls(C),x}function $n(C){let x=[];for(let[V,z]of Ie)if(z<C){let W=g.fetchers.get(V);de(W,"Expected fetcher: "+V),W.state==="loading"&&(Wt(V),Ie.delete(V),x.push(V))}return Ls(x),x.length>0}function zl(C,x){let V=g.blockers.get(C)||ca;return kt.get(C)!==x&&kt.set(C,x),V}function $i(C){g.blockers.delete(C),kt.delete(C)}function Hi(C,x){let V=g.blockers.get(C)||ca;de(V.state==="unblocked"&&x.state==="blocked"||V.state==="blocked"&&x.state==="blocked"||V.state==="blocked"&&x.state==="proceeding"||V.state==="blocked"&&x.state==="unblocked"||V.state==="proceeding"&&x.state==="unblocked","Invalid blocker state transition: "+V.state+" -> "+x.state);let z=new Map(g.blockers);z.set(C,x),gt({blockers:z})}function jr(C){let{currentLocation:x,nextLocation:V,historyAction:z}=C;if(kt.size===0)return;kt.size>1&&ys(!1,"A router only supports one blocker at a time");let W=Array.from(kt.entries()),[ee,te]=W[W.length-1],Y=g.blockers.get(ee);if(!(Y&&Y.state==="proceeding")&&te({currentLocation:x,nextLocation:V,historyAction:z}))return ee}function Ms(C){let x=Kt(404,{pathname:C}),V=l||o,{matches:z,route:W}=n_(V);return at(),{notFoundMatches:z,route:W,error:x}}function at(C){let x=[];return st.forEach((V,z)=>{(!C||C(z))&&(V.cancel(),x.push(z),st.delete(z))}),x}function Bl(C,x,V){if(A=C,D=x,k=V||null,!I&&g.navigation===_d){I=!0;let z=$l(g.location,g.matches);z!=null&&gt({restoreScrollPosition:z})}return()=>{A=null,D=null,k=null}}function zr(C,x){return k&&k(C,x.map(z=>RP(z,g.loaderData)))||C.key}function Wi(C,x){if(A&&D){let V=zr(C,x);A[V]=D()}}function $l(C,x){if(A){let V=zr(C,x),z=A[V];if(typeof z=="number")return z}return null}function Us(C,x,V){if(d)if(C){if(Object.keys(C[0].params).length>0)return{active:!0,matches:Mu(x,V,u,!0)}}else return{active:!0,matches:Mu(x,V,u,!0)||[]};return{active:!1,matches:null}}async function An(C,x,V,z){if(!d)return{type:"success",matches:C};let W=C;for(;;){let ee=l==null,te=l||o,Y=s;try{await d({signal:V,path:x,matches:W,fetcherKey:z,patch:(Z,ue)=>{V.aborted||Yy(Z,ue,te,Y,i)}})}catch(Z){return{type:"error",error:Z,partialMatches:W}}finally{ee&&!V.aborted&&(o=[...o])}if(V.aborted)return{type:"aborted"};let J=es(te,x,u);if(J)return{type:"success",matches:J};let G=Mu(te,x,u,!0);if(!G||W.length===G.length&&W.every((Z,ue)=>Z.route.id===G[ue].route.id))return{type:"success",matches:null};W=G}}function Vh(C){s={},l=vc(C,i,void 0,s)}function Mh(C,x){let V=l==null;Yy(C,x,l||o,s,i),V&&(o=[...o],gt({}))}return $={get basename(){return u},get future(){return f},get state(){return g},get routes(){return o},get window(){return e},initialize:Vl,subscribe:bh,enableScrollRestoration:Bl,navigate:Ho,fetch:bs,revalidate:Oh,createHref:C=>t.history.createHref(C),encodeLocation:C=>t.history.encodeLocation(C),getFetcher:Fl,deleteFetcher:jl,dispose:xh,getBlocker:zl,deleteBlocker:$i,patchRoutes:Mh,_internalFetchControllers:H,_internalActiveDeferreds:st,_internalSetRoutes:Vh},$}function XP(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Pf(t,e,n,r,i,s,o,l){let u,c;if(o){u=[];for(let f of e)if(u.push(f),f.route.id===o){c=f;break}}else u=e,c=e[e.length-1];let d=oh(i||".",sh(u,s),Nr(t.pathname,n)||t.pathname,l==="path");if(i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c){let f=im(d.search);if(c.route.index&&!f)d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index";else if(!c.route.index&&f){let m=new URLSearchParams(d.search),E=m.getAll("index");m.delete("index"),E.filter(k=>k).forEach(k=>m.append("index",k));let A=m.toString();d.search=A?"?"+A:""}}return r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Ir([n,d.pathname])),_s(d)}function qy(t,e,n,r){if(!r||!XP(r))return{path:n};if(r.formMethod&&!cC(r.formMethod))return{path:n,error:Kt(405,{method:r.formMethod})};let i=()=>({path:n,error:Kt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),l=uT(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Dn(o))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((E,A)=>{let[k,D]=A;return""+E+k+"="+D+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!Dn(o))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}de(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=kf(r.formData),c=r.formData;else if(r.body instanceof FormData)u=kf(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=Xy(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=Xy(u)}catch{return i()}let d={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Dn(d.formMethod))return{path:n,submission:d};let f=Li(n);return e&&f.search&&im(f.search)&&u.append("index",""),f.search="?"+u,{path:_s(f),submission:d}}function Ky(t,e,n){n===void 0&&(n=!1);let r=t.findIndex(i=>i.route.id===e);return r>=0?t.slice(0,n?r+1:r):t}function Gy(t,e,n,r,i,s,o,l,u,c,d,f,m,E,A,k){let D=k?on(k[1])?k[1].error:k[1].data:void 0,I=t.createURL(e.location),v=t.createURL(i),S=n;s&&e.errors?S=Ky(n,Object.keys(e.errors)[0],!0):k&&on(k[1])&&(S=Ky(n,k[0]));let L=k?k[1].statusCode:void 0,F=o&&L&&L>=400,$=S.filter((y,w)=>{let{route:T}=y;if(T.lazy)return!0;if(T.loader==null)return!1;if(s)return Cf(T,e.loaderData,e.errors);if(ZP(e.loaderData,e.matches[w],y)||u.some(R=>R===y.route.id))return!0;let P=e.matches[w],N=y;return Qy(y,Ue({currentUrl:I,currentParams:P.params,nextUrl:v,nextParams:N.params},r,{actionResult:D,actionStatus:L,defaultShouldRevalidate:F?!1:l||I.pathname+I.search===v.pathname+v.search||I.search!==v.search||aT(P,N)}))}),g=[];return f.forEach((y,w)=>{if(s||!n.some(Te=>Te.route.id===y.routeId)||d.has(w))return;let T=es(E,y.path,A);if(!T){g.push({key:w,routeId:y.routeId,path:y.path,matches:null,match:null,controller:null});return}let P=e.fetchers.get(w),N=Ea(T,y.path),R=!1;m.has(w)?R=!1:c.has(w)?(c.delete(w),R=!0):P&&P.state!=="idle"&&P.data===void 0?R=l:R=Qy(N,Ue({currentUrl:I,currentParams:e.matches[e.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params},r,{actionResult:D,actionStatus:L,defaultShouldRevalidate:F?!1:l})),R&&g.push({key:w,routeId:y.routeId,path:y.path,matches:T,match:N,controller:new AbortController})}),[$,g]}function Cf(t,e,n){if(t.lazy)return!0;if(!t.loader)return!1;let r=e!=null&&e[t.id]!==void 0,i=n!=null&&n[t.id]!==void 0;return!r&&i?!1:typeof t.loader=="function"&&t.loader.hydrate===!0?!0:!r&&!i}function ZP(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function aT(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Qy(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}function Yy(t,e,n,r,i){var s;let o;if(t){let c=r[t];de(c,"No route found to patch children into: routeId = "+t),c.children||(c.children=[]),o=c.children}else o=n;let l=e.filter(c=>!o.some(d=>lT(c,d))),u=vc(l,i,[t||"_","patch",String(((s=o)==null?void 0:s.length)||"0")],r);o.push(...u)}function lT(t,e){return"id"in t&&"id"in e&&t.id===e.id?!0:t.index===e.index&&t.path===e.path&&t.caseSensitive===e.caseSensitive?(!t.children||t.children.length===0)&&(!e.children||e.children.length===0)?!0:t.children.every((n,r)=>{var i;return(i=e.children)==null?void 0:i.some(s=>lT(n,s))}):!1}async function eC(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];de(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";ys(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!IP.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Ue({},e(i),{lazy:void 0}))}async function tC(t){let{matches:e}=t,n=e.filter(i=>i.shouldLoad);return(await Promise.all(n.map(i=>i.resolve()))).reduce((i,s,o)=>Object.assign(i,{[n[o].route.id]:s}),{})}async function nC(t,e,n,r,i,s,o,l,u,c){let d=s.map(E=>E.route.lazy?eC(E.route,u,l):void 0),f=s.map((E,A)=>{let k=d[A],D=i.some(v=>v.route.id===E.route.id);return Ue({},E,{shouldLoad:D,resolve:async v=>(v&&r.method==="GET"&&(E.route.lazy||E.route.loader)&&(D=!0),D?rC(e,r,E,k,v,c):Promise.resolve({type:Ae.data,result:void 0}))})}),m=await t({matches:f,request:r,params:s[0].params,fetcherKey:o,context:c});try{await Promise.all(d)}catch{}return m}async function rC(t,e,n,r,i,s){let o,l,u=c=>{let d,f=new Promise((A,k)=>d=k);l=()=>d(),e.signal.addEventListener("abort",l);let m=A=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):c({request:e,params:n.params,context:s},...A!==void 0?[A]:[]),E=(async()=>{try{return{type:"data",result:await(i?i(k=>m(k)):m())}}catch(A){return{type:"error",result:A}}})();return Promise.race([E,f])};try{let c=n.route[t];if(r)if(c){let d,[f]=await Promise.all([u(c).catch(m=>{d=m}),r]);if(d!==void 0)throw d;o=f}else if(await r,c=n.route[t],c)o=await u(c);else if(t==="action"){let d=new URL(e.url),f=d.pathname+d.search;throw Kt(405,{method:e.method,pathname:f,routeId:n.route.id})}else return{type:Ae.data,result:void 0};else if(c)o=await u(c);else{let d=new URL(e.url),f=d.pathname+d.search;throw Kt(404,{pathname:f})}de(o.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:Ae.error,result:c}}finally{l&&e.signal.removeEventListener("abort",l)}return o}async function iC(t){let{result:e,type:n}=t;if(cT(e)){let f;try{let m=e.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?e.body==null?f=null:f=await e.json():f=await e.text()}catch(m){return{type:Ae.error,error:m}}return n===Ae.error?{type:Ae.error,error:new wc(e.status,e.statusText,f),statusCode:e.status,headers:e.headers}:{type:Ae.data,data:f,statusCode:e.status,headers:e.headers}}if(n===Ae.error){if(r_(e)){var r,i;if(e.data instanceof Error){var s,o;return{type:Ae.error,error:e.data,statusCode:(s=e.init)==null?void 0:s.status,headers:(o=e.init)!=null&&o.headers?new Headers(e.init.headers):void 0}}return{type:Ae.error,error:new wc(((r=e.init)==null?void 0:r.status)||500,void 0,e.data),statusCode:Po(e)?e.status:void 0,headers:(i=e.init)!=null&&i.headers?new Headers(e.init.headers):void 0}}return{type:Ae.error,error:e,statusCode:Po(e)?e.status:void 0}}if(uC(e)){var l,u;return{type:Ae.deferred,deferredData:e,statusCode:(l=e.init)==null?void 0:l.status,headers:((u=e.init)==null?void 0:u.headers)&&new Headers(e.init.headers)}}if(r_(e)){var c,d;return{type:Ae.data,data:e.data,statusCode:(c=e.init)==null?void 0:c.status,headers:(d=e.init)!=null&&d.headers?new Headers(e.init.headers):void 0}}return{type:Ae.data,data:e}}function sC(t,e,n,r,i,s){let o=t.headers.get("Location");if(de(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!nm.test(o)){let l=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=Pf(new URL(e.url),l,i,!0,o,s),t.headers.set("Location",o)}return t}function Jy(t,e,n,r){let i=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(nm.test(t)){let s=t,o=s.startsWith("//")?new URL(e.protocol+s):new URL(s);if(i.includes(o.protocol))throw new Error("Invalid redirect location");let l=Nr(o.pathname,n)!=null;if(o.origin===e.origin&&l)return o.pathname+o.search+o.hash}try{let s=r.createURL(t);if(i.includes(s.protocol))throw new Error("Invalid redirect location")}catch{}return t}function Bs(t,e,n,r){let i=t.createURL(uT(e)).toString(),s={signal:n};if(r&&Dn(r.formMethod)){let{formMethod:o,formEncType:l}=r;s.method=o.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=kf(r.formData):s.body=r.formData}return new Request(i,s)}function kf(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Xy(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function oC(t,e,n,r,i){let s={},o=null,l,u=!1,c={},d=n&&on(n[1])?n[1].error:void 0;return t.forEach(f=>{if(!(f.route.id in e))return;let m=f.route.id,E=e[m];if(de(!ss(E),"Cannot handle redirect results in processLoaderData"),on(E)){let A=E.error;d!==void 0&&(A=d,d=void 0),o=o||{};{let k=ts(t,m);o[k.route.id]==null&&(o[k.route.id]=A)}s[m]=void 0,u||(u=!0,l=Po(E.error)?E.error.status:500),E.headers&&(c[m]=E.headers)}else ui(E)?(r.set(m,E.deferredData),s[m]=E.deferredData.data,E.statusCode!=null&&E.statusCode!==200&&!u&&(l=E.statusCode),E.headers&&(c[m]=E.headers)):(s[m]=E.data,E.statusCode&&E.statusCode!==200&&!u&&(l=E.statusCode),E.headers&&(c[m]=E.headers))}),d!==void 0&&n&&(o={[n[0]]:d},s[n[0]]=void 0),{loaderData:s,errors:o,statusCode:l||200,loaderHeaders:c}}function Zy(t,e,n,r,i,s,o){let{loaderData:l,errors:u}=oC(e,n,r,o);return i.forEach(c=>{let{key:d,match:f,controller:m}=c,E=s[d];if(de(E,"Did not find corresponding fetcher result"),!(m&&m.signal.aborted))if(on(E)){let A=ts(t.matches,f==null?void 0:f.route.id);u&&u[A.route.id]||(u=Ue({},u,{[A.route.id]:E.error})),t.fetchers.delete(d)}else if(ss(E))de(!1,"Unhandled fetcher revalidation redirect");else if(ui(E))de(!1,"Unhandled fetcher deferred data");else{let A=Jr(E.data);t.fetchers.set(d,A)}}),{loaderData:l,errors:u}}function e_(t,e,n,r){let i=Ue({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function t_(t){return t?on(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function ts(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function n_(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Kt(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,l="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(l="Bad Request",i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(l="Not Found",u='No route matches URL "'+n+'"'):t===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new wc(t||500,l,new Error(u),!0)}function mu(t){let e=Object.entries(t);for(let n=e.length-1;n>=0;n--){let[r,i]=e[n];if(ss(i))return{key:r,result:i}}}function uT(t){let e=typeof t=="string"?Li(t):t;return _s(Ue({},e,{hash:""}))}function aC(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function lC(t){return cT(t.result)&&KP.has(t.result.status)}function ui(t){return t.type===Ae.deferred}function on(t){return t.type===Ae.error}function ss(t){return(t&&t.type)===Ae.redirect}function r_(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function uC(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function cT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function cC(t){return qP.has(t.toLowerCase())}function Dn(t){return HP.has(t.toLowerCase())}async function hC(t,e,n,r,i){let s=Object.entries(e);for(let o=0;o<s.length;o++){let[l,u]=s[o],c=t.find(m=>(m==null?void 0:m.route.id)===l);if(!c)continue;let d=r.find(m=>m.route.id===c.route.id),f=d!=null&&!aT(d,c)&&(i&&i[c.route.id])!==void 0;ui(u)&&f&&await rm(u,n,!1).then(m=>{m&&(e[l]=m)})}}async function dC(t,e,n){for(let r=0;r<n.length;r++){let{key:i,routeId:s,controller:o}=n[r],l=e[i];t.find(c=>(c==null?void 0:c.route.id)===s)&&ui(l)&&(de(o,"Expected an AbortController for revalidating fetcher deferred result"),await rm(l,o.signal,!0).then(c=>{c&&(e[i]=c)}))}}async function rm(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ae.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ae.error,error:i}}return{type:Ae.data,data:t.deferredData.data}}}function im(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Ea(t,e){let n=typeof e=="string"?Li(e).search:e.search;if(t[t.length-1].route.index&&im(n||""))return t[t.length-1];let r=iT(t);return r[r.length-1]}function i_(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function vd(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function fC(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function ha(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function pC(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Jr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function mC(t,e){try{let n=t.sessionStorage.getItem(oT);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function gC(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(oT,JSON.stringify(n))}catch(r){ys(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tc(){return Tc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tc.apply(this,arguments)}const Tl=b.createContext(null),sm=b.createContext(null),Ur=b.createContext(null),om=b.createContext(null),ur=b.createContext({outlet:null,matches:[],isDataRoute:!1}),hT=b.createContext(null);function yC(t,e){let{relative:n}=e===void 0?{}:e;Vo()||de(!1);let{basename:r,navigator:i}=b.useContext(Ur),{hash:s,pathname:o,search:l}=ah(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Ir([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Vo(){return b.useContext(om)!=null}function Cs(){return Vo()||de(!1),b.useContext(om).location}function dT(t){b.useContext(Ur).static||b.useLayoutEffect(t)}function fT(){let{isDataRoute:t}=b.useContext(ur);return t?NC():_C()}function _C(){Vo()||de(!1);let t=b.useContext(Tl),{basename:e,future:n,navigator:r}=b.useContext(Ur),{matches:i}=b.useContext(ur),{pathname:s}=Cs(),o=JSON.stringify(sh(i,n.v7_relativeSplatPath)),l=b.useRef(!1);return dT(()=>{l.current=!0}),b.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=oh(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ir([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const vC=b.createContext(null);function EC(t){let e=b.useContext(ur).outlet;return e&&b.createElement(vC.Provider,{value:t},e)}function K2(){let{matches:t}=b.useContext(ur),e=t[t.length-1];return e?e.params:{}}function ah(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=b.useContext(Ur),{matches:i}=b.useContext(ur),{pathname:s}=Cs(),o=JSON.stringify(sh(i,r.v7_relativeSplatPath));return b.useMemo(()=>oh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function wC(t,e,n,r){Vo()||de(!1);let{navigator:i}=b.useContext(Ur),{matches:s}=b.useContext(ur),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Cs(),d;d=c;let f=d.pathname||"/",m=f;if(u!=="/"){let k=u.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(k.length).join("/")}let E=es(t,{pathname:m});return AC(E&&E.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:Ir([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:Ir([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r)}function TC(){let t=yT(),e=Po(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,null)}const IC=b.createElement(TC,null);class SC extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(ur.Provider,{value:this.props.routeContext},b.createElement(hT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function RC(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(Tl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(ur.Provider,{value:e},r)}function AC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||de(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:E}=n,A=f.route.loader&&m[f.route.id]===void 0&&(!E||E[f.route.id]===void 0);if(f.route.lazy||A){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let E,A=!1,k=null,D=null;n&&(E=l&&f.route.id?l[f.route.id]:void 0,k=f.route.errorElement||IC,u&&(c<0&&m===0?(DC("route-fallback"),A=!0,D=null):c===m&&(A=!0,D=f.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,m+1)),v=()=>{let S;return E?S=k:A?S=D:f.route.Component?S=b.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=d,b.createElement(RC,{match:f,routeContext:{outlet:d,matches:I,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?b.createElement(SC,{location:n.location,revalidation:n.revalidation,component:k,error:E,children:v(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):v()},null)}var pT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(pT||{}),mT=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(mT||{});function PC(t){let e=b.useContext(Tl);return e||de(!1),e}function CC(t){let e=b.useContext(sm);return e||de(!1),e}function kC(t){let e=b.useContext(ur);return e||de(!1),e}function gT(t){let e=kC(),n=e.matches[e.matches.length-1];return n.route.id||de(!1),n.route.id}function yT(){var t;let e=b.useContext(hT),n=CC(),r=gT();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function NC(){let{router:t}=PC(pT.UseNavigateStable),e=gT(mT.UseNavigateStable),n=b.useRef(!1);return dT(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Tc({fromRouteId:e},s)))},[t,e])}const s_={};function DC(t,e,n){s_[t]||(s_[t]=!0)}function xC(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function bC(t){let{to:e,replace:n,state:r,relative:i}=t;Vo()||de(!1);let{future:s,static:o}=b.useContext(Ur),{matches:l}=b.useContext(ur),{pathname:u}=Cs(),c=fT(),d=oh(e,sh(l,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return b.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function _T(t){return EC(t.context)}function OC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=et.Pop,navigator:s,static:o=!1,future:l}=t;Vo()&&de(!1);let u=e.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:u,navigator:s,static:o,future:Tc({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Li(r));let{pathname:d="/",search:f="",hash:m="",state:E=null,key:A="default"}=r,k=b.useMemo(()=>{let D=Nr(d,u);return D==null?null:{location:{pathname:D,search:f,hash:m,state:E,key:A},navigationType:i}},[u,d,f,m,E,A,i]);return k==null?null:b.createElement(Ur.Provider,{value:c},b.createElement(om.Provider,{children:n,value:k}))}new Promise(()=>{});function LC(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:b.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:b.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:b.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Co(){return Co=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Co.apply(this,arguments)}function vT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function VC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function MC(t,e){return t.button===0&&(!e||e==="_self")&&!VC(t)}const UC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],FC=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],jC="6";try{window.__reactRouterVersion=jC}catch{}function zC(t,e){return JP({basename:void 0,future:Co({},void 0,{v7_prependBasename:!0}),history:EP({window:void 0}),hydrationData:BC(),routes:t,mapRouteProperties:LC,dataStrategy:void 0,patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function BC(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Co({},e,{errors:$C(e.errors)})),e}function $C(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new wc(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const ET=b.createContext({isTransitioning:!1}),HC=b.createContext(new Map),WC="startTransition",o_=aR[WC],qC="flushSync",a_=vP[qC];function KC(t){o_?o_(t):t()}function da(t){a_?a_(t):t()}let GC=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function QC(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=b.useState(n.state),[o,l]=b.useState(),[u,c]=b.useState({isTransitioning:!1}),[d,f]=b.useState(),[m,E]=b.useState(),[A,k]=b.useState(),D=b.useRef(new Map),{v7_startTransition:I}=r||{},v=b.useCallback(y=>{I?KC(y):y()},[I]),S=b.useCallback((y,w)=>{let{deletedFetchers:T,flushSync:P,viewTransitionOpts:N}=w;y.fetchers.forEach((Te,rt)=>{Te.data!==void 0&&D.current.set(rt,Te.data)}),T.forEach(Te=>D.current.delete(Te));let R=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!N||R){P?da(()=>s(y)):v(()=>s(y));return}if(P){da(()=>{m&&(d&&d.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:N.currentLocation,nextLocation:N.nextLocation})});let Te=n.window.document.startViewTransition(()=>{da(()=>s(y))});Te.finished.finally(()=>{da(()=>{f(void 0),E(void 0),l(void 0),c({isTransitioning:!1})})}),da(()=>E(Te));return}m?(d&&d.resolve(),m.skipTransition(),k({state:y,currentLocation:N.currentLocation,nextLocation:N.nextLocation})):(l(y),c({isTransitioning:!0,flushSync:!1,currentLocation:N.currentLocation,nextLocation:N.nextLocation}))},[n.window,m,d,D,v]);b.useLayoutEffect(()=>n.subscribe(S),[n,S]),b.useEffect(()=>{u.isTransitioning&&!u.flushSync&&f(new GC)},[u]),b.useEffect(()=>{if(d&&o&&n.window){let y=o,w=d.promise,T=n.window.document.startViewTransition(async()=>{v(()=>s(y)),await w});T.finished.finally(()=>{f(void 0),E(void 0),l(void 0),c({isTransitioning:!1})}),E(T)}},[v,o,d,n.window]),b.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,m,i.location,o]),b.useEffect(()=>{!u.isTransitioning&&A&&(l(A.state),c({isTransitioning:!0,flushSync:!1,currentLocation:A.currentLocation,nextLocation:A.nextLocation}),k(void 0))},[u.isTransitioning,A]),b.useEffect(()=>{},[]);let L=b.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:y=>n.navigate(y),push:(y,w,T)=>n.navigate(y,{state:w,preventScrollReset:T==null?void 0:T.preventScrollReset}),replace:(y,w,T)=>n.navigate(y,{replace:!0,state:w,preventScrollReset:T==null?void 0:T.preventScrollReset})}),[n]),F=n.basename||"/",$=b.useMemo(()=>({router:n,navigator:L,static:!1,basename:F}),[n,L,F]),g=b.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return b.useEffect(()=>xC(r,n.future),[r,n.future]),b.createElement(b.Fragment,null,b.createElement(Tl.Provider,{value:$},b.createElement(sm.Provider,{value:i},b.createElement(HC.Provider,{value:D.current},b.createElement(ET.Provider,{value:u},b.createElement(OC,{basename:F,location:i.location,navigationType:i.historyAction,navigator:L,future:g},i.initialized||n.future.v7_partialHydration?b.createElement(YC,{routes:n.routes,future:n.future,state:i}):e))))),null)}const YC=b.memo(JC);function JC(t){let{routes:e,future:n,state:r}=t;return wC(e,void 0,r,n)}const XC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wT=b.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f}=e,m=vT(e,UC),{basename:E}=b.useContext(Ur),A,k=!1;if(typeof c=="string"&&ZC.test(c)&&(A=c,XC))try{let S=new URL(window.location.href),L=c.startsWith("//")?new URL(S.protocol+c):new URL(c),F=Nr(L.pathname,E);L.origin===S.origin&&F!=null?c=F+L.search+L.hash:k=!0}catch{}let D=yC(c,{relative:i}),I=tk(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:f});function v(S){r&&r(S),S.defaultPrevented||I(S)}return b.createElement("a",Co({},m,{href:A||D,onClick:k||s?r:v,ref:n,target:u}))}),Q2=b.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:c,children:d}=e,f=vT(e,FC),m=ah(u,{relative:f.relative}),E=Cs(),A=b.useContext(sm),{navigator:k,basename:D}=b.useContext(Ur),I=A!=null&&nk(m)&&c===!0,v=k.encodeLocation?k.encodeLocation(m).pathname:m.pathname,S=E.pathname,L=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;i||(S=S.toLowerCase(),L=L?L.toLowerCase():null,v=v.toLowerCase()),L&&D&&(L=Nr(L,D)||L);const F=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let $=S===v||!o&&S.startsWith(v)&&S.charAt(F)==="/",g=L!=null&&(L===v||!o&&L.startsWith(v)&&L.charAt(v.length)==="/"),y={isActive:$,isPending:g,isTransitioning:I},w=$?r:void 0,T;typeof s=="function"?T=s(y):T=[s,$?"active":null,g?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(y):l;return b.createElement(wT,Co({},f,{"aria-current":w,className:T,ref:n,style:P,to:u,viewTransition:c}),typeof d=="function"?d(y):d)});var Nf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Nf||(Nf={}));var l_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(l_||(l_={}));function ek(t){let e=b.useContext(Tl);return e||de(!1),e}function tk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=fT(),c=Cs(),d=ah(t,{relative:o});return b.useCallback(f=>{if(MC(f,n)){f.preventDefault();let m=r!==void 0?r:_s(c)===_s(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}function nk(t,e){e===void 0&&(e={});let n=b.useContext(ET);n==null&&de(!1);let{basename:r}=ek(Nf.useViewTransitionState),i=ah(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Nr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Nr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ec(i.pathname,o)!=null||Ec(i.pathname,s)!=null}let rk={data:""},ik=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||rk},sk=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ok=/\/\*[^]*?\*\/|  +/g,u_=/\n+/g,ni=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?ni(o,s):s+"{"+ni(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=ni(o,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=ni.p?ni.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},fr={},TT=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+TT(t[n]);return e}return t},ak=(t,e,n,r,i)=>{let s=TT(t),o=fr[s]||(fr[s]=(u=>{let c=0,d=11;for(;c<u.length;)d=101*d+u.charCodeAt(c++)>>>0;return"go"+d})(s));if(!fr[o]){let u=s!==t?t:(c=>{let d,f,m=[{}];for(;d=sk.exec(c.replace(ok,""));)d[4]?m.shift():d[3]?(f=d[3].replace(u_," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][d[1]]=d[2].replace(u_," ").trim();return m[0]})(t);fr[o]=ni(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&fr.g?fr.g:null;return n&&(fr.g=fr[o]),((u,c,d,f)=>{f?c.data=c.data.replace(f,u):c.data.indexOf(u)===-1&&(c.data=d?u+c.data:c.data+u)})(fr[o],e,r,l),o},lk=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":ni(l,""):l===!1?"":l}return r+i+(o??"")},"");function lh(t){let e=this||{},n=t.call?t(e.p):t;return ak(n.unshift?n.raw?lk(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,ik(e.target),e.g,e.o,e.k)}let IT,Df,xf;lh.bind({g:1});let Dr=lh.bind({k:1});function uk(t,e,n,r){ni.p=e,IT=t,Df=n,xf=r}function Vi(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),u=l.className||i.className;n.p=Object.assign({theme:Df&&Df()},l),n.o=/ *go\d+/.test(u),l.className=lh.apply(n,r)+(u?" "+u:"");let c=t;return t[0]&&(c=l.as||t,delete l.as),xf&&c[0]&&xf(l),IT(c,l)}return i}}var ck=t=>typeof t=="function",Ic=(t,e)=>ck(t)?t(e):t,hk=(()=>{let t=0;return()=>(++t).toString()})(),ST=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),dk=20,am="default",RT=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return RT(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},Uu=[],AT={toasts:[],pausedAt:void 0,settings:{toastLimit:dk}},Jn={},PT=(t,e=am)=>{Jn[e]=RT(Jn[e]||AT,t),Uu.forEach(([n,r])=>{n===e&&r(Jn[e])})},CT=t=>Object.keys(Jn).forEach(e=>PT(t,e)),fk=t=>Object.keys(Jn).find(e=>Jn[e].toasts.some(n=>n.id===t)),uh=(t=am)=>e=>{PT(e,t)},pk={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},mk=(t={},e=am)=>{let[n,r]=b.useState(Jn[e]||AT),i=b.useRef(Jn[e]);b.useEffect(()=>(i.current!==Jn[e]&&r(Jn[e]),Uu.push([e,r]),()=>{let o=Uu.findIndex(([l])=>l===e);o>-1&&Uu.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var l,u,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((l=t[o.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((u=t[o.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||pk[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:s}},gk=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||hk()}),Il=t=>(e,n)=>{let r=gk(e,t,n);return uh(r.toasterId||fk(r.id))({type:2,toast:r}),r.id},ct=(t,e)=>Il("blank")(t,e);ct.error=Il("error");ct.success=Il("success");ct.loading=Il("loading");ct.custom=Il("custom");ct.dismiss=(t,e)=>{let n={type:3,toastId:t};e?uh(e)(n):CT(n)};ct.dismissAll=t=>ct.dismiss(void 0,t);ct.remove=(t,e)=>{let n={type:4,toastId:t};e?uh(e)(n):CT(n)};ct.removeAll=t=>ct.remove(void 0,t);ct.promise=(t,e,n)=>{let r=ct.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?Ic(e.success,i):void 0;return s?ct.success(s,{id:r,...n,...n==null?void 0:n.success}):ct.dismiss(r),i}).catch(i=>{let s=e.error?Ic(e.error,i):void 0;s?ct.error(s,{id:r,...n,...n==null?void 0:n.error}):ct.dismiss(r)}),t};var yk=1e3,_k=(t,e="default")=>{let{toasts:n,pausedAt:r}=mk(t,e),i=b.useRef(new Map).current,s=b.useCallback((f,m=yk)=>{if(i.has(f))return;let E=setTimeout(()=>{i.delete(f),o({type:4,toastId:f})},m);i.set(f,E)},[]);b.useEffect(()=>{if(r)return;let f=Date.now(),m=n.map(E=>{if(E.duration===1/0)return;let A=(E.duration||0)+E.pauseDuration-(f-E.createdAt);if(A<0){E.visible&&ct.dismiss(E.id);return}return setTimeout(()=>ct.dismiss(E.id,e),A)});return()=>{m.forEach(E=>E&&clearTimeout(E))}},[n,r,e]);let o=b.useCallback(uh(e),[e]),l=b.useCallback(()=>{o({type:5,time:Date.now()})},[o]),u=b.useCallback((f,m)=>{o({type:1,toast:{id:f,height:m}})},[o]),c=b.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),d=b.useCallback((f,m)=>{let{reverseOrder:E=!1,gutter:A=8,defaultPosition:k}=m||{},D=n.filter(S=>(S.position||k)===(f.position||k)&&S.height),I=D.findIndex(S=>S.id===f.id),v=D.filter((S,L)=>L<I&&S.visible).length;return D.filter(S=>S.visible).slice(...E?[v+1]:[0,v]).reduce((S,L)=>S+(L.height||0)+A,0)},[n]);return b.useEffect(()=>{n.forEach(f=>{if(f.dismissed)s(f.id,f.removeDelay);else{let m=i.get(f.id);m&&(clearTimeout(m),i.delete(f.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:u,startPause:l,endPause:c,calculateOffset:d}}},vk=Dr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Ek=Dr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,wk=Dr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Tk=Vi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${vk} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ek} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${wk} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Ik=Dr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Sk=Vi("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Ik} 1s linear infinite;
`,Rk=Dr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ak=Dr`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Pk=Vi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Rk} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ak} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ck=Vi("div")`
  position: absolute;
`,kk=Vi("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Nk=Dr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Dk=Vi("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Nk} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,xk=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?b.createElement(Dk,null,e):e:n==="blank"?null:b.createElement(kk,null,b.createElement(Sk,{...r}),n!=="loading"&&b.createElement(Ck,null,n==="error"?b.createElement(Tk,{...r}):b.createElement(Pk,{...r})))},bk=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ok=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Lk="0%{opacity:0;} 100%{opacity:1;}",Vk="0%{opacity:1;} 100%{opacity:0;}",Mk=Vi("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Uk=Vi("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Fk=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=ST()?[Lk,Vk]:[bk(n),Ok(n)];return{animation:e?`${Dr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Dr(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},jk=b.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?Fk(t.position||e||"top-center",t.visible):{opacity:0},s=b.createElement(xk,{toast:t}),o=b.createElement(Uk,{...t.ariaProps},Ic(t.message,t));return b.createElement(Mk,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):b.createElement(b.Fragment,null,s,o))});uk(b.createElement);var zk=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=b.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return b.createElement("div",{ref:s,className:e,style:n},i)},Bk=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:ST()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},$k=lh`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,gu=16,Hk=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:l})=>{let{toasts:u,handlers:c}=_k(n,s);return b.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:gu,left:gu,right:gu,bottom:gu,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map(d=>{let f=d.position||e,m=c.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),E=Bk(f,m);return b.createElement(zk,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?$k:"",style:E},d.type==="custom"?Ic(d.message,d):i?i(d):b.createElement(jk,{toast:d,position:f}))}))},kT={exports:{}},Wk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",qk=Wk,Kk=qk;function NT(){}function DT(){}DT.resetWarningCache=NT;var Gk=function(){function t(r,i,s,o,l,u){if(u!==Kk){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:DT,resetWarningCache:NT};return n.PropTypes=n,n};kT.exports=Gk();var Qk=kT.exports;const ch=op(Qk),Yk=()=>{};var c_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},bT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[d],n[f],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new Xk;const m=s<<2|l>>4;if(r.push(m),c!==64){const E=l<<4&240|c>>2;if(r.push(E),f!==64){const A=c<<6&192|f;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zk=function(t){const e=xT(t);return bT.encodeByteArray(e,!0)},Sc=function(t){return Zk(t).replace(/\./g,"")},OT=function(t){try{return bT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=()=>e1().__FIREBASE_DEFAULTS__,n1=()=>{if(typeof process>"u"||typeof c_>"u")return;const t=c_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},r1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&OT(t[1]);return e&&JSON.parse(e)},hh=()=>{try{return Yk()||t1()||n1()||r1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},LT=t=>{var e,n;return(n=(e=hh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},VT=t=>{const e=LT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},MT=()=>{var t;return(t=hh())==null?void 0:t.config},UT=t=>{var e;return(e=hh())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Sc(JSON.stringify(n)),Sc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function s1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mt())}function o1(){var e;const t=(e=hh())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function a1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function l1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function u1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function c1(){const t=Mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function h1(){return!o1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function d1(){try{return typeof indexedDB=="object"}catch{return!1}}function f1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1="FirebaseError";class cr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=p1,Object.setPrototypeOf(this,cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sl.prototype.create)}}class Sl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?m1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new cr(i,l,r)}}function m1(t,e){return t.replace(g1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const g1=/\{\$([^}]+)}/g;function y1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(h_(s)&&h_(o)){if(!vs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function h_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ta(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function _1(t,e){const n=new v1(t,e);return n.subscribe.bind(n)}class v1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");E1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ed),i.error===void 0&&(i.error=Ed),i.complete===void 0&&(i.complete=Ed);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function E1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ed(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function lm(t){return(await fetch(t,{credentials:"include"})).ok}class Si{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new i1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(I1(e))try{this.getOrInitializeService({instanceIdentifier:Zi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zi){return this.instances.has(e)}getOptions(e=Zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:T1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zi){return this.component?this.component.multipleInstances?e:Zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function T1(t){return t===Zi?void 0:t}function I1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new w1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const R1={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},A1=ve.INFO,P1={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},C1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=P1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class um{constructor(e){this.name=e,this._logLevel=A1,this._logHandler=C1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?R1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const k1=(t,e)=>e.some(n=>t instanceof n);let d_,f_;function N1(){return d_||(d_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function D1(){return f_||(f_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jT=new WeakMap,bf=new WeakMap,zT=new WeakMap,wd=new WeakMap,cm=new WeakMap;function x1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_i(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jT.set(n,t)}).catch(()=>{}),cm.set(e,t),e}function b1(t){if(bf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bf.set(t,e)}let Of={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _i(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function O1(t){Of=t(Of)}function L1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Td(this),e,...n);return zT.set(r,e.sort?e.sort():[e]),_i(r)}:D1().includes(t)?function(...e){return t.apply(Td(this),e),_i(jT.get(this))}:function(...e){return _i(t.apply(Td(this),e))}}function V1(t){return typeof t=="function"?L1(t):(t instanceof IDBTransaction&&b1(t),k1(t,N1())?new Proxy(t,Of):t)}function _i(t){if(t instanceof IDBRequest)return x1(t);if(wd.has(t))return wd.get(t);const e=V1(t);return e!==t&&(wd.set(t,e),cm.set(e,t)),e}const Td=t=>cm.get(t);function M1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=_i(o);return r&&o.addEventListener("upgradeneeded",u=>{r(_i(o.result),u.oldVersion,u.newVersion,_i(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const U1=["get","getKey","getAll","getAllKeys","count"],F1=["put","add","delete","clear"],Id=new Map;function p_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Id.get(e))return Id.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=F1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||U1.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Id.set(e,s),s}O1(t=>({...t,get:(e,n,r)=>p_(e,n)||t.get(e,n,r),has:(e,n)=>!!p_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(z1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function z1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lf="@firebase/app",m_="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new um("@firebase/app"),B1="@firebase/app-compat",$1="@firebase/analytics-compat",H1="@firebase/analytics",W1="@firebase/app-check-compat",q1="@firebase/app-check",K1="@firebase/auth",G1="@firebase/auth-compat",Q1="@firebase/database",Y1="@firebase/data-connect",J1="@firebase/database-compat",X1="@firebase/functions",Z1="@firebase/functions-compat",eN="@firebase/installations",tN="@firebase/installations-compat",nN="@firebase/messaging",rN="@firebase/messaging-compat",iN="@firebase/performance",sN="@firebase/performance-compat",oN="@firebase/remote-config",aN="@firebase/remote-config-compat",lN="@firebase/storage",uN="@firebase/storage-compat",cN="@firebase/firestore",hN="@firebase/ai",dN="@firebase/firestore-compat",fN="firebase",pN="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="[DEFAULT]",mN={[Lf]:"fire-core",[B1]:"fire-core-compat",[H1]:"fire-analytics",[$1]:"fire-analytics-compat",[q1]:"fire-app-check",[W1]:"fire-app-check-compat",[K1]:"fire-auth",[G1]:"fire-auth-compat",[Q1]:"fire-rtdb",[Y1]:"fire-data-connect",[J1]:"fire-rtdb-compat",[X1]:"fire-fn",[Z1]:"fire-fn-compat",[eN]:"fire-iid",[tN]:"fire-iid-compat",[nN]:"fire-fcm",[rN]:"fire-fcm-compat",[iN]:"fire-perf",[sN]:"fire-perf-compat",[oN]:"fire-rc",[aN]:"fire-rc-compat",[lN]:"fire-gcs",[uN]:"fire-gcs-compat",[cN]:"fire-fst",[dN]:"fire-fst-compat",[hN]:"fire-vertex","fire-js":"fire-js",[fN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=new Map,gN=new Map,Mf=new Map;function g_(t,e){try{t.container.addComponent(e)}catch(n){xr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Es(t){const e=t.name;if(Mf.has(e))return xr.debug(`There were multiple attempts to register component ${e}.`),!1;Mf.set(e,t);for(const n of ol.values())g_(n,t);for(const n of gN.values())g_(n,t);return!0}function dh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Yt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vi=new Sl("app","Firebase",yN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=pN;function BT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Vf,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw vi.create("bad-app-name",{appName:String(i)});if(n||(n=MT()),!n)throw vi.create("no-options");const s=ol.get(i);if(s){if(vs(n,s.options)&&vs(r,s.config))return s;throw vi.create("duplicate-app",{appName:i})}const o=new S1(i);for(const u of Mf.values())o.addComponent(u);const l=new _N(n,r,o);return ol.set(i,l),l}function fh(t=Vf){const e=ol.get(t);if(!e&&t===Vf&&MT())return BT();if(!e)throw vi.create("no-app",{appName:t});return e}function vN(){return Array.from(ol.values())}function tr(t,e,n){let r=mN[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xr.warn(o.join(" "));return}Es(new Si(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN="firebase-heartbeat-database",wN=1,al="firebase-heartbeat-store";let Sd=null;function $T(){return Sd||(Sd=M1(EN,wN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(al)}catch(n){console.warn(n)}}}}).catch(t=>{throw vi.create("idb-open",{originalErrorMessage:t.message})})),Sd}async function TN(t){try{const n=(await $T()).transaction(al),r=await n.objectStore(al).get(HT(t));return await n.done,r}catch(e){if(e instanceof cr)xr.warn(e.message);else{const n=vi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xr.warn(n.message)}}}async function y_(t,e){try{const r=(await $T()).transaction(al,"readwrite");await r.objectStore(al).put(e,HT(t)),await r.done}catch(n){if(n instanceof cr)xr.warn(n.message);else{const r=vi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xr.warn(r.message)}}}function HT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=1024,SN=30;class RN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=__();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>SN){const o=CN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=__(),{heartbeatsToSend:r,unsentEntries:i}=AN(this._heartbeatsCache.heartbeats),s=Sc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return xr.warn(n),""}}}function __(){return new Date().toISOString().substring(0,10)}function AN(t,e=IN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),v_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),v_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class PN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return d1()?f1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await TN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return y_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return y_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function v_(t){return Sc(JSON.stringify({version:2,heartbeats:t})).length}function CN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(t){Es(new Si("platform-logger",e=>new j1(e),"PRIVATE")),Es(new Si("heartbeat",e=>new RN(e),"PRIVATE")),tr(Lf,m_,t),tr(Lf,m_,"esm2020"),tr("fire-js","")}kN("");function WT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NN=WT,qT=new Sl("auth","Firebase",WT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=new um("@firebase/auth");function DN(t,...e){Rc.logLevel<=ve.WARN&&Rc.warn(`Auth (${Ns}): ${t}`,...e)}function Fu(t,...e){Rc.logLevel<=ve.ERROR&&Rc.error(`Auth (${Ns}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,...e){throw dm(t,...e)}function Vn(t,...e){return dm(t,...e)}function hm(t,e,n){const r={...NN(),[e]:n};return new Sl("auth","Firebase",r).create(e,{appName:t.name})}function Sr(t){return hm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tn(t,"argument-error"),hm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qT.create(t,...e)}function se(t,e,...n){if(!t)throw dm(e,...n)}function vr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fu(e),new Error(e)}function br(t,e){t||vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function bN(){return E_()==="http:"||E_()==="https:"}function E_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bN()||l1()||"connection"in navigator)?navigator.onLine:!0}function LN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,n){this.shortDelay=e,this.longDelay=n,br(n>e,"Short delay should be less than long delay!"),this.isMobile=s1()||u1()}get(){return ON()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t,e){br(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],UN=new Al(3e4,6e4);function Mi(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ui(t,e,n,r,i={}){return GT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Rl({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return a1()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ks(t.emulatorConfig.host)&&(c.credentials="include"),KT.fetch()(await QT(t,t.config.apiHost,n,l),c)})}async function GT(t,e,n){t._canInitEmulator=!1;const r={...VN,...e};try{const i=new jN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw yu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw yu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw yu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw yu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw hm(t,d,c);Tn(t,d)}}catch(i){if(i instanceof cr)throw i;Tn(t,"network-request-failed",{message:String(i)})}}async function Pl(t,e,n,r,i={}){const s=await Ui(t,e,n,r,i);return"mfaPendingCredential"in s&&Tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function QT(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?fm(t.config,i):`${t.config.apiScheme}://${i}`;return MN.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function FN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Vn(this.auth,"network-request-failed")),UN.get())})}}function yu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Vn(t,e,r);return i.customData._tokenResponse=n,i}function w_(t){return t!==void 0&&t.enterprise!==void 0}class zN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return FN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function BN(t,e){return Ui(t,"GET","/v2/recaptchaConfig",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $N(t,e){return Ui(t,"POST","/v1/accounts:delete",e)}async function Ac(t,e){return Ui(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HN(t,e=!1){const n=Je(t),r=await n.getIdToken(e),i=pm(r);se(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Va(Rd(i.auth_time)),issuedAtTime:Va(Rd(i.iat)),expirationTime:Va(Rd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Rd(t){return Number(t)*1e3}function pm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fu("JWT malformed, contained fewer than 3 sections"),null;try{const i=OT(n);return i?JSON.parse(i):(Fu("Failed to decode base64 JWT payload"),null)}catch(i){return Fu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function T_(t){const e=pm(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cr&&WN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Va(this.lastLoginAt),this.creationTime=Va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pc(t){var f;const e=t.auth,n=await t.getIdToken(),r=await ll(t,Ac(e,{idToken:n}));se(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?YT(i.providerUserInfo):[],o=GN(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ff(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function KN(t){const e=Je(t);await Pc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function YT(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QN(t,e){const n=await GT(t,{},async()=>{const r=Rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await QT(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ks(t.emulatorConfig.host)&&(u.credentials="include"),KT.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YN(t,e){return Ui(t,"POST","/v2/accounts:revokeToken",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):T_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=T_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await QN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ho;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(se(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(se(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ho,this.toJSON())}_performRefresh(){return vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new qN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ff(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ll(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HN(this,e)}reload(){return KN(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yt(this.auth.app))return Promise.reject(Sr(this.auth));const e=await this.getIdToken();return await ll(this,$N(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:E,providerData:A,stsTokenManager:k}=n;se(f&&k,e,"internal-error");const D=ho.fromJSON(this.name,k);se(typeof f=="string",e,"internal-error"),Yr(r,e.name),Yr(i,e.name),se(typeof m=="boolean",e,"internal-error"),se(typeof E=="boolean",e,"internal-error"),Yr(s,e.name),Yr(o,e.name),Yr(l,e.name),Yr(u,e.name),Yr(c,e.name),Yr(d,e.name);const I=new bn({uid:f,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:D,createdAt:c,lastLoginAt:d});return A&&Array.isArray(A)&&(I.providerData=A.map(v=>({...v}))),u&&(I._redirectEventId=u),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new ho;i.updateFromServerResponse(n);const s=new bn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Pc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];se(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?YT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ho;l.updateFromIdToken(r);const u=new bn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ff(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=new Map;function Er(t){br(t instanceof Function,"Expected a class definition");let e=I_.get(t);return e?(br(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,I_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}JT.type="NONE";const S_=JT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(t,e,n){return`firebase:${t}:${e}:${n}`}class fo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ju(this.userKey,i.apiKey,s),this.fullPersistenceKey=ju("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ac(this.auth,{idToken:e}).catch(()=>{});return n?bn._fromGetAccountInfoResponse(this.auth,n,e):null}return bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fo(Er(S_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Er(S_);const o=ju(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let f;if(typeof d=="string"){const m=await Ac(e,{idToken:d}).catch(()=>{});if(!m)break;f=await bn._fromGetAccountInfoResponse(e,m,d)}else f=bn._fromJSON(e,d);c!==s&&(l=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new fo(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new fo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(t0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(XT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(r0(e))return"Blackberry";if(i0(e))return"Webos";if(ZT(e))return"Safari";if((e.includes("chrome/")||e0(e))&&!e.includes("edge/"))return"Chrome";if(n0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function XT(t=Mt()){return/firefox\//i.test(t)}function ZT(t=Mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function e0(t=Mt()){return/crios\//i.test(t)}function t0(t=Mt()){return/iemobile/i.test(t)}function n0(t=Mt()){return/android/i.test(t)}function r0(t=Mt()){return/blackberry/i.test(t)}function i0(t=Mt()){return/webos/i.test(t)}function mm(t=Mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JN(t=Mt()){var e;return mm(t)&&!!((e=window.navigator)!=null&&e.standalone)}function XN(){return c1()&&document.documentMode===10}function s0(t=Mt()){return mm(t)||n0(t)||i0(t)||r0(t)||/windows phone/i.test(t)||t0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t,e=[]){let n;switch(t){case"Browser":n=R_(Mt());break;case"Worker":n=`${R_(Mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ns}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eD(t,e={}){return Ui(t,"GET","/v2/passwordPolicy",Mi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD=6;class nD{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??tD,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new A_(this),this.idTokenSubscription=new A_(this),this.beforeStateQueue=new ZN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Er(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await fo.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ac(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yt(this.app))return Promise.reject(Sr(this));const n=e?Je(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yt(this.app)?Promise.reject(Sr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yt(this.app)?Promise.reject(Sr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eD(this),n=new nD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Sl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Er(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await fo.create(this,[Er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=o0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&DN(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Fi(t){return Je(t)}class A_{constructor(e){this.auth=e,this.observer=null,this.addObserver=_1(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ph={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iD(t){ph=t}function a0(t){return ph.loadJS(t)}function sD(){return ph.recaptchaEnterpriseScript}function oD(){return ph.gapiScript}function aD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class lD{constructor(){this.enterprise=new uD}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class uD{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const cD="recaptcha-enterprise",l0="NO_RECAPTCHA";class hD{constructor(e){this.type=cD,this.auth=Fi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{BN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new zN(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;w_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(l0)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new lD().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&w_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=sD();u.length!==0&&(u+=l),a0(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function P_(t,e,n,r=!1,i=!1){const s=new hD(t);let o;if(i)o=l0;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function jf(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await P_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await P_(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(t,e){const n=dh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(vs(s,e??{}))return i;Tn(i,"already-initialized")}return n.initialize({options:e})}function fD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pD(t,e,n){const r=Fi(t);se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=u0(e),{host:o,port:l}=mD(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),se(vs(c,r.config.emulator)&&vs(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ks(o)?lm(`${s}//${o}${u}`):gD()}function u0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mD(t){const e=u0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:C_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:C_(o)}}}function C_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vr("not implemented")}_getIdTokenResponse(e){return vr("not implemented")}_linkToIdToken(e,n){return vr("not implemented")}_getReauthenticationResolver(e){return vr("not implemented")}}async function yD(t,e){return Ui(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _D(t,e){return Pl(t,"POST","/v1/accounts:signInWithPassword",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vD(t,e){return Pl(t,"POST","/v1/accounts:signInWithEmailLink",Mi(t,e))}async function ED(t,e){return Pl(t,"POST","/v1/accounts:signInWithEmailLink",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends gm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ul(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ul(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jf(e,n,"signInWithPassword",_D);case"emailLink":return vD(e,{email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jf(e,r,"signUpPassword",yD);case"emailLink":return ED(e,{idToken:n,email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(t,e){return Pl(t,"POST","/v1/accounts:signInWithIdp",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD="http://localhost";class ws extends gm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new ws(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return po(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,po(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,po(e,n)}buildRequest(){const e={requestUri:wD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ID(t){const e=wa(Ta(t)).link,n=e?wa(Ta(e)).deep_link_id:null,r=wa(Ta(t)).deep_link_id;return(r?wa(Ta(r)).link:null)||r||n||e||t}class ym{constructor(e){const n=wa(Ta(e)),r=n.apiKey??null,i=n.oobCode??null,s=TD(n.mode??null);se(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=ID(e);try{return new ym(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(){this.providerId=Mo.PROVIDER_ID}static credential(e,n){return ul._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ym.parseLink(n);return se(r,"argument-error"),ul._fromEmailAndCode(e,r.code,r.tenantId)}}Mo.PROVIDER_ID="password";Mo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends _m{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Cl{constructor(){super("facebook.com")}static credential(e){return ws._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";ri.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Cl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ws._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.GOOGLE_SIGN_IN_METHOD="google.com";gr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Cl{constructor(){super("github.com")}static credential(e){return ws._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ii.credential(e.oauthAccessToken)}catch{return null}}}ii.GITHUB_SIGN_IN_METHOD="github.com";ii.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Cl{constructor(){super("twitter.com")}static credential(e,n){return ws._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return si.credential(n,r)}catch{return null}}}si.TWITTER_SIGN_IN_METHOD="twitter.com";si.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SD(t,e){return Pl(t,"POST","/v1/accounts:signUp",Mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await bn._fromIdTokenResponse(e,r,i),o=k_(r);return new Ts({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=k_(r);return new Ts({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function k_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends cr{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Cc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Cc(e,n,r,i)}}function c0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Cc._fromErrorAndOperation(t,s,e,r):s})}async function RD(t,e,n=!1){const r=await ll(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ts._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AD(t,e,n=!1){const{auth:r}=t;if(Yt(r.app))return Promise.reject(Sr(r));const i="reauthenticate";try{const s=await ll(t,c0(r,i,e,t),n);se(s.idToken,r,"internal-error");const o=pm(s.idToken);se(o,r,"internal-error");const{sub:l}=o;return se(t.uid===l,r,"user-mismatch"),Ts._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h0(t,e,n=!1){if(Yt(t.app))return Promise.reject(Sr(t));const r="signIn",i=await c0(t,r,e),s=await Ts._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function PD(t,e){return h0(Fi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(t){const e=Fi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function CD(t,e,n){if(Yt(t.app))return Promise.reject(Sr(t));const r=Fi(t),o=await jf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",SD).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&d0(t),u}),l=await Ts._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function kD(t,e,n){return Yt(t.app)?Promise.reject(Sr(t)):PD(Je(t),Mo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&d0(t),r})}function ND(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function DD(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function xD(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function bD(t){return Je(t).signOut()}const kc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kc,"1"),this.storage.removeItem(kc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=1e3,LD=10;class p0 extends f0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=s0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);XN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,LD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}p0.type="LOCAL";const VD=p0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0 extends f0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}m0.type="SESSION";const g0=m0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new mh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await MD(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=vm("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){return window}function FD(t){nr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(){return typeof nr().WorkerGlobalScope<"u"&&typeof nr().importScripts=="function"}async function jD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function BD(){return y0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0="firebaseLocalStorageDb",$D=1,Nc="firebaseLocalStorage",v0="fbase_key";class kl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gh(t,e){return t.transaction([Nc],e?"readwrite":"readonly").objectStore(Nc)}function HD(){const t=indexedDB.deleteDatabase(_0);return new kl(t).toPromise()}function zf(){const t=indexedDB.open(_0,$D);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Nc,{keyPath:v0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Nc)?e(r):(r.close(),await HD(),e(await zf()))})})}async function N_(t,e,n){const r=gh(t,!0).put({[v0]:e,value:n});return new kl(r).toPromise()}async function WD(t,e){const n=gh(t,!1).get(e),r=await new kl(n).toPromise();return r===void 0?null:r.value}function D_(t,e){const n=gh(t,!0).delete(e);return new kl(n).toPromise()}const qD=800,KD=3;class E0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return y0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mh._getInstance(BD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await jD(),!this.activeServiceWorker)return;this.sender=new UD(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zf();return await N_(e,kc,"1"),await D_(e,kc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>N_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>WD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>D_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=gh(i,!1).getAll();return new kl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}E0.type="LOCAL";const GD=E0;new Al(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t,e){return e?Er(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em extends gm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return po(e,this._buildIdpRequest())}_linkToIdToken(e,n){return po(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return po(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function QD(t){return h0(t.auth,new Em(t),t.bypassAuthState)}function YD(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),AD(n,new Em(t),t.bypassAuthState)}async function JD(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),RD(n,new Em(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QD;case"linkViaPopup":case"linkViaRedirect":return JD;case"reauthViaPopup":case"reauthViaRedirect":return YD;default:Tn(this.auth,"internal-error")}}resolve(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=new Al(2e3,1e4);async function ZD(t,e,n){if(Yt(t.app))return Promise.reject(Vn(t,"operation-not-supported-in-this-environment"));const r=Fi(t);xN(t,e,_m);const i=w0(r,n);return new os(r,"signInViaPopup",e,i).executeNotNull()}class os extends T0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,os.currentPopupAction&&os.currentPopupAction.cancel(),os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){br(this.filter.length===1,"Popup operations only handle one event");const e=vm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,XD.get())};e()}}os.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex="pendingRedirect",zu=new Map;class tx extends T0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zu.get(this.auth._key());if(!e){try{const r=await nx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zu.set(this.auth._key(),e)}return this.bypassAuthState||zu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nx(t,e){const n=sx(e),r=ix(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function rx(t,e){zu.set(t._key(),e)}function ix(t){return Er(t._redirectPersistence)}function sx(t){return ju(ex,t.config.apiKey,t.name)}async function ox(t,e,n=!1){if(Yt(t.app))return Promise.reject(Sr(t));const r=Fi(t),i=w0(r,e),o=await new tx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax=10*60*1e3;class lx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ux(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!I0(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ax&&this.cachedEventUids.clear(),this.cachedEventUids.has(x_(e))}saveEventToCache(e){this.cachedEventUids.add(x_(e)),this.lastProcessedEventTime=Date.now()}}function x_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function I0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ux(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return I0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cx(t,e={}){return Ui(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dx=/^https?/;async function fx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cx(t);for(const n of e)try{if(px(n))return}catch{}Tn(t,"unauthorized-domain")}function px(t){const e=Uf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dx.test(n))return!1;if(hx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=new Al(3e4,6e4);function b_(){const t=nr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gx(t){return new Promise((e,n)=>{var i,s,o;function r(){b_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{b_(),n(Vn(t,"network-request-failed"))},timeout:mx.get()})}if((s=(i=nr().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=nr().gapi)!=null&&o.load)r();else{const l=aD("iframefcb");return nr()[l]=()=>{gapi.load?r():n(Vn(t,"network-request-failed"))},a0(`${oD()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Bu=null,e})}let Bu=null;function yx(t){return Bu=Bu||gx(t),Bu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x=new Al(5e3,15e3),vx="__/auth/iframe",Ex="emulator/auth/iframe",wx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ix(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fm(e,Ex):`https://${t.config.authDomain}/${vx}`,r={apiKey:e.apiKey,appName:t.name,v:Ns},i=Tx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Rl(r).slice(1)}`}async function Sx(t){const e=await yx(t),n=nr().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:Ix(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Vn(t,"network-request-failed"),l=nr().setTimeout(()=>{s(o)},_x.get());function u(){nr().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ax=500,Px=600,Cx="_blank",kx="http://localhost";class O_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nx(t,e,n,r=Ax,i=Px){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Rx,width:r.toString(),height:i.toString(),top:s,left:o},c=Mt().toLowerCase();n&&(l=e0(c)?Cx:n),XT(c)&&(e=e||kx,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[E,A])=>`${m}${E}=${A},`,"");if(JN(c)&&l!=="_self")return Dx(e||"",l),new O_(null);const f=window.open(e||"",l,d);se(f,t,"popup-blocked");try{f.focus()}catch{}return new O_(f)}function Dx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx="__/auth/handler",bx="emulator/auth/handler",Ox=encodeURIComponent("fac");async function L_(t,e,n,r,i,s){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ns,eventId:i};if(e instanceof _m){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",y1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Cl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${Ox}=${encodeURIComponent(u)}`:"";return`${Lx(t)}?${Rl(l).slice(1)}${c}`}function Lx({config:t}){return t.emulator?fm(t,bx):`https://${t.authDomain}/${xx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="webStorageSupport";class Vx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=g0,this._completeRedirectFn=ox,this._overrideRedirectResult=rx}async _openPopup(e,n,r,i){var o;br((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await L_(e,n,r,Uf(),i);return Nx(e,s,vm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await L_(e,n,r,Uf(),i);return FD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(br(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Sx(e),r=new lx(e);return n.register("authEvent",i=>(se(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ad,{type:Ad},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Ad];s!==void 0&&n(!!s),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return s0()||ZT()||mm()}}const Mx=Vx;var V_="@firebase/auth",M_="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jx(t){Es(new Si("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:o0(t)},c=new rD(r,i,s,u);return fD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Es(new Si("auth-internal",e=>{const n=Fi(e.getProvider("auth").getImmediate());return(r=>new Ux(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tr(V_,M_,Fx(t)),tr(V_,M_,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=5*60,Bx=UT("authIdTokenMaxAge")||zx;let U_=null;const $x=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Bx)return;const i=n==null?void 0:n.token;U_!==i&&(U_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Hx(t=fh()){const e=dh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dD(t,{popupRedirectResolver:Mx,persistence:[GD,VD,g0]}),r=UT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=$x(s.toString());DD(n,o,()=>o(n.currentUser)),ND(n,l=>o(l))}}const i=LT("auth");return i&&pD(n,`http://${i}`),n}function Wx(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}iD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Vn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Wx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jx("Browser");var qx="firebase",Kx="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tr(qx,Kx,"app");var F_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ei,S0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,y){function w(){}w.prototype=y.prototype,g.F=y.prototype,g.prototype=new w,g.prototype.constructor=g,g.D=function(T,P,N){for(var R=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)R[Te-2]=arguments[Te];return y.prototype[P].apply(T,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(g,y,w){w||(w=0);const T=Array(16);if(typeof y=="string")for(var P=0;P<16;++P)T[P]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(P=0;P<16;++P)T[P]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=g.g[0],w=g.g[1],P=g.g[2];let N=g.g[3],R;R=y+(N^w&(P^N))+T[0]+3614090360&4294967295,y=w+(R<<7&4294967295|R>>>25),R=N+(P^y&(w^P))+T[1]+3905402710&4294967295,N=y+(R<<12&4294967295|R>>>20),R=P+(w^N&(y^w))+T[2]+606105819&4294967295,P=N+(R<<17&4294967295|R>>>15),R=w+(y^P&(N^y))+T[3]+3250441966&4294967295,w=P+(R<<22&4294967295|R>>>10),R=y+(N^w&(P^N))+T[4]+4118548399&4294967295,y=w+(R<<7&4294967295|R>>>25),R=N+(P^y&(w^P))+T[5]+1200080426&4294967295,N=y+(R<<12&4294967295|R>>>20),R=P+(w^N&(y^w))+T[6]+2821735955&4294967295,P=N+(R<<17&4294967295|R>>>15),R=w+(y^P&(N^y))+T[7]+4249261313&4294967295,w=P+(R<<22&4294967295|R>>>10),R=y+(N^w&(P^N))+T[8]+1770035416&4294967295,y=w+(R<<7&4294967295|R>>>25),R=N+(P^y&(w^P))+T[9]+2336552879&4294967295,N=y+(R<<12&4294967295|R>>>20),R=P+(w^N&(y^w))+T[10]+4294925233&4294967295,P=N+(R<<17&4294967295|R>>>15),R=w+(y^P&(N^y))+T[11]+2304563134&4294967295,w=P+(R<<22&4294967295|R>>>10),R=y+(N^w&(P^N))+T[12]+1804603682&4294967295,y=w+(R<<7&4294967295|R>>>25),R=N+(P^y&(w^P))+T[13]+4254626195&4294967295,N=y+(R<<12&4294967295|R>>>20),R=P+(w^N&(y^w))+T[14]+2792965006&4294967295,P=N+(R<<17&4294967295|R>>>15),R=w+(y^P&(N^y))+T[15]+1236535329&4294967295,w=P+(R<<22&4294967295|R>>>10),R=y+(P^N&(w^P))+T[1]+4129170786&4294967295,y=w+(R<<5&4294967295|R>>>27),R=N+(w^P&(y^w))+T[6]+3225465664&4294967295,N=y+(R<<9&4294967295|R>>>23),R=P+(y^w&(N^y))+T[11]+643717713&4294967295,P=N+(R<<14&4294967295|R>>>18),R=w+(N^y&(P^N))+T[0]+3921069994&4294967295,w=P+(R<<20&4294967295|R>>>12),R=y+(P^N&(w^P))+T[5]+3593408605&4294967295,y=w+(R<<5&4294967295|R>>>27),R=N+(w^P&(y^w))+T[10]+38016083&4294967295,N=y+(R<<9&4294967295|R>>>23),R=P+(y^w&(N^y))+T[15]+3634488961&4294967295,P=N+(R<<14&4294967295|R>>>18),R=w+(N^y&(P^N))+T[4]+3889429448&4294967295,w=P+(R<<20&4294967295|R>>>12),R=y+(P^N&(w^P))+T[9]+568446438&4294967295,y=w+(R<<5&4294967295|R>>>27),R=N+(w^P&(y^w))+T[14]+3275163606&4294967295,N=y+(R<<9&4294967295|R>>>23),R=P+(y^w&(N^y))+T[3]+4107603335&4294967295,P=N+(R<<14&4294967295|R>>>18),R=w+(N^y&(P^N))+T[8]+1163531501&4294967295,w=P+(R<<20&4294967295|R>>>12),R=y+(P^N&(w^P))+T[13]+2850285829&4294967295,y=w+(R<<5&4294967295|R>>>27),R=N+(w^P&(y^w))+T[2]+4243563512&4294967295,N=y+(R<<9&4294967295|R>>>23),R=P+(y^w&(N^y))+T[7]+1735328473&4294967295,P=N+(R<<14&4294967295|R>>>18),R=w+(N^y&(P^N))+T[12]+2368359562&4294967295,w=P+(R<<20&4294967295|R>>>12),R=y+(w^P^N)+T[5]+4294588738&4294967295,y=w+(R<<4&4294967295|R>>>28),R=N+(y^w^P)+T[8]+2272392833&4294967295,N=y+(R<<11&4294967295|R>>>21),R=P+(N^y^w)+T[11]+1839030562&4294967295,P=N+(R<<16&4294967295|R>>>16),R=w+(P^N^y)+T[14]+4259657740&4294967295,w=P+(R<<23&4294967295|R>>>9),R=y+(w^P^N)+T[1]+2763975236&4294967295,y=w+(R<<4&4294967295|R>>>28),R=N+(y^w^P)+T[4]+1272893353&4294967295,N=y+(R<<11&4294967295|R>>>21),R=P+(N^y^w)+T[7]+4139469664&4294967295,P=N+(R<<16&4294967295|R>>>16),R=w+(P^N^y)+T[10]+3200236656&4294967295,w=P+(R<<23&4294967295|R>>>9),R=y+(w^P^N)+T[13]+681279174&4294967295,y=w+(R<<4&4294967295|R>>>28),R=N+(y^w^P)+T[0]+3936430074&4294967295,N=y+(R<<11&4294967295|R>>>21),R=P+(N^y^w)+T[3]+3572445317&4294967295,P=N+(R<<16&4294967295|R>>>16),R=w+(P^N^y)+T[6]+76029189&4294967295,w=P+(R<<23&4294967295|R>>>9),R=y+(w^P^N)+T[9]+3654602809&4294967295,y=w+(R<<4&4294967295|R>>>28),R=N+(y^w^P)+T[12]+3873151461&4294967295,N=y+(R<<11&4294967295|R>>>21),R=P+(N^y^w)+T[15]+530742520&4294967295,P=N+(R<<16&4294967295|R>>>16),R=w+(P^N^y)+T[2]+3299628645&4294967295,w=P+(R<<23&4294967295|R>>>9),R=y+(P^(w|~N))+T[0]+4096336452&4294967295,y=w+(R<<6&4294967295|R>>>26),R=N+(w^(y|~P))+T[7]+1126891415&4294967295,N=y+(R<<10&4294967295|R>>>22),R=P+(y^(N|~w))+T[14]+2878612391&4294967295,P=N+(R<<15&4294967295|R>>>17),R=w+(N^(P|~y))+T[5]+4237533241&4294967295,w=P+(R<<21&4294967295|R>>>11),R=y+(P^(w|~N))+T[12]+1700485571&4294967295,y=w+(R<<6&4294967295|R>>>26),R=N+(w^(y|~P))+T[3]+2399980690&4294967295,N=y+(R<<10&4294967295|R>>>22),R=P+(y^(N|~w))+T[10]+4293915773&4294967295,P=N+(R<<15&4294967295|R>>>17),R=w+(N^(P|~y))+T[1]+2240044497&4294967295,w=P+(R<<21&4294967295|R>>>11),R=y+(P^(w|~N))+T[8]+1873313359&4294967295,y=w+(R<<6&4294967295|R>>>26),R=N+(w^(y|~P))+T[15]+4264355552&4294967295,N=y+(R<<10&4294967295|R>>>22),R=P+(y^(N|~w))+T[6]+2734768916&4294967295,P=N+(R<<15&4294967295|R>>>17),R=w+(N^(P|~y))+T[13]+1309151649&4294967295,w=P+(R<<21&4294967295|R>>>11),R=y+(P^(w|~N))+T[4]+4149444226&4294967295,y=w+(R<<6&4294967295|R>>>26),R=N+(w^(y|~P))+T[11]+3174756917&4294967295,N=y+(R<<10&4294967295|R>>>22),R=P+(y^(N|~w))+T[2]+718787259&4294967295,P=N+(R<<15&4294967295|R>>>17),R=w+(N^(P|~y))+T[9]+3951481745&4294967295,g.g[0]=g.g[0]+y&4294967295,g.g[1]=g.g[1]+(P+(R<<21&4294967295|R>>>11))&4294967295,g.g[2]=g.g[2]+P&4294967295,g.g[3]=g.g[3]+N&4294967295}r.prototype.v=function(g,y){y===void 0&&(y=g.length);const w=y-this.blockSize,T=this.C;let P=this.h,N=0;for(;N<y;){if(P==0)for(;N<=w;)i(this,g,N),N+=this.blockSize;if(typeof g=="string"){for(;N<y;)if(T[P++]=g.charCodeAt(N++),P==this.blockSize){i(this,T),P=0;break}}else for(;N<y;)if(T[P++]=g[N++],P==this.blockSize){i(this,T),P=0;break}}this.h=P,this.o+=y},r.prototype.A=function(){var g=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);g[0]=128;for(var y=1;y<g.length-8;++y)g[y]=0;y=this.o*8;for(var w=g.length-8;w<g.length;++w)g[w]=y&255,y/=256;for(this.v(g),g=Array(16),y=0,w=0;w<4;++w)for(let T=0;T<32;T+=8)g[y++]=this.g[w]>>>T&255;return g};function s(g,y){var w=l;return Object.prototype.hasOwnProperty.call(w,g)?w[g]:w[g]=y(g)}function o(g,y){this.h=y;const w=[];let T=!0;for(let P=g.length-1;P>=0;P--){const N=g[P]|0;T&&N==y||(w[P]=N,T=!1)}this.g=w}var l={};function u(g){return-128<=g&&g<128?s(g,function(y){return new o([y|0],y<0?-1:0)}):new o([g|0],g<0?-1:0)}function c(g){if(isNaN(g)||!isFinite(g))return f;if(g<0)return D(c(-g));const y=[];let w=1;for(let T=0;g>=w;T++)y[T]=g/w|0,w*=4294967296;return new o(y,0)}function d(g,y){if(g.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(g.charAt(0)=="-")return D(d(g.substring(1),y));if(g.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=c(Math.pow(y,8));let T=f;for(let N=0;N<g.length;N+=8){var P=Math.min(8,g.length-N);const R=parseInt(g.substring(N,N+P),y);P<8?(P=c(Math.pow(y,P)),T=T.j(P).add(c(R))):(T=T.j(w),T=T.add(c(R)))}return T}var f=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-D(this).m();let g=0,y=1;for(let w=0;w<this.g.length;w++){const T=this.i(w);g+=(T>=0?T:4294967296+T)*y,y*=4294967296}return g},t.toString=function(g){if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(A(this))return"0";if(k(this))return"-"+D(this).toString(g);const y=c(Math.pow(g,6));var w=this;let T="";for(;;){const P=L(w,y).g;w=I(w,P.j(y));let N=((w.g.length>0?w.g[0]:w.h)>>>0).toString(g);if(w=P,A(w))return N+T;for(;N.length<6;)N="0"+N;T=N+T}},t.i=function(g){return g<0?0:g<this.g.length?this.g[g]:this.h};function A(g){if(g.h!=0)return!1;for(let y=0;y<g.g.length;y++)if(g.g[y]!=0)return!1;return!0}function k(g){return g.h==-1}t.l=function(g){return g=I(this,g),k(g)?-1:A(g)?0:1};function D(g){const y=g.g.length,w=[];for(let T=0;T<y;T++)w[T]=~g.g[T];return new o(w,~g.h).add(m)}t.abs=function(){return k(this)?D(this):this},t.add=function(g){const y=Math.max(this.g.length,g.g.length),w=[];let T=0;for(let P=0;P<=y;P++){let N=T+(this.i(P)&65535)+(g.i(P)&65535),R=(N>>>16)+(this.i(P)>>>16)+(g.i(P)>>>16);T=R>>>16,N&=65535,R&=65535,w[P]=R<<16|N}return new o(w,w[w.length-1]&-2147483648?-1:0)};function I(g,y){return g.add(D(y))}t.j=function(g){if(A(this)||A(g))return f;if(k(this))return k(g)?D(this).j(D(g)):D(D(this).j(g));if(k(g))return D(this.j(D(g)));if(this.l(E)<0&&g.l(E)<0)return c(this.m()*g.m());const y=this.g.length+g.g.length,w=[];for(var T=0;T<2*y;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(let P=0;P<g.g.length;P++){const N=this.i(T)>>>16,R=this.i(T)&65535,Te=g.i(P)>>>16,rt=g.i(P)&65535;w[2*T+2*P]+=R*rt,v(w,2*T+2*P),w[2*T+2*P+1]+=N*rt,v(w,2*T+2*P+1),w[2*T+2*P+1]+=R*Te,v(w,2*T+2*P+1),w[2*T+2*P+2]+=N*Te,v(w,2*T+2*P+2)}for(g=0;g<y;g++)w[g]=w[2*g+1]<<16|w[2*g];for(g=y;g<2*y;g++)w[g]=0;return new o(w,0)};function v(g,y){for(;(g[y]&65535)!=g[y];)g[y+1]+=g[y]>>>16,g[y]&=65535,y++}function S(g,y){this.g=g,this.h=y}function L(g,y){if(A(y))throw Error("division by zero");if(A(g))return new S(f,f);if(k(g))return y=L(D(g),y),new S(D(y.g),D(y.h));if(k(y))return y=L(g,D(y)),new S(D(y.g),y.h);if(g.g.length>30){if(k(g)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var w=m,T=y;T.l(g)<=0;)w=F(w),T=F(T);var P=$(w,1),N=$(T,1);for(T=$(T,2),w=$(w,2);!A(T);){var R=N.add(T);R.l(g)<=0&&(P=P.add(w),N=R),T=$(T,1),w=$(w,1)}return y=I(g,P.j(y)),new S(P,y)}for(P=f;g.l(y)>=0;){for(w=Math.max(1,Math.floor(g.m()/y.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),N=c(w),R=N.j(y);k(R)||R.l(g)>0;)w-=T,N=c(w),R=N.j(y);A(N)&&(N=m),P=P.add(N),g=I(g,R)}return new S(P,g)}t.B=function(g){return L(this,g).h},t.and=function(g){const y=Math.max(this.g.length,g.g.length),w=[];for(let T=0;T<y;T++)w[T]=this.i(T)&g.i(T);return new o(w,this.h&g.h)},t.or=function(g){const y=Math.max(this.g.length,g.g.length),w=[];for(let T=0;T<y;T++)w[T]=this.i(T)|g.i(T);return new o(w,this.h|g.h)},t.xor=function(g){const y=Math.max(this.g.length,g.g.length),w=[];for(let T=0;T<y;T++)w[T]=this.i(T)^g.i(T);return new o(w,this.h^g.h)};function F(g){const y=g.g.length+1,w=[];for(let T=0;T<y;T++)w[T]=g.i(T)<<1|g.i(T-1)>>>31;return new o(w,g.h)}function $(g,y){const w=y>>5;y%=32;const T=g.g.length-w,P=[];for(let N=0;N<T;N++)P[N]=y>0?g.i(N+w)>>>y|g.i(N+w+1)<<32-y:g.i(N+w);return new o(P,g.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,S0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Ei=o}).apply(typeof F_<"u"?F_:typeof self<"u"?self:typeof window<"u"?window:{});var _u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var R0,Ia,A0,$u,Bf,P0,C0,k0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof _u=="object"&&_u];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var O=a[_];if(!(O in p))break e;p=p[O]}a=a[a.length-1],_=p[a],h=h(_),h!=_&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var p=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&p.push([_,h[_]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,p){return a.call.apply(a.bind,arguments)}function c(a,h,p){return c=u,c.apply(null,arguments)}function d(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function f(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(_,O,M){for(var q=Array(arguments.length-2),he=2;he<arguments.length;he++)q[he-2]=arguments[he];return h.prototype[O].apply(_,q)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function E(a){const h=a.length;if(h>0){const p=Array(h);for(let _=0;_<h;_++)p[_]=a[_];return p}return[]}function A(a,h){for(let _=1;_<arguments.length;_++){const O=arguments[_];var p=typeof O;if(p=p!="object"?p:O?Array.isArray(O)?"array":p:"null",p=="array"||p=="object"&&typeof O.length=="number"){p=a.length||0;const M=O.length||0;a.length=p+M;for(let q=0;q<M;q++)a[p+q]=O[q]}else a.push(O)}}class k{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){o.setTimeout(()=>{throw a},0)}function I(){var a=g;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,p){const _=S.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var S=new k(()=>new L,a=>a.reset());class L{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let F,$=!1,g=new v,y=()=>{const a=Promise.resolve(void 0);F=()=>{a.then(w)}};function w(){for(var a;a=I();){try{a.h.call(a.g)}catch(p){D(p)}var h=S;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}$=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function R(a){return/^[\s\xa0]*$/.test(a)}function Te(a,h){P.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}f(Te,P),Te.prototype.init=function(a,h){const p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Te.Z.h.call(this)},Te.prototype.h=function(){Te.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var rt="closure_listenable_"+(Math.random()*1e6|0),jn=0;function zn(a,h,p,_,O){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=O,this.key=++jn,this.da=this.fa=!1}function H(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ie(a,h,p){for(const _ in a)h.call(p,a[_],_,a)}function ae(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function Ie(a){const h={};for(const p in a)h[p]=a[p];return h}const Se="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ht(a,h){let p,_;for(let O=1;O<arguments.length;O++){_=arguments[O];for(p in _)a[p]=_[p];for(let M=0;M<Se.length;M++)p=Se[M],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function mt(a){this.src=a,this.g={},this.h=0}mt.prototype.add=function(a,h,p,_,O){const M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);const q=st(a,h,_,O);return q>-1?(h=a[q],p||(h.fa=!1)):(h=new zn(h,this.src,M,!!_,O),h.fa=p,a.push(h)),h};function it(a,h){const p=h.type;if(p in a.g){var _=a.g[p],O=Array.prototype.indexOf.call(_,h,void 0),M;(M=O>=0)&&Array.prototype.splice.call(_,O,1),M&&(H(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function st(a,h,p,_){for(let O=0;O<a.length;++O){const M=a[O];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==_)return O}return-1}var kt="closure_lm_"+(Math.random()*1e6|0),Fr={};function Vl(a,h,p,_,O){if(Array.isArray(h)){for(let M=0;M<h.length;M++)Vl(a,h[M],p,_,O);return null}return p=Ml(p),a&&a[rt]?a.J(h,p,l(_)?!!_.capture:!1,O):xh(a,h,p,!1,_,O)}function xh(a,h,p,_,O,M){if(!h)throw Error("Invalid event type");const q=l(O)?!!O.capture:!!O;let he=In(a);if(he||(a[kt]=he=new mt(a)),p=he.add(h,p,_,q,M),p.proxy)return p;if(_=bh(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)N||(O=q),O===void 0&&(O=!1),a.addEventListener(h.toString(),_,O);else if(a.attachEvent)a.attachEvent(Ho(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function bh(){function a(p){return h.call(a.src,a.listener,p)}const h=Oh;return a}function gt(a,h,p,_,O){if(Array.isArray(h))for(var M=0;M<h.length;M++)gt(a,h[M],p,_,O);else _=l(_)?!!_.capture:!!_,p=Ml(p),a&&a[rt]?(a=a.i,M=String(h).toString(),M in a.g&&(h=a.g[M],p=st(h,p,_,O),p>-1&&(H(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[M],a.h--)))):a&&(a=In(a))&&(h=a.g[h.toString()],a=-1,h&&(a=st(h,p,_,O)),(p=a>-1?h[a]:null)&&Bn(p))}function Bn(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[rt])it(h.i,a);else{var p=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(p,_,a.capture):h.detachEvent?h.detachEvent(Ho(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=In(h))?(it(p,a),p.h==0&&(p.src=null,h[kt]=null)):H(a)}}}function Ho(a){return a in Fr?Fr[a]:Fr[a]="on"+a}function Oh(a,h){if(a.da)a=!0;else{h=new Te(h,this);const p=a.listener,_=a.ha||a.src;a.fa&&Bn(a),a=p.call(_,h)}return a}function In(a){return a=a[kt],a instanceof mt?a:null}var Wo="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ml(a){return typeof a=="function"?a:(a[Wo]||(a[Wo]=function(h){return a.handleEvent(h)}),a[Wo])}function ot(){T.call(this),this.i=new mt(this),this.M=this,this.G=null}f(ot,T),ot.prototype[rt]=!0,ot.prototype.removeEventListener=function(a,h,p,_){gt(this,a,h,p,_)};function wt(a,h){var p,_=a.G;if(_)for(p=[];_;_=_.G)p.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new P(h,a);else if(h instanceof P)h.target=h.target||a;else{var O=h;h=new P(_,a),Ht(h,O)}O=!0;let M,q;if(p)for(q=p.length-1;q>=0;q--)M=h.g=p[q],O=bs(M,_,!0,h)&&O;if(M=h.g=a,O=bs(M,_,!0,h)&&O,O=bs(M,_,!1,h)&&O,p)for(q=0;q<p.length;q++)M=h.g=p[q],O=bs(M,_,!1,h)&&O}ot.prototype.N=function(){if(ot.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let _=0;_<p.length;_++)H(p[_]);delete a.g[h],a.h--}}this.G=null},ot.prototype.J=function(a,h,p,_){return this.i.add(String(a),h,!1,p,_)},ot.prototype.K=function(a,h,p,_){return this.i.add(String(a),h,!0,p,_)};function bs(a,h,p,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let O=!0;for(let M=0;M<h.length;++M){const q=h[M];if(q&&!q.da&&q.capture==p){const he=q.listener,lt=q.ha||q.src;q.fa&&it(a.i,q),O=he.call(lt,_)!==!1&&O}}return O&&!_.defaultPrevented}function Lh(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Ul(a){a.g=Lh(()=>{a.g=null,a.i&&(a.i=!1,Ul(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class hr extends T{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ul(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sn(a){T.call(this),this.h=a,this.g={}}f(Sn,T);var qo=[];function Os(a){ie(a.g,function(h,p){this.g.hasOwnProperty(p)&&Bn(h)},a),a.g={}}Sn.prototype.N=function(){Sn.Z.N.call(this),Os(this)},Sn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pn=o.JSON.stringify,Rn=o.JSON.parse,Fl=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Bi(){}function jl(){}var Wt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ls(){P.call(this,"d")}f(Ls,P);function Vs(){P.call(this,"c")}f(Vs,P);var $n={},zl=null;function $i(){return zl=zl||new ot}$n.Ia="serverreachability";function Hi(a){P.call(this,$n.Ia,a)}f(Hi,P);function jr(a){const h=$i();wt(h,new Hi(h))}$n.STAT_EVENT="statevent";function Ms(a,h){P.call(this,$n.STAT_EVENT,a),this.stat=h}f(Ms,P);function at(a){const h=$i();wt(h,new Ms(h,a))}$n.Ja="timingevent";function Bl(a,h){P.call(this,$n.Ja,a),this.size=h}f(Bl,P);function zr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Wi(){this.g=!0}Wi.prototype.ua=function(){this.g=!1};function $l(a,h,p,_,O,M){a.info(function(){if(a.g)if(M){var q="",he=M.split("&");for(let ke=0;ke<he.length;ke++){var lt=he[ke].split("=");if(lt.length>1){const yt=lt[0];lt=lt[1];const qn=yt.split("_");q=qn.length>=2&&qn[1]=="type"?q+(yt+"="+lt+"&"):q+(yt+"=redacted&")}}}else q=null;else q=M;return"XMLHTTP REQ ("+_+") [attempt "+O+"]: "+h+`
`+p+`
`+q})}function Us(a,h,p,_,O,M,q){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+O+"]: "+h+`
`+p+`
`+M+" "+q})}function An(a,h,p,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Mh(a,p)+(_?" "+_:"")})}function Vh(a,h){a.info(function(){return"TIMEOUT: "+h})}Wi.prototype.info=function(){};function Mh(a,h){if(!a.g)return h;if(!h)return null;try{const M=JSON.parse(h);if(M){for(a=0;a<M.length;a++)if(Array.isArray(M[a])){var p=M[a];if(!(p.length<2)){var _=p[1];if(Array.isArray(_)&&!(_.length<1)){var O=_[0];if(O!="noop"&&O!="stop"&&O!="close")for(let q=1;q<_.length;q++)_[q]=""}}}}return pn(M)}catch{return h}}var C={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},x={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},V;function z(){}f(z,Bi),z.prototype.g=function(){return new XMLHttpRequest},V=new z;function W(a){return encodeURIComponent(String(a))}function ee(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function te(a,h,p,_){this.j=a,this.i=h,this.l=p,this.S=_||1,this.V=new Sn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Y}function Y(){this.i=null,this.g="",this.h=!1}var J={},G={};function Z(a,h,p){a.M=1,a.A=Hl(nn(h)),a.u=p,a.R=!0,ue(a,null)}function ue(a,h){a.F=Date.now(),ye(a),a.B=nn(a.A);var p=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),cg(p.i,"t",_),a.C=0,p=a.j.L,a.h=new Y,a.g=Cg(a.j,p?h:null,!a.u),a.P>0&&(a.O=new hr(c(a.Y,a,a.g),a.P)),h=a.V,p=a.g,_=a.ba;var O="readystatechange";Array.isArray(O)||(O&&(qo[0]=O.toString()),O=qo);for(let M=0;M<O.length;M++){const q=Vl(p,O[M],_||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=a.J?Ie(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),jr(),$l(a.i,a.v,a.B,a.l,a.S,a.u)}te.prototype.ba=function(a){a=a.target;const h=this.O;h&&qr(a)==3?h.j():this.Y(a)},te.prototype.Y=function(a){try{if(a==this.g)e:{const he=qr(this.g),lt=this.g.ya(),ke=this.g.ca();if(!(he<3)&&(he!=3||this.g&&(this.h.h||this.g.la()||yg(this.g)))){this.K||he!=4||lt==7||(lt==8||ke<=0?jr(3):jr(2)),Hn(this);var h=this.g.ca();this.X=h;var p=ge(this);if(this.o=h==200,Us(this.i,this.v,this.B,this.l,this.S,he,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,O=this.g;if((_=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(_)){var M=_;break t}}M=null}if(a=M)An(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,qt(this,a);else{this.o=!1,this.m=3,at(12),Tt(this),Pn(this);break e}}if(this.R){a=!0;let yt;for(;!this.K&&this.C<p.length;)if(yt=Ce(this,p),yt==G){he==4&&(this.m=4,at(14),a=!1),An(this.i,this.l,null,"[Incomplete Response]");break}else if(yt==J){this.m=4,at(15),An(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else An(this.i,this.l,yt,null),qt(this,yt);if(Xe(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),he!=4||p.length!=0||this.h.h||(this.m=1,at(16),a=!1),this.o=this.o&&a,!a)An(this.i,this.l,p,"[Invalid Chunked Response]"),Tt(this),Pn(this);else if(p.length>0&&!this.W){this.W=!0;var q=this.j;q.g==this&&q.aa&&!q.P&&(q.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),$h(q),q.P=!0,at(11))}}else An(this.i,this.l,p,null),qt(this,p);he==4&&Tt(this),this.o&&!this.K&&(he==4?Sg(this.j,this):(this.o=!1,ye(this)))}else zS(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,at(12)):(this.m=0,at(13)),Tt(this),Pn(this)}}}catch{}finally{}};function ge(a){if(!Xe(a))return a.g.la();const h=yg(a.g);if(h==="")return"";let p="";const _=h.length,O=qr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Tt(a),Pn(a),"";a.h.i=new o.TextDecoder}for(let M=0;M<_;M++)a.h.h=!0,p+=a.h.i.decode(h[M],{stream:!(O&&M==_-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function Xe(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Ce(a,h){var p=a.C,_=h.indexOf(`
`,p);return _==-1?G:(p=Number(h.substring(p,_)),isNaN(p)?J:(_+=1,_+p>h.length?G:(h=h.slice(_,_+p),a.C=_+p,h)))}te.prototype.cancel=function(){this.K=!0,Tt(this)};function ye(a){a.T=Date.now()+a.H,De(a,a.H)}function De(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=zr(c(a.aa,a),h)}function Hn(a){a.D&&(o.clearTimeout(a.D),a.D=null)}te.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Vh(this.i,this.B),this.M!=2&&(jr(),at(17)),Tt(this),this.m=2,Pn(this)):De(this,this.T-a)};function Pn(a){a.j.I==0||a.K||Sg(a.j,a)}function Tt(a){Hn(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Os(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function qt(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||$r(p.h,a))){if(!a.L&&$r(p.h,a)&&p.I==3){try{var _=p.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var O=_;if(O[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Ql(p),Kl(p);else break e;Bh(p),at(18)}}else p.xa=O[1],0<p.xa-p.K&&O[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=zr(c(p.Va,p),6e3));qi(p.h)<=1&&p.ta&&(p.ta=void 0)}else Qi(p,11)}else if((a.L||p.g==a)&&Ql(p),!R(h))for(O=p.Ba.g.parse(h),h=0;h<O.length;h++){let ke=O[h];const yt=ke[0];if(!(yt<=p.K))if(p.K=yt,ke=ke[1],p.I==2)if(ke[0]=="c"){p.M=ke[1],p.ba=ke[2];const qn=ke[3];qn!=null&&(p.ka=qn,p.j.info("VER="+p.ka));const Yi=ke[4];Yi!=null&&(p.za=Yi,p.j.info("SVER="+p.za));const Kr=ke[5];Kr!=null&&typeof Kr=="number"&&Kr>0&&(_=1.5*Kr,p.O=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const Gr=a.g;if(Gr){const Jl=Gr.g?Gr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jl){var M=_.h;M.g||Jl.indexOf("spdy")==-1&&Jl.indexOf("quic")==-1&&Jl.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(_e(M,M.h),M.h=null))}if(_.G){const Hh=Gr.g?Gr.g.getResponseHeader("X-HTTP-Session-Id"):null;Hh&&(_.wa=Hh,be(_.J,_.G,Hh))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),_=p;var q=a;if(_.na=Pg(_,_.L?_.ba:null,_.W),q.L){xe(_.h,q);var he=q,lt=_.O;lt&&(he.H=lt),he.D&&(Hn(he),ye(he)),_.g=q}else Tg(_);p.i.length>0&&Gl(p)}else ke[0]!="stop"&&ke[0]!="close"||Qi(p,7);else p.I==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Qi(p,7):zh(p):ke[0]!="noop"&&p.l&&p.l.qa(ke),p.A=0)}}jr(4)}catch{}}var Ko=class{constructor(a,h){this.g=a,this.map=h}};function Br(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Wn(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function qi(a){return a.h?1:a.g?a.g.size:0}function $r(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function _e(a,h){a.g?a.g.add(h):a.h=h}function xe(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Br.prototype.cancel=function(){if(this.i=dr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function dr(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return E(a.i)}var Hr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function He(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const _=a[p].indexOf("=");let O,M=null;_>=0?(O=a[p].substring(0,_),M=a[p].substring(_+1)):O=a[p],h(O,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Ut(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Ut?(this.l=a.l,Ki(this,a.j),this.o=a.o,this.g=a.g,Go(this,a.u),this.h=a.h,Uh(this,hg(a.i)),this.m=a.m):a&&(h=String(a).match(Hr))?(this.l=!1,Ki(this,h[1]||"",!0),this.o=Qo(h[2]||""),this.g=Qo(h[3]||"",!0),Go(this,h[4]),this.h=Qo(h[5]||"",!0),Uh(this,h[6]||"",!0),this.m=Qo(h[7]||"")):(this.l=!1,this.i=new Jo(null,this.l))}Ut.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Yo(h,og,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Yo(h,og,!0),"@"),a.push(W(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Yo(p,p.charAt(0)=="/"?xS:DS,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Yo(p,OS)),a.join("")},Ut.prototype.resolve=function(a){const h=nn(this);let p=!!a.j;p?Ki(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var _=a.h;if(p)Go(h,a.u);else if(p=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var O=h.h.lastIndexOf("/");O!=-1&&(_=h.h.slice(0,O+1)+_)}if(O=_,O==".."||O==".")_="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){_=O.lastIndexOf("/",0)==0,O=O.split("/");const M=[];for(let q=0;q<O.length;){const he=O[q++];he=="."?_&&q==O.length&&M.push(""):he==".."?((M.length>1||M.length==1&&M[0]!="")&&M.pop(),_&&q==O.length&&M.push("")):(M.push(he),_=!0)}_=M.join("/")}else _=O}return p?h.h=_:p=a.i.toString()!=="",p?Uh(h,hg(a.i)):p=!!a.m,p&&(h.m=a.m),h};function nn(a){return new Ut(a)}function Ki(a,h,p){a.j=p?Qo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Go(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Uh(a,h,p){h instanceof Jo?(a.i=h,LS(a.i,a.l)):(p||(h=Yo(h,bS)),a.i=new Jo(h,a.l))}function be(a,h,p){a.i.set(h,p)}function Hl(a){return be(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Qo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Yo(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,NS),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function NS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var og=/[#\/\?@]/g,DS=/[#\?:]/g,xS=/[#\?]/g,bS=/[#\?@]/g,OS=/#/g;function Jo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Gi(a){a.g||(a.g=new Map,a.h=0,a.i&&He(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Jo.prototype,t.add=function(a,h){Gi(this),this.i=null,a=Fs(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function ag(a,h){Gi(a),h=Fs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function lg(a,h){return Gi(a),h=Fs(a,h),a.g.has(h)}t.forEach=function(a,h){Gi(this),this.g.forEach(function(p,_){p.forEach(function(O){a.call(h,O,_,this)},this)},this)};function ug(a,h){Gi(a);let p=[];if(typeof h=="string")lg(a,h)&&(p=p.concat(a.g.get(Fs(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return Gi(this),this.i=null,a=Fs(this,a),lg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=ug(this,a),a.length>0?String(a[0]):h):h};function cg(a,h,p){ag(a,h),p.length>0&&(a.i=null,a.g.set(Fs(a,h),E(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var p=h[_];const O=W(p);p=ug(this,p);for(let M=0;M<p.length;M++){let q=O;p[M]!==""&&(q+="="+W(p[M])),a.push(q)}}return this.i=a.join("&")};function hg(a){const h=new Jo;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Fs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function LS(a,h){h&&!a.j&&(Gi(a),a.i=null,a.g.forEach(function(p,_){const O=_.toLowerCase();_!=O&&(ag(this,_),cg(this,O,p))},a)),a.j=h}function VS(a,h){const p=new Wi;if(o.Image){const _=new Image;_.onload=d(Wr,p,"TestLoadImage: loaded",!0,h,_),_.onerror=d(Wr,p,"TestLoadImage: error",!1,h,_),_.onabort=d(Wr,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=d(Wr,p,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function MS(a,h){const p=new Wi,_=new AbortController,O=setTimeout(()=>{_.abort(),Wr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(M=>{clearTimeout(O),M.ok?Wr(p,"TestPingServer: ok",!0,h):Wr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Wr(p,"TestPingServer: error",!1,h)})}function Wr(a,h,p,_,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),_(p)}catch{}}function US(){this.g=new Fl}function Fh(a){this.i=a.Sb||null,this.h=a.ab||!1}f(Fh,Bi),Fh.prototype.g=function(){return new Wl(this.i,this.h)};function Wl(a,h){ot.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Wl,ot),t=Wl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Zo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Xo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Zo(this)),this.g&&(this.readyState=3,Zo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;dg(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function dg(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Xo(this):Zo(this),this.readyState==3&&dg(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Xo(this))},t.Na=function(a){this.g&&(this.response=a,Xo(this))},t.ga=function(){this.g&&Xo(this)};function Xo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Zo(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Zo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Wl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function fg(a){let h="";return ie(a,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function jh(a,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=fg(p),typeof a=="string"?p!=null&&W(p):be(a,h,p))}function We(a){ot.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(We,ot);var FS=/^https?$/i,jS=["POST","PUT"];t=We.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():V.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(M){pg(this,M);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var O in _)p.set(O,_[O]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const M of _.keys())p.set(M,_.get(M));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),O=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(jS,h,void 0)>=0)||_||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,q]of p)this.g.setRequestHeader(M,q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(M){pg(this,M)}};function pg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,mg(a),ql(a)}function mg(a){a.A||(a.A=!0,wt(a,"complete"),wt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,wt(this,"complete"),wt(this,"abort"),ql(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ql(this,!0)),We.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?gg(this):this.Xa())},t.Xa=function(){gg(this)};function gg(a){if(a.h&&typeof s<"u"){if(a.v&&qr(a)==4)setTimeout(a.Ca.bind(a),0);else if(wt(a,"readystatechange"),qr(a)==4){a.h=!1;try{const M=a.ca();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=M===0){let q=String(a.D).match(Hr)[1]||null;!q&&o.self&&o.self.location&&(q=o.self.location.protocol.slice(0,-1)),_=!FS.test(q?q.toLowerCase():"")}p=_}if(p)wt(a,"complete"),wt(a,"success");else{a.o=6;try{var O=qr(a)>2?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.ca()+"]",mg(a)}}finally{ql(a)}}}}function ql(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||wt(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function qr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return qr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Rn(h)}};function yg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function zS(a){const h={};a=(a.g&&qr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(R(a[_]))continue;var p=ee(a[_]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[O]||[];h[O]=M,M.push(p)}ae(h,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ea(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function _g(a){this.za=0,this.i=[],this.j=new Wi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ea("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ea("baseRetryDelayMs",5e3,a),this.Za=ea("retryDelaySeedMs",1e4,a),this.Ta=ea("forwardChannelMaxRetries",2,a),this.va=ea("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Br(a&&a.concurrentRequestLimit),this.Ba=new US,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=_g.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,_){at(0),this.W=a,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.J=Pg(this,null,this.W),Gl(this)};function zh(a){if(vg(a),a.I==3){var h=a.V++,p=nn(a.J);if(be(p,"SID",a.M),be(p,"RID",h),be(p,"TYPE","terminate"),ta(a,p),h=new te(a,a.j,h),h.M=2,h.A=Hl(nn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=Cg(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ye(h)}Ag(a)}function Kl(a){a.g&&($h(a),a.g.cancel(),a.g=null)}function vg(a){Kl(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ql(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Gl(a){if(!Wn(a.h)&&!a.m){a.m=!0;var h=a.Ea;F||y(),$||(F(),$=!0),g.add(h,a),a.D=0}}function BS(a,h){return qi(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=zr(c(a.Ea,a,h),Rg(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const O=new te(this,this.j,a);let M=this.o;if(this.U&&(M?(M=Ie(M),Ht(M,this.U)):M=this.U),this.u!==null||this.R||(O.J=M,M=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=wg(this,O,h),p=nn(this.J),be(p,"RID",a),be(p,"CVER",22),this.G&&be(p,"X-HTTP-Session-Id",this.G),ta(this,p),M&&(this.R?h="headers="+W(fg(M))+"&"+h:this.u&&jh(p,this.u,M)),_e(this.h,O),this.Ra&&be(p,"TYPE","init"),this.S?(be(p,"$req",h),be(p,"SID","null"),O.U=!0,Z(O,p,null)):Z(O,p,h),this.I=2}}else this.I==3&&(a?Eg(this,a):this.i.length==0||Wn(this.h)||Eg(this))};function Eg(a,h){var p;h?p=h.l:p=a.V++;const _=nn(a.J);be(_,"SID",a.M),be(_,"RID",p),be(_,"AID",a.K),ta(a,_),a.u&&a.o&&jh(_,a.u,a.o),p=new te(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=wg(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),_e(a.h,p),Z(p,_,h)}function ta(a,h){a.H&&ie(a.H,function(p,_){be(h,_,p)}),a.l&&ie({},function(p,_){be(h,_,p)})}function wg(a,h,p){p=Math.min(a.i.length,p);const _=a.l?c(a.l.Ka,a.l,a):null;e:{var O=a.i;let he=-1;for(;;){const lt=["count="+p];he==-1?p>0?(he=O[0].g,lt.push("ofs="+he)):he=0:lt.push("ofs="+he);let ke=!0;for(let yt=0;yt<p;yt++){var M=O[yt].g;const qn=O[yt].map;if(M-=he,M<0)he=Math.max(0,O[yt].g-100),ke=!1;else try{M="req"+M+"_"||"";try{var q=qn instanceof Map?qn:Object.entries(qn);for(const[Yi,Kr]of q){let Gr=Kr;l(Kr)&&(Gr=pn(Kr)),lt.push(M+Yi+"="+encodeURIComponent(Gr))}}catch(Yi){throw lt.push(M+"type="+encodeURIComponent("_badmap")),Yi}}catch{_&&_(qn)}}if(ke){q=lt.join("&");break e}}q=void 0}return a=a.i.splice(0,p),h.G=a,q}function Tg(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;F||y(),$||(F(),$=!0),g.add(h,a),a.A=0}}function Bh(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=zr(c(a.Da,a),Rg(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Ig(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=zr(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,at(10),Kl(this),Ig(this))};function $h(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ig(a){a.g=new te(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=nn(a.na);be(h,"RID","rpc"),be(h,"SID",a.M),be(h,"AID",a.K),be(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&be(h,"TO",a.ia),be(h,"TYPE","xmlhttp"),ta(a,h),a.u&&a.o&&jh(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Hl(nn(h)),p.u=null,p.R=!0,ue(p,a)}t.Va=function(){this.C!=null&&(this.C=null,Kl(this),Bh(this),at(19))};function Ql(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Sg(a,h){var p=null;if(a.g==h){Ql(a),$h(a),a.g=null;var _=2}else if($r(a.h,h))p=h.G,xe(a.h,h),_=1;else return;if(a.I!=0){if(h.o)if(_==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var O=a.D;_=$i(),wt(_,new Bl(_,p)),Gl(a)}else Tg(a);else if(O=h.m,O==3||O==0&&h.X>0||!(_==1&&BS(a,h)||_==2&&Bh(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),O){case 1:Qi(a,5);break;case 4:Qi(a,10);break;case 3:Qi(a,6);break;default:Qi(a,2)}}}function Rg(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function Qi(a,h){if(a.j.info("Error code "+h),h==2){var p=c(a.bb,a),_=a.Ua;const O=!_;_=new Ut(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ki(_,"https"),Hl(_),O?VS(_.toString(),p):MS(_.toString(),p)}else at(2);a.I=0,a.l&&a.l.pa(h),Ag(a),vg(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function Ag(a){if(a.I=0,a.ja=[],a.l){const h=dr(a.h);(h.length!=0||a.i.length!=0)&&(A(a.ja,h),A(a.ja,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.oa()}}function Pg(a,h,p){var _=p instanceof Ut?nn(p):new Ut(p);if(_.g!="")h&&(_.g=h+"."+_.g),Go(_,_.u);else{var O=o.location;_=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;const M=new Ut(null);_&&Ki(M,_),h&&(M.g=h),O&&Go(M,O),p&&(M.h=p),_=M}return p=a.G,h=a.wa,p&&h&&be(_,p,h),be(_,"VER",a.ka),ta(a,_),_}function Cg(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new We(new Fh({ab:p})):new We(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function kg(){}t=kg.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Yl(){}Yl.prototype.g=function(a,h){return new rn(a,h)};function rn(a,h){ot.call(this),this.g=new _g(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!R(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!R(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new js(this)}f(rn,ot),rn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},rn.prototype.close=function(){zh(this.g)},rn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=pn(a),a=p);h.i.push(new Ko(h.Ya++,a)),h.I==3&&Gl(h)},rn.prototype.N=function(){this.g.l=null,delete this.j,zh(this.g),delete this.g,rn.Z.N.call(this)};function Ng(a){Ls.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}f(Ng,Ls);function Dg(){Vs.call(this),this.status=1}f(Dg,Vs);function js(a){this.g=a}f(js,kg),js.prototype.ra=function(){wt(this.g,"a")},js.prototype.qa=function(a){wt(this.g,new Ng(a))},js.prototype.pa=function(a){wt(this.g,new Dg)},js.prototype.oa=function(){wt(this.g,"b")},Yl.prototype.createWebChannel=Yl.prototype.g,rn.prototype.send=rn.prototype.o,rn.prototype.open=rn.prototype.m,rn.prototype.close=rn.prototype.close,k0=function(){return new Yl},C0=function(){return $i()},P0=$n,Bf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},C.NO_ERROR=0,C.TIMEOUT=8,C.HTTP_ERROR=6,$u=C,x.COMPLETE="complete",A0=x,jl.EventType=Wt,Wt.OPEN="a",Wt.CLOSE="b",Wt.ERROR="c",Wt.MESSAGE="d",ot.prototype.listen=ot.prototype.J,Ia=jl,We.prototype.listenOnce=We.prototype.K,We.prototype.getLastError=We.prototype.Ha,We.prototype.getLastErrorCode=We.prototype.ya,We.prototype.getStatus=We.prototype.ca,We.prototype.getResponseJson=We.prototype.La,We.prototype.getResponseText=We.prototype.la,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Fa,R0=We}).apply(typeof _u<"u"?_u:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo="12.13.0";function Gx(t){Uo=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new um("@firebase/firestore");function $s(){return Is.logLevel}function K(t,...e){if(Is.logLevel<=ve.DEBUG){const n=e.map(wm);Is.debug(`Firestore (${Uo}): ${t}`,...n)}}function Or(t,...e){if(Is.logLevel<=ve.ERROR){const n=e.map(wm);Is.error(`Firestore (${Uo}): ${t}`,...n)}}function Ss(t,...e){if(Is.logLevel<=ve.WARN){const n=e.map(wm);Is.warn(`Firestore (${Uo}): ${t}`,...n)}}function wm(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,N0(t,r,n)}function N0(t,e,n){let r=`FIRESTORE (${Uo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Or(r),new Error(r)}function Re(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||N0(e,i,r)}function ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends cr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Qx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(bt.UNAUTHENTICATED))}shutdown(){}}class Yx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Jx{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Re(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Rr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Rr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Rr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string",31837,{l:r}),new D0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string",2055,{h:e}),new bt(e)}}class Xx{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Zx{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Xx(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class j_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Yt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Re(this.o===void 0,3512);const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new j_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new j_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=tb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function $f(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Pd(i)===Pd(s)?fe(i,s):Pd(i)?1:-1}return fe(t.length,e.length)}const nb=55296,rb=57343;function Pd(t){const e=t.charCodeAt(0);return e>=nb&&e<=rb}function ko(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_="__name__";class Qn{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&oe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Qn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return fe(e.length,n.length)}static compareSegments(e,n){const r=Qn.isNumericId(e),i=Qn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Qn.extractNumericId(e).compare(Qn.extractNumericId(n)):$f(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ei.fromString(e.substring(4,e.length-2))}}class Le extends Qn{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const ib=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Qn{construct(e,n,r){return new Rt(e,n,r)}static isValidIdentifier(e){return ib.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===z_}static keyField(){return new Rt([z_])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new X(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new X(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new X(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new X(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(n)}static emptyPath(){return new Rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Le.fromString(e))}static fromName(e){return new re(Le.fromString(e).popFirst(5))}static empty(){return new re(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Le(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(t,e,n){if(!n)throw new X(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sb(t,e,n,r){if(e===!0&&r===!0)throw new X(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function B_(t){if(!re.isDocumentKey(t))throw new X(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $_(t){if(re.isDocumentKey(t))throw new X(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function b0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Im(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe(12329,{type:typeof t})}function Lr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Im(t);throw new X(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t,e){const n={typeString:t};return e&&(n.value=e),n}function Nl(t,e){if(!b0(t))throw new X(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new X(j.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=-62135596800,W_=1e6;class Ve{static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*W_);return new Ve(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<H_)throw new X(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/W_}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Nl(e,Ve._jsonSchema))return new Ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-H_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ve._jsonSchemaVersion="firestore/timestamp/1.0",Ve._jsonSchema={type:nt("string",Ve._jsonSchemaVersion),seconds:nt("number"),nanoseconds:nt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{static fromTimestamp(e){return new le(e)}static min(){return new le(new Ve(0,0))}static max(){return new le(new Ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=-1;function ob(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=le.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new Ri(i,re.empty(),e)}function ab(t){return new Ri(t.readTime,t.key,cl)}class Ri{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ri(le.min(),re.empty(),cl)}static max(){return new Ri(le.max(),re.empty(),cl)}}function lb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==ub)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function hb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function jo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}yh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=-1;function _h(t){return t==null}function Dc(t){return t===0&&1/t==-1/0}function db(t){return typeof t=="number"&&Number.isInteger(t)&&!Dc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0="";function fb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=q_(e)),e=pb(t.get(n),e);return q_(e)}function pb(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case O0:n+="";break;default:n+=s}}return n}function q_(t){return t+O0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ji(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function L0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||St.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vu(this.root,e,this.comparator,!1)}getReverseIterator(){return new vu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vu(this.root,e,this.comparator,!0)}}class vu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??St.RED,this.left=i??St.EMPTY,this.right=s??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new St(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return St.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw oe(27949);return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw oe(57766)}get value(){throw oe(16141)}get color(){throw oe(16727)}get left(){throw oe(29726)}get right(){throw oe(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new St(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new G_(this.data.getIterator())}getIteratorFrom(e){return new G_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pt(this.comparator);return n.data=e,n}}class G_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new ln([])}unionWith(e){let n=new pt(Rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ln(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ko(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new V0("Invalid base64 string: "+s):s}}(e);return new Ct(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const mb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(t){if(Re(!!t,39018),typeof t=="string"){let e=0;const n=mb.exec(t);if(Re(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pi(t){return typeof t=="string"?Ct.fromBase64String(t):Ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="server_timestamp",U0="__type__",F0="__previous_value__",j0="__local_write_time__";function Rm(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[U0])==null?void 0:r.stringValue)===M0}function vh(t){const e=t.mapValue.fields[F0];return Rm(e)?vh(e):e}function hl(t){const e=Ai(t.mapValue.fields[j0].timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,n,r,i,s,o,l,u,c,d,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d,this.apiKey=f}}const xc="(default)";class dl{constructor(e,n){this.projectId=e,this.database=n||xc}static empty(){return new dl("","")}get isDefaultDatabase(){return this.database===xc}isEqual(e){return e instanceof dl&&e.projectId===this.projectId&&e.database===this.database}}function yb(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new X(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dl(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="__type__",_b="__max__",Eu={mapValue:{}},B0="__vector__",bc="value";function Ci(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rm(t)?4:Eb(t)?9007199254740991:vb(t)?10:11:oe(28295,{value:t})}function or(t,e){if(t===e)return!0;const n=Ci(t);if(n!==Ci(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hl(t).isEqual(hl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ai(i.timestampValue),l=Ai(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Pi(i.bytesValue).isEqual(Pi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Qe(i.geoPointValue.latitude)===Qe(s.geoPointValue.latitude)&&Qe(i.geoPointValue.longitude)===Qe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Qe(i.integerValue)===Qe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Qe(i.doubleValue),l=Qe(s.doubleValue);return o===l?Dc(o)===Dc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ko(t.arrayValue.values||[],e.arrayValue.values||[],or);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(K_(o)!==K_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!or(o[u],l[u])))return!1;return!0}(t,e);default:return oe(52216,{left:t})}}function fl(t,e){return(t.values||[]).find(n=>or(n,e))!==void 0}function No(t,e){if(t===e)return 0;const n=Ci(t),r=Ci(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Qe(s.integerValue||s.doubleValue),u=Qe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Q_(t.timestampValue,e.timestampValue);case 4:return Q_(hl(t),hl(e));case 5:return $f(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Pi(s),u=Pi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=fe(l[c],u[c]);if(d!==0)return d}return fe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=fe(Qe(s.latitude),Qe(o.latitude));return l!==0?l:fe(Qe(s.longitude),Qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Y_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,E,A,k;const l=s.fields||{},u=o.fields||{},c=(m=l[bc])==null?void 0:m.arrayValue,d=(E=u[bc])==null?void 0:E.arrayValue,f=fe(((A=c==null?void 0:c.values)==null?void 0:A.length)||0,((k=d==null?void 0:d.values)==null?void 0:k.length)||0);return f!==0?f:Y_(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Eu.mapValue&&o===Eu.mapValue)return 0;if(s===Eu.mapValue)return 1;if(o===Eu.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=$f(u[f],d[f]);if(m!==0)return m;const E=No(l[u[f]],c[d[f]]);if(E!==0)return E}return fe(u.length,d.length)}(t.mapValue,e.mapValue);default:throw oe(23264,{he:n})}}function Q_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=Ai(t),r=Ai(e),i=fe(n.seconds,r.seconds);return i!==0?i:fe(n.nanos,r.nanos)}function Y_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=No(n[i],r[i]);if(s)return s}return fe(n.length,r.length)}function Do(t){return Hf(t)}function Hf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ai(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Pi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Hf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Hf(n.fields[o])}`;return i+"}"}(t.mapValue):oe(61005,{value:t})}function Hu(t){switch(Ci(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=vh(t);return e?16+Hu(e):16;case 5:return 2*t.stringValue.length;case 6:return Pi(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Hu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ji(r.fields,(s,o)=>{i+=s.length+Hu(o)}),i}(t.mapValue);default:throw oe(13486,{value:t})}}function Wf(t){return!!t&&"integerValue"in t}function Am(t){return!!t&&"arrayValue"in t}function J_(t){return!!t&&"nullValue"in t}function X_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wu(t){return!!t&&"mapValue"in t}function vb(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[z0])==null?void 0:r.stringValue)===B0}function Ma(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ji(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ma(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ma(t.arrayValue.values[n]);return e}return{...t}}function Eb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===_b}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ma(n)}setAll(e){let n=Rt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ma(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ji(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Jt(Ma(this.value))}}function $0(t){const e=[];return ji(t.fields,(n,r)=>{const i=new Rt([n]);if(Wu(r)){const s=$0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ln(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Lt(e,0,le.min(),le.min(),le.min(),Jt.empty(),0)}static newFoundDocument(e,n,r,i){return new Lt(e,1,n,le.min(),r,i,0)}static newNoDocument(e,n){return new Lt(e,2,n,le.min(),le.min(),Jt.empty(),0)}static newUnknownDocument(e,n){return new Lt(e,3,n,le.min(),le.min(),Jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n){this.position=e,this.inclusive=n}}function Z_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=No(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ev(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!or(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n="asc"){this.field=e,this.dir=n}}function wb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{}class ht extends H0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ib(e,n,r):n==="array-contains"?new Ab(e,r):n==="in"?new Pb(e,r):n==="not-in"?new Cb(e,r):n==="array-contains-any"?new kb(e,r):new ht(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Sb(e,r):new Rb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(No(n,this.value)):n!==null&&Ci(this.value)===Ci(n)&&this.matchesComparison(No(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ar extends H0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new ar(e,n)}matches(e){return W0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function W0(t){return t.op==="and"}function q0(t){return Tb(t)&&W0(t)}function Tb(t){for(const e of t.filters)if(e instanceof ar)return!1;return!0}function qf(t){if(t instanceof ht)return t.field.canonicalString()+t.op.toString()+Do(t.value);if(q0(t))return t.filters.map(e=>qf(e)).join(",");{const e=t.filters.map(n=>qf(n)).join(",");return`${t.op}(${e})`}}function K0(t,e){return t instanceof ht?function(r,i){return i instanceof ht&&r.op===i.op&&r.field.isEqual(i.field)&&or(r.value,i.value)}(t,e):t instanceof ar?function(r,i){return i instanceof ar&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&K0(o,i.filters[l]),!0):!1}(t,e):void oe(19439)}function G0(t){return t instanceof ht?function(n){return`${n.field.canonicalString()} ${n.op} ${Do(n.value)}`}(t):t instanceof ar?function(n){return n.op.toString()+" {"+n.getFilters().map(G0).join(" ,")+"}"}(t):"Filter"}class Ib extends ht{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class Sb extends ht{constructor(e,n){super(e,"in",n),this.keys=Q0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Rb extends ht{constructor(e,n){super(e,"not-in",n),this.keys=Q0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Q0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class Ab extends ht{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Am(n)&&fl(n.arrayValue,this.value)}}class Pb extends ht{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fl(this.value.arrayValue,n)}}class Cb extends ht{constructor(e,n){super(e,"not-in",n)}matches(e){if(fl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!fl(this.value.arrayValue,n)}}class kb extends ht{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Am(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function tv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Nb(t,e,n,r,i,s,o)}function Pm(t){const e=ce(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>qf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),_h(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Do(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Do(r)).join(",")),e.Te=n}return e.Te}function Cm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!K0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ev(t.startAt,e.startAt)&&ev(t.endAt,e.endAt)}function Kf(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Db(t,e,n,r,i,s,o,l){return new Eh(t,e,n,r,i,s,o,l)}function km(t){return new Eh(t)}function nv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xb(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function bb(t){return t.collectionGroup!==null}function Ua(t){const e=ce(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new pt(Rt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Lc(s,r))}),n.has(Rt.keyField().canonicalString())||e.Ie.push(new Lc(Rt.keyField(),r))}return e.Ie}function rr(t){const e=ce(t);return e.Ee||(e.Ee=Ob(e,Ua(t))),e.Ee}function Ob(t,e){if(t.limitType==="F")return tv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Lc(i.field,s)});const n=t.endAt?new Oc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Oc(t.startAt.position,t.startAt.inclusive):null;return tv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gf(t,e,n){return new Eh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wh(t,e){return Cm(rr(t),rr(e))&&t.limitType===e.limitType}function Y0(t){return`${Pm(rr(t))}|lt:${t.limitType}`}function Hs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>G0(i)).join(", ")}]`),_h(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Do(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Do(i)).join(",")),`Target(${r})`}(rr(t))}; limitType=${t.limitType})`}function Th(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):re.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ua(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Z_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Ua(r),i)||r.endAt&&!function(o,l,u){const c=Z_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Ua(r),i))}(t,e)}function Lb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function J0(t){return(e,n)=>{let r=!1;for(const i of Ua(t)){const s=Vb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Vb(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?No(u,c):oe(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ji(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return L0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=new je(re.comparator);function Vr(){return Mb}const X0=new je(re.comparator);function Sa(...t){let e=X0;for(const n of t)e=e.insert(n.key,n);return e}function Z0(t){let e=X0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function as(){return Fa()}function eI(){return Fa()}function Fa(){return new Ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ub=new je(re.comparator),Fb=new pt(re.comparator);function pe(...t){let e=Fb;for(const n of t)e=e.add(n);return e}const jb=new pt(fe);function zb(){return jb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dc(e)?"-0":e}}function tI(t){return{integerValue:""+t}}function Bb(t,e){return db(e)?tI(e):Nm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this._=void 0}}function $b(t,e,n){return t instanceof Vc?function(i,s){const o={fields:{[U0]:{stringValue:M0},[j0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Rm(s)&&(s=vh(s)),s&&(o.fields[F0]=s),{mapValue:o}}(n,e):t instanceof pl?rI(t,e):t instanceof ml?iI(t,e):function(i,s){const o=nI(i,s),l=rv(o)+rv(i.Ae);return Wf(o)&&Wf(i.Ae)?tI(l):Nm(i.serializer,l)}(t,e)}function Hb(t,e,n){return t instanceof pl?rI(t,e):t instanceof ml?iI(t,e):n}function nI(t,e){return t instanceof Mc?function(r){return Wf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Vc extends Ih{}class pl extends Ih{constructor(e){super(),this.elements=e}}function rI(t,e){const n=sI(e);for(const r of t.elements)n.some(i=>or(i,r))||n.push(r);return{arrayValue:{values:n}}}class ml extends Ih{constructor(e){super(),this.elements=e}}function iI(t,e){let n=sI(e);for(const r of t.elements)n=n.filter(i=>!or(i,r));return{arrayValue:{values:n}}}class Mc extends Ih{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function rv(t){return Qe(t.integerValue||t.doubleValue)}function sI(t){return Am(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Wb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof pl&&i instanceof pl||r instanceof ml&&i instanceof ml?ko(r.elements,i.elements,or):r instanceof Mc&&i instanceof Mc?or(r.Ae,i.Ae):r instanceof Vc&&i instanceof Vc}(t.transform,e.transform)}class qb{constructor(e,n){this.version=e,this.transformResults=n}}class Mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mn}static exists(e){return new Mn(void 0,e)}static updateTime(e){return new Mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sh{}function oI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Dm(t.key,Mn.none()):new Dl(t.key,t.data,Mn.none());{const n=t.data,r=Jt.empty();let i=new pt(Rt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zi(t.key,r,new ln(i.toArray()),Mn.none())}}function Kb(t,e,n){t instanceof Dl?function(i,s,o){const l=i.value.clone(),u=sv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof zi?function(i,s,o){if(!qu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=sv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(aI(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ja(t,e,n,r){return t instanceof Dl?function(s,o,l,u){if(!qu(s.precondition,o))return l;const c=s.value.clone(),d=ov(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof zi?function(s,o,l,u){if(!qu(s.precondition,o))return l;const c=ov(s.fieldTransforms,u,o),d=o.data;return d.setAll(aI(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,l){return qu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Gb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=nI(r.transform,i||null);s!=null&&(n===null&&(n=Jt.empty()),n.set(r.field,s))}return n||null}function iv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ko(r,i,(s,o)=>Wb(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Dl extends Sh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zi extends Sh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function aI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function sv(t,e,n){const r=new Map;Re(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Hb(o,l,n[i]))}return r}function ov(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,$b(s,o,e))}return r}class Dm extends Sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qb extends Sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Kb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ja(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ja(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=eI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=oI(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),pe())}isEqual(e){return this.batchId===e.batchId&&ko(this.mutations,e.mutations,(n,r)=>iv(n,r))&&ko(this.baseMutations,e.baseMutations,(n,r)=>iv(n,r))}}class xm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Re(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Ub}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new xm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,Ee;function Zb(t){switch(t){case j.OK:return oe(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return oe(15467,{code:t})}}function lI(t){if(t===void 0)return Or("GRPC error has no .code"),j.UNKNOWN;switch(t){case Ze.OK:return j.OK;case Ze.CANCELLED:return j.CANCELLED;case Ze.UNKNOWN:return j.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return j.INTERNAL;case Ze.UNAVAILABLE:return j.UNAVAILABLE;case Ze.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Ze.NOT_FOUND:return j.NOT_FOUND;case Ze.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Ze.ABORTED:return j.ABORTED;case Ze.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Ze.DATA_LOSS:return j.DATA_LOSS;default:return oe(39323,{code:t})}}(Ee=Ze||(Ze={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=new Ei([4294967295,4294967295],0);function av(t){const e=eO().encode(t),n=new S0;return n.update(e),new Uint8Array(n.digest())}function lv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ei([n,r],0),new Ei([i,s],0)]}class bm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ra(`Invalid padding: ${n}`);if(r<0)throw new Ra(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ra(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ra(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ei.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Ei.fromNumber(r)));return i.compare(tO)===1&&(i=new Ei([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=av(e),[r,i]=lv(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new bm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=av(e),[r,i]=lv(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ra extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,bl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xl(le.min(),i,new je(fe),Vr(),pe())}}class bl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new bl(r,n,pe(),pe(),pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class uI{constructor(e,n){this.targetId=e,this.Ce=n}}class cI{constructor(e,n,r=Ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class uv{constructor(){this.ve=0,this.Fe=cv(),this.Me=Ct.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=pe(),n=pe(),r=pe();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:oe(38017,{changeType:s})}}),new bl(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=cv()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Re(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class nO{constructor(e){this.Ge=e,this.ze=new Map,this.je=Vr(),this.Je=wu(),this.He=wu(),this.Ze=new je(fe)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:oe(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Kf(s))if(r===0){const o=new re(s.path);this.et(n,o,Lt.newNoDocument(o,le.min()))}else Re(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Pi(r).toUint8Array()}catch(u){if(u instanceof V0)return Ss("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new bm(o,i,s)}catch(u){return Ss(u instanceof Ra?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Kf(l.target)){const u=new re(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Lt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=pe();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new xl(e,n,this.Ze,this.je,r);return this.je=Vr(),this.Je=wu(),this.He=wu(),this.Ze=new je(fe),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new uv,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new pt(fe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new pt(fe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new uv),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function wu(){return new je(re.comparator)}function cv(){return new je(re.comparator)}const rO={asc:"ASCENDING",desc:"DESCENDING"},iO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sO={and:"AND",or:"OR"};class oO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qf(t,e){return t.useProto3Json||_h(e)?e:{value:e}}function Uc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function aO(t,e){return Uc(t,e.toTimestamp())}function ir(t){return Re(!!t,49232),le.fromTimestamp(function(n){const r=Ai(n);return new Ve(r.seconds,r.nanos)}(t))}function Om(t,e){return Yf(t,e).canonicalString()}function Yf(t,e){const n=function(i){return new Le(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function dI(t){const e=Le.fromString(t);return Re(yI(e),10190,{key:e.toString()}),e}function Jf(t,e){return Om(t.databaseId,e.path)}function Cd(t,e){const n=dI(e);if(n.get(1)!==t.databaseId.projectId)throw new X(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(pI(n))}function fI(t,e){return Om(t.databaseId,e)}function lO(t){const e=dI(t);return e.length===4?Le.emptyPath():pI(e)}function Xf(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pI(t){return Re(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function hv(t,e,n){return{name:Jf(t,e),fields:n.value.mapValue.fields}}function uO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:oe(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Re(d===void 0||typeof d=="string",58123),Ct.fromBase64String(d||"")):(Re(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ct.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?j.UNKNOWN:lI(c.code);return new X(d,c.message||"")}(o);n=new cI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cd(t,r.document.name),s=ir(r.document.updateTime),o=r.document.createTime?ir(r.document.createTime):le.min(),l=new Jt({mapValue:{fields:r.document.fields}}),u=Lt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Ku(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Cd(t,r.document),s=r.readTime?ir(r.readTime):le.min(),o=Lt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ku([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Cd(t,r.document),s=r.removedTargetIds||[];n=new Ku([],s,i,null)}else{if(!("filter"in e))return oe(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Xb(i,s),l=r.targetId;n=new uI(l,o)}}return n}function cO(t,e){let n;if(e instanceof Dl)n={update:hv(t,e.key,e.value)};else if(e instanceof Dm)n={delete:Jf(t,e.key)};else if(e instanceof zi)n={update:hv(t,e.key,e.data),updateMask:vO(e.fieldMask)};else{if(!(e instanceof Qb))return oe(16599,{dt:e.type});n={verify:Jf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Vc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof pl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ml)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Mc)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw oe(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:aO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:oe(27497)}(t,e.precondition)),n}function hO(t,e){return t&&t.length>0?(Re(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?ir(i.updateTime):ir(s);return o.isEqual(le.min())&&(o=ir(s)),new qb(o,i.transformResults||[])}(n,e))):[]}function dO(t,e){return{documents:[fI(t,e.path)]}}function fO(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=fI(t,i);const s=function(c){if(c.length!==0)return gI(ar.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ws(m.field),direction:gO(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Qf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function pO(t){let e=lO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Re(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=mI(f);return m instanceof ar&&q0(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(A){return new Lc(qs(A.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,_h(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,E=f.values||[];return new Oc(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,E=f.values||[];return new Oc(E,m)}(n.endAt)),Db(e,i,o,s,l,"F",u,c)}function mO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=qs(n.unaryFilter.field);return ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=qs(n.unaryFilter.field);return ht.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=qs(n.unaryFilter.field);return ht.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=qs(n.unaryFilter.field);return ht.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return oe(61313);default:return oe(60726)}}(t):t.fieldFilter!==void 0?function(n){return ht.create(qs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return oe(58110);default:return oe(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ar.create(n.compositeFilter.filters.map(r=>mI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return oe(1026)}}(n.compositeFilter.op))}(t):oe(30097,{filter:t})}function gO(t){return rO[t]}function yO(t){return iO[t]}function _O(t){return sO[t]}function Ws(t){return{fieldPath:t.canonicalString()}}function qs(t){return Rt.fromServerFormat(t.fieldPath)}function gI(t){return t instanceof ht?function(n){if(n.op==="=="){if(X_(n.value))return{unaryFilter:{field:Ws(n.field),op:"IS_NAN"}};if(J_(n.value))return{unaryFilter:{field:Ws(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(X_(n.value))return{unaryFilter:{field:Ws(n.field),op:"IS_NOT_NAN"}};if(J_(n.value))return{unaryFilter:{field:Ws(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ws(n.field),op:yO(n.op),value:n.value}}}(t):t instanceof ar?function(n){const r=n.getFilters().map(i=>gI(i));return r.length===1?r[0]:{compositeFilter:{op:_O(n.op),filters:r}}}(t):oe(54877,{filter:t})}function vO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function _I(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n,r,i,s=le.min(),o=le.min(),l=Ct.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e){this.yt=e}}function wO(t){const e=pO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(){this.bn=new IO}addToCollectionParentIndex(e,n){return this.bn.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Ri.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Ri.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class IO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new pt(Le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pt(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vI=41943040;class Gt{static withCacheSize(e){return new Gt(e,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt.DEFAULT_COLLECTION_PERCENTILE=10,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gt.DEFAULT=new Gt(vI,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gt.DISABLED=new Gt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ki(0)}static ar(){return new ki(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv="LruGarbageCollector",SO=1048576;function pv([t,e],[n,r]){const i=fe(t,n);return i===0?fe(e,r):i}class RO{constructor(e){this.Pr=e,this.buffer=new pt(pv),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();pv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class AO{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){K(fv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){jo(n)?K(fv,"Ignoring IndexedDB error during garbage collection: ",n):await Fo(n)}await this.Ar(3e5)})}}class PO{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return U.resolve(yh.ce);const r=new RO(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(dv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),dv):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),$s()<=ve.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function CO(t,e){return new PO(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(){this.changes=new Ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ja(r.mutation,i,ln.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=pe()){const i=as();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Sa();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=as();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,pe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Vr();const o=Fa(),l=function(){return Fa()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof zi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ja(d.mutation,c,d.mutation.getFieldMask(),Ve.now())):o.set(c.key,ln.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new NO(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Fa();let i=new je((o,l)=>o-l),s=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||ln.empty();d=l.applyToLocalView(c,d),r.set(u,d);const f=(i.get(l.batchId)||pe()).add(u);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,f=eI();d.forEach(m=>{if(!s.has(m)){const E=oI(n.get(m),r.get(m));E!==null&&f.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return xb(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(as());let l=cl,u=s;return o.next(c=>U.forEach(c,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,pe())).next(d=>({batchId:l,changes:Z0(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let i=Sa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Sa();return this.indexManager.getCollectionParents(e,s).next(l=>U.forEach(l,u=>{const c=function(f,m){return new Eh(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Lt.newInvalidDocument(d)))});let l=Sa();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ja(d.mutation,c,ln.empty(),Ve.now()),Th(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return U.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ir(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:wO(i.bundledQuery),readTime:ir(i.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(){this.overlays=new je(re.comparator),this.Lr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=as();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=as(),s=n.length+1,o=new re(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new je((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=as(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=as(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return U.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Jb(n,r));let s=this.Lr.get(n);s===void 0&&(s=pe(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(){this.sessionToken=Ct.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(){this.kr=new pt(_t.Kr),this.qr=new pt(_t.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new _t(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new _t(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new re(new Le([])),r=new _t(n,e),i=new _t(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new re(new Le([])),r=new _t(n,e),i=new _t(n,e+1);let s=pe();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new _t(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class _t{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return re.comparator(e.key,n.key)||fe(e.Jr,n.Jr)}static Ur(e,n){return fe(e.Jr,n.Jr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new pt(_t.Kr)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Yb(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new _t(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?Sm:this.Yn-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new _t(n,0),i=new _t(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pt(fe);return n.forEach(i=>{const s=new _t(i,0),o=new _t(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),U.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;re.isDocumentKey(s)||(s=s.child(""));const o=new _t(new re(s),0);let l=new pt(fe);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Jr)),!0)},o),U.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Re(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return U.forEach(n.mutations,i=>{const s=new _t(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new _t(n,0),i=this.Hr.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e){this.ti=e,this.docs=function(){return new je(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():Lt.newInvalidDocument(n))}getEntries(e,n){let r=Vr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Lt.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Vr();const o=n.path,l=new re(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||lb(ab(d),r)<=0||(i.has(d.key)||Th(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){oe(9500)}ni(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new MO(this)}getSize(e){return U.resolve(this.size)}}class MO extends kO{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e){this.persistence=e,this.ri=new Ds(n=>Pm(n),Cm),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.ii=0,this.si=new Lm,this.targetCount=0,this.oi=ki._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),U.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ki(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.lr(n),U.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,n){this._i={},this.overlays={},this.ai=new yh(0),this.ui=!1,this.ui=!0,this.ci=new OO,this.referenceDelegate=e(this),this.li=new UO(this),this.indexManager=new TO,this.remoteDocumentCache=function(i){return new VO(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new EO(n),this.Pi=new xO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new LO(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const i=new FO(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return U.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class FO extends cb{constructor(e){super(),this.currentSequenceNumber=e}}class Vm{constructor(e){this.persistence=e,this.Ri=new Lm,this.Ai=null}static Vi(e){return new Vm(e)}get di(){if(this.Ai)return this.Ai;throw oe(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),U.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.di,r=>{const i=re.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,le.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return U.or([()=>U.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Fc{constructor(e,n){this.persistence=e,this.fi=new Ds(r=>fb(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=CO(this,n)}static Vi(e,n){return new Fc(e,n)}Ti(){}Ii(e){return U.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return U.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?U.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,le.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),U.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),U.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Hu(e.data.value)),n}wr(e,n,r){return U.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return U.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=pe(),i=pe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Mm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return h1()?8:hb(Mt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new jO;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?($s()<=ve.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Hs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),U.resolve()):($s()<=ve.DEBUG&&K("QueryEngine","Query:",Hs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?($s()<=ve.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Hs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rr(n))):U.resolve())}gs(e,n){if(nv(n))return U.resolve(null);let r=rr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Gf(n,null,"F"),r=rr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=pe(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,Gf(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return nv(n)||i.isEqual(le.min())?U.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?U.resolve(null):($s()<=ve.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Hs(n)),this.Ds(e,o,n,ob(i,cl)).next(l=>l))})}Ss(e,n){let r=new pt(J0(e));return n.forEach((i,s)=>{Th(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return $s()<=ve.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Hs(n)),this.fs.getDocumentsMatchingQuery(e,n,Ri.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um="LocalStore",BO=3e8;class $O{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new je(fe),this.Fs=new Ds(s=>Pm(s),Cm),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DO(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function HO(t,e,n,r){return new $O(t,e,n,r)}async function wI(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=pe();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function WO(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const f=c.batch,m=f.keys();let E=U.resolve();return m.forEach(A=>{E=E.next(()=>d.getEntry(u,A)).next(k=>{const D=c.docVersions.get(A);Re(D!==null,48541),k.version.compareTo(D)<0&&(f.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=pe();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function TI(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function qO(t,e){const n=ce(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;l.push(n.li.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.li.addMatchingKeys(s,d.addedDocuments,f)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?E=E.withResumeToken(Ct.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(f,E),function(k,D,I){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=BO?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,E,d)&&l.push(n.li.updateTargetData(s,E))});let u=Vr(),c=pe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(KO(s,o,e.documentUpdates).next(d=>{u=d.Bs,c=d.Ls})),!r.isEqual(le.min())){const d=n.li.getLastRemoteSnapshotVersion(s).next(f=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return U.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function KO(t,e,n){let r=pe(),i=pe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Vr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(le.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):K(Um,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function GO(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Sm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function QO(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new wr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Zf(t,e,n){const r=ce(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!jo(o))throw o;K(Um,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function mv(t,e,n){const r=ce(t);let i=le.min(),s=pe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=ce(u),m=f.Fs.get(d);return m!==void 0?U.resolve(f.vs.get(m)):f.li.getTargetData(c,d)}(r,o,rr(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:le.min(),n?s:pe())).next(l=>(YO(r,Lb(e),l),{documents:l,ks:s})))}function YO(t,e,n){let r=t.Ms.get(e)||le.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class gv{constructor(){this.activeTargetIds=zb()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JO{constructor(){this.vo=new gv,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new gv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv="ConnectivityMonitor";class _v{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){K(yv,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){K(yv,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tu=null;function ep(){return Tu===null?Tu=function(){return 268435456+Math.round(2147483648*Math.random())}():Tu++,"0x"+Tu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="RestConnection",ZO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class eL{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===xc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=ep(),l=this.Qo(e,n.toUriEncodedString());K(kd,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),d=ks(c);return this.zo(e,l,u,r,d).then(f=>(K(kd,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Ss(kd,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Uo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=ZO[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection",fa=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class mo extends eL{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!mo.c_){const e=C0();fa(e,P0.STAT_EVENT,n=>{n.stat===Bf.PROXY?K(xt,"STAT_EVENT: detected buffering proxy"):n.stat===Bf.NOPROXY&&K(xt,"STAT_EVENT: detected no buffering proxy")}),mo.c_=!0}}zo(e,n,r,i,s){const o=ep();return new Promise((l,u)=>{const c=new R0;c.setWithCredentials(!0),c.listenOnce(A0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case $u.NO_ERROR:const f=c.getResponseJson();K(xt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case $u.TIMEOUT:K(xt,`RPC '${e}' ${o} timed out`),u(new X(j.DEADLINE_EXCEEDED,"Request time out"));break;case $u.HTTP_ERROR:const m=c.getStatus();if(K(xt,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let E=c.getResponseJson();Array.isArray(E)&&(E=E[0]);const A=E==null?void 0:E.error;if(A&&A.status&&A.message){const k=function(I){const v=I.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(v)>=0?v:j.UNKNOWN}(A.status);u(new X(k,A.message))}else u(new X(j.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new X(j.UNAVAILABLE,"Connection failed."));break;default:oe(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{K(xt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);K(xt,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=ep(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");K(xt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);this.I_(d);let f=!1,m=!1;const E=new tL({Jo:A=>{m?K(xt,`Not sending because RPC '${e}' stream ${i} is closed:`,A):(f||(K(xt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),K(xt,`RPC '${e}' stream ${i} sending:`,A),d.send(A))},Ho:()=>d.close()});return fa(d,Ia.EventType.OPEN,()=>{m||(K(xt,`RPC '${e}' stream ${i} transport opened.`),E.i_())}),fa(d,Ia.EventType.CLOSE,()=>{m||(m=!0,K(xt,`RPC '${e}' stream ${i} transport closed`),E.o_(),this.E_(d))}),fa(d,Ia.EventType.ERROR,A=>{m||(m=!0,Ss(xt,`RPC '${e}' stream ${i} transport errored. Name:`,A.name,"Message:",A.message),E.o_(new X(j.UNAVAILABLE,"The operation could not be completed")))}),fa(d,Ia.EventType.MESSAGE,A=>{var k;if(!m){const D=A.data[0];Re(!!D,16349);const I=D,v=(I==null?void 0:I.error)||((k=I[0])==null?void 0:k.error);if(v){K(xt,`RPC '${e}' stream ${i} received error:`,v);const S=v.status;let L=function(g){const y=Ze[g];if(y!==void 0)return lI(y)}(S),F=v.message;S==="NOT_FOUND"&&F.includes("database")&&F.includes("does not exist")&&F.includes(this.databaseId.database)&&Ss(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),L===void 0&&(L=j.INTERNAL,F="Unknown error status: "+S+" with message "+v.message),m=!0,E.o_(new X(L,F)),d.close()}else K(xt,`RPC '${e}' stream ${i} received:`,D),E.__(D)}}),mo.u_(),setTimeout(()=>{E.s_()},0),E}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return k0()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nL(t){return new mo(t)}function Nd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t){return new oO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mo.c_=!1;class II{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv="PersistentStream";class SI{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new II(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Or(n.toString()),Or("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new X(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return K(vv,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(K(vv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rL extends SI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=uO(this.serializer,e),r=function(s){if(!("targetChange"in s))return le.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?ir(o.readTime):le.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Xf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Kf(u)?{documents:dO(s,u)}:{query:fO(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=hI(s,o.resumeToken);const c=Qf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(le.min())>0){l.readTime=Uc(s,o.snapshotVersion.toTimestamp());const c=Qf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=mO(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Xf(this.serializer),n.removeTarget=e,this.K_(n)}}class iL extends SI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=hO(e.writeResults,e.commitTime),r=ir(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Xf(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>cO(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{}class oL extends sL{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new X(j.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Yf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new X(j.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Yf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(j.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function aL(t,e,n,r){return new oL(t,e,n,r)}class lL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Or(n),this.aa=!1):K("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="RemoteStore";class uL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new ki(1e3),this.Va=new ki(1001),this.da=new Set,this.ma=[],this.fa=s,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{xs(this)&&(K(lr,"Restarting streams for network reachability change."),await async function(u){const c=ce(u);c.da.add(4),await Ol(c),c.ga.set("Unknown"),c.da.delete(4),await Ah(c)}(this))})}),this.ga=new lL(r,i)}}async function Ah(t){if(xs(t))for(const e of t.ma)await e(!0)}async function Ol(t){for(const e of t.ma)await e(!1)}function tp(t,e){return t.Ea.get(e)||void 0}function RI(t,e){const n=ce(t),r=tp(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const i=function(l,u){const c=tp(l,u);c!==void 0&&l.Ra.delete(c);const d=function(m,E){return E%2!=0?m.Va.next():m.Aa.next()}(l,u);return l.Ea.set(u,d),l.Ra.set(d,u),d}(n,e.targetId);K(lr,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new wr(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(i,s),Bm(n)?zm(n):zo(n).O_()&&jm(n,s)}function Fm(t,e){const n=ce(t),r=zo(n),i=tp(n,e);K(lr,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),n.Ia.delete(i),n.Ea.delete(e),n.Ra.delete(i),r.O_()&&AI(n,i),n.Ia.size===0&&(r.O_()?r.L_():xs(n)&&n.ga.set("Unknown"))}function jm(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void K(lr,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}zo(t).Z_(e)}function AI(t,e){t.pa.$e(e),zo(t).X_(e)}function zm(t){t.pa=new nO({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):pe()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),zo(t).start(),t.ga.ua()}function Bm(t){return xs(t)&&!zo(t).x_()&&t.Ia.size>0}function xs(t){return ce(t).da.size===0}function PI(t){t.pa=void 0}async function cL(t){t.ga.set("Online")}async function hL(t){t.Ia.forEach((e,n)=>{jm(t,e)})}async function dL(t,e){PI(t),Bm(t)?(t.ga.ha(e),zm(t)):t.ga.set("Unknown")}async function fL(t,e,n){if(t.ga.set("Online"),e instanceof cI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds){if(i.Ia.has(l)){const u=i.Ra.get(l);u!==void 0&&(await i.remoteSyncer.rejectListen(u,o),i.Ea.delete(u),i.Ra.delete(l)),i.Ia.delete(l)}i.pa.removeTarget(l)}}(t,e)}catch(r){K(lr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jc(t,r)}else if(e instanceof Ku?t.pa.Xe(e):e instanceof uI?t.pa.st(e):t.pa.tt(e),!n.isEqual(le.min()))try{const r=await TI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.pa.Tt(o);l.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.Ia.get(d);f&&s.Ia.set(d,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,d)=>{const f=s.Ia.get(c);if(!f)return;s.Ia.set(c,f.withResumeToken(Ct.EMPTY_BYTE_STRING,f.snapshotVersion)),AI(s,c);const m=new wr(f.target,c,d,f.sequenceNumber);jm(s,m)});const u=function(d,f){const m=new Map;f.targetChanges.forEach((A,k)=>{const D=d.Ra.get(k);D!==void 0&&m.set(D,A)});let E=new je(fe);return f.targetMismatches.forEach((A,k)=>{const D=d.Ra.get(A);D!==void 0&&(E=E.insert(D,k))}),new xl(f.snapshotVersion,m,E,f.documentUpdates,f.resolvedLimboDocuments)}(s,l);return s.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){K(lr,"Failed to raise snapshot:",r),await jc(t,r)}}async function jc(t,e,n){if(!jo(e))throw e;t.da.add(1),await Ol(t),t.ga.set("Offline"),n||(n=()=>TI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K(lr,"Retrying IndexedDB access"),await n(),t.da.delete(1),await Ah(t)})}function CI(t,e){return e().catch(n=>jc(t,n,e))}async function Ph(t){const e=ce(t),n=Ni(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Sm;for(;pL(e);)try{const i=await GO(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,mL(e,i)}catch(i){await jc(e,i)}kI(e)&&NI(e)}function pL(t){return xs(t)&&t.Ta.length<10}function mL(t,e){t.Ta.push(e);const n=Ni(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function kI(t){return xs(t)&&!Ni(t).x_()&&t.Ta.length>0}function NI(t){Ni(t).start()}async function gL(t){Ni(t).ra()}async function yL(t){const e=Ni(t);for(const n of t.Ta)e.ea(n.mutations)}async function _L(t,e,n){const r=t.Ta.shift(),i=xm.from(r,e,n);await CI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ph(t)}async function vL(t,e){e&&Ni(t).Y_&&await async function(r,i){if(function(o){return Zb(o)&&o!==j.ABORTED}(i.code)){const s=r.Ta.shift();Ni(r).B_(),await CI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ph(r)}}(t,e),kI(t)&&NI(t)}async function Ev(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),K(lr,"RemoteStore received new credentials");const r=xs(n);n.da.add(3),await Ol(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await Ah(n)}async function EL(t,e){const n=ce(t);e?(n.da.delete(2),await Ah(n)):e||(n.da.add(2),await Ol(n),n.ga.set("Unknown"))}function zo(t){return t.ya||(t.ya=function(n,r,i){const s=ce(n);return s.sa(),new rL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:cL.bind(null,t),Yo:hL.bind(null,t),t_:dL.bind(null,t),H_:fL.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),Bm(t)?zm(t):t.ga.set("Unknown")):(await t.ya.stop(),PI(t))})),t.ya}function Ni(t){return t.wa||(t.wa=function(n,r,i){const s=ce(n);return s.sa(),new iL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:gL.bind(null,t),t_:vL.bind(null,t),ta:yL.bind(null,t),na:_L.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await Ph(t)):(await t.wa.stop(),t.Ta.length>0&&(K(lr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new $m(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hm(t,e){if(Or("AsyncQueue",`${e}: ${t}`),jo(t))return new X(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{static emptySet(e){return new go(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Sa(),this.sortedSet=new je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof go)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new go;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(){this.Sa=new je(re.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):oe(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class xo{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new xo(e,n,go.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class TL{constructor(){this.queries=Tv(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const i=ce(n),s=i.queries;i.queries=Tv(),s.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new X(j.ABORTED,"Firestore shutting down"))}}function Tv(){return new Ds(t=>Y0(t),wh)}async function DI(t,e){const n=ce(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Fa()&&e.Ma()&&(r=2):(s=new wL,r=e.Ma()?0:1);try{switch(r){case 0:s.Ca=await n.onListen(i,!0);break;case 1:s.Ca=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Hm(o,`Initialization of query '${Hs(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.va.push(e),e.Oa(n.onlineState),s.Ca&&e.Na(s.Ca)&&Wm(n)}async function xI(t,e){const n=ce(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.va.indexOf(e);o>=0&&(s.va.splice(o,1),s.va.length===0?i=e.Ma()?0:1:!s.Fa()&&e.Ma()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function IL(t,e){const n=ce(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.va)l.Na(i)&&(r=!0);o.Ca=i}}r&&Wm(n)}function SL(t,e,n){const r=ce(t),i=r.queries.get(e);if(i)for(const s of i.va)s.onError(n);r.queries.delete(e)}function Wm(t){t.xa.forEach(e=>{e.next()})}var np,Iv;(Iv=np||(np={})).Ba="default",Iv.Cache="cache";class bI{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new xo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==np.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e){this.key=e}}class LI{constructor(e){this.key=e}}class RL{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=pe(),this.mutatedKeys=pe(),this.iu=J0(e),this.su=new go(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new wv,i=n?n.su:this.su;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),E=Th(this.query,f)?f:null,A=!!m&&this.mutatedKeys.has(m.key),k=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let D=!1;m&&E?m.data.isEqual(E.data)?A!==k&&(r.track({type:3,doc:E}),D=!0):this.uu(m,E)||(r.track({type:2,doc:E}),D=!0,(u&&this.iu(E,u)>0||c&&this.iu(E,c)<0)&&(l=!0)):!m&&E?(r.track({type:0,doc:E}),D=!0):m&&!E&&(r.track({type:1,doc:m}),D=!0,(u||c)&&(l=!0)),D&&(E?(o=o.add(E),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{su:o,au:r,bs:l,mutatedKeys:s}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((d,f)=>function(E,A){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe(20277,{Vt:D})}};return k(E)-k(A)}(d.type,f.type)||this.iu(d.doc,f.doc)),this.cu(r),i=i??!1;const l=n&&!i?this.lu():[],u=this.ru.size===0&&this.current&&!i?1:0,c=u!==this.nu;return this.nu=u,o.length!==0||c?{snapshot:new xo(this.query,e.su,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new wv,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=pe(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new LI(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new OI(r))}),n}Tu(e){this.tu=e.ks,this.ru=pe();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return xo.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const qm="SyncEngine";class AL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class PL{constructor(e){this.key=e,this.Eu=!1}}class CL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new Ds(l=>Y0(l),wh),this.Vu=new Map,this.du=new Set,this.mu=new je(re.comparator),this.fu=new Map,this.gu=new Lm,this.pu={},this.yu=new Map,this.wu=ki.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function kL(t,e,n=!0){const r=zI(t);let i;const s=r.Au.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Iu()):i=await VI(r,e,n,!0),i}async function NL(t,e){const n=zI(t);await VI(n,e,!0,!1)}async function VI(t,e,n,r){const i=await QO(t.localStore,rr(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await DL(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&RI(t.remoteStore,i),l}async function DL(t,e,n,r,i){t.bu=(f,m,E)=>async function(k,D,I,v){let S=D.view._u(I);S.bs&&(S=await mv(k.localStore,D.query,!1).then(({documents:g})=>D.view._u(g,S)));const L=v&&v.targetChanges.get(D.targetId),F=v&&v.targetMismatches.get(D.targetId)!=null,$=D.view.applyChanges(S,k.isPrimaryClient,L,F);return Rv(k,D.targetId,$.hu),$.snapshot}(t,f,m,E);const s=await mv(t.localStore,e,!0),o=new RL(e,s.ks),l=o._u(s.documents),u=bl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Rv(t,n,c.hu);const d=new AL(e,n,o);return t.Au.set(e,d),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),c.snapshot}async function xL(t,e,n){const r=ce(t),i=r.Au.get(e),s=r.Vu.get(i.targetId);if(s.length>1)return r.Vu.set(i.targetId,s.filter(o=>!wh(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Zf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Fm(r.remoteStore,i.targetId),rp(r,i.targetId)}).catch(Fo)):(rp(r,i.targetId),await Zf(r.localStore,i.targetId,!0))}async function bL(t,e){const n=ce(t),r=n.Au.get(e),i=n.Vu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Fm(n.remoteStore,r.targetId))}async function OL(t,e,n){const r=zL(t);try{const i=await function(o,l){const u=ce(o),c=Ve.now(),d=l.reduce((E,A)=>E.add(A.key),pe());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let A=Vr(),k=pe();return u.xs.getEntries(E,d).next(D=>{A=D,A.forEach((I,v)=>{v.isValidDocument()||(k=k.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,A)).next(D=>{f=D;const I=[];for(const v of l){const S=Gb(v,f.get(v.key).overlayedDocument);S!=null&&I.push(new zi(v.key,S,$0(S.value.mapValue),Mn.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,I,l)}).next(D=>{m=D;const I=D.applyToLocalDocumentSet(f,k);return u.documentOverlayCache.saveOverlays(E,D.batchId,I)})}).then(()=>({batchId:m.batchId,changes:Z0(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.pu[o.currentUser.toKey()];c||(c=new je(fe)),c=c.insert(l,u),o.pu[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ll(r,i.changes),await Ph(r.remoteStore)}catch(i){const s=Hm(i,"Failed to persist write");n.reject(s)}}async function MI(t,e){const n=ce(t);try{const r=await qO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fu.get(s);o&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.Eu=!0:i.modifiedDocuments.size>0?Re(o.Eu,14607):i.removedDocuments.size>0&&(Re(o.Eu,42227),o.Eu=!1))}),await Ll(n,r,e)}catch(r){await Fo(r)}}function Sv(t,e,n){const r=ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Au.forEach((s,o)=>{const l=o.view.Oa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ce(o);u.onlineState=l;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.va)m.Oa(l)&&(c=!0)}),c&&Wm(u)}(r.eventManager,e),i.length&&r.Ru.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LL(t,e,n){const r=ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fu.get(e),s=i&&i.key;if(s){let o=new je(re.comparator);o=o.insert(s,Lt.newNoDocument(s,le.min()));const l=pe().add(s),u=new xl(le.min(),new Map,new je(fe),o,l);await MI(r,u),r.mu=r.mu.remove(s),r.fu.delete(e),Km(r)}else await Zf(r.localStore,e,!1).then(()=>rp(r,e,n)).catch(Fo)}async function VL(t,e){const n=ce(t),r=e.batch.batchId;try{const i=await WO(n.localStore,e);FI(n,r,null),UI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ll(n,i)}catch(i){await Fo(i)}}async function ML(t,e,n){const r=ce(t);try{const i=await function(o,l){const u=ce(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(f=>(Re(f!==null,37113),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);FI(r,e,n),UI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ll(r,i)}catch(i){await Fo(i)}}function UI(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function FI(t,e,n){const r=ce(t);let i=r.pu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pu[r.currentUser.toKey()]=i}}function rp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||jI(t,r)})}function jI(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(Fm(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),Km(t))}function Rv(t,e,n){for(const r of n)r instanceof OI?(t.gu.addReference(r.key,e),UL(t,r)):r instanceof LI?(K(qm,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||jI(t,r.key)):oe(19791,{Cu:r})}function UL(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(K(qm,"New document in limbo: "+n),t.du.add(r),Km(t))}function Km(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new re(Le.fromString(e)),r=t.wu.next();t.fu.set(r,new PL(n)),t.mu=t.mu.insert(n,r),RI(t.remoteStore,new wr(rr(km(n.path)),r,"TargetPurposeLimboResolution",yh.ce))}}async function Ll(t,e,n){const r=ce(t),i=[],s=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Mm.Es(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ru.H_(i),await async function(u,c){const d=ce(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>U.forEach(c,m=>U.forEach(m.Ts,E=>d.persistence.referenceDelegate.addReference(f,m.targetId,E)).next(()=>U.forEach(m.Is,E=>d.persistence.referenceDelegate.removeReference(f,m.targetId,E)))))}catch(f){if(!jo(f))throw f;K(Um,"Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const E=d.vs.get(m),A=E.snapshotVersion,k=E.withLastLimboFreeSnapshotVersion(A);d.vs=d.vs.insert(m,k)}}}(r.localStore,s))}async function FL(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){K(qm,"User change. New user:",e.toKey());const r=await wI(n.localStore,e);n.currentUser=e,function(s,o){s.yu.forEach(l=>{l.forEach(u=>{u.reject(new X(j.CANCELLED,o))})}),s.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ll(n,r.Ns)}}function jL(t,e){const n=ce(t),r=n.fu.get(e);if(r&&r.Eu)return pe().add(r.key);{let i=pe();const s=n.Vu.get(e);if(!s)return i;for(const o of s){const l=n.Au.get(o);i=i.unionWith(l.view.ou)}return i}}function zI(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=MI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LL.bind(null,e),e.Ru.H_=IL.bind(null,e.eventManager),e.Ru.Du=SL.bind(null,e.eventManager),e}function zL(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ML.bind(null,e),e}class zc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Rh(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return HO(this.persistence,new zO,e.initialUser,this.serializer)}xu(e){return new EI(Vm.Vi,this.serializer)}Mu(e){return new JO}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zc.provider={build:()=>new zc};class BL extends zc{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){Re(this.persistence.referenceDelegate instanceof Fc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new AO(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?Gt.withCacheSize(this.cacheSizeBytes):Gt.DEFAULT;return new EI(r=>Fc.Vi(r,n),this.serializer)}}class ip{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FL.bind(null,this.syncEngine),await EL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new TL}()}createDatastore(e){const n=Rh(e.databaseInfo.databaseId),r=nL(e.databaseInfo);return aL(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new uL(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Sv(this.syncEngine,n,0),function(){return _v.v()?new _v:new XO}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const f=new CL(i,s,o,l,u,c);return d&&(f.Su=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ce(i);K(lr,"RemoteStore shutting down."),s.da.add(5),await Ol(s),s.fa.shutdown(),s.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}ip.provider={build:()=>new ip};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Or("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di="FirestoreClient";class $L{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=bt.UNAUTHENTICATED,this.clientId=Tm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{K(Di,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K(Di,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Hm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Dd(t,e){t.asyncQueue.verifyOperationInProgress(),K(Di,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await wI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Av(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HL(t);K(Di,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ev(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ev(e.remoteStore,i)),t._onlineComponents=e}async function HL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K(Di,"Using user provided OfflineComponentProvider");try{await Dd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ss("Error using user provided cache. Falling back to memory cache: "+n),await Dd(t,new zc)}}else K(Di,"Using default OfflineComponentProvider"),await Dd(t,new BL(void 0));return t._offlineComponents}async function $I(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K(Di,"Using user provided OnlineComponentProvider"),await Av(t,t._uninitializedComponentsProvider._online)):(K(Di,"Using default OnlineComponentProvider"),await Av(t,new ip))),t._onlineComponents}function WL(t){return $I(t).then(e=>e.syncEngine)}async function HI(t){const e=await $I(t),n=e.eventManager;return n.onListen=kL.bind(null,e.syncEngine),n.onUnlisten=xL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=NL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=bL.bind(null,e.syncEngine),n}function qL(t,e,n={}){const r=new Rr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new BI({next:m=>{d.Ku(),o.enqueueAndForget(()=>xI(s,f));const E=m.docs.has(l);!E&&m.fromCache?c.reject(new X(j.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&u&&u.source==="server"?c.reject(new X(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new bI(km(l.path),d,{includeMetadataChanges:!0,Wa:!0});return DI(s,f)}(await HI(t),t.asyncQueue,e,n,r)),r.promise}function KL(t,e,n={}){const r=new Rr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new BI({next:m=>{d.Ku(),o.enqueueAndForget(()=>xI(s,f)),m.fromCache&&u.source==="server"?c.reject(new X(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new bI(l,d,{includeMetadataChanges:!0,Wa:!0});return DI(s,f)}(await HI(t),t.asyncQueue,e,n,r)),r.promise}function GL(t,e){const n=new Rr;return t.asyncQueue.enqueueAndForget(async()=>OL(await WL(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QL="ComponentProvider",Pv=new Map;function YL(t,e,n,r,i){return new gb(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,WI(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="firestore.googleapis.com",Cv=!0;class kv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new X(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qI,this.ssl=Cv}else this.host=e.host,this.ssl=e.ssl??Cv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<SO)throw new X(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=WI(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new X(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new X(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new X(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ch{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Qx;switch(r.type){case"firstParty":return new Zx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Pv.get(n);r&&(K(QL,"Removing Datastore"),Pv.delete(n),r.terminate())}(this),Promise.resolve()}}function JL(t,e,n,r={}){var c;t=Lr(t,Ch);const i=ks(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&lm(`https://${l}`),s.host!==qI&&s.host!==l&&Ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!vs(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=bt.MOCK_USER;else{d=FT(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new X(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new bt(m)}t._authCredentials=new Yx(new D0(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kh(this.firestore,e,this._query)}}class ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Nl(n,ft._jsonSchema))return new ft(e,r||null,new re(Le.fromString(n.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:nt("string",ft._jsonSchemaVersion),referencePath:nt("string")};class wi extends kh{constructor(e,n,r){super(e,n,km(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new re(e))}withConverter(e){return new wi(this.firestore,e,this._path)}}function J2(t,e,...n){if(t=Je(t),x0("collection","path",e),t instanceof Ch){const r=Le.fromString(e,...n);return $_(r),new wi(t,null,r)}{if(!(t instanceof ft||t instanceof wi))throw new X(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return $_(r),new wi(t.firestore,null,r)}}function XL(t,e,...n){if(t=Je(t),arguments.length===1&&(e=Tm.newId()),x0("doc","path",e),t instanceof Ch){const r=Le.fromString(e,...n);return B_(r),new ft(t,null,new re(r))}{if(!(t instanceof ft||t instanceof wi))throw new X(j.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return B_(r),new ft(t.firestore,t instanceof wi?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="AsyncQueue";class Dv{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new II(this,"async_queue_retry"),this.lc=()=>{const r=Nd();r&&K(Nv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=Nd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=Nd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new Rr;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!jo(e))throw e;K(Nv,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,Or("INTERNAL UNHANDLED ERROR: ",xv(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const i=$m.createAndSchedule(this,e,n,r,s=>this.Ec(s));return this.oc.push(i),i}Pc(){this._c&&oe(47125,{Rc:xv(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function xv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Bo extends Ch{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Dv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Dv(e),this._firestoreClient=void 0,await e}}}function ZL(t,e){const n=typeof t=="object"?t:fh(),r=typeof t=="string"?t:xc,i=dh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=VT("firestore");s&&JL(i,...s)}return i}function Gm(t){if(t._terminated)throw new X(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||eV(t),t._firestoreClient}function eV(t){var r,i,s,o;const e=t._freezeSettings(),n=YL(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new $L(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yn(Ct.fromBase64String(e))}catch(n){throw new X(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new yn(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:yn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Nl(e,yn._jsonSchema))return yn.fromBase64String(e.bytes)}}yn._jsonSchemaVersion="firestore/bytes/1.0",yn._jsonSchema={type:nt("string",yn._jsonSchemaVersion),bytes:nt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sr._jsonSchemaVersion}}static fromJSON(e){if(Nl(e,sr._jsonSchema))return new sr(e.latitude,e.longitude)}}sr._jsonSchemaVersion="firestore/geoPoint/1.0",sr._jsonSchema={type:nt("string",sr._jsonSchemaVersion),latitude:nt("number"),longitude:nt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Un._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Nl(e,Un._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Un(e.vectorValues);throw new X(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Un._jsonSchemaVersion="firestore/vectorValue/1.0",Un._jsonSchema={type:nt("string",Un._jsonSchemaVersion),vectorValues:nt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tV=/^__.*__$/;class nV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Dl(e,this.data,n,this.fieldTransforms)}}class KI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function GI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe(40011,{dataSource:t})}}class Jm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.fc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Jm({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Bc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(GI(this.dataSource)&&tV.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class rV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Rh(e)}V(e,n,r,i=!1){return new Jm({dataSource:e,methodName:n,targetDoc:r,path:Rt.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function QI(t){const e=t._freezeSettings(),n=Rh(t._databaseId);return new rV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function iV(t,e,n,r,i,s={}){const o=t.V(s.merge||s.mergeFields?2:0,e,n,i);Xm("Data must be an object, but it was:",o,r);const l=YI(r,o);let u,c;if(s.merge)u=new ln(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=gl(e,f,n);if(!o.contains(m))throw new X(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);ZI(d,m)||d.push(m)}u=new ln(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new nV(new Jt(l),u,c)}class Nh extends Ym{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Nh}}function sV(t,e,n,r){const i=t.V(1,e,n);Xm("Data must be an object, but it was:",i,r);const s=[],o=Jt.empty();ji(r,(u,c)=>{const d=XI(e,u,n);c=Je(c);const f=i.Sc(d);if(c instanceof Nh)s.push(d);else{const m=Dh(c,f);m!=null&&(s.push(d),o.set(d,m))}});const l=new ln(s);return new KI(o,l,i.fieldTransforms)}function oV(t,e,n,r,i,s){const o=t.V(1,e,n),l=[gl(e,r,n)],u=[i];if(s.length%2!=0)throw new X(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(gl(e,s[m])),u.push(s[m+1]);const c=[],d=Jt.empty();for(let m=l.length-1;m>=0;--m)if(!ZI(c,l[m])){const E=l[m];let A=u[m];A=Je(A);const k=o.Sc(E);if(A instanceof Nh)c.push(E);else{const D=Dh(A,k);D!=null&&(c.push(E),d.set(E,D))}}const f=new ln(c);return new KI(d,f,o.fieldTransforms)}function Dh(t,e){if(JI(t=Je(t)))return Xm("Unsupported field value:",e,t),YI(t,e);if(t instanceof Ym)return function(r,i){if(!GI(i.dataSource))throw i.Dc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Dc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Dh(l,i.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Bb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ve.fromDate(r);return{timestampValue:Uc(i.serializer,s)}}if(r instanceof Ve){const s=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Uc(i.serializer,s)}}if(r instanceof sr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof yn)return{bytesValue:hI(i.serializer,r._byteString)};if(r instanceof ft){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Om(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Un)return function(o,l){const u=o instanceof Un?o.toArray():o;return{mapValue:{fields:{[z0]:{stringValue:B0},[bc]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw l.Dc("VectorValues must only contain numeric values.");return Nm(l.serializer,d)})}}}}}}(r,i);if(_I(r))return r._toProto(i.serializer);throw i.Dc(`Unsupported field value: ${Im(r)}`)}(t,e)}function YI(t,e){const n={};return L0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ji(t,(r,i)=>{const s=Dh(i,e.yc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function JI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof sr||t instanceof yn||t instanceof ft||t instanceof Ym||t instanceof Un||_I(t))}function Xm(t,e,n){if(!JI(n)||!b0(n)){const r=Im(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function gl(t,e,n){if((e=Je(e))instanceof Qm)return e._internalPath;if(typeof e=="string")return XI(t,e);throw Bc("Field path arguments must be of type string or ",t,!1,void 0,n)}const aV=new RegExp("[~\\*/\\[\\]]");function XI(t,e,n){if(e.search(aV)>=0)throw Bc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qm(...e.split("."))._internalPath}catch{throw Bc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new X(j.INVALID_ARGUMENT,l+t+u)}function ZI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{convertValue(e,n="none"){switch(Ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw oe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ji(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[bc].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Qe(o.doubleValue));return new Un(n)}convertGeoPoint(e){return new sr(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=vh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(hl(e));default:return null}}convertTimestamp(e){const n=Ai(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Re(yI(r),9688,{name:e});const i=new dl(r.get(1),r.get(3)),s=new re(r.popFirst(5));return i.isEqual(n)||Or(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS extends lV{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}}const bv="@firebase/firestore",Ov="4.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(gl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uV extends tS{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function hV(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Aa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cs extends tS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Gu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=cs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}cs._jsonSchemaVersion="firestore/documentSnapshot/1.0",cs._jsonSchema={type:nt("string",cs._jsonSchemaVersion),bundleSource:nt("string","DocumentSnapshot"),bundleName:nt("string"),bundle:nt("string")};class Gu extends cs{data(e={}){return super.data(e)}}class yo{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Aa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Gu(this._firestore,this._userDataWriter,r.key,r,new Aa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Gu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Aa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Gu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Aa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:dV(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=yo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Tm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function dV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yo._jsonSchemaVersion="firestore/querySnapshot/1.0",yo._jsonSchema={type:nt("string",yo._jsonSchemaVersion),bundleSource:nt("string","QuerySnapshot"),bundleName:nt("string"),bundle:nt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X2(t){t=Lr(t,ft);const e=Lr(t.firestore,Bo),n=Gm(e);return qL(n,t._key).then(r=>fV(e,t,r))}function Z2(t){t=Lr(t,kh);const e=Lr(t.firestore,Bo),n=Gm(e),r=new eS(e);return cV(t._query),KL(n,t._query).then(i=>new yo(e,r,t,i))}function eM(t,e,n,...r){t=Lr(t,ft);const i=Lr(t.firestore,Bo),s=QI(i);let o;return o=typeof(e=Je(e))=="string"||e instanceof Qm?oV(s,"updateDoc",t._key,e,n,r):sV(s,"updateDoc",t._key,e),Zm(i,[o.toMutation(t._key,Mn.exists(!0))])}function tM(t){return Zm(Lr(t.firestore,Bo),[new Dm(t._key,Mn.none())])}function nM(t,e){const n=Lr(t.firestore,Bo),r=XL(t),i=hV(t.converter,e),s=QI(t.firestore);return Zm(n,[iV(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Mn.exists(!1))]).then(()=>r)}function Zm(t,e){const n=Gm(t);return GL(n,e)}function fV(t,e,n){const r=n.docs.get(e._key),i=new eS(t);return new cs(t,i,e._key,r,new Aa(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){Gx(Ns),Es(new Si("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Bo(new Jx(r.getProvider("auth-internal")),new eb(o,r.getProvider("app-check-internal")),yb(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),tr(bv,Ov,e),tr(bv,Ov,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="firebasestorage.googleapis.com",rS="storageBucket",pV=2*60*1e3,mV=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends cr{constructor(e,n,r=0){super(xd(e),`Firebase Storage: ${n} (${xd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ge.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ke||(Ke={}));function xd(t){return"storage/"+t}function eg(){const t="An unknown error occurred, please check the error payload for server response.";return new Ge(Ke.UNKNOWN,t)}function gV(t){return new Ge(Ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function yV(t){return new Ge(Ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _V(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ge(Ke.UNAUTHENTICATED,t)}function vV(){return new Ge(Ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function EV(t){return new Ge(Ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function wV(){return new Ge(Ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function TV(){return new Ge(Ke.CANCELED,"User canceled the upload/download.")}function IV(t){return new Ge(Ke.INVALID_URL,"Invalid URL '"+t+"'.")}function SV(t){return new Ge(Ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function RV(){return new Ge(Ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+rS+"' property when initializing the app?")}function AV(){return new Ge(Ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function PV(){return new Ge(Ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function CV(t){return new Ge(Ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function sp(t){return new Ge(Ke.INVALID_ARGUMENT,t)}function iS(){return new Ge(Ke.APP_DELETED,"The Firebase app was deleted.")}function kV(t){return new Ge(Ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function za(t,e){return new Ge(Ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function pa(t){throw new Ge(Ke.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=un.makeFromUrl(e,n)}catch{return new un(e,"")}if(r.path==="")return r;throw SV(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(L){L.path_=decodeURIComponent(L.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",E=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),A={bucket:1,path:3},k=n===nS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",I=new RegExp(`^https?://${k}/${i}/${D}`,"i"),S=[{regex:l,indices:u,postModify:s},{regex:E,indices:A,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let L=0;L<S.length;L++){const F=S[L],$=F.regex.exec(e);if($){const g=$[F.indices.bucket];let y=$[F.indices.path];y||(y=""),r=new un(g,y),F.postModify(r);break}}if(r==null)throw IV(e);return r}}class NV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DV(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...D){c||(c=!0,e.apply(null,D))}function f(D){i=setTimeout(()=>{i=null,t(E,u())},D)}function m(){s&&clearTimeout(s)}function E(D,...I){if(c){m();return}if(D){m(),d.call(null,D,...I);return}if(u()||o){m(),d.call(null,D,...I);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,f(S)}let A=!1;function k(D){A||(A=!0,m(),!c&&(i!==null?(D||(l=2),clearTimeout(i),f(0)):D||(l=1)))}return f(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function xV(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bV(t){return t!==void 0}function OV(t){return typeof t=="object"&&!Array.isArray(t)}function tg(t){return typeof t=="string"||t instanceof String}function Lv(t){return ng()&&t instanceof Blob}function ng(){return typeof Blob<"u"}function Vv(t,e,n,r){if(r<e)throw sp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw sp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function sS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var hs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(hs||(hs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LV(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(e,n,r,i,s,o,l,u,c,d,f,m=!0,E=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,k)=>{this.resolve_=A,this.reject_=k,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Iu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===hs.NO_ERROR,u=s.getStatus();if(!l||LV(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===hs.ABORT;r(!1,new Iu(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Iu(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());bV(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=eg();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?iS():TV();o(u)}else{const u=wV();o(u)}};this.canceled_?n(!1,new Iu(!1,null,!0)):this.backoffId_=DV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Iu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function MV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function UV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function FV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function jV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function zV(t,e,n,r,i,s,o=!0,l=!1){const u=sS(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return FV(d,e),MV(d,n),UV(d,s),jV(d,r),new VV(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function $V(...t){const e=BV();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ng())return new Blob(t);throw new Ge(Ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function HV(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WV(t){if(typeof atob>"u")throw CV("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class bd{constructor(e,n){this.data=e,this.contentType=n||null}}function qV(t,e){switch(t){case Xn.RAW:return new bd(oS(e));case Xn.BASE64:case Xn.BASE64URL:return new bd(aS(t,e));case Xn.DATA_URL:return new bd(GV(e),QV(e))}throw eg()}function oS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function KV(t){let e;try{e=decodeURIComponent(t)}catch{throw za(Xn.DATA_URL,"Malformed data URL.")}return oS(e)}function aS(t,e){switch(t){case Xn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw za(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Xn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw za(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=WV(e)}catch(i){throw i.message.includes("polyfill")?i:za(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class lS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw za(Xn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=YV(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function GV(t){const e=new lS(t);return e.base64?aS(Xn.BASE64,e.rest):KV(e.rest)}function QV(t){return new lS(t).contentType}function YV(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n){let r=0,i="";Lv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Lv(this.data_)){const r=this.data_,i=HV(r,e,n);return i===null?null:new oi(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new oi(r,!0)}}static getBlob(...e){if(ng()){const n=e.map(r=>r instanceof oi?r.data_:r);return new oi($V.apply(null,n))}else{const n=e.map(o=>tg(o)?qV(Xn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new oi(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(t){let e;try{e=JSON.parse(t)}catch{return null}return OV(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function XV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function cS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZV(t,e){return e}class Ft{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||ZV}}let Su=null;function e2(t){return!tg(t)||t.length<2?t:cS(t)}function hS(){if(Su)return Su;const t=[];t.push(new Ft("bucket")),t.push(new Ft("generation")),t.push(new Ft("metageneration")),t.push(new Ft("name","fullPath",!0));function e(s,o){return e2(o)}const n=new Ft("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ft("size");return i.xform=r,t.push(i),t.push(new Ft("timeCreated")),t.push(new Ft("updated")),t.push(new Ft("md5Hash",null,!0)),t.push(new Ft("cacheControl",null,!0)),t.push(new Ft("contentDisposition",null,!0)),t.push(new Ft("contentEncoding",null,!0)),t.push(new Ft("contentLanguage",null,!0)),t.push(new Ft("contentType",null,!0)),t.push(new Ft("metadata","customMetadata",!0)),Su=t,Su}function t2(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new un(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function n2(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return t2(r,t),r}function dS(t,e,n){const r=uS(e);return r===null?null:n2(t,r,n)}function r2(t,e,n,r){const i=uS(e);if(i===null||!tg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),E=rg(m,n,r),A=sS({alt:"media",token:c});return E+A})[0]}function i2(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class fS{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t){if(!t)throw eg()}function s2(t,e){function n(r,i){const s=dS(t,i,e);return pS(s!==null),s}return n}function o2(t,e){function n(r,i){const s=dS(t,i,e);return pS(s!==null),r2(s,i,t.host,t._protocol)}return n}function mS(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=vV():i=_V():n.getStatus()===402?i=yV(t.bucket):n.getStatus()===403?i=EV(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function a2(t){const e=mS(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=gV(t.path)),s.serverResponse=i.serverResponse,s}return n}function l2(t,e,n){const r=e.fullServerUrl(),i=rg(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new fS(i,s,o2(t,n),o);return l.errorHandler=a2(e),l}function u2(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function c2(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=u2(null,e)),r}function h2(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let L=0;L<2;L++)S=S+Math.random().toString().slice(2);return S}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=c2(e,r,i),d=i2(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",E=oi.getBlob(f,r,m);if(E===null)throw AV();const A={name:c.fullPath},k=rg(s,t.host,t._protocol),D="POST",I=t.maxUploadRetryTime,v=new fS(k,D,s2(t,n),I);return v.urlParams=A,v.headers=o,v.body=E.uploadData(),v.errorHandler=mS(e),v}class d2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=hs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=hs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=hs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw pa("cannot .send() more than once");if(ks(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw pa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw pa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw pa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw pa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class f2 extends d2{initXhr(){this.xhr_.responseType="text"}}function gS(){return new f2}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this._service=e,n instanceof un?this._location=n:this._location=un.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Rs(e,n)}get root(){const e=new un(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cS(this._location.path)}get storage(){return this._service}get parent(){const e=JV(this._location.path);if(e===null)return null;const n=new un(this._location.bucket,e);return new Rs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw kV(e)}}function p2(t,e,n){t._throwIfRoot("uploadBytes");const r=h2(t.storage,t._location,hS(),new oi(e,!0),n);return t.storage.makeRequestWithTokens(r,gS).then(i=>({metadata:i,ref:t}))}function m2(t){t._throwIfRoot("getDownloadURL");const e=l2(t.storage,t._location,hS());return t.storage.makeRequestWithTokens(e,gS).then(n=>{if(n===null)throw PV();return n})}function g2(t,e){const n=XV(t._location.path,e),r=new un(t._location.bucket,n);return new Rs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y2(t){return/^[A-Za-z]+:\/\//.test(t)}function _2(t,e){return new Rs(t,e)}function yS(t,e){if(t instanceof ig){const n=t;if(n._bucket==null)throw RV();const r=new Rs(n,n._bucket);return e!=null?yS(r,e):r}else return e!==void 0?g2(t,e):t}function v2(t,e){if(e&&y2(e)){if(t instanceof ig)return _2(t,e);throw sp("To use ref(service, url), the first argument must be a Storage instance.")}else return yS(t,e)}function Mv(t,e){const n=e==null?void 0:e[rS];return n==null?null:un.makeFromBucketSpec(n,t)}function E2(t,e,n,r={}){t.host=`${e}:${n}`;const i=ks(e);i&&lm(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:FT(s,t.app.options.projectId))}class ig{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=nS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=pV,this._maxUploadRetryTime=mV,this._requests=new Set,i!=null?this._bucket=un.makeFromBucketSpec(i,this._host):this._bucket=Mv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=un.makeFromBucketSpec(this._url,e):this._bucket=Mv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Rs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new NV(iS());{const o=zV(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Uv="@firebase/storage",Fv="0.14.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="storage";function rM(t,e,n){return t=Je(t),p2(t,e,n)}function iM(t){return t=Je(t),m2(t)}function sM(t,e){return t=Je(t),v2(t,e)}function w2(t=fh(),e){t=Je(t);const r=dh(t,_S).getImmediate({identifier:e}),i=VT("storage");return i&&T2(r,...i),r}function T2(t,e,n,r={}){E2(t,e,n,r)}function I2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new ig(n,r,i,e,Ns)}function S2(){Es(new Si(_S,I2,"PUBLIC").setMultipleInstances(!0)),tr(Uv,Fv,""),tr(Uv,Fv,"esm2020")}S2();const R2={apiKey:"AIzaSyDekI6LUbhSrYGbGz0GmmfkNF4WQHLQno0",authDomain:"spa-portfolio-b5831.firebaseapp.com",projectId:"spa-portfolio-b5831",storageBucket:"spa-portfolio-b5831.firebasestorage.app",messagingSenderId:"1087839661118",appId:"1:1087839661118:web:4de402f10668ce8309b56f"},A2=t=>typeof t!="string"?"":t.trim(),vS=Object.fromEntries(Object.entries(R2).map(([t,e])=>[t,A2(e)])),P2=Object.entries(vS).filter(([,t])=>!t||t==="undefined"||t==="null").map(([t])=>t),ES=P2.length===0;if(!ES)throw new Error("Application configuration error. Please contact support.");const sg=vN().length?fh():BT(vS),ma=Hx(sg),oM=ZL(sg),aM=w2(sg),wS=new gr;wS.setCustomParameters({prompt:"select_account"});const TS=b.createContext(null);function IS({children:t}){const[e,n]=b.useState(null),[r,i]=b.useState(!0),[s,o]=b.useState(""),[l,u]=b.useState(0),[c,d]=b.useState(null),f=b.useCallback(async(D,I)=>{if(c&&Date.now()<c)throw new Error("Too many attempts. Please wait before trying again.");try{const v=await CD(ma,D,I);return u(0),d(null),v.user}catch(v){throw u(S=>S+1),l>=4&&d(Date.now()+3e4),new Error(v.message||"Registration failed")}},[l,c]),m=b.useCallback(async(D,I)=>{if(c&&Date.now()<c)throw new Error("Too many attempts. Please wait before trying again.");try{const v=await kD(ma,D,I);return u(0),d(null),v.user}catch(v){throw u(S=>S+1),l>=4&&d(Date.now()+3e4),new Error(v.message||"Login failed")}},[l,c]),E=b.useCallback(async()=>{if(c&&Date.now()<c)throw new Error("Too many attempts. Please wait before trying again.");try{const D=await ZD(ma,wS);return u(0),d(null),D.user}catch(D){throw u(I=>I+1),l>=4&&d(Date.now()+3e4),new Error(D.message||"Google sign-in failed")}},[l,c]),A=b.useCallback(async()=>{try{await bD(ma)}catch(D){throw new Error(D.message||"Logout failed")}},[]);b.useEffect(()=>{if(!ES){o("Firebase configuration is missing. Please provide all required environment variables."),i(!1);return}const D=xD(ma,I=>{n(I),i(!1)},()=>{n(null),i(!1)});return()=>{D()}},[]);const k=b.useMemo(()=>({currentUser:e,loading:r,register:f,login:m,logout:A,loginWithGoogle:E}),[e,r,f,m,A,E]);return r?ne.jsx("main",{className:"flex min-h-screen items-center justify-center bg-slate-50 px-4 dark:bg-slate-900",children:ne.jsxs("div",{className:"text-center",children:[ne.jsx("div",{className:"mx-auto h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"}),ne.jsx("p",{className:"mt-4 text-sm font-medium text-slate-700 dark:text-slate-300",children:"Loading..."})]})}):s?ne.jsx("main",{className:"flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 dark:bg-slate-900",children:ne.jsxs("div",{className:"w-full max-w-xl rounded-3xl border border-red-200 bg-white p-8 shadow-lg dark:border-red-800 dark:bg-slate-800",children:[ne.jsx("h1",{className:"text-3xl font-semibold text-red-700 dark:text-red-400",children:"Configuration Error"}),ne.jsx("p",{className:"mt-4 text-sm text-slate-600 dark:text-slate-300",children:s})]})}):ne.jsx(TS.Provider,{value:k,children:t})}IS.propTypes={children:ch.node.isRequired};function C2(){const t=b.useContext(TS);if(!t)throw new Error("useAuth must be used within AuthProvider");return t}const SS=b.createContext(null),jv="portfolio_bookmarks";function RS({children:t}){const[e,n]=b.useState([]),[r,i]=b.useState(!0);b.useEffect(()=>{let d=!0;return(()=>{try{const m=localStorage.getItem(jv);if(!d)return;if(m){const E=JSON.parse(m);n(Array.isArray(E)?E:[])}else n([])}catch{n([])}finally{d&&i(!1)}})(),()=>{d=!1}},[]),b.useEffect(()=>{if(!r)try{localStorage.setItem(jv,JSON.stringify(e))}catch{}},[e,r]);const s=b.useCallback(d=>{n(f=>f.includes(d)?f:[...f,d])},[]),o=b.useCallback(d=>{n(f=>f.filter(m=>m!==d))},[]),l=b.useCallback(d=>{n(f=>f.includes(d)?f.filter(m=>m!==d):[...f,d])},[]),u=b.useCallback(d=>e.includes(d),[e]),c=b.useMemo(()=>({bookmarkedIds:e,loading:r,addBookmark:s,removeBookmark:o,toggleBookmark:l,isBookmarked:u}),[e,r,s,o,l,u]);return ne.jsx(SS.Provider,{value:c,children:!r&&t})}function lM(){const t=b.useContext(SS);if(!t)throw new Error("useBookmarks must be used within BookmarkProvider");return t}RS.propTypes={children:ch.node.isRequired};const AS=b.createContext(null),PS="portfolio_theme",_o="light",vo="dark";function k2(){try{const t=localStorage.getItem(PS);return t===_o||t===vo?t:window.matchMedia("(prefers-color-scheme: dark)").matches?vo:_o}catch(t){return console.error("Theme initialization error:",t),_o}}function N2(t){document.documentElement.setAttribute("data-theme",t),document.documentElement.classList.toggle("dark",t===vo)}function CS({children:t}){const[e,n]=b.useState(k2),[r,i]=b.useState(!0);b.useEffect(()=>{try{N2(e),localStorage.setItem(PS,e)}catch(c){console.error("Theme persistence error:",c)}finally{i(!1)}},[e]);const s=b.useCallback(()=>{n(c=>c===_o?vo:_o)},[]),o=b.useCallback(()=>{n(_o)},[]),l=b.useCallback(()=>{n(vo)},[]),u=b.useMemo(()=>({theme:e,loading:r,isDarkMode:e===vo,toggleTheme:s,setLightMode:o,setDarkMode:l}),[e,r,s,o,l]);return ne.jsx(AS.Provider,{value:u,children:!r&&t})}CS.propTypes={children:ch.node.isRequired};function uM(){const t=b.useContext(AS);if(!t)throw new Error("useTheme must be used within ThemeProvider");return t}class kS extends b.Component{constructor(n){super(n);xg(this,"handleReset",()=>{this.setState({hasError:!1,error:null,errorInfo:null})});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(n,r){this.setState({error:n,errorInfo:r}),ct.error("Something went wrong. Please refresh the page.")}render(){return this.state.hasError?ne.jsx("main",{className:"flex min-h-screen flex-col items-center justify-center bg-white px-4 py-12",children:ne.jsxs("div",{className:"max-w-md text-center",children:[ne.jsx("h1",{className:"text-3xl font-bold text-red-600",children:"Oops!"}),ne.jsx("p",{className:"mt-4 text-gray-700",children:"Something went wrong. We're sorry for the inconvenience."}),!1,ne.jsx("button",{type:"button",onClick:this.handleReset,className:"mt-6 rounded bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700",children:"Try Again"}),ne.jsx("a",{href:"/",className:"mt-4 block text-blue-600 hover:underline",children:"Go to Home"})]})}):this.props.children}}kS.propTypes={children:ch.node.isRequired};function D2(){return ne.jsx("footer",{className:"border-t bg-white py-6 text-center text-sm text-gray-500",children:ne.jsxs("p",{children:["Kendi Spa Portfolio Platform © ",new Date().getFullYear()]})})}const x2="modulepreload",b2=function(t){return"/"+t},zv={},$o=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=b2(u),u in zv)return;zv[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":x2,c||(f.as="script"),f.crossOrigin="",f.href=u,l&&f.setAttribute("nonce",l),document.head.appendChild(f),c)return new Promise((m,E)=>{f.addEventListener("load",m),f.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};function O2(){const{currentUser:t,loading:e}=C2(),n=Cs();return e?ne.jsx("main",{role:"status","aria-live":"polite",className:"flex min-h-screen items-center justify-center",children:ne.jsx("p",{children:"Loading..."})}):t?ne.jsx(_T,{}):ne.jsx(bC,{to:"/login",replace:!0,state:{from:n}})}const L2=b.lazy(()=>$o(()=>import("./HomePage-CNxhrnTr.js"),__vite__mapDeps([0,1,2,3]))),V2=b.lazy(()=>$o(()=>import("./LoginPage-D4kHTFRT.js"),__vite__mapDeps([4,1,5]))),M2=b.lazy(()=>$o(()=>import("./RegisterPage-CMX0X5_j.js"),__vite__mapDeps([6,1,5]))),U2=b.lazy(()=>$o(()=>import("./AddProjectPage-ChubLNjd.js"),__vite__mapDeps([7,2,1]))),F2=b.lazy(()=>$o(()=>import("./BookmarksPage-1nqHbnDd.js"),__vite__mapDeps([8,2,1,3]))),j2=b.lazy(()=>$o(()=>import("./ProjectDetailsPage-C-aY11ND.js"),__vite__mapDeps([9,2,1])));function z2(){return ne.jsx("main",{role:"status","aria-live":"polite",className:"flex min-h-screen items-center justify-center bg-slate-50 px-4",children:ne.jsx("p",{className:"text-base font-medium text-slate-700",children:"Loading..."})})}function B2(){const t=yT(),e=Po(t)?t.statusText||"Route failed to load":(t==null?void 0:t.message)||"An unexpected error occurred";return ne.jsx("main",{className:"flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12",children:ne.jsxs("div",{className:"w-full max-w-xl rounded-3xl border border-red-200 bg-white p-8 shadow-lg",children:[ne.jsx("h1",{className:"text-3xl font-semibold text-red-700",children:"Something went wrong"}),ne.jsx("p",{className:"mt-4 text-sm text-slate-600",children:e}),ne.jsxs("div",{className:"mt-6 flex flex-col gap-3 sm:flex-row sm:items-center",children:[ne.jsx(wT,{to:"/",className:"inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700",children:"Return home"}),ne.jsx("button",{type:"button",onClick:()=>window.location.reload(),className:"inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50",children:"Reload page"})]})]})})}function $2(){return ne.jsx(b.Suspense,{fallback:ne.jsx(z2,{}),children:ne.jsx(_T,{})})}const H2=zC([{path:"/",element:ne.jsx($2,{}),errorElement:ne.jsx(B2,{}),children:[{index:!0,element:ne.jsx(L2,{})},{path:"login",element:ne.jsx(V2,{})},{path:"register",element:ne.jsx(M2,{})},{path:"projects/:id",element:ne.jsx(j2,{})},{element:ne.jsx(O2,{}),children:[{path:"projects/add",element:ne.jsx(U2,{})},{path:"bookmarks",element:ne.jsx(F2,{})}]}]}]);function W2(){return ne.jsx(kS,{children:ne.jsx(CS,{children:ne.jsx(IS,{children:ne.jsxs(RS,{children:[ne.jsx(QC,{router:H2}),ne.jsx(Hk,{position:"top-right",reverseOrder:!1}),ne.jsx(D2,{})]})})})})}tT(document.getElementById("root")).render(ne.jsx(b.StrictMode,{children:ne.jsx(W2,{})}));export{wT as L,Q2 as N,ch as P,oR as R,lM as a,fT as b,Cs as c,K2 as d,uM as e,J2 as f,Z2 as g,oM as h,XL as i,ne as j,eM as k,tM as l,X2 as m,ct as n,sM as o,rM as p,iM as q,b as r,nM as s,aM as t,C2 as u};
