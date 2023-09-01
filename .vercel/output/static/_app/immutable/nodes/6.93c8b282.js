import{S as te,i as se,s as ae,k as m,q as E,a as C,l as _,m as v,r as P,h as f,c as N,n as w,b as X,C as r,J as re,u as B,P as ne,D as Y,Q as le,y as ie,z as ce,A as oe,g as ue,d as de,B as fe}from"../chunks/index.44e5ef1f.js";function he(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var J=1e3,L=J*60,z=L*60,H=z*24,me=H*7,_e=H*365.25,ve=function(t,e){e=e||{};var s=typeof t;if(s==="string"&&t.length>0)return ge(t);if(s==="number"&&isFinite(t))return e.long?ye(t):pe(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};function ge(t){if(t=String(t),!(t.length>100)){var e=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(e){var s=parseFloat(e[1]),n=(e[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return s*_e;case"weeks":case"week":case"w":return s*me;case"days":case"day":case"d":return s*H;case"hours":case"hour":case"hrs":case"hr":case"h":return s*z;case"minutes":case"minute":case"mins":case"min":case"m":return s*L;case"seconds":case"second":case"secs":case"sec":case"s":return s*J;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}}}function pe(t){var e=Math.abs(t);return e>=H?Math.round(t/H)+"d":e>=z?Math.round(t/z)+"h":e>=L?Math.round(t/L)+"m":e>=J?Math.round(t/J)+"s":t+"ms"}function ye(t){var e=Math.abs(t);return e>=H?K(t,e,H,"day"):e>=z?K(t,e,z,"hour"):e>=L?K(t,e,L,"minute"):e>=J?K(t,e,J,"second"):t+" ms"}function K(t,e,s,n){var i=e>=s*1.5;return Math.round(t/s)+" "+n+(i?"s":"")}const be=he(ve);function Z(t,e,s){const n=t.slice();return n[3]=e[s],n}function ee(t,e){let s,n,i=e[3].message+"",h,u,c,p,l,d=e[3].name+"",y,x,k,I=e[3].lastname+"",O,M,V,$=e[3].email+"",D,g,S,j=e[2](e[3].createdAt)+"",U,R;return{key:t,first:null,c(){s=m("div"),n=m("p"),h=E(i),u=C(),c=m("div"),p=m("div"),l=m("p"),y=E(d),x=C(),k=m("span"),O=E(I),M=C(),V=m("p"),D=E($),g=C(),S=m("p"),U=E(j),R=C(),this.h()},l(A){s=_(A,"DIV",{class:!0});var a=v(s);n=_(a,"P",{class:!0});var o=v(n);h=P(o,i),o.forEach(f),u=N(a),c=_(a,"DIV",{class:!0});var b=v(c);p=_(b,"DIV",{class:!0});var F=v(p);l=_(F,"P",{class:!0});var q=v(l);y=P(q,d),x=N(q),k=_(q,"SPAN",{});var T=v(k);O=P(T,I),T.forEach(f),q.forEach(f),M=N(F),V=_(F,"P",{class:!0});var Q=v(V);D=P(Q,$),Q.forEach(f),F.forEach(f),b.forEach(f),g=N(a),S=_(a,"P",{class:!0});var G=v(S);U=P(G,j),G.forEach(f),R=N(a),a.forEach(f),this.h()},h(){w(n,"class","text-sm text-gray-500"),w(l,"class","font-medium leading-none"),w(V,"class","text-sm text-gray-500"),w(p,"class","space-y-1"),w(c,"class","flex items-center space-x-4"),w(S,"class","text-sm text-gray-500"),w(s,"class","flex items-center justify-between py-3"),this.first=s},m(A,a){X(A,s,a),r(s,n),r(n,h),r(s,u),r(s,c),r(c,p),r(p,l),r(l,y),r(l,x),r(l,k),r(k,O),r(p,M),r(p,V),r(V,D),r(s,g),r(s,S),r(S,U),r(s,R)},p(A,a){e=A,a&1&&i!==(i=e[3].message+"")&&B(h,i),a&1&&d!==(d=e[3].name+"")&&B(y,d),a&1&&I!==(I=e[3].lastname+"")&&B(O,I),a&1&&$!==($=e[3].email+"")&&B(D,$),a&1&&j!==(j=e[2](e[3].createdAt)+"")&&B(U,j)},d(A){A&&f(s)}}}function we(t){let e,s,n,i,h,u,c,p,l=t[0].length+"",d,y,x=(t[1]?t[1]:"unknown")+"",k,I,O,M,V,$,D,g=[],S=new Map,j,U,R=t[0];const A=a=>a[3].id;for(let a=0;a<R.length;a+=1){let o=Z(t,R,a),b=A(o);S.set(b,g[a]=ee(b,o))}return{c(){e=m("div"),s=m("div"),n=m("div"),i=m("h2"),h=E("Recent Users"),u=C(),c=m("p"),p=E("Fetched "),d=E(l),y=E(" users in "),k=E(x),I=E(" ms"),O=C(),M=m("button"),V=E("Refresh Page"),$=C(),D=m("div");for(let a=0;a<g.length;a+=1)g[a].c();this.h()},l(a){e=_(a,"DIV",{class:!0});var o=v(e);s=_(o,"DIV",{class:!0});var b=v(s);n=_(b,"DIV",{class:!0});var F=v(n);i=_(F,"H2",{class:!0});var q=v(i);h=P(q,"Recent Users"),q.forEach(f),u=N(F),c=_(F,"P",{class:!0});var T=v(c);p=P(T,"Fetched "),d=P(T,l),y=P(T," users in "),k=P(T,x),I=P(T," ms"),T.forEach(f),F.forEach(f),O=N(b),M=_(b,"BUTTON",{});var Q=v(M);V=P(Q,"Refresh Page"),Q.forEach(f),b.forEach(f),$=N(o),D=_(o,"DIV",{class:!0});var G=v(D);for(let W=0;W<g.length;W+=1)g[W].l(G);G.forEach(f),o.forEach(f),this.h()},h(){w(i,"class","text-xl font-semibold"),w(c,"class","text-sm text-gray-500"),w(n,"class","space-y-1"),w(s,"class","flex items-center justify-between mb-4"),w(D,"class","divide-y divide-gray-900/5"),w(e,"class","w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg")},m(a,o){X(a,e,o),r(e,s),r(s,n),r(n,i),r(i,h),r(n,u),r(n,c),r(c,p),r(c,d),r(c,y),r(c,k),r(c,I),r(s,O),r(s,M),r(M,V),r(e,$),r(e,D);for(let b=0;b<g.length;b+=1)g[b]&&g[b].m(D,null);j||(U=re(M,"click",ke),j=!0)},p(a,[o]){o&1&&l!==(l=a[0].length+"")&&B(d,l),o&2&&x!==(x=(a[1]?a[1]:"unknown")+"")&&B(k,x),o&5&&(R=a[0],g=ne(g,o,A,1,a,R,S,D,le,ee,null,Z))},i:Y,o:Y,d(a){a&&f(e);for(let o=0;o<g.length;o+=1)g[o].d();j=!1,U()}}}function ke(){location.reload()}function Ee(t,e,s){let{users:n}=e,{duration:i}=e;function h(u,c){return u?`${be(Date.now()-new Date(u).getTime())}${c?"":" ago"}`:"never"}return t.$$set=u=>{"users"in u&&s(0,n=u.users),"duration"in u&&s(1,i=u.duration)},[n,i,h]}class Pe extends te{constructor(e){super(),se(this,e,Ee,we,ae,{users:0,duration:1})}}function xe(t){var c,p;let e,s,n,i,h,u;return h=new Pe({props:{users:(c=t[0])==null?void 0:c.users,duration:(p=t[0])==null?void 0:p.duration}}),{c(){e=m("main"),s=m("h1"),n=E("Postgres on Vercel"),i=C(),ie(h.$$.fragment),this.h()},l(l){e=_(l,"MAIN",{class:!0});var d=v(e);s=_(d,"H1",{class:!0});var y=v(s);n=P(y,"Postgres on Vercel"),y.forEach(f),i=N(d),ce(h.$$.fragment,d),d.forEach(f),this.h()},h(){w(s,"class","pt-4 pb-8 bg-gradient-to-br dark:from-white from-black via-[#707070] to-[#ffffff] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"),w(e,"class","relative flex flex-col items-center justify-center min-h-screen py-10")},m(l,d){X(l,e,d),r(e,s),r(s,n),r(e,i),oe(h,e,null),u=!0},p(l,[d]){var x,k;const y={};d&1&&(y.users=(x=l[0])==null?void 0:x.users),d&1&&(y.duration=(k=l[0])==null?void 0:k.duration),h.$set(y)},i(l){u||(ue(h.$$.fragment,l),u=!0)},o(l){de(h.$$.fragment,l),u=!1},d(l){l&&f(e),fe(h)}}}function De(t,e,s){let{data:n}=e;return t.$$set=i=>{"data"in i&&s(0,n=i.data)},[n]}class Ve extends te{constructor(e){super(),se(this,e,De,xe,ae,{data:0})}}export{Ve as component};
