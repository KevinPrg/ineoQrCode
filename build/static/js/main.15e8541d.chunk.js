(this.webpackJsonpineoqrcode=this.webpackJsonpineoqrcode||[]).push([[0],{22:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),d=n(14),r=n.n(d),i=(n(22),n(8),n(3)),u=n.n(i),o=n(5),l=n(2),j=n(15),b=n.n(j),x=n(16),O=n(9),h=Object(c.createContext)(),p=function(e){var t=e.children,n=Object(c.useState)(""),s=Object(l.a)(n,2),d=s[0],r=s[1],i=Object(c.useState)(""),u=Object(l.a)(i,2),o=u[0],j=u[1],b=Object(c.useState)(""),x=Object(l.a)(b,2),O=x[0],p=x[1],m=Object(c.useState)(""),v=Object(l.a)(m,2),f=v[0],g=v[1],C=Object(c.useState)([]),I=Object(l.a)(C,2),N=I[0],D=I[1];return Object(a.jsx)("div",{children:Object(a.jsx)(h.Provider,{value:{data1:d,setData1:r,data2:o,setData2:j,data3:O,setData3:p,indexInput:f,setIndexInput:g,result:N,setResult:D},children:t})})},m=function(e){var t=Object(c.useContext)(h),n=function(e){"data1"===e.target.name&&t.setData1(e.target.value),"data2"===e.target.name&&t.setData2(e.target.value),"data3"===e.target.name&&t.setData3(e.target.value)},s=function(){e.index!==t.indexInput&&(t.setData1(""),t.setData2(""),t.setData3("")),t.indexInput!==e.index&&t.setIndexInput(e.index)},d=function(){var n=Object(o.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.setIndexInput(e.index),t.result[t.indexInput]&&(t.setData1(t.result[e.index].data1),t.setData2(t.result[e.index].data2),t.setData3(t.result[e.index].data3));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"contain",children:[Object(a.jsxs)("p",{children:["poteau num\xe9ro ",e.index+1,": "]}),Object(a.jsxs)("div",{className:"separator",children:[Object(a.jsxs)("div",{className:"inputs",children:[Object(a.jsxs)("div",{className:"inputSolo",children:[Object(a.jsx)("label",{htmlFor:"chamber"+e.index,children:"num\xe9ro de chambre: "}),Object(a.jsx)("input",{id:"chamber"+e.index,name:"data1",type:"text",placeholder:"",value:t.indexInput===e.index?t.data1:"",onChange:n,onClick:function(){return s()}})]}),Object(a.jsxs)("div",{className:"inputSolo",children:[Object(a.jsx)("label",{htmlFor:"insee"+e.index,children:"code INSEE: "}),Object(a.jsx)("input",{id:"insee"+e.index,name:"data2",type:"text",placeholder:"",value:t.indexInput===e.index?t.data2:"",onChange:n,onClick:function(){return s()}})]}),Object(a.jsxs)("div",{className:"inputSolo",children:[Object(a.jsx)("label",{htmlFor:"poteau"+e.index,children:"num\xe9ro poteau: "}),Object(a.jsx)("input",{id:"poteau"+e.index,name:"data3",type:"text",placeholder:"",value:t.indexInput===e.index?t.data3:"",onChange:n,onClick:function(){return s()}})]})]}),Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("button",{onClick:function(){return console.log(t.result.length,e.index),e.index===t.indexInput&&t.result.length===e.index&&(t.result[t.indexInput]?t.setResult(t.result.map((function(e){return t.result[t.indexInput]===e?Object(O.a)(Object(O.a)({},e),{},{data3:t.data3,data2:t.data2,data1:t.data1}):e}))):t.setResult([].concat(Object(x.a)(t.result),[{data3:t.data3,data2:t.data2,data1:t.data1}]))),t.setData1(""),t.setData2(""),void t.setData3("")},children:"valider"}),Object(a.jsx)("button",{onClick:function(){return d()},children:"modifier"})]})]}),Object(a.jsx)("div",{className:"saveResults",children:t.result[e.index]&&Object(a.jsxs)("div",{className:"results",children:[Object(a.jsx)("p",{children:"donn\xe9es sauvegard\xe9es: "}),Object(a.jsxs)("p",{children:["num\xe9ro de chambre: ",t.result[e.index].data1,"  "]}),Object(a.jsxs)("p",{children:["code INSEE: ",t.result[e.index].data2,"  "]}),Object(a.jsxs)("p",{children:["num\xe9ro poteau: ",t.result[e.index].data3]})]})})]})},v=function(){var e=Object(c.useContext)(h),t=Object(c.useState)(!1),n=Object(l.a)(t,2),s=n[0],d=n[1],r=Object(c.useState)(!1),i=Object(l.a)(r,2),j=i[0],x=i[1],O=Object(c.useState)(""),p=Object(l.a)(O,2),v=p[0],f=p[1],g=Object(c.useState)(null),C=Object(l.a)(g,2),I=C[0],N=C[1],D=Object(c.useState)(""),S=Object(l.a)(D,2),k=S[0],y=S[1],E=[],w=function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(E=[],t=0;t<v;t++)E.push(Object(a.jsx)(m,{index:t}));d(!s),N(E);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"numberInputs",children:["nombre de champs: ",Object(a.jsx)("input",{value:v,onChange:function(e){f(e.target.value)}})," ",Object(a.jsx)("button",{onClick:function(){return w()},children:"valider"})]}),!0===s&&Object(a.jsx)("div",{children:I.map((function(e,t){return Object(a.jsx)("div",{children:e},t)}))}),Object(a.jsxs)("div",{className:"generateCode",children:[!0===j&&Object(a.jsxs)("div",{className:"code",children:[Object(a.jsx)(b.a,{id:"qrCode",value:k,size:500,level:"M"}),Object(a.jsx)("button",{className:"download",onClick:function(){var e=document.getElementById("qrCode").toDataURL("image/png").replace("image/png","image/octet-stream"),t=document.createElement("a");t.href=e,t.download="qrCode.png",document.body.appendChild(t),t.click(),document.body.removeChild(t)},children:" Telecharger ce QR code "})]}),Object(a.jsx)("button",{onClick:function(){return function(){x(!j);for(var t=[],n=1,a=0;a<e.result.length;a++)t.push(" [Donn\xe9es ".concat(n,": \n Num\xe9ro de chambre: ").concat(e.result[a].data1," \n Code INSEE: ").concat(e.result[a].data2," \n Num\xe9ro de poteau: ").concat(e.result[a].data3,"] \n\n")),n+=1;y(t.join(""))}()},children:"g\xe9n\xe9rer le QR Code"})]})]})};var f=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(v,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,d=t.getTTFB;n(e),a(e),c(e),s(e),d(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(p,{children:Object(a.jsx)(f,{})})}),document.getElementById("root")),g()},8:function(e,t,n){}},[[32,1,2]]]);
//# sourceMappingURL=main.15e8541d.chunk.js.map