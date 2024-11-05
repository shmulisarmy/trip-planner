(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const et=["regular","dark","chockboard","pretty"];function tt(e){et.forEach(t=>{document.body.classList.remove(`${t}-mode`)}),document.body.classList.add(`${e}-mode`),localStorage.setItem("selected-mode",e)}tt(localStorage.getItem("selected-mode")||"light");const At=(e,t)=>e===t,E=Symbol("solid-proxy"),xt=typeof Proxy=="function",ke=Symbol("solid-track"),ae={equals:At};let nt=lt;const N=1,ue=2,st={owned:null,cleanups:null,context:null,owner:null};var g=null;let xe=null,St=null,h=null,y=null,j=null,ye=0;function fe(e,t){const n=h,s=g,o=e.length===0,i=t===void 0?s:t,l=o?st:{owned:null,cleanups:null,context:i?i.context:null,owner:i},r=o?e:()=>e(()=>W(()=>F(l)));g=l,h=null;try{return U(r,!0)}finally{h=n,g=s}}function Ne(e,t){t=t?Object.assign({},ae,t):ae;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=o=>(typeof o=="function"&&(o=o(n.value)),rt(n,o));return[it.bind(n),s]}function K(e,t,n){const s=Be(e,t,!1,N);se(s)}function ne(e,t,n){nt=Pt;const s=Be(e,t,!1,N);s.user=!0,j?j.push(s):se(s)}function G(e,t,n){n=n?Object.assign({},ae,n):ae;const s=Be(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,se(s),it.bind(s)}function kt(e){return U(e,!1)}function W(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function ot(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function $e(){return h}function it(){if(this.sources&&this.state)if(this.state===N)se(this);else{const e=y;y=null,U(()=>he(this),!1),y=e}if(h){const e=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(e)):(h.sources=[this],h.sourceSlots=[e]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function rt(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&U(()=>{for(let o=0;o<e.observers.length;o+=1){const i=e.observers[o],l=xe&&xe.running;l&&xe.disposed.has(i),(l?!i.tState:!i.state)&&(i.pure?y.push(i):j.push(i),i.observers&&ct(i)),l||(i.state=N)}if(y.length>1e6)throw y=[],new Error},!1)),t}function se(e){if(!e.fn)return;F(e);const t=ye;$t(e,e.value,t)}function $t(e,t,n){let s;const o=g,i=h;h=g=e;try{s=e.fn(t)}catch(l){return e.pure&&(e.state=N,e.owned&&e.owned.forEach(F),e.owned=null),e.updatedAt=n+1,ft(l)}finally{h=i,g=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?rt(e,s):e.value=s,e.updatedAt=n)}function Be(e,t,n,s=N,o){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:g?g.context:null,pure:n};return g===null||g!==st&&(g.owned?g.owned.push(i):g.owned=[i]),i}function de(e){if(e.state===0)return;if(e.state===ue)return he(e);if(e.suspense&&W(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ye);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===N)se(e);else if(e.state===ue){const s=y;y=null,U(()=>he(e,t[0]),!1),y=s}}function U(e,t){if(y)return e();let n=!1;t||(y=[]),j?n=!0:j=[],ye++;try{const s=e();return Ot(n),s}catch(s){n||(j=null),y=null,ft(s)}}function Ot(e){if(y&&(lt(y),y=null),e)return;const t=j;j=null,t.length&&U(()=>nt(t),!1)}function lt(e){for(let t=0;t<e.length;t++)de(e[t])}function Pt(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:de(s)}for(t=0;t<n;t++)de(e[t])}function he(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const o=s.state;o===N?s!==t&&(!s.updatedAt||s.updatedAt<ye)&&de(s):o===ue&&he(s,t)}}}function ct(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=ue,n.pure?y.push(n):j.push(n),n.observers&&ct(n))}}function F(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const i=o.pop(),l=n.observerSlots.pop();s<o.length&&(i.sourceSlots[l]=s,o[s]=i,n.observerSlots[s]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)F(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)F(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ct(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ft(e,t=g){throw Ct(e)}const Et=Symbol("fallback");function Xe(e){for(let t=0;t<e.length;t++)e[t]()}function Lt(e,t,n={}){let s=[],o=[],i=[],l=0,r=t.length>1?[]:null;return ot(()=>Xe(i)),()=>{let c=e()||[],a=c.length,u,f;return c[ke],W(()=>{let d,p,v,x,B,S,m,k,T;if(a===0)l!==0&&(Xe(i),i=[],s=[],o=[],l=0,r&&(r=[])),n.fallback&&(s=[Et],o[0]=fe(ie=>(i[0]=ie,n.fallback())),l=1);else if(l===0){for(o=new Array(a),f=0;f<a;f++)s[f]=c[f],o[f]=fe(_);l=a}else{for(v=new Array(a),x=new Array(a),r&&(B=new Array(a)),S=0,m=Math.min(l,a);S<m&&s[S]===c[S];S++);for(m=l-1,k=a-1;m>=S&&k>=S&&s[m]===c[k];m--,k--)v[k]=o[m],x[k]=i[m],r&&(B[k]=r[m]);for(d=new Map,p=new Array(k+1),f=k;f>=S;f--)T=c[f],u=d.get(T),p[f]=u===void 0?-1:u,d.set(T,f);for(u=S;u<=m;u++)T=s[u],f=d.get(T),f!==void 0&&f!==-1?(v[f]=o[u],x[f]=i[u],r&&(B[f]=r[u]),f=p[f],d.set(T,f)):i[u]();for(f=S;f<a;f++)f in v?(o[f]=v[f],i[f]=x[f],r&&(r[f]=B[f],r[f](f))):o[f]=fe(_);o=o.slice(0,l=a),s=c.slice(0)}return o});function _(d){if(i[f]=d,r){const[p,v]=Ne(f);return r[f]=v,t(c[f],p)}return t(c[f])}}}function P(e,t){return W(()=>e(t||{}))}function re(){return!0}const jt={get(e,t,n){return t===E?n:e.get(t)},has(e,t){return t===E?!0:e.has(t)},set:re,deleteProperty:re,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:re,deleteProperty:re}},ownKeys(e){return e.keys()}};function Se(e){return(e=typeof e=="function"?e():e)?e:{}}function Tt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Nt(...e){let t=!1;for(let l=0;l<e.length;l++){const r=e[l];t=t||!!r&&E in r,e[l]=typeof r=="function"?(t=!0,G(r)):r}if(xt&&t)return new Proxy({get(l){for(let r=e.length-1;r>=0;r--){const c=Se(e[r])[l];if(c!==void 0)return c}},has(l){for(let r=e.length-1;r>=0;r--)if(l in Se(e[r]))return!0;return!1},keys(){const l=[];for(let r=0;r<e.length;r++)l.push(...Object.keys(Se(e[r])));return[...new Set(l)]}},jt);const n={},s=Object.create(null);for(let l=e.length-1;l>=0;l--){const r=e[l];if(!r)continue;const c=Object.getOwnPropertyNames(r);for(let a=c.length-1;a>=0;a--){const u=c[a];if(u==="__proto__"||u==="constructor")continue;const f=Object.getOwnPropertyDescriptor(r,u);if(!s[u])s[u]=f.get?{enumerable:!0,configurable:!0,get:Tt.bind(n[u]=[f.get.bind(r)])}:f.value!==void 0?f:void 0;else{const _=n[u];_&&(f.get?_.push(f.get.bind(r)):f.value!==void 0&&_.push(()=>f.value))}}}const o={},i=Object.keys(s);for(let l=i.length-1;l>=0;l--){const r=i[l],c=s[r];c&&c.get?Object.defineProperty(o,r,c):o[r]=c?c.value:void 0}return o}const Bt=e=>`Stale read from <${e}>.`;function Wt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return G(Lt(()=>e.each,e.children,t||void 0))}function Mt(e){const t=e.keyed,n=G(()=>e.when,void 0,{equals:(s,o)=>t?s===o:!s==!o});return G(()=>{const s=n();if(s){const o=e.children;return typeof o=="function"&&o.length>0?W(()=>o(t?s:()=>{if(!W(n))throw Bt("Show");return e.when})):o}return e.fallback},void 0,void 0)}function Dt(e,t,n){let s=n.length,o=t.length,i=s,l=0,r=0,c=t[o-1].nextSibling,a=null;for(;l<o||r<i;){if(t[l]===n[r]){l++,r++;continue}for(;t[o-1]===n[i-1];)o--,i--;if(o===l){const u=i<s?r?n[r-1].nextSibling:n[i-r]:c;for(;r<i;)e.insertBefore(n[r++],u)}else if(i===r)for(;l<o;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[r]===t[o-1]){const u=t[--o].nextSibling;e.insertBefore(n[r++],t[l++].nextSibling),e.insertBefore(n[--i],u),t[o]=n[i]}else{if(!a){a=new Map;let f=r;for(;f<i;)a.set(n[f],f++)}const u=a.get(t[l]);if(u!=null)if(r<u&&u<i){let f=l,_=1,d;for(;++f<o&&f<i&&!((d=a.get(t[f]))==null||d!==u+_);)_++;if(_>u-r){const p=t[l];for(;r<u;)e.insertBefore(n[r++],p)}else e.replaceChild(n[r++],t[l++])}else l++;else t[l++].remove()}}}const qe="_$DX_DELEGATE";function Rt(e,t,n,s={}){let o;return fe(i=>{o=i,t===document?e():b(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{o(),t.textContent=""}}function A(e,t,n){let s;const o=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},i=()=>(s||(s=o())).cloneNode(!0);return i.cloneNode=i,i}function be(e,t=window.document){const n=t[qe]||(t[qe]=new Set);for(let s=0,o=e.length;s<o;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,Zt))}}function Q(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function zt(e,t){e.className=t}function q(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const o=n[0];e.addEventListener(t,n[0]=i=>o.call(e,n[1],i))}else e.addEventListener(t,n,typeof n!="function"&&n)}function at(e,t,n){if(!t)return n?Q(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let o,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)o=t[i],o!==n[i]&&(s.setProperty(i,o),n[i]=o);return n}function Oe(e,t,n){return W(()=>e(t,n))}function b(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return _e(e,t,s,n);K(o=>_e(e,t(),o,n),s)}function Zt(e){let t=e.target;const n=`$$${e.type}`,s=e.target,o=e.currentTarget,i=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),l=()=>{const c=t[n];if(c&&!t.disabled){const a=t[`${n}Data`];if(a!==void 0?c.call(t,a,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&i(t.host),!0},r=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const c=e.composedPath();i(c[0]);for(let a=0;a<c.length-2&&(t=c[a],!!l());a++){if(t._$host){t=t._$host,r();break}if(t.parentNode===o)break}}else r();i(s)}function _e(e,t,n,s,o){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(i==="number"&&(t=t.toString(),t===n))return n;if(l){let r=n[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=M(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean")n=M(e,n,s);else{if(i==="function")return K(()=>{let r=t();for(;typeof r=="function";)r=r();n=_e(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[],c=n&&Array.isArray(n);if(Pe(r,t,n,o))return K(()=>n=_e(e,r,n,s,!0)),()=>n;if(r.length===0){if(n=M(e,n,s),l)return n}else c?n.length===0?Ie(e,r,s):Dt(e,n,r):(n&&M(e),Ie(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=M(e,n,s,t);M(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Pe(e,t,n,s){let o=!1;for(let i=0,l=t.length;i<l;i++){let r=t[i],c=n&&n[e.length],a;if(!(r==null||r===!0||r===!1))if((a=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))o=Pe(e,r,c)||o;else if(a==="function")if(s){for(;typeof r=="function";)r=r();o=Pe(e,Array.isArray(r)?r:[r],Array.isArray(c)?c:[c])||o}else e.push(r),o=!0;else{const u=String(r);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return o}function Ie(e,t,n=null){for(let s=0,o=t.length;s<o;s++)e.insertBefore(t[s],n)}function M(e,t,n,s){if(n===void 0)return e.textContent="";const o=s||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const r=t[l];if(o!==r){const c=r.parentNode===e;!i&&!l?c?e.replaceChild(o,r):e.insertBefore(o,n):c&&r.remove()}else i=!0}}else e.insertBefore(o,n);return[o]}const Yt="modulepreload",Kt=function(e){return"/"+e},Je={},Ut=function(t,n,s){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),r=l?.nonce||l?.getAttribute("nonce");o=Promise.allSettled(n.map(c=>{if(c=Kt(c),c in Je)return;Je[c]=!0;const a=c.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=a?"stylesheet":Yt,a||(f.as="script"),f.crossOrigin="",f.href=c,r&&f.setAttribute("nonce",r),document.head.appendChild(f),a)return new Promise((_,d)=>{f.addEventListener("load",_),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(l){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=l,window.dispatchEvent(r),!r.defaultPrevented)throw l}return o.then(l=>{for(const r of l||[])r.status==="rejected"&&i(r.reason);return t().catch(i)})},Ce=Symbol("store-raw"),Y=Symbol("store-node"),L=Symbol("store-has"),ut=Symbol("store-self");function dt(e){let t=e[E];if(!t&&(Object.defineProperty(e,E,{value:t=new Proxy(e,It)}),!Array.isArray(e))){const n=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let o=0,i=n.length;o<i;o++){const l=n[o];s[l].get&&Object.defineProperty(e,l,{enumerable:s[l].enumerable,get:s[l].get.bind(t)})}}return t}function ge(e){let t;return e!=null&&typeof e=="object"&&(e[E]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function H(e,t=new Set){let n,s,o,i;if(n=e!=null&&e[Ce])return n;if(!ge(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let l=0,r=e.length;l<r;l++)o=e[l],(s=H(o,t))!==o&&(e[l]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const l=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let c=0,a=l.length;c<a;c++)i=l[c],!r[i].get&&(o=e[i],(s=H(o,t))!==o&&(e[i]=s))}return e}function pe(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function V(e,t,n){if(e[t])return e[t];const[s,o]=Ne(n,{equals:!1,internal:!0});return s.$=o,e[t]=s}function Xt(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===E||t===Y||(delete n.value,delete n.writable,n.get=()=>e[E][t]),n}function ht(e){$e()&&V(pe(e,Y),ut)()}function qt(e){return ht(e),Reflect.ownKeys(e)}const It={get(e,t,n){if(t===Ce)return e;if(t===E)return n;if(t===ke)return ht(e),n;const s=pe(e,Y),o=s[t];let i=o?o():e[t];if(t===Y||t===L||t==="__proto__")return i;if(!o){const l=Object.getOwnPropertyDescriptor(e,t);$e()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(l&&l.get)&&(i=V(s,t,i)())}return ge(i)?dt(i):i},has(e,t){return t===Ce||t===E||t===ke||t===Y||t===L||t==="__proto__"?!0:($e()&&V(pe(e,L),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:qt,getOwnPropertyDescriptor:Xt};function ve(e,t,n,s=!1){if(!s&&e[t]===n)return;const o=e[t],i=e.length;n===void 0?(delete e[t],e[L]&&e[L][t]&&o!==void 0&&e[L][t].$()):(e[t]=n,e[L]&&e[L][t]&&o===void 0&&e[L][t].$());let l=pe(e,Y),r;if((r=V(l,t,o))&&r.$(()=>n),Array.isArray(e)&&e.length!==i){for(let c=e.length;c<i;c++)(r=l[c])&&r.$();(r=V(l,"length",i))&&r.$(e.length)}(r=l[ut])&&r.$()}function _t(e,t){const n=Object.keys(t);for(let s=0;s<n.length;s+=1){const o=n[s];ve(e,o,t[o])}}function Jt(e,t){if(typeof t=="function"&&(t=t(e)),t=H(t),Array.isArray(t)){if(e===t)return;let n=0,s=t.length;for(;n<s;n++){const o=t[n];e[n]!==o&&ve(e,n,o)}ve(e,"length",s)}else _t(e,t)}function X(e,t,n=[]){let s,o=e;if(t.length>1){s=t.shift();const l=typeof s,r=Array.isArray(e);if(Array.isArray(s)){for(let c=0;c<s.length;c++)X(e,[s[c]].concat(t),n);return}else if(r&&l==="function"){for(let c=0;c<e.length;c++)s(e[c],c)&&X(e,[c].concat(t),n);return}else if(r&&l==="object"){const{from:c=0,to:a=e.length-1,by:u=1}=s;for(let f=c;f<=a;f+=u)X(e,[f].concat(t),n);return}else if(t.length>1){X(e[s],t,[s].concat(n));return}o=e[s],n=[s].concat(n)}let i=t[0];typeof i=="function"&&(i=i(o,n),i===o)||s===void 0&&i==null||(i=H(i),s===void 0||ge(o)&&ge(i)&&!Array.isArray(i)?_t(o,i):ve(e,s,i))}function Gt(...[e,t]){const n=H(e||{}),s=Array.isArray(n),o=dt(n);function i(...l){kt(()=>{s&&l.length===1?Jt(n,l[0]):X(n,l)})}return[o,i]}const Ft=[{name:"Hackathon",duration:480,location:[37,-122]},{name:"Festival",duration:600,location:[51,0]},{name:"Networking Event",duration:45,location:[41,-87]},{name:"Webinar",duration:90,location:[48,2]},{name:"Board Meeting",duration:240,location:[35,139]}],Qt=[{name:"Webinar",duration:90,location:[48,2]},{name:"Board Meeting",duration:240,location:[35,139]}],[oe,Ht]=Gt({list:JSON.parse(localStorage.getItem("eventsList")||"null")||[{name:"Party",duration:120,location:[2,5]},{name:"Concert",duration:180,location:[10,12]},{name:"Workshop",duration:90,location:[3,8]},{name:"Meetup",duration:60,location:[34,-118]}],list2:JSON.parse(localStorage.getItem("eventsList2")||"null")||Ft,list3:JSON.parse(localStorage.getItem("eventsList3")||"null")||Qt});ne(()=>{localStorage.setItem("eventsList",JSON.stringify(oe.list))});ne(()=>{localStorage.setItem("eventsList2",JSON.stringify(oe.list2))});ne(()=>{localStorage.setItem("eventsList3",JSON.stringify(oe.list3))});console.log(oe);const We={events:oe,setEvents:Ht};function Vt(e,t){const n=Ee(e[0],t[0]),s=Ee(e[1],t[1]);return n+s}function Ee(e,t){return e>t?e-t:t-e}function Ge(e){const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n<10?`0${n}`:n}`}function D(e,t,n){if(t<0||t>e.length){console.error("Invalid index: out of bounds.");return}e.splice(t,0,n)}function Fe(e,t){const n=document.querySelector(`#event_container-${e}`);console.log(n);const s=n.querySelector(`#event-${t}`);console.log(s),console.log(`scrolling ${s} into view`),s?.scrollIntoView({behavior:"smooth",block:"end"})}const w={events_accessor_key:void 0,index:void 0,size:void 0,completed:!0},z={dragged_onto:null,grabbing:null},Le=[],ee={is_down:!1};window.addEventListener("mousedown",()=>{ee.is_down=!0,console.log(`mouse_is_down: ${ee.is_down}`)});window.addEventListener("mouseup",()=>{ee.is_down=!1,console.log(`mouse_is_down: ${ee.is_down}`)});const{events:$,setEvents:O}=We;class Z{constructor(t,n){this.event_accessor_key=t,this.index=n}}class je{constructor(t,n,s){this.type=t,this.eventA=n,this.event_or_spotB=s}do(){this.type=="swap"?this.do_swap():this.type=="place_on"&&this.do_place_on(),this.on_any_action("do")}on_any_action(t){if(t=="undo"){const n=this.eventA.index;Fe(this.eventA.event_accessor_key,n)}else if(t=="do"){const n=this.event_or_spotB.index+1;Fe(this.event_or_spotB.event_accessor_key,n)}}do_place_on(){if(this.eventA.event_accessor_key==this.event_or_spotB.event_accessor_key){let n=[...$[this.eventA.event_accessor_key]];const[s]=n.splice(this.eventA.index,1);this.event_or_spotB.index>this.eventA.index?D(n,this.event_or_spotB.index,s):D(n,this.event_or_spotB.index+1,s),O(this.eventA.event_accessor_key,[...n])}else{const n=[...$[this.eventA.event_accessor_key]],s=[...$[this.event_or_spotB.event_accessor_key]],[o]=n.splice(this.eventA.index,1);D(s,this.event_or_spotB.index+1,o),O(this.eventA.event_accessor_key,n),O(this.event_or_spotB.event_accessor_key,s)}}undo_place_on(){if(this.eventA.event_accessor_key==this.event_or_spotB.event_accessor_key){let n=[...$[this.eventA.event_accessor_key]];const[s]=n.splice(this.event_or_spotB.index,1);this.eventA.index>this.event_or_spotB.index?D(n,this.eventA.index-1,s):D(n,this.eventA.index,s),O(this.event_or_spotB.event_accessor_key,[...n])}else{const n=[...$[this.eventA.event_accessor_key]],s=[...$[this.event_or_spotB.event_accessor_key]],o=this.event_or_spotB.index+1,[i]=s.splice(o,1);console.log({index_where_the_event_got_dropped_onto:o});const l=this.eventA.index;D(n,l,i),console.log({original_index_of_dragged_event:l}),O(this.eventA.event_accessor_key,n),O(this.event_or_spotB.event_accessor_key,s)}}do_swap(){this.eventA.event_accessor_key==this.eventA.event_accessor_key?this.same_list_swap():this.different_list_swap()}undo(){this.type=="place_on"?this.undo_place_on():this.type=="swap"&&(this.eventA.event_accessor_key==this.eventA.event_accessor_key?this.same_list_swap():this.different_list_swap),this.on_any_action("undo")}same_list_swap(){const t=[...$[this.eventA.event_accessor_key]],n=t[this.eventA.index];t[this.eventA.index]=t[this.event_or_spotB.index],t[this.event_or_spotB.index]=n,console.table(t),O(this.eventA.event_accessor_key,t)}different_list_swap(){const t=[...$[this.eventA.event_accessor_key]],n=[...$[this.event_or_spotB.event_accessor_key]],s=t[this.eventA.index];t[this.eventA.index]=n[this.event_or_spotB.index],n[this.event_or_spotB.index]=s,console.table(t),console.table(n),O(this.eventA.event_accessor_key,t),O(this.event_or_spotB.event_accessor_key,n)}undo_same_list_swap(){const t=this.eventA.index,n=[...$[this.eventA.event_accessor_key]],s=n[t];n[t]=n[t],n[t]=s,console.table(n),O(this.eventA.event_accessor_key,n)}}const{events:te,setEvents:Me}=We;ne(()=>{console.table(te.list)});function gt(){Me("list",[...te.list])}function Qe(e,t,n){console.log("change_event_duration",{index:t,amount:n});const s=[...te[e]];s[t]={...s[t],duration:s[t].duration+n},Me(e,s)}function pt(e,t,n){if(Ee(n,te[e][t].duration)>=10){const s=[...te[e]];s[t]={...s[t],duration:n},Me(e,s)}}setInterval(()=>{!w.completed&&w.index!=null&&w.size!=null&&w.events_accessor_key&&!ee.is_down&&(w.completed=!0,pt(w.events_accessor_key,w.index,w.size*I.size_to_time_multiplier))},10);function en(){Te(new je("place_on",new Z(z.grabbing?.events_accesor_key,z.grabbing?.index),new Z(z.dragged_onto?.events_accesor_key,z.dragged_onto?.index)))}function Te(e){Le.push(e),e.do(),console.table(Le)}function tn(){Le.pop()?.undo()}function nn(){C=!C,localStorage.setItem("event_size_callapse?",JSON.stringify(C)),gt()}let C=JSON.parse(localStorage.getItem("event_size_callapse?")||"true"),me=.6,sn=1/me;const I={time_to_size_multiplier:me,size_to_time_multiplier:sn},on="/assets/images-C0XeT9au.jpg";var rn=A("<div class=event><span>"),ln=A('<div class=event draggable=true><div class=top><img alt=""><div class=text><h2 class=name></h2><div class=time><p> - </p></div></div><div class=quick-mover-buttons><button>∆</button><button>¥</button></div></div><div class=lower-text><h4>location: </h4><p>this event is<strong class=event-duration><button>-</button><button>+</button></strong> minutes long</p></div><form><input type=number><button>change size</button></form><hr>');let He,le=(()=>{var e=rn(),t=e.firstChild;return e.style.setProperty("height","100px"),e.style.setProperty("border","dashed 6px var(--color)"),e.style.setProperty("padding","10px"),t.style.setProperty("background-color","var(--background-color)"),t.style.setProperty("width","100%"),t.style.setProperty("height","100%"),e})();function cn({name:e,location:t,duration:n,start_time:s,end_time:o,index:i,events_accesor_key:l}){let r,c;const a=C?"40px":"90px",u=C?{height:`${Math.round(n*I.time_to_size_multiplier)}px`,border:"dashed 1px var(--color)"}:{border:"dashed 1px var(--color)"},f=(()=>{var d=ln(),p=d.firstChild,v=p.firstChild,x=v.nextSibling,B=x.firstChild,S=B.nextSibling,m=S.firstChild,k=m.firstChild,T=x.nextSibling,ie=T.firstChild,vt=ie.nextSibling,De=p.nextSibling,we=De.firstChild;we.firstChild;var Re=we.nextSibling,yt=Re.firstChild,ze=yt.nextSibling,Ze=ze.firstChild,Ye=Ze.nextSibling,bt=De.nextSibling,Ae=bt.firstChild,mt=Ae.nextSibling;d.addEventListener("dragend",()=>{He.style.display="block",le.parentElement?.removeChild(le),document.body.classList.remove("durring-dragging")}),q(d,"dragend",en),d.addEventListener("dragover",()=>{z.dragged_onto={events_accesor_key:l,index:i},f.insertAdjacentElement("afterend",le)}),d.addEventListener("drag",()=>{z.grabbing={events_accesor_key:l,index:i},f.style.display="none",He=f,le.style.height=`${n*me}px`,document.body.classList.add("durring-dragging")});var Ke=r;typeof Ke=="function"?Oe(Ke,d):r=d,Q(d,"id",`event-${i}`),p.style.setProperty("display","flex"),p.style.setProperty("align-items","center"),`${a?"20px":"10px"}`!=null?p.style.setProperty("font-size",`${a?"20px":"10px"}`):p.style.removeProperty("font-size"),a!=null?v.style.setProperty("height",a):v.style.removeProperty("height"),a!=null?v.style.setProperty("width",a):v.style.removeProperty("width"),v.style.setProperty("border-radius","10%"),Q(v,"src",on),x.style.setProperty("margin-left","10px"),(C?"6px":"10px")!=null?x.style.setProperty("line-height",C?"6px":"10px"):x.style.removeProperty("line-height"),(C?"14px":"18px")!=null?x.style.setProperty("font-size",C?"14px":"18px"):x.style.removeProperty("font-size"),b(B,e),b(m,()=>Ge(s),k),b(m,()=>Ge(o),null),ie.$$click=()=>Te(new je("swap",new Z(l,i),new Z(l,i-1))),vt.$$click=()=>Te(new je("swap",new Z(l,i),new Z(l,i+1))),b(we,()=>t.join(", "),null),Re.style.setProperty("font-size","16px"),Ze.$$click=()=>Qe(l,i,-10),b(ze,()=>Math.floor(n),Ye),Ye.$$click=()=>Qe(l,i,10);var Ue=c;return typeof Ue=="function"?Oe(Ue,Ae):c=Ae,mt.$$click=()=>{c&&pt(l,i,JSON.parse(c.value))},K(wt=>at(d,u,wt)),d})(),_=new ResizeObserver(d=>{console.assert(d.length==1),w.events_accessor_key=l,w.index=i,w.size=d[0].contentRect.height,w.completed=!1,console.log(`index: ${w.index}, size: ${w.size}`)});return r&&_.observe(r),ot(()=>{r&&_.unobserve(r)}),f}be(["click"]);var fn=A("<div class=event-container><header><h2>"),an=A('<div class=buffer><img src="data:image/png;base64,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"alt="">'),un=A("<div id=event_week>");const{events:R}=We;function dn({events_accesor_key:e}){let t=0,n;console.log({events_accesor_key:e});let s=0;ne(()=>{R[e],s=0}),console.log(R);const o=(()=>{var i=fn(),l=i.firstChild,r=l.firstChild;Q(i,"id",`event_container-${e}`),l.style.setProperty("position","sticky"),l.style.setProperty("top","0px"),l.style.setProperty("z-index","10"),l.style.setProperty("background-color","var(--background-color)");var c=n;return typeof c=="function"?Oe(c,r):n=r,b(i,()=>R[e].map((a,u)=>{const f=P(cn,Nt(a,{start_time:s,get end_time(){return s+a.duration}},{events_accesor_key:e,index:u}));if(s+=a.duration,u<R[e].length-1){const _=Vt(a.location,R[e][u+1].location);s+=_,t+=_;const d=C?{height:`${Math.round(_*me)}px`}:{height:"100px"};return[f,(()=>{var p=an();return p.firstChild,K(v=>at(p,d,v)),p})()]}return f}),null),i})();return n.textContent=`travel time: ${t}`,o}function hn(){return(()=>{var e=un();return b(e,P(Wt,{get each(){return Object.entries(R)},children:([t,n])=>P(dn,{events_accesor_key:t})})),e})()}function Ve(e){I.time_to_size_multiplier+=e,I.size_to_time_multiplier=1/I.time_to_size_multiplier,gt()}var _n=A("<div class=change_time_to_size_multiplier><p>change box sizes</p><button>-</button><button>+");const gn=(()=>{var e=_n(),t=e.firstChild,n=t.nextSibling,s=n.nextSibling;return n.$$click=()=>Ve(-.1),s.$$click=()=>Ve(.1),e})();be(["click"]);const pn="_item_r43hl_1",vn={item:pn};var yn=A("<button>toggle collapse");const bn=(()=>{var e=yn();return q(e,"click",nn,!0),K(()=>zt(e,vn.item)),e})();be(["click"]);const mn="/assets/favicon-mtvwWgEY.ico";var wn=A("<div class=drop-down><span></span><div class=content>");function ce({tag:e,content:t}){return(()=>{var n=wn(),s=n.firstChild,o=s.nextSibling;return b(s,e),b(o,t),n})()}var An=A('<nav><img alt=""><div class=links><a href=checkpoints>checkpoints</a><a href=backlog>backlog'),xn=A("<button>test swap functionality"),Sn=A("<button>test drag functionality"),kn=A("<button> mode"),$n=A("<button>undo (ctrl+z)");const J={},[On,Pn]=Ne(!1);Ut(()=>import("./drag_and_swap_events-ZJgKrhoc.js"),[]).then(e=>{console.log({t:e}),J.test_drag=e.test_drag,J.test_swap=e.test_swap,console.log({tests:J}),Pn(!0)});function Cn(){return[(()=>{var e=An(),t=e.firstChild,n=t.nextSibling;return Q(t,"src",mn),b(e,gn,n),b(e,P(Mt,{get when(){return On()},get children(){return P(ce,{tag:"tests",get content(){return[(()=>{var s=xn();return q(s,"click",J.test_swap,!0),s})(),(()=>{var s=Sn();return q(s,"click",J.test_drag,!0),s})()]}})}}),n),b(e,P(ce,{tag:"settings",get content(){return[bn,P(ce,{tag:"change mode",get content(){return G(()=>et.map(s=>(()=>{var o=kn(),i=o.firstChild;return o.$$click=()=>tt(s),b(o,s,i),o})()))}})]}}),n),b(e,P(ce,{tag:"actions",get content(){return(()=>{var s=$n();return q(s,"click",tn,!0),s})()}}),n),e})(),P(hn,{})]}be(["click"]);const En=document.getElementById("root");Rt(()=>P(Cn,{}),En);export{je as A,Te as c,Z as e,We as s,tn as u};