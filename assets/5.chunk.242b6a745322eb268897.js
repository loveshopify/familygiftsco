(window.webpackJsonp=window.webpackJsonp||[]).push([[5,36],{175:function(t,e,i){},49:function(t,e,i){"use strict";i.r(e);var n=i(12),s=i.n(n),o=i(20),c=i.n(o),h=i(8),l=i(11),a=(i(175),function(){function t(e,i){s()(this,t),this.el=e,this.ctx=i,this.identifier=e.dataset.identifier,this.content=e.querySelector(".Collapse__content"),this.toggler=e.querySelector(".Collapse__toggle"),this.toggler&&(this.togglerInitialText=this.toggler.innerText),this.isOpen=!1,this.bindEvents()}return c()(t,[{key:"bindEvents",value:function(){var t=this;this.ctx.on("Collapse",(function(e){e.identifier==t.identifier&&"function"==typeof t[e.action]&&t[e.action]()})),this.toggler&&this.toggler.addEventListener("click",(function(e){t.toggle()}))}},{key:"toggle",value:function(){this.isOpen?this.close():this.open()}},{key:"open",value:function(){l.a.set(this.content,{height:"auto"}),l.a.from(this.content,{height:0,duration:.2,immediateRender:!1}),this.el.classList.add("is-open"),this.isOpen=!0}},{key:"close",value:function(){l.a.to(this.content,{height:"0",duration:.2}),this.isOpen=!1,this.el.classList.remove("is-open")}}]),t}());e.default=Object(h.a)((function(t,e){new a(t,e)}))}}]);
//# sourceMappingURL=5.chunk.242b6a745322eb268897.js.map