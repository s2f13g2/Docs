	
	var year = "";
	var month = "";


$(function(){
		AV.initialize('SjjFjAplld6vV6jzijyD6mlW-gzGzoHsz', 'Lz5eBF5NbrqdSXlXdi7pawEf');
// 初始化 param1：应用 id、param2：应用 key

// 获取链接列表


		});

function submit(){
	var Article = AV.Object.extend('Article');
	var Article = new Article();
	Article.save({
		orderId: $("#orderId").val(),
		goodUrl: $("#goodUrl").val(),
		plice: $("#plice").val(),
		userId: $("#userId").val(),
		goodNumb: $("#goodNumb").val(),
	
	}, {
		success: function(object) {
			alert("保存成功！");
		}
	}
	);
}

function read(id){
	var query = new AV.Query('Article');
	query.get(id, {
		success: function(post) {
			// 成功获得实例
			var title = post.get('title');
			var intro = post.get('intro');
			var info = post.get('url');
			
		},
		error: function(error) {
			// 失败了.
		}
	});
	
}

function upDate(id){

// 可以先查询出要修改的那条存储
var Post = AV.Object.extend('order');
var query = new AV.Query(Post);
query.get(id, {
    success: function(post) {
      // 成功，回调中可以取得这个 Post 对象的一个实例，然后就可以修改它了

			var orderId = $("#orderId").val();
			var goodUrl = $("#goodUrl").val();
			var plice = $("#plice").val();
			var userId = $("#userId").val();
			var goodNumb = $("#goodNumb").val();
			post.set('userId',userId);
			post.set('orderId',orderId);
			post.set('plice',plice);
			post.set('goodUrl',goodUrl);
			post.set('goodNumb',goodNumb);
      post.save();
    },
    error: function(object, error) {
      // 失败了.
      console.log(object);
    }
	});
}

function deleteA (id){
	// 可以先查询出要修改的那条存储
var Post = AV.Object.extend('Article');
var query = new AV.Query(Post);
query.get(id, {
    success: function(post) {
				post.destroy({
				success: function(myObject) {
					// 对象的实例已经被删除了.
				},
				error: function(myObject, error) {
					// 出错了.
				}
			});
		},
    error: function(object, error) {
      // 失败了.
      console.log(object);
    }
	});
}

function getByType(){
		$("#list").empty();
		var query = new AV.Query('Article');
		var id = $("#userIdInput").val();
		if (id) {


		query.equalTo('userId',id );
		query.find({
			success: function(results) {
				console.log('Successfully retrieved ' + results.length + ' posts.');
				// 处理返回的结果数据
				for (var i = 0; i < results.length; i++) {
					var object = results[i];
					var item = '';
					var cTime = object.createdAt;
					var date = cTime.getMonth()+1 +'/'+cTime.getDate();
					if(month==""){
						year=cTime.getYear()+1900;
						month=monthToE(cTime.getMonth()+1);
						item +='<div><span class="year">'+year+'</span><span class="month">'+month+'</span></div>';
					}else if (month != monthToE(cTime.getMonth()+1)){
						year=cTime.getYear()+1900;
						month=monthToE(cTime.getMonth()+1);
						item +='<div><span class="year">'+year+'</span><span class="month">'+month+'</span></div>';
						
						}
						
					
					
					
					item += '<div id="'+object.id+'" class="item">';
					item += '<a ">';
					item += '订单号为：'+object.get('orderId')+'</a><span class="date">'+date+'</span>';
					item += '<br><img src="'+object.get('goodUrl')+'" target="_blank">';
					item += '<br><span class="intro">'+object.get('plice')+'元 x '+object.get('goodNumb')+'</span>';
					item += '</div>';
					var data = object.createdAt;
					
					$("#list").append(item);
				}
			},
			error: function(error) {
				console.log('Error: ' + error.code + ' ' + error.message);
			}
		});
	}else{
		alert("请填写要查询的用户ID");
	}
}
//月份转化为英文
function monthToE(month){
	var monthStr="";
	switch (month){
		case 1:
				monthStr="Jan.";
			break;
		case 2:
				monthStr="Feb.";
			break;
		case 3:
				monthStr="Mar.";
			break;
		case 4:
				monthStr="Apr.";
			break;
		case 5:
				monthStr="May.";
			break;
		case 6:
				monthStr="June.";
			break;
		case 7:
				monthStr="July.";
			break;
		case 8:
				monthStr="Aug.";
			break;
		case 9:
				monthStr="Sep.";
			break;
		case 10:
				monthStr="Oct.";
			break;
		case 11:
				monthStr="Nov.";
			break;
		case 12:
				monthStr="Dec.";
			break;
				
			
			
	}
	return monthStr;
}

//--------------``账户操作
function register(){
	
}