(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{57:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(28),i=n.n(r),c=n(9),o=n(2),u=n(17),l=n.n(u),j=n(29),m=n(11),d=n(12),b=n(14),p=n(13),h=n(30),v=n.n(h),O=n(5),x=n.n(O),y=(n(57),n(1));function g(e){var t=e.id,n=e.year,a=e.genres,s=e.title,r=e.summary,i=e.poster;return Object(y.jsxs)("div",{className:"movie",children:[Object(y.jsx)("img",{src:i,alt:s,title:s}),Object(y.jsxs)("div",{className:"movie__data",children:[Object(y.jsx)(c.b,{to:{pathname:"/movie/".concat(t),state:{title:s,year:n,genres:a,summary:r,poster:i}},children:Object(y.jsx)("h3",{className:"movie__title",children:s})}),Object(y.jsx)("h5",{className:"movie__year",children:n}),Object(y.jsx)("ul",{className:"movie__genres",children:a.map((function(e,t){return Object(y.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(y.jsx)("p",{className:"movie__summary",children:r.length<=180?r:r.slice(0,180)+"..."})]})]})}g.prototype={id:x.a.number.isRequired,year:x.a.number.isRequired,genres:x.a.arrayOf(x.a.string).isRequired,title:x.a.string.isRequired,summary:x.a.string.isRequired,poster:x.a.string.isRequired};var f=g,_=(n(65),function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,this.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(y.jsx)("section",{className:"container",children:t?Object(y.jsx)("div",{className:"loader",children:Object(y.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(y.jsx)("div",{className:"movies",children:n.map((function(e){return Object(y.jsx)(f,{id:e.id,year:e.year,genres:e.genres,title:e.title,summary:e.summary,poster:e.medium_cover_image},e.id)}))})})}}]),n}(s.a.Component));var N=function(e){return console.log(e),Object(y.jsx)("span",{children:"About this Page : I built it because I love Movies."})},k=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(y.jsx)("span",{children:e.state.title}):null}}]),n}(s.a.Component);n(66);var q=function(){return Object(y.jsxs)("div",{className:"nav",children:[Object(y.jsx)(c.b,{to:"/",children:"Home"}),Object(y.jsx)(c.b,{to:"/about",children:"About"})]})};var w=function(){return Object(y.jsxs)(c.a,{children:[Object(y.jsx)(q,{}),Object(y.jsx)(o.a,{path:"/",exact:!0,component:_}),Object(y.jsx)(o.a,{path:"/about",exact:!0,component:N}),Object(y.jsx)(o.a,{path:"/movie/:id",exact:!0,component:k})]})};i.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(w,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.8055aab1.chunk.js.map