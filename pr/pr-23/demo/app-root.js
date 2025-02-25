(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();function a(o,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(n=(r<3?s(n):r>3?s(e,t,n):s(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n}function ce(o,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,e)}function St(o,e,t,i){function r(n){return n instanceof t?n:new t(function(s){s(n)})}return new(t||(t=Promise))(function(n,s){function d(h){try{c(i.next(h))}catch(p){s(p)}}function l(h){try{c(i.throw(h))}catch(p){s(p)}}function c(h){h.done?n(h.value):r(h.value).then(d,l)}c((i=i.apply(o,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=window,$t=Se.ShadowRoot&&(Se.ShadyCSS===void 0||Se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mt=Symbol(),Tt=new WeakMap;let si=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if($t&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Tt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Tt.set(t,e))}return e}toString(){return this.cssText}};const yi=o=>new si(typeof o=="string"?o:o+"",void 0,Mt),g=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,r,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[n+1],o[0]);return new si(t,o,Mt)},$i=(o,e)=>{$t?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=Se.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,o.appendChild(i)})},Bt=$t?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return yi(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ze;const Te=window,Ot=Te.trustedTypes,Mi=Ot?Ot.emptyScript:"",Rt=Te.reactiveElementPolyfillSupport,ut={toAttribute(o,e){switch(e){case Boolean:o=o?Mi:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},At=(o,e)=>e!==o&&(e==e||o==o),Je={attribute:!0,type:String,converter:ut,reflect:!1,hasChanged:At};let ee=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=Je){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Je}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Bt(r))}else e!==void 0&&t.push(Bt(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return $i(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Je){var r;const n=this.constructor._$Ep(e,i);if(n!==void 0&&i.reflect===!0){const s=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:ut).toAttribute(t,i.type);this._$El=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(e,t){var i;const r=this.constructor,n=r._$Ev.get(e);if(n!==void 0&&this._$El!==n){const s=r.getPropertyOptions(n),d=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:ut;this._$El=n,this[n]=d.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||At)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,n)=>this[n]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdate)===null||n===void 0?void 0:n.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ee.finalized=!0,ee.elementProperties=new Map,ee.elementStyles=[],ee.shadowRootOptions={mode:"open"},Rt==null||Rt({ReactiveElement:ee}),((Ze=Te.reactiveElementVersions)!==null&&Ze!==void 0?Ze:Te.reactiveElementVersions=[]).push("1.6.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xe;const Be=window,ie=Be.trustedTypes,Ht=ie?ie.createPolicy("lit-html",{createHTML:o=>o}):void 0,ct="$lit$",N=`lit$${(Math.random()+"").slice(9)}$`,ai="?"+N,Ai=`<${ai}>`,X=document,Oe=()=>X.createComment(""),we=o=>o===null||typeof o!="object"&&typeof o!="function",li=Array.isArray,xi=o=>li(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Qe=`[ 	
\f\r]`,he=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dt=/-->/g,Ut=/>/g,W=RegExp(`>|${Qe}(?:([^\\s"'>=/]+)(${Qe}*=${Qe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),It=/'/g,Nt=/"/g,di=/^(?:script|style|textarea|title)$/i,_e=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),Pt=new WeakMap,K=X.createTreeWalker(X,129,null,!1);function ui(o,e){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ht!==void 0?Ht.createHTML(e):e}const Ci=(o,e)=>{const t=o.length-1,i=[];let r,n=e===2?"<svg>":"",s=he;for(let d=0;d<t;d++){const l=o[d];let c,h,p=-1,m=0;for(;m<l.length&&(s.lastIndex=m,h=s.exec(l),h!==null);)m=s.lastIndex,s===he?h[1]==="!--"?s=Dt:h[1]!==void 0?s=Ut:h[2]!==void 0?(di.test(h[2])&&(r=RegExp("</"+h[2],"g")),s=W):h[3]!==void 0&&(s=W):s===W?h[0]===">"?(s=r??he,p=-1):h[1]===void 0?p=-2:(p=s.lastIndex-h[2].length,c=h[1],s=h[3]===void 0?W:h[3]==='"'?Nt:It):s===Nt||s===It?s=W:s===Dt||s===Ut?s=he:(s=W,r=void 0);const b=s===W&&o[d+1].startsWith("/>")?" ":"";n+=s===he?l+Ai:p>=0?(i.push(c),l.slice(0,p)+ct+l.slice(p)+N+b):l+N+(p===-2?(i.push(void 0),d):b)}return[ui(o,n+(o[t]||"<?>")+(e===2?"</svg>":"")),i]};let Re=class{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,s=0;const d=e.length-1,l=this.parts,[c,h]=Ci(e,t);if(this.el=Re.createElement(c,i),K.currentNode=this.el.content,t===2){const p=this.el.content,m=p.firstChild;m.remove(),p.append(...m.childNodes)}for(;(r=K.nextNode())!==null&&l.length<d;){if(r.nodeType===1){if(r.hasAttributes()){const p=[];for(const m of r.getAttributeNames())if(m.endsWith(ct)||m.startsWith(N)){const b=h[s++];if(p.push(m),b!==void 0){const B=r.getAttribute(b.toLowerCase()+ct).split(N),k=/([.?@])?(.*)/.exec(b);l.push({type:1,index:n,name:k[2],strings:B,ctor:k[1]==="."?Ei:k[1]==="?"?Si:k[1]==="@"?Ti:ze})}else l.push({type:6,index:n})}for(const m of p)r.removeAttribute(m)}if(di.test(r.tagName)){const p=r.textContent.split(N),m=p.length-1;if(m>0){r.textContent=ie?ie.emptyScript:"";for(let b=0;b<m;b++)r.append(p[b],Oe()),K.nextNode(),l.push({type:2,index:++n});r.append(p[m],Oe())}}}else if(r.nodeType===8)if(r.data===ai)l.push({type:2,index:n});else{let p=-1;for(;(p=r.data.indexOf(N,p+1))!==-1;)l.push({type:7,index:n}),p+=N.length-1}n++}}static createElement(e,t){const i=X.createElement("template");return i.innerHTML=e,i}};function re(o,e,t=o,i){var r,n,s,d;if(e===_e)return e;let l=i!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[i]:t._$Cl;const c=we(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),c===void 0?l=void 0:(l=new c(o),l._$AT(o,t,i)),i!==void 0?((s=(d=t)._$Co)!==null&&s!==void 0?s:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=re(o,l._$AS(o,e.values),l,i)),e}let ki=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:r}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:X).importNode(i,!0);K.currentNode=n;let s=K.nextNode(),d=0,l=0,c=r[0];for(;c!==void 0;){if(d===c.index){let h;c.type===2?h=new xt(s,s.nextSibling,this,e):c.type===1?h=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(h=new Bi(s,this,e)),this._$AV.push(h),c=r[++l]}d!==(c==null?void 0:c.index)&&(s=K.nextNode(),d++)}return K.currentNode=X,n}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},xt=class{constructor(e,t,i,r){var n;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cp=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=re(this,e,t),we(e)?e===E||e==null||e===""?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==_e&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):xi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==E&&we(this._$AH)?this._$AA.nextSibling.data=e:this.$(X.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Re.createElement(ui(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(i);else{const s=new ki(n,this),d=s.u(this.options);s.v(i),this.$(d),this._$AH=s}}_$AC(e){let t=Pt.get(e.strings);return t===void 0&&Pt.set(e.strings,t=new Re(e)),t}T(e){li(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new xt(this.k(Oe()),this.k(Oe()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},ze=class{constructor(e,t,i,r,n){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const n=this.strings;let s=!1;if(n===void 0)e=re(this,e,t,0),s=!we(e)||e!==this._$AH&&e!==_e,s&&(this._$AH=e);else{const d=e;let l,c;for(e=n[0],l=0;l<n.length-1;l++)c=re(this,d[i+l],t,l),c===_e&&(c=this._$AH[l]),s||(s=!we(c)||c!==this._$AH[l]),c===E?e=E:e!==E&&(e+=(c??"")+n[l+1]),this._$AH[l]=c}s&&!r&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ei=class extends ze{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}};const Li=ie?ie.emptyScript:"";let Si=class extends ze{constructor(){super(...arguments),this.type=4}j(e){e&&e!==E?this.element.setAttribute(this.name,Li):this.element.removeAttribute(this.name)}},Ti=class extends ze{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=re(this,e,t,0))!==null&&i!==void 0?i:E)===_e)return;const r=this._$AH,n=e===E&&r!==E||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==E&&(r===E||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Bi=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){re(this,e)}};const zt=Be.litHtmlPolyfillSupport;zt==null||zt(Re,xt),((Xe=Be.litHtmlVersions)!==null&&Xe!==void 0?Xe:Be.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ye;const He=window,oe=He.trustedTypes,Ft=oe?oe.createPolicy("lit-html",{createHTML:o=>o}):void 0,ht="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,ci="?"+P,Oi=`<${ci}>`,Q=document,be=()=>Q.createComment(""),ye=o=>o===null||typeof o!="object"&&typeof o!="function",hi=Array.isArray,Ri=o=>hi(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",et=`[ 	
\f\r]`,ve=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jt=/-->/g,Wt=/>/g,q=RegExp(`>|${et}(?:([^\\s"'>=/]+)(${et}*=${et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qt=/'/g,Vt=/"/g,vi=/^(?:script|style|textarea|title)$/i,pi=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),w=pi(1),Fe=pi(2),ne=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),Kt=new WeakMap,G=Q.createTreeWalker(Q,129,null,!1);function fi(o,e){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ft!==void 0?Ft.createHTML(e):e}const Hi=(o,e)=>{const t=o.length-1,i=[];let r,n=e===2?"<svg>":"",s=ve;for(let d=0;d<t;d++){const l=o[d];let c,h,p=-1,m=0;for(;m<l.length&&(s.lastIndex=m,h=s.exec(l),h!==null);)m=s.lastIndex,s===ve?h[1]==="!--"?s=jt:h[1]!==void 0?s=Wt:h[2]!==void 0?(vi.test(h[2])&&(r=RegExp("</"+h[2],"g")),s=q):h[3]!==void 0&&(s=q):s===q?h[0]===">"?(s=r??ve,p=-1):h[1]===void 0?p=-2:(p=s.lastIndex-h[2].length,c=h[1],s=h[3]===void 0?q:h[3]==='"'?Vt:qt):s===Vt||s===qt?s=q:s===jt||s===Wt?s=ve:(s=q,r=void 0);const b=s===q&&o[d+1].startsWith("/>")?" ":"";n+=s===ve?l+Oi:p>=0?(i.push(c),l.slice(0,p)+ht+l.slice(p)+P+b):l+P+(p===-2?(i.push(void 0),d):b)}return[fi(o,n+(o[t]||"<?>")+(e===2?"</svg>":"")),i]};class $e{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,s=0;const d=e.length-1,l=this.parts,[c,h]=Hi(e,t);if(this.el=$e.createElement(c,i),G.currentNode=this.el.content,t===2){const p=this.el.content,m=p.firstChild;m.remove(),p.append(...m.childNodes)}for(;(r=G.nextNode())!==null&&l.length<d;){if(r.nodeType===1){if(r.hasAttributes()){const p=[];for(const m of r.getAttributeNames())if(m.endsWith(ht)||m.startsWith(P)){const b=h[s++];if(p.push(m),b!==void 0){const B=r.getAttribute(b.toLowerCase()+ht).split(P),k=/([.?@])?(.*)/.exec(b);l.push({type:1,index:n,name:k[2],strings:B,ctor:k[1]==="."?Ui:k[1]==="?"?Ni:k[1]==="@"?Pi:je})}else l.push({type:6,index:n})}for(const m of p)r.removeAttribute(m)}if(vi.test(r.tagName)){const p=r.textContent.split(P),m=p.length-1;if(m>0){r.textContent=oe?oe.emptyScript:"";for(let b=0;b<m;b++)r.append(p[b],be()),G.nextNode(),l.push({type:2,index:++n});r.append(p[m],be())}}}else if(r.nodeType===8)if(r.data===ci)l.push({type:2,index:n});else{let p=-1;for(;(p=r.data.indexOf(P,p+1))!==-1;)l.push({type:7,index:n}),p+=P.length-1}n++}}static createElement(e,t){const i=Q.createElement("template");return i.innerHTML=e,i}}function se(o,e,t=o,i){var r,n,s,d;if(e===ne)return e;let l=i!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[i]:t._$Cl;const c=ye(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),c===void 0?l=void 0:(l=new c(o),l._$AT(o,t,i)),i!==void 0?((s=(d=t)._$Co)!==null&&s!==void 0?s:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=se(o,l._$AS(o,e.values),l,i)),e}class Di{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:r}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Q).importNode(i,!0);G.currentNode=n;let s=G.nextNode(),d=0,l=0,c=r[0];for(;c!==void 0;){if(d===c.index){let h;c.type===2?h=new xe(s,s.nextSibling,this,e):c.type===1?h=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(h=new zi(s,this,e)),this._$AV.push(h),c=r[++l]}d!==(c==null?void 0:c.index)&&(s=G.nextNode(),d++)}return G.currentNode=Q,n}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class xe{constructor(e,t,i,r){var n;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cp=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=se(this,e,t),ye(e)?e===C||e==null||e===""?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==ne&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ri(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==C&&ye(this._$AH)?this._$AA.nextSibling.data=e:this.$(Q.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=$e.createElement(fi(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(i);else{const s=new Di(n,this),d=s.u(this.options);s.v(i),this.$(d),this._$AH=s}}_$AC(e){let t=Kt.get(e.strings);return t===void 0&&Kt.set(e.strings,t=new $e(e)),t}T(e){hi(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new xe(this.k(be()),this.k(be()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class je{constructor(e,t,i,r,n){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const n=this.strings;let s=!1;if(n===void 0)e=se(this,e,t,0),s=!ye(e)||e!==this._$AH&&e!==ne,s&&(this._$AH=e);else{const d=e;let l,c;for(e=n[0],l=0;l<n.length-1;l++)c=se(this,d[i+l],t,l),c===ne&&(c=this._$AH[l]),s||(s=!ye(c)||c!==this._$AH[l]),c===C?e=C:e!==C&&(e+=(c??"")+n[l+1]),this._$AH[l]=c}s&&!r&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ui extends je{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}}const Ii=oe?oe.emptyScript:"";class Ni extends je{constructor(){super(...arguments),this.type=4}j(e){e&&e!==C?this.element.setAttribute(this.name,Ii):this.element.removeAttribute(this.name)}}class Pi extends je{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=se(this,e,t,0))!==null&&i!==void 0?i:C)===ne)return;const r=this._$AH,n=e===C&&r!==C||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==C&&(r===C||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class zi{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){se(this,e)}}const Gt=He.litHtmlPolyfillSupport;Gt==null||Gt($e,xe),((Ye=He.litHtmlVersions)!==null&&Ye!==void 0?Ye:He.litHtmlVersions=[]).push("2.8.0");const Fi=(o,e,t)=>{var i,r;const n=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let s=n._$litPart$;if(s===void 0){const d=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;n._$litPart$=s=new xe(e.insertBefore(be(),d),d,void 0,t??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var tt,it;let R=class extends ee{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ne}};R.finalized=!0,R._$litElement$=!0,(tt=globalThis.litElementHydrateSupport)===null||tt===void 0||tt.call(globalThis,{LitElement:R});const Zt=globalThis.litElementPolyfillSupport;Zt==null||Zt({LitElement:R});((it=globalThis.litElementVersions)!==null&&it!==void 0?it:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=o=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(o,e):((t,i)=>{const{kind:r,elements:n}=i;return{kind:r,elements:n,finisher(s){customElements.define(t,s)}}})(o,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ji=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}};function $(o){return(e,t)=>t!==void 0?((i,r,n)=>{r.constructor.createProperty(n,i)})(o,e,t):ji(o,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function We(o){return $({...o,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wi=({finisher:o,descriptor:e})=>(t,i)=>{var r;if(i===void 0){const n=(r=t.originalKey)!==null&&r!==void 0?r:t.key,s=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(t.key)}:{...t,key:n};return o!=null&&(s.finisher=function(d){o(d,n)}),s}{const n=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),o==null||o(n,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Y(o,e){return Wi({descriptor:t=>{const i={get(){var r,n;return(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var n,s;return this[r]===void 0&&(this[r]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rt;((rt=window.HTMLSlotElement)===null||rt===void 0?void 0:rt.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},vt=Symbol();class qi{get taskComplete(){return this.t||(this.status===1?this.t=new Promise((e,t)=>{this.i=e,this.o=t}):this.status===3?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(e,t,i){var n;this.u=0,this.status=0,(this.p=e).addController(this);const r=typeof t=="object"?t:{task:t,args:i};this._=r.task,this.v=r.args,this.j=r.argsEqual??Vi,this.m=r.onComplete,this.g=r.onError,this.autoRun=r.autoRun??!0,"initialValue"in r&&(this.l=r.initialValue,this.status=2,this.k=(n=this.A)==null?void 0:n.call(this))}hostUpdate(){this.autoRun===!0&&this.O()}hostUpdated(){this.autoRun==="afterUpdate"&&this.O()}A(){if(this.v===void 0)return;const e=this.v();if(!Array.isArray(e))throw Error("The args function must return an array");return e}async O(){const e=this.A(),t=this.k;this.k=e,e===t||e===void 0||t!==void 0&&this.j(t,e)||await this.run(e)}async run(e){var s,d,l,c,h;let t,i;e??(e=this.A()),this.k=e,this.status===1?(s=this.T)==null||s.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,this.autoRun==="afterUpdate"?queueMicrotask(()=>this.p.requestUpdate()):this.p.requestUpdate();const r=++this.u;this.T=new AbortController;let n=!1;try{t=await this._(e,{signal:this.T.signal})}catch(p){n=!0,i=p}if(this.u===r){if(t===vt)this.status=0;else{if(n===!1){try{(d=this.m)==null||d.call(this,t)}catch{}this.status=2,(l=this.i)==null||l.call(this,t)}else{try{(c=this.g)==null||c.call(this,i)}catch{}this.status=3,(h=this.o)==null||h.call(this,i)}this.l=t,this.h=i}this.p.requestUpdate()}}abort(e){var t;this.status===1&&((t=this.T)==null||t.abort(e))}get value(){return this.l}get error(){return this.h}render(e){var t,i,r,n;switch(this.status){case 0:return(t=e.initial)==null?void 0:t.call(e);case 1:return(i=e.pending)==null?void 0:i.call(e);case 2:return(r=e.complete)==null?void 0:r.call(e,this.value);case 3:return(n=e.error)==null?void 0:n.call(e,this.error);default:throw Error("Unexpected status: "+this.status)}}}const Vi=(o,e)=>o===e||o.length===e.length&&o.every((t,i)=>!At(t,e[i])),Xt=g`var(--white, #fff)`,Ki=g`var(--primaryDisableCTAFill, #767676)`,Gi=g`var(--secondaryCTABorder, #999)`,Zi=g`var(--primaryCTAFill, #194880)`,ot=g`var(--primaryCTAFillRGB, 25, 72, 128)`,Ji=g`var(--primaryCTABorder, #c5d1df)`,Xi=g`var(--primaryErrorCTAFill, #d9534f)`,nt=g`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,Qi=g`var(--primaryErrorCTABorder, #d43f3a)`,Yi=g`var(--secondaryCTAFill, #333)`,st=g`var(--secondaryCTAFillRGB, 51, 51, 51)`,er=g`var(--primaryCTABorder, #979797)`,tr=g`#ee8950`,ir=g`#ec7939`,rr=g`
  .ia-button {
    min-height: 3rem;
    cursor: pointer;
    color: ${Xt};
    line-height: normal;
    border-radius: 0.4rem;
    font-size: 1.4rem;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    border: 1px solid transparent;
    white-space: nowrap;
    appearance: auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    transition: all 0.1s ease 0s;
    vertical-align: middle;
    padding: 0 3rem;
    outline-color: ${Xt};
    outline-offset: -4px;
    user-select: none;
    text-decoration: none;
    width: fit-content;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
  }
  .ia-button:focus-visible {
    outline-style: double;
  }
  .ia-button:disabled {
    cursor: not-allowed;
    background-color: ${Ki};
    border: 1px solid ${Gi};
  }
  .ia-button.transparent {
    background-color: transparent;
  }
  .ia-button.warning {
    background-color: ${tr}
    border-color: ${ir};
  }

  .ia-button.primary {
    background-color: ${Zi};
    border-color: ${Ji};
  }
  .ia-button.primary:hover {
    background-color: rgba(${ot}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${ot}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${ot}, 0.7);
  }

  .ia-button.danger {
    background-color: ${Xi};
    border-color: ${Qi};
  }
  .ia-button.danger:hover {
    background-color: rgba(${nt}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${nt}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${nt}, 0.7);
  }

  .ia-button.dark {
    background-color: ${Yi};
    border-color: ${er};
  }
  .ia-button.dark:hover {
    background-color: rgba(${st}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${st}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${st}, 0.7);
  }
`;function u(o){let e,t,i;return typeof o=="object"?(e=o.hashFunction,t=o.expiring,i=o.tags):e=o,(r,n,s)=>{if(s.value!=null)s.value=Qt(s.value,e,t,i);else if(s.get!=null)s.get=Qt(s.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const at=new Map;function Qt(o,e,t=0,i){const r=Symbol("__memoized_map__");return function(...n){let s;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let d=this[r];if(Array.isArray(i))for(const l of i)at.has(l)?at.get(l).push(d):at.set(l,[d]);if(e||n.length>0||t>0){let l;e===!0?l=n.map(p=>p.toString()).join("!"):e?l=e.apply(this,n):l=n[0];const c=`${l}__timestamp`;let h=!1;if(t>0)if(!d.has(c))h=!0;else{let p=d.get(c);h=Date.now()-p>t}d.has(l)&&!h?s=d.get(l):(s=o.apply(this,n),d.set(l,s),t>0&&d.set(c,Date.now()))}else{const l=this;d.has(l)?s=d.get(l):(s=o.apply(this,n),d.set(l,s))}return s}}class pt{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:Boolean(e)}}pt.shared=new pt;class Me{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}Me.shared=new Me;class De{parseValue(e){return Me.shared.parseValue(e)}}De.shared=new De;class ft{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}ft.shared=new ft;class gt{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let i;return t.length===1?i=this.parseNumberFormat(t[0]):i=this.parseColonSeparatedFormat(t),i}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const i=e.map((r,n)=>{const s=parseFloat(r);if(Number.isNaN(s))return t=!0,0;const l=60**(e.length-1-n);return s*Math.floor(l)}).reduce((r,n)=>r+n,0);return t?void 0:i}}gt.shared=new gt;class mt{parseValue(e){if(typeof e=="string")return e}}mt.shared=new mt;class or{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let i=[];for(const r of this.separators)if(i=t.split(r),i.length>1)break;return this.parseListValues(i)}parseListValues(e){const i=e.map(n=>n.trim()).map(n=>this.parser.parseValue(n)),r=[];return i.forEach(n=>{n!==void 0&&r.push(n)}),r}}class wt{parseValue(e){if(typeof e=="string")return e}}wt.shared=new wt;class Ue{parseValue(e){return String(e)}}Ue.shared=new Ue;class H{constructor(e,t){this.parser=e,this.rawValue=t}get values(){return this.parseRawValue()}get value(){return this.values[0]}parseRawValue(){if(this.rawValue===void 0)return[];const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const r=this.parser.parseValue(i);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}a([u()],H.prototype,"values",null);a([u()],H.prototype,"value",null);class Z extends H{constructor(e){super(pt.shared,e)}}class M extends H{constructor(e){super(ft.shared,e)}}class lt extends H{constructor(e){super(gt.shared,e)}}class y extends H{constructor(e){super(Me.shared,e)}}class v extends H{constructor(e){super(Ue.shared,e)}}class nr extends H{constructor(e){super(wt.shared,e)}}class Ie extends H{constructor(e){super(De.shared,e)}}class Ce extends H{constructor(e){super(mt.shared,e)}}class sr extends H{constructor(e,t){super(t,e)}}class ar extends sr{constructor(e){const t=new or(Ue.shared);super(e,t)}}class f{constructor(e){this.rawMetadata=e}get identifier(){var e;return(e=this.rawMetadata)===null||e===void 0?void 0:e.identifier}get addeddate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.addeddate?new M(this.rawMetadata.addeddate):void 0}get audio_codec(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.audio_codec?new v(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.audio_sample_rate?new y(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.avg_rating?new y(this.rawMetadata.avg_rating):void 0}get collection(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection?new v(this.rawMetadata.collection):void 0}get collections_raw(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collections_raw?new v(this.rawMetadata.collections_raw):void 0}get collection_size(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection_size?new Ie(this.rawMetadata.collection_size):void 0}get contributor(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.contributor?new v(this.rawMetadata.contributor):void 0}get coverage(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.coverage?new v(this.rawMetadata.coverage):void 0}get creator(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.creator?new v(this.rawMetadata.creator):void 0}get date(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.date?new M(this.rawMetadata.date):void 0}get description(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.description?new v(this.rawMetadata.description):void 0}get downloads(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.downloads?new y(this.rawMetadata.downloads):void 0}get duration(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.duration?new lt(this.rawMetadata.duration):void 0}get"external-identifier"(){var e,t;return!((e=this.rawMetadata)===null||e===void 0)&&e["external-identifier"]?new v((t=this.rawMetadata)===null||t===void 0?void 0:t["external-identifier"]):void 0}get files_count(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.files_count?new y(this.rawMetadata.files_count):void 0}get indexdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.indexdate?new M(this.rawMetadata.indexdate):void 0}get isbn(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.isbn?new v(this.rawMetadata.isbn):void 0}get issue(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.issue?new v(this.rawMetadata.issue):void 0}get item_count(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.item_count?new y(this.rawMetadata.item_count):void 0}get item_size(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.item_size?new Ie(this.rawMetadata.item_size):void 0}get language(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.language?new v(this.rawMetadata.language):void 0}get length(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.length?new lt(this.rawMetadata.length):void 0}get lineage(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.lineage?new v(this.rawMetadata.lineage):void 0}get month(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.month?new y(this.rawMetadata.month):void 0}get mediatype(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.mediatype?new Ce(this.rawMetadata.mediatype):void 0}get noindex(){var e;return((e=this.rawMetadata)===null||e===void 0?void 0:e.noindex)!=null?new Z(this.rawMetadata.noindex):void 0}get notes(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.notes?new v(this.rawMetadata.notes):void 0}get num_favorites(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.num_favorites?new y(this.rawMetadata.num_favorites):void 0}get num_reviews(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.num_reviews?new y(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.openlibrary_edition?new v(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.openlibrary_work?new v(this.rawMetadata.openlibrary_work):void 0}get page_progression(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.page_progression?new nr(this.rawMetadata.page_progression):void 0}get partner(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.partner?new v(this.rawMetadata.partner):void 0}get ppi(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.ppi?new y(this.rawMetadata.ppi):void 0}get publicdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.publicdate?new M(this.rawMetadata.publicdate):void 0}get publisher(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.publisher?new v(this.rawMetadata.publisher):void 0}get reviewdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.reviewdate?new M(this.rawMetadata.reviewdate):void 0}get runtime(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.runtime?new lt(this.rawMetadata.runtime):void 0}get scanner(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.scanner?new v(this.rawMetadata.scanner):void 0}get source(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.source?new v(this.rawMetadata.source):void 0}get start_localtime(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.start_localtime?new M(this.rawMetadata.start_localtime):void 0}get start_time(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.start_time?new M(this.rawMetadata.start_time):void 0}get stop_time(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.stop_time?new M(this.rawMetadata.stop_time):void 0}get subject(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.subject?new ar(this.rawMetadata.subject):void 0}get taper(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.taper?new v(this.rawMetadata.taper):void 0}get title(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.title?new v(this.rawMetadata.title):void 0}get transferer(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.transferer?new v(this.rawMetadata.transferer):void 0}get track(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.track?new y(this.rawMetadata.track):void 0}get type(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.type?new v(this.rawMetadata.type):void 0}get uploader(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.uploader?new v(this.rawMetadata.uploader):void 0}get utc_offset(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.utc_offset?new y(this.rawMetadata.utc_offset):void 0}get venue(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.venue?new v(this.rawMetadata.venue):void 0}get volume(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.volume?new v(this.rawMetadata.volume):void 0}get week(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.week?new y(this.rawMetadata.week):void 0}get year(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.year?new M(this.rawMetadata.year):void 0}get query(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.query?new v(this.rawMetadata.fields.query):void 0}get date_favorited(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date_favorited?new M(this.rawMetadata.fields.date_favorited):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new v(this.rawMetadata.fields.__href__):void 0}}a([u()],f.prototype,"addeddate",null);a([u()],f.prototype,"audio_codec",null);a([u()],f.prototype,"audio_sample_rate",null);a([u()],f.prototype,"avg_rating",null);a([u()],f.prototype,"collection",null);a([u()],f.prototype,"collections_raw",null);a([u()],f.prototype,"collection_size",null);a([u()],f.prototype,"contributor",null);a([u()],f.prototype,"coverage",null);a([u()],f.prototype,"creator",null);a([u()],f.prototype,"date",null);a([u()],f.prototype,"description",null);a([u()],f.prototype,"downloads",null);a([u()],f.prototype,"duration",null);a([u()],f.prototype,"external-identifier",null);a([u()],f.prototype,"files_count",null);a([u()],f.prototype,"indexdate",null);a([u()],f.prototype,"isbn",null);a([u()],f.prototype,"issue",null);a([u()],f.prototype,"item_count",null);a([u()],f.prototype,"item_size",null);a([u()],f.prototype,"language",null);a([u()],f.prototype,"length",null);a([u()],f.prototype,"lineage",null);a([u()],f.prototype,"month",null);a([u()],f.prototype,"mediatype",null);a([u()],f.prototype,"noindex",null);a([u()],f.prototype,"notes",null);a([u()],f.prototype,"num_favorites",null);a([u()],f.prototype,"num_reviews",null);a([u()],f.prototype,"openlibrary_edition",null);a([u()],f.prototype,"openlibrary_work",null);a([u()],f.prototype,"page_progression",null);a([u()],f.prototype,"partner",null);a([u()],f.prototype,"ppi",null);a([u()],f.prototype,"publicdate",null);a([u()],f.prototype,"publisher",null);a([u()],f.prototype,"reviewdate",null);a([u()],f.prototype,"runtime",null);a([u()],f.prototype,"scanner",null);a([u()],f.prototype,"source",null);a([u()],f.prototype,"start_localtime",null);a([u()],f.prototype,"start_time",null);a([u()],f.prototype,"stop_time",null);a([u()],f.prototype,"subject",null);a([u()],f.prototype,"taper",null);a([u()],f.prototype,"title",null);a([u()],f.prototype,"transferer",null);a([u()],f.prototype,"track",null);a([u()],f.prototype,"type",null);a([u()],f.prototype,"uploader",null);a([u()],f.prototype,"utc_offset",null);a([u()],f.prototype,"venue",null);a([u()],f.prototype,"volume",null);a([u()],f.prototype,"week",null);a([u()],f.prototype,"year",null);a([u()],f.prototype,"query",null);a([u()],f.prototype,"date_favorited",null);a([u()],f.prototype,"__href__",null);class _{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new M(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating)!=null?new y(this.rawMetadata.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new v(this.rawMetadata.fields.collection):void 0}get collection_files_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.collection_files_count)!=null?new y(this.rawMetadata.fields.collection_files_count):void 0}get collection_size(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.collection_size)!=null?new Ie(this.rawMetadata.fields.collection_size):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new v(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new M(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new v(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads)!=null?new y(this.rawMetadata.fields.downloads):void 0}get files_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.files_count)!=null?new y(this.rawMetadata.fields.files_count):void 0}get genre(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.genre?new v(this.rawMetadata.fields.genre):void 0}get indexflag(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.indexflag?new v(this.rawMetadata.fields.indexflag):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new v(this.rawMetadata.fields.issue):void 0}get item_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.item_count)!=null?new y(this.rawMetadata.fields.item_count):void 0}get item_size(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.item_size)!=null?new Ie(this.rawMetadata.fields.item_size):void 0}get language(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.language?new v(this.rawMetadata.fields.language):void 0}get lending___available_to_borrow(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_borrow)!=null?new Z(this.rawMetadata.fields.lending___available_to_borrow):void 0}get lending___available_to_browse(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_browse)!=null?new Z(this.rawMetadata.fields.lending___available_to_browse):void 0}get lending___available_to_waitlist(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_waitlist)!=null?new Z(this.rawMetadata.fields.lending___available_to_waitlist):void 0}get lending___status(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.lending___status?new v(this.rawMetadata.fields.lending___status):void 0}get licenseurl(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.licenseurl?new v(this.rawMetadata.fields.licenseurl):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new Ce(this.rawMetadata.fields.mediatype):void 0}get month(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.month)!=null?new y(this.rawMetadata.fields.month):void 0}get noindex(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.noindex)!=null?new Z(this.rawMetadata.fields.noindex):void 0}get num_favorites(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.num_favorites)!=null?new y(this.rawMetadata.fields.num_favorites):void 0}get num_reviews(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.num_reviews)!=null?new y(this.rawMetadata.fields.num_reviews):void 0}get publicdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.publicdate?new M(this.rawMetadata.fields.publicdate):void 0}get reviewdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.reviewdate?new M(this.rawMetadata.fields.reviewdate):void 0}get review(){var e;const t=(e=this.rawMetadata)===null||e===void 0?void 0:e.review;return t?{body:t.reviewbody,title:t.reviewtitle,author:t.reviewer,authorItem:t.reviewer_itemname,updatedate:new Date(t.reviewdate),createdate:new Date(t.createdate),stars:Number(t.stars)||0,__href__:t.__href__}:void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new v(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new v(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new v(this.rawMetadata.fields.title):void 0}get type(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.type?new v(this.rawMetadata.fields.type):void 0}get volume(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.volume?new v(this.rawMetadata.fields.volume):void 0}get week(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.week)!=null?new y(this.rawMetadata.fields.week):void 0}get year(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year)!=null?new y(this.rawMetadata.fields.year):void 0}}a([u()],_.prototype,"addeddate",null);a([u()],_.prototype,"avg_rating",null);a([u()],_.prototype,"collection",null);a([u()],_.prototype,"collection_files_count",null);a([u()],_.prototype,"collection_size",null);a([u()],_.prototype,"creator",null);a([u()],_.prototype,"date",null);a([u()],_.prototype,"description",null);a([u()],_.prototype,"downloads",null);a([u()],_.prototype,"files_count",null);a([u()],_.prototype,"genre",null);a([u()],_.prototype,"indexflag",null);a([u()],_.prototype,"issue",null);a([u()],_.prototype,"item_count",null);a([u()],_.prototype,"item_size",null);a([u()],_.prototype,"language",null);a([u()],_.prototype,"lending___available_to_borrow",null);a([u()],_.prototype,"lending___available_to_browse",null);a([u()],_.prototype,"lending___available_to_waitlist",null);a([u()],_.prototype,"lending___status",null);a([u()],_.prototype,"licenseurl",null);a([u()],_.prototype,"mediatype",null);a([u()],_.prototype,"month",null);a([u()],_.prototype,"noindex",null);a([u()],_.prototype,"num_favorites",null);a([u()],_.prototype,"num_reviews",null);a([u()],_.prototype,"publicdate",null);a([u()],_.prototype,"reviewdate",null);a([u()],_.prototype,"review",null);a([u()],_.prototype,"source",null);a([u()],_.prototype,"subject",null);a([u()],_.prototype,"title",null);a([u()],_.prototype,"type",null);a([u()],_.prototype,"volume",null);a([u()],_.prototype,"week",null);a([u()],_.prototype,"year",null);class A{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get highlight(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.highlight)===null||t===void 0)&&t.text?new v(this.rawMetadata.highlight.text):void 0}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new M(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating)!=null?new y(this.rawMetadata.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new v(this.rawMetadata.fields.collection):void 0}get created_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.created_on?new M(this.rawMetadata.fields.created_on):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new v(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new M(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new v(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads)!=null?new y(this.rawMetadata.fields.downloads):void 0}get filename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.filename?new v(this.rawMetadata.fields.filename):void 0}get file_basename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.file_basename?new v(this.rawMetadata.fields.file_basename):void 0}get file_creation_mtime(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.file_creation_mtime)!=null?new y(this.rawMetadata.fields.file_creation_mtime):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new v(this.rawMetadata.fields.issue):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new Ce(this.rawMetadata.fields.mediatype):void 0}get page_num(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.page_num)!=null?new y(this.rawMetadata.fields.page_num):void 0}get publicdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.publicdate?new M(this.rawMetadata.fields.publicdate):void 0}get result_in_subfile(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.result_in_subfile)!=null?new Z(this.rawMetadata.fields.result_in_subfile):void 0}get reviewdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.reviewdate?new M(this.rawMetadata.fields.reviewdate):void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new v(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new v(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new v(this.rawMetadata.fields.title):void 0}get updated_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.updated_on?new M(this.rawMetadata.fields.updated_on):void 0}get year(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year)!=null?new y(this.rawMetadata.fields.year):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new v(this.rawMetadata.fields.__href__):void 0}}a([u()],A.prototype,"highlight",null);a([u()],A.prototype,"addeddate",null);a([u()],A.prototype,"avg_rating",null);a([u()],A.prototype,"collection",null);a([u()],A.prototype,"created_on",null);a([u()],A.prototype,"creator",null);a([u()],A.prototype,"date",null);a([u()],A.prototype,"description",null);a([u()],A.prototype,"downloads",null);a([u()],A.prototype,"filename",null);a([u()],A.prototype,"file_basename",null);a([u()],A.prototype,"file_creation_mtime",null);a([u()],A.prototype,"issue",null);a([u()],A.prototype,"mediatype",null);a([u()],A.prototype,"page_num",null);a([u()],A.prototype,"publicdate",null);a([u()],A.prototype,"result_in_subfile",null);a([u()],A.prototype,"reviewdate",null);a([u()],A.prototype,"source",null);a([u()],A.prototype,"subject",null);a([u()],A.prototype,"title",null);a([u()],A.prototype,"updated_on",null);a([u()],A.prototype,"year",null);a([u()],A.prototype,"__href__",null);var fe;(function(o){o[o.COUNT=0]="COUNT",o[o.ALPHABETICAL=1]="ALPHABETICAL",o[o.NUMERIC=2]="NUMERIC"})(fe||(fe={}));class gi{constructor(e){this.buckets=e.buckets,this.doc_count_error_upper_bound=e.doc_count_error_upper_bound,this.sum_other_doc_count=e.sum_other_doc_count,this.first_bucket_key=e.first_bucket_key,this.last_bucket_key=e.last_bucket_key,this.number_buckets=e.number_buckets,this.interval=e.interval}getSortedBuckets(e){const t=[...this.buckets];if(this.isRawNumberBuckets(t))return t;const i=new Intl.Collator;switch(e){case fe.ALPHABETICAL:return t.sort((r,n)=>i.compare(r.key.toString(),n.key.toString()));case fe.NUMERIC:return t.sort((r,n)=>Number(n.key)-Number(r.key));case fe.COUNT:default:return t}}isRawNumberBuckets(e){return typeof this.buckets[0]=="number"}}a([u()],gi.prototype,"getSortedBuckets",null);class ke{constructor(e){this.rawMetadata=e}get identifier(){var e;return(e=this.rawMetadata)===null||e===void 0?void 0:e.fields.query}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new v(this.rawMetadata.fields.title):void 0}get query(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.query?new v(this.rawMetadata.fields.query):void 0}get date_favorited(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date_favorited?new M(this.rawMetadata.fields.date_favorited):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new v(this.rawMetadata.fields.__href__):void 0}}a([u()],ke.prototype,"title",null);a([u()],ke.prototype,"query",null);a([u()],ke.prototype,"date_favorited",null);a([u()],ke.prototype,"__href__",null);class qe{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.url}get mediatype(){return new Ce("web")}get title(){var e,t,i;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.url?new v((i=this.rawMetadata.fields)===null||i===void 0?void 0:i.url):void 0}get capture_dates(){var e,t,i;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.capture_dates?new M((i=this.rawMetadata.fields)===null||i===void 0?void 0:i.capture_dates):void 0}get __href__(){var e,t,i;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new v((i=this.rawMetadata.fields)===null||i===void 0?void 0:i.__href__):void 0}}a([u()],qe.prototype,"title",null);a([u()],qe.prototype,"capture_dates",null);a([u()],qe.prototype,"__href__",null);class x{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get highlight(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.highlight)===null||t===void 0)&&t.text?new v(this.rawMetadata.highlight.text):void 0}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new M(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t,i;const r=(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating;return r||r===0?new y((i=this.rawMetadata)===null||i===void 0?void 0:i.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new v(this.rawMetadata.fields.collection):void 0}get created_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.created_on?new M(this.rawMetadata.fields.created_on):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new v(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new M(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new v(this.rawMetadata.fields.description):void 0}get downloads(){var e,t,i;const r=(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads;return r||r===0?new y((i=this.rawMetadata)===null||i===void 0?void 0:i.fields.downloads):void 0}get filename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.filename?new v(this.rawMetadata.fields.filename):void 0}get file_basename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.file_basename?new v(this.rawMetadata.fields.file_basename):void 0}get file_creation_mtime(){var e,t,i;const r=(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.file_creation_mtime;return r||r===0?new y((i=this.rawMetadata)===null||i===void 0?void 0:i.fields.file_creation_mtime):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new v(this.rawMetadata.fields.issue):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new Ce(this.rawMetadata.fields.mediatype):void 0}get publicdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.publicdate?new M(this.rawMetadata.fields.publicdate):void 0}get result_in_subfile(){var e,t,i;const r=(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.result_in_subfile;return r||r===!1?new Z((i=this.rawMetadata)===null||i===void 0?void 0:i.fields.result_in_subfile):void 0}get reviewdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.reviewdate?new M(this.rawMetadata.fields.reviewdate):void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new v(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new v(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new v(this.rawMetadata.fields.title):void 0}get updated_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.updated_on?new M(this.rawMetadata.fields.updated_on):void 0}get year(){var e,t,i;const r=(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year;return r||r===0?new y((i=this.rawMetadata)===null||i===void 0?void 0:i.fields.year):void 0}get start(){var e,t,i;const r=(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.start;return r||r===0?new v((i=this.rawMetadata)===null||i===void 0?void 0:i.fields.start):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new v(this.rawMetadata.fields.__href__):void 0}}a([u()],x.prototype,"highlight",null);a([u()],x.prototype,"addeddate",null);a([u()],x.prototype,"avg_rating",null);a([u()],x.prototype,"collection",null);a([u()],x.prototype,"created_on",null);a([u()],x.prototype,"creator",null);a([u()],x.prototype,"date",null);a([u()],x.prototype,"description",null);a([u()],x.prototype,"downloads",null);a([u()],x.prototype,"filename",null);a([u()],x.prototype,"file_basename",null);a([u()],x.prototype,"file_creation_mtime",null);a([u()],x.prototype,"issue",null);a([u()],x.prototype,"mediatype",null);a([u()],x.prototype,"publicdate",null);a([u()],x.prototype,"result_in_subfile",null);a([u()],x.prototype,"reviewdate",null);a([u()],x.prototype,"source",null);a([u()],x.prototype,"subject",null);a([u()],x.prototype,"title",null);a([u()],x.prototype,"updated_on",null);a([u()],x.prototype,"year",null);a([u()],x.prototype,"start",null);a([u()],x.prototype,"__href__",null);const lr=["loans","waitlist","loan_history"];function dr(o){const e=o.slice(0,4),t=o.slice(4,6),i=o.slice(6,8),r=o.slice(8,10),n=o.slice(10,12),s=o.slice(12,14);return`${e}-${t}-${i}T${r}:${n}:${s}Z`}function ur(o){var e;const t=[];for(const i of o){if(!(!((e=i.captures)===null||e===void 0)&&e.length))continue;const r=encodeURIComponent(i.url),n=`https://web.archive.org/web/${i.captures[0]}/${r}`;t.push({hit_type:"web_archive",fields:{url:i.url,capture_dates:i.captures.map(s=>dr(s)),__href__:n}})}return t}class Ct{constructor(e,t){var i,r,n,s,d,l,c,h,p,m,b,B,k,O;this.schema=t,this.schemaHitType=t==null?void 0:t.hit_type;let L;e!=null&&e.page_elements&&(this.pageElements=e.page_elements,L=Object.values(this.pageElements)[0]);let S=(i=e==null?void 0:e.hits)===null||i===void 0?void 0:i.hits;this.totalResults=(n=(r=e==null?void 0:e.hits)===null||r===void 0?void 0:r.total)!==null&&n!==void 0?n:0,this.returnedCount=(d=(s=e==null?void 0:e.hits)===null||s===void 0?void 0:s.returned)!==null&&d!==void 0?d:0,!(S!=null&&S.length)&&(!((l=this.pageElements)===null||l===void 0)&&l.service___fts)?(this.totalResults=0,this.returnedCount=0,this.handleFederatedPageElements()):!(S!=null&&S.length)&&(!((c=L==null?void 0:L.hits)===null||c===void 0)&&c.hits)?(S=L.hits.hits,this.totalResults=(h=L.hits.total)!==null&&h!==void 0?h:0,this.returnedCount=(p=L.hits.returned)!==null&&p!==void 0?p:0):!((m=this.pageElements)===null||m===void 0)&&m.lending?S=this.handleLendingPageElement():!((b=this.pageElements)===null||b===void 0)&&b.web_archives&&(S=this.handleWebArchivesPageElement()),this.results=this.formatHits(S);let j=e==null?void 0:e.aggregations;!(this.aggregations&&Object.keys(this.aggregations).length>0)&&(L!=null&&L.aggregations)&&(j=L.aggregations),j&&this.buildAggregations(j),e!=null&&e.collection_titles&&(this.collectionTitles=(B=e.collection_titles)!==null&&B!==void 0?B:{}),e!=null&&e.collection_extra_info&&(this.collectionExtraInfo=(k=e.collection_extra_info)!==null&&k!==void 0?k:null),e!=null&&e.account_extra_info&&(this.accountExtraInfo=(O=e.account_extra_info)!==null&&O!==void 0?O:null)}formatHits(e){var t;return(t=e==null?void 0:e.map(i=>{var r;return Ct.createResult((r=i.hit_type)!==null&&r!==void 0?r:this.schemaHitType,i)}))!==null&&t!==void 0?t:[]}buildAggregations(e){this.aggregations=Object.entries(e).reduce((t,[i,r])=>(t[i]=new gi(r),t),{})}handleLendingPageElement(){var e,t;const i=(e=this.pageElements)===null||e===void 0?void 0:e.lending,r=(t=i.loans)!==null&&t!==void 0?t:[];this.totalResults=r.length,this.returnedCount=this.totalResults;for(const n of lr)i[n]=this.formatHits(i[n]);return r}handleWebArchivesPageElement(){var e;const t=ur((e=this.pageElements)===null||e===void 0?void 0:e.web_archives);return this.totalResults=t.length,this.returnedCount=this.totalResults,t}handleFederatedPageElements(){var e,t,i,r;const n=["service___fts","service___tvs","service___rcs","service___whisper"];for(const s of n){const d=this.removeServicePrefix(s);this.federatedResults?this.federatedResults[s]=[]:this.federatedResults={[d]:[]};const l=(t=(e=this.pageElements)===null||e===void 0?void 0:e[s])===null||t===void 0?void 0:t.hits;l!=null&&l.hits&&(this.federatedResults[d]=this.formatHits(l==null?void 0:l.hits)),this.totalResults+=(i=l==null?void 0:l.total)!==null&&i!==void 0?i:0,this.returnedCount+=(r=l==null?void 0:l.returned)!==null&&r!==void 0?r:0}}removeServicePrefix(e){return e.split("___")[1]}static createResult(e,t){switch(e){case"item":return new _(t);case"text":case"asr_text":return new A(t);case"favorited_search":return new ke(t);case"web_archive":return new qe(t);case"tv_clip":return new x(t);default:return new _(t)}}}class cr{constructor(e){this.clientParameters=e.client_parameters,this.backendRequests=e.backend_requests,this.kind=e.kind}}class hr{constructor(e){var t,i,r;this.rawResponse=e,this.request=new cr(e.request),this.responseHeader=(t=e.response)===null||t===void 0?void 0:t.header,this.sessionContext=e.session_context,this.response=new Ct((i=e.response)===null||i===void 0?void 0:i.body,(r=e.response)===null||r===void 0?void 0:r.hit_schema)}}class Ve{static aggregateSearchParamsAsString(e){if(e.omit)return"false";if(e.advancedParams){const t=e.advancedParams.map(r=>({terms:r}));return JSON.stringify(t)}if(e.simpleParams)return e.simpleParams.join(",")}static sortParamsAsString(e){return`${e.field}:${e.direction}`}static filterParamsAsString(e){return JSON.stringify(e)}static generateURLSearchParams(e){const t=new URLSearchParams;if(t.append("user_query",e.query),e.pageType&&t.append("page_type",String(e.pageType)),e.pageTarget&&t.append("page_target",String(e.pageTarget)),e.pageElements&&e.pageElements.length>0){const n=`[${e.pageElements.map(s=>`"${s}"`).join(",")}]`;t.append("page_elements",n)}if(e.rows!=null&&t.append("hits_per_page",String(e.rows)),e.page!=null&&t.append("page",String(e.page)),e.fields&&e.fields.length>0&&t.append("fields",e.fields.join(",")),e.filters&&Object.keys(e.filters).length>0){const r=this.filterParamsAsString(e.filters);r&&r!=="{}"&&t.append("filter_map",r)}if(e.sort&&e.sort.length>0){const r=e.sort.map(n=>this.sortParamsAsString(n));t.append("sort",r.join(","))}const i=e.aggregations;if(i){const r=this.aggregateSearchParamsAsString(i);r&&t.append("aggregations",r)}if(e.aggregationsSize!=null&&t.append("aggregations_size",String(e.aggregationsSize)),e.debugging&&t.append("debugging","true"),e.uid&&t.append("uid",e.uid),e.includeClientUrl!==!1){const r=window.location.href.slice(0,400);e.query.length<=1e3&&t.append("client_url",r)}return t}}var ge;(function(o){o.networkError="SearchService.NetworkError",o.itemNotFound="SearchService.ItemNotFound",o.decodingError="SearchService.DecodingError",o.searchEngineError="SearchService.SearchEngineError"})(ge||(ge={}));class vr extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}const Yt={reCache:JSON.stringify({recompute:!0}),noCache:JSON.stringify({bypass:!0}),dontCache:JSON.stringify({no_compute:!0})};class Ke{constructor(e){var t,i;this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null;const r=new URL(window.location.href).searchParams,n=r.get("scope"),s=r.get("verbose"),d=r.get("debugging"),l=r.get("cacheDebug");let c="";for(const h of Object.keys(Yt))if(r.get(h)){c=Yt[h];break}c=(i=r.get("caching"))!==null&&i!==void 0?i:c,(e==null?void 0:e.caching)!==void 0?this.cachingFlags=e.caching:c&&(this.cachingFlags=c),(e==null?void 0:e.debuggingEnabled)!==void 0?this.debuggingEnabled=e.debuggingEnabled:(d||l)&&(this.debuggingEnabled=!0),(e==null?void 0:e.scope)!==void 0?this.requestScope=e.scope:n&&(this.requestScope=n),(e==null?void 0:e.verbose)!==void 0?this.verbose=e.verbose:s&&(this.verbose=!!s)}async fetchUrl(e,t){var i,r;const n=new URL(e);this.requestScope&&n.searchParams.set("scope",this.requestScope),this.cachingFlags&&n.searchParams.set("caching",this.cachingFlags);let s;try{const d=(i=t==null?void 0:t.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};s=await fetch(n.href,d)}catch(d){const l=d instanceof Error?d.message:typeof d=="string"?d:"Unknown error";return this.getErrorResult(ge.networkError,l)}try{const d=await s.json();this.verbose&&this.printResponse(d),d.debugging&&this.printDebuggingInfo(d);const l=(r=d.response)===null||r===void 0?void 0:r.error;return l?this.getErrorResult(ge.searchEngineError,l.message,l.forensics):{success:d}}catch(d){const l=d instanceof Error?d.message:typeof d=="string"?d:"Unknown error";return this.getErrorResult(ge.decodingError,l)}}getErrorResult(e,t,i){return{error:new vr(e,t,i)}}printResponse(e){var t,i,r,n,s;try{const d=JSON.parse(JSON.stringify(e)),l=(r=(i=(t=d==null?void 0:d.response)===null||t===void 0?void 0:t.body)===null||i===void 0?void 0:i.hits)===null||r===void 0?void 0:r.hits;if(Array.isArray(l)&&l.length>1){const h=[];h.push(l[0]),h.push(`*** ${l.length-1} hits omitted ***`),d.response.body.hits.hits=h}const c=(s=(n=d==null?void 0:d.response)===null||n===void 0?void 0:n.body)===null||s===void 0?void 0:s.aggregations;c&&Object.entries(c).forEach(([h,p])=>{var m,b,B,k;if(((b=(m=p)===null||m===void 0?void 0:m.buckets)===null||b===void 0?void 0:b.length)>0){const O=JSON.parse(JSON.stringify(p));O.buckets=`*** ${(k=(B=O.buckets)===null||B===void 0?void 0:B.length)!==null&&k!==void 0?k:0} buckets omitted ***`,d.response.body.aggregations[h]=O}}),console.log("***** RESPONSE RECEIVED *****"),console.groupCollapsed("Response"),console.log(JSON.stringify(d,null,2)),console.groupEnd()}catch(d){console.error("Error printing search response:",d)}}printDebuggingInfo(e){var t,i;const r=e.debugging,n=(t=r.messages)!==null&&t!==void 0?t:[],s=(i=r.data)!==null&&i!==void 0?i:{};console.log("***** BEGIN DEBUGGING *****"),console.log("Full response:"),console.log(JSON.stringify(e,null,2)),console.group("Debug messages");for(const d of n)console.log(d);console.groupEnd(),console.group("Debug data");for(const[d,l]of Object.entries(s))console.log(d,l);console.groupEnd(),console.log("***** END DEBUGGING *****")}}class pr extends Ke{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=Ve.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?${i}`;return this.fetchUrl(r)}}class fr extends Ke{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=Ve.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=fts&${i}`;return this.fetchUrl(r)}}class gr extends Ke{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=Ve.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=rcs&${i}`;return this.fetchUrl(r)}}var z;(function(o){o[o.METADATA=0]="METADATA",o[o.FULLTEXT=1]="FULLTEXT",o[o.RADIO=3]="RADIO",o[o.FEDERATED=4]="FEDERATED"})(z||(z={}));class mr extends Ke{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=Ve.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?page_type=simple_federation&${i}`;return this.fetchUrl(r)}}class ae{constructor(e={}){this.backendOptions=e}async search(e,t=z.METADATA){const r=await ae.getBackendForSearchType(t,this.backendOptions).performSearch(e);return r.error?r:{success:new hr(r.success)}}static getBackendForSearchType(e,t={}){switch(e){case z.FULLTEXT:return new fr(t);case z.RADIO:return new gr(t);case z.FEDERATED:return new mr(t);case z.METADATA:default:return new pr(t)}}}ae.default=new ae;a([u((o,e={})=>{const{includeCredentials:t=!1,verbose:i=!1,scope:r="",baseUrl:n=""}=e;return`${o};${t};${i};${r};${n}`})],ae,"getBackendForSearchType",null);var ei;(function(o){o.INCLUDE="inc",o.EXCLUDE="exc",o.GREATER_THAN="gt",o.GREATER_OR_EQUAL="gte",o.LESS_THAN="lt",o.LESS_OR_EQUAL="lte"})(ei||(ei={}));var me;(function(o){o.NETWORK="failed to connect to user lists backend service",o.BAD_RESPONSE="malformed response from backend",o.USER_NOT_FOUND="user with the given id was not found",o.LIST_NOT_FOUND="user list with the given id was not found",o.LIST_MEMBER_NOT_FOUND="user list member with the given id was not found",o.ITEM_NOT_TOUND="item with the given id was not found"})(me||(me={}));class wr extends Error{constructor(e,t,i){super(t,i),this.reason=e}}const dt="application/json; charset=utf-8";class U{constructor({fetchHandler:e,searchService:t,userService:i,baseUrl:r=U.DEFAULT_BASE_URL}){this.fetchHandler=e,this.searchService=t,this.userService=i,this.baseUrl=r}async fetchEndpoint(e,t,i,r){try{const n=await this.fetchHandler.fetchApiResponse(e,{method:t,body:i,headers:r,includeCredentials:!0});return n.success?{success:n.value}:{error:U.getErrorResult(me.LIST_NOT_FOUND,n.error)}}catch(n){return{error:U.getErrorResult(me.NETWORK,n)}}}async fetchListsForUser(e){var t;const i=(t=await this.userService.getLoggedInUser())===null||t===void 0?void 0:t.success,r=(i==null?void 0:i.itemname)===e?"me":e;return this.fetchEndpoint(`${this.baseUrl}/services/users/${r}/lists`)}async fetchList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/${e}/lists/${t}`)}async fetchOwnListsContainingItem(e){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists?item=${e}`)}async fetchListMembers(e,t){const i=await this.fetchList(e,t);if(!i.success)return i;const{members:r}=i.success;if(!r)throw U.getErrorResult(me.BAD_RESPONSE);return{success:r}}async fetchListMemberSearchResults(e,t){const i=await this.fetchListMembers(e,t);if(!i.success)return i;const r=i.success;if(r.length===0)return{success:[]};const n=`identifier:(${r.map(d=>d.identifier).join(" OR ")})`,s=await this.searchService.search({query:n,rows:r.length,aggregations:{omit:!0}},z.METADATA);return s.success?{success:s.success.response.results}:{error:s.error}}async createList(e){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists`,"POST",JSON.stringify(e),{"Content-Type":dt})}async updateList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}`,"PATCH",JSON.stringify(t),{"Content-Type":dt})}async deleteList(e){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}`,"DELETE")}async addMemberToList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}/members`,"POST",JSON.stringify(t),{"Content-Type":dt})}async removeMemberFromList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}/members/${t}`,"DELETE")}static getErrorResult(e,t){return new wr(e,U.getErrorMessage(t),{cause:t})}static getErrorMessage(e){return e instanceof Error?e.message:typeof e=="string"?e:"Unknown error"}}U.DEFAULT_BASE_URL="https://archive.org";let I=class extends R{async saveListDetails(e){var t,i,r,n;e.preventDefault();const s=(t=e.target)===null||t===void 0?void 0:t.querySelector("button#save-list-settings");s==null||s.setAttribute("disabled","true"),this.dispatchEvent(new Event("userListSaving"));try{const d={list_name:this.listName.value,description:this.listDescription.value,is_private:this.listPrivate.checked};let l;if(!((i=this.userList)===null||i===void 0)&&i.id?l=await((r=this.userListsService)===null||r===void 0?void 0:r.updateList(this.userList.id,d)):l=await((n=this.userListsService)===null||n===void 0?void 0:n.createList(d)),l.success)this.dispatchEvent(new CustomEvent("userListSaved",{detail:l.success}));else throw l.error}catch(d){this.dispatchEvent(new CustomEvent("userListError",{detail:{error:d}})),console.log("error",d),s==null||s.removeAttribute("disabled")}}emitCloseModalEvent(e){e.preventDefault(),this.dispatchEvent(new Event("listModalClosed"))}render(){var e,t,i,r,n,s,d,l;return w`
      <section class="new-list">
        <form id="user-list-form" @submit=${this.saveListDetails}>
          <div class="field">
            <input type="hidden" id="id" .value=${(t=(e=this.userList)===null||e===void 0?void 0:e.id)!==null&&t!==void 0?t:""} />
            <label for="name">List name*</label>
            <input
              type="text"
              id="name"
              .value=${(r=(i=this.userList)===null||i===void 0?void 0:i.list_name)!==null&&r!==void 0?r:""}
              required
            />
          </div>
          <div class="field">
            <label for="description">Description</label>
            <textarea
              id="description"
              .value=${(s=(n=this.userList)===null||n===void 0?void 0:n.description)!==null&&s!==void 0?s:""}
            ></textarea>
          </div>
          <div class="field">
            <label for="private">Private list</label>
            <input
              type="checkbox"
              id="private"
              .checked="${(l=(d=this.userList)===null||d===void 0?void 0:d.is_private)!==null&&l!==void 0?l:!1}"
            />
          </div>
          <div class="footer field">
            <button
              type="button"
              class="ia-button dark"
              id="cancel"
              @click=${this.emitCloseModalEvent}
            >
              Cancel
            </button>
            <button
              type="submit"
              id="save-list-settings"
              class="ia-button primary"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    `}};I.styles=[rr,g`
      :host {
        display: block;
        padding: 15px 0 0 0;
        font-size: 14px;
        position: relative;
      }

      .field {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
      }

      label {
        display: inline-block;
        width: 90px;
        text-align: left;
        margin-right: 10px;
        font-weight: 700;
      }

      input[type='text'],
      textarea {
        line-height: 20px;
        padding: 5px;
        border-radius: 5px;
        width: 270px;
        font-family: inherit;
        font-size: inherit;
        resize: none;
        border-style: solid;
        outline: none;
        border-radius: 4px;
        border-width: 1px;
        border-color: #999;
      }

      input[type='checkbox'] {
        cursor: pointer;
        margin: 0;
      }

      label[for='private'] {
        cursor: pointer;
      }

      .footer {
        display: block;
        text-align: center;
        margin: 10px 0 0 0;
      }

      .ia-button {
        display: initial;
        padding: 0 15px;
        height: 3.5rem;
      }
    `];a([$({type:Object}),ce("design:type",Object)],I.prototype,"userList",void 0);a([$({type:Object}),ce("design:type",U)],I.prototype,"userListsService",void 0);a([Y("#id"),ce("design:type",HTMLInputElement)],I.prototype,"listId",void 0);a([Y("#name"),ce("design:type",HTMLInputElement)],I.prototype,"listName",void 0);a([Y("#description"),ce("design:type",HTMLInputElement)],I.prototype,"listDescription",void 0);a([Y("#private"),ce("design:type",HTMLInputElement)],I.prototype,"listPrivate",void 0);I=a([F("iaux-userlist-settings")],I);function _r(o){var e=[],t="";for(t in o)e.push(t);return e}function _t(o){return o=JSON.stringify(o),!(typeof o!="string"||!/^\{[\s\S]*\}$/.test(o))}function br(o){return o instanceof Array}function yr(o){return Array.prototype.slice.call(o)}function le(){if(!(this instanceof le))return new le}le.prototype={get:function(o){for(var e=o+"=",t=document.cookie.split(";"),i=0;i<t.length;i++){for(var r=t[i];r.charAt(0)==" ";)r=r.substring(1,r.length);if(r.indexOf(e)==0)return decodeURI(r.substring(e.length,r.length))}return!1},set:function(o,e,t){if(_t(o))for(const i in o)this.set(i,o[i],e,t);else if(typeof o=="string"){const i=_t(t)?t:{expires:t},r=i.path!==void 0?`;path=${i.path};path=/`:";path=/",n=i.domain?`;domain=${i.domain}`:"",s=i.secure?";secure":"";let d=i.expires!==void 0?i.expires:"";typeof d=="string"&&d!==""?d=new Date(d):typeof d=="number"&&(d=new Date(+new Date+1e3*60*60*24*d)),d!==""&&"toGMTString"in d&&(d=`;expires=${d.toGMTString()}`);const l=i.sameSite?`;SameSite=${i.sameSite}`:"";document.cookie=`${o}=${encodeURI(e)+d+r+n+s+l}`}},remove:function(o){o=br(o)?o:yr(arguments);for(var e=0,t=o.length;e<t;e++)this.set(o[e],"",-1);return o},clear:function(o){return o?this.remove(o):this.remove(_r(this.all()))},all:function(){if(document.cookie==="")return{};for(var o=document.cookie.split("; "),e={},t=0,i=o.length;t<i;t++){var r=o[t].split("=");e[decodeURI(r[0])]=decodeURI(r[1])}return e}};let V=null;const mi=function(o,e,t){const i=arguments;if(V||(V=le()),i.length===0)return V.all();if(i.length===1&&o===null)return V.clear();if(i.length===2&&!e)return V.clear(o);if(typeof o=="string"&&!e)return V.get(o);if(typeof o=="string"&&e||_t(o))return V.set(o,e,t)};for(const o in le.prototype)mi[o]=le.prototype[o];class kt{constructor(e){this.name=e.name,this.source=e.source,this.mtime=e.mtime,this.size=e.size,this.md5=e.md5,this.crc32=e.crc32,this.sha1=e.sha1,this.format=e.format,this.rotation=e.rotation}static fromResponse(e){const t=Me.shared,i=De.shared;let r,n,s;return e.mtime&&(r=t.parseValue(e.mtime)),e.size&&(n=i.parseValue(e.size)),e.rotation&&(s=t.parseValue(e.rotation)),new kt({name:e.name,source:e.source,mtime:r,size:n,md5:e.md5,crc32:e.crc32,sha1:e.sha1,format:e.format,rotation:s})}}class Ne{constructor(e){this.username=e.username,this.itemname=e.itemname,this.screenname=e.screenname,this.privs=e.privs,this.image_info=e.image_info,this.isArchiveOrgUser=this.username.endsWith("@archive.org");const{itemname:t}=e;this.userid=t.startsWith("@")?t.substring(1):t}static fromUserResponse(e){return new Ne({username:e.username,itemname:e.itemname,screenname:e.screenname,privs:e.privs,image_info:kt.fromResponse(e.image_info)})}}var te;(function(o){o.userNotLoggedIn="UserService.userNotLoggedIn",o.networkError="UserService.networkError",o.decodingError="UserService.decodingError"})(te||(te={}));class Le extends Error{constructor(e,t){super(t),this.name=e,this.type=e}}class $r{constructor(e){var t,i;this.userServiceEndpoint=(t=e==null?void 0:e.userServiceEndpoint)!==null&&t!==void 0?t:"https://archive.org/services/user.php?op=whoami",this.cache=e==null?void 0:e.cache,this.cacheTTL=e==null?void 0:e.cacheTTL,this.userCacheKey=(i=e==null?void 0:e.userCacheKey)!==null&&i!==void 0?i:"loggedInUserInfo"}async getLoggedInUser(){const e=mi.get("logged-in-user");if(!(e!==!1))return{error:new Le(te.userNotLoggedIn)};const i=await this.getPersistedUser();if(i){const n=Ne.fromUserResponse(i);if(e===n.username)return{success:n}}if(this.fetchPromise)return this.fetchPromise=this.fetchPromise.then(n=>n),this.fetchPromise;this.fetchPromise=this.fetchUser();const r=await this.fetchPromise;return this.fetchPromise=void 0,r}async fetchUser(){let e;try{e=await fetch(this.userServiceEndpoint,{credentials:"include"})}catch(n){return{error:new Le(te.networkError,n.message)}}let t;try{t=await e.json()}catch(n){return{error:new Le(te.decodingError,n.message)}}if(!t.success||!t.value)return{error:new Le(te.userNotLoggedIn,t.error)};const i=t.value,r=Ne.fromUserResponse(i);return await this.persistUser(i),{success:r}}async getPersistedUser(){var e;return(e=this.cache)===null||e===void 0?void 0:e.get(this.userCacheKey)}async persistUser(e){var t;await((t=this.cache)===null||t===void 0?void 0:t.set({key:this.userCacheKey,value:e,ttl:this.cacheTTL}))}}class Mr{async fetchApiResponse(e,t){const i={};return t!=null&&t.includeCredentials&&(i.credentials="include"),t!=null&&t.method&&(i.method=t.method),t!=null&&t.body&&(i.body=t.body),t!=null&&t.headers&&(i.headers=t.headers),await(await fetch(e,i)).json()}}const Ar="https://archive.org",ti={create(o){const{serviceUrl:e,serviceProtocol:t="https://"}=o,i=e?`${t}${e}`:Ar;return new U({fetchHandler:new Mr,searchService:ae.default,userService:new $r,baseUrl:i})}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ii=o=>o??E,xr=Fe`<svg class="caret-up-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
<path d="m6.7226499 3.51689722c.22976435.15317623.54019902.0910893.69337525-.13867505.13615665-.20423497.10222882-.47220946-.06836249-.63681849l-.07031256-.05655675-3.2773501-2.18490007-3.2773501 2.18490007c-.22976434.15317623-.29185128.4636109-.13867505.69337524.13615665.20423498.39656688.27598409.61412572.18182636l.07924953-.04315131 2.7226499-1.81402514z"
  fill=""></path>
</svg>`,Cr=Fe`<svg class="caret-down-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
<path d="m6.7226499.58397485c.22976435-.15317623.54019902-.09108929.69337525.13867505.13615665.20423498.10222882.47220947-.06836249.63681849l-.07031256.05655676-3.2773501 2.18490006-3.2773501-2.18490006c-.22976434-.15317623-.29185128-.4636109-.13867505-.69337525.13615665-.20423497.39656688-.27598409.61412572-.18182636l.07924953.04315131 2.7226499 1.81402515z"
fill=""></path>
</svg>`;let T=class extends R{constructor(){super(...arguments),this.open=!1,this.isDisabled=!1,this.displayCaret=!1,this.closeOnSelect=!1,this.openViaButton=!0,this.openViaCaret=!0,this.includeSelectedOption=!1,this.selectedOption="",this.options=[],this.optionGroup="options",this.optionSelected=()=>{},this.isCustomList=!1,this.hasCustomClickHandler=!1,this.closeOnEscape=!1,this.closeOnBackdropClick=!1,this.boundKeyboardListener=e=>{switch(e.key){case"Escape":case"Esc":this.closeOptions();break}},this.closeOptions=e=>{e&&e.type==="click"&&e.stopPropagation(),this.open=!1},this.handlingCaretClick=!1}async firstUpdated(){await new Promise(e=>setTimeout(e,0)),this.addEventListener("closeDropdown",this.closeOptions)}disconnectedCallback(){var e;(e=super.disconnectedCallback)===null||e===void 0||e.call(this),this.removeKeyboardListener()}setupKeyboardListener(){this.closeOnEscape&&document.addEventListener("keydown",this.boundKeyboardListener)}removeKeyboardListener(){this.closeOnEscape&&document.removeEventListener("keydown",this.boundKeyboardListener)}get dropdownState(){return this.open?(this.setupKeyboardListener(),"open"):(this.removeKeyboardListener(),"closed")}toggleOptions(){this.open=!this.open}mainButtonClicked(){if(this.handlingCaretClick){this.handlingCaretClick=!1;return}this.openViaButton&&this.toggleOptions()}caretInteracted(){this.openViaCaret&&this.toggleOptions()}caretClicked(){this.handlingCaretClick=!0,this.caretInteracted()}caretKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.caretInteracted())}renderOption(e){const{label:t,url:i=void 0,id:r}=e;let n;const s=this.selectedOption===r?"selected":"";return i?n=w`<a
        href=${i}
        @click=${d=>this.optionClicked(d,e)}
        >${t}</a
      >`:n=w`<button
        @click=${d=>this.optionClicked(d,e)}
      >
        ${t}
      </button>`,w`<li class=${s}>${n}</li>`}optionClicked(e,t){var i;e.stopPropagation(),this.selectedOption!==t.id&&(this.selectedOption=t.id,this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:t}})),(i=t.selectedHandler)===null||i===void 0||i.call(t,t)),this.closeOnSelect&&this.closeOptions()}get availableOptions(){return this.includeSelectedOption?this.options:this.options.filter(e=>this.selectedOption!==e.id)}get caretTemplate(){if(!this.displayCaret)return w``;const e=this.openViaCaret&&!this.openViaButton?"0":void 0,t=this.openViaCaret?"button":void 0;return w`
      <span
        class="caret"
        tabindex=${ii(e)}
        role=${ii(t)}
        @click=${this.isDisabled||this.hasCustomClickHandler?C:this.caretClicked}
        @keydown=${this.isDisabled||this.hasCustomClickHandler?C:this.caretKeyDown}
      >
        <span ?hidden=${!this.open} class="caret-up">
          <slot name="caret-up">${xr}</slot>
        </span>
        <span ?hidden=${this.open} class="caret-down">
          <slot name="caret-down">${Cr}</slot>
        </span>
      </span>
    `}get dropdownTemplate(){return this.isCustomList?w`<slot name="list"></slot>`:w`${this.availableOptions.map(e=>this.renderOption(e))}`}get backdropTemplate(){return this.closeOnBackdropClick?this.open?w`
      <div
        id="dropdown-backdrop"
        @keyup=${this.closeOptions}
        @click=${this.closeOptions}
      ></div>
    `:w``:w``}render(){return w`
      <div class="ia-dropdown-group">
        <button
          class="click-main"
          @click=${this.isDisabled||this.hasCustomClickHandler?C:this.mainButtonClicked}
          ?disabled=${this.isDisabled}
        >
          <span class="sr-only">Toggle ${this.optionGroup}</span>
          <slot name="dropdown-label"></slot>
          ${this.caretTemplate}
        </button>

        <ul class="dropdown-main ${this.dropdownState}">
          ${this.dropdownTemplate}
        </ul>

        ${this.backdropTemplate}
      </div>
    `}static get styles(){const e=g`var(--dropdownBorderWidth, 1px)`,t=g`var(--dropdownBorderRadius, 4px)`,i=g`var(--dropdownBorderColor, #fff)`,r=g`var(--dropdownBgColor, #333)`,n=g`var(--dropdownTextColor, #fff)`,s=g`var(--dropdownHoverBgColor, rgba(255, 255, 255, 0.3))`,d=g`var(--dropdownSelectedBgColor, #fff)`;return g`
      :host {
        display: inline;
        color: ${n};
      }

      svg.caret-up-svg,
      svg.caret-down-svg,
      ::slotted(svg.caret-up-svg),
      ::slotted(svg.caret-down-svg) {
        fill: var(--dropdownCaretColor, #fff);
        vertical-align: middle;
      }

      button.click-main {
        background: transparent;
        color: inherit;
        padding: var(--dropdownMainButtonPadding, 0px);
        border: var(--dropdownMainButtonBorder, none);
        border-radius: var(--dropdownMainButtonBorderRadius, none);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-wrap: nowrap;
        flex-direction: var(--dropdownMainButtonFlexDirection, row);
        z-index: var(--dropdownListZIndex, 2);
      }

      button.click-main:disabled {
        pointer-events: none;
        cursor: not-allowed;
        opacity: 0.5;
        /* Disable text selection on disabled button */
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
      }

      button.click-main:hover {
        background-color: var(--dropdownMainButtonHoverBgColor, inherit);
      }

      button.click-main:focus,
      button.click-main:focus-visible {
        background-color: var(--dropdownMainButtonFocusBgColor, inherit);
      }

      button.click-main:active {
        background-color: var(--dropdownMainButtonActiveBgColor, inherit);
      }

      button slot[name='dropdown-label'] {
        /* Set var to 0px for column layout */
        padding-right: var(--buttonSlotPaddingRight, 5px);
        display: inline-block;
      }

      .ia-dropdown-group {
        width: inherit;
        height: inherit;
        position: relative;
      }

      .sr-only {
        border: 0 !important;
        clip: rect(1px, 1px, 1px, 1px) !important;
        -webkit-clip-path: inset(50%) !important;
        clip-path: inset(50%) !important;
        height: 1px !important;
        margin: -1px !important;
        overflow: hidden !important;
        padding: 0 !important;
        position: absolute !important;
        width: 1px !important;
        white-space: nowrap !important;
        -webkit-user-select: none !important;
        user-select: none !important;
      }

      .caret {
        /* Maintain centered caret position but with a full-height clickable region */
        display: flex;
        align-self: stretch;
        align-items: center;
        padding: var(--caretPadding, 0px);
      }

      .caret svg {
        height: var(--caretHeight, 10px);
        width: var(--caretWidth, 20px);
      }

      #dropdown-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: transparent;
        z-index: 1;
      }

      ul {
        z-index: var(--dropdownListZIndex, 2);
      }

      ul.dropdown-main.closed {
        visibility: hidden;
        height: 1px;
        width: 1px;
      }

      ul.dropdown-main {
        position: var(--dropdownListPosition, absolute);
        list-style: none;
        margin: var(--dropdownOffsetTop, 5px) 0 0 0;
        padding: 0;
        color: ${n};
        background: ${r};

        font-size: var(--dropdownFontSize, inherit);

        border-top: var(--dropdownBorderTopWidth, ${e});
        border-right: var(--dropdownBorderRightWidth, ${e});
        border-bottom: var(--dropdownBorderBottomWidth, ${e});
        border-left: var(--dropdownBorderLeftWidth, ${e});
        /* Must be after border-width settings for specificity */
        border-style: solid;
        border-color: ${i};

        border-radius: var(
            --dropdownBorderTopLeftRadius,
            ${t}
          )
          var(--dropdownBorderTopRightRadius, ${t})
          var(--dropdownBorderBottomRightRadius, ${t})
          var(--dropdownBorderBottomLeftRadius, ${t});

        white-space: var(--dropdownWhiteSpace, normal);

        /* Prevent top/bottom inner li from overlapping inner border */
        overflow: hidden;
      }

      ul.dropdown-main li:hover {
        background-color: ${s};
        color: var(--dropdownHoverTextColor, #fff);
        list-style: none;
        cursor: pointer;
      }

      ul.dropdown-main li:hover:first-child {
        border-top-color: ${s};
      }

      ul.dropdown-main li:hover:last-child {
        border-bottom-color: ${s};
      }

      ul.dropdown-main li:hover:not(:first-child) {
        border-top: 0.5px solid var(--dropdownHoverTopBottomBorderColor, #333);
      }
      ul.dropdown-main li:hover:not(:last-child) {
        border-bottom: 0.5px solid
          var(--dropdownHoverTopBottomBorderColor, #333);
      }

      ul.dropdown-main li.selected:last-child {
        border-bottom-color: ${d};
      }

      ul.dropdown-main li.selected:first-child {
        border-top-color: ${d};
      }

      ul.dropdown-main li:hover > *,
      ul.dropdown-main li:focus-within > * {
        background-color: ${s};
        color: var(--dropdownHoverTextColor, #fff);
      }

      ul.dropdown-main li.selected > * {
        background-color: ${d};
        color: var(--dropdownSelectedTextColor, #2c2c2c);
      }

      ul.dropdown-main li {
        background: ${r};
        list-style: none;
        height: 30px;
        cursor: pointer;
        border-bottom: 0.5px solid ${r};
        border-top: 0.5px solid ${r};
      }

      ul.dropdown-main li button {
        background: none;
        color: inherit;
        border: none;
        font: inherit;
        cursor: pointer;
        outline: inherit;
      }

      ul.dropdown-main li a {
        text-decoration: none;
        display: block;
        box-sizing: border-box;
      }

      ul.dropdown-main li:first-child {
        border-top-left-radius: var(--dropdownBorderTopLeftRadius, 4px);
        border-top-right-radius: var(--dropdownBorderTopRightRadius, 4px);
      }

      ul.dropdown-main li:last-child {
        border-bottom-right-radius: var(--dropdownBorderBottomRightRadius, 4px);
        border-bottom-left-radius: var(--dropdownBorderBottomLeftRadius, 4px);
      }

      /* cover the list with the label */
      ul.dropdown-main li > * > :first-child {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        align-content: center;
        flex-wrap: nowrap;
        height: 100%;
        padding: var(--dropdownItemPaddingTop, 5px)
          var(--dropdownItemPaddingRight, 10px)
          var(--dropdownItemPaddingBottom, 5px)
          var(--dropdownItemPaddingLeft, 10px);
        box-sizing: border-box;
      }

      ul.dropdown-main li > * {
        width: 100%;
        height: inherit;
        color: ${n};
        background: transparent;
        padding: 0;
      }
    `}};a([$({type:Boolean,reflect:!0})],T.prototype,"open",void 0);a([$({type:Boolean,reflect:!0})],T.prototype,"isDisabled",void 0);a([$({type:Boolean})],T.prototype,"displayCaret",void 0);a([$({type:Boolean})],T.prototype,"closeOnSelect",void 0);a([$({type:Boolean})],T.prototype,"openViaButton",void 0);a([$({type:Boolean})],T.prototype,"openViaCaret",void 0);a([$({type:Boolean})],T.prototype,"includeSelectedOption",void 0);a([$({type:String})],T.prototype,"selectedOption",void 0);a([$({attribute:!1})],T.prototype,"options",void 0);a([$({type:String})],T.prototype,"optionGroup",void 0);a([$({attribute:!1})],T.prototype,"optionSelected",void 0);a([$({type:Boolean,reflect:!0})],T.prototype,"isCustomList",void 0);a([$({type:Boolean,reflect:!0})],T.prototype,"hasCustomClickHandler",void 0);a([$({type:Boolean,reflect:!0})],T.prototype,"closeOnEscape",void 0);a([$({type:Boolean,reflect:!0})],T.prototype,"closeOnBackdropClick",void 0);T=a([F("ia-dropdown")],T);let bt=class extends R{render(){return w`
      <div class="icon-label-container">
        <slot name="icon"></slot>
        <slot></slot>
      </div>
    `}};bt.styles=g`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
    }

    :host(.invert-icon-at-hover:hover) slot[name='icon'] {
      filter: invert(1);
    }

    :host(.selected) {
      background-color: var(--selectedBgColor, #fff);
      color: var(--selectedTextColor, #2c2c2c);
    }

    :host(.invert-icon-at-selected.selected) slot[name='icon'] {
      filter: invert(1);
    }

    div.icon-label-container {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: nowrap;
      flex-direction: var(--iconLabelFlexDirection, row);
      height: 100%;
    }

    slot[name='icon'] {
      width: var(--iconWidth, 20px);
      margin-right: var(--iconLabelGutterWidth, 10px);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: nowrap;
      white-space: nowrap;
      height: 100%;
    }

    /* https://css-tricks.com/flexbox-truncated-text/ */
    ::slotted(div.truncate) {
      display: flex;
      width: var(--labelWidth, 100%);
      text-align: left;
      word-wrap: break-word; /* Important for long words! */
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }

    @supports not (-webkit-line-clamp: 2) {
      ::slotted(div.truncate) {
        min-width: 0;
      }
    }
    @supports (-webkit-line-clamp: 2) {
      ::slotted(div.truncate) {
        min-width: 0;
        display: -webkit-box;
        overflow-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        /* Fixed line-height needed to fit unicode and emojis
          https://stackoverflow.com/a/67807146
        */
        line-height: 1.2em;
        /* max-height needed for Safari browser */
        max-height: var(--labelTruncateHeight, 30px);
        max-width: var(--labelWidth, 100%);
      }
    }
  `;bt=a([F("ia-icon-label")],bt);class Pe{constructor(e){var t,i,r,n,s,d,l;this.title=e==null?void 0:e.title,this.subtitle=e==null?void 0:e.subtitle,this.headline=e==null?void 0:e.headline,this.message=e==null?void 0:e.message,this.headerColor=(t=e==null?void 0:e.headerColor)!==null&&t!==void 0?t:"#55A183",this.bodyColor=(i=e==null?void 0:e.bodyColor)!==null&&i!==void 0?i:"#f5f5f7",this.showProcessingIndicator=(r=e==null?void 0:e.showProcessingIndicator)!==null&&r!==void 0?r:!1,this.processingImageMode=(n=e==null?void 0:e.processingImageMode)!==null&&n!==void 0?n:"complete",this.showCloseButton=(s=e==null?void 0:e.showCloseButton)!==null&&s!==void 0?s:!0,this.showHeaderLogo=(d=e==null?void 0:e.showHeaderLogo)!==null&&d!==void 0?d:!0,this.closeOnBackdropClick=(l=e==null?void 0:e.closeOnBackdropClick)!==null&&l!==void 0?l:!0}}function*Et(o=document.activeElement){o!=null&&(yield o,"shadowRoot"in o&&o.shadowRoot&&o.shadowRoot.mode!=="closed"&&(yield*Et(o.shadowRoot.activeElement)))}function kr(){return[...Et()].pop()}const ri=new WeakMap;function wi(o){let e=ri.get(o);return e||(e=window.getComputedStyle(o,null),ri.set(o,e)),e}function Er(o){if("checkVisibility"in o&&typeof o.checkVisibility=="function")return o.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=wi(o);return e.visibility!=="hidden"&&e.display!=="none"}function Lr(o){const e=wi(o),{overflowY:t,overflowX:i}=e;return t==="scroll"||i==="scroll"?!0:t!=="auto"||i!=="auto"?!1:o.scrollHeight>o.clientHeight&&t==="auto"||o.scrollWidth>o.clientWidth&&i==="auto"}function Sr(o){const e=o.tagName.toLowerCase(),t=Number(o.getAttribute("tabindex"));return o.hasAttribute("tabindex")&&(isNaN(t)||t<=-1)||o.hasAttribute("disabled")||o.closest("[inert]")||e==="input"&&o.getAttribute("type")==="radio"&&!o.hasAttribute("checked")||!Er(o)?!1:(e==="audio"||e==="video")&&o.hasAttribute("controls")||o.hasAttribute("tabindex")||o.hasAttribute("contenteditable")&&o.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:Lr(o)}function Tr(o,e){var t;return((t=o.getRootNode({composed:!0}))===null||t===void 0?void 0:t.host)!==e}function oi(o){const e=new WeakMap,t=[];function i(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]")||e.has(r))return;e.set(r,!0),!t.includes(r)&&Sr(r)&&t.push(r),r instanceof HTMLSlotElement&&Tr(r,o)&&r.assignedElements({flatten:!0}).forEach(n=>{i(n)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&i(r.shadowRoot)}for(const n of Array.from(r.children))i(n)}return i(o),t.sort((r,n)=>{const s=Number(r.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-s})}let pe=[];class Br{constructor(e){this.isExternalActivated=!1,this.tabDirection="forward",this.currentFocus=null,this.previousFocus=null,this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var i;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const r=kr();if(this.previousFocus=r,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const n=oi(this.element);let s=n.findIndex(l=>l===r);this.previousFocus=this.currentFocus;const d=this.tabDirection==="forward"?1:-1;for(;;){s+d>=n.length?s=0:s+d<0?s=n.length-1:s+=d,this.previousFocus=this.currentFocus;const l=n[s];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||l&&this.possiblyHasTabbableChildren(l))return;t.preventDefault(),this.currentFocus=l,(i=this.currentFocus)===null||i===void 0||i.focus({preventScroll:!1});const c=[...Et()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){pe.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){pe=pe.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return pe[pe.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=oi(this.element);if(!this.element.matches(":focus-within")){const t=e[0],i=e[e.length-1],r=this.tabDirection==="forward"?t:i;typeof(r==null?void 0:r.focus)=="function"&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}}const Or=Object.freeze({processing:"processing",complete:"complete"});class Rr extends R{static get properties(){return{mode:{type:String}}}constructor(){super(),this.mode=Or.processing}render(){return w`
      <div class="${this.mode}">
        <svg
          viewBox="0 0 120 120"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-labelledby="indicatorTitle indicatorDescription"
        >
          <title id="indicatorTitle">Activity Indicator</title>
          <desc id="indicatorDescription">
            A rotating activity indicator with three dots in the middle.
          </desc>
          <g
            id="icons/check-ring---squared"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <path
              id="completed-ring"
              class="loaded-indicator"
              d="M60,10 C70.5816709,10 80.3955961,13.2871104 88.4763646,18.8959201 L78.3502633,29.0214223 C72.9767592,25.8315427 66.7022695,24 60,24 C40.117749,24 24,40.117749 24,60 C24,79.882251 40.117749,96 60,96 C79.882251,96 96,79.882251 96,60 L95.995,59.46 L108.327675,47.128668 C109.350926,50.9806166 109.925886,55.015198 109.993301,59.1731586 L110,60 C110,87.6142375 87.6142375,110 60,110 C32.3857625,110 10,87.6142375 10,60 C10,32.3857625 32.3857625,10 60,10 Z"
            ></path>
            <polygon
              id="check"
              class="loaded-indicator"
              transform="translate(75.000000, 41.500000) rotate(44.000000) translate(-75.000000, -41.500000) "
              points="96 85 54 85 54 65 76 64.999 76 -2 96 -2"
            ></polygon>
            <path
              id="activity-ring"
              class="activity-indicator"
              d="M60,10 C69.8019971,10 78.9452178,12.8205573 86.6623125,17.6943223 L76.4086287,27.9484118 C71.4880919,25.4243078 65.9103784,24 60,24 C40.117749,24 24,40.117749 24,60 C24,79.882251 40.117749,96 60,96 C79.882251,96 96,79.882251 96,60 C96,53.3014663 94.1704984,47.0302355 90.9839104,41.6587228 L101.110332,31.5326452 C106.715332,39.6116982 110,49.4222615 110,60 C110,87.6142375 87.6142375,110 60,110 C32.3857625,110 10,87.6142375 10,60 C10,32.3857625 32.3857625,10 60,10 Z"
            ></path>
            <g
              id="activity-dots"
              class="activity-indicator"
              transform="translate(40.000000, 55.000000)"
            >
              <circle id="left-dot" cx="5" cy="5" r="5"></circle>
              <circle id="middle-dot" cx="20" cy="5" r="5"></circle>
              <circle id="right-dot" cx="35" cy="5" r="5"></circle>
            </g>
          </g>
        </svg>
      </div>
    `}static get styles(){const e=g`var(--activityIndicatorCheckmarkColor, #31A481)`,t=g`var(--activityIndicatorCompletedRingColor, #31A481)`,i=g`var(--activityIndicatorLoadingRingColor, #333333)`,r=g`var(--activityIndicatorLoadingDotColor, #333333)`;return g`
      #completed-ring {
        fill: ${t};
      }

      #check {
        fill: ${e};
      }

      #activity-ring {
        fill: ${i};
      }

      #activity-dots {
        fill: ${r};
      }

      .activity-indicator {
        opacity: 0;
        transition: opacity 0.25s ease-out;
      }

      .processing .activity-indicator {
        opacity: 1;
      }

      .loaded-indicator {
        opacity: 1;
        transition: opacity 0.25s ease-out;
      }

      .processing .loaded-indicator {
        opacity: 0;
      }

      .image {
        border: 1px solid red;
        display: inline-block;
      }

      .processing #activity-ring {
        animation: rotate 1.3s infinite linear;
        transform-origin: 50px 50px;
        transform-box: fill-box;
      }

      .processing #left-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.2s;
      }

      .processing #middle-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.4s;
      }

      .processing #right-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.6s;
      }

      @keyframes rotate {
        0% {
          transform: rotate(-360deg);
        }
        100% {
          /* This frame is supposed to be inferred, but Safari doesn't rotate it unless we're explicit */
          transform: rotate(0deg);
        }
      }

      @keyframes dot {
        0% {
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    `}}window.customElements.define("ia-activity-indicator",Rr);const Hr=w`
<svg
  viewBox="0 0 40 40"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="closeTitleID closeDescID"
>
  <title id="closeTitleID">Close icon</title>
  <desc id="closeDescID">A line drawing of an X</desc>
  <path d="m29.1923882 10.8076118c.5857864.5857865.5857864 1.535534 0 2.1213204l-7.0711162 7.0703398 7.0711162 7.0717958c.5857864.5857864.5857864 1.5355339 0 2.1213204-.5857865.5857864-1.535534.5857864-2.1213204 0l-7.0717958-7.0711162-7.0703398 7.0711162c-.5857864.5857864-1.5355339.5857864-2.1213204 0-.5857864-.5857865-.5857864-1.535534 0-2.1213204l7.0706602-7.0717958-7.0706602-7.0703398c-.5857864-.5857864-.5857864-1.5355339 0-2.1213204.5857865-.5857864 1.535534-.5857864 2.1213204 0l7.0703398 7.0706602 7.0717958-7.0706602c.5857864-.5857864 1.5355339-.5857864 2.1213204 0z" class="fill-color" fill-rule="evenodd"/>
</svg>
`;class Dr extends R{static get styles(){return g`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return Hr}}customElements.define("ia-icon-close",Dr);const Ur=w`
  <svg
    class="ia-logo"
    viewBox="0 0 27 30"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="logoTitleID logoDescID"
  >
    <title id="logoTitleID">Internet Archive logo</title>
    <desc id="logoDescID">
      A line drawing of the Internet Archive headquarters building façade.
    </desc>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <mask id="mask-2" class="fill-color">
        <path
          d="M26.6666667,28.6046512 L26.6666667,30 L0,30 L0.000283687943,28.6046512 L26.6666667,28.6046512 Z M25.6140351,26.5116279 L25.6140351,28.255814 L1.05263158,28.255814 L1.05263158,26.5116279 L25.6140351,26.5116279 Z M3.62469203,7.6744186 L3.91746909,7.82153285 L4.0639977,10.1739544 L4.21052632,13.9963932 L4.21052632,17.6725617 L4.0639977,22.255044 L4.03962296,25.3421929 L3.62469203,25.4651163 L2.16024641,25.4651163 L1.72094074,25.3421929 L1.55031755,22.255044 L1.40350877,17.6970339 L1.40350877,14.0211467 L1.55031755,10.1739544 L1.68423854,7.80887484 L1.98962322,7.6744186 L3.62469203,7.6744186 Z M24.6774869,7.6744186 L24.9706026,7.82153285 L25.1168803,10.1739544 L25.2631579,13.9963932 L25.2631579,17.6725617 L25.1168803,22.255044 L25.0927809,25.3421929 L24.6774869,25.4651163 L23.2130291,25.4651163 L22.7736357,25.3421929 L22.602418,22.255044 L22.4561404,17.6970339 L22.4561404,14.0211467 L22.602418,10.1739544 L22.7369262,7.80887484 L23.0420916,7.6744186 L24.6774869,7.6744186 Z M9.94042303,7.6744186 L10.2332293,7.82153285 L10.3797725,10.1739544 L10.5263158,13.9963932 L10.5263158,17.6725617 L10.3797725,22.255044 L10.3556756,25.3421929 L9.94042303,25.4651163 L8.47583122,25.4651163 L8.0362015,25.3421929 L7.86556129,22.255044 L7.71929825,17.6970339 L7.71929825,14.0211467 L7.86556129,10.1739544 L8.00005604,7.80887484 L8.30491081,7.6744186 L9.94042303,7.6744186 Z M18.0105985,7.6744186 L18.3034047,7.82153285 L18.449948,10.1739544 L18.5964912,13.9963932 L18.5964912,17.6725617 L18.449948,22.255044 L18.425851,25.3421929 L18.0105985,25.4651163 L16.5460067,25.4651163 L16.1066571,25.3421929 L15.9357367,22.255044 L15.7894737,17.6970339 L15.7894737,14.0211467 L15.9357367,10.1739544 L16.0702315,7.80887484 L16.3753664,7.6744186 L18.0105985,7.6744186 Z M25.6140351,4.53488372 L25.6140351,6.97674419 L1.05263158,6.97674419 L1.05263158,4.53488372 L25.6140351,4.53488372 Z M13.0806755,0 L25.9649123,2.93331338 L25.4484139,3.8372093 L0.771925248,3.8372093 L0,3.1041615 L13.0806755,0 Z"
          id="path-1"
        ></path>
      </mask>
      <use class="fill-color" xlink:href="#path-1"></use>
      <g mask="url(#mask-2)" class="fill-color">
        <path
          d="M0,0 L26.6666667,0 L26.6666667,30 L0,30 L0,0 Z"
          id="swatch"
        ></path>
      </g>
    </g>
  </svg>
`;let yt=class extends R{constructor(){super(...arguments),this.config=new Pe}render(){return w`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton?this.closeButtonTemplate:""}
            ${this.config.showHeaderLogo?w`<div class="logo-icon">${Ur}</div>`:C}
            ${this.config.title?w`<h1 class="title">${this.config.title}</h1>`:""}
            ${this.config.subtitle?w`<h2 class="subtitle">${this.config.subtitle}</h2>`:""}
          </header>
          <section
            class="modal-body"
            style="background-color: ${this.config.bodyColor}"
          >
            <div class="content">
              <div
                class="processing-logo ${this.config.showProcessingIndicator?"":"hidden"}"
              >
                <ia-activity-indicator
                  .mode=${this.config.processingImageMode}
                ></ia-activity-indicator>
              </div>
              ${this.config.headline?w` <h1 class="headline">${this.config.headline}</h1> `:""}
              ${this.config.message?w` <p class="message">${this.config.message}</p> `:""}

              <div class="slot-container">
                <slot> </slot>
              </div>
            </div>
          </section>
        </div>
      </div>
    `}handleCloseButton(e){if(e.preventDefault(),e.type==="keydown"&&e.key!==" "&&e.key!=="Enter")return;const t=new Event("closeButtonPressed");this.dispatchEvent(t)}get closeButtonTemplate(){return w`
      <button
        type="button"
        class="close-button"
        @click=${this.handleCloseButton}
        @keydown=${this.handleCloseButton}
      >
        <ia-icon-close></ia-icon-close>
      </button>
    `}static get styles(){const e=g`var(--modalLogoSize, 6.5rem)`,t=g`var(--processingImageSize, 7.5rem)`,i=g`var(--modalCornerRadius, 1rem)`,r=g`var(--modalBorder, 2px solid black)`,n=g`var(--modalBottomMargin, 2.5rem)`,s=g`var(--modalTopMargin, 5rem)`,d=g`var(--modalHeaderBottomPadding, 0.5em)`,l=g`var(--modalBottomPadding, 2rem)`,c=g`var(--modalScrollOffset, 5px)`,h=g`var(--modalTitleFontSize, 1.8rem)`,p=g`var(--modalSubtitleFontSize, 1.4rem)`,m=g`var(--modalHeadlineFontSize, 1.6rem)`,b=g`var(--modalMessageFontSize, 1.4rem)`,B=g`var(--modalTitleLineHeight, normal)`,k=g`var(--modalSubtitleLineHeight, normal)`,O=g`var(--modalHeadlineLineHeight, normal)`,L=g`var(--modalMessageLineHeight, normal)`;return g`
      .processing-logo {
        margin: auto;
        width: ${t};
        height: ${t};
      }

      .processing-logo.hidden {
        height: 1rem;
      }

      .processing-logo.hidden ia-activity-indicator {
        display: none;
      }

      .modal-wrapper {
        outline: none;
      }

      .modal-container {
        border-radius: ${i};
        width: 100%;
        margin-top: ${s};
      }

      header {
        position: relative;
        background-color: #36a483;
        color: white;
        border-radius: calc(${i}) calc(${i}) 0 0;
        border: ${r};
        border-bottom: 0;
        text-align: center;
        padding-bottom: ${d};
      }

      .title {
        margin: 0;
        padding: 0;
        font-size: ${h};
        font-weight: bold;
        line-height: ${B};
      }

      .subtitle {
        margin: 0;
        padding: 0;
        font-weight: normal;
        padding-top: 0;
        font-size: ${p};
        line-height: ${k};
      }

      .modal-body {
        background-color: #f5f5f7;
        border-radius: 0 0 calc(${i}) calc(${i});
        border: ${r};
        border-top: 0;
        padding: 0 1rem calc(${l} - ${c}) 1rem;
        color: #333;
        margin-bottom: 2.5rem;
        min-height: 5rem;
      }

      .content {
        overflow-y: auto;
        max-height: calc(100vh - (16.5rem + ${n}));
        min-height: 5rem;
        padding: 0 0 calc(${c}) 0;
      }

      .headline {
        font-size: ${m};
        font-weight: bold;
        text-align: center;
        line-height: ${O};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${b};
        line-height: ${L};
      }

      .logo-icon {
        border-radius: 100%;
        border: 3px solid #fff;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18),
          0 2px 2px 0 rgba(0, 0, 0, 0.08);
        width: ${e};
        height: ${e};
        margin: -2.9rem auto 0.5rem auto;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .logo-icon svg {
        width: calc(${e} * 0.65);
        height: calc(${e} * 0.65);
      }

      .logo-icon svg .fill-color {
        fill: white;
      }

      .logo-icon svg .stroke-color {
        stroke: red;
      }

      .close-button {
        position: absolute;
        right: 1.2rem;
        top: 1.2rem;
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        border: 0;
        padding: 0;
        cursor: pointer;
        background-color: white;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18),
          0 4px 4px 0 rgba(0, 0, 0, 0.08);
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }

      slot::slotted(.sr-only) {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }
    `}};a([$({type:Object})],yt.prototype,"config",void 0);yt=a([F("modal-template")],yt);function Ir(o,e,t){var i=t||{},r=i.noTrailing,n=r===void 0?!1:r,s=i.noLeading,d=s===void 0?!1:s,l=i.debounceMode,c=l===void 0?void 0:l,h,p=!1,m=0;function b(){h&&clearTimeout(h)}function B(O){var L=O||{},S=L.upcomingOnly,j=S===void 0?!1:S;b(),p=!j}function k(){for(var O=arguments.length,L=new Array(O),S=0;S<O;S++)L[S]=arguments[S];var j=this,Ge=Date.now()-m;if(p)return;function Ee(){m=Date.now(),e.apply(j,L)}function Lt(){h=void 0}!d&&c&&!h&&Ee(),b(),c===void 0&&Ge>o?d?(m=Date.now(),n||(h=setTimeout(c?Lt:Ee,o))):Ee():n!==!0&&(h=setTimeout(c?Lt:Ee,c===void 0?o-Ge:o))}return k.cancel=B,k}var J;(function(o){o.Open="open",o.Closed="closed"})(J||(J={}));class Nr{constructor(e){this.windowResizeThrottler=Ir(100,this.updateModalContainerHeight,{noLeading:!1,noTrailing:!1}).bind(this),this.modalManager=e}handleModeChange(e){switch(e){case J.Open:this.startResizeListener(),this.stopDocumentScroll();break;case J.Closed:this.stopResizeListener(),this.resumeDocumentScroll();break}}updateModalContainerHeight(){this.modalManager.style.setProperty("--containerHeight",`${window.innerHeight}px`)}stopDocumentScroll(){document.body.classList.add("modal-manager-open")}resumeDocumentScroll(){document.body.classList.remove("modal-manager-open")}startResizeListener(){window.addEventListener("resize",this.windowResizeThrottler)}stopResizeListener(){window.removeEventListener("resize",this.windowResizeThrottler)}}let de=class extends R{constructor(){super(...arguments),this.mode=J.Closed,this.hostBridge=new Nr(this),this.modal=new Br(this),this.closeOnBackdropClick=!0}firstUpdated(){return St(this,void 0,void 0,function*(){yield new Promise(e=>setTimeout(e,0)),this.closeOnBackdropClick&&this.addEventListener("keydown",e=>{e.key==="Escape"&&this.backdropClicked()})})}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate()}render(){return w`
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          tabindex="-1"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `}getMode(){return this.mode}closeModal(){this.mode=J.Closed,this.customModalContent=void 0,this.modalTemplate.config=new Pe,this.modal.deactivate()}callUserClosedModalCallback(){const e=this.userClosedModalCallback;this.userClosedModalCallback=void 0,e&&e()}showModal(e){return St(this,void 0,void 0,function*(){this.closeOnBackdropClick=e.config.closeOnBackdropClick,this.userClosedModalCallback=e.userClosedModalCallback,this.modalTemplate.config=e.config,this.customModalContent=e.customModalContent,this.mode=J.Open,yield this.modalTemplate.updateComplete,this.modalTemplate.focus(),this.modal.activate()})}updated(e){e.has("mode")&&this.handleModeChange()}backdropClicked(){this.closeOnBackdropClick&&(this.closeModal(),this.callUserClosedModalCallback())}handleModeChange(){this.hostBridge.handleModeChange(this.mode),this.emitModeChangeEvent()}emitModeChangeEvent(){const e=new CustomEvent("modeChanged",{detail:{mode:this.mode}});this.dispatchEvent(e)}closeButtonPressed(){this.closeModal(),this.callUserClosedModalCallback()}static get styles(){const e=g`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`,t=g`var(--modalBackdropZindex, 1000)`,i=g`var(--modalWidth, 32rem)`,r=g`var(--modalMaxWidth, 95%)`,n=g`var(--modalZindex, 2000)`;return g`
      .container {
        width: 100%;
        height: 100%;
      }

      .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        background-color: ${e};
        width: 100%;
        height: 100%;
        z-index: ${t};
      }

      modal-template {
        outline: 0;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: ${n};
        width: ${i};
        max-width: ${r};
      }
    `}};a([$({type:String,reflect:!0})],de.prototype,"mode",void 0);a([$({type:Object})],de.prototype,"customModalContent",void 0);a([$({type:Object})],de.prototype,"hostBridge",void 0);a([Y("modal-template")],de.prototype,"modalTemplate",void 0);de=a([F("modal-manager")],de);async function Pr(o,e,t){let i=document.querySelector("modal-manager");if(!i){const n=document.querySelector("body");i=document.createElement("modal-manager"),n==null||n.appendChild(i)}const r=()=>{const n=i??document.querySelector("modal-manager");n==null||n.showModal({config:new Pe,customModalContent:void 0,userClosedModalCallback:void 0}),n==null||n.closeModal(),i==null||i.removeAttribute("id")};i==null||i.setAttribute("id","create-user-list-modal"),i.showModal({config:new Pe({title:w`List settings`,headerColor:"#194880",showCloseButton:!0,showHeaderLogo:!1,closeOnBackdropClick:!0}),userClosedModalCallback:()=>r(),customModalContent:w`
      <iaux-userlist-settings
        .userList=${{id:void 0,list_name:"",description:"",is_private:!1}}
        .userListsService=${o}
        @listModalClosed=${()=>r()}
        @userListError=${n=>{var s,d,l,c;const h=(c=(d=(s=n.detail.error)===null||s===void 0?void 0:s.reason)!==null&&d!==void 0?d:(l=n.detail.error)===null||l===void 0?void 0:l.message)!==null&&c!==void 0?c:"Unknown error from iaux-userlist-settings";console==null||console.error("userListSettingsError",h)}}
        @userListSaving=${async()=>{e==null||e()}}
        @userListSaved=${async n=>{await(t==null?void 0:t(n.detail.id)),r()}}
      ></iaux-userlist-settings>
    `})}const _i=Fe`<svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      >
    <g fill="currentColor" fill-rule="nonzero">
      <path d="m49.9459358 0c13.7978412 0 25.5896453 4.88776371 35.3754122 14.6632911 9.7857669 9.7755275 14.678652 21.554993 14.678652 35.3383967 0 13.7800281-4.8928851 25.5594936-14.678652 35.3350211-9.7857669 9.7755274-21.577571 14.6632911-35.3754122 14.6632911s-25.5716235-4.8877637-35.3213471-14.6632911c-9.74972353-9.7755275-14.6245887-21.554993-14.6245887-35.3383967-.00224931-9.0014064 2.23243779-17.3524613 6.70406469-25.0531645 4.47162691-7.7007033 10.54380341-13.7834037 18.21652941-18.24810129 7.6727261-4.46469761 16.0145067-6.69704641 25.0253417-6.69704641zm0 6c-7.9548389 0-15.2549008 1.95357387-22.0076943 5.8829701-6.7720278 3.9405885-12.0963254 9.2741139-16.0455165 16.0751171-3.93842488 6.7824623-5.89471047 14.0931257-5.89272481 22.040225 0 12.1941053 4.24437231 22.4500702 12.87283241 31.1013666 8.6242501 8.6470752 18.8695883 12.9003212 31.0731032 12.9003212 12.2065273 0 22.4734846-4.2557068 31.1349929-12.9081521 8.6603017-8.6512398 12.9190715-18.9040965 12.9190715-31.0935357l-.0036695-.6147591c-.1419586-11.9183989-4.4018851-21.9707923-12.915402-30.475401-8.6615083-8.6524453-18.9284656-12.9081521-31.1349929-12.9081521z" />
      <path d="m56 23v22h22v11h-22v22h-11l-.001-22h-21.999v-11h21.999l.001-22z" />
    </g>
  </svg>`,bi=Fe`<svg viewBox="0 0 100 100"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="m33.3333333 90-33.3333333-33.3333333 13.3333333-13.3333334 20 20 53.3333334-53.3333333 13.3333333 13.3333333z"
  fill-rule="evenodd" fill="currentColor"
/>
</svg>`;let Ae=class extends R{constructor(){super(...arguments),this.itemId="",this.lists=[],this.closeDropdown=()=>{this.dispatchEvent(new CustomEvent("closeDropdown",{bubbles:!0,composed:!0}))},this.selectDropdown=()=>{this.dispatchEvent(new CustomEvent("selectDropdown",{bubbles:!0,composed:!0}))},this.updateDropdown=()=>{this.dispatchEvent(new CustomEvent("updateDropdown",{bubbles:!0,composed:!0}))},this.optionClicked=(e,t)=>{var i;e.stopPropagation(),(i=t.selectedHandler)===null||i===void 0||i.call(t,t)},this.onSelected=async e=>{this.selectDropdown();const t=this.lists.find(i=>e.id===i.id)||{};t.item_is_member?await this.removeMember(t.id,t.member_id):await this.addMember(t.id),this.updateDropdown()},this.addCreatedList=async e=>{await this.addMember(e),this.dispatchEvent(new CustomEvent("listCreated",{detail:{totalLists:this.lists.length}})),this.updateDropdown()},this.createList=()=>{this.closeDropdown(),Pr(this.userListsService,this.selectDropdown,this.addCreatedList)},this.userListOptions=()=>{let e=[];return e=this.lists.map(t=>this.listOption(t)),e.push(this.newListOption),e}}listOption(e){return{id:e.id,label:this.labelTemplate(e),isSelected:e.item_is_member,selectedHandler:t=>this.onSelected(t)}}get newListOption(){return{id:"create-new-list",label:w` <ia-icon-label>
        <div slot="icon" class="icon-size">${_i}</div>
        Create new list
      </ia-icon-label>`,selectedHandler:()=>this.createList()}}async addMember(e){var t;await((t=this.userListsService)===null||t===void 0?void 0:t.addMemberToList(e,{identifier:this.itemId})),this.dispatchEvent(new CustomEvent("addMember",{detail:{listId:e,itemId:this.itemId}}))}async removeMember(e,t){var i;await((i=this.userListsService)===null||i===void 0?void 0:i.removeMemberFromList(e,t)),this.dispatchEvent(new CustomEvent("removeMember",{detail:{listId:e,itemId:this.itemId}}))}labelTemplate(e){const{item_is_member:t,list_name:i}=e;return w`
      <ia-icon-label>
        <div slot="icon" class="icon-size">
          ${t?bi:C}
        </div>
        <div class="truncate">${i}</div>
      </ia-icon-label>
    `}optionTemplate(e){return w` <li class="${e.isSelected?"selected":""}">
      ${this.buttonTemplate(e)}
    </li>`}buttonTemplate(e){return w`
      <button @click=${t=>this.optionClicked(t,e)}>
        ${e.label}
      </button>
    `}render(){return w` ${this.userListOptions().map(e=>this.optionTemplate(e))} `}static get styles(){return g`
      :host {
        display: inline;
        background-color: #fff;
      }

      li:hover {
        list-style: none;
        cursor: pointer;
      }

      li {
        background: #fff;
        list-style: none;
        height: 30px;
        cursor: pointer;
        border-bottom: 1px #f1f1f1 solid;
        color: #2c2c2c;
        width: 140px;
        text-overflow: ellipsis;
      }

      li button {
        background: none;
        color: inherit;
        border: none;
        font: inherit;
        cursor: pointer;
        width: 100%;
        padding: 0px 10px;
        font-size: 12px;
        --iconLabelGutterWidth: 8px;
        --iconWidth: 12px;
        margin: 0;
      }

      /* cover the list with the label */
      li > * > :first-child {
        margin: 0;
        display: inline-block;
        height: 30px;
        box-sizing: border-box;
        text-align: left;
        line-height: initial;
      }

      /* color opacity calculator: https://codepen.io/quyenvsp/pen/jOLBBmX
        foreground: #2c2c2c 44;
        background: #fff;
      */
      button:hover {
        /* 10% 234 */
        background-color: #eaeaea;
      }

      button:focus,
      button:focus-visible {
        /* 20% 213 */
        background-color: #d5d5d5;
      }

      button:active {
        /* 30% 192 */
        background-color: #c0c0c0;
      }

      .icon-size {
        width: 12px;
        height: 12px;
      }
    `}};a([$({type:String})],Ae.prototype,"itemId",void 0);a([$({type:Array})],Ae.prototype,"lists",void 0);a([$({type:Object})],Ae.prototype,"userListsService",void 0);Ae=a([F("item-user-lists")],Ae);const ni=w`<img
  src="https://archive.org/images/loading.gif"
  alt="Loading..."
/>`;let D=class extends R{constructor(){super(...arguments),this.baseHost="archive.org",this.item="",this.selectedCount=0,this.userListData=[],this.dataAction="initial",this.userListsService=ti.create({serviceUrl:this.baseHost}),this.listID="",this.closeListener=()=>{this.dropdown.open=!1},this.selectListener=()=>{this.dropdown.open=!1,this.dataActionTask.run(["initial"])},this.updateListener=()=>{this.dataActionTask.run(["load"])},this.dataActionTask=new qi(this,{task:async([e])=>{if(!this.item||!this.userListsService)return vt;switch(e){case"load":return this.updateSelectedCount();default:return vt}},args:()=>[this.dataAction],autoRun:!1})}async dropdownClicked(e){e.preventDefault(),this.dropdown.open?this.dropdown.open=!1:(await this.dataActionTask.run(["load"]),this.dropdown.open=!0)}async firstUpdated(){var e;await new Promise(t=>setTimeout(t,0)),this.addEventListener("closeDropdown",this.closeListener),this.addEventListener("selectDropdown",this.selectListener),this.addEventListener("updateDropdown",this.updateListener),(e=this.dataActionTask.run(["load"]))===null||e===void 0||e.then(()=>{this.dispatchEvent(new CustomEvent("userItemListDataReceived",{detail:{total_lists:this.userListData.length}}))})}updated(e){e.has("baseHost")&&this.baseHost&&e.get("baseHost")&&this.reloadService()}reloadService(){this.userListsService=ti.create({serviceUrl:this.baseHost}),this.dataActionTask.run(["load"])}async updateItemUserList(){var e;const t=await this.userListsService.fetchOwnListsContainingItem(this.item);if(!t.success)throw new Error((e=t.error)===null||e===void 0?void 0:e.message);return this.userListData=t.success,this.userListData}async updateSelectedCount(){const e=await this.updateItemUserList();return this.selectedCount=e.filter(t=>t.item_is_member).length,this.selectedCount}renderIcon(e){return w`
      <div slot="icon" class="icon-img">${e}</div>
      <div class="label">Add to list</div>
      <div class="label-sm">Lists</div>
    `}renderError(){return w`
      <div class="label">User Lists<br />Load Error</div>
      <div class="label-sm">Load<br />Error</div>
    `}mainButton(e){return w`
      <div class="action-bar-text">
        <ia-icon-label>
          ${e?this.renderIcon(e):this.renderError()}
        </ia-icon-label>
      </div>
    `}get isFetched(){return this.dataActionTask.status===Jt.COMPLETE}get isDisabled(){return this.dataActionTask.status!==Jt.COMPLETE}get itemUserListsTemplate(){return w`
      <item-user-lists
        slot="list"
        .itemId=${this.item}
        .lists=${this.userListData}
        .userListsService=${this.userListsService}
        @addMember=${e=>this.dispatchEvent(new CustomEvent("memberAdded",{detail:{...e.detail,total_items:this.selectedCount}}))}
        @removeMember=${e=>this.dispatchEvent(new CustomEvent("memberRemoved",{detail:{...e.detail,total_items:this.selectedCount}}))}
        @userListError=${e=>{this.dispatchEvent(new CustomEvent("userListError",{detail:{...e.detail}}))}}
        @listCreated=${e=>{this.dispatchEvent(new CustomEvent("listCreated",{detail:{...e.detail,total_lists:this.selectedCount}}))}}
      >
      </item-user-lists>
    `}render(){return w`
      <div class="list-container">
        <ia-dropdown
          class="list-dropdown"
          ?isDisabled=${this.isDisabled}
          ?openViaCaret=${!1}
          ?isCustomList=${!0}
          ?closeOnEscape=${!0}
          ?closeOnBackdropClick=${!0}
          ?hasCustomClickHandler=${!0}
          @click=${this.isDisabled?C:this.dropdownClicked}
        >
          <div class="list-title" slot="dropdown-label">
            ${this.dataActionTask.render({initial:()=>this.mainButton(ni),pending:()=>this.mainButton(ni),complete:e=>this.mainButton(e===0?_i:bi),error:()=>this.mainButton(void 0)})}
          </div>
          ${this.itemUserListsTemplate}
        </ia-dropdown>
      </div>
    `}};D.styles=g`
    :host {
      display: block;
    }

    ia-icon-label {
      cursor: pointer;
      display: flex;
    }

    .icon-img {
      height: 16px;
      width: 16px;
      padding-bottom: 3px;
    }

    div.list-title {
      font-weight: 600;
      color: #2c2c2c;
    }

    ia-dropdown {
      --dropdownBgColor: #fff;
      --dropdownItemPaddingRight: 0;
      --dropdownItemPaddingLeft: 2px;
      --dropdownBorderColor: #2c2c2c;
      --dropdownBorderWidth: 2px;
      --iconLabelGutterWidth: 4px;
      --iconWidth: 10px;
      --dropdownOffsetTop: 2px;
      --buttonSlotPaddingRight: 0;
      --dropdownMainButtonFlexDirection: column;
      --dropdownMainButtonPadding: 6px 4px;
      --dropdownMainButtonHoverBgColor: rgba(44, 44, 44, 0.1);
      --dropdownMainButtonActiveBgColor: rgba(44, 44, 44, 0.3);
      --iconLabelGutterWidth: 0;
      --iconWidth: 16px;
      --dropdownMainButtonBorder: 2px solid #2c2c2c;
      --dropdownMainButtonBorderRadius: 3px;
    }

    .action-bar-text {
      font-size: 14px;
      font-weight: normal;
      -webkit-user-select: none;
      user-select: none;
      --iconLabelFlexDirection: column;
      --iconLabelGutterWidth: 0;
      --iconWidth: 16px;
    }

    /* inside button.click-main, classname from details.inc buttons */
    @media (min-width: 985px) {
      .action-bar-text .label-sm {
        display: none;
        font-size: 13px;
      }
      .action-bar-text .label {
        padding-bottom: 2px;
        padding-top: 2px;
        font-size: 13px;
      }
    }

    @media (max-width: 984px) {
      .action-bar-text .label {
        display: none;
        padding-top: 2px;
        padding-bottom: 0px;
      }
    }

    .click-backdrop {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100vw;
      height: 100vh;
      z-index: 1;
      background-color: transparent;
    }
  `;a([$({type:String})],D.prototype,"baseHost",void 0);a([$({type:String})],D.prototype,"item",void 0);a([We()],D.prototype,"selectedCount",void 0);a([We({hasChanged(o,e){if((o==null?void 0:o.length)!==(e==null?void 0:e.length))return!0;for(let t=0;t<o.length;t+=1)if(o[t].item_is_member!==e[t].item_is_member)return!0;return!1}})],D.prototype,"userListData",void 0);a([We()],D.prototype,"dataAction",void 0);a([We()],D.prototype,"userListsService",void 0);a([Y("ia-dropdown")],D.prototype,"dropdown",void 0);D=a([F("ia-item-user-lists")],D);let ue=class extends R{constructor(){super(...arguments),this.itemId="goody",this.baseHost="archive.org"}render(){return w`
      <div>
        <ia-item-user-lists
          item=${this.itemId}
          .baseHost=${this.baseHost}
          @memberAdded=${e=>console.log("memberAdded",e.detail)}
          @memberRemoved=${e=>console.log("memberRemoved",e.detail)}
          @listCreateOpen=${e=>console.log("listCreateOpen",e.detail)}
          @userItemListDataReceived=${e=>console.log("userItemListDataReceived",e.detail)}
          @closeDropdown=${()=>console.log("closeDropdown")}
          @selectDropdown=${e=>console.log("selectDropdown",e.detail)}
        ></ia-item-user-lists>
      </div>
      <br />
      <section>
        <div>
          <form @submit=${this.changeBaseHost}>
            <label>
              <span>Change Base Host</span>
              <br />
              <span>https://</span>
              <input />
            </label>
          </form>
        </div>
      </section>
    `}async changeBaseHost(e){var t;const i=e==null?void 0:e.target,r=(t=i==null?void 0:i.querySelector("input"))===null||t===void 0?void 0:t.value;console.log("changeBaseHost",{old:this.baseHost,new:r}),this.baseHost=r,await this.iaItemUserLists.updateComplete,console.log("userlistUpdated",this.iaItemUserLists.baseHost),e.preventDefault()}};ue.styles=g`
    :host {
      display: block;
    }
    div {
      display: flex;
    }
  `;a([$({type:String})],ue.prototype,"itemId",void 0);a([$({type:String})],ue.prototype,"baseHost",void 0);a([Y("ia-item-user-lists")],ue.prototype,"iaItemUserLists",void 0);ue=a([F("app-root")],ue);
