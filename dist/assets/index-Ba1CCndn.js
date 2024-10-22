(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const He=["regular","dark","chockboard","pretty"];function Ve(e){He.forEach(t=>{document.body.classList.remove(`${t}-mode`)}),document.body.classList.add(`${e}-mode`),localStorage.setItem("selected-mode",e)}Ve(localStorage.getItem("selected-mode")||"light");const At=(e,t)=>e===t,j=Symbol("solid-proxy"),xt=typeof Proxy=="function",$e=Symbol("solid-track"),ae={equals:At};let et=rt;const B=1,ue=2,tt={owned:null,cleanups:null,context:null,owner:null};var g=null;let Oe=null,St=null,_=null,h=null,T=null,be=0;function fe(e,t){const n=_,s=g,i=e.length===0,o=t===void 0?s:t,l=i?tt:{owned:null,cleanups:null,context:o?o.context:null,owner:o},r=i?e:()=>e(()=>ne(()=>I(l)));g=l,_=null;try{return K(r,!0)}finally{_=n,g=s}}function nt(e,t){t=t?Object.assign({},ae,t):ae;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),ot(n,i));return[it.bind(n),s]}function Y(e,t,n){const s=Te(e,t,!1,B);se(s)}function te(e,t,n){et=Pt;const s=Te(e,t,!1,B);s.user=!0,T?T.push(s):se(s)}function de(e,t,n){n=n?Object.assign({},ae,n):ae;const s=Te(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,se(s),it.bind(s)}function Ot(e){return K(e,!1)}function ne(e){if(_===null)return e();const t=_;_=null;try{return e()}finally{_=t}}function st(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function Pe(){return _}function it(){if(this.sources&&this.state)if(this.state===B)se(this);else{const e=h;h=null,K(()=>ge(this),!1),h=e}if(_){const e=this.observers?this.observers.length:0;_.sources?(_.sources.push(this),_.sourceSlots.push(e)):(_.sources=[this],_.sourceSlots=[e]),this.observers?(this.observers.push(_),this.observerSlots.push(_.sources.length-1)):(this.observers=[_],this.observerSlots=[_.sources.length-1])}return this.value}function ot(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&K(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],l=Oe&&Oe.running;l&&Oe.disposed.has(o),(l?!o.tState:!o.state)&&(o.pure?h.push(o):T.push(o),o.observers&&lt(o)),l||(o.state=B)}if(h.length>1e6)throw h=[],new Error},!1)),t}function se(e){if(!e.fn)return;I(e);const t=be;kt(e,e.value,t)}function kt(e,t,n){let s;const i=g,o=_;_=g=e;try{s=e.fn(t)}catch(l){return e.pure&&(e.state=B,e.owned&&e.owned.forEach(I),e.owned=null),e.updatedAt=n+1,ct(l)}finally{_=o,g=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ot(e,s):e.value=s,e.updatedAt=n)}function Te(e,t,n,s=B,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:g?g.context:null,pure:n};return g===null||g!==tt&&(g.owned?g.owned.push(o):g.owned=[o]),o}function _e(e){if(e.state===0)return;if(e.state===ue)return ge(e);if(e.suspense&&ne(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<be);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===B)se(e);else if(e.state===ue){const s=h;h=null,K(()=>ge(e,t[0]),!1),h=s}}function K(e,t){if(h)return e();let n=!1;t||(h=[]),T?n=!0:T=[],be++;try{const s=e();return $t(n),s}catch(s){n||(T=null),h=null,ct(s)}}function $t(e){if(h&&(rt(h),h=null),e)return;const t=T;T=null,t.length&&K(()=>et(t),!1)}function rt(e){for(let t=0;t<e.length;t++)_e(e[t])}function Pt(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:_e(s)}for(t=0;t<n;t++)_e(e[t])}function ge(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const i=s.state;i===B?s!==t&&(!s.updatedAt||s.updatedAt<be)&&_e(s):i===ue&&ge(s,t)}}}function lt(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=ue,n.pure?h.push(n):T.push(n),n.observers&&lt(n))}}function I(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),l=n.observerSlots.pop();s<i.length&&(o.sourceSlots[l]=s,i[s]=o,n.observerSlots[s]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)I(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)I(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ct(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ct(e,t=g){throw Ct(e)}const Et=Symbol("fallback");function Je(e){for(let t=0;t<e.length;t++)e[t]()}function jt(e,t,n={}){let s=[],i=[],o=[],l=0,r=t.length>1?[]:null;return st(()=>Je(o)),()=>{let c=e()||[],a=c.length,u,f;return c[$e],ne(()=>{let d,y,p,x,W,S,b,O,N;if(a===0)l!==0&&(Je(o),o=[],s=[],i=[],l=0,r&&(r=[])),n.fallback&&(s=[Et],i[0]=fe(oe=>(o[0]=oe,n.fallback())),l=1);else if(l===0){for(i=new Array(a),f=0;f<a;f++)s[f]=c[f],i[f]=fe(w);l=a}else{for(p=new Array(a),x=new Array(a),r&&(W=new Array(a)),S=0,b=Math.min(l,a);S<b&&s[S]===c[S];S++);for(b=l-1,O=a-1;b>=S&&O>=S&&s[b]===c[O];b--,O--)p[O]=i[b],x[O]=o[b],r&&(W[O]=r[b]);for(d=new Map,y=new Array(O+1),f=O;f>=S;f--)N=c[f],u=d.get(N),y[f]=u===void 0?-1:u,d.set(N,f);for(u=S;u<=b;u++)N=s[u],f=d.get(N),f!==void 0&&f!==-1?(p[f]=i[u],x[f]=o[u],r&&(W[f]=r[u]),f=y[f],d.set(N,f)):o[u]();for(f=S;f<a;f++)f in p?(i[f]=p[f],o[f]=x[f],r&&(r[f]=W[f],r[f](f))):i[f]=fe(w);i=i.slice(0,l=a),s=c.slice(0)}return i});function w(d){if(o[f]=d,r){const[y,p]=nt(f);return r[f]=p,t(c[f],y)}return t(c[f])}}}function G(e,t){return ne(()=>e(t||{}))}function re(){return!0}const Lt={get(e,t,n){return t===j?n:e.get(t)},has(e,t){return t===j?!0:e.has(t)},set:re,deleteProperty:re,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:re,deleteProperty:re}},ownKeys(e){return e.keys()}};function ke(e){return(e=typeof e=="function"?e():e)?e:{}}function Tt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Nt(...e){let t=!1;for(let l=0;l<e.length;l++){const r=e[l];t=t||!!r&&j in r,e[l]=typeof r=="function"?(t=!0,de(r)):r}if(xt&&t)return new Proxy({get(l){for(let r=e.length-1;r>=0;r--){const c=ke(e[r])[l];if(c!==void 0)return c}},has(l){for(let r=e.length-1;r>=0;r--)if(l in ke(e[r]))return!0;return!1},keys(){const l=[];for(let r=0;r<e.length;r++)l.push(...Object.keys(ke(e[r])));return[...new Set(l)]}},Lt);const n={},s=Object.create(null);for(let l=e.length-1;l>=0;l--){const r=e[l];if(!r)continue;const c=Object.getOwnPropertyNames(r);for(let a=c.length-1;a>=0;a--){const u=c[a];if(u==="__proto__"||u==="constructor")continue;const f=Object.getOwnPropertyDescriptor(r,u);if(!s[u])s[u]=f.get?{enumerable:!0,configurable:!0,get:Tt.bind(n[u]=[f.get.bind(r)])}:f.value!==void 0?f:void 0;else{const w=n[u];w&&(f.get?w.push(f.get.bind(r)):f.value!==void 0&&w.push(()=>f.value))}}}const i={},o=Object.keys(s);for(let l=o.length-1;l>=0;l--){const r=o[l],c=s[r];c&&c.get?Object.defineProperty(i,r,c):i[r]=c?c.value:void 0}return i}function Bt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return de(jt(()=>e.each,e.children,t||void 0))}function Wt(e,t,n){let s=n.length,i=t.length,o=s,l=0,r=0,c=t[i-1].nextSibling,a=null;for(;l<i||r<o;){if(t[l]===n[r]){l++,r++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===l){const u=o<s?r?n[r-1].nextSibling:n[o-r]:c;for(;r<o;)e.insertBefore(n[r++],u)}else if(o===r)for(;l<i;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[r]===t[i-1]){const u=t[--i].nextSibling;e.insertBefore(n[r++],t[l++].nextSibling),e.insertBefore(n[--o],u),t[i]=n[o]}else{if(!a){a=new Map;let f=r;for(;f<o;)a.set(n[f],f++)}const u=a.get(t[l]);if(u!=null)if(r<u&&u<o){let f=l,w=1,d;for(;++f<i&&f<o&&!((d=a.get(t[f]))==null||d!==u+w);)w++;if(w>u-r){const y=t[l];for(;r<u;)e.insertBefore(n[r++],y)}else e.replaceChild(n[r++],t[l++])}else l++;else t[l++].remove()}}}const Xe="_$DX_DELEGATE";function Mt(e,t,n,s={}){let i;return fe(o=>{i=o,t===document?e():v(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function A(e,t,n){let s;const i=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},o=()=>(s||(s=i())).cloneNode(!0);return o.cloneNode=o,o}function me(e,t=window.document){const n=t[Xe]||(t[Xe]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,zt))}}function Ne(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Dt(e,t){e.className=t}function X(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=o=>i.call(e,n[1],o))}else e.addEventListener(t,n,typeof n!="function"&&n)}function ft(e,t,n){if(!t)return n?Ne(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let i,o;for(o in n)t[o]==null&&s.removeProperty(o),delete n[o];for(o in t)i=t[o],i!==n[o]&&(s.setProperty(o,i),n[o]=i);return n}function Ue(e,t,n){return ne(()=>e(t,n))}function v(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return he(e,t,s,n);Y(i=>he(e,t(),i,n),s)}function zt(e){let t=e.target;const n=`$$${e.type}`,s=e.target,i=e.currentTarget,o=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),l=()=>{const c=t[n];if(c&&!t.disabled){const a=t[`${n}Data`];if(a!==void 0?c.call(t,a,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},r=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const c=e.composedPath();o(c[0]);for(let a=0;a<c.length-2&&(t=c[a],!!l());a++){if(t._$host){t=t._$host,r();break}if(t.parentNode===i)break}}else r();o(s)}function he(e,t,n,s,i){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(o==="number"&&(t=t.toString(),t===n))return n;if(l){let r=n[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=M(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean")n=M(e,n,s);else{if(o==="function")return Y(()=>{let r=t();for(;typeof r=="function";)r=r();n=he(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[],c=n&&Array.isArray(n);if(Ce(r,t,n,i))return Y(()=>n=he(e,r,n,s,!0)),()=>n;if(r.length===0){if(n=M(e,n,s),l)return n}else c?n.length===0?Ie(e,r,s):Wt(e,n,r):(n&&M(e),Ie(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=M(e,n,s,t);M(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ce(e,t,n,s){let i=!1;for(let o=0,l=t.length;o<l;o++){let r=t[o],c=n&&n[e.length],a;if(!(r==null||r===!0||r===!1))if((a=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))i=Ce(e,r,c)||i;else if(a==="function")if(s){for(;typeof r=="function";)r=r();i=Ce(e,Array.isArray(r)?r:[r],Array.isArray(c)?c:[c])||i}else e.push(r),i=!0;else{const u=String(r);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return i}function Ie(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function M(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const r=t[l];if(i!==r){const c=r.parentNode===e;!o&&!l?c?e.replaceChild(i,r):e.insertBefore(i,n):c&&r.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}const Ee=Symbol("store-raw"),R=Symbol("store-node"),L=Symbol("store-has"),at=Symbol("store-self");function ut(e){let t=e[j];if(!t&&(Object.defineProperty(e,j,{value:t=new Proxy(e,Yt)}),!Array.isArray(e))){const n=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let i=0,o=n.length;i<o;i++){const l=n[i];s[l].get&&Object.defineProperty(e,l,{enumerable:s[l].enumerable,get:s[l].get.bind(t)})}}return t}function pe(e){let t;return e!=null&&typeof e=="object"&&(e[j]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function q(e,t=new Set){let n,s,i,o;if(n=e!=null&&e[Ee])return n;if(!pe(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let l=0,r=e.length;l<r;l++)i=e[l],(s=q(i,t))!==i&&(e[l]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const l=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let c=0,a=l.length;c<a;c++)o=l[c],!r[o].get&&(i=e[o],(s=q(i,t))!==i&&(e[o]=s))}return e}function ve(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function F(e,t,n){if(e[t])return e[t];const[s,i]=nt(n,{equals:!1,internal:!0});return s.$=i,e[t]=s}function Zt(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===j||t===R||(delete n.value,delete n.writable,n.get=()=>e[j][t]),n}function dt(e){Pe()&&F(ve(e,R),at)()}function Rt(e){return dt(e),Reflect.ownKeys(e)}const Yt={get(e,t,n){if(t===Ee)return e;if(t===j)return n;if(t===$e)return dt(e),n;const s=ve(e,R),i=s[t];let o=i?i():e[t];if(t===R||t===L||t==="__proto__")return o;if(!i){const l=Object.getOwnPropertyDescriptor(e,t);Pe()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(l&&l.get)&&(o=F(s,t,o)())}return pe(o)?ut(o):o},has(e,t){return t===Ee||t===j||t===$e||t===R||t===L||t==="__proto__"?!0:(Pe()&&F(ve(e,L),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Rt,getOwnPropertyDescriptor:Zt};function ye(e,t,n,s=!1){if(!s&&e[t]===n)return;const i=e[t],o=e.length;n===void 0?(delete e[t],e[L]&&e[L][t]&&i!==void 0&&e[L][t].$()):(e[t]=n,e[L]&&e[L][t]&&i===void 0&&e[L][t].$());let l=ve(e,R),r;if((r=F(l,t,i))&&r.$(()=>n),Array.isArray(e)&&e.length!==o){for(let c=e.length;c<o;c++)(r=l[c])&&r.$();(r=F(l,"length",o))&&r.$(e.length)}(r=l[at])&&r.$()}function _t(e,t){const n=Object.keys(t);for(let s=0;s<n.length;s+=1){const i=n[s];ye(e,i,t[i])}}function Kt(e,t){if(typeof t=="function"&&(t=t(e)),t=q(t),Array.isArray(t)){if(e===t)return;let n=0,s=t.length;for(;n<s;n++){const i=t[n];e[n]!==i&&ye(e,n,i)}ye(e,"length",s)}else _t(e,t)}function J(e,t,n=[]){let s,i=e;if(t.length>1){s=t.shift();const l=typeof s,r=Array.isArray(e);if(Array.isArray(s)){for(let c=0;c<s.length;c++)J(e,[s[c]].concat(t),n);return}else if(r&&l==="function"){for(let c=0;c<e.length;c++)s(e[c],c)&&J(e,[c].concat(t),n);return}else if(r&&l==="object"){const{from:c=0,to:a=e.length-1,by:u=1}=s;for(let f=c;f<=a;f+=u)J(e,[f].concat(t),n);return}else if(t.length>1){J(e[s],t,[s].concat(n));return}i=e[s],n=[s].concat(n)}let o=t[0];typeof o=="function"&&(o=o(i,n),o===i)||s===void 0&&o==null||(o=q(o),s===void 0||pe(i)&&pe(o)&&!Array.isArray(o)?_t(i,o):ye(e,s,o))}function Jt(...[e,t]){const n=q(e||{}),s=Array.isArray(n),i=ut(n);function o(...l){Ot(()=>{s&&l.length===1?Kt(n,l[0]):J(n,l)})}return[i,o]}const Xt=[{name:"Hackathon",duration:480,location:[37,-122]},{name:"Festival",duration:600,location:[51,0]},{name:"Networking Event",duration:45,location:[41,-87]},{name:"Webinar",duration:90,location:[48,2]},{name:"Board Meeting",duration:240,location:[35,139]}],Ut=[{name:"Webinar",duration:90,location:[48,2]},{name:"Board Meeting",duration:240,location:[35,139]}],[ie,It]=Jt({list:JSON.parse(localStorage.getItem("eventsList")||"null")||[{name:"Party",duration:120,location:[2,5]},{name:"Concert",duration:180,location:[10,12]},{name:"Workshop",duration:90,location:[3,8]},{name:"Meetup",duration:60,location:[34,-118]}],list2:JSON.parse(localStorage.getItem("eventsList2")||"null")||Xt,list3:JSON.parse(localStorage.getItem("eventsList3")||"null")||Ut});te(()=>{localStorage.setItem("eventsList",JSON.stringify(ie.list))});te(()=>{localStorage.setItem("eventsList2",JSON.stringify(ie.list2))});te(()=>{localStorage.setItem("eventsList3",JSON.stringify(ie.list3))});console.log(ie);const we={events:ie,setEvents:It};function Gt(e,t){const n=je(e[0],t[0]),s=je(e[1],t[1]);return n+s}function je(e,t){return e>t?e-t:t-e}function Ge(e){const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n<10?`0${n}`:n}`}function D(e,t,n){if(t<0||t>e.length){console.error("Invalid index: out of bounds.");return}e.splice(t,0,n)}const m={events_accessor_key:void 0,index:void 0,size:void 0,completed:!0},Z={dragged_onto:null,grabbing:null},Le=[],Q={is_down:!1};window.addEventListener("mousedown",()=>{Q.is_down=!0,console.log(`mouse_is_down: ${Q.is_down}`)});window.addEventListener("mouseup",()=>{Q.is_down=!1,console.log(`mouse_is_down: ${Q.is_down}`)});const{events:k,setEvents:$}=we;class C{constructor(t,n){this.event_accessor_key=t,this.index=n}}class H{constructor(t,n,s){this.type=t,this.eventA=n,this.event_or_spotB=s}do(){this.type=="swap"?this.do_swap():this.type=="place_on"&&this.do_place_on()}do_place_on(){if(this.eventA.event_accessor_key==this.event_or_spotB.event_accessor_key){let n=[...k[this.eventA.event_accessor_key]];const[s]=n.splice(this.eventA.index,1);this.event_or_spotB.index>this.eventA.index?D(n,this.event_or_spotB.index,s):D(n,this.event_or_spotB.index+1,s),$(this.eventA.event_accessor_key,[...n])}else{const n=[...k[this.eventA.event_accessor_key]],s=[...k[this.event_or_spotB.event_accessor_key]],[i]=n.splice(this.eventA.index,1);D(s,this.event_or_spotB.index+1,i),$(this.eventA.event_accessor_key,n),$(this.event_or_spotB.event_accessor_key,s)}}undo_place_on(){if(this.eventA.event_accessor_key==this.event_or_spotB.event_accessor_key){let n=[...k[this.eventA.event_accessor_key]];const[s]=n.splice(this.event_or_spotB.index,1);this.eventA.index>this.event_or_spotB.index?D(n,this.eventA.index-1,s):D(n,this.eventA.index,s),$(this.event_or_spotB.event_accessor_key,[...n])}else{const n=[...k[this.eventA.event_accessor_key]],s=[...k[this.event_or_spotB.event_accessor_key]],i=this.event_or_spotB.index+1,[o]=s.splice(i,1);console.log({index_where_the_event_got_dropped_onto:i});const l=this.eventA.index;D(n,l,o),console.log({original_index_of_dragged_event:l}),$(this.eventA.event_accessor_key,n),$(this.event_or_spotB.event_accessor_key,s)}}do_swap(){this.eventA.event_accessor_key==this.eventA.event_accessor_key?this.same_list_swap():this.different_list_swap()}undo(){this.type=="place_on"?this.undo_place_on():this.type=="swap"&&(this.eventA.event_accessor_key==this.eventA.event_accessor_key?this.same_list_swap():this.different_list_swap)}same_list_swap(){const t=[...k[this.eventA.event_accessor_key]],n=t[this.eventA.index];t[this.eventA.index]=t[this.event_or_spotB.index],t[this.event_or_spotB.index]=n,console.table(t),$(this.eventA.event_accessor_key,t)}different_list_swap(){const t=[...k[this.eventA.event_accessor_key]],n=[...k[this.event_or_spotB.event_accessor_key]],s=t[this.eventA.index];t[this.eventA.index]=n[this.event_or_spotB.index],n[this.event_or_spotB.index]=s,console.table(t),console.table(n),$(this.eventA.event_accessor_key,t),$(this.event_or_spotB.event_accessor_key,n)}undo_same_list_swap(){const t=this.eventA.index,n=[...k[this.eventA.event_accessor_key]],s=n[t];n[t]=n[t],n[t]=s,console.table(n),$(this.eventA.event_accessor_key,n)}}const{events:V,setEvents:Be}=we;te(()=>{console.table(V.list)});function gt(){Be("list",[...V.list])}function qe(e,t,n){console.log("change_event_duration",{index:t,amount:n});const s=[...V[e]];s[t]={...s[t],duration:s[t].duration+n},Be(e,s)}function ht(e,t,n){if(je(n,V[e][t].duration)>=10){const s=[...V[e]];s[t]={...s[t],duration:n},Be(e,s)}}setInterval(()=>{!m.completed&&m.index!=null&&m.size!=null&&m.events_accessor_key&&!Q.is_down&&(m.completed=!0,ht(m.events_accessor_key,m.index,m.size*U.size_to_time_multiplier))},10);function qt(){ee(new H("place_on",new C(Z.grabbing?.events_accesor_key,Z.grabbing?.index),new C(Z.dragged_onto?.events_accesor_key,Z.dragged_onto?.index)))}function ee(e){Le.push(e),e.do(),console.table(Le)}function We(){Le.pop()?.undo()}function Ft(){P=!P,localStorage.setItem("event_size_callapse?",JSON.stringify(P)),gt()}let P=JSON.parse(localStorage.getItem("event_size_callapse?")||"false"),Ae=.6,Qt=1/Ae;const U={time_to_size_multiplier:Ae,size_to_time_multiplier:Qt},Ht="/assets/images-C0XeT9au.jpg";var Vt=A("<div class=event><span>"),en=A('<div class=event draggable=true><div class=top><img alt=""><div class=text><h2 class=name></h2><div class=time><p> - </p></div></div><div class=quick-mover-buttons><button>∆</button><button>¥</button></div></div><div class=lower-text><h4>location: </h4><p>this event is<strong class=event-duration><button>-</button><button>+</button></strong> minutes long</p></div><form><input type=number><button>change size</button></form><hr>');let Fe,le=(()=>{var e=Vt(),t=e.firstChild;return e.style.setProperty("height","100px"),e.style.setProperty("border","dashed 6px var(--color)"),e.style.setProperty("padding","10px"),t.style.setProperty("background-color","var(--background-color)"),t.style.setProperty("width","100%"),t.style.setProperty("height","100%"),e})();function tn({name:e,location:t,duration:n,start_time:s,end_time:i,index:o,events_accesor_key:l}){let r,c;const a=P?"40px":"90px",u=P?{height:`${Math.round(n*U.time_to_size_multiplier)}px`,border:"dashed 1px var(--color)"}:{border:"dashed 1px var(--color)"},f=(()=>{var d=en(),y=d.firstChild,p=y.firstChild,x=p.nextSibling,W=x.firstChild,S=W.nextSibling,b=S.firstChild,O=b.firstChild,N=x.nextSibling,oe=N.firstChild,vt=oe.nextSibling,Me=y.nextSibling,xe=Me.firstChild;xe.firstChild;var De=xe.nextSibling,yt=De.firstChild,ze=yt.nextSibling,Ze=ze.firstChild,Re=Ze.nextSibling,bt=Me.nextSibling,Se=bt.firstChild,mt=Se.nextSibling;d.addEventListener("dragend",()=>{Fe.style.display="block",le.parentElement?.removeChild(le),document.body.classList.remove("durring-dragging")}),X(d,"dragend",qt),d.addEventListener("dragover",()=>{Z.dragged_onto={events_accesor_key:l,index:o},f.insertAdjacentElement("afterend",le)}),d.addEventListener("drag",()=>{Z.grabbing={events_accesor_key:l,index:o},f.style.display="none",Fe=f,le.style.height=`${n*Ae}px`,document.body.classList.add("durring-dragging")});var Ye=r;typeof Ye=="function"?Ue(Ye,d):r=d,y.style.setProperty("display","flex"),y.style.setProperty("align-items","center"),`${a?"20px":"10px"}`!=null?y.style.setProperty("font-size",`${a?"20px":"10px"}`):y.style.removeProperty("font-size"),a!=null?p.style.setProperty("height",a):p.style.removeProperty("height"),a!=null?p.style.setProperty("width",a):p.style.removeProperty("width"),p.style.setProperty("border-radius","10%"),Ne(p,"src",Ht),x.style.setProperty("margin-left","10px"),(P?"6px":"10px")!=null?x.style.setProperty("line-height",P?"6px":"10px"):x.style.removeProperty("line-height"),(P?"14px":"18px")!=null?x.style.setProperty("font-size",P?"14px":"18px"):x.style.removeProperty("font-size"),v(W,e),v(b,()=>Ge(s),O),v(b,()=>Ge(i),null),oe.$$click=()=>ee(new H("swap",new C(l,o),new C(l,o-1))),vt.$$click=()=>ee(new H("swap",new C(l,o),new C(l,o+1))),v(xe,()=>t.join(", "),null),De.style.setProperty("font-size","16px"),Ze.$$click=()=>qe(l,o,-10),v(ze,()=>Math.floor(n),Re),Re.$$click=()=>qe(l,o,10);var Ke=c;return typeof Ke=="function"?Ue(Ke,Se):c=Se,mt.$$click=()=>{c&&ht(l,o,JSON.parse(c.value))},Y(wt=>ft(d,u,wt)),d})(),w=new ResizeObserver(d=>{console.assert(d.length==1),m.events_accessor_key=l,m.index=o,m.size=d[0].contentRect.height,m.completed=!1,console.log(`index: ${m.index}, size: ${m.size}`)});return r&&w.observe(r),st(()=>{r&&w.unobserve(r)}),f}me(["click"]);var nn=A("<div class=event-container>"),sn=A('<div class=buffer><img src="data:image/png;base64,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"alt="">'),on=A("<div id=event_week>");const{events:z}=we;function rn({events_accesor_key:e}){console.log({events_accesor_key:e});let t=0;return te(()=>{z[e],t=0}),console.log(z),(()=>{var n=nn();return v(n,()=>z[e].map((s,i)=>{const o=G(tn,Nt(s,{start_time:t,get end_time(){return t+s.duration}},{events_accesor_key:e,index:i}));if(t+=s.duration,i<z[e].length-1){const l=Gt(s.location,z[e][i+1].location);t+=l;const r=P?{height:`${Math.round(l*Ae)}px`}:{height:"100px"};return[o,(()=>{var c=sn();return c.firstChild,Y(a=>ft(c,r,a)),c})()]}return o})),n})()}function ln(){return(()=>{var e=on();return v(e,G(Bt,{get each(){return Object.entries(z)},children:([t,n])=>G(rn,{events_accesor_key:t})})),e})()}function Qe(e){U.time_to_size_multiplier+=e,U.size_to_time_multiplier=1/U.time_to_size_multiplier,gt()}var cn=A("<div class=change_time_to_size_multiplier><p>change box sizes</p><button>-</button><button>+");const fn=(()=>{var e=cn(),t=e.firstChild,n=t.nextSibling,s=n.nextSibling;return n.$$click=()=>Qe(-.1),s.$$click=()=>Qe(.1),e})();me(["click"]);const an="_item_r43hl_1",un={item:an};var dn=A("<button>toggle collapse");const _n=(()=>{var e=dn();return X(e,"click",Ft,!0),Y(()=>Dt(e,un.item)),e})();me(["click"]);const gn="/assets/favicon-mtvwWgEY.ico",{events:E,setEvents:$n}=we;function hn(){let e;if(Object.entries(E).forEach(([t])=>{const n=E[t];n.length>=2&&(e=[n,t])}),e)return e}function pn(){const e=[];return Object.entries(E).forEach(([t,n])=>{console.log({event_list_name:t});const s=E[t];console.log({event_list:s}),console.log({length:s.length}),s.length>=1&&e.push([s,t]),console.log({found:e}),e.length!=2}),e.length>=2?e:void 0}function pt(e=300){return new Promise(t=>setTimeout(t,e))}async function vn(){const[e,t]=hn(),n=E[t];ee(new H("swap",new C(t,0),new C(t,1))),await pt(),We(),JSON.stringify(E[t])==JSON.stringify(n)||alert("test failed")}async function yn(){const[[e,t],[n,s]]=pn(),i=[E[t],E[s]];ee(new H("place_on",new C(t,1),new C(s,1))),await pt(),We(),JSON.stringify(i)==JSON.stringify([E[t],E[s]])||alert("test failed")}var bn=A("<div class=drop-down><span></span><div class=content>"),mn=A('<nav><img alt=""><div class=links><a href=checkpoints>checkpoints</a><a href=backlog>backlog'),wn=A("<button>test swap functionalilty"),An=A("<button>test drag functionalilty"),xn=A("<button> mode"),Sn=A("<button>undo (crtl z)");function ce(e,t){return(()=>{var n=bn(),s=n.firstChild,i=s.nextSibling;return v(s,e),v(i,t),n})()}function On(){return[(()=>{var e=mn(),t=e.firstChild,n=t.nextSibling;return Ne(t,"src",gn),v(e,fn,n),v(e,()=>ce("tests",[(()=>{var s=wn();return X(s,"click",vn,!0),s})(),(()=>{var s=An();return X(s,"click",yn,!0),s})()]),n),v(e,()=>ce("settings",[_n,de(()=>ce("change mode",de(()=>He.map(s=>(()=>{var i=xn(),o=i.firstChild;return i.$$click=()=>Ve(s),v(i,s,o),i})()))))]),n),v(e,()=>ce("actions",(()=>{var s=Sn();return X(s,"click",We,!0),s})()),n),e})(),G(ln,{})]}me(["click"]);const kn=document.getElementById("root");Mt(()=>G(On,{}),kn);
