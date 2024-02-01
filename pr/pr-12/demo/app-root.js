(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();function s(o,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var l=o.length-1;l>=0;l--)(a=o[l])&&(n=(r<3?a(n):r>3?a(e,t,n):a(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n}function ie(o,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,e)}function Pt(o,e,t,i){function r(n){return n instanceof t?n:new t(function(a){a(n)})}return new(t||(t=Promise))(function(n,a){function l(p){try{c(i.next(p))}catch(g){a(g)}}function u(p){try{c(i.throw(p))}catch(g){a(g)}}function c(p){p.done?n(p.value):r(p.value).then(l,u)}c((i=i.apply(o,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=window,ot=we.ShadowRoot&&(we.ShadyCSS===void 0||we.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nt=Symbol(),lt=new WeakMap;let Ct=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==nt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ot&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=lt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&lt.set(t,e))}return e}toString(){return this.cssText}};const Nt=o=>new Ct(typeof o=="string"?o:o+"",void 0,nt),f=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,r,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[n+1],o[0]);return new Ct(t,o,nt)},Ht=(o,e)=>{ot?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=we.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,o.appendChild(i)})},dt=ot?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Nt(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Te;const _e=window,ut=_e.trustedTypes,zt=ut?ut.emptyScript:"",ct=_e.reactiveElementPolyfillSupport,qe={toAttribute(o,e){switch(e){case Boolean:o=o?zt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},at=(o,e)=>e!==o&&(e==e||o==o),Oe={attribute:!0,type:String,converter:qe,reflect:!1,hasChanged:at};let V=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=Oe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Oe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(dt(r))}else e!==void 0&&t.push(dt(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ht(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Oe){var r;const n=this.constructor._$Ep(e,i);if(n!==void 0&&i.reflect===!0){const a=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:qe).toAttribute(t,i.type);this._$El=e,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$El=null}}_$AK(e,t){var i;const r=this.constructor,n=r._$Ev.get(e);if(n!==void 0&&this._$El!==n){const a=r.getPropertyOptions(n),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?a.converter:qe;this._$El=n,this[n]=l.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||at)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,n)=>this[n]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdate)===null||n===void 0?void 0:n.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};V.finalized=!0,V.elementProperties=new Map,V.elementStyles=[],V.shadowRootOptions={mode:"open"},ct==null||ct({ReactiveElement:V}),((Te=_e.reactiveElementVersions)!==null&&Te!==void 0?Te:_e.reactiveElementVersions=[]).push("1.6.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ue;const be=window,J=be.trustedTypes,ht=J?J.createPolicy("lit-html",{createHTML:o=>o}):void 0,We="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,Lt="?"+P,Ft=`<${Lt}>`,q=document,ue=()=>q.createComment(""),ce=o=>o===null||typeof o!="object"&&typeof o!="function",Et=Array.isArray,jt=o=>Et(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Re=`[ 	
\f\r]`,ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pt=/-->/g,vt=/>/g,H=RegExp(`>|${Re}(?:([^\\s"'>=/]+)(${Re}*=${Re}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ft=/'/g,gt=/"/g,St=/^(?:script|style|textarea|title)$/i,At=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),m=At(1),Ce=At(2),X=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),mt=new WeakMap,F=q.createTreeWalker(q,129,null,!1);function Bt(o,e){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ht!==void 0?ht.createHTML(e):e}const qt=(o,e)=>{const t=o.length-1,i=[];let r,n=e===2?"<svg>":"",a=ae;for(let l=0;l<t;l++){const u=o[l];let c,p,g=-1,_=0;for(;_<u.length&&(a.lastIndex=_,p=a.exec(u),p!==null);)_=a.lastIndex,a===ae?p[1]==="!--"?a=pt:p[1]!==void 0?a=vt:p[2]!==void 0?(St.test(p[2])&&(r=RegExp("</"+p[2],"g")),a=H):p[3]!==void 0&&(a=H):a===H?p[0]===">"?(a=r??ae,g=-1):p[1]===void 0?g=-2:(g=a.lastIndex-p[2].length,c=p[1],a=p[3]===void 0?H:p[3]==='"'?gt:ft):a===gt||a===ft?a=H:a===pt||a===vt?a=ae:(a=H,r=void 0);const k=a===H&&o[l+1].startsWith("/>")?" ":"";n+=a===ae?u+Ft:g>=0?(i.push(c),u.slice(0,g)+We+u.slice(g)+P+k):u+P+(g===-2?(i.push(void 0),l):k)}return[Bt(o,n+(o[t]||"<?>")+(e===2?"</svg>":"")),i]};class he{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,a=0;const l=e.length-1,u=this.parts,[c,p]=qt(e,t);if(this.el=he.createElement(c,i),F.currentNode=this.el.content,t===2){const g=this.el.content,_=g.firstChild;_.remove(),g.append(..._.childNodes)}for(;(r=F.nextNode())!==null&&u.length<l;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const _ of r.getAttributeNames())if(_.endsWith(We)||_.startsWith(P)){const k=p[a++];if(g.push(_),k!==void 0){const A=r.getAttribute(k.toLowerCase()+We).split(P),L=/([.?@])?(.*)/.exec(k);u.push({type:1,index:n,name:L[2],strings:A,ctor:L[1]==="."?Vt:L[1]==="?"?Kt:L[1]==="@"?Zt:Le})}else u.push({type:6,index:n})}for(const _ of g)r.removeAttribute(_)}if(St.test(r.tagName)){const g=r.textContent.split(P),_=g.length-1;if(_>0){r.textContent=J?J.emptyScript:"";for(let k=0;k<_;k++)r.append(g[k],ue()),F.nextNode(),u.push({type:2,index:++n});r.append(g[_],ue())}}}else if(r.nodeType===8)if(r.data===Lt)u.push({type:2,index:n});else{let g=-1;for(;(g=r.data.indexOf(P,g+1))!==-1;)u.push({type:7,index:n}),g+=P.length-1}n++}}static createElement(e,t){const i=q.createElement("template");return i.innerHTML=e,i}}function Q(o,e,t=o,i){var r,n,a,l;if(e===X)return e;let u=i!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[i]:t._$Cl;const c=ce(e)?void 0:e._$litDirective$;return(u==null?void 0:u.constructor)!==c&&((n=u==null?void 0:u._$AO)===null||n===void 0||n.call(u,!1),c===void 0?u=void 0:(u=new c(o),u._$AT(o,t,i)),i!==void 0?((a=(l=t)._$Co)!==null&&a!==void 0?a:l._$Co=[])[i]=u:t._$Cl=u),u!==void 0&&(e=Q(o,u._$AS(o,e.values),u,i)),e}class Wt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:r}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:q).importNode(i,!0);F.currentNode=n;let a=F.nextNode(),l=0,u=0,c=r[0];for(;c!==void 0;){if(l===c.index){let p;c.type===2?p=new fe(a,a.nextSibling,this,e):c.type===1?p=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(p=new Jt(a,this,e)),this._$AV.push(p),c=r[++u]}l!==(c==null?void 0:c.index)&&(a=F.nextNode(),l++)}return F.currentNode=q,n}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class fe{constructor(e,t,i,r){var n;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cp=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),ce(e)?e===M||e==null||e===""?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==X&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):jt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==M&&ce(this._$AH)?this._$AA.nextSibling.data=e:this.$(q.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=he.createElement(Bt(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(i);else{const a=new Wt(n,this),l=a.u(this.options);a.v(i),this.$(l),this._$AH=a}}_$AC(e){let t=mt.get(e.strings);return t===void 0&&mt.set(e.strings,t=new he(e)),t}T(e){Et(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new fe(this.k(ue()),this.k(ue()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Le{constructor(e,t,i,r,n){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const n=this.strings;let a=!1;if(n===void 0)e=Q(this,e,t,0),a=!ce(e)||e!==this._$AH&&e!==X,a&&(this._$AH=e);else{const l=e;let u,c;for(e=n[0],u=0;u<n.length-1;u++)c=Q(this,l[i+u],t,u),c===X&&(c=this._$AH[u]),a||(a=!ce(c)||c!==this._$AH[u]),c===M?e=M:e!==M&&(e+=(c??"")+n[u+1]),this._$AH[u]=c}a&&!r&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Vt extends Le{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}}const Gt=J?J.emptyScript:"";class Kt extends Le{constructor(){super(...arguments),this.type=4}j(e){e&&e!==M?this.element.setAttribute(this.name,Gt):this.element.removeAttribute(this.name)}}class Zt extends Le{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=Q(this,e,t,0))!==null&&i!==void 0?i:M)===X)return;const r=this._$AH,n=e===M&&r!==M||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==M&&(r===M||n);n&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Jt{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const wt=be.litHtmlPolyfillSupport;wt==null||wt(he,fe),((Ue=be.litHtmlVersions)!==null&&Ue!==void 0?Ue:be.litHtmlVersions=[]).push("2.8.0");const Xt=(o,e,t)=>{var i,r;const n=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let a=n._$litPart$;if(a===void 0){const l=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;n._$litPart$=a=new fe(e.insertBefore(ue(),l),l,void 0,t??{})}return a._$AI(o),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ie,De;let T=class extends V{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Xt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return X}};T.finalized=!0,T._$litElement$=!0,(Ie=globalThis.litElementHydrateSupport)===null||Ie===void 0||Ie.call(globalThis,{LitElement:T});const _t=globalThis.litElementPolyfillSupport;_t==null||_t({LitElement:T});((De=globalThis.litElementVersions)!==null&&De!==void 0?De:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=o=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(o,e):((t,i)=>{const{kind:r,elements:n}=i;return{kind:r,elements:n,finisher(a){customElements.define(t,a)}}})(o,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}};function y(o){return(e,t)=>t!==void 0?((i,r,n)=>{r.constructor.createProperty(n,i)})(o,e,t):Qt(o,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ee(o){return y({...o,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=({finisher:o,descriptor:e})=>(t,i)=>{var r;if(i===void 0){const n=(r=t.originalKey)!==null&&r!==void 0?r:t.key,a=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(t.key)}:{...t,key:n};return o!=null&&(a.finisher=function(l){o(l,n)}),a}{const n=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),o==null||o(n,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function re(o,e){return Yt({descriptor:t=>{const i={get(){var r,n;return(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var n,a;return this[r]===void 0&&(this[r]=(a=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&a!==void 0?a:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pe;((Pe=window.HTMLSlotElement)===null||Pe===void 0?void 0:Pe.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},Ve=Symbol();class ei{get taskComplete(){return this.t||(this.status===1?this.t=new Promise((e,t)=>{this.i=e,this.o=t}):this.status===3?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(e,t,i){var n;this.u=0,this.status=0,(this.p=e).addController(this);const r=typeof t=="object"?t:{task:t,args:i};this._=r.task,this.v=r.args,this.j=r.argsEqual??ti,this.m=r.onComplete,this.g=r.onError,this.autoRun=r.autoRun??!0,"initialValue"in r&&(this.l=r.initialValue,this.status=2,this.k=(n=this.A)==null?void 0:n.call(this))}hostUpdate(){this.autoRun===!0&&this.O()}hostUpdated(){this.autoRun==="afterUpdate"&&this.O()}A(){if(this.v===void 0)return;const e=this.v();if(!Array.isArray(e))throw Error("The args function must return an array");return e}async O(){const e=this.A(),t=this.k;this.k=e,e===t||e===void 0||t!==void 0&&this.j(t,e)||await this.run(e)}async run(e){var a,l,u,c,p;let t,i;e??(e=this.A()),this.k=e,this.status===1?(a=this.T)==null||a.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,this.autoRun==="afterUpdate"?queueMicrotask(()=>this.p.requestUpdate()):this.p.requestUpdate();const r=++this.u;this.T=new AbortController;let n=!1;try{t=await this._(e,{signal:this.T.signal})}catch(g){n=!0,i=g}if(this.u===r){if(t===Ve)this.status=0;else{if(n===!1){try{(l=this.m)==null||l.call(this,t)}catch{}this.status=2,(u=this.i)==null||u.call(this,t)}else{try{(c=this.g)==null||c.call(this,i)}catch{}this.status=3,(p=this.o)==null||p.call(this,i)}this.l=t,this.h=i}this.p.requestUpdate()}}abort(e){var t;this.status===1&&((t=this.T)==null||t.abort(e))}get value(){return this.l}get error(){return this.h}render(e){var t,i,r,n;switch(this.status){case 0:return(t=e.initial)==null?void 0:t.call(e);case 1:return(i=e.pending)==null?void 0:i.call(e);case 2:return(r=e.complete)==null?void 0:r.call(e,this.value);case 3:return(n=e.error)==null?void 0:n.call(e,this.error);default:throw Error("Unexpected status: "+this.status)}}}const ti=(o,e)=>o===e||o.length===e.length&&o.every((t,i)=>!at(t,e[i])),yt=f`var(--white, #fff)`,ii=f`var(--primaryDisableCTAFill, #767676)`,ri=f`var(--secondaryCTABorder, #999)`,oi=f`var(--primaryCTAFill, #194880)`,Ne=f`var(--primaryCTAFillRGB, 25, 72, 128)`,ni=f`var(--primaryCTABorder, #c5d1df)`,ai=f`var(--primaryErrorCTAFill, #d9534f)`,He=f`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,si=f`var(--primaryErrorCTABorder, #d43f3a)`,li=f`var(--secondaryCTAFill, #333)`,ze=f`var(--secondaryCTAFillRGB, 51, 51, 51)`,di=f`var(--primaryCTABorder, #979797)`,ui=f`#ee8950`,ci=f`#ec7939`,hi=f`
  .ia-button {
    min-height: 3rem;
    cursor: pointer;
    color: ${yt};
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
    outline-color: ${yt};
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
    background-color: ${ii};
    border: 1px solid ${ri};
  }
  .ia-button.transparent {
    background-color: transparent;
  }
  .ia-button.warning {
    background-color: ${ui}
    border-color: ${ci};
  }

  .ia-button.primary {
    background-color: ${oi};
    border-color: ${ni};
  }
  .ia-button.primary:hover {
    background-color: rgba(${Ne}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${Ne}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${Ne}, 0.7);
  }

  .ia-button.danger {
    background-color: ${ai};
    border-color: ${si};
  }
  .ia-button.danger:hover {
    background-color: rgba(${He}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${He}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${He}, 0.7);
  }

  .ia-button.dark {
    background-color: ${li};
    border-color: ${di};
  }
  .ia-button.dark:hover {
    background-color: rgba(${ze}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${ze}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${ze}, 0.7);
  }
`;function d(o){let e,t,i;return typeof o=="object"?(e=o.hashFunction,t=o.expiring,i=o.tags):e=o,(r,n,a)=>{if(a.value!=null)a.value=$t(a.value,e,t,i);else if(a.get!=null)a.get=$t(a.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Fe=new Map;function $t(o,e,t=0,i){const r=Symbol("__memoized_map__");return function(...n){let a;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let l=this[r];if(Array.isArray(i))for(const u of i)Fe.has(u)?Fe.get(u).push(l):Fe.set(u,[l]);if(e||n.length>0||t>0){let u;e===!0?u=n.map(g=>g.toString()).join("!"):e?u=e.apply(this,n):u=n[0];const c=`${u}__timestamp`;let p=!1;if(t>0)if(!l.has(c))p=!0;else{let g=l.get(c);p=Date.now()-g>t}l.has(u)&&!p?a=l.get(u):(a=o.apply(this,n),l.set(u,a),t>0&&l.set(c,Date.now()))}else{const u=this;l.has(u)?a=l.get(u):(a=o.apply(this,n),l.set(u,a))}return a}}class Ge{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:Boolean(e)}}Ge.shared=new Ge;class pe{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}pe.shared=new pe;class ye{parseValue(e){return pe.shared.parseValue(e)}}ye.shared=new ye;class Ke{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}Ke.shared=new Ke;class Ze{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let i;return t.length===1?i=this.parseNumberFormat(t[0]):i=this.parseColonSeparatedFormat(t),i}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const i=e.map((r,n)=>{const a=parseFloat(r);if(Number.isNaN(a))return t=!0,0;const u=60**(e.length-1-n);return a*Math.floor(u)}).reduce((r,n)=>r+n,0);return t?void 0:i}}Ze.shared=new Ze;class Je{parseValue(e){if(typeof e=="string")return e}}Je.shared=new Je;class pi{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let i=[];for(const r of this.separators)if(i=t.split(r),i.length>1)break;return this.parseListValues(i)}parseListValues(e){const i=e.map(n=>n.trim()).map(n=>this.parser.parseValue(n)),r=[];return i.forEach(n=>{n!==void 0&&r.push(n)}),r}}class Xe{parseValue(e){if(typeof e=="string")return e}}Xe.shared=new Xe;class $e{parseValue(e){return String(e)}}$e.shared=new $e;class O{constructor(e,t){this.parser=e,this.rawValue=t}get values(){return this.parseRawValue()}get value(){return this.values[0]}parseRawValue(){if(this.rawValue===void 0)return[];const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const r=this.parser.parseValue(i);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}s([d()],O.prototype,"values",null);s([d()],O.prototype,"value",null);class G extends O{constructor(e){super(Ge.shared,e)}}class x extends O{constructor(e){super(Ke.shared,e)}}class je extends O{constructor(e){super(Ze.shared,e)}}class b extends O{constructor(e){super(pe.shared,e)}}class v extends O{constructor(e){super($e.shared,e)}}class vi extends O{constructor(e){super(Xe.shared,e)}}class Me extends O{constructor(e){super(ye.shared,e)}}class Se extends O{constructor(e){super(Je.shared,e)}}class fi extends O{constructor(e,t){super(t,e)}}class gi extends fi{constructor(e){const t=new pi($e.shared);super(e,t)}}class h{constructor(e){this.rawMetadata=e}get identifier(){var e;return(e=this.rawMetadata)===null||e===void 0?void 0:e.identifier}get addeddate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.addeddate?new x(this.rawMetadata.addeddate):void 0}get audio_codec(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.audio_codec?new v(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.audio_sample_rate?new b(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.avg_rating?new b(this.rawMetadata.avg_rating):void 0}get collection(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection?new v(this.rawMetadata.collection):void 0}get collections_raw(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collections_raw?new v(this.rawMetadata.collections_raw):void 0}get collection_size(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection_size?new Me(this.rawMetadata.collection_size):void 0}get contributor(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.contributor?new v(this.rawMetadata.contributor):void 0}get coverage(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.coverage?new v(this.rawMetadata.coverage):void 0}get creator(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.creator?new v(this.rawMetadata.creator):void 0}get date(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.date?new x(this.rawMetadata.date):void 0}get description(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.description?new v(this.rawMetadata.description):void 0}get downloads(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.downloads?new b(this.rawMetadata.downloads):void 0}get duration(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.duration?new je(this.rawMetadata.duration):void 0}get"external-identifier"(){var e,t;return!((e=this.rawMetadata)===null||e===void 0)&&e["external-identifier"]?new v((t=this.rawMetadata)===null||t===void 0?void 0:t["external-identifier"]):void 0}get files_count(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.files_count?new b(this.rawMetadata.files_count):void 0}get indexdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.indexdate?new x(this.rawMetadata.indexdate):void 0}get isbn(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.isbn?new v(this.rawMetadata.isbn):void 0}get issue(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.issue?new v(this.rawMetadata.issue):void 0}get item_count(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.item_count?new b(this.rawMetadata.item_count):void 0}get item_size(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.item_size?new Me(this.rawMetadata.item_size):void 0}get language(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.language?new v(this.rawMetadata.language):void 0}get length(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.length?new je(this.rawMetadata.length):void 0}get lineage(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.lineage?new v(this.rawMetadata.lineage):void 0}get month(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.month?new b(this.rawMetadata.month):void 0}get mediatype(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.mediatype?new Se(this.rawMetadata.mediatype):void 0}get noindex(){var e;return((e=this.rawMetadata)===null||e===void 0?void 0:e.noindex)!=null?new G(this.rawMetadata.noindex):void 0}get notes(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.notes?new v(this.rawMetadata.notes):void 0}get num_favorites(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.num_favorites?new b(this.rawMetadata.num_favorites):void 0}get num_reviews(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.num_reviews?new b(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.openlibrary_edition?new v(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.openlibrary_work?new v(this.rawMetadata.openlibrary_work):void 0}get page_progression(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.page_progression?new vi(this.rawMetadata.page_progression):void 0}get partner(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.partner?new v(this.rawMetadata.partner):void 0}get ppi(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.ppi?new b(this.rawMetadata.ppi):void 0}get publicdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.publicdate?new x(this.rawMetadata.publicdate):void 0}get publisher(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.publisher?new v(this.rawMetadata.publisher):void 0}get reviewdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.reviewdate?new x(this.rawMetadata.reviewdate):void 0}get runtime(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.runtime?new je(this.rawMetadata.runtime):void 0}get scanner(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.scanner?new v(this.rawMetadata.scanner):void 0}get source(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.source?new v(this.rawMetadata.source):void 0}get start_localtime(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.start_localtime?new x(this.rawMetadata.start_localtime):void 0}get start_time(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.start_time?new x(this.rawMetadata.start_time):void 0}get stop_time(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.stop_time?new x(this.rawMetadata.stop_time):void 0}get subject(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.subject?new gi(this.rawMetadata.subject):void 0}get taper(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.taper?new v(this.rawMetadata.taper):void 0}get title(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.title?new v(this.rawMetadata.title):void 0}get transferer(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.transferer?new v(this.rawMetadata.transferer):void 0}get track(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.track?new b(this.rawMetadata.track):void 0}get type(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.type?new v(this.rawMetadata.type):void 0}get uploader(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.uploader?new v(this.rawMetadata.uploader):void 0}get utc_offset(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.utc_offset?new b(this.rawMetadata.utc_offset):void 0}get venue(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.venue?new v(this.rawMetadata.venue):void 0}get volume(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.volume?new v(this.rawMetadata.volume):void 0}get week(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.week?new b(this.rawMetadata.week):void 0}get year(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.year?new x(this.rawMetadata.year):void 0}get query(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.query?new v(this.rawMetadata.fields.query):void 0}get date_favorited(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date_favorited?new x(this.rawMetadata.fields.date_favorited):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new v(this.rawMetadata.fields.__href__):void 0}}s([d()],h.prototype,"addeddate",null);s([d()],h.prototype,"audio_codec",null);s([d()],h.prototype,"audio_sample_rate",null);s([d()],h.prototype,"avg_rating",null);s([d()],h.prototype,"collection",null);s([d()],h.prototype,"collections_raw",null);s([d()],h.prototype,"collection_size",null);s([d()],h.prototype,"contributor",null);s([d()],h.prototype,"coverage",null);s([d()],h.prototype,"creator",null);s([d()],h.prototype,"date",null);s([d()],h.prototype,"description",null);s([d()],h.prototype,"downloads",null);s([d()],h.prototype,"duration",null);s([d()],h.prototype,"external-identifier",null);s([d()],h.prototype,"files_count",null);s([d()],h.prototype,"indexdate",null);s([d()],h.prototype,"isbn",null);s([d()],h.prototype,"issue",null);s([d()],h.prototype,"item_count",null);s([d()],h.prototype,"item_size",null);s([d()],h.prototype,"language",null);s([d()],h.prototype,"length",null);s([d()],h.prototype,"lineage",null);s([d()],h.prototype,"month",null);s([d()],h.prototype,"mediatype",null);s([d()],h.prototype,"noindex",null);s([d()],h.prototype,"notes",null);s([d()],h.prototype,"num_favorites",null);s([d()],h.prototype,"num_reviews",null);s([d()],h.prototype,"openlibrary_edition",null);s([d()],h.prototype,"openlibrary_work",null);s([d()],h.prototype,"page_progression",null);s([d()],h.prototype,"partner",null);s([d()],h.prototype,"ppi",null);s([d()],h.prototype,"publicdate",null);s([d()],h.prototype,"publisher",null);s([d()],h.prototype,"reviewdate",null);s([d()],h.prototype,"runtime",null);s([d()],h.prototype,"scanner",null);s([d()],h.prototype,"source",null);s([d()],h.prototype,"start_localtime",null);s([d()],h.prototype,"start_time",null);s([d()],h.prototype,"stop_time",null);s([d()],h.prototype,"subject",null);s([d()],h.prototype,"taper",null);s([d()],h.prototype,"title",null);s([d()],h.prototype,"transferer",null);s([d()],h.prototype,"track",null);s([d()],h.prototype,"type",null);s([d()],h.prototype,"uploader",null);s([d()],h.prototype,"utc_offset",null);s([d()],h.prototype,"venue",null);s([d()],h.prototype,"volume",null);s([d()],h.prototype,"week",null);s([d()],h.prototype,"year",null);s([d()],h.prototype,"query",null);s([d()],h.prototype,"date_favorited",null);s([d()],h.prototype,"__href__",null);class w{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new x(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating)!=null?new b(this.rawMetadata.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new v(this.rawMetadata.fields.collection):void 0}get collection_files_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.collection_files_count)!=null?new b(this.rawMetadata.fields.collection_files_count):void 0}get collection_size(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.collection_size)!=null?new Me(this.rawMetadata.fields.collection_size):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new v(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new x(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new v(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads)!=null?new b(this.rawMetadata.fields.downloads):void 0}get files_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.files_count)!=null?new b(this.rawMetadata.fields.files_count):void 0}get genre(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.genre?new v(this.rawMetadata.fields.genre):void 0}get indexflag(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.indexflag?new v(this.rawMetadata.fields.indexflag):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new v(this.rawMetadata.fields.issue):void 0}get item_count(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.item_count)!=null?new b(this.rawMetadata.fields.item_count):void 0}get item_size(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.item_size)!=null?new Me(this.rawMetadata.fields.item_size):void 0}get language(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.language?new v(this.rawMetadata.fields.language):void 0}get lending___available_to_borrow(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_borrow)!=null?new G(this.rawMetadata.fields.lending___available_to_borrow):void 0}get lending___available_to_browse(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_browse)!=null?new G(this.rawMetadata.fields.lending___available_to_browse):void 0}get lending___available_to_waitlist(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.lending___available_to_waitlist)!=null?new G(this.rawMetadata.fields.lending___available_to_waitlist):void 0}get lending___status(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.lending___status?new v(this.rawMetadata.fields.lending___status):void 0}get licenseurl(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.licenseurl?new v(this.rawMetadata.fields.licenseurl):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new Se(this.rawMetadata.fields.mediatype):void 0}get month(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.month)!=null?new b(this.rawMetadata.fields.month):void 0}get noindex(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.noindex)!=null?new G(this.rawMetadata.fields.noindex):void 0}get num_favorites(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.num_favorites)!=null?new b(this.rawMetadata.fields.num_favorites):void 0}get num_reviews(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.num_reviews)!=null?new b(this.rawMetadata.fields.num_reviews):void 0}get publicdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.publicdate?new x(this.rawMetadata.fields.publicdate):void 0}get reviewdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.reviewdate?new x(this.rawMetadata.fields.reviewdate):void 0}get review(){var e;const t=(e=this.rawMetadata)===null||e===void 0?void 0:e.review;return t?{body:t.reviewbody,title:t.reviewtitle,author:t.reviewer,authorItem:t.reviewer_itemname,updatedate:new Date(t.reviewdate),createdate:new Date(t.createdate),stars:Number(t.stars)||0,__href__:t.__href__}:void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new v(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new v(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new v(this.rawMetadata.fields.title):void 0}get type(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.type?new v(this.rawMetadata.fields.type):void 0}get volume(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.volume?new v(this.rawMetadata.fields.volume):void 0}get week(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.week)!=null?new b(this.rawMetadata.fields.week):void 0}get year(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year)!=null?new b(this.rawMetadata.fields.year):void 0}}s([d()],w.prototype,"addeddate",null);s([d()],w.prototype,"avg_rating",null);s([d()],w.prototype,"collection",null);s([d()],w.prototype,"collection_files_count",null);s([d()],w.prototype,"collection_size",null);s([d()],w.prototype,"creator",null);s([d()],w.prototype,"date",null);s([d()],w.prototype,"description",null);s([d()],w.prototype,"downloads",null);s([d()],w.prototype,"files_count",null);s([d()],w.prototype,"genre",null);s([d()],w.prototype,"indexflag",null);s([d()],w.prototype,"issue",null);s([d()],w.prototype,"item_count",null);s([d()],w.prototype,"item_size",null);s([d()],w.prototype,"language",null);s([d()],w.prototype,"lending___available_to_borrow",null);s([d()],w.prototype,"lending___available_to_browse",null);s([d()],w.prototype,"lending___available_to_waitlist",null);s([d()],w.prototype,"lending___status",null);s([d()],w.prototype,"licenseurl",null);s([d()],w.prototype,"mediatype",null);s([d()],w.prototype,"month",null);s([d()],w.prototype,"noindex",null);s([d()],w.prototype,"num_favorites",null);s([d()],w.prototype,"num_reviews",null);s([d()],w.prototype,"publicdate",null);s([d()],w.prototype,"reviewdate",null);s([d()],w.prototype,"review",null);s([d()],w.prototype,"source",null);s([d()],w.prototype,"subject",null);s([d()],w.prototype,"title",null);s([d()],w.prototype,"type",null);s([d()],w.prototype,"volume",null);s([d()],w.prototype,"week",null);s([d()],w.prototype,"year",null);class ${constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.identifier}get highlight(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.highlight)===null||t===void 0)&&t.text?new v(this.rawMetadata.highlight.text):void 0}get addeddate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.addeddate?new x(this.rawMetadata.fields.addeddate):void 0}get avg_rating(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.avg_rating)!=null?new b(this.rawMetadata.fields.avg_rating):void 0}get collection(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.collection?new v(this.rawMetadata.fields.collection):void 0}get created_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.created_on?new x(this.rawMetadata.fields.created_on):void 0}get creator(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.creator?new v(this.rawMetadata.fields.creator):void 0}get date(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date?new x(this.rawMetadata.fields.date):void 0}get description(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.description?new v(this.rawMetadata.fields.description):void 0}get downloads(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.downloads)!=null?new b(this.rawMetadata.fields.downloads):void 0}get filename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.filename?new v(this.rawMetadata.fields.filename):void 0}get file_basename(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.file_basename?new v(this.rawMetadata.fields.file_basename):void 0}get file_creation_mtime(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.file_creation_mtime)!=null?new b(this.rawMetadata.fields.file_creation_mtime):void 0}get issue(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.issue?new v(this.rawMetadata.fields.issue):void 0}get mediatype(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.mediatype?new Se(this.rawMetadata.fields.mediatype):void 0}get page_num(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.page_num)!=null?new b(this.rawMetadata.fields.page_num):void 0}get publicdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.publicdate?new x(this.rawMetadata.fields.publicdate):void 0}get result_in_subfile(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.result_in_subfile)!=null?new G(this.rawMetadata.fields.result_in_subfile):void 0}get reviewdate(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.reviewdate?new x(this.rawMetadata.fields.reviewdate):void 0}get source(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.source?new v(this.rawMetadata.fields.source):void 0}get subject(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.subject?new v(this.rawMetadata.fields.subject):void 0}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new v(this.rawMetadata.fields.title):void 0}get updated_on(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.updated_on?new x(this.rawMetadata.fields.updated_on):void 0}get year(){var e,t;return((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.year)!=null?new b(this.rawMetadata.fields.year):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new v(this.rawMetadata.fields.__href__):void 0}}s([d()],$.prototype,"highlight",null);s([d()],$.prototype,"addeddate",null);s([d()],$.prototype,"avg_rating",null);s([d()],$.prototype,"collection",null);s([d()],$.prototype,"created_on",null);s([d()],$.prototype,"creator",null);s([d()],$.prototype,"date",null);s([d()],$.prototype,"description",null);s([d()],$.prototype,"downloads",null);s([d()],$.prototype,"filename",null);s([d()],$.prototype,"file_basename",null);s([d()],$.prototype,"file_creation_mtime",null);s([d()],$.prototype,"issue",null);s([d()],$.prototype,"mediatype",null);s([d()],$.prototype,"page_num",null);s([d()],$.prototype,"publicdate",null);s([d()],$.prototype,"result_in_subfile",null);s([d()],$.prototype,"reviewdate",null);s([d()],$.prototype,"source",null);s([d()],$.prototype,"subject",null);s([d()],$.prototype,"title",null);s([d()],$.prototype,"updated_on",null);s([d()],$.prototype,"year",null);s([d()],$.prototype,"__href__",null);var se;(function(o){o[o.COUNT=0]="COUNT",o[o.ALPHABETICAL=1]="ALPHABETICAL",o[o.NUMERIC=2]="NUMERIC"})(se||(se={}));class Tt{constructor(e){this.buckets=e.buckets,this.doc_count_error_upper_bound=e.doc_count_error_upper_bound,this.sum_other_doc_count=e.sum_other_doc_count,this.first_bucket_key=e.first_bucket_key,this.last_bucket_key=e.last_bucket_key,this.number_buckets=e.number_buckets,this.interval=e.interval}getSortedBuckets(e){const t=[...this.buckets];if(this.isRawNumberBuckets(t))return t;const i=new Intl.Collator;switch(e){case se.ALPHABETICAL:return t.sort((r,n)=>i.compare(r.key.toString(),n.key.toString()));case se.NUMERIC:return t.sort((r,n)=>Number(n.key)-Number(r.key));case se.COUNT:default:return t}}isRawNumberBuckets(e){return typeof this.buckets[0]=="number"}}s([d()],Tt.prototype,"getSortedBuckets",null);class ge{constructor(e){this.rawMetadata=e}get identifier(){var e;return(e=this.rawMetadata)===null||e===void 0?void 0:e.fields.query}get title(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.title?new v(this.rawMetadata.fields.title):void 0}get query(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.query?new v(this.rawMetadata.fields.query):void 0}get date_favorited(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.date_favorited?new x(this.rawMetadata.fields.date_favorited):void 0}get __href__(){var e,t;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new v(this.rawMetadata.fields.__href__):void 0}}s([d()],ge.prototype,"title",null);s([d()],ge.prototype,"query",null);s([d()],ge.prototype,"date_favorited",null);s([d()],ge.prototype,"__href__",null);class Ae{constructor(e){this.rawMetadata=e}get identifier(){var e,t;return(t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0?void 0:t.url}get mediatype(){return new Se("web")}get title(){var e,t,i;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.url?new v((i=this.rawMetadata.fields)===null||i===void 0?void 0:i.url):void 0}get capture_dates(){var e,t,i;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.capture_dates?new x((i=this.rawMetadata.fields)===null||i===void 0?void 0:i.capture_dates):void 0}get __href__(){var e,t,i;return!((t=(e=this.rawMetadata)===null||e===void 0?void 0:e.fields)===null||t===void 0)&&t.__href__?new v((i=this.rawMetadata.fields)===null||i===void 0?void 0:i.__href__):void 0}}s([d()],Ae.prototype,"title",null);s([d()],Ae.prototype,"capture_dates",null);s([d()],Ae.prototype,"__href__",null);const mi=["loans","waitlist","loan_history"];function wi(o){const e=o.slice(0,4),t=o.slice(4,6),i=o.slice(6,8),r=o.slice(8,10),n=o.slice(10,12),a=o.slice(12,14);return`${e}-${t}-${i}T${r}:${n}:${a}Z`}function _i(o){var e;const t=[];for(const i of o){if(!(!((e=i.captures)===null||e===void 0)&&e.length))continue;const r=encodeURIComponent(i.url),n=`https://web.archive.org/web/${i.captures[0]}/${r}`;t.push({hit_type:"web_archive",fields:{url:i.url,capture_dates:i.captures.map(a=>wi(a)),__href__:n}})}return t}class ke{constructor(e,t){var i,r,n,a,l,u,c,p,g,_,k,A,L,S;this.schema=t;const U=t==null?void 0:t.hit_type;let C;e!=null&&e.page_elements&&(this.pageElements=e.page_elements,C=Object.values(this.pageElements)[0]);let B=(i=e==null?void 0:e.hits)===null||i===void 0?void 0:i.hits;this.totalResults=(n=(r=e==null?void 0:e.hits)===null||r===void 0?void 0:r.total)!==null&&n!==void 0?n:0,this.returnedCount=(l=(a=e==null?void 0:e.hits)===null||a===void 0?void 0:a.returned)!==null&&l!==void 0?l:0,!(B!=null&&B.length)&&(!((u=C==null?void 0:C.hits)===null||u===void 0)&&u.hits)?(B=C.hits.hits,this.totalResults=(c=C.hits.total)!==null&&c!==void 0?c:0,this.returnedCount=(p=C.hits.returned)!==null&&p!==void 0?p:0):!((g=this.pageElements)===null||g===void 0)&&g.lending?B=this.handleLendingPageElement(U):!((_=this.pageElements)===null||_===void 0)&&_.web_archives&&(B=this.handleWebArchivesPageElement()),this.results=(k=B==null?void 0:B.map(ne=>{var Be;return ke.createResult((Be=ne.hit_type)!==null&&Be!==void 0?Be:U,ne)}))!==null&&k!==void 0?k:[];let W=e==null?void 0:e.aggregations;!(this.aggregations&&Object.keys(this.aggregations).length>0)&&(C!=null&&C.aggregations)&&(W=C.aggregations),W&&this.buildAggregations(W),e!=null&&e.collection_titles&&(this.collectionTitles=(A=e.collection_titles)!==null&&A!==void 0?A:{}),e!=null&&e.collection_extra_info&&(this.collectionExtraInfo=(L=e.collection_extra_info)!==null&&L!==void 0?L:null),e!=null&&e.account_extra_info&&(this.accountExtraInfo=(S=e.account_extra_info)!==null&&S!==void 0?S:null)}buildAggregations(e){this.aggregations=Object.entries(e).reduce((t,[i,r])=>(t[i]=new Tt(r),t),{})}handleLendingPageElement(e){var t,i,r;const n=(t=this.pageElements)===null||t===void 0?void 0:t.lending,a=(i=n.loans)!==null&&i!==void 0?i:[];this.totalResults=a.length,this.returnedCount=this.totalResults;for(const l of mi)n[l]=(r=n[l].map(u=>{var c;return ke.createResult((c=u.hit_type)!==null&&c!==void 0?c:e,u)}))!==null&&r!==void 0?r:[];return a}handleWebArchivesPageElement(){var e;const t=_i((e=this.pageElements)===null||e===void 0?void 0:e.web_archives);return this.totalResults=t.length,this.returnedCount=this.totalResults,t}static createResult(e,t){switch(e){case"item":return new w(t);case"text":return new $(t);case"favorited_search":return new ge(t);case"web_archive":return new Ae(t);default:return new w(t)}}}class bi{constructor(e){this.clientParameters=e.client_parameters,this.backendRequests=e.backend_requests,this.kind=e.kind}}class yi{constructor(e){var t,i,r;this.rawResponse=e,this.request=new bi(e.request),this.responseHeader=(t=e.response)===null||t===void 0?void 0:t.header,this.response=new ke((i=e.response)===null||i===void 0?void 0:i.body,(r=e.response)===null||r===void 0?void 0:r.hit_schema)}}class Ot{static aggregateSearchParamsAsString(e){if(e.omit)return"false";if(e.advancedParams){const t=e.advancedParams.map(r=>({terms:r}));return JSON.stringify(t)}if(e.simpleParams)return e.simpleParams.join(",")}static sortParamsAsString(e){return`${e.field}:${e.direction}`}static filterParamsAsString(e){return JSON.stringify(e)}static generateURLSearchParams(e){const t=new URLSearchParams;if(t.append("user_query",e.query),e.pageType&&t.append("page_type",String(e.pageType)),e.pageTarget&&t.append("page_target",String(e.pageTarget)),e.pageElements&&e.pageElements.length>0){const n=`[${e.pageElements.map(a=>`"${a}"`).join(",")}]`;t.append("page_elements",n)}if(e.rows!=null&&t.append("hits_per_page",String(e.rows)),e.page!=null&&t.append("page",String(e.page)),e.fields&&e.fields.length>0&&t.append("fields",e.fields.join(",")),e.filters&&Object.keys(e.filters).length>0){const r=this.filterParamsAsString(e.filters);r&&r!=="{}"&&t.append("filter_map",r)}if(e.sort&&e.sort.length>0){const r=e.sort.map(n=>this.sortParamsAsString(n));t.append("sort",r.join(","))}const i=e.aggregations;if(i){const r=this.aggregateSearchParamsAsString(i);r&&t.append("aggregations",r)}if(e.aggregationsSize!=null&&t.append("aggregations_size",String(e.aggregationsSize)),e.debugging&&t.append("debugging","true"),e.uid&&t.append("uid",e.uid),e.includeClientUrl!==!1){const r=window.location.href.slice(0,400);e.query.length<=1e3&&t.append("client_url",r)}return t}}var le;(function(o){o.networkError="SearchService.NetworkError",o.itemNotFound="SearchService.ItemNotFound",o.decodingError="SearchService.DecodingError",o.searchEngineError="SearchService.SearchEngineError"})(le||(le={}));class $i extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}const Mt={reCache:JSON.stringify({recompute:!0}),noCache:JSON.stringify({bypass:!0}),dontCache:JSON.stringify({no_compute:!0})};class Ut{constructor(e){var t,i;this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null;const r=new URL(window.location.href).searchParams,n=r.get("scope"),a=r.get("verbose"),l=r.get("debugging"),u=r.get("cacheDebug");let c="";for(const p of Object.keys(Mt))if(r.get(p)){c=Mt[p];break}c=(i=r.get("caching"))!==null&&i!==void 0?i:c,(e==null?void 0:e.caching)!==void 0?this.cachingFlags=e.caching:c&&(this.cachingFlags=c),(e==null?void 0:e.debuggingEnabled)!==void 0?this.debuggingEnabled=e.debuggingEnabled:(l||u)&&(this.debuggingEnabled=!0),(e==null?void 0:e.scope)!==void 0?this.requestScope=e.scope:n&&(this.requestScope=n),(e==null?void 0:e.verbose)!==void 0?this.verbose=e.verbose:a&&(this.verbose=!!a)}async fetchUrl(e,t){var i,r;const n=new URL(e);this.requestScope&&n.searchParams.set("scope",this.requestScope),this.cachingFlags&&n.searchParams.set("caching",this.cachingFlags);let a;try{const l=(i=t==null?void 0:t.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};a=await fetch(n.href,l)}catch(l){const u=l instanceof Error?l.message:typeof l=="string"?l:"Unknown error";return this.getErrorResult(le.networkError,u)}try{const l=await a.json();this.verbose&&this.printResponse(l),l.debugging&&this.printDebuggingInfo(l);const u=(r=l.response)===null||r===void 0?void 0:r.error;return u?this.getErrorResult(le.searchEngineError,u.message,u.forensics):{success:l}}catch(l){const u=l instanceof Error?l.message:typeof l=="string"?l:"Unknown error";return this.getErrorResult(le.decodingError,u)}}getErrorResult(e,t,i){return{error:new $i(e,t,i)}}printResponse(e){var t,i,r,n,a;try{const l=JSON.parse(JSON.stringify(e)),u=(r=(i=(t=l==null?void 0:l.response)===null||t===void 0?void 0:t.body)===null||i===void 0?void 0:i.hits)===null||r===void 0?void 0:r.hits;if(Array.isArray(u)&&u.length>1){const p=[];p.push(u[0]),p.push(`*** ${u.length-1} hits omitted ***`),l.response.body.hits.hits=p}const c=(a=(n=l==null?void 0:l.response)===null||n===void 0?void 0:n.body)===null||a===void 0?void 0:a.aggregations;c&&Object.entries(c).forEach(([p,g])=>{var _,k,A,L;if(((k=(_=g)===null||_===void 0?void 0:_.buckets)===null||k===void 0?void 0:k.length)>0){const S=JSON.parse(JSON.stringify(g));S.buckets=`*** ${(L=(A=S.buckets)===null||A===void 0?void 0:A.length)!==null&&L!==void 0?L:0} buckets omitted ***`,l.response.body.aggregations[p]=S}}),console.log("***** RESPONSE RECEIVED *****"),console.groupCollapsed("Response"),console.log(JSON.stringify(l,null,2)),console.groupEnd()}catch(l){console.error("Error printing search response:",l)}}printDebuggingInfo(e){var t,i;const r=e.debugging,n=(t=r.messages)!==null&&t!==void 0?t:[],a=(i=r.data)!==null&&i!==void 0?i:{};console.log("***** BEGIN DEBUGGING *****"),console.log("Full response:"),console.log(JSON.stringify(e,null,2)),console.group("Debug messages");for(const l of n)console.log(l);console.groupEnd(),console.group("Debug data");for(const[l,u]of Object.entries(a))console.log(l,u);console.groupEnd(),console.log("***** END DEBUGGING *****")}}class Mi extends Ut{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=Ot.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?${i}`;return this.fetchUrl(r)}}class ki extends Ut{constructor(e){var t;super(e),this.servicePath=(t=e==null?void 0:e.servicePath)!==null&&t!==void 0?t:"/services/search/beta/page_production"}async performSearch(e){this.debuggingEnabled&&e.debugging===void 0&&(e.debugging=!0);const i=Ot.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}${this.servicePath}/?service_backend=fts&${i}`;return this.fetchUrl(r)}}var Z;(function(o){o[o.METADATA=0]="METADATA",o[o.FULLTEXT=1]="FULLTEXT"})(Z||(Z={}));class Y{constructor(e={}){this.backendOptions=e}async search(e,t=Z.METADATA){const r=await Y.getBackendForSearchType(t,this.backendOptions).performSearch(e);return r.error?r:{success:new yi(r.success)}}static getBackendForSearchType(e,t={}){switch(e){case Z.FULLTEXT:return new ki(t);case Z.METADATA:default:return new Mi(t)}}}Y.default=new Y;s([d((o,e={})=>{const{includeCredentials:t=!1,verbose:i=!1,scope:r="",baseUrl:n=""}=e;return`${o};${t};${i};${r};${n}`})],Y,"getBackendForSearchType",null);var kt;(function(o){o.INCLUDE="inc",o.EXCLUDE="exc",o.GREATER_THAN="gt",o.GREATER_OR_EQUAL="gte",o.LESS_THAN="lt",o.LESS_OR_EQUAL="lte"})(kt||(kt={}));var de;(function(o){o.NETWORK="failed to connect to user lists backend service",o.BAD_RESPONSE="malformed response from backend",o.USER_NOT_FOUND="user with the given id was not found",o.LIST_NOT_FOUND="user list with the given id was not found",o.LIST_MEMBER_NOT_FOUND="user list member with the given id was not found",o.ITEM_NOT_TOUND="item with the given id was not found"})(de||(de={}));class xi extends Error{constructor(e,t,i){super(t,i),this.reason=e}}class R{constructor({fetchHandler:e,searchService:t,userService:i,baseUrl:r=R.DEFAULT_BASE_URL}){this.fetchHandler=e,this.searchService=t,this.userService=i,this.baseUrl=r}async fetchEndpoint(e,t,i){try{const r=await this.fetchHandler.fetchApiResponse(e,{method:t,body:i,includeCredentials:!0});return r.success?{success:r.value}:{error:R.getErrorResult(de.LIST_NOT_FOUND,r.error)}}catch(r){return{error:R.getErrorResult(de.NETWORK,r)}}}async fetchListsForUser(e){var t;const i=(t=await this.userService.getLoggedInUser())===null||t===void 0?void 0:t.success,r=(i==null?void 0:i.itemname)===e?"me":e;return this.fetchEndpoint(`${this.baseUrl}/services/users/${r}/lists`)}async fetchList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/${e}/lists/${t}`)}async fetchOwnListsContainingItem(e){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists?item=${e}`)}async fetchListMembers(e,t){const i=await this.fetchList(e,t);if(!i.success)return i;const{members:r}=i.success;if(!r)throw R.getErrorResult(de.BAD_RESPONSE);return{success:r}}async fetchListMemberSearchResults(e,t){const i=await this.fetchListMembers(e,t);if(!i.success)return i;const r=i.success;if(r.length===0)return{success:[]};const n=`identifier:(${r.map(l=>l.identifier).join(" OR ")})`,a=await this.searchService.search({query:n,rows:r.length,aggregations:{omit:!0}},Z.METADATA);return a.success?{success:a.success.response.results}:{error:a.error}}async createList(e){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists`,"POST",JSON.stringify(e))}async updateList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}`,"PATCH",JSON.stringify(t))}async deleteList(e){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}`,"DELETE")}async addMemberToList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}/members`,"POST",JSON.stringify(t))}async removeMemberFromList(e,t){return this.fetchEndpoint(`${this.baseUrl}/services/users/me/lists/${e}/members/${t}`,"DELETE")}static getErrorResult(e,t){return new xi(e,R.getErrorMessage(t),{cause:t})}static getErrorMessage(e){return e instanceof Error?e.message:typeof e=="string"?e:"Unknown error"}}R.DEFAULT_BASE_URL="https://archive.org";let I=class extends T{async saveListDetails(e){var t,i,r,n;e.preventDefault();const a=(t=e.target)===null||t===void 0?void 0:t.querySelector("button#save-list-settings");a==null||a.setAttribute("disabled","true"),this.dispatchEvent(new Event("userListSaving"));try{const l={list_name:this.listName.value,description:this.listDescription.value,is_private:this.listPrivate.checked};let u;if(!((i=this.userList)===null||i===void 0)&&i.id?u=await((r=this.userListsService)===null||r===void 0?void 0:r.updateList(this.userList.id,l)):u=await((n=this.userListsService)===null||n===void 0?void 0:n.createList(l)),u.success)this.dispatchEvent(new CustomEvent("userListSaved",{detail:u.success}));else throw u.error}catch(l){this.dispatchEvent(new CustomEvent("userListError",{detail:{error:l}})),console.log("error",l),a==null||a.removeAttribute("disabled")}}emitCloseModalEvent(e){e.preventDefault(),this.dispatchEvent(new Event("listModalClosed"))}render(){var e,t,i,r,n,a,l,u;return m`
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
              .value=${(a=(n=this.userList)===null||n===void 0?void 0:n.description)!==null&&a!==void 0?a:""}
            ></textarea>
          </div>
          <div class="field">
            <label for="private">Private list</label>
            <input
              type="checkbox"
              id="private"
              .checked="${(u=(l=this.userList)===null||l===void 0?void 0:l.is_private)!==null&&u!==void 0?u:!1}"
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
    `}};I.styles=[hi,f`
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
    `];s([y({type:Object}),ie("design:type",Object)],I.prototype,"userList",void 0);s([y({type:Object}),ie("design:type",R)],I.prototype,"userListsService",void 0);s([re("#id"),ie("design:type",HTMLInputElement)],I.prototype,"listId",void 0);s([re("#name"),ie("design:type",HTMLInputElement)],I.prototype,"listName",void 0);s([re("#description"),ie("design:type",HTMLInputElement)],I.prototype,"listDescription",void 0);s([re("#private"),ie("design:type",HTMLInputElement)],I.prototype,"listPrivate",void 0);I=s([N("iaux-userlist-settings")],I);function Ci(o){var e=[],t="";for(t in o)e.push(t);return e}function Qe(o){return o=JSON.stringify(o),!(typeof o!="string"||!/^\{[\s\S]*\}$/.test(o))}function Li(o){return o instanceof Array}function Ei(o){return Array.prototype.slice.call(o)}function ee(){if(!(this instanceof ee))return new ee}ee.prototype={get:function(o){for(var e=o+"=",t=document.cookie.split(";"),i=0;i<t.length;i++){for(var r=t[i];r.charAt(0)==" ";)r=r.substring(1,r.length);if(r.indexOf(e)==0)return decodeURI(r.substring(e.length,r.length))}return!1},set:function(o,e,t){if(Qe(o))for(const i in o)this.set(i,o[i],e,t);else if(typeof o=="string"){const i=Qe(t)?t:{expires:t},r=i.path!==void 0?`;path=${i.path};path=/`:";path=/",n=i.domain?`;domain=${i.domain}`:"",a=i.secure?";secure":"";let l=i.expires!==void 0?i.expires:"";typeof l=="string"&&l!==""?l=new Date(l):typeof l=="number"&&(l=new Date(+new Date+1e3*60*60*24*l)),l!==""&&"toGMTString"in l&&(l=`;expires=${l.toGMTString()}`);const u=i.sameSite?`;SameSite=${i.sameSite}`:"";document.cookie=`${o}=${encodeURI(e)+l+r+n+a+u}`}},remove:function(o){o=Li(o)?o:Ei(arguments);for(var e=0,t=o.length;e<t;e++)this.set(o[e],"",-1);return o},clear:function(o){return o?this.remove(o):this.remove(Ci(this.all()))},all:function(){if(document.cookie==="")return{};for(var o=document.cookie.split("; "),e={},t=0,i=o.length;t<i;t++){var r=o[t].split("=");e[decodeURI(r[0])]=decodeURI(r[1])}return e}};let z=null;const Rt=function(o,e,t){const i=arguments;if(z||(z=ee()),i.length===0)return z.all();if(i.length===1&&o===null)return z.clear();if(i.length===2&&!e)return z.clear(o);if(typeof o=="string"&&!e)return z.get(o);if(typeof o=="string"&&e||Qe(o))return z.set(o,e,t)};for(const o in ee.prototype)Rt[o]=ee.prototype[o];class st{constructor(e){this.name=e.name,this.source=e.source,this.mtime=e.mtime,this.size=e.size,this.md5=e.md5,this.crc32=e.crc32,this.sha1=e.sha1,this.format=e.format,this.rotation=e.rotation}static fromResponse(e){const t=pe.shared,i=ye.shared;let r,n,a;return e.mtime&&(r=t.parseValue(e.mtime)),e.size&&(n=i.parseValue(e.size)),e.rotation&&(a=t.parseValue(e.rotation)),new st({name:e.name,source:e.source,mtime:r,size:n,md5:e.md5,crc32:e.crc32,sha1:e.sha1,format:e.format,rotation:a})}}class xe{constructor(e){this.username=e.username,this.itemname=e.itemname,this.screenname=e.screenname,this.privs=e.privs,this.image_info=e.image_info,this.isArchiveOrgUser=this.username.endsWith("@archive.org");const{itemname:t}=e;this.userid=t.startsWith("@")?t.substring(1):t}static fromUserResponse(e){return new xe({username:e.username,itemname:e.itemname,screenname:e.screenname,privs:e.privs,image_info:st.fromResponse(e.image_info)})}}var K;(function(o){o.userNotLoggedIn="UserService.userNotLoggedIn",o.networkError="UserService.networkError",o.decodingError="UserService.decodingError"})(K||(K={}));class me extends Error{constructor(e,t){super(t),this.name=e,this.type=e}}class Si{constructor(e){var t,i;this.userServiceEndpoint=(t=e==null?void 0:e.userServiceEndpoint)!==null&&t!==void 0?t:"https://archive.org/services/user.php?op=whoami",this.cache=e==null?void 0:e.cache,this.cacheTTL=e==null?void 0:e.cacheTTL,this.userCacheKey=(i=e==null?void 0:e.userCacheKey)!==null&&i!==void 0?i:"loggedInUserInfo"}async getLoggedInUser(){const e=Rt.get("logged-in-user");if(!(e!==!1))return{error:new me(K.userNotLoggedIn)};const i=await this.getPersistedUser();if(i){const n=xe.fromUserResponse(i);if(e===n.username)return{success:n}}if(this.fetchPromise)return this.fetchPromise=this.fetchPromise.then(n=>n),this.fetchPromise;this.fetchPromise=this.fetchUser();const r=await this.fetchPromise;return this.fetchPromise=void 0,r}async fetchUser(){let e;try{e=await fetch(this.userServiceEndpoint,{credentials:"include"})}catch(n){return{error:new me(K.networkError,n.message)}}let t;try{t=await e.json()}catch(n){return{error:new me(K.decodingError,n.message)}}if(!t.success||!t.value)return{error:new me(K.userNotLoggedIn,t.error)};const i=t.value,r=xe.fromUserResponse(i);return await this.persistUser(i),{success:r}}async getPersistedUser(){var e;return(e=this.cache)===null||e===void 0?void 0:e.get(this.userCacheKey)}async persistUser(e){var t;await((t=this.cache)===null||t===void 0?void 0:t.set({key:this.userCacheKey,value:e,ttl:this.cacheTTL}))}}class Ai{async fetchApiResponse(e,t){const i={};return t!=null&&t.includeCredentials&&(i.credentials="include"),t!=null&&t.method&&(i.method=t.method),t!=null&&t.body&&(i.body=t.body),await(await fetch(e,i)).json()}}const Bi="https://archive.org";function Ti(){return new R({fetchHandler:new Ai,searchService:Y.default,userService:new Si,baseUrl:Bi})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=o=>o??M,Oi=Ce`<svg class="caret-up-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
<path d="m6.7226499 3.51689722c.22976435.15317623.54019902.0910893.69337525-.13867505.13615665-.20423497.10222882-.47220946-.06836249-.63681849l-.07031256-.05655675-3.2773501-2.18490007-3.2773501 2.18490007c-.22976434.15317623-.29185128.4636109-.13867505.69337524.13615665.20423498.39656688.27598409.61412572.18182636l.07924953-.04315131 2.7226499-1.81402514z"
  fill=""></path>
</svg>`,Ui=Ce`<svg class="caret-down-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
<path d="m6.7226499.58397485c.22976435-.15317623.54019902-.09108929.69337525.13867505.13615665.20423498.10222882.47220947-.06836249.63681849l-.07031256.05655676-3.2773501 2.18490006-3.2773501-2.18490006c-.22976434-.15317623-.29185128-.4636109-.13867505-.69337525.13615665-.20423497.39656688-.27598409.61412572-.18182636l.07924953.04315131 2.7226499 1.81402515z"
fill=""></path>
</svg>`;let E=class extends T{constructor(){super(...arguments),this.open=!1,this.isDisabled=!1,this.displayCaret=!1,this.closeOnSelect=!1,this.openViaButton=!0,this.openViaCaret=!0,this.includeSelectedOption=!1,this.selectedOption="",this.options=[],this.optionGroup="options",this.optionSelected=()=>{},this.isCustomList=!1,this.hasCustomClickHandler=!1,this.closeOnEscape=!1,this.closeOnBackdropClick=!1,this.boundKeyboardListener=e=>{switch(e.key){case"Escape":case"Esc":this.closeOptions();break}},this.closeOptions=e=>{e&&e.type==="click"&&e.stopPropagation(),this.open=!1},this.handlingCaretClick=!1}async firstUpdated(){await new Promise(e=>setTimeout(e,0)),this.addEventListener("closeDropdown",this.closeOptions)}disconnectedCallback(){var e;(e=super.disconnectedCallback)===null||e===void 0||e.call(this),this.removeKeyboardListener()}setupKeyboardListener(){this.closeOnEscape&&document.addEventListener("keydown",this.boundKeyboardListener)}removeKeyboardListener(){this.closeOnEscape&&document.removeEventListener("keydown",this.boundKeyboardListener)}get dropdownState(){return this.open?(this.setupKeyboardListener(),"open"):(this.removeKeyboardListener(),"closed")}toggleOptions(){this.open=!this.open}mainButtonClicked(){if(this.handlingCaretClick){this.handlingCaretClick=!1;return}this.openViaButton&&this.toggleOptions()}caretInteracted(){this.openViaCaret&&this.toggleOptions()}caretClicked(){this.handlingCaretClick=!0,this.caretInteracted()}caretKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.caretInteracted())}renderOption(e){const{label:t,url:i=void 0,id:r}=e;let n;const a=this.selectedOption===r?"selected":"";return i?n=m`<a
        href=${i}
        @click=${()=>this.optionClicked(e)}
        >${t}</a
      >`:n=m`<button
        @click=${()=>this.optionClicked(e)}
      >
        ${t}
      </button>`,m`<li class=${a}>${n}</li>`}optionClicked(e){var t;this.selectedOption!==e.id&&(this.selectedOption=e.id,this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:e}})),(t=e.selectedHandler)===null||t===void 0||t.call(e,e)),this.closeOnSelect&&this.closeOptions()}get availableOptions(){return this.includeSelectedOption?this.options:this.options.filter(e=>this.selectedOption!==e.id)}get caretTemplate(){if(!this.displayCaret)return m``;const e=this.openViaCaret&&!this.openViaButton?"0":void 0,t=this.openViaCaret?"button":void 0;return m`
      <span
        class="caret"
        tabindex=${Ye(e)}
        role=${Ye(t)}
        @click=${this.isDisabled||this.hasCustomClickHandler?M:this.caretClicked}
        @keydown=${this.isDisabled||this.hasCustomClickHandler?M:this.caretKeyDown}
      >
        <span ?hidden=${!this.open} class="caret-up">
          <slot name="caret-up">${Oi}</slot>
        </span>
        <span ?hidden=${this.open} class="caret-down">
          <slot name="caret-down">${Ui}</slot>
        </span>
      </span>
    `}get dropdownTemplate(){return this.isCustomList?m`<slot name="list"></slot>`:m`${this.availableOptions.map(e=>this.renderOption(e))}`}get backdropTemplate(){return this.closeOnBackdropClick?this.open?m`
      <div
        id="dropdown-backdrop"
        @keyup=${this.closeOptions}
        @click=${this.closeOptions}
      ></div>
    `:m``:m``}render(){return m`
      <div class="ia-dropdown-group">
        <button
          class="click-main"
          @click=${this.isDisabled||this.hasCustomClickHandler?M:this.mainButtonClicked}
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
    `}static get styles(){const e=f`var(--dropdownBorderWidth, 1px)`,t=f`var(--dropdownBorderRadius, 4px)`,i=f`var(--dropdownBorderColor, #fff)`,r=f`var(--dropdownBgColor, #333)`,n=f`var(--dropdownTextColor, #fff)`,a=f`var(--dropdownHoverBgColor, rgba(255, 255, 255, 0.3))`,l=f`var(--dropdownSelectedBgColor, #fff)`;return f`
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
        background-color: ${a};
        color: var(--dropdownHoverTextColor, #fff);
        list-style: none;
        cursor: pointer;
      }

      ul.dropdown-main li:hover:first-child {
        border-top-color: ${a};
      }

      ul.dropdown-main li:hover:last-child {
        border-bottom-color: ${a};
      }

      ul.dropdown-main li:hover:not(:first-child) {
        border-top: 0.5px solid var(--dropdownHoverTopBottomBorderColor, #333);
      }
      ul.dropdown-main li:hover:not(:last-child) {
        border-bottom: 0.5px solid
          var(--dropdownHoverTopBottomBorderColor, #333);
      }

      ul.dropdown-main li.selected:last-child {
        border-bottom-color: ${l};
      }

      ul.dropdown-main li.selected:first-child {
        border-top-color: ${l};
      }

      ul.dropdown-main li:hover > *,
      ul.dropdown-main li:focus-within > * {
        background-color: ${a};
        color: var(--dropdownHoverTextColor, #fff);
      }

      ul.dropdown-main li.selected > * {
        background-color: ${l};
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
    `}};s([y({type:Boolean,reflect:!0})],E.prototype,"open",void 0);s([y({type:Boolean,reflect:!0})],E.prototype,"isDisabled",void 0);s([y({type:Boolean})],E.prototype,"displayCaret",void 0);s([y({type:Boolean})],E.prototype,"closeOnSelect",void 0);s([y({type:Boolean})],E.prototype,"openViaButton",void 0);s([y({type:Boolean})],E.prototype,"openViaCaret",void 0);s([y({type:Boolean})],E.prototype,"includeSelectedOption",void 0);s([y({type:String})],E.prototype,"selectedOption",void 0);s([y({attribute:!1})],E.prototype,"options",void 0);s([y({type:String})],E.prototype,"optionGroup",void 0);s([y({attribute:!1})],E.prototype,"optionSelected",void 0);s([y({type:Boolean,reflect:!0})],E.prototype,"isCustomList",void 0);s([y({type:Boolean,reflect:!0})],E.prototype,"hasCustomClickHandler",void 0);s([y({type:Boolean,reflect:!0})],E.prototype,"closeOnEscape",void 0);s([y({type:Boolean,reflect:!0})],E.prototype,"closeOnBackdropClick",void 0);E=s([N("ia-dropdown")],E);let et=class extends T{render(){return m`
      <div class="icon-label-container">
        <slot name="icon"></slot>
        <slot></slot>
      </div>
    `}};et.styles=f`
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
  `;et=s([N("ia-icon-label")],et);class tt{constructor(e){var t,i,r,n,a,l,u;this.title=e==null?void 0:e.title,this.subtitle=e==null?void 0:e.subtitle,this.headline=e==null?void 0:e.headline,this.message=e==null?void 0:e.message,this.headerColor=(t=e==null?void 0:e.headerColor)!==null&&t!==void 0?t:"#55A183",this.bodyColor=(i=e==null?void 0:e.bodyColor)!==null&&i!==void 0?i:"#f5f5f7",this.showProcessingIndicator=(r=e==null?void 0:e.showProcessingIndicator)!==null&&r!==void 0?r:!1,this.processingImageMode=(n=e==null?void 0:e.processingImageMode)!==null&&n!==void 0?n:"complete",this.showCloseButton=(a=e==null?void 0:e.showCloseButton)!==null&&a!==void 0?a:!0,this.showHeaderLogo=(l=e==null?void 0:e.showHeaderLogo)!==null&&l!==void 0?l:!0,this.closeOnBackdropClick=(u=e==null?void 0:e.closeOnBackdropClick)!==null&&u!==void 0?u:!0}}const Ri=Object.freeze({processing:"processing",complete:"complete"});class Ii extends T{static get properties(){return{mode:{type:String}}}constructor(){super(),this.mode=Ri.processing}render(){return m`
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
    `}}window.customElements.define("ia-activity-indicator",Ii);const Di=m`
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
`,Pi=m`
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
`;let it=class extends T{constructor(){super(...arguments),this.config=new tt}render(){return m`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton?this.closeButtonTemplate:""}
            ${this.config.showHeaderLogo?m`<div class="logo-icon">${Pi}</div>`:M}
            ${this.config.title?m`<h1 class="title">${this.config.title}</h1>`:""}
            ${this.config.subtitle?m`<h2 class="subtitle">${this.config.subtitle}</h2>`:""}
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
              ${this.config.headline?m` <h1 class="headline">${this.config.headline}</h1> `:""}
              ${this.config.message?m` <p class="message">${this.config.message}</p> `:""}

              <div class="slot-container">
                <slot> </slot>
              </div>
            </div>
          </section>
        </div>
      </div>
    `}handleCloseButton(){const e=new Event("closeButtonPressed");this.dispatchEvent(e)}get closeButtonTemplate(){return m`
      <button
        type="button"
        class="close-button"
        tabindex="0"
        @click=${this.handleCloseButton}
      >
        ${Di}
      </button>
    `}static get styles(){const e=f`var(--modalLogoSize, 6.5rem)`,t=f`var(--processingImageSize, 7.5rem)`,i=f`var(--modalCornerRadius, 1rem)`,r=f`var(--modalBorder, 2px solid black)`,n=f`var(--modalBottomMargin, 2.5rem)`,a=f`var(--modalTopMargin, 5rem)`,l=f`var(--modalHeaderBottomPadding, 0.5em)`,u=f`var(--modalBottomPadding, 2rem)`,c=f`var(--modalScrollOffset, 5px)`,p=f`var(--modalTitleFontSize, 1.8rem)`,g=f`var(--modalSubtitleFontSize, 1.4rem)`,_=f`var(--modalHeadlineFontSize, 1.6rem)`,k=f`var(--modalMessageFontSize, 1.4rem)`,A=f`var(--modalTitleLineHeight, normal)`,L=f`var(--modalSubtitleLineHeight, normal)`,S=f`var(--modalHeadlineLineHeight, normal)`,U=f`var(--modalMessageLineHeight, normal)`;return f`
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
        margin-top: ${a};
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
        line-height: ${L};
      }

      .modal-body {
        background-color: #f5f5f7;
        border-radius: 0 0 calc(${i}) calc(${i});
        border: ${r};
        border-top: 0;
        padding: 0 1rem calc(${u} - ${c}) 1rem;
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
        font-size: ${_};
        font-weight: bold;
        text-align: center;
        line-height: ${S};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${k};
        line-height: ${U};
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
    `}};s([y({type:Object})],it.prototype,"config",void 0);it=s([N("modal-template")],it);function Ni(o,e,t){var i=t||{},r=i.noTrailing,n=r===void 0?!1:r,a=i.noLeading,l=a===void 0?!1:a,u=i.debounceMode,c=u===void 0?void 0:u,p,g=!1,_=0;function k(){p&&clearTimeout(p)}function A(S){var U=S||{},C=U.upcomingOnly,B=C===void 0?!1:C;k(),g=!B}function L(){for(var S=arguments.length,U=new Array(S),C=0;C<S;C++)U[C]=arguments[C];var B=this,W=Date.now()-_;if(g)return;function oe(){_=Date.now(),e.apply(B,U)}function ne(){p=void 0}!l&&c&&!p&&oe(),k(),c===void 0&&W>o?l?(_=Date.now(),n||(p=setTimeout(c?ne:oe,o))):oe():n!==!0&&(p=setTimeout(c?ne:oe,c===void 0?o-W:o))}return L.cancel=A,L}var j;(function(o){o.Open="open",o.Closed="closed"})(j||(j={}));class Hi{constructor(e){this.windowResizeThrottler=Ni(100,this.updateModalContainerHeight,{noLeading:!1,noTrailing:!1}).bind(this),this.modalManager=e}handleModeChange(e){switch(e){case j.Open:this.startResizeListener(),this.stopDocumentScroll();break;case j.Closed:this.stopResizeListener(),this.resumeDocumentScroll();break}}updateModalContainerHeight(){this.modalManager.style.setProperty("--containerHeight",`${window.innerHeight}px`)}stopDocumentScroll(){document.body.classList.add("modal-manager-open")}resumeDocumentScroll(){document.body.classList.remove("modal-manager-open")}startResizeListener(){window.addEventListener("resize",this.windowResizeThrottler)}stopResizeListener(){window.removeEventListener("resize",this.windowResizeThrottler)}}let te=class extends T{constructor(){super(...arguments),this.mode=j.Closed,this.hostBridge=new Hi(this),this.closeOnBackdropClick=!0}render(){return m`
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          tabindex="0"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `}getMode(){return this.mode}closeModal(){this.mode=j.Closed}callUserClosedModalCallback(){const e=this.userClosedModalCallback;this.userClosedModalCallback=void 0,e&&e()}showModal(e){return Pt(this,void 0,void 0,function*(){this.closeOnBackdropClick=e.config.closeOnBackdropClick,this.userClosedModalCallback=e.userClosedModalCallback,this.modalTemplate.config=e.config,this.customModalContent=e.customModalContent,this.mode=j.Open,yield this.modalTemplate.updateComplete,this.modalTemplate.focus()})}updated(e){e.has("mode")&&this.handleModeChange()}backdropClicked(){this.closeOnBackdropClick&&(this.closeModal(),this.callUserClosedModalCallback())}handleModeChange(){this.hostBridge.handleModeChange(this.mode),this.emitModeChangeEvent()}emitModeChangeEvent(){const e=new CustomEvent("modeChanged",{detail:{mode:this.mode}});this.dispatchEvent(e)}closeButtonPressed(){this.closeModal(),this.callUserClosedModalCallback()}static get styles(){const e=f`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`,t=f`var(--modalBackdropZindex, 1000)`,i=f`var(--modalWidth, 32rem)`,r=f`var(--modalMaxWidth, 95%)`,n=f`var(--modalZindex, 2000)`;return f`
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
    `}};s([y({type:String,reflect:!0})],te.prototype,"mode",void 0);s([y({type:Object})],te.prototype,"customModalContent",void 0);s([y({type:Object})],te.prototype,"hostBridge",void 0);s([re("modal-template")],te.prototype,"modalTemplate",void 0);te=s([N("modal-manager")],te);async function zi(o,e,t){let i=document.querySelector("modal-manager");if(!i){const n=document.querySelector("body");i=document.createElement("modal-manager"),n==null||n.appendChild(i)}const r=()=>{const n=i??document.querySelector("modal-manager");n==null||n.showModal({config:new tt,customModalContent:void 0,userClosedModalCallback:void 0}),n==null||n.closeModal(),i==null||i.removeAttribute("id")};i==null||i.setAttribute("id","create-user-list-modal"),i.showModal({config:new tt({title:m`List settings`,headerColor:"#194880",showCloseButton:!0,showHeaderLogo:!1,closeOnBackdropClick:!0}),userClosedModalCallback:()=>r(),customModalContent:m`
      <iaux-userlist-settings
        .userList=${{id:void 0,list_name:"",description:"",is_private:!1}}
        .userListsService=${o}
        @listModalClosed=${()=>r()}
        @userListSaving=${async()=>{e==null||e()}}
        @userListSaved=${async()=>{r(),t==null||t()}}
      ></iaux-userlist-settings>
    `})}const It=Ce`<svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      >
    <g fill="currentColor" fill-rule="nonzero">
      <path d="m49.9459358 0c13.7978412 0 25.5896453 4.88776371 35.3754122 14.6632911 9.7857669 9.7755275 14.678652 21.554993 14.678652 35.3383967 0 13.7800281-4.8928851 25.5594936-14.678652 35.3350211-9.7857669 9.7755274-21.577571 14.6632911-35.3754122 14.6632911s-25.5716235-4.8877637-35.3213471-14.6632911c-9.74972353-9.7755275-14.6245887-21.554993-14.6245887-35.3383967-.00224931-9.0014064 2.23243779-17.3524613 6.70406469-25.0531645 4.47162691-7.7007033 10.54380341-13.7834037 18.21652941-18.24810129 7.6727261-4.46469761 16.0145067-6.69704641 25.0253417-6.69704641zm0 6c-7.9548389 0-15.2549008 1.95357387-22.0076943 5.8829701-6.7720278 3.9405885-12.0963254 9.2741139-16.0455165 16.0751171-3.93842488 6.7824623-5.89471047 14.0931257-5.89272481 22.040225 0 12.1941053 4.24437231 22.4500702 12.87283241 31.1013666 8.6242501 8.6470752 18.8695883 12.9003212 31.0731032 12.9003212 12.2065273 0 22.4734846-4.2557068 31.1349929-12.9081521 8.6603017-8.6512398 12.9190715-18.9040965 12.9190715-31.0935357l-.0036695-.6147591c-.1419586-11.9183989-4.4018851-21.9707923-12.915402-30.475401-8.6615083-8.6524453-18.9284656-12.9081521-31.1349929-12.9081521z" />
      <path d="m56 23v22h22v11h-22v22h-11l-.001-22h-21.999v-11h21.999l.001-22z" />
    </g>
  </svg>`,Dt=Ce`<svg viewBox="0 0 100 100"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="m33.3333333 90-33.3333333-33.3333333 13.3333333-13.3333334 20 20 53.3333334-53.3333333 13.3333333 13.3333333z"
  fill-rule="evenodd" fill="currentColor"
/>
</svg>`;let ve=class extends T{constructor(){super(...arguments),this.itemId="",this.lists=[]}updateCount(){console.log("updateCount called"),this.dispatchEvent(new CustomEvent("updateDropdown",{bubbles:!0,composed:!0}))}closeDropdown(){console.log("closeDropdown called"),this.dispatchEvent(new CustomEvent("closeDropdown",{bubbles:!0,composed:!0}))}optionClicked(e){var t;(t=e.selectedHandler)===null||t===void 0||t.call(e,e)}async onSelected(e){this.closeDropdown();const t=this.lists.find(i=>e.id===i.id)||{};t.item_is_member?await this.removeMember(t.id,t.member_id):await this.addMember(t.id),this.updateCount()}async createList(){await zi(this.userListsService,()=>this.closeDropdown(),()=>this.updateCount())}get userListOptions(){const e=[];this.lists.forEach(i=>{const r={label:m` <ia-icon-label>
          <div slot="icon" class="icon-size">
            ${this.checkedIcon(i.item_is_member)}
          </div>
          <div class="truncate">${i.list_name}</div>
        </ia-icon-label>`,id:i.id,isSelected:i.item_is_member,selectedHandler:n=>this.onSelected(n)};e.push(r)});const t={label:m`<ia-icon-label>
        <div slot="icon" class="icon-size">${It}</div>
        Create new list
      </ia-icon-label>`,id:"create-new-list",selectedHandler:()=>this.createList()};return e.push(t),e}async addMember(e){var t;await((t=this.userListsService)===null||t===void 0?void 0:t.addMemberToList(e,{identifier:this.itemId}))}async removeMember(e,t){var i;await((i=this.userListsService)===null||i===void 0?void 0:i.removeMemberFromList(e,t))}checkedIcon(e){return e?Dt:m``}userListOptionTemplate(e){const{label:t,isSelected:i,id:r}=e,n=i?"selected":void 0,a=m`<button
      id="${r}"
      @click=${l=>{l.stopPropagation(),this.optionClicked(e)}}
    >
      ${t}
    </button> `;return m`<li class="${Ye(n)}">${a}</li>`}render(){return m`
      ${this.userListOptions.map(e=>this.userListOptionTemplate(e))}
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

      .icon-size {
        width: 12px;
        height: 12px;
      }
    `}};s([y({type:String})],ve.prototype,"itemId",void 0);s([y({type:Array})],ve.prototype,"lists",void 0);s([y({type:Object})],ve.prototype,"userListsService",void 0);ve=s([N("item-userlists")],ve);const xt=m`<img
  src="https://archive.org/images/loading.gif"
  alt="Loading..."
/>`;let D=class extends T{constructor(){super(...arguments),this.item="",this.selectedCount=0,this.userListData=[],this.dataAction="initial",this.userListsService=Ti(),this.listID="",this.closeListener=e=>{console.log("closeListener called ",e.target),this.dropdown.open=!1,this.dataActionTask.run(["initial"])},this.updateListener=e=>{console.log("updateListener called ",e.target),this.dataActionTask.run(["load"])},this.dataActionTask=new ei(this,{task:async([e])=>{if(!this.item||!this.userListsService)return Ve;switch(e){case"load":return this.updateSelectedCount();default:return Ve}},args:()=>[this.dataAction],autoRun:!1})}async dropdownClicked(e){console.log("dropdownClicked called ",e.target),this.dropdown.open?this.dropdown.open=!1:(await this.dataActionTask.run(["load"]),this.dropdown.open=!0)}async firstUpdated(){await new Promise(e=>setTimeout(e,0)),this.addEventListener("closeDropdown",this.closeListener),this.addEventListener("updateDropdown",this.updateListener),this.dataActionTask.run(["load"])}async updateItemUserList(){var e;const t=await this.userListsService.fetchOwnListsContainingItem(this.item);if(!t.success)throw new Error((e=t.error)===null||e===void 0?void 0:e.message);return this.userListData=t.success,this.userListData}async updateSelectedCount(){const e=await this.updateItemUserList();return this.selectedCount=e.filter(t=>t.item_is_member).length,this.selectedCount}renderIcon(e){return m`
      <div slot="icon" class="icon-img">${e}</div>
      <div class="label">Add to list</div>
      <div class="label-sm">Lists</div>
    `}renderError(){return m`
      <div class="label">User Lists<br />Load Error</div>
      <div class="label-sm">Load<br />Error</div>
    `}mainButton(e){return m`
      <div class="action-bar-text">
        <ia-icon-label>
          ${e?this.renderIcon(e):this.renderError()}
        </ia-icon-label>
      </div>
    `}get isFetched(){return this.dataActionTask.status===bt.COMPLETE}get isDisabled(){return this.dataActionTask.status!==bt.COMPLETE}get itemUserListsTemplate(){return m`
      <item-userlists
        slot="list"
        .itemId=${this.item}
        .lists=${this.userListData}
        .userListsService=${this.userListsService}
      >
      </item-userlists>
    `}render(){return m`
      <div class="list-container">
        <ia-dropdown
          class="list-dropdown"
          ?isDisabled=${this.isDisabled}
          ?openViaCaret=${!1}
          ?isCustomList=${!0}
          ?closeOnEscape=${!0}
          ?closeOnBackdropClick=${!0}
          ?hasCustomClickHandler=${!0}
          @click=${this.isDisabled?M:this.dropdownClicked}
        >
          <div class="list-title" slot="dropdown-label">
            ${this.dataActionTask.render({initial:()=>this.mainButton(xt),pending:()=>this.mainButton(xt),complete:e=>this.mainButton(e===0?It:Dt),error:()=>this.mainButton(void 0)})}
          </div>
          ${this.itemUserListsTemplate}
        </ia-dropdown>
      </div>
    `}};D.styles=f`
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
  `;s([y({type:String})],D.prototype,"item",void 0);s([Ee()],D.prototype,"selectedCount",void 0);s([Ee({hasChanged(o,e){if((o==null?void 0:o.length)!==(e==null?void 0:e.length))return!0;for(let t=0;t<o.length;t+=1)if(o[t].item_is_member!==e[t].item_is_member)return!0;return!1}})],D.prototype,"userListData",void 0);s([Ee()],D.prototype,"dataAction",void 0);s([Ee()],D.prototype,"userListsService",void 0);s([re("ia-dropdown")],D.prototype,"dropdown",void 0);D=s([N("ia-item-user-lists")],D);let rt=class extends T{render(){return m`
      <div>
        <ia-item-user-lists item="goody"></ia-item-user-lists>
      </div>
    `}};rt.styles=f`
    :host {
      display: block;
    }
    div {
      display: flex;
    }
  `;rt=s([N("app-root")],rt);
