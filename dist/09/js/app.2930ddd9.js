(function(e){function t(t){for(var r,a,o=t[0],i=t[1],l=t[2],h=0,d=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0be144":"e76b1f30","chunk-2d0c4226":"7f248de3","chunk-2d0c7340":"36c6d0e1","chunk-2d0e4881":"4725e7c6","chunk-2d208a97":"77350a0d","chunk-2d21b0a9":"6475c69f","chunk-c608f30c":"b6610169"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-c608f30c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0be144":"31d6cfe0","chunk-2d0c4226":"31d6cfe0","chunk-2d0c7340":"31d6cfe0","chunk-2d0e4881":"31d6cfe0","chunk-2d208a97":"31d6cfe0","chunk-2d21b0a9":"31d6cfe0","chunk-c608f30c":"39f5e5a3"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var l=u[o],h=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(h===r||h===c))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],h=l.getAttribute("data-href");if(h===r||h===c)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],s.parentNode.removeChild(s),n(u)},s.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var l,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=o(e);var d=new Error;l=function(t){h.onerror=h.onload=null,clearTimeout(s);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:h})}),12e4);h.onerror=h.onload=l,document.head.appendChild(h)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],h=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var s=h;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"App"},[n("el-breadcrumb",{staticStyle:{"background-color":"#000"},attrs:{separator:">>"}},[n("transition-group",{attrs:{name:"breadcrumb"}},e._l(e.levelList,(function(t,r){return n("el-breadcrumb-item",{key:t.path,staticStyle:{"font-size":"25px"}},[r==e.levelList.length-1?n("span",{staticStyle:{color:"#fff"}},[e._v(" "+e._s(t.meta.title)+" ")]):n("a",{on:{click:function(n){return n.preventDefault(),e.handleLink(t)}}},[e._v(e._s(t.meta.title))])])})),1)],1),n("router-view")],1)},c=[],u={data(){return{levelList:[]}},watch:{$route(){this.getBreadcrumb()}},created(){this.getBreadcrumb()},methods:{getBreadcrumb(){let e=this.$route.matched.filter(e=>e.meta&&e.meta.title);this.levelList=e.filter(e=>e.meta&&e.meta.title)},handleLink(e){const{redirect:t,path:n,parent:r}=e;t?this.$router.push(e.parent?r.path+"/"+t:"/"+t):this.$router.push(n)}}},o=u,i=(n("034f"),n("2877")),l=Object(i["a"])(o,a,c,!1,null,null,null),h=l.exports,d=n("8c4f");r["default"].use(d["a"]);const s=d["a"].prototype.replace;d["a"].prototype.replace=function(e){return s.call(this,e).catch(e=>e)};const p=d["a"].prototype.push;d["a"].prototype.push=function(e){return p.call(this,e).catch(e=>e)};const f=()=>n.e("chunk-c608f30c").then(n.bind(null,"a4da")),m=[{path:"/",redirect:"/universe"},{path:"/universe",redirect:"universe/andromeda-galaxy",meta:{title:"宇宙"},component:f,children:[{path:"andromeda-galaxy",redirect:"andromeda-galaxy/m31-galaxy",meta:{title:"仙女座星系"},component:()=>n.e("chunk-2d0c4226").then(n.bind(null,"3a13")),children:[{path:"m31-galaxy",meta:{title:"M31星系",full_path:"/universe/andromeda-galaxy/m31-galaxy"},component:()=>n.e("chunk-2d208a97").then(n.bind(null,"a66b"))}]},{path:"galaxy",redirect:"galaxy/sun",meta:{title:"银河系"},component:()=>n.e("chunk-2d0c4226").then(n.bind(null,"3a13")),children:[{path:"sun",redirect:"sun/hydrogen",meta:{title:"太阳"},component:()=>n.e("chunk-2d0c4226").then(n.bind(null,"3a13")),children:[{path:"hydrogen",meta:{title:"氢",full_path:"/universe/galaxy/sun/hydrogen"},component:()=>n.e("chunk-2d0c7340").then(n.bind(null,"502a"))}]},{path:"earth",redirect:"earth/america",meta:{title:"地球"},component:()=>n.e("chunk-2d0c4226").then(n.bind(null,"3a13")),children:[{path:"america",redirect:"america/washington",meta:{title:"美国"},component:()=>n.e("chunk-2d0c4226").then(n.bind(null,"3a13")),children:[{path:"washington",meta:{title:"华盛顿",full_path:"/universe/galaxy/earth/america/washington"},component:()=>n.e("chunk-2d0e4881").then(n.bind(null,"912e"))}]},{path:"china",redirect:"china/north",meta:{title:"中国"},component:()=>n.e("chunk-2d0c4226").then(n.bind(null,"3a13")),children:[{path:"south",redirect:"south/sichuan",meta:{title:"南方"},component:()=>n.e("chunk-2d0c4226").then(n.bind(null,"3a13")),children:[{path:"sichuan",meta:{title:"四川",full_path:"/universe/galaxy/earth/china/south/sichuan"},component:()=>n.e("chunk-2d21b0a9").then(n.bind(null,"bda2"))}]},{path:"north",redirect:"north/beijing",meta:{title:"北方"},component:()=>n.e("chunk-2d0c4226").then(n.bind(null,"3a13")),children:[{path:"beijing",meta:{title:"北京",full_path:"/universe/galaxy/earth/china/north/beijing"},component:()=>n.e("chunk-2d0be144").then(n.bind(null,"2f71"))}]}]}]}]}]}],b=new d["a"]({routes:m});b.beforeEach((e,t,n)=>{document.title=e.meta.title,n()});var g=b,v=(n("99fc"),n("5c96"));n("0fae");r["default"].config.productionTip=!1,r["default"].use(v["Breadcrumb"]),r["default"].use(v["BreadcrumbItem"]),r["default"].use(v["Menu"]),r["default"].use(v["MenuItem"]),r["default"].use(v["MenuItemGroup"]),r["default"].use(v["Submenu"]),new r["default"]({render:e=>e(h),router:g}).$mount("#app")},"85ec":function(e,t,n){},"99fc":function(e,t,n){}});
//# sourceMappingURL=app.2930ddd9.js.map