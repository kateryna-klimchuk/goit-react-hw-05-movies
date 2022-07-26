"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[917],{4162:function(n,e,t){t.d(e,{Z:function(){return c}});var r,a=t(8748),i=t(168),o=t(6031).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  padding-top: 300px;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 1200;\n"]))),u=t(184),c=function(){return(0,u.jsx)(o,{children:(0,u.jsx)(a.gy,{height:"100",width:"100",color:"#a2c893",ariaLabel:"loading"})})}},8917:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,a,i,o,u,c=t(885),s=t(2791),p=t(501),d=t(6871),l=t(4162),f=t(4390),x=t(7692),h=t(168),m=t(6031),v=m.ZP.form(r||(r=(0,h.Z)(["\n  padding-top: 20px;\n  margin-top: 20px;\n  min-width: 400px;\n  display: flex;\n  align-item: center;\n"]))),g=m.ZP.input(a||(a=(0,h.Z)(["\n  border: 1px solid grey;\n  padding: 10px 20px;\n  min-width: 250px;\n"]))),b=m.ZP.button(i||(i=(0,h.Z)(["\n  display: inline-block;\n  width: 44px;\n  height: 40px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  background-color: orangered;\n  color: white;\n  &:hover {\n    opacity: 1;\n  }\n"]))),y=t(184),w=function(n){var e=n.handleSubmit;return(0,y.jsxs)(v,{onSubmit:e,children:[(0,y.jsx)(g,{type:"text",name:"movieName",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,y.jsx)(b,{type:"submit",children:(0,y.jsx)(x.Goc,{size:18})})]})},k=m.ZP.ul(o||(o=(0,h.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n"]))),Z=(0,m.ZP)(p.rU)(u||(u=(0,h.Z)(["\n  list-style: none;\n  min-width: 100%;\n\n  text-decoration: none;\n  border-bottom: 1px solid grey;\n\n  &:hover {\n    padding: 4px;\n    border-radius: 4px;\n    box-shadow: 1px 2px 13px 3px rgba(0, 0, 0, 0.78);\n  }\n"]))),j=function(){var n,e=(0,s.useState)([]),t=(0,c.Z)(e,2),r=t[0],a=t[1],i=(0,p.lr)(),o=(0,c.Z)(i,2),u=o[0],x=o[1],h=null!==(n=u.get("movieName"))&&void 0!==n?n:"",m=(0,d.TH)();(0,s.useEffect)((function(){""!==h&&(0,f.z1)(h).then((function(n){return a(n.results)}))}),[h]);return(0,y.jsxs)("main",{children:[(0,y.jsx)(w,{handleSubmit:function(n){n.preventDefault();var e=n.currentTarget;x({movieName:e.elements.movieName.value}),e.reset()}}),(0,y.jsx)(k,{children:r.length>0&&r.map((function(n){return(0,y.jsx)("div",{children:(0,y.jsx)(Z,{to:"/movies/".concat(n.id),state:{from:m},children:n.original_title||n.name})},n.id)}))}),(0,y.jsx)(s.Suspense,{fallback:(0,y.jsx)(l.Z,{}),children:(0,y.jsx)(d.j3,{})})]})}},4390:function(n,e,t){t.d(e,{_k:function(){return s},hG:function(){return d},oO:function(){return l},uV:function(){return f},z1:function(){return p}});var r=t(5861),a=t(7757),i=t.n(a),o=t(4569),u=t.n(o),c="532c56a8c591a340308597d9f66fd331";u().defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("trending/all/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("search/movie?query=".concat(e,"&api_key=").concat(c,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=917.e761093b.chunk.js.map