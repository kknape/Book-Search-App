(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){},36:function(e,t,a){e.exports=a(70)},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),c=a.n(l),o=a(6),s=a(17),i=a.n(s),m=a(32),u=a(10),d=a(11),h=a(13),f=a(12),v=a(14);var E=function(e){var t=e.children;return r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},b=a(9),p=a.n(b),g={getBooks:function(e){return p.a.get("/api/search",{params:{q:"title:"+e}})},getSavedBooks:function(){return p.a.get("/api/books")},saveBook:function(e){return p.a.post("/api/books",e)},deleteBook:function(e){return p.a.delete("/api/books/"+e)}};a(60);var k=function(e){return r.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"Delete")};function N(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function S(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function B(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(61);function y(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function w(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}a(29);var x=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={books:[]},a.getSavedBooks=function(){g.getSavedBooks().then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.handleBookDelete=function(){var e=Object(m.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.state.books,e.prev=1,e.next=4,g.deleteBook(t).then(function(e){return a.getSavedBooks()});case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),e.t0.response&&404===e.t0.response.status&&console.log(e.t0+"-There is an error."),a.setState({books:n});case 10:case"end":return e.stop()}},e,null,[[1,6]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getSavedBooks()}},{key:"render",value:function(){var e=this;return r.a.createElement(N,{fluid:!0},r.a.createElement(S,null,r.a.createElement(B,{size:"md-12"},r.a.createElement(E,null,r.a.createElement("h1",null,"My Saved Books")),r.a.createElement(S,null,r.a.createElement(B,{size:"md-12"},this.state.books.length?r.a.createElement(y,null,this.state.books.map(function(t){return r.a.createElement(n.Fragment,{key:t.id},r.a.createElement(w,null,r.a.createElement("div",{className:"media-snippet"},r.a.createElement("article",{className:"media"},r.a.createElement("figure",{className:"media-left"},r.a.createElement("p",null,r.a.createElement("img",{className:"image is-128xauto",src:t.image,alt:t.title}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("h3",{className:"heading-title"},t.title),r.a.createElement("p",{className:"heading-subtitle"},"by ",t.authors," (Author)"),r.a.createElement("p",{className:"p-article"},t.description),r.a.createElement("div",{className:"d-flex flex-row bd-highlight mb-3"},r.a.createElement("div",{className:"p-2 bd-highlight"},r.a.createElement("a",{href:t.link,className:"view-btn",target:"_blank",rel:"noopener noreferrer"},"View"),r.a.createElement(k,{onClick:function(){return e.handleBookDelete(t._id)}}))))))))})):r.a.createElement("h3",null,"No Results to Display"))))))}}]),t}(n.Component),j=a(33);a(62);var O=function(e){var t=e.q,a=e.handleInputChange,n=e.handleFormSubmit;return r.a.createElement("form",{className:"form-inline",role:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"Title",className:"sr-only"},"Search Book Title"),r.a.createElement("input",{className:"form-control",id:"Title",type:"text",value:t,placeholder:"Enter a keyword...",name:"q",onChange:a,size:"62",required:!0})),r.a.createElement("button",{onClick:n,type:"submit",className:"btn btn-lg search-btn"},"Search"))},C=function e(t){var a=t.title,n=t.authors,l=t.description,c=t.image,o=t.link;console.log(e);var s,i,m,u=(i=255,m="...",(s=l)?(null==i&&(i=100),null==m&&(m="..."),s.length>i?s.substring(0,i-m.length)+m:s):s);return r.a.createElement(w,null,r.a.createElement("div",{className:"media-snippet"},r.a.createElement("article",{className:"media"},r.a.createElement("figure",{className:"media-left"},r.a.createElement("p",null,r.a.createElement("img",{className:"image is-128xauto",src:c,alt:a}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("h3",{className:"heading-title"},a),r.a.createElement("p",{className:"heading-subtitle"},"by ",n," (Author)"),r.a.createElement("p",{className:"p-article"},u),r.a.createElement("div",{className:"d-flex flex-row bd-highlight mb-3"},r.a.createElement("div",{className:"p-2 bd-highlight"},r.a.createElement("a",{href:o,className:"view-btn",target:"_blank",rel:"noopener noreferrer"},"View")))))))};a(63);var D=function(e){return r.a.createElement("span",Object.assign({className:"save-btn"},e,{role:"button",tabIndex:"0"}),"Save")},I=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={books:[],q:"",message:"Search for books..."},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(j.a)({},n,r))},a.loadBooks=function(){g.getBooks(a.state.q).then(function(e){e&&e.data.length>0?a.setState({books:e.data}):a.setDefaultState()}).catch(function(e){console.log(e+"-There is an error."),a.setDefaultState()})},a.setDefaultState=function(){a.setState({books:[],savedBooks:[],message:"No results."})},a.handleFormSubmit=function(e){e.preventDefault(),a.loadBooks()},a.handleSavedBook=function(e){var t=a.state.books.find(function(t){return t.id===e});console.log(t),g.saveBook({googleId:t.id,title:t.title,author:t.authors,image:t.thumbnail,description:t.description,link:t.infoLink}).then(function(){return g.getBooks()})},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(N,{fluid:!0},r.a.createElement(S,null,r.a.createElement(B,{size:"md-12"},r.a.createElement(E,null,r.a.createElement("h1",null,"What Books Should I Read?")),r.a.createElement(O,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,q:this.state.q}))),r.a.createElement(S,null,r.a.createElement(B,{size:"md-12"},r.a.createElement("h1",{className:"text-center"},"Results"),this.state.books.length?r.a.createElement(y,null,this.state.books.map(function(t){return r.a.createElement(n.Fragment,{key:t.id},r.a.createElement(C,{title:t.title,link:t.infoLink,authors:t.authors,description:t.description,image:t.thumbnail}),r.a.createElement("div",{className:"p-2 bd-highlight"},r.a.createElement(D,{onClick:function(){return e.handleSavedBook(t.id)},className:"save-btn"})))})):r.a.createElement("div",null,r.a.createElement("h2",{className:"heading-title text-center"},this.state.message)))))}}]),t}(n.Component);a(64);var q=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Books"),r.a.createElement("a",{className:"navbar nav-link",href:"/search"},"Search"),r.a.createElement("a",{className:"navbar nav-link",href:"/saved"},"Saved"))};var F=function(){return r.a.createElement("div",null,r.a.createElement(q,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/Books",component:I}),r.a.createElement(o.b,{path:"/Saved",component:x}),r.a.createElement(o.a,{from:"*",exact:!0,to:"/Books"})))},z=a(16);c.a.render(r.a.createElement(z.a,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.4dd716b9.chunk.js.map