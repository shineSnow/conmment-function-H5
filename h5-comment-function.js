/**
 * h5页面开发常用工具库基于zepto.
 * 功能函数：
 */
(function(window,$,undefined){
/**
 * [setCookie 设置cookie]
 * @param {[type]} name [名字]
 * @param {[type]} value [值]
 * @param {[type]} time [持续时间]
 * d是天数，30天则：d30
 * setCookie("name","hayden","s20")
 */
var setCookie=function(name, value,time){
				var strsec = getsec(time);
				var exp = new Date();
				exp.setTime(exp.getTime() + strsec * 1);
				window.document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

var getsec = function(str){
				console.log(str);
				var str1 = str.substring(1, str.length) * 1;
				var str2 = str.substring(0, 1);
				if(str2 == "s") {
					return str1 * 1000;
				} else if(str2 == "h") {
					return str1 * 60 * 60 * 1000;
				} else if(str2 == "d") {
					return str1 * 24 * 60 * 60 * 1000;
				}
}
/**
 * [getCookie 读取cookie]
 * @param  {[type]} name [description]
 */
var getCookie = function(name) {
				var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
				if(arr = document.cookie.match(reg))
					return unescape(arr[2]);
				else
					return null;
}

var delCookie = function(name) {
				var exp = new Date();
				exp.setTime(exp.getTime() - 1);
				var cval = getCookie(name);
				if(cval != null)
					window.document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

var getQueryStr = function(name) {
	var reg = new RegExp("(^|$)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null) return unescape(r[2]);return null;
}


window.we = {
		setCookie:setCookie,
		getCookie:getCookie,
		delCookie:delCookie,
		getQueryStr:getQueryStr,
}

})(window,Zepto)