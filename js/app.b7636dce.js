(function(){"use strict";var n={8720:function(n,t,e){var o=e(9242),r=e(3396);function i(n,t){const e=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(e)}var u=e(89);const c={},a=(0,u.Z)(c,[["render",i]]);var f=a,s=e(2483);const l=(0,r._)("h1",null,"Главная страница",-1);function d(n,t,e,o,i,u){const c=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)("div",null,[l,(0,r.Wm)(c,{to:"/noski",class:"nav-link"},{default:(0,r.w5)((()=>[(0,r.Uk)("Носки")])),_:1}),(0,r.Wm)(c,{to:"/moloko",class:"nav-link"},{default:(0,r.w5)((()=>[(0,r.Uk)("Молоко")])),_:1})])}var p={name:"HomeView"};const m=(0,u.Z)(p,[["render",d]]);var v=m;const h=[{path:"/",name:"home",component:v},{path:"/moloko",name:"moloko",component:()=>e.e(443).then(e.bind(e,4894))},{path:"/noski",name:"noski",component:()=>e.e(443).then(e.bind(e,6696))}],b=(0,s.p7)({history:(0,s.PO)("/smart-check/"),routes:h});var k=b,g=e(65),y=(0,g.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),w=e(4384);const O=(0,o.ri)(f).use(y).use(k);O.component(w.Z.name,w.Z),O.mount("#app")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return n[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}e.m=n,function(){var n=[];e.O=function(t,o,r,i){if(!o){var u=1/0;for(s=0;s<n.length;s++){o=n[s][0],r=n[s][1],i=n[s][2];for(var c=!0,a=0;a<o.length;a++)(!1&i||u>=i)&&Object.keys(e.O).every((function(n){return e.O[n](o[a])}))?o.splice(a--,1):(c=!1,i<u&&(u=i));if(c){n.splice(s--,1);var f=r();void 0!==f&&(t=f)}}return t}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[o,r,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.f={},e.e=function(n){return Promise.all(Object.keys(e.f).reduce((function(t,o){return e.f[o](n,t),t}),[]))}}(),function(){e.u=function(n){return"js/about.cb6017f7.js"}}(),function(){e.miniCssF=function(n){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={},t="smart-check:";e.l=function(o,r,i,u){if(n[o])n[o].push(r);else{var c,a;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+i){c=l;break}}c||(a=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,e.nc&&c.setAttribute("nonce",e.nc),c.setAttribute("data-webpack",t+i),c.src=o),n[o]=[r];var d=function(t,e){c.onerror=c.onload=null,clearTimeout(p);var r=n[o];if(delete n[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(n){return n(e)})),t)return t(e)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),a&&document.head.appendChild(c)}}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){e.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n}}(),function(){e.p="/smart-check/"}(),function(){var n={143:0};e.f.j=function(t,o){var r=e.o(n,t)?n[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(e,o){r=n[t]=[e,o]}));o.push(r[2]=i);var u=e.p+e.u(t),c=new Error,a=function(o){if(e.o(n,t)&&(r=n[t],0!==r&&(n[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",c.name="ChunkLoadError",c.type=i,c.request=u,r[1](c)}};e.l(u,a,"chunk-"+t,t)}},e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,i,u=o[0],c=o[1],a=o[2],f=0;if(u.some((function(t){return 0!==n[t]}))){for(r in c)e.o(c,r)&&(e.m[r]=c[r]);if(a)var s=a(e)}for(t&&t(o);f<u.length;f++)i=u[f],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(s)},o=self["webpackChunksmart_check"]=self["webpackChunksmart_check"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(8720)}));o=e.O(o)})();
//# sourceMappingURL=app.b7636dce.js.map