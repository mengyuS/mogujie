function ajaxGet(url){
    return new Promise(function(success,failed){
        var xhr = new XMLHttpRequest();
        xhr.open("GET",url);
        xhr.send(null);
        xhr.onload = function(){
            if(xhr.status == 200){
                success(xhr.response);
            }
        }
    })
}
function ajaxPost(url,data){
    return new Promise(function(success,failed){
        var xhr = new XMLHttpRequest();
        xhr.open("POST",url);
    
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8 ");
        xhr.send(data);
    
        xhr.onload = function(){
            if(xhr.status == 200){
                success(xhr.response);
            }
        }
        
    })
   
}
function jsonp(url,call){
    return  new Promise(function(success,failed){
        // 1. 全局函数;
        var cb_name = "hz" + new Date().getTime();
        window[cb_name] = function(res){
            success(res);
        }
        
        // 2. 创建script标签;
        var script = document.createElement("script");
        var opt = /\?/.test(url) ? "&" : "?";
        //     // 没有问号的是 ? 有了问号 & 
        var path = path;
        script.src = url + "?" + call + "=" + cb_name;
       // console.log(cb_name);
        document.body.appendChild(script);
        // console.log(script);
        script.onload = function(){
            this.remove();
        }
    })
}