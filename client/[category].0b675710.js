import{S as t,i as s,s as e,c as a,j as o,n as r,p as n,q as l,r as c,a as i,e as f,u as g,g as u,h,b as p,d as m,k as d,l as $,v as b,w as y,x as j}from"./client.9b7c1ebe.js";import{P as w}from"./PostHeader.1b6b2e9b.js";import{g as v}from"./utils.a90104cb.js";function x(t,s,e){const a=t.slice();return a[2]=s[e],a}function B(t){let s;const e=new w({props:{post:t[2]}});return{c(){a(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,a){r(e,t,a),s=!0},p(t,s){const a={};1&s&&(a.post=t[2]),e.$set(a)},i(t){s||(n(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){c(e,t)}}}function q(t){let s,e,a,o;document.title=s=v(`Blog - ${t[1]}`);let r=t[0],c=[];for(let s=0;s<r.length;s+=1)c[s]=B(x(t,r,s));const w=t=>l(c[t],1,1,()=>{c[t]=null});return{c(){e=i(),a=f("div");for(let t=0;t<c.length;t+=1)c[t].c();this.h()},l(t){g('[data-svelte="svelte-1wphraj"]',document.head).forEach(u),e=h(t),a=p(t,"DIV",{class:!0});var s=m(a);for(let t=0;t<c.length;t+=1)c[t].l(s);s.forEach(u),this.h()},h(){d(a,"class","w-full mt-8 pb-8")},m(t,s){$(t,e,s),$(t,a,s);for(let t=0;t<c.length;t+=1)c[t].m(a,null);o=!0},p(t,[e]){if((!o||2&e)&&s!==(s=v(`Blog - ${t[1]}`))&&(document.title=s),1&e){let s;for(r=t[0],s=0;s<r.length;s+=1){const o=x(t,r,s);c[s]?(c[s].p(o,e),n(c[s],1)):(c[s]=B(o),c[s].c(),n(c[s],1),c[s].m(a,null))}for(j(),s=r.length;s<c.length;s+=1)w(s);b()}},i(t){if(!o){for(let t=0;t<r.length;t+=1)n(c[t]);o=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)l(c[t]);o=!1},d(t){t&&u(e),t&&u(a),y(c,t)}}}async function E({params:t,query:s}){const e=await this.fetch(`blog/categories/${t.category}.json`),a=await e.json();if(200===e.status)return{posts:a,category:t.category};this.error(e.status,data.message)}function P(t,s,e){let{posts:a}=s,{category:o}=s;return t.$set=t=>{"posts"in t&&e(0,a=t.posts),"category"in t&&e(1,o=t.category)},[a,o]}export default class extends t{constructor(t){super(),s(this,t,P,q,e,{posts:0,category:1})}}export{E as preload};