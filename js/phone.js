var typeCode = {1:"16GB",2:"32GB",3:"64GB",4:"128GB",5:"深空灰",6:"银白色",7:"香槟金",8:"玫瑰金",9:"256GB"}
            	var drimgs ={iphone6s:[{m:"http://store.storeimages.cdn-apple.com/8748/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6s/silver/iphone6s-silver-select-2015_AV1?wid=150&hei=305&fmt=png-alpha&qlt=95&.v=1466197978953"},{m:"http://store.storeimages.cdn-apple.com/8748/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6s/gold/iphone6s-gold-select-2015_AV1?wid=150&hei=305&fmt=png-alpha&qlt=95&.v=1466197979238"},{m:"http://store.storeimages.cdn-apple.com/8748/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6s/gray/iphone6s-gray-select-2015_AV1?wid=150&hei=305&fmt=png-alpha&qlt=95&.v=1466197977841"},{m:"http://store.storeimages.cdn-apple.com/8748/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6s/rosegold/iphone6s-rosegold-select-2015_AV1?wid=150&hei=305&fmt=png-alpha&qlt=95&.v=1466197977564"}],
            	iphone6:[{m:"http://store.storeimages.cdn-apple.com/8748/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6s/silver/iphone6s-silver-select-2015_AV1?wid=150&hei=305&fmt=png-alpha&qlt=95&.v=1466197978953"},{m:"http://store.storeimages.cdn-apple.com/8748/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6s/gold/iphone6s-gold-select-2015_AV1?wid=150&hei=305&fmt=png-alpha&qlt=95&.v=1466197979238"},{m:"http://store.storeimages.cdn-apple.com/8748/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6s/gray/iphone6s-gray-select-2015_AV1?wid=150&hei=305&fmt=png-alpha&qlt=95&.v=1466197977841"}
            	],}

            	var infos ={ iphone6:[{price:"2499",appleprice:"3699",jdprice:"3699",size:typeCode[1],color:typeCode[5]},
            	{price:"2599",appleprice:"3699",jdprice:"3699",size:typeCode[1],color:typeCode[6]},
            	{price:"3150",appleprice:"3699",jdprice:"3399",size:typeCode[1],color:typeCode[7]},
            	{price:"----",appleprice:"----",jdprice:"----",size:typeCode[1],color:typeCode[8]},
            	{price:"2999",appleprice:"4399",jdprice:"4399",size:typeCode[3],color:typeCode[5]},
            	{price:"3099",appleprice:"4399",jdprice:"4399",size:typeCode[3],color:typeCode[6]},
            	{price:"3199",appleprice:"4399",jdprice:"4099",size:typeCode[3],color:typeCode[7]},
            	{price:"----",appleprice:"----",jdprice:"----",size:typeCode[3],color:typeCode[8]},
            	{price:"3150",appleprice:"----",jdprice:"----",size:typeCode[4],color:typeCode[5]},
            	{price:"3250",appleprice:"----",jdprice:"----",size:typeCode[4],color:typeCode[6]},
            	{price:"3299",appleprice:"----",jdprice:"----",size:typeCode[4],color:typeCode[7]},
            	{price:"----",appleprice:"----",jdprice:"----",size:typeCode[4],color:typeCode[8]}
            	],
            	iphone6s:[{price:"2950",appleprice:"4388",jdprice:"3999",size:typeCode[1],color:typeCode[5]},
            	{price:"3050",appleprice:"4388",jdprice:"3999",size:typeCode[1],color:typeCode[6]},
            	{price:"3150",appleprice:"4388",jdprice:"3999",size:typeCode[1],color:typeCode[7]},
            	{price:"3150",appleprice:"4388",jdprice:"3999",size:typeCode[1],color:typeCode[8]},
            	{price:"3700",appleprice:"5088",jdprice:"5088",size:typeCode[3],color:typeCode[5]},
            	{price:"3800",appleprice:"5088",jdprice:"5088",size:typeCode[3],color:typeCode[6]},
            	{price:"3900",appleprice:"5088",jdprice:"5088",size:typeCode[3],color:typeCode[7]},
            	{price:"3900",appleprice:"5088",jdprice:"5088",size:typeCode[3],color:typeCode[8]},
            	{price:"4000",appleprice:"5388",jdprice:"5388",size:typeCode[4],color:typeCode[5]},
            	{price:"4100",appleprice:"5388",jdprice:"5388",size:typeCode[4],color:typeCode[6]},
            	{price:"----",appleprice:"5388",jdprice:"5388",size:typeCode[4],color:typeCode[7]},
            	{price:"----",appleprice:"5388",jdprice:"5388",size:typeCode[4],color:typeCode[8]}],

            }


		/*[
		{m:"iPhone 6s",
		sys_attrprice:{
			"1_5":{price:"2950",appleprice:"4388",jdprice:"3999"},
			"1_6":{price:"3050",appleprice:"4388",jdprice:"3999"},
			"1_7":{price:"3150",appleprice:"4388",jdprice:"3999"},
			"1_8":{price:"3150",appleprice:"4388",jdprice:"3999"},
			"3_5":{price:"3700",appleprice:"5088",jdprice:"5088"},
			"3_6":{price:"3800",appleprice:"5088",jdprice:"5088"},
			"3_7":{price:"3900",appleprice:"5088",jdprice:"5088"},
			"3_8":{price:"3900",appleprice:"5088",jdprice:"5088"},
			"4_5":{price:"4000",appleprice:"5388",jdprice:"5388"},
			"4_6":{price:"4100",appleprice:"5388",jdprice:"5388"},
			"4_7":{price:"----",appleprice:"5388",jdprice:"5388"},
			"4_8":{price:"----",appleprice:"5388",jdprice:"5388"},
		},from:"美版"},

		
		{m:"iPhone 6",
		sys_attrprice:{
			"1_5":{price:"2499",appleprice:"3699",jdprice:"3699"},
			"1_6":{price:"2599",appleprice:"3699",jdprice:"3699"},
			"1_7":{price:"3150",appleprice:"3699",jdprice:"3399"},
			"1_8":{price:"----",appleprice:"----",jdprice:"----"},
			"3_5":{price:"2999",appleprice:"4399",jdprice:"4399"},
			"3_6":{price:"3099",appleprice:"4399",jdprice:"4399"},
			"3_7":{price:"3199",appleprice:"4399",jdprice:"4099"},
			"3_8":{price:"----",appleprice:"----",jdprice:"----"},
			"4_5":{price:"3150",appleprice:"----",jdprice:"----"},
			"4_6":{price:"3250",appleprice:"----",jdprice:"----"},
			"4_7":{price:"3299",appleprice:"----",jdprice:"----"},
			"4_8":{price:"----",appleprice:"----",jdprice:"----"},
		},from:"美版"},
		{m:"iPhone 6",
		sys_attrprice:{
			"1_5":{price:"2499",appleprice:"3699",jdprice:"3699"},
			"1_6":{price:"2599",appleprice:"3699",jdprice:"3699"},
			"1_7":{price:"3150",appleprice:"3699",jdprice:"3399"},
			"1_8":{price:"----",appleprice:"----",jdprice:"----"},
			"3_5":{price:"2999",appleprice:"4399",jdprice:"4399"},
			"3_6":{price:"3099",appleprice:"4399",jdprice:"4399"},
			"3_7":{price:"3199",appleprice:"4399",jdprice:"4099"},
			"3_8":{price:"----",appleprice:"----",jdprice:"----"},
			"4_5":{price:"3150",appleprice:"----",jdprice:"----"},
			"4_6":{price:"3250",appleprice:"----",jdprice:"----"},
			"4_7":{price:"3299",appleprice:"----",jdprice:"----"},
			"4_8":{price:"----",appleprice:"----",jdprice:"----"},
		},from:"美版"},
		]*/
            /*	Vue.component('imgitem', {
            		props: ['url'],
            		template: '<div style="float:left;width:25%; text-align: center;">{{url}} <img style="margin:10px;" src="{{url}}"></div>'
            	})*/           	
            	/*Vue.component('imgitem', {
            		props: ['url'],
            		template: '<div style="float:left;width:25%; text-align: center;"><img style="margin:10px;"  v-bind:src="url.m"></div>'
            	})*/
var otype = {all:"不限",i5:"iPhone5",i5s:"iPhone5s",i6:"iphone6",ip6p:"iphone6Plus",ip6s:"iphone6s",ip6sp:"iphone6sPlus",ip7:"iphone7",ip7p:"iphone7Plus"};
var osize = {all:"不限",v16:"16GB",v32:"32GB",v64:"64GB",v128:"128GB",v256:"256GB"};
var ocolor = {all:"不限",JetBlack:"亮黑",Black:"黑色",silver:"银白色",Gold:"土豪金",RoseGold:"玫瑰金"};
var type = "不限";
var size = "不限";
var color = "不限";

var infoss=[
{type:otype.i6,price:"2499",submitDate:"2017-03-19 12:00",size:typeCode[1],color:typeCode[5]},
{type:otype.i6,price:"2599",submitDate:"2017-03-19 12:00",size:typeCode[1],color:typeCode[6]},
{type:otype.i6,price:"3150",submitDate:"2017-03-19 12:00",size:typeCode[1],color:typeCode[7]},
{type:otype.i6,price:"----",submitDate:"2017-03-19 12:00",size:typeCode[1],color:typeCode[8]},
{type:otype.i6,price:"2999",submitDate:"2017-03-19 12:00",size:typeCode[3],color:typeCode[5]},
{type:otype.i6,price:"3099",submitDate:"2017-03-19 12:00",size:typeCode[3],color:typeCode[6]},
{type:otype.i6,price:"3199",submitDate:"2017-03-19 12:00",size:typeCode[3],color:typeCode[7]},
{type:otype.i6,price:"----",submitDate:"2017-03-19 12:00",size:typeCode[3],color:typeCode[8]},
{type:otype.i6,price:"3150",submitDate:"2017-03-19 12:00",size:typeCode[4],color:typeCode[5]},
{type:otype.i6,price:"3250",submitDate:"2017-03-19 12:00",size:typeCode[4],color:typeCode[6]},
{type:otype.i6,price:"3299",submitDate:"2017-03-19 12:00",size:typeCode[4],color:typeCode[7]},
{type:otype.i6,price:"----",submitDate:"2017-03-19 12:00",size:typeCode[4],color:typeCode[8]}
];

function refreshTable(){
	$("#appList").empty();
	var json ;
if (localStorage.phone !== "") {
	
	json = JSON.parse(localStorage.phone)
	var div ="";
	for (var i = json.length - 1; i >= 0; i--) {
		var p = json[i]; 
		if (type==p.type || type == "不限") {
			if (size==p.size || size == "不限") {
				if (color==p.color || color == "不限") {
					switch(i){
						case json.length - 1:
						div += '<div class="cell one">'
						break;
						case json.length - 2:
						div += '<div class="cell two">'
						break;
						case json.length - 3:
						div += '<div class="cell three">'
						break;
						default :
						div += '<div class="cell">'
						break;
					}
					div += '<span>'+p.type+'</span>'
					div += '<span>'+p.color+'</span>'
					div += '<span>'+p.size+'</span>'
					div += '<span>'+p.price+'</span>'
					div += '<span style="width:14%">'+p.submitDate+'</span>'
					div += '<button class="addjson" data-json='+JSON.stringify(p)+'>'+p.+'</button></div>'
				}
			}
		}
		
	}
	$("#appList").append(div);
	}
}

$(function(){

initType();

localStorage.phone = JSON.stringify(infoss)
refreshTable();

		 //logo颜色渐变动画
		 $(".logo").gradientify({
		 	gradients: [
		 	{ start: [0, 184, 255], stop: [110, 213, 108] },
		 	{ start: [255,103,69], stop: [240,154,241] },
		 	{ start: [33,229,241], stop: [235,236,117] }
		 	]
		 });
            //美化浏览器的滚动条
            $("html").niceScroll({
            	touchbehavior:false,cursorcolor:"#6ed56c",cursoropacitymax:1,cursorwidth:5,horizrailenabled:true,cursorborderradius:5,autohidemode:true,background:'none'
            });
        
           
            $('.niceScroll').niceScroll({ 
			    cursorcolor: "#6ed56c",//#CC0071 光标颜色 
			    cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0 
			    touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备 
			    cursorwidth: "5px", //像素光标的宽度 
			    cursorborder: "0", //     游标边框css定义 
			    cursorborderradius: "5px",//以像素为光标边界半径 
			    autohidemode: true //是否隐藏滚动条 
			});
            
});
function initType(){

var otyped = "";
jQuery.each(otype, function(i, val) {  
	if (val==type) {
		otyped += '<div data-key="'+i+'" class="type active">'+val+'</div>';
	}else{
    	otyped += '<div data-key="'+i+'" class="type">'+val+'</div>';
	}
});  
$("#type").append(otyped);

var osized = "";
jQuery.each(osize, function(i, val) {  
	if (val==size) {
		osized += '<div data-key="'+i+'" class="size active">'+val+'</div>';
	}else{
    	osized += '<div data-key="'+i+'" class="size">'+val+'</div>';
	}
});  
$("#size").append(osized);

var ocolord = "";
jQuery.each(ocolor, function(i, val) {  
	if (val==color) {
		ocolord += '<div data-key="'+i+'" class="color active">'+val+'</div>';
	}else{
    	ocolord += '<div data-key="'+i+'" class="color">'+val+'</div>';
	}
});  

$("#color").append(ocolord);

$(".type").each(function(){
	$(this).click(function(){
		$(".type.active").removeClass("active");
		$(this).addClass("active");
		type = eval("otype."+$(this)[0].dataset.key);
		refreshTable();
	});
})
$(".size").each(function(){
	$(this).click(function(){
		$(".size.active").removeClass("active");
		$(this).addClass("active");
		size = eval("osize."+$(this)[0].dataset.key);
		refreshTable();
	});
})
$(".color").each(function(){
	$(this).click(function(){
		$(".color.active").removeClass("active");
		$(this).addClass("active");
		color = eval("ocolor."+$(this)[0].dataset.key);
		refreshTable();
	});
})
}
var formatDateTime = function (date) {  
    var y = date.getFullYear();  
    var m = date.getMonth() + 1;  
    m = m < 10 ? ('0' + m) : m;  
    var d = date.getDate();  
    d = d < 10 ? ('0' + d) : d;  
    var h = date.getHours();  
    var minute = date.getMinutes();  
    minute = minute < 10 ? ('0' + minute) : minute;  
    return y + '-' + m + '-' + d+' '+h+':'+minute;  
};  
