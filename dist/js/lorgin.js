
$(function(){
	
		$(".txt").change(function() {
			var user1 = $(this).val();
			var reg = /^\w{4,10}/;
			if(user1 == 0) {
				$(".spn1").html("用户名不能为空!").css({
					"color": "#f00"
				});
			} else if(!reg.test(user1)) {
				$(".spn1").html("请输入4-10个以数字、字母、下划线开头的用户名").css({
					"color": "#f00"
				});
				return false;
			} else {
				$(".spn1").html("");
			}
		});
	
		$(".pass").change(function() {
			var pwd1 = $(this).val();
			var reg = /^\w{6,20}$/;
			if(pwd1 == 0) {
				$(".spn2").html("密码不可以为空!").css({
					"color": "#f00"
				});
			} else if(!reg.test(pwd1)) {
				$(".spn2").html("请输入6-20个字母、数字、下划线").css({
					"color": "#f00"
				});
				return false;
			} else {
				$(".spn2").html("");
			}
		});
		
		$(".btn").on("click",function(){
			$.get("http://47.104.244.134:8080/username.do",{"username":$(".txt").val(),"password": $(".pass").val()},function(data){
					console.log(data);
					if(data.code==0){
						$(".spn3").html("登录成功");
						var timer=setTimeout(function(){
							$(location).attr("href","index.html");
						}, 1000);
					}else{
						$(".spn3").html("用户名不存在！").css({"color": "#f00"});
					}
			});
		})
			
})
		
