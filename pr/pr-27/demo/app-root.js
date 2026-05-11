(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();function d(s,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,e,t,i);else for(var l=s.length-1;l>=0;l--)(o=s[l])&&(n=(r<3?o(n):r>3?o(e,t,n):o(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n}function pe(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)}function Dt(s,e,t,i){function r(n){return n instanceof t?n:new t(function(o){o(n)})}return new(t||(t=Promise))(function(n,o){function l(h){try{u(i.next(h))}catch(g){o(g)}}function a(h){try{u(i.throw(h))}catch(g){o(g)}}function u(h){h.done?n(h.value):r(h.value).then(l,a)}u((i=i.apply(s,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=window,$t=Oe.ShadowRoot&&(Oe.ShadyCSS===void 0||Oe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xt=Symbol(),Ut=new WeakMap;let ui=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==xt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if($t&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Ut.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ut.set(t,e))}return e}toString(){return this.cssText}};const Ci=s=>new ui(typeof s=="string"?s:s+"",void 0,xt),f=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new ui(t,s,xt)},Li=(s,e)=>{$t?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=Oe.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)})},Pt=$t?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ci(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xe;const De=window,Ht=De.trustedTypes,Si=Ht?Ht.emptyScript:"",Nt=De.reactiveElementPolyfillSupport,ut={toAttribute(s,e){switch(e){case Boolean:s=s?Si:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},At=(s,e)=>e!==s&&(e==e||s==s),Qe={attribute:!0,type:String,converter:ut,reflect:!1,hasChanged:At};let ie=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=Qe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Qe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Pt(r))}else e!==void 0&&t.push(Pt(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Li(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Qe){var r;const n=this.constructor._$Ep(e,i);if(n!==void 0&&i.reflect===!0){const o=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:ut).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(e,t){var i;const r=this.constructor,n=r._$Ev.get(e);if(n!==void 0&&this._$El!==n){const o=r.getPropertyOptions(n),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:ut;this._$El=n,this[n]=l.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||At)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,n)=>this[n]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdate)===null||n===void 0?void 0:n.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ie.finalized=!0,ie.elementProperties=new Map,ie.elementStyles=[],ie.shadowRootOptions={mode:"open"},Nt==null||Nt({ReactiveElement:ie}),((Xe=De.reactiveElementVersions)!==null&&Xe!==void 0?Xe:De.reactiveElementVersions=[]).push("1.6.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ye;const Ue=window,se=Ue.trustedTypes,It=se?se.createPolicy("lit-html",{createHTML:s=>s}):void 0,ht="$lit$",z=`lit$${(Math.random()+"").slice(9)}$`,hi="?"+z,Ti=`<${hi}>`,Q=document,Pe=()=>Q.createComment(""),Ae=s=>s===null||typeof s!="object"&&typeof s!="function",pi=Array.isArray,Bi=s=>pi(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",et=`[ 	
\f\r]`,we=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ft=/-->/g,zt=/>/g,q=RegExp(`>|${et}(?:([^\\s"'>=/]+)(${et}*=${et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vt=/'/g,jt=/"/g,gi=/^(?:script|style|textarea|title)$/i,ke=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),qt=new WeakMap,G=Q.createTreeWalker(Q,129,null,!1);function fi(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return It!==void 0?It.createHTML(e):e}const Ri=(s,e)=>{const t=s.length-1,i=[];let r,n=e===2?"<svg>":"",o=we;for(let l=0;l<t;l++){const a=s[l];let u,h,g=-1,m=0;for(;m<a.length&&(o.lastIndex=m,h=o.exec(a),h!==null);)m=o.lastIndex,o===we?h[1]==="!--"?o=Ft:h[1]!==void 0?o=zt:h[2]!==void 0?(gi.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=q):h[3]!==void 0&&(o=q):o===q?h[0]===">"?(o=r??we,g=-1):h[1]===void 0?g=-2:(g=o.lastIndex-h[2].length,u=h[1],o=h[3]===void 0?q:h[3]==='"'?jt:Vt):o===jt||o===Vt?o=q:o===Ft||o===zt?o=we:(o=q,r=void 0);const _=o===q&&s[l+1].startsWith("/>")?" ":"";n+=o===we?a+Ti:g>=0?(i.push(u),a.slice(0,g)+ht+a.slice(g)+z+_):a+z+(g===-2?(i.push(void 0),l):_)}return[fi(s,n+(s[t]||"<?>")+(e===2?"</svg>":"")),i]};let He=class{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,o=0;const l=e.length-1,a=this.parts,[u,h]=Ri(e,t);if(this.el=He.createElement(u,i),G.currentNode=this.el.content,t===2){const g=this.el.content,m=g.firstChild;m.remove(),g.append(...m.childNodes)}for(;(r=G.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const m of r.getAttributeNames())if(m.endsWith(ht)||m.startsWith(z)){const _=h[o++];if(g.push(m),_!==void 0){const C=r.getAttribute(_.toLowerCase()+ht).split(z),y=/([.?@])?(.*)/.exec(_);a.push({type:1,index:n,name:y[2],strings:C,ctor:y[1]==="."?Di:y[1]==="?"?Pi:y[1]==="@"?Hi:We})}else a.push({type:6,index:n})}for(const m of g)r.removeAttribute(m)}if(gi.test(r.tagName)){const g=r.textContent.split(z),m=g.length-1;if(m>0){r.textContent=se?se.emptyScript:"";for(let _=0;_<m;_++)r.append(g[_],Pe()),G.nextNode(),a.push({type:2,index:++n});r.append(g[m],Pe())}}}else if(r.nodeType===8)if(r.data===hi)a.push({type:2,index:n});else{let g=-1;for(;(g=r.data.indexOf(z,g+1))!==-1;)a.push({type:7,index:n}),g+=z.length-1}n++}}static createElement(e,t){const i=Q.createElement("template");return i.innerHTML=e,i}};function ne(s,e,t=s,i){var r,n,o,l;if(e===ke)return e;let a=i!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[i]:t._$Cl;const u=Ae(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),u===void 0?a=void 0:(a=new u(s),a._$AT(s,t,i)),i!==void 0?((o=(l=t)._$Co)!==null&&o!==void 0?o:l._$Co=[])[i]=a:t._$Cl=a),a!==void 0&&(e=ne(s,a._$AS(s,e.values),a,i)),e}let Oi=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:r}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Q).importNode(i,!0);G.currentNode=n;let o=G.nextNode(),l=0,a=0,u=r[0];for(;u!==void 0;){if(l===u.index){let h;u.type===2?h=new kt(o,o.nextSibling,this,e):u.type===1?h=new u.ctor(o,u.name,u.strings,this,e):u.type===6&&(h=new Ni(o,this,e)),this._$AV.push(h),u=r[++a]}l!==(u==null?void 0:u.index)&&(o=G.nextNode(),l++)}return G.currentNode=Q,n}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},kt=class{constructor(e,t,i,r){var n;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cp=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ne(this,e,t),Ae(e)?e===M||e==null||e===""?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==ke&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Bi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==M&&Ae(this._$AH)?this._$AA.nextSibling.data=e:this.$(Q.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=He.createElement(fi(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(i);else{const o=new Oi(n,this),l=o.u(this.options);o.v(i),this.$(l),this._$AH=o}}_$AC(e){let t=qt.get(e.strings);return t===void 0&&qt.set(e.strings,t=new He(e)),t}T(e){pi(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new kt(this.k(Pe()),this.k(Pe()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},We=class{constructor(e,t,i,r,n){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const n=this.strings;let o=!1;if(n===void 0)e=ne(this,e,t,0),o=!Ae(e)||e!==this._$AH&&e!==ke,o&&(this._$AH=e);else{const l=e;let a,u;for(e=n[0],a=0;a<n.length-1;a++)u=ne(this,l[i+a],t,a),u===ke&&(u=this._$AH[a]),o||(o=!Ae(u)||u!==this._$AH[a]),u===M?e=M:e!==M&&(e+=(u??"")+n[a+1]),this._$AH[a]=u}o&&!r&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Di=class extends We{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}};const Ui=se?se.emptyScript:"";let Pi=class extends We{constructor(){super(...arguments),this.type=4}j(e){e&&e!==M?this.element.setAttribute(this.name,Ui):this.element.removeAttribute(this.name)}},Hi=class extends We{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=ne(this,e,t,0))!==null&&i!==void 0?i:M)===ke)return;const r=this._$AH,n=e===M&&r!==M||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==M&&(r===M||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Ni=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ne(this,e)}};const Wt=Ue.litHtmlPolyfillSupport;Wt==null||Wt(He,kt),((Ye=Ue.litHtmlVersions)!==null&&Ye!==void 0?Ye:Ue.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var tt;const Ne=window,oe=Ne.trustedTypes,Kt=oe?oe.createPolicy("lit-html",{createHTML:s=>s}):void 0,pt="$lit$",V=`lit$${(Math.random()+"").slice(9)}$`,vi="?"+V,Ii=`<${vi}>`,Y=document,Me=()=>Y.createComment(""),Ee=s=>s===null||typeof s!="object"&&typeof s!="function",mi=Array.isArray,Fi=s=>mi(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",it=`[ 	
\f\r]`,_e=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gt=/-->/g,Zt=/>/g,W=RegExp(`>|${it}(?:([^\\s"'>=/]+)(${it}*=${it}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jt=/'/g,Xt=/"/g,wi=/^(?:script|style|textarea|title)$/i,_i=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),w=_i(1),Ke=_i(2),ae=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Qt=new WeakMap,Z=Y.createTreeWalker(Y,129,null,!1);function bi(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Kt!==void 0?Kt.createHTML(e):e}const zi=(s,e)=>{const t=s.length-1,i=[];let r,n=e===2?"<svg>":"",o=_e;for(let l=0;l<t;l++){const a=s[l];let u,h,g=-1,m=0;for(;m<a.length&&(o.lastIndex=m,h=o.exec(a),h!==null);)m=o.lastIndex,o===_e?h[1]==="!--"?o=Gt:h[1]!==void 0?o=Zt:h[2]!==void 0?(wi.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=W):h[3]!==void 0&&(o=W):o===W?h[0]===">"?(o=r??_e,g=-1):h[1]===void 0?g=-2:(g=o.lastIndex-h[2].length,u=h[1],o=h[3]===void 0?W:h[3]==='"'?Xt:Jt):o===Xt||o===Jt?o=W:o===Gt||o===Zt?o=_e:(o=W,r=void 0);const _=o===W&&s[l+1].startsWith("/>")?" ":"";n+=o===_e?a+Ii:g>=0?(i.push(u),a.slice(0,g)+pt+a.slice(g)+V+_):a+V+(g===-2?(i.push(void 0),l):_)}return[bi(s,n+(s[t]||"<?>")+(e===2?"</svg>":"")),i]};class Ce{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,o=0;const l=e.length-1,a=this.parts,[u,h]=zi(e,t);if(this.el=Ce.createElement(u,i),Z.currentNode=this.el.content,t===2){const g=this.el.content,m=g.firstChild;m.remove(),g.append(...m.childNodes)}for(;(r=Z.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const m of r.getAttributeNames())if(m.endsWith(pt)||m.startsWith(V)){const _=h[o++];if(g.push(m),_!==void 0){const C=r.getAttribute(_.toLowerCase()+pt).split(V),y=/([.?@])?(.*)/.exec(_);a.push({type:1,index:n,name:y[2],strings:C,ctor:y[1]==="."?ji:y[1]==="?"?Wi:y[1]==="@"?Ki:Ge})}else a.push({type:6,index:n})}for(const m of g)r.removeAttribute(m)}if(wi.test(r.tagName)){const g=r.textContent.split(V),m=g.length-1;if(m>0){r.textContent=oe?oe.emptyScript:"";for(let _=0;_<m;_++)r.append(g[_],Me()),Z.nextNode(),a.push({type:2,index:++n});r.append(g[m],Me())}}}else if(r.nodeType===8)if(r.data===vi)a.push({type:2,index:n});else{let g=-1;for(;(g=r.data.indexOf(V,g+1))!==-1;)a.push({type:7,index:n}),g+=V.length-1}n++}}static createElement(e,t){const i=Y.createElement("template");return i.innerHTML=e,i}}function le(s,e,t=s,i){var r,n,o,l;if(e===ae)return e;let a=i!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[i]:t._$Cl;const u=Ee(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),u===void 0?a=void 0:(a=new u(s),a._$AT(s,t,i)),i!==void 0?((o=(l=t)._$Co)!==null&&o!==void 0?o:l._$Co=[])[i]=a:t._$Cl=a),a!==void 0&&(e=le(s,a._$AS(s,e.values),a,i)),e}class Vi{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:r}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Y).importNode(i,!0);Z.currentNode=n;let o=Z.nextNode(),l=0,a=0,u=r[0];for(;u!==void 0;){if(l===u.index){let h;u.type===2?h=new Te(o,o.nextSibling,this,e):u.type===1?h=new u.ctor(o,u.name,u.strings,this,e):u.type===6&&(h=new Gi(o,this,e)),this._$AV.push(h),u=r[++a]}l!==(u==null?void 0:u.index)&&(o=Z.nextNode(),l++)}return Z.currentNode=Y,n}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Te{constructor(e,t,i,r){var n;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cp=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=le(this,e,t),Ee(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==ae&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Fi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==$&&Ee(this._$AH)?this._$AA.nextSibling.data=e:this.$(Y.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Ce.createElement(bi(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(i);else{const o=new Vi(n,this),l=o.u(this.options);o.v(i),this.$(l),this._$AH=o}}_$AC(e){let t=Qt.get(e.strings);return t===void 0&&Qt.set(e.strings,t=new Ce(e)),t}T(e){mi(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new Te(this.k(Me()),this.k(Me()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Ge{constructor(e,t,i,r,n){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const n=this.strings;let o=!1;if(n===void 0)e=le(this,e,t,0),o=!Ee(e)||e!==this._$AH&&e!==ae,o&&(this._$AH=e);else{const l=e;let a,u;for(e=n[0],a=0;a<n.length-1;a++)u=le(this,l[i+a],t,a),u===ae&&(u=this._$AH[a]),o||(o=!Ee(u)||u!==this._$AH[a]),u===$?e=$:e!==$&&(e+=(u??"")+n[a+1]),this._$AH[a]=u}o&&!r&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ji extends Ge{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}const qi=oe?oe.emptyScript:"";class Wi extends Ge{constructor(){super(...arguments),this.type=4}j(e){e&&e!==$?this.element.setAttribute(this.name,qi):this.element.removeAttribute(this.name)}}class Ki extends Ge{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=le(this,e,t,0))!==null&&i!==void 0?i:$)===ae)return;const r=this._$AH,n=e===$&&r!==$||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==$&&(r===$||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Gi{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){le(this,e)}}const Yt=Ne.litHtmlPolyfillSupport;Yt==null||Yt(Ce,Te),((tt=Ne.litHtmlVersions)!==null&&tt!==void 0?tt:Ne.litHtmlVersions=[]).push("2.8.0");const Zi=(s,e,t)=>{var i,r;const n=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=n._$litPart$;if(o===void 0){const l=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;n._$litPart$=o=new Te(e.insertBefore(Me(),l),l,void 0,t??{})}return o._$AI(s),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rt,st;let T=class extends ie{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Zi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ae}};T.finalized=!0,T._$litElement$=!0,(rt=globalThis.litElementHydrateSupport)===null||rt===void 0||rt.call(globalThis,{LitElement:T});const ei=globalThis.litElementPolyfillSupport;ei==null||ei({LitElement:T});((st=globalThis.litElementVersions)!==null&&st!==void 0?st:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=s=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(s,e):((t,i)=>{const{kind:r,elements:n}=i;return{kind:r,elements:n,finisher(o){customElements.define(t,o)}}})(s,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ji=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}};function b(s){return(e,t)=>t!==void 0?((i,r,n)=>{r.constructor.createProperty(n,i)})(s,e,t):Ji(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ze(s){return b({...s,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=({finisher:s,descriptor:e})=>(t,i)=>{var r;if(i===void 0){const n=(r=t.originalKey)!==null&&r!==void 0?r:t.key,o=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(t.key)}:{...t,key:n};return s!=null&&(o.finisher=function(l){s(l,n)}),o}{const n=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),s==null||s(n,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(s,e){return yi({descriptor:t=>{const i={get(){var r,n;return(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(s))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var n,o;return this[r]===void 0&&(this[r]=(o=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(s))!==null&&o!==void 0?o:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nt;const Xi=((nt=window.HTMLSlotElement)===null||nt===void 0?void 0:nt.prototype.assignedElements)!=null?(s,e)=>s.assignedElements(e):(s,e)=>s.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);function Qi(s){const{slot:e,selector:t}=s??{};return yi({descriptor:i=>({get(){var r;const n="slot"+(e?`[name=${e}]`:":not([name])"),o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n),l=o!=null?Xi(o,s):[];return t?l.filter(a=>a.matches(t)):l},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ti={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},gt=Symbol();class Yi{get taskComplete(){return this.t||(this.status===1?this.t=new Promise((e,t)=>{this.i=e,this.o=t}):this.status===3?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(e,t,i){var n;this.u=0,this.status=0,(this.p=e).addController(this);const r=typeof t=="object"?t:{task:t,args:i};this._=r.task,this.v=r.args,this.j=r.argsEqual??er,this.m=r.onComplete,this.g=r.onError,this.autoRun=r.autoRun??!0,"initialValue"in r&&(this.l=r.initialValue,this.status=2,this.k=(n=this.A)==null?void 0:n.call(this))}hostUpdate(){this.autoRun===!0&&this.O()}hostUpdated(){this.autoRun==="afterUpdate"&&this.O()}A(){if(this.v===void 0)return;const e=this.v();if(!Array.isArray(e))throw Error("The args function must return an array");return e}async O(){const e=this.A(),t=this.k;this.k=e,e===t||e===void 0||t!==void 0&&this.j(t,e)||await this.run(e)}async run(e){var o,l,a,u,h;let t,i;e??(e=this.A()),this.k=e,this.status===1?(o=this.T)==null||o.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,this.autoRun==="afterUpdate"?queueMicrotask(()=>this.p.requestUpdate()):this.p.requestUpdate();const r=++this.u;this.T=new AbortController;let n=!1;try{t=await this._(e,{signal:this.T.signal})}catch(g){n=!0,i=g}if(this.u===r){if(t===gt)this.status=0;else{if(n===!1){try{(l=this.m)==null||l.call(this,t)}catch{}this.status=2,(a=this.i)==null||a.call(this,t)}else{try{(u=this.g)==null||u.call(this,i)}catch{}this.status=3,(h=this.o)==null||h.call(this,i)}this.l=t,this.h=i}this.p.requestUpdate()}}abort(e){var t;this.status===1&&((t=this.T)==null||t.abort(e))}get value(){return this.l}get error(){return this.h}render(e){var t,i,r,n;switch(this.status){case 0:return(t=e.initial)==null?void 0:t.call(e);case 1:return(i=e.pending)==null?void 0:i.call(e);case 2:return(r=e.complete)==null?void 0:r.call(e,this.value);case 3:return(n=e.error)==null?void 0:n.call(e,this.error);default:throw Error("Unexpected status: "+this.status)}}}const er=(s,e)=>s===e||s.length===e.length&&s.every((t,i)=>!At(t,e[i])),ii=f`var(--white, #fff)`,tr=f`var(--primaryDisableCTAFill, #767676)`,ir=f`var(--secondaryCTABorder, #999)`,rr=f`var(--primaryCTAFill, #194880)`,ot=f`var(--primaryCTAFillRGB, 25, 72, 128)`,sr=f`var(--primaryCTABorder, #c5d1df)`,nr=f`var(--primaryErrorCTAFill, #d9534f)`,at=f`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,or=f`var(--primaryErrorCTABorder, #d43f3a)`,ar=f`var(--secondaryCTAFill, #333)`,lt=f`var(--secondaryCTAFillRGB, 51, 51, 51)`,lr=f`var(--primaryCTABorder, #979797)`,dr=f`#ee8950`,cr=f`#ec7939`,ur=f`
  .ia-button {
    min-height: 3rem;
    cursor: pointer;
    color: ${ii};
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
    outline-color: ${ii};
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
    background-color: ${tr};
    border: 1px solid ${ir};
  }
  .ia-button.transparent {
    background-color: transparent;
  }
  .ia-button.warning {
    background-color: ${dr}
    border-color: ${cr};
  }

  .ia-button.primary {
    background-color: ${rr};
    border-color: ${sr};
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
    background-color: ${nr};
    border-color: ${or};
  }
  .ia-button.danger:hover {
    background-color: rgba(${at}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${at}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${at}, 0.7);
  }

  .ia-button.dark {
    background-color: ${ar};
    border-color: ${lr};
  }
  .ia-button.dark:hover {
    background-color: rgba(${lt}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${lt}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${lt}, 0.7);
  }
`;function c(s){let e,t,i;return typeof s=="object"?(e=s.hashFunction,t=s.expiring,i=s.tags):e=s,(r,n,o)=>{if(o.value!=null)o.value=ri(o.value,e,t,i);else if(o.get!=null)o.get=ri(o.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const dt=new Map;function ri(s,e,t=0,i){const r=Symbol("__memoized_map__");return function(...n){let o;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let l=this[r];if(Array.isArray(i))for(const a of i)dt.has(a)?dt.get(a).push(l):dt.set(a,[l]);if(e||n.length>0||t>0){let a;e===!0?a=n.map(g=>g.toString()).join("!"):e?a=e.apply(this,n):a=n[0];const u=`${a}__timestamp`;let h=!1;if(t>0)if(!l.has(u))h=!0;else{let g=l.get(u);h=Date.now()-g>t}l.has(a)&&!h?o=l.get(a):(o=s.apply(this,n),l.set(a,o),t>0&&l.set(u,Date.now()))}else{const a=this;l.has(a)?o=l.get(a):(o=s.apply(this,n),l.set(a,o))}return o}}class ft{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:Boolean(e)}}ft.shared=new ft;let I=class{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}};I.shared=new I;let Ie=class{parseValue(e){return I.shared.parseValue(e)}};Ie.shared=new Ie;class Le{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let r=new Date(t);return(t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}Le.shared=new Le;class Fe{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let i;return t.length===1?i=this.parseNumberFormat(t[0]):i=this.parseColonSeparatedFormat(t),i}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const i=e.map((r,n)=>{const o=parseFloat(r);if(Number.isNaN(o))return t=!0,0;const a=60**(e.length-1-n);return o*Math.floor(a)}).reduce((r,n)=>r+n,0);return t?void 0:i}}Fe.shared=new Fe;class vt{parseValue(e){if(typeof e=="string")return e}}vt.shared=new vt;class hr{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let i=[];for(const r of this.separators)if(i=t.split(r),i.length>1)break;return this.parseListValues(i)}parseListValues(e){const i=e.map(n=>n.trim()).map(n=>this.parser.parseValue(n)),r=[];return i.forEach(n=>{n!==void 0&&r.push(n)}),r}}class mt{parseValue(e){if(typeof e=="string")return e}}mt.shared=new mt;class ze{parseValue(e){return String(e)}}ze.shared=new ze;class ge{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){if(this.rawValue.mtime==null)return;const e=I.shared.parseValue(this.rawValue.mtime);if(e)return new Date(e*1e3)}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?Ie.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?Fe.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?I.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?I.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?I.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}d([c()],ge.prototype,"mtime",null);d([c()],ge.prototype,"size",null);d([c()],ge.prototype,"length",null);d([c()],ge.prototype,"height",null);d([c()],ge.prototype,"width",null);d([c()],ge.prototype,"track",null);class O{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const r=this.parser.parseValue(i);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}d([c()],O.prototype,"values",null);d([c()],O.prototype,"value",null);class J extends O{constructor(e){super(ft.shared,e)}}class B extends O{constructor(e){super(Le.shared,e)}}class ct extends O{constructor(e){super(Fe.shared,e)}}class E extends O{constructor(e){super(I.shared,e)}}class v extends O{constructor(e){super(ze.shared,e)}}class pr extends O{constructor(e){super(mt.shared,e)}}class si extends O{constructor(e){super(Ie.shared,e)}}class $i extends O{constructor(e){super(vt.shared,e)}}class gr extends O{constructor(e,t){super(t,e)}}class fr extends gr{constructor(e){const t=new hr(ze.shared);super(e,t)}}class p{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new B(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new v(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new E(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new E(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new v(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new v(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new si(this.rawMetadata.collection_size):void 0}get contact(){return this.rawMetadata.contact!=null?new v(this.rawMetadata.contact):void 0}get contributor(){return this.rawMetadata.contributor!=null?new v(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new v(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new v(this.rawMetadata.creator):void 0}get creator_alt_script(){return this.rawMetadata["creator-alt-script"]!=null?new v(this.rawMetadata["creator-alt-script"]):void 0}get credits(){return this.rawMetadata.credits!=null?new v(this.rawMetadata.credits):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new v(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new B(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new v(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new E(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new ct(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new v(this.rawMetadata["external-identifier"]):void 0}get external_link(){return this.rawMetadata["external-link"]!=null?new v(this.rawMetadata["external-link"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new E(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new B(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new v(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new v(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new E(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new si(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new v(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new ct(this.rawMetadata.length):void 0}get licenseurl(){return this.rawMetadata.licenseurl!=null?new v(this.rawMetadata.licenseurl):void 0}get lineage(){return this.rawMetadata.lineage!=null?new v(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new E(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new $i(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new J(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new v(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new E(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new E(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new v(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new v(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new pr(this.rawMetadata.page_progression):void 0}get paginated(){return this.rawMetadata.paginated!=null?new J(this.rawMetadata.paginated):void 0}get partner(){return this.rawMetadata.partner!=null?new v(this.rawMetadata.partner):void 0}get post_text(){return this.rawMetadata.post_text!=null?new v(this.rawMetadata.post_text):void 0}get ppi(){return this.rawMetadata.ppi!=null?new E(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new B(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new v(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new B(this.rawMetadata.reviewdate):void 0}get rights(){return this.rawMetadata.rights!=null?new v(this.rawMetadata.rights):void 0}get rights_holder(){var e;const t=(e=this.rawMetadata["rights-holder"])!==null&&e!==void 0?e:this.rawMetadata.rights_holder;return t!=null?new v(t):void 0}get runtime(){return this.rawMetadata.runtime!=null?new ct(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new v(this.rawMetadata.scanner):void 0}get segments(){return this.rawMetadata.segments!=null?new v(this.rawMetadata.segments):void 0}get shotlist(){return this.rawMetadata.shotlist!=null?new v(this.rawMetadata.shotlist):void 0}get source(){return this.rawMetadata.source!=null?new v(this.rawMetadata.source):void 0}get sponsor(){return this.rawMetadata.sponsor!=null?new v(this.rawMetadata.sponsor):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new B(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new B(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new B(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new fr(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new v(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new v(this.rawMetadata.title):void 0}get title_alt_script(){return this.rawMetadata["title-alt-script"]!=null?new v(this.rawMetadata["title-alt-script"]):void 0}get transferer(){return this.rawMetadata.transferer!=null?new v(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new E(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new v(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new v(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new E(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new v(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new v(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new E(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new E(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}d([c()],p.prototype,"addeddate",null);d([c()],p.prototype,"audio_codec",null);d([c()],p.prototype,"audio_sample_rate",null);d([c()],p.prototype,"avg_rating",null);d([c()],p.prototype,"collection",null);d([c()],p.prototype,"collections_raw",null);d([c()],p.prototype,"collection_size",null);d([c()],p.prototype,"contact",null);d([c()],p.prototype,"contributor",null);d([c()],p.prototype,"coverage",null);d([c()],p.prototype,"creator",null);d([c()],p.prototype,"creator_alt_script",null);d([c()],p.prototype,"credits",null);d([c()],p.prototype,"collection_layout",null);d([c()],p.prototype,"date",null);d([c()],p.prototype,"description",null);d([c()],p.prototype,"downloads",null);d([c()],p.prototype,"duration",null);d([c()],p.prototype,"external_identifier",null);d([c()],p.prototype,"external_link",null);d([c()],p.prototype,"files_count",null);d([c()],p.prototype,"indexdate",null);d([c()],p.prototype,"isbn",null);d([c()],p.prototype,"issue",null);d([c()],p.prototype,"item_count",null);d([c()],p.prototype,"item_size",null);d([c()],p.prototype,"language",null);d([c()],p.prototype,"length",null);d([c()],p.prototype,"licenseurl",null);d([c()],p.prototype,"lineage",null);d([c()],p.prototype,"month",null);d([c()],p.prototype,"mediatype",null);d([c()],p.prototype,"noindex",null);d([c()],p.prototype,"notes",null);d([c()],p.prototype,"num_favorites",null);d([c()],p.prototype,"num_reviews",null);d([c()],p.prototype,"openlibrary_edition",null);d([c()],p.prototype,"openlibrary_work",null);d([c()],p.prototype,"page_progression",null);d([c()],p.prototype,"paginated",null);d([c()],p.prototype,"partner",null);d([c()],p.prototype,"post_text",null);d([c()],p.prototype,"ppi",null);d([c()],p.prototype,"publicdate",null);d([c()],p.prototype,"publisher",null);d([c()],p.prototype,"reviewdate",null);d([c()],p.prototype,"rights",null);d([c()],p.prototype,"rights_holder",null);d([c()],p.prototype,"runtime",null);d([c()],p.prototype,"scanner",null);d([c()],p.prototype,"segments",null);d([c()],p.prototype,"shotlist",null);d([c()],p.prototype,"source",null);d([c()],p.prototype,"sponsor",null);d([c()],p.prototype,"start_localtime",null);d([c()],p.prototype,"start_time",null);d([c()],p.prototype,"stop_time",null);d([c()],p.prototype,"subject",null);d([c()],p.prototype,"taper",null);d([c()],p.prototype,"title",null);d([c()],p.prototype,"title_alt_script",null);d([c()],p.prototype,"transferer",null);d([c()],p.prototype,"track",null);d([c()],p.prototype,"type",null);d([c()],p.prototype,"uploader",null);d([c()],p.prototype,"utc_offset",null);d([c()],p.prototype,"venue",null);d([c()],p.prototype,"volume",null);d([c()],p.prototype,"week",null);d([c()],p.prototype,"year",null);class Je{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return this.rawValue.reviewdate!=null?Le.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?Le.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?I.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}d([c()],Je.prototype,"reviewdate",null);d([c()],Je.prototype,"createdate",null);d([c()],Je.prototype,"stars",null);class Mt extends Je{get reviewer_account_status(){var e;return(e=this.account_status)===null||e===void 0?void 0:e.status}get reviewer_account_status_reason(){var e;return(e=this.account_status)===null||e===void 0?void 0:e.reason}get __href__(){return this.rawValue.__href__}get account_status(){const e=this.rawValue.reviewer_account_status;if(!e)return;let t="unknown",i;e.startsWith("ok")&&(t="ok"),e.startsWith("locked")&&(t="locked");const r=e.split("__");return r.length>1&&(i=r.slice(1).join("__")),{status:t,reason:i}}}d([c()],Mt.prototype,"account_status",null);const vr=["loans","waitlist","loan_history"];function mr(s){const e=s.slice(0,4),t=s.slice(4,6),i=s.slice(6,8),r=s.slice(8,10),n=s.slice(10,12),o=s.slice(12,14);return`${e}-${t}-${i}T${r}:${n}:${o}Z`}function wr(s){var e;const t=[];for(const i of s){if(!(!((e=i.captures)===null||e===void 0)&&e.length))continue;const r=encodeURIComponent(i.url),n=`https://web.archive.org/web/${i.captures[0]}/${r}`;t.push({hit_type:"web_archive",fields:{url:i.url,capture_dates:i.captures.map(o=>mr(o)),__href__:n}})}return t}class k extends p{get created_on(){return this.rawMetadata.created_on!=null?new B(this.rawMetadata.created_on):void 0}get file_creation_mtime(){return this.rawMetadata.file_creation_mtime!=null?new E(this.rawMetadata.file_creation_mtime):void 0}get filename(){return this.rawMetadata.filename!=null?new v(this.rawMetadata.filename):void 0}get file_basename(){return this.rawMetadata.file_basename!=null?new v(this.rawMetadata.file_basename):void 0}get result_in_subfile(){return this.rawMetadata.result_in_subfile!=null?new J(this.rawMetadata.result_in_subfile):void 0}get query(){return this.rawMetadata.query!=null?new v(this.rawMetadata.query):void 0}get date_favorited(){return this.rawMetadata.date_favorited!=null?new B(this.rawMetadata.date_favorited):void 0}get updated_on(){return this.rawMetadata.updated_on!=null?new B(this.rawMetadata.updated_on):void 0}get ad_id(){return this.rawMetadata.ad_id!=null?new v(this.rawMetadata.ad_id):void 0}get factcheck(){return this.rawMetadata.factcheck!=null?new v(this.rawMetadata.factcheck):void 0}get is_clip(){return this.rawMetadata.clip!=null?new J(this.rawMetadata.clip):void 0}get num_clips(){return this.rawMetadata.nclips!=null?new E(this.rawMetadata.nclips):void 0}get __href__(){return this.rawMetadata.__href__!=null?new v(this.rawMetadata.__href__):void 0}get __img__(){return this.rawMetadata.__img__!=null?new v(this.rawMetadata.__img__):void 0}}d([c()],k.prototype,"created_on",null);d([c()],k.prototype,"file_creation_mtime",null);d([c()],k.prototype,"filename",null);d([c()],k.prototype,"file_basename",null);d([c()],k.prototype,"result_in_subfile",null);d([c()],k.prototype,"query",null);d([c()],k.prototype,"date_favorited",null);d([c()],k.prototype,"updated_on",null);d([c()],k.prototype,"ad_id",null);d([c()],k.prototype,"factcheck",null);d([c()],k.prototype,"is_clip",null);d([c()],k.prototype,"num_clips",null);d([c()],k.prototype,"__href__",null);d([c()],k.prototype,"__img__",null);class R{constructor(e){var t;this.rawMetadata=e,this.fields=new k((t=e.fields)!==null&&t!==void 0?t:{})}get identifier(){return this.fields.identifier}get addeddate(){return this.fields.addeddate}get avg_rating(){return this.fields.avg_rating}get collection(){return this.fields.collection}get collection_files_count(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.collection_files_count)!=null?new E(this.rawMetadata.fields.collection_files_count):void 0}get collection_size(){return this.fields.collection_size}get creator(){return this.fields.creator}get date(){return this.fields.date}get description(){return this.fields.description}get downloads(){return this.fields.downloads}get files_count(){return this.fields.files_count}get genre(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.genre)!=null?new v(this.rawMetadata.fields.genre):void 0}get indexflag(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.indexflag)!=null?new v(this.rawMetadata.fields.indexflag):void 0}get issue(){return this.fields.issue}get item_count(){return this.fields.item_count}get item_size(){return this.fields.item_size}get language(){return this.fields.language}get lending___available_to_borrow(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.lending___available_to_borrow)!=null?new J(this.rawMetadata.fields.lending___available_to_borrow):void 0}get lending___available_to_browse(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.lending___available_to_browse)!=null?new J(this.rawMetadata.fields.lending___available_to_browse):void 0}get lending___available_to_waitlist(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.lending___available_to_waitlist)!=null?new J(this.rawMetadata.fields.lending___available_to_waitlist):void 0}get lending___status(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.lending___status)!=null?new v(this.rawMetadata.fields.lending___status):void 0}get licenseurl(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.licenseurl)!=null?new v(this.rawMetadata.fields.licenseurl):void 0}get mediatype(){return this.fields.mediatype}get month(){return this.fields.month}get noindex(){return this.fields.noindex}get num_favorites(){return this.fields.num_favorites}get num_reviews(){return this.fields.num_reviews}get publicdate(){return this.fields.publicdate}get reviewdate(){return this.fields.reviewdate}get review(){const e=this.rawMetadata.review;return e?new Mt(e):void 0}get source(){return this.fields.source}get subject(){return this.fields.subject}get title(){return this.fields.title}get type(){return this.fields.type}get volume(){return this.fields.volume}get week(){return this.fields.week}get year(){return this.fields.year}}d([c()],R.prototype,"collection_files_count",null);d([c()],R.prototype,"genre",null);d([c()],R.prototype,"indexflag",null);d([c()],R.prototype,"lending___available_to_borrow",null);d([c()],R.prototype,"lending___available_to_browse",null);d([c()],R.prototype,"lending___available_to_waitlist",null);d([c()],R.prototype,"lending___status",null);d([c()],R.prototype,"licenseurl",null);d([c()],R.prototype,"review",null);class Et{constructor(e){var t;this.rawMetadata=e,this.fields=new k((t=e.fields)!==null&&t!==void 0?t:{})}get identifier(){return this.fields.identifier}get highlight(){var e;return!((e=this.rawMetadata.highlight)===null||e===void 0)&&e.text?new v(this.rawMetadata.highlight.text):void 0}get addeddate(){return this.fields.addeddate}get avg_rating(){return this.fields.avg_rating}get collection(){return this.fields.collection}get created_on(){return this.fields.created_on}get creator(){return this.fields.creator}get date(){return this.fields.date}get description(){return this.fields.description}get downloads(){return this.fields.downloads}get filename(){return this.fields.filename}get file_basename(){return this.fields.file_basename}get file_creation_mtime(){return this.fields.file_creation_mtime}get issue(){return this.fields.issue}get mediatype(){return this.fields.mediatype}get page_num(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.page_num)!=null?new E(this.rawMetadata.fields.page_num):void 0}get publicdate(){return this.fields.publicdate}get result_in_subfile(){return this.fields.result_in_subfile}get reviewdate(){return this.fields.reviewdate}get source(){return this.fields.source}get subject(){return this.fields.subject}get title(){return this.fields.title}get updated_on(){return this.fields.updated_on}get year(){return this.fields.year}get __href__(){return this.fields.__href__}}d([c()],Et.prototype,"highlight",null);d([c()],Et.prototype,"page_num",null);var ye;(function(s){s[s.COUNT=0]="COUNT",s[s.ALPHABETICAL=1]="ALPHABETICAL",s[s.NUMERIC=2]="NUMERIC"})(ye||(ye={}));class xi{constructor(e){this.buckets=e.buckets,this.first_bucket_key=e.first_bucket_key,this.last_bucket_key=e.last_bucket_key,this.number_buckets=e.number_buckets,this.interval=e.interval,this.first_bucket_year=e.first_bucket_year,this.first_bucket_month=e.first_bucket_month,this.last_bucket_year=e.last_bucket_year,this.last_bucket_month=e.last_bucket_month,this.interval_in_months=e.interval_in_months}getSortedBuckets(e){const t=[...this.buckets];if(this.isRawNumberBuckets(t))return t;const i=new Intl.Collator;switch(e){case ye.ALPHABETICAL:return t.sort((r,n)=>i.compare(r.key.toString(),n.key.toString()));case ye.NUMERIC:return t.sort((r,n)=>Number(n.key)-Number(r.key));case ye.COUNT:default:return t}}isRawNumberBuckets(e){return typeof e[0]=="number"}}d([c()],xi.prototype,"getSortedBuckets",null);class _r{constructor(e){var t;this.rawMetadata=e,this.fields=new k((t=e.fields)!==null&&t!==void 0?t:{})}get identifier(){var e;return(e=this.fields.query)===null||e===void 0?void 0:e.value}get title(){return this.fields.title}get query(){return this.fields.query}get date_favorited(){return this.fields.date_favorited}get __href__(){return this.fields.__href__}}class Ct{constructor(e){var t;this.rawMetadata=e,this.fields=new k((t=e.fields)!==null&&t!==void 0?t:{})}get identifier(){var e;return(e=this.rawMetadata.fields)===null||e===void 0?void 0:e.url}get mediatype(){return new $i("web")}get title(){var e,t;return!((e=this.rawMetadata.fields)===null||e===void 0)&&e.url?new v((t=this.rawMetadata.fields)===null||t===void 0?void 0:t.url):void 0}get capture_dates(){var e,t;return!((e=this.rawMetadata.fields)===null||e===void 0)&&e.capture_dates?new B((t=this.rawMetadata.fields)===null||t===void 0?void 0:t.capture_dates):void 0}get __href__(){return this.fields.__href__}}d([c()],Ct.prototype,"title",null);d([c()],Ct.prototype,"capture_dates",null);class Lt{constructor(e){var t;this.rawMetadata=e,this.fields=new k((t=e.fields)!==null&&t!==void 0?t:{})}get identifier(){return this.fields.identifier}get highlight(){var e;return!((e=this.rawMetadata.highlight)===null||e===void 0)&&e.text?new v(this.rawMetadata.highlight.text):void 0}get addeddate(){return this.fields.addeddate}get ad_id(){return this.fields.ad_id}get avg_rating(){return this.fields.avg_rating}get collection(){return this.fields.collection}get created_on(){return this.fields.created_on}get creator(){return this.fields.creator}get date(){return this.fields.date}get description(){return this.fields.description}get downloads(){return this.fields.downloads}get factcheck(){return this.fields.factcheck}get filename(){return this.fields.filename}get file_basename(){return this.fields.file_basename}get file_creation_mtime(){return this.fields.file_creation_mtime}get files_count(){return this.fields.files_count}get is_clip(){return this.fields.is_clip}get issue(){return this.fields.issue}get item_count(){return this.fields.item_count}get item_size(){return this.fields.item_size}get language(){return this.fields.language}get mediatype(){return this.fields.mediatype}get num_clips(){return this.fields.num_clips}get num_favorites(){return this.fields.num_favorites}get publicdate(){return this.fields.publicdate}get result_in_subfile(){return this.fields.result_in_subfile}get reviewdate(){return this.fields.reviewdate}get source(){return this.fields.source}get subject(){return this.fields.subject}get title(){return this.fields.title}get updated_on(){return this.fields.updated_on}get week(){return this.fields.week}get year(){return this.fields.year}get start(){var e;return((e=this.rawMetadata.fields)===null||e===void 0?void 0:e.start)!=null?new v(this.rawMetadata.fields.start):void 0}get __href__(){return this.fields.__href__}get __img__(){return this.fields.__img__}}d([c()],Lt.prototype,"highlight",null);d([c()],Lt.prototype,"start",null);class St{constructor(e){this.rawResponse=e}get item_size(){return this.rawResponse.item_size}get files_count(){return this.rawResponse.files_count}get month(){return this.rawResponse.month}get week(){return this.rawResponse.week}get downloads(){return this.rawResponse.downloads}get num_favorites(){return this.rawResponse.num_favorites}get title_message(){return this.rawResponse.title_message}get primary_collection(){return this.rawResponse.primary_collection}get thumbnail_url(){return this.rawResponse.thumbnail_url}get num_reviews(){return this.rawResponse.num_reviews}get uploader_details(){return this.rawResponse.uploader_details}get public_metadata(){if(this.rawResponse.public_metadata)return new p(this.rawResponse.public_metadata)}get part_of(){return this.rawResponse.part_of}get speech_vs_music_asr_metadata(){return this.rawResponse.speech_vs_music_asr_metadata}get reviews_metadata(){var e;return((e=this.rawResponse.reviews_metadata)!==null&&e!==void 0?e:[]).map(i=>new Mt(i))}}d([c()],St.prototype,"public_metadata",null);d([c()],St.prototype,"reviews_metadata",null);class Tt{constructor(e,t){var i,r,n,o,l,a,u,h,g,m,_,C,y,L,D;this.extraInfo=null,this.schema=t,this.schemaHitType=t==null?void 0:t.hit_type;let A;e!=null&&e.page_elements&&(this.pageElements=e.page_elements,A=Object.values(this.pageElements)[0]);let S=(i=e==null?void 0:e.hits)===null||i===void 0?void 0:i.hits;this.totalResults=(n=(r=e==null?void 0:e.hits)===null||r===void 0?void 0:r.total)!==null&&n!==void 0?n:0,this.returnedCount=(l=(o=e==null?void 0:e.hits)===null||o===void 0?void 0:o.returned)!==null&&l!==void 0?l:0,!(S!=null&&S.length)&&(!((a=this.pageElements)===null||a===void 0)&&a.service___fts)?(this.totalResults=0,this.returnedCount=0,this.handleFederatedPageElements()):!(S!=null&&S.length)&&(!((u=A==null?void 0:A.hits)===null||u===void 0)&&u.hits)?(S=A.hits.hits,this.totalResults=(h=A.hits.total)!==null&&h!==void 0?h:0,this.returnedCount=(g=A.hits.returned)!==null&&g!==void 0?g:0):!((m=this.pageElements)===null||m===void 0)&&m.lending?S=this.handleLendingPageElement():!((_=this.pageElements)===null||_===void 0)&&_.web_archives&&(S=this.handleWebArchivesPageElement()),this.results=this.formatHits(S);let ee=e==null?void 0:e.aggregations;!(this.aggregations&&Object.keys(this.aggregations).length>0)&&(A!=null&&A.aggregations)&&(ee=A.aggregations),ee&&this.buildAggregations(ee),e!=null&&e.collection_titles&&(this.collectionTitles=(C=e.collection_titles)!==null&&C!==void 0?C:{}),e!=null&&e.tv_channel_aliases&&(this.tvChannelAliases=(y=e.tv_channel_aliases)!==null&&y!==void 0?y:{}),e!=null&&e.collection_extra_info&&(this.collectionExtraInfo=(L=e.collection_extra_info)!==null&&L!==void 0?L:null),e!=null&&e.account_extra_info&&(this.accountExtraInfo=(D=e.account_extra_info)!==null&&D!==void 0?D:null),e!=null&&e.extra_info&&(this.extraInfo=new St(e.extra_info))}formatHits(e){var t;return(t=e==null?void 0:e.map(i=>{var r;return Tt.createResult((r=i.hit_type)!==null&&r!==void 0?r:this.schemaHitType,i)}))!==null&&t!==void 0?t:[]}buildAggregations(e){this.aggregations=Object.entries(e).reduce((t,[i,r])=>(t[i]=new xi(r),t),{})}handleLendingPageElement(){var e,t;const i=(e=this.pageElements)===null||e===void 0?void 0:e.lending,r=(t=i.loans)!==null&&t!==void 0?t:[];this.totalResults=r.length,this.returnedCount=this.totalResults;for(const n of vr)i[n]=this.formatHits(i[n]);return r}handleWebArchivesPageElement(){var e;const t=wr((e=this.pageElements)===null||e===void 0?void 0:e.web_archives);return this.totalResults=t.length,this.returnedCount=this.totalResults,t}handleFederatedPageElements(){var e,t,i,r;const n=["service___fts","service___tvs","service___rcs","service___whisper","metadata___mediatype___texts","metadata___mediatype___movies","metadata___mediatype___audio","metadata___mediatype___software","metadata___mediatype___image","metadata___mediatype___etree"];for(const o of n){const l=this.removePageElementPrefix(o);this.federatedResults?this.federatedResults[o]=[]:this.federatedResults={[l]:[]};const a=(t=(e=this.pageElements)===null||e===void 0?void 0:e[o])===null||t===void 0?void 0:t.hits;a!=null&&a.hits&&(this.federatedResults[l]=this.formatHits(a==null?void 0:a.hits)),this.totalResults+=(i=a==null?void 0:a.total)!==null&&i!==void 0?i:0,this.returnedCount+=(r=a==null?void 0:a.returned)!==null&&r!==void 0?r:0}}removePageElementPrefix(e){return e.split("___").pop()}static createResult(e,t){switch(e){case"item":return new R(t);case"text":case"asr_text":return new Et(t);case"favorited_search":return new _r(t);case"web_archive":return new Ct(t);case"tv_clip":return new Lt(t);default:return new R(t)}}}class br{constructor(e){this.clientParameters=e.client_parameters,this.backendRequests=e.backend_requests,this.kind=e.kind}}class yr{constructor(e){var t,i,r;this.rawResponse=e,this.request=new br(e.request),this.responseHeader=(t=e.response)===null||t===void 0?void 0:t.header,this.sessionContext=e.session_context,this.response=new Tt((i=e.response)===null||i===void 0?void 0:i.body,(r=e.response)===null||r===void 0?void 0:r.hit_schema)}}class fe{static aggregateSearchParamsAsString(e){if(e.omit)return"false";if(e.advancedParams){const t=e.advancedParams.map(r=>({terms:r}));return JSON.stringify(t)}if(e.simpleParams)return e.simpleParams.join(",")}static sortParamsAsString(e){return`${e.field}:${e.direction}`}static filterParamsAsString(e){return JSON.stringify(e)}static generateURLSearchParams(e){const t=new URLSearchParams;if(e.query&&t.append("user_query",e.query),e.pageType&&t.append("page_type",String(e.pageType)),e.pageTarget&&t.append("page_target",String(e.pageTarget)),e.pageElements&&e.pageElements.length>0){const n=`[${e.pageElements.map(o=>`"${o}"`).join(",")}]`;t.append("page_elements",n)}if(e.rows!=null&&t.append("hits_per_page",String(e.rows)),e.page!=null&&t.append("page",String(e.page)),e.fields&&e.fields.length>0&&t.append("fields",e.fields.join(",")),e.filters&&Object.keys(e.filters).length>0){const r=this.filterParamsAsString(e.filters);r&&r!=="{}"&&t.append("filter_map",r)}if(e.sort&&e.sort.length>0){const r=e.sort.map(n=>this.sortParamsAsString(n));t.append("sort",r.join(","))}const i=e.aggregations;if(i){const r=this.aggregateSearchParamsAsString(i);r&&t.append("aggregations",r)}if(e.aggregationsSize!=null&&t.append("aggregations_size",String(e.aggregationsSize)),e.debugging&&t.append("debugging","true"),e.uid&&t.append("uid",e.uid),e.includeClientUrl!==!1){const r=e.query==null,n=e.query&&e.query.length<=1e3;if(r||n){const l=window.location.href.slice(0,400);t.append("client_url",l)}}return t}}var $e;(function(s){s.networkError="SearchService.NetworkError",s.itemNotFound="SearchService.ItemNotFound",s.decodingError="SearchService.DecodingError",s.searchEngineError="SearchService.SearchEngineError"})($e||($e={}));class $r extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}const ni={reCache:JSON.stringify({recompute:!0}),noCache:JSON.stringify({bypass:!0}),dontCache:JSON.stringify({no_compute:!0})};class ve{constructor(e){var t,i;this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null;const r=new URL(window.location.href).searchParams,n=r.get("scope"),o=r.get("verbose"),l=r.get("debugging"),a=r.get("cacheDebug");let u="";for(const h of Object.keys(ni))if(r.get(h)){u=ni[h];break}u=(i=r.get("caching"))!==null&&i!==void 0?i:u,(e==null?void 0:e.caching)!==void 0?this.cachingFlags=e.caching:u&&(this.cachingFlags=u),(e==null?void 0:e.debuggingEnabled)!==void 0?this.debuggingEnabled=e.debuggingEnabled:(l||a)&&(this.debuggingEnabled=!0),(e==null?void 0:e.scope)!==void 0?this.requestScope=e.scope:n&&(this.requestScope=n),(e==null?void 0:e.verbose)!==void 0?this.verbose=e.verbose:o&&(this.verbose=!!o)}async fetchUrl(e,t){var i,r;const n=new URL(e);this.requestScope&&n.searchParams.set("scope",this.requestScope),this.cachingFlags&&n.searchParams.set("caching",this.cachingFlags);let o;try{const l=(i=t==null?void 0:t.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};o=await fetch(n.href,l)}catch(l){const a=l instanceof Error?l.message:typeof l=="string"?l:"Unknown error";return this.getErrorResult($e.networkError,a)}try{const l=await o.json();this.verbose&&this.printResponse(l),l.debugging&&this.printDebuggingInfo(l);const a=(r=l.response)===null||r===void 0?void 0:r.error;return a?this.getErrorResult($e.searchEngineError,a.message,a.forensics):{success:l}}catch(l){const a=l instanceof Error?l.message:typeof l=="string"?l:"Unknown error";return this.getErrorResult($e.decodingError,a)}}getErrorResult(e,t,i){return{error:new $r(e,t,i)}}printResponse(e){var t,i,r,n,o;try{const l=JSON.parse(JSON.stringify(e)),a=(r=(i=(t=l==null?void 0:l.response)===null||t===void 0?void 0:t.body)===null||i===void 0?void 0:i.hits)===null||r===void 0?void 0:r.hits;if(Array.isArray(a)&&a.length>1){const h=[];h.push(a[0]),h.push(`*** ${a.length-1} hits omitted ***`),l.response.body.hits.hits=h}const u=(o=(n=l==null?void 0:l.response)===null||n===void 0?void 0:n.body)===null||o===void 0?void 0:o.aggregations;u&&Object.entries(u).forEach(([h,g])=>{var m,_,C,y;if(((_=(m=g)===null||m===void 0?void 0:m.buckets)===null||_===void 0?void 0:_.length)>0){const L=JSON.parse(JSON.stringify(g));L.buckets=`*** ${(y=(C=L.buckets)===null||C===void 0?void 0:C.length)!==null&&y!==void 0?y:0} buckets omitted ***`,l.response.body.aggregations[h]=L}}),console.log("***** RESPONSE RECEIVED *****"),console.groupCollapsed("Response"),console.log(JSON.stringify(l,null,2)),console.groupEnd()}catch(l){console.error("Error printing search response:",l)}}printDebuggingInfo(e){var t,i;const r=e.debugging,n=(t=r.messages)!==null&&t!==void 0?t:[],o=(i=r.data)!==null&&i!==void 0?i:{};console.log("***** BEGIN DEBUGGING *****"),console.log("Full response:"),console.log(JSON.stringify(e,null,2)),console.group("Debug messages");for(const l of n)console.log(l);console.groupEnd(),console.group("Debug data");for(const[l,a]of Object.entries(o))console.log(l,a);console.groupEnd(),console.log("***** END DEBUGGING *****")}}class xr extends ve{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=fe.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=metadata&${i}`;return this.fetchUrl(r)}}class Ar extends ve{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=fe.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=fts&${i}`;return this.fetchUrl(r)}}class kr extends ve{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=fe.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=rcs&${i}`;return this.fetchUrl(r)}}var U;(function(s){s[s.DEFAULT=0]="DEFAULT",s[s.METADATA=1]="METADATA",s[s.FULLTEXT=2]="FULLTEXT",s[s.TV=3]="TV",s[s.RADIO=4]="RADIO",s[s.FEDERATED=5]="FEDERATED"})(U||(U={}));class Mr extends ve{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=fe.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=tvs&${i}`;return this.fetchUrl(r)}}class Er extends ve{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=fe.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?page_type=simple_federation&${i}`;return this.fetchUrl(r)}}class Cr extends ve{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=fe.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?${i}`,{pageType:n,identifiers:o}=e,a=n==="client_document_fetch"&&!!(o!=null&&o.length)?{requestOptions:{method:"POST",body:JSON.stringify({doc_ids:o}),credentials:"include"}}:void 0;return this.fetchUrl(r,a)}}class de{constructor(e={}){this.backendOptions=e}async search(e,t=U.METADATA){const r=await de.getBackendForSearchType(t,this.backendOptions).performSearch(e);return r.error?r:{success:new yr(r.success)}}itemDetails(e){const t={pageType:"item_details",pageTarget:e};return this.search(t,U.DEFAULT)}static getBackendForSearchType(e,t={}){switch(e){case U.METADATA:return new xr(t);case U.FULLTEXT:return new Ar(t);case U.RADIO:return new kr(t);case U.TV:return new Mr(t);case U.FEDERATED:return new Er(t);default:return new Cr(t)}}}de.default=new de;d([c((s,e={})=>{const{includeCredentials:t=!1,verbose:i=!1,scope:r="",baseUrl:n=""}=e;return`${s};${t};${i};${r};${n}`})],de,"getBackendForSearchType",null);var oi;(function(s){s.INCLUDE="inc",s.EXCLUDE="exc",s.GREATER_THAN="gt",s.GREATER_OR_EQUAL="gte",s.LESS_THAN="lt",s.LESS_OR_EQUAL="lte"})(oi||(oi={}));var xe;(function(s){s.NETWORK="failed to connect to user lists backend service",s.BAD_RESPONSE="malformed response from backend",s.USER_NOT_FOUND="user with the given id was not found",s.LIST_NOT_FOUND="user list with the given id was not found",s.LIST_MEMBER_NOT_FOUND="user list member with the given id was not found",s.ITEM_NOT_TOUND="item with the given id was not found"})(xe||(xe={}));class Lr extends Error{constructor(e,t,i){super(t,i),this.reason=e}}const Be="application/json; charset=utf-8";class N{constructor({fetchHandler:e,searchService:t,userService:i,baseUrl:r=N.DEFAULT_BASE_URL}){this.fetchHandler=e,this.searchService=t,this.userService=i,this.baseUrl=r}async fetchEndpoint(e,t,i,r){try{const n=await this.fetchHandler.fetchApiResponse(e,{method:t,body:i,headers:r,includeCredentials:!0});return n.success?{success:n.value}:{error:N.getErrorResult(xe.LIST_NOT_FOUND,n.error)}}catch(n){return{error:N.getErrorResult(xe.NETWORK,n)}}}async fetchListsForUser(e){var t;const i=(t=await this.userService.getLoggedInUser())===null||t===void 0?void 0:t.success,r=(i==null?void 0:i.itemname)===e?"me":e;return this.fetchEndpoint(`${this.baseUrl}/services/users/${r}/lists`)}async fetchList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/${e}/lists/${t}`)}async fetchOwnListsContainingItem(e){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists?item=${e}`)}async fetchListMembers(e,t){const i=await this.fetchList(e,t);if(!i.success)return i;const{members:r}=i.success;if(!r)throw N.getErrorResult(xe.BAD_RESPONSE);return{success:r}}async fetchListMemberSearchResults(e,t){const i=await this.fetchListMembers(e,t);if(!i.success)return i;const r=i.success;if(r.length===0)return{success:[]};const n=`identifier:(${r.map(l=>l.identifier).join(" OR ")})`,o=await this.searchService.search({query:n,rows:r.length,aggregations:{omit:!0}},U.METADATA);return o.success?{success:o.success.response.results}:{error:o.error}}async createList(e){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists`,"POST",JSON.stringify(e),{"Content-Type":Be})}async updateList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}`,"PATCH",JSON.stringify(t),{"Content-Type":Be})}async deleteList(e){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}`,"DELETE")}async addMemberToList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}/members`,"POST",JSON.stringify(t),{"Content-Type":Be})}async removeMemberFromList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}/members/${t}`,"DELETE")}async removeBulkMembersFromList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}/members`,"PATCH",JSON.stringify({remove:t}),{"Content-Type":Be})}static getErrorResult(e,t){return new Lr(e,N.getErrorMessage(t),{cause:t})}static getErrorMessage(e){return e instanceof Error?e.message:typeof e=="string"?e:"Unknown error"}}N.DEFAULT_BASE_URL="https://archive.org";let F=class extends T{async saveListDetails(e){var t,i,r,n;e.preventDefault();const o=(t=e.target)===null||t===void 0?void 0:t.querySelector("button#save-list-settings");o==null||o.setAttribute("disabled","true"),this.dispatchEvent(new Event("userListSaving"));try{const l={list_name:this.listName.value,description:this.listDescription.value,is_private:this.listPrivate.checked};let a;if(!((i=this.userList)===null||i===void 0)&&i.id?a=await((r=this.userListsService)===null||r===void 0?void 0:r.updateList(this.userList.id,l)):a=await((n=this.userListsService)===null||n===void 0?void 0:n.createList(l)),a.success)this.dispatchEvent(new CustomEvent("userListSaved",{detail:a.success}));else throw a.error}catch(l){this.dispatchEvent(new CustomEvent("userListError",{detail:{error:l}})),console.log("error",l),o==null||o.removeAttribute("disabled")}}emitCloseModalEvent(e){e.preventDefault(),this.dispatchEvent(new Event("listModalClosed"))}render(){var e,t,i,r,n,o,l,a;return w`
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
              .value=${(o=(n=this.userList)===null||n===void 0?void 0:n.description)!==null&&o!==void 0?o:""}
            ></textarea>
          </div>
          <div class="field">
            <label for="private">Private list</label>
            <input
              type="checkbox"
              id="private"
              .checked="${(a=(l=this.userList)===null||l===void 0?void 0:l.is_private)!==null&&a!==void 0?a:!1}"
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
    `}};F.styles=[ur,f`
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
    `];d([b({type:Object}),pe("design:type",Object)],F.prototype,"userList",void 0);d([b({type:Object}),pe("design:type",N)],F.prototype,"userListsService",void 0);d([H("#id"),pe("design:type",HTMLInputElement)],F.prototype,"listId",void 0);d([H("#name"),pe("design:type",HTMLInputElement)],F.prototype,"listName",void 0);d([H("#description"),pe("design:type",HTMLInputElement)],F.prototype,"listDescription",void 0);d([H("#private"),pe("design:type",HTMLInputElement)],F.prototype,"listPrivate",void 0);F=d([j("iaux-userlist-settings")],F);function Sr(s){var e=[],t="";for(t in s)e.push(t);return e}function wt(s){return s=JSON.stringify(s),!(typeof s!="string"||!/^\{[\s\S]*\}$/.test(s))}function Tr(s){return s instanceof Array}function Br(s){return Array.prototype.slice.call(s)}function ce(){if(!(this instanceof ce))return new ce}ce.prototype={get:function(s){for(var e=s+"=",t=document.cookie.split(";"),i=0;i<t.length;i++){for(var r=t[i];r.charAt(0)==" ";)r=r.substring(1,r.length);if(r.indexOf(e)==0)return decodeURI(r.substring(e.length,r.length))}return!1},set:function(s,e,t){if(wt(s))for(const i in s)this.set(i,s[i],e,t);else if(typeof s=="string"){const i=wt(t)?t:{expires:t},r=i.path!==void 0?`;path=${i.path};path=/`:";path=/",n=i.domain?`;domain=${i.domain}`:"",o=i.secure?";secure":"";let l=i.expires!==void 0?i.expires:"";typeof l=="string"&&l!==""?l=new Date(l):typeof l=="number"&&(l=new Date(+new Date+1e3*60*60*24*l)),l!==""&&"toGMTString"in l&&(l=`;expires=${l.toGMTString()}`);const a=i.sameSite?`;SameSite=${i.sameSite}`:"";document.cookie=`${s}=${encodeURI(e)+l+r+n+o+a}`}},remove:function(s){s=Tr(s)?s:Br(arguments);for(var e=0,t=s.length;e<t;e++)this.set(s[e],"",-1);return s},clear:function(s){return s?this.remove(s):this.remove(Sr(this.all()))},all:function(){if(document.cookie==="")return{};for(var s=document.cookie.split("; "),e={},t=0,i=s.length;t<i;t++){var r=s[t].split("=");e[decodeURI(r[0])]=decodeURI(r[1])}return e}};let K=null;const Ai=function(s,e,t){const i=arguments;if(K||(K=ce()),i.length===0)return K.all();if(i.length===1&&s===null)return K.clear();if(i.length===2&&!e)return K.clear(s);if(typeof s=="string"&&!e)return K.get(s);if(typeof s=="string"&&e||wt(s))return K.set(s,e,t)};for(const s in ce.prototype)Ai[s]=ce.prototype[s];class Ve{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}Ve.shared=new Ve;class _t{parseValue(e){return Ve.shared.parseValue(e)}}_t.shared=new _t;class Bt{constructor(e){this.name=e.name,this.source=e.source,this.mtime=e.mtime,this.size=e.size,this.md5=e.md5,this.crc32=e.crc32,this.sha1=e.sha1,this.format=e.format,this.rotation=e.rotation}static fromResponse(e){const t=Ve.shared,i=_t.shared;let r,n,o;return e.mtime&&(r=t.parseValue(e.mtime)),e.size&&(n=i.parseValue(e.size)),e.rotation&&(o=t.parseValue(e.rotation)),new Bt({name:e.name,source:e.source,mtime:r,size:n,md5:e.md5,crc32:e.crc32,sha1:e.sha1,format:e.format,rotation:o})}}class je{constructor(e){this.username=e.username,this.itemname=e.itemname,this.screenname=e.screenname,this.privs=e.privs,this.image_info=e.image_info,this.isArchiveOrgUser=this.username.endsWith("@archive.org");const{itemname:t}=e;this.userid=t.startsWith("@")?t.substring(1):t}static fromUserResponse(e){return new je({username:e.username,itemname:e.itemname,screenname:e.screenname,privs:e.privs,image_info:Bt.fromResponse(e.image_info)})}}var re;(function(s){s.userNotLoggedIn="UserService.userNotLoggedIn",s.networkError="UserService.networkError",s.decodingError="UserService.decodingError"})(re||(re={}));class Re extends Error{constructor(e,t){super(t),this.name=e,this.type=e}}class Rr{constructor(e){var t,i;this.userServiceEndpoint=(t=e==null?void 0:e.userServiceEndpoint)!==null&&t!==void 0?t:"https://archive.org/services/user.php?op=whoami",this.cache=e==null?void 0:e.cache,this.cacheTTL=e==null?void 0:e.cacheTTL,this.userCacheKey=(i=e==null?void 0:e.userCacheKey)!==null&&i!==void 0?i:"loggedInUserInfo"}async getLoggedInUser(){const e=Ai.get("logged-in-user");if(!(e!==!1))return{error:new Re(re.userNotLoggedIn)};const i=await this.getPersistedUser();if(i){const n=je.fromUserResponse(i);if(e===n.username)return{success:n}}if(this.fetchPromise)return this.fetchPromise=this.fetchPromise.then(n=>n),this.fetchPromise;this.fetchPromise=this.fetchUser();const r=await this.fetchPromise;return this.fetchPromise=void 0,r}async fetchUser(){let e;try{e=await fetch(this.userServiceEndpoint,{credentials:"include"})}catch(n){return{error:new Re(re.networkError,n.message)}}let t;try{t=await e.json()}catch(n){return{error:new Re(re.decodingError,n.message)}}if(!t.success||!t.value)return{error:new Re(re.userNotLoggedIn,t.error)};const i=t.value,r=je.fromUserResponse(i);return await this.persistUser(i),{success:r}}async getPersistedUser(){var e;return(e=this.cache)===null||e===void 0?void 0:e.get(this.userCacheKey)}async persistUser(e){var t;await((t=this.cache)===null||t===void 0?void 0:t.set({key:this.userCacheKey,value:e,ttl:this.cacheTTL}))}}class Or{async fetchApiResponse(e,t){const i={};return t!=null&&t.includeCredentials&&(i.credentials="include"),t!=null&&t.method&&(i.method=t.method),t!=null&&t.body&&(i.body=t.body),t!=null&&t.headers&&(i.headers=t.headers),await(await fetch(e,i)).json()}}const Dr="https://archive.org",ai={create(s){const{serviceUrl:e,serviceProtocol:t="https://"}=s,i=e?`${t}${e}`:Dr;return new N({fetchHandler:new Or,searchService:de.default,userService:new Rr,baseUrl:i})}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function te(s,e,t){return s?e():t==null?void 0:t()}const Ur=Ke`<svg class="caret-up-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
<path d="m6.7226499 3.51689722c.22976435.15317623.54019902.0910893.69337525-.13867505.13615665-.20423497.10222882-.47220946-.06836249-.63681849l-.07031256-.05655675-3.2773501-2.18490007-3.2773501 2.18490007c-.22976434.15317623-.29185128.4636109-.13867505.69337524.13615665.20423498.39656688.27598409.61412572.18182636l.07924953-.04315131 2.7226499-1.81402514z"
  fill=""></path>
</svg>`,Pr=Ke`<svg class="caret-down-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
<path d="m6.7226499.58397485c.22976435-.15317623.54019902-.09108929.69337525.13867505.13615665.20423498.10222882.47220947-.06836249.63681849l-.07031256.05655676-3.2773501 2.18490006-3.2773501-2.18490006c-.22976434-.15317623-.29185128-.4636109-.13867505-.69337525.13615665-.20423497.39656688-.27598409.61412572-.18182636l.07924953.04315131 2.7226499 1.81402515z"
fill=""></path>
</svg>`;let x=class extends T{constructor(){super(...arguments),this.open=!1,this.isDisabled=!1,this.displayCaret=!1,this.closeOnSelect=!1,this.openViaButton=!0,this.usePopover=!1,this.includeSelectedOption=!1,this.selectedOption="",this.options=[],this.optionGroup="options",this.optionSelected=()=>{},this.isCustomList=!1,this.hasCustomClickHandler=!1,this.closeOnEscape=!1,this.closeOnBackdropClick=!1,this.boundKeyboardListener=e=>{switch(e.key){case"Escape":case"Esc":this.closeOptions();break}},this.closeOptions=e=>{e&&e.type==="click"&&e.stopPropagation(),this.open=!1,this.updatePopoverState()}}async firstUpdated(){await new Promise(e=>{setTimeout(e,0)}),this.addEventListener("closeDropdown",this.closeOptions)}willUpdate(e){e.has("open")&&this.updatePopoverState()}disconnectedCallback(){var e;(e=super.disconnectedCallback)===null||e===void 0||e.call(this),this.removeKeyboardListener()}setupKeyboardListener(){this.closeOnEscape&&document.addEventListener("keydown",this.boundKeyboardListener)}removeKeyboardListener(){this.closeOnEscape&&document.removeEventListener("keydown",this.boundKeyboardListener)}get dropdownState(){return this.open?(this.setupKeyboardListener(),"open"):(this.removeKeyboardListener(),"closed")}toggleOptions(){this.open=!this.open,this.updatePopoverState()}updatePopoverState(){var e,t;this.usePopover&&((t=(e=this.dropdownMenu)===null||e===void 0?void 0:e.togglePopover)===null||t===void 0||t.call(e,this.open),this.open&&this.positionDropdownMenu())}positionDropdownMenu(){if(!this.dropdownMenu)return;const e=this.container.getBoundingClientRect();this.dropdownMenu.style.left=`${e.left}px`,this.dropdownMenu.style.top=`${e.bottom}px`,this.dropdownMenu.style.minWidth=`${e.width}px`}mainButtonClicked(){var e;this.openViaButton?this.toggleOptions():(e=this.mainButtonLabelSlotted[0])===null||e===void 0||e.click()}mainButtonKeyDown(e){(e.key==="Enter"||e.key===" ")&&(this.mainButtonClicked(),e.preventDefault())}caretKeyDown(e){(e.key==="Enter"||e.key===" ")&&(this.toggleOptions(),e.preventDefault())}renderOption(e){const{label:t,url:i=void 0,id:r}=e;let n;const o=this.selectedOption===r?"selected":"";return i?n=w`<a
        href=${i}
        @click=${l=>this.optionClicked(l,e)}
        >${t}</a
      >`:n=w`<button
        @click=${l=>this.optionClicked(l,e)}
      >
        ${t}
      </button>`,w`<li role="menuitem" class=${o}>${n}</li>`}optionClicked(e,t){var i;e.stopPropagation(),this.selectedOption!==t.id&&(this.selectedOption=t.id,this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:t}})),(i=t.selectedHandler)===null||i===void 0||i.call(t,t)),this.closeOnSelect&&(this.closeOptions(),this.mainButton.focus())}get availableOptions(){return this.includeSelectedOption?this.options:this.options.filter(e=>this.selectedOption!==e.id)}get caretUpTemplate(){return w`
      <span ?hidden=${!this.open} class="caret-up">
        <slot name="caret-up">${Ur}</slot>
      </span>
    `}get caretDownTemplate(){return w`
      <span ?hidden=${this.open} class="caret-down">
        <slot name="caret-down">${Pr}</slot>
      </span>
    `}get caretTemplate(){return this.displayCaret?this.openViaButton?w`
        <span class="caret" aria-hidden="true">
          ${this.caretUpTemplate} ${this.caretDownTemplate}
        </span>
      `:w`
      <button
        class="caret"
        aria-labelledby="caret-label"
        aria-haspopup="true"
        aria-expanded=${this.open}
        @click=${te(this.shouldAttachEventHandlers,()=>this.toggleOptions)}
        @keydown=${te(this.shouldAttachEventHandlers,()=>this.caretKeyDown)}
        ?disabled=${this.isDisabled}
      >
        ${this.caretUpTemplate} ${this.caretDownTemplate}
      </button>
    `:w``}get dropdownTemplate(){return this.isCustomList?w`<slot name="list"></slot>`:w`${this.availableOptions.map(e=>this.renderOption(e))}`}get backdropTemplate(){return this.closeOnBackdropClick?this.open?w`
      <div
        id="dropdown-backdrop"
        @keyup=${this.closeOptions}
        @click=${this.closeOptions}
      ></div>
    `:w``:w``}get shouldNestCaretInButton(){return this.openViaButton}get shouldAttachEventHandlers(){return!this.isDisabled&&!this.hasCustomClickHandler}render(){return w`
      <div class="ia-dropdown-group">
        <div class="button-row">
          <button
            class="click-main"
            aria-haspopup=${this.openViaButton}
            aria-expanded=${this.open}
            @click=${te(this.shouldAttachEventHandlers,()=>this.mainButtonClicked)}
            @keydown=${te(this.shouldAttachEventHandlers,()=>this.mainButtonKeyDown)}
            ?disabled=${this.isDisabled}
          >
            <span class="sr-only" id="caret-label"
              >Toggle ${this.optionGroup}</span
            >
            <slot name="dropdown-label"></slot>
            ${te(this.shouldNestCaretInButton,()=>this.caretTemplate)}
          </button>
          ${te(!this.shouldNestCaretInButton,()=>this.caretTemplate)}
        </div>

        <ul
          id="dropdown-main"
          class=${this.dropdownState}
          role="menu"
          ?popover=${this.usePopover}
        >
          ${this.dropdownTemplate}
        </ul>

        ${this.backdropTemplate}
      </div>
    `}static get styles(){const e=f`var(--dropdownBorderWidth, 1px)`,t=f`var(--dropdownBorderRadius, 4px)`,i=f`var(--dropdownBorderColor, #fff)`,r=f`var(--dropdownBgColor, #333)`,n=f`var(--dropdownTextColor, #fff)`,o=f`var(--dropdownHoverBgColor, rgba(255, 255, 255, 0.3))`,l=f`var(--dropdownSelectedBgColor, #fff)`,a=f`var(--dropdownMainButtonBgColor, transparent)`,u=f`var(--dropdownTextAlign, inherit)`;return f`
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

      .button-row {
        display: flex;
        height: 100%;
      }

      button.click-main {
        background: ${a};
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
        background-color: var(
          --dropdownMainButtonHoverBgColor,
          ${a}
        );
      }

      button.click-main:focus,
      button.click-main:focus-visible {
        background-color: var(
          --dropdownMainButtonFocusBgColor,
          ${a}
        );
      }

      button.click-main:active {
        background-color: var(
          --dropdownMainButtonActiveBgColor,
          ${a}
        );
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

      button.caret {
        appearance: none;
        background: none;
        border: none;
        cursor: pointer;
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

      #dropdown-main.closed {
        visibility: hidden;
        height: 1px;
        width: 1px;
      }

      #dropdown-main {
        position: var(--dropdownListPosition, absolute);
        list-style: none;
        margin: var(--dropdownOffsetTop, 5px) 0 0 0;
        padding: var(--dropdownPadding, 0);
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

      #dropdown-main li:hover {
        background-color: ${o};
        color: var(--dropdownHoverTextColor, #fff);
        list-style: none;
        cursor: pointer;
      }

      #dropdown-main li:hover:first-child {
        border-top-color: ${o};
      }

      ul#dropdown-main li:hover:last-child {
        border-bottom-color: ${o};
      }

      #dropdown-main li:hover:not(:first-child) {
        border-top: 0.5px solid var(--dropdownHoverTopBottomBorderColor, #333);
      }
      #dropdown-main li:hover:not(:last-child) {
        border-bottom: 0.5px solid
          var(--dropdownHoverTopBottomBorderColor, #333);
      }

      #dropdown-main li.selected:last-child {
        border-bottom-color: ${l};
      }

      #dropdown-main li.selected:first-child {
        border-top-color: ${l};
      }

      #dropdown-main li:hover > *,
      #dropdown-main li:focus-within > * {
        background-color: ${o};
        color: var(--dropdownHoverTextColor, #fff);
      }

      #dropdown-main li.selected > * {
        background-color: ${l};
        color: var(--dropdownSelectedTextColor, #2c2c2c);
      }

      #dropdown-main li {
        background: ${r};
        list-style: none;
        height: 30px;
        cursor: pointer;
        border-bottom: 0.5px solid ${r};
        border-top: 0.5px solid ${r};
      }

      #dropdown-main li button {
        background: none;
        color: inherit;
        border: none;
        font: inherit;
        cursor: pointer;
        outline: inherit;
      }

      #dropdown-main li a {
        text-decoration: none;
        display: block;
        box-sizing: border-box;
      }

      #dropdown-main li:first-child {
        border-top-left-radius: var(--dropdownBorderTopLeftRadius, 4px);
        border-top-right-radius: var(--dropdownBorderTopRightRadius, 4px);
      }

      #dropdown-main li:last-child {
        border-bottom-right-radius: var(--dropdownBorderBottomRightRadius, 4px);
        border-bottom-left-radius: var(--dropdownBorderBottomLeftRadius, 4px);
      }

      /* cover the list with the label */
      #dropdown-main li > * > :first-child {
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

      #dropdown-main li > * {
        width: 100%;
        height: inherit;
        color: ${n};
        background: var(--dropdownItemButtonBgColor, transparent);
        padding: var(--dropdownItemButtonPadding, 0);
        text-align: ${u};
      }
    `}};d([b({type:Boolean,reflect:!0})],x.prototype,"open",void 0);d([b({type:Boolean,reflect:!0})],x.prototype,"isDisabled",void 0);d([b({type:Boolean})],x.prototype,"displayCaret",void 0);d([b({type:Boolean})],x.prototype,"closeOnSelect",void 0);d([b({type:Boolean})],x.prototype,"openViaButton",void 0);d([b({type:Boolean})],x.prototype,"usePopover",void 0);d([b({type:Boolean})],x.prototype,"includeSelectedOption",void 0);d([b({type:String})],x.prototype,"selectedOption",void 0);d([b({attribute:!1})],x.prototype,"options",void 0);d([b({type:String})],x.prototype,"optionGroup",void 0);d([b({attribute:!1})],x.prototype,"optionSelected",void 0);d([b({type:Boolean,reflect:!0})],x.prototype,"isCustomList",void 0);d([b({type:Boolean,reflect:!0})],x.prototype,"hasCustomClickHandler",void 0);d([b({type:Boolean,reflect:!0})],x.prototype,"closeOnEscape",void 0);d([b({type:Boolean,reflect:!0})],x.prototype,"closeOnBackdropClick",void 0);d([H(".ia-dropdown-group")],x.prototype,"container",void 0);d([H("#dropdown-main")],x.prototype,"dropdownMenu",void 0);d([H(".click-main")],x.prototype,"mainButton",void 0);d([Qi({slot:"dropdown-label"})],x.prototype,"mainButtonLabelSlotted",void 0);x=d([j("ia-dropdown")],x);let bt=class extends T{render(){return w`
      <div class="icon-label-container">
        <slot name="icon"></slot>
        <slot></slot>
      </div>
    `}};bt.styles=f`
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
  `;bt=d([j("ia-icon-label")],bt);class qe{constructor(e){var t,i,r,n,o,l,a;this.title=e==null?void 0:e.title,this.subtitle=e==null?void 0:e.subtitle,this.headline=e==null?void 0:e.headline,this.message=e==null?void 0:e.message,this.headerColor=(t=e==null?void 0:e.headerColor)!==null&&t!==void 0?t:"#55A183",this.bodyColor=(i=e==null?void 0:e.bodyColor)!==null&&i!==void 0?i:"#f5f5f7",this.showProcessingIndicator=(r=e==null?void 0:e.showProcessingIndicator)!==null&&r!==void 0?r:!1,this.processingImageMode=(n=e==null?void 0:e.processingImageMode)!==null&&n!==void 0?n:"complete",this.showCloseButton=(o=e==null?void 0:e.showCloseButton)!==null&&o!==void 0?o:!0,this.showHeaderLogo=(l=e==null?void 0:e.showHeaderLogo)!==null&&l!==void 0?l:!0,this.closeOnBackdropClick=(a=e==null?void 0:e.closeOnBackdropClick)!==null&&a!==void 0?a:!0}}function*Rt(s=document.activeElement){s!=null&&(yield s,"shadowRoot"in s&&s.shadowRoot&&s.shadowRoot.mode!=="closed"&&(yield*Rt(s.shadowRoot.activeElement)))}function Hr(){return[...Rt()].pop()}const li=new WeakMap;function ki(s){let e=li.get(s);return e||(e=window.getComputedStyle(s,null),li.set(s,e)),e}function Nr(s){if("checkVisibility"in s&&typeof s.checkVisibility=="function")return s.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=ki(s);return e.visibility!=="hidden"&&e.display!=="none"}function Ir(s){const e=ki(s),{overflowY:t,overflowX:i}=e;return t==="scroll"||i==="scroll"?!0:t!=="auto"||i!=="auto"?!1:s.scrollHeight>s.clientHeight&&t==="auto"||s.scrollWidth>s.clientWidth&&i==="auto"}function Fr(s){const e=s.tagName.toLowerCase(),t=Number(s.getAttribute("tabindex"));return s.hasAttribute("tabindex")&&(isNaN(t)||t<=-1)||s.hasAttribute("disabled")||s.closest("[inert]")||e==="input"&&s.getAttribute("type")==="radio"&&!s.hasAttribute("checked")||!Nr(s)?!1:(e==="audio"||e==="video")&&s.hasAttribute("controls")||s.hasAttribute("tabindex")||s.hasAttribute("contenteditable")&&s.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:Ir(s)}function zr(s,e){var t;return((t=s.getRootNode({composed:!0}))===null||t===void 0?void 0:t.host)!==e}function di(s){const e=new WeakMap,t=[];function i(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]")||e.has(r))return;e.set(r,!0),!t.includes(r)&&Fr(r)&&t.push(r),r instanceof HTMLSlotElement&&zr(r,s)&&r.assignedElements({flatten:!0}).forEach(n=>{i(n)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&i(r.shadowRoot)}for(const n of Array.from(r.children))i(n)}return i(s),t.sort((r,n)=>{const o=Number(r.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-o})}let be=[];class Vr{constructor(e){this.isExternalActivated=!1,this.tabDirection="forward",this.currentFocus=null,this.previousFocus=null,this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var i;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const r=Hr();if(this.previousFocus=r,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const n=di(this.element);let o=n.findIndex(a=>a===r);this.previousFocus=this.currentFocus;const l=this.tabDirection==="forward"?1:-1;for(;;){o+l>=n.length?o=0:o+l<0?o=n.length-1:o+=l,this.previousFocus=this.currentFocus;const a=n[o];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;t.preventDefault(),this.currentFocus=a,(i=this.currentFocus)===null||i===void 0||i.focus({preventScroll:!1});const u=[...Rt()];if(u.includes(this.currentFocus)||!u.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){be.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){be=be.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return be[be.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=di(this.element);if(!this.element.matches(":focus-within")){const t=e[0],i=e[e.length-1],r=this.tabDirection==="forward"?t:i;typeof(r==null?void 0:r.focus)=="function"&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}}const jr=Object.freeze({processing:"processing",complete:"complete"});class qr extends T{static get properties(){return{mode:{type:String}}}constructor(){super(),this.mode=jr.processing}render(){return w`
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
    `}static get styles(){const e=f`var(--activityIndicatorCheckmarkColor, #31A481)`,t=f`var(--activityIndicatorCompletedRingColor, #31A481)`,i=f`var(--activityIndicatorLoadingRingColor, #333333)`,r=f`var(--activityIndicatorLoadingDotColor, #333333)`;return f`
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
    `}}window.customElements.define("ia-activity-indicator",qr);const Wr=w`
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
`;class Kr extends T{static get styles(){return f`
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
    `}render(){return Wr}}customElements.define("ia-icon-close",Kr);const Gr=w`
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
`;let yt=class extends T{constructor(){super(...arguments),this.config=new qe}render(){return w`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton?this.closeButtonTemplate:""}
            ${this.config.showHeaderLogo?w`<div class="logo-icon">${Gr}</div>`:$}
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
    `}static get styles(){const e=f`var(--modalLogoSize, 6.5rem)`,t=f`var(--processingImageSize, 7.5rem)`,i=f`var(--modalCornerRadius, 1rem)`,r=f`var(--modalBorder, 2px solid black)`,n=f`var(--modalBottomMargin, 2.5rem)`,o=f`var(--modalTopMargin, 5rem)`,l=f`var(--modalHeaderBottomPadding, 0.5em)`,a=f`var(--modalBottomPadding, 2rem)`,u=f`var(--modalScrollOffset, 5px)`,h=f`var(--modalTitleFontSize, 1.8rem)`,g=f`var(--modalSubtitleFontSize, 1.4rem)`,m=f`var(--modalHeadlineFontSize, 1.6rem)`,_=f`var(--modalMessageFontSize, 1.4rem)`,C=f`var(--modalTitleLineHeight, normal)`,y=f`var(--modalSubtitleLineHeight, normal)`,L=f`var(--modalHeadlineLineHeight, normal)`,D=f`var(--modalMessageLineHeight, normal)`;return f`
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
        margin-top: ${o};
      }

      header {
        position: relative;
        background-color: #36a483;
        color: white;
        border-radius: calc(${i}) calc(${i}) 0 0;
        border: ${r};
        border-bottom: 0;
        text-align: center;
        padding-bottom: ${l};
      }

      .title {
        margin: 0;
        padding: 0;
        font-size: ${h};
        font-weight: bold;
        line-height: ${C};
      }

      .subtitle {
        margin: 0;
        padding: 0;
        font-weight: normal;
        padding-top: 0;
        font-size: ${g};
        line-height: ${y};
      }

      .modal-body {
        background-color: #f5f5f7;
        border-radius: 0 0 calc(${i}) calc(${i});
        border: ${r};
        border-top: 0;
        padding: 0 1rem calc(${a} - ${u}) 1rem;
        color: #333;
        margin-bottom: 2.5rem;
        min-height: 5rem;
      }

      .content {
        overflow-y: auto;
        max-height: calc(100vh - (16.5rem + ${n}));
        min-height: 5rem;
        padding: 0 0 calc(${u}) 0;
      }

      .headline {
        font-size: ${m};
        font-weight: bold;
        text-align: center;
        line-height: ${L};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${_};
        line-height: ${D};
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
    `}};d([b({type:Object})],yt.prototype,"config",void 0);yt=d([j("modal-template")],yt);function Zr(s,e,t){var i=t||{},r=i.noTrailing,n=r===void 0?!1:r,o=i.noLeading,l=o===void 0?!1:o,a=i.debounceMode,u=a===void 0?void 0:a,h,g=!1,m=0;function _(){h&&clearTimeout(h)}function C(L){var D=L||{},A=D.upcomingOnly,S=A===void 0?!1:A;_(),g=!S}function y(){for(var L=arguments.length,D=new Array(L),A=0;A<L;A++)D[A]=arguments[A];var S=this,ee=Date.now()-m;if(g)return;function me(){m=Date.now(),e.apply(S,D)}function Ot(){h=void 0}!l&&u&&!h&&me(),_(),u===void 0&&ee>s?l?(m=Date.now(),n||(h=setTimeout(u?Ot:me,s))):me():n!==!0&&(h=setTimeout(u?Ot:me,u===void 0?s-ee:s))}return y.cancel=C,y}var X;(function(s){s.Open="open",s.Closed="closed"})(X||(X={}));class Jr{constructor(e){this.windowResizeThrottler=Zr(100,this.updateModalContainerHeight,{noLeading:!1,noTrailing:!1}).bind(this),this.modalManager=e}handleModeChange(e){switch(e){case X.Open:this.startResizeListener(),this.stopDocumentScroll();break;case X.Closed:this.stopResizeListener(),this.resumeDocumentScroll();break}}updateModalContainerHeight(){this.modalManager.style.setProperty("--containerHeight",`${window.innerHeight}px`)}stopDocumentScroll(){document.body.classList.add("modal-manager-open")}resumeDocumentScroll(){document.body.classList.remove("modal-manager-open")}startResizeListener(){window.addEventListener("resize",this.windowResizeThrottler)}stopResizeListener(){window.removeEventListener("resize",this.windowResizeThrottler)}}let ue=class extends T{constructor(){super(...arguments),this.mode=X.Closed,this.hostBridge=new Jr(this),this.modal=new Vr(this),this.closeOnBackdropClick=!0}firstUpdated(){return Dt(this,void 0,void 0,function*(){yield new Promise(e=>setTimeout(e,0)),this.closeOnBackdropClick&&this.addEventListener("keydown",e=>{e.key==="Escape"&&this.backdropClicked()})})}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate()}render(){return w`
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          tabindex="-1"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `}getMode(){return this.mode}closeModal(){this.mode=X.Closed,this.customModalContent=void 0,this.modalTemplate.config=new qe,this.modal.deactivate()}callUserClosedModalCallback(){const e=this.userClosedModalCallback;this.userClosedModalCallback=void 0,e&&e()}showModal(e){return Dt(this,void 0,void 0,function*(){this.closeOnBackdropClick=e.config.closeOnBackdropClick,this.userClosedModalCallback=e.userClosedModalCallback,this.modalTemplate.config=e.config,this.customModalContent=e.customModalContent,this.mode=X.Open,yield this.modalTemplate.updateComplete,this.modalTemplate.focus(),this.modal.activate()})}updated(e){e.has("mode")&&this.handleModeChange()}backdropClicked(){this.closeOnBackdropClick&&(this.closeModal(),this.callUserClosedModalCallback())}handleModeChange(){this.hostBridge.handleModeChange(this.mode),this.emitModeChangeEvent()}emitModeChangeEvent(){const e=new CustomEvent("modeChanged",{detail:{mode:this.mode}});this.dispatchEvent(e)}closeButtonPressed(){this.closeModal(),this.callUserClosedModalCallback()}static get styles(){const e=f`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`,t=f`var(--modalBackdropZindex, 1000)`,i=f`var(--modalWidth, 32rem)`,r=f`var(--modalMaxWidth, 95%)`,n=f`var(--modalZindex, 2000)`;return f`
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
    `}};d([b({type:String,reflect:!0})],ue.prototype,"mode",void 0);d([b({type:Object})],ue.prototype,"customModalContent",void 0);d([b({type:Object})],ue.prototype,"hostBridge",void 0);d([H("modal-template")],ue.prototype,"modalTemplate",void 0);ue=d([j("modal-manager")],ue);async function Xr(s,e,t){let i=document.querySelector("modal-manager");if(!i){const n=document.querySelector("body");i=document.createElement("modal-manager"),n==null||n.appendChild(i)}const r=()=>{const n=i??document.querySelector("modal-manager");n==null||n.showModal({config:new qe,customModalContent:void 0,userClosedModalCallback:void 0}),n==null||n.closeModal(),i==null||i.removeAttribute("id")};i==null||i.setAttribute("id","create-user-list-modal"),i.showModal({config:new qe({title:w`List settings`,headerColor:"#194880",showCloseButton:!0,showHeaderLogo:!1,closeOnBackdropClick:!0}),userClosedModalCallback:()=>r(),customModalContent:w`
      <iaux-userlist-settings
        .userList=${{id:void 0,list_name:"",description:"",is_private:!1}}
        .userListsService=${s}
        @listModalClosed=${()=>r()}
        @userListError=${n=>{var o,l,a,u;const h=(u=(l=(o=n.detail.error)===null||o===void 0?void 0:o.reason)!==null&&l!==void 0?l:(a=n.detail.error)===null||a===void 0?void 0:a.message)!==null&&u!==void 0?u:"Unknown error from iaux-userlist-settings";console==null||console.error("userListSettingsError",h)}}
        @userListSaving=${async()=>{e==null||e()}}
        @userListSaved=${async n=>{await(t==null?void 0:t(n.detail.id)),r()}}
      ></iaux-userlist-settings>
    `})}const Mi=Ke`<svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      >
    <g fill="currentColor" fill-rule="nonzero">
      <path d="m49.9459358 0c13.7978412 0 25.5896453 4.88776371 35.3754122 14.6632911 9.7857669 9.7755275 14.678652 21.554993 14.678652 35.3383967 0 13.7800281-4.8928851 25.5594936-14.678652 35.3350211-9.7857669 9.7755274-21.577571 14.6632911-35.3754122 14.6632911s-25.5716235-4.8877637-35.3213471-14.6632911c-9.74972353-9.7755275-14.6245887-21.554993-14.6245887-35.3383967-.00224931-9.0014064 2.23243779-17.3524613 6.70406469-25.0531645 4.47162691-7.7007033 10.54380341-13.7834037 18.21652941-18.24810129 7.6727261-4.46469761 16.0145067-6.69704641 25.0253417-6.69704641zm0 6c-7.9548389 0-15.2549008 1.95357387-22.0076943 5.8829701-6.7720278 3.9405885-12.0963254 9.2741139-16.0455165 16.0751171-3.93842488 6.7824623-5.89471047 14.0931257-5.89272481 22.040225 0 12.1941053 4.24437231 22.4500702 12.87283241 31.1013666 8.6242501 8.6470752 18.8695883 12.9003212 31.0731032 12.9003212 12.2065273 0 22.4734846-4.2557068 31.1349929-12.9081521 8.6603017-8.6512398 12.9190715-18.9040965 12.9190715-31.0935357l-.0036695-.6147591c-.1419586-11.9183989-4.4018851-21.9707923-12.915402-30.475401-8.6615083-8.6524453-18.9284656-12.9081521-31.1349929-12.9081521z" />
      <path d="m56 23v22h22v11h-22v22h-11l-.001-22h-21.999v-11h21.999l.001-22z" />
    </g>
  </svg>`,Ei=Ke`<svg viewBox="0 0 100 100"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="m33.3333333 90-33.3333333-33.3333333 13.3333333-13.3333334 20 20 53.3333334-53.3333333 13.3333333 13.3333333z"
  fill-rule="evenodd" fill="currentColor"
/>
</svg>`;let Se=class extends T{constructor(){super(...arguments),this.itemId="",this.lists=[],this.closeDropdown=()=>{this.dispatchEvent(new CustomEvent("closeDropdown",{bubbles:!0,composed:!0}))},this.selectDropdown=()=>{this.dispatchEvent(new CustomEvent("selectDropdown",{bubbles:!0,composed:!0}))},this.updateDropdown=()=>{this.dispatchEvent(new CustomEvent("updateDropdown",{bubbles:!0,composed:!0}))},this.optionClicked=(e,t)=>{var i;e.stopPropagation(),(i=t.selectedHandler)===null||i===void 0||i.call(t,t)},this.onSelected=async e=>{this.selectDropdown();const t=this.lists.find(i=>e.id===i.id)||{};t.item_is_member?await this.removeMember(t.id,t.member_id):await this.addMember(t.id),this.updateDropdown()},this.addCreatedList=async e=>{await this.addMember(e),this.dispatchEvent(new CustomEvent("listCreated",{detail:{totalLists:this.lists.length}})),this.updateDropdown()},this.createList=()=>{this.closeDropdown(),Xr(this.userListsService,this.selectDropdown,this.addCreatedList)},this.userListOptions=()=>{let e=[];return e=this.lists.map(t=>this.listOption(t)),e.push(this.newListOption),e}}listOption(e){return{id:e.id,label:this.labelTemplate(e),isSelected:e.item_is_member,selectedHandler:t=>this.onSelected(t)}}get newListOption(){return{id:"create-new-list",label:w` <ia-icon-label>
        <div slot="icon" class="icon-size">${Mi}</div>
        Create new list
      </ia-icon-label>`,selectedHandler:()=>this.createList()}}async addMember(e){var t;await((t=this.userListsService)===null||t===void 0?void 0:t.addMemberToList(e,{identifier:this.itemId})),this.dispatchEvent(new CustomEvent("addMember",{detail:{listId:e,itemId:this.itemId}}))}async removeMember(e,t){var i;await((i=this.userListsService)===null||i===void 0?void 0:i.removeMemberFromList(e,t)),this.dispatchEvent(new CustomEvent("removeMember",{detail:{listId:e,itemId:this.itemId}}))}labelTemplate(e){const{item_is_member:t,list_name:i}=e;return w`
      <ia-icon-label>
        <div slot="icon" class="icon-size">
          ${t?Ei:$}
        </div>
        <div class="truncate">${i}</div>
      </ia-icon-label>
    `}optionTemplate(e){return w` <li class="${e.isSelected?"selected":""}">
      ${this.buttonTemplate(e)}
    </li>`}buttonTemplate(e){return w`
      <button @click=${t=>this.optionClicked(t,e)}>
        ${e.label}
      </button>
    `}render(){return w` ${this.userListOptions().map(e=>this.optionTemplate(e))} `}static get styles(){return f`
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
    `}};d([b({type:String})],Se.prototype,"itemId",void 0);d([b({type:Array})],Se.prototype,"lists",void 0);d([b({type:Object})],Se.prototype,"userListsService",void 0);Se=d([j("item-user-lists")],Se);const ci=w`<img
  src="https://archive.org/images/loading.gif"
  alt="Loading..."
/>`;let P=class extends T{constructor(){super(...arguments),this.baseHost="archive.org",this.item="",this.selectedCount=0,this.userListData=[],this.dataAction="initial",this.userListsService=ai.create({serviceUrl:this.baseHost}),this.listID="",this.closeListener=()=>{this.dropdown.open=!1},this.selectListener=()=>{this.dropdown.open=!1,this.dataActionTask.run(["initial"])},this.updateListener=()=>{this.dataActionTask.run(["load"])},this.dataActionTask=new Yi(this,{task:async([e])=>{if(!this.item||!this.userListsService)return gt;switch(e){case"load":return this.updateSelectedCount();default:return gt}},args:()=>[this.dataAction],autoRun:!1})}async dropdownClicked(e){e.preventDefault(),this.dropdown.open?this.dropdown.open=!1:(await this.dataActionTask.run(["load"]),this.dropdown.open=!0)}async firstUpdated(){var e;await new Promise(t=>setTimeout(t,0)),this.addEventListener("closeDropdown",this.closeListener),this.addEventListener("selectDropdown",this.selectListener),this.addEventListener("updateDropdown",this.updateListener),(e=this.dataActionTask.run(["load"]))===null||e===void 0||e.then(()=>{this.dispatchEvent(new CustomEvent("userItemListDataReceived",{detail:{total_lists:this.userListData.length}}))})}updated(e){e.has("baseHost")&&this.baseHost&&e.get("baseHost")&&this.reloadService()}reloadService(){this.userListsService=ai.create({serviceUrl:this.baseHost}),this.dataActionTask.run(["load"])}async updateItemUserList(){var e;const t=await this.userListsService.fetchOwnListsContainingItem(this.item);if(!t.success)throw new Error((e=t.error)===null||e===void 0?void 0:e.message);return this.userListData=t.success,this.userListData}async updateSelectedCount(){const e=await this.updateItemUserList();return this.selectedCount=e.filter(t=>t.item_is_member).length,this.selectedCount}renderIcon(e){return w`
      <div slot="icon" class="icon-img">${e}</div>
      <div class="label">
        <div class="def">Add to list</div>
        <div class="sm">Lists</div>
      </div>
    `}renderError(){return w`
      <div class="label">User Lists<br />Load Error</div>
      <div class="label-sm">Load<br />Error</div>
    `}mainButton(e){return w`
      <div class="action-bar-text">
        <ia-icon-label>
          ${e?this.renderIcon(e):this.renderError()}
        </ia-icon-label>
      </div>
    `}get isFetched(){return this.dataActionTask.status===ti.COMPLETE}get isDisabled(){return this.dataActionTask.status!==ti.COMPLETE}get itemUserListsTemplate(){return w`
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
          @click=${this.isDisabled?$:this.dropdownClicked}
        >
          <div class="list-title" slot="dropdown-label">
            ${this.dataActionTask.render({initial:()=>this.mainButton(ci),pending:()=>this.mainButton(ci),complete:e=>this.mainButton(e===0?Mi:Ei),error:()=>this.mainButton(void 0)})}
          </div>
          ${this.itemUserListsTemplate}
        </ia-dropdown>
      </div>
    `}};P.styles=f`
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
      padding-bottom: 2px;
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
      font-family: inherit;
    }

    .action-bar-text .label {
      display: flex;
      align-items: center;
    }

    /* inside button.click-main, classname from details.inc buttons */
    @media (min-width: 992px) {
      .action-bar-text .label {
        height: 20px;
      }
      .action-bar-text .label .sm {
        display: none;
      }
    }

    /* List button */
    @media (max-width: 991px) {
      .action-bar-text .label {
        height: 15px;
      }
      .action-bar-text .label .def {
        display: none;
      }
      .action-bar-text .label .sm {
        font-size: 13px;
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
  `;d([b({type:String})],P.prototype,"baseHost",void 0);d([b({type:String})],P.prototype,"item",void 0);d([Ze()],P.prototype,"selectedCount",void 0);d([Ze({hasChanged(s,e){if((s==null?void 0:s.length)!==(e==null?void 0:e.length))return!0;for(let t=0;t<s.length;t+=1)if(s[t].item_is_member!==e[t].item_is_member)return!0;return!1}})],P.prototype,"userListData",void 0);d([Ze()],P.prototype,"dataAction",void 0);d([Ze()],P.prototype,"userListsService",void 0);d([H("ia-dropdown")],P.prototype,"dropdown",void 0);P=d([j("ia-item-user-lists")],P);let he=class extends T{constructor(){super(...arguments),this.itemId="goody",this.baseHost="archive.org"}render(){return w`
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
    `}async changeBaseHost(e){var t;const i=e==null?void 0:e.target,r=(t=i==null?void 0:i.querySelector("input"))===null||t===void 0?void 0:t.value;console.log("changeBaseHost",{old:this.baseHost,new:r}),this.baseHost=r,await this.iaItemUserLists.updateComplete,console.log("userlistUpdated",this.iaItemUserLists.baseHost),e.preventDefault()}};he.styles=f`
    :host {
      display: block;
    }
    div {
      display: flex;
    }
  `;d([b({type:String})],he.prototype,"itemId",void 0);d([b({type:String})],he.prototype,"baseHost",void 0);d([H("ia-item-user-lists")],he.prototype,"iaItemUserLists",void 0);he=d([j("app-root")],he);
