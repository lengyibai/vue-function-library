(function(t){function e(e){for(var n,o,a=e[0],c=e[1],l=e[2],h=0,m=[];h<a.length;h++)o=a[h],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,a=1;a<s.length;a++){var c=s[a];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},2395:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"App"},[s("h3",[t._v("倒计时")]),s("count-down"),s("hr"),s("h3",[t._v("记住密码")]),s("remember-password"),s("hr"),s("h3",[t._v("拖拽排序")]),s("drag-sort")],1)},i=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"CountDown"},[s("span",[s("b",[t._v(t._s(t.h)+":")]),s("b",[t._v(t._s(t.m)+":")]),s("b",[t._v(t._s(t.s))])]),s("span",{staticStyle:{"user-select":"none",cursor:"pointer"},on:{click:t.doStart}},[t._v(" "+t._s(t.timeStatus)+" ")])])},a=[],c={data:function(){return{time:{h:1,m:0,s:1},timer:null,sumTime:0,h:"00",m:"00",s:"00",timeStatus:"开始"}},created:function(){this.sumTime=60*this.time.h*60+60*this.time.m+this.time.s,this.format()},methods:{format:function(){this.h=Math.floor(this.sumTime/3600),this.m=Math.floor(this.sumTime/60)-60*this.h,this.s=Math.floor(this.sumTime)-60*this.h*60-60*this.m,this.h<=9&&(this.h="0"+this.h),this.m<=9&&(this.m="0"+this.m),this.s<=9&&(this.s="0"+this.s)},doStart:function(){"开始"==this.timeStatus?(this.sumTime=60*this.time.h*60+60*this.time.m+this.time.s,this.timeStatus="暂停",this.format(),this.onTimer()):"暂停"==this.timeStatus?(clearInterval(this.timer),this.timer=null,this.timeStatus="继续"):"继续"==this.timeStatus&&(this.onTimer(),this.timeStatus="暂停")},onTimer:function(){var t=this;this.timer=setInterval((function(){t.start()}),1e3)},start:function(){-1===this.sumTime?(clearInterval(this.timer),this.timer=null,this.timeStatus="定时结束"):(this.format(),this.sumTime--)}}},l=c,u=(s("ceb2"),s("2877")),h=Object(u["a"])(l,o,a,!1,null,"33f29959",null),m=h.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"RememberPassword"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("div",{staticClass:"rem"}),s("div",{staticClass:"rem"},[s("label",{attrs:{for:"a"}},[t._v(" 记住账号及密码")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.isSelect,expression:"isSelect"}],attrs:{type:"checkbox",id:"a"},domProps:{checked:Array.isArray(t.isSelect)?t._i(t.isSelect,null)>-1:t.isSelect},on:{change:function(e){var s=t.isSelect,n=e.target,r=!!n.checked;if(Array.isArray(s)){var i=null,o=t._i(s,i);n.checked?o<0&&(t.isSelect=s.concat([i])):o>-1&&(t.isSelect=s.slice(0,o).concat(s.slice(o+1)))}else t.isSelect=r}}})]),s("button",{on:{click:t.login}},[t._v("点击登录")])])},d=[],p=(s("e9c4"),{set:function(t,e){localStorage.setItem(t,JSON.stringify(e))},get:function(t){return JSON.parse(localStorage.getItem(t))},del:function(t){localStorage.removeItem(t)},clear:function(){localStorage.clear()}}),v={data:function(){return{text:"",password:"",isSelect:!1}},mounted:function(){p.get("lyb")&&(this.text=JSON.parse(p.get("lyb")).text,this.password=JSON.parse(p.get("lyb")).pw,this.isSelect=JSON.parse(p.get("lyb")).isSelect,console.warn("已获取账号及密码"))},methods:{remember:function(){this.isSelect?(p.set("lyb",JSON.stringify({text:this.text,pw:this.password,isSelect:this.isSelect})),console.warn("已记住 账号及密码")):(p.del("lyb"),console.warn("已清除密码"))},login:function(){this.remember(),location.reload()}}},b=v,g=(s("5fb1"),Object(u["a"])(b,f,d,!1,null,"29ed278d",null)),S=g.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[s("transition-group",{staticClass:"Box",staticStyle:{display:"flex","flex-wrap":"wrap"}},t._l(t.users,(function(e,n){return s("div",{key:e,staticClass:"box",class:{active:t.currentIndex==n},on:{dragstart:function(e){return t.dragstart(n)},dragover:function(e){return t.dragover(e,n)},drop:function(e){return t.drop(n)},dragleave:t.dragleave}},[s("div",{staticClass:"move",attrs:{draggable:"true"}},[t._v(" "+t._s(e)+" ")])])})),0)],1)},y=[],w=(s("a434"),s("99af"),s("a15b"),s("fb6a"),{name:"index",data:function(){return{users:[1,2,3,4,5,6,7,8,9],fromIndex:0,currentIndex:null}},methods:{exchange:function(t,e,s){e>s?(t.splice(s,0,t[e]),t.splice(e+1,1)):(t.splice(s+1,0,t[e]),t.splice(e,1))},dragstart:function(t){this.fromIndex=t},dragover:function(t,e){t.preventDefault(),this.currentIndex=e},drop:function(t){this.currentIndex=null,this.exchange(this.users,this.fromIndex,t),console.log("".concat(this.users.slice(0,3).join(" "),"\n").concat(this.users.slice(3,6).join(" "),"\n").concat(this.users.slice(6,9).join(" ")))},dragleave:function(){this.currentIndex=null}}}),_=w,O=(s("e9e1"),Object(u["a"])(_,x,y,!1,null,"e96750e8",null)),j=O.exports,I={name:"App",props:{},data:function(){return{}},components:{CountDown:m,RememberPassword:S,DragSort:j},methods:{}},T=I,P=(s("7c55"),Object(u["a"])(T,r,i,!1,null,null,null)),C=P.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(C)}}).$mount("#app")},"5fb1":function(t,e,s){"use strict";s("a572")},"7c55":function(t,e,s){"use strict";s("2395")},a572:function(t,e,s){},bb2a:function(t,e,s){},bc93:function(t,e,s){},ceb2:function(t,e,s){"use strict";s("bc93")},e9e1:function(t,e,s){"use strict";s("bb2a")}});
//# sourceMappingURL=app.f9359d1f.js.map