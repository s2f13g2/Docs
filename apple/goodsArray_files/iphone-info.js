	var iphoneSixArray = [
		{id:"100",name:"iphone6",wangluo:"移动2G联通4G电信4G",neicun:"16GB",wprice:"3500",gprice:"3600",bprice:"3400"},
		{id:"100",name:"iphone6",wangluo:"移动2G联通4G电信4G",neicun:"64GB",wprice:"3500",gprice:"3600",bprice:"3400"},
		{id:"100",name:"iphone6",wangluo:"移动2G联通4G电信4G",neicun:"128GB",wprice:"3500",gprice:"3600",bprice:"3400"},
		{id:"100",name:"iphone6",wangluo:"移动4G联通4G电信4G",neicun:"16GB",wprice:"3500",gprice:"3600",bprice:"3400"},
		{id:"100",name:"iphone6",wangluo:"移动4G联通4G电信4G",neicun:"64GB",wprice:"3500",gprice:"3600",bprice:"3400"},
		{id:"100",name:"iphone6",wangluo:"移动4G联通4G电信4G",neicun:"128GB",wprice:"3500",gprice:"3600",bprice:"3400"},

	];
	var iphoneSixPArray = [
		{id:"100",name:"iphone6 Plus",wangluo:"移动2g联通4G电信4G",neicun:"16GB",wprice:"3500",gprice:"3600",bprice:"3400"},
		{id:"100",name:"iphone6 Plus",wangluo:"移动2G联通4G电信4G",neicun:"64GB",wprice:"3500",gprice:"3600",bprice:"3400"},
		{id:"100",name:"iphone6 Plus",wangluo:"移动2G联通4G电信4G",neicun:"128GB",wprice:"3500",gprice:"3600",bprice:"3400"},
		{id:"100",name:"iphone6 Plus",wangluo:"移动4G联通4G电信4G",neicun:"16GB",wprice:"3500",gprice:"3600",bprice:"3400"},
		{id:"100",name:"iphone6 Plus",wangluo:"移动4G联通4G电信4G",neicun:"64GB",wprice:"3500",gprice:"3600",bprice:"3400"},
		{id:"100",name:"iphone6 Plus",wangluo:"移动4G联通4G电信4G",neicun:"128GB",wprice:"3500",gprice:"3600",bprice:"3400"},

	];
	var iphoneSixSArray = [
		{id:"100",name:"iphone6s",wangluo:"移动2联通4电信4",neicun:"16GB",wprice:"3500",gprice:"3600",bprice:"3400",mprice:"3600"},
		{id:"100",name:"iphone6s",wangluo:"移动2联通4电信4",neicun:"64GB",wprice:"3500",gprice:"3600",bprice:"3400",mprice:"3600"},
		{id:"100",name:"iphone6s",wangluo:"移动2联通4电信4",neicun:"128GB",wprice:"3500",gprice:"3600",bprice:"3400",mprice:"3600"},
		{id:"100",name:"iphone6s",wangluo:"移动4联通4电信4",neicun:"16GB",wprice:"3500",gprice:"3600",bprice:"3400",mprice:"3600"},
		{id:"100",name:"iphone6s",wangluo:"移动4联通4电信4",neicun:"64GB",wprice:"3500",gprice:"3600",bprice:"3400",mprice:"3600"},
		{id:"100",name:"iphone6s",wangluo:"移动4联通4电信4",neicun:"128GB",wprice:"3500",gprice:"3600",bprice:"3400",mprice:"3600"},

	];
	var iphoneSixSPArray = [
		{id:"100",name:"iphone6s Plus",wangluo:"移动2联通4电信4",neicun:"16GB",wprice:"3500",gprice:"3600",bprice:"3400",mprice:"3600"},
		{id:"100",name:"iphone6s Plus",wangluo:"移动2联通4电信4",neicun:"64GB",wprice:"3500",gprice:"3600",bprice:"3400",mprice:"3600"},
		{id:"100",name:"iphone6s Plus",wangluo:"移动2联通4电信4",neicun:"128GB",wprice:"3500",gprice:"3600",bprice:"3400",mprice:"3600"},
		{id:"100",name:"iphone6s Plus",wangluo:"移动4联通4电信4",neicun:"16GB",wprice:"3500",gprice:"3600",bprice:"3400",mprice:"3600"},
		{id:"100",name:"iphone6s Plus",wangluo:"移动4联通4电信4",neicun:"64GB",wprice:"3500",gprice:"3600",bprice:"3400",mprice:"3600"},
		{id:"100",name:"iphone6s Plus",wangluo:"移动4联通4电信4",neicun:"128GB",wprice:"3500",gprice:"3600",bprice:"3400",mprice:"3600"},

	];
	var iphone5s = [
		{id:"100",name:"iphone6",wangluo:"移动2联通4电信4",neicun:"16GB",wprice:"3500",gprice:"3600",bprice:"3400"},
		{id:"100",name:"iphone6",wangluo:"移动2联通4电信4",neicun:"64GB",wprice:"3500",gprice:"3600",bprice:"3400"},
		{id:"100",name:"iphone6",wangluo:"移动2联通4电信4",neicun:"128GB",wprice:"3500",gprice:"3600",bprice:"3400"},
		{id:"100",name:"iphone6",wangluo:"移动4联通4电信4",neicun:"16GB",wprice:"3500",gprice:"3600",bprice:"3400"},
		{id:"100",name:"iphone6",wangluo:"移动4联通4电信4",neicun:"64GB",wprice:"3500",gprice:"3600",bprice:"3400"},
		{id:"100",name:"iphone6",wangluo:"移动4联通4电信4",neicun:"128GB",wprice:"3500",gprice:"3600",bprice:"3400"},

	];
	
	
	
	
	
	
	//代码部署
	function ehcoSix(){
		$("#iphoneSixDiv").empty();
		var iphonesix ="<table>";
		
		for (var i = 0; i <7; i++) {
				
				switch(i)
					{
					case 0:
						
						iphonesix +="<tr><th style='background-color:#6b758d; border:0; '>ID</th>";
						for (var j = 0; j <iphoneSixArray.length; j++) {
							var goodID = iphoneSixArray[j].id;
							iphonesix +="<td style='background-color:#fff;'>"+goodID+"</td>";
						};
						iphonesix +="</tr>";
					  break;
		
					case 1:

						iphonesix +="<tr><th style='background-color:rgba(107, 117, 141, 0.9); border:0;'>类别</th>";
						for (var j = 0; j <iphoneSixArray.length; j++) {
							var goodName = iphoneSixArray[j].name;
							iphonesix +="<th>"+goodName+"</th>";
						};
						iphonesix +="</tr>";
					  break;
					case 2:
					 	
						iphonesix +="<tr><th style='background-color:#6b758d; border:0;'>网络制式</th>";
						for (var j = 0; j <iphoneSixArray.length; j++) {
							var goodwangluo = iphoneSixArray[j].wangluo;
							iphonesix +="<td style='background-color:#fff;'>"+goodwangluo+"</td>";
						};
						iphonesix +="</tr>";
					  break;
					case 3:
					 	
						iphonesix +="<tr><th style='background-color:rgba(107, 117, 141, 0.9); border:0;'>银白售价</th>";
						for (var j = 0; j <iphoneSixArray.length; j++) {
							var goodWPrice = iphoneSixArray[j].wprice;
							iphonesix +="<td>"+goodWPrice+"</td>";
						};
						iphonesix +="</tr>";
					  break;
					case 4:
					 	
						iphonesix +="<tr><th style='background-color:#6b758d; border:0;'>土豪金售价</th>";
						for (var j = 0; j <iphoneSixArray.length; j++) {
							var goodGPrice = iphoneSixArray[j].gprice;
							iphonesix +="<td style='background-color:#fff;'>"+goodGPrice+"</td>";
						};
						iphonesix +="</tr>";
					  break;
					 case 5:
					 	
						iphonesix +="<tr><th style='background-color:rgba(107, 117, 141, 0.9); border:0;'>太空灰售价</th>";
						for (var j = 0; j <iphoneSixArray.length; j++) {
							var goodBPrice = iphoneSixArray[j].bprice;
							iphonesix +="<td>"+goodBPrice+"</td>";
						};
						iphonesix +="</tr>";
					  break;
					 case 6:
					 	
						iphonesix +="<tr><th style='background-color:#6b758d; border:0;'>储存容量</th>";
						for (var j = 0; j <iphoneSixArray.length; j++) {
							var goodNeicun = iphoneSixArray[j].neicun;
							iphonesix +="<td style='background-color:#fff;'>"+goodNeicun+"</td>";
						};
						iphonesix +="</tr>";
					  break;
					  

					default:
					  break;
					}
		
			
			
		};
		iphonesix +="</table>";
		$("#iphoneSixDiv").append(iphonesix);
		
	}
	
	function ehcoSixP(){
		
		$("#iphoneSixPDiv").empty();
		var iphoneSixP ="<table>";
		
		for (var i = 0; i <7; i++) {
				
				switch(i)
					{
					case 0:
						
						iphoneSixP +="<tr><th style='background-color:#6b758d; border:0; '>ID</th>";
						for (var j = 0; j <iphoneSixPArray.length; j++) {
							var goodID = iphoneSixPArray[j].id;
							iphoneSixP +="<td style='background-color:#fff;'>"+goodID+"</td>";
						};
						iphoneSixP +="</tr>";
					  break;
		
					case 1:

						iphoneSixP +="<tr><th style='background-color:rgba(107, 117, 141, 0.9); border:0;'>类别</th>";
						for (var j = 0; j <iphoneSixPArray.length; j++) {
							var goodName = iphoneSixPArray[j].name;
							iphoneSixP +="<th>"+goodName+"</th>";
						};
						iphoneSixP +="</tr>";
					  break;
					case 2:
					 	
						iphoneSixP +="<tr><th style='background-color:#6b758d; border:0;'>网络制式</th>";
						for (var j = 0; j <iphoneSixPArray.length; j++) {
							var goodwangluo = iphoneSixPArray[j].wangluo;
							iphoneSixP +="<td style='background-color:#fff;'>"+goodwangluo+"</td>";
						};
						iphoneSixP +="</tr>";
					  break;
					case 3:
					 	
						iphoneSixP +="<tr><th style='background-color:rgba(107, 117, 141, 0.9); border:0;'>银白售价</th>";
						for (var j = 0; j <iphoneSixPArray.length; j++) {
							var goodWPrice = iphoneSixPArray[j].wprice;
							iphoneSixP +="<td>"+goodWPrice+"</td>";
						};
						iphoneSixP +="</tr>";
					  break;
					case 4:
					 	
						iphoneSixP +="<tr><th style='background-color:#6b758d; border:0;'>土豪金售价</th>";
						for (var j = 0; j <iphoneSixPArray.length; j++) {
							var goodGPrice = iphoneSixPArray[j].gprice;
							iphoneSixP +="<td style='background-color:#fff;'>"+goodGPrice+"</td>";
						};
						iphoneSixP +="</tr>";
					  break;
					 case 5:
					 	
						iphoneSixP +="<tr><th style='background-color:rgba(107, 117, 141, 0.9); border:0;'>太空灰售价</th>";
						for (var j = 0; j <iphoneSixPArray.length; j++) {
							var goodBPrice = iphoneSixPArray[j].bprice;
							iphoneSixP +="<td>"+goodBPrice+"</td>";
						};
						iphoneSixP +="</tr>";
					  break;
					 case 6:
					 	
						iphoneSixP +="<tr><th style='background-color:#6b758d; border:0;'>储存容量</th>";
						for (var j = 0; j <iphoneSixPArray.length; j++) {
							var goodNeicun = iphoneSixPArray[j].neicun;
							iphoneSixP +="<td style='background-color:#fff;'>"+goodNeicun+"</td>";
						};
						iphoneSixP +="</tr>";
					  break;
					  

					default:
					  break;
					}
		
			
			
		};
		iphoneSixP +="</table>";
		$("#iphoneSixPDiv").append(iphoneSixP);

	}
		
	function ehcoSixS(){
		
		$("#iphoneSixSDiv").empty();
		var iphoneSixS ="<table>";
		
		for (var i = 0; i <7; i++) {
				
				switch(i)
					{
					case 0:
						
						iphoneSixS +="<tr><th style='background-color:#6b758d; border:0; '>ID</th>";
						for (var j = 0; j <iphoneSixSArray.length; j++) {
							var goodID = iphoneSixSArray[j].id;
							iphoneSixS +="<td style='background-color:#fff;'>"+goodID+"</td>";
						};
						iphoneSixS +="</tr>";
					  break;
		
					case 1:

						iphoneSixS +="<tr><th style='background-color:rgba(107, 117, 141, 0.9); border:0;'>类别</th>";
						for (var j = 0; j <iphoneSixSArray.length; j++) {
							var goodName = iphoneSixSArray[j].name;
							iphoneSixS +="<th>"+goodName+"</th>";
						};
						iphoneSixS +="</tr>";
					  break;
					case 2:
					 	
						iphoneSixS +="<tr><th style='background-color:#6b758d; border:0;'>网络制式</th>";
						for (var j = 0; j <iphoneSixSArray.length; j++) {
							var goodwangluo = iphoneSixSArray[j].wangluo;
							iphoneSixS +="<td style='background-color:#fff;'>"+goodwangluo+"</td>";
						};
						iphoneSixS +="</tr>";
					  break;
					case 3:
					 	
						iphoneSixS +="<tr><th style='background-color:rgba(107, 117, 141, 0.9); border:0;'>银白售价</th>";
						for (var j = 0; j <iphoneSixSArray.length; j++) {
							var goodWPrice = iphoneSixSArray[j].wprice;
							iphoneSixS +="<td>"+goodWPrice+"</td>";
						};
						iphoneSixS +="</tr>";
					  break;
					case 4:
					 	
						iphoneSixS +="<tr><th style='background-color:#6b758d; border:0;'>土豪金售价</th>";
						for (var j = 0; j <iphoneSixSArray.length; j++) {
							var goodGPrice = iphoneSixSArray[j].gprice;
							iphoneSixS +="<td style='background-color:#fff;'>"+goodGPrice+"</td>";
						};
						iphoneSixS +="</tr>";
					  break;
					 case 5:
					 	
						iphoneSixS +="<tr><th style='background-color:rgba(107, 117, 141, 0.9); border:0;'>太空灰售价</th>";
						for (var j = 0; j <iphoneSixSArray.length; j++) {
							var goodBPrice = iphoneSixSArray[j].bprice;
							iphoneSixS +="<td>"+goodBPrice+"</td>";
						};
						iphoneSixS +="</tr>";
					  break;
					 case 6:
					 	
						iphoneSixS +="<tr><th style='background-color:#6b758d; border:0;'>储存容量</th>";
						for (var j = 0; j <iphoneSixSArray.length; j++) {
							var goodNeicun = iphoneSixSArray[j].neicun;
							iphoneSixS +="<td style='background-color:#fff;'>"+goodNeicun+"</td>";
						};
						iphoneSixS +="</tr>";
					  break;
					  

					default:
					  break;
					}
		
			
			
		};
		iphoneSixS +="</table>";
		$("#iphoneSixSDiv").append(iphoneSixS);

	}
		
	function ehcoSixSP(){
		
		$("#iphoneSixSPDiv").empty();
		var iphoneSixSP ="<table>";
		
		for (var i = 0; i <7; i++) {
				
				switch(i)
					{
					case 0:
						
						iphoneSixSP +="<tr><th style='background-color:#6b758d; border:0; '>ID</th>";
						for (var j = 0; j <iphoneSixSPArray.length; j++) {
							var goodID = iphoneSixSPArray[j].id;
							iphoneSixSP +="<td style='background-color:#fff;'>"+goodID+"</td>";
						};
						iphoneSixSP +="</tr>";
					  break;
		
					case 1:

						iphoneSixSP +="<tr><th style='background-color:rgba(107, 117, 141, 0.9); border:0;'>类别</th>";
						for (var j = 0; j <iphoneSixSPArray.length; j++) {
							var goodName = iphoneSixSPArray[j].name;
							iphoneSixSP +="<th>"+goodName+"</th>";
						};
						iphoneSixSP +="</tr>";
					  break;
					case 2:
					 	
						iphoneSixSP +="<tr><th style='background-color:#6b758d; border:0;'>网络制式</th>";
						for (var j = 0; j <iphoneSixSPArray.length; j++) {
							var goodwangluo = iphoneSixSPArray[j].wangluo;
							iphoneSixSP +="<td style='background-color:#fff;'>"+goodwangluo+"</td>";
						};
						iphoneSixSP +="</tr>";
					  break;
					case 3:
					 	
						iphoneSixSP +="<tr><th style='background-color:rgba(107, 117, 141, 0.9); border:0;'>银白售价</th>";
						for (var j = 0; j <iphoneSixSPArray.length; j++) {
							var goodWPrice = iphoneSixSPArray[j].wprice;
							iphoneSixSP +="<td>"+goodWPrice+"</td>";
						};
						iphoneSixSP +="</tr>";
					  break;
					case 4:
					 	
						iphoneSixSP +="<tr><th style='background-color:#6b758d; border:0;'>土豪金售价</th>";
						for (var j = 0; j <iphoneSixSPArray.length; j++) {
							var goodGPrice = iphoneSixSPArray[j].gprice;
							iphoneSixSP +="<td style='background-color:#fff;'>"+goodGPrice+"</td>";
						};
						iphoneSixSP +="</tr>";
					  break;
					 case 5:
					 	
						iphoneSixSP +="<tr><th style='background-color:rgba(107, 117, 141, 0.9); border:0;'>太空灰售价</th>";
						for (var j = 0; j <iphoneSixSPArray.length; j++) {
							var goodBPrice = iphoneSixSPArray[j].bprice;
							iphoneSixSP +="<td>"+goodBPrice+"</td>";
						};
						iphoneSixSP +="</tr>";
					  break;
					 case 6:
					 	
						iphoneSixSP +="<tr><th style='background-color:#6b758d; border:0;'>储存容量</th>";
						for (var j = 0; j <iphoneSixSPArray.length; j++) {
							var goodNeicun = iphoneSixSPArray[j].neicun;
							iphoneSixSP +="<td style='background-color:#fff;'>"+goodNeicun+"</td>";
						};
						iphoneSixSP +="</tr>";
					  break;
					  

					default:
					  break;
					}
		
			
			
		};
		iphoneSixSP +="</table>";
		$("#iphoneSixSPDiv").append(iphoneSixSP);

	}