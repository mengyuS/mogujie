
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