(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42b04031"],{"06c5":function(t,e,c){"use strict";c.d(e,"a",(function(){return i}));c("fb6a"),c("d3b7"),c("b0c0"),c("a630"),c("3ca3");var n=c("6b75");function i(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var c=Object.prototype.toString.call(t).slice(8,-1);return"Object"===c&&t.constructor&&(c=t.constructor.name),"Map"===c||"Set"===c?Array.from(t):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?Object(n["a"])(t,e):void 0}}},"09dc":function(t,e,c){"use strict";c.r(e);c("a4d3"),c("e01a");var n=c("7a23"),i={class:"container "},a={class:"row"},r={class:"col-3 mt-4"},o={class:"list-group "},s={class:"col-9"},u={class:"row mt-4"},l={class:"col mb-4"},d={class:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 "},b={class:"card h-100 rounded-0 "},g={class:"card-body"},p={class:"badge bg-secondary text-light mb-2"},f={class:"card-title"},j={class:"h6 text-secondary"},v={key:0,class:"h5 list-inline-item "},O={key:1,class:"h6 list-inline-item text-secondary"},h={key:2,class:"h5 text-danger"},m={class:"d-grid gap-2 col-12 mx-auto"},y={key:0,class:"spinner-border text-danger spinner-border-sm",role:"status"},k=Object(n["i"])("span",{class:"visually-hidden"},"Loading...",-1),w=Object(n["h"])(" 加到購物車 ");function x(t,e,c,x,C,A){var P=this,I=Object(n["D"])("Loading"),$=Object(n["D"])("Pagination");return Object(n["u"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(I,{active:t.isLoading},null,8,["active"]),Object(n["i"])("div",i,[Object(n["i"])("div",a,[Object(n["i"])("div",r,[Object(n["i"])("div",o,[(Object(n["u"])(!0),Object(n["e"])(n["a"],null,Object(n["B"])(C.categories,(function(t){return Object(n["u"])(),Object(n["e"])("a",{href:"#",key:t,class:"list-group-item list-group-item-action ",onClick:Object(n["Q"])((function(e){return C.selectCategory=t}),["prevent"])},Object(n["G"])(t),9,["onClick"])})),128))])]),Object(n["i"])("div",s,[Object(n["i"])("div",u,[Object(n["i"])("div",l,[Object(n["i"])("div",d,[(Object(n["u"])(!0),Object(n["e"])(n["a"],null,Object(n["B"])(A.filterProducts,(function(e){return Object(n["u"])(),Object(n["e"])("div",{class:"col ",key:e.id},[Object(n["i"])("div",b,[Object(n["i"])("div",{style:[{height:"300px","background-size":"cover","background-position":"center"},{backgroundImage:"url(".concat(e.imageUrl,")")}]},null,4),Object(n["i"])("div",g,[Object(n["i"])("span",p,Object(n["G"])(e.category),1),Object(n["i"])("h5",f,Object(n["G"])(e.title),1),Object(n["i"])("h6",j,Object(n["G"])(e.description),1),e.price?Object(n["f"])("",!0):(Object(n["u"])(),Object(n["e"])("div",v,Object(n["G"])(e.origin_price)+" 元 ",1)),e.price?(Object(n["u"])(),Object(n["e"])("del",O,"原價 NT$ "+Object(n["G"])(t.$filters.currency(e.origin_price))+" 元",1)):Object(n["f"])("",!0),e.price?(Object(n["u"])(),Object(n["e"])("div",h," NT$ "+Object(n["G"])(t.$filters.currency(e.price))+" 元 ",1)):Object(n["f"])("",!0),Object(n["i"])("div",m,[Object(n["i"])("button",{type:"button",class:"btn btn-outline-secondary",onClick:function(t){return A.getProduct(e.id)}}," 查看更多 ",8,["onClick"]),Object(n["i"])("button",{type:"button",class:"btn btn-outline-danger",disabled:P.status.loadingItem===e.id,onClick:function(t){return A.addCart(e.id)}},[P.status.loadingItem===e.id?(Object(n["u"])(),Object(n["e"])("div",y,[k])):Object(n["f"])("",!0),w],8,["disabled","onClick"])])])])])})),128))])]),Object(n["i"])($,{pages:C.pagination,onEmitPages:A.getProducts},null,8,["pages","onEmitPages"])])])])])],64)}var C=c("6b75");function A(t){if(Array.isArray(t))return Object(C["a"])(t)}c("d3b7"),c("d28b"),c("3ca3"),c("ddb0"),c("a630");function P(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var I=c("06c5");function $(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function S(t){return A(t)||P(t)||Object(I["a"])(t)||$()}c("99af"),c("6062"),c("159b"),c("4de4"),c("ac1f"),c("466d");var _=c("cfb9"),G=c("1799"),E={data:function(){return{products:[],product:{},pagination:{},status:{loadingItem:""},categories:[],selectCategory:""}},components:{Pagination:G["a"]},provide:function(){return{emitter:_["a"]}},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jiangsvue3","/products/?page=").concat(e);this.isLoading=!0,this.$http.get(c).then((function(e){t.products=e.data.products,console.log("products:",e),t.isLoading=!1,e.data.success&&(console.log(e.data),t.products=e.data.products,t.pagination=e.data.pagination,t.getCategories())}))},getCategories:function(){var t=new Set;this.products.forEach((function(e){t.add(e.category)})),this.categories=S(t)},getProduct:function(t){this.$router.push("/product/".concat(t))},addCart:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jiangsvue3","/cart");this.status.loadingItem=t;var n={product_id:t,qty:1};this.$http.post(c,{data:n}).then((function(t){e.status.loadingItem="",console.log(t),_["a"].emit("update-cart")}))}},computed:{filterProducts:function(){var t=this;return this.products.filter((function(e){return e.category.match(t.selectCategory)}))}},created:function(){this.getProducts()}};E.render=x;e["default"]=E},1799:function(t,e,c){"use strict";var n=c("7a23"),i={"aria-label":"Page navigation example "},a={class:"pagination justify-content-center"},r=Object(n["i"])("span",null,"«",-1),o=Object(n["i"])("span",null,"»",-1);function s(t,e,c,s,u,l){return Object(n["u"])(),Object(n["e"])("nav",i,[Object(n["i"])("ul",a,[Object(n["i"])("li",{class:["page-item",c.pages.has_pre?"":"disabled"]},[Object(n["i"])("a",{class:"page-link",href:"#",onClick:e[1]||(e[1]=Object(n["Q"])((function(e){return t.$emit("emit-pages",c.pages.current_page-1)}),["prevent"]))},[r])],2),(Object(n["u"])(!0),Object(n["e"])(n["a"],null,Object(n["B"])(c.pages.total_pages,(function(e,i){return Object(n["u"])(),Object(n["e"])("li",{class:["page-item",e===c.pages.current_page?"active":""],key:i},[Object(n["i"])("a",{class:"page-link",href:"#",onClick:Object(n["Q"])((function(c){return t.$emit("emit-pages",e)}),["prevent"])},Object(n["G"])(e),9,["onClick"])],2)})),128)),Object(n["i"])("li",{class:["page-item",c.pages.has_next?"":"disabled"]},[Object(n["i"])("a",{class:"page-link",href:"#",onClick:e[2]||(e[2]=Object(n["Q"])((function(e){return t.$emit("emit-pages",c.pages.current_page+1)}),["prevent"]))},[o])],2)])])}var u={props:["pages"],methods:{updatePage:function(t){this.$emit("emit-pages",t)}}};u.render=s;e["a"]=u},"466d":function(t,e,c){"use strict";var n=c("d784"),i=c("825a"),a=c("50c4"),r=c("1d80"),o=c("8aa5"),s=c("14c3");n("match",(function(t,e,c){return[function(e){var c=r(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,c):new RegExp(e)[t](String(c))},function(t){var n=c(e,this,t);if(n.done)return n.value;var r=i(this),u=String(t);if(!r.global)return s(r,u);var l=r.unicode;r.lastIndex=0;var d,b=[],g=0;while(null!==(d=s(r,u))){var p=String(d[0]);b[g]=p,""===p&&(r.lastIndex=o(u,a(r.lastIndex),l)),g++}return 0===g?null:b}]}))},"4df4":function(t,e,c){"use strict";var n=c("0366"),i=c("7b0b"),a=c("9bdd"),r=c("e95a"),o=c("50c4"),s=c("8418"),u=c("35a1");t.exports=function(t){var e,c,l,d,b,g,p=i(t),f="function"==typeof this?this:Array,j=arguments.length,v=j>1?arguments[1]:void 0,O=void 0!==v,h=u(p),m=0;if(O&&(v=n(v,j>2?arguments[2]:void 0,2)),void 0==h||f==Array&&r(h))for(e=o(p.length),c=new f(e);e>m;m++)g=O?v(p[m],m):p[m],s(c,m,g);else for(d=h.call(p),b=d.next,c=new f;!(l=b.call(d)).done;m++)g=O?a(d,v,[l.value,m],!0):l.value,s(c,m,g);return c.length=m,c}},"6b75":function(t,e,c){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var c=0,n=new Array(e);c<e;c++)n[c]=t[c];return n}c.d(e,"a",(function(){return n}))},"9bdd":function(t,e,c){var n=c("825a"),i=c("2a62");t.exports=function(t,e,c,a){try{return a?e(n(c)[0],c[1]):e(c)}catch(r){throw i(t),r}}},a630:function(t,e,c){var n=c("23e7"),i=c("4df4"),a=c("1c7e"),r=!a((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:r},{from:i})},b0c0:function(t,e,c){var n=c("83ab"),i=c("9bf2").f,a=Function.prototype,r=a.toString,o=/^\s*function ([^ (]*)/,s="name";n&&!(s in a)&&i(a,s,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(t){return""}}})},d28b:function(t,e,c){var n=c("746f");n("iterator")},fb6a:function(t,e,c){"use strict";var n=c("23e7"),i=c("861d"),a=c("e8b5"),r=c("23cb"),o=c("50c4"),s=c("fc6a"),u=c("8418"),l=c("b622"),d=c("1dde"),b=d("slice"),g=l("species"),p=[].slice,f=Math.max;n({target:"Array",proto:!0,forced:!b},{slice:function(t,e){var c,n,l,d=s(this),b=o(d.length),j=r(t,b),v=r(void 0===e?b:e,b);if(a(d)&&(c=d.constructor,"function"!=typeof c||c!==Array&&!a(c.prototype)?i(c)&&(c=c[g],null===c&&(c=void 0)):c=void 0,c===Array||void 0===c))return p.call(d,j,v);for(n=new(void 0===c?Array:c)(f(v-j,0)),l=0;j<v;j++,l++)j in d&&u(n,l,d[j]);return n.length=l,n}})}}]);
//# sourceMappingURL=chunk-42b04031.f3c62c2f.js.map