function T(){}function ct(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function F(){return Object.create(null)}function $(t){t.forEach(Q)}function B(t){return typeof t=="function"}function Nt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ot(t){return Object.keys(t).length===0}function lt(t,...e){if(t==null)return T;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function At(t,e,n){t.$$.on_destroy.push(lt(e,n))}function kt(t,e,n,i){if(t){const s=U(t,e,n,i);return t[0](s)}}function U(t,e,n,i){return t[1]&&i?ct(n.ctx.slice(),t[1](i(e))):n.ctx}function Mt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function St(t,e,n,i,s,o){if(s){const r=U(e,n,i,o);t.p(r,s)}}function Lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ht(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function jt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Ct(t){return t&&B(t.destroy)?t.destroy:T}let S=!1;function ft(){S=!0}function ut(){S=!1}function at(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function _t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let f=0;f<e.length;f++){const a=e[f];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const f=e[c].claim_order,a=(s>0&&e[n[s]].claim_order<=f?s+1:at(1,s,_=>e[n[_]].claim_order,f))-1;i[c]=n[a]+1;const d=a+1;n[d]=c,s=Math.max(d,s)}const o=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((c,f)=>c.claim_order-f.claim_order);for(let c=0,f=0;c<r.length;c++){for(;f<o.length&&r[c].claim_order>=o[f].claim_order;)f++;const a=f<o.length?o[f]:null;t.insertBefore(r[c],a)}}function dt(t,e){if(S){for(_t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ht(t,e,n){t.insertBefore(e,n||null)}function mt(t,e,n){S&&!n?dt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function M(t){t.parentNode&&t.parentNode.removeChild(t)}function Ot(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Pt(){return G(" ")}function Dt(){return G("")}function Bt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function pt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const yt=["width","height"];function Gt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&yt.indexOf(i)===-1?t[i]=e[i]:pt(t,i,e[i])}function gt(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,i,s=!1){Y(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function tt(t,e,n,i){return Z(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Rt(t,e,n){return tt(t,e,n,V)}function qt(t,e,n){return tt(t,e,n,X)}function xt(t,e){return Z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function zt(t){return xt(t," ")}function W(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Ft(t,e){const n=W(t,"HTML_TAG_START",0),i=W(t,"HTML_TAG_END",n);if(n===i)return new I(void 0,e);Y(t);const s=t.splice(n,i-n+1);M(s[0]),M(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new I(o,e)}function Wt(t,e){e=""+e,t.data!==e&&(t.data=e)}function It(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Jt(t,e,n){t.classList[n?"add":"remove"](e)}function Kt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class wt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=X(n.nodeName):this.e=V(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)ht(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(M)}}class I extends wt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)mt(this.t,this.n[n],e)}}function Qt(t,e){return new t(e)}let v;function E(t){v=t}function et(){if(!v)throw new Error("Function called outside component initialization");return v}function Ut(t){et().$$.on_mount.push(t)}function Vt(t){et().$$.after_update.push(t)}const w=[],J=[];let b=[];const K=[],nt=Promise.resolve();let P=!1;function it(){P||(P=!0,nt.then(st))}function Xt(){return it(),nt}function D(t){b.push(t)}const O=new Set;let x=0;function st(){if(x!==0)return;const t=v;do{try{for(;x<w.length;){const e=w[x];x++,E(e),bt(e.$$)}}catch(e){throw w.length=0,x=0,e}for(E(null),w.length=0,x=0;J.length;)J.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];O.has(n)||(O.add(n),n())}b.length=0}while(w.length);for(;K.length;)K.pop()();P=!1,O.clear(),E(t)}function bt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}function $t(t){const e=[],n=[];b.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),b=e}const k=new Set;let g;function Yt(){g={r:0,c:[],p:g}}function Zt(){g.r||$(g.c),g=g.p}function rt(t,e){t&&t.i&&(k.delete(t),t.i(e))}function te(t,e,n,i){if(t&&t.o){if(k.has(t))return;k.add(t),g.c.push(()=>{k.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function ee(t,e){t.d(1),e.delete(t.key)}function ne(t,e,n,i,s,o,r,l,c,f,a,d){let _=t.length,m=o.length,h=_;const L={};for(;h--;)L[t[h].key]=h;const N=[],H=new Map,j=new Map,R=[];for(h=m;h--;){const u=d(s,o,h),p=n(u);let y=r.get(p);y?i&&R.push(()=>y.p(u,e)):(y=f(p,u),y.c()),H.set(p,N[h]=y),p in L&&j.set(p,Math.abs(h-L[p]))}const q=new Set,z=new Set;function C(u){rt(u,1),u.m(l,a),r.set(u.key,u),a=u.first,m--}for(;_&&m;){const u=N[m-1],p=t[_-1],y=u.key,A=p.key;u===p?(a=u.first,_--,m--):H.has(A)?!r.has(y)||q.has(y)?C(u):z.has(A)?_--:j.get(y)>j.get(A)?(z.add(y),C(u)):(q.add(A),_--):(c(p,r),_--)}for(;_--;){const u=t[_];H.has(u.key)||c(u,r)}for(;m;)C(N[m-1]);return $(R),N}function ie(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],l=e[o];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[o]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function se(t){t&&t.c()}function re(t,e){t&&t.l(e)}function Et(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||D(()=>{const r=t.$$.on_mount.map(Q).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...r):$(r),t.$$.on_mount=[]}),o.forEach(D)}function Tt(t,e){const n=t.$$;n.fragment!==null&&($t(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){t.$$.dirty[0]===-1&&(w.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ce(t,e,n,i,s,o,r,l=[-1]){const c=v;E(t);const f=t.$$={fragment:null,ctx:[],props:o,update:T,not_equal:s,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:F(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(f.root);let a=!1;if(f.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return f.ctx&&s(f.ctx[d],f.ctx[d]=h)&&(!f.skip_bound&&f.bound[d]&&f.bound[d](h),a&&vt(t,d)),_}):[],f.update(),a=!0,$(f.before_update),f.fragment=i?i(f.ctx):!1,e.target){if(e.hydrate){ft();const d=gt(e.target);f.fragment&&f.fragment.l(d),d.forEach(M)}else f.fragment&&f.fragment.c();e.intro&&rt(t.$$.fragment),Et(t,e.target,e.anchor,e.customElement),ut(),st()}E(c)}class oe{$destroy(){Tt(this,1),this.$destroy=T}$on(e,n){if(!B(n))return T;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Et as A,Tt as B,dt as C,T as D,X as E,qt as F,Ot as G,At as H,Jt as I,Bt as J,kt as K,St as L,Lt as M,Mt as N,ne as O,ee as P,ct as Q,Gt as R,oe as S,ie as T,jt as U,Ht as V,Ct as W,I as X,Kt as Y,Ft as Z,Pt as a,mt as b,zt as c,te as d,Dt as e,Zt as f,rt as g,M as h,ce as i,Vt as j,V as k,Rt as l,gt as m,pt as n,Ut as o,It as p,G as q,xt as r,Nt as s,Xt as t,Wt as u,Yt as v,J as w,Qt as x,se as y,re as z};
