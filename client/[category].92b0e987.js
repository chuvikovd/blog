import{S as t,i as s,s as e,q as o,r as a,u as r,v as n,w as l,x as c,j as f,e as i,k as g,c as u,a as p,d as m,f as h,g as d,I as $,K as y,H as j}from"./index.adcd38c1.js";import"./store.6eeff462.js";import{P as w}from"./PostHeader.b8f04697.js";import{g as x}from"./utils.c96bd709.js";function b(t,s,e){const o=t.slice();return o[2]=s[e],o}function v(t){let s;const e=new w({props:{post:t[2]}});return{c(){o(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,o){r(e,t,o),s=!0},p(t,s){const o={};1&s&&(o.post=t[2]),e.$set(o)},i(t){s||(n(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){c(e,t)}}}function B(t){let s,e,o,a;document.title=s=x(`Blog - ${t[1]}`);let r=t[0],c=[];for(let s=0;s<r.length;s+=1)c[s]=v(b(t,r,s));const w=t=>l(c[t],1,1,()=>{c[t]=null});return{c(){e=f(),o=i("div");for(let t=0;t<c.length;t+=1)c[t].c();this.h()},l(t){e=g(t),o=u(t,"DIV",{class:!0});var s=p(o);for(let t=0;t<c.length;t+=1)c[t].l(s);s.forEach(m),this.h()},h(){h(o,"class","w-full mt-8 pb-8")},m(t,s){d(t,e,s),d(t,o,s);for(let t=0;t<c.length;t+=1)c[t].m(o,null);a=!0},p(t,[e]){if((!a||2&e)&&s!==(s=x(`Blog - ${t[1]}`))&&(document.title=s),1&e){let s;for(r=t[0],s=0;s<r.length;s+=1){const a=b(t,r,s);c[s]?(c[s].p(a,e),n(c[s],1)):(c[s]=v(a),c[s].c(),n(c[s],1),c[s].m(o,null))}for(j(),s=r.length;s<c.length;s+=1)w(s);$()}},i(t){if(!a){for(let t=0;t<r.length;t+=1)n(c[t]);a=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)l(c[t]);a=!1},d(t){t&&m(e),t&&m(o),y(c,t)}}}async function q({params:t,query:s}){const e=await this.fetch(`blog/categories/${t.category}.json`),o=await e.json();if(200===e.status)return{posts:o,category:t.category};this.error(e.status,data.message)}function H(t,s,e){let{posts:o}=s,{category:a}=s;return t.$set=t=>{"posts"in t&&e(0,o=t.posts),"category"in t&&e(1,a=t.category)},[o,a]}export default class extends t{constructor(t){super(),s(this,t,H,B,e,{posts:0,category:1})}}export{q as preload};
