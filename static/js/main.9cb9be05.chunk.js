(this["webpackJsonpreact-podrobno"]=this["webpackJsonpreact-podrobno"]||[]).push([[0],[,,,function(e,t,n){e.exports={input:"Select_input__2uDKD",img:"Select_img__1X9cR",selectionBox:"Select_selectionBox__3PREX",selectItem:"Select_selectItem__1u3lQ",hoveredItem:"Select_hoveredItem__2tOJ6"}},function(e,t,n){e.exports={div:"OnOff_div__276Bv"}},,,function(e,t,n){e.exports={all:"App_all__2lp7V"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(6),r=n.n(o),l=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),c(e),o(e),r(e),l(e)}))}),i=n(2),s=n(7),a=n.n(s),u=n(0);function d(e){return console.log("AccordionTitle rendered"),Object(u.jsx)("h3",{style:{cursor:"pointer"},onClick:e.onClickCallback,children:e.titleValue})}function j(e){return console.log("AccordionBody rendered"),Object(u.jsx)("ul",{children:e.items.map((function(t,n){return Object(u.jsx)("li",{onClick:function(){return e.onClick(t.value)},children:t.title},n)}))})}var b=function(e){return console.log("Accordion rendered"),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{titleValue:e.titleValue,collapsed:e.collapsed,onClickCallback:e.onClickCallback}),!e.collapsed&&Object(u.jsx)(j,{onClick:e.onClick,items:e.items})]})};function O(e){console.log("Rating rendered");for(var t=[],n=0;n<5;n++)t.push(Object(u.jsx)(h,{id:n+1,onClick:e.onClick,selected:e.value>n}));return Object(u.jsxs)("div",{children:[" ",t," "]})}function h(e){return console.log("star rendered"),Object(u.jsx)("span",{style:{cursor:"pointer"},onClick:function(){return e.onClick(e.id)},children:e.selected?Object(u.jsx)("b",{children:"star "}):"star "})}var x=n(4),p=n.n(x);function f(e){var t={cursor:"pointer",border:"1px solid black",width:"30px",height:"30px",backgroundColor:e.on?"green":"white"},n={cursor:"pointer",border:"1px solid black",width:"30px",height:"30px",backgroundColor:e.on?"white":"red"},c={border:"1px solid black",width:"15px",height:"15px",marginLeft:"5px",backgroundColor:e.on?"green":"red",borderRadius:"50%"};return Object(u.jsxs)("div",{className:p.a.div,children:[Object(u.jsx)("div",{style:t,onClick:function(){e.setOn(!0)},children:"On"}),Object(u.jsx)("div",{style:n,onClick:function(){e.setOn(!1)},children:"Off"}),Object(u.jsx)("div",{style:c})]})}function v(e){console.log("UncontrolledRating rendered");for(var t=Object(c.useState)(e.defaultValue?e.defaultValue:0),n=Object(i.a)(t,2),o=n[0],r=n[1],l=[],s=0;s<5;s++)l.push(Object(u.jsx)(g,{id:s+1,setValue:r,selected:o>s}));return Object(u.jsxs)("div",{children:[" ",l," "]})}function g(e){return console.log("star rendered"),Object(u.jsx)("span",{style:{cursor:"pointer"},onClick:function(){return e.setValue(e.id)},children:e.selected?Object(u.jsx)("b",{children:"star "}):"star "})}var k="TOGGLE_COLLAPSED",m=function(e,t){if(t.type===k)return{collapsed:!e.collapsed};throw new Error("error type of action")};function C(e){return console.log("UncontrolledAccordionTitle rendered"),Object(u.jsx)("h3",{style:{cursor:"pointer"},onClick:e.onClick,children:e.titleValue})}function w(){return console.log("UncontrolledAccordionBody rendered"),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"1"}),Object(u.jsx)("li",{children:"2"}),Object(u.jsx)("li",{children:"3"})]})}var y=function(e){console.log("UncontrolledAccordion rendered");var t=Object(c.useReducer)(m,{collapsed:!1}),n=Object(i.a)(t,2),o=n[0],r=n[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(C,{titleValue:e.titleValue,onClick:function(){return r({type:k})}}),!o.collapsed&&Object(u.jsx)(w,{})]})};function _(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),o=n[0],r=n[1],l={cursor:"pointer",border:"1px solid black",width:"30px",height:"30px",backgroundColor:o?"green":"white"},s={cursor:"pointer",border:"1px solid black",width:"30px",height:"30px",backgroundColor:o?"white":"red"},a={border:"1px solid black",width:"15px",height:"15px",marginLeft:"5px",backgroundColor:o?"green":"red",borderRadius:"50%"};return Object(u.jsxs)("div",{className:p.a.div,children:[Object(u.jsx)("div",{style:l,onClick:function(){r(!0),e.onOrOff(!0)},children:"On"}),Object(u.jsx)("div",{style:s,onClick:function(){r(!1),e.onOrOff(!1)},children:"Off"}),Object(u.jsx)("div",{style:a})]})}var A=n(3),S=n.n(A);function V(e){console.log("Select rendering");var t=Object(c.useState)(!0),n=Object(i.a)(t,2),o=n[0],r=n[1],l=Object(c.useState)(e.value),s=Object(i.a)(l,2),a=s[0],d=s[1],j=e.items.find((function(t){return t.value===e.value}));return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:S.a.input,onClick:function(){return r(!o)},onKeyDown:function(t){if("Enter"===t.key||"Escape"===t.key)r(!0);else if("ArrowDown"===t.key||"ArrowUp"===t.key)for(var n=0;n<e.items.length;n++)if(e.items[n].value===a||"none"===a){if("none"===a||"ArrowDown"===t.key&&n===e.items.length-1||"ArrowUp"===t.key&&0===n){"ArrowDown"===t.key?d(e.items[0].value):d(e.items[e.items.length-1].value),"ArrowDown"===t.key?e.onChange(e.items[0].value):e.onChange(e.items[e.items.length-1].value);break}"ArrowDown"===t.key?d(e.items[n+1].value):d(e.items[n-1].value),"ArrowDown"===t.key?e.onChange(e.items[n+1].value):e.onChange(e.items[n-1].value);break}},tabIndex:0,children:[(null===j||void 0===j?void 0:j.title)||e.value,Object(u.jsx)("img",{className:S.a.img,src:"https://image.flaticon.com/icons/png/512/36/36751.png"})]}),Object(u.jsx)("div",{className:S.a.selectionBox,children:!o&&e.items.map((function(t){return Object(u.jsx)("div",{onMouseEnter:function(){return d(t.value)},onClick:function(){return n=t.value,e.onChange(n),void r(!o);var n},className:S.a.selectItem+" "+(a===t.value?S.a.hoveredItem:""),children:t.title},t.value)}))})]})}function D(e){return Object(u.jsx)("h1",{children:e.title})}var I=function(){console.log("App is rendering");var e=Object(c.useState)(3),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(!0),l=Object(i.a)(r,2),s=l[0],d=l[1],j=Object(c.useState)(!1),h=Object(i.a)(j,2),x=h[0],p=h[1],g=Object(c.useState)("none"),k=Object(i.a)(g,2),m=k[0],C=k[1],w=[{title:"olga",value:1},{title:"anna",value:2},{title:"john",value:3},{title:"nick",value:4}];return Object(u.jsxs)("div",{className:a.a.all,children:[Object(u.jsx)(D,{title:"Main page"}),Object(u.jsx)(f,{on:x,setOn:p}),Object(u.jsx)(_,{onOrOff:p}),x.toString(),Object(u.jsx)(O,{value:n,onClick:o}),Object(u.jsx)(v,{}),Object(u.jsx)(b,{onClick:function(){return console.log("onClick callback in App")},items:w,titleValue:"Menu",collapsed:s,onClickCallback:function(){return d(!s)}}),Object(u.jsx)(y,{titleValue:"Menu Uncontrolled"}),Object(u.jsx)(V,{value:m,onChange:C,items:w})]})};r.a.render(Object(u.jsx)(I,{}),document.getElementById("root")),l()}],[[14,1,2]]]);
//# sourceMappingURL=main.9cb9be05.chunk.js.map