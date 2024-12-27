import"./lenisSmoothScroll.B6gzroPj.js";import"./hoisted.BKdJTB1e.js";var G=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function V(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}class C{constructor(y){this.dataAttrValue=y,this.bookmarkButton=document.querySelector(`[data-bookmark-button="${y}"]`)}static BOOKMARKS_KEY="bookmarks";bookmarkButton;getStoredBookmarks(){const y=localStorage.getItem(C.BOOKMARKS_KEY);return y?JSON.parse(y):[]}init(){this.bookmarkButton&&this.isStored()&&this.markAsStored(),this.bookmarkButton?.addEventListener("click",()=>this.toggleBookmark())}isStored(){return this.getStoredBookmarks().includes(window.location.pathname)}markAsStored(){if(this.bookmarkButton){this.bookmarkButton.classList.add("bookmarked");let y=this.bookmarkButton.querySelector("svg");y&&y.setAttribute("class","h-6 w-6 fill-red-500 dark:fill-red-500");let g=y?.querySelector("path");g&&g.setAttribute("class","fill-current text-red-500 dark:text-red-500")}}unmarkAsStored(){if(this.bookmarkButton){this.bookmarkButton.classList.remove("bookmarked");let y=this.bookmarkButton.querySelector("svg");y&&y.setAttribute("class","h-6 w-6 fill-none");let g=y?.querySelector("path");g&&g.setAttribute("class","fill-current text-neutral-500 group-hover:text-red-400 dark:text-neutral-500 group-hover:dark:text-red-400")}}toggleBookmark(){let y=this.getStoredBookmarks();const g=y.indexOf(window.location.pathname);g!==-1?(y.splice(g,1),this.unmarkAsStored()):(y.push(window.location.pathname),this.markAsStored()),localStorage.setItem(C.BOOKMARKS_KEY,JSON.stringify(y))}}new C("bookmark-button").init();var N={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(x,y){(function(w,b){x.exports=b()})(G,function(){return function(){var g={686:function(u,a,t){t.d(a,{default:function(){return $}});var s=t(279),l=t.n(s),f=t(370),m=t.n(f),h=t(817),S=t.n(h);function d(i){try{return document.execCommand(i)}catch{return!1}}var v=function(n){var e=S()(n);return d("cut"),e},p=v;function E(i){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(r,"px"),e.setAttribute("readonly",""),e.value=i,e}var j=function(n,e){var r=E(n);e.container.appendChild(r);var o=S()(r);return d("copy"),r.remove(),o},P=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},r="";return typeof n=="string"?r=j(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n?.type)?r=j(n.value,e):(r=S()(n),d("copy")),r},L=P;function A(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?A=function(e){return typeof e}:A=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(i)}var K=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,r=e===void 0?"copy":e,o=n.container,c=n.target,k=n.text;if(r!=="copy"&&r!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(c!==void 0)if(c&&A(c)==="object"&&c.nodeType===1){if(r==="copy"&&c.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(r==="cut"&&(c.hasAttribute("readonly")||c.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(k)return L(k,{container:o});if(c)return r==="cut"?p(c):L(c,{container:o})},q=K;function _(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_=function(e){return typeof e}:_=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(i)}function D(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function M(i,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}function I(i,n,e){return n&&M(i.prototype,n),e&&M(i,e),i}function F(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&B(i,n)}function B(i,n){return B=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},B(i,n)}function Y(i){var n=J();return function(){var r=T(i),o;if(n){var c=T(this).constructor;o=Reflect.construct(r,arguments,c)}else o=r.apply(this,arguments);return H(this,o)}}function H(i,n){return n&&(_(n)==="object"||typeof n=="function")?n:z(i)}function z(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function J(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function T(i){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(i)}function R(i,n){var e="data-clipboard-".concat(i);if(n.hasAttribute(e))return n.getAttribute(e)}var U=function(i){F(e,i);var n=Y(e);function e(r,o){var c;return D(this,e),c=n.call(this),c.resolveOptions(o),c.listenClick(r),c}return I(e,[{key:"resolveOptions",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof o.action=="function"?o.action:this.defaultAction,this.target=typeof o.target=="function"?o.target:this.defaultTarget,this.text=typeof o.text=="function"?o.text:this.defaultText,this.container=_(o.container)==="object"?o.container:document.body}},{key:"listenClick",value:function(o){var c=this;this.listener=m()(o,"click",function(k){return c.onClick(k)})}},{key:"onClick",value:function(o){var c=o.delegateTarget||o.currentTarget,k=this.action(c)||"copy",O=q({action:k,container:this.container,target:this.target(c),text:this.text(c)});this.emit(O?"success":"error",{action:k,text:O,trigger:c,clearSelection:function(){c&&c.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(o){return R("action",o)}},{key:"defaultTarget",value:function(o){var c=R("target",o);if(c)return document.querySelector(c)}},{key:"defaultText",value:function(o){return R("text",o)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(o){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return L(o,c)}},{key:"cut",value:function(o){return p(o)}},{key:"isSupported",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],c=typeof o=="string"?[o]:o,k=!!document.queryCommandSupported;return c.forEach(function(O){k=k&&!!document.queryCommandSupported(O)}),k}}]),e}(l()),$=U},828:function(u){var a=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function s(l,f){for(;l&&l.nodeType!==a;){if(typeof l.matches=="function"&&l.matches(f))return l;l=l.parentNode}}u.exports=s},438:function(u,a,t){var s=t(828);function l(h,S,d,v,p){var E=m.apply(this,arguments);return h.addEventListener(d,E,p),{destroy:function(){h.removeEventListener(d,E,p)}}}function f(h,S,d,v,p){return typeof h.addEventListener=="function"?l.apply(null,arguments):typeof d=="function"?l.bind(null,document).apply(null,arguments):(typeof h=="string"&&(h=document.querySelectorAll(h)),Array.prototype.map.call(h,function(E){return l(E,S,d,v,p)}))}function m(h,S,d,v){return function(p){p.delegateTarget=s(p.target,S),p.delegateTarget&&v.call(h,p)}}u.exports=f},879:function(u,a){a.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},a.nodeList=function(t){var s=Object.prototype.toString.call(t);return t!==void 0&&(s==="[object NodeList]"||s==="[object HTMLCollection]")&&"length"in t&&(t.length===0||a.node(t[0]))},a.string=function(t){return typeof t=="string"||t instanceof String},a.fn=function(t){var s=Object.prototype.toString.call(t);return s==="[object Function]"}},370:function(u,a,t){var s=t(879),l=t(438);function f(d,v,p){if(!d&&!v&&!p)throw new Error("Missing required arguments");if(!s.string(v))throw new TypeError("Second argument must be a String");if(!s.fn(p))throw new TypeError("Third argument must be a Function");if(s.node(d))return m(d,v,p);if(s.nodeList(d))return h(d,v,p);if(s.string(d))return S(d,v,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function m(d,v,p){return d.addEventListener(v,p),{destroy:function(){d.removeEventListener(v,p)}}}function h(d,v,p){return Array.prototype.forEach.call(d,function(E){E.addEventListener(v,p)}),{destroy:function(){Array.prototype.forEach.call(d,function(E){E.removeEventListener(v,p)})}}}function S(d,v,p){return l(document.body,d,v,p)}u.exports=f},817:function(u){function a(t){var s;if(t.nodeName==="SELECT")t.focus(),s=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var l=t.hasAttribute("readonly");l||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),l||t.removeAttribute("readonly"),s=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var f=window.getSelection(),m=document.createRange();m.selectNodeContents(t),f.removeAllRanges(),f.addRange(m),s=f.toString()}return s}u.exports=a},279:function(u){function a(){}a.prototype={on:function(t,s,l){var f=this.e||(this.e={});return(f[t]||(f[t]=[])).push({fn:s,ctx:l}),this},once:function(t,s,l){var f=this;function m(){f.off(t,m),s.apply(l,arguments)}return m._=s,this.on(t,m,l)},emit:function(t){var s=[].slice.call(arguments,1),l=((this.e||(this.e={}))[t]||[]).slice(),f=0,m=l.length;for(f;f<m;f++)l[f].fn.apply(l[f].ctx,s);return this},off:function(t,s){var l=this.e||(this.e={}),f=l[t],m=[];if(f&&s)for(var h=0,S=f.length;h<S;h++)f[h].fn!==s&&f[h].fn._!==s&&m.push(f[h]);return m.length?l[t]=m:delete l[t],this}},u.exports=a,u.exports.TinyEmitter=a}},w={};function b(u){if(w[u])return w[u].exports;var a=w[u]={exports:{}};return g[u](a,a.exports,b),a.exports}return function(){b.n=function(u){var a=u&&u.__esModule?function(){return u.default}:function(){return u};return b.d(a,{a}),a}}(),function(){b.d=function(u,a){for(var t in a)b.o(a,t)&&!b.o(u,t)&&Object.defineProperty(u,t,{enumerable:!0,get:a[t]})}}(),function(){b.o=function(u,a){return Object.prototype.hasOwnProperty.call(u,a)}}(),b(686)}().default})})(N);var X=N.exports;const Q=V(X);(function(){window.addEventListener("load",()=>{document.querySelectorAll(".js-clipboard").forEach(y=>{new Q(y,{text:()=>window.location.href}).on("success",()=>{const w=y.querySelector(".js-clipboard-default"),b=y.querySelector(".js-clipboard-success"),u=y.querySelector(".js-clipboard-success-text"),a=y.dataset.clipboardSuccessText||"";let t;u&&(t=u.textContent||"",u.textContent=a),w&&b&&(w.style.display="none",b.style.display="block"),setTimeout(()=>{u&&t!==void 0&&(u.textContent=t),w&&b&&(b.style.display="",w.style.display="")},800)})})})})();
