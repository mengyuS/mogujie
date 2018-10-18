
            //面向对象编程
            function WaterFall(){}
                $.extend(WaterFall.prototype,{
                    //初始化
                    init:function(){
                        //当前页数
                        this.page=1;
                        this.main = $("#wrap");
                        //判断是否在加载中
                        this.loading = false;
                        //和promise .then相似
                        this.loadJson()     //返回值是deferred对象（promise前身）
                        .done(function(res){
                             // deferred 的 done 回调 this指向的都是 jquery 对象本身
                            this.renderPage(res);
                        })
                       
    
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
                    }
                            
                            
           
                   
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

     
    
   

