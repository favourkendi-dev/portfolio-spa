const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-Cd-3b45b.js","assets/router-DzbZjgSb.js","assets/index-CyVCOkIL.js","assets/projectService-CpL2OwuS.js","assets/firebase-DT9kT1T0.js","assets/useProjects-lDprkj_s.js","assets/LoginPage-DkBE9q2d.js","assets/index-Bq8kIERZ.js","assets/RegisterPage-CZlmFVoM.js","assets/AddProjectPage-BNUTLnhH.js","assets/BookmarksPage-CC43J1K0.js","assets/ProjectDetailsPage-995RAcs4.js"])))=>i.map(i=>d[i]);
var je=Object.defineProperty;var Pe=(e,t,r)=>t in e?je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var H=(e,t,r)=>Pe(e,typeof t!="symbol"?t+"":t,r);import{r as i,a as _e,g as Te,u as Ce,N as K,O as J,c as Oe,b as Se,i as Re,L as Ae,R as Ne}from"./router-DzbZjgSb.js";import{g as De,a as Le,i as Ie,b as $e,c as Fe,s as ze,G as Be,d as Ue,e as Me,f as We,h as He,j as qe,o as Ge}from"./firebase-DT9kT1T0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();var Q={exports:{}},I={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve=i,Ye=Symbol.for("react.element"),Ke=Symbol.for("react.fragment"),Je=Object.prototype.hasOwnProperty,Qe=Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ze={key:!0,ref:!0,__self:!0,__source:!0};function Z(e,t,r){var s,a={},n=null,o=null;r!==void 0&&(n=""+r),t.key!==void 0&&(n=""+t.key),t.ref!==void 0&&(o=t.ref);for(s in t)Je.call(t,s)&&!Ze.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)a[s]===void 0&&(a[s]=t[s]);return{$$typeof:Ye,type:e,key:n,ref:o,props:a,_owner:Qe.current}}I.Fragment=Ke;I.jsx=Z;I.jsxs=Z;Q.exports=I;var c=Q.exports,X,q=_e;X=q.createRoot,q.hydrateRoot;let Xe={data:""},et=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||Xe},tt=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,rt=/\/\*[^]*?\*\/|  +/g,G=/\n+/g,j=(e,t)=>{let r="",s="",a="";for(let n in e){let o=e[n];n[0]=="@"?n[1]=="i"?r=n+" "+o+";":s+=n[1]=="f"?j(o,n):n+"{"+j(o,n[1]=="k"?"":t)+"}":typeof o=="object"?s+=j(o,t?t.replace(/([^,])+/g,l=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,l):l?l+" "+d:d)):n):o!=null&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=j.p?j.p(n,o):n+":"+o+";")}return r+(t&&a?t+"{"+a+"}":a)+s},E={},ee=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+ee(e[r]);return t}return e},ot=(e,t,r,s,a)=>{let n=ee(e),o=E[n]||(E[n]=(d=>{let m=0,p=11;for(;m<d.length;)p=101*p+d.charCodeAt(m++)>>>0;return"go"+p})(n));if(!E[o]){let d=n!==e?e:(m=>{let p,u,f=[{}];for(;p=tt.exec(m.replace(rt,""));)p[4]?f.shift():p[3]?(u=p[3].replace(G," ").trim(),f.unshift(f[0][u]=f[0][u]||{})):f[0][p[1]]=p[2].replace(G," ").trim();return f[0]})(e);E[o]=j(a?{["@keyframes "+o]:d}:d,r?"":"."+o)}let l=r&&E.g?E.g:null;return r&&(E.g=E[o]),((d,m,p,u)=>{u?m.data=m.data.replace(u,d):m.data.indexOf(d)===-1&&(m.data=p?d+m.data:m.data+d)})(E[o],t,s,l),o},st=(e,t,r)=>e.reduce((s,a,n)=>{let o=t[n];if(o&&o.call){let l=o(r),d=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=d?"."+d:l&&typeof l=="object"?l.props?"":j(l,""):l===!1?"":l}return s+a+(o??"")},"");function $(e){let t=this||{},r=e.call?e(t.p):e;return ot(r.unshift?r.raw?st(r,[].slice.call(arguments,1),t.p):r.reduce((s,a)=>Object.assign(s,a&&a.call?a(t.p):a),{}):r,et(t.target),t.g,t.o,t.k)}let te,U,M;$.bind({g:1});let k=$.bind({k:1});function at(e,t,r,s){j.p=t,te=e,U=r,M=s}function P(e,t){let r=this||{};return function(){let s=arguments;function a(n,o){let l=Object.assign({},n),d=l.className||a.className;r.p=Object.assign({theme:U&&U()},l),r.o=/ *go\d+/.test(d),l.className=$.apply(r,s)+(d?" "+d:"");let m=e;return e[0]&&(m=l.as||e,delete l.as),M&&m[0]&&M(l),te(m,l)}return a}}var nt=e=>typeof e=="function",L=(e,t)=>nt(e)?e(t):e,it=(()=>{let e=0;return()=>(++e).toString()})(),re=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),lt=20,W="default",oe=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:s}=t;return oe(e,{type:e.toasts.find(o=>o.id===s.id)?1:0,toast:s});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(o=>o.id===a||a===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+n}))}}},D=[],se={toasts:[],pausedAt:void 0,settings:{toastLimit:lt}},w={},ae=(e,t=W)=>{w[t]=oe(w[t]||se,e),D.forEach(([r,s])=>{r===t&&s(w[t])})},ne=e=>Object.keys(w).forEach(t=>ae(e,t)),ct=e=>Object.keys(w).find(t=>w[t].toasts.some(r=>r.id===e)),F=(e=W)=>t=>{ae(t,e)},dt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ut=(e={},t=W)=>{let[r,s]=i.useState(w[t]||se),a=i.useRef(w[t]);i.useEffect(()=>(a.current!==w[t]&&s(w[t]),D.push([t,s]),()=>{let o=D.findIndex(([l])=>l===t);o>-1&&D.splice(o,1)}),[t]);let n=r.toasts.map(o=>{var l,d,m;return{...e,...e[o.type],...o,removeDelay:o.removeDelay||((l=e[o.type])==null?void 0:l.removeDelay)||(e==null?void 0:e.removeDelay),duration:o.duration||((d=e[o.type])==null?void 0:d.duration)||(e==null?void 0:e.duration)||dt[o.type],style:{...e.style,...(m=e[o.type])==null?void 0:m.style,...o.style}}});return{...r,toasts:n}},mt=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||it()}),R=e=>(t,r)=>{let s=mt(t,e,r);return F(s.toasterId||ct(s.id))({type:2,toast:s}),s.id},g=(e,t)=>R("blank")(e,t);g.error=R("error");g.success=R("success");g.loading=R("loading");g.custom=R("custom");g.dismiss=(e,t)=>{let r={type:3,toastId:e};t?F(t)(r):ne(r)};g.dismissAll=e=>g.dismiss(void 0,e);g.remove=(e,t)=>{let r={type:4,toastId:e};t?F(t)(r):ne(r)};g.removeAll=e=>g.remove(void 0,e);g.promise=(e,t,r)=>{let s=g.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof e=="function"&&(e=e()),e.then(a=>{let n=t.success?L(t.success,a):void 0;return n?g.success(n,{id:s,...r,...r==null?void 0:r.success}):g.dismiss(s),a}).catch(a=>{let n=t.error?L(t.error,a):void 0;n?g.error(n,{id:s,...r,...r==null?void 0:r.error}):g.dismiss(s)}),e};var pt=1e3,ft=(e,t="default")=>{let{toasts:r,pausedAt:s}=ut(e,t),a=i.useRef(new Map).current,n=i.useCallback((u,f=pt)=>{if(a.has(u))return;let h=setTimeout(()=>{a.delete(u),o({type:4,toastId:u})},f);a.set(u,h)},[]);i.useEffect(()=>{if(s)return;let u=Date.now(),f=r.map(h=>{if(h.duration===1/0)return;let _=(h.duration||0)+h.pauseDuration-(u-h.createdAt);if(_<0){h.visible&&g.dismiss(h.id);return}return setTimeout(()=>g.dismiss(h.id,t),_)});return()=>{f.forEach(h=>h&&clearTimeout(h))}},[r,s,t]);let o=i.useCallback(F(t),[t]),l=i.useCallback(()=>{o({type:5,time:Date.now()})},[o]),d=i.useCallback((u,f)=>{o({type:1,toast:{id:u,height:f}})},[o]),m=i.useCallback(()=>{s&&o({type:6,time:Date.now()})},[s,o]),p=i.useCallback((u,f)=>{let{reverseOrder:h=!1,gutter:_=8,defaultPosition:A}=f||{},y=r.filter(x=>(x.position||A)===(u.position||A)&&x.height),b=y.findIndex(x=>x.id===u.id),v=y.filter((x,B)=>B<b&&x.visible).length;return y.filter(x=>x.visible).slice(...h?[v+1]:[0,v]).reduce((x,B)=>x+(B.height||0)+_,0)},[r]);return i.useEffect(()=>{r.forEach(u=>{if(u.dismissed)n(u.id,u.removeDelay);else{let f=a.get(u.id);f&&(clearTimeout(f),a.delete(u.id))}})},[r,n]),{toasts:r,handlers:{updateHeight:d,startPause:l,endPause:m,calculateOffset:p}}},ht=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,gt=k`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,yt=k`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,xt=P("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ht} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${gt} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${yt} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,bt=k`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,vt=P("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${bt} 1s linear infinite;
`,wt=k`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Et=k`
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
}`,kt=P("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${wt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Et} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,jt=P("div")`
  position: absolute;
`,Pt=P("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,_t=k`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Tt=P("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${_t} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ct=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return t!==void 0?typeof t=="string"?i.createElement(Tt,null,t):t:r==="blank"?null:i.createElement(Pt,null,i.createElement(vt,{...s}),r!=="loading"&&i.createElement(jt,null,r==="error"?i.createElement(xt,{...s}):i.createElement(kt,{...s})))},Ot=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,St=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Rt="0%{opacity:0;} 100%{opacity:1;}",At="0%{opacity:1;} 100%{opacity:0;}",Nt=P("div")`
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
`,Dt=P("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Lt=(e,t)=>{let r=e.includes("top")?1:-1,[s,a]=re()?[Rt,At]:[Ot(r),St(r)];return{animation:t?`${k(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${k(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},It=i.memo(({toast:e,position:t,style:r,children:s})=>{let a=e.height?Lt(e.position||t||"top-center",e.visible):{opacity:0},n=i.createElement(Ct,{toast:e}),o=i.createElement(Dt,{...e.ariaProps},L(e.message,e));return i.createElement(Nt,{className:e.className,style:{...a,...r,...e.style}},typeof s=="function"?s({icon:n,message:o}):i.createElement(i.Fragment,null,n,o))});at(i.createElement);var $t=({id:e,className:t,style:r,onHeightUpdate:s,children:a})=>{let n=i.useCallback(o=>{if(o){let l=()=>{let d=o.getBoundingClientRect().height;s(e,d)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return i.createElement("div",{ref:n,className:t,style:r},a)},Ft=(e,t)=>{let r=e.includes("top"),s=r?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:re()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...s,...a}},zt=$`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,N=16,Bt=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:a,toasterId:n,containerStyle:o,containerClassName:l})=>{let{toasts:d,handlers:m}=ft(r,n);return i.createElement("div",{"data-rht-toaster":n||"",style:{position:"fixed",zIndex:9999,top:N,left:N,right:N,bottom:N,pointerEvents:"none",...o},className:l,onMouseEnter:m.startPause,onMouseLeave:m.endPause},d.map(p=>{let u=p.position||t,f=m.calculateOffset(p,{reverseOrder:e,gutter:s,defaultPosition:t}),h=Ft(u,f);return i.createElement($t,{id:p.id,key:p.id,onHeightUpdate:m.updateHeight,className:p.visible?zt:"",style:h},p.type==="custom"?L(p.message,p):a?a(p):i.createElement(It,{toast:p,position:u}))}))},ie={exports:{}},Ut="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Mt=Ut,Wt=Mt;function le(){}function ce(){}ce.resetWarningCache=le;var Ht=function(){function e(s,a,n,o,l,d){if(d!==Wt){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ce,resetWarningCache:le};return r.PropTypes=r,r};ie.exports=Ht();var qt=ie.exports;const z=Te(qt),Gt={apiKey:"AIzaSyDekI6LUbhSrYGbGz0GmmfkNF4WQHLQno0",authDomain:"spa-portfolio-b5831.firebaseapp.com",projectId:"spa-portfolio-b5831",messagingSenderId:"1087839661118",appId:"1:1087839661118:web:4de402f10668ce8309b56f"},Vt=e=>typeof e!="string"?"":e.trim(),de=Object.fromEntries(Object.entries(Gt).map(([e,t])=>[e,Vt(t)])),Yt=Object.entries(de).filter(([,e])=>!e||e==="undefined"||e==="null").map(([e])=>e),ue=Yt.length===0;if(!ue)throw new Error("Application configuration error. Please contact support.");const me=De().length?Le():Ie(de),T=$e(me),fr=Fe(me);ze(T,Ue).catch(e=>{console.warn("Failed to set auth persistence:",e)});const pe=new Be;pe.setCustomParameters({prompt:"select_account"});const fe=i.createContext(null);function he({children:e}){const[t,r]=i.useState(null),[s,a]=i.useState(!0),[n,o]=i.useState(""),[l,d]=i.useState(0),[m,p]=i.useState(null),u=i.useCallback(async(y,b)=>{if(m&&Date.now()<m)throw new Error("Too many attempts. Please wait before trying again.");try{const v=await Me(T,y,b);return d(0),p(null),v.user}catch(v){throw d(x=>x+1),l>=4&&p(Date.now()+3e4),new Error(v.message||"Registration failed")}},[l,m]),f=i.useCallback(async(y,b)=>{if(m&&Date.now()<m)throw new Error("Too many attempts. Please wait before trying again.");try{const v=await We(T,y,b);return d(0),p(null),v.user}catch(v){throw d(x=>x+1),l>=4&&p(Date.now()+3e4),v.code==="auth/user-not-found"||v.code==="auth/wrong-password"||v.code==="auth/invalid-credential"?new Error("Wrong credentials"):new Error("Login failed")}},[l,m]),h=i.useCallback(async()=>{if(m&&Date.now()<m)throw new Error("Too many attempts. Please wait before trying again.");try{const y=await He(T,pe);return d(0),p(null),y.user}catch(y){throw d(b=>b+1),l>=4&&p(Date.now()+3e4),new Error(y.message||"Google sign-in failed")}},[l,m]),_=i.useCallback(async()=>{try{await qe(T)}catch(y){throw new Error(y.message||"Logout failed")}},[]);i.useEffect(()=>{if(!ue){o("Firebase configuration is missing. Please provide all required environment variables."),a(!1);return}let y;try{y=Ge(T,b=>{r(b),o(""),a(!1)},b=>{console.error("Auth state change error:",b),r(null),o("Authentication error occurred"),a(!1)})}catch(b){console.error("Failed to set up auth listener:",b),o("Failed to initialize authentication"),a(!1);return}return()=>{y&&y()}},[]);const A=i.useMemo(()=>({currentUser:t,loading:s,register:u,login:f,logout:_,loginWithGoogle:h}),[t,s,u,f,_,h]);return s?c.jsx("main",{className:"flex min-h-screen items-center justify-center bg-slate-50 px-4 dark:bg-slate-900",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"mx-auto h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"}),c.jsx("p",{className:"mt-4 text-sm font-medium text-slate-700 dark:text-slate-300",children:"Loading..."})]})}):n?c.jsx("main",{className:"flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 dark:bg-slate-900",children:c.jsxs("div",{className:"w-full max-w-xl rounded-3xl border border-red-200 bg-white p-8 shadow-lg dark:border-red-800 dark:bg-slate-800",children:[c.jsx("h1",{className:"text-3xl font-semibold text-red-700 dark:text-red-400",children:"Configuration Error"}),c.jsx("p",{className:"mt-4 text-sm text-slate-600 dark:text-slate-300",children:n})]})}):c.jsx(fe.Provider,{value:A,children:e})}he.propTypes={children:z.node.isRequired};function ge(){const e=i.useContext(fe);if(!e)throw new Error("useAuth must be used within AuthProvider");return e}const ye=i.createContext(null),V="portfolio_bookmarks";function xe({children:e}){const[t,r]=i.useState([]),[s,a]=i.useState(!0);i.useEffect(()=>{let p=!0;return(()=>{try{const f=localStorage.getItem(V);if(!p)return;if(f){const h=JSON.parse(f);r(Array.isArray(h)?h:[])}else r([])}catch{r([])}finally{p&&a(!1)}})(),()=>{p=!1}},[]),i.useEffect(()=>{if(!s)try{localStorage.setItem(V,JSON.stringify(t))}catch{}},[t,s]);const n=i.useCallback(p=>{r(u=>u.includes(p)?u:[...u,p])},[]),o=i.useCallback(p=>{r(u=>u.filter(f=>f!==p))},[]),l=i.useCallback(p=>{r(u=>u.includes(p)?u.filter(f=>f!==p):[...u,p])},[]),d=i.useCallback(p=>t.includes(p),[t]),m=i.useMemo(()=>({bookmarkedIds:t,loading:s,addBookmark:n,removeBookmark:o,toggleBookmark:l,isBookmarked:d}),[t,s,n,o,l,d]);return c.jsx(ye.Provider,{value:m,children:!s&&e})}function hr(){const e=i.useContext(ye);if(!e)throw new Error("useBookmarks must be used within BookmarkProvider");return e}xe.propTypes={children:z.node.isRequired};const be=i.createContext(null),ve="portfolio_theme",C="light",O="dark";function Kt(){try{const e=localStorage.getItem(ve);return e===C||e===O?e:window.matchMedia("(prefers-color-scheme: dark)").matches?O:C}catch(e){return console.error("Theme initialization error:",e),C}}function Jt(e){document.documentElement.setAttribute("data-theme",e),document.documentElement.classList.toggle("dark",e===O)}function we({children:e}){const[t,r]=i.useState(Kt),[s,a]=i.useState(!0);i.useEffect(()=>{try{Jt(t),localStorage.setItem(ve,t)}catch(m){console.error("Theme persistence error:",m)}finally{a(!1)}},[t]);const n=i.useCallback(()=>{r(m=>m===C?O:C)},[]),o=i.useCallback(()=>{r(C)},[]),l=i.useCallback(()=>{r(O)},[]),d=i.useMemo(()=>({theme:t,loading:s,isDarkMode:t===O,toggleTheme:n,setLightMode:o,setDarkMode:l}),[t,s,n,o,l]);return c.jsx(be.Provider,{value:d,children:!s&&e})}we.propTypes={children:z.node.isRequired};function gr(){const e=i.useContext(be);if(!e)throw new Error("useTheme must be used within ThemeProvider");return e}class Ee extends i.Component{constructor(r){super(r);H(this,"handleReset",()=>{this.setState({hasError:!1,error:null,errorInfo:null})});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r,s){this.setState({error:r,errorInfo:s}),g.error("Something went wrong. Please refresh the page.")}render(){return this.state.hasError?c.jsx("main",{className:"flex min-h-screen flex-col items-center justify-center bg-white px-4 py-12",children:c.jsxs("div",{className:"max-w-md text-center",children:[c.jsx("h1",{className:"text-3xl font-bold text-red-600",children:"Oops!"}),c.jsx("p",{className:"mt-4 text-gray-700",children:"Something went wrong. We're sorry for the inconvenience."}),!1,c.jsx("button",{type:"button",onClick:this.handleReset,className:"mt-6 rounded bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700",children:"Try Again"}),c.jsx("a",{href:"/",className:"mt-4 block text-blue-600 hover:underline",children:"Go to Home"})]})}):this.props.children}}Ee.propTypes={children:z.node.isRequired};function Qt(){return c.jsx("footer",{className:"border-t bg-white py-6 text-center text-sm text-gray-500",children:c.jsxs("p",{children:["Kendi Spa Portfolio Platform © ",new Date().getFullYear()]})})}const Zt="modulepreload",Xt=function(e){return"/portfolio-spa/"+e},Y={},S=function(t,r,s){let a=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));a=Promise.allSettled(r.map(d=>{if(d=Xt(d),d in Y)return;Y[d]=!0;const m=d.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const u=document.createElement("link");if(u.rel=m?"stylesheet":Zt,m||(u.as="script"),u.crossOrigin="",u.href=d,l&&u.setAttribute("nonce",l),document.head.appendChild(u),m)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${d}`)))})}))}function n(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return a.then(o=>{for(const l of o||[])l.status==="rejected"&&n(l.reason);return t().catch(n)})};function er(){const{currentUser:e,loading:t}=ge(),r=Ce();return t?c.jsx("main",{role:"status","aria-live":"polite",className:"flex min-h-screen items-center justify-center",children:c.jsx("p",{children:"Loading..."})}):e?c.jsx(J,{}):c.jsx(K,{to:"/login",replace:!0,state:{from:r}})}const tr=i.lazy(()=>S(()=>import("./HomePage-Cd-3b45b.js"),__vite__mapDeps([0,1,2,3,4,5]))),rr=i.lazy(()=>S(()=>import("./LoginPage-DkBE9q2d.js"),__vite__mapDeps([6,1,2,7,4]))),or=i.lazy(()=>S(()=>import("./RegisterPage-CZlmFVoM.js"),__vite__mapDeps([8,1,2,7,4]))),sr=i.lazy(()=>S(()=>import("./AddProjectPage-BNUTLnhH.js"),__vite__mapDeps([9,1,3,2,4]))),ar=i.lazy(()=>S(()=>import("./BookmarksPage-CC43J1K0.js"),__vite__mapDeps([10,3,1,2,4,5]))),nr=i.lazy(()=>S(()=>import("./ProjectDetailsPage-995RAcs4.js"),__vite__mapDeps([11,1,3,2,4])));function ke(){return c.jsx("main",{role:"status","aria-live":"polite",className:"flex min-h-screen items-center justify-center bg-slate-50 px-4",children:c.jsx("p",{className:"text-base font-medium text-slate-700",children:"Loading..."})})}function ir(){const e=Se(),t=Re(e)?e.statusText||"Route failed to load":(e==null?void 0:e.message)||"An unexpected error occurred";return c.jsx("main",{className:"flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12",children:c.jsxs("div",{className:"w-full max-w-xl rounded-3xl border border-red-200 bg-white p-8 shadow-lg",children:[c.jsx("h1",{className:"text-3xl font-semibold text-red-700",children:"Something went wrong"}),c.jsx("p",{className:"mt-4 text-sm text-slate-600",children:t}),c.jsxs("div",{className:"mt-6 flex flex-col gap-3 sm:flex-row sm:items-center",children:[c.jsx(Ae,{to:"/",className:"inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700",children:"Return home"}),c.jsx("button",{type:"button",onClick:()=>window.location.reload(),className:"inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50",children:"Reload page"})]})]})})}function lr(){const{currentUser:e,loading:t}=ge();return t?c.jsx(ke,{}):e?c.jsx(tr,{}):c.jsx(K,{to:"/login",replace:!0})}const cr=Oe([{path:"/",element:c.jsx(i.Suspense,{fallback:c.jsx(ke,{}),children:c.jsx(J,{})}),errorElement:c.jsx(ir,{}),children:[{index:!0,element:c.jsx(lr,{})},{path:"login",element:c.jsx(rr,{})},{path:"register",element:c.jsx(or,{})},{path:"projects/:id",element:c.jsx(nr,{})},{element:c.jsx(er,{}),children:[{path:"add-project",element:c.jsx(sr,{})},{path:"bookmarks",element:c.jsx(ar,{})}]}]}],{basename:"/spa-portfolio"});function dr(){return c.jsx(Ee,{children:c.jsx(we,{children:c.jsx(he,{children:c.jsxs(xe,{children:[c.jsx(Ne,{router:cr}),c.jsx(Bt,{position:"top-right",reverseOrder:!1}),c.jsx(Qt,{})]})})})})}X(document.getElementById("root")).render(c.jsx(i.StrictMode,{children:c.jsx(dr,{})}));export{z as P,hr as a,gr as b,fr as d,c as j,g as n,ge as u};
