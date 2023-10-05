"use strict";(this.webpackChunk=this.webpackChunk||[]).push([[3660],{2658:(t,n,e)=>{e.r(n),e.d(n,{default:()=>g});var c=e(4178),o=e(2192),r=e(1728),a=e(8309),s=e(5524),i=e(9419),u=e(1932),h=e(2750);function l(t,n){var e={accountsFetcher:n.accountsFetcher,accountActions:n.accountActions},c=new a.Z({root:t.root,store:t.store,data:e});return{c(){c._fragment.c()},l(t){c._fragment.l(t)},m(t,n){c._mount(t,n)},p(t,n){var e={};t.accountsFetcher&&(e.accountsFetcher=n.accountsFetcher),t.accountActions&&(e.accountActions=n.accountActions),c._set(e)},d(t){c.destroy(t)}}}function p(t){var n,e,o,r,a,i;if((0,c.S1)(this,t),this.store=s.h,this._state=(0,c.f0)((0,c.f0)(this.store._init(["currentInstance","accessToken","isUserLoggedIn"]),{accountActions:[{icon:"#fa-unlock",label:"Unblock",onclick:t=>(0,h.h)(t,!1,!0)}]}),t.data),this.store._add(this,["currentInstance","accessToken","isUserLoggedIn"]),this._recompute({$currentInstance:1,$accessToken:1},this._state),this._intro=!0,this._handlers.destroy=[c.iT],this._fragment=(n=this,e=this._state,a=new u.Z({root:n.root,store:n.store,data:{title:"Blocked users",icon:"#fa-ban"}}),i=e.$isUserLoggedIn&&l(n,e),{c(){a._fragment.c(),o=(0,c.rw)("\n"),i&&i.c(),r=(0,c.Yr)()},l(t){a._fragment.l(t),o=(0,c.M4)(t,"\n"),i&&i.l(t),r=(0,c.Yr)()},m(t,n){a._mount(t,n),(0,c.$T)(t,o,n),i&&i.m(t,n),(0,c.$T)(t,r,n)},p(t,e){e.$isUserLoggedIn?i?i.p(t,e):((i=l(n,e)).c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null)},d(t){a.destroy(t),t&&(0,c.r2)(o),i&&i.d(t),t&&(0,c.r2)(r)}}),t.target){var p=(0,c.pI)(t.target);t.hydrate?this._fragment.l(p):this._fragment.c(),p.forEach(c.r2),this._mount(t.target,t.anchor),(0,c.yl)(this)}}(0,c.f0)(p.prototype,c.uS),p.prototype._recompute=function(t,n){(t.$currentInstance||t.$accessToken)&&this._differs(n.accountsFetcher,n.accountsFetcher=function({$currentInstance:t,$accessToken:n}){return()=>(0,i.J)(t,n)}(n))&&(t.accountsFetcher=!0)};const f=p;function m(t){var n,e,a,s,i,u;if((0,c.S1)(this,t),this._state=(0,c.f0)({pageComponent:f},t.data),this._intro=!0,this._fragment=(n=this,e=this._state,s=new o.Z({root:n.root,store:n.store,data:{name:"Blocked users"}}),i={pageComponent:e.pageComponent,params:e.params},u=new r.Z({root:n.root,store:n.store,data:i}),{c(){s._fragment.c(),a=(0,c.rw)("\n\n  "),u._fragment.c()},l(t){s._fragment.l(t),a=(0,c.M4)(t,"\n\n  "),u._fragment.l(t)},m(t,n){s._mount(t,n),(0,c.$T)(t,a,n),u._mount(t,n)},p(t,n){var e={};t.pageComponent&&(e.pageComponent=n.pageComponent),t.params&&(e.params=n.params),u._set(e)},d(t){s.destroy(t),t&&(0,c.r2)(a),u.destroy(t)}}),t.target){var h=(0,c.pI)(t.target);t.hydrate?this._fragment.l(h):this._fragment.c(),h.forEach(c.r2),this._mount(t.target,t.anchor),(0,c.yl)(this)}}(0,c.f0)(m.prototype,c.uS);const g=m},9216:(t,n,e)=>{e.d(n,{he:()=>l,hJ:()=>h,Mb:()=>p,r6:()=>f});var c=e(2625),o=e(4886),r=e(385);var a=e(1162),s=e(5524);async function i(t,n,e){const o=a.F.getAccount(n,t),r=(0,c.D)(n,e,t).then((t=>(a.F.setAccount(n,t),t)));try{s.h.set({currentAccountProfile:await o})}catch(i){console.error(i)}try{s.h.set({currentAccountProfile:await r})}catch(i){console.error(i)}}async function u(t,n,e){const c=a.F.getRelationship(n,t),i=async function(t,n,e){const c=`${(0,o.E)(t)}/api/v1/accounts/relationships?${(0,r.pe)({id:e})}`;return(await(0,r.U2)(c,(0,o.I)(n),{timeout:r.EH}))[0]}(n,e,t).then((t=>(a.F.setRelationship(n,t),t)));try{s.h.set({currentAccountRelationship:await c})}catch(u){console.error(u)}try{s.h.set({currentAccountRelationship:await i})}catch(u){console.error(u)}}async function h(t,n,e){await a.F.setRelationship(t,e);try{s.h.set({currentAccountRelationship:e})}catch(c){console.error(c)}}async function l(){s.h.set({currentAccountProfile:null,currentAccountRelationship:null})}async function p(t){const{currentInstance:n,accessToken:e}=s.h.get();await l(),await Promise.all([i(t,n,e),u(t,n,e)])}async function f(t){const{currentInstance:n,accessToken:e}=s.h.get();await l(),await u(t,n,e)}},2750:(t,n,e)=>{e.d(n,{h:()=>h});var c=e(5524),o=e(4886),r=e(385);var a=e(7031),s=e(9216),i=e(4358),u=e(6633);async function h(t,n,e){const{currentInstance:h,accessToken:l}=c.h.get();try{let c;c=n?await async function(t,n,e){const c=`${(0,o.E)(t)}/api/v1/accounts/${e}/block`;return(0,r.v_)(c,null,(0,o.I)(n),{timeout:r.$Q})}(h,l,t):await async function(t,n,e){const c=`${(0,o.E)(t)}/api/v1/accounts/${e}/unblock`;return(0,r.v_)(c,null,(0,o.I)(n),{timeout:r.$Q})}(h,l,t),await(0,s.hJ)(h,t,c),e&&(n?a.A.say("Blocked account"):a.A.say("Unblocked account")),(0,i.j)("refreshAccountsList")}catch(p){console.error(p),a.A.say(n?(0,u.A)(["Unable to block account: ",["error"]],{block:!!n,error:p.message||""}):(0,u.A)(["Unable to unblock account: ",["error"]],{error:p.message||""}))}}},9419:(t,n,e)=>{e.d(n,{J:()=>r,g:()=>a});var c=e(385),o=e(4886);async function r(t,n,e=80){let r=`${(0,o.E)(t)}/api/v1/blocks`;return r+="?"+(0,c.pe)({limit:e}),(0,c.U2)(r,(0,o.I)(n),{timeout:c.EH})}async function a(t,n,e=80){let r=`${(0,o.E)(t)}/api/v1/mutes`;return r+="?"+(0,c.pe)({limit:e}),(0,c.U2)(r,(0,o.I)(n),{timeout:c.EH})}},2625:(t,n,e)=>{e.d(n,{D:()=>a,Q:()=>r});var c=e(385),o=e(4886);function r(t,n){const e=`${(0,o.E)(t)}/api/v1/accounts/verify_credentials`;return(0,c.U2)(e,(0,o.I)(n),{timeout:c.EH})}function a(t,n,e){const r=`${(0,o.E)(t)}/api/v1/accounts/${e}`;return(0,c.U2)(r,(0,o.I)(n),{timeout:c.EH})}}}]);
//# sourceMappingURL=3660.ef2db2a1253384ee5fe4.blocked.js.map