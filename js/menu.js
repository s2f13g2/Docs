
/**
 * 需引入
 * 		<script src="//cdn.bootcss.com/dynamics.js/1.1.5/dynamics.js"></script>
 */

function showRight(){
	$('.right').css("right","0px");
	$('.rightMenu').css("left","0px");
	$('#rightIconShow').addClass("show");
	$('#rightIconHide').removeClass("show");
	$('#rootIcon').css("left","-70px");
}

function hideRight(){
	$('.right').css("right","-280px");
    $('.rightMenu').css("left","-70px");
	$('#rightIconHide').addClass("show");
	$('#rightIconShow').removeClass("show");
	$('#rootIcon').css("left","70px");
}

function showTop(){
	$('.top').css("top","0px");
	$('.topMenu').css("bottom","0px");
	$('#topIconShow').addClass("show");
	$('#topIconHide').removeClass("show");
}

function hideTop(){
	$('.top').css("top","-280px");
  $('.topMenu').css("bottom","-210px");
	$('#topIconHide').addClass("show");
	$('#topIconShow').removeClass("show");
}
