	// 文章类别 取中文
	// articleType 1 :前端 2：Java 3：android 4:ios 5：SQL
	function getNameByArticleType(number){
		
		switch(number){
			
			case 1:

			articleTypestr = "前端";
			break;
			case 2:
			articleTypestr = "java";
			break;
			case 3: 
			articleTypestr = "Android";
			break;
			case 4:
			articleTypestr = "iOS";
			break;
			case 5:
			articleTypestr = "SQL";
			break;
			
			default:
			articleTypestr = "未知的类别";
			break;
		}
		return articleTypestr;

		
	}