(function(){"use strict";var n={5379:function(n,e,t){var r=t(9242),i=t(3396);function o(n,e,t,r,o,l){const a=(0,i.up)("StartView"),d=(0,i.up)("FirstSlide"),u=(0,i.up)("SecondSlide"),c=(0,i.up)("ThirdSlide"),s=(0,i.up)("FourthSlide");return(0,i.wg)(),(0,i.iD)(i.HY,null,[1===o.slide?((0,i.wg)(),(0,i.j4)(a,{key:0,onVideoEnded:l.goNext},null,8,["onVideoEnded"])):(0,i.kq)("",!0),2===o.slide?((0,i.wg)(),(0,i.j4)(d,{key:1})):(0,i.kq)("",!0),3===o.slide?((0,i.wg)(),(0,i.j4)(u,{key:2})):(0,i.kq)("",!0),4===o.slide?((0,i.wg)(),(0,i.j4)(c,{key:3})):(0,i.kq)("",!0),5===o.slide?((0,i.wg)(),(0,i.j4)(s,{key:4})):(0,i.kq)("",!0)],64)}var l=t.p+"media/firework.6a24a0b1.mp4";const a=n=>((0,i.dD)("data-v-0fbee279"),n=n(),(0,i.Cn)(),n),d=a((()=>(0,i._)("source",{src:l,type:"video/mp4"},null,-1))),u=[d],c=a((()=>(0,i._)("p",null,"С Днём Рождения, Наташа!!!",-1)));function s(n,e,t,r,o,l){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("video",{controls:"",onEnded:e[0]||(e[0]=(...n)=>l.endReport&&l.endReport(...n))},u,32),c],64)}var v={name:"StartView",methods:{endReport(){this.$emit("videoEnded")}}},f=t(89);const p=(0,f.Z)(v,[["render",s],["__scopeId","data-v-0fbee279"]]);var g=p,h=t.p+"img/tiger.8c1bf1ac.png";const m=n=>((0,i.dD)("data-v-b1d54998"),n=n(),(0,i.Cn)(),n),w=m((()=>(0,i._)("img",{src:h,alt:"Tiger"},null,-1))),_=m((()=>(0,i._)("p",null,"С Днём Рождения, Наташа!!!",-1))),b=["id"];function y(n,e,t,r,o,l){return(0,i.wg)(),(0,i.iD)(i.HY,null,[w,_,((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(3,(n=>(0,i._)("div",{key:n,id:`oval-${n}`,class:"ovals"},null,8,b))),64))],64)}var k={name:"FirstSlide"};const S=(0,f.Z)(k,[["render",y],["__scopeId","data-v-b1d54998"]]);var D=S,j=t.p+"img/chameleon.11d578ff.jpg";const H=n=>((0,i.dD)("data-v-ea875bf6"),n=n(),(0,i.Cn)(),n),O=H((()=>(0,i._)("img",{src:j,alt:"Chameleon"},null,-1))),Y=H((()=>(0,i._)("p",null,"С Днём Рождения, Наташа!!!",-1))),C=["id"];function x(n,e,t,r,o,l){return(0,i.wg)(),(0,i.iD)(i.HY,null,[O,Y,((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(3,(n=>(0,i._)("div",{key:n,id:`oval-${n}`,class:"ovals"},null,8,C))),64))],64)}var F={name:"SecondSlide"};const I=(0,f.Z)(F,[["render",x],["__scopeId","data-v-ea875bf6"]]);var T=I,Z=t.p+"img/meercat.abfd6ee6.jpg";const q=n=>((0,i.dD)("data-v-c2833364"),n=n(),(0,i.Cn)(),n),E=q((()=>(0,i._)("img",{src:Z,alt:"Meercat"},null,-1))),V=q((()=>(0,i._)("p",null,"С Днём Рождения, Наташа!!!",-1))),$=["id"];function K(n,e,t,r,o,l){return(0,i.wg)(),(0,i.iD)(i.HY,null,[E,V,((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(11,(n=>(0,i._)("div",{key:n,id:`oval-${n}`,class:"ovals"},null,8,$))),64))],64)}var N={name:"ThirdSlide"};const R=(0,f.Z)(N,[["render",K],["__scopeId","data-v-c2833364"]]);var M=R,P=t.p+"img/turtles.9f3778d3.webp";const A=n=>((0,i.dD)("data-v-3c8a4079"),n=n(),(0,i.Cn)(),n),B=A((()=>(0,i._)("img",{src:P,alt:"Turtles"},null,-1))),z=A((()=>(0,i._)("p",null,"Happy Birthday, Natasha!!!",-1))),G=["id"];function J(n,e,t,r,o,l){return(0,i.wg)(),(0,i.iD)(i.HY,null,[B,z,((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(13,(n=>(0,i._)("div",{key:n,id:`oval-${n}`,class:"ovals"},null,8,G))),64))],64)}var L={name:"FourthSlide"};const Q=(0,f.Z)(L,[["render",J],["__scopeId","data-v-3c8a4079"]]);var U=Q,W={name:"App",components:{StartView:g,FirstSlide:D,SecondSlide:T,ThirdSlide:M,FourthSlide:U},data(){return{slide:1}},methods:{goNext(){this.slide++;let n=setInterval((()=>{this.slide++,5===this.slide&&clearInterval(n)}),7e3)}}};const X=(0,f.Z)(W,[["render",o]]);var nn=X;(0,r.ri)(nn).mount("#app")}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return n[r].call(o.exports,o,o.exports,t),o.exports}t.m=n,function(){var n=[];t.O=function(e,r,i,o){if(!r){var l=1/0;for(c=0;c<n.length;c++){r=n[c][0],i=n[c][1],o=n[c][2];for(var a=!0,d=0;d<r.length;d++)(!1&o||l>=o)&&Object.keys(t.O).every((function(n){return t.O[n](r[d])}))?r.splice(d--,1):(a=!1,o<l&&(l=o));if(a){n.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=n.length;c>0&&n[c-1][2]>o;c--)n[c]=n[c-1];n[c]=[r,i,o]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.p="/birthday/"}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var i,o,l=r[0],a=r[1],d=r[2],u=0;if(l.some((function(e){return 0!==n[e]}))){for(i in a)t.o(a,i)&&(t.m[i]=a[i]);if(d)var c=d(t)}for(e&&e(r);u<l.length;u++)o=l[u],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(c)},r=self["webpackChunkbirthday"]=self["webpackChunkbirthday"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(5379)}));r=t.O(r)})();
//# sourceMappingURL=app.8a70e089.js.map