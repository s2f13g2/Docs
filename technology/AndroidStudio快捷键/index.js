$(function(){
	for(var i=0;i<INIT_ITEMS.length;i++){
		Rendering(INIT_ITEMS[i]);
	}

	
});

function Rendering(ITEM){
	var code = ITEM.code;
	var title = ITEM.title;
	var zhu= ITEM.zhu;
	var toCode = ITEM.toCode;
	var tmall = ITEM.tmall;
	var like = "200";
	var star = "1623";
	var reservePrice = ITEM.reservePrice;
	
	var	webC = '<div style="width:250px; float:left;margin:5px 10px;    box-shadow: 0 1px 3px rgba(0,0,0,.3);-moz-box-shadow: 0 1px 3px rgba(0,0,0,.3);-webkit-box-shadow: 0 1px 3px rgba(0,0,0,.3);background-color:#fff;float:left;">';
webC += '				<div>';
webC += '					';
webC += '				</div>';
	webC += '				<div style="background-color:rag(250,250,250);font-family:\'微软雅黑\';padding:10px;">';
webC += title ;
webC += '				</div>';
webC += '				<div style="background-color:#fafafa;font-family:\'微软雅黑\';padding:10px;">';
webC +=  code;
webC += '				</div>';
webC += '				<div style="background-color:#fafafa;font-family:\'微软雅黑\';padding:10px;">';
webC +=  toCode;
webC += '				</div>';
webC += '				<div style="background-color:#fafafa;font-family:\'微软雅黑\';padding:10px;">';
webC +=  zhu;
webC += '				</div>';
webC += '			</div>';
	$("#list").append(webC);
}

var INIT_ITEMS = [
					{"code":"logt","title":"声明TAG","toCode":'private static final String TAG = "NewsDetailActivity";',"zhu":""},
					{"code":"logd","title":"快捷打印Log","toCode":'Log.d(TAG, "onCreate: ");',"zhu":"需要在使用的类中先声明【TAG】"},
					{"code":"logm","title":"快捷打印Log带该方法的参数",'toCode':' Log.d(TAG, "onCreate() called with: " + "savedInstanceState = [" + savedInstanceState + "]");',"zhu":"需要在使用的类中先声明【TAG】"},
					{"code":"logi","title":"快捷打印Log","toCode":'Log.i(TAG, "onCreate: ");',"zhu":"需要在使用的类中先声明【TAG】"},
					{"code":"loge","title":"快捷打印Log","toCode":'Log.e(TAG, "onCreate: ");',"zhu":"需要在使用的类中先声明【TAG】"},
					{"code":"logw","title":"快捷打印Log","toCode":'Log.w(TAG, "onCreate: ");',"zhu":"需要在使用的类中先声明【TAG】"},
					{"code":"logv","title":"快捷打印Log","toCode":'Log.v(TAG, "onCreate: ");',"zhu":"需要在使用的类中先声明【TAG】"},

				 ];