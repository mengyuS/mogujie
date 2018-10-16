<?php
    header("Content-Type:text/html;charset=utf-8;");

    $username = @$_POST['username'];
    $password = @$_POST['password'];

    if($username == "" || $password == ""){
        die("参数不全");
    }


    $con = mysql_connect("localhost","root","123456");
    if(!$con){
        die("数据库连接失败");
    }

    mysql_select_db("user",$con);

    $result = mysql_query("SELECT username,password FROM
                          userlist WHERE username='$username'");
    
    $password = md5($password);
    while($row=mysql_fetch_array($result)){
        if($row['password']==$password){
            die("登录成功");
        }
    }
    echo mysql_error();
    echo "账号或密码不正确";

   


?>