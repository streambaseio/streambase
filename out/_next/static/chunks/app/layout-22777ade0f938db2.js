(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1770:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var l=Object.getOwnPropertyDescriptor(t,n);(!l||("get"in l?!t.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,l)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return l(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});let i=a(n(2265));t.default=function({html:e,height:t=null,width:n=null,children:r,dataNtpc:l=""}){return(0,i.useEffect)(()=>{l&&performance.mark("mark_feature_usage",{detail:{feature:`next-third-parties-${l}`}})},[l]),i.default.createElement(i.default.Fragment,null,r,e?i.default.createElement("div",{style:{height:null!=t?`${t}px`:"auto",width:null!=n?`${n}px`:"auto"},"data-ntpc":l,dangerouslySetInnerHTML:{__html:e}}):null)}},6927:function(e,t,n){"use strict";let r;var l=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var l=Object.getOwnPropertyDescriptor(t,n);(!l||("get"in l?!t.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,l)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&l(t,e,n);return a(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let u=i(n(2265)),d=o(n(8475));t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:n="dataLayer",auth:l,preview:a,dataLayer:i}=e;void 0===r&&(r=n);let o="dataLayer"!==n?`$l=${n}`:"",c=l?`&gtm_auth=${l}`:"",s=a?`&gtm_preview=${a}&gtm_cookies_win=x`:"";return(0,u.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),u.default.createElement(u.default.Fragment,null,u.default.createElement(d.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:`
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${i?`w[l].push(${JSON.stringify(i)})`:""}
      })(window,'${n}');`}}),u.default.createElement(d.default,{id:"_next-gtm","data-ntpc":"GTM",src:`https://www.googletagmanager.com/gtm.js?id=${t}${o}${c}${s}`}))},t.sendGTMEvent=e=>{if(void 0===r){console.warn("@next/third-parties: GTM has not been initialized");return}window[r]?window[r].push(e):console.warn(`@next/third-parties: GTM dataLayer ${r} does not exist`)}},4118:function(e,t,n){Promise.resolve().then(n.t.bind(n,6927,23)),Promise.resolve().then(n.t.bind(n,1770,23)),Promise.resolve().then(n.t.bind(n,5935,23)),Promise.resolve().then(n.t.bind(n,3385,23)),Promise.resolve().then(n.t.bind(n,9646,23))},3313:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return a},default:function(){return i}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function l(e){let{type:t,props:n}=e,l=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let a=r[e]||e.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?l[a]=!!n[e]:l.setAttribute(a,n[e])}let{children:a,dangerouslySetInnerHTML:i}=n;return i?l.innerHTML=i.__html||"":a&&(l.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):""),l}function a(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,l="";if(r){let{children:e}=r.props;l="string"==typeof e?e:Array.isArray(e)?e.join(""):""}l!==document.title&&(document.title=l),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),i=Number(r.content),o=[];for(let t=0,n=r.previousElementSibling;t<i;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&o.push(n)}let d=t.map(l).filter(e=>{for(let t=0,n=o.length;t<n;t++)if(a(o[t],e))return o.splice(t,1),!1;return!0});o.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),d.forEach(e=>n.insertBefore(e,r)),r.content=(i-o.length+d.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2185:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return m},initScriptLoader:function(){return h},default:function(){return b}});let r=n(1024),l=n(8533),a=r._(n(4887)),i=l._(n(2265)),o=n(3634),u=n(3313),d=n(2185),c=new Map,s=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(a.default.preinit){e.forEach(e=>{a.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},_=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:l=null,dangerouslySetInnerHTML:a,children:i="",strategy:o="afterInteractive",onError:d,stylesheets:_}=e,m=n||t;if(m&&s.has(m))return;if(c.has(t)){s.add(m),c.get(t).then(r,d);return}let h=()=>{l&&l(),s.add(m)},y=document.createElement("script"),b=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),r&&r.call(this,t),h()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){d&&d(e)});for(let[n,r]of(a?(y.innerHTML=a.__html||"",h()):i?(y.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",h()):t&&(y.src=t,c.set(t,b)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();y.setAttribute(e,r)}"worker"===o&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",o),_&&p(_),document.body.appendChild(y)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>_(e))}):_(e)}function h(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");s.add(t)})}function y(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:l=null,strategy:u="afterInteractive",onError:c,stylesheets:f,...p}=e,{updateScripts:m,scripts:h,getIsSsr:y,appDir:b,nonce:g}=(0,i.useContext)(o.HeadManagerContext),v=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;v.current||(l&&e&&s.has(e)&&l(),v.current=!0)},[l,t,n]);let w=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!w.current&&("afterInteractive"===u?_(e):"lazyOnload"===u&&("complete"===document.readyState?(0,d.requestIdleCallback)(()=>_(e)):window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>_(e))})),w.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(m?(h[u]=(h[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:l,onError:c,...p}]),m(h)):y&&y()?s.add(t||n):y&&!y()&&_(e)),b){if(f&&f.forEach(e=>{a.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(a.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),i.default.createElement("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),i.default.createElement("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===u&&n&&a.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(y,"__nextScript",{value:!0});let b=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3385:function(){},9646:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}},8475:function(e,t,n){e.exports=n(5935)}},function(e){e.O(0,[971,938,744],function(){return e(e.s=4118)}),_N_E=e.O()}]);