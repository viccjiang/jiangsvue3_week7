(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f86b"],{d9cc:function(t,c,e){"use strict";e.r(c);e("a4d3"),e("e01a");var i=e("7a23"),o={class:"container"},a={"aria-label":"breadcrumb"},r={class:"breadcrumb"},s={class:"breadcrumb-item "},n=Object(i["h"])("產品列表"),d={class:"breadcrumb-item active","aria-current":"page"},l=Object(i["i"])("li",{class:"breadcrumb-item active","aria-current":"page"},"產品細節",-1),u={class:"row align-items-center"},b={class:"col-md-7"},p={id:"carouselExampleControls",class:"carousel slide","data-ride":"carousel"},j={class:"carousel-inner"},O={class:"carousel-item active"},h={class:"col-md-5"},g={class:"col"},v={key:0,class:"h5"},f={key:1,class:"h6"},m={key:2,class:"h5 text-danger"},y={class:"row align-items-center"},k=Object(i["g"])('<div class="col-6"><div class="input-group my-3 bg-light rounded"><div class="input-group-prepend"><button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1"><i class="fas fa-minus"> - </i></button></div><input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1"><div class="input-group-append"><button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2"><i class="fas fa-plus"> + </i></button></div></div></div>',1),w={class:"col-6"},x=Object(i["i"])("h2",null,"你可能也喜歡",-1),L={class:"row row-cols-1 row-cols-md-3 g-4 mb-4"},P={class:"card h-100 "},G={class:"card-body"},$={class:"card-title"},C=Object(i["i"])("div",{class:"card-footer"},[Object(i["i"])("small",{class:"text-muted"}," 來去看看 ")],-1);function _(t,c,e,_,z,E){var M=Object(i["D"])("Loading"),A=Object(i["D"])("router-link");return Object(i["u"])(),Object(i["e"])(i["a"],null,[Object(i["i"])(M,{active:z.isLoading},null,8,["active"]),Object(i["i"])("div",o,[Object(i["i"])("nav",a,[Object(i["i"])("ol",r,[Object(i["i"])("li",s,[Object(i["i"])(A,{to:"/products"},{default:Object(i["O"])((function(){return[n]})),_:1})]),Object(i["i"])("li",d,Object(i["G"])(z.product.title),1),l])]),Object(i["i"])("div",u,[Object(i["i"])("div",b,[Object(i["i"])("div",p,[Object(i["i"])("div",j,[Object(i["i"])("div",O,[Object(i["i"])("img",{src:z.product.imageUrl,alt:"",class:"img-fluid mb-3"},null,8,["src"])])])])]),Object(i["i"])("div",h,[Object(i["i"])("article",g,[Object(i["i"])("h2",null,Object(i["G"])(z.product.title),1),Object(i["i"])("div",null,Object(i["G"])(z.product.content),1),Object(i["i"])("div",null,Object(i["G"])(z.product.description),1)]),z.product.price?Object(i["f"])("",!0):(Object(i["u"])(),Object(i["e"])("div",v,Object(i["G"])(z.product.origin_price)+" 元",1)),z.product.price?(Object(i["u"])(),Object(i["e"])("del",f,"原價 "+Object(i["G"])(t.$filters.currency(z.product.origin_price))+" 元",1)):Object(i["f"])("",!0),z.product.price?(Object(i["u"])(),Object(i["e"])("div",m," 現在只要 "+Object(i["G"])(t.$filters.currency(z.product.price))+" 元 ",1)):Object(i["f"])("",!0),Object(i["i"])("div",y,[k,Object(i["i"])("div",w,[Object(i["i"])("button",{type:"button",class:"text-nowrap btn btn-dark w-100 py-2",onClick:c[1]||(c[1]=Object(i["Q"])((function(t){return E.addToCart(z.product.id)}),["prevent"]))}," 加到購物車 ")])])]),x,Object(i["i"])("div",L,[(Object(i["u"])(!0),Object(i["e"])(i["a"],null,Object(i["B"])(z.randomProducts,(function(t){return Object(i["u"])(),Object(i["e"])("div",{class:"col",key:t},[Object(i["i"])("div",P,[Object(i["i"])("img",{src:t.imageUrl,style:{"background-size":"cover","background-position":"center center"},class:"card-img-top",alt:"..."},null,8,["src"]),Object(i["i"])("div",G,[Object(i["i"])("h5",$,Object(i["G"])(t.title),1)]),C])])})),128))])])])],64)}e("99af"),e("4de4"),e("d3b7"),e("6062"),e("3ca3"),e("ddb0"),e("159b");var z=e("cfb9");function E(t){return Math.floor(Math.random()*t)}var M={data:function(){return{isLoading:!1,product:{},products:[],randomProducts:[],id:""}},methods:{getProduct:function(){var t=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jiangsvue3","/product/").concat(this.id);this.isLoading=!0,this.$http.get(c).then((function(c){c.data.success&&(t.product=c.data.product),t.isLoading=!1,t.getProducts()}))},getProducts:function(){var t=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jiangsvue3","/products/all");this.$http.get(c).then((function(c){console.log(c),t.products=c.data.products,t.getLookAlike()}))},getLookAlike:function(){var t=this,c=this.product.category,e=this.products.filter((function(t){return t.category===c}));console.log("filterProducts:",e);var i=e.length<4?e.length:4,o=new Set([]);console.log(o.size),E();for(var a=0;o.size<i;a+1){var r=E(e.length);o.add(r),console.log(o,r)}o.forEach((function(c){t.randomProducts.push(e[c])})),console.log(this.randomProducts)},addToCart:function(t){var c=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jiangsvue3","/cart"),o={product_id:t,qty:e};this.isLoading=!0,this.$http.post(i,{data:o}).then((function(t){c.isLoading=!1,c.$httpMessageState(t,"加入購物車"),console.log(t.data),z["a"].emit("update-cart")}))}},created:function(){this.id=this.$route.params.id,this.getProduct()}};M.render=_;c["default"]=M}}]);
//# sourceMappingURL=chunk-2d21f86b.5abe5b83.js.map