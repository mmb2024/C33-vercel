import{S as u,i as f,s as _,k as y,_ as g,e as p,$ as S,l as w,a0 as H,h as c,n as m,C as d,D as h,H as b}from"./index.98cbe372.js";import{p as j}from"./stores.7fb4d5da.js";function C(n){let i,e,o,s=`<script type="application/ld+json">
{
    "@context": "http://schema.org",
    "@type": "${n[2]}",
      "name": "${n[0]}",
      "description": "${n[1]}",
      "url": "${n[3]}",
    }
  <\/script>`,l;return document.title=i=n[0],{c(){e=y("meta"),o=new g(!1),l=p(),this.h()},l(t){const a=S("svelte-7wy0xn",document.head);e=w(a,"META",{name:!0,content:!0}),o=H(a,!1),l=p(),a.forEach(c),this.h()},h(){m(e,"name","description"),m(e,"content",n[1]),o.a=l},m(t,a){d(document.head,e),o.m(s,document.head),d(document.head,l)},p(t,[a]){a&1&&i!==(i=t[0])&&(document.title=i),a&2&&m(e,"content",t[1]),a&15&&s!==(s=`<script type="application/ld+json">
{
    "@context": "http://schema.org",
    "@type": "${t[2]}",
      "name": "${t[0]}",
      "description": "${t[1]}",
      "url": "${t[3]}",
    }
  <\/script>`)&&o.p(s)},i:h,o:h,d(t){c(e),c(l),t&&o.d()}}}function E(n,i,e){let o,s;b(n,j,r=>e(4,s=r));let{title:l}=i,{description:t}=i,{type:a}=i;return n.$$set=r=>{"title"in r&&e(0,l=r.title),"description"in r&&e(1,t=r.description),"type"in r&&e(2,a=r.type)},n.$$.update=()=>{n.$$.dirty&16&&e(3,o=s.url.href)},[l,t,a,o,s]}class q extends u{constructor(i){super(),f(this,i,E,C,_,{title:0,description:1,type:2})}}export{q as S};
