(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{172:function(e,t,n){},191:function(e,t,n){e.exports&&(e.exports=function(e){"use strict";function t(e){m||(m=e);var o=e-m,i=function(e,t,n,o){return 1>(e/=o/2)?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}(o,v,h-v,c);window.scrollTo(0,i),c>o?d=requestAnimationFrame(t):(n(),a&&(a.pause(),a.currentTime=0),r&&r.play(),s&&s())}function n(){m=null,v=null,A=!1}function o(){w&&(h=function(e){for(var t=0;e;)t+=e.offsetTop||0,e=e.offsetParent;return p&&(t-=p),t}(w))}function i(){A&&(cancelAnimationFrame(d),n(),a&&(a.pause(),a.currentTime=0),o(),window.scrollTo(0,h))}var l,a,r,s,u=null,d=null,c=null,f=!1,m=null,v=null,h=0,w=null,p=null,A=!1,b=this;this.elevate=function(){A||(A=!0,v=document.documentElement.scrollTop||u.scrollTop,o(),f||(c=1.5*Math.abs(h-v)),requestAnimationFrame(t),a&&a.play(),l&&l())},function(e){u=document.body,(e=function(e,t){for(var n in t)void 0===e[n]&&"function"!=typeof n&&(e[n]=t[n]);return e}(e,{duration:void 0,mainAudio:!1,endAudio:!1,preloadAudio:!0,loopAudio:!0,startCallback:null,endCallback:null})).element&&function(e){e.addEventListener?e.addEventListener("click",b.elevate,!1):e.attachEvent("onclick",function(){o(),document.documentElement.scrollTop=h,document.body.scrollTop=h,window.scroll(0,h)})}(e.element),window.requestAnimationFrame&&window.Audio&&window.addEventListener&&(e.duration&&(f=!0,c=e.duration),e.targetElement&&(w=e.targetElement),e.verticalPadding&&(p=e.verticalPadding),window.addEventListener("blur",i,!1),e.mainAudio&&((a=new Audio(e.mainAudio)).setAttribute("preload",e.preloadAudio),a.setAttribute("loop",e.loopAudio)),e.endAudio&&(r=new Audio(e.endAudio)).setAttribute("preload","true"),e.endCallback&&(s=e.endCallback),e.startCallback&&(l=e.startCallback))}(e)})},192:function(e,t,n){"use strict";var o=n(172);n.n(o).a},227:function(e,t,n){"use strict";n.r(t);var o=n(191),i=n.n(o),l={name:"VueElevator",data:()=>({show:!1,fire:!1}),computed:{elevatorConfig(){return this.$themeConfig.elevator}},mounted(){this.elevator(),this.handleScrollEffectBackToTop()},beforeDestroy(){document.removeEventListener("scroll",this.setPanel)},methods:{fired(){this.fire=!0},elevator(){const e={element:this.$refs.arrowTop,duration:this.elevatorConfig.duration,mainAudio:this.elevatorConfig.mainAudio,endAudio:this.elevatorConfig.endAudio};setTimeout(()=>{new i.a(e)},5e3)},handleScrollEffectBackToTop(){this.setPanel(),document.addEventListener("scroll",this.setPanel)},setPanel(){window.requestAnimationFrame(()=>{const e=document.documentElement.scrollHeight-document.documentElement.clientHeight-1500;this.show=window.scrollY>e,0===window.scrollY&&(this.fire=!1)})}}},a=(n(192),n(0)),r=Object(a.a)(l,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"elevator"},[t("a",{ref:"arrowTop",staticClass:"elevator__link",class:{"elevator__link--show":this.show,"elevator__link--fire":this.fire},on:{click:this.fired}},[t("span",{staticClass:"icon elevator__icon"},[this._v("greaterthan")])])])},[],!1,null,null,null);t.default=r.exports}}]);