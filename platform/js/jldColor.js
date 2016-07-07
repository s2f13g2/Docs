	// 文章类别 取中文
	// articleType 1 :前端 2：Java 3：android 4:ios 5：SQL
	function getjldColor(){
		return colorArray[getRandom(colorArray.length-1)].color ;
		}

	var colorArray = [
		{color:"#96b8ff"},
		{color:"#adff99"},
		{color:"#ff9494"},
		{color:"#fff199"},
		{color:"#b863f2"},
	]
	//取随机数  n以内的
	function getRandom(n){
        return Math.floor(Math.random()*n+1)
        }