$.get("http://47.104.244.134:8080/goodsbytid.do",{
		tid:13,
		page:1,
		limit:12
	},function(data){
		var Data = data.data;
		var str = "";
		for (var i = 0;i < Data.length;i++) {
			str += 
			`
			<li class="alist">
			<dl>
			<dt><img src="${Data[i].picurl}" data-id="${Data[i].id}"></dt>
			<dd class="info">${Data[i].info}</dd>
			<dd class="name">${Data[i].name}</dd>
			<dd class="price">￥${Data[i].price}元</dd>
			</dl>
			<a class="Btn" id="btn" Data-id="${Data[i].id}">加入购物车</a>
			</li>
				`;
		};
		$(".list").html(str);
		
		for(i=0 ;i<$(".alist dl dt img").length;i++){
			
			$(".alist dl dt img").eq(i).click(function(){
					
				var id=$(this).attr("data-id");
				location.href = "xq.html?id=" + id;
			})
		}
	
	})



		