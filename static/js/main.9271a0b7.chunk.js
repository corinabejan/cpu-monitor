(this["webpackJsonpcpu-monitor-fe"]=this["webpackJsonpcpu-monitor-fe"]||[]).push([[0],{195:function(e,t,n){},196:function(e,t,n){},220:function(e,t,n){},399:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(1),s=n(56),i=n.n(s),o=(n(195),n(196),n(19)),a=function(){var e=Object(o.b)().loginWithRedirect,t=Object(o.b)();return console.log(t),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("button",{onClick:function(){return e()},children:"Log In"})})},j=n(87),d=n.n(j),u=n(149),b=n(160),l=n(150),h=n.n(l),O=(n(220),n(0)),x=n.n(O),p=n(11);function m(e){var t=e.info.cores.map((function(e,t){return{index:t,value:e}}));return console.log(t),Object(c.jsxs)(p.d,{width:730,height:250,data:t,margin:{top:5,right:30,left:20,bottom:5},children:[Object(c.jsx)(p.f,{dataKey:"index",type:"number"}),Object(c.jsx)(p.g,{}),Object(c.jsx)(p.a,{strokeDasharray:"3 3"}),Object(c.jsx)(p.e,{}),Object(c.jsx)(p.b,{verticalAlign:"top",height:36}),Object(c.jsx)(p.c,{type:"monotone",dataKey:"value",stroke:"red",name:"CPU1"}),Object(c.jsx)(p.c,{type:"monotone",dataKey:"value",stroke:"blue",name:"CPU2"}),Object(c.jsx)(p.c,{type:"monotone",dataKey:"value",stroke:"purple",name:"CPU3"}),Object(c.jsx)(p.c,{type:"monotone",dataKey:"value",stroke:"indigo",name:"CPU4"}),Object(c.jsx)(p.c,{type:"monotone",dataKey:"value",stroke:"orange",name:"CPU5"}),Object(c.jsx)(p.c,{type:"monotone",dataKey:"value",stroke:"green",name:"CPU6"}),Object(c.jsx)(p.c,{type:"monotone",dataKey:"value",stroke:"black",name:"CPU7"}),Object(c.jsx)(p.c,{type:"monotone",dataKey:"value",stroke:"pink",name:"CPU8"})]})}function f(){var e=Object(r.useState)({}),t=Object(b.a)(e,2),n=t[0],s=t[1],i=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/info");case 2:t=e.sent,n=t.data.cpuInfo,s(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){setInterval((function(){i()}),100)}),[]);var o=n.cores?Object(c.jsxs)("div",{children:[Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{id:"cpu1",children:"CPU1:"}),"  ",n.cores[0]]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{id:"cpu2",children:"CPU2:"}),"  ",n.cores[1]]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{id:"cpu3",children:"CPU3:"}),"  ",n.cores[2]]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{id:"cpu4",children:"CPU4:"}),"  ",n.cores[3]]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{id:"cpu5",children:"CPU5:"}),"  ",n.cores[4]]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{id:"cpu6",children:"CPU6:"}),"  ",n.cores[5]]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{id:"cpu7",children:"CPU7:"}),"  ",n.cores[6]]}),Object(c.jsxs)("h4",{children:[Object(c.jsx)("span",{id:"cpu8",children:"CPU8:"}),"  ",n.cores[7]]})]}):"loading";return Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["Minimum speed: ",Object(c.jsx)("strong",{children:n.min})]}),Object(c.jsxs)("p",{children:["Maximum speed: ",Object(c.jsx)("strong",{children:n.max})]}),Object(c.jsxs)("p",{children:["Average speed: ",Object(c.jsx)("strong",{children:n.avg})]}),Object(c.jsx)("div",{children:o}),n.cores?Object(c.jsx)(m,{info:n}):"Loading Graph"]})}p.d.propTypes={data:x.a.array.isRequired,width:x.a.number,height:x.a.number,margin:x.a.object};var g=function(){var e=Object(o.b)().logout;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:function(){return e()},children:"Log Out"}),Object(c.jsx)(f,{})]})};var v=function(){var e=Object(o.b)().user;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"CPU MONITOR"}),e?Object(c.jsx)(g,{}):Object(c.jsx)(a,{})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,401)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))},y=n(8),P=function(e){var t=e.children,n=Object(y.d)();return Object(c.jsx)(o.a,{domain:"dev-q824wfga.eu.auth0.com",clientId:"8fBEWWEadadQgJEU3J4V0nY5dCwS1XSF",redirectUri:window.location.origin,onRedirectCallback:function(e){n.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},children:t})},U=n(86);i.a.render(Object(c.jsx)(U.a,{children:Object(c.jsx)(P,{children:Object(c.jsx)(v,{})})}),document.getElementById("root")),C()}},[[399,1,2]]]);
//# sourceMappingURL=main.9271a0b7.chunk.js.map