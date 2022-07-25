"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[92],{2092:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,a,i,o,c,s,u,p,d,l=t(8683),f=t(885),x=t(501),h=t(6871),g=t(4390),v=t(2791),m=t(6856),b=t(168),Z=t(6031),y=Z.ZP.div(r||(r=(0,b.Z)(["\n  padding: 10px;\n"]))),j=Z.ZP.div(a||(a=(0,b.Z)(["\n  padding-bottom: 20px;\n  padding-top: 20px;\n\n  display: flex;\n  column-gap: 40px;\n  border-top: 1px solid grey;\n"]))),w=Z.ZP.div(i||(i=(0,b.Z)(["\n  border-top: 1px solid grey;\n  border-bottom: 1px solid grey;\n\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n"]))),k=Z.ZP.button(o||(o=(0,b.Z)(["\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  margin-bottom: 10px;\n\n  &:hover {\n    background-color: orangered;\n    color: white;\n    opacity: 0.6;\n  }\n"]))),_=(0,Z.ZP)(x.rU)(c||(c=(0,b.Z)(["\n  display: flex;\n  font-size: 14px;\n  align-items: center;\n  column-gap: 10px;\n"]))),U=Z.ZP.ul(s||(s=(0,b.Z)(["\n  padding: 0;\n  margin: 0;\n  display: flex;\n  column-gap: 10px;\n"]))),P=Z.ZP.div(u||(u=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n"]))),z=Z.ZP.span(p||(p=(0,b.Z)(["\n  background-color: orangered;\n  padding: 1px 4px;\n  border-radius: 2px;\n"]))),S=(0,Z.ZP)(z)(d||(d=(0,b.Z)(["\n  background-color: grey;\n  opacity: 0.6;\n"]))),C=t(184),G=function(){var n,e,t=(0,v.useState)({}),r=(0,f.Z)(t,2),a=r[0],i=r[1],o=(0,h.TH)(),c=(0,h.UO)().movieId;(0,v.useEffect)((function(){(0,g.hG)(c).then((function(n){return i(n)}))}),[c]);var s=a.original_title,u=a.overview,p=a.genres,d=a.poster_path,b=a.vote_average;return(0,C.jsx)("main",{children:(0,C.jsxs)(y,{children:[(0,C.jsx)(k,{type:"button",children:(0,C.jsxs)(_,{to:null!==(n=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:[(0,C.jsx)(m.U1p,{size:16}),"Back to list"]})}),(0,C.jsxs)(j,{children:[(0,C.jsx)("img",{src:d?"https://image.tmdb.org/t/p/w300".concat(d):"https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg",alt:"title",width:220,height:320,loading:"lazy"}),(0,C.jsxs)(P,{children:[(0,C.jsx)("h2",{children:s}),(0,C.jsxs)("h4",{children:["Rating:"," ",b>6?(0,C.jsx)(z,{children:b}):(0,C.jsx)(S,{children:b})]}),(0,C.jsx)("h4",{children:"Overview"}),(0,C.jsxs)("p",{children:[u," "]}),(0,C.jsx)("h4",{children:"Genres"}),(0,C.jsx)(U,{children:p&&p.map((function(n){return(0,C.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,C.jsxs)(w,{children:[(0,C.jsx)("h4",{children:"Additional information"}),(0,C.jsx)(x.rU,{to:"cast",state:(0,l.Z)({},o.state)||{from:o},children:"Cast"}),(0,C.jsx)(x.rU,{to:"reviews",state:(0,l.Z)({},o.state)||{from:o},children:"Reviews"})]}),(0,C.jsx)(h.j3,{})]})})}},4390:function(n,e,t){t.d(e,{_k:function(){return u},hG:function(){return d},oO:function(){return l},uV:function(){return f},z1:function(){return p}});var r=t(5861),a=t(7757),i=t.n(a),o=t(4569),c=t.n(o),s="532c56a8c591a340308597d9f66fd331";c().defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("trending/all/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("search/movie?query=".concat(e,"&api_key=").concat(s,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=92.001a839d.chunk.js.map