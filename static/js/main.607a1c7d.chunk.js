(this["webpackJsonpreact-podrobno"]=this["webpackJsonpreact-podrobno"]||[]).push([[0],[,,,function(e,t,n){e.exports={input:"Select_input__2uDKD",img:"Select_img__1X9cR",selectionBox:"Select_selectionBox__3PREX",selectItem:"Select_selectItem__1u3lQ",hoveredItem:"Select_hoveredItem__2tOJ6"}},function(e,t,n){e.exports={div:"OnOff_div__276Bv"}},,,function(e,t,n){e.exports={all:"App_all__2lp7V"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),c=n(6),l=n.n(c),i=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),o(e),r(e),c(e),l(e)}))}),a=n(2),s=n(7),u=n.n(s),d=n(0);function j(e){return console.log("Accordion rendered"),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{titleValue:e.titleValue,collapsed:e.collapsed,onClickCallback:e.onClickCallback}),!e.collapsed&&Object(d.jsx)(m,{onClick:e.onClick,items:e.items})]})}var b=r.a.memo(j);function O(e){return console.log("AccordionTitle rendered"),Object(d.jsx)("h3",{style:{cursor:"pointer"},onClick:e.onClickCallback,children:e.titleValue})}var h=r.a.memo(O);function v(e){return console.log("AccordionBody rendered"),Object(d.jsx)("ul",{children:e.items.map((function(t,n){return Object(d.jsx)("li",{onClick:function(){return e.onClick(t.value)},children:t.title},n)}))})}var m=r.a.memo(v),x=b;function p(e){console.log("Rating rendered");for(var t=[],n=0;n<5;n++)t.push(Object(d.jsx)(k,{id:n+1,onClick:e.onClick,selected:e.value>n}));return Object(d.jsxs)("div",{children:[" ",t," "]})}var f=r.a.memo(p);function g(e){return console.log("star rendered"),Object(d.jsx)("span",{style:{cursor:"pointer"},onClick:function(){return e.onClick(e.id)},children:e.selected?Object(d.jsx)("b",{children:"star "}):"star "})}var k=r.a.memo(g),C=n(4),w=n.n(C);function y(e){var t={cursor:"pointer",border:"1px solid black",width:"30px",height:"30px",backgroundColor:e.on?"green":"white"},n={cursor:"pointer",border:"1px solid black",width:"30px",height:"30px",backgroundColor:e.on?"white":"red"},o={border:"1px solid black",width:"15px",height:"15px",marginLeft:"5px",backgroundColor:e.on?"green":"red",borderRadius:"50%"};return Object(d.jsxs)("div",{className:w.a.div,children:[Object(d.jsx)("div",{style:t,onClick:function(){e.setOn(!0)},children:"On"}),Object(d.jsx)("div",{style:n,onClick:function(){e.setOn(!1)},children:"Off"}),Object(d.jsx)("div",{style:o})]})}var _=r.a.memo(y);function A(e){console.log("UncontrolledRating rendered");for(var t=Object(o.useState)(e.defaultValue?e.defaultValue:0),n=Object(a.a)(t,2),r=n[0],c=n[1],l=[],i=0;i<5;i++)l.push(Object(d.jsx)(D,{id:i+1,setValue:c,selected:r>i}));return Object(d.jsxs)("div",{children:[" ",l," "]})}var S=r.a.memo(A);function V(e){return console.log("star rendered"),Object(d.jsx)("span",{style:{cursor:"pointer"},onClick:function(){return e.setValue(e.id)},children:e.selected?Object(d.jsx)("b",{children:"star "}):"star "})}var D=r.a.memo(V),I="TOGGLE_COLLAPSED",B=function(e,t){if(t.type===I)return{collapsed:!e.collapsed};throw new Error("error type of action")};function E(e){console.log("UncontrolledAccordion rendered");var t=Object(o.useReducer)(B,{collapsed:!1}),n=Object(a.a)(t,2),r=n[0],c=n[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(R,{titleValue:e.titleValue,onClick:function(){return c({type:I})}}),!r.collapsed&&Object(d.jsx)(F,{})]})}var L=r.a.memo(E);function N(e){return console.log("UncontrolledAccordionTitle rendered"),Object(d.jsx)("h3",{style:{cursor:"pointer"},onClick:e.onClick,children:e.titleValue})}var R=r.a.memo(N);function U(){return console.log("UncontrolledAccordionBody rendered"),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"1"}),Object(d.jsx)("li",{children:"2"}),Object(d.jsx)("li",{children:"3"})]})}var F=r.a.memo(U),T=L;function M(e){var t=Object(o.useState)(!1),n=Object(a.a)(t,2),r=n[0],c=n[1],l={cursor:"pointer",border:"1px solid black",width:"30px",height:"30px",backgroundColor:r?"green":"white"},i={cursor:"pointer",border:"1px solid black",width:"30px",height:"30px",backgroundColor:r?"white":"red"},s={border:"1px solid black",width:"15px",height:"15px",marginLeft:"5px",backgroundColor:r?"green":"red",borderRadius:"50%"};return Object(d.jsxs)("div",{className:w.a.div,children:[Object(d.jsx)("div",{style:l,onClick:function(){c(!0),e.onOrOff(!0)},children:"On"}),Object(d.jsx)("div",{style:i,onClick:function(){c(!1),e.onOrOff(!1)},children:"Off"}),Object(d.jsx)("div",{style:s})]})}var P=r.a.memo(M),J=n(3),G=n.n(J);function K(e){console.log("Select rendering");var t=Object(o.useState)(!0),n=Object(a.a)(t,2),r=n[0],c=n[1],l=Object(o.useState)(e.value),i=Object(a.a)(l,2),s=i[0],u=i[1],j=e.items.find((function(t){return t.value===e.value}));return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:G.a.input,onClick:function(){return c(!r)},onKeyDown:function(t){if("Enter"===t.key||"Escape"===t.key)c(!0);else if("ArrowDown"===t.key||"ArrowUp"===t.key)for(var n=0;n<e.items.length;n++)if(e.items[n].value===s||"none"===s){if("none"===s||"ArrowDown"===t.key&&n===e.items.length-1||"ArrowUp"===t.key&&0===n){"ArrowDown"===t.key?u(e.items[0].value):u(e.items[e.items.length-1].value),"ArrowDown"===t.key?e.onChange(e.items[0].value):e.onChange(e.items[e.items.length-1].value);break}"ArrowDown"===t.key?u(e.items[n+1].value):u(e.items[n-1].value),"ArrowDown"===t.key?e.onChange(e.items[n+1].value):e.onChange(e.items[n-1].value);break}},tabIndex:0,children:[(null===j||void 0===j?void 0:j.title)||e.value,Object(d.jsx)("img",{className:G.a.img,src:"https://image.flaticon.com/icons/png/512/36/36751.png"})]}),Object(d.jsx)("div",{className:G.a.selectionBox,children:!r&&e.items.map((function(t){return Object(d.jsx)("div",{onMouseEnter:function(){return u(t.value)},onClick:function(){return n=t.value,e.onChange(n),void c(!r);var n},className:G.a.selectItem+" "+(s===t.value?G.a.hoveredItem:""),children:t.title},t.value)}))})]})}var X=r.a.memo(K);function Q(e){return Object(d.jsx)("h1",{children:e.title})}var q=function(){console.log("App is rendering");var e=Object(o.useState)(3),t=Object(a.a)(e,2),n=t[0],r=t[1],c=Object(o.useState)(!0),l=Object(a.a)(c,2),i=l[0],s=l[1],j=Object(o.useState)(!1),b=Object(a.a)(j,2),O=b[0],h=b[1],v=Object(o.useState)("none"),m=Object(a.a)(v,2),p=m[0],g=m[1],k=[{title:"olga",value:1},{title:"anna",value:2},{title:"john",value:3},{title:"nick",value:4}];return Object(d.jsxs)("div",{className:u.a.all,children:[Object(d.jsx)(Q,{title:"Main page"}),Object(d.jsx)(_,{on:O,setOn:h}),Object(d.jsx)(P,{onOrOff:h}),O.toString(),Object(d.jsx)(f,{value:n,onClick:r}),Object(d.jsx)(S,{}),Object(d.jsx)(x,{onClick:function(){return console.log("onClick callback in App")},items:k,titleValue:"Menu",collapsed:i,onClickCallback:function(){return s(!i)}}),Object(d.jsx)(T,{titleValue:"Menu Uncontrolled"}),Object(d.jsx)(X,{value:p,onChange:g,items:k})]})};l.a.render(Object(d.jsx)(q,{}),document.getElementById("root")),i()}],[[14,1,2]]]);
//# sourceMappingURL=main.607a1c7d.chunk.js.map