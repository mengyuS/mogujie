
            //面向对象编程
            function WaterFall(){}
                $.extend(WaterFall.prototype,{
                    //初始化
                    init:function(){
                        //当前页数
                        this.page=1;
                        this.main = $(".buy");
                        //判断是否在加载中
                        this.loading = false;
                        //和promise .then相似
                        this.loadJson()     //返回值是deferred对象（promise前身）
                        .done(function(res){
                             // deferred 的 done 回调 this指向的都是 jquery 对象本身
                            this.renderPage(res);
                        })
                        this.bindEvent();
                        // this.listSum();
                       
    
                    },
                    //加载数据
                    loadJson:function(){
                        var opt = {
                            // url:"http://www.wookmark.com/api/json/popular",
                            url:"https://list.mogujie.com/search",
                            dataType:"jsonp",
                            data:{page:this.page},
                            //this  ===>指向实例化对象
                            context:this
                        }
                        return $.ajax(opt);
                        
                        
                    },
                  
                    //渲染页面
                    renderPage:function(json1){
                       //console.log(json1.result.wall.list);

                       var json=json1.result.wall.list;
                       console.log(json,json[0].show.img)
                     
                       
                        var oimg = document.getElementById("img");
                        var op = document.getElementById("p");
                        var nowprice = document.getElementById("nowprice");
                        var nowprice2 = document.getElementById("nowprice2")
                        // var nowprice = document.getElementsByClassName("nowprice");
                        var delprice = document.getElementById("delprice");
                        var bigimg = document.getElementById("bigimg");
                       
                        // var i="";
                        //判断cookie中是否有id
                        if( cookie("id")){
                            i=cookie("id");   //cookie("id")一个参数，是查找，返回value
                            console.log(i);
                            oimg.src = json[i].show.img;
                            bigimg.src = json[i].showLarge.img;
                            op.innerHTML = json[i].title;
                            nowprice.innerHTML = json[i].price;
                            nowprice2.innerHTML = json[i].price;
                            delprice.innerHTML = json[i].orgPrice;                                         
                        }
                        // removecookie("id","/")
                        console.log(json[i].iid)

                        var html="";
                    
                        html +=`<p class="pin">
                                    2人拼团购买
                                </p>
                               <p class="only">
                                   现价单独购买
                               </p>
                               <span class="shopcar" goods-id="${json[i].iid}">
                                   <img src="images/car1.png">
                                </span>
                            `
                  
                this.main.html(html);
                    },
                    bindEvent:function(){
                        //事件委托
                        $(".buy").on("click","span",this.addCar.bind(this));
        
                        // $(".shopCar>div").on("mouseenter",this.showList.bind(this));
                        // $(".shopCar>div").on("mouseleave",function(){
                        //     $(".goods-list").children().remove();
                        // });
                        // $(".shopCar>div").on("click",function(event){
                        //     var target = event.target ; 
                        //     //target是dom对象，后面jquery对象变成dom对象
                        //     if(target != $(".shopCar>div")[0]) return 0;
        
                        //     $.removeCookie("shopCar");
                        //     //手动触发   执行鼠标移出事件;
                        //     $(".shopCar>div").triggerHandler("mouseleave");
                        //     this.listSum();
                        // }.bind(this));
                    },
                    addCar:function(event){
                        // 我怎么知道把谁加入到购物车之中那?;
                        var target = event.target ;
                        var goodsId = $(target).attr("goods-id");
                        console.log(goodsId,$(".shopcar"))
                       
                        var cookie;
                        if((cookie = $.cookie("shopCar"))){
                            // 将字符串转换为数组, 方便插入操作;
                            // console.log(cookie);
                            var cookieArray = JSON.parse(cookie);
                            // 判定当前要添加的商品 是否已经存在在购物车里;
                            // 表示是否存在商品;
                            var hasGoods = false;
                            for(var i = 0 ; i < cookieArray.length ; i ++){
                                if(cookieArray[i].id == goodsId ) {
                                    // 存在 商品;
                                    hasGoods = true;
                                    cookieArray[i].num ++;
                                    break;
                                }
                            }
                            // 如果没有此商品;
                            if(hasGoods == false){
                                var goods = {
                                    id : goodsId,
                                    num : "1"
                                }
                                cookieArray.push(goods);
                            }
        
                            // 将数组 转为字符串 方便 储存cookie;
        
                            // console.log(JSON.stringify(cookieArray));
                            $.cookie("shopCar",JSON.stringify(cookieArray));
                        }else{
                            $.cookie("shopCar",`[{"id":"${goodsId}","num":"1"}]`);
                        }
                        console.log($.cookie("shopCar"));
                        // this.listSum();
                    }
                    ,
                    // showList:function(event){
                    //     // 判定是否存在购物车,如果不存在购物车就没必要拼接列表了;
                    //     var target = event.target;
        
                    //     if(target != $(".shopCar>div")[0]) return 0;
        
                    //     var cookie;
                    //     if(!(cookie = $.cookie("shopCar"))){ return 0; };
                    //     var cookieArray = JSON.parse(cookie);
        
                    //     var html = "";
                    //     // for 购物车里有多少商品就拼接多少个;
                    //     for(var i = 0 ; i < cookieArray.length ; i ++){
                    //         // console.log(cookieArray[i]);
                    //         // for 判断哪一个商品是购物车里的商品;
                    //         for(var j = 0 ; j < this.json.length ; j ++){
                    //             if(cookieArray[i].id == this.json[j].id){
                    //                 html += `<li data-id="${cookieArray[i].id}">
                    //                             <img src="${this.json[j].images.small}" alt="">
                    //                             <h3>${this.json[j].title}</h3>
                    //                             <strong>${cookieArray[i].num}</strong>
                    //                         </li>`;
                    //                 break;
                    //             }
                    //         }
                    //     }
                        
                    //     $(".goods-list").html(html);
                    // },
                    // listSum:function(){
                    //     var cookie;
                    //     if(!(cookie = $.cookie("shopCar"))){ 
                    //         //find后代选择器；
                    //         $(".shopCar").find("span").html(0);
                    //         return 0;
                    //     };
                    //     var cookieArray = JSON.parse(cookie);
                    //     var sum = 0;
                    //     for(var i = 0 ; i < cookieArray.length ; i ++){
                    //         sum += Number(cookieArray[i].num);
                    //     }
                    //     $(".shopCar").find("span").html(sum);
                    // }
        
                })
                            
                            
           
            
    
                 var waterfall = new WaterFall();
                 waterfall.init();


// 放大镜
$(".frame").hide();
// $(".big").hide();
$(".small").on("mouseover",function(){
    $(".frame").show();
    $(".big").show();
    // $("#img").css({
    //     "opctity":"0.5"
    // })
})
$(".small").on("mouseout",function(){
    $(".frame").hide();
    $(".big").hide();
})
$(".small").on("mousemove",function(event){
    // $("#small")[0].onmouseover = function(event ){
    var e = event || window.event;
    var offsetX = e.offsetX;
    var offsetY = e.offsetY;
    var nleft = offsetX-50;
    var ntop = offsetY -50;
   //边界检测：
   //最小值：
    nleft=nleft <0 ? 0: nleft;
    ntop = ntop<0 ? 0: ntop;
    //最大值：
    var maxleft =$(".small").width()-$(".frame").width();
    var maxtop = $(".small").height()-$(".frame").height();
    nleft=nleft> maxleft ? maxleft : nleft;
    ntop = ntop >maxtop ? maxtop : ntop;
    
    $(".frame").css({"left":nleft +"px"});
    $(".frame").css({"top":ntop +"px"});

    //求放大镜的比例：
    var n = $("#bigimg").width()/$(".small").width();
    var n2 =  $("#bigimg").height()/$(".small").height();

    $("#bigimg").css({"left":-nleft*n +"px"});
    $("#bigimg").css({"top":- ntop*n2 +"px"});

})

     
    
   

