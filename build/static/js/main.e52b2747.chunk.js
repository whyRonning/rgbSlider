(this.webpackJsonpslider=this.webpackJsonpslider||[]).push([[0],{33:function(e,n,t){"use strict";t.r(n);var o,r,c,a,i=t(0),u=t.n(i),l=t(9),s=t.n(l),b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),o(e),r(e),c(e),a(e)}))},d=t(11),g=t(5),m=t(14),h=t(2),p={textColor:[255,255,255],backgroundColor:[0,0,0]},C=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.b,j=Object(g.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"textColor":var t=Object(h.a)(Object(h.a)({},e),{},{textColor:Object(m.a)(e.textColor)});return t.textColor[n.color]=n.number,Object(h.a)({},t);case"backgroundColor":var o=Object(h.a)(Object(h.a)({},e),{},{backgroundColor:Object(m.a)(e.backgroundColor)});return o.backgroundColor[n.color]=n.number,Object(h.a)({},o);default:return e}}),C()),k=t(20),f=t(7),x=t(8),O=t(1),v=x.a.button(o||(o=Object(f.a)(["\n  ","\n"])),(function(e){return e.field===e.type?"background-color:blue;color:white;":"background-color:white;color:black"})),w=x.a.input(r||(r=Object(f.a)(["\n        overflow: hidden;\n        width: 22vw;\n        border:1px solid black;\n        -webkit-appearance: none;\n        background-color:white;\n        &::-webkit-slider-runnable-track {\n          height: 1.8vh;\n          -webkit-appearance: none;\n          color: #13bba4;\n          margin-top: -1px;\n        }\n        &::-webkit-slider-thumb {\n          width: 20px;\n          -webkit-appearance: none;\n          height: 22vh;\n          cursor: ew-resize;border:2px solid black;\n          background:",";\n          box-shadow: -22vw 0 0 22vw ",";\n         }\n"])),(function(e){return e.color}),(function(e){return e.color})),y=x.a.div(c||(c=Object(f.a)(["\n        width:36vw;\n        background-color:","\n"])),(function(e){return"rgb("+e.color+")"})),E=x.a.p(a||(a=Object(f.a)(["\n  color:","\n"])),(function(e){return"rgb("+e.color+")"})),F=function(e){var n=Object(i.useState)("color"),t=Object(k.a)(n,2),o=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsxs)("fieldset",{children:[Object(O.jsx)("legend",{children:"Select:"}),Object(O.jsx)(v,{type:"color",onClick:function(){r("color")},field:o,children:"color"}),Object(O.jsx)(v,{type:"background",onClick:function(){r("background")},field:o,children:"backgroundColor"})]}),Object(O.jsx)(w,{type:"range",min:"0",max:"250",color:"red",step:"1",value:"background"===o?e.backgroundColor[0]:e.textColor[0],onChange:function(n){e.ChangeRange(o,0,n)}}),Object(O.jsx)(w,{type:"range",min:"0",max:"250",color:"green",step:"1",value:"background"===o?e.backgroundColor[1]:e.textColor[1],onChange:function(n){e.ChangeRange(o,1,n)}}),Object(O.jsx)(w,{type:"range",min:"0",max:"250",color:"blue",step:"1",value:"background"===o?e.backgroundColor[2]:e.textColor[2],onChange:function(n){e.ChangeRange(o,2,n)}}),Object(O.jsx)(y,{color:e.backgroundColor,children:Object(O.jsx)(E,{color:e.textColor,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean posuere nibh ac pharetra efficitur. In consectetur lorem vitae consequat aliquam. Fusce arcu elit, dignissim blandit finibus in, ornare et ipsum. Fusce efficitur lacinia fermentum. Etiam risus ipsum, hendrerit vel mi non, malesuada hendrerit sapien. Nulla ex elit, rhoncus et arcu nec, dignissim pretium risus. In hac habitasse platea dictumst. Duis elementum tristique luctus. Aenean rhoncus metus a dignissim cursus. Duis sapien elit, pharetra in pretium et, tempus sit amet risus. Ut sit amet fermentum magna. Fusce eleifend porta nulla vitae cursus. Mauris maximus sit amet diam in volutpat. Quisque auctor mollis risus, ut elementum libero aliquam lacinia. Vestibulum enim sapien, auctor porta neque vitae, fringilla consectetur ipsum. Integer consectetur sagittis erat in mollis."})})]})},S=Object(d.b)((function(e){return{backgroundColor:e.backgroundColor,textColor:e.textColor}}),{TextColorAC:function(e,n){return{type:"textColor",color:e,number:n}},BackgroundColorAC:function(e,n){return{type:"backgroundColor",color:e,number:n}}})((function(e){return Object(O.jsx)(F,Object(h.a)({ChangeRange:function(n,t,o){"background"===n?e.BackgroundColorAC(t,o.target.value):e.TextColorAC(t,o.target.value)}},e))})),_=function(){s.a.render(Object(O.jsx)(u.a.StrictMode,{children:Object(O.jsx)(d.a,{store:j,children:Object(O.jsx)(S,{})})}),document.getElementById("root"))};_(),j.subscribe((function(){_()})),b()}},[[33,1,2]]]);
//# sourceMappingURL=main.e52b2747.chunk.js.map