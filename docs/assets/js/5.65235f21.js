(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{199:function(module,exports,__webpack_require__){"use strict";var timeago=function(){var o={second:1e3,minute:6e4,hour:36e5,day:864e5,week:6048e5,month:2592e6,year:31536e6},obj={ago:function(e,t){var n,r=Math.round,a=" ago",i=function(e,n){return void 0===t?n+" "+e+(n>1?"s":"")+a:n+e.substring(0,1)},u=Date.now()-new Date(e).getTime();for(var s in u<0&&(u*=-1,a=" from now"),o){if(r(u)<o[s])return i(n||"m",r(u/(o[n]||1)));n=s}return i(s,r(u/o[s]))},today:function(){var e=new Date,t=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),n=new Array("January","February","March","April","May","June","July","August","September","October","November","December");return t[e.getDay()]+", "+n[e.getMonth()]+" "+e.getDate()+", "+e.getFullYear()},timefriendly:function(s){var t=s.match(/(\d).([a-z]*?)s?$/);return t[1]*eval(o[t[2]])},mintoread:function(e,t,n){return(Math.round(e.split(" ").length/(n||200))||"< 1")+(t||" min to read")}};return obj};module.exports&&(module.exports=timeago())},200:function(e,t,n){var r={"./es.js":[209,50],"./pt-br.js":[210,51]};function a(e){if(!n.o(r,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[e],a=t[0];return n.e(t[1]).then(function(){return n(a)})}a.keys=function(){return Object.keys(r)},a.id=200,e.exports=a},257:function(e,t,n){"use strict";n.r(t);const r=n(199);var a={name:"TimeProvider",props:{type:{type:String,required:!0},date:{type:[Date,String],default:()=>new Date},content:String,lang:String},data:()=>({result:null}),created(){const e=this.content||(this.date instanceof Date?this.date:new Date(this.date));n(200)(`./${this.lang||this.$lang}.js`).then(t=>{this.result=this.translate(this.handle(e),t.default)}).catch(()=>{this.result=this.handle(e)})},methods:{translate:(e,t)=>(Object.keys(t).forEach(n=>{let r=new RegExp(n,"i");e.match(r)&&(e=e.replace(n,t[n]))}),e),handle(e){return"mintoread"===this.type?r[this.type](e,null,100):r[this.type](e)}},render(){return this.$scopedSlots.default({time:this.result})}},o=n(0),i=Object(o.a)(a,void 0,void 0,!1,null,null,null);t.default=i.exports}}]);