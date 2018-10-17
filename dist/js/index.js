
//导航条二级菜单  客户服务  商家后台
$("ul li ol").hide();
$("ul li").on("mouseenter",function(){
    $(this).children("ol").show();
});
$("ul li").on("mouseleave",function(){
    $(this).children("ol").hide();
})

//搜索框二级菜单
$(".search-kind ul").hide();
$(".search-kind").on("mouseenter",function(){
    $(this).children("ul").show();
})
$(".search-kind").on("mouseleave",function(){
    $(this).children("ul").hide();
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
   