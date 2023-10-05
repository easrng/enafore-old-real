"use strict";(this.webpackChunk=this.webpackChunk||[]).push([[8565],{8565:(t,e,s)=>{s.d(e,{Z:()=>l});var h=s(4178),i=s(3072),a=s(4698),c=s(1912);const n=new a.c({maxSize:i.d});window.__focusRestorationCache=n;var o={setupPushState(){this.onPushState=this.onPushState.bind(this),this.setInCache({ignoreBlurEvents:!1}),window.addEventListener("pushState",this.onPushState)},teardownPushState(){window.removeEventListener("pushState",this.onPushState)},setInCache(t){const{realm:e}=this.get();n.has(e)||n.set(e,{}),Object.assign(n.get(e),t)},deleteInCache(t){const{realm:e}=this.get();n.has(e)&&delete n.get(e)[t]},getInCache(){const{realm:t}=this.get();return n.get(t)||{}},onPushState(){this.setInCache({ignoreBlurEvents:!0})},restoreFocus(){const{realm:t}=this.get(),{elementId:e}=this.getInCache();e&&(0,c.w)(e)},clearFocus(){const{realm:t}=this.get(),{ignoreBlurEvents:e}=this.getInCache();e||this.deleteInCache("elementId")},saveFocus(t){const{realm:e}=this.get(),s=t.target;if(s){const t=s.getAttribute("id");t&&this.setInCache({elementId:t})}}};function r(){this.setupPushState(),this.restoreFocus()}function u(){this.teardownPushState()}function d(t){if((0,h.S1)(this,t),this._state=(0,h.f0)({},t.data),this._intro=!0,this._handlers.destroy=[u],this._slotted=t.slots||{},this._fragment=function(t,e){var s,i=t._slotted.default;function a(e){t.saveFocus(e)}function c(e){t.clearFocus()}return{c(){s=(0,h.az)("div"),this.h()},l(t){s=(0,h.d$)(t,"DIV",{},!1),(0,h.pI)(s).forEach(h.r2),this.h()},h(){(0,h.NH)(s,"focusin",a),(0,h.NH)(s,"focusout",c)},m(t,e){(0,h.$T)(t,s,e),i&&(0,h.R3)(s,i)},p:h.ZT,d(t){t&&(0,h.r2)(s),i&&(0,h.R_)(s,i),(0,h.ys)(s,"focusin",a),(0,h.ys)(s,"focusout",c)}}}(this,this._state),this.root._oncreate.push((()=>{r.call(this),this.fire("update",{changed:(0,h.lZ)({},this._state),current:this._state})})),t.target){var e=(0,h.pI)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(h.r2),this._mount(t.target,t.anchor),(0,h.yl)(this)}}(0,h.f0)(d.prototype,h.uS),(0,h.f0)(d.prototype,o);const l=d},3072:(t,e,s)=>{s.d(e,{d:()=>h});const h=10},4698:(t,e,s)=>{s.d(e,{c:()=>a});var h=s(9749);const{EventEmitter:i}=h;class a extends i{constructor(t={}){if(super(),!(t.maxSize&&t.maxSize>0))throw new TypeError("`maxSize` must be a number greater than 0");this.maxSize=t.maxSize,this.cache=new Map,this.oldCache=new Map,this._size=0}_set(t,e){if(this.cache.set(t,e),this._size++,this._size>=this.maxSize){if(this._size=0,this.listenerCount("evict"))for(const t of this.oldCache.keys())this.cache.has(t)||this.emit("evict",this.oldCache.get(t),t);this.oldCache=this.cache,this.cache=new Map}}get(t){if(this.cache.has(t))return this.cache.get(t);if(this.oldCache.has(t)){const e=this.oldCache.get(t);return this.oldCache.delete(t),this._set(t,e),e}}set(t,e){return this.cache.has(t)?this.cache.set(t,e):this._set(t,e),this}has(t){return this.cache.has(t)||this.oldCache.has(t)}delete(t){const e=this.cache.delete(t);return e&&this._size--,this.oldCache.delete(t)||e}clear(){this.cache.clear(),this.oldCache.clear(),this._size=0}getAllKeys(){const t=new Set;for(const e of this.cache.keys())t.add(e);for(const e of this.oldCache.keys())t.add(e);return t}}},1912:(t,e,s)=>{s.d(e,{w:()=>c});var h=s(9970);const i=5,a=50;async function c(t,e){for(let c=0;c<i;c++){c>0&&await new Promise((t=>setTimeout(t,a))),await new Promise((t=>(0,h.F)(t)));const i=document.getElementById(t);if(i)try{return void i.focus({preventScroll:!e})}catch(s){console.error(s)}}}}}]);
//# sourceMappingURL=8565.c8247a039bfe6f0b4468.8565.js.map