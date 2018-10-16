 //倒计时：
 nowtime();
 setInterval(function(){
    nowtime();

},1000)
function nowtime(){
    var d=new Date();
    var now=d.getTime();

    var d2=new Date("2018/10/19 00:00:00");
    var future=d2.getTime();
 
    var n=future-now;
    var shour=parseInt(n/1000/3600);
    var sminute=parseInt((n-shour*3600*1000)/1000/60);
    var ssecond=parseInt((n-shour*3600*1000-sminute*1000*60)/1000);


if(shour<10){
    shour="0"+shour;
}
if(sminute<10){
    sminute="0"+sminute;
}
if(ssecond<10){
    ssecond="0"+ssecond;
}

hour.innerHTML=(shour);
minute.innerHTML=(sminute);
second.innerHTML=(ssecond);
    
}

 //无缝轮播  秒杀后面
  
 $(function(){			
    function Banner(){}
      $.extend(Banner.prototype,{
          // 写法是兼容的;
          init : function(options){
             // 所有的图片;
             this.item_list = $(options.item_list);
             // 左按钮 ;
             this.left_btn = $(options.left_btn);
             // 右按钮 ;
             this.right_btn = $(options.right_btn);
             // 按钮列表;
             //this.btn_list = $(options.btn_list);
             this.nowIndex = 0;
             // 有多少元素;
             this.item_num = this.item_list.length;
            this.ul = $(".show ul");
            //  this.ul=$(options.ul)
             // 获取列表中第一个元素的宽度值;
             this.item_width = this.item_list.width();
            //this.item_width = $(".show li").css("width");          
             this.bindEvent();
          },
          bindEvent : function(){           
              this.left_btn.click($.proxy(this.prev , this));
              this.right_btn.click($.proxy(this.next , this));
          },
          next:function(){
              if( this.nowIndex == this.item_num - 1){
                  this.nowIndex = 1;
                  this.ul.css({
                      left : 0
                  })
               
              }else{
                  this.nowIndex ++;
              }
              this.animate();
          },
          prev:function(){
              // console.log(this);
              if( this.nowIndex == 0){
                  this.nowIndex = this.item_num - 2;
                  this.ul.css({
                      left : -(this.item_num - 1) * this.item_width
                  })
              }else{
                  this.nowIndex --;
              }

              this.animate();
          },
       
          animate:function(){
              // console.log(this.nowIndex);
              this.ul.stop().animate({
                  left : -960 * this.nowIndex
              })
       
          },
         
          stopPlay:function(){
              clearInterval(this.autoPlay_timer);
        
          },
          autoPlay : function(){
            this.time = setInterval(function(){
                // this.next()
                if(this.nowIndex == this.item_num-1){
                    this.nowIndex = 1;
                    this.ul.css({
                        left: 0
                    })
                }else{
                    this.nowIndex ++;
                }
                this.animate();
            }.bind(this),5000)
    
        }
      })

      var banner = new Banner();
      banner.init({
          item_list : ".show li",
          left_btn : "#left",
          right_btn : "#right",
         
        
      })
      banner.autoPlay();

    //   var banner2 = new Banner();
    //   banner2.init({
    //       item_list : ".show2 li",
    //       left_btn : "#left",
    //       right_btn : "#right",
    //       ul:".show2 ul"
        
    //   })
    //   banner2.autoPlay();
  })


  //女装部分轮播图；
  $(function(){			
    function Bannergirl(){}
      $.extend(Bannergirl.prototype,{
          // 写法是兼容的;
          init : function(options){
             // 所有的图片;
             this.item_list = $(options.item_list);
             // 左按钮 ;
             this.left_btn = $(options.left_btn);
             // 右按钮 ;
             this.right_btn = $(options.right_btn);
             // 按钮列表;
             //this.btn_list = $(options.btn_list);
             this.nowIndex = 0;
             // 有多少元素;
             this.item_num = this.item_list.length;
             this.ul = $(".show2 ul");
             // 获取列表中第一个元素的宽度值;
             this.item_width = this.item_list.width();          
             this.bindEvent();
          },
          bindEvent : function(){           
              this.left_btn.click($.proxy(this.prev , this));
              this.right_btn.click($.proxy(this.next , this));
          },
          next:function(){
              if( this.nowIndex == this.item_num - 1){
                  this.nowIndex = 1;
                  this.ul.css({
                      left : 0
                  })
               
              }else{
                  this.nowIndex ++;
              }
              this.animate();
          },
          prev:function(){
              // console.log(this);
              if( this.nowIndex == 0){
                  this.nowIndex = this.item_num - 2;
                  this.ul.css({
                      left : -(this.item_num - 1) * this.item_width
                  })
              }else{
                  this.nowIndex --;
              }

              this.animate();
          },
       
          animate:function(){
              // console.log(this.nowIndex);
              this.ul.stop().animate({
                  left : -950 * this.nowIndex
              })
       
          },
         
          stopPlay:function(){
              clearInterval(this.autoPlay_timer);
        
          },
          autoPlay : function(){
            this.time = setInterval(function(){
                // this.next()
                if(this.nowIndex == this.item_num-1){
                    this.nowIndex = 1;
                    this.ul.css({
                        left: 0
                    })
                }else{
                    this.nowIndex ++;
                }
                this.animate();
            }.bind(this),5000)
    
        }
      })

      var banner = new Bannergirl();
      banner.init({
          item_list : ".show2 li",
          left_btn : "#left2",
          right_btn : "#right2",
        
      })
      banner.autoPlay();
  })
