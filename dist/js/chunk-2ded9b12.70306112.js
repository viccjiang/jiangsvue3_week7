(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ded9b12"],{b0c0:function(t,e,c){var n=c("83ab"),r=c("9bf2").f,i=Function.prototype,l=i.toString,o=/^\s*function ([^ (]*)/,a="name";n&&!(a in i)&&r(i,a,{configurable:!0,get:function(){try{return l.call(this).match(o)[1]}catch(t){return""}}})},fd5d:function(t,e,c){"use strict";c.r(e);c("b0c0");var n=c("7a23"),r={class:"container"},i={class:"my-5 row justify-content-center"},l={class:"table align-middle"},o=Object(n["i"])("thead",null,[Object(n["i"])("th",null,"品名"),Object(n["i"])("th",null,"數量"),Object(n["i"])("th",null,"單價")],-1),a={class:"text-end"},b=Object(n["i"])("td",{colspan:"2",class:"text-end"},"總計",-1),u={class:"text-end"},d={class:"table"},s=Object(n["i"])("th",{width:"100"},"Email",-1),O=Object(n["i"])("th",null,"姓名",-1),j=Object(n["i"])("th",null,"收件人電話",-1),h=Object(n["i"])("th",null,"收件人地址",-1),p=Object(n["i"])("th",null,"付款狀態",-1),f={key:0},y={key:1,class:"text-success"},g={class:"checkBtn d-flex justify-content-between"},v=Object(n["h"])("回上一頁"),m={key:0},k=Object(n["i"])("button",{class:"btn btn-danger"},"確認付款去",-1);function w(t,e,c,w,G,x){var I=Object(n["D"])("Loading"),_=Object(n["D"])("router-link");return Object(n["u"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(I,{active:G.isLoading},null,8,["active"]),Object(n["i"])("div",r,[Object(n["i"])("div",i,[Object(n["i"])("form",{class:"col-md-6",onSubmit:e[1]||(e[1]=Object(n["Q"])((function(){return x.payOrder&&x.payOrder.apply(x,arguments)}),["prevent"]))},[Object(n["i"])("table",l,[o,Object(n["i"])("tbody",null,[(Object(n["u"])(!0),Object(n["e"])(n["a"],null,Object(n["B"])(G.order.products,(function(t){return Object(n["u"])(),Object(n["e"])("tr",{key:t.id},[Object(n["i"])("td",null,Object(n["G"])(t.product.title),1),Object(n["i"])("td",null,Object(n["G"])(t.qty)+"/"+Object(n["G"])(t.product.unit),1),Object(n["i"])("td",a,Object(n["G"])(t.final_total),1)])})),128))]),Object(n["i"])("tfoot",null,[Object(n["i"])("tr",null,[b,Object(n["i"])("td",u,Object(n["G"])(G.order.total),1)])])]),Object(n["i"])("table",d,[Object(n["i"])("tbody",null,[Object(n["i"])("tr",null,[s,Object(n["i"])("td",null,Object(n["G"])(G.order.user.email),1)]),Object(n["i"])("tr",null,[O,Object(n["i"])("td",null,Object(n["G"])(G.order.user.name),1)]),Object(n["i"])("tr",null,[j,Object(n["i"])("td",null,Object(n["G"])(G.order.user.tel),1)]),Object(n["i"])("tr",null,[h,Object(n["i"])("td",null,Object(n["G"])(G.order.user.address),1)]),Object(n["i"])("tr",null,[p,Object(n["i"])("td",null,[G.order.is_paid?(Object(n["u"])(),Object(n["e"])("span",y,"付款完成")):(Object(n["u"])(),Object(n["e"])("span",f,"尚未付款"))])])])]),Object(n["i"])("div",g,[Object(n["i"])(_,{class:"btn btn-outline-secondary",to:"/cart"},{default:Object(n["O"])((function(){return[v]})),_:1}),!1===G.order.is_paid?(Object(n["u"])(),Object(n["e"])("div",m,[k])):Object(n["f"])("",!0)])],32)])])],64)}c("99af");var G={data:function(){return{order:{user:{}},orderId:"",isLoading:!1}},methods:{getOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jiangsvue3","/order/").concat(this.orderId);this.$http.get(e).then((function(e){e.data.success&&(t.order=e.data.order,console.log(t.order))}))},payOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jiangsvue3","/pay/").concat(this.orderId);this.$http.post(e).then((function(e){console.log(e),e.data.success&&t.getOrder()}))}},created:function(){this.orderId=this.$route.params.orderId,console.log(this.orderId),this.getOrder()}};G.render=w;e["default"]=G}}]);
//# sourceMappingURL=chunk-2ded9b12.70306112.js.map