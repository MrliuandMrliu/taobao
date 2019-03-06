
			var id=location.search.split("=")[1];
			console.log(id);
			var str="";
$.get("http://47.104.244.134:8080/goodsbyid.do",{
	"id":id
},function(data){
	console.log(data);
	str += 
			`
	<div id="xqimg" class="img" style="margin:0">
	<img src="${data.picurl}" width="500" height="500"/>
	</div>
	<div id="text">
	<h1 class="dal">${data.name}</h1>
	<p class="sale">${data.info}</p>
	<p class="saled" id="sdec"><span>上架时间:</span>${data.pubdate}</p>
	<span class="sp1">单价:</span><span class="price">${data.price}元</span>
	<a class="btn" data-id = "${data.id}">加入购物车</a>
	</div>
			
				`
	$(".xq").html(str);
});
  
