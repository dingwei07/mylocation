window.onload=function(){
	function getNowFormatDate() {
			var date = new Date();
			var month = date.getMonth() + 1;
			var hour = date.getHours();
			var strDate = date.getDate(); //返回那一号
			var minutes=date.getMinutes();
			var second = date.getSeconds();
			if(month >= 1 && month <= 9) {
				month = "0" + month;
			}
			if(strDate >= 0 && strDate <= 9) {
				strDate = "0" + strDate;
			}
			if(hour >= 1 && hour <= 9) {
				hour = "0" + hour;
			}
			if(minutes >= 1 && minutes <= 9) {
				minutes = "0" + minutes;
			}
			if(second >= 1 && second <= 9) {
				second = "0" + second;
			}
			var currentdate = date.getFullYear() + month + strDate + hour + minutes + date.getSeconds();
			return currentdate;
	}
		
}
