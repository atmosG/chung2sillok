(this.webpackJsonpchung2sillok=this.webpackJsonpchung2sillok||[]).push([[7],{55:function(t,c,e){},67:function(t,c,e){"use strict";e.r(c);var n=e(4),i=e(0),s=e(2),l=e(24),o=e.n(l),a=(e(55),e(56)),j=e(63),r=e(1);function b(t){return Object(r.jsxs)("div",{className:"detail__content",children:[Object(r.jsx)("h1",{children:t.sillok.title}),Object(r.jsx)("p",{children:t.sillok.content}),Object(r.jsx)("h2",{children:t.sillok.era})]})}c.default=function(t){var c=Object(s.g)().id,e=Object(i.useState)({id:0,era:"",title:"",content:""}),l=Object(n.a)(e,2),u=l[0],d=l[1],h=Object(i.useState)(0),g=Object(n.a)(h,2),k=g[0],O=g[1];return Object(i.useEffect)((function(){o.a.get("https://atmosg.github.io/chung2sillok/sillok.json").then((function(t){O(t.data.length);var e=t.data.find((function(t){return t.id===c}));d(e)})).catch((function(t){return console.log(t)}))}),[]),Object(r.jsx)("section",{className:"detail",children:Object(r.jsxs)("div",{className:"inner",children:[Object(r.jsx)(b,{sillok:u}),Object(r.jsxs)("div",{className:"detail__btns",onClick:function(t){var e=parseInt(c);switch(t.target.id){case"go-back":window.location.replace("/chung2sillok/sillok/".concat(e-1));break;case"go-next":window.location.replace("/chung2sillok/sillok/".concat(e+1));break;case"go-list":window.location.replace("/chung2sillok/sillok")}},children:[Object(r.jsx)("button",{className:"go-back",children:0==c?null:Object(r.jsx)(a.a,{icon:j.a,id:"go-back"})}),Object(r.jsx)("button",{className:"go-list",children:Object(r.jsx)(a.a,{icon:j.c,id:"go-list"})}),Object(r.jsx)("button",{className:"go-next",children:c==k-1?null:Object(r.jsx)(a.a,{icon:j.b,id:"go-next"})})]})]})})}}}]);
//# sourceMappingURL=7.bd633823.chunk.js.map