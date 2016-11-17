//代码高亮
function hlLoad(){
	hljs.initHighlighting()
	// $('pre code').each(function(i, block){    hljs.highlightBlock(block);  });
}
//跳转页面
function go(id){
	window.location.href='pit.html?type='+id;
}
//加载列表
function ListPit(){
	//var Search = $("#Search").val();
	var query = new AV.Query('PitSource');
		//query.equalTo('查询字段', '内容');
		query.include('BasePit');
    	query.limit(30);// 最多返回 10 条结果
    	query.skip((page-1)*30);
    	query.find({
    		success: function(results) {
    			page ++;
    			for (var i = 0; i < results.length; i++) {
    				$("#pitList").append('<div onclick="go(\''+results[i].id+'\')" class="item">'+results[i].get("BasePit").get("BasePitName")+"·"+results[i].get("PitName")+'</div>');
    			};


    		},
    		error: function(error) {
    			console.log('Error: ' + error.code + ' ' + error.message);
    		}
    	});
    }
//切换Base面板
function showBasePit(){
	$("#BaseBox").toggle(500);
}
//提交PitSource
function PitPost(){
	if (PitText()) {
		console.log("true")
		var PitSource = AV.Object.extend('PitSource');
		var PitSource = new PitSource();
		var BasePit = AV.Object.createWithoutData('BasePit', $("input[name='OBasePitId']").val());
		PitSource.set("BasePit",BasePit);
		PitSource.save({
			PitName: $("input[name='PitName']").val(),
			PitUrl: $("input[name='PitUrl']").val(),
			PitLogo: $("input[name='PitLogo']").val(),
			Pitinfo: $("input[name='Pitinfo']").val(),
		}, {
			success: function(object) {
				layer.msg('保存成功！');
			},
			error: function(object) {
				layer.msg('保存失败！');
			}
		}
		);
	}else{
		layer.msg('请正确填写表单内容');
	};
}
//PitSource检查
function PitText(){
	var b = true;
	$(".Pit").each(function(){
		if($(this).val()==""){
			b = false;
		}
	});
	$(".Pit").each(function(){
		if($(this).closest('div').is('.error')){
			b = false;
		}
	});

	return b;
}
//BasePit提交
function BasePitPost(){
	if (BaseText()) {
		console.log("true")
		var BasePit = AV.Object.extend('BasePit');
		var BasePit = new BasePit();
		BasePit.save({
			BasePitName: $("input[name='BasePitName']").val(),
			BasePitUrl: $("input[name='BasePitUrl']").val(),
			BasePitLogo: $("input[name='BasePitLogo']").val(),
			BasePitinfo: $("input[name='BasePitinfo']").val(),
		}, {
			success: function(object) {
				layer.msg('保存成功！');
			},
			error: function(object) {
				layer.msg('保存失败！');
			}
		}
		);
	}else{
		layer.msg('请正确填写表单内容');
	};
}
//Base检查
function BaseText(){
	var b = true;
	$(".Base").each(function(){
		if($(this).val()==""){
			b = false;
		}
	});
	$(".Base").each(function(){
		if($(this).closest('div').is('.error')){
			b = false;
		}
	});
	return b;
}
//添加面板出现
function addBasePitShow(){

	layer.open({
		title: '添加Pit【坑】',
		type: 1,
	area: ['580px', ''], //宽高
	content: pitadd
});
	initForm();
}
//初始化from表单
function initForm(){
	$('input[name]:not([name="OBasePitName"])').bind('input propertychange', function() {
		if ($(this).val().length==0) {
			$(this).closest('div').addClass("error");
			$(this).closest('div').removeClass("success");
		}else{
			$(this).closest('div').addClass("success");
			$(this).closest('div').removeClass("error");
		};
	});
	$('input[name="OBasePitName"]').bind('blur', function() {
		var query = new AV.Query('BasePit');
		query.equalTo('BasePitName',$(this).val() );
		query.find({
			success: function(results) {
				console.log('success: ' + results.length);
				if (results.length==0) {
					$('input[name="OBasePitName"]').closest('div').addClass("error");
					$('input[name="OBasePitName"]').closest('div').removeClass("success");
					$('input[name="OBasePitId"]').val("");
				}else{
					$('input[name="OBasePitName"]').closest('div').addClass("success");
					$('input[name="OBasePitName"]').closest('div').removeClass("error");
					$('input[name="OBasePitId"]').val(results[0].id);
				}
			},
			error: function(error) {
				console.log('Error: ' + error.code + ' ' + error.message);
			}
		});
	});
}


function initView(){


    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);


	//logo颜色渐变动画
	$(".logo").gradientify({
		gradients: [
		{ start: [49,76,172], stop: [242,159,191] },
		{ start: [255,103,69], stop: [240,154,241] },
		{ start: [33,229,241], stop: [235,236,117] }
		]
	});
	$(".logoBG").gradientify({
		gradients: [
		{ start: [49,76,172], stop: [242,159,191] },
		{ start: [255,103,69], stop: [240,154,241] },
		{ start: [33,229,241], stop: [235,236,117] }
		]
	});
}
/**
 * 添加自定义功能
 */
 function initUtil(){

		Date.prototype.Format = function (fmt) { //author: meizz 
			var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    	if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
}
