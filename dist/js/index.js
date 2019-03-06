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
	
	$(".N5-2 li").on("mouseover",function(){
		$(this).find(".like").show()
	});
	$(".N5-2 li").on("mouseout",function(){
		$(this).find(".like").hide()
	});
	
	$(".lists li").on("mouseover",function(){
		$(this).find(".listli").show()
	});
	$(".lists li").on("mouseout",function(){
		$(this).find(".listli").hide()
	});
	
})
$(function(){
	$(window).scroll(function(e){
		
		var top =$(window).scrollTop();
					if(top>=116){
						$(".cup").css({"position":"fixed","top":0})	
					}else if(top<116){
					   $(".cup").css({"position":"static"})			
					}
	})
	
})
$(function(){
	$(window).scroll(function(e){
		
		var _top =$(window).scrollTop();
					if(_top>=420){
						$(".floorNav").css({"position":"fixed","top":"80px"})	
					}else if(_top<420){
					   $(".floorNav").css({"position":"absolute","top":"500px"})			
					}
					
	})
	
})






$(function(){
	var count=0;
	var timer1 = setInterval(function(){
		move();  
			},2200)
	    function move(){
	    	$(function(){
	    	$(".cover-1").stop().animate({"left":(count)*-500+"px"});
		    $(".main li").eq(count).addClass("select")
           .siblings().removeClass("select");
		    count++;
		    if(count== $(".cover-1 li").length){
			     count=0			
			}
	    	})	
		}
	
	    $(".core-1").on("mouseover",function(){
		$(".core-1 span").show()
		clearInterval(timer1)
	});
	
	$(".core-1").on("mouseout",function(){
		$(".core-1 span").hide()
		timer1=setInterval(function(){
			move();
		},2200)
	   
	});
		$(".prev").on("click",function(){
			
		  $(".cover-1").stop().animate({"left":(count)*(-500)+"px"});
		    $(".main li").eq(count).addClass("select")
           .siblings().removeClass("select");
		    count-=2;
			if(count== -4){
			     count=0			
			}
		})
		$(".next").on("click",function(){
			move();
		})
})
$(function(){
	var i=0;
	var timer2 = setInterval(function(){
		
					move2();
				  	
				  	},1600)
	function move2(){
	    	$(function(){
	    	$(".cover-2").stop().animate({"left":i*-500+"px"});
		    i++;
		    if(i== $(".cover-2 li").length){
			     i=0			
			}
	    	})	
		}
	   $(".core-2").on("mouseover",function(){
		$(".core-2 span").show()
		clearInterval(timer2)
	});  
	$(".core-2").on("mouseout",function(){
		$(".core-2 span").hide()
		timer2=setInterval(function(){
			move2();
		},1600)
		});
		$(".next1").on("click",function(){
			move2();
		})
})		
$(function(){
	var k=0;
	var timer3 = setInterval(function(){
		move3();  
			},2500)
	    function move3(){
	    	$(function(){
	    	$(".cover-bottom ul").stop().animate({"top":k*-94+"px"});
		    k++;
		    if(k== 3){
			    k=0			
			}
	    	})	
		}
	   $(".cover-bottom").on("mouseover",function(){
		clearInterval(timer3)
	});  
	$(".cover-bottom").on("mouseout",function(){
		timer3=setInterval(function(){
			move3();
		},2500) 
	})    
})
/*导航功能*/
$(function(){
	$(window).scroll(function(e){
		var Top =$(window).scrollTop();
		$(".floorNav li").each(function(){
			    
				     var index = $(this).index();
                     var top1 = $(".content li").eq(index).offset().top+500;
                     if(top1 >Top){  
                     $(".floorNav li").eq(index).addClass("hover")
                     .siblings().removeClass("hover");
                               return false;
   };
					})
					})
})			
				$(function(){
					$(".floorNav li:not(:last)").on("click",function(){
					var index = $(this).index();
                    var _top = $(".content li").eq(index).offset().top-75;
                    $("html, body").stop().animate({scrollTop:_top}, 400);
					});
				$(".floorNav li:last").click(function(){
					$("html, body").animate({scrollTop:0},1000);
				});		
				})
					
					
					
					
		
	
