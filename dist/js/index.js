
//导航条二级菜单  客户服务  商家后台
$("ul li ol").hide();
$("ul li").on("mouseenter",function(){
    $(this).children("ol").show();
});
$("ul li").on("mouseleave",function(){
    $(this).children("ol").hide();
})


//右侧导航条
//回到顶部
$(".gotop").hide();
$(".gotop").on("click",function(){
    document.body.top =0;
})
//右侧导航二维码鼠标移入出现
$(".bar-right .er p").hide();
$(".bar-right .er").on("mouseenter",function(){
    $(".bar-right .er p").show();
})
$(".bar-right .er").on("mouseleave",function(){
    $(".bar-right .er p").hide();
})



//搜索框二级菜单
$(".search-kind ul").hide();
$(".search-kind").on("mouseenter",function(){
    $(this).children("ul").show();
})
$(".search-kind").on("mouseleave",function(){
    $(this).children("ul").hide();
})


//搜索框顶部
$(".topsearch").hide(); 
onscroll = function(event){
    var e =event || window.event;
    var scrollTop = this.document.body.scrollTop || this.document.documentElement.scrollTop;
    if(scrollTop>=500){
     $(".topsearch").show();  
     $(".gotop").show();       
     
    }
    if(scrollTop<500){
        $(".topsearch").hide();
        $(".gotop").hide();   
    }
}
//顶部搜索框二级菜单显示与隐藏；
$(".search-left1 .nav").hide();

$(".search-left1").on("mouseenter",function(){
    $(".search-left1 .nav").show();
})
$(".search-left1").on("mouseleave",function(){
    $(".search-left1 .nav").hide();
})




//nav二级菜单带hot标志的变颜色
 $(".ul1-li  dl dd").children("a:has(span)").css({
        color:"#f07"
 })

//二级菜单出现与隐藏
 $(".ul1-li .erji").hide();
 $(".ul1-li").on("mouseenter",function(){
     $(this).children(".erji").show();
 })
 $(".ul1-li").on("mouseleave",function(){
    $(this).children(".erji").hide();
})

$(".login").click(function(){
    location.href="login.html"
})
//登录界面 登录方式切换
$(".login-er").hide();
$(".login-er .pic").on("click",function(){
    $(".login-user").show();
    $(".login-er").hide();
})
$(".login-user .pic2").on("click",function(){
    $(".login-er").show();
    $(".login-user").hide();
})

//用户名  手机号登录方式的切换
$(".phone .form").hide();
$(".phone").on("click",function(){
    $(this).children("div").show();
    $(".putong div").hide();
    $(".phone a").css({
        "border-bottom": "2px solid #ff4066",
        "color": "#fe617a"
    })
    $(".putong a").css({
        "border-bottom": 0,
        "color": "#3c3c3c"
    })
})
$(".putong").on("click",function(){
    $(this).children("div").show();
    $(".phone div").hide();
    $(".putong a").css({
        "border-bottom": "2px solid #ff4066",
        "color": "#fe617a"
    })
    $(".phone a").css({
        "border-bottom": 0,
        "color": "#3c3c3c"
    })
})


//女装下方小图片运动
$(".right-bottom .big").on("mouseenter",function(){
    $(this).stop().animate({
        top : -8
    })
})
$(".right-bottom .big").on("mouseleave",function(){
    $(this).stop().animate({
        top : 0 
    })
})
   
$(".describe em").hide();
$(".box").on("mouseenter",function(){
    $(".describe em").show();
})
