$(function(){
	$(".ul-1 li").eq(0).on("mouseover",function(){
		$(".d-1").show()
	});
	$(".ul-1 li").on("mouseout",function(){
		$(".d-1").hide()
	});
	
	$(".ul-2 li").eq(0).on("mouseover",function(){
		$(".d-2").show()
	});
	$(".ul-2 li").eq(0).on("mouseout",function(){
		$(".d-2").hide()
	});
	
	$(".c-3").on("mouseover",function(){
		$(".d-3").show()
	});
	$(".c-3").on("mouseout",function(){
		$(".d-3").hide()
	});
	
	$(".c-4").on("mouseover",function(){
		$(".d-4").show()
	});
	$(".c-4").on("mouseout",function(){
		$(".d-4").hide()
	});
	
	$(".c-5").on("mouseover",function(){
		$(".d-5").show()
	});
	$(".c-5").on("mouseout",function(){
		$(".d-5").hide()
	});	
})

$(function(){
	$(".txt").change(function(){
				var user1=$(this).val();
				var reg = /^\w{4,10}/;
				if(user1==0){
					$(".spn1").html("账号不可以为空!");
				}else if (!reg.test(user1)) {
					$(".spn1").html("请输入4-10个以数字、字母、下划线开头的用户名").css({"color":"#f00"});
					return false;
				}else{
					$(".spn1").html("");
				}
				
				$.get("http://47.104.244.134:8080/username.do",{"username":$(".txt").val()},function(data){
					//验证是否重名
					if(data.code==0){
						$(".spn1").html("用户名已存在!").css({"color":"#f00"});
					}
				});
			});
			//密码验证
			$(".pass").change(function(){
				var pwd=$(this).val();
				var reg = /^\w{6,20}$/;
				if(pwd==0){
					$(".spn2").html("密码不可以为空!").css({"color":"#f00"});
				}else if (!reg.test(pwd)) {
					$(".spn2").html("请输入6-20个字母、数字、下划线").css({"color":"#f00"});
					return false;
				}else{
					$(".spn2").html("");
				}
				
				$.get("http://47.104.244.134:8080/username.do",{"password":$(".pass").val()},function(data){
					if(data.code==0){
						$(".spn2").html("密码不正确！");
					}
				
			})	
			});
			//邮箱验证
			$(".eml").change(function(){
				var emal=$(this).val();
				var reg = /^\w+@\w+(\.\w+)+$/;
				if(emal==0){
					$(".spn3").html("邮箱不可以为空!").css({"color":"#f00"});
				}else if (!reg.test(emal)) {
					$(".spn3").html("请输入正确的邮箱格式").css({"color":"#f00"});
					return false;
				}else{
					$(".spn3").html("");
				}
				
				/*$.get("http://47.104.244.134:8080/username.do",{"email":$(".eml").val()},function(data){
					if(data.code==0){
						$(".spn3").html("邮箱不正确！");
					}
				});*/
				});
				
		//手机号验证
		$(".tel").change(function(){
				var tel=$(this).val();
				var reg = /^1(3|5|7|8)\d{9}$/g;
				if(tel==0){
					$(".spn4").html("请填写手机号!").css({"color":"#f00"});
				}else if (!reg.test(tel)) {
					$(".spn4").html("请输入正确格式的手机号码").css({"color":"#f00"});
					return false;
				}else{
					$(".spn4").html("");
				}
			});
			//注册验证
			$(".btn").on("click",function(){
				$.post("http://47.104.244.134:8080/usersave.do",{"username":$(".txt").val(),"password":$(".pass").val(),"email":$(".eml").val(),"sex":"男"},function(data){})
				
				
				
				$.get("http://47.104.244.134:8080/username.do",{"username":$(".txt").val()},function(data){
					
					if(data.code==0){
						$(".spn1").html("用户名为空或者已经被他人占用！").css({"color":"#f00"});
					}else{
						$(".spn5").html("注册成功");
						var timer=setTimeout(function(){
							$(location).attr("href","index.html");
						}, 2000);
					}
				});
				
			});
			
			
})
			
