
/**
 * 需引入
 * 		<script src="//cdn.bootcss.com/dynamics.js/1.1.5/dynamics.js"></script>
 */

function showRight(){
	$('.right').css("right","0px");
	$('.rightMenu').css("left","0px");
	$('#rightIconShow').addClass("show");
	$('#rightIconHide').removeClass("show");
}

function hideRight(){
	$('.right').css("right","-250px");
  $('.rightMenu').css("left","-100px");
	$('#rightIconHide').addClass("show");
	$('#rightIconShow').removeClass("show");
}

function showTop(){
	$('.top').css("top","0px");
	$('.topMenu').css("bottom","0px");
	$('#topIconShow').addClass("show");
	$('#topIconHide').removeClass("show");
}

function hideTop(){
	$('.top').css("top","-250px");
  $('.topMenu').css("bottom","-210px");
	$('#topIconHide').addClass("show");
	$('#topIconShow').removeClass("show");
}
