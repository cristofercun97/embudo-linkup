const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginView-Big9lIuv.js","assets/logo-linkup-ChwGZu_-.js","assets/LoginView-RHvf8RUy.css","assets/DashboardView-DsKFjOyR.js","assets/DashboardView-DzCDbP1Y.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Kl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},xr=[],zt=()=>{},dd=()=>!1,qo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Gl=t=>t.startsWith("onUpdate:"),et=Object.assign,zl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},y_=Object.prototype.hasOwnProperty,Re=(t,e)=>y_.call(t,e),ae=Array.isArray,Mr=t=>fi(t)==="[object Map]",$o=t=>fi(t)==="[object Set]",Qu=t=>fi(t)==="[object Date]",fe=t=>typeof t=="function",Ue=t=>typeof t=="string",en=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",pd=t=>(Se(t)||fe(t))&&fe(t.then)&&fe(t.catch),gd=Object.prototype.toString,fi=t=>gd.call(t),v_=t=>fi(t).slice(8,-1),md=t=>fi(t)==="[object Object]",Ql=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ks=Kl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ho=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},E_=/-\w/g,yt=Ho(t=>t.replace(E_,e=>e.slice(1).toUpperCase())),T_=/\B([A-Z])/g,_r=Ho(t=>t.replace(T_,"-$1").toLowerCase()),Wo=Ho(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ma=Ho(t=>t?`on${Wo(t)}`:""),Gt=(t,e)=>!Object.is(t,e),Zi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},_d=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ko=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yu;const Go=()=>Yu||(Yu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yl(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ue(r)?R_(r):Yl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ue(t)||Se(t))return t}const I_=/;(?![^(]*\))/g,w_=/:([^]+)/,A_=/\/\*[^]*?\*\//g;function R_(t){const e={};return t.replace(A_,"").split(I_).forEach(n=>{if(n){const r=n.split(w_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Jl(t){let e="";if(Ue(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=Jl(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const b_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",S_=Kl(b_);function yd(t){return!!t||t===""}function P_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=di(t[r],e[r]);return n}function di(t,e){if(t===e)return!0;let n=Qu(t),r=Qu(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=en(t),r=en(e),n||r)return t===e;if(n=ae(t),r=ae(e),n||r)return n&&r?P_(t,e):!1;if(n=Se(t),r=Se(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!di(t[o],e[o]))return!1}}return String(t)===String(e)}function C_(t,e){return t.findIndex(n=>di(n,e))}const vd=t=>!!(t&&t.__v_isRef===!0),N_=t=>Ue(t)?t:t==null?"":ae(t)||Se(t)&&(t.toString===gd||!fe(t.toString))?vd(t)?N_(t.value):JSON.stringify(t,Ed,2):String(t),Ed=(t,e)=>vd(e)?Ed(t,e.value):Mr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[La(r,i)+" =>"]=s,n),{})}:$o(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>La(n))}:en(e)?La(e):Se(e)&&!ae(e)&&!md(e)?String(e):e,La=(t,e="")=>{var n;return en(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Et;class O_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Et,!e&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){++this._on===1&&(this.prevScope=Et,Et=this)}off(){this._on>0&&--this._on===0&&(Et=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function D_(){return Et}let Ne;const Fa=new WeakSet;class Td{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Et&&Et.active&&Et.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fa.has(this)&&(Fa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ju(this),Ad(this);const e=Ne,n=Ft;Ne=this,Ft=!0;try{return this.fn()}finally{Rd(this),Ne=e,Ft=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ec(e);this.deps=this.depsTail=void 0,Ju(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ol(this)&&this.run()}get dirty(){return ol(this)}}let Id=0,xs,Ms;function wd(t,e=!1){if(t.flags|=8,e){t.next=Ms,Ms=t;return}t.next=xs,xs=t}function Xl(){Id++}function Zl(){if(--Id>0)return;if(Ms){let e=Ms;for(Ms=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;xs;){let e=xs;for(xs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Ad(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Rd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ec(r),V_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ol(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(bd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function bd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Qs)||(t.globalVersion=Qs,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ol(t))))return;t.flags|=2;const e=t.dep,n=Ne,r=Ft;Ne=t,Ft=!0;try{Ad(t);const s=t.fn(t._value);(e.version===0||Gt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=n,Ft=r,Rd(t),t.flags&=-3}}function ec(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ec(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function V_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ft=!0;const Sd=[];function yn(){Sd.push(Ft),Ft=!1}function vn(){const t=Sd.pop();Ft=t===void 0?!0:t}function Ju(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ne;Ne=void 0;try{e()}finally{Ne=n}}}let Qs=0;class k_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class tc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ne||!Ft||Ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ne)n=this.activeLink=new k_(Ne,this),Ne.deps?(n.prevDep=Ne.depsTail,Ne.depsTail.nextDep=n,Ne.depsTail=n):Ne.deps=Ne.depsTail=n,Pd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ne.depsTail,n.nextDep=void 0,Ne.depsTail.nextDep=n,Ne.depsTail=n,Ne.deps===n&&(Ne.deps=r)}return n}trigger(e){this.version++,Qs++,this.notify(e)}notify(e){Xl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Zl()}}}function Pd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Pd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const al=new WeakMap,cr=Symbol(""),ll=Symbol(""),Ys=Symbol("");function lt(t,e,n){if(Ft&&Ne){let r=al.get(t);r||al.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new tc),s.map=r,s.key=n),s.track()}}function hn(t,e,n,r,s,i){const o=al.get(t);if(!o){Qs++;return}const l=c=>{c&&c.trigger()};if(Xl(),e==="clear")o.forEach(l);else{const c=ae(t),h=c&&Ql(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Ys||!en(m)&&m>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(Ys)),e){case"add":c?h&&l(o.get("length")):(l(o.get(cr)),Mr(t)&&l(o.get(ll)));break;case"delete":c||(l(o.get(cr)),Mr(t)&&l(o.get(ll)));break;case"set":Mr(t)&&l(o.get(cr));break}}Zl()}function Pr(t){const e=Ae(t);return e===t?e:(lt(e,"iterate",Ys),Vt(t)?e:e.map(Ut))}function zo(t){return lt(t=Ae(t),"iterate",Ys),t}function Wt(t,e){return En(t)?Wr(ur(t)?Ut(e):e):Ut(e)}const x_={__proto__:null,[Symbol.iterator](){return Ua(this,Symbol.iterator,t=>Wt(this,t))},concat(...t){return Pr(this).concat(...t.map(e=>ae(e)?Pr(e):e))},entries(){return Ua(this,"entries",t=>(t[1]=Wt(this,t[1]),t))},every(t,e){return on(this,"every",t,e,void 0,arguments)},filter(t,e){return on(this,"filter",t,e,n=>n.map(r=>Wt(this,r)),arguments)},find(t,e){return on(this,"find",t,e,n=>Wt(this,n),arguments)},findIndex(t,e){return on(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return on(this,"findLast",t,e,n=>Wt(this,n),arguments)},findLastIndex(t,e){return on(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return on(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ba(this,"includes",t)},indexOf(...t){return Ba(this,"indexOf",t)},join(t){return Pr(this).join(t)},lastIndexOf(...t){return Ba(this,"lastIndexOf",t)},map(t,e){return on(this,"map",t,e,void 0,arguments)},pop(){return As(this,"pop")},push(...t){return As(this,"push",t)},reduce(t,...e){return Xu(this,"reduce",t,e)},reduceRight(t,...e){return Xu(this,"reduceRight",t,e)},shift(){return As(this,"shift")},some(t,e){return on(this,"some",t,e,void 0,arguments)},splice(...t){return As(this,"splice",t)},toReversed(){return Pr(this).toReversed()},toSorted(t){return Pr(this).toSorted(t)},toSpliced(...t){return Pr(this).toSpliced(...t)},unshift(...t){return As(this,"unshift",t)},values(){return Ua(this,"values",t=>Wt(this,t))}};function Ua(t,e,n){const r=zo(t),s=r[e]();return r!==t&&!Vt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const M_=Array.prototype;function on(t,e,n,r,s,i){const o=zo(t),l=o!==t&&!Vt(t),c=o[e];if(c!==M_[e]){const p=c.apply(t,i);return l?Ut(p):p}let h=n;o!==t&&(l?h=function(p,m){return n.call(this,Wt(t,p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const f=c.call(o,h,r);return l&&s?s(f):f}function Xu(t,e,n,r){const s=zo(t),i=s!==t&&!Vt(t);let o=n,l=!1;s!==t&&(i?(l=r.length===0,o=function(h,f,p){return l&&(l=!1,h=Wt(t,h)),n.call(this,h,Wt(t,f),p,t)}):n.length>3&&(o=function(h,f,p){return n.call(this,h,f,p,t)}));const c=s[e](o,...r);return l?Wt(t,c):c}function Ba(t,e,n){const r=Ae(t);lt(r,"iterate",Ys);const s=r[e](...n);return(s===-1||s===!1)&&sc(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function As(t,e,n=[]){yn(),Xl();const r=Ae(t)[e].apply(t,n);return Zl(),vn(),r}const L_=Kl("__proto__,__v_isRef,__isVue"),Cd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(en));function F_(t){en(t)||(t=String(t));const e=Ae(this);return lt(e,"has",t),e.hasOwnProperty(t)}class Nd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?z_:kd:i?Vd:Dd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ae(e);if(!s){let c;if(o&&(c=x_[n]))return c;if(n==="hasOwnProperty")return F_}const l=Reflect.get(e,n,ht(e)?e:r);if((en(n)?Cd.has(n):L_(n))||(s||lt(e,"get",n),i))return l;if(ht(l)){const c=o&&Ql(n)?l:l.value;return s&&Se(c)?ul(c):c}return Se(l)?s?ul(l):Qo(l):l}}class Od extends Nd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ae(e)&&Ql(n);if(!this._isShallow){const h=En(i);if(!Vt(r)&&!En(r)&&(i=Ae(i),r=Ae(r)),!o&&ht(i)&&!ht(r))return h||(i.value=r),!0}const l=o?Number(n)<e.length:Re(e,n),c=Reflect.set(e,n,r,ht(e)?e:s);return e===Ae(s)&&(l?Gt(r,i)&&hn(e,"set",n,r):hn(e,"add",n,r)),c}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&hn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!en(n)||!Cd.has(n))&&lt(e,"has",n),r}ownKeys(e){return lt(e,"iterate",ae(e)?"length":cr),Reflect.ownKeys(e)}}class U_ extends Nd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const B_=new Od,j_=new U_,q_=new Od(!0);const cl=t=>t,$i=t=>Reflect.getPrototypeOf(t);function $_(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=Mr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),f=n?cl:e?Wr:Ut;return!e&&lt(i,"iterate",c?ll:cr),et(Object.create(h),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function Hi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function H_(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),l=Ae(s);t||(Gt(s,l)&&lt(o,"get",s),lt(o,"get",l));const{has:c}=$i(o),h=e?cl:t?Wr:Ut;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&lt(Ae(s),"iterate",cr),s.size},has(s){const i=this.__v_raw,o=Ae(i),l=Ae(s);return t||(Gt(s,l)&&lt(o,"has",s),lt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ae(l),h=e?cl:t?Wr:Ut;return!t&&lt(c,"iterate",cr),l.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return et(n,t?{add:Hi("add"),set:Hi("set"),delete:Hi("delete"),clear:Hi("clear")}:{add(s){const i=Ae(this),o=$i(i),l=Ae(s),c=!e&&!Vt(s)&&!En(s)?l:s;return o.has.call(i,c)||Gt(s,c)&&o.has.call(i,s)||Gt(l,c)&&o.has.call(i,l)||(i.add(c),hn(i,"add",c,c)),this},set(s,i){!e&&!Vt(i)&&!En(i)&&(i=Ae(i));const o=Ae(this),{has:l,get:c}=$i(o);let h=l.call(o,s);h||(s=Ae(s),h=l.call(o,s));const f=c.call(o,s);return o.set(s,i),h?Gt(i,f)&&hn(o,"set",s,i):hn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:l}=$i(i);let c=o.call(i,s);c||(s=Ae(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&hn(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&hn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=$_(s,t,e)}),n}function nc(t,e){const n=H_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const W_={get:nc(!1,!1)},K_={get:nc(!1,!0)},G_={get:nc(!0,!1)};const Dd=new WeakMap,Vd=new WeakMap,kd=new WeakMap,z_=new WeakMap;function Q_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Y_(t){return t.__v_skip||!Object.isExtensible(t)?0:Q_(v_(t))}function Qo(t){return En(t)?t:rc(t,!1,B_,W_,Dd)}function xd(t){return rc(t,!1,q_,K_,Vd)}function ul(t){return rc(t,!0,j_,G_,kd)}function rc(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Y_(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function ur(t){return En(t)?ur(t.__v_raw):!!(t&&t.__v_isReactive)}function En(t){return!!(t&&t.__v_isReadonly)}function Vt(t){return!!(t&&t.__v_isShallow)}function sc(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function J_(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&_d(t,"__v_skip",!0),t}const Ut=t=>Se(t)?Qo(t):t,Wr=t=>Se(t)?ul(t):t;function ht(t){return t?t.__v_isRef===!0:!1}function X_(t){return Md(t,!1)}function Z_(t){return Md(t,!0)}function Md(t,e){return ht(t)?t:new ey(t,e)}class ey{constructor(e,n){this.dep=new tc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:Ut(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Vt(e)||En(e);e=r?e:Ae(e),Gt(e,n)&&(this._rawValue=e,this._value=r?e:Ut(e),this.dep.trigger())}}function Lr(t){return ht(t)?t.value:t}const ty={get:(t,e,n)=>e==="__v_raw"?t:Lr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ht(s)&&!ht(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ld(t){return ur(t)?t:new Proxy(t,ty)}class ny{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new tc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return wd(this,!0),!0}get value(){const e=this.dep.track();return bd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ry(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new ny(r,s,n)}const Wi={},mo=new WeakMap;let sr;function sy(t,e=!1,n=sr){if(n){let r=mo.get(n);r||mo.set(n,r=[]),r.push(t)}}function iy(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=H=>s?H:Vt(H)||s===!1||s===0?fn(H,1):fn(H);let f,p,m,v,C=!1,N=!1;if(ht(t)?(p=()=>t.value,C=Vt(t)):ur(t)?(p=()=>h(t),C=!0):ae(t)?(N=!0,C=t.some(H=>ur(H)||Vt(H)),p=()=>t.map(H=>{if(ht(H))return H.value;if(ur(H))return h(H);if(fe(H))return c?c(H,2):H()})):fe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){yn();try{m()}finally{vn()}}const H=sr;sr=f;try{return c?c(t,3,[v]):t(v)}finally{sr=H}}:p=zt,e&&s){const H=p,ce=s===!0?1/0:s;p=()=>fn(H(),ce)}const D=D_(),j=()=>{f.stop(),D&&D.active&&zl(D.effects,f)};if(i&&e){const H=e;e=(...ce)=>{H(...ce),j()}}let M=N?new Array(t.length).fill(Wi):Wi;const q=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const ce=f.run();if(s||C||(N?ce.some((oe,w)=>Gt(oe,M[w])):Gt(ce,M))){m&&m();const oe=sr;sr=f;try{const w=[ce,M===Wi?void 0:N&&M[0]===Wi?[]:M,v];M=ce,c?c(e,3,w):e(...w)}finally{sr=oe}}}else f.run()};return l&&l(q),f=new Td(p),f.scheduler=o?()=>o(q,!1):q,v=H=>sy(H,!1,f),m=f.onStop=()=>{const H=mo.get(f);if(H){if(c)c(H,4);else for(const ce of H)ce();mo.delete(f)}},e?r?q(!0):M=f.run():o?o(q.bind(null,!0),!0):f.run(),j.pause=f.pause.bind(f),j.resume=f.resume.bind(f),j.stop=j,j}function fn(t,e=1/0,n){if(e<=0||!Se(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ht(t))fn(t.value,e,n);else if(ae(t))for(let r=0;r<t.length;r++)fn(t[r],e,n);else if($o(t)||Mr(t))t.forEach(r=>{fn(r,e,n)});else if(md(t)){for(const r in t)fn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&fn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pi(t,e,n,r){try{return r?t(...r):t()}catch(s){Yo(s,e,n)}}function tn(t,e,n,r){if(fe(t)){const s=pi(t,e,n,r);return s&&pd(s)&&s.catch(i=>{Yo(i,e,n)}),s}if(ae(t)){const s=[];for(let i=0;i<t.length;i++)s.push(tn(t[i],e,n,r));return s}}function Yo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ce;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,h)===!1)return}l=l.parent}if(i){yn(),pi(i,null,10,[t,c,h]),vn();return}}oy(t,n,s,r,o)}function oy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const _t=[];let Ht=-1;const Fr=[];let kn=null,Cr=0;const Fd=Promise.resolve();let _o=null;function ic(t){const e=_o||Fd;return t?e.then(this?t.bind(this):t):e}function ay(t){let e=Ht+1,n=_t.length;for(;e<n;){const r=e+n>>>1,s=_t[r],i=Js(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function oc(t){if(!(t.flags&1)){const e=Js(t),n=_t[_t.length-1];!n||!(t.flags&2)&&e>=Js(n)?_t.push(t):_t.splice(ay(e),0,t),t.flags|=1,Ud()}}function Ud(){_o||(_o=Fd.then(jd))}function ly(t){ae(t)?Fr.push(...t):kn&&t.id===-1?kn.splice(Cr+1,0,t):t.flags&1||(Fr.push(t),t.flags|=1),Ud()}function Zu(t,e,n=Ht+1){for(;n<_t.length;n++){const r=_t[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;_t.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Bd(t){if(Fr.length){const e=[...new Set(Fr)].sort((n,r)=>Js(n)-Js(r));if(Fr.length=0,kn){kn.push(...e);return}for(kn=e,Cr=0;Cr<kn.length;Cr++){const n=kn[Cr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}kn=null,Cr=0}}const Js=t=>t.id==null?t.flags&2?-1:1/0:t.id;function jd(t){try{for(Ht=0;Ht<_t.length;Ht++){const e=_t[Ht];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),pi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ht<_t.length;Ht++){const e=_t[Ht];e&&(e.flags&=-2)}Ht=-1,_t.length=0,Bd(),_o=null,(_t.length||Fr.length)&&jd()}}let bt=null,qd=null;function yo(t){const e=bt;return bt=t,qd=t&&t.type.__scopeId||null,e}function cy(t,e=bt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&To(-1);const i=yo(e);let o;try{o=t(...s)}finally{yo(i),r._d&&To(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function iS(t,e){if(bt===null)return t;const n=ea(bt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ce]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&fn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function nr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(yn(),tn(c,n,8,[t.el,l,t,e]),vn())}}function eo(t,e){if(ut){let n=ut.provides;const r=ut.parent&&ut.parent.provides;r===n&&(n=ut.provides=Object.create(r)),n[t]=e}}function Qt(t,e,n=!1){const r=fv();if(r||Ur){let s=Ur?Ur._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}const uy=Symbol.for("v-scx"),hy=()=>Qt(uy);function to(t,e,n){return $d(t,e,n)}function $d(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:o}=n,l=et({},n),c=e&&r||!e&&i!=="post";let h;if(Zs){if(i==="sync"){const v=hy();h=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=zt,v.resume=zt,v.pause=zt,v}}const f=ut;l.call=(v,C,N)=>tn(v,f,C,N);let p=!1;i==="post"?l.scheduler=v=>{ot(v,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(v,C)=>{C?v():oc(v)}),l.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,f&&(v.id=f.uid,v.i=f))};const m=iy(t,e,l);return Zs&&(h?h.push(m):c&&m()),m}function fy(t,e,n){const r=this.proxy,s=Ue(t)?t.includes(".")?Hd(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=gi(this),l=$d(s,i.bind(r),n);return o(),l}function Hd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Wd=Symbol("_vte"),dy=t=>t.__isTeleport,Ls=t=>t&&(t.disabled||t.disabled===""),eh=t=>t&&(t.defer||t.defer===""),th=t=>typeof SVGElement<"u"&&t instanceof SVGElement,nh=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,hl=(t,e)=>{const n=t&&t.to;return Ue(n)?e?e(n):null:n},Kd={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,l,c,h){const{mc:f,pc:p,pbc:m,o:{insert:v,querySelector:C,createText:N,createComment:D}}=h,j=Ls(e.props);let{shapeFlag:M,children:q,dynamicChildren:H}=e;if(t==null){const ce=e.el=N(""),oe=e.anchor=N("");v(ce,n,r),v(oe,n,r);const w=(E,A)=>{M&16&&f(q,E,A,s,i,o,l,c)},y=()=>{const E=e.target=hl(e.props,C),A=fl(E,e,N,v);E&&(o!=="svg"&&th(E)?o="svg":o!=="mathml"&&nh(E)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(E),j||(w(E,A),no(e,!1)))};j&&(w(n,oe),no(e,!0)),eh(e.props)?(e.el.__isMounted=!1,ot(()=>{y(),delete e.el.__isMounted},i)):y()}else{if(eh(e.props)&&t.el.__isMounted===!1){ot(()=>{Kd.process(t,e,n,r,s,i,o,l,c,h)},i);return}e.el=t.el,e.targetStart=t.targetStart;const ce=e.anchor=t.anchor,oe=e.target=t.target,w=e.targetAnchor=t.targetAnchor,y=Ls(t.props),E=y?n:oe,A=y?ce:w;if(o==="svg"||th(oe)?o="svg":(o==="mathml"||nh(oe))&&(o="mathml"),H?(m(t.dynamicChildren,H,E,s,i,o,l),uc(t,e,!0)):c||p(t,e,E,A,s,i,o,l,!1),j)y?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Ki(e,n,ce,h,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const R=e.target=hl(e.props,C);R&&Ki(e,R,null,h,0)}else y&&Ki(e,oe,w,h,1);no(e,j)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:l,anchor:c,targetStart:h,targetAnchor:f,target:p,props:m}=t;if(p&&(s(h),s(f)),i&&s(c),o&16){const v=i||!Ls(m);for(let C=0;C<l.length;C++){const N=l[C];r(N,e,n,v,!!N.dynamicChildren)}}},move:Ki,hydrate:py};function Ki(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:h,props:f}=t,p=i===2;if(p&&r(o,e,n),(!p||Ls(f))&&c&16)for(let m=0;m<h.length;m++)s(h[m],e,n,2);p&&r(l,e,n)}function py(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:l,querySelector:c,insert:h,createText:f}},p){function m(D,j){let M=j;for(;M;){if(M&&M.nodeType===8){if(M.data==="teleport start anchor")e.targetStart=M;else if(M.data==="teleport anchor"){e.targetAnchor=M,D._lpa=e.targetAnchor&&o(e.targetAnchor);break}}M=o(M)}}function v(D,j){j.anchor=p(o(D),j,l(D),n,r,s,i)}const C=e.target=hl(e.props,c),N=Ls(e.props);if(C){const D=C._lpa||C.firstChild;e.shapeFlag&16&&(N?(v(t,e),m(C,D),e.targetAnchor||fl(C,e,f,h,l(t)===C?t:null)):(e.anchor=o(t),m(C,D),e.targetAnchor||fl(C,e,f,h),p(D&&o(D),e,C,n,r,s,i))),no(e,N)}else N&&e.shapeFlag&16&&(v(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const oS=Kd;function no(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function fl(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[Wd]=o,t&&(r(i,t,s),r(o,t,s)),o}const gy=Symbol("_leaveCb");function ac(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ac(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Gd(t,e){return fe(t)?et({name:t.name},e,{setup:t}):t}function zd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function rh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const vo=new WeakMap;function Fs(t,e,n,r,s=!1){if(ae(t)){t.forEach((N,D)=>Fs(N,e&&(ae(e)?e[D]:e),n,r,s));return}if(Us(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Fs(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ea(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,f=l.refs===Ce?l.refs={}:l.refs,p=l.setupState,m=Ae(p),v=p===Ce?dd:N=>rh(f,N)?!1:Re(m,N),C=(N,D)=>!(D&&rh(f,D));if(h!=null&&h!==c){if(sh(e),Ue(h))f[h]=null,v(h)&&(p[h]=null);else if(ht(h)){const N=e;C(h,N.k)&&(h.value=null),N.k&&(f[N.k]=null)}}if(fe(c))pi(c,l,12,[o,f]);else{const N=Ue(c),D=ht(c);if(N||D){const j=()=>{if(t.f){const M=N?v(c)?p[c]:f[c]:C()||!t.k?c.value:f[t.k];if(s)ae(M)&&zl(M,i);else if(ae(M))M.includes(i)||M.push(i);else if(N)f[c]=[i],v(c)&&(p[c]=f[c]);else{const q=[i];C(c,t.k)&&(c.value=q),t.k&&(f[t.k]=q)}}else N?(f[c]=o,v(c)&&(p[c]=o)):D&&(C(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const M=()=>{j(),vo.delete(t)};M.id=-1,vo.set(t,M),ot(M,n)}else sh(t),j()}}}function sh(t){const e=vo.get(t);e&&(e.flags|=8,vo.delete(t))}Go().requestIdleCallback;Go().cancelIdleCallback;const Us=t=>!!t.type.__asyncLoader,Qd=t=>t.type.__isKeepAlive;function my(t,e){Yd(t,"a",e)}function _y(t,e){Yd(t,"da",e)}function Yd(t,e,n=ut){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Jo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Qd(s.parent.vnode)&&yy(r,e,n,s),s=s.parent}}function yy(t,e,n,r){const s=Jo(e,t,r,!0);Jd(()=>{zl(r[e],s)},n)}function Jo(t,e,n=ut,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{yn();const l=gi(n),c=tn(e,n,t,o);return l(),vn(),c});return r?s.unshift(i):s.push(i),i}}const Rn=t=>(e,n=ut)=>{(!Zs||t==="sp")&&Jo(t,(...r)=>e(...r),n)},vy=Rn("bm"),Ey=Rn("m"),Ty=Rn("bu"),Iy=Rn("u"),wy=Rn("bum"),Jd=Rn("um"),Ay=Rn("sp"),Ry=Rn("rtg"),by=Rn("rtc");function Sy(t,e=ut){Jo("ec",t,e)}const Py="components";function Cy(t,e){return Oy(Py,t,!0,e)||t}const Ny=Symbol.for("v-ndc");function Oy(t,e,n=!0,r=!1){const s=bt||ut;if(s){const i=s.type;{const l=_v(i,!1);if(l&&(l===e||l===yt(e)||l===Wo(yt(e))))return i}const o=ih(s[t]||i[t],e)||ih(s.appContext[t],e);return!o&&r?i:o}}function ih(t,e){return t&&(t[e]||t[yt(e)]||t[Wo(yt(e))])}function aS(t,e,n,r){let s;const i=n,o=ae(t);if(o||Ue(t)){const l=o&&ur(t);let c=!1,h=!1;l&&(c=!Vt(t),h=En(t),t=zo(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?h?Wr(Ut(t[f])):Ut(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Se(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const dl=t=>t?vp(t)?ea(t):dl(t.parent):null,Bs=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>dl(t.parent),$root:t=>dl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Zd(t),$forceUpdate:t=>t.f||(t.f=()=>{oc(t.update)}),$nextTick:t=>t.n||(t.n=ic.bind(t.proxy)),$watch:t=>fy.bind(t)}),ja=(t,e)=>t!==Ce&&!t.__isScriptSetup&&Re(t,e),Dy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ja(r,e))return o[e]=1,r[e];if(s!==Ce&&Re(s,e))return o[e]=2,s[e];if(Re(i,e))return o[e]=3,i[e];if(n!==Ce&&Re(n,e))return o[e]=4,n[e];pl&&(o[e]=0)}}const h=Bs[e];let f,p;if(h)return e==="$attrs"&&lt(t.attrs,"get",""),h(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Ce&&Re(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Re(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ja(s,e)?(s[e]=n,!0):r!==Ce&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||t!==Ce&&l[0]!=="$"&&Re(t,l)||ja(e,l)||Re(i,l)||Re(r,l)||Re(Bs,l)||Re(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function oh(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let pl=!0;function Vy(t){const e=Zd(t),n=t.proxy,r=t.ctx;pl=!1,e.beforeCreate&&ah(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:m,beforeUpdate:v,updated:C,activated:N,deactivated:D,beforeDestroy:j,beforeUnmount:M,destroyed:q,unmounted:H,render:ce,renderTracked:oe,renderTriggered:w,errorCaptured:y,serverPrefetch:E,expose:A,inheritAttrs:R,components:S,directives:T,filters:dt}=e;if(h&&ky(h,r,null),o)for(const ye in o){const ge=o[ye];fe(ge)&&(r[ye]=ge.bind(n))}if(s){const ye=s.call(n,n);Se(ye)&&(t.data=Qo(ye))}if(pl=!0,i)for(const ye in i){const ge=i[ye],It=fe(ge)?ge.bind(n,n):fe(ge.get)?ge.get.bind(n,n):zt,kt=!fe(ge)&&fe(ge.set)?ge.set.bind(n):zt,Nt=Mt({get:It,set:kt});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:Ve=>Nt.value=Ve})}if(l)for(const ye in l)Xd(l[ye],r,n,ye);if(c){const ye=fe(c)?c.call(n):c;Reflect.ownKeys(ye).forEach(ge=>{eo(ge,ye[ge])})}f&&ah(f,t,"c");function Be(ye,ge){ae(ge)?ge.forEach(It=>ye(It.bind(n))):ge&&ye(ge.bind(n))}if(Be(vy,p),Be(Ey,m),Be(Ty,v),Be(Iy,C),Be(my,N),Be(_y,D),Be(Sy,y),Be(by,oe),Be(Ry,w),Be(wy,M),Be(Jd,H),Be(Ay,E),ae(A))if(A.length){const ye=t.exposed||(t.exposed={});A.forEach(ge=>{Object.defineProperty(ye,ge,{get:()=>n[ge],set:It=>n[ge]=It,enumerable:!0})})}else t.exposed||(t.exposed={});ce&&t.render===zt&&(t.render=ce),R!=null&&(t.inheritAttrs=R),S&&(t.components=S),T&&(t.directives=T),E&&zd(t)}function ky(t,e,n=zt){ae(t)&&(t=gl(t));for(const r in t){const s=t[r];let i;Se(s)?"default"in s?i=Qt(s.from||r,s.default,!0):i=Qt(s.from||r):i=Qt(s),ht(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ah(t,e,n){tn(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xd(t,e,n,r){let s=r.includes(".")?Hd(n,r):()=>n[r];if(Ue(t)){const i=e[t];fe(i)&&to(s,i)}else if(fe(t))to(s,t.bind(n));else if(Se(t))if(ae(t))t.forEach(i=>Xd(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&to(s,i,t)}}function Zd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Eo(c,h,o,!0)),Eo(c,e,o)),Se(e)&&i.set(e,c),c}function Eo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Eo(t,i,n,!0),s&&s.forEach(o=>Eo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=xy[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const xy={data:lh,props:ch,emits:ch,methods:Ps,computed:Ps,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:Ps,directives:Ps,watch:Ly,provide:lh,inject:My};function lh(t,e){return e?t?function(){return et(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function My(t,e){return Ps(gl(t),gl(e))}function gl(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ps(t,e){return t?et(Object.create(null),t,e):e}function ch(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:et(Object.create(null),oh(t),oh(e??{})):e}function Ly(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const r in e)n[r]=gt(t[r],e[r]);return n}function ep(){return{app:null,config:{isNativeTag:dd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fy=0;function Uy(t,e){return function(r,s=null){fe(r)||(r=et({},r)),s!=null&&!Se(s)&&(s=null);const i=ep(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Fy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:vv,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&fe(f.install)?(o.add(f),f.install(h,...p)):fe(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,m){if(!c){const v=h._ceVNode||Tt(r,s);return v.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(v,f,m),c=!0,h._container=f,f.__vue_app__=h,ea(v.component)}},onUnmount(f){l.push(f)},unmount(){c&&(tn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Ur;Ur=h;try{return f()}finally{Ur=p}}};return h}}let Ur=null;const By=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${yt(e)}Modifiers`]||t[`${_r(e)}Modifiers`];function jy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&By(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ue(f)?f.trim():f)),o.number&&(s=n.map(Ko)));let l,c=r[l=Ma(e)]||r[l=Ma(yt(e))];!c&&i&&(c=r[l=Ma(_r(e))]),c&&tn(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,tn(h,t,6,s)}}const qy=new WeakMap;function tp(t,e,n=!1){const r=n?qy:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!fe(t)){const c=h=>{const f=tp(h,e,!0);f&&(l=!0,et(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Se(t)&&r.set(t,null),null):(ae(i)?i.forEach(c=>o[c]=null):et(o,i),Se(t)&&r.set(t,o),o)}function Xo(t,e){return!t||!qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,_r(e))||Re(t,e))}function uh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:f,props:p,data:m,setupState:v,ctx:C,inheritAttrs:N}=t,D=yo(t);let j,M;try{if(n.shapeFlag&4){const H=s||r,ce=H;j=Kt(h.call(ce,H,f,p,v,m,C)),M=l}else{const H=e;j=Kt(H.length>1?H(p,{attrs:l,slots:o,emit:c}):H(p,null)),M=e.props?l:$y(l)}}catch(H){js.length=0,Yo(H,t,1),j=Tt(Gn)}let q=j;if(M&&N!==!1){const H=Object.keys(M),{shapeFlag:ce}=q;H.length&&ce&7&&(i&&H.some(Gl)&&(M=Hy(M,i)),q=Kr(q,M,!1,!0))}return n.dirs&&(q=Kr(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&ac(q,n.transition),j=q,yo(D),j}const $y=t=>{let e;for(const n in t)(n==="class"||n==="style"||qo(n))&&((e||(e={}))[n]=t[n]);return e},Hy=(t,e)=>{const n={};for(const r in t)(!Gl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Wy(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?hh(r,o,h):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(np(o,r,m)&&!Xo(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?hh(r,o,h):!0:!!o;return!1}function hh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(np(e,t,i)&&!Xo(n,i))return!0}return!1}function np(t,e,n){const r=t[n],s=e[n];return n==="style"&&Se(r)&&Se(s)?!di(r,s):r!==s}function Ky({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const rp={},sp=()=>Object.create(rp),ip=t=>Object.getPrototypeOf(t)===rp;function Gy(t,e,n,r=!1){const s={},i=sp();t.propsDefaults=Object.create(null),op(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:xd(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function zy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ae(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Xo(t.emitsOptions,m))continue;const v=e[m];if(c)if(Re(i,m))v!==i[m]&&(i[m]=v,h=!0);else{const C=yt(m);s[C]=ml(c,l,C,v,t,!1)}else v!==i[m]&&(i[m]=v,h=!0)}}}else{op(t,e,s,i)&&(h=!0);let f;for(const p in l)(!e||!Re(e,p)&&((f=_r(p))===p||!Re(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=ml(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&hn(t.attrs,"set","")}function op(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ks(c))continue;const h=e[c];let f;s&&Re(s,f=yt(c))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:Xo(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=Ae(n),h=l||Ce;for(let f=0;f<i.length;f++){const p=i[f];n[p]=ml(s,c,p,h[p],t,!Re(h,p))}}return o}function ml(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Re(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&fe(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=gi(s);r=h[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===_r(n))&&(r=!0))}return r}const Qy=new WeakMap;function ap(t,e,n=!1){const r=n?Qy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!fe(t)){const f=p=>{c=!0;const[m,v]=ap(p,e,!0);et(o,m),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Se(t)&&r.set(t,xr),xr;if(ae(i))for(let f=0;f<i.length;f++){const p=yt(i[f]);fh(p)&&(o[p]=Ce)}else if(i)for(const f in i){const p=yt(f);if(fh(p)){const m=i[f],v=o[p]=ae(m)||fe(m)?{type:m}:et({},m),C=v.type;let N=!1,D=!0;if(ae(C))for(let j=0;j<C.length;++j){const M=C[j],q=fe(M)&&M.name;if(q==="Boolean"){N=!0;break}else q==="String"&&(D=!1)}else N=fe(C)&&C.name==="Boolean";v[0]=N,v[1]=D,(N||Re(v,"default"))&&l.push(p)}}const h=[o,l];return Se(t)&&r.set(t,h),h}function fh(t){return t[0]!=="$"&&!ks(t)}const lc=t=>t==="_"||t==="_ctx"||t==="$stable",cc=t=>ae(t)?t.map(Kt):[Kt(t)],Yy=(t,e,n)=>{if(e._n)return e;const r=cy((...s)=>cc(e(...s)),n);return r._c=!1,r},lp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(lc(s))continue;const i=t[s];if(fe(i))e[s]=Yy(s,i,r);else if(i!=null){const o=cc(i);e[s]=()=>o}}},cp=(t,e)=>{const n=cc(e);t.slots.default=()=>n},up=(t,e,n)=>{for(const r in e)(n||!lc(r))&&(t[r]=e[r])},Jy=(t,e,n)=>{const r=t.slots=sp();if(t.vnode.shapeFlag&32){const s=e._;s?(up(r,e,n),n&&_d(r,"_",s,!0)):lp(e,r)}else e&&cp(t,e)},Xy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:up(s,e,n):(i=!e.$stable,lp(e,s)),o=e}else e&&(cp(t,e),o={default:1});if(i)for(const l in s)!lc(l)&&o[l]==null&&delete s[l]},ot=rv;function Zy(t){return ev(t)}function ev(t,e){const n=Go();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:m,setScopeId:v=zt,insertStaticContent:C}=t,N=(_,I,b,V=null,L=null,x=null,G=void 0,K=null,$=!!I.dynamicChildren)=>{if(_===I)return;_&&!Rs(_,I)&&(V=k(_),Ve(_,L,x,!0),_=null),I.patchFlag===-2&&($=!1,I.dynamicChildren=null);const{type:U,ref:ne,shapeFlag:Q}=I;switch(U){case Zo:D(_,I,b,V);break;case Gn:j(_,I,b,V);break;case ro:_==null&&M(I,b,V,G);break;case cn:S(_,I,b,V,L,x,G,K,$);break;default:Q&1?ce(_,I,b,V,L,x,G,K,$):Q&6?T(_,I,b,V,L,x,G,K,$):(Q&64||Q&128)&&U.process(_,I,b,V,L,x,G,K,$,Z)}ne!=null&&L?Fs(ne,_&&_.ref,x,I||_,!I):ne==null&&_&&_.ref!=null&&Fs(_.ref,null,x,_,!0)},D=(_,I,b,V)=>{if(_==null)r(I.el=l(I.children),b,V);else{const L=I.el=_.el;I.children!==_.children&&h(L,I.children)}},j=(_,I,b,V)=>{_==null?r(I.el=c(I.children||""),b,V):I.el=_.el},M=(_,I,b,V)=>{[_.el,_.anchor]=C(_.children,I,b,V,_.el,_.anchor)},q=({el:_,anchor:I},b,V)=>{let L;for(;_&&_!==I;)L=m(_),r(_,b,V),_=L;r(I,b,V)},H=({el:_,anchor:I})=>{let b;for(;_&&_!==I;)b=m(_),s(_),_=b;s(I)},ce=(_,I,b,V,L,x,G,K,$)=>{if(I.type==="svg"?G="svg":I.type==="math"&&(G="mathml"),_==null)oe(I,b,V,L,x,G,K,$);else{const U=_.el&&_.el._isVueCE?_.el:null;try{U&&U._beginPatch(),E(_,I,L,x,G,K,$)}finally{U&&U._endPatch()}}},oe=(_,I,b,V,L,x,G,K)=>{let $,U;const{props:ne,shapeFlag:Q,transition:ee,dirs:se}=_;if($=_.el=o(_.type,x,ne&&ne.is,ne),Q&8?f($,_.children):Q&16&&y(_.children,$,null,V,L,qa(_,x),G,K),se&&nr(_,null,V,"created"),w($,_,_.scopeId,G,V),ne){for(const de in ne)de!=="value"&&!ks(de)&&i($,de,null,ne[de],x,V);"value"in ne&&i($,"value",null,ne.value,x),(U=ne.onVnodeBeforeMount)&&$t(U,V,_)}se&&nr(_,null,V,"beforeMount");const re=tv(L,ee);re&&ee.beforeEnter($),r($,I,b),((U=ne&&ne.onVnodeMounted)||re||se)&&ot(()=>{U&&$t(U,V,_),re&&ee.enter($),se&&nr(_,null,V,"mounted")},L)},w=(_,I,b,V,L)=>{if(b&&v(_,b),V)for(let x=0;x<V.length;x++)v(_,V[x]);if(L){let x=L.subTree;if(I===x||dp(x.type)&&(x.ssContent===I||x.ssFallback===I)){const G=L.vnode;w(_,G,G.scopeId,G.slotScopeIds,L.parent)}}},y=(_,I,b,V,L,x,G,K,$=0)=>{for(let U=$;U<_.length;U++){const ne=_[U]=K?un(_[U]):Kt(_[U]);N(null,ne,I,b,V,L,x,G,K)}},E=(_,I,b,V,L,x,G)=>{const K=I.el=_.el;let{patchFlag:$,dynamicChildren:U,dirs:ne}=I;$|=_.patchFlag&16;const Q=_.props||Ce,ee=I.props||Ce;let se;if(b&&rr(b,!1),(se=ee.onVnodeBeforeUpdate)&&$t(se,b,I,_),ne&&nr(I,_,b,"beforeUpdate"),b&&rr(b,!0),(Q.innerHTML&&ee.innerHTML==null||Q.textContent&&ee.textContent==null)&&f(K,""),U?A(_.dynamicChildren,U,K,b,V,qa(I,L),x):G||ge(_,I,K,null,b,V,qa(I,L),x,!1),$>0){if($&16)R(K,Q,ee,b,L);else if($&2&&Q.class!==ee.class&&i(K,"class",null,ee.class,L),$&4&&i(K,"style",Q.style,ee.style,L),$&8){const re=I.dynamicProps;for(let de=0;de<re.length;de++){const ve=re[de],Ge=Q[ve],ze=ee[ve];(ze!==Ge||ve==="value")&&i(K,ve,Ge,ze,L,b)}}$&1&&_.children!==I.children&&f(K,I.children)}else!G&&U==null&&R(K,Q,ee,b,L);((se=ee.onVnodeUpdated)||ne)&&ot(()=>{se&&$t(se,b,I,_),ne&&nr(I,_,b,"updated")},V)},A=(_,I,b,V,L,x,G)=>{for(let K=0;K<I.length;K++){const $=_[K],U=I[K],ne=$.el&&($.type===cn||!Rs($,U)||$.shapeFlag&198)?p($.el):b;N($,U,ne,null,V,L,x,G,!0)}},R=(_,I,b,V,L)=>{if(I!==b){if(I!==Ce)for(const x in I)!ks(x)&&!(x in b)&&i(_,x,I[x],null,L,V);for(const x in b){if(ks(x))continue;const G=b[x],K=I[x];G!==K&&x!=="value"&&i(_,x,K,G,L,V)}"value"in b&&i(_,"value",I.value,b.value,L)}},S=(_,I,b,V,L,x,G,K,$)=>{const U=I.el=_?_.el:l(""),ne=I.anchor=_?_.anchor:l("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:se}=I;se&&(K=K?K.concat(se):se),_==null?(r(U,b,V),r(ne,b,V),y(I.children||[],b,ne,L,x,G,K,$)):Q>0&&Q&64&&ee&&_.dynamicChildren&&_.dynamicChildren.length===ee.length?(A(_.dynamicChildren,ee,b,L,x,G,K),(I.key!=null||L&&I===L.subTree)&&uc(_,I,!0)):ge(_,I,b,ne,L,x,G,K,$)},T=(_,I,b,V,L,x,G,K,$)=>{I.slotScopeIds=K,_==null?I.shapeFlag&512?L.ctx.activate(I,b,V,G,$):dt(I,b,V,L,x,G,$):Ct(_,I,$)},dt=(_,I,b,V,L,x,G)=>{const K=_.component=hv(_,V,L);if(Qd(_)&&(K.ctx.renderer=Z),dv(K,!1,G),K.asyncDep){if(L&&L.registerDep(K,Be,G),!_.el){const $=K.subTree=Tt(Gn);j(null,$,I,b),_.placeholder=$.el}}else Be(K,_,I,b,L,x,G)},Ct=(_,I,b)=>{const V=I.component=_.component;if(Wy(_,I,b))if(V.asyncDep&&!V.asyncResolved){ye(V,I,b);return}else V.next=I,V.update();else I.el=_.el,V.vnode=I},Be=(_,I,b,V,L,x,G)=>{const K=()=>{if(_.isMounted){let{next:Q,bu:ee,u:se,parent:re,vnode:de}=_;{const nt=hp(_);if(nt){Q&&(Q.el=de.el,ye(_,Q,G)),nt.asyncDep.then(()=>{ot(()=>{_.isUnmounted||U()},L)});return}}let ve=Q,Ge;rr(_,!1),Q?(Q.el=de.el,ye(_,Q,G)):Q=de,ee&&Zi(ee),(Ge=Q.props&&Q.props.onVnodeBeforeUpdate)&&$t(Ge,re,Q,de),rr(_,!0);const ze=uh(_),Ot=_.subTree;_.subTree=ze,N(Ot,ze,p(Ot.el),k(Ot),_,L,x),Q.el=ze.el,ve===null&&Ky(_,ze.el),se&&ot(se,L),(Ge=Q.props&&Q.props.onVnodeUpdated)&&ot(()=>$t(Ge,re,Q,de),L)}else{let Q;const{el:ee,props:se}=I,{bm:re,m:de,parent:ve,root:Ge,type:ze}=_,Ot=Us(I);rr(_,!1),re&&Zi(re),!Ot&&(Q=se&&se.onVnodeBeforeMount)&&$t(Q,ve,I),rr(_,!0);{Ge.ce&&Ge.ce._hasShadowRoot()&&Ge.ce._injectChildStyle(ze,_.parent?_.parent.type:void 0);const nt=_.subTree=uh(_);N(null,nt,b,V,_,L,x),I.el=nt.el}if(de&&ot(de,L),!Ot&&(Q=se&&se.onVnodeMounted)){const nt=I;ot(()=>$t(Q,ve,nt),L)}(I.shapeFlag&256||ve&&Us(ve.vnode)&&ve.vnode.shapeFlag&256)&&_.a&&ot(_.a,L),_.isMounted=!0,I=b=V=null}};_.scope.on();const $=_.effect=new Td(K);_.scope.off();const U=_.update=$.run.bind($),ne=_.job=$.runIfDirty.bind($);ne.i=_,ne.id=_.uid,$.scheduler=()=>oc(ne),rr(_,!0),U()},ye=(_,I,b)=>{I.component=_;const V=_.vnode.props;_.vnode=I,_.next=null,zy(_,I.props,V,b),Xy(_,I.children,b),yn(),Zu(_),vn()},ge=(_,I,b,V,L,x,G,K,$=!1)=>{const U=_&&_.children,ne=_?_.shapeFlag:0,Q=I.children,{patchFlag:ee,shapeFlag:se}=I;if(ee>0){if(ee&128){kt(U,Q,b,V,L,x,G,K,$);return}else if(ee&256){It(U,Q,b,V,L,x,G,K,$);return}}se&8?(ne&16&&vt(U,L,x),Q!==U&&f(b,Q)):ne&16?se&16?kt(U,Q,b,V,L,x,G,K,$):vt(U,L,x,!0):(ne&8&&f(b,""),se&16&&y(Q,b,V,L,x,G,K,$))},It=(_,I,b,V,L,x,G,K,$)=>{_=_||xr,I=I||xr;const U=_.length,ne=I.length,Q=Math.min(U,ne);let ee;for(ee=0;ee<Q;ee++){const se=I[ee]=$?un(I[ee]):Kt(I[ee]);N(_[ee],se,b,null,L,x,G,K,$)}U>ne?vt(_,L,x,!0,!1,Q):y(I,b,V,L,x,G,K,$,Q)},kt=(_,I,b,V,L,x,G,K,$)=>{let U=0;const ne=I.length;let Q=_.length-1,ee=ne-1;for(;U<=Q&&U<=ee;){const se=_[U],re=I[U]=$?un(I[U]):Kt(I[U]);if(Rs(se,re))N(se,re,b,null,L,x,G,K,$);else break;U++}for(;U<=Q&&U<=ee;){const se=_[Q],re=I[ee]=$?un(I[ee]):Kt(I[ee]);if(Rs(se,re))N(se,re,b,null,L,x,G,K,$);else break;Q--,ee--}if(U>Q){if(U<=ee){const se=ee+1,re=se<ne?I[se].el:V;for(;U<=ee;)N(null,I[U]=$?un(I[U]):Kt(I[U]),b,re,L,x,G,K,$),U++}}else if(U>ee)for(;U<=Q;)Ve(_[U],L,x,!0),U++;else{const se=U,re=U,de=new Map;for(U=re;U<=ee;U++){const Qe=I[U]=$?un(I[U]):Kt(I[U]);Qe.key!=null&&de.set(Qe.key,U)}let ve,Ge=0;const ze=ee-re+1;let Ot=!1,nt=0;const Pn=new Array(ze);for(U=0;U<ze;U++)Pn[U]=0;for(U=se;U<=Q;U++){const Qe=_[U];if(Ge>=ze){Ve(Qe,L,x,!0);continue}let Dt;if(Qe.key!=null)Dt=de.get(Qe.key);else for(ve=re;ve<=ee;ve++)if(Pn[ve-re]===0&&Rs(Qe,I[ve])){Dt=ve;break}Dt===void 0?Ve(Qe,L,x,!0):(Pn[Dt-re]=U+1,Dt>=nt?nt=Dt:Ot=!0,N(Qe,I[Dt],b,null,L,x,G,K,$),Ge++)}const hs=Ot?nv(Pn):xr;for(ve=hs.length-1,U=ze-1;U>=0;U--){const Qe=re+U,Dt=I[Qe],Si=I[Qe+1],wr=Qe+1<ne?Si.el||fp(Si):V;Pn[U]===0?N(null,Dt,b,wr,L,x,G,K,$):Ot&&(ve<0||U!==hs[ve]?Nt(Dt,b,wr,2):ve--)}}},Nt=(_,I,b,V,L=null)=>{const{el:x,type:G,transition:K,children:$,shapeFlag:U}=_;if(U&6){Nt(_.component.subTree,I,b,V);return}if(U&128){_.suspense.move(I,b,V);return}if(U&64){G.move(_,I,b,Z);return}if(G===cn){r(x,I,b);for(let Q=0;Q<$.length;Q++)Nt($[Q],I,b,V);r(_.anchor,I,b);return}if(G===ro){q(_,I,b);return}if(V!==2&&U&1&&K)if(V===0)K.beforeEnter(x),r(x,I,b),ot(()=>K.enter(x),L);else{const{leave:Q,delayLeave:ee,afterLeave:se}=K,re=()=>{_.ctx.isUnmounted?s(x):r(x,I,b)},de=()=>{x._isLeaving&&x[gy](!0),Q(x,()=>{re(),se&&se()})};ee?ee(x,re,de):de()}else r(x,I,b)},Ve=(_,I,b,V=!1,L=!1)=>{const{type:x,props:G,ref:K,children:$,dynamicChildren:U,shapeFlag:ne,patchFlag:Q,dirs:ee,cacheIndex:se}=_;if(Q===-2&&(L=!1),K!=null&&(yn(),Fs(K,null,b,_,!0),vn()),se!=null&&(I.renderCache[se]=void 0),ne&256){I.ctx.deactivate(_);return}const re=ne&1&&ee,de=!Us(_);let ve;if(de&&(ve=G&&G.onVnodeBeforeUnmount)&&$t(ve,I,_),ne&6)wt(_.component,b,V);else{if(ne&128){_.suspense.unmount(b,V);return}re&&nr(_,null,I,"beforeUnmount"),ne&64?_.type.remove(_,I,b,Z,V):U&&!U.hasOnce&&(x!==cn||Q>0&&Q&64)?vt(U,I,b,!1,!0):(x===cn&&Q&384||!L&&ne&16)&&vt($,I,b),V&&ke(_)}(de&&(ve=G&&G.onVnodeUnmounted)||re)&&ot(()=>{ve&&$t(ve,I,_),re&&nr(_,null,I,"unmounted")},b)},ke=_=>{const{type:I,el:b,anchor:V,transition:L}=_;if(I===cn){Sn(b,V);return}if(I===ro){H(_);return}const x=()=>{s(b),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(_.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:K}=L,$=()=>G(b,x);K?K(_.el,x,$):$()}else x()},Sn=(_,I)=>{let b;for(;_!==I;)b=m(_),s(_),_=b;s(I)},wt=(_,I,b)=>{const{bum:V,scope:L,job:x,subTree:G,um:K,m:$,a:U}=_;dh($),dh(U),V&&Zi(V),L.stop(),x&&(x.flags|=8,Ve(G,_,I,b)),K&&ot(K,I),ot(()=>{_.isUnmounted=!0},I)},vt=(_,I,b,V=!1,L=!1,x=0)=>{for(let G=x;G<_.length;G++)Ve(_[G],I,b,V,L)},k=_=>{if(_.shapeFlag&6)return k(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const I=m(_.anchor||_.el),b=I&&I[Wd];return b?m(b):I};let Y=!1;const z=(_,I,b)=>{let V;_==null?I._vnode&&(Ve(I._vnode,null,null,!0),V=I._vnode.component):N(I._vnode||null,_,I,null,null,null,b),I._vnode=_,Y||(Y=!0,Zu(V),Bd(),Y=!1)},Z={p:N,um:Ve,m:Nt,r:ke,mt:dt,mc:y,pc:ge,pbc:A,n:k,o:t};return{render:z,hydrate:void 0,createApp:Uy(z)}}function qa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function rr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function tv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function uc(t,e,n=!1){const r=t.children,s=e.children;if(ae(r)&&ae(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=un(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&uc(o,l)),l.type===Zo&&(l.patchFlag===-1&&(l=s[i]=un(l)),l.el=o.el),l.type===Gn&&!l.el&&(l.el=o.el)}}function nv(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function hp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:hp(e)}function dh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function fp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?fp(e.subTree):null}const dp=t=>t.__isSuspense;function rv(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):ly(t)}const cn=Symbol.for("v-fgt"),Zo=Symbol.for("v-txt"),Gn=Symbol.for("v-cmt"),ro=Symbol.for("v-stc"),js=[];let St=null;function pp(t=!1){js.push(St=t?null:[])}function sv(){js.pop(),St=js[js.length-1]||null}let Xs=1;function To(t,e=!1){Xs+=t,t<0&&St&&e&&(St.hasOnce=!0)}function gp(t){return t.dynamicChildren=Xs>0?St||xr:null,sv(),Xs>0&&St&&St.push(t),t}function lS(t,e,n,r,s,i){return gp(yp(t,e,n,r,s,i,!0))}function mp(t,e,n,r,s){return gp(Tt(t,e,n,r,s,!0))}function Io(t){return t?t.__v_isVNode===!0:!1}function Rs(t,e){return t.type===e.type&&t.key===e.key}const _p=({key:t})=>t??null,so=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||ht(t)||fe(t)?{i:bt,r:t,k:e,f:!!n}:t:null);function yp(t,e=null,n=null,r=0,s=null,i=t===cn?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_p(e),ref:e&&so(e),scopeId:qd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bt};return l?(hc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ue(n)?8:16),Xs>0&&!o&&St&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&St.push(c),c}const Tt=iv;function iv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ny)&&(t=Gn),Io(t)){const l=Kr(t,e,!0);return n&&hc(l,n),Xs>0&&!i&&St&&(l.shapeFlag&6?St[St.indexOf(t)]=l:St.push(l)),l.patchFlag=-2,l}if(yv(t)&&(t=t.__vccOpts),e){e=ov(e);let{class:l,style:c}=e;l&&!Ue(l)&&(e.class=Jl(l)),Se(c)&&(sc(c)&&!ae(c)&&(c=et({},c)),e.style=Yl(c))}const o=Ue(t)?1:dp(t)?128:dy(t)?64:Se(t)?4:fe(t)?2:0;return yp(t,e,n,r,s,o,i,!0)}function ov(t){return t?sc(t)||ip(t)?et({},t):t:null}function Kr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?lv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&_p(h),ref:e&&e.ref?n&&i?ae(i)?i.concat(so(e)):[i,so(e)]:so(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==cn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Kr(t.ssContent),ssFallback:t.ssFallback&&Kr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&ac(f,c.clone(f)),f}function av(t=" ",e=0){return Tt(Zo,null,t,e)}function cS(t,e){const n=Tt(ro,null,t);return n.staticCount=e,n}function uS(t="",e=!1){return e?(pp(),mp(Gn,null,t)):Tt(Gn,null,t)}function Kt(t){return t==null||typeof t=="boolean"?Tt(Gn):ae(t)?Tt(cn,null,t.slice()):Io(t)?un(t):Tt(Zo,null,String(t))}function un(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Kr(t)}function hc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),hc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ip(e)?e._ctx=bt:s===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),r&64?(n=16,e=[av(e)]):n=8);t.children=e,t.shapeFlag|=n}function lv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Jl([e.class,r.class]));else if(s==="style")e.style=Yl([e.style,r.style]);else if(qo(s)){const i=e[s],o=r[s];o&&i!==o&&!(ae(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function $t(t,e,n,r=null){tn(t,e,7,[n,r])}const cv=ep();let uv=0;function hv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||cv,i={uid:uv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new O_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ap(r,s),emitsOptions:tp(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=jy.bind(null,i),t.ce&&t.ce(i),i}let ut=null;const fv=()=>ut||bt;let wo,_l;{const t=Go(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};wo=e("__VUE_INSTANCE_SETTERS__",n=>ut=n),_l=e("__VUE_SSR_SETTERS__",n=>Zs=n)}const gi=t=>{const e=ut;return wo(t),t.scope.on(),()=>{t.scope.off(),wo(e)}},ph=()=>{ut&&ut.scope.off(),wo(null)};function vp(t){return t.vnode.shapeFlag&4}let Zs=!1;function dv(t,e=!1,n=!1){e&&_l(e);const{props:r,children:s}=t.vnode,i=vp(t);Gy(t,r,i,e),Jy(t,s,n||e);const o=i?pv(t,e):void 0;return e&&_l(!1),o}function pv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Dy);const{setup:r}=n;if(r){yn();const s=t.setupContext=r.length>1?mv(t):null,i=gi(t),o=pi(r,t,0,[t.props,s]),l=pd(o);if(vn(),i(),(l||t.sp)&&!Us(t)&&zd(t),l){if(o.then(ph,ph),e)return o.then(c=>{gh(t,c)}).catch(c=>{Yo(c,t,0)});t.asyncDep=o}else gh(t,o)}else Ep(t)}function gh(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=Ld(e)),Ep(t)}function Ep(t,e,n){const r=t.type;t.render||(t.render=r.render||zt);{const s=gi(t);yn();try{Vy(t)}finally{vn(),s()}}}const gv={get(t,e){return lt(t,"get",""),t[e]}};function mv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,gv),slots:t.slots,emit:t.emit,expose:e}}function ea(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ld(J_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bs)return Bs[n](t)},has(e,n){return n in e||n in Bs}})):t.proxy}function _v(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function yv(t){return fe(t)&&"__vccOpts"in t}const Mt=(t,e)=>ry(t,e,Zs);function Tp(t,e,n){try{To(-1);const r=arguments.length;return r===2?Se(e)&&!ae(e)?Io(e)?Tt(t,null,[e]):Tt(t,e):Tt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Io(n)&&(n=[n]),Tt(t,e,n))}finally{To(1)}}const vv="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yl;const mh=typeof window<"u"&&window.trustedTypes;if(mh)try{yl=mh.createPolicy("vue",{createHTML:t=>t})}catch{}const Ip=yl?t=>yl.createHTML(t):t=>t,Ev="http://www.w3.org/2000/svg",Tv="http://www.w3.org/1998/Math/MathML",ln=typeof document<"u"?document:null,_h=ln&&ln.createElement("template"),Iv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?ln.createElementNS(Ev,t):e==="mathml"?ln.createElementNS(Tv,t):n?ln.createElement(t,{is:n}):ln.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ln.createTextNode(t),createComment:t=>ln.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ln.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{_h.innerHTML=Ip(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=_h.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wv=Symbol("_vtc");function Av(t,e,n){const r=t[wv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const yh=Symbol("_vod"),Rv=Symbol("_vsh"),bv=Symbol(""),Sv=/(?:^|;)\s*display\s*:/;function Pv(t,e,n){const r=t.style,s=Ue(n);let i=!1;if(n&&!s){if(e)if(Ue(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&io(r,l,"")}else for(const o in e)n[o]==null&&io(r,o,"");for(const o in n)o==="display"&&(i=!0),io(r,o,n[o])}else if(s){if(e!==n){const o=r[bv];o&&(n+=";"+o),r.cssText=n,i=Sv.test(n)}}else e&&t.removeAttribute("style");yh in t&&(t[yh]=i?r.display:"",t[Rv]&&(r.display="none"))}const vh=/\s*!important$/;function io(t,e,n){if(ae(n))n.forEach(r=>io(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Cv(t,e);vh.test(n)?t.setProperty(_r(r),n.replace(vh,""),"important"):t[r]=n}}const Eh=["Webkit","Moz","ms"],$a={};function Cv(t,e){const n=$a[e];if(n)return n;let r=yt(e);if(r!=="filter"&&r in t)return $a[e]=r;r=Wo(r);for(let s=0;s<Eh.length;s++){const i=Eh[s]+r;if(i in t)return $a[e]=i}return e}const Th="http://www.w3.org/1999/xlink";function Ih(t,e,n,r,s,i=S_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Th,e.slice(6,e.length)):t.setAttributeNS(Th,e,n):n==null||i&&!yd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":en(n)?String(n):n)}function wh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ip(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=yd(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function or(t,e,n,r){t.addEventListener(e,n,r)}function Nv(t,e,n,r){t.removeEventListener(e,n,r)}const Ah=Symbol("_vei");function Ov(t,e,n,r,s=null){const i=t[Ah]||(t[Ah]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=Dv(e);if(r){const h=i[e]=xv(r,s);or(t,l,h,c)}else o&&(Nv(t,l,o,c),i[e]=void 0)}}const Rh=/(?:Once|Passive|Capture)$/;function Dv(t){let e;if(Rh.test(t)){e={};let r;for(;r=t.match(Rh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_r(t.slice(2)),e]}let Ha=0;const Vv=Promise.resolve(),kv=()=>Ha||(Vv.then(()=>Ha=0),Ha=Date.now());function xv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;tn(Mv(r,n.value),e,5,[r])};return n.value=t,n.attached=kv(),n}function Mv(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const bh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Lv=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Av(t,r,o):e==="style"?Pv(t,n,r):qo(e)?Gl(e)||Ov(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Fv(t,e,r,o))?(wh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ih(t,e,r,o,i,e!=="value")):t._isVueCE&&(Uv(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ue(r)))?wh(t,yt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ih(t,e,r,o))};function Fv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&bh(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return bh(e)&&Ue(n)?!1:e in t}function Uv(t,e){const n=t._def.props;if(!n)return!1;const r=yt(e);return Array.isArray(n)?n.some(s=>yt(s)===r):Object.keys(n).some(s=>yt(s)===r)}const Ao=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>Zi(e,n):e};function Bv(t){t.target.composing=!0}function Sh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Br=Symbol("_assign");function Ph(t,e,n){return e&&(t=t.trim()),n&&(t=Ko(t)),t}const hS={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Br]=Ao(s);const i=r||s.props&&s.props.type==="number";or(t,e?"change":"input",o=>{o.target.composing||t[Br](Ph(t.value,n,i))}),(n||i)&&or(t,"change",()=>{t.value=Ph(t.value,n,i)}),e||(or(t,"compositionstart",Bv),or(t,"compositionend",Sh),or(t,"change",Sh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Br]=Ao(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ko(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},fS={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=$o(e);or(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ko(Ro(o)):Ro(o));t[Br](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,ic(()=>{t._assigning=!1})}),t[Br]=Ao(r)},mounted(t,{value:e}){Ch(t,e)},beforeUpdate(t,e,n){t[Br]=Ao(n)},updated(t,{value:e}){t._assigning||Ch(t,e)}};function Ch(t,e){const n=t.multiple,r=ae(e);if(!(n&&!r&&!$o(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Ro(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(h=>String(h)===String(l)):o.selected=C_(e,l)>-1}else o.selected=e.has(l);else if(di(Ro(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ro(t){return"_value"in t?t._value:t.value}const jv=["ctrl","shift","alt","meta"],qv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>jv.some(n=>t[`${n}Key`]&&!e.includes(n))},dS=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=qv[e[o]];if(l&&l(s,e))return}return t(s,...i)})},$v=et({patchProp:Lv},Iv);let Nh;function Hv(){return Nh||(Nh=Zy($v))}const Wv=(...t)=>{const e=Hv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Gv(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Kv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Kv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Gv(t){return Ue(t)?document.querySelector(t):t}const zv=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Qv={};function Yv(t,e){const n=Cy("router-view");return pp(),mp(n)}const Jv=zv(Qv,[["render",Yv]]),Xv="modulepreload",Zv=function(t){return"/admin/dist/"+t},Oh={},Dh=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=Zv(c),c in Oh)return;Oh[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":Xv,h||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((m,v)=>{p.addEventListener("load",m),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Nr=typeof document<"u";function wp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function eE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&wp(t.default)}const we=Object.assign;function Wa(t,e){const n={};for(const r in e){const s=e[r];n[r]=Bt(s)?s.map(t):t(s)}return n}const qs=()=>{},Bt=Array.isArray;function Vh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Ap=/#/g,tE=/&/g,nE=/\//g,rE=/=/g,sE=/\?/g,Rp=/\+/g,iE=/%5B/g,oE=/%5D/g,bp=/%5E/g,aE=/%60/g,Sp=/%7B/g,lE=/%7C/g,Pp=/%7D/g,cE=/%20/g;function fc(t){return t==null?"":encodeURI(""+t).replace(lE,"|").replace(iE,"[").replace(oE,"]")}function uE(t){return fc(t).replace(Sp,"{").replace(Pp,"}").replace(bp,"^")}function vl(t){return fc(t).replace(Rp,"%2B").replace(cE,"+").replace(Ap,"%23").replace(tE,"%26").replace(aE,"`").replace(Sp,"{").replace(Pp,"}").replace(bp,"^")}function hE(t){return vl(t).replace(rE,"%3D")}function fE(t){return fc(t).replace(Ap,"%23").replace(sE,"%3F")}function dE(t){return fE(t).replace(nE,"%2F")}function ei(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const pE=/\/$/,gE=t=>t.replace(pE,"");function Ka(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=e.slice(0,c),i=e.slice(c,l>0?l:e.length),s=t(i.slice(1))),l>=0&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=vE(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:ei(o)}}function mE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function kh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function _E(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Gr(e.matched[r],n.matched[s])&&Cp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Gr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Cp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!yE(t[n],e[n]))return!1;return!0}function yE(t,e){return Bt(t)?xh(t,e):Bt(e)?xh(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function xh(t,e){return Bt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function vE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Dn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let El=function(t){return t.pop="pop",t.push="push",t}({}),Ga=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function EE(t){if(!t)if(Nr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),gE(t)}const TE=/^[^#]+#/;function IE(t,e){return t.replace(TE,"#")+e}function wE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ta=()=>({left:window.scrollX,top:window.scrollY});function AE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=wE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Mh(t,e){return(history.state?history.state.position-e:-1)+t}const Tl=new Map;function RE(t,e){Tl.set(t,e)}function bE(t){const e=Tl.get(t);return Tl.delete(t),e}function SE(t){return typeof t=="string"||t&&typeof t=="object"}function Np(t){return typeof t=="string"||typeof t=="symbol"}let Le=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const Op=Symbol("");Le.MATCHER_NOT_FOUND+"",Le.NAVIGATION_GUARD_REDIRECT+"",Le.NAVIGATION_ABORTED+"",Le.NAVIGATION_CANCELLED+"",Le.NAVIGATION_DUPLICATED+"";function zr(t,e){return we(new Error,{type:t,[Op]:!0},e)}function an(t,e){return t instanceof Error&&Op in t&&(e==null||!!(t.type&e))}const PE=["params","query","hash"];function CE(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of PE)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function NE(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Rp," "),i=s.indexOf("="),o=ei(i<0?s:s.slice(0,i)),l=i<0?null:ei(s.slice(i+1));if(o in e){let c=e[o];Bt(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Lh(t){let e="";for(let n in t){const r=t[n];if(n=hE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Bt(r)?r.map(s=>s&&vl(s)):[r&&vl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function OE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Bt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const DE=Symbol(""),Fh=Symbol(""),na=Symbol(""),Dp=Symbol(""),Il=Symbol("");function bs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function xn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(zr(Le.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?c(m):SE(m)?c(zr(Le.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function za(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(wp(c)){const h=(c.__vccOpts||c)[e];h&&i.push(xn(h,n,r,o,l,s))}else{let h=c();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=eE(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const m=(p.__vccOpts||p)[e];return m&&xn(m,n,r,o,l,s)()}))}}return i}function VE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>Gr(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>Gr(h,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let kE=()=>location.protocol+"//"+location.host;function Vp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),kh(l,"")}return kh(n,t)+r+s}function xE(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const v=Vp(t,location),C=n.value,N=e.value;let D=0;if(m){if(n.value=v,e.value=m,o&&o===C){o=null;return}D=N?m.position-N.position:0}else r(v);s.forEach(j=>{j(n.value,C,{delta:D,type:El.pop,direction:D?D>0?Ga.forward:Ga.back:Ga.unknown})})};function c(){o=n.value}function h(m){s.push(m);const v=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(v),v}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(we({},m.state,{scroll:ta()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:c,listen:h,destroy:p}}function Uh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ta():null}}function ME(t){const{history:e,location:n}=window,r={value:Vp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:kE()+t+c;try{e[f?"replaceState":"pushState"](h,"",m),s.value=h}catch(v){console.error(v),n[f?"replace":"assign"](m)}}function o(c,h){i(c,we({},e.state,Uh(s.value.back,c,s.value.forward,!0),h,{position:s.value.position}),!0),r.value=c}function l(c,h){const f=we({},s.value,e.state,{forward:c,scroll:ta()});i(f.current,f,!0),i(c,we({},Uh(r.value,c,null),{position:f.position+1},h),!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function LE(t){t=EE(t);const e=ME(t),n=xE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:IE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let ar=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var $e=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}($e||{});const FE={type:ar.Static,value:""},UE=/[a-zA-Z0-9_]/;function BE(t){if(!t)return[[]];if(t==="/")return[[FE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${h}": ${v}`)}let n=$e.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",f="";function p(){h&&(n===$e.Static?i.push({type:ar.Static,value:h}):n===$e.Param||n===$e.ParamRegExp||n===$e.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:ar.Param,value:h,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==$e.ParamRegExp){r=n,n=$e.EscapeNext;continue}switch(n){case $e.Static:c==="/"?(h&&p(),o()):c===":"?(p(),n=$e.Param):m();break;case $e.EscapeNext:m(),n=r;break;case $e.Param:c==="("?n=$e.ParamRegExp:UE.test(c)?m():(p(),n=$e.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case $e.ParamRegExp:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=$e.ParamRegExpEnd:f+=c;break;case $e.ParamRegExpEnd:p(),n=$e.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===$e.ParamRegExp&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}const Bh="[^/]+?",jE={sensitive:!1,strict:!1,start:!0,end:!0};var mt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(mt||{});const qE=/[.+*?^${}()[\]/\\]/g;function $E(t,e){const n=we({},jE,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[mt.Root];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let v=mt.Segment+(n.sensitive?mt.BonusCaseSensitive:0);if(m.type===ar.Static)p||(s+="/"),s+=m.value.replace(qE,"\\$&"),v+=mt.Static;else if(m.type===ar.Param){const{value:C,repeatable:N,optional:D,regexp:j}=m;i.push({name:C,repeatable:N,optional:D});const M=j||Bh;if(M!==Bh){v+=mt.BonusCustomRegExp;try{`${M}`}catch(H){throw new Error(`Invalid custom RegExp for param "${C}" (${M}): `+H.message)}}let q=N?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;p||(q=D&&h.length<2?`(?:/${q})`:"/"+q),D&&(q+="?"),s+=q,v+=mt.Dynamic,D&&(v+=mt.BonusOptional),N&&(v+=mt.BonusRepeatable),M===".*"&&(v+=mt.BonusWildcard)}f.push(v)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=mt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const f=h.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const v=f[m]||"",C=i[m-1];p[C.name]=v&&C.repeatable?v.split("/"):v}return p}function c(h){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const v of m)if(v.type===ar.Static)f+=v.value;else if(v.type===ar.Param){const{value:C,repeatable:N,optional:D}=v,j=C in h?h[C]:"";if(Bt(j)&&!N)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const M=Bt(j)?j.join("/"):j;if(!M)if(D)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=M}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function HE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===mt.Static+mt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===mt.Static+mt.Segment?1:-1:0}function kp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=HE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(jh(r))return 1;if(jh(s))return-1}return s.length-r.length}function jh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const WE={strict:!1,end:!0,sensitive:!1};function KE(t,e,n){const r=$E(BE(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function GE(t,e){const n=[],r=new Map;e=Vh(WE,e);function s(p){return r.get(p)}function i(p,m,v){const C=!v,N=$h(p);N.aliasOf=v&&v.record;const D=Vh(e,p),j=[N];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const ce of H)j.push($h(we({},N,{components:v?v.record.components:N.components,path:ce,aliasOf:v?v.record:N})))}let M,q;for(const H of j){const{path:ce}=H;if(m&&ce[0]!=="/"){const oe=m.record.path,w=oe[oe.length-1]==="/"?"":"/";H.path=m.record.path+(ce&&w+ce)}if(M=KE(H,m,D),v?v.alias.push(M):(q=q||M,q!==M&&q.alias.push(M),C&&p.name&&!Hh(M)&&o(p.name)),xp(M)&&c(M),N.children){const oe=N.children;for(let w=0;w<oe.length;w++)i(oe[w],M,v&&v.children[w])}v=v||M}return q?()=>{o(q)}:qs}function o(p){if(Np(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=YE(p,n);n.splice(m,0,p),p.record.name&&!Hh(p)&&r.set(p.record.name,p)}function h(p,m){let v,C={},N,D;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw zr(Le.MATCHER_NOT_FOUND,{location:p});D=v.record.name,C=we(qh(m.params,v.keys.filter(q=>!q.optional).concat(v.parent?v.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&qh(p.params,v.keys.map(q=>q.name))),N=v.stringify(C)}else if(p.path!=null)N=p.path,v=n.find(q=>q.re.test(N)),v&&(C=v.parse(N),D=v.record.name);else{if(v=m.name?r.get(m.name):n.find(q=>q.re.test(m.path)),!v)throw zr(Le.MATCHER_NOT_FOUND,{location:p,currentLocation:m});D=v.record.name,C=we({},m.params,p.params),N=v.stringify(C)}const j=[];let M=v;for(;M;)j.unshift(M.record),M=M.parent;return{name:D,path:N,params:C,matched:j,meta:QE(j)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function qh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function $h(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:zE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function zE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Hh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function QE(t){return t.reduce((e,n)=>we(e,n.meta),{})}function YE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;kp(t,e[i])<0?r=i:n=i+1}const s=JE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function JE(t){let e=t;for(;e=e.parent;)if(xp(e)&&kp(t,e)===0)return e}function xp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Wh(t){const e=Qt(na),n=Qt(Dp),r=Mt(()=>{const c=Lr(t.to);return e.resolve(c)}),s=Mt(()=>{const{matched:c}=r.value,{length:h}=c,f=c[h-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Gr.bind(null,f));if(m>-1)return m;const v=Kh(c[h-2]);return h>1&&Kh(f)===v&&p[p.length-1].path!==v?p.findIndex(Gr.bind(null,c[h-2])):m}),i=Mt(()=>s.value>-1&&nT(n.params,r.value.params)),o=Mt(()=>s.value>-1&&s.value===n.matched.length-1&&Cp(n.params,r.value.params));function l(c={}){if(tT(c)){const h=e[Lr(t.replace)?"replace":"push"](Lr(t.to)).catch(qs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Mt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function XE(t){return t.length===1?t[0]:t}const ZE=Gd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Wh,setup(t,{slots:e}){const n=Qo(Wh(t)),{options:r}=Qt(na),s=Mt(()=>({[Gh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&XE(e.default(n));return t.custom?i:Tp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),eT=ZE;function tT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Bt(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function Kh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gh=(t,e,n)=>t??e??n,rT=Gd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Qt(Il),s=Mt(()=>t.route||r.value),i=Qt(Fh,0),o=Mt(()=>{let h=Lr(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),l=Mt(()=>s.value.matched[o.value]);eo(Fh,Mt(()=>o.value+1)),eo(DE,l),eo(Il,s);const c=X_();return to(()=>[c.value,l.value,t.name],([h,f,p],[m,v,C])=>{f&&(f.instances[p]=h,v&&v!==f&&h&&h===m&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),h&&f&&(!v||!Gr(f,v)||!m)&&(f.enterCallbacks[p]||[]).forEach(N=>N(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=l.value,m=p&&p.components[f];if(!m)return zh(n.default,{Component:m,route:h});const v=p.props[f],C=v?v===!0?h.params:typeof v=="function"?v(h):v:null,D=Tp(m,we({},C,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return zh(n.default,{Component:D,route:h})||D}}});function zh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const sT=rT;function iT(t){const e=GE(t.routes,t),n=t.parseQuery||NE,r=t.stringifyQuery||Lh,s=t.history,i=bs(),o=bs(),l=bs(),c=Z_(Dn);let h=Dn;Nr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Wa.bind(null,k=>""+k),p=Wa.bind(null,dE),m=Wa.bind(null,ei);function v(k,Y){let z,Z;return Np(k)?(z=e.getRecordMatcher(k),Z=Y):Z=k,e.addRoute(Z,z)}function C(k){const Y=e.getRecordMatcher(k);Y&&e.removeRoute(Y)}function N(){return e.getRoutes().map(k=>k.record)}function D(k){return!!e.getRecordMatcher(k)}function j(k,Y){if(Y=we({},Y||c.value),typeof k=="string"){const b=Ka(n,k,Y.path),V=e.resolve({path:b.path},Y),L=s.createHref(b.fullPath);return we(b,V,{params:m(V.params),hash:ei(b.hash),redirectedFrom:void 0,href:L})}let z;if(k.path!=null)z=we({},k,{path:Ka(n,k.path,Y.path).path});else{const b=we({},k.params);for(const V in b)b[V]==null&&delete b[V];z=we({},k,{params:p(b)}),Y.params=p(Y.params)}const Z=e.resolve(z,Y),pe=k.hash||"";Z.params=f(m(Z.params));const _=mE(r,we({},k,{hash:uE(pe),path:Z.path})),I=s.createHref(_);return we({fullPath:_,hash:pe,query:r===Lh?OE(k.query):k.query||{}},Z,{redirectedFrom:void 0,href:I})}function M(k){return typeof k=="string"?Ka(n,k,c.value.path):we({},k)}function q(k,Y){if(h!==k)return zr(Le.NAVIGATION_CANCELLED,{from:Y,to:k})}function H(k){return w(k)}function ce(k){return H(we(M(k),{replace:!0}))}function oe(k,Y){const z=k.matched[k.matched.length-1];if(z&&z.redirect){const{redirect:Z}=z;let pe=typeof Z=="function"?Z(k,Y):Z;return typeof pe=="string"&&(pe=pe.includes("?")||pe.includes("#")?pe=M(pe):{path:pe},pe.params={}),we({query:k.query,hash:k.hash,params:pe.path!=null?{}:k.params},pe)}}function w(k,Y){const z=h=j(k),Z=c.value,pe=k.state,_=k.force,I=k.replace===!0,b=oe(z,Z);if(b)return w(we(M(b),{state:typeof b=="object"?we({},pe,b.state):pe,force:_,replace:I}),Y||z);const V=z;V.redirectedFrom=Y;let L;return!_&&_E(r,Z,z)&&(L=zr(Le.NAVIGATION_DUPLICATED,{to:V,from:Z}),Nt(Z,Z,!0,!1)),(L?Promise.resolve(L):A(V,Z)).catch(x=>an(x)?an(x,Le.NAVIGATION_GUARD_REDIRECT)?x:kt(x):ge(x,V,Z)).then(x=>{if(x){if(an(x,Le.NAVIGATION_GUARD_REDIRECT))return w(we({replace:I},M(x.to),{state:typeof x.to=="object"?we({},pe,x.to.state):pe,force:_}),Y||V)}else x=S(V,Z,!0,I,pe);return R(V,Z,x),x})}function y(k,Y){const z=q(k,Y);return z?Promise.reject(z):Promise.resolve()}function E(k){const Y=Sn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(k):k()}function A(k,Y){let z;const[Z,pe,_]=VE(k,Y);z=za(Z.reverse(),"beforeRouteLeave",k,Y);for(const b of Z)b.leaveGuards.forEach(V=>{z.push(xn(V,k,Y))});const I=y.bind(null,k,Y);return z.push(I),vt(z).then(()=>{z=[];for(const b of i.list())z.push(xn(b,k,Y));return z.push(I),vt(z)}).then(()=>{z=za(pe,"beforeRouteUpdate",k,Y);for(const b of pe)b.updateGuards.forEach(V=>{z.push(xn(V,k,Y))});return z.push(I),vt(z)}).then(()=>{z=[];for(const b of _)if(b.beforeEnter)if(Bt(b.beforeEnter))for(const V of b.beforeEnter)z.push(xn(V,k,Y));else z.push(xn(b.beforeEnter,k,Y));return z.push(I),vt(z)}).then(()=>(k.matched.forEach(b=>b.enterCallbacks={}),z=za(_,"beforeRouteEnter",k,Y,E),z.push(I),vt(z))).then(()=>{z=[];for(const b of o.list())z.push(xn(b,k,Y));return z.push(I),vt(z)}).catch(b=>an(b,Le.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function R(k,Y,z){l.list().forEach(Z=>E(()=>Z(k,Y,z)))}function S(k,Y,z,Z,pe){const _=q(k,Y);if(_)return _;const I=Y===Dn,b=Nr?history.state:{};z&&(Z||I?s.replace(k.fullPath,we({scroll:I&&b&&b.scroll},pe)):s.push(k.fullPath,pe)),c.value=k,Nt(k,Y,z,I),kt()}let T;function dt(){T||(T=s.listen((k,Y,z)=>{if(!wt.listening)return;const Z=j(k),pe=oe(Z,wt.currentRoute.value);if(pe){w(we(pe,{replace:!0,force:!0}),Z).catch(qs);return}h=Z;const _=c.value;Nr&&RE(Mh(_.fullPath,z.delta),ta()),A(Z,_).catch(I=>an(I,Le.NAVIGATION_ABORTED|Le.NAVIGATION_CANCELLED)?I:an(I,Le.NAVIGATION_GUARD_REDIRECT)?(w(we(M(I.to),{force:!0}),Z).then(b=>{an(b,Le.NAVIGATION_ABORTED|Le.NAVIGATION_DUPLICATED)&&!z.delta&&z.type===El.pop&&s.go(-1,!1)}).catch(qs),Promise.reject()):(z.delta&&s.go(-z.delta,!1),ge(I,Z,_))).then(I=>{I=I||S(Z,_,!1),I&&(z.delta&&!an(I,Le.NAVIGATION_CANCELLED)?s.go(-z.delta,!1):z.type===El.pop&&an(I,Le.NAVIGATION_ABORTED|Le.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),R(Z,_,I)}).catch(qs)}))}let Ct=bs(),Be=bs(),ye;function ge(k,Y,z){kt(k);const Z=Be.list();return Z.length?Z.forEach(pe=>pe(k,Y,z)):console.error(k),Promise.reject(k)}function It(){return ye&&c.value!==Dn?Promise.resolve():new Promise((k,Y)=>{Ct.add([k,Y])})}function kt(k){return ye||(ye=!k,dt(),Ct.list().forEach(([Y,z])=>k?z(k):Y()),Ct.reset()),k}function Nt(k,Y,z,Z){const{scrollBehavior:pe}=t;if(!Nr||!pe)return Promise.resolve();const _=!z&&bE(Mh(k.fullPath,0))||(Z||!z)&&history.state&&history.state.scroll||null;return ic().then(()=>pe(k,Y,_)).then(I=>I&&AE(I)).catch(I=>ge(I,k,Y))}const Ve=k=>s.go(k);let ke;const Sn=new Set,wt={currentRoute:c,listening:!0,addRoute:v,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:N,resolve:j,options:t,push:H,replace:ce,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Be.add,isReady:It,install(k){k.component("RouterLink",eT),k.component("RouterView",sT),k.config.globalProperties.$router=wt,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Lr(c)}),Nr&&!ke&&c.value===Dn&&(ke=!0,H(s.location).catch(Z=>{}));const Y={};for(const Z in Dn)Object.defineProperty(Y,Z,{get:()=>c.value[Z],enumerable:!0});k.provide(na,wt),k.provide(Dp,xd(Y)),k.provide(Il,c);const z=k.unmount;Sn.add(k),k.unmount=function(){Sn.delete(k),Sn.size<1&&(h=Dn,T&&T(),T=null,c.value=Dn,ke=!1,ye=!1),z()}}};function vt(k){return k.reduce((Y,z)=>Y.then(()=>E(z)),Promise.resolve())}return wt}function pS(){return Qt(na)}var Qh={};/**
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
 */const Mp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},oT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Lp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,v=h&63;c||(v=64,o||(m=64)),r.push(n[f],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new aT;const m=i<<2|l>>4;if(r.push(m),h!==64){const v=l<<4&240|h>>2;if(r.push(v),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lT=function(t){const e=Mp(t);return Lp.encodeByteArray(e,!0)},bo=function(t){return lT(t).replace(/\./g,"")},Fp=function(t){try{return Lp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uT=()=>cT().__FIREBASE_DEFAULTS__,hT=()=>{if(typeof process>"u"||typeof Qh>"u")return;const t=Qh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fp(t[1]);return e&&JSON.parse(e)},ra=()=>{try{return uT()||hT()||fT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Up=t=>{var e,n;return(n=(e=ra())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dT=t=>{const e=Up(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Bp=()=>{var t;return(t=ra())===null||t===void 0?void 0:t.config},jp=t=>{var e;return(e=ra())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class pT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function gT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[bo(JSON.stringify(n)),bo(JSON.stringify(o)),""].join(".")}/**
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function _T(){var t;const e=(t=ra())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ET(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TT(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function IT(){return!_T()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wT(){try{return typeof indexedDB=="object"}catch{return!1}}function AT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const RT="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=RT,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?bT(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new bn(s,l,r)}}function bT(t,e){return t.replace(ST,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ST=/\{\$([^}]+)}/g;function PT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function So(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Yh(i)&&Yh(o)){if(!So(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Yh(t){return t!==null&&typeof t=="object"}/**
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
 */function _i(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Cs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ns(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function CT(t,e){const n=new NT(t,e);return n.subscribe.bind(n)}class NT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");OT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Qa),s.error===void 0&&(s.error=Qa),s.complete===void 0&&(s.complete=Qa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qa(){}/**
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
 */function Ke(t){return t&&t._delegate?t._delegate:t}class fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ir="[DEFAULT]";/**
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
 */class DT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kT(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:VT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VT(t){return t===ir?void 0:t}function kT(t){return t.instantiationMode==="EAGER"}/**
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
 */class xT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const MT={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},LT=_e.INFO,FT={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},UT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=FT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dc{constructor(e){this.name=e,this._logLevel=LT,this._logHandler=UT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?MT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const BT=(t,e)=>e.some(n=>t instanceof n);let Jh,Xh;function jT(){return Jh||(Jh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qT(){return Xh||(Xh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qp=new WeakMap,wl=new WeakMap,$p=new WeakMap,Ya=new WeakMap,pc=new WeakMap;function $T(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(jn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qp.set(n,t)}).catch(()=>{}),pc.set(e,t),e}function HT(t){if(wl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});wl.set(t,e)}let Al={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$p.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WT(t){Al=t(Al)}function KT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ja(this),e,...n);return $p.set(r,e.sort?e.sort():[e]),jn(r)}:qT().includes(t)?function(...e){return t.apply(Ja(this),e),jn(qp.get(this))}:function(...e){return jn(t.apply(Ja(this),e))}}function GT(t){return typeof t=="function"?KT(t):(t instanceof IDBTransaction&&HT(t),BT(t,jT())?new Proxy(t,Al):t)}function jn(t){if(t instanceof IDBRequest)return $T(t);if(Ya.has(t))return Ya.get(t);const e=GT(t);return e!==t&&(Ya.set(t,e),pc.set(e,t)),e}const Ja=t=>pc.get(t);function zT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=jn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(jn(o.result),c.oldVersion,c.newVersion,jn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const QT=["get","getKey","getAll","getAllKeys","count"],YT=["put","add","delete","clear"],Xa=new Map;function Zh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xa.get(e))return Xa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=YT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||QT.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Xa.set(e,i),i}WT(t=>({...t,get:(e,n,r)=>Zh(e,n)||t.get(e,n,r),has:(e,n)=>!!Zh(e,n)||t.has(e,n)}));/**
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
 */class JT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rl="@firebase/app",ef="0.10.13";/**
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
 */const Tn=new dc("@firebase/app"),ZT="@firebase/app-compat",eI="@firebase/analytics-compat",tI="@firebase/analytics",nI="@firebase/app-check-compat",rI="@firebase/app-check",sI="@firebase/auth",iI="@firebase/auth-compat",oI="@firebase/database",aI="@firebase/data-connect",lI="@firebase/database-compat",cI="@firebase/functions",uI="@firebase/functions-compat",hI="@firebase/installations",fI="@firebase/installations-compat",dI="@firebase/messaging",pI="@firebase/messaging-compat",gI="@firebase/performance",mI="@firebase/performance-compat",_I="@firebase/remote-config",yI="@firebase/remote-config-compat",vI="@firebase/storage",EI="@firebase/storage-compat",TI="@firebase/firestore",II="@firebase/vertexai-preview",wI="@firebase/firestore-compat",AI="firebase",RI="10.14.1";/**
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
 */const bl="[DEFAULT]",bI={[Rl]:"fire-core",[ZT]:"fire-core-compat",[tI]:"fire-analytics",[eI]:"fire-analytics-compat",[rI]:"fire-app-check",[nI]:"fire-app-check-compat",[sI]:"fire-auth",[iI]:"fire-auth-compat",[oI]:"fire-rtdb",[aI]:"fire-data-connect",[lI]:"fire-rtdb-compat",[cI]:"fire-fn",[uI]:"fire-fn-compat",[hI]:"fire-iid",[fI]:"fire-iid-compat",[dI]:"fire-fcm",[pI]:"fire-fcm-compat",[gI]:"fire-perf",[mI]:"fire-perf-compat",[_I]:"fire-rc",[yI]:"fire-rc-compat",[vI]:"fire-gcs",[EI]:"fire-gcs-compat",[TI]:"fire-fst",[wI]:"fire-fst-compat",[II]:"fire-vertex","fire-js":"fire-js",[AI]:"fire-js-all"};/**
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
 */const Po=new Map,SI=new Map,Sl=new Map;function tf(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qr(t){const e=t.name;if(Sl.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;Sl.set(e,t);for(const n of Po.values())tf(n,t);for(const n of SI.values())tf(n,t);return!0}function gc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dn(t){return t.settings!==void 0}/**
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
 */const PI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new mi("app","Firebase",PI);/**
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
 */class CI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
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
 */const ss=RI;function Hp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw qn.create("bad-app-name",{appName:String(s)});if(n||(n=Bp()),!n)throw qn.create("no-options");const i=Po.get(s);if(i){if(So(n,i.options)&&So(r,i.config))return i;throw qn.create("duplicate-app",{appName:s})}const o=new xT(s);for(const c of Sl.values())o.addComponent(c);const l=new CI(n,r,o);return Po.set(s,l),l}function Wp(t=bl){const e=Po.get(t);if(!e&&t===bl&&Bp())return Hp();if(!e)throw qn.create("no-app",{appName:t});return e}function $n(t,e,n){var r;let s=(r=bI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(l.join(" "));return}Qr(new fr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const NI="firebase-heartbeat-database",OI=1,ti="firebase-heartbeat-store";let Za=null;function Kp(){return Za||(Za=zT(NI,OI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ti)}catch(n){console.warn(n)}}}}).catch(t=>{throw qn.create("idb-open",{originalErrorMessage:t.message})})),Za}async function DI(t){try{const n=(await Kp()).transaction(ti),r=await n.objectStore(ti).get(Gp(t));return await n.done,r}catch(e){if(e instanceof bn)Tn.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function nf(t,e){try{const r=(await Kp()).transaction(ti,"readwrite");await r.objectStore(ti).put(e,Gp(t)),await r.done}catch(n){if(n instanceof bn)Tn.warn(n.message);else{const r=qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(r.message)}}}function Gp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const VI=1024,kI=30*24*60*60*1e3;class xI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=rf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=kI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Tn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rf(),{heartbeatsToSend:r,unsentEntries:s}=MI(this._heartbeatsCache.heartbeats),i=bo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Tn.warn(n),""}}}function rf(){return new Date().toISOString().substring(0,10)}function MI(t,e=VI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),sf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),sf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wT()?AT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await DI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return nf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return nf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function sf(t){return bo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function FI(t){Qr(new fr("platform-logger",e=>new JT(e),"PRIVATE")),Qr(new fr("heartbeat",e=>new xI(e),"PRIVATE")),$n(Rl,ef,t),$n(Rl,ef,"esm2017"),$n("fire-js","")}FI("");var UI="firebase",BI="10.14.1";/**
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
 */$n(UI,BI,"app");function mc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function zp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jI=zp,Qp=new mi("auth","Firebase",zp());/**
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
 */const Co=new dc("@firebase/auth");function qI(t,...e){Co.logLevel<=_e.WARN&&Co.warn(`Auth (${ss}): ${t}`,...e)}function oo(t,...e){Co.logLevel<=_e.ERROR&&Co.error(`Auth (${ss}): ${t}`,...e)}/**
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
 */function jt(t,...e){throw _c(t,...e)}function Yt(t,...e){return _c(t,...e)}function Yp(t,e,n){const r=Object.assign(Object.assign({},jI()),{[e]:n});return new mi("auth","Firebase",r).create(e,{appName:t.name})}function Hn(t){return Yp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _c(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qp.create(t,...e)}function ie(t,e,...n){if(!t)throw _c(e,...n)}function pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw oo(e),new Error(e)}function In(t,e){t||pn(e)}/**
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
 */function Pl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $I(){return of()==="http:"||of()==="https:"}function of(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function HI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($I()||vT()||"connection"in navigator)?navigator.onLine:!0}function WI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class yi{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=mT()||ET()}get(){return HI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yc(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Jp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const KI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const GI=new yi(3e4,6e4);function yr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jn(t,e,n,r,s={}){return Xp(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=_i(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return yT()||(h.referrerPolicy="no-referrer"),Jp.fetch()(Zp(t,t.config.apiHost,n,l),h)})}async function Xp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},KI),e);try{const s=new QI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Gi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Gi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Gi(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Yp(t,f,h);jt(t,f)}}catch(s){if(s instanceof bn)throw s;jt(t,"network-request-failed",{message:String(s)})}}async function sa(t,e,n,r,s={}){const i=await Jn(t,e,n,r,s);return"mfaPendingCredential"in i&&jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Zp(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?yc(t.config,s):`${t.config.apiScheme}://${s}`}function zI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class QI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Yt(this.auth,"network-request-failed")),GI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Yt(t,e,r);return s.customData._tokenResponse=n,s}function af(t){return t!==void 0&&t.enterprise!==void 0}class YI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function JI(t,e){return Jn(t,"GET","/v2/recaptchaConfig",yr(t,e))}/**
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
 */async function XI(t,e){return Jn(t,"POST","/v1/accounts:delete",e)}async function eg(t,e){return Jn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function $s(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZI(t,e=!1){const n=Ke(t),r=await n.getIdToken(e),s=vc(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:$s(el(s.auth_time)),issuedAtTime:$s(el(s.iat)),expirationTime:$s(el(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function el(t){return Number(t)*1e3}function vc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return oo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Fp(n);return s?JSON.parse(s):(oo("Failed to decode base64 JWT payload"),null)}catch(s){return oo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function lf(t){const e=vc(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ni(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&ew(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ew({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class tw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Cl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$s(this.lastLoginAt),this.creationTime=$s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function No(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ni(t,eg(n,{idToken:r}));ie(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?tg(i.providerUserInfo):[],l=rw(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Cl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function nw(t){const e=Ke(t);await No(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rw(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function tg(t){return t.map(e=>{var{providerId:n}=e,r=mc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function sw(t,e){const n=await Xp(t,{},async()=>{const r=_i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Zp(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Jp.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function iw(t,e){return Jn(t,"POST","/v2/accounts:revokeToken",yr(t,e))}/**
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
 */class jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=lf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await sw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new jr;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jr,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
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
 */function Vn(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=mc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Cl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ni(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ZI(this,e)}reload(){return nw(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await No(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dn(this.auth.app))return Promise.reject(Hn(this.auth));const e=await this.getIdToken();return await ni(this,XI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,j=(h=n.createdAt)!==null&&h!==void 0?h:void 0,M=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:q,emailVerified:H,isAnonymous:ce,providerData:oe,stsTokenManager:w}=n;ie(q&&w,e,"internal-error");const y=jr.fromJSON(this.name,w);ie(typeof q=="string",e,"internal-error"),Vn(p,e.name),Vn(m,e.name),ie(typeof H=="boolean",e,"internal-error"),ie(typeof ce=="boolean",e,"internal-error"),Vn(v,e.name),Vn(C,e.name),Vn(N,e.name),Vn(D,e.name),Vn(j,e.name),Vn(M,e.name);const E=new gn({uid:q,auth:e,email:m,emailVerified:H,displayName:p,isAnonymous:ce,photoURL:C,phoneNumber:v,tenantId:N,stsTokenManager:y,createdAt:j,lastLoginAt:M});return oe&&Array.isArray(oe)&&(E.providerData=oe.map(A=>Object.assign({},A))),D&&(E._redirectEventId=D),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new jr;s.updateFromServerResponse(n);const i=new gn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await No(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?tg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new jr;l.updateFromIdToken(r);const c=new gn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Cl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const cf=new Map;function mn(t){In(t instanceof Function,"Expected a class definition");let e=cf.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cf.set(t,e),e)}/**
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
 */class ng{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ng.type="NONE";const uf=ng;/**
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
 */function ao(t,e,n){return`firebase:${t}:${e}:${n}`}class qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ao(this.userKey,s.apiKey,i),this.fullPersistenceKey=ao("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qr(mn(uf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||mn(uf);const o=ao(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const p=gn._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new qr(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new qr(i,e,r))}}/**
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
 */function hf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(og(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lg(e))return"Blackberry";if(cg(e))return"Webos";if(sg(e))return"Safari";if((e.includes("chrome/")||ig(e))&&!e.includes("edge/"))return"Chrome";if(ag(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rg(t=ft()){return/firefox\//i.test(t)}function sg(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ig(t=ft()){return/crios\//i.test(t)}function og(t=ft()){return/iemobile/i.test(t)}function ag(t=ft()){return/android/i.test(t)}function lg(t=ft()){return/blackberry/i.test(t)}function cg(t=ft()){return/webos/i.test(t)}function Ec(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ow(t=ft()){var e;return Ec(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function aw(){return TT()&&document.documentMode===10}function ug(t=ft()){return Ec(t)||ag(t)||cg(t)||lg(t)||/windows phone/i.test(t)||og(t)}/**
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
 */function hg(t,e=[]){let n;switch(t){case"Browser":n=hf(ft());break;case"Worker":n=`${hf(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ss}/${r}`}/**
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
 */class lw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function cw(t,e={}){return Jn(t,"GET","/v2/passwordPolicy",yr(t,e))}/**
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
 */const uw=6;class hw{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:uw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class fw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ff(this),this.idTokenSubscription=new ff(this),this.beforeStateQueue=new lw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await eg(this,{idToken:e}),r=await gn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(dn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await No(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dn(this.app))return Promise.reject(Hn(this));const n=e?Ke(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dn(this.app)?Promise.reject(Hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dn(this.app)?Promise.reject(Hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cw(this),n=new hw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await iw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await qr.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function is(t){return Ke(t)}class ff{constructor(e){this.auth=e,this.observer=null,this.addObserver=CT(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ia={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dw(t){ia=t}function fg(t){return ia.loadJS(t)}function pw(){return ia.recaptchaEnterpriseScript}function gw(){return ia.gapiScript}function mw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const _w="recaptcha-enterprise",yw="NO_RECAPTCHA";class vw{constructor(e){this.type=_w,this.auth=is(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{JI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new YI(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;af(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(yw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&af(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=pw();c.length!==0&&(c+=l),fg(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function df(t,e,n,r=!1){const s=new vw(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function pf(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await df(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await df(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function Ew(t,e){const n=gc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(So(i,e??{}))return s;jt(s,"already-initialized")}return n.initialize({options:e})}function Tw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Iw(t,e,n){const r=is(t);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=dg(e),{host:o,port:l}=ww(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Aw()}function dg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ww(t){const e=dg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:gf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:gf(o)}}}function gf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Aw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Tc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}async function Rw(t,e){return Jn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function bw(t,e){return sa(t,"POST","/v1/accounts:signInWithPassword",yr(t,e))}/**
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
 */async function Sw(t,e){return sa(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))}async function Pw(t,e){return sa(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))}/**
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
 */class ri extends Tc{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ri(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ri(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pf(e,n,"signInWithPassword",bw);case"emailLink":return Sw(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pf(e,r,"signUpPassword",Rw);case"emailLink":return Pw(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function $r(t,e){return sa(t,"POST","/v1/accounts:signInWithIdp",yr(t,e))}/**
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
 */const Cw="http://localhost";class dr extends Tc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=mc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new dr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $r(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$r(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$r(e,n)}buildRequest(){const e={requestUri:Cw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_i(n)}return e}}/**
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
 */function Nw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ow(t){const e=Cs(Ns(t)).link,n=e?Cs(Ns(e)).deep_link_id:null,r=Cs(Ns(t)).deep_link_id;return(r?Cs(Ns(r)).link:null)||r||n||e||t}class Ic{constructor(e){var n,r,s,i,o,l;const c=Cs(Ns(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=Nw((s=c.mode)!==null&&s!==void 0?s:null);ie(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Ow(e);try{return new Ic(n)}catch{return null}}}/**
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
 */class os{constructor(){this.providerId=os.PROVIDER_ID}static credential(e,n){return ri._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ic.parseLink(n);return ie(r,"argument-error"),ri._fromEmailAndCode(e,r.code,r.tenantId)}}os.PROVIDER_ID="password";os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class pg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vi extends pg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Mn extends vi{constructor(){super("facebook.com")}static credential(e){return dr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mn.PROVIDER_ID="facebook.com";/**
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
 */class Ln extends vi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return dr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
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
 */class Fn extends vi{constructor(){super("github.com")}static credential(e){return dr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
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
 */class Un extends vi{constructor(){super("twitter.com")}static credential(e,n){return dr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
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
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await gn._fromIdTokenResponse(e,r,s),o=mf(r);return new Yr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=mf(r);return new Yr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function mf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Oo extends bn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Oo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Oo(e,n,r,s)}}function gg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Oo._fromErrorAndOperation(t,i,e,r):i})}async function Dw(t,e,n=!1){const r=await ni(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",r)}/**
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
 */async function Vw(t,e,n=!1){const{auth:r}=t;if(dn(r.app))return Promise.reject(Hn(r));const s="reauthenticate";try{const i=await ni(t,gg(r,s,e,t),n);ie(i.idToken,r,"internal-error");const o=vc(i.idToken);ie(o,r,"internal-error");const{sub:l}=o;return ie(t.uid===l,r,"user-mismatch"),Yr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),i}}/**
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
 */async function mg(t,e,n=!1){if(dn(t.app))return Promise.reject(Hn(t));const r="signIn",s=await gg(t,r,e),i=await Yr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function kw(t,e){return mg(is(t),e)}/**
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
 */async function xw(t){const e=is(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function gS(t,e,n){return dn(t.app)?Promise.reject(Hn(t)):kw(Ke(t),os.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xw(t),r})}function Mw(t,e,n,r){return Ke(t).onIdTokenChanged(e,n,r)}function Lw(t,e,n){return Ke(t).beforeAuthStateChanged(e,n)}function _g(t,e,n,r){return Ke(t).onAuthStateChanged(e,n,r)}function mS(t){return Ke(t).signOut()}const Do="__sak";/**
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
 */class yg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Do,"1"),this.storage.removeItem(Do),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Fw=1e3,Uw=10;class vg extends yg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ug(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);aw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Uw):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Fw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vg.type="LOCAL";const Bw=vg;/**
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
 */class Eg extends yg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Eg.type="SESSION";const Tg=Eg;/**
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
 */function jw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class oa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new oa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await jw(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oa.receivers=[];/**
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
 */function wc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class qw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=wc("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Jt(){return window}function $w(t){Jt().location.href=t}/**
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
 */function Ig(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function Hw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ww(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Kw(){return Ig()?self:null}/**
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
 */const wg="firebaseLocalStorageDb",Gw=1,Vo="firebaseLocalStorage",Ag="fbase_key";class Ei{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function aa(t,e){return t.transaction([Vo],e?"readwrite":"readonly").objectStore(Vo)}function zw(){const t=indexedDB.deleteDatabase(wg);return new Ei(t).toPromise()}function Nl(){const t=indexedDB.open(wg,Gw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vo,{keyPath:Ag})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vo)?e(r):(r.close(),await zw(),e(await Nl()))})})}async function _f(t,e,n){const r=aa(t,!0).put({[Ag]:e,value:n});return new Ei(r).toPromise()}async function Qw(t,e){const n=aa(t,!1).get(e),r=await new Ei(n).toPromise();return r===void 0?null:r.value}function yf(t,e){const n=aa(t,!0).delete(e);return new Ei(n).toPromise()}const Yw=800,Jw=3;class Rg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Jw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ig()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oa._getInstance(Kw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Hw(),!this.activeServiceWorker)return;this.sender=new qw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ww()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nl();return await _f(e,Do,"1"),await yf(e,Do),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_f(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Qw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=aa(s,!1).getAll();return new Ei(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rg.type="LOCAL";const Xw=Rg;new yi(3e4,6e4);/**
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
 */function Zw(t,e){return e?mn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ac extends Tc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $r(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $r(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $r(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eA(t){return mg(t.auth,new Ac(t),t.bypassAuthState)}function tA(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),Vw(n,new Ac(t),t.bypassAuthState)}async function nA(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),Dw(n,new Ac(t),t.bypassAuthState)}/**
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
 */class bg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eA;case"linkViaPopup":case"linkViaRedirect":return nA;case"reauthViaPopup":case"reauthViaRedirect":return tA;default:jt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rA=new yi(2e3,1e4);class kr extends bg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,kr.currentPopupAction&&kr.currentPopupAction.cancel(),kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=wc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rA.get())};e()}}kr.currentPopupAction=null;/**
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
 */const sA="pendingRedirect",lo=new Map;class iA extends bg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=lo.get(this.auth._key());if(!e){try{const r=await oA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}lo.set(this.auth._key(),e)}return this.bypassAuthState||lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oA(t,e){const n=cA(e),r=lA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function aA(t,e){lo.set(t._key(),e)}function lA(t){return mn(t._redirectPersistence)}function cA(t){return ao(sA,t.config.apiKey,t.name)}async function uA(t,e,n=!1){if(dn(t.app))return Promise.reject(Hn(t));const r=is(t),s=Zw(r,e),o=await new iA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const hA=10*60*1e3;class fA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Sg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Yt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hA&&this.cachedEventUids.clear(),this.cachedEventUids.has(vf(e))}saveEventToCache(e){this.cachedEventUids.add(vf(e)),this.lastProcessedEventTime=Date.now()}}function vf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sg(t);default:return!1}}/**
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
 */async function pA(t,e={}){return Jn(t,"GET","/v1/projects",e)}/**
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
 */const gA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mA=/^https?/;async function _A(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pA(t);for(const n of e)try{if(yA(n))return}catch{}jt(t,"unauthorized-domain")}function yA(t){const e=Pl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!mA.test(n))return!1;if(gA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const vA=new yi(3e4,6e4);function Ef(){const t=Jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function EA(t){return new Promise((e,n)=>{var r,s,i;function o(){Ef(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ef(),n(Yt(t,"network-request-failed"))},timeout:vA.get()})}if(!((s=(r=Jt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Jt().gapi)===null||i===void 0)&&i.load)o();else{const l=mw("iframefcb");return Jt()[l]=()=>{gapi.load?o():n(Yt(t,"network-request-failed"))},fg(`${gw()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw co=null,e})}let co=null;function TA(t){return co=co||EA(t),co}/**
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
 */const IA=new yi(5e3,15e3),wA="__/auth/iframe",AA="emulator/auth/iframe",RA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SA(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yc(e,AA):`https://${t.config.authDomain}/${wA}`,r={apiKey:e.apiKey,appName:t.name,v:ss},s=bA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${_i(r).slice(1)}`}async function PA(t){const e=await TA(t),n=Jt().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:SA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Yt(t,"network-request-failed"),l=Jt().setTimeout(()=>{i(o)},IA.get());function c(){Jt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const CA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NA=500,OA=600,DA="_blank",VA="http://localhost";class Tf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kA(t,e,n,r=NA,s=OA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},CA),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ft().toLowerCase();n&&(l=ig(h)?DA:n),rg(h)&&(e=e||VA,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[v,C])=>`${m}${v}=${C},`,"");if(ow(h)&&l!=="_self")return xA(e||"",l),new Tf(null);const p=window.open(e||"",l,f);ie(p,t,"popup-blocked");try{p.focus()}catch{}return new Tf(p)}function xA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const MA="__/auth/handler",LA="emulator/auth/handler",FA=encodeURIComponent("fac");async function If(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ss,eventId:s};if(e instanceof pg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",PT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof vi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),h=c?`#${FA}=${encodeURIComponent(c)}`:"";return`${UA(t)}?${_i(l).slice(1)}${h}`}function UA({config:t}){return t.emulator?yc(t,LA):`https://${t.authDomain}/${MA}`}/**
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
 */const tl="webStorageSupport";class BA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tg,this._completeRedirectFn=uA,this._overrideRedirectResult=aA}async _openPopup(e,n,r,s){var i;In((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await If(e,n,r,Pl(),s);return kA(e,o,wc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await If(e,n,r,Pl(),s);return $w(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(In(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PA(e),r=new fA(e);return n.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tl,{type:tl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[tl];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_A(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ug()||sg()||Ec()}}const jA=BA;var wf="@firebase/auth",Af="1.7.9";/**
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
 */class qA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $A(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HA(t){Qr(new fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hg(t)},h=new fw(r,s,i,c);return Tw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qr(new fr("auth-internal",e=>{const n=is(e.getProvider("auth").getImmediate());return(r=>new qA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(wf,Af,$A(t)),$n(wf,Af,"esm2017")}/**
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
 */const WA=5*60,KA=jp("authIdTokenMaxAge")||WA;let Rf=null;const GA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>KA)return;const s=n==null?void 0:n.token;Rf!==s&&(Rf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function zA(t=Wp()){const e=gc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ew(t,{popupRedirectResolver:jA,persistence:[Xw,Bw,Tg]}),r=jp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=GA(i.toString());Lw(n,o,()=>o(n.currentUser)),Mw(n,l=>o(l))}}const s=Up("auth");return s&&Iw(n,`http://${s}`),n}function QA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}dw({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Yt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",QA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HA("Browser");var bf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hr,Pg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function E(){}E.prototype=y.prototype,w.D=y.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(A,R,S){for(var T=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)T[dt-2]=arguments[dt];return y.prototype[R].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,E){E||(E=0);var A=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)A[R]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(R=0;16>R;++R)A[R]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=w.g[0],E=w.g[1],R=w.g[2];var S=w.g[3],T=y+(S^E&(R^S))+A[0]+3614090360&4294967295;y=E+(T<<7&4294967295|T>>>25),T=S+(R^y&(E^R))+A[1]+3905402710&4294967295,S=y+(T<<12&4294967295|T>>>20),T=R+(E^S&(y^E))+A[2]+606105819&4294967295,R=S+(T<<17&4294967295|T>>>15),T=E+(y^R&(S^y))+A[3]+3250441966&4294967295,E=R+(T<<22&4294967295|T>>>10),T=y+(S^E&(R^S))+A[4]+4118548399&4294967295,y=E+(T<<7&4294967295|T>>>25),T=S+(R^y&(E^R))+A[5]+1200080426&4294967295,S=y+(T<<12&4294967295|T>>>20),T=R+(E^S&(y^E))+A[6]+2821735955&4294967295,R=S+(T<<17&4294967295|T>>>15),T=E+(y^R&(S^y))+A[7]+4249261313&4294967295,E=R+(T<<22&4294967295|T>>>10),T=y+(S^E&(R^S))+A[8]+1770035416&4294967295,y=E+(T<<7&4294967295|T>>>25),T=S+(R^y&(E^R))+A[9]+2336552879&4294967295,S=y+(T<<12&4294967295|T>>>20),T=R+(E^S&(y^E))+A[10]+4294925233&4294967295,R=S+(T<<17&4294967295|T>>>15),T=E+(y^R&(S^y))+A[11]+2304563134&4294967295,E=R+(T<<22&4294967295|T>>>10),T=y+(S^E&(R^S))+A[12]+1804603682&4294967295,y=E+(T<<7&4294967295|T>>>25),T=S+(R^y&(E^R))+A[13]+4254626195&4294967295,S=y+(T<<12&4294967295|T>>>20),T=R+(E^S&(y^E))+A[14]+2792965006&4294967295,R=S+(T<<17&4294967295|T>>>15),T=E+(y^R&(S^y))+A[15]+1236535329&4294967295,E=R+(T<<22&4294967295|T>>>10),T=y+(R^S&(E^R))+A[1]+4129170786&4294967295,y=E+(T<<5&4294967295|T>>>27),T=S+(E^R&(y^E))+A[6]+3225465664&4294967295,S=y+(T<<9&4294967295|T>>>23),T=R+(y^E&(S^y))+A[11]+643717713&4294967295,R=S+(T<<14&4294967295|T>>>18),T=E+(S^y&(R^S))+A[0]+3921069994&4294967295,E=R+(T<<20&4294967295|T>>>12),T=y+(R^S&(E^R))+A[5]+3593408605&4294967295,y=E+(T<<5&4294967295|T>>>27),T=S+(E^R&(y^E))+A[10]+38016083&4294967295,S=y+(T<<9&4294967295|T>>>23),T=R+(y^E&(S^y))+A[15]+3634488961&4294967295,R=S+(T<<14&4294967295|T>>>18),T=E+(S^y&(R^S))+A[4]+3889429448&4294967295,E=R+(T<<20&4294967295|T>>>12),T=y+(R^S&(E^R))+A[9]+568446438&4294967295,y=E+(T<<5&4294967295|T>>>27),T=S+(E^R&(y^E))+A[14]+3275163606&4294967295,S=y+(T<<9&4294967295|T>>>23),T=R+(y^E&(S^y))+A[3]+4107603335&4294967295,R=S+(T<<14&4294967295|T>>>18),T=E+(S^y&(R^S))+A[8]+1163531501&4294967295,E=R+(T<<20&4294967295|T>>>12),T=y+(R^S&(E^R))+A[13]+2850285829&4294967295,y=E+(T<<5&4294967295|T>>>27),T=S+(E^R&(y^E))+A[2]+4243563512&4294967295,S=y+(T<<9&4294967295|T>>>23),T=R+(y^E&(S^y))+A[7]+1735328473&4294967295,R=S+(T<<14&4294967295|T>>>18),T=E+(S^y&(R^S))+A[12]+2368359562&4294967295,E=R+(T<<20&4294967295|T>>>12),T=y+(E^R^S)+A[5]+4294588738&4294967295,y=E+(T<<4&4294967295|T>>>28),T=S+(y^E^R)+A[8]+2272392833&4294967295,S=y+(T<<11&4294967295|T>>>21),T=R+(S^y^E)+A[11]+1839030562&4294967295,R=S+(T<<16&4294967295|T>>>16),T=E+(R^S^y)+A[14]+4259657740&4294967295,E=R+(T<<23&4294967295|T>>>9),T=y+(E^R^S)+A[1]+2763975236&4294967295,y=E+(T<<4&4294967295|T>>>28),T=S+(y^E^R)+A[4]+1272893353&4294967295,S=y+(T<<11&4294967295|T>>>21),T=R+(S^y^E)+A[7]+4139469664&4294967295,R=S+(T<<16&4294967295|T>>>16),T=E+(R^S^y)+A[10]+3200236656&4294967295,E=R+(T<<23&4294967295|T>>>9),T=y+(E^R^S)+A[13]+681279174&4294967295,y=E+(T<<4&4294967295|T>>>28),T=S+(y^E^R)+A[0]+3936430074&4294967295,S=y+(T<<11&4294967295|T>>>21),T=R+(S^y^E)+A[3]+3572445317&4294967295,R=S+(T<<16&4294967295|T>>>16),T=E+(R^S^y)+A[6]+76029189&4294967295,E=R+(T<<23&4294967295|T>>>9),T=y+(E^R^S)+A[9]+3654602809&4294967295,y=E+(T<<4&4294967295|T>>>28),T=S+(y^E^R)+A[12]+3873151461&4294967295,S=y+(T<<11&4294967295|T>>>21),T=R+(S^y^E)+A[15]+530742520&4294967295,R=S+(T<<16&4294967295|T>>>16),T=E+(R^S^y)+A[2]+3299628645&4294967295,E=R+(T<<23&4294967295|T>>>9),T=y+(R^(E|~S))+A[0]+4096336452&4294967295,y=E+(T<<6&4294967295|T>>>26),T=S+(E^(y|~R))+A[7]+1126891415&4294967295,S=y+(T<<10&4294967295|T>>>22),T=R+(y^(S|~E))+A[14]+2878612391&4294967295,R=S+(T<<15&4294967295|T>>>17),T=E+(S^(R|~y))+A[5]+4237533241&4294967295,E=R+(T<<21&4294967295|T>>>11),T=y+(R^(E|~S))+A[12]+1700485571&4294967295,y=E+(T<<6&4294967295|T>>>26),T=S+(E^(y|~R))+A[3]+2399980690&4294967295,S=y+(T<<10&4294967295|T>>>22),T=R+(y^(S|~E))+A[10]+4293915773&4294967295,R=S+(T<<15&4294967295|T>>>17),T=E+(S^(R|~y))+A[1]+2240044497&4294967295,E=R+(T<<21&4294967295|T>>>11),T=y+(R^(E|~S))+A[8]+1873313359&4294967295,y=E+(T<<6&4294967295|T>>>26),T=S+(E^(y|~R))+A[15]+4264355552&4294967295,S=y+(T<<10&4294967295|T>>>22),T=R+(y^(S|~E))+A[6]+2734768916&4294967295,R=S+(T<<15&4294967295|T>>>17),T=E+(S^(R|~y))+A[13]+1309151649&4294967295,E=R+(T<<21&4294967295|T>>>11),T=y+(R^(E|~S))+A[4]+4149444226&4294967295,y=E+(T<<6&4294967295|T>>>26),T=S+(E^(y|~R))+A[11]+3174756917&4294967295,S=y+(T<<10&4294967295|T>>>22),T=R+(y^(S|~E))+A[2]+718787259&4294967295,R=S+(T<<15&4294967295|T>>>17),T=E+(S^(R|~y))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var E=y-this.blockSize,A=this.B,R=this.h,S=0;S<y;){if(R==0)for(;S<=E;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<y;)if(A[R++]=w.charCodeAt(S++),R==this.blockSize){s(this,A),R=0;break}}else for(;S<y;)if(A[R++]=w[S++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var E=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=E&255,E/=256;for(this.u(w),w=Array(16),y=E=0;4>y;++y)for(var A=0;32>A;A+=8)w[E++]=this.g[y]>>>A&255;return w};function i(w,y){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=y(w)}function o(w,y){this.h=y;for(var E=[],A=!0,R=w.length-1;0<=R;R--){var S=w[R]|0;A&&S==y||(E[R]=S,A=!1)}this.g=E}var l={};function c(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return D(h(-w));for(var y=[],E=1,A=0;w>=E;A++)y[A]=w/E|0,E*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return D(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(y,8)),A=p,R=0;R<w.length;R+=8){var S=Math.min(8,w.length-R),T=parseInt(w.substring(R,R+S),y);8>S?(S=h(Math.pow(y,S)),A=A.j(S).add(h(T))):(A=A.j(E),A=A.add(h(T)))}return A}var p=c(0),m=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(N(this))return-D(this).m();for(var w=0,y=1,E=0;E<this.g.length;E++){var A=this.i(E);w+=(0<=A?A:4294967296+A)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(N(this))return"-"+D(this).toString(w);for(var y=h(Math.pow(w,6)),E=this,A="";;){var R=H(E,y).g;E=j(E,R.j(y));var S=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=R,C(E))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function N(w){return w.h==-1}t.l=function(w){return w=j(this,w),N(w)?-1:C(w)?0:1};function D(w){for(var y=w.g.length,E=[],A=0;A<y;A++)E[A]=~w.g[A];return new o(E,~w.h).add(m)}t.abs=function(){return N(this)?D(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],A=0,R=0;R<=y;R++){var S=A+(this.i(R)&65535)+(w.i(R)&65535),T=(S>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);A=T>>>16,S&=65535,T&=65535,E[R]=T<<16|S}return new o(E,E[E.length-1]&-2147483648?-1:0)};function j(w,y){return w.add(D(y))}t.j=function(w){if(C(this)||C(w))return p;if(N(this))return N(w)?D(this).j(D(w)):D(D(this).j(w));if(N(w))return D(this.j(D(w)));if(0>this.l(v)&&0>w.l(v))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,E=[],A=0;A<2*y;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<w.g.length;R++){var S=this.i(A)>>>16,T=this.i(A)&65535,dt=w.i(R)>>>16,Ct=w.i(R)&65535;E[2*A+2*R]+=T*Ct,M(E,2*A+2*R),E[2*A+2*R+1]+=S*Ct,M(E,2*A+2*R+1),E[2*A+2*R+1]+=T*dt,M(E,2*A+2*R+1),E[2*A+2*R+2]+=S*dt,M(E,2*A+2*R+2)}for(A=0;A<y;A++)E[A]=E[2*A+1]<<16|E[2*A];for(A=y;A<2*y;A++)E[A]=0;return new o(E,0)};function M(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function q(w,y){this.g=w,this.h=y}function H(w,y){if(C(y))throw Error("division by zero");if(C(w))return new q(p,p);if(N(w))return y=H(D(w),y),new q(D(y.g),D(y.h));if(N(y))return y=H(w,D(y)),new q(D(y.g),y.h);if(30<w.g.length){if(N(w)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,A=y;0>=A.l(w);)E=ce(E),A=ce(A);var R=oe(E,1),S=oe(A,1);for(A=oe(A,2),E=oe(E,2);!C(A);){var T=S.add(A);0>=T.l(w)&&(R=R.add(E),S=T),A=oe(A,1),E=oe(E,1)}return y=j(w,R.j(y)),new q(R,y)}for(R=p;0<=w.l(y);){for(E=Math.max(1,Math.floor(w.m()/y.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(E),T=S.j(y);N(T)||0<T.l(w);)E-=A,S=h(E),T=S.j(y);C(S)&&(S=m),R=R.add(S),w=j(w,T)}return new q(R,w)}t.A=function(w){return H(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],A=0;A<y;A++)E[A]=this.i(A)&w.i(A);return new o(E,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],A=0;A<y;A++)E[A]=this.i(A)|w.i(A);return new o(E,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],A=0;A<y;A++)E[A]=this.i(A)^w.i(A);return new o(E,this.h^w.h)};function ce(w){for(var y=w.g.length+1,E=[],A=0;A<y;A++)E[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(E,w.h)}function oe(w,y){var E=y>>5;y%=32;for(var A=w.g.length-E,R=[],S=0;S<A;S++)R[S]=0<y?w.i(S+E)>>>y|w.i(S+E+1)<<32-y:w.i(S+E);return new o(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Pg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,hr=o}).apply(typeof bf<"u"?bf:typeof self<"u"?self:typeof window<"u"?window:{});var zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cg,Os,Ng,uo,Ol,Og,Dg,Vg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof zi=="object"&&zi];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],u=u(g),u!=g&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,g=!1,P={next:function(){if(!g&&d<a.length){var O=d++;return{value:u(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(u,P)}}return function(){return a.apply(u,arguments)}}function m(a,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function v(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,P,O){for(var W=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)W[Pe-2]=arguments[Pe];return u.prototype[P].apply(g,W)}}function N(a){const u=a.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=a[g];return d}return[]}function D(a,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const P=a.length||0,O=g.length||0;a.length=P+O;for(let W=0;W<O;W++)a[P+W]=g[W]}else a.push(g)}}class j{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function M(a){return/^[\s\xa0]*$/.test(a)}function q(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var ce=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function oe(a,u,d){for(const g in a)u.call(d,a[g],g,a)}function w(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function y(a){const u={};for(const d in a)u[d]=a[d];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let O=0;O<E.length;O++)d=E[O],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function R(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function S(a){l.setTimeout(()=>{throw a},0)}function T(){var a=It;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class dt{constructor(){this.h=this.g=null}add(u,d){const g=Ct.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Ct=new j(()=>new Be,a=>a.reset());class Be{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,ge=!1,It=new dt,kt=()=>{const a=l.Promise.resolve(void 0);ye=()=>{a.then(Nt)}};var Nt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){S(d)}var u=Ct;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ge=!1};function Ve(){this.s=this.s,this.C=this.C}Ve.prototype.s=!1,Ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var Sn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return a}();function wt(a,u){if(ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ce){e:{try{H(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:vt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&wt.aa.h.call(this)}}C(wt,ke);var vt={2:"touch",3:"pen",4:"mouse"};wt.prototype.h=function(){wt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var k="closure_listenable_"+(1e6*Math.random()|0),Y=0;function z(a,u,d,g,P){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=P,this.key=++Y,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function pe(a){this.src=a,this.g={},this.h=0}pe.prototype.add=function(a,u,d,g,P){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var W=I(a,u,g,P);return-1<W?(u=a[W],d||(u.fa=!1)):(u=new z(u,this.src,O,!!g,P),u.fa=d,a.push(u)),u};function _(a,u){var d=u.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,u,void 0),O;(O=0<=P)&&Array.prototype.splice.call(g,P,1),O&&(Z(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function I(a,u,d,g){for(var P=0;P<a.length;++P){var O=a[P];if(!O.da&&O.listener==u&&O.capture==!!d&&O.ha==g)return P}return-1}var b="closure_lm_"+(1e6*Math.random()|0),V={};function L(a,u,d,g,P){if(Array.isArray(u)){for(var O=0;O<u.length;O++)L(a,u[O],d,g,P);return null}return d=se(d),a&&a[k]?a.K(u,d,h(g)?!!g.capture:!1,P):x(a,u,d,!1,g,P)}function x(a,u,d,g,P,O){if(!u)throw Error("Invalid event type");var W=h(P)?!!P.capture:!!P,Pe=Q(a);if(Pe||(a[b]=Pe=new pe(a)),d=Pe.add(u,d,g,W,O),d.proxy)return d;if(g=G(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Sn||(P=W),P===void 0&&(P=!1),a.addEventListener(u.toString(),g,P);else if(a.attachEvent)a.attachEvent(U(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function a(d){return u.call(a.src,a.listener,d)}const u=ne;return a}function K(a,u,d,g,P){if(Array.isArray(u))for(var O=0;O<u.length;O++)K(a,u[O],d,g,P);else g=h(g)?!!g.capture:!!g,d=se(d),a&&a[k]?(a=a.i,u=String(u).toString(),u in a.g&&(O=a.g[u],d=I(O,d,g,P),-1<d&&(Z(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[u],a.h--)))):a&&(a=Q(a))&&(u=a.g[u.toString()],a=-1,u&&(a=I(u,d,g,P)),(d=-1<a?u[a]:null)&&$(d))}function $(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[k])_(u.i,a);else{var d=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(d,g,a.capture):u.detachEvent?u.detachEvent(U(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=Q(u))?(_(d,a),d.h==0&&(d.src=null,u[b]=null)):Z(a)}}}function U(a){return a in V?V[a]:V[a]="on"+a}function ne(a,u){if(a.da)a=!0;else{u=new wt(u,this);var d=a.listener,g=a.ha||a.src;a.fa&&$(a),a=d.call(g,u)}return a}function Q(a){return a=a[b],a instanceof pe?a:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(a){return typeof a=="function"?a:(a[ee]||(a[ee]=function(u){return a.handleEvent(u)}),a[ee])}function re(){Ve.call(this),this.i=new pe(this),this.M=this,this.F=null}C(re,Ve),re.prototype[k]=!0,re.prototype.removeEventListener=function(a,u,d,g){K(this,a,u,d,g)};function de(a,u){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new ke(u,a);else if(u instanceof ke)u.target=u.target||a;else{var P=u;u=new ke(g,a),A(u,P)}if(P=!0,d)for(var O=d.length-1;0<=O;O--){var W=u.g=d[O];P=ve(W,g,!0,u)&&P}if(W=u.g=a,P=ve(W,g,!0,u)&&P,P=ve(W,g,!1,u)&&P,d)for(O=0;O<d.length;O++)W=u.g=d[O],P=ve(W,g,!1,u)&&P}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],g=0;g<d.length;g++)Z(d[g]);delete a.g[u],a.h--}}this.F=null},re.prototype.K=function(a,u,d,g){return this.i.add(String(a),u,!1,d,g)},re.prototype.L=function(a,u,d,g){return this.i.add(String(a),u,!0,d,g)};function ve(a,u,d,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,O=0;O<u.length;++O){var W=u[O];if(W&&!W.da&&W.capture==d){var Pe=W.listener,Ye=W.ha||W.src;W.fa&&_(a.i,W),P=Pe.call(Ye,g)!==!1&&P}}return P&&!g.defaultPrevented}function Ge(a,u,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function ze(a){a.g=Ge(()=>{a.g=null,a.i&&(a.i=!1,ze(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Ot extends Ve{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ze(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(a){Ve.call(this),this.h=a,this.g={}}C(nt,Ve);var Pn=[];function hs(a){oe(a.g,function(u,d){this.g.hasOwnProperty(d)&&$(u)},a),a.g={}}nt.prototype.N=function(){nt.aa.N.call(this),hs(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qe=l.JSON.stringify,Dt=l.JSON.parse,Si=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function wr(){}wr.prototype.h=null;function su(a){return a.h||(a.h=a.i())}function iu(){}var fs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ia(){ke.call(this,"d")}C(Ia,ke);function wa(){ke.call(this,"c")}C(wa,ke);var Xn={},ou=null;function Pi(){return ou=ou||new re}Xn.La="serverreachability";function au(a){ke.call(this,Xn.La,a)}C(au,ke);function ds(a){const u=Pi();de(u,new au(u))}Xn.STAT_EVENT="statevent";function lu(a,u){ke.call(this,Xn.STAT_EVENT,a),this.stat=u}C(lu,ke);function pt(a){const u=Pi();de(u,new lu(u,a))}Xn.Ma="timingevent";function cu(a,u){ke.call(this,Xn.Ma,a),this.size=u}C(cu,ke);function ps(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function gs(){this.g=!0}gs.prototype.xa=function(){this.g=!1};function Qm(a,u,d,g,P,O){a.info(function(){if(a.g)if(O)for(var W="",Pe=O.split("&"),Ye=0;Ye<Pe.length;Ye++){var Te=Pe[Ye].split("=");if(1<Te.length){var rt=Te[0];Te=Te[1];var st=rt.split("_");W=2<=st.length&&st[1]=="type"?W+(rt+"="+Te+"&"):W+(rt+"=redacted&")}}else W=null;else W=O;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+u+`
`+d+`
`+W})}function Ym(a,u,d,g,P,O,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+u+`
`+d+`
`+O+" "+W})}function Ar(a,u,d,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Xm(a,d)+(g?" "+g:"")})}function Jm(a,u){a.info(function(){return"TIMEOUT: "+u})}gs.prototype.info=function(){};function Xm(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var O=P[0];if(O!="noop"&&O!="stop"&&O!="close")for(var W=1;W<P.length;W++)P[W]=""}}}}return Qe(d)}catch{return u}}var Ci={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Aa;function Ni(){}C(Ni,wr),Ni.prototype.g=function(){return new XMLHttpRequest},Ni.prototype.i=function(){return{}},Aa=new Ni;function Cn(a,u,d,g){this.j=a,this.i=u,this.l=d,this.R=g||1,this.U=new nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hu}function hu(){this.i=null,this.g="",this.h=!1}var fu={},Ra={};function ba(a,u,d){a.L=1,a.v=ki(rn(u)),a.m=d,a.P=!0,du(a,null)}function du(a,u){a.F=Date.now(),Oi(a),a.A=rn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Su(d.i,"t",g),a.C=0,d=a.j.J,a.h=new hu,a.g=Wu(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Ot(m(a.Y,a,a.g),a.O)),u=a.U,d=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Pn[0]=P.toString()),P=Pn);for(var O=0;O<P.length;O++){var W=L(d,P[O],g||u.handleEvent,!1,u.h||u);if(!W)break;u.g[W.key]=W}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),ds(),Qm(a.i,a.u,a.A,a.l,a.R,a.m)}Cn.prototype.ca=function(a){a=a.target;const u=this.M;u&&sn(a)==3?u.j():this.Y(a)},Cn.prototype.Y=function(a){try{if(a==this.g)e:{const st=sn(this.g);var u=this.g.Ba();const Sr=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||ku(this.g)))){this.J||st!=4||u==7||(u==8||0>=Sr?ds(3):ds(2)),Sa(this);var d=this.g.Z();this.X=d;t:if(pu(this)){var g=ku(this.g);a="";var P=g.length,O=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zn(this),ms(this);var W="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(O&&u==P-1)});g.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,Ym(this.i,this.u,this.A,this.l,this.R,st,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,Ye=this.g;if((Pe=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Pe)){var Te=Pe;break t}}Te=null}if(d=Te)Ar(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pa(this,d);else{this.o=!1,this.s=3,pt(12),Zn(this),ms(this);break e}}if(this.P){d=!0;let xt;for(;!this.J&&this.C<W.length;)if(xt=Zm(this,W),xt==Ra){st==4&&(this.s=4,pt(14),d=!1),Ar(this.i,this.l,null,"[Incomplete Response]");break}else if(xt==fu){this.s=4,pt(15),Ar(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else Ar(this.i,this.l,xt,null),Pa(this,xt);if(pu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||W.length!=0||this.h.h||(this.s=1,pt(16),d=!1),this.o=this.o&&d,!d)Ar(this.i,this.l,W,"[Invalid Chunked Response]"),Zn(this),ms(this);else if(0<W.length&&!this.W){this.W=!0;var rt=this.j;rt.g==this&&rt.ba&&!rt.M&&(rt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),ka(rt),rt.M=!0,pt(11))}}else Ar(this.i,this.l,W,null),Pa(this,W);st==4&&Zn(this),this.o&&!this.J&&(st==4?ju(this.j,this):(this.o=!1,Oi(this)))}else m_(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Zn(this),ms(this)}}}catch{}finally{}};function pu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Zm(a,u){var d=a.C,g=u.indexOf(`
`,d);return g==-1?Ra:(d=Number(u.substring(d,g)),isNaN(d)?fu:(g+=1,g+d>u.length?Ra:(u=u.slice(g,g+d),a.C=g+d,u)))}Cn.prototype.cancel=function(){this.J=!0,Zn(this)};function Oi(a){a.S=Date.now()+a.I,gu(a,a.I)}function gu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ps(m(a.ba,a),u)}function Sa(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Cn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Jm(this.i,this.A),this.L!=2&&(ds(),pt(17)),Zn(this),this.s=2,ms(this)):gu(this,this.S-a)};function ms(a){a.j.G==0||a.J||ju(a.j,a)}function Zn(a){Sa(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,hs(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Pa(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||Ca(d.h,a))){if(!a.K&&Ca(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Bi(d),Fi(d);else break e;Va(d),pt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=ps(m(d.Za,d),6e3));if(1>=yu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else tr(d,11)}else if((a.K||d.g==a)&&Bi(d),!M(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let Te=P[u];if(d.T=Te[0],Te=Te[1],d.G==2)if(Te[0]=="c"){d.K=Te[1],d.ia=Te[2];const rt=Te[3];rt!=null&&(d.la=rt,d.j.info("VER="+d.la));const st=Te[4];st!=null&&(d.Aa=st,d.j.info("SVER="+d.Aa));const Sr=Te[5];Sr!=null&&typeof Sr=="number"&&0<Sr&&(g=1.5*Sr,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const xt=a.g;if(xt){const qi=xt.g?xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qi){var O=g.h;O.g||qi.indexOf("spdy")==-1&&qi.indexOf("quic")==-1&&qi.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Na(O,O.h),O.h=null))}if(g.D){const xa=xt.g?xt.g.getResponseHeader("X-HTTP-Session-Id"):null;xa&&(g.ya=xa,Oe(g.I,g.D,xa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var W=a;if(g.qa=Hu(g,g.J?g.ia:null,g.W),W.K){vu(g.h,W);var Pe=W,Ye=g.L;Ye&&(Pe.I=Ye),Pe.B&&(Sa(Pe),Oi(Pe)),g.g=W}else Uu(g);0<d.i.length&&Ui(d)}else Te[0]!="stop"&&Te[0]!="close"||tr(d,7);else d.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?tr(d,7):Da(d):Te[0]!="noop"&&d.l&&d.l.ta(Te),d.v=0)}}ds(4)}catch{}}var e_=class{constructor(a,u){this.g=a,this.map=u}};function mu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _u(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function yu(a){return a.h?1:a.g?a.g.size:0}function Ca(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Na(a,u){a.g?a.g.add(u):a.h=u}function vu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}mu.prototype.cancel=function(){if(this.i=Eu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Eu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return N(a.i)}function t_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],d=a.length,g=0;g<d;g++)u.push(a[g]);return u}u=[],d=0;for(g in a)u[d++]=a[g];return u}function n_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const g in a)u[d++]=g;return u}}}function Tu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=n_(a),g=t_(a),P=g.length,O=0;O<P;O++)u.call(void 0,g[O],d&&d[O],a)}var Iu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function r_(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),P=null;if(0<=g){var O=a[d].substring(0,g);P=a[d].substring(g+1)}else O=a[d];u(O,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function er(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof er){this.h=a.h,Di(this,a.j),this.o=a.o,this.g=a.g,Vi(this,a.s),this.l=a.l;var u=a.i,d=new vs;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),wu(this,d),this.m=a.m}else a&&(u=String(a).match(Iu))?(this.h=!1,Di(this,u[1]||"",!0),this.o=_s(u[2]||""),this.g=_s(u[3]||"",!0),Vi(this,u[4]),this.l=_s(u[5]||"",!0),wu(this,u[6]||"",!0),this.m=_s(u[7]||"")):(this.h=!1,this.i=new vs(null,this.h))}er.prototype.toString=function(){var a=[],u=this.j;u&&a.push(ys(u,Au,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(ys(u,Au,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ys(d,d.charAt(0)=="/"?o_:i_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ys(d,l_)),a.join("")};function rn(a){return new er(a)}function Di(a,u,d){a.j=d?_s(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Vi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function wu(a,u,d){u instanceof vs?(a.i=u,c_(a.i,a.h)):(d||(u=ys(u,a_)),a.i=new vs(u,a.h))}function Oe(a,u,d){a.i.set(u,d)}function ki(a){return Oe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function _s(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ys(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,s_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function s_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Au=/[#\/\?@]/g,i_=/[#\?:]/g,o_=/[#\?]/g,a_=/[#\?@]/g,l_=/#/g;function vs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Nn(a){a.g||(a.g=new Map,a.h=0,a.i&&r_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=vs.prototype,t.add=function(a,u){Nn(this),this.i=null,a=Rr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Ru(a,u){Nn(a),u=Rr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function bu(a,u){return Nn(a),u=Rr(a,u),a.g.has(u)}t.forEach=function(a,u){Nn(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(u,P,g,this)},this)},this)},t.na=function(){Nn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const P=a[g];for(let O=0;O<P.length;O++)d.push(u[g])}return d},t.V=function(a){Nn(this);let u=[];if(typeof a=="string")bu(this,a)&&(u=u.concat(this.g.get(Rr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return Nn(this),this.i=null,a=Rr(this,a),bu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Su(a,u,d){Ru(a,u),0<d.length&&(a.i=null,a.g.set(Rr(a,u),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const O=encodeURIComponent(String(g)),W=this.V(g);for(g=0;g<W.length;g++){var P=O;W[g]!==""&&(P+="="+encodeURIComponent(String(W[g]))),a.push(P)}}return this.i=a.join("&")};function Rr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function c_(a,u){u&&!a.j&&(Nn(a),a.i=null,a.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(Ru(this,g),Su(this,P,d))},a)),a.j=u}function u_(a,u){const d=new gs;if(l.Image){const g=new Image;g.onload=v(On,d,"TestLoadImage: loaded",!0,u,g),g.onerror=v(On,d,"TestLoadImage: error",!1,u,g),g.onabort=v(On,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=v(On,d,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function h_(a,u){const d=new gs,g=new AbortController,P=setTimeout(()=>{g.abort(),On(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(P),O.ok?On(d,"TestPingServer: ok",!0,u):On(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),On(d,"TestPingServer: error",!1,u)})}function On(a,u,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function f_(){this.g=new Si}function d_(a,u,d){const g=d||"";try{Tu(a,function(P,O){let W=P;h(P)&&(W=Qe(P)),u.push(g+O+"="+encodeURIComponent(W))})}catch(P){throw u.push(g+"type="+encodeURIComponent("_badmap")),P}}function xi(a){this.l=a.Ub||null,this.j=a.eb||!1}C(xi,wr),xi.prototype.g=function(){return new Mi(this.l,this.j)},xi.prototype.i=function(a){return function(){return a}}({});function Mi(a,u){re.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Mi,re),t=Mi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Ts(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Es(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Es(this):Ts(this),this.readyState==3&&Pu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Es(this))},t.Qa=function(a){this.g&&(this.response=a,Es(this))},t.ga=function(){this.g&&Es(this)};function Es(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ts(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Ts(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Cu(a){let u="";return oe(a,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function Oa(a,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Cu(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Oe(a,u,d))}function Me(a){re.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Me,re);var p_=/^https?$/i,g_=["POST","PUT"];t=Me.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Aa.g(),this.v=this.o?su(this.o):su(Aa),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(O){Nu(this,O);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())d.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(g_,u,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,W]of d)this.g.setRequestHeader(O,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vu(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Nu(this,O)}};function Nu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Ou(a),Li(a)}function Ou(a){a.A||(a.A=!0,de(a,"complete"),de(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,de(this,"complete"),de(this,"abort"),Li(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Li(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Du(this):this.bb())},t.bb=function(){Du(this)};function Du(a){if(a.h&&typeof o<"u"&&(!a.v[1]||sn(a)!=4||a.Z()!=2)){if(a.u&&sn(a)==4)Ge(a.Ea,0,a);else if(de(a,"readystatechange"),sn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=W===0){var P=String(a.D).match(Iu)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!p_.test(P?P.toLowerCase():"")}d=g}if(d)de(a,"complete"),de(a,"success");else{a.m=6;try{var O=2<sn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Ou(a)}}finally{Li(a)}}}}function Li(a,u){if(a.g){Vu(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||de(a,"ready");try{d.onreadystatechange=g}catch{}}}function Vu(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function sn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Dt(u)}};function ku(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function m_(a){const u={};a=(a.g&&2<=sn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(M(a[g]))continue;var d=R(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=u[P]||[];u[P]=O,O.push(d)}w(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Is(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function xu(a){this.Aa=0,this.i=[],this.j=new gs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Is("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Is("baseRetryDelayMs",5e3,a),this.cb=Is("retryDelaySeedMs",1e4,a),this.Wa=Is("forwardChannelMaxRetries",2,a),this.wa=Is("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new mu(a&&a.concurrentRequestLimit),this.Da=new f_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=xu.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,g){pt(0),this.W=a,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Hu(this,null,this.W),Ui(this)};function Da(a){if(Mu(a),a.G==3){var u=a.U++,d=rn(a.I);if(Oe(d,"SID",a.K),Oe(d,"RID",u),Oe(d,"TYPE","terminate"),ws(a,d),u=new Cn(a,a.j,u),u.L=2,u.v=ki(rn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Wu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Oi(u)}$u(a)}function Fi(a){a.g&&(ka(a),a.g.cancel(),a.g=null)}function Mu(a){Fi(a),a.u&&(l.clearTimeout(a.u),a.u=null),Bi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ui(a){if(!_u(a.h)&&!a.s){a.s=!0;var u=a.Ga;ye||kt(),ge||(ye(),ge=!0),It.add(u,a),a.B=0}}function __(a,u){return yu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ps(m(a.Ga,a,u),qu(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Cn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=y(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(P.H=O,O=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Fu(this,P,u),d=rn(this.I),Oe(d,"RID",a),Oe(d,"CVER",22),this.D&&Oe(d,"X-HTTP-Session-Id",this.D),ws(this,d),O&&(this.O?u="headers="+encodeURIComponent(String(Cu(O)))+"&"+u:this.m&&Oa(d,this.m,O)),Na(this.h,P),this.Ua&&Oe(d,"TYPE","init"),this.P?(Oe(d,"$req",u),Oe(d,"SID","null"),P.T=!0,ba(P,d,null)):ba(P,d,u),this.G=2}}else this.G==3&&(a?Lu(this,a):this.i.length==0||_u(this.h)||Lu(this))};function Lu(a,u){var d;u?d=u.l:d=a.U++;const g=rn(a.I);Oe(g,"SID",a.K),Oe(g,"RID",d),Oe(g,"AID",a.T),ws(a,g),a.m&&a.o&&Oa(g,a.m,a.o),d=new Cn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Fu(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Na(a.h,d),ba(d,g,u)}function ws(a,u){a.H&&oe(a.H,function(d,g){Oe(u,g,d)}),a.l&&Tu({},function(d,g){Oe(u,g,d)})}function Fu(a,u,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let O=-1;for(;;){const W=["count="+d];O==-1?0<d?(O=P[0].g,W.push("ofs="+O)):O=0:W.push("ofs="+O);let Pe=!0;for(let Ye=0;Ye<d;Ye++){let Te=P[Ye].g;const rt=P[Ye].map;if(Te-=O,0>Te)O=Math.max(0,P[Ye].g-100),Pe=!1;else try{d_(rt,W,"req"+Te+"_")}catch{g&&g(rt)}}if(Pe){g=W.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,g}function Uu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ye||kt(),ge||(ye(),ge=!0),It.add(u,a),a.v=0}}function Va(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ps(m(a.Fa,a),qu(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Bu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ps(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),Fi(this),Bu(this))};function ka(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Bu(a){a.g=new Cn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=rn(a.qa);Oe(u,"RID","rpc"),Oe(u,"SID",a.K),Oe(u,"AID",a.T),Oe(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Oe(u,"TO",a.ja),Oe(u,"TYPE","xmlhttp"),ws(a,u),a.m&&a.o&&Oa(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ki(rn(u)),d.m=null,d.P=!0,du(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Fi(this),Va(this),pt(19))};function Bi(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ju(a,u){var d=null;if(a.g==u){Bi(a),ka(a),a.g=null;var g=2}else if(Ca(a.h,u))d=u.D,vu(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=a.B;g=Pi(),de(g,new cu(g,d)),Ui(a)}else Uu(a);else if(P=u.s,P==3||P==0&&0<u.X||!(g==1&&__(a,u)||g==2&&Va(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),P){case 1:tr(a,5);break;case 4:tr(a,10);break;case 3:tr(a,6);break;default:tr(a,2)}}}function qu(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function tr(a,u){if(a.j.info("Error code "+u),u==2){var d=m(a.fb,a),g=a.Xa;const P=!g;g=new er(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Di(g,"https"),ki(g),P?u_(g.toString(),d):h_(g.toString(),d)}else pt(2);a.G=0,a.l&&a.l.sa(u),$u(a),Mu(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function $u(a){if(a.G=0,a.ka=[],a.l){const u=Eu(a.h);(u.length!=0||a.i.length!=0)&&(D(a.ka,u),D(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Hu(a,u,d){var g=d instanceof er?rn(d):new er(d);if(g.g!="")u&&(g.g=u+"."+g.g),Vi(g,g.s);else{var P=l.location;g=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var O=new er(null);g&&Di(O,g),u&&(O.g=u),P&&Vi(O,P),d&&(O.l=d),g=O}return d=a.D,u=a.ya,d&&u&&Oe(g,d,u),Oe(g,"VER",a.la),ws(a,g),g}function Wu(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Me(new xi({eb:d})):new Me(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ku(){}t=Ku.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ji(){}ji.prototype.g=function(a,u){return new At(a,u)};function At(a,u){re.call(this),this.g=new xu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!M(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!M(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new br(this)}C(At,re),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Da(this.g)},At.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Qe(a),a=d);u.i.push(new e_(u.Ya++,a)),u.G==3&&Ui(u)},At.prototype.N=function(){this.g.l=null,delete this.j,Da(this.g),delete this.g,At.aa.N.call(this)};function Gu(a){Ia.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(Gu,Ia);function zu(){wa.call(this),this.status=1}C(zu,wa);function br(a){this.g=a}C(br,Ku),br.prototype.ua=function(){de(this.g,"a")},br.prototype.ta=function(a){de(this.g,new Gu(a))},br.prototype.sa=function(a){de(this.g,new zu)},br.prototype.ra=function(){de(this.g,"b")},ji.prototype.createWebChannel=ji.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Vg=function(){return new ji},Dg=function(){return Pi()},Og=Xn,Ol={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ci.NO_ERROR=0,Ci.TIMEOUT=8,Ci.HTTP_ERROR=6,uo=Ci,uu.COMPLETE="complete",Ng=uu,iu.EventType=fs,fs.OPEN="a",fs.CLOSE="b",fs.ERROR="c",fs.MESSAGE="d",re.prototype.listen=re.prototype.K,Os=iu,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,Cg=Me}).apply(typeof zi<"u"?zi:typeof self<"u"?self:typeof window<"u"?window:{});const Sf="@firebase/firestore";/**
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
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
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
 */let as="10.14.0";/**
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
 */const pr=new dc("@firebase/firestore");function Ss(){return pr.logLevel}function X(t,...e){if(pr.logLevel<=_e.DEBUG){const n=e.map(Rc);pr.debug(`Firestore (${as}): ${t}`,...n)}}function wn(t,...e){if(pr.logLevel<=_e.ERROR){const n=e.map(Rc);pr.error(`Firestore (${as}): ${t}`,...n)}}function Jr(t,...e){if(pr.logLevel<=_e.WARN){const n=e.map(Rc);pr.warn(`Firestore (${as}): ${t}`,...n)}}function Rc(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function le(t="Unexpected state"){const e=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function be(t,e){t||le()}function he(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Wn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class kg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class JA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XA{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Wn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string"),new kg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new at(e)}}class ZA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class eR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ZA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){be(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string"),this.R=n.token,new tR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function rR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class xg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=rR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function Xr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new He(0,0))}static max(){return new ue(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class si{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return si.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof si?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends si{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new De(n)}static emptyPath(){return new De([])}}const sR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends si{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return sR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new J(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new J(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new J(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
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
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(De.fromString(e))}static fromName(e){return new te(De.fromString(e).popFirst(5))}static empty(){return new te(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new De(e.slice()))}}function iR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new zn(s,te.empty(),e)}function oR(t){return new zn(t.readTime,t.key,-1)}class zn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zn(ue.min(),te.empty(),-1)}static max(){return new zn(ue.max(),te.empty(),-1)}}function aR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const lR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ti(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==lR)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function uR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ii(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}bc.oe=-1;function la(t){return t==null}function ko(t){return t===0&&1/t==-1/0}function hR(t){return typeof t=="number"&&Number.isInteger(t)&&!ko(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Pf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Mg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class xe{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qi(this.root,e,this.comparator,!0)}}class Qi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Je.RED,this.left=s??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Je(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ze{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cf(this.data.getIterator())}getIteratorFrom(e){return new Cf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class Cf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new Ze(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Lg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Lg("Invalid base64 string: "+i):i}}(e);return new tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const fR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qn(t){if(be(!!t),typeof t=="string"){let e=0;const n=fR.exec(t);if(be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gr(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
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
 */function Sc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pc(t){const e=t.mapValue.fields.__previous_value__;return Sc(e)?Pc(e):e}function ii(t){const e=Qn(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class dR{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class oi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new oi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof oi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Yi={mapValue:{}};function mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sc(t)?4:gR(t)?9007199254740991:pR(t)?10:11:le()}function nn(t,e){if(t===e)return!0;const n=mr(t);if(n!==mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ii(t).isEqual(ii(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Qn(s.timestampValue),l=Qn(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return gr(s.bytesValue).isEqual(gr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Fe(s.doubleValue),l=Fe(i.doubleValue);return o===l?ko(o)===ko(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Xr(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Pf(o)!==Pf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!nn(o[c],l[c])))return!1;return!0}(t,e);default:return le()}}function ai(t,e){return(t.values||[]).find(n=>nn(n,e))!==void 0}function Zr(t,e){if(t===e)return 0;const n=mr(t),r=mr(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Fe(i.integerValue||i.doubleValue),c=Fe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Nf(t.timestampValue,e.timestampValue);case 4:return Nf(ii(t),ii(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(i,o){const l=gr(i),c=gr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=Ie(l[h],c[h]);if(f!==0)return f}return Ie(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ie(Fe(i.latitude),Fe(o.latitude));return l!==0?l:Ie(Fe(i.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Of(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,f;const p=i.fields||{},m=o.fields||{},v=(l=p.value)===null||l===void 0?void 0:l.arrayValue,C=(c=m.value)===null||c===void 0?void 0:c.arrayValue,N=Ie(((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Of(v,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Yi.mapValue&&o===Yi.mapValue)return 0;if(i===Yi.mapValue)return 1;if(o===Yi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=Ie(c[p],f[p]);if(m!==0)return m;const v=Zr(l[c[p]],h[f[p]]);if(v!==0)return v}return Ie(c.length,f.length)}(t.mapValue,e.mapValue);default:throw le()}}function Nf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=Qn(t),r=Qn(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function Of(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Zr(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function es(t){return Dl(t)}function Dl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Qn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return gr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Dl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Dl(n.fields[o])}`;return s+"}"}(t.mapValue):le()}function Df(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Vl(t){return!!t&&"integerValue"in t}function Cc(t){return!!t&&"arrayValue"in t}function Vf(t){return!!t&&"nullValue"in t}function kf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ho(t){return!!t&&"mapValue"in t}function pR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Hs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Hs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function gR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ho(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hs(n)}setAll(e){let n=Xe.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Hs(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ho(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ho(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){vr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Rt(Hs(this.value))}}function Fg(t){const e=[];return vr(t.fields,(n,r)=>{const s=new Xe([n]);if(ho(r)){const i=Fg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Lt(e)}/**
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
 */class ct{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ct(e,0,ue.min(),ue.min(),ue.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,ue.min(),ue.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,ue.min(),ue.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xo{constructor(e,n){this.position=e,this.inclusive=n}}function xf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=Zr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class li{constructor(e,n="asc"){this.field=e,this.dir=n}}function mR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ug{}class qe extends Ug{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new yR(e,n,r):n==="array-contains"?new TR(e,r):n==="in"?new IR(e,r):n==="not-in"?new wR(e,r):n==="array-contains-any"?new AR(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new vR(e,r):new ER(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Zr(n,this.value)):n!==null&&mr(this.value)===mr(n)&&this.matchesComparison(Zr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends Ug{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new qt(e,n)}matches(e){return Bg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Bg(t){return t.op==="and"}function jg(t){return _R(t)&&Bg(t)}function _R(t){for(const e of t.filters)if(e instanceof qt)return!1;return!0}function kl(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+es(t.value);if(jg(t))return t.filters.map(e=>kl(e)).join(",");{const e=t.filters.map(n=>kl(n)).join(",");return`${t.op}(${e})`}}function qg(t,e){return t instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&nn(r.value,s.value)}(t,e):t instanceof qt?function(r,s){return s instanceof qt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&qg(o,s.filters[l]),!0):!1}(t,e):void le()}function $g(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${es(n.value)}`}(t):t instanceof qt?function(n){return n.op.toString()+" {"+n.getFilters().map($g).join(" ,")+"}"}(t):"Filter"}class yR extends qe{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class vR extends qe{constructor(e,n){super(e,"in",n),this.keys=Hg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ER extends qe{constructor(e,n){super(e,"not-in",n),this.keys=Hg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Hg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class TR extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cc(n)&&ai(n.arrayValue,this.value)}}class IR extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ai(this.value.arrayValue,n)}}class wR extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ai(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ai(this.value.arrayValue,n)}}class AR extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ai(this.value.arrayValue,r))}}/**
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
 */class RR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Lf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new RR(t,e,n,r,s,i,o)}function Nc(t){const e=he(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>kl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),la(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>es(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>es(r)).join(",")),e.ue=n}return e.ue}function Oc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mf(t.startAt,e.startAt)&&Mf(t.endAt,e.endAt)}function xl(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ls{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function bR(t,e,n,r,s,i,o,l){return new ls(t,e,n,r,s,i,o,l)}function Wg(t){return new ls(t)}function Ff(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Kg(t){return t.collectionGroup!==null}function Ws(t){const e=he(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ze(Xe.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new li(i,r))}),n.has(Xe.keyField().canonicalString())||e.ce.push(new li(Xe.keyField(),r))}return e.ce}function Xt(t){const e=he(t);return e.le||(e.le=SR(e,Ws(t))),e.le}function SR(t,e){if(t.limitType==="F")return Lf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new li(s.field,i)});const n=t.endAt?new xo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new xo(t.startAt.position,t.startAt.inclusive):null;return Lf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ml(t,e){const n=t.filters.concat([e]);return new ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ll(t,e,n){return new ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ca(t,e){return Oc(Xt(t),Xt(e))&&t.limitType===e.limitType}function Gg(t){return`${Nc(Xt(t))}|lt:${t.limitType}`}function Or(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>$g(s)).join(", ")}]`),la(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>es(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>es(s)).join(",")),`Target(${r})`}(Xt(t))}; limitType=${t.limitType})`}function ua(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ws(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=xf(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,Ws(r),s)||r.endAt&&!function(o,l,c){const h=xf(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,Ws(r),s))}(t,e)}function PR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zg(t){return(e,n)=>{let r=!1;for(const s of Ws(t)){const i=CR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function CR(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Zr(c,h):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
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
 */class cs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){vr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Mg(this.inner)}size(){return this.innerSize}}/**
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
 */const NR=new xe(te.comparator);function An(){return NR}const Qg=new xe(te.comparator);function Ds(...t){let e=Qg;for(const n of t)e=e.insert(n.key,n);return e}function Yg(t){let e=Qg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function lr(){return Ks()}function Jg(){return Ks()}function Ks(){return new cs(t=>t.toString(),(t,e)=>t.isEqual(e))}const OR=new xe(te.comparator),DR=new Ze(te.comparator);function me(...t){let e=DR;for(const n of t)e=e.add(n);return e}const VR=new Ze(Ie);function kR(){return VR}/**
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
 */function Dc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ko(e)?"-0":e}}function Xg(t){return{integerValue:""+t}}function xR(t,e){return hR(e)?Xg(e):Dc(t,e)}/**
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
 */class ha{constructor(){this._=void 0}}function MR(t,e,n){return t instanceof Mo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Sc(i)&&(i=Pc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ci?em(t,e):t instanceof ui?tm(t,e):function(s,i){const o=Zg(s,i),l=Uf(o)+Uf(s.Pe);return Vl(o)&&Vl(s.Pe)?Xg(l):Dc(s.serializer,l)}(t,e)}function LR(t,e,n){return t instanceof ci?em(t,e):t instanceof ui?tm(t,e):n}function Zg(t,e){return t instanceof Lo?function(r){return Vl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Mo extends ha{}class ci extends ha{constructor(e){super(),this.elements=e}}function em(t,e){const n=nm(e);for(const r of t.elements)n.some(s=>nn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ui extends ha{constructor(e){super(),this.elements=e}}function tm(t,e){let n=nm(e);for(const r of t.elements)n=n.filter(s=>!nn(s,r));return{arrayValue:{values:n}}}class Lo extends ha{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Uf(t){return Fe(t.integerValue||t.doubleValue)}function nm(t){return Cc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function FR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ci&&s instanceof ci||r instanceof ui&&s instanceof ui?Xr(r.elements,s.elements,nn):r instanceof Lo&&s instanceof Lo?nn(r.Pe,s.Pe):r instanceof Mo&&s instanceof Mo}(t.transform,e.transform)}class UR{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fa{}function rm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new im(t.key,_n.none()):new da(t.key,t.data,_n.none());{const n=t.data,r=Rt.empty();let s=new Ze(Xe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Er(t.key,r,new Lt(s.toArray()),_n.none())}}function BR(t,e,n){t instanceof da?function(s,i,o){const l=s.value.clone(),c=jf(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Er?function(s,i,o){if(!fo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=jf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(sm(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Gs(t,e,n,r){return t instanceof da?function(i,o,l,c){if(!fo(i.precondition,o))return l;const h=i.value.clone(),f=qf(i.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Er?function(i,o,l,c){if(!fo(i.precondition,o))return l;const h=qf(i.fieldTransforms,c,o),f=o.data;return f.setAll(sm(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return fo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function jR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Zg(r.transform,s||null);i!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,i))}return n||null}function Bf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Xr(r,s,(i,o)=>FR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class da extends fa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Er extends fa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jf(t,e,n){const r=new Map;be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,LR(o,l,n[s]))}return r}function qf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,MR(i,o,e))}return r}class im extends fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qR extends fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $R{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&BR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Gs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Gs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Jg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=rm(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&Xr(this.mutations,e.mutations,(n,r)=>Bf(n,r))&&Xr(this.baseMutations,e.baseMutations,(n,r)=>Bf(n,r))}}class Vc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length);let s=function(){return OR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Vc(e,n,r,s)}}/**
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
 */class HR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class WR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var je,Ee;function KR(t){switch(t){default:return le();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function om(t){if(t===void 0)return wn("GRPC error has no .code"),F.UNKNOWN;switch(t){case je.OK:return F.OK;case je.CANCELLED:return F.CANCELLED;case je.UNKNOWN:return F.UNKNOWN;case je.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case je.INTERNAL:return F.INTERNAL;case je.UNAVAILABLE:return F.UNAVAILABLE;case je.UNAUTHENTICATED:return F.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case je.NOT_FOUND:return F.NOT_FOUND;case je.ALREADY_EXISTS:return F.ALREADY_EXISTS;case je.PERMISSION_DENIED:return F.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case je.ABORTED:return F.ABORTED;case je.OUT_OF_RANGE:return F.OUT_OF_RANGE;case je.UNIMPLEMENTED:return F.UNIMPLEMENTED;case je.DATA_LOSS:return F.DATA_LOSS;default:return le()}}(Ee=je||(je={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function GR(){return new TextEncoder}/**
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
 */const zR=new hr([4294967295,4294967295],0);function $f(t){const e=GR().encode(t),n=new Pg;return n.update(e),new Uint8Array(n.digest())}function Hf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hr([n,r],0),new hr([s,i],0)]}class kc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Vs(`Invalid padding: ${n}`);if(r<0)throw new Vs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Vs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=hr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(hr.fromNumber(r)));return s.compare(zR)===1&&(s=new hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=$f(e),[r,s]=Hf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new kc(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=$f(e),[r,s]=Hf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class pa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,wi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new pa(ue.min(),s,new xe(Ie),An(),me())}}class wi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new wi(r,n,me(),me(),me())}}/**
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
 */class po{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class am{constructor(e,n){this.targetId=e,this.me=n}}class lm{constructor(e,n,r=tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Wf{constructor(){this.fe=0,this.ge=Gf(),this.pe=tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=me(),n=me(),r=me();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le()}}),new wi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Gf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class QR{constructor(e){this.Le=e,this.Be=new Map,this.ke=An(),this.qe=Kf(),this.Qe=new xe(Ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(xl(i))if(r===0){const o=new te(i.path);this.Ue(n,o,ct.newNoDocument(o,ue.min()))}else be(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=gr(r).toUint8Array()}catch(c){if(c instanceof Lg)return Jr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new kc(o,s,i)}catch(c){return Jr(c instanceof Vs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&xl(l.target)){const c=new te(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,ct.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=me();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new pa(e,n,this.Qe,this.ke,r);return this.ke=An(),this.qe=Kf(),this.Qe=new xe(Ie),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Wf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ze(Ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Wf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Kf(){return new xe(te.comparator)}function Gf(){return new xe(te.comparator)}const YR={asc:"ASCENDING",desc:"DESCENDING"},JR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},XR={and:"AND",or:"OR"};class ZR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Fl(t,e){return t.useProto3Json||la(e)?e:{value:e}}function Fo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function e0(t,e){return Fo(t,e.toTimestamp())}function Zt(t){return be(!!t),ue.fromTimestamp(function(n){const r=Qn(n);return new He(r.seconds,r.nanos)}(t))}function xc(t,e){return Ul(t,e).canonicalString()}function Ul(t,e){const n=function(s){return new De(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function um(t){const e=De.fromString(t);return be(gm(e)),e}function Bl(t,e){return xc(t.databaseId,e.path)}function nl(t,e){const n=um(e);if(n.get(1)!==t.databaseId.projectId)throw new J(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(fm(n))}function hm(t,e){return xc(t.databaseId,e)}function t0(t){const e=um(t);return e.length===4?De.emptyPath():fm(e)}function jl(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fm(t){return be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function zf(t,e,n){return{name:Bl(t,e),fields:n.value.mapValue.fields}}function n0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(be(f===void 0||typeof f=="string"),tt.fromBase64String(f||"")):(be(f===void 0||f instanceof Buffer||f instanceof Uint8Array),tt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?F.UNKNOWN:om(h.code);return new J(f,h.message||"")}(o);n=new lm(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=nl(t,r.document.name),i=Zt(r.document.updateTime),o=r.document.createTime?Zt(r.document.createTime):ue.min(),l=new Rt({mapValue:{fields:r.document.fields}}),c=ct.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new po(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=nl(t,r.document),i=r.readTime?Zt(r.readTime):ue.min(),o=ct.newNoDocument(s,i),l=r.removedTargetIds||[];n=new po([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=nl(t,r.document),i=r.removedTargetIds||[];n=new po([],i,s,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new WR(s,i),l=r.targetId;n=new am(l,o)}}return n}function r0(t,e){let n;if(e instanceof da)n={update:zf(t,e.key,e.value)};else if(e instanceof im)n={delete:Bl(t,e.key)};else if(e instanceof Er)n={update:zf(t,e.key,e.data),updateMask:f0(e.fieldMask)};else{if(!(e instanceof qR))return le();n={verify:Bl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Mo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ci)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ui)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Lo)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:e0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le()}(t,e.precondition)),n}function s0(t,e){return t&&t.length>0?(be(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Zt(s.updateTime):Zt(i);return o.isEqual(ue.min())&&(o=Zt(i)),new UR(o,s.transformResults||[])}(n,e))):[]}function i0(t,e){return{documents:[hm(t,e.path)]}}function o0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=hm(t,s);const i=function(h){if(h.length!==0)return pm(qt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Dr(m.field),direction:c0(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Fl(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function a0(t){let e=t0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=dm(p);return m instanceof qt&&jg(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new li(Vr(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,la(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,v=p.values||[];return new xo(v,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,v=p.values||[];return new xo(v,m)}(n.endAt)),bR(e,s,o,i,l,"F",c,h)}function l0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function dm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Vr(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Vr(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vr(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Vr(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(Vr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return qt.create(n.compositeFilter.filters.map(r=>dm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function c0(t){return YR[t]}function u0(t){return JR[t]}function h0(t){return XR[t]}function Dr(t){return{fieldPath:t.canonicalString()}}function Vr(t){return Xe.fromServerFormat(t.fieldPath)}function pm(t){return t instanceof qe?function(n){if(n.op==="=="){if(kf(n.value))return{unaryFilter:{field:Dr(n.field),op:"IS_NAN"}};if(Vf(n.value))return{unaryFilter:{field:Dr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(kf(n.value))return{unaryFilter:{field:Dr(n.field),op:"IS_NOT_NAN"}};if(Vf(n.value))return{unaryFilter:{field:Dr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dr(n.field),op:u0(n.op),value:n.value}}}(t):t instanceof qt?function(n){const r=n.getFilters().map(s=>pm(s));return r.length===1?r[0]:{compositeFilter:{op:h0(n.op),filters:r}}}(t):le()}function f0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function gm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Bn{constructor(e,n,r,s,i=ue.min(),o=ue.min(),l=tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class d0{constructor(e){this.ct=e}}function p0(t){const e=a0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ll(e,e.limit,"L"):e}/**
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
 */class g0{constructor(){this.un=new m0}addToCollectionParentIndex(e,n){return this.un.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(zn.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(zn.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class m0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ze(De.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ze(De.comparator)).toArray()}}/**
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
 */class ts{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ts(0)}static kn(){return new ts(-1)}}/**
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
 */class _0{constructor(){this.changes=new cs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class y0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class v0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Gs(r.mutation,s,Lt.empty(),He.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const s=lr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ds();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=lr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=An();const o=Ks(),l=function(){return Ks()}();return n.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Er)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Gs(f.mutation,h,f.mutation.getFieldMask(),He.now())):o.set(h.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new y0(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ks();let s=new xe((o,l)=>o-l),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let f=r.get(c)||Lt.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(s.get(l.batchId)||me()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=Jg();f.forEach(m=>{if(!i.has(m)){const v=rm(n.get(m),r.get(m));v!==null&&p.set(m,v),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Kg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(lr());let l=-1,c=i;return o.next(h=>B.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,me())).next(f=>({batchId:l,changes:Yg(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let s=Ds();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ds();return this.indexManager.getCollectionParents(e,i).next(l=>B.forEach(l,c=>{const h=function(p,m){return new ls(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ct.newInvalidDocument(f)))});let l=Ds();return o.forEach((c,h)=>{const f=i.get(c);f!==void 0&&Gs(f.mutation,h,Lt.empty(),He.now()),ua(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class E0{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return B.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Zt(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:p0(s.bundledQuery),readTime:Zt(s.readTime)}}(n)),B.resolve()}}/**
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
 */class T0{constructor(){this.overlays=new xe(te.comparator),this.Ir=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=lr();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=lr(),i=n.length+1,o=new te(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new xe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=lr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=lr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return B.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new HR(n,r));let i=this.Ir.get(n);i===void 0&&(i=me(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class I0{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class Mc{constructor(){this.Tr=new Ze(We.Er),this.dr=new Ze(We.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new We(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new We(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new te(new De([])),r=new We(n,e),s=new We(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new te(new De([])),r=new We(n,e),s=new We(n,e+1);let i=me();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new We(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return te.comparator(e.key,n.key)||Ie(e.wr,n.wr)}static Ar(e,n){return Ie(e.wr,n.wr)||te.comparator(e.key,n.key)}}/**
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
 */class w0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ze(We.Er)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $R(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new We(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),s=new We(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(Ie);return n.forEach(s=>{const i=new We(s,0),o=new We(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),B.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new We(new te(i),0);let l=new Ze(Ie);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},o),B.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return B.forEach(n.mutations,s=>{const i=new We(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new We(n,0),s=this.br.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class A0{constructor(e){this.Mr=e,this.docs=function(){return new xe(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=An();const o=n.path,l=new te(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||aR(oR(f),r)<=0||(s.has(f.key)||ua(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le()}Or(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new R0(this)}getSize(e){return B.resolve(this.size)}}class R0 extends _0{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class b0{constructor(e){this.persistence=e,this.Nr=new cs(n=>Nc(n),Oc),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Mc,this.targetCount=0,this.kr=ts.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),B.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ts(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Kn(n),B.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Br.containsKey(n))}}/**
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
 */class S0{constructor(e,n){this.qr={},this.overlays={},this.Qr=new bc(0),this.Kr=!1,this.Kr=!0,this.$r=new I0,this.referenceDelegate=e(this),this.Ur=new b0(this),this.indexManager=new g0,this.remoteDocumentCache=function(s){return new A0(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new d0(n),this.Gr=new E0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new T0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new w0(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new P0(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return B.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class P0 extends cR{constructor(e){super(),this.currentSequenceNumber=e}}class Lc{constructor(e){this.persistence=e,this.Jr=new Mc,this.Yr=null}static Zr(e){return new Lc(e)}get Xr(){if(this.Yr)return this.Yr;throw le()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),B.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,r=>{const s=te.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return B.or([()=>B.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Fc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=me(),s=me();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Fc(e,n.fromCache,r,s)}}/**
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
 */class C0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class N0{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return IT()?8:uR(ft())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new C0;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Ss()<=_e.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Or(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(Ss()<=_e.DEBUG&&X("QueryEngine","Query:",Or(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Ss()<=_e.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Or(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xt(n))):B.resolve())}Yi(e,n){if(Ff(n))return B.resolve(null);let r=Xt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ll(n,null,"F"),r=Xt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=me(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,o,c.readTime)?this.Yi(e,Ll(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,s){return Ff(n)||s.isEqual(ue.min())?B.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?B.resolve(null):(Ss()<=_e.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Or(n)),this.rs(e,o,n,iR(s,-1)).next(l=>l))})}ts(e,n){let r=new Ze(zg(e));return n.forEach((s,i)=>{ua(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Ss()<=_e.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Or(n)),this.Ji.getDocumentsMatchingQuery(e,n,zn.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class O0{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new xe(Ie),this._s=new cs(i=>Nc(i),Oc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new v0(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function D0(t,e,n,r){return new O0(t,e,n,r)}async function mm(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=me();for(const h of s){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function V0(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,m=p.keys();let v=B.resolve();return m.forEach(C=>{v=v.next(()=>f.getEntry(c,C)).next(N=>{const D=h.docVersions.get(C);be(D!==null),N.version.compareTo(D)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=me();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function _m(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function k0(t,e){const n=he(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let v=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(tt.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),s=s.insert(p,v),function(N,D,j){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(m,v,f)&&l.push(n.Ur.updateTargetData(i,v))});let c=An(),h=me();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(x0(i,o,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!r.isEqual(ue.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return B.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.os=s,i))}function x0(t,e,n){let r=me(),s=me();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=An();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ue.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):X("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function M0(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function L0(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Bn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function ql(t,e,n){const r=he(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ii(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Qf(t,e,n){const r=he(t);let s=ue.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,f){const p=he(c),m=p._s.get(f);return m!==void 0?B.resolve(p.os.get(m)):p.Ur.getTargetData(h,f)}(r,o,Xt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:me())).next(l=>(F0(r,PR(e),l),{documents:l,Ts:i})))}function F0(t,e,n){let r=t.us.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Yf{constructor(){this.activeTargetIds=kR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class U0{constructor(){this.so=new Yf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Yf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class B0{_o(e){}shutdown(){}}/**
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
 */class Jf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ji=null;function rl(){return Ji===null?Ji=function(){return 268435456+Math.round(2147483648*Math.random())}():Ji++,"0x"+Ji.toString(16)}/**
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
 */const j0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class q0{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const it="WebChannelConnection";class $0 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=rl(),c=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,c,h,s).then(f=>(X("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Jr("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+as}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=j0[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=rl();return new Promise((o,l)=>{const c=new Cg;c.setWithCredentials(!0),c.listenOnce(Ng.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case uo.NO_ERROR:const f=c.getResponseJson();X(it,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case uo.TIMEOUT:X(it,`RPC '${e}' ${i} timed out`),l(new J(F.DEADLINE_EXCEEDED,"Request time out"));break;case uo.HTTP_ERROR:const p=c.getStatus();if(X(it,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const C=function(D){const j=D.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(j)>=0?j:F.UNKNOWN}(v.status);l(new J(C,v.message))}else l(new J(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new J(F.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{X(it,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(it,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=rl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Vg(),l=Dg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");X(it,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);let m=!1,v=!1;const C=new q0({Io:D=>{v?X(it,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(X(it,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),X(it,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},To:()=>p.close()}),N=(D,j,M)=>{D.listen(j,q=>{try{M(q)}catch(H){setTimeout(()=>{throw H},0)}})};return N(p,Os.EventType.OPEN,()=>{v||(X(it,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),N(p,Os.EventType.CLOSE,()=>{v||(v=!0,X(it,`RPC '${e}' stream ${s} transport closed`),C.So())}),N(p,Os.EventType.ERROR,D=>{v||(v=!0,Jr(it,`RPC '${e}' stream ${s} transport errored:`,D),C.So(new J(F.UNAVAILABLE,"The operation could not be completed")))}),N(p,Os.EventType.MESSAGE,D=>{var j;if(!v){const M=D.data[0];be(!!M);const q=M,H=q.error||((j=q[0])===null||j===void 0?void 0:j.error);if(H){X(it,`RPC '${e}' stream ${s} received error:`,H);const ce=H.status;let oe=function(E){const A=je[E];if(A!==void 0)return om(A)}(ce),w=H.message;oe===void 0&&(oe=F.INTERNAL,w="Unknown error status: "+ce+" with message "+H.message),v=!0,C.So(new J(oe,w)),p.close()}else X(it,`RPC '${e}' stream ${s} received:`,M),C.bo(M)}}),N(l,Og.STAT_EVENT,D=>{D.stat===Ol.PROXY?X(it,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Ol.NOPROXY&&X(it,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function sl(){return typeof document<"u"?document:null}/**
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
 */function ga(t){return new ZR(t,!0)}/**
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
 */class ym{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class vm{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ym(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new J(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class H0 extends vm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=n0(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?Zt(o.readTime):ue.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=jl(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=xl(c)?{documents:i0(i,c)}:{query:o0(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=cm(i,o.resumeToken);const h=Fl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ue.min())>0){l.readTime=Fo(i,o.snapshotVersion.toTimestamp());const h=Fl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=l0(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=jl(this.serializer),n.removeTarget=e,this.a_(n)}}class W0 extends vm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=s0(e.writeResults,e.commitTime),r=Zt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=jl(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>r0(this.serializer,r))};this.a_(n)}}/**
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
 */class K0 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new J(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Ul(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(F.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Ul(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class G0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(wn(n),this.D_=!1):X("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class z0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Tr(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=he(c);h.L_.add(4),await Ai(h),h.q_.set("Unknown"),h.L_.delete(4),await ma(h)}(this))})}),this.q_=new G0(r,s)}}async function ma(t){if(Tr(t))for(const e of t.B_)await e(!0)}async function Ai(t){for(const e of t.B_)await e(!1)}function Em(t,e){const n=he(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),qc(n)?jc(n):us(n).r_()&&Bc(n,e))}function Uc(t,e){const n=he(t),r=us(n);n.N_.delete(e),r.r_()&&Tm(n,e),n.N_.size===0&&(r.r_()?r.o_():Tr(n)&&n.q_.set("Unknown"))}function Bc(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}us(t).A_(e)}function Tm(t,e){t.Q_.xe(e),us(t).R_(e)}function jc(t){t.Q_=new QR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),us(t).start(),t.q_.v_()}function qc(t){return Tr(t)&&!us(t).n_()&&t.N_.size>0}function Tr(t){return he(t).L_.size===0}function Im(t){t.Q_=void 0}async function Q0(t){t.q_.set("Online")}async function Y0(t){t.N_.forEach((e,n)=>{Bc(t,e)})}async function J0(t,e){Im(t),qc(t)?(t.q_.M_(e),jc(t)):t.q_.set("Unknown")}async function X0(t,e,n){if(t.q_.set("Online"),e instanceof lm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uo(t,r)}else if(e instanceof po?t.Q_.Ke(e):e instanceof am?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ue.min()))try{const r=await _m(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(tt.EMPTY_BYTE_STRING,f.snapshotVersion)),Tm(i,c);const p=new Bn(f.target,c,h,f.sequenceNumber);Bc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Uo(t,r)}}async function Uo(t,e,n){if(!Ii(e))throw e;t.L_.add(1),await Ai(t),t.q_.set("Offline"),n||(n=()=>_m(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ma(t)})}function wm(t,e){return e().catch(n=>Uo(t,n,e))}async function _a(t){const e=he(t),n=Yn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Z0(e);)try{const s=await M0(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,eb(e,s)}catch(s){await Uo(e,s)}Am(e)&&Rm(e)}function Z0(t){return Tr(t)&&t.O_.length<10}function eb(t,e){t.O_.push(e);const n=Yn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Am(t){return Tr(t)&&!Yn(t).n_()&&t.O_.length>0}function Rm(t){Yn(t).start()}async function tb(t){Yn(t).p_()}async function nb(t){const e=Yn(t);for(const n of t.O_)e.m_(n.mutations)}async function rb(t,e,n){const r=t.O_.shift(),s=Vc.from(r,e,n);await wm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await _a(t)}async function sb(t,e){e&&Yn(t).V_&&await async function(r,s){if(function(o){return KR(o)&&o!==F.ABORTED}(s.code)){const i=r.O_.shift();Yn(r).s_(),await wm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await _a(r)}}(t,e),Am(t)&&Rm(t)}async function Xf(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Tr(n);n.L_.add(3),await Ai(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ma(n)}async function ib(t,e){const n=he(t);e?(n.L_.delete(2),await ma(n)):e||(n.L_.add(2),await Ai(n),n.q_.set("Unknown"))}function us(t){return t.K_||(t.K_=function(n,r,s){const i=he(n);return i.w_(),new H0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:Q0.bind(null,t),Ro:Y0.bind(null,t),mo:J0.bind(null,t),d_:X0.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),qc(t)?jc(t):t.q_.set("Unknown")):(await t.K_.stop(),Im(t))})),t.K_}function Yn(t){return t.U_||(t.U_=function(n,r,s){const i=he(n);return i.w_(),new W0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:tb.bind(null,t),mo:sb.bind(null,t),f_:nb.bind(null,t),g_:rb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await _a(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class $c{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new $c(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hc(t,e){if(wn("AsyncQueue",`${e}: ${t}`),Ii(t))return new J(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Hr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=Ds(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new Hr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Zf{constructor(){this.W_=new xe(te.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):le():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ns{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ns(e,n,Hr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ca(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class ob{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class ab{constructor(){this.queries=ed(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=ed(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new J(F.ABORTED,"Firestore shutting down"))}}function ed(){return new cs(t=>Gg(t),ca)}async function lb(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new ob,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Hc(o,`Initialization of query '${Or(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Wc(n)}async function cb(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ub(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Wc(n)}function hb(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Wc(t){t.Y_.forEach(e=>{e.next()})}var $l,td;(td=$l||($l={})).ea="default",td.Cache="cache";class fb{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==$l.Cache}}/**
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
 */class bm{constructor(e){this.key=e}}class Sm{constructor(e){this.key=e}}class db{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=me(),this.mutatedKeys=me(),this.Aa=zg(e),this.Ra=new Hr(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Zf,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),v=ua(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),N=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let D=!1;m&&v?m.data.isEqual(v.data)?C!==N&&(r.track({type:3,doc:v}),D=!0):this.ga(m,v)||(r.track({type:2,doc:v}),D=!0,(c&&this.Aa(v,c)>0||h&&this.Aa(v,h)<0)&&(l=!0)):!m&&v?(r.track({type:0,doc:v}),D=!0):m&&!v&&(r.track({type:1,doc:m}),D=!0,(c||h)&&(l=!0)),D&&(v?(o=o.add(v),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(v,C){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return N(v)-N(C)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,o.length!==0||h?{snapshot:new ns(this.query,e.Ra,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Zf,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=me(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Sm(r))}),this.da.forEach(r=>{e.has(r)||n.push(new bm(r))}),n}ba(e){this.Ta=e.Ts,this.da=me();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ns.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class pb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gb{constructor(e){this.key=e,this.va=!1}}class mb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new cs(l=>Gg(l),ca),this.Ma=new Map,this.xa=new Set,this.Oa=new xe(te.comparator),this.Na=new Map,this.La=new Mc,this.Ba={},this.ka=new Map,this.qa=ts.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function _b(t,e,n=!0){const r=Vm(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Pm(r,e,n,!0),s}async function yb(t,e){const n=Vm(t);await Pm(n,e,!0,!1)}async function Pm(t,e,n,r){const s=await L0(t.localStore,Xt(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await vb(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Em(t.remoteStore,s),l}async function vb(t,e,n,r,s){t.Ka=(p,m,v)=>async function(N,D,j,M){let q=D.view.ma(j);q.ns&&(q=await Qf(N.localStore,D.query,!1).then(({documents:w})=>D.view.ma(w,q)));const H=M&&M.targetChanges.get(D.targetId),ce=M&&M.targetMismatches.get(D.targetId)!=null,oe=D.view.applyChanges(q,N.isPrimaryClient,H,ce);return rd(N,D.targetId,oe.wa),oe.snapshot}(t,p,m,v);const i=await Qf(t.localStore,e,!0),o=new db(e,i.Ts),l=o.ma(i.documents),c=wi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);rd(t,n,h.wa);const f=new pb(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function Eb(t,e,n){const r=he(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!ca(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ql(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Uc(r.remoteStore,s.targetId),Hl(r,s.targetId)}).catch(Ti)):(Hl(r,s.targetId),await ql(r.localStore,s.targetId,!0))}async function Tb(t,e){const n=he(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Uc(n.remoteStore,r.targetId))}async function Ib(t,e,n){const r=Cb(t);try{const s=await function(o,l){const c=he(o),h=He.now(),f=l.reduce((v,C)=>v.add(C.key),me());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let C=An(),N=me();return c.cs.getEntries(v,f).next(D=>{C=D,C.forEach((j,M)=>{M.isValidDocument()||(N=N.add(j))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,C)).next(D=>{p=D;const j=[];for(const M of l){const q=jR(M,p.get(M.key).overlayedDocument);q!=null&&j.push(new Er(M.key,q,Fg(q.value.mapValue),_n.exists(!0)))}return c.mutationQueue.addMutationBatch(v,h,j,l)}).next(D=>{m=D;const j=D.applyToLocalDocumentSet(p,N);return c.documentOverlayCache.saveOverlays(v,D.batchId,j)})}).then(()=>({batchId:m.batchId,changes:Yg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Ba[o.currentUser.toKey()];h||(h=new xe(Ie)),h=h.insert(l,c),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Ri(r,s.changes),await _a(r.remoteStore)}catch(s){const i=Hc(s,"Failed to persist write");n.reject(i)}}async function Cm(t,e){const n=he(t);try{const r=await k0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?be(o.va):s.removedDocuments.size>0&&(be(o.va),o.va=!1))}),await Ri(n,r,e)}catch(r){await Ti(r)}}function nd(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=he(o);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const m of p.j_)m.Z_(l)&&(h=!0)}),h&&Wc(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wb(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new xe(te.comparator);o=o.insert(i,ct.newNoDocument(i,ue.min()));const l=me().add(i),c=new pa(ue.min(),new Map,new xe(Ie),o,l);await Cm(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),Kc(r)}else await ql(r.localStore,e,!1).then(()=>Hl(r,e,n)).catch(Ti)}async function Ab(t,e){const n=he(t),r=e.batch.batchId;try{const s=await V0(n.localStore,e);Om(n,r,null),Nm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ri(n,s)}catch(s){await Ti(s)}}async function Rb(t,e,n){const r=he(t);try{const s=await function(o,l){const c=he(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(be(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Om(r,e,n),Nm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ri(r,s)}catch(s){await Ti(s)}}function Nm(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Om(t,e,n){const r=he(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Hl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Dm(t,r)})}function Dm(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Uc(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Kc(t))}function rd(t,e,n){for(const r of n)r instanceof bm?(t.La.addReference(r.key,e),bb(t,r)):r instanceof Sm?(X("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Dm(t,r.key)):le()}function bb(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(r),Kc(t))}function Kc(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new te(De.fromString(e)),r=t.qa.next();t.Na.set(r,new gb(n)),t.Oa=t.Oa.insert(n,r),Em(t.remoteStore,new Bn(Xt(Wg(n.path)),r,"TargetPurposeLimboResolution",bc.oe))}}async function Ri(t,e,n){const r=he(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Fc.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,h){const f=he(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>B.forEach(h,m=>B.forEach(m.$i,v=>f.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>B.forEach(m.Ui,v=>f.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!Ii(p))throw p;X("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const v=f.os.get(m),C=v.snapshotVersion,N=v.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(m,N)}}}(r.localStore,i))}async function Sb(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await mm(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new J(F.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ri(n,r.hs)}}function Pb(t,e){const n=he(t),r=n.Na.get(e);if(r&&r.va)return me().add(r.key);{let s=me();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function Vm(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wb.bind(null,e),e.Ca.d_=ub.bind(null,e.eventManager),e.Ca.$a=hb.bind(null,e.eventManager),e}function Cb(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ab.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Rb.bind(null,e),e}class Bo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ga(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return D0(this.persistence,new N0,e.initialUser,this.serializer)}Ga(e){return new S0(Lc.Zr,this.serializer)}Wa(e){return new U0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bo.provider={build:()=>new Bo};class Wl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>nd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sb.bind(null,this.syncEngine),await ib(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ab}()}createDatastore(e){const n=ga(e.databaseInfo.databaseId),r=function(i){return new $0(i)}(e.databaseInfo);return function(i,o,l,c){return new K0(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new z0(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>nd(this.syncEngine,n,0),function(){return Jf.D()?new Jf:new B0}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,f){const p=new mb(s,i,o,l,c,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=he(s);X("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ai(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Wl.provider={build:()=>new Wl};/**
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
 */class Nb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Ob{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=at.UNAUTHENTICATED,this.clientId=xg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Hc(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function il(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await mm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Db(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Xf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Xf(e.remoteStore,s)),t._onlineComponents=e}async function Db(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await il(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Jr("Error using user provided cache. Falling back to memory cache: "+n),await il(t,new Bo)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await il(t,new Bo);return t._offlineComponents}async function km(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await sd(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await sd(t,new Wl))),t._onlineComponents}function Vb(t){return km(t).then(e=>e.syncEngine)}async function kb(t){const e=await km(t),n=e.eventManager;return n.onListen=_b.bind(null,e.syncEngine),n.onUnlisten=Eb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=yb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Tb.bind(null,e.syncEngine),n}function xb(t,e,n={}){const r=new Wn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const f=new Nb({next:m=>{f.Za(),o.enqueueAndForget(()=>cb(i,p)),m.fromCache&&c.source==="server"?h.reject(new J(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new fb(l,f,{includeMetadataChanges:!0,_a:!0});return lb(i,p)}(await kb(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function xm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const id=new Map;/**
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
 */function Mm(t,e,n){if(!n)throw new J(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Mb(t,e,n,r){if(e===!0&&r===!0)throw new J(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function od(t){if(!te.isDocumentKey(t))throw new J(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ad(t){if(te.isDocumentKey(t))throw new J(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ya(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function hi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ya(t);throw new J(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class ld{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Mb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class va{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ld({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ld(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new YA;switch(r.type){case"firstParty":return new eR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=id.get(n);r&&(X("ComponentProvider","Removing Datastore"),id.delete(n),r.terminate())}(this),Promise.resolve()}}function Lb(t,e,n,r={}){var s;const i=(t=hi(t,va))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Jr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=at.MOCK_USER;else{l=gT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new J(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new at(h)}t._authCredentials=new JA(new kg(l,c))}}/**
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
 */class Ir{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ir(this.firestore,e,this._query)}}class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class Kn extends Ir{constructor(e,n,r){super(e,n,Wg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new te(e))}withConverter(e){return new Kn(this.firestore,e,this._path)}}function ES(t,e,...n){if(t=Ke(t),Mm("collection","path",e),t instanceof va){const r=De.fromString(e,...n);return ad(r),new Kn(t,null,r)}{if(!(t instanceof Pt||t instanceof Kn))throw new J(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return ad(r),new Kn(t.firestore,null,r)}}function TS(t,e,...n){if(t=Ke(t),arguments.length===1&&(e=xg.newId()),Mm("doc","path",e),t instanceof va){const r=De.fromString(e,...n);return od(r),new Pt(t,null,new te(r))}{if(!(t instanceof Pt||t instanceof Kn))throw new J(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return od(r),new Pt(t.firestore,t instanceof Kn?t.converter:null,new te(r))}}/**
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
 */class cd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ym(this,"async_queue_retry"),this.Vu=()=>{const r=sl();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=sl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=sl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Wn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ii(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw wn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=$c.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&le()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Gc extends va{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new cd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new cd(e),this._firestoreClient=void 0,await e}}}function Fb(t,e){const n=typeof t=="object"?t:Wp(),r=typeof t=="string"?t:"(default)",s=gc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=dT("firestore");i&&Lb(s,...i)}return s}function Lm(t){if(t._terminated)throw new J(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Ub(t),t._firestoreClient}function Ub(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,f){return new dR(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,xm(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new Ob(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rs(tt.fromBase64String(e))}catch(n){throw new J(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rs(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ea{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zc{constructor(e){this._methodName=e}}/**
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
 */class Qc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
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
 */class Yc{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const Bb=/^__.*__$/;class Fm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Er(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Um(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class Jc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Jc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return jo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Um(this.Cu)&&Bb.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class jb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ga(e)}Qu(e,n,r,s=!1){return new Jc({Cu:e,methodName:n,qu:r,path:Xe.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bm(t){const e=t._freezeSettings(),n=ga(t._databaseId);return new jb(t._databaseId,!!e.ignoreUndefinedProperties,n)}class Ta extends zc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ta}}function qb(t,e,n,r){const s=t.Qu(1,e,n);qm("Data must be an object, but it was:",s,r);const i=[],o=Rt.empty();vr(r,(c,h)=>{const f=Xc(e,c,n);h=Ke(h);const p=s.Nu(f);if(h instanceof Ta)i.push(f);else{const m=bi(h,p);m!=null&&(i.push(f),o.set(f,m))}});const l=new Lt(i);return new Fm(o,l,s.fieldTransforms)}function $b(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[ud(e,r,n)],c=[s];if(i.length%2!=0)throw new J(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(ud(e,i[m])),c.push(i[m+1]);const h=[],f=Rt.empty();for(let m=l.length-1;m>=0;--m)if(!Gb(h,l[m])){const v=l[m];let C=c[m];C=Ke(C);const N=o.Nu(v);if(C instanceof Ta)h.push(v);else{const D=bi(C,N);D!=null&&(h.push(v),f.set(v,D))}}const p=new Lt(h);return new Fm(f,p,o.fieldTransforms)}function Hb(t,e,n,r=!1){return bi(n,t.Qu(r?4:3,e))}function bi(t,e){if(jm(t=Ke(t)))return qm("Unsupported field value:",e,t),Wb(t,e);if(t instanceof zc)return function(r,s){if(!Um(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=bi(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=He.fromDate(r);return{timestampValue:Fo(s.serializer,i)}}if(r instanceof He){const i=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fo(s.serializer,i)}}if(r instanceof Qc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rs)return{bytesValue:cm(s.serializer,r._byteString)};if(r instanceof Pt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:xc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Yc)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Dc(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${ya(r)}`)}(t,e)}function Wb(t,e){const n={};return Mg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vr(t,(r,s)=>{const i=bi(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function jm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof Qc||t instanceof rs||t instanceof Pt||t instanceof zc||t instanceof Yc)}function qm(t,e,n){if(!jm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ya(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function ud(t,e,n){if((e=Ke(e))instanceof Ea)return e._internalPath;if(typeof e=="string")return Xc(t,e);throw jo("Field path arguments must be of type string or ",t,!1,void 0,n)}const Kb=new RegExp("[~\\*/\\[\\]]");function Xc(t,e,n){if(e.search(Kb)>=0)throw jo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ea(...e.split("."))._internalPath}catch{throw jo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new J(F.INVALID_ARGUMENT,l+t+c)}function Gb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class $m{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Zc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zb extends $m{data(){return super.data()}}function Zc(t,e){return typeof e=="string"?Xc(t,e):e instanceof Ea?e._internalPath:e._delegate._internalPath}/**
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
 */function Qb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class eu{}class Hm extends eu{}function IS(t,e,...n){let r=[];e instanceof eu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof nu).length,l=i.filter(c=>c instanceof tu).length;if(o>1||o>0&&l>0)throw new J(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class tu extends Hm{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new tu(e,n,r)}_apply(e){const n=this._parse(e);return Wm(e._query,n),new Ir(e.firestore,e.converter,Ml(e._query,n))}_parse(e){const n=Bm(e.firestore);return function(i,o,l,c,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new J(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){fd(p,f);const v=[];for(const C of p)v.push(hd(c,i,C));m={arrayValue:{values:v}}}else m=hd(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||fd(p,f),m=Hb(l,o,p,f==="in"||f==="not-in");return qe.create(h,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class nu extends eu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new nu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Wm(o,c),o=Ml(o,c)}(e._query,n),new Ir(e.firestore,e.converter,Ml(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ru extends Hm{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ru(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new J(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new J(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new li(i,o)}(e._query,this._field,this._direction);return new Ir(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ls(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function wS(t,e="asc"){const n=e,r=Zc("orderBy",t);return ru._create(r,n)}function hd(t,e,n){if(typeof(n=Ke(n))=="string"){if(n==="")throw new J(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Kg(e)&&n.indexOf("/")!==-1)throw new J(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!te.isDocumentKey(r))throw new J(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Df(t,new te(r))}if(n instanceof Pt)return Df(t,n._key);throw new J(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ya(n)}.`)}function fd(t,e){if(!Array.isArray(t)||t.length===0)throw new J(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Wm(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new J(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Yb{convertValue(e,n="none"){switch(mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Fe(o.doubleValue));return new Yc(i)}convertGeoPoint(e){return new Qc(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ii(e));default:return null}}convertTimestamp(e){const n=Qn(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);be(gm(r));const s=new oi(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||wn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Xi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jb extends $m{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new go(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Zc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class go extends Jb{data(e={}){return super.data(e)}}class Xb{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Xi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new go(this._firestore,this._userDataWriter,r.key,r,new Xi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new go(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Xi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new go(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Xi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Zb(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Zb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}class eS extends Yb{constructor(e){super(),this.firestore=e}convertBytes(e){return new rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function AS(t){t=hi(t,Ir);const e=hi(t.firestore,Gc),n=Lm(e),r=new eS(e);return Qb(t._query),xb(n,t._query).then(s=>new Xb(e,r,t,s))}function RS(t,e,n,...r){t=hi(t,Pt);const s=hi(t.firestore,Gc),i=Bm(s);let o;return o=typeof(e=Ke(e))=="string"||e instanceof Ea?$b(i,"updateDoc",t._key,e,n,r):qb(i,"updateDoc",t._key,e),tS(s,[o.toMutation(t._key,_n.exists(!0))])}function tS(t,e){return function(r,s){const i=new Wn;return r.asyncQueue.enqueueAndForget(async()=>Ib(await Vb(r),s,i)),i.promise}(Lm(t),e)}(function(e,n=!0){(function(s){as=s})(ss),Qr(new fr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Gc(new XA(r.getProvider("auth-internal")),new nR(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new J(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oi(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),$n(Sf,"4.7.3",e),$n(Sf,"4.7.3","esm2017")})();const nS={apiKey:"AIzaSyBy7oBzUZzAjLaBRlXwfS5_so31ASHk7CM",authDomain:"linkup-encuesta-2026.firebaseapp.com",projectId:"linkup-encuesta-2026",storageBucket:"linkup-encuesta-2026.firebasestorage.app",messagingSenderId:"74475292124",appId:"1:74475292124:web:81a7ffe045724f25c0bb19"},Km=Hp(nS),Gm=zA(Km),bS=Fb(Km),rS=[{path:"/login",name:"Login",component:()=>Dh(()=>import("./LoginView-Big9lIuv.js"),__vite__mapDeps([0,1,2]))},{path:"/",name:"Dashboard",component:()=>Dh(()=>import("./DashboardView-DsKFjOyR.js"),__vite__mapDeps([3,1,4])),meta:{requiresAuth:!0}}],zm=iT({history:LE("/admin/dist/"),routes:rS});let zs;const sS=new Promise(t=>{const e=_g(Gm,n=>{zs=n,e(),t(n)})});zm.beforeEach(async t=>{if(zs===void 0&&await sS,t.meta.requiresAuth&&!zs)return"/login";if(t.name==="Login"&&zs)return"/"});_g(Gm,t=>{zs=t});Wv(Jv).use(zm).mount("#app");export{mS as A,RS as B,TS as C,cn as F,oS as T,zv as _,yp as a,av as b,lS as c,iS as d,uS as e,cS as f,pS as g,Gm as h,Ey as i,fS as j,aS as k,mp as l,ES as m,Jl as n,pp as o,bS as p,IS as q,X_ as r,gS as s,N_ as t,Lr as u,hS as v,dS as w,wS as x,AS as y,Mt as z};
