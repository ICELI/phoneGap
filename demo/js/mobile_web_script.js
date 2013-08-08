//20130523 Iceli 迭代内容客房预订
$(document).ready(function() {
	// 隐藏地址栏  & 处理事件的时候 ，防止滚动条出现
	addEventListener('load', function(){ 
			setTimeout(function(){ window.scrollTo(0, 1); }, 100); 
	});
	//预订人数
	$(".minus_btn").bind("click",function(){
		var o_num = $(".order_number").val(); 
		if(o_num == 1){
			return false;
			}else{
				$(".order_number").val(--o_num);
				}
		});
	$(".plus_btn").bind("click",function(){
		var o_num = $(".order_number").val(); 
			$(".order_number").val(++o_num);
		});	
	//选择到店时间
	$(".show_calendar_Page").bind("click",function(){
		var _scp = $(this).attr("id");
		var obj = $(this).attr("class").replace("show_","");
		showSliderpage(obj);
		$("#calendar_Page").attr("date-type",_scp);
		if($("#calendar_Page").attr("date-type") == "eContent"){	
			$(".td_hao").each(function(index, element) {
				if($(this).attr("date-data") == $("#start_date").html()){
					for(var i=0;i<=index;i++){
						$(".td_hao").eq(i).addClass("disabled").attr("onclick","");	
						}
					}
				});
			}else{
					$(".disabled").attr("onclick","show(this);").removeClass("disabled");	
				}
		});
	//保留到店时间
	$(".show_arrive_time_page").bind("click",function(){
		var obj = $(this).attr("class").replace("show_","");
		showSliderpage(obj);
		});
	//弹出日历表
	function showSliderpage(obj){
		var w = $("body").width();
		$("#"+obj).addClass("active");
		window.scrollTo(0,1);
		$("#"+obj).css({"display":"block","-webkit-transform":"translate3d("+w+"px,0,0)"}).animate({translate3d:"0,0,0"},300,'ease-in',function(){
			$("#room_order_page").css({"display":"none"});
			});	
		}
	//返回按钮
	$(".previous_btn").bind("click",function(){
		var _this = $(this);
		goBack(_this);
		});		
	//选择预留时间
	$(".arrive_time_list li a").bind("click",function(){
		var _this = $(this);
		var thisVal = $(this).text();
		$(".arriveTime").html(thisVal);
		goBack(_this);
		});
		
	function goBack(_this){
		window.scrollTo(0,1);
		var w = $("body").width();
		$("#room_order_page").css({"display":"block"});
		_this.parents(".slider_page").animate({translate3d:w+"px,0,0"},300,'ease-out',function(){
			$("#room_order_page").css({"display":"block"});//防止误点两次导致页面空白
			_this.parents(".slider_page").css({"display":"none","-webkit-transform":""});
			});
	}
	
	var masks = []; 
	masks[0] = document.querySelector('.mask1'); 
	masks[1] = document.querySelector('.mask2'); 
	masks[2] = document.querySelector('.mask3'); 
	
	for(var i = 0, l = masks.length; i < l; i++) { 
		if(masks[i]) { 
		masks[i].addEventListener('touchmove', function(e){e.preventDefault();}, false); 
		} 
	}
	//hideFooter();
	//var t = setInterval(hideFooter(),1000);
	function hideFooter(){
		alert(0);	
		try{ 
			if(window.WeixinJSBridge){
				alert(1);
				$("footer").remove();
				}
		}catch(e) { 
			alert(2);
			hideFooter();
		}
		}
	
   /*	$(".apply_btn").bind("click",function(){
		$("html").css("overflow","hidden");
		$(".mask1").show();
		});*/
	$(".share_btn a").bind('click',function(){
		$("html").css("overflow","hidden");
		$(".mask2").show();
		});
	$(".save_btn a").bind('click',function(){
		$("html").css("overflow","hidden");
		$(".mask3").show();
		});			
//Home img	
var t = setInterval("bChange()",5000);
});
//
function bChange(){
$(".banner li").eq(0).appendTo(".banner");
var bImgLen = $(".banner li").length;
for(var i=0; i < bImgLen; i++){
  $(".banner li").eq(i).css({"z-index":i}); 
   }
$(".banner li").eq(bImgLen-1).css({"opacity":"0"}).animate({"opacity":"1.0"},1000);  
}
//关闭报名窗口
function closeWindow(){
	$("html").css("overflow","");
	$(".mask1,.mask2,.mask3").hide();
	}

			