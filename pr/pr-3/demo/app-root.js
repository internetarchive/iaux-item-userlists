(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function s(n,e,t,i){var r=arguments.length,a=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,e,t,i);else for(var d=n.length-1;d>=0;d--)(o=n[d])&&(a=(r<3?o(a):r>3?o(e,t,a):o(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a}function Q(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function Ct(n,e,t,i){function r(a){return a instanceof t?a:new t(function(o){o(a)})}return new(t||(t=Promise))(function(a,o){function d(p){try{v(i.next(p))}catch(g){o(g)}}function u(p){try{v(i.throw(p))}catch(g){o(g)}}function v(p){p.done?a(p.value):r(p.value).then(d,u)}v((i=i.apply(n,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=window,Ze=pe.ShadowRoot&&(pe.ShadyCSS===void 0||pe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Je=Symbol(),tt=new WeakMap;let gt=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Je)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ze&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=tt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&tt.set(t,e))}return e}toString(){return this.cssText}};const Et=n=>new gt(typeof n=="string"?n:n+"",void 0,Je),f=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,r,a)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[a+1],n[0]);return new gt(t,n,Je)},St=(n,e)=>{Ze?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=pe.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,n.appendChild(i)})},it=Ze?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Et(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xe;const ge=window,rt=ge.trustedTypes,At=rt?rt.emptyScript:"",nt=ge.reactiveElementPolyfillSupport,Pe={toAttribute(n,e){switch(e){case Boolean:n=n?At:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},mt=(n,e)=>e!==n&&(e==e||n==n),Ce={attribute:!0,type:String,converter:Pe,reflect:!1,hasChanged:mt};let F=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=Ce){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const a=this[e];this[t]=r,this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ce}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(it(r))}else e!==void 0&&t.push(it(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return St(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Ce){var r;const a=this.constructor._$Ep(e,i);if(a!==void 0&&i.reflect===!0){const o=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:Pe).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$El=null}}_$AK(e,t){var i;const r=this.constructor,a=r._$Ev.get(e);if(a!==void 0&&this._$El!==a){const o=r.getPropertyOptions(a),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:Pe;this._$El=a,this[a]=d.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||mt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,a)=>this[a]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var a;return(a=r.hostUpdate)===null||a===void 0?void 0:a.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};F.finalized=!0,F.elementProperties=new Map,F.elementStyles=[],F.shadowRootOptions={mode:"open"},nt==null||nt({ReactiveElement:F}),((xe=ge.reactiveElementVersions)!==null&&xe!==void 0?xe:ge.reactiveElementVersions=[]).push("1.6.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ee;const me=window,W=me.trustedTypes,at=W?W.createPolicy("lit-html",{createHTML:n=>n}):void 0,De="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,wt="?"+O,Tt=`<${wt}>`,z=document,ae=()=>z.createComment(""),oe=n=>n===null||typeof n!="object"&&typeof n!="function",_t=Array.isArray,Ut=n=>_t(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Se=`[ 	
\f\r]`,te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ot=/-->/g,st=/>/g,R=RegExp(`>|${Se}(?:([^\\s"'>=/]+)(${Se}*=${Se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lt=/'/g,dt=/"/g,bt=/^(?:script|style|textarea|title)$/i,yt=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),b=yt(1),we=yt(2),G=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),ut=new WeakMap,P=z.createTreeWalker(z,129,null,!1);function Mt(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return at!==void 0?at.createHTML(e):e}const Bt=(n,e)=>{const t=n.length-1,i=[];let r,a=e===2?"<svg>":"",o=te;for(let d=0;d<t;d++){const u=n[d];let v,p,g=-1,w=0;for(;w<u.length&&(o.lastIndex=w,p=o.exec(u),p!==null);)w=o.lastIndex,o===te?p[1]==="!--"?o=ot:p[1]!==void 0?o=st:p[2]!==void 0?(bt.test(p[2])&&(r=RegExp("</"+p[2],"g")),o=R):p[3]!==void 0&&(o=R):o===R?p[0]===">"?(o=r??te,g=-1):p[1]===void 0?g=-2:(g=o.lastIndex-p[2].length,v=p[1],o=p[3]===void 0?R:p[3]==='"'?dt:lt):o===dt||o===lt?o=R:o===ot||o===st?o=te:(o=R,r=void 0);const M=o===R&&n[d+1].startsWith("/>")?" ":"";a+=o===te?u+Tt:g>=0?(i.push(v),u.slice(0,g)+De+u.slice(g)+O+M):u+O+(g===-2?(i.push(void 0),d):M)}return[Mt(n,a+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};class se{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let a=0,o=0;const d=e.length-1,u=this.parts,[v,p]=Bt(e,t);if(this.el=se.createElement(v,i),P.currentNode=this.el.content,t===2){const g=this.el.content,w=g.firstChild;w.remove(),g.append(...w.childNodes)}for(;(r=P.nextNode())!==null&&u.length<d;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const w of r.getAttributeNames())if(w.endsWith(De)||w.startsWith(O)){const M=p[o++];if(g.push(w),M!==void 0){const A=r.getAttribute(M.toLowerCase()+De).split(O),k=/([.?@])?(.*)/.exec(M);u.push({type:1,index:a,name:k[2],strings:A,ctor:k[1]==="."?Nt:k[1]==="?"?It:k[1]==="@"?Pt:$e})}else u.push({type:6,index:a})}for(const w of g)r.removeAttribute(w)}if(bt.test(r.tagName)){const g=r.textContent.split(O),w=g.length-1;if(w>0){r.textContent=W?W.emptyScript:"";for(let M=0;M<w;M++)r.append(g[M],ae()),P.nextNode(),u.push({type:2,index:++a});r.append(g[w],ae())}}}else if(r.nodeType===8)if(r.data===wt)u.push({type:2,index:a});else{let g=-1;for(;(g=r.data.indexOf(O,g+1))!==-1;)u.push({type:7,index:a}),g+=O.length-1}a++}}static createElement(e,t){const i=z.createElement("template");return i.innerHTML=e,i}}function Z(n,e,t=n,i){var r,a,o,d;if(e===G)return e;let u=i!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[i]:t._$Cl;const v=oe(e)?void 0:e._$litDirective$;return(u==null?void 0:u.constructor)!==v&&((a=u==null?void 0:u._$AO)===null||a===void 0||a.call(u,!1),v===void 0?u=void 0:(u=new v(n),u._$AT(n,t,i)),i!==void 0?((o=(d=t)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=u:t._$Cl=u),u!==void 0&&(e=Z(n,u._$AS(n,e.values),u,i)),e}class Ot{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:r}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:z).importNode(i,!0);P.currentNode=a;let o=P.nextNode(),d=0,u=0,v=r[0];for(;v!==void 0;){if(d===v.index){let p;v.type===2?p=new ue(o,o.nextSibling,this,e):v.type===1?p=new v.ctor(o,v.name,v.strings,this,e):v.type===6&&(p=new Dt(o,this,e)),this._$AV.push(p),v=r[++u]}d!==(v==null?void 0:v.index)&&(o=P.nextNode(),d++)}return P.currentNode=z,a}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ue{constructor(e,t,i,r){var a;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cp=(a=r==null?void 0:r.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),oe(e)?e===L||e==null||e===""?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==G&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ut(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==L&&oe(this._$AH)?this._$AA.nextSibling.data=e:this.$(z.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=se.createElement(Mt(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(i);else{const o=new Ot(a,this),d=o.u(this.options);o.v(i),this.$(d),this._$AH=o}}_$AC(e){let t=ut.get(e.strings);return t===void 0&&ut.set(e.strings,t=new se(e)),t}T(e){_t(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const a of e)r===t.length?t.push(i=new ue(this.k(ae()),this.k(ae()),this,this.options)):i=t[r],i._$AI(a),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class $e{constructor(e,t,i,r,a){this.type=1,this._$AH=L,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const a=this.strings;let o=!1;if(a===void 0)e=Z(this,e,t,0),o=!oe(e)||e!==this._$AH&&e!==G,o&&(this._$AH=e);else{const d=e;let u,v;for(e=a[0],u=0;u<a.length-1;u++)v=Z(this,d[i+u],t,u),v===G&&(v=this._$AH[u]),o||(o=!oe(v)||v!==this._$AH[u]),v===L?e=L:e!==L&&(e+=(v??"")+a[u+1]),this._$AH[u]=v}o&&!r&&this.j(e)}j(e){e===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Nt extends $e{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===L?void 0:e}}const Rt=W?W.emptyScript:"";class It extends $e{constructor(){super(...arguments),this.type=4}j(e){e&&e!==L?this.element.setAttribute(this.name,Rt):this.element.removeAttribute(this.name)}}class Pt extends $e{constructor(e,t,i,r,a){super(e,t,i,r,a),this.type=5}_$AI(e,t=this){var i;if((e=(i=Z(this,e,t,0))!==null&&i!==void 0?i:L)===G)return;const r=this._$AH,a=e===L&&r!==L||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==L&&(r===L||a);a&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Dt{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const ct=me.litHtmlPolyfillSupport;ct==null||ct(se,ue),((Ee=me.litHtmlVersions)!==null&&Ee!==void 0?Ee:me.litHtmlVersions=[]).push("2.8.0");const zt=(n,e,t)=>{var i,r;const a=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=a._$litPart$;if(o===void 0){const d=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;a._$litPart$=o=new ue(e.insertBefore(ae(),d),d,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ae,Te;class x extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=zt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return G}}x.finalized=!0,x._$litElement$=!0,(Ae=globalThis.litElementHydrateSupport)===null||Ae===void 0||Ae.call(globalThis,{LitElement:x});const ht=globalThis.litElementPolyfillSupport;ht==null||ht({LitElement:x});((Te=globalThis.litElementVersions)!==null&&Te!==void 0?Te:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=n=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(n,e):((t,i)=>{const{kind:r,elements:a}=i;return{kind:r,elements:a,finisher(o){customElements.define(t,o)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}};function C(n){return(e,t)=>t!==void 0?((i,r,a)=>{r.constructor.createProperty(a,i)})(n,e,t):Ht(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Le(n){return C({...n,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft=({finisher:n,descriptor:e})=>(t,i)=>{var r;if(i===void 0){const a=(r=t.originalKey)!==null&&r!==void 0?r:t.key,o=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(t.key)}:{...t,key:a};return n!=null&&(o.finisher=function(d){n(d,a)}),o}{const a=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),n==null||n(a,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ee(n,e){return Ft({descriptor:t=>{const i={get(){var r,a;return(a=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var a,o;return this[r]===void 0&&(this[r]=(o=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(n))!==null&&o!==void 0?o:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ue;((Ue=window.HTMLSlotElement)===null||Ue===void 0?void 0:Ue.prototype.assignedElements)!=null;const vt=f`var(--white, #fff)`,jt=f`var(--primaryDisableCTAFill, #767676)`,qt=f`var(--secondaryCTABorder, #999)`,Vt=f`var(--primaryCTAFill, #194880)`,Be=f`var(--primaryCTAFillRGB, 25, 72, 128)`,Wt=f`var(--primaryCTABorder, #c5d1df)`,Gt=f`var(--primaryErrorCTAFill, #d9534f)`,Oe=f`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,Zt=f`var(--primaryErrorCTABorder, #d43f3a)`,Jt=f`var(--secondaryCTAFill, #333)`,Ne=f`var(--secondaryCTAFillRGB, 51, 51, 51)`,Kt=f`var(--primaryCTABorder, #979797)`,Xt=f`#ee8950`,Qt=f`#ec7939`,Yt=f`
  .ia-button {
    min-height: 3rem;
    cursor: pointer;
    color: ${vt};
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
    outline-color: ${vt};
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
    background-color: ${jt};
    border: 1px solid ${qt};
  }
  .ia-button.transparent {
    background-color: transparent;
  }
  .ia-button.warning {
    background-color: ${Xt}
    border-color: ${Qt};
  }

  .ia-button.primary {
    background-color: ${Vt};
    border-color: ${Wt};
  }
  .ia-button.primary:hover {
    background-color: rgba(${Be}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${Be}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${Be}, 0.7);
  }

  .ia-button.danger {
    background-color: ${Gt};
    border-color: ${Zt};
  }
  .ia-button.danger:hover {
    background-color: rgba(${Oe}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${Oe}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${Oe}, 0.7);
  }

  .ia-button.dark {
    background-color: ${Jt};
    border-color: ${Kt};
  }
  .ia-button.dark:hover {
    background-color: rgba(${Ne}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${Ne}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${Ne}, 0.7);
  }
`;function l(n){let e,t,i;return typeof n=="object"?(e=n.hashFunction,t=n.expiring,i=n.tags):e=n,(r,a,o)=>{if(o.value!=null)o.value=pt(o.value,e,t,i);else if(o.get!=null)o.get=pt(o.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Re=new Map;function pt(n,e,t=0,i){const r=Symbol("__memoized_map__");return function(...a){let o;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let d=this[r];if(Array.isArray(i))for(const u of i)Re.has(u)?Re.get(u).push(d):Re.set(u,[d]);if(e||a.length>0||t>0){let u;e===!0?u=a.map(g=>g.toString()).join("!"):e?u=e.apply(this,a):u=a[0];const v=`${u}__timestamp`;let p=!1;if(t>0)if(!d.has(v))p=!0;else{let g=d.get(v);p=Date.now()-g>t}d.has(u)&&!p?o=d.get(u):(o=n.apply(this,a),d.set(u,o),t>0&&d.set(v,Date.now()))}else{const u=this;d.has(u)?o=d.get(u):(o=n.apply(this,a),d.set(u,o))}return o}}class ze{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:Boolean(e)}}ze.shared=new ze;class le{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}le.shared=new le;class _e{parseValue(e){return le.shared.parseValue(e)}}_e.shared=new _e;class He{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}He.shared=new He;class Fe{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let i;return t.length===1?i=this.parseNumberFormat(t[0]):i=this.parseColonSeparatedFormat(t),i}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const i=e.map((r,a)=>{const o=parseFloat(r);if(Number.isNaN(o))return t=!0,0;const u=60**(e.length-1-a);return o*Math.floor(u)}).reduce((r,a)=>r+a,0);return t?void 0:i}}Fe.shared=new Fe;class je{parseValue(e){if(typeof e=="string")return e}}je.shared=new je;class ei{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let i=[];for(const r of this.separators)if(i=t.split(r),i.length>1)break;return this.parseListValues(i)}parseListValues(e){const i=e.map(a=>a.trim()).map(a=>this.parser.parseValue(a)),r=[];return i.forEach(a=>{a!==void 0&&r.push(a)}),r}}class qe{parseValue(e){if(typeof e=="string")return e}}qe.shared=new qe;class be{parseValue(e){return String(e)}}be.shared=new be;class E{constructor(e,t){this.parser=e,this.rawValue=t}get values(){return this.parseRawValue()}get value(){return this.values[0]}parseRawValue(){if(this.rawValue===void 0)return[];const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const r=this.parser.parseValue(i);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}s([l()],E.prototype,"values",null);s([l()],E.prototype,"value",null);class j extends E{constructor(e){super(ze.shared,e)}}class $ extends E{constructor(e){super(He.shared,e)}}class Ie extends E{constructor(e){super(Fe.shared,e)}}class _ extends E{constructor(e){super(le.shared,e)}}class h extends E{constructor(e){super(be.shared,e)}}class ti extends E{constructor(e){super(qe.shared,e)}}class ye extends E{constructor(e){super(_e.shared,e)}}class Ke extends E{constructor(e){super(je.shared,e)}}class ii extends E{constructor(e,t){super(t,e)}}class ri extends ii{constructor(e){const t=new ei(be.shared);super(e,t)}}class c{constructor(e){this.rawMetadata=e}get identifier(){var e;return(e=this.rawMetadata)===null||e===void 0?void 0:e.identifier}get addeddate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.addeddate?new $(this.rawMetadata.addeddate):void 0}get audio_codec(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.audio_codec?new h(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.audio_sample_rate?new _(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.avg_rating?new _(this.rawMetadata.avg_rating):void 0}get collection(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection?new h(this.rawMetadata.collection):void 0}get collections_raw(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collections_raw?new h(this.rawMetadata.collections_raw):void 0}get collection_size(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection_size?new ye(this.rawMetadata.collection_size):void 0}get contributor(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.contributor?new h(this.rawMetadata.contributor):void 0}get coverage(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.coverage?new h(this.rawMetadata.coverage):void 0}get creator(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.creator?new h(this.rawMetadata.creator):void 0}get date(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.date?new $(this.rawMetadata.date):void 0}get description(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.description?new h(this.rawMetadata.description):void 0}get downloads(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.downloads?new _(this.rawMetadata.downloads):void 0}get duration(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.duration?new Ie(this.rawMetadata.duration):void 0}get"external-identifier"(){var e,t;return!((e=this.rawMetadata)===null||e===void 0)&&e["external-identifier"]?new h((t=this.rawMetadata)===null||t===void 0?void 0:t["external-identifier"]):void 0}get files_count(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.files_count?new _(this.rawMetadata.files_count):void 0}get indexdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.indexdate?new $(this.rawMetadata.indexdate):void 0}get isbn(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.isbn?new h(this.rawMetadata.isbn):void 0}get issue(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.issue?new h(this.rawMetadata.issue):void 0}get item_count(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.item_count?new _(this.rawMetadata.item_count):void 0}get item_size(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.item_size?new ye(this.rawMetadata.item_size):void 0}get language(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.language?new h(this.rawMetadata.language):void 0}get length(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.length?new Ie(this.rawMetadata.length):void 0}get lineage(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.lineage?new h(this.rawMetadata.lineage):void 0}get month(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.month?new _(this.rawMetadata.month):void 0}get mediatype(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.mediatype?new Ke(this.rawMetadata.mediatype):void 0}get noindex(){var e;return((e=this.rawMetadata)===null||e===void 0?void 0:e.noindex)!=null?new j(this.rawMetadata.noindex):void 0}get notes(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.notes?new h(this.rawMetadata.notes):void 0}get num_favorites(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.num_favorites?new _(this.rawMetadata.num_favorites):void 0}get num_reviews(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.num_reviews?new _(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.openlibrary_edition?new h(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.openlibrary_work?new h(this.rawMetadata.openlibrary_work):void 0}get page_progression(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.page_progression?new ti(this.rawMetadata.page_progression):void 0}get partner(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.partner?new h(this.rawMetadata.partner):void 0}get ppi(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.ppi?new _(this.rawMetadata.ppi):void 0}get publicdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.publicdate?new $(this.rawMetadata.publicdate):void 0}get publisher(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.publisher?new h(this.rawMetadata.publisher):void 0}get reviewdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.reviewdate?new $(this.rawMetadata.reviewdate):void 0}get runtime(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.runtime?new Ie(this.rawMetadata.runtime):void 0}get scanner(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.scanner?new h(this.rawMetadata.scanner):void 0}get source(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.source?new h(this.rawMetadata.source):void 0}get start_localtime(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.start_localtime?new $(this.rawMetadata.start_localtime):void 0}get start_time(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.start_time?new $(this.rawMetadata.start_time):void 0}get stop_time(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.stop_time?new $(this.rawMetadata.stop_time):void 0}get subject(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.subject?new ri(this.rawMetadata.subject):void 0}get taper(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.taper?new h(this.rawMetadata.taper):void 0}get title(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.title?new h(this.rawMetadata.title):void 0}get transferer(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.transferer?new h(this.rawMetadata.transferer):void 0}get track(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.track?new _(this.rawMetadata.track):void 0}get type(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.type?new h(this.rawMetadata.type):void 0}get uploader(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.uploader?new h(this.rawMetadata.uploader):void 0}get utc_offset(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.utc_offset?new _(this.rawMetadata.utc_offset):void 0}get venue(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.venue?new h(this.rawMetadata.venue):void 0}get volume(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.volume?new h(this.rawMetadata.volume):void 0}get week(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.week?new _(this.rawMetadata.week):void 0}get year(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.year?new $(this.rawMetadata.year):void 0}get query(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.query?new h(this.rawMetadata.fields.query):void 0}get date_favorited(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date_favorited?new $(this.rawMetadata.fields.date_favorited):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new h(this.rawMetadata.fields.__href__):void 0}}s([l()],c.prototype,"addeddate",null);s([l()],c.prototype,"audio_codec",null);s([l()],c.prototype,"audio_sample_rate",null);s([l()],c.prototype,"avg_rating",null);s([l()],c.prototype,"collection",null);s([l()],c.prototype,"collections_raw",null);s([l()],c.prototype,"collection_size",null);s([l()],c.prototype,"contributor",null);s([l()],c.prototype,"coverage",null);s([l()],c.prototype,"creator",null);s([l()],c.prototype,"date",null);s([l()],c.prototype,"description",null);s([l()],c.prototype,"downloads",null);s([l()],c.prototype,"duration",null);s([l()],c.prototype,"external-identifier",null);s([l()],c.prototype,"files_count",null);s([l()],c.prototype,"indexdate",null);s([l()],c.prototype,"isbn",null);s([l()],c.prototype,"issue",null);s([l()],c.prototype,"item_count",null);s([l()],c.prototype,"item_size",null);s([l()],c.prototype,"language",null);s([l()],c.prototype,"length",null);s([l()],c.prototype,"lineage",null);s([l()],c.prototype,"month",null);s([l()],c.prototype,"mediatype",null);s([l()],c.prototype,"noindex",null);s([l()],c.prototype,"notes",null);s([l()],c.prototype,"num_favorites",null);s([l()],c.prototype,"num_reviews",null);s([l()],c.prototype,"openlibrary_edition",null);s([l()],c.prototype,"openlibrary_work",null);s([l()],c.prototype,"page_progression",null);s([l()],c.prototype,"partner",null);s([l()],c.prototype,"ppi",null);s([l()],c.prototype,"publicdate",null);s([l()],c.prototype,"publisher",null);s([l()],c.prototype,"reviewdate",null);s([l()],c.prototype,"runtime",null);s([l()],c.prototype,"scanner",null);s([l()],c.prototype,"source",null);s([l()],c.prototype,"start_localtime",null);s([l()],c.prototype,"start_time",null);s([l()],c.prototype,"stop_time",null);s([l()],c.prototype,"subject",null);s([l()],c.prototype,"taper",null);s([l()],c.prototype,"title",null);s([l()],c.prototype,"transferer",null);s([l()],c.prototype,"track",null);s([l()],c.prototype,"type",null);s([l()],c.prototype,"uploader",null);s([l()],c.prototype,"utc_offset",null);s([l()],c.prototype,"venue",null);s([l()],c.prototype,"volume",null);s([l()],c.prototype,"week",null);s([l()],c.prototype,"year",null);s([l()],c.prototype,"query",null);s([l()],c.prototype,"date_favorited",null);s([l()],c.prototype,"__href__",null);class m{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new $(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating)!=null?new _(this.rawMetadata.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new h(this.rawMetadata.fields.collection):void 0}get collection_files_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.collection_files_count)!=null?new _(this.rawMetadata.fields.collection_files_count):void 0}get collection_size(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.collection_size)!=null?new ye(this.rawMetadata.fields.collection_size):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new h(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new $(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new h(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads)!=null?new _(this.rawMetadata.fields.downloads):void 0}get files_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.files_count)!=null?new _(this.rawMetadata.fields.files_count):void 0}get genre(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.genre?new h(this.rawMetadata.fields.genre):void 0}get indexflag(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.indexflag?new h(this.rawMetadata.fields.indexflag):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new h(this.rawMetadata.fields.issue):void 0}get item_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.item_count)!=null?new _(this.rawMetadata.fields.item_count):void 0}get item_size(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.item_size)!=null?new ye(this.rawMetadata.fields.item_size):void 0}get language(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.language?new h(this.rawMetadata.fields.language):void 0}get lending___available_to_borrow(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_borrow)!=null?new j(this.rawMetadata.fields.lending___available_to_borrow):void 0}get lending___available_to_browse(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_browse)!=null?new j(this.rawMetadata.fields.lending___available_to_browse):void 0}get lending___available_to_waitlist(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_waitlist)!=null?new j(this.rawMetadata.fields.lending___available_to_waitlist):void 0}get lending___status(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.lending___status?new h(this.rawMetadata.fields.lending___status):void 0}get licenseurl(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.licenseurl?new h(this.rawMetadata.fields.licenseurl):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new Ke(this.rawMetadata.fields.mediatype):void 0}get month(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.month)!=null?new _(this.rawMetadata.fields.month):void 0}get noindex(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.noindex)!=null?new j(this.rawMetadata.fields.noindex):void 0}get num_favorites(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.num_favorites)!=null?new _(this.rawMetadata.fields.num_favorites):void 0}get num_reviews(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.num_reviews)!=null?new _(this.rawMetadata.fields.num_reviews):void 0}get publicdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.publicdate?new $(this.rawMetadata.fields.publicdate):void 0}get reviewdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.reviewdate?new $(this.rawMetadata.fields.reviewdate):void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new h(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new h(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new h(this.rawMetadata.fields.title):void 0}get type(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.type?new h(this.rawMetadata.fields.type):void 0}get volume(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.volume?new h(this.rawMetadata.fields.volume):void 0}get week(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.week)!=null?new _(this.rawMetadata.fields.week):void 0}get year(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year)!=null?new _(this.rawMetadata.fields.year):void 0}}s([l()],m.prototype,"addeddate",null);s([l()],m.prototype,"avg_rating",null);s([l()],m.prototype,"collection",null);s([l()],m.prototype,"collection_files_count",null);s([l()],m.prototype,"collection_size",null);s([l()],m.prototype,"creator",null);s([l()],m.prototype,"date",null);s([l()],m.prototype,"description",null);s([l()],m.prototype,"downloads",null);s([l()],m.prototype,"files_count",null);s([l()],m.prototype,"genre",null);s([l()],m.prototype,"indexflag",null);s([l()],m.prototype,"issue",null);s([l()],m.prototype,"item_count",null);s([l()],m.prototype,"item_size",null);s([l()],m.prototype,"language",null);s([l()],m.prototype,"lending___available_to_borrow",null);s([l()],m.prototype,"lending___available_to_browse",null);s([l()],m.prototype,"lending___available_to_waitlist",null);s([l()],m.prototype,"lending___status",null);s([l()],m.prototype,"licenseurl",null);s([l()],m.prototype,"mediatype",null);s([l()],m.prototype,"month",null);s([l()],m.prototype,"noindex",null);s([l()],m.prototype,"num_favorites",null);s([l()],m.prototype,"num_reviews",null);s([l()],m.prototype,"publicdate",null);s([l()],m.prototype,"reviewdate",null);s([l()],m.prototype,"source",null);s([l()],m.prototype,"subject",null);s([l()],m.prototype,"title",null);s([l()],m.prototype,"type",null);s([l()],m.prototype,"volume",null);s([l()],m.prototype,"week",null);s([l()],m.prototype,"year",null);class y{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get highlight(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.highlight)===null||t===void 0)&&t.text?new h(this.rawMetadata.highlight.text):void 0}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new $(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating)!=null?new _(this.rawMetadata.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new h(this.rawMetadata.fields.collection):void 0}get created_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.created_on?new $(this.rawMetadata.fields.created_on):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new h(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new $(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new h(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads)!=null?new _(this.rawMetadata.fields.downloads):void 0}get filename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.filename?new h(this.rawMetadata.fields.filename):void 0}get file_basename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.file_basename?new h(this.rawMetadata.fields.file_basename):void 0}get file_creation_mtime(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.file_creation_mtime)!=null?new _(this.rawMetadata.fields.file_creation_mtime):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new h(this.rawMetadata.fields.issue):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new Ke(this.rawMetadata.fields.mediatype):void 0}get page_num(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.page_num)!=null?new _(this.rawMetadata.fields.page_num):void 0}get publicdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.publicdate?new $(this.rawMetadata.fields.publicdate):void 0}get result_in_subfile(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.result_in_subfile)!=null?new j(this.rawMetadata.fields.result_in_subfile):void 0}get reviewdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.reviewdate?new $(this.rawMetadata.fields.reviewdate):void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new h(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new h(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new h(this.rawMetadata.fields.title):void 0}get updated_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.updated_on?new $(this.rawMetadata.fields.updated_on):void 0}get year(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year)!=null?new _(this.rawMetadata.fields.year):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new h(this.rawMetadata.fields.__href__):void 0}}s([l()],y.prototype,"highlight",null);s([l()],y.prototype,"addeddate",null);s([l()],y.prototype,"avg_rating",null);s([l()],y.prototype,"collection",null);s([l()],y.prototype,"created_on",null);s([l()],y.prototype,"creator",null);s([l()],y.prototype,"date",null);s([l()],y.prototype,"description",null);s([l()],y.prototype,"downloads",null);s([l()],y.prototype,"filename",null);s([l()],y.prototype,"file_basename",null);s([l()],y.prototype,"file_creation_mtime",null);s([l()],y.prototype,"issue",null);s([l()],y.prototype,"mediatype",null);s([l()],y.prototype,"page_num",null);s([l()],y.prototype,"publicdate",null);s([l()],y.prototype,"result_in_subfile",null);s([l()],y.prototype,"reviewdate",null);s([l()],y.prototype,"source",null);s([l()],y.prototype,"subject",null);s([l()],y.prototype,"title",null);s([l()],y.prototype,"updated_on",null);s([l()],y.prototype,"year",null);s([l()],y.prototype,"__href__",null);var ie;(function(n){n[n.COUNT=0]="COUNT",n[n.ALPHABETICAL=1]="ALPHABETICAL",n[n.NUMERIC=2]="NUMERIC"})(ie||(ie={}));class $t{constructor(e){this.buckets=e.buckets,this.doc_count_error_upper_bound=e.doc_count_error_upper_bound,this.sum_other_doc_count=e.sum_other_doc_count,this.first_bucket_key=e.first_bucket_key,this.last_bucket_key=e.last_bucket_key,this.number_buckets=e.number_buckets,this.interval=e.interval}getSortedBuckets(e){const t=[...this.buckets];if(this.isRawNumberBuckets(t))return t;const i=new Intl.Collator;switch(e){case ie.ALPHABETICAL:return t.sort((r,a)=>i.compare(r.key.toString(),a.key.toString()));case ie.NUMERIC:return t.sort((r,a)=>Number(a.key)-Number(r.key));case ie.COUNT:default:return t}}isRawNumberBuckets(e){return typeof this.buckets[0]=="number"}}s([l()],$t.prototype,"getSortedBuckets",null);class ce{constructor(e){this.rawMetadata=e}get identifier(){var e;return(e=this.rawMetadata)===null||e===void 0?void 0:e.fields.query}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new h(this.rawMetadata.fields.title):void 0}get query(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.query?new h(this.rawMetadata.fields.query):void 0}get date_favorited(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date_favorited?new $(this.rawMetadata.fields.date_favorited):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new h(this.rawMetadata.fields.__href__):void 0}}s([l()],ce.prototype,"title",null);s([l()],ce.prototype,"query",null);s([l()],ce.prototype,"date_favorited",null);s([l()],ce.prototype,"__href__",null);class Xe{constructor(e,t){var i,r,a,o,d,u,v;this.schema=t;const p=t==null?void 0:t.hit_type;this.totalResults=(r=(i=e==null?void 0:e.hits)===null||i===void 0?void 0:i.total)!==null&&r!==void 0?r:0,this.returnedCount=(o=(a=e==null?void 0:e.hits)===null||a===void 0?void 0:a.returned)!==null&&o!==void 0?o:0,this.results=(v=(u=(d=e==null?void 0:e.hits)===null||d===void 0?void 0:d.hits)===null||u===void 0?void 0:u.map(g=>{var w;return Xe.createResult((w=g.hit_type)!==null&&w!==void 0?w:p,g)}))!==null&&v!==void 0?v:[],e!=null&&e.aggregations&&(this.aggregations=Object.entries(e.aggregations).reduce((g,[w,M])=>(g[w]=new $t(M),g),{})),e!=null&&e.collection_titles&&(this.collectionTitles=e.collection_titles),e!=null&&e.collection_extra_info&&(this.collectionExtraInfo=e.collection_extra_info)}static createResult(e,t){switch(e){case"item":return new m(t);case"text":return new y(t);case"favorited_search":return new ce(t);default:return new m(t)}}}class ni{constructor(e){this.clientParameters=e.client_parameters,this.backendRequests=e.backend_requests,this.kind=e.kind}}class ai{constructor(e){var t,i,r;this.rawResponse=e,this.request=new ni(e.request),this.responseHeader=(t=e.response)===null||t===void 0?void 0:t.header,this.response=new Xe((i=e.response)===null||i===void 0?void 0:i.body,(r=e.response)===null||r===void 0?void 0:r.hit_schema)}}class Lt{static aggregateSearchParamsAsString(e){if(e.omit)return"false";if(e.advancedParams){const t=e.advancedParams.map(r=>({terms:r}));return JSON.stringify(t)}if(e.simpleParams)return e.simpleParams.join(",")}static sortParamsAsString(e){return`${e.field}:${e.direction}`}static filterParamsAsString(e){return JSON.stringify(e)}static generateURLSearchParams(e){const t=new URLSearchParams;if(t.append("user_query",e.query),e.pageType&&t.append("page_type",String(e.pageType)),e.pageTarget&&t.append("page_target",String(e.pageTarget)),e.rows!=null&&t.append("hits_per_page",String(e.rows)),e.page!=null&&t.append("page",String(e.page)),e.fields&&e.fields.length>0&&t.append("fields",e.fields.join(",")),e.filters&&Object.keys(e.filters).length>0){const r=this.filterParamsAsString(e.filters);r&&r!=="{}"&&t.append("filter_map",r)}if(e.sort&&e.sort.length>0){const r=e.sort.map(a=>this.sortParamsAsString(a));t.append("sort",r.join(","))}const i=e.aggregations;if(i){const r=this.aggregateSearchParamsAsString(i);r&&t.append("aggregations",r)}if(e.aggregationsSize!=null&&t.append("aggregations_size",String(e.aggregationsSize)),e.debugging&&t.append("debugging","true"),e.uid&&t.append("uid",e.uid),e.includeClientUrl!==!1){const r=window.location.href.slice(0,400);e.query.length<=1e3&&t.append("client_url",r)}return t}}var re;(function(n){n.networkError="SearchService.NetworkError",n.itemNotFound="SearchService.ItemNotFound",n.decodingError="SearchService.DecodingError",n.searchEngineError="SearchService.SearchEngineError"})(re||(re={}));class oi extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}class kt{constructor(e){var t,i;this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",this.debuggingEnabled=(i=e==null?void 0:e.debuggingEnabled)!==null&&i!==void 0?i:!1,(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null;const r=new URL(window.location.href),a=r.searchParams.get("scope"),o=r.searchParams.get("caching"),d=r.searchParams.get("verbose");(e==null?void 0:e.scope)!==void 0?this.requestScope=e.scope:a&&(this.requestScope=a),(e==null?void 0:e.caching)!==void 0?this.cachingFlags=e.caching:o&&(this.cachingFlags=o),(e==null?void 0:e.verbose)!==void 0?this.verbose=e.verbose:d&&(this.verbose=!!d)}async fetchUrl(e,t){var i,r;const a=new URL(e);this.requestScope&&a.searchParams.set("scope",this.requestScope),this.cachingFlags&&a.searchParams.set("caching",this.cachingFlags);let o;try{const d=(i=t==null?void 0:t.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};o=await fetch(a.href,d)}catch(d){const u=d instanceof Error?d.message:typeof d=="string"?d:"Unknown error";return this.getErrorResult(re.networkError,u)}try{const d=await o.json();this.verbose&&this.printResponse(d),d.debugging&&this.printDebuggingInfo(d);const u=(r=d.response)===null||r===void 0?void 0:r.error;return u?this.getErrorResult(re.searchEngineError,u.message,u.forensics):{success:d}}catch(d){const u=d instanceof Error?d.message:typeof d=="string"?d:"Unknown error";return this.getErrorResult(re.decodingError,u)}}getErrorResult(e,t,i){return{error:new oi(e,t,i)}}printResponse(e){var t,i,r,a,o;try{const d=JSON.parse(JSON.stringify(e)),u=(r=(i=(t=d==null?void 0:d.response)===null||t===void 0?void 0:t.body)===null||i===void 0?void 0:i.hits)===null||r===void 0?void 0:r.hits;if(Array.isArray(u)&&u.length>1){const p=[];p.push(u[0]),p.push(`*** ${u.length-1} hits omitted ***`),d.response.body.hits.hits=p}const v=(o=(a=d==null?void 0:d.response)===null||a===void 0?void 0:a.body)===null||o===void 0?void 0:o.aggregations;v&&Object.entries(v).forEach(([p,g])=>{var w,M,A,k;if(((M=(w=g)===null||w===void 0?void 0:w.buckets)===null||M===void 0?void 0:M.length)>0){const S=JSON.parse(JSON.stringify(g));S.buckets=`*** ${(k=(A=S.buckets)===null||A===void 0?void 0:A.length)!==null&&k!==void 0?k:0} buckets omitted ***`,d.response.body.aggregations[p]=S}}),console.log("***** RESPONSE RECEIVED *****"),console.groupCollapsed("Response"),console.log(JSON.stringify(d,null,2)),console.groupEnd()}catch(d){console.error("Error printing search response:",d)}}printDebuggingInfo(e){var t,i;const r=e.debugging,a=(t=r.messages)!==null&&t!==void 0?t:[],o=(i=r.data)!==null&&i!==void 0?i:{};console.log("***** BEGIN DEBUGGING *****"),console.log("Full response:"),console.log(JSON.stringify(e,null,2)),console.group("Debug messages");for(const d of a)console.log(d);console.groupEnd(),console.group("Debug data");for(const[d,u]of Object.entries(o))console.log(d,u);console.groupEnd(),console.log("***** END DEBUGGING *****")}}class si extends kt{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=Lt.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=metadata&${i}`;return this.fetchUrl(r)}}class li extends kt{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=Lt.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=fts&${i}`;return this.fetchUrl(r)}}var V;(function(n){n[n.METADATA=0]="METADATA",n[n.FULLTEXT=1]="FULLTEXT"})(V||(V={}));class J{constructor(e={}){this.backendOptions=e}async search(e,t=V.METADATA){const r=await J.getBackendForSearchType(t,this.backendOptions).performSearch(e);return r.error?r:{success:new ai(r.success)}}static getBackendForSearchType(e,t={}){switch(e){case V.FULLTEXT:return new li(t);case V.METADATA:default:return new si(t)}}}J.default=new J;s([l((n,e={})=>{const{includeCredentials:t=!1,verbose:i=!1,scope:r="",baseUrl:a=""}=e;return`${n};${t};${i};${r};${a}`})],J,"getBackendForSearchType",null);var ft;(function(n){n.INCLUDE="inc",n.EXCLUDE="exc",n.GREATER_THAN="gt",n.GREATER_OR_EQUAL="gte",n.LESS_THAN="lt",n.LESS_OR_EQUAL="lte"})(ft||(ft={}));var ne;(function(n){n.NETWORK="failed to connect to user lists backend service",n.BAD_RESPONSE="malformed response from backend",n.USER_NOT_FOUND="user with the given id was not found",n.LIST_NOT_FOUND="user list with the given id was not found",n.LIST_MEMBER_NOT_FOUND="user list member with the given id was not found",n.ITEM_NOT_TOUND="item with the given id was not found"})(ne||(ne={}));class di extends Error{constructor(e,t,i){super(t,i),this.reason=e}}class T{constructor({fetchHandler:e,searchService:t,userService:i,baseUrl:r=T.DEFAULT_BASE_URL}){this.fetchHandler=e,this.searchService=t,this.userService=i,this.baseUrl=r}async fetchEndpoint(e,t,i){try{const r=await this.fetchHandler.fetchApiResponse(e,{method:t,body:i,includeCredentials:!0});return r.success?{success:r.value}:{error:T.getErrorResult(ne.LIST_NOT_FOUND,r.error)}}catch(r){return{error:T.getErrorResult(ne.NETWORK,r)}}}async fetchListsForUser(e){var t;const i=(t=await this.userService.getLoggedInUser())===null||t===void 0?void 0:t.success,r=(i==null?void 0:i.itemname)===e?"me":e;return this.fetchEndpoint(`${this.baseUrl}/services/users/${r}/lists`)}async fetchList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/${e}/lists/${t}`)}async fetchOwnListsContainingItem(e){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists?item=${e}`)}async fetchListMembers(e,t){const i=await this.fetchList(e,t);if(!i.success)return i;const{members:r}=i.success;if(!r)throw T.getErrorResult(ne.BAD_RESPONSE);return{success:r}}async fetchListMemberSearchResults(e,t){const i=await this.fetchListMembers(e,t);if(!i.success)return i;const r=i.success;if(r.length===0)return{success:[]};const a=`identifier:(${r.map(d=>d.identifier).join(" OR ")})`,o=await this.searchService.search({query:a,rows:r.length,aggregations:{omit:!0}},V.METADATA);return o.success?{success:o.success.response.results}:{error:o.error}}async createList(e){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists`,"POST",JSON.stringify(e))}async updateList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}`,"PATCH",JSON.stringify(t))}async deleteList(e){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}`,"DELETE")}async addMemberToList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}/members`,"POST",JSON.stringify(t))}async removeMemberFromList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}/members/${t}`,"DELETE")}static getErrorResult(e,t){return new di(e,T.getErrorMessage(t),{cause:t})}static getErrorMessage(e){return e instanceof Error?e.message:typeof e=="string"?e:"Unknown error"}}T.DEFAULT_BASE_URL="https://archive.org";let U=class extends x{async saveListDetails(e){var t,i,r;e.preventDefault();try{const a={list_name:this.listName.value,description:this.listDescription.value,is_private:this.listPrivate.checked};let o;if(!((t=this.userList)===null||t===void 0)&&t.id?o=await((i=this.userListsService)===null||i===void 0?void 0:i.updateList(this.userList.id,a)):o=await((r=this.userListsService)===null||r===void 0?void 0:r.createList(a)),o.success)this.dispatchEvent(new CustomEvent("userListSaved",{detail:o.success}));else throw o.error}catch(a){this.dispatchEvent(new CustomEvent("userListError",{detail:{error:a}})),console.log("error",a)}}emitCloseModalEvent(){this.dispatchEvent(new CustomEvent("listModalClosed"))}render(){var e,t,i,r,a;return b`
      <section class="new-list">
        <form id="user-list-form" @submit=${this.saveListDetails}>
          <div class="field">
            <input type="hidden" id="id" .value=${(e=this.userList)===null||e===void 0?void 0:e.id} />
            <label for="name">List name*</label>
            <input
              type="text"
              id="name"
              value=${(t=this.userList)===null||t===void 0?void 0:t.list_name}
              required
            />
          </div>
          <div class="field">
            <label for="description">Description</label>
            <textarea
              id="description"
              .value=${(r=(i=this.userList)===null||i===void 0?void 0:i.description)!==null&&r!==void 0?r:""}
            ></textarea>
          </div>
          <div class="field">
            <label for="private">Private list</label>
            <input
              type="checkbox"
              id="private"
              .checked="${(a=this.userList)===null||a===void 0?void 0:a.is_private}"
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
            <button type="submit" class="ia-button primary">Save</button>
          </div>
        </form>
      </section>
    `}};U.styles=[Yt,f`
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
    `];s([C({type:Object}),Q("design:type",Object)],U.prototype,"userList",void 0);s([C({type:Object}),Q("design:type",T)],U.prototype,"userListsService",void 0);s([ee("#id"),Q("design:type",HTMLInputElement)],U.prototype,"listId",void 0);s([ee("#name"),Q("design:type",HTMLInputElement)],U.prototype,"listName",void 0);s([ee("#description"),Q("design:type",HTMLInputElement)],U.prototype,"listDescription",void 0);s([ee("#private"),Q("design:type",HTMLInputElement)],U.prototype,"listPrivate",void 0);U=s([Y("iaux-userlist-settings")],U);function ui(n){var e=[],t="";for(t in n)e.push(t);return e}function Ve(n){return n=JSON.stringify(n),!(typeof n!="string"||!/^\{[\s\S]*\}$/.test(n))}function ci(n){return n instanceof Array}function hi(n){return Array.prototype.slice.call(n)}function K(){if(!(this instanceof K))return new K}K.prototype={get:function(n){for(var e=n+"=",t=document.cookie.split(";"),i=0;i<t.length;i++){for(var r=t[i];r.charAt(0)==" ";)r=r.substring(1,r.length);if(r.indexOf(e)==0)return decodeURI(r.substring(e.length,r.length))}return!1},set:function(n,e,t){if(Ve(n))for(const i in n)this.set(i,n[i],e,t);else if(typeof n=="string"){const i=Ve(t)?t:{expires:t},r=i.path!==void 0?`;path=${i.path};path=/`:";path=/",a=i.domain?`;domain=${i.domain}`:"",o=i.secure?";secure":"";let d=i.expires!==void 0?i.expires:"";typeof d=="string"&&d!==""?d=new Date(d):typeof d=="number"&&(d=new Date(+new Date+1e3*60*60*24*d)),d!==""&&"toGMTString"in d&&(d=`;expires=${d.toGMTString()}`);const u=i.sameSite?`;SameSite=${i.sameSite}`:"";document.cookie=`${n}=${encodeURI(e)+d+r+a+o+u}`}},remove:function(n){n=ci(n)?n:hi(arguments);for(var e=0,t=n.length;e<t;e++)this.set(n[e],"",-1);return n},clear:function(n){return n?this.remove(n):this.remove(ui(this.all()))},all:function(){if(document.cookie==="")return{};for(var n=document.cookie.split("; "),e={},t=0,i=n.length;t<i;t++){var r=n[t].split("=");e[decodeURI(r[0])]=decodeURI(r[1])}return e}};let I=null;const xt=function(n,e,t){const i=arguments;if(I||(I=K()),i.length===0)return I.all();if(i.length===1&&n===null)return I.clear();if(i.length===2&&!e)return I.clear(n);if(typeof n=="string"&&!e)return I.get(n);if(typeof n=="string"&&e||Ve(n))return I.set(n,e,t)};for(const n in K.prototype)xt[n]=K.prototype[n];class Qe{constructor(e){this.name=e.name,this.source=e.source,this.mtime=e.mtime,this.size=e.size,this.md5=e.md5,this.crc32=e.crc32,this.sha1=e.sha1,this.format=e.format,this.rotation=e.rotation}static fromResponse(e){const t=le.shared,i=_e.shared;let r,a,o;return e.mtime&&(r=t.parseValue(e.mtime)),e.size&&(a=i.parseValue(e.size)),e.rotation&&(o=t.parseValue(e.rotation)),new Qe({name:e.name,source:e.source,mtime:r,size:a,md5:e.md5,crc32:e.crc32,sha1:e.sha1,format:e.format,rotation:o})}}class Me{constructor(e){this.username=e.username,this.itemname=e.itemname,this.screenname=e.screenname,this.privs=e.privs,this.image_info=e.image_info,this.isArchiveOrgUser=this.username.endsWith("@archive.org");const{itemname:t}=e;this.userid=t.startsWith("@")?t.substring(1):t}static fromUserResponse(e){return new Me({username:e.username,itemname:e.itemname,screenname:e.screenname,privs:e.privs,image_info:Qe.fromResponse(e.image_info)})}}var q;(function(n){n.userNotLoggedIn="UserService.userNotLoggedIn",n.networkError="UserService.networkError",n.decodingError="UserService.decodingError"})(q||(q={}));class ve extends Error{constructor(e,t){super(t),this.name=e,this.type=e}}class vi{constructor(e){var t,i;this.userServiceEndpoint=(t=e==null?void 0:e.userServiceEndpoint)!==null&&t!==void 0?t:"https://archive.org/services/user.php?op=whoami",this.cache=e==null?void 0:e.cache,this.cacheTTL=e==null?void 0:e.cacheTTL,this.userCacheKey=(i=e==null?void 0:e.userCacheKey)!==null&&i!==void 0?i:"loggedInUserInfo"}async getLoggedInUser(){const e=xt.get("logged-in-user");if(!(e!==!1))return{error:new ve(q.userNotLoggedIn)};const i=await this.getPersistedUser();if(i){const a=Me.fromUserResponse(i);if(e===a.username)return{success:a}}if(this.fetchPromise)return this.fetchPromise=this.fetchPromise.then(a=>a),this.fetchPromise;this.fetchPromise=this.fetchUser();const r=await this.fetchPromise;return this.fetchPromise=void 0,r}async fetchUser(){let e;try{e=await fetch(this.userServiceEndpoint,{credentials:"include"})}catch(a){return{error:new ve(q.networkError,a.message)}}let t;try{t=await e.json()}catch(a){return{error:new ve(q.decodingError,a.message)}}if(!t.success||!t.value)return{error:new ve(q.userNotLoggedIn,t.error)};const i=t.value,r=Me.fromUserResponse(i);return await this.persistUser(i),{success:r}}async getPersistedUser(){var e;return(e=this.cache)===null||e===void 0?void 0:e.get(this.userCacheKey)}async persistUser(e){var t;await((t=this.cache)===null||t===void 0?void 0:t.set({key:this.userCacheKey,value:e,ttl:this.cacheTTL}))}}class pi{async fetchApiResponse(e,t){const i={};return t!=null&&t.includeCredentials&&(i.credentials="include"),t!=null&&t.method&&(i.method=t.method),t!=null&&t.body&&(i.body=t.body),await(await fetch(e,i)).json()}}const fi="https://ia-petabox-webdev-6421-user-list-servive-phase-2.archive.org";class fe{constructor(e){var t,i,r,a,o,d,u;this.title=e==null?void 0:e.title,this.subtitle=e==null?void 0:e.subtitle,this.headline=e==null?void 0:e.headline,this.message=e==null?void 0:e.message,this.headerColor=(t=e==null?void 0:e.headerColor)!==null&&t!==void 0?t:"#55A183",this.bodyColor=(i=e==null?void 0:e.bodyColor)!==null&&i!==void 0?i:"#f5f5f7",this.showProcessingIndicator=(r=e==null?void 0:e.showProcessingIndicator)!==null&&r!==void 0?r:!1,this.processingImageMode=(a=e==null?void 0:e.processingImageMode)!==null&&a!==void 0?a:"complete",this.showCloseButton=(o=e==null?void 0:e.showCloseButton)!==null&&o!==void 0?o:!0,this.showHeaderLogo=(d=e==null?void 0:e.showHeaderLogo)!==null&&d!==void 0?d:!0,this.closeOnBackdropClick=(u=e==null?void 0:e.closeOnBackdropClick)!==null&&u!==void 0?u:!0}}const gi=Object.freeze({processing:"processing",complete:"complete"});class mi extends x{static get properties(){return{mode:{type:String}}}constructor(){super(),this.mode=gi.processing}render(){return b`
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
    `}}window.customElements.define("ia-activity-indicator",mi);const wi=b`
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
`,_i=b`
<svg
  class="ia-logo"
  viewBox="0 0 27 30"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="logoTitleID logoDescID"
>
  <title id="logoTitleID">Internet Archive logo</title>
  <desc id="logoDescID">A line drawing of the Internet Archive headquarters building façade.</desc>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <mask id="mask-2" class="fill-color">
      <path d="M26.6666667,28.6046512 L26.6666667,30 L0,30 L0.000283687943,28.6046512 L26.6666667,28.6046512 Z M25.6140351,26.5116279 L25.6140351,28.255814 L1.05263158,28.255814 L1.05263158,26.5116279 L25.6140351,26.5116279 Z M3.62469203,7.6744186 L3.91746909,7.82153285 L4.0639977,10.1739544 L4.21052632,13.9963932 L4.21052632,17.6725617 L4.0639977,22.255044 L4.03962296,25.3421929 L3.62469203,25.4651163 L2.16024641,25.4651163 L1.72094074,25.3421929 L1.55031755,22.255044 L1.40350877,17.6970339 L1.40350877,14.0211467 L1.55031755,10.1739544 L1.68423854,7.80887484 L1.98962322,7.6744186 L3.62469203,7.6744186 Z M24.6774869,7.6744186 L24.9706026,7.82153285 L25.1168803,10.1739544 L25.2631579,13.9963932 L25.2631579,17.6725617 L25.1168803,22.255044 L25.0927809,25.3421929 L24.6774869,25.4651163 L23.2130291,25.4651163 L22.7736357,25.3421929 L22.602418,22.255044 L22.4561404,17.6970339 L22.4561404,14.0211467 L22.602418,10.1739544 L22.7369262,7.80887484 L23.0420916,7.6744186 L24.6774869,7.6744186 Z M9.94042303,7.6744186 L10.2332293,7.82153285 L10.3797725,10.1739544 L10.5263158,13.9963932 L10.5263158,17.6725617 L10.3797725,22.255044 L10.3556756,25.3421929 L9.94042303,25.4651163 L8.47583122,25.4651163 L8.0362015,25.3421929 L7.86556129,22.255044 L7.71929825,17.6970339 L7.71929825,14.0211467 L7.86556129,10.1739544 L8.00005604,7.80887484 L8.30491081,7.6744186 L9.94042303,7.6744186 Z M18.0105985,7.6744186 L18.3034047,7.82153285 L18.449948,10.1739544 L18.5964912,13.9963932 L18.5964912,17.6725617 L18.449948,22.255044 L18.425851,25.3421929 L18.0105985,25.4651163 L16.5460067,25.4651163 L16.1066571,25.3421929 L15.9357367,22.255044 L15.7894737,17.6970339 L15.7894737,14.0211467 L15.9357367,10.1739544 L16.0702315,7.80887484 L16.3753664,7.6744186 L18.0105985,7.6744186 Z M25.6140351,4.53488372 L25.6140351,6.97674419 L1.05263158,6.97674419 L1.05263158,4.53488372 L25.6140351,4.53488372 Z M13.0806755,0 L25.9649123,2.93331338 L25.4484139,3.8372093 L0.771925248,3.8372093 L0,3.1041615 L13.0806755,0 Z" id="path-1"></path>
    </mask>
    <use class="fill-color" xlink:href="#path-1"></use>
    <g mask="url(#mask-2)" class="fill-color">
      <path d="M0,0 L26.6666667,0 L26.6666667,30 L0,30 L0,0 Z" id="swatch"></path>
    </g>
  </g>
</svg>
`;let We=class extends x{constructor(){super(...arguments),this.config=new fe}render(){return b`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton?this.closeButtonTemplate:""}
            ${this.config.showHeaderLogo?b`<div class="logo-icon">${_i}</div>`:L}
            ${this.config.title?b`<h1 class="title">${this.config.title}</h1>`:""}
            ${this.config.subtitle?b`<h2 class="subtitle">${this.config.subtitle}</h2>`:""}
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
              ${this.config.headline?b` <h1 class="headline">${this.config.headline}</h1> `:""}
              ${this.config.message?b` <p class="message">${this.config.message}</p> `:""}

              <div class="slot-container">
                <slot> </slot>
              </div>
            </div>
          </section>
        </div>
      </div>
    `}handleCloseButton(){const e=new Event("closeButtonPressed");this.dispatchEvent(e)}get closeButtonTemplate(){return b`
      <button
        type="button"
        class="close-button"
        tabindex="0"
        @click=${this.handleCloseButton}
      >
        ${wi}
      </button>
    `}static get styles(){const e=f`var(--modalLogoSize, 6.5rem)`,t=f`var(--processingImageSize, 7.5rem)`,i=f`var(--modalCornerRadius, 1rem)`,r=f`var(--modalBorder, 2px solid black)`,a=f`var(--modalBottomMargin, 2.5rem)`,o=f`var(--modalTopMargin, 5rem)`,d=f`var(--modalHeaderBottomPadding, 0.5em)`,u=f`var(--modalBottomPadding, 2rem)`,v=f`var(--modalScrollOffset, 5px)`,p=f`var(--modalTitleFontSize, 1.8rem)`,g=f`var(--modalSubtitleFontSize, 1.4rem)`,w=f`var(--modalHeadlineFontSize, 1.6rem)`,M=f`var(--modalMessageFontSize, 1.4rem)`,A=f`var(--modalTitleLineHeight, normal)`,k=f`var(--modalSubtitleLineHeight, normal)`,S=f`var(--modalHeadlineLineHeight, normal)`,H=f`var(--modalMessageLineHeight, normal)`;return f`
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
        padding-bottom: ${d};
      }

      .title {
        margin: 0;
        padding: 0;
        font-size: ${p};
        font-weight: bold;
        line-height: ${A};
      }

      .subtitle {
        margin: 0;
        padding: 0;
        font-weight: normal;
        padding-top: 0;
        font-size: ${g};
        line-height: ${k};
      }

      .modal-body {
        background-color: #f5f5f7;
        border-radius: 0 0 calc(${i}) calc(${i});
        border: ${r};
        border-top: 0;
        padding: 0 1rem calc(${u} - ${v}) 1rem;
        color: #333;
        margin-bottom: 2.5rem;
        min-height: 5rem;
      }

      .content {
        overflow-y: auto;
        max-height: calc(100vh - (16.5rem + ${a}));
        min-height: 5rem;
        padding: 0 0 calc(${v}) 0;
      }

      .headline {
        font-size: ${w};
        font-weight: bold;
        text-align: center;
        line-height: ${S};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${M};
        line-height: ${H};
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
    `}};s([C({type:Object})],We.prototype,"config",void 0);We=s([Y("modal-template")],We);function bi(n,e,t){var i=t||{},r=i.noTrailing,a=r===void 0?!1:r,o=i.noLeading,d=o===void 0?!1:o,u=i.debounceMode,v=u===void 0?void 0:u,p,g=!1,w=0;function M(){p&&clearTimeout(p)}function A(S){var H=S||{},N=H.upcomingOnly,ke=N===void 0?!1:N;M(),g=!ke}function k(){for(var S=arguments.length,H=new Array(S),N=0;N<S;N++)H[N]=arguments[N];var ke=this,Ye=Date.now()-w;if(g)return;function he(){w=Date.now(),e.apply(ke,H)}function et(){p=void 0}!d&&v&&!p&&he(),M(),v===void 0&&Ye>n?d?(w=Date.now(),a||(p=setTimeout(v?et:he,n))):he():a!==!0&&(p=setTimeout(v?et:he,v===void 0?n-Ye:n))}return k.cancel=A,k}var D;(function(n){n.Open="open",n.Closed="closed"})(D||(D={}));class yi{constructor(e){this.windowResizeThrottler=bi(100,this.updateModalContainerHeight,{noLeading:!1,noTrailing:!1}).bind(this),this.modalManager=e}handleModeChange(e){switch(e){case D.Open:this.startResizeListener(),this.stopDocumentScroll();break;case D.Closed:this.stopResizeListener(),this.resumeDocumentScroll();break}}updateModalContainerHeight(){this.modalManager.style.setProperty("--containerHeight",`${window.innerHeight}px`)}stopDocumentScroll(){document.body.classList.add("modal-manager-open")}resumeDocumentScroll(){document.body.classList.remove("modal-manager-open")}startResizeListener(){window.addEventListener("resize",this.windowResizeThrottler)}stopResizeListener(){window.removeEventListener("resize",this.windowResizeThrottler)}}let X=class extends x{constructor(){super(...arguments),this.mode=D.Closed,this.hostBridge=new yi(this),this.closeOnBackdropClick=!0}render(){return b`
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          tabindex="0"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `}getMode(){return this.mode}closeModal(){this.mode=D.Closed}callUserClosedModalCallback(){const e=this.userClosedModalCallback;this.userClosedModalCallback=void 0,e&&e()}showModal(e){return Ct(this,void 0,void 0,function*(){this.closeOnBackdropClick=e.config.closeOnBackdropClick,this.userClosedModalCallback=e.userClosedModalCallback,this.modalTemplate.config=e.config,this.customModalContent=e.customModalContent,this.mode=D.Open,yield this.modalTemplate.updateComplete,this.modalTemplate.focus()})}updated(e){e.has("mode")&&this.handleModeChange()}backdropClicked(){this.closeOnBackdropClick&&(this.closeModal(),this.callUserClosedModalCallback())}handleModeChange(){this.hostBridge.handleModeChange(this.mode),this.emitModeChangeEvent()}emitModeChangeEvent(){const e=new CustomEvent("modeChanged",{detail:{mode:this.mode}});this.dispatchEvent(e)}closeButtonPressed(){this.closeModal(),this.callUserClosedModalCallback()}static get styles(){const e=f`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`,t=f`var(--modalBackdropZindex, 1000)`,i=f`var(--modalWidth, 32rem)`,r=f`var(--modalMaxWidth, 95%)`,a=f`var(--modalZindex, 2000)`;return f`
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
        z-index: ${a};
        width: ${i};
        max-width: ${r};
      }
    `}};s([C({type:String,reflect:!0})],X.prototype,"mode",void 0);s([C({type:Object})],X.prototype,"customModalContent",void 0);s([C({type:Object})],X.prototype,"hostBridge",void 0);s([ee("modal-template")],X.prototype,"modalTemplate",void 0);X=s([Y("modal-manager")],X);async function Mi(n,e){let t=document.querySelector("modal-manager");if(!t){const i=document.querySelector("body");t=document.createElement("modal-manager"),i==null||i.appendChild(t)}t==null||t.setAttribute("id","create-user-list-modal"),t.showModal({config:new fe({title:b`List settings`,headerColor:"#194880",showCloseButton:!0,showHeaderLogo:!1,closeOnBackdropClick:!0}),customModalContent:b`
      <iaux-userlist-settings
        .userList=${{id:void 0,list_name:"",description:"",is_private:!1}}
        .userListsService=${n}
        @listModalClosed=${()=>{t.showModal({config:new fe,customModalContent:void 0}),t.closeModal()}}
        @userListSaved=${async i=>{window.dispatchEvent(new CustomEvent("createUserList",{detail:{created:i.detail},bubbles:!0,composed:!0})),t.showModal({config:new fe,customModalContent:void 0}),t.closeModal(),e==null||e()}}
      ></iaux-userlist-settings>
    `})}let de=class extends x{constructor(){super(...arguments),this.item="",this.lists=[]}get checkIcon(){return we`<svg viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style="height: 12px; width: 12px;"
    >
    <path
      d="m33.3333333 90-33.3333333-33.3333333 13.3333333-13.3333334 20 20 53.3333334-53.3333333 13.3333333 13.3333333z"
      fill-rule="evenodd"
    />
  </svg>`}get plusIcon(){return we`<svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style="height: 12px; width: 12px;"
      >
    <g fill-rule="nonzero">
      <path d="m49.9459358 0c13.7978412 0 25.5896453 4.88776371 35.3754122 14.6632911 9.7857669 9.7755275 14.678652 21.554993 14.678652 35.3383967 0 13.7800281-4.8928851 25.5594936-14.678652 35.3350211-9.7857669 9.7755274-21.577571 14.6632911-35.3754122 14.6632911s-25.5716235-4.8877637-35.3213471-14.6632911c-9.74972353-9.7755275-14.6245887-21.554993-14.6245887-35.3383967-.00224931-9.0014064 2.23243779-17.3524613 6.70406469-25.0531645 4.47162691-7.7007033 10.54380341-13.7834037 18.21652941-18.24810129 7.6727261-4.46469761 16.0145067-6.69704641 25.0253417-6.69704641zm0 6c-7.9548389 0-15.2549008 1.95357387-22.0076943 5.8829701-6.7720278 3.9405885-12.0963254 9.2741139-16.0455165 16.0751171-3.93842488 6.7824623-5.89471047 14.0931257-5.89272481 22.040225 0 12.1941053 4.24437231 22.4500702 12.87283241 31.1013666 8.6242501 8.6470752 18.8695883 12.9003212 31.0731032 12.9003212 12.2065273 0 22.4734846-4.2557068 31.1349929-12.9081521 8.6603017-8.6512398 12.9190715-18.9040965 12.9190715-31.0935357l-.0036695-.6147591c-.1419586-11.9183989-4.4018851-21.9707923-12.915402-30.475401-8.6615083-8.6524453-18.9284656-12.9081521-31.1349929-12.9081521z" />
      <path d="m56 23v22h22v11h-22v22h-11l-.001-22h-21.999v-11h21.999l.001-22z" />
    </g>
  </svg>`}renderUserListOption(e){const{label:t,isSelected:i,id:r}=e,a=i?"selected":"",o=b`<button
      id="${r}"
      @click=${()=>this.optionClicked(e)}
    >
      ${t}
    </button> `;return b`<li class=${a}>${o}</li>`}optionClicked(e){var t;this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:e}})),(t=e.selectedHandler)===null||t===void 0||t.call(e,e)}checkedIcon(e){return e?b`${this.checkIcon}`:b`<div style="width: 12px; height: 12px;"></div>`}get userListOptions(){const e=[];this.lists.forEach(i=>{const r={label:b` <ia-icon-label>
          <div slot="icon">${this.checkedIcon(i.item_is_member)}</div>
          <div class="truncate">${i.list_name}</div>
        </ia-icon-label>`,id:i.id,isSelected:i.item_is_member,selectedHandler:a=>this.onSelected(a)};e.push(r),console.log("listOption",r)});const t={label:b`<ia-icon-label>
        <div slot="icon">${this.plusIcon}</div>
        Create new list
      </ia-icon-label>`,id:"create-new-list",selectedHandler:()=>this.createList()};return e.push(t),e}async createList(){await Mi(this.userListsService,()=>this.closeDropdown())}async addMember(e){var t;await((t=this.userListsService)===null||t===void 0?void 0:t.addMemberToList(e,{identifier:this.item}))}async removeMember(e,t){var i;await((i=this.userListsService)===null||i===void 0?void 0:i.removeMemberFromList(e,t))}async onSelected(e){var t;let i=0;const r=this.lists.find(o=>e.id===o.id)||{},a=(t=r.members)===null||t===void 0?void 0:t.find(o=>o.identifier===this.item);a?(await this.removeMember(r.id,a.member_id),i-=1):(await this.addMember(r.id),i+=1),this.dispatchEvent(new CustomEvent("selectDropdown",{detail:{selected:i},bubbles:!0,composed:!0})),this.closeDropdown()}closeDropdown(){this.dispatchEvent(new CustomEvent("closeDropdown",{bubbles:!0,composed:!0}))}render(){return b`
      ${this.userListOptions.map(e=>this.renderUserListOption(e))}
    `}static get styles(){return f`
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
    `}};s([C({type:String})],de.prototype,"item",void 0);s([C({type:Array})],de.prototype,"lists",void 0);s([C({type:Object})],de.prototype,"userListsService",void 0);de=s([Y("item-userlists")],de);let B=class extends x{constructor(){super(),this.item="",this.selectedCount=0,this.userListData=[],this.backdropVisible=!1,this.userListsService=new T({fetchHandler:new pi,searchService:J.default,userService:new vi,baseUrl:fi});const e=i=>{this.selectedCount=i.detail.selected,this.initUserLists()};this.addEventListener("selectDropdown",e);const t=i=>{this.selectedCount+=1,console.log("createUserList listener",i.detail.created),this.addMember(i.detail.created.id),this.dispatchEvent(new CustomEvent("closeDropdown",{bubbles:!0,composed:!0}))};window.addEventListener("createUserList",t)}connectedCallback(){var e;(e=super.connectedCallback)===null||e===void 0||e.call(this),this.initUserLists()}async addMember(e){await this.userListsService.addMemberToList(e,{identifier:this.item}),await this.initUserLists()}async initUserLists(){console.log("fetching userlist data for item",this.item);const e=await this.userListsService.fetchOwnListsContainingItem(this.item);e.success?(console.log("userlist data",e.success),this.userListData=e.success,this.selectedCount=this.userListData.filter(t=>t.item_is_member).length):console.error("Error loading userlist data",e.error)}get checkIcon(){return we`<svg viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style="width: 16px; height: 16px;"
    >
    <path
      d="m33.3333333 90-33.3333333-33.3333333 13.3333333-13.3333334 20 20 53.3333334-53.3333333 13.3333333 13.3333333z"
      fill-rule="evenodd"
    />
  </svg>`}get plusIcon(){return we`<svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style="width: 16px; height: 16px;"
      >
    <g fill-rule="nonzero">
      <path d="m49.9459358 0c13.7978412 0 25.5896453 4.88776371 35.3754122 14.6632911 9.7857669 9.7755275 14.678652 21.554993 14.678652 35.3383967 0 13.7800281-4.8928851 25.5594936-14.678652 35.3350211-9.7857669 9.7755274-21.577571 14.6632911-35.3754122 14.6632911s-25.5716235-4.8877637-35.3213471-14.6632911c-9.74972353-9.7755275-14.6245887-21.554993-14.6245887-35.3383967-.00224931-9.0014064 2.23243779-17.3524613 6.70406469-25.0531645 4.47162691-7.7007033 10.54380341-13.7834037 18.21652941-18.24810129 7.6727261-4.46469761 16.0145067-6.69704641 25.0253417-6.69704641zm0 6c-7.9548389 0-15.2549008 1.95357387-22.0076943 5.8829701-6.7720278 3.9405885-12.0963254 9.2741139-16.0455165 16.0751171-3.93842488 6.7824623-5.89471047 14.0931257-5.89272481 22.040225 0 12.1941053 4.24437231 22.4500702 12.87283241 31.1013666 8.6242501 8.6470752 18.8695883 12.9003212 31.0731032 12.9003212 12.2065273 0 22.4734846-4.2557068 31.1349929-12.9081521 8.6603017-8.6512398 12.9190715-18.9040965 12.9190715-31.0935357l-.0036695-.6147591c-.1419586-11.9183989-4.4018851-21.9707923-12.915402-30.475401-8.6615083-8.6524453-18.9284656-12.9081521-31.1349929-12.9081521z" />
      <path d="m56 23v22h22v11h-22v22h-11l-.001-22h-21.999v-11h21.999l.001-22z" />
    </g>
  </svg>`}get mainButton(){return b`
      <div class="action-bar-text">
        <ia-icon-label>
          <div slot="icon" class="icon-img">
            ${this.selectedCount>0?this.checkIcon:this.plusIcon}
          </div>
          <div class="label">Add to list</div>
          <div class="label-sm">Lists</div>
        </ia-icon-label>
      </div>
    `}get itemUserlists(){return b`
      <item-userlists
        slot="list"
        .identifier=${this.item}
        .lists=${this.userListData}
        .userListsService=${this.userListsService}
      >
      </item-userlists>
    `}get backdropTemplate(){return this.backdropVisible?b`
      <div
        class="click-backdrop"
        @click=${this.backdropClicked}
        @keypress=${this.backdropClicked}
      ></div>
    `:L}backdropClicked(){this.dropdown.open=!1,this.backdropVisible=!1}dropdownClicked(){this.backdropVisible=this.dropdown.open}render(){return b`
      <div class="list-container">
        <ia-dropdown
          class="list-dropdown"
          ?openViaCaret=${!1}
          ?closeOnSelect=${!0}
          ?includeSelectedOption=${!0}
          ?isCustomList=${!0}
          ?closeOnEscape=${!0}
          @click=${this.dropdownClicked}
        >
          <div class="list-title" slot="dropdown-label">${this.mainButton}</div>
          ${this.itemUserlists}
        </ia-dropdown>
        ${this.backdropTemplate}
      </div>
    `}};B.styles=f`
    :host {
      display: block;
    }

    ia-icon-label {
      cursor: pointer;
    }

    ia-icon-label {
      display: flex;
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
      font-weight: normal;
      --iconLabelFlexDirection: column;
      --iconLabelGutterWidth: 0;
      --iconWidth: 16px;
    }

    /* inside button.click-main, classname from details.inc buttons */
    @media (min-width: 985px) {
      .action-bar-text .label-sm {
        display: none;
      }
      .action-bar-text .label {
        padding-bottom: 2px;
        padding-top: 2px;
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

    svg {
      height: 30px;
      width: 30px;
    }
  `;s([C({type:String})],B.prototype,"item",void 0);s([Le()],B.prototype,"selectedCount",void 0);s([Le()],B.prototype,"userListData",void 0);s([Le()],B.prototype,"backdropVisible",void 0);s([Le()],B.prototype,"userListsService",void 0);s([ee("ia-dropdown")],B.prototype,"dropdown",void 0);B=s([Y("ia-item-user-lists")],B);let Ge=class extends x{render(){return b`
      <div>
        <ia-item-user-lists></ia-item-user-lists>
      </div>
    `}};Ge.styles=f`
    :host {
      display: block;
    }
    div {
      display: flex;
    }
  `;Ge=s([Y("app-root")],Ge);
