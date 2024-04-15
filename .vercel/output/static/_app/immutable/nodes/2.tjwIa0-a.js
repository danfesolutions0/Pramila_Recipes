import{s as F,f as A,n as G}from"../chunks/scheduler.DJCNoK7G.js";import{S as J,i as K,g as E,s as j,m as Q,h as b,j as w,c as x,n as R,f as d,k as u,a as S,z as m,o as U,E as W,x as X,d as q,b as Y,t as T,F as L,r as Z,u as $,v as ee,w as te,p as le}from"../chunks/index.BR8bQEpW.js";import{e as V}from"../chunks/each.D6YF6ztN.js";import{s as ae,p as H}from"../chunks/config.Cadhnj0M.js";function se(o){let t,a,e,c,n,i,I,y;return{c(){t=E("div"),a=E("a"),e=E("img"),n=j(),i=E("h2"),I=Q(o[1]),this.h()},l(f){t=b(f,"DIV",{class:!0});var g=w(t);a=b(g,"A",{href:!0});var p=w(a);e=b(p,"IMG",{class:!0,src:!0,alt:!0}),n=x(p),i=b(p,"H2",{class:!0});var h=w(i);I=R(h,o[1]),h.forEach(d),p.forEach(d),g.forEach(d),this.h()},h(){u(e,"class","object-cover w-32 h-32 rounded-full ring-4 ring-gray-300 ease-in duration-100 hover:scale-105 text-center"),A(e.src,c=o[0])||u(e,"src",c),u(e,"alt",o[1]),u(i,"class","mt-4 text-center text-lg font-semibold text-gray-700 capitalize"),u(a,"href",y="/recipes/"+o[2]),u(t,"class","flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer rounded-xl")},m(f,g){S(f,t,g),m(t,a),m(a,e),m(a,n),m(a,i),m(i,I)},p(f,[g]){g&1&&!A(e.src,c=f[0])&&u(e,"src",c),g&2&&u(e,"alt",f[1]),g&2&&U(I,f[1]),g&4&&y!==(y="/recipes/"+f[2])&&u(a,"href",y)},i:G,o:G,d(f){f&&d(t)}}}function re(o,t,a){let{src:e,itemName:c,category_slug:n}=t;return o.$$set=i=>{"src"in i&&a(0,e=i.src),"itemName"in i&&a(1,c=i.itemName),"category_slug"in i&&a(2,n=i.category_slug)},[e,c,n]}class oe extends J{constructor(t){super(),K(this,t,re,se,F,{src:0,itemName:1,category_slug:2})}}function M(o,t,a){const e=o.slice();return e[1]=t[a],e}function O(o,t,a){const e=o.slice();return e[4]=t[a],e}function P(o){let t,a,e,c,n,i,I,y,f,g=o[4].title+"",p,h,C;return{c(){t=E("a"),a=E("img"),n=j(),i=E("div"),I=E("span"),y=j(),f=E("h2"),p=Q(g),h=j(),this.h()},l(r){t=b(r,"A",{href:!0,class:!0});var v=w(t);a=b(v,"IMG",{class:!0,src:!0,alt:!0}),n=x(v),i=b(v,"DIV",{class:!0});var l=w(i);I=b(l,"SPAN",{class:!0}),w(I).forEach(d),y=x(l),f=b(l,"H2",{class:!0});var _=w(f);p=R(_,g),_.forEach(d),l.forEach(d),h=x(v),v.forEach(d),this.h()},h(){u(a,"class","bg-neutral-200 object-cover object-center w-full h-64 rounded-lg lg:h-80 ease-in duration-100 hover:scale-105"),A(a.src,e=H+"/api/files/"+o[4].collectionId+"/"+o[4].id+"/"+o[4].featured_image)||u(a,"src",e),u(a,"alt",c=o[4].title),u(I,"class","uppercase text-sm font-semibold text-gray-700"),u(f,"class","text-xl text-yellow-500 hover:underline"),u(i,"class","py-2 hover:none"),u(t,"href",C="/"+o[4].title.toLowerCase().replace(/\s+/g,"-")+"-"+o[4].id),u(t,"class","")},m(r,v){S(r,t,v),m(t,a),m(t,n),m(t,i),m(i,I),m(i,y),m(i,f),m(f,p),m(t,h)},p(r,v){v&1&&!A(a.src,e=H+"/api/files/"+r[4].collectionId+"/"+r[4].id+"/"+r[4].featured_image)&&u(a,"src",e),v&1&&c!==(c=r[4].title)&&u(a,"alt",c),v&1&&g!==(g=r[4].title+"")&&U(p,g),v&1&&C!==(C="/"+r[4].title.toLowerCase().replace(/\s+/g,"-")+"-"+r[4].id)&&u(t,"href",C)},d(r){r&&d(t)}}}function B(o){let t,a;return t=new oe({props:{category_slug:o[1].slug,itemName:o[1].category,src:H+"/api/files/"+o[1].collectionId+"/"+o[1].id+"/"+o[1].featured_image}}),{c(){Z(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,c){ee(t,e,c),a=!0},p(e,c){const n={};c&1&&(n.category_slug=e[1].slug),c&1&&(n.itemName=e[1].category),c&1&&(n.src=H+"/api/files/"+e[1].collectionId+"/"+e[1].id+"/"+e[1].featured_image),t.$set(n)},i(e){a||(q(t.$$.fragment,e),a=!0)},o(e){T(t.$$.fragment,e),a=!1},d(e){te(t,e)}}}function ie(o){let t,a,e,c,n,i,I="Categories",y,f,g;document.title=ae;let p=V(o[0].posts),h=[];for(let l=0;l<p.length;l+=1)h[l]=P(O(o,p,l));let C=V(o[0].categories),r=[];for(let l=0;l<C.length;l+=1)r[l]=B(M(o,C,l));const v=l=>T(r[l],1,1,()=>{r[l]=null});return{c(){t=j(),a=E("section"),e=E("div");for(let l=0;l<h.length;l+=1)h[l].c();c=j(),n=E("section"),i=E("h2"),i.textContent=I,y=j(),f=E("div");for(let l=0;l<r.length;l+=1)r[l].c();this.h()},l(l){W("svelte-1hhj126",document.head).forEach(d),t=x(l),a=b(l,"SECTION",{class:!0});var s=w(a);e=b(s,"DIV",{class:!0});var N=w(e);for(let k=0;k<h.length;k+=1)h[k].l(N);N.forEach(d),s.forEach(d),c=x(l),n=b(l,"SECTION",{class:!0});var D=w(n);i=b(D,"H2",{class:!0,"data-svelte-h":!0}),X(i)!=="svelte-me3qcd"&&(i.textContent=I),y=x(D),f=b(D,"DIV",{class:!0});var z=w(f);for(let k=0;k<r.length;k+=1)r[k].l(z);z.forEach(d),D.forEach(d),this.h()},h(){u(e,"class","grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"),u(a,"class","max-w-5xl mx-auto px-5 mt-8"),u(i,"class","text-center py-5"),u(f,"class","grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 xl:grid-cols-4"),u(n,"class","max-w-5xl mx-auto px-5 mt-12")},m(l,_){S(l,t,_),S(l,a,_),m(a,e);for(let s=0;s<h.length;s+=1)h[s]&&h[s].m(e,null);S(l,c,_),S(l,n,_),m(n,i),m(n,y),m(n,f);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(f,null);g=!0},p(l,[_]){if(_&1){p=V(l[0].posts);let s;for(s=0;s<p.length;s+=1){const N=O(l,p,s);h[s]?h[s].p(N,_):(h[s]=P(N),h[s].c(),h[s].m(e,null))}for(;s<h.length;s+=1)h[s].d(1);h.length=p.length}if(_&1){C=V(l[0].categories);let s;for(s=0;s<C.length;s+=1){const N=M(l,C,s);r[s]?(r[s].p(N,_),q(r[s],1)):(r[s]=B(N),r[s].c(),q(r[s],1),r[s].m(f,null))}for(le(),s=C.length;s<r.length;s+=1)v(s);Y()}},i(l){if(!g){for(let _=0;_<C.length;_+=1)q(r[_]);g=!0}},o(l){r=r.filter(Boolean);for(let _=0;_<r.length;_+=1)T(r[_]);g=!1},d(l){l&&(d(t),d(a),d(c),d(n)),L(h,l),L(r,l)}}}function ce(o,t,a){let{data:e}=t;return o.$$set=c=>{"data"in c&&a(0,e=c.data)},[e]}class _e extends J{constructor(t){super(),K(this,t,ce,ie,F,{data:0})}}export{_e as component};