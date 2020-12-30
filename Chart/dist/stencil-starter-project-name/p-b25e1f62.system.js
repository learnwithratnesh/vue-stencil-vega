var __extends=this&&this.__extends||function(){var e=function(r,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)if(r.hasOwnProperty(n))e[n]=r[n]};return e(r,n)};return function(r,n){e(r,n);function t(){this.constructor=r}r.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}();var __awaiter=this&&this.__awaiter||function(e,r,n,t){function a(e){return e instanceof n?e:new n((function(r){r(e)}))}return new(n||(n=Promise))((function(n,i){function s(e){try{l(t.next(e))}catch(r){i(r)}}function o(e){try{l(t["throw"](e))}catch(r){i(r)}}function l(e){e.done?n(e.value):a(e.value).then(s,o)}l((t=t.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(t)throw new TypeError("Generator is already executing.");while(n)try{if(t=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;a=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1];i=s;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(s);break}if(i[2])n.ops.pop();n.trys.pop();continue}s=r.call(e,n)}catch(o){s=[6,o];a=0}finally{t=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,n=arguments.length;r<n;r++)e+=arguments[r].length;for(var t=Array(e),a=0,r=0;r<n;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)t[a]=i[s];return t};System.register([],(function(e,r){"use strict";return{execute:function(){var n=this;var t="stencil-starter-project-name";var a=0;var i=false;var s;var o;var l=false;var f=typeof window!=="undefined"?window:{};var u=f.document||{head:{}};var c={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,n,t){return e.addEventListener(r,n,t)},rel:function(e,r,n,t){return e.removeEventListener(r,n,t)}};var $=function(){return(u.head.attachShadow+"").indexOf("[native")>-1}();var v=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var h=new WeakMap;var d=function(e){return h.get(e)};var m=e("r",(function(e,r){return h.set(r.$lazyInstance$=e,r)}));var p=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return h.set(e,r)};var g=function(e,r){return r in e};var y=function(e){return console.error(e)};var w=new Map;var b=function(e,n,t){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=w.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{w.set(i,e)}return e[a]}),y)};var S=new Map;var _=[];var R=[];var E=[];var N=function(e,r){return function(n){e.push(n);if(!i){i=true;if(r&&c.$flags$&4){L(x)}else{c.raf(x)}}}};var C=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(n){y(n)}}e.length=0};var j=function(e,r){var n=0;var t=0;while(n<e.length&&(t=performance.now())<r){try{e[n++](t)}catch(a){y(a)}}if(n===e.length){e.length=0}else if(n!==0){e.splice(0,n)}};var x=function(){a++;C(_);var e=(c.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;j(R,e);j(E,e);if(R.length>0){E.push.apply(E,R);R.length=0}if(i=_.length+R.length+E.length>0){c.raf(x)}else{a=0}};var L=function(e){return Promise.resolve().then(e)};var U=N(R,true);var A={};var P=function(e){return e!=null};var k=function(e){e=typeof e;return e==="object"||e==="function"};var O=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var M=e("a",(function(){if(!(f.CSS&&f.CSS.supports&&f.CSS.supports("color","var(--c)"))){return r.import("./p-447ccb56.system.js").then((function(){c.$cssShim$=f.__stencil_cssshim;if(c.$cssShim$){return c.$cssShim$.initShim()}}))}return Promise.resolve()}));var B=e("p",(function(){{c.$cssShim$=f.__stencil_cssshim}var e=Array.from(u.querySelectorAll("script")).find((function(e){return new RegExp("/"+t+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===t}));var n=e["data-opts"]||{};var a=r.meta.url;if("onbeforeload"in e&&!history.scrollRestoration&&false){return{then:function(){}}}if(a!==""){n.resourcesUrl=new URL(".",a).href}else{n.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,f.location.href)).href;I(n.resourcesUrl,e);if(!window.customElements){return r.import("./p-7f10eb01.system.js").then((function(){return n}))}}return Promise.resolve(n)}));var I=function(e,r){var n=O(t);try{f[n]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;f[n]=function(t){var i=new URL(t,e).href;var s=a.get(i);if(!s){var o=u.createElement("script");o.type="module";o.crossOrigin=r.crossOrigin;o.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+n+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){o.onload=function(){e(f[n].m);o.remove()}}));a.set(i,s);u.head.appendChild(o)}return s}}};var T=function(e,r){if(e!=null&&!k(e)){return e}return e};var z="hydrated";var H=function(e,r){if(r===void 0){r=""}{return function(){return}}};var q=function(e,r){{return function(){return}}};var V=new WeakMap;var F=function(e,r,n){var t=S.get(e);if(v&&n){t=t||new CSSStyleSheet;t.replace(r)}else{t=r}S.set(e,t)};var W=function(e,r,n,t){var a=G(r.$tagName$);var i=S.get(a);e=e.nodeType===11?e:u;if(i){if(typeof i==="string"){e=e.head||e;var s=V.get(e);var o=void 0;if(!s){V.set(e,s=new Set)}if(!s.has(a)){{if(c.$cssShim$){o=c.$cssShim$.createHostStyle(t,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=u.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var D=function(e,r,n){var t=H("attachStyles",r.$tagName$);var a=W($&&e.shadowRoot?e.shadowRoot:e.getRootNode(),r,n,e);if(r.$flags$&10){e["s-sc"]=a;e.classList.add(a+"-h")}t()};var G=function(e,r){return"sc-"+e};var Q=e("h",(function(e,r){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var a=null;var i=false;var s=false;var o=[];var l=function(r){for(var n=0;n<r.length;n++){a=r[n];if(Array.isArray(a)){l(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!k(a)){a=String(a)}if(i&&s){o[o.length-1].$text$+=a}else{o.push(i?J(null,a):a)}s=i}}};l(n);var f=J(e,null);f.$attrs$=r;if(o.length>0){f.$children$=o}return f}));var J=function(e,r){var n={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{n.$attrs$=null}return n};var K={};var X=function(e){return e&&e.$tag$===K};var Y=function(e,r,n,t,a,i){if(n===t){return}var s=g(e,r);var o=r.toLowerCase();{var l=k(t);if((s||l&&t!==null)&&!a){try{if(!e.tagName.includes("-")){var f=t==null?"":t;if(r==="list"){s=false}else if(n==null||e[r]!=f){e[r]=f}}else{e[r]=t}}catch(u){}}if(t==null||t===false){{e.removeAttribute(r)}}else if((!s||i&4||a)&&!l){t=t===true?"":t;{e.setAttribute(r,t)}}}};var Z=function(e,r,n,t){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||A;var s=r.$attrs$||A;{for(t in i){if(!(t in s)){Y(a,t,i[t],undefined,n,r.$flags$)}}}for(t in s){Y(a,t,i[t],s[t],n,r.$flags$)}};var ee=function(e,r,n,t){var a=r.$children$[n];var i=0;var o;var f;{o=a.$elm$=u.createElement(a.$tag$);{Z(null,a,l)}if(P(s)&&o["s-si"]!==s){o.classList.add(o["s-si"]=s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){f=ee(e,a,i);if(f){o.appendChild(f)}}}}return o};var re=function(e,r,n,t,a,i){var s=e;var l;if(s.shadowRoot&&s.tagName===o){s=s.shadowRoot}for(;a<=i;++a){if(t[a]){l=ee(null,n,a);if(l){t[a].$elm$=l;s.insertBefore(l,r)}}}};var ne=function(e,r,n,t,a){for(;r<=n;++r){if(t=e[r]){a=t.$elm$;a.remove()}}};var te=function(e,r,n,t){var a=0;var i=0;var s=r.length-1;var o=r[0];var l=r[s];var f=t.length-1;var u=t[0];var c=t[f];var $;while(a<=s&&i<=f){if(o==null){o=r[++a]}else if(l==null){l=r[--s]}else if(u==null){u=t[++i]}else if(c==null){c=t[--f]}else if(ae(o,u)){ie(o,u);o=r[++a];u=t[++i]}else if(ae(l,c)){ie(l,c);l=r[--s];c=t[--f]}else if(ae(o,c)){ie(o,c);e.insertBefore(o.$elm$,l.$elm$.nextSibling);o=r[++a];c=t[--f]}else if(ae(l,u)){ie(l,u);e.insertBefore(l.$elm$,o.$elm$);l=r[--s];u=t[++i]}else{{$=ee(r&&r[i],n,i);u=t[++i]}if($){{o.$elm$.parentNode.insertBefore($,o.$elm$)}}}}if(a>s){re(e,t[f+1]==null?null:t[f+1].$elm$,n,t,i,f)}else if(i>f){ne(r,a,s)}};var ae=function(e,r){if(e.$tag$===r.$tag$){return true}return false};var ie=function(e,r){var n=r.$elm$=e.$elm$;var t=e.$children$;var a=r.$children$;{{{Z(e,r,l)}}if(t!==null&&a!==null){te(n,t,r,a)}else if(a!==null){re(n,null,r,a,0,a.length-1)}else if(t!==null){ne(t,0,t.length-1)}}};var se=function(e,r,n,t){o=e.tagName;var a=r.$vnode$||J(null,null);var i=X(t)?t:Q(null,null,t);i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{s=e["s-sc"]}ie(a,i)};var oe=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var le=function(e,r,n,t){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=H("scheduleUpdate",n.$tagName$);var i=r.$ancestorComponent$;var s=r.$lazyInstance$;var o=function(){return fe(e,r,n,s,t)};oe(r,i);var l;a();return de(l,(function(){return U(o)}))};var fe=function(e,r,n,t,a){var i=H("update",n.$tagName$);var s=e["s-rc"];if(a){D(e,n,r.$modeName$)}var o=H("render",n.$tagName$);{{se(e,r,n,ue(t))}}if(c.$cssShim$){c.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(s){s.forEach((function(e){return e()}));e["s-rc"]=undefined}o();i();{var l=e["s-p"];var f=function(){return ce(e,r,n)};if(l.length===0){f()}else{Promise.all(l).then(f);r.$flags$|=4;l.length=0}}};var ue=function(e,r){try{e=e.render()}catch(n){y(n)}return e};var ce=function(e,r,n){var t=H("postUpdate",n.$tagName$);var a=r.$lazyInstance$;var i=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(z)}{he(a,"componentDidLoad")}t();{r.$onReadyResolve$(e);if(!i){ve()}}}else{t()}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){L((function(){return le(e,r,n,false)}))}r.$flags$&=~(4|512)}};var $e=function(e,r){{var n=d(e);var t=n.$hostElement$.isConnected;if(t&&(n.$flags$&(2|16))===2){le(e,n,r,false)}return t}};var ve=function(e){{u.documentElement.classList.add(z)}{c.$flags$|=2}};var he=function(e,r,n){if(e&&e[r]){try{return e[r](n)}catch(t){y(t)}}return undefined};var de=function(e,r){return e&&e.then?e.then(r):r()};var me=function(e,r){return d(e).$instanceValues$.get(r)};var pe=function(e,r,n,t){var a=d(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(r);var o=a.$flags$;var l=a.$lazyInstance$;n=T(n);if(n!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(r,n);if(l){if((o&(2|16))===2){le(i,a,t,false)}}}};var ge=function(e,r,n){if(r.$members$){var t=Object.entries(r.$members$);var a=e.prototype;t.forEach((function(e){var t=e[0],i=e[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,t,{get:function(){return me(this,t)},set:function(e){pe(this,t,e,r)},configurable:true,enumerable:true})}}))}return e};var ye=function(e,t,a,i,s){return __awaiter(n,void 0,void 0,(function(){var n,i,o,l,f,u,c;return __generator(this,(function($){switch($.label){case 0:if(!((t.$flags$&32)===0))return[3,5];t.$flags$|=32;s=b(a);if(!s.then)return[3,2];n=q();return[4,s];case 1:s=$.sent();n();$.label=2;case 2:if(!s.isProxied){ge(s,a,2);s.isProxied=true}i=H("createInstance",a.$tagName$);{t.$flags$|=8}try{new s(t)}catch(v){y(v)}{t.$flags$&=~8}i();o=G(a.$tagName$);if(!(!S.has(o)&&s.style))return[3,5];l=H("registerStyles",a.$tagName$);f=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-ed968002.system.js").then((function(e){return e.scopeCss(f,o,false)}))];case 3:f=$.sent();$.label=4;case 4:F(o,f,!!(a.$flags$&1));l();$.label=5;case 5:u=t.$ancestorComponent$;c=function(){return le(e,t,a,true)};if(u&&u["s-rc"]){u["s-rc"].push(c)}else{c()}return[2]}}))}))};var we=function(e,r){if((c.$flags$&1)===0){var n=H("connectedCallback",r.$tagName$);var t=d(e);if(!(t.$flags$&1)){t.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){oe(t,t.$ancestorComponent$=a);break}}}{L((function(){return ye(e,t,r)}))}}n()}};var be=function(e){if((c.$flags$&1)===0){var r=d(e);if(c.$cssShim$){c.$cssShim$.removeHost(e)}}};var Se=e("b",(function(e,r){if(r===void 0){r={}}var n=H();var t=[];var a=r.exclude||[];var i=u.head;var s=f.customElements;var o=i.querySelector("meta[charset]");var l=u.createElement("style");var v=[];var h;var m=true;Object.assign(c,r);c.$resourcesUrl$=new URL(r.resourcesUrl||"./",u.baseURI).href;if(r.syncQueue){c.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var n={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{n.$members$=r[2]}if(!$&&n.$flags$&1){n.$flags$|=8}var i=n.$tagName$;var o=function(e){__extends(r,e);function r(r){var t=e.call(this,r)||this;r=t;p(r);if(n.$flags$&1){if($){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return t}r.prototype.connectedCallback=function(){var e=this;if(h){clearTimeout(h);h=null}if(m){v.push(this)}else{c.jmp((function(){return we(e,n)}))}};r.prototype.disconnectedCallback=function(){var e=this;c.jmp((function(){return be(e)}))};r.prototype.forceUpdate=function(){$e(this,n)};r.prototype.componentOnReady=function(){return d(this).$onReadyPromise$};return r}(HTMLElement);n.$lazyBundleIds$=e[0];if(!a.includes(i)&&!s.get(i)){t.push(i);s.define(i,ge(o,n,1))}}))}));l.innerHTML=t+"{visibility:hidden}.hydrated{visibility:inherit}";l.setAttribute("data-styles","");i.insertBefore(l,o?o.nextSibling:i.firstChild);m=false;if(v.length>0){v.forEach((function(e){return e.connectedCallback()}))}else{c.jmp((function(){return h=setTimeout(ve,30,"timeout")}))}n()}));var _e=e("g",(function(e){return d(e).$hostElement$}))}}}));