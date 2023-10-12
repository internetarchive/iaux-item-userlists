(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();function a(o,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var d=o.length-1;d>=0;d--)(s=o[d])&&(n=(r<3?s(n):r>3?s(e,t,n):s(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n}function te(o,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,e)}function Et(o,e,t,i){function r(n){return n instanceof t?n:new t(function(s){s(n)})}return new(t||(t=Promise))(function(n,s){function d(f){try{v(i.next(f))}catch(g){s(g)}}function c(f){try{v(i.throw(f))}catch(g){s(g)}}function v(f){f.done?n(f.value):r(f.value).then(d,c)}v((i=i.apply(o,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=window,Ze=ge.ShadowRoot&&(ge.ShadyCSS===void 0||ge.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Je=Symbol(),rt=new WeakMap;let wt=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Je)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ze&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=rt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&rt.set(t,e))}return e}toString(){return this.cssText}};const At=o=>new wt(typeof o=="string"?o:o+"",void 0,Je),h=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,r,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[n+1],o[0]);return new wt(t,o,Je)},Bt=(o,e)=>{Ze?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=ge.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,o.appendChild(i)})},ot=Ze?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return At(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Le;const we=window,nt=we.trustedTypes,Tt=nt?nt.emptyScript:"",at=we.reactiveElementPolyfillSupport,Pe={toAttribute(o,e){switch(e){case Boolean:o=o?Tt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},_t=(o,e)=>e!==o&&(e==e||o==o),ke={attribute:!0,type:String,converter:Pe,reflect:!1,hasChanged:_t};let V=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=ke){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ke}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(ot(r))}else e!==void 0&&t.push(ot(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Bt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=ke){var r;const n=this.constructor._$Ep(e,i);if(n!==void 0&&i.reflect===!0){const s=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:Pe).toAttribute(t,i.type);this._$El=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(e,t){var i;const r=this.constructor,n=r._$Ev.get(e);if(n!==void 0&&this._$El!==n){const s=r.getPropertyOptions(n),d=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:Pe;this._$El=n,this[n]=d.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||_t)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,n)=>this[n]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdate)===null||n===void 0?void 0:n.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};V.finalized=!0,V.elementProperties=new Map,V.elementStyles=[],V.shadowRootOptions={mode:"open"},at==null||at({ReactiveElement:V}),((Le=we.reactiveElementVersions)!==null&&Le!==void 0?Le:we.reactiveElementVersions=[]).push("1.6.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Se;const _e=window,K=_e.trustedTypes,st=K?K.createPolicy("lit-html",{createHTML:o=>o}):void 0,De="$lit$",U=`lit$${(Math.random()+"").slice(9)}$`,bt="?"+U,Ot=`<${bt}>`,H=document,se=()=>H.createComment(""),le=o=>o===null||typeof o!="object"&&typeof o!="function",yt=Array.isArray,Ut=o=>yt(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Ee=`[ 	
\f\r]`,re=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,dt=/>/g,N=RegExp(`>|${Ee}(?:([^\\s"'>=/]+)(${Ee}*=${Ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ct=/'/g,ut=/"/g,$t=/^(?:script|style|textarea|title)$/i,Mt=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),w=Mt(1),Z=Mt(2),J=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),ht=new WeakMap,D=H.createTreeWalker(H,129,null,!1);function xt(o,e){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return st!==void 0?st.createHTML(e):e}const Rt=(o,e)=>{const t=o.length-1,i=[];let r,n=e===2?"<svg>":"",s=re;for(let d=0;d<t;d++){const c=o[d];let v,f,g=-1,_=0;for(;_<c.length&&(s.lastIndex=_,f=s.exec(c),f!==null);)_=s.lastIndex,s===re?f[1]==="!--"?s=lt:f[1]!==void 0?s=dt:f[2]!==void 0?($t.test(f[2])&&(r=RegExp("</"+f[2],"g")),s=N):f[3]!==void 0&&(s=N):s===N?f[0]===">"?(s=r??re,g=-1):f[1]===void 0?g=-2:(g=s.lastIndex-f[2].length,v=f[1],s=f[3]===void 0?N:f[3]==='"'?ut:ct):s===ut||s===ct?s=N:s===lt||s===dt?s=re:(s=N,r=void 0);const x=s===N&&o[d+1].startsWith("/>")?" ":"";n+=s===re?c+Ot:g>=0?(i.push(v),c.slice(0,g)+De+c.slice(g)+U+x):c+U+(g===-2?(i.push(void 0),d):x)}return[xt(o,n+(o[t]||"<?>")+(e===2?"</svg>":"")),i]};class de{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,s=0;const d=e.length-1,c=this.parts,[v,f]=Rt(e,t);if(this.el=de.createElement(v,i),D.currentNode=this.el.content,t===2){const g=this.el.content,_=g.firstChild;_.remove(),g.append(..._.childNodes)}for(;(r=D.nextNode())!==null&&c.length<d;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const _ of r.getAttributeNames())if(_.endsWith(De)||_.startsWith(U)){const x=f[s++];if(g.push(_),x!==void 0){const B=r.getAttribute(x.toLowerCase()+De).split(U),k=/([.?@])?(.*)/.exec(x);c.push({type:1,index:n,name:k[2],strings:B,ctor:k[1]==="."?Nt:k[1]==="?"?Dt:k[1]==="@"?zt:xe})}else c.push({type:6,index:n})}for(const _ of g)r.removeAttribute(_)}if($t.test(r.tagName)){const g=r.textContent.split(U),_=g.length-1;if(_>0){r.textContent=K?K.emptyScript:"";for(let x=0;x<_;x++)r.append(g[x],se()),D.nextNode(),c.push({type:2,index:++n});r.append(g[_],se())}}}else if(r.nodeType===8)if(r.data===bt)c.push({type:2,index:n});else{let g=-1;for(;(g=r.data.indexOf(U,g+1))!==-1;)c.push({type:7,index:n}),g+=U.length-1}n++}}static createElement(e,t){const i=H.createElement("template");return i.innerHTML=e,i}}function X(o,e,t=o,i){var r,n,s,d;if(e===J)return e;let c=i!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[i]:t._$Cl;const v=le(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==v&&((n=c==null?void 0:c._$AO)===null||n===void 0||n.call(c,!1),v===void 0?c=void 0:(c=new v(o),c._$AT(o,t,i)),i!==void 0?((s=(d=t)._$Co)!==null&&s!==void 0?s:d._$Co=[])[i]=c:t._$Cl=c),c!==void 0&&(e=X(o,c._$AS(o,e.values),c,i)),e}class It{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:r}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:H).importNode(i,!0);D.currentNode=n;let s=D.nextNode(),d=0,c=0,v=r[0];for(;v!==void 0;){if(d===v.index){let f;v.type===2?f=new he(s,s.nextSibling,this,e):v.type===1?f=new v.ctor(s,v.name,v.strings,this,e):v.type===6&&(f=new Ht(s,this,e)),this._$AV.push(f),v=r[++c]}d!==(v==null?void 0:v.index)&&(s=D.nextNode(),d++)}return D.currentNode=H,n}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class he{constructor(e,t,i,r){var n;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cp=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),le(e)?e===M||e==null||e===""?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==J&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ut(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==M&&le(this._$AH)?this._$AA.nextSibling.data=e:this.$(H.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=de.createElement(xt(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(i);else{const s=new It(n,this),d=s.u(this.options);s.v(i),this.$(d),this._$AH=s}}_$AC(e){let t=ht.get(e.strings);return t===void 0&&ht.set(e.strings,t=new de(e)),t}T(e){yt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new he(this.k(se()),this.k(se()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class xe{constructor(e,t,i,r,n){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const n=this.strings;let s=!1;if(n===void 0)e=X(this,e,t,0),s=!le(e)||e!==this._$AH&&e!==J,s&&(this._$AH=e);else{const d=e;let c,v;for(e=n[0],c=0;c<n.length-1;c++)v=X(this,d[i+c],t,c),v===J&&(v=this._$AH[c]),s||(s=!le(v)||v!==this._$AH[c]),v===M?e=M:e!==M&&(e+=(v??"")+n[c+1]),this._$AH[c]=v}s&&!r&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Nt extends xe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}}const Pt=K?K.emptyScript:"";class Dt extends xe{constructor(){super(...arguments),this.type=4}j(e){e&&e!==M?this.element.setAttribute(this.name,Pt):this.element.removeAttribute(this.name)}}class zt extends xe{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=X(this,e,t,0))!==null&&i!==void 0?i:M)===J)return;const r=this._$AH,n=e===M&&r!==M||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==M&&(r===M||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Ht{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const pt=_e.litHtmlPolyfillSupport;pt==null||pt(de,he),((Se=_e.litHtmlVersions)!==null&&Se!==void 0?Se:_e.litHtmlVersions=[]).push("2.8.0");const Ft=(o,e,t)=>{var i,r;const n=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let s=n._$litPart$;if(s===void 0){const d=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;n._$litPart$=s=new he(e.insertBefore(se(),d),d,void 0,t??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ae,Be;class S extends V{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ft(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return J}}S.finalized=!0,S._$litElement$=!0,(Ae=globalThis.litElementHydrateSupport)===null||Ae===void 0||Ae.call(globalThis,{LitElement:S});const vt=globalThis.litElementPolyfillSupport;vt==null||vt({LitElement:S});((Be=globalThis.litElementVersions)!==null&&Be!==void 0?Be:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=o=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(o,e):((t,i)=>{const{kind:r,elements:n}=i;return{kind:r,elements:n,finisher(s){customElements.define(t,s)}}})(o,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}};function $(o){return(e,t)=>t!==void 0?((i,r,n)=>{r.constructor.createProperty(n,i)})(o,e,t):jt(o,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Xe(o){return $({...o,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt=({finisher:o,descriptor:e})=>(t,i)=>{var r;if(i===void 0){const n=(r=t.originalKey)!==null&&r!==void 0?r:t.key,s=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(t.key)}:{...t,key:n};return o!=null&&(s.finisher=function(d){o(d,n)}),s}{const n=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),o==null||o(n,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ie(o,e){return Vt({descriptor:t=>{const i={get(){var r,n;return(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var n,s;return this[r]===void 0&&(this[r]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Te;((Te=window.HTMLSlotElement)===null||Te===void 0?void 0:Te.prototype.assignedElements)!=null;let L=class extends S{constructor(){super(...arguments),this.open=!1,this.displayCaret=!1,this.closeOnSelect=!1,this.openViaButton=!0,this.openViaCaret=!0,this.includeSelectedOption=!1,this.selectedOption="",this.options=[],this.optionGroup="options",this.optionSelected=()=>{},this.isCustomList=!1,this.closeOnEscape=!1,this.boundKeyboardListener=e=>{switch(e.key){case"Escape":case"Esc":this.open=!1;break}},this.handlingCaretClick=!1}disconnectedCallback(){var e;(e=super.disconnectedCallback)===null||e===void 0||e.call(this),this.removeKeyboardListener()}setupKeyboardListener(){this.closeOnEscape&&document.addEventListener("keydown",this.boundKeyboardListener)}removeKeyboardListener(){this.closeOnEscape&&document.removeEventListener("keydown",this.boundKeyboardListener)}get dropdownState(){return this.open?(this.setupKeyboardListener(),"open"):(this.removeKeyboardListener(),"closed")}async firstUpdated(){await new Promise(e=>setTimeout(e,0)),this.addEventListener("closeDropdown",()=>{this.open=!1})}renderOption(e){const{label:t,url:i=void 0,id:r}=e;let n;const s=this.selectedOption===r?"selected":"";return i?n=w`<a
        href=${i}
        @click=${()=>this.optionClicked(e)}
        >${t}</a
      >`:n=w`<button
        @click=${()=>this.optionClicked(e)}
      >
        ${t}
      </button>`,w`<li class=${s}>${n}</li>`}optionClicked(e){var t;this.selectedOption!==e.id&&(this.selectedOption=e.id,this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:e}})),(t=e.selectedHandler)===null||t===void 0||t.call(e,e)),this.closeOnSelect&&(this.open=!1)}toggleOptions(){this.open=!this.open}mainButtonClicked(){if(this.handlingCaretClick){this.handlingCaretClick=!1;return}this.openViaButton&&this.toggleOptions()}caretInteracted(){this.openViaCaret&&this.toggleOptions()}caretClicked(){this.handlingCaretClick=!0,this.caretInteracted()}caretKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.caretInteracted())}get caretUp(){return Z`<svg class="caret-up-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499 3.51689722c.22976435.15317623.54019902.0910893.69337525-.13867505.13615665-.20423497.10222882-.47220946-.06836249-.63681849l-.07031256-.05655675-3.2773501-2.18490007-3.2773501 2.18490007c-.22976434.15317623-.29185128.4636109-.13867505.69337524.13615665.20423498.39656688.27598409.61412572.18182636l.07924953-.04315131 2.7226499-1.81402514z"
      fill=""></path>
  </svg>`}get caretDown(){return Z`<svg class="caret-down-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499.58397485c.22976435-.15317623.54019902-.09108929.69337525.13867505.13615665.20423498.10222882.47220947-.06836249.63681849l-.07031256.05655676-3.2773501 2.18490006-3.2773501-2.18490006c-.22976434-.15317623-.29185128-.4636109-.13867505-.69337525.13615665-.20423497.39656688-.27598409.61412572-.18182636l.07924953.04315131 2.7226499 1.81402515z"
    fill=""></path>
  </svg>`}get availableOptions(){return this.includeSelectedOption?this.options:this.options.filter(e=>this.selectedOption!==e.id)}get dropdownFormat(){return this.isCustomList?w`<slot name="list"></slot>`:w`${this.availableOptions.map(e=>this.renderOption(e))}`}render(){return w`
      <div class="ia-dropdown-group">
        <button class="click-main" @click=${this.mainButtonClicked}>
          <span class="cta sr-only">Toggle ${this.optionGroup}</span>
          <slot name="dropdown-label"></slot>
          ${this.displayCaret?w`
                <span
                  class="caret"
                  tabindex=${this.openViaCaret&&!this.openViaButton?"0":M}
                  role=${this.openViaCaret?"button":M}
                  @click=${this.caretClicked}
                  @keydown=${this.caretKeyDown}
                >
                  <span ?hidden=${!this.open} class="caret-up-slot">
                    <slot name="caret-up">${this.caretUp}</slot>
                  </span>
                  <span ?hidden=${this.open} class="caret-down-slot">
                    <slot name="caret-down">${this.caretDown}</slot>
                  </span>
                </span>
              `:M}
        </button>

        <ul class="dropdown-main ${this.dropdownState}">
          ${this.dropdownFormat}
        </ul>
      </div>
    `}static get styles(){const e=h`var(--dropdownBorderWidth, 1px)`,t=h`var(--dropdownBorderRadius, 4px)`,i=h`var(--dropdownBorderColor, #fff)`,r=h`var(--dropdownBgColor, #333)`,n=h`var(--dropdownTextColor, #fff)`,s=h`var(--dropdownHoverBgColor, rgba(255, 255, 255, 0.3))`,d=h`var(--dropdownSelectedBgColor, #fff)`;return h`
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

      ul {
        z-index: var(--dropdownListZIndex, 1);
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
        font-size: var(--dropdownFontSize, inherit);

        border-top: var(--dropdownBorderTopWidth, ${e}) solid
          ${i};
        border-right: var(--dropdownBorderRightWidth, ${e})
          solid ${i};
        border-bottom: var(--dropdownBorderBottomWidth, ${e})
          solid ${i};
        border-left: var(--dropdownBorderLeftWidth, ${e})
          solid ${i};

        border-radius: var(
            --dropdownBorderTopLeftRadius,
            ${t}
          )
          var(--dropdownBorderTopRightRadius, ${t})
          var(--dropdownBorderBottomRightRadius, ${t})
          var(--dropdownBorderBottomLeftRadius, ${t});

        white-space: var(--dropdownWhiteSpace, normal);
      }

      ul.dropdown-main {
        background: ${r};
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
    `}};a([$({type:Boolean,attribute:!0})],L.prototype,"open",void 0);a([$({type:Boolean,attribute:!0})],L.prototype,"displayCaret",void 0);a([$({type:Boolean,attribute:!0})],L.prototype,"closeOnSelect",void 0);a([$({type:Boolean,attribute:!0})],L.prototype,"openViaButton",void 0);a([$({type:Boolean,attribute:!0})],L.prototype,"openViaCaret",void 0);a([$({type:Boolean,attribute:!0})],L.prototype,"includeSelectedOption",void 0);a([$({type:String,attribute:!0})],L.prototype,"selectedOption",void 0);a([$({type:Array})],L.prototype,"options",void 0);a([$({type:String})],L.prototype,"optionGroup",void 0);a([$({type:Function})],L.prototype,"optionSelected",void 0);a([$({type:Boolean,reflect:!0})],L.prototype,"isCustomList",void 0);a([$({type:Boolean,reflect:!0})],L.prototype,"closeOnEscape",void 0);a([ie(".click-main")],L.prototype,"mainButton",void 0);L=a([R("ia-dropdown")],L);let ze=class extends S{render(){return w`
      <div class="icon-label-container">
        <slot name="icon"></slot>
        <slot></slot>
      </div>
    `}};ze.styles=h`
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
        /* max-height needed for Safari browser */
        max-height: var(--labelTruncateHeight, 30px);
        max-width: var(--labelWidth, 100%);
      }
    }
  `;ze=a([R("ia-icon-label")],ze);const ft=h`var(--white, #fff)`,qt=h`var(--primaryDisableCTAFill, #767676)`,Wt=h`var(--secondaryCTABorder, #999)`,Gt=h`var(--primaryCTAFill, #194880)`,Oe=h`var(--primaryCTAFillRGB, 25, 72, 128)`,Kt=h`var(--primaryCTABorder, #c5d1df)`,Zt=h`var(--primaryErrorCTAFill, #d9534f)`,Ue=h`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,Jt=h`var(--primaryErrorCTABorder, #d43f3a)`,Xt=h`var(--secondaryCTAFill, #333)`,Re=h`var(--secondaryCTAFillRGB, 51, 51, 51)`,Qt=h`var(--primaryCTABorder, #979797)`,Yt=h`#ee8950`,ei=h`#ec7939`,ti=h`
  .ia-button {
    min-height: 3rem;
    cursor: pointer;
    color: ${ft};
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
    outline-color: ${ft};
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
    background-color: ${qt};
    border: 1px solid ${Wt};
  }
  .ia-button.transparent {
    background-color: transparent;
  }
  .ia-button.warning {
    background-color: ${Yt}
    border-color: ${ei};
  }

  .ia-button.primary {
    background-color: ${Gt};
    border-color: ${Kt};
  }
  .ia-button.primary:hover {
    background-color: rgba(${Oe}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${Oe}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${Oe}, 0.7);
  }

  .ia-button.danger {
    background-color: ${Zt};
    border-color: ${Jt};
  }
  .ia-button.danger:hover {
    background-color: rgba(${Ue}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${Ue}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${Ue}, 0.7);
  }

  .ia-button.dark {
    background-color: ${Xt};
    border-color: ${Qt};
  }
  .ia-button.dark:hover {
    background-color: rgba(${Re}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${Re}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${Re}, 0.7);
  }
`;function l(o){let e,t,i;return typeof o=="object"?(e=o.hashFunction,t=o.expiring,i=o.tags):e=o,(r,n,s)=>{if(s.value!=null)s.value=gt(s.value,e,t,i);else if(s.get!=null)s.get=gt(s.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Ie=new Map;function gt(o,e,t=0,i){const r=Symbol("__memoized_map__");return function(...n){let s;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let d=this[r];if(Array.isArray(i))for(const c of i)Ie.has(c)?Ie.get(c).push(d):Ie.set(c,[d]);if(e||n.length>0||t>0){let c;e===!0?c=n.map(g=>g.toString()).join("!"):e?c=e.apply(this,n):c=n[0];const v=`${c}__timestamp`;let f=!1;if(t>0)if(!d.has(v))f=!0;else{let g=d.get(v);f=Date.now()-g>t}d.has(c)&&!f?s=d.get(c):(s=o.apply(this,n),d.set(c,s),t>0&&d.set(v,Date.now()))}else{const c=this;d.has(c)?s=d.get(c):(s=o.apply(this,n),d.set(c,s))}return s}}class He{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:Boolean(e)}}He.shared=new He;class ce{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}ce.shared=new ce;class be{parseValue(e){return ce.shared.parseValue(e)}}be.shared=new be;class Fe{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}Fe.shared=new Fe;class je{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let i;return t.length===1?i=this.parseNumberFormat(t[0]):i=this.parseColonSeparatedFormat(t),i}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const i=e.map((r,n)=>{const s=parseFloat(r);if(Number.isNaN(s))return t=!0,0;const c=60**(e.length-1-n);return s*Math.floor(c)}).reduce((r,n)=>r+n,0);return t?void 0:i}}je.shared=new je;class Ve{parseValue(e){if(typeof e=="string")return e}}Ve.shared=new Ve;class ii{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let i=[];for(const r of this.separators)if(i=t.split(r),i.length>1)break;return this.parseListValues(i)}parseListValues(e){const i=e.map(n=>n.trim()).map(n=>this.parser.parseValue(n)),r=[];return i.forEach(n=>{n!==void 0&&r.push(n)}),r}}class qe{parseValue(e){if(typeof e=="string")return e}}qe.shared=new qe;class ye{parseValue(e){return String(e)}}ye.shared=new ye;class E{constructor(e,t){this.parser=e,this.rawValue=t}get values(){return this.parseRawValue()}get value(){return this.values[0]}parseRawValue(){if(this.rawValue===void 0)return[];const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const r=this.parser.parseValue(i);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}a([l()],E.prototype,"values",null);a([l()],E.prototype,"value",null);class q extends E{constructor(e){super(He.shared,e)}}class C extends E{constructor(e){super(Fe.shared,e)}}class Ne extends E{constructor(e){super(je.shared,e)}}class b extends E{constructor(e){super(ce.shared,e)}}class p extends E{constructor(e){super(ye.shared,e)}}class ri extends E{constructor(e){super(qe.shared,e)}}class $e extends E{constructor(e){super(be.shared,e)}}class Qe extends E{constructor(e){super(Ve.shared,e)}}class oi extends E{constructor(e,t){super(t,e)}}class ni extends oi{constructor(e){const t=new ii(ye.shared);super(e,t)}}class u{constructor(e){this.rawMetadata=e}get identifier(){var e;return(e=this.rawMetadata)===null||e===void 0?void 0:e.identifier}get addeddate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.addeddate?new C(this.rawMetadata.addeddate):void 0}get audio_codec(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.audio_codec?new p(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.audio_sample_rate?new b(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.avg_rating?new b(this.rawMetadata.avg_rating):void 0}get collection(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection?new p(this.rawMetadata.collection):void 0}get collections_raw(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collections_raw?new p(this.rawMetadata.collections_raw):void 0}get collection_size(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection_size?new $e(this.rawMetadata.collection_size):void 0}get contributor(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.contributor?new p(this.rawMetadata.contributor):void 0}get coverage(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.coverage?new p(this.rawMetadata.coverage):void 0}get creator(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.creator?new p(this.rawMetadata.creator):void 0}get date(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.date?new C(this.rawMetadata.date):void 0}get description(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.description?new p(this.rawMetadata.description):void 0}get downloads(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.downloads?new b(this.rawMetadata.downloads):void 0}get duration(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.duration?new Ne(this.rawMetadata.duration):void 0}get"external-identifier"(){var e,t;return!((e=this.rawMetadata)===null||e===void 0)&&e["external-identifier"]?new p((t=this.rawMetadata)===null||t===void 0?void 0:t["external-identifier"]):void 0}get files_count(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.files_count?new b(this.rawMetadata.files_count):void 0}get indexdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.indexdate?new C(this.rawMetadata.indexdate):void 0}get isbn(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.isbn?new p(this.rawMetadata.isbn):void 0}get issue(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.issue?new p(this.rawMetadata.issue):void 0}get item_count(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.item_count?new b(this.rawMetadata.item_count):void 0}get item_size(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.item_size?new $e(this.rawMetadata.item_size):void 0}get language(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.language?new p(this.rawMetadata.language):void 0}get length(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.length?new Ne(this.rawMetadata.length):void 0}get lineage(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.lineage?new p(this.rawMetadata.lineage):void 0}get month(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.month?new b(this.rawMetadata.month):void 0}get mediatype(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.mediatype?new Qe(this.rawMetadata.mediatype):void 0}get noindex(){var e;return((e=this.rawMetadata)===null||e===void 0?void 0:e.noindex)!=null?new q(this.rawMetadata.noindex):void 0}get notes(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.notes?new p(this.rawMetadata.notes):void 0}get num_favorites(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.num_favorites?new b(this.rawMetadata.num_favorites):void 0}get num_reviews(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.num_reviews?new b(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.openlibrary_edition?new p(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.openlibrary_work?new p(this.rawMetadata.openlibrary_work):void 0}get page_progression(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.page_progression?new ri(this.rawMetadata.page_progression):void 0}get partner(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.partner?new p(this.rawMetadata.partner):void 0}get ppi(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.ppi?new b(this.rawMetadata.ppi):void 0}get publicdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.publicdate?new C(this.rawMetadata.publicdate):void 0}get publisher(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.publisher?new p(this.rawMetadata.publisher):void 0}get reviewdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.reviewdate?new C(this.rawMetadata.reviewdate):void 0}get runtime(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.runtime?new Ne(this.rawMetadata.runtime):void 0}get scanner(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.scanner?new p(this.rawMetadata.scanner):void 0}get source(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.source?new p(this.rawMetadata.source):void 0}get start_localtime(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.start_localtime?new C(this.rawMetadata.start_localtime):void 0}get start_time(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.start_time?new C(this.rawMetadata.start_time):void 0}get stop_time(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.stop_time?new C(this.rawMetadata.stop_time):void 0}get subject(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.subject?new ni(this.rawMetadata.subject):void 0}get taper(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.taper?new p(this.rawMetadata.taper):void 0}get title(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.title?new p(this.rawMetadata.title):void 0}get transferer(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.transferer?new p(this.rawMetadata.transferer):void 0}get track(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.track?new b(this.rawMetadata.track):void 0}get type(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.type?new p(this.rawMetadata.type):void 0}get uploader(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.uploader?new p(this.rawMetadata.uploader):void 0}get utc_offset(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.utc_offset?new b(this.rawMetadata.utc_offset):void 0}get venue(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.venue?new p(this.rawMetadata.venue):void 0}get volume(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.volume?new p(this.rawMetadata.volume):void 0}get week(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.week?new b(this.rawMetadata.week):void 0}get year(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.year?new C(this.rawMetadata.year):void 0}get query(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.query?new p(this.rawMetadata.fields.query):void 0}get date_favorited(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date_favorited?new C(this.rawMetadata.fields.date_favorited):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new p(this.rawMetadata.fields.__href__):void 0}}a([l()],u.prototype,"addeddate",null);a([l()],u.prototype,"audio_codec",null);a([l()],u.prototype,"audio_sample_rate",null);a([l()],u.prototype,"avg_rating",null);a([l()],u.prototype,"collection",null);a([l()],u.prototype,"collections_raw",null);a([l()],u.prototype,"collection_size",null);a([l()],u.prototype,"contributor",null);a([l()],u.prototype,"coverage",null);a([l()],u.prototype,"creator",null);a([l()],u.prototype,"date",null);a([l()],u.prototype,"description",null);a([l()],u.prototype,"downloads",null);a([l()],u.prototype,"duration",null);a([l()],u.prototype,"external-identifier",null);a([l()],u.prototype,"files_count",null);a([l()],u.prototype,"indexdate",null);a([l()],u.prototype,"isbn",null);a([l()],u.prototype,"issue",null);a([l()],u.prototype,"item_count",null);a([l()],u.prototype,"item_size",null);a([l()],u.prototype,"language",null);a([l()],u.prototype,"length",null);a([l()],u.prototype,"lineage",null);a([l()],u.prototype,"month",null);a([l()],u.prototype,"mediatype",null);a([l()],u.prototype,"noindex",null);a([l()],u.prototype,"notes",null);a([l()],u.prototype,"num_favorites",null);a([l()],u.prototype,"num_reviews",null);a([l()],u.prototype,"openlibrary_edition",null);a([l()],u.prototype,"openlibrary_work",null);a([l()],u.prototype,"page_progression",null);a([l()],u.prototype,"partner",null);a([l()],u.prototype,"ppi",null);a([l()],u.prototype,"publicdate",null);a([l()],u.prototype,"publisher",null);a([l()],u.prototype,"reviewdate",null);a([l()],u.prototype,"runtime",null);a([l()],u.prototype,"scanner",null);a([l()],u.prototype,"source",null);a([l()],u.prototype,"start_localtime",null);a([l()],u.prototype,"start_time",null);a([l()],u.prototype,"stop_time",null);a([l()],u.prototype,"subject",null);a([l()],u.prototype,"taper",null);a([l()],u.prototype,"title",null);a([l()],u.prototype,"transferer",null);a([l()],u.prototype,"track",null);a([l()],u.prototype,"type",null);a([l()],u.prototype,"uploader",null);a([l()],u.prototype,"utc_offset",null);a([l()],u.prototype,"venue",null);a([l()],u.prototype,"volume",null);a([l()],u.prototype,"week",null);a([l()],u.prototype,"year",null);a([l()],u.prototype,"query",null);a([l()],u.prototype,"date_favorited",null);a([l()],u.prototype,"__href__",null);class m{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new C(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating)!=null?new b(this.rawMetadata.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new p(this.rawMetadata.fields.collection):void 0}get collection_files_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.collection_files_count)!=null?new b(this.rawMetadata.fields.collection_files_count):void 0}get collection_size(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.collection_size)!=null?new $e(this.rawMetadata.fields.collection_size):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new p(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new C(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new p(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads)!=null?new b(this.rawMetadata.fields.downloads):void 0}get files_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.files_count)!=null?new b(this.rawMetadata.fields.files_count):void 0}get genre(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.genre?new p(this.rawMetadata.fields.genre):void 0}get indexflag(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.indexflag?new p(this.rawMetadata.fields.indexflag):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new p(this.rawMetadata.fields.issue):void 0}get item_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.item_count)!=null?new b(this.rawMetadata.fields.item_count):void 0}get item_size(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.item_size)!=null?new $e(this.rawMetadata.fields.item_size):void 0}get language(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.language?new p(this.rawMetadata.fields.language):void 0}get lending___available_to_borrow(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_borrow)!=null?new q(this.rawMetadata.fields.lending___available_to_borrow):void 0}get lending___available_to_browse(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_browse)!=null?new q(this.rawMetadata.fields.lending___available_to_browse):void 0}get lending___available_to_waitlist(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_waitlist)!=null?new q(this.rawMetadata.fields.lending___available_to_waitlist):void 0}get lending___status(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.lending___status?new p(this.rawMetadata.fields.lending___status):void 0}get licenseurl(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.licenseurl?new p(this.rawMetadata.fields.licenseurl):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new Qe(this.rawMetadata.fields.mediatype):void 0}get month(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.month)!=null?new b(this.rawMetadata.fields.month):void 0}get noindex(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.noindex)!=null?new q(this.rawMetadata.fields.noindex):void 0}get num_favorites(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.num_favorites)!=null?new b(this.rawMetadata.fields.num_favorites):void 0}get num_reviews(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.num_reviews)!=null?new b(this.rawMetadata.fields.num_reviews):void 0}get publicdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.publicdate?new C(this.rawMetadata.fields.publicdate):void 0}get reviewdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.reviewdate?new C(this.rawMetadata.fields.reviewdate):void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new p(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new p(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new p(this.rawMetadata.fields.title):void 0}get type(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.type?new p(this.rawMetadata.fields.type):void 0}get volume(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.volume?new p(this.rawMetadata.fields.volume):void 0}get week(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.week)!=null?new b(this.rawMetadata.fields.week):void 0}get year(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year)!=null?new b(this.rawMetadata.fields.year):void 0}}a([l()],m.prototype,"addeddate",null);a([l()],m.prototype,"avg_rating",null);a([l()],m.prototype,"collection",null);a([l()],m.prototype,"collection_files_count",null);a([l()],m.prototype,"collection_size",null);a([l()],m.prototype,"creator",null);a([l()],m.prototype,"date",null);a([l()],m.prototype,"description",null);a([l()],m.prototype,"downloads",null);a([l()],m.prototype,"files_count",null);a([l()],m.prototype,"genre",null);a([l()],m.prototype,"indexflag",null);a([l()],m.prototype,"issue",null);a([l()],m.prototype,"item_count",null);a([l()],m.prototype,"item_size",null);a([l()],m.prototype,"language",null);a([l()],m.prototype,"lending___available_to_borrow",null);a([l()],m.prototype,"lending___available_to_browse",null);a([l()],m.prototype,"lending___available_to_waitlist",null);a([l()],m.prototype,"lending___status",null);a([l()],m.prototype,"licenseurl",null);a([l()],m.prototype,"mediatype",null);a([l()],m.prototype,"month",null);a([l()],m.prototype,"noindex",null);a([l()],m.prototype,"num_favorites",null);a([l()],m.prototype,"num_reviews",null);a([l()],m.prototype,"publicdate",null);a([l()],m.prototype,"reviewdate",null);a([l()],m.prototype,"source",null);a([l()],m.prototype,"subject",null);a([l()],m.prototype,"title",null);a([l()],m.prototype,"type",null);a([l()],m.prototype,"volume",null);a([l()],m.prototype,"week",null);a([l()],m.prototype,"year",null);class y{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get highlight(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.highlight)===null||t===void 0)&&t.text?new p(this.rawMetadata.highlight.text):void 0}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new C(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating)!=null?new b(this.rawMetadata.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new p(this.rawMetadata.fields.collection):void 0}get created_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.created_on?new C(this.rawMetadata.fields.created_on):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new p(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new C(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new p(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads)!=null?new b(this.rawMetadata.fields.downloads):void 0}get filename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.filename?new p(this.rawMetadata.fields.filename):void 0}get file_basename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.file_basename?new p(this.rawMetadata.fields.file_basename):void 0}get file_creation_mtime(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.file_creation_mtime)!=null?new b(this.rawMetadata.fields.file_creation_mtime):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new p(this.rawMetadata.fields.issue):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new Qe(this.rawMetadata.fields.mediatype):void 0}get page_num(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.page_num)!=null?new b(this.rawMetadata.fields.page_num):void 0}get publicdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.publicdate?new C(this.rawMetadata.fields.publicdate):void 0}get result_in_subfile(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.result_in_subfile)!=null?new q(this.rawMetadata.fields.result_in_subfile):void 0}get reviewdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.reviewdate?new C(this.rawMetadata.fields.reviewdate):void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new p(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new p(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new p(this.rawMetadata.fields.title):void 0}get updated_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.updated_on?new C(this.rawMetadata.fields.updated_on):void 0}get year(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year)!=null?new b(this.rawMetadata.fields.year):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new p(this.rawMetadata.fields.__href__):void 0}}a([l()],y.prototype,"highlight",null);a([l()],y.prototype,"addeddate",null);a([l()],y.prototype,"avg_rating",null);a([l()],y.prototype,"collection",null);a([l()],y.prototype,"created_on",null);a([l()],y.prototype,"creator",null);a([l()],y.prototype,"date",null);a([l()],y.prototype,"description",null);a([l()],y.prototype,"downloads",null);a([l()],y.prototype,"filename",null);a([l()],y.prototype,"file_basename",null);a([l()],y.prototype,"file_creation_mtime",null);a([l()],y.prototype,"issue",null);a([l()],y.prototype,"mediatype",null);a([l()],y.prototype,"page_num",null);a([l()],y.prototype,"publicdate",null);a([l()],y.prototype,"result_in_subfile",null);a([l()],y.prototype,"reviewdate",null);a([l()],y.prototype,"source",null);a([l()],y.prototype,"subject",null);a([l()],y.prototype,"title",null);a([l()],y.prototype,"updated_on",null);a([l()],y.prototype,"year",null);a([l()],y.prototype,"__href__",null);var oe;(function(o){o[o.COUNT=0]="COUNT",o[o.ALPHABETICAL=1]="ALPHABETICAL",o[o.NUMERIC=2]="NUMERIC"})(oe||(oe={}));class Ct{constructor(e){this.buckets=e.buckets,this.doc_count_error_upper_bound=e.doc_count_error_upper_bound,this.sum_other_doc_count=e.sum_other_doc_count,this.first_bucket_key=e.first_bucket_key,this.last_bucket_key=e.last_bucket_key,this.number_buckets=e.number_buckets,this.interval=e.interval}getSortedBuckets(e){const t=[...this.buckets];if(this.isRawNumberBuckets(t))return t;const i=new Intl.Collator;switch(e){case oe.ALPHABETICAL:return t.sort((r,n)=>i.compare(r.key.toString(),n.key.toString()));case oe.NUMERIC:return t.sort((r,n)=>Number(n.key)-Number(r.key));case oe.COUNT:default:return t}}isRawNumberBuckets(e){return typeof this.buckets[0]=="number"}}a([l()],Ct.prototype,"getSortedBuckets",null);class pe{constructor(e){this.rawMetadata=e}get identifier(){var e;return(e=this.rawMetadata)===null||e===void 0?void 0:e.fields.query}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new p(this.rawMetadata.fields.title):void 0}get query(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.query?new p(this.rawMetadata.fields.query):void 0}get date_favorited(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date_favorited?new C(this.rawMetadata.fields.date_favorited):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new p(this.rawMetadata.fields.__href__):void 0}}a([l()],pe.prototype,"title",null);a([l()],pe.prototype,"query",null);a([l()],pe.prototype,"date_favorited",null);a([l()],pe.prototype,"__href__",null);class Ye{constructor(e,t){var i,r,n,s,d,c,v;this.schema=t;const f=t==null?void 0:t.hit_type;this.totalResults=(r=(i=e==null?void 0:e.hits)===null||i===void 0?void 0:i.total)!==null&&r!==void 0?r:0,this.returnedCount=(s=(n=e==null?void 0:e.hits)===null||n===void 0?void 0:n.returned)!==null&&s!==void 0?s:0,this.results=(v=(c=(d=e==null?void 0:e.hits)===null||d===void 0?void 0:d.hits)===null||c===void 0?void 0:c.map(g=>{var _;return Ye.createResult((_=g.hit_type)!==null&&_!==void 0?_:f,g)}))!==null&&v!==void 0?v:[],e!=null&&e.aggregations&&(this.aggregations=Object.entries(e.aggregations).reduce((g,[_,x])=>(g[_]=new Ct(x),g),{})),e!=null&&e.collection_titles&&(this.collectionTitles=e.collection_titles),e!=null&&e.collection_extra_info&&(this.collectionExtraInfo=e.collection_extra_info)}static createResult(e,t){switch(e){case"item":return new m(t);case"text":return new y(t);case"favorited_search":return new pe(t);default:return new m(t)}}}class ai{constructor(e){this.clientParameters=e.client_parameters,this.backendRequests=e.backend_requests,this.kind=e.kind}}class si{constructor(e){var t,i,r;this.rawResponse=e,this.request=new ai(e.request),this.responseHeader=(t=e.response)===null||t===void 0?void 0:t.header,this.response=new Ye((i=e.response)===null||i===void 0?void 0:i.body,(r=e.response)===null||r===void 0?void 0:r.hit_schema)}}class Lt{static aggregateSearchParamsAsString(e){if(e.omit)return"false";if(e.advancedParams){const t=e.advancedParams.map(r=>({terms:r}));return JSON.stringify(t)}if(e.simpleParams)return e.simpleParams.join(",")}static sortParamsAsString(e){return`${e.field}:${e.direction}`}static filterParamsAsString(e){return JSON.stringify(e)}static generateURLSearchParams(e){const t=new URLSearchParams;if(t.append("user_query",e.query),e.pageType&&t.append("page_type",String(e.pageType)),e.pageTarget&&t.append("page_target",String(e.pageTarget)),e.rows!=null&&t.append("hits_per_page",String(e.rows)),e.page!=null&&t.append("page",String(e.page)),e.fields&&e.fields.length>0&&t.append("fields",e.fields.join(",")),e.filters&&Object.keys(e.filters).length>0){const r=this.filterParamsAsString(e.filters);r&&r!=="{}"&&t.append("filter_map",r)}if(e.sort&&e.sort.length>0){const r=e.sort.map(n=>this.sortParamsAsString(n));t.append("sort",r.join(","))}const i=e.aggregations;if(i){const r=this.aggregateSearchParamsAsString(i);r&&t.append("aggregations",r)}if(e.aggregationsSize!=null&&t.append("aggregations_size",String(e.aggregationsSize)),e.debugging&&t.append("debugging","true"),e.uid&&t.append("uid",e.uid),e.includeClientUrl!==!1){const r=window.location.href.slice(0,400);e.query.length<=1e3&&t.append("client_url",r)}return t}}var ne;(function(o){o.networkError="SearchService.NetworkError",o.itemNotFound="SearchService.ItemNotFound",o.decodingError="SearchService.DecodingError",o.searchEngineError="SearchService.SearchEngineError"})(ne||(ne={}));class li extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}class kt{constructor(e){var t,i;this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",this.debuggingEnabled=(i=e==null?void 0:e.debuggingEnabled)!==null&&i!==void 0?i:!1,(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null;const r=new URL(window.location.href),n=r.searchParams.get("scope"),s=r.searchParams.get("caching"),d=r.searchParams.get("verbose");(e==null?void 0:e.scope)!==void 0?this.requestScope=e.scope:n&&(this.requestScope=n),(e==null?void 0:e.caching)!==void 0?this.cachingFlags=e.caching:s&&(this.cachingFlags=s),(e==null?void 0:e.verbose)!==void 0?this.verbose=e.verbose:d&&(this.verbose=!!d)}async fetchUrl(e,t){var i,r;const n=new URL(e);this.requestScope&&n.searchParams.set("scope",this.requestScope),this.cachingFlags&&n.searchParams.set("caching",this.cachingFlags);let s;try{const d=(i=t==null?void 0:t.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};s=await fetch(n.href,d)}catch(d){const c=d instanceof Error?d.message:typeof d=="string"?d:"Unknown error";return this.getErrorResult(ne.networkError,c)}try{const d=await s.json();this.verbose&&this.printResponse(d),d.debugging&&this.printDebuggingInfo(d);const c=(r=d.response)===null||r===void 0?void 0:r.error;return c?this.getErrorResult(ne.searchEngineError,c.message,c.forensics):{success:d}}catch(d){const c=d instanceof Error?d.message:typeof d=="string"?d:"Unknown error";return this.getErrorResult(ne.decodingError,c)}}getErrorResult(e,t,i){return{error:new li(e,t,i)}}printResponse(e){var t,i,r,n,s;try{const d=JSON.parse(JSON.stringify(e)),c=(r=(i=(t=d==null?void 0:d.response)===null||t===void 0?void 0:t.body)===null||i===void 0?void 0:i.hits)===null||r===void 0?void 0:r.hits;if(Array.isArray(c)&&c.length>1){const f=[];f.push(c[0]),f.push(`*** ${c.length-1} hits omitted ***`),d.response.body.hits.hits=f}const v=(s=(n=d==null?void 0:d.response)===null||n===void 0?void 0:n.body)===null||s===void 0?void 0:s.aggregations;v&&Object.entries(v).forEach(([f,g])=>{var _,x,B,k;if(((x=(_=g)===null||_===void 0?void 0:_.buckets)===null||x===void 0?void 0:x.length)>0){const A=JSON.parse(JSON.stringify(g));A.buckets=`*** ${(k=(B=A.buckets)===null||B===void 0?void 0:B.length)!==null&&k!==void 0?k:0} buckets omitted ***`,d.response.body.aggregations[f]=A}}),console.log("***** RESPONSE RECEIVED *****"),console.groupCollapsed("Response"),console.log(JSON.stringify(d,null,2)),console.groupEnd()}catch(d){console.error("Error printing search response:",d)}}printDebuggingInfo(e){var t,i;const r=e.debugging,n=(t=r.messages)!==null&&t!==void 0?t:[],s=(i=r.data)!==null&&i!==void 0?i:{};console.log("***** BEGIN DEBUGGING *****"),console.log("Full response:"),console.log(JSON.stringify(e,null,2)),console.group("Debug messages");for(const d of n)console.log(d);console.groupEnd(),console.group("Debug data");for(const[d,c]of Object.entries(s))console.log(d,c);console.groupEnd(),console.log("***** END DEBUGGING *****")}}class di extends kt{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=Lt.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=metadata&${i}`;return this.fetchUrl(r)}}class ci extends kt{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=Lt.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=fts&${i}`;return this.fetchUrl(r)}}var G;(function(o){o[o.METADATA=0]="METADATA",o[o.FULLTEXT=1]="FULLTEXT"})(G||(G={}));class Q{constructor(e={}){this.backendOptions=e}async search(e,t=G.METADATA){const r=await Q.getBackendForSearchType(t,this.backendOptions).performSearch(e);return r.error?r:{success:new si(r.success)}}static getBackendForSearchType(e,t={}){switch(e){case G.FULLTEXT:return new ci(t);case G.METADATA:default:return new di(t)}}}Q.default=new Q;a([l((o,e={})=>{const{includeCredentials:t=!1,verbose:i=!1,scope:r="",baseUrl:n=""}=e;return`${o};${t};${i};${r};${n}`})],Q,"getBackendForSearchType",null);var mt;(function(o){o.INCLUDE="inc",o.EXCLUDE="exc",o.GREATER_THAN="gt",o.GREATER_OR_EQUAL="gte",o.LESS_THAN="lt",o.LESS_OR_EQUAL="lte"})(mt||(mt={}));var ae;(function(o){o.NETWORK="failed to connect to user lists backend service",o.BAD_RESPONSE="malformed response from backend",o.USER_NOT_FOUND="user with the given id was not found",o.LIST_NOT_FOUND="user list with the given id was not found",o.LIST_MEMBER_NOT_FOUND="user list member with the given id was not found",o.ITEM_NOT_TOUND="item with the given id was not found"})(ae||(ae={}));class ui extends Error{constructor(e,t,i){super(t,i),this.reason=e}}class T{constructor({fetchHandler:e,searchService:t,userService:i,baseUrl:r=T.DEFAULT_BASE_URL}){this.fetchHandler=e,this.searchService=t,this.userService=i,this.baseUrl=r}async fetchEndpoint(e,t,i){try{const r=await this.fetchHandler.fetchApiResponse(e,{method:t,body:i,includeCredentials:!0});return r.success?{success:r.value}:{error:T.getErrorResult(ae.LIST_NOT_FOUND,r.error)}}catch(r){return{error:T.getErrorResult(ae.NETWORK,r)}}}async fetchListsForUser(e){var t;const i=(t=await this.userService.getLoggedInUser())===null||t===void 0?void 0:t.success,r=(i==null?void 0:i.itemname)===e?"me":e;return this.fetchEndpoint(`${this.baseUrl}/services/users/${r}/lists`)}async fetchList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/${e}/lists/${t}`)}async fetchOwnListsContainingItem(e){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists?item=${e}`)}async fetchListMembers(e,t){const i=await this.fetchList(e,t);if(!i.success)return i;const{members:r}=i.success;if(!r)throw T.getErrorResult(ae.BAD_RESPONSE);return{success:r}}async fetchListMemberSearchResults(e,t){const i=await this.fetchListMembers(e,t);if(!i.success)return i;const r=i.success;if(r.length===0)return{success:[]};const n=`identifier:(${r.map(d=>d.identifier).join(" OR ")})`,s=await this.searchService.search({query:n,rows:r.length,aggregations:{omit:!0}},G.METADATA);return s.success?{success:s.success.response.results}:{error:s.error}}async createList(e){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists`,"POST",JSON.stringify(e))}async updateList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}`,"PATCH",JSON.stringify(t))}async deleteList(e){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}`,"DELETE")}async addMemberToList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}/members`,"POST",JSON.stringify(t))}async removeMemberFromList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}/members/${t}`,"DELETE")}static getErrorResult(e,t){return new ui(e,T.getErrorMessage(t),{cause:t})}static getErrorMessage(e){return e instanceof Error?e.message:typeof e=="string"?e:"Unknown error"}}T.DEFAULT_BASE_URL="https://archive.org";let O=class extends S{async saveListDetails(e){var t,i,r;e.preventDefault();try{const n={list_name:this.listName.value,description:this.listDescription.value,is_private:this.listPrivate.checked};let s;if(!((t=this.userList)===null||t===void 0)&&t.id?s=await((i=this.userListsService)===null||i===void 0?void 0:i.updateList(this.userList.id,n)):s=await((r=this.userListsService)===null||r===void 0?void 0:r.createList(n)),s.success)this.dispatchEvent(new CustomEvent("userListSaved",{detail:s.success}));else throw s.error}catch(n){this.dispatchEvent(new CustomEvent("userListError",{detail:{error:n}})),console.log("error",n)}}emitCloseModalEvent(){this.dispatchEvent(new CustomEvent("listModalClosed"))}render(){var e,t,i,r,n;return w`
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
              .checked="${(n=this.userList)===null||n===void 0?void 0:n.is_private}"
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
    `}};O.styles=[ti,h`
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
    `];a([$({type:Object}),te("design:type",Object)],O.prototype,"userList",void 0);a([$({type:Object}),te("design:type",T)],O.prototype,"userListsService",void 0);a([ie("#id"),te("design:type",HTMLInputElement)],O.prototype,"listId",void 0);a([ie("#name"),te("design:type",HTMLInputElement)],O.prototype,"listName",void 0);a([ie("#description"),te("design:type",HTMLInputElement)],O.prototype,"listDescription",void 0);a([ie("#private"),te("design:type",HTMLInputElement)],O.prototype,"listPrivate",void 0);O=a([R("iaux-userlist-settings")],O);function hi(o){var e=[],t="";for(t in o)e.push(t);return e}function We(o){return o=JSON.stringify(o),!(typeof o!="string"||!/^\{[\s\S]*\}$/.test(o))}function pi(o){return o instanceof Array}function vi(o){return Array.prototype.slice.call(o)}function Y(){if(!(this instanceof Y))return new Y}Y.prototype={get:function(o){for(var e=o+"=",t=document.cookie.split(";"),i=0;i<t.length;i++){for(var r=t[i];r.charAt(0)==" ";)r=r.substring(1,r.length);if(r.indexOf(e)==0)return decodeURI(r.substring(e.length,r.length))}return!1},set:function(o,e,t){if(We(o))for(const i in o)this.set(i,o[i],e,t);else if(typeof o=="string"){const i=We(t)?t:{expires:t},r=i.path!==void 0?`;path=${i.path};path=/`:";path=/",n=i.domain?`;domain=${i.domain}`:"",s=i.secure?";secure":"";let d=i.expires!==void 0?i.expires:"";typeof d=="string"&&d!==""?d=new Date(d):typeof d=="number"&&(d=new Date(+new Date+1e3*60*60*24*d)),d!==""&&"toGMTString"in d&&(d=`;expires=${d.toGMTString()}`);const c=i.sameSite?`;SameSite=${i.sameSite}`:"";document.cookie=`${o}=${encodeURI(e)+d+r+n+s+c}`}},remove:function(o){o=pi(o)?o:vi(arguments);for(var e=0,t=o.length;e<t;e++)this.set(o[e],"",-1);return o},clear:function(o){return o?this.remove(o):this.remove(hi(this.all()))},all:function(){if(document.cookie==="")return{};for(var o=document.cookie.split("; "),e={},t=0,i=o.length;t<i;t++){var r=o[t].split("=");e[decodeURI(r[0])]=decodeURI(r[1])}return e}};let P=null;const St=function(o,e,t){const i=arguments;if(P||(P=Y()),i.length===0)return P.all();if(i.length===1&&o===null)return P.clear();if(i.length===2&&!e)return P.clear(o);if(typeof o=="string"&&!e)return P.get(o);if(typeof o=="string"&&e||We(o))return P.set(o,e,t)};for(const o in Y.prototype)St[o]=Y.prototype[o];class et{constructor(e){this.name=e.name,this.source=e.source,this.mtime=e.mtime,this.size=e.size,this.md5=e.md5,this.crc32=e.crc32,this.sha1=e.sha1,this.format=e.format,this.rotation=e.rotation}static fromResponse(e){const t=ce.shared,i=be.shared;let r,n,s;return e.mtime&&(r=t.parseValue(e.mtime)),e.size&&(n=i.parseValue(e.size)),e.rotation&&(s=t.parseValue(e.rotation)),new et({name:e.name,source:e.source,mtime:r,size:n,md5:e.md5,crc32:e.crc32,sha1:e.sha1,format:e.format,rotation:s})}}class Me{constructor(e){this.username=e.username,this.itemname=e.itemname,this.screenname=e.screenname,this.privs=e.privs,this.image_info=e.image_info,this.isArchiveOrgUser=this.username.endsWith("@archive.org");const{itemname:t}=e;this.userid=t.startsWith("@")?t.substring(1):t}static fromUserResponse(e){return new Me({username:e.username,itemname:e.itemname,screenname:e.screenname,privs:e.privs,image_info:et.fromResponse(e.image_info)})}}var W;(function(o){o.userNotLoggedIn="UserService.userNotLoggedIn",o.networkError="UserService.networkError",o.decodingError="UserService.decodingError"})(W||(W={}));class fe extends Error{constructor(e,t){super(t),this.name=e,this.type=e}}class fi{constructor(e){var t,i;this.userServiceEndpoint=(t=e==null?void 0:e.userServiceEndpoint)!==null&&t!==void 0?t:"https://archive.org/services/user.php?op=whoami",this.cache=e==null?void 0:e.cache,this.cacheTTL=e==null?void 0:e.cacheTTL,this.userCacheKey=(i=e==null?void 0:e.userCacheKey)!==null&&i!==void 0?i:"loggedInUserInfo"}async getLoggedInUser(){const e=St.get("logged-in-user");if(!(e!==!1))return{error:new fe(W.userNotLoggedIn)};const i=await this.getPersistedUser();if(i){const n=Me.fromUserResponse(i);if(e===n.username)return{success:n}}if(this.fetchPromise)return this.fetchPromise=this.fetchPromise.then(n=>n),this.fetchPromise;this.fetchPromise=this.fetchUser();const r=await this.fetchPromise;return this.fetchPromise=void 0,r}async fetchUser(){let e;try{e=await fetch(this.userServiceEndpoint,{credentials:"include"})}catch(n){return{error:new fe(W.networkError,n.message)}}let t;try{t=await e.json()}catch(n){return{error:new fe(W.decodingError,n.message)}}if(!t.success||!t.value)return{error:new fe(W.userNotLoggedIn,t.error)};const i=t.value,r=Me.fromUserResponse(i);return await this.persistUser(i),{success:r}}async getPersistedUser(){var e;return(e=this.cache)===null||e===void 0?void 0:e.get(this.userCacheKey)}async persistUser(e){var t;await((t=this.cache)===null||t===void 0?void 0:t.set({key:this.userCacheKey,value:e,ttl:this.cacheTTL}))}}class gi{async fetchApiResponse(e,t){const i={};return t!=null&&t.includeCredentials&&(i.credentials="include"),t!=null&&t.method&&(i.method=t.method),t!=null&&t.body&&(i.body=t.body),await(await fetch(e,i)).json()}}const mi="https://ia-petabox-webdev-6421-user-list-servive-phase-2.archive.org";class me{constructor(e){var t,i,r,n,s,d,c;this.title=e==null?void 0:e.title,this.subtitle=e==null?void 0:e.subtitle,this.headline=e==null?void 0:e.headline,this.message=e==null?void 0:e.message,this.headerColor=(t=e==null?void 0:e.headerColor)!==null&&t!==void 0?t:"#55A183",this.bodyColor=(i=e==null?void 0:e.bodyColor)!==null&&i!==void 0?i:"#f5f5f7",this.showProcessingIndicator=(r=e==null?void 0:e.showProcessingIndicator)!==null&&r!==void 0?r:!1,this.processingImageMode=(n=e==null?void 0:e.processingImageMode)!==null&&n!==void 0?n:"complete",this.showCloseButton=(s=e==null?void 0:e.showCloseButton)!==null&&s!==void 0?s:!0,this.showHeaderLogo=(d=e==null?void 0:e.showHeaderLogo)!==null&&d!==void 0?d:!0,this.closeOnBackdropClick=(c=e==null?void 0:e.closeOnBackdropClick)!==null&&c!==void 0?c:!0}}const wi=Object.freeze({processing:"processing",complete:"complete"});class _i extends S{static get properties(){return{mode:{type:String}}}constructor(){super(),this.mode=wi.processing}render(){return w`
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
    `}static get styles(){const e=h`var(--activityIndicatorCheckmarkColor, #31A481)`,t=h`var(--activityIndicatorCompletedRingColor, #31A481)`,i=h`var(--activityIndicatorLoadingRingColor, #333333)`,r=h`var(--activityIndicatorLoadingDotColor, #333333)`;return h`
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
    `}}window.customElements.define("ia-activity-indicator",_i);const bi=w`
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
`,yi=w`
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
`;let Ge=class extends S{constructor(){super(...arguments),this.config=new me}render(){return w`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton?this.closeButtonTemplate:""}
            ${this.config.showHeaderLogo?w`<div class="logo-icon">${yi}</div>`:M}
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
    `}handleCloseButton(){const e=new Event("closeButtonPressed");this.dispatchEvent(e)}get closeButtonTemplate(){return w`
      <button
        type="button"
        class="close-button"
        tabindex="0"
        @click=${this.handleCloseButton}
      >
        ${bi}
      </button>
    `}static get styles(){const e=h`var(--modalLogoSize, 6.5rem)`,t=h`var(--processingImageSize, 7.5rem)`,i=h`var(--modalCornerRadius, 1rem)`,r=h`var(--modalBorder, 2px solid black)`,n=h`var(--modalBottomMargin, 2.5rem)`,s=h`var(--modalTopMargin, 5rem)`,d=h`var(--modalHeaderBottomPadding, 0.5em)`,c=h`var(--modalBottomPadding, 2rem)`,v=h`var(--modalScrollOffset, 5px)`,f=h`var(--modalTitleFontSize, 1.8rem)`,g=h`var(--modalSubtitleFontSize, 1.4rem)`,_=h`var(--modalHeadlineFontSize, 1.6rem)`,x=h`var(--modalMessageFontSize, 1.4rem)`,B=h`var(--modalTitleLineHeight, normal)`,k=h`var(--modalSubtitleLineHeight, normal)`,A=h`var(--modalHeadlineLineHeight, normal)`,j=h`var(--modalMessageLineHeight, normal)`;return h`
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
        font-size: ${f};
        font-weight: bold;
        line-height: ${B};
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
        padding: 0 1rem calc(${c} - ${v}) 1rem;
        color: #333;
        margin-bottom: 2.5rem;
        min-height: 5rem;
      }

      .content {
        overflow-y: auto;
        max-height: calc(100vh - (16.5rem + ${n}));
        min-height: 5rem;
        padding: 0 0 calc(${v}) 0;
      }

      .headline {
        font-size: ${_};
        font-weight: bold;
        text-align: center;
        line-height: ${A};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${x};
        line-height: ${j};
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
    `}};a([$({type:Object})],Ge.prototype,"config",void 0);Ge=a([R("modal-template")],Ge);function $i(o,e,t){var i=t||{},r=i.noTrailing,n=r===void 0?!1:r,s=i.noLeading,d=s===void 0?!1:s,c=i.debounceMode,v=c===void 0?void 0:c,f,g=!1,_=0;function x(){f&&clearTimeout(f)}function B(A){var j=A||{},I=j.upcomingOnly,Ce=I===void 0?!1:I;x(),g=!Ce}function k(){for(var A=arguments.length,j=new Array(A),I=0;I<A;I++)j[I]=arguments[I];var Ce=this,tt=Date.now()-_;if(g)return;function ve(){_=Date.now(),e.apply(Ce,j)}function it(){f=void 0}!d&&v&&!f&&ve(),x(),v===void 0&&tt>o?d?(_=Date.now(),n||(f=setTimeout(v?it:ve,o))):ve():n!==!0&&(f=setTimeout(v?it:ve,v===void 0?o-tt:o))}return k.cancel=B,k}var z;(function(o){o.Open="open",o.Closed="closed"})(z||(z={}));class Mi{constructor(e){this.windowResizeThrottler=$i(100,this.updateModalContainerHeight,{noLeading:!1,noTrailing:!1}).bind(this),this.modalManager=e}handleModeChange(e){switch(e){case z.Open:this.startResizeListener(),this.stopDocumentScroll();break;case z.Closed:this.stopResizeListener(),this.resumeDocumentScroll();break}}updateModalContainerHeight(){this.modalManager.style.setProperty("--containerHeight",`${window.innerHeight}px`)}stopDocumentScroll(){document.body.classList.add("modal-manager-open")}resumeDocumentScroll(){document.body.classList.remove("modal-manager-open")}startResizeListener(){window.addEventListener("resize",this.windowResizeThrottler)}stopResizeListener(){window.removeEventListener("resize",this.windowResizeThrottler)}}let ee=class extends S{constructor(){super(...arguments),this.mode=z.Closed,this.hostBridge=new Mi(this),this.closeOnBackdropClick=!0}render(){return w`
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          tabindex="0"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `}getMode(){return this.mode}closeModal(){this.mode=z.Closed}callUserClosedModalCallback(){const e=this.userClosedModalCallback;this.userClosedModalCallback=void 0,e&&e()}showModal(e){return Et(this,void 0,void 0,function*(){this.closeOnBackdropClick=e.config.closeOnBackdropClick,this.userClosedModalCallback=e.userClosedModalCallback,this.modalTemplate.config=e.config,this.customModalContent=e.customModalContent,this.mode=z.Open,yield this.modalTemplate.updateComplete,this.modalTemplate.focus()})}updated(e){e.has("mode")&&this.handleModeChange()}backdropClicked(){this.closeOnBackdropClick&&(this.closeModal(),this.callUserClosedModalCallback())}handleModeChange(){this.hostBridge.handleModeChange(this.mode),this.emitModeChangeEvent()}emitModeChangeEvent(){const e=new CustomEvent("modeChanged",{detail:{mode:this.mode}});this.dispatchEvent(e)}closeButtonPressed(){this.closeModal(),this.callUserClosedModalCallback()}static get styles(){const e=h`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`,t=h`var(--modalBackdropZindex, 1000)`,i=h`var(--modalWidth, 32rem)`,r=h`var(--modalMaxWidth, 95%)`,n=h`var(--modalZindex, 2000)`;return h`
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
    `}};a([$({type:String,reflect:!0})],ee.prototype,"mode",void 0);a([$({type:Object})],ee.prototype,"customModalContent",void 0);a([$({type:Object})],ee.prototype,"hostBridge",void 0);a([ie("modal-template")],ee.prototype,"modalTemplate",void 0);ee=a([R("modal-manager")],ee);async function xi(o,e){let t=document.querySelector("modal-manager");if(!t){const i=document.querySelector("body");t=document.createElement("modal-manager"),i==null||i.appendChild(t)}t==null||t.setAttribute("id","create-user-list-modal"),t.showModal({config:new me({title:w`List settings`,headerColor:"#194880",showCloseButton:!0,showHeaderLogo:!1,closeOnBackdropClick:!0}),customModalContent:w`
      <iaux-userlist-settings
        .userList=${{id:void 0,list_name:"",description:"",is_private:!1}}
        .userListsService=${o}
        @listModalClosed=${()=>{t.showModal({config:new me,customModalContent:void 0}),t.closeModal()}}
        @userListSaved=${async i=>{window.dispatchEvent(new CustomEvent("createUserList",{detail:{created:i.detail},bubbles:!0,composed:!0})),t.showModal({config:new me,customModalContent:void 0}),t.closeModal(),e==null||e()}}
      ></iaux-userlist-settings>
    `})}let ue=class extends S{constructor(){super(...arguments),this.item="",this.lists=[]}get checkIcon(){return Z`<svg viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style="height: 12px; width: 12px;"
    >
    <path
      d="m33.3333333 90-33.3333333-33.3333333 13.3333333-13.3333334 20 20 53.3333334-53.3333333 13.3333333 13.3333333z"
      fill-rule="evenodd"
    />
  </svg>`}get plusIcon(){return Z`<svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style="height: 12px; width: 12px;"
      >
    <g fill-rule="nonzero">
      <path d="m49.9459358 0c13.7978412 0 25.5896453 4.88776371 35.3754122 14.6632911 9.7857669 9.7755275 14.678652 21.554993 14.678652 35.3383967 0 13.7800281-4.8928851 25.5594936-14.678652 35.3350211-9.7857669 9.7755274-21.577571 14.6632911-35.3754122 14.6632911s-25.5716235-4.8877637-35.3213471-14.6632911c-9.74972353-9.7755275-14.6245887-21.554993-14.6245887-35.3383967-.00224931-9.0014064 2.23243779-17.3524613 6.70406469-25.0531645 4.47162691-7.7007033 10.54380341-13.7834037 18.21652941-18.24810129 7.6727261-4.46469761 16.0145067-6.69704641 25.0253417-6.69704641zm0 6c-7.9548389 0-15.2549008 1.95357387-22.0076943 5.8829701-6.7720278 3.9405885-12.0963254 9.2741139-16.0455165 16.0751171-3.93842488 6.7824623-5.89471047 14.0931257-5.89272481 22.040225 0 12.1941053 4.24437231 22.4500702 12.87283241 31.1013666 8.6242501 8.6470752 18.8695883 12.9003212 31.0731032 12.9003212 12.2065273 0 22.4734846-4.2557068 31.1349929-12.9081521 8.6603017-8.6512398 12.9190715-18.9040965 12.9190715-31.0935357l-.0036695-.6147591c-.1419586-11.9183989-4.4018851-21.9707923-12.915402-30.475401-8.6615083-8.6524453-18.9284656-12.9081521-31.1349929-12.9081521z" />
      <path d="m56 23v22h22v11h-22v22h-11l-.001-22h-21.999v-11h21.999l.001-22z" />
    </g>
  </svg>`}renderUserListOption(e){const{label:t,isSelected:i,id:r}=e,n=i?"selected":"",s=w`<button
      id="${r}"
      @click=${()=>this.optionClicked(e)}
    >
      ${t}
    </button> `;return w`<li class=${n}>${s}</li>`}optionClicked(e){var t;this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:e}})),(t=e.selectedHandler)===null||t===void 0||t.call(e,e)}checkedIcon(e){return e?w`${this.checkIcon}`:w`<div style="width: 12px; height: 12px;"></div>`}get userListOptions(){const e=[];this.lists.forEach(i=>{const r={label:w` <ia-icon-label>
          <div slot="icon">${this.checkedIcon(i.item_is_member)}</div>
          <div class="truncate">${i.list_name}</div>
        </ia-icon-label>`,id:i.id,isSelected:i.item_is_member,selectedHandler:n=>this.onSelected(n)};e.push(r),console.log("listOption",r)});const t={label:w`<ia-icon-label>
        <div slot="icon">${this.plusIcon}</div>
        Create new list
      </ia-icon-label>`,id:"create-new-list",selectedHandler:()=>this.createList()};return e.push(t),e}async createList(){await xi(this.userListsService,()=>this.closeDropdown())}async addMember(e){var t;await((t=this.userListsService)===null||t===void 0?void 0:t.addMemberToList(e,{identifier:this.item}))}async removeMember(e,t){var i;await((i=this.userListsService)===null||i===void 0?void 0:i.removeMemberFromList(e,t))}async onSelected(e){var t;let i=0;const r=this.lists.find(s=>e.id===s.id)||{},n=(t=r.members)===null||t===void 0?void 0:t.find(s=>s.identifier===this.item);n?(await this.removeMember(r.id,n.member_id),i-=1):(await this.addMember(r.id),i+=1),this.dispatchEvent(new CustomEvent("selectDropdown",{detail:{selected:i},bubbles:!0,composed:!0})),this.closeDropdown()}closeDropdown(){this.dispatchEvent(new CustomEvent("closeDropdown",{bubbles:!0,composed:!0}))}render(){return w`
      ${this.userListOptions.map(e=>this.renderUserListOption(e))}
    `}static get styles(){return h`
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
    `}};a([$({type:String})],ue.prototype,"item",void 0);a([$({type:Array})],ue.prototype,"lists",void 0);a([$({type:Object})],ue.prototype,"userListsService",void 0);ue=a([R("item-userlists")],ue);let F=class extends S{constructor(){super(),this.item="",this.selectedCount=0,this.userListData=[],this.userListsService=new T({fetchHandler:new gi,searchService:Q.default,userService:new fi,baseUrl:mi});const e=i=>{this.selectedCount=i.detail.selected,this.initUserLists()};this.addEventListener("selectDropdown",e);const t=i=>{this.selectedCount+=1,console.log("createUserList listener",i.detail.created),this.addMember(i.detail.created.id),this.dispatchEvent(new CustomEvent("closeDropdown",{bubbles:!0,composed:!0}))};window.addEventListener("createUserList",t)}connectedCallback(){var e;(e=super.connectedCallback)===null||e===void 0||e.call(this),this.initUserLists()}async addMember(e){await this.userListsService.addMemberToList(e,{identifier:this.item}),await this.initUserLists()}async initUserLists(){console.log("fetching userlist data for item",this.item);const e=await this.userListsService.fetchOwnListsContainingItem(this.item);e.success?(console.log("userlist data",e.success),this.userListData=e.success,this.selectedCount=this.userListData.filter(t=>t.item_is_member).length):console.error("Error loading userlist data",e.error)}get checkIcon(){return Z`<svg viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style="width: 16px; height: 16px;"
    >
    <path
      d="m33.3333333 90-33.3333333-33.3333333 13.3333333-13.3333334 20 20 53.3333334-53.3333333 13.3333333 13.3333333z"
      fill-rule="evenodd"
    />
  </svg>`}get plusIcon(){return Z`<svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style="width: 16px; height: 16px;"
      >
    <g fill-rule="nonzero">
      <path d="m49.9459358 0c13.7978412 0 25.5896453 4.88776371 35.3754122 14.6632911 9.7857669 9.7755275 14.678652 21.554993 14.678652 35.3383967 0 13.7800281-4.8928851 25.5594936-14.678652 35.3350211-9.7857669 9.7755274-21.577571 14.6632911-35.3754122 14.6632911s-25.5716235-4.8877637-35.3213471-14.6632911c-9.74972353-9.7755275-14.6245887-21.554993-14.6245887-35.3383967-.00224931-9.0014064 2.23243779-17.3524613 6.70406469-25.0531645 4.47162691-7.7007033 10.54380341-13.7834037 18.21652941-18.24810129 7.6727261-4.46469761 16.0145067-6.69704641 25.0253417-6.69704641zm0 6c-7.9548389 0-15.2549008 1.95357387-22.0076943 5.8829701-6.7720278 3.9405885-12.0963254 9.2741139-16.0455165 16.0751171-3.93842488 6.7824623-5.89471047 14.0931257-5.89272481 22.040225 0 12.1941053 4.24437231 22.4500702 12.87283241 31.1013666 8.6242501 8.6470752 18.8695883 12.9003212 31.0731032 12.9003212 12.2065273 0 22.4734846-4.2557068 31.1349929-12.9081521 8.6603017-8.6512398 12.9190715-18.9040965 12.9190715-31.0935357l-.0036695-.6147591c-.1419586-11.9183989-4.4018851-21.9707923-12.915402-30.475401-8.6615083-8.6524453-18.9284656-12.9081521-31.1349929-12.9081521z" />
      <path d="m56 23v22h22v11h-22v22h-11l-.001-22h-21.999v-11h21.999l.001-22z" />
    </g>
  </svg>`}get mainButton(){return w`
      <div class="action-bar-text">
        <ia-icon-label>
          <div slot="icon" class="icon-img">
            ${this.selectedCount>0?this.checkIcon:this.plusIcon}
          </div>
          <div class="label">Add to list</div>
          <div class="label-sm">Lists</div>
        </ia-icon-label>
      </div>
    `}get itemUserlists(){return w`
      <item-userlists
        slot="list"
        .identifier=${this.item}
        .lists=${this.userListData}
        .userListsService=${this.userListsService}
      >
      </item-userlists>
    `}render(){return w`
      <div class="list-container">
        <ia-dropdown
          class="list-dropdown"
          ?openViaCaret=${!1}
          ?closeOnSelect=${!0}
          ?includeSelectedOption=${!0}
          ?isCustomList=${!0}
          ?closeOnEscape=${!0}
        >
          <div class="list-title" slot="dropdown-label">${this.mainButton}</div>
          ${this.itemUserlists}
        </ia-dropdown>
      </div>
    `}};F.styles=h`
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

    svg {
      height: 30px;
      width: 30px;
    }
  `;a([$({type:String})],F.prototype,"item",void 0);a([Xe()],F.prototype,"selectedCount",void 0);a([Xe()],F.prototype,"userListData",void 0);a([Xe()],F.prototype,"userListsService",void 0);F=a([R("ia-item-user-lists")],F);let Ke=class extends S{render(){return w`
      <div>
        <ia-item-user-lists></ia-item-user-lists>
      </div>
    `}};Ke.styles=h`
    :host {
      display: block;
    }
    div {
      display: flex;
    }
  `;Ke=a([R("app-root")],Ke);
