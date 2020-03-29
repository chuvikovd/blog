import{S as t,i as s,s as e,e as r,t as l,a,b as o,c as n,d as c,f,g as i,h,j as p,k as m,l as u,m as d,n as g,o as v,p as $,q as x,r as b,u as j,v as w,w as y,x as E,y as I}from"./client.52df29f7.js";import{B as P,P as D}from"./PostHeader.bcb09fb3.js";function H(t){let s;return{c(){s=l("Learn more")},l(t){s=i(t,"Learn more")},m(t,e){d(t,s,e)},d(t){t&&h(s)}}}function B(t){let s,e,w,y,E,I,D,B,L,R,V,k,A,M=t[0].title+"",S=t[0].description+"";const T=new P({props:{href:t[0].url,external:!0,$$slots:{default:[H]},$$scope:{ctx:t}}});return{c(){s=r("article"),e=r("a"),w=r("h2"),y=l(M),E=a(),I=o("svg"),D=o("path"),L=a(),R=r("p"),V=l(S),k=a(),n(T.$$.fragment),this.h()},l(t){s=c(t,"ARTICLE",{class:!0});var r=f(s);e=c(r,"A",{href:!0,class:!0,target:!0});var l=f(e);w=c(l,"H2",{class:!0});var a=f(w);y=i(a,M),a.forEach(h),E=p(l),I=c(l,"svg",{width:!0,height:!0,viewBox:!0},1);var o=f(I);D=c(o,"path",{class:!0,d:!0},1),f(D).forEach(h),o.forEach(h),l.forEach(h),L=p(r),R=c(r,"P",{class:!0});var n=f(R);V=i(n,S),n.forEach(h),k=p(r),m(T.$$.fragment,r),r.forEach(h),this.h()},h(){u(w,"class","font-display text-3xl md:text-4xl font-bold text-red leading-tight\n      mb-1 mr-4"),u(D,"class","fill-pink"),u(D,"d","M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977\n        7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"),u(I,"width","24"),u(I,"height","24"),u(I,"viewBox","0 0 24 24"),u(e,"href",B=t[0].url),u(e,"class","flex items-center"),u(e,"target","_blank"),u(R,"class","mb-4"),u(s,"class","w-full mt-8 first:mt-0")},m(t,r){d(t,s,r),g(s,e),g(e,w),g(w,y),g(e,E),g(e,I),g(I,D),g(s,L),g(s,R),g(R,V),g(s,k),v(T,s,null),A=!0},p(t,[s]){(!A||1&s)&&M!==(M=t[0].title+"")&&$(y,M),(!A||1&s&&B!==(B=t[0].url))&&u(e,"href",B),(!A||1&s)&&S!==(S=t[0].description+"")&&$(V,S);const r={};1&s&&(r.href=t[0].url),2&s&&(r.$$scope={dirty:s,ctx:t}),T.$set(r)},i(t){A||(x(T.$$.fragment,t),A=!0)},o(t){b(T.$$.fragment,t),A=!1},d(t){t&&h(s),j(T)}}}function L(t,s,e){let{project:r}=s;return t.$set=t=>{"project"in t&&e(0,r=t.project)},[r]}class R extends t{constructor(t){super(),s(this,t,L,B,e,{project:0})}}function V(t,s,e){const r=t.slice();return r[2]=s[e],r}function k(t,s,e){const r=t.slice();return r[5]=s[e],r}function A(t){let s;const e=new D({props:{post:t[5]}});return{c(){n(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,r){v(e,t,r),s=!0},p(t,s){const r={};1&s&&(r.post=t[5]),e.$set(r)},i(t){s||(x(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){j(e,t)}}}function M(t){let s;const e=new R({props:{project:t[2]}});return{c(){n(e.$$.fragment)},l(t){m(e.$$.fragment,t)},m(t,r){v(e,t,r),s=!0},p(t,s){const r={};2&s&&(r.project=t[2]),e.$set(r)},i(t){s||(x(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){j(e,t)}}}function S(t){let s,e,o,n,m,v,$,j,P,D,H,B,L,R,S,T,q,z,G,N,O,C,_,F=t[0],J=[];for(let s=0;s<F.length;s+=1)J[s]=A(k(t,F,s));const K=t=>b(J[t],1,1,()=>{J[t]=null});let Q=t[1],U=[];for(let s=0;s<Q.length;s+=1)U[s]=M(V(t,Q,s));const W=t=>b(U[t],1,1,()=>{U[t]=null});return{c(){s=a(),e=r("div"),o=r("h1"),n=l("Hi."),m=a(),v=r("p"),$=l("My name is Dmitrijs and this is my blog. Here I write about my journeys in\n    web development."),j=a(),P=r("div"),D=r("strong"),H=l("Latest Posts"),B=a(),L=r("a"),R=l("Read all posts"),S=a(),T=r("div");for(let t=0;t<J.length;t+=1)J[t].c();q=a(),z=r("div"),G=r("strong"),N=l("Projects"),O=a(),C=r("div");for(let t=0;t<U.length;t+=1)U[t].c();this.h()},l(t){w('[data-svelte="svelte-1cvhrxr"]',document.head).forEach(h),s=p(t),e=c(t,"DIV",{class:!0});var r=f(e);o=c(r,"H1",{class:!0});var l=f(o);n=i(l,"Hi."),l.forEach(h),m=p(r),v=c(r,"P",{class:!0});var a=f(v);$=i(a,"My name is Dmitrijs and this is my blog. Here I write about my journeys in\n    web development."),a.forEach(h),r.forEach(h),j=p(t),P=c(t,"DIV",{class:!0});var u=f(P);D=c(u,"STRONG",{class:!0});var d=f(D);H=i(d,"Latest Posts"),d.forEach(h),B=p(u),L=c(u,"A",{class:!0,href:!0});var g=f(L);R=i(g,"Read all posts"),g.forEach(h),u.forEach(h),S=p(t),T=c(t,"DIV",{class:!0});var x=f(T);for(let t=0;t<J.length;t+=1)J[t].l(x);x.forEach(h),q=p(t),z=c(t,"DIV",{class:!0});var b=f(z);G=c(b,"STRONG",{class:!0});var y=f(G);N=i(y,"Projects"),y.forEach(h),b.forEach(h),O=p(t),C=c(t,"DIV",{class:!0});var E=f(C);for(let t=0;t<U.length;t+=1)U[t].l(E);E.forEach(h),this.h()},h(){document.title="chuva.dev",u(o,"class","font-display font-bold text-6xl text-red"),u(v,"class","text-xl"),u(e,"class","py-10 sm:py-24"),u(D,"class","font-display text-3xl"),u(L,"class","font-display text-sm text-black hover:text-red"),u(L,"href","/blog"),u(P,"class","border-b flex justify-between items-center flex-wrap pb-2 w-full"),u(T,"class","w-full mt-8 pb-8 mb-10"),u(G,"class","font-display text-3xl"),u(z,"class","border-b flex justify-between items-center pb-2 w-full"),u(C,"class","w-full mt-8 pb-8")},m(t,r){d(t,s,r),d(t,e,r),g(e,o),g(o,n),g(e,m),g(e,v),g(v,$),d(t,j,r),d(t,P,r),g(P,D),g(D,H),g(P,B),g(P,L),g(L,R),d(t,S,r),d(t,T,r);for(let t=0;t<J.length;t+=1)J[t].m(T,null);d(t,q,r),d(t,z,r),g(z,G),g(G,N),d(t,O,r),d(t,C,r);for(let t=0;t<U.length;t+=1)U[t].m(C,null);_=!0},p(t,[s]){if(1&s){let e;for(F=t[0],e=0;e<F.length;e+=1){const r=k(t,F,e);J[e]?(J[e].p(r,s),x(J[e],1)):(J[e]=A(r),J[e].c(),x(J[e],1),J[e].m(T,null))}for(I(),e=F.length;e<J.length;e+=1)K(e);y()}if(2&s){let e;for(Q=t[1],e=0;e<Q.length;e+=1){const r=V(t,Q,e);U[e]?(U[e].p(r,s),x(U[e],1)):(U[e]=M(r),U[e].c(),x(U[e],1),U[e].m(C,null))}for(I(),e=Q.length;e<U.length;e+=1)W(e);y()}},i(t){if(!_){for(let t=0;t<F.length;t+=1)x(J[t]);for(let t=0;t<Q.length;t+=1)x(U[t]);_=!0}},o(t){J=J.filter(Boolean);for(let t=0;t<J.length;t+=1)b(J[t]);U=U.filter(Boolean);for(let t=0;t<U.length;t+=1)b(U[t]);_=!1},d(t){t&&h(s),t&&h(e),t&&h(j),t&&h(P),t&&h(S),t&&h(T),E(J,t),t&&h(q),t&&h(z),t&&h(O),t&&h(C),E(U,t)}}}async function T({params:t,query:s}){return{posts:await(await this.fetch("blog/latest.json")).json(),projects:await(await this.fetch("projects.json")).json()}}function q(t,s,e){let{posts:r}=s,{projects:l}=s;return t.$set=t=>{"posts"in t&&e(0,r=t.posts),"projects"in t&&e(1,l=t.projects)},[r,l]}export default class extends t{constructor(t){super(),s(this,t,q,S,e,{posts:0,projects:1})}}export{T as preload};
