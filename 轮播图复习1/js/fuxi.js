//自动开启定时器
//鼠标移入 图片,停止定时器
var timer = setInterval(change,1000);
var setpage = 1 ;
function change(){
	if(setpage >=1 && setpage <=8){
			cha();
		setpage ++;
	}else{
		setpage =1 ;
		cha();
	}
}
function cha(){
	$('img').attr('src','../img/img/七彩神仙鱼' + setpage + '.jpg');
}

//鼠标移入 图片,停止定时器
$('#box').mouseover(function(){
	clearInterval(timer);
})
//鼠标移出。重启定时器
$('#box').mouseout(function(){
	timer = setInterval(change,1000);
})
//鼠标移入,显示左右箭头

$('#box').mouseover(function(){
	$('.dianji').css('display','block');
})
//鼠标移出，箭头隐藏
$('#box').mouseout(function(){
	$('.dianji').css('display','none');
})
//为左箭头绑定事件
var left = $('#left');
left.click(function(){
	if(setpage > 1){
		setpage --;
		cha();
	}else{
		setpage = 9;
		cha();
	}
})
//为右箭头绑定事件
var right = $('#right');
right.click(function(){
	if(setpage < 9){
		setpage ++;
		cha();
	}else{setpage =1;
		cha();
	}
})
//为圆点绑定移入事件，背景变红，页面跳转到对应数字页
/* $('.item').mouseover(function(){
	var a = $('.item').text();
	console.log(a);
})
 */
//console.log($('.item')[0].value;
/* for(var i =0;i < $('.item').length;i++){
	console.log($('.item').length);
	console.log($('.item').eq(0);
	 $('.item').eq([i]).nouseover(function(){
		 $('.item').eq([i]).css('background','red');
		
	})
} */


for(var i = 0;i < $('#uu').length;i ++){
	//先把所有的圆点颜色改为初始背景色
	$('#uu li').css('background','rgba(255,255,255,0.6)');

	$('#uu li').on('mouseover',function(){
		var a = $('#uu li')[i];
		$(a).css('background','red');
		
		
		
	})
}





