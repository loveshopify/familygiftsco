(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{92:function(n,e,t){"use strict";t.r(e);var o=t(12),a=t.n(o),r=t(20),i=t.n(r),s=t(8),c=t(83),u=function(){function n(e){a()(this,n),this.el=e,this.bindEvents()}return i()(n,[{key:"bindEvents",value:function(){if(Shopify.queryParams={},location.search.length)for(var n,e=0,t=location.search.substr(1).split("&");e<t.length;e++)(n=t[e].split("=")).length>1&&(Shopify.queryParams[decodeURIComponent(n[0])]=decodeURIComponent(n[1]));c(this.el,".js-sortBy a","click",(function(n){n.preventDefault(),Shopify.queryParams.sort_by=n.target.dataset.value,location.search=function(n){var e=[];for(var t in n)n.hasOwnProperty(t)&&e.push(encodeURIComponent(t)+"="+encodeURIComponent(n[t]));return e.join("&")}(Shopify.queryParams).replace(/\+/g,"%20")}),!1)}}]),n}();e.default=Object(s.a)((function(n,e){new u(n,e)}))}}]);
//# sourceMappingURL=15.chunk.867b2b6be45e6516da82.js.map