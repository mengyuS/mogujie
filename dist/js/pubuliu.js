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
         this.bindEvent();

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
      
         var html="";
         for( var i=0; i<json.length; i++){
            // console.log(json,this.page,i)
                 html +=`
                     <div class="box" >
                         <img src="${json[i].show.img}" alt="" data-id="${i}">
                         <div class="describe">
                             <p>${json[i].title}</p>
                             
                             <span>${json[i].price}</span>
                             <del>${json[i].orgPrice}</del>
                             <i class="sales">${json[i].sale}</i>
                             <em>找相似</em>
                         </div>
                         </div>
                     `
                     // console.log(json[i].price)
         }  
                          
         this.main.html(this.main.html() + html);
         this.loading = false;
         

     },
    
     bindEvent:function(){
         $(window).on("scroll",this.ifLoad.bind(this));

     },
     //是否加载   滚动就会触发此事件
     ifLoad:function(){
         var scrollTop = $("html,body").scrollTop();
         var clientHeight = $("html")[0].clientHeight;
         var lastBox = this.main.children(":last");
         //加载到最后一张图片再次加载数据
         if(scrollTop + clientHeight > lastBox.offset().top){
             //如果已经加载，就return 0关闭，如果为false关闭就变为true
             if(this.loading){
                 return 0
             }
             if(this.page>3){
                 return 0;
            }
             this.loading = true;
            // console.log("加载");
             this.page ++;
             this.loadJson()
             .done(function(res){
                 this.renderPage(res);

             })
            

         }
         
         
     }
 })

  var waterfall = new WaterFall();
  waterfall.init();


  