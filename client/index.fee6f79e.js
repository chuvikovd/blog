import{S as t,i as s,s as e,c as o,k as n,o as l,q as a,r,u as f,a as c,e as i,v as u,h,j as p,d as m,f as g,l as d,m as $,w as b,x as j,y as v}from"./client.52df29f7.js";import{P as x}from"./PostHeader.bcb09fb3.js";import{g as w}from"./utils.a90104cb.js";function B(t,s,e){const o=t.slice();return o[1]=s[e],o}function q(t){let s;const e=new x({props:{post:t[1]}});return{c(){o(e.$$.fragment)},l(t){n(e.$$.fragment,t)},m(t,o){l(e,t,o),s=!0},p(t,s){const o={};1&s&&(o.post=t[1]),e.$set(o)},i(t){s||(a(e.$$.fragment,t),s=!0)},o(t){r(e.$$.fragment,t),s=!1},d(t){f(e,t)}}}function y(t){let s,e,o,n;document.title=s=w("Blog");let l=t[0],f=[];for(let s=0;s<l.length;s+=1)f[s]=q(B(t,l,s));const x=t=>r(f[t],1,1,()=>{f[t]=null});return{c(){e=c(),o=i("div");for(let t=0;t<f.length;t+=1)f[t].c();this.h()},l(t){u('[data-svelte="svelte-ug3dp6"]',document.head).forEach(h),e=p(t),o=m(t,"DIV",{class:!0});var s=g(o);for(let t=0;t<f.length;t+=1)f[t].l(s);s.forEach(h),this.h()},h(){d(o,"class","w-full mt-8 pb-8")},m(t,s){$(t,e,s),$(t,o,s);for(let t=0;t<f.length;t+=1)f[t].m(o,null);n=!0},p(t,[e]){if((!n||0&e)&&s!==(s=w("Blog"))&&(document.title=s),1&e){let s;for(l=t[0],s=0;s<l.length;s+=1){const n=B(t,l,s);f[s]?(f[s].p(n,e),a(f[s],1)):(f[s]=q(n),f[s].c(),a(f[s],1),f[s].m(o,null))}for(v(),s=l.length;s<f.length;s+=1)x(s);b()}},i(t){if(!n){for(let t=0;t<l.length;t+=1)a(f[t]);n=!0}},o(t){f=f.filter(Boolean);for(let t=0;t<f.length;t+=1)r(f[t]);n=!1},d(t){t&&h(e),t&&h(o),j(f,t)}}}function E({params:t,query:s}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function P(t,s,e){let{posts:o}=s;return t.$set=t=>{"posts"in t&&e(0,o=t.posts)},[o]}export default class extends t{constructor(t){super(),s(this,t,P,y,e,{posts:0})}}export{E as preload};
