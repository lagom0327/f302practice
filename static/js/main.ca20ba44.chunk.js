(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{18:function(n,t,e){},21:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),i=e(9),o=e.n(i),u=(e(18),e(4)),a=e(3),s=e(2);function b(){var n=Object(a.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return b=function(){return n},n}function d(){var n=Object(a.a)(["\n  margin-top: 16px;\n  color: red;\n"]);return d=function(){return n},n}function j(){var n=Object(a.a)(["\n  margin-top: 16px;\n  font-size: 16px;\n"]);return j=function(){return n},n}function f(){var n=Object(a.a)([""]);return f=function(){return n},n}function l(){var n=Object(a.a)(["\n  color: rgba(23, 78, 55, 0.3);\n  font-size: 14px;\n"]);return l=function(){return n},n}function p(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 4px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n"]);return p=function(){return n},n}function h(){var n=Object(a.a)(["\n  border: 1px solid black;\n  padding: 8px 16px;\n  border-radius: 8px;\n  & + & {\n    margin-top: 8px;\n  }\n"]);return h=function(){return n},n}function O(){var n=Object(a.a)(["\n  margin-top: 16px;\n"]);return O=function(){return n},n}function m(){var n=Object(a.a)(["\n  margin-top: 8px;\n"]);return m=function(){return n},n}function x(){var n=Object(a.a)(["\n  display: block;\n  width: 100%;\n"]);return x=function(){return n},n}function g(){var n=Object(a.a)(["\n  margin-top: 16px;\n"]);return g=function(){return n},n}function v(){var n=Object(a.a)(["\n  color: #333;\n"]);return v=function(){return n},n}function y(){var n=Object(a.a)(["\n  width: 360px;\n  margin: 0 auto;\n"]);return y=function(){return n},n}var w=s.b.div(y()),S=s.b.h1(v()),k=s.b.form(g()),J=s.b.textarea(x()),z=s.b.button(m()),A=s.b.div(O()),D=s.b.div(h()),E=s.b.div(p()),L=s.b.div(l()),N=s.b.div(f()),_=s.b.div(j()),B=s.b.div(d()),C=s.b.div(b());function F(n){var t=n.author,e=n.time,c=n.children;return Object(r.jsxs)(D,{children:[Object(r.jsxs)(E,{children:[Object(r.jsx)(L,{children:t}),Object(r.jsx)(N,{children:e})]}),Object(r.jsx)(_,{children:c})]})}var I=function(){var n=Object(c.useState)(null),t=Object(u.a)(n,2),e=t[0],i=t[1],o=Object(c.useState)(null),a=Object(u.a)(o,2),s=a[0],b=a[1],d=Object(c.useState)(""),j=Object(u.a)(d,2),f=j[0],l=j[1],p=Object(c.useState)(),h=Object(u.a)(p,2),O=h[0],m=h[1],x=Object(c.useState)(!1),g=Object(u.a)(x,2),v=g[0],y=g[1],D=function(){return fetch("https://student-json-api.lidemy.me/comments?_sort=createdAt&_order=desc").then((function(n){return n.json()})).then((function(n){i(n)})).catch((function(n){console.log(n.message),b(n.message)}))};return Object(c.useEffect)((function(){D()}),[]),Object(r.jsxs)(w,{children:[v&&Object(r.jsx)(C,{children:"Loading"}),Object(r.jsx)(S,{children:"\u7559\u8a00\u677f"}),Object(r.jsxs)(k,{onSubmit:function(n){n.preventDefault(),v||(y(!0),fetch("https://student-json-api.lidemy.me/comments",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:"hi",body:f})}).then((function(n){return n.json()})).then((function(n){y(!1),0!==n.ok?(l(""),D()):m(n.message)})).catch((function(n){y(!1),m(n.message)})))},children:[Object(r.jsx)(J,{value:f,onChange:function(n){l(n.target.value)},onFocus:function(n){m(null)},rows:10}),Object(r.jsx)(z,{children:"\u9001\u51fa\u7559\u8a00"}),O&&Object(r.jsxs)(B,{children:["Something went wrong. ",O]})]}),s&&Object(r.jsxs)(B,{children:["Something went wrong. ",s.toString()]}),e&&0===e.length&&Object(r.jsx)("div",{children:"No message"}),Object(r.jsx)(A,{children:e&&e.map((function(n){return Object(r.jsx)(F,{author:n.nickname,time:new Date(n.createdAt).toLocaleString(),children:n.body},n.id)}))})]})};o.a.render(Object(r.jsx)(s.a,{theme:{colors:{secondary:{300:"#3333dd",400:"#d84646",500:"#b92121"}}},children:Object(r.jsx)(I,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.ca20ba44.chunk.js.map