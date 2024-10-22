(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const Ye=["regular","dark","chockboard","pretty"];function Ke(e){Ye.forEach(t=>{document.body.classList.remove(`${t}-mode`)}),document.body.classList.add(`${e}-mode`),localStorage.setItem("selected-mode",e)}Ke(localStorage.getItem("selected-mode")||"light");const gt=(e,t)=>e===t,$=Symbol("solid-proxy"),ht=typeof Proxy=="function",ve=Symbol("solid-track"),ne={equals:gt};let Xe=Fe;const N=1,se=2,Ue={owned:null,cleanups:null,context:null,owner:null};var p=null;let pe=null,pt=null,g=null,b=null,j=null,ue=0;function te(e,t){const n=g,s=p,r=e.length===0,i=t===void 0?s:t,l=r?Ue:{owned:null,cleanups:null,context:i?i.context:null,owner:i},o=r?e:()=>e(()=>B(()=>X(l)));p=l,g=null;try{return z(o,!0)}finally{g=n,p=s}}function Je(e,t){t=t?Object.assign({},ne,t):ne;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.value)),Be(n,r));return[qe.bind(n),s]}function K(e,t,n){const s=Ae(e,t,!1,N);F(s)}function q(e,t,n){Xe=mt;const s=Ae(e,t,!1,N);s.user=!0,j?j.push(s):F(s)}function Ie(e,t,n){n=n?Object.assign({},ne,n):ne;const s=Ae(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,F(s),qe.bind(s)}function bt(e){return z(e,!1)}function B(e){if(g===null)return e();const t=g;g=null;try{return e()}finally{g=t}}function Ge(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function me(){return g}function qe(){if(this.sources&&this.state)if(this.state===N)F(this);else{const e=b;b=null,z(()=>re(this),!1),b=e}if(g){const e=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(e)):(g.sources=[this],g.sourceSlots=[e]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function Be(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&z(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],l=pe&&pe.running;l&&pe.disposed.has(i),(l?!i.tState:!i.state)&&(i.pure?b.push(i):j.push(i),i.observers&&Qe(i)),l||(i.state=N)}if(b.length>1e6)throw b=[],new Error},!1)),t}function F(e){if(!e.fn)return;X(e);const t=ue;yt(e,e.value,t)}function yt(e,t,n){let s;const r=p,i=g;g=p=e;try{s=e.fn(t)}catch(l){return e.pure&&(e.state=N,e.owned&&e.owned.forEach(X),e.owned=null),e.updatedAt=n+1,He(l)}finally{g=i,p=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Be(e,s):e.value=s,e.updatedAt=n)}function Ae(e,t,n,s=N,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:p?p.context:null,pure:n};return p===null||p!==Ue&&(p.owned?p.owned.push(i):p.owned=[i]),i}function ie(e){if(e.state===0)return;if(e.state===se)return re(e);if(e.suspense&&B(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ue);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===N)F(e);else if(e.state===se){const s=b;b=null,z(()=>re(e,t[0]),!1),b=s}}function z(e,t){if(b)return e();let n=!1;t||(b=[]),j?n=!0:j=[],ue++;try{const s=e();return vt(n),s}catch(s){n||(j=null),b=null,He(s)}}function vt(e){if(b&&(Fe(b),b=null),e)return;const t=j;j=null,t.length&&z(()=>Xe(t),!1)}function Fe(e){for(let t=0;t<e.length;t++)ie(e[t])}function mt(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:ie(s)}for(t=0;t<n;t++)ie(e[t])}function re(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const r=s.state;r===N?s!==t&&(!s.updatedAt||s.updatedAt<ue)&&ie(s):r===se&&re(s,t)}}}function Qe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=se,n.pure?b.push(n):j.push(n),n.observers&&Qe(n))}}function X(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),l=n.observerSlots.pop();s<r.length&&(i.sourceSlots[l]=s,r[s]=i,n.observerSlots[s]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)X(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)X(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function _t(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function He(e,t=p){throw _t(e)}const wt=Symbol("fallback");function Le(e){for(let t=0;t<e.length;t++)e[t]()}function St(e,t,n={}){let s=[],r=[],i=[],l=0,o=t.length>1?[]:null;return Ge(()=>Le(i)),()=>{let c=e()||[],u=c.length,a,f;return c[ve],B(()=>{let d,v,y,S,W,A,m,O,L;if(u===0)l!==0&&(Le(i),i=[],s=[],r=[],l=0,o&&(o=[])),n.fallback&&(s=[wt],r[0]=te(H=>(i[0]=H,n.fallback())),l=1);else if(l===0){for(r=new Array(u),f=0;f<u;f++)s[f]=c[f],r[f]=te(w);l=u}else{for(y=new Array(u),S=new Array(u),o&&(W=new Array(u)),A=0,m=Math.min(l,u);A<m&&s[A]===c[A];A++);for(m=l-1,O=u-1;m>=A&&O>=A&&s[m]===c[O];m--,O--)y[O]=r[m],S[O]=i[m],o&&(W[O]=o[m]);for(d=new Map,v=new Array(O+1),f=O;f>=A;f--)L=c[f],a=d.get(L),v[f]=a===void 0?-1:a,d.set(L,f);for(a=A;a<=m;a++)L=s[a],f=d.get(L),f!==void 0&&f!==-1?(y[f]=r[a],S[f]=i[a],o&&(W[f]=o[a]),f=v[f],d.set(L,f)):i[a]();for(f=A;f<u;f++)f in y?(r[f]=y[f],i[f]=S[f],o&&(o[f]=W[f],o[f](f))):r[f]=te(w);r=r.slice(0,l=u),s=c.slice(0)}return r});function w(d){if(i[f]=d,o){const[v,y]=Je(f);return o[f]=y,t(c[f],v)}return t(c[f])}}}function U(e,t){return B(()=>e(t||{}))}function V(){return!0}const At={get(e,t,n){return t===$?n:e.get(t)},has(e,t){return t===$?!0:e.has(t)},set:V,deleteProperty:V,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:V,deleteProperty:V}},ownKeys(e){return e.keys()}};function be(e){return(e=typeof e=="function"?e():e)?e:{}}function xt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Ot(...e){let t=!1;for(let l=0;l<e.length;l++){const o=e[l];t=t||!!o&&$ in o,e[l]=typeof o=="function"?(t=!0,Ie(o)):o}if(ht&&t)return new Proxy({get(l){for(let o=e.length-1;o>=0;o--){const c=be(e[o])[l];if(c!==void 0)return c}},has(l){for(let o=e.length-1;o>=0;o--)if(l in be(e[o]))return!0;return!1},keys(){const l=[];for(let o=0;o<e.length;o++)l.push(...Object.keys(be(e[o])));return[...new Set(l)]}},At);const n={},s=Object.create(null);for(let l=e.length-1;l>=0;l--){const o=e[l];if(!o)continue;const c=Object.getOwnPropertyNames(o);for(let u=c.length-1;u>=0;u--){const a=c[u];if(a==="__proto__"||a==="constructor")continue;const f=Object.getOwnPropertyDescriptor(o,a);if(!s[a])s[a]=f.get?{enumerable:!0,configurable:!0,get:xt.bind(n[a]=[f.get.bind(o)])}:f.value!==void 0?f:void 0;else{const w=n[a];w&&(f.get?w.push(f.get.bind(o)):f.value!==void 0&&w.push(()=>f.value))}}}const r={},i=Object.keys(s);for(let l=i.length-1;l>=0;l--){const o=i[l],c=s[o];c&&c.get?Object.defineProperty(r,o,c):r[o]=c?c.value:void 0}return r}function Pt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return Ie(St(()=>e.each,e.children,t||void 0))}function Ct(e,t,n){let s=n.length,r=t.length,i=s,l=0,o=0,c=t[r-1].nextSibling,u=null;for(;l<r||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===l){const a=i<s?o?n[o-1].nextSibling:n[i-o]:c;for(;o<i;)e.insertBefore(n[o++],a)}else if(i===o)for(;l<r;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[r-1]){const a=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],a),t[r]=n[i]}else{if(!u){u=new Map;let f=o;for(;f<i;)u.set(n[f],f++)}const a=u.get(t[l]);if(a!=null)if(o<a&&a<i){let f=l,w=1,d;for(;++f<r&&f<i&&!((d=u.get(t[f]))==null||d!==a+w);)w++;if(w>a-o){const v=t[l];for(;o<a;)e.insertBefore(n[o++],v)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const Te="_$DX_DELEGATE";function $t(e,t,n,s={}){let r;return te(i=>{r=i,t===document?e():x(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function k(e,t,n){let s;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},i=()=>(s||(s=r())).cloneNode(!0);return i.cloneNode=i,i}function ae(e,t=window.document){const n=t[Te]||(t[Te]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,Et))}}function xe(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Ve(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n,typeof n!="function"&&n)}function et(e,t,n){if(!t)return n?xe(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)r=t[i],r!==n[i]&&(s.setProperty(i,r),n[i]=r);return n}function Ne(e,t,n){return B(()=>e(t,n))}function x(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return oe(e,t,s,n);K(r=>oe(e,t(),r,n),s)}function Et(e){let t=e.target;const n=`$$${e.type}`,s=e.target,r=e.currentTarget,i=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),l=()=>{const c=t[n];if(c&&!t.disabled){const u=t[`${n}Data`];if(u!==void 0?c.call(t,u,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&i(t.host),!0},o=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const c=e.composedPath();i(c[0]);for(let u=0;u<c.length-2&&(t=c[u],!!l());u++){if(t._$host){t=t._$host,o();break}if(t.parentNode===r)break}}else o();i(s)}function oe(e,t,n,s,r){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(i==="number"&&(t=t.toString(),t===n))return n;if(l){let o=n[0];o&&o.nodeType===3?o.data!==t&&(o.data=t):o=document.createTextNode(t),n=M(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean")n=M(e,n,s);else{if(i==="function")return K(()=>{let o=t();for(;typeof o=="function";)o=o();n=oe(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],c=n&&Array.isArray(n);if(_e(o,t,n,r))return K(()=>n=oe(e,o,n,s,!0)),()=>n;if(o.length===0){if(n=M(e,n,s),l)return n}else c?n.length===0?We(e,o,s):Ct(e,n,o):(n&&M(e),We(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=M(e,n,s,t);M(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function _e(e,t,n,s){let r=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],c=n&&n[e.length],u;if(!(o==null||o===!0||o===!1))if((u=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))r=_e(e,o,c)||r;else if(u==="function")if(s){for(;typeof o=="function";)o=o();r=_e(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||r}else e.push(o),r=!0;else{const a=String(o);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return r}function We(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function M(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const c=o.parentNode===e;!i&&!l?c?e.replaceChild(r,o):e.insertBefore(r,n):c&&o.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}const we=Symbol("store-raw"),Z=Symbol("store-node"),E=Symbol("store-has"),tt=Symbol("store-self");function nt(e){let t=e[$];if(!t&&(Object.defineProperty(e,$,{value:t=new Proxy(e,Lt)}),!Array.isArray(e))){const n=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let r=0,i=n.length;r<i;r++){const l=n[r];s[l].get&&Object.defineProperty(e,l,{enumerable:s[l].enumerable,get:s[l].get.bind(t)})}}return t}function le(e){let t;return e!=null&&typeof e=="object"&&(e[$]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function J(e,t=new Set){let n,s,r,i;if(n=e!=null&&e[we])return n;if(!le(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let l=0,o=e.length;l<o;l++)r=e[l],(s=J(r,t))!==r&&(e[l]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const l=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let c=0,u=l.length;c<u;c++)i=l[c],!o[i].get&&(r=e[i],(s=J(r,t))!==r&&(e[i]=s))}return e}function ce(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function I(e,t,n){if(e[t])return e[t];const[s,r]=Je(n,{equals:!1,internal:!0});return s.$=r,e[t]=s}function jt(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===$||t===Z||(delete n.value,delete n.writable,n.get=()=>e[$][t]),n}function st(e){me()&&I(ce(e,Z),tt)()}function kt(e){return st(e),Reflect.ownKeys(e)}const Lt={get(e,t,n){if(t===we)return e;if(t===$)return n;if(t===ve)return st(e),n;const s=ce(e,Z),r=s[t];let i=r?r():e[t];if(t===Z||t===E||t==="__proto__")return i;if(!r){const l=Object.getOwnPropertyDescriptor(e,t);me()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(l&&l.get)&&(i=I(s,t,i)())}return le(i)?nt(i):i},has(e,t){return t===we||t===$||t===ve||t===Z||t===E||t==="__proto__"?!0:(me()&&I(ce(e,E),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:kt,getOwnPropertyDescriptor:jt};function fe(e,t,n,s=!1){if(!s&&e[t]===n)return;const r=e[t],i=e.length;n===void 0?(delete e[t],e[E]&&e[E][t]&&r!==void 0&&e[E][t].$()):(e[t]=n,e[E]&&e[E][t]&&r===void 0&&e[E][t].$());let l=ce(e,Z),o;if((o=I(l,t,r))&&o.$(()=>n),Array.isArray(e)&&e.length!==i){for(let c=e.length;c<i;c++)(o=l[c])&&o.$();(o=I(l,"length",i))&&o.$(e.length)}(o=l[tt])&&o.$()}function it(e,t){const n=Object.keys(t);for(let s=0;s<n.length;s+=1){const r=n[s];fe(e,r,t[r])}}function Tt(e,t){if(typeof t=="function"&&(t=t(e)),t=J(t),Array.isArray(t)){if(e===t)return;let n=0,s=t.length;for(;n<s;n++){const r=t[n];e[n]!==r&&fe(e,n,r)}fe(e,"length",s)}else it(e,t)}function R(e,t,n=[]){let s,r=e;if(t.length>1){s=t.shift();const l=typeof s,o=Array.isArray(e);if(Array.isArray(s)){for(let c=0;c<s.length;c++)R(e,[s[c]].concat(t),n);return}else if(o&&l==="function"){for(let c=0;c<e.length;c++)s(e[c],c)&&R(e,[c].concat(t),n);return}else if(o&&l==="object"){const{from:c=0,to:u=e.length-1,by:a=1}=s;for(let f=c;f<=u;f+=a)R(e,[f].concat(t),n);return}else if(t.length>1){R(e[s],t,[s].concat(n));return}r=e[s],n=[s].concat(n)}let i=t[0];typeof i=="function"&&(i=i(r,n),i===r)||s===void 0&&i==null||(i=J(i),s===void 0||le(r)&&le(i)&&!Array.isArray(i)?it(r,i):fe(e,s,i))}function Nt(...[e,t]){const n=J(e||{}),s=Array.isArray(n),r=nt(n);function i(...l){bt(()=>{s&&l.length===1?Tt(n,l[0]):R(n,l)})}return[r,i]}const Wt=[{name:"Hackathon",duration:480,location:[37,-122]},{name:"Festival",duration:600,location:[51,0]},{name:"Networking Event",duration:45,location:[41,-87]},{name:"Webinar",duration:90,location:[48,2]},{name:"Board Meeting",duration:240,location:[35,139]}],Mt=[{name:"Webinar",duration:90,location:[48,2]},{name:"Board Meeting",duration:240,location:[35,139]}],[Q,Dt]=Nt({list:JSON.parse(localStorage.getItem("eventsList")||"null")||[{name:"Party",duration:120,location:[2,5]},{name:"Concert",duration:180,location:[10,12]},{name:"Workshop",duration:90,location:[3,8]},{name:"Meetup",duration:60,location:[34,-118]}],list2:JSON.parse(localStorage.getItem("eventsList2")||"null")||Wt,list3:JSON.parse(localStorage.getItem("eventsList3")||"null")||Mt});q(()=>{localStorage.setItem("eventsList",JSON.stringify(Q.list))});q(()=>{localStorage.setItem("eventsList2",JSON.stringify(Q.list2))});q(()=>{localStorage.setItem("eventsList3",JSON.stringify(Q.list3))});console.log(Q);const rt={events:Q,setEvents:Dt};function Zt(e,t){const n=Se(e[0],t[0]),s=Se(e[1],t[1]);return n+s}function Se(e,t){return e>t?e-t:t-e}function Me(e){const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n<10?`0${n}`:n}`}function ye(e,t,n){if(t<0||t>e.length){console.error("Invalid index: out of bounds.");return}e.splice(t,0,n)}const _={events_accessor_key:void 0,index:void 0,size:void 0,completed:!0},h={dragged_onto:null,grabbing:null},G={is_down:!1};window.addEventListener("mousedown",()=>{G.is_down=!0,console.log(`mouse_is_down: ${G.is_down}`)});window.addEventListener("mouseup",()=>{G.is_down=!1,console.log(`mouse_is_down: ${G.is_down}`)});const{events:C,setEvents:T}=rt;q(()=>{console.table(C.list)});function ot(){T("list",[...C.list]),T("list2",[...C.list2])}function De(e,t,n){console.log("change_event_duration",{index:t,amount:n});const s=[...C[e]];s[t]={...s[t],duration:s[t].duration+n},T(e,s)}function lt(e,t,n){if(Se(n,C[e][t].duration)>=10){const s=[...C[e]];s[t]={...s[t],duration:n},T(e,s)}}setInterval(()=>{!_.completed&&_.index!=null&&_.size!=null&&_.events_accessor_key&&!G.is_down&&(_.completed=!0,lt(_.events_accessor_key,_.index,_.size*Y.size_to_time_multiplier))},10);function zt(){if(h.dragged_onto?.events_accesor_key==h.grabbing?.events_accesor_key){let t=[...C[h.dragged_onto.events_accesor_key]];const[n]=t.splice(h.grabbing.index,1);h.dragged_onto.index>h.grabbing.index?ye(t,h.dragged_onto.index,n):ye(t,h.dragged_onto.index+1,n),T(h.grabbing.events_accesor_key,[...t])}else if(h.grabbing!=null&&h.dragged_onto!=null){const t=[...C[h.grabbing.events_accesor_key]],n=[...C[h.dragged_onto.events_accesor_key]],s=t[h.grabbing.index];ye(n,h.dragged_onto.index+1,s),t.splice(h.grabbing.index,1),T(h.grabbing.events_accesor_key,t),T(h.dragged_onto.events_accesor_key,n)}else console.error("Both indexes must be valid numbers.")}function Ze(e,t,n){const s=[...C[e]],r=s[t];s[t]=s[n],s[n]=r,console.table(s),T(e,s)}function Rt(){P=!P,localStorage.setItem("event_size_callapse?",JSON.stringify(P)),ot()}let P=JSON.parse(localStorage.getItem("event_size_callapse?")||"false"),de=.6,Yt=1/de;const Y={time_to_size_multiplier:de,size_to_time_multiplier:Yt},Kt="/assets/images-C0XeT9au.jpg";var Xt=k("<div class=event><span>"),Ut=k('<div class=event draggable=true><div class=top><img alt=""><div class=text><h2 class=name></h2><div class=time><p> - </p></div></div><div class=quick-mover-buttons><button>∆</button><button>¥</button></div></div><div class=lower-text><h4>location: </h4><p>this event is<strong class=event-duration><button>-</button><button>+</button></strong> minutes long</p></div><form><input type=number><button>change size</button></form><hr>');let ze,ee=(()=>{var e=Xt(),t=e.firstChild;return e.style.setProperty("height","100px"),e.style.setProperty("border","dashed 6px var(--color)"),e.style.setProperty("padding","10px"),t.style.setProperty("background-color","var(--background-color)"),t.style.setProperty("width","100%"),t.style.setProperty("height","100%"),e})();function Jt({name:e,location:t,duration:n,start_time:s,end_time:r,index:i,events_accesor_key:l}){let o,c;const u=P?"40px":"90px",a=P?{height:`${Math.round(n*Y.time_to_size_multiplier)}px`,border:"dashed 1px var(--color)"}:{border:"dashed 1px var(--color)"},f=(()=>{var d=Ut(),v=d.firstChild,y=v.firstChild,S=y.nextSibling,W=S.firstChild,A=W.nextSibling,m=A.firstChild,O=m.firstChild,L=S.nextSibling,H=L.firstChild,ct=H.nextSibling,Oe=v.nextSibling,ge=Oe.firstChild;ge.firstChild;var Pe=ge.nextSibling,ft=Pe.firstChild,Ce=ft.nextSibling,$e=Ce.firstChild,Ee=$e.nextSibling,ut=Oe.nextSibling,he=ut.firstChild,at=he.nextSibling;d.addEventListener("dragend",()=>{ze.style.display="block",ee.parentElement?.removeChild(ee),document.body.classList.remove("durring-dragging")}),Ve(d,"dragend",zt),d.addEventListener("dragover",()=>{h.dragged_onto={events_accesor_key:l,index:i},f.insertAdjacentElement("afterend",ee)}),d.addEventListener("drag",()=>{h.grabbing={events_accesor_key:l,index:i},f.style.display="none",ze=f,ee.style.height=`${n*de}px`,document.body.classList.add("durring-dragging")});var je=o;typeof je=="function"?Ne(je,d):o=d,v.style.setProperty("display","flex"),v.style.setProperty("align-items","center"),`${u?"20px":"10px"}`!=null?v.style.setProperty("font-size",`${u?"20px":"10px"}`):v.style.removeProperty("font-size"),u!=null?y.style.setProperty("height",u):y.style.removeProperty("height"),u!=null?y.style.setProperty("width",u):y.style.removeProperty("width"),y.style.setProperty("border-radius","10%"),xe(y,"src",Kt),S.style.setProperty("margin-left","10px"),(P?"6px":"10px")!=null?S.style.setProperty("line-height",P?"6px":"10px"):S.style.removeProperty("line-height"),(P?"14px":"18px")!=null?S.style.setProperty("font-size",P?"14px":"18px"):S.style.removeProperty("font-size"),x(W,e),x(m,()=>Me(s),O),x(m,()=>Me(r),null),H.$$click=()=>Ze(l,i,i-1),ct.$$click=()=>Ze(l,i,i+1),x(ge,()=>t.join(", "),null),Pe.style.setProperty("font-size","16px"),$e.$$click=()=>De(l,i,-10),x(Ce,()=>Math.floor(n),Ee),Ee.$$click=()=>De(l,i,10);var ke=c;return typeof ke=="function"?Ne(ke,he):c=he,at.$$click=()=>{c&&lt(l,i,JSON.parse(c.value))},K(dt=>et(d,a,dt)),d})(),w=new ResizeObserver(d=>{console.assert(d.length==1),_.events_accessor_key=l,_.index=i,_.size=d[0].contentRect.height,_.completed=!1,console.log(`index: ${_.index}, size: ${_.size}`)});return o&&w.observe(o),Ge(()=>{o&&w.unobserve(o)}),f}ae(["click"]);var It=k("<div class=event-container>"),Gt=k('<div class=buffer><img src="data:image/png;base64,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"alt="">'),qt=k("<div id=event_week>");const{events:D}=rt;function Bt({events_accesor_key:e}){console.log({events_accesor_key:e});let t=0;return q(()=>{D[e],t=0}),console.log(D),(()=>{var n=It();return x(n,()=>D[e].map((s,r)=>{const i=U(Jt,Ot(s,{start_time:t,get end_time(){return t+s.duration}},{events_accesor_key:e,index:r}));if(t+=s.duration,r<D[e].length-1){const l=Zt(s.location,D[e][r+1].location);t+=l;const o=P?{height:`${Math.round(l*de)}px`}:{height:"100px"};return[i,(()=>{var c=Gt();return c.firstChild,K(u=>et(c,o,u)),c})()]}return i})),n})()}function Ft(){return(()=>{var e=qt();return x(e,U(Pt,{get each(){return Object.entries(D)},children:([t,n])=>U(Bt,{events_accesor_key:t})})),e})()}function Re(e){Y.time_to_size_multiplier+=e,Y.size_to_time_multiplier=1/Y.time_to_size_multiplier,ot()}var Qt=k("<div class=change_time_to_size_multiplier><p>change box sizes</p><button>-</button><button>+");const Ht=(()=>{var e=Qt(),t=e.firstChild,n=t.nextSibling,s=n.nextSibling;return n.$$click=()=>Re(-.1),s.$$click=()=>Re(.1),e})();ae(["click"]);var Vt=k("<button>toggle collapse");const en=(()=>{var e=Vt();return Ve(e,"click",Rt,!0),e})();ae(["click"]);const tn="/assets/favicon-mtvwWgEY.ico";var nn=k('<nav><img alt=""><div class=drop-down><span>drop down</span><div class=content></div></div><div class=links><a href=actions>actions</a><a href=checkpoints>checkpoints</a><a href=backlog>backlog'),sn=k("<button> mode");function rn(){return[(()=>{var e=nn(),t=e.firstChild,n=t.nextSibling,s=n.firstChild,r=s.nextSibling;return xe(t,"src",tn),x(e,Ht,n),x(r,en,null),x(r,()=>Ye.map(i=>(()=>{var l=sn(),o=l.firstChild;return l.$$click=()=>Ke(i),x(l,i,o),l})()),null),e})(),U(Ft,{})]}ae(["click"]);const on=document.getElementById("root");$t(()=>U(rn,{}),on);