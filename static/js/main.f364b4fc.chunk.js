(this.webpackJsonpgooglebooks=this.webpackJsonpgooglebooks||[]).push([[0],{38:function(e,t,a){e.exports=a(69)},47:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),o=a(7),i=a(12),s=a(30),u=a(11),m={loading:!1},d={books:[]},f={query:""},E=Object(i.b)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHED_BOOKS":return{books:e.books.concat(t.payload)};default:return e}},query:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_QUERY_INPUT":return Object(u.a)({},e,{query:t.payload});default:return e}},loader:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_LOADER":return Object(u.a)({},e,{loading:!0});case"HIDE_LOADER":return Object(u.a)({},e,{loading:!1});default:return e}}}),v=Object(i.d)(E,Object(i.c)(Object(i.a)(s.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),p=a(16),g=(a(47),a(77)),b=(a(48),a(31)),h=a(70),k=a(71),y=a(72),O=a(18),N=a.n(O),w=a(32);var j=a(33);function x(){var e=Object(j.a)(['\n  &:after {\n    background-color: rgba(0, 0, 0, 0.4);\n    content: "";\n    display: block;\n    height: 100%;\n    left: 0;\n    top: 0;\n    position: absolute;\n    width: 100%;\n    z-index: 1;\n  }\n']);return x=function(){return e},e}var _=a(34).a.div(x()),I=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.query.query}));return r.a.createElement("div",{className:"main-image d-flex justify-content-center align-items-center flex-column"},r.a.createElement(_,null),r.a.createElement("h1",{className:"display-2 text-center text-white mb-3",style:{zIndex:2}},"Google Books"),r.a.createElement("div",{style:{width:"60%",zIndex:2}},r.a.createElement(h.a,{size:"lg",className:"mb-3"},r.a.createElement(k.a,{placeholder:"Book Search",value:t,onChange:function(t){return e((a=t.target.value,console.log(a),{type:"ADD_QUERY_INPUT",payload:a}));var a}}),r.a.createElement(y.a,{className:"button",color:"secondary",onClick:function(){return e(function(e){return function(){var t=Object(w.a)(N.a.mark((function t(a){var n,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"SHOW_LOADER"}),t.next=4,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"&maxResults=40&startIndex=1"));case 4:if((n=t.sent).ok){t.next=7;break}throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430");case 7:return t.next=9,n.json();case 9:r=t.sent,a({type:"FETCHED_BOOKS",payload:r.items}),a({type:"HIDE_LOADER"}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()}(t))}},r.a.createElement("i",{className:"fas fa-search"})))),r.a.createElement(b.ToastContainer,null))},L=a(15),C=a.n(L),D=function(e){var t=e.itemsCount,a=e.pageSize,n=e.onPageChange,l=e.currentPage,c=Math.ceil(t/a),o=C.a.range(1,c+1);return 1===c?null:r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},o.map((function(e){return r.a.createElement("li",{style:{cursor:"pointer"},key:e,className:"page-item "+(e===l?"active":"")},r.a.createElement("a",{className:"page-link",onClick:function(){n(e)}},e))}))))};var S=a(73),P=a(74),R=a(75),T=a(76),A=a(78),q=function(e){var t=e.thumbnail,a=e.title,l=e.pageCount,c=e.language,o=e.description,i=e.authors,s=e.publisher,u=e.previewLink,m=e.infoLink,d=Object(n.useState)(!1),f=Object(p.a)(d,2),E=f[0],v=f[1],g=function(){return v(!E)};return r.a.createElement(S.a,{style:{width:"233px"},className:"m-auto "},r.a.createElement(P.a,{top:!0,style:{width:"100%",height:"233px"},src:t,alt:a}),r.a.createElement(R.a,null,r.a.createElement(T.a,{className:"card-title"},a),r.a.createElement(y.a,{onClick:g},"More info")),r.a.createElement(A.a,{isOpen:E,toggle:g},r.a.createElement("div",{className:"modal-header d-flex justify-content-center"},r.a.createElement("h5",{className:"modal-title text-center",id:"exampleModalLabel"},a),r.a.createElement("button",{"aria-label":"Close",className:"close",type:"button",onClick:g},r.a.createElement("span",{"aria-hidden":!0},"X"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"d-flex justify-content-between ml-3"},r.a.createElement("img",{src:t,alt:a,style:{height:"233px"}}),r.a.createElement("div",null,r.a.createElement("p",null,"Page Count: ",l),r.a.createElement("p",null,"Language : ",c),r.a.createElement("p",null,"Authors : ",i),r.a.createElement("p",null,"Publisher : ",s))),r.a.createElement("div",{className:"mt-3"},o)),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("div",{className:"left-silde"},r.a.createElement("a",{href:u,className:"btn-link",color:"default",type:"button",target:"_blank",rel:"noopener noreferrer"},"Preview Link")),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:"right-silde"},r.a.createElement("a",{href:m,className:"btn-link",color:"default",type:"button",target:"_blank",rel:"noopener noreferrer"},"Info Link")))))};var z=function(){var e=Object(o.c)((function(e){return e.books.books})),t=Object(o.c)((function(e){return e.loader.loading})),a=Object(n.useState)(1),l=Object(p.a)(a,2),c=l[0],i=l[1];Object(n.useEffect)((function(){i(1)}),[e]);var s=function(e,t,a){var n=(t-1)*a;return C()(e).slice(n).take(a).value()}(e,c,9);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w-100 h-100"},r.a.createElement(I,null),function(){if(t)return r.a.createElement("div",{className:"d-flex justify-content-center mt-3"},r.a.createElement(g.a,{style:{width:"3rem",height:"3rem"}}));var e=s.map((function(e,t){var a="";return e.volumeInfo.imageLinks&&(a=e.volumeInfo.imageLinks.thumbnail),r.a.createElement("div",{className:"col-lg-4 mb-3",key:e.id},r.a.createElement(q,{thumbnail:a,title:e.volumeInfo.title,pageCount:e.volumeInfo.pageCount,language:e.volumeInfo.language,authors:e.volumeInfo.authors,publisher:e.volumeInfo.publisher,description:e.volumeInfo.description,previewLink:e.volumeInfo.previewLink,infoLink:e.volumeInfo.infoLink}))}));return r.a.createElement("div",{className:"container my-5"},r.a.createElement("div",{className:"row"},e))}(),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(D,{pageSize:9,currentPage:c,itemsCount:e.length,onPageChange:function(e){i(e)}}))))},H=function(){return r.a.createElement(z,null)};c.a.render(r.a.createElement(o.a,{store:v},r.a.createElement(H,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.f364b4fc.chunk.js.map